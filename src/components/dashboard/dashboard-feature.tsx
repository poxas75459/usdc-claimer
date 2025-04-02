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
    "2wfjaCwdRLvhk2X4jLmPKSNuZk47SoqEcidjQmCNbnZ1uvzdt9Dkx2MEGUjK4E9svzsiFHANoggQyHmvjmpYVShN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eSEBuMYaH5XCjQZ8ZFbYfmJdeeoyAj26dyE3HngFkphMwxLR2pLiGRfigbEPnsuf2hviHdEjCTvCHxmACRf9Bon",
  "key1": "vkp9WdhWcfr8qu6un2oRw17ngkzxonx6yXqA73DSZ9PfirHybtVY2CDdXQPRegFTRr3eM98sGWF8RS26S54RDr4",
  "key2": "5dxZ4TBMMFg3eWhDzRBnnqHtVdTZ412bj8bijnTVf35BVYrJ5U22PWrPHdLFhuYYq5qGeedPfKfWRcAF232zzJwq",
  "key3": "4E3UXX3d1dwPXmgZpw6ZiqoreXB4aBZQuQnpC12aDVHpxiPtSS985R1iVqfL1vK1NxhsgB5vFkHqopyVTFks9NTb",
  "key4": "4oSnFJgxLiHZdVv6bcZPmF53K6sGtKb8dwCVbZjrnU24gZdKfTHMC5dHu4VCDZX83pVg73vjzFe9yY81Nkb6kmha",
  "key5": "2XcKY349w2BSFAvFYbpQ9YVHSFjnhB8JC1AmWffwTte3aSuWDDoS2kAeaspTFT8FQuHNn8LdGDvPssEAywdnuo9A",
  "key6": "61iwN9GZKNkmPKWRBiFBLTBn3pBoHgXhv8BYDoqYFfxazaS5sZj1WPJGmT1BiTgaGpWpJvBDFTHTD99TengrvPCn",
  "key7": "4Z4Dh2CtAKc8cPkiU8QKwtZhLzkRNMfn6J3rUnStYBoXh2g5Ti1uZoEAeq5dHwMYEKvChqBH5BCbW9xsmz6Zo4Br",
  "key8": "CYSv9dPqph7WTVgF4CS1rh3PQn7DFMhZkHuhs8qFNY7cs3u6puJWj7B5Pt1LQReSicN8qUBdMYkB32aGw8di87Z",
  "key9": "2KXhkfw4NFZgSxYqjWMLWxC3Bq6NfuSkXxbAfsgLadChz7P4KvW8A4FAdvuXF86EnzNSgpYTsBxmM9vAwCKoNYmz",
  "key10": "3ugZwQ2pJ2Z8bN2i68nei61jcYgY18jq5ZYHLmKaFQ2S5GJdFRzGHSu3c7tWBUUqRNes2JEeBoppj1G41mDQwJHy",
  "key11": "2NCTTc3WBf98Fr8ujnzPQiPULvbbivTYpW6aCTZkD37mqkou97R9BQa11FQ3kxaiX5E7abjbVZTV2VZLzkVENnjv",
  "key12": "5Dwcd3ku7Ymod51cmvBvezbwBKPyPGyRxFdaH8bshaFt9mGY3xMTzgAsJwTAQsZM9DvvJgdFwgoJiNA37UVnexEy",
  "key13": "5jENxcjCtrRCbbq2nNqDFt46F1r9Rw1tCycC6kL84eqeWe391txpzFdwa74ah9YidiUjLEi6vXdGpKhwbGvhARY1",
  "key14": "4T8JEzcA19LV2NwBb6Ht4Nhx9bwGtGNRgvrS1wEi9sEpWQBWMrcHbsUxEaBtPvfBVEq28kgFJ7JN1Lh4ckMzGgPL",
  "key15": "5348ew161m5F1a4PP3KsqpTfXhVvyh2vdCB8vFkopafTGx5cw8Ligy4gCe2T4VeLMRbpFRDbWoVGLaBQBXYJB1sf",
  "key16": "64xBTpuejwaWfUGbUDKWnz8wXgWZiy71xNC9FqxwhQDrjL2wdAGEJw1NAuVobQPQeW3QbdfotHNQC39VkJNMucYg",
  "key17": "2gPz5DT5KhQwe3FNfAHEXdYVWvk54RH5XRoSN9K6JBufRBh4B8BthZzksBsLEySpmHdsm4MQb3NYxoVXDL3wn2Ki",
  "key18": "32giFDxKFfzMvBWaUCuExkNKnqWw6mJdS2KHzrKDn3GtgkcCXc2QTW45ZRRv8UdK6rHzC7SjNNDFevBh6whE7L4L",
  "key19": "5zbgANQRuv46xS7M1b5hhDbJPYZ2WhxttBTjqDAtsgNfbLU7rCX1zALbLmWmW3X8qM3cPZfQxwRwjAQQi3Mj45Cn",
  "key20": "2rVvn6YYJser5oy8VSCA6q3JMHbcqg5X6CjQ3Zy4rgmEUXzN9QPR73BEgKHRfj9nreFrBLCzvupp7hG7SLxvib9G",
  "key21": "4FMXZ17RkGzQejvWP8c5sXY6fzwokfEox4u3jtQs71iX7GaYC5cNTz9UPT8oioexCa97Y1Kz6TCQwtVLuhpXYDHa",
  "key22": "3DZZzDERBugAK9wkqk8fRu576rMKHRfuFhHpzwTNg9SasWy9u6iLHUeww5sT2aEF9xHJ5QaE3XEvxYC5SVhkU2JQ",
  "key23": "64WBW5LXsdEzF9pzCMoeH4sUFFtMScFmtvH3okgrVBRT3YHD1PzSnNBTafnm74nSQMzkrRaNwh4oa2PP579crHzp",
  "key24": "3E6QtS1e92Fhd3bP5ackGJjhsWaCq3Ho2TsBYgDYjXSBLnW5yMopisqhirv8566oueYvWeYzDzyHAMJNid1wmmXS",
  "key25": "2nVfrnp8uXVqtpGUJE1ceuTCgpvJVbRs2PcL5hvqU2K7C8YVVwPu8hLjZjvint531gzfmaJd8kXP9XroDAmTgNGk",
  "key26": "4Dc1MQEDs4fxCQj7zieXLd2JQegLzHHf9drKbBxK63iKiPXHY6UL5XVX2HDm4SRp6sN3g6h78KrfXJsvZGfpV2L8",
  "key27": "4vB82JAwaAST1rEEM1djD7YxD7UiHMpRsUHxZ6hWASRgVLAeBuAcMJoKeaypz2aPKGcX6zAZxnPbs1Hc2eRTPDxE",
  "key28": "4edbVkHMKZH7SdQxcZqziVPkJjcVRANPzhStMGfzvfLBPqY1oj24zFaZPNFS87Swe2JWSu7X955U9CtKim8ZYZ1D",
  "key29": "5tTGofWVzuq5WRtS85PrLxavzbxfyvsAaQr2AM8jfhkwaYrKoaKbDVeGzUPedgkVHEjPbTb2yGyJK4vajRTGsfxT",
  "key30": "25Tx6dmoHrp2CLVhXjR8d8hk1nCU83ASPU1VDdAEdtxo2AshQvrmyXsemhthkJnB5Lw4qNgcb9RF2RygFNvoYDCE",
  "key31": "8JpnG6MUZGqbmn4oP64v69xkimzUYfid9uqvXmrEJtBCdJamWoXuECscMSvymqZJgWmPvkbCDxV1hvgYkqKvuUA",
  "key32": "66gEQ78LkK5QjFHFhZQqLXPdohvbgqZhRgTW1YwkwkGz8BjaVBWxMRtL3Q4P9zn1RBaoiex7FCtZtwAnsTZNnRrb",
  "key33": "3e7uLnCwJcNUXxWa2XTDLtx62aBSPCwnQN9LuDqMEwoySpSqW9yA9KYcxAMimuf3SfAp2T4cYdkAGLk7jZkATsKR",
  "key34": "5eTyCfmECBZikXBP1pDa3oecjcsS2zd7bgFo9jwp8ZPE7fz4gA8twTfm2Pzw64U2u8NobKWvuC8AAGsAqaD3W9yh",
  "key35": "5bt3C2g6mrKK4QWgdwqvqfxLzdJwwC4RVnuDdjVf6F1R4yeqgsq2jbiX9PWYphcx2PznaCgARPN5qZNhzNyF1MHE",
  "key36": "22Gbz9cNEXQ4UD5hBgWTF3THboXS6QUYnhqnR6tcKxYxhu7kUiMSJfhiHoJUwTH4HWRg32k2mV3HNijqsKykUput",
  "key37": "3vtDML41e5CPEwv1s7D186gfksCodMT7egJ587jXUr495t9iTsCopnzkwZu8tCQbDvSeFgGbM959hohdGfqFqdHK",
  "key38": "2yngn1tkxpRwJiXTgLvyrNfWLVtTrwaAjgB7kAV1LqQogWriJPbwEXbfF2BCor5Xxkf7kBm9zVEPrHHL2uTcmbUJ"
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
