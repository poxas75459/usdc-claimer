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
    "4sNTweZUJet9Cpz3FR4aMwpGgQhZeaNCDyWJiJrFDEWwncxr5Zb2vDa29uWgZZ7DhqxGBwTux9s253ZFTj75wyu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59gc5He7SFkDZVg4HgDp2Q4hjNJVfnGedakRo2oxKaiCHoPqU7hA7aBSPZXFabYhTcfK7EFKgkngC5Ls8fda9vqW",
  "key1": "4wZMmtsewfwjt9SgbcFuoWxC1QQX8Yfk3eAnccsT12tXSeH2spHwd27GZfqpEWPgx2Pv8iSTDg9sXApwbhjZMpFf",
  "key2": "azVBVpEjhRxm8p557v3MvvbfeWA9VSgDcnVsGx4vRKKNNiV3bduANbLhskzEYiokPExAZpvAQ3ED34s24Ad4T4S",
  "key3": "qkqsbv4RxFfLTLX6abpViZpE9nmpbkrAZTdwZtTAru5G7cjsK6YQcEeoCQSLR9QXihYkYAjDNym9x2xdG2Z16hm",
  "key4": "fP6f3VE2iV9JH32QZty7CyM2xaJvGJ9GEEcUVLRbXbR9MGbBJkRsrd6od9WMagD7sjViwCdRrjUPHzPVHD5V78w",
  "key5": "Zm43pQUKp5s6L9wr3D86LFnV7ji5UrozbBMuUEes5bdqe43PUiFXraiPF56u1FCKeRprMSSvpjvELJQ6gV2E67K",
  "key6": "2ibCqw3shSi38XSkvfTnjYETTrayzJEzbDpwxBGUADMSofSnCg1iXEcBZFD3zusEkvX5DtbNrkhcarzXb3ChpLK6",
  "key7": "3GD7TtFyeKFb8upc3RAgHbNa1EYQAGvrCi1tdntyccvW5fZyWtmk6YNcr3QNAhEiEUEEfNuXqATbqGWkzZ5bG1Vp",
  "key8": "2oCm2cMTFJ3qJdVUmDRifMDZGfXbMkzgZQUGDWkDpxrZELyCLVa2ho1suRxZhA8A8nFh7CHRzpmbUSg7qi9MmXoU",
  "key9": "Ve3Xh6WU1aCY5rWULdCnkvkeUBUFGuuMcSnagWNbmC8NA7ghyr6DS77dpRodqCd6xt6HYdQzX9rxAbPntnHGZom",
  "key10": "149qKJhJimHE5A52hq43LB8k6JaJzLVyCo8n9nrT64MFTcT9MXswDi9YNBzBZ3Stqs226HL9ska63RyazHQ3g3K",
  "key11": "1GiEPe7pqdhsMAwifbKcGxb6CkQ6KYKsWmsUVTMNPBxiHpYrBHPXk23QJmUu43TKA2SZnxrEmSBk8Edcaxhh4Ur",
  "key12": "4C5wy3sAwcSrotbpk9WJXYGfwYKfD9rxe93ckxudeGhF8SdyWy1H6uiL1mPncPNvhSRBTbUAXNXa58Z7vBVV3RB6",
  "key13": "A4e8Hw4JBT5qi2GqCi2wwFvRhSRoMxBWbQVzgNXHRtcvdvHqqjEGCb9eZWtFm2YJswuiwLL4ysbjBpWXB5QG6q8",
  "key14": "3rgweF3QCzL9XijByWQRuBc6romjrJV7orgg45JHD56E9thuSmh5U55DpvHdhcjehf8zttWZW48TWJH5aAZ2yPxe",
  "key15": "2wtPyStxVDiyU9AESgRSHUbtPXwaeGcqi3MAgj4PNfMagyYBQawDpmC3oqZ4Ftq3NKt9TXoXe19GTwG5fkJc1cvx",
  "key16": "5T7tqGkgBG6K8GEJNUi6rr1P6wE9NnwgZHvRcvL9wEPVUbPKBbLj57Ut3HvajR6tQuTJiYKvYjRTYQZKnXLmBmac",
  "key17": "sFJwpahAzuQehbqB6uSCzx1gKZtWCQxVYR9VAhSfJMiJKkFN47bfUUNaVhhcD6jx6XpSMpXriRSCE9Pq554gqU7",
  "key18": "kidKqzgGfn9xBuoYMQJXAHZkxvSSqXovks4vWSRUr1Ed83xJgLpwF9g882ZKeDxPMAnTMtqCEbUyrM31ZPbBBAE",
  "key19": "hZEbrnMhwkK28qrBwN3FwnnKSPhYRHMwMT3GydGhR4FiUMusNBdvPQT8KAkSPEm88HhndzeNrFspxWvRPRb1yxB",
  "key20": "3oSAySsmF1kCWWgE37ib4Cg2v5pDC9DMhCNg4Bx6qYofnqXfmZ1VT5KubPmqKJoTEvonHf3HEfPe9WvKrwhLCNAw",
  "key21": "5Mm8JiywDz3qGvtg8JPBVU78kymaS1uWx6DF5rtPvd2nth9hnxqvRPSFvARcZ461UDvFZNaHciaJSMmzDjA5hZo4",
  "key22": "52nQ7EL4smBooqGA25gChRKNgrnZQQzEaT4f5ykNk9XTYVdNPyvZBuaASmZ6vMu2cvjVRpHxEydUnD3drPEJa9WH",
  "key23": "23fqUNeNfbTZDWYnTW9NMkJ54yjkxPBbiG7D6SknQrEANJXjHvxPuSDjyXGXSFiFzwRr6iSkCA4fqhV394LmxL47",
  "key24": "4VjJt77yEmuZw7gJn4Gh5AHEpUxQoF8XtxhLmPW9ix43KqmW8TskNLgsEgFqgB6icYHb5BcehKxNtWBsuj9HZvJm",
  "key25": "5vopCxXrCBc1c4jFBmHueEHyCJCm1Pz593h7Pfa9pz7X2ioqTKqX1A67sY6e1FxEA5vn25pXFENwAQsUKYAX5XcR",
  "key26": "59wzdNpkgamWAzpoA5LiQdyoxCJtHzLJkcKLdJdJoEqy5oDcuS1g1XoqjQZjyGC17cV4HFGoA4z1d8BRCz8jHRmJ"
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
