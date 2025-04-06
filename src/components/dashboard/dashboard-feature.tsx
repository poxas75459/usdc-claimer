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
    "2mtcTxb15739SyviBexCbE4gJ1CvEQAXs4JQFaxHWrXtMRWbJDbEQKQupaUS42iPSMYfn8Jp1N1px9B4nDt5FqxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TgNXmuj8hqDqY54TEirYwiya2DFGoxdJrKTTYVMyC54AMpyNU1SQ7fTMKvepXikcfGzGGWsymwyvWn3GGYMsdGF",
  "key1": "4yUmydUH2t3BcBWM1tKDqTzyd7MKhPjXmmYywezpRYFAECuNphJD2CLkHgzo4vsBsw9V87hs3tjJ2d9RKe6zLiWA",
  "key2": "3syuZJfsGdc29bL9hEnYikchnKMBt7fTBDCSwPxePGhAJJeUhr6ye4KfwbY2mUFeEMcduBAUpBJcLVot5Amfh8Vj",
  "key3": "2mpd6YEuMM4B6iVUhqwWt98LgCTxcVjCW1WDk45KPTsiyPfQjFzrXcuFqmj4oPmGVthEq6gpu94DKhokqnTAVAjE",
  "key4": "4oCqG3Ko3WYyygpLvPqtuDiSKNQLKbTT32AQaQxKPiexoHeNpDQ8N37NWj6Kq51bhXpC8K4ipWMtie5HGv5q8u7Y",
  "key5": "2nPv3hfr7watm81gfZkPiXMdiJS4aSqhyYqjxYJhySVcomaBD63jLJ2azSk1c5cg1B6ATwWnFsGAXdYB6zvC8XMW",
  "key6": "62DXbc52UeyYmU1SPk9f56G3SYqT6ec11pFrwuebajJQUqxLEBgofQpZBajG3iGnrgL5dKrvUjxXuJSNcdDSuSoG",
  "key7": "3tHhab6MNHEeKpimEkk8r6eJRHkV2LwpJfMMr1iwaVaNyfs2dHCxishU2VatJkUHui3uCd5QRv8Dr33GKsjL7W82",
  "key8": "5R57MsQsDGynjccR9cSUBZX8FuGUMzaXoapFjV1TZC6oF4b3MjXZzzQQYzTc65gRxSp6oUPN8BSJSPnvW949ueN9",
  "key9": "5fg9PsQprsq3ugWHnNc28bgYCUd38g5xErkNDoghzw99XY91BgvRUUggnF8HNMSvHzPQGiCsJGJqsZFEaivYSW2N",
  "key10": "feA4oWqWv21YfKg1aa6NWkeXPibocoZTbrNzUFXh9G79riMBRAqn8EHe1ds6ktgFThvpJPgLvPUAMKihGRU8XNq",
  "key11": "d9rtm13eaWNpUooWAUQrf85JRcT3NnAehtAEXQUjY8gf2QSGBzqchu69Uvi49oTsxNSt7odRVfYHhSc2uDz7F6J",
  "key12": "3fjkYAbmXK7DFC1dnhnyfS5s2D2rbB64gueksmvH2ADFyVyjsNm2gkXA1AsvWNwyEGt8qscVeeq4WdeawbCTb5zp",
  "key13": "2Cr23cTbZsM7DaACBm83jw7u6Gwjr8gQRNUC4DDXSG2jDcBVzAZLwud4Svb5hBiSsb4Da5gJCq4MZvyCRF1QFvPD",
  "key14": "4BN2gAytzgniEqd8GZxfpiNLoMmkJ7USo1BAFqVRVsG4e2bth1Q3fL23GhnGwCMoTiHa239jWAd1hZQdSzLQHzGT",
  "key15": "2uTk6UdtswQGSEFfgm76EMNHcH3e5et1jkZHdGsAKPy8rEkVYUovUwcDDxQ3a9qfn1DXh1Cb4CBHuUZJ8vvxA7gR",
  "key16": "2qizzHFRgAjP6M3Mu27RPWRQyw2cKF73UnfsT5K9hbMqpE8HSsn8NWeJfaLFZvdGDukCYW3a6fSNBaonqkXdrAeZ",
  "key17": "96wVBw5LJryaqJ1wo82iU932X4UGvEw6HGKLUmuyP6G6nJjDD1uuaWVxmAAhpCAEsD4u85BzXfvMX4RgvEjHDYP",
  "key18": "4ZjvrQh4UBycpUiryuYcgjXJk21xj68wbzPw4rYyz5DB12o9J4VZreuHbnqoFToDL7U88QGqS3tNRTvE7rm95x2Q",
  "key19": "4iMcHC9fAngHYr6bUMpj3GaoefETSPNbutEojdqibzAemk8hncaCLtmkYPRrYeT5z7cAZU9LA3Jrnzv3xrkWqc6H",
  "key20": "2nbVSNcbd1km8EczpeMrpeATaAE5D9tEgGVFUrCNqHuerS81Td5wTVGYSTtPU5FcYZuArVAjdvrgnmw2PALCchKj",
  "key21": "Dx5XSmvmnhKJQsuqXiJoFXdHM5nFS1A4EC3LUpUAUbnBKuhps7qET9o8CCjCvmbCBuCkK8mPCeJnnaUv5YFsPnC",
  "key22": "3kquxwddmhr1wyZRAumbuwzsZweQZyRxrJCfKSwbjtd3jzsi8kDztp8Z9ywH5Z6LeCA3rpNPwzG7VMPnf2juNozp",
  "key23": "5yKLoEdoYUKbUAVm8J1uXhHYquEK9fxaCTWSbonngu2Ld3Y5jZcSbAJsnco81KPpYLxFu8aAi7GqL29hNuVPKSc6",
  "key24": "5z9H6yPt8jhZWk37BAnG4uzKyu6jqCyNDgMiRQsqyUwy2wxLGs2cYLBWu2qXTFoWrBULMRzNbC3jQpUZ4yvpGMc3",
  "key25": "3UQUraVTRq1PNjeCVT1k3uL1e938oTJdnb7ybwyjLwkguZReXEg8fiogib6hieMkkKnUa91Z59wrwuCBwokCThht",
  "key26": "4pua596dtUt1eWeJWfwxNSo1WYSWPnK15FmrEKWZeDc4kUMNQHy31cZnxkdsfzwg3AGkFyJnjw9LWN2417iYFBEn",
  "key27": "5krxuup72kpBN1UYpnp1ju17aHwdHbKxFMQdyttaiLYzfL5ErpGdxpJgfXv1kZJwtb4jfqNLMXmSrWBMKYvRuoMo",
  "key28": "5bStnKLXoMAuS9By61cidM9HYrt2NTFMmuKRzs5wgA3EV6BFi2dUng5xSqUB7tK9erBNSRaoR7kbrZpdSF6okX35",
  "key29": "2oKoxo1G5hoeidyYoW22yrH9aNjU5h7NSNJEeo1e2rk6P6K9VNWSjPuHUF3Ub7uHPcAhQynSU3dsJjnqyNbnhSxN",
  "key30": "nhSDyx2mdiMgzoGYr1q2Ha3nE8L4j9HMWyuiqjUEU7Tr7Z7rxHh6en8JrSn5TteCW7wctQhfC73g8d3uEnbUehW",
  "key31": "5EXk6CteXagLm5gCdC5UVXfT53A5DCKUtY1wnSvkLgiTH5cUw33yxHagVA3XLc58e8evj3ThDH837khBi8xRFpXH",
  "key32": "5yv158nfQeYzeL6oH3eFRriYaN5hnKo6UEy8HtuzLJ5kk9srpqnG8HgQFh3EnbRpo7p5XTTmFQHkQk3AMkV7iybh",
  "key33": "3h6ToSuR2ypwQkKKA1E6B8p3g1NKqCfKt1UJLo3bMJkkSK6MXQvT4MBKASLwSmAfvTyCjznaiiY2LkqfUbnAJyUb",
  "key34": "2gswwTgPA8q8A5CRCQrVzByBf6nQGJdxxzh5guZFmBZhqCvJm7uBr2SuHV5hxMBxAkvRNQ7CuPHxuDTkBsGnwzb1",
  "key35": "4fRdPLs8HT7TjtUGPw8VNERtZT7Aqg9k9aBTtuFWAxEDBGzF1n6Nk1a1uQmExZTGPzjwnSA5BYweDTxdVWm72G4p",
  "key36": "GGsu71JYF7g4Cd1YsbGzUNrj8kKPZGzNs1HprZqb5TzcsHHFcCutcQAfUAoEr3JuMUksw1KqBibt6mvfij9bK6S",
  "key37": "3Gepw4PFsyDECbk69UpRF5jHvuKRv6Wnb15jbafLkt3qZEES5PKRrHztgDMvDN2YaHbvj7c52XYdHF6GFVLj26K1",
  "key38": "2AymRL1uhRyPGTdV1tK4DufNJ6ueNhBhjW9qf1XUjv1hHJW4Ymc6FZqdDKuFVdYV982PTQy4KbFZ4mv9AaiAhseF",
  "key39": "31PfupW358vYMesKX3j7dXo2v1vMm2abJ69XhASb2nLtmkv1uJSokALR8j4AxnE8sUMx2yxheLQ3wJ8U67DQAZm5",
  "key40": "5JnZJ5ww3sDgCF7sH6hPZk2YtESDQ9sDZrSmLV7B7BWfFdUSWzFJqRBugvByZvh8QwxHX9rMKe4n5WpDcQUaK3pJ",
  "key41": "5dJP6AF3RAoZuukxzMC6tbKZ3k8rYRrrjBCFBnHZtb5nWN2dcVaEpsrQnwvz4SgC31bb9cVERto91Xcd5a1SzTRS",
  "key42": "67auUEkzhCSF2i4ZaUGgkXT55RBZzE9FE2ukzaX2rEJZXjsfHfqdPuKm5uyDLrMXnWGDqy3TFmkjNPSUo74KegtK",
  "key43": "3KkHePz12TwEE2uyn7sYpr8rvigwvLNf2HopUrCx1avLhZPoWnW3JyFRN2eYBensdbDtHtZ4ePE1ijE7FPx4MhTy",
  "key44": "wAvX7dba7GPQ3vcLaPvYdDvtKvgVHiS4E8zCyR84sd1VdrEes1j8c6vDuZpidhAnHb4cHeYRonsftEBWXX515VF"
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
