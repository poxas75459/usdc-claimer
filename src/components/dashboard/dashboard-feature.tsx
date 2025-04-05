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
    "5rawYof9KSiqREiAyTRvUnfsPNiZm2evjvDbfLAZbbqutgWyTcqxRaeCs7o57L1BxFy2VTbYe7rED1fYpYsfjF2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22nVS2DLdZXU94otR9c2y1HSV6qcqSStriaYj1bP2ZsaJjbi7Uj8uDdr9KJhDB9yeebVL1iwS3DofWqkk7B4hJuK",
  "key1": "8vLJ16xmXUkAHtaFdrQBdyXV9tZXajxej7PMSU4AUtZjV7moCLbK76REk45XW9uetB5VnaeRwTBycYFVoHj8pNK",
  "key2": "3Z34LxVoUM5vwMigfrdR7qLtJqMNK6rB8MrcxqNT1nui6cd5e2StNcdwD7URJ3BuwQn7nE9q25r35XThz1feChjB",
  "key3": "5wsebnTn8peJSigSAP46CvBLUEF8TgrufEkG2Fns2qpuBJVx2wV4Nv3fxVofeM8WvTtAMbwkX7gpwSiqDoTsgUVD",
  "key4": "53qSDNN6cVhASrmv4Uz2uhYvTMaKSMUvrPaS4j3aYnjW2n6hqmmMMBaHukBWw69TfvBz7p1nxDzsxhpAZsPoDs6V",
  "key5": "2wG3U5ubiasotp7R6MHWUvGc6eFVCevkYFYkE65C2tzEh1e5TEaHFKSK5Vf2nNw4LZN5g8WdudisTx7ptHouoh4e",
  "key6": "3VXCpzhojqkQA86Xk8J2Vaxgy3FGQVTKuoLQe6PcnFSNqzPihDfpbvXAwBmwzTvByS8zUkkaKE2YeAC7pkgBvYDd",
  "key7": "QTBLK6H8LA8NatxihQ6MmH9A2X9GRRxMXw6kFHMan7NTJJVrP2KkaCCDX5SWV5VaN315zNcDniqnqh6GbiEeKv8",
  "key8": "46oeRdVReyMfSNzoEP78AwJ67NZLMY3CV2VUPAbfQiXY2N6ohYqAScLGZZFhqT2z6Mbo4peCB6CHvhHjMrSTc8CH",
  "key9": "3uRaKShPHcoJMZt4PCAmWWt3qpCSPqMPG3EqcamCt4en2NA3tLpHkBg5VCcyuxZ7mhjzoZ3nzeL3sHfnVhbDnnx1",
  "key10": "4ohoqkCVrrr5pjwJLBNkFGTVjkg7Rd9ZNDBBjGgBHYrtodEd8BUwNJ3s2DCJNMrVK9Ga9UpCQwRD2hDf65FojouD",
  "key11": "aCe2ggUvK9seUtcC7qnuB9hNJ67qLi2h9MqnFNboKpbFzb3y7FWYpWcBi7YxNFGSzp8n4nsSmJtmgNUAovFKJJx",
  "key12": "2Ag3uQWnF3M2tYb7n1TGyVGQcJFsa9YwNQwikoGuKGFTgGKK5ajypykRZpiKxux2jFNcy8oEzP1qv8ZWQFx173o1",
  "key13": "WM2uVzTu9MdG2UqJZ1L7yQRWaAD2wpUes9ER3idtXb3jny7FdN384sdbgv1bWUjpMQJ49tvY6M8g5ETY7oTfcFe",
  "key14": "2H7zG48sKKJwjokq89Be2JhTQ9jxyjMaFjSCj13DmqTRU6URySNaFG9fdJ3ZMh5upUXwRh7VJAkzX2Y1rXN5fX95",
  "key15": "nX3E9xxkCKh9aykSMXGVzMziz4YEa1itok128BYGMnHBNuxTNK3SZchydzMBp5HYPnyXLjNM8AtFmiFSJAiinyZ",
  "key16": "4N1bdhrZQugwgbA1RQ2q2XEx6ccLKRydkqxXpk2dV8ivCa2zxgKDBwc77FzUPtsT1DN533R8kG12ZC21fke2UmKR",
  "key17": "321ZQmqbgBR3XJou8wAQerSBFxNpMSycK67uMxfsB46YnFM6qqiLyGyNqcBvkKgvRaJuj4RCxPxHqCy2SNFKc3v8",
  "key18": "3T1DmE1j1cCuX9GzXcKB4rgCRJ6Q2cdrvdnpeZTZdnoBZEZkukfd2YHE3YRQRa5jPTApgxqABnHcrQroFEtsQmj6",
  "key19": "v1juTjAW1QXnud4PTNKkiquCRRr6pvVEq8Harm6tq42d6MZh25whufhgjkWGrZmb2gBVJkV8MMYR4vF2e6sGeHc",
  "key20": "49QuHjvEkuLaAHNQo5Mt7mpP3nu5N8iwwpDaB6DbVX4ccyEqSXhHcxvuqUpFgXHP1WcFDYwVmJ1Mf1PVP7kpXKcg",
  "key21": "4rrvhnQVJYGZ46qDJsjGvJNVAWsc8pBYixiEpv5tUiitJUo2PeWddGurjD5sqoikkPMNF4e5ZQJwoRwDcrFMyNmE",
  "key22": "2KtFQY1kC3Do3TwHm1CUyGRgugVVr2ye1bZFm8kStqSuMrbpauz39drMqh3CMV7tfBMGom8Q3Q7wesmTq4Hhe6y9",
  "key23": "2PkfANtxB9Go72nX7StwV8wW789wSbqpMV1EonR2wyXJp59Q2NF27RSsLWnHL7BDBybKTLKBEqNnw67ihKANiisP",
  "key24": "5aejnwiDMw7BqhYtmZvyzSQFFve7PMWnNpfHj7W7XDwPmmbpe2rH15yaFf8dLEcPNuutGqNnb9ySpG7tXNPjFRwk",
  "key25": "4JbXsLgJBGKFPYDqVS6CAwnLtY51sXqUc19FtCQCNJfNb3WJNPDBZ56AHnUSFp41KcfbmTc1Zn6ZEfo26qVXFPNT",
  "key26": "4Ugfv7Wp99Rx8ZabQPCAaMA1xwj6NaAGCknAPXCkuyhCH3L2VCvjVbtzQtm9v9fkDD1EV9BhMahfUR4HtSVtC3hx",
  "key27": "3NQegGbQe9pE1KjEmkUBFtaZWfu3uWk7bMhvdNygWMQhqapT6wNC3uGZoAcHTnNfVWfvu2wkTT4QJs3JW1zriV3n",
  "key28": "51Fhx9RBN1dtWwAxMHY5V8HMBbXiQYfgzsTbtYXJFB9djJEuVpBTK9SstiuWAd6rmEC9rMeuzBPYF3VmwxAjp3Ec"
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
