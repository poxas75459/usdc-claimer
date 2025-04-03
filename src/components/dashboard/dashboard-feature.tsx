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
    "4gwUkxLVMZ8DKZWvN9nwfn4PvjSRRXN7mq5una2jekLZUJNecSvwkgmWQeXj1gh4inCCm6EqdsvLcMYL2HAhysa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c1ruwsm2ecepoHDWVMQaoKJFUPsBNVa4TpewCg86iUWAUMzvrCB5VuySE31xrrCBSULAiEaUQLc6q6ZabhXeDe8",
  "key1": "5CxMUS54V2gzzxH9fFWnBfAGCibrB6WjBbjKyjLyy2xuATR4LgkQujVYgyL7HQd6zPfgjQWJ11sr1YhMsvZ1JJp1",
  "key2": "x5K4LL2CN27BkxZtfAQjjxumkJk8Dco2yqpRJANnpohos4XwSJ7gpguKZNqhXzsNAXP4ija8Qh4o73DmJChxj88",
  "key3": "3rwEWbMpAoMGhbTY9NR3XvpteDJjvhPjtWJ82WYbrqpkmMHv7EjkP3VYVCfTNDXon6gaDh9CUaXrgDQ4J9bJFXtD",
  "key4": "43nD3J37STDr8XTBbFXH5PcxMRbZwexnshzpNHrSZMZAmtKny2j5LznQZK5m9eRhdVrJsF9sTd7U84pbKmeHQY1S",
  "key5": "3PHZSveNVaBHGoYnqNfTik6YfQEyuAhejXYW4A7jjt9X2GaucNVMD2Xu4kG9otrk1zSGZxq4ywfTJJdAE3rMC1xz",
  "key6": "2g4dD265zJeWLgZKeTgeF4FiUcatgXA3RkQLyA4M8cHZdb6AJ4rwsR8KymmzAja3PDEEdV7CeJiaUCrLKGdHRXtB",
  "key7": "4bbKHe67q3HvUticAMLai4ogpxVjgu1SjdWJ6gCH3aMgJj3uxo4eKWnxKv9aBEGFojMf48qbpsdQ7kgkdMUYp6rW",
  "key8": "3V4FafeGX43uYwfye1ARsxrwUtTJ4QmsGsNbaELcJbipFfeyPaW97ZrdPyKMgvvWUjXschMVq7QUW9j3aKwBVtb2",
  "key9": "3cgpBXLgUa5Dn5qBm3BKpWtoukjrRJ5k5aCwCbzXgVkT474kc5uWZz12K6HKQsFvaB9bavztzq934NJgyuCy3kDA",
  "key10": "2P5a5zVk4V7tWKCZ9XejUc74hW3qayjMjE1QXVc1fVHimL5WBUGjddFpQQvfr1G9nwgjHHNHPk8aWpRUfGwzQCaG",
  "key11": "321qAk8YFuShnVmZMQzN2VpJYKz3gPGWodsVHY5ihuzW9q6VJyhMLsochhLqAwa8iWkWQbecCAUB3X6nvohRLGPK",
  "key12": "3Vo6siMQ2hWikvVBt3riuN2StwgKTjpDBdShukyinKsGcz9oTeNzVEaMNxhYjse13ufFUNAQPFMkzALYFxVcVdFK",
  "key13": "3mjce1Pt7xtEskUaXwo1QtyMnuW5WTJ2QjUChvcgxVxRmdqoTUMp5PHu51Wx5eqjcPTrrz6uVCgNPhMr4nGNCVTo",
  "key14": "5uDMAWB4s6fbt5gDcsrnzw2suhaRUcKUThevtG6XAxMmqHm2W6eaqJ8K1R1yu5J44vf861LrXfypRLqvrWxFmz4B",
  "key15": "2hUe5DFNGYfArSy3Zvze5HrxtJBZK6DCEbt5V3jqACztgjipsQPn856t5dJXB99zN1ey8z1sw9PFspc2tAPb9pde",
  "key16": "4bUehT6CyzM1itg58TWBcne1hhNeJ95hS3bydq59V7qCfq8VGbt5ELM3f4r1HfsvTyxb6P53xDuK2dS6vESKaaDY",
  "key17": "9MWaxoz7SEioTkRTvCsTNpr93BKhTTe8kCTy9tqAWLUARr8CHmSSirGcoy2zLL9VGwiks89eXrGqLyUGSPsdN1r",
  "key18": "2yNJXF9WH97rNnp8khQHv6q4W49nDQbntYYdUidepUHWVS4xaH2AgdhuYXoEbcECf7x2A6CDuvRqxpsuuH5cceS2",
  "key19": "5GgLbSbyr61LFNTGGwvX3a2SDLDJnyhbPKNLhJEgbDgdviY6CEM4G8vaZ9QXq5gzRCDrpzPUotxJctgJHpA25Ync",
  "key20": "5ZL4DdH4gJAbBPEFneaRC3dAfpWgCt1xae2G8DdPagMKNVkC7o2CS9HRpNZiTmjdaMhFeVRtnPkGK5ogwaYixaEZ",
  "key21": "5tCQ5ft98WEiw3CzHxomtmix4zyV4je1szHGVedMzud8XSsWbr3kskmeZR43YLf19wXVb6LQmPQ8NWFJegCCXJPo",
  "key22": "ZcWYgg82jzFS6go2gaZC7PGqDTVhpr1TgzmMf4szsXcL3RpHwv9zynfYdBUFx8N97ePeQ3ppK1wMiEifYFupPoG",
  "key23": "3ozCPvbJQTh67JWPYEmWPmp6XDtTfhaH2kiXmacDVrdXfiAH3RStUuFPdFg5sjwdfnrdmrcJLSP1QJ77xuQtFE7r",
  "key24": "2WopjLJ8hDx336S9a1KiGDuRqzDofgKu6pmT46xjQHpvH1phmcvUmLMpbi43DgFpzD8nhaQ7BWDgsSbJ5JW3DCS8",
  "key25": "53t9rrsGdu3xwjstauAMGWZCvcJPfTQfeD1VAif99fmogUS3FjLuAatatiacJb5SEG53d3zV65wFmqbS97GsQano",
  "key26": "3gtR2YD9iL8hR4wKVfnY6u3YbHVoc5S9uk73cWnwJa9ZEy3crFjVpniuKLsZxn8yLDtYWbUoD4RFCMxrAe8UbcpG",
  "key27": "26rriPNzKBvPgHvSAD11pMoSxoHMWeCDRFJ6z8gBhFF6iQxSP2uLC8jLvUsnA8PCkQ2DaevAEcYzXzVF2zqywcMd",
  "key28": "8UXu5mgoADsEnWk6TP7Wdurfo9tYeem5kXpf8rNzjHU5n86gTsqi4cxXgdvDJyKiQwVxTrKoQ2REd5Dv4iWxXGq",
  "key29": "3KdGdjN2ozjiZNjJYT29ogyQMwy6LeKWKzm8EtwaTmAbfwMMwr2HSqWvHUNBEFbwEEvAyQZZ5s4R3YFT5gtwVSsj",
  "key30": "VY8ASuCwd1MNNybGnGD6WuPYPJpqjd3vmrPcXqT7BX2MQ3Ux5NbAfBNW2teXRjviYGFnjAHPRSBRGFqGvTuKCyS",
  "key31": "4QRzbr9hQSwurK2svcWsqMggFGSLUGBJoLJNg17XuapJ8kMkMFrLb9DQjzkMRad9UevckFjVgbFw49aZ63gNumDr",
  "key32": "4FU9F4aBbPASRuNCuyASp2q1oyBZ8PzKLw1v4HNAqY5gXXHRbt2XcX48u2v9vh8XXFpGycYWoaH1pCf57iFGRSEf",
  "key33": "t6VAv7Vrb7hT5ghoxQ2zwJ8hHvUQAfDLoDimjrjVGQumt3r6zibDSJLEQvJST6nfDyuTLRe4JG7ZzXuBwGgXwfD",
  "key34": "KY94vwujb3q67ddukZr6GYZjs5LK74dqXELYk1xPsyLXkDbhB7NjeabbPWrmyRPipE2E6R3RXd1UZMbLo7qcrf3",
  "key35": "35y21S87YGLuHiE14EnFv5q3WckhMWtHko6mLcBYPuxqnLNcD75vHNu61nmb9U5kJAXio2mC7sgkxk5xHuwHuoR2",
  "key36": "54AkKt8efaau2PYQLLYokpS74TGxYWXfekQefbBzXvTnLHcr2Sh6JB3wDjZv1Y6TGX6WN41jFhetvZS4L2n8pxgg",
  "key37": "5CqPtkKeLA6SFMV68JVnVGbRV4xo4VVK6r9XyknLerUvSBqyewPcpikiabaGHpLqZ1cd37qKDsdU7ahhvH9mdTU1",
  "key38": "SAVBZdEfus57AEoCS1YJoCW6JXyAnTPzvjYmgKfuNhsY1F3qD8En3adyvDdxViMhiPSjww2qzjwXUWcVmGc79Xi",
  "key39": "5QnXCbRW82D1Myjq3aJmW83mMeaZeJDHySUBmjZhFpQ99dLv4kRdoxuvGkFPwm2hTTfGpXTZhzBnY8r1fz5Nv59R",
  "key40": "3hNPDjo98iXScF86PKpYMAsQePju26Da2AuzLWD6p7BeQovi6A2JVQVSXKZbJUvcgsj8BNAKyr2UABGrP1V539j5",
  "key41": "31VNL8jz2Aj93JzxxNHZxQnM3cBoYKL3XiaD5coXiJSkSCkVrx7YxS2MeNdQ9pEZX8TLM8i1aW3rB8WLfwPE2FFT",
  "key42": "2PffFLMEWJqfdhiQCKh4Dkn4pw3yUyshhdmX6ahHJ1hH7D4rFK3zesEW8VSuW68r1Dija23tpDVnA3t2cctRV1Er",
  "key43": "2KbJgdbxYw3ncjKsWNmESQ31MPsoM9gzEeMXsEQhJ1k36vUhgVcQnCvyfywyGJP2Vi8vFj7BvxM3AiJhkeLWB85a",
  "key44": "5keQfwwgzpxGJESS6bTX99uJtRYpoHbzTRNyKugptECjTUpW1uiRTqKdmbzkNAcWdkPzaMgDKgVa1S9CYfLydCQw",
  "key45": "5HMiBzAYPrS5WmAh11LwTPqwUgxgLE6PvQAjPvHZVvqBYJjs6vTXukGu1DFYLdpZEqYXKymzSAgyXYTe2gLzU94y",
  "key46": "67XiRp2oeFSUGSe4Qnxi1UWUcmmoMk2R81HpEh34ayC7ZYmDqemcMXNJqKK2o1EPh5hj9GaFS1iPN8S82as2biVi",
  "key47": "56xf3FYVySJ1ok92ermN3e2inuLjpBrBxSMEoXuJkgEvV7hMbRsSThvjWrkF9C7SUmwVBhDE7pLAeydVKfKUszgR",
  "key48": "4vhVQSxw7VqYn7qAQDkQJ3p2YHkjZMHRtjLcxb2VVPm5JNqXhY36DCNnakwU3pVgBJ3GYYuVgJG7KN6ixioFRVyG",
  "key49": "5FP8uP4Xwy3qyur6pbCqgbVRQ31mJLs1Kq9RgAFX2SmLakAwaYGMm6rkKWs2v7gZ6RDszoakCbdzufDDcxtFrBr3"
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
