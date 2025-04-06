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
    "2cKQxTfZMTAa7RfYnWS8DyApM8AiqbbS7qjCgdzifK9SoijFxiKcGFTUyrh2FQgTkNBnHnVpb33xaiAxiU8VqSmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BwnhGwLNaj9vUnaWXGehjs85fd6vF88VURMhd2Pksh45A7vBNwjghEBfbAoTL9HRfvyWchdXjY7rBPfjw6bxnie",
  "key1": "3BjSkppaBCoc4DfDU8Kq2aVHD3wKpNSaPVJzQjr5LsDawmvcy3weRnGPVN6SB33QnYqjtxeEueao53XDy8yEB7jb",
  "key2": "3r2BdwCc4h31KrfnFnUUPus6X5b7kjTG3KcoVtefKUPkqQa1qSZUPSz4uY211jeQLhck3RkUpdRi4xofZiX2n3eh",
  "key3": "5skLPCmpm3qad8JNFG1onbDv6KDUYnDerR4F43QryMccK5YWjdDapA73f1NdKqCRvPZZ6cpqenGyaa7CjfaQrAdp",
  "key4": "5Kuzr6DwQNbYhnx4JAYUQoTD3pGkj4UEMxhSxHz2xeSsGyjZj3XiazPJzuFAFhHx6U4bUMH7xjVVYnVzLqamPmw1",
  "key5": "3kDRX6MCU3ck36sQCKBTxcJhyQvwL3mbJrXA7VoARUDYfw53eCpzvLdWYvuxzjH4QQoZ3P7TLorEahZ5ucvZUALX",
  "key6": "2kT66B5X5K9zV4yEpjBM8zSZX3cKLf24GkTJt2wSx3vMmyit8M1gwvugLt3ozbYjaGcWAEW27Egn76QBUGSeumtV",
  "key7": "yMzF68LH455VDsRc7RBVVjpcudeotzUoiZdQ1nX27cHrRaD3JXg12NPZB2VPwx4S2dgvtpPZ5pXHnaU8Wn8RV8a",
  "key8": "57kP85gKHXMfzXrCSHVd4xSMZowS2Kb6J9t4N7eoDQWJZoh5mScmKFYzfo7eVz9VVWpACpa9pJZiv6ezUp2Cx17",
  "key9": "gygpyEA8AcK2rraYf6EHkvMhVyJSLXvdh3XADffADSMCcrDDsevMHtETQH7qWEG2kfzpFgQQbcMDHux1U5Yxnam",
  "key10": "3PkKuoUzAswcgTPgTmQsyHFhqidKEpC8eBJGVJbaEqvgMVhr2KU3VKxp5eVR2gjrdkxg3cBrY6WJR1NzoLogZ1Z8",
  "key11": "27H4MrXs5kG5jDjxS2aNFQEzm8VqaU8auVbqL9g7cs89BzBNw2ccTmUvQBDcRJ431rCFrHEr4Jnt9dFEzPmE7KzY",
  "key12": "31fnLK2dkB9kJDz44s55UWDbHW62EN1o8QUYmyNfuexs1VvSNZdoQwkvUisscCuqfxwv52gzzfzqVhXtjbtRQJdc",
  "key13": "2RyBSr9kdWyz92JqgwrNX7pu3jrut71Ch8Bk9jr44o6qFfdP3UpuKCKhNGxBMF2BqpuyybxwqtSm5273F9qHyh1d",
  "key14": "2174zQC2zARwgJDmTCCumwGyrxJwcb9gW1gVgEZneGCCS6A8PvFWmCyd5TaYJ4xDPk1sJ6vJZacRsPzN31Cxtr6n",
  "key15": "4uC36tqt6JfashcrQS9qaGxeHwk69nw8dBDNEDweciR94J5icdErDvG5TFtPxjU39TEC4FM5hMT7aBgcavmCHYhy",
  "key16": "4i74KjPAeotbPNCM3aLZk24vJLeKjqCrnb8N259V5cJW68TtCZJm2btEveAFaWgTRCZnwxFL2BD68Fwmw3eyU79F",
  "key17": "3JBEPMXS8LSKGWqhH1LpARsomYdaUo5X7rYwTJAJpuX9uKdMthnVnsHRa6FZMmb1cYNWn1B4vvQPGEjxjczCJTxg",
  "key18": "3DttxXYuXJwsvyuq1aET6P3mdsaGSVWnsFFuqvQQFPVBYUXXTujS6bvC51dzPwBn9KyMaSSd8Hmmwm6pNeMN45Mv",
  "key19": "4sBKW6WaheTL9tXfKdZMZRCx3afBT6KndiA5kmbKm7jAWb177N8hLoFrSchvCpLFpzXFHcXXSyjcioxZza2Z48hD",
  "key20": "4Pc78YXpXW93ZMCWgDD6s2WgnH4EGPeoDfk1JuxNvSHrRUR3K5fCEVjcGgvXBqph8ZPXgqYzoiZCzqnGwbGn2Nd5",
  "key21": "5Fmmy7fPsKrAdLvCPz3F6ZRpEpkvYR12EGTF4p54g6GxR4LZaxWswZUhKHK9gGkwzqjF8BuLNvZTHrnVezXC2yco",
  "key22": "4WwXZsYPQXTiqs9DT5vk4nnvXXwmytmwJbGeSHuUGyUZ2Vt9UuB1AGuxZxRu8PAu7kkNFUzXrnwpH515PLTgDN1",
  "key23": "3xomN2bCsUGnWmvm5E2N6eWsAxhgmN25Z9wrHY4o2MUh96TEd3scZHC3PDb8CADoLaYJoDat7EDUtvSN1Kd4Mug8",
  "key24": "2MBGqmLRmVtP6iK3t2idSKnAFqPa68ExquYifN4nWR6j3GkZXh1w74TE7bjFoBQ9yeDobGfieYdHXrDm4SwzSG9w",
  "key25": "51ACoyRPJ9ujQYZuNocBTH42gCAKDGWgPEoCpsnzb22bk6UGDThyUS3RqcNsyUtbDakJUBFEZDhDe1mRmvUvfF2",
  "key26": "2y26ZDti4tR9k6RfsAWfUjmfeBrYhWNFFcrkqzEDFDVX6iBWHDJ5sXvohJ75ojgou35kbJRNqa8QTYgrgfTMJVrY",
  "key27": "2jejPFA3yMxtigbgknLwsH1yaLBjzbJbVEUsuzDQnMRf6H6t1S7pLkysR5riU3LLevT5rWrKmfeUC2Xbt4rbZvQD"
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
