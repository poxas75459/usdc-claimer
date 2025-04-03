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
    "i47pVq7h6jExAbxqDrxvr639rfey2QKxtLsg1S4cHvEcu2bZM8NvZio1mBHDuGLdAZrpCieo1jSBhbUmMDWcaQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r45CwmE9qmXc2KfMAab1T57epDQYWc6ZmXBk56dhV1Cis4cWqJnHdRwRGduawJ5TKAzU6cnXddDpr9MHY2F3pur",
  "key1": "58zJBfdTKRNuhHgQvFRx2sCqbRjiMSVSS8vjKiQxPMxbYogUhAi487kPYmAxa3obREAvuU9318C9zSy4uvPHqD51",
  "key2": "5yirwDkG4dEiizhPKr9StZKRndU6EdTvtJByUenBibgpeK5nJkqrJcbRfJ4EYj1vLAR7ApMsLTkPMGguWK5Q57bC",
  "key3": "vsduUWzVfguUzNqVm9jrPxsCcb6cXKoVofWYpaBZS3YgmgJs7GYbmzRuL4DG9vhrKTWDuWmMn3kzGiS5Y4Hwgqt",
  "key4": "3sPpMStkCHCtLyFRbRPtGP3qpK8DHeAwjeSZxfpGnobB7pYRZquGg7Jmqvbo3eEbk27C2569ko8Nc5mpmCzgz4t7",
  "key5": "2bBrUb1QmwrnbNdWiohBV5gTghvMDCVajJrq3szWjwAPBRHLHxZNzsRA242JDaDLkCAd1BcHbs7USKDUgQEimvuZ",
  "key6": "2JfEdao1QJgZBqNWrn8wBjcC8QduoGNdsBqBAn1tqdKuNX5FhVM1A7wrrgVthCPZgzE1uFnXrsKL8w2UxHgJu8Dv",
  "key7": "4nrQaAVCLUsETn32XTETfwHZEwcXnSBBjMpx36iBY57FzVTFyTsDN6UJxDDMmujmYd6P2M7AuWz66ZMBCvsjPcU9",
  "key8": "4hCZrDejWfiKFVC9bjiepCbjS1ddnVYtdcm4KHVBMmwLFaqWYLqhRnGV9jfddUu6GP6vbnuSdNXf83YDhhtngn6t",
  "key9": "4pKhCjYhmfRWTDxEqAuLovquqpNDguutoUNN85izEL8s63mWarxpXQhiXLyPm69KDiFxEvXEfFAqcuE14jwUsMuC",
  "key10": "4ZVxBmPPWQzkePpu73VsThtjAKzDAfBGAHzxkNvzvEvp8d1fmRWxnsbRLqfi2SHrRcbrfF5GYApuoNYiVsEzY2yr",
  "key11": "5QvxY4QCAGkBdW9AgTRegKNCKCbQzDJWxniDZH6pAGyLQYiYHUTNG88MN7BZs4eRDEoEwjM9gJ6BFPozWgjucbXB",
  "key12": "Nji1fZyVE9VnzjnUrdGpc4HMqW5CvcGfvDK6V9zNt6WEkodPT2vY5hRtdJkMbzfWTHJiSjVTCyCL51JbfV6iiMo",
  "key13": "25W6fs1KxduH9hADTLig3TUSW43E3EpXSomLMZDct2jBnu5ukAsfXGsi3G6d7RFyKRcgtRDeKfpxKuZ69r1VBNZA",
  "key14": "28oZztGBwZorGWXmKWA2v1Rya9ZmH7XCL3ccQDVkvMhhTD2GfQwgmLvF2Ui65Vf9UmvGuz5Gm3wiLNyZB1CJ8q2y",
  "key15": "41PhRtG4sCDcBPnxtsqk6NGSr8RkusDAKYAmkRNtrQYRAjjA3oTqTAzS2yHNGsVZExYW3fXG2KimCzhUj5dLB1QU",
  "key16": "5xdHRa6RDVrUdwhtJ9pp6acSjUz6ijkhbAy96ECkN2CruufWYa72GX3aL8vYjRGv287o2x9ep7Qaonx1jy3kn7vh",
  "key17": "534VQPurYfMrwwDpQg1wBJ4kcENiARzz5hWHsoTdWGqCfocuyKcNQHiuZCMf5ELjcoHHVXne3qKRxm9cGZ3SrFyt",
  "key18": "4Kh4P6DuKS2wFnt9LAcwhmkwj9yS9bA14uAxjHh4kXSm59n9mgiF9MKGuW7NF2Yd695uAvHHY4W8agRKnLYrsYzb",
  "key19": "2J7eTccYNNjjKfhhL94BLMPfNr5nbh4ZvE5LT8rHiiPUc5z5uWqD9QyEC2RyYpFoG4wSk5nb9YGQbDkBvzJuk5jf",
  "key20": "3cbTiH2R4f8M39Jk3y6quRsiMW2AEBoBC7k6NKsksuNXUm9AvnSFs2ZvFch4r72jXvd3ZkcdVqKXcU4TMkAPcAub",
  "key21": "5VX6iqEUzSq8smdkVg4g5Z3f3fPSMyMJ7kmqarLLN1BqPKKS5ASwZ66gUMYuTSc6HumzCxF5caKvdrDN53KgnmFW",
  "key22": "4rJfnJtaA5HaL5U4aeVw4hJBD5pTr34EL1rD4Vj6vTzmFC73p1i5CTU3ayQzGJAkheuGG9DgmWSujmQdSJnaVfWC",
  "key23": "4LCYgF5Sq8oTvj3Ko7zZXyDjxmyKjZEkV3J5x33ak2GZFqDu6twrdcX7gqyxuRnmiKYbNcKGLFzLSpEKUuGfXYpU",
  "key24": "3xMPFvceotxyBH3mt6TX3XJKzskki3GPQt4Fks8Vdbxd5f3ebNvFdAKTfUqqio4XM2RuSCpZ1rA7pNLquNHQHt9j"
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
