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
    "32rVse2vCad8bPdsdzw3zHKoKEjVb8HNh34KTP7zNHianW8xfKAw5LZiBxkkiVPtzCU9X6opn4FxVpcobaDEa1Sf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MVUj1gT8BS4WQW4RxzcgeXXShDQ3d3f9rjXxAqWSqCEPGhA5iChzz1FhbfMdXAFTfQFe526N8Tzitz6qEvLkzSr",
  "key1": "tfx6u3DkcyCVbxNYzHSXDbikmMUSrVrYwa7LTcgNAeZ3pexmiLH4b6qpDxjcpGNRW3GV8CJJBZbV4XsTRQ3fNCC",
  "key2": "MdrNc4yCbJFig2VpTyQoXHiPJN1mCH87EFSP1X8BL8QyknQNYuxh6BfnmKoCojfXDbg2dmkbq5t7TtbjeuAv3Ma",
  "key3": "2z5XTPEBbM5RX5o4ebTpt1zdA4UcQQMHrh8egouFPidw4hXoffixhgxarn5GEdNzzUph2swpAunKB78fSwwBJm5u",
  "key4": "Vr5CJRUkYAqThoRJgCsaFZUeMf9bMq5A8s4WCWP4shSZdyUcktfyVy7M7upDn42HPq2pvPxcjVsMJqY6dutV6u6",
  "key5": "4iHb1jJJzTdJ2rtG1EyxaLnYzdx1G7y2ckUiov5LjEsCpGADaQhgnGohkj1YE3XnL6GmLgGLJAgoBcLEqD5ax7Sv",
  "key6": "5C2x22GtTvmbeZm5NGFaHfneqCEviazSbWy2R6RYavhYhGYSb94TzY8bMwpxbkBxshusCk2faSbsLUQEhVRARaNh",
  "key7": "eTd5uN8YkEs2WbJwgq2royQFFTUB9yyAX1phtYjbqfDKbG7SPTmsxF1zPyfLGLh6RXRyieoUAccXfavWpiqcwPV",
  "key8": "5yfiuemNdwmoVxVcJRJYnLhyXRJEcE3Jmdaq711ykZXfRMwEsiro2ZFjeZWsLaEbinPZBLKstdHHa8cAwKjKYtCm",
  "key9": "2H8QW3YL42b9dADKB3PW3WQkF1q6hNNuizR8CSVfZN9Cy6SkrSEcmiMNfhNpL3FJfu6Ax39bGyG2iJcmgjgq3PwV",
  "key10": "4n2hUkzDZFyWDkL1nERbSL3Hmt8nWbFtiWe2ySKGCxAPF1EA6tJ2jKdJ6upfRnocMejZCgwGWVV8o9BNX6Gzt1RL",
  "key11": "ukCqQVP87edNTQJ3zHdeVzdKh2niVoTPx72587v9sAUtMNwJgaWXvxXXKH8Ls6JjA6EKGYEbrgrp79jm7uLag6k",
  "key12": "bicbs4GZjnSgi7TV4XJpQ4HyGdRXPZyLpTCCvUhKMVYoLkRaNhxZBHvbwP5VFuQUQGh5jC6pQBt315a9n3PZh6z",
  "key13": "u8SQXzouZZoCiKzLjZp8b8AMcbUDmgHoTAHSzFiqSKgUkJds7p3iKQ4gtHbdHahcuKa1h48kwkkRhJuxuaNzaGk",
  "key14": "ykTEmLvt4wXg5SgiqDysQ7UWdeCsTAsCttCNiNJd4o9Y6xxhXbk6VWBajHV5UDiB245ozJZ2b9DutcgPXLjfcHx",
  "key15": "46NQ1wTHEZRPH4E977A2K35WSmFAJ5PN9Wt7jJBBo89erVDiBUybjVS5oewBkUh3H7DH6ZCathzy1XdY67CotCQK",
  "key16": "5kBJi62X1GJqQyw9dTDpDK7itnBzZP93CRtCvdS77Ds3oNJYRRFqNyv5ysQvMQX2BB8EKCaC5RtQT72V8hxrmCBx",
  "key17": "3Ut6qzk9vwBK79LfPT3bHRSHQZnC2N7f7oUrVfqhfeVJKLNR6CAu58tLNfWdW45RF5YQp2tbGBrPqy6ZkML149AU",
  "key18": "25YzNCWH9JGdLGR7krDepLNVUD3J2UtGdEFuiKSfRmw3irXYridXzt7VdD8GM3MtKQAuuFBV3vhpPnoVKP5L6JAe",
  "key19": "2ohrxGznG22J6SHZkRxVzsgjAuZcGnNjzE24aYsGK6kNiYWtS5Q7gRV2QFaBSYxAKLXe5jynFXn4AisWRLnnG66n",
  "key20": "32MscWuBHGeauTLwDan16SpVrpE39jiw3imvGgujaYANzecVFngztx65QFzwVQxae3zpNFbk1zeZL7vFEVz8VnTn",
  "key21": "3hUNxz4hksY9VRtGytvgn1g2wM6xbSPd1ymjrNsi5pafN654rT85BwBaYVbKoEQP3MbQQ4tdeTgkRzAL7exrrfRQ",
  "key22": "4X6VBRx2fTfajQmmc7zordJsysoMqDv73FFC17hjoB8YY8X6PdzxJ8BjAu2Qg1iuAtf5aRxm9kPR2CkxxNtEGZFR",
  "key23": "3ecUz3iPGR79PFpoxvTfAwiTzJTyp57ZpdoRLCSd9R2XqLGgNDNfnRZBdx3N9haSJkoEsAQi52XKiddY83aC1Bqm",
  "key24": "yFb1cusACpBgLfVLrEH6e5KPukpPf5beryQqHkPu5yvMv5DQrLFs1Xj6J2jQaNrtB66CfsK3U1oJSviMgwx3r7a",
  "key25": "5bJzCp25aAddxxTZVY3YGeQKxmFpowdYjnZgao1KzKaPv9ny7F6pHpWSCUisKBJ9isJ34aWohGtqQqyGLvKVv7LK",
  "key26": "3xcD8VrsVk7Ket4RCwssd8FkmznnhujRUq4LQ7XastyzLrx96iGvi38C385r1NWnGpQctfnmtHypg2E8rQgev16B",
  "key27": "RQkJwtBuMckvmEneceTkMeVy4174AxNLeH2w9r4KFUfvyogBN6gfHY9EqSBb6trTcFoPQHuByxMb3bpRxbVfwU3",
  "key28": "29TCitD6FWE6DkvMhw8Dd71uWR9bYcEJhWspGG6pNtecBJtmn1qLTSQynhatLn7t6nWyJfy91PkvPtLVgVkGfnZB",
  "key29": "2NwirhCKcc6tESu5xUbryDkBH4wvEMc7ZgbPDuvP1xFTVWMdChXocd1RFyKd6ySj2xGJop5KZG3zdRmfudW26NoG",
  "key30": "UQP5CtypiixxaABBwbp4zEE1hBY7ERrZz2ecz1rFGpQtucVU72hEcx86yL9QsPxDfzAU6ZnLyHpooeMvjB45cvu"
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
