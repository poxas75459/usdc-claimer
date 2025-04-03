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
    "fX15FKUhHsb2VW66XEKjfu1sHpbQqLZsNBNYEyJb9WBo79DqCEW1aTtyPyRsBYC314NbeU852zjurjJBbArTpo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R1PhNbEfD1u7YcwELbe2u4Tb7JtoZq3TMsKSsKVuDBUzWJyuD9DzhLAKfSX5RvUjZ7eSErSLp1M6SQPCuuFTvLN",
  "key1": "2iBoVmeLNbtcAfUSbCbhcK3sHJA9MANbrMr4xL3Gdv5C9deMnPHKf4duBvKFUbecLdnzPvtrbECvXQHJstkYqN3S",
  "key2": "3sMZDXxSdKPUqXz1oaTrcofHccadn5zTaWsVMWAiwzix8U57VABZhh8Js6xo1j3j54zsEPkvTJ4kjKtc7XmP8dbe",
  "key3": "43UCRkwnoBG2jyxYuFAQSbgvAZ51gg2hu5TLDRVzDT8MgUQbvq1SEUTubd7hwKVL2AuyUFxV4mTmCG9BsMgTqeGx",
  "key4": "433C6jzKirtguBwvbWcumQAHJKYVXwufDvbPV9HxFbKEy21GYXrxcAwA9g1FFU4uWCWd3uCxG8iBJju9GsZ2gFRY",
  "key5": "p2JYLwVRuBRRvREBAXFKznQ3rWPqDQdPvKdJAjCArbsytwxHMB1pcVqtorQCgCuU4uTKmVdkibDcZVeMFRuoQXZ",
  "key6": "5w5oFGGZeVXBC6VKgVCWgBfsQ31j9iQvR7eJKGSHRM5HUX7doJYJN8xmPVxxniAUwFfPTjb1XJFVbEZ1BvsrUUwT",
  "key7": "4rXW2jGvbo1zNjtLfVtBysyBsBWNEtZxekewuXawqAWePakM3XELe12Ekvj55qTTK62F4XnEXDweh6AGfr5LB4Xa",
  "key8": "4UFmPqn8XTA1B9aRxMGGYZE5YRzCJxJ4izQvQZ3ZzWWLeBvuemQ5w8qY5PBXBpx3LSovQzcukiSyspnhiW3ag2SZ",
  "key9": "3gaQsTgchfP9qJEzdKVRFu9DPR4bazYTtRYoAo7Pb8Zz88Z5pY6sAGZyCeivfxFyMSjb2iGYE3kECr7JLyQ7VR6s",
  "key10": "3HH75XsguuWbSu2wVPZTK6S5H1geXiEH66dCvyV47HSV3gouQEGKuYfSHkaZm5ZbBN32fiM8QFhJztN3eBE89ALj",
  "key11": "5rnbo1vZitZpLqK69WG7sguf4igWy6fWRQK1z53gpxNpK9KiFe9ZALnce7UMpqDL1tyhWWDZkmRm9PnnEbVCxpGj",
  "key12": "2RGqSkmiiAiTGZbYANV8n5GG5nrwvYFkzp38yMNvb4RsfuhPrydoKbEGY193kjgP3BZjVajrDwAqpZbZQ4A3wCJH",
  "key13": "4gByL9vhLPy1nUovhCMyWCTVnynWf4FCRpYh9XhWwtMfyiju7UTsS2NPPBJJepS9kuJ7gK1GSYgdEtFYCahr1jRo",
  "key14": "5iLPSDv4RBvC2xV5L58dK6VsGEVq65WcRuRt8Ao4aht33pvHiWfdoT1prPVvgkdF1UFyyHbfgcsWpBF9GDgWEioZ",
  "key15": "3aH4rMZmYjcXsMJhNTAJMfEY7zncqzcCrjYhyvR8xajiNJmGFYKb9x2NV3vpDriqSp7MQ1aWRED3J4AJpEhyQeZB",
  "key16": "2W7DM3TW5QybcmMcxgLuunCLdiym4ZJJjxw3kmdmKywLEyv4zEPdZN9rkmGBAKhr4S7Xp85rta21FwQzZcjeYXDa",
  "key17": "61W67c31NfH3PeLSPckB8Mdv4PVBXdVyHckpjVcVuwHEm3NRz3ETkh1TpYMuXXsGEaR1a3Ad6Md6f9BMDcDBVaDa",
  "key18": "47Qj1HE6pxDS5DvKXtgJAwSb6wRNeJHXr8wkJ9f5d94AX7LK43wAjCsTN97oJjnUtvMFfQbWH2LpkzjsTaLZm8RN",
  "key19": "5HXG4NrsvbH11gCZiqQVat9FxgZyqHvN9h6TnFbdMMXNYdwfuA71KcvvRheTaSALW4MhZhj6BPQRyCR9jXMEsWSb",
  "key20": "2M2XJweeouN7YqDQvXcZKHz9vWy9scoYk3hSfYgXGPEN1RZ4zCwf3ysaw7n42YhuHBzBPecLejbFhUir6enpTgXg",
  "key21": "33xjeChp4KjQB9GUSPvadBddM2AKFRJ7qKikGzUA5C9iJmHfSx99NWQKFTqt3dRG33cX5LoRtJENsh3qcbi9XMyb",
  "key22": "23RNEysFQcW8kbVWxSRx6AM6X1phzA3eJc1ETuTTFb5D5esnBR3Eq7LRiVMTpnQkK5FRp2H3cJox8cLWHyPzESK9",
  "key23": "2REVwUmA2UbQxBt8esS5o71rkpiRjohozVtjdroWRQQ3qrt7fPkr7RYQwKVEX8HLpWsm1pSmHg9dkkVgQnDHiYCt",
  "key24": "35vYN6DanqN1KkvfMtowTZJtGriAgPs9HdgMWkTTuQ66DHz6epjTJy71RD2M8ksaL6MyJaqkpomQMV9mpUYfVgAV",
  "key25": "2GN3XiWdQqEXuMNSHFDo19XtG4tgZzfiSRSVeWnztcoE5msk35AjPgiuBnCtViyUuprqngT4s6e6QRKyfGFPC3AQ",
  "key26": "2vmT5zQf5kY71gtoruVyXJEqZGFEV3Hp3qD4rs72BVhDarE8UWb6MWh7iA2pSHfUY9BUPeZLLtaYAiLTzfDtJF48",
  "key27": "7muWjRyhoKLL4t9R1ujPK2CuVjv5puBkENH8rBAf1cYpqAtPri1s8KR4mHBWWwKBY5qjfiB1ZYkguA1jjo71BcG",
  "key28": "2N6MvnTwaf8e1pcsxkRqMw469zqw24Tv3LmtZBsmWHTUL56QJDTLuEkQ1uy2Mn8ui7qdDj5ZF3eeAcBbaT6KaYjw",
  "key29": "3bXVNJubeQ8VmXdUVCkk2z97mzAFZFv3aZdMKPR2pnuUWZCDGd7GXq6KYpnq5jKeLM9kbqf4ZzhLq32HkHxxx26k",
  "key30": "4LCMQ42GcBchBJcb6abeWgNYZbb9YMt2GovgC6eRhakgRU1JttwnyyLhR13gZWC8ETSs4u9hwtqamEVRznu1tX4k",
  "key31": "23yrMJgoeS2BpiskNtaso17MtTrV5bCzoMLQpDDWttvkw4neC2CQUgc7VPqoJbJTDE6v94n4qGKmE8ayLVqGsTdw",
  "key32": "4DkEyVnZMZR6FpBoz7qie7b1Dwi8S9vJYARXH7GgN3K689FRtb6M4Gd1tV9nNaL8ZXT1yiWHH3FEf1utDVfW2Yq3",
  "key33": "58Mkx88LNNDfejXTAnEkjnevxeidEaeoxNa3S2naXbxbL1PFtPqXWfvqkkWqJPnNhNmSZnoLQDMSm3rqfVxYghyc",
  "key34": "TomhRKqAFyEQiiMjbMz2t2kLoCuUDPX7v2DZuB5iRtu49Pk2ztxm837SGAwq6UQd5ngkbtfPTABUKf6GYBVEyoz",
  "key35": "r28fVp5WamKCXMZX9vRwpb3tkpqhvnuKLNxoNnCocHS731CimeVG3s9t77qwVwZa9TPEX4ZbnSBRVyPyFRyHByb",
  "key36": "3S3R6fbXbK1YnKnthTRs7Bd5shSSsngTqMsigJ6Xa58Z4Ycwx37cBVVSwys7cTTPbeiQKRzmdhwrWghRR83uimys",
  "key37": "3TJm2CWeSoHxFeYyxHhu1n7EAaPvMH7qnLYDUkx212xiKMHLZC4tsARmXRHENRawQQtNT8ovUhf3pFA7oxfpTz6N",
  "key38": "3GDbBFzonNMRaVY18GBfGGebDtXPJeyxKSP6CQRMbKaYsnWS2iMrkZjoQ1jv5wM51ZuHvHo6W9XynMxofoqGaFFm",
  "key39": "3g9DJJGi4qojecjH1nh2mmhGRmi8vS7ENahjRidUwHZuEtnuQNhaGac9gqziDXo4cFiWPei45XsxmHYTZu8ZZziQ",
  "key40": "2bDphrhz9gxhYhcKP2ur3GLpY4P4PonFNA4Dcp4CecqZuScZDd1fYnRzyyA4JDtN2eigCxXVBNUPXS6ghJZUhzwv",
  "key41": "JsRLMFh2Td6GBBzm6Jq9QbXMqNhwbmFBWacNNQ7C4R4LfH51tazKuiGyx47AgJbPsWYqghrth63NGZ6qFPeMHJX",
  "key42": "q6wsfbKxJ6oaX5nWiweseyBfDPsdhxUA7hcMazwr6QHR3kpAN7cp4ei4BxRhU3G41anRYSCEsmoAPfNj56X2WTJ"
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
