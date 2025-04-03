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
    "63wRMi7QSvzVCeFRnu4bsNwMkXmZZgbhLDVSphe6tbEAe7csdYXVtztj9xWGC95HMa24SMU59oyS9bra5FngKsPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tyHhEgDnnSvvUfN2kkfLNHBJ9YDk3uCnv9yG6HT1U8canmfjKkBCBfn6w5b8w3XfSpQtPrmd79vsMjF3DXgVbQ2",
  "key1": "3mssTyV9qadkAWY4ANmqdcitJjBhThrxFDVUqNRaNobyJqrWCKVReE6AzBy8JofSpTJWwvvKxXoGNh5g5r9QQucq",
  "key2": "3GiGhUpC6YpxVuE2hg1jSkrunKmSbhbr5Ax18Ed3BXasUgttAiT9kJs38rvjtoTztM4D6PVdiiZKnZ6ViN9bYg6M",
  "key3": "5H26jdADZHhsMH7f4vwvdxpwyvuRrh2AuuWzGbvu4nw3cQsZ9Y3CJYjxnJ5qZ2PktYf9eptrxjciAvUKSLxPTvqe",
  "key4": "3H92FoPc8kHXCktkdCuoNUwxabmZ5uiTpYd5aaiu6kdh3qiqGmvrvcRyWvZxRpLSNT7Yvf7ZYsvukuBm5yuRagCn",
  "key5": "sVU9z9PGyq554PkD9CdRSQaxDPHu65fqdo2h1F11H3dQVrYMJPjiKpxdrtdRJMD2uG1cCSoUVaqK41aXnaPdgEQ",
  "key6": "3gUY61UnFTSvzEK95qpsDMUvF93LYECgdaWafK3dhLLvdaP2JwQ69viYpe2fRpgZXDUzmbvUP8a6rBerAGTknAZ6",
  "key7": "5u6vqSUGcXLfPwEsDv4XJRYyxw43bKqqZGnqxZrS8WN7S4MsP16WTYd2BBbway5nT3ZPhCS1G1RqcGF74BgShu8P",
  "key8": "56naWgQTfRduGjQCNJY7PhyR98zLX2B2zN128m8oSvaAxaV9LpcWBVXAekFbceDxHSSK5tanNhiAVEirtLnmmKCj",
  "key9": "tceAYRYArvxGC4CSREowMZ8nZHuCdMTrsuomgXQ4bfvKdsPygXPgrTW1JWgChhYu91zZeqbh7N6j4M7YZcLKCqC",
  "key10": "3hMhNHhwkEjUSjDzemBEYpZ2ZrfMS9ycXYYUUjtjSk5knz57AQoSJZnxwq4f1cp6ea7RxxPGL1ZBWFd9etyV8tLk",
  "key11": "4va1yuk3HgyzUwWpgd1GLGkBuYVn3EQSWKx7Hjrrb5q2cYwFChonQtBGhyknP1Fz9CXDN7D3KLifvML8p4GVKA7",
  "key12": "3Wf227pDJjdwLhQLc8mNm7GUMrvcSQEQiAse2UZ9ExWPciAyN7Fn9XhhD34ZPGwxSNjqo9idRcgWkRsMmnH9sKfW",
  "key13": "3My5oaJw3ZXjhN8ocm8J1rJBPtEhVPh4XXW4MSDwHTjExUKc5YAapQZ3HvybpaNpidbRormun1J1uzmvfpP3x8of",
  "key14": "3o4rvbopRi2pufkPvoRVHv2HSJ7P37TmQQEvtx9Pv7zT5Qh1KZjKDXKMNWhQjETb4nhRQc6WiLST46RYBKPvz14h",
  "key15": "5wappu5i2HxhPLhjwLBqzPAebtPHz85zpqUuhuSuuSbi9m5VJLYsxW4N434NdCHebGfKwLQEwC47zDfoFoUiVbBU",
  "key16": "rUbK44UygaZ97aZpwPLsgQG1v6dXmBjjTsnEKc6wR2dfz4XpNvBsRZmsTFtxfMcYsUzNhHoT8HPajRRwE7pPu4g",
  "key17": "3XDCHd6MgPvUnHpXZk4QqyL1vSg88fSsphCJ4ATFDUR2VrfdsL3mM7Gn4icnWq9Uqqho1E7JJ7QNypGMH8PPufav",
  "key18": "4868kcKJNsSnmmuAgeK2xjp5HNgzpRZqhMGYqYy4xyo4trBYdV5CwEorkaycXeXUt5yVor38SzutPzkVTNuWEY3X",
  "key19": "to9sy7sJD1JsC9oV9aNN8sTcqqgCrj5f7UPYc7h9d9WCNj25e2v6884m8yHfmghxQvgVQ7fPzhcVZ1wnJzGEVcb",
  "key20": "bqCdBVVP5dqiY6FUh4tA2Uc5BHirUJtBnWtGKJaUXZ4WigofM17uj5fTxZcWdxfvshFSnbe8r6wuNUw38mvZRjt",
  "key21": "KYs4H8JuRbThMbRUUV4ZSzJWCZnoahkXyXuxnqmkBEYRgtmG3vBdHLMWHDfxeDHfBwAckZP2kxc24sRWnExY1k1",
  "key22": "35ckJYf91myTLpeGQCJLd8FvXGDeEoGqYtbaPyxqzYe7s8KXqpZSKUVu3s8mxDCL8RZmwdTCGt3ug2gQ7bATPD5q",
  "key23": "2wkFDGTMTcX3oZS1iUtjsUqdsotdhFJ1SfX8XbT4Kp2MzFAQQxG8VuTStPuvuEZfax5pjM2GHyGwGN7fdwhPc4zo",
  "key24": "5MdsyUAJrH9bxA2SGgDYowCAd5C1AF8j9TdBoFodHDC7Bv9DGQTNF62ewbK36UfGFfuydhAUgC3BDzd1DdUw2qeb",
  "key25": "4EyLkCmKLYp8DvMyMnv3CmiJdf8sWQ9Z13QGz6HTcopxuzNX7sKNQqUn8Etk769nK7EqP2Vu9rchCLHVXAZHpY45",
  "key26": "2ULDNjkWQbTUtBWu3t22KhakdYnrka936qvNj2xEXEwFXesGpCrHEXGc95VA2qLZ8GHtBbw2gUAgZtjvXqMv5GGG",
  "key27": "4cegiV7VbymnFa1AkMcV2cMJVn5r5deicovPSWrxyCmPVphBYte5ariskekNzech8Lu3dq8e1tzBCyUiaLKZJLxi"
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
