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
    "udiZXXfm3FmE7k9BsTuQ44Kx4czRFN93qY66Vsigu3m1gzydwzTeY1AeA8h4Eyzs47rB8GMKKUuYo7ucMR8BmiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WGVry9s5dBgBDdsWKvuqdwamDGgWvD4WiRt2D95BJRPq8xcDApFPrjMTitiyCBvfZ56qxBP4T1qqXjYkDQpQK4b",
  "key1": "2rZpWaAQBfz5M7Yn9nQzH7piuJpAEAe8n9Zox2u4qvypxkgb7wxRaLyry9UyAKt893cgFE9tJ8K1JMRzyuM3xe1T",
  "key2": "kiCGAsY8enyUumwbCquYMuSTmUTC7vtb7tuPbmC3i88H7YobwZ7r5WNDtPMqRYntDci6umfjGmGeNbSWFopt2NP",
  "key3": "3pvi5FRQ5t3RmyzNMdTX9HT6kL3T8Zcd1GCZe9BqbtLMnEDNZdHbhX5j3qXnQp2h4kQGGyho5YsYTg4qrjdF5JcJ",
  "key4": "3RbtYfJRy1HoiWBkmBj656VAvrnDZZMFsqesnV6epnLVasUC9Wivk7Xzb38Myq8axqSUCoNvBrULG17JzqxDp1qv",
  "key5": "4PMy6ooyVuugd65y7kn56yuyKf1zcJhDq8LHo89m1k8LhhTScoGsmYpYMU14q26vto8x23pZC7FMzXqwBzgNQD3f",
  "key6": "4FnHwNDyNya7WhPTPEMh2VKBzLkGTupoSWoW94xh33ri6CUrVCMvJQALSgvDDWK716atQKSfd9i8v46w3hhk3mf5",
  "key7": "43nsDJKCPNyepV24guvhcG65mx1b1n9yGwBge5xDUEkQAi8whT9DJCSuUzihAmAQEcUC42xnjZG8qjgGxDgvwgHn",
  "key8": "2dfkkJip5xQNSD14yo2W9aQ4jr7b2zafR5XASX3Eou2PTsDQbcb2HQs1SBJLbH9rQ5KeC9nRfKc7HBtDJyGN8vd9",
  "key9": "67hrmUT96o5doiAvby5Vdoy83w5Qsg1tktYy1s4RebSYdKLrS5x1rpTvbeogHtCmUZPYVaghRh2yDmC8qjVXuvgU",
  "key10": "4zMbMqZWzsLtbgDqegSqzEKMMGRx94hgyefTPrL9WeAAwdAQfQopMyr5Py5qDK3cZ9wGR2MQJ24Cm6YYs2h11Xq5",
  "key11": "3K2y25PRq5AFkDnFWiAx2DRr4SPDvHxPKfjd5q4iih3XdoDuqAFgn9JAQEHVkGJR3STuEhMkV2EQqtd3RYqnMeBD",
  "key12": "2KYSnjo2jwCXwXRbsxqQyrZGi8D5zo7YKDo7pFj9YxLkNsrWuyCHGiD1UjCa1r619V54fgshPToLWQgcCfHJfNXs",
  "key13": "4uaGL8swadHS4YG7QU4fG7RELn4cmu5ZXy2BFA4Rign5bkprJ3QmPJdqX4YyvbmLbgu22eAXh5mXyB5fytq3PSTp",
  "key14": "oMtyMTgFEGkAA9JG4L1pkVXXmcy3mwgkxt4WkTCuBBvzHhUJVWv13LsYtpji8mfKT5cgrNNxDE6wTwMJM8ExGEj",
  "key15": "3Dk8ePea55HnQZ8LYYKcWERG1kRPZfbVdyeLoW6B14Yi83J2bHvVuG9NCZZHGoGLdGWoETeUcp1N81ZWWvnbxR4a",
  "key16": "3DpaarupT3hQGj7Z5kiva5K4bqcDp4J2EZ72jNRaYdx4Z3vKVxA5Ug26TQy7xTZ447nqJATwnfG1g8fiXZDNfQu7",
  "key17": "8ENowKNARMEvc2EMn4LtSvsMSm8Q9AXMCmjik5pGC6cirGTUnzLXxyCk9uadkYNFY5ABf7X398h3FoMZ344zrUc",
  "key18": "252tUKMUffLtgX1NEcPoxjfkGD7DcjSV9GbCy6wQV6F6Rs1siLZGgHvPLqn1BkddozpLfVuYL6WUzGEPHwHntXod",
  "key19": "4NVdFCjyDMmGEt5Ei6tvFXvR3uziEQWLxufgYRMH18D2a9GsTAQ7rQCL6LQrSC2GZ1kKpgWfnVbZaWXZv8D4Etz6",
  "key20": "3MJpKS68aDxtNxzVCw211o7gDRjdQQiCk5Q2jBF2ZBrEbwwMLzSkWJzrXGXwMUugvCzsWZYu3azYokev18DZHzRf",
  "key21": "AcNhi5pCEv6VXnM1xymVFUqRNUVLTc7mydKdBdmWZqvguUM9opUYsUHH5cY57JMyMFiXxev9YQb2rFVSVFkTDgo",
  "key22": "HjDVgMmV43i7cvNTeebyc4FF8RcVrmVDhfVZ5fYdHv5KA2aL129Jc35UgCXTi9xMxxocZKfmbeyUZ3Hy6vq2V3h",
  "key23": "2hnnosf8WHTktiZ6yg7r4G5E6iz43wcHgLWb8CpmuRsLnud9aRRMdT3E54DVqWePv5i1oYFUwuuLTruYrgg52LGd",
  "key24": "5XHg13a7kThTsswXjpRkZaBeKdBvj43ajodixCNGirXgqGwB5EYZjUidpZ3aJJNagPEwJEETWX1ngyFr85HkWfhV",
  "key25": "2hwZKUbKqe7ecLpupXDKoB7HXDctixp3dWSFrTXjiTxMA2CHWVFGGD3U4U9zQjdM8TCh8YZh1itzrBfYkuPtshPY",
  "key26": "3eCo599Jz6eD4JMcUabHQK9KFuLwkgmkF6BbkMfJG3KFVzjamVAyek1VXwWmnMzgQyScbZPwkUuccaZ6BXuH3FW7",
  "key27": "5pCkKsFnYH8AuJx6rENjWV9WrLbE2quW7UYHEBuP2Q1ThdhsixzVughjicxYstg9arEWp2vxvanAq2cVs4MG4fmE",
  "key28": "2ggazBAzHZN6N4daCaxPQ2m2SPbXsrEHUZhJjUrTaRJbxwc9BzNxpkXezt9dWzuEkMk4JBuArrpvdrMYbqokPXKT",
  "key29": "BdeeNX14UwLG9wHkftc3U9RL677eno3fTG47DebV2RkDphjwwSAy1Pctvbf5WxnphTm4DN3wDoBPAGQF53eybsS",
  "key30": "65WoQk7FyDRRniZGE6dTmTS8LMDebG8XXG9Z8e5vXZk2E1EP4MKb4PuNBGzp5sP9hRd6DpT9JgJgKMv2u2T4VQnL",
  "key31": "BzrZPv6DbMPcqvHrnQudfWksGZJVAGcHvZy7kiSFYRwsFFcxW6S6vh6T5YRKvVYPh6bU68BuqRzJcoseRMcHfs9",
  "key32": "3eBL7PVpH61D8sUfwG5sQ9jvbJoFy5HhbXd2bvGgfTycN7WzkXdxx5Ks5LjFyP3rkSWvJGej1E7fhBXdvjMJRFbW"
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
