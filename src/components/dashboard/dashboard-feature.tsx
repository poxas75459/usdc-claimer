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
    "nXrUZyp7kh6EY9DvSkEawfWMMv5dp1PCnj52gch7jQHzuZj58tE6QpAvg7wa4MiUFWKNzxt1f6v68g5wRy6pijP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jVtxU6qB2cxggZu4tVR1DDbH9GPhCMrdJJ6Ga8QakRUWhtbrAr1n4gnr61hcxZa1NyAPAoAdchPVukcRStfyx42",
  "key1": "39oVmr9xmerEh6bC8kyVQKWkANWPnJgqPtxEyaSJ3hsjK1PFBo5QFtTL74GdZjsbDwgVoKXMs1KaJoTTtXTr7Bdk",
  "key2": "3infhCUpdV332K9i1Cp5ikgpXXwecoP5bJ7B1MZDj4whHonVrrrhqRGci5nTi3jPe6NfnBa7TZQiff9v2Kn1wMYm",
  "key3": "3GDUVXurth9V3ya4tNCBFaTL7r5dA9RVAeDzCQY1mh3ZdbpNDcyEW2kpCT67VC7rrm1DWRrBMigx85BjEP1mZyT",
  "key4": "62wsu4QB1bh54Kw9ucaxrtkRbQYSdkfrPWLxA5Gapb86jvXcfqHz6obMokSbambAHvv2ayPscV8hA6RjvWaejq2R",
  "key5": "3yZRGW3bybcaoves3cpRQqL6oAn4je1aZ1z9dAMSnKckuukdL7fLkDs1tBfBsDp4joRcuoaKE2XBE39aa3DpFMK9",
  "key6": "4UGqoE23bskd3YTkKNqggTFjfdBT3oMSKgpvfG7zkFS2sLzofMBLVwsfinhE4SJtTtFoAEVGiC8ys9ps7w4ZyB8",
  "key7": "3T3XnS3fX9Kry6pdRbeHSJxF1akU3xbCwhyq5wTsk7Qpjv12iN29fcjRydLUXiWATotvwx9mVViKBGXRP5c9TfXR",
  "key8": "46mDHn1rFno6W4LEgBz7MH8qDmcMX3nEZsCjtbnnmt2ZYARuWbhMcsxSpzWSAd31oJdtFEoQWJ6iMm6P5XUUvRUx",
  "key9": "1J4otj39X9dFoEgVTCzjAGT9m8z1ADLor9BmYBZByn5ZV2HCRdsuMgMKvmyLGuTBVAcNUpsZjNvpdhQrETbj3qm",
  "key10": "Qm9s54jcqP5JiYtm4D7vGWhgf9zQN6ZdnZVG8CBWv8MkVBmnuCHGi8bj6bBNDgCs7GnFLpnEFgfUXnMNRHtzuhH",
  "key11": "2M4y4Qzftgjrgr5pe72j5z5H9CraZQZ5NPRGuLmH6ZkaDFAkaXwDGJjVFPMf9tm7K5AoqqAKRU1KmRmDrzepGKoc",
  "key12": "3dgTWJohEHGu8ETk1X3bXP1qcuw4VbgFdUKGMy4YExHARouvr8T7JxZ816HwLFnMiiqhUX2NpM7sVZmt9GJbthZX",
  "key13": "2qKkygSb2agKKLvQZuuX4ArcH2zz5AyQQ9fJksYKryvZXH4SWT23iziCWYXAt81sfL4yFSfjW3ojV9gnrva36SYB",
  "key14": "arLTg1uN8CKZEzQ3ys9Ann3AW5EinpewiDQ29v4ob4fCfm1nZcNFfHT6BD8FAHeg4tUwhqnajmj3Qp2E7vsGEr4",
  "key15": "2TUy1ngRayirY6swfaRDyFPhnS8aWt7RjxmwNrPGMtFASwN2PxkmpUTsS8VfX1iKK4mvkyFbY1dyqaiqa9MCiTKs",
  "key16": "5YcbchN73PgCDx11RKjmuqHtyHEqK4KQq32tZqALKf5XcuTvYhqh8xPV5uScY2eeEhscNpwU6Xkhgts5fTaLuMSe",
  "key17": "aLnLsysrEWp3rReA7JBuf5TAjj9gvqA8yURp4nGZPc2dsACzjDSasQRVQk2R7XA7RLTa3SnzgpxLKwFqFRyf29H",
  "key18": "2BnTpzDEJQa3VApGPipQwxKtYi7y9hY3gDXAmsTji6DsPERfdXaSCfyQxUMncDTpRu747CB5p2EiiXz5vxKDYDtK",
  "key19": "5cWm2qSjuFgJu7Y3VKeG8GE3emU3RTZWGNuHtXkKx8opJjaWRik7ZSX5KdUsnUnbidNoBV4wG25osSCfXrkrQxvY",
  "key20": "3eHSxoQjQivDAGE7uxyGuqbPyN1pJvjMhXkEqk3uamxHgSZg73ufSP8fdqPFv782qa2s4rEsDCo1ESRJo1i7d39k",
  "key21": "pR7pWG7E2zVqb5NLGVBp1RQn1xR4DncPXKvMt158DD48sX3sswN95FjCMdt9wYsW3gKup3DCs6k9HNwnAjJXioJ",
  "key22": "2v3mw4EJoyDECGXPU2xrXNKAv2W8PsZSoRo3RvEAbBtxk2oUHH9bRv3cwDFnKHPBshD64NasL6DDmjc2gcZ8AaU1",
  "key23": "2qb164baLPWNR7XQBny5amv8xKgHUvLULNDSsJddRxnCihQTrB2Eqtvvs2FTXCxUSUhCLm1f3a7qbjsjjwnqfqvC",
  "key24": "3qZhmy3H5Wx6YeckDzePcZYWPZaJYEzvrVTgCrwVq3DX1bAfS4x8utkQ53jParfH1uomABMCakHtEGZTNRcaaE3o",
  "key25": "5ULxgRCFWkVWsxVDN4LSUr1jqNEY3CZJmn5wR6WzLCaAEjgPVq9KPWzG7hR4gKnCybHQCu1YjQ73vDrYScb5njdC",
  "key26": "YAfMRmSAP4MQfzEMx2v2xhiy2LbXFvEp3gm6V9MZZD6HkzeMNKocJhGis317KhGpwVDxSdpqxvqhGrvFZx9vpFM",
  "key27": "28ieupK1MJetaQRqA5RBcWrM6ZzhKmKF3fgEKmyUHXYFsHSrXyacQVCzxqxedpabEFo8V5hqqLfwrenMAZz4yT3p",
  "key28": "2aDa13C3MzP1PSzJpLmrRdwFdcBwioPn4aCLX63s8ovoiDPuPKZCzTiExqirDiHLctjsmNfvXu9SqnEfspBcmxHw",
  "key29": "R8VfgEPVTQYzYTgA7MhpJxS8ewJJwrKsMABKLaHX1CeNceHiAuGAbKqLkrn6ah1Y423pqVxvEFwa9VefYNMDiJ6",
  "key30": "5188nmCU8ztMjFYKtWmSf6Bume577K51FF6Zk8mcvjSz9CT85qraQCRqa7YTBivyndtfdieXYdFRWJCMHyqdAMWZ",
  "key31": "512fH6JizvYcqxuaF13k8LQQr6ejG9wXE8eJwyRUKBLkGSPQebmEVrV6zRCDfdN94o2GAgZC8vKTKNbKCxcBYL6f",
  "key32": "5eRHy4iwYHsyeh2NVTb7WX4pSjzGeMU1LR2qkL9RvPLSgLLvs2UJoJBQR4JejPAuK7zNb8AL1PY1UdmByFg7zU4k",
  "key33": "3sNGcASEddvFenNJfQgWiv9Nzb9pUBuVSwy3Ykk2bRsk8Se3f468Uy51DXuycvkUWDRUkfyQ3Ty56fQaEbUj2g2m",
  "key34": "4aHEGPeMWzJke1kcirRkULYahSvGuLDogu1AV4yCzHWA1eaiAn6FcaQ6hh87hbnwPv9FHCecBm1r8nUQA8RRaBZM",
  "key35": "4EUuGFRtk5xWHxxzSpfEFs9NoQDKJ8fNrTGA8WM8N2RErAzfFqEnGx4kf1dvA3vZFdKWiASWKPuxxuzMwPAjYU5E",
  "key36": "3cWfXoaQynNKaEHdEtQDsNWbFMgXRfTTKq6bZhq5Xh5wczz5DhApiyG8FNcZ4E3oWXPWQpbtQGsf8uNyobFZyRmi",
  "key37": "5xJve4u5ogUWqSmeVsWU6QpStHb4o375CwpBGsxzLyvHucZhvbXmLaNkd23aTiSKTRzRd9aSxj1m54pg7LvwRK9v",
  "key38": "2rVzsnXcPBpWccRWJWTnj42VeMGwadrQGuAXE6sUQXg6X6mw5veLfzAm3oEmPqMDD1T5Juis76XVJ17papfnaw73",
  "key39": "3v18GXxdJ8ALPNrnFk54MT9MjdyFG38UnKmpFY5LGU8MKayCYT7mkDnHTJw1fnkbs14AHP4mGpr6pBHHaF16DJZC",
  "key40": "5WKwTwZKymKvZW8YvVyYzwoEt1vK7b7LZs9Kx6kro5S6qHcFd8hx4CbqasfEzYWkEP8bPjTEBpLDm2etGouyDt7U",
  "key41": "2sktXu5H1Bas4auPf6viExHwHuP5EmGpNE3NijS5J36JMjT1fyX8z53F2rxzkQTjh7JbRVXc7r4zFehBhWyCuULf",
  "key42": "51GW8ydJbLFsLR4iwKYesbuq95T2eGCEMXWZhWYP1v8rtfZF1iBLbnNKs9JXWAXXtEtNGALdXp2uBwGJTAMbwtN7",
  "key43": "dEgRZMH3cqJoHSBUzMFUhiTD8hcqfn1cpWdKEVP33B4SpW4LZdJ5FtLTUg39zehguN9CRG1LuXEHhLNEyQHQUHd",
  "key44": "4dRm1oTdmdLubHQox49CU4u6M6g1UmFazJJd5HLWdzuddYXEJnRnExbSttanicd8bsuL3KTC1XrhGXW6XtrbScbN",
  "key45": "RN7v4ukRpMaruU6fDpZ9d2S9EwHYM9Gda2b4bSXiq2JahVM9CrseZ4Gw6wWsXjuAxMGFLwxmh3yQ3Gmb3BcRiXu",
  "key46": "5AhY4GoqhF8tZ5kf8ZNTDpR67Q5Su887nGSWLMgbRWDaGCwVmjeNrsxHW7J2CSuPKhYKYLmXzPz4zeh2PsaLFyaA",
  "key47": "39EitQJS7F4rxnVjxwnEqcvTgMTVkbJcAqQAjZyQSGhhCYxoV8aXUve6SYKhBUVNmjCbPqWZC3uUi9M8vMc3nBtt"
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
