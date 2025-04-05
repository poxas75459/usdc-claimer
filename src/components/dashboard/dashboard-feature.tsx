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
    "5vHgimv43zRqPn5ECVs7oVwN4wKJ8NQRNcmVyHXdScNm15gNoANWCaeBKRfvQd4m8YPNeKrMEs2U31s6piqG78Px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uh4uizow48kDiEY3GJPNjqjNhoTBgWRwC2rBWp5DX5ko4s98qF6PeA4LWXADJP5hTokxT3kqQVWx8GumHWaZ7QB",
  "key1": "ZkHJpzrHFZsMWwyV1d2AH3PeZb7NerVQvo9duQYpyFi8iCfgxB7UnJF1gAo3J8E6DgsRYQZyRtzTHFcbg9kyZnZ",
  "key2": "usxyoi6tYsrrLkDXyqGCQ1UriDYyg5kfMghefHtFw4mEWbnrfTYpV9Pq7tb7iBK1suGWvgGnmTsp195isKMPYKU",
  "key3": "ZYQ336MzmJ3WgsZfbDZrdDDgjazLdyNrtz8njHczBYrgZdWXAhEbm7wRpLjbhhosynQaUPDDJnUb4HXG7ssKFoT",
  "key4": "3LCDh6vhx7gYUrDfNzsHyU6LcWxjwHuB3KyfQ8nBwRJDK2uABkWDtL4FGwEgsuP9wihb7Y4tVdyNyJGsq1QQYb57",
  "key5": "5HmGoBa4q3HGcvyRpFRNDroCb9V55Du8adAU1u91sDSaFL8WrApnsWKo2upoCpmAwfYck1yDJheSezAskGtxk4UZ",
  "key6": "3A7uvFwzT9g2ZuJDmcPXBPUwQ2pAM571iY3EFGFSJzceBQePxosaEMTZTBqr2eE7PebtXMbc4oP1vWyULfGRbECT",
  "key7": "5ykRpyH82zPLdoNLxzm1ttFHxSWy8yrz6yJBZCCKUJYHbNUCjyauvLiFm9i85tZHAjDkHvaPoYXW3WhjGqexijBP",
  "key8": "4ZZ4TsdkKzUesfNsdw7pkWuRRqc3VECCxp3J4vf6jzGAGpNKXGth3Q3UQhqsRfLUE8ssjXJvzvtxLau5mFQXT9HL",
  "key9": "5PZe3G2mRfwE6GJ66KaUNSmLtKw9gZka8WYyHxsxrc9ePd11Cx4H4j9aCLgPZ8CR7Tiu1VFuA4UpyxNE2R4bFDSN",
  "key10": "3ng7NVH2UcfGheKbLtQpw476eQ52edZpKCY2zSdbvRwJwEnjg1oe489gNp8VRuUhPj3KTcfwDRckRvLxKvc82xDa",
  "key11": "kzo9MLAHJktTUfWtd7L2YeQCn65mi5ito3eK3WbkhEpr15kwnivQSw1vwx72VuvGHVyoiH1ew7nkarHU2hTLx2V",
  "key12": "3cvjijU2q9Pef5QZ69bRCTPwkjZMA3Lzqpkx3HFfKG5Cm3FV2k8XAtXxSjvUcYgNH5yjFdhqHpDSBhTumD4RRwSE",
  "key13": "vsZ59gLWNseMsXPXvGmdJnfsp9y1dhrXsupj1inbufB21t35hksVz9JMeujYY8ivN5US2W4AWZQGAKPgXeELDZy",
  "key14": "MZZKX3m7emDA1V1w9fxtMQX1ZTN95L6MZnBGXCaP895qiJu3jaw9wShCsquN2yBkgkjhNZAKbxeHfH2XdQmUA1U",
  "key15": "5PzBaikZLoWn1o4rGM3QiFXwwjx4QrN97TGymKa6ngzwAzEvLWYCgUDe2LDPv6o7jVsT7k1JkFcznkTqsjT9CTkq",
  "key16": "4FMAi98F51zmcxDufhkrqSm4vXwtTYvxCDD9UbdAutRsfXSHQRCnmRbh3Zrogo2T8G22La2AGo33foxRL3CTwDf9",
  "key17": "5xYswNkEHGFJHC4YcaGRTa324NJaVNsPJjgPUYyQgFh2ZLqNejsnMWVShwYfEag3QrjKfnWbMu48mx8hhgALxFpu",
  "key18": "3kJ8t3irgKF7FqYe4TTmD73be54bbWbjq5M6xMbofXy63qm6vz85eJ9eBvpjXUjdquGZJBNgmHtcsAtVvzi7BSh5",
  "key19": "3x9Cc6LURavyYqKahycEBbkM8dX52zjjJBPH3JBWrFcfm9wjKpYaM4YC7RuUf6x4mM63teB1TpDy498vu8q9VapG",
  "key20": "p4maTJMfzBLwiWmuAimsaYA3XBiykE8pv7XSPSG6zXcoBqhEGVVQDgWsbk5p4yNH4if6VQWUj7FPaEW7mYa4C1m",
  "key21": "5KGDRfhgVQq98JXxvwJ94STqi2P3n1GgnmtsmvFU93dNEwPnkg9xc1UqvZiunkCjAAawB3iXm6Eows2Uef2iuJdG",
  "key22": "JxLsSt4Zft9V8kk794BzDvQNUqDJiEA9jyVv6rcVRdV6L5n5VAUDRs7y2dnFkeyWC5mBwb2MzsoqkXs2jby857a",
  "key23": "Mqax3qBeAtpEiqesMZWYWg2J1MVZvozJkEFMbxGrM2EkmUHLYTGnpBtEr1L482oXN91pEWu7GgmL4Neq24SqFPo",
  "key24": "5FXc8WVdjRSHhvYs5VakB5RjspMWECFSXryMGpLDNfkCbRkPXsXdCAv3UPzEKxtoA9KMC8aSLpH3V4YW2RTP6XLa",
  "key25": "5R2d35Yb7KNxU7sWCGm4Np3ei5TbWBJUoH2qejbqUmbZW9Hvov6M28kRXRyeyz2unJLbMrecTadkQR4eHcGYWbtD",
  "key26": "2ccXAQvzP6SQSVkokzV2tabge4z94pb8KL1Bs3uijeujsenV51UCArHSVa9JghZBJgmDhVjQpCHYkfi1rbuaRxH",
  "key27": "5k54cwEceHea3HQCUhVXVrzB3dHSxayHhJY7yf7D2GDNLDubr5NnCvKiCSAz8ivMh5X1G2WGkMBTdZKJFR5JWSMx",
  "key28": "2axS418FGNctyUVGCoei5Qh4BJMKqbkrsR4sPDpRVKp5WFnSfrxbQ8YaqBT2Q3ZGd2UzUhghihtdMKQC3fis85Ca",
  "key29": "DXbGGfGJBmWdqHubrhKpGJqUPEtcXeeD316iYyrfTT466JgT4A8g4FQ3vNx3j7wZZK83D683xXAq4c88aVkGZGR",
  "key30": "52BYB5BzuZtqvu5UQbgkCnfK9fVxJqYxxBWBfVWuaNFvGBHMGaWaUzSYXGSqW2PqodZi7QSv6qyx1X9WBN94Z9E7",
  "key31": "2jVxMufVU1MWyMAdjT2zRftVkcoESc51m8q3Dd7d9kqhMWzE6kzQU4neBYDeWLBWvz2DFyEr2dgdwdqBA1X6YaEN",
  "key32": "4hGoFaR5h3izwSNj65e6eUtBZygvzxaamTVcHccLUZuvNCM9A4G42XSxeMzpCskiPdF5gmq5jh2Nkk7ApVDTH7NY"
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
