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
    "2bHZK4uuajBpjrnFhH2aGfFSi7w6qk1ZEZQAVvCbPHRXN9dvznYYRcV5hQF2VDyenSXS8ihKtN1aMhhKr3yq1MD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R6zbxzp2E582kytzCqYrLmq7Ufy9De3Yek7oyva92EwFQLxzPgZfGmAqLuAKEHuuQWBxxhdGe1LSBSoUzfFkiFb",
  "key1": "SmhtkF3Te88BNZ3AsLksyLXSHWHw2RzVWV8xWRGB3JhK3vsyBQsrkQp5fuZw6mY6nEkZhnnCNBKGwTr4wvTcZLT",
  "key2": "5BEHg866JdsDgVwFdVd6FUp3AHZJS6rpddpofKcLUVgMXF7qKd96cDgj8PsueAw4sqF4Lf3yVRpSspkrfF5X2mbh",
  "key3": "3ramPMZTRwgGKGQkU8gLQuVpCW36dXVpvUHSA56x5751HB2M4zPqE2yDJLZCwWSsr7qeCc3DNtG1mDcw2jnW6eh1",
  "key4": "43MT6yBRskEor5QRAbzBchqcRANqjbpQsw9DUTbjNZeDihTR1gAk2QisJwMMvyoUAmDmApJNbyGBsG8tDr6gt1eS",
  "key5": "4onwbpPfJVc7ySchnjhyXfnhJijXkGsXoJPST1cjGj3vrUxxDPcgYFS8dnZaKuEbDpLxeBwtHCVvTbv7oEJkqYPK",
  "key6": "2QY87HcBL88D91gd4bGyPMdUu36WpZvJ2mVHNeqaAZFZasVzkLfyJ7K21rJeT6xaRpq957nH17mHSbCiuTxEjngF",
  "key7": "s6BjTT8i1824B4ugdR8nxsD8hwjXMbroNnkZgZ5PQ779v3NEjsiXzE4H9wp7EJjCHaVf1ySkKC2vDge14irdhdp",
  "key8": "29M7hv96KdPtGjiUeMcJz8sdbDAH5jHaPMPmj8kBrKwMWSdbApZB8A4N3bsdQ2qpFXoNK9s99CeS9VrsDRbW9LKV",
  "key9": "gR8ewUterBsh7w6zBsaBV63T9WaMXSoH3Y7ovo8tdF8Tx1tqQ3fZ3VCj26JL2ijFvzAZzadFmJNncaD2kRhGv6D",
  "key10": "3ZbCQ7ncJfkkdiHeAULooWdAQLS4rZg1hwj236inuAWCdJ7fiLTepEUb3oYLTkQLNodAGNceHbaXTDptPWauyw9",
  "key11": "64uA4ztu8kgDjigyzY3L5q9p6y6Px4SgAArkvmSFGpKc1oEo4QJTCmq4immemHZsKmgPB9KMtni7MPPd69Q1jWLH",
  "key12": "3cHcBnoJf7rYCmEr3qGXzJ7b3ndY9YoPwCowLypFgVG2FkBzEYMUErL5kRoDKGi2scVG4wUFPGNwpkMGb8ig8zxG",
  "key13": "zuU7RYSrZsjEApJn2iqh5sJiyH4yAGwzTMHAEhWiGGRwuEJ3gcMDdxWokeJajtfBw6DHiBVRzRV9mpnwUxWhevH",
  "key14": "2pwKyKaDWZPKW5gjgHJudibhEJVQwFFdV1EYyqjSBRmq6iXu44HH1c7MKBfn8iN5VbGa9Q55ZsfkzqeizrDJPWWd",
  "key15": "5jFfx7YYCPNbgmksnwK7QxgehLd1eGJNSmgoZmXehE8fMVqePvNQVwM6HxZu62d1Kkmp82QWzQgNWXix2Lt27Q54",
  "key16": "2e3d4DZfSxw8gpaqK47TcSDkzZyk9pSK6bFLwaH5R1eZbncCdZwhn25roi33K13k2CJB7R2HxU48eUuuCfbG8hDf",
  "key17": "2NMhgZYLvM5WP7f14T6FejWPTKYs8vmdvmdfiEat7PZy1atbVZ4kxKWc1QD8PuWEFJqDSK1o42XQ4vZ1vjPBFNDM",
  "key18": "2DP6vbTpW94hVErzwUwY72MxhC2VemTztbL7Ny1MYcbY32MC6K5ruZ3GAG4kFsgkdh73XrrP2xmiZMK7GxnnMwgY",
  "key19": "qWtQ4yvkrxcwWW5Rb2JqnVQLCxFan4dvSmbaLQz48EJ94EFh8ih3UJj9z6TqGhU5UWR63DFBdsi5J7dTmZHSzkv",
  "key20": "9vFhQ9huUXMmr7F4eZkfsYj4SLopUmxyMqtiqBngCubPdvsKb9NTfDqm6CNwvwppv2gRQ4AdJVkALUAwNinaTP1",
  "key21": "4ACBDUvcCqe27FBVXkH8fec228L8tPa6KtKSnLXYJL7efcK2VhxTKX5xCQY7WoV5rgLbTri4CaMHT9Dg7Trh2RCU",
  "key22": "3cNqPEBYiRgK7WHy8BQakJsmJxCsRB1fnXqQnTob5FN8WvTvLYhoHKuk33VUcfX9WP4CLcCH8x5JrQxovyuAnA4E",
  "key23": "52dbx4wwrdbXMxivEMPxbHrxUoJVhfbwk7KFjL5pnVBKebsLWmn1A4vjS8LvDrpUDBLCcQ1GJ4hx5mLQc4T5Vd9i",
  "key24": "5LbV5a4LfBzPypkv1vaw8Zagb4PMz3qEXbKttEYEbrtTQ4h79a2xbHJsL2P98kMngmyQ7LcG57mrBV5R6D3p7cfp",
  "key25": "3gzfBie1AFZT9gq4ytRV3Z4gFTcxBgZhGMGSY1grTPMKMWqT2EivqgjFoLwqxR7AnqkMcPfJJo9dfptR9SgEhE8A",
  "key26": "tbMoMdFwDyZEzNrFBbimob3A6La4QDCrC5ZLw1BtTsKZCbEgsLts4QMBQygio4KfH9BWvGHvWsrCsJVVDoVDFPw",
  "key27": "2E8EmfxjhgiqLJmbRWbK1m6yzsozt1CkSzQhw2MaUgHpm7KuvMRLnUHFYuaH1dYpHxeT9wVNzDCj54o4fa5Vg82v",
  "key28": "2VR7RrpB1beurETf7mcxF3vq9AKWFGR95nzvPAt5YHzkKCbQyB6e9j3CgmnZPuLa9EVAvT1jw97XmNp9zj6t3fbL",
  "key29": "WSuVDqDuxfv3if7EVbpqXCsxdvZaFstDyi6WWHghDRE7rscCkHubUjbBwWjkhAN46n5qHgEc85TFZqmMHTS2d5m",
  "key30": "BDYHN4UtrgekL6zMe4Bf4ugHZqovEALnd9mSk2AipWKZvisUf5b6CLN2pndUyJuJw8NbyntFVunzLetxZ2Xhcfv",
  "key31": "QX2ZDEYWCC1tN9mhpaEA2dF9MoGnyW3dUg3uWYhy1phpm1mt156kybMSUiUbsEdyZZBANX92UCEbwQby5u7Daeo",
  "key32": "55yPpeJgBbt4AwSwHyC6pdMFoEBPpSky1y5B2DL7Tyvho9r1Kh8VRfXSJHJVTDQ71whNZjKyXm7y8JKu8pNDR4pG",
  "key33": "2rLK1TPr6miEc2b5VcS3NaCZLKNh8Gqfx5jAAnmsmANwufstnhci5j5n9eM8hmrN7X3FkfebtDK775vYJ3urxhDs",
  "key34": "2QkPGSs6gj2J1W3G7bUA3kZYmwjb965VuVeNzfkuktae8woKxyAeN668NEKnjLyzuhTLfwL8D7Dd529yKrqjHKgE",
  "key35": "5b619oT18JHEWMRNG5K4qVG7F3JU9sfRjjpU9jzhuKW8wVepcF7Lpj1nzEZwNhFfvYzCmefBoBXW9TzRuZ4TYoJP"
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
