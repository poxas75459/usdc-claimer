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
    "4KpKvs19qjgX77CmcWR6csba1zi3whopodMfhq2Dvn8x5wuzfsvtraiN4R2PVRCs4pDzvbw8dpfWE9GuhnyR6XtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tpv4LfiLfrPBs8Ga8ZtB3daYW3EAwnmEvwJu2KW2kBkaqPcFrgPvw3BGFjpVzscDoQ6JJbboa6ZnVAktVsLWp6d",
  "key1": "3cWEFQUN2z8ZqDae6kkVpVQj97Mf79FchPnqaj6M23Fp9g9B2Tbf6QcNYumVs261h1wXQ1pYBzSogDV1BhDKPjx1",
  "key2": "4fCHJznoM6N2tctkF3Wa6guXSq48WTqXZnLx2bpUvpuEn6Yp193TShX8MyCxc5zCnkc3PSvqd4LRXcT1Xon7QQuv",
  "key3": "HTLCqKbsRXvzQdk6bovTFmjn86jDDtmiTewXvEJdQTUx9KojthtdqwNq3dukME3wYR1iyC5dzLfbqsNwqxSiocP",
  "key4": "3P6wFDHoMcztk7WWzaUvq7CYnZM5dpG43r5B67LU6WVNDQsBg825ikLJk8ZVNgjpvxywdsofALsQHpZqYEbx6Qtg",
  "key5": "3R7X9MKsCoRJ9CeUDrFTU8iN6q9wuYzKRSdNNzGWLUSgBtMSwSv5c3SymfbfNefvJ3vq2ZvQSceci6sPax91vgsu",
  "key6": "2q61irxPpbt1Mo8AUeu4RkWGHZY5MKjg2XoJxALjtCjjkeQwH9kF3Vs1s8KqgfiobCrmc1xweeJtdh2R7VGX9UcZ",
  "key7": "42iWztmaWWVe8jS5sEtZAzVDcVUmQJT7mLyTBTjaZUUXcYUAskVpU8da6prPtjHCM3fPo4WdfN8MsosNrtbP1wET",
  "key8": "2VL1WeU2jXLiP3otDHPbdxj7va6TdsFe37gA6bZQUBF9bANanx6bE3bdauzrwvdT55Du5V1PmRndJk637bpQvWuu",
  "key9": "56eHqMuCZUReKN1RLmom9iYjvGzGgw1UfedcLaKdguTqyUMjwLGceBwCTxdfTkrjtE8gRDxqh9UCbcDjojagNXi8",
  "key10": "5EL3nAkQGmhBfToxD9Ai9tYC3yNDp4RArXQwgQcHyf1iMLdduQfCfSyJamn9Pxt2zhACA6UuFkNQpqeVjDeE79iQ",
  "key11": "3RSKwwJ6GxVTzTHTmfSi7GKPMm3cBL47RFKb1qCd3U1CRr49REmSHh4dWesXnbCWp3Kj5tT8ZYeSaJGvWVZpafoW",
  "key12": "CfriB4iXmNYV7N45DC3wVP5zwJNXQvBnBxAvYoBpXnBoHy7QvmTyQj3qaX4Zsbj2kjDyP4hGVwgFr7QoYzFdPM9",
  "key13": "61qwtWGDRowekjQxDMa9noWHXf9vDA7NULiNgBFA7Rr1krYbe7gNKwHcVtoX3GQAv55SdB69UsPmGsxNbFeWSndG",
  "key14": "2hFbBi1ozgWPaubRK5fF9aJVJngC6JAXQEam5PkdZT6N4bQY4QzunphPx8Up7KDMTuu1jYbx9wEzYMiYErK1vgff",
  "key15": "3DY2ZYYi6Ph8LyvWEeuuPmksSsXoZ5nYDCW2vLHbvMgDCxBx68ejB8pr7mq91iWnkDHko6xDecuKn3rkqHkyB4ya",
  "key16": "3hMf36RR8XzYY1HFxXYEFm5jWweryuUitA2be1tUrParnHicA8GF4Vai6EAauGkusTWv7TgZRD2hNnBk1jLRU29g",
  "key17": "XPKptoCauZMkFzhbcacT11gqGH6vsroHrRc69wmGFYjHGsoUG1H2o4QsdMpJDgpXutpz3CwDmR8Ny55MYBuRLsW",
  "key18": "3JZ49uZZiaCiKk5qBrEzZzrZZAXBdUbocNonMxudWzjisB56zWvSybWQL8TQArGc1kJ2MWsaRrDwvktN5Aa1z2Zj",
  "key19": "4xkPqWTfFwgVcok5G1DrpCkWb3v9stB4hDRkPQGqfqkqCCBrACY4p8yYNmkPeM6kZt1jknhEXehSQyeUxdVJWShA",
  "key20": "XLEPUwZ7YLQkBtyMAuNRmYCYjF7jqHdt56XCP3dofuZpMeopHda8DQpSUZjULkvfP6NQJmjSoSgQJ9QxuHfy2TT",
  "key21": "48LfKQz9yX5JTNMjZhpjt2a44w2ttdr7Vss6V3wQpHwrr4mhksNvkyGfSoJCYwYA1puAjJ1VZfPAKTdEL4f8UdKx",
  "key22": "3mWaDvznD9m1TKQsmwRKPbajq2Ed79urF1tvszgMBVSf3G6VWwDNV8UVGreN2BVwt9GGQ5tCSDX86JVAqSWiHzfE",
  "key23": "Spk4YP8QmrWGcF4Wm5UPo5RqjjNh2QHeQHMumLWqNRqVe8vzsmUaXomfcqNfYyyV9Fj5vhVZjxunZL7Je6Jrifn",
  "key24": "2bGdM6S2Fr2KecQUpuupnjv3n6NrW44X546qcEFD1bTRrW3VBguwFokF6zrUFQt4SzAXdX6ouokUR4V9Dsn2GJby",
  "key25": "35QMmkjLoQ8819uKdJ6QS7uWXE5UJtLHXx4AxVL4LyWmTro6PxkdejEiKoXzrxdXJniGrQNVjLpoRT7GnKmUMQ9M",
  "key26": "bpfER9F7VyttYs4JnR1upKt7NPeU2GnaL4788etZxbyD4T3xLFyeAgh1PUMwRLdGM6SbHH1xc8qK6wG5NoELZT3",
  "key27": "XFzU1GqM8r1Tkt6ho7P8mLHNQ8Ju3CcAU1rdQaqUccH2wYNoTUB7ktYHaLcqFfM7e6dXUAg4MagttMx2po7F6nN",
  "key28": "52kKVFCRoA5xVTtybxsStCVMh3w4rCVYFt26jLh54Mt1edv9Xyt7zvVjfB9UM6JpjwvKuYAdszA8EF3dggFhgcTc",
  "key29": "39FaCbsn65dZ7CepQtUkXQTj4Pe4XGdPpxHQW1U86mHa6XM8xZX7tyRfSxWGmqQS5fZDY47tytL2ouLaL66229mw",
  "key30": "3nFkoSEPe6kijCAoKsqmAtcLiLAnQBmgt835UVWrnckNtjFxfZDqWvPCtSkLz5rtgovMZiiVDuZXWiGJZ6sMhG72",
  "key31": "58kJEQaPTnC4GjwhVTJUfHhMtZHNduBTF3rcW13JnbKiHUmVSTdYtzcgsxPiX1tUwDqRSV9QYjZP1GiPwJ498KUz",
  "key32": "2g3LnLKHTq6MDgaRaowdKQMzwA8oc8DRzRCYamuWmTAYYmUm6tETRzSipfJDJppdLd37api55DNQX9D6xzaakiYV",
  "key33": "5xskqtbiU4gMv65qhDzD64MMpeZ84QyEueQj8ynjBzoFCxjYnqZWwaoKaWpDRq5p6o7tjva27zxVe5WzY7bnvywa",
  "key34": "2adska9Pnf8Y2xBiqMDrZs336RCQtLvVFMJea5N7Ydf8BWcc1KEh3gRLdBC6fb54gSctYr2T2J6gEWW1iFougLBk",
  "key35": "219XEzuUVZaZ4BxRf8E5kG6iWjbvR1KZAUhEbpBxEbp1ikBXB91Y2c29yTdMsrmTzfooavCi8uZo5zdKjUjyxPbW",
  "key36": "4zaHVGqccGHHZGktXnZz4pwW1dF6vencE9cdr5rhGbT9SHAFYPfCxsrC19VX5vATdRqwaQXu5ax5sipUeqrKqQrP",
  "key37": "wt6efAPKYoUtzhf5sZDWV3dignQXSVcVtQ6YNv19SCBERpAmuqEKX7D8d2rWCeLj3FrD3ikuKCKW4aPSWz3kNS9",
  "key38": "2knH9rugHqqRkV7Feb6uisPzEoXjPvs12kokNQxida3pw8HD7SQoyZ4Ba1uoQNG3kesSY9xue8mmmr1kNS6UhH5U"
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
