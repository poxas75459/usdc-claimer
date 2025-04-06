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
    "4g6hcR8vgLJGPc3Jvvet5YUBU2NedwFoRge8B12oEvUJdTmCrKLxB6TdjqLPvJfc53TEPxfPy9w4vvCHXc3e6M9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2of7AJSSXxZLZA24gyswXMf3pSz8xK2oeDn7rvnWo3JstotyNs94PVupL4RZhsGyf4qbAsZx4GfGJkZvnXLm7ezo",
  "key1": "2WQtspZ75M4VUijTiS6oCQosEuXmfZjZZY9ZdEn9hnMwcoVfm2VRCboS4Wa1VszRoBbYiERNUTkKh5AVJtVBfCd3",
  "key2": "4UVtCWeeT4aAASW2C95E6EtuX7wJYxkuT6rSBwFogcFDbbTpyMmzAxrP8dWfZc8EQGmEYpFtZd2xr5RsKFLwJyA7",
  "key3": "26jgSgcjHwe7CKMHRkGjBWQyQjLPysNu2gfiUE45Nw6k37YczPM8joq2RvFBJ4rWyzkxAbz6cojhcw7sgRDp4UCu",
  "key4": "2zb6KiSuBNX3rbQq8irNQXZfsVrZNFVkvRupLv89Qz45UvF7wjSkVs2tkVYZmFfa4hoGSwojfyvojrCeYpc5Q3ju",
  "key5": "3pPtX6XDE3zPeNo31juZKqtoET9jjRaE7q1whRsYsyJ4y7EbxJH36L7kJLs3vqLsdcftyjQFQRCxRuyG9BTgf5Wn",
  "key6": "gggwAHsXn2BRdLBSGocC65DtCtZwrQ9vYHh3ZF9GJXVzPStqZyVanobzmvEkcxUWfBrk8x79h3LWN1w8icD3Fk9",
  "key7": "4FzbcABcmrK7GVMuo5amsyZre1qSoX5eXMJNZdHhxC9KQLe7cJqCc5Yv2YV5YsGYQuA4QPfm1S24iksquCmkUhsP",
  "key8": "2x7cjfZ9FrPQr1M6bbsm9YfJMgRVzt2C2qvmnRjhisGb2z3mqQYyeMcdPqd6JbtjYVrifTuq2PavUGbh7E9aWaEJ",
  "key9": "2sRF87KV3zEvZtfXsYTxCyVAnLp8VCku7AqfzqaQiLgUGy9wkrJLpBecoK45HeUPbkoDC9BpVUAk591RrVdFRMMb",
  "key10": "3vgTCeLubjHmoCSFZHSvzMVnD8xLYtvBTfM8qCBA5xfAp7BSpoKfAFvdvBSyk8YUDkRngMcCNZAYiBjbmGuHEuQM",
  "key11": "2vh6tSGXYXfzrX4Sero84FDC97PoqkNcbi56hdbRPoDhUP2A9NbTSYxcL1PXZjejA3NLJxKX5iDGwoDw3AwPEa66",
  "key12": "66mFckwUpvkcD1w5jHCZ2d5V8RHHiZHPtyJnQhy3Y4XCg6xbxEpoCvZV84gXwMHfoPuvjfbjWUd189YgNhnbrgLK",
  "key13": "49xkV65XTUyqfZpfhBrBxPcx69oNzoNsxHhoCqYkgs9ps7ZYZUadXuuaZJkUy9hj9T5a8WFPd7EudteEYzMxsRwH",
  "key14": "43ZvVCMWwxDdNFymikcYLe52jcckCf55X6Da42UKJ2t6anU4khwmafRaJHc83oEAgbTmPLoNhVYADMpRuPHoeXT8",
  "key15": "2EmbNsWuXwbWaKcdPizCsdwyLuUZrQS5YQJ2n2DpACMx3dEFtK9kwZxBnQ5miQY79VWsRwTqJ2WhfJXKCrwW5Xt5",
  "key16": "26hhGGebA2VSKXFH7qYaGA17dr6PWzP8v13KMeEZvmq2A5tKdyrPHEkUCz5Czzc3J8CydSmq8piFDQUahsBwrYZJ",
  "key17": "4KV3r5LZ4hG21hhXKB7K3DP7LrZ2F7WGm8uUTAYfmQ5jt6tdruTUgUFExCXFrUUmtbMT3aethyHsxbzuHxGCSQks",
  "key18": "5fFybgrXHTxz62256pLNYgUfWQXEdEE9Ykt9e8c6M7cWJHZH9U4kUQKbcm6iuv8xY67adJdrCuW6f1JjV7YUTgEW",
  "key19": "ae1RLqtUi6uemtdMZWGBJufXoemzmedAxSsgNt95VpHhV4SCQnvUHsDZAAh2qkTrnESwTQAARn7ZupPJzWSHw1o",
  "key20": "3DAydL7bWV5qh4La9HjzfGoACnuMC711cUMng5MZFfEi48okWvRtyfPZtREtBvi4aWkDo5EFDYVc2QbRVBqBrfeK",
  "key21": "3JNDN5UvkzEbSN8mC9MV7WF2VfPoKPL7b3Y8g6h9DsTrqJJLWuwUBCLqdCpoxNyihXPgGybgUL6Bv5stJXNC3fbH",
  "key22": "2jK5v4uCW4ug7bFF1uNatZWAZK5f2gATzQ5PfdoeBMTYQ8VgrQBh9Hm2Pmtc3WzCmQKrGVfVqxjxHfMRiDYtD37s",
  "key23": "3vSaqhfoAt3zMUyBvcWHR2UfvfzmQ8X13HPRsdaXL7AZeKuDEbdw2sf9Pi9y6dsKUSVcpwRzzJp1UPSu8e7JA5Jj",
  "key24": "2n3rqZcvrdXo2EeWLFNsY5ApCcgnP6T17w9SABiFCT2bSkY7SaGWj7BU1FcRMP2mkjmoLmabPCrdNAwL9YkAtQoR",
  "key25": "2eBQk2M6U6pygGcX8byC4MJBHk5gtNw5bmi3eJ6RRbiHeEVhwXkLT73c3JZ6sPeKTK65fq2fbNPKy8oZUNHJVaDj",
  "key26": "5VRnXcbhAjoREwF8f2bsX6S11PzCV29Dt4QDVpe8WdU163FWcGXg6hr1hhQ7LD6XiL68gzgFe62z3N2KKzDWPhpo",
  "key27": "3MWxSi7oEcBMLo9eVyWgR8Z89B9wQyTipksDTQXK5V5hwAjtEdDKjzuBALUuvASNdi5fh4bFCGFkzzfEAFHVsrCM",
  "key28": "47QNoypwMS473rHGMo1N2YB4EoCkNZkpCkafPgzG3jwzhEVnbcudJqwzRv62avaAWgQpuLZkAWuWpNj8AU8yEyuR",
  "key29": "58LuqUxtQFvrt8vospnZ1trVBnLmVnWmuAa2G1dBiGbAXgFE9sFWZz4ek7XoUoQHFLsFKA1iWLGRr4jRrKrSC2si",
  "key30": "2NyizFksu4egkwAK3qqPrp8fGhKWgT4Xyc4TahNyetDamYqn24V2z9K3bHiVkXdQLS7QYFDzjPKSmjJhZDueDn52",
  "key31": "4MDpAdUYgx8xLffEFMvB3aJnz6VAW6vZeJQSY531Kdj55sJwYTdbM4xbvFMAHRLZMSgGSw73W1davD7bswLUe4U",
  "key32": "2kFfCgt7fu98Z8Mqy5bn47oJrKiy576Fc123L2izDKxV5PpgTJkXsnLtFvv5RrHQN9K9zEomeyJQKtnfThrSGA9L",
  "key33": "3u3UEBTYqLtWFzeDDQLLThL3yBasz9JLfTqoB2AgdoL1NuTJk4JRtaGQUVVvCXSFL6iEYfJ8xfuUcw28u9mdQMFw",
  "key34": "3upTGmdd5RYasDThKdVbtkNjjBCAwJPRJuA1L4CLzxZTmq8Fz2Vp8ZpkjgoMdVWR4we6UjKhTh5xZKJ5us5SgoPr",
  "key35": "3kieqMtA3pawwVyE4vF4Rv9Sd8sTioxJkSyHtQ8GQATiBpbcM8rvbXrthSF6Fp5vzPMohgysXTpkGwzB1RA7WC1B",
  "key36": "Y3cm5C6xeLLRutcDxDs31aW1w4okSNdXoeWmr7kUGwACEVtg68eE3QciSa8PwwhWWBqoFyGxhHfpYgpwTkQf82P",
  "key37": "5R6zrsnyEw3qiWwxFv3Y6N7D8FmZRoZtKpskX9k3ZrzRJ151anmoQcRtMHCqEKzeHt1r6XtvTKhuR6seN4RoGgtr",
  "key38": "46BSKPUtJyZzwgYX3JmmrSqgBqj5shDw5CinDHwKQkP6cTMrySTioUUG2UiMQAYPcPYR43uhSRrmtN3uWSnCqDg4",
  "key39": "4NaAkDoa3Nf9MtEfaPvb2Qn4faLKGpetUiymfkFi3BJyfBwcPiGYQ35oSvJaEDhJjewKX1TVaUzgjxRB741U1Sk4",
  "key40": "5Roj7SBnPJAqeqK2G3SHEUBPQytX83w7D1KohGpvwetYJStEPMehnWretbf7SmN7qQv3v6q69uSUhYmd8JUiRNHu",
  "key41": "7TGm1aipgGGADsLng1jP3jtWfzibRGq1bE2xuJgnrjuXqYZb63MK9sJPouyTjexwVuyPUMmGScmqhN8n4GhtKvw",
  "key42": "2rXVMreW56RWSHvTyb9oqqmVUjjFVNxviK33GFLyKtXsXcgT5tZGtivVJnx41vieTRJ7m1eDCqLZTeweVCxuBXUK",
  "key43": "4xNihrm3WwZiDDiu3vvRTmSEg962aLSrxZytcEbgMVKLpMQjhkJP1pvUQ4NNRsLQFN4JJn1iQdiGde1KzzekZAa6",
  "key44": "2NFCBru9bokiXvLXiWrrmzeRFcr4BPPWDiTrMMnjv5DH1FbNq7CAMeQmxQjLYgpDGdxPDzTcbm71AgwdyAKCgi9X",
  "key45": "6Zj69ZRCjPiHLYc8UMUwwXcUT7RT7TbVz24X6y3UyzNZv2GB9qfncCFNv6E9oST6yR6agS7R623kAAybaBkyAE8",
  "key46": "2QGXGTdTsUCqzBpZezy16jRWfDmThYKBZNFnZwMh7TGDioZVHtTUJsAdrkvDhWfxBRGJSQsYu3bops36e6ScKjJH",
  "key47": "4c1iGRSHv8oPxadsWS7Y7b3gfQYk7y48eqtjK9SKBjfRCnKDAPJ8M9Mp5mN7rferEHyTKM63Wm4pKz7hY89rPp5B",
  "key48": "3kybrorfeXm46X6cyDBvAbNPij7Sdh7SxZxYCzhiZ7vwqTxqkRSji1qHWAkcYkGxsRMeUzULa4yAHJ8dK6241XB1"
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
