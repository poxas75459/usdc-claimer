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
    "3C7DkfkkLAujchPpZ697DRpphss9WQGhkoG6XfdDk6wp3vWks7QkLLxExuX8x2RbZCxMjJMkQvN1iq7PKFbD2taj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vgzULzGpENQ8VPYDvR8n2wZ91XJcHC9tyG3RvgPFqiTg264USH5qUpfEo4U5wqw5WNHeXk2AXgbgFVFxEnzLRPB",
  "key1": "5g83u5XoDAq996UWyfpEzQBVVf8jgqurSPWWhrZPsqph5LJRVEQhCHmmXzP4HxtDYFmdCpvEPCme1d2s2sW8XAmV",
  "key2": "21tRxBXNKe4FKNWwj2jcty2xPgWAYepRea7xgUVpd8M8B1xuPt8PyjNeiDTwVw1ys6kzZjVg43E5Z8RixiQkYKUV",
  "key3": "41KZYYunCWLfsCT7b3gHXSbyPVjkenTdbQ1gk9mFXgiw7yMLVsoiDEa8nJnUtQKTNCbzxtU7XQtDfnxDwEG1tCWF",
  "key4": "3TKverXxeLZZcratFShDbu5eHo1wGpkHsMXoDGWGrbtKV97RdwD6nJgPaFsyLcbxPA1zxgsugnqMFRSkcZUbkGTH",
  "key5": "aQhBhfDo4XPoGKD3Hhz9PsXsMDB5ywHwsoTYts22mwuQxqTfidtg9rpgmYPEJGvwvksw7nHMoJfrcqe9Moh7gdu",
  "key6": "5ECUwpdS3cZAUATxnVrybHwWfgb8eufGuEbfFNCUAGQLhDq7PVqZXpHSt7FEQgFzsqP3yFqAAzjtPidoCJMxBZy3",
  "key7": "2xSUmpP9EUBo8VZpUYsJWE9V3qLpxN56y3NnYHKAjSbchDeu3aNvLCNHxk6qreyTbbDZKCNwTRTEhpXNPiQpyNNL",
  "key8": "2vMS8QjCDKnbuisRLUcjPCeZXLyiFjYwjfbrmaiu2EhAvgbyPuCtWdug7pYSJPqYVSYj1VJpGCFvrL3S9hqmeLzy",
  "key9": "3farQVXG2tSisKxncr5LGPsm94mbkKYZ2VQP19kTpRLVTP6pfDypGcbbZdZiMqt9wgiE82WjDdVB3njQyoMZ6vSZ",
  "key10": "2n4dX9PamrddpcnKU3TsVJgEZNLyQhgGYC91d366X75Y68SxBG7H5CoR91zUU78dKqxT77N3XKTHCDmuB4mFMddL",
  "key11": "37zXaZfzVdSWPVR4NXrZXJ6fkNCMsPb799jqSmeCY5CRcKDYBexer2amzrfgFMEwKdXanr6yoSSrKYR6EVcoZss9",
  "key12": "2LGdH5t9Bs8zaoSyPpWZ5oHLHsYMSi7jBH1kyXBv2P4fzAaFQHG9XifHR1quFPranisvc5RJ5SGmKQ3EfSBdTmSy",
  "key13": "Wxgg54pYAXk67qRXgoYSJNZPDajf7YodU7UyyNCYt8FRiiy41CXP1NhWnoFAmm2fbwbJ7BF6r7trxz69wdv1dJx",
  "key14": "oo5taXNRrYYLcBnvJLbD3TT7sPHfGo5EsZydzTmCCKKWUcgxzoV9mCxVGCNAzZ3Cd7KTWFVzBwxwr7sBukeYBHn",
  "key15": "4yCYtMES7fjEZ51tMHUBM2gf8TXL47gHz2o4S1pu4UPd9LKD6JpwebyQJBJ9Q6yVroQ2ZFEANoDXnDRs2MyeLWAF",
  "key16": "2TKa41AqkUJGJ6u4oUzGg5755jazkJD64uU9odDty35nNTua3AanidYvuqG9Rk8BDn5mukNdjWG5xEFhnpCVuq8t",
  "key17": "41LtLaFMQvGggejBJnVQUseL3t91whXxrBae63FUzFC5TmwzNUCBe8Lw3RtnxuoH31epe73fYwfB9Y4jgpHuwsxT",
  "key18": "3q9zvo12qAqG9X35B6jfTjUqaJL33Y3woSQ1rEuUg6FeNzqST2k6W1AuzcxkVvDyxEB6NkdtCd5opikRc2mB8GWD",
  "key19": "5933V6EzBWPhE1gmgbwUK23QQQaXhDuArX9G17euVx1JV4afWVC3CqVoHeTGivKjECVX6sBXrBRgEaDWee8ixxH3",
  "key20": "4PYoSy6T1P8tiCehZqFrBG6yQMegMPk9TwZnxS4WFrHmabU4yNvTZ8PZoW1FpiUTRfZ51utWCGi9rJHogkRMCWiU",
  "key21": "231RnDmZn32fsAcSubtRCMFEGk6DfSTh7MLjiKWryK3PfSnJqSypUedTfFyJfqsetHEKcD9EzGibLEFCpioVSWp1",
  "key22": "2XXdXDvqqsBzRGsoQP9Nq8kPgdz9mjHrVJaotZJZjVCiDUf3PX35NmgcHuPTW3sBUXyQbk7xUKCGqwgfauRqB9JZ",
  "key23": "8kAgKDyKw868JKh8q54SvvvWF4bjWdBCiGGxJMiAZw1F6Fytn7J77rbQ8rCiy3aGs2Rj1Gajt7e4cKnCQDW4oi8",
  "key24": "3V2HeAPeVpkESwyo4n9zLJaJhupmxDnrvXZshwmx2ERmPsva9wUF7pLaKWdtJazaiJ7KvPtkPtaoxdLtXxC5mJ1d",
  "key25": "63mVXKkAjC5r15Nfpo3b6NLhB26piwb9xx61W6fkkr4xU6EYcLLQTnjNNHev9aZ2dt6U7Yv2hmAEaSmAjFH7pG67",
  "key26": "34pVTSqF56AkHd9hm7fruMMZTptnYe2ZqKxoLzT6ndkZPKaYfkP157cYvp9PYkQ4Q7jvkuLSfL4Yne5Hjt1D6P6g",
  "key27": "RemZdvrAsUHfsirAqesD6YRZ7CnRxgpNCRCFh9W6jq2g8XwP7hkKpYUFKHsXxSQiMDWTEMKWTFRjUHAFaZnDVWi",
  "key28": "5foyJK5hfGiMdqnnsmJitaim9MLzcRapSXMDBw4myVfW9JaDNSmHKS4UBhBFCxmsqnKL5D2JLCk5GMpxUgCfccJx",
  "key29": "59xgd1ru56p9VfzB55uvuHQoUaH32JVUjhX4wJBXAxtxqsc1jbBzT2qTvPr68AW2RV7Rr6wzRVbw7Uq4s15aEA8G",
  "key30": "3nTJ9zAVvnw8k5jZqv7FP6D3ndokuUZ8ESbMJMVP7vAdjAQGVfnweWPjsXsCqTDRXdn8LYPZuW1bYT5yFSF4133n",
  "key31": "5rkyZBzsu1VbySKkjjeX15zGcmtV41UxDNTQkSzGECXNnwEUEeAGBv9BXuaztPGWURqcnv3cq2HKNTHcTxrMwnDt",
  "key32": "4FHhgXo7a9xRvG6XJk1eAwLXazmoPDN6fFY2uZzmoNsvUbNYhKdnarWs9JbQFHE3xYuvcGAodVdcnSHimKoSevXh",
  "key33": "5p7bMMKMqRZtRCJiABvBbv4uua5eDEDN22WsTPMhoBQCSqBQtAGkjzEBeEkkL9D1f4njPUNmhVU33GgZL6VjXprB",
  "key34": "jaYQkW3DiDe2bwvSKC2aroLQzyFBVUSFaa77JebBjjC5WEekcUSAHY7ogL2wdsbX91fgsFX61HBEiQkeEwxzuyA",
  "key35": "2h4Bcj2tGwhyVf6i6VCfamADayj6GPj1N2n5iZpYwUZUo2HqxfkQJYHU3rJp1Bke16VEFH5t3vxWjrTDYNJGyQed",
  "key36": "3dbXKZ1SEDzFHvC9Hy7FytBAGG8tD4nostdPmcEqbJ9UxjfJXPxfqN6AQRpXTrFwmksfb2Xr7vLaWCpxmVZPpgQz",
  "key37": "5iNL5JXfUiUYUgHjyyQHE2DABkcJb46KUMSsdcVSL2Txp1MqEQrU55YUjNkWvKqMGL4japkLfRPWhJgkAdu6ihAk",
  "key38": "27k53K1XtG7eEo4K6G3SmQfLMy6jYyUXYpuyytvDoZRVZ65mGwW1HTXYU3kmANFB6R2aMitdytXb6HGwmVPr5bs7",
  "key39": "4sAAt431kYTpGGxR2MaYw5kWEDAZoMCewzfLQuvV3UgSBdZnijqCo3YnVg26XxiMKTqUSziTahUo2UTfuXJyTxgB",
  "key40": "4LfE2g9eudnfRQSDUQCJFw5iUXwxjHqsMym5hjZA3V63wYUdwega83vdvSG7NKZUhYfhxCaaA5d3QDScqZ4FmjCx",
  "key41": "3ZBzEVSDYFtyqrYo54XN24puwCxtE4bcarRfEWSkujNywCXtyouxN1oWcjkYAygVfXMRUXZ2rA2UrBzpLcPpDiGV",
  "key42": "4H4H3AGAk8M8PaJonvUnaWj3iFonVDQSHNP7SRBF8ERU73H66F7cQRdzqvNuDdLPc71uq17QLjJbBUjTTQ7raSrb",
  "key43": "VfhfKXV5A9V2bX93gSTdaP5hr6NMghrx6nB2kZ9ajkh1VCSTBCgy7P6exgySCqxBumibetNSYenLuUPUbg7DWWH",
  "key44": "3BwF3aaLUZjsBeViiELtP7LZumC2MPXcdsbFCjfZKb6ReEBQz49nHgWi1ZKDnFrgEEnvS7Ab7kL8uoBVqq5VSdqG",
  "key45": "2gENNLJSNLvPn9H8USgzjKHsP3RyRf79Z1h7nS1FPvSRnbGMpGFstUBMXqp6jCkZnUTx5kLd7iCoC8gHWkedK4m4"
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
