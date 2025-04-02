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
    "3HAZbjB1pJVMC7PnR2umWRGcBbTihAmrJkQB9NR3bXnmj6N1rkfYy2Kzg9MN8DSqco2zGpzZZ6b4kxrTRLsqRYLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mTctsNUDffwHacApTFkWRmQcT3uZJnc8eNSD46HPYsxwGdG9PRs7RX7a7e53QCurqUXU5j26EqH1QGi8J9RqoK9",
  "key1": "4sRaufwhCVnWswnnZ81Ar1927ddUZosfpmtyZHG4R4Rmk51ZH3zrj6HhoyqLHwx13bczWz4yU1UcpRya1PHUoVYj",
  "key2": "3bvW541i75NbXw5UDBAhK1dcwfxWnZMfCGduzQSencjPgwFV7RwdYDpcwjo4r6LADnF62AmFfaommTqp7xvYspZH",
  "key3": "2RABmNaANUxsZmmnsm7uNpBTeFPKZjtUD42CzPwYrerEv4q6YsbqDxnyaqo1BeQaKSijrvbFDWvQg2r35j66NNb2",
  "key4": "JPQ5gTmRS8F1iWGbseGBqdkbRBJ9CVMyAmQFfPtqnv5g3exiBjp4jns2eF5b3JmvX8VduHNezRaWAYYm1CXkf5A",
  "key5": "2ZPumDkfeU57McJ1ZYowtxSUtGA9f94HsCiPn444DQAsuCxSxBw6WPHsF3NrC5AaDsrq3XUv1sC2pRHLSWJvs9m",
  "key6": "53XScKY884LwMorqzxTPxMGLE68hqHtQRbC1DtSFRjYML7ntkG3VrAE2E6AmFJLEiQ4jaBCJdxSF5PgpfezXLzyN",
  "key7": "26Ti3HsXCkbhd4F4rHs92zjANzniEs6zubGXHUraGHJDPeCoP1nT54mKUGgy8zA7X2jdaP2zSefMnW4tYDQXSKP8",
  "key8": "22XTyUPWEtEhDpAHGzAgp5KZyAVBHJC3sTxcdDE5WqvAsHSxXnf3UzP7qBVCbQE8HL1qsR49TSNCuqqzGpDwStHD",
  "key9": "56Fisf5Qzkms6Nrsyc7SVBKZfbxpS7ibbuzfQE2MYPkVVhxeXKW9mhWun3scz84MaR9G2zJqkxLVVtcQs9KYrCs2",
  "key10": "3EAhQLEW8n24hd9zKkMyKjGEvcVLGpJ97ocW6RCkDx4vWKCLAXs2mA29m9rmEaYvLerc1NidirVDXGutU3mT1EEK",
  "key11": "4tftciFtvX1xQQmAKo7rWvsLE8AXphEyLtWXfgUYmRoFcoskR2CDHGQoRJk4Z3ppofpXLscfgSjwiB1yWySdk4Ts",
  "key12": "2dcpN1FQynDcwaQ3wz2Tbt91WBvwKr5orR3mmoiuwohBRh1SfWmvQVoJh3ZzEQDVL2pjZPyYpydwVxyFtFz4Ks8C",
  "key13": "2KeV8m8bNL9fPHp6vYiWKFti1gZ3KyDeu6upBVt7ePsEyUoPVqf5CakKMpxeRYAu5gq5fhzcJUedZJj78MG1SveK",
  "key14": "4djnotZyPVHfvFNzyHbRdsQgmJgfWJ5J6BN3X8MywkEgjYSiBGyLNVA5pzrkUKkndXY9Hr7Heq7hccGv1QW8rtFS",
  "key15": "3hQ8o9WK2rVtsqEpY2JtsMuRe8pHwwKQQWVnAdHohrVyhnAGYR8PDAUjBCd5iF5vn28zYsZ3VjDiNgYR29wEyqDU",
  "key16": "33G1EwHMyZVBoqGDH3XGspDaMfXmA8cnsHdqRfqHWJSgr5QMUVGGa7R9hjGUjqmemoTesng2yY9YYondTcEctank",
  "key17": "2yGj8m1GLJw6H1YShGGFFJMtHh6JEMekuKQmt6aLvdGpJnwSQxAW1b7rwceq1oDpGahnRBarxqa1Y89Yzubixyns",
  "key18": "4JTFLqbMW4JZhJbCfPXA424dAtCnFiZS4bk3ZxcsUp2g3V3xYdeei42dataUQDV1w2ZMuCTPMCCy5K24yTygX5yH",
  "key19": "57hTMquRUzHHm2rMEbRK7RN5EWtz6y41xCyXcVYa2RUVKvBu2dN4B66wmKMgFkPrJActF2gA7AS9RW41L2LFXPws",
  "key20": "46sdm3zjJw82o8H3UgcKa9RaZvKo9BAJmkBGx2csB667XHJB9cLYgUzjucwjLG5AqUV5tQMs8teeePyHCip4XfEg",
  "key21": "3Vb1nP5KpdGfRM8ZagvuJVsZcSeKJBeeNtfRWA4RtwJUqZPsernAC9qXHeMoBbu9ojoH9XTJqpbsss77wKMWUFqV",
  "key22": "2xvXMA5e8MJ1kJEyo7db5SPqTgz6uJhhJuGhKm8Jjd1AVEHC2ZzSDKkAPaGBtNwnLLGhL99ZrB74mQGL4QRQYuvC",
  "key23": "2iAhaTWqDGDS8CmdD6JGtR9iaCTTjnFmZxD89MopSCUuQZD9sVfejFyTv2NS4txM2JosJ2zTmWzNAPdorYcw4feV",
  "key24": "4D34tSH6SHsBmw1yKfyy1JZT1QndK3XNGdoAGnwyBJf1CwZMW7i69b1YrwkdkRvrRCthaJLUSdvsLt4jCzUSmqgE",
  "key25": "2SWHCgXBV6tCWtBYfzAEqgs4iy2aPdrbZkEivUGe4kLuy91sEQ3hCzYmf65gArFpeK2o62ncPtW4cMYJXoX1o89v",
  "key26": "5Y7BLjivYcaBHpXgMtiiF35wvD3cFbcRXkUJX7PudbYGUftsgx15cpT2zwqAWGtK2qT1DhSaRR25sQXo6riFWyBW",
  "key27": "2uwUwwNipY2tZuZFZdxyUAczkmNX8Q7DEFpWoumSfFN1sgZHAqLXap29AWPXW7o8hkPAUqcyQV1BijDb5Zb1TL1W",
  "key28": "66L7YLUbcC8JFpKhi793gsAgfsmQJJ3dwxLnCaRxBLcMqSiQg82GtbCtHAUSjrdVMgfSumzVSek7wF7CvScmbQ3E",
  "key29": "4Qv89UfBeQTyv8iLXwbytUA8dMnZeFbxZiYoaKHgYnNHmEvLAHraEBCcKKCaFpXiqzCQF1M6G8Vj19mqWn38mCvA",
  "key30": "5mDgxejE7A8JCRhGFrpkhJweCYvAQxrTkN9BmzPbN8x7fYUk81WgqnvhZWVz6arTvCdUbLJFwqH3ZDGjn57JJRA5",
  "key31": "2edRjb4Xd5J4v8aaHZ7vaAkmkgDcZ1jKHiKShLfai9UZEyyiKGqoL31YptBLvfY86iDifdfnpSgdwHcWNbsabZBp",
  "key32": "4mxiuLug7nR4p6rfEk9KTMyBqWw7WBf5dgDVN2VaD9pJQ4v4nsnuJqhpH93HsPCMJmc4EEt8mSaTs1H254NJKZhi",
  "key33": "2B2mgkoMY5dYvTHraNs1WPJPQGiMozVkKwmVQcCcw4iFph8YRVR8WeuoxMs9tjDXv4RrwzGUEczt94mbnWQvo1wY",
  "key34": "4fA8rL7Z1qycrae4H2DJX1RzrWtuNbvShVemA5TqkbpV93YDPGdpjD9US9ayDeHgi64yyV3r4U9yyHqJYsRA1cDj",
  "key35": "3GXwHgTUoJ5CUmNR7AvrnTq2vDbeHoKpVDjVFntVmCfDqaTiZRFABCjMNr5dutC5BWSDVRB8BMX42SdBuyX4BGtn",
  "key36": "2q12CkC3NAEraBJpR98X9L7xuPhLeefAf8wZVkT8x73FSETW9Dsb97Udp4tbVMKXdwZQm11N5sDtTJpyMk97NPqt",
  "key37": "fkvY5BEbgW9iB6F2qs467RZ7iVmY5n4KHX22rbPxmL99cJbG2rX2RRBqMF8Wi23weJegzxki7meUATx7CZssnSu",
  "key38": "37aJDG22w8n7rGWvbuNjboF1TDC1BWpTPQ5YPT1FTrKbYGPdufQaWBsUDCyApuU23PrrVjfieU7JoA8wZ8Gu7RP7",
  "key39": "3scUQEPZMA5KHqXw4vKqMq1SAxBPBKZpQriTGNDXg2Y4gaTgAMvQp8bLhygzExeKd6DfWGDTkjezPBBuPas75K5W",
  "key40": "ARpRPMKTz9PQPZEFE319Ejcwg9mKzrPym52TzYnrq3SZxei5maPkkDaWFpKKcjRXL8RQgmb7argC1mw6g752BiF",
  "key41": "5boDVo5zsCwZY5qhXefynj53iJStXPoER9iFrdwd1jc7DxAn3njABXmEnUT98ScfutxBvKApYkvHny9Dz5J875Xj",
  "key42": "4gfwP63BETERfAP7tfLNY4ESbNUne9vKtDjxCpZvBGG93dS4fmZd6f8nC8G7kd9xtzdUJ9uM9btM4NQdntb1es8J"
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
