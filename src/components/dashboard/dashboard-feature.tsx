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
    "2goKKzq1rY2d686Sp5nbJtWmZHGsfJhnMXuNSi2MzQYJTkMT2RGLxU6i38wfjJ7fL6mHZZpXs5q8DciRVm48W8Ee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R53mrzBULzpPrtbL8PMYnQgirQ8nXaFRynQNa54ZSusbTg6LZK8GabugtLLh74y1xh6BaaUuxc9r83mgJh5cwgC",
  "key1": "5jsFMtnEQPtVkNSToJ3CgCCKrmCvuPmac7ggueCtK4kArNKGNLfg96QKU2Pq6MWVKhjaBcJvVefhdF1ADT1EKTPS",
  "key2": "4Fj8vXyidWB8rzVydqnpK5nJqmBj6jberd4LuhieozKGbwxgYViLwkgJHpKz92jhQ2L9nMx3RvLXb8iWt1ZzrCMh",
  "key3": "aBQPBE83QesUZh5SSgHTv3ByoJDdMYbRaUMupCBNmEPvH6vrb7cnSYGPFihmWyHoFqekuHkY5sHv8zfC3QpG8ti",
  "key4": "4CwpyCgHWm7V93DFysDLLSdkmZbspWp5AA6dEQGD7qatnCev62BmC4qnzhPyKdPoQPio6iUm1ZTgrQd6MsEPXN9H",
  "key5": "33NMnuntp13PEEDYChueEESoV1x4nquqHyMMhA1Z1RXRMhZc4XRHhmGxJsS4RTrD24q4gjJdcgwLXfTiodDkx4Z5",
  "key6": "2RCeYg4C1Eqm3Pg7eckbHFA7bVzoBdrX8mguBThykoiasTTdX6jLQ8wRVqpo2NdyMHFPgR7kQs8LiUB9wy1zaDNk",
  "key7": "4DjyNLJPHQLcSGWQoSUVYaNH7WEjFn6HbrPnqWZFoA33Tf9Hvdjn931fG7k4Wwv2mRK5pRjtY9GyMnKg8Jmn9dLM",
  "key8": "4m6A4psHrGN9KZzcMEyJNcGotQSBSHQ23A97nAeF9SgkjpkhLJLpEzZJE7ZVi4ux7pEyw5QPnexNZmFkPmbaQfxD",
  "key9": "5cpmkEzCBbdVZ2yoZvZJ8yGrNPhwW1fEBoH9apudNP2iTa49VfpEKhDCZP58j8UeNYrRyNhJ9jqK9yoEnjpGyJV3",
  "key10": "2DT3J4789cGTnXe4ULD8S5y8PSMVfX822RqsB7BdCrznLX5h8E8ELsgQ3bvfE4Ych4tsrdPaK8RL47A6mUPtQe4S",
  "key11": "472MLbKZzRT5LJvLJLZhPDBorvjMJcvFjxbsUVDUQrjSES7NN7GwaTy7HLpSJgj3cmv4oTpkLyazZg5pCcKZc3TH",
  "key12": "5gBKsU914CZABzK6DCbn1Ad2NLXYQCWMHitYKB59mFSn62PjernCJofwz445e6f22eTzbhqPkZaPXb71GuWTvLmP",
  "key13": "MfowFQbJSozgh1qXU16jk9CCgPzBe9JMK3iUhM5RFfyJrTptiiLPzazpQTL9L9h1J2oXphy6qvR3MW1eQhY39Ji",
  "key14": "3JeA25kPFEaPZXe8izrUGTbT3TCaNMzg1rTfzHswzWc5vqycv6tpMhJJuDzf4N1aN2MEEVUaKztL1LTNnWnUjNkV",
  "key15": "2XBKWtuRjTzAJToXU2fCgbxJHvp1k6iY6jFryk7BpjStdPhX9SVSDuyuFBFau2Fpvym1FkdivzQFLL7XCZYp4BGN",
  "key16": "znV43sMqKJo86cqwKGcKjqrwSNZCVoVKHWz8e691VhRcN3LZwoZDCmNxFK9ZVehBRt1fZHnNBJYBhHqbzDgLnbM",
  "key17": "2rXAjq8A8v9gUpRSoB2HLoGZt4WYqVKzVZ6uifJC18Srb9ZrmYLspocsQvcR9Ri6puaCxPbBmLFLh1B78m3ELvot",
  "key18": "27M7FSGXgZDgkuf3oWHqnhnqWp8Wib9mNE84mmzMy5mGfiGowxg7fyWHxGSMNG2WCCPAhanDCtgU13YwnEVH4bN8",
  "key19": "5zkeDawApniekaynesaTeff83Bq8d2Pfb4Q647Eo6j3PhMF8TMFwe6C5UVwMJYqreHw6HmsCFMviz3ph8wwcC8Fb",
  "key20": "5SgCSvsBhQ2FJzTC5VCtqF1UATg3HJyo2Dy83KtpzCZW9pgbjhTwMiYz6osp6p8SKkFGa2MCDWHq6bBJjVsFPSpt",
  "key21": "5vkt4Vf6R8rKmEwyUoWXCmNxdCvCBQFVxCmM3sZhC8Sps32j3pETVSE5NxqS5J8VoJXXv3gCvPRDMzr48YntkxXX",
  "key22": "2iDd8pyqLYEbKcFmE8uNzF4iYUbaGStupX13taxDQuvwuPoq5jKer5nbUHajGLVMLJNrxtiKZ17kSeqUBLwujft1",
  "key23": "4G1WiL9qtfE9kKdEvGQChKd87ZsyjabXsbCpqPje9KcEkYhdHj12GdoyWkgR4rqHTXMiPjofcGujv7fiDXvL7zGN",
  "key24": "5Gp4iBkKpXY1yBkdj5mMuLTgA4Mm6nrHWxJkEhkdsVuLqPGfFcnoS2mSvRDFtXK9y4ow8xxagANL6ECnEaFhApsH",
  "key25": "29BUToMsaW3Y6PxS8tpy9RHaGpvXReBFa3CeQaDcxRxYrHeBqpKYe2Eg4vwoyTqQUEP2tezfPvTZcSxmZrG7BQTb",
  "key26": "4N5nHtGUNvwLex2CxHtgxGxk3qSmpBmvJxCS4Qa1ioMrYzzvTALASsRzgfNtBMKzwS1ggSbt1p6q7Q6ykSCTBE5d",
  "key27": "27fvSGzqBRh8V9LFbTRZbbYUR7wzAe7pu5Qeet8pqkgxMU7a3YcSwqaicph66cjhJwoTqDQNAQjER3JBpgC8SDum",
  "key28": "5mLwWLnwEwce6GnwNN2uujSns4z3gb7ja8VUPgmZbxXD5UGNe9JXtDNihJyvHeQvF6sWhnME6eFjxgZjx3acfbaX",
  "key29": "4uUk4UHiT3k7UdQzTTEbWgdDpTDrVg1v3N8GUCJLeF1xUYx17yRCtnSqQ76JaoMZusUz6j9pXaVDUoxrx76jkaV9",
  "key30": "2PTENqTDhh1xcuB9MtKHdAoEkHwGG7n3d5N5J7fPkWCmWqeN8E8nKiEcXPnX1jDVeygCpoGrFhHhJPqy8pASGW3K",
  "key31": "3xEVG5z1YV7UTCECBqj5w7rCUBZx8Ju7YGHRjyhdE7tfJRz23krDn1wUiyEDAhrFYVJXegcR9oNAKi3t4oHJ997t",
  "key32": "2W8ME33Fuao2YS87V4wgoph5QnqrZzBJZRU3uxKgiAADEUBdMij5HXX9a2mUMzZ8kTkWsTCgFeF3wBtKdGbG7BZq",
  "key33": "PpLY4yB34FJdBf8PzpipaWTLEk4F4SdirpCQe3YmDXiUjag49h2hEX6SfSo7DmscpfJBmLJeW4x6xp4qF9Rob2h",
  "key34": "3A4fnjkN8w4g9swKtdzE7EjgXz6wfF5Rdp6pqF8xRNYfnxoraQWJY6rdz7GDVnQzzFpBr9Gt552x4H25KPTqDnXr",
  "key35": "28Y6Qk1NpLdPY2DfLKCnuciDq6fUWBgTPwB1dvkv3aCuhMVrLS235GbuExEnofA769Lz281cKBxBEMkfDi9nVjF5"
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
