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
    "2qi3vNPEGUHLyVUz3uQ2jVEwgmUg27Z19gb5vvhyCf4Kt4hycZ3V19rg6rKzpRAwUL3xrUnH6aMSgHtLHzoEJa8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "546FyMurDUtuAadTKHMJQdEcyGwgmjZ43bFWUsHYh1dshxHZxGLAEPjy9bmJSuFTaaw1FhaBnyJKSJkqY5HRmVHL",
  "key1": "2NYPzX5E5EuoKvwE3HiKd4SrNabHtSKmaphhjthNNLvF19qncoPwXF8v7f35zVn4wRxw1DBBbYXyUCAha1KP2DuC",
  "key2": "5TrfhsA4w1BBwPZk6Bvqd6V9E5ZR5TGvGKjVqxqT2gJYEqtNcMDAYGUFayeZ1ewn91HqAf7FPoHGinHXChTgzmyp",
  "key3": "3KbDARXHRQEXanczVurhZNWyGhGXV1D9tLJiXK7LaMWbTNGmuvgXXZMYshLCFXvtTSfjfFow5RPjKbZJcAMxZr9d",
  "key4": "2614azC7Cm1gU8eRU2qMuxKzVxyRMUFsz9RcpTYhhUKPKQRS664ighA2nVSntS5hVn3iKueHv4FiUa2FbMpoMY6B",
  "key5": "4JjUUPDLVx7vGmqo23fvNzWxb1cqed2kAvSMsNLRpv7cwwzapYMsESs5ehYPuYxPtLQmfnUPoucUtY6K5rrVVP48",
  "key6": "3AdxKdAV1pxeTnQVtJzhPAD8NTnQKxCWCunpyyhuy7BC5huki6muRsnZWvUyCutyyoqGxmmD9mBKhYrohk5L8yhm",
  "key7": "3eLENpuprryrgQKzXz9qTitgxezqoWaQvdLKMVqTbxA8JSKsf2fKCe3EzuxQD2buUYBB9B37UagEPtG6jwrixCsU",
  "key8": "4DGJVd1daPoZAUXKupWf4mT9bigvbi2UN4JStoNJSqb9aTcwLKUHdTNsx1zi4FiJLDXQtVCThbSc37dmWzR5vjWV",
  "key9": "4WdUbeXuzJS7JKV8m8gorf2TctoP7z75mZ2ee8dFD7L3r4rRAAKK33dC2h8ETVe12XFhfh1bRuwZB4m9GFQ7A8PH",
  "key10": "2iW56QCUjuUPqkVZxzC6L3HYVMFBF4hwsY3o4YBaGMooCJxkr2eaev8xmgFf31gmXExfT7RM2CBjQXpsG5WytDME",
  "key11": "5zhhwHSmgj7MeXPcsavptong4W1hTYEjVSRcs37XjfGN1VJYYKGeoz96HYdmjfCTKX5AcVg5W4uYeYcdYNmYAo5X",
  "key12": "23sar8chwnVJC5hKkziufrEiFQH4QfoXbfNFcZUJXZjNAHqrTBECGsd9FXiqU5d7GsdB9kLNZLGvCVA9LaA73TAE",
  "key13": "4PGMb8PV7ocF7WFrpNhafNvNWR3ntKeNtq7BLwQzHCMqTiYtLMUwyKeKxvyDy92QzCgfDcQAidFmDbiMXQ1coT3T",
  "key14": "EreErRhHGpqZP3xmHQ6ba6o1PYQ6yJGbBR4Lrv1UVKp3eyA6XEvzFFoakoM9AbYZcU8mNkZSZDBRLY95E4p8apb",
  "key15": "2yJLv2EGdkQoaHTLzGEDeS6nDCPM67fjMobyohH2mDsrSikzXcjE41n71RSyvvBmWuRaB2pabnLfn4KjDm4Beh74",
  "key16": "3yVT69sWPD8wXd395XKqDyZRKwWaDaT5NpRTwn7Xnmbx5SjoQe1eCitpyrzfTrX1YPnxpqomk92LGTSz9ks8amjh",
  "key17": "3cX3kHUWbvKRKe7ShNdTENHAVz1N641n7jqQgh7ma6QfJTqrethfKervmHC7a4eiuTiCb64tEsfpgdgGdaSTK7g4",
  "key18": "4RSR893EXAQQoZLeq9tTAht7fvjkrnKnH73nPTnYkSTLM7fzDEJQ8QM4xdMMQAqq4t6DTGYuiQvWTQP8LmYVA21D",
  "key19": "3meMzvkHnRaaPHM9ijhRrGUfSDYcjX9zgGkaSvbRKoXWDJrdcvfYFQrZpvpCLTqUrxmQX7WCwZ51eNiwfhB7qm6n",
  "key20": "EWbt9YFJM5a2NJ6qazSCxXwvL9crct5C8N1WJGZgcDF4CwanEjXwJyE1BNQY7397WuTGeNjPyQyeVnxcoMdHT8G",
  "key21": "5hooX6MSWCrahrX7orXKDnWJ6R2YAJka6rFW5xZns4RjQ7YySa77eArCNA7NSmigf8nMPmYP3UsTmNuXLmYuPJjf",
  "key22": "3Mz7rEGWedPbv9EXQzybCRo6TGCLoxzXwct9Go5xVtFKuNP82y13qrh8RPPj6ZN8gsayDgfgqApcnLx3WofPRNXf",
  "key23": "4tsP5s6AUHmV9jBA1kdXb8uPLUfg1ZVXFKshQG2ibC2QkKLsbVnNDnKFopu1C4QDLDCquuKa28vTtK3ApLQB8w2P",
  "key24": "5HZvomF4ekJe4Dp1jirAZkUBHE4aBNXsGDw2AN7gcXuK46VAQzX3BWmaH6hJkk7SEworo49xymHy6Mn3eiFB2jnz",
  "key25": "42NDL7R5JGLFsmbCHu9ngCkxTudvTD2Amgoahr3j3mdiisApaYxQRb6ujiDVzvZcBDHEohapR7FbEyY2RXsAAUjN",
  "key26": "4XwuFznceUtUs1aFSYH8qx9ZGgakH92AKEQxo182AkvNdX1cKaxMLYJmrz33j3vBYGde7dW9V7NY6pM2PuLvVZaF"
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
