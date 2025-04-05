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
    "4Nrg3Pvr6fLa9yJVsjpEkzwFux9Dh4U39xuXjmWBngUe1J3zje9f2AGNLySrtbmfoFUdRnSAyaRYbpYdCPjUURDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JrXTaQhF78fEMxqJAprsidTqDZsk5DwyqiUBxvJ7hb6v6RZ3X57swgwcvicEuNxDPLTeq4PbR9K7cSZPF5G7BWs",
  "key1": "2uJLxM9sasJkumqNSFU138gnRQfjK4RiZa2EYhrotwP1tbq82kpWqxGQJt7zAf1fLTi3Fghj7PS1fxvcrXQ8z1KB",
  "key2": "fK7piExxpFLofxmAtFcTDvhofLgrdzFqcvaZAZAx5m8GjpN2XmyAsqeSMhBe3CeiaxbyXzgpfhV5edHD6sUuyhH",
  "key3": "5WSqP4KnC1ddqZ5Fe9y8nyCfrfzfNKVoFEFLoQyUWFCwvZzSfTn81qpAVgWo81KpuYkQ6Xd15bXutXrBtTNcAM17",
  "key4": "XVtLNR9bNMuYmwn5cyKRBBqdo58WpPHoR8hGQMST5idf3RVs3zTqQEDczXV8hEPEUfvydaB1uoFvoDTQdg5cjwG",
  "key5": "3brNFrVUXFsNBPxAtAwKbgsKYHCXtDguGUNdyMEFx12ESRDxE7rjAaSgEEQC7bD8mYjCJeMnjEo6dxiEpuKqrckH",
  "key6": "3T7uB9vhSVERKjSCr4J2NWCesED2Nx5Rh4J65uUZFV3JjdeHkTM2tKaARSKsCyYRz1UNHDoaFmi9qraaeP8Tp6oa",
  "key7": "83UmyKuTM8EiukMBeAnKS4iGoDg2HbaXE73t4PaNDyfrFAQipb9Q7HFxmMMZGVfHMbeWWyfbVwcKG9xQFnzvbMk",
  "key8": "3FeBXvBEduPx9KZqfYMLFwVWXfhdMas9LwboL2G4jXs8mWj2TNp7Li1b96X2vqNnX3vuvBU6NWvNMXSVbdinjW6d",
  "key9": "3vuTEvijqEHLKuzbK59fNun5SkrnaEUQ883Mhwtn8gvHYMzJuhnYs7TaNKM3PxWVKjN4tp5Mvw2rapUbBmtBYu2n",
  "key10": "4Qxx2VzdJfQqyQ8dsz1VL54eKE3BDwYtDp8N7s1AW29z3VykLVyW1GALWoY4wqVeQ6GWYesXb9o2kU7UXEE68tkb",
  "key11": "3iMfJocJkrHhMqJN9AH7PxLPBE7LvGoT3UoWiHgaz1nn9vdvJxrUm33pJr5Xtgi4GS2eZtTKV3WYnT3TWXBXEaQh",
  "key12": "dystv7RwJ3BZQSHNTKgUgSq54U9fNNKrdqj6LoTTFGA1bn6SgLqu9LRsCQyVutUrcCYQqLUQAgc6ZNw5Kv4D6c6",
  "key13": "65iThXWygG8ZSb5KnrT3faqbBdC8HjYcEUiFLAYJWAmtGfALgnJzVV9kodDKys1kaidahEg87eYmwKNo6ACEeHCK",
  "key14": "5JVZrRNVXdMUGqV6WbMJLt47Akow7ZznP4cLuiV49VgD6uYUb8bXVXQwY5VxKqakXm9UefXRoYFMVSGragebNqpC",
  "key15": "3MqZWziY9E8kuQuGcPyLLNZtb8EW69LVNHnnYyyH5hQKredzeJqbVkKW1rLALdU9QVmdmwR3c8rcMahUJuckFQt9",
  "key16": "3qXUfZMKsgUHcZ1CCZMrnVNW3MSnfvXYCLEwxZM6YsSjw3K5HY5oUdqodFVUFcRFqzNS9uVWMXWqUQFnfPWqkPBU",
  "key17": "5jonL9cv1FDFcuh1zFSaoEpvBaSE9ESt8oPf2udGACuq1xjrL7ctqGsgqJgQyvQ81F7SUbRPKaGUj88ugmUJSQPi",
  "key18": "LAY638EhU9CCLUNvyzXHJXn4LjFRtVh5eJzqTgQTS29zEn7gfVEPki79dNDS74wr14hv5DPyHr1WFHcGvyt6mjo",
  "key19": "3syfmZ6RQw9JWp5BCf26iTFnQvc4tNUjebG2WjVNG5Q6zgdAP3rkeeswYuaGxQyBx3Gnm6HupiM5nwmCZUjKyM1p",
  "key20": "5MCWK8Qk5WapJuJPsSkYs1eVdoiEtrwpGxCqnx7JyAvtjKPipkZEH6fufuwFUhVC1cetw6tbDkjUGsi7JD2Fo6Me",
  "key21": "2JVmanBUEA65RKTFubVhLm3DzswvECrgmWEVAgjF1AECHLWSezd4Wk3uP3uKvt6nCwucWwgTKmBL7nGu6S3g1YFe",
  "key22": "4EiE574fkadn4DDiq5XYgUwxoQgKGTakr8eAo8WWnHEJwjxKERe6yTCdr4zCKLUYtQBGeKTU7bnfDk9riHsySnKc",
  "key23": "58stKmi3VEeAKChQFhjXhNHEPWE1EdtFxYcEg8ngCLH7eish7ojktzfPQVbkvG8MnronQVsjLYVLGBBqxDvMCFcH",
  "key24": "2GSNBYWBApdWvuKJB6oeJ7UrqwgeUFkBghFXJzNNYM5dgnja4KbFnbd4VNbRMK3rVHrS1LxZchxJkLSumd2A7twS",
  "key25": "64sqgDxBULN5sEZ1ijYUTTsyYEcDyNbVrUtuGTcSwsuhLSFcz9EeNUvM9wVTRaVin2YmtnmWRBgwy8UjKSUh67xe",
  "key26": "4Df3es1sG4vGr5Cz3Qr9WY2kFZwtSnmZkJ7ZR2VeZB1BPeAv2AxNLWcWNAGdzT5zvzPPyCJrdbF6vGQC8nJ7U38D",
  "key27": "5nBUGCiL9hhocbVxAdBzKNB4NENqLMsHPwYykzAFXd9uYhuLkJQ3gN7EtLsZUvQHZEuT1KGyNrg3H9W1fKBhPWLB",
  "key28": "BkfhdtsJAGrhXQbfgKMQDKUK36dLtHw6KGFBokfEbWWtNSeWx6rGrHLt29GuCBpNicpMeui4NqVq8NvqLwiMfRS",
  "key29": "mxaMZLUB3egRu9nBenz8RJLmCwXHMshXY1yvjzrhhfMa3G421yHfMNfXn3nP3jBdGjNfWYAppH5h5Ys4sq4k6Nb",
  "key30": "vTEfLDn74mAr9g75jn9AbqdrcEBni56vqahKVeMkr8vjprrDQ1weUF9eD4tbpZvTa3cWBUHUAjbAoSCneyyBJhh",
  "key31": "5e6oQ4FSADnbqiqqxWvLGMscFDAAZkzj7irDrHsHkxAeFKvV8x4UreubgivqJ2zfS5wTknaVFw1Jx9wqYojPjH7M",
  "key32": "33Bwf6Vkbj6k1YyYo7sVT7BMwJS7rJ8kbwtevEEvP9Gj52U9k58jbUFRKsTxkhyKhicupoufrZRfWP17LgKK7pdS",
  "key33": "66ffk37gy3PF3L3ysqTUxrSrCee45JRkXvDgKxZenitbjThmekVDCS4m21ghCXpVwoWk9YiD7J38tuYWVz87zZrK"
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
