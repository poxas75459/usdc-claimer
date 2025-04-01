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
    "tt37xZ9J8SPbKawE15VPFNMURSVNxsvSBdcbZ3crSLcXQFPXELZ7uaSU4vYPWJBhtVfaV48Sf56pcTPKaXVxDoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qtC9bkPPx4RVBXLZGTbmRFFJ9CoEFtuLAMEPo2eUF74E14JCsp8bgpLvzSSLQuYxMpJdyP7jpGcuxKmEqNXESCx",
  "key1": "4qKodnXZfpgBL2KggJjjyS5ndj9QkeWMqPgZuxo9TKhq241VRhYLc13TxcZwDLc17yQQ1DRF4XpoaQR5ZeCNSE34",
  "key2": "5KvUXYy2VUFfiUQ4cZ73xtNEDEQPbXPZJzA1gEFc95goidrLfSgRFvhu1NfdpdbMLrL7CAytbXbwo6UtMjwRVWPc",
  "key3": "p7ynogViTGSAAbK8faeEx5hKSukwiDKJ8rdJHzD9hoBb27bWq8KcxyTL4oCD5tEGqQYg2exomxGYbL52YCJynGm",
  "key4": "4PFVJHq5YX6x8bFof23f3sRqpyj4J9tzzzzuYD9xVaUzHGp1Qjqa4fL9KadTYGLokoH2RghyW7CWwpQgS5fqNRBF",
  "key5": "2SLCCEU1FYuYzSsaBdofbxnTWGgnt1pXueGxxYorTRe2WzL1JwdR3TUdiKhtDWYcNsFaL3tNRHaA48dxko2T9PPt",
  "key6": "5kuT3nPoFGteNpxyeEiEQzFe1LD3yhFSe65upcYBLAVxozDVTCsp2cFbMkpqDF24BqzWJZ2ZATA5HniSh2MCSLej",
  "key7": "2fiPkKxSj2jzkRfukhrCgbXknL14yRg5pDpatxCCmVQaAy1AxB6tgM4QUnPmuqFtehRVPZP7XQxNrbftuzeoSDqq",
  "key8": "3SG8V6rSvNa7i6fMU8vJgDL6cCcW79hPi5ZqwHpskRQMPGy7u5UaKbnF6599bqVAjkxMAMCZJUzo1wrtUEan55Gk",
  "key9": "VW35whPwutPvjjFNavmcEmShiDh9BzEFD5Xk36HfJWmfFP6gQaa3r5q6a8tuL6itCHhgeNmLAERac9tpQp1it4g",
  "key10": "4oYzsYRZrHhgqpTXzkG3VMw6GeQQaH5BA1XzdRaCG7Q7bBzhu6dP4PuTfHNN5L14CabeEd4SwDaL3f3qDHPG4FTX",
  "key11": "TajgutHY3XiPr1yNh24HRtukUJwFm5AVfg1YeUVo9NrGrXeeHm5htik6qNcXKk2AbRfEU291GyibV8ecapuBKNp",
  "key12": "4rSHocLSyn9sypVyHVqxyruioHEYjdkr6kvK4i8v8f1KmdPQE91PqT7bcjd7sgYVQcyMoHVU892JtEDvAc4EnEce",
  "key13": "3JstLyL7PdpYmR4RmR6Az6Hq4M56ZhwrYXrbjFnW31grZqLU2pAxyNKWJ9HHr9ZZNjfVuDxNVPcHDoxmtvdft3Pd",
  "key14": "31AVnP9u7RiNFzLeFV2Fk9QU9RKQGbdsaWjJE37KfD6nSYqii1hptmSUrXTcYRTHBhNXLSJaJZuuQBVhQzXRK6a5",
  "key15": "55CFCBbVBhkoGK5PVtaoZCwT244fYax8rPeAFv7WVnL3qPFCDTTYax6n71MMiDF3VF4jL8f1xH8Q9TawcYbizVcA",
  "key16": "9wJ9zJ3DXwoDhGf3yLJLg4grLgQPPWvymucmm4EPkspUrcLTW4QCoiYmsr6j5iuZyZF857aS9PzkSDetkecNYvA",
  "key17": "65RhPLB1MLLG3HjS8EhHVF9iLkSNHMisrw1PosRySYtdAD59b6ti45EbWPvBH6VYPFbqpXkCXAXkqb1yvHjLdu9T",
  "key18": "4KS1J31TVAwZutoN5N7L1hnp8thbYqrWfBnn1bJ5tsuuxDyVoanFTgP9QdFs7f392VKGK2Lmokj1FupZnZSyLbBD",
  "key19": "4TtcS6EhcYqd3h91YihmRxWerPAGmV8zqinQripcjArKKssrxCxQ4iQV8kxfeiHXay8axHYGT9osEm3f4MLvXFKK",
  "key20": "EXL1XfmdYAKgh2EFEVLzGbB5ywQrFsNK3hfLKd9Xf2oyaU445q9cjjcnxLj8yqzTcPUJgRZ8aWgAfKTZTPLaKjy",
  "key21": "4qbM5xE1chCPwcML85skwPdZTVW2rigQxskPzT2KStCG6cR8TbvckiuyAJY8PW6BtKZSk7QVYkoAMR8afuU2e8wZ",
  "key22": "Vv92pwoF6V2Wphit47G1Hqqxe1vqbufbvVtZqtLDaY9AawQdNbRea4oR48fggfW7zt15MJpHxoEa9z75yxBX57p",
  "key23": "V5wu64wD7eUp5Z3XjZCdXMw1uYVHjcKSrvaAPWZFxmnkLgG5quTgz9F3roGoPMJWPuGHiT5pargTDo9GJFtAMdk",
  "key24": "55jiu95TzsTze3eGWbaZs7xj3SVYaD9C1FJrojeutWHNusxozmDZpYayUHvGNWym4idxbd3uhLTVoocYbPZ9wVm9",
  "key25": "aWnHVfF1PyvVFf8DRLTpnMBMiaGCEGBwLHutaJVmSfQSbcqUwSrBdPzJNBTixRzk4zPNjqHPmFctXpXQKJAqU7E",
  "key26": "FUQNwzpYMMhUckmeXnsfPfsArChuu3C3NWgdmYxAZPwRrRgwyZt9Dy5VuttMViFwDMUEFYQ1JZUJRY64JSHCEse",
  "key27": "22cb7GYEE3tvSCKiYYYrt4GKX7qgat6DmSdNe1LXtRrrSvt3CYsJuWM9gbYRtVjKmG71EJ8z8QZ5p4i9VHCF1gD3",
  "key28": "4Ypkfv7PgiKAWjEUzuQJtguix2twKK1BYSZuXbKpXY2Hewrx31Qfne3VTwkEAruM4xo6UbWdLGVJ6qKXuu15Vizd",
  "key29": "27UNYiECUFNBD4BKWzpJYncuUGhDNotyVuNUmAHAtdwZdTvmW4ArASgMWfRuhbQA1x6p6xdnsnGCzV2RPbLi5KPz",
  "key30": "5EU2sTzz2wpjuNsq32FwJf5BXEcmQXubBn9g19R3XDijHaZwDh2uHJjFNrEnLz6TTTGcj5EzzFne2Dy2MKPtH8z9",
  "key31": "mrabarq7nRwnigcoHfJWeTfcivvExu3dNDSEGTDW5cbEZ4qfThb6TAQsuWkwRJniD9GJJEQQHGWmGChYfa6rSUP",
  "key32": "3WWRXev4Kk9vPDFbVubcdiaW2ZRTdWYGq8qngbbYLsrBhzyN7tkpFiqm44S1tAxFUWmdtYdxcG8TizULbEBWeKvP",
  "key33": "2mahhrgaDyBSoGPG8ffscdPhRMuuhPNwqFcunAdosB8K8WkEZd2Fp5PF6snhw3ffmhv4HbKEgmUqhnhZHV69dY3D"
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
