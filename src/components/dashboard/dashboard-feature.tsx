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
    "4p873dhQWmbTiApnMja5Jhd52o5Hse5KjG9ThWy5AWhTEfBMJmafFNkTQyNqkoYVTnXzWE8AGModuAXnEfxKtYpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d8ummNvkD669t5q9RRdjPhmFbgyfyxrdAeWtb8i3X5npFG3jJSd5rzafV2zGMuVpL33kMwGNuiAp3eWSeXkSuRy",
  "key1": "2yw8Mgj9NafbP7fBATrY6V1wLTF7y6N76WxHZzExHxBBGaXa7vKqjci5yumtkGARqEete5hYqztHG2y2VMN9gz9K",
  "key2": "5X5cGqtp8Th79jMKvUPFnunEhHnW93iFKpg6fQsS2LAu3h1pERzejXJWcEHvBuZTpX2BydNb9VpnYaUWDqwmEaPf",
  "key3": "4PzrT6GM42Fb4SWe9GJHTA4yJmPbxbogZ3W4yHgRi1aYhwRMq7YGcYTwmqN4nbKkyv1Q33sq6ZZHKNFyYwqdQ1t1",
  "key4": "zgoaR6fX7Z88e9cFeP2SkuTRivgW9G7tJ1bintWtjGz7oVKPKMbK1vShgqcd6UWNUgfbiBfK8bnB5g7yBPBmvi8",
  "key5": "3Zt2dSBJdoCZnHcNMGHbnC2sHm8htvRdrE8xmeDuhaWUZz9ytiZ8WcU2s6ExbwzqDd2H9cBG7A3RE6Qgw4QUbYeb",
  "key6": "3skPYpnizeQVKofW98rRhrhoug7CYG7DCV9N9VUYgqgccjnygsLQRVwSVCv6JWtjLKXUjF1LcqFPMEQLLZjcXV6j",
  "key7": "kN4kz3Fp3WaHMU3dPd7WVugH8YPcEcDLTXrTY88g4QVeBGThN5p2r5wdP5P9e2kT7FacmL1w1CuPWx2hxTC3hR2",
  "key8": "4kts31twAfbQjnpNJ4NPq294sN5GZMagQTiDtgfrkRGLjzsgq6tLN9MSMg2PNzZaeVD2vAA8JTq2UNCmpvQAjcXq",
  "key9": "48jMC1iPPyGJvHyo7RzWrHGkCX3pyuhAY3WBxwGnRzRRCVQycLki8RMwnHMezUJeHwhp9XghN6GE4xVdL93SSMLc",
  "key10": "43HsKZFZLq5B2h1RBmCrp5jCT8pvdeaTaUkbgj66TkkurrhuC8bmAnP6RYGT4FVL8CXCqceDSNfSewyxBA3GtVRd",
  "key11": "3t2iGjUWeSg1fgweaT6JaSDbKPcywHNJtRjUAJxPZsDv1a5GK5Tsyumoz3YQjJh2hgXhqqTozXA1CkcvVdD3ucxq",
  "key12": "5q6ffH5RT8jTY2zUcjsdK2M8teYzh7tGB9nTe82zAkWAU6PAuagDR2Mu5ivq4mqHZTvokDBnVjjJYpkH9mqDvAuV",
  "key13": "3tnMSv8JDaA3SbE6W7VM5pwMBKwARMMauzwBWXLaAbvracxgUAFCD8NMEuKt22nayH9TihVXPdFYcb9n9M6KZ7aG",
  "key14": "5eRMEb3785E7HxuPttVzNjHiuFZuKkLyjYJegDJ4HYbgm21a5yCupH3wTe2VhjzgTQovmSpEzBQq6M9NaTvvdzEU",
  "key15": "4du3XQ5mLyR8evxuGR8c2X58M1RDK7aiW8naEkifdSrr6MTrvM4Nh1EGyHe2FuQWMTPngVpTfWUhEX6gzZYurHGF",
  "key16": "23bwsDUxpSAihaJJDnbXsiyszhhTwRBj5JUGQ2ZaKTjzAaUhww6qBpi8KTpSxfdZL4nXAo3Hs5ko9BvqegdrdPvB",
  "key17": "4MoMkEFiZNXQDA4hPF1HsTBovxLxJgQPCwvmjc44T6mPWA2XYHUbbvKvWZqjeDpWL9pq7THCzcjAryDpdgd4wCaN",
  "key18": "5JRJFRe4TXaXNeuyapKrKSpw1RGEp4xDKYrcsPDRm8jUXRgrBYUFAJgi4zFQJURSzowSBXj79kjdouTqmpoB7tLY",
  "key19": "4NqN88Pa9SVQhgv4mGPTGhcbM94ikhAptivbHcE2VB8usoACmf9z6T8deupMGxai9em1xKiEgvgQxszdWbk3tvCs",
  "key20": "2JDMmRLXxbusfp4WnfKmPesn6aDa1sqwoUdBovMpfNoYpTXetZZhM3cBPR3CoWKsoHG7DxwK1zsonzDojXrP5gSb",
  "key21": "3tWWNpmYysm8RKjuL9DMNiiQiZtwdfNQDjAyK8UHVcQJpkFFacAuQLFo7HPHMnszVVNCWxDCXQVMZbs6tXuGaH9k",
  "key22": "4CAFSVjy7DZiZ8mfcoPan779xgW9TDwwbFMSKJn9LoUuPtTYsGtskTgcSn2ACR7Ate9gihkZeSDhcQgQb9yDh4VC",
  "key23": "5e8QHEz9YHDUj6mdLxbqzonTNx2cV6kZTV4jX5odj8VtHnXi2N1bjvh2BpDTkPLKsFoyHJNTfhX4C8jvfQVHT3sx",
  "key24": "4SNb4HiDVbsBqdpHNA7sC1Q8qTtZ54XF5q2pz56VxwXB3EvtTuqBgPjk9xzqpsUU6iWSi41H1cXiu1DcFCFvxoY9",
  "key25": "4d5y2xUSCTHmNEKYuYrVHraxf6X6scRD3SEyoaKp2pCLp4P12SxPqLsgv6yMz4QeiaETYZJ9CtwMjXAPLmAWJArR",
  "key26": "1c8tWkf7CBLTBn2bsemKhPkARCbrJACK4vnUU44nRSYNHi2MAhGYay1MBnRA61yL9WVFnPo28KZVzA17XNhmz64",
  "key27": "52QjpuiZ2FZYtrL9DqHq3kaUeJDA6fm8dttPPaDNbDSN3FWFjCvLs64CouQDbfjARYFn7R79RfoaQpKb2Er4d7ha",
  "key28": "319rTcuXfkh4Td8htqy1JeJBWiLnAK5t23pMX4gJDGk98ymwj4ujjnVjPqUzKhY8PqGtX7LHxHfVt8QTeyde2fre",
  "key29": "436xuc8FsZWHPuK9V1t1mHG2vLGUEjARpwvrk8c74WwBuK12qo7MZhKpDVGFxR1qNAj2X2KPp3nmdDduDw99idAU",
  "key30": "5jKGWkmtHigAe1AVxf5coUZbZCxohZYq3qburWEdchBWKviaDkHZxR3bHY6C78D8NP3eqgXHLih6HAN1d5WY454Z",
  "key31": "4WK5LbB45JKepv82kpGNGuJzjEfqThgJLAQfQtZngvMT8JwUF6fET96sNtybrtdGCUKNvKy48hMLWtKbpDNSaEJ8",
  "key32": "5nLpheC9RpQ3KWX356YoJWn56teV3qzPKews4wuHM7H8pEBoVmHCLNtjjJ2UafYsgfpMgbYd4ooJwpHKuJEbtgdA",
  "key33": "28xH3dH4mugbh6EcsoKFQk4zdUB8nNM1FmzJghsu8M2ioYYGsNzr2DjQhpvaQMSmxFYBJne9fy2AzZqCZ6fGY4VE",
  "key34": "2fTWBzvaJVkpPNrZmUX9Jb5fkeSmGiqsFe4bME7thyLwuPmzwvVJ9dPMKQ1mRQdzBf57YtZVzgvYz6rYEd9Q6TAz",
  "key35": "4kWjiKKbKFAaaceWcER6mhFfCwprR5oRkkRzYEJusVV2Ek9sbgje1aGTDt9414z721UvwsncJfKYY4tgfCn3sAZb",
  "key36": "gg46nQcHqNrTf8RicnhCPHy5jognN5e5xo9JMzEPBAM6hjXjqf9bpFPMuUNGadhShbzWzivFk8T67WWkYwyGrxp",
  "key37": "2jCSprrxXLLkLFHvjXjaPRSqE3YTfn2cnkdaGhVtpua1vtzrtxpqSBmwdQ41VtJ9dMgtHSdrYUVrpMrfkgYLsgsz",
  "key38": "3RimdjpwbY5gDWzKEtgPAGR6WoY86ASYjmhiQP6KRXtVJGvZ5z1sAgqGtS5f1gSuJe9cdBEUMVX5guuSAZZaxehd",
  "key39": "4Co4bq7Pgvt5bAnBBBubjKpoR6uSmarxgez8ESQ34v7q77yei7uqHUezFVWTmfwa3JdPQbqPZYzHkVxwFCMv8PA3",
  "key40": "r2xUi3B6T2S3VnDVuUMva5S2Sq9g3X9TMmAh8KgC5aTQ7XF4MvW5MX61PaiCdaW8bFqa3fBFUZR74KSS7jfkA5b",
  "key41": "icwfpnjA3tot6S5UhpCnSyNF14DoUf2mn41zxpyLR4E2BA4YSBe8FhERkBZkWNrgEVMis3RGGwKnhiUWu5mtu2u",
  "key42": "2myMNeAVErXhcVZpTihuaMR9zEY1WJw6rFBW1P84WdSzQqJFUm5Q6T163CJpHVo25FxZPVpmPKraEQc8qjXSjvpZ",
  "key43": "q48Pkw5e4KYQJGkQMfS6TaKWybJkDLzfCuCm1bbgRiFEVrdXX5dR8rSwDsYmqfZfXyeWRWc5SnAJrA3ft59VZoR",
  "key44": "efJatDc5eRvDFL4QbbseqJWW1X65uPDbMLu6SSEJT3CeGUhuUyJiqVHugxLEKY3TLEYgEDRmphDtJUKozBqjC8p",
  "key45": "3PhfvJuQ5MHcsWLLvnzztU6RppcNvfNjskw2M6a9jb48EyortB6NLPRvfzrJjaXMncYJpvs129mvtHuJ5RvzCTXj",
  "key46": "27gJgSxdcQs6hQRXGjVsyWiZ6DfsTZqVn9FFdbKByU5AuYYMFx8949Be3WpqQkgjDD7J3E7RcpFaRi3EtHA2BtNC"
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
