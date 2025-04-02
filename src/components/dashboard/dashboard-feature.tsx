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
    "4fKhhwb88MsYxpSch92ihYRTpBbs9fEXMxKJYFJ44sunT246yQXueVJrMSn5GCPJxmDakGKxwjxLnc4Cek9nLqQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gZPuxqNFpTBAbZNxuUyRvhaEDArK27h51Gi3KWrh54yeMhgva7kzvx4ASMfiJS7UEbfY2EVUtk6kRZCRdXeWsNr",
  "key1": "5rAmBT8hPztkwY9VGmtgLUUYzUXt5fbmmjMBC58X5tNAimguYGvvhEvSoC6TfskHyKmctjwYCuALJzYHZKpfwrX6",
  "key2": "4tNKApAxq6jczpFjAYQfQXxsVDUX3Qmf7hJVymdan8Dy9vJzT96ExNDowfjBXV7NBG8jwBtdfHjh5d4iMn63cH31",
  "key3": "2fbzZs9FvMHCL4jX4yCgmPu9dMv6woN3yeXMBFii6SrKPPFNrR97QskDrZLYo19JBfs52qEZJweGguJ19PBFcmA7",
  "key4": "3u5ng7dPNtiR1MERQ4zPBZ3xb3ENyF2Yk4V53n8QEjL7inSS6B325cDcqV7dJ1rDNmeqzptAdc9V9SdWntPrgKU2",
  "key5": "4Hof4xg7Wfwk7H9jHLGDn6tJe51Tg5jtt1F5rVbgB7F1B6yC1BtfjxkzKDyAVwmn7V8KhFD5ytSbdofTwhQPgZRp",
  "key6": "jvqLHDKZPtfVUX9CJ1io8aYtQRw2trzs2UY2T4zQhcW1FrHBQGbM98MosLHMhuPUZryPSCEPasixuZ7tFQh32w5",
  "key7": "5qFC9zek9rWLmx7KZkRNknowTeYBtMtqSXoWLSY1SFCvcyf21msjLqk3EPp61Mxrcad88nTDW6PxjWpmWRHJ6iHX",
  "key8": "6Ppd1dEwHbVZ6VMLBVGzHhSTqDsy3LtxZ1mBmLzJGdYSTJ4yAvhpAr33yCoov3rLGuUfxkZfeGaxyCqV9dnySin",
  "key9": "WDo14JVE15DzPXddeYMeAwVtV2PJnoKu1hjWc5azcLEWCRv2sDuUkMEm1AC4TAonitaeEZQNESdXDuhevSE39ud",
  "key10": "aZNza5qwEzRmXu3wvU7LGE22Wd1WQd219FuLGQwW43XuWtg9PbjyKZtaPVBSLyrYh9W7jp6ZjUXGBPLCjPKUzDS",
  "key11": "3YjJQiNeB7C5UFFVeUFRpG8MqhMFHsWYGDeukp1nfyGtghHKsyDahKrkkH2Bj49Xi6dsgM7ZSgyNptZC2zTwofvF",
  "key12": "2auHC9qpTX12yNKDGBY68nVVoggHckcTWhqbbN2HESriS1ASDGLwGxjRUg3BbDwN6h9CqGXfQh1dHtBEa5cZwi9W",
  "key13": "3UfPiXmPEAq56bk7F5upYKfQ5Yav9SeuF8Barb5zc7Cpg7Zob2fSEgAWHRxbsVCmnAb9BRJA1Yd8cZ275cUv1pQg",
  "key14": "2vsenGA9ddVniQ3UTHQfTfh8Sz66icsubBLDufSQUTtDMWqtbkBKYMVQFV93Rpesajw8gfsC1HqtL21oRwsbEZyH",
  "key15": "cazZvdJHQ5oVMc1M7MnVMeYJMG4H6cMMgCAAQ2pq5kcVDmXaruKSZHPJZN3KECS6Nij4nQp5daDxHRBKZJkXEhG",
  "key16": "2jVJQetvfzrmQWoEnkPhNjKg7YsvMkQYodyiH1ZwNJVhKeGNfFFbm1nuV1cVvhVK5cvTB6iyBZH64zUvmAAaqgAZ",
  "key17": "3zdRqmhCc7bgytfPeAbgJLKFcrS7v5yrc9MViDVAd6Vh97q6ycksy2z5DLLfq1WB5gJ8b7SZPEHNsVq53BK7CJQu",
  "key18": "4dDkxymkCtLJokdcn3A2iLRvrYxZgux7Cj48cpWFcaysEnDdYkVc2jgiJ2WFYf6gsGh2S1Tzbbe7yJsQf2HFJEod",
  "key19": "5y7XnXrg7SVx1Jo3nqph4U1YmrQF4VGxH2La2McSA1RpvNVjKiJtcneMGLpPm5MV2JdW5gLFLm161B7ggu1B6bVF",
  "key20": "5WEyDtbH9UGzoUB9EkmUPrmvTe6HogQYBnV38edXZmCA476Ztt9uc9Vh7WCY2nvYX6v3raMTuEvp98butAdzNhtS",
  "key21": "5RsdBSPXeR42nZTeNqAZWF9demHniknSmYG5kvaAEVLwU41e6PNFERPsNDThbBFSHFwGrZkTc9HcGyQoKLyAZKzN",
  "key22": "F6uoaduUbNq4rMVzF981SiX1ZunT6bdfNSsstJf8quphvnyU2uKUsvAnrUNdfJyfRFhAkoWPrRXMGkrXf29ZRdp",
  "key23": "fvWm4rvfrGhTZTY4G8CT8ZQt4cpeqTa9JSyLfyuwg1TgRmqPNHAxK1AAqXCWd5csQLTQXSPEkAp3RotJfK2Wnsi",
  "key24": "5UP2XuBeBbpYN44WAw9e5Yb7ejuwXbB2gLsc7AfHo7nfEgCEtUk725gdmhYwaHJsUndec3MQMabVuaePr6QuEPcQ",
  "key25": "2z5AwKWmeTBTC9Y2grFjBRnH2XnZZzzy51KWMHDQZKNswNxrL1mHq3nHP2EPtB5L7scctnQ1k19nEjcA4pcd8evo",
  "key26": "41AmxJRmBSaSaijHGdBXiizTjwD4Fo5ZY5Kx55gGHTsxvcSWmM1BKbEtjpqoqQri9SaEhFmA8Amo2M2GvACjB66u",
  "key27": "5buNz4hEcjdC8peh67gsNuxmXTUCTqXb783RMxgdibwDWFKaQQCiNrrMgvQG4PstnhgSfinQjYsHkiuf5oYwQaT6",
  "key28": "5NaXrzH768wFfgoyLDbYbcTnFqBEJMLMg4ZLeYcLvbbtide9CsqxgzJRYbGiAnhW5yDqDWc6ePYDt3dc1ZyVxYdz",
  "key29": "5rEvBS1U6fRnc7cgnGKwiMyGog7MM29mamPkRwshmTsEjAmjtY6heQm2sxktBFtnL3xEaoQ4LM8LFokMerzv8eec",
  "key30": "3enuxzjeJMSq2v5Zvgt3VMqyRfc6ycxi5XDKLaUwR1SDctxkKAeBgQiHGRmkPxvUctk4LkvoMzeGUvunBWH8c8pp",
  "key31": "TBSDKzHAj93xsbyjfsgSCbdieZAtJh78GH3keWcb1ZeG696MAnj3Azvm1Y6C213UqZ4tzdiyAvgua3tX6FTH3sf",
  "key32": "35XnHm3URAHXjA45Dy7M4Um9pQ82jZgCyRV6NBWz6h3FnGvkupjhfce96Qm4V9bb1jWWHSrvr2Ht8j91nPTgcjN",
  "key33": "4AwMFwm9eHk4HqyJCPvb5gSdRWK3CFAHwzs45tRFmVxE7LCPPcLRNfYNm3on1cwtyEFJpdWirTEz9JpvbGdD5a7t",
  "key34": "4opjmuu1t57RCdwfafU5dQsqF3U5cMck2KxV5iQfkr3YpUBxrufr6NmEon7Yq9NrYcdLnMKD3EcHc9tUWFHqVGgU",
  "key35": "CZGpdknT1Lc3LaGxsFArGuPELeYST5pzsZZMV2qYdAej3cvhgUpLvDmAU1ZEvfVcJgUNQpzxKvSVxnxUoD2ece1",
  "key36": "4ox2h4xrTSQmJ7tFz4q2He1p4NPJt7k7VCTuLnwvqncGxJenXueic5r31pepEnQUf8jisBpncauuTFYb68wpQoA2",
  "key37": "oLaAGMJXy4UpVQsxnmMhUctXp5u1ZmArekXsLfo4ru3z38nEVVEuyaPENV5TFQBBWJX655jmdzwpD2Y972YGJRk",
  "key38": "4Arz99NkdqXpdcerD9q8svTepwAWyzDdT8vNZZn31YPq2X1juDw8CwV7JeoZ8BGM5cCEeuNhzo7iqx2W5CmJYKT1",
  "key39": "4gZmEnH94iTNTToFz85sPjKuARNt4vDLQRNdRJKhUDxavP5kd58y7RHgcrm547GGBT1m8eopgLPwF5rvKZGRQuXs",
  "key40": "3drcP4i794NhVr9ZWakPoHCTpFDEQuWkDAVnSSX7aJi9NraePrSxtRJ98HUcQCmMpKZHnS7e529qfdviAmRHtisp",
  "key41": "5ZMdAxDeFDRY94dSo4zdBvKpS3X4xSTD8m2jDvuV7g8b9fn6EKNW6VatCnjGb1KFuNN5xyPihuxUghbuJXziqU73"
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
