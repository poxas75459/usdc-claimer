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
    "34eL3BuwcaEirftATKaV1366kwGuSmEg6bSVKff6FnvNy9KtFJqPVvG4o1bATPaJTTsmAr9FcD5537ZBZHpWX2rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZWoThstwo8acq2Ay1MuEhNQ19cgZmRRTN5bfjGX7oevuTcWeWRn6kRTJNHdzJMqhwQfnBb3Yd23auMjUsdc9eqC",
  "key1": "4xYaWYadsCCe2KJCr4hEA2v715KfX45zfJTpGXkAzMEtBMV9Jw23j7zR7jPMaF2jSTaZi9MvBZ4nianqXTHq3tf5",
  "key2": "4MVbxtaqFiCn2XaHXP6NbvX8wm6G5LS3M1LJbK4XrCvfw2jCErgkQccHv8iCE8mDT8HQUnvgUAEEMMJekXXhVYMh",
  "key3": "54GzibGY6GMrWgSgopE7fFxW3omaDauT2LUoQx5ZmrQuN69r5jr9gMMkutJNkRtNFxL67o6c7Mghs5Atyh6yMtm2",
  "key4": "5TExB1j5eyKLYuT8wZukjHeTAycyBfki2eBeA7PPpZ2DfBVyKJZk1p1Q47ZW33HsGBabCa92yCd1giMjpEUd9v1o",
  "key5": "4KjC5mSRv7bKHsitgoRvbw5wbRGRWP3AM3xDjGoTUHb2Xoz5FwMcPbfuG4USjXXeZvKtXZF6CEDH7B1BvNPaC2o7",
  "key6": "4zhTawV8Zb1VFc2aNXGJWmnaxSXBEfzngXQDuwbQtQnoFUsg8fPHuCwLy7nWdWncBgxgu3VMrZamUUdrrPctCLcc",
  "key7": "3MQf88vzkQXrd6i47NjLw4EaPgXqaNrkwDYYwf6vgBuKJFwv3CrQ4zozoZ1A9mSMNhpZJoCVyFfog2tmG8RJbR7u",
  "key8": "4sK1fHs9ua9WtaFpydBtKwswYj5ff7DvKnzW67ESZq3XuT5UZ6x66ihB7JeERfvynP8fLPWxQKvdhSyKpvrxsYLY",
  "key9": "2K1Xo4Wq18yokgLyi5SjivnjDtH48P1G5YALPBox8uE9w1v1o4uojkSfMK9SVG8ac8rB3hyMVnP3SvPUPNVjcLu6",
  "key10": "2DKX65cPp5yj8CB5iNo3dCnn8Y7D4rtLg5Xqa3WXM3tbJsYwnXdt4QcjM4b9VBFreXE8LyE9HZqWuhqH3Zz17Tn6",
  "key11": "4onnrdzaWFWh2v63zy4CBWhG5C5LEoLqw7dHh1JqoZEf1oG6Uwca2yZic8iDT7xKXD9F2VzdgUD9hZM59mFzwUX2",
  "key12": "27b19F24Byz5Zt1jB9xmBnyAGVntWKaBbd6hm6xhxKc5ojjffgrFuBpNTAvKAnW6UaT2qQDo5p4PMo5HzfCMmuP8",
  "key13": "2r8GDypaZYGheSAHg1YSM2nzrYE8i9HWNnwyUS2yx8mDbpfWHTpNHUP8dPD3K24hLA3UyG93dXoUfPjiEaboifkH",
  "key14": "5hGR7H5xnoAYUWH8p8hdtwYa726K8UmX9Ko4TGc913RehsphzSD69dcVSb679XTSoq3idKMoMLnte2574BGXq7aJ",
  "key15": "2ZmxVfZN5gNQTfALkut5NWcCbjKSyPtaZv5GpqNXS6mUZAqpdc6oEsU5gCX9Fo4XKfbvt1QcTfTwhLKsfoUUFMuz",
  "key16": "BonVXx6hz2HJceUmb5tcrjnpX78iiyNjvXfaGtAEKUMdPPGqyZt87gEnir7wuxXiv1TG2TUweUb3FBxNeye8LTZ",
  "key17": "5rjjvpjqpozkDWvfuD8MqdjzxFQ1FUJUdky76oiDob66QD5Ran6gdYzvxiVcPBpz6cDqSVyiZNdAZ5vjjQV6Uzmg",
  "key18": "3Ag78UJ34qR6dWPTrMunJnnhx3vEqmwMMQiYmjmo6Ee8C3nXWarTFCtj7rNfvKFKG3q6r21J9oz6WUouiRYQKKLZ",
  "key19": "34u17GcuxEShBnpqpYRG2Mgyv88TJ8XBU9GzWXUHPQ5PMXdv1GVo1iVhUBSFjULTqr4NmH5dqG3U8EC3Wg43YNsC",
  "key20": "4Uxuga3W9G1DkHg9weE9kuT8noLXD1QZrQUryTdsACQoeAYJ9zp1eR4JPoD2eN7LnLE3VF4545cjxXXgi79ma67S",
  "key21": "397hw63TZyxzXUP9ss3AqjVfpobrmYKh7Dx8oZvuZELQckYw4B3asf5NHY7YTVR6iPwUoheoTgMXxYjX8B9Qpx8k",
  "key22": "4Kdv86iQQmNtLTNy6w69GWhVdvBUKYBnx2KVZQZPhBCG2Toj2ypm4dqfc1jEgEKxUjrfGDyRoXGiCQBSnp8EYmJM",
  "key23": "4VKsnFWhw1XRGJyk2ejSZ2T12CZm3PsjHwe6isciUL5xTPZTYvn7Tdx6AFpJBz2KWVGW6zpFshw9m4Vmtnpbhd2c",
  "key24": "3PsC2pL46jfaKM6LsBu9PiHCDwFwuBQX1nhKs1TgC1oh2Y1ChexHYDCzCp3UapdZ5yNseH2iAv54ijQBUjZwKZw4",
  "key25": "5GAK6fHXjev1oh5Cw7oKMdqHdNiCDMNjNtgAsogXoYBg7XV9RdCCkmzLsQ7eBaHLdVrpgsjH6XsWQtdnXzG948v5",
  "key26": "G91RoGfygxbyTowJNfMh1piDYWW23ma5cjGHt7buPGPvRnporg3cmWeXE5D5nwBVGdk2ikfXiZchWVvzgmVciwP",
  "key27": "5CAnsjbM8NgLBbARPUU415UL9ybT1EzkxUcz1DreaUq4hjw6tTj9cA6eHZMs6wFu3z463M29W1v1g4rDFEKVHuUd",
  "key28": "45i5A1Jz6Bu6FAnTTt5LHauTZckD8PgEv2451j7V6ngffjb1sTJfNtt8xcek5Zpmb644yXFoVZK9jfRUWmfRQQp9",
  "key29": "6Dr4gJEVjQSLFwS82RecbGGMkssy8dH88BhTvc72oTbZsSriaRBXTktT6agdvvEKR1cGujjS2Y7oomNFyS4VNiL",
  "key30": "2nsX1KDxke2UyZ3Fz5nKJ61ncb6BhDTpcZHhKvKC6cTzYGYqAL2vQkZWFE1tUB3ShV65E9n6GeuVkJoUXDw9FjPe",
  "key31": "1hwEZLDHVX3ifq57AebeHr9TK31VyZ9az4GYWGcNByPxppv5phM2WxXrniw4eVD2aM1ThJmBs1zpQooBppvxhkH",
  "key32": "2Q1R3P9sRuMaZJgLT5N94Nhjk6TVmqy9FUwh4f85UFbACcZM7TvUPMZQfPo2h1P3SbB6DLHKZ7vkwHnPb1qmpmjK",
  "key33": "63uA2gYjRAPgjLXzkzqjQgKBiskzjXa2PhKuqXrzPpJUTabx4hXhoqgszVuv8FnB4rhUL9QXqVPFYJxYt2geBk4H",
  "key34": "2V4tmuRtaoRUXjc3sHxV4Dps4xekFpQ9hKbk9aBFZeXLuyhhCNEicWuP1jXNjYsksTJi51CpggkT1ZUhBKh34sb2",
  "key35": "41ghHEgVLzJ5dxHs76XUpivuy2zaKw36jV3PsSWCwGSgUDW3zvCibUM55rSRNLi1ZvdijvkfraGzoFPsZKrK19Qa",
  "key36": "4SXz9X6jJNvvzA3WmFRHBUUhyW8QtaQoeXLsQ3M3gja5pd8qCWi4xfyLvVQivGDZJSmicSVgh84h8EjqH4zWcPRx",
  "key37": "242Wkhcz91dT1amT9LHEUfJko6a7VGwoC3aQkb9QaG9a8YJMMKx4gtzewXtHWiK3ARXw8TLXb1HLYYy7uSTeGWbM",
  "key38": "3j3N5mzwcAefkpEn4YqR4akWryVzu8G8cfKtZqduhMcFRwiySyAbzrLhCMx9Dq77iBShZiR3wKJNE7c3K6wCF7p5",
  "key39": "3LVnkCoMgpZ9CdKHHH1NdXn5Jp24eBmRE2nJiJ8k8zD27jyCC9ksTd3gGDSNBMnFwSjSZ7s77XVk539CufuB3wvo",
  "key40": "3JmuFpMHTD5MtCNMAePayB1vFjhQUdtYUA6nxGFsHxuMTwwZUqHnJHeC6waGn28MgY5m6BbjhQKh1rU2mPHe7LqE",
  "key41": "4zB3rbJUfswH56HYGQwnqyGUkCLsnvXaJmTpEnhBw7qCv58PX1V4PCEWFWBDoT2W6Cj2LajjJweGp1yYbb9YGH5P",
  "key42": "2aFGL9tePWMCH4z74cSB1phRoyPTxF3EQAWxGDXGR3G8Ev321uZaDtcE3FcEMwwCPJsWML2FpMVExctXD3W6ruEV",
  "key43": "H9h9zsn3xjNigSkPDdEhUgGbD5ky9vFZXzneLppAuWKnAd5HG87GWQaN36LGzTFV9nq8J5Sxcnf4ygTY9wUcUih",
  "key44": "3YxjgyQibi75Kt6y3D4tfMVCdWVgkBU3mujrmVrXJgfbpEgEP8NBWuEFWUHGZSAMoqwboDP6m1rKGZfoBSujBfRj",
  "key45": "HH2L3C8HbxhRropMf7DfeBDz8kzqV3GzCBjG2ubeksAixoXNAaVkyen9gJFt91yuQp6WMFKBQeg6Q4gV122tRKp"
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
