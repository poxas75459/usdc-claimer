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
    "4zYDCNHqfDhJ3WFpmZGfz7EXhdAHYdWokp4TkPVkEU8K4ViG475994STanjjKxt75WjYyVsX6seS37LtfXGNduwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57hZTWA2k24oFEXmbqR5NeqP63bFUv2tSZJa4157iphEkF71R7RKp2VixYHMR8PFKJbhVE6pjfBEgBd8b3eTGobq",
  "key1": "2X8ePkU4JfzyWPv7yj97pagZzM87h58t5dw4neohdEpnLke39wjM1mtx85KbSe1aHLJmBvXbpQSTeBFhZfD1YAX4",
  "key2": "2ee3Wbpbb2z1eXVKB7jb42pQz8N487uJej1EmewudbUUZVa47JFR3AoixAuYMsS19m6Lka7voQ8dVpkF4ZJbDUTK",
  "key3": "8CsRkzmBwcrr4LjufUpMCCvxbP1a4ZGS31S77eaugNQfpdT8d1n2693hFwzmMnPbpbd3hqh6UMLdqSkRKLh1zUm",
  "key4": "5kJa3R6MuPxm1cxvx75YUF62rxmQikTk89pV4Uhim2EPmHV9vZKqutpRWnkhbAEcH4FkuXdBQfzLpgWidPBs1dQY",
  "key5": "3BhEogsDkNDaCneSY6Cd7BodJUvTWRAboBbocECdPfbat476H4ceAz1uEFAybKPZ3jCJdqxBf79gwWtdcxNiNMXV",
  "key6": "2p2B33iFGocyfR1ckcYAfBgBhaJZudR4K5LWqYh8YgTXrZFJwmdRSZL8CeE9uU6QH4xs1V83ebKjPYBY5WYNg6NZ",
  "key7": "emsfLHK5ygLgcCfaVbYcGASRELXeYZ4yu861tA9KyXYUMWNWhYYHhxNcux8sW7W6WTzd85nYQKknV3pepXMyTih",
  "key8": "2ZRX7psmzhrXMAsH7Rb2hLCn3rxZLqWuQB5Qob7vN4wTYVZDf8tNoDXCCwEyeApBGCxb3kk5V9NyNgBnPBVAuPDv",
  "key9": "dJaBQMfxwnrtxjgK5wAivDRcLVwsbALS2E1esjEaf8ZEDKLuxUzYJRUv6rpWLdK3WYXU4v44oXgm2yC6vKErBEF",
  "key10": "5rXbEatcf1dfUzSJfRz7UCNYcZRctNne9esm9cfn3GKPJTqH3Xi8mTjcpymNUPppkisqTw7L825v5qBKxAnqVYC4",
  "key11": "64ikJcNtQ8nZamvkcMEu6L4wZZvaVgFR3kX5qgPsUkDxbbMAppW6KzA4RyQ86bLasnd4ictf9n3FDJ2iVW5A96m1",
  "key12": "4HGq1d9gpBKPT2ChVxpEcbXa1ehU6q2sydC4TcayUSskso3gd5LXQ8pcufhgjD84G1qKXwH6Hn829MVce8YTwRUL",
  "key13": "3vQGfi7YH5svZnqkxnmFHiAn8VW3hdaCrHh9EB7Zftih6C4TvExumN17gNJ3N4ArrLF1e8X1bSvkoQtE3EZ251fb",
  "key14": "4kA9fbPr6MkTFydsqt7f4CUbjhW89Ns6ARdPSx27dGDMpbg7e7VBtfTiReJfRASJ2KFkMt7LNEbXEr5ATY6VU8LL",
  "key15": "R987a9Fh1sTGM6TrzL1AvvwPF8QcDTppbS8jRaA6Vz1shn3JWvDQLhw3gAyM3fEL8rCptXEjzEohEALgfgpHjP7",
  "key16": "3G2PqWEkiGkSZDM8LhiSkEtYbHuQbYuKPhKZQmtjaQSTQeWtTjytwT4Caa1oDTUe2R8cBxjkXBLcmDy49HMkbSwi",
  "key17": "4WUmqsLEgWjSKMNHteWd2y637zYaKWBm8Ghan86RyL3fJC5SsWXn7fV7beptJTHW3zYwMvbPFwks6v2J6C8VHLQD",
  "key18": "21hKKCfvKHJ9GEq3A7cGTr36zQNJha8hB1WtdMHxwgPU7NcAqFvTDkf15KhsKn9Beb3HjQrt2kT2w2tQoxKUihuC",
  "key19": "23kqC8MEcYdk51Bj1faD83ydWxYs7Xe8g4XUBVPtKvo8QfXnvGrpG4kBHJDAauT7AZLFs6fmJCFLc9GrJGESMrDv",
  "key20": "3jKU5Cg8WMWFykVxPLQGRi2AH6cYGZeBHDoC4H5wC9LLzsQsHFJv13CTkTWQNb9HqUuvPwWRCQQDL5q1EmKedEfN",
  "key21": "35x8izB1A9EdxnqrUhi2B9pMEttCo8yLpqap1fjonk6vYnsfzebvRczRbB5H8hLeCJPyEyCsxQy2WM8tEwPgPD8L",
  "key22": "4g9Z93SzXDndbFpW7Se93vyWrwBZArBsP7ST7tMnrBu3nijCCUimHYqfTVYa8hUQBAWpuRLnndspeQjEbfsAfbi8",
  "key23": "2xDUkDENd3SbxdJaGQLJsXoLJwXqrf61zReCmUQ6JQx37qzkyk91eFCHLMPB21RgfG47vUrwqiYx2Y5ZBXHQJ3v4",
  "key24": "1r6yUELdKGf8tC3ybzebEwQhKCuqzRHeLdjEBguPx1P2TotUtHJkaphHmbfmfkNkiJNAXoGJ81rr43QoBD6qEzK",
  "key25": "2JH3B1N4W8aUpt2EwBv8a5xa6hYcRygPMfMDh7VqLzdi7UGMFZjNQQt62CB2acheBF8tn7GEqXuFULQc47hoZmjx",
  "key26": "3nhyUEVfUedVAnKhjZzUuedvnkt4YgiALWNnC2gRysfwt16J4uVTDet8LL4bsiHyFr5HCyJ3rTR1eSL2tWhLHtzD",
  "key27": "43E9F6rr6b9j4Yad4Zb46GaWzYQBzRjmdb3HJUyw31n1RzfbiDikW4E9LdViK847kM8rMcDTxXLtJ8xASPVbuGTR",
  "key28": "4SQzChgJVfXRGyctXasagTdrecNeQgoRVdDyZEN5P82aYjHPeiS9ce1xnnCFyoQUC7ZCCX69LpvhrBdCxqmuepdp",
  "key29": "2G99H9QsaJy3J1LYjMHRaDSXz6j9JK8Ts9XjvzReN85LAE2xLs8kr49hk1aXcixpQC1d7Pd21eeqAZUdNcqGhXPo",
  "key30": "4NxT7PSvuKSS2PY4gCWZRf57CUXEUVg9R8Xyc4ZJbVPz6EzneTzNDb8Q8ypi2C7vjKke55Lx49BkrckKvh2bnhNM",
  "key31": "9ZwBLzASXZ8C4UW5jgXmiS5SBCTdW81qpy6f6c1WCQ15APjhkRMN2Yt1BJzpaXA4Zbv4rMPk4waKszyKzZmvNNX",
  "key32": "36GZLk9RaHdLwSn8fFzdxLtsBSidWzAHRSwmc1CYUWP5JpWoPq3B9RU1sPs9qPEi95hBLkMB9LFE3jiXXnSLFenE",
  "key33": "4BDCJgx7tu7dwWHCBJcRNKaz4PMsmGKrqqAuB1uNuLe43cxS6gg7SzvZptM6rBbCqttBfzxbFMfnE9JwpJAad3zt",
  "key34": "3Co74TrFZC4awGAkEVPky1FkRXKgWSXnxoSXiW5g2H2LPmEgBxRGWvDHK7tjsovaBsYJvsir6jLk1X9cFrr9xiuB",
  "key35": "RAhJfXtU3ETUZSQxn53EQNb86UKSGb5oLqhrRyQgc9qU47VWordjdQzrj2aBUaWGy43WMR3Lb3kArb9FSsWuRyM",
  "key36": "3h9ywNnWCrBAYQyXDPdA8AHeFRFzajsJJPhgqYp7CrCa9b6BZQjgZ4dChXJs7PJJK7hC13tJiSd6jHuyhhqjUpoT",
  "key37": "ZfFGVgaJ7ieSGsJVbnADsrYEvsBH3A633K8SHHkbiXyTNw5ZNuqixHuum8pYnsdLSK1LzygMTRYjMgzjyMMsRKb",
  "key38": "F9Ddbx9A7yxsdkdVfD4LLAKciwMmNBxDH57pRirJDtCMDY1QYd4cKb87pjcoh9zyckwnLvDFGxBrbcgqKjUkUGL",
  "key39": "jZ9Bn1fBmEAhzLnyS1k8ZUmnPiyAau59CBYv9fadXFscrpCfGTkkDDJq57nyZwxCDK8MuufEvjzXXjtUxrtbDjD",
  "key40": "3926yYMfEnJ27j3SDnsHRdX3cZEtj1Ui5GAJE1Zbztcb5cyw8GygDtYSLJnwAXoSQBwZiXsyYTwSz6qpAYFPbZyX",
  "key41": "xB8JUfhhPhPrTm38QJNnZhH2TYPjD8En9DmFvr6LffUJNrZZjdcdwXNqHCagNRrjbvEHQCuwucyRtb9T3UbD6bU",
  "key42": "5TLqwSA2MMymCLieSya42JqWDWHeDsFd2n3s9FnZT4K1eLe2ZPUW9R5CRBSbCGC3ZqZohqKLNWXVWx7Jbi5AR1qq",
  "key43": "4wYLrui7pkp66vn5SjxVNtHsuobvP2R2MRTRczS4Kroxb8paU7i4VZfUbGu4yZNmrxrd4mFqLqmyJJDKRC9AYL5J"
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
