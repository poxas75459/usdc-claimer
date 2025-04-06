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
    "4cWYvFRZnazfXA2GToLW7G3yx2LVkzJE8TBGTeUHVBt3wUp4rMbTRaxYxThN2nL4WuubWmJhF7JsxizTm1pW94wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t1DLRcmoYZaiog1AV7VnfFtoYmGadwUAcarBfd5iMt6w7ezud6cHHc2diMFnzu3kq9XaBqN5KVPBLde2JbsY9P5",
  "key1": "3vLjGqLLjpZaYmCvB9XU5wJHpVPh9Zz6vDqDpverywoXS9CjbppcJmq3wLdXRq32JQqpShnRE4jDnxQBMwxJ6G8B",
  "key2": "2V5fa6ykiLP3i9GNCWMY2pzVDgsrcUcG3MV2eyKrWJAkRztFX97YsSuNADadhKgCZFQrz5szH26GMU9m9Po2CubR",
  "key3": "MXx8fdSz4WsuNoPkgVLNKXBMft4ibzo2FEX6mz7t91nUuLLKvYMwxbeAEkPFLnYdzqVbEP8FY2E7fUz1mALnqRF",
  "key4": "49G9wFP1rw2JYuo2xnyjeR7VHeHFnPjPuddoUbz4JFrdU4xEKPqHCZRMGxEv9KwekoEXGCVyxP8hxAy8mPNfknT8",
  "key5": "27fXW5dtFkb511JzBtfe1NGQ1EqBAmak1eX44bXLdAPM76kEPm4mAVMqAHxKSREBY2nh3u92S3MLWQ8dqzwqgAhY",
  "key6": "4d2vhMU6qoGn8f4ntwtBK5M9hVQkk6LPHRYSrdhVvznYRuiBBEtZ9VWJPRXbG71j9nadEsoqnxdacKoXXQQCz1QG",
  "key7": "5JJeofyph1PEE6X68FJBCEFTwznV2L2w5qBR4TkS7kxaBUmTumdwaMLhnpJMrgQdQCCuDBaEKSnDfAiaUxewSWpw",
  "key8": "KuUi7bbUmRt6q9J8DoEVsvmgtfmQpNL1WKDKuZQ3HCsgNpuoa3Lh4iFfivpWV6Mi8GUwu1QXKYahZkZnJVizEqM",
  "key9": "5WUCVyGCFxL2MmNy38CLWiiJmcUyJVkEyepyMGyELRjp6qCfWHuWXPC451Nh9S5xgEfoc3jheRqxc4F3hABPLgEr",
  "key10": "5RWNnQSkefMxzTCn4yVicqjdV9qM7aoYjkiRo3h1xedisCaHTSqvS48tgQCiVg53DD8hcnyRzYXDSkN9MzDkzU48",
  "key11": "3P9BTpyXGB2zdSSXLybiA418ef1VUke8NnWpNey6vywMUxvmi4ft7nB5Cdkha5GjWYbDnkMGc5SQ4bUCaVK2aFRw",
  "key12": "24XqN19zpesSCKExMwnxfcSNmEzGVnXPDvyZ2SQmJqzCnGjCNU1XaxAUhDd1gdygmZKJ7jL9hRjjGruZBmnAwr8V",
  "key13": "47Hf1AztrDPdsKQ1kw3qByZ6gyKQairDWRLPhAs8zEhsDU6JAYqDv7Csvutrrz2iqZ2CgzEgGdSHNThbXB3Rq9F2",
  "key14": "5i7JnwBSbisNF6v75J9mnJTbpHEUrs6gpiDfZu4EtWQ6R4ekEMhXhrD9w8bX9iycaJQKRS3fxCRPwR26LkButJsX",
  "key15": "27TRj77UCN345qAJtnAnvL4t8PsEKYqwL9BiLrNM6V2UMFPxLfs7jMCTP7SyFMV2GrdEeqtRVCfpospvCWY8e5VU",
  "key16": "26UhTadSysiwNAvk8NUqDnSZiU6Ao6FFp1hRcaur7VHNReuXynN4jG4VmJ1mULsXh8baYRHrMwqMDr8beDj5n5ds",
  "key17": "34pMrwNVerwREcK3K9YVR5tA1MazjjDszt7y3o6oURWZGWjSJTLhYYAhn62SUcqzCEQFBbLSjzMLjDoJXhU8cB1A",
  "key18": "3Ds1phZMKMMJLiXjaiQES4VKLKSUvgS6Uxpysqvcw2GRehqsyhbTNENq7uzxho5KokrNY6XmJamsxnPhUAdjLoXv",
  "key19": "5Z7jv38aFkBaJBFJHywpaCMAbSGpg1opq9tGgSphYiVkkkh7EazomyzyKA7gGRyz4whCovimd3bu11pMS5sV3cU7",
  "key20": "3Tgf9H3xax5g3LyAFvS9cov7mSm7CZgVta4YopjitSbmdS4BymprgGXNHpHmx48EE1wb6dMzopsq9LrRTYjYyL2j",
  "key21": "VNQmKD28QPjZ3EnoVKUPH8JVqGGom83SZuXwhvoNwqVtarNuviEVU2u56GycsXrDM6QAzAWuXxFSPAZ4sZ6M3hX",
  "key22": "4KVH9wi5vnEmgaYL85Xn6fdMrMbNFvFNk9LxEMCnXkhSXopJw5umpx7mES1XR5JekveBpKAehJPKFQmQd4LiAx1E",
  "key23": "5npuadWz8Rm4cG419wPR2crz6iiMAV6Wmc1Bq4XSExzLuxJ7bt22fWZRvM2shQPMWrYXTAwQ9PL6mx6B6Z7P4BVE",
  "key24": "5rpbShmEH2EzoSF5qxpYNGJGh3jtKCgkkANQRkLXSExetzJXYqySa8mzjUWf6kffDvgpaX676h6qGC48RAqKnEQJ",
  "key25": "3wuaRAWq4Cj12iU3cRGy3kbQncYp6Fp5S5CHaZE132yaEekpCZYWwykKyARtSFstBDhm4HS26Sm5esbi4KrQscvF",
  "key26": "cwwTK6DnmnKPkVZQy3UX6sw77uh5dtPRAR1x6Zd4844sNR2gdCQgFYQQ1uG5jWEzi4ddsNZGtQFRaVXrPgVjGBi",
  "key27": "4XCtqNGAj7yB3K1HySEkSUCw3NNc8jZTCB32Xd6UZQcbdudENvT8sXa8HP1a2T5w7eSynANF4wwsvwaSRQRzkTVV",
  "key28": "3z3Thg2DKXej34WQLtpX7dMVqgXSXhLWYkqjiJJen3TkRYLqBDDa7AdBC9eLqyD98cKuC2WfaV88kw9N6k9PwpcA",
  "key29": "zQiMJZ6aMMpA6EhwizRiebexZB9XcnkuZqEaXkJ4T9Y2RCzfG99ghwxSiDGn8fPGSDE2n36NNLJzjduJ1oYnYsq"
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
