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
    "2x4ojakemkPYP7WzuQGzoEnJFBEPjAHHXN8YE2m7q93cbB5L2VdVLQKNo1JatG4fUGAXL7UukvXKFXxy84MLUNdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WF9YNiJuvAphKdNsvXRo9pzPDS6vLstbf3uNyQGaSc1DyJBjcTP8f6ReGPaMXhAwce3mhWkoCYhk4frWtY4hjL1",
  "key1": "2H7HijL5yiAxPb9yKb3igqQFRZBCJfCsz7i2uXritpYtgrktB8m95wGZuvgVhyELRB74xt23yu3rtBszZ1Fcfw8g",
  "key2": "4KCNv1LSddUHBXM2WsKGBqXXucxsc7dRUjdJBxypGcqPcxwQus6hbB6dAdHf2ELZSGdPCkVFcjxhDRuwnHG5S8GZ",
  "key3": "2YqTk9CTWFDNk8Vz9MSJvY8UJZi87H6zC8d4PMmdcZkeohVgnoV7jwV1mokwrwb5FMoZZePm4wU9jsMdAvuJPvxg",
  "key4": "562BgecCKW9L5nNC2TA8LEzCS7zukQqfYECPPbgFqUDJbi29hby8TvgjNtcyDanNFzLfYasaJU82Hzfux3fhYV7J",
  "key5": "tLx724HgFuHyqhU1aZDJyJC5YiFpoimA8RuQwKm4p5TQVV5nXC9hh4vCaPW73JRe31Mb5cBy9WTY3pPC9FB2RUA",
  "key6": "5XB5P2nmJMWbFYWm8Dx1j3bBpnRkyiHWAseC8SpdKsDycNFkm1JmLZdsx2u4RzN2QsRWXxnJmbafnWhicbaVzBVn",
  "key7": "54UEPdqvPgmb8Vj4GsnwFpBbNXbtvu8G86FvDVKB3U6uXxYvVBw8APomfhXqv1YTjVHqAdvMZXGHDAQhCdK1oBAD",
  "key8": "3wfCDf62ivMJqyLTL5C4tyvELKAJ4RQ6YNhJGQQAHWYsZXGW98WCXnpnqL7PpwhvV57E6uHm6vmmJmPVF4yYsK9o",
  "key9": "2gJziboHF7qdMQY2Uj4yLWHHRQmm69RqgVvWYecoTyQHDfQ3tgFmVs5LwctPqtUADGMiPTfNRHACWQUDA3YLLcS5",
  "key10": "3LFrsmiQu2kk2NJ4o3Bqeo2Tv5Z9rZFYSeug22HXADKuQcK2BxM1x7pWWrBUJRtFUS6gTZjt1UPgBHv8Rn4qs6mv",
  "key11": "vwepnsVSqRqsxZH5JK1FnYfUNehUyR9YRitZV8xAym4qZ6G3geyH2A9ZBkmR9abScvEMRvtFHxg36bahvXvZLbU",
  "key12": "4246FhxehFm2dsUDYAEtdW8kq6Gwp9qrgm1sCuZu5D4brRavSMgspEYPtmGJtX4fRfBL3NS9b35CoWkhdhQwurKt",
  "key13": "22p7XLGE2av9ZihjmdieDmPcvXNWrkPGPXgzLAjA5bYGQSCAKDeDsLMBRU7KQ6U1PGWcwmDSHjVRbqXBPti84rNe",
  "key14": "3NsJdksRSWXcUnaheK5V9eq8gdS3Fv5hLYbAVjJK9DFpp2dy9DUJH12BhGmPuweA5RGUoMTLWqz2WjEi7VfZKatg",
  "key15": "3NQq2KVaHhYR5i3XC2w4zu9AWweq6nrBMFiiE8tdB3riAQxmwgBSLTh6TKLaR8BXWJYg11f2NBecfiYia5fErUwD",
  "key16": "33X4g22NKGcXdHJBQWjQ4fgsZaNbAW9BFk6eeCnqLTPPv5TicdpCJUzjixYYy6hA1C4U1RGcYgvrrXzUpJhLJwb2",
  "key17": "3r6ZMEXThUHWrSBSdAM9SQzJfw7Cmidfik6NnGQg9CUQYLdT42Je2jAezdtr2LF6is6hvMo1m6p4DHSMRnEzAnyJ",
  "key18": "4NPjdNaJ9gMxvU8pr8YekCYuL2xenFgr4CEYmJgJHTsPwLhAoaRKV8aPdv1aekyPAp4WX1dhab2N65fCwqCS7S8r",
  "key19": "3Cv9bWAu3GNofjp5a6KLMaSdxtmhFgTCsHBgSoj6SZ5xZCr2gv1p3CbZVacYUK6TghXWP6BpUJuFqnmGPQd5516u",
  "key20": "3wCPNp1oMa7pY8PLrRN61Gozt6jFqf2dFdnL8pZ4fctWgwcFSyXNapbT1qn1MJyXPwT3QTAj6abx9gom2Xu7Ezm4",
  "key21": "2WEzUXZPpvC2jPcxL5RXTU3suFgUHZp42DhWby1N6XYT6Zh4MvUpyDFQ8iTpsqMZJWk1UbTC8ebDuEbDurogBr5A",
  "key22": "vsHuLJNRx1xKfgoJxwMeJ7jBSydTdR9mKyH69rfo5PaNS7NmjGNBk4JbugeJaDW6Spc2hbGJbsp4aZYUwWiMwir",
  "key23": "32Yi3rFivNytvfepskuxUwE7X2G7FpGRKtUyxoyyeaX9K611gk8R6EASGbZJgYWf3HrQTYjxceXjriZmDMARMSPS",
  "key24": "25fyGn8p82aBKVmZJANxDCoDUHfYTQ8x1uHpHjBU278WKAaSywy5cZtLffqrxd1Apxm9jdCjsK2L6DDvoyZhuruf",
  "key25": "36KKaJsQfv7MVAdiwqjtou1EtkSYXAN1GfcPgchDETne7vF4h2nyKMVcxsjZZx7YR8CGwX1i1jyAiFxdPqd9vNpw",
  "key26": "5hVNr65XCbS1oQ3FGcUrxFpfdQAWzuFrv7ki74R1wD8pGqi5fuNCieMRStXMERHYrhCuMUULXoWnZfswqS4XoAUi",
  "key27": "22EmWJzhUUrTJd6itLha94GEKQeta7DE5iHZEmG424EoZZJxhVrqbgBFwFnsPvFcLpWnKvZ9iSjvKJQU1PDy2feg",
  "key28": "4XdqZufjiGMNGTStzSpTCBeqSt1FTrArgjbhZDwic4ykcZxTDCt3eDege8CuXMagxyjowx2N38yNQfRu2jJrD76",
  "key29": "399vova2HVL2Npj7siMxvWPSHjXVPZqnXBuEskPB3PZp5CH99rrF8UsEuZ7NGffFA3C7QNCRtQpBRtsXCffzMogv",
  "key30": "39LMrNqwuCTZoDxw5bRD5qmsH5yhdBmi2ieUmgDSsCEAT51eec2Qs8NcK1dJfFZqYk3M4kju8JqPVtMobvYbfN2H",
  "key31": "5VCEDShymDpE8bB3naoKjEJhbbWhVYAkqkoZbzjwEEo2BbjcMGFT3TXLKTo8bj7d3DYswAZzJ9QBEv9g5YygSPKV"
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
