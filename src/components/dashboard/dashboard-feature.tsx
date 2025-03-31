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
    "47c8xhUjTAFReqWGAYF6PngPCagUhd923mfJss7AxLjWrf2uJZKHTCEs3WfbpBbT7Wrvuz2ePEnRJhbCRtg1NDme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QSk2xY2nAzvzG45RuXPzjsPnDKCEBNP7V6QxpmLVfur1JXR2VdGJYY4x1GXXFTEnbMccGx7zbrMVT6iduHzsoCS",
  "key1": "5jFvA45ouLfv7SbuGYY2uZn6NVmQFRErsP6NAHyhYMcnLuhMRLvVkhmxRWSQuNUz66bdxpkSWQCKdQhWuLG39qxu",
  "key2": "3v5sFJXXFxKe2X2UJkpU54oxkbSG44F6VKMAu88g56gBijckF8ETvYTa1feHSTUd9oUh3o4fL6tx9WUnRnkmzvD1",
  "key3": "3o8khXC5rdaQ52ehk9Uw29zDJDuDh7rAqFw9oVAkAnut2Z1RzzV14hxysHR48WHb4Jt3DwdBrv1iQMmMAUGivsBM",
  "key4": "2vpmRAiAkF72YtqsoYP7rot2rKj3XxBkr4P7nTuMnZPa5SdftviVmfxDTM9oCt5mrJYS3r9WAjNTnnbdFrELQp7L",
  "key5": "5ppPeefU7rUnmMricGmY4c5gJg11ZZ7r9zYbiPhv8RBLUitBJRBagDdNEn1s6YB6ATnt4oChnWPaaMjCzX4iAGPP",
  "key6": "SizLQdosDj9h6Qmr4b8kTSj7ARTAXNsRbfU7zt8zCxzRsdS6hKmKgzhmTdSac1guz7zg2iajAHoeqPQWBbaqTxs",
  "key7": "2fBPKGdf2KG6iK6L9mxWpF6jgMoxXWziVqsq1nVrMLnaQv5xeUFbvjkEtdia2jqZvyiXBYY8UkASqvNsGSvgBDi9",
  "key8": "4BUQprLAUsZLb3Gmkq2ne7tuEmCh4KXBs9W8yTfM4V316UwpVBAYeuQuQg1bFdE5jevkhSK9o3JYzQ2pJ3m95yGM",
  "key9": "4SJ667wUbfCnqUoPtSVqmLbU3d2c9gNcEwpnSMswFjPJPBRMgzYNCGeyHHoUEyBGGhhhrnW7T8riEg4U3VPofrh8",
  "key10": "2QAs2J6AUxnKHLYrgjfgL4XzQRWLJTPPPrpAgUATGJg9dEJNPNGwPNpAgR4EDLFW1vThEDRaF5v1DPoW6QRtWizU",
  "key11": "4iHP85UK2ykBBAbYscFVBhF6F6THiRCrGvcAgGrPC6EbSZqKyBzhTYjZaSP3uyDwE6EyqDM3EHiM3B5n8Q2eALpG",
  "key12": "55kmtiWZrtvht4d6NUXgKzYvn3VvvHVpr9BxNYY94qhzEnC4gPegdRNn9LGoxaXu6ntfjirA1TTMKPDQKEkUj3CA",
  "key13": "33nSrcWXm5rZEa3Cekdu9ebn6UTYd4nbAE2UXS1dGASSLzPP3DRfYHHwykT9FNuaMWBERS8H7yyvGixvQq3kQAKe",
  "key14": "4xYq1CMuUrHhYRVGGrduvntquux1VJPtuKQPVCwrnYdR7Z13K5eHYQE1o6Wx4DwejncK2tKbXxggvSaK9sS48RhN",
  "key15": "4VaS69X6uWrRPM9xqYFTCumzBAQ2tf1DFD1joEYuUBTx6josbMekg4v3C4Zt7MAoA8vNQsZABTBVLiMm6xojxKB4",
  "key16": "2MbX4ToZmWvw66gqPNcYWXbtWpWjtyEhxdkLRQN3r9AfnRbxoLP32MWqks1mpFnCEWqdZdDMu3aNt6gGwDuG1zDZ",
  "key17": "4sjb3u6LTkZ9jeth4dcKqfoi7FeyojjZatYaMB6zCzciHETaVtQh4KryKHKSccwzBCh8vgwEaknwLohQntL7GKRN",
  "key18": "5iWUh2zd2EkmKwtm12xcKcChUth1CrsYWybbRpyRK2ZywVPxT9KWDLn8nRk6od1zFSaQq7VPfyZfAd6FPRxMSwBJ",
  "key19": "5XeJNFqzEGmLqa3BZRr5N8XvDBpzuHg89XUtNYVgSCsam57C2bpBU3FiwMgWPZCC68SjcTCbDFAhAvvhBqMTF1Gs",
  "key20": "3AnGsJ2Lrc28gHprch1LCj9VnAgbJRahpc4BQSLTXgRQuvnwP9dPh3ZJxD8QrZdhK66JXK9bVJyjSDJFyJQjPZEv",
  "key21": "HiwbBpk1GtiTuVfrGi2u5eAexP8AXo8UVFm3GE5wAXjquyDzxh5YUUgma3vv7SVjivUbPoF1tyg5yFqG2gnsyz4",
  "key22": "4whrz7WygfkoQD7vWwTvjRyw9624GXrRi9za7SwYv1Jdc2ZGJHcMjgjQaHA6xhatUA84NKdeZSozk1MZGCUbwUmS",
  "key23": "5C2BpdMh3bFPzp3b7L1hzKj6wyeSwfiVLjvkhfApSycbLZ4V74snihV3xYdbaDRyaAekzTP8urKNMFXrtFLN4onL",
  "key24": "xHQqCXePc6Gy5X551UFZzozYt6qhK2zHvTu82JgtQ59WVvUMxWL2YrfCwZRW5PdBt6zm4kHu8C1DVaBREhA4yPL",
  "key25": "5G2hEAmDjLKmcTHFSuLfQL2L2oYUD7B4YVHAC8PsLWHDh4P8uzeBuQ8eXZujD6Xib8sNd3CZfX43RgShcmrArFEx",
  "key26": "v3fDUbXgXBbt9sqmmXUc2fwKJq2wZQuiXopfLJojKE5s1bzGUS8yoc88MM7wmocE3i5ggefMRySYqzjMzuaiQW4",
  "key27": "2dt7EFCsCf38PKdQ35aJNaW4kDAdcj3uvnJR45DvmbqVEpktnvYvj9Ze7dpjVMiwyj4JFVbKdfBqXkBJ8LAc9UPr",
  "key28": "3Wf8DUtVWzbBx5nQu9qPdwBP8XKgdhb2x2AG93LC8U1yQhzF4ZB3yidtxHUbVd27UUUVggRMy6T8dsNKhCuwa765",
  "key29": "57FWy56DYYnSbAKuGdhbLGWX2QgWL1yMuDqbfcCmeF1y8Uos5n6swfV446AwaPcA6MvWM9s2q6PecHHAe3SRGwYj",
  "key30": "5akTzJ1TtQfMkaSsM4jJpADdtZikKSLjzgKdL28N6LDzca3AhFVW7ma7aqnA93qdqgc2EGi9wm7pQRDEFnckSqyZ",
  "key31": "3WTiTgYfAYMt2tJkQh8agUXSrdLm3GiNvdJU7gY8Qyzz2PuWnjYErZ5zAhtijCR2rah2vFw1zdXLgyksBpUgcX2T",
  "key32": "5rzwFfPj8zVYv449GyrMKPqvXNeZPsP5TURQGuMg99MVyqg7FKw2mshnWAtaBURvPeCprozApkgitCTGdf5qEDkF",
  "key33": "4VkhGUHg2wdnn5yRuoWwDEbKwbpWudY358VXy4Z3bpUM433Aptxa2EAfgBZj2b7c9TUv2Fbbh3H7qLcdhMePiqDe",
  "key34": "3PEzJcrXgDdRJSHiVDRzM8kusFQM5meVfS9k6xapaYHKNj4GgGwFe3rkHGXtBvQ7ANebLk7vFmvZYq1qnMpeT5tr",
  "key35": "3kTw76dNMNS2dd9RxRNU6ZLjJSrZbhxCyAYYaqPhyHBxsiHsjfzdGPsJKQWV65Gb8K3LMFEo7gADkkPTbsb7UNpK",
  "key36": "4RpL9YoJ2ibcyMfH3o8XzuAcjkTBozVrrJ22jLKCZbqm9VQeKwu792Gcr41AJ81ueL5uYPKhJx9WBxeKSyjuC72X",
  "key37": "2YeSLcgCFTMVGpa6WeJAttggj821HP4PFHUE7GpwKLYgJkLMvRH8MFNPRDHXnssJHQcGnPvJCyTUJbqQ7vrCC9Ye"
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
