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
    "4n4ukctmjrjsiHXhwLBbHpyTDJqZnhxzntLVjRFLNCio4i6coEztXRsM15uF44zLkzJaV3bMnt4iW3ZGYaXdioVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e9hFYNBk6W5jBLj9TKUUmRw2tyKAbo7bYchvPp9VgZLb2CLP9D681wvApS9RjXgjhzeWekuULCctne8NKMbheuk",
  "key1": "2twsDmnMJnqYnVxkPxaYiibQNDYrd4vppq2crSLdCxJ9kEY56jjW4DeAX65pQmpcE3S42PNHQRCth58BC1nemA64",
  "key2": "2W3cgq3ikz2cxKCpKMQMnJPMApYTk3TTFwq9riPFQxH4ayAuHSUNiw9VmNAdXVw9GBAWdHJWH4gK6p7LnzbMxsbU",
  "key3": "5neVyYavMw1ddDkzVpBSxzymGfxpyo9MCe3ziCGZabJUBvzZ8RW76kL8bKcXcxhx9Qi8nazQZ7Yo4Y8SzQCdBk1M",
  "key4": "3XRHMZLo2gD3cg8XnYFNLbM9xCa2GBmWEWoVChPAWdLgBHC1Gr7o5fvLZUyVxAzUrHX2fqK1av1Gb2nv3dCbWyec",
  "key5": "3YardEiv19ckeGNpZYKwWaTMRwq3R9mTK4fuHroHvaVshNv1LMcr1bWYTcXmPYH3BcQyHou5pnMuZhDTu2bLP3dc",
  "key6": "3oVCrqEyfgDo9GQFPhZsZz6E5aqhf632AjyrU9H8d44UbTicCPjSHwbGxxNJfjQTySxUd6NkUuMaU9jXDGq6rSij",
  "key7": "GWRbS1mSsJhcEGksaCsmKcA2G9N9niC2tFWPrSaHcTvfdd2JHqEvpm7idKKDSAYfFwcq7N3PnKLMZeoD8ENsqRy",
  "key8": "2nGGKVAQEQPcZgYtpUDRkNWij1LR8Jco6XHef4Jh8FUd7sFtviZQrsZDRA4HdikRrtPT3dA5LMYBSkFrQEUD5XtX",
  "key9": "5hqRN49WYQVTXaDxYUyGtNdAhZatENdUj66UAe9sFHBiArmU2uAJ8TPQZCbo4mMxQkYrK4Y4bRZhqZwXLAfqGUf1",
  "key10": "2dMxUAqfqGa4gNBDjsoJndP3UJKah4iLAfU5bF1xwcW6Cf3pY9wAcxPWwBwticfFvTji1UjBWJcX7w6rp2G8eYXx",
  "key11": "3faQdCpbtSsN55uJsDe5fK19CENb1D8uPaRy89B8mzQXsfDRBfNVwNKwyK2eGHf277K2K6pEKmbxfQS9QwuNNzpk",
  "key12": "5FeJhMDSwD4cE42ZkQoPjgGAf8V92gGV8TqQ42Ddk1mVvJy5HSB1auk2GFWPjiufJpgggg7BPwQTMjxAsL19JcB5",
  "key13": "5Zt64PCdDvd2Kh4oKUHrvDjKkHnCPJjjdghJvh8Sv62zdEYXu5CZMBRq5zknXU7ht5Q4oLhmQrfwudodKhfJoaFT",
  "key14": "5JyCPF39vhHLxxakRPYkFbswqfdgT4JmiTi6YQFzGnkWsa2kjUTuiWYE9gwKEaAKLyukz2B1diqhAcBb12D7CdF8",
  "key15": "bsASCYiQwTCWhQsx8QKsygaYyeErCpUcBWgXNEB24z2Ssn8DCYwwtptAGnmkQYwzQnZ4FsCTmJwK8tg4jSGgyqU",
  "key16": "ZJw6THbM9EtVCMgJT8Astm4LSU5Q26hFAz85Ht1VRCr9ftHKjhp9amXWQNN6CyYsCUt3thgDx6d9a1rxTF3m5Mr",
  "key17": "SxgWVfAG9r4cmLRFALZWeZuYn4HmBiTPKqXTfUPT6F1GfBsrYkmx1KDntBdfKrCL31mA1x3ECmS3NMtwambge2q",
  "key18": "58VVerWvkpZvvrec2YZet5WFv1i85nk3DtQqoM4tphhN7MZDPNd1ufZ5r3sdWkCrq12rJzBa6EnzBhNvNWVUQWdt",
  "key19": "xnZKfsJLF8h4ZhVXDvaMPv5fFGZfFf4PaU4nXxL9hPY1bBraWwddiwmPLhx3p47SyNSHWx3Ta2pF4nXzgBzHV3A",
  "key20": "5n9tFRzS4M5Gfc2SwjEe1UE96NWDGpiouD8AmwbfRC93sa56BWAayc1TSRfDvCVeFrTrMNHR9b5bR7FNWurd3aYw",
  "key21": "2sW3HmvLAYohgQk53y4vf2M72ivdiZDkGqHbrx7VGG6UnHhjB9YTZkfTtVewzDU4dfdg1wYo6WyzVvz9uQ71NyeA",
  "key22": "biRJS9KSypQdRViq3Ejnn7a6hAQirrHEFBtuonGFmZtzSAPxLwTfw1d6g1kFmczei6pBKwtLucZHULQvqqHG2wb",
  "key23": "3dF4tKDmyraAEZyyvdMmEVHCjj6amwrVH8j46J6ct2AZDXDndrKEG9tfhke9CL3TXf9J18W3r947q76fxZF85w39",
  "key24": "JENVwBsHhPHRWsap4qbCxA3cNtTkQs8krVhRMvZ64SaRbmjrCPAKwfWoWSeUz41Y3B7MoG4hbeydZL3ZCPRvtVD",
  "key25": "2qdEGH3yT5cTEfrREMmWzQAo9cAVneeWfKXsYjoCgg3G4VMsLppZjzhE5eaw7eHeRLJRMSgfhNYXGgDdt6EdmXX"
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
