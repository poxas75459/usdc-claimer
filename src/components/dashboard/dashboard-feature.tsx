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
    "3ST7u3LiYxyHdM9gCRYtsGVxdfERDpRSpH7RYvKp8Z22G2qBHCo7XBeT99xNsmcRjgUnNfNHnacf1ymKHGRz3gqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R9VaMcUQQaxBTduC2fZpQoJq4pAbcXFUfh9mx76yEEtMSU6zcEoporFotLb9QqbLh42pnHvQwsQkJqd518X83ot",
  "key1": "2NGbstYBkr6np1xJFtNFmyoddJgLphKAdayi2w1J9G2YX1Dpo5fSFXZ3DgTu314ENoECPsyvTjdsTsBrWsCoonk2",
  "key2": "9ChuqP9nhTeB3PFnfRfzTu4qbATgFLrW4Wm2FF2HdsqqG3A5ESow5MiK5RKEvbf1TZhps6YsdFh72Aoiuaud97D",
  "key3": "2hRpBroedxYX1nKvY4MRwDTsZHbXhSZjqu2fa5PbBpAa7VmtwNfsVJV25VVTBaZmhcsNFPxyhnhVY2RFqqQfpAho",
  "key4": "5s2N1YdLiPF9KgcLMFKFdRhUJ6N8qzVdGkHgHLmvySWSLwefbcfdXCoSWvQXU15KqHrW9JqJooUHvZ2uaVnAvPoD",
  "key5": "5cPwzXomCDSx66BPqy4WCA4UB7GHbp7UGx87y9Z6ADJg6w6rTD5reHRmKQaREjTZhBVJsQUh5NNVb7jFxQttZX1X",
  "key6": "32GLWLDWNuMdb1CdBoKbmwKzW5ymWuRdZeVsb2nLhCWTcnJcQvA8DbyqPb5oDJVpLkT73mEagr9K3ZHePFwvNoJY",
  "key7": "3ydbLUdmwo2WuP8TPHBrmv3Y9u1MxGsogSCEzaQE196TvxGsNnubBC6yJ5wZxhqiXkELcb7Xb13EATzkZNehfSxt",
  "key8": "3btKBqaLFnykN8QNTSJH7qoPhqkUy3eqhWbNJdHkqh6NBHBWPvbJ3UCpGE3DNFhmzv98aN4EoXK9KrdgPoS3kvrQ",
  "key9": "4AQ6m6jdcbMqVM5Nbwx273umcc6fnytYHR6rQFyjkFH9zVaAhsfRpa4E55D7nyMV16jP7qPK26sXD1dCBgWEXLP2",
  "key10": "2EMBbsQVaHjhBEHrxFgwZgq1bQJtSDro8ticzU9wn93EfBWBDsYE2ZxBFcHGv1gHX4A9V7nGtnyFvnUEJSHmYBR6",
  "key11": "4h9tG3swBUSfmptWiMqMJ3EFGhXhu6ukWD9RyP3xr2HUohTrw9A61YRiM6MzNy35F8qpHcbbuEnJYAiRvXCgD6SK",
  "key12": "5iTciQYEszz2J7FDP6bfqXHnzzzTxVmhwe1PTV1qeKphqorwfgXuwXyPbk4DsSkM9AZzgjxeQzUpb2ZMRwQvxXtw",
  "key13": "5kPcak9qeAEb84AnJqZg4zchsrtDGKwJPypQHhm1NdBtzLwsbn5XK7GF6yG1mBb96vrjEQ2Y5VZvd17ETgbfsAHi",
  "key14": "3omS1RaNjzH3GQ4fUZh4soVbWxNQoxLBhsj9nQAjfTrfPB4MgxKv2d2GZs4fMg9EccVUvPi4pkKdL76drAsxhz9j",
  "key15": "5BwtgSLdN3Bm4ZXgQZqKLnHWrVa8vdy8zxxE8kAqaFRZUaMMGDYk7NvnDoXR6FwteMMNuSm9CYNJo5tNzZen7DzN",
  "key16": "51ySUqmyi6aFCE17FcQ6QcmsnvfwNsn3Kxn2Yoyfix5tsQLaxTikp3e9xZfFqNFyySFSweoVd2nqnStxeTukBawv",
  "key17": "2XmGc3pLFTGeFTWJ9yPEqctpLvVncMhJBqwiyS6sHpTogbt3zTypA4bMYjQyRkirMoCSwT2Exnu67iD2tZKh8zF5",
  "key18": "2L3gBJoQz5W5kKgDgKyuZEoGQmKdwt66EJTnQe6NZXb493RVcous3TS2USGRQTqy6gPZo6jbuiuSLid6G7NUMtSN",
  "key19": "4Xdb673xk9dJ8DormXmHE4XvDg7Et5dAnB2k4QFrwSYUzsGkiu1suCZcxj9MGgidA9vbsZfn6FSu7csqSWJgtkJk",
  "key20": "5ajT7JWYtTmPZvQZHTK2VM1vqz8AndrwMaoVXzmBkcpKoof6mDe2EvxfKQsnBnqewmicCYkdP54Q33Advb6hRgUZ",
  "key21": "4iLN3i7ZLe4mRVUSemjLibPwfBH94Xj17ZRP2dq7pQM8U4buQLMfqH5ZJuW3NDNW74xX33HNrCGFH4dvx9W55VBR",
  "key22": "ZdhQZ8a5HmK8idwtjrkL2yKhcJZ2CER9Jr8m5Me3Gsv2PYxmPpKbTddZsGLEucifBkGrryvPtDnXceMv9VeceqN",
  "key23": "5SEagfdEshUXx4ACUhEELAMqz1EqtdSA4VQEohs8wkVsb8oBF8cWqesHt7GS4cKXzksbR8sbfZQDm5dFgkYaaQu6",
  "key24": "3kqPErzxRfN6jboWeg9PYi2t5V1jpqwQ3PjsRENYtwYGMPrNnAVfLM8QqNur4Uj2KDCotKFaL1VAuYBDyg6CrQXp",
  "key25": "4xwn7BK1Ciq5GRhPgf8oXUmTKWz5KEce1qJH8TL5zjfoNQM6SHW1WWr8W3wTqbrDZHimFgQzmknoWyWB8icWTmYD",
  "key26": "3TpXssfaU244kgJK7sDnBdXzGhTvoGG4VuQMiUCvNe5kXWJSNqFE5bHwKNmU96b6JKm6FW2tjxd2DV5nNw8Rjpzw",
  "key27": "3N8zYpGQp9xNMWYXcXz2o5Jpp62RxruPybjZTTNoKb38C8vKRqbozEEkjK242GoFiwBR6eX8Qies4ktGNuV4YAgW",
  "key28": "4JMUC41BchZ3hrCVj72myzigfwY9cfy2yoYkx17AQhGKBbeQHayq5wqR5ERqZ2tHNFtx24KkpJ3zp6dFL7G59xQU",
  "key29": "3KUv9Jjc1Zip8k8Vi1joQ3bnQWu9aN42Amgz2LnuqoUEHzfSHQmV1HSvyGtntaFwX7JnKLQfuNwPHxpY4DSVN98w",
  "key30": "ZdgFDJpAV5SRkevxWZ5eQjiinQaY7ZPsujGYkNhY6T1zGcCzDQi7Y1S8JfDXsgrX5kYCCWLyN4Nv2VZ5eypPDYe",
  "key31": "3ZVZPY3kHULE7WdNP5DxbNKC7DfoP7NZsTs1LZXoXaWuNfogeTQ2AKg7BNTZL5ystrE3ATEeFc7RiLfa8QDVaywN",
  "key32": "4zhMhpuesSZTPSqtQWHjtf1GCAWZjc6Tz5d8XDLq6PwwhvYdHHkJUoRQtNj7CPashB4KRNrp3tVaFeFhkbuJHua4",
  "key33": "2i1ZLzcpnqTckHsuoNNsSXLa4f3Ap7pEWYnnCTvRFoBuJy4nFv41CDfF6H2731Z7MBsw61AnAwkoyUA2bJw1SFCZ",
  "key34": "3PiNH8jvs5o7GxzjBj7YHX1TR96eHQeVYf2YufyrUcUg2gsnLezwAS2J1UQk8mncQT6PzJyMrMk71V9accngWuPZ",
  "key35": "3LCMj9DUp32CvdKuw3VecweCZo4A2qLsRcUZSAr4Cfmcak8sBBCWQQVLwkJ76g1cQbf6beshRR8jJCDiH2E9R3Wz",
  "key36": "3CHQGvoSkMp4BxXHu6eccdn4PxFMe3RzoAVQXv87znfjYQqYYLDP9MEA5XgwS78yxFTMitfMcBvVoHrMBxwiDPw6",
  "key37": "SatYUFd8Kprm66UNZM14u4Uts8p6xwPC3gvitvjydYNUB2RjKku4YZLNUibWZFq3N1AXvPKNHV5VirrgKjyZAv2",
  "key38": "3YWhgkFrYFDsgT6mVkDGfew3tLEqYLDwPbWvCa5GrRCRoej5VfD8Y5aUtuuHdTwEoKh68kudwW283iNzYdHNajMd",
  "key39": "5io25TTJXqKFdp4wJZoADAgD3eCLuam8hDNPFSDBKfkvVcHWq2aRPdYAd2yxwX1bsFdZrgLb8iV5bUzN1zgtmEo7",
  "key40": "3NAVJZ8piUVzfGvDHGAehMRkukWnKqbZgDWxrwNWFGT79Hnio7yPmeno4aYfJVyQazKBLTW45bbtGcVbsi6sGmeD",
  "key41": "sr4sB1AVBMo4er8bwHBH9WF1XL15FEkSLdT3R4bjyrw2Gm4WpFtQbTW8JP4TSUsBLwTUPwXv5hivrFTkksusnmZ",
  "key42": "62mevpJgR8dcBCQCCv7Bf739gaL5TX7wA5edTFXLaV1ACQCcLTcsAgF4CKFgPhgPHrSDAChjQiTaKJwDyqLe6MkV",
  "key43": "QCe5SqmMz4DBxEQNePX5icPUFhCb2e6hsvfCLNRENbRuw2EfmGR2cBbmvEHbGHBb7UBAwUEukhpAxoT8npKucmP",
  "key44": "3SKsgKbvctxqYS6hjJnAbRXAikbHLC26L4X185ES6KaPRe8kpKDU3xXW3ioPv4dAy9vcfzpNX4Z8pk28UzxYwTcm",
  "key45": "TBEmxGH5adGWBNiBWoeDag8pSTJNFhzb9ojy38fRM2Rkiwk91HmCwGdyuujwcw18zpcdeYA1vm6mG32h3f122x4",
  "key46": "5UH3saQaHoPMcsT8fLCBg1WPZbCzPGAwzqrKhejTw3SWsihACDwTsW7iWQ5pFnxrz4U3GzT4czssPCCyoHGPPu2v"
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
