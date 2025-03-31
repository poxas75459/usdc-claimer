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
    "JUUrhwAeRwJpsyN2R48xrdbuMrQtQX8nxD2M7APrjx5z2SyTtLH3v7gWqtYDiJwm4rL5NMAXn2mSmPDde1t622G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uAbFDV8gJvt8hY9NoufTigBVaao57pKKjcy2Xxe2kGtoutcJZ9K4jXS51AxDnpoqZGpSCMk8BnwfeKKgNVQVzd7",
  "key1": "JqKXyFt5Rx9hapoGj6QPLi7NrsgYf8JfsRCqHY1wep41JtH9fTU8yUn5TsbuZPqHd1SKtmB1pAdXuz9PNURLuw3",
  "key2": "2FpXMGM5UfQjmgEz6g4dAStr1tF6LszwrQqPDLJFRyynus1YCcsjQjjkeNnKapCCZMkRNxAS3iwpFJnxkL2iMj9H",
  "key3": "z8uSoAdJ9mXyuQsg8hfHfsJZ8kFQ8UXYXdkdhVekZbLNP5ahV6PdD5LXNHygCtg6VdQevN19uyYYN3WqS7R8mUE",
  "key4": "2bh66WLqbo9uQkWCzUSNZVzgBYYyknV8SMmBfZNKRYzyZ8E44L3M1LYCdVy6zeNcivsGPbs3V858TZBaY7Xpg8va",
  "key5": "nbqWRFi2sqxNTqnK7wRJ3Q3NT9bZQTD49S2jhioJEjesAA6dsDAQKMqxAR2HpjHrY8jG6r8uJEX4W6Rz9yN3wYA",
  "key6": "2K9XLw57KkQJqvQt7YWfCoQL3spP4FnVNABRNdABPa8yxyBS3SWMZxcqu6KJdtSbQpVi9YhUydrancFiYPr7DEJQ",
  "key7": "3Xq81PaxwjuqfVrBYhajiwynteuDnaqJue23KP4LCz5i35RT1ZxoWcfk2DTDyXZ7GYptaiR5Xq7YibxmA38PYAXo",
  "key8": "4EHozaNRQ8Eckeu4FBCgStAwuGhkE4EReECrxPEYraweQm2bxeAQmLLJgxDayqp5wA2wNeC5yHNPiCtBQig6FfRn",
  "key9": "E1mCMYByFzo5YqdLSqSTsdJFwbFmtTmhKTGHSNW1ypHz2E9LNm3VB21NyrA4HuZZpCmvrh72vfmf441Lo8ipfko",
  "key10": "53CyETZjifsrFzWYY8gGS2ysC6QesxKxg5tueYmhtBPy5xyszz1EFYY6LhkRXtfhBYANzKvPJC72jXQyQ6YR9kfq",
  "key11": "2wnxGPwvsqGJ3uzTWqMnXDyRbfMWG8MFShfhfz8Es9eDtfNfauH6Df7QfwfYYG1YH2wMdN5kTYPzQiHW8WAx8FTA",
  "key12": "3Ues2qGQCxo5i7EvDkhYfaDoPMSZwUMv44xg1SXoBAE5em6udHPGUm23fLx8y6KDKuHhyUSfQTJLz2JMiJ8zUC74",
  "key13": "25FncfBhbeiBXCrsBjXUcZZsTDsSsRSkeCUgVAFxYrWHMdXHXAVCsdcg5sD9NZq9axEpW3PdJzbH5a3etLti1iaD",
  "key14": "2PEiLdMPGvb1Z9aQqA9kuYA5ukzKEn79yt17ZJhRJpGWRHDXYSvbTFAAratw8rkr6zUZLsFnhbkviX2yJnZTjbkg",
  "key15": "4TMjKBQQybLQYqeGDr4eTDd1vx3NKkXEp4mgPaxC1B6nhewWkAkN1P7E7Qy6uMBQEJPUtzHmUqgjbxRW3d1fsPSw",
  "key16": "4PQPoCsjDPRhfwTyqr7fn6tLwBN3izNuyrqy77tiy1kd9hPCf9Fp4vikfmNjhLY9ALJBrsquapoeUGs978kqWNB6",
  "key17": "5NX53nQopJ9UZkVTQitUQzv9romdUJ4Wek12dmksFpAr3ZTUw6VuBC7MfHqYwi7EFY4p2CEpAFRFcojxMwMS46oH",
  "key18": "5j9GP2oXjgrArfocmXThUipzYZ238nwgUphcp1sn1pjjt3AoRqVjKNpNmmcXGeAiSxSWk1z9xZfPBLdUjd2jB7FT",
  "key19": "5uFdaatikpyfnkz8RJ9zicpZgC5mRES3ZEofo94xNHjR4dX8hmmhu4CaCY29Edracftba3EzcSgdRQ9HDCKRkyKK",
  "key20": "3DXrZT6Cxv8jhqqzSCQTSnvuQrARHh8XsTQXUmAu9Fqqir2KDhVqBBPzpGHyoko7YAy4J4Pvekobh86qGxqwpkB4",
  "key21": "Kj1NLdC7xjrqYNh8NphheD7STGL6tyUZaquV9LBuj8ZAhfpPUfG6rsuj42XpGbGxerAA1u1r3K9CE7oCXgiaf7C",
  "key22": "5Tv7c6uod4ospww1NDdVzLGeKP9ZyXgSWb24xuBY9seEQPwVM2ZHse26aYjtDGmumdgfZaZy7vVPAFBW2KM6moWk",
  "key23": "t3FkRghecjuhQp8F3mgwitKEaot5PSqes9dpkiRprCfSzLyGNGPBuov18c1dtmyxygidGn71N4B4aYV47sEFZ8x",
  "key24": "s6ZKT7LnxHiWXs6U6ASuvb5n9h6uz47Q6SEWC9MbuWZ8T8g31GHaqgv4Ee9FcDUrjr7fTVLxFXQMDwcc5U8TEFc",
  "key25": "4usZS18ih1hmXVRqPfPU2LL75Wa28zHv2u5ZygV9ZV1E5UQvkGenKCpoVZM4QaXE8G8Fry6MKeip8dcH456ieyFV",
  "key26": "uMRhqU7mxCzXpPCi4HSLZGQYTDUnzK5jZjmbpsiM2DYp37KXMDQcmGk2oPYXsR7H9rtWy1vFYiimH4iWLGsz4XD",
  "key27": "3oyf7pM4VQNdv73YKTbLQjYUCsZwpp8t5Q1HnobN8SBEnFvpVEEbrB8iA8ACXrCg5VwoLFfZAzabzZgG3AKHHbzh",
  "key28": "RRBE6EAakTHc6g5mwhweRsMo7CVMgPJnWgyyAQxqRakK47XzVa457urxJYq4abEFusHSkNometA9fYjB4wpAGyh",
  "key29": "4Uynd5xV5U2MYcdprbVLo7392eZYpGxADH8HhJSiSkpWTckmVa5XRver6XmzKxKYcCCuT5Q8cVnXq8WbUHiq91Sw",
  "key30": "5LyBFQCMYaxP3UatZVcwRRVXY7Sq7zetyP8A9EhzEGYUfDtD54WQ2VJhLt4LRiKzV8tqKx3fGfJzUaQAa2PDzXzf",
  "key31": "CKngLaZjB3KhNoGWT8HUh5QTCSo3GHtjr8hmaPaf7HSCazVGdStECngph6VJSaLYGHvvpMjsFZvHvTVL3vkEDhr",
  "key32": "5CBH4BQT6kYgt271CPEUMqq6pVSSxJZXsRTnBz4BLVHhZ9L9BrVQejxSRzLmmur1xZgD7m6wTRXfTQxmn2UB5oeT",
  "key33": "3X4aCSYiAAHdsxWFfaYb2HfjmUdpsXtvVRUQK43QWtkNmXGSDtUwCgPUuqDr5ncQiiNMjQeqaE7TjY1qZSq8PGbS",
  "key34": "344beS6sgjZ8S6Pv61v6Q9SVgZFYHtC45kYEDnDq3cL35g745PA5KLBrtcR5YdErabPYQvcMkNAzyh1kstN1MpJZ",
  "key35": "5XJdvvrvnJP5E2g1zkvHzLJ82uQUGdQs9sk7XvQRguSqhXoPArC89kyMQC8wf1ZPo4cuPHABDML5hJxe7TTKwdkH",
  "key36": "4jzs6UM7p1tesFaUP1Nw3Td9KWWHiZEqfvGRvCa8vsQkMSjD8hQDryL3bghs2jomY3ao7RMR4TBphpJJb2DDFPvF",
  "key37": "cUUAxnz33QSLZvjvwzjzRatnJ3dAqmAkihgf6dmBjm9i1Jy23zutVgQzfQccHTRx9yTkYueWJXrRqb94rxC5v5E",
  "key38": "5oDns5T6EyXhAnYy6YttUKrKhqEG3wRDVSo166SpFnKRdMHvF6VTe7G4NMKG8aqN8XCm64JDUWG5nHnGKtbYwe7t",
  "key39": "o9QAxP8BkvjG1P1byCjhLogfq7TEJhStRm1324wTticMUoKZ6Dwk4cNhzePJ5qKJ5fGW27YbuQEyb48aFynZW9q",
  "key40": "2eqgBEE4cUNFvtrfq9gu3vBewJpmkwCvEZTDCGY24n9zC1tiMT4UhnY7xzNPUcU4aFE66ddBY2hfvetwNtfkf3eH",
  "key41": "JQGfTKHFfxkruBRMkEBPBw8dUD8Kz2Ey14PbobM2DweiTafMd7jv3ZCZJEEVWHAsgYj7KCDeuMfBQrqnoYZfb8G",
  "key42": "2HCmTLxvYeC3zu4aCTiwrxTb86T5fj9EhtQpCoBjn6fh5CydnCSrasik9VkUDPgY2qkvZD1FzeH7eaLMSbHpQwiN",
  "key43": "EvxTK4rP6MfBg74wwPh3LsRrURzhEvEZGfRm8x6gsHK8KcZNTBEJUNhq8ZM9DNbtJJKTQFump11XjZ6kdCCeWve",
  "key44": "56BD8aTEVUKqLGjFsyvp2NZvGgZHSJuhrKw3oxrhyVbdj52y7oUeknTaHa2NbS6vhGo4kW6gT3qWTCE6gYYHxKM8",
  "key45": "2QnHMQEux7hwH6Dq3LfmiUuxyyiG8oq4C7crcnTfNYbtU9jrYukPNVwfA2Qoc6nbcCancN6GP1ZFnbXe9xPEesNG",
  "key46": "2LJkuw1ZeEFcqTsHpLDToYKFLoqnKdzTp9zmCz8QVmPVd1ftJUtoBSCCnbfu8pUdomU23JLeEwu2TFu8iZiJ3JZx",
  "key47": "Rd2Jy2BLrR8KKgoW23SooVvmL2L7xwq5E7DeNhkbmHJwHEK6XYXjKvy3YeuQ7ZfQf4HxBxzh9nfVvCeDK3Pk1Xc",
  "key48": "2QF2fyKGTUCAfojaXgprmrdQiwJrNZHw2bYcxsepJDxjy5wWfEuoohyEGwrxTWq43hL3iVfApLQ5B5QqePMkRwSW",
  "key49": "4AueE2EqrxtwqikaYbjkDiuPfkgiXw49x6GSqhwBWhucikrWWog8GchpNST7JZzSVouvQaqnSzZoxKTGwhQw8Er"
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
