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
    "63KH4j8JJS51BaoZezgdyWajhuGgaHvs85tv2xC7Rr8sEvPFCevX5NPgQ617vLWWmaHeM8obTuPpJoZWLvF9AWw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qkeQc33ADep5MZDBCDMxCE4DcQ8ZqK6R7gcFfTo64Mj4ku1JuCxdZXTB2KVU5Xybuvs9LndxVJKQ892FPGdmYNj",
  "key1": "ia3fdumS7hf2qnXVD4HYkM7oaErX4ct89JTbLZbvxiQ5xJ7ehJmsTvWSGKoP1PUPwjBTsTq4AkdQNcG3vb3kusa",
  "key2": "UxifZDBryt1WjBFYXWG79JMzSRNpozsq5c84y1GxQCUXZqnwDMU9rEDwzeBz4BJimpFd91HkaCdYyhxTMus4c1w",
  "key3": "2VgHVrX4SVq8K1ybu6JaC4VDFCH8tRne5utXvKyhgRsmZ8mD8tWGr4zXJvaoQj5haXREFq2NTMDDekP4hGCyC4dH",
  "key4": "2xA6nxDyzQbg7aK8q2nrGoLKoZ74C8zoViSVQJLAAiXTa79viPvnMEVdqwsaU2vZX27e7BsaBMfKuqaggtv4BhT",
  "key5": "WNP5ZEDoXmNG26gUS7pteGXVJNQPhjBffW5Kr8GzUGVP9KczHaWjiw8HJ2QgR61bA7q5HxZsMszrLSNYSmRcyMW",
  "key6": "5WxaYN3pM3NBsXbDM37PZiyRvB2SBozWxk6DJuoQMG75fhzQgDCzmSU89ZWHZYTLXfSPakysiS2w2XWnxbPcEKak",
  "key7": "4nrwuKaRupFn1Q9asypfjeyUisYeSEh6VCY6xHs4nNrt6yU5qihz4swdcaQ6CBQgCAFypw7p54x5dhZW1wrSdxDA",
  "key8": "5diJ7TUzPSjaGT7Z3vW6DaoyPXUnP5zobocgozGEk51YMm9YD8PyTaQRFw8ppFFzSrnt4R7PJNRTCqrFmth9w7N5",
  "key9": "2Z8aN1vKMehHRZ6eZUVPU5nMdHAgdHFiSssgVnpyLxdxekfQDdCYL3XQyTTTQhHZC4F1tUaGbrycdhAE9JXjnDYP",
  "key10": "4wSxQn43WsStHx23cAf1D5HMwNBCxAp647u3jXy22BQ1ZakCLnagpSomQPtrcBiSUFcxrstp7RWJ5SNzyHDKbn8s",
  "key11": "tdAmY159zEptk2Y9FXHwR4HZqn17wWC5jURvvZMmdcw5E1LB7EBdwoytJuSdeJSsjWGRfAXnuXURUEEMdi2j4B5",
  "key12": "4vB9E1jxqMnn7JkLiBR77UXQD5GwsEH4HRf5L99P2HoKgJFUrdbRjUv28TS5MMrty4kCiE6iH3eSThNwWw7Ea4KB",
  "key13": "66uHXxCCBTHUkYm54ku4ct8eyWNugLHY4fq7gt81BNyCqDEb3hXn6BA8Lwfz4cMoSiZviRCyuJ1fLsMXAMxZW9nt",
  "key14": "C473ovxNmmG6sDFaZ1hEDysPbki8PZ8vfcZznJAR27r1niuw6D6GR1Rd82E9tqgPeNA375SasRBgcq49FEK91V5",
  "key15": "3rZeN8NVJjmMKZCCeZcK3XQx3my57QjQT6rBDCdzGKwxQ2HDsGj39zM4zB2sKNf6cihfLHoZMV7EraypKezMpxZE",
  "key16": "4F3hU9ZCgeVFGtK1EKj4pENDnzrrwyUNkPEb43pArDSVvmffJSNPquVcUCzLmAeRfDmwGK9ywmK5jvazSKSv5xwY",
  "key17": "g6dvNUXmvq5DFpsCGMsRm8GzW4pfjZigJ5f3vkm3aXBmoToLhQrAwPfzo9DiLmAUsprbG6rb63ktNP6Sc73LMGa",
  "key18": "5bbBu5ZttHSLxbdhPK6LKMfwKawD15bJnYasDco8dJmNB6MgmyG9NgAKhtx2L8UkbzVU74Qgo6A4QxzPW2YFjJG1",
  "key19": "3XjaL9scYnrj2j99CpfbXXdJR7T5h5Km37mJq69ax13B7EWM7EgzdjYyyzyfe9tpMgzwPWjKiRsfGU8UQprCAGZr",
  "key20": "YksDvBfDme8u2iGtaJWqxsYQUDaToKmmqWkZULdLrRuj7Cs5SaSpc2RvRnqTXzqvJyHmyPmChJQWybEjXYfWaoR",
  "key21": "2MnFKzEnTVvyyHYgUT3jg8BbTY9ZfgKLp48ApkUL8weXEtCbuge82vytC8VVNJMuHgnHmB46E9qE8iD6C9cntVJ5",
  "key22": "4C18A1vT5LWcu13Vvmvi9Fxnx8Vk3StPxh9j5hfR12kVzYyjQ7AsJ1ubwGxc1XF2m6v9EaeijrXCikKHrk4qKVUt",
  "key23": "3sPn9UVRRf7UTKsua3vjrpYCGQ8GgPkwbctFUBw46Hx563yeSoffrUCScDc4YLY1UpxnMN3Ny3kzFU82rnNGy6ZL",
  "key24": "5ZuzPGjWW1jW6t7AegUWzEBNnsLeUG8MYNxcRXSWhiCi3rjsDnjSE37hnVZ2XXfCRHuViE6SguHhDcZC4G5nxDJH",
  "key25": "2EjyYktccWHtYMsGwKZTjNP8m35w7w8gZ6kEAYee9RU8b9dbAF8iVJmGMFJH65J3GqAhr7G5bCH9JFCTg77xi9WZ",
  "key26": "2GHR2tW6jjLwNQPJf8shLtReyFuaG9SwnuLg5EQY35NEb8v3kx6LNFBsTPULJ3wqxcgjHBcAQXyKifufj7tdbaNF",
  "key27": "497aNyVP2W9NHkd8jhYZaJKUYg8xRJ4urFU6Us7e9dhKyFXuYHuoVjWNGeiQSSUNHSxGWkRQoQjxix2xKjo53dNh",
  "key28": "5ujKa82RUUU5LPrQQsovZ8sVjEznBQ32eDqM9hmMXYPBxLj8Lmz2mV95mjFce6d847ZT98X4qgRwLde9oKXooPDH",
  "key29": "4oTv38Lwfp8q8LsF3wHHnWe9qBkhutBNJEoQCbeEFRvkZPouSQ8TTDddf5wMZCBUc2BYzbFHnewyhcTHovYnoCUe",
  "key30": "4BduGzKHReggDis6UKsz1n8MvrnHR844CNS8F7H3qZ4MMjmtkLifbRvY8Y2o49bSxypGqbUoPVme8Wtz754pv2Au",
  "key31": "2QGvu5hdo3j8nLpoWwyNeFMSBckAzkr1jkM4V6q7pJLmTHdyUjwpZGR42VFXxLdn92AGQDYwdxJGXi9tMCrdTfpC",
  "key32": "JZyA8seWApEaRCFya9QsiS57fD4zF5nGxoBDwcWaRrUVvS7AfiqS3tvKcnoJsjPr3oFdrqjMEXgnfu4ohqThUy3",
  "key33": "2WZgY99Np6hEBTLoMPKYP5ormm7BThm5f6erWLLLT4SshupaHxc5aUkWejyE1Fi9KHqyQmzXCDYcBNBpMbYfEY7S",
  "key34": "3g8P592mNfHawZM62Fx2VH83odCq3exCJoWbf6chQJ2VPxm5U37Bx96PVLSvz84xDkWTnUkjydLTuVkbiHmJtULz",
  "key35": "bkdJJF1T5SzxQcGNiXb5wDvTJQYoz2fjyKMyZxc8hyhLqhUWUBxvzVy66LbVUrH31RTDSYPKsHYHPywMR1W6hY7",
  "key36": "CzcucYbrQi1K7vNZzPVNbXtJvaxjAXJBv3qE8TB1hxABg6Sx8ubWZgGVvtPDRBSsCc39BxQ2nqAwWweWPQREgK4",
  "key37": "5NHgSVcJ3dQDPuZ4xE8G76MKD83rnHKAtgY6ahPS71j35uBTZEweGXicvJjxBwiwacLiYJykfe79dL4gVr7eyh1E",
  "key38": "ytPeufojUFc99qoKgEAfcWENjbieAYkWX5eK6bh5DtV49q8mGfrWUXxvbyStwG2jsojk8cR3YkfgHW7sZmxZEiF",
  "key39": "4yckpJuhLcScfCMHKcNCrcwiCeH5PhnoxNkpjXNPSyYtH43wYJqAhk9MtfBFSKjRaEhvh6RGQKCudxGp3Uj3ivXA",
  "key40": "j1Fk9DBppBM7dk2qEAdapsr8UopbbNVewEZmEjmF6vmaRNG1B1Pvc9nTUxshkEYk6adJ7544ggyszCfsbBYBACT",
  "key41": "5pYSdt95wg5UJhY3QxPPfQJ7pDrJwsjqLRgNxbJ5Rdho2ap2GJugNx6bsbGqy1BMNiZYDGyBpf463TdFLeepiiwM",
  "key42": "3zpdraPucHXhtg1YMrHM2gE1LMDNtzEaC9ZqU98agfncxTNDiAy7RzjiKviddBSmG2n94zL9ChtRQ5FqHQvLcQRm"
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
