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
    "5w3Z8MPVBuzeRXpK7LzuPzqnMUacPRNgLsZu4EeVUi5PBPdFYdpjnQpA4asDoabuRmKcZ6Yr9NwK4sWhEdq77y6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ftYCzQxoYJas4R8v2jU4UDjT6okcsh1FcEtCVZs3jAkNeHcMMb4At83QWWSmwcZ9jBmpmSC3D9konK4cmZcfiQ6",
  "key1": "2EtZZWUaNmxPHGfeGFUoccWabRj6ebMZTB1mvuE2XK36e7DT2w4mTXJXcrUoJLtYW6bfZyNnxQVzjrNYcxsiQQ4W",
  "key2": "4NFXGVFX6M4f1pC6pb2pAz2uLkKbXbCemYXo9SF7Hp6PGHPSqJkg1ViP8Sz5RNNtYHxT2b195BVNq77iZ5n9uBjk",
  "key3": "5NFERGr47d43SpDCCbi6tihBtQzf5kZtxiq9hyGkZ447sT2iePefT2UEDd1QhC7sibFFSWj9dKQBFToZeQ66QDKX",
  "key4": "QREwubZSPoSGpeYkrb2i4b2uFbtXP7bo5qfCVv2zXbcjfNFLZbrodox3GTwxaAenYc1Qb4dZKG5STbQVWNnRFC6",
  "key5": "2gdTgMstn86wXTLzkaDT72S3RHxURXusGTKUV1HMTxZQNTc44g7nxopv712iEoYGowLPKm5uXGVqjn5JuopQMdHh",
  "key6": "3SPNUHLtzkYLueuPreHi5MrRXBAuFFZs1NT2bGXHb9pfviBaXimRhhSsPUYQXCAJbswtMw3B34c19CTBTGjBEKrz",
  "key7": "66wctXfmwHdJkWAgSNq2KNSGohqweb7wosEugWz3puXdV5x1NkrByWdUXcWNAigUcPgD1xveyaJB9NkbZb5ujELh",
  "key8": "5S4JeZ4bdw1Uo5NAxPZrnAo6VvkDD8ma3DuwAPCKArg9QMPZvztpYXR6aAXujmNZdzkCwad7M7zdT2SGtHwGC4u3",
  "key9": "3qSPUm9VLKEHseq1ri3q1BHewTh5doF6sdEGyKMfwyQP2gxt6ZTBH9FtCL6yufLTcA3MwCEU1aKfaSb2HMRhNJRJ",
  "key10": "1Q87h9rzApFUDzqgJg7wQEhDsJ2b17h6P6Kj6vMZgydqgnBNCvrV81hoAb9gHGmeaeGUiDtBm4ZsiWxw7rDuYFZ",
  "key11": "2YsS1iptD1kKAADAHHYrAMQGgzmz1dVM8aZNb6QAdSQpTcB7JYXKCiG2JssfCEK6f5UtKL47TK1y3tqBghRi6fLr",
  "key12": "xgcARimjKJ35898iEUgVV4rKiXbAEq3muCh5URJqjKNyEVcouPxxnCrBZGi2zdAGw94Nvem6oKP2Y9qyjCrGgeE",
  "key13": "52mLC2RmDvmPHehtenAFcpQscr9D2c6HHAr97HQd5rrDT43Z6qHJorha1tfFjB5eTrtDcNd5S8cG6yHf1vU7xte3",
  "key14": "3brbsUzbSeVTEVNCht6Jkipi4AVFX65WuyuqYSuVpz8NuSUXw9L43YtcjwLhqZa7qaVUuvHJGuu4AUotTUV5BgcM",
  "key15": "44nMa6oRa4aAUao6VnPisKrjMwNEDbYbpSYpUAjCCmkhFNFG5f3ZqMS2cBFnYteskv6zP6CaEFrgwZD5t9HVQf7v",
  "key16": "5En1qYgxppkPK1AbaSs9s77eAw8a1FaxDKmu1CvbFbL4FtpepFkqYgC5esGyuWFVXzohf1oUAYfM9oPD7am1pqgT",
  "key17": "2GD8cUh87Gv8EMnWhQXUEycvMN4Ur8ANowEx5ad19vHFfThV1HWFd3izJimA7XUx9FUJWqsWbvMKqzji6tSVGjxa",
  "key18": "4EVaKJ45FGTkUfb64kdasdXL8KLLB6kdEvnb45jFfSTeFpgzTJFP9bDgPBBiXytbkozyGpMjGj4cFNDHLhNyMooj",
  "key19": "2kkS42Tnv2F234deug9a5AZUVH4eUB8gJisyg6DFsEcYcbeE7KLCeRwT9xgBboEBazL8SbstbCEkcDvQFCHYcpEo",
  "key20": "5q4fvLvEGkqKJ8kzoPnD8o5jxo4ceHDLoLMbcNgbHYVNCnenVxj3iFoGCGQ56yLSuYvczv9D21SLSiR2RJr6ckg3",
  "key21": "SDz4ZveQqFUemLFBwYx96X1irXvEHzHfNiiRiiH8pJtXnFSAXALUS9bKrPc631FPrkSVwRjbr3MPTsowjwH8gu9",
  "key22": "518ZE2gAnn15HZ5cA6M9znVxoNFJUwWVwwZZYZJ5BEAz8cTaY4rtTwV9de4d3TxfSHqCUGWcHVneCWs8wz2w4ee7",
  "key23": "5kA5P9sfea2uavDkPGynDrQjQxSDoRt4QMmBSmpnbeZ358DEnsM3U2ALJmWxJSz9EYYnS3ZHdy5yQh4n8mmh7z4r",
  "key24": "4sdcuYAeiJGzi4HA6ZR9VLHUbH6XizZYWbR1JLi9cJTZiNz2yxD2wAYyVvpordnjB2xt5PxPxXwZXd6752dsoA23",
  "key25": "5jVPg62BySHczPHdNumGg1ff8DAz6piXpmfroX1oyeTZfLB1jFZchfMcMWyTdi1bJNzr573z73XDUnQsC7EYjwpC",
  "key26": "4rKG4zH6EfLyMuXJ1TbvgmD9btJ5XpXSnVKqvxHGfg58ySjUYcBqxD5QkvRjfwLE8iWXnCnCnyf2SqLB379iDx8P",
  "key27": "2svs5h71rw9mNfNpmoa6NMbf8oQuwK4J9MAuqJ26FrXy98wtp5iiRqXwMScmAKpyTBNUMPcgwwijawv84zYA2oud",
  "key28": "415WAWr5f3pSei1QFy3bbZMmCkR5F8Krj82n86CDc4i4RcvVUvSTV4z85TT9k1f9qPx8Pv2UFMvA9QmtdHPZdKWL"
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
