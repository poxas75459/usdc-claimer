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
    "rbRd2jUVE2JPyko8XtvSgVGJ4YrA15SJhyVWT1F6st7YjNcPA4ENoeunDS99cEJiGchjNec11omp2tarMoaSU2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sMYtqxgG3gKvYJ4JUUzB3W6oHsrWAorVgdPnp3gY2yKE1Uw4V1sb4KG66w5LZGHugumTBiTa6wgMJ9AerVtx14T",
  "key1": "hRNN43ZSE96ZX7qHHGRrFz8sFJf9u8xwLkv6APFyxZjiNMmwha6iq1fGB4uRiv584DesMrY49YuQVcAaaojox2d",
  "key2": "YnzwEM38jedd6dd6hJ1woHvMQQqYz8cR6AesMxYp9zuBF6oZZyeHQ9AKbsK4KnVeUT7L5D4rysZaFDBdu5ixJ7S",
  "key3": "5PnFuFdRBM599BrzGkwLTCDYb8U67SzriVdTMp8ECyHUBU16g868v5TCfnbpsPNmT6JHYRAG5BxmPeJq2fP3u3WK",
  "key4": "2CKYLvWxEKg1U6tpBH1asrtaYYg32beuKJ9a4izj7JGgdkK9nB6bDKABADv4GHV1xkjt1wXdDDp1gAFPkeqhY3LM",
  "key5": "3cLDYQFKWVv8myi5yZYv2huNCYKnobByMqWPjoc4WxgPCzoXN4r2QKyaZuzALhDF16gpP9pMwjZZXB6BGjZ7iEqd",
  "key6": "52DV2yrUHF6edRKzhhuGu9orU4KLNb7xqUAGeot95wfsjB7Jg8moDgUMoEDE3h1KtyZAT6U22TMTNRxqxJn4hFy",
  "key7": "3dKw4rUk1qnhCTVrG9gzrcX8PcR1SukzwEBwQWamMjnsDhcM42eUP1r7A4mfbr1wRs1rGeiKwGvKgTB4mgVJ9Sdb",
  "key8": "2vuKdMNVnt3YbxFH5cenrbmYw6Xaxk5RxHLgheLZF7S91jJq544aFaTWJ6qbu8CbAPCtoapWeBGNVNLiW2eVqNqn",
  "key9": "4R1eo7XFPGAPQnRoeYczE4JPu2GNVSyzTr3EtAjhSkJBKrWcVf7bGaQgrgvYccMVrGDfaUKohD2LZoE7A2p31uRE",
  "key10": "5rNRQdiY3dr4L3rFMYrEAWuQQEKB4ECoDscz4ps9oVDGodLUqdarLWxeSTAqDPEpr1ZLLKcW6civ2PAuvEAu4VCy",
  "key11": "64gUPsu674XNzYNWM3YKJ3HbEbyerKCQw9u4DbZ3wY5RZUWRcchQtY6mcK8XBeQALZG4ZJ4SLRRVhVhq9JXFv15N",
  "key12": "2xKCHiBo5ySHNGSqXmMRgHZu8FREzYFLbgyaTzzLPQvcN8n52KXRHnXrKYJJbP5d2FEXywzRxuKvq9RXqRRQpFAH",
  "key13": "4VBRipM6vmVhRNzQXs3H2ybqwXQmBNyBoCAr13ggvwD2KmRjfyT4BDkD5wXvq9W9cRJojSv72qTLjDrW1Z4oqSiB",
  "key14": "4RDgY77UwCY94CMRqCewJez89RRVusFAvJaWwMHJWiyADuRRYvBmYRHf6jswwsbib9GfQgJue81cZUg7fZm9aamB",
  "key15": "3tRh7bzzJL5Dy4KQPxALNhmeza9NpmS3gfApiLy9npMLgPUVeqpHQ1rn37RfxT1QZZ73FCi4fZeZfKHUY1Ydf2qf",
  "key16": "2pY9od14WosZg5nEVGcSHB6H1JzLrEjpSLHwicFmbaVD9hU8XKJebSZ5wQaS1tDXUQ8fSCiHh5Wq368hA5StZ8wj",
  "key17": "5emUK64G3JGaU8Vu6WG7e8mZnoXMv1uNaBJU9NFZ7aacdLaCMPZASLGix1LAdLExKctcPaCZ9Wnj6jNM2rQZANik",
  "key18": "6pX3awWrs6PDZ38hGegurwCEy3MzEyYp5v5pGUkHxd4NQPpPN9kM36DkYNJS7qnyurdjnGvknBwiM6rkRaJbxVM",
  "key19": "2gLLhoVXCUcEcEk9tMqXnT5UwgN9NFUXLeWWYn52mpja9Judq8GDGueQYV6VR5FRYmGnQNKfsPw6b1JXUf31PSVe",
  "key20": "4c3dPmFXaXJgwHcAxUi459tJ9G9XeYCCVDYRRmMwvW22f58oy3q1U3iC2Aj1MBu2UTWvaBDX9tzBVGM5v9Y5BrmZ",
  "key21": "5vR1puaSMuysuAFsncrLRVt5z4bnsJBBedhHgT2S8Aba9bizf4wMbURoVATwYMoGQHPXpMe6G5u9xshDLTmXXmcX",
  "key22": "2axxVDxFCnhpk31AvCn7iXYqQo59JVvmGxisopZni62UNmXNofx9CKwRbebjUutULWnFpBVp9QPCCPncs2V1Gds7",
  "key23": "3CppujdokjhgqJzd31r5mchCzQdRNFc3eS5WKboun7Az7GPb7rTDmAfhqwBQLHX5J75fnwpJjZ7TgoyjgXhhjHn1",
  "key24": "UdtzHAERAMtgeD2h7aYsUYvdocKJ9gvN3pzuzwPwJcNtxK8kuX2oC9R4pGb6s4JTFTt64Yt2v6DCQoLQbRDoXBP",
  "key25": "2BQKRdmGQpSzwFzm3hWZKWxtQZkzn118GeGrvgoTaksHMjSfu5roGmdkYXBGnvsJygnmkJw8iYpRBsvSDNgqfner",
  "key26": "4Ran4FkZJzUYgMtkRtKippv7iKRgHCuVvVhpB74xKr1j97m2xkhNGCKziQeRjGaDEWDwCt7o9xssmG6SmeAR7mFz",
  "key27": "4jGkgWq3aJBzMmFJ9ZqhGV1mxwCyKLKcDQjsghdLvRmLFEJ62sd8WRL8McRQ9BmA4pBkzW8C76LgYgYq9PALBUqd",
  "key28": "KgmT1R5v7An1eLst9X8VK5SzzPBgYGyZQxcmwu6xj7CNFoTBt8QxmdtLjx5j3KmmTEC2uXiNAhiZaGbdVUG7ygc",
  "key29": "3RNV5Ms632sQjRyAQg9NfG8jknJT7VctSb6PZr2xQvt5Q9WTbmHBaLqffuRdqxhscAGjrVyR6Z9Biy1cz1Hfj6h3",
  "key30": "3Y3Riit5zf9agAfm7Ae3htmmRyVbeG4FxFMSshtPYxaArcTzwLyMWuDM18oDvujhM73GR3NS3jdw83wPGGGSN5ZR"
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
