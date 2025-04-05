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
    "4vbN4S7LfLfvtBvXBycfrZhyJdyTx771k8oEhvLFsk36wAEYRwYzjaDeXKkAFa2ywfK6jNrsSDKAjxZ4qJJNJtLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RRnJBwvcgPoaHfuC8usjEeerkvdCxkmVhSaxHmbAY5PF24LG5kCttgopCEixEwnK8qhiWgqoyimhzGVgivNqbES",
  "key1": "4ntzR9vmV9h2sUot6fuJNTagzHY4AjmjBoDQHNW1WdCWE2z12QmnfoR1WQazpdwAhBCBvvKc3SuY6tdgoh4i91gq",
  "key2": "5LJM64PJArWUWi6jT5D8metb9n8fUfHJK26ZMFDggmVek8PTf2wfGibzTx4aQJGLqbHCPcCz9RkDX5uJ3asRMpjZ",
  "key3": "5pwvgLTmJed1AWMdQDGKigdRviXHJwUxFcgarz3ez7oQvcVZq1KiJS5rWXipRL2MPt2jhTzWYnAF5puquPDpaw5i",
  "key4": "3TtjnoVPPXKWL3rj77h3fp5nih3Jq8eRHDbrstSV7B4R28G5PQEZXa5yFJUjCtbD29p43BVAKjAyKuYsKfZfJTrc",
  "key5": "CidPTYatUHQ5RpKwjXqWkmbnjNStKJnD2T46Eq1gp9VMTP1rc1yCLYgWJWsuxW33mkPkL1XvTXGdRgPXPydNXzy",
  "key6": "2R91sCgK4FpVXVpxxTjwQ9fNiCKK2B2Wxrq4v2P846a3jd2LaMRrxzv6DAaTeRPZNqQHPzDiATdwr4wxjsn1sX65",
  "key7": "5Qgq9w9eScjUMYhuRUhwb2vLroBAbkyD6evp2km9iHN36oRAxwo83272idq2jZrXUSo4JKC1Katnb8NNUMYq5S7h",
  "key8": "4AWBPFh9wCeDTjh7wU4k63AR3X7rrqrpahm9NPfx6THuRhvEx6mCWRjiagCsR4y7QwPJAA11GM795bGKnP4UG7V7",
  "key9": "qs1ax1pC7frEjTwuJ8jkGnmvgqcH3PbgJZ5agMwEn2grfoUVTVpaUbJ2paBVS4cZPvSrze6SKL1Wakygs2h3rX1",
  "key10": "2fd9C42iNHAaJiYcQDhw2qcPm2rhVPZS2kdLmMB4iykK7PABY6UFUgvbBnb1oW4VScyi5RTRxuoz5hvUtUFF1rM4",
  "key11": "4FUn1BJY4sgaN7Yaf24BezQJ2gRn7g4jGLWmuwJ6WU2C3Jvbdoukowr1fi86KoduTdWv3WHNa7Gx4pztkgZwsfwW",
  "key12": "4P1k4d777wvFd5Seydh9wbW2qbCbzV37gaJcaXxw3r3MRNYWv2gv3EcpBiYK2TwUSpSyTD6Tp5cxEL7EVb2yyWrr",
  "key13": "3TVtLu5SFZFMtGmNEc8fHE4PJyEW6y86inuBLbGrphZoZidS7YCKdqXiHXz4zcFzJWrqQFwottAxUPpTjLSHvXB5",
  "key14": "49X77Ssy5wBepWB4vCuZhL2a92NZMQbxRVxdozcF4mnQgbrNpXW1nh6ZiKQUxdGuDBZ2pCd8P2wVcEXw6K7oWWJz",
  "key15": "2KNe8GhQom6uQeSUhBqHzJAMkSQL6z9bEkQPEkEoDZH36ykwj8AtFpDSNHfAF8rxrj21vLsjRGP5wpguX5bsmrUM",
  "key16": "32KvBoEJSSm95x3cuCGysBg2NUuRac5dQqb4Z2FN4uYZ1mG4xbxAMMW5bQJ8Swk9rvdFc8WWccLtzk6vxinbKeCT",
  "key17": "2nWnZAvAjnzVkDRsAo2nGg6gjL2DCynfbPHBwB7Bbxv3q4pRMfXP2s13g1ArJXVQ5kS5dxnZ2aiNgQFhK2Y9T7MZ",
  "key18": "2ZzXo6nZuy2gcpgXyoBex1d7VRivoUK7jv1wE65E3GduvJDdgd9iTj9LhHZjwLDiPb4SkLjHRagQfeGMs4ahNGra",
  "key19": "4Rh4qTM6uGy3bEUjYMf6NTvjammej5Qoua5xTqBynRSJG8hzK4MDEC7doXfoZsJaA2EHmed6rVK3WqySJbnf949X",
  "key20": "5SZjC4XBQwK3pdjot5hfhkvFBDgFNFvY7EDTPo9AYZHxfoboFFG7aB8FyKJ2i4nWcxWMng8hoXxVrZZfdy5DACTK",
  "key21": "4W1MvyF2sZHCVGv8fzAnAiz4bKkGWm2wxDXepWhVLbZCZH4vrXpQFm6nTGsrD4o3rDVBbvRy1nV16TDmHAcu8sXS",
  "key22": "5QvNDy5G1N67PEnSVgYxdnztGC7BZdTVxPSsHC89oyqBqsKXsAZKvJkYq4ymyXK7L88o8g7fFKbEMKNHPrm3ridU",
  "key23": "21QzqodzLFdRbF1YQMjjNr1VDCPN8GyB6aCjMzNBSGaoKpZb462QXLtywv6DgTCwX3Zc23AgqcYAkDnqbxg9gJEP",
  "key24": "2M6GdZbSjGrC4PrT4FipdWgPZXXg1wzg3vdBGNcLDqZBusu3NRDuXqSFttqVQVtGiUHhs4PWmHSWydGueY7joo4J",
  "key25": "jYTvEBL3cP6MERRUSdhdfrbZKhsWpypu8Tm1DA8aKfJTxNAppV3tDCxzY96uPVUDhhMHamZLq5B9Lmsioyzwohf",
  "key26": "HZSg2kyxp1hpZmZ3bcx2WFmUZNRLgNCokCoChK9vPRLa6GKKoh54V36hgseKhSwiWhhYCfmmiP1J1sndyFVeViT",
  "key27": "3i6sgbSBEY6VUMRYqzMAC8F5gBtzMEw1fnPx834TJzPwKM39XRSCSsGeqFRc4B2CGcDcmvn1T7pPvCXPapH2BRrz",
  "key28": "48zuzktCnKttduzXMRHyZwkp46DXpjb1UbMg5NMr3xjZZ6SkhDmx3D6HUeJzqrxv84tZYSoSPAD8cfDiNEVNU3uw",
  "key29": "4tj4F2TxWkhRQDmmGz3tZwqvMGDfrnwehMRiwbXML9zzAKNH8y9EAua4WcfEySnRuN7QH82k2kKjkSZBvXnePnBf",
  "key30": "2XsnZFRV5QkHonrNhWfxWwftARLZfcKtU1U6WGPJZapoZf1RBDAvcmscgVSqHR2j1pwNVmtWNzkp4mdWpRRk2bm4",
  "key31": "ohEi7iTqv5xzx7enp9Gp9722oKcknZYsszAggLKY8Ux4fo2jL8E9LHBSd51kVN4srrQXEAuT8PTYWtFa9GnH3A8",
  "key32": "DAUE5svwW8TT3cPnEHQ4kRencJzQgMsbyNQ6Qpe8hXbbFdtrvofX9bzfDmEofnmYySEZuDRsUF7Cz2r97zJHre4",
  "key33": "kW3QCqB4RwQtyc4xyGHfzrLQ76BVY8BhGKsu5dJ9guKo3haBHt2CzfsU5jzjMn7i1XtLu2dKQjLHzeTqPdXTgbw",
  "key34": "2eXa1933MAsDkDezTU4opfu3946NBEikQPTY38e5ofEKTfLHt4BnGDC4MpJgfCjqiKp1FfCi9GtUx6s7VQm1yVrp",
  "key35": "3p6AC7XJKvfbvS7pvYUuPrt6jhS2ozQruVK5me624xxvZn5HhuqrQ1TCPn8JR33zd9z6nx2PU1WFQ2jh5SHqdw9C",
  "key36": "4JJ2B3UCDv6uNHZ5zDaFwzMQVrbLwFVknnDL1nxg9ZbQxTY3KmGUpR9fTsq615cjdvHT3BacrsJseqDiRKZFLzGZ",
  "key37": "3KB4oZf4mzZCkokUs3HzCx3sC9y8dDGegZGfQTCFit5wcrqwTt8UWvdFKUuvbosEayknRN7P5eovnWiXaRHPxZy9",
  "key38": "4AWiLEppCrLD9EVQkfpshPUTere4Vz8hVtXAKdB36JND22tgcvgsKsuYrBs3e4J3paT6k9LTueefz8UunDyJKECC",
  "key39": "5x4MgWK4VCefYRvt6RVMW1mDfmY6hWLWxMoqo7ekiEWhWc4adNnFk9WJ4gkauC5dfyAeMM7bcTK2mEBJeDCnCJKk",
  "key40": "2PP27eaEpwZZ5F18HWE8LxgayvZYCJmzTZY4LW1qr8Cwta1MVo8eyTq7WT3aMDfQGRcimyGqdK53tRezcwAmjw4D",
  "key41": "2EHcY5f3DZMFGqohVyhmo5DJH4btjsB7ay3vKrsnZ51mShcDjpyyCrG6Fai8VXe8jnnYhNoPHTfteKfm4tDR1CCD",
  "key42": "4zBNEJHMTzgN2mCmSYbTgfLUj5pgfCYNrLhMW6jEzv3ghUbbtvR1wiyrQoGnFG6h3EFhZW9B6bQuppmbHPbHs7MM",
  "key43": "3MwXmmbpVAcmn3HXTNMvwzgE1rjHkPv9Xn6s3RzSBJaq8bQbSZbv9LKfWahbgpxxcRmsRBmGPveGT9am45RDSf3D",
  "key44": "tUzg4a4YsPp6aiWzjDsRhzRJwt8aB2kkrbk4yrKrZTGk4QfEi39Qn1AjNn3qQDMgmJEPPEiczwwCPD9Rh85gPWA",
  "key45": "4Xpp71Fp6JwiFMqgEWvGSTojbqpZaVuA8F283yTwwsnM9AAEXTR1VZeL2H5sZKqCV66KCDhCoPdq19oL1coPy3Ya",
  "key46": "2BEJBcqpFk6vDJXPvTj3rBsMPbmHr7p6sBMUiYCCjFgjFZvXtNpYghacdgBJ3LE36bkb1JcZinP8aXRGjntRkRWE",
  "key47": "5kePeLKrWrkRXNFTUtwJPgMTFYfnwSms2dYDC46xjisNmrGMCaRs3PxUpnNHyW9w4ppthSr86suSUVrU4rLtC9Gw",
  "key48": "3F7CPjRkoXNAvveRbvHK7oTLLx9Lsj6TfC6913npgTEYHzeD67t7PN6fipStYNGDzaqFNosf8zk8TJt173AaWZwr"
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
