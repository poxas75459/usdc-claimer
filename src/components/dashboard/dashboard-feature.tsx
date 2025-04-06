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
    "3282UGLFR8uXTBULMfQUacY17GGamB2Aa7DbucZbiPa44SPTb9YTumqzYcVJNJL4HuRU8i1FhxV2VjK8vHdBDTkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aVaiFnHd2iArDU1aR5PyUHk7txAQV3KBDbmJb15VueEifhHNEVHaYQJiB7PNPJdppo6sGoL31pnpVmsn6veBGam",
  "key1": "7vj2szppHfz13iHFDKtAxmxzaAgQUV7pnmCNtPGK2zFPS954eu5eUJQwT2v6KZD3XnxdiuQARREWTjUnrLN3qe8",
  "key2": "jXSj248osHaxzVPyJhui3YxtvEfrnnkSAuArGMLYezJJQPDofpiqWL3XpaaxpuXo65sXVtJbGK2FdnuwiBHcpGQ",
  "key3": "3VVCo9qR5x4u65a7ZpjFULyRnBYNbC3oziuZhKUxv2ppksZ3LzkYHb7wDdKvsAQLz7KaDk6SYTuk6qF6MbuwyxXG",
  "key4": "5VnzwMkb1MXuLRwVvp4YWXJBqjdoj6utk1c8rWiV31VZB6oYx6NKN7aJPzxP7VmjNLhwjERHyfkHTz94LZmqjLdU",
  "key5": "46zhCMPyn5LxmEugevGUYkhMc2oddQBpqekH8bYmtQ95QiL3dCyCsroZ47SYoE1iXStrasECNnxnGukxSNR32hoU",
  "key6": "3ns5F82bwpnV4jdEZrDkHJEFG6ZWdL9wChfLKpGS4Q6U297F9NvR22mHiVe3vTTGHToxT64L7ikBn45N6e7ni25K",
  "key7": "3LeCeef4bsAmpMWcRVoREa2VG44WPAmo1JEgcwMmc95mQv1UgFzx2nCtLkcwvXcGCKeArkciw1nfeAigZN9yFruM",
  "key8": "5vtp8QYG2nPDfk35btAiG6fkkA6Lp4iQQ1z1c1tsAHzxxLFEJizeoEPWzK6nDv42Q5AaLZPdrLhTepAwCyR92hXz",
  "key9": "4u8SdnbaAAdW9UsPsmbsoL5eZqR4wtdchgaqrgxcZamwgaXbMc948H4SJwzYNenYA82hbfU4Me1t6rmduvmZ4MMN",
  "key10": "29JUpU6H8u9HD2EN8M6L2atYKZm6SrkbHFxcVHsRrw6w9M1ihS3CHXTX6b4K74SvNKttApYrqskcZ41mmimJKPDm",
  "key11": "RdHoEcdYV5bg93U1KTdEL47zagYwjDBEf2U7J9WRkpUvkFTjNLniGZjh71HiNEhmJXgHGQ2LLvtA6it66d2A4Ry",
  "key12": "Gfmmn3brFe9yTXaLUu3odLXgt9eVE4GB8KxbDxyfnTCmRVdr7q2r4c2EJ8a3mvzNGnXGBnoeyr3Zh9thPiKkKhU",
  "key13": "4T55ZW2VTWumoZ6WiwUk2su452StVGNtUKguwp6iEX8sr2G7R2pwppzbNM6KVg7WPvwCXsCyUynE32XY8SACbHCX",
  "key14": "5hrJcX9CLjdVpxH7gtwjpmqUH5rtLmDxAd9jBMF1D99SL1TodnvWZxwU2VYsxCN3FAR4LXa5ePXebk1N9vj9fk8z",
  "key15": "4Et1qjU1SCWdBiVRjr3619SSktmDqR8oc3ASKpzMQPbfdALctd1cGyH6S9mkG8a5dsgKD3ruSgyQFWkC67Cvuh6L",
  "key16": "LCdDMmjA2Wk5peydBq1q7pF9CtBi2NatNNukZzxozrKTJVUkAW8DYgkVWEinPw38N6mhEMYKPXhnxvn2hCJbEgL",
  "key17": "4Wxq5PxZmw5NGw9mB7x1T9esGB5QHax7yiJdS79ukxewCx4MDAegXCg5KykmtmimMZu9NQXoQE5yfYFiisXmZHR8",
  "key18": "2zyA46iqBTJiwhy6qMuDYVdE7oApBYQ1PCLTf1uWZGGpFDw1d8zTqC8GvDkahxL3vjoUCu5HABBbiAdoyrho7MWW",
  "key19": "67jEiZLBVDyAQzF5GNduAVsZJWfRFttQqUNtuKtYtu3VXJLCknbnJmiurX1XQAitgtagWafVzT7TE4zbQ8PuVPPW",
  "key20": "2incm4xtbkbLi1jzMZ22kqxgei5i7gng5NZZ4AiZpQmxb8bcZfuH7o2htXUgh3SpiWLNNPEjcn1sgXBU6kHd9eQn",
  "key21": "5e2DrHhUxjR34kc5uJ7pb27f39pifktQroCTy8NAyXNqNMeZGhJFQM95U42ahaigjTRtz5pU9f2Y3ziugMgiiz9h",
  "key22": "5xTi2Mh21DMVGGAL9Ew9SnEk34UaWJ3BdjiA5zscaYyNtSzqCRmJEDpsWeFcxXtcCHoiRwP1HXD54TeDwPJJ14YA",
  "key23": "5PajyNnQQHyKiYUov76dPWDrGEoDEVFcSWRhAmHoRtL3966MMt755sW2vh4CNCYNGLT6ugRpSwbz1B4VgXg7r4dR",
  "key24": "2A7u2ZP27vDAHXHhUXx1A1N45eLQHbG36LmRZTJDC4wuT65BU6qpBLaBggp9YGbfPpAYgJFEfAU9E7NJdf4HTruv",
  "key25": "5SXzQCLJve7BkHp5poBPzVMAPrhG35PXy2qa7jGFUaJyP3sTWtR3YkGTzXNGdq711cv1j4WUqV7K2Whw5heoSHVA",
  "key26": "37HYEgZ3arFsW3h5tfcCpjNvUq8NRM6DiaP5FuDMZZBiEU6QLwMCHCRBR5xPJEwobg4kgLTiSYrLUY8ZfVuBVTC",
  "key27": "ZuZgVKVCV5da8pSqsre9HKPAd4cSdEVR2c38C39PprXoiQEwNNDZnPcCYoSRHJsSzNRysLWSH417e7Dyt5zwHYV",
  "key28": "2TqPp95sa7UH7WeijH6Wb4ndia3fq8eF547jpB8inrCSpLbVarnXRUoECm7cQi7HYrfniUsyFYeMKxeZ13YafpbN",
  "key29": "1Es1p2jqUw3sj73AMdxD6teReq63L55tFS2fb9CTu4bpZFZBjccGJRWGHzentW3pD1i1aDJbf7S2khUzo7tAsqJ",
  "key30": "4r4AKtPfSW2KFCwkevpq9Q4HqHeRsWre1sbm67EFsHMBpQU366HkMh8gsG6M95sn1zor6C5Xf735NjfdGnPXLFBz",
  "key31": "3muhEkcf2r2azoLzA67Gj8RQTEEcurSw7GJQpWCHgiGgqDfVdx8nvztQysaNoQusW1K4SF2nSeuo1w87JuTsp3Qx",
  "key32": "2yKwpc7AzBTNE2TU4GCGc5ebaY8fkagNABBN1qbhqDiUtZZ7H9hpW7oME7MoALVtW4CRsWzty6kwgaZRMFT2QJbk",
  "key33": "5AiM35o9aFk8Ex9xHZPuZuTt2EwxGijNejFG8hVuKonmuszSLAnQG2ozgvCZjTNpPWzqdLGZma59Q8e8fiW3gGB5",
  "key34": "4wYREBJrKihs5bMtzV3RJ2sWw3cDRdRAC9FEN51QL7ym65mdSP4sKpx29WNGcKgcQpHAbV4acVzUXuSFWsFvD7NV",
  "key35": "3MoUZCDTj7G44tzvGiWEs75XhxvyxVGuTpEfFF1GkuvACS7QnhXTjLwKJB9UWA4NcFB6V1YSpr1qFg4q4uWsKpdc",
  "key36": "5i8TPZTL7QFCTsqwC5G3wh7zhdhZz9jiuHTeQRmV138YgBTbfjFQ9shGHoqAgnVourm81YYrozV57cprm5HBzQjb",
  "key37": "27Ee87qGKtNrYTJvgXBTzKgPTywfFe6ZWabNr3HnpdvFtSUsK7mRZtkdP9o3HAGQ1AUVfKM4bij2abErk1iz5d3x",
  "key38": "4M4FxrpCzFuS96SC9W136BXzW6mUQb8fSpi65d2a4V2FAQrY9jCVoHF1AcocT5fqwSeACdK3SqEi5KtR5WRHiEfs"
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
