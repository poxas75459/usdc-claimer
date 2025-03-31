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
    "5U3yBGewJA12QRdbcuK1XULseVHGMLxJH4wrQptubZmsyzYGVJXpqhS3H7sroomhM3FDoWdhSvHVwP5Ud1kvoYxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qtXK8TRswdxuCMU5V84pSoXoU97xzXTpv4GqvD9XtmeDDbTVPJyz28i2sLuPgBVevPNFTd7ogpMYpragw41ezrc",
  "key1": "5Z6XSTwNy7e9zeB8nBquCoPngm9UmbYtCwV77tbSt6xyTVXfKnbSFJyQjdJxjZkQNpnkgpCGBKqCP5TiFtJzHWGB",
  "key2": "4TvfoJVTffm2vky8PHucqBRq2kSUqtn5g9peDTGqgfKVgZwP2oNYBXqWPV4bhHGjiEJYgQ1otjRggrz6HubSUtCF",
  "key3": "5GeJ9Tjg4LEdBP83bfoYCoXrFueWLuhHUpYdLUuv8LUGNXpKsu7An2TayNj64UL7j2QTaPEetsKzPNWexgq3vUwf",
  "key4": "58H9q12aD4rVWPogXegBW2YxTZ6niUP5uSFia9GtccW5JWJ8BmVG6xKqg6etb7N2RvY2MGme5CyPD6t9bK2ThHNH",
  "key5": "47vJ1jRm1df6btk35pGsi99QTstjh1sR94gM4micWGCwaoBWEzGStwuCgYfPhhNjMzmm8kfLg9CFLPRfkRtygBdU",
  "key6": "2sW4qeRtVvRFzmn3Q47yz4BQ3JjEkRyELDLQ6yxtMUf8WJx1QcJfyKdqe9DxYXQkRrHkXcTJKf4Zk8wCMrXEF4Y8",
  "key7": "42oAiwKmnZEJvGshFUHqfW9NffAbP4CmixwASXsoFmCXDQ4Frk8QtXZxVjmj6QWfcHh83zz6fdHrij18ZdPoxEvG",
  "key8": "29dEmcBBGguFknzKHNLt1SeQN3SJLxX3J4BWgmWtyuqZ1vhVf5UrrmfioHZDRX2rrv9R3g1HM6yK7txAF1FmMZJD",
  "key9": "4VkAh1WPnhNj8MNop3zAwWNJvjprJCiHCERRtYmEmFeQwdtdsd6qQoGLdWykh6Q8ASRd7fsbk4ctEotpPeY8heeC",
  "key10": "5WLvVtJeaL7w7aRBdspnsQKNUVkfyurPDt1uCsYWGZAmicpPX4sVbBC9uKRk5Zh2d8JqjCXBpaqyAaWgWHS2yJM6",
  "key11": "4riBvjLU3dPMRqf2YMaMUcSg2SQVDGJZBEf5o2AvvCpSFfXYJsAEr1rmGJMf8NZy7qtosUBRJXdT6xQqGj6UdW72",
  "key12": "sQp33rMDDRbxGErML7kV8pnCzrn8K4uCjB4uCoGWCQxeQErPepG9HGGY6LuKKhqamYGoshcLeUsmNvtCdgVhafs",
  "key13": "33ykwXcu8DcTYUN9gMpfpWLSrhniVADwBCH9YLeV4c4z32ooZMoPuMAxKr4JsT5nmv4oBvptmDBppzFn3Qc9wM5S",
  "key14": "3eTJ9M1skaiLuW9QnLySrmuzQKSeUK7XCiQXnjoWCb6WqY8qH8igiDAievo6FUBHRHrzMNMu8wMvXdSMGMXDsMsh",
  "key15": "3rTjggHKYKZ8HL4nKnpfvPRJj8pi1eN2aAJXAhW7fSxTFemdzUP3HP1vEPe1oqQbWdKpiahno1HNMFrKNAS83N5p",
  "key16": "N22Lyn9DN9iKuxYWfBkyRx4ZPZWEUP8Vcifp5vXMVY4sE2snmNPpgW1pLNsAX8JgJPi9Cqx9QYHJY3g3zskS2VX",
  "key17": "3VoQFRupGd8b8oRVsAZ3JKzhBrgw3iT5oxexdcXNTFmCz4e5RtjRanfJ5WV9TKbS4LN965CavYJ9YeTn4ZztoFdj",
  "key18": "3UH9EN8cABmNnYb2XLQzvmMtiSKbwF7E669hFAm4zo2CgEQgisZs4F8KxUPS1vKW9J7R6hjKmhcskAnUix1w43CE",
  "key19": "3Zv8DRqXCXhqC6PtVJrwvqucB6SYhdoNda4TQ4HWWfmwQQwvwyDDmF6YbWqdoVJiXKJ5b8t3KvRRQQMHtvkQHVN4",
  "key20": "5apsLST4nH54bzU7TPuwypyJbb1i1utTejvtSWatCem4MtWhBQagf2mXFQGtPdxih1eGcV6fQKYMugWMgqeVgf1c",
  "key21": "5VV2us4BTKXTedq2vtK8EMaY77GNaSTZjC5yRCSL4sjycUk3t2iMEgSu5mqeJUrg3Wtk32p3Eikqn5eRFJdsj1UD",
  "key22": "Bt3T9bmTZHYhfn22EG1ThcVBbAbkbBVFkGGrxrKq6a78ePDsvx3WRtDEk5k9XhzBUFdw6m49GdWcpLAw4pGeRzx",
  "key23": "2BzghtjxzeRf8sR74s6z1HHpyt5cFaoxVY8ATXfdGUmDMuVFWaWbRYCgKgLSveZ8qDaCb4i671ZbNdmZepLotReU",
  "key24": "2tcMF2ervNUwjpiyumiP9FFDPdXUfaEZmUWroNNMdswGGSGNNL3zEmYrrmz1DpBke1WgGubGYcAXCw6z353hbgk1",
  "key25": "63TUpT93Jr9As3LgwHZFsmw3Hq84Y2mL2HenFdhZFvpYtpFtDitddP9qJeHCyA5qnC1k3C1YrmNaV7qKYD1sLQjX",
  "key26": "5hHTNKcjcZh41zMM3k7QkYBuRr1bH349i7B64SpDbkVZ2G1doevhqEbdLHY1HLrXWUX35dZAXh5rRY1oSxSQH1TQ",
  "key27": "5sogAy5psguwuHaPcNDNhAmCAnyfh9tLcxvy2KZXPrThNqWHaeLAdjrAC2w8UgQyBFBBfviF75odTM9mgDftcnVc",
  "key28": "2wSocrD3SosSLwdoKKBREHdupT5bRpfzPwNZfSUq9P2ghX2tAWv33KyVzwvFuqxN5CLsCQxaub59ZdjXZoKc8etA",
  "key29": "2GjLYhwSgQjmm5WEwieMSLQTLjgSmiippVhtuK4FnBeJ8Wc8HJffEebBKhUKxk6xUfeehRyUG8TjfhrYnnLHhdQ2",
  "key30": "3zxwZKqrLkWEd2QM2yFfQcXsyiAdf2SgT1rB7UvZkBvP522q1SD7hQQ895puw9DC51CCyiHtSsoswUUScRUAoChv",
  "key31": "3MRCtrs71xvd3WqM7qaztYL7AGtMAGdERNXRxQBAFrw4LQxwD5JojnsB7X7wF2NHRwJSNZjoXoJXjWHDWpD4VyLz",
  "key32": "5DVGAoZnP5h2HeUJ5JMfnbAaQJKnn3H4LMB7riwiLMZcRQqUUzgVYSiZazcG2FQNPuav4W5md9WyG4TCzWL4D3cM",
  "key33": "2apKZPzxMeD9tHEkfXQLRoo97bBv8AFGP9mUhVBWH6zkUQA3SRbTwUetWMzP16NWtitTKPdNgbVpoAFsq4LkYVhJ",
  "key34": "5HUgRk2mwXyNhRjG5Xh2ZdChqmaKFdhmmbCREnEBs1kqox4vrdPmEkRsXNuKc3C9Eo4rGQPSvzQHdxE42pg2Aeyn",
  "key35": "5MV8btdUXkH8S3VjhcB25ggev4dkGckHogBGjsZAdhwoPfQs8341MbR9Z4JA9EcgpmznUPhKiarX32uHycDMjnUg",
  "key36": "5BjxcR7CK4bCYDgqVZh4L8GVsmUQWM3MjNtpMTeYMhjdzCUMJbuVVRpudK9MAmdfNZZoyEoAUDAHtZkFC553TYxJ",
  "key37": "H6aCJZ2RB5j29ew4FxSvf9G4FeTTKfxXyHBQL68A6t8L8Sqq1Jri8gGpLVf5aqHpCM3dxfirr2F9GQ6Aa1JFZw1",
  "key38": "49tGoxKmpKFcWRpyHnRPbihQHRco4SLwVYv8Q8aJycJzzzRBuZVptMjTEDfgXSER8HN3TRCiqu1N6oEHC6TeiD8a",
  "key39": "5LCKuJDJbDJHpPFn5phzKX3pPK32zcWfKcFEh7yxQA7cNywNs3hhjC3VGMiEYRZf5ZZByTVT1RPFtvp4tyhktiBQ",
  "key40": "3wunueC3ZHJ9GyzUXLSTMwJ7mUc9kEMexKwSPUJT8fhHXgt9bbHqndX3fDhcBchXmUWc2amArVQHs6s2Y3Hezsn1",
  "key41": "2kLdNMZJXPdUJRciiwhHDFsaGm1YWZvFSZfRo4JdurvQHWidcZgJGH4e47HQFke8PgaHEqXaM15ohCAzycr5ffpz",
  "key42": "5N7Ef1mPvFB5HCWno4y3BKmBkUerfAi9BJRttE8dPSzHXws2Dg6go7v7ZoVmZ4rKhtqsR3cJ3rwCZssBbEPLhptJ",
  "key43": "2aAhwdRzh6yCY1F2EUwwjTpKda7h6W3yGoar132Cv51chDacBntCn1ZZWdhzNZaMkpW8CEbd62kKYhWLpGaDJCwo",
  "key44": "2RTrhBvRcYFpHtDhLGwV7HMwJ2ZiL12ohFErX63qF1EdjizbLwq4XUw19SCpaDLJykFAuesopKKKFYfY6GE4opx3",
  "key45": "44m48dBGrUjiV22HjHuoKM1LvzfApCW2x86ZH35CZXv5hqJ8BYSyYcJkfnqHDuVugi3ZvT4vNFEyyDYDUhbZae9C"
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
