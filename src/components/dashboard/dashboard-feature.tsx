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
    "3MERbFKykHgBpRfoJA9bdvYGsjFfbfru7Rs3MaWoFBvsChtuE5zap2rCHtMLm67C5yjqpdwG3KiTyxiMKHAMBF3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UPddw37SmeLeSjuaXtYvp2MHr7pkiD6TfmXvj2Ktx8q8hxoPAcupM68tiZCDvmER3fkdJUk1aWXDvRdKw2cmU9g",
  "key1": "5qPvMU8tgTpFSURoxFwsUnCNfMut8jxdQGfwibpMgNmWaAoNF1bVKQ6YkYD3qqSTG6RU23KBWbc97E6QumBPPkyA",
  "key2": "3sRDukqQ6WUr7xDnumCFRxS33hJzrKwZyRUnUPbHkt2BoSukEcCHno4E8uY5BBtFuhSH6cUcWymgNqwXLubb6Qpu",
  "key3": "5i7njJn3vEg45UFwDLebrNK9mteXGMqawfXb7RsogceZXznWcovrt9hEQmNXUPT7vWRT4tVoAP6GgdjHQ39zXqve",
  "key4": "3D9Q8iruJxAgHYJUeDd8nFXfrasHVYb11pbFoTHRAhF4NsHWjysKSVroEkaqY7UHGnTn7UWunKiKynoQqPTa67AW",
  "key5": "3VnHcBv6FL6TSH95RHT4S1BiX1fJx7kmUkPDXjHQRtFAUA7546RoG4FCkxB4ABHiXKRChP1Bzn7CezeFmm9b8uq9",
  "key6": "2CYRPsUqiQ2yQFwQSyHdK8YpsFcmKGkePikw9KwkJXZkxEXBUp9kHZYnsmuqQVEQi6BPob1cnmFewEd3KZGsFaYe",
  "key7": "3hYDoaNiiKEREUSeS7wqnsXyCJoNQAEAbMYL4KvGbZNqREAdAvAE3jgcnaczfwaKUzdVxCPiyXZJ9XvqeFa37v8z",
  "key8": "44xiXmHGgBPhifwSWAQpVrLVmmuetRAzLLhMtYiGibPtg1jopqyHAuRkLrVJgSLxCpJd9TEJ2QRa3Qu4Tofo1Y1J",
  "key9": "4BnCy3cF3Ps4W8iwxBfkPfUVMuLWwg2p7BR5dYY9FkA32SJJJekpTPRgoRt7MSzGZxr8VjetT8ARraoYaNPoFMCQ",
  "key10": "Mv6z7Qmucmptk2SERprFvfmM2JmmjRwheh6DN4LergHXzf7sdxYf75vpUahEPBJAe9Hb8KDb8aksqieMEUTFPgw",
  "key11": "XfZRaEmnQchVR7yfJmvpikBhG33cGhjfwdUGjcd7BYMqTNmqE3qqsaZiqHqoXdTAU5CzEm4cCub3CszzYhfctFy",
  "key12": "GFJhRHPwWgUmJUtm2o8D9EavkdX6DH9zm5qWNvAvu1WsV8bFngNHgQ5UaCz5JpLizFJknCohY7LdgK8MXjtE1MP",
  "key13": "659Fjaxh1iXjZK8A72Qn627Eqn2i2qYWkB36X6JSKcGmwjWbVmn3nVHwbSaj6segPvTPu52W4AMe2ac75GfYipaw",
  "key14": "4DZBJrAa5Zdby36KZGrdDbPe3BKzqgpuvHwZGwxhhJTTx1Bj1QvBFi8Dkp5EMNhxMcoqpYLwtpi41nSPTfjPQYzJ",
  "key15": "3UZuGYswbnQpzYwkbBqADcqzYTDMBStuqiy5xKeLbq5FUvmLD819aDfwQodjz1q8Ap5r8Sto8hh836M2iKieHq9z",
  "key16": "4SySnmSAn7tJsqwhC2siqKGHVnCobBJFHt19dFxKBbfDCqZH4VY8BHjqViXZfnudeiA6HUekrPQbXxjhYKxYTJG8",
  "key17": "2Qq2sJ9cY4rBNj6hU2mtiLtp9Ns5RwfYYtbdpVE25SEifxa3RcDXKUL7htVVMU53QxRBGqcqBCbEry7giei7T6pr",
  "key18": "253nugv3Gn4EBVzSPZWUYAbqYB4vRTfF7t3KbrpAsKCxC9j3iC1snaVYTr2jdEkTZ2ccSmMJfTdpZjBXhCwcuj9D",
  "key19": "ysPURp75KjfAsyF33Xt41kDXUfcbZCDqBuLLjCtq7dBH16TayBc1RnjNya2opkSG2gH3LgJxLCyvDymuNE4fHWg",
  "key20": "5kkWBMvtiApdqtnMpfnCxhgFZQvMhNYXJqL9nuJrJgm6b6biqY3bbAUGvvkVNwvRxFoCY4t73R21zcgjY2kXnDpM",
  "key21": "3Ngif1sAKqUdcNiu4T6oxrWUY2pYJivppRMKfJvLd5DZqU6juYNkXkeXb7YWCMPifkAfbRwGu2oxkryzCMMtdcXJ",
  "key22": "3As4GpetQZVFWrjMbWH1Q7q1Vv8BeZkLBX9Pz1Ln7Q16RseqMVajSkeGExsRSnxY6nzx719M5Dv7yCCkph5Xb6gB",
  "key23": "4Ya7KBKBGkghHsrSaVhebFzk73PirfMr6piUMsaPw6pwZbkgkRnwjjjvvkanqYXwkMe6pxCvdrqJEbSSMysBb1vW",
  "key24": "2iFFVXESWSRNfRVEXKUSa967gUVGiGKysc2cs3Z9p6QWnxJxY2abJGrD5FjtRLABt8mWJBoQmF1QXrU9yxLV7tqr",
  "key25": "532SXDEVVKgkEntJHErN1A2VrcW2cjpszE6dHg1z5Yy6eBAQWP4fqL1NeyaHhvUEjDWeqqWQ7uDy45eNoWw8YFs8",
  "key26": "41ZQikMKSx61jKNPYGtb3Mi3k5UGHVeTyRGFGv4CRHjKryQkCHybinybdUDmyCjVcWdm4rFpMZBFsLUmcSgVZ4Ah",
  "key27": "2ijZZmjtB8tiSue1o4ptdDnr6WaTkfULGfVFR6m2yb44V7FCNMQJ61Amh16EbLmLMJtSv2jVLVuJGkxkFT1DzJpE",
  "key28": "2Jr95q411b8xkfgL1RLmGV3ReLctkFdzZv7hpp3qin4hq652fmw8qqtq9mdsE7CMUeZZNHKUJuqWJZptKTYLrE9j",
  "key29": "5o9QeuWd23QBqisLhsKpczYemUj6B9RNNdUmMUBDajXPCJFpvLYZsGqH4ouFbdJoHUEMHyV7EnLAEGi83pED5Tmg",
  "key30": "2LnqDQLruED2XPk722MEXjbw4RNhTwws349SEvVEhpQ2afhSfexy14fNqaH6JuaepakXjZGN64MBXGFJMYP55H4P",
  "key31": "549Ua7PRC8SDAXsAuLfNj6Zm64s37PZAPihQpfsudkVjjRvM92UY6NDbug3ZqMG2B5pBz2kXof2NJn7mcGjgcmTy",
  "key32": "3ZqF7FeiMR9mpckXXCurK9q4opJehyi8kAddNevjXbi7QRYmMVTLwGnMP3mm7QnKiEoBuFNzTWudPb78Fu63yC5r",
  "key33": "24RfaGfmrcDEzEQvFEEz9PPM56iv9AFs232LdxhuP3K7xYVKCLTJwTY73rDGuuSx16kPG1oEbh2H87KzEbP1gknX",
  "key34": "3VLQWskFgKoseYLd4FrjYGtfpGJo2sLtoZoV5gHaAmMnk6j9JKcEWrT9ZTnMYnLmY5G3cqJ19FBh5nLsutMiHVMr",
  "key35": "TR7fjW5RCS5SwTmssjHMhKctXB6iKanvYwF8LZNKyixJRTJkwzmnqD4BYXXB5NBTQ5ryLYDZX8tt9oWYYRNiWPL",
  "key36": "e8xjaRGNnAwHsFVUGcBCnAbe63KFDXeetxs9aDCZbs6KN7g65K2paEKh5CrEdA9sT43QzdiRapFuw7vPXMfyRVo",
  "key37": "28yVejKq1QhAf2Fm5BF1EhCydNhJFfSXVra3Q2Cdi4aXd48mUSo7ZEkynnpCV4PeUhwNk9z7msxXRDEFnwGkBW6P",
  "key38": "5eW88CgaBeeZ4GTWfduEPNRLdafvRV5SEn6q8jWWRpupCxod3ubtY2wSxFUpi9qRqJJZKR3J31RUnDWvxrTwfQL4",
  "key39": "3dfCn73eacEWF4BCY8UGMizcFri2rWHGbJCtFNemtAmZVgh3ACkriNUVGDzoNjfgLx9efYmzxMRK3CaTD78C7QJ4",
  "key40": "4XR21GWV7jCtswGSUYiaQ4VBAsb6Fx6KDjJDiPuhAiVsU5X7o2Gsh7E9RrBdvR4HTA9mFQTR57xwFtWu6jahLd2v",
  "key41": "21TedCF5HvWq5DHuns62pdWSf5Lk1SwxzpxgAi7boBHA81GjPDDcyQYRTgL1iTTJzuUubK5QptacVVWGp4qJr3mb"
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
