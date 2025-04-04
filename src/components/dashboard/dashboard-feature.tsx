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
    "4Kj5RoNSQXNhDExQC2K7Z7uEHwE3hkCB9PYqMoVA8utXrET6y2RKrxskHBn5dRD2M5RuJcsHJWTWpWtak8CXUTvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wY8jPCSwCibnirVUyJ5pzp8NV65gtTEinWgEa9ATkhUqKbRoU84jCbsYtq9x6Ht4JeZwa8nZe4XYSjWghTnHUte",
  "key1": "5G2ACRqL2QpGwku8vMkMWwNtTubEfrqtBU5tEnk2RwHGotZJZmTxGpEs2TXxZSYHGFRniX11gB2Rdd9nJkCQBxKf",
  "key2": "42iughYpC8DtTPCYwWtrDDV9EUR1ZMmgWsKTv5jUd98Z9PsEBZ6Wp4si3jiMbuyAWBokGoi5X9XEHJDUQYxu52C7",
  "key3": "5xTacVqciXLdABRWc5rkRd3k3W4c5bhSb79sTvoisUiogq4WSVKhgoPaGaLVeykuHT6L5ZsW5LbM8G3VyaFR7ew6",
  "key4": "2itnGTALRXCfJaDbEUmrQspLjXoxFNDTCDekswzjB77gVYaFhgBJZnBiZpuGvFuhnRAzV8FfpEGs6SWpWBcFw4fW",
  "key5": "5yGyiWVuxxXdSoWznxhCaw9TGWiaA5uvNKDYyqhCuVpyLhSQt1SN4eazT5t55iUPUS7YnPv62jZpPGS4SmB12ABo",
  "key6": "NcLUtvDLvr5DXRaEJPDSpmDgryoUvbusDVLWViF2rJFP8gnBVh9r6Z4sNkrhKqMfRgNjnT1DesCpHMbDBbheDuJ",
  "key7": "3kjbEqiaGLSSR2fh9fY4hJ6Wbn1pKPyV5iKw4R6eJ5paAwxkqWUFpWGqLWjdLnGCY89QuteJj3GvGfwfm7CrUp6v",
  "key8": "3scyTqjceZsTr2zVp6W4KCkkMLLzYP5Cm5yZabkimPCXkgUevammxkdihF33wpxYgh1j9Pp8r7AbjBTDaww5ZaCA",
  "key9": "3YqQ2ahcajQvBqLwTYzU6X4bgpidJbCXW57q65GhhB4Mbboei2nAyiwn4zDYdhQ4dHodAeCaZuw8xh9z6pz2VeG9",
  "key10": "UjvpYUeUK9kvwPnBTPAHJ8YQeyJtane6TrbxVJp32o1bxdki3ZnyNsWL5QMiymFgp8uMz6zJ1Xw4mKgpRXYy1Te",
  "key11": "4eGkzr1HS6xAJsCeYRfBqwYWe7yEk8W4tmZn8wcPaRZEsMNiXma4EWJDGMokygi9ea8NZtryF1sApytHXjEcEL1f",
  "key12": "bfabGTx7hPEeCRwskrTbHC7zZzqLpFm3d7fwTMxzMnejomozqqNYFHqqNmrKzzPAeuLS3k8uJvW9aC6eEeMDsy9",
  "key13": "yN1xa8jcnwR9YtBAhDW4wJTsJ7bJ96TQQ34LScceSJLUQQzczW6ZTEHPALokQVVvS11zgGDPFNoQNoZrXZ23Fej",
  "key14": "2JW5aNDLetY3QGYBeiZjEtKtvv1WgJ6puJG2CeLH2Z4DQW464QmVKHP52hqgxkWN71ySkutT45d5YS5LoTXGu47h",
  "key15": "5gT5YogAP8AaVffgQYxu3DV3UYfpm4J6TrH8h5jAXgESRgp3zjKG9XziqqBgkBvgvX8SNEiHup6dzSccYyYJeAnz",
  "key16": "5t4xXq1xXsgkyPzNnC1216e65wWvDUJAAWRedkSE8XbM1Do11kMcUX23ENajEcZPrqcfUEj86CwtS3qgc3wV7Kwf",
  "key17": "wgHpjgzeKhYDeSWYAoqnmrtEreXwF8C9Cu5NDGVhPM96s2CPfgev7nfaM6tXLsE7s6LbgpEkhMEefhKjcf5HYxh",
  "key18": "4nJBK6Sqifk5MksDviQzt9iWMCqpWoDqbPJfovEa6F9txN5hqoJToVgSTMnyhyTUdhsep5BPq3FqutdosqW2BGm",
  "key19": "5r8xsebhh8vaw3y5XWhuSgE1xeieSo8PFB3m8JVFu5KykDcVMVruQLHffDTdWpmJrGtVuTjyqeVDwS7jyiiVQvF7",
  "key20": "5gwy1KQmrQk2bZB9ZTth7hgN6JyfisVTMVUgLSnKBEpJR82rrGGagQE3ApCJ3FCfCBxM1N25gm55cL7bdR73khf3",
  "key21": "5DRTtH66DfjCj8m7aA2tfHm4Xb5KTHQFG6w7H6ficGN8pN91gnd9gtcNEHQNf8aWnQZtZTTBm5arMhDMt3WiLYYF",
  "key22": "qG1RXT8bs94XyUNbdaqc8izk9TVGEMEw54C1SnRN4nLwhSQmsmdz3GPTYuzsPLAaQskgW4t7WQbxSquVbisLSX6",
  "key23": "4VH2XFweuvHLZastFkah53CNLt3phGtBP3xFeZ7ZmABR8HRgX3EtmB6Mb83Ajwtt8QXYheRp8vydVjsUZFuGoaiR",
  "key24": "aUEM1Ge3CT8o7ii4abyJeF9TrkpfQfShf5BBiX4ssUZsWXsqJRYay8Ej77CXgWLbGDpdkgvZcLvUf9wteLN2dwh",
  "key25": "3rZN4CnqidW71ZVH6VkZMC2Lf8mPH1D9SHcqYmELAAw7h6usCFAffuvAyitc63timSqNZLvLDsDrRfmhZEvH9cPD",
  "key26": "CbYuSJvVj3h2iE6xb6LnidJoEX3nTVnaKAtZSDzzm2qV6aU5xHeWXkghtDH7ARPC3hLQTLNK2ByunAJZnCr5prc",
  "key27": "yzvnQsgb7q4148Zz1fd8PP3yGkoPytfVXU4yZCNftF9cm94qnzwMRg91kCDRU3hrnMhmZkPz3vd9pVJEbVotf6t",
  "key28": "2wRGwkCHVKmhDxAXGKR9F9r3u1H26sd3isTDoW4TtecYDN24RpeFGGwNsM6xX8FGVuMu6ni9MLyjLqXMwuw8pZ4n",
  "key29": "qPaMyqCRRonfG9j98RfyGEEFdy3a7WqGW7MVxPho9oGNjFjJJcQnYaqKK8WqEBMPo3x5sxty7CWAtRwiUXHjwsd",
  "key30": "bkymwpK7cTYxL1UArsgn9J5en6wkav7JeSVmjH8XvdEszWdVknJ8sST4cFkbjUyUhbGd8JVFas15Uvc1gPZDsFb",
  "key31": "2rsrXCfAfGiBt86UeQKDwntahWojeyhCqAG1tQbbJhciLvSKMKxvsGjE9BuSiJnK1R8fJh4NnysisfV3AkDxbTiV",
  "key32": "53Hd7uxDRZQgc6ri5c7zDyXvD859eBdyMdpZZRKGSpeiZhQ83bs2MBdW19gk2J9QdUSsudHd1UkbbqDuiuVyJNwx",
  "key33": "y9zunkqXjaybNzhJswqcGEnv7eS1hUx3nnFi68pN6ZmK5spvHJTZoZ1dy5VNYpqxw6rN7t4fqfSwXUCDkrnVVMh",
  "key34": "49Pd6aByoTTuqJEAtJDaaUw4z5Uhn8jH5xHRdiPwuVZ71rbBqWTLGhZDA8eeY1JUnK3g58dAqRvJ5JZiXDoY9mSF",
  "key35": "2a32tqZqK5VkSCkEMCWCvXUqLHhRp2ozpD773xQpBmSJdmydxWWyXetSGzfATnyBMPwHZxLeAEfBH8PPThJJUZm7",
  "key36": "4SmSBRLNz3j4DErMCu8S2A5U5XDuoHXhRzeNsHY4BFJMkuo8FLPt4exCwUvTW6Ua5EUpSkXP3duKk5AFEvzZjd9F",
  "key37": "3nEkAFu8MdbKwzQJGRvUx5tJdxqxo4Ece5bKGqV5z1DasMRtm9MBtfA7LFuqGtV1byPRJDjMr5zUZ5z1b7D67P4h",
  "key38": "4XZ2xuNZGYwqt13jgt7wF3uJ5AZA6omiuZCwwVNUJpdhrK1Fesvboz4yytmuFAojGMyrMcQaSzdmTFdidrK15veK",
  "key39": "64SEFsog6GeJMeHYjBw1FU6s1EN4TKAeKRjQBzAw7VH4qy1vVu4oJiv4WWgKqRK3eSsEcY3KNESPbFdEcj74riPC",
  "key40": "21BrkNGmZCMK2M4ow5nSu8bviaBjZb3TkPize8hunDWEpY9sh7WAMh5p91d67CesSageRDh4siZMsSUNbtUbAQVJ"
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
