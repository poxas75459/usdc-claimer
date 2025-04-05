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
    "3ofAiS1jKCNx5Y6VuNPUmEfF9T1Uq9pPUAHBuppmhx16SAMVzQhXsjwYJMCAVLYHM6s5J8PpQfcDHqX7C5oKyjQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qzTcDXtvm8LhKcMgRtuovj2CwRafjpyuW6knG2eFuKZ6vT2WjFE9FXfaajQNGf6jdXL5kde5NJvSCt6VJoGc8EG",
  "key1": "Yo6HABRz1i5TxZtBYcditaL9ezHNu1RqwmhCuaC6gztRCoN36VGuRUaphxrPWLawo2oP3Cyug8vh295P3hx1A2Q",
  "key2": "5PM919N97nMRnHsLKS9RJET6UTPcuissx4H1CGJ7CNEp62Mq6eXp41CCKR6AuBet1f66W3ik6vUMd3XzHK3d25bi",
  "key3": "3HzQX7xZFq3nceq2bszvHwkPPJ7cuXnADwPx5VubEgqRoPDa2XP78DQSwujE9trNNNsSkTDgXPyAyaQsCAa7RtAp",
  "key4": "3QFHWEj5UYbY5M5oT1z99FFLJnUdH8LBAxKxPCvZr82gZM7XvRhS4mWJpcnxxED5Aw3HzFWJkR3jYVdct47iGx2q",
  "key5": "YJH8u7fZL8Rs3PY13bwqGQd8WhrHmwzJLmgKPWyvxEus1fjnL62Wnpd1FVjj9swCD6LdfUvSyHxEQot9pFqcmN8",
  "key6": "5Sqpi9vheGx5ganfN4KMNnyMZF7cU4ADYBwk3pVvwRyrhc2GpB4nb9nhkKAvKMARjAkEXL36DAyU3m1zEgVMvbZr",
  "key7": "p23NBXMciTPQYMYeJxRE7kcPkjJ5XVwgoaLPwEswd7UB3NWpWND4GATF3kzz1PYR6s8Q7tKmoaQonUNUn32RhYQ",
  "key8": "42QJgV3XKTHmFSM2uYjfr93ohAFt25g2PFS2Bn1gN3r7gUkcBQBL5hDeCcbVLLeNTr5ETySHWpJG8SeC8jfWjK8s",
  "key9": "2guzEgxnMjVwLc97z27HyrJUFiG6h8zom6iZGkx8RNhGZJXcaQvh8CidyS5zuNTJDSqY3SCWgVEsZpJMjXp9Kk86",
  "key10": "2XvrumENtmPgruf9SLz2LQZi7UqtSRjyywkceiYNL4Wi61KFxcD6bFUPSKiK1iTW3SFeiZ9STLRJCNBgjJi54vhG",
  "key11": "w3ZpzMQpbH6csjZxUmHg2B17jCczSi4vMNbx8h3aa9CZDU78UFQEFyz2G9aLxfjiGKrfRjEQFoLRoosQH8mojo4",
  "key12": "4G5w5kuTggx1qPyhUow4tSgUi2unZNEM5Njqy6dRtWKoxsrtrGYVKg7zrLHpoHR4wZuKgb52tDvkT5LU1EULDQq6",
  "key13": "2YY1SVRMEkqpjMoTPSsWyZMEBfEUBn66eMaz18f6dNjvXdUYoufi2uoi9icD3EYzYZmqMzjYooT3MY2QFYdHHueG",
  "key14": "5ENfeqS9M46eV74JJPgBMGPjGjpEe1BsCCtaiWcRe4bJ6FbgBNhxGtzZFrTVU9A6Nkf2DDb8VbSiEhwRHZW9Mhi2",
  "key15": "417ojhi8zDMBuofyGQ7WBvwQgVmnHLWTLaoYgitYyU5pV449y3s86xFhrYdqMJjWC835JGgjNWua98Fyi1UVyuoc",
  "key16": "3fH6q1rxz6pBXpGBhjZd6317YAaUzbgwKL1GvmZBZs7oMfwkbmDiJ53AUxAmiNKcSnG3pS1Q8oXZwjBUtiZqAQu2",
  "key17": "2HkXoJSohTo11kogMs6utFaLFJvdXkbbCQHCufx7Ge8hr9UtSkruyYgBPN7bh34Di51EMZPzFTrLLowxRgKkq1Hx",
  "key18": "4AkzUQjCmRdTAubfwZW97TwM22wYtnzCRDygJibKjprpdkyhNNGRHgnJHmewJbhhLrF1vi9nrGEtZCqMrSZmq5n6",
  "key19": "5Ybt3EdYGqmkGzL1ghspNBoyhyjSjbmva9KFa5wC9YPQWszCaURhMGDHYx8JtWRRRWSmCEboFzFezKUoPGxtebeW",
  "key20": "3PSbiDBP63du5yuPzHAYb24wbLec5quMPnW64jks4zgZTUaF7aJxgnQtwUpHeeQHw6XRLA7CZPxNKUiABgkfCysF",
  "key21": "28e3BaXrVAqc9JLLGWEh4ubdFPbvkwFCySvnBWYByj3Ykgi2vkhvD4JEjh51cZJnWGuyCr2AGUEwUbM1PYF8Li4u",
  "key22": "5xeZMLoHoda3ppPss3sEftAs4YLGeRkrhYuB214Z4vp7bKZi99KRNLHymvCDAtHTscp1hNZyF9Zec4RqNo5gpnnD",
  "key23": "44trHYKRRbeqthujJh7tNANbUiiDRGCSiJfSdZieRu4Ub7UowBScY3BULaCdMoJDdMCGyWSukdpouW4s4SS1doLg",
  "key24": "3qaA6sSN67GoKGXtueVEDgneMEay6oY3cgCQiT41sGV1GKSP16GnGx7cueMVDb842wNxTKpMEbMaqjiMVt4ZGjiq",
  "key25": "3hfK82PGU9pzxV4ZdD7QKtqGJpZ4zDqGA5Pd28ZeJHtz1NL1Zyo1aUnAnMvLJc94XUBPJhsUQduFKpj6VSXAVhHD",
  "key26": "2cRpT1sTrdjQ1YSniyxizZtLocPKGj8HWvHQ7cfB4d84rsEdb4NrSqvxvNVTMnhZ6GNQQHpoXRA7Y5fSobRV9ELM",
  "key27": "5xEqmVUU4oLMC6VYNA9d8pwYzwPEG4g2MWiJb13Qbs5suzouHhBFLAfQEzPkBuVee4a8232M7KVAeq5xZrC48Rs9",
  "key28": "32omPjFD59szosEyLzztfgVMaYzgsxzftmToft2gcgiXwYK5rmgzwN2buQj27Y4MrWaUwREhCneeBXp8f7Ym3ZgQ",
  "key29": "4YbSErhWpZ7Khydmxo8YGVjdC5v1wV8d8zrjfAVbCqV847yKYBqrpQuryU4cpusVqZeM1yTvZYN5yEinjkvppP4u",
  "key30": "5pWMKvFfjpQJppeWR3TmYqkumtGqgp9GtCqsLiKRgw2Gkoisqp2K2cqh3ckqtGLmrREJnRrr5NnUbSW45itC2Az9",
  "key31": "2HBcXmdVRD2ByMNzxDMvRxHExd87y6imhHk5cTKXWfTFCk98o3djEH7DGgFUPa8SWvdRLTGC1EtzkKQwXjTNgwP4",
  "key32": "4aDENkzPiBH77ETDzD2K5jQu9ySx7PRFC2bW3hmngG5HbPRpeAZ7GRsKWfDQiLjo8cEpK5J5RwUXgm1KVTtF1W6B",
  "key33": "8azVEe2bRCbHPDACdH62tmviX913kfayqpEUKsNDNTSLRXTVe8eEXiQ66LjVM3KPrxUBK3rS9TBt8uVV5Zthy5Y"
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
