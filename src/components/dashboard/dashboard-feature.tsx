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
    "63y8ZHUbr4uoU8WxP43JJSDJfU3eccUFZcLFi2Ahs9XdQFsohY2dK5aapHDHhtUxTHjJGKewYuX9ez7N7HrJ5FMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UhZexS7HrXafWvsAKidwVchn4zzPF5CeWnYcRd6ScoeZZJfLpMN7hrkLLAcmpn41KNDAGLg81ZEeVHiSXPK1yeN",
  "key1": "4Fp16Wakiz3QfPArEcjyBLqA8fwFKaMtsMd3CtMeLAGQGSyMWkAB8TvFrRJnTg646QeDsSFxDKMZFFQaHDoFG58v",
  "key2": "2y9Z4m2jG2FM8eZmnYQi3wTAmWdDQsjTbyymqedbhzhR4nkZsx2HyABFSSyceqqWiyWXCC4x21TesMkPMcrVKSrP",
  "key3": "4NYNysTZB4YTabjUxBy7yATSGCDrdnU2aCTS8TqEAvdQQiDZWxdtN3B3JJvJFFaYLfEhBpoBgbiyYW6zYNavthV9",
  "key4": "2zCqZUPHYUWu2aNSR14V46U6UmYVZnLDMDE694V9EetzBpTWPMKd2sCcMv3owPgW7LV3Sk5RZEvJWu9YjAjLwxwm",
  "key5": "3kNeeK6u913fGCUSZARciZmUmStwHje9YQXp3S7xrPaYzCDv37zMf3KiZJrhonoXMsdjxzAWEPer6HgEtW1GSJwu",
  "key6": "5jpeGXGJ2yaeTE8BpFYyeiDJaynxQ5s2KXePsBRQPsezmmiw91eXmL4y81GtYVQd9wLRbnamYiMrG5W1X4sEitWS",
  "key7": "3LfLkexq2ffnxhf6yENCvkZYcg9Kwo3tuWaQrkC2726rWAssbWQX1cHZgoU2RkbFi5NULHxw8zTerxNdqu3CaUc5",
  "key8": "4LSfBagWc6rMkLwXNksUwxvisWFptjgwhw4LebjutKWiKUzHeyfFNRTd6E4deaVmHPwKBzVvQoEYb6ZbSPsQ9mc1",
  "key9": "5geb64mm6Wdpn5Mxr3SW6wX9LrQs6mQcQU8DyHwCsRe5SW2MNFScHvyM9U7Nz7SJBsgJWFfk1NfZjXSh3u693Z5j",
  "key10": "65vn4NwpLDyYXc9kcUWgnBfWFpDYifxJXmFSxRtMq7jo8xvMy7uwT6iz9E6vhSsg8xWbg3zSg4s3bQpPro7vUHMz",
  "key11": "2ApCmeEAMXdspwiU32ZMJeFDEJvkRDPsNJ5KHbgrtuTZYRUg1yZ9jUu2i1NmR9GJ2AYapgezvsoqnzecjVjZLJhC",
  "key12": "5GXvxQyyQeZrHYkhsJ9yxWFwKQ9co3rJgBFN5Uh7DbqWPsaxAcFqVFh9Pw7CDSpauJnf3pLm5UUG7wTm5vDDmoiS",
  "key13": "5eXMdJQZyMCHMgMPrsqY7mBWMA68MfAmXDqbf9z5dc9fXuNPFJr6toHhzUa8EqiabXj2Hj2wEmNMESqnTSJgGbfr",
  "key14": "2qxWPmYChxz39zVh7MKpDM44TmdML6DV3Sdkcbg7xspCjFqSjiP6jZLLJ5dqgQzjUt3jooRFtcT7aUc2YAZWawoR",
  "key15": "CEh5xwcAakn3ZMWKcoMPey89C2aXDAr5dQVYbZpLJteyzuLLhmMcxNhQSJmqGK6VyHXYQ8ooNwGp2db7dNANBE9",
  "key16": "3e7QyCXTmvZbxPNDcauDPMRVU1BCVfPPMGTrhfsojBSs2fe4FTBhzyYPU1MrTmsVBZNHJwVkLVnRdXy8ahF7jBfm",
  "key17": "3RWKkmA81k5zM2jafVKyZtZpmoHCDyDRQC3r9ZXuWTNnQAdfRPxwMPcBK4vKdM7aKRounieM9PYC2Riwi1KhVsHM",
  "key18": "fUYP8di7ZA3d9eT6cZoxvxAD7NiiSrn4j4Tsn4XJCYkbTQDp3HL3U2khxHGop9VmgqDkC9tQHin1LvkYZhrxykK",
  "key19": "fTSaVc5rntZtAQ2TZTVnfu8yM4zUWPFwkEomHy8QNgEuvM3YmzMvZnitghDpVm26QjvWTTnzYEPjE8j3McMqFse",
  "key20": "2nLCS2voyQULiz7sh8qxCPaVVmMAsAWf3gxZPicCAcG2cmHVjrM1s2bUzXeTzKgg6DNdd8dgur3kes1TZox7ppRk",
  "key21": "2mwxQw5UWx8wifDUAAmVruG1stD9KqEyzbMqzGFWvqFPLzyJVZ8UGFjCLACmRbcq2ZuesFrmt39H5zgDbtAFDtVq",
  "key22": "5NXscS9qoiDKNUDbzjuGcVJvJbn15HuWXYweaqSkv5cAosMMBeZXTxuJsuYA86Ke4mWLGBBa3ryHeguWZnG5nBas",
  "key23": "2bSkrC6sLvyqg3iQEsGNYK6ueFthDBpR2LmKRXNrWyZQUzdR1XsmSa1aoJSnJhR7hmGLRH85Z1h7Lf7295DJL64E",
  "key24": "39uXSw5S9ntWFa4XAbRAtWVPG9pFH7UpfJ9bvDic1shZGXEwMyz7RVvPiYUTQnh8pP3baHU5M8qWC1M7MzDbFkab",
  "key25": "5c69jQ6cKqswzcV2t33vC6cG1sVLszcwzR5eydGeiQkrMNygSpPxGcyRjAFsqoTDa5J3LJXZRmCq1YctnaPSAH6J",
  "key26": "4jBebkkN1x7FatdJtEfCZmy9o2cWhPimXAvNu32xgQVRRaCZftCvG2wBpCFztC7JN3Z6t8e4BVzjtSgA1zpLq2yo",
  "key27": "3TgtP4J5J2L5Ygw1SCHWVMUaVmiuGCDUGkH6Mm9BZUFiNy55emfaZiSQ5rzozCCi2LfotA9UxqLvgEQS31DDfBLq",
  "key28": "3DMZJspvajBQrJY3sUXPeLqGj3xfUPmryftAWuvWBqQ6jdb765Aot34v7aEUT5xr1dcxfH32owwhz45RL4qxJ7fj",
  "key29": "3SPvq8ier5Uo1dFSJZh1rDsN5AVXEczrWFtALye5dHQsfeuFNTMjyY2mYqaKK3aZ2S1CFiwuk8AxahVhtWqQQtbr",
  "key30": "62VtnK4fAE4AwBkCCWKLexggTWEqNcP2f9EUS5P5QCKLvnGRuSEbdG5SpVJSET4bn8AZdibYiUAj2PqLSmU9pXim",
  "key31": "4BduD3AsrZGLbUNcPF5smzxaxKH66zrfDZyDLnkkVG42evY5rqmoB4Ui4M2kgAEFGeV6itVe58Mop4toh7mhxx77"
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
