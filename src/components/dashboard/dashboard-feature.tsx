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
    "HFzCeJ5T8M6bciPL38GsrBhnvAZ8N1msKPCegG1wmNeo7Uqn2xSfAJW4jt8vZppa8GGFevsXfVWPHZFULHHBJiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pdzn68pr9ErMUmcysiWYMWWoAyTUN7iA1W2W5qAX9VrnFK7ZXYHm2jTCjxYVaAAUyY34ikwHCB8GFgwq3LKQqx2",
  "key1": "5tSdYZSbLeSEU4h2eTvWf6HQuhach19nSJYmF3Yk8r7xZowS3yBKCrNYuAwYv3HThYVYReBcCPxAy8EUYK72nmwa",
  "key2": "66MQspb73o4EGzGnLRfTSQ9WYKM4Go9CFsH2aceLofCdNCGbu5BBMtrx4dBqf2poAS9r6wsgCsUDEt759r5E1Cat",
  "key3": "4VKYLNUys9Khbkxb7gaPibKJcBnXiYr1GUecXhD7phfAYfFu7sRQVCfh758VJoWWQ8UbrVTVf1cqrDivVZPxyMD4",
  "key4": "o2Uf4h1H1awLULwtXAxa5qayMWgq5yejMWtPGejhGKLmbJpMLdHeqFhzvFboqag742y6nLR1CA3k57R7dAuBrqm",
  "key5": "5gE5QPVn9zNdRwcodHbr3iKCXq6mZvYYiwD1rW9df7nqAeDhXcY7s2RL3qtvtCCEapdeQvSN8seJdkBRxVsLkBjY",
  "key6": "4ZTpMdqvB7eitYhUv1gx5TGkuper77MF7dQsae4YwH4At3PUfD3qq9gB8hdycTCj233ZzNDZ8AwJXtfrut7xhEM1",
  "key7": "2ePF5rCSZfSPp3WZLnARBKAvLtK9QtA9vYeyw2jVZS542KEyDA9xUM5jqpPFzP5NcnQ3c8k1TgQAi5nEhxDp9eQT",
  "key8": "2qhuoMoDyLBzPG8HNmhgAVeiCgRy4gS7GX7t9rQ1Jy714qfWztkT41ZcKZiD3qL3VsvL41tkHwadJqqxL4QuXUA5",
  "key9": "5Tt5BWZHhBsiHig3zk9J4xr43fvDzKFgx5DUkX8YfcPXdQwQNsKcgEGdmQJTTdeQufQ2p2bFwSrjtCPpgAG1uKAv",
  "key10": "u2MbBCYejGNHZWMsfUCMMoNsmQY7M7Fc29fq4FqSWHhZBkF5MZ1xTxKeh5zYECKKNpJLRrBBohdUQ3QBtwFUaCR",
  "key11": "52dho6c6GuM8vSgUChF6h363to3wVHmZczgd1ZaaXuripk68hyYFRrB9zuHaemPTpANqBu8W2WEJF3AZzzGHj4es",
  "key12": "3r7sercLFtdB2NrrDjtJbhMdB92R2CqUBrj1Wxtentcn5BftTNty8KLRbCpmge2Nb3Xo4KqFm6ccxuM9HXYaZjDz",
  "key13": "2S9NYf9ifHyxv8Bjf5yfiA6fhAW2SGKECE1bHqu5awHZYCRt7Yh5tgdYhQA1r5dh7syZLeRHQtT3zN5DmBKZU4tX",
  "key14": "5wfdBrnWD3xyQn7d46w6J3KfPf8XsfHwQE6fADgP9GoH9Wh1gY6hynqPpo9wg3buqSdMVXEjwrWG5DtBxwuyWLge",
  "key15": "RCPRC72Sk31ap7zsohm4vRaa7iDEZXxqSyCY31aLEqTLwDSwnmbHDPd4QhCCKdRaBCaJhVGFqdfuKg65igkjE1b",
  "key16": "v5czHnpwodsfQPVhUwMtN2ZnHYkoFnhiVQKeEvQPTsCfMg4W5kBDcV1aqorjhg7LmZziYmc1e3mFqsiGtcYNmZj",
  "key17": "4Zmg4jXWY8VzRM6xavHXTPTVt23A7tFzEaoXCED7uLMQmWFG7SMkAzqtWzKDKoJ2cVLAwSQKLNj7vVzHexTcgu9A",
  "key18": "QaChroecdKVWLpB4t1NGSjHBEWZJJF6gnGxpXEJZ6Ehb2xvPJ8cEQUmxqVD3fW55bdZXmRhxatumPqpp7NmH7G2",
  "key19": "5fc7gt8zEsimUtVpPMrfK9MBKRFDeypVgZyrrv76JLL5LvaXn9REBezKqxbtUdmh9DzgiFqBy7Z7pzCz7JA2qytX",
  "key20": "3VFAoiVViwpbTXyKrsgmXpxCKNbktPBcpudXnMkxy6NB3CcbWNi5KorqFN1n9ZHh4WToF4Hjs9WUQw8UrwVixSVW",
  "key21": "4f64cSW6TZnEpf7SoDTHcch5rTj3fqht8v1qDYxFp9R7aJq2cRAexxqVHtsoNLkVcCHAcpeoge3rmewmza1wE4jV",
  "key22": "eLKhqN35GTJ2LeiUpKfYzLqrSH64E6vuc8ttCfRvS4e1AL4yqDZw4vh8fyPe4QdjmQhafTWfzdppigkaHpBRZ1g",
  "key23": "xdYdHVmM8Bqe2wNK3fZD9GggWkCVHxjCUxH75D1wbVTLFoHSMaKRdpSnTzDd7iGSTBPn8bqosJN5teNJ9m76ZWk",
  "key24": "ZdYm5uWkF4FLGD3vWGKi8pG7YtqMFRhT24UkHXHY6X7G2uF7zftdMZTki4PB83FCgsqBX99LA871ufoiBaPCpQa",
  "key25": "5SNGdWZJaCK4e5LWLeijrNrbpLN9DuBeJdDfMD4VvNKMwfoN4Sqd6Jo8mmd7AQfm7vVSvnoU1H4s22DnooDkKfKG",
  "key26": "4GtZWJBYXZcAgZishgryZE79xdmteGXRdTUA1ZM3BPi1MgCMSXT8tZEC2eRx6q7L7kbQzNnABGHDtNfWCy7gJ7f3",
  "key27": "5FQmjha2gPZJ4pfSqE9YfsHRyPeCR6kY1nzdmBCuzgD5LZAagrP4742wXw68LyHtz8fCWJWYX8cHMuXNTj4AEYXw",
  "key28": "GbtuEpbs2UUNGajgNgpunyhsCVjcVj92XaJ71tr36WvLtG4tFqW1ozvZSQqcECAcEWU4v7Wywwsf6sDMxQ3TXyZ",
  "key29": "4SURgdBRzaipyzDrawZaQMsXs9NPNuUxEbRoj4zf1DyS1wUeTkicZ8N9PweReJNafgkLMF6fBVL7cX1PNorLV4ZZ",
  "key30": "5GsDuWHjyo4uzw1Qq2pc7SvVJgGFJjry1Ci4Gx2nYJ5VpHGYbwd7pf7UXKZkbZpi5D3JypU3xbPZiYWP7Wug6HLk",
  "key31": "NxJiDju6pXWUki38tyMFGd3nWWUBP6csXFazwazdT8iXur89PdxFMYSwVRmqQR1cQPQHE9uLRZdNShN19ecxsp9"
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
