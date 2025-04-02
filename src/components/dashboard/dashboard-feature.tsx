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
    "3rB5e9Kk1GPPs82SEANVBUvzAodCCa7ZYp31CUuYryaDN69A7qmuxti3EWgsgFE815FBUKrPJJhyEuT9uQrZsncQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uTXQoWTQ8EJqtkgU4VypTBbdoTUo8sRPwuU5Med6oZYxetU2XU1V6qFDiK834G1vP7shuZYnBFPH8k9mTYorZuR",
  "key1": "2jQircs2qGPwz4tYXgiGhJhFnfFPCQ6MsUmV1SDWKp4ehVdufmg2UWramTZaqohWo4Y5eAgiuNa7d8tfpvFiyXgk",
  "key2": "sZQV8CDr4kyfLj4CGjjCXRmGaP33yHm59YmozXrqRWFABeFKwyso6pWmRprWk2qcVeH5mBKWqJ6UQQRWLGaWJqm",
  "key3": "5QUiCzJDa8TcrA4eou997pZf4pxvJjuvUAphQVnfiGXmYH5H5m1hRVhjadbquLUfosHb7LwjkHuqTFV5ezt9horC",
  "key4": "5Jt4bMz4o9U3LnjR7ecA3sGqqDndxBMueCJqicDUrPDshppnzB6xtioYjdYEdGME8Vhagi2XDV833Mx7cYJo8kKQ",
  "key5": "65qBTj2EkwZyCkDy8Q2QtVjvUGvQEgexjNm1vLvDvgBxFZxDFES24QSDr3qJvRXzhZTs5jRVzM6XPe2mMmSwDjxn",
  "key6": "2jA9ptAkxGEJBQq7Cc1AJ4Hn7eY3VgFMo45PWpcbkGx21c2pER2QvNNqX37NKon6hez9NPzb8BB2MCvAbgxd5oyQ",
  "key7": "3Mm5R5Pz7BxBSKtVcKvjaRg6sUv44oYbdCjfULdwHcTKrWM9nyXyxkxvzLEo12a6BTZePygzrpSbNNBePy9uRkbk",
  "key8": "573XBwmxiQAqu4MMrmaYSHpjavnhuudH38pHrL2sRKK3JW5tqba9NAhtxao1ShGkdmBC8MPHmJk4bGUmt2ZqDHyk",
  "key9": "4VqVwKz1u2JG4Ks6X28MKLihcffPcGQcDitxt7WrdqHFSd1FgBBJpVfFeAAsSQ45JzFRjaw26L5GKVE8FhKqcWq8",
  "key10": "zoFhjzwut1GttkbWRNcfjNgBqNzS6ExMAmS3ZgAeNLT5G2kpH1RAkJSD1enPB42tiD5zPxWn5h2VWRcLvc73q1m",
  "key11": "25kZntrZanqR9PUhbb47XgZ4ZTFXNrg4G6mkiGhURZdJx38G9KB7AbpX5HuXVP45Utgho7sA8oR961o2G7KS1PDt",
  "key12": "2YKtnKXQjz9dyHB9HSZ1PSkvB1dELMkPvkz9bqyKkC3JxvFtQiELRGKpfEQJVqp2BpYebXDU6EwUMGvdoqdUnfHE",
  "key13": "2gZRWpdBBbq7EQtSJrmZeki6Ud818c2tLVioFS3PGUw3aXBNZZi19L7W81AHSuw6i7jy5aw9oe9wNwP4yvYSFbDc",
  "key14": "2pKG8FrNdta9gPCUJv3w3FyxsyXVf3tXBjKXkhXy558f75kMyakq2aaJK5iud4e9zAYbJ6jwhniFh6dLvXnKNBcM",
  "key15": "5u62NFKPXnd8ivUjNq6EEAMhN52bmXg4Ds9p7RsXyb1sVqWjbGicu5weFhMTMnrqYYhTTafsbvf2LaHWDkRR969D",
  "key16": "3vcUvNjxHvxGhg2BWw4PhvHeEqJWyAc2gxNs9tz4wY2UKLKdez7XUqV5vLxA9iWNkWuFX4oeMXd7xnbo2y1KpphB",
  "key17": "DJaExmzkaVV5DP3FgJerb5P1HggGf6zGTTY1kgngwgbpkXF14bZM36SBGqfiWyRnr7C8hYk7EhbPdZKhyYVSn2W",
  "key18": "4BzG2XUNvZqo5VwZasiCXMNbccFQDtrdDCcyokfigULMXkCbZ9429a2SbL6ULjnubZnRLvbZhAF3Du34MPySwN8d",
  "key19": "5v4rivCPP7LmCHPAsiazTqxBNuzkpLpSrcEo1tX8NwWCuf7ofozbvWssnuwhDNj9ZQ9AvHquv5Roxkzi9JX2C2Ej",
  "key20": "2yKZ39N6aRRQa28v4TKWKzWUAT5NiKWkjb9mVtPwyhEJnBmyTD82zWBu5JJ5WAHCCFWTkd3BU1fV75xL3tsDgz22",
  "key21": "4jq5bXWRbZKDu3zRr3ZGvJP2aa9REFUvSq7MGFuxMP1jAqX8jKpoqpmQVtvgroq1KM3KUNaEz6kwT9ciMZq24bd1",
  "key22": "52KHzDh1PbyNb9iHXak8qZ8UPDtevQM6sq59T9WGeAdUKnCyNLtzWZwY2aCiBD8FC6ksjSqxFTWagVjiTDZkMyCg",
  "key23": "2bJuFJDvoUnhPXsAYKjJFKNrtLoh5kzDLNxL3W62Tus1ppY7UEwdytaXEbkbVzfJjtiyi5fhvnUmJ1BGuPVJEa6g",
  "key24": "2KSYLq5rGmWHM7Vn5Fw4HAxuKoGTJ62sAbroGthxVGkqx8X1FFzQJeHiaB9eBa7M8YPFMq8gKUsFvJ62atyCAX5e",
  "key25": "5cLFzadv941LattxznGGPCZtxsNfr398pKLjHAuhwnXayV6AGwdWZCGdsQ1w5nx5CyRGiAP2vAR8PFm6nweG9Tkb",
  "key26": "5gediVLHLgi2hFeYU58NxFtwk2NbAyU3mGcZJA4cQEqKV2N4yFXomXRiaNxnBwbtBSvDAFFDtZwi5Vom31MPKhLa",
  "key27": "3Vi4ZQkRRRNkeMgDfSxBT9hYPknmM2c4zJYEKCQ7rFycmgrc6sViLNfNutbBn3b9z3piLFGVMNJGirGpCbPKGsv7",
  "key28": "3oMjdvgkgnP7gQGPdNmY9n7iGaj5bLBAUF5k7DwuxDC5AqyMcHH86jKj3nP5jf2KADLwYbtvYvfkeRUoGSvy9Joq",
  "key29": "28eTKqY4YxR85gKTYD8MMt9R1gWdE1hEMthiN9K9j6MX3AcEPnKEnvHs3se3GJWVaGcTEDZpFgZiTWU5CbcjX8bw",
  "key30": "56ipWCMCnyDythBSwHB2HBimeafwG1ikFenzWTXiJ6ysv5L5VzmebbminPmfTXyBfFshHsegUNVfrccjhRFPYMXU",
  "key31": "4Vtz5wL7QMpMKfzzbr8rK7Qn9fmFcYx1XjErafqmm99jsNXW86VTU6JvVbJSgjfysmane6ZgCzdMaNFrd4M56RUj",
  "key32": "5mMbZYgzWfwZHmUiar1gA3PSQGn9g7U5Ab9uxAqZQmrtQ9yCFRtRBLVGdBtaiwANSC1rBvpGYC1773PHHLfNY3NL",
  "key33": "4RskhABahsWJMHpcMuPwgckHPn3SCxPyLDyjgmrtEV7PMjSo1XzENxDLbEnn7gwVoDw8hqcHppwopWcNEc27t8qv",
  "key34": "3rTmyASqgn68BGLMFKZgms3iGiDKPfFLnxQeAqTSfzZjpcUiLWXg6iud9sHwXK2ufk9CTQdBhxMRS9g4vPTAsSKr",
  "key35": "2ebkjx89ZLS6vynzXSGGtZfZU5EtHAZpKjcvFPwFYKXJix9UM3BSg9hrJcFmo26X1dNQGHZE8zqTeTJ7fvWhe2aA",
  "key36": "3A8hoe19Hn7XVNY7mQgLJTAkpBHaCArKe1m7uFhcGnAhSzw5RQNGxbV7fx3FbwJAT5qnjQxVL53MaooEe6dSrNvx",
  "key37": "64z83pTzANg9MbHbeUFp1jncbh9b8Hc6pkhPZGEYy8tq4VUb8Xy3UA6ovCEwe5NR1xBiEKT5xStrfKmnbptrqeGz",
  "key38": "3CxLcBDQjNqYWUSfVDGys3JamUpb7GpHTM3sd9L2aemkPPA9GB5jmWTjLYsJzvfBheifcoqhmS8EGGnciJans1vU",
  "key39": "35MRpgNRk3anzwX1SBHpasht4HnwEDm8RcmAX7Pqjz1tv8gxeEBSmxDCSJkxWDA9ABxHchYJsftrBQkvDciy2abc",
  "key40": "4f9yvvQQH1bQuqUkszsxWgXpdiRzgWjtQaScpQsXqig4kaCysDDvHZVe7JQowFUeYJvzYygt24AdXZ2aS4Lc79R2"
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
