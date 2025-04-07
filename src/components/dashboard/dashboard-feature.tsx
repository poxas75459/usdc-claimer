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
    "63UMBjDubXJ9w1aszCPXYhttQnHypECiMe6u3K7KtazRgXkhiFA9HezkZMiWbEyH5ixUZPLGb6XHFiPDPybRqciM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47XaQ9QiyPzBukn9ZZ5WCzn5niCbG3mxvFZgo5DoFY8RBdqJc6EYboZ5YomM4HAkyw6sibSV77KeAmWpyFKGmRtu",
  "key1": "2VC9syhrr2w9wzi7VUfLk2rexk8WWD9zRiQHwfETsKj8KU7QVHeQWsMu4WBFywnr9KA4shGuWGFokuHhfRCyjNGW",
  "key2": "4umZGW5s66xkVN5dR9NG5e7EWGHkibtgL4TVC5HtVTzCPaUqqDCUskdcZiHZRTEACyNR7BYxbquGC9jWcTTWnxad",
  "key3": "52EUerXUoTG6W8Td7wVSixAccUqKu7bLer18xLX9LSCWX7tB5m1EsuMXUp2e36szphuDFmjv86LefxmqftdnW2NQ",
  "key4": "55CWCURdsh46ij3ngy1wj57sT19pinQfLGNeLRKszezpoocDN9No6tedYehVUGYoG6ndn78dxssNgnXfof5aBani",
  "key5": "5oFaJwMW86FkLL44qvRjS28Pwwj3Rd6gZmGqE4BNr5hRcGUHXXYcjP4XZ9b7eq1gHx6pwaqMewm1o6ATSP1rHBMC",
  "key6": "4QHzL65yMDgTxWataXVLQ2EKkPREkPmGrNVhNFpGALFAXuyJ4Sn6jeKikhmUWiD4PJ5EdBmeuB5KXRLT8YDjzVzp",
  "key7": "63W6FWFe2fmzEVr2oKgCuA1j3oHcj5dd8YZmv4EY6kywkMZxbwTtRLHXAU2qGi6kCS11DSgrT7FFWbnAgEf1eViM",
  "key8": "3AS3cRQn4rrRVqpf3TnveCkTKRhy2dC6e3Z4PV9989NXgLc23XzxT7reta7TYjDsubmsbsMSkkwdzFgLr3f1TJDp",
  "key9": "3mtes3NffTcydU6nYi5Pk6h4y3nij5WHd1SoJPw5CqPZNyQJ8hCc9TSv1JTEfCpYrQMijFdaGfQ83izN3dvmKu61",
  "key10": "5EYzjAZgVSthBasT82VT2S3BywUTJP3a3jXpfNEJZTjiRGPj8RTgVfbjZ2fxhoFttB14wEjR2U7h6WuhrjM7rexz",
  "key11": "4HxN4QhFmaU8tTfc6uqAMygVskDH96vpcUdE3CY3NHz1GqxMPidmdDj4dkQetUp9zvL9ev5HEWvmbsd79NBccB1m",
  "key12": "4xarLt5zNFsBqkP6t9W8VNpPooYEDbm6XuwJ3XBjdXc21XKiyfA21ZPy2tE2ec9PgbvhYfdHWNiPtkZhentG1vit",
  "key13": "4QE48WbhJFE5bztUS8peuXpyq8eRxa98Cz9EBfw3YvPbhVHVgxAFMm5TBwEmsbyD2gCcZm7AR5xM4D7spPoepHex",
  "key14": "jXr5VAj8EEeVHZspZF7M7Bb3k5qeGPxTkeDF4UL8kip7FAKJxy2MSicDmKQUVY2GeLXRGNYdjSg9yvxgcShrXjc",
  "key15": "2zd8SDNCwfSbb5jkSKjQVXDSkAu9LT6EVuLLjhvcDsCBG99amkJdvPoJQNnqxT85PtDuS1CeSSR12uxqUiWLcHKu",
  "key16": "R4ESUHuRiHQ7y3C3GraeMJXEzPV6GfCHzurCRbx1iL13bYjmsp3c7CoAtTsa5xkX4wcZ6K5fSTgSe2dBX6BVZz9",
  "key17": "4btqUuGx9DgMQLYchiFh7686NEhXFGmeEZpaWCniqrAx7S3dax7Ed9RNihbG6QGECVYUhVhT1xeZtSzp5Nkjtv56",
  "key18": "38uWbLfLtnvBfXY5zE1EtLquZRnT2VaqNDRg7Ezm4KJPBFzeWruDhBWUDy9S7fkmmecJHGNNM6aUpvvgk47G621b",
  "key19": "3DnGcTrTf3jvNf2FzWp7X7YrfBuGxgcYp9kMb9Gv3V15Xg9tfKacrBWgwnrkUAGoP8bDSxxWUuTEFTRKGR1UKHrr",
  "key20": "4y1b12az8HTS9wzaiYBapsGoei5USzFJZGfckiKJ48sGgGk8cDhadF7izzqzTQXb2DP8rNzzBteJ8gMwVRz5Ru5q",
  "key21": "3rTpyxyYNUbcELpJKpaSuR99UyBMFmwHdcF9KZaYefGD7gFG2H9KJopy5bmicxmMGvbvkUKSy662AuRzXGbwGSGi",
  "key22": "5JF9m6Fy1vvxGiet3JKjhZZPheUQJbcMkrXv5S4WDknf4dZP2R5ratmXW2VjNvD3CSAW7xRPH7rLRBj2z9HJZeZd",
  "key23": "2iqs2x2W9Vd8EZnyeoxaZxJKanqpxMDX66HJ6B4RVk8sBzZBEtUgTksXQr6h9AwiQ3F6ZLEhtvqvYRZnofUGUgad",
  "key24": "4E4QuA6eQemezqhrCXcK1VUt6J3ZMrPdVSvoqseKbERTz9yTqtNH7Rw5cyp196YJhHFBJX7Ugzbs34mTHUVMo1gX"
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
