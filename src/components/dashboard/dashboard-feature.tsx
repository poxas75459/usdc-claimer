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
    "4fT5HsrkDDRTQj42Y4Lt2ZsHJD9vHMs1git29e2QZdEk7t3JhiUZnzCysG6mYZHEDzBptRgw4xDKvyqfHwo9eZUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GqutK9ZNfPgm5hxY2LTnU2yhuFPeCL29w16SR8nmr6Zm2PXanxVUcFhxyXCneCbRkUQNW5Ss3BQqSQXytxJLrkq",
  "key1": "2qiN3fnpn4KEENNwc7kX8zkW5eXz5r7xNNU2SY4yvsrKd5s62L55mWhaDPMFPhLBZu36YAhrGV3a7Dr28HWqg2Qb",
  "key2": "4ABXNpQv6Pz71EuaCxfKtxydmNnwkjrn5mffBwVZ1jvNKjaTTbTVfX4eJB2d1dSqzLCwciTXFjKPtFbH2ycrFMta",
  "key3": "46trWja9CubEiqpxRowh4e5sxQ3GrnQHvkf8oevYgjJv8upDNdvzE2eXyy5ZiB8ePimW1QFNLRpfAbVNM42X2qTQ",
  "key4": "3npr2ZJ4DV5FHHNpgbQK72xEw8pDZ98imVkKeztkDE921gGF4v1ywNaKtzVcfqdiHsGk5wd1mj8u8hwwPr5t6qC8",
  "key5": "5WEs467KYgSWQggxpyeN9L4uEXbWsBueAqrqcnEhVqFsFBWcSFQGWJzKujk5H1nSQY23f569uPkTyuunExdV8GKb",
  "key6": "wotuM8jpw6NuT266Jpuey7JdTfL57vrtzLuUjFFP1x4AneD48gEa3XGDEtBW4521kyD8KANgJqs3TwYBGXFKgVh",
  "key7": "5ynevPzaBZ5pRQ6ZG9HWfoefKvbEXq4EcctxBpfsZAj7XRiKmTyoNcr5yjwQvs3enqhS9ZAPfxnTiJzeZ32eN33o",
  "key8": "2cziLiDtx7E51Qqwx7o2qssdXvLbgicW4dXALcAmdFisrg8upMcitvQWekTQBJ5oGMSqqorcGbWeqUAUXAzW5TqR",
  "key9": "4wq6gCyFAeuwMX1NgBaUQJF5AALPF3CdxDdHSrzfKb9qDXS9Med8LeEWHg5fjQ1PwEA3hb4tuMiFCXB7qVUu5PDr",
  "key10": "4WuzqjvuW3LMAcuzA3Zvje84bA4QXUVB4xwQ7kMqsHh2zJ68zSCkv4aSUN6mu3M9CzZUggeQttuB8oMSThWNjTLA",
  "key11": "5wW7zzSLxqdS8XTUhA4y95dDer7qPhT8qFDuZ7nF9t6LD5ddtLZVjpKnDauwZeVPGdksYVJTbawHvQarDK99fr2E",
  "key12": "4kApMdcvNBGxrgHZqoohzGU7QrcamAAJN4mixN2UamTndur2qb1YfDE1y2SrXS9v9J41zHDcT6tn887HHddKiqUK",
  "key13": "31vsJUzMoHHn2izUHFtoDCzU4YtY4gNCYibae5RSavYxcv2C2C6uojqgubcWeJAbcuE7ifT1w8tQGJP7927vs11a",
  "key14": "44jHnYUA51rtQs7W4YXeVxw5cWZiH5NxDx1tF7HQz9S7NdqEkwKjKqHMEYdybGH5rgGbKkdPABHyxAuDidZBE4wm",
  "key15": "5zeyHVXMuJLzUpZu3WXTkgVsf9g4uHeNqyeBKhaCsq1ny4ZHtK8xGfuYsvahLTuCxMWccy1J6cKJAxbBAbBZrwwK",
  "key16": "3HMyqNwjY25PdP58niPeZs5Jp7QG8Yeb8NuhGpG6CU9x1JbWCHPqXCZPDHSFreJQNHm7bNLmvrEiBosfDLcq2zSR",
  "key17": "2s7kJtvFYY11SGKNUHb5tZuZBGi3TeKk1HjzNuRBkbwPX45ZQYVqZXyQpe7976HRwdBKao419mVquGjixoVqJ9Gx",
  "key18": "bhsGEuHbPT7kg4xEMDuqb7SFtRy1bTwxH62Q6d1gc8WWpXuCbUXqeLfyc36wMMMsXVMzkzYpmFGHEggW9k77QkE",
  "key19": "5qM4EKk2dU5hiRT4Cittv8Lt9jwgJDXN46o97Yd4Mct9hXjueUuQoVEVskXKWsRZ12zD5cdcw2CKpHyiaCaUGkCx",
  "key20": "BtGyN5SR37keP3xd6fgAFjznXj6cnmT6vnHLfeQGcPXePa87fRmnvx2fsirBQFTTjGHuWGNCVuBUSyfy1kvh3eE",
  "key21": "2cuhpBsMhCN8GtuUZNUoddyJ6kk1XzGSXsf1VsQ2X9y2MPcWs4BHrkBMGWjqk1EDb9EdLy2YHtXwio86UFSEDDk7",
  "key22": "5N3ADH64rP2NsuQRA812MjQGtScn4DHMZycJv5icNAb8CZRbXpTb9i1oMgRp9PZvhscxBQBHXT8HQDsHidjpXLzM",
  "key23": "3auzpRgz3Rp8EHmef1bGChkT4Nkfm4cANqRwvHQQbWCnnVVYmwUJQ8eGcf6PUvktSh9Xo999zW9q5TwTun4sdB5i",
  "key24": "41ki3A55ngTv26cRdgUEGTAsoAAGRNnVBKiRvi1DkrXgReqyuzxzEPaBZaJNpKZgx8AgnKTUWEhoihVZRd3oNmuc",
  "key25": "3YY9kut58txmeq8CQRaDnfsMqGT8Qgs8KZ3VMvD1PjWGS3VRZbXYurzPNRJRonUbHPLVHmfqMAzCF6foSqEpNfR5",
  "key26": "5kThXSHwyeX3voWwuXqDzbNjWb2j95kWQZMaWfiqaAY8y2aJrUYsvsA6Xo7ZazUiz6NTDLGtaCVMxrwjJN7U5SeW",
  "key27": "saU4FapwSZkFfTgPar4tkCH4TRpbEMK4yRjM11dtJN2a11hBrUjrCPFF9CBPKMjJC4N2R31HGN2smFKrav3xZ1H"
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
