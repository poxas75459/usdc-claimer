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
    "qTS2iqfSzBUHV5qFMb2JmpzRamemft7SnZ5tPpmZrpDmkSZTC1GCz4QXPnnZEC8mNH7MMshxmY9UbYHckBaENL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MHEbHnHsKBFx8GcadisTdyrQEq9Bibt9oWU5d8qFvCEsU2qw66nKjD6zaDA9FJhvEf9BnWLx7jPmPL45S73fWRn",
  "key1": "4Qpr3379DCedsP3fEtxVTHZLSw5ZSJjYEnEzKrTahJyGgWDbhDsx1SCq5geM8KTMEqwZC5enmH9P96fQb94sbXV",
  "key2": "3ruPzquQbJUxJX6QkPMzsWpnNp9poFpXugSSWA9Gs5fj94gR8ARmCySTkL3igYsT4yByhgUDPNBnNcAXApmBF5PX",
  "key3": "2uMd1brKQryFuqMgANQ7oPr6bKGUr2dGjtQLzxCvqbGKE8i11LvTkRx1Zibz3fdoqw9vLer4gYNjA75f4xEHyjsc",
  "key4": "29eUzUibQF9FXZfRAnm2JBeDLJz2EjMhUxdZLVJKZcC2XBFHYM4Tj8VGLCq1osYBN2o29tQXni33dhbQtDRhhsEr",
  "key5": "57JYCQw4ethX43A53cJHbXreDW87bwHDqEvJ1FMiEN2u8uWMWfbKZzz8eAZQNKYESYjDeZqYYK6HyJxwr2Gc1VSv",
  "key6": "48gCf4PiSQdQGet59PJzaHxBAyFFUCEgWh6YbjYhCExBjMzoEsErFTvHXFapyM2kXuK9DMkXEe3crbEoAUB4YTom",
  "key7": "3TmkoYbaLyUWTqvXtKwmoFH8z61MmaLcd8gr6V8SjpwekHzdmap9UWjgkaPzk9vMiX5gi1FZgccy4n4NSCDRqsiF",
  "key8": "K5mq7xvM7AkkqqfukQdm51JKicKqAKzQCn3qsJe3bPwMRGddLNvJ5q8e32o1GU5yL6y4pNiDG9LKDGEsAKHdmW2",
  "key9": "3e6yE463xnHJZnRUYDC18CbRb615U63schCzPLj9PgA3EVTyf13bg9zZML1j2QDFHALL7MXijU25suroCU9mGC7z",
  "key10": "3R6PsCxgumiAHfkvhdDjntQJg1jrcX1CL9UbfAv5LokkerDjzgZijDRCYQa1sVWM7mj82XnRNxDfLANVEh8MsDLN",
  "key11": "3p2Wx4uP4z5R9rNUsdzmwQUEo2GCo63WH3dTPmwHuYfXtyxPBvHt2Tr7Mz8XCkiDwtiRCVZzaRqCXZyyUbisngmN",
  "key12": "2TU68UxgazKyT8AyKtz6cDyVUCjETvyjPX1fRaG7s3Uz1AkVsee4ve2bKn2MNeAYXwaUobCSzZL8kG7NHhrbEGzd",
  "key13": "31CACt8YCiTMbqdYiM1H65wR9iNA9K7Ps5zWF32YGG4S61G71sd2tUrne8LuXDrWgzpwuKh2iZdPsCDNWEJvNnVr",
  "key14": "qrNk2fEzGcq3FvXH4kAhjFgwQYqHxLVvAkTXB9cJvmXByA5tWAUuMpq88ZT613NKQw6VyP96fopSCWg7CXnH8KG",
  "key15": "2F4GXMqvSwcqHXJ7sJ5XdJ4jhX3YAs6iKLhSpXjGqSxpTMMYtZuB6HSrNmTqWNpcPvdG95Xy9sR2arSk2QmorTJz",
  "key16": "5YzMxDSyrGSCSjVXxuPM7YTAUtYrCyT8RD9e3eJmtY3HPiWeBjiQfTD9wmq5WjRRVWFrQGUT3MSEMJKwhgTZAVxE",
  "key17": "QesdepZVV34mZaYC4mR9DRTiMRYnnqVSY8u8S2iRUeknuBzjQ5orC3kw47LVZkUumaX4RJ2zpqyZGyfhBSX7icc",
  "key18": "3rkLdgi8MYyC2jxQGHkVwZ1MdwJDXhr8oQ1WMCjntpdBrZVEo9CtTkzTccfPLcENpS2Stg6Hjhbv34WCVrqdvAx6",
  "key19": "5iKXFo8e1zoaiAWFHRLH2EJNZtDTvYXr98y7iit9W4GxiRwbQkFr9TchMKo4CDQimbsCxVJuShnmEtrVA86UB2EQ",
  "key20": "3LXzbxbCPApwpNUciXb9YWUxneszyM7WmvHSRwX4LoSyJEpSHCh9hjawQotE4chH1AjmaH97kdQT3e4Hu1RPF7W9",
  "key21": "2cDkY55EziYpdVHzvNRgRjKpZfKVn6gTf9Zg35JeyTYcB6igpLGMtuQaYaDKyhP2oBmDv9nPqAjb5AXbQsX72HWF",
  "key22": "2enQhW9ZCYdk9eXwfDJGddASA2xeVYRgmUzkbeqvqM1uyPu3aMrXnLEMnbr896YFdiMJ2k1hbvdtbB5Hob4Muxms",
  "key23": "4HyYRJpjLZAVBwRDpYuK2cuUcuo17ikufUNoxHMb12xXS93rF4wyjiL94DEjEBGDMF6nKjdkbNdFCNe9PGTTno4p",
  "key24": "2Rz2f2RUhC5NCoCeBEGRcoFfQg9H2Ej29hBTfgMiu1xrqrK298FqHaSzQoFgWSQTGt3c2yddR6HTVQzEwZHTze3S",
  "key25": "S7sb3NkvkLFTALeq5oQdj5EYwq1xmtMivmgsx9WeXUyTV9e49uH3tqqBLc1xGuwpMX9kSzy32Ngu1o1ndELbtbr",
  "key26": "9kr239oyqBu6LqQgHWJRwqbkCRgECGy6dY1LsME2aoohD7iAarJi8fznbERskkq6SqouSWMuoPUFouuC4f4C7Xp",
  "key27": "5mrao6jvDD2uiDsbFRTnVvMmUzyWh1ZAsHxsR3Z2LWaoK6EEoKmxkv2D9muSEYzuwzWqaUz8APjmyLpwA9BimzTF",
  "key28": "fnCKnPVgtYmCEnLecoX46ZizXXCXE4AZgyRAuW5cPkNGRJ4XNcMvdaortQ2oLPkbqfwM4gCfaVLePXv7WusypWa",
  "key29": "4zzAVGp5XQmXm4rtYirRFsz3TzLriER2vuNX5sLkYhppV1xNMhvnqcweRJnm4kFpxnGAVayKPpQqB7Rmgzcriobr",
  "key30": "5aV5bbV9bvexdAajfhh5hw9dgG2XVXsJkdTgo2CF83GKDds8DNUd1TM4ikBh5j1oEe6GM9X9s2gRJKosBSRGB7Di",
  "key31": "CCDz4VqSDhY4Rm3qbXz68gRRpxLjA9RAH2oJasQ8trXKxhNUwzdhtAEtSvVCAf27Zpbg6syDRPhfRTuhQ3bk8FF",
  "key32": "4ihe7UeahQ7dutdub75MUHGzVXGUe22AfdSFaivMFMGoQPwNkLkyVS426q71iuGtB16mi4EEjLpe7qeTBKxCDSdh",
  "key33": "2y8eTPcDERe2yXyA3FJBmzwwxhY81ZWRP5gAyxqi2niuZwSuEvCZNLtJVAboMX1r8b856B6hiYjn7EyPq1z3vYGu"
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
