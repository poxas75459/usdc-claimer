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
    "brAR9pXjzaW2NR4Z8g3wTB4KuSJFURduqQfmg1ukm6BTa8f4K9A5kZsTSmpv7ETL2kang21SUQPtTXMxeCdAW8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MT3yFMAwRJAYXL4VCQoxozYs63vferB5r1EHxjBrDCaCU1BHrb5F8JgFDo9NAoqHPA33voDUBDdDzeRpWCUd6Y3",
  "key1": "62u29QR6h4cf8oMjaBA3yT5gmvKCYur7udn8e77VjSY1mbcyznHzzYouLnFx9icHtDAxTgJfCwk1MV6wUd6GC3BJ",
  "key2": "3gTBM1W3vmAr7kZU4GKK9M5R4msP4Mzjpbc76DtRwMgXZE27Y5182XF4Dkc7tAWgdhbwH2NQM48XB5wmwx1BgJxC",
  "key3": "LqFQhA9ZafGgynKEa4qoLgwJgr7QXP7ogaaQCZLM1WQG8ScVWfYvMfsVxqe8LpA11JKpFzqfP2Kw2jtpEdny6Vj",
  "key4": "5HHES7orB2PfLeyFRtJVaVhGUfKUMU9kqQS58T7rTcEdKNBJUMiG3g85Eak2TQxRcFeUEVAeWFpWLDZqRdHq3F1z",
  "key5": "2tGKGfaXvfgEHrt2yuuYzs6eFMbwSssam3GrcF2NQdfDJD8RVS1ZokMTnKu9GCv4vAWLoJ97rGMi3sV2cRCHG2Bp",
  "key6": "4s5RaM8RLPaftjHSp1LfNYY6A53WPka3kutkvv9V8u9D8rp641afF4r3uL5tj24NcTop8HXsjCztfaw7bh8nFL3F",
  "key7": "4vfJPdh342F2qznJ2ck5Dxg8Eovr4cyknc3e9aQWv2uHBSRsD5N261UufBxCd6MNk8MXtWsnvNBiL8qsqKhJM76Z",
  "key8": "3pDTziAgvbj191QCaJUfU4iZ6sX7pbXP8AUA2XZuevsFtYS47eb9LRrehfhATZttdFdvY6RsUz83ZZHnHcJ7QChb",
  "key9": "4Tp1aEvt64qasfQaEFLPex8kj345xv3jdSA1RWE7QhxTRqZ3mqXz96EJsCZ1hBFwQwDAWKSgVpXxe445ZU1iKHZY",
  "key10": "j48nKib69czJTkyQTU7NFqBbB7fvPxhxUZiJFYb9k46K8ZmGKHfiFPasb74X7ngZMYSBwyVYxjj6tR3ZhYEAdN6",
  "key11": "21fCiHUrbR8ySpV16dUYJxqk9S6BxzMkKaJScFM3B5jywLp3GXYihgn4YiLov7j4nqircShWvrmqL4X1RJUarac1",
  "key12": "4cqYSapQLUP8XEugfHa7yb37pEjY5f3o1gfJqx7URviFHmazgnfk3bhwUZkhLLX21vSnHriNgwppuHKd4SfgjC3u",
  "key13": "2BkLDFKrveGJBh95gJF9z4SbEi4MbNutdA3g4Cs8FqJ5WmzQWKB2rxE8h81seLDp6wVkbDnCYfovnJLoedscEUJP",
  "key14": "4BgKSfiGaso1BF4Ug3Na1YatLEogEhDaG42UDBN9qsJmBGVawka5yEKDqxTMyvzZdx3jp8hV7oouifE2743uniWY",
  "key15": "51QBDuTygh22JQr5nE9WVTRCtZh4vUXGznEPkGN54S3BBZnJeEfbWNqjzM4QwipXu8WETtGE2CQqsqvv2W4Vtkbb",
  "key16": "4AXQTRkfo4neAFt3JTCT7evH5qsYvj9HFNtNFjNC9DQxZdB7xhBMvBEAYMErjTGZV1n4zrHWa9hv1etPEqT9nku",
  "key17": "u9nFBAqKgwo2r2TTkMsqVxzdNhwoXng6mBt4v3m2bqUWk5C1JJL6U3N7MRCrwdaQm7XkgD1z79N6HHdNvyoEBzW",
  "key18": "4EwEEHHZs2tca9GKWSb4MQjy3n4CA2Ng69KhZE3DC6nHsrEzx8kqkUgtfPLpXmAJhFJrpbDc8za8zx5ZdqpSLtzV",
  "key19": "4AyBRo18YR55MJqmP8BWJVPXSXDqvj8U5XvYK1Ncr62wD2PxombgRsThWBZ3Lj7jb6H1Gju5g6snkRrZxEV1DrFy",
  "key20": "54yrHJmVDmTJoonRGTmMrTfjsxFsZgA13WvZJJ6DbPiKkqDj7RkoaSGWFUXnfMfK7WVhtnqevx4Hc9JtrCSbZqpq",
  "key21": "5tXEKqwU4N4ZgXK6v4xs73AfcMyxh3ADTzRxx9LquoWW6x6ZMcg5H8Hb6ZBnq7o7acDu1En4ui7NuQPiSTwQwH8q",
  "key22": "3xeBttoA8nkPoCGSJBAJR3zi2KMibAPfHvQPtouYaw78d9wV9HFAzLNM5mfUXHX969SfZVuf5FU8X5SNy5PGnnP2",
  "key23": "487VuFMk53ZxytpkVe1htidDcSvxeh62p51xp9czTpF6bEqbNArYUBqzts22o44Md43jJPQZd1kqNspTjT4FWJeT",
  "key24": "4oKnoE6XwFwSds3LkVJ5rAbCiXzcsmynsabANSY9ni1un1YwELMnMrPrbHXVg1Fw9BNfS5fZ6po1BwgGbMwJCgdB",
  "key25": "3Fwdg3gcqCRjJmEKN9qCBtBJ7bRDvUGSQvFQs3M3bPX6g4E2nj61xQxxd4pYYzBRwwqMVcS6vWCscE78FfsjKEYD",
  "key26": "3VYdbAgsgKynGrnrqQ7sBQtmDv8i1PXghDQtoZ7nek7n9uwjPiwy4sjheTWp7dFRFNjPLdqeceng2vZvS1m23piL",
  "key27": "4RbtectKSYJtJP9YGGErR5bbhCoirAXaSgNR47LHAEkji9CK8k9onjdNXMbYChckgZicLDcNikeKngFkmb2BtBvV",
  "key28": "RFRLo89Mhi158CgvKtJdo6C9Bp8GrFqFB1MumbuVgKsULvScDGsRoZnpnNu9AC2WfSSqWysRfJHoXAbmgSTngqm",
  "key29": "4dtzc2CPgW5ACY9jJEfNa8gwUbEie4M6ysBctYE5aXcERjj9hkCv2onLLnw59KCmLLkNLG5dPoXyznwCSUXJvfjF",
  "key30": "4njARa9PFy1wHYwRrjNxQGfQrM6NwLSKcRZYd5nNsX2iaBbj47UptZao5CMPzUyMHmwFQVEgcBKUHQY7fm186F1z",
  "key31": "27c4hYLpL7a72FpTpmS1h7MYXisFc7eTinqNm1heSANUcXLisBVBCdYNZXfaywpKrJtadCyRRcFrM1FxVq3hXgHB",
  "key32": "3yKCzdNmHkmdjThn4Paric1aLkBCZSnbbYFestEh8kUpUFpLq5q4JYEaBdja59ybqFBdWZAReJj83ozJiQLd3hCU",
  "key33": "4YvJ7sTHdGsSZy283coRcY6Ucba4Q4MzzUeqd9VAR1qhd6pFcfA4PPBaBRpQptwb9T2qEW7UmNzH2GavTqaeh9aL",
  "key34": "3dVMgAMnpbip5YSNiK49uaeDXBo2Fgz9Xx416XGkJ3Kg5V9cynosvMV66TYPySmCz6xGG6Rc6pdce95C5azh7rSf",
  "key35": "3nzkwQeduaUK21m22gwF8rCzwbfxRhppFsnj4abmT6D2RETEAt7hShcx6zgmTHx6ueV2oaX5ZeN9Lw8bvAyjDFPY",
  "key36": "GHQXJX2iGEb4HpJFJ2FwEWqj13Q2mtHHbrDPMWcBWuknuJMdoHzPPYNTnDEiGeoDAiivcYSNBgKQtdSE1TTLq8w",
  "key37": "4AjNRhj6zQEzcmeAzkUx7PUFLHG8APQ8kHdn2mrSh947cr327WfJWmnRX9Y4yTzvw29YtDatiRMCYAkbNefwHt7q",
  "key38": "4FKW7MUcvBSgkStSDaBf3oPDLX8LQDrk6iLGrLMR7nvoQf3fAF9bi7YfDB2qMYvWFV1s3ySSMgxch2xp3fh3AtFb",
  "key39": "37pLXsz8ZKfVQwuEGGs4zDxEJzB5kavEP1WkKiX7RgBe9ivrw7AvV7g8UG8FeyNKvAKjyxrDqeFcheEWrQYdQrpV",
  "key40": "3TNzfbWvU1QnEoA4ie1oePN6qKpzfT1xKkjmnYKWBhmhJ1MpH2qKFJ62gfnBo6SW4ZBS52n3TCjcXA1e34fb8e6p",
  "key41": "JqcERoW7NXqaPX3rHoACnkXEP8vTvtbRQpSkHxPk3uLd9omkFnPjCCAbcLVHHf9HT3zJA4bDGUvZgKz3hDNwKFi",
  "key42": "3kTXq959ar31BQohxXBvr5kToZJYsTNUGP1bPeAKk9tGQEUvqenmf5CJKbgojC1sJKvjx8CLeoUgoCh6MVRHLtnN",
  "key43": "3G8o9j7S9Fw4XZTfMdKAy23XLkQxrq3oYBYK3sEiN74bBRT44iBDwx5SRYYV5WXmVgJQ9JQTyVCBLhv54zCdjgoV",
  "key44": "5FWQnwxJu4EjV8ghhsw1GXuXhpQ86hp6dah6BJKDpQpG7Cixn2yFcpjPpoan5pchUrK1paYZXC5UXPvdFcqHgPHK",
  "key45": "4TzQZjLsmqvke9ukX4rGVtuEBk9uW1oQuPW8HsmEZj7D963h5H6qVvS6Zk6BKzt98cCLv6Ex6VdSBf5Xa9Hqakhm",
  "key46": "544PwdKHmctLrjxvvMWbuZc7nQ4yQ2dBbnHd9XKaHCwDf3KeoyCXCXcVqiLh435ePtLZdZPdLstUSpjqxtn9rWSN",
  "key47": "5A3RkQe76zZsE1iKYbXh27qfQ5fajazz7vbMdb8wPXMn93WuTnP575JHecbU4gTuXKWfTUcoMieu2yBc4ow3FtNw",
  "key48": "27tXgakkJXi4UQj33MKj7zFFUDSkBV4jfYUA2F2xYukpMBC6d2f4FaGFw9Mbj7Td9o8iXJyp1UQ2XcejfJuRsdtS"
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
