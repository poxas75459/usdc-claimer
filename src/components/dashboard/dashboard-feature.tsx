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
    "59pR7z8xbHPwkZjberSoFoWP7Tkffi99wMtbuTLo9ooPtQ9zSmVvsHPpMoc4YuH6MA7KhN4v1RAXpkNhGfehryAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "222QqqEiaSKDEwNeqy7LEDTUiyzptPQSHrQqRsjPAft6wtiT7cFznt3BbgWjr2s9ntC5UFnY2S4wkfN7wkmTN9oM",
  "key1": "3wMLC8HKUXnbgG8VB6yyGTD3wfdxtiqxtsJMcLx2uhLYz7rPxBhNMFF5GPjaJBMzWhbM64smfP4y6SG72qMSxsab",
  "key2": "4873JLtwwS5Bhhi1HViQDUeR53d89rLAC1d5WgnzRC74qG7crgn723GCFdYJ1bLJrnykr8v3TnxAKo2kFqYvPZGN",
  "key3": "5EuKDFBgX6Fes8UjPixU1oNNMXHG1zH3cDmCy2EuopvGN39Q2SuaQQnKditx27HukioYvL7UGCvFnL84zYpuNzSV",
  "key4": "4kKCbCUY5HKTZm3LRawFsYkU6gn4fZfxxKt447ujosZGbfArP3cEZXnvehDrxSrwaUnNeffxesZPbxoj5TgCEBSb",
  "key5": "4cpjq5EmiZAhR7tX7mNRfYFYBF7o7Moiut9zLFSUEakUgkeAkdykPrU1kyEYfEPw6uBfddDXqwVTw1KQG2aJyg26",
  "key6": "38yc5ekx5jGL3UfmtcmCwjAeqCzncNfnbQwsWNxd8AnMP7kGaQczd6UbpyvCN68EgSkTvgxUm9jaWqHzqZJN9cdL",
  "key7": "4nmsrNQfJLsvySFTf4WjaTLjgbHHCXZdU2NZoyAJLNnHu1FtGNx4PGB7gMBhE2RSfFJVbn6vtEgYy7oCDVStpNeC",
  "key8": "5ZStaBsk2aSno5VDybCCd6UmNEPJ1J2g11cEy8ostbePGNTLoSYfiQR8exi4qhks2FXNFiNP84HzjiD2adobFhuS",
  "key9": "58UpcgPo1sbKiG9snfjotiwSWd8JRPL1PfScqx61dyBPhoFbwqBff5PziasLptojMS5kLkrHMpewuBJHMJJZsCb8",
  "key10": "3CCCjeh5w6HtTjz8uZ5wYfBb7NrWhymh7S161z64RPFjJsgmxU1M3URCkFDFgCcdVfLH7rvcokC76KV54vtxg2vA",
  "key11": "4Sn3dPBmUpxwwKQh3j4CKUJUpXS1vmX4Hi8wdKGm3wQNdMY4s7xpDfeCKkqPFK9bUXi93a6MZc19SujYJHoXDCme",
  "key12": "3VbSy8e3gwHn6iC1uQ61LsaLr5uDC8TynTLNF8wnsMEbAqpi7DxV8zmHFpABDEogpknDK8CYj2Hm4EK4HVuuKmRP",
  "key13": "1CxHmCVD1hRFxQ57n8fvnUqfN8fEViT4f3wW5rxLt3VrRfvpuFWB1X6Fv2ZifxdCcNNGeUqBon6QJKewtkzf7ru",
  "key14": "3CUvgPaoexCEWppzu8Zqqo6s9K8ZN5cThgrhyFkPeEjzE8ftfDz8xoVeFaZMjXyrkr1BR7ELVE4PpfygH4kHPAZW",
  "key15": "4NtVH2K74FWaJMpsXagzdbKrGemqhPCMjwATxcuksxn9LBM6C2Di8RZkHpFfLPJhZoBuCk9GUu3BAN5B732kntMo",
  "key16": "2D9KGnspVrfwqqV5zeLMnG6zDYKBXebKJR3q2iAYrubcPGHDdvR5LuqwsB5aNTCVzJTVRj5Vc26AdEXynXLerTpM",
  "key17": "3BzaVtuZd7MxVBnALd1z7mFtiibptpQSRavTyhDHHo4Ytd6LmrqNHFnoaiUNM3MHsgofGFRKZGY5TCcx4YiLJv2M",
  "key18": "61mNVrB3emQnnXydRncMinVs37vBXvgKTAqJPooFFFmUfamRkUtwtyLqiYog3P6pUv3a1M1GxgEged6L4KPhuPMw",
  "key19": "4zSi52uSKwwW5xFsq9mqHVYu7FfmZcaVC8pJq5Y96b4LD32HapNDdcscNApjeSDwDoKm2e4PwE1WCgwrT39XzWLg",
  "key20": "3WPiqnFnaNor1uHtrqHjBLXJvrmsMHokmkJRUhUokVHkgq19zoT9cTLomdcJaP9yqpMyhbtfcBQWvkdbeqbothSN",
  "key21": "5oLWkDRa39zYKLUZ212Ha9a1C4xZy8Z6XSAu7dZqVZqLMmbkvpzCbg5mb5HYZcSG4kdT49m6rvDThN7hdLat5JXz",
  "key22": "3tMKxhRDzK7s8qUr3x5VNACGH9UK7jwS3L4mjUaie2NiZ48dHmRBrWyNJpnKmWSm3AN7gYcrGnh38BvVYSbiYZ72",
  "key23": "5WcUoWnXYb9J328VaT8uFKa6LLrL45riGPrvaGQvXSQ7dYJzm7HcUfnW8KvGrxdnhrXxroH9HkTdTfxFrmqDaxdv",
  "key24": "267k4XSkwQAj18Gv2ZCG5dYYsLhGe2uZMrxxZCRnJ9CVfK4BcKgEyo8JFyQhxMfwuXo2TnakE81oDGzz2PnLv5AG",
  "key25": "4q31TCSzNw3bTo85XG1FvY9RueHPdFrCYXyuJdbrt5J99gTt5E9A1xop4rWbd4pn7HTTjoCUXaUzTgSdRPmGaAC1"
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
