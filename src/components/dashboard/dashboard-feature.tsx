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
    "2n6a7wt7JTNEa4zs6G4CpSCh4m1xrb4SePnaqm1ur2thKoLjUgx3rDASxFPCrJCVu7pYmtD7Z4GXmESogPeuvQzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ehLR3FSmMTXPorHsHW7scoaMPJY1KfFbCV3v2Re9PvaYfUX7a8cgSUeoS57VJKxSavVi95n3Hdp5K1LCQVssxW3",
  "key1": "4uMiYr3U6CVFCMVkTBpkUFmczYC2uGuEXbAw7SdJT4R11Ja19CvrWF2wSuPjg5sDtS6bgmNpVDEBfqowwADtUqW6",
  "key2": "4Bkfc6NGy7YgTvfq5FbHH93shJc9LyVQdsqWDTCyj7w6wirTB1EzHVBqv5CMrPSXAyja8L4TtBc5x7Hq4wn76pjw",
  "key3": "4ZQMZtSP6ZhFxfpDLNUg7hKVRU2b4ozmVMzzSr2R5kBJy3Z414qcmDb2WMNvsjskXfC8YcbGnHoNJ6cXmhP89fAF",
  "key4": "5aXEqj4Ss4AWzXRYEwmEJCYv295PaVnhjzBc3a5GfKV5PGBRZhvQKjrZYYnMw5PMhMeFYzxAHzq5jvMA3u7wG371",
  "key5": "4YutKYFumxhGojh4yzqRezDz6Qwsgf7mFqaAyzBjJGhjaWGre926g6WtSu7AcLSX4tH6EuM4bCjTupEmQmudooDK",
  "key6": "36qVD9SXvjQ5mPVx42qWLL4rLLEU8nmUtt7VDizV68ChPbrTf3DxngL2n3puDCdwnL8M455Y7gjbaHkeHtDtThu9",
  "key7": "JwoMGRvqZxqdhNgjE7fAxqU1CbQPSyBTDmPrPW5JetN6N8ETDPZpDL8mHRm4qheWRuuaAVVhmL8tqgBsxCWrNq8",
  "key8": "43RGRrwYsscvm2sVv8fSnbJKecnGbc4p5DHMXMM7D7QPHsX3KzChRX4PBbdSYYcQ8oHQP2UBQUyMoB635krMvJ2U",
  "key9": "p5mRGYCVcmDpVaDZSFmfKRQWiQ7871gfEwP8qwnqaqJhLroPUDNRU9cVPdJxLdnqwgautEa4xT5Uxi4KJKQLqrw",
  "key10": "5QuqCFwvoDSWFSRe8xnnn3NPGNRa2JnJFAgXXY5JeJRRZAPbJ6SzZhCs2oD65gD3ZL5qnB6mSw9GpNDFVEA1gEBC",
  "key11": "2nBse3PMUgU5N9dokzrQesk4ThGPWQ49Cyi5KSc7iLEgPZFGXgRG5R4KGUtpQY877QiYQtuSigV1QPobBDvgDcgv",
  "key12": "44NHHgrXv9PGp5VCdLSwMMJCpYKQmY2vvvjJLZcMNxvMkkfrx7JYMSuEGNniYFWfMD29nV2Qvg5p5qVCFgN58kbH",
  "key13": "45NMkfvSfw32wcPvJo1286mGWritdnW3jgQ7izPY9Pwi1SjrZVw1AhaPr6sEsAuKoZJiqJRj1DWVYiV7VnBoC1sZ",
  "key14": "2quPZzt4fvisQUD7uv2sXqca3QmnYUc5DgzcBf7ypZyzhsfnvfcZDpnwC3H5nDgbAoV1ShPndLq1vFNf26gFyh2B",
  "key15": "2pjGVVsFympzRx7mJpEBfWiZkNVmDwsQN5gYhEyG6vLQWHsanUkxbtGtmZtS86oGTSCHEnWfHzXgFYKqEq3xJXsr",
  "key16": "5VuRTCwzLRABXvTbfsauka43zBAFpADRkgZ3ADUvCifnv4sHUubLcH3F3qACNh6UyyXttcZ6rJWdW3zppaPYBoEj",
  "key17": "5P1GK6ujhRoch1CCPgnnCtKua33uBTHZGduko41vVccPG7JN2N2t4ciqdjepJgqm6BmPWBQuAvNokVyB9iDGnPfU",
  "key18": "3E6t4h4o51hgG5SRYQHzBCCuASrHJR2FozMqCLnJRYRieTAX2DU42srspxTsnHXDCXAWxHxcD65gL98BprnmJ2WT",
  "key19": "3xopnfU68Gq8yt9BYBCqdWo3JMcFSiRNM6yRq8uFrkzY79NLt9KdY3HkKZtmDNPU1Nn95iSeopQhKfQDad9iGTPG",
  "key20": "23LJCKRAQ2tiwxZG6DU63HeYDfRnafPYUBHnHpRxWVXXMRV7xHjdGririZpdpkpLYp6oksUf2rXe8VaFgQ5xxXMt",
  "key21": "5TCEY8y6cXWZ5Wz5JL315DsKsicfjPXb7F76A6wCc9CZMrV3iLHqc9NERNW3hVkkfV6kvdhcDh2n9jN8DWRRPuwe",
  "key22": "5ypKnVijb26rFGoYyb4FQtt8MAivuBhmgHdNKn6tcTvSzA5V4Pfo9paycjKEJ282izHUo5r3ctE9X1u2QZrZKAFd",
  "key23": "Rh6rdwRd9Tg9dm1pYfCtkotXu54F8zHj9aGfGxVNBKydVbZo1tSQUrh39CpTE53hiUyopW37dGrwJckisgNJ9wW",
  "key24": "4uBN3D6FdwHSFSrB9Pya3FRFyAivDkzq2jFVXtJWh25fqLgJ93TvyQRNVTDQ7TQNyGRRFPdey68eafoe3bhaSqLy",
  "key25": "4S1EnB5pFakREFvqweQEK5RaJC49BgHHrVtveAQLX6WoFLr98yX1qLjjQNqoeABGtyaMy8U5bDDTUWqkaue9gZ6M",
  "key26": "5P7gRvBamJS1hzuHQogQFoEb2cU1yDLmHAxC3sowEjKCSTJdNiiDw4e8cUnRjExZy7a8SxxtMELqvmrvmMJPW1rR",
  "key27": "3QWjtJ1iiaKqQN1EpSeZ2P1339SzN85uXboHDutUz3EC26ipiJRozS2UGX9CqSXrW29ZmVmhHF3jJejgkWqAyegH",
  "key28": "4bsZC9tBgT54uy2EFTBfbUaCCdTWchEYWrDNUy1T8XAf34XZxqM7vZ2igHPzbawhVApB3kxT3boiWFgpQwoh6FqC",
  "key29": "3ARGVoJW88Lghndf3ocV3gPGMPbaE4cfHimxGjSuaM7LnRjVcSgRx62ne1nhf11sUyqfgu6ETfKTv2qenCwru1VY",
  "key30": "EJaBF4XMLZrUSPugZ61f29DXTGLNBoaiQGhfRqDFEzwzhpuE3dCTDpc8bWnviEynAdChFDAq86GZkCeJHaHExb6",
  "key31": "2ipsoN1WphFoSCqfctRLUK7zpnGzCbUGtw6J1VBuEjkAZtXcD9JDWGzgtBngK4fTmZFhU48XUht6WqFxjs4HjzXG",
  "key32": "V4JRBGQktBkTkTg3ekXrSRfUzJQGTS18pNKGqbD6Y5rQApvMX1Y1Ei43J839EgmncysPAzEvfnmXbXTbLWJeZBF",
  "key33": "2tV4EisRXiXf8GmHM5nUcjUvH5uT2JAKSNScD7hewiKxAhXzmq94EJsGtykGikdbrVnTzF9TGfqdYAo5AcByBjuZ",
  "key34": "4qJcGVVTbgg9owJbi6wN8gRPcHYX119HMJXTwdcBqX6v9vBZDvmLaEAsz86kLoWj3SXgdng7c8fRpmV4E73tgFzL",
  "key35": "2XwZojuzs4MtmPsk6jMP7kANZSwMbMTVVJvaz8yLkBGuQoihKLbv9pqGwAqNW7qqHByUAaUXx9t7DunHzT5oqL7Y",
  "key36": "3BDDybQEhQydazXhzK4CQxZsWGXigDi9Rq8qEtJRGCwawHPQwMhpopqgbKswKSs8rrBQxfLYmJLsM4ZSdUaUbyDe",
  "key37": "JoJCgqKotkkeXKRCj7WNbypDXopVgFtNS2FVsEEZSPL4oRqQqMuV3mvYYMzVqsfMcuwy3XxuCWJor5aju7bq15t",
  "key38": "5gxfVSZoksyXRMixKjm6vbcFDWGxAUv9LrT8SWGuXWrKhFbK4q3XAodfsXEpx4YRUG8acRVJMfJRNHDfpAHgUTRX",
  "key39": "546RETdjt9EY68o2NogSkNNcapGm5qAtyGt6RVLPBRvnt6Xx9K9XEKkDW8q8CPCMBFe2gtCZgX9UdvbFsVbx517A",
  "key40": "2nFhMFYW9hPpTgQAWoDvnqL1HUGmLmjLqmodJzadPCmL8wM1NuvzmgPwz5RfL1AyHJaXC68p1gU2hdbY786hAenR",
  "key41": "64mh5GmjSLzRKxMieFgHmcVqzRcmZSBdEisKP4paejqDv8vT87Qdu6zhQz1ghpmaRbYtF5LrMnPs793fz36wNzcg",
  "key42": "bnJBHsutHXRjLjGhpKS16xHBvamKNgGknCf69ZSf99k4pVcFQkPLnrwhk4nNvLG1MvQWU9iJAkJikYFtpX1JnDx",
  "key43": "34xvqFqNCJkeBrTAXWJF9VAgj8kxq1aoj9z8FR4DJvyB4haXbKF6QP19WJx4eWE2k93oQGt22NNvSGX4CzMmXjSi",
  "key44": "2F3itrf97yeuQfgh53WVKEzoZKNdkumobMooiqEDdKWVPVFyFqymkt3FayuH5Gn3HDwC5cRkWAPSYxuuPV1962Db",
  "key45": "3GBwctR45wfcCmypsm9AcVnHVPo6TdY6ZkWvmL4gwho43Hv1fQX5VHqXPUrgfQGq7LgSnTiuMhGEZJsDdZQg5TKV"
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
