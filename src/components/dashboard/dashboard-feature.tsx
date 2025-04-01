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
    "3bYFw1sVCLGHYj5npea6frTEqpKJ92JtVDjjaij3cVa5ELR2b8rGTm41do4qkQf6K9K4EfvZUgCXiWTjUJqfeE7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4acxsfpTQcreSQ9brh64TJMieJgYeponcwphCmBvDkUd4giWEj5rL2arvndprUdGLoEhB4TAi7grYoA3wwegwWiG",
  "key1": "3ZGBDmrxACkdTH9QGHq3RTFXp8kqDQ4a1o3bhuiLbGoVrZtF2A1P4We15mdt2gAg3y3cJaxGwcVQZCSFr6i1wuoK",
  "key2": "629qWRSY3D7XWNqjQoFBMYA7kdgqyytzfK8ka4BGk1CL3G4uKuKHPNqtiau7aAtH99UFoWpuWySG7XsCjxnEZ817",
  "key3": "4KmgJwdAng3WhmdH37H2skHvRU913arw9PFypxq5KD1FZH4A8cd6AffTtRd3BY36upweEkaVRLQcJEsLsyRrqzox",
  "key4": "4WVHLsYbTWBiMWzRFrUDma2w3sbGBpijY6T4KHdo1FXajH5Xd8C8FP3Vhq3oez2u15Dk1BHnQtcGKZmzCzpUC7Wa",
  "key5": "ZCSk8odfZEQbDiubqYykKkw9KUKacGpeUFYwt2noCtYAcEhF5dLE2dSYCsMFDK717xbXoEnuSH1VYJM6j2yZa5u",
  "key6": "3XeXRhtzfiRzfF822KeNSvsBAUc4zCtyzW4kQrjmCnA2rGXZh4PPvdjA1D8BbSZDPNLFdxL3DVpMkqz2LxJ7BM1d",
  "key7": "4exw3FZB5fWSdZqH9f2ZuCHiXwrMtkhzFWVb8Rm7tNe6en8tNPT5hTFRyMF5pBd1Fpk8vN2d3WEUhLm9qfbjAmWZ",
  "key8": "jH66fUUW8ESfMkMjkzeko1fLcjWc1CT8zWZoPz7YqSSxGAhJ5fBVaqyoNrNFuRdmAsQkPYEDiv7TWe3crEFFX6Y",
  "key9": "3dZdZsY5dPB5n8E5SB2VrUVJJ6r3qsj5Ra2cktgF1vpaccYjVsVptcyGKtFwFBLDfczsAiixCw6E9jKJiuaAGY4",
  "key10": "5xrreiqXb1WTPw1R6ZepBACbrmR8goQ1ee7T5ZQSV3mfKpQfrE11mMRaDAhinXrxRCnxH2bt6hZD3Hao3kfMR2rG",
  "key11": "BZ4W7TNg8cv7srhwq8iNYZtYJbYZvx83cnX4X1MgvcUPXGeP1L2aPuDK31EnK99om5M8tf33noNA7XwWSFzaLPP",
  "key12": "3JL675dAZ94yqwtUERvSCRQwwwRDkLctxGoezZ1AhkFathJQnGGDaUAYrRZXovxUMuaESTvVBXtZu8gu9FbhDKk6",
  "key13": "2sovPpHqm6VutSyZi7ocmMHKRnXCwtAverb1cjuovbFgsbdafa9Sp4fkNpXMNz5NNqmXTkiXTzCBGiYQT6PGk4Kr",
  "key14": "5BxqRKDTNuLJu8CzNpmDMmdUJ9UQPx7yJEHGqakG7V71hX1faBA7vupgfazsLhWRgVsmFurrccvkUFvW8B45gkg5",
  "key15": "641iaThHXH5VG262WvF4PeNKSCRgkpbM3wjfGGVYRHypDU8e7AmHNnCoBaXDXAj5s3QoCfmA1pzNNeCeG3zXU4WV",
  "key16": "4RZzzo4g6U8F1HhGkWwvHTerWXCxHJV87YCnfcG3DQ4XSHahPS52iVicTDWbkx4HW72x5ycci2snD2oGH6RzjwjT",
  "key17": "5suKQqCkainjwN9oUz3xZFUMQNzqizMWAwmqXev6R5cMJTw2cWsnqfvqQNFAcSaZ5zWMGiGU6oyKGEtJuU8nK56e",
  "key18": "3S4ybMqZAHyLvhk9CS2FLd3mCzknSuMLjU3q6JXJrE4PKDHn52XNFGVSg3cmmrn8F3NZsZ3e3wjScy55kdUiXx15",
  "key19": "5mSTGwQi6NpjqptriV4DHk4xbRuREcMR1hThRFd9TKQtHVJ7iLTw15wGxNLBP2HxRfQSv2BgheUBeqtATYCVpgBa",
  "key20": "896Bh3BWLSRARuNe5KxJGAwfcRuERDhvGyfxzJzNxTqKSaRTPsdeGMf8n8Cnwg1gaadD869JE1n1aGEucm797k7",
  "key21": "5mYy5GR1riC6MDAuCZyBj5QgtmSFrnazv5RCjZ7MTtC6EYxt1WsgbYEfkisR6YhYse7UN4dBikHdgyPqHzX6Vpoi",
  "key22": "2cBoEiHNhxTPVf1ZjMVtjmqPvpZLBVRwcH9XTcQjJQmRSdJGCfUs2HuWRjNEuNQUEw4AZunvoGiLyiNNvSYoP1cc",
  "key23": "4RyK4XhdsSXnXiw1jkG4fwCzhqxmPzGNB3w9Vr1sbwamQjRBhqpSkdhXVeSb2m2UfTSNjhL7L9xgXamdce62ZXLF",
  "key24": "5reSS93ET8bwipeCexXJt8un2NnyzDsv2m1KvT2ijrXy1iL4qev7Lz6BZwMd9uVUoBsoPREyTMAGzmdug8nLHgL3",
  "key25": "2ioxyXDYLMGDHhcCfbtzv7PfQfHJPGsW9iRk9PzNyWsQL3CsQAWKX3XQFFgcU1Z5TwGKMTTsfqVb2JZ4ZLnjD25Y",
  "key26": "3xnZgRjeX8SQSbuQTxrNVaie1c4F4WCGM8VAYenKX62DpEf3bMrPgV2SPCnmZDpJEsH25EF9zBYksDiHJ2WM2ozP",
  "key27": "3fWcgdjrZoTNCeaWtRESF8UArr1AiFGV3QZwL4RPCETZZhaaMvo4mnvq77HQxrfgeJj2vJxBWduPw66pLDjmHTTH",
  "key28": "4q1zEbeaJZtoiWDyx7kgErhHkoDsQ7h4sfakpFtmvfKg9uF2YwyM4Y6W766KZhR3L5ny1iBWjd1VJ7DDroD7zH1g",
  "key29": "4rgd6CT2MpppYPkZyAhARVBQHMEAHnkKrLer8sJwnuqH5AhrVDBLSDkEpBHWNJmTgpgnwa3E6PsmLjunkMPFJpwN",
  "key30": "4k1xsHbnKeyURqiAifnrnbymQ6U29tMQPZy27yW6ZpJdhKmGLzFPPrrq2s2rSyhmuxcNHRqETtVpk7ct2ugWhamy",
  "key31": "4KwdRVbV6qB5hteJuQ9Go496SejZuUUL42fEY8n2ivUbUDJaYiMJqsQn5y7ktQjaRDCcxEMa6S3HDXFk8t4b8yZS",
  "key32": "2XuQwfmoeHdE4mjjCWQ18uAAR2cm8oDSXiMN9fnQB7mFcTPPpXEM45RWn972Bs66n1c5UDsZeXTwdomVuQ85Bg3R",
  "key33": "4uKrBseojWzAiHTDbZzJ1anhoJiWm33Mk6UjQBPFHEAmLqWV6R44qJct17QeEcHPgZhwCrU7vbGseUPcweuuHq1F",
  "key34": "VnB2vt6CW6UMsDi1suXUdtDUqmrDS5d48miue8qSW4iTogv5GhDw1dct82zgD7jC14iryHtaKTrZDsCfjkKjrMk",
  "key35": "2bBLrZ7sbBVAhnVURMzdTxkM9V5t2qd7HTEYgUyKw1ShDnnabr4Li1msyzmrNgQgyzkhkUcEPhvMCc7jauxY4aRv",
  "key36": "5Q7dC2nSz2Rjq2oLuUCiRFrjFoPRgcG39vnuEa3oxTrUj1iSvYCBu6dmPPhcUUwAEZvMbcJkABNzPYbBVNAnWKQ3",
  "key37": "33uU1iJ3uJk8ivRxZGtqHdQZkbdyiiiqvXQByXEuTAN2vyQGWfbGz3bPVVNoXyMCYBFFComvN2Z9JCqLz9ADTTxt",
  "key38": "2rMq5uwnho2NPzRnBYcdT81GdUfGFztn4Sz6E5G8SbPDJFbkS41emHNXaf9jR5oAspJ7TBTGNpz1LHbfaKazE27B",
  "key39": "5vY4XjrC8zritCHAP578LDGERACgjtxaG9pBQFqkA4wqKnrirBeiMM71k3qZFpjVhh4XzHCBdB7uCBs26n9cCbq6",
  "key40": "2EJQuNadXLXNRJJ7eA9zyW83EduF7NhkPHSRG3cForoSfdyXC7KaJMWN9faqkRyq3d5TwKWHS8HVydVk9ZuRyWi2",
  "key41": "3H2gkYLC7aUnPXXDUvBSN2SsDFpG2xtaEgBd2L3x8rQ66c7x6uc8TkznWk9ztGxSagPvQKFPYLMzKBKMJKENnyzs",
  "key42": "3DSQAT1aEP5QVuUD2w1ZkgbeSrD5Mq4noPdshTk3HWE6np2pMsYjDxLfsNv9YrmTx5jAJzq984Hg5NXgstWat6Zr",
  "key43": "5hNRrLqfqFbhG1Mtxh8bVZiLPWjYzawZU5uamJhfx49nPYgsQ2i5c7ux1CNFXpy42VkoFKAiAi2n9baeoAkBgefA",
  "key44": "7P2u2AW5oYTgXJBT2qXeATL1o4P7KHKcWgLw5FZPbd387inYVAUUvoWBQDpJ57beCpxv4bxZh64cFHaRvSb7cBz",
  "key45": "4Q65emU8FCvyZRx7vjWop2ubPn1J6fx83y6XQL42Hvi2WnomxJqHMBBEwS8NJNnXdEqrBj9fWYU7oBkTm2hsFAmE"
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
