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
    "VbUY6PrmCEKCb687DKNhEyrsVig3g7JmzUck1ur4ShZmQ7HdgbQCH71GQ2Hdvwfd54ZBKN4YZSxHWxtDHMU57dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SXoW6BGXTdWDjYnd8ymPMPayiK5uhz1gMTTfQJaKCULsLfwQfp9tqyLBVfEdoRRfrEw8P6U1jzCuw2frtSskx6j",
  "key1": "2h4ANZR1mrcUuM5GkvXVPbss5MH8aWEpgWbUTL8ezL2WLoz6JgvNVanneXDZ73j6cbV31vYgXgzrTysczcxTWM7y",
  "key2": "5uQBDXfA5NpBBSmbtcYrkSf4GvMS4TXMtZMKt4kPJfacBekAi8u9JMpymJXMNnGMCyi3xuxRa2YHcZBvDxhp8ywM",
  "key3": "2XXzi3RhMhdBchPvZCRAf1adyH5snacFxjKXZQbYPdHJkpQgmTdtDr6XkGFAo2Nt89ah9MS2DYL9RmHtDEo8zFdQ",
  "key4": "342zWtwgBKeAdvdWKyZr1vbFEvrC8R1LdQr6CHq2JtfQ1Fbit1i2APtKb1y7TPeCMXHG8ubNWrEgMVfq7sF2Tc4H",
  "key5": "3myRvWdU3csoxepfwQT3ty6uA2fwZm9pwucJZoyf7MRThY6ptVBfXUgEV8wGXLHiyq2hdgTmwiFTSu2PkvzZMVfv",
  "key6": "2AruZ7GFPLWWobLr2cfapd5FGm3WmgAx3im9pkaESkm8sB2r3QaCEr6J5qjUvL3wNLywiT7mX7ssnc3gXwtxZxsu",
  "key7": "348Eyj3W3eXpjKxFxSPoxgKGthzvzrwDGZgt4vR5jr39Yfc8PpKGqwwXjd7SNQjYfhyYuXHAxJHq6rzqY6QVnneP",
  "key8": "1oXFCF5akMwZsoAq3G9eBC3ATds2huMpWJuu54Xj6cSHqfg8koJt5ai4mUywFYfTf1mXfc5mv3WZygMBxvn6ric",
  "key9": "59vdk3eddg2CphbQg2qTTrCYX6QycFEAZMN6awKqVV2Q1rLStSsUzvA3iSxmBEPN7S4ZeB4JKv79o2oN1AoCGFVY",
  "key10": "fsMpk9Yo3omjhZF66hUzCHgnTKNLc6QkgVDrNLntj4AiADYvBadqHAmPSLgUj5QXHg7k3koTbuXwJZZyQ5uKQ8p",
  "key11": "67okcorrpkKVEYx4MHGHugob1UDtnaWXLBMY9YzeqGuV3jb8VUgjDH6BtHCvFL4aWSFjN3d89oqHhudyvw3zTEHa",
  "key12": "56jcw7USFQ2dc3f5eAGiy1MEbSNj2y8Lyg3K8UL3LgCwmrL7Xv2j5dGWUHMVk4tMAnH46fPAdHXbgvPqDv9RDdT4",
  "key13": "3LVT6qWRkGf78M3Skqeejfd1fLoFAx9RdhRmpHBxPakZmmrK238a6cq3Bj3RLewsY71YB1MF261L9rD6LTjNMsFb",
  "key14": "5LxjN5XSN2GdkYtzPeWZd19V5u3pqo6tmtH1bJnv3BJMppTcHgL1wkioSxsyRhZY43z9LJMeVy7QhQig9iA4pGPa",
  "key15": "5nNAawmg4epZCGuMs5fy5qxFEzpMsF7DmqMGpmuxtj3UaUA5b6KJMpxtrpkXLwppV23sTBgsTADNmxdj6KKCRc55",
  "key16": "rcZ3QZ6zYEKZdAF9yWfRqM7Vj9h9B11EcvWJk8FFgbL4QKCaQbXq1MKCjWbt8CTcKiZmxrxgrrH4hpJHQUkxZZF",
  "key17": "3rM2Ua8BLBuinddnJ1DWc37EtVwNJqign25ndBD2G5qJx1chPNi4Lboh8ScWxixdp3rEVx5gGFUBceYCcrd899AQ",
  "key18": "5sVVLAYx1rJ5Laa84jMvy79Dty1mdTASa9cKExnxXeEd3kuXH8htrpAKNseDSv5tfpZcPTjWTqLXvuGJRid1VrLJ",
  "key19": "be2TtmK727DcvG2xJkL9QQ4h42Ayn9XDzG4E3en54KEgfjBamVVaBBoEJ79XAgoTU3dXNcx88MgTMvFkAjwuKUd",
  "key20": "7eUveu9qtBMd7j4T3Yb9o4meQxUHUCJp73v1cD2WmNUZd4kHkoWoE1akLi8eNM2h4GARcUUXM7KhxbfJc6zpiqP",
  "key21": "tuBzbWnj7z2E1tAoGGCYR3KbAN7WSEWqSjZNTo6Hxnj4aPXPjo4pZvLNp2MndUuDPhdjCPZrPf675iWYDS4eSr1",
  "key22": "2oKq54vWkgUgKqzKjGq8riz5FFJTdN7MMbJNUdwyLynQp5eihtu4JNvkRs6mvsx7K2t9cJcdtFkTEfSHkLRP6XdZ",
  "key23": "2GA2kpXrhsMKNCTEZwYhDmfpygi6CeY8BSx483t3V341aUwNFHvt9v11McswW4XrNVqdmFqGa2tLeWAy1h9qfKZZ",
  "key24": "qEuynynmmBaaxFYMT9uDXTALXTge3nGjgpwnEjHfmHRwGCVkZWjX19rbz113v8kA9t2rbZ4SxR94QNa8qGAUqaT",
  "key25": "43HaHg85WY3LbXzfn9V3awQcUiNEv5fXA9gQFmTFRZHJ7WV86ZWjsR69gUxurdii4zk5zJViud29oDq43QFm1b4j",
  "key26": "4Y3nsqs1WuwzcsefTGsV7v8QoebKbiBJ4TpUBq5a75Nfmrg5p787XovRFmWvQngmYGwHwPSR5spRQAdPYfjuLeZk",
  "key27": "325iFLegkJJZ8ECWz5wheQXYaGbDVAwhrXa49BMLb8C4Y6jQiZmCTvJrihvSfCe5hAHWcHhmWxVNcsW9z6R7gUrD",
  "key28": "sAKhe3Qfb5WtUFMvkmJQ5k3LUZbFaPypPqDfeV7UEKHpnxNUcL1MDzQv2ZH5PUHQLo1DTGNk9JXuGQ81mEJ9MYE",
  "key29": "4kEgib5N5Mm2pfwq8T9PkHMSErYmMC3uM1vvkcY9iXW7nj5x2P5NuVAJoXWkFgvau3BXbzvx3oSKGcNRbtTsbKhD",
  "key30": "3Z2aY12CnLUKzoH4jPX86ULNr1nSVia8Ed1yzSrsuEEgRvv4hiKRURhpspSsEVJwJajBYxQaSd5XAA7xdWP8KVSC",
  "key31": "2SJHRN4Fkfh1muHq2Nv5hJzJqieBn96df9HsCXErL8zHZY1zpjtU3WvgLz5ogLEUc9CTKWhYrjPwAb6uxF4oCLZR",
  "key32": "5D9dkQ9kTsgP9aT6iXAoWpK5bZrJAFbv6UphLTJUtkJdUAVHr6CAz2sCnwt9MzMYG59gE2ATT64nAVBGddY9To7S",
  "key33": "5TLnoFSr7NLX8n6ezNZ5tvbs8rMuuT1yUX3vL7kLjfXwtCoJ3HccWVsCcE584vzAVdozP27VRr3n5utN6e3wYs4N",
  "key34": "9AZdcUywGwczj4t7QsArDt7iHDum82XxPje2uDj4odRRfFqsSGaGV5fpj8ejXJYhe3GmFBcFq2SQ66maaF7HviB",
  "key35": "4YDCDCw8QpoAugVZ7goWR29A77o7oDa5Ddj7jdvMYQ2BS7V2smNrJ34Rnc6BbkL3kyW8ACgcvDgGhY2iDADY8VeN",
  "key36": "vWs6dAF1Kekem3p6heqWsJfA1bNPqsLktBoceYK3h1rkNwYVDhS7zogLkUrPCDGq845GPgNENv91N4ZG4YWSdr5",
  "key37": "4RPibM3GGzLevr16Nkzvhvsstq8aE85HgsN3CfPcapXz45dPZDzwPaYdwx3jLXyM4fxj2Nbpzthd1JGastUuDWDW",
  "key38": "25wd4hGHEurhKjwaTHkbaytRsakoJcdXu3PxPuBLn8mbax9f6zxH73t4fRZSyVXZGCf2mF47F3DSnViUBeUuagb4",
  "key39": "2pSXnZscgwM2aBQTGRhjKXcDDjvarvxau2ZfeyPciFUxNFgw61rkxGYY4EkZyGXhFvWrBy3u6fti1D32fDMMgUgM",
  "key40": "5TD1VWEpdEwrqtr4S4kJ13rYT6jrfzDFerAkXXMhSq36jNFJYo9rEHvrAhsntSLjq7dEkzHNePyjRBrzUeoNrEDr",
  "key41": "2HdVAq3HKcLy3KAEqYgWSX58VGL7i3RuXgVG5dDVm93Lf7EQCCPsPKiTZ2zJHgfDkeieNYrfRqVkcHVmRWUwHH6g",
  "key42": "5oogV3HSfSNGhxrPJiLTNvAs5g7wDQgCNJSY2DF5Dhrq13nj1gp4ir3esLtbMTgjNJrqXbTnFMQibJ1p169fKCP3",
  "key43": "2jZ6jsbGHQtPi4Sha7etBatu9HBvseCAQ6S9gAzgUnjw8EREfERath3Cz61AwoLdjSNWwxgWjtP6VJs7drYqkZPF",
  "key44": "sHhiEAPa8tb5mxqEdde2TqbLnLmLYvpzwVqwvZ7m5mzywJM69NyqFxGBo2twrZE3bHvUCpLD2STfb5U7F8Yhj7R",
  "key45": "4HGiqhWSKcHZHbSjTnJhxMKPag3JPnSmvYJGEQpZ3gqDLzbeg2vyPyei4cwatZ2qz6xi7Q8YUifYmrM3RAkduMGK",
  "key46": "52GEGgDZ4dQRQcPdXpy2S6vzZLYa679g4nVJaWsJn7nETQnxfbnN6xHMYsHzNtxQ8CMvBqd3FdcDA8WNrjyF45RK",
  "key47": "5p5R5yjYcXVofg9NM93faLk6Th9eCAXFwTHhwzNoPXQfYWzN5mUwNRzqXu4q1omCkKSNxLbtWpX3BCWsTxN74KkV",
  "key48": "5gTdKmj5x7g28AaDiZYKxcNScQnjrWDCf4T9vj9Ece77KPXBZe5XeV7U4edEWHSeLtUQig3ryZpssUpdQaUSogQo"
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
