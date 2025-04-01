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
    "51nX72b4YVvQ7tSev5hBFs292MSRDC1sEpHWyxRsYGVqi3C9YaVRhYkNyZ6SoV8Qt7PYQfBMR6m2E9WGxWoXD9fU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YeSLiJGWpf2eQRNtbWQAQscuwY1u1gkHEmRq1hSm8hcNiHvz8YMgSqzcdxfVWn7bLQV6U2DiKucUG5XryJDRf6i",
  "key1": "3EEVcksLKfcqYca4JvCBpHWt64dNYK9fFdqKNAKj4UcpSWSwtsSxjEK4MVmGiBRFpuMszN1mWG6TpxZinRg93Asm",
  "key2": "3beWBAGzpNMx4SbYe4RAtGQezVznDRCt8XQ4BQt2EhoETUNcW5FMwpuB6fMK195Qj71xaJz73UVz8kcrA4FLnWKu",
  "key3": "qA7xdt1LBRsQx3bVgRXPQVHR46yvxp7kNURWfvwDutfGdGJBYdjMWAC36nMcSzQk3agcJ6azJ37K2h6A8PMr4vq",
  "key4": "23yLEnWFaeHtejer8QYs8JdFySKD99Vmd3vGpbMfE7P44rwZuYy9tZ63nWcNAPG7v6B7BmiY9LgRDAxpc2Kwqxhe",
  "key5": "3mEUqJYSSqLYzm6U5hYaw5Gdo8ZH4qRQZ5oepP3Ebn5wDqv2u53KzPcwTR8LzESbR2t1FrykgrKRfXPRK3QcHFoj",
  "key6": "5iucy42ta8MYm1YEDBfXWvSgboCocZZR1SQsXr6LR3zCJYFJ4N4EsggCRA5WvKBGxbzmzwDy2po7Y7DJ6jiMTSDw",
  "key7": "3et3jGp73eP9FWc5grQmri5gajAG76iD4WkRH7kEht8NB9xA4etFqdXWETJWnd6SL3tP5hvFA2UhR1etGnF2K6gP",
  "key8": "4PAM6Po86cRqFAzh9GUs3yotunispkoyVit8yUULZRWnkVAxdTqGqGtcGTSyxGvyTUwbtPLT5pLn28GnZjR5qDoj",
  "key9": "nkH6oJ5gyCPSaRE3ua7arTAwm2FwpnnBG5oMb4PaQqs5tS6tzVqmYZPyseM45aFiDvBoyzSC7yi2tRhWWE1njLu",
  "key10": "2UBqS8Um5XECVebEpAaVCqhrpVfueJj92T3cPqyPHFk9KgNpp3ntcd1DXrxRPxf43bzPavorYFsZ1QhRNZBVhh3g",
  "key11": "5K9wQXV7kaBnWQDPN94qdaf9yi6oWDjBKtnaV4gpR2z2yAeEAxdmY5Vrb225Krgrzjwe1Etc7SDtPoDC8tG1ha8a",
  "key12": "3cjc7Qad4DdL4NKZqrNfG3zc7F7oYEbSaDoyHJQyAuxMh6y7a4FWZGcB7gGv4xMtY1iWHqe1cG2xMWVWA13f5kHP",
  "key13": "4aQu8eogxMSeMuMov416gbPND6jYs2mjLVSb2sb7fWCKEcmBtozzKVQGiJ2fzH2NQZopcFpfo3tsu9Bf38bukXa7",
  "key14": "9Cgskp3trM2KU3vAHtL9VmPvNazfiNVsH1ksgKfacs2vDZkicSe4vkDE9jtrs3PBci4kKUC51LuqTBE2bQpB1DC",
  "key15": "5yeXCnQsMq2PatBmmMqNTX8dt7N68R2hERt4w6e5LUtgP4X2Hgw5b5YmW3BbBW3UBwzrDjSnXR7GR3EQpjMz5ogX",
  "key16": "4f6H8igXWEHbVXeo56LqMo16T6WZUNP2TAkiMSPxrWqedrBkPPDn9vmiPp9E8ESLm2PTTU42nLaWrxeNsFimAc1",
  "key17": "57wFx8dvCS8zd9UDi6vHApRqEGpHFdD1xrekKyeW5EXAvgb5Erx1YN2txT3we1WTwoSgJzkNV1zVX6amw4RR2Jt1",
  "key18": "2Nw56hdTphdVZcHFVkhWVhYqESyDgUcJQvmEv5ehCQQrD259Q4QhhpfgrCGWU6enZ7yswBCN76VSDxYMtCjoThmb",
  "key19": "4WX6z33VophU2Sr1C4Yt7zeZfENvr56KSBMWeqgUeM8z3H1xfjj3jpvv5cSX65USDSUoQ1qn5kchvgwWWCBbqmGu",
  "key20": "381DSzqrniaDvQXk9ZBGM78gJssncmDQ4LGWPGgjfDB4ysfXLbEkkyvyJB33rczhP2f3zretzBgkz4jMxF3Fxe5n",
  "key21": "4Svbne6UiD2AkZZC44pTLNrEPVD9hzJb49QkbP2KSjQRzbiYQHzK33Z4eYLnbXme6CGhFohxg8txHYoeViWBVy2i",
  "key22": "3qsetPiwec5nsT8LhXPEWjjb2ZEYcZVv8hUj7QMhwRMVVpRXnTGtHsRrb1wBdBaV3vpQd4CuhR1Q9eyVCa6mjq4H",
  "key23": "4LZXHrZCBPP2AUVSDUfpaXTvNUM2ULBry3eHtfo7uooSJUsoq1JFbc24MLCoBTEuFgGaw9mMWcftan9D6WWKaUjE",
  "key24": "5WsuqdFCW5rv7bqKkrkcQ6AqS4AYm4w6Mpn4GEKKZYFexzWYoYTGQyHevZym4aog2AxvXXmX1xjT6Vte2ghdV2a3",
  "key25": "3tsQeFjeJfaBSyu5EAaWXLHkdu6YTsFxYqSnUTh4HrHdm1XP8wTLPKmZVhng1R1FaWMEHLWFGVFhNYX4as1frbmh",
  "key26": "5T8hwHyYHc2siCfQKmUSP7EM1hZ7hSrYEWHSRYiC3N41GPABhXDQEYZ5D538SJucHbivDyLzNkPQFwYfkPurVYFN",
  "key27": "23v9YANndnCpuUyzd7JZfP12p9cBoGSnBQnid2TjtLZpZGYMBRRBnvSJxLnTQbEgAjJNrM8aGYvvkSgPKMQbUNw4",
  "key28": "2NRQXiRdZfavH7ufxpyDcXV6m7eVRj4WzV9hRR8i3rGpVa66j4HfcDFMC6PAEuJcvpdpHkkE2ybrssuJ5yqoBv7X",
  "key29": "2VBpTgteWXH2h1FJarRHLDpnswVHqG4chs7kmX7R97hKhZbUtvmpDBK5UV9W51XpVmGgSzrM8AkKcG4QU2HdWtKG",
  "key30": "hWWt2YuLbuWzrqJwe2Bfk75aN6TdVBJ89YfqghefV71RMT453n9DYv67cohsZ9xwPui92pcUBxEgrF6WmPrUrK8",
  "key31": "3BFjXVV8KUd5TyegKo1rSLQFvs9iuq5XiKzuRmdZrZ3ZNuZaDiJEbgf99VoUgRinnXiZJM8esQsJPZfVL3XD7mBj",
  "key32": "4rb9xH1VjmPMMTeXDa46AcY8W2n2fdbfR6y1ccKwJREe1ovxyv15qKdPN1LkSpwNLvfNmBveNxBaNfuYDauBiHmC",
  "key33": "4tht3xckPwWj7AwhHNNXNAtXXBF7Ap9LURyXSpZA6NbrsjjQczQUSWoCqK7ejCQZi5YrXJ5Cm3CGsm488LZaPCZF",
  "key34": "2BG98bmsgDQkUW6VCjhiXc9fPM2gb4DufRCHyLtJxMZXkqYU1iXuUJMeCMjarYntyMdtZGm77fUu8HJ6n4siyrYQ",
  "key35": "2rvUhvQ7HmJdTJmx41DFJUQyZuoN362gJ7jbNbaYqZj9ujkD4zW49fE6eoXEv282ksNagT426soCcK2LhYPLPvFZ",
  "key36": "1TJsuByu4ND1V2uuo2DMsbTW2beEagvZVK46X2yXNam7nsLXxmigX3Kcun1y4RpGnWdJaPn528cevSW2fSpWTtW",
  "key37": "5opzbVbFBrNsazKbVYK92yiA7wS8mjbY4TfwRiJCXuy6SfkbGNHf6uhytwoMCCaLBjhSibCfoR5vsbeQzgzEPkSJ",
  "key38": "5zzj26SxAMPTwkTwXPugXLBiRjJFrfPaagLiDXMUdy1efsPTvC9wDj4boQncf6bxuMwwa47qoep4X35dVKuLfZg9",
  "key39": "38SxieX6C4iM7sh3dBc5Wm8YAqhLnhLDunxu7Y2miv7SboHm7eJmY2YzxwnHoa1jQtX2AMa7UGeJF6pqPZ5Aqcj1",
  "key40": "2wnb8Fd9aaAEXnMuamZtnUQPVdMfZfXw1R8tHcKvu4K6vAMfDFPYrEVw5iHXErmz1gzZQ5uH7M6TtnKgRpLD88Ex",
  "key41": "5WAiXi39yuzdMsBC1fPpePLfnZY9nMepR2DPTc5NEAesWMPPwpGyF5MFkMjXT3764jAvZywDMp7fUiBtEHZEeFgb",
  "key42": "2tGbPuPQme3HXuDMTjNsCqZWQpEpU5uN7Fv2Eq21ovvQqMD9PWLjAmCRh5tNi6TtTWBC8Yeb6hVqVXhPenDMoDDm",
  "key43": "2q3phiXxi7wdcoszfq5qZLMidGrvaSgZxXtkY4NrvpAKPpZVXDh3EzHSBG6HJjmoMRLWZR9Us9Vj3cThrPh21nBs",
  "key44": "5SWzPojqbPEAwCCNBDrnQTDgcF1WLG1FJEvbaPYUoSbnMMrZLqXkoKhrtvWfS1VvvYqbhr3a1UhDH1DtmeqknVhz",
  "key45": "krKqooWM1fcffPrTkxsj7ai5aYyUDRxfYi3LsXaAFZxgG43wpt45fn6reJ1jn93YczRJfKeuysv4kzi41pt4Sjo",
  "key46": "27DFXhrCv9fJt6wcMjUBNW68ZLU5pJSLxLREBDnqKu3YpwpQ6DL2F7xHUG6kbexhgQcMB8R3MCtCpa9SEiGQ5j6Z",
  "key47": "c4sKktwb3aYUKUU794eAhvjxWYnqDjKmpVBosKygBKNScmVSATV5XvwmCH8o3R6ghhwoR5tpVZCnWuCgAga3Bc3",
  "key48": "2JWyPep2Xv187WPvNQvkojdEWbYQz6RyUcCnQF7w24JdVtGrruXzte7EdynyuLbMuR9znFaGgkwErHXT8taogzRz"
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
