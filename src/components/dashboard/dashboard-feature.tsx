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
    "615Bu6LMud4qD75ErmYDreBNELSQfTBb1UAwNM1AHv2atQVr6Du6DZ7RCgY7xoQX69666mWph2BRZXTeCyBtFoqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rRSda7Rt4HvYvKp7awNxBYPq9gFHd4Y5tDuT9BKfQh1sUUttepnEuqbJDnPwkPiousTpdV5w6Dc1iXRRAATHEiV",
  "key1": "2rG5442oAGoFZctqYPyPYEXVeCW4BXugXJuxJBwzCUW6HS7FGX8gN8DpCkHGScByBmj26kDBFZf6fyxNCHfxaS3f",
  "key2": "3w7mzsnJtQ2rbHDcMr4hkBbrAapJWb6sqQkLRwQv5coRngoC5295Vs9rz2e8wddjkLgUzxuD41yBL4wA2fLsh4HF",
  "key3": "5CvLp6ciGxtwyB1XXonLnzhgSZd6CLcFjUqwoRbb9xeEsac9kTwtQwkU4WrjcmCfTyBbTQJwhZgXwvM1GzNTtCqT",
  "key4": "e6BM4WJgD19URE1u9CRTngrrdJcVCfiyPSY2XjLGcrNuPnQp4EhDKRURgmB17yPqba5gJDLapVbTmS9XC19PKVj",
  "key5": "3EddL5qqcCKxEygvJFAjV7dkdVC7ZUg6bveB3RsxDMhn5a9Bt2mgHMfi4asZySGJUnpV8z3x2aUqepJSK6YB1HR7",
  "key6": "2WE9igvr3Q1Bkbn1iCP56bhU7418pR1dia23v2GgDCtend1DimbVnf683nSPSAxaAnbckPXLN4ggdPQhkVw4ftAM",
  "key7": "28r97Mw8JNcDm4X4H5p5qqCH7yAizMgkokvwp6QcrZSAkT49WQCWYsdAbaHwq1fTjkq4fpcvUaDp7G3U1xJ9VR45",
  "key8": "2iY9DJRi2imLpAMpM3n4tRiL6xeP9P6uJM23ShZARzGcAVPBzkcxxnvhqB5gtqnJDVRgYzvKw4XsAvRjh1NsUwqu",
  "key9": "THnviYWsKbU1hFEdjxQLPuhurhL5eTWSo5HTF4Z4YXowqKnb6PGbuiX8mkua5sDDBuAcKUwUQkmLTmRwRbDKYcq",
  "key10": "5dw8YxHmRt5dXUepBo31aaALCTb9sxeXNwnpRix4zMkqLLXUFc69vbpowVDK4L7inkWeLiiwvFJG7JANtTaLR7dq",
  "key11": "TjyKDL2Lkd3f1MnsiHRVqnFPAEEPAYbkT2pgoxpyrmyYiMX3Rm1QjaDHftuBbXdvdLDudcCQrT5PP847ipmYysH",
  "key12": "5aMuNg9KGiNa6rfoC4Z59kU6kyRSzX2TcfkMUSiFRdUsgVXjV7KUMu5EW3VSveygSuJZr6JuiEtGhCk7GggJ64Bd",
  "key13": "2DWgLaABPPVZnUVAWZKHauihAuxK9Qfj3NxBuSJMKaEJSWCAiu2kTUfJkGvAuqf7hqfct52CuoFrPGpEgXCTmUGP",
  "key14": "2Ewsv2ayEQn7WXW1P1WzZH9HvGNWwuj4djZAq2s4xR6Vq32c9CzNLzYiCRSme9kNWF9koCdYBUophibDGF1a282o",
  "key15": "2xQDinPotaCBin4DfvnynNiL5tURd4nCdquw4sK9nmLX5WsxaEBEs8fychosMqsqV4ZSzocVoiBRn2YVDjtrwdmm",
  "key16": "2JA8ovUTGBzoBrFC5qQMV1fKvcx1SusfGkDG2NA1ZTEZews8SJ9gf3jas6FmSKtSunr7Uf78oinmPMMgo8SUuMDu",
  "key17": "jRi2WvHgerdQwrmJmJx72nnoTcQBBxeCYTTPn3YTvr9rhHMVyzvGDPRiUsUgSSe1nPaB9YsGkgitDiszT1NmQ9Z",
  "key18": "3n6q5VK7re6JKR4aFZrR7vS87uBNCB92VFKEBv1tuPjEGr4mgYkAEcCXftaVsaFHCDdVbExRLYaVjspM94gfQi9E",
  "key19": "5M5QM14WSeFfDAZm1yyixgGRjvhA5pjMVY3WH8BcVJ4gLVM2SZdWxfBonbw46oBExFpwnr12fVeBap2tB7iHVP33",
  "key20": "J6LD73ceVFvzdaUB3fWaVMRc2m257zxgnDi3BpX7HtnfgAcdkXnjsZw7wxzkXYh33Ui8j84nj4ivvdmbzyTCien",
  "key21": "xo3kDKmwzYfzh17uW9fFhq1tz3enwKfe2WoMRWDLJ6o3vYcUJCDgxoPqFbjyYpVH1Xw7MWUvB8SB1JNpbRjbFNV",
  "key22": "56UH6EWioEHfJ7W99uQXVQiKoWee64rvsKB62kJBqFkTGro1TijbiYBqzK2QrFnScaguaeXvy73UkuRfQ8wpy2A6",
  "key23": "4E8SEr9gXejkrjRG4Fj1TnTuGC5RBZJGrGj1UcTiG4595bc7otA2iFM6VZmdeuBf7LU32gf7hgeHdBHPwnVzLtyT",
  "key24": "387iund2reEUwVqSdgsvxADRiEvAJEGbkGLbF6PCz81hFbWgL6F9Lu4DUYvzxGLMsR7hUzsi2axNxbs9h4kkkc5Q",
  "key25": "38tVDvNoRBs8qezZQss7wfudSNHXLJ3E9ExrkU2AKW2p7x3wKjZ2mQVaNvFAPn4ikjC9YZqCAJrqWoiPhwPShQbh",
  "key26": "ko2YngHw3Z156rGU3c5iHQAZQR2xGTxdHfvSNEDKdEto52iroYYtQrri5v9BnWHiVcabe1e9uRw4eoJpARXds5J",
  "key27": "29Mq7bLpBQoisGtzZNrAutcHZY1KHFKkbWr9Zp4tjBJWEfEJGktRc8HkrY4mEgpBPcvaSHb2tLMz3WuRhnFf5m8G",
  "key28": "3KjNL81C6NSSWuLknmNZaLzXVXu2m9abPWh4TX2UtiFAvHZRUSm7Skb7ZyVnZH6hnqxdKCbGAMVBam6gkYnf2csg",
  "key29": "nBwbboGp2rHpV4mN4KMuEbVRy7c74jv3U4kYjfkk7sEKT6SwW1pWst6tnzzonheUSsgx4DfXGsrcxUQJGookKPe",
  "key30": "ZBU79x2CW2Z4XVBPr5Zd1PyiapNL6vmkAfBV3iXn5CouZSZMXP2GNnSC5sPhAwkez8CS5u8LnJoqFSF4diGgvCY",
  "key31": "3iidPyxugRav9qPGPmpDZ8AUBTKcaKXGf3sXg7vfUsmSzLSN59MjZ8nMCQoLCohnwkCp27VYqa5hyqXSmnvXd8JH",
  "key32": "LWQLbDUzFHvNiQHRWRvpB2NFsvrddGQbcw3kBKQBkxn8DPa9kV4JKJhCMhMscBCKE8RMdiHjVmBJib7dMZhFMvH",
  "key33": "3ebg9E831vNxRk5DdrjkrXD1Hc3FJrZ6B697Ej98EdFjMUKjCotcTRVxisz7gLAcC7bYXDSiDwG69ivBnVctAjdN",
  "key34": "5euWRK1vKwRK86oQxHrVzzrznWnWJs8azfyheRcyPKFVra6dt2UgsrjdjMDU1BZAyArn6fLpxdiGPFAq9JLRqhri",
  "key35": "2w6cXfVgqXthQJKg21qUoJkatDTQojGSrJ9zdN1c4CXbzPjs7YgwCMHFZRFtHvmYiF9GQTVQ7GDEFqmqnLFgALr5",
  "key36": "xEAuxEs69QN954PtkYijFio5NNr3fhStp78k182Mk2WQsXmvYuqzmJZ3c4Ax6FaZ7ELXcHtzt9hhMmkZKXdYMft",
  "key37": "5xwTo6Gv3iJ8iskmGEK5Bkduu5reiZW7NC5AaRsLQScY19F3nGK5BoghdwoXuuTqpCFraaKkEoQ3HjKYjH6sh9X1",
  "key38": "4aipnYV5TRVagj3GYTttFDJxgDNb2w6qCdArjuTDYZ99HvDcekYxoijtA8jWwo3YzTU8bbQPfxEVRnJCNRk3NDg5",
  "key39": "36hGsX72gShaRdeti3DeG5CjF2wCDXiD2ujDfvKm5AjqiyrY3mwmLWNnVLiTowmpUp8qoa557HBo7UQRV1Cns1BR",
  "key40": "yNiWonKvoXwUWUuUhgTD8cc8YP5NNvHbYYiTKaCT8drsyeqyHNPPXmnGDnFi4kGyNztUfjuxwS6UAsSZLrvr374",
  "key41": "3eY5B3DA6BGALdrVEYTRx2PRhXbQkoWmUdxYqd9oD3GK8osXr5CXtyvJqYFQHXfaqKWM2HPPJTGWkGCVyaKBVqsf",
  "key42": "AjdfYQUxZkSA9QAHXQXrpPzZZebRVio7XKUdqoEvnqekbpVBFpPqz8XCgyXrgKXDzoZ5VSSKfqA3wozzHTzF4MX",
  "key43": "2WCi16aAcWoM8TWvkHcWDraGfwpMekTMXu7fSb97dyBKkkAUHFgwuj7ozo6dLKgPPYe9H3FHLyu8LB83Z2j9zuut",
  "key44": "tB76PMY13haP6TJRUcjxH3rkJWn9vLASzPRfaDKYbknQquWMHitdg4aiZHAtkvAKGnSgYU8ryLcwXzaTdTdoP1u",
  "key45": "5p873TtjsnB5y3PhvVDKFG6hbjMdqruEFzhnSwzQ8Vhas9FhVe4d6otQqN2j3q5jfnfUVXVEoTEe1db13FkDHWe",
  "key46": "1Lpydk8nTagYX6C2gvgonbw7ZmikaQWNcu2N8SgXSCUq17J71qV7iztajEvE8eXCXsLW5g77vYwfNcVnL8BaUp9",
  "key47": "5TqtPb6vyt2Ne5RfjRMN8SjTp85gsGG66nBXptdyAm9uXoSvbB31eZPZ5QDN53JQ8w1Z8TQWh8kkj17VHoK1Etdu"
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
