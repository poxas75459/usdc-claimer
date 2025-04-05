/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "d8Tke6ZApbzuhLbq5QCPW7GfMmm2TZR6HsCp8aH7Q9tNHrmcgWzmRiwV2TfRns8ebFMb6cao8c4HkjJywEcHzNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yCK7CMRz917dgjjipX5RKChCoKTfwd84MhLh94mwvus5yhA1ruSQaSYtAoP6K7n1xEPpN5iE4jUCuW16eKZ2KXu",
  "key1": "4dLe2WmaVsoZLzHKFJJLqWDpbvvoM1PHPciTLZ6QdKDnKovRiVUV5BquGa25wum5RH1WEi1AbZgAiyCkKZPGUYCp",
  "key2": "2y7tFWyiSJPBnMxyJX34GE3ZD3jkZ8SyMvyxAENdBgqdjzeiBeEgL5Vz2muH3FWrmdxAaYaGULBHahfFJAGqMRA8",
  "key3": "4HL1tAadCh4znDSovHMJP4w854fW7Rrc1H9sgVe7DWczc1BxQmTrSX6J61fzZ7vmjzuATnsafQ8BP8W4f2hVCiwt",
  "key4": "55iRf96KLzMqVeWSrYorEpo63rFsJsKuQDr85At9JfZ6enN8jFae1gedzR2VqqhgYPNnQtExzn3cTi7cqEALjt7H",
  "key5": "3Xz6p8CANr2yCS3TUNpTooCGKnVZkoJsjzSW3R8z2fuaknyGsy2yoMru2USf9bdXa6rSkgUairPnReAgBMvczgtH",
  "key6": "5ndHVX1wsX8HFcm5VCuQA7KNyQD8d7PeL31c1bUwVP2Sb77wEr5wk3Gkw8AuGVJSWnJ1A23jMq3BKtkJY3qjt13V",
  "key7": "2mDoqVep9UdfaEvEsyLphnMwccSyY8iBtyrzBgGPeq8DK7stkRSTyvGFuKR93qtiBVPhQSzoB4TxSEV9ZdyTgLaX",
  "key8": "5aCpGaxZT1ueLkT1MHBnHBPQoqsEnNud8Z4nvvhw1Atk6RWnUjC4XmgufDXZcJus2vSfCGKBWhcRh1Q94dSUo8X9",
  "key9": "56pg1qyTgFUuNpLRadpWsab6MRLPCEYCrZtjFFHj1P6HFF1yZEgvBZKRDCAYiJCSWQV7zDJeZFXPKrAEWSboWzEE",
  "key10": "66jjpE9U6Kf3EiZ57g7Tmr6YZ5pLNq6GNeU1x2CwAXZTP2V34DrCUMLGQ5tFWjnt8HkeWmoTPnesAFN7We6DedyD",
  "key11": "5Kwof5ZjCf6c8oMf8V2CP4JbuAKUejeK1T73yDDpApY3BTyByNcWMhKiumBoAzz5y2pVXBTCpK4v4eJ8xzybemeq",
  "key12": "4tm3DPTzcxk7sxKibBToRj8jq9rEwwfnXcPDwrCPggAYfD5aei9a6m9vFYVDCT1dB987suuPwmQK6qdACmeWamCw",
  "key13": "2HQshQ9kcBShvT53gdAHaAnE9piGv6YSGU4Rth4xLE2PTFL9d1A8iWw8S78YruvCPtQhrfKouvNAaxL82aYy4mRt",
  "key14": "2uCk8ADCNksg9DQ1gMyudBqr8m7bHEMGaUfRoegpuXMpS6iHUgxgUwFqwV8ZsAJYC3Tk1NcbZHhYe617PJsW4PBY",
  "key15": "33irnNK6nhYwGtvkbrfAPWk84NF4R7YGEsuQsmYWCX3K4wfvVH34UT7tmwdXrmESuPQeS8Ff1qLK1cqmf84D7iFz",
  "key16": "4Vke9a5rCCa2qhQ9HDuobx2y3Bk4DYwnvq4AZCoVfsS3c3bh4qd742HHeiNguWFsmKk2TFV8p3DdbLR6oqspZyse",
  "key17": "273JKyFEto2PTpXVD6LvsKiSNJsBqxUSZc2TrSpXFQzdD3xGRwvNXEz27h54BCaBwESDpomKMphAZkBwi9ujupyv",
  "key18": "5id9kvVsanUZ3XS8vsThzmcVasevghPKdBdRHQKg6skPp2jcgW9REFzLopzxWCGHRXp9bxPRaU9VfAcho4hQYqnH",
  "key19": "2z99AxsXt5R53AvcZ9Xk3dHUCuec5nv4p4rTjrZJwRW4waZSdnH1E6f8ih7gXuCMhzVfJX11mnef79wXPC1h5Bhh",
  "key20": "4dR3kRt63bnzcqeD3hvo8VJpEwYXX65dPYNN66EgFVHkkmPsbdAQ1rD5xZdhrMseQhYcwAzkykawAM7v2wHK2ubj",
  "key21": "SGDQZ2gUBrLzhBtNPkacLhFDbxeAZsz7hDtnAU5EHyx2BTHngnbGUHsBFSWHmK4JihtEixjS6JWq6FkBUKLTBpQ",
  "key22": "2dkTABVFfbxwYFDzqVkiCuFCJDrVZcu4RVS1p3En2jHnKzNfaFH4mjNfWDfD8rgHhe2VPRnDq5eQ5sZVAJE87EMw",
  "key23": "2noDnwC8egFLgvWYxZWnP15LqShSswFGen9NHozD1bcRJPH6qaNxU95uKMKpqDTSLxxcGHRMcMKK4cjGzoyxsYjV",
  "key24": "4M3px9183rAXxcTyUUf68Boj9JPEhftXkPkYcC1ei92kWk5afF1pxAaR12vpu9ccLPH3gF14V21z5R2uvU5v29CL",
  "key25": "2A8g36BT2QPhEMphkoevL5tDfm9V9e6EgKf1D2bmRRiHGjioShcwzy6UfyRJrM249U6B3mTAqmAYHVyG5Ttsc8j3",
  "key26": "38w7kqXhe16qdEsocPKCdsAzACdzbDYc5duHuTQUzSGj24puwA6LkdGDzFSj2X7z1HMvf1JtQrSbJnSSqTJStHXu",
  "key27": "39cNZVTcLNKNuQ67gGGRQ1MgzHa7n8ebG7TRUmUKNSKEbMppKfFpP1GiFDwpRB6vY6FYzThe6id8ZQFYCgBWPanG",
  "key28": "5Kowx2TjRWkNmPLZpaiHi4ceCcCz192c8juLHDSDhiEAGPnFYTgoycvQBtZb61cAdietEwUXkD3a88vThm3W2AS1",
  "key29": "33bSYPWEe4Dyjneax3bbbBRd72jWkX9Q23WHaoqoDn6Npb5j98fCexJyvRM2fhQaV6isMBGfyNor9jBzto5oyrZc",
  "key30": "34UUhyeF7p396YaoGircbQUVKcdUvKyM8d7dyvVcoGyVwTPcQKLS5x31N8BEKJ4YQCRfjAYFRHcSuDmGExatJ1HH",
  "key31": "3bg9XEaa5HXti4tArKp56t8AnK1GQsMyPgEPrANvqXVcBAK8BaiB3ytqioLhqrQS5XGBxVGhSnNgh9GFDYjxwm9x",
  "key32": "2XCDcUqxo1Htm9r6LmhvwHbLoPxWrBbsxUGKbPMuzP6qYWFzoKkEt98BaGpfQ73FZhyVPgdjAsy44pm2YCejb9cs",
  "key33": "B8yRgpmFMAZ2GfpsvnnJP2cbfCHhFY845tw62nfYXQZX1cmnX2dr65NDbBSa9nTfEu8S8daiEZYznETdXmeQND5",
  "key34": "2aAEjtk6BAbNEa85GLQByB1Vb25GD8cDkbRqD6wZYGQei5ksC52vJmjv5Bzmk4WRbXYDPJpj4MQmRsgc7HtXKW1s",
  "key35": "3ZruivnFop1tEnxToGkyTv8tA5j6sUzniH5YKh82g3BhUB3Ds4rU7RSLE7WCQR7RxLZJtCMCcvZHjFqaV7uXn2vx",
  "key36": "3NgLfjH6a7VNba1PN4n6ybC4Q1LPb9djLFh87yUmkjmG9g9JsFeDS2YgEDhjumNajWrhdbHwUaZka9CdBXeScE9"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
