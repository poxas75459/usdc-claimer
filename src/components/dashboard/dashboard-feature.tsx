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
    "5hLX7zUM9dNpLdecWEa8vob5tVePdSKM1wa3VKMX9qJDcvb5HSYD5A2jcb5T9yqjXmSrL8DX6nuTVN8HBjG28sEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wroNtZTQatq3oX6EPkapmJYvMWPjzziUQXFCLxqKBEcLaNkC39XppbSsCQGnjqvxmPeY2YijbMs2rMeN3uFas9g",
  "key1": "4vz4AoSRh2D3FBP7364i61DnEeSaFWA6pZy2qLbUSaGQFwL5dWNow6oPUhQCja6oktkYLiBxg3qdTGFkKAmCoqAK",
  "key2": "3qSoPSAa1cJoaRa2KYndHXGGjGqo6EM3D7xrAMnFFPnS2btAMMK94SFv9ZHs76NXiuL9Ayo7ok8PzzJptsymToEL",
  "key3": "4BPetsVcWgsZpA6myoe79VffM5S5i2FLe1PfWs8yU6A5N6pjVNFH7RKbCiee21EWimw6angWAhihfJjV6r2FUrAj",
  "key4": "4xQJgydwVs5E5urh39nDUWCnq13LX7SwdvSQQTB4jri96MhrTDcnAnwmNS3db9CPTJnnfZdtAf8UT3TJVzpHDYWU",
  "key5": "aJSZvKYD265y6aQ7b8VTw77csBhNcnLzbsaUMzXXoniUghCVdQocKPB6an11nUtQjMJRn5Auc6SmSNMK8Nxmroh",
  "key6": "4HrEmP4tpQgLPgoKMXnVunhTw9CQ7s5Zzk9Sai2Tnn9w9MCJK9HBYJo5AGKaPncfPbp5uMgwyJd3dxLJiPkoyDKR",
  "key7": "5tuoaWk8CABrVZyBLrdn56x8NuW24AVSfhXySyf1aMPTEsoM3ELtsRpjaBK8bJ5KDoQHPKnccYXLFB7ic9cGog3w",
  "key8": "HnJX6c2fcxBggMQufaTkkoQpyuUpohW8te5vV8QvRgtXh875zieWz5yGj6WoEU4gBGkpfyvnLqtpXuRWxc6fvo2",
  "key9": "4ca9M86t23sB8YqqhZZ3RgLTovhhGXo2aXDxGXBQHQERehhvvEoajs8WaAhi6ZFtMCVjKadWMVJmbWp5yRugrkaX",
  "key10": "4eEfBf9ZBAQqP4Kzixk1pHEkHkfXYVDdNspoA73pd1iU1vJNaWhZJwYHtf5U9TX8wFAfZv5Er1SoQ2CTtFHGyDHX",
  "key11": "3BVH4cRRaga4b9qz5FwweBTE3jxbCFdeN1cgRz1QCAbah6YdHfmWf6wK5Qkfwv9ZkGxcHXWmDLaVwbN7WdmqTvry",
  "key12": "JALb5VpnCEK2nUFRJ8oGQ2GHjojN19YPkBhsdu42mm1BC1NnP5Zd3CHkC5gguDvDfTzRmEs6zwJui3V5DTovuQV",
  "key13": "5S6cSNDcY4ENtH1M4ZxoVGdnJSYnpL1JYUko8wC42BD1hAcF2b3o2Rr9ycZLqmGXYCpjZz1rELXKZxuBHH5CbVWy",
  "key14": "2JU5aexpShWFx9vatnRLKYiSz9LRuodSdRViKN2SAkiiMsWdWSXGTxMdQGfA8vicZChjAEgnHx8jxf92Wqct4fLt",
  "key15": "44nHfTVQn8xXAq62TGRrfC5KRy8evMhRj6F7qycN46yKsPpQMYopSnjkH65x3UiWWRCqvgmkaTnzNmAKvUwcagF9",
  "key16": "4sz7Qzbn63LYFfvpTrxhNUiv3PHv23ZL4FgQHyYzMNntuVQ3KEZKeqTRrfZt2Tf3BZJTdDxvbcg4jdC8aTQxZjPR",
  "key17": "4NdfoR4u9jTW5QDbDQaPd3k4nDgU1c7Gi7jtWPwB3kMQ7Egkuze5kQ9nDiWSo8K34BQX7KBXRwaaQP1LQoUHo4be",
  "key18": "3PCmodSLanMjF4qjRh7MBhmE83mtJMHFUikN5MABYJsAWudk56fxH7r9wNG3pG2ESwhVpze8XNX7gJAB5icvz3La",
  "key19": "uUHtYnNmS2EoYPC9mNeHgfb8K6wUFp9DgBTHhxWXpAgQkarTXUxg8BJYVLhwEacXGzut4PDBC9Vxs13gnvJUvdK",
  "key20": "299gbT5nHv2NayyjMRG13FWR8mobtFdQeb821idAk2R4VLv1716SzNfUACq5NXV8UPSEqXEGUktMj52rWkV9cyFQ",
  "key21": "2EZcDpN4bgaZjrYqzBzx9kG5eUdZhiBkypnRsGPL5RFkY1LYchrn435usLEmZs5HRytN4JCiyKSndeDdTj7xVUz",
  "key22": "4Y9mfbh4ADZ6A8mfU4LfTG4aG4J3ENMNLMYxYFdbwMYJAzQwZRm2fUVcbxbznt5QkM8fMNJamp33irS4YUc8ke9j",
  "key23": "4wKWYxEdxKYrJab8UWGzAzN1wHgfrj3EuFf6wephEGHtrywRQ8zoESHSccgjJNUbGaWhHPmGoJAvjc3HVumPGnHf",
  "key24": "mPcatMxhJY6qDLxcwHKA8x5yKjAAfVToNNR3ZZfLrpKDj5bc4FG8VeUuuPoqo7vxZF5z9TBvFzaWiENpE2J2gYb",
  "key25": "62ATCH2qpTmo5uovVfRXU3b43bxNwzjBhXnYHBEcReRyWZK9wYzrCj17LnuqKtW4B7Zac8ApujrJCNfrxDGi5dUP",
  "key26": "2bNiNQhzubb9Lxs5YVWgxBxS96n6jagWh1QR4QhBeeh2haUfXHNyYn1QppJFvyeKqaxHpvjLHiyfFKmBDwiXAGs9",
  "key27": "3J8RcuZG4hzjyydfJnEM9ULYvDraqzzioU3fRTijJVSxHMSBQwEbZqqtTfJPziNA6b6x8a96hg8jr276YaoCf5iz",
  "key28": "hk3jD2BrsNyuGw1Tq7s5pdsJ9fWU6uH2RnoxSCsA3v77HeBiBNac6mENX2eJRt2Le5kyDoEYUtEond79qsvbRUG",
  "key29": "4V7XgAwjg3zCsrs7Q6b3ztxMa6gQLQiYsZSzkaopuXfots8F1QrPgCBZHFCRS8Xxm6rZcdNKpm8ZGwtoSBBHoSrs",
  "key30": "4NhG3Zz3G8etFbYuDPSCqCykTiwFf6RPJ4M6ayfC51BuQo2ghGHRG6h5r1Pdd6zB8kAs6p7rtV3sZ4EcewqVMqj5",
  "key31": "61y5csEAVwExiZxZod6zrg9UZjhwEn9KCpG8sw4LKafRBndMUkhb4uz4xfPE6oWnAFH5PBPSUXGvkvJs9PqthqAi",
  "key32": "5GnwpPJWBbg9CuextE6bPhQbmxbtSJnWgDZYCCSxW2yu5ZPBvWDTVj49xPZzt5MhESqG4bJbrH84YJthiJnHWPYQ",
  "key33": "KX1okQVLN6AEUpCHrkGh4vadqVeHKuWMuQJJa7PF5X9an8FeveGSKeZKNM5GBhYziwHzZhtr2nWLa8YcHTAk2nL",
  "key34": "5vcGoAojbnc5VftMgEgS5MsPwGrGmdufWMRJQScHhXbUUXZbLo5fZvw6rXrLBK9q9VQtZJ74GwrZibGQrA7JqTR5",
  "key35": "4tdVMx3FuMMBfT5STHqBVbJq3bAayvghPCnhAEs7PtGyi7VR23MsXxjcqVDqs8k7SB9L9RzZ95PH4cBfRQvmiDwo",
  "key36": "42eueNuGQEjvrLQsA725BNyiD5FLaNBUmH3Nqbg1LUesEf1dmrHGHKqnfau8eco7F1dFXbQ8KQYJ7r5PxP3Gb8rT",
  "key37": "HuvnKVCvUaEcMM6QUPEr9M3vfiX95DNZzfc6Ak7X8Tf5aqQX61uSjohrXGyex5zTUZzaSiG9L3PCVMxxXG1rDqF",
  "key38": "2SexTNHwfyKzHWfA1XXaVfaKrZFjw73EQTaDhyEEaT3VhyScEyjhXfcDqtsBh2nPJWoUD4g2AJYwQiAm7G2WHRh6",
  "key39": "4cjjL3Aipgn3XEoXqFA6ymTALqFygcvDGJiwLgdX7ZyN2UAvaqdsfMyvW9cZYSt4RYaZUPoPafX1VPFhzGNpdEZb",
  "key40": "61TsFvhcwVBTd1xuMyGLbkMJkJEG5ftqLf9GXjHE6CKFsirxxBrNvk6WaDzecHdPkwGqwM79787NjPDN2o8pAUd7",
  "key41": "zSR62T8yjXZq8GDH5nZQj3cWDwFcR9HEF7AvJ1f28K8uahMiFna2iXbPNeAAc9Ft3LLHbhok2V4vGcYJUtxumR7",
  "key42": "58Z9bVCwBZBkBa4dT2fdXcffLniwwFKstw9CeEmsaEHuxbKCF2hEuMgkrXEfqi38822ZUoCXpZAeBtqnYaZKsQby",
  "key43": "4tQn1DPGxjTp9Lc8s5wQeenvnNkapbeGR4Q5E6J5Asv4F3TrQS26LQkthAM7oNSZ39QcpRPEmjkXa2t7yQvpYfyP",
  "key44": "5vYErBkq4iok4vwBif878YBkYNJqf2xTNo2wE4H5FmznhXD7gBhBZsf7JsCaqoUydzWon75oT17neFj27X6vj2jX",
  "key45": "2xvHvy8aHn95NsMPM4HBsE1XPXwoL5yK7EZsrZmnqsByZeepfhodG4nEYvBDdng1c3VPDso2fNP2XokL2CKyuVJS"
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
