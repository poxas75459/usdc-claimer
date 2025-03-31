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
    "5p2CoGF7v5VUUnovSafqDcPPL4q9HEcXThBf7J64gVp4ggNeX5tTSUJ2BavomoENWy9QjyaNBCfryFEbyvLwFUoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A4wUPoBPbz6jGgkf7tDnoGCihNZ7aij7mfXy7juCQADHaXh2gs8YJDXRfoYARQpvoZdMZjeifB3w96EbH6szj4b",
  "key1": "2cEtoDmnQ5i6hxTLEVLzTnVyKWftNQLXQ4sF1RcvVDGdmVGNbHtJeWymmnFZcjwQbfhbe5kQ1HbJ4ix6Ud2ngwrK",
  "key2": "2exKgKErEyhuoRLqMWtXJopsrQ9yywSTKVmPCW9GPJLnBDqFyqL3MgW3kPrq4ntavS97n7C1suGhSr2PPPGSkcU2",
  "key3": "2AabPsjUuKFMLx4LQB8SGXQfY9f1wdDuxG7T6H2qKE4kDPZEXc5RV1Qt3m4FvH2p46MAndbMq69eHrza6AJRBShk",
  "key4": "5TMe7PwC76w4EW62vqwTAS8ZyLvkLwpPqHvTC4TXV2FjYJpzKjzBQHuAKBQEkE4rywEmNaovChNxWgrkKuesgTha",
  "key5": "dvkoJrR9avFn5NagF9VXeWxfPCWCkExJ92jQhixoxbyMDutyNNGKvXj61ZRUFWHzVPJeyGJbbwGGtygxwvaP2Wi",
  "key6": "5eXBippCYHuf23HUfRgeG86kmKznJvturuTfkJ7rVr8M1LY8VrgkHuRhSLGKC3XkpCT1Y4JJK3mkhrPbpRJmXpGX",
  "key7": "53EY7sDdPSkBLa8R7iMQQyWFdv3dc93rxCYVUYA8Cx6aVf3eAypnyezj76SyjGHoVeB46yBokyRn2YWJpni8ojcw",
  "key8": "5YS8teDfAzckTPcCzbxRpfJeE9w11XvRVtsPJEWRPNQxizUypXXkAUQKzruBdjypeNeWSmmUaXJzmvHwjU8vwAAZ",
  "key9": "2EBfFpLRpkeFmcUAeXm9wcscKdbtUBo3rScTpL55ZAAW8Rhsdg8wt1BGoVXLxD3bAt45cvXwLH3n9e5drfUAjXNR",
  "key10": "3Fni6KBfKSzD62oPGHBrt7zfzVJ7hapKzafV9t1rTZGdqz81nCAiHbD22tERKRaLVXfdEskjE9bnndtKVwhEyBk",
  "key11": "YqpeVwnc2N4TqGGTbbixVpzCWrNKB3cbBeyEnj1vpR2p7fzvAzVdZ15oggg7Yarw9xAeem8MS285y2s2Be3QB7H",
  "key12": "32nH65YpeepFQtHA9ucxK656KJCgomcq8svyQRBgpBAgwbDASDbj6QzWxSrkzH9e6Eer5wXxqPtASC6qwywRDg7n",
  "key13": "355itsH5MDJtvE4K33PE4VbFnzfP7By1Xwa42d32goWPRsQui1TTKk1nrGt6vRKsN6bdAFezR2yVzjLwKbAgY5wa",
  "key14": "hM2yxCHUQsGymVxcZvq5xuwbBnFo1FMmxdXzLLnGqaDoqVUswNJ2Hg7o7RUpokwB6BRz9Ebmxf26yXg4oZodnKE",
  "key15": "3QDZWTGLuxoL1f32Cn879fDD4ygg6Mpbh7KeAbWCP1HEPQ27AkPy6ra9ZqdwQSHMdFVybGWx18pnsRMrLJzL1pkk",
  "key16": "64KNRQFnGHdzdY1561JnQ9MahuDCiywwpLohPNzGy93HkTT52qeXSkQ866t3SFC6ErtyXBbu7zcwbnQWSAXxxbrd",
  "key17": "3MWRwDqkPZxqmA33gXTqFWyskkHxPE3UvTimi74pSdmeFkd6NhYhztF5NvoJArXah7tZ1xyk8pzSufrp1GqAwNX3",
  "key18": "58zPaCYx6P7cv9sVEXNFZRSd3tMWDkzyUkiuWyLoXLYaNWbSMjmPyTf9Y7LiG6mNKvBsN4uWHDX5bmyo9BM3dZZU",
  "key19": "4VLufcZ3YCnqshmZsM36oqjjg4NdvYGMZk1KPRaQZ6JfKgjtwP4DGbpQWbA3aGv7PuNZTHxRoVZPna1bBqKcjYfG",
  "key20": "2K87RFu98GGrC6sdA93QibgPixAjVAcAJ5cNznoEKMEH2Bs9x2NitFgofm6Qt6PwUDuq1G45CHsMdcxRtBtGLwoY",
  "key21": "4F7HHiVzpRYoV84ai2wWJWS3Vs3MUnfzyYzqtQoUxLZGVAzgcUkBG7zUfKKf24x6xbEZzWtrBeBFKZAUDs8oRfV1",
  "key22": "38ppygQJ16s3oMdvAFenqYQc2Pjamo9abRvkpFxpfHBxUBDJi5eHkFG2wEKS8TnrygxNZRtCwDeYGG7WXvsRu24w",
  "key23": "4vBbKTe1p46owPKHxzAMVKwXnZXVokywum2YL17jQAEkSAYsKuFYyy8ZSyZc4tnkVbY7x41JU7GjFLWUuKnT9id8",
  "key24": "2CETmsLNT47XdaFfzD45vciSsZzn1iN7yidS9Pe5L28Su22RWSWSHfmADQUPxmzA4GQRgjoqpCGeM2DEmtvNLrJd",
  "key25": "5nS91kGpUDYgUScXp8K1eQjVoJCamvSzoQqDKnssswaZntMNV1R4MGBjGdzEGDPG3i1uJD7NnvhmCL8MdmgBAsCx",
  "key26": "2pxWVyjvR5idoxKyEPeuaJZ2FGhY7ifiN9bNWohUJFQMbtu19DDWb4Ba8PAfncfFxppEX7twPHLyGSzJd2Gymzvx",
  "key27": "2fhWS79okkssp7X7xE9pTdKDcaTxVtbv4TQPxukLkcQ81T3fVppadQxrFqJJKddrkcjGYBwiJcyu4Xma6kuunSxh"
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
