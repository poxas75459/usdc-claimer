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
    "4ytSkMbigaWwKJWaMPj9ByLhCufaEWp8gnhsMZUximioXtWLFDKmvkb5mbQsEfejUAM6m32asVxtFgVdiRb14eto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xzR7iJTYACJ68kCTwAiLBoKf1bxPWvwwKejgUdor7Rn7GtdJeQA96QRmwfTWXq7NXcjdsj9tZZKjkiLuMYrrUYY",
  "key1": "2XLP6K4gYrKJwkvf8kiaqycf2dR1Ee7c2jHyQ8JqVzra1XACCQ8HB24tdSeycrMpKNzcWDFcj3TuJEjXWqVES6ye",
  "key2": "iYh5depifCg3rJ8hqwbzADUZ1ViH43JMXo4H9YmMLzmtJ8cGv4wVDWwey1xMk764Yt4h2ZuG3SfwDA2gQmz7yfK",
  "key3": "37t8iQhWmWVKdcZFieVEhPGWtYAUKMktroYGEQKppDU9apjEQ91ubU5k6hSEiw18RvinEqWqsr2jSerfcGj9Jfn3",
  "key4": "46ujqVMAaCAqXAiNxRz1bB9FjnndJXUiEMoAfhucD1Xfk6KkRsNudHfNGZjbLgtit9JD5zgJYcRhvaBuWApmxrK2",
  "key5": "4AimLm5vCWeSAj4mD4H3FpGawBCoCz3iiUKTAyY12dabx8LwGZEdy4f4NZSJiZUfNj9ns3FSK2SjP63qzQqd1jdb",
  "key6": "2kB8tSqX43GyrwedF4YvHqhtN6uT9EQEHjYGwL9hYoLmE85KzY4ubxHR6GKxfSQdG5PyKcc8rAyNHuB3DepaFWeW",
  "key7": "RRdFinXtziUxDQgeSh5Rg47zkc2gKK9xaoND7z6PuXZKNdqWSRXn8gVyV9XH4RzRDqNQBGqQaAVou59AJdY7VD2",
  "key8": "52Z4738xNCWox6TZhTgVRvy3gfBMbQe16K8dw2Deatz9U8NayaJo7JKo3pv244vhGaCpexLT9gXSU7HKnsqmour6",
  "key9": "2X6CS5JKkRzyBfuEsmrwwr4iZGsFUwXF9BQRvhUitoS3z6wS8mTNvpbadT6uPqQ3qwZCs1833gkSAK9FMG8GDCyV",
  "key10": "2T4KzxTM64wnc5gCV3pwro1tPFv8oNRCfQh9ooLeP5stNXpbpCx7vs5R32RudabSq47RSfShY75WgmAHrB53gkgX",
  "key11": "39aHiHoZj8CAt2QqT7QBS1LqHzvDSb9WM5KLB7aM6dXSaqzLXXL71XwFNduVAc9SmYcozNjuqMFBifTUF2TVDinw",
  "key12": "3SdH7SUh5fDDvRmcvvqiYy5v5znrz2FmcHA6yTgyLspZ2uAfAoNRABrx4zVbvohUDNs7ho4CMogn1nt2sgVHcUre",
  "key13": "2PhBwEixhYZ9wbA6XWbpX9wfc6i6p1EunqyNNxUCJYyYVjtmM9mtKnxvVZd5SY7UoLvhxD2kK6fQsphhX7ywCpdn",
  "key14": "bFRtDX8bxL2JKcQ6TFPo2K7d2ZkZ2Q75SDJNHNNCqyPca2USJqNjxn9kmnvYcBtf6qpxyN4H4i6BFtTsRZasx7Q",
  "key15": "3gYyJodrryGeoQqE6tAxvucbLzu4LV62tZbwCxHArCm3dUfq9NZDxK8rHx6hSi2FRwC7x51r5DJXzi1YXL3wtZ6B",
  "key16": "79sstY78Kv4AsxYqNmbdfprGaKyGE8F5SmasHsvKrFtNiEmgCuko6h69TgyCXWa2GG6UdHGRUjmZUn4SjRcrbvw",
  "key17": "5yRcJ55reRAxihjaNq7phqUabCTLQbm8ihvVLHYNubNfqbY933yrbmTzMRXCp27W1CAkPtApjZUyWnJ68WTf5rxc",
  "key18": "4jPs8f8qN5eQozXMpvSq1X4r5LwM9EJCnFg7USuvqUXaod7bARsgyZ8oUZRC8KPufhnWcq6dZ7vhk7AxG8jSc1jM",
  "key19": "5PSxX4m2ZX7sfcGxsecZq2F3NE928tRzNjG9sCeszT5qWXiV752BuRtmNLkvWBabGFWLaBixTdQzfd6jt2GjRAj3",
  "key20": "3oHyTbbNJgeW842LP2b6jyfFG41eKFu9Cbd6GQY8C2Cv2hGdAedbFXLuQ9KCvP71YWxTfzPWC1gAe2gxC3FRVyhZ",
  "key21": "XPRRJUcjsticjHAECXYbpoy73UuHKGxeP7ZY3ACPyomVZDT8MXHXdHxGiL45SnNpL8psvBpUCn9V1jgLbLNhES6",
  "key22": "2bcZ1ieQAiqHu4fkZi9vBrXcHEZvgnGyKe9iu6EmAErGqRb9mugBogKxuT9CW62u85r6v3pcEYL9VjWyMLsu6CrD",
  "key23": "45VoVRt2Zmg1yuASLehLsk7t2CiLRUgWMHcKbU7dnxibWG3a3K4oP9EYATnZrQVqt55Gw9WWjMauMiiWN1uWZwoR",
  "key24": "rEzAkd4EB9mFGsCYS1p22pyaXpXpuwmMdCjsAxhXGM4CaEBFcJDoSwUuPEH27be3bvCVp2Qiriev8qUut77wZab",
  "key25": "2TBAwxAtJwTk9HE1JnbHAVYCFPDXDdbJjML3HApWa5Scy6qCccguGGqcpNjoGAaPJHcxUamRS9Zg3jz1t7rUPG8W",
  "key26": "2miRAq7mzPz8sYGxSscUJpLgGxZkNEoY9376ELDggxXbFCgS5yb2nLEVomfgY4fDYFEVvska8udohQPU4whacqAX",
  "key27": "4UjSpxzXHAQ8cvMCQSwV4Fzt6tXFCghRqhgbjzc4DQSRrXqpj9NuvSKT4yF8wrYNDEMcemixVNPRn7b8LEfrHsCi",
  "key28": "2bCt8SDoFnZdLMxjkgHHxhZ6rReZLbSB751jMcUX1EEmvTQqiPevBbedm6KpkFFFjgdUSFtsU9oogzqYqs2x7P3k",
  "key29": "5TCPQ7i6bbVPPBTtEJXcFJ416tQR2dHr8gQNznDpfmW3aUi45BcyZtfa7t6pZeKJwxvvWwoYceEWyC8Zf659Yy42",
  "key30": "3VS6iKStQEs6jYVerx6nTNqGQmxFMsz6P7v6t7KR1UA3pw2Yhct5378PwbjN8a2hBwYTgiNyXAbg8GDTT1Nzd918"
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
