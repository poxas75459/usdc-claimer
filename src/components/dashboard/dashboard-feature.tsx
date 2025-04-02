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
    "3r7TCTUK62G8XmCpcaJKKHBtYcLDw94DVrbD1JFmGdhG5T8QhLWF4i3NQzrQ63bCpho948JikXoKMxycbYiw2VgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gw1aTQuPYkX9jKwdSTkLSvEqNuMtooxZWegqUY34ofZkZB1HFVmdjTBR6e56uXsHiXdTyVPUPzvfJSxqeX5sy9",
  "key1": "NJ9iSW59VVarqYZg42zhCAzZhDN5xsuD9Tk2YdZ78xn9AUzrbxAkRvjAcMySinu9693TYcfQKXXG79tqQEghXdQ",
  "key2": "4ZFx6ix6J49pbFtwbP1pPtTobrkGWnET7VdG5aZtDbypunxgu5W3TKvU4AWMexi7iiNut31TcEFDnCKwRfk3AXGJ",
  "key3": "38A91k8ih5H2ztRTKcuCUeXJFpBqPxQSPCn9VoZfp7DBeoSgM9HZPYeeHeBn2aY8D7zLMJxgjj1JwnssEeNEaBaS",
  "key4": "5uXbHXbYYVABobELyPyHAn7qJKRg7VrXhv7FE6rPkAcTaeABmbdgUhvHL1PV8BgxKG7S9WCfoZNZ8wrDaxDiHP5i",
  "key5": "3kQJD6pfDW84oVzBBooWgHeZbwEKJzxQwmbPcQUARqMsTyhXYGESd55Zf1gCxWZdWVsebHgmEnFugGafXp1UuW4n",
  "key6": "4hbCDZ2tE3Mj9GY8rQFft6cDRv38qWaBvRFBz31BQV77xfJEqsxEdSnSs86kd2fgHwjSbQAbodvxb7Q5cL41fxem",
  "key7": "d8kFNSF9VrR3kr15vSKa4KFRdvj1u7cV1R52Brv5EGF33dnA5vBtLntpZYjowrgFb9SSKJoEZuo32NqiX5UxJqN",
  "key8": "3d5CthdUbJiMKdvKGPCBm7NMi7VUTJuUsjx3LwqXZ2ozKwDwyDcuuwZDxK9zMHFFDkyJnPuESSoxJ2Q4DrYTCjie",
  "key9": "2U1kriwaCgdohX7xh7yNxcR1hrQ6eUBY3qefECYHrnykX7PwPRoAHoNHJ9xJWzVYYHf3DRHmyfHLJzExoNcZrYve",
  "key10": "4KYM2vSHp6BttXeAb66b65GSskRkEMuwUCTcdRLB5PiUZqkFPSwmiU35DShE1wKXb4Kwzs4qbb1FoggYf8ZQNy75",
  "key11": "3adEtMe6UFqXTAtmWykPhk24UnPN1h3JtQrJ8GFjX5KcMTEy25W7SrKccpiynAmVgFzmD8bVjsJtwmPcAQhCs8KY",
  "key12": "4Paqob8QLJ86F48rD5XxR4anZq29AU1cLn5SV6GUDYsVWstpbsuMJYKQnZoMCgfZLPnp6A3aKxrTnnw9vuGrU8vn",
  "key13": "4KRskvzmEWsShGAfZ6hJyve3aVroJLK4TYY3ooEs2j8zWX7AaEFpWAwKb23nw6xsu63SF4hN4gvzDMhr63eZZtLn",
  "key14": "63QFGkB4jjVnbSP8fwb698Zrt53xzCxYDqey5wYAx4g3zCMw5jjAW4PKyZrfQDky5aY3ojgAHPpCJ9cYQW38JvPH",
  "key15": "2C85Z622wWzRFuNhhMShELE6Ew2a2qmLvsi8aQmWR67M9KTxGKeBR5fzzXxZwe7qRkRrb6zZGnbUtgF8F2JiM5E7",
  "key16": "38m9XSyzmGg1vkRd9nqcwD1Wp4rzGeMcvwadTvJsvYXEaXnM6LBZQScdRcsbnZLknBJRSQQjKv7HpzhjXA3F4EEX",
  "key17": "2ctdEieXXPhyzMhDX2YLmvkEzV9RBdbmAmJ41e39xyeb6AdLLDkew7i9ukZHRwEEbMHNPnW3tbpfuWr6eERYzLvE",
  "key18": "29Fttk4KKYVtyyD5LY5sSbFuan1WV3nZrTVCbenWUaUcP6xCp2WJfgjrQzBKLt5QrpoFxmHoXjprtfULWRCN3uZd",
  "key19": "31ii3TwnGgv9kpaqqQGFBCZYYzrHCYJqwKJ47eSwSFPAgGntNeVhhW7oKQ5HzFMp8XjRvWFaaqMUQhAGbuJ9SYPz",
  "key20": "5i8GwxHe2CD4TvsCjCKUPNqqbPQgS8FhQjnMnnHNTuVGHC9dWmqAvVd3yxKGAjxruF4YzFFJyULEuNwhjCBuAtAc",
  "key21": "M88Gt5HjFckRGpdXmWarWw9UMidA1ztJDkHrdHapePgcQwg3qZaNEjTjyXpZVReT1sd2YfMs9b5KcfLV2HeX6Jp",
  "key22": "66zuRDGGvuu9fySsXaJJMMDNF7sdTNBUtEPRgmxFekUSH3gbwaAaxuaX4KhWxkjigUtMFbKqYfQvut5b9drG21ZN",
  "key23": "51ihYoGBV8vSBDMa8KDBmHHeQsDXQnDJ9bkU4d2dci9jRER1CB9iFjLVswEthaQj9iUsPgMLwy4wUdwMFDX3qDqz",
  "key24": "667NCbXEzT2KMvwqbeH8jWxZvZjJU3urpK9ZN7aUyh8XSqyWZiiidCJ5eVvhudLVJZU6Qff2L6D6QyZWdAzgXWRz",
  "key25": "58xzng8GeNGYZm2ev2cTMyUpfReUCC8foiiP1byKzQLsvmUBdW35SR4siNEbs2RUpPzwDkf5PPcPdyuoyrBTUoP",
  "key26": "65kY38tPhRvAVEjzi9BctuAZQY9nidaDjHNyQpGXXnx1ondHFnx8PhfeBtwRz9yiUpr7GknfReeEvJn8pBK1vSDu",
  "key27": "5XMoh9GtPcK7phjP8PN5y6ALWMnYbmXRGZuJ2MG9Avf16ChaL1EcTH4vPBfAKT8pDSnTRh6uhB5XQJaqph9yS5Ue",
  "key28": "5aFXiDPYcezFNVF9fuuH3ZVnyywFAxxt4ywubU6J1anpetNtNnHE4i3hgyZQ1ZARuriGxtjjuH2WoMaVJuVjuak6",
  "key29": "v3WWcTTB3HT7KZ9Sr5tdt9A7Bma8SZCWbq9frUybrGoyWgdnngQv1HqQ819cGBVQe8RPchzKgKxMqwqZCGtLoTj",
  "key30": "5JKo3WvvMDFYjDCt5t3vpwhHXXznmuhwC4x2k4gEACsi7BVoaHGcGbt92JRTJmQrsxos7M2kCtzoE9cDSVwAjgrs",
  "key31": "4PRHVLSLeZLVxwYQGRjRRqf53fZW5EAiTKCMUQDNiLZ6iv83r8158SvapaZ5QKypFowMyfYb9fVSBWJpTFyTQ2jv",
  "key32": "4CuHCp56qqu5oTzWBiVXe6QFpm9WhfTnajeA14TM8B2YeSH6YXK4iKiV9c1U2Ec3ZD2Xp4Aab59rCLt1kNieaC8L",
  "key33": "5A3dwRVd28S67PmW89rhqLcDuk8ocQghCpcnbiFG5ThtWTXTHozkXrLEvLSgunxX5H1PZgc8LmXfEdcGXrwdaPpG",
  "key34": "3GQmWwxS34Wg9uNrRYx1f4Aevy3wwKCrGL7L1d6oyAsGigLgKzNDu4eSdazck2zdcZ1Gyuyzcfg4aFm7gwdwKqUL",
  "key35": "3E1JdKDgm8c23AYtBvpeMud5SpxM1CuAEzMJZVCKMJVTqECx7T3axf45S8UPfDz6JZ9PMXU471va9XijNt3m9mjB",
  "key36": "2ZGtCKWB1gxfpYogf8TuVcby3jLmJTnMj5Kos4bENqccJTWHGLvGRM9t74nrETazbbDtes7axQZMuRDReW5dHCnp",
  "key37": "2CRP3x28JYFb1RRaNySfVTJm7nso6h81tQkQxgoD33YHjBGCo7fEykUuPzTUCJCcksSvm994ZP1vpTPYJG26vG8Z",
  "key38": "52m3iUfXsvhYkxBoeUoySMSjHhUaJWLt6xaoBDuY1AwCHNj8o11XHYMktywhS6gZ4cjK63uxd36SZvD3UPR3pbaY",
  "key39": "5PEHoJnvpm5YG5ZxYDNjcbPoHDNZmPpAGhmkHqqSq2YBzQPV2aqHyVBvCFYup7sSfHpRigme5fcyawN6ziAppPi5"
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
