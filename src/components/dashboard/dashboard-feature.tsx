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
    "3fDDdB88QSNysay3cWER6tGH2TtQc8QzAjPJQgRMzaMx2kP3rcaPYmPFLr8ULQpd4BbbezVoKeFZokjM8wanB7dS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z8d8vzSaUf1JQUVGQaKScEfkifMjJ86NjFBWqtMeHLk5nfCBTcez7nisqFLzX44B2tEoxGx9m2RhxEY4xKJhPFB",
  "key1": "2eSMJUCxHq16x3XSeo35ZP89uxt5Ga8knACdEXqEvKWcjthzB8c3Qc9UFmVVWsGVPKsTze4S36qcEQVJCfu3pgfJ",
  "key2": "eDt4nqgx2CxP56rrxs82ddA7CfZjsuZ7U8YfpBXj7PrsKGPDxmmc1J5Xrkud6MzzCX7maxbUT6XdiMARkuk43k7",
  "key3": "2egCHFT8zVwcQvwJjLpRAWLqTvPpoDCmEcyPCLKhCpgDFsTro33xNWuH2mfdwa4mYDMsqdXT3yZdApSLsYnGuBY9",
  "key4": "2JmSQaM7MoCH6dsTMWsFTWUs9vZcesaXmTbeXkWEDa8X7so1Bo3b65qZ9Zgi5WST89UKdbCcPYxzmJq1Eb9Z4g6U",
  "key5": "4SWHuzSZGJAVczYCRoctQkWguBV9iS2bt2sSbHoumMikDbX3g3zkKZ3Tnm5xfUYUBebJiNLT96q8CuTMwcLxxtB4",
  "key6": "5HpVQPFxdNeXJ9QMhxW7EZWxUr2CsK5MV3Cdx8cV2ikSvAnZ8KP2tEBx11yakF2cg7ZSA55B1bw3gr8DCTkkmMjf",
  "key7": "5WtECeDfp4fGdHVB3HyZ9o3AgEEiZ4ZXPPb5gVwSgGngcy8cM9SndnCpqNFw95bDYdsC3wSVccSXvSXQeBCGaiG6",
  "key8": "3rpQVfNnEXU6gc8JoFPujcerJGbJTK31EdZgQQnusvoTvRcctaAg7YfFEDikBxMJdvAg6prdfmmBJcyYbRxwCDHu",
  "key9": "4TgwctEqfH7Q5WRwkrYzExadWfC7fR39GePzTbATQpiuCd4XmXEyPaGLA7EPQBNGfKwTaxQtKNdqTuF6YQikyj5P",
  "key10": "3S7uKGTsZXzpf5VCRui5YKYYLBd1STdBcL4R3MMgJ8VC1acyUdBhaSf6NWvgoeJ4Nq1c3M6g5bW7LDJq8RrP6Dj2",
  "key11": "3GjsaDHBRXekqgV88vogHZRibaMrKjVDnBhwKS5frxATt756jcAy6BBQSbr6Pa42GA8JjQV4hKyYVvTt8bvW16cC",
  "key12": "4xF1Z9py2ye23rHMQdGazsDXJ5DmFq2G1FTK83CDFiqvz3UESKM6EWwTM76t17rNZrb1u6Yex5wG7dwR8BXTfmAK",
  "key13": "4mKKE4EYo2Mb3FSaEkNQf8FLVLSiQTZPPs2YLoh17AocHo2g14qteCKJqFXfvJjdBRjc9eMyfeUsXd2rSa4bJZD8",
  "key14": "4QZoQLDPrP2c9j2DDGbD9wBqmdS5So17jqdjkgHAZd4BAC1gQgM8dTCLm5oAPtbdZR5eRHX9JBubnvQoTzWjPSCC",
  "key15": "LMKLk5eTqENFKH7iRvHodxYQQ4EAdvNAHWrs2odwcwXFhA6gMd88dNRSByoF9XF5toRsKmWAo1M6BW9Vdg1NjGm",
  "key16": "3VDz9uBXPAZw1GDMDRB8qY1XbfW8eiPn9eqFU9dD3dUcnuNr9cQZ5vGtLHqWg6KC13krqy8MdHEWgWa9wMa8axxe",
  "key17": "4sSnSs26BZiZLCnfvxysbMFd7KnWPwnVhhoALXhX4ynwAtpEuBnCQb9vNU7puRp8WdBShQzBDo6RX4EFdWDMTn7M",
  "key18": "45q4bAmmkHBc4DFjSKeAg7PZvcnHoci274Ees9RAXYpnEU4qcAZhkDf6dFZP1aWfTpfJzTAtxxSe81jNj7hKXTC",
  "key19": "4XQJQU5rif4PBacxgMG7fjpJAm1J6FDanV6oURhh9Bs83wxpULu42DJbUVePVYxfqY5e3eRugueYY2miCbtK5Y43",
  "key20": "2XJZ11ZFzUtScCUcWgsvvCpsDtZM7ujB9JUg17Rj37c8UtrtppxmComM1RZcSjfZoHFZLbDj6CXxXcyUchu5LAiU",
  "key21": "5JpK8eaK685CgQZgvw4HHXchywJEG3y5mL43LCgEjLm8of5oTZBxVXuRmXBzEuszWh9wg6ms2dCvwhWF6roXCFEr",
  "key22": "5oYSkgm9zmv5ZnGgrvsnjsdCGj3Jt8UzXCMQXFVqBcMtYHQWV1iR3eZXFj7cwyrRBadVWGtKktXwv2ryeCUZHMw9",
  "key23": "6wXG2KqVZ2AeFUqjDpVWMAkDJ1y4igv3G8GKQRnK5bipfb51bz9FTNndNwXobZtjh16P9mEwqErYeuBZZEv1fJg",
  "key24": "23Z4WUTBoiewwaD1iph68anYMEu3ukfvQnFoDVqvJwp3LaWXrKt1LmVvE6ku8opM1FCpzKrRKbNCVj753674rHNC",
  "key25": "125NiA7FqH3NwYdcVJdej7DE2PJAxxYnBP8oYtmxeFq44dK3rUJ5autdXSmkbiYpu6sMdUqCZPUpQFLWv9QYsLdx",
  "key26": "2FY4tQUr3PQbm7wSm7qUSaGEQiCUVvzocvYMM2HV5n6ePXo6xq65dRqPskexNWrB5Nrc8Uv3ZskgJzrbFUEnk2mp",
  "key27": "4EaWdafp9pZKbGM9ryM76CxrFJPZKj5hG56E9ePS4Eid3H4AxeHHoBw5oLqUGfMMmAF3gucHQK3zzhHGRaLxb1qR",
  "key28": "sG4uxvhU5QyNZF6D7iygUJcEPjmEib7rwcMQAC1aJQyFYktnUpMFnxeDuobviSAfndFnHV5vsg9D9L6BTN1u711"
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
