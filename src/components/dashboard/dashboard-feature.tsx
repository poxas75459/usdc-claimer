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
    "3bkos8spsors6qSWjTpfYqChTHUVmkAqFXrcQ9Po6tTUowu9f6VKgz3Z1DgsxpUhffboTshmtbLaGmRfdriyV1UC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y95FhVG2fNz4xYXjAE39pMPR7JsDq6ubDMXFibZL6MWqpsAs3W9oXj5V9A6Hi3EoerwN7Fwv3kSaQCw4C1STYzn",
  "key1": "YygwsvJsbejLFKRYK44kCnZkPRAwM3qCWMGXmjMiXqq7KU7matXQutrpRXAjMGmJjCcXAwLCsSW7MH3WKL2ig4b",
  "key2": "322Xc8darSX9uzBgv7uEF6wg9KAKkEYLmNGQM4rAmZW9uqTKbodfBiTC9w1k2i12vfT2xutR9AwYRjEZWQVhhKSU",
  "key3": "4wb81kKRXZCUgQpHn4uhetx3BcC8FWhmfTHSJAEFqB2dmGDoJF4gEMqFZAsFKvRP9zCzQpJBC1wRev2ysG4aovMM",
  "key4": "2fr3FVUKexk8j7cYF4DC4DDfkUbJYxZwnvKKMYtKgJsAcyEr2VZpynCwhcFwJCmSPqxv9TxwvuewT24rTSTmckPp",
  "key5": "4eRSYSDjBrgTagCFowy5P7V4nmoEDCQtyBP1dWQP5EMyaD5SV1TaL2W4FgmvbrJyKmECGAR7WmQpMp5edW8XZF7k",
  "key6": "5xKyzM8HMoHkRgDaCksrrcwPRStVY5qwv8WfzwGC5mcqR9Rg7YajF6mQf6Kjptqiu1iCHP1rUs4DHxAd2xxENLDv",
  "key7": "3vnQ9wPxnWuTZirwyzD8Pu6BbsiPuUqXehGdw22Sa9Sb2Wo6f68FRMrVyrUq71wueyDsEe3KbTpJ1PhqEQxQrEZb",
  "key8": "hkzv7JRqHiqcLBL7Fv8NEozoP4dEMtkJKcpj9ae5Re7VZLaaohmfpRKFdkpgXVEBiutrxPGTZ5AN4SeuohdnQhn",
  "key9": "vjghvPV8utqsUEMHt3EGykVSvqMNcnJdMN1jydwTmMzvQMRMWNSJa6WjEB2cFGapAyt9Xvz6LFM9tSprCeBA55p",
  "key10": "5t3yKjvUitXzxfs7p8tbSTNDYLqEeCHQYGonaXz8xbq8ZZgYV9XsM9JRYrgnJGaKbuMK2Y38F1de43RaxAwT23zs",
  "key11": "5jPmprLAMHMhUB4EkEwgRcduVsKbxM73TVEJ7QUnrr2F4kxS6Ckh9DXxanaVrLSzGmwhzye4xykFUeV2skrFoM4Q",
  "key12": "5rKPbt4SCTBfrDEzak44UcEaoXtyuYq44hBPZT2PzpTyxaAZeqUgEmHRDKU8uAdwByF7hEQRpnxF4XDUyVnfSbAc",
  "key13": "53wYmT2j9QshuxYhfp7TBxEEXUk8dqzusnbzHPYJcHoxMd9C8pTS7t7DE6F3SKjiBCwEpeaNaYbyhdQz9Y8NdLDy",
  "key14": "5myVSdWPp8jLxxdpgcVhKmmCvTA7akSntT3tUJnGXsmq4wfvQZsAonPUSdpAuqr4Ve2KtwXzUYZCUBZDqKAb5DC6",
  "key15": "3Pqx9guW3PLtw2zz3yJmP2c5ASyeJteAG5YSyaWFYzFDKU4KjZzTfeCoYxhR9V14r8eapBSeTTcnTi5Kp3ashadT",
  "key16": "29Lo3z7LrD4w1sXvzcaciyS7sQinLtWMy32eKsKSCGn4C5sR6eHeYHALqRGASJ8n8QwGTjn2DQfCPH6UVBfvkvdf",
  "key17": "3U2r6Vv8UGL2cPDukqtEgdqsPk67g4W8wwCEnAfMRCPGNBMRaoZJvALuw6ui2D6CoNu2UvLBe6S3MbcRK7qNNp5Z",
  "key18": "3SAHQ1YBv3LcF5s3R2mPQ2Sxdm7HDrKCWstJuFm9346LJNWCcUZ4n4fHeurrbKWGjNvJ1khoyMcGzr6cryYaBZt6",
  "key19": "5q2g8BRmbwmZjsUfDiVGzCWwMEpDkaRqSprxcvf7yYpi3AoZNq191bPShCaPMW3kmZaEwmLBqH7PD5fPcmbXusW1",
  "key20": "63Pf65cjDeniQtL8etcV8AeZef72VtbLDBj1UJCiPxfATJQFxw16TDG6JyxSEjoN1Xo1W12QcXHuBap8Hpe7dt7V",
  "key21": "WEN3zwNZBzTevJ27wDP8kMDdVZLTQHi9XZjmwC6wBmQJyzzBah6WxnD9wEZSkvKuQH1JkaZbwwrzuoQxHV1KdhZ",
  "key22": "mmZRxjNLUKu9C5WX1yRewzN9LbZQsBVgeCLcPjKFncipfVGb4mcJ3RzigbXkZKd4F1yjjnRSKJitDK4WwMoQdEk",
  "key23": "4vXGpx71JBJ2KpJ7e21CfiHxXfg9x5tYzDS5kjrT5dNN7jCss3NLDxhSxi3RppKN1jRDTdgPTGuutEoBz1FwvqSv",
  "key24": "5ZnVxed4z9EuiMUQMtN5gxsqFnxBWL9x8R9dGaaN2tnYaExvhq7vAaEHxbsxo8zTz4ca9tHkvw3zPB84f2LgTHKP",
  "key25": "48tLAVPghDzbdz8DBPKWzX5vsAutjwuHcgv7DntFaVUmAsuHJHo2BYNxvR7sbTb7v8RycZXokK1xihDUiCjV5MoU",
  "key26": "21tEd2t355ZJyZdnkDJXe74qmreEmYTUk5qTdHvD7WPEFSxARLP1jDHHBXay5xb6hSdT8RX8MhbxGUzapgpdYioa",
  "key27": "31g2kES3r2efNN5mejTP2D7y3vK8y6Y1jC4EvENCzH1A8qW1D5qRUWeS3WmW77S5d7XgSq5SfDpGabRtqAeF638z",
  "key28": "2Yc4PQ46ou875Qos54DhbZtFJcGi68kb6d3FdJxerCHtEh4fwiG11T68GsD6kPF8X1uzen2XUgEumC1hwbLki8ek",
  "key29": "2dK364uVucYqLxm2JTvrirr1TNbBzVQQKgyps5epSNjxJbyoedbCkDsx3SaeDz2aUmCfLmn52PKgpGn1VpshvEmW",
  "key30": "4QrkxkaRwVNFmYYE7tH5HeP7tRmoNrb1c1CqdyawMGECiYmEWv5GePhnERfTDUweBVhswKGqvWJwMDJotv7NCihV",
  "key31": "3LzTUPtajAKHjpbMZoa7nehCXAvrc2bMXVW5q44Ab47Pj92YcaERrcBDpWBAemqNjTesEndYEY39ioNftqnPN8sr",
  "key32": "4LkhQSGQGD7QkLnvPsvNqjssQqP1wdXJ1bkWtqubptdSpDNT3yvAjVP42W1BHWcbnD1xXTSgH1tZKA2uKp6CaxKf",
  "key33": "Nw85gXchbohwuGwT4Z8aAo3sv2ZzTD9TaPRnixVEAq9Gb34M6XKoTCcUqbQ9aPVdPeqGTG1gpATid4Fa7pQcTXD",
  "key34": "KyDF67bFHmL1VWnF7V6x1aLHtZnvFA6sWDifKw8oGaq9czktxh5ALGAkkQqeNuHKWwbgTc51VpEYbiYp6fjjejZ",
  "key35": "5Z7V5uPNAwmCh4f7sn5HtahVu47WZXifQEF1UxRWkCgdWG893YJAwoREwczM6WVH3pyQstFPbih927FmYWiBsqk5",
  "key36": "4bZAzUDqP1JGcvQgxoWGSPEYe2DbgHEow5ibX5znr3FWRadghXT1oYJ2ExaJWfMok8QkaDmCqufRu6NhAVTYQb2g",
  "key37": "29m8Gf53xCe2qpdBc1qpo4QQagesEWuegqsRnwUiM22iCcch9hkFRNCQgXq6TMeUrrkCez1bpn29DKeTCAJgyb58",
  "key38": "2KTWXGn4mT9TPgNdj1qtTk66inFG9LMmBRJxJjXweW4r9e423qg4TFPPshwYF4eSwkDkkhPrRQqu3ptQehGEMT7R",
  "key39": "NnPSYeHmsf3DtUZuVsh7uHFtRsCj3vEgkxH5L44Vuai3ajjdK9Fr7BAPFRdURTBkyh776K7VBsV5rkMPY4L1bPh",
  "key40": "5euKxCtDc8AUK8VHc3rMjWgaR91B9Pu1qJTqFcP16tp2w3ooqvn35iAnWAJSofKddLrt5RjZCvL1LU4fWb1iGJ9J",
  "key41": "37pLGbpM6jWqbf8cNQCJG2Vm2DfnnqW2UpTnbfK4XriB2dmcyYGfsFReZdCpQQneiYjw26GV4JbN4gcGZPYAvjmK",
  "key42": "3maEz2dnS17cxnLVe1LGiVrtBSRN2rrGPBRvkhqLTVU8TWobzUNKjWz79CcrCG5KHPG2cnAnJQsJaMxtQWNdeNib",
  "key43": "21cVTdzachEa6odYJNxbcVZbgpqez17UW7ofqYJyyE5K9y8gsBknJeNUNJNTKYp2uDotu7mDKatqb3qFqhwSPCWa",
  "key44": "xrxXPj6ifYkWrxFrsu94JN8naJUQUKKj9eNVZwhXF8LUonMsg3KuHpPEXn5T6j1L5tD7zaAuAb8XQwVJ9PX7Dio",
  "key45": "5byAdfGmaXi8dTYXicmjGZrDjs6LqD44Qgk7QXSmM8m65gkoVwBMAGhSJmctsNBGfYBuECYfLUpMAdcBrc44pku8",
  "key46": "Mf4zPpgiXkL7238naHxoHfojH6zgVbm7fXPYR4FppcoiRkgbUn88a5u4o1Fwj6VGtqND96MFFtypniyCTvChnYX",
  "key47": "3Mn8otARwybjPMrjKRQiSfR15XvYfsCJHC7X6GQLcWpSVaH1vq1YuHfbatD8giZarxYpLNwSzP3qfG35Zij25fx6",
  "key48": "KjqyrKdg7feCF523x9t3kBw3T69NFLjfM4u3ZWsTW3mhvjbmy9e9QK49mUjaJVjCFZieA3sPZ98W21uE7BQZFd7"
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
