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
    "5CtYANVpfFtkAK1Vh7XFtfmwvtW6ejJ43YNExMaVkgWtddprqW16vwSspZXAQQJcVs3yVkq2JZKi4rhiUZHzuKYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y275mKuZxGH4VQ2pQBf8j7zDjmV9mEABepZv6Fknzx3CgZiGasJj593ChJVpRa1UpMdYZqTbmgsQR53LdQXgfYB",
  "key1": "2fgwuTgPxx7d6judTpq2sE57joVKwwBGe6KYoeqdM6Lx5YYyarPaFtrL9ui9Xf82NZ67aHKYrZCUqDmSRsgLRYzw",
  "key2": "4QeMwEr3ZpUXBtrsA5CtqgFng5Dz196kAGoKAyy1KVdQngzmChcPX1iAbfZuCJi5XVvcHH2tWD4RQ2a5HrjkdYL1",
  "key3": "3XRhi1RHrEPKJDHZw3rRnJRpfWRNkES1H7bEkEPvytgCrrXPHUwpbpRg3nrCa4tpJ33ukdfwUzWsBaEwRskgMQBa",
  "key4": "5uZdCdtt9RGxK9nsvDrKgFevtRezRYQgsvFDQrTqojJoTQEDNn3rgwidToz1CU1tJogyLKrVtiK9UUQf2tWB1kJo",
  "key5": "4SAwyoUAjnx1qjSeceuwoCgnxRKnWq3BAqMawyVUbidmVRnnsrCsdHS8dszJaPeP2GWeexkBQuwir3CHfFSipKj3",
  "key6": "87KVyGGWnM3odDyhPK177MhonLz2tgcemEZ6mwS9isaRjmdNYJjYbUNRUgn4Jswoi7MZNEvRB7nqcjshGge1uTy",
  "key7": "24uXkgiCBT5PfDizDvSVTPzAnNbT3qPhTyQobNBGi2DH9dvm6vXxCZisP696co4UQPxjKoJBjZPMTZJ2Phwye5Zo",
  "key8": "hn1Y1dnufGChUtpargMMb3PuNyXh3C3jRGtuuB8QpTNxMsqZ94vwyC2bn3pjFpe7vYt5PTdhUcP261FKnb9hLhD",
  "key9": "23JdAVm11b6mqfALTrciGvNfZ9cbNM7DbAp5xH1USAziEmpWhhs29dT4kmJKfmPtuUBkFtVHoAv68SB1hrXxXk8E",
  "key10": "5DLneqrsEcEnV2iApxNSKpHVHNqiZeX41xCTpHmiQhYVNikww1kwSgRjqStZxDp4414S6axUB8qW7fJWtXag9Tg8",
  "key11": "4uyZ2MnDpRFxEDG9kaynX3VshrtksZo2E7UDZz32c5QUdnEEL4niwjyY3RkH4jLs13TrTuRMxbrPcXZzi8r2DwuX",
  "key12": "4BPtHz6fDKHX69EWoHUT22DikaUcUd5pcVnCx94nwAcWx1oHWj8RxZnFg2uSAqfEgxvy3wjUyQPqB76NfHt1i8PF",
  "key13": "2a6S21RqWLy3Gh4xesEHRFwGzFxiFJKVy9RDf66aJY2hVcLxUpnpCNibHv6u2zPPDNXpUKymmVRVzomzVchQ1VY2",
  "key14": "25zGwNTLWF3nP6B3UE1GFCUV8sToipU5vyoJeaepeQLEXRtJuNhWHgKgRLrnQ2vJx1XFi9fHyF96D3uNHzTJyFyW",
  "key15": "ML1cA1RpZCanai7mWGG4FNyCvFd3koNAPgAtimWTGh8Fpgmex8EUVmCECdSPDZnR9oDbsd44Xn3UpnK6W8obJvz",
  "key16": "5DQECrjUD22wdNdh66ADzvkAvT63yEyd35PcxCtrTzWx89nPwR2biJnzZsGDGhrBf5jvZrQqX7mpBDYtZk1LmvCd",
  "key17": "2hfjE3u7m5sG632m3LqRrnMxUBX6wA6ruvn2KGbpEoWnDNCfHun6UGqoTAaWquozZWAGw2oGgFEL5UYXAn4ijLtF",
  "key18": "3AbEzHKF6KvF8PXzMQQSVhGkDQ7uXbdwZGBEHg596g15F5BKCoXA6Y3dBfbz8QVcgMTwJrNZUXCy5ocYMz46iLVL",
  "key19": "fnFiyJnTnvR5aZo9tReUVSRim8UodEUYuFhKBKEiGbYHvi96UuEvR9pFjcKjJeVeuAU5oWsziJH7551LYQAFebM",
  "key20": "34KQAso2ste3iUJdZGXJ7KFz7FYbwnJrDVi586NEaw9LfCqbVPKndZfnV3noxxiAKv3PvvQ7U4EC57MXUHfHKuiS",
  "key21": "5dvUSMdx96SadXHL3ugtCWDzbpt7wzErGywhaooMNkAYvoM96Vqzhm39A62iqbJYygJGZwXZ5qb3p4JqvS3vfKw2",
  "key22": "2EMBLw6ebVRg1L2kgzi66XwGGyPqezGHZmdQptHydu6UykTi2TYdpXGvFjTtSpW3DYjKTJXSaqNJ4UbTcTgE4LSA",
  "key23": "cBGX4sgPsCCyqGBPqM3rsgmJhi34oriSk6F9AUZViTTs7TbtmqdtCVDGTYzRkURvggwibscFKqUTwoFUAsAMXUu",
  "key24": "4Jy7ADS5cQ9H9jkYsiEAqQZeZNQ9ETqSMewuf1towHsq9Nnsd2zuLwTn9su8seKLvMVZnDjbQbRMsaUHn65Jet1r",
  "key25": "N2pbRzrFoAd1MrhftouGiNph15QYx83JLX4uMMuALLp3h4NnQRdpay4RizDTmzgzTE9hvFUanRtqSAuftFMs4Xf",
  "key26": "3AHPeatr9X9m5nsGnMoytFnRN99vB8yaejwwCsTQhE5dxBNzK6vw1LawQpBw1Lm1pPp6xB4FCmte3MqjFXjWJYMz",
  "key27": "2v1zm9JRodEBdBJwT83ajZrT8VR9gnnKPD3cVrBUKTyG2D9dkDLe24SXaFL1hLC4EUQ2Ws8pqw8A4sYCG1eaAhUD",
  "key28": "3ivm3a849pycqi4iz6nmeAPZ6mXNjdRWFTyuLrugpgBsLfpuMSnuGoaUWdZ1FKFfLTfY2LBj3y7rTzW2ARQD4kbJ",
  "key29": "4xQWqn951oXSmgq9Rk2EKeV8ATafVsGwvEzLejAJba7z3HEMz4nFmUvucE2oVDTB7LLmC1vv6FAZ6tYaGgwVoysC",
  "key30": "5tgQXpyxN78WcTYYmkxMkxvbyBxvmkdfTCCECe7uKtFGL96Fmj2M5kpGk7ts9GRwJQx8m27bHPshKYNGhe4smEoj",
  "key31": "3f9EZ2Jwz51AAPGQr5sQT8G5Bw7QL2bc2bJSUHJVT9T17MjSosQ2KyupYYBS6MtCXYCmmutKHEUbaH9RBvUmC8co",
  "key32": "56vVsNFJi8c5kxnmcLJyaaVe6UFKucZtMjP1hJpHnDnjZP27o9yyJGSpdbWui7eL6C72GqMgymRWQmC8rCCkQNkq",
  "key33": "2EL5ScRd9Sg5t7ft5NPa7334BPreEVntaN3vsD3Lo1CRhBSwZ7ACZG1jzsqDFZvNsSLr7n2s3DHHjmP9VQTgW46R",
  "key34": "rVD2eeBbi6oCvr2s7oTBtdLyTuZesmYKj7ZMAHAr6mqsdoCp5QeShMzN3GCgsKiLg4BMTAeFNj597pzFeZGSj6N",
  "key35": "23mmD1aZsSc2LgkB1xhieo4gWsGXX2jXyTVF3HJvqA2VunLhJuTdkHU42kAu7funMV2CJ9WKd6CrDrjCvTqmenAL",
  "key36": "58Evx66Ua1ZB3ctmNLm4he9b8Trmrdw2ejSVdwbeokLvDsqbWsh3Y5GLzU3Ma7a8LQL6TfdzDqACAN1qY5buMpGR",
  "key37": "5T1py3o7sfPypLGEb4QtkBU5zEfVkJjcygBAqDwuvrLkPcgDqVPxzWDZKUfMd5qfwrehSCgAyWxXutQ5zojXU7WT",
  "key38": "3Ss1q7dymkqLNnxNACZeyCtqtEyS7Bm7bUj7ou3WieXzEgNJ1uxxNgHZpt9PSEd5MZvXRBiXYUcmsGE4QpEaCjgQ",
  "key39": "5NzqYhk7TooCRH74DF3BurRE8eUwsPVYSFbotB1n2nhAMgJqFYUJwj1DZrkA3HQ8yXscXVHKSZGk7tkjzocePWXA",
  "key40": "2sbPZrSxrZt7x4GUpeXPRALztaJsCTQyhrKriP7siXcb7Lq1nLcycQWJNiyv67WmbSyvEkDX3x8UvnuiTH65bjtC",
  "key41": "2brkUxKh1w4L4HRTiDWpik4AM6vx6ieHfPE1vxbfwuiiiMM6QFBje16ayoQrxsohe5waqUo3iwEEZ5b1AwdVoxDe",
  "key42": "36qMKvQMkkbocDfTHBKXLS58gu7JQAF98KJSsJcAdigKM43mV7DYoTKGij9W99v239Wk3GXFNXUek5cLEjhVp9rX",
  "key43": "3dmzfatxBpinYkFSLqUQYveKZAFp8nD5s4rjeQyV6v6eC2gUo1wSTCec3kxwrQc9v47eWtzv5v9GqdjZ8CVebA1X",
  "key44": "27fZsfnPSGVanmyVetN3WVX6bVw5jdeCuCSnvEhPCDa3cpPE9cn6WQH49G3x71iKzNrnC9kfiAD5xSfErsTvok7k",
  "key45": "5dEPh1wS7qzqsBB92eKCEGeb7QExifsurvbBALnyHmKwuUEvheyQSDizNPtRVYgQjdRuBwzDiLpussVNjcFLHzU8",
  "key46": "2zjyd9pxjQpn4PrQmyKNKPY7EffLP8zYXUtQ2yjsXQEC6zGAh3rNZZpzvVVTwwuwPphgvduHXb8SFNe5VCRJ9xT7",
  "key47": "21C3rbpaRF5cNGJjpd2Ey7j2AnrTm8XXiSPNuRYcfYumnwBqxRjiPN6GgkU2Yb7kd6E8dgZSCcr8cLBzP8i93sVd",
  "key48": "2WmgZzsSMAKaJRfFRK59nXhmSPw7rStvNz1RT2Zk2EPJuwMBtUpvCLemqEVNCWN1dWH9FeRs9GXet1VCwZwnr63M",
  "key49": "3rZ3a5XbuGmwJUQuqgxLwdFdarDtuJQtLnAxuCPba7fzDkHc6GVEN58BEZA58XoKN1WWujcCARw4P51rjiAabbv3"
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
