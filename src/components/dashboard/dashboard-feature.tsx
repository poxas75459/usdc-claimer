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
    "3a7ESXbNVchw8ddVHH6z9HZvZASJGBSWNAqjgiAwbLvmniKSbpCdqAgbpN16NYKfYm17iHavgDvnwhPapFmhZLyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "469JDUxpjshFYQLnmuz2GDCs9FoJtStgdw8QQiErbENdjsxb7eBWZ4gPvMQeoqHHTnr1HrN3qtZFtJTws53P1L1X",
  "key1": "4BrhjDWxZM9sV33EmM3MAp37sbc7gmTy7efFw1nz4DtCmbPQC5oXUE7eMp4vFLEA7QooY7N6DYk83cjw7DH1ACcU",
  "key2": "5ycryq8zqngQkVrNBRX3UitueD1dNKqewLaEfeBixzNrJSyV2Xt2oCLvB9muznaZiEz3QvL1Fgp3VMFTfeYWemLW",
  "key3": "4Zr5Rt8Gu5CetABf84M3Z9YoYeULqtcs6YpTFn3QaciPQ2rinLFXQXfC8dpHEVoNRMAba3AZngufwvqYeud2iDvm",
  "key4": "67cRzpXypkSWmXF4ggmssA3h4XJSkuzP71mrKt68ETpaVhXHbcK561Ka5FcyCW9gtDU8wBcyR7wMaS5a5FveM4GC",
  "key5": "2Dk4zoJ6Xm2LCjJpTG1EDaPmXPr7C3YLiQRB68rivFtUcqLe23HEyPb3kM9XYQVw8XiJvJ7CnhPk1NwKvfqGaHXD",
  "key6": "7Fnz4ZZjWEeNYEv7sEtc1ofLrXoiFHJuvNKzE5xCxH9AL3FVHFfD1JVQvWktU7xBNyye9Wg7ZjUdzcqEmYGvC5f",
  "key7": "2gMEafXLRtcAwubUtdBs1sCVbxwBv6Ezekm71iec3YZULGiSQNdi5JVCyZLgwHUEN7ZosRkVhvpmCycun51aFX6B",
  "key8": "2c6ScJsxpkzYK82oHVvFypMU9v5cJdobuUb9EscB8bLpALxEZQo61Mfd9CpZWCAMbEpjnds1GE7f8CVXmUp7VH95",
  "key9": "54x1JWi2fHaAXaGLT5R1QZkR7XCE7ECBH3mwMA2M2twVfFRmAYyKNbUfpCDpAzgQmr6z5tX3eyeyhacHMUYzbdPi",
  "key10": "318dxGsixxPYDZxq7qTRuTrCbXwHLWXQzCkezXmtZsvEig2Xif6D7K5K5Bf43DmpvPYiB1tUAkUw4xBsAvEeQbaN",
  "key11": "Rxkeecj2djTY2JGfNTFe2MjXbzfVsKizeD4HF1A1uBYvbHXmqCiqoq3CZzKm2tvHSCmCqphbqzQfzg5Cr89XA2Z",
  "key12": "4UY4Q6JSYo3stY1MPE4VohAhCVQZ7GjipUWvTx88LhpGu7LAA3fo2YwAeaSPibRvoboAHpfvJXv9p1r3YJqzj11P",
  "key13": "3YNdef4WjfuvGww4RD6BvmVF7dRJnCy8bMJoxuTsAxMXGAunTt2sEGEbQ2UBiewTkmCVUQseCpSkgdRaZy7162aK",
  "key14": "4Cks4jPA5qyFFiJKJDfjNUwDBp2q3J4whm81AHPZA6hLWDHDx2qWq4NfNPSh9381e2zrFbqV8yBZZzd8bT4pz71A",
  "key15": "2soVZCiyJnhFuRyapjkTm8LUjMFXpKeRLwgwT8VvAePbUcNAhUmSYMbeNncoph13jpPa5mv8xBKY8K5JbqYmK4V5",
  "key16": "2F9KFRZ1KnyohWBZQVZo7SbvokMamiMP3WfwxhCdG3YuiMgoDgQhYpvZawh9m5AJYZTKfV4sYEJ2WUC645coVv7W",
  "key17": "hRKv1bYLsb5LUX1UNK3QGnEavkdN7wGL3fhL3RvXtAhdjX9yvLidjZqYwFUHo5U8cfd2FkjY8qUEiNw7dd2orCs",
  "key18": "3f6PRzMKCZnKjt9dCqYab8KU8Kayg4yNN5tfx1u3xcy8aVbrgMBqUHaX2sjyFuB9Z6ue4pEgXsyZ4t61djmLgZyp",
  "key19": "4DUXYBHswcMQe66gyhGgSnPFubtZVhsCwKrumyWxUSuEpSEZkmsqXx6bhLWv8VhFCE5qzC4tCvc357em9ShUw5ZR",
  "key20": "3sX4d5frgaTD3aCk5okqdMXA2VHNYKe4ive8VqtzE7683SuKMjShwrzgw7PLpUV86WJpynhJELWNnriZ4Wt2HgN1",
  "key21": "3v4D5mB9B12CgrFxHC7vjUsGhYg8Gx1WkuXDZ8HMjeWaYaf5ygLKRvxFBWBUKC2CVod7mMqTMrhgRJY8jyFcLG6T",
  "key22": "2vRQknkRskpc7rH9GFY5GdFVjhH55VRQr9r81tSbKrMoMSdLjeEgwCNMSZRuSEG27dYJBpr7ZAiJ4x1rm5cEne6i",
  "key23": "25jy2HLJvbpsFdhcUzD62AhSh7fpHvv7cmi8L6uUUsRPSdYUvzaMGeGzRWJJ2NpfooQvQgVTVEoqVhn42MBCkZWs",
  "key24": "4KPtjsZUUtbpmiJNs48P8FsdQm4wh31uD3HW8PgnhuExfX1VmZFpkeZ3nT9Un11qw95HtLxKV5iCCR4WrgEGUgqg",
  "key25": "2z67HuG7ddHRp19MMpgUt9iy7CUNiWhVASbxnXLJWkzdf27xJ5gaSK8cXXfEBeFVRHK1TMCkw3h8vr4qwexedzDD",
  "key26": "3ZhPTXjYLSSyENHCTavWnroBm9nFXuB41BnJKktQKTzZMowH7AsoVtA9XpkWdJhbKVuwpGBdtw15895aLp6MpPnK",
  "key27": "35gR56vaVmd1GELpUk6KkPVKYjLqaZoh2BAQX34XiwzsDjZ2z3rwY4k5UUcPSnvbq5Ev9eThc3ZH9mzduiBPLTmE",
  "key28": "46bfR4S2GU2WUYvY2hNzcjQ3uhWYoLDuP2S1MGC7iJ1cX1HjFksMfcD7M3GWhFTkhYsXctE4dD4ocNuf2mcTfUvQ",
  "key29": "34mewnrcqXDbmLh61jV3WSmNmXNbmrQ2736moYctemWMDqNoYfoCPHQtEhzYnLzaQn3cWDrEijpbTxNjxHUen85Z",
  "key30": "64Wr9Y4jsmJoH6sKbiMgXCe4sxQAbqwnWemaqqGtPZCmZVx64R4XU5rpkkwhmu9XznbtMotLxbNSDXszMhTaW3gD",
  "key31": "52zXjscpfS9sNqxgfwPQUPYSGUwenwR7qhtJov3fsipbxrM97Zix5ho75RbZdFethdiWccnd5JhCsNzMb8gcdDhS",
  "key32": "PBTDUkeMxTkrQ4aoKqwXvN4ga567wxkhfsMnbv3Eihxaf1jv5RPvXLG8p9GuarsRAYf23zRXz6ytyx6WvkFmudJ",
  "key33": "5Rm9kDbBpDYug7yZe4kgZi5LGp4GW8JrC3EGHbxEaSg79Cmq5hVJ8fXKDKqTPtvfVP6oixDAY8ZX2hgrMWJqE2v8",
  "key34": "3YiBzd4RB2yWy2XT4TAFYjuMXdmRsoSVmxiJvhvH2FkNzb6FEhoHw3nH4QgknxcabEKW2ixfkLejDBfn7SfF3jxv",
  "key35": "3KLG6esvycqhdZkokZHeCVgG9CWF5guabDESUtvP3REJvA7ZBJsZ1V4U4BNPyv5X43CKoNRQGawzWDFz4GpjLtVs",
  "key36": "4sM1gmmN8eRZsT7AQvAgRRKERes23B7wTCWyX8CcxZdX3jJ4Uk6k2z9o74u5QRjtG7Ezn3U7YtdAbxoF6xHdpHWz",
  "key37": "2477pRXvh8y9UWa9UKdtA9s9mKQLcPgXbWQGbdnUB3d6Dmdu2ppqoXitSyFKk4wkK16dZj8xNtiKvTjSaVBvM3Ri",
  "key38": "4RniqqdPmXSky3pZF4sVvSDqzgRBhJ1vzt65zJb6cvK28R7XzMmx87xYoFBkGAELbBybMnqrr98GUGdGQrNTL6vP",
  "key39": "Wfhpv5kNz9hMFa9iGDghdvtkZP8YX9be4txt5tWMpY3qXzoNJM72fFNGr2KeZ3wgovnhQSzZMsAWqyCtLnQ17MX",
  "key40": "2xiTUmMVHCM3qGLgQWzaqs9TgBJpPdBNMZfztQA19HXv4ZwbDEYKew38ERwG4mUqZCQANvbpF4Km552GPaW3CcdW",
  "key41": "5VBaYW1it8hB9GWskWfrucUCEicBpQy95RvA5M2VGfryXJki9dbJodz5BaEGrsbRebbvzSXHNgXKXYW6ydJj1EC1",
  "key42": "4LwMRsYmaw1USWj3WcoCgUWSZaEpyfPgumsQRx6AHU2wFvTTbgKNwFu2gEHHxsy8AYc5UqDTdCHSzZRmWZR4qxwo",
  "key43": "4cbNogN2CbetuHjp2qpcxveu2ZtCHQeeHfhnKUqeQSAHtkBMxwhnwfGuzrRB71RsUAYS1CjrX2EZLymZ8uitfBCc",
  "key44": "4q9WBna5gjUbjV3KXJCsrMRx1kW1LUmqfBaE7rTQkFJtFLZzxnD6MKJ5xM9Z7Y5C546GAZfNYzMFJKYC9y7Z85GR",
  "key45": "cPHsMU6RXEE8AUAc8X8Y79wTaZ2hC6YSgJCr7XL5pKxDVuBjjJTBnWfBdF6Yk6Y8heRsvzmWwiD8JATvNRmpzqs",
  "key46": "3RontYXNDu3bn6TKjXB2cYPWEPBARFQ3wUfj71uv2ujHzBcutkhsqNNEshuzoxMtGjBhcuov55kcEtwsueygBdHw",
  "key47": "54R3LV1fPNF4gRanYy1ccrVn144FmWkLDkTwQddYuiqdoZRrgyJTs52RAQuEFDq12tzBYpRCMNWxLQWibqm45Nei",
  "key48": "5DF5q8gUDuXMFj96nxMNyM8DAeFqZbwL1BQzfvtSnszZiFy3JLeZU6D69gPjhaksLCBrEPpVHCtkMJ1Wd4Lnpemk",
  "key49": "5azAhLGoZV6Fk8cEREHevMPLysNpDpWTpNKs1XmouH6VdJACVnkNA4hx88r37U1BrEvG28mRCDTHGDfGmt8bSVy9"
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
