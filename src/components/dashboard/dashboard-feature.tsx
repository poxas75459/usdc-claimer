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
    "2GrFLkETiBM1PpCF6TFgzqYvPgMnQ4N3bEUySPmCfb4Sffbj4V12XRZyY59aCdgFsu2RwTQPi24d4QhPbaBUqjNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27DqWqKTda8VZMwoyDihzg5mFUn3FJskSnWwpFEAj1y8ZFJcVVCHzht5vRsF6CRuGPb7R4BSqoWnPsvuh9vpBZ8z",
  "key1": "4bFprn7LRb9D3gsJKr9Qj7jmue8ZEi7iYufRojGUFfFkCZtGjENkz4C1ut1pQFA7wRQbbkuiZCRSi9dbBBE8kGja",
  "key2": "4nMKjyi1xuCN8mVY6M8uWgsdn9FMmroVXbty7dpP7nvtHyayDbAgM7m6kF4VprTUYiThiBYotYu6gqn1E9KWahh",
  "key3": "2p5ogiZRJ9dGJPDcmSWKXVSGHV1JDPkXvqKAotvAeuiA32JgJCYfYRobiRoDc3mFWPPg8dQhnx7XnxNw3zNVnKgF",
  "key4": "3tiaqVH4CmhrfHYWhsHs2MstpwV1qoEvjwBrmTAYvmAYR3RjpnM3yjYPQHSregQdD5WEEwXtDrubc84GLeajpjWm",
  "key5": "5AGKNZt1YLNBbp27dc1q6XEGbkx8uXd66MudJprMxZSTPghY8tZDBsC25Uxa47V54KiSEaxr2CYg1VVsfGexjbzE",
  "key6": "2TLsK6PzX3p5N4KnDxFNGLC9Ajs8Ei6EYpiQd4HSL47cJLJnNMwMQeWAJC5BEvQxzSoQ76dwFiLfKCHmDKriYe5K",
  "key7": "2DHrGMXqjacwf6L2LViUFK3z9oDUTeLTv3X8xiTpnyqLBNYhog9aMMrqP5W9UJowBxe4FFLbYomaWBvmyKr2xS4U",
  "key8": "5Ue4tYQsZg3sxdpPiPYNZgkXRnqjHbJHpYkv3Xrc2Yxffi2pLtMEiPqHK1r2h9wUhtL9U11JuinnUuKtitd8E4wp",
  "key9": "2zWgDs2ZveD6zMqtt43PprY4De9TRXCy9YriAtePpq8e863py6NnnSXFzdSDq21vtigttMuDvS4KFcaSNmJUHmMZ",
  "key10": "3Q9FWnfcYv9UguQXmFg3RFcaGwXNqka1t8UzCfXTwEsqjuQuh7UsXmWKeQD1dpPRUb1VKZW7ud3WExQA4SxTPjYo",
  "key11": "31dDY9HeYghzSih9XYqWxTZ8tvbfm6VwsZ4ySi63WyjskbNohMfycEw9Uur5iKyT2RhVyxVB6kvnWh4jVBvRsVky",
  "key12": "21HrAeGWB7NoUHzoLU8tKphXHQFukscwS5p7nCVQqudgnHxmUJXVN2GNzbCKAmQ8w3Tidpk4NmPuLhvFcMLnZNm5",
  "key13": "5VLbCvNYJ3Bxfc4uFtzM9ttetymoXCeX46yc2mtDpr4PYSSbqBQiddTarjhmmQAF6xgG46YtjbN2e3pyUen6xrSD",
  "key14": "3SUz8KK4QAmkh5fGhHJGfnpVErKXxTHXxQjRUiXyig346U7U6NLEydFkqvW7aQx5fAQV3pSJBipgXs2KaiNrP6C4",
  "key15": "3n1bYsRaWbdKebDHcm13eyjqLGLKMkNVNmaGqHQcg8BjCZ2vGd3ecqMybLz6JwULgBdsvZStBk9FE2g4affCzsPR",
  "key16": "2wtrQ7Dsxnbyfq33Pt9J7T6jQ4cMeqoGEPUKf3HCcmy2ybaAw9AFYkpokUDojdmU2KkMFbVoU8kBDakxe3xgVyBw",
  "key17": "2h7nvfmQMgkxo9UCAuknHaijaZTA4xKiAFczGcxZxJqwQRYVMQ2oBHQz996saUsTBxUk5kEkYesQd1ckGixjtyQR",
  "key18": "cN9qsXwAZqaE3dAfMbVZMwBpu1TSXohM4CvNEdKVeAJwU9qZqaVp9CTTgLeYmz4wwDGHhGBFv5UAqhuCDQzpxby",
  "key19": "4sNqAUwsm7WomNSQjWbk8KnTiA2qrbVVWHoP8z5xwk4rhEM1SDdkkVWXLe7ZhMAhXAsDzmuPC22MA43wEXuvRaTT",
  "key20": "55MpC7zoQMiU3VmaiDBsrCd1CYtpCQ3f8dD1DR3EZj1aCaEGnGw8A44qcDLpZV4uBbAkH2ChMMtWpYuYrPTFEEr8",
  "key21": "5xzQsnzKTzc21PqFc53Y3ExdUXVbQ2eZKTnUjewKKJ7aErw1BND1JSGa2dbSKEuc2y3pcK7szgJ1gefeYuPaXJsN",
  "key22": "2jLTFQXMKBmFKNxdzbbFDNaEhrzzLF9bdpp52RGzptsGY1QGdoPwqUMcuFHudr4hPQRSYFrzU61TijongcHXucDh",
  "key23": "3R6yAyFRNnDJ5ivo6e3uDPnEY4mpjq43YWEHQhVoNekAcCuBdCBNrXQZCfzcM2xNj78BSbaZWNJf24XixgxCaiXL",
  "key24": "5Nd3NovMB8ttGDuJYBMBn5NSXjP9wbVdayWhCXrGv4BJ6d4yEfk5yYSt5vkfprMJoPz1WqJrD2j8W4AqtsTX1Mfh",
  "key25": "3P8SrDMno4GtchpoqrfzAz58Wqyq1VprNKK6DHx3WMoTZM8rhZhPpiSjFgRKprx7sQ1jetf3airWQMp3M6e7hWxs",
  "key26": "CjQiLK4KbGaJtMBR7WqR4hpM5Jq6hgUfDKufBueyew5x2NTWeGDLWFPRKnk256xrgJnB33LLde6fef72Qru7vdz",
  "key27": "zHJKxABnCedLZrk4YN1KwaCs84pk3J2LWoy1J7oBibeomKzWVYfreojvLvqcrhBf5fZSn12MTfTjbTEn2mi9YSL",
  "key28": "2GVCTXdkBYx7ucnQuxYL5SDnfZNgLCuuxQBgYxf1CWCji21Mkzfyt6BRuRu81C9MsAcVyqjqFhMqLNirbzSgX2mj",
  "key29": "VL38oapsvC5Jwdg4yjJj9RDJUx5iUbHnrSPRhnhEgaXV4L7hsUB6PVEgkuCQQdf1mDA6ivNVwppwc2bK8oeexwm"
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
