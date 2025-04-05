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
    "5JRMXMJsc5jeJyVWUAjWhxRpGsayNXDC6oe4YyZ1ooTPpX6rTnUV7emnvPtpQVixcZt4GgJhRwsVw8MNrk1sQKBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PgK8yJubuNLimfiaNjQtTSkMxgYt5m4bAPDCieN8du8Sfy6uvZrjQ5DvpLbHPz9TUQqWeE4837KVqZfKSBEeRF3",
  "key1": "yWGdFyFmq9w8tztWBqZFVWbgTQ25Ng9bUKBv4bCGDqUZaG5BBZE28eHwo7Sk5Cg78mhJnvn4WA5RAR5TnbNa9fh",
  "key2": "2gcBC952muxUhrH8TUy4KNC4Vw9RDZbrK6UQJ4v6Q2sM4GzHW7SmoTHqBeA5MWvQj1cqjqmUcNo7QjYMx8cqokkR",
  "key3": "4FDDNXXePAauphpFVai3b5HZj8zKNyV7bvjm6h5z6s7s7qxH4MdGkjE2t1y2HJ3zVU9Cbr5i7Uva9cg5dwgkqaFk",
  "key4": "5jNUgTH3W1h1VSbQaq3ZvzCRY7HQPrrjM9Hjhj49usho9praouo8485CbmfTa9krmBtRbG1sj5vH2k9GCZQgjyhD",
  "key5": "5xPgXjofhHVpBdRsQQFTzf85BotBwZL3Y86SJt84K7xFbtdL3zngB8jzyCRnNqFnNz4z9Gw5VwBz9KSDtM7TUKhB",
  "key6": "4bT8tAJWzwg58DdL3jEpnGoQ8n1zxvbKLsfH5APxUy2afdv3G4U4rfLXQCGpQbxuPGigF4woH4gjGy6Ftysk1VV7",
  "key7": "4HNpe373TWtjuAKsQiEjChTF7dLQCnfRMsWz1e2gvP6LtLSV4drsEbc8wJNyzUDewoxX9bL5Ai7tjMyBggkj8Kwk",
  "key8": "54MQwnq1AGDqZhn6WEEoHbmy11zcsEky2F4fRJUWVmja8Whp6PV3joUzt3KXJouMNc7pL57aAMhWQcc8DNezDsQQ",
  "key9": "52QGK811irWHG6ruU6tA4koedVg66rGmTWJ6bpxX1xrCZZv1kh3EqWhWzYxWS17BeYfVtBYGL4FgT79oWGCqdwWg",
  "key10": "hyrJZRLmFr6QZVdM2wfkqhdLRtTAgH7HqNbbU9va2rwnESRnm45ggU3F5nqvWgC7jE3LRip28xkke4Z6rsWnWst",
  "key11": "6f67qgvyHSMBRcYXbJW8fvN4zruG9vG6aN76sGfoJ7WDmELhb4JKoZkSRN9HTJ1gYjhqceAXj3pCcTc4P1aprDM",
  "key12": "32gFnSfEaDsE236GYkYZqX43ezjrxKFxvzapa8FiYxUCZhGErDotnQEpnG8YqUmQcz6Q4QrtVvwBNZrptZgLfr14",
  "key13": "34LcrvFgGadArBoLKXN6gwkVyr9pRnkqu2QuuJL4smj1qPvFJGCx5RpaN3DxokqoPz11b6yRC4eRy6DUrx6RRMip",
  "key14": "3htHhdEJyS5Td9A3M57X5ABg6nh8dyrskofQe3c9v7rqoWHvGLDsr22HcWcmT1aSup4Rriai4hMfGCttZZYjAtKv",
  "key15": "2qoYqwCgLFviFSxEHGjm2s6UTfNQz9oVsSTnyZLCxhuTUpoHNUVWdgigD8TNhHYRBX4ckFwd5Er4DYUyY94C5Sv3",
  "key16": "3tbz2XJvdsZtC4HCgpDxQCRXcZvabvTk6CYL9XZtzyABLiUYzBRoUeMuRJ637PiJtLvQv6fGxrEW27GFoPR4zdSP",
  "key17": "5AjXZPXCCya8d9gRCAdNz12958HW6fEvGEEsQixXyBEypKYidUNuhcNUXNPFsM4SD3876ux2ofAzz4yJhBq1Ptc3",
  "key18": "odfnxbyXGMaJqcyrk4pF6wb33Xa5wMHgYr4Xn45SWze6USHpvHrw3faHvkc67wiYyWQGavwBJfTUHYsGuWPU56h",
  "key19": "3mahWeA85nFSKiHvpi5qx6kTVFqU5ar28QZdHLvz4dNHXMb6zb4GBmjMezD4AP2zvzASGqHAbmoQHaRCHwECfV59",
  "key20": "4n7qBQaSUVQx67TmGRSjypm8uLYPoAi1VE9Jme8RXXPe9vHNd2GbdPjtGLjgy9MtikPRrN8EAisKWv4i9St6xAo2",
  "key21": "1s9aRr5xpbVMaqq4Q4V3Q7EU19a62eNVBZddGA13Pnq6TG4VqhLH3xfwyubMx1J6fwgwgd7CormNaPgAo3HKNsJ",
  "key22": "3Jce9FQ2oNxvkivLw53Rw1u6MgCV5vvAixttLbDDcys6wBjuGnMEqE4JiuRNDvXUXzfmtrBoYnopZigLoYfSp9Wt",
  "key23": "3r9LQZ9mYZL9FC4sJBCWunEQR9ng3DNuzPXstq3FMs5w9ntcaedA3KcZMrh8Uufdni4F7dS1VJTv9PjNZPaPp1vp",
  "key24": "2p9X4B7CrNs8TAmoxqbj2kHfiLHRXdyZ25rnYcV6KPQiBNdDehfEW8fDWEktu14R72BirA1gJzNMHUdDnHDhWthc",
  "key25": "VDHMsDgpy9ab6ygSHtabE6d1MUVEcdFWzwdKKjqjXx35WQYVX1sePAcuAcPijSy5pnHz5eLi4tRgFWjimdtJbTi"
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
