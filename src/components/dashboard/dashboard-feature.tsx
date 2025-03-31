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
    "4KJu2Crbx3UUxx2cqXNfc8NqvMfNGyYfimCGRuk9uVrcxxPnbvqe1kiyJjLpGs3JrBkyhwc2FbNVsJycnez61jeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fmJGEriHiaizumuWa7ka5SJQyfYtqGL6T7SC9G8Qy5SuLMxZy2oEnE7dMbuPZjeecPq13bsgDyFwEANvRFpdVHX",
  "key1": "jBEpdu1WoT9rv2dUmfXjdZHcmtUnuRXx532awsmczmCpCFTarNEN2msYtPPupSkbfC4ReLVHmMQQAaVeHGiwD7n",
  "key2": "4ZsSy7MbkpBsf8UqmndjkqaWU1ZV2z7yHB4HXmCmXFs9unHg3bwc9mDyeTG9vFwsdZw2eNf37SJWFv2DSyzxUaWu",
  "key3": "3KW9tYmSgrLdSBHgvDMoCgwkLwJKCX51beEn7KxptUoUWbrLwRyYPP7uQkJh7j7WXBccEv1PDt6GxERK6TFyvcrc",
  "key4": "5HFpRPYuvbDqW9hAKpiZ4JDcC5hxXmCB96NtPBqigpetBMY4iPVorfATTLJHzDuejspHpqtMH2rANTzg8MmvwEAL",
  "key5": "3ep1G3iN8SSjpT7TX1jQAq1HoFvaRmdWGAAriH4i9JiNYeE8T3YRwyo7aXH5an1xa2wV6b1Kypu8fV4aVTWNBJQp",
  "key6": "2H8VnsSaYUQbh9kcCxig7vWBFfx6FQzrxTTc4xLSrLowzh7hQVVHatMWi3P4W2xVMUNdyAymjJdnc9AA2SuXe9zk",
  "key7": "PJsZ1Y7cV8k2fmE41yKdo8qohwk8CvHNckpzbMRVFWGdfqwEwqB1Q3MVpUrnRwfqhBQpKgjqvYWvnnPNgW998QT",
  "key8": "5KTvqRykGceHNH5R7BEezo384SRgi1GCckDfnwYdrQzoubzFamStLhLFC97iY72DgpgRB5JHvecga8Jy7axLDJz",
  "key9": "4tLmN3MY3BtVhTHhHYSrW6ZjkTA1y76qRpQa8ijLyGCKDTjy4rqAX719rrTiA2SzdqB7BQ6kiAK5MTjP32RiJLVV",
  "key10": "SqBVS9h3LradLNbt9zg7dakQDKyz9XNEchgwTDXmyRhVEWdUeHvVb9w7XbGkEhYjCocuDD3C61V7SEAd4UyF8ja",
  "key11": "4Hy14nTsebcH5gZQv8mp1j86R8nGc33UKBhjedQoxwKQjmXR1LGs37Pv9iWY3U99k83Bpsg9CQZrqppSBdvzsesF",
  "key12": "4uFrXUdZisMBv2Grp4D5E9fXUZr1FAgbar5JtH7hm9tAAceJj9hwq7zLr6kPvwTsPnHqeKas9MfDxZKfFn9tJhfd",
  "key13": "34Q1gAE4WSy4FCEEdg67cPNtuTizpTmNBUGmNLdeinpgHchjGo2uj55miPQFAxvNLjJ4PoGkWkkyvwdiaxrgumAc",
  "key14": "3voFCH3shoKSms5Z4r1MJ7ENtJWFk6oAbziNwHSAQCWbF1nC5fbiVBqnUoTpfmbcbTdkXt58uTVckEzFPTnxMbJR",
  "key15": "3EhRdPy5tthvNE1ywwV8sjeKExCHcPrpJVuii1wRfWMPepcosiN3wSU6KSocXkpFMCLyykbJARy4y3T4YM4mCQZy",
  "key16": "4yWgeqp2PaxfCC8s8NZru2rGjSpyBy6HXETKoJVcCAwJfPvWYPej2cZvW7NWXH32SqV7DptzYDq2WJpw4Yn5tSRw",
  "key17": "4gN5YMKN94Mm7PvMeBQuSvwonmHvyTPKfdpwP4h7uPCEHgjLQLiy8YTgJbhp76KWCq5g9GYTWwZNDLUWpgwdDUUM",
  "key18": "5HGGMxvtSkNNZHfU2UK2iB7qBQVa2XYpX7TVxXtZUp918kLaJTZaGmJPjQArs2b4aSMBiznJRV6AqXBieTHffhMh",
  "key19": "5Si7WS6CqYt6QdAo7tJWP8ZyhCJ73exeshcY5fCFmW2X7nKCGmLEC4VPFZfEidNZt2aLPzPqsFMJfonHZpLZMieY",
  "key20": "2TJKydwRZu4LsN9ENZ7gKmPXGkJzmWKWeLtnFbYgV6REsgc8j3nb8sbff8HxQrwh6WJ8C8u9EumMbrBZCVp6ywPN",
  "key21": "2LAqCkaevzTUzppmwgg1bLaE4r6tAj2mTDsq8hyw2KN8Wsu5nYgD4NpPy4KVUTzzveNQbhLefo1FNQZV45qaNKpG",
  "key22": "1yXwAh9vmuNvRDF7suWnf1XdBerFKuNx54W47bt1h5fGQPJ7nQVaXusRanQzSA9ZZTJrrwcKUUbzhbGjBVHKJue",
  "key23": "AcbdpsW8MLKPiymvdMHWM8kVE1uWgXVvcdVcK8utUhove5Jmsefji5QASKvxmYjBvJ27brPiy8WVSEP5VmeiRXM",
  "key24": "wgd3TkgzKeRiMts6CRBSD7uBkLVAkaohHkWN7GdK9tHwkY1aFzMpjwQ7NRum5gV6ySDADYaZCVzMou3JznM75nu",
  "key25": "1LwKVJQeMoJxaVyxtgmd6DAYzfSbrrKtxtftanDvHiMLqgiETGktqCTEQGF78Ba5bj7YgE6228im4Y1T8Gs5zae",
  "key26": "HE74FgZnW1TYt9vG35mmVNS5YDSh5B7pdXb6yW2SK3DVutJrK6z1J4KEkqTrPMBAb3jJGbL7Z8WwR16tPgbvCdx",
  "key27": "21DrtkUYA3ABZmREVSD5dBTCDiBgoeEeDJFbpN4jNMsvwqSydcmSgkYeUHnESGiTPzghVtdQbKCTNBg2VXbFtfFK",
  "key28": "4FDvGTSdxX2MTTMG3MAUDNHsYNJhNAixybAC99xHaKdmVUrGA2HS5L3pUqZveUkFvkeAy5hiLtbqQmYaqTRvqVKx",
  "key29": "4PpjELdtptin45uMWpkSZWZ6P9jqaJ8yztCd9DTMcG8aKaNaUvoh3icEVMZN6Nehj1KPBDTAZZd5zSvC4fSUuwu",
  "key30": "9WG5P9PcsTumFaR68XHFXWsMdGUa9R8VKNoptJ1SPAWPpVt4ycuG4xSQtHW8oj42ja8Brbw7y2U3gi9EKAYqqqQ",
  "key31": "4wkCT6gQn8gqsidAVcbbBu19vkiDWWrKYWcWHZJSo8WNwwmgV1pQDc3pUpHtm2HEJg6srcJNuSg6YvFpDqqYMWTB",
  "key32": "QZ1K1jVoBYYemUdh8BgpjgAomGAPmVesPsQpNpF9EnHS1t1WcrQGYzJMcaokrSyQqNSbjmZLbq3o5EuB2ADwLUf",
  "key33": "4QnGirVv7RvvLG1V6NfvQ4zMd9djoc1bFPRWppaPxVeYPAZtiDkbuEVffGMwXteESzoqQFTJWRbyX4gceBDgFNCp",
  "key34": "5eCjPFHVoqqoUtvY1YCJS7LDVnEFEad4N4qQgMcG2nzmFytVRuBbzx6uoqYaVvkYPmaHQeC22Tt8124ZaKQ7wvtf",
  "key35": "3Y5asdphZzoq3fqCPPkmrHhLjdshhLGbJsy93dadhe9rPgBWierMkto576kznA6ivdXMKNCQyGGAxuMC1tfkCqHY"
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
