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
    "5fbBLhqdagroYBqwTGaqE2CUA1P44YebyN8zCfjHikUmGAgL61SmkCrHxs2M6dYxSocNcWF5PfivRPqEaHd5zWEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XQGUeXR1JRLS1k1oza2uaR44W9jSo2iD4m65qHFNCcC8ebWgS7nMcf4z38Wkcik79NjKP1vu8LPWHuCNtzm21zA",
  "key1": "2M2QwUk1Jfb3HACLyfhqjCsEMgvApRKjfyRnfvWiwFaetVGCqoEq58YTDpCxqfav7HPsU58WQXUjcfKsZEijTwpT",
  "key2": "4Jj2R9bLpHZp9H5r1GR4XpnmynzWdNRGAKTrvCTkdGFmvBvobhP5vE275f7q5C3BZ2faWGht84PHXU7FhfyqHmaX",
  "key3": "41zjDFvF8b1FDi9wX4ArE8AtHVXzmL5AnypS6usCgr2BtoiNzz4Fen36qrfNtjseVW7E8wAyiSdgo8yXwaeptD7Q",
  "key4": "3cecbvq6aVrdu2YNjCEGFMt3RS8x1F7kDJSvyQrfeMpVY3RWt7UmTnPozLkt942poGw4cK2DALbAas16ifZg7qrm",
  "key5": "3ho5HdB64xrJtRTs7sq3Cr8gDTh848QML1FSuADcdfJCaqKLAFGEMrojouu5y6NjS2TZ44NJPgQojuzSTUGBJn8S",
  "key6": "4gMvqCn7sLvf4S2CEqruysNiTBTbfVkurUSJVpRQG7QQLySPcTdnEMaM2HJU8rV2unos86LsaPNYCTJ3xvuAjo6R",
  "key7": "4Ht8fsp8AmLZjK63re21vWs7AbJ1aMZWZmD6DM2qizWE3eWdZK4h7oWZ7ptD66eqwnyeuUKsnRJdbyZxAJo81tuD",
  "key8": "5LkbCNSUYwTDEmbkkWQeTW1iH6DbAw8Ui5VK6djE9TdgsQVGskq3pw1pSMqaAEXyvjCDheB2exGiErbD8PCi45ym",
  "key9": "5wwzbrmjUuRiTpTGJkM97SqNYiYPbYJ5wqNwucV6GnpFSqYvTtJBzBMyAYdtGrgNzzR6eyCAsnTJeLZEQXtiP68S",
  "key10": "2YawRcJfGhxyNGsqbHnhamh2zYDvJ8SCGWS7w6Jka2Xq8vqmBgjikv28BdawM21KaTB2SJRZWPFnZQXUEVhiCkmC",
  "key11": "3AjwVg9pP7CuXL9akN8AZQwBdAXjHqNGy668MNHRbGiAan7M44GwatKRGsZMKspsKVxXUyVM99Du1r4ek4Lyy2hY",
  "key12": "5BW8iYc5R2oBxyGop9B5tLZHoAkcHqrfCrFqV4EWCY7AvKR6DvyJXXGggZPMmqPqaB4NkmMJrmC5jYNvG4kWYK5G",
  "key13": "63CqjfVjCUEpxDmffVLFs8BdxVPCGgBYKn9CRpefZQB93sjg4GHqLsVeNjGkw6NpwfYRf47sHm6fpEzhC8hHmdoF",
  "key14": "56nGCGMoaHymkvP9g3rxM4JNaG7KWuUAfY1dUL6TygQMdtZz7wX6reVoad7qdpbwiFHzC9AuBLrn4G7FtW6YcaN3",
  "key15": "23ZcewcjWHBRpwxkHdETmrCN4sH6cLtkTMG9eRCBSc3zXMzMHzXa3dUGrPkJ9o7mvXtpK7Kps1mTpggbYAH87ipC",
  "key16": "2WbWiPyrshg6sr8inNzxHyjNQBXYqnCeNcE8cUx3JGEoPmtyxdotbCPjVjM8LAgsdpLZH7qd7AVU8efDE5VL5Uif",
  "key17": "3NFwzRB9Svx6i27sNpV5dCYrnkf7Mz1XSBcXbexHACaRNUohVR5qbpVuFGCkhwGQ2vepVE4XnhtsUAxTEoQPdaZp",
  "key18": "29xgyjU64prtjHYqDyruSR1iVHFhep4TMugFxE4HBXva6SKHgRmDKsWVarmGx5FodhSPmvJZfq3ZokFtcdwj6spL",
  "key19": "2CTAVJBCeP7NhNd6QQmy7bheLp7W7Urxn3utTALdsWADnPPVTsLS8zrm9zZkjoNZJCeAE2MYUNkEF9oRWM9vHZg2",
  "key20": "2cs2pFtifgHUvsKFD2DRDhFGvuYoQuFdAy3pEThmCrJ4FxuoiG6STvD2S45y1bud556MeGuPGwmicGyu4TvqArda",
  "key21": "5bxS9JHM4HgwPZS5W8K1bYVErfT6HJgFpzKKoDC8CMxXTPYTJvXJHDSRynt1UQFpZDWBFg7Ajf5jVEqCewaBJSvk",
  "key22": "253GYk63hXK33nne3dvrg169CU5bXJXQnNZwUxJhNknKxMG6rFsWvesQkMhevLsC5BZjYz3c36jrKgaZGPEavQEM",
  "key23": "zkftLqnMtY49BXqxkDhRYjqitSsEys1pnZA3rakghp7vJXWpJE1DvqEAYC9RYyzBQpm83KjvhaWVtDVeNfTQeU3",
  "key24": "5cSL2GfKMDAHmCra2puTsagqc2AKcjRqPNYmoDpUd4cATq5wJEd7gtS49mouMPSodPPTXbubZpEvTq8vMRopxsV3",
  "key25": "3LFSFcgqs2DuUBpn6BCY8YXSY4xvwHExkdTjvoV2p1Xioy4Rbhziz87FgEXRSA6yAsUnxMszgJaNWhohE851JJbp"
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
