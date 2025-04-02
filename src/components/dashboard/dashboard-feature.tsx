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
    "5fJZYnunxcfbRznzQzoUqVZHvUCEv7sWeXKZyvnqvC97QkWZUqNVar4GhbTRYyoewmDisx8P2Naihy6pdww4WWdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LZVESjzdmFVFgecfqyTQV2yB7qTT397P95u5SgMZTux9SQXpP8aiiZ6sC9nNP8W4m5i7HgBYwUucGkhZsww39F7",
  "key1": "4aMdFc5f39giHU3XqNvJ5WjwuNcxGtFSqFq9BCjy6jLNmdsgjD5FQU76egvZy8C5iY7uMSMXhyyihLCNKuJ3jqUs",
  "key2": "4u6hrPWneLYA1S4YW3rJuzWbAUhjr26eZpcAkXu4UNV9dbfaMmBVBZ4jnSDZBuz3aaVYYfqcJ4puMzFdYaxArqcY",
  "key3": "2UWCrASYjp1ebWwTU4ykxiQXy9an1em2Q3EWZFavrbohKARhQN4vukyXuUynZGQgdaUvNBDDbprZzr3UVmucLTsM",
  "key4": "sxmWZSRDD85jeiezm6PEjAUk3TTdsHkqEsPJQfRjBb5Bqrn9qAtS1eyT38HaH4wTBTYNwSs4npeAr3EBij8TbA2",
  "key5": "Vf9c1xTsRtnxWKvuQ45Ti7pTBJL2GhENBKcwPpSvdMttc7bG7piFYY5Vzxpnok3PBPtKAd4kJgUncFY2jvdiQFv",
  "key6": "5TxWSghcpboxDQmWqQ2gdf1Wq5KQ8DUudAhgKpq3MwJe5Vi557PTQgchnYLatLke818VU56NgUGu1ykfJcq6qp3w",
  "key7": "3FXWyHJfqEbzBo8tRvBkSNc6Pn46ZCZomyo2DNYxLzraPuo9YzVxfndCDyyChDW1S5WwncwBoFQhcKfgQjFEfm56",
  "key8": "4iXEMryj9J8m7e3oFCVXBSskN9AtihD9eC4Xj2xX7Wvm9smaN1t6RJzQR4S6qATsSEmjFxmg12nNt92og6DCFqrB",
  "key9": "3P3R5z5enNEzPV8B3TEYLuoxvqqKcGU9eSqGpEK6237WjHSYVcwjdr8oDLqqfktxZ2NxSHP671f5edfYZrMP7sR9",
  "key10": "58EYZbVzg2qDYMbmoFzJjAxLRAGzvs1uDSGoL8qNkRqNkS22f3QqzPP63YmJNtnvgtrYSLb8ktboMGH59w6P7RU9",
  "key11": "RxDb7gmhXSr89FF3XW8gDJuswD7nxFSgtXb2FtdmwPbJAxXLeoykJCG4KG8qUVdqVfSJDyAN4yJDYm48ExWpFAH",
  "key12": "AMLT3E2UsGB8FHBHhLcUiQhDFXNYQmNkvrug3X8SuLeM1p91sXFtYmnqTZwXi2P9nnKvEEJT9k4LnBhCEcoQqqD",
  "key13": "2o5sztfqxqm7B1zFBZ9Wnexa7gh8jWX3ykSd5UQr46rijp9WMFH9FVL5vyyTLgPiWGbGThdnaVK9Srkw6STZDg2",
  "key14": "4VdJPQyLNif7wfp9akAa4L822KvBfptu7d8WNY3kZPT1wDr3FqZ7fX2Fi5yqK9miVFr9doui5ggPziHLXx1SHJsb",
  "key15": "5bkMZKCt4PAfu2eAuv4L8aHjoA76K9iQ2xFNzRq81vgFT3PFaxSFQ1tQ4eNaKs3RSEZEtFKKEqDS6NQAxYCpiFwJ",
  "key16": "4gGAqwPcQUVhHug78TGA67G5h9FCk62Rp8b7bSNUfe6UaM6AVTEBkb2Wm848TuvfEyodgCggn7RDeuKQHnyGasTX",
  "key17": "4M7dWSvcpJbJYgrwMpWwAFSaZLbhigHPeKuhhwwBPjg86NmkmophgGx9WYQtghvqqDJgoo4m176SKsiNnaa5VTQf",
  "key18": "3fipks5BnYabGnaSM2dHoTv29r68EdvVQjG7GpjHSp91yPU8CxKoWVmaiTSWduhjuXK7yvUYpRV8cwoCGt5yxLst",
  "key19": "34p3SFQ2az7hxFM6WuDYKqd8uw3qfQ2h6YdFjF5dNRjg5g4Pkr7ZUF5zjdEveGupoape1dy296Sakq3CLhWMXi7q",
  "key20": "3btc45Ez4DHoYyP4UwC8GMGsKHCrJ1MDrY22HtuJRbjEf7wjE1pkBXWgRdACuEF1aFtUcSu53puLXqY4p2q3Z7M7",
  "key21": "3aPKU1A3sy7m9x8917TVNSVfbL71pdEbpFhy9eUBt1RLrwXnNwzvhrEH4bPAzdebsUA9wNokrKCzikvLFrvPV19s",
  "key22": "23m4TFWw5rmSDXenCGPefWtn4mfZKowdjiT5rW3Vafcc2QJbCS18SrzFUbSmyXtvq8dVq55Sv6TFEnsf5VUgdnFy",
  "key23": "hc2KqoGQK2rFpeWNiLmuCcNdoVi5Xng4VbMdAUa3qZhCBJtUgdqpVUxZ587S6LuPHqVXGExZkemGRnV33gFyJih",
  "key24": "3akUxL7sqrTggEKRH1AfNdrmCLHWxYJeNPdqdJ7MebD3Htk8s3bDj25ymej2xo8F8Kx4uHmhLdoC14zwV7L5rure",
  "key25": "3AuEPSmhqcNGSjXvMsz9E5nkNdskUqsNWPCMDfAGWboMqa8nTSTzbwqk5V7CyCv7e57G5ekzC6EjBNqnxd233JjP",
  "key26": "4kPL6Lkn1TcD5cQMML5dAvzNE86D3d7qmFRuzCUMUsW7hHriyriNFvCMRfcWq5LSjo3Us1Cwos6HZ79jwX756vYL",
  "key27": "2o9J1G2saRYYxC7sgREuRL6J9VewG9hMQA9oM2kw8zw9gM1xiShhDqTxbF8chEgGhFQbUJk2e9Y2vHmqVSt87Vnk",
  "key28": "5iJNnBMYnysrix4Nkd2pAuJrtTni2uFo2f4FnmCnUpnDemo1P26PbCJmn1zgZPvp2w7b4gQrabDrps8ghUXtfj26",
  "key29": "23n7HsHE6ACRrGFXgd8sVXxvX9RrW4tF1SvkweAS1vU2DNNattWBm9g3jjyxTemrL3pkqpSp5ZxeRLD6N6WL4MmD"
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
