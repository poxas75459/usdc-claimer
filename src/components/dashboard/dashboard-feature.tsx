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
    "392SwFNDsG2KXUzAZNCe8ajQqnBTDFrgTpf88Q6JzzA9m46baimXbYz3S65TGpCDBYY6v7uYZ22hvwgQzpFKipvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U5XQjFs3Vn4YSVt3i43SdusPThCmpiouGbXPKTMe3mRtQyakWdb2V5cRLPxRFkiX7UULSK7YXBocLMXsx3bH3S4",
  "key1": "2o4WHPt1aLKBzTKGHFdDM4mCQQv8gTLitKA4e9YuQqyMvVuHq7VCWfHRUdT9uvkg94qp6K1t2SKMr1u7B3cA7DqW",
  "key2": "5NeFoqWX4hDmPhq3rVs8ovBKDwH5jD7HTZzjn9mFo5b7YTvVupvYoN25K2HuVXft3PsoyWayKjkcKGGBUYgG1eC7",
  "key3": "5NzE21Dmqx1kpoN112FMk2NynsB1jJkJXdvsxzAMUZCnrdsv2i1c83N4p8XcCPxoVD8kwe2JGo3EuiSWgNYQPhAR",
  "key4": "4RTzACsWhQzY5Uu7vkvVj1qp5229jwQ2uXtUcSCKJf9BfnCcQKq4UNY6hiPAvZGzmdbEU9BTcLA3hfCZpGzqYJMc",
  "key5": "5aGSpkwAv4uWuTTwvwd8RBzpRjwBzNGM6VqTmwcFhhVyWvDspiUqb9cvq7BcZSswiXZ32upZUtvcYE1Yba55Ym1g",
  "key6": "2sevmfArCXH58RDjCR7FB88TEvxpS92NJQ6oVnknJBmTBGeubgVS6n69416P6nQP2cbR4bWd9jCrgCTAk55uBd5s",
  "key7": "DZAxkNsrL1Xbz5QhLkBoVQXmtVHsHAt1RkoxGF3rLD5XBy9vmY3QCr5yuVGEaw2frEAH8PkPkjYbEbTneULiU7M",
  "key8": "4Z5N1dnckyCv2YiUCCUtZxyeB1kgmeecvLdH1kQJbiZ1kASmCeYww6BZ1vuNtJbrPhqzq9iLpieXDkGRWtzmZh7z",
  "key9": "5icnPj62GKJKwkHSaySQpLQccyKYBNHKr3bvHcZE4CrFGgtsZDLA1MqfFRzVERcXFnvrvsbsiLYe6qDEEy9DSfw",
  "key10": "3gVa8wJLSdvfhRh3R7P1aTh2tsiSHEpxhUySPGFMFTr4hbh9LuYS4VQ1gD3JxDjC4p76paG4GvzuCMRKPkmd5Uig",
  "key11": "54DUowzMiRWAxFgdnkHA2rZ6mN5bXFEyeWDWscaUF8j8Lge5GNxW1nmEjKp4z1xcuguZAeeffoMT3Unh1pTKx8AZ",
  "key12": "4Htw769isKxVdr9DSCyCdqXGSNE8U5Dvbr9Zc4wAb7yKZP6D8n38TspgA8kpxVdahuQ4oWk2oVitVrtsJQkzfHTE",
  "key13": "4Grw8kVmd6z9syb5gNxAuCkksCSQKDs1sbArygF8y73nXNr5EfVKe4v1oFdp8NbxbE3n2R9xAeyoYzKEJj1v36uf",
  "key14": "5XztJ1NVqBEuQrcLwqs1G7TkYeE3M9C4LoW3Rop3VabNCDiAUBwgqTWHh6WsKX61jt7qLDacVtGfJ8uYC3aPrQnN",
  "key15": "HGqZLLy4LqXtoSmyhH3mi5ttoQqCYkWoykj2BmGB1TSiURzdsnko52DLghHaGNSafdJiAPA4HFAk7q4S9dgwtcP",
  "key16": "36CFtkL82LVsYBuzzFUcvXzVqwn2f1icifBEt7Qv3UgVD6vouNdbsZRK6NcmNm3cpvUVoYKSRnTHkiYUvW4jMaVq",
  "key17": "5rf85iT6vrGEwWEg2RKxcoWvQoiT6DN8CmutrRzVk1T4tJ3tEau8SgvoJG2iT6a68Rs63WuzxPnmMkpCAoWbMrBn",
  "key18": "36KgyE1jbZp9vzwGejgBP8uy7kbWGfs6w7MWN8Ydtv8ZPz8Z2ZTGSCVq4M7JSXrFwAKiUdz4KCN1fXNCKWXvR9yd",
  "key19": "96pE5wzAHpGDP78S78iqnjNWQZg9iYf2gv3npfcwgz14Fqi7XqpXxReb8jwASdmWvSmrgEUnbzjecwB4amnks2z",
  "key20": "5woApH4qGVwpmgTmihSEYREqPJRDYyERPBBPffVFoDTCahRXGVL3pUXx38KeSNuXTUzoALJ4b2cihcG8mtGQt4S2",
  "key21": "Q1JnduWFGjrKZyhmYnrusWZ4svUccR8otNuxgmLrfYDcMUykD2TxV6u2bZdRg5DGC1kWeBeT7DS193dzp7gnHoZ",
  "key22": "i9RmeWpJdGtDtbVu81SBbQrerEpuNck5eBh1BzTKwv74FrSYpeEaf1QvZj2fL8ARRfpjZGCFLU49WrhkWGrWXqr",
  "key23": "32mjSLAj2eC2a9oLAEk52Js2aVkD7U4BEoJ1qtKDa4hmHwwBBXkem1U5WezbNUpBqpxRyHQN2eaUXVTJbHwJAUUy",
  "key24": "2qXJRY6ohrcQfdYYst8G1EbPYAwu1Maf9w3vYgcuGqr7ciKMPLfHzyY3358bKzZdFJTxegTXnC3wjZgBqsq2rYq5",
  "key25": "5mpJ3dmTnHdPwC87FGTq5c9zhffwoXTRFdyY4wRYmyAbhQPX5Nd4p5ryGhK8ASYLL6aVZ7RymnNvS5zEHz2dHHt7",
  "key26": "2tMzxKa2y7zhCngw6VYzcJvHCEJDNNo6urxEJB7HVPANuqqHjRSwit69pG96Ry2v2Lcch8588ogwdXBBg7z8YAcm",
  "key27": "4Y9usA98WKQvKupLvc7Y8LJ3sS2xasXnMPEAP3k672SD8EMLJzEyRnHqCocUDnvMR3MDytHqxZcUmqjFNKvXWn7B",
  "key28": "TNP7CDMmuzHxLCDk5w3PFgyVRJrK6bF5SsnYR3cpvp2z8sWBeR5yN4KLM4dQhHgFtG95QQ589ETcWMBoP8Z4hZ5",
  "key29": "4EJWA7gc46RvFpVi8TQoaYBNA5oWy27ThUK1t2ydGCdcENJGX16oBs88FXsiVQExPcKtgWq4QBZkjSJg2FnCmeS6",
  "key30": "5mtRVnhcjJJuwLNqc5V9SyrmmkPBLGirCUvSqiLnwDnAf5cXXMabTgZyfsrg3wpiEC87MrJFm48x3kVQRYyHCHCZ",
  "key31": "3KXyCopAaMUBJmxiCbPnB9FHAwPH9yWfjAemVJPwLVCeck9EfDXj7gBBc7vAPFnwE9nsDCfBmZm9qjpFTZ1Ym5xK",
  "key32": "SUVHbXuc8tPUsxS9gZFDi74WLTEocDmpih3JF2BaLXZ9KQvK78BVFkcp3HvU4LVuGQ5nwRRc5Veva1oKGthNtDB",
  "key33": "3htwpmEhyNXFNZVmP9AeeNdDou9cuYGgCnW6jLQFKH36ZA1qkmUYQea8N4rnNkLaBG9MLtdE4erKEB7S9a6MhnNC"
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
