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
    "52fuU73LPcy79mApc5xirKbvXjUzxvhHNbzxdKDVRWVhFNoKNYMA9rkaijVZyMH7WGB43dkASik4gV7awfPt3M51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rHoaDvbJKFgMJEqtuAHEgcCPj9Zy9ysn833j8m8jnWPmZEmKAPKmE3KeEwp8VCw9xhomMxyWcygQKQfkHtXonjg",
  "key1": "3gY6C8JK8Kj65HVkFLyMd7TvT2JofDm5GnaVjxgTGiAv1Qn4AQT5yWtmPe5JPL8Qdf5xrXBcQ4Qo7BeYbLKFuB2A",
  "key2": "2GDtAvAhs2Ri7dZE9gJXYtRURnDFStXJUACsC6LqU3pV6cR3JPAmAorC2jVMs97tNRP8K4muw4aRaANxUsutdbi8",
  "key3": "2cdUJY7j2EYwW1VjfqnzZexvydKdL7tBWZvwSNhPVPqca8YpCnTMX5ESBGyWenG2Qk2x8h19aFCNbVg328poP4mu",
  "key4": "4p7JkdbsYYSNcQTZsHayARFXmJG6DfMEdX3iLRnFomGyaF53Uwiw1QEU75hAEi5vLyBgJsabnyeyuHLL4ZtxUget",
  "key5": "2PGU6GavsFa3RDtzav5sFYPXATqZCbFtpbegQTu5RBp1heuhZ6SE1P4FdLazDu1AzNJrmMeJCgQCXgMLekivNnKC",
  "key6": "5LVbVfP4TDJhqDV6aKRT4y78XvM14pHvGcZ5ggNRXxLMRS4yJaUzmwjQAXagxNnQKTnPPekeTb3fdpQmb2QGFDV8",
  "key7": "4kKZ41bkFTdnXC7QnnZ2CJJABNuYpqXpHWiXPAQJU2rmBHic1GmTzYkh9UzBeV1uxEHAs4SFxZqGQRPpBDVGjK3s",
  "key8": "4u1yCgFULXZosRG6oFqbur4nnrdzfXH2Ue23NQ33AcsGwMtwQhwLBHnHwNvVf7kyBPxmdqkci6t6Rz8bZq6Mvgc9",
  "key9": "2jKzM1uvPYs5CtS9s7hPjoLfit8mWUvxmNvCdWi5MwHbCNYq5fiQKQ1JzLszZqSpNTBXKr52wRiMPL3n7Swecq32",
  "key10": "65mTQJiDH8Dwheo4cWaN91LH2hmoHdHXVKwFx5gv5RmnPaF8PHnaZGnEhrsKSLkTmfySwg4Fe6QDd4nyyKDja8Cm",
  "key11": "5ZCUnitqYexNfsPx6vHFApCU7ErDxLdiudQvNamMCdhSCV25ZJSsPecUY6CMcYxUbzB8Prcit3zU6Rkzr6wGvj7m",
  "key12": "28fD1eShauxvyfQfFGhY3XqfzY2T9VR9HAeHtontfdKUi6kWQtR8szw4gFm15Tn8yv1pgeEkzQi6zNsdpwAhcbjD",
  "key13": "62z1PiZq4JRXrUPC95ETu38iFRTWovie9VtD3By9CvVhLC5bgPqnK4WCzY72wUVdhkfJDA7XpczUtD5gAPMFaAjQ",
  "key14": "5aVkx47oafkW8J88ajkqMChtRaYtNuDKkysJcvU3Svq1xUKbvgekDNJ4dsFgjDQjfe5NWQM58jnm5teHDADSJ2gz",
  "key15": "iALWpwbnbvPfqqquiUhEz5peuaGeHmC1JJ3yiDzorFGZ6imnTPbgUyrCW2nM3vU7GxU5JoEjTbXtuxcsugJeSWD",
  "key16": "49StJuRfkPykgtEpPeqErGf8Y67Zy8LEcdGmXKpGbW2uYph8zJk3DRatoyd2TWsJxdbooYrJ8VCW2AYSMRfbLqMq",
  "key17": "3Gzdb5JrrcsKuwW5Xa5CpmoVFZrzj8oH63BpNkTH5hEy4wGjwa8v1zKFttZ5EoRo6534YCoY4SpYiX2t9Xq6AyeE",
  "key18": "4qzn86QL3im5HWBEYUusz5pbGw9Y1Ui9wj36x211Hp2bCHTe1j9CtRcj2N2o9xb982Z3iEPdKHgPjFuGe4Rs5CnV",
  "key19": "5cy5ReW8kRfLLg5p8XjRVsBE6tfRkYr3nzMo1kxF8L2ioUAZVQT8L9rvejynt5RXRvp671RnmRe8rfKVkmWqCoN5",
  "key20": "u7Dib25kojByouCnVUZYhvuRie7rEEuHUCLDMt7Qw2TDenVsfhPfUVnFjjzpMRiEysAMdqYSSzvyBCiKaN4JDNu",
  "key21": "5wvnXMx9XWwobdRKFKBmckeZdjFBUNvsA63ReCKRGwCJJeSaTmiSXnCo2NrrPePCsUceRV8LNLTP57fBRQUtreQJ",
  "key22": "deZic4zxFmUgHgpC6RxY5QhWC3YShJ672bxAsg5Zr8T5BW3b9rWCG2ESYepNDrYi3V1PFKqQJD8EMoi7Lw9FQmi",
  "key23": "21PtjZG5JUGt9M9BV7kUCBGm8nE5a8f5pVuM8mBPL53SkNF1tjX5izfWqpxKb5SiAHpPGK58osgr22fqebZweEHH",
  "key24": "y4nRsjZdYbKeLNb6pxLXpkmPFzn3gxBjtfn5utG1uoiXpDrzghxj4EJ3R8979Z9hdX7oKAbf3qAEXzY6yZfWeSh",
  "key25": "3KjeuyTZQZAhDTYhtzirRyG6GRGhY8WUb64DFKgv3UHFxqhgSAG6LTySBYaKrhks4RuvRuu7EySqUyrWxYt1bmJu",
  "key26": "653Adsf55DzvKdVkQYmmQBePheGVkdZCr3Mngur6U6yVz5uDe5BYAgxxZrPw4u72wdo5M5C9ujiaRyPAxrXQUeiG",
  "key27": "99rWMZVG4qduwcM5S16S5RtkkcMPLNfb1TE8CCkzhBLxscn9kkLK5TkjpP5rMBc7dv9xS82znLyHD416wbvhdkn",
  "key28": "mfBwMVerjTNyfhuw9TdGAS8h4x6t4EdxBb6LHHZcGVni8AbwxnvZ8iWZiAHShavUUe5gqvwXYuZMD6JMxutCA5Z",
  "key29": "2KgFe4sTqQVqR4bC432iSB9urgcD9B83XXjxcVMhqwdFXUYaW2xpcTmqxr233Eecot5KNx6CwcNvmCqV2ohxG9hN",
  "key30": "3pRfWTpHA7XsFoDEzXtmHyYqQqSydUjKsP9tWvNPkGPGJpxtnHpcE7DobZ8DN2M9WDd6jrNx76PQhE6A8J7JH1mZ"
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
