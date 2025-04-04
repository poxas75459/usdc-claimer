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
    "51yYgGKj5ufHC56rqpha8VkprQKRX2tSU8jfnYiQsyPJmPFp7DMwhTy7rBkbKqqpxEkF1hJQyfDwGji5ntr7vYNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ui8QbhUD18YsKgDMbYMvnNvCcUumg9bP7Dx3gQEMMU9K3nk1JZ7WxcVMQSRQNJH66N9XjCMFNKu7SdPMaNBE3K8",
  "key1": "3GUJESDnAwWYRuwdRqLce1ERgxzevFGBdA2XgPKkw4o3kNHQkBNJf7Gg2N9uqAFaedqhTsd8PvTvqrqeisjdHdAM",
  "key2": "5Yr5LYA52q8hReWxPsn2ZqwEsEUFT7evZdPjchuKbvkhmVs152Rn3Z3K7Az9xyD3ZhexmyhQ6z5byxj83bNrRnNw",
  "key3": "3w58hLb532qGPamXnJ7ru2nMxhfGaQ3U5T6iEFMBaZ98Ru6FmKgoXe3MSjAE9aWp3C8K4VXpJPRYH7G78sgP7BHg",
  "key4": "4NWoAG8LqUPXninXesJbSDxxM4w7Gd3SH6pmp1Z1kJeqPWhdwpXj2UzEDegC1wqJEo1fvLo6FNFRssCociajDmuq",
  "key5": "5r6QVKFp6ujK54gMuqCfhSDysTgGrC8aZQjzxku4yxJ73gtHRR2VDC9icfJsPMAB1woraUSgQRB6p2uvShhu1jNj",
  "key6": "w3k6c1tG2DSFLd9YSdaLB6PCmX5rgrsR1VLUJttpyaMTRwnqn2P2kYQhaCttqFJDaPp6K7yeRjUStzn9L9KoGeZ",
  "key7": "5dioW55g8L27qawFx7drVHfoTroWe5YLTJbUVBp1hNEY4HcWjF2nCAMhiLf9LoZfZJtr1W7q5E7L8Co3rWQyASbd",
  "key8": "56Lnq1ijTnqd91MhM2jytgwmthCaL8mo5iwqGkZqXtiYxrgCG2uEukUFEsjG9dxcTKzY5VyC9k8St4Gbs6t7VWRb",
  "key9": "2hiaaXRG3wkpYd5eNFMwNbgnsDfE5QdApe23EMEEj8JgcQnDPNrvbmzjZ3tDMrfcZNcvaBtWp9jpVtjtdBWLc7TW",
  "key10": "s6YQQPqn1biusuTk954iawqqSSxus8RJYRTPgCKYP4Tysn3cwPvB6ue5S8Xp9hFBHeAhM3zjJJ7V4gma38SW358",
  "key11": "4mJtnXN86igvXGDbA5XBducYmRWJvjc52Mf9aadb1HH9MKuwkLCWk13a6mWd8GaCMxkBd7Cq8WPbUKmNLHtuxaKG",
  "key12": "4Ms8JDMd1cGcZLt6d83a62T2faiJxxUM5hK6hkgDfxcZkEb5jvxbU7fpwhzB5prFkvWkwnrgdJyrshXmyURgLRq8",
  "key13": "2YKCFNQmTx9RvkPwE8GjAZEq4i2Ahr4Yx54oHmnYJinrsTCGsSpNAdwXW8qidW5aQHaJ4ShdML5XvMbGTL5b4wsq",
  "key14": "3VX2xCcEBpYytiBAZpAnnG1Yh5YyvMDPBgrQ5zQBxa58Hpee7s76CJM5f8FRgpd2PK1MCktZPtddyXDtUQ2USKWr",
  "key15": "5WaraHnuwWtkYthbaDuomGfrgXQJ25BN44gmUREsprKV6KKmdkpKFvNf65tqCBApXSNVeQj5RdERKT86Hf8cnem9",
  "key16": "4T4Q6esvBJ9CwM6DetpLzPh7dyykrYR9JxNXYdr1uNP54g4LKjiw8RYqVT4Z2DQ9Yn9NkUHnJQ6gF7StdVrwPa8w",
  "key17": "44fkXTQmgeWs7V3kzZg8yPv1PPo5Z8jMiS3FpEYe4zRdzsnSCV92QGeYJpahB2UYkcpWXBtxxcq3Xy1emjsDPoy6",
  "key18": "4bsyTie16k2LXE7zdySVtaBzRfEv4vzv7kJ4TfudTwHqsDpFKG3UxsEiqought9sxx1cHftCYaAJ5eRrBxjxLK5J",
  "key19": "5ZTAhELcGdcVKZirm9fHsJAiiy2nMYucMM4NdMg7KNWCEP3BDPCWh5nCirHVHXShyQuWseeNZdR1USvuUy1uim65",
  "key20": "5En583DtrFAbg3znxa2WzvUjW18wwCVEbxZMLiGKHNupJmVZDGLRnEBgjPArXL95QNHHe5SG7JUejdC6F7BKUPWV",
  "key21": "2Doy5xECUTWeemuRqLFa6E57o35wcqbsh4u7p62AYXrmHN7Wj7eqdCF6SYgy7uvMMrBDzR5pBmbqX39z3qBZdBH5",
  "key22": "AAMwm9RGN1LiNLkyaFvhZL4VJoPfhLiWKb7s4n3f9rgwKUqhMFjj2T5yuRQxr4YQiXKDvsxULkBjEXuvmSWnioi",
  "key23": "GfDMzzeSXacEZChoMogFP6gEvjDpkJMJf9dB5w6w1p8Q5JTWWcErM5mP4A5tanWGRbK3GHMfnYn9c5ZqDDjyWsn",
  "key24": "5oBeBkG2RZEkCgP3W9FrX5GK6w8ewngx5oC1ukvCyNjkXHVkvREXEYyHX3qT58smrzAVkAyVzY5ZS6BYtF36FajS",
  "key25": "5MmpqqFaKLjb8eukoMzWZnGUjF8ErWomDuaSgdbRaRWaW7x7qVQzLJnHnJLVfYsisVnniRxsHLc1GFRztdft1Tgz"
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
