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
    "51VJbzdLKNTbzV67ReRhRPccHQjfa6W7dDd6rePaqjsdnhz49zxjMYU5W18yDthfT7DUWE234r6netVckZHmJx3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35YQnkAXHynSUmCwmN1anDNTZJTZWZmzX2MUbPJ5ejA6UiU3nVkxSLedd7YeMyc7AvBE4V1Ty6NAPQUrmDJqAJ3X",
  "key1": "2ss8Zfp54NJUdwjTm3zLoeHdqFwjGMFCXTsUVaXrAzuvmtmkYdAeKFEKRvFDiNfpMm2GC7Vh2ySk5g5XS5KZk2KW",
  "key2": "5DRsi1g6dJeLb9p43XmBfC7f461ysoyMRd1busp9yw32LirFQr6p8qL36AL5ZvjeASw1BkCarRsgZffAwj4BKBCS",
  "key3": "4WGsdWz8mpbGeoD3VYZCT4wxnb4S1L3qwTsooWWWcDtgpKos1KdQgiV3N5k6pcsu6ycrSavoey7vcdeCDExys3jd",
  "key4": "2GndLPQdbWjx5k2BHdC5JnPcTcTGXntaf1GFGC6TqFqWfiPsiNcwSSDXWeHfixg4XZsWMH4orVybPEuxZo595ppS",
  "key5": "5YcwaqYarAtVUdfuGZFrYenBg7yXCCpmgH6UXqqMgnDciy65qm6CWcgembbgjuGKyJCVr7zCFr2KGJZY5CSvUcZH",
  "key6": "3FpvvfyuDp7eG9Wywxnuz1SMdf72DUv5xo97vhHCoj7vt7Y5iP5V38XkMLVcsVe3NuUzaD1kK1KW7SKrFzZWNubN",
  "key7": "5zMXmxfPnSALtAUb9zxB3xeT2yJmoHiZxkCtXUapexWt6VFVyajWkST3PNRS7qTFYtpETzk2Nq1WZZGj6Q7YaPds",
  "key8": "5uzdsAarBUzDQVhaHcUateUsQDqU79oktmmnjAxvP7KRkcAG3KNow2aeSJNPDnNqos3WMeauLtNXzpi1mjLhnYNk",
  "key9": "2XsZMpRc6mpd6UfNSX82gJ4Y65VdgkVkGnFGfFNwBVHmDmhVkomgSFwusGYQqSRAQR833NkhorZUNgcpy5BmGmnr",
  "key10": "BRxd4DHxdLrvGSzthMG9nTp9AzgnbPep7U2BuihwhbD7xAU5YJaRTPDw8YxdqTq7WjYpjr7KLYjxzHNEv4c1wi2",
  "key11": "5c5SDLNP9r5FotBxgLRmwMnvRWCGwVWyPDb6NTUZPCB1Q6cAfHS1X3u1LgTrpzy8dFdd2KhvJ1bDpAWu9a85Z838",
  "key12": "3LucgAnUCuVLNCqpxaUjADDH7Ee2hKgYqCEx17qQQ6cuLuDAKnNTA6DrSChKdqCVpH49djjspsYTpPZZC8pYEEc4",
  "key13": "3H7PbyedKKambZJiWPE5w8GFWKDwYMBEvJjeTDboga8SvW4eAQxw8Bb2UtDC66pLBzbpoGWSCU3kyp1dpR2xfZFB",
  "key14": "2xv43iwjtCHQCitcj1H7Wr1P4LXT6d3GqYwWe9RYtMUmUeEFq122TK4oUg793erWUaTC2A5b81ovjRr3TmbRfsr2",
  "key15": "4h3z8iqYibmk8nWnfc8rGAxgFMqWGT95KdhceNky87DK5FM3Ba2ZdpY8iZpFeBiUsfzk2ZpTY7z6ATRyH4Tc8Gu4",
  "key16": "5DgafURiLJN5mVjRZmzufznZpkhANbBZgJ91KtDKVQukNZL185crtzouyFBQAaJ3966puRLS1TVxtkrUPgizc2vt",
  "key17": "AFujks9yn57zRP32Jnabfzzm5gLQcHU4wdx9ET4uPmtcmuNpBMV7YjHoDL6JQDk4voKbh6KdDNDsMxA24HmsJp4",
  "key18": "3543wJNAswwkH8YcejUTEjJhSN1Prv1WA8WGvU3X2AQrE8jzoARXZYmBpZoBhuQThXdLJc88cyZoVTXf45KGUKdz",
  "key19": "2uCcTnUq8dSyXdWGkeJCUKkyzXBUuGuT2obe3bNAozcCcsGrmJm39NFqY55gqFvotzxW61ff34bNfPEmxmCKGRPR",
  "key20": "XovrBnwHQ9zcMjSSxVfoTd7nPVBYZ8X6715pSaUNwjF6Z8up3yzfvjcgE5S7sdLHLHUJ5ndreRPUCZNEiE1U6hY",
  "key21": "4zbBbdg58DUEMMfQ3mA5t24kv9of9bMwQCyBdT7iQbLptNXZ9dNZny5Y1B7N5gvVDc7WbYN2QkbzVbwVbPv5ibux",
  "key22": "8Y2tJyLRabKQ6fKTf8X21Z5WFbmu6c5keQ9bvLqfGLeKTnquFRAfFe82PBsrftRXfd96f34V3UwhifgFxHr29dh",
  "key23": "2wdsbbCUhtFpzApSoZ3wsTrxr14rWSynhs1sYMfRJSknmmr2iNEomX6T51szfbzgYzbmqtt6JPmvNF5e1Xcxv7Sv",
  "key24": "fc7MbpgHKkXj6Y6ohufCipr5ksa7aSJJ9pkKsAHAimSitusVAQuJ5NvDhXgqppQDAkekZW1WGaytEyBpdnwEDzb",
  "key25": "2Xb4FN9AjWZxZYtyXCsGdyhnRHN2ahDMJ7hXK83hW8NuAqZCBgEFZspFTjHVXWxikRbDE9iFPTnedttdNyiJsgJ3",
  "key26": "4G6uDn9suXz6HVzXMNGBAUcPa3XNwDPH3vvu3biRAiTKWt5W3735TKvY4S1nPoFPyw6Pp9K2GtnvFNPQduUma8YE",
  "key27": "3ek1cgPZZiwWPn6q3SE2hx77jcLCx8P2QFPmwTSYCek6xQNMUesKcj4rS2zte6w2ycUuyS6eCbyqE96pSUhUeCqw",
  "key28": "2Z2TwhtetAcTY7biPzrzZkDahjRUzuXpNN81vyrhmxxehQV8Zy1U2NWTzNTzHV2eZ36AvEkCXN38fQPQgiW6Q4pg",
  "key29": "5WrEfgb8zoyV6XfkccGVz8Ctd5knNQQpYGeYtgN2ceGaQEiS48P8fiWatzLCfoPNFUob9LxEih3gnXiootH3PPPv",
  "key30": "3LaRgq487crWHoSGcGoYmrr7ZPVNkS1VNhbTeddpG783ehcANVVbCuzy6bHPvsoVTK6Kq6kcobXsiMB7Q9TiTkyN",
  "key31": "4LUE9A8ybdq52HYfUkATSQRDxgW3TtQKDq3rNQaVMnqVB13auhMLiY9BFGz7P5ugQ1JMHXrzp89aGvreFeCPvnxD",
  "key32": "jjBroPjFCPuua9U8rK2Sxv7qCtnHH1LUeRqsbUtEmEB2NhHGVLnDcg9Uyw7L2tXVWAmSppMwg6tuD5GaEV4hL3i",
  "key33": "588FUHdFKQsk8iQVzzzGTJQP14ahrEKbjuToqYwTGDS8oio9grfgBvEaFgBMdrztkEXSphtvKS22Haf3Fho32xgS",
  "key34": "4DLnkhhsRcTgY1VjDrJPt1Yjt1g3CBW4VjCdFQcX28xaRMQY7Lf3pVaek2yEhr92hvVj1fnQR1NcTXREZe5Fz5ut",
  "key35": "7qKG3YgFFGfeMtP4BXJg5ufPmKayEK1wJAduLuoVXUtfFoNcU4vXFahg5pzBaiSUSt2gxoLAnKX1FUpLVdpMV7A",
  "key36": "pxMuydWWw32jJxNeazo4NUX3X2oVwM2n6PaZ2DZU8tiMzuGbHSTyguHEKnXbAQNyLdhgP97wfkLgjhZi8JxVT65",
  "key37": "2gbTYyFsaGDVYXgJpyp3mFtCzVFgK5TJjhpGXsiacx9oEa3GRzqw5Tt58Ujseg9hZbkg1w3MJSc11ft7uXcuJBc9"
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
