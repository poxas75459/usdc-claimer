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
    "2rjtnPmS6VqLbKm9BhJHcaP8FSm5zeYkgRHHa5nvPQ1NzmFJ2XhXJFRHuDig1v2WBqcVywcGXeXBPCfiWAbnawqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QSNrynYBXzWDTBA8iZcrBa2iVtAF2qDtDyRfHSggkZjYxsdGQWoMsFfVx2t3whh68BAnFsr7JnexEFW5JnRsGYV",
  "key1": "4MwyVjbFRhxc98XV4k7jKUtWp4wJEVdWmVUg7tjdDHDngSg7CnRuKp7Pfbw568Ko5fbtENDo3c4K211VM55wrxo6",
  "key2": "4qtNZyxVpi8p3mXyPt6iYZ8YH7oL3ee7EYJMjAnUeGjVD4izbsJpK9G467K8F9cv8YHEvhHGPhEn6wKFSkzeyfYR",
  "key3": "25AZWPK9uisyTj2tSWLWV9SYyQ1QDxmGxXqHUQUFkxtRGjc9iynieEFNgLZLaR8dWMkioERGoJ2nqLEZshtGhHx7",
  "key4": "2vzjjGvBjrN1LCXwE7W4JjnhSHTrwLN4P5535i1XGXLyRsztSJC9bCF15apM9cbGqUYtkcUADiX7yoCHW4qWAm77",
  "key5": "34iXPPnvUyqaVN2dL1tMNH3eh9d4N5diQTPQ3NndqbAjS2PHDhvHeN4ziSJr8z9Q8G2Qu3wmNnZgbhzeadQco8wn",
  "key6": "3UP6XmEHfVqQpCtcYkD9T8c6dwbQWCpzwbDLDMjvHNBLCAV9uWfzvgvgvwd4rJF8vZaVtdramDz5F5n7Ux8dS6gS",
  "key7": "5dsCupftD5Jqyo9zN61j4CPZhTvdQ1dSFvhHnQ7j32CovTDaf5FbJqgPs7WGVfxjoPGfsYnH2AZWPYZ1XrWJx5wQ",
  "key8": "2cBZQ7xJ9i9iSYttpcXGDT1MpeGEr7NWPzkrnbHf5avko9WC51Tend28pHQo87STnpbLmsrg27yjNBMmeveb4fBc",
  "key9": "4QwAvQmYRyP3dKdZbLJyaqZoeNszNi9fmzRdAMswmruV6um8fNbVQehCa6ZC9aDhDE1FRCiB513horyVAbZ6QLzK",
  "key10": "3ibLKbiELdRTAnkM6mMjTho7vozY4FGZ3iyKz5ZFeXx4RJXXrjtkRtoa4t8LM6sg7GGiarohDykPSvVSb1S6Rmoh",
  "key11": "5gnzYpmvxkxJJ1tpbzPMDAQK7JBLkGDuVxinrX66kqmzK96K9fgyRPcHM82NG1eQDwazzviLNZ8Z8efoNQ2c8LLe",
  "key12": "3NLvXCuCSeapbssPE7QL5MCKczpdnsiRy1Q85qR647AsKaxuz2HAkFVKdUJVaftqy33p4ccBWjiEcL2prmKyYGSX",
  "key13": "53M6gYzFenVg1v8fBrh45PvwxZCb8ra88mfyA98usSF1r7idjNW1zHJTJqwZJAFbLZMb8JyudZKm2abfpMpkwuV1",
  "key14": "X3VNBhPmaXMdA5Mivfj3zPyMkUbbBFgbMgF467iSVvBzQ4eSoHfTqm7suouiVuSRha9MXuYB1Eh5rxDDa33myRn",
  "key15": "5M2dL4v2cjJ1VPuC1G9M1PTQtod1JQccczqZRy5zTn6rEUbG23jDfE2RoQkB6oYvitceE3mH2hyWpkGZyYQGacks",
  "key16": "4pF6n1Z2VSHzkvUfBSfa89jsFoHoeKk6r7Yoyhiu6VKFqyowXxXUcNFH8D7PieXvz6Lp8ArQUoD3v3Q7JJXVB3AP",
  "key17": "4mB6xUdXELnJHkyyf83LQbjQcrb3S9vj1MdFfP7jurAbHq8RcJJXg3EPTkKamybkVNXcvUnsv6DdSKENf16vM37v",
  "key18": "4JWs8xgfXSMG4iTPHsgzmae9ZhGi4NW6fxwEhwEqJ1VSEU4NfMxcE5tS6XJHXVPXGm7W7uk8M7DihcECyAjeRoiB",
  "key19": "3Ho4oWKB2uJCTxUwHenshzh3HMxAtT2vamCQoQ7kuBh5feZ1JpZenPfqEwv9XMyaMF8LDqmfxLPBEapAvGqj5Wt8",
  "key20": "3xW5rPcagxYxbBty7LMiZsEw1UyUD8B6wAzcqbgnhtPxTBrGSQFUTR9q7Snk8TEP6RCjnsPwvG1rbxYBa6ZvaA89",
  "key21": "56wkDTsPd9QPxAaFzzszvCSBFtz8in5LKAmg8remZKMZ4pgZdqVXNDp44SfCoPbGuVMB6RVb8YX1ZtuJKcPp3dwY",
  "key22": "2EjC3S79whYQj6MXyeRBwbRVfKHvderWhfYWCwooqFKLmta9qzM8eFCpQwy9eKRCqTB2RkMo9r7SqgMxhmqMHzFW",
  "key23": "2zD5dbvBgXesBZBuhL2mxX4JSXpKDDBRPtWp8LSwniAGZ2h42WZobWaC2nozV2dXnqEJEEEsxtr1cfL8NCWPNpis",
  "key24": "5kCzCUeibbz2CgqJAfXbkjA5pcsSGtNszDxTPWxPX8CUHvyT98JYp9LKwJSGtSyynx32Gav3iwoWuk5hbEkHnbTw"
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
