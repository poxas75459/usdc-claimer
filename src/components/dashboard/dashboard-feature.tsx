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
    "5bbXXLNXUN9GeTjmE5E2kYcq3RSXAAwj4gazbPSgcpHaGoc1VnHcysL19yttdgwNejGS5JRH67b6T1PrdMCooWs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UbU24qJxiEkDdeApyi79yCfeWeVLYfoRQUjBU2T6T317Wm2vXqtRgK5awxs6kp8r4zfDMkR9r39rAJwNyzV7NNc",
  "key1": "2Z4BgoB6kUzGzhzQDNJgokqWrRp1v9f6FHmpExQUPsXH8UPjzzCY54kaEaRdK5Lh5FU834xxsEk7Ur4cpUmNSRZF",
  "key2": "4jE71MeawTecDTBMdYn2ShY3cfu2aJBVbw9B5F1ttmiKoPd7AgKadrz9EUDD7BnrDvcWm9UTYWjj5kG8MrtBRKmC",
  "key3": "3QB9x7YGynTdTBhhBYhSvyRDWsWBhArsUk7X6iyw5RaEMH1EGw7KBv1hzZ5cWxi4Mo6VprEA3WsaXEKvV2xg2Tj5",
  "key4": "2vgnPmzaMJq5Wf3eisGtDfNMCPxQTf8bNSadp9qViuwkaZo7eYZnP7wDjuHJSC6nCLx8Sca1vLYcBJpmC5JE8Veb",
  "key5": "4quaX9sNDrtKAMEs7YabX5Ks9mtyg6LVDSYpXqaBJx8jyTjFjHueegEbZ78JSjJuAd9rwofrqbBjbceELSXN9DDM",
  "key6": "2jtveKwTpVf2z8AhXrxxReZB4FCmy6x36aFWS4o6cvTcC8BM9mvujCPMn6U4GJxcMnV9G8j13GQasyJuDbKnrW76",
  "key7": "2Jk3bR8wgARLrk5W3VhJ4vKDhyoYyWRuUECNN9DCuR7tk6Ft3KY8GUu4USYy81LGepNifw1BF9A8tWdMuyXKuvZR",
  "key8": "3vHkSX8pJh6FDStS2FJYUVkHeRuZF3e2TcUjs8sfnUQQHvpPBmXHnUurL8TpaszSxvP3oe53CTVPZGog2SNcTf3b",
  "key9": "4DeUoXznPuyURe6YvCmgL7aPddyEsaeueCAqW578LcmrbSqNizD52JLdSqZf7zhcsCScs7ovUQYeg5wrYFWQ2jQt",
  "key10": "5ETdmhFyyFeL2G8CxLhUDN7W5x7jFVNjWYYuhZ4CoNafknKL85ykboo8Dcg24VCCETdt97NsoS9MqKXJhgTGM8N1",
  "key11": "66EvAwrWByhfbvKsGdC6Gbz56wsEfd1jDJf6HjUEr5fmnijkyiULoXCx1w3fiBJBVg2VGM7HpzuLN7MCKX2pU2t9",
  "key12": "4wFMNuQYMMDL91odDhGPdKaUCasDiexwWNCULDhDdW4Wxx7xA5eAgDTkSYK6tiRDridSDYBNSU1DQSxEErz7z41v",
  "key13": "4RJvBuiJ8t8vSfJNmsVCXEMLA7eTdDjQ5prqPYSQTxjqiLt1YG4ZtZEuPzUq87NxTEgfEq8WiPwAa8NxxB437nFC",
  "key14": "5ywr3ZsBxg1CkZsbnPifyEzAhFNzogVyABYhzes9WKW14yjU4BX6VbYt6Xzyvr79VHiMW63vkhbbXwp5jZiFtAn3",
  "key15": "4b842E9tMesteg2zVkr1aR16WaB1RhP26NiwfL3amwxY3ehyu6rUkqBTqwSqnvJ2RzdibAFAxd36LSP1fCvr6tAZ",
  "key16": "2bixVhJdtf4NuWdoQAtxoaLBPFsGBxBfKBKY4JPxndiNb9bDdmE2AZf68rz9EtUHHRULcRaUni36uWHeSJEsNpWW",
  "key17": "324zYGgRXfRrhuJnpL6WE3RhsT9j46BwGe5Kp5SRpsYie1H862xLmjiT9vdXo9uadjVWpvcLCnigPStyzNCqXuSy",
  "key18": "FV3EkKcfnHGAfYBHiWUfi1gTuXMWvhG13NSYdgfP5J7KeNjjzQjgF7qoJyHyaagEZqzSv9Pr3WB7qhubi29SCPu",
  "key19": "4CTLAMFV1F3YNyMd7tcmrhpFg6vrgfLNP9G53aQPsqw3cK9k8mjNFSnePA9M6r9S2rcQRtnXC9NVttakrs6ztspW",
  "key20": "edy4ho7WJJzaJRHvnKC8ZmQR5UBrFDFWfSXY1KDAxrxHVhn1uk5Ths2eLCT5H3bDKoNJ1P4UggdETjYhGz3wBjQ",
  "key21": "3efdMqsMMv8KUMfHvNggMGAcbp63HLxdkdW6XHhnVq3ExNHQTRkHG99ca9UaLiqMAj1uovBsuBNVoKh8J5ygSeUC",
  "key22": "2SBaxxWotPKoAk4FAJ21taPbGko74VnUPp4T1Wg9CMEbApXbCJibEZwyhHTqUrXR4nUzKzACGnPdvRjRBzt9MEev",
  "key23": "3uHZHkB1F6R9VgEKqeNz6hkuYWZaW2A853g6yjbMmL7adR5shgGejAhBge6UpyHq3RZLBso4uijszfAjBg9fLfYb",
  "key24": "3sR1AV6uWbUY9cf7sYatchZu6PdMariegSfGYY9EGGwRLAiUKHSk2YGtg6VXqY5JJwfNjwNfep5rXEnGNtYm6aVx",
  "key25": "2MMyDX6SRQngW8psrrfJsovM1EQR21QTURW9GBjvtanddSEcHv6xKe3WFk5n1NNz3EMtUpjLL1sZ9xoKZq9etkmH",
  "key26": "39FgXGnb5PzG5EZJ62ef5DfPwFKrghpehWGMt5NfurM95u7XNsftXPG5xw6ZRX8jDUFYoytx3j9JJMHFCK5GFB2C",
  "key27": "vzCW4cTY5RahbxoT8DAvfcHyyUL1etFeypMhva1Go6myCkxB8mRfSfp1nnxtgAjep31Yabr6dBWd6B47Rm9ZNg2",
  "key28": "82USvGX17EpVBPjqfFLumPsgYT1B5UQN33A8BcvTPqkyMXUqnav5VLv2iar6SPrgognLgAH1Sng7BaGMSZdDoK4",
  "key29": "3UnbWkqtzuzcKQqMSrsv2HPebC7rv9hSL1dPPtqhHnqUBdsjrTo4y3BsMtfgkN2iH9RMZeGsG9EsscNXHVyvVdnk",
  "key30": "5Uj2rdYsgpZwkyDavYSkezzNZ6zxBo4F5q7L83RHweFvbkAXJY2Tth7hp32nfb7WLsH4kjmC3UVNdJ94qj45jYe9",
  "key31": "5sX8M9ARgZ9TwyHXgNE1bhWnuc6xTqNtKCEi1ZEZNreKVtrgp7eSgvLi75edy5XU6dKXBPJGWnGp6zzJ7xAUZuZY",
  "key32": "4DUp7xh4uUpYBaiSv24p3sRP53TBt4hxD2v6yoAqWH8S9vfmB7TVSkAZW31vtSK75Ky5fRgqyvMiqCh9eRUQTnq9",
  "key33": "nx17VXZDnUUoNVzt26k6C6XT2tAfGfwp6LM9HX89qAr5CDgLafCspeotBeJxEhbyRtf5zCr5GHV6Gr7gvAULis4",
  "key34": "5BeHoAyX2ieajAbVtRaFrJBXUam2hMri4U91i3rhpaYw9PEuE4tFquiizfU8e2n6RKXHmjkQq24HucL4RhG7Q2Ge",
  "key35": "4mxrihfb5L7w6VktCBx8inqBJopqzXpJtUpVjGLgSYvq8wbWepywix8s1SsEZBzHxj6i5AnYBpvrYWSLkyva3ckz",
  "key36": "5rwQduX28akTmzgmx4LyQ3jcrL5ugLA3oL7cw7nmAL4CbVEmpjsedfrcTWfYJi19GnjV8Zxym79KrDswVzV2Xotg",
  "key37": "2ZjfDw54M6VUkAPvbYLVUzWDaCveWu6qw8Y3ojDoYF2kaGJFjkTVMQs9Qfgrb53GAQraV37dBUgDw9YUj1BVBZRc",
  "key38": "3RYDg1vZMAGMnDTK2sn2kqbubg3AVFgk8ijyjDboStxxpYBYJNpif88JnCAEG3cbwPueUXwYhJQmp2odAAq9e5Xf",
  "key39": "5HkJ7prVVuwaFu76kfhk1v2CrMs33GcQ7CDU2kZEptT92zRuAZD2HHVnM6xZFpsBrYj5qF7r6kAnBkwXH8YfX1tf",
  "key40": "4byimg7TJUUtDygvwTyYRxGzuayXoDzPqFsLiZBmLdFaqpTm4xj7QhwQCX3s9LEZPSZbJmxBLdiBzMwbeABYdgL6",
  "key41": "5rdaom6uJQY8zjduTmMGsgJFdweenTYFcicrNJXL7snoRNrKrnptsEc74V7NxB9HV61wC3ihDUsFre6evThksW81",
  "key42": "44d9CHUXGDCHVS65M8awkpKSyw1rVibGH6QQvyAD6TWM2PMckVLUK7JarJDtBbW9fn5CrCVm8HL67HCDgzyF1rfm",
  "key43": "4k4jTh3YXKt8w7RovKcAEu4F1mtForFtd4g1P4cKzCoUuhPmQynw7uedYD1kaD9jRq1VzzxkvPVnzeRwyyGajqi",
  "key44": "4BDK8SdKKUxqvK1d68Z4jCrBi5eS7LNhrbJ33FJDNHvPn5di6TRbNG4vjLHsEVsJafMP6dAA8k23XLW9xeWtikh",
  "key45": "K59LBwJCDz3LVZP5jxruQ17e8GiD1N19Liw9hYSBU45NHW8gfjUYJCM3YwCpy61mJ1s67a4R2eBDCJRzxKRaxdp",
  "key46": "5huPwdNmsMc8h6CoHy2j1h2mYXY94hiYgBCrbJFCRvpEbjvnUYhUhepZ1WwzRCvvNe7CM1gQwFg4YVoDozSroHPy",
  "key47": "H4q8Qo47C3jmUjxgE5pdwUJzcdgj5oka3oSHZopSuH76hhNbeALyg1H8sBmPK9Coqv8v12h29NcKFLFbN8njAQk",
  "key48": "5FmJB9dgCQ5nxKxVnFbqRbu5BTy2cD8aDXaNJ7HUnVEbyyCFgXxEddLeqmkQUpVkszmZFFdTavHyVKtzcUCAMqDi"
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
