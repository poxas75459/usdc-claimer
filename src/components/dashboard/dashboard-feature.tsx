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
    "3ruL2T2M2jjRL1cSibhkwaLDsBSD3xoxWzf5kLHaCBGSuBbmYdB1FMACXj1w9Pxpa6fva3VCJjSJByZrzTvkbDzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kwEeYKnQSD1TZutXb7m4NnGX35xNmdaJxVbnm3Wx3ktyprA9Nbizka22XXTFfyHaNCPWDtkf2x6GvD8QwWv8RwC",
  "key1": "4ZyzNkpc6m4ih8EWncT9E8cDnpvTLkAoLJJykwRwr5vXxkYJbNegLH3wnW42W8S2eBBu8aim45tkpSJQ5FmCHrkK",
  "key2": "4vhwMkLh2Tuw1nqMDsuAiDdz219CKJtXFEDNRuq92N5vgY5xS65G3dge8iLTvoGHuWr55f831ZQxGsfSWURFhqhC",
  "key3": "5EnkrgL1zFZrPDyJ1RCokfhRQjK4JQxoUeaHGqXAaKrMcG6kpgBRWosiTtfXFNPgYDrBDvRF2FmTtJ7dZp8FmRLU",
  "key4": "57kL4NyLPD5urbasY7pQPdTKevj3fFX7brRigLDvXTatmEctSNwRaWimqSsaDa7H1SvB5aJM6gTsLmmcNuwoSfbz",
  "key5": "35jikUzDzzbMjkiQmtAUJZggHyohaAExpvVtwweY2bpSR5pnhEXP7bMnetWvKXo4en4jqZSD2kjfXiKK4avj31bD",
  "key6": "4N5LgkebGnbDfMiYVhpRcskdpb3AtJ2GtC8Cv6pFJg5mjrZ9zjXFAcBeg1hsqaggB6J1njoHxv3SAmkiTtbcfVG7",
  "key7": "4wCnVYG1q6TWveD5Z8CngCk6QVoHb1ujSYeer7rcikyPrBjCs3bikZURuUsW8GCzqnGRkCRYKwbVZx9BTqgbVyY2",
  "key8": "5MMDpscHixANTiHqyPh6bqrpZbzP32gvnP1dbNa4t2atzHonfPrr6KfxfZWqHEpjZtRumZ7Z7gXjDC6c1rtZ2Gyf",
  "key9": "4Z6G6iFNdmeB2dw2XboqwWXh3Tpk6UmLMhJFeQQ3pB5sb4eHKP6ApNgbZqkS8M17Gazf2eWU2pLCZmhHZZiSgYxA",
  "key10": "2LCrnn3i9GQhY8kuPRVHTZMFQtTojrwgJKfcTEJsyx9bfP4s5UemtMeHi1XsbLMy62CVswLahfsYDP1DaD9syzKm",
  "key11": "uTrRMjezS5iVnZsxEQbtiQhmMZeDRNjTtafA3cE5ZbscvrsrouGN1fkEcodqnziHvQjj5dPRXkbzEvyayJWbNYu",
  "key12": "3UFMdPubZTvZ5JMRafjjpXkNXVZXMmjcdau41qyRiZdhkrewLJ7FALDcJZnEztAzKpfUKZhgoDK9oy4NRbjPB7ej",
  "key13": "Jwf8fy4u5HCnykcPaRYNdqCeKsyxsfZBdnviRDqsi4naKE33hSarcic4NmZS5foLc6EZaSvT4pdkzgQNP2TYZWB",
  "key14": "gjmqUu6hHGst4S1iujfNYhDqkUAx2LyqQjEhWFwg8YfLeNBzTgzYhYz42yj8kRqVL4uCWVJwBtf9Qw3o7gZtxzY",
  "key15": "41jfYkmGXVsWPBjEZb1Us6y4ueTF9CVMy7Z9FiCUKtXscesLW9F5FwNA1KxGQdgGfq5kPN9gqtfS6ktuEooLr9cj",
  "key16": "4tRxsP7U1JYWCvbC8xsEAxNy5YhTFpBLJcmkVjANEHMLA68Kw3UAmqmBY92eQJVUrTHUBhiFowUSjy19Avofyb5R",
  "key17": "2DZj25xUX61vqGf35vMvzxosnmmcFLPUtiA8xHTrTQanTUkMYkcF1LS4Fo7QQf3qN7NdbEz2RbW5ccgwe51Z7Fz",
  "key18": "4So9xstKeE6VPoxtHshXhyfS1yT1WtsfboizWNmBZwNDXcLvWgdd8B4pCgrPoD5TRY74noB95ZHbhp28MFHhTUvc",
  "key19": "2JD9PeH1vEV5oGAU1ASmkyhtKv3ccpeZ6WHB6hqrC7HHUkbu286ww1QTzMzcY3Lt9KCzGkFq1WBpxEnKmhMi2KHb",
  "key20": "Wro94Lp3pmPK4bFE4dEnvfgb76hwj6yhX3n29GKA7TQwJuTZMe269E4PPJtWkdDHvicxLmvoAyuC1h331TUz7qQ",
  "key21": "46vfwR4pX3Bn4RCUVTHtBV8DpF4poYQcdycnauAwTNFHa7sEiWvpNLxZD5Wj8AzQ9bo1tUnS4ioB4zsQ3PWSaz6p",
  "key22": "438onFbait1dFrby76MvpCZoizirk9ATosrZFJmGdbAEQq2SqmEiZvxUzvmmm2PieeMUZBXA8K7WYBMTUj1K1MnM",
  "key23": "bKYbZ4NtpPzJf8Tj8bHBqZs7b1Ad5EoivQMQYZEHHLgxQ9KP37n8VXCykrDcQpSqoJVuYtkChr4fbz64AUPZTHD",
  "key24": "2FaN2D1d7b6DS6QeCbMnba7eb8vAGKMwu1vjRKBm9419BAYodnNpch4tx9yHWtGGziKyM6tZhU5KVF7BSm2sBFAb",
  "key25": "4eYgFmDRpYmogYnSEqfEiSwXdBeB9enAcMKJF29C4C534DCJ7dyDrAHsZ9KztFYgiktQZ1AjRunMmZjpSP943n35",
  "key26": "5FSDR4KkAych156qQPBkA1E32yHCWhXzvNGBESmiFgW4GoYG4FiXjXrdDCQ9mPFbdMFUvU9dqX5MkjQwc9QmtrgP",
  "key27": "3w5zvRCoxapogLMw4XUUwmNykkEBvjasnFyctRcnkavtGRVDinoZEWSpCFZME6XbMXYTCJJcrLoDjqCn48uypb5R",
  "key28": "3Vx8Hcpj5fbmAZuPFWDVf22NuN8oLbbXxHwDUxoKotFgxU7CppFeGKWbwp3dkeNBf2U99WyQzpoERZn7N2xSjrB3",
  "key29": "3p6ypbkdGNVXUQgf58XoVFvKNH6U6foDyy9GreUWjJcbSeZwddzdsuYN3CwJkU5KvgTfLpjaRYqXuEwuqFv3RthN",
  "key30": "WwXWL38UoyTufcuYakwhgazEaitbiiyXadnrWjPWBKyTrFCe3DBArHC91RiVPf1m3WXFwoUEkv3fvpmUowpXZoy",
  "key31": "33YyELwdp2mr4cxEyXFone8rwumpF5YcuRzZef8HXZNsK8FRjEsoi51G34nBwk1JPTsA7XtRZKvejvJ8d83KYjJ1",
  "key32": "21XrGBf2BSugFjNmcifShpMPt9qJkiVB7VVWiYi9PV4YFpBJJ1Zvj3gNdg4eqgTrZvjL6b77Q9sstYtoHFLpN8wg",
  "key33": "3SUoQQ2PJJE9XB7jmDoiBHHunHZmXas7K9dRUAtBj3Rkb6LcYi333boeZGhXk23cLCBfAnGApjtJ26NscXG3izKG",
  "key34": "2knrf9jtPvtHRxzQpQCi1pecjqvPm4LeNKtxNWVoVnbwm8dZr6vHyuPoSWYkpevf4T9M5zDXqnrihgKrR9Qrreij",
  "key35": "4iUWPsotwmdL7FMBf3ePcHDrWBgAtprqudofNy9EvEtSa7jpbNFmRexsNbjU8bZd5NVf2iTYaipBVKPFBx8tNK3N",
  "key36": "nCGpUW8VGtkyTCVFMMftWiqshSPQYDuameKbhZ155ujFnykgqduYtebYQUPFxgA71H3PknyDoHYwgHrZUSR77Wv",
  "key37": "3FfUKs8Nb1qawYDm4tB6fU6FnjtBSWPhH6Xju6Y7CtmP7Ud3LimPN5Cp6xdW5VebWQTh9DxXJ1ywKdFREha2Lm98",
  "key38": "5jNXuvmgjRAk69uQdQ6jMY7Uy3QJizk7JDH3qESfDryCGVLfW2vSMNywLREpevgAXucQsS6z9RzkQSpk7aFToXJi",
  "key39": "cDV4HoUmt3MjrTyCrQKVYLeJfeEbriP7ojrBCMp3J6mSK13t6ppTCE7P9NthxeAqvp87g4eCXxJekDtFANE1FEu",
  "key40": "4qDrTEXy1Rev2sP4b7ZnjSJH6Mbuy2Zf51JerJ5QQQ5KWcLXvss99rzFL9pMTV1TQk814Ez7QqubAsrTuJE7tWNi",
  "key41": "2Tvy9dKeAUxQoKet8QMTLV43ih3cRSjGoKc9Wda2xC5yeKUTjNyNCX7ZfVGCcT5Y89Y2R3HZ6LCSTSYiXVLH6hZy"
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
