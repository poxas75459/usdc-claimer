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
    "5L9yZYRzRxMYzGv25k4QgPhi62QqYhuQqCum5Fw4YqAJbHnZfqmguEdC9JANZDg9vs4getdGtKgsobwxrYWViVNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UvzoVdA7u1sBYWgiFce8YkxYqkvyEwfHhLnurfnk6zTnCJ8HizFydwwQijHrtRivnycUYMT2ZmxvcxSp4s4P1r5",
  "key1": "pwPHmaC4DKeEAtFdEaaQuqr3n97t9nHHScsfMJw7rwWJsj6pHfy5inU1xQ3LUTmVbHSfWAHJpYyCFJsWFpxtqhx",
  "key2": "5fcCEyggsG9xXtFS64TRvZ87Mf4UoFoSuG8WQTuHdx2s7nhmeM8691eVgFxRrRXYGTQuBidTx6HhKnPBDDX51Kng",
  "key3": "3u3Fg3hp7c3g1NyaKHo47kHp61ovLooNZCvLeDC7Bbjk9ZFCwVSLRKhs3BmtfiwoFAt86k3kv16efCZpj9AK67Gd",
  "key4": "3erq8wAKoLnp1JxTMkEwg9gkACXkjMXPhoRThG5EaEMFxuanBTXthHAwAo1xMfHodN3VsqpGkyi5ARs43NrvkjuF",
  "key5": "eaDzuipXQxHZ63u8GK1HwbqL91wcvVtkc9kRfUa9Rt3cgiPeSsysbpJjbsHwFXiC9DnWxezeHpUYRpMqZjjwGeL",
  "key6": "24Z7UtL4TExPCoSawCoWHzh5dmb4BNKhgeC5VBoR9cEAEJeTFCtCpVPNnTx5hW2qNjxn3eU4m1MioDZhiJJX6NDx",
  "key7": "5U7mhsuSNSZL934uD4cMcjWLvUawCbK4muXeeV87yXDq18Na8ndACxN85WrDn9kzgqxCwaZZEnHEDxqtJE8vNVcf",
  "key8": "3XwSk5TR9YgMz1eMZ1D6Q5WVcJ5MRpmUy8g1vDqCKquQAM24iv3zr1jACLkv8vE9UWUPKKrN2ByVxK2Sq4BYy3AB",
  "key9": "2yiLtcNz2vjChRhCVpRoAjZeme3NeRF9f9sMFE5MTwXRyEmAdbziXkrEvWaWC9UfjKA9gzQE26fZA71pDhX89PZX",
  "key10": "4zP7WNdXhAvVQ6NMSgJhXuw1bbRR3vn1mNA3wZN6VY52TDdTfMCTXz1yKGAXEVZpREFmk4Bgxg3u3BT9WkjtMDZV",
  "key11": "3eLeY5n1KSfT2TrWprdrH5GVj8MCSTuA3zJzF7enPjUSAf7HW6BVYsvcdYWCB1BKrVDPyHjY162eNx5zzX3g1Gvu",
  "key12": "3a5eJ5snNxpywvw3BbaBvpPfJUBPcNpXjqxn8hPutKqeZDQYRjjEVUZd6VhGNVKFAusaZdSsForrZJs56Rc9Rti9",
  "key13": "5jauQQRcsp6Ah4wCarsNareHrsk8gUSLAZLFZEwUT4MTunhDMud21ve8hzDHQ9F1UCL11oYReez4BGaer8xNzRRG",
  "key14": "3LaH18QRhwqisdYCByMWRiounyk6aDp29JjCfgsdKx6RyyKAmDgDcYJKb3JkzLKdQy3DCVejdsKxwgMm1CzsXDKg",
  "key15": "4ububax8efkb8sMzwSjptFCWF3J6WU4BJSGYWd1a6q1XWm1iLtSEYDebyF8xtehY7g9Aj7Ay3GWHEJNNo6wpfPvG",
  "key16": "4WKUU6nHwXUqyWawKyAEyYNNbzH4wGgmj4anGYH3DRB4n4Pgdbn4sxwt4rGbmsEX7VXb4B6ZUDBVm6YouwyuVgtn",
  "key17": "nEKSWpA2Ck4fWzJ9ucCeu4LaiHBz7tLdJeoWBhC2ETz3mg2ZYqTMgBmjv4vqpoiMJNzMgckXLakmd2EirXb63zY",
  "key18": "32zHCDkPHY7KSWq4AGcg2WrMPNkXawT99mixBTagW2roxrpWvfp2nKi2zKuGgAm769QzbiHPAr3md69jk3yYV7V9",
  "key19": "3W5EnYDnuYWmX88ePC75HRvxEmokJvGYLQrwqVgNu2k9UzywEigRbHJctMhFH9s9tNSv9CLZsNiMVuEkfvDDgezA",
  "key20": "3Vod9QEs58bG8hzt3dnXAsbRTX15tGB2pVr4VeG4rD4dmH4jbDrmQfHSZtXAt3ub7sPw7HzdSk5RDwrTdaUxabcY",
  "key21": "3V6gEoKfBbyruHJmYYmYpvYZkzyEXsKAZJ9jucCbDZKF2XHTeS45BRZYQqmzwNiqPpteLaRkB8V8e97fy2AA5WZG",
  "key22": "5W6kr4Nc78FzAgSQZj62NUpVk3x4UiVGmF2tQUJ5NQ5T57hkqRhxiBwrzgJh3qbyAeLEJ1kEsMD8d4DLdxMBN1ih",
  "key23": "4B6iMjkXKLxDw6pUTBb3pVjRBVUB57joNQwsDdGZe3aJcfKWKZLMnsHXMU9p6kCEuQZMP7bpGERySPhPQXW446WF",
  "key24": "4P25j4emV5XmgZVHZLw8R3FxDpDF3E8YFvPNMZWCTc3zi2xKjTm3hQ6dAxVkvrtHDMHrcpcWf1kokWoFsJ4y8Sg5",
  "key25": "4KPw3XvTP2r4AvGnrZggMPWjDGsmMtBcdZdz2Y6MDdEg2oGg34BiR9fVEMFMG575ta48dYj67rY5jYXV8BfRGam7",
  "key26": "4kWoEND8WxQRtVZZ6gxQxtc6E2GPgatGeTBdmdwacdBq78ZwNGkRKZ7nvbiiDac9ZfX4RtpZTXEZNCN1iggWGxAy",
  "key27": "3B3hQsW5z58eZEn6szBUosGAdYWqJxZndoKbFc8tYiLYWsyB2Am6sVUCxmi7L4GnnuBbrMr3fm1bA3mAb8JSaTpQ",
  "key28": "2oddHeov1Zn27Jufub3EPiCxdfsam7wAxULQNZjMmZdLiLaybLXrC4BKnzAL5315VnCp3PztzxNfGD99BS5kZPmX",
  "key29": "5Uv3jWqDKoxqJBCDuyryzbGuB2dgGZks4ybtmAxetELuYYdEdZZnyfCpjkTh5RgcFNw4VJpsPBCdotaqjPU6t9gX",
  "key30": "62nQTpAP5dZF5zWTLV5vVQJDK4t9d3pRTU7Q5i3gNTX8tFbkYBZ5Ch2yZiskq7LCykjUYsFhK2T2awX2JL1oTv4A",
  "key31": "4dVysRhCSQvJjfDvpuPx3CgSys5FKkZgz9AfrbefFZr412wNem7EizXFR3DqQHTEiuVJA81XjrYutv9vUsaHZzJ4",
  "key32": "5LSvznCy9ub9srEnZ99WsLZYqUHhNw3JrcXz4p9HRJ6ToknKcg3fTYySJxTT4KaQTCymSvrZpwJqQePXwtxSrddB",
  "key33": "4fUTRLmWGdDVikHe8g8FaYnQT4vM1RCoTcgWK3pkfSvKRPkiioikucr1iRvvH9QC9HedXbiza2yc87Kx9qAz3FUg",
  "key34": "4gWgUxsuUv4ApN5EUzeBxGfwQP8TnVoDYGXXtxv84ijD7HhKcwhbyuUUq9ziTak6MbfspduqYriP6h2CkuHb1jkp",
  "key35": "5TJL7mKg9Gz3x6RB7fvU7mT1foapzUFg8yLUKuRBvjg5Q3GmVHm4NSdv2VS2bTgCqf1WtWr9yEZNBuKPGEbMYidx",
  "key36": "4x2TSPsuZjwbkrmjDoEWPPwtaD9PSpgFhUfAGQB5UkLvCf7ph5iJChVrrriMCnsSjUKHgemfmGwxPcfMTJrBGdc4",
  "key37": "499qzVdjhQCJqSiwWnHsTCk1jfauEYC7xwzVkBtnzjGTNh3muK66kNdTDGnypWnZHj9fCJ1xAq4PNp1EnuyvLHz1"
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
