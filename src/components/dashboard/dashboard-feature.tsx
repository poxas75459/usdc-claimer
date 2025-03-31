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
    "5vfjmtpJpUNCP1XVDC7RUQ1uh6SgSybKuetVdGU47ziAfjraoJT9Ao5mwCGJbDAnbmNKT6vok8fwbTWFLZcLMj9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "284a9mjpTQ7X9jrVp3RFZt4pDRokXXW34C8DUCcyLGLiKcuHNJqGgpWUBegEjxGdubWCCg4S55JPpKQ9XKvbM1rR",
  "key1": "2uBdWAPrKkYmquBjzmME4jYJ5RZW8ACSuJc3QHQYbgfRQoSfiMJENsfj6sbE3tchhoX11487bKDztS7xNNcaZrM9",
  "key2": "4qRRE8vqzaENKC9hpGdu9pZne3hkuuK2Cdhg38T9cdnGuaApUX9k91zHcjh8e23njb3eHG9X8y6aqY17gHf67ycA",
  "key3": "5FqXsewNTFmG1KtC7hTyb16AuJfD6Mr8JTFBHYu9J5nFE1Ux8Yg9CvcVuguq4yk9AvJxwaHmrbJ1vL3iuS89Xnje",
  "key4": "3QnCwJknzHWSHGBss2UVpLYxmwYTT57sogwxSR3YTNBpjocWaziL4nkFmqoVYaXq1qLagBZMakU67opr9Fxq24we",
  "key5": "5hpjjXaCpq2KsxEirWKPAnjYBXaN3M7ojDL4Q2R8pNqJd5Rfar4xukTis38gAaR7C8wSmxdXJ9HBL4UZkK8qk9gV",
  "key6": "21eySHBYcUhXpFpHs9djEmQhXT7WxzsazxCS3Loh4Z7ajdgwMrGK7KHjbBWTbqZSZXqa3qtv2cLaEAQzdvMGagy5",
  "key7": "2QoAAku1zLrVba62TNJ3jtrrSJ8hHsbw1sCqLGHUqwenh6Rzru96qVQ81sYNKc8Vpa6y4yfNukZQPnNfkggP84Lg",
  "key8": "52ruNiSPgZGPQ74SPtjkJuY29bvPXhjLY4venCASx3VZ8f8ERo7V2uJpSZmCfzc5pRux4ejtcvv1aoKA7rEzLEKU",
  "key9": "3TEWQfT4HoDsins1cZxhuARd5r4w3AUYqV8S1kWRzajCgVeQSHnmyWnuXnp8ihqVUWTcx9JVCfDL8RRH3fgyni1j",
  "key10": "4phH6B4bACdE44qD4d2M2QM1RvacgLVBkK2YrVmk4UdcZq1kuAZq2s9N6RkjKVKXrjJnGLumsmuTZg1fHmbcKX57",
  "key11": "gVqEc7HdjUnHr2oqHpgkrMjiTFg5JY5Mih3qYN9k55uSg6VnrRF3AWzGatKV9jPExMkAztd9bDMqkt9cbWm51tz",
  "key12": "5aK5BJqVKSmmSZR4isRTTs8ArsFRsZZUkyBchJQJiVZYx36ae1ExgZFaYGS4haTWWQZ4gb5EVaJpT51cmiTeRkew",
  "key13": "GNgGz13h9E4Yud3aGGku4as2GaoaNwZrSBaCSGcgoXvMQQqWaAkFkX8RDu1oy5Yva3bFrjr62SZ1hpRQ6jo4cyy",
  "key14": "4etJ3FvujTYFMnBvq7MYbMrhvr1VasU1QC9jnMARoRiSE9fitW6Qj6ZyCRe8iBjNqM6Lz6tP6ZRrR3aUyC4J7qWK",
  "key15": "33B7Cg9yV23Jwtc2mCewDE7RMyvnKPVaqAy8fDWiJsm3pKLEFLdtTEQKax7rPdaH8o1uPcD3VRKAm8L1MeokAN2B",
  "key16": "21XPc3oFaFHVUh8xSsGaFJaxKkaEHeiHWRUvbPtqMPGPXR2663Q1cYfro1JR62XSo7s9f5kLkgNBNgGt8EkZXprH",
  "key17": "4tojvXWqPWo8vqecMwxTnT84qo3XmF48bXZfrjLA234tyCkokqcNQ2XArTvt5e7JhV7oAgbTDK6uLJu7JwVEG6qb",
  "key18": "5PWbFNXU6YCekhXBWMveRkXYw6M6N2nkMJxnJwUPYiqpaA2AU5oVB8TfoyraxigJVpoquXXQpE72LsArNZn7sWEU",
  "key19": "5s2r4qMUfNCeL1pBeq8j8wArmsc23gv4HJ5MGWJTu8WSjLpKj1aYzkQYjQ8t9Ei2AZbM4trk8HYJZk6GPehVKSzo",
  "key20": "5vB2vNiitYjXstBLjYCNLAsMrLFeHy9fzU3FoJ8xMMuB5nt3ytMri5JEdjMcewCn7MTn7RwTucUpCKurfzPa1KEF",
  "key21": "3Y3YtSVM1cgtzNKYcbb76JhmWj9kY73swgdUHH6wEAvd4XTMJDc77zCxHH1rB7bM5wxSFXiAcdjZ3BN8g9PzgN7S",
  "key22": "B59p7ywYJP1Kw1NGfBHR3otgYp5rht3tEZyoVFfaXLws9wsV98TcpUGn1kS3p2PwH82bwdN7eEddw2MQKknbHCD",
  "key23": "3Jbh2f88of5A6SZxax2JLtKMX82L2RRdjdCbw65y87Gr4xcFcKFJ1z6WnoQfYy6jwwBxmhRyp2ntuxLn3SNaKf5y",
  "key24": "2HqwrWXcmM1Uqvg19wL9a6CJPro7meyRJCHieoTkmmNzGkGwvSrAzujdm1f1cjyW1rsLibBLmyZCFP4SFx8n2LoD",
  "key25": "4ovf538XhTcN4T6c3i4srDZujq13UTTr8xQntpvBuPDxDjVe7T31MP7zdWFgu6gC4KNwfMN982ZbPGrkgp6ayAqn",
  "key26": "4kMX8phXbzqBaLWeeQbXc2M5WFSuiXXFdLg7NysHC1w1ui3on6deUtMfgUt8GU5uWic29GcEN5g28QMT57oUJZ3B",
  "key27": "2LRoZS2aMjYzyVHHkXYsJYBvefhBb4qc5W4LpfuRrsMjZMWuXeUV8USjFoQV2FEdZQahDa8KJgiRY53XtShE3iwW"
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
