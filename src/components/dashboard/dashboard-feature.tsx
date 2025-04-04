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
    "3PkzNj7EBSKUMsdNwhPvWh87UX7ZbrgAmxzVgiKxDhP5e6o8JQCKEFS7jfwKyarCjmgbUbhhxgfLopBWyyqnBcXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32fw7MtAYuypDnUkhmCLKukm5CFX1VQsWrvfnDpbmW1QyvVxbGhCoMynLRhs5kXmtiq9HxArHdKiqDaPTvUntZPR",
  "key1": "3QvbqKvXRVhM9Spk3ym1PBVGuNzyVMhGpEXdfsDiLdYaqzJXNW33pmbMakcAm7Bdf49ULX9mRmPCzp52x3G623Yz",
  "key2": "4D1vdw7wuJ7eSJ3AEXNsBfQXuCTBmUyhqexYyDg7oT4DBm1iMer5kArsuq5RhXxBJiDKiDVxCAvCszPoVw4h2wbX",
  "key3": "553oGCdYYpVwRo882GmiMYQJdw54eTztnbicyzriJsAYLNvTjXgCPY9i8mMavXbDThf7xhPD2VkUhDeqbCU66wuL",
  "key4": "hTv2yku3WKgXkZDa2MYVTQ2PHb8jTM15WvLdZjoB7Dfoh51b6BESgZYV25eEvvKri8r4yhstVYUYHpWp8v3x3yQ",
  "key5": "whGuBXpXJXo9dQHsBJ1ZWP3yvX97pioBoDDgeiAntspeq3LFt5ec6YheFJf38RNhep7VpS24gwK3kXSCXXCgDEo",
  "key6": "371kUG7ecAUagR39s9PaG4HEqhJdZo9e4WscTrgJuC1tszfkRy8A9yP8x1GPvTzS1569EvD9GyNu1D1UPAspN4AS",
  "key7": "2z8Cq9UuLkThAJNn1BnWNv7ygWtEwsaDSMhm1ZW6Mo46xzUqdKEzANpTEwjLEG9P9WKof26i5YfJQpRWJp4SocXy",
  "key8": "McpDZGyFJ4HmATCfZ45orUJxmzS83G9a2RUedRm2oBgQCMdP2ujmmmowH9RJbV6NWg8ZVyYYyb5pXm5QMa71ZvH",
  "key9": "4CGWPtFj9AX6vaSGtzUmksL4C5y6ZqDJzHA68jisAmNGvfbFNA4XdvNR517Zh9TufofJ4qWKAmCeJzUYzDpjME4w",
  "key10": "4CWp1gQWfc6EFvpMEdpWNPUwBwriGWL9TKwsKD45dkCi27Gx2iPwad5R3CGworGFFicY49JcF7D9E9HA6MHGkHBm",
  "key11": "5wePXV5JYRihPfNcyygK7ByS4hBjSDP667h6bBGZuYGdofxrQKLAMd99rtpLALkg7XgzjtgFowoSvNiPfkneDUwj",
  "key12": "62E1xtLqWPAoKF2qZ9DyWjfNrTigZKoKRikhxfK2dVbfX5KKKqeGPDPKxuEWXpHX6KbyJbHXrYYbBdq64UcMgoJD",
  "key13": "2JHSnDTESuNJ2JKKxVm9y479cEL2DQHjxzejaDrKqdfaLPozdKk4GT2pt61Q1K2nzY5zrvZExQTpTca42UfU2nqk",
  "key14": "Az3qiRcYXSULphMF9Paa3yGPzmQMg7L35RNR65kUjMfwT5WZBuqgcpSu64bX37DdWvx7eyewQyAr24szWHSkDKG",
  "key15": "28D1TCT29yS5moBmGx9EXL8YFfVUEA36jxBS8YVYvTbSTDFmidESSm7WeJw9RjizP4Eh42tNgshNQYdzJ7QJNziL",
  "key16": "3mWSn1DiedYdWsGrZxbRqApmXqv7vT7mu43AP5zHK1fpispRoSz6AzowLzLa2PL8LfYX1BccBSWimSfFtb34R9cs",
  "key17": "9nvNBvYhVCgh4qzCXnfPJLGU5zJdAbud6EFTNTqD1SoVQDXGCNamgUQLmo54xjkXNqRA3VsgrcfTyUeb5gAen9H",
  "key18": "63PEqyXzbQXDk6xotASPdP86kyHqpSzi8t2pTV4bJKssLDguwDWMPAbFYFg5ML7jGmwfmA7FjoEUK2UnWkwG9acF",
  "key19": "4PVY5FfSdRKwyz6jDMz3xnanegpHSJacjgUQmRzbT3VUSkBNkcD4cZddLoo4u4bPsH8Psn28NUgD4DJ3GusPgcBE",
  "key20": "5vPm8edXEpWHbDykak3T7xdnCbBSdiLw18SMUTEDVa6qJDycv5WAzSiRgzCcKnSwRn5V3dg1QdthtkEkxBNUAPuC",
  "key21": "5b4WfDk6tQ9E6owqHVrysHTU4qScqfc4xKUzbMkxwbgpqqDwLfB7FRCewKRpLTtdwqSE4VzWQHSakg487QVj3e5u",
  "key22": "DLXkMCJZq4PRCuwjvo65kovTJbgBYzYgoESanv7449nvDkgAUN7oFnNBS2GB1F7B7dX5QoFjL7o38SzQqZ4jisC",
  "key23": "4yU3cCnSNyrsna4LoyCFF3kfBQRHKRq2Y9dCcafxutZMRJMXEByp4HKBdJnYvQUmY5KfaFpVBnJRzyQDU6Yspk8H",
  "key24": "3BshbKrSoo1ozgWAUGcS93XjQDeczzHWPosixL69n531VCGKcTU5V7uXKVcZDEMDkCdS61DqGanryNvbfFToFqud",
  "key25": "4B7ZExdtSB2EcyY3QYzrCQB5dWaSoLFareJTyKS7ZedKFc4A1R7sGQzscCEQEpgeUVGb4U7H7u6SRuYpg6DSdez5",
  "key26": "3keLzpv5Xstxh89UP23GYf6ANS5v7y3GwxcPfbeb3dnzCs1oJBy66r1mUSsNdUhzaUP4oALjobJDrvJfTheA4dY",
  "key27": "2jbKWKNRM1byAWhTq1PVYs6YRCWzQUXgDibGDeSwWhkYu7vNEVpwJNurjPQo8vQMiyGKpQAriThKXYkYvZWzATMA",
  "key28": "4pU54JuqQraKxUyegMfx9J3eykH3bv9eeeVNvTAQ7pwozrU2CVSiwUBT75ucbb3DQaQctX33neh9K4nV4dRE4tsC",
  "key29": "jogxFT41jsPeJCDnAeuZMyDvGVMzE2EqwhbFuyoUj2N18TtPtferACqKvFYTV4YS4nzmtevVNxoM9jECDtPUKGF",
  "key30": "4tSi9GEbMiByvjc1SbKn6s97cznxDjzwNgNLUwaKFRJQjGYZcEJrTmNcXC7narB54qrAdRouenXKNNd6Jtr2wDxi",
  "key31": "2aSvLPiMx1b8EXE7WSJaxzvj9Ty1He8yDhmvbSm9gM2L53wn5Ay48h8szuL5Y1y8RfJfynoVbqbCZ64NUG9zxjvL",
  "key32": "5F568w1mwbG1EdF23hF6zdVRnAdkMPyQ2Tx8NwXa8CHPvKBppuHpBvcMFRYgFpyBv5UTk68myqxGn6pSydd4RYen",
  "key33": "Wn3mV1EiX74GswBiaktSEHBTxVGpqNGStAf7nNjEeEan2kk2m2XAWLqvqaVfU1dmvgCuEesRhzDq7rP7Kj9AEvX",
  "key34": "3gNFmu92RWK1LccQ8tfdoYNGyofVv6LG75NtjRyXfKkNBbAPPfCWrJGpLiPZDTLaUxWb2saX9Y7pJGayNBVEDxp4",
  "key35": "3hz7Bt32y4ueKGmafKgcDFvH2kNLiUVUJ6MCBvAKsYXvpgEARzkt58jhxhpb5howT948KHM2J9mF2VQM7fTm5QWx",
  "key36": "2FpY6eKZsmM5Za6ae95Xnm2zN97ou3qfGv2C2nwuYFgEqNTda9RwjFPFKpgz2nQdcWoZUhpitnzYsUBu87j8oaSq",
  "key37": "5Ff64AErmq56Sa2P6jnk66jMmRwJhdQZ2zcgX69f8hkKMukp5o3b27bSUBfZCLwhTtK6qgoTYt2kj2HzWTbV5C79",
  "key38": "5t1FfEVMuVmMeQadWHjjNXiBZPv6TcVZoWsed6b7QXBgjny6azGqV4ET2T9gBYvLR3udpHnt6v9FhVnV8SbR1oPJ",
  "key39": "3fSxvrxaZy2ZUrfMHrJWF8WhV8yK5b4j6BvVxoEAo5GbRz8DozED6J1e54rKAXtWYprL5k6ifQsRLmVowkymV2kX",
  "key40": "3e1cwpP4Z2JZYSC47W9VFEAjtnF1FSALduw6gyzvJ5jn4EFQxc2yjJQYfvkFrUiqrcSzmoEi1zby7XrEbyoy4G22",
  "key41": "62oh5kar4KVfawUaUx1vPriDFuFs9durNi5N6qP3Ba9PSZeZeAJ6dYVt4YB7keTxqu2JqkVQFJXwYsYxg9QsDZpa",
  "key42": "5kKGowvdJytg1jkf9BbDEexmgEq2eKTVvMaPb2n3Vyo3NavMCe1qxi4E1jZZo2VuE5t1uQPeQdwy5DfHqEZuhTaZ",
  "key43": "2P1PipmqcT7oLQiETzJcRZPrF7x4TRsbZTtQjd2JqR3QH4hiNHL2F3AVrXn5V2TjMbUktqTnVau9L6oqsd9f3bjA",
  "key44": "67haKZxdZz6jJuNcUfbEiPtKwzxqRxJR1kUyY6gJMXUug9WTAkPiA6bZrsCTzf7V4ZiBwzFx7aUPHeHvdvTJBfcE"
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
