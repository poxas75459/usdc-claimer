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
    "2v2rSkbFcJtXDYdmWcmY26k1qMgqNsfDuRAMUJNWDZSczMhgBoiabxnN9WPtMJDbQ99cBStWyP1pUgamWi3iPT2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Js6DmVrytTpPwUCZ8NBHH8Nzb5GAVGKsD4uvRwG9LoAPoRebWdtQKFgyVauvsp186tE3yuq1UVfeMSjEYiWUHb",
  "key1": "tS8ggxccrCubKbxsuAQ1tiMbNwrRy811ADk28sAxJsM21WzBVdwsKYtK26LuQ7d87EZeAFeuETxwkhwjRZqNK2w",
  "key2": "2S6F4JLgTHcYBYzBcGp15CzKrgLFkrS5G4j6FCV5VCJES8TAadYBkqvzFbkSo4uDub9wysYQJz8u1PRNLoHhXgMD",
  "key3": "44ZrxrGavbwyWj9Erc2xoM1WPRUsjeKb6A2UwzoEVeBVSxXjV7nJcdCsbF7TVnHB7PNbXLogrYEznQtdfnS2h36v",
  "key4": "LoV3y2tpTzso4hJ6X7TfGrkmtKAShmUQwuopJBWbktbtypyqGNwnXE5LiYw5FA235Ar1rE4XuGdGtowKmdXv2rP",
  "key5": "5jPEvCD4gqNYWNRE4Hza2GX35FKXJRYRgnh2WwDJzueUcCPuxDCk1xaQVsiidyJUGtGxHiDcktRBNw8uoFHrZaVH",
  "key6": "3cDqMzfHEdWwQ9eiwYro7fWsYGDW6QsK7Aic5GnjsDyLL8x5F7ikS9eqnsyN5wjRdDS7fD7URNE7mbTyt4iPUSk7",
  "key7": "2p7ni9Wx8LcPR5fC4DfZvZQUmH52egsWY9y37GD9AvPSmjpJ1fUUeP3g5CV7upXQeVV56Go2XS4xcrsRYqTKwvbp",
  "key8": "5YsmmDWo8xLudH21oyGUA1F4kKoygGKaxgEEsXfUHxe15vCjAY5pX4PtsuQmB2XBQaQSaMzEYhFiJDsLRhsBrMn7",
  "key9": "51532Gvn1epUnuFSfQwDDHbPFY1SWGFKnC361EkH3T95DgdEtUiym8rDJTQPLvtzWcGTscJuE4Fy9wo9jYPfgJk",
  "key10": "66APxbyrFx77YgAajvQwVgUsgtYBpjD2KXevVzwJET33DHtyqZTFZYahc3KKDtY1zS4nPrUbsque1GhumHXU1feA",
  "key11": "4pZ7YcsSooDBkPDCDvVDsdqUzs8NhzKj8z9YbRr49BQ8gpZu2efwb4abj5eJoCzj5eWp2XdWsoENFomg8As68h9p",
  "key12": "2v8j4Zcd8veEsJek3dYwarMkdqp7km4NWXR84cfLuVdSm4ZiKYnfFATe9ccv88N9ZH1aVrcDo4zwkez5X6JsyGaX",
  "key13": "2cTb3LkP9fbEjke2wzrzfQunr4AzZnF6EFJn41nXkS16CSiPeMoGsrgANPNXZbNKECfMepwnbPdE9pMRZbwTVMwi",
  "key14": "3xqvWKaZHCEmtR2ccdKJ4aCDJroy6mvpCwzKm3HH43ABXsLwn5dxatQ25oXgbepMu5agH3JncAUp49Tz86b5mcNS",
  "key15": "2LfGYCGmbaDaS26GyxHAsCSQLGdxWnRQnr7BkT34FR7M2ckkM7ZGkTPYgrgT4ModBPZtio1BgEUXFWUhxK6xZRah",
  "key16": "3ihrCNLYbCDiG2QBpLNzAoieLtHf3tUE2aSTtuXDvevDp5DCvkEJNfAmRvDsXdV1MDCtJyqAZA8D5Aa4FJ19inGT",
  "key17": "37CJ2Pbjmjtr4UxNnzKsnGZohDzgqgApYd4s8bK7h3WQMAa7uXp9hDc8qGEXum2PH5DR7e1zYjq2qF1s8AuY9qvY",
  "key18": "4ptsPDrjnn6gHujVvxnxdNGS3teirnVSmqQt61GT2J7BjY1W12tddAGhsZF3AoozqBWRVePF2xiqpU9jQ6wkn6Dw",
  "key19": "3TXnyQ2DJQCRVbwaVpANxe7iMQXW7EBU3DoX7rb2ueppVpt85xCEoa3u3PUpNK7wFxP8tiJ8UYo3tCeryhuMpo9e",
  "key20": "29Fag7K8tprPGH3fyY2aUdGd7sgE7Xarhni1LrsEbpKxaBrfXrcPcXSN1TVc1zgqxggNb7tzr2CFFMt91CegoRSJ",
  "key21": "3FLfj42JsfBpP6ZPD2vCQgPpf1uou5h1zZ2rJokCxPJ7QXWEDC1FKAkEYHyfxSNDBrQ7Veis1HTiWEZWQWsCDpyv",
  "key22": "2W5izEsWUA5HyLaJ35yBYEH2aa8P1yc2CZMKr5BHyZWTR9MgQjhsVQD52cTeASxwFQdr7qpW9tMwuoJghboswVu7",
  "key23": "36s93rnncWiR1h1CAZpVjdQHSSK2pd3S38LVvRHq5DVFWLxQusxwPmzHbu15bUyERz16n18DtC8nyJm7MLRXMN7C",
  "key24": "3Y2jtsKPibKvJSancTuZALsGrC8A5RZoNadnN8ya1dsM4BHNYkBZttpso41y3HbM9XCUVtpnnWkiEDpb5vAn6pBr",
  "key25": "4j7zeAGfQeaE7tRRmb9dSbjXuHtWrDeHea168UpNBWb4JeEFXCDx3hbwAkvVdhydz5PE68LerEpTZuUVwz2uvFAm",
  "key26": "2THfTLfJU5Yg2gkSVxGP4Wtgqh3NWX9V1ASGG5TMnbx4U1f871ChJwu74TvtZwAexrEoAGcEBAKXBnve79AcbUMp",
  "key27": "21mfzjsdxwHWmv1rs56cs5W5aHqDkhRzmfjiZ9pdJQb5zs9AEHcP7ufCyhCt9Uj3gFmMag33yxVXmZEtiqHF4dSC",
  "key28": "4MwNG9SU63sFtgH8KtjnhdWQMzJDYR7z3MjkyYNP9bzpzgrZYznvKj7gijEf5HCGgXKQG1wsN1WRdBWZJk84ZQrc",
  "key29": "Np7g9aSmCkaUtsT6fCydU3dx8UT9zBXQ7somZkswotN2ALyKombMddxagL1DdpQeSHArqQYFhZ96uTvUV7u86sk",
  "key30": "AJ6T25E7SQCAbVxeUNZgxQ2RUCkEb5viar9xgWEZTBNBmQ1r3Y8PKvgLSjz8M3sYimfcJuoqZEQ4W7wmyZrPEYy",
  "key31": "mCxaAeaXACqiagfqX439ydtT2qG2KmMqwXyQV28zc6C3DDTSTHrdqvYSBg9jKtAdP18B8E84qhcHiQBciDN1kFQ",
  "key32": "3N9x6oqto84EGyKonPUwx33Fnjxj4ik4xbEqeN4AqEuZr6LKiUCod6hG6X2STKvqKN1A37etheMMRzrWZTZ94RkP",
  "key33": "3mBAwQYALv3nUKuzuSh7R8x9L4z61PqMXY1VqudynBdDDysuf3xZLiTA29o9fzYCzjz535cWsd5833j2fG3Czppt",
  "key34": "58QAU5eWoY3YFwLhDHEccaYCUPrJnYRuXtfsTDn9a53KALVAQzq1MCQ3tYdubf7QYPUFvNGyqN3vxj83qyQ11ZrN",
  "key35": "5q3G42MpwGqY6DfxRpLxP1Z5tEK1ExrgJkwcqjXcvguMBrRcDyA9sDdP8Har6vsyBK2HMNxMWzxyy4uRQ7eAfRoX",
  "key36": "5o9At3sfdyE9zshzfM3sKJnGyVteUWULSpwfZxF5pHjFVWMoLcMzX7MaaaUoWigAQKwTNpwjyxpKWHB8ywHLvEfH",
  "key37": "2qSQCGw9evyb1ZC12zZqZNS6SyghkbRSaobarXpJcyBCB3aU7FtYA99D1LECojSB12mckab2ubKGw7zSEcT3sNAH",
  "key38": "56DCWE63iopVE9mnRwrUauxMiF8X88d4kAzoZnW8rH4QaGJRMkow37TTwbgFQBqCgupvfchPTFLtHR45yYo2Ups2",
  "key39": "4qDfA6kfx3mS2YFbmx7RCeiJiDWtL8xN8ZcoreDWLjtxAQeEY9E4fF5co1SrugHtQtiHb6WYpLVrxVUL4xbJymTU",
  "key40": "35Ej7A1FVQVn6YKQNL6fCtLCvsgxU4ubsyiCpJ4r5kqgXZuhWh8iHZgoj7myfJUPqRJkuYpqMXHB3wuYNxLWkuxs",
  "key41": "5Y1ks8Rg2GBgQneCHuPxunaNr9BHGuogEz4R3UPgPyZdWHYWyiifxAZRtd5s7rb92YVkbDVmUMy7bHroQkSGokeQ",
  "key42": "zVEUg22LQvbg23zgRXtz2UeUfGPuSCh16q3AZMZmhPSR1cgd39LfZ8vE9heTWRHvsyNZGBvLUZYjn3QVphpKnwa",
  "key43": "3eoFCfQMEP6UB39hV71tvHpJpBQUcxbpYZKTpXA52GYAZ8sFFWsadjwmEwaahEbyEUviknUwhwrR3y8vjRB5SfLg",
  "key44": "5gLq9guryhuQnquqMz5natJyjuckaAirtEFJ1igbrDVrTZRLhz2RobX1hNBDdWyx7hR6ff5d5jtmjoB1pLpVvAww",
  "key45": "4wysobP6GWhF4hdpejLfgXgDYkcCoTpJZ6pM8qhgr1suegBe2Vyv4qgpvs3uyTUhKy4R4tZwcAi9saXsL7u67fuB",
  "key46": "5rrVHa5mVDm9WzZ4B2BtaJtCqcUWMBMK8TTCtAQY7DbMpgujHzh23wSj6VUsTfF7KuLT9kmB82AMH51J1uJPBAzp",
  "key47": "2aLAXKce1dyLCEshadgV6kpwwBRsZwkzvGtFGyzw46yEQrvinT8Mp3dQC4XCUGf313yHuJtuHdJ3dBbEotPBX1Mz",
  "key48": "67GG1gfXjRwG99mDFEpM6BmY5y8p7Yyzk4J29cqMk1RtGrbSXJXs3FGcN162Dnb6hGqodrk4xhr6KEVxMUJobYLW"
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
