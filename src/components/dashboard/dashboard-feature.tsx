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
    "NSWuCjBp29CF7LWGxe7nVTmn9pFuqm49JKakpgTU58rdaKEoiND6ay88EtNWaD2neLfRxHfAyM7JJBZJfd7BZLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mGLYsmSWZvHuUshFgwF7i495xhouyhXHnVchdiiU17TX5F7MGagf5JRkm5AmJLVSRXGnWVZNtVBerFpkvF6ta8M",
  "key1": "4t46udsDVjZnRu9mgikufyeTf4F38wFMRhjBr84C6fAhqpsi9raEVBP9MDuWDtBnMwj4xzPnnmxsBPgcHiEkHNMt",
  "key2": "YufhSFrpHVfH44eHfoPXh7shMswbzjhK2ppiGSEscdCcTb3JwiWe8tfzX1PXPL2iZCNhXVPJXC3MZAgMF4GMkMj",
  "key3": "5PJy1ETnKj38UP74Df2j82fDBtLFHDLUDWN42L8St5XUJAhU8gc8V9PJSiLy38uzFjmnuiGjy1NNfJKeZAF3imUW",
  "key4": "2bvQAV91tw6oRNufRWX4xuCN9tNkvnBngtoUiK5RwUBskaFdkm9nLccXJaCxQ3rFz82W8tFJ8jDb3yQJdhobYnVZ",
  "key5": "mwfS3ShiyMiWZMDV12ZEBkngxNmUNrTP4tLdY7wZN2FSxxNeFuPgogoLVtZAGZ73xLXwYn1ZxwEbmichfkN4mtf",
  "key6": "2qGZFZXorqaaG6CTzgRYsuW9nmv8yoxJC4Kysa7M5xudrptdLiw4q1hZnJummBFU74crz32HhbU1ezyFa5E8sUkh",
  "key7": "5Dvdb3a4uWbLoAyHsmBZbq8h9UaRFMiL2s6H1Ki4era832UwpPsbYSrprFYWaYikd8qHPFCoeoYEcufnkSUFDqzr",
  "key8": "36PVAjWTzsfCBwVvuNRssKu5eos8vv7kpYCr9kEgLiFULrK442zN93NRJivXBtxXKrJxUR2XaqwqkEoKRuTA6EJ4",
  "key9": "4qSzVnGDeRneBbu63pnrykSVbRiGxV5UXFyyucrnRA4zCXCjapf1LkS4traDM4FCfjRADLqaLTt2g5DRfDidTXTn",
  "key10": "3a1e7cdRKj1o9p6PXeBgKRC89biRX6KTzY7eASfsWKKBJFg5Drx9UoqNj9hNLbN4hYWTJfcRpYa92L3wF58GQszp",
  "key11": "4KV3nJ7whJdr7S8q7Mg1TgD6KwaT2o7oWzfK3rRFBEVPr7wu7V49CBrruYv6hb8njBXp1aFMu34qC4FtNVpgp9Qs",
  "key12": "4cdYxQXe8BGrgjUmVPgAX5Jz1HCtP3aVQkm2etPkiPNWznqsY97oubNb8JPzZHHXwpgN3opAP1F9GctKADa7vbhE",
  "key13": "21NG2xThGMLGHCxGnqpnDNYiqQmQZy8evKcwXZxi6XJvCJZ5kfcB6MwrFGQX2MjxT3HVxETx63PmH8B3Vb4PFnhb",
  "key14": "Q7m4YUDWY6NhCM3tWBkgiEhRvD75ngvmRygUhVkaUG9us5SPjpzFnLVXsBFTdaB6izR2FVPLtJFBc7oTLgJxBNQ",
  "key15": "3Pzh1HQef2KLC88p9LJ3wrW9UFvPUBHeXkiB4ssHzrFg9w98iirSrQhyy97rLfzFbJx3RR76nsUUkwUjiDVyLfTu",
  "key16": "2a5vEKFzZ5EntLFBjTLU3UjcBjgpuCAsC31dGEwcxEXmE99ig6oAb8RNrSpzdP7cTzkbQ15Q9DbqfDEzWiRX63US",
  "key17": "2AXHKATEWF4qSoWZF8kNdBcGk2b4KsN112rqwA2iWysbch3WRNzaHn88xh2JxXcRpP9MrYPSY5c2o63yjEtHQbjH",
  "key18": "4T43n1yuvCBwFZTECteHoFvBS7XBALKj7D3AhtVjZHh1VwZBHX3VDRGwKwY3tMYazH7xyCyjRfzay1MLuJ1nvjcb",
  "key19": "45MoMNJLXowgRDepSNRctQxiVBfhSKdCMPVespTuWd9jLnWXaFkRsdzhqq6NCycnc9uQBy1iS1cGmvK6J7tK4qNz",
  "key20": "36zRD9UDnUj1XWWWBBRTkDparPoCnru8ujkeZK5B62QZLbsDMc6scBqiiu3j3SMCojVUijQgaxmVRWhT5R6QCqUC",
  "key21": "4L7iDGAAUKcdkT6r3Up1KfPgr9C4CEsLzDtU8h7AEH7xN3218viYvDbKL5GJP3F5FkNoda4Si2dRiqon6xjS31y1",
  "key22": "3c3eQMiJpmM146YxRs9vGnncdHVSnJDaZr3qfxHja583LQTThoR3wV21DcP7Gki9UVGkLh8MV6mzLkSSqqhmBhnJ",
  "key23": "5xnzb2R1y28KoBnKe2DZeS23xe8qTLhXWJ6BoDuRFrx2SPZuY2KnDBF6uHfK4oSPSqVb6qSgUN1FcmaDHMfkmpDQ",
  "key24": "465RXuC4oFrkqgXzMxPz3EztrvKcF9Cei3LzKHkp5X1dSBPUwPKjonNuAzEcMQ5ahNJD2c5zLcUvnCpDjCAroWUu",
  "key25": "5m8CsVpStquG6W23jMfLVJK6ddcadWFHtihRJLLaAgHNQd17Zzujk5h21vgTfDadRAdsdgRrYL7SVZCQgSs7sPmf",
  "key26": "5TGfXomUZqe55epb7Zc4pGSwEYAww8NPXLxgQx1CqtYjzibNQp7tuzESJ2aeNhgGDP5PYpw4oWVLrt6dYxxnkZUR",
  "key27": "3ZTWqMuLhU14NGTgwJwRKuXajDsZGKsUzbCKxL5j6YB7DyUTNYM9jePUFio9aNiHm51Jzh43tfP6jy6P75pvRopM",
  "key28": "2bW6F9McaBcV4Pss9zZPYeKyE87AfB6YsXN3iQWPUAjwVQug6preh51F23dKN9BTP2cug3zWUSUkDrLKGMcLfDR5",
  "key29": "6M7zHdoXYbaqz9CVVNAxAb4wvhrSRRyENqis1VNzYH33n3QkDwymgfaXyNQvmkUdjYg6TwaJ95GQ96Nup97hCTp"
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
