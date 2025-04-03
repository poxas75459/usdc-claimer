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
    "5XCbSCnWosyAoS91CPx23pfnqVTRfNHgsX83poDS14xuX2jnEyNqp7QPh5cYettQWtW1QFBZEsr7UCCJ2pXaRaj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MmZmQDZQrwkxsiLdGToKa4PBPgKYfjoosuQqKsPrEFgcRnriD9JQrMnT3aFAwpM4Ng6E22QJyALgheTBVya1fLn",
  "key1": "4HnmGDiSTDz1ezoRz7zbNKzJw7szUe8kj6bA2u9iNmi5AkDJnT3m4pzL9F7DE1idrsQGs8ERGRsezRQH4bk9rVFh",
  "key2": "4URT2dKPTDrkm2Vsf59YicTptWPUXbfzC4yZ2BMUrWYN7GXss9YoqQeGUAXgywqRunBxQvgdupnvN78sacy1hJCb",
  "key3": "3iG6EHEGyogfFrrwLUHP5weA7eLGgnYQsRpxZsaeCrjaQ7PGo7wpETqZW4Hw2m8L82w1nRnuDqbJZWQ2z1q3zEL9",
  "key4": "kea9vbxLRHMZbGHf9wAvwZL8RnSsohkSAGd9QsLUbMyvDzNRu9pktj87efT78GurQZaLJRVBDyNHnt2yRKQtSHQ",
  "key5": "FfwvEoLVthXw5a6hUYiZ4Pk4VivkbY9MBHBMvEzTHRo43XRZLUKBegWT4DYdn51m7TVasynhA59vhEJ9F5Aw2PS",
  "key6": "2QvrQNHzVzgCYgNkLqKorXUST4ogyhx621Za5M3Vq2aBXzkodHciRY8Tf6ukwygnqdAbsLh5bfCiEfPqhESiBLQP",
  "key7": "PC71eMEw6gAYhyu8Pi8AWPyGKL8TAcNLZVfuJybV1dPLvJK3BNxbGgXckxbsCyMfNbtRcrJc4SRe1jzccjb8UW4",
  "key8": "4duukibDyh4Ttx8kXawAtiyoh2Dv5pXNPDc7hb3tZc8NPhAbwZLJrWGoEqF7XiSfxmoBa3Jk2RfJ3zJGiFM7bLFQ",
  "key9": "t4npqv8Ve4Lvt32Gd8HMp2dXBQvmmqX49QbmNWepfSe5UqMhdT15inkzSN5yDeT4esbxFRPzE2Dhs2Lm9Waj3fw",
  "key10": "2SBnuqPKDGLMPmQkKhRDLY36DyEZKsfcKQ9sbCyehJgNHQhTwtAeXTGZToceQn9Tfr325cmizpu7toc3jChrtuVS",
  "key11": "2SrzMHDvatB9qYM8g2wXaG3dFz4si2YSm6ryZREucws1TQe2baqQtsfsxqoopTw8KDU8tcRPP9RkJU748YF5Pvgg",
  "key12": "4fF549mBijKZDCsYrPUxy9zjxpB5624UzJRjVe25bs5bZpWwhzAGwgMggHemkLxARdmvKNGB9VMSrYvDNdLbGHQ6",
  "key13": "3Pf9SDJ4iv43mHc7QLobAPfzuZazpKZyE2Dov1sZk458yJSZmTT2PefiHd2gyEfv8DtEpyNgc75XDHuGAjsrfuzQ",
  "key14": "3cawtNSL3ZWU6eyCVsFzoEzg6T7WWnCbCKZCf7GkfrQn7jwTAGX7yorUgmCqTGdVdQcAhzjsHfUAaokjBnnkeuhq",
  "key15": "3ARrwEVRUEFpMhDZp6L6TDQFREJr32RdLUuZmgCxQhRiQJtuk9m4eRyqjL2iXs9TUqENMUePrTaRLA7JgY96VjQG",
  "key16": "5h3CQEw64zgNW4arrxjbNcEP8u1TmrnhwU4n7jqFthJTdPQjHtgRYJz3HteD2yYEpazK3jatzfY7gt2FQjD7Yjag",
  "key17": "21RSwM8RHqXtdYjyKxA3hatdECvACxCFpNhiPvpn6SaFpuFpLaiWDtknfNKtkn3CwkUfRi8nvh3zoprHAotmztCc",
  "key18": "43AbGGFPH41BtqTYKVkCaBxYkwVoEuE87GUb1eRDRxDpAdaZF7aavSFnhBDoQcTLr16wgnjN8nthe8kcp1Bh1hYJ",
  "key19": "4eGqFE8DRL3Ao2VVsYHuujoL5XvW71P1SDhp42Q3PuPYyAhKRri6HePEfduvbowCnPisPZEo618RzMCiQouQpJys",
  "key20": "29thVTFRGrWYtYZ6S5NDdQApHvPZSuKSxZEtcB5oHMWPyEqtyDGPfHL9UN25Uji5Hcha4U94cw3vtfVgk6uGU2f7",
  "key21": "nDCQzy9vFaLHVzfNSqcXJmoatNkdV6ooLpFV4X82UZpb4oY3YhNbMiLdATq4E5jHXFGshBT7EbMmZdep7tP3hVp",
  "key22": "4CnD6escJPfsdhz19Fz4WTPWe5fgfdqLSDxV1nAeAV1oSCbRSLAwnRnaEmFVUKYR1BLHgeFux6dRewmj3Jb17z8B",
  "key23": "2nRPqejCd4nNXMjovcyPfPXaiLr4nTfoY9P24PebbBveHiiWxaNJArpvTCnjQRe57bK4pzc27Yy3JyeAP8o4okrt",
  "key24": "3fifMYrq2RW2AZ1KK3guk3pus6jzKzgqdgeYLUgfKJzFv4wFS8JnyrnV64CERPxCBv7QFLCgnqvHnsCtUxiANc7E",
  "key25": "376ySTs6YUxda7WCNX5ZDRQRqLhofqa5tBPMibTQXZBLQ8dHKm1yPC6nt77wJW988jN1o7Dosjp7yGiaYco8zvDU",
  "key26": "63rKHBCW1ijovetyT6jqPzwkocr3GAUJgkyUPM4tEJJKTQ2WWY6KujHUnxNM49fgEx5q5vNpwJDuGLqkMVA4LjL9",
  "key27": "4LAjqgWC9QxLUMN6BMFGYyKoW7FusbuLdeTedNvGjsCwkZiGx9FYaQ33mxPD9ttCoCy2epxUxaJknLqXQX76JvNA",
  "key28": "4fqMqS7y1ZnzfSVBEwqKbhbiW1cxkVFvqGmDDnPqmrEChtXmdKVHsEbEWztuRFyzDzrANSYUky4Jdq2z928PpUow",
  "key29": "2xvfawTPxyrKEyA9Jkq54YXtuoFdaEeTJ371coPp17Jurfp1rcJSfj3toj4FvjRqQ2as7YdiiDquVafzXsDGv2MS",
  "key30": "4tQBTsvCWfmxNWX2BQNchQ6XX3yLgnNQKpYX7sPdNvxvaTkrdvdSjmri7UuqnTShtz4MUzCPspxdoXcEhP3vJhsX",
  "key31": "4J7yAzsUDmXAU54zsStK6KqRa6hmywGbqKmhk4si8RXgopMweL6uh6f7PgxCeq3cqBFnZiuS2MRHidbP6mnj2aPD",
  "key32": "5SazSxjX7EFhFszpSwhJcwPg8yunJQEZW4SjfhiK8u2MsiUiFLvz54YjWbzPQajdwPRvwufiEksweDkqFwTcBTJ",
  "key33": "264ywbuGZ4DEK1DNuPCy4ntcJF71F93dtZHm5eCNHLLm9M9HSJk9pzQD57LeUgqWkogHmuFrwsfEMa95PQ8pMafq",
  "key34": "5wcPWA6znpJUoX7NzoQCtvjBj3zAJtzdaUm8kbRCCck6g1AMjDyTTsK4uMY1txVik3gAFd5SkFN6Jnaz1vJg1usA",
  "key35": "2cz1uvi8UXSVRMCSWvnr78vAYYyq7QH9CytsuStEDYmqsUKmmkCgr2yRMQ6FfYCQMaE3LamHMfurLsKf6BjPjTxy",
  "key36": "2yu2tjm8kADcoHPZfrwviJnJ5madypcSL6zvnR1EdtuK6jV8zTWKoav5nZbWeqRfwc8V2aNXPBempkFuMmP3zUxX",
  "key37": "UdLrp1YAEUndB5cYzd2rqRkTMPBews1LP46YDoBBb8LgZKczsdn6PqosJ1zy84AQMDRRhdyke4RT4MepNSEg2ok",
  "key38": "1K5t5xCDHeTPkSMw1C2Vu9d3BvTbJXuHhyg7oQTJFqRoxL2z4PjpK5mU5Tji9qHW21dHBbWopqBWqxzrieT2jQa",
  "key39": "7JNbwgJqdzA8wEeSfUrTxf1f2xmWGV2WiweQt3TJA7cmT4QFWrDmfuvwqGb3NnDEzpJwp7ax1U9LjWMzLvbFiFS",
  "key40": "2x4QfaN1qrxqC1pFRkuL7M95Lcov8F6aZ1uq6PgtyXX72SEQCc7dbMxwts64AgcKRrir275D7mgBhRRa18fRvEKc",
  "key41": "rSYNdv7iJ7U7fSiKuRwT42pHks25gE96HXX4fstVPXTP2i5ZmTP5xHbaqu1AxXCuzZrjvXSgbNWf1KnQjJrjXdp",
  "key42": "6bzLsjZX1DqQBDMDC6wgH8kFWesTbH5H4urfA8zFBPzK5p2Thb2ddzRXzJRWUTTf6Qg4FqhEteoZ5TMDwuXFk6j",
  "key43": "3SZNbdcndR5Ty8VaA6mKGrbikDuYZcvY8Tnt9c1LPE9NBN8aZDx41wJLpiNJHnaJ59KfAiCuZEctfXf416VkohjK",
  "key44": "21aBpf8hKSY5kvQMbWeTBkuvXmSJng7BG3vJGmaDwQA6gXL81gWUHShdUS9mPDua9TsLCJoN4TfqSPP6saHMn19D",
  "key45": "2WVFrJfnzJDmZAFpU4fD4VJozMXtpnfvLB8kLsX31XrVjuKR2sAa1fXHL7wTdUvsR3jPRK4AnmQF5SnmPVhgfBk1",
  "key46": "2C4nuUJuXBY7d7UFA1PuaC1pfcPsi7ft1Mr3uQZe6JeaDc3nmV8ukec9qGiNzpG5detmrXnryaMStMiEVHkEmw6D",
  "key47": "4pKP7kEe5KCDRUBpFqDRjekAUJdnjcU4EqMqhVBkvTe5Had7APw8m7zowE9eVktZ7XzE6RcebXgrSLtJKmKvcRAg"
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
