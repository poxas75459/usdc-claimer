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
    "362NKLdwsRs5dpQU4umPK24UDAPehQypoNYCKDoHWP3bzRMcsma4Y7dsGCFyKfgDYLxcq812v9J6PVH29DMNwc15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MC4zW6JCvZcczf8Fm3FijTKctwWB59yythscdogbzZ9SZKACoHno4paHSvWEyEYrXcpbi9rswZAMJd8iGjNAXzN",
  "key1": "2WeLZJ3u2HsrujqbCDkb3UgSURNCDdKtHHZeHccqMwVC2tRXahgeX4NtcCSihEa7WvCCrPM1F7dX6A6HYKMejs5U",
  "key2": "Xed7BrKUZ34twq21gCgzYiT2ktKFe8tvESTaQoErShUKSnowfBK7EXm5i3atBR3jdYt7yX8AWYySPYZR81E8Cg5",
  "key3": "5JZwSzawHcbqETFQnjKaRY8FwR6EotSLbXNUCjoy2cYKX4GzjDhnJ1GVPvgZMSo616wZRPHdhmYCJfeRkcoWfwcS",
  "key4": "3JF9F3LCBNsAEGS1raErphMi3XVH5D3JwLuXSbWoCBz2s4WrTdtGkmqwTBCnTVgzqrDX5q6PpVF4zXsvQ6Z5B44h",
  "key5": "56EK9m7AcCTuJ3m1hY4Y35eJke31ntWwsRmd4QeLdtpfAH2iEVCA6muqAG4VV5ADZoqdByS3jvc68GuGjBwoNBmT",
  "key6": "3yKnnrS2qzpBRHZe69vuGRF78dvje6nokVWNzH1r9HBgXRxBrpp6jEuzDb9BJCEdzpRABxq31no5bvKQmvQm8Pfy",
  "key7": "39cfrvKqWnFZgvpPw8kMxspaVbLnpNtHcZbiKb6daJSg564ujmLGVJ9YunCgvazRauM4PE1uWopi3hiyhBd2chyd",
  "key8": "46ZwY65XvUQtrFmku9TxM5ckF4JUok71qm7bopnBmH5mkd8RebK1KGpU7syyVdSjWvdJuDFjwxKjki3axxb7SK4T",
  "key9": "4w7QxUj6Yax2SFAab44ESVRh17XWNsBwu3ZNkh5MjB3A197HRHZEpBWdaC1J4bnKhDePVDyFwKrYH2KJBtfCXSRw",
  "key10": "4oLdKKHhrwqVQUYU6c2E4YrXb8iuEQRnchmSfpXzMznywuSgozHvU3NmDjsyR9wfgvUdbahznTLgwbjRxbvwdvJA",
  "key11": "3wNHnTmHDd5CMRnTrVQdLs69UEHi3GHnjqWrBnLdSGgRZjM7xxJoaSmtAX6qrcPA2MuX8ApUh8pqWeVNt58cCrZE",
  "key12": "2xuAzE5PZy9yy4j8TpeBhV5G1E4xLLDBZbvpmV3PTiDjhRh5krYGboJ3b1JQs3BeFojuihmAzXH3u3SwkfiUvmr4",
  "key13": "3arwCU22RYYuUVkYJYfHNereaGPDU8D5uFbf4GHWkc8JUQzWVsy5XRVruyNHXVeUNNxi9B4afwW4VuM2QBWksZFx",
  "key14": "3fGBXTx1LERRp3wZkHEYdf5Pf62KKMpYNDRQYXgNfYfaS7Jwyq8KbTrpkV5mYxNZRWWrdTs1twcqEkCTmAZFR2aK",
  "key15": "3WogZBo8JQcAz4dd288DiCTNmSGwHcN7Yhonz7TeTtwChQJSQHyKkvSRe39yfB6spTtsUy5edQrAhmM6UukqFpWg",
  "key16": "2ozhRzjdc7WPrLpxQeAo63bkVwG6gF2erKCLtqXNKjDQ4pqrn1XYKXhNYQTBqThWjo5qasFS7fV4y7S1fC93v8Js",
  "key17": "5kEYwkbLHzncEnaMcUztJyoJ8N57zUckSAofbaNwurC5wtFGa6LMYzQd9rBjVeVi9V6FoPrHTPpCYNEs8E1Rd98Z",
  "key18": "52kbrcUssHtT8BEkASsmYrrP8RGkK9osLMZKFGzyXgCkgRpDrcjn45AKB3JwaUZBwp6EkEktingNF9Y6TChSHYP2",
  "key19": "63K89STcjRMJjy4qTDF3q4pbdp61Fx8b7u1REAa5Vk7x5P55aLUo96niPdrgE5LRneyaULESvhZTnWY3HKadcQTk",
  "key20": "49PV27tsa86xEqUVxDgr47WueBGPC9xJo97eYbB5jRG7A69Ngyf4XqbJSgmuyir9Z8braJbzg7wG9cBAXESYvbuN",
  "key21": "3SEveiaq2rX3FH4C4sgvUaaBr2JHWaDembfffiTxeZy5jNqbfRGz6K364DBnXsVKXHSLL6zyGbMqqRZimLLYCnXq",
  "key22": "4KPoefYqBqzevMNsjhtRrLfabJ5tLmsepjHcdErwUz7yTjHFV6i8yFNvx1nCCmhbRcu2gYYP9TvBWtQ2XztwgbX5",
  "key23": "kh7ZUbPyhAeN9msHES8Ffr6c97rjUNk8gNtzseNL5m1yszKYxHddhiBcKEEBHzeREfVVNQDc4ApxnQTpoqVJFmx",
  "key24": "3XQEs3jkz8k7NCgD7XZta4ZX2qkbXZNAuBQ7AvQ7KAdKWyuLQc9Bu8FmfciAgLQfU5ryfxNH6jumSciSzxPbubVa"
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
