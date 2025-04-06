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
    "3rcFJm7xiVUhRs1KAKzTSo1uPAKN1DayPYwnrznuCUN8WKDXezMdHxWseZEvicvRTqesphxqFUz6kUBr7abq12KL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ivS4AJ3QwguE9AHCJfJ2cbxin6wNAST4nACjKGvgrfy7tMZLNWXmF5FSkpA5rE2coFm4JC9Hwe1dsqTXEK72f1",
  "key1": "3zHCxq2mRKTbWhdu5ccHSgKhKqhPFUq5zjNGWmK3WsQP1FzMKyDebb3iscQSnwrZmMA5rHu89LuNDND3ooJ9yGnj",
  "key2": "67FMZUiVVVhnycR4gQQjnmdE1NuAztofAUmFQNn46xogRdtbRy75oqQy28zKyYyyp9xPhiUurKDQcie1AkgaMaTA",
  "key3": "2LFFQCkUvfeR5bzam1Yi9pwdxu1wcB7GQ2YFEoXmQKnbwkVC12YW1MMpmeNiFJzr1cJaH9tvTChCLSPWwwZ98AJg",
  "key4": "3d5b9WTYi1rez4DTHtSDtxfuudb3L6Hj25kEp9s7m23jZZ58KWiMPZ8nDznif6RuPLAGVwkkCbwkPMECmwiqGx8J",
  "key5": "2XzPoutrEmhrnFzpDjFrtcbqwA1uSQ6nWyNc31MKvCtNDvcft7yD775kcFXcGhUtkQCST4r51Y1cSVC694NaMu4Y",
  "key6": "2Q4S5tj3hYKsbd6B9MsU3RJq4z7jHQy4RAVEqKHZYFtDxojRjB3YX54iZ55EzRabp66JTCj8Ns7tEabXboKhY8YH",
  "key7": "5UYRGkNPd9sScF1WK4rqv2cBE8SptijbMumde8PEqmqqaH1uFy8eqSW7mrBsWomXapXyfTSh7Jza6tKEP5aYmvFH",
  "key8": "16kuJzerVYPGUCmxZWhRfopWxFy8F3kVSNrUT7GHYGo4bm5PtcuW6XUDrjtZ4U8bDJvTdwHjHYCopHYn4LLncRW",
  "key9": "66LjjEigDzSwjJK3Rq6FmB9giXK5zjJgUnSbbPRZJQdCDkTK4J3xmo8X1BdPxhgwbHcz9TZQf6tqd66qtoqtH1Y3",
  "key10": "66SgBcPB1iQgSh92TUXihAXeoXWVfuVrdaoM5fUWYH98e15GGKEGpH12ndt54rv6QJ3QKSM4zNv4ixNYWn4BMvuW",
  "key11": "4fvWEaT8zvBVq3XNnTRMxEGsW9L3oze6psKHaJMsaMh7QA7vpP3sxZBqVmMWFMEg4RcvBt2QpTcs9gJ46VEniqDt",
  "key12": "2xvNxG3Ry6nY1fjssnjSPV4LfaQumvhJKnUDuiCdtg93F4hkykePC5o49dP22Pp6eSBu931cLREZKykQ5c37Hc7H",
  "key13": "5VCMvh2FLHGS85DtiqJxB7JWcdSGAHAq8cwNZ6WjQKLwLPP3FVKTijC44nd9nyP5McuXu2gwWqYaTGaGLC9VZ4rB",
  "key14": "KDebgYzbzC3mCeR6cJZXPv331iy2nibDDAQvKyqaRfCNgV4LZocjpSnPWG9ETQXRGRtCYd1vjhTTi9gQtxeUobW",
  "key15": "bL5E9MLYknxihr7FuC8swAa9jDGu1tzhiRe83Jsn9c7GjV9aWWjgtVWyNX2Yt33MXduWkwviujZZTEx16SvbdW5",
  "key16": "31S7zRae5ajXctgiZqXmV7DBLsmrwkfocqGLgpjNNaDDVRrqii6dewGd7wQubzUajau66LqUbxm69gZcbFTjLF8j",
  "key17": "4dLQXhw3NAGKr1jMKpQpFVZode5nVqF1PSpuA1Dj6JDs5MRQ5GeMLJU95DSNsWiyX9J9juwRrgCmFxkAjKCe5mMM",
  "key18": "x3DvKDxCMmwH9CnC9bEEUt1ugfDD9aWL3LtHkRaLvjTeBZBSLxM7cZHMtJ8DtY12Hamqm1MQpFD3usxEr8nFtqc",
  "key19": "oC8bvnjWYfxF3Yq3SwyKWx1E9nn34kHbs2doBtcy36MiHQ37LcSjLAdMjY2MT4vxS71wem8ZbCgnSvmEfjiUE5E",
  "key20": "5iQ9bs9ESV3zhpun2A3n61qz6tLmLKJ9qJm2oMN4fCMkHN4JACj5FQZUjdwo4omKvvDvpFNCngcAhzvqgP9eB7Qx",
  "key21": "5YFqGSvmebVJeyvxuV2pBZsW6hWD1bfrXffiixt4xQDniHtYL1azQPbwAAZMGJUWzcNNTgXhQLmp4KqUBGCnqiou",
  "key22": "4UiBAHvwdHWrPRXN3YFDroWs2M1oMjNmqrHKakadFqYwDDJBnCXcz9G1dBDgWnG4C69NmciXA1c6mJiYfZ9AbSVX",
  "key23": "2KsWvHwLVDZXT2acDLXTWLn14fdBbirMi2jkVA3NnWNNd8TXULnTfmvu1sv6CZ9BGRaZbNgBobyA35svxW7FpMUe",
  "key24": "5d4V84xyCdvVgviFN3mtS2VdLr7M3bs8xZmbUk3D5NjeBGUw4EPJFY8qfCWv2S4fbiTyG6aKawLBxtGdcY5gKvBZ",
  "key25": "3nCHCQQMESrua8M7CNNQPTRvfQ85GohToLnmY7uVwbf35cxMcfoFVxBe1Whnyo4W9xWcugZCm9ekvG7hjzexhDLo",
  "key26": "sbeAGjdt7LSHzav4RZazBjsEYujQ7F2XHFrVkgNbLuZ8y1uw9Sb1KsD71n2qd5j4H7stXXbK17auBinj5RTnhkb",
  "key27": "5Yu2rQUcsHy2bnSqHiUCgQAZDYWW2HoSjf4EybQLJbEZELr1hcFRdMXKJhzedCUDHAQQ9iyYeNSaaVBmkATAT91q",
  "key28": "2isLCy9qqEJ9cUfQDKnZgpzBgaXJTiZVnY3kWjjeNyPkBfS81TFv6AG6jxmHWcv3JraUH4DuoZZYmBLGJxz2698C",
  "key29": "cc9qjPk4faFPHN3d3CWiwkXT1ME2GUsfvVUAYKw6zAg9MsDEGvvEFKPybQujpfiQqioDWo36fLD2NVSnnQ3xLnx",
  "key30": "2fvayW3CiiPGLzEjKNcchctvV3YWHXPw9iG4W13bE9CYNWMMUjAjfxhtuJrbFFdpKZcPmKt4TnwAGRxFRsEUuyqv",
  "key31": "5ZE8Wb33KPQgsYQqBEvQyzjQfx7PwjD7BLPUGpXMrYePF8czCfegkzg1i2pLjw3jAvHvKTFgsjGQUJ3nbpys8VUk",
  "key32": "RVjc1M6o7mFpMQfurbMRiHrz1ijdiZhmHpg5Jk2Ngd6QWPeFsn9sD3H8fNPFdZsaMzgByAnohykMcSe9Vj1Zfrf",
  "key33": "2w3JuyUqyQRTVDoL454DTphrBdcquaftVJy7tTEMDeNCp9twX1fD9JLQQ9EEeu5o3CJBsmjuC3M4aV1yUuyU8zEC",
  "key34": "5LnsXx2jcSDbRJvJ3hd8ATuUdkdFGrCdWbgjbzYSrjrKXAYSBNWY4X15TxUekGJKkUDZbPow9KKncuvCv8NtYRwp",
  "key35": "3zXQR7GDu22mZCLHqZdT5xWzrkrjiWDerg7SemtmVAWcjxk7dbXHCMSs1bqXGhg7ayinVr3WgDGNmaPCrmfcNJHJ",
  "key36": "37v1khXqMG7anSppLQfzNpQhvF4jDoa5LCEen3LT6VKRhdv9NG1jBsh5bg28hMYNBkZsWxjVs8d5bThVBGrsjKWB",
  "key37": "4vQV9yHi7WaFRShEUU3unUyB8LJTgMy1iyx6X49YBwJD167ur1TabPtv5KsK18Eo8VsXqn3Qd7hArQE3hM1mC7za",
  "key38": "21ejeYi2Giaa9K7XgXw4QMvRRupottzq9aQ7phsS2onqbw98Y5rfiFd7EwbnfXFkbngmgGMhuGCx9wtLfCgW9SFZ",
  "key39": "2JcEvT1VVZprGbuRY4iCHvNSLCnvkNFCPakhJa3rDoMUrWK7Wc6cbhtVc7HdjHGPAnbE9bPoZfn8YBKSgbmpoKsN",
  "key40": "3xEb2LiNNU4DoZ9EcMPo6F6uNKLDuH7oHAE47KEbv15wn5JJpHrJ9w7pGiJTMEGZZDybSzFEoLreuhexKSBdo1nT",
  "key41": "2C3QGCLMf6yEmGjWZ29jmZvXezAq5TiXCZot2peoizYXEH7R5CkyEDyvpVTJvm2TaVFipFXTTbutpYLinSoz4f8Z",
  "key42": "2fwJphZyyrQKGjyaCK9pLuvfafM8BxL1nc1wHsesBzo18A8quDLvYYjbKEoKmFnMPoreTYe6F1we5qHasYMgVCZs",
  "key43": "3Yzf4a3y7BS3MsLrsVTuqiVV9jwuSNt2CzjhEKTS8z8CHYhGJdi4wqVFj5hY4uMt64ju5C8ujgMnHWPFBFV1KT7x",
  "key44": "2BwwF8j3xagcownhyiBRaoHAgE6udHKviSYTvPXvirN8gbHGyPfmTUJYVxxvAXoXANZpdWZSKa4Kov6pMrnNZucN",
  "key45": "obDr9zAQZbLjqCwdVNidv3zeQ4PPtNvnsVwcZ7PtMfk1pL6NgWZYgs7sj6AygUQ8uitwLd2M8BMw5Un3YLUJnHq",
  "key46": "4Yk3YD8dKuC9cGcd4dUTLBdhgRgRBTYLUzWbYrssbBARwkRhcr379G2add9RH1svdJK8GxyR3QRADWktv3EnowZp",
  "key47": "4Ek1UXYNSbTdVgqsEwBXR36R4XiXvRHP2paeEA2XXVhHnjxv8EcZ73EEEThZ2JDeVuMPSWjmXRGXf9NbLuHNaZ1Y"
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
