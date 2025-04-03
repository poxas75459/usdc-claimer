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
    "4ds3J4sbA23j9XLZw1Vaiqeu5pJEUx2C3Wv32YS7C2rw8aDe8Yr8SY5R9wQeBGdj3gxTmZ8SNbP7APbDk9RfgZcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NbTZ9Ss4nuGwQMMSUkBjqjH5Zvp3hMSEaiifGYyTupoXkpnuWsANvV9bEe9jovTuPpraHEiEqXURMNSbf4Xwmji",
  "key1": "2Tb5uzE8DquGF3p5yst2LTm3sNqkLgdjdExn3sgg7QofnubGPSZrt28gZtzdEeHJquMVMLAwjC9kSso2pE51oFVF",
  "key2": "3ZHJtdMk9MCAxxtRxJTPbu5p63DWC6QoATZZfobydNqsKqP7m6peJmEkZKWupFyifnZrUBLfqMvdAK2oqCjr7Noh",
  "key3": "2ovCNwikZoHGuQ1TA368jezYbdC2WjHKBwrpJt8FJejHGgWUxbFP3JV68FqdCzM3mLM4LSUcoFQC7YmSaHR4GCAw",
  "key4": "2Qv5MJ6mJzeCiUu2RySU5opTM8RRTi1rjM8Sb8mVKj2cLYUEBLaFb76XvTwNPynTNZrgdLdphy9xyZySTvAwkPrT",
  "key5": "2ear7LCS2RGNhfnYJUmYCK95MSTHfr7XVK4BCCgtCKRVkpXKahYZ8FDVXhzHd57iTEdcnbK1hSDMgvLmoTtmDkEz",
  "key6": "5wWBX885tEk38GwZE79JQeLgULzs5arJuLn447hfpVdMbmftcYPRWpkuprfzbjNzQ9k3BoatpEE8yvdbeyotEpYs",
  "key7": "TyBJfnfevFvTjACaPuvW1chowZw9Rvz4Tknayqx27K7kJDTUTa5MKQWLTU5RD59bVLtBcB2ZTMKDe8Z3nRXH48P",
  "key8": "if5c4pntjo3TEW2s1WHfK4QFTCbog73sadq5cbAyFxgtCCNCKQqURddSGRYfsjtvmRYmJEtGP6Eyy2MPQ6Vs9BA",
  "key9": "2BV1Ys1i5PrWRfM8y4JKkzpUf6U8Rw72drv7ZHchsZouZr1Jsu54VdLyvyz8RqniWuDQbCrDM8xv56hnAHzkYhah",
  "key10": "2DZ7ZAGT7zMMQAkP12AE7DDrBmFNSRZKDHxQGJGHfeRXbM7CMpPMUxo2XSPzmWSDfqJfym1pCDTmGnvz4YazKHq",
  "key11": "45RDRti4zReYSqFQc3v5Mz1LcBUDvK95h5H9cKeEE8MYoB6vQszaQAsvGB7STsJ7aS1VvTEGZXoKctHGP3LRbaEY",
  "key12": "43VhRA7vMfwM2mXgUiwd9kvrGSjvVpjUPJuJzzh4MKR8meFnNgHJHTByAMKb1E716zaYPf6m2L3L7PsmUs8Mdf8i",
  "key13": "zxXRVb6NhsvJcCBXeoCAeMR2XzmoiQHEf1BrRzPJFDoq4EwDQ6zW6MLAtXYiiByFo152Roz8fD3bY49LETSNDjK",
  "key14": "5pKXJVGYbvrFHnYZXh6zGrtXteRS6wiV3B4ozex146gRcu3NiwM7qCTAPgqXzxyvp1UuvFQ8fX19sHSzwQhoi8n6",
  "key15": "2e81QkaSFE6da4ayCEPSWzMxoZmTndUzdFodbm1W5VoEzvtd5WbXGAN6PQc8KhEphSy2VZbDyQ644tqbpFPy8e8N",
  "key16": "4Y4bWXH6756HvJzTw8zE29VeoAQh21VhCxXdQqAxSYbnxAdFaoTzVmdXGrkjpJn9ecDh1oUsxf6Sf6xjXh7sVfs2",
  "key17": "64Jt7EddPv6uiHTXPQpLZxiLKqqLCFe5UcdU9umCXLEo8RuEySLeSrVsaradoXtsaHGNx8Z9yseg7aiv6Cn9bmWA",
  "key18": "23eTcAK2xzfY9T2P6tvCwJR8jRZAD17NCCCrjaKDV1nGiBUQWY52YDzSsT4M3rMXqGSMg1rvU2JNijESNujgb64u",
  "key19": "5o7h3U83DGsbFoqeEeBdhBWv9iXbxyLA9By7ErtLjuN3A7H7yiW8jMxBxjuyHo3FGCJBjiMmisd6iFsuALxXyq1y",
  "key20": "6Wdhb1QPXQyL71BFujTWapqJx81uwpsioSKk6KxTh3wH4nSMVv8UbD8LmxNTGpdWgwRep7uDbgDFPszBnWQExPA",
  "key21": "3Fatwf59jxkrAuMEvKCGjhjLcc7u2k5ZfTqG5doGAtiqSJFxQxT1ExVmTTtFqqMQTNb4yL1azdSjXRYcN5TZkjft",
  "key22": "3D5fEmCqvfU1cyxKtSCQCstA9oFg6nbK3LwFgYXauY2YFRWS9gyoiE3btgSgdu9mzVVJRsKdLFuLX6DLRb23Uorn",
  "key23": "TF5Q8DH53iCHfA3ybv9wRBmNFsR4GbWiekjXercyAyWxj3mBvvJianbAZqUAcPJBVhq4DZAShoFZCtPd8hQpdfT",
  "key24": "2jbnyuX24KQ6m2iQPRUbEAZ8YTWBQ81Nd9dqUYAaRVpboF3oH7R5okAVf56ZWAJPcM12kCSB32kAothyu9jGyu9A",
  "key25": "5Bn39TTMTuCUnzSBG1MrZk9vHU4u2z2dJasHQmCCVffmKstTmU8XxS3tkEiuyZi4AM3tmFXm17cLYAvp4QVeVi7d",
  "key26": "66ief5UvPoa5466NJMGoF5fDoPhwhpDZtUZ9cQJcJojSRG2sfyzi2162XRSMPT8D7UmRH4ae6DeAkmreTG8QNimE",
  "key27": "5aC4XmvTg3DxBBRWZtnxyory6JP1UL12L5R2W48xwrS9wSC6yhjaVZJ2cAEVFA5mbXtYkPxs59Ju4SdrSqvKAkqA",
  "key28": "31ELXMvY47jv47FsVPQyTGPHiaTKuiyGdipyNcq9BgZQ6tGiq69LcrjRVwGo6wPenNUP6ke6WLQ36rJsaAAzJLE7",
  "key29": "nD6zsdwosZytvB2yAYbw8HnRQwW4HXxJShPBaEhTe1H6uJMMUKBXb1VFQH3MJdL7qYtcLiNbMrhXY836EGGU78x",
  "key30": "85Fk5256P6iCSa5WRZuaTXcPMEZFuJEn4bb5iXoS1Zx2s9rwsdDtMbXiB5Ezbr19tEB67knTu3BbfjvM6Hr8h98",
  "key31": "SCCApwnt5TtihLbUnkogj78Mrh1BqwmJuWRkV8bVBqoeSMb3ef2AMQV97AJU9gh4hC5bL6eG1C4YDBZrSaHt7un",
  "key32": "21FDFsKEgWr6fisqSYpk4bEoaX9r2vbARy26DoaxnbeVWin3pbSmNHiRDtCBeVKypdAYXTSDp6Ljqd8ppbYk9kD6",
  "key33": "5LK984ktM6sR2gk7MWtiT9mFz6HYEAKSUdhxLMc5NPyRDw1hKbTaZW5AhZoYoodNwS6BL84YYkevfvUpT1D54wiL",
  "key34": "3ToQovTawfwY8fHo7DNhm9Nn9hJd2LGdCoMQa2LkQFnfYc8ozt9F8aK1NUAqFfQHmifJsWZgQYJqVW2JEMVMR24n",
  "key35": "518LY9uqcSRbAProJUxeJfs2Pk3jr43sFgmLXgKdStS1RCZGjMPrcN6TBL28FH5qFRqNWoxVdnANagGB2v1odgSr",
  "key36": "3gFozmkuxw78BNTxAd44jPuGEEuGajMK6kvCwxRMNk8jbwVLthJxbwpVMCAHqKhCRR7JwXTx9Z9uC5RbqGVeKYBL",
  "key37": "3AKRhokX4CRUCb4Am1zBp3Y5c8mZTfC5EsmsWNnjfayjsKetmJgWDbtFddG2AgorvcBoMLboD8uKZ1ESU78ysyxq",
  "key38": "2AHGTSzedvgJJfWk22ef3ALik5niz9XADouZBgGMWA5P5SW1DhcQkhdUDRymw4w1dJCLqokdYtchB26YaFfCqEfs",
  "key39": "2Yjm1jrSye3f83dyxiiV9hMNFRacdQWRJ3LcX4fQSmHEEsTtaM3tFKDnQm5URFu8oyND168nZrY3NsCtKbVDduxg"
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
