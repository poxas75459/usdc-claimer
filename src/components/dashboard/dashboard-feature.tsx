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
    "2U5x5BzEXVqihyaxP1E3CBCmeHVh1y92pMYM4tvYBLy7w9C6NsbMnfvnqePdKNFY6gWoMsph9EPCc2VZZZzCVGH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WxdueMjHCGo8YA8XmiVsZ3i2e3mQWwVukGNN8U7YMhmvpwC2JPC5KjmM13Tm7PxCX514tbX6SUekuUnx8cKx4Yz",
  "key1": "2x7DwVqXooWbi4SR9tNu6AVCrnhHrKcv4kQFAi6ezBXRNWpgqR6yFxp7TV4PzF924B5CGD9wqm7yJoNnAA65gwkh",
  "key2": "FoMSpAMaGvWbTbmutaMhUAz1HM8ewP2a2VGUa33zXqqLc1C4KNLUWWF58jtT6DF6BzjDySLsZBhiNjtL1jfNd1c",
  "key3": "3zqWaqCzPs8zQUx9185MnjkRd2FBvE8XfLfyofSxbGPUce2ZiFpk1XSsY4aA73WL67zqSS6Edu39HWoSUFJVYB4m",
  "key4": "3j2NnUPqPP4km7TYwqYfZysNvq1eYb77Br75AUAGe7Sv1VoWEMikPQaQZ8qXQHBQ2p9DyTJLCUibVAUWgTbB4rcN",
  "key5": "4SyZhww8YDb8Sb6q1a659nXT747fLJ1rtL6g8rKrWhi4cuTpKYdbMQrtgCFBCtV14mVYDsA283pzNCbUPQ6mxj6N",
  "key6": "4d5an5RpQkn15MakmDDKZgxWo9VkqdMF9QV3Y9sYfTdnvMxDMGx21oFCUUjJFAXjjfYMjNMebMfcF6rwP5KAE7DE",
  "key7": "49MAbvxH6oqXeazy4BMhhydY9ReSS9b76gvHnRKXEp6wnLHAtr6zfatVUTANSwqmfBPRR4FYv7GUKS12hxjNuvxx",
  "key8": "4HrB4HDNbeqLywNZduU4E5T5UJVxwUVTte6Jm2vhuCrM2UE1MJaqWN3TxGrWAAJmhQ7uh4D2SkudHxcc5VqE7SHx",
  "key9": "5VWcLKZfyWvaikyuxWmRijfjFHiThKT8uKgAP6ZBzZgJFocht7f9TLCNm4MvcPsV258esuUKa3aBDvyAzUZkYCYa",
  "key10": "4CLMNswxdxe1owJhhJmsfb4nxHQJ1WgC6EGu2yArqYi9Gcq99zJFP6J6R74QQdfzuGswivgYQshukHP1MvKAeUur",
  "key11": "4KiX5cpAQe2WGMQW9gja8rFwm2mo1i3Y4WCiDwkKoMYN5VsiPbTrxd9P14T1ucYtSxh6Be9QLw615YDMGB2U2Pvq",
  "key12": "2r8RAC9JpjfkWHW5MzN29ZxSgYb7eVJBWQb8yEwHtzmdsfuxuwTGAmt9hB6vFjnPSdRdBqKLiBQtPSTjpMcxrvWt",
  "key13": "3ZGWrCdZwSfeWtxZyZHmDjuGJgHy9a6XBD6fbF5eGGpAx66cX4VVzNRa81EjpfWXudEFLFa7FzMv3H2THY4DZRx4",
  "key14": "3ZEBAYSDkVnkz7tuJM9iKFwhES5Fm9ow71RDUwL3XvXkyY3hCb9WcX9LxzWd2kigsUwQyxyUTFBYyizgjMfBHZxX",
  "key15": "5A9FBX3LBL2uLjQfcZwErj5D55qE1NfspSWVDiCNBhnN1yhpkhimumAfm4689gdzLedrvSWbrYAzDmXHZWEPLN3e",
  "key16": "ENk2sovPZesyjiC6bbqLZBGpXyjfXAVWm3Jrd34xcWXkMQgxdJfH9QP8KDR5xPvfsAAiMZA4WDtLamYcQjcaGZc",
  "key17": "2XMHKnWH7qFSfTG9D3BN8u9QbG9rZ2yJhqR4knv9LrXdKvcVwhVRWaaVy3JSoaebbCxMP7yT2cLKZ1RE2tLRitP9",
  "key18": "5WiBo8nkqMtMAvgiGAbdDSz7LyHfnCmNnKKpR7XtK6d42nXeby13yXQ9RgdL9E7PAQ9rgJKgUoeLSJPba1ubx8t2",
  "key19": "2hZCjcdFcPFqBTytQ74zmt3W1f3vYZnFcTEjmtQkzp8qqB8ajAs2cMvPsde3dHQE2haXZyb4rJppxvSmyvbkWVw",
  "key20": "3MYWCLSZbBWc76qghsLkPpFQHt3uyhAH9ant1KwapZ1XjpbaRdMS7A5P7fWKhFiD8vmQWYebUYLtcsLvDrtQvqoE",
  "key21": "yhL8ykev5iEQPfzAk6DxK2jyUyg5ES6oLPPbFSfDCJZqXFyJAmgiuL6uRZHX3UhCWuNKWRCHoeLa3MqaqNb4urF",
  "key22": "3a9wQoKPVXgiNHFrbvJCgye76kUFAonR7jKPzTSrCoMjprqGXBqby49whqhAXFquP7sG8sCMGpfYgU3y2JQZtKnS",
  "key23": "3LUqvH2TjU9odYRPU3kBqYgLoAFn77kg64xsZxe2D89nEVAUeHMzdBSXUGDpC7n1dayNqLCdCijBUNHEdHeRwyA7",
  "key24": "2Sq2shBYa5HsbxHxv3dsCD6DTd1BseU4gznPBqeuCS3GhtGBtwE6FcqNVDzepvJep7iNXPK859xX1PE3gu6NaCGL",
  "key25": "3qUNqwTuuVHB5TYNpD7sUw57YsJG1dF294Fe17ch5CmqZsgoxrhND4BLKWtt2MPXd4a7JwNivyb3AyoJ55NjhgXK",
  "key26": "4giBMim8oaZsWp1c7EtvcmuVazHXTk93hPjWu7EEsSvjpJ7DXU2ugzbb8nGzqud2YAtihYPW2zS6JwhKLpQHMVFh",
  "key27": "2vQ8LmZcxdVSy4s6bKjepNUhHD1rff7ayJHM59dMVrU7NPrGaMdFqS3qDjSNPGSP8649eLhbiupw9A1tEdH1VXst",
  "key28": "58sk3JdMebZ2mKsqpz4528eVzUJ9SbiPfiHgZgiquSDuaZzJ511x3AwMsMtDJ24kjo2iaXhZuvZ8br4XfCrvHEmx",
  "key29": "EDU39dPRH2z8BaVmzzn69UsYSKoPH87Fpua5GsYAAjDBK3q24cP1o29Sh7Ew6u5qQRi5tUh2xUuVnMYYvSohRei",
  "key30": "3GYDekz3fu21TV7URyPZ49yG3dUPdVcb669h42Ps4jyScfDhvv8H3Qi24oAp2SKookwAoCER8RVXynyJuJ6DBLGd",
  "key31": "3HFsKBivBPAKBYeYu6JTdHyRGw3wiEBo3qt5qz2MDPHS28PPyndQrcESCX15ia7MEV5tDTg3aydoZgQ9zpddb4sP",
  "key32": "3FnBnJtFyWcb3SyTF6GhK5a8PAs9iARAejKWNv56ppShbwme6VDKtoKJgsGaQ9DkaZ3WbKvbWmtH1dNYmHj2Qvwa",
  "key33": "5evCxwTLaRTtWCwB4x5ZZCddiaKFJjtEDw9kEGr6Bg6y1ZKS8wPi82J4rARxXYKrHzNx6ExHfeei4SLWNdDEKe1Q",
  "key34": "4Eujmbs3NPjrLhYmJm1gYPkyVthozwjh7bmvfkqBeCv1kdhtBdWNoZRRCph8caw6fC2QRcUzRbrmnrAM9MXNhjik",
  "key35": "2uC7GNKXHfzX7dSFGyt4NPv9vr7s1gnXRk6vscqzEPmn8LraNHUk9EYSDE3eh49rSeSCVmQEWUp1dWMBapYKTUtp",
  "key36": "59CxW6VoD4uKmdW2whD2LbhUcvr2kPe8Z6XkWQq9mXzf1rQJbz8XCTSNCzv3AExN19EyduVLuvKCFEADnH6BtWwy",
  "key37": "2gsVFQoGqvWbE2JqBhSfviD5mJWi7PMHsdJw9nJmyaWhnE8xTBf8QQXYwdTuHRT9LNGbSeBvc2Gbkoojby8CE7MB",
  "key38": "3mvYRVBtPFLKmhVkrbyvePPq1Vh1W7cJQx73QVn9Yafyb6DUWgUdNtDuXN8fkoJrauWYVximd6JwAerZCApssWxN"
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
