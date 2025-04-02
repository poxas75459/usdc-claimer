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
    "4xg4Baob39uXohxaz8TEBwwgT9CD21Pafi6FQZpMsZTgGVRdrZyC8mLdtza41B3E5Lukdu4RbDuL5iRDmefbEMA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mkppe4QRQmSj84NzLPxKVm42NRPDLQZrXFSPdu86DcxEuj4m2zKhPeiWsguxtFqTP4F48ZJ1fSLvKrVFH6KXpzK",
  "key1": "2XhKxR58nRuKKPYya5jkZF7bkJRyUPsmH3exRWaWST24znEF724Fc3dyzptUgBSQZ37UrHtBp9hunscVzjavrYjQ",
  "key2": "5Bno3zX6aLYTmrx3dMRPy5gTeMYRCAXZUMic2zbWvQ3S6Y5z2Z24a4KHJ4TEBio5etC1QqFCwbxoPqA6sDkWvhDm",
  "key3": "3JfeXYAyxX81DU19XgmuppymC4UH5ALJm5ZgwoSyMWZpiGG4hRDuiSKTUT55ap7ENxardnSxeHRNHTMEEfuMtL9v",
  "key4": "4BCsxSddAz4abf9Bv8fLUE1tAvEm7L7qhKDYFwPT5EcHmySAhXmwu7M2R4sWELZsB5VxawFUT41bKjv1XWeGU1LX",
  "key5": "238U8xoVociSUhzoVkd1tLdG4uW8EQmSF86qKhYJBjjdELNe1PHwMLjD3XxPJMZY4e5a5QK1r3CdDMG41JthxHD2",
  "key6": "5v6Pu2Rdq4UB2ibwoLZC4dWtF29f61FLXoJfcLYnFMFADqaTa4esQzmAcPc5z9Zb3rDj3o8jiMvydbe1m51f2GEL",
  "key7": "G9iDATtTonBbTrUYLoLgF7MByVDdpsAwhsaL9xEtCMm3VAXC9iepvtism1u74525mcvpyApfVaBiXDvUZkuUUr8",
  "key8": "3UTfS27Mv14WABJ2igkSoQUJ8anGctr1Wq43xgVyXog6v2T15bVUJa1FyFQadZuPDYhWrB8yDvaKLqYGq54qkZcE",
  "key9": "322g58PEimmc2VpgoCEMSwMxB3wL9YmQ3to5hynNkN2HRpou6Pu3mqU3DxTQYRr3QbZLLRCFq99ocxtmfLK7QtqU",
  "key10": "2aJbEEEDXDDeDDdNY5aABtc6DGpaoFDLhX1wAVwHrBcjfsE86Q1U7Zudp7jzJunuhEyJU7aVHDo3Qg2jvqsajRCh",
  "key11": "xcaMcqPfiySMoHqXhsCaAbBYMj5tmeqLny2y7XV4QhnKbnJCT8jy3vG2VxjD6eijqYNmQzqLoio3TccAMVXxRee",
  "key12": "5hDXJxLBb2BaBrSKN1PVb9AH2ZRuqMmBz57mpzQUwrcfLLDjUZK6QNTueBgmjbJJszMePrFGZkbHaGpsfpKmKNrs",
  "key13": "3cYcXB4zQoSbbbTdHahGYq6KkxTLypxu8vb7wY6CPFSYEssvNNKimn2kxetcNfxp34n6wBPGHQHiKMcmAJNNt1QE",
  "key14": "39Vb2CDRKyQ4oWFhz2TBbCw1sWJiK2m2hkttNZE1nbpuJy7hQ3nCFZo2r1qc65jHLDomgq8XpfuXHTVE17ZCxv8Y",
  "key15": "2vBrR3eF3SoGH6pTN1tqaZQzZtxJo2S1DS7iiiqEQJbcNWocZ9ZScWe2zKmun8cXeKLKyP5SsdBGEzKL6nsCjt6A",
  "key16": "2GPDPU8prHhcNayWgsoWrSh4bzeABr7RCc3gnpua6cU81E5NhVC2b2eFsUSRj7tFhSUMpZhmPaYkEFKpiGNjuVWY",
  "key17": "2sRy1nY7xNsGxcs5Jyj77zRUza6UeiGZb1MTq9Z84gkvn71JiP9sieCca2rp7Ejug17UFZZvbdrmM5PwtM3Qax6E",
  "key18": "3AQytyVSy21Qd14xxTEvzAoNgaoMqmWi6dUcgMeB1p3B2kjwSPdCu3jG1gpEEQmAw9Yp9CBnDqiXbWF1vYzTLBCp",
  "key19": "32TKN9qg7i5EvNBu8VEuJLgE2oV8TfThHYWNuzANRMQ2gRJdTBnHNU9zmJnEoQBtscME4oBpCYytNVHZKnGePbep",
  "key20": "DbhXBkuHRyBS6DAgvwiYx6tHEi6a818LsRetYTmpg8gWZMUTbDyPmXJd5o9UNSozoyjKRRDpg71TN5uDYtkExcV",
  "key21": "3cdKCBNDMtedND6i97oNtoqyWPsKxCm26GZSvBTGDNve3LnEjUTw6BLnaB4asdG6CVe4suZFN8u3UkaLhbrNgA2k",
  "key22": "5rKog5YntFWtj797SBpgqv4zF3SgBWbUxbA1zz9nBHiEF3tbpm7QdhchcXAiu9EVevmEDqmg9YA735phFMNinVbT",
  "key23": "5mmzw8Shs7MSPvGpvWVLxcnfA7NC26xUZezKFDewuxHvf2ofbhPASF7kK5fmpscYB8JaMhcEZGamWw6YWBkc8d32",
  "key24": "2kKqs2xTh7aG2jRSifo2tdeEJDxDfQUUmeLxWwW5XAe23opPaJiGCdfCjGohbpTskLc81K1c6eejhjd7EBJwKiKo",
  "key25": "2MkmGWYhMR25wmUpxpNdNdzDiRZHSvLUoqJBfsCp8mg7dAnV8gZ1K19sw3GWtu9JG3LeUrCfUxkKJNYhQHf5TA4p",
  "key26": "48Gt4hF7SoddFuyq5iDVwk1DWwev8xA4gRrDgcbVbRhbPkH6p4sAREk997YV9Pe3CpQibXKH4gCNsoh4xbq9W3o7",
  "key27": "2evALVT4wB85nuydaBD1wPQELNTsNySqr29GEbkD8DTTX4Ms4tAuBGWZDGk7M9fLhpPnmmaz53ZGRauWXhiyF5cC",
  "key28": "5iQbTbth7JTVvpPQgGiptcu5pGx6TNQC4q7TLfPCLsSjUVw7MnXw8jSAhFPaD5TvGYSsJ1V3r1v6CwDwW2CDh5Yp",
  "key29": "5DnS9tQqow4WGeWQSVVDSRf546wpuMdwz6D6ebJ4en4Ho9yw4P5UjwJCnq339o7Ksb3U5PirvXdGwoqdmUS4cKh",
  "key30": "2gB6LHBt5SBWNrvomex3SerEMfFmQVVomFy1sZD1YadYbKRdKWQamaZWoQxt93oyQ5Jb6BbfALr1WPRBAoWTN6uX",
  "key31": "2CMhdK6S2njc3BxFt8L6h9uFMuYU3wUJ2XeuE3PqUqXghSJBLetEsTW9kJWcwYKd7ynfyRHCbKtsiGoXSfz6aU5i",
  "key32": "2PvNeVVFAPHdbAhqs5RSu7FtvtyW4XQeb7AaoVmQ7PBWwXbB9FymYdKNKoAT2J5DeJNRJ3yTnGXFZLSUtxbNfK5e",
  "key33": "3Qb7CupnzNpEkutkzam782LFCxDt2qtHYSJLzRMWbaSJe2wApeLSS89sqk3xxqGJraEHSm2NQcuHTTWVBf46Z14s",
  "key34": "2sBDFCeEe8qUBMAyJL5PHecWWjrNMPdrLABVhoVVpvENCaK76dohs192ecmxFKThdrhUeREURLtqmAr5g36inXWf",
  "key35": "4pAxLu43yPnvf8sseLwHxRgF2euN6Si1wUeamKyG4d6RMdPqWBSRLHmysSZewjdyM7eZ3sxvBbSDojoCh4YHtYGp",
  "key36": "42t5v1VrSoriGSrvon4HN6tQJiGXheHdsUCKuXTdjUiE8aU9tKYKvWhhD3Wh8usyEB5tnbFJKqMYmFRAdMnLUuLK",
  "key37": "4k8uMUJJFNjhpD64EUdD6DfzezpjPCazpK5mYQN42MgvCXYMK66wZkezar9Y5od3dHbhcGq7cbb3Xgx7LUhVtDdV",
  "key38": "P6Am87PcignvGqXPfcxncv1L2FNcKPSZokCcjdBa6C5bTohwJYrggTWc2zK5dVBYfzb7Eb9EzksKQZBQwS58ZqE",
  "key39": "27xRimAsheRN3sndu4B7i23F6oKdWw23XWvBz8RqByehS8iyeQU45GXba6bJUGQAFFi1ZvDmWQ1LFRH1AjWJMaZQ",
  "key40": "3rSbnafVMX57UgGS5Gb68TXo2NaXjxkQ3dXThgjyZtVwZoeoEopZv5G9Nnpu854cxoLgymqD2UWu5P79zRHdizLR",
  "key41": "22vyF7fxw67jPpYtRb4f6rWdXxkedrk7eUVU7yHs7bkeGWWBRWt8Rrg4DtGD1mEb9uTgR9rpW5XRNuiGkbaAuUqM",
  "key42": "2oK8A5jLYkC5n2nLLCAr3WQLmwhszpfujMHUuuQwoeZxv6m2Vmuv3WDJaup4TNRkdBHPHGkr7kaENZiWeNRuaDoV",
  "key43": "3o3dLfM4bvtgTbfA7TFDabdkvzcTMcXCZyKEQCoQZE9BcAJ4wPRE7G8ynAirM9bzcTV1PaJNEUB4WuGYNCnCb15K",
  "key44": "5djVhUUiSU78eLc3QLQCN9jxN7GGt1orWcGnMjqYJJKWAJNLQ95kHmeBbVsLXdgmvGsGmz1kw9ZuvDSA5Xq27Kuc",
  "key45": "4p6TRvpQcDU6LX6Ue8Q2PSApVmgxtgFk34DuvGahi6uPQJV66BNKaSbqxrdFs9ywhZtNyHHkESZ5p9UyokQQAEuW",
  "key46": "2hYVLYJjJVMqqyCaFK136MFifMJP2csxAcSA6bQttoQgpevDVs2sqXFr2zGnBiLUWXjkqrPDCXu3xxX9b89ydDT",
  "key47": "RZmBUQHKNteprMBjBdaeY4RwZZenfo77B3UTdipixmSydPVQaEhgAq4GHe63jxa7ExhBBgjesMibJ1gtcoRgJxd",
  "key48": "5qExWqPNftvojxCyw1PaGrX2WVFYd8Ljee1xxtDkWdeAXEH5NC2R81hi3R3QQrPdW9rbpMKQGtPUv5dCbGnXj438",
  "key49": "4NFnBmDqfpbTgw4ErB8dRYrnf81AFK4HJBvoBCearvsg3TV4UX1f4z4HqasSC5PbC5b4y9asv1nB2a4LoBsstMWC"
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
