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
    "4mj8QQhSxvAmuoByjUrwBwt3Vr7VX5pWBimh2bh554dKCdK1iuWLHYFfasE2dkXEv3yZstfVYN2wvEycAWLXa476"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48uzDpSMdnL17yHj9adyHoUP46Ezr3JEcE8ok8QRJzKg2NsKh5nmHtxZ7RdGZpWmNMSBphom3EhznBG3BryGkPAh",
  "key1": "2dcTDzjbXJtNiXndXpHGyqKPqTcsGRgBgh5Yb7f3hjN81fWG9GrF1xDeCibdeNNWMr1AqHsKC48mSFftEX41wEgr",
  "key2": "oZnKjaCP8Bu46NbUwWj8aqFAfp81icFE66wpvEnDWoFk2EKrwDzmzrLyEeaHuYD4tpETR177TtuhcMjscfyNWXD",
  "key3": "2AWKjLc9Ljjn2rQEYQqNg6MVJFVWVwXcDVdAL6ZucdhGXaAHV4XG4GAzynxTLQM6McZh25eZXt4dN83GD5z6uNJ",
  "key4": "4M81evCUrSDAfKCvThVCtw67ZDhZduTFPEEFDkn1ekzJd9Hqiu6ZqpafaXFkDAFx6oCTVM4b5DLcPBG7HGspSCo8",
  "key5": "X7zS72Vppbw78pkhQHEZebHWxWtteRSpp8Rn5uHD8EywBaqqDhaxHdTJBVRF8V2w3BBr4gyAMizPUKUgg9zguoZ",
  "key6": "U91fJEeGLNVvwPJLhCu9HeqwyJEXXJ15xjHut3sewfRS3885HUx28Tt3wnVgNJMCeKmEorfnYy9yULz6ojp87dU",
  "key7": "4cqGiT5tJYjDdsuS8oYmrbXHqqjAD5NXfQzvmUWBKcBSCPYxEAwABzBBQSxxmCNm5UbvYamJGeoTjs7ZdFo5sJKM",
  "key8": "2iZsPrPJAXqbBtUemRq6UCByEXFjXBuH6Q6ms2PFST4dtKtcGdpvQYcT4pmaABgX57dqu55ryBz91YJCvA1MaFcZ",
  "key9": "2D8JwmUYvfjUWbcWgGj7aXUaiS45bYxhrpHAXyuNxBsMCe5v6FyK7SFAcB9beC9TRZRwbbRuXSX8DQEEFk8Qrrt2",
  "key10": "Ru8Y9PSdzoiWudm5HaHJW1smhRJg7mXQrrqk6uoDv2ZN7pP3anTALgpyauN78PJ4EY42m14NVjccGdRnRb6kXzm",
  "key11": "1w5mdgZgKxeo2iaBhnDdchcknAVWpuFXaMy21Cbgiq1qdPYo5xn1SdwMJZ9i36Peu8jtiYWnmn2peaHtFjTYUGr",
  "key12": "5sfftGKDpVDu7tJQCN6j2QkxGuMgbdXR3v8MwAgHDSBshDRpG8ozKvTmWgRiABww8c62xDedEHswjUFizvsDGZRo",
  "key13": "4Yp2WBHMuJNKf72C6XDWdR3JL4FWyVs55aKMmLr5MVEvzLirZkc5GCtpZsTctrmwAJBMrGFNY9Tfb1qaKWW54YJZ",
  "key14": "P8jbv6YATXHaV6KWvGBtJ8EMJLiBGEh5NcPCs32TgYG2S8V6rDziVCdvZ2o8TFvuAVMnS1jGFGBvR68wmrCDcz3",
  "key15": "2jerU1oToWCCLyTMPPLnPbyvvskxfE4bVkPFx4VyE71hx1r7yZgsRZMqgwVCH6uqhB2BFyHrNJxVreGaccb8E7Z9",
  "key16": "5S5sGd8j7BQDf2jYZjXkv7cViu8MnNdLVV1h1sbSSzUQCnaMFHnKAbmEAfyhxWHbjEkwaW7euXyEDb2bL2a82nHE",
  "key17": "3qNqHNW6t98s49e3YTJLWT6x9jJT4Ei3QbFNdt7SiikgL2pEAdrkacbLwe9jLwcRKVnWMNh2KBJ5mSmd1tKC2Kun",
  "key18": "4411XshbY9jV2fJsizJQ4ifnJCB9gLNLnyMdCracmVZf1ey8dgvMQf6b6oXS3v5eCNfGQHpGsTnyxTbQqLhR2aMi",
  "key19": "2TCiZ1wR9eQUTM5M173Zi2LoKK6WkLEEX9j9UzDwhyN6zwjw9yEDUJ1Hdh1yAz7UKvs7B8nq2JEHxqSXcjLqPfcE",
  "key20": "4SGRKkrt3XcKxCUrVEiTFPCBg5dpNn8V3PPQdwUEidAKPUES28XYkrCLatemNjM8QF6WiKXdKwUcnZJVQM2acD4k",
  "key21": "22srLqHoTybf4qZSMyTaHa8sRVRpopbfwKNMT2FDiPVfXtsqRwtQvX4q5tg3cPU5FfP18fpUNquEd9XXRRR3ACVA",
  "key22": "4zBAGyXAn6fh7eAGxHYPJNWLtvzsJLVtQAQWfXjKg1dTYqzqtnGg77BYgT6VVCEjyiULY3U7FdiJ24X9w6EZUcuG",
  "key23": "5t16ubxqe28AyrkWHBcTupGMUHyiqAuZYLTsg9wCMfnejJ8fgjvu2R9XD2wJwdvLgPzrEJ6PCHH1iwtuMX168hzX",
  "key24": "5eg45fqH1KpjCmWKyZMPsxExumUFHP6LzKcuyBSuizPHXDzjdJFCuPUt4Cxw92z9GUE32t8veBogeT53paBTorHS",
  "key25": "62rUrWZQu1bJYeaoAoG9mA8PHtKGCQj5RvHGYK4JYUGhcZKsmn6n6aFy8LxRih2xfpnhP5PodQsUbn7azfZ9oh5N",
  "key26": "5LC39A1DmegmkhyHA8464hcrY2Kgc2NFTTMidjg9f9nB5eo56FdfCZXeDrqXD48kPZijmXCBhnJq4rFzq2quWNCp",
  "key27": "MV8uwprAFzay2d1wbhJsKtMWXQshso1Um7MJbMQygmiKsuDXV3ZYfP5Qpz1mAyqHzvVerJDcG4Gj56gaXaXx94z",
  "key28": "2qLgvaFnp4pLRn8mLyakPFtMBvY6ugJ39UjP71jbeF9EiX553z65dxmVaBYycxFUH5RXENYdjRatmSi2ezgzmQej",
  "key29": "5YhQNUgUXRtCNNJ49CcCdS9fVSfPRaRsBxESEFuqiDAUukAf57ZpbewzPL4V9Vp72hAqEpURPDm5tdws2ZLapF63",
  "key30": "2vDkDw9Bdb8mrKsX7zoqjmhJTjmPM4VJggwXLkSRh3vj8TXnMDVsAu81cprTAos9DTRVac1WPiE8tW9PH4d7RFRj",
  "key31": "5Xaqh3VEH77KD4u7z8nthuyXUyGiacSJVQULP9Mo96Dhop1nrU1XWhCCPHrhJHMht4vhLeTiBZpnocbbLhiXWBkh",
  "key32": "34KnJu98a7f69AZ8KYx1VP963pxAyW5e8LMpv4EG7igV5zuFZh6AkSr34AMUb2vmZTbhhwcw8BLeoeKk1tfkAp6T",
  "key33": "3BnPaSkZnb3fji71GzSPZmNMqJgevEPGU8W8X4v7WspWjNJLhvJKMWb6VmuNqF77m77Qx1AjgVURF7dJGvqdq3Yj",
  "key34": "3GaKM7hpmiW6WBtfvNahXZcoAFyyjtqP9CcesCDn9MwvjSo1LsVpfsYwEQ6FLLaPBXsRUKHp3tKwBdAUnmxLxaJx",
  "key35": "3zfuWiV9RKk93mLbUWCHCZz9LWzswDAQrkzzaicsAXYnsrPMWk93PwtZRVE2rUtnSfKrbDsoR8sVDScL8GEJQ3q1",
  "key36": "67UfXWkBRXWTrMtiCfrKC3rA6t4CdNhSxCrr3cBJ8bVFy6nCJEvheY3UewvzjLdzrADziLXzS6NzjT3Qr3hDtk5b",
  "key37": "4YiNZcUD2yiFQvPLAUyaGoaGo7RoUPoY6DuPSzSdxwoT5mMCQHWRBbbBAWTSzJdfvx8rkaiNf8oRde9zNvE7WMCo",
  "key38": "5wZnU43T6iMjhPjNNbJ59KJtzKJjQC5iE9oHrS9UPAt7i73iFpcb1mGQan3HKPg6Mo7jfQH8LbENPHRnW2pbtNFU",
  "key39": "fBPqgsuBGeQZDPLQBKNC1e5xnACe72tMcu7aeMxtYdR9S5a3zKrYEfwsY25nQhQu2kZZ7VXrSQeuNvvkAcsdxSx",
  "key40": "4hvUkihTPxZCFYeNMsKZyhiNYteRtvVhw1tRY14uC23MZeRXEiKMFwqH8XFgQCkLxtJ7ZgbqFsCzw3hekgrfUyqW",
  "key41": "5C6WTJNewrSyGWpds7zXBFZtSmzdhkk2fLnyVmSYHNCGjywaTtgZbDNjwyGWw9QPvckD9ScW9nLnUToTugwwaDRz",
  "key42": "4EfPGRRWHR51oyP4XsEKKSweqNHwYXo2cD7bAHegsJ7y6SfsxqeZKyZ4rSWXJwaavZwypGWupkBcQ6WFM4hT27nJ",
  "key43": "65VVBjnbVXMjUyfG2pFKBJJxQTwshu1n2udxq8MdqQpocSXK1FJSZXVy1YVwBppziN6yRSezYe2NfZKXFqhby6kH",
  "key44": "47bQExcSjEas1v4P3DBCzNc4mVpGrnmupYsYBQ1THJ4oPp8dKdWvjUdXMR3qXu1jnKa7VCTRYZmxX6cw5xLbUspF",
  "key45": "d6awwn9c5pxTCmjsFvLpsqoV1vnL5M2oovYGsENvCLix9iLZVgGyR2wwH8SHXpMVr86gJ98kqQfNoMHq9fPsmUL",
  "key46": "2Z8yL1NBqmyBELJJoGQJdRmMUGepDfNZ879vQY7ec4WnnMXjigsQLEMmFk6RKA5J3BBDGSQgBjgpV97dE9ZhVzKu"
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
