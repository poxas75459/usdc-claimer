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
    "5y16XuzgUyYy2uBWPbmK6kXusjJsTE9StMzHTb8cVYbna4psUFWwUJzXNdQKkaXt2DuRPjCkwdXMnM5QW2YfjPNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tTJxeoxCQVVYLLzmnpvyAbuJ6SpyvymTvrvNuFxjahbSAz4kQ2mstjjMV67ng1fTmZupzG8kwpTeHjaRbVpTMWP",
  "key1": "2Kn4jYfAidx4ApWeu3Zuc95Ew1dbbdFQwt9rpsw6ETrVmJuak1BFhTfJ162ShpLw77dAgEuBTnyVtNvCpRBE7x9F",
  "key2": "5GVGBqeWJcSbv3wJJzYuHMTYZsYmwrAJbed2w299q5vc1P4TNNQfSYWkmx2oFuofXFbyaMqWuYGumEdXoXocN7Yi",
  "key3": "5HEm56pXJW837gnWG1FVtauGHtgxCcCCdkQoxgffHgybwaktPuFEyqiDE51zPS9xorHcCybqEpLzQQQtfVtiFy9Q",
  "key4": "5y962FSmqFzcsQbzYkfZKgNNVLKEcXQHrFH1MnWrTuQBqM8LQftsH5ADsJ1TPWga8TAkeMsUcGdiQhEsz8FobMEu",
  "key5": "9xJ1A5AAD9yhPQDeAyut32HWC48wNUohbvaNyXagxq9ocSBkisPs8yFqVvTBHV5WnaQJwXeSjXzMPpPYQpMJP1c",
  "key6": "3xdFuZqsNT2kmXxtnb3d1i8owJHGitC1d8zkb3byRCmZCchMLXnjzSdX35M8wssAQJLz21bt5bYaZ3ZAni4gkAX5",
  "key7": "qVXTqWviDQX49yhsoYhXvA55DmT9Nmp8trMM3VZMVPUmUAHP6cVK4rDVL2TrFvxc1v1z5QGGZeMok9hwCv9zWLM",
  "key8": "51iVx7TnJgnZujUQeAFuUKcDM1ZmAqSsGXypNsNkvD18qMmkPGidA61pezr6BMmUtyS46fuwG1TJxHcVi724Z2QC",
  "key9": "df8btHdT4R7PCNMekRf84szdJ2hxbAdSNEKHY2RCyiNd4gh1KuCo6y6MdXSD4LEAvJR97azZcGm31VRut1in91t",
  "key10": "37AWauv3UVPVTqQXPY4iMCK5hBAB4uRLoYkKrDEzQWXaPMeW4KcvQMofgyFc6oEoBxeRqCDDaKWmMFCTxQ1EK7cD",
  "key11": "5rJMgSXZM6bmLcMSU2VJoDgEoN216pk6aP9mY7E49qoNHnR1AFh96pE8pwfef36TBzGkejJTstkH6EBGTiqMxy38",
  "key12": "5QQuBx1YpgaxFnhheSZhamw8scB8RuTsQrneuD24ihoFDfB1S72aDdwEQ8QKECHpEy1qLeF6iBVEig8hYS17Piy5",
  "key13": "2PvmBQ91S5bgRSnnwiNLa3Rg7JqZfWoGsPKV6PeTUtoGmRPVR71pVbdWEyqEh1QTNdyYJn7TpvdtmMvcFshWefNR",
  "key14": "3XDnWPupQBjmAfmtQbgDDVrFNcHqL9j76JZT55Hd3u2JjEqjNkidJW58zYJsfFcvBpmRpnEwcRSLnsMdE5gvpQ3j",
  "key15": "x7fkCLx6MqyzrMTm75DK3bBnKCFxA8DcokZDgEjQ1VJNoe6JXLd6SNJLrBnpsW5utaaVPwXrnSdoge8Hz2wM9wk",
  "key16": "2KZhmq5PvoczSBoUQWgBnLHbzAAZDMz48gFmePSgNsoMGSBEWbKijqDCBpDcAH5LT26TaC84hiQNw4kecod7xpvC",
  "key17": "35Q1SL7BmX2rba6LxK7KyUzaJYUTLqmEJXoUHiB1AgrTwoikNSUaMNWFrbRiTUubi67yTZH8UcL7HKFXgdi5FzUK",
  "key18": "rSKhLsGX9RxmRxSNfeEhB9Hbcw1nP9t3dnjT21GSbUKKzDvQBoXUdUCqHJEw5hjYZ5iF6BBYqpWDJJET76JSXa8",
  "key19": "eG6zb7vbtYuQFyPG5edq12iUmiEZuvogZskVykt78QWQd2cMR4VJiqT4kRVfpgWasrtuMiuHYCYMTdoS1pjUh7i",
  "key20": "4sSqKVC1ZeVP2ukuYzkLVdPag8G9PK9LQJ5fANVx71ZRFgCZ6kACRRgtHftJtZgveKj2ho3qqmSLqx3ZstKhr5Tj",
  "key21": "4bs3duJhjePzToB3GG8zCUJ8pFvyfznt4LzAugLqhkgHHXVGkRANPwDxzgSnUkxGDww1gERnLxKWgoAw97ymGVyK",
  "key22": "4eDomutbo5zy5ZozSYrhugNHzcbV993PP2Bfmo526rrWmywgVYLsR7qTeSDEUEXzwSH2aM1S5TLVdUJ6sGUwZewi",
  "key23": "3WXdfZ85GNyDY453YD75RLqvfAjTbyKCDVTpBFU3va86J8dkw5ZZYdgG9osyeYcv5G6Xf1VxkBkGo8V8SMaCixnj",
  "key24": "5pbLW1ep35LV5ptxDDhidSCr5kKkc7N6ybGJiYz1A74M3Aow1mFBz5hF95yjBusTA7uKRGzkZhTc8amTHKfBCZts",
  "key25": "3sQ1kjf7qEmeq4fAhbV7E4BJ1LY3S6NRKnyDVAEpaBCBdsrzosrQnokqXAKUcM7Fmtw9aoSmMzS5rTG8ZpuzNdz3",
  "key26": "oqB3wzaSGVK7pLcmKMSPUQkbLfjjjAEE8nYSKvVRmhbLJ3jdW85utZM9jy4P6CA65fJws5MnHandmHLtWpD8rFT",
  "key27": "37ZqgS1DtPSy59YETUpTXJdU4C1h2JR1mk7wzHD2oF6oW7mWdyn5Qjup7YhAVMFgXssTdqo4iXGoZyidYu24md9y",
  "key28": "2cLnxFuZfZPBjPLy16nvAnf8Wzp6eNQv8xgD21Jc6UTdzEBTEkMKXC6CAsZqN8XcFNrAoWZhBYW2WwvhnK9LTwoc",
  "key29": "22gGmE1SY5CF5qotwy5MTeAdyGJcbp891aN2g3Jka31royhMPqgCuyGgUXJsBuoG3KJVHaBZLrfNVkjVjm4d2fFD",
  "key30": "a7REoBKUSxwXQEpvddRiZ8oK71vTccxhEToEj5dB9bbrPGKUvCQsNxc8U5HecmjN445drpnMDXDb4Ajvuzi8LFd",
  "key31": "4KZBj7JDCqESUspDWSnDQY26nRfTLwDkLJrqFnz6bEGL2AnRTaM34e7qDiPYpJ61ixFMy94yAPBpBtUoRz2DLu7c",
  "key32": "3sdtotDTHuXuKzpweQ335QdUMH6XZ7wYqtpu1P3vq9Yy3H7xzbRawM8SXvfUMxVDtdj7UwMYDhHaQLDHHkA9uNot",
  "key33": "3Kk8qfykkyPsFuGLinmTRHYzRukMcC9ZpA4iMC33fuWKNBJhneZbR9HANCttfdbkKe6fTYp2HvTy1qTDg23ab7QW",
  "key34": "5ajnawU2xFye7ijUrEkWr2sxGbfayx5fR8NUdm6r39KCm17Vk56UGmogtGRaFhw8gVtjEFPgXdUJToTgbFbziYBq",
  "key35": "x4ZcZzxvgTUaU4chfoFdR3dbyGzorgRjLM2ixkgWFesrPJR2HUeqkQRGmhY6dN2Yh4q7jbJJk5G25kdjqxcsJnw",
  "key36": "3ajWstdakYNnT4BJiwCKRtaXMUYpR2xP8qxBBgCwnVFzRFqKZ2pARvY2PiPmRhBEg1K1vBRpj6NoYdJdxjqHLLsk",
  "key37": "3MN9NfJVAWXmL1qMJ8J1BkpBR1xJVFA9m9CbJs1MbDcKbCgi8NU8B2e6vZ6wfLi5BUcHExmfRhMiGRmjnGjpc85P",
  "key38": "23QYi1SpK4BNHA8us6oY88dicXnkBxa2UpcAYDehhmvUFLJrqjdu4juR9djD4WpZjRTN3vUCSFQ5quV4YbMda5Vp",
  "key39": "KknjcXVW4NZhmBnARzkSH8Lo3RX3MPDRMi419hxLK3trobrvhgAXuJwtgEjfkksksSHjoQKVaxXHooxv7MNzWFh",
  "key40": "kpCSLk6nX9cS5i8scxu6YYQAUtjZpMbYwcSx6tis5jQrH4su3tLXmqFsaK6a4cZF26wua4MGkCEeUEjgUFgYKcq",
  "key41": "27NgW6uyKegW5Yrk3P9u5mesxrGqDD4NcCcBedxHEPFZRLEhdsBYQzKSYrwaEgUknrtp1TGybvnNXu6zf1fvDgqs",
  "key42": "48wpybFwhLGMK2HtgWzLyRNM8UGir8RRv2NtW8nfPx5zwd2u18MbA7AeMAeF9XE8iCZaEaALoSKxCswRmdFipv6q",
  "key43": "3Nkqxp39SjJR8mNP9LdwMkLWAbbh9kquQdUpMJh6eYhxyABV2nbHQFE1bkNmud5JVmwtWjH8HGAuMNAvyRkGUgm9",
  "key44": "5yBhrcPPVL11vHBZKFsn9sU4J3TSdKB1y5RQ6JkEfF7SyYt89yD1CHbBKWLcrvahvbniG1xLKLDBSG4z8paYU3yX",
  "key45": "2ATBKaxGP2SHrCAMPfBeaUjUeoqfB4NGZrx4TYGSTBmftPUF7Thf1g5QjPdFhvEuDagqatrvTTCUm2uw1gsGrVpz",
  "key46": "4B2xK9WZExvmRSwBM6ET3odPrrwokdS1Z7hjzzcu7vRofPUAfy5PBUypu1FRR3z3nFi1NVpzRgTfhRe5MA9JszXn",
  "key47": "YDG4D8NWbFVXUoMG2GUNkjj1ko2sXYBeb9VJGJpBKFqLHXvJXZhhLfMSqm3e3uzyNiPDKgrz9JCeP1mME2LAN16",
  "key48": "3Pj9VBUSc7BKwhy9mcX5876jkgmWspfgVMRMeadMrKg6yxCRFwiVXCB4SMUDxeBvLeP1bYtfX93AuVnV3F6hHYed",
  "key49": "5tqYcDQ63ExqQig8tNJXjgut3aGMqwdeLeW1NeYxNB9V5XpT6NAmCnvRNdBegW6skcmPV1zuhc35Tha5K77ZUGj8"
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
