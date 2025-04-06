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
    "5LpbU1swTN7s73odTQd6YXsWhN5QZvbnSWFTWpVksi9SFBtnjshksJydR13g5hM2HiZbya6Y1TEg22tjMeDg9RPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QRCEUv53d3mUUeSS5w7YE9BWBNkBcjsMmNxk6EGhdCDyx9nuZP3Y9mdzFH6HphFkcPBRgPomxcDpNBRq6dfdzW3",
  "key1": "3TnWvpdmuwBAd6dxjWKF7gWvauPgUbzPHzCPpdJ6F3RpZ7XVnQmcK63uErZXR7e82MvT8yaaBtXKofBNJVS2yPFt",
  "key2": "5PyGTjJvLhKKQbbn7E7yrqgZbgDNdLYZPRug9Zv3t9dWv9EZWYEPmXCs7uww4nJgHJK7SxtSYyrZUEsKrrK9ivAK",
  "key3": "3sGjS8fGdvfv7Juukc2rVTY3jLb5n8KTw3YhwhUwEDXnZbT4jotMCJLNe8qvLcrdH4tyWFWYYzaEDVeShy8DdxxW",
  "key4": "2NsFvNyHDqKnA5NDc6FNk6FBZy7KFC6R5LR1tU7yKm9t9ErfbJdQxZD6XhbknVWvxxQHNGHai2ex66XdsfW1BKPd",
  "key5": "4zcyWAXbvgpzyR5nsaaQe5VFhYejiygDbBDr2cdGmWwTTmfj64A12Qz8HWrPNt4RcCFtW9haj5Vx2wTkiaTVcNYL",
  "key6": "gyqKKvx7ra51kzjjTZKmaWWKcR52G1Hr6xackazXzDW2ZAc36rfTrLfnBe2SrUAxV8ViM1vJtLDyrwPb4QXdQgw",
  "key7": "635WSKs2renjGP5ZKS42k15hL5G4nkA4kCqmr7pAyrRYNMbYXYVCVud4yWFNyb5L3tdLuJ2jsu8PasSsBhpUvQxz",
  "key8": "44wvQaP5mgT41THYvZmBzEm5hptQFy91PZMwKxjkateX6UQYBVp5dJ341YSjd2iw5f9tS8hEG4sGXAZBCEgKs2Bw",
  "key9": "2EUV3KUzDSgJRHVg2MeaX6fVbQzgoN9WuU5aAzK1WewRGtKMhu81br6V6ofqGQE1va8BYkNW3PBp7osSukRFNSsb",
  "key10": "2ziZcsDHpc476Lhk45k5Dn765C6QJtiuz69tEKBwFd1GewnpoQGeEdwv5bkWLNZaaiioBBwuxT983hP1jvQAJdGr",
  "key11": "24eYPF5gBd93qFbpqZJMfz5Mvhst2LKs9fKouWZBCS7AiP2Q6n3wCoGEJXq4RPQLyP4QYrgZ5E94FNDcvxMYFQPu",
  "key12": "4NmvWAN7oWoK9QJQNL6XXauqZ6s2BGaYQyRd4NHvgnGNWUKFaDeCWvRpJKuDfo2dTKbszYTFhyHRfs9o1x9iM5Ss",
  "key13": "3Rafc68tjo8KXkMSwpAn5cfXTQmMJcGYadUAT7ZBPtfh2tKgL4HUftTNgTLZudgFWVifzxdu2bJfstymbwg9Gm8P",
  "key14": "a7goJyjVU9iFjBDYpzAmaL31hUWaYTjCFh3wcMk3U8gquvnNz8Noxvu8qEmEuqqEpENe14oYWFhv2vYEV6BvA6R",
  "key15": "vL4CFAY7VhXBE3Hzke8XbfZroe3zLFTsEQ8LcF2GQKewNCFDC89y2HApLajrPuA5GcN6Mrd6Lsa1TGtH5cso8k8",
  "key16": "5z6UvCX6xGtvqjFdPhUydFLtd7Zv1iGXNVTtYotpwzsmRQYAXKrxdHaqDsB3G5Dsix3JY5b6teQrr1q9Feo7YqjZ",
  "key17": "5LAkJ6swMBh8oD6Sm8514S6ZnEtypLQxgSv1SNmhvcugddnvYbrEWbE13M1jrhDsSbYu51EdYxp2t1oc2e48AYBs",
  "key18": "5utP2r1FsTtggkgCF4Cq9Z9iZ22a9z37LvzsNahKguReF64E1xRBqe8MCB1RtU82ZVAXLZ4sMM8eKHaLGeVCgjdP",
  "key19": "c8PBMfACe28rVM4GJCbvbDLsWgU2mitWjd653jr1ANib1da9D7UsSVM2uRiWKWhtQgVpxDWScVN8r1tSPUeZmT1",
  "key20": "3s3d8hM6MDVBwsBZ6CeDx492rANWWNhWvMC3z1cAXtNocZ6Bh7r5PDsdZgHAP7zQriF3tyhGaCCL3YGLoukAENaA",
  "key21": "5XzzYEsqTP6o9GouWPRf346N3QCKST6BqKbVuTHHeqopEyU8mgWifGWs3r3fY7EHHXLKTnHqsgDyvvYrhoVjwMwY",
  "key22": "5j9EBuuEZA7EhLGF7MgBmM7XSYi42jZzt2UoKpQWm3gG39sLmoKMrjX1uQgNA4dknnaEVB8TDDEZQgcadzF9pmsM",
  "key23": "HM6JgR4F2F3Wg1UyVoN3uVCWQ5fK1vSYFe5qsB6rtn7Wgs2dodwBYmK4RHNXan38duS3XUZ6AyC8cdyQinnz9GB",
  "key24": "4Xkr13hSP2tBDo9vtcxhzSB4oZ69NCtLxZ2nKXunTdLfWQ9cMFcn7vFqNUaPcXuPsAFH2wjoQGvHQpJDUZN8bhEn",
  "key25": "2MEfmG5VeGQPFRW1nKHWn9MoqedMJx6fkJk7sT45Xy4WTsFCxAiLNnrmeMAD2XghkTTLcyNAPnpPZ91vCuyfHgqb",
  "key26": "4srBeUbJX3DRUv5i34P1YrVxbrmfKUhUkdvbcjLbwvH3AbSRoMdrv6hvfgxxnzg3LT9wpRPnFtSYQ7bGnWqHy715",
  "key27": "4BqSCeRwdYx5AmkBeYUzWtQckBadZecGeLpzrzpVouTh4mY8UsVKDTx4yQPjfjYLUbdtPwjwnQJdRYsyqc8c4hRP",
  "key28": "5hoWWALr5YYq4fd1ZNQkBgLbGgXaVchAEQLJ8bNuMSUZeTK8cn9K8eDDTyLKR7xjcEQrPrJHfYuK9YMdSPw1MYjM",
  "key29": "jPZubmQNsDRvvEhevkcxhnQeNi21xQzMjoeq8avQshZ5RWcjwfmYZExYeVzjUFu4RECTfqEkpaqdd9d4HpAd5nG",
  "key30": "5fBNdFVRN6DJHV9ykDyV7apSo794yA9W75Yc8FNuGvc9ZWjvK9gRhJkCH95nS1i1ZLShHp2BbHq6RUbqgqxfjjco",
  "key31": "3wkiXPhMGoVksp9s91xXG8E4HVGZ2TThmANsmiokuumMyP5LRuBpV9RWUHb1SAKgiZu65JqE94JFp28er4rZQSBB",
  "key32": "2t1H6G2GvjNjjH4g93xRvrE2wfPu9Zik2UR5bov7UJYrm46r6Xfpeck9McmozV3TH9orM8VXX4hMPY9t9GnWtnAx",
  "key33": "fsPcYQUiRH25nq7dyfLMkBNQJfTCTPEC9erv5Wpw9P3QA6zSst4LHPAfMrPMb75kgq8L56xzEr9dRRDtkFwcYxy",
  "key34": "4DP9PuwfTVk6nQR6zwZce78Ujveizic7PxSzyd6vpkGhLGJMZwGhV1ymx6eb5nhW5tgFPSKutfCVKJfjNN4N4mg3",
  "key35": "2zJxqvJ36M3A1xQpXoZn6prHPmo8gEhiFJaeZaVeYXRVZPuxz5cpzb2CQZPqrzr3BvjyJqPEj5GRB6JoVJPMqcfM",
  "key36": "3ZYcvKRjdMdQxHj838VrQHH9GEzaKXH7JqKwJBwkx1xKDyJv7VQRMPXGktbGi3ysHVB9eW1sFvL2bnmyLvd5iH6c",
  "key37": "67Kjxn6K5p446qYc5xaRmuurgRYv8zxrDuWqnfrYe2kbxzmDcgVBcdjDyE4hkN6ydENUBTnZLQSQgrX4Dh8BgV2",
  "key38": "2Ck923M1A2NmYkodeDzy3oj15LZrmuSFHw5LGZUPkNF5vCSo6z8n8zJwtNb1BA8y5iUCSYLF9LfecPyieFfUKAoQ",
  "key39": "G73DY5mbDG7hRP5EcnR7H7KsRPCNHtXxKZ6yKfpPe2Vkpei6wgwrAME9PHb8LfoEMHSCPv3JGyN4caqQgtdWvBk",
  "key40": "5SsEGA5jKAf9qdcAnDPAtHEgUoTeR9eMzq5NzhtZesqA6f1MqvniKvKg3raAZuLiFxWGYmLBtojxKJfSUhE2QrBs",
  "key41": "2u2pxjaYiUcFGFh7uhvb1X5dWrFY9fuP6UimDLAUVu8kz3WBd4HZF7NGHZCf2XMHtY63ctz9iQ9fvQJhbW3CsR7X",
  "key42": "5jJfqQm2PYcjqkC7vdpxdVbhTcro26TNvQozQJEwNhKptqHCrmbnZyXVKvinLvmhBZo77PiPU7skDrx3Q2pTRy25",
  "key43": "Han6bwsqjJtCxaoG3hf1wpruZDZVRmzD8k2kKVKmgBcDYZ8e5qpYHbCWaBiFddt9iNGe8nUzLHH2zsBFd4ECqkd"
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
