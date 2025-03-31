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
    "21cFDdZosxaAqRuMRYM7DByS4wjZogZwGmntNpbzkHsBd96aRzkGVtJ2TdpfiQNohzgf3StjS2mzYfBFpRrv73Kv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RufBwopcPjmAkcte6qdczAtxztdnSB4ok1bHT652qFqEAP5feJAxG7f7MBrvsLcsAwb8aL46VmmNmRWLMdRzZkS",
  "key1": "2CGgXuv2v4ScA47HH8eeUN5udy78H8DK6Rj4c8tTo3tdBnVczy7VqbG4skzGd7MvLGncL1sa7yveC2wbEPx6Rrzb",
  "key2": "5dZUL196Yqmfi4JERbjYBZaeKTggh3STaR2v9XjA3UcPggeUPXfm1kBRjz8coteTbtYoN8RA4crDj4ZYvp6ZjmFi",
  "key3": "26W9SUKK7taL9QzQjydWnKSSezK1twfTBvNgxJ2DWsTspY7LjA55cjt4Mnu9ni482PaYu7GSxekCgAMGJ57PUwR8",
  "key4": "2fXvZdSHbawr3a7XLcCX8xhGtzxwNcUAmAb4wRg1BoozP8CDcJj5LpbmjNG5jszbKehFyuiShL6PttkjiBZJYJB2",
  "key5": "4VuAfDRXCF7mUT7KZ8ngKYXtUVJBk4bCavLHWiAKwD3BYgYfT9p3SeR4uRdogUmmEpj7Q7LuRtD3danW6oaQodg2",
  "key6": "Nf1JsJbwYVz1wW4bQwJn4R6Y273F7UxadzijomF6JvtD8UyLvTT1UyiCXRAtejsdxLnixEnsPBYc5oUjBmYvgXc",
  "key7": "37VzCcC1Jas3jhNrnWfbnWV4u544g1EBKZF7ci7bT3qba5a92t2S7qWULnN7RbCdD4dsaiH3hLV2KrNuPAvSBsm",
  "key8": "2CGaLEGdZQ5FnaKyyRe8orMBTADaasvtKboAysxqm8Z9tZjVKSGGox4n72ZSzRTRyXDozSjwnxyoFcdA1RrrHVLQ",
  "key9": "3tbctPrygPn2k4HzUv9PTxzxYvp85aLt9VDbCFv8j8fZdSxYnp8e2yKvepofpnzEyX5Ghd9ZjVXy8nwoGw4cijru",
  "key10": "4SBpdM8Jo9mAJw1h5nrha6GhUz3oARhkmkKheWVGqEDPnzJruWREe4nLH14Cjdhyry875opHfvms2zbBDCj9tpa7",
  "key11": "59m2Bg7j7ve5iXthSBWHbV3TYxRgvZ1GtXKhWmDWvkAaQCr84ZMUk9xdVB1ytadGaiYyEhXEWzENoaTtZJi8YnCN",
  "key12": "2TtH83N4nXhf8vXvTbHvZfr6bXdNQMADeGYCyXd1DtuNxy7vhcjRNNwpvhiU9dLAAdXxDrswTzQMJoeBVJ3EVreg",
  "key13": "j67uEkKijzMynVopsD8mJsqv4MisEiCe7Ej7JR1XvrDdBX8czZh6MqiR6wTXncemEywLYSKdzFDgDy3nCf1AAaN",
  "key14": "213poZ1nxfMPk8fsHkGKK7fGUCviQ9anjP7sxaJaS7TyPJsdpFtDVUUVU55L9UC4wGgV7kEX4XJHd9cHbturN6Ho",
  "key15": "5mpr1QS5wDr4HYMCAy4BtV2mQXgznDYj8bQ9w1Q7TtMVmoNDQSZBPHDggdgxWtQcj2aWSxYfwnMb7jCMZRkWWMJX",
  "key16": "5jucrNz4g1WgPnb93BXrq9RXWpqCzoBbPfLUjpNsABTenSfzV7EreHjHUJ8PnJNKew9McYKrmUuYeg48Qry7Q5TH",
  "key17": "2zLbRhDaCfVsBmHALe7zvCMzZM6pRPT7xrUsUVqS4ugKLNxcgXaJmiwqoJ8DDAy26CQKH1XKULgpmMmsxh9qb4RL",
  "key18": "5xKz3xf6awMzYzdXbPyzPjYT5XSNHLkDrNr4NoKeZaqUvanFo9sHvgrx63kx7q8W149sZt81zyMb143Q3i7jw6wV",
  "key19": "4og4wTtESBn5RXRUB3cT1nF8PhY1KopEecH1m451WJdQaF4Amvy4tqYNRV9tc6NX2a1K8ook6NV7MoxAX2WCjXtK",
  "key20": "5u6nFXi3VvwLFhUbcjv7j3KXfgpUv9L6tpq1hywRuvDTe5K42N8f5Dq1VLPY2kzKp324inYrs9RPLVv85sRZfFxB",
  "key21": "36QSGx9b2rimLYkt7h2a2t4pux4Kvc1DVbkNci7RAMhgUGcpAigQBoPNeRxKATyeKPfLZt9NFjVpVprTgdLetv5y",
  "key22": "t3FAeGFeMCzb1zysdgzwmcXPTAifMSCeMxAC7MrFXwqVPga3HyZkC7Qi57iWyE5oygiy689LUXbXvGGrPugKRUc",
  "key23": "3UpvdcfEL6PkrH4HDwKmRGgszsuwDCr5b6Dqb972uVUiokt9fay3Y7EcKtzprL779gctX19FwwywGiUqAZ8T7zft",
  "key24": "5uV6x17htyy4HififnDUVAFNvPa6o3sFprWFHTunAtm3KUaieNnaBhV5aBxPpSaWHCqXhxpugsPBmGTPgmDcj8uE",
  "key25": "3YPGZV9ivYUgRqMbvvRHeZj6r4DgbfjwWMiMGaxFedkCGmSHDwCEPQH7ERTyAW1ZxeZPULTrbgYFnvHuyPAovMkL",
  "key26": "25aRn4WPC6hVFafnZH8gVru361GSsnYqe3MkoSoWryynX5Se38yqjc8FDNCWJu6EG3sF2oz4Vr4fijtgQ9qddtGA",
  "key27": "4hisjeMQcR4syh5mkodynyG8TMcbMyPvA1pmRvFjkyMrHKArT277VECdVpi1V6LshtrXJg6Nz9Yc5y38eYdoRb1u",
  "key28": "3wt8B5cdw8SLTfPq7mnS8TB8yYQuG9BHwk1KwBirntTWJuXSpF7sUETJbtssVPy2HKenxSpmNXMou6qTgk13JTPS",
  "key29": "zUKbczxVF28uSDAX7vfm8Up9c5sgEEvrDhKVcHK4HQHVUCquvfAr3eaDzegA6HZPHPAcqHc8M22iP3NeiPS1WRE",
  "key30": "3JknV1NubmhP2hbDvckrE73TCKPp8cHVMABK9sbcBtwn71nJmU1Bzsyns9VirRffLMbWbGumxJKyqemcpSj661VV",
  "key31": "3QLTKhMzCqBs6gumysCyZpmyqaV6t3ej3bzvAFKDf9kHSwB4rT9aW8K1jL3DwvogQfCT2W5TK2BhHoXEW8AftgUt",
  "key32": "45JoYiRykZBjuZpnm9VJ4gK66e6UAKp3vfLk3VCfUyPNG55uKjzD9aQmaWrbdRWpPEcBZ7H8QtXqKyXWr4rEhjc7",
  "key33": "4zhuR1d3N5aMm8XvYpAViyC7kNWdxfjEC9pKVWVRaDVjE3oxaXNDE2hmvH3Tnak3eFK2BdDf4RkKaUWLoK8EY91F",
  "key34": "4cxAphoekRmFbCXR9h48qs1y5QESWv9ZQ2zGzgmHhDcazUJsJ4yz59JQXPQDdyRa2s64JsPoHeaVMJHuPHjJcs9R",
  "key35": "4A2JCs8NiUEVZQ5zZsihYL4zcPv4jVHWLcQsYE5bp774aSAoQNZSDecXB7uWnhbHeHaWyyUPTiyTAGyTzZgid2Bb",
  "key36": "2uZ9jJpewRtwi9N5UCsgUArFzrL49sY9MXvBEL6KnMr4kyg3fP6duBhaUAFN84AFMEwjMwmY4wsTETYU4MUfkY97",
  "key37": "25qEHRQNsJvt2hHdCgRLFBYHmCMdT8CEBi6ABprq7Mbw9fgpQGmGEqfMooYRMDhK4GC8577CJaToWVzX5TVui8E6",
  "key38": "5z1fHgXRp5cCmuGMMNipHysGCAk99Bq2WkCz3guLKfovyfnwKXXi7m46hc4CN53LfyKgF34yM4Zknr69sHsn9ggb",
  "key39": "x8BgiN3dtUU5qDjTAbkCRiZQGF54P7fEZKy2ShqtvXTikzDVFuogy9YR4K4j8o2ZrZD89ijv1y4RBdjmQErbdgN",
  "key40": "5zuC2kiJN6L61E5D1wagYn7tYnUp1VVnhZVgZaZXU5feu3EJnQ6E65namzcubX6WGi8qoZr9pXsS4JarBTfmtqVf",
  "key41": "e5zcGnTUGspU3nq7cq8ZAc9JPb97zsfrssbP7s6pfebstK2RZaCfdDozs1ttn7vVHk272hBe3qK1D7AXmY8L5MK",
  "key42": "24Eqx4NfpBiJDG45Hqjbu7SrDqudNV57Za3R3vL7AfSpztzabHZfkfhzGv9xTqAWzr8MtVZjuzR5MSg179hXhGpY",
  "key43": "5XRQ7kEYcH4zU4SUwzMM5ERhpXZqWtjqSM8oJC9Me3TeTwoW8V1gs3wSPsdvfVpuE9wWdzU6LzAAAptPTGfXxRq2"
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
