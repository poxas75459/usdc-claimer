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
    "3LtXqjoBEriUgoEgLErzRSmbYVjJgjhgNLvsX19DXahks9wBS2wxdc2xxCKrnU1t6XXME98BsHJHhC4owtAbr8FW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23g91UH9CrK19eq5DieZ6FWHskai8XqGHFkkzWfMd1zPUt9i22pzZQfSrMP4E1m3P4kSCxM3uET9o6w2vgGo931z",
  "key1": "2EJnSzBY1CtkvbU91DcJbHjkBTzVzHy65aRmcjQMrFBbhfJxYnA297as9paVeCzANhcDYRyV1ttDKDTp1SoJPT3T",
  "key2": "2qiPVqjXLBDh6e8NpmTvkMey6rX7jfmxBAUwVy7FJbZBeyX4UZ3LczttrTTYSgB1fqrEXs38s5ZDgUd3ZSHNmiKn",
  "key3": "3xz7hgopoM89Tn3d7yuCMTgZTPnnYJcEh4RxUUmiBe1arK62TR4U9wxquw5Ue8UNi6Ch1pniGL77nSwdSC2eWenx",
  "key4": "52V2zULb8RBV2QEhCCP6iZ8iQgnWnaUC4G1YRmXSbXVWCntw4CqmEaS3xnoyGnCw6srnu55N2xEqTuA8H7taJ8Rs",
  "key5": "3X27t3ZdAiFZf7buka5PVdL7hn1iiA1dULKa2B95anprhX2J5vhA7siaBK1efQxvGr3NfqVmunv5TU4dYnTDVADK",
  "key6": "3SLx4kjue5W8NhUrx3HVRpVLshj1e6GiM56pU7DKjHCUBPFd7qN5AcoTLYUBmoWQe9vsVBXQgGDEEPAsaQ4p693K",
  "key7": "2b9u9qHX78kLg94vRfQgKNTpPJtNaKcm2TwWogHyYEKZXxHhGhC17NyaT1ZDRJ9T9R9i8C2HNYhw1bXgrRqA66cm",
  "key8": "64PhRy27tqxgmbQcvpLzdZAyYxDHdV6aLYqiU5vG1F6eA3peeo4CB7PrjDsPq9SH1UssACE8pdMaw5qAdPxj5xTR",
  "key9": "2FTa44gdrXENfnoZSNot3dnggusFbiWt8g5fxYxtQeh1QvgH3XCHCj7NjyXvA1cUvj1GxXxjtGQnT8vZWheGcY4d",
  "key10": "5VWsAxRMUEduu2m9zPDAKUfDFHWgy7D97vpKKpCo6nXhPJb7m3q49PaKSd4y8aTEi3CAoPZ7AiKnPimvnrGxvCAK",
  "key11": "3AvcDuqrZVLKFJ8Bx2YJ3ksE62BrVdxiCycPShjxL8QBths7uTrQ97gMiNji8RiJz38pNtAnd2M64HfLK8pdMwR8",
  "key12": "3wcZGaSad5sKGFjYu8A6z5aAsypMdjDN7wZokud7mETxQRAtD8D6BqYqkhC9Zhapt4pvbEFjybBYoGDoys1hxfcC",
  "key13": "5X6QPzWoeic4YosenAoGsvsMt91cJAuJyFuGqX6hv1uGM84KpG95naVuzdVX9ZFbBAEXVA7MmaYnbea5egX2oc5W",
  "key14": "34atk9o6ZnRGGhEsqW4z16KaT8VJe8DApUnzziaRRCY2zzN13PTGPMHkBCRCeEFUSwDKqJdVkQnBm9XLteKweMQK",
  "key15": "5Wragd7Wdj9avx34VydeXQZsWthFZQE8m56hwZEQEB2RW7DhXRyQstt2h6dpVJULP5tRj53mhqKc4CnGBZYtpFmr",
  "key16": "5FW97HAQ9bXPdKo8rFeiQ9fBwkcHcLgr1P5xPN88uxuXFUqGXtzhPC96vgF1dFgoUhRUvQA7RbecH4E18R6tTqBm",
  "key17": "7EH2SBw8UGwqMqEaRErFo8xvspiP8EEbXS8RP6XmshhWdBPsGhBCh3BCDx5sTGqp3kn6jaSTvxya9CdPpj4urBw",
  "key18": "4EZbmvVJE1pwV9sQZKk73SJo3ZTfHkBsya2TqPM8rdV4UM4z2GaG5BwNAdw6LesnY4RJY6FcYNyccSXGYys12fvP",
  "key19": "4M8MpHPx9kaUvNhg8xA359pQX7rc422gLQ6CZo9cXS6PJdcWLpQbXRZ4c3htafUxGxvwvRwSs5V1wnhdaKASnJUB",
  "key20": "v5fd8Fjg7UqfqUP5nZdqM6QJXgiYS62HzUgk982FeAPtyJrYH3zo6UpoSgpnymRAqPW5iA1jwnXB7WyfXfmvUnJ",
  "key21": "4ziQQHo56tdWz4tz57QgjLuqA7WBYVxSYXqWUoVDdWtopD7YpUHcFLWBD8cyVtbJBYDUg38ycWFxLapZpQq5GUnJ",
  "key22": "2RUDnkVjfetvskVEP3H77ggw29YzCS4UxkFLroUKBjozt1zUSeegh2M6a68hDFeWpfbrFUuCTtztkcRS5c8Pdr5G",
  "key23": "5PGi9ewjUUgDgFmYQvidUNuSY48za6mnp3bsn47PFnZoFJWDBh2K5asmujZe2jTxsVUViSngnx29Yp51MTnaeQwm",
  "key24": "4pyQsi8yNbNgppiJxkxsxHkdedcoWvLn7tNiWjRz8DAnQYutWGYVrHN1bkkwyUiFjhqKjsjvNkdZ321LNipA6Lqm",
  "key25": "2pD8KpAhXedpzabmbT2gnbu7iGUmKMumSMuB1ef2mjtik8BddQiWrgqQ52yEYGn88bhc7GyTYNPWbCJqz1yEiZwn",
  "key26": "2y11LBVcUPkQEnjXJrxsE9SMtHiaweUToBVeFWdHY9pfPZfFcDt9oHKX27ydnRFLrpJPGagKQCZJP13tSpcSFqcb",
  "key27": "5ztbZA1SDKDSPhJSoqUbWMLPwx1L8pFanqYtC4QWJe4kSW33MSsFC9nZN2FKpaJLqyMFVT3qWG2PirhkK4TeLxmk",
  "key28": "2m8oVeUnJkPSW9w3FCf3yusfNkfNgt4UZhnBn2JsQa2bdAoSX9PXq71VtL5D7Ui4WQw2Xgf563V5GCZi8y6rAw7C",
  "key29": "3AtjteJt4YG6BiSwYgZX3nbg3gYrTYW2DzG2vJrP6CLqYAEt46JrAXztdfSpvnPyxe6W2tv24TYFthYpuuaLiZ4e",
  "key30": "5s68TtmmfcpREHmB6tc9CtsTt1TzHD5RFgKqbRgBRtW9jaUHYA4YXSvSTNNZhBMD2Pmy2FZr5mggs95HTgsWwd4o",
  "key31": "3K4NPzAuU3jmUSMaaiyXDKbJNeeGtisZXKNXFivauKUkf4LyQxfykja235WLX1puv5ho6xriFjdmHCVdFbJMFoo1",
  "key32": "4m2tzx1ZBTTXHRiRoar8BttXSvPHPoqF3xoAMyKEdYMo36d6HZWX1zGo3tnLbcrzH8MqBF7aBZz8dNhsDeNhfYjE",
  "key33": "2CWL7ShMSX7wkqbWaUfHjvmzXoBeF4yXoD81VUrWPMU6uU6DBwWJ7wjtZq9GyTmZYLYtkATr5rpgiK4ob7TxavJS",
  "key34": "mW3B4bSshYmpUsU6GnYwNodwYtzqp37p1JJPhoEWNSRn5FMDkcCzQ6Edsqr5eskzvgVcJcJH8ypBue1TFq4yyFd",
  "key35": "2KfB1P9ZPe4FqqZ4Wmb2y9pK3hALbtniaNq7Ub8WyXCzJ15juki9Bv8QCFFT1p2t4R5wJMi5airs2WaVKmC4i8p3",
  "key36": "4GmFSgzU1YQvHPF6rB8SsdodmLRctHbV1GXdTcr8JBXF8koHebnPGuW9Fjtnd386Ec48rnMjp5EMXDayDYXfio42",
  "key37": "5uME6R163NXgGkxbiqgehamd8wGsyYbwJNVabQ7L1Cs3beJ7hTE9vpRqQdCvPc8C2byA3bfA4U2b3HDQk4Qtgqzj",
  "key38": "3NWsPdSUbThxWjaxZ6sFqxNowR4jMUsRQyo49wDiw4D6eeGRNVFqpKqRs3BYb8SQTH6aCKUofxB78JbZAs6izHYJ",
  "key39": "552EVBa4wT8yjmpqsB5xbKoCUarKHgDJEHzwP47F9XoAcdgnGSex9PW5mzywyrqqJzahNLECuAjjzyp2KLdf5DUH",
  "key40": "4jvMajNzeesecSFf2TiXtq3zEb4sPfAvrLgLP8MRitG6PDqB4NzR5Abne3n8vdMxjB4W9zz1SYLKaYbzUuqmK4vs",
  "key41": "WdW9v3t5aUxLkU5Bn9d5wiMdd5uuW9SLKZ6tFHYiC8ayKsycWuiFh82obSKWCVEYYmnxvMHi5LQbKwsZfTZqXXn",
  "key42": "5pPRS114Xp3dSRoP5P68Eiq4U96ac3soi4bEReePdcxgYBzSiy9JWPaz5QRGTqR3dGWX8tzXopuXGr3oWr44sgTq",
  "key43": "3KugNgUwJNeiBSPRqzc8ZygH6PhiSPbfzqDzJ11R6FkqYwZYEELJasqVNkmh4HAeE2hF7m5AMTYEf2uwNr7e6rsa",
  "key44": "pzUqmzXeawXbQA1npZyDsuq79VHUXrzVgQauGe6UhCDxX4yNRcYRaPzNPfbQ3cjim8XUKe6o4JodxzXxB9qgbhP",
  "key45": "2NAZocusGLNq6aYhhXV2YSPyg3z4Hok3GYGPSB7ghDnAEZuXBxDLcLoatzJjWyHtVYfB6EyRyjg7gHBkKR24gi8C",
  "key46": "4HZb9G365pKVLAH6dJz8LwQFycqE13LjjSNj1y8SRep342ieX2ppMKdqXhyrs6rqPvuFWhjtiBXDst82HuY3Rj27",
  "key47": "x2zgQ8rZWZbucCysi4nR6pTGdVUmb1xwRtrFXFUdVLF7jJTLMkWXFLmWaYRshdwq7Acme3dnh3gQ1g6uYfkRnbz",
  "key48": "62ZQUSci6ao6NVcYiv4fayPPP8T5oaZ1z31xdW45WwS6dYdaAk9KXWiqAJLSxMApepFRmFKF16i214RYVe9RT6BV"
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
