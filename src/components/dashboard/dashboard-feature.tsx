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
    "4ngag3ZwD6q2D5RNeyex5TVyKvKVxiLZ6QosEBCB7mRJhJDyw1YGSbKwmhQUnVgs4NR1hBgsv64gMyhJyXaCBAG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mEEWu2TGRDGGxwtF9WZ2eSiZPVPQaxr9AZmkAYpj26TwvirEHnoTM3zvXX2BN94CtjMFxqPnwkwXq2kSFFPNmUE",
  "key1": "4jxtvaha67bgwgPJzAQf9De52aCfShyNDfsBv18zPUXah8UM6moyT8qmLcDZYJJjYqnVDpfpXvE7NYwPBUuLK9CH",
  "key2": "2i2nMRUE78Hsg5kWEqu3ghXXxgjf28XCP9yaPFetaDum6RcBLQ3x9kYMkowUtbuNacdp93kvA6bdNCumGHB8y1YQ",
  "key3": "5dfFWdRak5rcBsJHho4dFayhWT5mGNW41yt1LvGZmpeHNsyxybubdsY4zEPXE8oi3ZvNLNRk1TL8X8PNvzymHFow",
  "key4": "4NxMvDmxwNFdh7JrkmPg4j97Zc9k6VdH3dEJqsaqLfpJTYoiWSKUAy5jgi891pLjPWwVCSTBZWQ7zUdqMCo2tYPx",
  "key5": "436nqotKzXM6bTrefpsABZfChftnTbWKCib5H4FfuWbG7d7Sgryy5tSB5bg6emDGCojuhw6hky29qYkYJ8cnDXwY",
  "key6": "5RWY2ScQjAzvkhDtGhCRkAe3rNFeLRLyVvxMKkV2FLyByPqDjPdXGbxu6WB7SFtqdc1wF6FJQbZEzbCwpsftQ86c",
  "key7": "4D4kk1E5sXuZ97rpjcxX4JmVnUWc1kKBpMn6i8KAcaVp6WjN2ZwknpaJcEMDZkMXgMeHeUXMxSEHtRbd5e5MFXfp",
  "key8": "2rc7oFU1LCgiu64DKq1AmQ2v1aTtSNQUZSNPzUNspCmPRdpXwB89reJbn7KxPASfXi3BrmMvAYqT1f6cnTsagRP7",
  "key9": "BYZb4s4wJiYF3nTebCopmzPisY7UxVmL9fWsdf4LNYdhDpCm4fZgvuoXRzDqhwEJNkbcCguC62HtasuiRNV2kS2",
  "key10": "3QimRz7tXy75UcfVdviF8Xg91gKbc5tySYGNFdPzm1ozoxGYsHaytMcimS6JNeN4weQxLrhfj2GZLiJPF6gwk6Qz",
  "key11": "3B47hLAdh1kyQaGjJLut2cqyubaMFrNpjVy8ZcdAXTetjT62dFxVPmq7irUPNzuvKNXPb4tt1nuf2gJGWVTxVQ6a",
  "key12": "sr94MpjQa8aaLaW5pvqrLonJX1jb9cscXSyP8cGAn4YYcKb3nhUNjpY7GzRZ1eLVBhuTTkPCGLz5u8HvckYg31Q",
  "key13": "4gxuNUaPwprrqjQ57wRAL2nASvXxudnSLEcK8zYNotnxYxtSXiqC2npVLPyvanV6Jr54srtM21bP7miNRC95bnCX",
  "key14": "gLfBwaUqL268SxUypUf8ar1dgTdz2ZG8tuRtjyfB2qNTgxfdJgn8AMrasyVEZYcuQC4zJvqHCibXZpsJgPWZX8n",
  "key15": "xm5Y5nXkRc5mtLetJ8nPUyzif5PzhzVv4WZeKLdPLRnMt8HcbagugUVJCBbCZsfXbjgszFN6Bdjx5XGt33PeeM7",
  "key16": "62rqXfnETEjsnNaa4zNpNi3Pg1m2nYAEvF2wdAUh3VH8dmna6N7ZJgXRJQ2ktQKP5vAfqDuZGY3ZoP58wysxraPm",
  "key17": "idyiHfeSW7Psiy8XnqwsrPZeVLe7djVP7D4amXku3Mkf2532fkfmdRrS88PpLQLoJtPqcLRexUV5e5DQazmatBC",
  "key18": "33WBpPK7eN1jLCoJnc1CCoDf4AZsahmQHZzQXgDsXk1ZEqyVhBAexGmU4eHPuCV9JLh18pvxzr6rJgDMpe8WN3Zi",
  "key19": "MotNBECzgm3Sc2WfkJ9tpUMB8PQ2XVUV1yQvLnmMwm2cG8UUQBPeFdXHrVrcn1PCRAbb7gJdCDyZgknGH1gnyqS",
  "key20": "5SW8Vz8Kacdeanaqvv6SMvEDPfdVRhzXKCdGhenJjhZdDUhBUH41yqQYDfqhLH6r9h1ZgD1wnuczGutzxpqX5w7z",
  "key21": "4eAteQtEZToKhLMdpAAak8mASG5xc1CMHDcSagJ6waerdxKq12fhLJSHTRaK4mUk769ooA7KWbqFPRZ8mq74qGr1",
  "key22": "2QZ2XLVsWgBU4p48PsVtmJDvLGMsLi2ZLAuxouHnDsd1CofBqKnKB9EZoEZ2YiuKByRdgr7ZpfQDJrSudKNxmqBs",
  "key23": "29e3WLcx2RsFEMNLc9eUvk8Lp5vZfXCb6xhzN2xyDJd2cEtDdc1mFswYAjZpNVxVqsUZz7q3D5zRtCbZedWyg58m",
  "key24": "48BhxAEpGU1YvfrPE8ihswWTamLSdRKE41zdW3L3XzN129MSLoH5ALbL3WwonPeCLdKPCtaUmyazvpMTNMcAELv7",
  "key25": "2EtjGL8ocsLPtpfDXAwMFTythqg3Z2WTZDnzQgsYe4r3QvhUCRVQmPBBBnSJksHxwnjYwtuBAhCoXVEwN9vfo7vA",
  "key26": "4qWhmo6P61MEB9bB46SCesvJ6suM2Wws1mWsLd5giY1XcGrpofpBFkrTeHYdBcnEKPuyirx7zbcixR966Kxcnvwk",
  "key27": "47khr7xhMeJqwRhqB6QzyxLp9cQjmmJCT1xhvAnYhoY4HBtUDs1QAwPAZ4vETiNS3SyE3czNE8T6VV5UaM79aHzH",
  "key28": "24VQgYRTELvhrZB8LmWdEiomLjL84BujFqY2Qmu6L1A3bjh4q5xiZSv4mZ6maL7BVfmhkozZAokga5Hk2VbMmnDH",
  "key29": "4oLhKREdJGedU4917HF9Jsgu7Ph9dc1GMnmYrXsMNG8EzdG6n99QmL3jWzwnMWoc6Vibz78goAHAgW1AdPRCQfyK",
  "key30": "5izT1snvV9LcgZBtAGx78EJEYPAhJh8m179bg4GvmA2H1kjFvcfxFEzivPdDc1wUdSZvdSindVHYG2ob12kkEnNW",
  "key31": "446KYNwDBkQQN1CUrnvT4oJwcjqYMA2xVKLHecXgFRFtYt8AdvCYka5kam5dDSenfZ2dkgRHzKx59jRvFUVwPRpo",
  "key32": "3h9YhVwqMoU1YrpXeTUztGFmcb8Ed6gM7LBTCXpsfE3zKmW1TBZJ7ABnPVF2oXzM3AdeHrzXFoMyoDyZqnvteSMd",
  "key33": "4bUTjU3yrBPXrd3GstqYN1eNiyZuntBHchCFGABs2QW6EeiCxqcmmVDHi3sZzGMqqHb1azHDUHvy9pgymA7kKMmJ",
  "key34": "2aBXsgZQXCtYd6iBU1fPpkRGNDCaq9uqNUdHsVvBsDMrJ3xFDJeycDZ2pPFU6Y2Xz5Yj53eSac1fBY9kqX5QJfy"
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
