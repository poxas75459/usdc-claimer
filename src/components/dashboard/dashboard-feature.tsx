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
    "3DgUTiNaqgtdiVSPGodFGQqZoQbdPXyVb7GgzG81q7Ez2Vk9zhRNSqnxnb2krafFpKBUodtk7TaKJkUtYNt6xUt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rEx4N52g9E1ajRiaNBKhBphivdQd78VxjxY1t3Lx6Gy41R9F7t17JvdKrWyVxmUW6nGpQDLdmEJqrzocmUCfYbq",
  "key1": "3Ef4SrSZQd6cwXUTjuqbTsoFYAd1eAr7cVoCRA9HE5ipNw165KbQ5SSnjVMRqs9scKiHAAx4GaTXN6vfp4GaMVMF",
  "key2": "4S4RDkZuNGsto3AZ6zS2t2xGUJvtZBWb8gMGRPnkhVHG86pxsXQX3vP1W3PHi8q8fX2U7k3YAVLdM7yzReVoz6qT",
  "key3": "srHzmUK374VMAWe6Ydhe114XhtN7mZ2QcjkyzkRyB3M5Gnicda6dUL1KWnm2b5rs1KKoqmKpYAQZvdTBC3yQjUg",
  "key4": "4z1SMAzYteDan7V348nHKrr9CPh9eZD9fxWAKYomvvR79YxFTS9SPonN4DRRhRxmY32xmtdpDcAabt9YmQ2p2qsj",
  "key5": "25JgkqPwpL8X1CVXtzsyaBEd3dgnsM7VNK98fiZ9Dt48k1rHZV7mYkLgkB1Ecu5PiQT4KbR6qTNGvBFUPJ3BCoJs",
  "key6": "3jw5gZhQXb3MMeS9KigeJysncggGW23m9LkD9MwJQLgWLsugicu63X8piUuhLSUrGT2aUijce1hgTUGmHQ4QosUC",
  "key7": "4ECm8uDHJk14aZwh2bXRkLGf64CJYo6jxZKzD6NVtsLcTqk1cqnQBpDeYY93LNoi6gC1gdBUGqhbZNj7WKzs2shw",
  "key8": "3ycGGwrb3z2XiBvqntzxUpeRPr2eQgPmpZYVoCzJS5JoAL6K9pJc45qiGNjTXtSyL2imG6zi2rCyVrAEXs9ejyok",
  "key9": "5mgjJKzBATidXnZEWksU1eVLPqRhjTzjW3UPy427azqmzy6H3ZEeYV7ehFzDaAaJW6qQSz98uj3bG9WpcXPcBFAy",
  "key10": "55bDu8y1WeManoxWm2wVTfBnDk2sZ9HJDKQYF6cNB7mHjw1foByn4sNuYZbQJ12EK5eWC4s6fMVZLcrPuJN1JgkQ",
  "key11": "4yeH19xSdX44J6iBJc4TWeUsZ8HBsHpViSc5PMBu6N92aPNsFexb92yYTEr3nAvFwf3cbcRg21ApMQgrFDdyb22n",
  "key12": "3SNdJZedu8iGwrJgMMx4rHBdwGbtK9Ha4vK8MQ8UuU9L44Sxarhp9s8nghedc319BJxjwVSfm698WHRA3Yi2t894",
  "key13": "5zQ6DSbTV3d9tuPt8mA7So5TytZ9FUHZdUfYELeQZeCzEGjZJSVougaq6dunwda8o82ZTiNLrsRGno4LwnVjJJhf",
  "key14": "XNC1n9snWLRSXo8rcMkj4voPF5txHEhL5kRjTA723ieQmpx4N6Lob7enAAui1MyRY4Z6tGYzqJcRn4VXC5qykMc",
  "key15": "47LxTfjrUkSH2Z8chiYyyScJHvUCbErHeGCTrKU4mjervkFhLTF6XbMbTHxdToSb8XL5pc4jfKwx7N6GmEYbdwBM",
  "key16": "agBKB3gcYiuGhHhmLcB123offbCBRvpPTSYTJCcjy4mFNjFiXcZLvb7VfVLQiZ18fKXv37rp3qsj7J5Ccsighvf",
  "key17": "5v8qJWSXa6ngekXdftBNfhZquDNbmiqF2apEe6Lzr79orx8KKGbj8br7EAmtec5x6FjQRF8ojZ7L9izPTZKksdKY",
  "key18": "3Pv3QC8WrN68uaoUygBgh3bSTuRX4nny14yHF2zy6ah4DJfgjXKFYqNb2QLsjLpzjwcy7NXjcm5RQAbWNZi6xVUC",
  "key19": "5LiQuzJssMjh1RoBfN7mCLB8eR31y8hv8Hb4q67xCbyE8RT4Sbos5uRjLAPhthCFv2UCe41Sa4BXkQBnH8Nmv9UT",
  "key20": "4TWdysZRaBraXadWR4NaCvgbiBdsXGUaXXNrMbyTCCTM73L9RPDrCxYikpVA8Y1TRh9P3ycxUqUquHfy88dBVU7v",
  "key21": "4TdBD1FNvvzRD1Bv6aYgbNZJ7n2TkbuLnue9cWrVRXUxA97Lx5XAMMWi63fkKbYbdd5LLr1PX5VrsN5tx9pHuxtE",
  "key22": "tYf9L93fwpiYvLTJ5zJd8pc7KHS1uxBC2Zski4JhjJ1k184vnJncqKdzuvXgZZCr7rxvahgMj2rrkE3CzcfKnTQ",
  "key23": "2Xs1arjdfZYBKjMTwPw7fLpqTNSpVo2nDcxmMoe9fpbkfnuQ1YaUGc5VXPha2Dvi5dRVieU9fNQFriWWQUAE8hVP",
  "key24": "5XfD7j1NwVAVUfXR8z7Py1kBysL5CjKQWRTa3jWMeYRSAj7R4n1eEWtAHsyWNKsmnAgDmykNaDfgoSk5kdByf916",
  "key25": "xtTy23YEbVCwZqLztmUpYQUXARAVZUucNTj5i22oCFKRg7zTVwoGuMQe3CSm8E227ANyrE433f51SZSBAd7PV99"
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
