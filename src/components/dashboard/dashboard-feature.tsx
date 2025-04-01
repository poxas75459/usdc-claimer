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
    "5iQxMWF2VdweSRZYDpXvQaiSEhC56b4kZUTbFdXXiMgvTVa6wzEKEXjkFBGSnyGiyyoXfXJWBCTv5Ft3fTvU6yn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bG6xMYUWAyJKEbUK7SoBhefBmoqp5rRKjd8zb54txvfaKQqkUcRjJZBYuXFFyxE1piTkPwaeNeAXqgeRwYP9xgg",
  "key1": "Vna9oUZvZqZJMaEATgDJMyBahqDTr9aqDgwfndaxDqW7Kg6P5vAzt5tQ1PB3pYMqRepJvybDh9u6XafCAgAiZAt",
  "key2": "3QLHdTrL43RZwHqsDK6YDBRwqCmRUwxdmFJXZfZAsVdW4WfJQZFqShrgh9pdSUojxUWLUMcnUwaLL6Qq8nfkFkzz",
  "key3": "3EQKxun25vDswFfqTBVo6ZaEyM9mqKwQNKjgKjuavk3646LLjfZnXcrdmfWGAXGym5xxGwueYfPSMJTymWi3kGAG",
  "key4": "sJ6TfntjxCanwwAWu44RPZvcXY2v5hyj5EBF9WhqMaAfr2F3zYUsrknXyD5KLr13MyxsSYWVwo1xPLyXtKhbcY5",
  "key5": "3awmwLVk5rRmVVYChRgratc93pgoHp9wW5qSeQ5ckWpPbAtgvzD7U4S72bfRA2xynWZpjWjmwZsC1NVkRykbjLed",
  "key6": "2TuJ5h37F2a5msi6ZBe65hcAY7WnoELoinaUN4GrJ2HucwG7avcsknXikfy55L9MK2bBZ9PNr8HBMsLPp4u3Z4tY",
  "key7": "33wvsapnCgzXawneQWM7w47GJ7bAvLNn3cM9yMLKpqke1gNpDs1r6NtGcswnyPLLGxG3NCCTNu6rPAqNdKZGbNci",
  "key8": "UTSGV4BeVq8FQ1n2drKiuV2UULkXWxRhoXLmgdjUA8sTaVG9rPTCs4qEBYbe1Axc7VzYpvRCpsDqGX59GXu1AK3",
  "key9": "L6as1J1rpJbit44go11xmhcdw1aEYRfLeunsC9B6xB6qui5hdrJ9jUrVR1prhDFpWNRbv6RWh8kdKn1FA2PScAs",
  "key10": "P7joFmgEUARnFTDgnGGcbQfYKAKV9z8swkw74RHQ6akcToC8one9xqgb4KCo7NoMTgVPrd6QPPeftGoJV3uTqCV",
  "key11": "4YPDdh8r5UYBHQpxXeD4vG7pzFse2v7XR4DqxyLoo4gq2H9sw4gpUVnZNjo9U7ibLuVgD33QuYvRrueeY2vMiqp9",
  "key12": "24WPLNvZZav4UL2PbKwCV4yFLfhcqX48Re9bEutr2vqJN7JayNkugpZ9VdfRHSmLmP41gTttqG69thNy2AydCVfu",
  "key13": "2j5uEUhLQzUt8q9kfwkARPSsJ8ZwAZwZn3Sq73eXXUDnywhhMThuoBjn1CE32GYCXsogyKao9ufAVnnZNW2EynCv",
  "key14": "4TtrAuh1GVRt5xiGNamK7PUyVk7t6B8AZCy5dYeWtxZSY1EjVoAA6ZxmrBadi49fBF7NdsXEonKtF48LUcFx2nbw",
  "key15": "3geRrMcbQ5VqyUWQMBgAfxyv4fg538JKQZMtyRXpR7KZbBGwEhX5tPeKrSorKfXMh89WoCYx7HuJ7a3u4vkNyW4P",
  "key16": "4DqTG747LvSmJPwCGzHN1cqwiNsBp6xpEHiyke6hrqsopJ7sUN4GcqtKEKdCXmwAVNqRE9cpHgNzkmxQ5f7S9zvr",
  "key17": "F5B8fUTkjfmPzPPDqnTBqux9tvcYv5atk8HvUAPRDA9fPThKjhSjrTsUBKaD5RiVPhb68g7fuRqoyEsZPWpAZTd",
  "key18": "4mR2W6BLr61AcMSVGbzoCxwPefbFrcLLaiMVbQdNCvTKMh9xNLF325GPbPbgUsMvJSqZrbS4EHRrT6VSyjHnf5m3",
  "key19": "2BywgoEozEwnUpZ295wcDv6EB2VNTAX9sKdJk2x6CVq4U78cDyW7fHUVt15GNu5z8pLcC9WHPiX3KvgyGvcvu817",
  "key20": "28Qp71GKXfZps2L5MxpCAzq6c3nhh6mY9Y7nXp6q2X6DEeGsQ12EEkG4XdxPKaqjgCaVi4BSfWXcrchwtAGkbK5B",
  "key21": "JZSJtkZYeDhd3DZgA2YuVUa4sizayDRjDk2Wg2PdnGsMMZCnRNPSqhR8WNa3esT42GYUyX6ZvaX86jvDpx5cdvN",
  "key22": "43a4erbQEoDgCmUYvaozDgf8CQSJUvbdj3ucnVd2qeChRtBL25gEqPn5H9m1eRTjiqyHhQYYbWHE9TXbtU8nwucB",
  "key23": "2a7JbEBVt8ruEak8cWYeVdkzL7fRpCfz2d6nx7DaYZkKv4AtoQJ9ANL9pyCFVdRY49ZeePFE1qKZkQt7Zf1Xjv3L",
  "key24": "4j8X8Mb13AoskwEReuRZ7c5oGAXqVC3F63VeBj6SQaswiRngkDsE2d8J3rkP2JHoptxMEf9MEFFBebkiAMApxXxP",
  "key25": "32Zg1YHrf9nMzPLnXS8J86Qhoy3jKnKV6zZsNnqJNruQnEExUXjEBUV89oXYcirZjAcqdj5Sau8KJS7DK8U7JTiB",
  "key26": "5XBFwXXj7VMwkBVUoYLoRzJkFtEivpue2rTQmrgpWWApp21H6d2f3Eq7AQa5Ey6njv1EyYgABr4QBa83kbtMqwt3",
  "key27": "37ZrtwSqTguXvgjyju7BECWqtqH9RWgr4Nc9q9SXBguWLmYZ5w2HWcL57Btuy81JHifQC3H4XGxtsux3GjMZ6tni",
  "key28": "3U9gtXsuyUjF7ethgs6jFAtX1jVWmHX2uiNQbZMahi8Wv3iJ6wer6Yfz5tfUoPAuapLDbEWuWBFd3XLBzRahg8XN",
  "key29": "5YYc1okfZZQK66QmfarbYsQ3uBn5rP5L6eQC4PNeL9D5DwL8Tgkh7xvq2XTZirBZWzzYhvqBEsg3wYBoxCJAtvBv",
  "key30": "3BKGEoAdFhV7PrEPPkkBsaj4F9qFfbJjRxBc61v36hWQHhNsHTiANsYe3GA5pQ6R4mCMenRaD6yi3iYt7ggGGxYT",
  "key31": "2hGFZLc5Xh9PhfqFCE3jDTJJrjGVwGApgEoUv8ith79rTmFaMR9nFvUjXoYw71zRWsedzBXP5AsuxDoKByNcoCZJ",
  "key32": "4HE2CGaHKksaAagT4mPQFoDFJj65BmMxPc4mcFQQz7CA6zCmRcFUMQR1x95iVrK3tv1nhuFcDGCBGjSdUTWYMbZd",
  "key33": "S4NWNqhXYTMRiVCzcqBW6oA5gmf7BjnZHHqJyBarvK4BpaGdisugJce6U6pKQmN26ssHnb42wswVUoP8govN5xx",
  "key34": "3PQmeVg8ULCRV6kAR3n4VrL6JSV9UGsiyTpToJ2Hjfj2KVuTSZfQ5RQmkk92MGm5QTiSG9rs2sifDrZDAyU225W3",
  "key35": "4PBs66b16DqiqKqs1jYTF66GYyHKQc2ZHQP5mCsUHCTu4GNRypom3gZweZZf1KvHLrnEfQqgiLsevv5MB3TG1Vgo",
  "key36": "5FiEB8GaRLK1ZXaa3BQZZX6zp1LKKNMowD4GLWdVLYbeS3dhFx2buNRKqBvspR4VVKQ743DXqttmSQrzjzjVYtVA",
  "key37": "eExQbiXkjGU3yPapyTb7KL29xAG8oFhNwHTfo9xpPpjQrp6NBnFa4QfiDk7bEknk9kYgQJUJgDfc8zeWDTgBLjB",
  "key38": "CnyUc5hukr8nm8bwgGmnjcZV8XhXBwK64a1dFVnouh5sqfz3sTFq7BTaXJv5n7xZnCi1QttC8KQBthv8W4TtbNN",
  "key39": "67QcazyfL3maHMZN93iLi9f8jKeQT2nsQN8Pqhmvn4o2VRh6uZbkU4N2VtdrMVx7Zq785NDTJZzfoSRPCHCkbQc",
  "key40": "2HudmYbYxq8VdRbQjVc542c3CZMzzkYymuSopBZT42ZyZ2VYwi3L4gmnkVtSNttNmGuyGNWSgP15tzPdGvRC7XbY",
  "key41": "5u2uYBvXHocqwiUuyBLDniyg5snFbQZ1MhzniWmdRZzXft8DKk2yNQtXkAZZ6rZfrxEeKG4UBesqb6reRqQyCoXz"
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
