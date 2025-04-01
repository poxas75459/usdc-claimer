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
    "u1pAoqBPzY3eQR6FyWudfPef49qkrDYQPzAzxPskF2L3T6JX1GaBCAdHSHqzc1j1yKBNm9Kj6gMYcCABoFE1RxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58kMiV25rcpu9XfhMmDq5NbnxmfRgLgMEBhCiGNWCyZetgDiqnj3FQTXg3u1NvrTzpvv783KPnQ8kLb12GoRgnEn",
  "key1": "65SxeUgoxky1rUwpYmKpXvR1QmpWD5NewCPcwLX5nPW3zDnszBakm8GwHxAfAJ9M4EW9uVnYDvSDLkh5WLPGrdyG",
  "key2": "5fCky3KP6bagCGwStgXZJ1qRccg2qgHQ6vLMAoRAkoXUzQsdCWCU3GaT1x3HpQajGZPKvLcFJNKeMA9KC5svPkP7",
  "key3": "3WwWzKVc269WgchBiA5LxyguMnrNoUWgFo1mzQWNBDRET8DvguENVpB4ZnoBx7QnXMirDTrd7PC6fG3c7DGMx99C",
  "key4": "3d2XLr7jaPdQdigr3UdpUakdS2k48noiqLDpM18p8WoudNUrt9XXw7KQkcfArptroNWvi8BzVidxRTKuLXFzCijt",
  "key5": "65GWDk4A1oeSXLjM3JbNhu5ttSL8sXyY4DhcT9vnjBZnxD4NbFjuPZodjrwHx885dVe4XASbRuccdvpYr4ZBHVr1",
  "key6": "2AoTVT5LcfJ4omoBXA8mBM4fQWqyBKD7rEBLpBppKRUpuc7LkSQ1mELHkfcWWP2MPuFuBzbehsH1txuVCmvGJnH4",
  "key7": "2kGwFeDbUPvSr6KxZP4MJRupsScpPqtjCUHtckYeiYpu44yk9iRymTtAZKeHhzgx8gzx3zWtDU2MbEfkKQvYABqE",
  "key8": "3APxpTRYD1b5MSSPL4mRPwmCqcBgzTkZgsWHU4VjBPCNPhTmaJSWCcDThypT3PxgVTfNCkrztHxTB9ZCUMRaNhrK",
  "key9": "4RR8wLhBDJsAteXuvwyQTTKL8ufwGLQJ9u2mP5as1d3LxoMHcpRYgQBkdjs7KNAi6FF1RLrCs4bagC3gt22mXDpK",
  "key10": "2RheKM9B6dza7xwjV4u7LS9pYif9uc9M7BBqWA4qt5VNggS4VybPRSHGZEG3GMx7PrqrpGEAKgdRiPDuxLpkJ6pM",
  "key11": "46YB4dTvwhAHm3us2942sGgHqDg8RwycVXF9t5rFVwoWka8Agssh8XorHWxTjDiu8mJdhZoWga9pigFVPNycpAym",
  "key12": "4xrcztv2kzrvJnme8Bu68nUBFM39W86WoZLZBQSWM6gzCVcPS2gycwjDWTmQBkMC241kijBdmmEkczmCsZocv275",
  "key13": "4M9wvWbo3bum1ttZ3WEXa2cmJU7U3B83Z1UFtjQ6bka3bjMVGCeaF8a7h4EATgs7JPS8dAbkWSJnqhc5eYoLbg8A",
  "key14": "5uYvEFunMzQ65YGjKniytJLmEA5KB63qbXcsuryaFqC7vwsP9Cf7ziSPFNxDJLKmrKG4JL2YLzpW16PRzefWhh4t",
  "key15": "5WCgrSqYyMsxHBLwHCBfk5M4gKTVKRREsvaxMvhyCPFeynvXxoYmKTjcogr8xRKcJTHTk7jKPSsTv8CA3hAMCMqh",
  "key16": "2JocaBnQgsZbE8gMbKDutnVDq9XmhYSUKnGKYnJixMhcMyvCD663FjB1AeiYUSgQZEcf2k5pQ6fmh988gwhJ4a5H",
  "key17": "3qSs4yedXRJbb9AxevwaX9HbBkSJxtz5fn4VhUXMv9jDGCoUa3hV81ADknEWDvXkNcXFoUYWtPcUfknRnXwT6i6j",
  "key18": "5wn85ejpFcSUSAuL2jw8Gv3RtHzxuK8XDvHJHBh4jj5VgPMFReTcA9KTHu7y9iTe29u5jYGSuLmxBigWkYNDcsCM",
  "key19": "2c8xo32Ez1NveZgEpqLVpyR4eKtKEfbfegsjRTA3DYW2yuSC8NyycA2idATXh82pVMoajwX6zgss9w8ty3okWe7U",
  "key20": "5dX3bBQJxvg7qf8DQkoAYr4s8nECBxQ1StBoEpHcoSnh1cnkkaU9fFLAoryTCY28q6GVC3DKspWrhLHfyPT2QbUi",
  "key21": "1912uXGqq9S8JZxrhNu7FjbBee6Cec6GShLMn8YdqPxSWc5sr1fbraZHQCTpWk3uo4zcnfUzRSa7jDknJdc9kbt",
  "key22": "3oxr3TANMAZ6jt5BbzgWNxg7Q6Mjcp2KvbWousMYS6GVqXv2bud2pAAn1RVs2GpXjDiNNLPNCbawbBX7KudqJ2Gv",
  "key23": "2EtfteuGXm3vWCDWUh1RVY5weT9WohT3Q8Se4R9mKg7k7FaEJ1xivxnC69mVGgzuAzqYpirZDNfGXsKgvjj2sBQh",
  "key24": "WhJsE92LYUWk48aw7ChUJrzQY8Z5UGPuDCbKeFpTL4w25qDJhQ5SGuEpGJN8NnZFSbBs1mSRhV6HuaGJVW22bDk",
  "key25": "4B9vEZrtMePm1yTFaWUDZccCZ1PJs5oR58sExvufRh78h4MbAE6kQDnkqtQnfN1drYi9cCRVFPiWMq3miUPdGhQB"
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
