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
    "uaZQ86q2YMP8nVwHAFs1J7LTJATmUzRFYzdhLiqM1kNRLjBbdNr28oifTnzud8PF7a3U9fEHh6Y9zLYpEsvWLmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sahYDtwHGgcZQvHTpjT6vgix1Tno6wSDBhGugb4mekEfq7VBPUQHe6L241To27Yn8HrCwZPHw8JTWiNs6KcRSpJ",
  "key1": "naXccfsMiK8S7AevVYYSQRPDSLup9aHiY2Sk19qCjeWRd3RAR8DYH3EWcspwNWTuSC6AtP8M9W8K1kZ8bATJKCS",
  "key2": "2cER8YgT95mmC32n4u6vKeSVhL58WBEZW4vyXtQnFykLc7rXSkwzkN8YSVtEPjhHXHobrrSxircjoq7AxnNWkpoY",
  "key3": "ZVTXq7ix6ZHacnho8vx92ChgsakfRP3uX3PGg8KSTFEGQggZEpeX55ZgYW97Yij9SZFBFRw26oX91PtQsuRnJk4",
  "key4": "4iib36h5VUR18o64CcDzpqyq84He2mChPKN1yH2vqyowJF76nySFbNsDb7CDwnC7p9Mnti59B3dHrJCgKNh4Eqac",
  "key5": "oQpfVdxmKhFMzaFAP8WhTHeGuxEKRQduKECV5wTNoQa4eGJZB9XsAB1zf8vUFM1qj8Ro6shXniTD7wFgHB5wRXY",
  "key6": "3Db1mWAyHkThrrmdqt5cjPXANXtV2QEEdwvtk2nHcs8G18uu2vzmkXqZ84wAQsrYzSpUaZ4x8jyKXXaiizL7A36M",
  "key7": "yNvitDnE3iMUM6sUtqkmD9G4yTrfRF33U9uHkqDCVBCcxrw4YDuAWk9kjHMXU6q4J9wGJefFhkgE3GZev4E9Z2h",
  "key8": "2uhXMfkx9XuyFRAD3g297RWb5mqMYSGhoF6a7jDLNrx9qZjA57QxMtkqJrgHY1t3g8GAx5VuEqYikRTHTc8SjB8q",
  "key9": "BTDG6Pw7sK5uuEoPSitUMEN8dSEEEp1xqHSArQ4QbV5NHYLwMjMgTUofmkddD3W3awbRScnyroR8TjCuaTY7JP3",
  "key10": "3EAGpwgM8PaM5oNhA3LW4frET8XwyseuehN4qhge8aLXAVjUuR6DY6btLLTWdQpsNRbuuJDveZAe26cMXPVD8Lpn",
  "key11": "3gQGNfQEFxFBr9wLymt5RavFrWQn8kCr3aAHHNKKAkuD7JCDzKf6yCRqR3AGErX3up4tzCeazooHwwpdvj32bRbg",
  "key12": "sHAHDQBUX5DmMdU28HLHNoecnCFHsyxCaSW7vzCono6BdWokqbQbYW9aZtQhkFqG49CMrTD2AiL7xgeQ2mSUPgp",
  "key13": "5zgRabdaGngiJWhbDRENtpGGW2j5pC7K4hKVhGYTAQk7HVDvZeJnbjsrbKpahbkZhVAbCSpYD8vZk1si5NHuns21",
  "key14": "b14stuN1Yo4J2qUiGdtpceND9K8prjaQw5EVsReTcPp4KthtQT8MNStqDitWDKG2FQoaMajHUA8aLvEGF3BcL6u",
  "key15": "4KoY8wJL8ZDpA6X7j7a3Chxw2zzx5xugQssQ6Y3MusXHQB7SBSpiWSPYkRfffts3RTMkuDRX2yCwgCNTiM2bbuzH",
  "key16": "4mqxYPqfiSdYMg2RdhuNmGYTeHewhprLSErBFHWtoo8X1GSKo118jcm2SjhR2KgcPynSrrGh4WyaEsvUyyfpeX4N",
  "key17": "u1mERrGNeL4UR2QzeJW6f3ytK8bFVEc98SvPxSMBjXCYKrkA7f62hBaK63JHpXUwAFoXaA3mz3k9L95H4pcK5AZ",
  "key18": "2azzKcA5BKjzyJD7ZcVVWUpeXvmhrz6mJbRi8wuvzPtb47oRTmQQCgrFFn4bJXnNUqjehDakzsHvzVT5r62PDfH5",
  "key19": "3G6e22Kh8HccGXqLaCpw7SanxRpvAoVu4wiGryhKt4EGjhiiyxrp91v5Ap3B5DD7Lu3c6ND4P2x3jsE6QqTujww1",
  "key20": "2ExEEhnXc9ni8zJmK74un2DahMcFP6UtcjcSfjkSFjqi5h9kgGhfxnRPx5dy38ndQKyQxNkTrWk1Ynhh6XKhsk42",
  "key21": "3SZnXB84xeb626d22n34aNtBTaqYUGRXrK6qdRTZuBMtriRAEBGafRpgxZECyzAmnDPBoEvKt2Cb6H5D61y5gAkL",
  "key22": "3f6FQiP9modEuzSGNhS8dDwitoiUKjGd1uL3Dn1vvAHg1GtLKtdFeeg6GwWzwznnWJ2zss1oyUM6ztexao6etnzJ",
  "key23": "5BG4kSfZUoGV2GjUaDnAnVqfrKCbGb1QAqEmNWiY3EFwNm4zCeVVm8YsHPnHhgBEyUCSTQVA7H19gMFtndYtpQWp",
  "key24": "51BpecjCWqYKhvra3fjnqakr3ztLG36Ewa5ZhMrgJHyS5ZBpFn1tsZcvfNevau9RGoAFXRrKF69ASCkEjrS8fErE",
  "key25": "5Fau8ZpCJcWxx3bkzK8PUz6NuPcgWggEkgQ4CF6nXimkpF8dCgjLyBEdYGr9KTLkJak42ZVbvWdSrxnCeUFjcWpS",
  "key26": "RNJ8EUsBSxxgLCJyyPft53TXkchRA9JprznLXqWEcxjSU9kJCQe6eoZWqfHdHvGA9dc4JaYZFSRawxZmRc4wNAz",
  "key27": "2QdT9qWHyq7TR4Tdoj78Qi36AAHUvPTXN5hRaBr7vwD8B7BRoEXf85T4nTGiBiR7t9UHHw1KDGRWNZ1yG3YdBYDk",
  "key28": "5CA8n11pGFGzjRAMpW5sm1w9wA4jpY1jRHhfgmm37qhvUe43eCX8z6retDBwQd5nftsXrC5VzBYGVhdofVed6pXG",
  "key29": "5WtjbC1nxLSmGrNTtZYd6XKmUdU8V6t2W1C7yuawdmtZRmqrcpxpJGVJUoSNEZMmiCVeu43W592gcEyQTNqX9ZrF",
  "key30": "5ouDpN7ekdcEKfM1smwaxMutFckfKEUrycpe6rqNJQc9ZYzYq6xsWWoRPvekNtquAdkowZFPBFQn9ZKTPFX1FMjH",
  "key31": "46Q6cR6RcuqEQsDJc61AbrzFhMsyrEGu6H2EDvswNk5Dh6d4qDntMbxUHixfDNBMwi4SfSDH4e9Fip5ut6PwMMkU",
  "key32": "5Wi9AeJZ89RXEPxeTAyJHfDKfQSdDV2ygroKtEWvX7YJnRcyGpq3Nym51bMSPEM96bpkGvFPT4UjZ64YaWZUaA1s",
  "key33": "KCtCAQKMehphfzym4VJoMpR456X4mrf4zDf5g6xRASq6E4XAkDYxJGCRNeenb7DsRHw5ySxS9UBfuQuA1aDoSzz",
  "key34": "35firhxthCgBXBureJf8vtHss3obsY4pvoXLRCa9UR1brisMiJeGhp1xcRjF8AWCTwyWE7GNjJfSmvHPBDjc4Ua4",
  "key35": "5Ln5PHCjyjjPSpUjVAXxGvi6CxztAGBop7QQQq1NZKMN5YdcuPv5p3EdXUuo75Ab5BgoBtqiZKmjDfYcEK8tLZxA",
  "key36": "41vzN5BsXCNkRVcBsSiD4q5b1geGYps7zyU8CH6dn5EoB6aq3WSPzbzdoYaWx3XaQbG8gYjtheYr1SPgchKrfhL7",
  "key37": "2gWHU4UrbuXUXLSD4iQNDpvZhMZ4uWS23EviaC83jNSzuXPweXCWGUbdM5XxHioy4RMmvYhrEPDnoqBMXvANZjwZ",
  "key38": "2CmtSxkiMUPjBeUVo2y4AiBGFz1haR8GS1WuWSyUKZPvFA3dARtpr79BL4U2S8KXSgEBUFahSKwkqB5N6ynydiiC",
  "key39": "3XBVUKkyxcH9sr9vNSqfYizi1Wvj2ceGbTxubEcBZD1vbAHFoxsce2gzmgumN2ypHoHRt963gCN2qZGp4pr9FtWg",
  "key40": "5wS9G1PSNhgFgYLEKqnoX344zS2aVNJ5ktDL2VnUNhC2WrBbZVTn3oXC9RkE91SMvJZADQwcNvEeeDi9MCULJoFZ",
  "key41": "3vKNqLeLZ2KyH1AAiAsUC3yGTTDCT7o4WXYcBg1r8VmgWwprausmG4uwUzUdTj1jhFBvpDRgdQn79Ea6huonjie4",
  "key42": "5PiYXHu1sc8fUWgDDAfVaBbe8XGtxqeTL4V8LxQyo5cnsbZ9bxeVMXJRVTyQmREj9JSFY7Cxb9W51LbiEQ1bFmDG",
  "key43": "1nAmqP7N9K4QEeSzP1LZhKqtgMJd4n24sqjv5KFpKtprqXy1jnew8TuTFVJC3LRXAk4iU4CpUY4AVMR9WncAZmG",
  "key44": "62sR7WAH7qX4ia3uQzyJdNPnyZfQGobAH2tekiXzn82cA65ec3731yy7F29bYEWqEQZDLZsSb2KXT5yoYBA4Fr2B",
  "key45": "4vDo5Y16762iW4EfXFtp3r8HyCpLXEtsi1RcA9G7FP3rJa7KHRBcc6yR4QjWLKsoDiZYM64rVX55qbo714QrKpFV"
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
