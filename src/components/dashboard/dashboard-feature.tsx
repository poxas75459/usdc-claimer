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
    "4ktP5pgwF41R4RimmuFZF1Mc8tN6rKrKmVsnZqVcbp7TDusqSHTNpBp7Gqmx4bWFQ8FLNfrCTAYbCoDsPrUEZooM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aAn1KHLiNhdjsSBZVoWYkNER2MAF98nr8ugKXctcykXUgNww36QY3CQ4MYoHVfQKEfoiAnh8kcgqz6wedEX4rKY",
  "key1": "5vohcCvFTe5jYqFF6tzZC1w3ZbaHkH9fRcSxBrhbKG2HzKEdYgd4S3qYsAEczDxcphjWajpQgMDCbv1UAASoAPiy",
  "key2": "5TWWeFKtR6bU36sLzTE1MU9Lht4jCa5G6VG9keiaZTRrU1XRhrNE9byAZCNQ2GVsgsUqPx9366pumATZYLpbFgu",
  "key3": "2juD6gzSGsnHNpbmcrnVrZcL3vnNXAj4yaY2t4B36sSxFVTL9LEAivqGna1pircvmznWysk6cr8sEquQU9giR3Ug",
  "key4": "5myrRQocm7ELvabknHzok6zsDquP6qL7iF8CMZsH2qkDWZT3Vf7i83EaWg3s47RqzQiiktzocE66AfK99dbTr9zZ",
  "key5": "3wBMcxCWc3tCG3FJ6Ky3QjKJNGgw3Qeob2Neeu6yPnpcSaj4YkeeZDbV4Ww7jSVg9xSBBkqsapBgLS4NkpRbUWNe",
  "key6": "96zkAs49PzMbgR4FqmjigynSSJiD2wjpznNdMHyRRM8by3REjnnsJuWaUg5jHNf79EzqVMrVc8myRdXbZQJpD7U",
  "key7": "23kRziy6Wpo8RVnP2kYBPCigVPWqGSqXzcHtkCQWrMFvDfuntxgMDY9stZFNh1gfPt4ecKoTSCUaAHj5pf5bHSKY",
  "key8": "4v2kxNtZuNRZZvCUz9wa8JEo1D69ZYMGEBwVSqGMLYranMErGCaCRzfAq57TFRitwvVgsMNsUcQqtoT61t6bhmVv",
  "key9": "dCj6QFSe4F5Akq8biHweVWHkQRjDGpx2rNUTwaVRJBLTxTTxEqFYiqzfzDwLWXVd9JS3ifHjVHLVdveg6uAcyuU",
  "key10": "4myws6hcbkN561P7WuCwqjzyC452Pnm4EA4TXgLewwn2A4Nt9tztPYmd82qW7gWNcqxjm3HGXXWQdnUArQDPZyjc",
  "key11": "5ozHiqv3c6s49LYGCMZTUtDR8kYSDQideD46KbCVPvVwRfZFXQU43qJG3dHumZoFoXe6bCmQ5A7provyEH5xpnQp",
  "key12": "3T7vk9qfHNBScyvvNfXHHaQXFd4fQ64h2EE5G9NeEub76u9rsHAxrNfJQYrqfHmdzopvx7fyfYp1TU7e3TYqhpB4",
  "key13": "2CGYs1PFU9SN9wrCt5TAhr9eu2C3i2nk3u2xxnM2a5UXHP7buyepBJd7GwpxiB8oVRagSR4ktgvhxWSvo9n9fXP5",
  "key14": "2HkvtkYbsH9NzZUqhWV74Rnn7e4fh6PsdtpTVnHvfsesb2LARyasLYYGdHFyoSNF5mhz37CQvdjFQnAK4thwr9Tf",
  "key15": "3K3S1DouztFco1a5WXrpmKamcvdGimReBNsXEfbQPQezgvYvgixnU7KA2m1o8V1dy7nGDK6GRJBQbmdAszydjD68",
  "key16": "4Fbf9g2LQ826R9YG63MPsiApbygQm9KDusj66gLt1Fia1U5YH5DvjtqYi7mL9zQxfABdfSDri9ReHDEsuzFU6cKG",
  "key17": "bbVeDipbPK7Eo6hkSr1HQZfSNm8t5HXJXhjw1bRUSYF6ecAHtdmADLVaUJ579TyKRSa9sWVbwmGqkQM27BJsf1Q",
  "key18": "523W6yFF25DhQve3aACDRPJpQr5SZVcVvXzMJHzsrR9TgrGpXYLq8JLrxPTimxuWdecNKyhXH2h5WeigoA4PqowH",
  "key19": "47SyXxPtHSKUgdKun2V44fqcS4EpC7CzRYocvTXNZp23EUyuKeuPMnscuKRMxE777KFsZ953xtZ9CxWdsdE5TTCj",
  "key20": "FH5ymoZjiuYoeEFyy4E45yETcRMrBxS91Kri5f8xYdX5mPKXJ5tBGSRbeeYFo5bZuf2jAQGHQcnWoQCSMnhwemX",
  "key21": "3QqGgoTWpnrXEwHrE8fATYLpMHy3Q1tsfQ6EhqmCLQLQLFE2yVHWi4KdCYYnYB7p6WVMETfyVQGancMjP7wJ6SGz",
  "key22": "57Z1dJEWWEQDspDzYn9uqPD7SXjZbuJWWCU73QZjm6MHoTvkANyFD5UnVGZEmt9ikSaTrYBthrEbJdr19jcbzRks",
  "key23": "5bK8XrZM1FPqdJbZ9XwX5DNNfGLKFwmzDLv8BRDy9eSGKzvnRJBxgmmmAeSqThNuumg3djZvtsQcih6B85M9RuMF",
  "key24": "3QA7ryN48Yg3Um9KRir98u9fgrCuqbBva9h9TiCs5HtdbdvSBhUYBiwc7pJ91UDZDDoV9FYZ9PDLswcNkg6XHsH4",
  "key25": "ttdm45Q2kpzeTioswDPGY8Y4jFqX3pZ64vxap6tWHHFq83ZiNnjbuHcVxR39fnBdMPSNbPD1SBo9mNDH8fFgqnX",
  "key26": "4aiLCHzdREyqJ2VATUGVYfzdSQWLQ1zeU39mfJaYA3jEaU2DyEqDKePb2RWgnfwyNRBP3eeaVZfniMcioN4pq6CT",
  "key27": "AdVCETC5M9YTzhjg69DgBQ8w3av2Td9gMr4Ju1gNSFyURPy6L6VYiTsHAQh4Eq37Zo24B6Prx1G3XVej9Chi3CY",
  "key28": "4vxkYzdVJdB7esYohKJagnaNGLywpgm9B8QcqEK3unX6MmGDTuCmbUoYwRgiXu8zbvUMgtgdWbgdgLosdBDutZ44",
  "key29": "sbLnTKLyYdHoV3hUrEj6TpWJzL5ts6oTExNroEJNSW4tbDxWGTzW74jeZYwyCeWAKYgNrf24H7ZxwW4vvivoEW9",
  "key30": "Vx4bqzKa531WQsZyhSA2nFikLRaknfssKeP15pbAVTGToVQKf4kFSkyGcN4gJTWDD3HHRHR8t4Htb7NaoesEYzg",
  "key31": "39S4CxKjC3c8FrmHz1BKkLtYfd4KThbRNB1RF12tjhqN6ztUWjtzfmDjfbu3MfXbevJdtHX2oUHu8TpWJu22gYBE",
  "key32": "QGS1bhGPCuzxADYffDbxnBDnhpEFRHMmTPFRxh6i9yXYYhsAMeq2BRcZqjx7Unr9BmtnorM7p55KufgYCP3gLCr",
  "key33": "3BT4LQdw414xjaSU93r6hADUWnAcpqoxroVLjoDkeaWw29WEeqrmrAqUsm2cRgvSeVjpkkCimutFguk8yBodXKP1",
  "key34": "398BqtWxLNbiapwV11gkhMpAFqzNVrMuyxzxxgeKJNmD2MWhQ1LyWSU9wVtSadCWNzSmyUEkqRSLGpvX9t91bRm4",
  "key35": "49DoMc1PNRygqUdShsfCCWDPvyeq5qHQVRHMZH8yxw2VWMrLcEeEBkeutuDmCT5zHyiQrDveMxhBKa8f6xr5zMsM",
  "key36": "5aQBp2pU5tSUYSdZxc7SWQu5rL5Q1zYDAn77SCzsUdXrdcABrSf2m7V9L346Yxed19tQJjerFKwfeLcPpsGrSkx2",
  "key37": "4MQxhnHo1TWu7QMpFnyGrR6DEscPmLsosuy4sktqz4iArH5JuxkaG6LzzTy87QTG1ACYhRc9rTs7uK4PSbsg1NMH",
  "key38": "2P2pmTH5o7MH6MNt6Vi3WHDJtkAUAvqvafnA538bEacBrenDg1aCyz16jSFnFxtiWXE7ESBYX7TRp9r3wfJyPkTj",
  "key39": "5bK98oueyVUEDT3cjWvy7jADb4sLmRZnayu4qrij2yCL52ZFpSPn3eYTfjZAX1wH4DTX3UDdPvz755rGtCt7c64D",
  "key40": "3bq8gNduxzem1zFDdGgCCnLipRw4VznoJtpt6gShfwrHYX8wuhJrZXU5gFoMzsC9WeFoHng2CmMF3yKsNoftQkWd",
  "key41": "Nn2LHhJ14D3G9S8moT1NeT2JF3BHp4yjtcHGn1RPvNFnWU5jhEfBZrtekgonEJBLD9dHo7jmweZAzDpF7Mxhusd"
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
