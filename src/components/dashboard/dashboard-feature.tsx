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
    "RSPmwxQxRzCKCogo5DFmk1vaBaJXPztAxC7f284DWqw4L8DqHi9RHhgYHpzJHddxtyxf2QErFT9EH794JUruY5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gjne7gy6uyCWCMPitdpzBX62dGoB2BxByQVzMhM2zfWrAR749BLKXpEx6tDhjkw9K47npotoKwGw1fa6LJX9jre",
  "key1": "3ToDbKuvHh7WiXaHE5XdKjb7C5FaRGBhztXKYkfhocLyi5iT81MfeDELdeCnxTMHNJ5JbuG58v2ss8iDiGiCCsxL",
  "key2": "5F1W7Jh6hC6pqv1Gqvb6oAstMXd7sX8bLFPfMRZb912PineNSXjb6EwNcTHRDp43o3GDo8VtdA7aFSgMchwWCQ68",
  "key3": "qGr3J5AvaPBs7R6ukubS5ndcagHsJ7NTDVtQhmt6YSLQkqcpnFzN1PVk3pJeL6HSBZLJnhAEt9t9HHwpLj1yHGp",
  "key4": "2TzdAaXRTJJZszVngfEYbuoqt2RET7D4EDkr5vFpA3zTHkH42D8Kp8ZPz6oPMWuihTZX1P5ke38DBhjEQZSurJQ8",
  "key5": "57hgBqfQ7eAdU6butvHCjaE9MHRGeYqsoJ7hmVtFjhemwhkfbU2dGezQpe5DKtmVRV6cnHvqfDEg1heT3j4X6xTT",
  "key6": "61pBLLKiZMePDFnYhJPfbxSCVVRJVUjTWq6dxrdSrP3qdtfZkbfmpzazeACBNb8TXZKJLPj61vJdpcMeeZ4H69UK",
  "key7": "5nLCM47XEfWbezqwSYrZJwP7jhPc1jFBwDbVdYHMp81ev96yXgke6i66NMxwGzMiSCk6GYP4AtzMj8eeomWusKS3",
  "key8": "2Cu8xxRxEyedj55GKtVXxw66nYGtjgMUaGSY5Eq7A4Ed1LSUxzEwJu27CjFirWAoogEdptMDbqPgFcd7EVTXgEED",
  "key9": "4kY7cPczuvYm5ew3emsmdUyK6CNtPWrvUBKnbKqqfxUHFQ7gob6UHpG4QvtiMadufZ2fHWc9SNhnWFqFYz8oHmYD",
  "key10": "2xJXtnapqJs7dzHoa48A1JshtDCbDgFDBTw7eQDNhMwKMksY5xn7hw1v5mAqM2WMFHhaTSscPDTFhJj1BGFtByx5",
  "key11": "5CdnUAzawy1rqeDkZyLdbGhrXbkgjQbAdKWNPconky7PyvQddj7MJ8SXs5Vb9LEn2iN6VqRiVYzPQ3FSSFyMrUjN",
  "key12": "3URL6hSevg38qoFYKb2nodHfdrk3tUKq4DQaM4jBHt1LzDr95h1dnuzfEexb9MGz7X3ibgikucXkuc3DA8JKFF3i",
  "key13": "i4JPUycb39RM9gUSnLqbZJLLRVyLmnivnx8epXHGVsnkubrCokoo4Z4ZePvgBVAnDhYTGKij449af2bpmMfQzRC",
  "key14": "2EgLn11VocJoE2U8QBdQfLrhb5DWTEXfNbh3v4aj2PwiLaET92U182Cp78APwHrQs4Yrk8WTi3iEosKBE8vu815u",
  "key15": "2ytWm3UvaGM51pPMRZ7FbT4gHqiB1F4HR1kqZxUhmr14RnXEEVoKzhdBTDfN9vngjkHtYuf9rB1dCN7rW95oXtL2",
  "key16": "3gfgWtw3YpMQRw8hCH5H39iZ5Lx2u9Y3YF7qFhyxt3ytfyGwfdr5KZfYDWVAmqpq5LgFv8fsvZTujBUoBd2dzGLn",
  "key17": "37fL3QVAo4RBgy5fP68Phcr6b5q6C59cBhJ5A1wSxQM1RiTYNqenqapzmAJGGxxcXPUgYpC4bU79JE8Kk53PL7Zb",
  "key18": "4dcpDDjKRuGKRTEte4wiA5MLDypKfWyXzH52ZWGa75N5EALmXULU1ytV9k3LdXSYd6U7La1ksWxbRV9W1mBvJtfj",
  "key19": "4nou8CnS32JsEruEivJUsRy9Eth47NSWx9ADrqucrerANc5s5zQnnTDrtL9jgNUYgX9gTftRYp9AoLbz9WLgRdhF",
  "key20": "45egiaHrLtZRMJm5vFjLvW22fHFgkpPe4Seg76UAkjFewepywfTjRRBECtEMVRGbzQdagefHpK6yTR5MRpahckme",
  "key21": "4haXRzFyaBhrrmmVK4YUkdLF1VmX3C9QAjYq12pcfvMaiqGgTgxtUFQQMwdyLFLhPxwH8Fq6Moe4rmQ2pG14NYsD",
  "key22": "H7xwm2PosVywSAyYQuNucDLWzqNQ8pUnW14itawvi9V22VzuUrWubtjvVzTCNPAQGjRbL29NNVxc1qfQUmAL2fJ",
  "key23": "2Gqxb71mUYizzu4WxP5uyMmLTJ7fVQ2eaa7VJHs1doqdGUkfK3RcGdpYnRpWodASFoqKCfVpWmHL9rs1h7KS4cqZ",
  "key24": "44HATAN5prGehj64fgMbWRLvVe8TakuxfTvh5orraaar93xfomjSmFiygcdZGzfcqN8UhMHZ1uDjCMppQF8owZr3",
  "key25": "2xPfHKRNQd177gPYcjst4HPqK96a4dtVvYusMzmdgYAyi2CrKEaBaKmEmRggGCrerv85QHbhyUdUZEuvpozmCEdG",
  "key26": "47ZsgznUdAa8XToAHcjFesedpk1sM5sqL5ZwLAoWY263GFv7ttZmS5xZP8QQ2dN8Wt2KFGBQyHuhb7pf3vR7ZRKH",
  "key27": "3D9temLm1aS1J4eNaLKPrYb7VGtJajgn2ADvnXuLKtMWwfGMwVyKspKvFZFxhqTxaLr4pCQDaLnCuYGEuVorg444",
  "key28": "HuJ2sxCZssgiZ4gNnrJufuEX7Q94sAFWWdkQb6AUE6GmjGo5eAKdhifxii9UHpotfv32uUkhTesYx8otUrZc2ET",
  "key29": "5dSSAU6tSTcjNXnmxhXQg4UfDdQSi8kdFYFVD3MurteQQCqSQpdexk2eVM1ofgdetLisnUn9e4yGHSvU3cjaqDSS",
  "key30": "3m2yQcXntoKSPzcKiFWq3Pd1Ss8TXWbwu5uHtLQA63W8dsUhpcy9FK6gXQZ2mxN8wuQ4RC6CWjZBzzhwhpjCK38Y",
  "key31": "51AcSH3S3ayLTkEpc3GNi8otXnw639xBjt9ykwCHhd1YqmH4HEtXz9A9CDR9g66FRZ5Gf4sUSiRVg4ukP9yEsJPQ",
  "key32": "26k53Y4ixvtK7Sy7yZkvEnfRQr4YXWpuCmoN8ucpKRPiPkmADFftaPbSwEZ2X7UpYDi5PtZUs4pmQjoRRB98ZSzi",
  "key33": "5C4r8RYnJjQnowhrBmJ1KD6jmp166wU14HFukzJzJAr8vJ3QGJygdPHWXFbrFskbgiDUk9x2A94b2Lp62czfQFXW",
  "key34": "45zhzMtMLeCBGZjFtxvhbTNs2hp66spp5zjuwvLbDuE1ZpUDFrzuAtwE17ZiWFBS9tLeYqe8HoEgUvR2aoh5a1Wu",
  "key35": "2eZg7i2gy3UEpkB6VPYpZ53kjHD6FZcd4VRE4aikJ4sv86TgmnFXf6xwo173SfYLUahGG23oJo9gHBDNY5ix5P9D"
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
