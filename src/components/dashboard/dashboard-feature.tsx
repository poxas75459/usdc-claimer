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
    "3isKHhNPWZZB3LEktQLpRjSWb1tpQUUCLXhyBgDrEm6JYrWyapSjn2UXR5y5KosGtWbcxLYaVmqXArJsWB5tsAx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AJKxoCd2o9NyK16NTcJkWUBxRELhv6L9z3BfbKsR6vMttyz3KppyZB1wPLFozWg5ZG9FkeUdcWtTVV5EXq2VaHY",
  "key1": "zShTpnRqKo6McAy8wxXbHzw6r7tjc6AntQF41nZb53gqWZD9m1crBTRdNfmgxYAzsyV7mURwRJzjahy6fYfxqg1",
  "key2": "2FSknvhwTmbfwoc8jqWzGPhqHj1ZeeefNpd6VBtjXX31Z5qSG56FdgKA9RMM4yMdst2MzF3SpJZp6Ba1J8TkDzQw",
  "key3": "XaiPBve7kemxz4zabRYKUZv6cReb3iaCctKCxwJrx6sQhGq7ARmmpMWYtUv5VjHjqk89WCXYbnq9zVMmHcD6JNm",
  "key4": "pfHfAn6DCnUANyLHZHM818spvGF8Zq4t4DFynvMCebuTZmqzN5Q5FiKAxeRgZhAYAv1k5Bs7pc75J8VVeXpyS1r",
  "key5": "GUHJeoZ2x2m78hnjHvkvBycBVxGcoX3XQNRmQCQMC2RRhEjdAASkZXMVHRPzTKmB5XCUWKLMYYUn8NiRvp8g4ky",
  "key6": "F83Rj8L5Dh2SEDmcTKgL3wu3mUAmUXv3WXiGYtks4cMLtNfu9ePJbFhANTanGHakDBNqAf81H3TV5p85zKvb3EW",
  "key7": "2tqrpvDosqbmT9ELbi5qxTFnnGu1b1HE1ru3nfv3r2v8Y8ghwJ4pUZouMecPzUtxqqxkDTLVfYfXi9ZzubMceupL",
  "key8": "4pjgdVGKEgF7KqwAWwQPgmuAN7x7wh3Yg1oVuegHBpxvA4botrKReoxXakVePnjynqrQ1TnCMVe1AYnEeaXaBGNm",
  "key9": "42VaLPwbTtWb4MHSDrDiQKM5Psye7H2s8AETv6A4kFDpYU13E6BWqYaxEvE3TpQVAda3vG33G6HiLAEQBTXEYJdR",
  "key10": "3TWAekcdmaTCGPDd2pac6DT8BsTYMeb1ff9ruUnZoFu2fk93pqagSVKFVZ1BmoQQuXjk2KBsmbQYQx9aq68kJgwq",
  "key11": "cDYvNMd1snuev8PWxLyV8SE52uGf7ddRawhkbg9iYdrvHn3osDZm57Jr9p9dRo4JLXVNiY2QmGFegdi8Zp1Hixz",
  "key12": "y3hhsvgvkhY9NaCpdk7GpqDFbFWXMjXBW3R5cYcc4eaMw8HyVn1rHWVwNQQFibGvSzVXhf3gTrNfSAbB58jMFsR",
  "key13": "2GzYPWxtiaJwrf1ikFjreTaVw3rdJBjGn5SVqzo1G48rqV2F2UHxLmdQLC4ztsoZth76KxzTVz7JhCfENe9bp54f",
  "key14": "5JRCnoX36RB1DrY3A4dy9Fyk8sA35FNAERwwqYZYtzWpy52tJUL6Vh7gXuWLn4Pno2AvP1usUbxLM2zNUxLaanuR",
  "key15": "kFaqh3DzvvBx1RNSsGYiDiXWrHDKFFws3VVz3ZNTz8zsZM7J8R2je4AfUCJcm3J9rRmzqHfNfNuuttKGZMTorRQ",
  "key16": "wa7gbWSBjMFVrfABMCicxCqiY1bw6vdkgHufLYU1ZhyDnvD9AhQUNNozCdsviKdbVpyyDm5QS5KYSryBF76hy4F",
  "key17": "tYSHaYLP3AfsnHrfEUJwPgcioSQmsznr9B6vvTZs5Jka5aPadQm6uviedJxq4yNeoETLV5G5souHykhKThpAYN3",
  "key18": "2V9kNuHkMeTkf5sVdi8ETxFEfea8bCZtvyRwypfveEz9sE8RxkMxz3wezvJUKZaaMhC4Udyegb9B8rD9GXSVSnR4",
  "key19": "42EGw4JDBFgJijcJtyHARgPfuCm6K2fP6rRYdB843x34c9vcaiFCinDkVQGUjd7c4MTscTKjdRsLsfruF8svg5P7",
  "key20": "2q5PnMKe4t9K399BCf2HBkwFY6Quwv1R64tfrn3ewp5iDHQ5pcRHr3wktpLhrdCJd7d83VqhbmJjb5VVZLAp2sxZ",
  "key21": "4p9hr2MqPYtHMAyp32vtzhmhA3rp9QmWN8RdieLdu2nZiDBaLcMDgkuPTWzoPoAFTRQH8D3gYwx9K2c6fbwL9BtE",
  "key22": "3A3TmiwZZAXqAifPExVzR9GtQmU7Zy3bBj2HWqaxjiNcxTVdhy1tpEcqSWBBywaqaJ4mGQoMCWYHRLWLmNJDdFgs",
  "key23": "2Z65R2uwvpABbXHw7Y6VeG96MvrTPSJGMbkpjJLmgtuWm1XHECG6CVTf6dxNpHGDorEcBySxdDUM7iDTkVzRXmU7",
  "key24": "4jk3CwF1RHbHiLf515PZQNZnLStDokRVrcZ4P2JK13J51YCXA1ByFCoqtfsN521RkmmbxuxiaEJYRTA11eHh5agh"
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
