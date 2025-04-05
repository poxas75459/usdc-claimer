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
    "hWG946Tmfrai6WtnakT6uMbrKJNZJBhkbZCXWHRyHzCUK1vGg2H4cmrqYdsFDogzyXwDAQwmpEaVtzW2Q7iHaHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wf1KY8786p3CDbvQiDYnxYepQZZkD6QJUnAJiE8hndjGmtiPNAWm3SprJdgftfwP6pPRp65PWGv6UgaTz4vfiDP",
  "key1": "3ZKFm7SsaCDbd1YFN3itydzsVZ784SwdyWRFcxQeKK4VWocE88z6JD9HAb9gE64DtD8KgkX69N7ytEmGwwt15PT1",
  "key2": "2xJTFyak1fi82VZ2puqEJU9WkbYSm3ZFct7AZa8RVuEuM5xBcwKrHNfcmEAVMf2BZvXfb7jZ2vs2YtZdvgr9Smfx",
  "key3": "56cngScahePL1JwEHrcrn22EZGhW8QQuAQJWrctzULFFL2GjQgkrWwwrvDxocgWy7h4XR6Hz4fJHnav3RDD4uuzb",
  "key4": "2sTDa98Yn6gDkf2Wosdk3v5hBPHcU1CFhX61pH5CnegZurpRR1yPc3riK2fboatsRWkeMrTF7tru4DRSPYbHEDo7",
  "key5": "4jZrJ6X3UcJXihhrWit2K3Mv7t29PoWLTZPbYC8kRdHpgedzUoFkBLz8erw5b8vgvwNq5wP5LYDXqiRdk27fCPA3",
  "key6": "5ErrdfvU2uFqceFYVJcbjpP3K4unjPJH7mMZZspeqquP4Sa9pcMCEZopZ5q2vjSx6R6Lkp9AiJRYwbW118bJbaU9",
  "key7": "3pTbBkb46ppWsL9WGbhTBeAKHrrb4vFeg4vCuvcRRpbhoGVp2pUYr6biJEQnWnKLfim3z2cS17k3cVYAm5c1sZFQ",
  "key8": "QGZ6XntCgRCkzjDE6jX1r11Ph1rtyJC7NazwA4Rg8kWUX4weE1bJvxxeGGc9spoXFo27bqhYPtkm6U48NmEkcdx",
  "key9": "3bktNcw8dEJe5FoRxNMtbWkaCKw87X94rVYQ3YtsZkibhF9RYikrxWPBHHfURLz7SDUu3kfuZL3BnZMvgRwMd4hj",
  "key10": "TzKvBHFLfrD21hckfbKkKKsRoQgLMnoX1o2Hybh5xfy6UoYcyzt1sUefXpXSswt8fhqN9EP8Sdc9dFXsEnVW9eu",
  "key11": "2W1ixLtCgnP97VNYhTKxpjS8K1cVRJpW1FW2guokp8kcqAysVBwi5CRDyw84Pkr8kg5kCGTL9rzM3RpPVqGsAnLs",
  "key12": "xrRTMgyRtDv7UfTHeTEk6uHmSPrGwRQaV6nUFp83TxLfXEZXNJNixAQt1B89CGABm3AP8QbL1i6Lq5SYh34fvcN",
  "key13": "3tv3n1tmoMpzbz5oCC5SLUitmQHQnQdcaF7XiswrqozDTpS1nfT2NvvM2sXeccvrpw1BMk3JQ6cmCGciE7EkcCKX",
  "key14": "5bHMiDvUEvziAheQeWZT243rtNiNvKxYtaE2xSwCoaXZPPvmfJ2p8r8HL6pHqCz9QCKDiWofAH1HDqrqWm1wm8xD",
  "key15": "3TMZy3L6LTac1ucRkpZi9bWSequb6oqAzQoe9E4VWjgqW6Q3RgHnnoUUvQEDja2eFvbzvVTCheXZ3jrZfN7Wwmzn",
  "key16": "5aQ3Wz6bydnJCqpSdEaGzAx44iyQVW931GcUUFwu3E46shFPkpVgvVG89LAoMTHKhpWhuh3xGXAYbZAXthXnYWo3",
  "key17": "2EEguFBtuciBiqp7qCRAzfmosATFT2CcpKwQ1kSLeWgnAHNmccmXbU1LbkwHcgzehq2d7nMXfTVp6nQyiY88F4hb",
  "key18": "25CSspA78BtfYwzjUoPVMsB3BeeVuME21wE6M5oNTYtdFLErjuZE9igQBrVsTRwsMh4oD2UCt9tFkRdQWY96nZzC",
  "key19": "x2TpZtd9zRMBz2554eYPse4t3PgGrLDgGmAsZhCDuG9ZtaF87BrnU1UeQ8dCAA9EiK6teAx9tQPDNTAMYB1u5A9",
  "key20": "5Hj9uM7bipQ7V3Mez4saTVdakEXKJm9Wd2UjXxYTsnuLyX1eRRPu8bWMUjSoxE5MUBSxhwg943e9ST6as7ViZbDr",
  "key21": "449xPksxjzZycsY1C62yVhyFPgt2dqk5nnzrodZDr5xqS1vuYWjLru8Lvfb54GSqNU1KC87S5gFbv8DPvJHr7ziJ",
  "key22": "5jGZYV13kxwqiwjo73bJ5RhhpVVRb2FC2mD5Vcg3m9uecLdZoDy7jHWENZR1CFRi5QphHJhoR9MCvG6Ct61QvXYW",
  "key23": "34mWWCN8i9WnrwkjykeHUgbFysjxuXndZ4PbsndvU5EfZKpD2vUducVzy3oNowmMMgzvMiFciq7XY69RggW7kC5A",
  "key24": "5iqp4VeUaojHNph1TaUMeUNkkADs9Hnup1YhL7xnGAjkDFVWZ1tw97Mz5WHYHKu4yUJ2M7KGeKaq3qNaHGpmGDme",
  "key25": "8JETVwpqVRH3b5sJ9uWfC9FSZu6dxuJ3wBAXHYrHp9n2Tgh6GLWezJhUSgaugE7VpDqaq1kWx9c2GK2RZZN3syE",
  "key26": "4NZNWBdVkPsYJyLwCGdQzhviUKNkX5AJsznK1nK3pRsRGYkRKCeUVXqpUWGo4szMNeqT5GNM8rRZgck8hgYZDo3c",
  "key27": "4Q49SC6qcySHwGJ1cGAfNRRbz4Fd11nJspZR76VBcFKciuzYqqANdJw2C1PEvQxbUwcb28as9SWNyhaRSc6WaED",
  "key28": "5yECsJJZnYJe52rGxun3BPP6oVg9YVt6UAaLjGdSH5vizpGxM3UXqutTQZh4RJJGqFxUXbE73WuZ4uaM13BDbDFi",
  "key29": "4k6CSvE8i1BU5UuqdWKeB1Vr1vAGTrERDq4gB8QDC1zyGoXRV25zYE3ZkPD9ntUyKmMQ176eqwRFhbh9s1p1W4mZ",
  "key30": "HoGbCQkBKfL9CjXJ844SQQxtKVTHRLRrXjt74cDoaBz2UbrhwrL3o6SHZbFUwNBuP3wjeTGw46an1q2Dj26NCxo",
  "key31": "rJxJCmqBLoBmrAKRdcaEMzoUatGEjZdwUfcdSTd9Ge4yDwS1g6wR92u2HYLDwaqiR8fHAzwLE71aiyRQ9uhWfyA",
  "key32": "2LfXcpJnzb58wnYXSa2S8wXDGG5AkG4Hdf6ug3bUkUgjSjQ8oUtzM71AE4vKZygvh3ctAqnKqzLFqX6c4PsGeJ1n",
  "key33": "4B7MzLxUBn1jefrq5dLPCrJZ7LHjhMs8rmFUTayrLPmDu7AN8UbWkgnhA1TsNhfFXRgaiwiHJxbhhdasH3owC7ms",
  "key34": "3H8U5NyRKffbYAXHHzsfN66CbG55sCjk7y56nB22zjMWWZG5BxmorMovQ8JumdPMyT2jr3cyqtCrNSLWNXHQYkyr",
  "key35": "2WH8KLwZsDd5L4MuLoWfaRjUcgRVDFi4ZmkYmGubywHHn8rMFYNk3mG5tvYtopkEAYCXwzb2iSNGSfc4eJZWw2x",
  "key36": "4tNGmjKwKzyMXgVrKgVLChgBVv4c6hXSoURpb4jee4ZnQbBvvsVAU4JrhyhwAyEadsFv7n6HwS53KiLeDKiqfUrd",
  "key37": "7VLBAQ3EYCfsrXtS3cQ36ndmC6r7LUWwprkFMWN5wypoc6NBnzaY6mKRjBanwt8A7khnGmFNW7g9z1UAqkGt8Mb",
  "key38": "2jHVppnZRjrnrXeJcJwjkctA7bjYq2ax4LevJVgV4AMpynkFRjbNwv1z6YYpouxc7HtKqARJ3dy3gW3Ai5GxC15z",
  "key39": "HaZUvCj8rVGcutAReEGdGVEGrJY3qPG74rtxY38VbxgNCMCnzEhEk8V5nY5NT4zNUEhg2QDjnpjitcufbGTkoSt"
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
