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
    "5jKbMGhaPdeYxiiACcrVshLyoYcHWgsDPVe2K4PxTNTpH9Z2aC6D3gXrXdZZnXGjnsABRRKgngGq8AkmhB6NFG5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KguEnYfMzVZ8bmRRuesCwecAdreEqch14WUAZ4NuxDjXvSW8W6A8X2ZHe8ejGXRnNxWUT1SCH29UF9ksyBZeHxf",
  "key1": "66CodwNrcFrU1EhoWcexsP4vCLJg2GSP6Dewb8zMDt8KLqRQ9mSTCrp6HqB5jkDJ4tagswyMT4cY61K277bkXena",
  "key2": "CEy5HWNMEPJ38xgHwJf789JyRXru2jBZA5CRMy14vEveM312Djkhr7Up1ZXHefezaKgwHHLwTwKHosP9C9GqTLx",
  "key3": "4SLEfnkqfeuG66vuxPNcoKXMmCFCtUvzTY4H5DNiZpiGWYGnnG5Nzfmvps7t5vKMxEaxuUSfkpjrovUB2WmzNkKu",
  "key4": "4Biw7aNCxk7AMEGRXufsiJ891TfRHU6hnDh1fUdLGJsQidCfg4vFXPBXag15YSchbhqF8UjDBQ4C2gKhSzsYF1LP",
  "key5": "V22DLZ2w5ZoV5e6oAc2tHqeczmifp7cBZFx4cGs8h4PBAgjJKkDb5ijAMP9T8zsCBaJdUUHsTapHzxCPcmUxQJs",
  "key6": "3vqtjhm58KLQvGwm3J3uaTBVAvoKiqff4ZAhBHFT2SZgV2qHiy8wpr67xhzkuhtwK6ywFLMosWu4SdX7LitwfUT1",
  "key7": "4q2Ue6mgvoj9Uf55ENW2d7navmho3GQ9R6VLcre2urKHP6pgDML1ceBPbmN2nLmotgjjw7Qzbszjb5c7ujouPHtk",
  "key8": "3Nm7nYxmjJn2PJMsigyrjmVD9t1rBS6sCoA984gL1nTnRnQu9EK6YJJNowHxXZisiq7EceSxYnDE2ZtvdZNE2vUo",
  "key9": "46iqzrRMzw73ok5qVtujbzm2Z2PSCWnAeEmuGcMSxkTscUefVRhjmMC4qMGM3TYtZM7w9yuTsy2hwVmCUaxLnhZ3",
  "key10": "4fVHPi1GtB2e3DoKHZ3D5VZZsGK7FZ4ZCiFwy3HBuj86vaZz9B6bnFPDisbjrffxx9A5hAf16ZbZVzDGz2koDGLS",
  "key11": "2nsHvyeaqoYyU8cvENpEPZGvkudZFQBgvAX3s1rEstL7epyPVE9F53LLDgjKXpPjAMPq3dZ5dvsWzfD1QCC1dbqL",
  "key12": "5ZKnSpjK6XmriycjJrJZnkdR6u7kMSWWh1dBVwvNmCtYXdYmKAMWbG5GAoBo6SBLPnHSaenNsRXbL5bgVygSYbPg",
  "key13": "5zreS9zcV4E2FTbnSTqU7uf2a49cE3CypKuCFFQP8YeBoKJm11u75jht4zeZcsYwW94j31NDorxJrP6BbxiuyrDQ",
  "key14": "pdjEiqi5s2hZeRmF8yv1CKy5TexZFuWeLaC7sJ3rsCQkg6jAM2H328ARs6ZXXPjnqoKKko88AFsS2SWuPupHj99",
  "key15": "2VCrNPMtTXUkhKFA5q57yz3FufZeCtzdy6UPUJPa3HBaSdTpQTaQqU9kKkHzgHr9C3Q1Fik7Yg4wTxBpJosgbq7f",
  "key16": "4TyBCiKkPLvqZ33J1LMQ8JTmtC289yQESEKMA6MyV5zEZ6v8RNojXj2w4LgFZj4dVsaUv5P9kSbaGHEv5bAkUExB",
  "key17": "4JVsrbVyLJAPpZfKMqUy7xmuT2sDWdVxs3XAkVaghKyKv4USkoqwQeZvHPgkQCtHRxwJdtXCoVwswCxXeTohXHZM",
  "key18": "291aVz6Giz1VAF7gCECxP1bbY3DSMBdnXMnu194oA9g7hmoDuCUamWK1E9f8ypk25kHa6RNntXZQqjFPt94mWm9Q",
  "key19": "3SQsAjoSzWtKNwB3mUS3HnnjSYTBmrwtQjcecqRCdFJb8f9gZLCyrKbvLotcZHJqpWEK7GxX8N1uMfkC1L9kCMD9",
  "key20": "2BiYuwZDLMrpV6egkHSnUDjsbuvSo385GLFCebBtznBvWwaniobTEhbiDgABFmdP7rTm9vP4FcKpSeu8f4oFU3rH",
  "key21": "wKPFbnVyjxJEmwdp4WfwxEaMEzAAVUEDdUQeFRrSQGSJLy27BG9MRAJBk4HeDU6GjMj76EEc9WqqfBX8N1kY4op",
  "key22": "bbHfvzTmKuwPCq5fA1AFxibUkNcbbSqxF5Q8PqvqbSqgwCmJqjyifv7JmyjTaHGCskPgr6Q6iBh7V9B4S3vyeKj",
  "key23": "5ZPTwusnH3p617yPmN7VZtzHZ4cVSqsq25GEaw3C5KPcCRhsvQPToEkq6WRUWPG8TaRtULn9ZGNru62m7CVVjWn1",
  "key24": "2JvH4rPq7tNxfZ4rnonTSAuDWM6zf1SY2rNNZtBFSTJrUecFK4mDtsxfRLN2r2tLrVhwasqgQy93doD4vg9QNcnb",
  "key25": "42SZFcdhRR4wy3rcFKEVssECMNRvpkQzV4LHAtx88pkLh46w6LkwjqL4Ze3Ctb25RRNK8KTUCqjM9tY4kW9jDntD",
  "key26": "4qRupUT18vU1fTunj32DQTrioQDMEBMjJk1Fr4YrspkV5yy3LJZvMJdVYYz5hZTP91WZHsMG1QKE2AvgtdYh5LaZ",
  "key27": "4HWmJTQid5Z1RXwMSGjgxgdJ87LDMdnCqru25EqWhmk2FnzEqnHESJkHXvATT57YRhfCauKg4V2RST6s93JhpoW5",
  "key28": "3DHC1YJq7XwRRRzp3A5oVfvvv4DD2WVudU6EQt9HrLuStm85vxZDdfHnq7bEZh5qsw3J1BUBJcycNpeaQnkzPwn5",
  "key29": "2eXugTCLQbCcMnzawVFUnFWwXBjoSpTX35ywbHLY8as3bDVj7ySuY5h6s8r7RAAV4cKsCwHR2ENvo3jYp7fdqd23",
  "key30": "JJ3Cjr1SKBTY6Pth2fYyPSfif4L23wytJgSX3hZXuTLTRDTqM8qfXd5soMasxvoGjaENqa34uMvyEx6o1RiVTvx",
  "key31": "41DH2jqhz62qvUd8eiTe8rVGs3MnmGYqtXSfnFxvFyoCVau8skfQGW1Fx45aCZYtPkjEj5Raoq2NBTB6hwPRztC5",
  "key32": "4VbwuhFn9KVXCoNT3sZVxCZX3TJemAXYqqgUcD9EeyLvJc1x4StFj7C6MgwYBFjx62DuKbHupxPSRASGfR12jp8d",
  "key33": "52gUGypszzXFcMxXnFvRzv9kxCYbBssAWGPGcDVQCGrZB9dRmmfmqJyj1rgVBP9rfAqXA7jF1QYbi4i6qVJGU1AQ",
  "key34": "3g5whnPcT1S3ChAwKDiSdubdkk6jEQfKWKi3fWHHnbLRWQjmUajf1WvzxzdsTXtBk8FTJ4MmkBSRTA5bAQe2MiRX",
  "key35": "3tHkj4W9KBph6GRGmrGae2sc6qUNniswSZz8m2oLqRejoAP4V2A9k8PfgLKpEa6ytsyK8Rvj4V5HSZwVkgAT68BN",
  "key36": "3xr2ytTLZuNZLzjxcqtG16RrdN3RNqnyhBGF97DNG1E7GC3XgwVygyRmoDDLJRsA2NSt9t66JGhL84rDqNtPnF2s",
  "key37": "2AcgUWBAQmRwnwFMTKJR4FxSJtg9inMo1Y6P9mQ893AZdFtePPjfTRCErofDKHzaiAJTBELSpJLwHVv4peNbcDE5",
  "key38": "3NpJcmGzKt7u8JdT2dzHjJXitF7YXF8HaKf8LHemPMQ6r5UVuW85e9Q4MQ1p8zDVn5jG59zitGZFpAiG9gmy4WEP",
  "key39": "4wwSXb5Grrn9npQxJKmNtjvwZoSo691jaq4D8HfTfVqGvnFVZ8sQBjjYWDWEENiivdcVeo23HoFsru3SNRLKr5Vy"
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
