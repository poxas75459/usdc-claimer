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
    "5H5xiZyCNu4wWUZGbUPHNLokfaDXfZ3p8dDLxtB9sLWTG7S8fYSnpGM2Q1zdTFSWnjQ57oEsjw7VLdw2hw96iEdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XgzqeyYREToSdPRKmL7mVBmwAQjNwjJWPnbdtBVoFpFtYgoNLPpudKN3zEqQxEyBgtzXUEmhgDNLL95JHsDV3ce",
  "key1": "5Yc3icSFRLY68PaH13pnBQB7Gxu5iQ7PpXJ9rx1EF5R9gECTwrFjgfg955hXSvqSfFBusgShpXYC5bb4CqCgYqtQ",
  "key2": "3uJ6p3pjMHDgHEFGXdbw6hZN3J4MrqWqEYbDsnqwhYPEXyHUarX8YGoYj52hNMamBU8v91QKyTFtGNERkQbGjUc1",
  "key3": "4EReQicENCbACb3tTkY6qt7tGwsKvBMsXc3fiirfackiVSHpgbL4QYQZSejebBGStFmS6zB5S4tTvXWq8F5edoXK",
  "key4": "KMsoPCEGH9eCD56a7VfQc8qqjG6LjggaZFKDJTzXAH6JeY1Z6pNwjsoPNHej7J25Ko5hUZNETeAPPhpzhV96DxH",
  "key5": "4AB7z8yQELy4KPwkhyD3fwrLgyVqEzpBt6mZwu79Fto2Sd7ni3ooxq9PaH8CAjdpmDgfsLJZRM7TpWUDMKijpqx1",
  "key6": "REYGmdKjZhJ6AQUC52zAAa4WkBbSo6QdEBSTzBNRVyAXNPoQzj1ijYnTMdro63wyYpwEMMMG7ssknGJJqmJ9DAQ",
  "key7": "4UdLAKKCHw4v7fborDxPQvhEAJfkzM5Xjjkzjy9pm3qhjGesEup1ASo7sESKQGEnGAwh7uQdSCG3UhW4yNiMycnZ",
  "key8": "4fUSkmUGxCvHKQDnSoNxK6jUdymwCF3jBuZ5z2Ho6mscXaDfi35hC9JZTUtjLeRTKXAzGYDnsPv7mKwh395B7Bq",
  "key9": "5Gi7EngKaxnXEG5rTiCGp8PeBSrYrQ5HNoS469HpfJUtqhc26z3u6qKhvCZ8mYPqLWAVExaWhrmHXhG8dVz34cQ5",
  "key10": "Mh36XZRwqp8ZsecspWwgSkQ6m2mEZZ4ehMAE77jW3K7HbtFNrgwJx8AVk14cQDhwC61Tx2MjbtUdnGiD3tUVEmW",
  "key11": "2mK95roDLWc8LedjLfLmrrX3wXKR71d3KHDmXgMDrxtrJcNgavuaW8RFaRYL9bfnR72eLBHGT5kYGi4KpDkCk8kd",
  "key12": "bC5AxPecoicrLDjshAE1xLp7jwRhKgUFDKZQeJRcKsoyJsj3JcYBpbDbp42WzhZbtni6JDTQkRRUvR9HLsE7DTK",
  "key13": "E7DQ1riygnJoNXi1XSRx7C3r4WpT4qKM6p8KZ2RoehQUM1JZoZkj23JnMPsJacRTtX4cEoDyL7oDNpUo48jWq44",
  "key14": "5kSVbQRagCB1h92SeqcX9wc91YZjTPZEGczR99RpD78vtGJjbKjMs2pKFWxCFDMeU7Tgwi3tQCiucwbQqBT4efGd",
  "key15": "65bEmBozNPCFyocGdw5dqsRHWDHjXkjtX8ZvzxPTqj6FT9VpU7sg3KuZA7XxkZpgo5SYk1Y5ikZeEfVcAwVpW3Q",
  "key16": "33rzhehZBfQ6XLSLvN6tY1rGGVQrmUEPVfWMqvmbsgUYZ77FnXmFmUhsZymB4vH4UP39T9J7bmQHWXVTuwDB9bCK",
  "key17": "4m8cFgLooZh16P2GQPjupeJc8z8kZ5ot6o8TRMazPgdoW6TTFHBDsPEMKMGCAJ8pEWBUQqsNV4pPwfXrfaPNAAUp",
  "key18": "ojEzpms9PjEDxoQ1xy23axjCghvyQENac1Dk5hM5vCA7usnz59xWZwF2yv9VNH17erJJ3C4ARFrG7HYDMHQKzvU",
  "key19": "37PZxjruF2BZnHJcoSQ6PtvxkxtKE2nRmVUJK6U57srtnvRJ8e7gg2WNjHuNqmxFtwc1J135NL5AEdsfxTZr5ENA",
  "key20": "2JnsrP4RDLPFAuu1EgJWpT66dN5SvcvhtdMqxtfUT6dWXyFSVoRZJSuJh2JjGazmXKLKvFCYwx6ntvFPoiEH3tPj",
  "key21": "5vZiZbKQSXTctGWi8jGUnrY5RKSSfcYAEwYvAjmAEeHTsFUAXoFRzq35sZQpEMVbxzaH8pj3WQdrb7WD55eBUBkY",
  "key22": "4rhUqjKuxo6LCrwHCq69zqvaZZuQxW6JMeKnduKbHYGBGEhYbFnk5FZY6ZEbpbCfZFUBvzbNqCR2jv6wHt21EgNs",
  "key23": "4QaEiJrfesYptUNirEo7Tmye64X1Ci846uEsL7zgpFkvEghqJhfhZrcaZ6pTDLrSSTwUsyd7eVT4CKPipYQBdWTP",
  "key24": "4PdcncWBYhEVv2s1hLRAa9eAwqWp3ggKmzm1vTnpuGtPfzZrnHrT8bqFMB6zx6Qa6gmiigeMoqD6AZNSRVd164xm",
  "key25": "5kSNBgehxjEgt1tx7uSRPTNYTAL2kKXDWPhSJT9ZJZgsoqMpCpRurXE3yJ1pqAM67ppvEZFGV5cf1jKVFWSKqU9g",
  "key26": "4oxYKGK4LqHSFkX1L8e5sShmhvDNU8N3W9cH2CiR74XybdKBSRA8gN6NgtxMPdUJopr3VnvRkD1kwgTxu331sc3x",
  "key27": "4N9vG5Ek5nL18PfuciyVPVdYBGmBf84msyCjWXPD7UhrsdKeoQzQ46mXFRMiWbvcM1GmiR4XZ8qQaPYzMHFrr9PA",
  "key28": "2FcBdauVJyeTeZKtGwhssudi8fc9CsnaevWxGcraZEm86DzhaPVFStAbcUyCP7mnLffmdEonXvbghDbMysHUoqqF",
  "key29": "24b5BXCPNUL3hJeRbLgojE9ahkgwPzbGT9R6pxQr9Z2zy3ZBiqQzxn2RWBS9mxWAF6RFZNCBX4VvNoyrWJjfpg19",
  "key30": "3srAv4VdxuyrYdXQgZN52bKwzmk1TUrKdnq3FA5yBAFCBKz7ysdj78goaHoD74MHzKwt2msLig4U1tFLvh8vps7x",
  "key31": "5kh7iibdnB8E1FWxzMibWS7iq2Fc2FYpFdG2hpoD29gVgVeMih6YoND7W6QqqkdwehxazFPhPzmqioFXGjmVyTMT",
  "key32": "59McoFu6m6YS3noq9j6G6ZYa2S5EGYraTPn544UoV5hXfc2pe7Jgd7xk8qV5yNzcaWXCzdzA1UXUxHk2d5hwfF6L",
  "key33": "628LM2oSg3rsmiLjFh6ag41Xm3axJWDbksvQJ8mbCRJZfgoVFYT2bjZzhyiaw2jvM7W5m2iaTwowrZWnnDnn1yYb",
  "key34": "44HFw92dQDfMcHJ4iE9B3JVC8e9AKkZmd9cCebMuXFKmbwcvUk2oLCBNNQJzGwoq9xc3in4E7553KK8WAUKgSD7o",
  "key35": "3EfQhBeHz22sYBuht5b8GwJgyc5rsodt4rto6n6PhWBVcZrFN862t1ufAnHPyGbFCPGuK1q6P42XDiwpWxYKcABj",
  "key36": "2CSy1vrEUxwP2P5SFSKzvu5X2mLVgw7ZUb7W29ebsD6LGfFzYFcpEgL73crWPTR92Msg1BsvUzi3jhBkmsecivBE",
  "key37": "5twat62g9TgfBadNtoGzxcLqcSdLG72SNpQdYt5XFXL3nJhBBqRsESvjYNy4Ms9cioCPDwL9Ei832Er1fkfZjjtU",
  "key38": "eX7oyGXPrvpA9riBFQS1uDXNEzAaoyG4eeCm3zi2dseLAXa5wtr4KCdvYvGVPKFUNJ4tJqK8u1jiAkxwvJ5wiAS",
  "key39": "4Q8Rox9JB3cqFzyyFwi3SPNaeMbJAjWDN3K1dNht3QQZUFaMynMfG4DiMk1z3QxezBz2ra9jEZgx6Ppus1zvCAW8",
  "key40": "2koiTp8sppzBrXjZENR38645eu8h99LJ2Za2ABMuYJ5xBeKbUYohPo3KW3bdd9tW1UBaXc4XzJxmUjR2CytybDEg",
  "key41": "3JxMV6mgGL1XNAWkb4h6UxFKMow2rVVA6BJrL7PNosV6SWd11pCE3ASDJ8RsTudbBRy8fxMsGDdV4UoQDDYFkfhz",
  "key42": "4pAfY29MDbj7YueBba6ovrzHfaMnZh9b5GLv8kur2J6RqejS4YGo1o3RTHtQPtgT4XnX5PaRLETogDq7uFFRKF2a",
  "key43": "3ya2PnkgRKBnFDd1CM37LfwfDCMoNJFxeVNX6dqrd8zo1iSYE4TrSSK2CYZM6vsbVDyW1w6oLggJKw82Euf9ApP1",
  "key44": "3beGWPEyCNvCqEDyX5zk3DUoKaxK96pA2gmFij8LszX9JimhiQkM9LzHPLCHUnbBLrabdzi2BRcvFPA8vqMMh8EW",
  "key45": "5NJb6a1gRLETbsXmHjf8Gct7sqrzXfN9ZkS79wZoRMq4aEiByDS6sYAAiSGKrPWu6HvdXa9mVH2b8cbdUYGkrdaa",
  "key46": "5tbLwY6Kdi8zotbJzkV5Budbk74R4aU9Q1okj6ee9bbBHsvSWp9gxZuXnjMmXiCz9N4zM742kw9o6AA5zpDQdFhh",
  "key47": "366yXa4nrrmdGyG6xnEgcnSMnQBWkL45Bg8r7DmxSawasQTFRJCPipx1tEALS37mZSzrqcwMRuUdrsspQwUKuizx",
  "key48": "oaPSfFGkYkKTUckig53B5ruqAVyYCyaV5DPoyz6PFvhiZ257Z1rXNUgzKyaKEv3EcetcVDcUGACXUGh5LTLmbBF"
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
