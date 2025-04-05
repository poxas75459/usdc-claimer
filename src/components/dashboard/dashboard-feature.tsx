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
    "44emquhby4J3H3Aw1ZukeRuZiJ9YF7eT16zbF5wrQmo8nAcvA7bKkFYY5AZuHLJd7WBvK5KQUweatSue8ze71AF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PPCr6DqNoz1DmvxqrZYNLisDQRmQ7rRbJVDzcxKoMHF7xZRbHctDE2NmyzR1WVj97EwoiMvEixzLRRHPPKXMmQv",
  "key1": "4H6EmWdSv2Zaumei2gUYYVARVHU43HTojcxCo9VqRCCpeS275gc4Asr4dqtSgJXADXzAVjEMxn7EYaUyJkq6DFsr",
  "key2": "66N9CHMkmCr9nwHt7dUqiURjrRJNVr5ptWKf3zLoPrLVnvomM5tT4SY4hhd7e2sRf63BAaX8fZkWopvgHsgKa5vW",
  "key3": "5CkBwQpoL7ZhNLwvhAjDDhtscfmqLV13Lgu1uYGdEcjaVTA9HyHeai8i1HkFDs2r9Knngdb86vPjg6nq7vDUjfUY",
  "key4": "3k29LomKWNV3cT9oRchULFV72EVQWork4yn6v8eSCuPagmuMZgxM2GcxWT2BX8RfBPsfkeiJ7BZHjKMmALHCx25E",
  "key5": "RJtnaPUV4EEETRnAQoDURf1ZbSLpeLkMKRLaK7eeR7b6MMDAUmh8it4ASYSJa3pz5md1Yqib8mZuyE3FpzbxcWd",
  "key6": "2R9tk899rt59qffn8s2FZZU1AZ3SXRJRUBCkwKC2Pxc8XiQoRhKhwKtQyzw89wpW7ZzFVUPXGmYraGW8h4qkpaZh",
  "key7": "4JrXVKY7fdXHHH3mvLWACvXszU61dofqMApJj4TtFEA6jNxj7CfNBWUaCknpMhMDPsLQ2rDq5wnF9Mz2i4brqS4z",
  "key8": "5zEAe3TzwiZiGyr7ZKVix5Zu3nMufKG5YZLme7SdPf8dmB6SET7Mha8Lu1R9DUJ3RHwsHSuMGRp8C5u9CuKbSGuP",
  "key9": "K74fZJ7dJPQLHCdwS4m2KVw7nZn7ZVswWnDdyt3VxwaJr1h36VVvvn4ZkszRdUoYqQPQZuRGC54kDF9e6zwwQXw",
  "key10": "4vYD85g3kMBECi7cPZyGtVq8U9zoL1QXbRK4bYZ6pa2HBgqSCEryagXneKLbQs7HvF4jHkYhkjRbKZhkLJMXKDNq",
  "key11": "LDsvq4prBELmG7QvLKonXdXx9JQReH5PXkTEFk4ikK6D4hcYK58FfuFzsEZ3i6CoMjnkybjtskP9P7REaczMaB5",
  "key12": "23tr1sVHcJxwDnNFA2T57VCX3Yw9fgrpq91nnovY9Wum7KCBTLGeZSDqgtfQcgfRt5T1eBCgzsmhfq9asSDsbe2y",
  "key13": "5if42o8yNoLpkhaXd8VqwqQXmJz85Dd8NSA31g1dHf1YygTGQRS1UMaYjGutz7Yw1LgpeY2ec2DN41KEpjRKvZ7V",
  "key14": "5vtkzf3GhcHn6em9AK1fVjKT78CrCx6jZCRqQBSwSrn43WnH1bVL3ToMU59QiXbkuqrwVgxi7cjcQ3oXAzrMcrip",
  "key15": "6bBhKHQqcHnEeTra4QDN4dPajKoay22123hfYnRBbqpWQYk91rmbiDjhhN7Sb9y7ZMACYZMzbJ93EByARyiHdyT",
  "key16": "2B2RfCJr5EALbfMm3TbWhGSay985FfZGDyTyQGxvkeRFhGBqV9WHQWzXrQpqu6dfo3Ycsa5CXtYis7cbY5ZSnmy4",
  "key17": "52PzgpCZm3h2HUFvjqkp4KQ68FfstFPf1BHjfMT899tpikrYyr26PEvCrXvigFcxaGXCP47tSBAruCrSmnvy6Zxf",
  "key18": "4TZATyHVYYkZ2D5Mo5fPVQf4CkyKQNpXUX2xAYiZVAMge5tYN97hLqf7mifMjYE4aVk66z2h3jcyEbRr4Xf8cyL3",
  "key19": "2vLW55CCwe4RuDoPrkaakrwfG89ejjPmi3kDSuBFDMQEFeEFPQCgjgtnu7LEoGP3WstMTP1TD1woZ6cbV5RDNpVK",
  "key20": "2zMvz3zkNR3uBGdDmdtg568Mo4VMQ527VfRsDmpjF2VEY2yqUPbUzxuRXLQCC7de5mqDwf2MbBBnzEAQU1fducZf",
  "key21": "N3iHZsxC8Ljm1LacXwPhngeBfXfo4dpZHiRrvGknkihenwm1VDzQgeqkcJc4LsJWXXDAGS1y7sxygEeDp7SwfYY",
  "key22": "419m7mEv98bbYQLR7DdG1qevoMrvpWyaWy1GhbeurHAYGAZ4p5iQiMXpp7BkmznLxVnu83Bx1s9eictsVYCuNayH",
  "key23": "5zPzGAyjJ8kEB7ddoz7EbG8XBqTvpwCkHNnZVVfTYZjGFAQRtFbeAq2zXzenzZJ4ddoDx5kQmUrRTTUPyNfcWf27",
  "key24": "5G1yhZjcTgM3qZ6jmcKmb2z5zx2VacxEVNDt5XewhT4pQsT6f7wpv53KJD1CzFZdEz75moVeoWiTZE1oKUa8VzXW",
  "key25": "5sjTtq1shyHnPLSPifqkpoTTrPMYyeHSbJZB9AVtmVJAvGzu7sDneXpk3CByAhu4A1ZVeJbm2BqKKtzXFsPX62DU",
  "key26": "5dQhnCkHB2j1zioJoDugzdzFEd1csGkJKMGqpsjf4o8FdVq5zwERcRBm4tJo8sGt4scszJ9rVXbvXEj8Z9d4cLW8",
  "key27": "3eLLsP2L7HdR1EYMSmAfoT7hrmmv5G51W7LQMJHZARAkzmzUAygQu8uzLgct1jCCiR7sJy17RmNBBHkzFJdm6JYf",
  "key28": "5njoZ8gV5V2SE55E3cCiNbMznCkfmjqUF9assk3BJQEJMA27atkyuvEs8WGefku7X4iq8ujGHexaLZddduTPJDZk",
  "key29": "2dWAoGZzyrtP2QCfvDUWUKnVXFgSWVXU8tzt23E7ZTgHmrdiai5qGThwRYhDSXMVpMo4jahZpfRsXA7zX2iVEkUp",
  "key30": "byDJ26Rv7opdW52JXWiPwhCCnLY2z8QFPgRR3itVERQLRBpWGpRbqqsXAqNw89MZnjvfm2J1auzD8wvyzz5s2TT",
  "key31": "1D2UoyePA9dwjKAdiwvZzLZYvXUXrN5Ss74tEc7fhoaBh8zdHy9cuggq4AAsVRyvBycwsMEKt2MpqhtYVm62n9S",
  "key32": "44k689MZYZrZfvsDKNa5AMkQhtZoVtyWoTSLV4Ni9oHJmMycNyX1xpskjHw3VgiMYJwEfBXpnVKr5jLoMdKtcxy7",
  "key33": "2SCXGRPVuSxMEYZuYC6NsxxCrhxAGr6fyQLZGoexxuV4scrqSU9Wxd82Z3hg61bVrEz4w1SyhNTBZR1cPSysmqB3",
  "key34": "4BtzyNM9q15VzyHV9eUc5MWx5FgFt8n26w1746YGpDNsXDUzmGa3hXVvRyX69LqrMRQAfmPgW8dJ64W5mF4LLbFs",
  "key35": "vcPCcy5P82izzrWnDLnd3oa7vRHbL3ZEmdaMGjGgvhTYVomk7X8gs7kNXHT4ehTMnEqvLRUddcsP8YeimqPqpU1",
  "key36": "X7fUBYp75y2aU3W8DJH9okpbU5TdzvDptM3Hdz11XTtV9VcJUWbfKcdzVweWx5JuHtoj8c3muRHp5SeSDgJQQfD",
  "key37": "FuDsnBYPhNFyNdjoqgf4savSdjv6rFVyEk4tMWdVdPrhkuJicLZWmfXYZaFpqz71Kh4zgwDWGe3U3UkAJ5Pr1qm",
  "key38": "5onFhpveA3qs7K5utoAqWgwjgaDYLdq9XS2FvHnufennL7Sncbr3Hwb5oANi2SJyjyWgZnAFT3a1vdMbxbMxTjxC",
  "key39": "2GZTAx5qxmgx2zGTXYe5ovaFvnXi9RY6XtKRQeTtxhUzu5rTdxep6yxLtXNksUg5gbNLscxHvdQ7hmQ8PBB97p5p",
  "key40": "4XYbWL6BRewyHDJ2nnZBxYMP9BS8RvkSpiW9Tir65SezyMYqNY1Af6FaHPJfSELxKJNoZVngiH3EKYVJYhpvS5MU",
  "key41": "41tmQ1pE4S8ypzce45rmcScZtYLHmcENm53CzeR8EQQTojNZbcZYdzHXUXKAv3mBWnRzb2HJst6HxqEhDsKACBV8"
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
