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
    "3qmP5JZKbdavR1WUPnYYVsn4ao73zSm7ZGUvcPRhtR34kdWEjsA4yFXhaMgcmTcvmdyJWRM9iFCvm4yqNSEZeTTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iBGnyKtdbQrUxMYP4Rec1qx9946viGqPHrTdE3kcNNQC4vjAZAc5FuoBLQoKcXuviKqDaJ3Bf9pf8MMuBvRKukb",
  "key1": "4DV86P4swtfQJa2GEyTT4SVKCoFrM85rZLNTQwv5jyJmvjqDSgtpQzKP1AfhYBPihaJxe64BhZVAFijger2kWc18",
  "key2": "Dh5Lh5ASnBpMv1hofHpATpfGvbFch7d53iD1LKfX1aNqt9c5JpXpNQBWcZMsTpVNvudgF3UVpLn6tp4zSe5aiCs",
  "key3": "28Eko1eLybXYji9S95EtH2Sv2p4xUXLm2MbRzFkWBRNi4yk9hWPaMx3ixPUz8r24udZJUnRE3bZ1u12aG2Dif5T1",
  "key4": "4ataSL2viZD8HbkkB5j1Jef9fqYcfgivuejNwYm3TycT2MMRwZC5tJMG89uSR3HnUKTwBBWVbfNjNLBudWX4ZR7U",
  "key5": "2PvPaUGT5Eu7WzP3LPqBrFxe3CnpDJz8jotqa3888un1QMkA8DGnydUY5jdhs8eKhW22AVVMRYtE6yck4eyqYLNY",
  "key6": "2pZUnfMkWTVEJtmK32r5d7noTDq6ye3jFo9p41VMLuoD1fHrB3gyJoeyBXmsmJRreX8a1p9MbgwWFbqX7JH6Sf1M",
  "key7": "5V3kFtmcvpASrVZ9EtGsSfBpGyJT7ZPmxG7CwozXchjwNbehdaCBet1KAzfVSSDaTgbYCvsNiKSgqqQu8MJK35Gf",
  "key8": "3FXe4keHRrRvPrzjarEU1aZaPp5KSbWZZ3MdecpyX7CEjke16YSGKRaAQRQxJsoWhnLxd9jmJoatv9eRHJQuHgKB",
  "key9": "3JMzK3ssfwGiWWFTkAA9txDmJTVtxfrcK3hsLVTRLuBQVCCR9qB2jsEnWFTkRJWvMXjgWdyETnUkbMRC6jqocX5e",
  "key10": "4P2K3dxm13QTm7KbWWxdiXjVQSidUq4xf2WFKeKzX8LFDGPsAW3gb8oM1V1hw8qagXAmU9ywAs8VRHVQRFUASrk9",
  "key11": "5ypEof8XZ4tqvv7cRuCQQHD4L2Ra72dx7yjHf6ozuYFC1V1Qr9SvrMPtC5WhvJeBvHQebui8RaFNwEEFGQMzUkr4",
  "key12": "r6ooZ3SwupUBff3FKoAT9zERuQnWPR3UPY4bpKRZKszkxCAv5hFC4ihcn5JyjKK1yLJs3BfCyHBzXRaj5r3CubN",
  "key13": "yHsQZU67fbokXuLegy1UShT4FxLpj38K36RbdbB5tvwVD66jn5aLmMhXyGq6pxYG88hip4DMKAkzhbSkidZk6MH",
  "key14": "2Eni1n978uFyh6fZH9cvDsZacgfxyaiws4C3Ugq4Sf3AxPgSsdbwxg4k9u6ZUXkZP7wwRjqSQUs8J5Ymz3yHwjYp",
  "key15": "5hvvaiQMgC18boXWn41LEjsy6iD9nLQq8cBkpJk9sf6Qz1TqngvKQmZ33h9Kv1akiPw3DQ27jMCYYzyPEa3DrBGG",
  "key16": "2jpj58CsQ8Tzr93TPAvuM1VJ6wZfW2RUeDrBbWi9mZTF3bnvixASHZTXp58UpPtG3WPGkQ1CFBCBQ6uGyJxWTjD8",
  "key17": "4bbBaieq9R7fJL7xdxWkJeTAJUjBujWuNkA4pwGtuEzk1b1JxUFDjnwfoK96mAVMA2pyEYfY4TeNrWpXUW2QptUS",
  "key18": "343neMmxJv63L8MG6DkwNLtRSAG9cYiaj8633HXGgNDRKrvS94S1VzTY6dKHMqTqJH2gJTVPqxDPTD2if73cLuzB",
  "key19": "2VuSJBpaZCDJastCn6UFcF2vgorabdq162vJRB8S5NCugywJ4KQpq1527PeN4KKru46w3jCL7YWvBNWE1cducp7J",
  "key20": "5Gu5jjTFwYPoBRFvhKhaNfpkqt3isyKV1TDNuaWLwLSWFyx2zpMWpmfkBh324sqrksVkbpLYkGk1pM67WXMEW2nK",
  "key21": "5TNS1aH3mFaVR9L6SdaB21uMyKo2thUhvmoYyL8PQVHs1eFrxbnYGM8bCZF4HVj1taHt3ERufbpSmqD4hUnte8dW",
  "key22": "41Ud96yMcwf5gUi8Mm4Yet2JQ4QZckvVJ5UJuvGyR1ugAHbpbmQ97fdSbcRs1CaumiKMGyyhmnkp7Qdh9qTWe7oQ",
  "key23": "5qdYqStZe9uZtmyz1BEmuvU5cWemMny33YaU8m9Gdr46qoHhRmqe8QqXhpJ9oADbJ2RvZhhEhdjs2rn7tRBzQVkA",
  "key24": "3qy8kuBgy7geBv2Q4wXJU3EsRZVsQAkt9ubNLqnjJuy8qGkPhwjn7Cdi9a82C5PYH5iKNj6GEE7rKYziM6jZyaFA",
  "key25": "31ng82mCZ1QUBV8japJV9RG8tfVA2zpS5PBteaHJdGfRVjooAirGHTHKw87VzLnY6ps4rvG96ifnn5ZqtDp755y8",
  "key26": "U1KppFLyJ31RQHmzhwsfnwtbAweGQFS9s32F5toCgKGAc8EQS2jVMq4bXDzgz1fDuNRU51oEeFrCAnNohWdFSTF",
  "key27": "5mwE3SFmHBc4evzYzYFNBQHKTSm2jnx74jKbTQnQtJrhXqSLff4r2D8qziknwK5Cw6aPYePi4dYuk6VmRv2kPMgH",
  "key28": "YCY56PPEvMijTJU4X7UAk8FU3FfGMrQbo9NNAQfxN7SrCEXJRtqpKCLuDy6yW5uhR2Z6bEqAsMuJtK2vhmBFbhR",
  "key29": "5fZbxm6Wax4NThBnzQ8UT5NdGmfqbdRgfrLFzdyhRHcK3kB5vRApdHeuRHafo1iTBoHuAjBoH9SJHgYi7FeT1YSP",
  "key30": "3QjCttCxZX1LV8AGbLh7dsn9u5p2rnXvBKXhPrw6XVD4vPToo9sfzgXX5y2soUmkwtWQEvXkVUeDra6AFmzdaZJN",
  "key31": "atMZycw9dDsE2HFNF1CnD9VpVZzMxeVW4KyCMakhMb5KXNSkZyBHE8hMwoVKQ2eTNAXVVmdcmejPty5z6LYvZhJ",
  "key32": "4UuTawmCMY3yELiCKiXZG61J4iUN9V5fXezpNWSPNoAi6GfciAQC1uMMyHcNum62ygAi6j1KmiCjHNpLQwHmwVFC",
  "key33": "3evKDrcEj5TvoeYzFogmTDHaxg1rLqdaRHsrz8irQN1jGbt2YdeNkPfqjiooU4eMkgk5znSnRw5wWwnTaLgiVVAz",
  "key34": "2wye9v66GQQ1xgTUGqSFDHAH5pATeVs13ex3DPwNVEL2QYp6pfnWKL9TwiHwETEpYKXrqk5e9NyhjyrQaRQR5Hzt",
  "key35": "5wy6FAj2u1MJPFmit7zsYxb1arxRuquWYpdaUvy6KmqXLmDYipJtxJ9BNmqyVQzqaZMUcebgcSATW2fvcd2r8qec",
  "key36": "4L8ZgpwAaYxB9yZh6x4ETuBzfNXDxwUK6rAunifD4tQobqMbUJ1GAfFLRCpq9HCVnTB1menczaDAB1cktkZfB8ZD",
  "key37": "2LxeMUzoSmwEqqPL8jsbBJ1wgGWswwvmK6JyyX6uP2gehMzNfafGhvecYPHpTRUT7BnoWvpRNmEeRfquhT6Ltmmi",
  "key38": "5CXDRYztPYcrkhPEYm2kvpktgMMy7MdwzndjYiT4DPUh8LpDTLPjEAzn9aGTjDofBrGDeMDfHSbZcQdEhTRcoZu8"
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
