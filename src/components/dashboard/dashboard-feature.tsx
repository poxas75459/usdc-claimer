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
    "2JezXCvk1Wk9k6tuomW6Utwm19Q7RFxdZBeUnZUpebeUqutEgNtZd1Gux6ZeZw4KG3dGkm1kWwa6xskFeek2haGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aAnzemqK6cyKvvgA9i37VmcyekhpDhH7G9RnPp8QEs7tCE3q7a1QgVxXa86hKL73znx94gCZmCqWhmmKvTG3dkU",
  "key1": "3BoU4GG9oCoVzrEsp7MLFW6tzi9tjtyB5WW9KUvZbvXbjyVt2bfGtM8adRyMKekELFF9BkEfXFPkkTQ4k4JHAfws",
  "key2": "5kbyVACoFNA8939CPb9iBsfwVfNQ3Mu8rJnkzKWcKU3C9hTnAoW751mK1qCuhQhoKG1i8deuBJs3466jKPF4Vqn1",
  "key3": "3f5rR66QSgP7yUJbHLhx9PpAp9mjjoD4QxwpMcT9wSuZ3ACtZtmzkpw46gZu7iipoey8CqwjFp8uDikfCvaaTLo",
  "key4": "3CnPUzRVCQ28HAqAGZ6kW9xfsBYPXY4ooG3eLg51iBq8nF95MnkouJxDisFMzNHvDTmQFqeZ2FD5e25LNjky29RX",
  "key5": "46R6yhPSSni2oc7toU1kpVS2eSYb2Yt6N3Ewdy9S1EYmWJUK9sDTa3h9bM1HM1zsKDRzwCS192z1bQpif3GPtPeu",
  "key6": "3YpPJMuP7c7Wi3HUQ7Qoi5taVcbDJnjYQzfyR1m8u6aEa7r8uAuEP48DKE4eqM58ayHESXa1Ji9gqRaTz1rnQWGB",
  "key7": "3U1GgaAucJSqA67r8YuForjokeqrWXrRkjGciPRrPyvWrDXxCwcYbK6D9hGwZswMwBY2LVTmNu7YNKWR5VrQRTum",
  "key8": "y3gcwppPnQXwwhuHC1ZdPqgbaTn7m6AqVedD1gUzUkf6LhDEq3avFkpZbEuF9hQjN6rj5BBEttM8U1qFYf34jR1",
  "key9": "2rxaWR2LZCDuE3A8v7UPb7NiLQ3b15dgpZKUSzJXbzBSq3zs5WiWh2iNsSbE1YzCPn4qskLELD8edN9jqZRx2QKs",
  "key10": "8SUbPLyPir2B9Qj7QhFRBgCs8WHqDRUUmtmx5Lnh4dSqUco272KPfZeYqDGFDpaqcAqE9gHDFH19eTE6HnrE7ET",
  "key11": "GaPhAieCc3whngtUs85DgYPv82nvrEzy2gG7V4nFHqbmZbmvni8VXmgkHGG2sQ1pYuggtYCShNXA9GTUuhQDLUr",
  "key12": "u9bqm9YzTKnGatMtvVvdqfxJCTh9JaNk4RH7z1uxKY1qPDJvJzq8PitABwPkwW4RACVL2HFz75QSSPGsU1HSi7q",
  "key13": "5YESkMuzRKtFQpFmQsSX2EHSr4RQzSMZgpLuZLqiWKticsdvPpvvBwAuBoUpDEuyazHi8cdUAyHZBignpxg3yNH2",
  "key14": "4r97NicoVw6FwNPveaG33UiwTThhdHp8PZxnh9N5E1MbDCmq8HfdeJ1NjC5H73HiJKwKXDs7cduH6aRpVjJ4rod8",
  "key15": "2YQY8yEUMkMG9rrw4kttxFjCGzQZTD57r5TXC7vQ42otzaqmjr1HsP1Q4MKZ5SMMeCET26KtN8voeWxT5hXH1kPB",
  "key16": "2Wp4HkxTgmzWxXTMu7e99haY8XZATsgmmkwV4YeX1Rp3NqfFXVAFaUXfBX27HTVWR7DZjzbHh2dAmFPaf9LRUp3C",
  "key17": "3C9WiD5Usx2UpzbPHfiSSz5Gx3cAs6nyik9vLn2JW5cBdLhDJM4VKUmYTJFsQE6LoMRKEBh7hDbQrVqXYbggAhzD",
  "key18": "k9tZvRnBy3M1DVnyRnnLwAgxzpF6TAopvHNWASCHLUzeCsnzE2iEw6BbpDb9tH6B8momad3p23EqjxHezaQMYnd",
  "key19": "2soiWbGG345WKtuzBqLuemaFLH4QPNMo5byw4DLtxD6zskKhaZpZgpwcfaJWH6VXQHFWWHtAnuAxX6EuA1axMdQy",
  "key20": "327tPsZ92sertHmmGptn5QGMruvnThdDPrZxvz5pGmkrfGYDd9kHe2iuhRFcgRTKVBuuL5ki8ne8RjQ5zFTotkMV",
  "key21": "4SPh8QSmGfzURb6p2bgUDEpis9bcHNwVzWCvf385radzUMTnXQcD5jo4Z1T4238eqR5jQBukaUu1NrbfNqmwUxZm",
  "key22": "idNN3zs5GQvgDXH2v2eEpgFBRDczcdg522HiHq8xu1J3sUaf9XbxnmoUW5Q8dsxwtnpN7ppSnDPYLmxGa9PuBE5",
  "key23": "5ib7wsCTkoVNbvmEzNk4iAQRhz8mym6NV83RagFGMPXKUQBWgtzRn2hhfqfG4i2aqtgCAdntHqf31iQaiZBy4aEG",
  "key24": "3WCuFc9ogG5Q7QZZ1yqizYHKA7ECXD2wQqwXCyXpTV4jbE9EHkgmkWvNaZzP778xjvwMRLHWaCCSknTejpZjxoNh",
  "key25": "9y1Y8JNrJ89XBHyGxPfFqGdppHs2L2xqbH5KjE1BTAfTCZbmR76ZztGcywbiQhn1zz5JQ1PQpYPr9FtxyP2CT4L",
  "key26": "3JB54qGLwsk2p7Rri5rtwAkocBPYBzZBCRgpv9WdLc9QXdTXdFxES9WXJZU736mvSXaV4JwjuR6tfh4pXSZBuUA5",
  "key27": "37KHPsgRW3nFmk1PCGcErb5t1rWLyQo8dzy2YkfuanJjQB7JmYd7yvazeiYTnWfHjyg3kfZAw4ZuN78upk8isw12",
  "key28": "33iiFhouy4cqq6tj6Mt3Wmfg1Juy8b2VWKXczxNGeyPy1inDHqtczabcaCuEvLHPzMiu8ogPexRzsrNayanLeLSV",
  "key29": "28PjpNxARiQ6Nzv2pgMrKiLqyddAB773Po3onPU65Z5nuuwLfveWXkjfbBKLwEtKFcL69ceDn1sPaNe62d91sumh",
  "key30": "5qr2E2bL3LKE5dgqXFCwfghcCtg8naXSPBEs2UBNQ94UuHCXTiw3a838Gowqc6aZiAspFVTWhr786BxB5Z5pjEJm",
  "key31": "5fjq6HViJQ8wCkwfc3JpUwG6x3mM8SWHJ28orve2yB621DECx6s7PygJZYNyf8HNjC9d39JLZS8wDzZZ7W4dTH7M",
  "key32": "4PeYzNWbo54eyxDhYqgi15Tw4wQXm6Eof5GFKpZ2RFz3LNKMy3fa3vKzxSVFQbPW2pbtHWmE1YAdo5XHWhZNC9hz",
  "key33": "3hDA52bzSUGQKURwWMPEaoUeLCX8F6zjMZKbrtj3Yn15WABmSwawU1G8MB1ACJGGorVQT3CUkgKVCnBYBFhrKi5q",
  "key34": "2J9anR2RFfn3zXV19vMNtNREnS4zU6viVXKCNh8cbUfR6hwFuu9YqZ9K8HDvgE2vW471Zdg4FiV6aw1AvMzLB763",
  "key35": "3TFi2HGDo4CT7RTPnWr1ypPoYnWcKPYqEGtXZxKGNbPYXw7dVy94zfx3ydGH1TviNVMKZiqn8jRw4fX7J4uT9Vsb",
  "key36": "PckgXBpPRTrthq8rez9pcwf1DGzRJVJihrbzeugxkzwxVawCKbGjVGA9qNsWu94gAwif7opYohJW8dPtBdsYAf4",
  "key37": "5fi3VFT5NVefPQJdTpAECzzVuPKPoDoPYmFihEBL4hCoFXiDk8UadT8drXn6x1Rqe535ym1aoXAHBKMW4BdMLhhX",
  "key38": "3BJKEdQUjUcXFkCYhE3RvwJEtpre2GdYqrcxRtfSYsLc7nYr5rfSYPuJyXL3rRb8VjNkWLLCJPgKYp782kGzwggE"
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
