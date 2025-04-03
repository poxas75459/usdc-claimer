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
    "ExXAXUPEq2fEG1rbV4VsmJHbLrFHv9E5MJDjQL1hXS2FvB37s5mCGaj1vExQjGfnr966HEi7Src8btySemWXCct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Po1dzmwNwQbvz1CGoyD2iimuppcWsRbZwBoYnrzM2p3cSLcjvgTHpWcrcRVqubMjrFcmQWSNzmyVCCE3wwFfFad",
  "key1": "3QQecCRnqvmS8rwA4tj1uavhkqsUcb1FMwBWPJpy6Lhj5B5hT8SZCDc9MGXNik6b7LZiASeA2GFxCHTHfJYHWa5y",
  "key2": "4t4gMs21FfDact9hkerDooKnUZCc5EbaKY5EDYWZnUJKBmVHCi8pz451KXU7f8xybiy9kurZNbmRhQJ25cnZqjTe",
  "key3": "4dbXBNbAvYKgaaYjMsdpJTHLDecLjMDoiHeK7925q4Mtp3DBCxVNjbgEDRat5MtMVAwBZc8uzLpRfsF4CJmkTK7a",
  "key4": "4AaDFA9KTzxbUWEhZcMGBWcQ6fH35MB5EDW88xZHpLjx8FbbqJX6L19h4EqxW55E7frwxLTHWdNjUn4b5pmCy6U5",
  "key5": "43EXVU3B7W3VbV5Lay9tzKv6uQnt8vgW5T5Xn9SW98y77UByJWjm6dsyY9JjMvmfDEJ4AUvu66CzZNK17tMFSh1P",
  "key6": "4NQscWgoxS9JHbym484H1jNrvM1CYpi92FW9CwDD98AbGkxdmdqm52RvtWyC9gmRks5FA37f5ZqhMJHRP4rEzg6U",
  "key7": "4sxVjXTBasXyyKpAsd3zjPW6FJ31VgvgaEZs9xH4wTxBQNcmPprXFoSYdJBXBKL7zGyULLR8UvKV9kr41sVKuJg8",
  "key8": "3mFqtVsGoVhVTYV2MgTnFL2xvZnfrwz9aNk1G4npKJcL891Uhv799H6CsyKj1XCnZkCf2avxFyuCtQCEaSbQaKbZ",
  "key9": "4miET4jY315Rrodcyz2oaJ5uGzhmxyPAPiog2UW9yQhCVLJJiULbjwZhjwmTs6dC3JCyUMc2wfTxTWUfhL7Y5ewH",
  "key10": "kZ1FMMExSSSiCCxbQCZmo5kdJuwf2mgTADZUZA46PbhDh7M4Xkk96zqW2KYJ8RjPKDHbQxSXGiDP5H7QqsApxAz",
  "key11": "29djTcegrcCqe54TCPsdUSz79PdeU6zAqL68Gvvpjrhk9CYNJWU6NngV2WfYS5hiN4JW6h1xZhhB36wXsuZF9Ljw",
  "key12": "2PUwhc82ag3Hvfroyk9zRVUeH6bFhus1XMNRnWUijqwcjLZ9Erkh6H2kNs8b3jikDB9uze9SkXJbq3JptccqpyGK",
  "key13": "fg2iq4rWv9R66j7TyWwwyZnQbpU3vUzS6U5uXNG48kiSofup7tMqB8GBHnP36nppRCHh2XWBxKQ9khFuZKM3bGu",
  "key14": "fAPcoKJtzGGNELVrA52EBF2ajNettCL5Wzgt1rAveJW4CWqGYEtTdph8C8pyYwEsmADFmS7nK6TCC89DqTCGTK9",
  "key15": "4t93M5kRUDgrzM8Zhit5oxaXM6sQCgnbM9cJJbWnpYoHw4LsmxV8s9G2C3QJpBS5rpaPTybqEkPrAdDYPDR1qT13",
  "key16": "3YTLU4rQ6ttp7kBPc1ueDgBXpMtRMvVrzpkAfMgLDNRfdBvSGCGrzNdWN3JgAf5N1R3HwR17CKc7m9SGrfiKM7Z1",
  "key17": "rjt1fJKtJr9878sB8Th7u8fTQoodcHp2tr8XJLr7zebXpEHDtyP7cUkNVyy1MdwhtEXGLqGGssi7Pn2KKyseCXZ",
  "key18": "24hJMvj9b8BCNQm7eho27NBDebg1SVKwesLrJN38YP3uwYWUUy3EUeKB81PsY15NqPze9qagEPdBuGpZJKREk8Ca",
  "key19": "58fDvBsLqYiZ4Gxd7qyuxRLYtewxsh9FBB3KavuVkjgAfuTnj7d1E3kud55t3yq5y7VZzLhKCBrZBjUVow31Wc1H",
  "key20": "4Ei5wbUpCx3E9a7C5eNkCUuMVyEN2dXR2R9QpDyabBoAQekwgR8dRekSspqNNwxo2KDiuPzx1TFghgBg14MkqpQ7",
  "key21": "3N9RRSXXoR4H3Rtfm8ziHf9iuu624iVtLT7GuhH4X7BfExLmWgWJ4LZzAm3DpNoTgn3Unj5qHm6A5jEMZcHBNN5s",
  "key22": "51wU1KVDA2Fj96z4w3D2GhnC5zL2EfX95drJwnvf6xAWYYmXWDJhoaqH6K37EjaSvNiJKaHaw5zUgdVLsJz2n6TG",
  "key23": "4iG9xNAkE8W6xMEemH7832TKq4PxLwj59XgT9SYNn83Bz7ovBBQzLBKBZNbRgMn4mg4PSNL342QyjiRphRZcctB8",
  "key24": "4f8zuPF3vuCZfdXfT81aKgXrqM5ta6QEshuZmNReAvJk1iczDh33kPagBW4MsLfpwdvAgUqyhj6Rc9dRCY9JnGPm",
  "key25": "4MQ9w86sD1c8KqguN8F2fwX7MFKcx8V4qBohUU6qHuvgetWmTM5S1ZZCdBh3HLv1CUXsb6Hvtqxqkuvh3SBVQWht",
  "key26": "3v297xRhhWRBL3ZkueNZSPMDbB2qtyhZ5PAYX2zGM4iLhkxRmYeSbNa5H5ge3eSEz6xfAjwkR8jJBU6Q6trinc3s",
  "key27": "3i6nmPBTw8yxoHUrTycqZcv6oXZqmW3pWjmXkaFKmyHbvyW4cJCbGhJ8tqeYcPZycAQ8ST5xvMPDrR8wXh4E76yN",
  "key28": "23EWXUqKRUMaeg1dsA5M1ZdndMdbfNEh1pe6z8FZAg5TfPESUKjxYk6V7hyrVRJypFm3PaKhxf7X4zjN3WsABt7i",
  "key29": "5iyY5PrgBN2CfqTwTfWFMr6X61WauXnZbMnP4xMoGojbiG1wLw6s6BhLS9b6fyvgrivu1cGPP6FtJZZBSNvF5e5j",
  "key30": "2KkMbYsco1aih5muDu8AEi5uo975Tuibi1wAvW85KVWaiyp7g3PGoVissQWzrRm8PMZ42ykbnUi2m3hNczft19UM",
  "key31": "5SNngYMfksPMwxWxJvLpYaKBRCqYMFQRSGA7ZmtSFjrzeuishFSwaGNnmsezf9p8pCJr1sgRSTS4QZeZbtSpMeNb",
  "key32": "3LsprVhfqKe9vrXzFYA1QMG8u1staTDtR4twZ1MVzK1ta3HsBUeq37eubJy7VU3VdYtRyBgePAnfzDUBCo9QtA99",
  "key33": "482o5XZXtjK69uGruwAdQdJ7Gh4Xj8ARMPRjTFHCEXzqdzC2aN3AuatnoBZ1prqQ6xJ6DGXxwQ2G9LsxgKEf7vPw",
  "key34": "43VMYhd1ne5Exj59y8fEm68FVTt5DeoewFk8E7SDoEypRU19i6P3UrWuqXNvZJiXyixqfPaM3Tz6z9nz34PMCxco",
  "key35": "4294CGyrbV3mfTn1Urn7M7VpRytvRwNzxZZQy3mHN36JrJY3Uz2ZzZFZ2j17ZMp7rcGsbpUbxN13r2WquBNUEQuG",
  "key36": "3popNtqb5kkExMgk3tKBysyHhuaj5irQ471fvCfM7bdwRsbw8i1gqSaa2Ve8wN7AAsPszeAHB5Qhq6PRQ8ZVABTm",
  "key37": "5Sp59V69tGx7VN3LFuvjp5nbNh2LJJkmQ69fcXFxtwa4QeCDafYbSXfpMwENzwFqQTyY9rxEvGHisjGqrpEiS3Sk",
  "key38": "7fZ8p57NU3XfePnk8bSQcFYx5LjsJDFR23hBV4fynQ7MWD3hhsSBEV8VPw3zJ7nd3roQFimhxRN9anaRnmbBrCE"
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
