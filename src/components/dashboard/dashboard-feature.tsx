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
    "m1ScTWLRtTWzvBFYFbUrHjjKFFSPbtxAQfzKtUZduUWnCNmj5xHJou5r3QEMSo6L7MPia2iPepniECrNHQeBznV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9dgkqEAgvCdBCTKk7kkZHqPPfEaB7rijoJ1GzJhvsDdcGLbm4eMwDRE1XbPHUFD8mJC9tx8YQ98fWXxPnyAch2H",
  "key1": "2RNjmVoG2ZvkK1NPpVqA5Dp4MMEg818DJ9W9CbnvM8fS3CaaTf8ZGrXUq7pcx4wsW1KUoprHDcuvqxGEKpdYAEte",
  "key2": "64qJrsgudPFpF4q5xeEpsWntEMD5ziHSYo3KRLJN3mZUcYxD1nZwnbowt5d7zA7Xx8th88RdFSXQcj9ecMzXETR9",
  "key3": "3cMz9GxhnM6sUYBdrkBJjZmv3iCDmhRTJmpFJ95tkwomJwQjiYbmm3q9X5cot1XPMxrSxh1rEVhmAyA28Bq8N9rR",
  "key4": "5sLkUvDMNR9QKNL2qJzDq6qgbKwkSz5EgvEKCViqh9AomRTG4zHgycRNf2poXCjMSpZ7HsE484LcjCQCy3u5me8y",
  "key5": "24Li1JFG2dBfjJtxXCUe54jBGbWBdiud3BPPmmUxghXfBmmco9fHe1x8BRzCpBT8VL2cDTVfnBdQqgw3TwxvjYfU",
  "key6": "47mZFeQNesoehbZ9gaJ2yidtZ7YCBCj31AZZN6bgsN9vJNQaV2GzbKds1Ke2ehdmfkxbMnz5uLFRhrerkpNSkZoU",
  "key7": "2XUfty3F59FeKiQViN5ZccMjUAorh4R18wzK7DhtMEhdUsSpgkm2psazBKZPUTHVeFpn5fBYYeieW92N5qRKMzuW",
  "key8": "ne86BaE7obsGXkVFnFgURJTAdapMsdZjKT3i1JYg4bCXr24tB8sBTDgjsNBYRCUBkvYN9kRFfj1XQ85Y8hofUW3",
  "key9": "5tXoUpDZosxAjC8HSfQ6NmchfedFfjwxoLdFAC1vBHoWsQJKHLsTSKf7zFBmgRMRBCnc1W8DLNcG5quTmLDypfYt",
  "key10": "3S998FCnGtDQXuxe19M1gokYrqY66d6dYWwTY2FXPf5TtnQ25H4TJh59EfimeQJ6sEzXiqDk9wp3dFCrgTYrPKkK",
  "key11": "Juaincey3Wnk1ppkMf9Ze4AfvPA8uizKg9k4nxtzzdgd9YKgeZ2p7CxLNYx1SsQf6g8E8r2E7FwGr9F6PjNfUVU",
  "key12": "VqjF2RkqwbaBYbg46VDdB3eeDxSJjgeu9uhPCeiCfsdoy3qfDF4Fst6Pj9f9CSYXpenspSrtE7BUAGawCDbyf2r",
  "key13": "3ryFVaV9eeqtfuqufDc3AHUd5bkRdY4ZaDWovAb5XSm3ooWa3Xt8hXk7zLhojwvrEM3zVSQB7tPTFb85iD9ign68",
  "key14": "bbib78t9rLeGavzEmxeDjJkHf6j5dQo1bUx1mAjRxTboBmLwqx7F2rJ7A1iQguSd6Vdmcr74rVKFt3GFe3QGURh",
  "key15": "5L5oXMg1NsRBTSmcU3KPWc2uq9rA8sd3MfSxESxAMfamWDo4qALeQRzocgCBPWVp5wu3qhE9zaaGxzHXtkU5PvYC",
  "key16": "48a2wqY1J2vNT1J5Q6guwhS3hJxrttkQzG1qe5dR4Lj8JWjf1qgu2pCSQExr3s8b5hWdZaT6xf3x3z1Xu1hczEKj",
  "key17": "39rPRsbrZBwTQSPSu4YWZUTuZ9dfNznRa52stS5dMu1yiZcfiuVTZRaPgagGyX32BBEU8dajAFPG5VRrVCSCVkpp",
  "key18": "55g6wB6oT1jcAEtphZCUqowuCsJecrw4pUPYQnqPffcVKUAof5VmBk2T1dHQ1Pb1hdyvM9T5PSTjyKi1qVibjjP1",
  "key19": "58yru3YB2KEK6rZvsQ81TkJTH3kmV3NL1cByLwgJjJukNEA8jf2MRhaAyQfKF9cc5Q28resdMwubr5uZ6yCoYe5a",
  "key20": "4SubqrbkqT8qe9ogiCyBCvf3nvz3hdquEXY58yp2oa3FgVr28TJPNHczd8z4NEdDpayLqqRb6GYubsdkr9nV3hUW",
  "key21": "5aTBT9UJHRecfxYVwLs1UuNXZUUH6MyxdRj1CQYisBwhXfNhhggNCLgxB54ututvb5SipH2Aig4CszjLGHXXY8Mf",
  "key22": "4Nv9C4xD9nE5YN4yHSb36D3M7k4xGu2ZbabbmbyobrvvKXySev4BvSSPN1Bu9hqv7fBWDgwaCVKUnWbFv3vX6y6z",
  "key23": "jXsmrWErL7XbNuAavvbMQdCVccYEGG7Tn9MCxBA15PHaecCYbiEwPBHkBHmGJp7WdhBKF7i165gMUnbeKvCuTZR",
  "key24": "5aWyUBz4UD9RqjZZAxC6qYEX2xdcGBhoEhXv3PToV7gsARtMmkyvCCfor3pJ1Kek9q4msncX7FQmjdvXn6DFrkdA",
  "key25": "4NjczwKaYg9vcdYTG5fBA3RpuKiYY7F8EYKomXmvD3YRWnaZK3ogVMFmL3wBoRmitiubpUa8M25nL1C3gw5P7b1Q",
  "key26": "4jLijck2tb9thiN8RgD9bF5tymcHRLHhZ4a1L9jnZ8GhUduBD57VX4E6CdBXqtY52XxRh3Xq4riutPqPpzFdxnZ4",
  "key27": "21L72Upj7VwbEr3uf8gY4Xr9u56CUjDj65uQYri8zUSvskdteowhmj9F5nDqozd87yNv5FJtcS2gHicNHX9WqtPi",
  "key28": "2wFyBJsE1wguFNQWCLGNkTx9i7zMk7uCNBdQewgEAFY313Mw28bcwKfkbgxcHu5haNAF8GpwQCY1Hhm8ACxCHL1d",
  "key29": "2QeP675Agmvp2sk62hBefrH6vjHQxW4pPHtLWHdGj4A66JZUL9YAUHRr4bBAUU4fpDKTgAQN2Kdnq2QH8AzLwGSt",
  "key30": "4eP5rj5qZxz2s1AHQ1bqhQyQMqPGx8D69jNidx7HyYvUBKWfLhb4qUJFByu1Z3Ry2ChTy2CsichJyZtvjwu54Jpb",
  "key31": "5pYeMC8L7YBpEqJJBPkJhZ59UfAE9dp3sG4mx16tNY2LqDDUwLQkqE4xb5rUBb1Ug7emAejKgm7gFYm6Tg4ZDq6U",
  "key32": "2ToAJ2T4e4zB2irfzKNbcsqHnr7dpe15VKfXyKbun32jPmhDFdkt3fewnz89uJapwunvZF34ZpL1EmcB7qRpRs2h",
  "key33": "21XwAVygu5jGjm23Zb5oBC8hPzCmSDmesFVvrqeYVfjrvCDRSJsc2wHk53W3YLN8LaZLStd2YtXBBuvRMAofcgKt",
  "key34": "2QTiTakYhMbwQSPmbQw8ctJh1imEH4tKhCYK3w1UzfYxCofatoSpMpoc47zivUC1s3S53aT9SBeosRTDHaoTBMks",
  "key35": "4rzojeUB9uj4FAEgoYLqyumqX9XrmCct8btFe86KNnhRLoiFQ4f2eSgKvY4BTEiFAB5FPTWMn8X3HqEcsPbgNirN",
  "key36": "5G8frYcRWjv8jY1Vtfz1ocd4fnqGDuz3kQ7MP3HngNgjKQXYMrqrSUnNrWXyPE1DFyV6sUFmwknXhJSrArk29L7L",
  "key37": "3kVuPoxiF4CUdNyhMrKhj9TAv7ZgyNxbNCtC3shYA46HrY3tzPsPudt3CnSyQNpr3DpcymgaQPaCbmB8ChYy1ic7",
  "key38": "YNBNBJ7Nh8Kh55EMuJmqjb3gdnfbzfKuPQXGDoGYiwsDstTgyX6TXTw4SEJBr8fi6ay2mT8APu1B4xR62FdgQ1D",
  "key39": "aaPLQRwVgsHLndcn4TPFL5szs6YqxX7DkakhZMzCWEXZydMFUGjMoNR57rYx82UDZRWFPVjvDAxiC1E66PUfESv",
  "key40": "3wiFwMEiDkSJKF66ewVcziUk4MeHzu3xYitwCehsrrEnAyqPVRErEksdJBwmDekP4AgJcHXipXgcota6sTkZKPxL",
  "key41": "3PpQLUDkCvQzMntTReV8sD8a4WDDi1x7UbKoFjVe7cpsEn3R664BhjGGGQzMvunRRjmCLsbN9SDwYFaD1PqT3UUc",
  "key42": "451rJrpxLLcd1743ntnre86RmKQ9pNxxFvAzbZ6YeNjuzQXNmU9tozBmseyLdRnJppgi2Epj2nt6y1FheT39e1gD",
  "key43": "5xeHR54zaAGm4kJSUvoVtDsRSepQfwxZgBtzSdrhDb67bWTLy88sH5psw1FpmJ4KrYQEfYEw2Jdr7GGgszmd4sg7",
  "key44": "3nUmStNREoFfWFQ4UjMVjfNz7h8rZJwWPnhhY6hdf1f7CYjPER4L4G5zcaKLVqgHtKP6nXocDiupWKrNbNRUa231",
  "key45": "4btKGsVS17fkS4qk3VymdkNoy4myLdAfZhS2qhEFfThgDPv5Cq8U1h7drreZ1vYD3XpzFDfuB9GzF3FRx8tHHRmr",
  "key46": "2f8SvehotmNUqZNVTu8Swq3CVTekLJrs74iegtMVHLTTD1f6C9vSqFCvDvQgPmuqj6A2S6Nc93ostTjVpsyMt7oe",
  "key47": "3hxiyReNQB7fwqZkMooZMsJFsnV2j1LYAeamDXPC6KxEQFKx7FJfLhZJ6K19WjaKWWSERs3fTXqSi2yyDe4aa8dL",
  "key48": "aA7imSx3XqwV6jPMiTQfrcbZdxX7UZGHKxy7QP3WsJyroUN1bJyc4AEXJ2939XE3UPBn6YmuBBod5pXh8oW6sDL",
  "key49": "5rWnJucTPCigiJ7AJhi8WjpzXuejTsg2ot3xcLq5qanyzQvwcmaUSBKDBkAJvaSUe5Fz14eyWnk9u2db7Yvgckuy"
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
