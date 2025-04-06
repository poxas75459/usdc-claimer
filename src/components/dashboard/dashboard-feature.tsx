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
    "2Y5rtmUDJQYyBtAseAeBww7B12NwAB9JwT2EVNoudNex6Sqi4hLvKdPUez2ymQJsGdHM6xMuNCVV3mSHUJEVHqL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kAaCr93qd77yKCAhMKBS8w1MKMEzdGu3ob1APucksFT7M9aHnYj7CY5ZFGMAtsCVJgAhZb3YjqvVq11h8UTp3x8",
  "key1": "3mbqqzXsT34vR3TUw4ut2Ca1mQrxFWxi1jZKCJkjt5iD7GrwAonvVupDg9mqQ7Ls7TaADnAeoZVWipuWwBTSXzfb",
  "key2": "569J4Xq53pHtRFYoqiW1itsji7LMr6aCPJ9QG4mAGQahsapEre3L5a2m3LYxtcBZynxhBk2pkqrqcnaoS8cEnk4C",
  "key3": "3i6Cwh6J7R6e65u6duShAriyQiBTrRe776f6Xi1P1cdwUChzoiCAmJ6ZtEUG3B27x74w1jj5iB5tJhoWmyjx18yC",
  "key4": "3Gri5LegGZgsFYrPVS7zZTyrYKLhTb2sV23A8hp4s7yVBrA1VDgSPHEjjmqqN5w6iHXS44s6LEd5Gme6k8gAGRbj",
  "key5": "3kPwdGrR9SAE7hQpsjYBrSUAfV7f1fym9wguQJMTrMUdALn7zDNdbSTPYzxcsrhW7LKgbSme4PvPfxK55DhfKE79",
  "key6": "4uJtT43ZDRt37HgUZt8uE8vEQ41RStHrQPxduT1QjGVbg8KxWiyZRnE7EuDXcTSiZaFU4dGSz7HUJEcDc1c9ETxj",
  "key7": "3eERzYhaSGr1vG4wqFcNBnqrcAJEnRaKoMmEneSF3Q7RVwUsHuR8K4fntCJexoqBiT4TXNZX1NN25ViNX3RMS51r",
  "key8": "3GGdG5apmEtwwdYLmsWhgzku2B5bKfutp1SbFKiPpfSpHbZMLK48XpmxwP867VgM1fcx8TVdWT8xLGUEBKb8vCXk",
  "key9": "4QAYUU1bETapNKxvZaa7p1H7iYqJH6TKNUSVjGizTcYmiVECZFWAUpqsoEzrvyiPsg6XGsfUUU4rPV7SPU1rAFyo",
  "key10": "5XGw17V4t4W28jjD1Nd9QQ9kTngJuCQmjxiYr4thWo4WBSi74zZcwntKjg1bN36vzHGbAr7e8w6zdjZGHu2CFuRN",
  "key11": "2XdZNRh1R9C52fjf3f25KnmtHeJzArrzADzXFgrn9SofHoVnyPFKDrvgcrdPfYhZpiAfdT5HFH7c1nU6vqtbhnX",
  "key12": "3mTDsRGQftgMkKj283k58QaB81JVQRFGff8Svb5F1Ec8oqKBbQXujSEsQURkKZWs55xqq8xjr75eXZrjmUit1b6t",
  "key13": "5mMXyKq4TV8RocEWzpm9P3u4qx9gKUET4927sikF6PtnyZoWdJ9hdQwey7BnjyDaumoHG7sNjL7YQShJQbHn7s6g",
  "key14": "3ePHR5C4NEf1pwyLX6ha4hQnMWDDznTz378JSJgpEHo7JV6qLi5qYDM54aG1LR5oX7apDgrJ1kUMeR71dWzqMNBv",
  "key15": "5kKXVRLqjLELHz4ZhUxSXNcvse26op4W5oHJv4GH54YkvoLSzku37n23YNYT8X64hbTjAAYUQE2roLpQeJSbjFiL",
  "key16": "5um7zUqW26i7GxF4y1TTjNz7zEC8t4hiCPwwe1omrug5kqR4BGwhHnj8nF7MQxEPQPDW41jKxRAUWTR6kCfbWt2L",
  "key17": "nAWTHa1AhtaFgreGGfscoD6kyx6zUbvN3nheVnd6e6uUKJ4kxG2LUV8LZohBKdU7UogtYYDxbpE6YVkXBVB34Z8",
  "key18": "4zRPvgvf8dACRYDGGgKhLJqQJuDg7dBv3pDWVQkMW7h32zPTufh7jnxVRdngLkpU4HakBCZmyox8DX6roKPegNQv",
  "key19": "27hn7jSMpVrRxS9PopqNqrh5YTwS8VfReiqXCjnwoPRhjbTx8p6avpfyAvFjyvQN3Y6ZFFnjPYr7Q3GGpCRF5iqA",
  "key20": "2PgiVtxkMgL7reo9GNuEWJyK5jkDi7P2jThpxetodSjtekWoBtjRR3Ck5yftqU9oavSynTt4rrniQKxfggv4mWmK",
  "key21": "2KmAMkRYkKrt1xbmPLMu8P6vQzsLzuLwtZuo9nLaC6FVXtXsnn2YvBfiFKpWUpMemjMMpCATs4SYNn2cfiMGMLxE",
  "key22": "2ESczHVzNAYAur5zGpMYNXTx15zn4d3LerfdjxenkFiHS6UpgWfbuiTyPobzGxbhf3pX9dqLkfGMLk7vJ41tXSeK",
  "key23": "4dSeD1iiRQ2Akp11LVxaUKDoj7zajKo86z55aitFLuwD6odbTHiMKz1zJCQCovyqXJYovtfo9J52nKcfAP9vaaKL",
  "key24": "5a4B4bzuEowC5bBGfExaV1tewFhCUyRCcWDAZkHeKqM2f1gbpJG54veSz2BGea3k4VuNN29aW5Gdye2zoD5mp3t2",
  "key25": "375dM6h5MW3NgbAJVs4UmKpQJibQXFNuiSYEMZAABK4oi2ygtBZaTMYQtnkuBiA3qFsgfExFetjQcP8SehQgjsf6",
  "key26": "MrkGro9UjGnCdXeCtm1V6Fvv5UkHkL6Usx5etACneHRdhre4Jj8WAj6N8MvC5GZq6TpWwfKvZ8W2hhEP5SNQd6u",
  "key27": "5MbjVYqRLkKVuoajkhnRNHnFgM3kDggcJpmHPEz8e7G2PudsWhCh5CLGWF7mpDunSJj9BB2zdR7HABQuVaATh6TP",
  "key28": "P8vqcdhbU2JwUk9iMSXES3SeP4xMrFRVuQkaz5yy2KqQxEx5DDuWZhbUpj6e2Lze1FvkFPUWE4oHDpzMvi1M9tP",
  "key29": "23Yf11MwZpR1zZSDnmjkjZnnoJJP8MAjdnomB7zsPrkVkkJSXNQ1ZwtDgYiWbqQYcpHEVbSBaDYbUSBcVJiVRb4J"
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
