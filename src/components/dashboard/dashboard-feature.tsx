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
    "5KGv91d7vdMpwjpcZHzbUpQCZvPBVMCcoRoYCTXfEEcATvszPceRJQ4y58zuv25NyT6AVEHgYgduPTksXhsExgp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29dNDQCKcM1T5jCN4JCm63isJj42kw6fq5napscwZZDXJHU7uJGk9jNKuuhCiUmnGFN5w1BTXqtcYyV2tueFsKXw",
  "key1": "5QmHjGKR3uRbHzsrRwSPvDZ6zeBvmLmiR4p4UZ6a6mNuro7mJUDffwkRZb3ndr2R55JgN5LSmRx3Mkq6EqXbcQF7",
  "key2": "Xrdkona5DhUMK1txEW5wM7gy8jWr89fJZjJNdXDRRQWn5TtvmqECB2HuJjsyYrYa4Hv7CfvUz5fs25MyfbCp6Cj",
  "key3": "25xHo3MhbgS5eAS22CM645boFCxogFgzdpvorJKsrDhkDzjeitKrZpLDUWuCxH4D9AzTajqceQRb54MfKGQ3xY3t",
  "key4": "zjkJBwenP4MT12KYMhzLHPMuUGPq8tJdcuZuHHzrqbwPiV18ty9kuPRXdDXVFJnw5rrF3F25Hz1KN9CXy9U8Sxi",
  "key5": "499vbveymfER63DGaWyxzaBMBzmhEpXZSsbcEdQe4t9RmEFmSzi6duV9XXLAyZSWL1HLbj4SgxsSb9Uyxjj2pNEb",
  "key6": "Qu2g2BY4eSEp8997H1b2XaeojYKDMFhHFovxkS4WPUFrrYNBCzW5he8ibvpFiPdgWTYo7VPEZe2mYTU4ZidZZhm",
  "key7": "2D4QqCVYfVwFaShzWue9LkDMw1RibUa4jL2xFvdTJyrS8GR9whEa2sEyQ8ot5mszQoWY3JiMu5E6RcqNPzD8tNCK",
  "key8": "5MSUEKZXLCgLtUyGmx2FRW6opzxEyEH59GgCr8GnDPSZGb69DZWjcoTpHyA6cmSUKkV5AkXcwFehjycnVB4moFoH",
  "key9": "3RSpz2mRCZbKSbQoQfUJH9Af8tmYbyqLzZUdr7DZChWWV3KuyUBauukVQZAkLsc2FM5wr5nZtEBcSRT5PMWiJ8Mu",
  "key10": "DsSewdoKucDmDx9hXSmPAup2eqwbt4ZyeBL8x5bjWhyM7RZFt2g8kkBL2w2RUaP6Nf7Z8pVTgi7y8YgJ2qxCSPb",
  "key11": "4HwNDkJP6cffhce8d89ZaUbkCzZLWrpGZjvobfBA8igPjwNrQVPanGYHFjSc8Pn49zE8X4NTLrxxqYSDfrqhvyoY",
  "key12": "Uz6YaTJkhxJkv5eXqURibr63TBgp83tbGdAMiNMzHFyCAPVE8P1gM7rziUCiEGCdtqrgZ9L4e66choU6S3SBJ7K",
  "key13": "5ZYzYAsq4Y8t9kbYiZzzfEdJypFhDXeYwB7tvj1NsxggyKsRe6MSuL7EiMH3irMZrjBudPwHRqKw92vw1W4iQ9ni",
  "key14": "2AEurvZkn4htgVf25eisP7jzfkS5CLFjXG8TioKo95yBCCvwENXZEoMjEoV1rb6JLTSzt5s7GyUHcPsjpXNGZUYn",
  "key15": "328qxJvk26KP6t1cXrNMezLRDPCtw49e2F3eWHqEWGwadJDWiA1kTh1h4erGZJhGaVHFJQLKLucUKdNJWtxfYmCs",
  "key16": "23q6HNa7r7Drt5AGCVoK8cp4w2pS3umYBZy8xzd4y3pPeMt6McHupQXiExUWfPgVZm9moMKtbAcar38LmJNzxWxt",
  "key17": "4i7Yt6ATDcy13DB7xnQYLyqPLSXHtCgadDJxQwrRE6YerpK94t2iGEqdvkFkXRAdznMEEGJZkWesSSC67DwnsU3v",
  "key18": "2Z9B8VsrYSeBgQYnpKgxqY2YouggRvdur96ao25tqNAQZAT4DpZH7X7C9hDkJfssVe4RyuH43BojHnkkrkunUHdU",
  "key19": "4LxtzHXXWP11vmwvhMYy8MZ1t6UXeUocfUzRWDB1cysxLn6woFJP9gZrXYiPPuxTqKTtovPKmE2y8ZnsK2fH4YYC",
  "key20": "5iMiPUx9SQEgeQsBoTX9Eo98XMbENDzdwaf6mE9AV7PvK7JxS88WfDZnuNCvQwAPfoXdiEC8YsZ6eRZUVwQ4MnBW",
  "key21": "5BaHX4Yr4t6XLYhrnS3QPz1vE6FT5XP9C3ghgdqxVF8SLc5DCs2WxyLvbANx3MLxDiLeqFTsNoDeRefqX7rJyoWT",
  "key22": "3C8618TWTjzbk2n5RA9QLXnpX5Bows6EdDJS7UhTtsmzQ2pskiPAME8Jy7TuTYt9LrERJTqWkBXHmaB7UPKw4KfM",
  "key23": "2jJFngF1L3zQrFPWBmdPquV1nYJieduCMKLs7Pf97kM1dFJn6Zq1VSXPfoL1ooasaEnR7wLdVWkuWo9PkHm9CjWt",
  "key24": "5MZPF8PYUmRkhcMMyH953kBP4eEx2uWyCwZaJ3XqK11jg1b2YkinXnW7RNT2DTEoxWCQRMpKSkfC41tLppCAtTop",
  "key25": "4uNE3XF31GYvcgtmnmUYP7Zgu7mAhgauVy5fU5x7un446Vdg9SmoqeQxQrRP3ECqDuy8aTUmD68jPEmtMxjx3KFM",
  "key26": "2CBTESbPcQXWFdxaGnHQgE575fT7zf53ErMP45CXua2QhsXZ2kV5xeLtnuSqz6NcrtvUEAddtjgiMSaxgQf3UFih"
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
