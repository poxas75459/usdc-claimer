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
    "2Rfn2bskFDGA4NhhiBcgYSYdjxtgU3rMBE15Q9kqnu6zZHogrTJG5bLydrUdTJ7e2xJfXxcXitivLnABpXePbxNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iNPziiq5qUJ17MkMyrgUCWtDVK9WJXBma5mrtpmiLjtvX3x2yEj4UhYzAqq6bDaWQGrUKwBoE3wH8Z51RVdUedj",
  "key1": "2ziRSuuWZvnQa295QpTCYC7XMFfzWKZsLMJRiokwStQNigEGAbUMQXbnvwTb3rMEX5yhRkCFAACodS8SkrpKwBBn",
  "key2": "NJEabh4hiAg4L4QnGmBGdg7DPHyGDgrX69rW5oo7pB2ty418pjEt4mTgbTB9f2BLqM8a9Ruu373TxPsSiFsMaCh",
  "key3": "33YumP3Lo2oDhzfiEeiFKxHkw3BvV5PG91ndC91bLaBoeHhwsurW1iMiftphSNT8aPMUm8xUK5fv2Gzshzwqe9i1",
  "key4": "n4JxcKnW1WykUFJxrFHWEVZUkZ19KBxubR3UT3kSjiPUVKfo4HWjHojAGxLUD39NaVeb7PQStGpZkXaaP1UyuaW",
  "key5": "3aDn3BUdVAeCuSDEQQPgXaueSfzGe47X3ZLjownCWC1kSta5SezYkCEUCcWu9n8AJNgMWqXRPtLGdexuNStWP56H",
  "key6": "2bjSD6vdPtAhvH8jiYifSpChpUd9ELWd2Jao3K5LQzDeU1eSNLrrTeNJav2x88Rk43N1NE6irtFGzLumdcEuj7Mk",
  "key7": "2vqqqMPQ2TkN6PGJDwGZxbqBysMxvxKuVo72Rz6shBYqD1zhyv7SMARrQPcJreQL6K8tbuJKgrWtZpQJ3jxhgfuC",
  "key8": "2YFLVSWxdePLNmYiy84t789KmVt5CqxJhFPEdStDgmTxETzNtE9zmHn6cc5ADbPdH9pSErnhMZGCXn7zpa6i49Ut",
  "key9": "5pPywj1u4YLBZfJ3G66sNGR4L1Gd3tcJLysJ6FNwXAgvFSttWC278Gu7tzotYGm4BwMUvZ1VcTMv2XJFyN7Nybia",
  "key10": "2LMSx8ieio8GWX8mgSumfGB5qKsJEwTodqF8GAuA5dU7NTuptScyMujX7DhhXCHGkM6PADCxNpRqjUC4LZfdFQH3",
  "key11": "5QRwTLcn2ZmwJRsdNh6tn2pQPWqHt9qsPtzQRdykQmZ4uKeKYTB6DVnKLpK2NCCPZ7igAF9Yok3bheZDH7tqDMov",
  "key12": "3xBjTS4Sygm4YgFeWaex17nwqbHTdjAo4pwMft294LSAj1MLfbqgokrTER978qFWya21dh3Qz5d7WutgvvSAtsGV",
  "key13": "4gTz2pNJc8gg7cz67YDonfUbWDsuw2qvyy3dwkzJeHS6jcRhJMRqgWV1tHfhc95ZeYvY9gcaJnS9MRSyJTFQ6tbE",
  "key14": "M9y4kRBDTn47DqxnZ9E8QMjd6Qy9aBnRPQaFHTsAEc6fwiB34zoXeBgX5BwcaK7V96w7jmddpeqhxMqNhyVmnGz",
  "key15": "5p5pheXTtaAam9uoWk5nLWkjKUjgAG8KKfWkVUNRVrwHNmYg6uRJYgtt1XJkLi9Lwyw3hyMtkACmnHyBjsF88LbF",
  "key16": "64SN8Bt4XuSp5YRUZbfftxe2Uu3vv1Sd9ReCnPi9bNEZfEc7zTW6HgmcF12EDWpNQ7cvp1iL15NpcfbymyXJi7Ss",
  "key17": "4kok79xDtM1Ne9zNqagHpCtjkGHJg4JHtjDMR8Jw1jPygugRGTqMa6hoH5QArUrG2RFEUWmAic61KLPZy84TtLRG",
  "key18": "3tUZ4FpAgGq4uKmSfKSucZatp5izwKc6oPMBtfMo81R2cwqGBBPKhNLnfvsg1GByu2wTr2jofC65zThZii8Q3Yk",
  "key19": "39Kzsw3MRXmMWztReLKgQC4o64XyE2QHZj8pQQAuEAtchsNnybLK9rRrhCUfU2dQbXFicfz37qJQ7WWuubKCa2Mt",
  "key20": "ny8jjngQUjF8pTyPWSYWcL4KxC5BERdqPfWRSa3yMa1ss95YjVC2HP5XumsCDbGs94tRHjvVqKhpYri73KFUz8e",
  "key21": "428VLBbQ3X8CHYNiLMU8GxBBicviu34KXfF7TmKCqyFWNUZpcJurDunza1hTaMG7URCZfrw4qNFczYphvzwCBqxF",
  "key22": "5EXjyPcEHbBn6YpyqCuU7ToBSbHxws3GbYig4CCtBxKhBUYmmArzoUDdo7MeDsHyYeoTwDBRPiMpqXWUsfR2VeHR",
  "key23": "2seNeY7oMQawvnLKzApDUyN7sgP7hqLHGsftTjZBZUbnqu4Uby6BF4hZ95qrLHidwLxU9dFYiCMroysM8JrXhhL4",
  "key24": "3sn6fKcDiFyrEkvkvGzwg6jxnYGk8UX9HEYgtBBBNAeCFeeaimP2UyDcQb5EABjNm3SfR8zuiczccp2SBMbjrMpi",
  "key25": "3ezoyyAmgD7qBEXvWQtSq7G1uNHfxvyNwBwkgSHqfGunbQDjJqi2My7jiuvfF32vA5k3Wgd1NV4C9ohgYZSWcvdG",
  "key26": "5BPg9dLAH2jGY2oJjkZndc2YTkRgESE6GEJ4j6QQp8KW7uaMUdSLxXKmuD21d5Emuky5WjmBw6NaqHVjDYTn4XJz",
  "key27": "HwqCv2pfLQMr5aXxMZmLGjjaPuFz7as7NHtMPWeqzU75eqjUFENTfv67m6ea1LK1QaWQt46N5r9je1HjX9n6n9z",
  "key28": "47EZsTqZpD565QHaBBLsH2DuPDrZzbMxj4MpwomPG135x1aZvTpcePHytr1DEqoA9vFSPFshsSk8thL9LiMhnbbb",
  "key29": "oFEVXy78zJSVwmV1EmVbFXiHj8yBgQjxvhbsPQBGJkVvPGjX6TbepgPsYpo2MwNiouXnFhDpSSLYVxnFh1gWxqp",
  "key30": "2G3H7unW8QgRXhvDYYYbYKQgtUTenBVgEJxrzEpnf68ZHzPtcJgmyzUEk7hDwCPDyMeuN4o9Q5vXXjTycEghchRz",
  "key31": "YRSE3tXNoUpLzBdpcikbxA8sWJHnQheh6bCLdFJUZpHutYidBX7HMghGJviCcGzQrF7U3sgvbmgDwCR4NuU7NjE",
  "key32": "518qZLrCcQuDu6FW5n1MWcx8T8eyTPmMU22RUbgzHnnZLnmF2tX53qbA4ZW9V1niwfx6xdwFEuuLf6LQDW5z6ArA",
  "key33": "5vRmzxaaPZ7wAy1qEHHuMyR1GbyjkAt42T38b3oNAHEZoKoUf9WJyKKMVYmcEjxsYMW7oRTd3XnbZGUDa65AGnY",
  "key34": "cU6yWaFRiqchNw1seGLvWMVAVx2V8x37xYqCJR7HXPNynGnRGekNpRJSJgTv2NbwFJrJb11igJDfKj2CuUNtFs6",
  "key35": "23Kt6C6MdGWekqgLC3wmVQm6zwx8k2w1QrqAPpjehiGoBQfLAFrb2FSmBUU8G4Rfu71RNriZsmtJG9HtvFAruLX5",
  "key36": "3g8u7iHgQEDFbqUmLcWdKg7svesQsAFTMmjuWerZqVCgGrKWK41WNAXG8mUNVmhx5JxrjmLdbUGnkxp9JaDGHmgU",
  "key37": "4xmTTXpXKfccLZDP4BEG2G3dRrCUAYnAEHXVenm9pHvhM99BBtFuwrQE3inyKJvbSbA9mbcosYFx6vuYT6GQwvSo",
  "key38": "2y8gjK66PzTNo2E7kBbX7Pnhe2J4Dm12EB2GMhf6iGGEYvbZ2EyF358zWAaD9gfAs43vsz6d9B8NBnHUDhuXwe3k",
  "key39": "3EfSJbu5nTyKSyjnQWgdZSyhcWiLAZBQh4sJVXs7aJTZGZciwg75h5TBJZk7uCzVoe9kmF3uSbxwa6vVxdTrmtrP",
  "key40": "x3GAdciKffxDJ6RoAXgakwZ9qt4ady3wv5Ggg3AVMjbngdAx3KB35sdgGsUjbVjQrE5AbCvuid1jwweaLzq1jhW"
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
