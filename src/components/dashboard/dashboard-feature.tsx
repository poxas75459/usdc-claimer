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
    "5i87fZ6usCEBLVqCMWsCkHR6Pa7DpZBAKVJaBfMbk5jM1V4P3xURGQfW5vUAhfCiEwpsZQhshXrNEwaYqdGpDRSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P9eJnvYUB5BneN6Bp8mQNQRLhwLH7j9QqqcjSDh8JD5aUyqJLijTE1JiNaUdaW4mM38gWjriuSQssG4FWK9cc6E",
  "key1": "4zF3u4hbJye3u561AXAsmsme7wpfgyrEKckktTHbFaVR26Zv2Kuss35dSKcSZhM8oGYsx8fgP9kEBWoZKtSZV7Vk",
  "key2": "2LPpDK8BieiN7FXLt5ko4dTNbaHqvvuuLksuSUYnDHSYNW9EzxtjA9ERbyT35JW2rM7AoPwvXLS41j1EQC9w9Gef",
  "key3": "23vxMgBB6wAApN72ZnSKkPoBfi8g5QijdxYKoJsRSdb62NzuWtk5KnBRJMjyyhL9MqPzjYvCR73u7Cy26qciTxFy",
  "key4": "52S3yWPxyC5yVbwGaCnrqbVAkRFBS1mCKypqKBqTn7DpxCQ5EDaPGRSLf3CeCArF8Mc1zBLBwbXiqBdwG8aZFxLm",
  "key5": "d6JpW9ECGXpuDYLykEaYVFGBtukVRGc1WsoTy3Mn8WYK8dRK6LYKdPWBFDdZCSPvaDXcG2Dc6NhnNf5wz45jDaw",
  "key6": "3hGaBn9pT3qA6YhNZfn4izMWdW1E9SWyvPTScdSPbCqSCWGKX7T2UWmALXGKssxxHKSbc7fNUfELWVynpuJHET7n",
  "key7": "2hCvXgDwmxq6WBZpAwou3jCKyzZTEi9K8qr4mabLQdJRH7ipRRLiJ5BbWAGirrniTUaxGcpm6PGfKcF5UYuqfMon",
  "key8": "4xF455eouWYfby46U51Yeo8fvREXFhTp5ChKDaCVspTjFNsgzNsejfz875rZnD9nVhEKG3fVYTQTo2MsdosFsR3Y",
  "key9": "4ZKeGXjbCvkpPvAG4DsdT9qtyckPQyXKmLUFWSys36W1tu6aE3B3rfwSzWxkB1nCGt91gK6b8sCyJq7oTEQ4jZ9Z",
  "key10": "v4rgREmYqTcfqP5JAhUJLpZQbURp3pcppAnt6ZyVb1mjr3vKv9Bd4DQMaFcFXNBoKv3M6STxi6KaNyUfyVSmGsk",
  "key11": "5zCBLe7r7VWnWM3yscejhxRL77bVL9ujDqN4BaeR4jfXZVXrvfqWeeFZZXV58eEFykc3qxZfn1kirutrwQDqyqSZ",
  "key12": "5h4CRcxujCapRVoAHECbbzoTmzRrh4dYt7H8g9KiRPrT3xDxxPnoVPLZ3mphCsBCXQgixBk6QPyYYhySLwgaabDs",
  "key13": "4spiPC3vjFZXjdKgXNKd6sksKiphLJ1FZEyL8NSDNDZxxM7GWvvS5FCavAQCdNnWiVNVjVV4t8gUrf5HHC7uSMTM",
  "key14": "5T6YFsDAKzUogm5ZqqULpBt3kVzEQ1GoPDzqsjy1bAsbNtRZqEy76rm8YKr3TPzb3fciHCdjWjFH3kN8SRiqpohP",
  "key15": "2JC3KmMz5id3Jy3YedGeoAebg2ZsTEcu2VErpKPSQP2Gd6L72jAuzfXgwyx3jt3DT6xPtpmxHjNRNhDUb2VzDLWM",
  "key16": "wZrQy35a2f2P2FFWxeGHseyvP211jwX9cnRfCkWDaF7mY3pZ4Q3rKcF5YDVwCnXpynd63p8jqJjJzkvmFC3w8S7",
  "key17": "3cNFvYqABsmvh43hCJivYiPhNiEj2cUmuLXTuBs3cNZyDHYEUorSmLYdKwzrBgfujD7rbJMxqWaY1wiHNxEhY3HN",
  "key18": "4rXaRNucyWU7awDyxc2WzY3EMMV9U2M7CgxukC1Nqd6RcV4qu2YCGwGP6QLnvFSU2mVs4jrwV9ECdMJVHvgiJZ6S",
  "key19": "3HHCkCDDQULCQjJpYpedGfeLWUmF9uFZxh78zyBChzdZGuKRRtfuqkzddks8vwCKCBFrtSpJJuDs1mBh5T7B3RcQ",
  "key20": "4sKjsMu6efaWAFsNxmDWFT8F2nig9yDjeY5uAGvXrnby8C24T3Z7817FwiU8jSvjq5PcjTDuDNBVxvVuuvxvtSzL",
  "key21": "5HKHvEU8N4Eo7iuYHRGu73iU1Q8QcoqrwsXGSeRbJSHYkCT1PbKesg9LfkJ1qfe7kGSvijRxMxtbcrEjBg8Qmx1J",
  "key22": "4henhNsfpWEA4kWn7rwMPACCYYEsjc2Utj1PaeQ6GoiDmd8AmGsQ5okFiLBtBgeFzN33C9ZjUyPcsUguVb3k6CQQ",
  "key23": "2zLVZQtmobSWK9TXRVAthEyGqaz7zAJbed96cQuUtj7Rk4tuxsNUnpcmrduRwj2zVT4HyLWRCLVCbrkhgGwnwquf",
  "key24": "8p995Me9nvZ45TnAMdNrWj8bcxuHJQDrxikQdnCpzusKwGv3JGQs6QqLK6NJFX6XaTGFdsgpse99rKHfryWKF8d",
  "key25": "ZqLPJfzBWAzhW1cHDLe5TkW7sYdCqvAdMdBG1x8npJiHLWnCH11DTwLFx8CZBqVgQi3LmgMFGWPeK5JoCQ9bBkZ",
  "key26": "59XfGdQsJUn4881o1iVrkC4QAUsZohfKKfB8ki285D7pZzW59vEmc1QedRG9C3LxFiUAQnqhwWX3bcPVeVKEdK8F",
  "key27": "A5icvecT6JdRDbYvQTQeBRURmxmd1AHhymtuFHbRCeYrXPBmFrj1brAyUpG9AEu4ooingbRL5bG1mEXThcVnVHh",
  "key28": "9faVPHvfJuDNY7NeyVKTkRKfbhvfWUTpTowxmQvMjTcVVF1y174KfDgdLx6vA2Ycp1yYtLtcjRmodx4oZeKWw4b",
  "key29": "4NSqXofFonmAYG16Vr8ivSTz328HRnqiR1Ru763tpBxbBDyievEPgAtWh91T2G5kZkM7Fxags7JHngk15psyDJ9v",
  "key30": "61JXQvTJmP54e1Z8AENfEQg648y4BkTiffFS36A6jxdKzaoWNv3i9i5fGMEPgFV5XjtXi3KjZMLnV6BvVsMce23i",
  "key31": "JfczkjydrBVC3UwisjsWivU98EVgLviupLzJdpQnyXXtUaNnAywLpgb1Qpa9fMFAyZyHd8p1V9JG7KEz4WTK2QB",
  "key32": "8sjf2HSP9W8biTQsASZeZqQpQ3HCNBfaxd44smkMgPu39F2ie8G5cZKGjjyLSPNdoJPVm49eKqoo1Uj8uJHZQSE",
  "key33": "4ggufEb5HtDSbctrLt4CnptU8YgoMYW1czM4mRapBVexm1tQD6Dnf6RHcVCN9s9itgLeAX2pSd1gPPNSiehwGz3q",
  "key34": "3woWSzcjZAcycGciuEpkvcLWSyfXdhDsaQQ1vvYXESMJENLw4TzqmBvp5AnCCjkzxS55gEe7y2kdNC7gWEwKxEjv",
  "key35": "2G81TeTMhou9XEc6scfYxJBLuhEdU4YN5xHUchdZWfmNua4BdCQWwzKHda2jxtVucXp57W8evWKMgxaSGZUJ4pyx",
  "key36": "64K7tnPYpdb2zxLBtp3k72ddCP4wGA7gJ826b23svt7gceFLJ5wo3RQVBxQdQY15UWpX8sS2erEKQ9sJG83DBNTL",
  "key37": "4dXnZhZWAL3mzGFcqvPQEyYyKFVDtfww65HVuc2zzo69f2R8xSQRs3xEWJkNX98HNGbZjp63NdPtjAs154Ywe7gw",
  "key38": "5wRDYamEJGHfa2umNJbPyRhNDJh5Aof4XGhd4MSMq8fH87FLM62De6WgEktyRcvc63YYju8RR9i8uBvmHYuTbBRM",
  "key39": "5V7zLYaU8gMbqHsN9KcXS23f2jGZNvYZk3365CmJSkx4g2yFuV8qd6MmdqFjVBuYJpMupQTK6owhygqmrbvuRv1e",
  "key40": "3uk7fWryFWiUgquys1uRiFZBAG97xZP5c1dcuLHnhQFfnGDMX9XPwCNKU3s6CBqX4VBcmKE7QksZ6RkKM5EYMKGH",
  "key41": "5asFhbXiEMXrrmM2pYJweR8kg4ZBzE5JCdFxRyiGEcXKag3JJZwX932jtxKoqCQ1czMk9UeVFJbQPE33gmXtWJtc",
  "key42": "3M8dLviruePF7jnLv4EJAmeKjUXuc7MZ3zRgJmcGkGonxudLWhf9ViEVW31pbeGd258Niqx1MC5tyxX3nDZnyh6u",
  "key43": "4EXthow39Q93fYTHt8J3sxwnhXv2H82cwpvkDmr4jVuWKeJ6feSpHtaFbKiULrPk2nyNK37gXVj53Q9XnQYyoD9G",
  "key44": "5FAj4EaJ9AwSrfCAgi1M756sQjFL3Rn3krRFQFAiKMDvBn1oBKtpo4NwyM6hajy1mrHRyfHBDvwCQTKA5BTCqs8k",
  "key45": "5Z32a2b8PcsiLtNzsu2oanirtwP6xoYhsTZuWHtPAZs1n8JZRV6ZQ6BFs67DKtLa53truzcZZzcnYD1sZ5Nk7Qou",
  "key46": "4qxQ6ks6yPNBfAEnte4ZSaQ99ho2t7aqpAQsdpo7vtPZZXXhXZxy5MKhJvUooHuD3gTdciXFMBrzs3kiyTQ1HZDq",
  "key47": "62m6GWe915d53uuJ5Q8gv4NZc3XgwReupuLKDU4MZ5BzSWLtk4bN5B2AK6cAjWgprZsdtYfFLQbKsqfKcBnQjPSq"
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
