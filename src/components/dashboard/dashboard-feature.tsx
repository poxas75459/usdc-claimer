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
    "4WoAiRidLQDYFcMMMDCnvVTiZaoMuHJ4tK24MGHCx9CtdZasws62dcrShYoUFQjFwq8Pt825kWfgSBprgN7tqA7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57L897xjpbbyWTQsPcE3Mq32CnvNr24bdTuCsawCEnV8WtLHAnGG2HcztS9AkfgtLi5agr87kH89SQXUJTqCJuWk",
  "key1": "46VsuRrvgzo9T4kPejiVqvw2uCht17WrVJPVHwHbkoUzCbAtaSpqDXBdVbD6r4G55TMJWZdd5ZUm2h5kUSrvGXP5",
  "key2": "3AVdC1HrhwqiZ2og8Eu3MBVrEFvMTnjEekcMXq17frLguZ8hz5mBak6WBQeSufNwDz9gHvcaG7GaVDzctr3JwGs8",
  "key3": "4ongQ8C3KT1PEoZEUCThVAMC8bhm5eM8qjKC8LAhJYB6vDcWPD3WPA35TLM2NBPGuov5K9swzeRvncdumdzdggRF",
  "key4": "4hC9k48T5b5B4eUFbjhgbsFmxfWDEGcgRszdZ7EA5bTH1LZversgGwsYaqYhVSzKsTLvsxwwnHgtgwnnyVKi3bUH",
  "key5": "3AmKqZ8sii9JWwsnuJXhAjhVExZ5Ddk9nbAwmvFVi5PQG4JFDNdd6Q1V4q9aonVhSo1UKCt9Hp4TbnQ6tMtMk5y7",
  "key6": "3EpdAMVtyqCgW6otMVRQBdP5wJZEUsx687F6ZuxtHaJ4HccfZjSLbGx4MGeHJpiFL7pPouap69a1EQWRd9keXNcy",
  "key7": "2CkR68ZvxSX1ic7wHQY9iDLHJqHgNU1jp1V6T5wj196ht7dPeaLQ3gMnMP8c5U4bfGsShpyrAhouqonBunXvebAw",
  "key8": "3Jwb91B4NUvautGKzF6jwoDY9RJf6rftFqp6gKwWMos93ZU7j1KkLpXNkggCkWjTGmfvrYoRUZH6oJPFXWsER6LP",
  "key9": "4Gpu7B6zLcZxYetAXrjy4BUmQXSPcmRNZF3Jc1zKjcgcYLKt96VVyESgC1UbC1xbD1YE4HQWquX79X3ffQ5Fu63T",
  "key10": "S3LMJ8Fpz6wmUgL8LSKmZkXiJHdvXnirNisRxTDWTYAz5LZzbrv1pYYVBcHQFrtDu1G4JGQQBUicfqxWKPzQv3B",
  "key11": "2aCqZapNSkqr1KDVyrzPxVKhzDHzScWKqgvZXGGgbGWRfEwMQh7qRrYdBJKX527Jh5WrKJjrGfEgXqfGHP4D6kzU",
  "key12": "5ri2trsfz2obN8Wyy1eRe4GroRmLKZ4khmuuxqaq16Mm7f4WPiR5DinqD4zVX2JBEvsn7nmRzX2MxsnSBwEN58NF",
  "key13": "2gASWgp52VXfxjMSkwfsNisGuy7WeFJKd22zdR1juzDhDHjLDicPrD3LDQprdr1M8fNt7B5hSBKGtkEKfH8442By",
  "key14": "2U2BjeFyCigp16v1TraLQMrWkxnqBq5b2fT9qgSFeHE9h3f5UZaC1e9feR9JtFFgxpzdRxwgB5BbYWZNxQ2nefjZ",
  "key15": "iohav3qCoYHHUWbjhHhtRxPGuw54c3z6rqwZm1oeEvvG1SFHiXP9YDEyM6bkGvadGTFA8gkn9B8Gwsireu1TXRe",
  "key16": "5mZr5d87gyGB7JcechZxTqYX3nMEtXEkJBMZEyduuEN8Xpm4oHgkWCdzziqa817abGBbzHY7EHA5TucggNVfMXnu",
  "key17": "31oXdjFTJuZ5pZ6zAZAWvuBZqNznr2jqJHS8Uja5kDYGSB3MAvc1VodA2FQgBLw43fT6ae1YaQ7rHDnXz5tXk3xZ",
  "key18": "4gNMNr9zE4E4GnYTJuGCgxQFSf93uahjENHBqp33TfKzAwSHHJtuwAa8WcnqD97tHv1YN5tvxVWFkQGeMdnULP57",
  "key19": "67SmNULHovgPqsJo66ZZ8PQo5X4oNE5hoeCwb6MZonewyke4U9z7SR5rD9uome5Fzasg4Tk2aeV8Kbsv5F9NpZq4",
  "key20": "eHVRRsXfYJVEAV4G1sJFPKKutFXU4s2NeGGX51JFXxoFDLKJx2v3K969yaE9yhS9Avj1ADAQ76KmmPW2tq79VCZ",
  "key21": "4W1XNKmedcktePbBPJCq4rJ12EvhQtcEgFLBNudpHq2f9SSE7SGKABZRLjwuhHsaVtaHVJn6tDL7uryWzmwC54qr",
  "key22": "3YbzzHFzgWJFj1cjeXvKiYTESBB6rkMU6tgvAezGSRxxKpSg71wEYFgy8fp4VSwfhGzMuCoqhXD9DMhJt3ujCu6a",
  "key23": "4xN8ofvV1CLjqxogJV5XbZVggWaQvVqHYunsScrDe2psA9YCeZ6BnnpW1tUYCyvPnQc1pdGo96UGpcC9TiHzcq93",
  "key24": "e7MKnoQkbDJ1Qbcp29LeurbrRfgnmwLaRKvu16KAuo1pXR758XWXcdJfmnmBi4UpGpQ5FEG3kbT8bt294HzfdYR",
  "key25": "5yRrtHyAUatxFZeqJt8rJWsMiME6N3QGNwjrUrBWKdRsiacyVCi7MTw7KDp9xSqjK7vpnoMP4pNNChjZ5XDKunCp",
  "key26": "oEieb1yJh8GtrsR6rwvAv43gCiYdyqJDs7SCCBhJoPEXpqQ5UGU4cG8L24fB1pLp5scmKWSuy4e9VvXifPXoEMM",
  "key27": "4Q7HHTpwWmWzZdLWfMfLRLjeMBEcDL2zBokT5jUZ9f88BfLAfgR1fZ5LAzawAN9YNmBRzmThZPSoUJ1eyDh3RgMB",
  "key28": "iXDEZx5UwNzZTaQtR5KNuV2isDdETdA2ecsX8uP2wimkyssg42ACATBibfVK57BRoPfb53WbJHtdjVMBPoNevPT",
  "key29": "2byZavLTY8cv4xerQLVBcYa8xRhsXAv123QG3iyG2e3Hczoesuh72C1pXrma1q6NMgAzncm5DVrhgukipFHo4FYr",
  "key30": "5v9zr6tDhzFh8cwwjZUBcDuhrw2ZpUFv8ZcxRozYZLTQBMXkpa5H4yT24d14bpdSnWUQGtFBMqY8u26xHMBkSuRb",
  "key31": "3y5Qep9dCmfm5viq6vXgwvp5q2Ms7aFxjRQUHozKvsSB67m8kmi6RA1gHVS4dNnbDHqcKoMnrS6DzC9yfZiPiE5z",
  "key32": "3jtFUPr5qYnxkvLsUYhifJBAyFzvTpwSoa7TWoEh1Yer1wq7NKMVRqqf5MpkafivFahWkhYTfjG1P1uV1mSyHfRJ",
  "key33": "4sFHGd1i6GVD5HaqqvBbqBZKETie4gdfqnCP1w5enV7r5uHZNgFSztATg1hLH9P3pRNkTdMurbSdAnLP2DuTBfgm",
  "key34": "4EeArfJBAqxcfP9NAuphaAYHXimJktGnBU9R4PYmqNebcp4UaBNjeP6eeHEBgBefuLyxw9rwmFzCAzA2HHuU9oDR",
  "key35": "2Z9bJiNdpfU749ZTF6a6RN5eFGEded3TXrEnY5Soo3f3Z16JZemT5oo3CjXgaiUVCUVvvSniVC8ExA5ZsRS2yJ7P"
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
