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
    "WW7FFBPHQwUqXjeAG82AEfyfRGrRvthVyu7pMSjbmoxbr5FCMcciMcqJqiGoDNkqbHxi1BwTZUyXBiq4t6DqGkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KK4RrZik9K7aEsqFThxLhNgv8iW9JfQMK4aJQjtrWUMaE9DSmye5rAneZR1G8xoxkSkKt7fpTSHN8EVNwShLLgC",
  "key1": "3X6tz6BiMPm2tAQTVaSjAzquhsLSL7AWHHocyBF11oM342vs6Ha4BDV428qYQgzqUxiM2SrDfQdJoVzPw6HquQpC",
  "key2": "4cwZmd5MiTHMM37v7NmNTNVJ4qsLNKjrGd2vMxn8HAnvykfYPhiPS77ecaYq6hQz9TfPewSB9GFTEVZH9ZTtSDNU",
  "key3": "5N4LQ6khhDFCZ4p6xQtG4EAEDraP4uL5gsddtF5CSXb8YuptYYrg52t8nF7btkUUrG3kCNzWFuEdpy4Mn1hjCTtv",
  "key4": "3hZkPu9nnwKrTPcNuvWHRpH2cj9iVRH41C4w27eTRxPwKhmqHpDRz7sQfP3gKrodaQYuYsyGeKN8FWbF7zpfKj9j",
  "key5": "4nc4i1pWXbN1oMnPW15GvfCjc4zy9wiwZVBhcapEcq6T9YEkE2NxJt72sAmdX32YRv7EYpntnAfKFerTwr59bvkw",
  "key6": "3WfD1wHo4a7YmJtYXfQTQALJZ9fryAsiTWzgG1g6LsFXNxBLxwpW8a2cwNN1jFWSGUdsJVBTZwoMDvnzE54mFjVP",
  "key7": "2Gzxqn5DPJY4t1QygCEiFuvubtGqRfD1HPpbroYY9PhqBzRe8vuxJCQrBzqmcmoLnMM35v89Nk244AWtFwrFhcYE",
  "key8": "41zbqKohZ3iYqRJBYECFb8X6kAseAjxZQCRnjEPGbWivXfDYBy7XzmcRe27hoTFxZTeZsR2VEdwwxp4s1s7kdMMs",
  "key9": "5X7JZNjAYaAng9kacJk8NzWfvbc2rB8Zg1WoBEfWTkD9b3MhRrxJ8BnshZaRYjA6BDkAdbiVnNjswZUwrg27P1SH",
  "key10": "5t76mK11Q9izesmVcz5MYFy7CPYR8nibxCpmYiaHpGFwHT5UyJdFgFjXx2mRdMXHd1kvoeigJD7Jee65DKn6d3TG",
  "key11": "4STpKAPfuUkwDcx5WgXU92xyW9PzZfLQnt9Xo6BdbLwmqFqcyNrPpRoKmR56oC3n9oL6YbKhR9hSooU8xdcL1s9V",
  "key12": "2DijkNC88SQkCaNy2K5hdMfwRpykioiArvUaw3iXnhFLKGKBFYsZJXVSyz6CCugTTCgUmGbQXLLKGiznWQ5Sn6Ah",
  "key13": "3vbCrBPYuSwfPoSxrXYpzBEn9wxs6ki5kieXTvTmUJV76K64qMWR3YexMQjvpUWrEWn9qUYgX89SC7tTbStQF4ga",
  "key14": "2Dc5JTZ5reXKUVnFaGxDKHqeRvGEi6rA4Kjs7qrVgcAs6xuPpYU5o9fMh1YURU5m7nz2R7Dd1guuvpt1kCKYFdRm",
  "key15": "J4uhUvRKYxJj5GzvaWWFtjpMTh1BM4z7N6fDdhccZU5GsmtUgqSYrJYn43W2o3WQaJS9sjSLC7V12V3a3hCQZiA",
  "key16": "3gGVw7S73EmCYCy8QZPGLGwUf3XgeQDpJxdf6dQeJYGuJMorY69TypjERYkNSqW3QcgRt5BLbXTK3Q92bpScAUqk",
  "key17": "5PYmUcZwhNiYKJA8nvBkKaympSiTCK5CLPbv67wpXynGb1KJoM4jTsH4nNJdD6eZou1rKkySLgY8PUKNZW4fxmgf",
  "key18": "26JyzgrrFEN2Re4dmV7Ptn6p1U3crfKaGCmXGuSMyo92xLY8iihUHqxeUjr1fPiso7x73JDeYv97huY1KMZt9p9o",
  "key19": "34wfaCadriTdG7dHNgCP4LuxVRDBUA9ZNJS8iqswCtGi3UuvYFmR9C55EhZbPCKDHNx76BoyskJQHosdHn8TbX9u",
  "key20": "5eyVLiC2Z2oT23kgh6PLR4xzcLqKRnJby4ZFTE1Wz7HbK6rTUCjHALG24veFUXG6ujUs8NNibxrRyVqiPAqskahW",
  "key21": "vxgBDkGSRveMjNrHtWcAGHy711gSyZy7PKqWwcsgtmVtL7ZVd5seekuVzLXceaaT79A1tZBsfbXsW63oLcbnGuH",
  "key22": "4NCbYUTBmkigNkdFPfhuEctpNSeBeJiSTGjAvmjpNh7Ec3xSSVUzVWBosH2YAqHW7D33mo5BeYLUJykJXtaKuydA",
  "key23": "5MWxsERnCDu9kVshhbDQQ32fe9qYdWAuFk1KTutvHpZ124MqRkJbcFYq3CfundbWBiWa26o4PFB5eZnQrd2Z1Mo",
  "key24": "2rF1y1Uirp8mABnZxt6R29N6vUwh6suMQekLHc99ZmFNHa28ZPoH61XjS5JNLXT9NJQpX3VNugPXHHtuTxnd34fT",
  "key25": "nPWbSevNxQnwH2Fg3REXhQSjRCxfa7NMLAiy6sipVHPQ1mmUqxtC9kQayupLJmGvsT2BBGeEj68aHZjBUZ3wHnv",
  "key26": "2tBrPyJJjy1aawujXzNVgcgjXYuPidrFLEQccBDGerjtaYFd8vQjm4woKpDQPJuULgvVVMRisBWuUKVVECanmvbj",
  "key27": "3c6FVXYSDx7DFHe4qC8iwE5ou3eL6BBe5oED2zu5og2izDaNY7ryn59VYUVvk5TxGTtdhHHoAqdnXFRmXjvaRoTQ",
  "key28": "1EHzv6rway1p3eYdn6VSiTsxfkdFChzVEfRWoRgo2fpTrAnUBns9yDmEgEgFyvH3bbBxqMKEsmk6s8dtBvwNpB2",
  "key29": "vmqMAtT2Pg9p6aNqpKUZGxxvJV8CBGbKZtxKBkZdwHAV4NJrupdYyD4PRAwXbqDPnpWvVJ2TyyLUpgC8wGUpgbm",
  "key30": "5htxPpmNMWCquKmFP5LFD924j6qLkDu4t91rmRuiC2n21N5Rt8phT94VZnbnA9zyjWJgoPdaUdi9BQWZW2ureG1J",
  "key31": "3VbbJM1BftRgEC5xzE3RX18SUDCVV5okzwcMRJLw74WZygqAUGh7tUeuWhapdiNugmHGjPwpQWgYbbGyrsXr4qv1",
  "key32": "57uRWsMwixp7acPXcXPs4dTwpNYM42mC9tvagYUffeGLCidzcYH7ChueRJX4PaT4ak3Lasr4pLjiiYrjP3Y3FS5Q",
  "key33": "2F6xAr1WCKDVhLfXU2MUfzuYZ9AuHis48R9eHF8LqALj5rASJDndKu1RWrcouqfCiYrxKJW3hvMfru87vuVFvp3x",
  "key34": "3QZ12LYmFXcphJ2XKh7htZ5ocfhNXMadCcpgFnFP68bZY5YmYjd3zbdvUvy1t3mjQ7ZuP967JRKPGco7iVrdWgny",
  "key35": "3DMToq5NGXtqJJ89U3CfgiJpEC7hDKG7a7JC1xioaKWdrrvtZuNnCSg4qr9FnUqNt16FiAG6PTuS4GFXB7iScehJ",
  "key36": "5w9Mo2b38CEnsGektFv7VYSqfRUJ1cshUEmvMmDT1sSLfu5robUH8wdZaobUZ1wXAFS4vdzeu3Vh1nmhbnqHTRR5",
  "key37": "66si14Hn8UfNNjMbLYwNoc8ZtpHn24SDqrLH7Mifi88Y75napEyu3nAs8W2PGAdRAYVfG9B6G5pFs1uo6c5g3Wec",
  "key38": "5Er2c7D6EVWBeWabMmQMzKY5EpcgeD4cun9RWnJ2GWqpbSoKhfYzkTFJVZKEtfpvSPTNvaMEkpUQzRj7uErQAhTB"
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
