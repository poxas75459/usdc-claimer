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
    "DBPD5xpa7bJMz2WChWVndbD7bmtKiBZm8tGJDKVMgStUS3JnCTUohGu53yHK76mEifNi14Uk68AVmEXE7QW4YwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55SLRz6q17EAv1ghKothiYU6Nb3JxiX3vU2Z8tZnWyPagWdWvEhdKJxB4hDoh8JFjAVLtF9KwcyE2giMJJ1CdoEe",
  "key1": "4iYVzsVVCp9EKDZygset4uwD4a4TtbTAQ1GUuQXSP9onJhR37GWzhna3QtZoNfPQM4Rh9mRdX4w78WQKv7bG147T",
  "key2": "3pus3XXi6oPQPNLrdLFgUZhLVBY8mTXuNWpb5xKqPzZHfDDiVrNWQaeFURVCc6c6Hpuj9dgkUTRS3aLo6TTLUD6v",
  "key3": "Yp2RLYwML3UUo1Uefjo6xJqKRDGfqmwguqsT34j6tSkFQ3ZXs1Foog4qqDgzUJDJ5SeXch1hfuwvVyBryM9pS3v",
  "key4": "54e2ADiZxLLjrFwQoLwaJoEGU49NURsMfUNLFiZLbpm4AppPgLWwW2C95q2KhUuPveWjndkAuGPTqbFXbUEc4EEx",
  "key5": "3ZXAV28dM2MN3azoXUd9NAypimBH8cdNRcUQzahTR2xSLoTvTcAooHq3hgQWjdGSP1SjfxQXX881j5oCZKp9NK2P",
  "key6": "qj37DVJFaPWrHSHdv4XQazSvCXPu13s8BvpasJf9HwSRTmUDR5NAaW19TZWFmB92psnx3A4yCYP7L8hygt6C1LR",
  "key7": "42ceeYQL4C2gHM3UCei5A5roUYVrmdrbJsXJ2YZXVpmSD9PAGbQaJxbQkpMaSKCpanV1fthRuapApPZqKNvrAyoR",
  "key8": "3hT6qov1BZ7xxtS7cvSTQ26aieCqzCDLLpKfQ6KpgtJm5wNDQEKaZvFzdYXscWCGBbe4jMUS133eSSpSApchscMr",
  "key9": "66HkvoxAgpVMrExBRni6ftcXDY4aVJ2LAwz2pcqG9ehWB7JiLkCGW57o4EMbKgJYzWPGWG6aYCkyF11eSTKoDd29",
  "key10": "3ajHiYgfe2W7KwoEQ8Hffv1WgWte7BcYucoLBH8e3BeAUZ4bMTdA1iwVizdeotTZFXBtvYNGUZAQgNcdmkLRLc9k",
  "key11": "5fofPKkhmzaKqcs1Jhh5CUA5CeyaaHC3B4gEovkZfL8Uam7CmWi2ap2zr7GyZLtsKpVoCur1V7hYj1CBZKdoKTvd",
  "key12": "2Bawo7c2ytQRqQLvmtiYsWuKE4uDm9fwxLdEJUyL4dcVQkBbr8KaQRzVrAPcfKmuh2JuRFV8bdD7w7y47MVc4zkm",
  "key13": "5MUxiUwRMMHMgP1kvDD5utzvEVeQqXmR3CayjmZfM3yLuEqzccYeDLWJNxq2ZgmdoFsuEV5AMG7VGbbjK7gikjMW",
  "key14": "47hVgtmmFPaayWjRbANF5WpoVcvSN6Ycd8zJRw5P8UcNqbjDQ9FVvFkSPAtdEX3ToHtM1hNH7F6WJho6fZyfYheQ",
  "key15": "4PRi1xJ8qiHFQExMxUE3dXKXqzxwBdkE5AGGShceu8diPSQUQkLBoRsVovJy8iz5aBh8cQpqSVdZkJyQgHTcdjiD",
  "key16": "3yYgZYL1JDyaeAc4ZgvQu6oypZ14sVH2XtLhaYC3SWjnG7dAeKTbDqcfpLaBHhReMaai78oK8ZvGbsQDFzZys4A2",
  "key17": "3ivu2R5Hqp385GVjsMR6p3xRnrXjAo4M3dG5UBmvpwLL41Rby9XHS8PupaJyWex4DA72kCdetCNUx3ar8qGSudQg",
  "key18": "WgLCovuivv7KGv1AyQ9AzMNq49RBZBgFFY59fPgcgoauhgU4nttQgKimNk6gPdeKHCxvjNd5JDF7G3WdCBAi73N",
  "key19": "4RDUFrmD6SUyupkRTfKZFmQ61Lh4HeM9rPLvQ2t147VeHShAmyozYkuBDd1cy3WkiwWMcA8GqPhHD42CPkfJTpaw",
  "key20": "2qqH7GVgRNnfWAcsJbzesQd9VTKgvA98nGtunwbC4zXAp7zi7xC1DRuUc3P3tSjzuXmTPjz4byxDxWmHQmEzzZAc",
  "key21": "dUS1JhiRLEhD8AoapdUXNcLVP3ufxG3RfDQiYZ7h6puZTr6bGCtk1szgqefbtkynmXYkNrrSRD1Eq295WbiANuo",
  "key22": "486qgcXRRgNPFJkXyXKF8xiMXPMPenNfgJJcHq66RVrhjJ6yyZJa7xxgGoUxXHbJW2sBJ8aDeoaf5HbsMyxhqJEA",
  "key23": "4qjoXqUvrrCsw47wEDvvRFvg8wWkck1dMrypWsJDPw4bSZBPBbppmPHR9zzcNwMimDMo5XaoSbQYBezV8osgifQo",
  "key24": "3BALHBUysPA3SERfHEiizJnB1u8uiuMmVoe9riMZHfyx7TiiaPamZYMo47SfaenE7Qr9RgHgFxuFrZDf5dkj73VP",
  "key25": "2fo7detqksVFo5gFEUBE3AG6uerc8Ne7u2yZZXYzWXyCggkBKUK9P9G4Zz1rsSBTDz7jEB81Ycn5FrYiKcoGxLVT",
  "key26": "22mDihZFx2jTedUjegPFHTRZkhkb76g1TvY9aBtPXq6BWaXCt1EqJAjHUCQbkGaCwZFKkeGvrZ8Fpm7MELTc1asu",
  "key27": "3nop1gh9zMLr29xP6wKKbxNzj2wTuVPEnxx3SWjWqz29a4P89UupKtiEZkdnuZKm15KefzdFZczNagNySer8v7SV",
  "key28": "4UmE4bapgrY6Sow93u6mfZLKhvhsfbC523eE1bfSHAiJQjwxGsw7GBjQyHTUjLSb7kqHNvP89oXidMZRMtLJcNPz",
  "key29": "3r1TZop4vLuRSgQ3m4AZfyRmra6iTLgXwvZ1PCr6pvEBAg1112JAaf2KcbftVWemogDRzS7k6YcprZdzT36XbnJi",
  "key30": "me1MeQNtbsmyZjmJempU8NmQvNidTfX8k9849NifJ9onPMHc1Dmj3TefK5mwrQfBvniSdiVofgqqKjDL1eZPqpT",
  "key31": "4KoWgj7T2o6BnnX92UZaJecMZBoVn58kUTvVvyiHzxZmKKndhKGLdA8wPDA5Mad2Kk1NWDgDwfqyKugkAhD9RY8J",
  "key32": "stEw3APfSujntwgxFBNryWQRApxwbxkzd5T5Y4bQLps3S7zaa5WPRHAvJPjBXrkDHUNohK7viGoK3A1HneY1BrU",
  "key33": "yT3rtTKu5VedHSPzAwi99BFqUAWVPojPChu9gJfMm2sJ6ThYYxAFW4FDjBXizsdRdX7znfrF2bHzJbcwSxXGGvL",
  "key34": "2mpfPccQmbeFKVbn5eRSjgktJHAjcmGATJsKpJd9xiU5xmBDWZ5PF9Ggo2FaS2RNMqJqunxM2spi7x5e6SSCGcwc",
  "key35": "63abgvyJRyF3KjZ5ygavid1A2mmgurbWSTxjS6vJoGUP4NMJnthMZbRWyYmixFgb2tjYZZ3mcCGQXqLbrpxafHVb",
  "key36": "5sT4aWE9LeKkLg2pCfxEgBLDBELQ2QFRAhnAaySTChP3uaptDN9yVQPW187JgsDQeuYRBfeh64ZAP2MezdzrsQxG",
  "key37": "4qTCAvScn8orQLHhUnFtAmDzTBQUPUiGbeh7XVqzeEdDEuT4gZvCeGgSJtgYW2ibfdUFkbHtkJ7vD2c1C1GMWAQB",
  "key38": "3194MKhhXLyvFyJTUvmeSuSDjbtCTqFuC38Aovsdztxt3hLzv3jro6Qg4VMQDCqeU3D3hzT8cCuaK43EJdmR4pwN",
  "key39": "3orUYMXG6hNdsJcjBQnwZ2sZXUDB5hj8YGj7FRLtQtMFyRodDQD1FvagkQo2PQGCJuVpW1HrMxf6TL471KdJjuWv",
  "key40": "3fQqUNgR7kmX9zkYaFKGCDTsVi8Loeuk6qfQ1mvDZ9Y5QdQmn1MhAn6vFzdWdnbBLCyYgBx9rwjvZfp61HjazJvV",
  "key41": "UiUM3ygvvLuHVLLZ5vCy19XSJT45SGjANqq6XcjdGHc8SGd2K3DJDuyr3rMXHhiWhaueHogPphFxoCbUS4DTDbU",
  "key42": "sCAjAPzteo8KSxY4RhzabwSzffC4eGHnuc89MaTHqD5ukeT1h9FWacUXpnRUwtArxjC298eYKYu8gC7MnMBWSWF",
  "key43": "47p7ogsvawKiQunyryZrg8wihNB9wzmFMf1Xehq8HFvFxAxZhfLeamDvYDX6zyfu9mj8GctzhrXvwrHdMZLYNBCC",
  "key44": "2nttrk33aW4nmQa16mjca5oksmUpbfE71Ghvmqa159FAuVSdFvgozEanNvquLPmCyh18DjhP7oJ57h7fY9kekMc2"
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
