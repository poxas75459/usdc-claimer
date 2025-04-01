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
    "58eqe95WuEdvepyB82Pr1TBTd6ZGktmoyhfDNQ22gGN2DdTBUcXNMzjLKANGwGH5khHu73m5F5dudWKyDWPV5a2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eedcm1bsfyUZL81i28TGBMKirV5cKicCNtiAKPuy8mhg7S2vFyDnxrgGM6Jcy5x23WTHs1W5beTZX8XgwGThSYk",
  "key1": "5WL5z1Nr8JcDEsSdnKCxh99Fk2orjb1yun6gQQyDGAg1m21DDeSh4ZCxtZ4bSiZzn37jxJGUKqq7r3fCg2tpVHmD",
  "key2": "2XSpXSuwgs1oU9YaiMqNgNGDbTzffkqnnCTyN4nJV5k2bUxZi9hFDVQpaSEzDA6HKvPZEGR4SQcstEKg3FwV6Yj6",
  "key3": "2HsrJeVXwtHfc2wzpreAP1mCCdhwRDhu651sYnNg4takvZERrkRx7UJH1Wf7G6L13U5jSBhWBNj1mmNYviLi1GdU",
  "key4": "5bdnUtos3vbVqHTRt4kugPoJVZwMJ3wVdHpajuzx5Lt1FL3mfYfPHaGgE3tvu8XvYaQqp6BVj1E41NJjZykP7AaE",
  "key5": "5DbYDvhmvmRsomeAYVxDYjCA3o3roSSH7hHpRddMjRrMuQy7iFJHH5JtC8gnx59Q7FhSz9KRgi2M77racDCKtmrk",
  "key6": "2z9txqKGBiydTwW1J2CVW3sQQQX24pVA57SL2e4rkHLt54nteDdeRVhZLxeTgxXWMdefM4QBe64JTZbcEhanuEgP",
  "key7": "4repRV4Zu4eJasu1U9yEcE4KsMhHCA5dETBkK6xxUBJ7KCYCA1wgBgNKpVwFo9KTZiv2F2NkLWa8vb41q9aGnugp",
  "key8": "3rRW8g7LvuzQM2Sn4CKUpKb7HGRsA5as9t7enm6HJGBw7pR4KKcD7NchiGCeaKzMuDP342herviLFH6mYnGDBJaZ",
  "key9": "4ejtGjZWs9LikgzctnVvb9ktAUcaFUjWzD6cfJZwt5yHiHGaDvvAyrefpKVTYcduHhngB5Kj2Whh6Mheoecs3hGk",
  "key10": "bsLYY4bRZgLyhgwwSUJdpsFXv7tRmjfz5C9j3qK5hKVpLFmtMBbcTRz2SLY1uvoNtyStMEK6HxfH3Jk5cLCuMwQ",
  "key11": "4nvuBn5CeiyErxUs7p2SZytRd8QYeTNENGJYPewvbrzwmLitM8U1gVDxDjMbVJD2pZweJqnBBWYo9sivaoXT9dKe",
  "key12": "2EsupE3oxdjcfPaQVTLVZPdaWWc636FjDuqzizwCfnkntXYpVeab1LBG7EonVYQAj6gzgYYLBpQhiEZfybDdYh6d",
  "key13": "4wHiEFAciP8S5iuHvv4gyXpEQ1WbZXbkbcGpKzRtZ1rmMq1zZQojgVkHjp9LgX9xaCNcnfcoZaiM8YinAqPNX8wV",
  "key14": "2dUr419vwCeg2LLE5sFKgzyzAE2Xe7YmwXXinaPdGYNK9mf2fdkb8e4GAUtGsDhZPGt5pxtPo367rbHEmByX2NHQ",
  "key15": "5Fxt3rjYo2aas4CdvGhjuJ7M5mL9yBuhmEk2sP8arn2NpwwLoXMWtngk38g1E3hcdSodkejLV9bJZL4yViUjKxBB",
  "key16": "RZMJEi49SU3JYHFxRLmZgEYHBD68EvebupFoirTXZmQunLgzzWdE3bBqtJFiDKzKk6279is7gRhqYg9zkwBS1Mn",
  "key17": "3Kz7bfiFhAWThnBREVpFSmzcB8ArqxBW3bK7YeQ61QdxJnw4fn9BqBzpLddhvtgFVDr112oiSkPgoH6ogULcoTU9",
  "key18": "N9KaVMVfpWxMTiYNHR3Dhr9i5MgxDTSnoCj1hmCvfP7r8YqBv2WysdBcDP1ChJPoKDS3NkdcJNxx5H7zt5GMN2s",
  "key19": "129chbCSZN5FmP9shub3WH2L1SZMnuMpoxGqVeVtkBsXmKNBbNmikwdAohqF6cFbcgP3JVfToQY2QnEeHuU6uEsM",
  "key20": "f27wnEQKVknJZb8A6KwZiescXWmq2dHZTW6WLHkYtfvuYtchJ5oBXhPLunvbPCPLopYo6EYFy8Gj48E1cMf3yTA",
  "key21": "2BnZzDkXoYtnkLYucGCV126pAmHK8izA1DRkKWLRYgf5N7Yk2fKvga5TeetxngNaphS2xiSSq3jfNpisPW1mkq9Z",
  "key22": "23A4oCatuzHdXX6rGarq76ZTHr72ZMPPYSewLjwFwbH5Ni8h6PgYcKyh6TfEAMKWbXQGq1iosSFTgGkDK2Zs3qjz",
  "key23": "2kFS9r4ZArDwjPV9ga3Lkv5cit6LmZL7eMSxMtioLrXaaCxhF4FY9TGfnFBfLpq9s2ewwHooTfHykDWrp7kxUmo3",
  "key24": "2ABW5W6JuLccH1gTeoyED8FrsLC26UiboJoZH7e3WeB1JbsKXpZ4auWY94ar8MC8vTQaDJNXYkMCgLreWB6N1Jbm",
  "key25": "ZN64qsmN66C4yXsGn4KS7akdzY2ArGsiMgQNaRbg5nbHGLVNPEF3zfzuuhsDNY6UyfPuSQA8g4Kj7AjyrK8J4eC",
  "key26": "2X4X5xSWAaM3avRAJ5qGbpUjZPsHfiEs2MyxdqebKYQ49JBQSrpNu3ZtbPVsRxBaegUYQYKv6GpavGBLsdFUzdsb",
  "key27": "5A36kZoNaBWXoDcwP3jMQX5igqUcSsRJ9FixfkUgGtzaYdwrPYPCDcKjzBvcNhGtc5cuVCSBtYpLnYUTRt17Qujy",
  "key28": "2wMNoj8yXQrp7SCZrJYJG8SPu692yV8r3UXt9KSSBhz5wtDKJPs7sR5WnF4Bq6AYVYTGVPnjqJ3hrfdCiqdtcagk",
  "key29": "5RPehhBzL4wFbv2W4A7s3xwRVAxgarb26etBRzLnrt84EwRhrVoCvEoGqecMKYwyYzM5sdGs33BB4C2dPDugEX3R",
  "key30": "2FKPo6kWJwUfsa7px9XpBM62ma27MqfPsNPaDuwkH9XtjSY5dWuxQzqJyitB8gZgoLhLhK4yao8zcGWnR9DyJ5qZ",
  "key31": "2i4ZjVrvbouw2xmB9MssvSV9zeUM2AmihFDD69qiAX2pEUdaMwkoXzEWRxHDSe7Xp3BYqmN6cXv42QkpPmT77bAg",
  "key32": "5J7HN5hZWEtjamJRBA4BHryv1X3giU5FeCb3XeSvsSLPfgP5uemfvibQr3CpFAozZyBXz8V3SSpkuCVVsn1UR9Ap",
  "key33": "51hxjesEu11YQeNLHueAbFsVgXg13pYzRWipfSmRYwRwBL9ZHoKsC4qZmrz3CHCxf2mictALHivfdqG8u4X8zZex",
  "key34": "5DUhoriRs8mmzPizZwRnwYi3V6E1f19pkhNxgWiZ3oxusR8NZjsFvPzTcBu1f4hyQPq267k6ZoPvQG1E52uJHUdW",
  "key35": "3nLa2j9wH9Rh329Aao13QBm4fuWczkCbg1RA1gq8b1o5VNq9msKoY3rXzZE6aGk9m695b6HaWXh1MTWNzW5DCZB1",
  "key36": "5NADpUfBstBZdSPTpzKqqAq7wYENWZqYuF2bRcn16tFzyZuTi4pckRt7NFpHJaDnxM68ZkfJAgWYPRRUeofU2NHQ",
  "key37": "4gLuAQTbXPZyqXN8TahoGqtC8hqnBSWvSxfX8Qjh3p5hK5sTHSTMaoprkGKXf4zvWMq1CqK5dk62yWBGUKi87ptX",
  "key38": "2LmFBMijox7PzeyYDKGssqa7KP2MT3CEVCoAnmcMYifYNEcEeRtwtbh5tPEWzVQ6cPJvTwAZTMzy9sRDjKXU5boq",
  "key39": "3LrfdWCoYUdT3gHXeG5NoccXPukdxQxZP1NyQT9NrA7WzNdtXrzU5unTXbxYHuyXFjVSvhfCaya1ogPVm6MgE8ZK",
  "key40": "24PsejAfjmUX5qzZq4iZ9nFqbXpFeCahucpgPRFTmHBjCvQYbHWD7fAMM52AUffStAKTn5CqEdCqw8jyfMpiQyDn",
  "key41": "2NRbQfZ33oT7uWwsGpFguzSFMxcr6vErfRTw1Wm7ZFWP4jzToSGxQnPy1WToqX2hxTp4wdNjqx41AUMaa2WqXoGh",
  "key42": "5RgTsxRftPpU3bUuGHfQPuza4Z656DP7dLmN4GHwAY2Zq7mnDv443jcY2wwrx8zh7H3BoQRBFtQpkqNkppD7ocou",
  "key43": "3kJstnqnV6ZgUJKMRjvGzJDM7FnFV3PfaxF5Zds57E6tME5HWSwicdZexpJ6iQpdZrLib8BTdYTRuPJbFVDD8JiH",
  "key44": "3nsiGKVRmvwqEh2jnh8DuQW4Gd1jQQwDRUCP1xMFXV77hasCpFwBSe9eRKnNy1qosRrZc2Bqv1Z2hdkENtXiMapA",
  "key45": "49GGXuLxEVcoWfC83iXXZvM29441bjRKdEUJ6MxmUSQaRgUptzfay56b6xkaqQqQnQ9q7vGfNHUY4yGEbu3i6pYr",
  "key46": "39UxuG37kafAR7pkJ6fjqcSg7ENscH2bLFPySubQ7FZZNUQ1XpipCo9ZG7Q74SQhhuwnwR4BPnmCJJFJjVBceHY9",
  "key47": "2t2AHvetmwE6t1WL88Ms8fuuY3SqvyzizrWEcswR91EYiGFmrND5Hmd6JWUp4JSLE92KjS5KEeoyj8GVCtuxoqzq"
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
