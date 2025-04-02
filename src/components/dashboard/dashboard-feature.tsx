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
    "X7fhxG2XYzHyJZWvsU7JhbwPzTU8zFaSvULinfJq5CGmeh3CKBuNMtHSTAVfCsQB9uE83m9iQ9yC9QXGjMVE6ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KSApKRbJW8vcGoBRMoFXyr4WQWVBu236Dohgi3yzWRvy4H1G5Wi28hajWKhFRKhcKtGEoMoPF2cKXTVSnLGP7TP",
  "key1": "2cLyEwwxdA3NVLHJMw7Fx7zhoThRvvsSnxyDwfgUHhWG5hVTqoP4vX4eA4hw5jkfNbwYPDs2qgXYEMjDyXkaRabd",
  "key2": "2ZYFcqVWFB3PzhwgmPN3MSEHxgtqV15f14uVsUpZwzuakPM68aJEAMUvMwKSWt1nuHtnSfPK1gmFLTvMSxcfxNnQ",
  "key3": "3Cw8utWa2XmE6vMSVF84ox3WsimxgtKjc3WEDoogwsatPS3SwgG6SVR48oHdMQQ3gJEqLY7EtUCAGRnS2fSb7QFG",
  "key4": "2JifcWhLouSykcomo2FTpRvotv6SmbymdYMzKgqED6pcxLH4GkHUhrr3XqWD6r2tP9ztHAqj8Nsdu86zZ4yJHjHH",
  "key5": "5NXvF5MUfKQLWDKz7mx1htYjGooVuE9hiVjSXmFMQa3B8vqyGvEQectchpYbJ5KJoiCN3Cc3me1mKp4u1BRCWkpa",
  "key6": "3edh84zonWiaPzhehEbrBLzHAQtBnnpgowxmwsT9gy38vHHxSJuYcPBr6HHhWGQveJJTp87FuDYGhaQzBCLz4n6o",
  "key7": "4UYpNdbFrHUYK8Ya4FmvgjkYv8nY3NhnKvSxdwgjg41oZxJqE2aq7oRfzCr1ZHVt2PzjE27YcAvTUGvMe4Drf49P",
  "key8": "2nnSp4CPVheido1AcsBQWzrgNDMsAsn8zF72U38qiAMsL9CK2zYRFXZLDcbUcePAXDsCUst7Z4FqHNSAZoYcNeZC",
  "key9": "66xHFc1bis89T7wcziLkwDmuPsGUfFPE8M57k4wLFvFkYZHjNEpfrxVFaF8cbSP3jtcqvVRiuxCcTHwSTfLLNANY",
  "key10": "3zP6HZ7AoDfJdAM14mcaEQcRZbtpKQ663G7XwqE3GfYcJej437AetFjrADvj4TzbbDAAhto2G5PMCXHh3nQ4QD3X",
  "key11": "5YCa8eUU8jZ3pDDzzjUbiNskAXLsmgWYGSg8dn9KQJu65AfF7omDWw5YfmcozPfdUHYGpwjf742PHhvG8p6ZtpKi",
  "key12": "5zKttbscuSc2UEkCwfu3uNoXfCb8ubEn1yALXneHyCbfCKuE5cnwFeK53XknvKxCMH9PLLoiBJhY7r4bSfNo7TQR",
  "key13": "3LnBj7fhBimVEzwv4Km7E868VAi9yxr67YMEMataAdyQ4BFKZ2qedHUvdtBwugbdmRnJYzRRspNo3tbfGjpH399P",
  "key14": "3UNqKXBo7Kd4ZEAFhXVwZoEkYvqxrQ37qPu5WfLDgs2TuJ49FMrNQ2YbBjRsz2ArFJKmDnFPxM6uqvnhzk61USwS",
  "key15": "2jAaLSe19Psk9u5xaqagc719ojnofNpn4WtHk9wELvxc97z3E3vynPoKZC2LshEAqCRZzNdpnfg7wyKx12J3ewdA",
  "key16": "q9kWeUPCH3rdTWJVM9aZLGZYffYpwyJhBVzixw7EEsnVgt55ebBahSGQNAXhT8T9GD3imfc6Q1bQKnXCvGow36G",
  "key17": "65QURwyPCynDhKwipcJbtr5VARQ56261USQs1iNGCqJe4fK2bz888iSmDqwRrtMG3BjXvNYQxieFyfxRcB53zPTp",
  "key18": "2JuuMTG34q8t1ZcWh1mGfpunigq9FuY255RUNEBE1mCQCUSoBwNTHQvGUt1hVyCumqthQqcuoAp3TZGr91BVbZmq",
  "key19": "51P7ePPT5W767nB4YegKaCSBm92N9gW5KtMH8MDZ9xaWstrR23Uhs21WSkQWfBZD8oYnoaMw8Q4ztnAQpRjDJJqZ",
  "key20": "3zXpYPDw4xSLe7UQvHvDoGi1wjZh5nzywQKHKDThKgRXBcPuWVC1ZpeocRp4NH5EY9UpwR7TP5L3SBJfrPXjY7oh",
  "key21": "67KMG86oFLSpm8zrEm3MXi7vdNRqYCkdeZnrtPVezQUGdN1xD5yUMN9PxhMb3NK8uxjocBXqQ1oBUqNQ3nShCCur",
  "key22": "3N8oERoZiXJ9RXhcu2oQeQtQv8Rpu3QnxiskJ1PPEg329LQyRv6aby4RirdBwbCi39ygi35dxHDsJxea8et69uCG",
  "key23": "4FWWboyfLPXPpNKDucSLGdR5wwYSVb4ZdnKRvMNfSvnADVcAjYLh5DsGimkqazTqetPaAS5ekc5pm9fU9sZBRGSC",
  "key24": "55KLJZ7PCpAh3ogjdVWW4jVcv9fBAeT6Z64GU32biwni4Fh3Xhq7q3ca1nY2Kwz7rH6cQNwfA42nuvocmn4oGK1L",
  "key25": "3VyX3ouPemiWCCTsvd6nwR9ZiBmH45J1qSS4uA74hXkT7hP7DUJwBD2SbuVs3uYgM4mtkog9rKi2EnE7PyZoF7aR",
  "key26": "mGSNysgfQrpZ6v6F9J6avHXZruZ2aDKPAEcxySqpuwvVMDCXJSBiyeK8ELrRgMqdwVKKVznmBkXUQzrZcVCcL6Y",
  "key27": "3nc99DN99yMqePqzWrS6P4jh3fe5tk7QUNCHtBVWe3QyFuNsP7UzvKdoZ8m8U88jfrWopZ4q63wj7Xzah6PLVN8F",
  "key28": "4yqFqovaXaCTQcULwSUHTCJL3m2zXaD8DTF69o66zvzqUCjayE5JpJ9n7HhtPTYDdHDvh4PScGUDMJi99yGYYCNL",
  "key29": "3AsZQoxqkcAaL8RPMtusMA6zkkhnuQ3hKy2KPUK5zC5qQyQjJCUCEoYewdcbQhUHognvACHzwnZqg72u8THRJwHT",
  "key30": "4k2MGbiWE85nuZP6CF9iXzNA6SeHNNC8CzSFaeCcC9kgd6AvV6s5hNrXTFBZPsni1t33HfXFg6XBX1SwqBt6JpFA",
  "key31": "MBgdA46thU7tXe5QXoDG3AcyFAYWS973LUPHLUu1Y8h7b5kBxpWwYL1FKgPkyUxTzLvCDeggrhTZkGGzjBPjPMa",
  "key32": "2dvYEZMM7aWkXfxZJF2SkaNuBZFKNwo2nJgRheeXyVACGh8QejH27ww9wbYsVdMJCZqveLsfDN8FZfXi1H6PdioP",
  "key33": "3PVR5rfoe8euV7AkYxwJKwAN3yabTiUSoUM3kPbbtvfLusUQktX2oFsdgFNv4qSfv9kebJ3tibWN1MCM79tzSCUk",
  "key34": "42sKfNcXsBh4Ew6rKBszhahMy1BQpJAUR7a6zn9qzs1BmDkxoBcDbUqVQNdKpZGXxEsGAbDwAyF4S3Kbvpc3Cnri",
  "key35": "4kkf8bitJEGyFQ5uSqaoByARBcYhHkcVZ4Ucys3QGJsavSoqEBAkitpK1MCevCzBKVZ11TcvHo5ofTrmDTmz21t9",
  "key36": "3qqn4CfBrdxmun5SXwQBUqeG8zGgCJdNoYBuiVX9ttZpxFReMqHXdmxzumNza6t4sLVV5iJ3c5D9rgXDShKMBfWx",
  "key37": "2WUf6JoqNTMnRX1cNwpuESXFPSsNvuERVWYV6yKxgyJJvi2Q9NcFQwhnzQXLvPd2DZKP8bogpoid7odtfHQHXfKW",
  "key38": "4BVer2pSdYmoVjRqjxLyZ3Tg2FqRUjfqLU5K5Q2CQNhbSTMuLpQuFYkg2pSdCbixtoK344nZD67iDnQWNjcbmBF2"
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
