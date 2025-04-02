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
    "3L4WedkK1aUGyN5fbgjcDXbAJoXajXLeVmN5vou9jxGdo6v6mCiCiKgWyHTQX3gdugBA6hLr1jjmb8vDbYdDD1yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64nw38DTozhWQhCyfPk3i5fg3nyaWPk6AK98ZCBao2vgNwMJqPnWMTBmreJBYRCLmieiBH3bbaLT8GYy2ycAxG9T",
  "key1": "26G57LebcdzHCfy1R913oEs2QuSeeDLvxmq2dvJwF3VB1dih3yE6xU8KuLt8fZy9b4PAb47SEbPnmc5jbMvpBjfa",
  "key2": "4EnEcRqDtifTDVU5GQ7o2xAjYH6kWNRkMuom3h9v1MhW6kgHbX2CeSXy1999VgQVp3LvbY6VPJusKkKKtoGgdwVB",
  "key3": "32Umh7QUYs2eb7fze7pHhEhWpmY3nmEBGA5MY2ckSpzKEE3Sbx4doVssFQcD5vhvUxNo2N8ZAn7ws1676cHXWznk",
  "key4": "3Ja9ieY3uiHNBFea84kYhdxG4qfwkg2i1z4MH5jNXrLGekzjBi7nwTaMM7nsUmjLSCANw2RaC7czKmmUbXvRdxwE",
  "key5": "d6b4m919q3iR5i65mWz7zRBk4suEjWay6va4cuwsRU3CCroPDv7A7w8MnrgoUPa8FjEeXtjiBGxvqVWKw1AaKcw",
  "key6": "2yG6WethRyC5VwXnekjpQ4r5g79xPsa3we3goDuYSri9t5SumA2FqC9kWk9Q2mqRFdq42fsWaQS27eBLUBMcQCpU",
  "key7": "tyqJEh3VnfBuhYmTowKqwaRoVEA3UN3BosqtAxmJwFUogbASYHbyFFzprjsHt2LFeNA49QPbEAkNUe3EmHegR7d",
  "key8": "45VsGX7m8ZXL9tb5kfom2NTWsbYoQnfhonTM2JSdsrTMpcaMH1YBiTjEHWKnrf2Lfqr463XLK7QcW9DM8mFriFbS",
  "key9": "4ptqVo5QctcqGUG4BAsEjxbqAvKw6Gnc3vC2MjWvyJX85tPQXGqistVTJ6v8acQ7HuNEqTU6Xa744ezvXXzR4Fhe",
  "key10": "vPWhJkXHvZxFVWPrbRLiUpxJ4MYq6d8voT8b7x8CNhNBzfnhiDWCKCSJHtoe715Bkd9rWRf4dt142NaZN8bvULF",
  "key11": "657HGJAcXQB2BSWg46ee4ajfNGtabywnDvSoRo1RH1KMbkqbPz1JVggWmy91uyj5wayeUZUkLCq9M17spuRxgJtM",
  "key12": "3kuWUmWLKyEkeS9HY6mBsdgWkcn6USTWypzdX6HzNasdKoXNaZ4JwGzcg8p9JQFYsbNRs6BuG1kPe7eKnc9dH4bV",
  "key13": "2n2DedEWCUKYyUHmLBXr77p2qmKuD2DbuGPYTpEiWRUvrjFQgc5sDnbSdb5vrnaHyduMaPHLJcM8jWq9kNkxc1qd",
  "key14": "3G5rVHXq5poqdrRciUyDLdjpRyfUqX2ohhpSE3JXrLsfXArHnvvV3VyeTxGq1sqV4U9Wt4UezHESKtZk7D6krQXP",
  "key15": "29o94xqrSz54RKqC6sfGLFwTckxTjo7FWyPikmAZ3CQjWrs3q1EvFX8HvUGJ83BdSqu7ezsrv7dQmaEJeRPo7fem",
  "key16": "TnQQmAimCT7uHmNm1517S4ahD3QwFkVhFx9xHBjamkL2Ryhje8pf8WcVnbGPdFb1wXwzWJFGhn7xTrdZ9qb7HSx",
  "key17": "4xg3xvL3jUHNHULks8c6Y8455XhcgjTMU75SCCW1kFxMmNkPRQpXjEeLxHaTY889oEqxmxqWVAkDaqBqDvK9Ypnw",
  "key18": "2TX5S6xrLcaCW1PkCzn4uuJH4LJZ2YtUDvSxCQArvcXXyLuYFwL1EzMfQd6mETo7HVehTAqvCULrXgBQZLw2u4CE",
  "key19": "QVsu4s351MzDSmAk5LM8V2eaFYQZPtVGRT56GQAUjr1FX75nMRvsNY9SjH98oGnMLx7WFKs1ArfuSuW7FhWXr7b",
  "key20": "h99qVZt19U7qPQN2MZYSVvYnP5LZixrmvfErghdb6yM8ogMw3jf1nw2TW8zTjxhY2b4Z3dsBerWH8VAWTZnDy4d",
  "key21": "35qQ5B5QVBpcTgwyDniU6nQrKxfTLMS95JExbUXRdso7jyDEMExeQPFNQchGWBk4o5NNhSWCzBJEpbnxuRLcpAHM",
  "key22": "4QKaR1fHLPmR4uK6dMwTZxpZpE47dFK93wzHYWVtg4qJvTidydCyZiJaU2qtF55qkpt5M45W4JLs9qQvJd4CMceA",
  "key23": "3r1HhCgbxRdn7i7wGiZ86efMcjPi84HQsrV9qeHwVBaXFbTBPDw8C61YYp7AKvdBDkzoNbjknmzvBG1x2SqxGLLR",
  "key24": "2tULqVyvS39KtgdBoVU3kgYbwiMeNZN3iCxBrxDcrEX7ZuqhMmqta6emR3YUuWCWkCcMny15W7s8pj6qXAsiLv1B",
  "key25": "5TuaNY1GJP837adZ3cdBXsVHMpQyEKP26QT53yndBDDLMkxShS77xEy1BPU29Loxi8Utxwtpp4BV95KE4cziAqHA",
  "key26": "4SiDFeeLyXedanfCJRdoKs4VGBaSxSd9x98L2CyApvm8dq5r3z5rtdJrNfu5TAZaamh5BXmHJn7oijR16zgHEz9K",
  "key27": "hCYmnyditAFUBwQoWUArswMi6zJNtrzVbmgcqoig2exqS9h8th4X2vYrMFBbgBDowKGea2gHdARXq9HAGksv7UJ",
  "key28": "5h48VWGDb2rt6YgpQJTPpWHiad6ufrN1B4ZJxx48wNVkt1t5ofGfPxUyg9UdfCbD6ZgUo7ye98LVTdYAj6ZpJmWi",
  "key29": "5q9ZyZP6gh5wTRBAVxw9Nk2G5DBNkX514vkn2tpxSHq96EUxRvennRTcgExDMoyreCExgZBecJAq94eHxzyY5VZ3",
  "key30": "36G9k2X1Uiuc3Eo31P3exSU4P43kh2fPjHR8hTTQfijmp1A3Jndn9FrfgpKewMdVo26TZTdPKAPYsEhLFme5pDd8",
  "key31": "4De3M73HMwJK2PfrTTk89C8k5G21vsK685HAmzg4zDeeuo6YjCevHeqKmrQhyA51p5USKW14FmBXBPVk7SwYgvAC",
  "key32": "43Vg5AixFDTV2yuvcw5ZzopAzqSaUFaUD5JK6dyagoRs7UbghaVFLss2BMfXsPcR37gbH793GvNpr3YBQJi1Tsiw",
  "key33": "3RzSAhURpVcHps2QtnYbpEn93T63CTqY2ag4Wa8SYtZdq5st32r2hEQUo5JTQ7CBzRyjCrFjoWvhbWVfWdLfBiyq",
  "key34": "3Uqicnn1NyLDtdBLuTUhrkcQ3Z9VpVZPJcwpmApG1Df4Gw8XPVgMGiSPLYae89Ez1tcSW6aS4CJaGfDnqQmeDw1b",
  "key35": "3niaWVW4BwNm5PK3pPSauJmpKh5UjH4UxbYAqJpRV5MSa7ciZNdVurYeKjQLopwC6K23qsBXuZUvophrMjZy1v4u",
  "key36": "Ly8K8KVg9D1rEoqPuQ2s2uF7nyVW3PdHPbAK2fDmoBJnEsjMssYYkdRosKS8fMQJKkShbGBWxxcCadLUbY9W3ob",
  "key37": "4dBK9ma7qqJKUCpennUHgTzjh6CHsXKSoRmVLhsauuYcaJt6Qvy7kWxrkjsVeAaru7vDJUQ4mbEHprjDa5y8Sdin",
  "key38": "2PqmdWixHVK97B8qEMNfXSGSgzUB8cdsnRLKsbpb4rn15DqzVeuRmkdLf6BzDFNiZA4ZdFh6NGToo7rXzHHiRDwi",
  "key39": "3zAZSrsycdYoJAxiuogGRxEPnuApuLsv2FwdyhG2xxkQF5dP6SPcxgW1TGw2mrHG7oV4RNBv1nvLayzX7raCUpNi",
  "key40": "4EQNd6g4FYhhDDsmW7mtENfCHjDbsU4skuF9hnEpY6o24XzDtxwtC57S8XdPFuB7sCDvFQrjvhGzRyRipW2uiKf5",
  "key41": "5yra51ScXkwSggR7YepJqniWC6M6ciRoksHKs5SkivcyyWN8jUFNafwncEEAkYbKRxf4Q77YbjqDvqfHGnPYD1ai"
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
