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
    "5GjA4oGnTbeUWY2x9puRMQTxrHVoEHW8KXYayDFHN6dZyevueUtxsjxvNkAF66cX2Edk4zEFdd3aFGmTasp3a4Tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NveuQ92oTrifmjaXjH9bUcboDephw1BQfJmNu1PHEnxApHzB3ctijXqNduRaAVqaBtyr6cZ5Xb3LVceF8Dc1yuv",
  "key1": "5oEtgRUkYE7sKmxy4pmpNifXxcAfvxV995W7vERBwFPyQ8nta4DKkBveQEWDEDUEXixUUqwdiJZUaxibkvHbMXAV",
  "key2": "2bGWfLe6kjKeWv31xiAMNZitnb9evBwAejimeBYJaEvXdrtMeumHxiToCKSAFQAi2RowsqGXDRAsXjNhPsr8kNsp",
  "key3": "2SBxEysgvcjyDgsyAcqAJi6AVEXKbZEMZg4XdoVd8vG3U19CNiU38yeNP5VzorVpnsukntrhm9KSRTREseLfjeED",
  "key4": "9iMM3G4GunyhsPiyiQm5VWSDTjGRQN9jG3vEPb9Cz8GMPaHBfmPZuokg8c2UPwuei7oaDgqguua8cVF2Gc9CNmg",
  "key5": "2Q96Mah524G63LVmQzrZqwmM9DTvQ5ekW5CDF3noqZZ7LoYtnFq2j1JKerjCbvT3qgAfPku4ZmSywHiJ6W2opMkk",
  "key6": "4BVUH4jomjcnTGpuLZu6EYegCXWK83d21V6ST4nk8mGtiEs8rtVE9Vw9Geb1FDyNFhMctmpUjPckcv7cvc39Tkmz",
  "key7": "2Z4pdgJkX6EnKP8XfwHEfGDa5mX6BUJUKJRnd8pT4GgmmzF4wL5N5Z6aHNha8k4SgnJ6N51Tppcyf5LNkHRFFA64",
  "key8": "3MvYANY7EZAugdTTJSnieyzLoKfHxrQacLqf1j5oFANFFFgtjQeve3XfPr1g4Ar3F6UwU6mHGadu6ejimMiDiCLd",
  "key9": "3BQw7BY7pJPZeLddvnrQUx5QiKmLj3SUgJxRyc8wZ4uq4M5xFAqSbYv4vq3pgSPi4RngJv1F8gVFa61F99VuMpSJ",
  "key10": "5cwDT8mr4Vs8rhBgXVMTe42saAWR6W31HANbwEu8kmYYCU2hwrYjD91GQ5MkTzdqYy1UVoYrrZJQWCy9thguzkyb",
  "key11": "R5b57AwS71u7RNf5yjF1STpmvZXriLeJLwRkkWoRDKEKiEKACPerePusceMtFhgxUzFradbKHxDo3RytfSEfkDL",
  "key12": "5y9GWtkrGUUr2PRQnaVak3wqkUvwMhCbJ2dG3huHmwhBQDWqfqkRebmPKMxDN5zPYr6AGqXw4eStiihqhwX4qNu5",
  "key13": "4G53Eu5hdqnfMSTPo448C81mjpn6LvufsT1JDyFBoMmpxWG6HgGeASf57EKNsQon4a6X4sgJ3xUJAGo22Q8Bb5t7",
  "key14": "67XJni74dWqH4AAzCSCanwPvLscHpM2DP2WMYPEjSpR1H4GXVS9igLcVosXqQvChYk6YEC4VJCPH98y24iLiY3A2",
  "key15": "3QRt3MPqibjeHAGcph9xYoBSYxWUKsvb7wf53up4uJbDbShViZo8hKPUvw2wtDPjPaEcWucNrBsvHRQtRDHyHGkN",
  "key16": "2opYoNRW2PkaExP7dJ3pK2UtTGcXriYaLQ768NPAfLX7HiNgdbmAot9eam5yPPQyh3DUcWtn9xmKhyDHaox7Ligf",
  "key17": "RiJnDeW6DHH2QngNAWxLYTfygoTYjp13dCRRKdhYHSXU7qBmT2fhqX3BBvzq7S64GKhSmyXHiQsHmmcaVhrPSEL",
  "key18": "4QNfyYUc5CJjydZEUmRiSo8tuNWyxJyc3D3DVHQY7U8dFiREFUjK1qWsbCt4x7vhZ2bL6hJoRyhtyN27pXTE6Jwx",
  "key19": "5bq9qd18mu8HCFDLUSNmMEtYK2765aaSvaJ1AYXZoBQ8nsVWCsKT9LJoX2FZhKwcXDomUmdbT3M9iXNcYfL3vDaa",
  "key20": "4jEJJcuQ8RuvBWWAnKoN5565LUCuhsWo1ozsJd5SQXGu5EXkHq8jURWKyJpDXbifD11ZUpbfCoY5expEthEwADaw",
  "key21": "2BPAoAk5bu8xNzk9iocrThxN5AYqqGJr9eEUoVWsxFiv5xnUg3jt7kuSea2qgQHJYZvZnkrXFeyYTeenaGZJ8n2j",
  "key22": "4k7FL2mJ42BtVXXfWobjnvy73BJ9A6EmP9c2rMwg5GVWEyWpBxw3Vo9T3MkdBQ3FRgzU4iGRWNuEdiQEaob41cTH",
  "key23": "4Db5SviasJRewRzCwdiq3ojhS2JcqZoaBxvXwSAzyFvFPKjx8KfD7nAddYL1G1mBzRQvGat8nBKszvVkLcAjkNT4",
  "key24": "38gUui6iJjJfFuSbczLpgdSrBjSe4rpdyEH2jLjxKPCKdyRDJC4brjJ1kHjcUqzGvMM3V7LVAXUEwtd1ckeA51AA",
  "key25": "4Ac1AwPbPJa1FetzqSwRUk89MuCsvcUfJBHZmVCJPsTMEW926wc26njPx1G9UqTFpJmRRTiGJPcSjszMNoe2ap2a"
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
