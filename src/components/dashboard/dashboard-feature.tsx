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
    "2cWUYDSjFi69bgNPDwwpcBzG9KRpWXPGxofymjE1CZGo64frBULmW3TX3ZSc2VHQReQLCbYT6VJQw2MeovhthpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44yqnLpNow6CPM7qu7Xz64qdrAtZrSiXwyNPYjacvvgQG7qGQ6R6HDYyqesBaKma9f222TRuvMA4pviai392zWua",
  "key1": "65LkGghHxNhHf5oJHyPDzUqpXnsPontSGLS5KVagdmN3Dcodf1AHDc64yfaseF9vhnzbTPrpd8X14xpSFWWugEoS",
  "key2": "3dP6D8zQNUyLoywd9byzQAcPe6ZrW5h1z7MUYewuyUfDonuQgUvWDdwTV9EKixUqASjF2PLezo4rCjJBATzpALhd",
  "key3": "1YAziigrqmZk9zdUhEn1sLjapgcWZnLciB83e8qbKjdTycXhMuYUG6DoPUocGCBmcds2NJTzWgpzj2B9eCit3RZ",
  "key4": "pKhEaiKo39ccAiBdyzuVERAhwztScjT7q2TAo5S1hxrs7b78k4bjB5QnF1s8ArTvE8Sz6EG68xpWEzm3E3gZAva",
  "key5": "5phqZQvheXPz3Mk5znhpn72NzS9CaNtgAEkM6cxPSocyFMJxix99ntacAzWjETBCXxGD5nzBJCrqc26VZZXozscY",
  "key6": "3o3rqTPajVvDZcm2VzufqRG2cznqGciHRzTta3k3pLqWjLJNdDBzFPvgSF3vt47X9Gk7mTSWBbLGep47Z94f7wHT",
  "key7": "YnUjdw7pXP2S5Jn8mefZkagJPofHXCDR1yoFuiZUHvxnREcztAoXNTX9N7F5CtFbP2heoz3QnBkqrCECy7JhcVf",
  "key8": "5XXtvk7b5dNKD8njedCcHM49iFn2JRsYDByvjWsdhjTG2TqhaokQeHuAXjVgi9vNooU9bTzM5CsKWTEDnR3fernh",
  "key9": "54jYsrzQTqC79GWE1idyv7t4qjhpjZbuM8Z9ZDKLNJaXX6QYVN2nPCrpXF1wxuFRpxsdonuFh4shxjnStZETwBFm",
  "key10": "iWW4hbvEbMCvH5bADqj515RUZwjnUNubD6Fh8BKXQb8Zoj5CmLwJ2LSR858RJEArfDcev8m3Dm8NU4XbbfoKNWm",
  "key11": "5kAiM7E8CvQKXkAr4tJdVhVSKkuvvWupNRPjiUkWxGpCLKcMhHSj9WDvYj57snALMEzov8HWbLbVfdKfvstgznU2",
  "key12": "5VD4BSWb7SFXawJPyuaV7sAAoMEKzTPmKMF3KNyre1L8S6Mepx7SfZNJ6MQLgMtWX2YYFnyw6QH1EPgYrndsWVkH",
  "key13": "33U1YAL9VGjasRZjR6ubJrMPMdeD2GhGJgUXLasbmSqnoiuGfsed8ZQuhRDK3j2uvyqcGTiRRR5q9NRDksY9fFS6",
  "key14": "43DEtjp3TV82R68VWiVpPJwTyHCproSPXrErXrHdw8gHaktVNYgyTnZ4PBQ7GY9rEsDVQbZ8YYxd2GKXR43ccUjC",
  "key15": "3EQxPNZaMnppq114wFCUe7TY1wwiW128a7fM7mnfKCdwKwdwmnJuwRCFHVnxN2UEMFbFwt3FRF382trR4RKTXKt7",
  "key16": "5PtLMogoXo4rUpfiyTgrYh3NdSmhNzy5AAckEGfNc7dUeXfRtADyBNsBmH6bCp821MXeUHgbcr7DkvSpphNVsLod",
  "key17": "5d18LaQPbwEiZpcuK9CsaWiXm5qKYuL25g7GuqMncuW1fPRMG8Ry95jyEhRGU53d167mXH28sQrQM6qYQzDtTsQv",
  "key18": "39L7oBUX3nXDd6CPejtezgDmTcfXS9kZHWJX9zVb8bZh2om5j226qnNr53a91gyUFQ2meM3wHie7jhhjLqLjSp3i",
  "key19": "3f2bxxpM3og7FyKzke3Rum2L2p4JCAGV33x8Xr9UKYeSRvzsSEgu3TZ5kJvKLU7cDsND1iwDpKRrLs8wcbTRZfzu",
  "key20": "Tsv1fecHC7kbALyvXULBGkg2KDFDLei1SYbfGRA2MnVWcLV8N3eirBaj3yqNS9cSAVtmSpL26fbvpUdKzG4dwZn",
  "key21": "4cY6ZsCwD9GUaPsuKJVTnJNTwmbTSfYdqbpyUNb7DQq4F1SuTjJxJuryS5avgtgj8nEEJtKsdduDrnxCnDJBhzkL",
  "key22": "3sinVfk39zcpywVWw8c8CfPW6QBj9YaSRyyANrwbiw4XmWkvngYVCYHZSDHLHEFDzaCsaCfD6hDHeTXxxUrGMv9H",
  "key23": "LN8sikRRCzY3CfC2wMhJ3FEjpTmdaEUKnSWbSfygiMDqMvd2VjSG9o2AcsY4mh6RmMnUVvYULscUdniBCaR8b49",
  "key24": "4dwFKw7KCPyovzpkWEKgohehqsJUGRShnTA9jmD7JwM9k6KirnD2g2yjBQjuvAFrhDsPP8ukcGT5HZ6pGFb7q3dw",
  "key25": "17CL8kKbFSXQ5dXsoedPG4ocSFSgXk6EcMDdxNFF9sKcTajRmT9bFwTayPi3AcJGXdDyMTUcnqato1EuAX2gdUK",
  "key26": "3trUUxtGHPaVSwgEw6pH5MSR2sWxTkjr7AaoqTWJ73LU3fdnu3XZqscDc19oEmLrJZwzQoD52dckkJLYwNNqJ3hb",
  "key27": "2GR9t7oSywSZZWikVQG6qgo5LvMbRdd6PQ3Xm5BsHAWjapQP5PVfFNEjMkhmw7GRaE9iRLkPTwW3RoBLS8pbJv7T",
  "key28": "2Lz4rNTY5J2YFcrtSXwDHUSVhbJhim2tgHJ55NteRtt3Ag9A1T8HvEmTRtTt1FodeTyF2YsaShp9MeKVNjjFo1cN",
  "key29": "3FaDnpTxWgKX69J27XWRvn4YQxqCorBoE8MTF6AjsFSAKJg1fLwGfPfar8j86GPE6yAqxmXBo5jCNH6dKzaCHaf3",
  "key30": "2KvebnaGz7ev9vcyNkPQqLg1zVP4MZQo8SwQeXh4mRbJ1xyVS7NKMoNZw57Qm3rW4rmr2R5WFecGJTGvK6DQcoLj",
  "key31": "5VwXvWyW1gtVhCAy3gSoLYBbpX5gp7v2ze8eWA9p4UWebpH8wPdaJKhA3Vb4M3xoiF8zywBxKqJH8xhU1cpi8eW4",
  "key32": "ETeCPjBPeEyLe8Cds9EwKgmzp1XA1tN5aSMitxouwonrmKNYujoTzB1LP5PW1bX7xn5PfgVoEknwuurpbBd6emj",
  "key33": "5RFaEzVGmmWX53cpVbFcVFuQjuZeoqdapTj1uKhnx4gQy32ucLesr8Z74UW5Fahkjge7hGTyLURhRE3DH2T4u6mi",
  "key34": "4XusdNK3yjqcZm6aVJCLgcphDoEXCbPtoEJ2USNq6yzzU237WHjJkSPoSqXY591vVF5XzmRvhHQjtjX7Gnmec4xB",
  "key35": "47nvvX5G8iCmSjFVcdgDgHCLHLC5t24HBpGntqmGVBRt95Yg5i9uEC9hoY2X7gW4UHUoibkRZERQrUWNABUzbWEq",
  "key36": "28UTLVup9WY2RBuqBus58o4WBJwAZgA8LDpLnzfsHAVrX8eMfacLAiV8Rn1CtcJg2RPSbaeUC29AUbH2s9TdkGfW",
  "key37": "49a9Go8WrkJFKqxVPcFPGViScHZCraow9MMFeaqcwfMqG2HHmTmwXU8STBiZwrkkRQeEsZtqZHFJBAeRReh2Z54A",
  "key38": "43Z7xixJwENkPinJKo8kt1n2YjJuxYmo6w6jbPGEjcuUCb5RDZeUkU4fongAFDXqLfoPWc5uGz6aLkabiT72GzgE"
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
