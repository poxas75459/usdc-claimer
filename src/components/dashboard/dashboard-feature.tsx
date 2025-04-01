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
    "3ayQxQiZijrdubRfES1A7pazd8tp6KbgDQr34U3zc7VWTEa9W4bPJHkQEnfYsyNV97rRwyA59PvdoR25Lp7uBxop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VJSy5pHEXat98YQsPJPvPDtzzyKHjQZtp9QYuxrrv44wJbrXKc54W4AUYwZUMoaouSqBZhMruK2rgtDVTMrUo5Q",
  "key1": "AQqDXSSDMaM56MZcAnKScWMXm8ZJCeT7ouv5x2RF7bZosjj58Lt2EgqLc49Q6VJsXkpMWSpBVMYsYbPe3qUZVYm",
  "key2": "3CvW32fVu5refRx3qWncJwCJvktCuE5i6EYJdHFpMkTG1E7L9cKdh2BTsc7HLGnpjJN9pzdGHixTTufsheoW2QdE",
  "key3": "5YJgXGX5Q4T3NBXbcdUCHZXemfApNE9u2T9j67wJAeic3bLaiQ3woCpq4qi3dtGwRpxvv86jdm5jZyEY7xnaaCkk",
  "key4": "g1pdh1pHUhR4DTsE3sH7TCj66TyXV3cSKw4r3sxVezoSJaF12C2T6g8hmkG79DXLypxSfagPSditGphQezuuisi",
  "key5": "44ParRsRc6U2JstE1XwGAPmAqGcvpQYNbpDoWG3JfWw5A9w4JDZ2VvcgMXNsjTpi6BrTmrzcLK6nUFQZLcbhjEJH",
  "key6": "umG14QWwKMeQyeaMUu16uipxQgDvUSvPWvBi1c8kw24woV1cQtQdEzSDowXUrtJjgPWJ3pXZFHP7or69S42YNNg",
  "key7": "j6b1pmip6NEKA8KPzTy8RtNecdAH9ACoTw365UNaKD73WBXYy36tPC6U6viJ2c97puMCvDVY5cHfm6z74d8Xae8",
  "key8": "52nVGtCJxDoB1sGqvPR7ZBH66jnQPE2RSTsJCQfPEoeqc9g3K3Gv9rUgfANJgdM2pcfwFsbSFKsMsC3BSRbnZqHx",
  "key9": "kS74qS9jMUR3C4FnTPDkdt4KWBk6QBEMoXsR9GVhcAtTSGFfiqcuxSbgPr8KcrUZRQyv6S139Fmhv8UQ3FPcfv8",
  "key10": "3hmLcRABsr25Myxx9us6JrYAKiL3SfbA9NoV7pyzFBo2zF9wWAyAW1xnuf4w9ip38HBYchz2o5CB5sURiqxdGrLt",
  "key11": "5JTzFb4MJZNrDgrEWGsR6BMbVrtH7TWTUFP1vxe8YxRm4gGsbySbGShe6y5sNM7oma8Q7BHRS3wYJZgeUQ7HVEyj",
  "key12": "Rd75PGDHpFBscFaf2g5Y3VmTUCH3cyZ5LdzfSUqTMmqAduZa8QGChVJSinsBT93fm1Bz6XN9k8DAXmM78zoWqQV",
  "key13": "21JQmDRZ49o5pKKcT8YEkdKvoh4GqwEvoqL9WjR2bmuHWJCCScFsCs2RTGTxGAgdvxnQQGL5dH2bXbQTQGumSQta",
  "key14": "546vtG2rfi8goUnbPA2H3RBCXdAA8b1rFyT5FETVQUjYsQh2M2GyX6ue7BpZ8iGnwegaisfhpaBfSpiGvn3EsdLS",
  "key15": "5MmGM1V7Mo6oFtzvGXjnm9RVJTm6VTiR5EqQXZc2b3gCcr2mx2BqBEEQTyhCVkxRDW32s96ZgkpgCGYtYzC53gXv",
  "key16": "2RiDDRNksoYjKn7LjKgTYv88qsQYfBLsz1NSx8HRHcqGtSFU9DMyNi1xNxH9X9JdFrzQVh1c5US1myLhryPKXD2R",
  "key17": "5fPi36SJAChVU2UXh7N2VhBmeN8gocghQMHasWVSWtDcDfUrXDQtjLuLhMdUWiRForFn81dGNwZZfaaRrv6XCTCT",
  "key18": "2B9FoRkubvxWT6T34UK2fBBQkRbFELQvv1pe1p51Kt5CsowyXGMP6poTTM3Nc1GUGdUhcF9KBzRuAcURjqyvTmN1",
  "key19": "LYCbME2ByRQcAe4rLJJPNqcjt8JAMTC15cAjWFKQhbdY383Xuun6NQD7R3AaCfeKsNWfpyP5qXbjLgWFAnghjFr",
  "key20": "45TPGRthjTKwsYRFs4dYZYqA7Q8QSAPXi4tWz5yjxaDLVVQ82Tv6vByAZzK9scfFkgPk5vqVJa29brUmkk9EpeuQ",
  "key21": "3np3jy2niv4NFfCxdUDfXEaBE4QUBo88SJEQHY3LUnrJVstzDL93r4wLN7xTQpZGBAN2a2RDdpUyCTRgi1MRn6oU",
  "key22": "51eVLgZZ6HHf1FJoTDvRUBKSqePcMd3ckQtFiJEHieVKrQNK2ZE4kn9h1V3NkvuLN8cH1zCiHUYwaFQg1FmaPuRD",
  "key23": "332U9Kjw6auSwqk1TeQVkoVasv1giFYphkYtgL1jxC2fniXggDzqZrrH5FKVRZigRQW3rcohesaWKPD79U6Z3JRR",
  "key24": "56cMMQz5yevdzceQgXJKpY7F1mxFvfAJdA9hj5YE1GfiDSQn8MLxgg7wJvD9CcESPbAVik5GWH8Brjv2jmR4ji3D",
  "key25": "5E3t3tgaQJEPgnkxXNaH1hQwiqWzfp3sBFr7MVvFRW9LrEs73gZQytLvXCah62A5vKezW6ibNPnthR2Fmgz84SHD",
  "key26": "21wxzhNCujE7awYVGTU2BR4YPDYKHZtK9bK5aH7CxkTXWxUc8JzHETHT9Z4u7Qae5wiA2tgdaASyzvcuX1jCDpHp",
  "key27": "rSZpP3UXg2w9JgUJNc3vRVzYwzwMPYrXGLDtQjM6ANZudUa3n6edSSmuWhvtj7cTnVEPmCitBwoq5wzgxwcqPab",
  "key28": "2WYPXJzUJrkcdNGqp7akwhHzBh7MrVKYNF6CTp7Mp8yTpBUmR47gstRBT4mQ6CDPz6HXgeHGSXepcrBAVEYhEmVz",
  "key29": "3tR3HNMYUyK66s5NwReM5hsMBEryQvUBvQyRawgmTPtRnFdgZvQ9VJe1iqboCV7b8aWeB6hg8LBfVzq2oEgj4DAB",
  "key30": "2TLgFu4FeS4UCpcNJugBb4tfcRbz6HucaHmzZoQKpGa1V24f58q3ey5TDhkzyszic5pw5Y3NT7c1o5ZYW3kkdRpC",
  "key31": "2t7hUbcX51xTFBcGRJywaBBv3EVM78keYxRihSEFiDGmnF6UnwxeNobgLESMoojhMPxsVCMP6bSNfW9ouhUAhb1f",
  "key32": "3e7oWnzXDUHWvBB6ubq6s4ZPzq3QGokkqviFQz4u8GZzoTsear5pgjScacxcytTAwWZp2vcWvWHzmG31GiYRGAjv",
  "key33": "3WfFSCgqUubYCCWXntrn3pKq13qrKmQSGqsKP9Bp8y3y2U6uM6o3TufnmpF8rDceKSp13kgC61bnvZFAvbJQK3Xc",
  "key34": "5NWQtRP2GCS2fm18wptjZxis5DuqEVCg1ZeujBk9DczZpdWvz3UZ3nKcDHnTtChKmBnzRnsgVUnsA2ERXqnCwzHU",
  "key35": "QRErUxiCB52Hz5uxwHmdtg2RmDrrc39UC3h1NMdF9r3V8TLcsL4fF2K8UcCT6wEoABnzRDRXj94BTmwEWdbkrM7",
  "key36": "3xesvE4EnqTR4eNBeA6SwYaa9FmDCWB9pCyiKf6JkvH9H8oBQq9fKCfesunQ8WS5rG2oQBNBVhpTwai2b1YTFBXK",
  "key37": "76q7mMs5sbwrTwYzhDv2diP7Mz6mtj1BDG6cXQFgyaUMYDAJJgYFwyrSordziiVHtrVru3H5zAxCoq9cx3R3U52",
  "key38": "443RHNqwveWK64LYmhmFGrVAG2PoXAoYL4NNNfXT9fQrwUd6GRvdGYDo5mJnKpe4FqWEwVmMb9RqnJtH2HCER7Xa",
  "key39": "3kHkyUfe9dT8jHqiqwHAZFc95zr8HpxStr2EdV5WPyY1BBD3BGyofaWnRDM6YS1PB233ReE7TC3Aicd7rAeUUn68",
  "key40": "5JMTopq8pt858RWWNA3iaTy569yyaVVhCGFfFjFzKXEsDAGv4UpPeuZGrKL4cQa1Ua7jqNF4Urp7vx3YL8371AuX",
  "key41": "4yXnvGe85YUsqkVn4Yex3U3jHNoJ4g8JamzbQDr6hwgRWLtuczHBJ6dFGr9tug3Tdi4yvw9zh3rcBDNbt4uzCLsW",
  "key42": "3EL5QudQuoHfLKMFdhx6agssmUbACasZ6sBzHKHpH5HnFnnfDE91oJrMt7DKPdYndGME9xV5vkqJ7itkHniZQBRj",
  "key43": "2Qe9JCX8W6cPmmXNh1aRLLbqoZP7uptat9nYU6sKgayPhRjZXUeeqCFBfvvVVRNMNoHLrnJG8RnNwDCxiSEdxbsH",
  "key44": "3H5umYLhzTHRMqT4SK7TYsvm2ptNon7iz4MzzaLCrZZ2fbadL7anMkJjwVGgpQBrwKXW5HaEQrSqD31qavV9SjNV",
  "key45": "4fwbbv2nSdwxAZeT6kChUDNivCiGyN2XR1xYuS7NRQy8t5ZXuFLUs1koX6TagWtHvuHpyszgsBuduDVkYgyqPjFF"
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
