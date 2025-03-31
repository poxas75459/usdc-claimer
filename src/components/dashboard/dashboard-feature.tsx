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
    "5BEdswnUVQYBepxpWiRJAX1L4YNraCfGCJ3BSsU7auQJF9qpFgyHE3YwtcGyVRTbyN7BpWFKfNZN8RvnG7PZu16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cG7sYRNqi364YnCW7WsvZS7rfJtFnVpfdiq44LGAZJpTBykWzBCRmJ8NCxuxTABTEHxvQAB2WEJsV17nBmjz6jz",
  "key1": "4Th94aDg37brYNBXmsGKiyqsm9xjFoSqW6wJ76F3mJtqX161pef8BABDKd1UHVpNGchCt9akEmxDNeiNnstPVZKt",
  "key2": "2SnR53Ae4c4MPswe15rQhXjsykmb7TwrYt3JgXerX9H3wVQF68Pw3ozKM9Jsnv5u15GTsikEAQhq6C2YCSeNt9Xb",
  "key3": "4ZL2SZ77p7BRusrewz839BvxyTtat8de8H615mnMAAPrSZrZcx7tstT2zKpFXvE76GeRCk8grSzhWK8J7nZnu6Xc",
  "key4": "3RtVyPKRX7f3agT2iAdDmBaERbhXvMQ6uuTUgJZHMRhddJWbnCru31QW2M8b6KhCGHjRfssuztRYg1pMz2FDjrQG",
  "key5": "3kJXQYSnboawtht9BGjp8Kj2geFtEwQCUhygo5yM3HYbsgDpz1ARBxr2F87RDQLwXZNCyBiTiaQ5NmxVcTpqwQdQ",
  "key6": "WcosMnbMHPVtrRmHZSu8UZZqzevJmUgzJbreWoMpMakmxo661nWYAwUgYSv1YGeiNHK3r5Wr53dCaPFEKoi86VE",
  "key7": "4qyY8cUbRLUrYzgM46seqzZZmf8gASxPGkuU8YVJjuvWdXhxRzxkrpLMgw7NDT1sHaJu4e5u5mvFW55RK3ECasFM",
  "key8": "4tB9XLLRWhSsqNUxNxoUv4XwHFbBMakQJvBx9FhvDnRmkQgvEqM6FP3n3xVBPD3maugUK2E9AmAnWuzBH4dpFgij",
  "key9": "3WLdfUTPG6Uscp419aZT7Pe149cXE7FRnJ3EmEwo4bUPkzoDT2H7LQg14VsN2SVvYEi9irr9hjGKG3uQCMTshr9G",
  "key10": "5hcRc2cXrR7L9L4EA4dB5b75bfMriZLdyF4BkpscNrbPTkipzP6j66smQTZidPUbGAoNiH8qrx8UbJDmztGP2EhS",
  "key11": "2DM8us38oE8rvSMbJAdDBaotMm64JyoHQLEwfwXe1xuYrGLPHXhZrt713BXQmRRPD3RGknU8dHnBhsaecmXRgL6E",
  "key12": "47GU6Dmx7tkMFTSQLnksWaGWQX8sQWQH8eHFmKZaCdoFQh2DmvasRkpx2UvjWxCfHzqa34CGi4v3ZYfZBJfWpGf6",
  "key13": "mp1UVmz4azQXfRFKm4CpBG7sYHXPDmYmEZkfDEyFPNyDdRYQmnBBZJny7PDcWEWM3dmTcyDmWPdS9GEruvJYimx",
  "key14": "3DSHsScJejK2Tb9FoYFfU4ffVkvwLddufHPAgDzJLpzXxJ7zyD5g3nZvmcexdy4vH2YFMQRKrhzYQny5d4ptoWQ6",
  "key15": "5rYPRBuixxVxFc1NCUtgN3yhiZhLW99gCfSoNmdx4tN8PtT8KeJgxcdxugjcYxBUXcUtgjbg5YATH3zVJpnGHUPU",
  "key16": "2rpWiZP6odtdhjHVixBHMkjZGiYVWu25edet7ya8xhF4oLLcYvrhFB176urYM3C8HZZUaJNck6TDa9RA2ytNnPsW",
  "key17": "4qGCh1igfCByak2ufua555A5ZF9WvD97rkJQM64YCx15jW9txfo9WasEMEg52mpwW2EE8unHmzaHEDtDgVGg8dn7",
  "key18": "2HXxAd5bmpXNgpzABJ5g8pZYYzvcRMY8GBZKzBWvqL7fH3cDtz9yTog6VTBQTTMZxJ5d2H1Yy7vYCPxnv66pUkzj",
  "key19": "4weE7zxJ8oa3wLvBaxfRcAQ7dv5syRq3N32GWQ3VpiL6do2G41mADzW4DJa6A11PxNdaovNi5coc619BQuKyr6Vc",
  "key20": "3TtWqq6yXS3h8FLJucbGkjxsk2SbBDC1Qeemf8NPR8Upo7YjfyUwsX59UwxKzTetAzW4dwuoqWNZNC13Q8VU5SzN",
  "key21": "3oSugoTumgS7zJg2xnhwX1UvheXzALBWQZMDzZWmdphrjFXLsL6YnzBcAfACAFvCPPA5vVkcvsVPTPeACXhNbmf9",
  "key22": "N2a9KfMPboXp5PydPHXuqTmvDdHb23U1ViBYufmtfYpbFerVQneTL5ypMQ6bBgN9mTXWyZx5VFTutBLmqy65bPF",
  "key23": "4ryCintbE4epZwPMnLnykfgsFpm4khEehEziChQxHw38y3KDBTJVzEqmPGVcZLViUoPsQQmEY5ScfqJGdAU3gNdK",
  "key24": "2fYNthzMjwdUpcGbKk5fhLbFuBmL1o4oopWvyZvUNA4RGNNBCBTgV1U2M31LT61MXSfLgwNLj4ubN1HLJnPWR8DB",
  "key25": "65RNSgqbCV9ZjB6hwEYy8StXdejinmJn2vbZFcgjeMYMBenPnaNqE9BMVr8DVcTiNpYtJi14rJ6cEE4PVNkuqmf2",
  "key26": "5Jw8tSTMXmtZsxsZKAhfZxXDRYLUwrzBtLGcvNunLB6anUoGUrsftFrUdwcdXHkXa7JmEoEXBfgMFem4SDEmV6Vz",
  "key27": "2VugGFdSKiSvTuKc35JmV4eg1bceMZgzVzSQTTdWfLc5kLRYAqohQ1H1WELLCerUqnax1Wq72t26qjBjWJwtwL8y",
  "key28": "4HfmubFugEUK7uoJM27nJQG7kzUrDuTrHDGmMGCjJMR6eYeT3TWVaBssBsBiGXqBr6QyfsXYhQtYZXxu6AdENYCX",
  "key29": "3JyrrEALpyXQRe5RGVihNsuo3wrNUiqZiVrjXPS1YzyPv8mRdUdRQ6iCrhRJPCKjGgsTPMHDKPBzytfURiQ4ufyQ",
  "key30": "4GwV8RUZ3fEDuBTo2uqCmBucDg59Rf6ByEngC4YiibhVdVjssZhgdL9NMGH3jcx8V6mcaSo3uG4xeng65Jbe7pQg",
  "key31": "A7L8FoGH6wC2vG1JwBiWP9gKyK1QPqJ5wTP5xiFv5nKYyU9eLxb4JUXo5BEQ2bFb47PxmyJbGbXyejCNGJL4cyt"
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
