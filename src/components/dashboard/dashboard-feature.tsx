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
    "2RuTqbXABSYcatWUuxkh9Fk9hN6ViWkTccdZckCP7S6LsHku1bQDReZa7bgvhN99Q52uASBFjydz8PYKwcyXFjVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "215P7tnLEQdhd56nQvUbdo84oeH6N4vqMBsgLBJ9kisH8PzUNRBfY7UhjaTAoC62TRM6WsBkiB8YLftGgM2ZXacR",
  "key1": "31bdr5CTwafqfEuAQ9V4aABxyywKTmuzCFMaRajKLMSJFNE9iVJTzN8EB7EhX3PVBggEJhhgA2a5tPEvQENSzocw",
  "key2": "3t8mxDWzvEJzQgvjJTwVEUe8ueDdU1eMQ93ovfz9sBtyTZj1D8nuk5ChPsQSAh1913PCEgFiUSzYCCkZAgs2y61i",
  "key3": "2K11JDTzP4FHW53GuQM7LiUWHCevBGo8GZBNU9ewJaxJZfyKnHyDaaazcAguqyqroWM8ySd8ZfdF35Ji1XEWu9QS",
  "key4": "5QzFHbun7zD5jYx2qUwpScJpT1WxqSkHHNUH2K4WVL3R6Z2PuUbsvipyEU3V9QRi61msVLvCUpm6RfyLEMDMMe2T",
  "key5": "2791tpZTsPMtY1cnVWNqTJJBTjdWeSdjTdgfCDuXzAFejzEC6SPfKRW3RJEPKYrnBPhq6EubknGhcopg5sjC1Q8n",
  "key6": "Rk577i45vxfG6MM44DQiUuhEC8uGoHCXw3akZFSPJ3eMX5JLzNCnrrPvrTN3xuVSLqub2Q7tpA8hDTKYYqUDHkq",
  "key7": "QHPunooPUuh3vfTGPEoK5SUbrzqPCYyCK7JXSxdhazvmhznJmgANRGpkTJHAG4kvjaefB1DUiDzw5sS9S9zUQ1H",
  "key8": "V4uYZTV3f4uxQZCnTeaDQjnghen1utqJaZfREXt4iRqR5FaUubBS6NN6p9piq9WNzpG2v13VPQ6B8Lq6mrF3nw4",
  "key9": "4Vb7JSAe4c7Wd6FBDHfbdbe5DHU2gKXqDfb8SomXgTfNvxtND7wAGwKcCKz8wfZtDLLrtyWa2rJKn6QiXem5rJY1",
  "key10": "4mUf9TDp8ApZ7sgJbPWpkJKduoArhUh8JG83BVwCr2GTiZ3tmsZj38KaFfoebTcSUmukc4AJZsFo9J193z4kRvzn",
  "key11": "4DRkNscRHavXRzGkBYUGvzM8URhmVpPJRrYi9ifXrFjNDNeergMAwMzxf98AJYS8TPXCNwGKTVcXWMXQKLB6Fgix",
  "key12": "5UKZhiwPwbvimtUmsqwTaEozH2hnJcJbUpBp1nq92iBG5C75jxrtkiAx12bDiMruiasSNL2jkVBbzu8cFzuFU8Ub",
  "key13": "2HjBXsxGHrgkvQusUM6Sd3vG56e5RTRFJV68iLw71JfGGwUunZrY4coFLbqn531P7AzGoy9Anzrf8FAoo7FcX2FB",
  "key14": "LsWtSJ9Y6iiZv46hpzmTkGNwiZUft5G3R3rwkSeFMePcwz4xvVuYRKxjpz1GR4uNAqD6KFJb72Dbd3fUGHSe4zF",
  "key15": "3TX3hJk2yd5rxfnfrSGr66pevm5SSBhnXDsCRW4Rkk65hSab3edALMSbbyrc4MTNPo53w62r5NESu4DN434QgkVR",
  "key16": "dxHDA7rPbH9RAwokVLv8KR8xqTkmhF4bCZ4BUJPyRnKx6Ea4oLkRNuRcFFLs1wfFjVEL2S5zFkwuj35abKqo2iU",
  "key17": "4wuXN6XykCDMY3hmjsRF3YvVVviuXLQSt8r5uKxUWiQPWTU37vom7Qbjs85MjBoEh315NU7SaN1RH3WEn4z5exBx",
  "key18": "FURBf4rxvRwMXobaabbBBJHz2P2q4CTaZGtUkWGrV69PEjvNHeq2TMPL8W6kq3Pc1kfoEhmrWA4fLaScBSNPthX",
  "key19": "DDZA9G5a4KoAbCjFmhV1PSEUfRHZdPd1uDZL4nX5pD1ybGk2kco9sk9Jk8t4ot8oNLWVx4ec2wmafX85KfyGDTg",
  "key20": "4PM6CBTb5VHTsykjTY3uMwcsYKiwQUzcpCihKLott4XJgrX8bJTDefCmfFmvaMTHLScwRtcHhMaDH9Sts735fkY8",
  "key21": "5MrDJKZo26a7KKKh5tM3ekampbD9ba4cCYKv8GJJLiKKoVBWHE5WiTrLxVvJFDTVkAxVfDmGP9iVXyApkEdCZC7G",
  "key22": "3PW5W2MHFYwnTuCoLvzQoLPLbb6Vx3KTw2yWwE71WG18CzgkVsXpDhdnkcYEEXnnLn98qDfPZt2a2Ni4j3Ep8Mh8",
  "key23": "49darnMiQBZrDeRk6sWgXKmV6fFeBrwyxru5oXGpJn36Gf8aVDpuHT242xbnZLmJfDWs3z1ToNr6t9QcDD4L1X4y",
  "key24": "4JFvAFbWc496UjYUcUBzgbbrzCtTWixjyMRhhqsKgU8FuKgyyrYniD2NhvBrSvkmBN3qTZVaNWhJ5zxHnCg62ZeW",
  "key25": "UpTPF5iTVfe95bJpJnqJ1si97nyCkABNJ379VHJ9fCuRkrMuvWXBdcN5f1hNpNosFtaJLwQLxoWWCj4ujx4oGpQ",
  "key26": "2FDqSashTYG7u4U9t2gUKE1bkcDV3vA4vVM4HYCJpDHqn6eezfhddVGnx7pG4u8SQFwiyFhtuzZ2Ljf3ytpj3r1x",
  "key27": "2zHg3CBjZAs9N1twX9ScdE73WqARDSK55jZUVBg2qES6G5GkmAMHRK7EYdUnSCn6tvjJtpxY5hdRoGEkcasdMKY2",
  "key28": "633jLPWheMMiiSLsj4jAgj2RpFUYrBgbXXezYJ61SqKG33YZWmiPcXQtFCqwo4DUdinSTZ3SgjKgHPmnV4egJAeC",
  "key29": "2nG1tY2UGvoLA6n4ffVCTyZd7ANQ3Na5AkixQdyxsDRtmBfnXXAxgaNP4dHTrXMS8hvSJKDaYQDc3Esrkjon5Nem",
  "key30": "5jWE9xxoh5sFRpLvbtJSwDVuSVCDHGf78sG62Ke9cYUSQNGGyZkGJUh1KAE9YBjYoNhK3CWWMYn1zYVR6fYuJ6tF",
  "key31": "513myMvgft2DzLzmsbqBTvz8xBAqzD9xJGapGyQuBh9XyvsUxZ6qfUaq5e8rhWEivv8BwheDcFGPgw4iYjSEHVAu",
  "key32": "2ydDcXfnyj3t1iDQVi941prQyy3rfA2MaUUSHkoGro5v4SjkQbvzmyparcHsFYBJg5sDCxzzrbBxYPML9pdURoja",
  "key33": "ifBxvkf8vAPAPqGnj43uDEcvuvwcGe1838mkxStRm3QBnxDxxGicdqPg7avaYXJ1DkRVfPgN6kmseXLdQEic13n",
  "key34": "eC6ViUXotTFrdwYswuYnC4E499MxkCTMudEiHLDjQS6xJFLmAK6QYxS6DVD9LTQhw64QqPjcU6cipTWSYB1j9fk",
  "key35": "rSF9NAXB3gFzfGRciRjC33n7VtxeWuGiZtzVjiLtgQtWJJL6mVQvMYRzLPYdLC5fSy5DURxJNJPbGXCewtjcr58",
  "key36": "4ktYQegqnn6PikxEJAFpp7ioNetYrVfin6ssacfZnSrfChYm2XqRxYDtMZ7uUgrTRjUqNCU314hjzXKotqyzAuwZ",
  "key37": "DBAhpiizseoLBKdTdoKBQt2igJXExCQpLCw7sRd6CVjepFPGJZ3MQ9Xy531iA8fiQNfSG1vjJZZ8QY86188mjrb",
  "key38": "5mS5b6YAAunBASu1eJ2FytGLe6DyqvJw57wPKYiUREAioNsjr8zmwLC91gpXAnYoeLyQUWEnxEFfY9Cnxx8sR7Fu",
  "key39": "VWua3fqzBZeL6CmB6MBj3CAifpwCkRki18tTSq3vfUzqToyJjAzEn2y9ox2xctM5sXMN2RktqF3raPFX5EZHANX",
  "key40": "QqKZtzRy1r5PCAKmJ5vjjpWHkbGoG5CX8RfRCqbVA1gjRLFjgsdZjUSqkfxZaZbUGshFvAcZk251hbSR75Mddnq",
  "key41": "36q5kBx1RuTtB9uL9jbkAt3zPjJfLGEH1ExbfTikwadYJYhApsLEUT58LrGB1af6qBsJa6mkoUo4fxgh4EUqJupo",
  "key42": "2em4eZvJsAzuKLojWPttFMjPv12TUy5M9rmcq2yirJ4jZcUH83hx4Thu21dwZM8zqDDJFU64Z41qyWeLsPWPM95J",
  "key43": "2dMeDQcQqDT38rCdS8cYbgq6kS9yt1WeaLKDVNrtdU72WoM1wS5acTPucWMvBDaa5oSZieHXYn7TvPSAVVFem48A",
  "key44": "V2pQyiVYNiQRxLQZN3cYC7hRs8UNM4UtvDgzSH3SqnyHJNauK4zJgAdmhF7MLEkJ2T8uuqEWdCG4uWy9Pb1dEyG",
  "key45": "2EUwcn8rCj7L3TKN71146FZ8miEEKbDBATHR3ZxC1Udcz4hpspYXcTJtsUH3MbcbfhWFqqLiNbvkYTkDvKDD7xav",
  "key46": "5oYkUzjE2h418RzBxzxBGbVGrAASmTWqwi7Bpyc2zSrwXu9agintL4wDen8Py1HyKMP8uCGixVr6KQp8zkFLasLa",
  "key47": "4gQxBDuJn5NWLonNWs1F3DPd9AzdbhawxKxP44iVSWEkRwTS7iFHvAtDkcFHHXSARwq8BdVKpVaKrXZ4AhF9sRzJ",
  "key48": "4mnCx9xRn2Sp3U1DQb6W3VHHG3UFDkY3T5GEjh4qNZ8nWxY8aEm8pEhizByfVzVW5K8VV24QFpiendanWqgxAZ43"
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
