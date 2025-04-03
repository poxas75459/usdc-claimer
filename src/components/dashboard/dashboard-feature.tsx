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
    "5VJ3pbAnK5WrqFC62JLB6M25yYumTErDr9QpscYSvLBcLQLwDQMRee7GfPDLbZHx8K9b93FPQEUFovPuvCuo4mHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C1ih2bfpRqBZYPTGMD7KC2F6MwSne3q86EBvsrLMu3WNZbY9hcBtvWrmx51yz3Hpm7UfAumS2HRfzE1ZARCYfqu",
  "key1": "2fWsHf8xxK2j2yLtgDsYP1DQ5qFyHLSX3t7DpJ2ffh4tvx6H4W5AK5cch5dsiTajteydzQ9aJde4Ma4vnNuxreJN",
  "key2": "3qUCZSEb8y6mUap9WW3Yjs2fwGenuss5zw6D2mr8CgNCYHVdvS7dZZeAoUSVzuAixZKJCR9tmPe3rNeHd5gvzBSh",
  "key3": "4vnqkDqJ7UYtwjwHX61LiiNDWxyVcQWxRkEQbHsa2wkh5ioFjKFCcom2DbMHg12oFQoUCHueiBji3igZsetbaMJY",
  "key4": "5sKNNsxMDHgLgUaRKbnRbR84AtfJrosRiqZaXc4d2Pn4S6tVMGH2i5fQcwnadZxwSLmUWeGZzTGzV5NbmwFfkozF",
  "key5": "39W634o2FLVrwKbJ8Hy8cR1tkhYbW5RUvqKf4Yfuqtm5uPV5WA4SH3hKagtFTmbwYqsYNFV8fwmdiBBZH7GMshXr",
  "key6": "5JB1Hrn8ukr4623Umd3byPrwzjxttmNsPw9wmg5ZCegcUHZMhT4U7XptmE7RcEXZAk8fJE61gWqHQyZYzjosKG6A",
  "key7": "3gjXcgsoteVXB9XxcMxs4oeAsC5Y7SVfPaSuFQEaCTKbNRY8iSLzQPg4K37GubSetKDAxDV1auqVBv51d7ifJqBu",
  "key8": "4ApfimSHzXPb1fppAvenEw1hhoyppy2QuG3omDcpNGpPqpo7hCqFp2HoodBmh3hpUiJyCPUpWMhJPAtvi74czaEw",
  "key9": "5fWScYdHd1S5ay5k3QotqSKy8amBYkdFx5dNXXQ5raXvZZBBcyfi8PVuATQMAtGwwCDY8PqciLBmHpWGBXUL9C7n",
  "key10": "4SHC3sezHq4cGdCiZRLpmMbJwNGVPeqx6HRTsya8JCsc27bx9i7bAPDP6KT4njSwmK8rA2z2Fm2pHthyk36fxRah",
  "key11": "UiU2bzPyHvFc8Nexi6wRSWSmzujYkZeqZY36RKLUC34vArpizV5XdPs9nJW3mw3HhnciTrANSqKNrb7zXtJR8oH",
  "key12": "5vu1TorJXNie9XhFfw59922VLyoKEQY1SSyciZ9rBtLWPBB2uqAhTsBSvMUdVXT6Fu6FMYSSKh7xmpCwwgfdhmSZ",
  "key13": "67prmzTufKv7TkwNNyDcf3ynzVAwKXumEgDXcWjntsadt6gbbmwETnYxQepRNrEUbmjv4CUPDAFJQNxqjmNHBtiK",
  "key14": "qMzSDi7QiaVp69nSsiNe7LBBnFWCq6cgFg14qCgeKHnGdUDKaE7FSrKQJ1F4qyk4vtrGUtdBeUYwAGo51ipe5yp",
  "key15": "Tbtzww8DwivEZVjJdo7gCSZbupTrgt4qp95SKt5zigpjBH6omHYf23dAo6bd2jn1qAikVVrTYnhJq3ySBj8qTmC",
  "key16": "2WvZxvtr69Pzmp7eCuqNJGyMdvi3hcYu58mCAFXWqHFjLJpMFehQXaTvbgySdibzFZbgYD8eJgSToLGTptveNfoV",
  "key17": "2d4gqaXW9QNnCbjrFomyA6NLTqQRWgtyb1SQ7reqaKEEDxd8zp5TyjCFHcHW3V7xxotarMmsqd53LXUtKyBNYxFT",
  "key18": "3E1FkNmE5DH2VVXJHvRhZKaGtXUx1L4GhnLYbSitH7hrf34yYaxz1kd2vLEX4Z6bh4YNhhPdhx7QcFoGPqd4Z18m",
  "key19": "4GpMtnqBZjXr6oxaGaDvDVNWByFX7JsV5jXic87XufZYKnTjj8CBoMmDvBqSgjP2UJiG3WcNQRBtHoSFv3SoCpo8",
  "key20": "2PaLxuMTSgFWw4ner3C1SkPtso5eXbCDyC6XT8An4UfmQUBnbyK79ogPWRMEc6Pwi1SbQNnxf8UESiZ3LKNA8xfB",
  "key21": "4a86RPizVKSgccSX69q3MGum17AAmq8M2D1KFQEBYEb4CnVGN77ALtfKFcFydpVGvwGzpARQixohTaqryvAFJiTr",
  "key22": "3WZXmrzRSyDkevTsYFX6g7YMKDPQ3oiRfzSKJtP6a7aurzRUSQGBiBJ98rynEBBkMBVTzc68Ltdc6ZE6DujXbUBY",
  "key23": "2vauxgPsQiws4EK9yVYPmFvFGv81NzqPMjB1v6R2iErBmspQzdEDs65ausWV3vMGrQYrqicuMikEPcm8UJFQv8d4",
  "key24": "4uT24kwTn7BMhfTYpRT9yoTpJhuj2QsJRczftbZ2QAQGcZJjNKZJrATmLb16faei1M3jkyxR6madRj5Ko8mdWjW8",
  "key25": "48u3Bbxt7xQMkztz5G3ex5DADqKaPdYDSzmjgAbfpxr7QQdgiHDEWPKy36i3mWfUQwykSsRnTZ5x3JgZe1HSHu9N",
  "key26": "567xFmESgt5nuyhgbpdssk9LFCv49vDspwzkgW7fiwr3yiGgcKGa2Pgw4qoWvLT9SEgB7iymVUgSTukkqTqSa33K",
  "key27": "4hRNpexYNC1KPDpoSF9BJY8WyqjzWQgcsboSnUM8kgVe3suwkJZxh4PvhmsRfznJGe8JjZaM9cuknX3Brp7a8UJ6",
  "key28": "5dr4XiSWJ9FMSX8ufVoRLDrTTRkhsvPyScv7mNE2ZRyFh3MecUhQeDxC1N5m8qrVj9Q9XrohPCrtoyhnLVjp6X4y",
  "key29": "3kZio9x18i1CT5bFAW8Wwd8bWBbdejm9kusVknbwVGttDPppqt2JXnCtHGE2K5hXYR86Kmvoerky4MH7VFZ6DCPV",
  "key30": "2gJPUsY2XnvrNzJfwzrX2xyqaxgsQtYKFUzjofVEVeWzSv9PMTL3kBu8mtWXnbBgQLnsR9evUXgrnroaHAYRzjcb",
  "key31": "4foqgn2KxLynditzG8c14VQ2RZPELy9Z1bk2TupFdYL7E44hL1Hyrm1EF3e4EPq7BCxQfp1m2bCGDH2gAjHXsoWL",
  "key32": "NfhmFMc8krkJ7Sp3q7WSVSb8vYedM4riZspjVwNpCMzHuTF3PXHENg2cXHz6RRNXoo1fwQnyjrQ6eC3uuiMdjzC",
  "key33": "4o5smQ1MxHqJqNgj3Z2TRY4yhw3h4spxkCU3eHfdGELFP4SEi4Me4qt4XxP45igqfVJhiqgsG45jnb936ksvCukW",
  "key34": "HxTahWd8Xt67hAxx8BhCNJ9nUS2kNUfwfyL7WM3P1NXSypsJi9eYfBpatnCwbPwtHbFaxcHgCcqW7A8GdFfLsiH",
  "key35": "QHDgmtZ8B417b6ywdmbkjcuZDaxS2FKpsLtB8Do3HxYuydYYdS59oJwnvfMyfZP12raG9c6dQ9sa78hC7pdWAxn",
  "key36": "ttj5zPAX58Q4rdLLNc9uSrby7gtxSf1KKCTsYDBMH2VxHhwNgostQ9TyPctqg47gYxwq3eu3BfavwvbgcYcxeFk",
  "key37": "2hD76quaVp2YVuK8F4y8oY3teSq8MbDR1tpKzWQyaubGhgcdFXT6oTG3eziBG8y92BXo9yGVvnhDYce9fZuuCqSp",
  "key38": "591v7ZZ5CvfHQQneGZNAxDXfrftPJJgSMTu9pyxyWRStDRwPGvJr4h22QQLAXi94TRiBdTmNkoDyHGG5FpJqjA7T",
  "key39": "5729WzA2kH8GWkdLL6xt9k2CaBHt38ozgCkdrmokdtmdDGkhCgzY35Dpy8SCpjCGSfwsZuxEZdwLj6qzNgeN6u24",
  "key40": "2PrkaNPt65uEsu5rP1o9X5z9Lb3XKd9o8WtrBzeDVWKqch46FYPTBTiLKPc9nhyjiAdvHNdYnm5EjqY74WGFbnyS",
  "key41": "2n4FR3fSMkg2tX3GNtyVb7XrBybAneygHYqwmZaR65h35kLwSsvwbaQHe1kHPgKbEjtmrJUqEfHbUqyZb8o64APJ"
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
