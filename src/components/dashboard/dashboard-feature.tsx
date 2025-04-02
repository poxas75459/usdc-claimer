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
    "4BN4MniUmphmEj4nqeTehTUBijPUbPU6qzMxHhbK1SraoMeF8dta5DzpwHpWqhvVSna6MxngJLe9YTsx4pZxH2je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bADgMnbUVi8mFifhVUK1K9YeffgAgfXJ91nxEswYannF4p6QR9REwAFXwzi898wshBRwPcbmPbtG8atbjek1Bji",
  "key1": "37cBiEYoSfN2qaXXpAouUENJUyHehjxS782LmhWF5mhSXtiRbo4EzcHgxPPNcDtaY534dCeeBsDmMFvLnohcJcsC",
  "key2": "5V6MLTMtv47YFLedJSky5DEycpGfLxxFVb8chZ7dESbY6tbbpeapotEPXt2pwuKLhg7UJP6CMrSJgsMVFt4sCVGm",
  "key3": "hYci8uG5hhds6zDfh2V2pFPVpfzkpfSCCQQChCTtQwWvyThuU4cwRN3JZmuELAQHp56YmpUCYN21RsJ4huoTCrA",
  "key4": "3RifGeAAK3L9fYZwQDADXRc9qt6189NXap36vxqC8dq1Fhd4UUzkcUJv2yr5HCGRmBQgHyDnAf7Hdksk4MR4bPvT",
  "key5": "5ADqgZVNTBfGN9wbcEeCRith5vJ2j9PoPMjxjsMjXVJpm99LuPDYkFx4HfvUUSVuVEQHAhxpbnTkAnLAsLg8LZEv",
  "key6": "YNx2GxVCnEyspkLF7eM6g2zrDfnt2QK2am5aYj2qcX6gJFKLRUxjQXXo1bH5d7P14ftBsenqUAJnH9jM9JwWDLU",
  "key7": "4ebwhVCjnojKjNiSKLXRJuB9GjzCypC8gJNscUPhMVxobQDHz8ZbFeSYBi6NirMQpUMy5XHZ3hz8rCuc1q6WSkUn",
  "key8": "3eQ7qFUJRvmyQoER8KftLTT5B6ZfzrmER895mkXUw26J1kFPtguemnH2BaxmoBmapVYDjcNKkX1JUzSWM7V4h4FW",
  "key9": "5CYhjLjFQYfWqLxHRASwyman6zPr5yceCpFsysh2zeMZSeXadv68DoZEZXe8Q5y2Phye5pzZP1AD6oYmZNdRYqVm",
  "key10": "4yhUxUgRZPCkFAn2TDiJd68LKqrCC3yFiCKWhixih2CKXAGAS7gcRtPLLfMuCb8dLX2s1vz4CmXrZW9EorXJdqo2",
  "key11": "48JSsd8ycbhKuVPsCo1dxqPmpKGyXTSHuCoXmLyS4Kphi5Bqjr26iGm5mkDrWqC7Qh2PVABuVnd15dCxCcK3Nqh4",
  "key12": "646pbdPQi9wcYRRKLsFRE77TFeg6j8gfsx8FtvxTic9rEm2QSY7BJN1XCFKRDssCm97kveHLfcEmcB3uw5AFiPei",
  "key13": "46gTQunFMi7wFN2RLwFvWP7NdUBFGygk9Xjj712hmtGZDtDYZt3dCAFTFqpzfpqTvLhc37o93VHixeBsfN3APzZj",
  "key14": "5x32vAm9yJwdKVjUUka8BRLSEh573tRFJajhugHLdskxrv3fHedj32fMJiP52m9qQ5H8ghZSPRnBueHzaZyF19nR",
  "key15": "33FC7JxioPdDPRqYxjh3yQgSooFdYrbtQTpsJ9bBRFJcEVu5yesCFFHLMcGEkZyww3NHS7rW2KZQcUZKDi24VcSn",
  "key16": "2nopm8nxNUrgBdoQVfV67ueoy3dyybZwGHYAcujmuohNhMJyqPMePZ9VCNyhficQwP5rfNWHpJ1pGBhBDF56w5p3",
  "key17": "c9jx9yBYnzcWTSYCqN63LrZmTauDL747dScLkHxYUm3qzy9AVYJTGoQjFHG3QND8MGugs4vCEK9dKqjLBhpCNck",
  "key18": "657FyBKGPx7xp8ktTyaX8JVLEz5jnQdYdwR7piiF7h5p8LXsYmXjCKQfMa6SXg4fs2YbFWyzTmM2zskch1X5r4LS",
  "key19": "4KmKms593dQLU4gss3rtNG9noCSwmhpqwdDwBRqBhd649tkf4rJH8ofoEiuaGozgU1R8HxtGJJ545KAvAboN2eJ1",
  "key20": "3J2Js2zn2fYGtLzAf41DDbyLpq1pMD46WJsahNr1KxjpXVf8o6S142XSZYMqopipMn2y2PC4uFNJyBUjCSw8n1uE",
  "key21": "3sjkvEzojcqXgj8zQ7eLsTUjmtxwSqAyv9t4izNbdz3oU5FoyETpTEtsqWybGKeRgGNrjzGpxDZCqEQxpcD32p1Z",
  "key22": "ECS8bBtdFNdkZUu2tWVr6K2Un7MRonRPq7dC3bzW5HENYUNjCKiuqEYdieaFd6Qun4Ph1kbHh13Rim9khEC6byS",
  "key23": "4YZRASRFUc2n5gZEY9fK4P6nCzLMFwkdh1DvGcTd46BZRZn2ZWAwsPdWAuvJFUCneN1AJPThTLgTSBS2KSSgEd1W",
  "key24": "5JFCcDHeXbsYr5PyEiLPCuBGHXthrnmDS3A13KfVDwanWnBEM7hHNZDDrgqWqbcFu46QAf65Cxo5C87XA3gm9nJq",
  "key25": "d4pbkzWbeVf8aNvLFBQzG59Fetxt1EFmFMroYomK7n8o6tSyC9jCv4AZJkmxbvtzFzTphFWgBSGxmdESdCsPWWg",
  "key26": "2hbvRfNS75GYAxP44hUgF1R4Fc6ESJrRZx3wrSoLTxsBsX5k9WGavi5sUvqLK5WqiWs8ey8zEKBCfTG5YqNkFV8g",
  "key27": "3K3aAPjYsWkr2TTrbz3sEhFYb9hF88UbEfd16QGtm8dmxMY4UFEWFa67Av3ZNDQhEfEXao2DWZxUu3Qfhr4KbLCu",
  "key28": "3D3fGnJioXfYBgGGdcrAPU6miQApSGrbQmNPrNPNse6bfUzRSaYDKb5JmEyBzuw6TsaNSFBbPoDaKBRzBcAcKwMm",
  "key29": "3N5i9UE8Qa77cGELbQmFjS8XUcX6cabukHWSbSP1FKjviLToiWxdaokQhX8DsGziC3ab8sJt5JgxbmwrL6fESntx",
  "key30": "2tik5TGi18KsFwNFWnhyRKjrwUmK56wUjW4yTZBXWLz1RfqV2nJQXjT4G46bTc8ebL44qUGiLRLFLFGp2yjYMyNS",
  "key31": "4CdZTmCrhUZwqRVCz9WtAgapKr3jXTYQuYKVqWtYpNBVGvUbXGRDt85BfFJnVNkmKW3hzQmkxsgnQib8z9C3fgZ9",
  "key32": "2Gupt5BT9sQ8wejqbjxSpkNwRAs2V3DQwWXrXBz4GqEjdC8UFRYXReru5dbjRza4nCVRs8zhXPCYRhaMcXgyBn2g",
  "key33": "D9iwsvYxepYdV7U4by2R1mrBsxHSvwn2MR2sMh2LcMLLbdmVbiX7Md2PcqbAveYV7mkupDQ6rLnJMHBwfqicH4r",
  "key34": "5VTfruzcvK8488ijMJ19d3NrviaXepfbE9WHPPDLMMV9r7ZcYFPFdfiPTFGZXxGVQ8e4g9XtWFg15Jkp9HDu6xKc",
  "key35": "2XDNjfCj8p1hphwnooeevoRVJhWBYjfKuzPSspGfF3fB5wtHNKcJhLQ9SmXVGfV5U5jqEKzwRu4JVVzapZ1nEEad",
  "key36": "4DARN8JWe8EBjauikwicSrHHmWyZAX1nKteSjfBheqN7d57DWTmUpqX3xGRdTvSdubstpNuG2WX9aaN4UmHupzDu",
  "key37": "4YZ2NRFVpQVpjnRKa8viPYarsYDASGK4bh18X6DdGc1jtCr9oxyp2zDbZ8YAdhTKkR1qRc6PyXPY9efvmquXxXmL",
  "key38": "m3HymN5zn1AWMLh9LS38WxA4Hum9irmB6fpApDqiWm4DpbmLttgAyjPNCpYuVh8mUttobL7XGBjPcof9kAckwFp",
  "key39": "3gcPSDL8Y4yQMaujUZtbwsyqpKvuzQsWtZQmsNXge1pnj3E8bNYWqQaBKWCykXB8H78z39c8GbYvYN44D3oqhBMY",
  "key40": "w6RA3Vi9Dckzs84pUTAhVKMURqJua5DZpjxQ9YFwdZAAbGALXjhW3jwuGJGwkNUFEsWHCxUXNSqKad6qqgfdcK4"
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
