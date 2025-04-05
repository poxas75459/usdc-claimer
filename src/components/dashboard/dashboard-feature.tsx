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
    "55cyJh3S9aTNGku3T1viMmwZ5UW1dXKiTKTStvqrbgLSQdQZ9NTALRCFR7uXfEZjvqZ71VBSyuBoUeDiqEJjtBQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NwknfDnh4kQL6JapMBNdeV3XNBqmgbGCH4cJbQPAs3cxJpkrVj2bKDrSFEcg5cdPvxNsF4yjFKrRMAMFC9TQj4C",
  "key1": "3UQNrcWMqNGgLmDLGZCDccDrQqwxVAT51qsHnat2oUqnkN9XgYWQeyn1UThwmAYyKg2SzTSeeSsKUpJqU3vLm6uP",
  "key2": "3Pa5wh19GB8xMFx9ZtCgZ6zaDhxvT7n8Q31bokzE6SG77dRpY6yTEMpWTrVVewTeLMvn6TV8vak5zmXAxBeeBQyj",
  "key3": "4f1VQr16eS5doQPcXyBdinYabhN3ztdb4ogmzy1XwP6wM6mtHJBXKGsdapUwSrbNDykVwDmdHzDeCHfJqxCrSiyS",
  "key4": "66NDkwmCVwgQenTMF8ewhDeUFuNQLVpNKujn8n2UDAp8oVHSyyk7NUyaziTv7CxVifx3VGAASiQTbCrS59VBiPkH",
  "key5": "3MsJ5aqTVhgJc8w5fmo5CnUVyGPK5vsUf8XY8zYveyT7ETm97fEH7RxuThVoQWUYJBcG8aL6fXKpqznCXJupVHmZ",
  "key6": "3EPfZasjSSWEPUsjz9Hv9DxoS48yXqMi6mhWaxsdXHcjSjS9D95GyPwM4nhbuXcMAnFiNnFZHko4ifrFc4TCg7Lg",
  "key7": "2ckU3uAZxmNvArhLu9eDfRsZHTFuaHAnqoQbACMBeqgddy58kVXmDhXFDEFnibtQ9yHSk7zy7ZdVYpa7c675fMLx",
  "key8": "2QgyRzhawSTdNh6CZPeDCy29MUiuxELe1qjC8Chw1NCDFXVrRX8fNM92A23JK3648ob1HCcqK3h9J5pVUrytnPwG",
  "key9": "48vGmtqrCx9X2Q76HM7hP621SmexjNnG8CpJVpTrW1PyqnfoGDZCea8i7zNvsHbwJFhEtk5KV6NT247LsWT4Ktvt",
  "key10": "26j1zMooSuxM2ePg1k5XEjdVagPPZLHAkx2dzVi2sPFvvAc1kNzUFrknSYPA3xTcRjBvH7KpZdSuZazECGQwZiW2",
  "key11": "3P8fGcSzKobiEe7MA79GbD25Wz6MJWsqZ9PFRmmoY26k8PjfD1ggH1beWVz4eppgsbtMq8Biv1WCbSM1uUMUcahR",
  "key12": "2oFDFoyWTiLmb3YDwP8hi1Dfwz9HSYnxa4qCVvoH8ZV4f1kmackcg3PWpyLHfRd932GV2fK9tdGZRcQviMYdV3EP",
  "key13": "4uxYNUa2U8icHRMWuY33jt5TpS1vfcDykCMZcSi8MkdEUma3iqQ1uxDz6BcLskuzjZUXbvdNW2eSNPmofX3kPSPD",
  "key14": "2QKGFXZdaESaLDdEfmm5AnwAqfmwq1cdVxnkyRtuF8AE5JJ4vgQDhcBNfNwrQia5NwT36Ytdtx7D5bFmXXWoNZie",
  "key15": "4q1tBjyUsjt6Z35gn4DsXutraMyrnVnsa4x7o7CmFw9n8rVMJuWKsCzcXsZnzmBWyP4kMrMfWiGenAw7TQsxaCyb",
  "key16": "3aLyHCZSJ2uCqvjEu52c1uUgysiXs34J3sUqeRjdJGgFbuhNPdcsmkZfwciodUCgdQxRzyNueHYGhjcWnK87iQcP",
  "key17": "H4oPmEpmukonu2ATvCcafHLBRSuGDRqz6mRiSSJhonp9aRJNoEVzY1spHj49dFDcS6ZR2JY25ZpXN8J6tmXEoTT",
  "key18": "HXZqDnVqwGfxHXwLoV1ctpQpMbYqoqut59ivhvKjNNtsoCcN9JrTwiqRMa3J1DDS69v5CjwHoPrg2qDUV5EDC27",
  "key19": "4KoqopKobUTLy42xgqS3tDyLrnRczqZ3iGAq4psr78BLKPKWkh7psHKEAC1AgdY5aPibL6poJDDkRSbTjXyKxKVw",
  "key20": "5ZUSuKwdENMTZBEzp6ik1hXkGm2eHYC26J9GzdUPNeG4MZ727PDVQKdHBpkBPBZfGy13QGgNV1uUL4fJT8FVo3tU",
  "key21": "4JEjWvEn61s4TJSoibCNs5a4reYJoC8M6hfdSiCJSgM3Fbobr1zYpme38D3jti4YBHRBg8LzQWj4wbQdb6NSbk1",
  "key22": "4DDU8Tnr8YfXrP5h9iQYEEr4FQU5RDpGdcRkBQ7hWYR6LbCWrdKguQGWWJbhUYEn3iy2kTZgopguTE86STyCEKrT",
  "key23": "5q7aFZFXvuRT1wWb65dTk67z5EPqHcTMn6e6t6CeLueMUUzMPToqJo4aNwZnkGTXo6qSHRZ99aRY7ujForWxpCug",
  "key24": "4ZpKwwTLiwAeM8i3J5i4qHVK8i8LdHwm8i4dP9ZaxAzAYu7YQNpRT7DdHjT36XP5UG4u7ADjCegrD3Rki6SUo7nw",
  "key25": "4wNkMAEK9vdWg92WjxhX1ByeShLuQsMm1yLoZ78ZTfVyytL846ugfSws7AUHiVc2s85jfXMcCot6BsKULdZQXrPr",
  "key26": "5hPZouQCWH3tG4EWFBiJBNdc11ziinkMbu7q3d69Tv9hartsCDgw1CzmY8NweE4DaEasiMKtVCrMKnmwEQ7p6PtC",
  "key27": "Lq8BiNcP3ypdpHfqg2Q9h7hJ1qFsuhnrAWkcmKikaN4Qf9ToTTZEPbipscjPdocwwyg4DK7hPACEg1wKKYEEt6s",
  "key28": "4LKzeogkNstTx7DSNApfz3pDmZsMgBPH9iikU3WhnUynSNjCBvu7PxmKo1WarSJDAaZ2RbDPjtpoZChqRowC86mh",
  "key29": "4HoTahE9D3osbkofjRomvz3wkx8G8ibJg6vNA7vCLhwEQ4HRF13RUvpX4QFBVHeouawZATUiJz9poJPkZMWrbeoo",
  "key30": "3tBysHetrqtnHUkqdCcpaoQuYZah1KSREe4P8MaQavEPVAkHLaGqvQUVnLrMBq8v3PaKFD5L69QBFHC7uXyDc3Vs",
  "key31": "FX7ds35xCoNN2svcjqbcnkdPQW2c4nbr22Ny6rDAyPsi9Hzb5B2BKQPKHBrxCYnzpRTWvzJgCmK8g3ABWXxvGHw",
  "key32": "2zT1Xah3BnBRzwoTopQ7aZVxMwUeejXFK2VR263rqz9jctstSXsLeY8AKL5ZfizWzsFqoGZE5gzkt6ccvHg18Wnz",
  "key33": "2ruUXTuPpZtpVFHFFNfgrQqtRGTC6G2rARPDarX3k9QdEW4JuW9Yk3TyJec1wqxzYcMKiq5hZfTfKTBeVorunLU2",
  "key34": "5u4pFTt12t1pm4V58YqXtjHaoZ5UTuiX7zZg5taXn2aPemhHuyBDtN9KbrQtQU4vWAz11bpJSyLikggaW1mLW82i",
  "key35": "4fK47EFZWC6fCLagxJtRmmkuVDHGm7aUawj9jarRSapmuYEn1Vv5w85DE1qxcsd5NMPjcgVVDsyP7YwFYZorEvQJ",
  "key36": "43K92s9YFwaYULE6S7EoXjE9Mq7Ps9irp9KiJuG63Q6RtjN6J44PgZTNf55VBTLtmnJhMa9s2V1h9edQLMX7bgiA",
  "key37": "2tycF3wdhHhoTH5YzCFk1LkQw7tmB8mhr7auhUEG4RVP3Te88drRyDUicaBAVsSwVoz3Rx6aovaENdpNVKVKa2yw",
  "key38": "2aq3ZCcpKfe92uZ8CBgmb8WNdViz6katqz1nXVvwRUHs5ERk58VQFzH6ebp8g3Jatj5AxremqA2RRiHhnnvoCpag",
  "key39": "5rTkPSioNwWQPNKEN7NbDFtr6gDTvQNuEdQdWBjsg3Qg69XmRdv3aGs7MWfHWgiUQbsQFvVmruL81GmAeNke84qz",
  "key40": "xphuZDPqYnuSKW71ZuddhDHUap8WBcV9QnZaEygKeD9mH6KUipscdtZTSXmfwjxKsVndax28UFWTfYsa9RF2jN8",
  "key41": "2myEJTgAsX4JL7bGLvqYTznZB4Jw1qXdJfLdBYiLBiRNAgttaf52fVBtCqgn1Emo7SvfaHTqGtBeB76pVyAA5byQ",
  "key42": "2QxC9EsVt1bNJ7uXHgE3xqKs4ot18s51Xg7UHrWqFgbnURG8x6QP8bisay5URxPXFigF5phXmAfZCf1C72ahDdef",
  "key43": "2zeSGFpJ2jeAuTkDnWFrv5VzPj5WKusYhLCfBTK62Pa4mHD2CWS9ZPbmqtYmWoKqSG3VCaQaabFn4rM6eednJes7",
  "key44": "58sbmSFUKBrRzKS7iA5n5eVpEHccYVazbT6caxEvvJ9WiV2cbiuVkkvwhQjLpDERCoKvoEAa1c8UotoohGRqc2Vy",
  "key45": "5ix7WkhgnTTmzguseeQocdxSioEe6xjvhAPdGKxNg7dXMnkzDnxt5wuSySrSjNj36eg8xJL7H3eNjLTc7DoU1znQ"
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
