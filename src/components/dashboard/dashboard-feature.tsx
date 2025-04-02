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
    "4eygJQ2c4R8gNdEkis9SeNAn3NeKttizVPrn7sLFapLQWvQU3ge73TrE8nwrLkiipFmUHuSitzY6NdzJysMmGFjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sbpj7ZtWsBs6sXKjfvhfcBfwSw9RLh87f2JguUxSCDXrHoSWb8B4foKAQpq4Zzh5SwT9cbD1CSTgm325FgTWskV",
  "key1": "JoWkgk64RBKzENXHYJCMtWAYyEtXLh6A811xcYn5tvfzEfqXQtM6TxjFK2W4n42VZYCn3MtNkkJTQH69XjM4swf",
  "key2": "334wwa66z1Wa2gb8VKjt9MM3PuTpkBRXJKXA4afWYcMBwiSnTXEUery4yrSRCcekcw8VEfMSgrLSVQyA3BiiJWVy",
  "key3": "551PEvBRajjvYaG2QN9EDa4FoRUkV1fdF24RvyEzfMBJpw5Y2pCiPoikBtzgegoHVB3CsLFMJ7pNnRzp4urLeStT",
  "key4": "bAjstHKSxFZnYAXy4xQ8VjZNjWfh66n2fU85bsQKbwrNykbcf9NivpGWvfJezH6ih9DYyfAkaTSjZcxe3DMKmyG",
  "key5": "5KMZTum6bvBd8AxLMZp3kv4DAQes2S3JEdBtTn9gPV6UD9EkLtpsWjTJo8Qjuq6MPsutXNDkZxZBLNL86h6aGhFv",
  "key6": "2PuLHJcJVXBXtRVro3LpR62AgCp21SkG3KmuSr12A3xxUQypNJnwGeYQ6gbx8Bkz27m9WGyb4QQwEKbXWjeUKSJ",
  "key7": "2mmkZTyqoJhrbMuqB91auAyM3WXJoHG1gPXPFpYXxEo1dhNLtoko3z9E6x6pctMJcdVU6pksvcYmYWwdCGR94WbU",
  "key8": "23cF7dqViejKZGNXF9Su8eUCQazCfmYLNC4dJW81UgnwAJNpRZQSe8BRHWWwST928SAszRegKyWxU9SJ9btU1fWg",
  "key9": "5Fqwh6PzFmXpUu5MYfg9yDUPtpyHNVoUDqe125tAZG72PEbjnuEs36An3smSqtVcTPuR76PqfEWwYgiW4vF7wBNF",
  "key10": "5Gd1NvbysjwjLBJxnDudtoUcNC44GKZBoLknDbW1g8cgCfMvCs6P7BFp8ttr4PqY1Feszycroq1zaWmpJk6E68J1",
  "key11": "3a7PyYDim9Db6QdvFF6KC2LsmhAiZM4qVNNA5sfDPH3CxWzioH2wYdjna8Yv4zECPYQePMJXYvqKZsZTkZde7ZJH",
  "key12": "43P8xiNdgai6iJdbiierGpvCCpws5fMmRqQrVBK8Q3e3bJ9RrbczdLPL98JwtYPhszFNajds9C48C48P6csxobbg",
  "key13": "2rULxjefiz83rfkZFYruBSMf4UzB7e1Mwx1CgDCD2JnMjecxepg4N8vXQM7ZT61KnVkaJyRYc5KEMTzCWvELidT6",
  "key14": "Q9vqZLuPPRiALoG9dFoCjwNzrvfRxzyqvma7AcWHLPxLpVjhdHns1EDbdWYDpXFjdWw2YhXu3cmXRxHSUhFntzX",
  "key15": "22ky69td5RA7dnaAvJD96uXyQ1HHL4Gy8XZ17dpENrdLYjs7mdN7fr53bkUSLqrffuAPQxLPhKXLFSzpZt5zUw2W",
  "key16": "21zKd1EgFM2JeWWJeTB8bEHVckthQ7eLsrjdG3JyDzJsRBYneTt5QoV3XWXFfzHWBZyFCnLWQkojPyfxRF9Fh7ES",
  "key17": "4n9hrUfdypqhHWZ5Dc7vbp64ozFA6p62vVXdNtw3Fq7TPgGLtvZg4bZZWHegYZwy2tSnmxNCkeNRMsez4bvzmA5J",
  "key18": "htGHZwLMW7vJVfdpqHoGx1GMxGdqcZJhu3fkD99vpskYjAC4yneRbY8jVpiwHjzJ45FT8jmapiNJeqATzw9enqt",
  "key19": "vXjH1YNmC3g5iUmmubJ1HXgvGFvHHYkjcxQZTzsgVnZ5cVq14Nk3NrEwDsVTicoX2WU8fcehbfsTgKfDv7TdArV",
  "key20": "4zYXVLCsoJQ7Tu4QPftb61mBft5H489prgr2Z8tmfvnh4aXcMmm5jYtrHyWvt7NHdmqo5hq8Pa6JtZRwUoqQDnfY",
  "key21": "3HP2P47ZciXKHpmqec28gTXxx5SLszoaGJHzJJkNFLctJnmiCWRax3rXjD2s7wxxS3uBou6rssUmD6HU4s5VKLWo",
  "key22": "5L9JNWjf5SNXhqddmqYQ4C9DAi9ND74wP84XhQwyMUju6DJwG5UbumVn7DJUAvxoLMVFpdUS3UVvNXDBP9GeRUy3",
  "key23": "57z91Gh4tbEgLh3g4uu7tZkz7jwvTyj6YrQkY2q6nRDNW1h2F5YB9G41x7xKX6DApMwcjxgPX1qGQqij1CHsyiDR",
  "key24": "4Ctw63dqAc96ULcrJLufxkUz4jpUqyx8dvdy2foGaUy1oeg6zC9vPnhpFm4CRyXGGptED4PqGAHUoBYe6x56hRTp",
  "key25": "2UCWSxZpnef85w5FaVbB8u3jyv2isvWGn3DWdAdvn4t5prjymuG7eHAnbPcexTs3upENgm5yNVNwaT6xH2KQA3zD",
  "key26": "4PMLqDdq9pZYiJ4TSLLH5sfjibJhJXkAZ2bKw3VFeJiekq6cnDBFCveFS48AsTiqKewQuj4oRuP98XGtC2u43sVZ",
  "key27": "4UhTPpyh4TzpPvwZd142tehETAvEmfpVPmxHra9fVXGTQRkMuCvPAZwzabnwkoHgRsDqwiJtZmr4qPdjLdSgy8K1",
  "key28": "3m2JBBj1QeA7vekMMpCxQgNcZARLq6SUcgcJqZ5GMU14Qnrj6FGERsPBKa6sec6HxF66wCUAraz1Nub7pia3oouB",
  "key29": "EDDr3zYwQ1o9SFvX9FDtBRtBp5A5DeRq7GZemf5cU4184sZpezqAX3F1pGaTsP6L6rhpA2a2sjPHdd3eS4od4dV",
  "key30": "tNzFiRCziMrfxu7w1pr5vE3vJj11JFdeSuH1W9aqLZjTpXw2h9pMzD5qMctu9TcN7JnDmwDhe9iuc4JJoZEoM3a"
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
