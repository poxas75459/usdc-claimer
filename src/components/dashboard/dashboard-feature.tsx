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
    "GUhbWoCBUw3y54WxiC9WKcmprdfEtxKPmn32z2XbGYpaJGfRPM4eFJw37uCoAviR16jTkmVbFBv64g7gA27WKRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MVJ6w9xvyyCP55gjx19SvxCQK9jS6yS79wmpbypRY7MD8NVPHNzBYawfJvLb4deUa9LYDj4vfmSRbWCcGQkP7S5",
  "key1": "3ZvgjTY7oh8u4Se7kmW6B6m5v8tLkykUmziAzfzgN11F4ZukZKyEue64VzZyPNgUvTNoR1ieH5YXWefaK5CX8acf",
  "key2": "4hshYhn7AsUb11HvcNpAkExuKEH4fGk6PNVff24NVjjEB74yFVYn9BWWduds5gsWyyHY2KD43vYE1FKswGHP96PD",
  "key3": "gwdmCCQwGoyzuWzCc6DXgQXw8Ru5Ayn4MAhZHHwXkj8JSBnnzZCu45uBncrwi4mktYxrseyp3BX5HdLrkTHN6Ea",
  "key4": "3a5FQN2sgsTAiNPzAEBNhRS5wBWg4GLVsugtpEL9bpoqEkBn24fmju9zU3uHXkzdDiMxJftmKSUMChRGRCZRSdrf",
  "key5": "3t6ULxQvfzfvLaaVpbkUS92RdwT4iDrHepWr5oAjLZGGfjA62bqsZAjhA86rPqgcS1ZuteNKXj5uXxyYKN28tiFb",
  "key6": "2ZMTantsqtnvUxmpbgtPcB6JQw5ahGZgd3FRCK34ZpKYDA2Rjh7ddm1tzkdWtVEanFkooh8MYGAKkeEWXjyC7cSU",
  "key7": "5Pue6cBXwTFaU3SAKMhfEf4xjZuzRiVL4r18VNzTgRyG4k6Qdo7g3RQL2tqrrP6KxTFCZRcRVFzt9kkjfUBPwXrQ",
  "key8": "4Rn3JNwEQnNq8zi3gTpBKWV2DGv3ekkvc1jkytFK6Waeh5KNa71Hemk2s8P6S2THgzrGd5htDdvcuZQnYKLGPVCz",
  "key9": "4J82z64BCEtwZSQsQLBZ4KBCWUSgWQAZcaStCLpaVebbK5zy24thn8FHLUrr4wVuVxDL3Y6jWeUEXNyd3UnSgU3N",
  "key10": "2LYctJh3V3DszhciUjeiuNTAtieUM2dKjTBho6rXjZdi3HBGyjL9MJq65QRZXtiMzXeJh1suvY1u9gT4Uk1T81SX",
  "key11": "2iixzUQGn8jMP62hN3QBkupi2wWGrfmuRAJgXHNGcrWth4wDFUPnftQcrFo75Jz1qkhVXdxGbMRrtB1LB7xMyd4L",
  "key12": "3MPLMnE8GQV9D7Cmp8CPun6T1xgvcQXZaRrQsJtzHDvWJb2uwczboHTFANzFYVJnEVyY9ZXN9FHNLCBqN6cHyVYo",
  "key13": "4ohx7Y1XYdjb9Bz7WPTNqJby69DtaWeQyS469rHj5cheg2PHEvmfYYyqUGrRAMqX34Q6kbPr7dNhz3raAPsUuQPj",
  "key14": "5oRN2MfWLeR9W2wwbKtnXqyuiM5cLBjdKoiNUEsLYaL79YmU9npF3JNAYkHZfmLAXVffSNbQwiKJ1vnkQKBmbL9d",
  "key15": "3cknsDwmGGZu4iAj8bmzNZp5vSPECR89iLz5bbfDDLvgyncKuCrheQnVLSNZS5wywuPqdWLQ3pXZyABK88Uuh7Gh",
  "key16": "1DxdcsjEzNW41b9NRdvj3BG6EnTT5XwyEJQNB7QQ8w2UPm7rHJbsayf6t8UEPxfBGYACPZ5aWmqJ7k3z4rfAaoV",
  "key17": "2VnrY7ixVirzKWiZseHXZBcYzR3rCXhi3wug7sAMGwt7CAF9z6orLB9ReAAfHv1fRRJMf4xRUKAg2MYdfxpaNvr3",
  "key18": "5DS22MRgp4J2h2ve65PULQjkEyeVZpgE9eYGkw6V93Z59ZDtuaDv4FBwkYAZ2EF4kt9eALeM66u8LhzdSDLBeanK",
  "key19": "3UpXhicpSKab2oSgVFaqSACivoRwdExsHdunUH2fGsY9SwcrMGmsj4uEcGPpAhQaSMJAdnpPackBeGVc9Fv2SJX8",
  "key20": "3y4SPV6NJLdYPhFxGMtR4ruZBC5UbzrCsDP4YKrC48yANw9Kh87MSFmJyCHBYKQibX9E4fWyU9R81a67Kp5JQB8p",
  "key21": "Fqa7RYRGWQuDHMzj6XQwnWJgFWmEyMtNQosTtE3EF6Wy4TuQ4k7SXiRwx8jfAQHiqHbxH5LHQATpgzDjUJDa2MZ",
  "key22": "4yfDHCMgh3eDyRMyj5mCYxX9Jv9a1JrVT4Khngqgf7Kfua5EGkCi82bVMwsvDc2oFDPDnySt1BJq737uETFMMzgH",
  "key23": "2fE3eeen6VoMF9av7Kne66xaYAeCRpHAYi1bqgw4vqmzaauBgYcM2g2uAXy8ma3AcrcmA3E2S1dZMZSTcyoCcuMX",
  "key24": "3Z5THnBtpUAPqe84ZScU6AUJTvCUNTym82zGHjwnn3mbipvx6fZPnvR6ejJnJKNoeuTCZowXRqtgqKCDFZw34BPc",
  "key25": "5e2XXztpGe3kntMfVmXbcfUbCvbAZCwFZrUBbytubvYCJsaBogfcuTujUfzSAtRqsJvzYM4zkWasJXKDJgWsaxs8",
  "key26": "uCYdZNmUKXzzWC9RK8CTiaCdE3vQz3uhLKqJgYeGDUaUEhuS9qgmHefGNveVTxmJJhnyW1GQvEKxsV992zxZbHU",
  "key27": "2BtwGixgjfGjYc3dD7SCwrcZF5YAMbvybBbZpox5w25DGp7uo99CS1N7pf6xmNon49SJedeFCEwfaqhTtpCTCYPL",
  "key28": "2PoEqxn5jg7Sde9Xsj8k2CbYEZDfXAe3XoXYAEHXLfqHvNETCL89fJG8M8CPRHuo7PfCowHGnC1UkWqt2b2qm7AA",
  "key29": "5GubciET5Vn2qJWg8FXf8Q1Yk39ChvXwEtWaQjMz75N3QL2ahdER9dp5nLPajbAiqkLq59GRL49grzkhcJez1v8Y",
  "key30": "sZzQs9pYTTBRrHEQX1D54X3rFrnhqi2mWFQdySkdmcNF89npho1pxiSjcT75mRmPPkpMp8CockXXZKXU5Jb18f5",
  "key31": "2xs1hRUX7pYjawvXahh9HKTZUgWKz6iSq2vPJUDrPa6gwyTni3AMTNvGdw7NuAnY9TE5R3716Yd2APTPz59hezA9",
  "key32": "hrBiE8oFTrxdVCyQDbqKwTKJyKpRtnF13ggjpHHdzthJD9oDcvxdMN8MiMdxwBWWwMNF1z6STwfMvYJwsWbEruY",
  "key33": "2epAuiXWix9D2ezKikPmKJxoQzjAQ7bye2ZGZcNHL7iTyn5cJKv3LrgXw6t6bn7W7SNtuftiZFWLAbjeWGhobJyY"
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
