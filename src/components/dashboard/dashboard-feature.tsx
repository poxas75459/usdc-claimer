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
    "2t2SLUdqbmiMiyLNNvCF7KeH4jVsWQ7KA5QTVCgsmrRFSfMSzuGECgWXA6RsPmH63NR9EYgs1sYswHThAV79PGsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TJ7cgXaMK6QUuU5zQXrdXLzBhTHbAqsXu7rCVY8a8iCDoegvFkB8NHUJ4ECHx39F6eHgi9DvHpPU4ypipR2RBei",
  "key1": "4jESQBS3PN49M2deGz2gA5LQi6z9ivePpvF2QAzY7Argf93TPT2p7mWwTmz1tjyXj5QFx5y6HwMW54eAYQkfwWXu",
  "key2": "49HmnVJvPbRdKqovMu2FXCweyjBxL3QqzN2gGCWaqwCCHKv16N4uVjqe8zjxXcfoXfckZH3QcEnMmK7CKGCEXsFg",
  "key3": "AGgBei53P7BMozYoaxcCy86dYoTfeUFyUo2SkN6HasUPVVKBR3YvytV5iEQkz5DQHBjoqQKvPa8b4QM52zJtDAV",
  "key4": "4oNeEUTbD1qHBcEVu2WkRr9DoUH2RpEXkwMr3ggSsuU9HkpdAgJBQVvfqPXejTdus1YEgVu5XFJVS6TEGRmSfATs",
  "key5": "2bnkamndpiQybHi8fVbyG5CveXYKX4b3StquYm4b2QX2aAyh67N4FcmV1pEDoV2Ct9pn2izrf6THN8KRAFDg441U",
  "key6": "5XocPqhD85K1T9QSKmoxPFH73VKRSsRHZhx4Xqs6LtaD8HA3X3m2EfHHcendc38p9rBEwWuUBgZbxxKeMWmWN1N6",
  "key7": "i4dwyUgkEVwdFDwyJSuCZC42bnFUBQFHTcSynjvwSZzr3t767VHJH8tXpDfLmsshqrt2XCT7pgjde3KutuPZgVw",
  "key8": "4eFa1zwfishCPSCRr9onu1ycW8krPsiDrdZcLkLbw6VK6ZZKb4rjLyLthgwc3nXvEyR3DD75zxW6o7wnQoZMUrys",
  "key9": "5mY9tHpcB3hH8TrmwZoTgcDu9jm7dFG9ErWo8TtVc621zNi8tr7oRo5GeE6M1pvWcQ9rZTqbBYPSqKNiMuiHbiUf",
  "key10": "2UQodoC2vm8tcByrkQr4vtymxtWfJWmYe2yN5K1Xiu7xLuHoMPQqZxFGC7Yi26qmcTEKeKajBu7qCRar5Yg9C3j5",
  "key11": "2yWKPb2WEz7buCZZL8oe5NJ8HfLVvbvMgK6mypEtENu7etu2RUj7rVNjL65sm3rkD32MW9RY9L5dUTbwfgbN5wp4",
  "key12": "36EqCj4usFtfrqc5i5JHWbAzemPDu31AjKWqiHa4tyhnuEMhmvqzECcQ8vYN5ueMRABjaC1oygPTGd4pYZbyonWz",
  "key13": "4MpRk7GgFF8uvEmzrDroDcjbrUgzaQ1BRRRfXLDLXgYJoZEEyHvUavkSWiydb2GjWNnbpzUrgbqLXwbxngyzkxV3",
  "key14": "4d3GgijuZSC9LTecoRg2ZPA1aftV35CdxhBrUju93f42dqqkAdQ6aAitUnCVLE3ez4nFs2gyCYP7JWpENMsDBDsF",
  "key15": "ZSguGWPuKMrf8Q8SG1zAwn5F3NSzLeLS2CrJ47LFsSFXruyXx2SJqzAqfKsEveWkCeDXzLsEviRZJLHF3So8LLr",
  "key16": "EKgkN87ntZKzjdJNxSBdtLeRE3iMFJYUYLfX14HJhs2CtQWgY4DAL6UJmCvcbR1PAEHJrVGKxEwLUN4rwxkqbJt",
  "key17": "SN7cThL6pLqMHWvV1HagWSithbaXwob9A7DSrSmsA5oGZJT5YZA1pjFkrFnKvb2J5EGFR6wMn4ZWGjWRJXNsAw1",
  "key18": "3TjmLKkEg7MSnfaEHHBQd6KA8PbhNAueLZfXDiojiJpfJnVJpnsP8F3SMsf2pbysUebYtE4HUMH6U9H8ie8ct14g",
  "key19": "n2D3f7LfuY4b2iVRqAB8DjbqW7VbFzCuDYnsQARDiaZ11bkZjG9T3AWJ649XUpyRHugcGSgxs5P5PweDPapYsu5",
  "key20": "5LKFBW2Yf7XfSMP8MeZUh4fb61Dx2QwU3jSzc6wnwY6iAs3K4RS1Yi2fEnFFRke2DHyWxuZRkB9vXJAeSoRwfmk1",
  "key21": "3X1UqeQDHzy3tWgW5zAWCZsgD44eqEnFspZpCHnhm95tWEgSmuhVGdpARdkdBZ1kdGP8Gp42kJ8doqVJP1skuAZF",
  "key22": "4ZbZqAPtSRrSQtAaDLvK7aSrGUwT5PEZNt1xxQKpgen8MW4aD7KvNYz1Kmi1dww5vj4gptEPbkcdzx7prkBftu2U",
  "key23": "3TYNMjKvj2ii2v3VUt2tSt4g1MoRwWyEks9NGqDuvFrFbSZP39Q5tfXMjBDC5Zww2QHvaMwCSioKDLE4hkU1xwCT",
  "key24": "519Cv41AsMxp4Dxcg7yPpYNh17rPcuRSLVKMwK9vkEcED9ffQWZrTtrqbKiSzQ9bcL74RpNqjqcTmQjX39u8TdSE",
  "key25": "yLAfodctG3SzpYBUbUfUzni9zaFSfHmxX1nSiSkG7Z9TXyrgvyxY9VoEASkVx8Thyh68eqwnSCT4gpFykgD5pW9",
  "key26": "QthriPnrQrzRo2oVorphwUqARkdw4gEHyy3RjXiRg69uKAsPbQuoreVxfowSraeCboK41iwiTCrXxabY9eyGax6",
  "key27": "4rpXJ6ZLNiFU3BmkMmWwHGL7daX1WF3BBEVruCPemR99Knp9Ha5e1gQcRU2FLYZZPq41foQT1ZKFXaoDN5BzPjXj",
  "key28": "5n6HG1T4U75qXyFidRFChL2wUw2kjSNjEtYRoW6rqofa5Y2Wc8P2nj3YADWTc6j3gooayUYCajJeNHeKxxtQUNeT",
  "key29": "4SybkTtBSJdVs56ATuLa8jsSqoRrr9qz16dRdjEnpSEoVtEfpF2K1cL915ffDxeEXBRqNUSQiiGCBRrAbSPu9jp7",
  "key30": "29pbQ4zYxKAFce46x6H4yvibbP8PrgR7wNfo3HKJr7WvgHJLBCYx9PAKmCphrRntRDbWjCgUJCJTwZx6hoSdwoaG"
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
