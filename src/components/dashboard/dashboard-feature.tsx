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
    "wQq7raiX97usAPJHavbUPUg3eBUBDCqMz23fd3JesdoziFgUwFJEsxNAcXkJvrEZJRs3MQFuPnwokF5Q1zjAgHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fKMmu7vnkjF2BdvCTiMqGRq2GvvizFRL5Cfu7LibeudEK5hrYWfstdurYTVUmWNAZyux9izcbcDCMxpoXS5isx5",
  "key1": "btKBTBrZKuPs61tCuoG6SS6mygAte5qjqvt9AkNLSj522bAqFWhRdXWqqu2enwTMERCLZ1cCpTQA7CwtxsDG36V",
  "key2": "292pcfvHvXmxFDy6Xk1x7D5oFsAPzA3bZQaU6ZgYzKdRq4YoLdKwhAa3YZj5XGuCMpUsum4aPbcFjKH4Rd9mp5M2",
  "key3": "mCw1gx8d3FisFUgp1j2yKeGy3K6QyDRPu6TTERhGjFfQf29Fvuv43w1rC9pvQVr2GtVVnd2CrrZ3eKGp7CAm3Xc",
  "key4": "4Xva8rU2gRqrnz9mDmicARq9y5m9fqF7yhSqFsUMTW9kqRe9j8A2ZMCmMQ3jKgLLAwZyWKcGB5mnNu3ciasKkT3u",
  "key5": "5RDdnCWjwjLc8BUrsYcGJJggDKgxNEZ39hFejQqWtuurwVnKfKqjTaAJC9TUBjMoVD3LDE2f3TQ6RJctNQnNguA2",
  "key6": "Fj16h4CN9z94YHcGYqdLMZZoDFctLcj99wGL515pHANP76SXjTH8us6Ys5KKTm5HUSp7zYFbKhhJE8g1LrSqm9c",
  "key7": "fishoqTJQqqXNxvqhxRD7zNRN5nvxeTsDgFiBz5iTBFLjhcjdD4WML6qqA2VpWa9QteH7wZ25ypDagdtFBPEytm",
  "key8": "5DycJ9iYxCxWuGoHT54tJzkJEHccPLbh4PFSfEnMzmzhi3WGMTqs1SmaFgaSnFpHk533q8ivxaroEkWjAx6WYMCA",
  "key9": "3X31yTRcoNzwo4z7NPxopxAfDh2sdjinUm9YXULxZntCAQZgrL8v9wQEtvJSLgMP2wxidhRVC67cBBvwpJq59SF1",
  "key10": "2j251RRVxR75MnHHQfCA1vnDozrVXnwXFrC2mvHfg4XvoHATzm19m3fL8YTsG5f2aLAvke5fvqMXkx8MDdwEScXW",
  "key11": "3zF4cQLbF73vt8okY9mTbKthwJM8Mh94cx4mqSFmFRUrkzayrS9UjqAuvhz4zG3u4eJhwP9XVjMDvDBTkkKohPYu",
  "key12": "4rnK5k1Em8UCNnG8DheGpn88j2Xm1mfxKAk345PvfewE4wqS3dFDvom72fjpRQofaW8uK9hKXThFJYdRDZwkXqMM",
  "key13": "3u1Now7tRCnwgguKhYWcrRnGBJ7i3UhdEgcdN4riUggTpRCaCjSQYaHTRFqM3yqGNWz52ZggVj3T1SzfuWy5e4eH",
  "key14": "5PXfmz94tszShqTfM1vMjfCZn39GNnhF5ks4MBuLizSfnH8dVLmou95mbSPuHsPa4kopkJBBH5na4ZqX8X5rjtUy",
  "key15": "4BsfhJEoyA99ZWMHzvAYeUUDvR8fVfLSitaV4JCHwF4TRoxVd6ErUfR8sHhs2tXBm8S7b3VccH5U975qxYpoXfL7",
  "key16": "2WTTHyWNjCts96ZLPyQ9sKKF41KJLLTor7D1EtGhPBRWu8kyKb3gbXxKaVi64UGawXNg12xJubzqJTNx8iKJe4KG",
  "key17": "2AT6X9Y5CiC4X8c4YGmBi7vyaXhn8zdZPnBN1EiYJ9a43RuiUQZyaVPkG2PU9KBrrEidDm2bpTyviXTgTWASZCjw",
  "key18": "QSiTLMyA722CTW1v9zgxwibhjEWewYoZaPrYEKn5tYTG2ozjWBBjjPnyaK2QgKoyXZ8qGSb9ivGxNwhyXJtCDYQ",
  "key19": "5swRuqqeNPsbEUsfyBK4Y4WT8JJ1pHVSaoTeawA7Kkwwskp1S4EHj8tG3WCG28jnyJzEpL9Lbbp9BkcwFKNZcG4F",
  "key20": "2Lqnjq5HNQecFGNRWP9mKP7cPH9dBKRFeN1PUxtPZ2jFnCaScg7Uo1EGwQX9zgdEWxeRBCaowGK95sMXfXx9ZB5A",
  "key21": "33HckXZFuM52SmoEH9E4ByGEeA9kJgLqfypExXSxyEf6XysoXb8fPYq3Q2n1E2UJKcFZASzziNYh3X9xVrhydswh",
  "key22": "2ayXknMTaGA5jCaLDjBA17g6S3THoz6MdGi9Bu16ghy9BLkQ4fQvkScmvitAozFYtEhkMcPhXZq88dWx6shFvA7P",
  "key23": "3ZRKPhtGdvub3Mx8Yt6HVwDDkbytS2eNsVrxTfrjQKVD6hbjrKWf2ToV7wLtcy9Cnt2R5AnqX2nqnvGKFzEGshj4",
  "key24": "G9YCjfWo8SYKXxsmisnL7QCgbRAHwWsXLBLErvPxxA7u9EtoT3m6aybhLQ1bgG17vMFQ5FjvVekVQ1XrtmXeGbe",
  "key25": "4mrGYaE9i1T3hZz1dDdEQUZYsew3gB1aEiKagPxVhNEEawKM1eZ8pBp8Dc6BFBVrmhMRwb3XaBmWtqzmf5AvMC2V",
  "key26": "4rzR5JHUR6qMmbtCU7FXMD9eDzJjXmDQ183PrZ5keuFBKbTSpquvCdENJE8enKTuhwKwsRVm8DkuohyvBHYarpY8",
  "key27": "Lup5J4CuVypU93eWpe2A8XmsjAPhuJkwPjDVrUXpEguceE6AqraBwM2TeaVpkpf62qYE9gTuv2W9NkTw3g46CgV",
  "key28": "41c5RsGzjPhTioKevrT8sSrPSfCVWSN1xtHadPG3V4Ce19z5BWLiLrvDsTBjaMTdFxvoK9PzDNV5sUy9vCxXoRaj",
  "key29": "SwA5cWE8RmdgvQnU26aWJQ7vwJBoxjhYKtG21MvoqicCoCQfJR5RFW5Zo7Fb5xAjGrcdcw5JfQ3eDoNNDALc4tF",
  "key30": "5RF7s9t3hjmr4vm2vgLkohQf9sD5Qkb7upWQgevtUEeNvpMqxEJFLqKGYgpsrEEntZDCoE3yShkaJDVVexT7BGit",
  "key31": "48zMv5Xu24hvunDZewRpgySZuBo7t2TVHaS4JqH3ebMVqJrxQZj6BFyV9QNJoNjWDgE2qP68DvPgAXnjZxo9JnY8",
  "key32": "5TkSAg3tgEz4HtZ8hXbXdCc7mvgQhcybGkRoDkQrMs5UuUtKZ3v5v5DfaA81AiPvMQSi6uxZuaDDZxq3oTK63XFX",
  "key33": "3bCHXrELnm4sakpmAGEzpXMrYEfPVm8rkR89GAQhJpecuBHMjmAKFsGLSEpcLiWK1gJ43Gy5PBatEcd448Vsk61A",
  "key34": "5iTPfbpyPcqRzEZYAtPf6NdsQCizW3gT5TrRCWak675uq92eE4u3YasAvGp2LjEVgX5sTYdSn3qbSCpCVsMy4db9",
  "key35": "2TKzqioM19kbkQkHYpNq6pkZejszuFJVrWpP6Lt1vFicdxK2CJKCBznNhk4UdeJwULjHjnnjtPBjEw6UJJmruWwX",
  "key36": "4toA518XQZc8tJPeda4v51QkLmzxCZdjhJCf4HdmWJ6jW78zotWi5oppvU8vnc3bgWTKddzaGL6mpiTNrHw5EMRD",
  "key37": "29pyypGNh8TBUZvQ5PpQRnvZtjfX7fHgQSnQVhwnStu4eM1Fy7hWSNqKtAaSfTqKfnZLEAr9QjMMfBXLoBA3paY1",
  "key38": "7Ju7TAn64RZBxist1bndDGhoNCJzbGYzJNzMhHM95j4S8cqR9HvTLjJpZPoN1SxeiNMM2aMeNufuhYmKVM9xjtw",
  "key39": "4offXizRfDRd4b5iMZRViY4f433F8dNVEh7CfgVcKy5mf3ihNB2zFZegPPM18XUmqwJwXS2nzsjYxtYKQ6DBY7Mu",
  "key40": "PL87K3xBf2yHVuntkYPmpH68LJKqfHZDDMmqyEPP49xD2G2KjWuhq5PwTpMjSQiRgC8yM1zkx9g6yJ9E2MxeXBX",
  "key41": "kRJ4i1yktXhVdovhPAeB2JJhQpQDLmkN6WaJSC4nFhZbrAjs8oQnJxaw7QYUCEL6KUfQ5ExnaR725iY1JT2WKEn",
  "key42": "4tSxGHFWzHDPJtDjSoXrM8iXiUP2Qziw8kZNAHeEQ8a8mqrJbaiDiMGJiEUpdd7euCnUqUYoqaSgZCL6TfG4vtV2"
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
