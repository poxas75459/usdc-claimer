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
    "39f2m8Xt3kwqcyYJuefbsTLKW3dv6eKGYHTJyMPtNCDfdXcJiQ6BxenkC8toMSoUXibQBw3ABoyRx8qGb1ToidmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ncTDop3HpwWkvciix5pps1vdmg7ax3vMbJh3CisdpBwdPrpWvzFpyva3ot4UnAWt4uj6oDzcg48NSLfpGH6G9Pd",
  "key1": "3tqM5xoi1GSCpnYPzczza5TQWKQoLcf9xtNrKo4TJBpdJtccGsUDucV2UwPjUZsijU3QL6mUWAPXu2HXrjhatcY",
  "key2": "46cvMm988eTZKZPM8TcJ28LsarF7b2MKXri4rbXfL75Wq8iyrLqTKgV4SWeGWeQFmfUbUxmcEteUBftbbpMztPnU",
  "key3": "4QuLT8rJ447T6b1HboKe3kh8VqJKFmop6zCm6HKbuHF3omiw5RYiE4tCe9sRYMyScbP1mHtoysvUDgcQYPWqWKzu",
  "key4": "3ATagEDpXfkYkbiKXAS7PxeWU6DSQJ9a8PZyEXst8vSAugfULnXPRL3wpyiELVphp57rbJhUYhXtYaHYjEX1SKu8",
  "key5": "aHkvawofSRn8Bx6PmVZPUXibTRFb5KWLQR6fh3ie5sBAtgYBN5ZMZtrM6xh1W9hh1M3MVJxgSRkzPYTjFP9CxS9",
  "key6": "5UR5aWugzdran33oVhy9rnhUQ64ArRn5eaAYzoLrGmvWEchj7vTzcR4wvmkyML3qtgMZ6xCyaXMj49pnUKFUCEuY",
  "key7": "i86JcD7Q6KjAPdLtyXKCfP8pEnYgP1FTGvPWy68soCWcoBX1Mo92NGT1Ft1SVjzHAMnqfxn9pFkQhBebnkCkth1",
  "key8": "eGktZFwdxoKwKMxZoWows46nSiSc8Nek9CirncarDWx4tWmEeSaQcfwigt9EF7ncrtaUT69MTeCeueU7oXvFv8j",
  "key9": "5YfQLLvegRpMstxksYAoADuvR4gTUHbRRvEpLRpdzd77xDTEZT5pP8DycKzQzEkUvUVozQYPioVzTxd7JzQQLrK5",
  "key10": "4d9F487b8xVPGsi6ZjFhTyKyBsP4XTgzfsvkGTG3V2CvMuJ4r5xzyQJqGSaSPhXzW84pVWt3Uo99UGLCAYZtNU3L",
  "key11": "668A72QJ8Vs6BCQP34EsYyKHKENxSgZUaLRMeQQBNCTaMU1vwD2MWXr46gaLPmCgAcTqnuHsJWHpVFP8Da2tYBH6",
  "key12": "418tLLNY3QSQNLrrYgj7azv4JgGev2VHzNrDNbLxm8k6rBazv9b8aCQu1z2sLynTVSQafMY8rush3PiL9oc7MNgX",
  "key13": "26m4TbC5HaS38Gqbd8MMLih6Hd5LJ9VHroeDG8QsjRtFW9x71pGkDTp1Sezyg58WPP6DAjmP2pWzEtpnzFavdur4",
  "key14": "22NNpqScfMzYqt2PPTqmiX8kncEuCeziUZxh7jiWJaQAdPeEd5YEGAoNE2rwfFgJoNswbBiJZTXuYE4xJNBDhtPB",
  "key15": "2Yngot1dB3NqZMD3Epo5xuYHffRR4TYf8maVvdxFGhsdnfRXiJZmtfJ5gh1xuNVjWSfDZbtbNEBH34anDmjymdBG",
  "key16": "3ASALMrgm7eW5gkUyo72QVh9WtoY45eU6Xxpxsffmj7DHgmSYA54zgDXRpNo22DLZ57tbScQrPxCYcffPm26ehj8",
  "key17": "3i2hXsCgUJKJirC7HdAKisznHvBD48Uq1TApGtc2vb4qbpD75GxKAX4g4pf4T48Xs88DibTCSQKrd5Eo3hVTs78R",
  "key18": "2qGQVkbGqGDNa5Rq659MbgbcAm3DgsCzz7yWJwu8c1dZTmYUiZvcBs5TwyxFZ3LQruwi9UAAGAaqVo4EAd1Xqaso",
  "key19": "3PqLCS1C1PNyu13BpsfNNDDcexLhG8zQsbHUQAjvGkTBpBnANYdg17YwP3LjS66kKrtcKa5y1YNHh6khMAuk5DLU",
  "key20": "3wvktcjw9tV3kXE9CMALbtULvkqbF9hELN5xTSf6iFVSgm6nTLpL2yLNpWTs248j44a6Dy9tFKKKJYGAm6K2a1aq",
  "key21": "4xbKvomn9z46Z6FrgDpH5wdm2UD3RZVo6U7cfZKFDXWx3aM2TpDaFjLwSqUGn1JiFnedv61XrDParvxM6q1WYZ17",
  "key22": "653kxNzNdmnUW7MspK7aeRqf15uyqHfWe5Cmft4JC5ezvNSeiqCsDTnrfNJhj2EfrGi9K3cBUpfYXnN6UbKyrAt9",
  "key23": "3dUu8UsCA1Sexuqsqhu7MpDyLtrkHQesWjSfKPgTE3iz1Ab891YcGtHaiFeSbtKGs5ivgBdwLYZjC72b54WtKiTv",
  "key24": "2ZDbz4TY73TKXQn27FzdgLK6prQbiNGXy4WMBWfWaYmQTS27uJXPyYUHKSrYyYAaU3QQczDEzLGSy19zTjNyb9tG",
  "key25": "67UA9Yy2D1vbMqbGjZTGtDrtZVZw21FaWUFiyvrBdBn5DJFnnrB66azmLaohgNNwLBYtCA5Bj85Kkoze9oxc9KnK",
  "key26": "4dUuskeEGjzR64XwRegCAhBf4ovFKBQejLZ1zG4sXJ7dDsqFL35mhc6e94sDFg1VEnAE7uEkhVGbmz55zfzFEYZt",
  "key27": "5Rt58tnYahC2Wrr4rqjEZDtAnbxvikZZK86teQTHrPrNYXLc4HVqWvnsjrXseMrvFSr6bcjU4CmSEcxNmUK5VYQJ",
  "key28": "5d76emAVWFjeZuYjSUfwrTB6oEfAc5UVLTkP7UaKAuEJQ9tyULsQuA1QnaxRc1vNC9ti6KpJ5F7KrgRgQqvX6Yo3",
  "key29": "B4wMefDm1UpZiooiXCSmheZkFJm7VaMXTqtwMemY7tSkfTvNRe8ZSEDmRBtvUpaZ7TbbdCBXe9bCwqBK4ERF6Nq",
  "key30": "4z4yhFG5E46C6nYk7E7EWeFwXyBpgbktaggE2nBfvn4GMV2iFV5K5NQRPMmRsS4uNDtBdXRbiUGvJAhE7ofLmxCM",
  "key31": "3CfpStqdV4fPek1PiGqLuoJQjVtNMSgAESZwxCr3d7t9kdqVj2rJnztRU3fvJwcoBzuFsGmXKEaEfzsJ3j4XXf9V",
  "key32": "4RXGyqdxnswbca5LTJA5h3yLFMnBMZgLURy4uaye9upswUYwgk9fpV94S9DF37175yfTdvKDBQYbrEgtVdvmPmUv",
  "key33": "bnn7L6x6xkDLfuVe2QHgPxq13XiiVmkpZtUhv93j394qp29LmzR64Hgew6aPUk8ozMyQ1vzRRwPkh7Ah49FwJes",
  "key34": "3MjBjzdjF6k1LPzzRi5hyrQkULG79gvmoVF7TRw1mgvNn9CrWY93MQwozPE2Wy3AgE29RCYccWcxQf718UZiB75E",
  "key35": "2xcxnwsos9bZ2fsZ5LujYQ6kxg6wYcv8YMVcCUA47u8rJJ665j3KZ6vgzpE4z5obq4yWgvYnz2d16s3rmXHfqUXB",
  "key36": "56Sr9X9V4NptZSsKYygHWAkNdso4BnVeQB2uXPctEUvTJvVYbfx3PqB6idxg5uC7PcBke52ZvoF34vpp4Jes8oxS",
  "key37": "5iz959RxmEuuxegH9y8Z7NxCojnWzKNoUD5KZwWTssQCmHguwQkhEh7ADHDV1vDGAvqfhnqFyuvAf7X3JWBp9rDx",
  "key38": "4wC4S98sBcxUdyzySHFTufudUKgBE42qS3iPb3UhqtNVpjCspNvEe4Bbsvfe7ebEygBVEMvQh6JwZY3AmnbRsmTJ",
  "key39": "2A7ngaatzDMJvzb6tGE46Ymn6v1YRygVLAy393Tgn7pppk5g5sxNuvHhRZR61iBPdTnzsJsZxwNyvssCbvUgvJym",
  "key40": "Jh7stgseV9fPBAYVNjhgg8Rqbv2qiE4SCEcRDCRqtt3zD5FobmGjThHQ2d3PnxELzvxRjtaA6ak4MpboZ8N7t2d",
  "key41": "2BW2FgsABUJDJr7M4MqFaWUmEin2nSh4CmRCg6HL3bNagTSofWwvPVY3auKXxYparNXCHPZZbY6sbXwGjKvxYFjP",
  "key42": "4Ez8ATAkoLvBvpNh2LjwmrBNQMsscwPoDXwQkSPbF2oeDUjpd1ka88fuUMfU9TkyaycfpBanoXs3VF5jX1a7zv1s",
  "key43": "5UkUbhWKgTnZqm5jAcqsPPw4TGJhBcZP2YdM3NFv1A2ChMZykrZUjA4dGGuUBbU6bXKiUTpWBx22TcjJCDBwzhGJ",
  "key44": "2hSAm4YSVhqSWBmppEg5ipbZ9sobPqWBoJkwbLoCyMk2uHqUeqDDJL11tfRfgKQ26b8oYutLbzXPqV2GuvZSTvoB",
  "key45": "2tBvCfncJQmciRvXJ42BFcuDiVV4nVLn4PQiXf4tPFneR1kKXDwvntyjPWFQNvP7WFcL4m3s2Gy48hkqiTuXz6td",
  "key46": "3BSoqRzfXtQMV6ALC5tS4Ag9idW2eDGsgMSy8jhZEqKEE133tFazvMwEfPTTVCrJvkR4Euk7sE155C5VYaig18GG",
  "key47": "4TjzGcajmvvyd96qF3eM51ZR1E6N6PZ3nZEtnvkPB9vzUYzGqnvdmnkvqwTbmE5WWbhN1rzCYmaVrEj38dSUiSSf",
  "key48": "WSM6d3QMu7WTaoc9ehKQRFdGcc1eczrhNxitBkSRSsboNwvJuWEvuxRY4N8wMfYhQsQtHyoSzsni5gsXv4pJFWz",
  "key49": "27zAr8M4gyYB9a4af3FWEcQVsWuGVHwtDTBHXVQP9S3GLq8qPRKeYVpK41hNwBBdZgvLfDBW9soyN4zP8L32MeUQ"
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
