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
    "4U2d2LdKxDBuhoocmxDDURttNsJxUruixapBMYSCG9nbiBJPZmdVrDWBYmEp8evohvUpbz8tNdPRTjz2bwpuf4pi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46K2fGU7svuLW4hiSwUAMY11MaeAMMAG9Zkaft6uAXURuF7oqKsXodQFF5wJquN3oosDpL34iCt88vtJ81uUwTdG",
  "key1": "96b9ihdygUJ8k5ecGkp5eupM56tUzoGDxjVKhUsPdQVckmenta7bf2pJ5R8berg6fuS4BX3Cjxae2Wi6rpjoMBu",
  "key2": "66rhE3v8Hnor4CYaAd5Zsi5ehiehCQkA9CBE6sdGH7Jx9Uh4SeAWqdzHn4HY9nZocCmMFp7fZXv8p85xEMhjDHPg",
  "key3": "3XrPrecfVnzz92j1nm8sBoMbpyx8o3SewASqqPuNrG8Fg4A6HRVTV6299ZZcRrQTGAF68VvprDWiJHsAd1Yuo9VD",
  "key4": "2YHkmp2tSVCe9sHXwNtyE5EhFc9zUP5QX25nW7GsJAe8rjDMYdeh9o7nF8NCbbGKFJeAu1VBUVmrHohL5DryJso",
  "key5": "4bWGBYEUWwqGxQvVZke3ZCgCXMv2pBE3gfWSHuLkTisZCNfHJqu5oXFCvhrqv5LuPK77TDm3gk185pmNsT4wabN9",
  "key6": "3rQSoc2LdyopPNF1zoHpEs2R8jyNUJ1Qxt3a7e3xfHyKZSvt2wGdb2YAwjETuz5GjsVCo3yirVdePZhXwNx6eiTL",
  "key7": "3kHQAMPF8Ups1Qz4VPiT5cATRTtzbeKoNvkHkQyKKxEug5n8iChQMkUmqopHYPdtMsKRtua8cFcBofyYhDAuh9Kx",
  "key8": "3bw29RKCBAVdfkYqyojHrzyoxqKtQU1tZ687BgbXAnuAZdYtiN1MUnJbXWh1cQY7nS117PdGmbYycZpi9Bh5CwkR",
  "key9": "2KWJwnVCC6Wf8jEfWB9iygGgo6Qrqpa1Hbv9sHn4D5PxgL4WKi11u48P8f2BDHvD6yvCFjzPtyHc9L2czHbx2n7D",
  "key10": "5XVZusb8szqea3A3Ra6iAMuLg9pY6L5a9sSctiZVWMutYAuPqe8yTS5GPFGk816xJ5kcVcCRux17nuYnQ81Y4pJ7",
  "key11": "4rQ73rSFXqcEQdPqkhc3WtK8n6d92iHfVdQiT1Q5hCaap5T4YrpDFxpvXFPNm375wszdksY6KRZGswyUU5NKunon",
  "key12": "22KopFJxGHMo7gckuwjonBYnVFXWXWLrxuYERcTpcqQ2VNViCmSMMDxGrn1upZyD56EDfJbQLgENpUGuhfMY8PbZ",
  "key13": "3JvAcZzryEC1dJgVSMau17MvVWpotiQWHXqi5H9tou7RKzCG2zCbzNz6FZMZV8Y73ioShUGLqm15r7HLzFUkyWS3",
  "key14": "2VqwDBg6oM26FWmLUAfssio46DbVRmyDJJQYzbSBDm5uMgaGKSq4LAghoKB8RCxaWye43c18Zq7EZhfD7R6yh1T2",
  "key15": "4zP8kLiSKy4ZEbFxcMq2fS6VcHyDz3fXaWmMctKzJKddK4NJTT48chVKsz8GDYSfdgeYSbC2PfbUvve6ZyHbhmRB",
  "key16": "5wvy28p9f9yfTotx7aEd2qcZDJEWYHazDCLDXdS1Np5V4StQyLj2WQrsUB4EduuSERX3N9PKvLAgs2qJh4h5TxXk",
  "key17": "5tjEDnLQKUyTYjpkVxSDVkbuQ3miwwV5dtmt8VCV7Q6LaEJENwKbZmEzkZ8aCxVJcFmw1HvDYBMtzmA2CohDxhNR",
  "key18": "2tu67KzQhX47YkC47nPNcU4aFiL3UpziY21pBy7KExjDFBVDvfoKkvbrtQ2eCikBrTHSskFyYG1qTEjpz5uaQAfh",
  "key19": "59YaQPjuzRQghomn8PBHBMcxjdgFwGyem7XMbHh796gnoHT9eKjYavydm8uytyzJYfEaCx8Q9ZSfwxEHoVMDShGQ",
  "key20": "61jvVUDabSW7i3KEGTjaXbihWZgf8H6mQYKHMwEeFdBvwbty3VvhtSYLdQscdMnGHgCcoLEmMb4W61U5SQLwKpdt",
  "key21": "qPFJduxEAUCuEHSPGvYiJHN4QszhP3ubUeP2ciquraiRZbJkXHgqHvy2wjJWpZXMERjZ9mh4B6paRWtUZiYWM1b",
  "key22": "4iSeN9BjDnhhcixXs9xf6C1ZhcKaVMpgrD3wpaEdyWD5VmhciYqCCCSzMXaeZLpQMqLxkgVRfh5B8Spmc3xVo6ar",
  "key23": "2WS35SLbFogKrpzopkbma8gJ4uT3PXNiEdojXbonbiZ1acpoeeWQNiTDUQkwfh97TbM2mRVbNcYQSVNd86HXg9SG",
  "key24": "GT4egHdAQiSayGLQTrHuQK9heptBkqeVXyAYDwJAdjjnYRJrfe5egVN1kuSDKU6CgYy9QXbkZqD3p7FmTdkZpKQ",
  "key25": "3vTKHLyhgKDaUAmbapGMJT29ZFRfJ9ecmHxe36NHpB824MvQa41VEcVbeB81W4MfPDvi6gx9E4CLqLS1QyNiT7Tg",
  "key26": "5PQAfmqWjbN58UuyBNLBHk5Zzsf7wuSYf68tJWp6yBQDX7sgnCSQewaQKc1qCaSxfrxdCyJMTGLaEGSeXkeWGfEH",
  "key27": "5jW6jSNYxQu92ALWZNbFeJVdyLXLvt7SC2iEJsV8mRHnmYd8vgtvif4bg69WeYgwFMXktwXQJbSWwqfjaGrp5rGb",
  "key28": "2RZ5AuctNMM4RwzymuHu5BQ1zsvuy4PgQr9SrGSV4vmeEbC13ZkjTiCFS5dp1LaiE6rhDmTF8cbjY64QfUq6gXrh",
  "key29": "5fwtNV9uFFCtAqA35xpR6t7oLWaXhWaZgGCTjhnpkTBc7drXFWWw8Cj49NrSLdstKLstuH3AGEiu2tq28cpV9DDU",
  "key30": "2mHp1EEdYZJftZTD4bnqMJBvxUid2QhFyho2dEzHaunmRrRoC2ox2uGyhc6WXrsV7uWwcHv8xRLnezG5uDcswSYE",
  "key31": "4dNtoCentNUwXjXZk3LZrkubrahSewWxopbXWupYRgw6RHjgfmjYo2Uykkc7dp3JYRR7w4LraLkUBrr55qne5JrG",
  "key32": "5LaTdqnLXYtvY9SWeCUHpf1v7Lx8vZLGAW7nh7Tmg8qLmAg62tPYcaBgKKFcts15qArYtucToomJ2dSSfjs7dMYb",
  "key33": "3smG5SiSy427LLKgXrQBjGoHJmQSqWFvwNRVLs6B8F2J18Kx5qvU5QQmmWPGTq6a2ek2ZB9zgWp9sKRoscHu7Pmw"
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
