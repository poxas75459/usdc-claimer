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
    "4TFfv9KZgUyjp3TFxMSJhXLJHqQwVVtXLhL8arkzGtAxEsfr5zWsyACD79HJQ5ZfQ2QeUjGYeuoWV8uekw9zUFyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cYJPSpqYsAW64fCaqtFgrTj9VyrmE556jocPj2RA2Z3Aic8Yuew9FMmCw49n3hiodkqKK42Sx1tBfox4FsdghKF",
  "key1": "4B7Nyrp7ZyaPwJQfjin84inwZj8pyYKTnN1eynJG74M5T1AnS8Ap2JCnEzXtCxwZdnHxDripaRsF6dT9VTCXmXZy",
  "key2": "5of2hGxZjSU3B2uajwzMCW4mBRfFv9s9MRDjTSaTcNiprfqvxEWaUffPDbfjMkQTHwVCBXrSsQ34HMtoyWKqWdNb",
  "key3": "4WPeBceMAEe2oXWeC9vDFt7Rhi7uwT2so4EUNmNCGCFikHjg47iNNrE22cDd1bWaAaA4iAmfqVpwCjaUePpmbjS1",
  "key4": "3xx1AQqnZJe9dNNsYAwVrerf9acKYQ69ZTvB2S72FvkwpnySMh678214pzGip1jp3uBZ9yYMtXE9ACTfcDs8dvk1",
  "key5": "3ocfoPi45TFu9wfVcyRm1fJy7CvhcFnDKUbt1EEKMxG9SUpy6yFx6ecxdwbKgXAPasYAzboPc6qgfmwrdvTX4e6p",
  "key6": "3qNQfGqMTbS5JkDpUamb27PFBApNTEw3agLfCQSDFzfCy4snJqfaXUxUSxpR9a2tpFoxqxD6dPWAFcZo8g6zNgHT",
  "key7": "4BjqciBZcq4pr2okxQCqiwYkj7xiS8ZECX6sn3UTia2GmLfgabU7NhUxZe5HP7UXyTdZg8iuHxrFAeHR3n7RiEBL",
  "key8": "4WMp9HEnzTSoo35hSuvC4uAvrqfU5uCaTmYXUy5eFXMWC2sVKtRB4rAP6GSN9buopsrxHiyWAezhHyUSynz7CC7P",
  "key9": "T5j6Jx3Z6MicXvjVABhs2SgqdhHEAi6pGrPFV7hjtFnX8ySJtzERJugV3Cd8zciy9DRoxLuASC13fDNr7NsyQBd",
  "key10": "TF5cuFYj5uE4BDTSRyNKiviUBeWmf1DTnURUh2yQAhxYFqj3Fqfn4tjy9SgbeyaacALqt1Z4zGebxpxTQhtUb2B",
  "key11": "4oDknSyKidr2hUHHbnQeTrDmTmhoToTCKsHqU1pDjLpHMfVZUPCkh7x7gqVtq33xDuEoG7Na9DHbUjSHAsdAvC4a",
  "key12": "2fv9GEFvxrbzQNmaZqcpNpxwhuvpRweCrpPVg7AsVYdbm6YPT8Fnm2pxNyaNqFcBniLJQrXbbaF7hdYsEQg62FoR",
  "key13": "2YgHT9qWR2jBsoXdWFWEubwURxm5DG2QHoJaZrKubN6RsVEL3sZN3uL3iYRb975eftcFyWBW1BNWWkGCyFCABRX6",
  "key14": "5KGDrbq3Pc25eRXk3LYNBheS71M5VxKQu5LQdx16bbqyQsZXjxLtchidJ6W1gnvhjd3xrzgLJ8qfdZwGmDx5ByZA",
  "key15": "26GGwGFR5DvKAVLh4N5FVRnryg1TBhfVJbvWtz3yL7EsgbaEZ9v8GKSpFetcMRud94vU6im8oNbusvxsJKGQkrWy",
  "key16": "2p1jrExZjpQuBXuNEZzPydaipGNgKdDHn1iZiyiyV2Rh6KdCTCQ2W5XoNWWGgW7Z7Re9vLa3tTeJjYTQH1oPV9up",
  "key17": "5x6bzK1XgTGZCZGP7K3xA7hzV2cgAWhh3vS8yewGGrU8nm2skESTingbTwhn2onyU8hDrRh1M9Nb1DVfwMRsvFCM",
  "key18": "2z8dWFMxHdUXwCPtCwic297pLezALYKpecSk2qMqmWEbzMG1PdqCddFH7ZXY2etQh3ugZ7XD1Hf6T76YZEAFssgu",
  "key19": "2LRdD61hDyNmryBguDFaajVCdM4r9qZ8pQyEw5wQYuayWQnKzvhYxzMPqcH8rMtMHKAhrZxEJgQGDaYkNT6wdwo9",
  "key20": "24sQWT1VVKURsPmxK5ztYzo7HzvRyN3a6Gqzo8PJs8qZdNe76fsnRJgciHn5tP8QqymK1YCL7vB6JXExTt3WCMoR",
  "key21": "4ppN7WHCcqqDof26SSmauecXY5geqFSxbtYL4jP6tZoUZHPPaNyUJoBvNsDrE1tFbfXHBjSxAjXRgnaP2cYydwbK",
  "key22": "3ZJzemoV6kLWhuyHZpdj2DBrGp2CETv3gN4pq8zTw4FqgTB91tqVvfUhxSSd3cAXneEetCKty5r5wAWKbs9eLDNN",
  "key23": "2zkk9eAza7cfVqSzeMD7BiCrvSsWUw1CfeubooUC2WrJ2GXRHzWheE2SXqBLNVf68AsgcUc8Pz7uBsLEkAeQmunz",
  "key24": "2w84QK6wGdYVYTe1vvN2MDYDRT2EsyP4c9VjBnUtV4MJJgwWT6eSiw7gh5zCEYPqY6oNJD8VCQHHmkhRNhe6Bmk1",
  "key25": "35PURkDYnXFE1h1BTdAZhA844so9JWvaNDaJ9ugyhinajL7d73izmJ4UNvm5jPzWgMnnpn7v8W7VBS5UfvPL9UvT",
  "key26": "3hWkcowd6K5uH1af2ixF1sRJJkMNfDTRMZy6KAqcVpNYJgV3Y1MVrQL67ku2mPm5io6xweCLMZqxWUpoZXbRVUAN",
  "key27": "xyDavKZnPajhLjrC9BWSkvbP3RQXPVUw2LT3mgrDLebgsPDARPP3kFh8Ga9XAesKpRFfQ41TfRNCqFxWoQyZcA2",
  "key28": "4zAYh7Vj2tSMu7unrMHZ5cbwo8ojxL8h9LMjGcr9N6xHhLh5FgaZzq9fJk5BEUduRsvWkVek6xREBo2zSg4hjU4w",
  "key29": "2eajHXh3iMVsjJPjAGJeMvp2VY51hLYgV2ccG3uGdsf7ZtqqsMtnKSTQ47DJnqgemHTJ5Svg4di62SbWpSmNof8i",
  "key30": "4CsKmoFRabHS3JUVBo5n5udaHNyQrHFUzHsMpFDUH3NMTBhrNsASopUt6ahVFuCyxtmttzp9AatA1dKemW8zDyLz",
  "key31": "5sLvyNMAk86jaKNm6dYpJjboS2YzerZ1J12RVroehD588wZwGZnfTGFpyCAviDimceup32Xbzh5XyxdiQoMvwWy1",
  "key32": "4uEwMW37uAGdRwmA5RsWXFGcN5gryWuJwwbjrGmCQDJfvNx1P4bVyNpQXXLYTWidCrZ6nLkTa8m4PDCWZz5T9BQU",
  "key33": "nzqkd1QbVrBdXQfdCM544UKxGYN47WMPoZhUqPpoA41XLkdkjMTyuLZomPjvM4MFAt7ucfHBBx65TKk8GUrViPT",
  "key34": "52sKpVkNtsf8ECy19cwCYVo9FQA73qwEq4RMcNgJvUpAw8QoSBZ2HYMsZTsccWuFZVEzjayxWNgqYd8zZXn2tKTW",
  "key35": "2UWPKdPHBHfGnWcN9qwPJCBp9MHWuqYtfXBRXjskj6CjJQJzwtPuw7DnTjoyczd22TBNoDVpDmuPF1yDZJVqRZJ1"
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
