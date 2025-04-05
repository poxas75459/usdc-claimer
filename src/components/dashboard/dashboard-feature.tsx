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
    "4cBMAwrT2uZWbq25bRDWACweVsCNKoVi1ebjjnZn84oehfY42pZKX6R1DUGzWsV3KY1PnoYTRFgmjqkRNHCmge16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VPypk2M7kkGh6X5ZjvrVPvXZgesLmxKeTJWFi8g7nLGZ3Uryy2Q1dsQVhRzC7a7fmKHBKY1xyz6WSDDWBa5Bjd4",
  "key1": "4mHizQ3v6tSqG4RiHK8WEJVx898uHeuKAnjMHWsBaoHHHCVu94m8wiR36Aa4pzRx7to26TiYiPoU9hv7ZZAHA8EC",
  "key2": "4pPaHRU7rm8wYPhEYn3jEKtFckotkYiKX53BNAkTkbNHSzdDTz2vieULYssC43wqC5FoRyq1AXxV4mqvfbPYbxvC",
  "key3": "3JmJR7V4Crz4Hqz4CBx7CprKSwJXGFD7rLiLCvs3RXmcxPTS2YWi5HcRSZW3QDmzcaf1hA1fypG93v873VjZBoxo",
  "key4": "G6S5ZKSdHsE5MprbuLKC7pk78HJzkECSDEKier2V8R9ZofisWr799jwFjKBTLg9UWTCAGpTikbpVZfho1mKQH7h",
  "key5": "9P9qMmKE7P3eZrLSB8cYPd56E6nvMbFsSuxiJfRmMusJyQbjJXmFdWTc4v3BHBdzjDpyNNPRQZrCB9t5QzUTWMf",
  "key6": "5aScPpzG6z1ZxHSi8hA17FGMYsgS5VkQP6sjz9o67VhipNLiUVoFURuV96UCkehp99bAQHFnsjVAjj5kVRZP5KuF",
  "key7": "3f98oUTLEWvvwcf6SA5J2zBCgP8R8s1tek3U3hNmJhJWcrqkpDiLp3LsbizqzZy4ZSQjupTE5XxrTvUJPKDjq2Gw",
  "key8": "5W6H4pXyFUR3BHPyTsBS9LyAFWeYVy9VGmQKjWU5iEkKi96DZuj6a86Yt2BvYY8QmvpNJ8Gdt1FDjQcu7328qLhF",
  "key9": "5zgo7zJMy6yY5HK5jWAMPggxu3qgdEuauYYci4epYfTuABHo7wSfmkKHU1wsP8YDnLYFYsn52gA3p1o8LoZJUSEX",
  "key10": "5GCDn3jYikqQ86sztBYhaSZRArfujztD2ugKc5g7wPYuw2rJGy6QCy8g2sScCeWCr1sxCQSsE3gcBS4mZXCigmX1",
  "key11": "H2ALZeG586S73s48YvHdsfnTmkYhidRZkTd5oQF6s8yPDGvCn43duC8T7FjhtZjLc2TwLxyF5A1TUs4gxRZXtrS",
  "key12": "5gakuUbFpgasgFAHmen3xTLPMToynKKxUv17AozkdCpXyG9fB4bH8RATVpYLHQuqj5ux4eokuPaN5nkQQcXB7QuQ",
  "key13": "4Cm73axiUeoovsn1JSi8TG73Bt5pP7qnDwwSgf6B7a3gecJd91aciP2Yw7qchB4qimqxPh2dSFg3xDWXcSTBZZT9",
  "key14": "5ALr4r8XCXRGs9biVHEGX6y62Z6qAKzPz3qdbTvR6R4HFG94rAs8f7CMNbiGYPUnSfDi6HfhLixWERo1RkTAhwdH",
  "key15": "4dZQw15HvC9573vE8dEPYrW13jh8MXTeE138ZaFupxkR9psQGa58Jwux2c4f8cgiyPoDZwHLooTBHnL76H4GXXhJ",
  "key16": "FScZdjRFy4FDmW26dgqG6sNaCG79LwzrGDp3iQLiQFdMbLXXyEn9b1kZ7A63GkLZSuWUU3GaRLJ3jcyzDPJtETW",
  "key17": "9z3SgNDZKidnVeTCzfSLxeSZ6k89HU8hstLK3JnPoiymXUjg2yB2g7WHnMAD2rFXBLWwHfBdSDNbiKM32anqwUy",
  "key18": "x2iwESLWha3PCfwANk7HTz3irPtUckWxg4YtE46fPimheo53TvugLDf7oqHJyVgsLy7iVFLJnZHaSGg923SCLa1",
  "key19": "2xFys6TedeEhH4xfH4yW9q5YnVGFzpAkDkdQQqLgcwpKzEU2s36paSWsyF7FnHhsCo1HFrpdkkeFo9EAfS9sbLXu",
  "key20": "mBedF8DGdBAnSwoGnoGGE1FUPSrUuJ5d9e34Kd7vTHdV68Vn5gyLffJPVCWEcQaHk4iB61EQkkEUS1uWU3h7fzS",
  "key21": "5cFnAjNoU86ZLMGM6tTAEDFMKNuSUVyAVjazNFcvCXdgW6538BMt5JjyBHUNwdGfhBbAtURyLMnKdy13WKmNUXRJ",
  "key22": "4YnCyZaPJ9kx9gKKeJNXiLRz9AcbVGm9EVdjZsPR2G83C2A8dY5sDJrUJRe7LEwHxmTJzvdeQQUDD3m8YXjQ9mG4",
  "key23": "2nwQQbCD2bKSrr1g3BUZuyPimyJN6U2pZt943BMRg93y5wiqk8c7ND9ugQrbtseKUoEuo9aPFTa35PsXKm3gDdLG",
  "key24": "2PMRFBqzdXfQtguHUggmtGQAypRD6ckGZi9BFYpcx9tkACMBToKfRiFqLfJ4mUGdRjYukenJc6ZpTbPioQt62a7J",
  "key25": "4NNGtYuvaLCrA5xbpVauzdUYDtBN8Sd1uPHmMXczH5ATkeeMM3JCHNzbMKCGL5PVm1T7vzcapaFxdwYeU2ACoLGv",
  "key26": "53wGqgRZjtvq7kjpzxD8MtCxRL74ZYtaUYkRzzLN5UDdwVJhABTDkKGzDv2HE5ZtdSWUbT15eeEF37vf2PmU85xH",
  "key27": "5MBboRGfgF5BudmiBamDU9xh6W7sZRmwNTG2nU84g8y5h78gqMJdZZm3Eu9RK7UVSAEK1L7f3sDPnBHVns8gtqtb",
  "key28": "24sjquCkyqYXzAmyUimfU61E4LPwy1RZNdwuTvQPoa1jmK3B5RQJGe9GwS8v8dP2HrdUAH1KRN2xydyzj2ueUWh9",
  "key29": "2Z5uxKdmsN7gcQgNuEykHLVrHEXgyizqsSScYr5Jea5vAtqY3iFbn6P5iuTdFGupXFmyZGhJSLcP5qpBmPeByjP7",
  "key30": "2Hhknz8ije3iYkbhHagbwhsCW8Mme7EeV4Uhrc72sz8FvjeMngiXAiGFwFcxhS7hwLzu5681NP9VQPxZg6ECYynd",
  "key31": "5KBUHKi4gm3ResE9Ad8NgRzJn5V71Rcs197Eegm9UfX1mtXj578hYve5Grs15t83k1u84wWG2pf4QYiyNPAws8m4",
  "key32": "55KDaw82fW132U9bRyyrivzrjXYoFhRGCNUawvqNUakVjBtBYFPSvCrDDFoBhfebHc1MHVdwmqC4aPPbi83mzFKm",
  "key33": "3UzCAnwgjgfjdEN4HiAb2HdtXcqKXvBzFhBFhvqbjTB15CDpK13M6fdhYGaJFgfGg79C1vP9VNh7V3rRgqr8XBch",
  "key34": "3oXEbBEgASW5M2rBwP1gzEnmn11FSkBSMMXAMFRRpLaQ8TaA6GVExSyHML5mPuha2AdnB5AaTU4td6B5FhrG73XR"
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
