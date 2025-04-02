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
    "5b4sWzuqoTfvYhKHR84Q2D7hx3SxsE19B4P754bambUUYJm6u9wCg9bWRckonRRdPduUXdxqjJmoMt38jyvGjA8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62dhyjJ4MarxZBCqWscKkF5SmDjDwzokHRTfUY4WmD9GrJJSAVSoYrmtoxYEvWyHQd49GFo7haGLJdrJCijMGKu9",
  "key1": "2TCTriTgDYU15rNJuShGhMXPHLdFWUrnJixvBL3DKVSCWZyecXPRE437APDNDSi4fcnsDjao7YF6g8qrasaf6Wmv",
  "key2": "2cZKLDpuJUbzYJmyqau63jpg1UbRjPHhCJhtzXsFVURC2fvhLAspFmSFVKg349qPcUYLZXQzvH1C494UNiQSaKy1",
  "key3": "cofxzeYcE3Mnyi8hvmNUJf4YuZT6ewtj3uPXQfVKgjHE7eMpQedt585VWEawQ8V6rwNUAA1iDm1Qh3Ty9aUbca5",
  "key4": "euq39DytxzpVSs3ZDvFaRAL8SWopeRfzfeeZRmDAo1JeUPdDmz3r6JtyCMnbsaJnvMksz7VUaBP5wN81zxt9feb",
  "key5": "iXDGhmzYPEcr4zpBxWe552FQxTxKDnFegBC3GBrxUQgwTkad5dCvGesxScPzi2VRhjQ6R2i4UCSa1a6Qj69gHhC",
  "key6": "5Y2Efvf35DBTSG6yRxtbWH4MeCUtHugD84JtgN3aVGr6VBuh5xq5jERJczcfqJGDuq3DKmKd48dqixkD8AK1Br2X",
  "key7": "2t3n9ejmmo5qqRMS83y6Wx2rMbvstMtzRZMWiUD2rDoruaG6pEy5reubkKgG9amzqhaNUZ3ZtTcXptLCZW5YG1dn",
  "key8": "3YzudKKQH4JjY2wqUjs2q9ZCX3Nm1Lc9Pq9XS1eskdL7sE8eYDqFuwwdH2Uq1XnkuYkDMHPXzSiUCMepDPfhYtJP",
  "key9": "2ANHTiNUqaRDw2iMzH7pAqsRpij276ex95Csq8QjtXzPUx2ePCMJX5kmrGehNDv3rRTCusDWzDEBRiGtFcDjcfLQ",
  "key10": "5h8wkSKv7PqapD42HH58NdYfDkDUYqLLzMwmHwWUaX3SR4M7MZqy5efNi8aFJb1s6NVvHYTYdByG9xWaMBFSmP3a",
  "key11": "5mK71ucJXddYyv9QU9FKMNJDgp2sk2YzhubE3wXWBcWvNHRXB1eQYDpyKgb2uSUmhuV5qjiDkE1A6UVT4W7NMApu",
  "key12": "397Kx2aqo1Z99DasX3thncSPnirWRPKY9SwQ8BgdgTBzDU9JN4muiJ7vrDmt4nyX23mPjNM5P8S97AtrQR777jBo",
  "key13": "4gXLz2H3ukzEzu4nv2r9FvyX9KcJofqnUXwL8YWF5VxLL7Q2vG4psuhnHi67aZnY4vZMcH5cyUMgTtYgaj39PRcT",
  "key14": "5T5bCLhrtouUxm7pxoL8YQowwCdcKsoAYwsupAfCSRaZikspGgt4naMx13qchtvDhjciEjN54fRUYT9eZD9wEdwQ",
  "key15": "Beh7L3aJxcwPqPX19XdYW5zsGJijdjtTvKiYjTcaQrRxHmx3kmBnV5ADxYobnD4dZgjUST57D6Jk74XdjbUSwcH",
  "key16": "3YKTtpXs1bpTBGH9vwdFJiwPYdeJvPwLZFuVBY3SRSVgp2Q4Mj1ymEjKTP8jnTWX7nzdtbktZLzJvJwsdQpLJmtQ",
  "key17": "5jQoaEDyKACQSoeGKNfEE9ghbUf8DVNSNT7NNyBotP6nzbmFmn3W3zqaG29SJzC9eeZY4DoxjeKu83bLUnXX6eTo",
  "key18": "2ueQNzuRN6NjbtmJTvik2yZUMYt8cvuA4rYbeHBbLRvp7c1KfrZ3JMMXkDfrJCU8u4gP8AgRXaKdrqyuFXQNqUkQ",
  "key19": "4w8MsVjwMyHDe2WXeCn5e5KrrSuj7no8RAoqdasFGqESYqd7xUhhcChsRskpth299Z8yDizyPhjQbCHRr3q9bhUW",
  "key20": "5N41G9Cr2KZ2NwGZ56MC1LZ9qozMUbJiBm8i2guToJqETnVPwSTj914kGN8vprpb4if6wv8snXc6eXd7Wf8gevdP",
  "key21": "dcc1EzuX361Zy2qkFPsbwUFZV7XNHx6gNYarVTHJuZHQT87KZWTRS16e2QzNf5PzChTkSNWhxwhueBBURGTDXBo",
  "key22": "2m7JAZWWZas3uncNVjXP34HRXiMQ56i8SewW6kGD9bnDJS5tDm2MrpZDE2bvu6APVzgr4Ac5shMfZrRqMLMKR7wV",
  "key23": "NT645hYtHi6FGCzvyXZCmwo4k4jqPv1aKnU2BpvvD9tqTg5s5v7ELpUxjXExpGKNoBEebYJtBeHjj8ZxWVaYzbh",
  "key24": "3pt7trHae6Krn9c5b6xTvgcg1XMUx6cfzuQRY927GRrJcAgk8tP6M923WA6f3t4gqoBMeMdbsqcjz1sxiLHWPp6t",
  "key25": "zosWL5CeNJ8tNgSe7XJf8pgK5x3XnH9Rp17bH6v4L18bfm7GRdz9M6mmHYr3erm2L9MJ4zq1uWbXBxJgDxuSYRM",
  "key26": "5pLZ5UwmkAFh7p734hnmebvFF3YN5xT9kWGEe2WtVF1UfixrT3dx3CcUat4ua39g3i5QTPKr9dfi3KsSH35XQ5Aj",
  "key27": "5KeGYXfLUDsD29DZ8fXbhDoA4UvdMomkMtFf1JfYjYQeKG45yocd7Hs7HtCkkmzVe83QYjiNSXLPvMsNrFHEVRHH",
  "key28": "5BfEofJcacuoPuz7ZdMYcFPCsXSe5bFscA31RZzbqyr2aNGvs7GwZHKpjXHVapSEUZ8729Q9Cs7z1csSoFGHsvrp",
  "key29": "5A4timqA5TY1Vh3Tspnkaxeb6JRdDdvoNeGxu7wVYpgPQj7kZa6CghM6vhQG4rXxxtpccMZst1Xnya8uaTPoA59c",
  "key30": "4B22RvSaeG6oPXER3Yt6cXGtzyHP64edwB5QBwKH3UpR4oKh5MMYPSR54mubmwheQnZc7wj8anYzzEPV3K6hyb9q",
  "key31": "hrhHYaF7GsJ6HJPRwTVcU7kGYvHXiFcmP8a7oTDxvfZ18rNyMnBHmPZdsTUns7FgJ2FXLA7raE92VnvUxTDhzy9",
  "key32": "5khxP22ZmE6HNcHtb6G5eBEQ8b1Hk6mKT1yHh7TS9EhWjD569gRjweLh2y8s73ys3iuUL9FqzshzhWiHMWsM1TRX",
  "key33": "5ytTu8L9gmzEdKPxkEbh8tNgmSHsHgwKA189KxppG1r6LaNoFcAZud4afkx8t535HFvmEq1XpcUjRkTfQ8aW9wjK",
  "key34": "3nTgUTgdi8nPaZsC4xQcFtkmtbAkLoaGMmGTzHr7RLtaTDE3S4VQsp2eaFSttozK61Dgd9GibT2wrjAAds6eLHg8",
  "key35": "57ST7hguhB8vdHwjB5gZrFcJiBx7m9mkGaMkFa6rWrZuBvdpTieLX499BsHwHd6pEdMKTZibncSr9e3agpiXMdRv",
  "key36": "5gPFzAKQMdBzaKV49HRoHihh97RMgwLpLSi94iuG8SKSSMdVLKY6KJh7qpSRyvBjdwCHNDaS9tRxBVBEEkSvKzpg",
  "key37": "35zBsHcmVjRBx4ziarViKcTUhY1G2oPL77wF7uTbMECWhzrdnHFuppfvS5P2xvJjheVZ1ERSiv3eG2Pm6nNbENXD",
  "key38": "2hfWzFBgPgM7QvEVHRfptVeNkNTMQnuzWG62CeP57eUAXvrEt7T18dfvANRYiY8fAwxQ9nmx1W8pt7QkNCHEPcw9",
  "key39": "KT2xQ1heQMnUW54bKy1KCoAVhmXCsfWRMzSJXf6C9FZG4Z2RkZegQZx62SvK5cGBpDX4pzQvxykbWfzEgKh1Svz"
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
