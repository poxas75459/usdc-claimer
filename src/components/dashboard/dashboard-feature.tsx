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
    "3sQb8ksazJb6NwPgjz7Xek5EJNdEJtyFvWaB7DDV9ahYiYKgSQ5wHKZkkmz17iSDdhPFomNdi9t8552r4GQrT2Lf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M7HVCVVtfmVxEuJ6PLKmD6CGKfD3oGeensUmQWJx5HCAmRPUGRR7p8NziiDAtX6WqwHc3ddhgWn5WeEcMZmv7LW",
  "key1": "5nzV3MBuvVMuNf6Tock6MMteqiy6w31bY51rQxv743r2kih5f6EVRiiCuQ5JeKs7KG7757FFx7KqKxrgteLLcjBT",
  "key2": "5XRoZkKwzvfd2stvnxrqxCwYEVpFmFNRka2bdCSAj26XgGaDJDVzxUp4RwCwSAet18eqWLAAktiw3pNumWfSjcBf",
  "key3": "5yw4uwecwzFacZDFaXchVR7df6HPAkq1RMc8cZf62vMX6G8sczu3bLG87REzMnee8tGX9GDv4nsMUAgrH1qdHfB6",
  "key4": "PxGxwBScpq8EnkTTpeJB29RJfqDYhNyPrQC23VCSA1kbmM9yLZRJCmcxoCUqKkY8vCRDuFNMsbHsLRSzWj7TMgi",
  "key5": "2MTJdKkDzXdJPZnVb6dLN5gKsMk9DGbGad3q5DCKqvVuJAgMhJWBTZrHvGsX7mXvsgbq1FKTMnZ7pn5kdp8FAuei",
  "key6": "kvdGuCSH8skDwkYo5fCaZh3LWfoC2q1WgqYL4WtJ5FRzug9Zn9jScWqSa8kNYGZcg8W8nRuUN4oq3GizDUVDwGL",
  "key7": "5TSW9XFKUemrWGaKHWA3FoFWmoMHq6yWYjYdxYBL6YBPKNYSgb58xeaoXj4knxxWVRKnvAsHFjPkYKH8v8NbNFDW",
  "key8": "52e3ZXdbCNouqesi8WuRA7HhcKSeHXR4oZpbTos8NCuPMzZv3dMoDzdZnrDFAccyWRgJBzu9iZp82pfrjJ4KL7pb",
  "key9": "ow6E58qAVnBmJFihD4FGSEtY1eXnVbM5cHfvSFJpJeb1xnciEfUr3xJ7SX9GfoR2rYXGf9njHpiKSWVtHLdoJx1",
  "key10": "2cVnLXPeVTQFsVfrDm9rX439SkUs3orPHRChpQyiEf9LTDqRA89bkv8JVgnvJtGgbnG3cNYvNJJmjHCau2GWERi7",
  "key11": "61hjp1jrNXLs346AuLD6mDxmdmj9CTfN37gMU4KyG7MF14y7qcXsUmR51Dhi1keak25PNtEgRFx73isgvMApHoUL",
  "key12": "3qSqDSKTmgwZiChSH2tqSdDDQdNZwh9tBEoDvzpjBJhjRmRghzidDQ9GdKcz6Zxzo1TjeFdx7i5sTd2EJvCr2Z8P",
  "key13": "3XfiEQRPBQSNpVS8KfyAmdKbzE2A4bGtT6AXkqVCDhKCBRgL9RqF9pQDxMtjxw9f5t75KSi1vfaEEjybqv7qAaGG",
  "key14": "4voKFuUPzQeqeDtEYa5qFGpvVAD1fLnZ7UYf8oDggkwbC8srtcSfLTow5DPGNPws8i8P4CwAjfGgBkVGia7HQg4j",
  "key15": "4ecBF18SPpeSfEmcQy7uZMrv14SEdUQvYtcNimG4L5s5L6QJ4Q8edF22Ke4dLJJkBPuZpJzTQTsNcy7Qrcfdij9Y",
  "key16": "4DjdQTpDP5Dpd1fkEzDkZJDscSzt4YD4FqEejjb1xHxHhUYjXxWazLampag7q4Ry9cEM2AYaTtkiPwPuCRg8tv3u",
  "key17": "5t4LG3XtM1RgCYcpgMfDRYrLZ3ap3xa9DfGHQNYnsG9J7zdutXRQn4hTszX6547WjBQquoDabQxhf1DQUnkeXAfg",
  "key18": "5CG9Wgo5wd6psB6w94qUrdM3uoBVnL7uNNwCVpLCNme33BQcLd5kft2xRfrk27NP6KZz3MnLTK4usEzutBNfb44M",
  "key19": "2Bje79jkGX71daz25piMkYb83CbPjyeD4PWDBKuzoRvqxz5ZJfxvuZLxGwdiU8sh9TVMYJCAQhKdYL3gskFqM2Va",
  "key20": "2aPdq99MBwqStX6yUCSV1MNXMyoY9NDP4NvEDLEj58oGqyxjCWyxDRN7DWMg13W3SMNaTVboG7HVfRPqJUoNfDAu",
  "key21": "3Gy6xukdqtKJDDSGkY6AAH27FaEhAT2VwovHjz99XBsc9huc5bpi1CYVKEST8omR2cbYb1mg5wYUEVBoXiuVniQP",
  "key22": "6YUEHSE4Rp624KQyLcXT7v9ik7ehCvm4qktygyrrqCWwDvuYQ8UweQcDdQs9BiNaghj5m4ktu7DmsvBRmSuBKEg",
  "key23": "4hPq4Cv5NPdAJFcQQ1bv6mPjwWx5dPDBVkCCabGTpbFgs8vsjNcHwp3TdBdc6MpxnHSNA4SuETNa5YUtabAtU5Jh",
  "key24": "3fSkH1gWQZMVqkG8cETo3jYKpx9SPfaFzfmWBxUXAAygmXJvdiDJKiHiS7JCcDHbi2Z7Stkj59V9Lo6kzjon6Zp7",
  "key25": "3GpUNhaDzgH2bQGV7CgesV4nDWPKnYLy2Ziusq67y7N5Kdq4Z44KMR2GhSA63jVpNYNtg98WW214j48ayNF8dMrP",
  "key26": "JBoVfpdfJ8m95zBo4tVZHerUCSFCQrGZ8kqsrMDEZiV3hwKqFFb5FSzxTi6gGkCGNTvjRg9nbwv7ZtUXaiiSPd7",
  "key27": "Z9vShofv1vDtWkZ4EYzHbJbsgzAnWHwHMnSMZoRWrr5ysmAXDyYGHQXvTKMarcLb56WPwEduYy1GbjcYPrgGvWZ",
  "key28": "4PugmrHLk69NfMF7JXubeHiWzTHSCxRZ7FL8GFC88McX9162FYTAxZZiZhN5i84UXHtyp787KvkYfa6GPVP4dfCH",
  "key29": "4vKoqSGrngDQLmKRMguG3qKUSzmoqhUy5Npz2gzBotahraf7q5T6zPAw95nQCw1E9EVoTfwn6CKkgwBfgrDmYsUx",
  "key30": "42Pf1NKoM38uPvKpYDfosnMdsrRsjzvvSAbY3zSCJVboqCgEhLLk9Cx2nUD2QHqruX7AJzpECWdjGzZCaSPd6ckn",
  "key31": "3JfRoR9SQ1ensmfW6UHNa8M11ogaAhmgVZU6Ht6hGCR9WSxForbT569R5opsp1A4XPuz52pMtDx1Snx7ieWEneyK",
  "key32": "3dpBKFn12zapaPfbADVSRfR71cD2WbwDE2Z8KdTrg1M1ztvjN35ZautN9jStHqpyEVtt7drDq88TUcYfmK9LmDjE",
  "key33": "5UpzjYqBvqjSSsgePUDWinJMXdnVH95kfYzcFZRfHteF5pm2ne7ub1HHbYMjXkY88PQgGQ5HHrwEYwFAwP49Y18",
  "key34": "4AACCtHVadsNqwqhQG3ieoWmhmJkLoyvDPAsQxmXvb1bKHnzTLCYX7xcaMrd92W5gZ6RAZbcyodHrK8omhtLBN97",
  "key35": "2HGgaRGMExxqGGeABS35cCdSzhdNqMT9HrEGfyk6LoRBn9auNTL3K92qPy2aUvm7t1f11Xf2w8uWDN6kFVps4EJv",
  "key36": "4nXsB2NX2PfVhT7Rvty5TK6LbHaXwH8AWYocTMcyxcPEUxFXE7jV291Fe2HmXuDTd1i5RSxudUeBZmjKFjHrgSM9",
  "key37": "aMgkx7K7Prm4kLBgc9NB6HP5RH91hfuAYDkEHHHVfBp2VCtr6gTnRVfSy9TfASFwAXCuz4ySiM2c3wSgLtnafbq",
  "key38": "4n5nPaTxMnjY6NdGJDVekbtiQkkgtwqABmGynQYCBZWL8vrdrKXVYgRpRt4nWuE2SZND9RDr9fDztZP73YAUnq3c",
  "key39": "4fxC5nBDaGAEMot8f4toLeBMF8TCjbTtmxf5ZUWiL1hvEdaL2jN128VDDVtoc8gbvzLenH77kwYKfxMXU2R1r38L",
  "key40": "4mNLnTvTEo1RTuuswVqWp55XqmPWxm7WjGXL46Q84LTLwuqJpPJrR2P76qDjYGDSBdbCFcENdtVBQqzoBQsrGw9K",
  "key41": "PRaFzF4Ty3YzqJSMAp3ayhWhVYXoedZEzghTZo25wg4e3XkhbPTJegwdgtZrctDeZJRJFWQRmoTt2JtF2u6GCfG",
  "key42": "2uQHzPcp8vMi5Cv6sKCRVhMVjJ4CqbhePd9H7isWnASsiEea6DYE5d6QmscG53PNj3HL3EmFTJPtrrBwN26c3sbS",
  "key43": "5LUNTT5wirZrmTgnHog1SPpkSpV9s88nxdNnwqc9Un8Ppy9H1s44qgLCwDcvNrsBbpfkVPu6yjFSFLBtkdXbuCwT",
  "key44": "3X6dcoB2tYYnL1hM91YE4d7rhca6Qhr8qDJfx9axqrRBe9LqcdH5rWzzqXiCPRNFsA5KDPb2W5yymxxY1PS6sQ5a"
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
