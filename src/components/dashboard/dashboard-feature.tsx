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
    "2Yp7wngbi71Ny2ym9Pj97HEgRhqX6QZTTPXHQ7K8v2193wz8fcWwHqd59JP1hx5g2x2pgDedtkJkFdK8cNq8tioj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ME4QcjRaZPHzZUYPSUjqsAq9rKm1xaZDyWPSVsjS87C38WHtVtY8kFZ4whXgNZQ1GbpuzNG61yN35eQMS83nUr4",
  "key1": "3LwPHTQGFh527V1gHunsx8X57PJrRTzyRAcBBuAgf6tC6H2iPxM5cmxj7d75nRr1kjyNGPzPUX2yazFyBg6KyTt5",
  "key2": "5GMmBjoFpyKZghUipKkTq3EoQ9YdTxhwac18WR28TRa16roxZwUR1h9LBfMhSBe5nUKHJrTCYbZg2sXLy2Amr7rP",
  "key3": "3KeZcQt8mdoUcVUVgdjDjN5Vayc4dpEgcH5VgVeV9RnQvS6oS5z5WLWnNmwD2H5W9FNzbGcXzTw9m8CyPfEHxUK2",
  "key4": "hdx6MNVSsF36nf63sz8fJdhfn66ssk58QE6ibW61DST7mw6eos6oh3NETuXDegegJzBHjvMGfiRupJfbgvPCwzr",
  "key5": "4X3MaGZWuPntLM6sQCsvogYnzA2iz743B7GVMYG5C2p2rr5sy7uM4mZ7yWqttJSPBcRJezrMjKXKqXJRCD4SLbWZ",
  "key6": "3CZ4xQGrGAJBKZfuVrumLgsK4r7VtouFWFpWfNMGxka1wKnLmUJodKPgQiNNdW8uKurdX8pdnFRLacK7ixjE7fK5",
  "key7": "4CqWUkAQBYGVCKwZT2EYiaK7s6UMf9okey8cYMiisY3VfxbRac6mqvXXo68fMrVGNYgTZ1CtkBenJ1mTbtyafv7X",
  "key8": "5pDu8p29tTwCZBwMVZoviCKcPgug3hctkmKQeKouikqFdXVhADEopixXyBtzDigmAnutFRrSsbffF77G6L5cuffc",
  "key9": "4t5HQRRNiP8fWBbX8cx2X9P5uxSYQsaagSLGa7gwYKhP6yidEEYbUm5JVNcaYxzGsP72XrAzz2UEmncm5VCujVbV",
  "key10": "5XCSCpWtX6H9Fe8xPcnYC7kmWmn4VdiHqjAVjkEx2QvMXRRCBt1idJqjr24JM93YvZbUkKAoWg3ayMkWCyLx3uiW",
  "key11": "4EEGkN7jphcnhZFoqtCCFnbuMwy2ZhaAuBQ5SC48HLSjUVLFnukcy8UjRJruViqBSev52UKd76J5FqNKNUMJWACW",
  "key12": "5i9RNyetJvE4Li7vLFcF883GesyPzdXs4W4N4pyyQuNyKPV9jAyxRYnhG3y1RtUoDqo1BZ6tCVoXzHtWLFGXB41a",
  "key13": "NrbFbybDPNfwTQp41CGziXgssNdf2h5KWQgL1UoZfpuQZQjByViB1tDK1cFWA3mFVRfEd7V9n38d6su6RvJsawb",
  "key14": "u5Jiw2ZR8ErPEjUFNm9VDMKGEwwNsxQJBkVRx6DpHv5nHiqrMmKKAoQhW2gn9ZUFu3qj1C4ewc3ZqQnozoFf6jA",
  "key15": "2zThjk6mQVxRGX51Y3QurPv1xmN9tNCJBg6geSDrFaCRahGhmwYRJKWdxXHz5ZqfgbP6pjLEi7FwrF2EHLXFGAPz",
  "key16": "4WyqVrPCc4GZPkKdJUzAtmwH4gVDdrRWRJzZqWPed6bTCqCMhe2nh9rbknJ4zDXbQnEqZsZidYewNDVTz8Mtgh7q",
  "key17": "2Gi6Eccj6oQPeHGsZnZ9Rr88dsD64RdwYojGQvJcAo6B34isBJdmsWTerMt2oevRxN4Hyc6gAtJJzTUvKrej3VpZ",
  "key18": "47xW5RMF6edXF1arqtzqwDLaCnmmecb9uXEfBwrV4edQMHgyoCtRTios1fuzupR8SsvUzEcwiNT1vSEhoq9qUAqE",
  "key19": "53JH6WAnWhRrSaqUFx8mT4JWo99ivjeo3p1Ch4VR9ieGEvrdD1Xy7xERdbL2a72Hjhxe9g76eQoyrJWn9UHSDgm4",
  "key20": "36GSsVN4BL4RYfGYaPHUSaqYRKpucSu3pjDFH3WVccS9QgXUGLYxStoBv24hyEfnEtnbEr2XTsz6qP3ZEkx81frc",
  "key21": "3QLnpXBZ4zdXNf4E5amuG4tbRcJF2gJKrDYnTFAokoDfh4MvDLcmTFdgnYYzAiX4Hgq4PH2BFPGPLiM21GiMKmr",
  "key22": "3nVdR95nBiqSAu6D3GjybqBYh1w8biN8BqdoEDztvA7Eni1xiLCDogEydjaPDqu9QgotfDTjr39XcQX78CMuXs5p",
  "key23": "3gFCRJaaEKXAQWJUhNHvB91yiJPtaJJJSvqiQkpNjKQXBhA1dZSSaPrvL5Nx8CNb6Na7NfpoiyZi6oY5AJK2kG9d",
  "key24": "GMYxTg14HAeawLe57iqHLej1tTA9LGJK6E59Hwk6URYm7excJ56ez2VZP5zDn1Cu1uBYLjNvmJfpponfkSjF6dR",
  "key25": "5vw3WKYFvp1bxGjZY9zn2V3951JNGE9kkcEXe72hxHJiAMEWKXbSxXEoAcLpaVqztVyUcJ75aVPtXWpJkC5wehGY",
  "key26": "5rY8QBzy3UFN4zrHyn1oyQ5hHewe21DkqZ27ebqRdbf7nRbqUwBkf7K2JqVxgkNQbNeZE12Y4awmytcyXjEZGq9m"
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
