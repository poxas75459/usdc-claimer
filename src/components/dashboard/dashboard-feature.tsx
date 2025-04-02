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
    "36RFs7Kw8LKy3GUTBrt6jGVUb6nmYPg5tvzvxm7GnwhtXU5ab6eNDZBAVJvyabuGZ1kGeWeGgpgsUjgHbK8TMQav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ty83XtxmMfeJz19keVaiZ4ko7Tjjdc9VTwY9iQiHRkYdK3hrSrLYCGgd7AaFzyHeaA3gLWNYytQzWniEKB4wh7w",
  "key1": "JrJ6i2LgrioNfmWW39SEdPTY58fGgtL8WsWVwJa4VzNdDKJEpaAvqU7iuckdY8Vx1PtgynoqmKvfArhkAXrdNah",
  "key2": "47BEaznocbbsksY59T7X2aveXncGEpRZrnoBsjugzHb1kB7jLx29ikLcRuUcdKN21UuC7kbYvXV1UKTP3mNr7ePp",
  "key3": "2xhdfPiQssnrjqij5VwFoogLC116NvX9Pxvqxja2MMgbDrswroXtABVksenJ4tPHPgY6SpzgsCVZRePACTUnEG2W",
  "key4": "2xjuLYSeFDCaH3V7d2BmMDSgx59XDAKmauTTq1ZkXx5uLJiXu5obaiWSngmFjWDAF5Z9hTyVYCd39mj8Xvao12Sa",
  "key5": "4QgGZd25sjX5dVy3NsTK7UEL51ckPpz34Mk2BACq1jqN9DYVSGBdzbsdKPsJgmmwjR74Y7CYuWBGFNmrKd7qoy2x",
  "key6": "c7MGvGFSQ5hRTM3NsFLMkyNaX1jmS3UTjZKwpfVNbXTCn2hBJ7gbT3owrTooYZarLA9nta8jgQRRPGXcpwPPcE8",
  "key7": "4gbjHY3ABu7XSXXhWuDw74hRQvDMdQi8j8PhFstbZSB6HoPZxNmWhmWttF25zSCBWjjtyBusCcJaBYzweQpq1mUR",
  "key8": "5UBqwaPGmP9r133T7QsjqHDodUeYCBdM7HnXweFvMM76PZXWVWPreZbxbmuVYvbK69CYfzjHn7Gep82iVyjew9EW",
  "key9": "5VLJxZe3iTRCCnnUpfzMdQ39MY1JnErbdGQPsvPL3sHGg2VVydA7Qryyk3Fc6NMVKif9MBvRRHEuKD3A9zEus4Zy",
  "key10": "2R4hbwbjkFQj27nZ2asRCjsqyW9yBMitpNEaDz3nhGXuCFriYxdKfmn6K6yQqDRnxymdZfWDxbFWfir5wSCj3Fip",
  "key11": "5qy4UfuY6rfxNTPvdFHVKLtTuJSbGoympLdJrQCzdhW3cGwBZreBdtMUGSc6CorVCwz7R7qmUMVNJDQWtaq8Qom5",
  "key12": "3HaALWSyPWNk8WB9EKCTrRnwJ8dhJjKsVtEJYxR8AhV2uRDAjMBPjFQR4XdyLz1zWxtQBZfv2AAuuYvp4t2e1U75",
  "key13": "3oqTgjKYCv4NR4qRiNaZJ4ooTEVQWuXmURJJoRvAL6xZprfBx1v5qXgAzpD7wFknB26M8QSKUJrAJsucqbtjxtsg",
  "key14": "G4Mynn3JQh3CvNvnKq8ebDWgEwwJ3vpta2nMi2kTdhrDSiVLRQdSv1kzrrWofA3AHDU3ALNaQ1wu9oucKCYtwDV",
  "key15": "jyYq2dNNhs9rCh3tZVL6KgmU9RBsuMJQXshRxP1GvdzKvBKG7JDYmCKDPV3ZdptBNsr7UAH9avpNqu5AUSUSGXT",
  "key16": "4siTQzzhb9a7s1wbeDEBcuCFGuj76F2HYdPPrCLbMTRu7VuivibkSkiiLf4N9kAJdsH7aYiyw8UKsMAzgXP2DLWq",
  "key17": "4zg7rS7Xok8b9HCVsW2ZKaY4D7PeD9bVsujG8MkhjYmjeyeXPtud6gFyAhZgpMfwKRZv8tvacrczrrgU4iYzHfiv",
  "key18": "8uymtbLhcmryPQ55RWFtS9RpPkKDYsebQ96EDhozYsfywyaY6BoAbki3bjQCAD7WjQWsVzLbrbytXFxMKJnmPWY",
  "key19": "57m8YHAPS41Q9oRBZG3tzr2wMZcUkvCiqqusaGTgzVSMirfDMiyHScfmSMxahKdkXRdEdG8LWaD98pF41n3gsoNn",
  "key20": "454W12bRHyB9ien6wFp3c5128fFHaJTiYPLRRSQJP2LxyZLU2cEfDVwhGpqFR4rYN1EXockDQPqwVvgk4Hkg36JH",
  "key21": "2VYsxBg32L81fSDZaCvdSJ7aDCZkqGE7S4asbLXdzYKGieBbwD7kxcQFEn4Zhj5aLC6ueqjXWabA7ST3sMjFamfn",
  "key22": "3xAjmZV3QNqDHGTeyNaMGsCkucCq1EZGBLk3eGX3QtLpDcdM1YR3W14P5WL6YzBvQuZXgtGAVmci5DGz2Q7ZvjT9",
  "key23": "5NNcwmR5BdNtNQpPytSWohjqWciSLJkdWMNjEjnUWqG4jd9Fn1M9Fpb15181GxEhDgHyeaDWMQxi23mxh7FfdRb9",
  "key24": "4CFKcYUq3BoodtZM3L3RJ1d6bHfdJHG27Wb3WSkRZ5RJ9a7ur5FkwS4ZJevSLRXkrBURe8o5gYjn4y5udwxXMfiH",
  "key25": "5NvVPy19mPWZbRtohNtW7mvRRGjQR411R3sRG18tLZLdFqPd8QtQqjMLyFmhzucRDhbozXWGVfoYNGMU5MxQ4Juf",
  "key26": "4cSTGBfxg7uaT6apaQbpTn3iNtrL5PMb1Yx4HfPg8ih47fwFkhfws7MW6iXFKnqurDtA8PGY6bo8BA8z35TLTUho",
  "key27": "5rBA6Zs7XuLtg65BGsTFLncnQ1JwqEsjN1umKyCFiEra3sqaMoWdvC3EB81BJZQVsfp5UBtA6cfdtWn9VDBHRqeM",
  "key28": "2ESqQLKL14jentp8pnXbTtyn9RAzXNbM7e1xfwb3JJjivQwhrNmzzpb2b22Rgz8msrSwgsFCnewLMQvHA7dgsVia",
  "key29": "6BAm5frJPzyeQoKJYLnsVoHHkKN81xeuNVmQvBCbVoXiCrRMLAvv3MuR8D1BcN7F2EansbbThtvP7TyaWsJTqn9",
  "key30": "3Ac92BYgYbSEWrxxfUwkbbHjwmAj6wa6FiGBeS7FrP69b1wwa3vk1kQjKpCaZwoUHmWR3VhmDcaqJiYhG82ZMzPE",
  "key31": "3wiT4FNJv5nU5b7mDVExmtn69mkusnxhFUXkD8neMrr5WgrsG8Yy6pSuwqVhVCj1yXmvV7cHeE24ScZr12EovYoG",
  "key32": "2AJRa1Jdh1XuEq53yxMvaS4yr7zRoV31uSLLUsYt73Bt38vNMLEFWqmSqv7b4gVis5zki2EqBdH6fQevchQXqkF2",
  "key33": "CvYfVVFYazdcq89h3ECD9Rh3x7vrbqVY7dkpxDJBdUCbpZ4nU7NoVESsh27YKK1YpFWR7DesGxGKASutkBusJxW",
  "key34": "5m4LGNX4mBXxRgJHBqUAYuFoq86YdXWkL5Tmc6h1StwkQEmPJqAcp9ddmRp154V2eDaNdYaxYnTpnzKAihA1r9yw",
  "key35": "3ecSwBctHNP6PrNRz4CNBD3Moui2QNwrhNwmnczNrCrVCF7uARt2ap5hg1ZbPQcPpecVvVxKKuoV7DK3ejqsYKn4",
  "key36": "4FZDheu4YcHWmqJd5mcShG3CWjZ5SigPrWkmwYVSzy3y4ytMUuTQYxmivDd9KkCMXt8uFACZZk1VNqcqaaQZxnQv",
  "key37": "2BL75qSxY23KqiB4fNWGPWj9hqDABJBjy5gHP3PCfWsEATNmsvpZuZMoqDZ7jzdEQD3uMfntNtnFHXiduHPiEygp",
  "key38": "2MuYtb1eVwcNg5tN2mSb5w5Cs8N7zJ8piFFufGYbbmqhzTE5rx2kXYFkjJ7s4FihqZztbaHPW2n92huRKEBR7CzT",
  "key39": "2uLtjxH7KEkyeHVH6WByj7JJLiocTtLpw5MXBZT29i12iVSeQ5zmREb4G8VBY23D1X4XmQUvfF5KzX3dBFkhPE5i",
  "key40": "4V7JFYjdCKYa6YeGQ1eBhYMo4vv3RmW2NhUEgKDkoic9QwGG49wtopqf21TcAEfPqD7GCfdwhYLvbx4GZNVHNz3w",
  "key41": "hBGH5NoWTQqGXdejCGGV8D4jadKF6NigDW2b4XkaMCMKhSkKCWatq6hv5u3fu2zHcHpZFBTyHqdPNcFGVJyKuBi",
  "key42": "5igXoKwp5QaT2hSBj5whtaz2cAPPt1CGwVuV2UHnTBumfLvn6UcuTNjbUofUyZBuFkswubes5YbF63bN6cD6MoE5"
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
