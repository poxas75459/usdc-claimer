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
    "EXh8kAP1P9Wqm1mf352QXmymqVyQG24rRV9oUL1LmuG4KJLsb6vVZjg4MVLFpAqooeXUqFirMan6XVbfS8zjBC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TzzHdw9FJH9bY6TRoNmTV8TzkK425c1XsGxBzWxu5eV8FRqpNypfSMrZzmi9p47aD1CMzimqL37L1EWS2F7arQF",
  "key1": "49BKK7NZPJ3CoN25isESzfB4B2WzgrNqTrbcmmWofigr4PJveGrLFKfnS3dhztvs5RCUJZJyWvVNgFH1xyq8jqun",
  "key2": "33so1whmfqJK4MFEs6wtcY3N3PWKDhH7ckUXA3ThZkh1bdvfLCYSxWKz7X4tBZyt6ytQoMijnZcCvS8ZvqpTdrL7",
  "key3": "5jkyqTkSTiX4SjKYXLXa9pkYLb2r7RZxVRrbRcf12pfdYbq1phVz3H5B4ymbSGfPhhwAeQW56BemprwyyACobPr8",
  "key4": "44NFhUAik2RFMRr7gpUms23QHQst1eg2yew6P9UFDEDUTwyNh1CBNL9Wq2rPoZ64qeehEhyJeYGAiSNa8RWpCDr4",
  "key5": "2nqiieUh5zzRKPvcAkbesXdwgDEGxPerVD9th54oDJaM53f3oSwZRHz6zHLPVgLvQiH3T2dxJHvxGHCWiVNpwxJK",
  "key6": "4hLJ9mobQYto1tSDWb1zQNg2FNgYyXXcgvVFFgnJXsN47EaGJWkdWRzigpMbEYUNLaV2ezFR5jATE6f5FhHYtsH8",
  "key7": "2UXELWWJvNj9A5a9cwNPYKpzTA6ibWwDivW3YhoHC73STf2CvgdfeQbUi8tzdL6zFRVDoTKA14kiB4pCwCu1X4Gt",
  "key8": "4fq4gxB7vJp4fD6jGG83kBY7jEPFUs7npbFTKoT29g5szTSYxU9vSFUBYL8ZeeF7j3GuWSFx1XmgQqgPeDfhHupM",
  "key9": "456gChJPb3nB7Aq2AF3gEjek6mVak9GaZWWyZFRYwzGjrY4ksFPh3BxzQkv8YnzBKq1cKjV4ZtvfPm6cwAhjYa6E",
  "key10": "5DmdDMBk26s96xonG99aU2vESjRk8LQZxyBj7WuRA8mQrmyVX2unrMd5dU2mgFpE48o3q1tg4w9jXGL2GJ2ojQ4c",
  "key11": "3V8xbgG26b6CZRRZceHcMSwXtuXFcrdxKwLQuNzjTkwkWkN14H33zzFEYoKXwSuSboRy3EQahXjkwNQ1xEPkSVJ6",
  "key12": "3jtS7v5yS6F5oagygxRAXZvLpgmwYcjfGj3EUu3HW5LxyDYrfSfhDsfeHzeF8q8iY5d3FBoi7MXNMwkPn8zjT3tB",
  "key13": "5NPujrEqT8GGgZmAHdZczDcm3fEHuJCxki2hTYd3CqJe14x4W1GQowzcJe2mzMgTS4GEmTLiWtkhNyGoB9dhELb6",
  "key14": "4L1QnzDJaRbKo5tWRwaBZknbaNG28Z6yPrWojZe6HkxeawJqXPSbGYdVQExBRx8UEhoHFiSDtmsMwPKvmBbpkVKH",
  "key15": "bvhB4NnaTujBpdDQmTYQnMxSpMurhuRWTqRqhPvRzAJ13fACSYapGmhbu1THQT8hasCoKYZyyvmxiUBmZLmoR3h",
  "key16": "2cNJfSfchfmGVcdq2hSKWsUpbwCaXZ7BjyxmEsx8JEW3Ya5oUNMNBRUBEaGx2CxyYiT2TaBxUwsz9W9t5ppNbYUi",
  "key17": "3MfkCKocXpXGjmZY5qSfnTmEZkmPRabLeu5jomy2BShacwaHUsoYmBLGWz9zbYFU8jiD5xg6EzH3sdgNLsk3Z4pf",
  "key18": "2f5bCqJbvsQ9L7j4uo75zzeCetD9RU1PWxpYbvQh9W2mdH8qTZVjkStLdfEFnLDuPzkhgMFytBSjBsuSzFjEbadE",
  "key19": "riz8fFB4GFSJRNrzjcDszWup8PhxR9dBzpVDSuCPpbNBnNm5PmbRdhHJdFkTPeXkWM7fb2mmxtD3jnNgnSEDiRa",
  "key20": "nk2DWjMPnPuZ9n6kfEG2t2LnEusvEFrseUqYTLtthE8W2NgzNjdcP42t3MsiQxgcQJvbeZAdRrL24wZ5RmQzbYd",
  "key21": "66APgwRWiQ3j8Bcp5tRuB8V9g62CPR1p9YfvhJW31sDN1KkhTQquY2rQtxQgQtidmsuvEaAed5cEcvCYSbkdGN4D",
  "key22": "4AkGCZgc7FdJAisaUnQWaEYfTrZhADA8bHei6KCSu6XH4bTVqtDQG29e21n9nNSnDG8NqgDQmoJDunz3Fv44wrQV",
  "key23": "EP6SazHKvWhTA85GN1JCiihRydhbSfBhm8TmPtpFjbDtSE9QJHqx421vXXiXfnnoZ4Sh936sQuijMR5dBGUdsWV",
  "key24": "2itPcKDqc7fxwPyM1HZ6wut3WLhMWwMeg781m1oce3yo8yUD3EWXm7HP27iSALMP9VWkNEt9CmorgxogUNqMf2wL",
  "key25": "489REfHPJ6NgSeVf3aFvcqPsRDTktWvZJQZNMwg1LevZCrxH1sDsXP6ZawfiNvsK5EtgDvxVZj8SLZLGisKnBd91",
  "key26": "2i3kmJ7mk5GDbyGwrhzcPyvhA8usyNLsoga7d26Km5HDSPEj6YBKi6bJAsX7gURW2uYbcmx4iXdT6iNYy9dtze3n",
  "key27": "2X6E35GdWJmdKSHZ3x7seqDonDkn9EafjATppmnNGhWWcBNHRphPFf5DjNe3AYzqwZ31Z6GdQd6doti6jtpjoJWC",
  "key28": "5QjFDmmm3D2SnJozbwLQo8WYChpKva6cKfFfdSHiJ5TdR5mScWfDzJVkMTZdpYr2UDVs4Bg67xRhA92Gb13Xd9ee"
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
