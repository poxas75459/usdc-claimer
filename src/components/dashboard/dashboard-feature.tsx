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
    "ygauC86AmEWS9nBxTGqjZrykvm9TewE8g3omS36pWWgfoN4nEx5zv8WfaEWtZ7SeL746MDNHxgnKHNYjuL7JKEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QrxuEprzT8kyDA1VXJtu9EdJfe4d2Gqxjryi87aeoU9o1SmGjfthMhEqNgKPangKvNw79u1KWwoyHUuaE1VwyKS",
  "key1": "4f2HYzHFchR8VC148EuiSW1k3rrgC7DgZmWaJZRC2c57gEuyoZixeK27u7UJuirqkGVanvsSVPC8qj8ft56dYhxC",
  "key2": "224ihHWZtLfBNGPAzAMC5mfSQn5tyqU6MYteRxBaCJRF2muGZ5qmqJMKRzYXPWh8LxJvy2FMnAnfaW2qU7ZgZR9p",
  "key3": "4FS8p9vbf4jMm8pnjxc5iBmUPBza5YQ6KAH9X8XvwxG7hUbLUFbvLhhQCo2baAe3dXKJnuLyGt5GibsDW3Cqamu8",
  "key4": "42mWFHTAnwscTc5n5HtcVxc67dytuXdSCboV3g1U12KtovUaJQ66n7Y1cWWg2EASJeQssPcssK9ddYG9t5YZCJVn",
  "key5": "3h5PwR95XkMmNjtDCiTHcqLDBjzHBoEbvKvmfFMdw2cX6AuRatXTWoQc98FJSMEgNL3AmLvBGwKN7D6fWB9tSc2J",
  "key6": "5qXna2daYZqC5QpBTAb4PKpDfc17HrJ9myJJrMSBTUGWgZQ9fwqZef74cSnosihntRU9tL4sdJqHA4LJuDbKxYPL",
  "key7": "63oDBrcAKqHPM9AEZmzkbQHpBBEby4hLbVQ8cwVomUwsqcPirenDTuKM8SBE4rUWEqkHgWnK5GfqubmcrbPtDF2W",
  "key8": "3HZuUuG5QxHWUYgdW9dn3QnVhNiq64hN3HfBve35SR2srHcMMKEK4nxzbxFq9g8kscE8cJ16hauheQmGyApds9vU",
  "key9": "AEvtpSgo3Mr6mD8xqiZpsTEDXFvdAUkLdnMh8xBa4eoWjGfo2zpJJQqJB1oBZbrzHUtGUxBTxPxuNuAe4eF6iN4",
  "key10": "22Fp6CXpwJnrkqb4jcGv9DMFLNVmsMcsx8GjA1yYhKKWiC3QGUnbYtTfqnLTjfiUtpf1Qu6ytCiyqTYCGWRBJoLQ",
  "key11": "3VyV2woMpH9iFRd6CR8xDYpNm51PDqpK4L3WJVWbg28D34J7UgcBSzjoUjXF1GxezznDXY6hyV1DPh9cuiTooDbG",
  "key12": "3pMEfiXxwjBXsfqvWKgACtwZS2vBfoxgk9UuHbe1nCU3rKthiG5n6ShixJUUCaSou3iGjB8ZSjuSS2x9T2KgNo5n",
  "key13": "3hV6u5JUK1isEMatTSCa47pjn6kz5nTkAGBncv9qv6RMShBVcnLkKRVeLC2N1HfxfWc8S2NecQxjGMGoCNZTNcYh",
  "key14": "4Dfzh4mJPcJwk1VM23x4hxCQXxFawH7DBJptz9tToicF5cdCeRH9qcwtMR1azc4vyV5QZq3CarLGGdPNodYEBU2r",
  "key15": "4WKDxZJ85TbVB3JZH3WQ9T3GaPsqQnYrSmDiDWXwgxzfmjCheNDEc9MLEXn6hNDH7cjhtvGKfnzx8FVgjyvNSkjy",
  "key16": "3SHmQX4GCoDc7pF7LobwXS9gX1gmosxqAK3gKQYHi9Ef2A5bQUQtaLRXdy5qnzgwhzCV5rVsaweXqc5qCnJ1oFzn",
  "key17": "fBEFC7A47m3YmiMuVMwzrqrsj2izTCS7qkyLoF5ffyaTmLLvZ5eMAAHhQ8RjG6eZuphTNQonzccrGtwV4TdWSA6",
  "key18": "2bKTBdb1MvFmPrkxMTexSLwVqBqK6ew8u5Dc1XEjV883fURWMzeC2Xcrsp94PG9frHyLYADRKdJC9gyQmfUSirJu",
  "key19": "3HLkbWDLUP8QN6zAiJy5J9cLjtcKUpRH7Eb9Et2zwg792Z7RcQcyUeeWFH2as7UCjDCotGT1egBvZiNcrhDoNtA2",
  "key20": "5qXcQiZQDqwFGF3ZrEoWqV9x7RHcHL9Abi72nZEBygJubFokKpyVCyepd4SyBunKieF1hpGTXKRbALj5MJaSF8Sh",
  "key21": "5MC23QP3pXMC8qbSrEguiaLYgaK3mqjmd7qHzJbvjYLKdRtu2ctKsFs1uyCk9yN3kJ8EENodkB1XcdY1WC5j5RDy",
  "key22": "5xvTK5AnbT744DvswuERt5yhWn1zYYBy2yaocsKhkP8Aa5jEwCsswkT9wXiZdB81hzbHaEKWVVK1FHu42ZcuThxH",
  "key23": "3gNRNUn6aAfHgtfj8kNgGw2EtvmuPKQNoH6r4Jneo6m9P1DMmgks9VoQpXQBa6u7wD1T49p1ZX9QqjXuVw5czCx3",
  "key24": "51HfRDa5oPt5d6vJ9FRMnxDj4FMwHHCpnMbkjw9d83VJFEEFmPMQeDQEPBLfLW1tNeoxqD6hAQA4zmizALjyQfWY",
  "key25": "659qVBfZzyvNgcDDpgq2376gbJ5DWmksTBXn74eNVLKihbWz5PvEF6ueiTfCtRke3fAaC1wWJF2wWkpeARyShXbr",
  "key26": "5woF4YNzLQvdDtHESCUZmBU2UoFtSeZLJNcREgg96kPKG166hXUUHfAEby3583quxfwcjq2fpEtjyfLSur1J7zEt",
  "key27": "48bVwU4wh2kFqbPFeCPvJpij2SApCcDXc9h3Py9kJkdRJJ22JoKswcH4awPRbisHR9GP6HVRjyLbk4XSFBp15KSz",
  "key28": "3roRB9v13bHfJyVx1xFewPkfc3HmGsv9TZfKvh8Kx4iXThCG6jyHP2KkijjxnWPvudtNRaunjLZLbcFy8LWT12fZ",
  "key29": "HMFnKsK1cEkg5pFZdjLbKvSGse2CCPAj5FYfYCS2kJKqVHsrwiJVThfXVNeP6KeEiUCNvnThn52rRWZX5sqFjZj",
  "key30": "4CTheS1ziy2a5Y9U9yVyYXYcoQZcJ79vTFeBosi4dFpdW9LoptiqBNnXrbeaw2gnbcs5nt179s6xmqhCu3WPjD9S",
  "key31": "2BQZ5ZvA4z1NtK2ytYefXG5iW75ro5DKghhPrgAXqRMA8SExpZvqdevDKSbLiovCFeFNbwYF8zzEgbymaiNJAYvq",
  "key32": "5BVgnRtJ874XuKskGWq8QDFini8DBk52jEKhAN27qCAhUCTPuJWVoUABzvgCQ5uLAwfn7wgEnSTNu26Vh9aTcTfT",
  "key33": "5YRVozVQDNMWZHauRCFPdQ541VEy61n8HeyuWbVQ1PcdvPeSZLebPpRTuvWayEE72kaBLWZPGmoMreGioS1ozyPo",
  "key34": "5gr3mu9aY94gtB87DZ5GBjcywoPieYbB64CFQCNWbLe4n5PDMYjCS63sE48p3ZkHEBhi7LzkRkqXyPeK62R468Tv",
  "key35": "57MYWrwzTqAVc7GcWM3qobDLZFNRQa8rqaVaX5CCc72QaeVHKMN6aQF9VeTdMTqa4fLsLqXJJeuALH1G8b96rYTv"
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
