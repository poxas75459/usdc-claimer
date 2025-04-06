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
    "4VNMuUwZiAzGbH4re4hHbcDDYkxNvPeWjXxH8Re825R31bP78MYv1Bd2Js5gkNXr8tJcz3XfvC9F2ZCzUByCVDgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z34E1AQzmW4m7ShuQsEfEnrpBfA4qMSUoqaybAy1mtibpB5ccknbPnAAf7nNg7p2ymjVTHxBbrd5KjoYpEtwpa2",
  "key1": "5yX4P2B7u2PxsAvxnZHs3g37LWZXru65gteaW5eo6ptH6MiT4sy5XYmeFSfRd4jzexvun5DDh7683B5mbSr3jtPd",
  "key2": "5iuVJfU2DqtvoZQmn96XHk8Kh5qykFH9nsA3YKPf96AsCVBgWiXmcQ9qzDpckftBsLn7pADiHdjpP2wiGthFo4jN",
  "key3": "39iaoG7Q9ipKZaJK7pxF9pYdnefYUWS9nACA8XebZ9i2qzVz8qqfEMD6mhLbuy2Ye5DRo1p8E967eyAaJgMagw7t",
  "key4": "r1s3cp4GDBFg6p5ZNBEio3HYKBhJd5T1ULA65MWxngPAvR3G3U9TJwu1kuBd9qGAAJ17ZgN1UYVRpStBifnk7yt",
  "key5": "3qxjJJHqEBjnTGvSKffSvVXWKy26aey46qdv6mAFa5J8bDpFSUcVeWHXEqMzSTx4aQkKfHSKbeDx5kK2SiAWyLkz",
  "key6": "5DNBHLnby6f4sfkvjV8ePLjj1Lmk9LiXER4y2c5HjuDW3ApopkbtsGSdXcY62EfqDptGScPhveAfKLUFK86TSczL",
  "key7": "4S8gQ8ymVSRa63sjtoWcqkUDdmwqjCE9NTJsgV1ua3QysM7CgvQrntg2Tf42zk9XFnXNK5KSUNpfXPSC6dGmLGDj",
  "key8": "3W7GQntuQtaYkzuEusMzLg7GL1xQy4Tp7vmGo3QJXPkT8e8kHcoqHJHEgEFs9rk8vjsoRJs9y52QjqxuEuwq562s",
  "key9": "5uFFv2g73UuNbSu7bCF8Q32Gf6ydF35Wo5x1B6yWqZoe5bPzPUpcVgjYc3ExkL96EbrqwptU1hp2v7nF3hwZxad7",
  "key10": "uiFhKJ3xhnWEKgSFsJfAyBxAGpQXbqV1Vyk1GRqDJ6LufHuzMnhCa4K1329Jp8e4gPiK7yhT5embbBTEvMYe1gd",
  "key11": "uByigqDYHpqiS1tPGrQwsR4qwdJTTpTE8mMUMAfMoHECQ5dspUnUVDJU2Ep4SS4Z2tkHcgo2Vqs3u8GMPJYzqHF",
  "key12": "prW2vQ5ZSgrhVcTjZrTEbyoyupbn4zaGNAzE5qt5UKxsR8oYSBTzVMzTc8qntUxQJ9CaAUWVB5tmbDDNf5QhRAJ",
  "key13": "3gneRUvFYkctUHm3xv6LpskAsV98cfLkw8Dba49fL5nqZRqiuazWWqFMb47pitEjNhtXR8u9G3t1y3Quq6dF4rey",
  "key14": "T9oAgewE9YjaEmGQD3yaLqidbauELhRuPLWffRhuALjpjRZkAtC427bAJsgNEkYZ3rqENtzF9zdJYePxXBG2C1p",
  "key15": "ULjieUwNkD3otj6xAB4Uip2aQrZ4NsHmbyadhEXzZz3y4nmLA8BhMKog4S2qum8YhRbhfKFrEQfqhF7tK8nzuLM",
  "key16": "37mnVf2QN8zazANvzRwgQP4RX9bN6PzDLqsBoZHLe79RMuwn639aiDeLYKCsAjh5wVzmCsq8s1h8LjVRF4BBKgtd",
  "key17": "BdyiQFJDCN7ksADTwa2z6pqEzoD4Msa4E46xAbXV8mo1XWu1qSPCh6rxTwDhC45nevGeoTPvMpFsgVfxunMDE6A",
  "key18": "5J5UAWhRMNESFGjZ6FCE5KoagxPVgu8S47Sz58iWm6cedhEghdD5zqE4PSap3m4xfBUFQWSdhhZjzSQJGTdDptR2",
  "key19": "2zp1uAQ8cjy6UoZJgYivjTBCmvse7o12H4xnc7kvZjPsP92Ah1TF1HtoxBmxSmzuLD28FBtBrRJyLzYpN7as2Ssh",
  "key20": "5XVUk13SX397NnQFqa6RS2xcA2YRWTkjbGe8VUBaMBR3F2Cd8wGjNjcCPonUF28dTyDRLUFAEpi18yLZGkC1Xet3",
  "key21": "a14QPosk42eSnGcqL6rEBX17YRDe3ntk6ZUj6jQ2sDmZUJMM27BjVbNooaT3NDPBnCiDpsAr2bE43C6JfWWaF6K",
  "key22": "61wgw2FtnWiz67AqLsACdie8sU7aSte3dnycE5VzqazrUGES1QPgtigBScHRYtvVd41ugDfCQM9ZrdWGAhdhFpLj",
  "key23": "fRfdTSPwb3mV4JkEKct1xJ3QevPTJYQGpZ3JddKVZgU3dxbAve6d9yMPSQr3sHezhEvygt8oRDjdNPnaoKExxg5",
  "key24": "FGFBh6cvT8pM1VPDRChc69yejATPKrcrWFz7DV4hgELuHnF5WwgJJRvaPWLpd25hhn692oKSxAxFXAWqnp4y3Ko",
  "key25": "2mkgkwJu9VdunCPaNNscGoE6aEgjd5RQtfWzFVmnzfYqeKjr4URLe4z5aq6KJdkbKoeF9JziKh5RmuqZcVQfduLV",
  "key26": "38wZvC9oXpM34g4d2nQxsB2MbkvzrQjh4ctsSp9z4p2cfz7GNuvEz4wVqvFPQs9FdSA8nRtSptafXHiwrzMQjEmb",
  "key27": "27zfBnxDUCw64obB55ncmzebby1tE4A33Acne2hvrvJFJE8zwAUBstBMfo35aaStJfKNMee1WPgo4tST37FSMFrz",
  "key28": "3S2gNconCXDvcCmr8xqRByrEjHhqsk3nC5YLWyrNqF1wBrCmcFisCZkL4VPV5eKWx4Tu5F4KYJDe5yBZmqy4zEnE",
  "key29": "4hGKvm5cP1KGoNgvSXJTGPHC57WMVUk6riX5CRT8fyZQxXJGvEaqkPRM67147Mkb8zvevReJP1ESstNyuTFo5qUE",
  "key30": "4pLoH1Znin8jmTAhejikiAFeaVTQbRWHknNa7smjyTkaGZWbeDWbBzz6EuzNfrwnQfvmAffjXFQzEKU9QyrVqgRY",
  "key31": "3Siiqd3Pzeb7czigg2AD8ZhjBXJVXmsycXGQ31M6yFvhb2X8hSjhk8EghNNmyHdu4h2onmipniTdYXH51evbFKZz",
  "key32": "yASUg4kdLjhpBwWWEHiaa65pXxedMX63jSta5srYrxceCLGg4xYHxJRiEJ3dpq7vYJH3VQfiVYogaBht289S1ti",
  "key33": "5wo2u5CnaqWwbP63NaLdvy7ZgXKRVkvFVj6AotGLpHn6qTTNXjnyqSTBmY6Tj7PaiqBLNLYvT4NHFhyoN3xwsW2C",
  "key34": "3akRFCV1kSmTZZn9w3AxoBeSfq5VSDRWx3Myrz5tCCztpKdrRoSjvNHieMnSaGpUyxiCDbsfF5vBryikz5ZW8rv7",
  "key35": "3VqEacygcJ2RCpnwk11CmekoBXni8YE5TMhRKrzMHkzFmV8Fx2iKcojGda39rBZLiZ6oLCNzSdXV64Mc37iJrVLs",
  "key36": "5LHfHySNDGpzGku9H18QNFWEKP661uGCMYDWoaFDuDXcQji55ziWFBycMcNEZHcEK24TMw7AwLUHyWKpvVB4Cpsn",
  "key37": "41Q8ztPDjxv2YzpP2cduV59Hzw6d6MegVHohNbe2BgrJ1V2FmgNjHURiQcozJGriZExD646uEfbEWtD2Ve3QKs9u",
  "key38": "9RuE9PPyz8C6csJThMWjx58d1wZuknZTfhh4keQVFo8zduwyHf9uudPYu5ZX1Efb6SbNdPnxP6bHw1s8PJdiYpF"
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
