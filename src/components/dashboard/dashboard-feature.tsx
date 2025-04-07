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
    "4JGnUTytm3wk2sjk3RDJpcpDmJFp51LxS5iWEpnKv38GfReZyLu64vihLuDrgRszVoAcKNhuwoEUodbNrzqfSZA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TtuawVXyvmc8gbrGdWHcvuaoFr8CmEhyMTCyK1vM8fEb7CXiQ299V14UiwKKJDvYdS2TpoCNXwkZEf7fYEV2uGJ",
  "key1": "5XbZAqwbQSnnKkXcdu2PQApDkKYiQeWWdkZwyXukoAduLUaEPyokXJ8AWRg8HtoFzwMfAp1VNSEf4MDRDBrfkqws",
  "key2": "2GjuQqUHy5y2LpJiq1TxKwPntyTLRLApgdZNxAKCJWm5UxJwiFUbu7KsjnoSvcYJZgGCRgwwh5yAgbPetVy64nzn",
  "key3": "2YoLUY2SVfrHiwQ5ffhM7rrNwkcSmVAKDDxzu1rhMRp5cdMpmRVHkGMmTazQHzUmteWCorWJZi2Vj5CyV8U6XYpm",
  "key4": "2qgUfq49Xxy4Ku9woRdzPavtzmu1MRbyC9qWR9RyPjPDabdLwB7mjSAG2123vqtYKja1xjKXw8H8eRtM8YLne9gM",
  "key5": "4uAnhKcPKvkkVsD6xXVDVkkaXN7JXHJ9xVT2jWzvpY44RKmXm1R1n7cr1fgyQHP5469p3972b6rFsEShdVUt4TiS",
  "key6": "5EQLNsSPkCep9DzGkDnmWQncjmeRtWhukMMTSmY4C1JGD1AVLjMLq54euBt5NfDzADixkoRLEcv5ByajeanyZQMG",
  "key7": "2NJfhSkKATiwJHGYnfy1oLHRQ6Efqh6sL55ENcKo6ShViPQSRo8tJ3NLYkdLqDWnVsUwVXuiGP4LTsHq1Pmxfmdx",
  "key8": "3JSxNWiRTVnkNLzXzWUSTfteW1A9E468xS1stwQGAji2P4wsxN9FLfNzMmRMQCa77d4vWNWkUYn1SweddsAUBB9e",
  "key9": "3vxb8T6WMfZwza5gagb3P3hyhMPAJbfQCZPzPrzPKHdDy3L2QVa6yHLwq31yiLz1z8wat7frMrduv3X48d2PzKuz",
  "key10": "5htkQ9JfJrH2fCDmzXWyEXZPsMNDqJKRWC7H9bSx3vmj2gdrNjFAqWjiV2v3Z5H6TXqS7Jqv3sKaVVPASwdXV16X",
  "key11": "2VdibmqAQHvJFPXf8aArPP6mhCibXGUjdXcy6VtqDpovKHxDSWBhLaLoMGwGTnLuFbXB2UPUyDBv5ueumX8S16hv",
  "key12": "5kA7tJDV5qHBokGs88rhkchPAFH4fNBSa2MBpXJVT5apqhRuHEdmdzgVd1ofBf7ErKK9VJktisFoGEeyXcPHhUeJ",
  "key13": "4qhobkHhuyH1fjZMp5Wm55btLcuRHkofMQk8SffrWHctJwEQtZk1SZAVWHf3anuQeMaWsUixim5UzARp5v8fK11f",
  "key14": "2XFTVLpvry55QEzRadp28mVRWZLxRAj8qvMJ2UjrAAKUzx6vYa2kfyn3dpKjuTsQFT4VZEBrtSu7oxkMuhqgcV5M",
  "key15": "2X87qR47RJ5T8FZ7pyHxY2J6pDZMc29RMsMRo9tK2AzdPg65ZuQLDYkqwVLGduTDyoudgMdrF5xNMwXQjWvMQP4w",
  "key16": "dFoP5mo5bnuhuSg2iZkKifB7W5Dxhh36dZxpg15ytNvhgB9AseaXZFXNRV7Ko3Q8AJCp4UA56WpkyHvhCfoUe2r",
  "key17": "2JPBeNpzUFKgyLS4iW9pY3oYYNJm6eA2oUGMh7N2pMjE5KcaGmKGtjc5ejVqwnAxwcDfasHxRTm67RpdFt1ZefcZ",
  "key18": "7XZ2Z6ajiCJFU9LHv6X8JQzotBgoVc5TsjS2ajbGhuMExtpsSi4dZAPwt1ZPnNp8oR5rQKCPnUuq8BguhWL64qS",
  "key19": "4RWggP1UxUSLGoWYLDLx4CjL2eaBdRMVWu9FD7abJq9yNekCsTWasrFKdTp51VoEzNpNtR9KdFbDZQnENFbBk5Do",
  "key20": "qAU57KJmiQFrZYNLmvZheT2DSNAS95VQnhvSiGUnPxHRKYQAMm2dsmsMHhGmyQfJ7q3uVrARD6ywGkvKUedh9Ki",
  "key21": "JQWt4uHjfrXJPtcaHxY9g5dR35wMPZ5Z14KeY66MTtF1CUSFiWJ1TEvGj4rQaDdT1s8xf3EzzKWaJV7o8uCUVwg",
  "key22": "6sZBoXkdoBX8hAv28SK2tvxDRLShUcdAG329vyK6iXHWmP8To6EdQrtTVQVVPqeSmoTtEjiJ5u5wvUFvLSrSbDL",
  "key23": "3bbCTSp4XcWq19mcbyzS1DnWZBYypLPRDrtsDrFknttXQJWvTygxsJJDf6kVBh2vLp5Cto1aUg4bmqzmnPXkK4Xw",
  "key24": "6NYLJ75fR5XSrLiREVEcrdtU1t6VQisnsnJzoDMvDs7JJ1jm9JjxGa1Kf4PySnUE8xJBv9jnHozd2QzZpw2ziCw",
  "key25": "51s6gqJiKEWAMXkGaVNJXqXmyGT1725gqDrehQF2tRpYkQqBhZSdRvTUH9pHDZWeN8115u4WNFasUhjKHHkxQHwJ",
  "key26": "5cVoF5rasK9ZvEsM46VHPqVDn1Ba1z6Tq2ktbKDoZc8wcL65cv4vx6odhwwmHdNfLjiFtWYm8wZSR7ThcUKf5vdm",
  "key27": "q5kkj35ivNc6wGhMJZvAd5HNkjx8ouYWfmuD2AnuKGkx6KKCXAHKW6yH5zfNkA2ftHQv3Pbi6ryshuVZcDLfZ7j",
  "key28": "4RHy68rPbUtPinZnLR4kMPgjyuMhgL97jrsA5TMGLjyNRCNQwK1ok8g2EVsNWrtukvvmWsBtLeMcD28JqXHxW1uQ",
  "key29": "4vdijCcaETkG61VH1wovAAUeCbqsSh5sMJwMiE4WJFkoHggodZnktQu7YvYETou6gWtWsXnKPj1No7n8aKZa78tg",
  "key30": "32R9F5qrQanmrBaMcEXmmDRXsUsXyfCgnbXJMYbC1o84uxWrVB8m1cwhREFSkgbCEjXBGxRrRDcUumK2LXHsfsb5"
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
