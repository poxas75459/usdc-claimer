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
    "3vFyvoZJeWRFpzXqa7QKVM1YSqA2z6GJZfh1roGBVz2Ftq4nBesRTm1VqUbDs4qPwcNbE4vdvghHrJ6oeKmhAS6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51PFCzMvYCCuGyrDmnUZwpHCZ3EUrP5hATSYGJbWBWqhoGXMApbiYNtQ5eTG2nZfSjMsmRhTLTgbGEEZy8LJzsJU",
  "key1": "3Pi2ykVn5QNesYH548xFwygGzAVggYG232icGM2Tgb3DRGKhLusiPgEiCprAZiESHPZ9yEH86g8sYLeiov6JFVcw",
  "key2": "5PGBQ6rahndnjtGQEpNK13kFxND7i3M6xa2wJgrZJRCq59TQJknJKogJpWYM6xooTkKBseXeDAAq8W1LPnXvCQ3h",
  "key3": "32ttphkYDBW43DWVm2QVU4YUUjUCvL7FTHhJy8dmMg3guh6v8nTECmKLGPuYqpQoWE2opWdSq3VFdRjuaZcabteK",
  "key4": "2dykfvQV9UDEN18zBFpas8Ejvro7Qk7AiJqqeSGytgy3xoKf2TdespQNgq6brQywzb4UVcAdJFZufUbwrUS2qaDZ",
  "key5": "25YBbFMfVEvgeUi6mcEaWVrG8g5Fy6r7zcGggbRJicsENm21BBKQxGuHQMaqNikh4HkD92KiRTqS32DfbkVnQYT9",
  "key6": "4pudZsJ4s19NZdovzZstYpfiYfuewr43fMX9Twio4gb3w4NaD1pVG9xRZsGhfTz87rhgaqYpQwroYCk2qGZ54ej8",
  "key7": "E7552WRqWJFi34YZhqJqXj9fxqNXvvo29WnQFrpS11sQE6hpqmoRCzMA1HNGeKRJr2Vuvm4nyvWHn1bDTTUj2Bs",
  "key8": "4uzCewT8jymJ8RJUHu9uEasqy7LLekDXcFRVq3kVikGKdhAmLWJBeepRmTiJmkkdXCPZ9L5G4wxLSYAaiyZiHYJZ",
  "key9": "4yR1Z3zNVhhq2B66LxWHSSkBhLkGWeQdx3Ptduc9LcJ2itgDVfK2H2RF76cNqWYSQ2fmEv1nssBEKeU1cpKDHhos",
  "key10": "4qe91UmY1DhWiCP47qCdx5s5QdrkzxqLtAD4NtbdaZEVpaQyErLWpix6L79GyGZSDYFwMNKppY8p9SVZVeXZyKCe",
  "key11": "23AkfDL84tHFVEPsxjss7VRkR8HtKCmACE4pUnWsBLnXPFXj8w3ga6KE8tXk1iAmbSCJtpBrEQcsZjbKMXyNAvUZ",
  "key12": "i4sgXLn7KTkPaY9JAqcVwQLdGwXLpibeSXTWEfxYpRRipbF15rzcNbdiEfyDzgmovzWtjXQSXN6k7zC8SkrCqyN",
  "key13": "5z4zXk5vytgHwbnbk4dmdAVawQVtTUyxstwKUfcLYQSiEKPmWyEce5QEcK4GWgyPHf9uVMesavJrsQwoufoKVc8A",
  "key14": "3mEHFedSHgA99D7LqaNNxFLaShgCyGVhSoth7dCaQPPXtPJy75iwVRmReXmkkuCjGr3dWLNPibXJ512f79zCnj9n",
  "key15": "3grwEuzQKAYN7PZEmtssrDvtPBi2j1cXos2E3GiVptQrhJSCYQu2wbnEYdhvoyZyh8MJZkmxHuGqEDAEGNg96VoV",
  "key16": "5Z4eSD2K4mZWHPDwSU2x4n3Sv1cBJVMu2MP9BuUE84xxczM3Bn9gQZbf2nr8WsLxvgrqVcMuBDcUqeDhk4o58v8m",
  "key17": "3UjRxxiod5nTPpRmMpYEUvBu87Yzw5DeyfVy1YQZpoZPm7n21MZAJXTPuFB4a93U9pGB1NU7XkZXm5GnLDynaauz",
  "key18": "5njviFWhGiKKyVFFqDVcBuBxttH4KanPvambHnSP8qy4SiN7BRovL4NZFjL47mH4BK6Q83n1wp8EcX8epiiW6D1Q",
  "key19": "5VUdnj5by1dh7bypjtXZP78xGiTp96LUfpt39kENhmZ7xaMNFvbapUmWXCHjJAgNbhrNJDYVVzbdHa62Zh9ZBoxY",
  "key20": "3HZ51K4z86xVRwZqobLTxDC7EQKhStAKUCNTmMZXjbnCSmoyLnWKR5NC1nPBz96PbPWNMbuSRy87UFruZmo9nBNr",
  "key21": "5e6mK18kKsRwJ8CM5N5JX5fSCopGhdqnzvjzaS7sn5fXTaFRAgpXi5DaiqaDqorbNkLR4zEQbUZ9aHC8sCPgfBs5",
  "key22": "2eB5B1YR9NdEsqmSoWfHeCQ7rrrgqWdgF3c5aR9cfLFcBAot5sfMi5XzPNPxWuHbtxGiWqc6qphFBWq5MkGVA6Tr",
  "key23": "3K8fAfMuUUzKKVkwkQ9FzzKYwPQvwriAob6LucdiE3C9EjFnjXV58yq34nhMfzVoC7fu68qK8PLMuGEiEGFJTFve",
  "key24": "2n7kotDPBe2DCAjDf8FEB1PQmyw49svwFTghEJBxvbTnaMWzHx2zLw5Kmw883ZzyHCpzCVUuofQRKgp9xWbGo8WL",
  "key25": "56Qu9kEt3z3sAPgQWRavXUqcUiNMpafzX3W6GU61j9P4ATV8vZSbUjb7BG5MDpF65pxzPueZsokPPUCFveKCXHV3",
  "key26": "2RyqGVQyZFLTodWgMtd3ucQVXVkdtgWYUJWbHKS32ir1Wesq4HUPdtCqQQfUULYgxcxeVh1ZG3rwX7HSfpK97uzG",
  "key27": "361efgTqcWWJCwcnZWSjQrPDDEqPV72Wy8Ak5MPd2KmPVhxodZkFykuAgJMb2CxYmASjMDfAH8ajZBeKMeFKuDbn",
  "key28": "PmjobaPRE3Ua219XJ1SbvRYSWc9JA8NnSgPrCzeGe9bafP7iyJ12NACVsrW5Pd2SedtXU3DFvJ1PUEeYHpfuAq2",
  "key29": "4hhYQYoYWc9vqzk2TpUdESLiaFKr2HURSyEn1xBU4yXE4D5j3wtZ8zfZP1QSRfyxhnJPidJJkgCCf7ajsebUXFBz",
  "key30": "52aUSTfiT94ggbdrwk1KBzu4fkQSJweygVBbA6MbaxGEPS8LLkSCqLcPZgZJSjZi3NfW2AsudMkjX8Kmc2NaLLrF",
  "key31": "AKJrNpgmrqUpBi1TRsZxhBehjZdK9Q873CZpfMno6EefSRHVGDJoQx1tXEfmcLsAf79kwQ72xqhDkgtKP3FtEMD",
  "key32": "8nuoRBVBdnZUeQ4YCWTZHkQpQFQ6LyLovJxDTt8EyrSHwpnefXaL2wdjCx57tZPGdDuG8u6k8ouqq7bSFb9nq8H",
  "key33": "3jnyJekLdeR9FsqqBie5j8HP2TDdZdWTDrPrMgPQi6esRWev4zG7ZqmexpFJJJQKeZHaQ8KVGpvwAn4NeXtLn3sn",
  "key34": "34WUjkwFhp42WNUZZSiRUUYxJngRbuw2B8YKu4dawuQjXiyZLCQHcSEW8Tsx4C6e28uLPcVttkNyHMj8i93poqJw",
  "key35": "3y69gD4qqLVsmTSBQyjU8h7KU9BifLzRirH3e9R5pgtzgKM95D8KGVGEgEnCb2wSQxHy9xZ2dFjzAsf1r4cPnQ1w",
  "key36": "3yWjxkD6ixoE4CiUvfpryrz33uA8goFptUkgTmwYDpMJFWQsSRGHAbtpZZBTMkjfMtYCgM76qEnCDMVobf2SHty7",
  "key37": "34XUwGTSuEfE62j1615eoCaXB3J13V67YECwJ5x6zDdrpaea2JPr6y2CThutjwSNrtAXwcta9ox8sK167pEcg7Np",
  "key38": "3mCth1XQpBNuzeid62WMP4Xv33MWV96Q85s13p6LdQSMeV1g4M3jhekjW5aRejWc2XQkBuoDhfAfWe2yjXxoxLQZ",
  "key39": "3YAu76EbhjML6mGpEnqfsKpFbeSgLCTVhs7842a6gUrQnLwdeNhkxnkScgmjMNycx2F35ujefKZfU183PSKYwSk2",
  "key40": "3UiJ9VkeT5W72CMapiSuLaeR54koM8V3P1RQ3h9pgC9iQTk9zYpSfXuQwy9Tns5mMkMLbof8hfnyr1jBfCYVeHkF",
  "key41": "5JxCy6QUBiLEavoxiV11FQbSzqaj3zTskmqEPtQhfH8CVuCHNzneoK1Fz13k5yw4hStpwAY8pjrA4gZ8gxKnzpsB",
  "key42": "eNM3WztkjncYHeKHoXqDvBd7a9Kgy6GPrNxnGACadJgFEnuu46641Ye3jSCbV2Q9zfMDYR7chmm4pHA1QgytzGt",
  "key43": "2cJa2tnxj9u4yKzTkrwKJekMuQ6btvqbmv4PEuQJm2LM2TGxxvn9yYKS8eR4w4RBXbfJZ66gJhdLarAqpM2t1tjf",
  "key44": "2dsckRoCao8AYiuxPYfBaL5otK9FnovBe9KaJpsUABFPCYg5k1TwrXk4kqAeqtU9aR886F16CTmLALf9Uf5FuHr",
  "key45": "wWykuXrCJQf8duBg1NR7TKuC5gBpqzsiugKa3gTyJEHWRSXqREQTt7ymu9nq1kPztDG561fgYW2sRAV9NzBWbF9",
  "key46": "nhoz4FgAw5xaR7ukmTCFc36gEFc78RnyGZA67aHi5v1T1yZ5MFu3bqSA3gM3QTmurqszbGbe2RCNUstUFBXNRFR",
  "key47": "5vkKdRR58swtseqTv87HzrTapBKh796o7DA7hP4ChWHuw2DxU1X28KqK3sHbZH2MHHL5jaTEAwuMoLETxJRsmU4w",
  "key48": "4MCb8rKtV21fSbQGgW45yrrvwyMXLrQaNMELJom2u5ohatVcraYf2NSLPUKXhTgC9pcoy4w2fQeX3Sc6ZBsVxF5d"
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
