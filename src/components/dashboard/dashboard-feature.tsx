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
    "3kvdW3g9YN6y36GYSWzktXppesRxHuTH9Yd98FWXyq2A27vTCAyvhz9SVHBBjCpQmoXByvSBb276Vk5VpAV7EfPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TiUBWcxKMCCfFrHiLrN29f5sxNtr7vcYXv1tCb3vHnGdDvoSGrJyLex77SAUwzA68kwFVDcWRUUeH8H8nwBd2J4",
  "key1": "24D4HWtxN86aJLdm41wR36Vd5jVKgDbTqCwf79Qex1MZTo7V7L8SkvCGt41pSfojDW66e1pxvUaiXpvG9Ua8iBer",
  "key2": "3kCFm3cBUjQ7TvePZgVa6ktJzhTjL5tvFTpAu3AmmdzwQk8F5LqCrMLohDofuSu5vKsQobmjwprLbwczzev3Tf3o",
  "key3": "4a7u9tCpmieQbtkSXwo3L3khxot3vEVZZAzwV7pM9nRC9hNYDM1UCGwyYimca2w4mnPyuMP83DBGa48NTeH4KpPu",
  "key4": "3TLVW5uDE2zjpjHuWMYGdCbHyaag3vGcJpWCp5Ro9DwDHpzmNE2ZwZYkEJfB4q7RpefSTabqArpfPy2jciT9FMSn",
  "key5": "3DojV7zkkGTyHHBacmrDDKxS22C1SzcHdSQHUDix7mpPUMZU8dWtP2yQWYRyUzjzzvHKDAyM61poSxGsyXTLjatf",
  "key6": "2c9E5eqZWzwj1qLWQx3ZBVw92gAt6eZf4hmNiickftjiJ3kSTnG9fL9nyYXDYYYVyzEFrUCRG43zYCPEA4GgLPCP",
  "key7": "2oMximVsNsWBmAvLHXUUDvonhmhTpFj6iNggakqbhQnnVgevvwcXEDjBQbDTaFSrQDiucukVykMepHxXjQsPZX9C",
  "key8": "5M5mnmFtVymKNDz882dBAfivcPPdd55ctc8Ga5DySo2q2X6N67agNm4Kvh8jGdDBRZMms5CvwLqMVerGDs8bDNsW",
  "key9": "2DjxQQ83rxniWRYk66Zqc8XphHnc2wnngSBNzLnHKFwcaMmGEuEGKgpdx4b8BiWdK5gCZb7mAvXF63wpXuZUERLP",
  "key10": "4QoRrhN4DRe5b3x7yNfKBD6anXCG4PTx3hFU3iAPX6XK5Lb1K3ZxRrYFpyLok1We68d1UwQTjZrBiboQ2u8ek4Mw",
  "key11": "oJtRi3Fw4ir93N8428Foq3bkqzhkyyiQ5GBgSzk8Pzy9WrZ8QcuRV9KofBhu5dSfhD4JeLPagf9a5fxEQZW1ZNU",
  "key12": "2vXhWg3uvJ9mUyDr13jsnuNryVUUtShx15oCSuPvJ7v71RQjDCxzn5cYykQpvvStTveE5ZXYZ5LySUcARJPnuDtW",
  "key13": "5hZ19moHrRAkuh8J66XPTHJ1iMkHWCEYyEc54d1m9BFt1PmMyEjCKVYTTHThrjXRxpVq1iV8SNbJJNAbqgLx2o2q",
  "key14": "DFoJo2YRNRka6qJnzcMgNyqCXNPKVfFgyp9WiJRHG3MDuzff9fBrakxe1hXYqkzqXRfrGxuqk36RVVCcPnLYBP1",
  "key15": "5Dzk2gvEgFtYSEadF8kgrQ4xzxFfkrnRYyKBQ1ay9knrPCzsbwnZdsxhdWYCgjQRjNADK91corejQtPsXhejRdzE",
  "key16": "4fG8ppHmdM4KvJm13bZ94NkFXU7ztSZSqhFzta6KsVyN5f6gcr2jgkr8J9SyQJjtsV5G4cRcrhzFd6KfGZB8c4AT",
  "key17": "4d11VgzK7di2zBZrmTTNRqdTE3LgYFkZzt7BeV6fcaoWv5HFyLEyQwJUkHR5JwDF7oaLHQtRXtQKdDHBTReAnMem",
  "key18": "94EEpWNvf2EjTAh7BjMf3Sa27dTawCQy1P37B5S5Uuboy9XCwaoEzsBz7mAm511tchwFAnxJprQ2KzVxmsccwVg",
  "key19": "2iYP2CbpU2RLJBE7sARvyqwMNXM31rTArvQxeXRc9qNKnLtFNZ8ZunA2dNePzWtiZqtiC6yTJXLz24PPJVQA7fs6",
  "key20": "5vJwPPFaZTahrrxRu3tMRLffHMoh5YcL5K3ehyJfg9v7D1NpEByr9P9v5h87ge4WFjbB3bvkT5bgVDG4tvYugb1i",
  "key21": "2bL5qhDCmoohgDyDfXNJDNBTDQQK99j1Ub1teiDRgDYrX1A836gm41cRACXoqYxtYz3xWXDxPmcLatvXWUZcH8U1",
  "key22": "5qfrPodmkPSgzcgtRFDoAEdvPeWPXz8YPXuvDmdL1dtYWa89jt7feAr8h1dtmgYULdGVMyCwKNWeqLqusbva4eUD",
  "key23": "5qnHTpZrBpKGZiGyyZ5YLmZqSK1UVTv2bLf4nsZ39DBM5hbuGeCiBJpKyefdfQHGBNJ6hmKhMxDBeyQ3p8czDksB",
  "key24": "2WfxyUjDzDhgpsVGecejRLCDp6b5Sq78KTPSe97w6skTkjppubqwRPwcdYQrfdEuKt29NuAPZ5YRB7yz9PbA5f9F",
  "key25": "2Fe97NsKgaadFaG8W9Wc66j7QRm9b6XrKvGoDd4PXbgGcf4B1Q48csT8hU2E6skWkLf17CaxjjJtjsa6MPLqGm7Q",
  "key26": "2oy57GzmmQ7k2EYwivBmPBc68Zr9kicFugQeNXzAnnuyzGejLbHix63J96hksWqxPXjkqVEf3mPP9YWp4WqSDCq1",
  "key27": "xC2oUtX37rRRRbGRSq4zAZf2tywWGoqZWdDG3vq7sXUE13dRbGR3Gg47iuTQDz7d5LnVBBnfdQvwpKrquLpFYin",
  "key28": "65nJPuH8dkJQZNex1uY8rRPuny2R3SpxckPTgCFRjixz8vRqGpeShtKr1dGCVY1WiR8P5psw4Tc9rwPuoxKsGcCL",
  "key29": "5hahrGNJrSv4JT99PoFyAc8JfDzLMS7FYkPi84zVHjctKagv5M91ReiDceu3PpsF5cVw1F47U53YePkzg9v2qbHm",
  "key30": "5a56pcr39MKZXUHAs7Chtp1aTjJMFtZkVvwxBdfzFbhtrmZKQwB667d9hNgMJhdVDt3LFBCC6VGiPshFGNsHskaK",
  "key31": "2F5cgsQfqRuK8jK4KS9CvHmoemmgoS6dmiSzrSNccu5oagUmiHA2CrMP97HhJQqj2wKa8zihQw5ErHEcMAJNXeAH",
  "key32": "2K2iAuWMStAemYFfvdFBzDYbDVRefvrZGVuLFJmK5gWYFaLZMxY6FybMKULWC9DsfPoomgFY1ngLwmYCJVKqswnn"
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
