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
    "3PpGbhbUTry5xZKPby4j9Ju9DTKZRJhGFntgrribNwt4a8XqAyooTvEnQBD4ocYmt9MSDsk2cDFzSfFXupg3zjto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mNt4FADHkhxa9dnxz7Ny8mgY1gjdrnLqFrbx4QMw1uGZtdSjAGtuELnMB2EtQzE9qS3aG7pTdcWZig4k7MjbTMa",
  "key1": "23saRSbzBae1ZhEiE9YtNjxpNRfckKrhAc5HWJMMzJ6GqdcLELutREV45HoUFT5Snx7g7iayCnU13TwMtZDkYTod",
  "key2": "S4uSXDDn26C4R5HfJtaz79Rx4EN4e5F7ptmxNiU1gUP67xt4zyh2sKZacEg9gXfS96dxk8zkM9bg4LM61uAg1UA",
  "key3": "3NGm6iXAZng8dwTT53kmkKfRvR6qXttpuFR2hCpgrTJME2c6Q1eatJoSGTdLHA6A7qGPTZq4jnfayonTri9je9E4",
  "key4": "3YaBtxemD6cPZBC4RwzHwYoUH9neCGeDXb26hetqUMXz83T1RgSW3CoU1oNBhVfD89fY3UmK7wRsEmftp9mjHHGE",
  "key5": "9Ai7H4nkahTQ5Jx1aTvCtBG5V4USefcG1U1CUt5ng4DrzHrBewETe1DoNtzjQScRHxupYjXiyyDeGN95aRYP1Fu",
  "key6": "3eM8ToVGG2AR55TK5AnXqyTgHGUE2JfQhWNmb7snck2u87q8CECJJy1TwAVWJdmtR4iU91jTT6oveDwtkuETNCEp",
  "key7": "b5tSxzm3s3G1qMPkpfZVATYazjG2rRUS1DPD5M1tcfVH5Lfjkhvt7ukjafiHHjymPexnJabFjYcquyP3HFoeXoL",
  "key8": "5uJnHAt9DDkb6HvYbuMjoAfSbNPTyYxFLNCCJBo4BjbPZnuFvxzyKhpfjjRvsr5ewoz8xJ4qxMD4He27qXCbJ9MA",
  "key9": "5HP6AMKviRMmUwJs8YyJcfCUV8HUUuCoJVMdAUf991QBWnmApGvkWzB6YvvczHvKPefw8w7xTR4Qxq6wmYJjyfGg",
  "key10": "2etQEvbp6JAWopeSvx6YhEMgiJB8DebheTndjQVTcgdKa2auhhSmjATECWFk6SjGghVJXWPfn3W2AspHMYAQZZJE",
  "key11": "XKpEpsUo11TyAuhPnoWYj3zTcEGe2cegezmkxLhS18b4qT1fAWc6HZSmrtGNTjkLYSrRaosJ6vWPL61EMsUT1Tf",
  "key12": "dfVrRxBDWXiGMHc4vmAcsk1MncCGoP7UV3CvKuJqNoin34NKZCKBzXv83SrxR3EyPpt9qtB3epLB6PgC3U2grWy",
  "key13": "58Fqy9XR7wPs9ZyzqUzrFjXBxrqYkgdWymNdm4pDUWw5WKa5WVUq6HxFVVUs3SvtbcvChkRsimd6zNbi5aVix7wE",
  "key14": "3kRXNn4uCEtZerziRbqQMgvJLr11EHE3u6n5qKamk57WSeB3a4GeUXvoBKyCMA1c9CZwRY4Hn5pMds9ZJrc9TzJ6",
  "key15": "jzVngMg2913rUspfFaMcHBSgEXP1aMJ7eh9ysUyBHzexQCLLGRExkkuiYC9aUgMdf5FaWtBQSzAD6Uvr8HemvtB",
  "key16": "44mnYqb3ED2v4BGiebMp59bspffqLLBjuYLxHFm5QafEZ4qUNy5YJCvsiZvSPtMMRVNvmhQEq8YRHzRctPuFGsfR",
  "key17": "5pqkjpzhBKVuChkKvtoxmg52aaV2wDs5jU7weWms4W8qdm2TkJbm3hd5vjaacdB6dRXCjqMxkQBs5J6VGkApGx3j",
  "key18": "5JPaUZceyVczuayRufhHuesiysxv2vShqkhGZ3gkpXVXT3NBNxJSey5G39aZ1M78tMTtpwLpS4rweKrnAVCaaD82",
  "key19": "2sYCkh3z3i4ME5i9xXJciqaG4xG5bXF2TBqhSHrSGR9j7nV651buEaFTWjyRAHmwcLRq4Jdgj1VVFA6ioYijAz4a",
  "key20": "Ce2tqewyrCdrc75rCgy8WnmtCyezBKAiVmmquvPdbiomaTWFCU5HxArk2veNbHc9GPJNwhRZmmrxjEeL4jZBQdq",
  "key21": "3ShcJEQS9GhFU1FMVQUiC9pNiMKpdmnHwyYy8irRv8SBFJwdedai6JDcUNEhAhb7LUd4XtLLty21c5pmePGKNDQN",
  "key22": "gPs2ciVT1Umu7kjUxWLWyjjKSst6FZCu1Lnk7b9GXEv8aCxKamytXjDAsTbcZxRrfzEBfPx2V7ms4rpkJrryazY",
  "key23": "5TJUFTrJuiCaHado7uFxo1HmVsqopHvXoTuHanK8AamiVDVUmKxS7i2Au4uVKNNkRxqWnSVKvMDeZCbhHxkR3tRN",
  "key24": "2xq4WVQCFF9PJ8d9CavMJQZogrFr6KkwRP2jmgPA7cSbKKoYPFVbRGcVEtHSeBWWqCRsDi6cPGDtd41viH9RJQmk",
  "key25": "3SAs1GaT3QinfuqxkMC5mQL1XTe8djyfvTPiBPdaMb5UMGwgwMNw814nihMiULxc8fiuVyBXmGKwo9dGk7tNys1F",
  "key26": "3hWyvhBpChQr4wQtvhv6YbiH47EwdXdND3LVGJFVpBiBB59edmFwXgzN1bDRpnq1PNesXuppqk3z6SyGLfATReaE",
  "key27": "2qrcy5AENn999HLRpUSnNcZoZE3hhSgYksWu671ho7gmzMsAVrxgWt6sXuycgsmr6Fhf6LwQq7cQHuw6azKcLzip",
  "key28": "3Ch21SYHtwUdHuTAwK1MinXZiZMzSR71CcgLgLoiBckEq9prS9sxidMnxZxTAidLtfdhXjKDpZDP1n2Ei857jvyV",
  "key29": "4PWqGXhZJQoDc1DW26qTWu1MizCZq41X13cb8uPMfiFV5FueiePn4nTqhVMSHDGwfaEDAncpwzkDvaaBwYaUxNFD",
  "key30": "5TkWdy4rMFagsHBk8oEgJrC4GdspWjvZJmhTo8N44h16nk6Yi4hXoDmoiHaDcDpuMrA3kzg6U1yZ1NgDJmaexDim",
  "key31": "U2AhDfm5zo44hhmBz4rQQJk1xXDRMQHWL5jpL8KiTbCCJNwKTMhUJfpgShsiuk2oBVdM2Pi2VTqF7Hqc1n2eBFp",
  "key32": "Z8CAmuWxFgT1Nfqku62VZLkiqcA4iKe6TSYjugnvUQbe38eZbeJYyc5GYQ3ye2swf6Ui3ekMn17BeWgosDi7Qfq",
  "key33": "EUT7Hxu3m7hAzMz158cvEGGsW9cBSkCUjjDH5wmzDyHYL615o7QfYN7RfutNhHnuxtpFmGhGeXjsavgPnHWyR1S",
  "key34": "AfR331L6L44AabcYCccHkTT6hQ29c5srX3fwHNniRyh5VC1PUaYYHogrfpRjJJiKQt82RD2p61bugKxPDcBpjnW",
  "key35": "5XdG6NEstcQn9CLDds4qkynQXqtyyZFity4Wuy6jiyrPzN5rFS436jWAyKFdBBoYmwbSFNsF9nnsC5Xooh4kPBwp",
  "key36": "3qMezkUgxwHHNXdT4LtPFeuSaFmD4vhyMhpCfXGhrVbvZq3gfQygByUqaM3DmeUNJiY435ninvQLery8QmcBqXtb",
  "key37": "3XQc7RG66e65AbUKeJ6gJRSKRB3E3VXVMWS3eeeJ1eLoZbuaJ56K44WhgfiVT7gv62Fvv4bsN1i21vUezzmSDo9v",
  "key38": "5NR5A2EowhB2VbgZ4L45J6wRceziY9MQivGbCjG1vAdiNVkBrqm52wGb9uUDVbbvk22DUsVW2o4mWXcLHUTnEq2s",
  "key39": "4WNL4xUFoqviw9ZNQFns1mc4ZnK59qhjFJRJ9P3jFc9RCVDXWiHoAX5Nhv3BnaqviPWhtDLFsFUp3Ej8dFN5kpuS",
  "key40": "5zryAv8fV363yPVGSVNk75w12nKz8hFEMGPhUSMrfsqV74fLb7oNijaqRPdxx4iGG7SqAe5ZzYTq68iv7CmXgohY",
  "key41": "2ibAvK6NDi7XFQ8KxBZbaSYj4YUU6fn2khhdhjbjtbLVa3u5fUVGsN27KDmnYDYbKSZRGMe9yW3Zn5PZHm4whujb",
  "key42": "3t9tTxXpHV7AEc3eFzMCqxiLrxqGbt9WvupUUhXK33HcJf5sUP3W3wD1n3dwfrirbtJWjP7PPErACBxk3USitLcC",
  "key43": "5jDjUmtGkNzMH9MmEvJmKSrdenN3kqKf5ob9XjBmXENskhMr5FW5GsECsP67uNZhZSasQHeQcmZMdLC9FGQcmU84",
  "key44": "8j89KqKkfGyULH6xkCxthxjaM5q7QvyH1DyAHrKGcXJ1koA7UxVSneFG4yuZFRwaF66kRXu5XiDWpciy989EgVz",
  "key45": "7KMWSoMWWd3UhBFrj2zgmzkkBrnpEcVWTDoG9gd7uSdKx5ZVAjmJxEfAztCr3mUCc4dfYtnU4TodE34BfJULZmZ",
  "key46": "5rQNgehfCCbZxd7SL7pXLAUnDyUPbVTFBzDEJh2sHHZnsKLZaGV5hoGgat6U1UwNAgBhzuPyq5Zr3pT5p1eRHU7h",
  "key47": "5Z8XbAmZSTkQP4aBFTvheGjB3i29vKBj8mabGawvy1C7heNvB9Tt6w78xGXf1G3B9GEDjC4LcR6rLU987dEJ5NRW",
  "key48": "5xpFehcr9pwGAPKMxjM36EYhfJo2Qr7bVfxXuNmtUJr9XwYH3mvXa8KjF6XUoadWFZGtTgL5wwdPNKiAGi4uSd8Z"
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
