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
    "5pkyezDC9AxKC4WLnj8rRX38fPzCJtVJxxaAtbRNAeW4MTF9G5s6rKeX8oHYMJcyqTPdRMn9NGLsMKF2jU3h5cd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zii7mKcDn89jCh4BvWtJt3XfKv6aP64c1ZqRjmWz3gApQsULi4QeFDebMKhA2MYMugo2RxMxszMDNLn3HGL1ZUR",
  "key1": "5FXQSEWydwCjiUB8k8CBeQnuoxazPR5pREQowYXyycSyHijUAVxUVaz3FtjHuyjqf3eugUPiWPX62QYfMy2tWPTd",
  "key2": "4ugXufPTKWiAvJZTeU3fH8Z7m4Huad3bx7pDVut3YpY5J4nMbYsE4UjBYSGHdw79b9LQyD3RcW8sn9PodKpbwY3F",
  "key3": "4X71vJGGZn973NV2A9jujqpCvxFecuAKJ9VSD3dbgqFLtGGxxKPF7MGq8vNTxhky4hpq7JWV6T4G3CWhocfk8vQd",
  "key4": "4YiTH4xeSz9p6YqpZGGHXgtcXh8GkFN6QwnHjgScSb1quiB8dxsMGd6bpU85YVghM8jfWXuUKNwuSAVnm3YmTtpX",
  "key5": "yiGBdZjouVcAkW6KemDTBFepxk75NrsN64EzxumozEBFib2XejztEh5wBNxD1KXYkvz6ps96MYod3PK7dp9Gbd1",
  "key6": "NAPoZSiqcSvau6Rch25mo69BHLwY7vGgShF3KZifG1ebTGVXDqDFyCCzbvQhvz6W3p7kEDpNApaMf74tKxtbRTx",
  "key7": "YrhiKCnCgxbX8JuJyNFz4sYM4xbxphL5aTLsfhptkyUFK9vP3A44mthrv6RqP5PpuHZnUCLsSaquzW4X844CK9k",
  "key8": "27SwjosRJhJ289LXH8fAf1KpwtqAdoVnf9swabWRXsTxD9T8iQtvBoQcVF1Y7NGUTmqJpkf2rpMN2PAuFGBejEYP",
  "key9": "4Pj3y8aGUhADwFcRCSRLUqPHDA6rnujKci6eyzqyk6JE5xdHtWy6XnKScCYbzC7uXLouVmaZ1wD4WqN9R2dbKjPY",
  "key10": "44RXJQiGyMhmzwWmBAXPe6Vtnhm1bzGSWVGhYoLpyKcq5pHE9iN7iCBcYTaZPhU3UP2xRSqyaSeBXZgn7oyMzTaP",
  "key11": "4mfcZbzGHFLXHNh9nABYEe5eHBCVJPSEspdYtpoBfqNeXBQAyaSsJdcK4ap7kyyKJvuJKtbQaLdu4Xosj6AENcc9",
  "key12": "5jEjSNoXNogZ1YTKqkZdqBpcoc8YMwDqEbXaLmFUxbsMRqKt5EFAuhVD8ow2sZQxhwEKEoMcA89xDPCpYLdzpkLs",
  "key13": "3hB4RvfYmcrZXwAyGARoegmDHaGePdA64cWdoAdN6yKPojMY7Y9EsciYkN2YxHr4wLY3vbVW9getrpeofXirkAqP",
  "key14": "5tMy3iSFyi96ioXEM2Pz68J2QrtpLu1qZyL1cPoD8WaN3wcuKkMY8BnDd3i1zUjxVckNV68cEW2B4BmuAUgQGs2s",
  "key15": "S5gKnDKn8YPi3Cyt4rQoKvVZjEZU6pC82NgymPDVPSP5PHuNcwTeEah61pA7YU1J2Pm7a4PfVxTm98SpXYKBqZ6",
  "key16": "4JwVDYuoos9ttbaemJ3HzDj4HyhAJpUD7f9orsafCrD7M42gPpFZw8EwCMfVD9AJNG21pwSjhZCuYusLVLA1jjUq",
  "key17": "Dut7CBhT193T3iPDkbjfLBzojd2pvs7WgwMtCLS3d6Gmz2MVUMFiA8SppThqSLP55ggH1TiwU7XBry7pcg1qgZG",
  "key18": "Dz2bJYiWBekyqzWM3bXW27RayK8V4yekCvd8P1iW6oHnSXsD6TQBTd7saLCuYFNjcnjE1UWXBmgy8nx26fGcQ9K",
  "key19": "2doQJLcKkpsEiP8HEziJTSHJJLeWmsAYWKH3Cx4HstzLDbbSBVZ6MGeifDdb2VsKWfY9mdnSWisWNZ3PuhSiHUQ8",
  "key20": "5qrBgGnVwHR3E6R5xFKc2Z3PHw4YXBogcsrP5J49Vo8ywzPhgogFJ5s6hQ4XYhMggWi3SJHFKdB1q7yTtBoFX8RR",
  "key21": "3y16rMcYRuN4ax7LmHFfrAdac2ZED1jgRa11TN7Tb1JkfaHAJ3WraTsgwp7nLU6yr64HKYiHPwqzsS7EBo2S1DSq",
  "key22": "4Cz9suaQok5gZx17K6swGLAnHpXCnLeiZxUer8kaCzZhdoASeh1HG9gEfy93hiBMcFhii9mpUF3PiajhimSe3oYw",
  "key23": "49g9a8p6t78mHkEn5AETV319ibcW9gn4MY8uC8WHqNpVuinKMCKMsjyfuhzFCzSKdn2YcxvQJVjLrUFCMqv2ELzz",
  "key24": "hzKLEPgXqNr1UnkeZMYFWrb6c8YbezezCQcRT6ub6yyYTA4RrYLEGgoehtpnBssBtqdyVXCeQ96dDVHdtXjPwFC",
  "key25": "63RY5gQ12GGg3MXqzXg59nvnXbQxxBGyrE2RJudpcPzwdoQ4EnsXLzcxeay6ddhRAuQFiaQdjjyr185VoTUsMw17",
  "key26": "5Bz2vw89TCn3ek31La94Af3sWgeygWrcWPgTtrENW1f8zjbkMTz15rwmKCFvchuoroni32KdRWK9ktVW3SpZrV1V",
  "key27": "XvuAgUFE8ZneNc7Gk4VDjfwFuDVxhfxhnP5iPwdKGqpEFZbtYvYiycA6ZnmNTcdYaWsioK2scB2DjNoq6E5Ynao",
  "key28": "4w9YSkn8h85M4pFvNcFuMwYHm5M7YXmdkhv68QzVeKwCoMo9a8KRqyvwNuqDTynqa5EKyfsJFT2U7zecW7vFt8zL",
  "key29": "J5SE3yDb2suYCkPKVnqNEYHAQsrSPNBxBu9aZp2gwLXexaho7bByKGesCQ1zbwGeraZPxF9oovjHbqSy7L4rne3",
  "key30": "575utWfDNoLoYJguou1Q5R6fNafVQp7fhoo6cZVxGqBTJTKdJsgVSVGyKrJAedWpasEY7vTywTXuT9q1dSFMratQ",
  "key31": "3VxM7sYEsNbtGH4mdBsCoyXD6WVFuMzua5KgpWsoPPfWjycV7XeykFBKsSH63J1uT3Mpn4e8rKm3yv47kF7KygVA",
  "key32": "eiw8iEysCZWDn1MpSf2adDokf8CV3QQYACqAAaVu7bWhqd5Xn8mmqA6QXu4kQfsF81pfiUD8ERMXXzLM1DtEicr",
  "key33": "exEG3fztRNvodakqrXc4ADZDcX9raQYmF69hAnjXBMdEKBNfhN74yUTAx5bhswWgkMCvQfPQsHRaXxwLpKfbm51"
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
