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
    "4ZEJouPv5h3VNU6QVwxXwQL3yMSKmG1U7mdnRm2wVzaoxSq8autmFpLrGPHpgWL9DUFnSBMBtzbJL5UcM3VcmjYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xKMXtfCSVBqq7jT76cnPH35FmVxajZy4mbnYM5ws1CvesDksvG2oDnr9UCwXc3cXLj21x3YzxsZNSwQoxvHvYpt",
  "key1": "Lb1tvudkHXKJLKKxuWDFRGeAeDSX5xm9ondiMxE3hZhYXo8EHoTUEceX1Dz5wQHn9DbXCbvfUYfeRdn9mBKXvAq",
  "key2": "3mHxFAG9gQFvaDD8z4k9XpiikJH1vYZRoyo91RjXZuq2Xm321ygzrqwaJS64tQrPKejmPhHMJ94V1B7TG7AKZLFT",
  "key3": "2QaNWQpaKSz2vaT6Y3ZH9R18QrSMUeycbYQDNJ6gf9NA8NAqbW3RssjwFY4vchhGV5r7MJBoQnps5AqR9kCdBtkV",
  "key4": "4kcHmtNXnMEyvMf5E6SpcuvjFvd9o61jaXT7m1pGGuqb8m2hLrSpRdzjFdXcYTeEN7VcWTG6d6JLAby3bqwHntfm",
  "key5": "5fQZiyp4GeFNVs8zfEAbEhaTywo118v4N93UMwsGNzfLKgMAQxJRoUBc29LLdUijUJpN1cCv1aSZw6E5h5inSkE5",
  "key6": "4uoLg72zikeBmj6bVsPSMJtFmcU2qdb36zziRjfrEAAaY2YYWPqzL65NQ7Cj1Squ8xgYgcCYiTB3ToCWy5qGoBZA",
  "key7": "2FraYgfqXSdrNRRMMbwFgjSrRig99RkXPKqE832RiXtAJ7VJ4uxHyJVkzsCKXQwD6iWJBWr7YinNGtPSM3D6wuXP",
  "key8": "5BdpmU1Nt89rNDQr1Lig3Ukj7ozQh2F5YoWRB9Yh88SP9YgwGYSobbjN4Le1TZByjjMvotoW3BymGJiyi1mkzrX3",
  "key9": "FFX8ndGS72GbUDDt8KntdqtHs8doKwwJuEoquVaDPmDbUu8Geb12DcwxPiQeDMq5XGrRoCVePL3wo1X5YmQfs1s",
  "key10": "4AMSFEfco7QimyXwanEYQvhTaAyx4K1UiC8D2Lfa54jTwmrTdzJGRsZZnjRMwp1XHCqS6DbpNMkHYrtUx3hkUMA8",
  "key11": "4buZ9AfHqc8oSqDzZkbT1QFRsXPxBMLbap83wxmiCSRq9BrFS1CqptADA94gHmTy2oMyBBGUGaZCM1dEEVC3LENL",
  "key12": "4kLknCBGQNrsvVgMHxNK6h2yZ1zCLGoqPdiWw9W3qTkxV1mwZNj1RV8oYTwrUbsFU55Uygt1dLLDCUUoysBzYo4D",
  "key13": "2qZAfrr4zd3TCez6ixaG6MRF2FFGCszt44WgcU1LzWHGheeVzrBL2AsKvAAxzgzwRpfDKK4qPANBRaqxgCnUaAX9",
  "key14": "2qD53KqzuicAL8VStosgGDByMetLaPrC5Bb5mKKtHhx2r8x3raRiDX7NtkC5nFi5y75Uv6eRqzMGMTCnn6L2VvDL",
  "key15": "67rpgyE4qMpHZoEKU6oc6gwePwAEAwSnmoBW6iuMnJrfqnp3xLgQ7oJYZk7W9rY35RYX26JvrFC24q3VegV92aYv",
  "key16": "5kR1RM3EwBKmxWtRov3XP6KnGPe45Dor1gGQSomcyCVd9TqFSQbWYGCCLcULYXjsQyds59cqZw3XaETLKTzPu6cr",
  "key17": "5ex6EKqcmWs6FSZFf6wJVjNTeAmZJpmmLGitRJpJbHB5E3fYx4L4GkfJNaTHZRwC156cMDuJcp1tgqRexFsT5h84",
  "key18": "4ML24Xg5DB8xZBrHUJovoVf8crRjQyQM1wQ3M9rnbPKu1BazxeoXQTkTTsetYELmjEG8bVLfndCsA9xNHFwQfpW9",
  "key19": "5ix33Y2JMSsjwRp8phsqYsGykfdrH2d41MxEtmR1bAUTuKduq8RSmDWAH2zeDbpcoMHPotXWrSDXWmip641t3me6",
  "key20": "2hYebhhT8xMiC9ef2c1tJNPoJpi9sT7p4uZ3nnwGdu7mXhGtNbfM538w4ryHHD8ioXtbdY5crwRJbUksPE1ycHnZ",
  "key21": "3mGCCKqK8CzH5aSq92q17ieU6BaUNW55aptPkXsUX3o669PVsAHfDgVfbNMPACU14UW4fYAETQNgSQdAzscZWphB",
  "key22": "Nu4XpDEmih8Zhmcy3YEajZSgC85wC5zNAwpAWYY3sQQC2bMtMKpQHbMPjuwwLLQmh529pCoXrS69dcRUC118Zuw",
  "key23": "iXhCQ9GLUmYqAXEPJmtRQ1HCujAx4EGtbDe5YWUzWCvZfQJ7XUsE1Mb89q6ffoqw1gkb7h99BBKrFgruQqoFPLC",
  "key24": "4NVyw2LK2Ja6kxaXExASkE9eGjMCFFJasDZQXKxz4x6U6wAA3FYdACuvnz8oadrm1An7PvdP4gSv8fEJ8gYwbRvu",
  "key25": "4HtyfcaNpE4sN78ZW8nQGg753VE549m7zp129WrzJHYb6cBK7mRxJamDFD9Um29kCZhnXuLcYdp5GLU43hbm5eSa",
  "key26": "2Z1zR9VYuKjLzK1JR2bpbEMUPZpvqwCmaJ1iURCP9fhJV6jT1CDDQV9N7dTwgxm4KjxYfRL3wS6aPhua8qAuypci",
  "key27": "4iZdZz8WY8kVBeTN3QkGAszeUeCwEncUuUUYnqYQAMaUDxKoJMBvSphmS8x57ADhf642iJzQuL3FnnrEJXAMw6fw",
  "key28": "5nBh2UMET3s2oLxEuaK6XotB5yfpPUe6cyNzixjCLrj4eKh1QeHrLfXBqGWKSuuNH2FpAM4aYSXn8DhcUZDDuhYa",
  "key29": "3nKXpakt6j8dJuUAycsob9QMkDj9zs9UwyhECSGH4wU7A4QGHW17WMyFQi9Qix4HiW81ud4yhpw2QiEBebfuriGJ",
  "key30": "BHSEipVmPrx3v9ynPZ8iXYi4pM5UoMigXQahqeAEvFDeU8uYQmJ3b6TFYudfpb54LvqaA7XE8KnsSrBXby3SBHC",
  "key31": "2z2rdnj5ExZzoVHXrjhPNqXJhqfcqcFWSSecXLb4jLPdiM2XMTDyHPW7DNREHdq7m9TemsgzVbkfnZj9MVKhB4dq",
  "key32": "3rDNhmcUgUAvk4m5pSJEn3NZ66KdoAM5QZ7c6XLdum8WuvSmryaFJdiJ88fRQh5ihx4FFUBT8AnhgSYDg9GNzo63",
  "key33": "2uSP7QtPgaMSsoEtYaWxEyGs39eH8Sba2u23bwYqG1he2SNC4rMmXDVncQHrsPGjXSbEXX5q1yCQoTVcfevtmZuD",
  "key34": "33LmkEQcXHTbADG1aYRudorwEujRN3SESw7bfzNBW5N6mHpYnEJpQStTy3ERGdNqeoDMutyk1N7SqjtdajicWexW"
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
