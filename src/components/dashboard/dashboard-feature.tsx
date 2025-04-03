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
    "4ycuTPNuP6HR9y9AdP2V8ikNZq1Y8rojwxFqYFzQxcWbjibnGJXiL6iApDWRpZXVchuNjW8WFiuV3Mn5sChwSsi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GUHT9yf9oC9JwU7fxtk49GJJoF83FD78wdgQWSFc2ymQFEjLLeRFhoBMSvxMRhsENbqjMetkn43bLScvapNVEQx",
  "key1": "55FbDPRzNjPSuQ5WkcTAiA97DBN4CcfHhzCkLmd2rris38Z9uTJw7MKcFcsCGXXwVkZQze3gpN7e2ZkEuTGLQm4m",
  "key2": "4uMo5BtAhbpKwpn7GuPHXKoWbtVxrrMTfj99q1ijbmV83ShPxT9hV3AU24XGc6wZmJdwZPJbXikYT6Cpqq7XUQay",
  "key3": "4fLNsvGqHUUTAZuXBuAp9E2iWCP8MSiJ7rR6Qjf59R2yRniLY7tJ3ruQXW9y7ojcCJWnBRGFbVvQjKrbPWnQDFKf",
  "key4": "2L1C54htY3QqyDK229UpqWcu1632DhsR3kBA45wAqf7zw93w3wNpQ4h2d4x81szoffNW82z8vQcJ9KZMqDYSATeT",
  "key5": "2bpNeF7kx23rz6vxZmstxHJZTahVheastv1BGjok4FTDVoXqZsbctMhvHNVdVzcSh7zK94mEjsDimA1bA8WP9yH7",
  "key6": "5onYUZTzvvXDbMUmejWmV7woZz88SZeJ3kuJ4msBi7zUFq6Te262vscwzcC9uKHgqJiDSNwpWMqMucyAJKjhvv7Q",
  "key7": "3cEfgrvFEi9KP2Kof9FGL3N7zo5sUMfXwqBbHU1r9KPVfVUuZutEg6RVF67sdfsyCWiuYDNjt8NPaA9WnAm7h6PM",
  "key8": "2LqgY5uVnF1wWojiKRGSXwJkt3i6T6XYQ8RpfX3cG3AitNd1NR3wvvmdPXqusE2nvXc3Bsf9Z5Bi8cUByTnVVmq5",
  "key9": "3yUwQ5mJpdpJCqn88ALmnFUxYWLWuYoitTvDza5tv5hvSEzwFs17MRArz1Btxmu4AEgUZUAQiBb8jdpKXW5jWxTQ",
  "key10": "2P3JVKEh2mtjJxuNfeAfswk8JjWKi7Rj5zokGSdd2PxpRrmDs26M4U447VF9MP84XQg1aJEK1Nc8NmiaDvdjMEgj",
  "key11": "5a9BQrUUX5MkQZUzQkF7z2uFZGeTbcZPpwmXbnLWHCdagnFAgXv9j13ZyEECm1Fb9oo7Vriqd8HYVupMcDTauRfo",
  "key12": "r1EGgKXT6FG4oadfjJDCGDDTk67GATuk3f8orFn4Xa32SbePbHBs6kPMzaS1QwHX8bKvkHDLVK9ps6Trcb9AkzY",
  "key13": "5pfAcmZnA5jShDzzL4dEzfwQXQFT73Q9D8MLbkhtGy9hZwX6o4RbTidNy9r66oVLtkSVzXhpGZmHPVmxmUAuF3Cm",
  "key14": "4BLzwWUeG9zFEKvgwWmmcXgZx19Zfb2cYhKjPCeMBpouqq9LN5CnBbaeJjn2AWDYTB2UgAETicXFvDwNFypsoBEu",
  "key15": "2awepfK5YUu7LVzjYjLzwTRPyu7FSkcK76t8EGbTvPfh97BYf6zZq4ZE8GLYEazMN3k3zA3STbNgepNq2M1Gfsou",
  "key16": "2pcmmBQQbMdZaMwNkbjaRZeTtjwNipx3gmNveRbdq61cBfjs9MH7eoLTLTXYTf1X7d7ydonMXnuNEJ23kAFF6RrW",
  "key17": "2VGzV7Epr5WrgMrhaAfnGkTHAAp5k2X84gfrj2LV1LZ1hU8UVBPvFDej3yHfKtrBkmWJbbJRXSzXPAUUJG8gCUrt",
  "key18": "5SC9ErY9LwHa4kW8yeZPoWvMWMthhs7FHgV68EUggDEaFcaxeAwuBvZK3eJHwUoQa8bg8hHCXmVseh7QB3bpDmXF",
  "key19": "4VpeDbwbkouFTc846YQ9HXYhiAZ2fLtX2vNFwsrv8TGQJZGc3XhikNP3fDTYDdPzfWbnHZh6f4Aw299AvRaUYZ99",
  "key20": "3acJHznirNjRAwK6eDwPbLjPpGemsXrryv6GMN2jvrdTNzKBZTsvgGDoYM4jw7j4NjvjHjUP718qTaS4BoaWD7LG",
  "key21": "2EX25WLzTrpVVFwS4fhC2jckuTgeW6pjpHSj8rMp6mLyQ8nXsawRFS7gFryvo8JMPn5TzSmFxVAjFtdxrm5R6eVw",
  "key22": "2xG9EutzZoY9gadAjfbPfrC7iUvX1jRCLNvgKvTjGud3cupuvKsMK7FcsAQ1JUHmBKNtmLtFYE93UyubGuoJJeah",
  "key23": "5UG5qNiegKyc7CP47VSF8tej3xeVq9x4VuXyjmLQ9HvrxngRFda26dBSDR2hBqkmpffxWmsttrqj84SCp3v1ysY2",
  "key24": "4Y8Teo8iComUH8o3cKay8wb9Vh9rPA8ijMGN813S9koRBVY4hpgecZ5rMp83HEK9MHADcPXUBqFtj7o9FhCDgrtv",
  "key25": "3CBZEyAZYABa6TyGXK4ux1DLd2aUcKSikD8ZoLn6q7nwChGA3SnaeJqs3jEvNYd7PwQoaPHuSKE4ayV8LLeP9Fj6",
  "key26": "UZ79VW7uBY1vr1xY3KjzLMhxvfxP8MRN5QaQ12D7eQC4L8C4s7pPLmZwU5nc9AmaEPqdfBwzT9hfhW9i43DSzch",
  "key27": "393HrDCpMf763SkofG3Lhqabm5ESUA9xNZNcBM5noa6eHCsWMRMRztRu4hYrQQXy2PKZpJzCbrqfiAywTjkdvsXz",
  "key28": "2KFCWFCecCv6ChyymPWtXP9NHozowt9fKygrfC7teGkWRqrao47hDX5hHVEXNuUxctqD32PKCucacp98DkgDfZTD"
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
