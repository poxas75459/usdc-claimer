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
    "vKPAKxaD7e4PJRKpsBGqHtRM4STkHxory2WouDVGujuUzkuK34ZvPQtYzsg2JVU44kwqrehnLdYRqRtLeCqWoxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L3Ye2m9Ee3JeHPyYuVGcFSki8kG6B7ozzzyxs3ytsSBfQZJe4A1z1Nhj7y3nbYQBpUMF5Exkgj5qaKKVtREdN9u",
  "key1": "2qfVS21Wn1dVkgwSgHFbJTtYSw8XyYoeZLPjQMe44guMXaSw9Nri2Aba7HegHVfE3A8PuViMPf1FFR6rAjDSQF4H",
  "key2": "3Q3osMDAT9PAYTz82cXi13tzxTDng85MjMJdcngfLA8PCqzAVuXpa9wZBXtXhKkWcQ2pdwLQvTwLjc5pbgadakcZ",
  "key3": "3G7kc122DoKZLvkxKqXTo8KFyxZqDB7gmjQMmYkNZb35uvyk3iJqj9gExAub3Zd6BGuZXeP3F93yUT4rm4r7eV5N",
  "key4": "33JzKCmr1gpkP43oyJnTtDmY98WEBZTVULRLLhqwtSVk543LJ5rWA5Z5R88bpge2pevxxMWPnWgnsP2r3fmPuV3a",
  "key5": "37fM5jLpJbUKLfeADccspFKmXEmKXXRo5sfDafneQ4ucY9PZuVtGAxYFG17dfRvDJsX2rokw46DqYMq6Q4Vmapd8",
  "key6": "2UkXUa2HsmFKmM1RoCZazojddJVnNruYDzbPvjv3V1oT3PfvQ7u47w52tUpZaUXbn71h62juCvVnJJ4njZBrPezc",
  "key7": "3Hn5dj3kSwCdhPbcNvfW532euv7EV75Zy33izhVmpgdn2wHK3BFNpGUjZDCUKK7CSQk5RZxaiZFc4KdErGiDv379",
  "key8": "3mUBgD6FjT8AC5MEMfhmDsYL1tkDFsQQ2YdcSAiou8CVKxPAN16BLx5b2WbTVDTk8JQyAX397pPFUttmmVdrmwF5",
  "key9": "3UaGgj1457ALmfuX176SRqLT1JG9i5n7Z9RVgNod3Nn7GVami7SV4gFkL98VQJLD54mLNLDMZqKUEBbbsgkCPzMv",
  "key10": "23UX73itRs6xpi8FE7gf3mnwmAaaPvy3Zvdm9AciDQVJQKFuXLGgmAHt8vuPFymF6GaSCZV3AZv8NRknswjWSvdr",
  "key11": "5YeGd56eKP4adyRpeRZot6vjAWpUyq3RoWFJrQULv6iHmxuPb7v949dqskFM8x8Rig3aixhjTTPmiyaCANqjrHVe",
  "key12": "2YiJouwgBCDzdXJp3fcXBujqHgpMCMhYwafFLK5QGqa2JrNMTFwt2LTnwysBWvNTJYaF783Thx7Bsxz6vM6m2TJ2",
  "key13": "4wKXiBeikz1oKnVHsrq4b247pqD5hBSFCF36UAzdGHi9mv7duy8YuYF5CNvRTcsbzygaddA5LZ4zeLvSKxMprzZw",
  "key14": "4jA8zyjAgoVY8fLTB7Xx6QgqwTwHc71BHrwRD6LVSUepZUVXUQrzmStmZff3iYeijj8TcsGbhdKdY7xcWUfbXAVW",
  "key15": "3JpN25GGSDiF14htEzxUewwU4tmxNGk1HcZv2HUcKhVtX1jFjgi9QQtG6gLZtZJameLb23cpbFU3BAKwJvDrUcXJ",
  "key16": "2FVtFscBYrZaoKLDownwrdA9ShAb1mYhjXNp82NGwE3Qj7XTrkfPEGbbkCV7SgfhTKWE1xZkSUSxuByynyDaJmFJ",
  "key17": "qynGTpyZEZcZkcg5LbE89PTbKGuwjcTDGu71YpaH1WUtSjvaM4QhyGqpUQQgcwBgwmcTBVrqiBxbRqEipKiXArA",
  "key18": "2pS6wbXzqShF5HWabxpGE5ZuCTmyXqhdRMveoJrvqdr1x2PRvRL9tiVqd9gRsszRTiMGPhvAWXz4UsbnUpGqcpxT",
  "key19": "2Nbsrizozo7tG7qzUYKZKd9pqgcD1LG3oAkLnV8NgrC9c1sSA9AAEm4z52V8snqNEdQGbiHWPEkJrddPD1JaYH5Y",
  "key20": "5zJfyiQHF9tS9ZWPzc1pJhz7CEvTaj9My8W2eqvtdCT7jK46HG2mDMwGDdDqWjLGiSFkKU2hwybwUab12kEejTT1",
  "key21": "47QkC6PQHBVkCnGRz8dMz3uAuoXZENoeDyoeBGRGDCbXbDBGvYGnyXzq3kYpRFw94nZxeQ7tpLMpu4Xba6k33osa",
  "key22": "3sKqjdqZVwbes3tazaoazusYXzjQCeGXpb6pqheuGKrU8f7enuCa9ZQgzPiAe193YZoAx9L9KWKgZgocyv5JzZgQ",
  "key23": "2keNybnHmdvAouFNkN9uFo6oTCHnqyZ5ezvJydrUXw3vpLPYDdXiJ6jeiGEjRivzZsXwmQgcVyweMytfnqGaHG6G",
  "key24": "m7XLRME6jpYQjaeu4pbgvKsGyuwyVeAimkoSSE7ymnQuASJHbKqzM5Fu4d1dCxeGg5sdUzVEtQW8AtM5YeAzpXG",
  "key25": "355Ts59MByTfHUbbwRZddk9bTBqy7CMp7ixWtBeudLPs6LeEZutXGcfjLNPCmD8XCeowPh24xFv8LpmLkB6aGMSB",
  "key26": "cMKNC2uBWkecTEyn8mbBcEBYJAapLy6kGzM2AVpEFmfuzKZ6XbvChDJmx7NsjjRMKcGVv6n9fj1anSTDKTWwabE",
  "key27": "3A9aEHEkjh6Lsq5jXPzTGCtUpgWbQBHuoU6uiyur52kAYdhY89VfejxiHvePLmDkDztFVZGkoV2x9vNZrKa7ghJ9",
  "key28": "37CK7YwFypjN7d72JQiEbCuBy648rxWWL2nHhSXaCEuGFgJsUc5n5frAhuPVD2cQmEoGKZvPnRPE4hkqAKj9uJaw",
  "key29": "56WPz36Yo2SZPpNip5FE7iriVNKApbngwMw8D58udUBbZpc14nuEZvsYHmeGjyrRmSXfXgHUyTiRFP9nEFKmJfu7",
  "key30": "3mB5jjTHnD5ts2uTauPTQRqC7mkg5USdXCfuvXraqW7nbEqH6Gxb3Tpzez2jt2sTBygHyH3LzeDcbCey8BBokGBy",
  "key31": "zoGXvEUdBPbxgSi3g1V6HrxnmpUXrS5CpbaBXJbB2HTSNQpsGYLBmMXADz32wCekVMhQoqQ6wYqJ6HnacYiVJyD",
  "key32": "5DY11BGUq9pUniikqhUVgN8sEwyRT4BnDpnttZ3ibNT9ruL3zyrDVEDPouwT9EFCLdgYP1AMopBib8FQjn73662A"
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
