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
    "2NuvANQjmZ1D932CsiWrJcZjmQsGAYG8XtvF3SBbXwigERT5H8n5MRrjAmGVUceUNQghyevg7jfQqyU3bUCkmUQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qyaoJbLr7ZmTdK6Ku4WxKeo9T9RRAaqDBWoANYk9gbYbCkHkfyaqSPz9ehyqae7HtcyEz2F5KPbsZJtYtEuRmwQ",
  "key1": "3oFZMijJ4Ap1BsJsviqWnbBq5NTTtmH6aPb6byXW6vK3s3T6eVcSsJ4fPwy7gk1uAw4R2QpF7xE1n1vPhbPyco2V",
  "key2": "3zk1kizPE4kw1cBkGbpkV8tTBNXrPVeyA9mVo9aXjC6JPvsxcgMAxRXWaqZX46NaTPsg7DccdNujXgDdbaZjEg72",
  "key3": "3s4TvddPh3RzAUf6QAxTnd7b8LfLNbLksPHK5a1XXqEM4XikQsasS64mbAPd6MrXikbjyVr7FH5XHyYVVgJinJBs",
  "key4": "25qHdmHAH1e853dS8Lsm8FsHFAc94rQTTaoDADKGKKN8Pd7nhWeMY6cCVPGFn8fwnSbsCZcXzSceLcBW9JH7VvFg",
  "key5": "3qL7QohSTUUDUczHxQe8z3Lu11suHZ2paPhesRntDewZjHv7VNSH4yugp47oP4HFLaaZq4uWZrgbFzf21RfqJCKK",
  "key6": "5Wmy2sakLMZ44CgTfvt639Ft87629K4bE4fwZXzaWTkexwjWMdnmvhUqwopoJyVYtZec2aNnX5g7K2HEdgrqBagC",
  "key7": "4tdYcEMVbt1U2q2QdpNzCqXCyzPWQqWzYp4PbZUMkK1DzzC3qRRM5x5D3CvEowEUBYr7ApSp6SJuisFWqpNrrEze",
  "key8": "4dGqN33o15AFbPvzeuwnCY3G5c8RwAK4LYpaioWwwUZtpnVK439MKQRNjBTj6SckwKyrZrn6Ma26yamNcrD2sG7T",
  "key9": "2StqXSgwi6fJjzMvvDhF3WHnsyhWSSYhAMCxqQRbyzV9Cmfqq32pdLBkqUgc5Teu5P4He2xJuHNT31iHTd1US5pW",
  "key10": "2niritoaiCUoWBpx4iRp4D9xp5JofytMB2wfspZRW2U7U9xo46dYyMFEj8m4dprRTHrWCJzZjkZHo2o5t91dKwqj",
  "key11": "4pcgQgYX4koExpoYHXfgHQyuS73UiwSKQUigQv8cvmiHUR2nNzJnrwoLvFnWyxJruew6PzDPJfFddumob4ypTAHw",
  "key12": "3UUnmkaMdEEaD77GmktHkjYumUvQimgasvcHUtk4j9jkr22cwX1VeLy73haBLWQLNurF7dJxXDwMjvfuXZve7Wui",
  "key13": "5ptwJ27czmTaaaZ2ooBjFcv2b861kPPMguQ4mAtQZBfs8grzBTkz7bg2yuUiAE3VEupDTQHpUAzP26PpHRwbF2VA",
  "key14": "3wh33CkVhZRyHHThJn7SiaFTzcpZsaZbSVKZN5JqMC38H8ZFGoFPry16HmFbjccyCDMSu96eC8JywKsEtsJT2dUb",
  "key15": "5WFW7317iNkyNyCvFDzVpNjsqfUEL1RQmm1nsCTCQtZ2KeHre2oC4WpKvRYrpCo6Z8Yqf3ZWXPZZXrgJgJ1xCbdw",
  "key16": "2gU8ukTLYrEeEJYomWRu8czCmEedguwM8SaZ75vs4GChSAHAM7bVoR7XiNxH6mAKF4g6BXsDzYeRxiNzoMUsDrxn",
  "key17": "4qxYiGsakqm4QEnyPS54ySv7KC7Zria7r6EkNDc9P8moJo6RgkYjerMv9FQG9Euiio943LRTgfYStFPzuaYWHnGB",
  "key18": "vnMNWm4HiJSwDGD8vzoGtfwVy6UoWaK1oPRgHLb95NrqXT466FTHPd5LXcvnXwEso6mPU4QiuCyFE6Eo9DZnuQ9",
  "key19": "BUcZdb2iJ7Zz6RVmQAfooCGDGVeugzEnu396xyEV7xy5CrYrdyFdvqJQ6ye97H9LEsaWV5MU1AcHZR7V46HW6D5",
  "key20": "67qZFXi6iyTtGLdEe94QnCfrkGcLWhNaeCvyRqHng7GDVhDBhpeE2PoRaGz9J89JVt4WhMqELb94VehG52FMfkbC",
  "key21": "4HbrWeSgivAHP4Rfa8u2T8HE5weZ6E8d4bn9FiPQrYUje1rybr6VLGZqj5nnyUCXS4fiCNqBLfLDfrSsJxDDub8w",
  "key22": "GMbpRLao9s2Adm8tsGLprJWJM3PkFrt3wmSBNw2yNiEqxtDTMJgQH41hJMkd88e3DcsWtEkTu2hQGFixDQrBDzk",
  "key23": "5YyuFc6CgJqoRNAFpokGi6QYE4ifXo66o2t19V8BvcR65Nb53QCcUpMD7e9HRNVzjrERi8cKUFv5GJCNcEHUzLZu",
  "key24": "62qt7osmU57GfdqoUBMQNUag6cw9hQrdte1TqunBNgVVhp6u2dW8oFyM2rathuXNaxWwQfU8YLoY5w7sHd7UydZM",
  "key25": "rHEK4oByZfsDjRPpBd9grM1g74MM7VLh7S1c21T3PxruqeXajeCdDWkU4AUQnp5H1pV3UkqHUWFg7vD2ysCDxya",
  "key26": "56o39twSKFhMxqkBcnC81MdfRr1njsj39UvMh9FPURYg6eFBzoPiuZfBsRCsnZec5sKFEPEAS6XMZdS6YzjNTNvn",
  "key27": "26477qVXVwp9JykPBxMifHi59YzVEZtBsVKL44yH15zzbsFpPSpVfSVvJ3PTT9tWpwfzDAMgi9G4MzuXDAF7VBrP",
  "key28": "38t7q9Q6q95xVegBcN4qGsLkV8DP4FnYibCQQYZVuZXVtbacXodowQdqACehNXYYpXpHYXmE8sy3NJy9ziVB2wv5",
  "key29": "3EDZQe2tcCvmWn9fBbWMb4p9TEasAcAvvkiz6C91wQArPKS7GmPh2FfEHr3BtncP9fW45it4xefpkehUotwz3rFD",
  "key30": "3mBPqYJhpHBsy7uQmZQPM2gLkrKU4n1j8gSEEkLVEiGaYcG9SPyTdmj178dNCSJ4qChUUqt4iWcqF71L8KZ9fzFx",
  "key31": "4TSaLyeKHGcFMGLh2jDdjbAP5o4iDkoiGpjiFhSj8mErP5BGW7u9Z2op6shWUU1iyGNZXy9WVReguwPTJmDbV54f",
  "key32": "2TPKyxEFBe6ZkTfTtxtA6VJwC4pWe5XmagQTyPDSv1ePatkTddqJHL9JHfTwATRR5c4Db3DTfVHiPDoYvew1Tsm9",
  "key33": "5a8N865VqMMtneH21Td6Kq9wUhH1EiHKqQUms64VSF4mogbfNT8f7kxRUWDgz4KrgqKiPEwX2m3wVVGUgFWW2mMu"
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
