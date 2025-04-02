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
    "3zxmfLL1TxsVq7iRzo3DmcCoeDrGe7p5Ye28ca9SLLshurd2eX9x8iesqKJ5RS4qEyo5p3JTKZJxFsFLGReu8Jj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zCSNg2nABhdpgQpBCBV4ZWAbJY6TFMUpaNmi1EdipFRMVHP31dU9EiTXUJf7HfsefxLFxFGUBuTnrJY8w5yMCoE",
  "key1": "5YNidfKTKnPkz7Nr9UScyCYMU5fPdt4a1BBbt3QKz3mvtWGstFU57ajK2ZNEyp8qj2CwDeejP28LzPQTMQeqTQ1J",
  "key2": "5j9BYfjbBGsc9xw9FhpzRr9AT4dsYgUCPsc8iKH2y7KTuZcx1kByjWK9h17atwAijX2xFRgwJjjPey9EY6Ncc3gg",
  "key3": "3uoDFfLqFj9472pU4rhkxUwcGRG2LGb3MHx1DtRcRVvgFkd9NWERsyadZJ2eXgg1VqYNuisWsWg7WDEcxbd4k8EG",
  "key4": "5sbUw8WvW6FJBVTAqMtrWKvVV51LPckLkEktrSfVJmdKvTHJz4Vds1nfeLtput9bDb8Gk8SFWatCBbLUcPfvhxz3",
  "key5": "512hF3LmSTWVPMseYpd4wxN5Ap8TPXUExx4B79owmN4z7Q8vvQt64rBkBZqZgUYWfFDEBnZ14UUYiKkpBJm6jdnS",
  "key6": "2tNEV7e8JvffCiy3xbt976tdu546TS8BgEsfMjErWi8mQdRf1KoGhRNU8y15XsWcnfYjTqznbPczWUVTfdzqjsqy",
  "key7": "59mGVDmahSstDyxpMxA9PDCieT5yoS7ZdzYt4LEkR89cbXPK34BjEEd5Mw8yb9SgBpXYVABsond6tkGZCHsZBXWm",
  "key8": "3uJadcNYjuaiBseBBVg1wQy5CB4zJ3aCTX6ZxwRX91CizgZXntGjxJA2DPiZ3pEPkfhuz7MVMp5VfFkcMadYVaRu",
  "key9": "44BhndyXG39E3ofBtAtTw21VEsiSTjPsNcvigZP7rKEcjzEHvd2dU8aK87ENpgwKVM2ur8XgUT8VySGo4U8nwYP",
  "key10": "44GzgvCSXjoe5x3kTHdG8jJY13iGqgRe3JejJiSHRZwRbWxYxXcymXTYa1otPuPNRne3HFDnwrgi6Rzre1rvUj8g",
  "key11": "4x5Hd4o7THizypUf814hKeRQPS7zHabB1tQR3yq3kU9tTYvrP2wHpSB2J4xQwMZpgCBomJn4ww5GTsNh72vKpMhQ",
  "key12": "4AGQVYWAJDT1PG4RFgoqZHs7tLQaPnPGWdhYMoH2aoMrRKMuF2LnpeRyPxSaYze879y6PE24C3XdCYbjycbwUTPh",
  "key13": "FHDPDjd93CGLMRKWJBd5e6xDbVRG4WEx4KnwfCJSUNPo4yV8R2QGqdo9a63vRN4QN4MranRqBkj2GQ65Chh7Ubc",
  "key14": "2AC1xYKLegd98zKCg6c2kLqDCDUBUDPDrC11rvcBrMS7LK7JUXHTb1re4TnM3D3s8bQ22C8S6j8F91JcEwVSnj1U",
  "key15": "49AK6ZgwEK2LefcsT7e6ePX3VXWeXsENoX8RXZiCeCeHmRpeC8xo9KLnBDyeqACk59Stcx5kSDrze1bo3HXDaDSr",
  "key16": "UfSY8wqgXsaYUQuWTxPqUcHPDPqsU5KzCXT3dN21m9nwtgYwbBQKuxWUaEUJgGho1UuUtJUKsmGNbbTNtSbgNr7",
  "key17": "3mTAzRh4jf88psNkasnw5ySzjaoJ5qJ8XcZqdREwCuddyW4nJ35J2Q5dbRYq2Xx2r2Svb68QpbMAF6mC4aM3pF3c",
  "key18": "3Uxdn5RPiVAdLB1Hx5hCuhpHyGZkbxwQPCqj6BAabQ2cupGFgPEUjx3QpzWqVDzBDXJ4LdXeQfEp9j3nZ38maBQq",
  "key19": "5VHBQzQWRZHcMcoau51HimLcouDNFaiUJysvDSL1ZUKAxcFri8z42v5cZQYMGpuZxXfs1wX83PgdhJwS8d6BL3TH",
  "key20": "4qyXyGz7yXgYQgzZ3irKm2xDMGprQ6qfoLEX12PrrmqVsoUJ866vH9pLNa2cbBN2farSRyCLCZ67udxoku2hqG8M",
  "key21": "4yCSW76xzscvAHtTZVyhPcgPmh6VqKt47wfMwqVXttipWnqhum8LmYEZWNVAHjPSiVLUCFAWwdo2qGbGmNUekU5u",
  "key22": "55xV1HPJnqDw2JChHXKAMk7uwYDx7ua834WNaKXNgc92z2fMkVWK24umsg5cgDdv5ggJhTiKUHAtE43eQYCuRta2",
  "key23": "3wM5bDNzPq6CeCr6K9R9iwLEy9BnQGnW9nYpumyLoZigkzxQhj5NrqGvqFqCKYyczfszzM2TorDSszar1faVzdr7",
  "key24": "X3ZMo3wBLev9dYerEpYz54mYQFcgtoLa6DVWMJoERW72gcsqkwT4bSJGyo2XgcAL3nGjBagwACjYUwdFB3F7oXq",
  "key25": "5B42QXmvR6xQkHLvLkVXHs7TEjRTdNYSJ2aZnnxdFhMsiVwG4zfvnyjipVSeaRCbhnw14amfSDye1EBeR516TF4d",
  "key26": "3hFtaa96oSpZrCqRCAv8SWmMfUuq9K7RHkTj81fPyjazpwSEG442YvpxtuPkufE4WaUVuBanzehvzyrgWe64JZED",
  "key27": "5q5RGg8vbQo4VkH7Ayofze8qBYTqtz4hnfxVFRhgfyRmNEhpZbTkph5FRshpwRwykXUUJUbynf4AnnGWgKe3wvGB",
  "key28": "2FJgom7t8JCtR5nraZs9A5hZy9QukiVmQ6EaqbzYb9JC8jaPZjyRiwjqSgBvaSM8fLYM8wgxqkwzDFTYMbCPAqwf",
  "key29": "5x3iQDZbW8wQDwkuCqZVfjCCYGfRomiXn6qi4Tuec5gmxNqL94nQ1Kq8vnizvt7dCQ82RrbW4pKtTAZzDsPo1FuD",
  "key30": "3XafVnhXX8joVN5CP1YLXBdYX68xfo9eyGAzzjtE4rhv5b8KzQpUjo3ravw4vEwFG2jiLZUEmTWXpqq9hdJ6fisH",
  "key31": "389uNQ5WQLKcHYcG2tenSLktejinR1scF3sDqQ2HneFGhQpAyGCTtti3QDe5A3D9gfApmeWKNRQ3mHyU4aLbCKvk",
  "key32": "2M3KqCaExswoxhaarfyH7aw525LCn8uXp6c92RXMLTAUgxakneci8pxeK6M1qd3ZrPNNrAJ6hY2NiArJ37Hrpnj5",
  "key33": "125ErYFJcv3t3WfvATUfTaAWfTEUzGXnbArUd9p6VzVFKdVgyQx1msFKuyScu88bQHW1CkVKbcn2YaF6YKMMAMYG",
  "key34": "2byz8sBs1Hw6wpqybY221Na9X3yW2kNYJsqjCJuaLNdQ7MoTRz4kvznbq6NAtKGqtT6FLrgCCW8WhqpxnekMM63X",
  "key35": "321ENvDd79YZ1NiBaGMQspgMgwnus9oMT3Km19UUNZH25Tk9NLZyGx8wYtnst3i3U2Uv73GNmCYjv5s6F4CMyXLL"
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
