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
    "4MmxocBQGhuW9yYK9r8hkKNxDnFM7DxFL8m85EEKV1eb1gZdBF6oecZkjeFjm1AMjcfY2pXHsLck57YiGJ1fXQfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zwTTi1XhNKm2HLzuEmS5qaJUuchux1HseRejX99Uc29VgeUtev8W1qsM4qgyvxSRugevkGrrZ7iJfsYyqmEPMXQ",
  "key1": "5F2r2KJL8ZkRbpp16niKnFCMAQB5vwLsCTs6xYFeGKoy3eWufFJJj31tbobWCdLcoTgKntQFksS5JsBMvDGf1psY",
  "key2": "3tu7Xak9JFrPtu699VCq8ovn61HsVQ4xawbHY1zDF8ZDqeSt4jjN2hYU1hfGftRsy9G8fhprsM6cMKBvW8d1xBBN",
  "key3": "7zxzhDHnm6AeXrEp9MkawY5N9edyFXgWjYMcMg5UjxVpQgVoP2hWLaqkq9UpjUDDygAZ9wSJCXJrTuEFWgrEFif",
  "key4": "2ZKrmcoMoZhwizZeCQ577CUrFBwN4TFND2s2gxpHJc6Nh6TKwzHdoqmrrWyx9jYKPDefVrAYQ8oznZrMke9GBYtG",
  "key5": "3Mf9ebx4iRDUCrQSL3BGqmMRD88e1wAJ8dVvQSduDQCVKHjFQ7QHhfUfrxLG3UshTYWfSLrLd3TU3KWgB8k6weNE",
  "key6": "5ZLBHdsHbztr2CiW6GbYmjT8tDmaS5pstzFWgDZfpQXEEV8JadKFGw4ZL23X9Pvc9zGGitgzrNVFGWm6brdhymG6",
  "key7": "4p3rKbkwwWD6QLL6AFBRoXiNdEkZaNpUXZeoPkZf62adYsL1VfMkBPdPBhbw1MHYxGJTxU4bnZ7YG5uPHRooxaq3",
  "key8": "2VbcYgTgUVxYxKJPaTPfHRbkradYaoeBnHVWDPz38852fs7hdPrTCxytEjNC98STF6HASHuiw6PmTyMyoZiKSonV",
  "key9": "5tgUEi95wBPaZRdiG7Ejx72DgTcbF8VfNenHpv7aGvsb4C9re7Q9ZEM9BMvpYGDuUA9d1iEKqVumoWjE3cBc68Lt",
  "key10": "3NsST4DeH8Dci8c7WHRP3HMxxU7if9bpJzC4rnACNRcKFX7rogyXxfK9GBuzRcDxS7iFngbJ3esshFANRivxkRXh",
  "key11": "4WGhaCZQUkzKt28raBGsgsxjNzpJDYKJenN4nfHV5FDhc7chufoZtDMxUmrd9uWUCJf2gTjctmaYWGbkUK8pUWHz",
  "key12": "4Cpg9o6f3oftfdTiqJqeZXj5iRbkAEa75fh1mksBV5iibr1syhsWAe8A3R2h6gthgvy8iik4SfJdvcKVDFUJ1LZe",
  "key13": "3RFd34JTpa65VgpCVkJrX3cVfCjxAXqvyBPzLnrqbNg4vMBpjyFGuX66r5mpFJj4P5S7pCE6MJgb3KXSbV8NJafC",
  "key14": "22mRbCX2odT4yRoEoqdvFA8WTZNurppcq5nCqspmUZ6MaWLaEHjWxB7WnwgbNNDdqM5QcXu6YXRZ3iWg9ykFRMz8",
  "key15": "zBzT2mNsXT6TYhX2jRFW82c1iAcdNdiuNqgrJSECtK3YBakjzgd8uZSQcYeGQHrDwG7REteuKeMYh9JuVWjeEqV",
  "key16": "37sXup7hZFr831tph8Q91f9dmMZ2DvdAxYEFnaEEuYsU8DU4T2hJLR1eaFuk5XbpaYzWuak4aUVKNbArALdPZL56",
  "key17": "614TiPj5UcKrUWTL3jfpg3gTZ1Bi4xdEnNc9qvEfUyP8QDZbgGrJnmkoaCLnQLcGSQocQizx4zdoeat6XwDz1bxh",
  "key18": "3NtvEvZC9ZLdkkFL7kxShHci4AQePZ1A1hzwjrSBwjfjytDEd9Baecz6KrQJKW1HBCAVfjfKnHnU1St6XKx2i75z",
  "key19": "57Hsao9atD9dX72Arx6VaWLruUefx7E3HKf3QyGQoH2D9xNhvhEyVch9BZ4aSMsUbXqSJGMMXR6wgKRbm37AiEX8",
  "key20": "3XK2fZ4mbwsKiSaAjJUekmbUN5B2wz9nPStYK4auvszPLkqAdSp2h6SBgvofAPnRufDBb4aLbSPkmeABUBqrn4HS",
  "key21": "44SycUbqULnH7Q51fCTo1CADdqcG1c3kPe6XuczFvrRiLgbiB2Uc1UHCN89s4oJS9MWaZ5kxDzDDoY9fzTArEnJm",
  "key22": "4iwkUyVgsrg16wBXzVDJK1aRRWDY3Pfk1FWKATctv37sn6twvey176pLWLm8ch4nVBYW8HB4fo4p887XMAhrVbCP",
  "key23": "5hoyc3oSaS2wcFWmg9bZntJmMCvax4oE2UCx654s3sUCtJWitainUzWp8iTQ6HVX6DC2HSDFdbkMSUwihA68QBHx",
  "key24": "2wzmeesoqBiwsfNSHNFqqS5JL6kmHbZmZ77dqrbp78w4bqKo48gVcqcW5WtZR8bWpxyu1uUmvEwLfGeJvYqD5HwN",
  "key25": "45DtFeoK5Ke7HAYJ4zDt8MRb9ybJ1fcTUGq8HPwCyp6yeDTeuQfWtJdTArCixZgGpGoh7e59tt4DHNKPFACnVLAJ",
  "key26": "2hsFJ7G7qBYe7ScdxPfiWMqvX8sffdRGWB1dZiDBeq3HgUnwYvJgop7cANVH1JYhUPHshBz8ePuNAUoqZzPRpKRJ",
  "key27": "chAquB1LegPtx2YrcSecFG1HwuaFpiECh7gspmEEkk8AMXyxj1oc7nH89zw4EZ47vHwbZRZga7w9JgQ5p4GQvER",
  "key28": "3FyVSiFrerrf63gBrWX9nfLdPwKxBS4rxbwmWd8sf7XSGXy4MdQDReM9DeeMoBc8CzBKoWDQRa9u7eanYhrqLW93",
  "key29": "3DwvBw4Mi7B1obu9E984aGh12nD8cNteb8PKx4rGxHzPqEYY2o97mvbwXsKHxatHMcJ1vTBS12J9CZ7ghNGJCcwV",
  "key30": "38QU9N9B1Hnu8CE4LttSU3xKkCtRSanx8khEC4oMd8YuJiT57b5XvjLHWURrq9Sd75YU2CdRf1FxRfpk2rXHahdw",
  "key31": "5G3UJzvQENjp58sdj3nj2cYZRf86kVwGoeM5hrwfNFCjdkmwJkcuLQkc2AwAUWwLmAiRGH7vU6cjDTck3HKaweKm",
  "key32": "3zDxtp4knPGzBZNBYidtf5vBQu9bo6nruQoT6Zu2KDVz1tiKrgeY4TnALcme1kZ5Qrd1Z2yh5F75e2jzEZ5tLiee",
  "key33": "feH7YM7W5jZaMryxiZNaw2xvUD4JqVL2ZoTg8gDyxNzm5XK7rC2Tyn7kKMSUEAgKWX5vphUUDLmkZHb8szMMdqj",
  "key34": "3zeHFJYa6fxHLwYJQGr5CEvbkjHBjPBdupNSHz49FrLZ7nRhSkJLNruQZK9RvvaRi2ZdX59TZa7gSfV9XWYtrBXS"
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
