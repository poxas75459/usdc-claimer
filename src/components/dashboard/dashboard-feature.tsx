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
    "4apxWrSzSuPRwwxbcVKv8DzEHhtirwuF1KNBggNFPmS2QcTmz3YQxCooSptmmK1yTWwzkAKP9kU7qwZiVa1tniqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22tcBnsyfDEcSghjMeoR7co8uNTwL4EiD58Ph8VcuSTHrPcJLFLSAqbRUkreiAaaxWf4W5jTCP5vksiFcFQKb7Vq",
  "key1": "34HUQtH52m3auVLetYctGEnC7Rj1ETYUttcBsrsUARYHN7La86Eu4SQdBv2vMVfxzC1Npr2AkgTyDb24ngCnDGbG",
  "key2": "2GTYWk351uKGkhQjwYRUHJf4yjuR8wbgsGc5tqN4ibCfjULak2AVyWo1gGbEfDGtc134sbBmaoUYqkKgb2u9NGf1",
  "key3": "4rTEre5Mu17qSEvoJXcpJyVZZSjrmer4EnzJtx2qA2gZkottVBXb7xmWcBM37Tjqv2uU48CvgHSBAcuBaA2Vdake",
  "key4": "41uVA6ScVXBTGrh59iUTnwbHdSX9NdXrc95LPwVfNtAbNbWC8XaSAJk4vzKrqtVSqLZNVCQ28t8HXCXhZZw1s77L",
  "key5": "3oRHSdPSAUmxTZadimLJNDs6n7yjbp6EmGMbHZuTRV8eHVwKmQCKQHDAbL6gChQvPbkahaiZvopwWYGhAtiuqj7K",
  "key6": "2GRGqN2cqtjn64iFMkgh2FeNKeWBqqnQRWRyEu2sFZA6jfu2ur83u3xHPifZTDotCWwoMyMXVGdkat1iDmkbFjMx",
  "key7": "5ccwRnrhazcVk2Ufb98gogy87MUL2Lz87uq75v5o9sKPDJbDbkitQCkFEsrTTjUVCdLye4Zu6AiCr8qgULY7aeJ3",
  "key8": "3D72GTHoxbBm8gi88eAS2ZyYmxjM6Dn4hm7xj3FPXzqVGCj6Rn7V9g13DmYyLcXcmQj2oei5EoPssv84GBckETgG",
  "key9": "2Jfbxaif5kZxM1nW2iWwxwPAJ8ed6Wbr55qRa9k4bTdrJp1KNq48CXuMLEUv99sNtPW9tBNbvKftes6W6d1jFDTt",
  "key10": "4YxwYwodhXYtHVX2ahntoovC3XdMUBNezuL8c1vv2Drn3csH31z5Yjo1LHfkM7Q8ZYXTN6z5uPtzBv5zYsd4DQ6W",
  "key11": "8LSr2w8Xorr5H6Bb4ZjhuvKFGkHGSPiVt5Uc1pkKUPa7Q9pbH6Gj7e2rhktvpVwVtbABmnzC5F3dEBMn5gHHfnz",
  "key12": "4K9WRb9QmJKF7C52FFvyXBsY9f9sygDHqhdqjLjcsHiWWwiL3G8wrkfeAhbnpgQhF4ZBk2GcHHiCTbrjudCrd1K6",
  "key13": "4GYhcQcFPYScfutEc4mAx243QYtSxJMJBWcoWQu1QVsZfTwhsaRhkpoBMdM2FT8BH29pCj9w1gRBH4dpiKWetXBq",
  "key14": "5JS5AbeFS1JCBHczXkbQ5mNBB5a4rHk54PcKtDqAbc9hiLpEU3oAm6XJ2TpwUZ7LtLc5AaXttVVBuHj3w9ApCE2D",
  "key15": "42eUrRNvNTwq1wtKtnqUi9X54AU3NA9rY5jrHqccfpRxzTaxgsqAm3coXPsFytLCJb8WuUY8g3BvExaGxvFgJngc",
  "key16": "2fpWeYgFpwqZTtN8fC9xsBRfwBaNoFp1dbT1FBv44hC3rSgAT9MEgS7zpSowM44TYuaEdKKRDTzbTGsegQKueWXg",
  "key17": "55kAdvkSRiz4ydPCWuyFHPRjRP7YXwWPmYM7kTg2u4qgR9KmafLQLB3N7DGCmU4iadbFUek4hNomMdsAJqvHyH7w",
  "key18": "abwkDjMrwqVZ5FoS4ZFuphFrHTBHorSB6QM8bCEoM8Q8bRqbrAX8u7yC6CD2dwAMzFp3QiuAQcqNDAnsMXfiLM9",
  "key19": "3nNEWX8QRBuPx33XoRJL9B75Wr1FXtdqMx5ZwuZNJ13FDamDAD65z5KexW83uMYiNvbUvtMX7g6fFSimSpYk7QYP",
  "key20": "NyoaCUtQcFgkuXzJ81y1HHSoEjFaZgB3hooE5tEozxbEQm5JcgGpzqWaxLMzDh6K1SdsNEAquhCN9QQWUX5CLmx",
  "key21": "4ihU8oWiouTPWD2NzE1BVvFwR2VBbSya3EaxxzCGJ9n3spVXENHor4Ak7u7NjTqqfJgAUbDPikAotJXwUZArnYWS",
  "key22": "oo2Wy3LoVNhRvFaUogwNgJp6Fv7wGxgpSenj2B4qwaUshD4TvBjXHYCUD5hF5F767DpCjH68khXGEx4hzJNYb32",
  "key23": "3NyZ9uVt6LgZC7DkMMnrhLxJFAKgt98ge7D4bFCHP9Z7nRoVDrMRcd3dca4FJua1HpT7twACnDP7Dn1Hr8sUF18j",
  "key24": "63YXZutYkzKd7sF5NUByW7ez5aXEn3Z1LPYKCBpf81MqSF7Ebk5dfnq1GqSNPNRjpQrTEsr7iFRUBuThJsyzknYU",
  "key25": "bSaDY4UY5sYLcL1CitFeWYqacGKDBpLPxbVacEciT9RBSp9WpP6s2sC67JFeK2CAActZEtSLNPBcPrBnHrWh8D1",
  "key26": "3Hgi2dzVN7tPyg8ETrbkJ1BGgXc12VzX59iHFa5xH2dZWvkE8sFhc4DofSwCPLJzKQBCYY4MmteDxZSMQiwKA4Ah",
  "key27": "3gv7878E5cUdXG4PUghwt2d73mEokhuWJ6g1eVx1F5KW6MGc6v7x8ewWJXxS3kC3PPDkAnGAGDF8if7K3yAgr1cB",
  "key28": "58vUMtM44fmMAn9xGm4x3BCkas7gZoUb6Q6PCNV7pDMXmKpsN9Hbesrj1BEswNtYDg3WggKrXN5DRYkcBBWzvcmq",
  "key29": "5j59pfzftwHnpxfDSxzryJmrxHShcLQkGWSBgWJ5ruNsHf2pbUNfiSbG2TWohMz7bSV2gnGGPfYmQMX2aPEoJCn1",
  "key30": "4t137qE7uVRJjidXLHwGGmW2DaExz7tNxyfszLXnJkFwW8DBUjDM8tzUS7kxCZn1PB9QdgJyJM73tVqoLMbRoCSa",
  "key31": "4ETKRFY22tWJWMnLqZTBJm7V6v3pTa1w1CgL2n6oDbZSGr9gox7W78VBYiRvDxkVzvNHqcj6RnvXBBTGebhMp4yN",
  "key32": "shyL4f1piAUjZDLNgaSXqRYVq1Fusb3TGFdWRMa9PvBCMUeEdepT6mNnXW7zET3cuf7PtSD3obTVARhPtmJXQ6p",
  "key33": "3v9ZPn4eXvnSkeGdDEQPbfoSAHZiVaQkDQSAP2ziuZQheQMsDiJQzR3c5APtLfGp4c6MVNRj34qAEk7csPppzWkp",
  "key34": "4mn3HydYyJaMie5nEqLxxw1C98UHwCUJF7bLS3KKHHbMG3K1sRFAwGmCmbPjy9eTmNN7GzeGeR9XJDSCBvLYTK9V",
  "key35": "5JxqhrhQ7TnnNGFDoQkduRmkUfhdJwoA2QfELuktaPNo6D6cGgRnJkB4xXfcLmbyhT9cs7mEeL4v9pUVPkgNf6wU",
  "key36": "4N3yLsHFMMULbbUUkugcTfNx9VJ9kgvuehJp8DgvFQSZmSLxu7sBQJfAwgjzo929y346cutWJXQNUx8HEGqPv5j",
  "key37": "4DWZkMiEmsmJMvA4MyW428QPe8tjZpgpvMAG2Nuh1f4qbVuDtn7oABhCBJ9cFJ49JNv2pDS1t2kWJAe5k7ayt4wj",
  "key38": "HFtk8MPM2Nk478iDAGkHAiRqZHxpjxZta33qHy1umYtiNSvZAWHDsQ5DimEAGb6381jcB6d5A11hEiH5LK7xygf",
  "key39": "31Lta9PEukbTxr3QHqNdBKTZKpeSJZFQw2QU1duFxR61VeCHTroeyEw7CTh5wXPBgXXQtD1S46Z5nQaUYGwUyTQQ",
  "key40": "5GaaLKzXT9Zga29gLES3XwcydhtZ7rwr829ZJCuDzvzQf1GwvCo5gZaf3KoEFwuYxrNZkCaxD1Dhy97Hi48K8jTV",
  "key41": "2nqd4u1bPdk792i9DEY21LPPChTBKJDqd14BKSqEXvhTK3AwUGrkmS2CDGfyWWNFeHgQkCJ7boiY76on4HACDM6B",
  "key42": "3nEpBQdrBzAyMzngGcrafzqonBskEqoA3M3UrRyJP53PVHxv8saRH6AjQtzxNUoWH1ms1NvBCwSQwpHya1E4xLTD",
  "key43": "oScUj7GzYw3mHEJadgnrCYRxV8D1wVJ74HEfSRW3pQypdG3tVRzrd8fnVQvjbjPzWs1ZmftFLMZfaFQ27UNBQ1i",
  "key44": "4ZUeft9WosAK3G6XZ4NTzWVc4P19dj1TBiAAuqTwf7EAhnt1PhV87Azz9wEpveQnNJJWAvjyMzSVwEkKr94C9UPJ",
  "key45": "5tffabPijuHwXn2LM2Nn7ocYZbS4q59oBH2oujnidjLrFLKin5r4Stcxy9B5FVRR2cPbjVmqJdfhbuQHoJL7CEHH"
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
