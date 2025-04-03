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
    "4JQaxjo8fxbcVsFzP2d22encufQNUXvoYXjzveiQQ4Ws6dBQ1z3XdYSkwoaut7vvCapnecaRuuyurHNDB2GsG9sA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wsnzfxH7aTqCbwM4JB6k1SX6HHuQqQKsurM3jgrBg17LkfVo4cPpi4apGGe93PmkMa5miTz2CKxcqb6Vcp6Rr2n",
  "key1": "4bgj4Es53daVygAuQNtZfvbNeyMXDG7Qa6HskTczHmSvYipnjr3p7odNKvkipqRdVfSPAAQepSAWQBtzzYMPuJSC",
  "key2": "5zSEEVQ8aUnWyyKa6dmvSn8SV6Xe1YCyRLfwrmN9GhxgLEYN5QDpp5kQP1T1suQWZdnumBqbqjWj1atxh1NG8Sk",
  "key3": "4x87274FBBwNpv3wkbbEL3cjHM7qgbGNKFvUJ2fmZ8wEsjUYCxCv17v4smK3kTcLiyTSsk7prm4rHxmqnfF5rNeU",
  "key4": "2a5thM2K3Grjba4hKUFJJmofvAQarVGvoyoaYNGayDM83mW643msRiAww99fu3ztsqfhHyVQvXUGDjbHctJsTw7f",
  "key5": "4irKJgpsKmf8gfCHnNPH59AFUD5Uk6vVSJ7vvhdW6Wki1p332bro7EJJmqSeH2E6gUJ57SgHMDPQp2oSryWnSuju",
  "key6": "352CUYkQHsDJVmkerQDbgEZ2fswcL4DTJqTtCrDUYSuMVrY65zu1eiBdgAyEzkMHo8457DQd7fMfTb5p2MkM6RRf",
  "key7": "3HdXeq4yh6LN9YzvYbhVD4F3aQez2zq6ntGcTkanem1Nt21DnNVS2AgyLdmD8ECjiVfx6KEaduYPexyQAUs1Hzqy",
  "key8": "LQtDVfVjVD1ATTnWenYJimQ75bRrpiRcV5LZe1r55KFQn8d4pgtUXZmLcjenJSkkwU7FXCTAqVUCdFy2BVhdkn8",
  "key9": "433kngNz7CvVpf4HhBb7fSmNKjifiH1dAu8F5yd9TfbSHUiftHaZRxRTfAmSp3yH4mQDacdjMxCjyRxrXaZaQXuP",
  "key10": "2ieJrLDPdqiFNNoKwaJ7wqzrKtKzRibaDUC9NcczMQfSrUUwgXeeGno89V3T3v32ufHLESVBfVTeLP1skAGunwLf",
  "key11": "3gr94cC8fxnn7jDJNt2iM2DB8M6e8Ja1fT94wFyQwqWuY2j8Bcc8FjUupX9yFNjC3Jmzv7aaQbtKHiJSJo2sdheQ",
  "key12": "29UPQwZz8WRfqSuCkAWEzgPkhGbRDN8nmCwVXnZAH98B7NArvxoiLperXZ4iqNvaUWncK2KHmRKA99ErtA3deZi2",
  "key13": "4KFK73ZFatr9vH5XNx8GtDyfNg4mS5FHYBCNKLxUsBxYonuawM1LrCRwdkvF7wjt2tPpC6Px7muCCRL7FtyGDA5p",
  "key14": "62gJBSaCQ1yEAR41ZSzPyP724gJza5SEeKLajqc9KKpzunofNHXzmGWyv7hMcZ2z4MkxpM126GVAc7FshbWyD1cf",
  "key15": "cAd41A7bNBx2oddmU9QSR2LtGTVBjSgNVKRHy5ekYbrt73Y8umB6NuQBHkZ5C7BtcZFheD9FgkPoJ4rnEsMxDor",
  "key16": "4kooR3vku4BTaMVaHC1Uabmywsr9Em9ZetX5R8zYdCKeDcewBs8QUYUYBUhPUR4BJ5mHQTqzaWMxhyt37ct7E9Zj",
  "key17": "3gKNAkpUeMjtbEnxsq6f6ZAo1QAfu4Zr96FjFqFSetYMGGCqEAuzDxF5nCfAtKBEQ5TXFE3xbRbWKXvTp65gsW7F",
  "key18": "2d31o9a2yk2vHY6Yv5DFZCjfZcjKUJsCZkcbt3nGvrU3j5T2HiYft5Xkx3kgpezzaAgk8La8SAtsTogx8tViMYd6",
  "key19": "3PvowvHaCsTxsnj2h3RD62DnW2bvz4ikk4ykygLMpjCti2AjZxzAax9C6yYWVzphAm7o4Wrpbb1VZbSwPSUrPQoD",
  "key20": "2Szqw3LHLXMa99G8iRdfcZm64wKcfZLchJ2nYPubfTxu4Cy8V8ZHwbMicBqjwa5Sy8jbU5dLkNc68CUtttjJwCuu",
  "key21": "3Ne9z13PFTZ4HH3tvKhtcYQzQposR8Q1k9ZDKfPha1izzRFYHLWeMhCoXvBeEQ2X9WiyXa2gvK1rjhxTfZUhz1UE",
  "key22": "2EvXjbf62yQPh5DJnFb7SKHBi2VZ4xXKhVhnmc27mRufjeT7R9xLb6dgknbGDiP27sfm8FJoUPoUBDqyiEvJKCLy",
  "key23": "4zhJgqWaXfVPniBdGdGgJVn3bLQzq1L4Q5XBokDfQXWL3BGHuUuJYQLbByHpLC8Z3hGBSrVtpq9Mo8KAV8iCDRLF",
  "key24": "57J2BZZZ1zEpNAuRbMxGsbucprF7NVKPXB6e3f7JecUG8mH1WV61uU8EoTpLCghgoycspqr83zzABDJHpYtRVYDN",
  "key25": "57JsdyTg7tEXCBpvafeagRLFA6mSpxxUGg56NTTD4t5xRviUoE43syL4pAnvnfrJ8SfGtddkgnWfrSigPfLB367S",
  "key26": "5g8w3AJtTbaxWJWa2nwbxbCqxLatnuJ2twvaAPjf4VpCemp1b5KgoUE1xzxnf8Cx1GhcJr2ASCjWBbhbZFT2vAyK",
  "key27": "5vWPmqK5GtQWU9ytqeJ8ZZLC7Gx72vmRvifLiJPQek857tLx1jqAE59xbvW6pwLU75Edxt2EEoNtKdV5H5fXnWmN",
  "key28": "4fn3NtsZzV6jHfFV1sHmF496RarHMfTYsk9sdZfeTheYhbPNaV4cDCSQ9YAhiYvkno4Dm7bjJyQp6jsGMVhn73z8",
  "key29": "34WuHp4xGC32g3JGvQVtnNULXevsAqe1BBYQvfNkaAV8oJ6cc1GSgEEHUHF6F3pm3ZWocnnVgZMKTB7wjAr5Qp2W",
  "key30": "9E8Kns8CQVwbbXwPfTrvbWyzZkwHT77XUzAkN9JZuaXW8L8UfUs7T81cmFPnELF5nsoKBtXmm9gDTqmHnhvmEQp",
  "key31": "khhZysDzUMD1ieP2CapBX4EH1gy3itYpHuZC3D1yVspsaQUkh1ekN1nr1PtE1WDVBbMQxobdTgDiVpneQd66Luk",
  "key32": "Epy8yMF9684ZMQ9vJ4kHpPzVjdmfs7VCRYchzAawR7E9Gs3RCdsVqVrrYcVnVRnu3iBPs6iJ79kNZ5PAYDLaZ9M",
  "key33": "64vVTGov8AsB8eZ3hbHxBRjTqsc2jDmJtSmtfpWakgGevYRH6WRBc1GkPekuyaxyK5HK7DujG18VjjZAZRsg9WXb",
  "key34": "4EKf9cgcV8VSpwR5d4Hhs9dtHZ618hxmKxT6saEZ7uM7Meh4PNczPh4DqU94ssFsrCfFo73wEtdvZrAsvJh6b3Nr",
  "key35": "4HMmJg5MCmVk9xSfxLuKvHRZhMMGX8gP2eXeCPL4HQDwMR99wQKHHmbexuN3XVYdwD2HEkswLub5GQQWRrcsMAfG",
  "key36": "3ZctuJXSjwp6cAeEP3krMJjULnSj2iqjoV1WqT2ZozYNuym3rc7rFz1WXX5P4zt9ryghhx8XpuxwBPKKcbjsVjgG",
  "key37": "67SnJa71GL1omeB7hHs77wQ3SModv93HYKBiRmFrjsJPRuMxHADRooWpVsWXPHVByXEAVTVu6i4fPHtdxQFZxBLs",
  "key38": "4xQMYeCfYGVi5weT6UCmcTomYvaoYiyRytZ4ancYvfPLdvZPVdjvqyRNDYc9WiqZQ3868iFVq61kbynJFBvzxSAy",
  "key39": "2Jmkot2CZzR4pbMtzPKaKMxedapM68qDQhLou4RYwPQC9PAdQsNBCBjyJLK1FmwrsjiGQbA8Y1xyRsHxz3cmg5mR",
  "key40": "5RSHc344ud1JZzP78ZRFEa3h4qu6ymqjNYDaoLQfUMQ6NMyJDhmxutibvc8yxKG73zARcW3MwmYEaD3CDNLb6mvJ",
  "key41": "57LPqp8ZiHvWGs7UuJQ9NQzLV7Zor8EnQfsg1pTyyhjCb56pQ9UQxcHfhVN3L9pBuEV5tf18Doja29W4xtiv4Yrn",
  "key42": "5vYgp9gp8w6TMJxTVMDgXbMwGJHdxNUxtM7QMtoBLrMexEoioLc1gpi3tfXZkmZfsJfB214FoXPJ5FrDUkzdFjPG",
  "key43": "5Q3i32rDUKQDxskeAt48mrJDC9XWwHuU99LpKFhdMVQPfTZbpDmaW9btw2F4ceVvtUkJMwKhYvJhqWJ9kjaoaCC8",
  "key44": "5RpGWT8TmYYCVowipLqT5ynQHoGXTjSquTTT6yVHui6S4kBDuoTd5YBvgnbVGDGzsSDnM15Kdzs3EHcTpbXbXtHe",
  "key45": "2ccw1UdtXekQRjMPFm4RR1fSM9gWncWv4VL5u82K5auT8T2nmTe1ikuKrD4aVj91ze7DZAnWwgVQQga6gBodLY8y",
  "key46": "3dF7nEXP8PAgxNtzhHXFoK2dFpSnQUbvbaX77xtQAsAtEzz2EmiRye5zLDnW4xTXmuAZHdxxJuYtkFaxv2Z3gfu3",
  "key47": "25MXCJ8xxcQDHxFhAL1cP3zpJ6cQm5eS1SxTbwf93XHiEjFpso9TVzcPupCvP5toaotbL9Ew3VZ2TDqb8xJuQDNM",
  "key48": "4p4p6wL1PReKc1cBnADTNGS4xAYNiEqzsfkrMbphyA9hCweY4TfW1LyfMPWn3NqSapSqGzGkUVzPn3TCjz9XqcZr"
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
