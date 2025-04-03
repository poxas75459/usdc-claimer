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
    "2EGmzt5JLyDghZvy4owrRNDFoZ1PxQ7R4vuM1rXrBhk2RzEk9yPxuQ1ahqvdfkpYufJZPn9vTCyBFvjyo7P8vZ1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uPvQ6kr8PrqTZQa6umVeo1y2212WyYe8BynTGitn15fETPjtrm2K8SNeQJfDtvxStv9evpg8mDN5TnWdY2zXKK6",
  "key1": "5dAg7nyPFeG2FY3vsbZcj2pLVfmE5KRsWeXrPsv2VkEFHsVa4X6psusff4RfgyFTcGif2hDTAdsPKeiQSKHMsQms",
  "key2": "2QnLfqog8gwV5kG7qUHXoKGXqWmithJZMpuxbbyMUCBnTLEtPmneYr8e4QQeAdYiSsreB5L5jYEvVRhXHgaFzjsX",
  "key3": "3aVTc7BJk9FTwzvz91isHTWrNJowZFTdXAjjW5maDTuKPYyuia1RNcPim49AaQJvMbXLeodJH4eygaqNgqQ3fEif",
  "key4": "3mwQ3soZfTxboSpzsRoeQbptYzcCYbU1AduBtfJ8efamk2bBJLiQtMfGUznnjQ2PJWuqVYekBmtduQwBgxAzZ3cj",
  "key5": "3K1MPHjXUc5RYxbNt8jwkT9BX6eAtWNsJ847hQqomCZYir1CfTmGEzGmmeQ97WSLrSssvN2cMqqyuJ7xB1tDvhDC",
  "key6": "3EorKWpDSWD1Z5wDtM2pZ5weY7BAFRoALMMnSh5oA3s4fNWrJ8SrErjyPD1NL1Ucvp8Kteo88161dTq6eotZ8U7A",
  "key7": "38nLkh6JFrKAk1j8veb66TjkpZhZcufPx5o878aiSbNEZYfF1scKa7WBAiEq2ExESTrfc3H3TXb62NCmAGP4CHWU",
  "key8": "3jCyoDUdtoJCWWVsmNDc5J1RCQMQoHmdiipwuFjfg3xCQYigE2f64s5sw6WnQDDfN7giQrhWhfLaaS5UjoU2zu1Q",
  "key9": "3wS56Xgf5CkMHKaaAdJ7c8jUYi7wTZ2RMGXNRUBujXpMYE4DcBqtC2iAKxiGNL6sWFoneWDEe6nRXUnfhFvTXyMU",
  "key10": "52mAaboSh21nYuKTk2o7EuECdwDdsVPnRYZWyor1zYShcYLGhpUS7rn6V815ZyxeSECbWuDWLwxTPHirZ41bafeo",
  "key11": "sJP1BG69fCq2HeMTheut5wsZBsmuaYpdCbEkgnh37MXq6L1FFz4yQ7fSUax2W9w1y7e1jUCX88MmJdchCeHGWyb",
  "key12": "4USiGDmUXLWTckAeA3qQotH2dVav6shQSxCz1qo4vuW5Q8Nhv7UQhs2H8fuxEKiK5ZrZgmTZCCBiKTUu1YPeBeeo",
  "key13": "3uGDBXsRynReTLDijwBeB1gkURLo7FC8RPtAdb8TBaDvFPmtmEFX2Uzt8qiYHBvLStmVbBorDbYY5vrytuq6j8hs",
  "key14": "4VkRviBBQG6Hwa6wF2NCDcVsMbTnraLifAAqpQswJSHwppii8QNqTM4JhNiSkCaGVVmKLnnrBR1uMQVN2iqHerGg",
  "key15": "2xqAJ1nnCbsFvSCBkVcng3bvyDzcV4VZRBjVPKpnjW7idSxRgEpYxyTCCVpGJYr4TzzSyBgF3qC1PZGWUAmAKmqk",
  "key16": "5TFbYmyT57RijqgTeP6j5kJ2bZfyNPH5hiCoctGxDAEWAp6Jv95e6rh54oiosYsCLDfWqadvsSvtNtStgKPdib5t",
  "key17": "5BSzuuTyCv21voHPY2LrWfFXnaPLSViyssDGrkPWa1jNwU4TaCxeP2ND8ntNLuJ7PLnEoRbiy1xy3vnt16aFMstT",
  "key18": "PZsKs59Rj6pAgeXJVCzKr5ynpKi9NfvVd1JMCM88nqMKuE48uC3tV9XEdxznGvxAWde6XibKobfX6K2AEvjdw7M",
  "key19": "3VET6TtHTn4PKKJmv9e45h3eLRiX2tWxT51KbWRz72Ns8H3QVbZve7gpc75w44XCRLexvenoF3rn4JXdRpkUhoxn",
  "key20": "3R9yrtr7MNaSBeBzPDwLZNTNYjpku33nb8oCRQTimx1p7winyGdLhEpTJtrxXMXo7C6PypnhirKA8fzNhYYVjXS8",
  "key21": "3H7au2c3bnrcVdEpkWrsLaEucxeHzN41kZ2BexkR6nFZXQrauE448bkAzaV9jcekm4zQupEoaJRzzyV6MiLshQQm",
  "key22": "4AEhMSX6JgwmrW4suGAQ9f5bQgiCK5x8XZxKsViYE3cEatD6tMDYt7nE3UMKLEte1L2MKph6ieYMqLPF5Ap62nYa",
  "key23": "2orz1kAVLB8nSTRsZfnRuC4RZdbEtFpNrboYgbKH9vbiXL5627HcyvYy9QkbyuZinGhbu4Cn16Q9t6nRxYHVj7Kh",
  "key24": "3ZGTmvJcDWA6oKCnU8bAYNbdJJNAUn3ktvX8L1AMS4zcGWP9gLrAKSeEywyMK4AtwiGopGA2JAoZpRswRWBzo4Eq",
  "key25": "53Le6zNvMAiRZeHqNmZo6AM2rXDqjGYyhrNouXXmwdJ5vF7bJPFoSAE5ffjAWCDDrhfSBLyqSSYSf6k2RAFq39Qj",
  "key26": "2CiFmCc1U1jGHyAz3ZbsUU7i33LYsYiDo5emb49FRwkF4ZinybrRyUNUUurJRDmerizd1eBfamCR2gH5B8NoaxoT",
  "key27": "5PvA7SZYyqdTwqy1zYtBNeZ1k7LiZLNNLbwv1HhNGx3v2Zc83CKkn84i33mFNeLCWSVS5fv8dxvUzPCkP7aAk5rA",
  "key28": "3WZBKqnEc37tx2YJiX1rwxRR3sj7vDMcpU6iAQGpyNd5q69PZ8waodf2Dj8XRZbZuRPhco5aAVUpK7wT4NrYafp2",
  "key29": "21eRmcqhguiQWgtfVnKdvEgC7ZXn4pdhaoQoBF9vHVLUVXHQj8Cz9jXiyWJiUyctkgCi9wshvG2knQEJag6Nhuoi",
  "key30": "3L876jdhBVNWCVohA1B6TdwmY7BkHrP1GYRFNxkBUvuFtPvSZv1fKnkeeLq989Gh57tg5PNK6yzYfThoLQVtU1Ei"
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
