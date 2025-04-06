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
    "3X14JY8jbZF8cvDBmPSvbMG7GwEqkCUF7AJaCWqfVcEATBjrurozEMa8PKDk4bTGm8khd9CG9H3ts5kCZTTB88ra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dn3qH8wdpXrv52SeUiHthfPqX6T8aXLkHcxC2zft1AyQHpazkBfevUGCqhVQgNHAxN6so8ARUHuRaXrBkhXqqRP",
  "key1": "4Zdda4dLE1gqQ4krnG9gWmcsQUWrKNGhHGcnBnXGbeUzqpTj8uHUR2ZyLeihV3vnpcmMqUHxYBHN1kfbZNmiq61x",
  "key2": "5wByGmWM6bRwFR7qfcXsZHXeVaousAmtmUesquJZCEJUBXi9DzyGiVHzwqv32xjkcpCsz1YVPHnxMunpFaxEKK3H",
  "key3": "52owLFxJ3DAubucywJYsWLAqx4K8x3rpoxU1ieSJCS5JNHUzjJiMqB6soqWiWSU7gzmk5RHsFxppfumbBWq23GRH",
  "key4": "2Pm1yWEDj7uANqQ8Ehgh6aRwZHyb1Zr5kypCUKZR6xLQBYHsMJBpX1bzVgtdUsLB6rDfswrKvfvYvyVJkiEhq8ky",
  "key5": "4zYmrcD6Yxq7VuyFhgDHcYHwaR8S1wi7LYaDdYEBiUkxdpSLCu8uvQ2hnaXcWck2smqXwNCq32rugafEHP7hXgK2",
  "key6": "k9irWNbGTPQGGiww31FXtG9j8cMh2Kg151v35PjvxsKBhN3rFmQSTzGnkk4eWdRkYNUwDT57gAUmoeQfwikt7gm",
  "key7": "52aqjd6RxXV993uT5KtpfiqH5FQdkpJVg2aHvBUvfZGZtJztNdq23qZ9XbrDap53Z1xcrH2ExHGWM7QsbYfMRidr",
  "key8": "3Y99XEnx8FoygqrHJBoXwAybAjmEZSuaGt9pbit4svLWkvBB7TNtp2zBDgS3SaqjyaokpFrAjVp9c6krC8DvT8eh",
  "key9": "mjXJDP8Bx2Zppao1nzPreXJQGoXRLaocuuJkesxPdmBxeNaEGbAuuwLdyzs7VRYrN3vVBzEqJCNriWukVmoQHqp",
  "key10": "yxXaTLYsCCv1geAFeedWGzmdVuhD2Uzrk59cboPcQcdy5ThHYZDmPLGaxnPnNAC73K8vkFPuh91bXD47kWFonNN",
  "key11": "2FpDDeYrQSAPvH6V1XjWyXWc4viiuNkoajAsPTCY9shdfwmS3fkSgEC3Jd5mV6wwEYrJtr7mmn118iQWUFYW6wv9",
  "key12": "4sCAfhFVZoRnYLckA5XCi92PaySMLSqZsriWcDQKc5dw3sq6RAK2U7z3y9qPRoJLBGmqSiGvqJrWHmdwecgdukGe",
  "key13": "2bZTTTGFtuLT5CYKBQEZVxCHFWrwya5WdT6AXC3yt3HHSAsvFtMktX5nsYwRxonih3tsB9FzyMRc8vRR8Xn1fd4a",
  "key14": "fCebRnAHdr7T4A6kqKKsAEDUuR4XKujZJ7SLhEFTjMzMzCoFXG99Z9dEbeAVr9rwSyNjqSvgnDvcC1ssNkQpq4H",
  "key15": "5j2qmNiaF7BnYVwVV1SXdDMZaF17dtR3vrXRhJf2yRCtFvzRiBi77M3gp7yQ1x8VMzNkUh2kNaTGNPJTSjSCuo6T",
  "key16": "5qtoiv9i79NiSZEVTLSQRpzzdFjY1i4zvLx1owBungPSWRUfqhiDFM3KyXPbhaXqcmgmfGh41zVmt57cJzGLP36P",
  "key17": "5XJRT6yfBJLijMVpewJDEvdeRKUohjV3ux91JFuLbCEcBhZ4FtG3wJw2ynm6prNj6e8Sr9FkYBBxKN2MFHkuRET6",
  "key18": "5k8WsX9vFUdpqtLrLrxxKr1UuhEa2tcJaDqezvpoXco7VVRKxoHfrGKbPzZa5aRFMYgnZJFN1Cr7mdCV4p2Mpyej",
  "key19": "4DUz7FnEoHRJR9gFo4iq6gSgVTL62VK9wPHfpXFtyd1L78Vcvf8xW1xQMuUryuvTeZWGKhnd72Uyi5ziRGoRvLzF",
  "key20": "5FsdRiwqw5QznAxvGKzy71jVU8KFAs7MADQDJpvx58bqaWBU9sUr1zaW42kXGf53wskTVK6wkAwvwxkU7XRwgpV1",
  "key21": "4GzHYFWADgsUiFXiGMbLxcYxd8jUdfratz3VcXF6iwmpTStLJ7umBccqKv5GgMHsdfSpQStJYemoTv8vFHVPDAJd",
  "key22": "2Qeqwh14a1AYcyjaaC67444xWq6W3UCbmpUeoJwstxinAa1uLG12hJiasHLGZfW9cLovydTEn27f6Nip5KhzFRMm",
  "key23": "2JZe6GwYB1FTawbojQjW5nTuvQ8u1HtM2zHK6d4yoMPNyBhh1TW1nDp1Qno93ibPVYsWrQB7qFNETqvuY6iWuKDG",
  "key24": "5cgebF6DTPTV4szk956dx9tEx4MF9dEixg4v1WV7MqAEsYrCzvMvCAZDx3Szi1sHstKV9rDN68PBhNey2syoBqiV",
  "key25": "hpWVwvgXq59gkbsrW7JowJp7J6iM2qYmPTfCcWoNMM3Z1L1WoHaqBNaqsMrGyy6KX31rbineBuyBJyjmSYpue49",
  "key26": "WmEmQQf6VXcc2nCTSFUqM6A5zMqmrUQjb1A6fjTTxCVZa9mQ21Ea4pUA1Sf4P9nbDYBHTFVGbjMGSXDq4d1nRCz",
  "key27": "YGnS9pdLxeZkFVhoNqcubhzyYrmTkt1VYNwG4RAdXuPANGSvTGKswSidbr1TkJm6QCHuK75Ci4or9sf9wi8TRRG",
  "key28": "2gbLjDjAfWeWAmZNRdsURATucZniyQ42Lmncg2AXT13kGKTBQK52tL2ZcpxAPUK7C8ZwbNAVDQ9rPYn3zoyx1pTm",
  "key29": "5vrpV1FGcECfUdBpqsRu4ZJdmstsdfWXTUV3pnxEbZiHAYA3DdAatUtcQaQfqdNEEcMK4D2t1Z8a2T1WRqU7nikw",
  "key30": "2NpjTahPGJ832xxqoHyAR67N8RRSJ6xpRxhBU34yzuXMp7rRz7ZmSSCooofXrLJe5SFSzzZUrMbuMGCmkQqLd6F",
  "key31": "46jfTUMmqm598Qb7Fmo8zP7bqEBLef2Hmtw9cyeoMvmd2s4aL3M3HHPwSVqUbxsMiX6JV8GXSMQEJofxbJybppXS",
  "key32": "5WScTgTqxvQvMNexs8BSwroS5wbYmoBWpnHTdCLvKMTLTktF8D5Nkubenf1TegzYfrYNJTmypYJLSyqgsDKBcoKm",
  "key33": "3c4gsFB1rJkwpZr77nXeStFQvE79Tc8K7pBQGjsYXYCn3tMHaVmzA7ZCPfi9pDxU3jhSM1wqkFVSoqmXNiZu3ti4",
  "key34": "CuUki941Qz63WrELjUacxAwZrFnwGFvDen6c4qgspL3RCtErwinf21mJt2vmJDyDfEAfz4o5wrJ4uBf3iobTp7Y"
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
