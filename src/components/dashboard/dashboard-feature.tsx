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
    "4NfDykT4xtEAHHJ3KC1eRigqRmPK6QZprNTPW1dDRq9XiAJRMsLzaGmov1ACkp84K9Xey9NfTkiKc4fVF7y25o6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1y8w3XwCs6eqaNkwz9qRRvWHSmrZoxYQUTFXRXmp9Schvv8aEod16Mm5Mzqopcjg4RE34hobQKCU5HVSRB5s4QF",
  "key1": "2yc3jyhSKtjGScgZ1A335voHrVB7G1QuugktikGbWCBJ9ztJkbg2p9sSgrrpGt3biZuv92cr3p117yzXj2G7jWoe",
  "key2": "36nXAkKMNbMu6zDKcqa3wthSgsHCCqjxevsWE5EqSUUT7Qh8378uagfyxToCBrSGRLejMa5Kg3UDeYThGfyw5LZe",
  "key3": "3NXQTsPprxVz5ptrziX2e6TB9N4ncQPaLdXSa5dZc2DaEDZbCKoBdeqX7ryWqvvxv6ZqWqjBXUYkhAmQvuS4wL6W",
  "key4": "4BrhQHppHEmM7cTNp3W4R2u6k7CCBekPZQE4HEvvn8waxvyQuQsqx2yixUMznWStbPF9UrNp4MKmKsCZxZWZiCeJ",
  "key5": "3GqgHL6ncpHWe8qiJqQD1vHqzLTuQtrC5PRybHyNxDFN672zpmWCigHBdfwvtHsWB6dibZHFTQaVK97NikcbmAX5",
  "key6": "2patQyuizFb3VSLrMJLXW2ygzoAz79mSw7ynRibRWLw6SQFUZVjUVFspfGaFaEh83ictvxKystRUe9wPDsPFnsvS",
  "key7": "swKhWo3GqtyacKZzYjKCendWxJBzb2eJxzaqR5cMgmPaZWyUfz3Wh4wgs79PMnKLxRdpkHbU8bvP2rNNd9UhN2V",
  "key8": "4EJBam7XjdurQZeEhNxLgfVZmVN9hMxDtjSSdExzGq3HJZuYAnqETVkgFzQW8DsoZf4RXffMrq8YK9K49XNcrLw3",
  "key9": "3rdGBLhkQasv5DwT1HFPPssJsnG7sdzAfrdtgmb7CxCkQw16b84ZQTZxeYrQ9LtYVwfpndFeeW7PwTrUTD57Co8o",
  "key10": "5MNVPPN9hMkeHdm4PAtNaQ21gSJ7nbfxx7g82R9HC8m6CchaxurNvX38w1QqZhniEqoDafVN4PR6YUCfnrqPTy2",
  "key11": "2PVzjHXMG7b6uPPR1Wuo871mmUnykCX5uu299qY6TjS3TGfKDESDVzM66kfMX1KS6XXw8tYUBxMpwuiWhHVcq1hz",
  "key12": "5Ncuem9Kx1nyMqr9sJzP3eHd2JEErYrnPv7odcxUeeAxuB9HYV6P3F9WujMjK1wbadcGEiQdLcLr5rVP7uom4Tqe",
  "key13": "44dcTUGg1fbAaMZgY7931W17CBUNn6HUCHsmRNRoEBaGMwNfYL1q1AhXFuDKv5osWwp6YLkNKSFv3kH5PAMPJ3F5",
  "key14": "3e6XbimD2UL95uaMKEA2s1eRGPsCFLWnBWNhSXRbqq61M3zcvbNz4YRVbLjWhdGH1ky8Qk2DHkUvFnupXpTr5sA2",
  "key15": "4eKdFwyR68ibeXj5A6sWt9TXZMJFtkt9ZLwrGaRd4M3wF99V8XSpeTxB3UKSybgfwh6agdtkRaSd9rvgftUnTPJK",
  "key16": "4GRDbZ6c7mhSjs1E3mMn8EygUzjQDYG9eeNm54ahcazEuSHfYUULY9zx4hWi5zBTtHB7CjD4ndfUEXXxRm4ECtUf",
  "key17": "3tgDJaxs6FeeNSMZLubk3F3sdYC2SdvBGoGjWdcuS6wzPi4Rj6WEvBUf8BsChRybUF5CNEjhTp4HuvRRy9iFHz4r",
  "key18": "5tnDEtA728EJM43x5QxEuucsqUAao3kPnw8Fnb4ew42xsmjPqUC614WRLX1SdAcXDd8DowUsk4C9AMBRcfhizZAT",
  "key19": "5rqEHdZa2jcMHEQiConHUyaq8Nzduo2tNdxjvw9RyKk549M3YRS8Bbr7BfRgbonE8bNQ24Z3DdtHaXhSK7PcxTv6",
  "key20": "vhRaaxqtd7GWP21zqZyUFu6zQfjkUb2Ec3jY2nszUmQLjrdVZ978CjFzUtEp7snz422qbsvubkU5HFWRTqESLCu",
  "key21": "5CyRB16eTC4bFRVn3onTBzhgkaeaxaCrLHK1iNuJ4xDK3tEhne2MoDd5SgkZM661Db5Cd7vQjHNHCuhEc7ifgfrw",
  "key22": "BKSdTu9kppUsN5DXai4mxHsbc2hAg6kvn95EJtJoY39HKpYLUC6zxdKYyF96ngubYVjHDtdYZvgTpuE2zoec4TA",
  "key23": "5LCfZeDnRwTHpEUKUuen4g3NMStK3v9XPXvqpgp8qSekHTmNDY3hFB1ZhotRVEcCitiMy5UodZCbiQ1m4WDZg2gb",
  "key24": "3yXfUGEZJDAKA64KTGbf8DKCu6SN5kE5Ncj2fKwXCDxpF7ZbHm17agE23GAN877Ea1VVUDvCH5DnzueEifoGqVA6",
  "key25": "2UnDfwwx1AQJCVvjn4MGMP7tMVxKGWneGzV5D1LTyRrYxRB37TiTMY6HorheYqvBBUthQwhs5mrA78mxyTCpiffh",
  "key26": "rRTh4cisWucEZJ2XhJUM8NuC7umx2RtDEqxtCfa9JkmtEwnRHffn8LHTgkx53u5snE5r8g7iQZp7NB2WhDJMGoL",
  "key27": "2UNUTCr6cf7rzRE7SXDzFQgmawHwnJmuVnYA5NBDhU21XRXJAkCBr1wuXd1jfALmzmwCcJzZDAyPWrMTtyMM6uTi",
  "key28": "3Xw4eyaGeDwDa6wuhPH4nAHzq459J9g3msf2UXpdD1h3VwfDu6X7EUAahZRpBZ3CAq69kV7mx5r1iGarNhK4pLic",
  "key29": "3wUTU1oEeB24jzH2ea8csuxwAnYxMMSh1S2MhUkT58a4ZCGiUs9yipHdbRKVzhzaKvmfcvqFVq9BXvjAaegtP2qi",
  "key30": "3ueXT4rJhjf8Cv9y5YEjuy6Rcox8DaP1L8DB6HM5MNFVTreSQxymJyMAZErREE1ferGf2YaJpVfykfmmA8AM8st7",
  "key31": "5oJdKbW9BrMsX8Bm92JsbccQAfJUGRf5TMigkKdx3nJMycDpdvwRYxoALvmuaQePJtJ4689emdSKzj1guoW3pJ4L",
  "key32": "djsUnfUdzTf1h49M6XZ3LyP8kVMRv1RH5u1px9HF7958agERnrqYhv2hjvhEUbf5WcCnsFitAnfdastntGMtxqz",
  "key33": "26guXPQwZkkqkHn29ywW6Zx7vCeedbC6FFX1D5epAWYaGd4iaQWPg1CynSJkrPPNBSfjzYCV9F9gFSeF9gYCku4s",
  "key34": "3phhMey9HaWikMoBYaAgybzp2mbeZ8T1G7yyHuvPghN4SF7YSJP87E7murA8x2Z1wbPvpn3BBdBZG1PmahutePig",
  "key35": "hS2oLuGsDMpmmUU6x1kKtygRBiKg1KBW2poZWwk8BD5Arpky8ccXm1UGL5KMra7wDUADXXXmGa27AgtQb2Sb7Wy",
  "key36": "5CMLSxAdDo8QFxd9rjahmx8sQhscShF5Y1iaNKokM44akMgjiBLRPCjUh3XMc3ykG9Bz3RSefnCXkmW4skPQ6nvH",
  "key37": "45NUkJhDoDk8HCC78SuhXMaXNHWwV69da6u42R162AS8PFvYAUw1aBgjNVozJDPpTj8pXHJd7eM3CmeeoVf3bog3",
  "key38": "ftaXeDrVCLLvwoo4yvJMC82c9nZsjEn3wh2vRb1WHJyJUNbfFcJjazWxWMRCzLVVu3vf8o4aVdX4kA1uiTCmwJk",
  "key39": "3Ren9CrRVjabTUqt4EWrTJH4ifReBdLy4WTFzTxdJgDaKHZbjg7jJetnsmHLWhXtHnTcyW4AiJdMfNYikaiuRSy5",
  "key40": "nHaM4Z9xRFJifDgcxi6VVyjs67TrYBv3DokRpEoT1yhBCcxGG5HZvei1YoZTsYS3CRf4PGuZ1osefdBsm7y6C7g",
  "key41": "2mp82ZesZETHCjDm5FnQdmmb3TVmvaeBNrqAiTMXuCyrx148Z3CUgrqQ7Bffkn9ta7ikGbd4rt76Czp78RihS3qk",
  "key42": "4K2Y4FncFaqUf1AjFbKy2rc2o5Z5YrNENYB9QtX1b7wYxr6MZRD6f1iH4EwfJbqATyz8yt98T1tQfXyvQcAVtycJ",
  "key43": "3yjcAd7Zo8wUQwASnjc7mM6Bo9R1qNRzYgE97CYHFWa8Hrp4aoYcVZmpGKv5pEcjtEoxTrhgwedJZvPX76P95Nrx",
  "key44": "45oXiZTsfZdeGfy16sxUKg2CUNShfz4gNg4tZx9mDAUUnDJe2nGYKnwuUYy8XttPTTu4YF6GfgddvfsrW3HVehug",
  "key45": "3xynFEA58KvHGAg4XDLYMX59CZAdjMnMV8MgHATKexGyqeVGw7e8DDyeG5oJVtvipUywCR5E3BxC3RrpvVR875Qa",
  "key46": "55GYTdaGn9gR5igt7CACCevidqKgssmu1cKnsrBAcLyTEfsivfzfksX7Q93TU8DDjmSNjWgwoFXqeE4RhXxdQB7n",
  "key47": "3d7v7ZMYgiz627PSN2ZD5iuxePBALtnviHGBuWw1wZPFXAJ8ybi5FAnvQjGFqJkLLPK3Ak3D4pZoArD7LDrAqmhu"
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
