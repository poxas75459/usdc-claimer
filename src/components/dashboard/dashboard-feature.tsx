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
    "2S6Y5tsv1CxYCZcJLB263j5m22Sa5NQZB7VC7vHMYJuRiRvf834rCgbJoDsyU9tKxwB8k2xzLhWjd72HRFVbR61N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28bUB4j2Evd8wxGzyv1wCpkn5mpPCFKmR82E9fW3zuwmVgVDXoNv7ZGaezT1AdZTUeSRapeecD55oCsER81DXUWE",
  "key1": "66UG2ggzobaNazVPia4NNxFHtfAV2MnBu3uKGotSiWzwLxrp86iRoVUiDjDCTmdCbUt7eSCComngsUUrNFfisG6F",
  "key2": "3jBJnBDteouKJa5ArsoaFi6gwGwt2RYxaQ6K6u3d44ApmBwFAe46EyMHknW7jkeyKK1XGp69ZJe9ZmMhsjwWvw2t",
  "key3": "5aL9b2pKiedAHXxZ4uGKZH59memU8mz51Beun54Jp1bu5g1KGLXCeXdwXKSTuQ1nuhSvZNBzZbotptwioQUdeXR3",
  "key4": "64C4VX8SLG2C5VrySfwPBCADfT2bPjrmPchCsjXhSYRPVaj3Eh7h8UaNW7yRVav2jnabyvH3V353pGpEcrGbpYJJ",
  "key5": "aBQe8tfFyA7ZNGjRPfJ4bJE5h2iLAdqNLqcyHpntKRATXxykpLRcvp1DNt1YG8v4ULmfV6Pcaa625H4QSp7BxoS",
  "key6": "4tAUdYArk3vPgftaanZ2SgcBFE5RVecV4DWBgMCq6GJ3e8yeVjyyoVnYR8zNmoodwKJ6y4LKCdNNfTbfDCuZVWVX",
  "key7": "4dN2tQPP939Yhof4N4cUiomJgoiNbtAutfrCDdcjkALhjVw8BUohcPippnLz3DCzckHGL9Nbxo73dY9giWHWs8oG",
  "key8": "5KcV2izdVR2YhDcTteaK47Dr9TosQ5tnvxmJEwXGXoQorYyqZAseHatCM8vj4k8o5BanZa7RPnabmceSwxAjAbzy",
  "key9": "5to5Z6pr24ARyLWaNJdDSnLoLUvAAzSBhHVxJXQPdQRqEod6yqLY6XUg6nV3hKc2gmbq4f3pgrf1Nd1g375wTN7b",
  "key10": "88RLKQwozJTJGXYRpvci8diZ7yS4RXSckYqNUMkPVYQ6XirY6jBAAhaSztS11HPMzm99xnfzYoxhdosPmEYzfrm",
  "key11": "4MtQvHNzRQEpha1uwUGCmZ7TT1rRB2SaQLM6BhDkqYALBDaeT5n94nsiaWHcNGUDxkhvzFLEVVn2Zq2Qcc2qCLxC",
  "key12": "5Kuxv4kTmZ9aAQKv4EZDQbdfcUuEQoUZA3T3ndS7NkzmUXp3pAsJBHpAqJGZefbPvGZe7MuGaqw4ZHekBzbPWYdu",
  "key13": "2wdtFsaYwqsDxz1LFepR8ktLMcurs5mDtCaZ4rZrhG3f3r8LE8ReyhUoRW6Ud8x3qyZG8bDUiACyYqhrURj54EJS",
  "key14": "2MaudihWj6R2bSxZhs3cZw94Gn8F4ysyroD8ftL1yvAGnTxkPvjtYw7S264cDvWtSL69xLozJFYHiwxmdsJig2rk",
  "key15": "4LoYGopW8A92yzy5Yzpo1TePSZq6yQsbi58bzirP7Su69UUaDdGM6xVA1DjA43D9V2KdEN99Ypt8VeNJniYC6PLC",
  "key16": "2LEEn7xbVmd9y2DfEChmEHK7jUaZB5cw79EnrmbhchboKPUscm3eApg1LSsUMkaYiT1b8qrSGvjE6DiNkGorLqkE",
  "key17": "p4yHASQgnpQJ38MATqWjHpNPVfRdWPqwmya7bJ2JgUFXBmPxmAjRugdTRA9HMHmuA75CmHdBTnR465YN1uXNJmU",
  "key18": "qAxD1ne3Cx6MKkmCp1QBiogrgxi8aW7hFke3zZnFvPXEZwskKbFPPUjngCyQb4cYT4ZE659EATZ5snbj1dQy21e",
  "key19": "3qSnrDf6oPfLVgnizfVTdEypKDPRorZ4hVLbYz63LzWcdsRYENVwR6YBXn6VpN8Q5HR7CpaEpnGixuHYPUMgXrMw",
  "key20": "M5ngwuXMvX637J8xbs7qmitMWJKt8wgpaFToWp4z6htxZAsMVB48QRTBDsJNhsyzhqWqs9AekjD4ZJhNA4534CU",
  "key21": "2LA38XBAR6PzkVVG8irDT8dpfqKUf7xDiWqJk5YKD1goi3AN3ig9bvHPAyo9DbsRsUMPAYUEffpDdKq1oMW8Jk5g",
  "key22": "3EUDABEDfNSKCeXPpCYWJjBx12tRymtmTkGkooffUJsBFH8c3pEsZAJfwFNp99KrUkXB6cF6tiiyKXa8Y6av23Ag",
  "key23": "oGiuGkJpJstEmFqmT7Q8zbR9perxYw4CNYBmsMQ8x2BDnx18zotTDHyYB8y5jzpBVC7Q9cXbNkzYUm2zxP6Mbqg",
  "key24": "3hynxe2uYur7RrojMPqWhobZWRkXUngaTLuvumfomUxxPkNU3SdjqA5R4JAr9R8rNRx9Ch2BNm5g6AJqMMeeV1G2",
  "key25": "NyQX1ZKrY7JzxtJzJCizm7uRDx8rWvhsNkcDoSmC9RBF7nKCTgyjLaLsKd6aWUc6tvmEFXERfspaqqGStQbWwkw",
  "key26": "2LsAmZfmDuSgfjqmGHwpwyewezogPLgo7cHZjVuZ81jsJ123AbWRS37kh8U4WeD7WxkizogDpWMPpy9oBZKCd7N5",
  "key27": "59p55WbQ1YhGApvZTvtVjRw3t2XnmadJ4wLGELDynTqjoSZtR1LiLnrDsL79vWLTacmcHUmMYECm6v8BoWdFBWzh",
  "key28": "4x7vr64CcfqgnR1ctM1N9Nqi59kAzLMEKfUzd3XPZQEvotCt8iMhxvVsQovrLBsMFY1pxCYe5nuaottLWup8prs9",
  "key29": "5qA7f9wRUhfJkgPRpDBfJWSGan5S8Feo1nDce98tkDxvXE9s27dUeUaiqb53ocU6UDNWBRfFhS3CxFSduAUQTEBG",
  "key30": "4urvy1T3Vquh4HoiVEdiRqxRYmMGLUgKmjsEPAYAzid3HerTtHn15U9qrzgb2Tgj6UFzy8C5YaV9B2zfS6CXURFS",
  "key31": "QaZMMwsc5j5VT6BePoy3MeRVZbz3f8vBH2mZ6HR8CsMPiFeK7skJ91SLkq4EHzuPvxdL8eZUxQXGgta8RhcDXen",
  "key32": "2bmX458PXX4esfFL4m2Ea7Z1hj73SKGb4e8LbEafczq8sU1w2an65dYkoRMA21DHvWGb27wrXCMu6GDtpPzqk95k",
  "key33": "3r9FD2ynWeaQEwmcpYfKx2mJNKHyYQeg4ahposkM2r7Y6CfimMuVpkrxgAvxqYYqD7N6E5VPL7JFdDPtqsKUYaVj",
  "key34": "evawAMN4zR9y7idMCw6XBbFso23Mi4Lf9NoLVDvNup6gA7mfRGEibKgLdkAtCzuoNABcT2xP9Nn2sNg4bZE7tY5",
  "key35": "5U3jyjaeuSACRjUdXwxYKvwZ1QfZWyBQGrbwjPpvTSUmLXgXGFHuMLx4jdx3Emt2S4vCGmCzeCPJezcPBJqsudsU",
  "key36": "MmvEr5s81zuwj7Egs9VnvKH26zHAG7vCnTXi7Bp5KtFjPKeU2nvmZMbs82JU3jksMDuj1uNn62Khz4cvjDhioyL",
  "key37": "26QMnUgBQUcYwcLfgmze8QQ2xUuBTD1CaqScr6bs5GB5dYZxJdEQYkn12QQHCyvjw7VdMPTJBSkAHZo1YF1sJpiC",
  "key38": "2oqyCXDArdPktjU72CPowgF7qy7FUesiezFmZJTfsjH9tvvp83tC2dSo3SG9uY7XDzLzYF9AFKWM1tJhvJ4RvuQJ",
  "key39": "48nF4xpJCd39bAAocJ2mzNbe4P1GhWzWRV5u5yBoNtPRoJPEgagBecDiyCHuBtmnhLZuvybsDRaPFpAkBmbDquW6",
  "key40": "61zAyYwrk51aPecquFcjWs5PM8dXaoV5DeTfsYdJsUGPomBvqkwroAoDzBJWqLS3BdiGovrKsc3dHpSRv84ET4bb",
  "key41": "4ZbUxzVUhiSpT93LU41dbcPkXxKGpVM4DzwUZTmGUdERXzATuSABfm7oGohpoLodmJN7yMyaKSGyCAvpfd6hfRX7",
  "key42": "hL4XnbBQDUpAXgG7SbbUGKcV56w3hpunEsFhJnrNCGHiu4LbFo8McBPGTLDLH2DU5SyMQbQQ1q1SKRxUJ725dmv",
  "key43": "3m87qFKK9XnPJap1BhSkTai2USvKaWvwAmiycFAifPxVxoiafWeJ86ctCUFbadoi3JpAY39TKuxyvmzQZGbM7W1n",
  "key44": "MKarKakGo2kbBSZmdDtxXsSHKm8XAzneSvwXMikemToPKCXewnX7AQv8PMnN8QgakKYEgAz665DYrqQE9vrhAVM",
  "key45": "3ahEiUgcBFDnstRJkmiM27GoJU79V6TRRVb7BfD5TJMPHzqETGYFSXmVBWt63p7fagSaAVxdaXweZZ1WRDJHyk6k",
  "key46": "2XBDU3aYT6XCh86fYCN5PEdWCooPSKuV38xFh8bRFg6rSXtkr8tEuaokWMad8UfbJBYDALMnWeGqbbHJSsZKSage"
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
