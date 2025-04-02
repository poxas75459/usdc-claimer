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
    "3ics7pvAQLA4qGUYScGsHGUmEjZ2WsKsS1Hjbg6qg2fuRjRY7hKKmpP1zCCp32bBKwgcVHZUCsLNaG55n44hkgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YMnyt5MWoizZK5xSwhBrX5uirdRSWjtK3zG4bXENrq8gaxJgeHoHsiJJ5bGzMzKaSAAeXcNqojXsseRENfD3v3q",
  "key1": "3tudw6Z1mKeS3opALb8RLGs3XHYSfr62hubbdi7Nw22nXyZj433Bwwy3VNtgjg18h7e1bTm4GnZiVqG6FExWaZdZ",
  "key2": "TZUmYvuAcNTKzaZjRwRYb9u85AB46PrPDYZgYYTw4iXSbWSTDFg1xSarhdBkzwSVTWhmTxfRAdYUTffuHxagnWi",
  "key3": "gSHs3E9VfNtRaVzUVL7p1ovQxSgFasmRMrnGSooGBSkqydfo7M1bQrMzSJzWuSS1sYhTQczkQDjKsz67rUwLg6J",
  "key4": "3XQtcvJPd1bNEB2SbjoHeeJivz8NE1PJcvLHCFdGi1FjLfszTAy3xWp1V9mCu5cCN22SmrHjsTryiR9JkpdCTnbW",
  "key5": "4aikMDJKm4isW3PLJNWjhudv4PBos2oVZsMCzbkN5DLRVak5jCHVbvRo74nn2XXvbwLiG5viFocrw6c48ysTS5Ki",
  "key6": "54JgucGJbvkVV471xDjQoLBns15fGVjeAMUaNi7G2nD7mciS9rnCsCWy8jTXxVbXPXYSwKDwCRXGx59txanoKPb5",
  "key7": "FxkHVzoygV4c9EAo9jaXC3vVsWy9XPTwBwhQSHJ61woEkvz825rrLz2itCgDQFm5fFcLHNAEhrpCKYYhVp4RHem",
  "key8": "5p3hyVunwxiY3wY6JoQ8tDtvQBiK6hV71g24GRoVUF31EsxfBSkdDoqHsnJKcnMn9WY5b9JpfpMq55NAGnfCJQP",
  "key9": "4DEZPxbFguhV5ue1Mpc94KQGQVQis2iJmi6xbiBstcT7uSK734QqSDEXcsHFPjfER9fDSXyA43Aaj3sPzaZbMex9",
  "key10": "3WShvmFmXsZaMDGeKJ4USwCVqoyS6ge8yqTGv7mRwLgnNfNYkTK7K86Vg4JB7RmRfSAQNTA7ueKRNKZtjtoPeiuG",
  "key11": "3bVFtSkhwH1sJhK7jFnRrJsf6ueyD53UMRerne98nv9CzvW1m9huGkv881S1ZnBgfvqkrXTFUxvxyKfK7DBnf978",
  "key12": "5SeVmmP3mGPX4nCt2yDidSi3SEqov9kdzLRSVnrnKU5bTS7rueMzhVL1HkzmvvJczraSSS7auRGV6TmsL9fum7sJ",
  "key13": "5Bn2z7fhLhRxWGBowVLrFDGwe9dmbMGxa4hjafdqjZS5GL7AH8QrLK2d8q974TyKaURgLC8vJYCCe6EgyCqrEioX",
  "key14": "LLnjMidah3RtjvRfmz6TsJZEJYxt8N73Lzqn9MD8CmUt6pBR7f26ZrspWrPZ4sLPnm7YCSvGzdkGCEJDJypqcRF",
  "key15": "5YLDvXnZNHfkBrbGb91ga4B6AanUdx81VSEyn2YZShtPMZio2DjxDJyMfjCnAQWCsTTs262mjCGSE3Y2B4vaSQsr",
  "key16": "4qp2zJYLpmH1BDZKseMTfq23rNx2NYW7QFuyqC6m8G56YPRfFaXJiGkHE7JvUJxcCsHJ2A5vQqJ5GbP4jtgXtocC",
  "key17": "5ELWLKxDyMWz4qBGkK5mkYnxcmNVJmC59hN4RYHbmmQMST7Sta7yDJMGyJRHc68XDJK5pTWarbFRTYmy1owY6iDM",
  "key18": "4VL1j6QshkomvvEhyFC4qXXkZmqJ7nchEawpyscm1WA4yNfVoG2cV6SZcSLBPCrYGMKFfcMuPTa3P4Jrjutjx8gw",
  "key19": "5cidVNS7T7WAR99jqxGAFAYTdbmPkXY6gCpk6poZNVFGPCBRbLizs9uHxmLKM44RecedmcAufj5tdLJSDmHBi1yG",
  "key20": "5oGLDduJepsNbyowWsmXRkZKBE6pTnpmoVt2AJFCmbwj5KNJMrb8cmnJtLmnB465MVGgsmC6juaabEKBbCVyRWxp",
  "key21": "4BEHwB6gckPCH1aysWBNYV7LgGYSdbHiXYMSrCWeremcJDeJs4DexU2omgrSuqrHE6xHWihhuwMN5sRFf8mgAMRw",
  "key22": "5ckpHuMUcW1LyUzjAN1mE6Fz1WzttarknAFxMpvPEGbCcagW9LJSRidgVLTfPjjkhU1Ke7zYFRK5Gz4Ph1rrbRKb",
  "key23": "5tGdTsST5r5MWT8vv7vsL1zieLk1sjU65rqKz2Lk5b2ajEvYxHgr322jvL3Erdm6wGj4V26L8EZiBSmhLQ4NNhbF",
  "key24": "61KGSKmZz6zExQXyicJULUSiC85M289iwWhudW83bYp3siUcxW57EZv4uKiK3gvKcfQDkzKQUcmDCMiNkoTuMLfE",
  "key25": "2qGeq79Nn7Pn3GpedrYk5Ti18z94zees6VaFtgjwVVKchUb4YugstfEsWNaM62iVVGRynXStfrRTs2h2XhdSCUnD",
  "key26": "aZ1cU7HdioH8kbbNVPPVJGStP74rVNs5uq7Jhg6EoC15Sza2s1Hg5cXPxoYTrZGFu8BHpU4f6tnLHMvZMg99k5s",
  "key27": "2tXqRrvLe3nYXHUvKKkSoTq1ZyM7gnsRqv4aFhztyTx4wBoHAqENEDCmyfEaxpM5Wf4A7kcitXns42uzA9QzuB58",
  "key28": "rsBKbAgbDnpF9ZymzX9p5jCpTFJMH9t3iQdpSuDUABJVFhUTVW7ZRbBCQNMerhv71HNPJm5LWTonmTsmBjJbEWo",
  "key29": "36Fvs3PV5VbRx6XCogyVF9n3yQp75sBK5gEAuH1tejHGjCNvow5nKMF8MSV8pFY78YwvoAvjCFc7rqhwEtHAuMyx",
  "key30": "3iogxuWgA4GqhcA9Q1uZP514GExQA28ahjhRYHrF9kn61cBMHG3jEPgsiCsBdt4t7fdwamFWWdku8BZkfJbL36ZU"
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
