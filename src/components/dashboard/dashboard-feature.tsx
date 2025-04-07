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
    "5gJr17Bnhzx9LPwFZjBBZUrvkCeVyyFcf2w544sfUwEAndWE7p5k7QTYzf74n2em7sg2cF4jX7aXxeyffvAqd5Wx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pgZXCFGSrpynoHyxs3uEkAajf6MrrUVkwvP4WoKZUo1wVrHUXRfRcsDXbvdznKFqKQDBXVZtwbdytgc2REC6Jje",
  "key1": "3xJpKAWdBmAWk4SY5MwHRc5tUdJiRHLuAqEbnCDNhNUmfimbBXKNEp5NuZYWudbWSGRkDuqg6udsHaUibfojFygT",
  "key2": "3fk6ebuGFRF3xkD4nr7VUg5QzAdjJqGszM2d51pcyJAWXXabL4w6eNLvTif5ytUWZtZpcCVKFhyRd8YTyjnZqrQW",
  "key3": "3VYyGCt8Maz6fYmhLopUVcCPp64bPQCEwZZgEsDXSU4kTk72MvJp2Wtddd8mdRFAq4N1CYGExV3Ki5gS8jqM4Z6W",
  "key4": "2rv32Mgv4DzbabjgK3JD7WhmGBSzGDbvGHzaKRG5fXhE6DqELgW3Mve3MiXsUJieRoq4XvEDkoNB8cc3YjxuKzLh",
  "key5": "28NK1Su5XAFjkuAFmyK7Df6uWsLq5SUbB3gykLB9msHE3kprL5gUqQ45qEnt6fZkAWyvjP66igU7dnUPdmBYHaVj",
  "key6": "2bvjMii6nbNy5je2S5GDhvqQ6A7N9iNaQZ37HHtWn726v9diJT8RTxHetWrpwCGhK3vYU4Rjdw5S1ib9xhbfhKmp",
  "key7": "4EJUYQQbnSZ3vYPmMnyxPWo15fwjburYGaUZh2tTKqm3CMGGF3CArQXTPDLukbq2cKXfuSnSRJXgSYufWgJFtj7X",
  "key8": "27rSwr8Xs6fhPCEcaZMChTa6bHr3E1Ny8ZhEhi913v6DMNuKnpBcZoHFT2YkLiXDmDE4kw59tCB1QtFVQ4REDsrF",
  "key9": "5ddsG3sgdZSkmE9r5oBTx1NmVL2VP5YvPaoMqaJHgLLsskjxUcevRNHEBCZJTgRTBsytdUTUfZn7f92tVdtaMNqu",
  "key10": "3ygLguYFLktp5ejYPJzQzBP97zHfEqSuPbtyKWboidvzuHoeuMsfNKgd2pwQJwVwzsTzQ9gwRLWthKi9NZFgFzyX",
  "key11": "54MAmm7L2aaHAzssXECiTHvmSGpm3i32Zmccv53fV8As3edhPtrmfbvQdPnrHf5qJVLghr7RxWTde3o5V1asLaAq",
  "key12": "56CTodTYZGBwbc7k4VGkCMa88oX5NWFuMTQ6ci673psb1rFM8fFTvRWbwVims6x49wLUNG7mLxfMiZyZ1G8QpQTv",
  "key13": "hJUJjQXwRZY6nKm6wu7cdDvXgtLY3sxx9ugcViefdXDr8dAycyz3UmK92gN9kUkweKXbSKZdXHaXzANpS9ZYLd8",
  "key14": "4HyxueqjfjDmoFu3yqgqH8y62twGEfkn2H1bVsm5MkQczSbLeTM1BfEPH2Ft392agA3eUvQ3LezRABt5p52YwFns",
  "key15": "4bCP4jnL52bG8ZvJGjYXjDoedzN6xBvmBDAFF7x4fTtWFWnK3Lt4fTSZd9JkZs8HdYitZpMLduB9SFQtvLUp4QEb",
  "key16": "5LgUnToCFk8Vc6gAc55PKXNDBBpDicN3oDrQPHyoK3CGofR9R4N3sZaPSwPBkQrAzTS3LCTv6L56dwHkhaX9zc3F",
  "key17": "4Zy9UAVB1miLfKvCabWfbDgWTQYj13QiLe1Rj2e2SvhPbsjBvYZzA3cUWSSZhbpqSHFxTUkc6ppzs2aCUeCd8r5K",
  "key18": "28db6eTWWEgbuKYePFLjJHMFhfh6kgZ4MiSKHrQGtYr8WWg8cUmbdMvDXJJvFCYVm4NdoHcSgXDheRteJMhXpTVW",
  "key19": "4P59Yf5cQn61WLYGCfJFoTWVLjuwzS5aMj4imHLCeDGsL5Fnf9MLfDMhmj58w444CaXrPzk84jmMSH77XaJp3usZ",
  "key20": "2MvgJaw6v9FenzWPSUvsnQ7ktz7ynh16bzox8o2uvgNY6zzYVTqQCi5e9GQzfy2xFrLHT2hbEERfcpxSeW9DPwad",
  "key21": "4JNxEHmkpeW4imJDVYWpP3dsoFkqEKxSLYtdSdLRMFun5LbUr3ZvjZq2UpMjHxJaPQ3YXJCuHtuU2rEm9UJjWJBf",
  "key22": "4TY6xEUeKomyQCRaqcvga7AiNNQZEVHQFBhghsrPNLfga1j2ZPymztoJRbbMXvFUdYehNZE3qbfRky8fsvRNCFSm",
  "key23": "4KzFxKTcyjR4D3bUn6CY5uC9q4XQDBvxxcdRK9wDrVpx8yYY9RYB35q4iVtdT5EgJokmnkuweVBySjWSuETZtKHv",
  "key24": "J2gEqCiunY1cqbWE1Qdh3pjQSWKQPAns6UicfsGoqtZDAW3xeYw6f6B3eCEePSr39SBumsGuH8B7aMVz7n21nXA",
  "key25": "QpCWTzQKDWpoyorL72HXJcvsY94igxFAP31WQJ844Lw4EpuNGFuQMzm53wMmh7Z439TdGsn23K5QBCS2x6s6EVS",
  "key26": "3ooRnJJKm5XGeuvPqA1dXfE8ewqQkFC3249KAzu7ACcP53ieQ36a2VwQdn82jAAvuXoN2ohFacrd4J7FKVmpSB7V",
  "key27": "5XKVJ159BqgxF4GuPZXh3t6BgrnHr44TK1XwLF31A2azs4xA7Z1XBtALLptE7jk5qGK5MDpoxJC4cYefHhfuB45R",
  "key28": "4yGtU7tE6FWv184cNy1FMxpFkJEqKjgNqiuByUKsmQiBrhxdrsbXnPZsLjaTEcGcABKFvXvg21KqKyPxQvupXEBK",
  "key29": "5ZQniwLQDNr2RHXBN6iu1jFuzvHbhasb6fJ8EHNYoWkcaDTt1k6ggP3G3LGsBWgtxyMWB1Doq3A3odqr7h7WdQyp",
  "key30": "2QHk8Vkdrkp1RwFnjubBMYFyDM3F6xRgpoUH2KX8gLoRLd9jYRv5x3CVnDLoYE564UCrMqBp2eT7rhkY5QCpdCRZ",
  "key31": "2e6nSVrtiLzTNjWVdfjVyjG6fjhZShKrhAcnUd4JWp19dNhJEqGi7XJayZ7juKeVnT2iBqJ86sv3dA5jZitvRvVw",
  "key32": "5vEpueK4UZGCL8R2w3mezZ3fsE8hDXSigC4Z5ehkB8yfwPzE9YNHk5DpxgyzhVZJkEc4u4CfcVzSYTTu1ktNcpE8",
  "key33": "4UcgtR1HyJhZJEEYG1vqmhxDn9tqxt25Jp2RqaNXSqWMfaqX1kjRiGs3eUyUCC2jF1qWsYwghUGHTYYPTP9zFr7J",
  "key34": "5VUWxBcsp7TokEi4ao8N8RFQSsvRK7VYzWvMcLS4FWabTn9aP4bsAeM2UfkKBn1KAb9rU3P3R6D36yCJCAo7t4Jg",
  "key35": "2dPQmpBUJbjrnQ7y6QTPLzZiwJ6bjhXCsa5cx3n5THySjxnZqDR9aDYABG6FTUaiWcTgvg4AvAZPSq3fE6545CZZ",
  "key36": "LpyfxigiB656BA6Hw9PXNhnfbYG5VjmovLWVY9Awm4gjYHnWusa1Dig6rDWCEriinBK4fUT33agrr2T92Eixo66",
  "key37": "Hr2jLQ7jNEBzftk4vH63khPLQwAiUFwVN7AgHfKWgSx6tqEfbqpvpNXUJFF36f7wUrRgK4SV5kHepzzRCRtHcJv",
  "key38": "2Afz6WwZ2bxsZBqVgYpxcHkhEN2VGoDsSmLoFqyHPf4FwjEtKfqCe3YVJWsQhcNFMkDFkL9wFz3JBn5cFL2Zrbhq",
  "key39": "3qQNNQrS8UaMtMwUdvwhnarRMgqG1f3FpDBkEPDr4noMfcUjMHRSGcchMXGguB16zHhiQcgsnQivmjY7LdGvxfiw",
  "key40": "3a1kha4PGh8uw6cDZsuHptbiM4ZyYbXESNHzeyWj8pbrFrXXvHd1SPZBFYbgxLEkwxYfiRkeXAy94rQ335JGajKY",
  "key41": "5hvgzFyU9nbvmFy96xNXzZZiLn7ufQFqmWp3489bHZ3uzjCmPn9WrEWisj2s72j4Jsnf5FjkFoQpicgB4AzU9npP",
  "key42": "5Ymra4CPdRSuVMHwroum9u71kgA7MHAjCZMs8QTUYWRXP9fq57Ya1hTmk9dneSHDY1mK8hFDLthiCrTr1UQSpASq",
  "key43": "YSbj5F6wh8iahENsA8QMetR2npto2SpksNgBMDgokhkt6Ki8juT23axhxZ8rXvUGwc2tf7ZzgnfZXw4qHfUYRBR",
  "key44": "5jp54xpkfDXkXfkrtw1paJDacVeyPytfQ8pGCVwg1tqNoqhvVggp4tqYME7AzxjCpeRjcJCwksPn1SjiheecU6sg",
  "key45": "4LSgTLEsB4p1cELbZR4GY2V2xXNFjGmujkAWHuzXY8VWRaHKquqdzaAVJSVjzcfDnxU3AX8GM35d2tuxe6c2KBkJ",
  "key46": "2pbdYYvVosUS5rNgYFaBqRHGw4fA8XL5s7uhKqADvrkAnYWCamov15PPJkduNSQCC7PKLVWSdG977zign1hfmwJw",
  "key47": "Z4TQKG89apC5hKYdaHuuRPxuyrtNpwj2ckkzcDK18i2ZF6ASXeuPxS1XmtX3Z8y6s92LZmgfkud2KeMVNKmm39R",
  "key48": "4LUgV2bXUm7ji3r7XTDiBG4zs7cYMQmAkdA9NAUfPa9uPwAqUCukaYGtvjETHx1MqJMc6jhiV52TVVTJTsG98nzw"
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
