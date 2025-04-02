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
    "3bM7KfmLN1WULMBTf7tzwGfue43VEvXWccvHG83gLXTuUC37B3YiMFp3o98HHYouj7j6BjVPxDngSQK9aXNraLnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nXxmy23hTZZqSTjLHcuuCfKqzdzvoou7jqF39WKUeggVD4ZhFFqkJvGaH5xagw1q5sUaPVfcW7jWUBV8ATjHWyx",
  "key1": "4wpcT9iFwG5DMsUPRJJ1wb9LECecC6XshqyHxMN6HjugVZnUZYcsyzvRpvDXHVGUTKgAUyK1ZzQ4od7ZNcEZ7rgf",
  "key2": "4FrzsU3u6YhB7PhXX3vVxZPb112pAhw3gxrF7FQKJqjzm6p6veDmbjS4n5SxGtk3zgLTn8CagBzVAesghQVHuKod",
  "key3": "3NLDFegwQioMFLdKsuvmvrxjWZPN7mvc5FWYSrELtS1T2yB8Rbt5rbE7Z3TDuSXwrdZEyLrxnKWVN9cnqnZi89V6",
  "key4": "5nkzSxP1pkD6MRYUDXqCzcnxGkmhF2r94KoxNCmmajuTERZdKfsRFXYHe4DbV889akyQnKag6EwBD5axiz9j7oUF",
  "key5": "bvruunWXkGGaDthjoy3412oQAkao1QRRAtbxybvPisD2qBCFFwNxqG6cfmQdh91bd69Ts9NUyftycrpDxTNi8an",
  "key6": "5x8DrbWtx2MQtMjqqcsaaeQddn2MtyaWy28miwcPaFe7aPmoFe9yUWeGeVsS3wVeE2hiB5nbuvB2ZJp2cMTxsxF9",
  "key7": "5HfLBRuuhhU8jd8HDHGPC5HbCnFEzQzjmykwGRv1NcmcFc2brmHrC6KfWY2pp3K43SKNgmSFA7XqECENuoo85Lnm",
  "key8": "636NZcJGznvtyYKuwmz7ANDe7vKUmQFPuU1oUAg91EsBxMyzST4DJbBeQ3FPXiEEZbWQ4QnotRD9MifJkBfXNiRa",
  "key9": "N27SYzRn3RfML76PgbV4sN4gyyLX3XtvfmWeThBS8H9zG7nWdsNbWoXnaiNSQkcAHRpt9D7WvPGJZZYeh3QFZti",
  "key10": "5tcyNp5nzMVnbswscPdo3vrBTQDXLFdWxwUuM2UATxAnME2cWeG9geQYtoYtZ2NGm3eexj9pnJXauZTMngyTr9GL",
  "key11": "56FSRbFPScDz4g7VJ9fd5kqWXb5ZNZ1i6igSjEa6Gq9w5XWE4f3VuSADXa4yC39ch53xp6TqYjTdsSadrZUkTGG5",
  "key12": "4MsEYocCEUgff3HDfCSnNNnuCDGToteWHxSgC8cRFYHZy8t3fnGHpSE4ncbMU211pWdt8HfLb6SvrTZjfQ6SsB96",
  "key13": "5SSaA9ouxjfkGAM7Qz8Bbj1aQ5aFbmUkffQBy1Rgx4WYjsRLmwUWyGP2HSdi4y5K6DXffrJrLyraUJAKrm3TYaeM",
  "key14": "4iYVv92J4VbJTCT7eLWdzHzbL6e4UZibhkNWKS3QoRwLxg8W1GFGAZqbEe8Y4F6frFqVSUbjohkRgaAr6g5jaHrE",
  "key15": "3Na5uzUz5pqBT87E4GDoEPBcbzutXf8yLvCyTQBwJS9SvoKokjgxn8EdCHj82aNAesGPbvun1ZTjELbNQQwvLrwr",
  "key16": "664AypPJtT5bfRhSSNCaiZzEWRrvVP6bMw1uu9JUpkRjefMcLJHwCu3uEQEJ47jdXmfexnV89nGyVQaFj8cXLCff",
  "key17": "WqJ8tLg2kBAY5Tv8dfgSq8mUPM3uQLbtzcvP1S2d98LL4YSADb73AjP9vzCJ97sRPAqkMr1wmqQDeavYDqtpp3M",
  "key18": "2Q3N5wko2EeGZbrwk1yp7NgcTek7voawgWSWCbfjrvSHaAW3VxJqCgh99s8haYAn8REJ6KZP2tLKUFXnd8tT8Sct",
  "key19": "5jADddik4z8K32B3zaxEHD9LtQxww1isdcXw6gSVGFgU5xZx2DqA3E5r4HaErHes46neHTFoKEHtPPia9NnyG61F",
  "key20": "2JQsnBtTd5jzCkr3CA1oNWMC3iutJTLjbpCmytzyshYiKfuUujWjFw9cMs9qCieqxzqB4ip5AVHfRDsAdnGzd1VJ",
  "key21": "BNnmMVWiEMkXUfAByP2XkRVM69oyDLvfCw1EkXXGwYsExo6qMdPJwtRDgccdYzctVQwWwi9dKFDbCzvr3c6Pj4R",
  "key22": "3NskWAHAUZY3LTnrBDkfDtS5XAVEyot5wjfL1yRT3vaq5Mf9MByRNxLL9DoeCeHp7Kr619ipmVS5C86HYhcCvE2p",
  "key23": "5KLK6oaCtZj7StnJ4M5MGPngYDEXABwFpnudf4VAniFYCGdzQPR93HZNKyJhGoLW26sVSH2Wnf27amJb6wzrc6Xp",
  "key24": "4knHKX8zcG57H41gY9DsNWthWfG89UWQgTh4bK1vcft8mQHxTvEQLTPHYPBiy5bZpahJ5Ff7if46ZMuwN9AaYviY",
  "key25": "38kzvbfKmVMcfUAVTVVgbK43PyZ7in5sCg1ZFMoiVtNxFQvqebYkQ5qJPFnEXmCAZy3rGxvNzokeAzbXkmzRacMY",
  "key26": "4nNiK49qwuePEMtMFZkHDrXeyGbsuk8npECydWax5USQD6mF5Nsse7r3y87CCxN4zdBmBQvHRS36QL1H6ruYGcfT",
  "key27": "3P4w6fUg7sGEyTUSBbHvva1NRiToMhm8F2T1XfFgpqLXvddTq2NVAvvpnhzxRGLqTdZaozBTRsrckEHbqVFVWepL",
  "key28": "bHs6ho9DZaYJhbLDAgYgK9JqTZGZcUXMuPq96mygVEbVifsLwvEBHPjLeW6xUz331HTzuY6iGedppx3y9gB2PTU",
  "key29": "soJxCE2f7P6EAXy6s8JzSr8E16J7xeJZjMjhgxpokkKWuCjZnRovbWZB6tnQYY533LFPxXgW4H5XY4TLx9j8Yrt",
  "key30": "2QeQrNUVH1xrUaA9HinC218WVCp5U1jBRkj6UZqUpiTthQ2ZYU59JFv2T3diBc6sV29JxN4WFSnmFVvgYfYeSUxC",
  "key31": "5TyASjFyuwfDWXPfzYqe76dTWC4opMNZrdV1whXBveiY3NoaevbDsqgSR8YeT1F1X4r13Q5skgi9j3mxiQATLKo7",
  "key32": "2jTsJ3WanaBoktzcVRfwQ9vnSSgiX1XgwtwMnsdNMk7mekcY5sCZSi51SQAw9TLh1ok2dZxxRNEyDgahm3ZRC3hC",
  "key33": "2cks9QFpbxoRvpGCSf9m8f63Z1YJG2tps6srSWJmyqgzpH2s4AyX7YQUwXM7KAKip9Th1CtxSqbTjQBDfdChDJUc",
  "key34": "3n7DGoZkP8gUTCJtzjxxE4krMDCQqVERayKe1ntwDnHWV2JGHiSXRLoy1AiG1gapYg9G42Mrsti2viuZ98HUAuHq"
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
