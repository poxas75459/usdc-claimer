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
    "38N3gdfCmoWXH4MGCdMp39V42V9k1bYZKfoQZQYPZ2mTDsY9eVfAniDqL8miANp1HsCURw6sp7mPzhJnxQN3AjVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45UTfV5qu8JCGw2ePdbKhBjRzcSbMVSV15H3ttd1KprNDTnzyendT7A5rTpsjUm3KdsDQRifGdtqFGSxKqXNey3Z",
  "key1": "5fNyCeCbeTnXpgYybHsKo7sLNeVn8rsVeuymBLy4nJSXD3JQe6Rdw7Ep1ob3yagr16xmm68exybRdNYU1rnJzQJN",
  "key2": "7LwzssNvcKCVCTtnD6NyFjEAkE6fRRverNDuQ1M4GbRyVhBCzVvkSDakcD5DiwzAaT2qCuMVHDw4qD4NZJkkZ42",
  "key3": "48NADbyzCH61zrqFKWuNEryEZhdMTtEvS1avzAJGYfSLXoWxdTd4DFT4rMME9diPPga2Mk4iFY3fpeBpZPE3bxC5",
  "key4": "5RGM4kw4on8GS4a7n3xb5MWWz8bMTc7LmWhinUutuHpJjPJr4W5MGfCnDrkToEunBkG2giS7yMV1b1m7gmfvkhj6",
  "key5": "2cddrVRhMCvW4c94eGyvB57E5EhQvgwLukhy4oJW168TMJkjDYrjY8kuib9kUWsx7d5Lyr5KjGeeoP9mpRKDZm9F",
  "key6": "2hPMDdEjxv8bZaAL6DQECxmrr6PMqEx357H4rq8c8bynopie5RMtvdzi1B13xAyTeBUti3SHsTEkNGMAUfmdHKQ5",
  "key7": "aU33Amk7pE3ySBDu5Hwo9oVd8QvDw7e71Qx6CNa5KXjE3SnWzKVkg4Tugb39rcVxyQ8PdDcDSXsAZvQ9gSqvoot",
  "key8": "2yTG93v893pN6bmjenf5zUYP7f69sUCBxmcegDkdNgKHEp54vrH8DA2cKBkms2uh9QWojgdQyfsSYQ8TEDqXkeNw",
  "key9": "4bjun6Pq6q5K4jmYF7f55jdxsqPTE5E41EoSeTSQD3sqrReCLwVcF9gM2VruPvpKLeRrEma48xGPiLLzrDAg2i6K",
  "key10": "4b84hkq7R6nZbDmzUNE3saPyvUNpxw49o3an9kWPUP4K8k7rg5NHKCXfjqKw46Y5LANhCYSvYJ5QY3bgGxyQfy3t",
  "key11": "3pcsH6FZoDJ73fKxefXZZeFDsfyrnpe3hTb4bnUZyHPKRevGsnMJ2YwQNUxQ1H7nLNoAhSwDdCCwmYb5K6dfbipd",
  "key12": "VNVghWbb88v4VbQVnffLnGLNt5WR73dfebJQfk3DpaWueGNv3tmdnVpkqPromMxTekFAqHVGqer8DKcYDCqbVc1",
  "key13": "65EDJph8WN9FmK3dZJ7uRNCJ9tcbpbY62xj4vjxrQt4PTTN5Tuf6xBaG4PMrheeoP1W5xa5KVSMExGZbdQf9QKt",
  "key14": "2MUrVZQHHfvJT2hkfD2wYUYCpfQz5xbzikjx6LhBFaWFC7tXXuha2FGbt2FYNGV1r5P7SLtSiWT5gF2JRJeKm5VC",
  "key15": "5PanqF8EoRJZ196Mz23pm2gjrSfuCp9VNJeJjQEX6zsMUpsX9DqmZxPbSXnMDocAYAgMusctGAVNHiNdCzmcmHk2",
  "key16": "4D6V2egZsQeUP2orBth8bqCmSTbuKgURfdt6ibDaAmp9uMSiScPVkdXRSvDnSNHuhqmkyckM4SQqB1M8VAtiCee1",
  "key17": "3brstPkoQERtASmUYdSabgb9G6Q1vNdYikqKhwawttUrHn5EraeA9SsRSxxPfUabqHf88ad3H7uN42s9kJe1xrbZ",
  "key18": "5Lfh17YtyihPK6SHj5HEs6iJ6yAAN7LXx82qkFucPn49Vhvk1wkwSHUvCU5xiTVNAELbsbqSMLeRhuazxgeUXVGc",
  "key19": "65DptTA8MKDm5sJPzcCuPt4RzkLh3T2xCtfPFEXjtkVP4mcxjCqYvccziJq9t5BGateLTE98mRU4PJ3qNGWxqXAi",
  "key20": "4ZyLh1cZAyywSz7b8RtHJcPWcwdEuyLsRYhPK6rQ55xDLZKpprueR5R83WUBYkamakM9cUTwnAgmRSGpEtRoPPMC",
  "key21": "4c4UCopgW8e3mDEbp92YzRb5ju2WjjLqiprmCDPsd7eqoy6EvC41YzmhGRFfaHa6FT5GJwGZmndWU7BRSEQKzhu",
  "key22": "2tL7MWriuEDgJCTHFn4nMheDUgZErBxtGYHRiz4HSUPbwDAWhhoY79vwKfkeo9JRoJ7aNVRHBJQB7qHUxWcpkSby",
  "key23": "4Bbe2H5SinKU4iCiTQPfvAqPGH5QFQcPH4mxsCXMBxadEgB61bVXyzusrDrjFpMq3AYJKzQhQPWCuFBZ2LFCCnBt",
  "key24": "5ZF5Y8cxNinH9VLNF1gohUSPq6cMd7QXmAqHw5HmVUNZE2uoy8QE6L2EtgKkoBTsPWqJV8Gjfnz1qsZ1uzWziU9H",
  "key25": "2zXcMMG1Vy6Jd3mrSEQSvcBSMAgPSDYYkTPTuBhvG1nDS4YdsN5LdBwVUPytee81RbFXJqcYFu8ueQTPBVmVT4Sf",
  "key26": "3u3nj6YhWBrYfu3KLiGBbLM2uLrPUGfpDLaj3tPyT8JRTjXsMozyFFkTSnyah8hbM295HwMAeJ3jH11Ray7wnLWf",
  "key27": "3LH7YGUGYqWYATe3WZSQJBYmxNG3H5Mh58wWXByWtQNtTYXbfCza9GJ8zA9EKxbgew4BDM9ZoDVtNyMaKJWGtWZF",
  "key28": "4HuH1PVoXr4HpVwisWHtAYLvGb3wBLxFzmhHsJsFKNeD9zFbDgTErwzc45EejwsyZtgmM1rS72bACTEzxBaHdJtW",
  "key29": "5369sfDGiWWpUNTYPJRLmsj9yUjTt1j4G1z3buK2pfHz8a42MBdMkshfXw28LNguFmLdynFoDEv1fbsgyRP2Z6Cs",
  "key30": "3JoS8s7gKmSEUXLTAJVd2aqHVR8y5ake441zuZBRyLCbrT41uyKhNbzmsLZr6eU1xkb6CYXzP5MCcbAXEqy9G2pD",
  "key31": "AQubKNerEkvHhZcaoRvR7sk7jFCyfsK3MtvZxJwExNVXcqv2njWyuJv6nYVXLvXALhH4Hro8Zkrsfqe17eEpBTS",
  "key32": "yhhVafPYAAfZ1Egd9maSf1tNQkw657tZULWaCDVYKKSfdJACQiNVHxsYPfkmYjG6obTdMHYVuzn6ZHL9E5dxGYj",
  "key33": "679XYiH5sMeQTakZJCpkjzmt7Z726fwopk8b4jkTtqTgUXe3No2HVLmCGqcf5BtsiPT7uGLri4M6hqjKXz91u5A8",
  "key34": "CBYNudRfiU6hxDFiC7cUHtVYXJa6ZZgY9mb1bq3gCHtQdrdEP5LQZH5jNgCT17uyTCdbw4BrNt3AkMrfS9Lad7x",
  "key35": "5nNFM83yyFrmpaccQKpWsAVcjoYA3wQefpLX5DgGeyFdHzq8AZCRDs4GZAviuk3Vsi6oqthXbSazaJZjr9gBfitj",
  "key36": "KHr3Ebvo7hT3EixBCs2Zify5bf4AvqYdq76yxQZm38iMDN3ih2x2o1A7pqLqUo8Gk61THpCWkfoxyPJWnsL9Gs4"
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
