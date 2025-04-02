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
    "2fELZ5r9sLNmPvbvMNau7SEFZbYhz1jYPCDnchrKgAxhcDJDaJDm33jAtNdbo11zmNnvVafjKfhgJJsrK4eiYCAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t6J2ez3U3Us3GS3Pi2XmuK2agoj3xYsUeisoprUBy77YdeQcnmKCnoXvy5JRVXBPqhndKQrjoevM6gev2GsDkFH",
  "key1": "5xgb1k5Aj8WYoXihFxwPJAnh7tcZnjScxKm6QN26crHkSzu4sqdtu6TCNp3iP4DDgPwSUic1egXgeqHWRVSqSwSE",
  "key2": "4m5CVXfZ9WXPV6MMvdAtA8gZdSWJbLAaLpdWBGFzRAJebpnLtBcRXAX2fee85vvCoWZwA8eEnWk1CTnNvZKhq53x",
  "key3": "5Pmyqsef6tStvwcXhRM5VWTByQco1RmW4zaUCQQAhQXirKd8YTMam7KTgkWtJGBmyZgStCwpdLPPtEtobKCgWSjd",
  "key4": "2a9ug32pqoxGXY2R7AYjEGcjPWDAEHoEJHPYu7QsHpyaMr9sg3QvHtynGSPwujYj8EAYmy5CMWBwnwrzLJAni9mZ",
  "key5": "8Wa7uMGaD9GRHFqXaKEsWXGp3ka5WHoDVQjyMipAvPaabJtLsH25t1ne6V6waNLNxspbVTzyVyC9NDR1yUiLTx3",
  "key6": "37VFHijAEFAZCNrPt4MLh1ZoZz6uTsdCcSsuTP4rB2ne1f3FJkPjKozvtgfzDh6yqwoZgti8SuV3KRBrx3Wktpsq",
  "key7": "D3Ro473wqK7sAu6U58THc4zm5G3BgGpVcQsNsBjS3cbJX6rKFaupMnbadsNN4vX53PwNA56mmikGidnbghoLDzU",
  "key8": "4W6QJo7fxTwy46NdGPvbAm5uQCiwwBJFuaFzgFsHDmEMV4oZ2a5dmQtPvkjCnDEWNCTmKUzKoSzEKPkWnt2x9oJT",
  "key9": "5vpgsH4amqGQzSKzHvcbuDC9gk9LoBQ3uN6zqhy1SGqm6f3CYsUGT6Dtjvc9Fy6g1CpwzLGEGf9xh2n2pRiWVutK",
  "key10": "31mmyvf9UYzjwNMTkSjxfoDqdaghhzfxa3Kk2e7BjP1Ngy1hyU3JDRMxnD4arU12e9LvWLPR2xtaFstrg6i3eisd",
  "key11": "5avzb7VtLZt3JnuEs69572RkQ6pu9ssG84zaR3kDE97zR3yJeRubSHfSSUkQ9gxUaMVAq9yemmpci3KNocZyBtkS",
  "key12": "2pg34HKUJvbBXChRw8jbtTznShfUFxHXCESLR12BhJN7V1ChSCCmn5wraQQ2K725DTyhmcEMYXV2XRjUpNk1Nav1",
  "key13": "xLSmX76AwQcNCg7caacoZCEzcTGVkZPMBjTj5DCd8rtdPQVBWEi1H4y6YJ3zForBZAfiU2r2Fr9aAmMNTPR7vnV",
  "key14": "2kQBn7WibGy5xZvGKdjmrCc3CVvHfAUw9S9nhEqDXKrkLSsqa4oLfsgWbLuNXKWsBamZgVY6EhFDD3Ltt1rgiygq",
  "key15": "3sEUQQLvFq7mEJTfCnNmFcnbTxUVqYp7yatJbwULCqKFxkokoTqATbqqy63X81z6FFLusHgKVvuHudEsZbPNTNZD",
  "key16": "5cWxaax7XxLf2K2vT7LgfWB5sJJhgeRBK4s7xu1sAhZ97CnvjcH98CHM975NXifB8SeJdkxKFaLE3qErwpTJyjZu",
  "key17": "2u52oB5j7stLJ7C8d9EvEFqmH85FYMdp5kVDpoTKEN8Me7bsFq75e8Up6STDMD5xytzQUVCu9SGdGBAnd8UVpnJD",
  "key18": "4ta4pTxjVPxHB3V38tUNUfz6VqKQtyQDAEAqTTjQKnPmNr4vL4xZdBZHGpG2zABjnuXAmGhVNHToTekLrZyGzfFN",
  "key19": "3p8wDkr1c78usY2fgF25VfncG7EtTr9AjPwbTGGRWJi8KbWqrjJwcHecNCoGDU2KQveTM5UvGVE9czu3k2gGB43i",
  "key20": "3hEWEghkDeqWsu3fs8kP6pVujPn89vzSronQvGfodrPzgJMC2HneryYignWZTuCd9ysX3NSeKQzHMbVXbJ7hsfbW",
  "key21": "57cmCMar4zrP3iQDfVDoXaz6nbgQSG7wcGeuCoE7KX5aN5zdb8q9LNdmykon3tnL7tGKRRvd1SU967Ycwqjdm7xa",
  "key22": "32vRATYEPpZssuEt2YR19eErrqshxYTtaTg5baS2mxLUwL9mNM1fG2h8z3XiEjfKFSy6WsTR6zmVuT1sapePexva",
  "key23": "4nJiSuLuUDmErxemuZ1sCDjSbQUeqNXtsuxyTGhuNe9S5Q3ASfQvnKAc2qP1HDNcNG5MD1arvjZKxXWYmcxPn49n",
  "key24": "4LR53zbaEdYgPLNd63bhUip5eXdkjdT32bgsVSPs2sGfcDzTtwMgxxwaT71DBsCLzYEdHE1h4oFdn7x34eh9q2mE",
  "key25": "4vTGjDadoSXCTs85sqtQBSKxo4Ak1WKp3Zm6VpqHJFoYfkh8FrUYZJjN8W7uLoHpGnQsK2prxeEKUbjvWpHMkMu4",
  "key26": "5idgLiHKhcZQGsYe5m5oe71sPvaoUGEtEfstF5aYRXyFTnrxVNnE2chPsKDf19SeH8oeGZrJ3c1uC8eu9iQcgk8X",
  "key27": "2AuUWmXYZhmw2EANE6y7N2tRXnT8DGNLWotJ5hXKppYbvgHzBpPE8g5PonpjeaZjP1AzWg2gSKDG8jM7etzDC21E",
  "key28": "5Fc1QkG4VBjQkwk94BRqucrCgBpeh4hVrFUbknLPBN94aXS6j1x3rZGZM1J5eMsGYw8YZBifVMSpiYxsd5fpoUhT",
  "key29": "2SiaHfSGoQoRwpckNUyEvuSerZMceCjCjQuuXS8JcZ4pZSqwbzVJKMxyD1ZHBhuYbtRWUPtYuKwN1wcU5n42bCVd",
  "key30": "4HCPyxr6TVJ2NAmyV5o2oQZMQbuXTscxshvKVhDUUUvBxFAej1xgQzNAJTjjRvTmVxycXF8omNJs7PC1DshJdzXs",
  "key31": "2AmLn3hnqZ7mKac6H5ikbVu1fx7NBf6p2hvhkEkcPaweFpgHHeXnFM2ystSebctMJHoTvRV3myW5YxFw8MvWj1xG",
  "key32": "54XbGaGh3bo4hxXfehd3fHK74tPZZJ5FX2ev7dy9fByG4EWXKZ41vxLaNyKM84ZgijHLQpGoWkTDvtnw8i6UdssQ",
  "key33": "5wXsWUMs9GbRFhQCrAXGTzvCYA83kL7cV4TLd6obZxgJjvGksrtbESK9PzBG1zXx6qkYTpSwqVi7xYARwtrGwZRx"
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
