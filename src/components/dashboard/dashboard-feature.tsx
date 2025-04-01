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
    "5asbwWbdXcA2vADkR4FeYvLDsAFG4CsdLaW7nw6pjxwtGyP1zKj5JuWnUueEv8JEWXdBQSBkCS9eEfqKEq6W9zM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E7CetQXg1sytVU7rSY3XBFWNbfwSHExCVxQBrjaQjXZsmLfBwtvstfAYLyEAjMBUhKW9U5mWyyqSQU3FXgrSfRD",
  "key1": "4FL6NeXERLX5oo1wgGYLCWq5X6a893oDmthvyzvaJ9CFdQDqVinPtvmiMKekqV4zyfGgSPUFJS1MvY5fjRwkv3u",
  "key2": "63aoLyjJtFfhUWupPYaM7Kn1dpvMaSTd9vUnjgSq2sH4AFnZrEjTwjmf79UMX3GY41mj1qABajxiuRWCvw5RWQe7",
  "key3": "3HvzyvQ7a2xzwZoDQ3PAH896dyV2hGv6DE8oPv1uisftSt3WMyfnGYQYXaGGsomK7fjLo6Uy2PVPvznJyMDwvWZc",
  "key4": "3v198rJDBggAt2EfFXktjXEzDRiJtGP7BoBESZYcagWA4d9rY9vmNAxjDJjNzjhDcUbckTosqZoJsJGcabQFW2tD",
  "key5": "28LFPE52f4Vr9KDLee5smQHQe9Sgc5zRxmjPaBPPtuxBCfvoDmtK13YLPcy6YfamZtaXbPE216nyaiNUVZs3DpjY",
  "key6": "4cfRyY6rUKushxMhfBvBzQn42VLxzDPubfncp1KmxpPfvjcwfzjQwrvgshYhXZpjiwCa1xNzCzC3bHQt3JkQw6gZ",
  "key7": "5j13TXaakBVume7Y4pMbVBKkWZ8YejuXa85xr2gDhk6Pbdy3DcrPpstPxfW3314kFTP6UdXwLfvQ5ApegdPW6xup",
  "key8": "mHb3AYzz24HSGywV3PqUyJVDQiWY7Lhu5So9JX63fjtmcWdQTG48JwdrygThui1HCDd4f2Lck78SbftqJsyHWZQ",
  "key9": "23wsLyeZQTrMfCbVA4nG1LkwKm2NFd4xQ489Ef3QWvoGfKWKLWqp1RFFh6hdQmQNPhBjmcSyBbKZ4rzMLcFj74hu",
  "key10": "3DWCL2htU9y6Lg9kiGspXsn6m6zQsSJuNXCzx6FY2SzdK7T9pySGfrsvduzBz5E8P9o6gRwenWPgn9N2SgdFSNJ8",
  "key11": "3jG85btPmmhRpJmEMfLkQritQFU64BoaSXVrrzJZTz4uWig42pHsHuzVWkDBTALfSnXcofp6ZAg5HdekRYpJQ9fZ",
  "key12": "5zrDQckfXZDPEQo1oyj2a5eo9bhxguWvKt2UgqM8bq19XXGhRwsLdwDNfqaK1bpD3nHQ5JosARLGACAFtyDvfghL",
  "key13": "4ghuwhvfhuPAreUnmg97Br7MoKFeoX1EzA1DckZtA7NRQuE12VxQVPxiJC7ZENnjHYgfmXyvBLXNwBxW4iC2v8QA",
  "key14": "4NTZvfGCDCDYp4ZFZF4Rxk5ewECfeDEiKvnECnEgqgTv3iFREVxYZqJ81YNa6B2ZkDQehd3ACCu9vsxP6km4QCBL",
  "key15": "4XsXraiD2J4CrnwDAzRUY2EirDxQYDLQ1AaPPoniFE6B91xdHCRB941UScp4dnDWArBFRLp3EaCku4rwYeAeWJsd",
  "key16": "5zF6ehWNGQ8hS9RABZCcmFLQd9KfYuEgTfhU25jWhdbhRopkxWw4Zxa5PhfBhYKMqKENoFZTPsMhSXuzPaJxuzU2",
  "key17": "4EgwY5irqSMRLCkWY2K2CnyoRiDvMDYbh7qjc5STXw85xyDjzgXdhNBdB3ph8JpnPMfewTQtU1iEmsW1tf6x5f4a",
  "key18": "3f8Ukmrf43sShJKyGjjoigdzZw3tY3jYWxHZ5Ba3cukB4jRqmLH8LpX866wZ6dcmqwWKAkUde8RqSBRq4JeVkZuP",
  "key19": "auB5DGJbEFHbWdKoeb1JmxEVSsGTrRq1adY1gzeoG5ALXYgyk3gjtCJCQZk1hvaBoWQ6dQTmFnZKX7DpgtXBpVw",
  "key20": "LWfbXRFdRDR2ooXRyg5PrqNTh67WycfqBaBo8X2byDM7oTBYeiRdpz5C49NtRtQZrYUFKFyEEEiK1yNpLtWMGDm",
  "key21": "4UN8of86hkpAkEiFZn15RbnyVW13sT8hSwPYmt9RdGhFBoPND4Ng2wzSRRAeMkGkKNGczmAAXpC41QoUmEuhsm55",
  "key22": "3GTiNreqT2k7BsaaP7gWZ5Z8t7hdYeUwMfxqjxA7qLjXpkokHRSCyjowT5ig5YkzJ46WqroVZ8p6tfxcoJZ3vKSb",
  "key23": "7aHw9PDRxjQixFPVPff2J5mg7X6LqSUTrSfaLXuT9MAy7b9mkobtdPkHa9Wj62BBmhUx6PPxTL4S1BNevurpDTG",
  "key24": "4E59kFrcgX8Maxx7uKgDm1xnUfPwibEJxUJCa8ckz8QS4oQRxCRseSuVpWkxHts57pctQYUMfVL7ba4CebtZoMb3",
  "key25": "2SxSUqRkQZxWZiGfZ5bXNTUzxJmbbZfvEek9s4MidtJh9KNKewDcAKSgdC7KtdVmRbLUcYEpCLcwFzCQnKRNuDBJ",
  "key26": "3zyhtRAv1FnajzcUAwp4m2MJMT6DHGZ1wQsZyXF1tPBYf2dj64rysL74brybvbQSb8qcEA5HNczT1QZvgK9W1EBh",
  "key27": "5qE9U7Q645EtK8g1cbp8AMe9uoqiREk4Diuggvc6YePVHKKnLQvFo9d31xtmJ9pxQzPwxGqR8pGniPWzM5ikyRK8",
  "key28": "vjN4ps2MLSC7UtkGeCvaKFSZeuUDjzqQ9GGvCM5wkbnFVx2ANVxnuyextkzJZ5rKjb8TVNzGQVbambcTiGs4FPu",
  "key29": "3EbbwDak75WRV1tPEShNw3rwLteo3QrQhF3cGqzFrDiFwGcnvc24cXsA7eGij4GJMDXxDQFa7rPoawDsbG5RrrzP",
  "key30": "kUczSc3YFf3AtwnWLtAR4eCocpSq5MTiRgZmZgcoqKzofvr8X1EqCSYCW3MLA2dST3RhUAPPbcgV9sdbrbZyb6X",
  "key31": "25U2XfBbxmJJtjVe9rRv2ThUn3D7d6vP5sJd2vC2as9euHaoMQjTGeQS8hrYSBttRasN5PPwFDwtSPkW6FZYRBBs",
  "key32": "4PhfQBVeXGP6ZG89LZidiaMgEyNUS1E9fL3wkLa6PhUigLEe13xJsAgVWpYeqDgjAgBki51MvEPqCrtqjPyAE7r1",
  "key33": "2hTqrS6Ra5iUGwbAuajB6mt75f6dmMJqivb8Qh77XcmXvw9wZtAdc97YhBCZ7NA4jp3zmMYuVpfcH65ZDMGT9kPJ",
  "key34": "yLem4nxhrj79hsSMx2PW5WPmpU8aW1nSubT8QCG3c3VZ3L7nLBjiLozb1hfWPDZUZhGVn5XjBgFPog7XyrjHT4K",
  "key35": "3xmaCexL7VBQex9G7ZbK6Hs7uBmWp9PanvY2GdA8LJJoVyysQZPv8kL9gD24TJcjfcfPejJPPbweg5fnL6ALYTH2",
  "key36": "5FX5gS7Cqz89CXVGwZ77H4qpVBeDSUMqPWwanLLXWHesAKjmun5XvBNTNtp53KYnTxYeyxfn135YCRMdSeuXpGbK",
  "key37": "31CEpZ5zk2xVMM3yW2e5qufC8pByh92b3HgiJhJdnfF8iUeKFfGS8oesCh3h8ktBj4VVoUCQHD4agtKTmzXhdNLY",
  "key38": "2wx8sPxdCrJnj3NznYKKrot3RqgYcCPCsXCRPgKD1iKocSes8E5fiKVM5RH8R1GYvB1XadndrQSMLJ9Ar4piB8G5",
  "key39": "42JmvHvShTQ2f8Hm3Qhvyx5beWy711KMDXGr33h8mX6TCtHPzZHJYfmogUrr2rALNzTihwVeTK1zuaVLEhJBSVzA",
  "key40": "2NGSobTh5d8n6aMvtAkoRKKGXPVYY6NXJbL9d6ucBLimbqixyHAmB6r9iTBcYke3skgi2TY75hvdfuSAZPAQQiHY",
  "key41": "5YReEVXG4SLvg1YGh6iX2fP5ZkCRNVzV643N3cnbzJoGWxiURexHExrTGcpqkKPFpCHM6No8P4tAMVnqsfuuSukm",
  "key42": "4f51h7bEjNn7G1aT5bD62qJbUmRimoQDpyRUA4egRnAkWXDWqK5uEFH6dn6JWwrxA59mjKwQf323Jhz5DkBJPpce",
  "key43": "3Mw2REM61DsPikNwWwnpdVJmTLNN67UwrPmDPC89nws8t7Y7ThD8D54RJL3vu1wk98WrkceYTrvq8aqBvMi2ErLP",
  "key44": "5rk9S8aZGiRNd9vubSnzaqFd1WoZaa3dzGZaAWw1RJL4z1Ppe7fkYxUd3DwvGoWypewqRFk2ycY1pyFgUsa4Jzv2",
  "key45": "3xfusvDzpyPQQgMs9abxQKyTS6MpdpCpMRfKk8DCN8B4rfKu9Jxw2ETVd5YptqiccSLeu3LGaW9EuuD8MGaLvbSX"
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
