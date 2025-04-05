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
    "rSVFVUP6DfvumEJWfcNsTwQ5U2WsGS8tJg3MT9BKRP3941PSHYq5bYm9ak6RGGvWUkgrpJNwR9nnmZVh5J2Wvew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NjW7R1WFdhUm292ABVB3VPz83j5WqdZ4aHTEgDJHHy4UPpWchzQAfWvcw3qwFiJPp78FgASzvhX6LNSAMWvoXCf",
  "key1": "2G6Q6yGwHVmNAmMkwTw4s5LoeFZ3GzL2rG4gX9v1xe6EaGuUcGPqfpxqJw1CpEo7xV6JQcY4atabhCxaWYMW7KNz",
  "key2": "Yk9An5hQXn6MyLwoMXrRjurpze9NZ67nbpTuebENo4T8eq5dXKptMWouYHnHuPSfL31T38WaHqa2vdwsQ21JQpR",
  "key3": "Xer38Qevq5Er97qHz7ebiTJ3PWCW8mxsXfMXBwy9Vdb96Wr6DGnkLz7zgzu47XZz4mswf1pMuvGt49pJ7M89XcU",
  "key4": "8tzt1QUNsK9teEEGeMK913B9S4tv2ppsKDhKzZnWncTWTj1pzR2ZASmKkZBZgM4ScdkfpN5e5q6HFVBugeoXsFS",
  "key5": "3PA7vp5UfA9mD8QiNFaneozhpjSAw5qBswVNxpNfZgdFc4BrvcQR3JEKQPSAefKiuwzd9E4hJGc1Tn8jyCSrioqM",
  "key6": "34gK5keXepZUMRVGNErQApd3mQGSjU4LbnhgQsfnisteCbGvnTyQE4wWE9TwQLzpWwBwTNQrY5tbnBhQz7k4i7Je",
  "key7": "4ys1XWawKocCXcxzH8YEKrk7dkHN1wsX9kBsdkfxDiDXsM3BJQjm4SjLdbfy33F4AxZEcDKzKFcgukQDXcoQgZrP",
  "key8": "3n4FU5PweSaXy8exEPKFiGJxi4RMALaKVEzY8sg27zFtTDvvvXG2LshXrBrczrwLu1LvFm9otpjQarRxT9s1jRiE",
  "key9": "3Y996GGCie3txBksTH2EG9hRvx3JWyStHDFZgCpzQzN6GRyFv7LxgRKDc65xFg7g44SJPpUDpFeEdKX2g3XpomC9",
  "key10": "5FkkUA9DeyYvDxMvskxdUuD2FCfDvdayZ1MeBe3XpDTuGhVFnou7LxxtrjnfnNbwishnqY2qYzEBnnTKnzM1Jzsb",
  "key11": "65ydCFpmakYGSPT69vJH6pWCTfv8qyUSms5PpfgvoK1AAexvBJDKPqZHz7JXduYgbGMTu3zqZHmrygUpkWRhty29",
  "key12": "jaX7iPRSt7GiF9wfLnhjHkXEJxbUfy5EzPLcjcz1PNaiwL1fznSBvqUxtQMf6SgHJstPoEGjvFKnU7LT2QHtVLN",
  "key13": "5NHVQ6Yg7cFoL3pJSek6qRgwQfqYa9g4VLd4Mj43sDsmKEN6aP5hmSvKNPmbbPW4EyLrVo2Eo3LtzMfKbrY9BNTQ",
  "key14": "41qFUETvBMmnWMJZseHy8gx1xzsjyV4JBFuZJPZePuPLgdZExgxA7bCFsrSftv8A5mJi2E6RG6Rqmw4cFEroRASh",
  "key15": "4HqrZP89LA8PNk3D5anepnA9jP4EUfN25bL8CBprAn2YaU8tKsNy5WviXpksoJGuW1DsUeMwwzXrxoqySaWSuhfZ",
  "key16": "5qx1chVcSim7kGT8briXrnVkgp1GoU8bgXkJmqYo2jazn3vxqCDGeUMHqGBc2nUGcC8v65cySWTCACSATHXZtsqH",
  "key17": "2JL7rpccXFAt7fkCo22No2mgQBYeyZC3XT5Ubt8Hhvfb5kVFKR1RpKU3xxz3mQXu4atbLqMJ6eM8VhifdoYGCEXr",
  "key18": "61RUmF6YYvaYLgvwh9Re9A5tvZNW7KXwTsWU18cZ1yAqkcvHPqZGe1fArDS3aimUnYGRmsJzaCm7APgq7fqk9ScM",
  "key19": "5mxWKqRnsuSTLtyQ28YTLg6s57sf24B8Dp6jz1mxmTVdFqT7iZqBiQD7KqqBU4HZsZiaLiMzxEUPayei1eJPeWPK",
  "key20": "2M3cWqmH2eMBP6nQ9hFrRzHPQUJ7T61WfhsgDvgnvmdXiiPx35F1DBTFjwD3Ffq5QWCX2eGuqJu4qEjfVbWbrPaQ",
  "key21": "3CL7GyhbTf5FBqhH15FmZieB7r65ksXiUbmRx12y2iFvv9CtQu22gZECD3cgpcu5PCDnSKD6MauJs7jk2P2t9z5u",
  "key22": "4zp9sMmQHENXgtnEVU2AKKhftW4VgmguefKn3SwDMd8ywcAwnnSUEddWG3LTR1uqHQx1aENv8dTw4uyYqzyQXUVV",
  "key23": "3M1xJGCAfSy3ETLkdyjCMUz3r6Ufq9RN6sHpoPFtG4rvZaWKd9ZjfeAr8iJYczFS5P4UUAEJiScWo3wZWtYepFrQ",
  "key24": "4jJBU8jqvmEaWnoRgjMfVQjG4GNURMcTR577E8AW4p59SX55gGGbacSx7u3B5xdRfMg1SBtcgQ4oRwaYNtbAYuZv",
  "key25": "2p4HycSVqA9wLihqWDXkFMTUebFu344ynDLJ6KdkudEvj2WUhk4UUUbiXQBrGEZMRLZuJ3oq5TD4kxscveRqPdvi",
  "key26": "4aqq5qSq4xg6YZoY188mW4E66vpvR6BDkbGfHHty4GeApwytVKEBUMLXGqPrmXDgqxZCDsjsSNyqXWvxvq6V9Gfv",
  "key27": "5GyE4uJ9iXspW723gHrxqhYe1dfZ34PHmCDHhDvVHKkLQ9Uz1sL3WPaC7diEAKe1tYYY8CgTb4sJyck3VbrtjNmu",
  "key28": "VdgBavmWnGxRqZoUsP6RWYANutdEcpRL5LQmsWXxb6WUnZd3aqiCx8wjhQcd77n2HH2X5CH8UqcAX2bjMg4oWCH",
  "key29": "5UDzAJcFLocvTYTPz43rXraHKjVCSJBtGyKgL46pXFhkK6dXvj22pghygQvunx1NjMMdYW7Q24RYSiXMHWJAx1h3",
  "key30": "22R2zvA485ND5ZEJ4RCJZJdyyrtsyGuBMK5UNxartGGTgxCv5i1utJWDCCAhE5LbRAgJNF7t7zyFFDrxzncCxcsw",
  "key31": "25o4giXTtuCfQZoNVDnQUAzDir6WFXhFuC2uN3NrWjpscJ23zRm3xtahdVDGWvdNYeYKCPPScP8S2VYyHYup5cma",
  "key32": "24Pmd1p46Ut87hRapH1SxhmDwSdyhub3GNi36iwmCycXq9oSMQwU37brqMMi9VKzdqYjYnMRmtegTXoYr9fdNYDV",
  "key33": "3jAutTo9KiXvkf2LWGNyT9Rrxpf8hwDNXbrmuVFYaKY3p27b5xJFsVvd44s8mnKVg5YS4G3igXi1Vm2v6uVnVVMX",
  "key34": "12RkuAXRCe9Ep35S9ob9F5NoMzNUvMtYWbYG3BL5KTYH9mjpCHnpgPbq4YK51o5Tu6UCz3g2M5L4XwR29onMr9y",
  "key35": "47v42AqKqLQyVqtumVtEaBmu92Lvc2xF9ZhVY3viamzLpfZXi43VZTQuj4jjDVAA9KDfH3pjifaqFRZbjJpBCqzr",
  "key36": "5rYjfcAf8Lzn8Q4BgVA2Uhhgygxw7t2S9fML4PGsuDejp2kkZ4wLQG5zRo82xPwi7PPawRjCyCouJHx9fQKFtd9m",
  "key37": "5woLBK6Yprf54Sz3kDVnc3S9U9QkEhDMoXHuqj1kourwunTR6ZGPvtH5z1irRegunLrY9mUQb8Lqax7EiU6pAhbh",
  "key38": "2CicHGWTsxj4bqZ5EhswGwX3Ycv3vXL3MqjkDyLmiZDim5WUjsrb8q6ZdrctCoj23hfm7mEcdKjFUZ3VnUNESgB2",
  "key39": "iHN4qtyfzB2NARDgXS3YeyAVz19EAmjSWN1Af2AwKgGg7S4tgeuo6pyN14Htw8X1N7EVXthfLz1WLmPXs59w8kB",
  "key40": "3gvP7r24aLX9CbvE8mWgNg61h66JQpLo1KrmoXtJn7oUD5aGhLkaHqfXxnuWzhq8kmDPS945sFatghhFvHULjqD5",
  "key41": "ytDpSL6QQy3HwEuTTdeWr96BLPmxU72f3cnHv6bqPDXni3FVS8C5XUUGQinnp1wwmwYHZh6HeYsZdpgnLnyTRSg",
  "key42": "2JwJVzCX5JzRUQ4UMEXgbXmuhuUpYVLdRAFkcF4tDVeaDSw9Lw6dVn2yHheTRX81bfKETLcUxLWSbX5ZTkhSQ1sN",
  "key43": "yWwcovuJpQ6L3BinQSRjGN324iXvfHiM79umfab9E4d9eEWeGgRQ8hx7xpHACJf4GatjuNqvC4HdbV3639kxAEu"
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
