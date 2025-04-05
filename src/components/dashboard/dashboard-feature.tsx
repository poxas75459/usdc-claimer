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
    "5neWZe7YShgR54fXsQ6dSmzX5YzDLoVLi1ukv5mfeJoxXVe1ZKTcrcdkmu5uc3e51gQr33Ti4Yhw6ugNYJSMyi88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZDQp7cBiY5Bf4Uns2KuPsnH9dMgP7osjoYVJnyNYXr7orqRvTDjGkiSFa3D62YiyCHRPs9NPFsZwqXvUSHeQDyr",
  "key1": "R3PkVBZvQvK5onUnogVSjKZse9iPAY6LoYtAAjz8cBdtJGzcDaeqjqeeFFR817WYADccbbWLDqBDm1sUwiPj7VR",
  "key2": "2dhteWbh4h5sHHQaN7MV7jCntTXDinQQG4i6XKtMuQfeEc5RxQtUVpq27E4geVou9MjCeCnhK1FJqia8n5KHDCWb",
  "key3": "289E4nsX2rp9YQ6JDTpkhQa1Toq9M8SuKRyjHAjTE2JbTAzmLwNESU7U6yvGXWa7TRKKpeLBYfFa5cT539SGPzYf",
  "key4": "x49WM4JgqdjuS7hFUux6W3NhAFmz44EdgfReSm5qQKpZcaMHq7X2JZfbbdXx8y2qeKcRFeXBEaqr7TWs7x1bzUd",
  "key5": "2u6tauzM8MBrpA6Dx5Bojdf4WHFnX6witXgL6desKuNxtZkAUTX18JVbk8xRxFZfnaTogP8PaTzXFk5nWoLjWgd9",
  "key6": "5eC2DD2quMru1QmR22mNzhEmhtvyqc2qxdqGqHKmamGxj5Mv64o88hytCJ9vtZ1GdFApspyW3AqUp2V2yXcpep9G",
  "key7": "6taWjF4oZUzAx8724rYB21yqoUU7zHjkiRfN9hDPs4Fb2HJN3Nac6dseLV7AdNoobqXdPM5Acx4MHXkArw7Mis2",
  "key8": "5f5oFpiGYJn1pmpw1qmKuRbRFQzyg14DA3XhBzxiSTiZ4ogH8k34nkBWggvmfVuF43Xm6Kish683q7gR48PbzYnC",
  "key9": "571oi5uwqLhj81NoZKwCYkHv3gawZKMCsrwT6XpWL3e7F6WQyoMtTQhtcXqjzu8q2EuWssGuAw1QazR3trNcbPLU",
  "key10": "4m9cRaEgh9wzDJmDGJRBHDhLMTTvrTeVuHVx7z8fxstQZyF8Q2wZJzPq2zjE94KwSPyiXHnXzXeKQVtRg9Erowx7",
  "key11": "297XVmEw3Vcmo4q7nC45Safb71jP9rKyLwLhzTxHr1zuMTLH4VTt1shorJPJbgSgy193Fj6kpy1tyZzqiUNC5cNz",
  "key12": "3FmXcMaPf7iMbe2VEgBPvWkjonwBPxK2fGmJn7Nyj4ougibtTv3BeJxGfo4AdDvnPFapn2r1wcuJVL4UKU1d3ZUC",
  "key13": "jneFdtnmkwtcnMPiezXKbgY8XiG3SB2gjmFYMR8mw9bnKyuE5YxXSemhoHLLGoQVo21Haz8bYtcWJbuxqJLSBjB",
  "key14": "5WNCDS15BdeVirAmnJiohSWJnk4YomPb7pwR3dno9DLoNvV3WmmCp1JzHKyxoZofzZbofeZ6i3MozEQCZxLA2pDc",
  "key15": "QHxKru3UvwTgBVoFuVhMYrPMa4xw12o9bDnU1DHvUknorpAZVYH8vsWJtLPToYRavstWtVoj5NmtPrpRjxyzhen",
  "key16": "56pjXmSEPsWHZZv5jF4ce46evf4oXuVEoaouWv1uyHziXonhXPc7gtzxVCpgfu6Ff3sESMfUT1c9qZb7E7WWVU45",
  "key17": "5Jskvwj8uD1ExFKfEdUaKxy6eFr8syyLarr2LTahLibpRvMBhQNhXTHNBjaVGhsxMEusHz4jkdS9hHsBwWvty2y5",
  "key18": "4gtwtQsxFsZXUtkEJEaqKw2LNzAmo6u5atKq69vAJTn3tDiamkttEojvkbJyvKydkvgUYby2gXU7yxtvRTX7NcU",
  "key19": "4kGqhL7v1X3hsqpkRfVjg4sqNSUAS5EmsSUNKxhuUm132X3vZBpDsq4erBfQsowsrKi2mVhsh8aUBpKjDMbh34Qe",
  "key20": "3UquhtnP5sK1bGxtHQddaSQEb4c5YmmrAxE2qp8Lq3JBcEgVjEqZ9VzN1bxG1AQMj7vb25kagQ6Xto6E6bWeZRBK",
  "key21": "ZfQUXc1jVqsugC4QwvZaLZECTHq3hjmzYpJko2QtrtBtpvsk8CMJ2GHppXjb3k6j1cQpkcocrrrs1kujysZn3f1",
  "key22": "4vxH7TbUhVYJUzJN3Kfb6uvZdtbasEVPxKtGuFNmiX2DwA85ShbZ1EewjYdn1B8g71UWMXT5VX1Rc2LZFP3qXgPf",
  "key23": "2ALbStf78wvtJ9nMn5AmhhHv83Ri6ijzR1bM15NhLg9KhVoJTREAreCizsM28yUTnZNpzRUDdZDKHEFJ6icLJc96",
  "key24": "5gvPkL4R5YaSM3XoLM1LhPPH5kJeK3U2dxVqarvYmzRhXRtnVCvQd7jQ2BnceRU4pVGpspYRBBapq5FWxp4TE8ou",
  "key25": "3SbP3676QHRf4F1TQujtkN2nmbq5pqHPyvA49MjwXLkJQabWqY7tXB8ZQwGj1THLFUH4QZMDwRQNzRM42zECD53J",
  "key26": "2LmYjLQ6he6KdgSDm767PnikZZ4keGJwKBkcw4coc1Y46YBesbdALuW42G2A4jQx2unsdStuYVryqbrX1ifKPdYe",
  "key27": "3P312CN43oQDPxz1M3UG2bhQkzdCfVwrAhamnpKzhCV64sT98wgf75fs1jTauyoHHMrLuQkTjSqHxXSMtsYvFSjh",
  "key28": "3bE5Lzh6eNFsg9cHE89hURYd83qTCqwoPU7XaH2rmw2bKq63t98CntsghukMiPaJ4cNq2k6tDhz9yVaYX6T2z2Hx"
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
