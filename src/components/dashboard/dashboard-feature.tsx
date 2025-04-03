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
    "5gSkPa2ktrQtTwtYLKb2LH4DMvXq5e2NpT1vAkMgZHtWppKPMHkNRyMqrjAFmi2zAonurQB3eTaSf6GorjE8x4DA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CwKgY76qEpXJRRAZTSpqEcCD96iXcAwuxTf4Y5aopVeDhfjtVWe4u4t3NjXBj32Ut85kKmsWgZnk42D1X9mnn32",
  "key1": "32K7oAeqnAgZ132CVQjj8YFayXbZPykHBygtbUueR5Kg5DUZ4RdhsxsqEPoXgAegYnH5q8nYkSvQ1kGnGCEUG3R7",
  "key2": "2Av3pAaprTrUrwStxaM7wT82LZGSs4qopLThJ3DSsK3e96M4Yj135sxNgdiF1wevotnQfdX1o4QwHBogxAqh1Mpp",
  "key3": "4ztcaWhXtGLG7Xutcv9tdATxEJzseC5GxrtWHf8FijbfsPMnoR9KfvzBycCAdW7UAxXcqpwUkmhnKx5JR7ScbVSo",
  "key4": "kNJT9F2aKMvUEw1Bz7m8SJQojWwBtG6BGXgARjo353ohqzn6LSCiqVoqctz6YNNXfRsN3qSFWEdHeaqcd6D99WF",
  "key5": "2mBkr4nv99MDjQwrnH4e2usArmEuGEajvrws1Jvh4rcxva6gKapcFbY8aPVgGVBzbTCWwJuGyDawWjH452QDscEp",
  "key6": "v9Bo8cRHDeGykMKdXFeJSKLi6ADqsctEKwYBHP6JQTZa4LGgy63B6EGh5HXkw9KF6o68W6aThEPFBpxHQJBcfUu",
  "key7": "4z9KWawx8i1AGgDLAYCtzNwZiwq8nqFsySQkyxmEbHhucrCnAdvBnDY1xKeg1px9RAfqJmKRbM6XSSww2R467qQR",
  "key8": "57wg69DDDtAmaVNsZRZSKCf5Dqq8UY73Ptvmv1PSfZR8YErXPK6NgArhaBRwDibfqikGyvFXRCqJAtEXkDv4hSyP",
  "key9": "2CogT6EihJ7u1Zc682p7r9KSRDaJpaAahxRKg8EcCCgvRA8Xqai99GRKW9fXnpNtt5Fptdq9imV22SJn9mnCwSub",
  "key10": "Q24jVgtczKyq8LEc8RakUW9CQwNB5ZkkePGyyPHE724NjDtYDfHvyDtu3uzZHxL2VqJryY15VMsmjyRvY7PEc9z",
  "key11": "492PZLDiB539rzADNULPdnDnNAhHxiAtcn2NJv3iUhgE3tRYT9E79kuRZ6YmarwPEpbgfRPXsxnr1QCLJcwhnjqF",
  "key12": "5VT4s7gTJb9xBF77P39BGjzqDaDttuQ2MyBUHKP2tYT4hmiHqYwGYyceavnZ4owHPZhcYP7r64ahs22uBqyKnMdx",
  "key13": "2JjjZNUfWtsR14PAwbNKRENmAmqWL2Yr4ZJ4n1t2rdMNj71EDcg7F1WRpMkyaikRHEY7ggQjL68efeAYNRDcyyZ9",
  "key14": "3ah7gtNtqoLxJfJRus3gTrhCuaJCRfnrHTpHhHEQsZtrTkKBSfRUT7tRVsK64F9Fssrjzb1VVGzGFpM4i5FW7DPW",
  "key15": "4KBwMuYG3iuPxwYddcb1KCWJGj4rGn34KHVShtSpbqrnrR9FeVAyLunuAKcLMVQMNKJ7oE7bvrBtbqguycunH2QY",
  "key16": "2gjV32p8M9CMFnUoN4g9UJ2GWA65WWZTArjw2E92E6dcHpZo3rTGq2yNH1Uv4sTFuS8dah9izG9H5D2xeBSdQ4C5",
  "key17": "66w4b4n4yPeRYmzSXC7WeumYcEC8zE1YnvgZGheFqwvKHLcrtFPEseesDWXS6Bjji7Zi78kgqXL9q6jmW3JTszqE",
  "key18": "3knZcD9ys6rhgak1JRbKissFTwzYug1KmawfgS8CB9GFEFrZnps48WypqrMyuSXbESuT7RpQjtVY2gUtNNdrWPwT",
  "key19": "2GkgJH8Y9RwtfMLuiNMcFeBnfMsrJhm9pFT3VhGx2PasFGK2jrrm3gXrsjfNzjeqGfGLE7J5uXAS65iky3f2qqft",
  "key20": "4X84WjjpV62Hf83YZsxp1ZKtJ3hhxHArVLX8nKc1i6ahF6UDzRWR7YiRixotnMaHNpDfe92gy1eVVTK7YbT5WgiQ",
  "key21": "54DfMD7fPsHJt3k8niZeN883n4DKo2Uu9Kphk8D1NiEe6h41S4maUGrvxro8k8br4z55zuB2StCrtVJhA74Cnfj2",
  "key22": "4WEGpxRXDwCTsz87QRB8cBWo4mkK4h25Nq6wiLdFJjNaTXQgVJBddBJLoZ78A8karMGAbEhpvD7yuJK5z7w8Dr3d",
  "key23": "isqunmo4riyEoSGAjHdrb1nWtDA2AyyzHQ13DCAQjNVod4w9iaUCSwWaaR5LyKTUw6p8NX7emtdSbVdB63CUucv",
  "key24": "jN6kSJMDFNa8sZvMBsyC2Gmb3JXXMtAgyhxHSqMZbjBXEeygse9i2TRKDjjbAHactyKPmMReA6RTfMeV2zKj1rt",
  "key25": "5uQAm7U2uZxSpG1kMiGBLLUwf9AAy3iNqxDGWxNTsErbVwaF91ADA7fkppnjGoqEgtzBMQ9z1Ug4TEVtXX2Leutg",
  "key26": "4bDNtgu22fDzhzCri8THGg3e1W5juWPhXFuueKRKzEj6dCwD76s8c42Gnycq7qiE1zUtr6LtQQoHig7bH943Ahe1",
  "key27": "2Ty7Ei4j8ZFHMvwiF7ktwRnGzTJ56wdhf5uxBHL4LfCqSqWPyeJxNSFBhRBHbyJcqrueZSuTLhJFqsVpmmjpZSDT",
  "key28": "5BDMn2xUyzpd1H7MUVamDTAFFsBCeZqLTt3KFyjMgPrtjS5tTFYrevGQX1XSgXGZrFJD1BhCxTBCAvUZKnxwPB7R",
  "key29": "4BFPjosSsJUauD14bb3NfFLGNzzAgbkX4G4QuTLzfjT66zX1DKNFgfNVvVQKQyMngUSevNP8y7g1PZxfrytJkQoR",
  "key30": "5t9282tKWLP4K2wfLRZKoUK8eng83W3EGazrP8NxpnSHiu4mV2ptJZR5Sn6ww4G4s1UMWe8Mym61Kd2PMS67xAmS",
  "key31": "xGAhmr6D5zShgCVqzPaJgeyWkSAortoYgdDCU2wArdDRt5XxAVcyoL2i926pLsBTXyC3raFNnwvpSPsWQMuVKRo",
  "key32": "2zGpUkmhdzRZ9YdaNyqXcfeF8auqPXCGGZh9GQsTHUyaM5MpWayKvvzacTRH49oyZR7EFus1H1gJwjmNcyyviycZ",
  "key33": "55PXk1WMMpy2Ss12YXTWvFEKcPs4iJDLPtJk6KjiiHqTCZ2VdJ9v5RTWmYyhwPSBfLwSg3PQR8JQWb4VoWbGXAn5",
  "key34": "3nUPbKSH3TKL1r4mZyu9vBgxh1aBu1hVG2LPZo3ueGckf9oYhm3nBCAZWYEUvn5ZTGsaHjcHfUrRUWySTHaWtWgZ",
  "key35": "3dRZv5XJMUjM2wdh7XX5nZkUpEVU4G7MS8vHPjnQjg6NgoRgBxjCx2v9rmnWg1de6gRQ6RaGZhfLfNEDaKYeh25W",
  "key36": "5DxtbfP1JbjsZCDzR4bgbfBptF2CngTRKgYwdVBPZ4R9F2fWVCi6ssCfS3VdXMo7tSaqptEAdA6ZLHpi5tpK4B8v",
  "key37": "3ZvSqPFKVAttzxFSWKoxDbR1mQavT8CaFQ9VSJystChvU9Eu3gcA2k3gAZUTyQmrc8ikJKuA6b1a9BUVGqjoi571",
  "key38": "3PvVGyYg3bcTVWQJcSpBYDDDWeZgcjByHmHppTPv6KBiCc7vXP37G5zVJZRRwzxLyDBMiD6Se4n453yCnwez6oSe",
  "key39": "2kYF3q8q6Ltm7R51aPb2tHQ5i1R4wVggHiZ5Nv4EGPGJNoVCqHv9ZpqXqa2G5WNv7tfwY43gJk2S9qm2x8p1uYR3",
  "key40": "2bzcx3D1VYFk1q2Nofduvacjca4fRGZ1NcyrwTcKeebFz9tWPT2UfUUTi51t6djdgsE2WHqACJWAZQJeSWkCgaBt"
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
