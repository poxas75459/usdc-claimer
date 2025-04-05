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
    "3iWGqfmfzVD2jM3vHHT8uTESgZD2xYKCx4RTfrTN8EjjwpYRcGNJ2mQEb5Cv21iN9ffkWWknQQus4n4q8zio46PL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JyWKvVy6TVRGZRjSY9aBdtrZ7Q5B1JXsdwiHB9vhf14aEao5emx7onsLm9h62GGsa6Urv1AvKrVYaG4o6KMrrys",
  "key1": "65dFo1QYcoqfRcg6Qj5bkkZLmEsAE2Ut1uCSpSmKkCvdBaQMw3JqVoqjda8v19fcW3f8dXnARX5gnVbKqboXAtwk",
  "key2": "2ARVf6Fuz8o28gRzE5G8e4myDMmPhuLH8FCX1SEq3MkE2ZikNaAecNNKDGsFZ3odrqhwvAwAxpryjHcdomjzUoQx",
  "key3": "2hNY6efBoUurXVCmteJMzKWLKjtnMF9UxCyMPXRBSiDzUuWb7ZeiBbttqRXYzXUtiXwR16d8kTbECU7w22c6uwTj",
  "key4": "3vWLuqEzahV3CtVvtExdgJxg8d7oYyTaxzJ5tmL172Nziywb9y9Jem44FYsGxtwa1TntRZW6srZnXSqiHTwAXboS",
  "key5": "R2yLW8sAwWfNwEkVffCkw6T5i3hgZhNfzUpr8TCyqbD7RcKan8RsGuSXUmE8gHt9wccyhWVfHnZ1wiSR2nMCyoh",
  "key6": "5Mjdn7HK5mtQ12V5BEKv2UTDgoJgekS2SSpEMrkvwoubj2aaUnQdbnoJB9cqCuRHMLSR8h7BjjU6gAvcuUtzycnq",
  "key7": "2sPH1LCTizKPRe4UAWKAkDBq2G8DVTj6vR248kT29mwxKui4MgpvjPfTX4bZZEhrjF2jokEX8r95U38aG4wMn8J3",
  "key8": "2zqzqQ4HXK77KZ4MWzpGhCn5ALtQtsefLzPrfGHjfZGUpyu3yzjjgTsKAe1V3WadvoqVLeVYtgRNnW7QnLnsv3Lo",
  "key9": "AU9VchxUC7CcZJ4cKDpX9mu3G4vjgmma8pMVaHBtxwK2SFEqP5LvTrPBEV4ZCrnfYR2zp2Wy58UZzdSu5z5ubq4",
  "key10": "4aKMYGoSh8HEyfUL2HYasNieAoM2RccHuCRYzenwLRUxw6DTvXhwwBb7LsK9F7fffA3hmbug9eozE4pWC3Th33eE",
  "key11": "3j3gq9ua39PoZokizXMaWbBoW5W5LkLkxwoXBN2Zj5ZP6tQQdqhZHCrxDs4ipWQ4iRGwqFryhfBWEKAHRogTuT7c",
  "key12": "3xLykQLXfBHbS7bE64pN2cKTTJ1GbjxRbV3kCNwYfzZZk3FHg5KD16W8oRAFzzfpCFTp298QHG2QQFCa2ovPwmaF",
  "key13": "4gtagKMhsy5Dqp5BnvipYXukanBqFnr8totRvPuoqEmXi1YgAcHSD3bQ7REz4D8T3TtTa9868oBdbX3TavRREw4D",
  "key14": "45zvhsZtxUouW1JKaFFYAWM53KyUDCGA1Fq36sMJ4run8Avdd2ppYJr5Axc2wQKrcSghK3z78AkgeJKxeJzce8FP",
  "key15": "5u94w8czWjFiegftwKkcrTS6tfYuNYjB8WqLuH2fY83i6qnLt8b7ak4iJBd41kR4B7WBWychjyy8MP8iSHmAED8H",
  "key16": "42GqA7GTnoUw63Mag9FzGVn7ZHtNWUiYEYSptAScXCxZAMSvSjP3vqcWgq6BBh4MvYTnZnasUtHHJX7FaErAUEQW",
  "key17": "3n3UNk2Y9LupWqKPNXLsPHBxTxLhTgHLe2vQawhAUYHZycaWDWhRgvgTNZSuzMzEqZB8BHJdGCTerXvD1KF4RXNy",
  "key18": "2LsZCSmkTJ9dSpNz8HB9g5rdPXLSkVTxpEaRXdTFdU96n85yuG1SqwnPBoNZr42vR4oBNzorB4qP8mTMn9fLWRA2",
  "key19": "5wLWt1BPZ7fki1jZCqhKYzKF2XVDgAWSvy2izuWARCYiznvMq7MYSKYRjrJgPRLBDrCjgaDpBWZeYN8ck2ivoGqT",
  "key20": "4ASG51VCPDz9hrpxsjpmVNyVazb7i5ZvfwexPEYnNWvszMscgcQCaUtX5HUScx8s5xSMfhsYQGkpS2zKj3LCYtDt",
  "key21": "3zCVso5RYtFQdnddyuV6qtxDHmE8m36c7NTTZqiXBNdoXegu781fAJdZabV75HVKgH5k13m9BigJwHZ2uYiDuLUQ",
  "key22": "2FtWZvcL6d2puxdZ7QChXp5wHVYnxfEz8561kbibz28Wz9wYcWxUoRKT7d1cSQwad6XYfZRJEucTDGqWpjU9YJhW",
  "key23": "4ZYoKpTFjeMXJLgVdLAyZ3XZQSErYtSCcowP5jxxBQgvaj9m516DnLPge9kp9cP1QSb9sdQd1zhyg32Si1VLCY2v",
  "key24": "4xCmdFsKUMjMtFnrWYRS2eJMdL6KLE71F789HSf4PtzC7MQSqV2D6vXfLE2YaBatoYndaVsst5p96qEyyNLk2TjJ",
  "key25": "63SBWZEKqxDqUtRp2F3X3RqQcdS6Z3wXU1HqTkS8kTQvhxda7bUmDnVN7Sg4rHZif1HHifjW25Lzj3FK25Qmp1WX",
  "key26": "2EdKmK2hRAryikSC4qy9JzvgYrfszEFdQPqMBoui5wkCwT8BJFCUQ3T4wdryA2tjUs8n87z5rJvb8mb4ALvwGqvM",
  "key27": "PyjLsP6qA5ZZz5NcUTDJ5yVa714Jm7XJkHf1G7Q3KBgaLwZo6p1gKVWB3sDqhJAPQJZPdXjeJ2an7vZwWLYVzDX",
  "key28": "ze4UQmXJs7piXzqGpN5cscZncHgPbXVYVjZp8QyVJ6iU6MHY9u3hLv88gcwdZZq3AR4qRJsjbYMUATLbmN6wnrQ",
  "key29": "u29wFkhs86DYxY22hTsbqtC35qoZ74u5DaK3UwXTG8E3Xk6fgUY8rFRWHZ1FefnJtS9FEndrdbkjkujib7ZUZB2",
  "key30": "cJoc9hNZs7ZfWbpKNFB1iwTUFiZrvmLue2W4eYq188hTFu14h1U5qRrdk735ob5hFdeGMyqs3JDRSvXUyQqHjwA",
  "key31": "5vbKZCyWnAVLvZnLdbAJbVoVnLBXvZQVoXd1uQrmo1LwWgZf6qj1QAqzSVqdBk9UoYFT6Kd7oncWuJtYxvTAMagJ",
  "key32": "FMDqsWZsnZJdCBac9cjoqkiRCHXvkSh9S5aUBcGRvcWYpZVV7txrRisKAdhoPjSPQR9BVmS8HdGZ2ZepknQvqHN",
  "key33": "392hujcYhjiZWdFNRJx6M3QpUd6z4Lx3b34tRxAuErqP7vugPHNCdpZzvBVd91kMyExs51ZKzr35AJbBZ7MRZ6uq",
  "key34": "4ZpNgCZGZJ2NJ9StArJGG4okzBEhUvLrcJbj6WgkW5fs3M7LGf3Vb4nVBa6pwMY2H78QzefEZN8F6cCDPgduQpYg",
  "key35": "52Qvrhqnt5TcQrWmDS2CyT3oyPrYWmHBFpeta9cPq3B8SAXZwe9aczqhQcVxVyQpPycrVPjLqndWFD2EkyMX2q4h",
  "key36": "4KdXriyWSgc3A7GdWgWfiw3bCxcfb9jAknNkfKt7rWomNkfqAFiZbSHEwFAbsE44Y7QQnttQ2tXk6yAkTXLnXBNs",
  "key37": "25k2xeCBfMxXMHGBu4bjfroEUog6JUeYJw3QenAcVpZusZLhp4sd5PmBvJvBuRqsUQPpqHmvJzpg7WzEfH131yPp",
  "key38": "21c79JH6VHpxc2AY1Uot1YMebhCwg2kq6HTsgZ7yWsz7fbjKKngyPN36d4G4bGDTeQJQhXszuUaDiZFNYJQXxtih",
  "key39": "64UzpYCmg6vgBhALQ4jnLEDoJDeKa91o86eeicYewmizi5NLdU4igKqTqvKgFvgPt2HCvMeisJiRyUysCpBxr7AW",
  "key40": "3EXpP6TKVY2ZgVk9DEFN6wXgBZSozYoFBdQJJ3a69GiECXMYAEGgpjFqptLjf4VJuh3vTwLyRpKXmbtKQ1n8KosV",
  "key41": "dXosEKGbo6BzB6v4A6UCzrGs96Sx8DVKzZs6qATPh9TKnf2CcJPcFzUzmvcDbvgZDWCK6bbv6PQiEkofuKAx4yL",
  "key42": "4EZgPYCXryanMuVmXmp6R44HnzdqTKpSXgZeYLUg2uWE6jqBDgU1uJ8v2LZ2SsTbwPAED59KTny8gq76Z4RD1ERW",
  "key43": "2uyMVB3s2FRKxYCpMg9Z8xyyGes9VyKA7XsWAE6jMin7f3VzhhycTxWYbL6D1qzk4rEDmNiTxhWVs64D7LtApiNZ",
  "key44": "2oVWavFbdznD6yHTzhgeScpHSL1VqVzMQNfbXJeaFuDkLvAbKvSeCwrbKSfmdFg3yKvswyEmWt2N142j83e9iHH6",
  "key45": "5Ydn76qtuvexwiHahzw7rZCPvMnJ72RdaDtQ4bbRj41Qpt3ew2NjAmXALWMiuA7s57tVQHUDabFqsyMPE8zERUL5",
  "key46": "JzJm4HWTaLXMVuj92CXU4pDEU8bW7eQ3e1MFK5doEwD52xX4fDKRuqXE8GvwRVnDQVDGZv4ye9TrqsknyB8ELuV",
  "key47": "4355YcZYsAgBBV3nn4XtEPZDMtDEWkDDW7XTCmrVTRHQWMnzLXiGYzzbC3YqKtqsLVU5D7K5QoLCJxvN5GxpZsn9",
  "key48": "4oRMAyAaZ5hqmq2hKcBwdfwm3afGw9gQRuta3L3tgm4dt2cg5sGrQJdFeuw6TjC6bjDMbARzbr6Nprsv1LsDGhXR",
  "key49": "5Ac7Lb4AyecnXWhttAj4ReNgwdcgAM4Xa7CVoKWFex4U3R8QJ2Dg8sCiJqFjTZiowWPr2yYssJrj2MwECGMhMT3u"
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
