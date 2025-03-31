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
    "47R6isJv5PVeWpHvUE1veGu1kTAcS5bM6y6xCt8PQA4XkdkwyJ9UyJeV1zMBty2uQkA9CHcFqz1KRrJFyNARxgNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "127S5gtRxJpi53NdVDEYe4MhrwLVGBCUHsERYMBKLvUhG8bQmozBAq18qZu215UdTR5o99CrUg462XwXREwUpS9s",
  "key1": "5K8S5s6YRxqFHMw962ERX95HTpj7mc4saB1UJXh3ij5AGmuxFG96nCbgc9GMe6baMeBysZAaJCLDWAodFoMtQcA8",
  "key2": "2uRR1dF8oM5aa8RiWZqfPrnTcu2FtnGTnMiwVegcVGVFq5X8yEUbiYFyKqrrzeAwyC4QPeTQjzY5sANmQvzcpAh4",
  "key3": "hznxZWdxQTH2LBFEPnsEjKLf3qtns1FEKaGwJFgMgesHyUbrjjLHs7GrYvyzpKEGbjc8DrvxpL7kWvH8bsmx3e1",
  "key4": "61Vx4KxrdwKEsbvrK5dw4HjiP4bQD6R4aGm8rNWZ7vj6MSsv4ftwru9tBkxAQWNXmDcsgwBe279PGiFNxFJDfyHx",
  "key5": "pyU7xSxycd498YtMLmkho8DzcC8ZVVPKYJX2QKcPMPGRaCfM5DGujaPCTyQcKZVAdBHBKwqLk4tugxJ89U4mkgB",
  "key6": "5dzpfnzH1vtESTVvS1Mo96gDXLMej7m7G68VAMkJS5bPxFmicyHzYAcswpreLBRHNLNf5qfTRJV3sCzbWCNahud4",
  "key7": "3NVNoUX3tRjQapD9K9i49uMkiLLiyMKnrTjqSeWp1kFiLir7wuqWzNveYTSJuQKDQoqTebm9tV9XYZeyqr44DCPM",
  "key8": "4YvLeDtHzrcTsrxeKcEtrgsogqvuhSPc6wbFeRo64RYi1chJD3zN4qg7heuPCmhqamsQ7hDgHVZoysL2ydQMRewc",
  "key9": "3e3De6r9efDYvhiHbu7c1YSi1NNX3dRZouzRk7DQ1nivioT1ob7ZrBsp9wz3z2K9ExwghdtbdchJnYdXjiDnvVUX",
  "key10": "BsWoA4NSXBnuiPfzHNTBc1pybqy76J7aGwuY7z8UjkhP5QuwkzaFgsw6k7aB9TiPahk2J1ahao1tnHteB7Wf7M1",
  "key11": "iFPbWkvi1eFhmCSMcZmGG5cdktdp5XSmhrToZwFvfohBLbrj4EwfdgfZQR2kLTthaFgzFXp7NB2Cbgyqnu1oj7o",
  "key12": "4GCxafZeyqPn2bTEpkwZYQn4QPj7ZPSpstzKsM42FU7Q3pCDuJd3EcgNHKbPNKpjAAqtToPKaAYwUmdAb1pWZcqg",
  "key13": "2gf32D3ZNHJLnZRRxHzSLvXZGVW6nWKKDuBHmJXF3wngQrZXna1T4xoQ85qPjwi8ihUaYGKz7cuyEfJxvnjQ6B3k",
  "key14": "3CZ73h9m3C1fSkweriHjvxDDP8sMuRgtRPySMeePwA3AjbXrZ8ywP49dSZyJWUDyncZ2TviwqAv1LRojmZpmuanb",
  "key15": "3xn9XQdCngjzrkoeMQL1CLmEMF9E2PbwTGVvqo3bayXA1u3NTC2RCFidBW6GBKB4XerV6jsBLu78ibjZcEWQgJGU",
  "key16": "RGxoqKAaXRbYXkYYHAPwUQq2FGCjgCLyENfDmT7MhFpcmtWE1ZokAuKDRw2tuSEYq3KdsvHGFwBqPGXJNU5f8mM",
  "key17": "3VvgJw8v8U8iNQjH5USKX33sJ7GNnA57zUsRkn8cJPb5dkXiYmULqWq7JJ4Z4BSJy2p19BaoF6vWBEBdwNuUBf8t",
  "key18": "4K1BDy7F2KHEGC7zjrJHuWrbHUSZKcfnpcrAeFyMrtzkZgQ1Dty9op4wS9mnDSqsKSni4AcnLJWurtydawLFmsLd",
  "key19": "232ccGuxsdqUJVrBxYrmXG8TwiuE54Pim2Ks1LLmjt5ickxcsG7eNSWBDtAosgLJjdzsMfcKzYG3XTmhcLhzBFaT",
  "key20": "3GrfNFUupv9SoRB8aLnytQJHxXRoVc5ZyAu9VVHxVQppDKvdskJxEUzDmkzSKjbFzEAhZfkEa8j3h4vqyYYbmzz6",
  "key21": "5uPwV5gF1mndLHxHHHJqYtuFzVnV2zZh5iqt3bC1zaZSWEtNHSKEQ5kZRFzdYszogZwnQ5YVhnHEbwz8hxrLj9Xr",
  "key22": "42YtGES4sBuCwsoyShP2D57w4VqcSUQ2C4Lzg86dHdQeSacPHSJyUmqKNGKjuRLRB4w8mrxRyfgD1hzvsJP9iGLi",
  "key23": "2cmBserA5Q6wckWBdapmzAbN9CM8g7FU4k5swGWggL6gj41MuFcyHVCNYoRFw1ZcnMsyHi3x4DcUrpPgRAukqZyw",
  "key24": "2PZYeviUwg8ZdyCgURkE5xTVuSyGDWY39AvgfMha2ki2hq38pgZdVCmZbmvonybpRx6vqGfuKHKLocTfcy6fUf7Z",
  "key25": "3CnevmaoZtzXaPwoqEWBQhoGZRaAfdkr3BxHg9SPqCGiUyjahDgHmrW1ooTCPZqweHwoAtHi39Ja8T54Pj49h1my",
  "key26": "nMUSPpsScS3qK5LcyiT2L1VvfJ4YBhQX9asoenKQ4DZib5h2iHzFjvqaPapsM33HHxsjeMePEr7DPrFyiucHvyF",
  "key27": "2sHFadm47wFtxHAjxq6hU5RoQL3fN3PX7c4eA28c9kTkTAMvU2zwMLp8cSQXNJnJffUXiYvoHGue8yWqF9sRAnk1",
  "key28": "5isw4gcjcwiWuXVFiCuDfHhovPouxYaEZV4egTXtWG2AYztiXMwxBHyrreSCW9c92iHZvfyTjD7qBquZQM4c7XNy",
  "key29": "25cvPoQMosG31stWq9gDx2ND37XVh6VKBt32JLTXrfiWuQY3MCX2ZFoJkPtTmVmWwbiLEFe8zPvzDxi544jjQgSn",
  "key30": "D5WMTGrFEYXo4cUAeX3fsFGM46myeHZNzpriHHaWdxPG2FoTYytjfKSf1gwM17dy7CgDMvZVR6RCRD4WHPncUfy",
  "key31": "5NHxXuxu2YNmmTgLVj4JVYNbHdRfwq9vy5kpCF3yr9u58X8JDzRSD3Fm45N1CK1yCKbRVt8mB9j3gV46JQujdmDU",
  "key32": "BafeW1MWFLDc5EYTUQtZPtzoVD4sZXzUz5oCjCM2K4K63RNvUAHvUpiCr5oMQVk1G4vqRW1XjsbdoR2ck9brCS6",
  "key33": "4emrP64iNKoDL4NAiCzzBASBbxtkLvuBUURT1tZBeWAp7o5qkKmoYRNKNd3jn5QhGiDYzRyc7gzX9V1KzSDHMLGD",
  "key34": "5UgiY3ArtoC8jKLKyYkAMhJycM4qZCfta83BLVxTmBQpedJ7MEaqrpMpenRPMWCmWsYADR3kEbAFW4xjmPrtR1kV",
  "key35": "4f3U5FwQFBWD154Xxc7ee69EBHrLPApGT2mepFNhkEgqgP3HN8LUvWrcFK8Laa4fGkTuzVMkmpUaJiZXRgYZdJC7",
  "key36": "2MN1m3zywr7FcVSHFE8MYKpfZeBLd3jioHi4pdrw6m9uwB5WgHaop6m1G7q4PVjFx4LiAjc7xoWtRSoJYGifKBAw",
  "key37": "3jF57bd5PzDC6WBoNoFTjnByaNpUoUYUE1WALyemK5oZyCpPu9g2a6btxEFkaVQSXPQYYYY8m5MAL2JbmMri9CmJ",
  "key38": "5FK6uG1GSGrAPMdZJGcAE9pGp57kQy564axJvT6r6KKookzd8kpNHEGsyRtfTcmWGBTaPyx7fUXV5q94nWnhbC3x",
  "key39": "9HAf2XCbKra2w9n8oroWe9ANd2TU4oFnMH8rSiZ2sbqU32F1xopuBgMBrgmBNFXxgS8srpHdHRRJcpCn5opjNqk",
  "key40": "4Jn9zbGFp15utUCZem4pCfVQ4UfJQWsuBVu9H9EyXB726NhdyDLC4JBsTz3TUbHeNkch2vhbqNUeA9fPbpLDt5AT",
  "key41": "3tAtoJfFmfzLDUtdX1qwXMUodx62UKm3K9piwyvQw3VkUUDGYA49kqL5TeWbaMRqsVYnydzvacEZg7C2dSKBMJaT",
  "key42": "5tWHAAKSmRLBnYg6wEPCBwCB8jxZZzzXPvxQYkSYLrjYjQ2W26AcBvPyKxHhgPkLu3NwNkLLJmW3CnuMzY7xqPD9",
  "key43": "bU5QXfcshymGbqU7aJfKdrTQNhcCwt9W2X7VNZXMXwjHB8gt28NN9LKAqMdbsdMEDmuHiWPVCRP5QchqDXfWsJw",
  "key44": "57Ct9KEQpzE4p7MRJhMZf6TUkGgvnBta1rs9J3qMZEfe18iPDFgu3HGwgU4KEvAdTsViuZNozhKDTHNTM3rbu39M",
  "key45": "2HkaTcGJNDcWE8c6g8hNhH49foh3KemNX6j9yRG3a3P5AFGzgWquejjdPMj2tc2nDiEroGfpoJUVf9pyBdV1qk8M"
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
