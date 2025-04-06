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
    "NKZdepm6wp3ehmBw2tXyBpvUN4ZfpeRAdhsXxcYRxDHKUKYvDfnNPpKcTgCg6ZRcphjwGNgxTvJS2A7dcC8waoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UNg4LLxbZUZ1R1tmMgyGrx5GULpP87UQZjjajN8kPWNxiHdo2P24E9RR7SXV6TAjfwg6824S4N1xS3YbTYd3Mbr",
  "key1": "3ZDockEKtJpY44YvGeqBPvCucua4eDkLY13cbsgEjB1Vt6M4nT3sEwqh5rrGiyS74H24Hx1Ptag4huf1eqEcrriE",
  "key2": "3KYn5qi4VrUUHqS1LRsPBSwb1s3TAJQeqQB6NVVn3wwbYK2CxE8YUGSjdJALjGXcCVtDRBoCgfbR8s7i9cZAuM3u",
  "key3": "2c79bLAt3yJP85DSK1356LDytwhRExhsdjbZfQDhqrfCmLcTfWBCt7y831Mhz6gJJouZTuQo1uXci3Z5RDPLA79X",
  "key4": "5coHDTGKQdGxjFe2V5Gmuda5ArCqubPQncwExArmjcZGeqGEtKeMmU9LmJGRH2nN3pD29gBmvEznuyWTeSSxBEyX",
  "key5": "4gCtNRDvoxnGesbN1mdgcAMXCTL5wwZqMwSv7tLbeMk4oj6fxLiriuDrQoZKrVXkUGbYwmMgvpacX29NocEnSqy3",
  "key6": "64FFLswyyiAZAqY1Vtctd3RbBjLGnArThLGu76KkuNX1aZdoxnkt6fHGcbyutSv5Hd7gBCXkbcHWc5yprj3P2D1g",
  "key7": "5Y47PxfhMJJguosq5WKm6crvCUD5UUjcnR9aPGhLNpq7wUsHy9SrLXck62Yzgwxfa4VniaubE2dn5efRZswiHtkg",
  "key8": "4Gav54Z3vnMeznxvd19aRtmxVLzcYTDHqZsiBPzd7pWBqAVBJxQ9pobh1vZxeA1UtW1sbi8vcRcmavbLvHzNjx5x",
  "key9": "67eK6qHVTDd8V2mG9TtMScREVqz5aaMhzMCME6dwbMyzm5cMxWbobCseg6x1YoMQZEM1x7wNiKzoV27w4u62DPfZ",
  "key10": "5FekMQuTNCfaNbVZXhcPZxGU81KrJFvDBdkEo3XyKKPNF61yYuedrpzN4zUH9BbfHAVGwhMtfuiV434XTf3L4eeH",
  "key11": "3EUa4NSgH7pgj33KgtC3WmsgF4FKNT8eveyGg7Ffwd4oaMg1Qm23XjMKWt2i6xLHP18rzibVa6TtreSbTUtAKEJy",
  "key12": "35Yy5BBqjQ1AkEZriaNpDQxe2yyoGrvAW4PBKJFvViXypyjXGVmnXj2QE2w3HdUQgLWrdpyk2tsx1RAJwH1L4Upn",
  "key13": "4asWgTS1G9Py8YomQUyLbNTL8Fj2PDQABKMnyuqHAtL2uubjoxiVbFsYtwVCNDLdrstsukGWjrDACFP1cvytascW",
  "key14": "3kFob2FJqoTn98gwAU9Au9wFNpduPCJuBcyge9Pr2K8rVKLfCF4AsZRR7AJNPvFwDBuPRhcr8m6nW1GdSS26s3jN",
  "key15": "2b2qdBUUdmBJutk68BLJ1mUqyHVkZnivUjmp6TwFCAj7oktnKs9RePjYvJYuVMqDEVVNNCkxZPHj14pwUqgwAKFh",
  "key16": "G3vg1kmw2jcbKBotZXnLQW9JQzXa1QxFzD77oQVLs3dWmiKsoaZ4iXrC6tEz6Tn8CEXJjeiHh4qx2AeuofTsY24",
  "key17": "5mm8DPV9J6H3ZpKHk9bf75iMtQPc7wmRPrDYRgsaMNZB2X3AufHENzeUEjW2R27waTWdGEZ4eH85vp4znuWVBpYN",
  "key18": "2FwoeB512wgtjacMJuMhGWBMhcwWu7p6DW6kEZgbTQMYQDMb5uxFTmMnwfMwZEosXbuCshFr2hnqSGzVRHdyZ7xq",
  "key19": "2XvD45BDbZXd1WYg6wNQZw9xiHuk6PuLWNkaNXXo3nCoc7D3VB6q8K4KErGDKqixFuhw7Vh3YHUGdVzn6anDo73N",
  "key20": "35q5qZctFdj1WJcT3zq6dyxbaycrs7hAPsNYaQ4eJzDw4isCCjNHYhRwW5bCpooX47n4FASNvjmcrgSEmdRpbuTb",
  "key21": "2N6kVPp5eTFtj7dNWeJz413doMGSmQZ72ZQkgZLHKcm7CZvffRd2zUcVnoA3KUVf7uDgoULKPgQKDG5dugiZ5HZn",
  "key22": "pdKJ2jhHwXv9WZGg18mJjL5es553szmNEb4GqjDsgcgu4WuKcy2ryfkNwEmjvg4VGZqvmsvM5EThY2DhsEavpck",
  "key23": "rFZ157r9P2W8vMBBgiSDYg7Vqg4DTvu5pN8c6XVsB2GnZHLFuuahT6Ujxph6ovS1qpEhBM3XseAyvrGxoLo2hmK",
  "key24": "4wYvaB5pM5kBBTqxty95G6u8UAa7AFoSR83WpfeLYFevokDwjtHtnSTUFaSaj4RWTvnTR8i6dUpn5cUY4jZtChkX",
  "key25": "2KW55iEjGrMDUNEaWoWkRvhmwmMcpTYYWaJq1JorkHkMcgEZEDpWgGbjXpbEZCY7MGeiCJPVQeRQ1f5pSBCFNBRP",
  "key26": "34eY7KDQ1GCMYnNyMu5wPZhcQA7jvJ1oQDzUQWQLSzzwdJCXksfAE6GasVQbSnFDp6QMER5GNM4K6iCJtaVvxqRi",
  "key27": "2vpJgNYr1snRwWqph35g227VGzyjqWGLkxvioY9XG2M9fdspByZKPwCZJKAGcxxH16Sj4vaLX9JdgCGvMKdtDgJw",
  "key28": "5JtLvAYdn1kEYcvdxcknv7bRaN2myxH2efsBegzaSXRw1mznkA7emuEtPMRDht3pgDahVUfChwBxrE459X1PDHqB",
  "key29": "4DcXKTZPoyuEGunxzzx9ZEKsJteyHt9DY34D3CfL7RZsduxhGfyTzYreVnzUYv7a1FYttt79KWxamGsTf6DwLzh3",
  "key30": "4GptThpqzT5hsfsNcTK5Q3Cmqp8gZgh4WaU5pMzaBz4MeTa3D1sxc4iTJm9JdWHVekh4GQyLb4FFWqnNft5CKe56",
  "key31": "2ivQpKPuHJ3bf7KTVTAF79dDtmELEJhEwRmNNmG9C28oq7sKEM99jFbRsFXgd2Xs2cohxKnYBTMSJTS3XPtLMDwf",
  "key32": "4meG2KfbFRQuVyxNnTBLFgKxvpEz8yjMp6hfV3Z8GNgQT7N3A3xGpfg1nVmQkpmxPde6QiyFeBECCkaat1NWyL3s",
  "key33": "3QhuYhFfWvzF4Dz5WdpGEtH8d1tZkkHufud8AxRkcGWhfJb7v3hAhYXfZKzxUU3ud8YnGUmRdsnzTHaj4t97aXb5",
  "key34": "2Q8nADw2Fxxjioa4vtozGtspm3NNjyaVVkuTcoCWA4khtMXpnDZnLTS1JDSQ8tYgNsdvkK6bo5HbLJAxjSVvaLqA",
  "key35": "4qBFnyW2WNfSRnomNaAz6FzGE7Z9i1EZ2PfFMkPL4RabovHH8tKQVGpp1KhnCNaTuWMq7WZpRi2nyR4TXbC64iYp",
  "key36": "3hgzTdCanqFM3xvktRgp5esxZp4oFy94fNdBZ3HDpvH89eMvcj9tYuRH13q4BFYK91vvtNf5gJtShctvikvxkPTB"
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
