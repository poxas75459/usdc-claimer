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
    "5F8onEQ4tYPr6LsqfXw2N5rPrpuNGyZh8gkRcU9bKXpbRiTHN3SDjN1QtHPRNtY1v95uyndAGSd9PZMaVpWfEd9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "azfRvedwgDB3AGMcryhMFajMssSnbLzDiTBhbPgafj3SFtns7Ai8E8JgVqf5k49SYGGqSKS48gNUHPq1gnmaeqR",
  "key1": "yno4Fzj5rSZk3vYcFTYJxNKNcXzG9xLWBhmjz4k6dZPdnGwHsp5vWGxaEtzCipBPY5PEbbAhL9rJTifzqM4XZFD",
  "key2": "3yzcHstnhopwoH8fN9qxV8C2GczjEwyqq6cuFvUyKirzsgdmDLSH4jJsc29f1BkhgjyRZ4GtqqKxKtuNTDkejNsj",
  "key3": "3WmdwN5RpRXjMjoPo8xkkiQ5zLAcfH4TMCad2XYpRsqKcwi8D54he5htYt8RTHzNnsAYhSVU2GjVSaiQh2L5SeuL",
  "key4": "r4NtpBWVFmLmyXiCjVDhZbQ7Z81h6eSVYn8PggoW4KvNHoYZHtNYYjXSKuHZWav7dJ6iNkVrbTHNGXtkjMtguSb",
  "key5": "4ym7UwD5mm1PEJ4AnRd4kzwUq4mgiZn4pC4QCKk9r4nNDMccZ6YDRcxc2hzqvbFVhEZ4jm9m8gN3wBzZCArrj4B2",
  "key6": "qq2NjXnSFfM1xZkVxSwAaYhGJPuHe1FhfpuFNUTTzzDDjy5dHymp3GcNaW9wiUszp5GPSqcScR3CUUsy9Guj6hn",
  "key7": "a5rsb6inLvxxzhxAFXAWzvuu3JZFKBvaYH79rKAgkrXHihZFARkAQcL5ddEidYSB9Ack9WJNHK8vZ1KoUMwyk6X",
  "key8": "4iYar84UtuSKLtaAYoT7F1p2TjMXaeLsMwitanjJqPsUnRFw987oF71pwFJnNe4ohPELnssBmVA2kXyACLdYhvew",
  "key9": "5iGLk9TMRy5LnaPC8UyUA9U5VfY5uLbj2gffmdEn3o7UsKUAkXd1KtzPzEhSgJ2N54eeM5vx6c8wVpdgQaeySHdS",
  "key10": "3NQaJWAdLGEcF8stndgJywK9B8S2o1YiogRCrwxrq3vjCWvmeAJJEUsS4M5NbVr2jRfD5KGSoPyyZAZtqn4Xung8",
  "key11": "313LgY3rUphdWKCUCRiS4sf2vTuMry2ViMfwwNWAUVKnVFwu3HUQTbb76kFrTq83wa8XczfqCtWV4eBziFh2koGm",
  "key12": "4t5QcvEiisjryDQ38aF38ci35u5vBhCnxBSSAN37fCzon29uZZYMweiU4sSjhrq3HSc7mAivQEGn4dUxSyoe1ZUi",
  "key13": "3jE2gTjsfNJarQAKR4V6XyZMzfvHr4sysW8N5xXcbBhqH27z3Av7nxNVB11vnJY5SuryDDvXwsbbt6Tir4Srkfqk",
  "key14": "42odfNeTsS3xBfPAQ96zkbfVmVHWSg2LxPGCWXCyRMiywkPyDxT1RoXSseSTXJZ6J8M7KafKTScwP6DUddzH5wp8",
  "key15": "42hpHPj3K1XQBb4x5F2WWzmmAtzaakMdyQig5dimA7mAwE4KYSCdGUHUsXeQoJ7dpL9NxFtgUDhZNNboewzquuYi",
  "key16": "rk1uowGhtjSCJ5dNKmgNkcqmEZfi5p7cRXG158X3nzwarmFAs91f6wecmtSarQABxZjwTzYLgnodb7yUffcGwEY",
  "key17": "4QzHU8Cvf3stcr1ZiYA35LwRx1vtLCQU6tWWhr1Pvb8NmPC8FF9xDPW6EgcGVJ6zNrWvDa9ozyWdmbKrgqGpfF8o",
  "key18": "2iTDvU7bvBKshEbUf7RbwnbC2sncxXDx32cDMrza3VhXu11FyERUXBgwjFQnGDXtsJ5mMHSKJ1HtHrb55G33AQmm",
  "key19": "3fdxFKdAczBLgbhZU1fPTVVrZSzRNhvze2keqcrxV2dm7oW7Dx9xpVBvdZHDyG5JqkBNrmuLDyMLAXb6oVj6AMvv",
  "key20": "33fRFv75vZNVAvPqVeQZM5NEEn5FXZfiX85G77nySSFrM2kHng638F7vWqFFDE2jpuPDM1zzn3pnEL2DjLtGEpvM",
  "key21": "3rrDd6Wv1puJ8cL6LDBMjiLU2M7FjhsG3vHcbbbHBcaGrvT8ibQWY9TQTYPMhJJX2uyxxM92rwoE2ohtj5Qjem49",
  "key22": "5L6X2ZGBKp9B6b7N2DHv3KWa66LeVNUNumoitRVZ5a4eKTPPxQQGxpjofAzXNLm2McHbggUUjsPVNWboUTHZYxyN",
  "key23": "5mLivu9TfPoEwdWpGVtZGDwvmXpGHE9UEzZRfokxL2jpdZCmQfkLRcnSuErrR33Xc14qQA2wGN8PV9dXsEVnq8v8",
  "key24": "3XGYMymjT7q75afWCjYPP7WAWXWxuzXySbzLZ4H6eVTGAcF6n4aeZJo2FjcrcDRBR1DdQEV4wTViUdkQoKGLvu4u",
  "key25": "4B8pbAs5s8RoN6pZMGXSoTvFh6eUupPiRpvhjL89KcVJDu2gaEVMofmUqyvw65Au9fBrSCNhK5T6MeZrxSi3C4hF",
  "key26": "4xcN7H6triqCpRk8J1iR3pDPWxi4mJYgrufQ5bd1bm12q9PqWrTLUoKfJsun2PQAN8kW7Hp2NpD1zMqBotyeJS5R",
  "key27": "3bL37kZyyokg7ahL3Cna1q85m63WhWSK6wG3r9xGGrXQXEpcNZ1e9BWBgCo2P12RTNU5CFwgrUBvehdbaNQ6jekF",
  "key28": "3RsFJ3paZZsLWPPz8NSEiXC9FEbHjZ7a5HJ7Dq7aohTXDPZS6531GpRft7eAcr9ogYZJL9ZmP8nBrZXd27iPZoTA",
  "key29": "4Pk9H4qGnVJ34hiwpFNor8qWCCQqFqgv6TZFp56dXMp2JdgrAfWwDcSuzzCWXtLXzG6df8hCfy9Hs6u23Utbi8S4",
  "key30": "3pnRLRTEjGarmLf3Hfc6nzSSvFKfZnTPtBztJtgCHZDcyuFuQEpupTw7G4nEUQhw76HSVYJzVV8jf6t8GVEUhJms",
  "key31": "52c6ZzfksKFZrK1h5JKXLPmanRJwFskXgmjfQi8yLG1h21uH3LMSR5V93enjiVHyGZq19PVQMJukuJrMPySG4v7a",
  "key32": "62JuCPzgqAbqL9Nv28MvnmqNVFYEFpFUZb9RrhtzkEC3QSZHAs7FsVoiYSPhcYJonhBjQfijXtVipiZjwzdDfUXZ",
  "key33": "631mB3FBk9697jkDbSahVCGxrePJxjhzG3zYSVzcSL6sRbNSvzWRXMyxLC5eWXUicrJDEW2G2HZrpFQeMuTXWVXf",
  "key34": "33ovTCyhaFHmVjJVfMHB2BENeHuGdpYZ52GdNLJocTAR2bEhsQo1S6zz1vkFFVx9QomJZPrFuQaqZRJtYQfoGLky",
  "key35": "3RxEijtCQmH3e5KvqusbZqWANVCb964VboisSPitJ9dyBMYtajYDpJm2VgEJoy26S5Zpa1byYoBWfCSWnbtxYeG8",
  "key36": "64UVcxHgWpuGQQjPUqrNaatQNnz5pEzwwaULTLSLdUGjd8P6tXzSUzGwymUtZjzUrpoHHqdK34YLHRGxTRYWNDy3",
  "key37": "eSU27hioF5PH41n5QYo2LT7QfGKwHAA8NfGgm994L1VypgHbdbjBAxN1hbmSNexbAzsdGYx6rmxQdVkpz8aM2r8",
  "key38": "5gT67S6xLF72z27pH3NvAFm3A1Di8LGEw9JPNEaFkn8AgewGsvRuz1kfuyUeahtDRCrR3PNfHxLX5vQUmYozgHLn",
  "key39": "uPGVkoyxzVN8G1NwPNniLY5vmoooB2JjknR4McTCyLmKYWaYnGsAJfhSYYkGgFBfgceJAbtAUK5TqrY1E7jPu3S",
  "key40": "5vJEXMoKhC855HxqSbtzARDEcndEoGzud2cXNS4d7SC2bHeULubQb9GiBdqZbMeL7Fh4QtQtyJiGv5Pi4gZHSxBJ",
  "key41": "4mgWoEZatGZusrvpoKtDMkBJsZ5edw84UqZLE7yZqWzMZfimV4fhDFqi6kgBeQqSyHJ89kyjP6toi9oNzZZkaMdX",
  "key42": "4mj1RzifHZnHZd1M5ks3JoYcmYduw8iRkSK9vqfP3RemmwzT6VtTsi4HomSGPMs2qKxM3ygXukUXwyFwPA3JV8ax",
  "key43": "3f9vy1RU9srENqEfRKYaDmUwYPeSd4g1iLYvrpKUqdakdkk2RErWYxeAjJCwQYnBvVx3yEUfnR16sYHpqkATrtqQ",
  "key44": "3Fq9G1zVBm9A5gg4TSrHZ5GSJTLhbxuBFJ3sE6rJBGRweA4yjzWrjFw2pkFm2mSsUtCcyvDbAjwDQ9PRLeVaVz9h",
  "key45": "YdHx7axRiAXMyEYA26k5Wo2QBgmiuWwWUGGdpY1Gfm5PrwwdusdbEvctK32WwtisbMQPP3RsXjjQo9X2WwAP561",
  "key46": "Z26AAZoQawDKaBPUVr3ZQAt2R7Uj2ydxriSsUFq6mfc4YoXMpdL4p99LWzznDAzENMKw2uQrt5LuMbaQfG6C47f",
  "key47": "4zjYVMq3kVRSaGukDz8axfpAkNHpHHUrE2ayEX9PGkrKEXYoyDKAZRuLfqunTzVwpdj4swGJMQG8rH6kCWCV1PCX",
  "key48": "4GDTdgJLkg55aSAMgRckEwK3tkJTtn8Q6eENjrgutQgzm3uQhcFnFGqjtktfLMxbyzRiuDmzTCfPUR9uzVVjnDUT"
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
