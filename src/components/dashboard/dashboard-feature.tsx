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
    "3rsd2H9LzV6xsLqJ5WeCoXkYyoCF78rNSv1HAbZ5EsnyavbZ4Ww6Jyyh5XcLPzscF5ZoXgVDixYGhg8gY6TG2dW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dhtasYxD3a9HwxSw8KJYJzEhEoZPcdqktd4xbpPxUUc3g1PiveaHHawnNarqqwVb6AHeb4Wi5M5hKMMXUvzSood",
  "key1": "3SQZR3KQ6fwHBXVeSnLHm14hpKBb2ANXiE2EEMdEfnUDQsFaPbs8MkN5L3Pnq4JQma81XDpcZjv61HPyT7o5Nqk6",
  "key2": "ssbnFMJo8v7iKiTNMWGmv22uhGY2cSLBQdfkjNG3H7hpciY6bgwGNS17jJJLxv8LC17Cqw2r9yC5v4honYcLFjn",
  "key3": "3ZdhYASbKAgHD83rcmZyU98Yc3aPMXHV4rKan1cfxavVvqwt3wYc8yd7C3gqxshUG5rWfkt8Y81NpXyMwTaihsmz",
  "key4": "TrPoKAGJRz8vBUX2LjiKaTE2x3Rn3DyaBGDjrQZmbGj5rwSugrFGFyojc41Z1s9dV9KktWRZYa9XUpEQBaFokKn",
  "key5": "vDq67c1AnVtUCwtyKDyXWn9sYSZi5MGFzVLS17rQMqrZAWn5DECfUA34yL1Z6J78iq3kcgh3hBihga4juFuqs1M",
  "key6": "5sT6FXZ2zLxDCrrdT3KRDuBdKh11KnYtgRhTk927SfTn4W9H5qZTQhPyXwebGN2AXLEV2Bhe9wBPf4x3XQ87QnGy",
  "key7": "3BFh5s9GXNPK9p7su6YSKc1KhbpPosdPRYHZx4SpxT38zc6xpexZnj4j1dX95RzLVN4FbtZfySmokNQErqinEYPZ",
  "key8": "3LshohECpo7vMsYtktpxUW3u47xAdNgECnB1TXHnPD7EQRCg2KwU7LVvExqusBd3RFnNV7MRoW3MXEF5pS8J6HFp",
  "key9": "29caYJuamBdmATkqtcpiucsezahR2y6cqWtEJSEZYMdhZaaf5F9Y7Ze5WLP4ixnZMfsmytHYTTbz72oZwHCJ4Dah",
  "key10": "53zM48KesVqbErorNBpUxfu4Dh1kx1EJwTmDMwVQh3GRx3XaRDsRK3nfz4rxrSssUYYHBwFhMxw5A3DxS8bXNk5D",
  "key11": "RsNZnmkaFkFqdffyoubZZAfwRHRCUooxfhr73tbPjxGRsvsui89GBrKBkf3nqgRCKKGBvQZtEocNnrd9eQFXLDm",
  "key12": "4fQob4TibsyAS56aX3SJWJCRgdR6QXcrPoHgHh1TMm9Ea6HTS1bnLDZ2dq1MsgQWnC4KCxYLd9Y15kqATxkxBWcu",
  "key13": "4sTe7VLif7coxGaos5TawV37jw99qGNTBrAnffFRoULaHMSBvvX2nZyz1PhhU1GW4c7cSNA8gZVgySuiwnGWEkkD",
  "key14": "4aYwJnCeYTXFoiDZWFs4RzeSt5cf6XbKGizP8fSX4oCnhT9WuJt2i8qCL3biXg5xE9nazWkta9s7Us55ygsVhWtu",
  "key15": "VZGJPkF4uiXVSSUUoDgDt6h1AXcbqBnNRzBvhmBW9Xr41krxdcG7Aex4oGJG2FPjqfgnnkJqhvoc4H7RPvawZrK",
  "key16": "4W1agCFJ9CbHeh43v4Cqws8Xzz3FzdQs6YLcLcQESWPDSSY9YY2ruioxk49VhsW2ZxAEGoxo9xJXSezmem8X4T86",
  "key17": "2FeBtpkVzyxrhdDGoZUZoAc5dkdUgNLp5dTPDjZLtjL1TFYXXFoguWFB3paLdDCf9LYvpYKiAqgfQUd6VqLtqVtd",
  "key18": "3L3hR4gPqnvKoQoc2M9X1c8Bg9vkWtt3QHg3Nhg4Zjfno8569NAp4sMYsD1dVaXYQwYy4c5m6doouR3YKEogqT6x",
  "key19": "5HNyYgQFuJ3BdjR48ZVHuxrGX7zwXcpdnPvB6ze2nW6GofKUcU2ubE1X8mSePHHE5FMZUQ4DYKs8rBA3fkHCCTj9",
  "key20": "2adT4yKmojEPtPJ72Fx9s5bnrorX6enocsS6NDvq1mmY28gwH8g7o6P2wYUyPBQ2z28UoDAqwARLcP7MNgKjFNHu",
  "key21": "22FAkjkoWNwEynuXHqPrF4sNaGawFskyTiCN6Lvw9jQfNTwYrst4Jyfg9MqnaGvSUgxRDrTGnCxiKCA6F2Zq2FkQ",
  "key22": "4AQwPUGxU7R5VEpGtjs8BVTq8e3xXuHvoS8v26eQ5kv9J9ijtebrqcFqfTuUHvcjaZQ5fFbzsyfLM7m9qbMEGBdp",
  "key23": "3PrEA2d4hFsZP86vn1BaNzcEvaBcVaCfZHhbRWQj1gJAhWnXRQgmYSBZ8f3z2ygeVXdPjukWX5Z4qQpMgdVtpVM4",
  "key24": "2mgSpAwELX5wXF7zm8KavD9jvf1g3yv7QydytdQqCDtRkEQuFnKS15MTsHyLY67Sa7nsGxHoaxbyGrREMiWk24tU",
  "key25": "46kspPPPBdV9keFrCG5dcNCLeEfQHtWfKdhaZ5MpFx5r27jeSGNZbLFrqusCaTyvBpw4iCxN4xv8rMKWqDchkp41",
  "key26": "64YXut2BZUkdQpwSgkAxZ6vaAS6Au5qJuiz7APRtibK1PcqxBZi6iGTPnosbjnvUGazmDrWiY3PvusMkH4Eh9Wao",
  "key27": "41JH4psNuYEvfYvKyArwz7bkfYifd5XzEqC9syUSYXWXbU6NZEnxcVhEoNF1yEdoZGKPLWNMJU3RMEaZqvtjpDGn",
  "key28": "48qzVASqokzYiE9ttfyP561Um3kMpxm8kdgKCTwQQtUbPfTeqNz4SUottLebAkNLGgzTTnrFwkF1kFG2fyATytuA",
  "key29": "39r2tAV5PgwzKFPtmNYpYJkgrYk4GNaUVJdi1EypXRr4Kb9EWowAFbjdvFA1C4xcRWKTQCnMYXNd98KP5morJpFD",
  "key30": "dTYaWicM2oQgypDadQfipP8yamX84dE2gq7n9qngW5EN5ERKPe2QUjrKKvGVMkxV28bTbDX5FFKCsne9DNWm9Hv",
  "key31": "YgHqNuRy32CznZa1i2zCL6GpyG3quHT7CmMXBj3AEK3ZESmdnVxHLAwbBj9WV6a8jKdjMQzhrBFqXR9SE4KVkjK",
  "key32": "JNeZ5U9mVTamh52iKpak25ba7CKN2JjMZszcJwF9wq7oycNtfWB5v1xKd9Qn9YH9ES4h56dbBnpFQRWAgw15FZ7",
  "key33": "5w6xxKy6AgrRuaF5Mpb2MMpDwATSmYX1iUrBbNtr3UecTjdzqBqaLK1cuHXtptHpxV2ocwrqo12H7NesFUfiC5sh",
  "key34": "2AiMhxypvYHJiwx4ybtJcfPycpXzMGcRVfGxPmDptNVW7LupDqQu5W5gEdWBLB9yXheWdTJEQu4SP4VqthpEfaHC",
  "key35": "5MEkE3N3PstKYg1D18vXyqbh5ZGcEUMdpMbjP7c98xjMcuhpA4nQG8ZzMR5S5PkEjtJUftCkewEQuVucPeGUHvTF",
  "key36": "4CXjjym1xAk5y6qyHf3Dki9tBJQJyYV2VM5xM8pL2HnpuNDL3fmcYoDRXhSw4M1JAFCeY3jFtiNLR8q2cmuFNL6a",
  "key37": "4ktHkFMkrCNzHTjgqAkuuus32Nezi8ZsQLiEyR5qSDzanR9JXgW57DLAHJ71xd1fsWfuRf89RpTP3DiwKjzeTKXv",
  "key38": "xXwtNSCkY8Bzp9HDkVDB2Xr5d8UCwXePecNENqomiZq3A4GRAoovN4cKJMKRwuqq4Dz839BwpmfxcXUEck2Vvp7",
  "key39": "5cPYTpc9ZTmyFYwd588HjnqGW3scsKWUj1HeRWXF8wp2ULPAmhcJtdXNBu5QvwMhMfZ3DCGpY4UzhAj1UGEv9TSm",
  "key40": "3ghuoAkf2GQFi6PkAFNst1jFr5ZqUufEB3iYD4rg39h5AuMud5e8TLRiSYqrJsqMzQMSi25a9QCoQyxx3Zj18Sb7",
  "key41": "2Xkwt1STKZfgDu5Y1iAzeHiP3dibEpFvgCy6RpY1WDkjZzcDFyRikVzk9pTedA9CiPkxsTScDiJWeiSNGKkdVAEP",
  "key42": "4JGm5Cnnab58bpReFCLmzRtwv82o1YKJfPHkWPz6FEtCq315judgh99eg2fC929WquAQ6uJbKWsNPqJKhbvt1WmS"
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
