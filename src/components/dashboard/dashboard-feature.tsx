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
    "3ZvWmwMemfKUkSBFQqEq7s2Y46WrXHZfNt5VYY6WJSzUpdkmehdumDpeT2KCWnNnf5GVcD8M71UweEDsm5JL8rJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jh7rz2SNzRkuLHyxtrDxhDvJPcSUXbMRp6qmS7czxHSiMJJkms4Wvrk39p691jZp9BZDdEq2FuzgQ4NoQQWcaa7",
  "key1": "2FhVctQgAWNWoLweV7GQ4FYYtVzWLEhVkk4chG9HKdvkc71t4NNkDmDzY8nf6Wk5JCbui1Tqas2bYBVZPv3PmHfa",
  "key2": "35fRoZDazM7heJViopx2oNF6VoTS8EjGrkHQiNNuVZd9HUGWfXuLRoDKWtiPyLe294GCoXRb4tmVC48HWL67gfRx",
  "key3": "2cJctxRsSaSwQ676w75CbboLQ7wJT9SPDVCMaFtNNVmM5iWJ5ZdDbT9kB9fVD4PxskpBan8cDDJSxXi69cL8gUF4",
  "key4": "2Zd4eL2kyARLBCPez1H1bEy6PCGEdQAGM93TyzTasiyP5aBmNwyMAoSrfK1pW58rYTwT6cm5LFLoLSibkdXxGmWS",
  "key5": "5mzPjdz5z5PuokZKzwfhawysjgF4CGb4hwNABnjPuLrrhYQ7dFVG1RNfXJsnBa6szDtvnwCyAP41nM4ir85v9Ugh",
  "key6": "4oWiNRrYYx4eoqvQeQ9wp6m7TND4MFyGZjYHGPecXo1hqbGwzfNLPTAdEFcwbjT8RUwy4TuyAvGob5BgVzyEZgoz",
  "key7": "238TSSh6dwuV5NtJoXuUmBWAaE1BJNH1BihW73zgSD6KocxE83KRPpk3ibHeyU6zGZvVfnCkFEWUsmSJb8Y12vjD",
  "key8": "4Nup9htF1B4LgDcfoTQcrLVAFGYJQtj24TKwnrp5Uagpnp6YABTT4JuvtSeQXW3gJPPE8y13NUum3GfNqRdhhNaw",
  "key9": "23L7afcVDq5tpmmEKDMeYcF7yTRi27HHZoeiByCgnAUrL5kKrXBuVWM52rdceAB1aMoR8sj3o3568frr58tZeV9Q",
  "key10": "3DUwPfCUTg5n22xx7G8Lx6vXfv772TEDqxf6eu8oCJraBxvmQjHmRp7ueuUH8Psn76ShzbCXyQVANmQX37M1uriN",
  "key11": "5Foreig6PzQjxbUEVeUdsaD9WWMvZzbdyKEjRX2NRwXhUnJ54T5RYP9Dh5y1vJ3BQQTukZt1C5KqUhNkMVSRMyKZ",
  "key12": "2nVSFV1SRq34GfA5oTuGu7XZHRnwd3UThgu11Yg3v6haEqKMELipsV1a8pA7ohmyb29Ao2Vr2AN7tpsNMj6kdoSU",
  "key13": "vCeMRozN9jrVE851LVfw8jMdVMjX7j4Y6QggobXTYJPWUz3DK4kzff8eTTmjfo86usg4opYRKwqh3vDkxZ4FaKn",
  "key14": "WpiUV1XSXBuxhBNDuGLbgG6ew18UdzrX1CLLhfzcQ96hVxSqw91h9bR2MP1cdbyL8zG3LrRqWH8dq3bnHHL8B2A",
  "key15": "5oe6u5eWV23vCmfgraTSpqPAzhEQNPLsamta1rHh9wsbPghXCHgDwGMSGAXyxq5NM4UvLMXxzcq7ZSVpdReRrJd",
  "key16": "LSJxTLE2A6Hs46KwWFJsCw6kRzAnpknzT37a1vEZ2G29WG5ibHHktY5wNe6xG22mNnATFnef9idtx19kh53SNQb",
  "key17": "5Dwb1NWPc7MmSk5X1G51V3Sui4mHMPgnhppnKSxBF3QUsgtGdnZyt1Rt1U1AjbVYbSo9uPaq3ch4VX9ZdgHwQWAb",
  "key18": "2nUPhBUbw6zypFk4TAZiXR3vnqmWYDUSvwAT3qheCBV98Do6MzA6SPAMC8nNHcAwSQvpH7GfnJ3nyARZVZupXKtU",
  "key19": "5J6CGXwMt8Kn8aE7fJ2DYBmZpWeu4aHt84XrszhXRvh6wAaCsCLZky9XFPCfscxYgVingJJgDAgpbJ3mRimtAiNa",
  "key20": "5QWpxZHivdqXARWHeRZqPiPaAndrVN31fwNKC4gwzXqh9y9fBQjHHuToDMoRZAXN5bXqFhvRoXd4AAcgneTQum7j",
  "key21": "2qjxFsr2FKHrN8Lin77Ax3GrHxHxmLrQYgwkPdWFCtd1wWoK8nQ4zUBrWz1SrQSmvwZSUFuoKZUyS6CR9LB2f5QH",
  "key22": "5Ukoqe8Ee31XhpymLVJDQ2c4W82LrusYwv676sFLcGWVrzPjR8c9bJFNtqMgJyx13AQSYr2qnTpsCXt33Ud8LE6L",
  "key23": "2Sb9AVTn6vVAufAS8FZYDbcyFp9dPUApjt2Kbqb5A7Eef9RiuLb3m8uF58x49MV5er5rngCiLY6bYWnzTFjfbAgC",
  "key24": "3WvzGci5uh7pfQ4iP4CKmGcbPkyF6obPag5wnRTRkEbNoEoKP7RkHUY2hUKMHQHnpWuirqv8vwZcW87VV7iHJntm",
  "key25": "oCq5WE6kRJfExvthWsVjWf4F1vZ4B2xRDfmL3ZE9BdiK5bspTrifsgxFaUrn7YkrF2WbX6voGLc5otnwL8wc8t3",
  "key26": "3ZeCqhZPJtznQg3doW6JBpAwRTUdRLnEkAgN2hfu9eCb1Ur1jDfstTyjJuK3ierJbRQpNw7SHgZsC8aAPZJY2JLH",
  "key27": "122Moc49m2R2s1tYPyiRt7rVsczuDeQGLqSfffUxpvPEWNoDeki9uQbpT5GgrKXqmqAecw1fQuYMSEftxB3VojXT",
  "key28": "463q3xKhHDDFhd5aUpGj2i7p229fnQvf6AafJxWcjWsww6jy3HwwNEQkfTaVdR7Z7qSasfrLadYjks7woHWUqeQL",
  "key29": "3nzu7k9fsWCbPUBCWs5d2WkKWLmx8A2SPmMD5kS3kuu4Mf2458hYh3P4kpbW6Uwy6g5fLLBrZia7kS16MRDGQP8m",
  "key30": "kyMNSB69yfKqsLusv5CGeCGusdU9bVQ8eLQyd3fE6gkyeT6oK3LiFcZA9eHgcKU8MPuuJzDYVkVr9cZwiWjifbG",
  "key31": "4we6Ly8pHPAswSXqxW2rEH44AK2osqaVft1fNg6bNsQiWwHvKAXUXie6f2mvRWqco6ECTy39QTNGzbg7wGXeb6Ym",
  "key32": "65yoekD7PAqzX82zwiXq47X57BcCpjNCHcUpiH2x3fDCcPd86spNEjtFbasnLJS4EyveTf2iRBQJ2pXeXnukR8Me",
  "key33": "5crpoPVKHuKGYq1DEhrFMB48v5Q1G8HsHYYRKk8Z8v6aPiqLaDvC2phD5U5mLpzjbW5pX9zhjszKDMk5L8JSLzYW",
  "key34": "5pSK74nPk4iCKVGamixU76u4MTP16xpX52Go6WzzWjeEPoxJ7DuJLm2KEPtdAKLF5QQjUThNpHromj3saqXVvTHU",
  "key35": "qtD3skQQbdUp3BJKu7ZXeE3fraYssGtjLBuqNcLbPC1JU6ytyjBg4NkWzDyjHekH972VzC5Wx1znTzyQbDdECq5",
  "key36": "5HwtMkt35tN2NgXSu1kbjNtMxYZw4XdcA5MBGGwC1i2k8dde4aZfVQhEj3btjuitqK5uHCxhMgCYYyYAWMW2xqsB",
  "key37": "5ceKmp8R2C1CvrwFHc6BGRco2rVSR3kGfiBgMoyDuN4GVN1KMxQeYXyr28Y8XVTwx87QT3kP15SWbLeWp4NqS5Sz",
  "key38": "4DB6rDxEJwEegBqxa8ZQoDNSx8VXCCb7R2AHPNDSsca6iGkRgUhsFosWuVNebmghrQjz4CT5Xo3fdwLGkHtdKmuX",
  "key39": "4MSjYUuWPThknPbXfpuiQKKSWby72i7Ur5pN24oXsyiRS191CnHCN1ZYEMQjq3b8D4YRSdWuRS2gGxX73jEDhTz1",
  "key40": "n4GF67R2WQcfkLUpRkuD72FwhYVvVpSWZzYAjSaDDmdDkQxdrNkQXtcNBz9rD6hzCAhgRRtxneqbXpRdzCE3raX"
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
