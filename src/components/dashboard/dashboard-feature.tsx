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
    "3WBmAkJE89UCDr4RbEaGQJrBoX36CovDUzZ8xEJNgeGM9375Dvr31qCuTB7zswXek2uhj6pARLxCJcXLtTJgXnWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pSArySKZaBo6wMKRu1m8FxWvgGth5oPkn6x3GSea636V182CBhecpYyojwVyJK7o4QTCtFBzBSidWKkWnhJDGVK",
  "key1": "4fAQh1yqovxKCmNnUYAdx1vqsTR6r9vuzWrCByUWnUaojGu9wTRRd662Fcpccvc2eWZ73HRpDnqQVzdDE1KCSqBD",
  "key2": "4oomZ6N4iWMNEvYGae9BEEQWRGZ9Vp1x9Tz7z3FdywRXktBMy4EFEdJsoR5fcrGRZ39599vDssFFxGk49BM1BNk6",
  "key3": "2mQoJirbHc6JAanMcZMppMijJnhxPRSEHwuLXTMr2ua3Ro9spRcRt7RYkpM2JS8udhvFYrXfhLmwJqM6r6bk6pAv",
  "key4": "64QfuHChrHSfGDf86FNFtNtrSKtdPZMFGo42ftRALWPrzRxDAwJp7YsBtpccZLcTh8SpYMyMzjMd98ZLmTVJP6Bx",
  "key5": "38y7UGTYD9jnpBLmsm9v3LgwnQY8BtYqcshaZ1Ro9PaHq7xKmLvHiSQvCYTpjZidvURhD3xpLA822FH1zx83JSvo",
  "key6": "5zhUdudrVzSo3uFoWm2dFKXNUoDWekdBAfU1H3ig9pTCbBCEXWBvBCUWFE9jUrCZEyHw8SCZAN3R5qCWJv9MrLe2",
  "key7": "4vYWP5zPbWw2TWLpzQjhe43aWo6TbcfuKbhF75TSEAQ1MxkXWVwUq8ttHpKdChganAJSykKaUZN8sqB3tHRM2p7s",
  "key8": "2K6UVwoFTwqNu2BMdno67hXf9rwnw567VkAsR3NkuJkfEwcojoAtEQ9HCp4j7tbMXX2nW9VFkPh77Z8ZEtAip1D7",
  "key9": "2frcMNJyJmCkPr755LSXKqMYhEipcPB3XcvBHS6sHkWohCzEoTwEyYyAfsLHjYz617wqSrwnAKTZm9mpZ6YXFcFX",
  "key10": "3Doy3oECt7KipPCAN6jjDX5makuqvtRVaAmTXfAuDrWJFMNtZEtXnv8YKnf86G8Jhd9L8GFdJzPizQDxreGEggV4",
  "key11": "4wXnREtrQQ2PSpufXgzgxWkWvyVJDyTzNJDUbjSccSGVmwRjJEGtuf4gPkjZx2Fu2QTEWKgzP7dE45RMmqeZoTqR",
  "key12": "2bnej3jnS63bMoiR4hAixoSZogGeMP9WaPuUEw2cqi1jPcPmvJeEijnd8EYetAo5MccebDt8sy5Dj71boGNqCp2P",
  "key13": "3tovSPhp2gCcsyCWYa4Law7SZRdbBVv7GjC1q4JvuScMMNT3ECEjMT6riAWYKA2VVWTVX1NTD6tzPXrxpV1LzxaV",
  "key14": "txCn4MpFgRqyqsVef5B3W4hsVNSpqYGbpZEDyAAScdCRM61dBoUCcWcYH7VARxURpQ9qcb7PRShbQ9JxXon3rKx",
  "key15": "4oLocfktSkoQDMT66wBKTzKLvX2X76aCcNXshqWKyJG2WySFZz6W8M7jYkGvDb61XWumPMfQegGZZWgtvUZHT7XN",
  "key16": "gFJRbntS4hXt2XWP1AEPF9E2nu5NWbVUGPX3vC9NsCo5cbapdgVNGkrFBAQDPisdECs5if643uU6AsKrrXQJXqc",
  "key17": "63vYdpxUvLki2EVNikFbXxVjhunN3wQVg6aD6quhV1nL9zYjUCiXWbiXnGo9LMdYELZoxCeqNRhEb2nTiYZupoPv",
  "key18": "dNzTgMEU14gbuUskpQ2qRUVC6covZd2K5EAeNC1guUmeGAsxPDzhVGaYyzs93BmuEAf97rwLDXXb3NpwsqmgVxF",
  "key19": "36xq4RFsqyFXhZtxAD3SQGe5wryf84N47o5jUA9uhASKA1y87dZb6RpVBVweQJzJpFd1vX96TfM9h5Gv4vTHbgj7",
  "key20": "2hn5byn3WdcvMQefCzgRimbHKjG7oLZH1LScv9LKmTqaWjTCRdM43x4zTKrb25Xe87RiRRKr6mohTRhYfzFqayZN",
  "key21": "4YFbSGFKBt3zXgfJ9TmFwGyryYmDcS4UjXpGsJW8MR6BJ8A3vBRh51PFSpyRMu3Upk7mNLmeedMj6nf87DETvuL7",
  "key22": "55FVFMA8GtZymv3RMXRWrjJuGJipoU9GgHHY2SJSS9VChes1i5cPvc8AUfF7P45eTnFbQNWvEscU6CvswwTjHW9N",
  "key23": "4m2WECgm153jC4ue6jK5g8XNbnhcJeZDsWS5VspcpS2vVeYBwt1SsxWUuFw27Bv9W8QyMYpZ9xaQbX1jM2Mev5GW",
  "key24": "23xCr1nTorPMjg4ypuRhgXHdEYJYxfYhjVTngMbraNTNyzmntv7sfjxSvUpoCtR3VWNrWmp5AdHsYuMkmsArJcHx",
  "key25": "2K8Rxp4azxHpbGRwQaCDBkNufHdFJkq1PV9Dga4eKvERT4EnT1DQYZq1A5oNcNztaMkQMDXqHSTvLkTijx69VLeR",
  "key26": "5BHuzwKLee86vyNF2uTKPo2ufz3WKA6kwbyRHGrJjCCo9CyFpYvVuUjfG6R4zANNVPPX2N6GaK7ph5L6qnEVAC3b",
  "key27": "5fd1yX9C3VGCEA2td1q6afwuS5XUuHN3XZeQtNs5bSY4PG1MyJZLSQb9yjjHS2H3QmKBr5gu2His6UC2hStjKjfq",
  "key28": "59HvbgCFxdjinx3SNmZGLMeD3jRswuKigXpfiCYEfvA7Dh4DQSzeVkvamhVTiea2qeiLLbnwHL3cdX1M77gpzBbs",
  "key29": "5seCp78Luq9XdsmvfTC7WtEX4qekwtqunqLBjUMSBiibQhCkDNfsRf9U8dTXrxjP74naXEVrN5Ta5EKwuPDafYay",
  "key30": "46P51vmFUGsZKHpefowTngDF7WeQT71buNztGDRDeXrRstAbdccZscj53EmbgkE8z4zqAuW1xmohcTDuz4YYE7UC",
  "key31": "66cXVFZg9EPAKjxLfoddGK5X2niQKYC1YF7xoeRuhBrHc2HgtxEJYFcsc62GxdMLxWwcvyrzF8BpBftqNShwn4vD",
  "key32": "2PMYj83KDxunU6YoYKq6Uy45fgnnfYjLjJ6rcWSQaKRLEF266tXrGb1KDxLW49xruUryTTci2yVT8ChTy8BgrEb9",
  "key33": "3i3dzejKJXDLtKv4JsNqMT9dwTc7wfrh4mFtSJrvtfBdfpTE1puw3Sz1YD56eNSQKPEHYUms27X1Jqc8MkthWHAG",
  "key34": "5Tyug8hsTC4Q6nyF5vyR8D4DivzuDQFMxpZxLJTxNGbmfez94pjh8JRbyCiEPCfbHraJBLHhKVts2qsYfZSbRwri",
  "key35": "57YsyRrrHzQaoUPo9gFA2MECKkQNuedqQ22wW8cDUmFxAwqZzULcQfxuW4PXbZryqU2Pa6tZjqoaDrLD694S265D",
  "key36": "S54zbGdmm6uyjymqgPRTokzixA5tfxrcuAGTqXGwFTcXUk7BYHbTr1U5RQyMYoWxLMZPx4s76LNrkASoHphLe9u",
  "key37": "2BP7jApJYu4JN5bGeqcqbn3ar6E7nTcUoH7tWXxVwqDEYvSjqdEbL4aM3akcgmuZbZMdC7x9483EmCMik9xz5MYT"
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
