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
    "TNB7EFpEdrsaFPeqjo8MUXyeDSkVSQ6TVZmGivWPwyXYsrjhYqvQnrm3WsCKwVk7Tny7Z4if8848ync8wFvhGFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QsDMPXsqtpEpFrX95tPTAj1ud3XU4pXWmyojWQMXYGmGcSNbz4aYzuCTcJnPeKwom9ECHJoebLGW2xX67DhkK4J",
  "key1": "59u1mLhKVzG2jJhHMTJw8fjvUnhJs32yCEQ9N4kXQU1cJZen6MghwRUKUb9onwvnuLrrvb2jhfrKsADqk3HE6926",
  "key2": "5uMz4DGa8b1SrayFphZNT9mt4ZoTS6vtunuJvV6Q12yDZUSF1ba27Yr3BRsYpHsSzQLK88fhA2RaL7gNBhf5FaN6",
  "key3": "3Dkdph3wEP4wPszdvxmPqJjADvC1WnVD3bBeLw9qK8nWdiW2TFARrF41dx3vCX5UTHNXeE6NXHt69BjnLqAXoBJw",
  "key4": "3CRTLAk681iC4esqrjTSaRg7bRPApcnfeKtFiLgwcxi9dvjnm9RSntnUwTYZpxvYBPBga35dHsm3BkbEgDfY59BL",
  "key5": "P4qBEaoquxxste5GCctYgRwSKf6fgPk4z4cL3yDpWEPgJvsFvyniRuzWisShSRpdkQLrhWHHgnBs2tX39Kyh5z1",
  "key6": "4uXcsdpBnhugEk1AK2oWFMyWS47Ww9SSFzhZzrV6o46kd2VPDaxR7o2QnZgZDmfrzUsdkZLz5qLpibs3Z14R99zo",
  "key7": "MCd6HqJB47daGExjLvaA2ufyNGrT3fTg1TW2kXspJYkcdxr7bkwhGEv4tGY64zkPNsxKY8niGVnPnCFDSvrqyRu",
  "key8": "2jK8NEUKj1RmR5qMvSg9PgJk6W4H1giXWq3rZrrkTawTM8dL5z7WjkgrqnshbwhE52DsBwmAv5ifMEecysWPKNhD",
  "key9": "3UKG7XGYaQhYgkF3UNix99CUBZVEtvEUqFvJybX5KmYAkUyQjkX2opCjmh3m3R1P33tbX9EZDU5yFHM1q1Af3or8",
  "key10": "Bh2dty653TiYnZiidcXQCxFW7TU7T6wQVnHBsjEnghKyfdaB6aem9FLKcKEH4GNTSp59dVKaanN736gseDj4hDQ",
  "key11": "4wg4FcHBxJ4eKz4DMGfuRarT5hLtzwZ7F2MuMHWQkYqXhKdWXEd2hvg3DMEGuiZuFAVYuAc8RgCEe6c7uvtdcoKx",
  "key12": "2yHM8HQQzoooJ7924Q1rWq5FMD3XMuqM5y7X8Pca8kwNXwGqUCidnqKH6otKFZ8WPKbrxkCtdkky8qYi8pxr4azt",
  "key13": "2iJv64LygPWapaok5M87vsPLayXBKDXWpfE6JDkAUZj7Q9jXbDdKJ3w4tsWNCRxE4rx1QmRQV66j8fr2DiM4YjUM",
  "key14": "tvJzWkCNA2zeWNVRr2jnaSkJqqJxz5HYZV2j11wNyhHWZaQ2W9fscWMFNSNiDHr6yWfXHohCaMs3nSSRi67E9oA",
  "key15": "fTwrpqY1KeYbVSNgWj3QCDMcNTT5YGifnJkodGrM2vzwP6WUmLDsWmTUVsZAr2gtcYwroYY5j8JGca6LnWhA11L",
  "key16": "3N9Fgsi5newVwzaoYdKGzGcWXfWZa14mhjmNd6CgFvPJKcWXaJfm6mjhHCk9PMgxC4rkWmVCR3KpMNHFJJ1ttah5",
  "key17": "5Rcpi1uRXQPikNvJnHX3szNZqqVi3LpRY1rFqESwskcZxsHLYM644eshNgsPfG1zpNdkb19LHGrV5exWwiuLeFS8",
  "key18": "tPY1t8r2ruoRBXo34pXwHCcQxfHd358A5HwTBZ3kS84yXXz4uuHbJry3sBM4Pnya23FgcFwckJiskQwt6ddYvrL",
  "key19": "3qJLW4doYt4fV9AVPKorBpUmiyHAy2txB2sy1i8P13MgWBV4Ven1pnr6QAhXc4MGu83ctsvKHMESR1V5qwiAUzhi",
  "key20": "4A9WU5oUE4GEVQhXLEDNQyoxABYhw4QqnF2oGmHRmvgmHYEH9koFcsEhpVVmdgdnGegWjnURHzts8ADVLbGyRnRY",
  "key21": "46fAeHNJ4BNeaRjqwzmsNDoitjJ97DNBQVScppbo91bbCbM2nKi5Jbx3zM9XrD747pRTqQkjEWzsPYkJCcP2f8vG",
  "key22": "2kHqz1yUMrueaxP3TNfGf15EedfvJwbd59QatoS1YsmjuWCXfTYD15Eh1tdrvsh52gymQSivoFKC3sYSEBj5cLMG",
  "key23": "3rzeh6EcCkWD6tEW4ySz1Bb3XUjtfSNrxvqHPnYZvmQYg92nnu8wA7MkonwfmK68GjeXkNJioKHBh5fmqFJYhgRH",
  "key24": "gQbCMxbGmy9gVVU6w2f792SaKCbyTE36x1DhMrynSfev7V6PeUGwusc8cBkEFr7eeVBUqiifDTjKD9xdt1nLrfB",
  "key25": "yDgJWK5jddBBJ64Qm5jV9wsgrDmuGSB9AJZs4XiAqyXohGUNV4zDWtUaPFf69EDGdZFnSXMaWHXoCh2ueAbZbLq",
  "key26": "5DK7HMp2VRe4X6ph5TZUHsyzdoyn7YpbcgedvbBmtHWVMxVnpW2pMkGMZyY8ZWiFd4MbHkeeCE6XHQaC3eaQHJBc",
  "key27": "AG2np64gKaQWCDWMWDDfkBdNdPgPiexhjtjoyXuG9VtunT5EaaSHkdQKNnnYb9TzwX89mxybpQGpVVFAmtfF6tU",
  "key28": "oSxcvieZ3cFuroyySzmq4RrZGRe56zaTuaMEmVYk8Aatf6rM7HAFG4jVBxZixWcUiaS99A8pyN22Jv5gN1SgLvt",
  "key29": "22FHLqpNjbsH6pxKpKBR6QDvcH9dDj5crULGpimqQwvanAox8DswE85KgKZGtvNMG5s9JxkDXSg7R5puAe7YRMTC",
  "key30": "34WxXXjhvijLzUCmc2tEUfDN1MDytQNbRRBKgGNaQfje4hKuysj91tESh8ndCa1WbC4mhvfmrpaNfqDdMdu51XQK",
  "key31": "4w35zDZh6haykioxna5cgwjU2Ti6zyUyi58KZBrSZqTQDKExuUXFm1p61YYBNWJ5Pcq9PzpgfKtPP7aCCpHiWMdm",
  "key32": "49NHDAzLDfRorSDf4BoQkh2gFmBatkaSsQrHRtW4vboEUUy7LSMBszfukiRLQgec6uFcLRmA5v9LXcS3Mv6fYkR2",
  "key33": "PuXurqtAA2gsmGN7U8LBRSKuGtb3aTNso5BntdiidFZjVSZJFDuqUZPA5nFYiSsX3qvuABgUmqtYtJos3GtduMX",
  "key34": "hP8HZBMiFotpN1rCEE1wQXfMfep2VBNWxc3RRhGN6eQAhBAK6mwFMBRWEM1unoaFpRt98Y3qMUPLrYyDjcGzhvx",
  "key35": "5PofhDXmXcSvwakYBMGCMSLMkGwoo4VDMC8eocqiyxqiPvVcPhGMSBdxs1WRUxrqhSN8LMqDQo82gthR41zpoLq7",
  "key36": "3sfF8Zcku7nK8gFKV79wA6T2kc6KFxSHPmUpRxLmFoWCnY6ZfaXDLsmvWCPhVGwPg8bCJkCMDuN4GGY51omjvbRz",
  "key37": "3bGt8oJgccCyUXz6rrcsnn9iAwa4uGoJFjDf5Wci4NHzpACVkdS4FzyD3H7AMRSj8oNh5v2eveU69VUyhtEktgpV",
  "key38": "3JRYnEyjmotk45Z3eJm4N4EP9AdY6B6z4QZtdbD4DZnPWQeKzyb1is3PSRqxFhjw1hTv81gBeVLDpuXvHqarve4m",
  "key39": "5kHpGgdJdPagC8DHgfDbkhPAGSNm87tApvoV2p74ypCvRjE3upjJNtnvksLTrubxJ2kMa64Tow6RnkmVarRGTBUo",
  "key40": "4NLsYTenczrYKKJuar21CKm9b8PHMY2puGfh8yKWdLK5meXxYUsmUn4afg3X6uAhPEx9St8y4CJm6aCKBLEgziZz",
  "key41": "5oJL6LKyY7g24q3NmG84ctXGmrDyifXJvbaodHE3NfA3jAsR8GtQsAUKFTmbaGJXA7z1VqZ5A4SmnNHBNtrfTgdv",
  "key42": "39uFGui2EE5C9ZnUY5rUiGjbiFmaf8qSpsYVdZXVtL6nMNzz6Yq4QVMBXM6BCwt2CZerYEfHJPEpLx3PRpw6eGfR",
  "key43": "4x2ghcyVTMriKNA1NHb84GbJghwafrMHBcacSSFsEcgsyV2iw7MDVJAtW3xGCfGmYGWB5teEpgsfYV6yMhMUBwNh",
  "key44": "2wbdEavBjhxQNX88cGttT5syz2tAc62GmHNgPKy2MeeWR47P2hPpt2ow3s7nx6Vf6C5zkxjCfU9vYmPYBe88ow8E",
  "key45": "32M5yQFXMTtDvngktFQRgofHB4CzEsnrkEaxZzR5qsjxqskiAwCuiiTxeFGcYaLieR9Stau33we9MwnpnvPAYA4V"
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
