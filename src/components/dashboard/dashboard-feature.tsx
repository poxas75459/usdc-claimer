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
    "5HTonHQGGuTsxnYXaZZnnXsa8nma1A6nPVb51L3KBWtyoget3abUCMsJw2nhc9M9KDCNLsFF1riDEEzKPVnWVWMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4caGzKxeejESzNbEigkkjVhuRYKLoh8PzSnVzLErXV3KeWaRYqFmdCaVCPRxQ24VH1q2hNqBgLg9458RXfm9hRsu",
  "key1": "4jrKUBvur6VJ3DyqPg1jdj49bcK3uhZM5dmj2hsf72K3g4qxLr1FqveMMtiLMVyApeJWdLN2b3C54aCZ3VPpvrUY",
  "key2": "5SZuct7BBumVANVfzSHuMH5DBjEVwLoRJ2QmA18F7Y9Nfuvzh6wVnpeB5T8yK4f9Kv5mnATJaxNAhRNszxGe2sQT",
  "key3": "2wyjzUkFvmUhfYsT7cz5wcxzYhsWwtPkQ8PdS1qkzFmKvR5tdhMvA2kRLGVHxZCuaSubSsDaMseV1Fm2HGB4z4FD",
  "key4": "4oezCD9zzjkmeVY88reziAtR2TeddK3M5zqMD7Nsm3bhFQSSxSPkxaEqjVdXYoUw29euhAgJQpLqiZoK2AYznXyN",
  "key5": "45H8cRnHNVxdHhL2423PtWbr3fdzTr57pCwoBUjde84r1tRNcYHVGD2bS7zNHuEVShvorawm3w3d2zpDtJCR7zrQ",
  "key6": "5trqxB62urEXJF2BiVEwc4WC6rT5Uzdyw7R6woz649gDbZSWHdUtrMmMgPNpL4BXDfX2mdPHTQuq397Li1roUkM8",
  "key7": "3gNbmimfUHUpQe6ghFduxANaWuPjzWTrqMiUHvfZ2oCPJK4yyvMPyQv6ZbisZhGWNcTkZfyER3iXB8SWuDpgedTD",
  "key8": "5Lqc7UVJnm9wAowfevzKx6x8pbyqkyzEMi3HMAbc4G8GHj2dkuLxUerxk3oy1McNXYEMX8upYBwpeCBdfKc2nFBh",
  "key9": "2q8pjRoDXKpS8bCzzJ4H2NRTsvXCKunuKcZCWpCsPX7GWthZn1Fz52SyHBAC6jBjX4zFnSUEdALxWGsWYJk2C88D",
  "key10": "2r49uXfnpVmFf5miwC76z6Le8vCJjs3WgzhGEVP8LRWMpdox1faVCGZMFM18J4hHnSjKQjuFBL3yhXhxCRcYyWef",
  "key11": "3y4tz3aSooUgvzZmkDCHjhzBYHFpUuakW1mVqVXpyG7ja4GttfEprEfaPyBXhWVCVw1Fm37je3iW2DTbaDfahnyK",
  "key12": "5i4UWzoU2KhZTTzNZfUuu3iCMPP2MhbLvrGNMWkct8qSKmD7PYcjY5wG2Q7urT2Xw8W2GGGu7T9bE52LLiX2HhAY",
  "key13": "5sFs3fNo8TBpkA4QNLcVpfx5DNsZf2iy4Ljh5Wjmrp2mSiUXvxeawsYWBoWmuZweQ1neT6o9rwPpWmbUpVnm89pJ",
  "key14": "2Cz15YViEaiQfXpQNoLUa2Aa3rcCnUG7t78MAjDfyusN2bauVaW2o5NrTMwssVQA9mK3wk2uja29x5A8cEwoxJF7",
  "key15": "2oTKqGMaayU3znuHHxoaBauC79bmqumTqRW563Z1PZ6PFcvTAXBcocXHSYHngMNW4fA6iAtkJAw7LTJZkeXAvSuC",
  "key16": "3xoSJJuERS6pVJgg9zni7XfVeQJ1Fes7daW94ZhknPtpW3o4WHdKTS7N3mDWottVTQbhzRgrSDKx1pGPh9Z79S2Q",
  "key17": "4fvU74ahBy5Gie17rT3RscP39k2qvVAF8mBLQJemr4U92YWwgpWwzYD8Db5r8JVbYPqUkLqCou6G3nXycj2kJg3q",
  "key18": "3Yc2Rca8UUQPaUdsD94j18VoF12T7Te8UoiJLdGAMCCMKEQZQC5bpE7G77DD4G39Pba4bjECGRTjsY2xvp4Vw55c",
  "key19": "66gMqa2tRWW4fMh936ZR4gmcPNpC2pwhU5hLExV1TVXNqzwbyEGXxPanvUKMq8UfCUSY3WRTPDtZr45Eqo3EjSGB",
  "key20": "4bPnhRWKUQzBCp6rfrFi3NM73XJdgzpPRdsHUsz1hRgksR6gvKCjFbaX5Unq1TkjTZt5Trqa17hH21wqeML7AB1y",
  "key21": "3ZRrnDKmFu8ZUjPVRYHwksVNQLgfik6EKUgzCeFAdHM9yQJDe1dDtZWFtRbZs2mrqQFsCQT9KfaDg7wnVx7dUXLm",
  "key22": "MZQPcZM1cftW1NvKJ9CfmXK7JgiUuRPRwX6FCFptTvkYMT3khJ9Pgx28QDp8Z4crgVpcY4StNeSSyfQ6Jxy9Cvz",
  "key23": "343EnDxrtMb14u3EQGf8pdxDCU91GUJbWt4HJZumtugq4ajPZgNPmxghijMUbkU4jHJ2z5Asbco32r5K3Wm9Ja7g",
  "key24": "3ZbP58MGPms6BZgZsm1csA8JLYT8si9DiXi9PfZzf46yk8YYJa2djb53AXveok8BZSSwuef7bWL2LrKbrrtGHJLZ",
  "key25": "snGioSrQ1gkFwoou1yU5RRx6jaDeMuqpcHqjJpYNsrgo63LAMLM26g3D9K3MfPZ1EfkyLheeTFtXC4j44u5WMUA",
  "key26": "4MgTJCkjJbcEeaWyC5yFSFQbZLpzJamcx33U1DQGHGBHDFxU366smpPWZJseET9opjdtnjfGWBMeXWASQJLDRZUo",
  "key27": "2yunHVWGPEheTddrWkWqagvezsJtZwT1M6iZJMfpuHVRNsncgH53jCZ8rEv8FtsRmgFsCHXDpTb4T4eM5w7AcyV2",
  "key28": "4F5jdpgv7oJiCqmypFWmjimRSnEYudoYh85XpWqgDKgkNqG5S7dHYgcZuXXn6EuzMEafrCwqqdYJoA3cSsS4QhNT",
  "key29": "2wDchvt3CmgssjLs6bHVe18XBipe9e2djMLLtDjqw12Gs2DjtkJGp5of6jpMTnLA8RfhWhQCrEFXfAUPLybxhcZn",
  "key30": "H6TZHZAcoPfkikwhGHCyTztzh21LtiHgFkqouQDwWozU235bB7knVzCAoEN2zdDE9XbrQDCwmZQGFNRkvAykHMW",
  "key31": "Mji26p4C6DM1znE3FJ6esZaF3iWEFESGCKEV6AwBcBnznqdt7hV685pgzPQcx1wYLekegEZKHcDQMR3FC7zVpZC"
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
