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
    "2CjzsyN2r2qec6DbLqsZUNYQkp1vhyrB4kAzjmdRbVQdgYk367QGxxUnvhQ7BzLrfgtxHwVmF6JFE1gdTKVpQ8mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8eUNgUn54JXvdWin2JyYqpjTBa9uiqgRp9qHiqYcdgKQ94MFZrANxjaz7uQTcvrqs4YmXhDc4xyHGMy25uWH3W7",
  "key1": "2pe95Da53FQduhSNBAQmGkc4pxkTfziVRpcuJKVBfFajRLfwwqQzJTUaPsJoZNBsEKtDE27FrDH9AfTGPP1knaSf",
  "key2": "5Ch6GA6eC78deCT63xmMsV6XcuAturXMycS2hieTn8gbcvms3YhqFLwBP9MzSAd6D2uUigpz6Eka7QZ6r6ZdhtsA",
  "key3": "5WMXpVxmk8RFqmybjFkjvKouZECpFxtvbGKpjFRtsopEKpu9DFk45qqjbY6tMi8JPa45Nwh7CXs2geqYtikYeJ1y",
  "key4": "3Q3F3Yu9aHRbMLnhsZpiz8hMARGHdp2R8GC4DS1JMznxR53NofxHtxYg2TaQpccPwxQvbEumvHhhDV1yQweS7Zu1",
  "key5": "32EAXe6z9i4upoN6KvEt3VHejSdpkGtRtJcjF3kHUFQQUnDqEHTJ3Q7hff8StBQnpSDvudSd137ha5KQ3b2L8Tht",
  "key6": "3jzBduz2XLcQgztyy54QX9jQ7j6facG8Ui1FqGdfEnMU2L38JTJZ7EgGcBnQq9cCeFrQTTXvTR2VkbApL7gjcswc",
  "key7": "EmanzMiF6k1qMMjLqqwxraSNowgP6kx3bAxPMk8Mt8MoxHM4cR5osPdon4QYrSK6mxDbNgXAQhw9BuUCi56AqSN",
  "key8": "GHZxsxGCGBS9x7b5QeBoxzW3tHbGjGkG3Vk7HRRnDSskffomhoQygDp8gaYyg64KAgbG8Txpz5skQPX7sQMN5Cn",
  "key9": "4zdAEzgfL5PiUPjQYp4ZdvGEhyc6iWBFeFvXb4nJ9dxLgjSFkewsgs5uxHxAdDK4K5e64Twjo1GFeSt5b7V5yEDh",
  "key10": "2T1JraQuKP8CErtcK9zraMXwVczbT5Lo3WuHTzqxN6KHdQh1pY6jGGpyGWtwPSzph28jSPLiKf5UviLGxTkbddS4",
  "key11": "2a16y7hz4J1AgEkFVDPJPmZurWHwZCdn9iaVGTJFLMB5MGxkahQhSfFbXrcZHJcH6q3TGtbypnqBWpvNop3ARzWZ",
  "key12": "4EN1xpAhAcUcD5nL4fKzhEuyaAivob8MxLoHq4zAdTrVFFR8Ni9gT5zCzdW9t615vQjTts15mTGap7wgXhbW9mbB",
  "key13": "4RkxrEKaAywuQ7GsAES53rNmeEQxrewN6Sy9QyD7fPrKMH2brMuBto56Ed9HspHLPfnveTYDoGXJhN3U2hmaZE5P",
  "key14": "5WyxAiZrxbhr6GcJrKLB4jzF5T8bVkU5iePF1S1v7D5Rph8BfKUJBqP1Dm4CSw7txCc7LpzpjcbhAqDSobZZCMVp",
  "key15": "2Jf9VyWmUF32ubRVBLjERqPjESQXm3GFEMuohrn6XZrPPGoEYSBPUu5V5LUKCGgp9M96BTP7WotWNETozG6tQK8q",
  "key16": "3kDL9M5bUVdxpjkDnAm7Jrot6rbUMdmFmbAyjj8WsamWcQLzut5CFa1JxgJShV6EhRFfPvp7JVMa4k5XmG4Za5Ec",
  "key17": "4xteF2Zgu965kyCiFiT7jK59oPdhgvTmm6s4R5M89owUMSC4L4YiQFoW6v3rdbD7tAYvSV6FsY8DDpUK9aYQ1M7R",
  "key18": "4ibpPGGqPaxYhBS8roxEk3hbneQjgccumQQ5bWWfxwLTxW7RtaNJyn7vtqMLDMg2PUfVbehDkVKKWsPDEZkt6LJf",
  "key19": "2X6LEKhXwS82mXWcMTMunknz7NnerWYzHkqkjrVm2k4VcnLAwsU2YnR8wkJvW4KiDjdRQWCVrVmCJG7BN3mxZApP",
  "key20": "4S2m8t4QTxPrKDwnxs48WswfoxdPFgvYhST4ETsu5qXEsHyEcFDYfdAxg6jy15KMGS1Y5wCPpJfFjmPm9B3DfyU9",
  "key21": "42LoUFgnnQVQqtLpSCD71ir3zEtyvNigTSyihiWqxyRmkbgjiNAtKWjXbm7rDSWFsq9iy5gAgxJ623Ptcr7yGhwz",
  "key22": "2KqnLxnSSg6mocG7mrPrPLBppckHz5yfqkvBWxERuh2KZrNXgHx1C7ywe3nwaT1nmLieopkvSiUhUsFPwomqYcjL",
  "key23": "3nbVLe7XapdccDhs3cnYAgRHu5UiSDXCyVe8sRQjxQfABrQZYCJo4aDCj3W1j841c8mVaSnxBc9TrXnTjJC7dmRY",
  "key24": "4sWXrV4w9hwMobrtX8SRTBuQuN9PDANVcdowNN1gYds3vkGc8HL6vAKPZq7FF3WWaUHwvnfkD36MfumhDDQftWeZ",
  "key25": "5n1M2NauTj28L13vzRckYmtFY78ebvAN6sRSHm5NjC3JU4FKDFcpREF9eXmGjMRi8j2cBAzunrcTeSvoZtjrqUJs",
  "key26": "5aVmV9Zc4wmr8aA5S9XLRVk3892VKmCobW8geGDjK1cyrD3kseA7ZvNg1R3ze8wAn63qw5PNuhvi4HeQH6eWHypx",
  "key27": "HTCeMskvhNCa4q8s2bVVWAV6VtDrWNV75dSA1tJ6ev8Hj7VnX9wzsgLF85Adsfsm83b9WFms27Q2qcBhHAzFUtR",
  "key28": "3h64n9arAAxDfD5nYKW3e5bukCqKHKP6QnpC2gPDAjwKSQHkm3WsaGJqtAVTEa3mDiMHyfmciGs2BpF8k7ZeoVwq",
  "key29": "3j48vTv5pW73F4cUVVyaD9K3ktywrSHjkKPr2dvz5ZtACWNE34xRCi6TbYYPMvuzNKJo8Cm3wq2WkBCi5bPvmnPP",
  "key30": "6arbY1k7J8w6eGq9gBsAnCy1x8myo2SzRMRcYT4r2rxG1y2qBQoW2XmWfvum2s5jD4LdAf3iuZ5y7QNjH9EFPBs",
  "key31": "26ZfqBH5688Jv4wdzhb3a3Q2GJ3cA7NxgEHDyJF7psji27W1zBSYiLkusUBQUVdfe6zDErwt7PM3jV27UcLJZuXo",
  "key32": "3RY9gQ8Sdh7C2AfscptxAbcAPqzWPnCTFXzuVarWFciB28qd4JSxEEUCB1Q2wNJKy3Bkrq2Ao7D4TNkjunWM2NbJ",
  "key33": "59rX8yHwUPRWbc8XZhxGswuDF27bpnroU1AT1Rr2qsUgFb8C6zVuNpZhsUhZpVmr2LMvUvLvEUEcSE6eMwknZWoD",
  "key34": "3cXt39i7Ti8jeJu1Zcdi22J5xV9o35e3VVHhCKooTA8Vkw8PUQuKJn7FVJ9Uhx6jXadEDnsPCecvS8DWyuQdjBfX",
  "key35": "2x4BxQV55rRsWbGjBbEXPgpjjT59e77Vb9HvBxe2pw55VXS7kpmAVdhuWLCpnokZ6nygwM1v4NiEjv86ACZd7xma",
  "key36": "kLoSJLZxoymRxm6VxcwacWEuTQQiHjbABmUZ25Ssky256zCKQJzpDqhVHtrkJfNcyMzVJ1qBjUnsKGd9cHxG5wa",
  "key37": "65wFV3tALn8dNYL4BjLCs8APxqD3hGpSjXx46zcMuZjw3KjB463kLduRiLGBo5cKpRiquqYfTHtZavVdxdL3iEot",
  "key38": "3dKQAS9pYa1QFrA9rUuVmcHrbsHH3e9fbGHx1jwK3JDxhLTbK7fLf7LQESKXWhf6oVB3LFgkxH8QNkHsbn8hWsQr",
  "key39": "4j48tBamjbXcdGiARwVHiZR8r8qH2Z3TPHtfYj4VQiRejmYJPdxQqNj9gLaZBBRMzX4crf9Dwb1qgDbjRtM5iKeo",
  "key40": "4huiS7i7Xpbm64X6bpFSzUSVknMKUYWmDLGga92MMQEADbU74zT8NdfdfG8Dhp3UNgAFZsjEQY5m7RSLe6Bi1916",
  "key41": "4t8TGL6PfPYKV31foiKhcn4NNKatbTANAVmLJDEEsRV1B5Z9MRS93Wxic3D3VaWAyEAAo3ZPUXsVLDPhLg1XwvDE",
  "key42": "4Ddz8VCmffFNYWyA9gB9aA6vTi7gvtCXaMK1BGmCx8BMCshQrcjM4jxBo66a1dT2K1XxtxnyPSZB8hEqfka8QDhZ",
  "key43": "xcp6MAMVKQtDCZGbPxasCKBinXt9zKdjec3SMHyCuNhdUQ8eEc3LGZJjiMZCGfn4hy3aWUERmEXWuFHuRNBN1gw",
  "key44": "2CjhSyrfSvnuSJXVKm4pvaAFkBAiDTz5VAZeUaqCuYyBSER5Jkb7ZSnkwNKJcUBdkBbSqhcjjmst1SrzJyQ6Bngt",
  "key45": "5a3iNPEkxHzL8jq8E6XXaCHUsc1siGGsJYBKHhnviYJKHzdL7HjjWPAia64hLaz8qSY1vpFiuLEUT1vfqG6SKXcb",
  "key46": "4EeeWgV89fnMkGLDCUew4o5WA1y847ZJACespCYiCZ2mqKcMD89BUVo2qFv4QrmzH3PCzKjcrhw9b2hYnBEpMj8q"
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
