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
    "3zTfEjrULN3DvhKHrfLHeDF8GwEgcbDWbRttP1QeJQFBuiJGweeEWXDsbwrnAzJoNVrnD7Ay8UZAgR2oMu96VTQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qKsVGHRgvM1JkKiBF5keGEdbXZtJD6ChrUSgmByHVGSR6ukE6rM4X66WESagtVRDybmyxiMQ8WjKBKUSKdrNV5T",
  "key1": "57jrCN9seFSA1SH16UNJGu6JjcuNGG55NNfT5sPgpLUnKDm7P7QbeL69keD59iB2x8xKtw9qJrixoUxAojbS1QcW",
  "key2": "5VAcpCWpsSDJwZQjyxu6zLWHJ2F3cvbxfLr9dsMbWCvPYSj9C9jeR4Yfgg5xQrJFh37Ti6DqR1xXsLk5zpZoVGu1",
  "key3": "5GnJ6ch1RUEznmweMVWCVjpxgV58Y4KnQHb8FzkhHspT1UMpHKq5QasPgbqCZX11JatcPDH4NJW3JpnQY9g9HLv6",
  "key4": "mfWWPGiqDXpAmcSDMoePwuJkcamfuV4auSB8CvpD6dx5iHxuahhjufDyZxRcNgCERLFR7GdMZNgb4tn83hkD2Lo",
  "key5": "46yZ1EgzY7zDFtZaHYovQz5cLNs2QwbLS3Q6eJZtGAerKEsHLj9KoSdG6BCWVEj81jjBRbBWb7t2NsnxtVfMYEyz",
  "key6": "3CRpGTLZUQUj9JEFjKExCNvjk31ehxi7i1v4e8qfQXi9BbiVoNKvxqH6ApfX5Rvdw2CA8JEYQjpHSfA4mEPBxwFw",
  "key7": "5NyPMCMY15WcjRJsJMziqLTES4Z4eYfwRtEe6sQMMKzZtZpsU6y3LNW9a2nKWtKnzZ5bA6ewRTqMjYayfcnvHpjM",
  "key8": "EVdYMRKPvCccFQ4xRmMAVJgrFkQDmqJ41eYgZrkpcsDbLnMZjno9EgRrUHoRXKG27jDufvSaPVzzKSQkyBijgZ4",
  "key9": "5n2u7DB1kccQYLXR99nCCbrNG7AgWYRMu2k8LDc8sNgzgt9abiiDgBAWVvS2bvBPskgAqLSePA8xAtgp45HHFiuu",
  "key10": "4iZRGuidTsxrLrLBLu5ArtUF77yvUbniFhcQChqcoLrXsjc9ubyRYNw4Xmctqb8x9U5c1LYcPCb7wJzcMo5au5CG",
  "key11": "4UEC3YW4dCQYW8GBfTCw6uMuSN2ApRRk4tRbiFTQ91J95FdY6mNgq75tw1Jx34StAzj935BexpqQXHaPXhinHWSR",
  "key12": "2r3z45z2E3WKWnHQLM4i6UPNkWYtjx1TLLaYTuE2EK848SsiE4EfTVbY6DK9LxgKNVpXjK8symvLjyHQhNSBHyRQ",
  "key13": "3F9MJ8ZrtdeDcnQU5TaKgMXkrP8Lf7Xi556ZL5D5GMbp5sTDEFSk4XoNs9mxnr8pcUckXhs8Gu44infXhpJXdzWw",
  "key14": "pQv7hx3GVbQD2YURz1wTvbCv3gfPFRinZ6LmxR5eL8Zi1whDgHNxcixGcPFDRCe6ArGhyWGnE1GmRUuaZEoRZRc",
  "key15": "494ECe1tM1mp1D5Gq4cBZMwbpmfBErEhTHnQf1My9AKFCP7QVs4VUtC7VmTSUCgJ5mrM5FHndFReVwMquSqMcEzU",
  "key16": "4tbVi79ESUtMfBXiV8okLkLyn74isTEZvZASwjwhW9LTgdwvPZF9snHD3aAPzRofiDeX9adfAxgEmroTSU891bSn",
  "key17": "38J6P8AM21CHAH4EZuXAn37uX4Zfi9GDjYV3MijuUsTAoYtCKSgF4WcKiNEofKkjYunp3m2LcWtcyz3wFALfQ3pR",
  "key18": "3s6SpnV7mssukM8XHn5A4Wdbntg6K9k4EitejP5h615mxWgCawsK37UfsVnfwcgSdsMeqvtjcsDUYLkC8fLUtMQm",
  "key19": "4wXw9BZqqNk8fWTyfzR2vwvx7Pj5QmwGM37r36VeqN2SfhhL9uxLXvMkQZqtyxzn8s2MtopyFDL2satPJHVTdnPp",
  "key20": "5Nmdpd8v1z68avLnefG2Xy45z3t1GiNbHETcdPsuAJZ9xpytnbs6jLJpaZhqbP8XDDvHoVUcm1xmFaUkwqzoBzs6",
  "key21": "5De84M4KXBVzNDkV7DYmJ8qaJKxpr2fep4vmHJ1faWbKPbhmMaPMUsagmt8pzf1R7juRcUY2jkubhtb8PnbMs4yY",
  "key22": "5pFvR67MUUHKqCG23qsUUrAL4vTNiTzCC7HpF5Q6PH9wcCBE2zXhbudEFQcjsgmniGxB3JhtjWjNUWs8njU4c7c4",
  "key23": "2rbRRU5hUDE7SrZ1Eie9gw2iFLqwtKMWrppv8vNaJtdWDWBmxgdce54k3dDnvytLWts6CzYsVYDW9dhGuvhbD4g",
  "key24": "5iaDM8xNX3z8RdBT8ATKPd7orxK5Sr17Em61CsFrDzfZ2WH83qbAhvpM8mLaPKN9twjeRVFvokm9NzdgQhMUa2n8",
  "key25": "5HHrGdQN4jzzSfvfUHHeA7EwG1md7PYkHZdQfuL1xASse4UkJk8RsoLDzjj6yVTJExtF73M8ZNGeDBEmQES4MGDh",
  "key26": "PzdTUVsgXfU4jMfPSPgsvW5zJkKhWhQr3rncUZSuyi1pAh93gAJnE1KTnoLu13T5FRAxqtQwekXXM3XpDSowaco",
  "key27": "4ZKhC9jbKGG2BBicr9EPTfHmw9AqRRGLuHGaXab4wttHTSB2wReHg4UjzW1jJnxrgAafysBePiMPW2eMYmtA3q4a",
  "key28": "5mBY1DuMxinsNz2krQU2yqWUhUT8RLH8iisjca27Dn9J4wsXwfhJXSfosGHsLsWYbcKNgNweiw3D5g2TebhJK4uz",
  "key29": "3sN9TgWTkR3CHE9u2Ey1czAuha2hooGewBdoCacY5Wrpy2nWJSrDKyE1Ln79xS4vx5jrHoLW6vffAqRifmUZtExa",
  "key30": "5hpfVcjSNYmENk59xx4Ea8Zrvzxt1VUZgoDRudEKYtoVGt45DiD8rxbn1NfTreXePLanH6b4W5PckpA11zbooxML",
  "key31": "vUiN6AWigJe4Hp14DC32MBt2GUjJcPthyEkbUBaX6Qa3Qu3q7kfT6KXjFYU3BR5Tc1g6U3Aq2VuWXVi8isdyqyn",
  "key32": "4X3ArUZrLjyQE3f2zgGHCb97GxFj1WpmMn6uQggz3MQ6KGNwVDWT86LktsfJYsGG8hL9xATx2GWpvm7NPz62aa9v",
  "key33": "3wzQXzPze5Zz7ANZisyiWL6ojtWRXDA7euYMws4DaM5KiVqqPSPB5fMkMsNie6fUgdovTQNp9hYA6GnB77XXoHzt",
  "key34": "49hHjKFt2Hm3xaKDvhFB8KVKqmMGbSuxdYrrQCxdr1rTG5t6BxXHz9oZc2q1dELkBA2cN4dsx7DUkbdUChwwj8kC",
  "key35": "1aqRqeSvYvJJ48KsDtEuykQxdfo6PguVT8ThncAji7wGZKWgLzZFDRwHKhrBGEcdNnNPNV2JHSqhtuzk2upmurY",
  "key36": "3g3V8cNv3qTxJi1kXGySf2vLgWyKtnuKWhjT3xZr8LUtckLmSi2JkqvAeYUEDXrrbbEYcZxREq1uKVTLjLE95qxA",
  "key37": "j3pnEw3S586TdJuM4sor565e3xcYXUDKSWoeDfGMDqgKiNjKqwkDgds1XgwEnu8As8LgxXWLw8mqUp6aTPokWgv",
  "key38": "4LZTHhGDEGc1MN1vKMBB5NqRo3J5KR6HXRUon7FHcgQP91RQ9mTuQidk3P1ynszZnsMh7WS8wBxcWNnqGxMr93Qy",
  "key39": "2CMCr9PVK24K7TCaDFHssjTfGqZkaaiKqTfz9c78g1mAgyqgnSP6k4uwjfr2GxELzFs52MPqeqzCf1JWJKQqY5Lm",
  "key40": "3FJCZCWNRFg4oxcB1xHhnCcxyyTqpEzMjSz9X4FieKAgQKFimasikNimwoH1cZguq4qfsqFGtQL49aPXhHbefsRQ",
  "key41": "NxpUCNPrUW2yDrCXvJumyVJg9EJhP6oDk3cQykD7BDy1CjraAPnH25sm8XzEBxUEjNC78Za4kugtnygMzCkREKb",
  "key42": "54bnVMyyaFGF6hJ8usigpszZu3fQEbSHGakN5b35oifLJznvp8PNvzLeqzjN8GYW9ezawz4QbEk7dVUMxbtzmGWz",
  "key43": "3tRZ1BccUiytn2un8Hrmz3jbYKaKDkwU17gpnZVuLeBriPKtooqjGvdm1oTD8HyyUHPeSDm5Jh9iinynbfirdSej",
  "key44": "2q3HuitwiRdn1yqY7VbDHiWE4ju9JJhaQREiwHHjm4iegF7WcLGbSKp3TariCz5q5piYwiVhor1Gtv6vosDicUzF",
  "key45": "5aggYtQckbXpiLZHoeZheA4xYc2fe6D78LUotS1qftfW6yBH1byXVMXT5trvXp2Jp241WTzHrXX2cxEXRAY7J4fa"
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
