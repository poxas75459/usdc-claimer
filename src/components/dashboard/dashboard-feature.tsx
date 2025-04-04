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
    "677gHozLshK6LstzMKx7CxdSw9wZRQ997kis7bq2oBhxUxrgzbSLgWBoGhaMuaEC8bTpd4k61TUgM5DZiPKHyUr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V4At9Ekgk4BWyzSjQw9G2QetFqDhZhniYtYSJJ44bWqNbicMkzv2v1R1Kk6LNQUEUEHZRKcGLT8L1KHvXKYjhC6",
  "key1": "5rWt1o9DbkxfJLfEBEDYWLGG1v8mN4JQWGgDWm5txJSrJUtuwTu5VNajgaxdnbtR86vRya6DJgGBoKygpLC23KZ8",
  "key2": "4exyDDLxQggjkkSbPwGQbkgwQriTLNxznqBGfScGNuE7C7gLtxCyqSuXRA63yrqC5m6MNfVQzP2YzPcM2s93SwQH",
  "key3": "2THCfWMSGLZXWyfKwQeqi4Nnf8dLtqTRmziooJvBBrWXWHauk5iEryTdjs3A9Dv1sAbbRm22k7wAdmt6rYoxcmUH",
  "key4": "3dbYNLMcSBAFPxY521m2BfxJtUPxJHNwLxkYYc6BHxwm2XgQMLU71fqnVSi5RUWSYPXoW8o2WA2KJLJ6CX2JLWih",
  "key5": "FdqUVt4666bUbYx1BMDPXoZjaJxLQgXBrZZDzJDGDwVsaxm3RjSNLotvJpHhrAWYTY2qQRfVL7zV4w3m3qknQrK",
  "key6": "4QVaRfU2qdW9GHvfPsNjPNWGBnQsf2QKVqLj9boE38CzLtvZizyWfRdxQAjbSVGVjx8YYnfJRfBerQUBWGt7s6Fz",
  "key7": "2E64qcP6Pu54RBy9W5yhaP3WwoREo92fqF8CgyutGDBZt4AgSYHuSqpY5Ejm95YuuiAbQgJF9vaAnFY7wbMVpCK4",
  "key8": "4hXDaVNjJGytPMFk6M4Z94LkCcfNL1TQx62DHSqVhpwdZyw4pH2DEvA8PywUcHA1NrfTsZnQ8nfJvqDCfUQZibGS",
  "key9": "4jEAuoCewnbXKVMKALwUCvARja5YesmVtJdcNg7obZZP5sdPJ7k7sumSBBE937eBoyxCPhYvAK9Qs4bgQYMYjVvJ",
  "key10": "G2iSitUvBVwFjVmLzhCF27MvhJmm4u1Zao4UhcJGhm35fxLQ9aE3oJRupVGRx5Gket1EGJVqe3ig6ZGC8KSeT7L",
  "key11": "48xoq1Udhm4WPU5eHBudYePFEZ5XgurZ4CnXCuFK4ALJHcdZCpA3VMv8soscZxjrxF1kZ5AMi1trfG2CUqBWTnq1",
  "key12": "71EZ48JN1RCdug7qPE9zA6BVQtEoLBzPQv6Avs8rLfrKbTPYTRSCfz3FokSe8wtLmKd79QhucUzymc6xzzEps6m",
  "key13": "4ctgM2q1GDLDR4nt1EkyzqPi3sgyngSdRfXX44Lbgh7zdhHMy3GVkrjdpbhK9xHF1AeJZWbqeBMMZ2McRUjiL18k",
  "key14": "jLGjzGbHGjcrspzEkr91e81MXh2CXdVnrFx34F1i2YMQmtynQnnzKjSYAmkb1R39MLrJSyRWFXFLa7KeAxS34cT",
  "key15": "5KpJ435yw6x8cgazG1q44WZxoUzsWMw9HSPPmNGrZkYdr9zeQuxJZuD7XeqnYK82hVWyeuAuiKfjfk5mVRRubssh",
  "key16": "5bznwxSX8LU5EcdSY7Q8YEJFzAKJszaDXuwD7LRxmUbWpSNnbkyUCVaxtxsJqj9FSB6oEUqFUd81xESC8B8NupUb",
  "key17": "4RTjdXkegQAUis6kVDL8hDezAKyanb6EnCtneJu661VRTgxsQ7y1wVJBPEZssPacHnXNYi9TGY1gaegbkWPZB8FU",
  "key18": "2K5FCAL5reqRmN6iXRzFavbTVRBKT1Wdf2zpu8djKjJY1gqhRbg5KwWzpGJpC8yFC9NzS3VHsUcaDhfGVpG4EF9x",
  "key19": "3wXfbTdhkYDyUggN2ub2h7RKhsb55mr8Pk5PYKXY299bWmxaNDcb4GVh3JWK7KNxRgL8itMEHNa2ChF4KtnEutqn",
  "key20": "25G71tSbHRNXUPc36i7iS6Jfg9VnMQEYCQEQDngxe6mPRitmLtPbGWTT32oK2RGPyUKgXuwv2zGR17vgvg3tzzkF",
  "key21": "2FQctWEiBafEkY5x7toeJchnBHmqoUeshemstsYqY5NKRCJBNVE9XrWuA95YfudeQaJ9qz7jEbKT29saEDcbuPXD",
  "key22": "YA7cRjVwNNFKjFjBmkUEz3rpsLCXN4hXFFcY97vAXoz9HU9xUsAGgtrUbcmkbcCUak6PyNdUG1vobyPK8h3EoLo",
  "key23": "62K8ARSV9uZ7qEk7t94zheKN13KEP2W9h1WUE3Yn9LKRvgZpZLbKXSUSc5roYEYB88dd8x2kZeJtU5KCESx7wBhY",
  "key24": "24GVYpjmeV1hFVx9JjNtrJioqsBXajD8E9EvUwsnPrHvXkK2GatjBAEG4p31FUgNciscUJPGqksAU9dUreR35KSj",
  "key25": "59VMcwkZbSrMfmuLJL4sWDXfEBsqZ778p6c4yNTRiQ58FWaJZAKMXqBNpnrUsGE4bRUdWGYM1tRqJDkYy9MVMQKd",
  "key26": "4gU1vJP3NZkBiAqNZ7K3hgrukZ25ogkVtaqzQ8TwRZ6uWhxbBQiqns1SF2TDga6xYRkZeePPJCxe4rZrMZK1Su3x",
  "key27": "4Xsf3WkeweHuJ5xhi9QNmTj3Q7ytpyGUoDffzbPesDShhtLBRuVd4xLiEDpv1HVanF5BExTGLXhfQnL2ZZ2g6Ws8",
  "key28": "84PvTBYUX1fYcnwxc3hxjFCvfkQN8KyBFDPYfWb2Nr1F5pjW4QVUKQ3Y3m8D9zmU5wGcLH2fQXWFG6JUPhkqbKB",
  "key29": "3eoiNWyW1gHKLkUUnPKMDxocR5hBGgfVPGcH3Ta2gPimkyNNp6ZeYqTCbh9XxZk28Ax6W2UFR4jPo5GKKinBJQcU",
  "key30": "5U4BaR7pwC9EWZzJPZdr1vHLg7Cd4bf5SV7URmg1DXzpx8hCVKDTSSEu1NuMTSTaLgfrR2vZGh9JKyNCQj5pyAnB",
  "key31": "2bnnWBcG7TpxbDvYXLxLv9KNBpNGZs53kE5x3Uz7rPwRnWxikPQztXD1Y3k56ndQ79fyPdFaaYF9n889m2gjjCX3",
  "key32": "4yvikdiPoooPrgmWTsnYyqj1iKvKuYsZsuQTuZjuncgQebUDwbNNyKmUGf33tyidEMpMEzYV8rEkv6fuuGvBZ4Pr",
  "key33": "nR2FQyGr86SfeDTjd46skuXk4zVSC3S8fGoCDh5Vn8ZPhVa6noUsHWWigcWtEFVvx8sW6MDFESGcSiNUu4LpDiL",
  "key34": "6671SdCtVWxneaLXMa4CQB8GXyWcaB1roZonAN8BRU5aE6VWf9S9eX4jKiPtb4kigGHMzjKMYk9hApqT6wEyLGp5",
  "key35": "3q28TyPQn6hLXo5td9adUj3n2FNtMEkRutbYDtcqTmEDPEMg8LvXziYVgMaSDivirm6wkJgyqs1n9t3y2hUs1PiT",
  "key36": "3DZSYyMgp2EdEXUmKoeffZWkQ6EcqgQTTNX3FmfcemKWmJciRhCWXJ2HhHF9i7azapH6iwDG6c2iQoMQPbVmh825"
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
