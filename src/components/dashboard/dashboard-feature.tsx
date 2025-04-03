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
    "53n6Z3Jysh9k4QBPNDQkecDKWwMjAdYdhR6Nazq7eJVdmtyQz6yhWoTWrAhCarkTDwTDkRgpgQ731kJKfLguggTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57s3X6bqstgzUn2AgDCU4Ck9egVcuf8ioEbc7q9HHdWec5kyJaA7QaAbUcoXG3iKVYufdffNURbWwbNmtcbxm8dt",
  "key1": "4JqBkHY58zppKsnmW3Ft8KpR2k7pNFQgaB6j1kfMJ8WwZWFY87c6i5yvaJWDbKM2zAe3ENsJHBySYPVGCMtjYpt4",
  "key2": "61PUQFJMjToryJWrzTs4iqbJMs4s6dG6BZDVBUzmr6JDt4fBqciRLxrZPrfySYMPazNDhtia88g6xCThgiiDyUzd",
  "key3": "2LhPFWFx3udwnPAZhb8xuLYwHA2ax1TDvUnQW6oU2QKAs84q5on65i7mi4JatPSrETVrXbsaLbVDrbEeHbBg9ZWL",
  "key4": "5RNDvJSzLrENVJLVPQ8GgrD3rXjDyXjxdqKZVvGqZ7FbnmhEZMK5WFjCyaQqfjXDsbjJX5m3D34Na6EHbttafkzi",
  "key5": "2pXDHKcdihFfFa7bQ75Xb4r22wHG8cggYX6ptudKqPW3MtdutNExJzKUAUQygBFuYUn1ddER1t8vogFkXwTVz88T",
  "key6": "6kVrdXY6VbxMGS9sJGaMjbng3LAYU6eTk4gDtcau4Gvbz7A6gzTRVZQBP9afoLGawDYPeVzf1G5kBeggWaAwsxo",
  "key7": "5HBQXsag3KyJDfASwWeGQuWsj7fKPtjJXY8VTxguE1vypPFMsut6RLFYxoBXdVUtSsp53T9aqCXxrnAoUTjF757b",
  "key8": "2pnGNkoZxDSUcCUhmUsX7hcyx8BqF4ZbG6KeC1jx8dAHN6XnEToC1VBdgVik6559s1xMpb6PjieaikyejvxyQvW9",
  "key9": "35MSihGLLo4XiRvGxsh48j75pjQSgGxcXda2qqNACHMTZctdZwUzRr7WZdMNsUg1cHJa6FpnCsLQe9fPGSh8WvxJ",
  "key10": "2Yg6AKYzdhxpfWUetBvnoyDBhh7KaUHvkXhHuEi9eSBKRAA3NEFZ7TDqyn6uwAkv1UMJRKQSbWXAczVvbTD8W1ha",
  "key11": "3pm76PyQasSVLzK8Jac7DFhbiYJVj2xUVaLdB3YeLXhh9VC6ANGJXjSE74EbA6AAFGmEcT23fMBXrALMvrdJwUvS",
  "key12": "3bduLxZm3cAEJ7UEzqPWNhXmEJVWNvVExBq5ybGgEZgFS6rFcSoP4ajFuf6eL3Y8JPJHPfGuV1fbReJWEuimHDUN",
  "key13": "5G3ANihzjwQoTMewCQ2yySXkooUZRvqx7BKzq8HVXEQp79nog7oKv6iXqvRZiUT4PjxyHF9qf6rXBGFyKwXRrir1",
  "key14": "2GQwB4EYV9ngSpz2pWqAFzyFFj7Y2ZyxXNC9QXbWUhVXrd971Nq1P4UtMiY6S2XYwiAZrt2yNHYHpGg71tSX7NYV",
  "key15": "4oYA45Gw5wJ88niyrjQYmex9fpVbEt3dDsgqH9ToDbbQumbcyP6i6yGxdu7Hb3K5ENR3HbQ9gumaRxWcUWjLgiEB",
  "key16": "5pxBnun4tN2rtM7BjDDMgft3DTX4BD8gecqA9KtNX3z4oN8octMAY959sooDP2Je1mpY9jishmCxfPFkqzRKwWnu",
  "key17": "5T228UeAvcegw5r8cHi4z9a3bdHREN9MqufobqokDqZ6bqnnjg4f84b5a2MzyHEbFkWDV3pXegQx8eqf9vxe12qT",
  "key18": "Py914RYaRYhVRXh45L78hBsNUgSRw4nsVR81t3WmiAWZtUnkypzSNNvPkQRXbyiY2MdTJtvzedWkmpVWbGQQFCm",
  "key19": "5fmAuLHU67GQXi4p4C1CpbPaNHCkVS1MQwUWThGnYaWE4hWWUthncwxBahkp8XV7PedqT9ktAbKhSF5S9ECsjo8Q",
  "key20": "sJG1yWCoqmnHWtQhK7tKN3UVa7TQu5jAmKWTejdPZrrxWPGQiFnacz3LzVRHyZQ5tXQyeE9BZWqcRMADgDtKHK4",
  "key21": "5KNckHKc1CyuSVNbRAYE4z2jERD1euDwyheLGxCSgpcJKxaLvyTwXdWovacGicb4mvvXnhJR1t9B4za1qzM8KDgx",
  "key22": "5WnCwTB6EzCM4yc47VhL9JkvpZUq8ft6YkDMskeCjm5TjyPxGEEdu3R3BvW2wuX45ZpFhn2VSuS5F4WY3Ncpuah6",
  "key23": "2v1591nbrN8zNVqTJFf5VEU5fiWQBrJgN2voCPRq7aqu5i46dfLy6VBsUyK4YiYaNoTKNKXJeRDN8YomNWVpZKYs",
  "key24": "369hBMWLdXMjRJRmideqptUL8oSo5XD5UD3vrynUtjGHFrPJiybxGfWTzJXgDvMcA8j8RTjQHGgrjWu4qpCb9dG8",
  "key25": "kZms6gcwUMEuFdbnwiiQMQQYL2VB7cr6gUDLo35dREmb5zg4g9LKktBVBYxwg22QCnpjtqCjsmEvD7rLxoH9FS2",
  "key26": "5NuQGP8qMSFCNbwHShxmpvCkHsc5qxJe91nTzEWAw1yQDPFqVfjsEFHQK8rcj366qcFPD7k8mkyMiM9c456499Ew",
  "key27": "2z3EXSQGHZTfCq9GApSy82iyUpYcnvtkcff7VfE4aZ26mQwxVuALpGggFJi6T1cVEinxaB5S75YaRzB8U2JVHUz2",
  "key28": "4Fhg7Qe2khvz3p86gmMh2MojheS7gFdeEyAvhfLfgYvm6mVnyWFjGvF8uLGFzkn7S67zaVzHZJFgyvodTHB8cgvr",
  "key29": "4cusaJ88q2gJAAh6RvSixXvyetjBDMTpjDzTGTVLvofNgJafcPg64BP695bPZxSo6Ch2mjxaPH9Rb3mCamkk9nmo",
  "key30": "8guCgx58b673YkoPov9XhGxQVEuFM3BWNQY9inYw35e6hGtXDghJ8h55PpvRi4w1r58Lnk9CeDrFSvYPgJTHih4",
  "key31": "3kF7M6cGQJHziiJRAs99dM8TBJW3LPdk9DeEzEdef9nN9KKD2v1SZL9aumfweSiHRLimocdFUmNSPms4n3QEQu8n",
  "key32": "3NmpeUaroNBfVBmhNpTE8Z7QPWV6iBEtvA4yHQiyDXWVTHaKpkUttSS9tv9us2L1qFmXGbtonAtjCHeuRZGzR8fK",
  "key33": "2CFQrgb4GeePyv6euNrW9pchisWeJTuMerN1E57tayYMVywUz2miL8WgXd8EAmbSir7byVFPPMMCrayb5SFRPa2v",
  "key34": "54EMrJc4Ja3zHauySPHdtMQH8hYBTrWrgsW1rPEiEGRG7CS2CT6dujoZzJivsndajBzwYcFBaFWHmkYqsJRbgTdd",
  "key35": "65exv2b951Jyqmo9hqwnbzctjxch3DkzCW9ahYjYRfhQVU2T5waio2hHVruLaRp9TxZKkHU2GTw645bmKF6oBCL3",
  "key36": "3gbjrW8UMfNyGpo2gQ5aG1kkafFtcDU4c94dM8XhYzFShrS6k6rRoWz3mQeFa72QzHYa4eLfxkYqdXdXheXZRBjW",
  "key37": "QDYaaiM6Ka35fi7xPGGyqVYGqkxzeSch3nLVM3K7xXAcEfzMcG3eyt9ssmS2VwZX5PJJvmZBAh49ZRAQFQkVGHM",
  "key38": "48G3oRzbx8QTszYHnVRmeDPTjAjNcUWaiUWLj4Cgs8XfhZRyMEtWiJCMbWkSMyLd1RdKUNqNWap4UCoqG8A8bCLv",
  "key39": "5bcgn1gNfRoc8wXvmuzp2Fvd9uogRFwyxnNYD7R9ApmpcBy28AtsZbz3XS9YUUrjGK7CJAmNQ8XTm9h3mHaxDqzw",
  "key40": "4cHpJZWsSpTifqko1tfgP7YWVt5uhMrasvLNoTEA9g8wL9SzjfdwBoLrHC4Lrr7GQ995TnKssZMGbAua8QbNQtTT",
  "key41": "5QLvgCgVcgyjEtXecRDJpxpE79Z6rUWMBiRupMK34MtoWcbPyF6NTjecmNseK3CwnhoRxiYQqjQmq7j8TqbVeyF5",
  "key42": "5p9JX4RfGv6aBMAGKWPmJy14e7cTcviZqCsUQjgZsJNpmd7Aj7pgPBcATtQruFXK7Nn4wHBvifsz2Xh9yFBxidfN",
  "key43": "3odjfU2CXmgymFZ4wbcHJgsw42vzRLwbuNfjzgjq7PgJyCnGLDz9iaJ6jKB2HDe1drG2buf9NLmZSc2H4rj9vNRT",
  "key44": "2AMWFsjrqQVQetCt6wx6P9f1r5QdD2bjXQrxm9QwXXwbjAF4orgW8XoufYVBoAZaARxZ5qm5ELTm9CdBPQLZHLqJ"
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
