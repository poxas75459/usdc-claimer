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
    "2Sp9sSj1ZNQKuLAgENp8vbBFyDxeEvfzTuDw1wXU3JRRWpU5LtntLDEQSGiX4FX84XfYwNe7svEQnazpEYy9kaJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23GWHzKrTPiuYSRNmN5Chi3z94Xt1KnQCJCtcMrakxFu58wVkVY2tF7GRG3JVGWXDNqQYgjz1LKWqBswceiqeFpA",
  "key1": "37n4vFLXRm5JVcJf16mAmVSQiUHJJ3FrWc6yx2F35HhVPw1KxaYmRJDzFLss5Tn6JsyjxtrB242Pe3J1yjKZQnu6",
  "key2": "M1hj98Vf6hjdHZobFRrma2SuBz7v4brLMvM3atb2UGywibgU69KyRYY9iAT9cLVGXDXn7RB5yKbNjTvWCSN3MqG",
  "key3": "3VDFTHE5xLCEXHLsgtddiEwfHhHKqCaxyYrR8TGDSPPTRqKJMKvqtkWbc4HmZgqnfDSEG17WcZmGwwUjd9qDCB3u",
  "key4": "2CQHBiJh6ohQDWhiNswyKswirAyUxF5x4mQmovyLQXwHcqMVyzxBnVohxC3LQHKKZZW9m693PY77bGKMPyogeft4",
  "key5": "5RtxP6f8Vo8zCYmfBeCMxH4pc4QWf5ykier2urVN2oEabaAhsHWPNwpk5jvkuPc7YCEgSy3eccdX4jB5n6TAAJGD",
  "key6": "3NtWnsDMn3iEQHVyD5PQ3sFfaaCNHNKpFtnqdMZFv4zFiSebgftYb3NrRhWpPYNJ2o3pcrKfuVHtxTgwjAvWPTYg",
  "key7": "2ATgWGT8UbbrDhLPfJjFdj2HWBhVgSptMQa2snfYRQ6poQjDCGuW9H7vTDrP9iTJkoK3tRA4Zn1iq1WKbLzifXQy",
  "key8": "2ekeZAWg1tvxLHsuH57NA2KSLQCCtgpSwiAHBfqeWbMCpQ9fr9Fn53WWj1KxAtPVt3xuCJ9TYVKr6cYvLPPxiWCM",
  "key9": "22bo2oC7p9Ru3uXRRzJkxnNxjq9cEmg1CtfemQTuqmJeYRkwsubqamqDFNQJVzCcPiVvbRM1EeQ8kc6XwjWQcDEe",
  "key10": "4vXEMMMZbuE9GTJGFW5rx9KqJbtR3QJy6JrHTKC3BPU2gQcefNAjgneyMpmas8FSP65bPRsPcj7SyeSEtgSEVo5A",
  "key11": "t69xQJafKhAvaEsr9SQ2MmE597HbDKeVAH6SXTHS7m5YDYvNA92oqt6zaQfwX8NH22GMGdK35VKKzm1DrM49b1o",
  "key12": "3kp1VeTej4FwDzbc8SVTvE8SkZ5vp5GpgovWEcYwTRRtnqhRncMswWX1QXwnmzgEGL3B4RGviyhFXimFAmoNTebZ",
  "key13": "B6o9cAR7u6SVvQAVDeM1vBoZRLFf8JzpBpnLLtKaz66s1stLi2HhTSWwZh5FKbvoAhpqwEMq8a478J1o4ZvRmAE",
  "key14": "3g68pk4H2H6JkCZLwHojiktwajZT4B37kt358xcc718vntxh93gHBja19cyZkjB5L71jf21S9ifxrrNLof9AHaSJ",
  "key15": "2mpAsQVR2nir2icgJsgYcUQH64tReKUKpspMe4y46cdQP5Pa8Y6fZan6adMQ6guqtRYzt8YtLnZTtPkQXgnjpBW3",
  "key16": "3uYSCR4Hw15F9C7B94tqhHPSkW4VDcz4ikRnY13iq3mKL9kSjHkLbvHEXWgL5cXsiudWF1BFMVUbuECF4dYEepRf",
  "key17": "5BGP26wXky31cSVB3HncXqipKb86BTDZ2DX4xR2qEofGx79LeRQkM7LqWGuQoTWNomPmaVexQ4kgz3ZXS8hnVQRi",
  "key18": "2QNjmv78CZTNQ9B87M2p9HafYH5Q5CX8N1zkGxqgLr6GH568xbaTaojxWeJtxATLQ5reDMbrYUD58mHn1aiEqPRF",
  "key19": "2b1DdXmBXkyGBA4z62pf7Npt64YkfFwdf1Fh36i2FpKdsdy1DpHvx5vEdD2VKwPHvG5bcGMtyPP7bhCnUbLHpYt2",
  "key20": "5UivnzfbQFyazzV7Fmoz8hKD1kHD4Z8Qy6e2YL7JJZgYP5ZiYxswZrLcojrvn3LutWpJ9q2dQeJGTpq4JuKuYNjF",
  "key21": "2ejph9mBHtDWo36KRjZma8g1DuE2SHZJDp7XRBdXh3ehZPhzPQ7jKK6EH7BLkUXM8hdBQmJ6iv2HyZn1K16AjG8F",
  "key22": "46ch8d6bBnTLcFVyQ6eDMvYtC4zGYSUGP7m3ZAbJ8rG6YgjhRh6xMT1vx4NmL4MaV6tA1s5m9Cjrk88F9dWkNiTS",
  "key23": "5cSmmd3PpkUmryMPUtazhZWqk5wgXQ8fSzRqE4tzWptatxECC6NUCvMZeySAk4GovsKEZ24ekGgCD81Dnr4MxCvM",
  "key24": "2qfrZ2wEXRnSWjgAHUWzUS4unpVZWxZgzpZeW2FpDoHbU6td8L4LW8eZm9tmvYRBPDx4BzQc1WBVSNVc7j98cZn2",
  "key25": "3HPacDkGL1QSuN1REF6FviG9dH3uVzX3DTsCJ3HmmtRgAcnZAwHgsauhpSj66YWqCXpGK1XTK6yuqRxg1HnkdP2q",
  "key26": "2dj9ntjWrtD7WpKj8BARZLh8sJcQCq7coznurPo6LDW9m7QTL3WreohZNLHCSWvjKMYcW1rK8va2vGW8Sp8kLBvx",
  "key27": "5Asb1AiU5k4o6VmXYTDtfXYf9edtHyDRDkiSR8j7QxQdWgeWRK7JkemDc6vnYLpULhgry9c1guddsuBtcRCJmfKq",
  "key28": "4z172XGDDSLF9wQseKn5ckE6ZQhv7bkLLFSGdN9nFhr1EEVLSEmxLcD2cJ1kKud5buS3kSchcu5y8xuScLsPrs5P",
  "key29": "3EEYy9UY6SBYeUYmdw6tGEMWQEZC85XK6uWX58DDL4iy5Y71KwJVjy29MrYXmU2h3urtEdfazL6u2eSKbu4e6FeG",
  "key30": "3WB9cFSpUcEfyv3hzmrMWCshhtsWteLnip7YiVnRRZPb9swHAjejDYj4feMeszW986QjEoEPmZghosVhvx23FhQs",
  "key31": "4EJYp5beomdZXbDeZc8KjmRkVMGPuVJrCxvJasTVXc2t3iTPGVYNZVgFKK7nYDLheqAGqHVSiiw8cDf7hm7FB1Ni",
  "key32": "5suzhDCi33tWxtaffEuNNRfwdVvrwVqYrdXtXRFpnXpcy2WhJcrf682sEt9Ru7i5bsoJbkY7vAUuS2QLoMw4Up3f",
  "key33": "5aVym7cDbib2qZJHxoKRugoieFFdhddJU6DMwHLknGGvh1paFonCCFpGbQCE8cxYbpWSAE8oULAyBHivRUSCpEE3",
  "key34": "CAt3e9ptQWM4R1AJZusLK2FBG4S6XHDTQQH8UckJqULqLgoQ4rcGs9Ezg512gZm3aZPwFNzhn7oCTaR6UUbZDDu",
  "key35": "3ykvWRg8Uv52tgyZQRYwKxazroxdz1ExGTrbjPoztULXzgDXHtKk1VVexZoeidskKcQY6tQ9By8f59Zb9fkwYiyZ",
  "key36": "4CZA7m15UbA5jxV3w7UYYMt5ceDte2UPekJ6yjYogGsVLCwCzpSwiA2rWpWLkaRDLfBcV1r8QmugVNSWoRoAEU6C",
  "key37": "24WXYhLMKMZ35rTMAgYY6qvj9SpQv8XpcA7XznQK25bXRKpDD9hurULsUcpNfpywxCgqHmoSK2jzMx9DkNKV4uZr",
  "key38": "4BQq8Yp62zgbrVz5V9M6JyncYJ8YnUhDyV1idJUtgL6KkMQbfDYnqsdbDdATHNJBHJobvs5W8Vd1ZsEMZZaS6sBM",
  "key39": "3ZNZtedGT2kYYDLaukTjWAg7FVcMgGR3dJiZGFUU5wouuAAifB3mdQ7GJr6ygGeQtqSNDynsxz73LDjLS6bHcpap",
  "key40": "uAZi8sUQEKKEfXpbWcxRFNbgRnNByRK61kQXYimu7M3Xps3RPejSamXEccqdM1PtkfrdjCAv4JtXKLUM1RcdXne",
  "key41": "33A6U5WE66dyT5BALFZnifRsASy87pxqnhnTixtkY4ysSusBtbGFryZ1xVdX4BBQNATKZr8bGfFPb6Xs5kYq8wLC",
  "key42": "3U3F8XTgcXLDtbStZUnXRJZ8T6XyW7kVsigwgiPvxXvzVAqh726h5MQ1wweXKTBD92v4KbKwjMkWApQAbj2HKgbT",
  "key43": "4pHS8yJ8kYY76TqXZhAmcMehjj3iP3MMcX3zqrfXZk9fJzys5yJF2TGr9ejPGVAkF4Swu83F4Lh4E61JbwMRPKT4",
  "key44": "2yn6FxTXTATCtyc8oxqFF6xup3GSQrwKHTvovLfdvV39psyGyhWpwjw2KoqneS8vQcshWsVq6uwkZwyCdBsUFHG9",
  "key45": "NJkhmtKJ9A5q6M1Qjcijci2dET71n3gdhC4nZhLubbGBMUGE53An9op2H5iGNqAhPYPxLq6DZNkvaFwE9dtBdDx",
  "key46": "dxdCi7rNp4FzpK39o6xx9Q19Va7DBVhAvVxBbg1njG7hDdMeq3cHhurcdSq9BqXdGoK54erga8by4sbXejdEtpc",
  "key47": "5k2P3EAPdaBbwgTzweJCW7VHvLxmHkccY2rzqxf7BPzpvNhd4gFH5xQtyJHzZ9j9HiWi6X1tsJ55P5bsRt8pSJ5y",
  "key48": "3e3MtFtfq47BcEQaLL6o4122XGtRUAopqXTtPSqpjzM5rtfRQJuFQMHE3LEXHThU8XuEpGX828BZyK2nmTUPSP9C",
  "key49": "4DUhoPyEcVX3sn6DBMtGiBNJTznQUTphdDKrwRGxyBPAUdnDP7WGWx1hfYgE5L9EhGct9aeHn1kkQB92pcuuaNse"
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
