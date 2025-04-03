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
    "31L1KbQNN8pT9KGMADLZuZAgtjvCAqMdsG8mvLTaJGB1VTc9udHiUAQUnres7RsrpCbwfWKbuo5u33HTwfPRMJa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D2Da6tyDDfALaidQdiXFW96xfn7rAC9Gwgqp4HJBQGzwVCJmi1x7BQsJxKHjnLgZRncFWxZcz6JKM9aDwSUCUY6",
  "key1": "3g44DjFwuoVUqjN2sW3ZS7ipCbPP1B5EptWmFro9BHypvwbYdNBdQ92YRYjQGmgZVxuZHSxQGtnE1wueSAfWxNy4",
  "key2": "4QLE9v4Lg88Mz8vW5443EvmQKP1g4UTFMNFqav3t3MXQq5genRnoyatJX9ZDyJ1oNQ4PQ9xYFdPsrKVuSACRz7oW",
  "key3": "5x1LWBaxAu9NNepqJNuP6q2VaR6i7SxjbPRiV3jfTtoxzwxzFEJgSpmUADY794osi7gVpWrPxFPxgYmiZNzK1V1x",
  "key4": "2BEAgH5i4HL5RBmYN8uWD4iW7NJJJBPxSaXDEtjsjK4yXMXeUVjxCdxX49nyMAesyqZtfTiLwZAMSy9jJXUxj4hY",
  "key5": "4ZqmwfFkNVXFekaFqjxzzDuq44N77W6fDfJPhPDxHvtDYpDz7518mxhhLEzfYGqEiKb67PkzXSidnegtpeS36Kvk",
  "key6": "24uoC3mjA2dAvrGtyuewSezmRzDiAuhggXFYL4pS7FJGeAx4zakBuwR1pXwc57M5cZhsiQKM2fy2E8Yrz5jZD9Tx",
  "key7": "5N4n8h3a1hdSFYBiTDQipgxMih3g7T4hLTWKUW4uBmPFs3WtXBP7BUJZwCja3Kx1dNiR1oaBtbsJiLVgjYhgc17Y",
  "key8": "GyGZyu1N3m8h1xywTyHcrp1woHZ65KQvnrVEJUNacJRPyxZsZum69H5pVb7AdZbpMdJMLC1uiLdoPovBXrbUkac",
  "key9": "51MEPqQeLEGVpH5c8NXnnDHX6s6RZE1h3v4YzrCdw6ZWUVsyWyKw2KTxkqLzh1a2VYj6rm75NU6FmUh7L1KV55fB",
  "key10": "2QWDPPmcquf6Mwngi9zagEK7uzMhSQSCDfcWboMiCT1g3VZZkATdiANMuxqxWDyM9JVwFvHmcXcWXxzcJhe4uKYa",
  "key11": "eV3AT9c7wyCSH13Ueybk9R86fj1RaYPuNFf9vPZmV8yDYDFWtuj1Vs6jEz9Qs9Ji1ZHabik41rWtgLuiHMS1igx",
  "key12": "2L3MF4qeSHXPypb4fPhNxWewUUvmeSDYnCLAEAcNscD66BrvsbUgREb2tbt4WgsMSEeEb3gUjXCi5KYKopW3Vg7T",
  "key13": "5fUWRAQncr8yb3rtcti3qUg97f4jWrkrNzb4LPeoYLZqPvRM1bq7dYZWckgDsxmcKz5uJLxr8TDfxo5L22k2ZkW7",
  "key14": "5kmWWSsBfKTrjdqF4kkmX6eaUDGsfmB8W3p5ttqzjtyqoKuS5MhZferhcAarxiZWb5MnZMyrGFm9sMciohMdSSS1",
  "key15": "2BH7cfrkw6krMXJp9fHtu1YZ4KhFT23aLMjaJo7wyUud5sh2nyVYJf9Jm3x5QD84ZhbVTZXfZM4DzorUmFUufWYj",
  "key16": "3RzJUCdtiELhnWQGJAeE1N8kAMpNWeZuzqtauMRd8VWEkP8CdEKsgL3vaPwfHVyz78MXQjg3Zth6yQVpkFKvd1Q5",
  "key17": "5cjBtLPn96Z6o4rwKePvr27g6nNMBshwfNWnLZPXaXnYB8NgXtbx3yozjynXCk21FoPdCh66XS8eiBm1eCbSesMX",
  "key18": "3CgbbGgDg6oCdtvZh49UhyFEN69NDtSR55WdvmVyekY8zgMocP4bkVanPqFuqKPMxAtFDfziVkW3EpUJ47M4umas",
  "key19": "4AC1vxAYB4575tLRRNk3JBh27wvyudSP8SrwsTG8L8LQ1UFF7zhWsW35mUvhSWXyMTou7aar2ZrYDW7HcdZp6wvH",
  "key20": "4v6mAPhSFiwtrRYnBZsDcmkaE6bjdpr3tiULqXqkXxwSxz54WQoqv41reAv9NnCAESRtKq9N9nRASgVVd7v6fNuG",
  "key21": "5fL5N22jdphYLFWtomJqLMij6wYqGkgLKe6dRxgayuVdftEHXrBLa5RgMupbEX3rEZLaPVPzGzVTfy8BcLRDWzNM",
  "key22": "33i6UdqHaw7J8eqrmaZSt48J1uUsFu6X6bp6pDeGV4KkyC2rCD67yenjvAmozNAQDo7wVjxZR76FN9aRat658d7h",
  "key23": "35azxxzmdC5NjUYc1AHC84nmc6iPqcj7vP4EezM9TTFCxRNHj4enPrfRibFYswhMd7QfhtBuysPAUgcnwsNKzoci",
  "key24": "58aRJLGFARoKFaitsPpGA92F9kuwjAJ8QjQgmS8vebwYkhNugRRPZQPnoQdB1HqgVZH7hfi8TjtwEUyecmU2J75g",
  "key25": "318svLudnDVPgh1x2iwcmvXa9SgBChGu2PsBiLPe7A87ha1sNxSaaGas12gRxPW1kRa8bEcivtZMam6964Qaruaw",
  "key26": "3GAT1hShSSyXQq3FCpwZk4mqeNx1tUB9bYJ3wfM9Qjv3PykGvbsq6cryTp6sDoSyJnjbtfyF6egePL4BRDDBYScw",
  "key27": "2PZxQ4mAXj5vF54pa9vstitS4JK9Q4BqmymJM2V9pAKcn5cxBN6CaxHG61XcdY2nVU4Rt3kLCNyRhffMAvBqTjjC",
  "key28": "dLy233MHxgxfFWVKaSiAAtvricqpJm1DZLjEV1Xa16FPiZMdotzKLYYiafM3rYWhcunnbiAe2jcc1JitzLUdbAa",
  "key29": "3L1TKLstX5tJFYL62uB2SnTC33bLUzaVegPEZp7UMAdtfo6ApBMwzU9saXsk2c5CUnWQSra8tW7khmuTjJ1bQHoS",
  "key30": "3V88amucadLaSrxmavgASfgLobGg7V1UfGRX7hy6HciddJj13UdDerUBZ52vAADHrLKJUGtRb7RXxAv4nuYzAt8e",
  "key31": "4m2zf9TfW7goVKtbmukoryNama4UhAj458UmsMaqGNe1WbAPqNJd8ZA3AFUmJ89GKfmhjTgzqzxKKEoLH5i5ruxN",
  "key32": "41ZyzByMK9nnPiLKSuBB5R1uNKbUvAP8JosViUtF1NQi1drTp53DTiMc7S1Q31tEDB2pLx1gP1ywhGcbmh1gCqvi",
  "key33": "jqCrz5JLsXfiGp1hhGnhdU9DCZWD199ogxPtTaRfq8PQtRtqtSnjhxT1rwH2ecsMfVXcvdAkQwigHB8TQ7McqYe",
  "key34": "4TCvXuotutcxjKciR9kTwCDwZZXdN9K1tE73G9httBStxuFKnw2ghsh6VZmybFFNv3FUAUbUGdFGYhhtNAkcSL14"
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
