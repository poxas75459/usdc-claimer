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
    "47dYtxbi9wcCZ6adGiFYNLmNF7it344JffJEu9fjYoGu8fRauY9moTJJbgftJSHzQquFj3DDnQFDuPhkTLqEbSt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SYGgYS5zdEXSkCzu5mDaEMzog9kxhGfxqEVpr541mYZaGgSfAr5dK4BKiKD2TMQqg64bB3HZE58fHMzFipccr2t",
  "key1": "5XVi4X3Y3umU5hubDrPXdyA2FWtUVX88g8nLT9zoLdGAp1Y67i4J5dP33ncnFVr3TvWRHKkWHEN6NUUNaTwnJn1a",
  "key2": "5xqh4xt2TJiRjWJras4ZJNMRWyEkGBrycT9oXdAqKHSRidz5TJzPN2Ux9asyXTVsgo9Yua7QbK1H1dtszg9PJh7",
  "key3": "3KtuApUGB5WVF5wc9XTnUWv6vFdfvrJXgY4rVAvZJeysVCRAu8WkW9bNH6NMcLvKPE91fWAvNTDq27RnmPmVKM5P",
  "key4": "2cU7TDPWaaRN9jmw9D7hjZTfKeM4BYXCxCPhskNXjt4urBgEYFBiMuPBim5QTRzMeUPtWhFrph1RZu2jufr67hMZ",
  "key5": "5irdAsCHovqnpokbCA2mx6VRNqVo66h9ZGTVicL1x5ofx2CRF9XNZURq5GZEyoMFqa1tPpsqCkk24YrtjoZjcP3a",
  "key6": "5Jyc5rsoTs8cUZaCqwShYE8cpAy5zw2BL59x7WMM9axEZ5L6Jdi1RYBeAQhigCW8R7L7ePpPk1ubPxEGrzS5EQo7",
  "key7": "5yDzUdcH5whmawJpKmh6odh1dvvDxKsH589M7MNoc9nzdVinHvC74sq7zjVxi7wsSFePwbCEFoxBfMB4m7sLxBVS",
  "key8": "3haiQw5YHkCfKSXciTkbQxRdPxsqsRF4SePveT3ndo9yV1WxSCc2WwC5PM5NTt6kUj7jv9Wr3dGwRA6TRcgSNcHe",
  "key9": "42tnSQfBerEHAizqnyZVZyPg7KaH3LV4n3ABTngSiXeZQDbie2jSqgCBawz96MdiFaZzpaxmgXNei8Z8fVeSbUZG",
  "key10": "3C9oAHPMmp1yejyFmnq7fvBzbNzyY6FarYRP6JXhU8fX3TuKBvbC2uTdqsqGmyLbptYfG8a6grAUfih4W9aJdvaJ",
  "key11": "3H5R8v1S2SKL8Xxk2LuquKNgE52UcC7MtnRPf34gUVsR545TyfxkSNrVDkB4D6CJpxFTZb1czDd5Nd4NELgE4etY",
  "key12": "oiFpcap8hZFiY95LePrKZcm3hb15Yg5Wnhv2besXbZqnpEiNr4VnT7HhsNnfoB4vHNeJvjd3UUPBZdB7yXNGm6f",
  "key13": "5qcfBv1GfzjFTm8K1PBBafYzzDAELEFWukgbYtnJrQBneCf1A8ccNxRMoKc32p7o7TasKGEWuWRREEyXCsUEQA87",
  "key14": "2k6zNppmqA1m1c8mrZJtQ9e4LJgQp9SwFToPUPhWDUEPMJzZH7GCQkN7CYaygZUSiqCMm1guY6g48i2tAch6pNYg",
  "key15": "5kEBN1hLtG8xNvEXEJP5mWLxWK3omrSRKmBK6jmwzaaNfAtYDvsP7exwJqUGHJNKcmVSEEmxR7oCJGiejFiTyaJk",
  "key16": "64MUXSQd75Mh3irHnesK9ffk2gJCu2ctECnBB65KM15nxVeVvRXJkdm3p7eVGJAmx4axcGaUCN2pS8xVBSkwzGMh",
  "key17": "NbMzZkHoMqHeHJowxiF3m24Qf4M1SFv35ApN7QriZS59uhAVzv2BdDUHzjX8iNpjfcwLWpoTTRtYEE7LJYbEknD",
  "key18": "44Won8ZYcmTs5ek3hWwERcx4nGcvW84CAKUbRETrESPph1ec2Fc37mPyyPDDzW5ynJepQBCyGE1aDiwxdt62GsHa",
  "key19": "4JZ54F8uQm3opdY9mwbYx5v2A6Q2kvVN7Drz1RiZYarnZ1yMTVYQqT7CtM5C7CUhQiT4HJqVZRA4gSoTwUJCNBk3",
  "key20": "62pRdjrUxkwzEy7Kf3sFjNEHkm7wLW45fftKHAd8YBGxjsqU7tndsqZa9zqPpD5nBsTgB5p87P8Axp6BhenLaEvo",
  "key21": "3oRuoD5nHbLm4ya9K1aSTDdV4TWbM5Nr4wGfutdNm2ectEiw9GPQRcFGnrRJs34JYiuoU57YwQ28GNQrREtnSgeA",
  "key22": "2E4u9w4J3dcC5XGWSGMhX8cNfMszDLN7rugs2JHjdXFw8J5C9BD6H27VV5wwGbFEyY8NQC2Zp3knZrhxNYS1u8tE",
  "key23": "5X6cQzrb3b2MqGn57y8AR3xt9y6gHKAx2XpaywrERBw2vqgt6vkJ6vSB8ZvNDBm2h4QzCr6ep2dWNpGwFbDGyRbD",
  "key24": "3QJrjEkdebFg88n2nGkaDY61uN1s5epqJiNY9T1LB68oVGBPhjGR4MMxBM3URtavjp7oJcw4asXg5jfo3s3tECGV",
  "key25": "3MH86288nJUWCaNWbks8zGtQKBtNba1qAJ6HVZ3TgjprKhjV835PAfuMzFwuMF74u7wBFWgtLUD9bt8oHX8kC68n",
  "key26": "3ATPHMbZ5PVm16xH7vBZyUiWkH5VzuyQUsrnac4RZaur6F9jsJU6KZvrBFKKKRauEKrCYSrA7JrC5FCDaTY4udFf",
  "key27": "2bVRhBfrAAwuYGHkhK6y4uYxRxhVk18RajiQquvrChcWtfo2qVjagYZsoJtoLaQVT3FT5JfgT52Xnyv5ebm945ke",
  "key28": "2jsuhLAW31gnJpQBhrRe9UCDsVixfjgLfsjgzYFcyR7dFdQWym5MdHB7mCdMHALMUz1ic23nmKEQGBjU46fmNPoV",
  "key29": "5ardcTeqJ4Gzp23ejFEFHqTTKCWHmvk2bxycweuTxXbnwDojcdyUYA8z34brmLaiMoQrQeqsG9Dwa6gVSNJ76855",
  "key30": "4cqDCtnMxBrDtN8rRhjgMcHQcSpsHbeHoerKGRo4HK77Sbad3mwbeQVFUA5uKVcELeUFnZAmbqS1c8pPS7NyyPf2",
  "key31": "VCsnKe73NBkrMuBH9qdzqqrK54m4MbcjrrfVdU3LvxoELhshhCsepdUyB1yoPXo9TmRGyEZem7nAFruz8fvunZr",
  "key32": "3S7BjbPeE57U2gdkrHqFiUqRVmZ9VmdSXqQg7MkjPecq6YUcbnZPjarEhCiriXn5kmFcu673qw6wFzejaYV4FfgA",
  "key33": "2B4e2PVxzHkZDeFJdXVqXrxZ4a96UfprYodWr6VPfCn4MyTGczYKGnUZ3gBjmpW9kUqW46Jk7jBjE1Uc6SUtVt3L",
  "key34": "4CQarv12vyR1XkMTYrXaDbhdueQHGdB49w9Bk1wRa2jMJd6H4WWspjoYMS4pF9hPDjpfrfpDq32QE8sXNVZo7Tsn",
  "key35": "4kYTzxuGBs53pFjEFq11UpsLBHnNcMBq76me2pXpDpxcSwx24aGp4WKKUDsB3idckVTu2LGS7Es2PwHiyX3ENpxU",
  "key36": "2UAQes841tYZkRBgTzhiC6Yf5Q8G1dVNeeuqxmsvRQR9Wmv6qQWqv5u6ER3FFZWGkexZvRXPoEpGdg18CYW3XJhx",
  "key37": "4Y2Z7pd46xn6yxoM1ZxRTa7DPu29M8dYLNnmNQv3eNToxisWurL6krShUukyWFSPhyMjH4UtMmDjwZzKC8YpM4N6",
  "key38": "2aHZhpLNTa9v71v9fd2FcnFeJtXdkUTFMTthpAv5eD2Lc368BV9AatLNrKfxMzu3vWgyhXi4cEn3PmxEAY65JxMU",
  "key39": "3vRkoGyazHSJnEWVp2LT1KLE5tVSXAQbmF1NEr8DHuCu7TnunaSgznwe6oeNjDD8gHF5bQwGU2XFtXWJzPH68P8i",
  "key40": "4NWZqQMkBh4LHXJSGqewAsEMigHxDiBMuooEzVLjNcSLP9HCtdbUoKATpHxb3vm67oaUd4bkzA3sCiaP7HuQBnLY",
  "key41": "5XDgWR3d3coGv7Gkjj8ExsrFk9gwRLjNjTAa5N7Ag2KXbZLvJ51iMbeo58fWctRSxyPxTSAL8tyq6XTwDBvmprtr",
  "key42": "CELE9toxHFgTNQZbZ4vATm3iDmt5BLRrcc8iyP1m3GsjagGEmDWMLhaueZ2i5Qnfd29bGeQZBSQPAir3B4mUbn7",
  "key43": "4kQbHmTYsXdPZKQsoFgNvs3hVynyrNe4evbV2jpJHo18qKzxmzyMCcoZGkisxmHn8YEVxccx2sJ2YMnCwpiMZvP2",
  "key44": "5z6D4VmKubCrUTu4trZxBkDCmT6eYJbejGPBXsv1WjDwpokLHhMRDafqwbB6ghTgokieCUfbWJZsty5pwbcTgjYx"
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
