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
    "5jTHKNAM7GmWr4LxWtSAdNbjBEzFGJ8rH9XbykCjWGeMa6yEfF4w2CWZ2dAcw5xevZ9cC6S5FXpbksUWxNhH89pg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FzTsjuBYLob4xGnWV2eRjTobRcSd3be3a6MoXA3VhmAqsqSYxdWmsPb1Y1zrLZwAdNDWRG8zy6q1Lg3AtE2kut2",
  "key1": "4iawUAgH49wcnqNu9WkR1vF42KMXFtNYSfWNiHhPH3xwXE9GBuNPSYbQyvsgmnRsPmMyzS9UjzEV9743R4E6Zr3p",
  "key2": "4UDagnJQFeN4PL6Zn3G4ziBCWzcpN1xCb7iYYWS2uDULcwekodVC2iqtnqeoq1QrpDEnzk8kwNtXenhi2WyQAVZR",
  "key3": "FMr9dqSFmNRcSBL95wED7AvgAvd7yHVt54uBdKhi6UPukRJPNj2tYBJpkHGpJV9xTsrAZQgKNZDwpQoUxB1WUJM",
  "key4": "4hWRQrDRGKcdftp6cNx13EHfUPov3HxszdDnDR2JUgK9hovLe37YbomfttLUWu1MRNNL8dYDB2Kpn8b5vZsWrsoT",
  "key5": "2qps3xeRM6sG1pCS3mscCk5xbN44bSfQuqKKSDYhhyw3tpYviwffhLXnESxNCwmPA28qhWSP9uQHVhF4nkS4kMfW",
  "key6": "qpQVxDE6NTubfaLYDvokQZXfKBcmKct2MjWQJd6CogJLYKneNJigspMaF7MsFpHi9H1dMJEchczhjsvdtMX5eP9",
  "key7": "3PeH34M1MbYhg8GfPeecuWPEFVQpKRfk3JDotWVcb94hXPWuz6ykNZdbAGFpfcxZ7FHRgZJ4jHedkMc7R44ZJrzQ",
  "key8": "23YKj6DjBphbKnoEU6gqECYpyeTkqAYFa7oJnTJ22EssGpuzEgAoodpmSd97NSovKLyantcUHuRdDV9veGQ4Yb71",
  "key9": "3fMFjNsamuSiENXCvEUioMrV7hUvXUEcBhDxXsHUhyXyFTgHJssqHvSpZgRC2Rq5qfcrJChHRSMAX6vcuzw2ubLz",
  "key10": "5Rxv7z6FCzirxppJUPo3NizLv7tTYPih5VwPPyn7fDJzrDKam1jVBUwsPbP14ThJZYB3CuH3hV8HpipzemaWm2vL",
  "key11": "3zu7zV5wDLptA4onbKqD5w7YwAKq7WTfWpY83Kyx1n587oMwaMk42UcdWGzrr88tab3CG3vKUHY8GcjbbrvQb8Ew",
  "key12": "5uJdK5XsQnG1kr4x3dv6c9XQbABuGXCEE3emKnP3nX8RuSHB5URVyvJfD3VH5QmDnYdA5mNQ5CoN58Rwwg5LfsYp",
  "key13": "2QNMjVLB42379wSP8AVKkJFFdv7MficPy462cGzZ1WQ5cGnVYBN7Ne8iSZ1xGbsxuxq35VmGi1naBgmvqfzZ6g3h",
  "key14": "4wZuBrGcPWE9SKyUGv3bn2PaoNy3EF1UT8MT2ANxnNDzcUbWNWr7obiydE9pip9VPmXeDc8Ktmto4Gp4mW9EtD11",
  "key15": "e8LvUpfMtLhAQ4UnDEHhENXQaB1dzmgNb6Hn3zYgVp73LPNwKcYyBvrENppSfJDCz9qTGbQo9NXNCGeb1y7SJea",
  "key16": "4JvzQapM5vqtj5o9urSBQbnCa9rtNj3KFzTCuco5UsnZC9FyPh5YWoZf1TLBFww3JgbhpbusFA5TQtRzPkFwn4jc",
  "key17": "2217v1xnzSVqR5vceWfSibNmzvj1x5JMKnPiWumTjHAGgCLVKhi5H5qvtHzqbAd5Ux4MXWZDRADtCaZBf6r8VKkz",
  "key18": "4m8rTdL7hTS85Xs9W8Y7cYMuSo1ENv65LzpPN6JFW72GXZFgK4BZ1shcbFSx5fSaJUEiLKXGDZHSH8tQ4SsHQhVw",
  "key19": "2KJmDD81iRT636355VWhUAjiZv8dWGpCvyyQvuFnqJQbhkafQTZ27WdkLfXNxo7cFKTPBpaKLKHpaeBpHFUNjo7A",
  "key20": "3mpinDeA4iLXyTbCbtmjWA1BFrmwmSKhRPmkp2gVRcHQAv4v2Wi7Tijr7jhqL7FAzPneDgXz6kAzMRQJoECV43bu",
  "key21": "1pjtSFZtZFx19n3U1AnfCcVnVEEF4U7b5xqYu4pYYBK1imqCxehSafTHMxnqJWLPtreqwMTWLKZK8Xj2hHb8ukn",
  "key22": "4JREcNVz896wyM18891da1WHLR7xNySycC87UyHfgY9NArLVFVHUHR1jF2NTFX5BHxVWd1hPxgsv5YRaDvcFYvek",
  "key23": "28MtUjHNVC6gksSHyNcDT6XetS4fqYk1VzaHGNYtaQ9uDKwGbxHUTbLJGiERnYz3kPCo9XDuBvUtzSbUPHY5w55Y",
  "key24": "4c7KD6cBPBfDvy7ZeMkEpb8ei7EUM2xs5DffFmv8UagMdUw27iN1iLqnLWtNH4bjt7YUZ44PkxiznbjnPzmipbNk",
  "key25": "5wmrSMAGkppkExuKhkhb44aSnFQMDHnrXTAMLHcqkfg6uEm2xWwEY1PpatVCGwjm3KVn3coAQRzgykQkhYeMwqvA",
  "key26": "25faGUmBASbt6Wp8xTBFMNoKzFoEwvVXEAZbU5dcoeEcsEVJBvTwTmYsfgpkqGpSJUF3qaGi768vawM9cVFVRhd5",
  "key27": "biueiDM5ev8rrQppmfLYSf28YQckBpjGwor9vccoaguiqrWY2UqVxwcXfUq9YpohLBZqmLPUtDjkr7nitd6KDhS",
  "key28": "2F87pG7uiQxiUwBEQ2AauVGDtbZUL9FeG7NgXzsYMbKCbFca5C5yjkxE8bsAs5V9DXnnQijkkueL3SFnmeXymMfZ",
  "key29": "4ggpR5Vzeec11XyD9Z2avGrTttjebx9tX2zr1U1MxM5gDBneKfKbopwb5Rnp3CdK9Ko8AsBJU1fe4VYPyLU8M3jd",
  "key30": "5eUwvwB8LQB7gokREifGSZTikywZG32hYTgxJSgAoZSt5WbCQiwMhWQJPw5MdUqtnMMjEhY1h5j2qDJYNYREy1yH",
  "key31": "46JSvPKay6MBVyHoAoK2JGLYFPNSgEidoD4o8tb1h4C8GEYBvkfEfVQaeVDLkYDATFGfsFcEQhBb5dX5qBsDz2Gn",
  "key32": "RGKhkx3tCqLDhAcQnVfpWZuwmee4QTrYaYava3EW9GyfVPTSYaNQDkQmcvHFhUkVFK5kczdw78rC1V7VaJ1eist",
  "key33": "4FV3PQ4vsvpr3b9FuMSB22GMNtZhQSBVS5UBVAzBAobWtVSsQ8HYKFndoMwiBhE2EEtv7ju6RdwwnLZ4feE3ZZ9U",
  "key34": "gk1KcUtHdrzXXC2Cv45k4Vsq23kw4LHb657KHjHYH8sn4XMLUf5hchMtSgnG5EtB1US3fvSjJHQuwVqgjSQTpRM",
  "key35": "5bnPnBLyPpHPRgKbU55ouxD5JsqGFaUksrS9qzmVuaQPPcVm13A9N5WeZWuqZirbTcvWd5GqegcDyXPpCgrydc5X",
  "key36": "3wWtDJ8oEi3j9RKVPk8XH9BAbQsgVzNHaHPRbSfpvMhaG8tbejjWQbquEAc1Ru3PhHGNw23WSfHsyYHVFMxX2WHk",
  "key37": "2jkywbdL9ZgGJjsLdwPNeiBKqa5mTdhJCg9oXu96pAEmMCGL63ZG9GBtagxC8VUoYNmM9ShDnJmEdo8hj3pcB2cn",
  "key38": "4s3knfEak4eFDgabb8rTS9UM2d2UUi75xVZsPpYsrN9kQAdFgKPySXwMT4ybuqvccxcByNRE4sWUeCVNdp7grXh5",
  "key39": "4hde7wnzMXLGSVVK3pX7PsaP8QVM3rm6TEABX7GVUSAiZzfop3xFbZaxhDCpPTzyo1Rk7ML7s5Rymc1MUbbJou8q",
  "key40": "5ednromEJSDCZThv6FHc3ETPbkFnNZQPDGmVHRDByXvDaa7pYTV5o6MDcdDTSkiZQMSauz4V3SjYBD8GR46aJZQ8",
  "key41": "4Um8F686XqKxBKfDeDFTTEDzVfkvmSZv3TmX3yhs1882jWtpJfj9V8ePRMtmwdGv8m4kMoC2LvwDE4eue5dGRvRj",
  "key42": "3PmdBUWBQjQGMAytDeCLtAd9YtpymCdZsSmLpEd9iVzTNNPN6SrFFULWKtyGvFdZTnFwVrWroCjepsLLtVAU1Neo",
  "key43": "5PSRGJYK2TmtRFqd25r8YLyQabr14LwDdfx7AWLQKVJdWoARyv6Hq21TJBhccjCE2txjxjukYJnHq8ToWG9EGkf2",
  "key44": "333fHLUikPdve9UCdKykYapuAU1FACJZ3T8ewR93Je37DZv4r4zHgdNfpEThsWqPbaJBRN6fz8q7wvKojF9xJjHL",
  "key45": "2Jx1npwGSZ3mMyNKhxB5owuG8M5TKQDFhScAmKkYKcBsVWSN59HFSESwxEBcLKM1sipoWrF87ef9YR4aWZswU98d"
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
