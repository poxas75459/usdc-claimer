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
    "5aSuhomwUVxYqkZGJ9Bs6f7TvrXywpEV1x1is43xEp6mtWhqg5raovKTNpLtted35MmSJhtaF3k9jpiE9QKp6xad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ovTvzH5McooQQyzCaHTZmcFGp4t3HG2aL6DkV9iqMMLTYajtY8P7kXp7ukXuS67XpqmaJSU4P4MareDzuS4SgJa",
  "key1": "3AQZeTFfTU1p94En7WqVWF2vEmtK8ofRnt9gaXiVGopw6fhQvEkdyAVct72VYw5XWMVA2QSux7UiK4eSn2WvAA6d",
  "key2": "2ZdKQeUj4rLTdmZYsgc2tD47ViHfDj7ge1zByCXLEvN8gdGaVzUcFQhGW6rymbKzJ9PpLSAqcanybghfxnLn72wH",
  "key3": "Lr2pF4PRYR8Lham7QsCdYHaMKDB22Ny9LMciF8E2zRDoJSTrwbDcydGY9wjaVLwoXB5NoKfFM1jbBST8JdwPxuV",
  "key4": "4MsXLT1vgFx2MMC3hN5egn7LXpqZCg6m1QusAGNKcmNUy2LeaLso8iLJinvpHx4ZvyFq1txa4QUxZE1gX8ME58PQ",
  "key5": "x8QuFzDwXwcBz61VcT5XMwmRfxiHpE2CQfYPcjY5ifEYa6EKVjBqHEpK3f4DnqZkpJMTXRkLRwbVmTBMeC1TQwK",
  "key6": "56EaK2icS1daC4BSbiMXbGjy37WFvpDTZ4bSNs6Qxtqb6o5qsc9ptxvEa9hb5weGVVaCDk1rHxGr6yFaEZLvVzRG",
  "key7": "5gzdLvwgo5TrvQWmBGhT49YXJNj6aj14FVwJ1bmX86rKkmPRcyVjkwHi4fqQA6eHcUqxPdxA8pDFMJ1BrveLqPNo",
  "key8": "YwP9DHpDkx3mF3xM4sVsP4wK5L4yA8FrxT7rr7yppH7VWb371UfvkP6oFbaCfEPZn7ybUzEoYrSA6iQGwgRGxCy",
  "key9": "3Fivy6843k3rWaMScnYCzzrRAKQ1TQPuvdCZmSeuyfyDb6yPe4ogE82mwdVTdsuUyaKDwHcwH8uZjmHqebRw9MzK",
  "key10": "5xCmT8FYmsWQAoXoyeo4hZxPjHMcDaNtiXbpAzfNeFhh1dCW97Aihskga7aS2SUNhiLuwS7pNwCgBtwHVBMAB4gt",
  "key11": "4FmSyTKMb4mrxHqCTx2iQbLq1Ty7pxjgLC5YqG6VqwTFrbeXbFGMKseJsXikigUgHryFbuQiRRRymT95qEguTiHz",
  "key12": "2rh9EFJUrTuN5fJedv8RhnCGkwkeaaS42ymoyyKs9A9FgNNVXYcJoZ1nLU7QJ64uCC5B3Rvq5vYwGxV62wBhSK8x",
  "key13": "3CdivJtoGjQtsWnmhJMw3e1TB9b9DePB1xYBkETAk6gkah5VUBHk7G6EeYAihhT1EJ7LbEVNk3DKsv49KoyXpEYg",
  "key14": "41o2yAX8sZAL7aVqPDF45qGcLmGQzjP6GtMeYfCKraTVqt3ofXRbMQkePzvhRh7G95bFytwJ3FBSroRNY87MrU1V",
  "key15": "5mr8FK9VYcFmt3ASsSPumwhUZn3MyamqrZsu5tZHZBiksoj5JV3kNVEWCXd8VRUG7kDXq2EjYWE5aWWj9qTuW6eP",
  "key16": "Vm86P4E6vj46kodvgtT1DRcLzuQnNqQwrXwnnn5fsPu3BJhFEUYLGLGkkh9Qm2vHbYCKUY1iYwH6voccxKrRgBo",
  "key17": "51CLMfJq1XnHe6KdDHbXqK8LWfqEwHS2sxcAx4WdDqqvfUneicsm7PbAd3fWwqAYKbTXucDQRti2C19z3hja4SgW",
  "key18": "3x2U59uoWHnKQqHWDFQPYZuXhW6Q99HAWVzmji6jMTi6eTV9K9ZCn8J4ipCMk59DzJ8LzquFqnLt8d9qRxJeNzug",
  "key19": "3gxZhe2LDDfDhfH5qVrEYQSGBNvTknEB4BWH8pi7tmRiD7pJ2daxLkfHpsTfUcPEGoY6EnCZx3Yw9no8Uo8k4CfJ",
  "key20": "2kJQ7s3e83P6Fb4HS6iPpQU2FdqfzG2gHgfQrt9SyGFeZknEtCydqUUcfPWZ5FyWKfb2GbTGzPt1nmppXk6XmoY4",
  "key21": "4QS746W4AiRg9akBRUhuWLXRTG7wkMUrCyF1skzFyJXFNhMoCcprsPJikNdY8o3nkdt6qit1zTAstEr7QcFymigt",
  "key22": "TQqAMRADHbD6K7V7BwgKrPbDY4taKjeBoT2tDC8DvZQupTC5mtghFFCT9HtbknAtHwVZExmQMRY2i3gNu4qswPY",
  "key23": "3rQTGKJFDsfUwGBDspswspMNXj2Qj8Q9f2SSJaKz7a6HhMMCU3QQQUZ1xoi2F6fyVem7uyJHSPNxbJuyrxcNaBBN",
  "key24": "4egn1oCRyqUyCADuiTibWMzwifVAjCt2VTswZeXvWvmoxPrtfYSVuY9VmARHYVhPttTo8zNpvUqF9W1HAvXUEWjG",
  "key25": "5EnU84ECnNda9dcKyaahBF5UqjLrUo4BJEtMFWPscHqWsNesEehcTEUkoy9QKHaiTCGSa8Bq3A2n6Ut96Rr1F8Bw"
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
