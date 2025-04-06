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
    "4tHyQVj3bxj9BdfK6TM9Fvrih2y98ChUvzLWgAxfJNR1Gw4ABmYrD5NzqGLEJyZ95dfVX45exrnnDebMGF7jENJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yUgLAefSvxVigovWM51cnUdRNqz5jS384kqoN523Gjne8fX24J5riqa1AMzgZVnEbhkGB3yREJiMX7hG2k6jPN6",
  "key1": "5PdrdPkJjwqL49D93EJXbFMzujXWeYepy3JgsaiJeKLtd95UgHq5cdaAGnQM2KwdZCNqwm1PA88QQYkknB9R5p5x",
  "key2": "3fXFfZrpNEnHxfwuwnvnK8g52VBZ4uPSU4mCJL3ZdhwvkdY95pJmRanWwkFW853q4FJ7jg17PgfHqGmRH5vmTvAE",
  "key3": "3by9BNkKDTLBaZ7etJXtiyT9GCJRSqGpeJqcPyRa9tKHnXgwiEnNAUyDuxzyFSgmiqfxvCL1HCgDQ6kHR2NHeiqZ",
  "key4": "5y5yVM7H8WzTgbzuni6Nw6Yni86bKhUP68USGfcWbvmuqG2wGvHPZbsaGe6R1gNWyQcu1BC6JopFLxH5MRcres76",
  "key5": "2E1CWpFfaC4RJ7L9rq1v4Bu5UhjvL1hJaJsXWZWWmLZmYosdaQiTwVVDXrDz1B6LKxqfJhrWkB2G7ofn6zCkRATE",
  "key6": "5JJrmPePrFA24jL6zJ5eNxmZ83WywsTpjXqWBuuHL9SU8Hr4RRD1VRTTxcYnZGv4eWF8bsqLQXEJzWnLDzH2XM6b",
  "key7": "2TzSF9ipVdu5sywghiWiTVSk11aCRKyNNdY3XTzWXaj5xndRpyjM6wKTm9SxAjH5tSddAveb6TnBcVzA5oafv9zj",
  "key8": "2KAtUMW1sjoeT1KceQR3qYWhwTAHS9U49A6shLKhCUL18pBbP9ugS6PauxaTygLK9x7PCTsqJrLgHHiKgZui2n1N",
  "key9": "oLcwTiqaStBayTe2zWcsz8rKzL4M4h45tgKBZmDnpRVqbh32daZYGKJcB89DJ2ZcWrikXsaSLE2DCu2vyWJQ287",
  "key10": "2wZXsxn2UoFTTHD6GJHWJka6Xx6wGp923fsTzoXCezqsS7AwJk7otYTHczjPtuZAGGYnFSh6LENT66PGWGfmKYhz",
  "key11": "4NxY3bAvji5LadehA2agCpSKUUZ9J1MnEvJ3eG3T6JSRqMfvQSGvs9FpwmkJGF4jSryLm1pdDJYjTLhRmYsuf1QU",
  "key12": "25jQS2ERXZV33KZZpYDajZkt7wUfcRMKrDjCqDEVLjzhvcE6QcJLskqE5eV1SWGSuZPG1FakT7YTdzxLXfPy4NrA",
  "key13": "3fYXN8XhUVx9LQM8oW6BXJwK5CThoAt9CZjXGHYsiRbUeHuVEHvu4BDUrdRXtdEdMABpDdAADvxnfKotR8AC2wj6",
  "key14": "2yhb8Va7ExWWqKXQZ5dD3QQufZZPwHD3Yt2uo8DSXPyTgHNo9SR7B4oh4HD1PHoKRjdMTZtM1DGruQSJWhF3hpQD",
  "key15": "mTBzrSAbtvHzXRscoABCkFAewgX9WyPUvYRkXj2RCEkXiMJ2QLGfgEe3URm2jj42RKYLoWEYzT82DoVeWrVrXKa",
  "key16": "o2ncz37pR7B6FTDEEDHW8hhEJrXvZLK8KRZHs6odLhrkCMf8ZwvKgKmh4kXCW4WDu8URLcjR9d5PaXV3VngtjnS",
  "key17": "2wdfLJR2gixNwYTn4NhJvZBfF51hr2KCftMrupRZ6hhoTyMjnNuwK6m8iLoNeVWF4c6SYF8B8ectXVXj7LhoTxMt",
  "key18": "dVd552oa39cFxa6ZcPgh4yMzMsec2ZK1819KYAtKzQ3GrEdRDKAGV78thvYPxwPNX91dnKALaTzWj9m9u28xYe9",
  "key19": "3kAKV1o67EnBxoLkgvtKgaSycJySAHv5t7RKWQyjXU7RJn9bvzsmMmLyopFjPcSUX7R9FxeePDEk5oo955dVfiuZ",
  "key20": "AaofoAfH5vcX4ebAAJou6S2VLfG7N5Kw5XiF6Jd2SiA8ayMWHGPteDqxm2Qefo8pqwQ14yghVaNUHYXwhnhs79v",
  "key21": "3eGis27eMUzYSZdfN14pFgYhDawSaua6nmS5AtQwjDgfckQScG3z4Bu4jfCF95zR8tcJbknGvcZxCg3zK8nb1Qqo",
  "key22": "4J9MdeKV2p4hG3wrkH2vLDy9j3vHFkonPLPZc2bbaUu9kLeXfonAdvQcxXvwAZnTmW1XFANsKaG2DsoCzRjb6eM2",
  "key23": "2G1w1jaXBPeg4KjV89SfFijEXQ2HdUuPRiJ3rZkPHbpwt5ujatrpu6BungrwhhaQmyEWFBnrWirNB9kCMNKjgZWm",
  "key24": "2rdW2e9cZQDrzNy4c8THev8JWNABbBuHz2UUQHC4TBsK7M4HhsFp6njnojySsAnZ11DskzfB3x5mnzUfSPoxTLCt",
  "key25": "3G7V5gski3FZNm51WEdKc74hL4EZ4LejuvGsR33AjWLcubqifsJZPbmRGP21M6a8u9uXrL4KNEJgJeG4UUyHte1w",
  "key26": "5ofCPU4puGiBQEfR1q6UxhNeR62oz7mfbEDVyYtQpzcF5jCVnXPChhggUb1xG1S3a1mkU7xUrtMU7qq5b5ifCKvb",
  "key27": "CigKb59XzQuE7TbPRg7B251sCRpCCEcWnTKjsKK7Tgrm96hVuX5V5n8NDzkcUzrGhAjEiiqdVMwwtg4gEugctAt",
  "key28": "2D7kZ39hJzqmLWvAEcNj91oLvFhc5re42i7n32MTbYfGXuBmBQN5njwkuDYRuxpEo86nAvUyVTteT2wxptuAsL3S",
  "key29": "2KX7WPRR2xTy6eGsf1kBSyAjj5T1nxHjNqSggMWn3YGSSENH6JUTiFQJ36DwaeX7ruXrYbaSF6esqub3WNmuaCRe",
  "key30": "2geYPbBgXQ6dxS4w9nYHy75jor55J9ZuQAZfDcAfRFE9W44gm9Ga2tRxTjJnS9WFU6bX13RtqX9e23qY9eqnoYhF",
  "key31": "5Yhy5qHY7Z4VGjXpxdrocTSVrVZt2Wayfu7SVgghQukTTASdT4eSdGYCRo5zgp9rnPitL5dBXFedZiUmnRxvZ9oZ",
  "key32": "2188NaEG7PVPHYEndPMqVP43wFEGdBdYgR1XW7GGtVmooM5LokaE2KE3LbqLpLS4jDsVnC1qnJ8zCaKFzE5ZPjeu",
  "key33": "3ubZpq6LfBEWKNQR9j51ua174sVPXYc5ydgPQdX5C98iyBpn9JFHLgexG3zGZFk7kTQsxn6tG9qo4wESckNYvssU",
  "key34": "5xiDStvAtrPQFEES5DujJV6NKkJP9hfPdMahGbFHuwruHdRBZURYZ8Vp6fgoXxnqhQcRpNRa6VbDi1ETogToTsrY",
  "key35": "2F2VJTjCWyt8pzWLfziE1kuakT4xQ4UPp6ENSoK5iWLpZEy2tfLLvPrP6pWRgaBDWMWWyHKkY3JvCSKUTwjY665c",
  "key36": "4o7NpMZhzp2Xkf4HepkmHFDShF6XLxPTxoDow8KFfjSjt7LVJond7MPU8SHB6KWFXfnzWjosm81D6ZT2m6hgLgb3",
  "key37": "C3GYPpyriQE92dKsotWtkefHugKQF4BLfDw2DK2bqV4xS1o3ru3MYdFCf9CQo8t3tQ58YSwJqQ39duBrp9Dac6o",
  "key38": "5ELy5H3RVUhRsVXxQtdohmK71LR9DrpsnfRvi7dsn5QDwsCchQfWDhBfeT6xUZBR87wGf8JiUUi4tuYhmqXkYv8a",
  "key39": "3Vo4DaGTUx8NV6gJEWLJUYr9jtXXn8cF4Y63DQPqnvr66NhiwhR9PoMDSfA5N27hehRhk4K6BTCAomaLLVFpddEd",
  "key40": "3WLGYg3SvDMwQx3zVWK1DRCfgmHAE2jiddfyY7xrWpkGcSZfMugxRgrTE8mb1CkJPyy1tjZwjBg2igyUDhXzYaoS",
  "key41": "28KXWR4VE1JEEookgxFooK3mzJ9JR4RzP3rzctwQZ4tY3jdJrs9tGcA1NVPF1hevy1yn529MKpkao8ZczagWeN1x",
  "key42": "4bABnKb2r6XmNQxdLtzvsWxEB9NY4XRBVRPpf5wPGPyCRD16sbyQ7Nzi5qJ3FryBxyYxXKVrja76UQNzUAAwJQvx"
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
