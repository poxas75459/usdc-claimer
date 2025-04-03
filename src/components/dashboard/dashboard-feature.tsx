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
    "5xbhoXuDnML9dWVBKSZCufVPTFhNcZffvFiVtRc5wdBrkeqkdtTkiimkxh97twYA52zdeRfHNDNX8sUyAzMDGAFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47aGU2nmdKBFvFbRgDAnKvY1fVuJ1BMvvhRm55ZEcrf9wpJbjbbL3t8KCkWVxWp4SH8EifPxeEi149PpT14eQrX7",
  "key1": "3U2h7qqfsXSaKD3W9gFrDgvwKos2KJokLCprbGdNytSFzZot1e5TGb6dR2xCZkV7bqzptwcZtJsfEG9Bs6FiQHFZ",
  "key2": "RfTcAkh4HF7NMmRccWaL4KD7HmFmWe3MR3f9r3Utr5KUHUEEqNUY9epqfMtzJbL6v53jD9RADTtYcxXvNf4QqKz",
  "key3": "pFkjJbKvySjZpuRjkKkadYFt3F6HHv71LB47DU3Y4H3UUxLfMP2PUwKrFrR2Npdn7YUPNiyJxeVoCmBx3wthT8x",
  "key4": "67GV5TagWty72GyXddWpcV4LdvK8zQqFbBvWsnGSmfz7fX69hPMX3SDtwcw4B2yYdjkdNnDZMUqhuQXkMJ11pJWQ",
  "key5": "4GRc6RC4eViEfffyaRiXL7myGaXnfbGDJuYt6ftNwApk8xq5BsJaiNDaj3KNX3NVtGcpD5J25RToQpvDq2TcXxAg",
  "key6": "s4y6yeQQMf3AEJKcZTvVn2MnoyUACHMt98tmxw2eTzsWtZjsRxhnk9r8JpTnaUW9BWW9XsFS7GsRRQZQot9sZ6k",
  "key7": "2ZgCXW3nfLXb2qTrfD26FaZX8F6vtB7Bas5BgDNDjNtjj4Rx5eGkPGPiK7R4ZiYC2rEGd8ZY222K1GvDfyJswUAP",
  "key8": "5fQat2AXdRrhRjmrtiX9saeMG7VFYNSax91x8EKJKBouQr3VcneMPP5smr7jKn72cHJNAPYoUvhvGBa1V7umtJBH",
  "key9": "2VXetcMky9hgDVZgD7zugpQWZJmVfK1Tcev9Hj2dXgSfkjsuENuPANrqFV4SqkJ1SgCj5njMQ5HvsnH3XX1etSSD",
  "key10": "2LaSGWw8e5ARV3XTu5Byw7VPuVgC9UWEumpMF1W5kMHWePa3TiKBZxag1DZv2TAPjVVmeorg42S3fx1UGoCoGuBC",
  "key11": "RsFZaSeJE2tAdHv6SykbyEvyVeX9AmDXW2wgGZyZLgcNX9NJ4vZTSAJZhbcjsZASNEYo8dBkTASQ1Yi3NgXCXTJ",
  "key12": "3Ug3CtnTbuX37hzDY6uBL2FDLAV3owuboNV8ZxwRHWeN5PDEusLLGN2xZyySSEyuMTbfy5sdBK1cKp6YVW9F4Ctk",
  "key13": "fMiawM7w6FXEVC84ZM7ruQYfpFxyKrZtJry3cQQHbb9BgoHt5Mw8LK9ikUY6KarWoanj7ZnbSg3pWQCF5bhDmJX",
  "key14": "rZXaeLu9AXGuw6YG4iaey84GaHoQ8yFihoAcWsVy9tkAtUHqixJGHN8XpW2U8tDVkS6s9Fi9SBcoRBiiywAcHkU",
  "key15": "5gAHevvxL2LLLnY4hgaPe8Fzq7iHC4RDTN62uxD6g9563uHFSYMLZruYznHdxws3AK2YXwDgvN6KDiEeiJTh6Qog",
  "key16": "3vRgQTf6GJggJeCMxPeSQXmkTSUvwDdG3pwFcgHKtfuzMteFEU5JCRuQ2EDsmxY8UmUs6zNAxWepNk7riCo6svYL",
  "key17": "36Fqeg5sibX14Q8H1mDaFU63qzbjkgtVSj786AsvbWWT3wQAC1GnXByQSGPEtW9Aw2npVwfXuZg9vhM3vnq5Hi5u",
  "key18": "s4QZ9wvoJQS4hGMVhfmU7bpgvBJwZwHorSboCAZBVeDMsyWVFFsJVqjy2Y8x8A1y5YT83oyqrZVWXknQ35pqGJk",
  "key19": "4FZYQGbwYYWTxnF2pScubPCy959xAJuFDpUJsXh1Te7bA57b2k8nskwcskhykr8B4hZ5Fdz148986hSQS3aRyGLR",
  "key20": "2TFy2xzRHY83UGmwYhwcHMPdiyh5TKDMPZkLcUF5piBvA6pWTcaoZxB1NHgz8UukjrZnMSdi4vXC9o31KcgPRkdG",
  "key21": "5VmxeEQzkqDc5ZxGQufLHX2E4x1MMQVGh6wwFMzJYk1Ddn2zyEGnQLiUWshhqxNmcrPuFaJz8oH27yV5kzNanEGd",
  "key22": "1D8U8dtnqDycnKNmtb2PUByRJtnYgJBdDzBeQNWhiJ7ZbocvnpXPmHA758DVKDZyeZske2BhdyyDWsqitQN5it7",
  "key23": "3U3RG1GcDvhHsPUvJ3kdkmf74voQeH6TjiHM1z4ehZ5LHWWBm1z5cWXCQjK7kX6RBqBPLB6PqAhgsXe8zriahavc",
  "key24": "23yaUvFC6oAfZ94yFxrtgLgqpdaCwEBuZ5zTWuPK2FDrkXrSzAzhDzeYt4wBDZGw7reLN32bLUngWumCqQCBnxaA",
  "key25": "5zciYagmiJLVUx2E9ZeckDUoXqGM49UtCBwb2YeVAw1B2BZUH78igarLhkxLtk1H91ZARj3WBvtG5LHmhj5g2Wbd",
  "key26": "2wXWYGLjgLZQJCh2n5zgeo2zAsCCY5zfVqKyQYWvasiN2Ucau8mEh58q5QuoSyGvXh2b6oPbZmbTYhcUyDkWhYWo",
  "key27": "2GJL8FfLd2Za2bQVVZdJR384FRoCbxgcgbNc3hfVwHD29CSRWCooxw4o11iDJxjsHSHHrBcHfvqogwxaE4QEk3g",
  "key28": "5zpsueVmgiriTLZKfLMqkWaZBN4Zn6NHaNNEYcPqzZG2oRHJUQVcX6Qro55UWfRcrRyVKbHibUczV7v7nPj4Te73",
  "key29": "3KJw2Zvh9hJ58TLW9saXKr863ZUEpfcQ2wDvceKdzMfR7knQvk6av2iUTAHyntwxjC5zS92dAcekc6kxVZe95dWa",
  "key30": "3jBCNAX1FLL3MBe7wMBjk5EFDEq8mSit3VhbYwhVpAqtCUm7JL32es69dKHS9jU6GjXNLXw6wuVaV3bJpv8hedju",
  "key31": "3prZoba9E5bHbjcKruQfzD7YtAZWhxbmCGhhin6KTKB4V7YVrpMF4yQqPa4iTeBGUA7dLFz9ZE5d5NhxuM5P3meP",
  "key32": "3QyDhKLQSrER4vHdxc1VNpChsbercNJpCFifN2oo213dDK5ngNFVyXPfxdTpAUhC9a6xqBuRJsSMuRPWN5fVuErR",
  "key33": "5PWfQGNs5qoqhXxii988P4rTtJNC9BzttGZArhgF4ehgixUZQBbu7T3SRCuGpt8wkwXHx33czhuhbLEJX9Ci8cf8",
  "key34": "2TijcX69H58HkPHqe2gFFALFytBKAAsPYPEL5Hd6mD26MRZos4dQT5QshqrbSj2KdeDzvP4FXBGZaLeLY94U4BzW",
  "key35": "NQi7gfibtGbp839XU459LKo7JL2Swq8vHM6FU3sxYDLZ26gCgV3gYrVNZUNXgdSz6hT4Rqe2A9yU9cTmWY2jZTq",
  "key36": "3CW8FkpVaz6e5JdAyvPcqfoQ6nG1nKb1EqnkAGqFt69SZZdii8vxiPUJxYMgVbDAkPboeNnZKRieqEmLYNyRi6Pf",
  "key37": "7CProxRACTGohrvpQ8RdXWYXXKQZ93vopoFKsGB7XPcvU8vD39cpTr1zVDGR43g3E5yjRa3PkkDVtnx6MbRBHXM",
  "key38": "2nFsWdk57Bpwi6NtGuzrMd7b9yjwRZksn7LuyCFgWqVKPL8WR5CQ9QCzcPte356mnSJWAYpPVwDKS4z9fNsAKX3N",
  "key39": "7ZhPA9q7wnRtUS6w56vnBfzRs85xoo8DMGRD4M1KVmHav8WvusmPWVzUvsgbQp7zz23FZHd1KcSe3omXFrH8zyH"
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
