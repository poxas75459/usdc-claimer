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
    "4RkzVgTWCe61hVkGEKU45KJfe129pqa8xXJW3MdUWr4nXEf5aCtTsEAtQFwDtxe3GDPFwFhvPGJ4zXhW1iq4kxJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31yk1D4NCd2qYoPWvFjBRwbh4y9paCAVex9ijhmPDGYKzap82FrSKuvRx87wNjNjipM6VfizfPr9m2k6ameof2Pc",
  "key1": "61NfLgKNAVCVC33NPzBGP7YmvrzSqNdHsT6Qv5E5YYUycP1Fhd6HA22i2JmJ3vxqVNFmwuezsG93DzEuTYQ6AY6Z",
  "key2": "65HcyReVyGKMJb5cQnHiQowDAh6Vx3rDZfLaAjM7G8UXR1bNEEmzJJ9WCJVqvnHVtX8hAdfBxnqh85BDufUUtvfv",
  "key3": "2hZ8BXUZoZvDTUPKBfKZ5i6vx9HtQw3pEkkn2TQudLdpvrmMdMDqFpF45X9WzGnZndNszU75orC9Da55X5GRbs2t",
  "key4": "2ZE8NQrnzspFWjSgac1JS251jNGWACS9PLkSDQ4xK6pE7d9cUqfnhxhBDcoYm6j2bRVNo2rSFuBNWZmiJRkM8poQ",
  "key5": "2qouLbvPZJRjwqAAC2UhrfoGYLyQz2KuTi5AdurnS4odjZUd6GAeXKXbwfjKTscJ76fvbuW2HTNEmVDUXjv82UYC",
  "key6": "2ZUkPCfqDcxDvEpx18TRgSAS97WfGbmrnJmdofYKH85rGS3eJQgujC3JaGuZks8kGXVSGBHAcj5gadTjCaMLuzxK",
  "key7": "5mThGuMLoVdaUwj48dEdPVN1Ehvr1k2WeU5VimnJ32t5yD9jU2UJFGVTc8C8XWZodMwSoMDF2XPDdmBqSc8rBSXx",
  "key8": "5mYPzsFByPTm3Pun3PS3VKs3Y6NGWoqdwq4FomRJokyJjdqV1nmXRSvdufKsBqGLZmbD7CfVW76wrFUXLDdt8Pzj",
  "key9": "2Jq2d7avdRmP9ZpHB27gQuBhXLyaMGgiowxaq2uxfQ4PVyTXUF5sauBFJhRUk7gRaaKbL1PtYCCC72EEeVwdLkjE",
  "key10": "5t4xsQSQHb7GJ4wc4wj7GW9HdzNcVDBMiGjXCZ2F2siNp4s1HGgcdJApkXFME14P8BHybyikh6XKjaQ9HFTKZETT",
  "key11": "53mVi3skiQpLF5hRJMUGZ2zYsjvs54CrqWPYVnPTUcUHUAMfyTieTQoVUk3hQGY19yDQo14uWrhZvb1bfUfmJyF2",
  "key12": "58ZtiF7XTbLjqX78CTVo69sUDWU2cVaTmnwkvPwfD7Vtc3m3Vfpq3CsJ9qHfmJ6ptYVssiUAPoWubvA7w6bepMMN",
  "key13": "5SY2K3wu9qy2EpQRR3t9xxhydojJdhV9sUygJPm9qpkBBedfTUff3YcY4QTeXeTx8g1D7KHZPwNNJEVHuDn5mLf1",
  "key14": "5HtzWQ2kCr8Qcg3Shgr3CTJhhLgmJtyWvigXZPPqiKAPSN6KjvZ9YgYHSdG16ypVKnmQPgmzNg7JYXuzALWe7K9j",
  "key15": "32v57jWHfdVkbhTy7ZHvmXq7F9XTsuM55fRA4w9xdYXqZi6CAcRwubGdWUPwQYkq1kXZoJ1DVoxWrMkULiBxLWW",
  "key16": "2oAQMycvh1hU2Y3Je55CUYkfLgaeDHrxSj6BdykdPDAF9jjVZwFgt8Y92waQsqfE46C8LC1TiZ61UVRtwKFMmo3d",
  "key17": "2hojpDLjHf9aTEJMMdj2qUe9sVSswzakuHGr13gbTBXm2Qz7dipF1HYYCWsGeTDDxS6AWnMqJSUswGA2xZBJDiJc",
  "key18": "58Zf7uXZqKW4pTDQT5WKHvKKF6g3LReoFmjwsB5wKbSUmD1GtT8RtcwRx8E3SkgGtzQbnW1gqX4HpS1995wtGCK6",
  "key19": "59eqrByXmf1CdjgsAEhH9LvFtGYKycvGofywwjcYBrn8c1LbGdi9xFQySsrfPaaRWkfLRY9HiFsC4HwZFgJNHuh4",
  "key20": "6zN35x43NvbmDdZwHhCqBfpHTvb4LPGmt3rwAXcN1XNWitqz8Af1D5Wbqnxzoc9RMgTCiL8sTgvsqta45dSLYAd",
  "key21": "2DRsWszG41dWrnNUjJizCs6jBQskM1yUCjR6oN1bqCLXApQqdoDxhFMmj4Ux8m8wxTgFTehwaYFM9a6d7dSpbfch",
  "key22": "2caRqpZT1KU2MogFbJH653QUVHMmgZfwfUuAGqFSKnQ3iKXBguKweb2wBZAVjHMBNgkF8i1bbezk771PnjeVmFZv",
  "key23": "2UG3273AqHbYTqw6QEGCFhhFpjs1odLJc92qHKMTLxJPeCVs9PcmPeMunFHAwB2Cusxram4YnazUUnez7vyPie96",
  "key24": "5ygWg39pv5hvvd28cev2RYR8V8xrEAgBauY6eBJ2mhg5izbVe813b3j14pFiS6x1RKxiNXJDR15ktBQnfwGthRWp",
  "key25": "x3VmdRmosPaNphQ199vBiS9xyw6FJvt5JZRvCmeQYA4uaNH9vckiTHJ7DX7XVTrHRQnc1t3Tmo4dJ5PKHbsnkZK",
  "key26": "64eXpNL3jLar7ihqowBfzppMuFuHd6R8WQPdWNQCddsuAhbZbj2AU6KtbvYaDagwTZxgoDcmrJh25SKyEAbRHX4x",
  "key27": "3FoqSd8ff3b1DCbZ92GZTKbB4a3VMbftfUqzvQtApcMDpbrrsR6U4BWdLq5f6Amu1KMn8q8YqLFLC8sFR4c3sQhC",
  "key28": "2JXhH2TfNgEvXqeeJxXbCEMuw91wr2MFbDk6ug5eE1UeyrJ8G8Z9bodDXSmrzdnJ2GxcmwN45NH7wLca1LVWsowL",
  "key29": "5a3sTZJbTkMzgVkaMVhNWp8Y3EF7yxLWVSNhtnbggd96HZRfKayRpWuV7h8rs4NtcNzeYYbbu47WSZomHEVbjVBM",
  "key30": "5jvcPgmrwns7p5ux4entQPAfXwSkaJjCekWXioV1xHVZmFiBqQDmcY2K4iyAKSdTQ7x97nkcPd5yu2Y1DWf95rT9",
  "key31": "5shJ3sCNUr1QknVR5t538d7hfzeVb65Hk3p3NiWcZGzJvQ73pN8cybKiGTM868qKHRfyoGw86NZz77Ls6RpWCeRe",
  "key32": "2mYxG8LXzDcUB3AdTCLuGaZywGPNctBMHfadsiVoCNAThpk14PhMuZgrcCsSgmUGiSyH8R82wmyo5YmR4efEW72t",
  "key33": "2pUzNXcp8ZBkRktU7vzuY5oGiant6vn3fHWymxGwZgBAw4imakzu4pGvNS35xw4JH3Cb6rumwMWqKTsdX4Ztw9hs",
  "key34": "VQeQcpiMmBqYv1snS26gXXSYcgVLfa7T58XubVk4v6HchQqepBFhSPp7K9Gf3CeGR2JCaqFrienbSh4gdHUrNam",
  "key35": "59vwiiXKXrd8nU3FobTPKUciCYh3mKrvZ1Y7ewGhHCLqJQak1vWDXeRTFS2Cq4Lj2kTqmvCfcT519Vriro7zBSpr",
  "key36": "2VtpSqS1Yb62LhtLUCrwerFBpKZ1BybjjcyYEZbmF4kLuEvPBFFP1KpZGCsW3hMfNjbvt9gb5DZT3F7oCk7q855Q",
  "key37": "2dCxjqNEsgj5ME3Xmn7yXCWBJKMtzgPTUnHE9dAXRKZ5BZfPv8gcxZDvy5t4mZDr2kBR3zZESh152CuHAyB7Nm1Z",
  "key38": "43nr6bbz3AVvKb1sLxpTkGvQYt8SiM8btWudBiQKBNEv5QyVfPZiZi1pFp8MfSe9GddxvrBrNAWifUgMBRiJU8Gi",
  "key39": "8dxwVgvDbbHZ2Zw1vRZ4Fjiahu5RubKdTR7p8ggZnzjy85Xb7uA1ofpCvruEHJjSiv5qdX2UyYbGV8NkC7QnPsc"
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
