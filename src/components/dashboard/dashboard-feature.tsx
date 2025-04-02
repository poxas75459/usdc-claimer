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
    "3AioNg5WNPo67YiwRJEHQsakrxuEPqAUsk7Kn1nwRTxboVbFjkd9GDNV9QquFtYPDaQCWUr2LK5ooSRTFHx89FPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TELA8nRZUdHdbf6CuMBjK9FUC2kpsJBo2HakjsCPEoph55vyEJmK7aL4yrvgZ5QtnMDeTdAeeGWCpUNDoMTpRZA",
  "key1": "2W231Sxop87gd4oBot3QgkrbEwkjR4ZfMKiLCzSmmzzFQvJqW9FzbcbuQYADndoF2oXAoAPu7h3Qa4PAaZXALZG7",
  "key2": "5NBELgh3fVyASiPMaoCZte6B4p8iUa5XG5nVTt49wbPSuKiocU2jUcQEPpMzsnxYJcpAJ9PZ7ESR13qcLQhX9E2C",
  "key3": "5KExwWgBTBKoJwfB8QzGMVDL33biHwATxdpvZcFT7y7n2MyDPE7H2axormAehHzaZEUAvw5Px16ijaMtcCcAfwVP",
  "key4": "4eVCFmdDDDSRYbUKcKUbxFJx96hoRismZEtdayp93RdS8pfVkYVwMSsSX9GW2NzS5jwck1tRt2PsbnE4R8vzwHsV",
  "key5": "43tNtZfSUqwmTepV2j33tCkwygtJdEJPWt6ks5VE6K72sRNSYuVCyN5B266dGy6E82VChEdxJsnjg8kjTw1kLNNf",
  "key6": "3VjMy8QZxE3M2rcJwrUTMC4BcrnXXKyti7KJXZYKLFoygzeEFeKYBAwPnxTGNp1KrCfNTabx9brGi5uGevRCXZ3u",
  "key7": "4WMMeJQqFQTThcyUfVmNHZFyqo8egSnahVCK9GHjJq4dhH4jxkSvfvukJEfziMP9KbsVwJS5ZQgA2rFBWmxmXYpG",
  "key8": "2aPwBFW8ZCbUxFrNakYSy178vKNvz63sRvZVnqFCbkPJ4qgkv1fkYmzEJTjaxEoA4fyYKgvYBW31dRCg89S1CiZh",
  "key9": "cuA9NdbA1c3ggz7JKNhVt2YsjBD7hzkMeCtjU5aqah1xwGKyMtb1g4LxtrApUXTGjkqMAKquFqMqyvNTDaoJihx",
  "key10": "2EGX6C5yqVWuPSoM2RA6ej9eE4o67hJpont9WQmZsBnQUAkVeqDZRgzbfviNyzm49cZAyoHfnQ4e1hX49LkXWF4q",
  "key11": "5uzoXX8x6LprDT5und2nHbmMVfbi5euMZPMqCnTqFvFZb87Ar8aFRqNgUrncMpZqo77e2vxh6XLqL9puH1cC1VWW",
  "key12": "3LVEznZhtkZ2JBSrMYHoSYp9u8s51PRQB1RSiXp1CKTNj9rCYNPzrXxa9SW7gsTgWU6RrBwGGBKPwj6Wds6cNR7h",
  "key13": "2KLbzwDuN6atVoaGaqBYSwHQGj13qT7ezPTDTbdNiWjKq89LbeKH5XW8x4UMj35Vu4RpW6VMapQDSmLP44EEGkS",
  "key14": "4ZkXrwGfHKKhL47KqbL3EYNeBYfnfhRThiNBnhkCHu8djgywPARxXwCRrWi5U6ZQ1CDgdxabjdHzVmAQFwy5XG47",
  "key15": "2JVY2WkRXsmccjZV25WcwbuRMHfZBYj3cwnyVGYSg5AWK4HL4C3qKwzFjKX3UbyavJnEb4eXZxp1BWeoAhRyWjrj",
  "key16": "34D32XDNeJuARPwwoK7p3hs6nMVFtmbyJG3GEsCnvFzp2e1953fMrbiDA81Hu8fQwPYMEfxDa62iz6qfpkKZUFdu",
  "key17": "4nm5225MHfcnFujShrBe42W7g1iZqCzf8CCdUyb4tDkm87PW8gAQUXA5Dtw7oQJ9koTsJeoAJGpHeU3tcGW1VgrG",
  "key18": "FZYq3XTuNRqCWuHSM6NhTAaJPU8vzKpPHt9jo54519tRY1aXbKunTWw2nsw4Xxr4qSokNoeYFmjzHtQevSqTpYN",
  "key19": "2UuxE7WQwfN2P57oK6zmTRC8eVxQiN2yee1PWaTAanCXy1M9t8WnUrsFYwCYBWisjA7yFNrBPPev24mDKCxGUeKC",
  "key20": "5beYAPGYQKbyazZgC6ALnq8m9ctmPLyKyDbkJXPEdmBmzWeoEc7NNWF94ooyBXfCjAE2rXaAsWJuETvz3CxrQE8R",
  "key21": "5JHjxyh6HCAd8QgGKgvvi2zkncH3fs4uqPUE6QfkbK1mNH7o298qGJtqNhTJAkCenR5NtNGKy8EtpNKABxjbbhbi",
  "key22": "4dWAf942SNgq3ZT5FGMtsdwJnbdAaTHj2wRP36DPTbLqLTX2HyCWzxvBYXaUwkC65rQeFFH9oSW7Gc1Gkng6orG2",
  "key23": "4KeP38eikGewM2GptKshNGFyjidMSFhsVKJrrPNtSpvUwqJJNGbvnetyYGHMBDzDzVAkm2VKW9usKVqBnaYtTBQX",
  "key24": "22qfTGGkaa4VMsrDkRNUdFvFgyA3Vn4sb2o1mH8ZqJC2SGTipYq2hNr6P5eZwudmNhcDqC34ZYHuDopkctXmW5eb",
  "key25": "5Ervf2M4hh8CmVwjgLHYd1PL42jG284qzHB2wYhNZoZAjrvunYeePjm4RVtoAQBLMAUyc1LBpxZmFvTRjLvzt1Hq",
  "key26": "3EvHePrgMotSyBArvEfb2oxSHhrgithv4EnVrybZFv5C1gUq2ifK6hJkF5X5LNXjQ3PLgvgDf2L6FV3PC5HQv3R8",
  "key27": "AJE6d8XVKjvMKGRh2d2sQ8FMbCeoTqTEFmEVaW9WASTBMCUszh351LKPkHFfpWQmbXu9zGo86FemyumT3dVZHuS",
  "key28": "3hE1oQrwsTnsTQRDUCRoAbFKXKg16FiCztCK2VD9ngmnmot7V8vz88Sr5shBjxGwNva1g4Rs3n2h2GZKTxDQhZRS",
  "key29": "3YcitDEcwAtVWFBxasFtgksSrcmo4jBxPbaFdZsYCJjuEbL7rXKUnSyfLLBgLjSJDbjEtstf7juAqYsDvSRn1UAM",
  "key30": "2EkCZGQ9LeKubWWvxeFsbYWc7mQoat4dE5yhms5uGArTYNUoGVcc3RY4AgfmEWiUP9FK4Rzyp3nRURrcf4PFf3Zc",
  "key31": "4GuBFaJqKNcoSHEHijYFBqwvNeS5qQ4udUHK2LbPugAHeTntzSrHHF1ykem3RtQujWbcC5VZ3YW7ms6Axdsmsecw",
  "key32": "3HXsJqjYVxtaHcQq8eB8RjCLiPWNYc1CZ6d8gWqs7YaYwviS9wwLfcEM2ff9fDgMZ3Ku97yMtADcYT6H2uZddCeL",
  "key33": "5B8iUA612QArJtx7ajuVwL94tvvpdzczCffYZdit4ULhivWUnc9iXD8EHJEp6u2WEUDWSjQNLcr4BsfXRGD135Pv",
  "key34": "VmjUhtDvdxdxbWfytdX6PDdarhn6VJTCtKNJwphA5HfsskwdHHpPSxCm9CuK2x8ScaKowuQ2RUvxUBGZiAJXSMq",
  "key35": "5qTFv3tnh5KfonDhsMTb2HXgFev33wLN7P72vcdnckWZuMVwDjqxTjEJD8kfqDfiJX8A3zE4gEBRcCepAqSTp52c",
  "key36": "2u2rsvkQ442xgwyLw5WY8wombTDkjqHqpTMX5RUSXmK47jeDPSxiHfiCfpndhg36TtAwoPEkse1d8y9rFCmQfx8Z",
  "key37": "2iCN4EqL9HmqdepnXsaVwjmW4Knz6HWKQ3wPxYVZBUZ2Kw9B8UwUKwKttoj6S3r6UaZ19nT7Emip98Xe4y5EPUgH",
  "key38": "3tTg5adLohAK2s5oCyypexDXfGPGxVXiCqW7w1469Pm47sui1nD8JbJkxq7jZvZUP7x5YPfVmofWyzvmoqxE3TRx",
  "key39": "2t3fW6zvBPsCQfPUd2GKaVwvSuQp14M4EHjMRNsDNte2ccCgcEeQqqHj4GDoi759j3Gk5rH7SWbCRoC5ccQNo47T"
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
