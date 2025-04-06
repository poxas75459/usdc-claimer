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
    "2bE6e4fochy6fSyC17ChkPF1oZeFtaFZ5FnhAipCSWoA7t9BJ4sL6VbjJrY7ZGyqu7v8cjWd4HQy8LnnU5ikSRRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fmirev6k52HBRwFWfP8JFVxm5RDQ1EajAfRgUvKBdpHnCU1wXz6KTb7a7uKKhF1aLd4Yr7P9W55HXxVNmuHJUom",
  "key1": "ZXtzA4zAE4vb8oog18D9vZ751yDxhmDwpz9v58W2eEXXT6C5bBM7xcw799mS8MAg4qSt3A5NrsXZkUpcDZGuH1k",
  "key2": "sjkMZmRpL478EkwJX39RWY665yUrBjQDQpXmbQcxfdN2VuNTQF9CvPVcnkhhqXoXqMVRabWja8UbqtEuuqEyPCj",
  "key3": "3uhFBZAbFWyxxo7Tb9wytNKUvjKrix4L3iQSxg8LMK46R8fvuWLHTvGZyque3Bo6A42rz9mGNx1noetzAJj4U3ss",
  "key4": "2Vsf6RarSRnA1Lsfd6g6pkX42uZYcfhTXL7THopBH8UJbr9rxd8TVcPWs5Y7w9tbra9DawYt6EpWEZczfL3sAJFP",
  "key5": "4npf43T7wt92C3bSr4cCy4JApWTbPWtwkCtFn7fk5oCnd1AgX1jVaAVqnoEqCs1znjbFZgBMT6RS7QqZZsbPcAm9",
  "key6": "ZZ9h9vYm4cXtWntkfLcFj2cbMmdk8rJstnpqXqxFFb3553oC5iy81z7G4gr473D56pzJSA5vf43Pooof7hcNnXa",
  "key7": "4s813WPDbCo2BwhGGANmnsNameQp6tPGF2Uobwtr1KNnRzybPv5SdGn5EHiFL72aA4mNC6xiYqsJNspJ1sXczn3e",
  "key8": "5as1Avw8G6mFwWm4D85ThCPCvc44mT1zNdG17P6hoqBrLS2HnoPxHHU2e8NptEme9uSMr3GzVbBxaGVuoMgdfMMB",
  "key9": "2VA3E97KZzegjEs2B5hZLdUAD6fn9mHZB8JGfvrB7RML2eoR4rrMrgPAU7suFu4ZJBjcoqXv9HRTRe2R8ASsZHyd",
  "key10": "ZByRe1VVcMWnTKaZJVFzkDs4uro15M5Yj2cyg9PWcvypGgQwsH5bri732WNtwKrSy9rMA3tsB9aPbA6ceGgA2NE",
  "key11": "5c1ohHbhfCjnFzSnXe7gvCDPazKebqUR4xytQXSSVidUzC5wmc35HumaVhdk9HKntD5ca1cZh2e52wMYgHs2LmjR",
  "key12": "4Gfg1P7GUtvQtxgEkSre6hVmXiNpzZVctqUZh5d9jAdc5FerDtXXjvkrQ3z7MLVBRoJnMSpXqDezKGys3AAHk1Rb",
  "key13": "4duCTQghainZMpTVX8T8DSmrR5MhhHpavB6ub2iGWFpbvzCcP9TbE2iStSaJxL2oEjmNZi4p7BLf8STCZPCg1zdP",
  "key14": "5atg1XdBZBjuNSmRSpfM2dTLNbHayvqdChaLypafMZDKsQAzsSxMQsr7MamLhDZB3C67wdRGrj4oZdwnEdQkckXz",
  "key15": "5VRYcVTM7xYG1HMNbsT3EagAP1Za3zvwqvx5LRdAJyPUJtwDTGAajgpz22eRM1m5tnMxaDXEh4SPrzVnr29C4Rzz",
  "key16": "61J88r2y9XCyKtvGkpFQZTmv4XWKh1YLN24Yy74txhc8yQFkA1rRwxSx1pybasuuxVqFWu9DxJqRmRJAWEmD4GwT",
  "key17": "smxp7wbMzJEJtgyWVxsk2h3tWAJW1TWqNxPSZsZUPgeQiKuP9eF7e6hP4iSEpx76m4MmMsyBMgLa6Z4HT5h1TDx",
  "key18": "2vrkefjuf3HH2jsjm2wjjRNa9i8Mtu6EEYVZTEiLeHpwdckqdm6QEq9zBUzDuB6cuZpr2mLHDpQVVQnRnpKwgLta",
  "key19": "4agpQJ3uF7yyRZyUcYk4AjtakghvVcXadG9gJGk4HfejM1Z4w4oeGPiZp82SuWLi3Z1EJn4hR69qTHf7hPojgzeW",
  "key20": "8wMtyd43U4H3yWNBoiXpANXEPdaTHc2HQtG9y2djVmvCrkLc1w6EN7YC2cT8kLF7fSFe5Q4TXecs1wf8YnbTSpw",
  "key21": "2CLqKi7bh42pMqMr98khw18KGgABLQ1wuvccYvXy3zEmY4Y1bqi6svXmcNFJwLcqpGDXCLXLtnrTwyWz3PdgFgmh",
  "key22": "45n9AehykGmwPHd4Wy6F59aT9zbaGBDqyfLAoCaU9ND93qCjJ2n7BsCQbzdRVWYEGoj4Uey2zfxy72R3TTnMf7Sp",
  "key23": "5sZDVxTRDoeEnSvGzwijQCjqZTEaHAvH18vJMtBEEaYivpgHrBeAXtELMhtVNCxqSfZMNaFk9Qhg4VY6suJ1eJ8j",
  "key24": "626nottsPFWeURbW7fn3Fw6S2cRuf1CckxpWgF2Q3TMBLd98fVksgBgsyBzCaNMrNbhoaySkSop1JJ7C3cSn6AAD",
  "key25": "2ek63fsU3XftnDUxFDGNJMwn71EpT4BH4cmckHaw81oe1Njq5yJcYPDDDnPRKNUQge13BZyzLDAJgyQi2kVkbg51",
  "key26": "fjGeUoRvJRUBdFeCYNiCxHSRK5doVokP3Th8FKFX3dwyqyJxHDujniZFmUm2Tis2x6pTz4NZvLHSxtNJANnGGJn",
  "key27": "213rb8XzVyAeEXJ72187RKmP3Xi9MaTrRW1vpwzfwxZ5KEUJEyQ7fdqavnwNXAp97w2PhTzGBVuiqdKXzeongon5",
  "key28": "bEXaNSK5BmCmv1xadUHBwttjjX4nLWkGRgLp3gpcqXTbZsMb5V8mtYMd3uKDcYm6ZmGH2H6VRPYWY4dwMPh6apL",
  "key29": "55ngS4Qc47QH7aR4Xh6ieue3tYpjTcRJm3AHWXvK3zdPdob7LwB3r62wN4sBRsYhZ9eDLHEa1PWUCjX8z1BDFpjJ",
  "key30": "4VeXYswp2tsa1DjnadisocD7riRZ5ogGuwAWGNkKDz13NftZa6EL3fLDbbZnUXy96us3DjFmTMcj2WFsVTyss8qs",
  "key31": "AqSs1YUMSZgjoXEjcZeGgFw344aacQyzc5CVSTewZDRPu9MbikmHKrH4N8JPhFpu6BTAQP36anwtVdTdsDMtHsn",
  "key32": "5WNvNnHvkTbuNFL8GNGEELQjrJvRHCACmDUV2c1tBkGhjAnwyaPCTwHMSLa7PHXjAfH5xAMe7fKBAhujrHyDcJRV",
  "key33": "3t5JoRazNxq728nVeYzJ6LG9i8mZug4UJaFfFk9sVsnzMWGKYRe8zsXAXFnNHa4Emp3reWUuxXSnhKyB9S2fuvv1",
  "key34": "5bRVir56wGTkHXQcqTgMMQPo1GPu4zy9V636xqBr2agLjXmwAHtTzb5ZaSr6EsjRxrrFvi1Q1LPFaQPSLLeLE5qk",
  "key35": "3KxRmKenxuGn46EFRs9VRh8UUEDzP423mptHodTkTR6T69yhz9hH67pZV5irMwm5PLyzi6ot4NaH8ASoY81pEbL3",
  "key36": "56MrxbsFJjj2tRKyxwGVa4Kz65frWMiSKSJ28JXsfHtQQfVEEEyjeyofnjhvmTYsKJjDYDZ8PFVYMPSY7GWU4iRM",
  "key37": "5Kosk2bmnoCmmWEq6UFWJJ6HR2SeLzFK7SYLE69AfUqfbTVyLxttodVAsgY1WSXKWqo4Bt7i4irk8Z7s6xjzTCjs",
  "key38": "3BiCt6T3npgcVmQRktTQmGSa3WtUe7bTpU4af3QjZyWJnZfipPVNDcz2box9E6tHpS1rqhEnHcUdaeZYrUmfiqQZ",
  "key39": "4bTRgbjrWfVZ2s3SNSpeUbGwD8xAUfKwjKQuK3PWmQN4SG7q6QDCWxvAAYsRKq2PEW6Tk4t98dfr4sXc5iKpAjLL",
  "key40": "3nEGYNZN9pP34Xpt9XHesFQXsFzT4Sed25WfPiXu85WCGHDBG8YrrbDKCpFDR1YM6AVGxaFB5qndjFERVE35pjN3",
  "key41": "5e6B5RP281V9pN1RRkEfkk8gMKyDLU3rp53PBLechEvJQryrBQ4oqsLAqspMvZkkaaFDK3NJBDNQgiUXVxjjPtnC",
  "key42": "5g6u8STJiQPBtPPz2wTG3YPTkx3g6Yb6QLiSruU4UQtHRKX5j7LyK7U4p23JpFn7hmg2my7RM5j7DLpYmcoM7ZPe",
  "key43": "65FFAtQuxi3dtr5GGGknfgUGyEF8D4bCjtdGtaqqpuCs4iPVbZycqKyDUz2Bpo6R9EXkoSRco7mc23jFgz2YaVv2",
  "key44": "2zNZ2dJCj4mebazMZMCbniGXEZ87UaVtR9jFmrzgWikwJRKmFgkLnfuzKxY2mHnC1VsmGX9DoZH4BBxfhdsTTEpC",
  "key45": "5znq92jKoYLzCVngDyjafGYWRiMf77h7ufAadDx57JWkAZ6ZQX1T9CGx2Qr67zFDYWAJQDNa3iu7hktUbDBegJmW",
  "key46": "66RAjdkZyWLv8x98US9BWqM16D8gnyyqCdTuQMDsHakgfUgzmUXJRLJ7Q2rZ8ZhfeFRsVP69BPMXEWmXASUHuMLX"
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
