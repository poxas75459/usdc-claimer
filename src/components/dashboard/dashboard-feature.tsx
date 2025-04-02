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
    "26fcpyETWVp5VqDocTRcu4SYBaNV8VgCmmBmZStf1pHVwufuHEoFmy7zjgAroPwru5BhQFTdsaQp3EghsQqBZXB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ZkBWUtJXLnJVMZ4Jc6SjF3wBX3jRMSEJs1X31wLsYWRAsx9HwKYRYQSSwajNkLtAEMYfywJGb24x617KxjfVku",
  "key1": "3J9Boq7r13Uqyt8kMLkLdoigsXb9WApko1M3iX9pc4muBTF88BQvw31VRiCwvqNchFf68JvQfeWALq5DhTFUjPZX",
  "key2": "5wzn6qMpKXB9WP2Np5yicEozEuTghS1AQYLUX378SkAKGx1rHyhKWsqKbKZ9XnEHog1e9bj8SHxfGyw5vzK5KABH",
  "key3": "4PNvmWZE6goHkxbQCH4iAaEbnJ9TbYe2Cm6i627tcWpepzH7DtnBbwsmcEz6cDEbkpSnNzhisYCoNFrB9LaqHGYa",
  "key4": "S3JL93FEV3hvpAVvTZ58PHiwpBD9fjUQxj4twVxsF9d3cJtjmA6jzLwcouhBrpLMx5bbjNcdQkqzLbg7hTFSCLi",
  "key5": "5PmeTHVBynmr4XFStEiVhDf329X3WxTNDZy9tJsS6cAmAfAkHyceMWCuN3Sn9wFxJjrAABsAv1x9N4E7C1YD8iXB",
  "key6": "3Ub7y9pQmoCsm5SeuguQfBKTe824CjdS6ZrSmXrT3hSXsppbvT8FAV5yNmsp3A2SWixh6g3Sk5pDtHqoeU5mbJ7",
  "key7": "5nvSBmgYbmVV3HGoghi2hUAkZUKNARguraoCWtcSp9ZgEb3biEpu96ehdcWWiV243FaxbFhXdrQL3fzm3SDFgF27",
  "key8": "2QupTs63GWfpMrYsB3A57meZm4APgE4vfJBSR7ywmmbDtwEbX3PCy5dT7Ct3E357JM1dW8WUBdX6CrY2GdPoVzc1",
  "key9": "5SGnD5kEiArHPetN9m4VuCwVnasnwbCDGT4F1QkeisaCjCaRLN3m7Md9dCDz4GUQZMuJs9bHqyYtCVaerNUKAp99",
  "key10": "5u93wTigcyDXMMiRW1eErLsgrGmaMRgu8Cjm5p4VLdn4Qfv9DezkvAEHhHXspdGqY4BWyoTSiH5ajYTkQGU3J3g2",
  "key11": "2xkRLnrbmkBk96iTtEFZ8o2CZT3HVkw2TKhf4QDN4v1h1iySpTpig86H2kpCr8uJY9wjGZ551RPwWP6THhzJx3Np",
  "key12": "4PzVCxkyrMXKQofELuapNR8ZSYdQLbMKz2c38rrREePTVxnHPY2K9C3cABcbFGpStW2G7MnpeqVTTr4SxqmYPz17",
  "key13": "36vVqqckrgd4gbvQcspo26ySSmhxJ18qJV5veQ1ojmssUoUsYL8VNYj7RdpbwFrkDf921nMQgFBS3n7WiPeSrrnv",
  "key14": "S8XiAuRmF2tkTe729WxGrtwTwAiUnYEXJZfyUct2XGDgvv5qfYpz2Z8RpmE83zHUf7UACz9UrXuVtWSSq3HkN9A",
  "key15": "5cey78voTxedvNfH5A6qYevDsJ3qiFmn2ykNZDX62ajnRkU3QaYdepVR5TSE7K9mjycfqMcBGFYHuuREDJQxQL5L",
  "key16": "hhUfQ8r3jjYwTw2CQ5wMf2XyXwn8UcZVEaw8U11wjP1P4paiMj2q2gv2rC9kCq2uXFJDs2U9LkPhsvvjfFW5pBV",
  "key17": "5X8hQccBduo5t6jCmJRGgf8yHSU46Ya9uFzuV1yhSw4L7A1nWvRCfhCBEs5sCrdn2tbk4q78nWdASvSQYM6HeRJg",
  "key18": "65BZ4fRNyLBPUNweHuBU99iN8FRFQomaUTEFa4iLex5xYi9pmMDetB1QK5zjejKi3qrqueqMBFk3S8XvYFE86maU",
  "key19": "a9zujkm19RjLjbngTaDWsVPZbqFtgdBhiRB2tVc78P8SQrpTbRVkRaXPBDvyiTtHAgG18uQqKybJJV5A7VsYs7A",
  "key20": "4JnbgvEyCBVJagZCsBRyNpa2Z3PW9wxrBMimuWSYFPj6NTdJQETyAohqFmcQTRpxUF8ms5Hf4jYyVrTdP3DvGXxs",
  "key21": "445erWjAS9aTCHZPXTKqmANfBzZLhWTQUUUGZQwg2t8atrAyu1KwaSuxV6TDnRJHg4Eup6eygPSKjLUZPxn9ybFa",
  "key22": "dHZKD6BccTJzagkMMgSR1NeGuhtM9tm2Rk9qqk2YwbYuhHrCp3dDFYrJ3eiAe9HpGSCH1u6VtXz6qsSLXzpvH7F",
  "key23": "5oMXNjTD9i3A8ranZHsPHWNp183yvhcKN2YcDREzTxuvddhc9mVqHSNaEKAbd8BagKziwEiW5jNj2C21hJzoKkyP",
  "key24": "5jRs51aMAbKwouzJhs28WEBnBUWyVN8YgtBhC1f2X5HD9hVvqTnZVbowyQKjx23aAdpAnoJVQNHej4dkSNp7BRB",
  "key25": "4MAAhM4i5WGg5QggSztTnT39X2UPzE125JxmXPapLE3GEqFSUih3MvUut21SXkhLLMBRoKrSbtauYLn5rS2kYp91",
  "key26": "5zorJsVhgLLyhJV13MGa7mreGJocLypjRvjp9FgajGzp2ii1vRQgE6r8B1TfwsxpcPXyX4zEXQLYLTAuC3sSoHGW",
  "key27": "RY7D4L86by9pUsXrasD633ZZDQaKPHx7ZfGfju6SVbFFq2tdQwLpE3kneUy7yGJnVV9Rjxf62Au8qF6W7g77yby",
  "key28": "5oVziGFhrYSLeQii3fz1qjmwoRWVmJER25ujSasPj1fcMq38DTyDRZ32z9ia1P7BXdy1tfURq6SFPtij46WEAoA5",
  "key29": "2RfXjV8WUR1KH9RrGt1BLMgo7sKF2u7oKUMbgB3m6qp6GUmKZ1Q1NVGjxjYcKbtoCMAJT56vvG3qedLsBz6zi11u"
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
