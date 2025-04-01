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
    "3rjDUHFRxsGjG4ifNmF5MBrCpJoyxDAweLEvbFTPpyMSwRtNaXPZ9cd1yMjXPWRScur4NiqH6cDZyYySgE2QfUpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zWuRPPKjPt9XqDCqDmFTFUc5mzXKA2FnNxxanY9jh536YAhddMALm4ZHR3r6GRYPbCTvZBYSehzACDTMRPpHGuq",
  "key1": "4TaPsCdkMLXDkKMKQCfbCx2B1RQaRy2igYLhpwrL2DhsqVNKZUzeN41mfXBDsuhsPyYcCWuwuPSKgFfSWJUnTtrf",
  "key2": "4YVvgN4ctTXKFcEFTgoHnNE7QywPvaD8Dpfq8FTP9cmYNQW2ncsvFCWBs8AuQ6UEZ6eAyKjGPPnGQLNNHncHGtCP",
  "key3": "5VNrkiN8SbFjbS4DGh85ayd4m16SE38EnceJHP6BSLkQYCpgVQfu3BgkDXEobRiTHxQjhSyfZEkQ9yYjkrkgu3yC",
  "key4": "4LRiv723WxMovKJywv7ZsFCnKkLnDEmaQd6nKKvfdCiE1Qnhmf7Zb6pCTPNPrb4CbmYfCc23YEtEDq7fctUt1T3P",
  "key5": "34XCKGJvSmoxgGQEEyMKA2StkUcyuFpyTfLrci9g4wbuXRgV9biQ6SCeb1ihAp6KRvWu19xzUJbJ7s8RbprzKEVL",
  "key6": "5DaMXphTwYrKhnqzv5G7rFfWm93cdsp3uR55tzmAQyRDDSmZgoeFLvDCbmvN8Qmy8Fteffobw226wpA7f6aurgrm",
  "key7": "5NioB3xT25XF1V5WiV5JwdRVs4Sq9TirSXLmTxMaizsyTAXetnN8XZi5jvidnSZbjme3TjYBTNbjTHFXbcbguJi8",
  "key8": "5gYUQFt6Up5FAG4CBuv6LFWdsqtnR5b14Rjyk9mcRj7HMPShgpNDPzXbrGKutHMhu9Jawsffkmwrz285CmVfLxLk",
  "key9": "FeHsjj5yxdV9DaTv234xrSRAU4CKuG5TuqCvsWRX8hmnbjoRUTEEw6nJFJMA2ZKhNhUaUxExja1QLsqxRwEgQ5w",
  "key10": "3Sz7kroqak9tCwwDWnhrcRBRNExnQ9pwSWiYxfDHCbh4r7UQJbxaMSZFSx3g9HTH4NXB5k1mu1sXCJvkWYJhpz4n",
  "key11": "5WSaYvd1KzTUDriGj2UG6AENRtLiJXSihDceU6P1U7jbopVeSvuedar9M9DXvX58s52HxsZDsPMbehYGr9JHw9z9",
  "key12": "2bNJq7pgecc1y8pUiECqsBwybzPKk4mTDTGL4BP4H3WokvQruaNU4gkZQj3sV6ZLWCpcSdxXVpR3zKJXugnkshg5",
  "key13": "3wxybadXDS9GKy9Loc6B2Xfmku96cWSRX5wFta95QECETtQStqTf7AwvMDNvPNpjewjUDhpCYKErdsuxZzKMoM6H",
  "key14": "2kT6Ymg3bF6PBheuoondzPszPXQS4sS2hTnyCKiSWfJYpLYNY8DTu8YjKz2EBWxLpiCjDNTy9G19zc4kcYH8gdS9",
  "key15": "3uRsk1WppRTw4rwB8uPmxrKayK8xrwynD2VABpnY1BDdakncM8skY4NX3W2uzdX6oQ1B4Rg7qECMFL1rmfSYWYcP",
  "key16": "3Yrg2inNmG8MbWyrfo6KL93ouFvzTAkrt6FU46DuhbXVz8TVcnxzrurJXbKYRRVME7q9izJyRgdavEx51wu9yvW3",
  "key17": "2GrcPpvcrg6kKrWpZuNq7Yz68tHqbjgR6AhYLMtRBjgcPogiUdaUmYYp39uZbX3X4Me6B2Kfv35hvbKaSV2SmWyx",
  "key18": "32kqG3uMACkagMK6NBWcdPsi2gKcQ6pmokU9t6412huFZKWk8KFj8PdEQcQtysS6LyF3EqbWeoM2K5mjm35HFmYp",
  "key19": "4JZPmRnuLcsDgGymkhEcfEUg2UhKLNHzgWJCzQ8ESWiZKhHA2tg3q3r8f9FaBtZYDZzkz3e9qxBCTo3x3zfRtJfv",
  "key20": "2Xod12YHawis5T46pDiNUCtCnK2bxXdtQ9X1eCyEKzSfohxCQJWz5JqXT8F69RUyZLjWRyb4438JgdbJQ7DPCMVu",
  "key21": "4eSWwjzkZjmfM8hugqarH6ScXL1k6k2AWjQwC8cMBCznfc9qahsooRVuRbSahzp97Mf8Ewq5eTe4UpkytLveYHg9",
  "key22": "5C2iCxoqtdiaptADnYSQA41aqDG8DRkrMk1qtCPS8mcRX7bdmnAtRFdGRqj75mSd547F6PoqpfCq84Kek1Vhz5gE",
  "key23": "5MWXefV3GSg1a1qLKMbvcWaSr7Eu38tgfD1TVK4VWitFrNTUBQHMsGDULDyJwxxXK5E6mfag2shNypR3atuTetxH",
  "key24": "7NWYTQzH9thjNu3zmMEvjD83n2b2jK6B3xrMqUP3Uij3LN557pkNzimWR93pXrZZ4AZ6vs2CRzK9AR3wvHHB4CB",
  "key25": "3uy7C3noambtGgmmyFEGCmeEk86LuLUypja1ixvfEuAuC9EasvMB52bJ8Vu6iHMYqPsn78U5bHit1qhkKraJabQb",
  "key26": "2qXG5V81gKGz4JR6MXxSAMZrdxNus6dyat21wyiP4cmjTsaUAbDw7xUjtM1BG8zeoVxSEgcDAmzFyZ2Jh89HFRuA",
  "key27": "ww5VsN3Tvu2x3wdvCA1XkuZZyk7Ki4zDZE4SgLwzLtWjpoeG4qHWTbgY7gutBoscsgd6A6Q7fEZjZV38BQST24e",
  "key28": "ZG6iLuqmPUuBnUfQsEvvyTrRi9Yw3ArT5t3zWC9FuKgjKmazG7D4NCgJUdKh53jEK5vM4293nB2xgzXAfA5bjw5",
  "key29": "oPS6tZLRNmWq7UWkJ9ehHyJvQuH5pUu3ryRLnCBYmccm1F1Q8GUz8Ug4YJbQuFaM4sxMy1VDHTaX8QVdefjHLwc",
  "key30": "4rF1KCRG6AekAhsH7wh6AeEfRTX1byQVAkcbLtCJpqpRQyni6gcvSPLX58hGUhpzCghqx8m41PFPietW52NWdFSr",
  "key31": "4e1avif5U16hkSPt1cCmdf2SauVWUC3tVaE4UoPXDYGgyKwFcHisJ1s9ymFQdgCc6TQDP1ZEKjaBxyAKxhEHwuqx",
  "key32": "5S29sTV6TyufB8z2sggygrEMH3JxeYARhd3ZSpLfEgxZTaDEwqKXULxyFUxdvhvNBUBea7GF2txptakX1pWd9bTe"
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
