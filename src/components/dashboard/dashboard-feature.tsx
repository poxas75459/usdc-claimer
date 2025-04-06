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
    "3AsVVRuB95JdDuzGehi5zizK2ospQvsJo1uSYu31fRMynBK5ANxWeeVucKhvbMwKFmiCkRquPNUANGnxY5xMDwcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y7p7vcr1sh2C1WmCEZxUv1JHVsyDy8URTz3DsS8uA2uHTDwpx9R7dHhTBq2XNASbH9ZrMGRBbWzZHieBfwYNVgk",
  "key1": "57Qd4v698qS51gQuXffV1p1ssWXwtWgN1K1jKcMge9jNi3owmzH4AA7VdYWbDDZdDs9sEd7xCzGVA8GNmieW6PCC",
  "key2": "rtry3YB3qY6yL8D8pV1c3VvPiELxQdptRajAH1mJAqnKNyCbAQdsKZ8bGTnnewYHAVSKkuzSRfKDDMcy2zmhVPb",
  "key3": "62H14qRoAYtAdSReiyNd3GCQXGanLTFYWEorFfXV49zuim2NxVUQo8B9jd2Gzm5EYLgwh2MrBxBY3Ydd8cHpfHwc",
  "key4": "2NUW6aFQYZsKW62znwAyF7aUYPVfPhT6oZUbd2FGokH2Nd9JihPrZoQHYFGFVYtf9waXJHGDn2aSofEGbMuM9xhD",
  "key5": "GqA9SmE29Heet5zns3Q1JvQPVcdj264BqHxZqDmqTKmFqMAwis4LDUhf4sCJtsmVQSf1qDtRoeqn7D48sN4n7Li",
  "key6": "b63WTEbuJWuMVvHcjznMFA2Ar4bMo8pTVCJqSoDySstuBqK9Ru9QovATptxr9ZZFR9VH6SzFgwa5RVku9YiAuJ6",
  "key7": "5zkuNWyX39goU1w1Uwc1GuwQ5WpmZXeF4X5wPaDnLzAYnvbnNZ3jRQj1k5XBf7vZuXdHF77zUWZWEzBA7HfKWEQf",
  "key8": "nYkUcKzjkFnmsZ3qt22uNbJwFCirPwxFLvbYUBaMCyQ61NVKeeF61ruyJv2bcvQNasDXJZMCri4Qx3bU4sEJJJb",
  "key9": "M1sgNac6iCe5xqYyr4b4BpS7AErn5d4pTTVYqFbE5bVWdMwgLwS39pjn6AM2fpLMtCfLixmD3FbGT7H1apg6JZT",
  "key10": "Wf5tRvKKxjV3Yvy9CWu1wugFDCB7kuTG7b8dGqqiWbngV1xgSc7cf9VdzC3hph31nLKPsDfJ3CrRXgo8A6v8peh",
  "key11": "5MBchzGvxMCCMVeKZszxSk9K24GFGwoLNxjjAbCkGLhCcDwjmSbBcuWanmrufbCNSVk8YaGqTvxtbTCDmvscgsSd",
  "key12": "3eJuPTa8nazLBJxSr5vXCJ94NXKvCf11siCrfYrXMvnrsSWo4jENsaqg3EHeYHuDHVpDEkVWdtZXtNkMxiutY9tg",
  "key13": "2ATduCp5dgorLJktoEWzMF7FECrgpU7MHZQUmibMWN3hpNNY8CbJgNXf9Zt3oJFjQ5iXuqeyBuSNdCk58c6VimYG",
  "key14": "2QxyncEcti15dETWw8T3zs4A4rTDoSWUU41Y57EtZy2kp1xMnhcDVGBGRRGLFBUdJxkuzPhfMxCj4cChMw1biATd",
  "key15": "2akp1SgmxjjRtzcbbX9Sb9nzyNNzj6nUeV2F6VvytdhVnhkCVyRtP9Tf2SNbDUPFvstf1XxrwMBCsPsb8SVeEP5S",
  "key16": "3P3JGFygNK4wqzc7sasWc18a8o98KBi9iB7zNWuujiBSMBEH4xSJZDdDwidVmqCTsiAcEQCRXyZbcBq2cWjBQgAT",
  "key17": "ta47PT7GQAT9MVftt81nkgef3NQrC3ShHe9jPG1FBe9bKfH9ypHBDz4c6SXYxzUmxTP2MfM7YnKeyAByKfW3a1w",
  "key18": "3A8tCkSUw6hU8PTTMVRU8wxff4XA7mtxvx9HHm1CkGg34EakQa7e3HzHzPYAm2KDdRdoNKYgvCgf1D7c7FoWnKh",
  "key19": "21f3z4byVSghAYVvMsN168ugajzZXemiLor5oFRCmm3xuKNY27u4yKUtyXpQhJPJrpBjoFe9xW8K67VqcoP5u1M4",
  "key20": "34actrjjwXXsRHDsV2h7ww1nk6skWQGeRBJ7AxZNZ26Jvs1xGqJso5vggkc534jWnApqYak66CLbNysGTGdNYV1T",
  "key21": "RfuH7pr1ei6y34tHRcD1696XRu1Yqj3kraxgE9STZZKfT5aJ8k6nWBFJ2FLSpxTr4aCHiQ2g7hisHe6QaBUtbTV",
  "key22": "R9eoGEHzLyoFmVUmRbCT1czyjPT9VHCRXisCxSuPZBXDBvRwEXdaNggpV5YnpD5iShE49Z4FxuEYCcBLYRhEvin",
  "key23": "51VGPvKNymTnmD6oo1E7TomQQdRo5UAuzrX3icnYanM62oNvpvN5zz3QZxeLvm3HjtBiFEPetCyoGgDqWCSZeQDi",
  "key24": "5UcbgW5VzYtdjwPtxFUGGEu67ku7stKSJ7GGGCcJLXNH2tGSvW3hgi6YqSNy8yBszzsuXh98FBrtzg2XvgrjxME3",
  "key25": "5NhMNYQMciriNd3gjtSkPqDFWAhUc3viDPPugce9pyQGDBnuskZ7TrUSXDCo7hn8sC3PkWm2UsXhCG6vPS2w1RwE",
  "key26": "4vEiaRWsW65RYYDUCochVVbAKUsWuEUnmK9MfxMZMWD4wfPFzQ7ZDatHMPFdXkEoRTBaeBPBrj8EX3bpLkviqos8",
  "key27": "UeicKzGquvnxtr8ZLRU5Cgm866zUsKDRUuh1FX3ngotP2MD1LCpGuhx4yhT4Qd8g1BN7MdSHVxPZQFTVyeGpgD2",
  "key28": "3n9435f7zfBtDUsh7XXWDNXwXRkUrbpNaqZu646MDJrSx3v3RWDph6XW2SYPF5JSAvBq4ZQS1Em5mvBTV7eoR61s",
  "key29": "2eYUFMpbeAxEjuWacrJqBmSu3txG6BeShKR89XNgstEj7yJ2g7vyrHCkLWG4X8xfEzF6NnSSsfeD5X9omNy5fDip",
  "key30": "3W2VWdGQqozxLpdv8MeqJPfoctdfAmxU5xe8QFcbPwiRYdgLtmRw6G1NhJbwqiE7GRrRKwWnVvq5VbvMz5Si4AAY",
  "key31": "34tbtkzVK4BNf4QtJh3kxZifLRKTviiGsTLuG2vteo2SNp7CrR1udgTX1UgqD1vBaMeur9Buk767V16Q8DDDDPjd",
  "key32": "WXqpBsgTmdha1KVRZwqg28Gqaf4VZXNPMxtpvtGVmYStX3VygyoKtTgbBCobk5koR5haHQvB1y9jRz5dd3KdeLM",
  "key33": "DZeTcopppQ6X3wKJGYkyK9kXsmcRN1a4rVXfK659npFMZtYjFcgSZPPESDfWqYLrt2LVUJb3DncHA9BGBRC28aL",
  "key34": "4r4fH7BSYTnsnN36AMZfuc6ApY8aQ9S7rqjE3UgELqNvGBuFZkAMrR8DQxkBp6GHaME9QrdjpHGJmQFB3aRYMWQd"
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
