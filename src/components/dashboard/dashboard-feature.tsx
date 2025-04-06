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
    "4nmefSoBv51oJp6vUpZUGgvC797ipidffYrYMBV3x8gpMVi376PUTMk66Dch53KCmLHwVHQGajABt7WAdCCLL1ZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EjoUeGCR3KLe9MfECcbjYmX4wd5RvokkgizGA2N9jSKTPzStKrjc9ktpYRsKSn9PRZQmn1kRpdXy4nacHbt41xA",
  "key1": "45BrPyZrxsP1swBcfruUUv9J232fEFNz8XgbbxwBqnD9LWwifcYGwWTrTRjLNpDjrCHyt7YaKUjrE8PDdrZ46v1E",
  "key2": "56qGFSQtuoFTPUPvWUrqFnsGX4dbEmFrbMG774owuMRcnFejLkVKCao1Q5V5uuTd1TJnLbHjsSBDm4pKnfczkfuG",
  "key3": "2NEMVajK8e9Djt7578pjMBt8esXV42DuKtS32UsBewSLbiNRp2papzMGzgBagZf6iBznvtfBFxaezYE6iBc3Lkkj",
  "key4": "66zgBhEPrY3xiuPfnsNEGN83JoEyh7WhkVtTkneNCeZVFFJdqne1FPNbkjAZ9DkXUYzG8wJt1NcmsRBXDeP7bBAF",
  "key5": "4K1717YejXmCxoFhVBkQjx3BTbJYXxbyyhRoNDfdEhcxEHu1HhUQkHgJdLLsULPzq8HQqd81LJM5n3zVyR5wBiQZ",
  "key6": "bXdGfZfhbGj3KHQnchMQTy7dECk8GcKrpkNsUaTbhwmNworGDoFyAzEvmcm1QaKY5by6oUoUQsc1JtmHjAKTnNT",
  "key7": "2QRJ8wRro4UWq8gXhUdUBwkDMSm4SjJkzxGEA2GuyqsSPWocd5hs4wvL4qbRTAUASGWA8UrqGXP3xxav7EKqcxRD",
  "key8": "34fYQP1LUq3qP4AXG5TAGGEZzaZf82c9cFjdqvdS3LAgpJUYbnoonr3k98UXhrvQ7B4ghmyoi37yS5VBudRdJv7u",
  "key9": "22C5k8g6BdVZrLSTkvt6CpL2tHUqe7CzSpySmjDinQCB7aAncvEQMofoKvPuZ9Csdbkp1gXnZNmoxNCb5M1nYhy2",
  "key10": "5mMRWmVpVpET9ntfkdGqG5iHZc2GbmmTn7MzDYcr7Es9bn3iLpEFVk6V7NUwkZLRAXRKhxyGXBmSjw6tEf1bLHnE",
  "key11": "56E2AD4anezsWobkB5B3VmhabNZEDUVG6pnDCL8RNQmM8ur49mqK8k8avMeoqymxEchhdrNzdyzfhkgfK3JqNuRz",
  "key12": "42DKJwg4zpvxLnqGWckqmo44hQYXM8J3Ly3wAHSP1TJvy8jPihnxetZ2jaDTSF5fNfitGMv3aLf8vz9oQCYQA8Cn",
  "key13": "2yHMdbrUJz2zTNxr2TdQyH2dBHz9ybQSNhdUfXdTE3GUnZ4T1yRPzJhfhQKU4hF72QG3nDhRpBW5y66S1GDG4cdo",
  "key14": "4ctX31QsezM72qbF4XoNHYSv8tf42aKcyWMYXsrpCqA9ySpishqsHpq27p5inBSkEBNuTaJ4Xyu83gcA2SLzPN4Q",
  "key15": "5ryhCa7UxtSXQ7aNgESqDZ999oGMtHewUTz72KSbPbhurYQZYfPKvf5f7VMqy7fvjBtgTf9F5G7cE31PEmNe8a5b",
  "key16": "FHWietHrsEuHiA4criAWtQLp8BYr2FYxdYyKzVd9YuXcvKhpZkvgYHZXr2FQ6roJbLQkj6a7ZPjW2oX2AkPbX5P",
  "key17": "5rEMys7GSeKKjfzFcabd47DotdNTS7J5stS7jC7NmPszqjrXvqsYp2WGwF1g2ExH45f5bxsChivduprzgZwSz22A",
  "key18": "3zZSatvNEfQKo9gXNhkFk8XDaiYu5NxgcdLirrKH7RCcY2WqEU2CRdEJCqczeJ2JbPdjPsYcbkFmnKft5vKzySNu",
  "key19": "3AqPf6T3Tn6qKpKCqohPVbCixeh5Se4bc8i1ejWYj6BvbW2qq7RZV97Mz5tHngn9pdiWLHY2aWZPUpHUhwyE42qv",
  "key20": "38LKAoRVsRoZagqc9A3CEveFoYtYjFduwDfgKGday887B4qE4zTxLBJq98cmXeWZfYDHhaPTBkzCEZrZ6shBwtcL",
  "key21": "2bCP523E6V6zS1bX87wGr1pdR3K58vCLjWJ2VPUcM41rAiWRRGrbFdQhb7a7P66LHztsTYXsYvU2yCukccEPqARg",
  "key22": "3qzC2gYvKzPK1mz6dNaPMvp2KWt9vHferyiVxW5dF6cVqSqL8PgoxaZ8LBfRWsWiFWAC6WN5VUL4AiXF4FSeJozQ",
  "key23": "3BZ3JEhaUbmuR9RKr1FRrjbRu686XwG8A3sKTiki2L6W6TxvBajiTju84R9Sf6uA58VoWTSqhVopY2wQc4UNuyn",
  "key24": "hup3fTcvQ8F9PvddWb2DAAZDN7W7Q5hkL9ASJw8mTyEcTkfifM7JYoakpsg18XCpy9DjFqDLUJ2P6wEE7qHACgs",
  "key25": "2drrrG5T6v6N4mmZrXuByY5RsNkDX8NLSk6r2CkD6KDfSRoE5bfEzo4rXypqLtwBrFyVbPg5a3Ea2k8fNqGt7EcY",
  "key26": "ZyNLFx87wyVUPKwg3g6FK39ozQAaPJYeNg3tDeYC5TmBHPnzpnRE3zxa86jDWbb66WibsHZmYbS28JvidRFVgt9",
  "key27": "dvX3QMJ466xekMSQ6Vy9ivFv4PUwobMB2ViqEwkQ9KkCBzUZko6QrmQL3EGp5mqmACejR82M5wfiAAHqpfcxfCq",
  "key28": "5bX9gNwd41ZUo3E3NhSeikQSt6Wb929gN12vrYoJ7De7V5qNiKTByFqsSc94MYzXKPKUf1RVBg7X92qLRoajm6DU",
  "key29": "4nrV95bh3tzJbEeemPRddmuxwbdL9Lmf6gg9h7j3tBdMsWnVtCJwjnQyx3MpDxd4ZXJ1XR6tCX7Zh9LZhCzcwo3z",
  "key30": "5UAWdN7Yt3j7WdopJk35i4gR1yFz4ohdjBFtcdxuVRpiF2sdxvZzUgdFBQgshRjwPtYrrDrLw5GFEUniFbxaPiac",
  "key31": "3T9GD9hA4twZGFbuTnfEDKhWZzm9Vmp1aSWA35a26RdrbLNZ9us3usrjXzPxrzuj6n2uhwHx8bDdJHLZgNy28ZF2",
  "key32": "4S42K1f4K13fJKgzZjtyWguysbDxUGuuH49U5AUjNA8N5Xaf4bF5ajXFVbvALhkX5eLwB3EjTLs8bn7fUbDJyVeX",
  "key33": "32kCu1DMVP5nwcJprvzujgCXfTVwFuAUHcXcM2f1F5JqQ7TrW2sgQLBWAQM8LF6nxTExjimTgTespmDjEnac6oBq",
  "key34": "2VhVeZTXfE3L2EyMWpsgnoAf9tqhQaEQdxbZgnpj84w3QZ3wEPEgPr7ZWLroZZRCrDhPJ5D4K9r2T7QSeAYTLVjx",
  "key35": "3WAwRTtsQTMpS1npvsB5eR8tPgwNe9ovPgyymTx8t5pjrabyLHvgvzZ6gaFppVSoonWXDVErc9iDxTgtcyS37WPc",
  "key36": "3c847oCmTn1fqCfKzkmBDW5wo1YovuYKZpGhV7VmaX5CpAshhBtM5GAKT6ArWn3ZQfEGCoMGvWa9aKd5RTodx3vm",
  "key37": "4qcH6LtQjLKp3oWUdzh7XVATtVFzBW71jtY7zGSwXDDYQr5pGKsXPnec5JqjweRfmD1dDyim5TLEM7ZCEcjh3waU",
  "key38": "5wX1KxrE8ZhjwL6zbt23iLgTHRsnw6gNVXVG6bAnbYau5FG21rqSZ2iD2pPDeRgmgcJQRvTZqbDScziqK37NPywN",
  "key39": "3Ctrtz7y9EffRtMRaqM51ufJxL5u4fGMgGsXJ15zk6B9qJ2z6HDUmBh4HWwXskciNXQQv2y7mg3LQmBd5DAprrf2",
  "key40": "5JTbjQfzJ1cC1k4MeKkCLdLtPDHQiwoaM36vPgTkebJFymsBrHZP9Di9abBBHNAnZJaGsVv7BFwRMxep75ZcXFNp"
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
