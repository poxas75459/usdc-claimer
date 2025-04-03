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
    "2KbgijmuRdnxVy5LpBcHV5bDu9mEw3jGLZZXngnMvRPCmig9NfjDbJ68wQcmWYDtRfWWKzoEAYgYWjYCxubbiCUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FTwhjgJVBw8ctxHAwtPn9F6yyRMU1Aa9WNwcjfdG5Rys5W4Vbh2Gpgr6rQXXK5y5EfDCprqYueqCNF5vxD3wPnn",
  "key1": "4hgQgAHkVzBiBdmhykqm9HgQbeStmX7EF7oLA6kn1522faeeHGFgey2JavmmGxbbbMkmD6SkdReZ4kYVeErEYN11",
  "key2": "56PLpTPibkwC3pRyRCcXz7VA4MXeVr2GYnGxzBn84JCoxMBtzJtH6eD8yGCJcdWsg84TLs3VDwBfbNy5Z2GkpHz7",
  "key3": "3H7q5miGDWJp4JtoNuPKLaEq4zjJ8WppYyw3BjjwxDWgbG7zPyfn1zAzXFrh8GGxEXxaJjmNZLqycju6pcnHz4Uf",
  "key4": "VWUxowFX4oFK48D75xREW6XZiH8tARvMRTVUZ8UevDt2r4ZRo6bhqMjxnhnJf5FQcnFzumVakmpTNNenx7Dw8P2",
  "key5": "67T9N4XESfWdEv5DAJmzZFuRheDYcnxuNPwDMWaDy1wRTasQGWfssDccxpgWMzaNGDDhie8RAQFPTM7KDZDk9VeC",
  "key6": "2T72t9PFaUuu1nzYUH5GzaFsJG7pgEA8wHWvEd4iT3f6yMAQPgzjVB7JGC1BkA2J79aUNYrJ9KNwFT6wGy6B9FnQ",
  "key7": "FSr22FUJkiBf3hwqjYGpwBmn9ht2qPXjhAQi1ut8kpkZMTLHQAMnVMYVNJqkUGkpmV8P6QhLnmL9brD4P7jR5hw",
  "key8": "anyk7ucSMoKgYCK7TfkRdJKKsSnWLFa9se7dEH2mUBE5xo3v3Hkn1X3L5HvbFPce6Kyoqg89fjeJmdJDo2iZip1",
  "key9": "3qQy9H2kfKqRNZDBxwroTMD2TmkLyVJLWZRSdorb9ahh8Dqgxi6jHEnMEzYrfBFYHNWb7z189Sdwwy5KfYgEHTLy",
  "key10": "44mRdr1s7iuemqC8GcouQidG2mKMvuKp5JBgQd1qegGt9vRfqEaU1wQ9Gm2h31bdXpFwK4FCbj8P5QQDtj2qCxyq",
  "key11": "4eTi2gNzq2oFN4LC1iJTmunLvwpLLJPa96co5DEvo3nkcsrVjK4Uyyrn23sLK6awcKvtAuB8Q2mFgTt4iY1RWEiP",
  "key12": "zp9HheJMAdUCgLCZntbEhPuC9XKt6aYYziDjHjtXUGcYNACNiKadNoTUsf25CA14Rbd8YknsTfS51gsvNDFYb6c",
  "key13": "4Gu3qx3Ln7JpNCC1cBk73v3YTsYY6shRiAB2KyosydTi5DtNdKPcb14mH1WTJNyYZ6mt9wXJGRSK2giNiDDCiiBk",
  "key14": "5YERx7NdRUpaLhrTsbwLbYoSHStDhGWk4CtejDhF8hnRzBmmHJn8EPDchnBCSP6XzNawHc8QdCuhEvwhpJXLENti",
  "key15": "2DkAwRnU2YcPP6KGr1QpcULZDFHXRTeMEKfzEorvJfhD8UpuScGa2VkDX9GcTBoDP96ecBMzhY2cuXpegioqdfpL",
  "key16": "5aDD14aSJZpZ8QP3VLgURa7cMHroAP7XT34nads8NkMjhxR5AJm8PBet81sf9g4GsK5Bkg7B52HP7sREQnTtpJRQ",
  "key17": "PX6Lppv8a8BBfwFERbEMp3TaqrjzkAHFbpMWpF3st6fyZgXL9z5bnff6CgViXfhdaL6kx7mrAgwEGrcBc5bdMGm",
  "key18": "rRPBdGxryzMGnhURSeJXeetdmcx9JmYwSgvaj92ta6QD7N1TMHa3qnFbBBtixGkPpJymrPKh7oV978QevSrxEPZ",
  "key19": "wjGfEzigB89TydTRAr49UzZZts1SZF3HEHGgNgNrg3GeVYMeuyFpiM4xgPvoUyMuYAWzBxTxJ18wpob3NHoZv9C",
  "key20": "FTukwDdqfVfTQGnv6NptX5aujx4gtXdA4jLernHmYU9B6jSL47UVKzTUNMwNRvskjYmYa5T1XyHgxEKSLBVeM5P",
  "key21": "2b8iyR5HozaFN28K2W37jc5nWah9e6wdjL6jds4PxQ2gijaAih6cfA2KHrfCTQTi76gyEQL1idqV3X3paQt5zqTs",
  "key22": "4EWkJDFrij9Per6G9bxxjZnhKxgs4DuBPb97F2WxirAxS2pd3MEH4Ks1YdNVUwnKgGHCVFWMkufhf5d5vQm43HLU",
  "key23": "HTmVME4xsihkHqpTYgGavvcTCH2P5K9ygyokA9MxdKD2FvEKh9aAEHujqrxXLSaecexrNtfFjoqUeXQcmQTSv4b",
  "key24": "39nsroJM5DjTWER6UPyFWiJF7GhrhHkdXFaeDLVKSExSNvMVsAY7P43wMpSPZdVsBaQgQXDLK4X2YDLCncKznGbn",
  "key25": "5RV2w9pVM8roPrKm8emx53NY33hTDxJpgmGDmYzkyAJoaNJSRvhWX2SJ3tKrwotiejoFrhrXGTQmcrghcXJMd2PW"
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
