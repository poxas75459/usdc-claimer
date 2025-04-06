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
    "24272N2w72FcBVkpz2VLSsK63HTJhYzqs175inZeHqP1q76ihvKYyHuysnBLezzHkQuHkHGpFVwME2KMahySBubV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mCw68rXztDwvMXqaCo5iCWgq9PXzNq6nHyhHgyAjSUdt3j174nqra4a1bcz9BZrZwWUVazZ8BS1Fg6MTWURCPHT",
  "key1": "2kVJWwPd7w8txyeE211pGyFswAxCSdDeVTdnu4D3pmYfSQbWTc7r1TtwYuhJWEdHXt5Ff2wUQjS7YZNj1D7xD42m",
  "key2": "3jetBv7AcPDgYmwAkTaLWmJmcWe4MZYJVDEr3jFTewS86QmCNxREyTSPPhmah5DdtRjYNm2r2C5eBUqU7X68QLci",
  "key3": "q47GV6MHiQS9XX8zdknzuwn5itcw3vBbKBj1TMfKcSpcAUr62zyAQ4tVwzCF8o1KYDr2oDYakr3R35X2G8UX7dQ",
  "key4": "5jai4M9KtxBUNswrNK7vUkYUuifG7t8jQ9BJTpjLnbEYctpm2RHJDZykAnDMW3eYgNH57BGo8jrgmmTj4k2yYByT",
  "key5": "5j8vU3SvWtbWXeWBrp8wZk3H8qNTNjJ7r2ogn4YWq99qdN8k7p8zLYxyNkh144EXqMqMAV3DDoGi3U2AryF9HEcq",
  "key6": "326PQWRxTS4thnGJBj5YAg4gusSH9gu82yPwm82xKm5YrkM2U1nYb6dEs3hvdCiQ8ocsBrVEhZAf1Nk1TyshRhXB",
  "key7": "3EwQNdqbeDa6woQDZeezRYz7P5ge2ABcxM9cTBEv4vCVY99zkTX3vLwdcpcYaLz52t6V1Gk3NzmUeksv6cV1gTab",
  "key8": "njHwYFe38LT9huE2f3HUHZjFDcMNxKZbmAYm1iNUBHZd8CmDGzbEnENG4498NFmrhWF8dg1gxK5AenQjbWefYYx",
  "key9": "5vznk7ZQxjFW45JEJPke4YW4p2ppmLXKueweEjvE44RkYEsLGkwErMX9WughvTv18B1ugUD5zqMZqC7DTDSj3K1r",
  "key10": "kAvAC9SjqAWc11HjWveTyr9ApygraA76SFFbRYBM9RiTmTY99cp8cyeCpnYDWRQiW79wHurZGwPudHYKkyNynVz",
  "key11": "47MMHBsWc83646zo1v2TzExuz8RDGJuv5BuH11GFFcF6pcwGEHqdDca5XXFFgrcdYc9Z6UoTcCh6gVSfNo4mk2uk",
  "key12": "3MoBcepLmS3DAXwsFwCMnos39QZU1V5f2Hev8TXwY4wXHmUe8MvRbimJ1K2AgHrpaZmCdHZqiw9Ga2bpcV7nkwrP",
  "key13": "4fPQV3uX39UZUzzoRstAYMkN5Q6H3AWNjcHr6xRC2JcqfSEip1F5HaWZnj3YDYn7DMhZYD5Ch8m4eDwoxpc85see",
  "key14": "2BW3parsALA7He2wvuJPPZM1phUTrNgd22nKk8Q9WdT6GT69Y7Auc764z2YCV7mXfTh7QW2heJhUdFgnaZ9TsDRi",
  "key15": "4AW9cQg9jELgXksNUy4neaLUWymCoZZKuLB3oSVVhyFz1356LfVEa2vcniPvaxceW3MzWvYmY8VY5Ecu67rgXzcJ",
  "key16": "5gWvMavshz2XhcLKuFaCt3mAp1sWScabfPeKbNX6BWBAvV4h9BYmdHxryc1H4gao5yXVA5mP1eCStL6GcHLr7uR2",
  "key17": "2KrVmrqicWGYzBc1oBwJe5yKLkh3QDgUrkWF8B6ipMRtHqo1qbZkb6TwjCx4dpSCdZ1Zr85LJAH4ZgXZmpUPjkR9",
  "key18": "3PANtKya9VVMxiCXYKR1bQphQiSe7SJAraPsV2q7GMUHg4CNsvGFUCqomwTaxzt6Lo9H2JpqGSoR4nYd4veXm6D7",
  "key19": "2rAnaXXDEdKfMS6E2THCJ2DFGh6dDsSGcC8BLBrnJX3xFDsrmVQwXum2GZM4kA4QizwWnP9VGB3kW1sj7j3z85ks",
  "key20": "3sYytK5ahzR2ystM4Avh18oqUtHFW2kWzqwpNHAXAL89fEHXSrBKq4kHtopB4ALQfohnudSVdyPQQ6XGChVPgErq",
  "key21": "356ZLCRe4fj5Mo3uBzRHKDamuWV8BCBitzCRRSdHcrDeLER1LooBjD2444JmCkjwXBpnVe4JjVD712cbyYNSSpdf",
  "key22": "232DU3hR1BGQiFJxaCTxpzyf97f4W9DREWfKQzgHpzQmEvn8UstD37k5WTvP6duBuGkMToUGCzLwvD8ahmqPwQRd",
  "key23": "5A9umBFZAyWS5bMSooyEoan5Rx6RWePUxhAn5LbcASeV31KKUDTBQ5LKJ3G9qAC2XJpnsdD9zPJZ6eP35UiqKHot",
  "key24": "EY79KddxC2ZfWiLxbWjGCrazkjBWGuh5RjNokkkyJc8ZdQ2wwFWTerEEPXXdC3zwCac6b6LN3SWDz9W6Uxv7D5c",
  "key25": "3Q7QBR29jAm4tbMos6CMDfWhJFGihfxnCzsu5AFweWW9i4W1xuBXrzvrM16nSz74gcaoe6E9pWestYypWjjuUUdn",
  "key26": "4KSYoHeQNQVk6fhF5c6kzkhGqCmxRzdb7wYo8iciHwrcG3rAprDXt2BvK86dLhcUJ1MW311JpzFPDsStxXW7c9Sk",
  "key27": "2kzMaUyH2euEB6WBqAXHLaWBs9JNewJTTjSbHfN3Mbev4cpHbqfcXPLNnuUZ5JuCkgexCKJiqPDgGjm2Lx5tySVk",
  "key28": "5ajVKPuRh3CYBYXAusyhC9JwcmsRKohMbWp1BsrpdP1PR8TTVMDVQKZ2iZnVkeAHMCuuUySBLkdqPK7ZLedw6Mnw",
  "key29": "3BR15phVX3gXpKu8xd4zNhCtfZcnoxaMfHoJKVDhFwnMpmujtx5YiW9F2dBhJ4HBMmZg3zodnP2vSUrkm5veiR8G",
  "key30": "3eLR8Rs3CVcLrAksMe4svXtJLdUVBwBydB1W4AyhZZrsKUtBYhDwfH8panUbyMEka2JJe7h4Y1q2sobcqBdXCLom",
  "key31": "3hiP94Fmjw3psnKNcfKrrmgb3mzgYFX5tgkGzfkbRXPzWswStzpJJmqv4WAzRRT833SWeiXfj5khQho6znNcCgiW",
  "key32": "4veSUcbQ9ZHj257mCZpKW7ZDdMgVLBCGguAHHZET3poAUpDP1Ma3CtQZ972B2ZiGj6UMLy5dE25VR4qW6GVCvjtA",
  "key33": "2XP7tLxSs8d7DMZLP6K4qyy3ZaE1KJQer7C6qMRwxkZW8njRPuqr4K1MiDFpVNKPuBBy1iN6vmF1WU9mCj8o6Wfv",
  "key34": "4vcTF7yMMHBGnBPQswTVqWFYKefZn1GbtmAumrbQLeo4oWkh9EitEfGRwD1QmYQSpu7enFjyf8zrYybN2sRiHCQo",
  "key35": "5fHEnYNdqyHouUryP8GPgY2T1PemNcCV8GP8p8JrUW3UK9oa7KNATbT1McTgRkUd5eYUipRwpCyiWmQAqAn1o445",
  "key36": "276AgMUUL5AU3wkPMxZBy8VAhv7Cf4bsd7FZCBQcuBf4P2UKNHcAFpw3t1Axc28kLzzpfKNPzGD3eYdFzfLhEF7N",
  "key37": "2jh2F9YvR3XK96UCJVgGPAwB6wtCFT5b4JqYLGzLF3aqZayP4f9M4f1ZxknPaqEKMoD2VTbTBP2Tzu65QT2TU7hh",
  "key38": "3cZ1tXe3DhyguGVLes5Eo6q9JwXVFDWcz3rGwV2XbAsY46XbXS1jwiEVECm562f3RzuXQvDorX3ra65yydvWJRht",
  "key39": "3e8PnS8QzKSx1h8vwZi8vV3k9aVAwn74t8ijjbKUPqvPkN5iXyGH6sENmDXRTEcfjDYq7xY1AqU7V8DP6kTxkVRs"
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
