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
    "5ME3GSA8U4W2A6LqWahDAgmpmzwDwny97UGDgE98ivTysY8T9rgvRNB5C5y51UHuyBXrS4PBnBaFB2eLutHa4q5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TP2AZH5JHRrjr1B4CfqXaCwJsmGcUWrc5UsdLH1pNdxxZ7cnXhUKAmx4Wp8EdPZmdzWTqqWiWEtvhCSfUTR4WJJ",
  "key1": "5p5ujMuVh2vgR3dSHKNytZdigyNXGafAD3GHy8H89mCMZbbCFkadGJAEfv6Yu57zNod68V1vpCPDqzDVFhmWY7sV",
  "key2": "SddS9Sv9qDuzsusF1VHrhYYAdRsG23PuHyQDnm17vaAJMkiczQe5DjnyvCHqzfB19ipX9GTfk8cgiQVony3rJ9t",
  "key3": "QMCfxufb3rYiek2t4S9GFGGzf2pK21vae4TpX3H4Uryt9vP21yonhtf27N9QUaG3xNHxo5cXq8tNXL7eCKAnkiV",
  "key4": "XTsP2LheoGWcKZ1NKdNLWVuEUwaUxuMCy2bSRVPhN67P5WktWW1iHxZNeocfo3wReEUKj9b4XWdevVgi9jEYwyW",
  "key5": "4g7CgjidTRmbGciZR66B8W8fgh7DiCAtxtRNTTLrxRBCFBvEHTY6nMTsKQqw4zWky7WrxqXYdQGap5zJCKPFT86d",
  "key6": "3PYzovDYr86TrpceEAdrmiJZW1f7HpPANPT4GreGWmZC7ehhxoNSZyLHjoFVoZJk7xbq1JNqH7DEfMwoPS59QCqL",
  "key7": "3LGS2CREwG9JF76DU5rgWsn9s1A7ZwNjc6TbxMHuerTXHf26P8Bwqbm1fYDgeubNseZ7eqDF5mU5XYjeYvedijbu",
  "key8": "3qja1znpZH6BRoVrN2hvK2QPE2Qqq2MBNRQA6C3LHn3aijkY3QfTZoDZmikSL7ueT5UA1ZSv9gsPg7vrL7nxtwMq",
  "key9": "4VnXTWfPC6uxiwzBknaaTsFcW7e9YJYSK9SbZCXAsHdRz9fDPUn9madjzemduEu53whLvDx5SG6fTgdzBCwX2Vqk",
  "key10": "5doVqxkRVL1JDrScwVNcgB3PJtAqxhk9UVWgs4nb8VJZ1YC96RMroRBhaVrc3pmHHFFhgcK72hBiQZMJNZaWnkVP",
  "key11": "27muSPrmdrjDtRfXHovubdBrZNecuEDxbbBfZXYc9jrawmyYYtKuSgrGWQEsFGDeBvaK7D1U31kDoJzvzxRGaSg5",
  "key12": "661LjCMWKrAmqXSjd4sq6RX8i3tZ8fdDtQ8Ahj9mzCj7wkebSGNZm4kEoCJEHPzsVnwA6dShsaKErCbJKjPAxZJ6",
  "key13": "5XHoL1L95ysRwWBCvPWw1CcK7boBudcULmNm882k3azGQS7FrNXN2miUZjfF7xaDCesaUNuk5pBs3WvuNxD9W28V",
  "key14": "2cq8zkTKqp8WBUwn8daMkwzT6rzcpKCxFZNQw1bqxVFckNajDGhBU6fLSw5gmou7k6hGZFkJ1VVafyUhebZ3Go5T",
  "key15": "NtsehReAE8Jidfr7fdS7VizuhxwWGWuKEvyuUp5qdd5KZSRjJJFYifBGxVin6m8mve1JyqwhthJahnZx2Qc2Nhy",
  "key16": "57kkNcQR4CRup8e66up2bSW68zff1dUxvcyBURKQSfytNQCc29ycxQVTNtN6r7NPyk1eYzvLxEjvhXnung7CYM19",
  "key17": "3Fk75doLdCioWFLMqSDKoBKpZfhRsd5cwJuKBQGCcvCGxYf9TFzirx9FJrM8BbyFWyYWBey5bb65qMzGocU5jiHF",
  "key18": "476GMipPsoMCCrVCuYHddmpnVgi8LUrheBGiobswkgEvLE69AWxj2ZSsiYN1p9iqSnhpQQRcWcwcbahSVdtoUZZi",
  "key19": "48CQKS4LtiPDeWyTujw3AfPiG8S4C7Qqw2RnYorizRRcUq2PEmc3dUy6rLgc9j7rHaoCgJe9X1BCdsYyFjhTjng9",
  "key20": "28nnRn5Z6DCwddZKwdm6XKFswMrgbTau4g8qnJS1ebALxFgLSgZV4eTEZoQi2xKBcZiop8b4qgkgt1unhqDXwsx6",
  "key21": "2hE8NyMwcRs5pAWe5XBNBTvekjbzfvZbKDpSG22DhCt9kmYKBSFNayyoSdbbLmTN4a7rbGqfVJZzsqiqdkYATXEj",
  "key22": "4UjMaYtM4XjFq6e1eqWT6wX8karv74poSDDRAU7AVJbNa7UGv8WaeUUDuMjWphPvXfTxCi8E6XkBF3NannrBrTve",
  "key23": "52Wmt9bF7s9AtCm94pKWnPP7htgjNbYbV9jMx3EFZGqHhhmbSncGfnxEqHqoakqBmxzhfbZxDpZk163jpFk3UbR1",
  "key24": "whqKjibB9SWT55UD2x9S2YV96Fnr7rCAAYJBthsCQVdV8QCmAWcrmFmzWH82qgrudFibHB2MgpGqH4VMT3sN8Mk",
  "key25": "4Li5aSApcqZQWH9qRUp4QMEw3Y3y3bnQ7iDTZe2Li9y3V8ywdoYyX8igd9FzWTKjPQerBW1Zywn2ecVzjRAnxxqB",
  "key26": "28gn6NzKnvUv476Zj2yMBHRPr9gkUhjCH1R54aLFY6KpbxV8pymqpoArqyX2Js1GH71NUPu6Qw2fJ1KfZZv8pUkj",
  "key27": "4aC65jxWuQjC6mXhML8cjd7Zps92EfvAqwv7gkiEdxMNmt697Yi8sVSN2uU7KNkGYfe3TeKoc1ekeqs3mqSfvnvJ",
  "key28": "2ZFASjLzWyJwLJsnd4y3srWT5QJm8i5e8N2FWvofXBTNi2APo1w6mCJK6xVuQgj511hNPhxp9qGzjt2fgNRG3wcQ",
  "key29": "4LyfQ85RDwd6msxgmkPjFZ4edCJvqKb2HVxhraQdvzUNT4SmqPV2PoWALamQryn74GUnEVe1r2Xu5xntaqST1T1S",
  "key30": "3C4VvBg1vxKe9bQZ9AwUtR8jAnMBNVviCu6FqEfupUvwTN5ZAzoVHNQDj66NS48aB8rA3NNXDRHtknyxWwAEszZL",
  "key31": "2ek32QQtBgdZqCGfkhoTznfCK1dpMwaHyRqwQx9BG34rdzjW82Re2sf3CM1h7B9Q1vCx9iW97SqbHJRyQGJBM35b",
  "key32": "BR5HZHPLn4wuTmJd2xR7VNvBhGQdTUuEygithYAg4DzKQGinrrKpzQNavAQQaA5kdRUyV36vXPsEnfvdLWg2jJb",
  "key33": "4nmiLvQvCpC3p5pMrGyqJHMaMZwtA37idZT1EQCThQizijcdXW4knxqeAqUhKTtiLKAM3VJKY4vHPfPRo4GLeFxP",
  "key34": "215nGdCjsgA4jza6zaRTKshyDd4hZiwN8tSKqFCx2S8v73MbW8yAN569cNQ4QnFUHYdHm5pcUs2hUQSuFvUtcVAa",
  "key35": "gzYaPRazb1doFEv3Y3MvhmfHW8He5AcVcqS3ZFTcR5HNzGawniw11euPK1AbPncxWhwTFy4wPBF3ugAEpycoCBz",
  "key36": "2Aym1wXzFqmc5o1f9jNsmdy4VAhJFuDV7aPAtufp9a2nKNWieYgUBxxW6B6J3tGLF55FDfVEC8g6CrFLGYHXEUwB",
  "key37": "3YzARYw21WRBDyMaXvae6kuZHYeTRCHxtnk6Tt5sDBHo2nkH8cY2jridabfLwaSP7G6Hyv2wxsopQox2vmo8SV72",
  "key38": "67ik35vPHzwjFLdbwSPLcCgcbgTtDir8zvPeMcoNHYAGb3v8p9RZ49ZtFb7KCFxdTrG2ujBQXXHQrWkCd4F3yEWE",
  "key39": "5vM4QWvfYE2CMxNFaiYZw9wa6tfrhTahN7rkG6BxeQ3FKfiWAoHCHisYuH8inT6oRAydzv18jkzLvtCbpDFVHBnX",
  "key40": "48aCfyfxy8Zu3vzwMhNi8fX1jGDWpoTW34deHp6zpFqQJfk2Vugm5rm8HSe3pPu7JJZzhn5RL6bCLFqhXyjVBWH4"
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
