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
    "JyBa8SNXzwzx7nKrXbpTuQJhkL37hAZ9vPQJvCZ9TWqJe9WYAJ75gC8pTuvPdLe8AaiXvTqETzfP7xMSJm9FJUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KZkmgzZMxmLT2kALQZ3s5UmM3xWfHj667MMTBXYHfwYCXwoKNUYp9rcsw4HzUUMrp8WD1gWjGjnLoaYyTKp9i8p",
  "key1": "2nY5BzJso5o7Abhzo7Qmkjf15Ws4uMhZdJu3vURKGWKhPp2deenDS3JuxpNQo2DnEoQ9Y7D75TXeaKdk4fFcCjod",
  "key2": "5VRnmKjuk1Uq95w4njeo7uzQbV2RSuf2yzogy3xeSjV8HaTCKNYgJoNewuLJ7mxGkHRNygAhZ75EgKHbDKjxwoZw",
  "key3": "4hGqzxKvNquoJZc3cBtC49VN1cEajR4am4ZEzb363co7QMPnXCuDiXkJqGG1YznYceJJaNRZ4KS7bAwacKUoGtFX",
  "key4": "446oYRwF8ZeJY6wSEkaiZFQei45KD4d7F73hoSEAd5xTZkXMZ6LfaUvZGfv67DEn817FycyyNAb4mV5HNQkw3dZT",
  "key5": "2EGk8ihf9uoEH53tigMwgGhHkBwZZSp4G4nkFVYtg8tL2NyqCVJK5ihpD65ZbfCuZ3JQExLBEYGzdn3XgYkNvqDA",
  "key6": "4mwYiMn84KeDsgcFEW9LDgtRiEFnLnUZLek9J6R4qgcBr5aMo4aetPsv6FYoUBTRZk2ZdK8Z7PrngjTD2cG7BgKn",
  "key7": "3GhMbxfMMaDYo2QMMiATYchAuLaniqSRheDFx4z13Ypsgi8NW5qSiY9VgnAYN9BLEn7tSqKLvB5XFjvhojaUHA4M",
  "key8": "2sx1T35Rb9Q2tuU2NkcoXND8pQg2hWDqsFP7KawtJj5JMMxTxNAbsxAHEXjVAzzNBJBPYbJ7GyYAvYT6MLxXqn8C",
  "key9": "4CybY3mDCFzFFZbbRC9Avkc54zWpug3vGzZg4agcUoiwAzA7P33zApGJjX1fUnVRbFqaK5uJdAhyctJhg2PyKWkY",
  "key10": "5f69FHNrNmNdSqbryEvRM44HmcSyrkFb34Wc29s2FX1qnKobZP2BcwZ7GuTReL65wWhSCyYRiJyBpybccXLr8C4t",
  "key11": "3LJVTSaNiHT7nzkkEHid93jMKVahcg4ozFtHCmL3V47x9hpuL8fSUMLLtSTjmc3GYoMmX4DbtAUT7gq951rYnGX9",
  "key12": "3Qf5QJWG8fJ9Myo449zbCmpRVrAFjLDVToSdUstLUZ4unrUrGfEuYPB6hgapxLG7PqJyC72mod76KKBmYf6ZimqT",
  "key13": "445jqkAa1uQWhZ9XkNBccD4hhWoib2hFzKnk21NRhRM4N3SKJ9s3rkLmDhrxSW2CmFaNKwFf4VCUwaWLEGbSxdWr",
  "key14": "22JSgEvXnvNdR8gdWTRynW8UP8rPJ8PL4kZwhWgLhbotjpB18Dkc6hk3KLLVcdFcRSPPWdLQGRbjgfBFbq1zWdk9",
  "key15": "5tvVc5v5sNR9PGrGf9dPePopAf76FKe3oaFD5Jr5op8gp6qRVVmFVm2yTkojMqApNXvSTgAyXRBq7ytS7vDCn8oM",
  "key16": "o8wWt8c3eawQj1XPs9FFYAr9NuirD8K7ifLQScodaudkrK9WR4fZvgkPyqKLiKdHrkQfgPDXjQuSZNVU3bVvTf1",
  "key17": "3DioKn7AS8gGewiPGyBFUG3L1MtJmmWHLkWN3XLWVqDnYk3rDt9AzxUENHokfs8WyxpyDL1GyqPhYGSDFUzi1HJo",
  "key18": "47LFrXrrpLxhz8QTRfxRWZu3jKdL1LhbZATphs5n1hGATCsr4wq3ZXsvX4sJeLDafGEFVNqeqMg9Evjyiv7a7Usj",
  "key19": "3QkYacc5igPnaQD7vGefs4ThA9S56RFTvHA6e29fPEKqd4ASqjQMKit7cAgHt7uzLqFwDvA94t59TVcYoinNgiSy",
  "key20": "2zCKt5JS7Wj8fRndf7rscHgohsLDMhbT8unPFZYP92wwDLQJ299tRMQv2Lp92fcpT1SJZMV2z6w1mzLfN28APYCk",
  "key21": "5P2cKKoQoV3UbHhRA4JDPenarLLC1Me2K8qt4YFWtB5btp42B2X4qBZnfv5fwjdCPLfgR8Sxbzbuf2sz77HJWtom",
  "key22": "5pNZhmWVaHcdarDGV92HE1LKMwLUJWVAFmrKnd654eteHTDVXi14BHueL1HYohDdbX4SXqiXUpDKb4P7DnqwnAAi",
  "key23": "3zsBeJQpYyjSKpRogLyD9hQmgnunCG1aodR9brPGtzLPEZvwkBeN7icpN73fogeUFV2BwrZdX8SyXTq8ty2kobqh",
  "key24": "4wPeuJCUFbR8wcW7rM87WeJ8ogQEygmtCUhMUNWYfgdNqUKFqUPP1ifF3eNhveF6pYHiUqDKWjNDrUCoQjNc4BAN",
  "key25": "4WcBX3NsZR86gmYRUAs2ugXjYXXKeLL7P5PEBfHPyCXpjDv8SMN6UR1JBFW6SS3jNaNhzh1veZr8NuKA2P9Roifq",
  "key26": "c7D8E43JVpJSEFWBvphBE39Fjow84zt36mo8J1oJoWJCRb5UL4eAu1p8HjUF4xmH8g5nLZmZXH7BF1xNLfFcgJE",
  "key27": "VZR9h5E6F7ECNuvKrm3a2CDvdgbiiS6dKZ3xLWgva7JHngq8PKKPtHmZxuHLxK7BMzciGAyqQBcBE7Jq16w4sFc",
  "key28": "2esFJ8CihShdxGUn3afusj2gpoLVHnVtQMmTiKU82myH9yLRtdrUReFTSre73XF7tJCLvg7nHFgo52Nnnj33dDgz",
  "key29": "3nRAfY4N7dGGZvhGMU5uRpp1iyDVmS25ULuNVRDPA1mVbd5EFpLQe2psvnxw1BEkc8e1pGcHNwn3wNvoV1RiuUKF",
  "key30": "282aJkoKVwEamzupneT6RotSGygQEcy2RJqDnby19Y64F2PtctozbkEobZ9BA5h2UVG6Us3DuJLq144XuQSFEGuY",
  "key31": "327RzWny3JxfB6PnSGwzmeiFinsT8rBYqv2twinWNzXL65N2qJ6WgfCH2iPn2daWA69vsvcdy2gqotiDFEK7Qc9y",
  "key32": "63PV7ixnCewbPuX9nHs8kpxdjyJdCM9HEjUFLmouZsA5G2P5mdnZPWSkqpXq2g77e3Norx91mfniNtgqcTXDfykt",
  "key33": "5iNxgiYZunQwH4xTHjLDNR556gZerRycBiFHChjbkNrT492NaS3hBSuLZ9xznVEjuGFW5xigtnB914Nt96gD48mf"
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
