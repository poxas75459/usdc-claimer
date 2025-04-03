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
    "29BRsDSupCGfrtpp6F4eR1Qoe7cRzcjaBZhoenX3SLqeDYQVtRZWHPWvKVQoW6MyxdXgDdnix5Ja1guGUTWkaiPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QBDWQHab7Raw93e6cjrmbhjYoVxtetUiT6kPbKLJAkSGe2Pa6fJj9JGQwonPACCeQjDzim2T9jQ6WAr5AAJUQJ3",
  "key1": "521WnuEeBbe5rDVKa5mgQjTAZ3nsDXaRdwLFcQmvr8wuJGjWisF47YUpkGW62AYhQgqvXjGRUseqaqQfgZSMwSwd",
  "key2": "y3E3gPQEXJ6hHweMGNueFewxDzPHbUKDwrb2y18LX18RAYxkHTB61cARPaLQYsfHfdaYhDhqzD9GhMjgrMrBVpS",
  "key3": "3uwrT7FhZvrG4g3YgkaBHkeZwojEUVRd1icWjzDMZ2QQ3qML3t5kCdCfKJai4gThQUska1q94ZQe8SSTY6WUjkr8",
  "key4": "2C2ASDf6oDxEnA7X9LpJZyWszEMixNUmefNCgModF5T3EPgcYKnD3DMda5os7QcRYH2uNrfAAGzGvDVdf7EcMG9",
  "key5": "5ELGed8duGurmDad8i2jsdrHVjmasKvTRsEzuu7fgTtGk27rKBj2nt7uVRj2vM7gZrsXQrDsS7Pn33zMvTfRn9DT",
  "key6": "2R218CoYysX6mNVjEf5dGrEn7Zg4w1yPknzAommYryRhp6JeMhSyWbgYXZLaXbnhesSnGweeHhsY77HKtBWJTCGz",
  "key7": "2K2rfaRt1uXQeui44rjE93GWiZbGTBoHPJtWTAWyB3SHVRoBLfogp1wKWgbeRtFq7snmgBBK78g9TKT4GTfD8eit",
  "key8": "5hQEA3YaZV3huc3VW1GYfsY1TdEKi9T6XN7Cqsk81tdBxdDAp62cmMm9qAJCejGxHeCEYNn4ARXoyG2N8eLRFE6q",
  "key9": "4kVGEKsbjhPq1BNBY787qnHFEMGfJohjd4EGx8PM7AF8g55m7AqBCFt4k5PZbtpqdsNKh5WDDx6XQ2vRJQXg5hGW",
  "key10": "57tJmF22Ngvf6bK8gcvf1MDSu5uNCwvBQMPDHvEefYo21VtuSYzUC3tGT5qppGFVuNHyJuA2yeVfV47mXg3HEzpM",
  "key11": "3xPCbx4gmBCo5vNTZBRjKfPRqKdvba9yxW3ncom98QPTTRYHvQsUMAdEjVbe6XQX1pYaGTX8RoiiL3GKKNRzyUS6",
  "key12": "2WYv61o56s9mxx8ECVnuzisUxWsBzwbZ7xzWpL7f5FfFgf5c68QXFhaTBZGM6kHPV1LtjWgjLZitVzNM2GsJabCU",
  "key13": "4eHhoQGTZanLXBuJYgtibKqLPxxJsWe7mhwLUMk7CH2mgN8rA7q6ehftwHormVkyTmhGcxU75RHER8qG4ot8cFJ9",
  "key14": "5FJsQVTKhvJHzWAVadS9M1BctPy4jKdj8924QvYULb3XCaHZeAQHowqB1zLWRbu1HLjNdhhRPQLStdBiJTgY8CbG",
  "key15": "4CRzhxvaR5A7UqkGbpHWVd9NbAHHFRXPcGXQtewScztxkqJgUPdurTWzvrX4kVD7Voy4TqxfpMZ94hyKKJkZRKBo",
  "key16": "4ZsooPaaUbA5mgC33sfa63bPr5ZCxu44LeMtJEFinCC4P5iVWDnLVDYSWTQAMaUmH4Jm3epZUXHzHKGFJru1HWcQ",
  "key17": "3NZ4N9T7M3JmxQ498YxcakXRMMAwoPGwbuQoqJvaeNrexVBQAXCqW5kBvgYXGaR4ojDpUZDktm29X5pknGEGJsjR",
  "key18": "nGjVSMZpLL12CzXWPeJPihbnMrAWeJQfHCxUmWgj3oW4kedRhp9LDW4DLFxWEuK8k96ujgFrVuT6bWBLeLy8qDK",
  "key19": "4QUWHCzSqCQqquSxJ4dA3aTgBs29bZmMvogFjywHQP4bpvwupof1p16VXvj6NB53tqgJqRBpq3oHvxwhky5DrGgV",
  "key20": "5mKBfApbbrj77L83PWe2o6bCmCzigoSmH7UQ2Un4bJ9uhxjhh4C4VPMEMfmEURYFrKMHtdrUhjgmJE419oWXW5Cc",
  "key21": "4i5jzvJNFPvm81VABR5rCo6mM6fEgJSa7cF63rBKEqZ4apFn57rgFBAvEES5A6YGppYLgDaemC4HTFXGhj3RvC9C",
  "key22": "G6jNdV7kZ5Yn1e1JvrKW9sKUT7wFaCTEhNULuVYYHYgsHuETHCdXPrdEPnquEHhby6i9YQn4iFT1bzcWqrT6GR5",
  "key23": "24UTVpt7fy6YcLX4FyjdfkSTWh29VEvBswYaimdxZFLrttqMRcgsmwTmTyLDp916U2FCuUtdY8Kmezofck8SseBi",
  "key24": "5Y8VsCo761yP4zNZ9PKDEcmUXeyEpp3cKpo4vJdrYxVaFAm3Yh6CE4QcNtHZiuAbVnCTLVQSzjjnDBKsr7ohoSsK",
  "key25": "55YxZG5FXTHq3zHY73eV2dPL32CdKBJRfsix66JHidbgoSb6aYSgMdXeXkRaaSRZY5PmAvnbK6vjbE7K4nfuaUG5",
  "key26": "2pwB5CKCFSz1hFZXCr7NCHRyZQPWkCMhjTVEQGM7f2QYjEb5autFni4XwsXhFuuh93XLPdewYTz4YvQHn7Vs1QPQ",
  "key27": "rNKPndRFPumu34wSquCijiuzbHnjzQAjJjQXmRvX9a9XeRhJkB8jcJg13VwHk8GQAbScBE3qfv5iny221QbBS73",
  "key28": "2HupLo6sQCaBySC6N5M7JAiboHf9xWZszY7Eoa1sy58E5ZCJDG7jkLd7WG4Jz9ksL338GF14Q8SmBseyb32W8ifQ"
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
