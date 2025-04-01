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
    "43fsCBHNMjheKAjeFQxLNVa5wU9k8JpVNbfV9WYPd5G1So9osAzbSrjDyfjmCpJ6Zq2j3LmNtNL1H1RhYGLqVNx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uoDeF9GoCd51emmr3DkRQEbjQFw45J3Y5WDUYmeVi1qcguEjDgesh6G9vcQLoQ9kSojBbmPSvjsTGYw9xzUdQW",
  "key1": "69YpKCZFNPLTDK3tFYV9CPHhjKEGNUzMXYdWbM1zBF3kxicHQ5NA8VtcnsFMpvNpioygRhH979AgfTeDjx2rnuj",
  "key2": "65tUzF1H7KdaVi8d7uTnFWHo4VaeuP5WJ8bw55XDRa8RzZjWAowGZdFjKWp83RepZAdEo4ughgSasiAkFgiTpMfc",
  "key3": "3QmxP7YomnsZY5FaLY9HfHJjRTqBiJvh47nDfEbQH94Lf5aUsqKvaEHnUdCBe4rAwLN4DZTZmsb4SCDxEYddLxd7",
  "key4": "3fcAuMdAWaHZemCwzs9JrHxMvLt7souVhnHgFLsWfJQxG1jgDntU6GZFsL9FSbqSRfWRQsASDsVG6Ho5X8CnxZTo",
  "key5": "2m325DwHYvSocyKsGhm6qhobod6cDzY7cDsLWFnRnUksEZhweU62ZpU3g9dQB3xS1B8RzRBsPRAZMSRi6cdKeJvX",
  "key6": "K7y4GdVdiZ1dJ7uFoWGeG6s3s8445fwp51txnQzoAYGA7dWTx4CRtvy6A3kMgNpFPsYtb73GxwB2LkfKNUZ5jZo",
  "key7": "5h7mmvTHae78A21YWRJqnMs7m2J8i3sDmHMAENvK9DuwWhWrCTPxjyFBvH77A3vpgB652NLoZdykhWFAuTRdtnn5",
  "key8": "2QUve2bFk8yFLrnVwc5pdifT9SdtATmYawyAXXBMVBUZUH29J9f226LhUWvir11dtMTQBftMQoXzUFiCMbN8Ev9d",
  "key9": "5pdCxquedBpJpvMjUQmpJtvA5XPd523c4f6RphuhaLH8uGtTAwf4DcvwziQbBkSSS6sFAsJLdHiZJFj4k6xFkGtE",
  "key10": "2nZm9LnKpE91zAsKmDd5o1tQ242yiqxkmvJW41mCR2C87u46XHiXzMdARJ24hM46bxewcsbPx9Q1xBSVqvdqNZEa",
  "key11": "3tMoc9zvvXQA3gvoAdSYaeNBaGjdvvppWgjt5cTYmx9dJJgB8Eb3yp75PLeuU17V87iFaNAjefURCfUrZQXqj6Q6",
  "key12": "2VPP41pLJedUGFgvZjH9Re9bkCHSrUcopJThQA4HV8KA3AZjVqr2Bx6LLV3mvrs34ZJ6W44SBzqFXdBsQdRSh6my",
  "key13": "3bt2HLLdobVdfgBwXFSsqYP6xupHQReZxtswUhxn3GHXMVUD2r1i3XgzdYHhVYaBs8e4HuEAcxWHSWYYTFHG2R9B",
  "key14": "4ebhEBHCjr9neRNEEZskMWiNLGqt3kFtFEq4J9HvRVm8SA3932GzULyHA7cugfsg93nvYspGH4mHwyqxQCWTLHkT",
  "key15": "3AgQqRbpyhupBzr2tXMsizHJ7QJSiAfx48MPaU3ABjZ24kQsbPXmT61PhY5zmhN9DgiqLgrPh4T8KUJU5FDnb33u",
  "key16": "zo1ytTLVq4y8XjzxZCCzY5BupbeFP8FwQ31ffMY9YgzZ9RJ3QA7B4mYmxb5YwAAwcEyqMm7tKzLetZyHsx1eUGs",
  "key17": "3W9FFr2YHDATYHyYPtEEewS843rz9DWdDtsFk3F7HjKvQnyLJguxaJ9ZoLV61Np4ryuT6954Fgq6eVudnCLHgqyw",
  "key18": "5cDPGVRQsRYgCYfH9z9YkKHbhoDG5Hi3ePnXPo7DKPtfcxSb2K8ySnVd3nnJazktyF2XR83jqUpkbnbndi89hVg3",
  "key19": "2Y5QeWHy8msq3kvpiUeYZzHSW6dm1WRTkUzWqNgHxfUHkb39xzystcCHJb6UmbXfkM39aXwqZBWcnFZiu6P21T66",
  "key20": "f3KSUEa1ESEVjTRw3HthASkT4G2NeioKcetJLbU8mN9LesnKzpn8a1Z2vRR2LP3C8P8hdAamSwDB5NF2LSididu",
  "key21": "5twogSwH3MV5bJpweiUb5JXbAUxhpKSXbGua8A66a8Ckp5jsZ2TPbGmXcMjZzeyswk8jADdcWtF5VDnFcMPjLAyF",
  "key22": "4swaQrvw7VHq4hrWCkyQX7MsgCNaKf6X81Vto2DtBjWCqytmE1FSwcgdxk3DvE6DsUpgJ9nzLUDpuPntqmS4x35Z",
  "key23": "452DBhknmTZXzKK24CkPjGAGCyArwc6ECB3UTQxA3YcFDB92xaKtpuj64gnpPpbef4rVErfgoKyefb9masXxtyR1",
  "key24": "2RWkSFrM6N2w4DoFU9nCPSiCbHnSBYCncE9AHyobvps31N41Tr4QAJbDJxujDSzxwYsvjrAdTqAd4JzHyj6yxjA8",
  "key25": "33YB3ipkBBBRqbGQUomnSaGRQFxckQm91EjiHHddkgbRrGwhu3Xng9SRxd3BP8n2ydYF98EseeTpvqLaVarcY11U",
  "key26": "5iJxubRfAEkpLStvw623uf5gTJLTWiFLy4LDao9RLeM3juyfsA2e458hjfbJgNHi4VME8nPwSn9WZvdYbeaHNxLU",
  "key27": "REJCLULUpJD2wQBxJNf2pZXCH5H4JvNrsDjrCZpdrFSRC3fkdntDzJT4xEe6veoTbxu4A3M844iamtvJCUU7gu8",
  "key28": "3zUNmxohnSE7kLcJQ9UxjiYACrADtbWtxwFgBkKVmTNvMnEiyTY1eyH8T2gbjy4PNW4BDkseLxiiSSZ5UqUjS93U",
  "key29": "4kFYrjrZerr128zpZzjx9oqKCPCNkxHWMs2tUMwUCRXUCZFkey5Df1jkLJs4G1sSdfMBtEiG61FrKYyoydhiuEBK",
  "key30": "4NzAZfc9uUpHKTvxU1hxrV4XzNDPN9HAconc3kMdnirCnmuHaBsoSLYGQG2eVbKqQiqhrjvkV6Qm3EkFyV2GEhDS",
  "key31": "49HQKCJMVB5X8mGPsWEYXqd2TWxq3cwrrKRLNKiBpm6fLXLXyrFk3obnd5gjCu61Dfy8r3MD4zap4Z2S2M8oBohq",
  "key32": "4HMNnSUT7YtHwqTPESWsio4utTUCnxbVBX8WH9bDDiFxKGfhFkodqHLJRunf8U4vZBrjJXpoHwAhW8ME58TBVJiU",
  "key33": "5CsBv1Y2DpzrLUpvb5Bq6XRJyYqt7k4NLXLLwdp41tF71guZuFfbddicVV6iZstjGDfrm6UDaCrZYt3JG8kfmkYT",
  "key34": "E2Eg5x1AhW13CuzhS6Qo5D4Unn6Ms6gMuaJLHdeoCovBG3b5gAeCpUsXk9UHEogBSDJk8adZEMwj5i7S6Qs7NQx",
  "key35": "NXa5k7gWGW3tsMW7T1WBmegs8oXLXEfUwgaobhfALUXkEqYkmtAux7bi62frBZex4FhcQHjL4XP8hiyk7J18D2C",
  "key36": "3nZcfxb3VRoC4yneh2CH6Tn7caxPg6PTuRAQvUjYS8bKZeRTRXFw3vHyVL92pVHmuH6exN3NAeZimoxR1yrdakXX",
  "key37": "2Vqx8gznmmrd4Ab2DGezKvgjGDFZD9urQ2x7Y2KQe8CTixkDJAeSsHm74x9bixuqTRqDes8ZFGzqdu9Azf2CxdjA",
  "key38": "2ys4J9hEaoZuhDAso9zfBwvc8V8SKhxvWKuuJtaHioc2FA4Pu4RX6Cfxm5wcragfrHaw3EMGjkunLgtS9Csx3LAb",
  "key39": "51oST4J48g9ubazq9msDK3hmoVfrs68uXszbz9UpCqg16ZxmHZn4LsUQic3ycoxBiGXKZDS5KiR5JsRL4x178cHW",
  "key40": "2HrNgJNeT33ik5YjwUadXsuhdZsLu764DKn4eYXkiaqBjP119eqsyreFqYqLMMoX5TH3noK6yJ4Ang5Hrrj6oTix",
  "key41": "44G8AywoKXKsTS6ErK7ynXyyBhvwzrmhh5DGzjjBycVCJzWmkZ4mrvrVBE2aFAA1AvUuSfH8NU5DiHodRTCUoUeG",
  "key42": "4E9VdzFAfr83qVtfhFFGb5P7EHHewTsRvQtCQqkZP4sLuzPcT9a75T1g4CDa5U2y6pJHWT7jyZzYreEL4rwTiLxq",
  "key43": "49KsXrnfdWKtqtAbZiBYU7PwP1nkd3rpuaS6LvRneZ9jJtGYw6N4iejstauSYGkwteWeznQ8SZ4zrunwNVqBWDqA",
  "key44": "2mPQm91ZfLpGo5rXVHd9Vc9YcwWygRGp39JyC4TPtL2T8JLqf9ySKSoWZnTPNwJ9VawkdbX4vnbYRS6RobE4R64c",
  "key45": "3nQPghwnbHe4bLjqFbBhpZdkVsVQgLDC65vATih8tQjKh2JDSqsSrwKsW32etrwhLjXe9aKFnzgUQNrb12eQU2RT",
  "key46": "4Xh5ZLraeJPhtu87Eeq5wkqh4UjNa7woDVQnMJa4fzSXdytoHt226VKo2gu27JirkpHVVXqv8sgUKHsuVfZB8CSy",
  "key47": "51eYYAzuqLQjQrT6pDR6rSVFS29FfhK1e5pjVzkdg5JG1VAMaun6ZaDrMJeMPCuC9WmgpnK1cZspAdDbzaLqqQcr",
  "key48": "5Et8vkxDUMpZJNZFjWohbdb7GiL5TqyvmbhqsPz7Rf2xpfnoVEr5v8Hup8vEjCbUyTFWXHqjySF2nEA5PdU8PBvh",
  "key49": "7gnrwFGnFUnm8Jb3YnpuKAhH2T4BVt4nsSGVnMqqxxyNc9MeesNXADJsoT2m9c2LDypSCqb6mcwYtkVeEp2vfLk"
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
