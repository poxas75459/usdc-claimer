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
    "64n5wuZodF1j8bGk4qY15b2ftguivifga7jQ1R4sQ8dVxvBuJ5kMvyXUWuktv9Jj7vhpnKduzvdbVym4QkzsPKwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V3BJBrizyHcQwZn95dfTWgorV8kBj2ac4JUCNQEd9Aw8Z66hmbq13ranczK1UV51aeCm4gC2CYVSUjnd8W3Ryvu",
  "key1": "3Y8Rdaux2Yn4MaC7JS7uqfejkHwMFeWW3PuTqAMtvWdyaAv5nuj7vbMXVoeUwWjFBf1ATADSGPAF1wHL6SGARav8",
  "key2": "5BPX7UBVaz3uEJFFzHrwi9B5EBTEtkij89uFcsQ8NCArpzRyRUGNYWRhVRySksiGsgHKKjp92GRLiH6P1NyNBUc3",
  "key3": "3AQx2hB3rtKMvamxEpArLPYUTbv6HhvuhHLAMtJkKforbtK6D6Us2NWj5k2SvvmLA87g3fiXgvf6VLyvNLFkm48U",
  "key4": "Xut3iThkqeZ3YWeVazL5EuSviXeGi3LoUwcFUn67JncQkJrwQEcT72Gv6fEY55WrSRmpkDfXAAyUqu3inEhdMhU",
  "key5": "3ET1DybHp42Yk3CHhEyPYbYGRzguoJrjtCVfQXBKEFEZW3tQPThTVwuXmRewbJ6rtBSY3rcygwkW1otjgW4RSEQW",
  "key6": "3hCgGM5g4S9L1wDa14GK3Mq7ssh9yQaQtRU8rTdkDQjppD9U2v8UpMNb1589fvtBZ68x4c4j7yyTCbuokUHBtE31",
  "key7": "4HD2GnRgam1gySqhLmbjD6xQbvrRJD1qgis1fQovKDLSgNbVx4YdvZB1kx8raKEjWwZhnjUAQXdZ3SE4qJJ2tbHX",
  "key8": "4hrZpzJLGnvUL1CGkuEdppgvDFGmP2tGPVbkRooo9TSkB5RvjP2dtKzMCYkgMRu565u8qy5Mu9N21E19ZrqmgrDC",
  "key9": "3HaXV8r6MoeqNzg5JEFMjmbwQuQzip2HicgbtgmZTTM9GKkbeFY8CkRuQq8KtAmb4TpSiwBUFFkF44jA8nsTEHby",
  "key10": "2BnyYefPkGpessxpznH6jZcit5sQR2u34KGAueMLxnZMZHsZEc5nUZF8cihvY4dntdQCQahAJa2JWUG8pLn3pb4K",
  "key11": "58mHr9746onGr1boKvsKJ6AcfCPLssiTriX8WLW2QwrDwUQJmHtxTqAJQfTe3RBqgdvdrzFJeKPmqwZ7ErduHjMx",
  "key12": "4YSgfq1yYBwSuSH64GeDx3YfuSwLeUwgBVJS9xxC1nYjAzkD5s9PGg5xLWhid4wXa1LfxwwoN7aHpa3eVNgWYZ14",
  "key13": "3o5z8XmVp4r7dheuyjtmfv9bvNCTJg5YBhUFEKo6gxUJK1G9277e9pxD4JFxPhhKiY3qgJvZdRj4JqFdxUVyuLoa",
  "key14": "66E5XswexJ2xUcuFeD7SgphPiozuXYKH4FaUjFo9ceexLwQVqPVvwBLpkT67PzrcaiKKDQbXkRQqZApCR2oW5C71",
  "key15": "3hH4NW2SKQvS1UNitxiNoc8t1KDpXc3xYuGmVNe4UcypiDVQFzLDqMvkuazvwpqR3JS3jTXpVAJxQAKTrzjhArjQ",
  "key16": "3YtYGRaKGsYq4b7At95kH7McP3LEqDvMqWiVqDcEFLTq3k789iBTnsH5ZLnvR78oB4Fuf9yGqbjPTrCKt2HjPqj2",
  "key17": "3Ua1VTrcwsJxKCqgQKJN7WVjEX61k8SmC6AwozB2p784r63jyekgC8PUG7kffPWQBFrB5XMKfsfj5kyscX3eciDX",
  "key18": "3VhJBDfM8XRxM7opwMxGXMRzPHWQNNuuP1Fga1XCVWir5ABtoMvSLZJaJzWyqhvG2zJEaHEdxdxinrHpr6KB6b2X",
  "key19": "K624k6SSxjcZSUhkDGe9W1rPWNrcJ5TPKEkeYJmVp6FNe5JdjbfNH8jSSrB1oDzvAQG1YRmBqSfibJkySE2u2kB",
  "key20": "1fRFPiFQw7mYJFqzLAfUvDLFpwuP88nder2Jd9HtPc9RXWtcDDpKCYZYGo77yVdDH6Dx1Ziuu487P7b9aEwFbdh",
  "key21": "3ubuZEcd4XLUPp1nSyjAL2XrMPwB2pRCp55Ndq78GdMBHxwWPrLRHQrqEE7vxQ5UAJRBHXEa3ksnh9cAsBUxBskW",
  "key22": "3cuVdXQ4UgA88n72fVd85woR5U2oWGnMWzAhtYwmx2UCVWTCWaKjUVHuGfJQ5AwXVxwtzAQo17r8Sp6KpRoe1PXi",
  "key23": "3kcjierSYGTifDQPeeh84vjqTFKLmRg55uNfGbVguGWM8rp6nYRF5SYJacDfd6GAicmC3o7jUuaJrLHkFZNJfasg",
  "key24": "3tja8gZiYbndhjmPuiz1HjH5VNa9bpdoK6Po1njakPDwoRcojXfxdTqLAE8e2mtbERegBMfknPz3zMogEwnrV9zF",
  "key25": "2BPkKmT1QhGjckE2rsG3aVdbzxFCBvkwjRkkfNpu9CFsLUHqRLS823PxzteULha4qasxPCZYcMLfta96gG8MG6qm"
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
