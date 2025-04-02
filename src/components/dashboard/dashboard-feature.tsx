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
    "4oPXvVy1Mwo9iDr5sPFvtBE44yhiMzWiZLZNSMtYCRmzgo7j9xyw1cKJ7HmeuW71PFPm1tKqXPm4gLZS3xaYc861"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Joyhpt9jzS8A6AZe6grWvtkHvuAY9ptpGFJsV5EtFSA6pg7dyP2vNFxVCSL6gAe455PYT4nQFNaCTA9tye4hy6x",
  "key1": "4fsR4sJ4DWzDmzRirwqyNEWb93JMSKmZH3nUkJAFsF5QfjnZSkX2gV2F32iqBRMkP5VPCteGR72FS8FyGv4Xf4tx",
  "key2": "7AWtFYfa85z3Uu9cWWRWfwdwSm7sSVFFJKietkoYVPPD1fCpSfEHG16kcowq5CFGTK6hg7rsrpG6qmySpHr9jYX",
  "key3": "263v2JJJAMijWGuVYBQUMSPf9y9Kbi2a6PnYuDKKxqpZ47VwmzLk3YceeBfTqb9pBGsDxUJ2Cc7FJMMGYP1FiPzp",
  "key4": "515QKXxWvDhzXtdeEcNRQPEnSef4r4NFRD118ZpeQUUcMUTrDChaEKZmiTLxGqnE16xgjxqL9Nf8uSBezMU65uh3",
  "key5": "4fS5ePqFkzZZUiAwYeKuDLh7L2JbLyHeooiySSt594x1Q1L5MNPxXXpuCh2hPciUsVgeM5ZCpivRe63dHQGhHeFW",
  "key6": "26EXtxZopsgGAZuF1JsK3zXZ5oRhUCuYPLrwZ11ZTgJzR892rFQ12L22ykHyDdYs9zQYZL3X8UTxn3yBAbdr54m1",
  "key7": "jPnrtwj8HhZJYycVx6KXYfsP5iavbah3iWL6qKJe2d5FmFfJQjxaxuxAtpzCimzaHzdexbWRR6KNPfiUfUSPULz",
  "key8": "4jn8LGqoo8ZGuuSQw1tQYfGZuMEKtfAABytHUSEmrowzcuaW34MjCBxnNAUNJCv87rKRB13HZp94EcjWvaGgeQRB",
  "key9": "5B2GYJbLWzoBbBiYvLDW9RKL1i2L81jsENicHbaZNg3tSAoBsggMYAM54Reqn2t7bYB8EUoTgjje9WV3NyDqCbJm",
  "key10": "4MCUfMC5rYrHW5b5p1SKEkkNYanHhF5Rii1dkit4jbR5Np1KWW4vSHEkh5bvd6robpdV3uViPEjcsUN15qGPobKh",
  "key11": "5ocjB6dLPQnt128QERcudnvzbaE9QHxHsmuEJuoBzpfnptL4M3NSrqbVvnZSgZ2jHoHANYfJCT8oXtgbfoWd3aoP",
  "key12": "2FDGoDmXBg3iJm7ZBngG5EmYHMycc6USuV7E24KsQEqKipAY6eEZ7t6jU5SVDfxbfhoacmEweDCCz1HKnrWqTcA4",
  "key13": "yqQBS3vHufvhy6gke7kWMU6WP93p76B2S1vhDpA1QMXbMVC8SNRDsUDyqtHqq6cf5kLSp6sfndEiHWRKUfnRGGc",
  "key14": "3ZCf6PS3JPjjf6kdXyHK1ZM124ZCTeHy9U2jXMDBWdQP5NUMLtcaYtwmUiJ9jBsCon2apN8KJaiNuFUYjco2cz5b",
  "key15": "46oGktWVTMzexZoTjYqFRKiE6eTcSMnAe8TmpFZceXQGX46tmhAn7nNyp8hyG8Y1s8KFiseSkQyB66aLp6FcrZLY",
  "key16": "NW5D4XHSYoyzfCtmJuUcPSK6YAQBVRxk6kfbcRQ9WhTHcG6rxfKR6BJBuHc74zt1vfX6DAyP2pAWFwMWsTDYbdE",
  "key17": "2mNK1zrqyyYdp7cP8NHvj1kMjtEMC4vpw2vyKfAHiLn1amoNX3y6c4dfqjBUgiz7nnJdrY4g5SiUgCgh8mZhQey9",
  "key18": "4wL3Ma67ERwk6RcP7SB2XhT1mR9rww1NYfPwyZUCTEYKTe87jb7PWeTnJkMj7dEcDCs3FpVBeMqXv6uvqLciqVA2",
  "key19": "NzxW8zRPGHDy9oZDHrWJdY15ZNSj6rfqKu1DGEJMo6SCfCK8pkCeSZWMXbiWvwFb1LqHjsdCZg5N7fVE9w9WWXM",
  "key20": "4r8YFknxJKXbHxeLSJkivqJwL3BKaa2RRopSkdYdKuvSLzW6QHX1N1MSavuBzbbDrLXtjkWW1hUQCpjZRynhQhbA",
  "key21": "4wZSPV2oEQg4jSuQ54zU9a6oH9Wwy4y2sjLmJGhou85TYMj6G5k4dBw58e9rWvbG1t2HLP2pzZiPyUGFx4AYKMMc",
  "key22": "5vRbHEzbtrY7qzR4Burb8mHzppai1CRyjm35KjmgVqMaVw6yVGssty47B21nMHU4oE7x1f1agk2gug44Qu4dxk9C",
  "key23": "3kfLvavUrgR8x5LQ1giHMbybVtqfTwE6vVv7RU8uLg7gj1qdEKPCrps8tEDj9B2sEtou2q8QvyR4A4drsy5xQegz",
  "key24": "GEWGeZjBDgrF9SihUPzUpKXLjRqyE78vDoNWJp47fgbgaWtteZHwyhCMBLr8XtT7XXo3vwMpMTwWmjkE1SXM9bB",
  "key25": "5tBxJJKT5fnQgktafpvT6prfswXKFajAwWyTTdafxMSjdgA3HCTYBtj5eBM6LkuYL3U6EFdBjEDyxCQLrmFGJspd",
  "key26": "5RzssviuLuhHN7WskR4yfPqvNT4xKAEeUt6oJCqxC3HiTdr5d7ScNfDNU9iqRvnN4M3fJJixEKEDtVp3XNYMbHN3",
  "key27": "zf7U1NP9Yv6WGQMjfTzzpyiJhPxKEjqKWYC7iBDrTBBu7GikwrzJthgtvG4aNqCg18Cxxbz4tvhbCj5JLdccXNG",
  "key28": "3o8Q27rdo2qZb59ZMwSgSCF31KfhsmE7k3Wvu1T5uhERyvbuUHnDYnf4m7fjVdtkGkihZ2GZpUKup25qXy5izfyM",
  "key29": "4R5N9Pc5PGjyAX7qC2mzM8B6qYwEUbtRihYKWZdqBhpUyRSkyVnpZMtB7D4bxnSVdNfdtuU5spBMmZgnmonU9PJ5",
  "key30": "3Uo6WwfkjkE9oxTszN8mFKWGjgDcHoLihAjpDNpkVf3GGwpAwnPqmv1Wt4S4NzAAgnx7cxnNc8e9m5psFwDgYR1m",
  "key31": "5CXx5879EZcacEwEKBkWEDPkSNT2S3sSUDvgBxz87c6VrzDyDMRCX7Tn5re9wEgezNFHabQ2qx48tcw1DbRmkVg2",
  "key32": "3UXcb4JudwjQvJQUrPzFRaKvzuPh9tybvEFbBMvc1W9NCn1g1q2PPpcjQcGe6VaU71jt2DeVGyp4tLuPBfsZ4us8",
  "key33": "5HdzrnoZHW3yyGNRLpryoLiTcR5sjLtWTNoPPEaickA1EdDN3P8259YGJUwqAncsS6aXcJzRdsq7YxREFYSxfVwA",
  "key34": "22D5mwyNNwNXQknMZmqMjdge8wieUd4Nc9WW3HvauKBtg9nYYd65yVCgEzEvoTtRK9V8o64k3QcW4f2K5kMNi1tZ"
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
