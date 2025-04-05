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
    "58cigbAPW2cQxo6NKMc1aQTjiAKWoiNpXAwMtUxwqfxrJxkeBUMebqGxPap97YMTqxwsBdpr5cuKWjSYoiFwQYqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S1oTuH4RPfgL1w7n6zSfsAMnRQAtaUXe2zq9b9aAHKaokGFrVeQeg4ta7zDGLZKR5SkaJNm8fRJR82sL3YwraAn",
  "key1": "3Rw2i1hASqfygAKjmR4A6gHghDeuuNhGJcaV85WZ8CLfZejn1TDuMTcGX2Ci3bbEeUdUKGT6qFMfUSegZSNyyCsj",
  "key2": "52kzWd14aJbS3D5YgQUbS1BYPnXaY3KHmvBmDyEEcXGbNi7tKn9FZARuvDmUr29mtu5uxBU6G63pU6u44nCf26ce",
  "key3": "315Fp8qML6CRxFdD76tdzEsLU9JNoowYPGJbFeE5iaQMWv4jCMXqpqsJ424NxgFw7wx7WwhaUCJo1Awb83nqpYCc",
  "key4": "6Xx2j2ZwaJte3VypjyFzvULU3GjegvzabrCANQxTXqEYNSMyGmcoBkCiA1UzLkFS5QiDemYiMammet3Qcre33dS",
  "key5": "2eDxnUcGCjm2yhznr6E68qD3mJsxCpxsQHXQv1yRjBRjhqEp9sDtAQWT9wLi5eSsU2W3e7scxGsgGav19GjzDtxN",
  "key6": "3kGdmpsMZVJ41Nheiyz4d6umWMaUcTTXgZrEGSoyyKvc6kM27PMouMa8g5YsGNDVqJ9Q53CYBkMkvzDCFcemBDgK",
  "key7": "4HHXjfRZiaEVYwfVzSWp168svacLnzTk3xKNDw3d3PPeyp6AxZkHMbJ78Bwt7tcg8XkMCvwGTnQAkVodydwzyuH9",
  "key8": "4utxFpu1NcsdBgh7spxVKt1ZkDyQ8owARdM5DPM47SGbPxyJkDqusyRm5vg1LP8GPFZxavjVsCYmMjHxk79vQodA",
  "key9": "4smGo7aF9DkWtJ81PhcrZyHSDQ6bT4GfB14cpvYVGZkpjkUopkafAMXLmBHMJBi6yi5vneNcapRKJ5Uh86dK4upC",
  "key10": "wkkRCFenfyRPqENe1dZtsgnLpJHiVSVXRydu5ZBa6Gkcd41J3286CyYZojzroJpLUeApy84U5T9eQot2pwsHVjk",
  "key11": "5Q7Mxyvo2DSdcJzfy83umg677HiLom4XpYvgEuPNgd36cqsaT1eyidofTrhbFxarLy9zKCMDNChmkj8bjHiHXcrL",
  "key12": "65zugeLKdDUe7MYo4j4dmd7apQG68CBF61yTaH2VF3GZDzF6k2F8VSu6w1YcGxe3ZpZ1scfVGCaKA5FVnU3kvNq5",
  "key13": "5HXXr9rbeDkLJYcePgafRLR5zFnR3Cw2JkqwuoUyfysAQbCNJftAnQ8R82z1TxK86ySkS6EzBpDecA8yD9XHKkAY",
  "key14": "4ZaHW2fqVnAmDdGwKteJyWm25gTxhUz5ZrwVrmwyTeNU9syyy5w8snrCTcrBW9pWcnZdrs9j2QjUApV34ZyTDkc9",
  "key15": "LYAzadnSDggY4SGxdPPqswUM5u7e4Rm2XciW5RP2PoiR4pQpCRD5CwvbCvYN9jnbUUh24QNrNV3D3QiEhswSbzq",
  "key16": "3TbhmPJxPQyXo2cN8LQUPrFrvzGoAcWTRpga7rJ7mKaZHjkwxRue6kdZLTokkHeoGJ6UEQWvnxgp8QcyRDqqaG7B",
  "key17": "5bL8XikETBY1QXodRr5Tj5VTEXMfGke8KGt75YBY8eLYKSR8T9GrucWs3o3yScbqWR2SKs7inZGbKsf6UcMdtVZq",
  "key18": "2TkpwCYWebkfoVW9Tzf86Eiyyho9PN6X3w1bgFQZeLkP9EjDvjWHRMNwbNuDa3nAZbHZUopAUbth5kvRvS9eBFkx",
  "key19": "2aQzCJWgGjCcdZemMcexFoYU7GUSLFDiubTuxgEawnLypwkPA24tZTCx86vuRYWnJtUv4SX97kDP5dnckJkjJVw",
  "key20": "5kX7qDrRbKneXb4TepdhHzJJfYEAEyQdg8jxzv4XpW5p8HvHkHMA8AC59mHNhcNu4FwHZd16Y53fQi9A9rrL5ZQ3",
  "key21": "2f1t2rn9at4U5JVpyjxj3AhHSUHSbMVToQeR2VBaKZaSroPt1AwPKnM44LpWV1QsbCg9ezygPjBP3HyDSVs4iJqn",
  "key22": "BtrEQSzmh12Wtxogu3aQ9kH2eh3noxikAiQEgM6D58W4eN8wa8M8rNhGcfup89WBEQNdLH5P29dp8hBb2SguK7H",
  "key23": "4YAC3yXvBkeY8chNo8FwP8WSRRTqtyaNi3iZERcfLK1PDxSMZhmMUdAeNwUA4BSbUYrk1bfCNvB5AWhY4qnQtNBd",
  "key24": "2T1sFgXP6fhHqGYL7eNZVxVzAbVvynDnX5p86m4xNMdH5YYugZ6Kcn6xipw9sAzDBACxPw4V9resrMKNbpnUSxfs",
  "key25": "3amP6m46fgfeedVKJ2UNwg49xoCT7bT9pSRrk6AmW3GxjLYcT76rcj59JprWbHMk4ZntMHGBuQcH9b9D3tLRneGz",
  "key26": "5BPC7rS4q58ZQvcRxzcRSvAQkWCHygrbZX1YJd1LjzTau22Zyo75xS26VD8s3rU5GyzD694771LQq36myikzELM4",
  "key27": "7DLGaqvR3zNnTBCFdTB4EHtFwVJY1RFbTrTX2mPBpkE2Qkn8hm7Gaw1nFvAv79zCyPo7oe1LRm8q47ybVKFfBaw",
  "key28": "53dDsd9oYpS4dLSWzsdrEFCGjXYzJhLsdWiPceb12QDY2TsXojR1vdPEszubeZp5WDJQJPD1FN9wFmcCRaDQDi2x",
  "key29": "5difn7iFWw6yKaFTL2edo2JNUUw7t3fEkg4ahsxUZRrd1F6CeU1xogi2EAvvQnJ1ovXUdL4YdthAi7bNbhE3W7B9",
  "key30": "3FDiX7DnCC5fqbrTdqrZv6LxiU3zpEUXDRvBVaF95Lcq1QyPggR1X1VGPmUxXk6jWif6J986TkpiKcGrFBhGYYw9",
  "key31": "8PbJa3bWAe2fcYJfbpWJRthCwvsHWrgKT2kWJ4QfCvGbkcqmsosqYC6YinAajCsTyPF2uahSVNMrrKXBsLJhnP1",
  "key32": "aoTH2p4u14YWVC5jVEvHizJkojRW88XVzg9X7m1uz5iVE9XWGb1Y7GB5shcBvXnDFJVUZ9zw2CBPdDJyGgjFQFp",
  "key33": "48syKJaNtDN9Mg2RCb1w2RW79FeqWTic42ovFnLPPQHR5zF5PGyHzNHUjBigGZLq48ZqPLr6PqLMC2BrJ3p7zCkM",
  "key34": "5JPZfLjaUn8C1LnNuqbqo4uK7w5pLZG5Qphjqu4anfcWAJ6ZPjjbufkXHCWuMm99LezEhoLA4mPFFzKyPJtR5M3M",
  "key35": "zLpfHBeTC2MU8NFNEPzJRKTduH1kN4VtSKfNZZirYskLfDc5k6NdfSoBmgmwaX1xG5wnXufu1V3eaPnwbkiX3cF",
  "key36": "2ERbutqbf8emagK5KEzmBanNvQiAnVxNnvE6deFkPMjZ9JqAADXDyW5ixMHq6zL9kjgPvcAY7kiAKP4gmWre2VJU",
  "key37": "3qrgE3Skaen4Yyif4ybuGQccWgRAdsnLrymtyLaGTskf2cjUjSKFKjD633okgxwMW5nZnfxLHSfzq7Vfr2EFEU7B",
  "key38": "52Reh8S5UptUQ8k9BM9ZNLpciP2JXBxBRtbkFLzDewfqUD79tc4CYPw5vkjJVX7Lxx2Tjo7gK3kKZQeKgW7HajZg",
  "key39": "4nvYnGvQemtLTDWjaxrVXS3ESP8wukV5btZ32Pb2hFHgxcPramJiyJRihwMLxeKTRrspcBoGjNngpoVs9ysGq1RM",
  "key40": "52naeaPg8cFBDka3zQX1E8ch2qiit9Cst97gT5yRqVfp4Di4eyxxFbFTjegQJyzbhNnLxozfyUNSsQSS76sppdMZ",
  "key41": "3HrY4TdvUM4wXUkqZKVqSuR6TkRP7cmUPBGzPJsMcJMYYgpCtJQXhp8X5bNhC8NeZvm1GyHLu28xk6GSEJXpjiKi",
  "key42": "EZzjgL1Tf71hZSk5x8tY3mw2b7turBX2o9TkUzoZ5V6zRzRVZgN8raYF4f8bDEYRuXcZnBH8qkESub8Q3Aw9Bbr",
  "key43": "5HfAtLZeSbQijSZj2zXuGQLsEmXkbSGSSCnpvoygQWspTWhQHn5NkxG2qBfwZ55oTnVSNc1t7BaYRHbCCAvpK9tr",
  "key44": "3mD9KqonxibUERKnbMgm65dJRtorW6nJzxrsb4XAUWCsY8y7imTcrEaPGvdweEZaRoYxMUHaHg1UxwwTPNKamxLv",
  "key45": "24sNxTx8kt19eSh45FmCRxcQnC4doUaThnxSrzYAht2KKQj6gxbSM23T34zSY1cwQn5pLyY2U3nJj9SqZs21Xe3p",
  "key46": "23H1xSbPiJAhzxwUvbH5TFdm6sXdNwKhKoB1jeeWkY9oj6hKk913DnySoD1Bmjc18cFR7kVtVhUXh22X1m4LGbTi",
  "key47": "5k7kQW5UK9f9jVsBK8v5JwfequW9gHVKYc7iH7jFbqc3paaC7T3453KrQaUr3k3ETXQda34HuZjCPEGByGQkPrT6",
  "key48": "2mcJugUQvKDSqBGMNR7dn9tiRfoNMjNnYjtLmkzBav273aiX8vtNKNYYhbr6eTE3dWSBYBwTniZT78EyygSGH8kd",
  "key49": "3nuZdFQU6ysxs3bZCqj3tb44N1A6wAcUNNtnQk1x4TqySdDvaeWw9hxtdNUU8w7SFJTRZ1FyG8RjzjQj3U2dL2cP"
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
