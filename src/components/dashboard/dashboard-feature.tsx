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
    "4VNfbSzF5pkERVWWWtZAJgr7Mvd1T6DujgxoT5z5jq2keyurN7Q9SU6iVwW2NqQ8cT9QaBNnQrHQCDa1PkuXwp3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kgTuwedQD1s7xznnG5oBJsGwVafiYXVBXKu2aH4azbcwqrG6AKWp45Ppc3NoWb7U8Maq7F9tUgxxYTc3SvHko2u",
  "key1": "4Q8X45vBpaeTGPYrKB9CX4KgqxtLGYSW6bWP4RnkvNxiUrJc877zXG4G5PKyTYsknuqzufjv9w3dSjMH18ycUafM",
  "key2": "4w54CRtpngmbALtsfdcprKHxbCQyFFv6nr2Jkambu7nDY7VxujHebcC7a2DyMvGTgXbZyxeRkYmY6eE4gvwreZcp",
  "key3": "2ZJxmRKsfhveKzBtVMynjsgLjnhuGVwBHYcBqekH6BbWHPBZFwEtLrHDBGLCxsKoVoUJTHXcnEtg1sw1Cn1MEa5s",
  "key4": "24pphErJJhSigvLf8ZTBKchduYcXPWZkvs7RVa7cBcGNc31SonSBrbKwtWJ7EQCBzKaK1s9Xvkwp63WXqjNHYjMK",
  "key5": "5j9QyYHTJHEpjgzrWYNtxuUXHyahLMw8mQwhJSoz1cRRGwbs1fvQDDZKEcxxuf8JrUCp1FB9TDBWrCpGc6EN4wv8",
  "key6": "4igw9xck5rNvkWCZC2HPGiRAZh8fGh25K3vaumXHmnzEzMJqnaHhuKEyyBMVFj9a2Q1qJmwvPFKc8GH5YqwLB8Eq",
  "key7": "4JHQRyCaV7HNTdYQcYBrQKXMP6WwuPeoYnjh82D2vwpUcJi5JQuM4uCs9xCj1vLzrebonvZuK2c84XsPPkPSNuBj",
  "key8": "1WQHEpb5ZbBAEBYiPFvaaqUQYuki8zKfL8ZvkA44ZnBnvyeSwFp2tDktSPP2oj567nwooL1t81CTpZNfRK2nySz",
  "key9": "amkZ3pLpvigpSn53YyNuhtktRVDRCcNpaAk3SeEWBxWi9kjFNbf91rUVYinPs7YmqpNp7wsz1z4Re4L8DLGj3fb",
  "key10": "5rU1QsDVQSMdfTVktCHCcCpFZfCtFcj72GBKnsYdvTpVaSTEeYkTYzQPFKFEDamNEVQ456PzHuZueMJcNP1N7E6U",
  "key11": "DYjt9WGk8xcFnuCcm7GRGQtScjfX7nxA6Nq7WGr7YEwvFqdHvVnb7SaEHkxuAmguocyqebMYxJM2ZESPVocnCDF",
  "key12": "3N9iuMuM8y1zE5fh67ZWrCUcSNCEaVRbaFAbkSYKSKUranmGHgQ55bCCsDAAAKvZdGNs6SvWBqM2FcT5aB3mMABP",
  "key13": "37ucdwprMP2eMTrGUGsPfqbzwtqczN8iue9YpbiFyZHQXhneqGSikrgmPeCudnWZ7FcFyQV72N5AVhKb66gsZpwk",
  "key14": "2PvmdZzMbipWcawPkhguQHvhbKTXQpCLQKnS5nLy5PPGFciJUiUy9kiNr9HdigcQVEJsJrW7q9WFFAJh9z2XXXT9",
  "key15": "45CLNvDtGZt3uUnN3vCi5jUEr5PTfL7Z7EQ9onrxKVteSK5g3HoGCgMAGPLAUDMYhBx4NUZZ4EMB7UeQDkSAzqvp",
  "key16": "5VjSTT8X7rQR44zjrLzwE3b2XyTYtYKXijhKdEz6AyXTyzPhFSzpUhH6rhdVNMhrWBajFPaAndtfPr2GB9RBzZ2t",
  "key17": "46U9zR9RmeNVgnxK3ba9wLdL8E1VEtskUDVvaJAYxd8hS9pomq3PW1MYtm3h8vxmqjy1yC1HYb5zdgpEXD2X4DFF",
  "key18": "3GieY5LAGdfVbUfkStUf2Q3LrA7YqDkehYrUT7JRXi4SobL7JPC5XVi8MHu4W9CBSMKpGZVPDB7xMpMUrPdokpgG",
  "key19": "48xjQzMTpoqxbRcZHKX6KRDNsgceayRp1bqxzpTLASXtofgEjKv5iaZYnqhuhGVn1ig3kwVtXcr35DMJcTFpLinp",
  "key20": "3dgvCJZkWTfwRsCtpEt1v3crpXsDU4jPmaNm7K5b1BeBXjc3R2YNNtJ38cJD6mCpHFJaYDi6qpBSogEZv14yGBbw",
  "key21": "4zV75RqysG1cNdZmUiqtUUmiiGNcb7ehnZpNhJMDjJLEQdnVfAhdJqjmnEbkG5wVeRfmppSj9p6wMqT38FzQ2SeU",
  "key22": "3zKpds5eG38FaRtMJN9iQgyVZ4GS3cZXTZGc2SEzZFLjsVVtMoQdKT51DGKWHdcTydmm2sJZMosgPserU3mbDp6G",
  "key23": "4aRThVqKP4Cjo6tJsiXMcFWRw7uRkLv4GCQMMAYWDYqZ7XGFTsYbB8MGDzYsuzW7EnPdXNpXMpJ4Wh43LmqGeBpk",
  "key24": "2GtFigkikvRgHgioAEeyqEcHifgmfGYpHg4PQw7ALgsP4uPDeZ8nMAwM1jnCgEbzx7FU1S8nj1FzSAqmim7NxipK",
  "key25": "4jWW7Jkg6Hhg55o9UWMgwjxntbZ8hVVQV4KUxLyPBZgYZPnv1J8zrT6vAHjoZ694T7qsGkdh6JqA8uHVfcdE7bNf",
  "key26": "3EvmR6us6ZkFUibXK4aBGdAf5hGkzGR9NSwvty7ExwcKwcxUajaMJv6mx1URxTGkAf1NQGVx8pnngMigKtc5Kurj",
  "key27": "3MZSL7CUUwHzNXg9GLantoVR87VS3BEuTujiJroz17DhDk4PEFdXbB93VFvUS6cNP8SvTjEkXEqoz69a5cTdDL3x",
  "key28": "buAYAXNEWtQdTY3nbBo8QJerNM6cHBvm4o97HxdkTxTv7HfiKwxy4CG4PSnTmx7PRaiadNeCtt8rEkqguTq1bpu",
  "key29": "3oNUw9NTJdYRu1WdxkFrQ8ZR8tAUPHvKmC8tLGCNpSAVr1vJW5n7oGJaExzQGf3GJ2AhnEVgCkicW7CeyinanHsz",
  "key30": "5QWWRGt5DeZx21bJk7Q8Vj4aXsunTC6YrxirmV5LvrcYQpbFXgyktVQ5pHcMs8MH3PR5RJUdriWgQy96EcxBX82N",
  "key31": "2GjXVUMcAgJgGem1WTdPoid11HYoYjomD2QkjLcGDBQE2tQKvPrLcaFUxB6EYvUqrLjtMXkmX6HUCEd5TuN5idky",
  "key32": "5pedujLnPVrqm8XMtyhJVRPFxbTH25qgksoRisHnkoQRGzqi3sYysZGsrKf3E7x4kGkN4TghUUM5ewcvptwGn1Nt"
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
