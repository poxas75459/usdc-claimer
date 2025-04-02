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
    "3T6c6isinDVJR5kD8xxmYAaJ3mM1apLzpZTdCT8e211xAhigrcQkU1HJboQVEGEMrfMt3eNmVETgEqcbJdfQMt7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KK2H4AbjpWCsXfPGbcgR4uRMbDHsu9oux7quEcLsF6zgUBopt7VaQbFYznELo5mJLNQHeuaTn9AXNHSDVvtjgri",
  "key1": "3Wiy4z1HFNRhVtDxT2UupMJ8m1gDiEicmMUCUcjawTcfPY4Ghv2KEWUwNyxWQZsGQUfYn7KniajXCySJ4hQuPL5V",
  "key2": "4JyA6mKqoF9kUiKY3Smxt6bthzdWfHNMQ7aFRuCvPhZj7VCqQhPEKP33DqABvmGdrNZi2ZMNzkgD4nYSbeRt8oqA",
  "key3": "47jwrGxScUbGZxLU1QSXEPC1DdHgsubrtnPmX17ZzehaStHf9K9bvtR8LMBNU3qdotgru9VJpstraUhPxYPiS4bf",
  "key4": "4i17MMfRwVYo5NtfLC6bdRP7Xgj6SAjDatCvbPpo7udgpn3kRTSjjiWtgcbDivXw5vEhUmHET1MJyr3scxJSCLwE",
  "key5": "pXP6mzWhxeMdmycbBEDyuCU3zgaRrzDQ6NBv96yv5jXjeDLv7SeLTp5utiARHTEvbNZSagqA2e9iZAkG2wMxgpo",
  "key6": "3zB4BWRagPSp2rNWv6W4ZGmYmDGLu4XMdEG1dUQD2ESDoZFC9NRThpCfFGxCAfarGwdSKwtc6KyLUMjiPbYfpNq5",
  "key7": "4X6uSYWgnxcHwz89c2WKexYLccmyp4xYcFGcgphJNGJJSge6v2Pyzj6mqG5QXAY84kbRyehgh2V6GCu4SeuZBNYw",
  "key8": "4rfXAJqboEWByhfL6tvHzLg8dxyCd8pzNQetZ1zy4ARe8NZLcPERcYbs9CHywRU8wKmQbssSpuYUrBrfeiggLmrA",
  "key9": "3xEAJxbBPDYUpUco9gCuzbYU9jgGAv4JGCwWxt41XnD8aPYyjBTHuXdxwDT2UVKWUvS4oj7R5z1JUzYXditaTuo8",
  "key10": "3jfCNabyn3psKwydfrixEfMp6PBuJTSaDfyjt6FFfU8mGZjit28rJuWSvEnvVNzbZ7wRYckFYMfpE5Wx7DmTZxTH",
  "key11": "PARmD16zHkEosjoD4s9zkRaH2Mp497Pfa6E5oQK3efnN4qeNHGT5Km72sNXRhaFNfh4oAauMGcmDUgeoP84BDum",
  "key12": "63wqMseCFzJtp8Gk4Mk7uqccGKH7TuA5znnpNMQn38gi3MSDjhCSjGomuKAW5iTNGFLvUtSi3jFwaaAz2NaTs4qg",
  "key13": "65EPm9StXLKV2AEyNaKYN9Z7NuRFMArXjaGk5FFVmmQjp934fAY5XeWr3Lm613U7qHqz8NRanALgDe3fCnfjN4Xg",
  "key14": "2391DmPkgY62SsAskKYwWayN1316BT2s4oY6JMAWSMVQ2b55yMYF7jm8yMVm6NRsVpXkYDMTPiGgL3RgW3UfWLtm",
  "key15": "5PBDP3B2b8woYUoqM735BmFTUWJhQcwm9W6zePDohr5MkvA7Z6j3d6WnoAvwmUpU3pEazSLKEjG9sNJFX5pWRkpR",
  "key16": "4Yu8ZboYuYKNBE2K2NSHp49JXD1apNHXZvSfvvpByjU6mJD1m3w41ndH9NL53ucrAMRvXh5c64jhubXzWoEBE7YG",
  "key17": "3TngjMDtyFRgE9WE3Q8oe4XomiSWfA4oHB3mUf2qrdZsUktMp9gK64mqMWXcQ3iQaqKQMJwuuPt273ceTgahMBtG",
  "key18": "5hDDWhjeevtkzjVkQRfDZn2w5C7qWQqab7Qf3urLwZQenFFo2c1UUXE3Pxz3eBzbWJKou7W1usCAa8xDL9fsEbK2",
  "key19": "3rrjKm7j8qt8LSftjroFJxoPBcKh4GJ2Fn9gMotJcEtSxqNBCQTyqo4uTE92MPT2HbaReaDFnB5DjT9nsejcLBVU",
  "key20": "5kVUWYC6go6agEnAycqmyfug8ahCPyViWiinHN5roHGZKiXzzGZzBURiMMc1gNumAtaTtgi39FiGecPPJDdwsFnW",
  "key21": "5QeSWfn27VNUFwwwq6XpTJoLGZBxtXRofXMS2YzPkghbz3F9xW3WTfSyYoJm3oynTa5cmt9oUrFEgJhXpB56MLG6",
  "key22": "5ChMtiiBmSqNUHqhBSQr2jjARaJuCdLsmpxK2hLx6bpsKJHS9mQfC26ovUGhuN8xeS7ViiJf6fvqnjXx4iPP7XH1",
  "key23": "2csQMmpPyh1CSNCmbgE3q5ZCxxtj4KS8vp7L63U6DBX782h8huwgtoPrHTTW8JJ6yaYWFLZgS4dRgz3HqYYgFTLQ",
  "key24": "3D115FfXkRuXx1gVRAr3G1GHYSi2avSnvnm85gACV774dXasJQUPTHDDhU5vrxRaWjriFpsoQmRrpCmaLXJ5g755",
  "key25": "rtToCkmR4kXiTZRm5t5VZeGgvGMLxZD4TQHGwnNga8ngUsTQK4WgJwQiHfYA2Erk3HurmT2QQmxCs1L8TQBdeSw",
  "key26": "7VKQuLyPayDtFfrrzzkDMKBgbkZJ8TatMiJVu3yup5w22ZgdwpwXTH9fHwyRSqEFykUCWEuhqs3yEGvBEM6Yd2u",
  "key27": "AXr1g2otYr1kPb8EJY4ZHS7JMST1WvQqUnA21uaAsA1MmSTfPdrxVhQkoPtdkHYnrUTfQ1uieWnCXku3RcZApbc",
  "key28": "3KJh2E4hJLptfmiufjNXt5UNGs4LLjnfWEwJAJXYG1kqnD2kZ8RLpKX4ChZY4HRBEHgxnrU1apmxLXeZBAKiaokC"
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
