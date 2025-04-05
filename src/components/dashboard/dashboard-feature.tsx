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
    "3eitovewqN8ZwPNF9X486D5pKFj5YXegk6aGBTMEWWGkj9wnPEq5tmx1h1qNApbGHUUPCT13WsZcQXrv3FGQc1ca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sRSHfqCocn72c3hG3QJad2BXtKLBJYwszBCCsKv3xjNoqyu2UCS624Jn6jGFWNj7m12d43s5k5JFfXMAqQeWjzR",
  "key1": "6jJ4YHdSLokG8p2Jn2nUG6hCWxdmk5BPeF9kKbCSU8w64gTdbGzQ3v89tQg8kL54YWvGj84wfMSyED5GSghMps4",
  "key2": "XLzMAaT5XpvML2Vcne3TYbvUwDQpKUgb8K1t5SBbVquF6LvJ5shAqPyDyAX32sjfqnqD8hoVQ2hkKnhf7uvGGLZ",
  "key3": "5enr9ziQdUYJJBcW6uchKtr71Kvru8wQ3KKaTjHzxfzVfN4ohYcAaGEmQLouAPViGJ9hguofjoax1tx8mQFXGDTy",
  "key4": "snncCubKhZkKZEhWDnN95TtJsyHHeYmPud7P1sdfrJgwkP38GHSGCJBtZvzkDcTrnWj16gnvKVY6NmguCfRfoca",
  "key5": "4gmU6fKLTg12W3EBnjR9iNSweBZieC2P5vmsoSrAvkeb8issvRXQUV8sLhWAVHy5HcPwiDUzz5PzwYjPHqzQNg8y",
  "key6": "3wd2RWk35u2sRxNsW9fBVZKFJMmSGJbVdbyBB8JAsGCBNZJAfZy8rVebTZdZEE9wkGn4tzpzYAysQSHSocvtJQoy",
  "key7": "3D7nDRr2ekZeima299nix5drGjorJXGAw92ePaDHKCDNiuMAZJXmY76dxVn1RpjdUQnLUSb8nU42uhLLfnQGfX3Q",
  "key8": "5b3xZZ8D7LSwVnbS1mXgxDdUBaFQx8qRcH5c9Lq2fHz5yyCVsgYPibNFEAMEiU84X8LgMJswRiRvgLykw5bLSVPN",
  "key9": "5pUEokraQ6mirD1tRDmC5PaKS6J2GtWVYXiqjYcwp2wMTzUdxfDF2gvMdAREtop1L17LPrxbuCZGHZEknVosjzPk",
  "key10": "5Xsf2pqmchurSVDfbs88JRu9SEspwFBqNeV8tPzfnU9Mj4DZpg4Amt5jPqHF1zBLfG2vTF7H3vKELCfAK6tEUmxw",
  "key11": "5QGroVpnTsUJv4j5kzWRdhEYBmUt5AvYdzSNPuRxppYSy5Y9aapDKM59acg1VYmsV9ZC6qm7gDfkCQihHJXjTFs5",
  "key12": "4F8TyfkiE4p9rpqH8idqPTjEMkfFsfLZkXiGBZQLU5M2reWHWctHEmBdKr3Ya9KMaFSoYy2oQMS3J1kLioqcWbYf",
  "key13": "3jx968zUKrMvbbm24MhrUNUr68aDTzRxyWyLXWcAAjUxKG5CLRw1zTPXHzZ5ZMQscD44jmS7medmadfy6Qa2Mxi1",
  "key14": "2VxpMDqmeA37ET81yecWUbr9swXe4J2xcbmBhQjisQcFMvFdViXnVUMb8HEZbPQHXFqE3PZ8Xyiy8KdMSudiG1fn",
  "key15": "4SVuqqknnTBZ2e5xp67ps1VE85jvL7V1KCen7TmjqXQJpkRxQProo8Sy2h53GrBsBuu52MWfdMeqEXEafGNMB7r5",
  "key16": "3CHTojspeVdK5SqP6EPcTMNyvig136E3NArR7H944hEAzkRfCP6AsKjdrdSNfbCXjSM6PiW581HfV32KfvVZVUH7",
  "key17": "5eAHxDNHMoB8tob4zm3uoYUL13JFyLCAxWC7NeobzgqcLxrn593h1SS5QCYcC9XTx7i3yDuEM4hdpNJPTYy9MTBB",
  "key18": "FQ8K1c9PSZ6Z3rJQnEWkbGbp8aUo155tXuSmwMR4s338xz1hyXsSKU8awe349DBSwSVmcaBpZRvQb2WeooWGKeh",
  "key19": "ZZGq8yvj2qKYPRjjPirFZUAFooiYZiCry2K1ZjAKYAWMYj5U7z6ZsJgPDXiNDVEvNrqDUS4qUPVu97Bqo3XmVPB",
  "key20": "UZVtXf7RCcMPk7ydqmt4Vwok1dy6NHJFYvCznZMVjnY95VQL4TimmrmgwZNKJfL8K7KEFCxUuD5Q7qTpX2Gqx6Q",
  "key21": "61Wrtncn1v5R248r7rYtyKTzH5wetyXH7qV13FCtf15M8dnDAiKZNstwzHhZsP8KrQCprq7c57psxoA7fzSxmB6a",
  "key22": "5WxCoVbmupunWv49JiRHGCmSpXaED78qRJsdkaTh9aDTzHx8PvpX1bL1rNr1uZwT1U7oDFPWiAVikBFCU7wkMV3R",
  "key23": "61Wi3fwQPvVxjnzUd2s3ZV6M5AMfdnkCNNhfBHG6JkzYiuPUPEp8KvbwmQjxpvCgze9iLMXK892EguVbcUNBoLoG",
  "key24": "2sccWKiAZjrKJ319uGegNYdZgT7GWCe9TMBGT1ooShieGWKFJ4vaZhPynS2Khh3K1tP44HjMw4Aya9hKt83oeSjP",
  "key25": "29w7LtAe3DweHbj7cPa4dybvoDNrxhuRiZ56BJo3SyV54DZV2XZd8zg5YTrVgYLo8dEdRMKyMV6ZWGB1jfjkwnx6",
  "key26": "572tap71gSjda4ZDJ7rAdXNCNToAmx4UdeYrUvAXwP7Akmj3JSF67w5waRdDroNYdXNWVjV9u4YTa2Lmj4pLhhc6",
  "key27": "2VKiA9BPX5gog28bBJxtrP2Ky1LEMJDYpRZqW9NpaXWyEGwm3v6eUZHhDp5NgYbFxvDy354KzKYJrT5KBtkDSStB",
  "key28": "2MBBATKs5etU1zwsNRtzDGy8FETzJwv9VaFtQi4GCrGdmzV7PrmgaGAi7zyjynFuoW2xnWXWwjmn8W3vZVMTDLZZ",
  "key29": "3AZcQbhJhpmBCwVEUwqz7ZpQjw1tfKBW94RBXSe5zrJGHeS92fYMxXVTcSr2zUvTWHLuMn4qEJDhHAZ3roDWAXCE",
  "key30": "5iMV6rf3JWWMXR4JVrff1DWjCWmbHszEXVB6rEUesnYb2DP2ZpWx6TGU9xKvBx2JHhv6V7cGgLU4FdCjbZLMotE8",
  "key31": "5kUTpDpRStskroxYoCeUV1HAeUCfrmaNr8aUDQ2zCVizr9VqGxUQNYvQG62HfpjPZEJkQ8mVRRME5HRjxGjTFmFr",
  "key32": "3nxe4F42KJZ951oyk6Ujhj1JvbGxvCv2psv8dRyPTeDH98gG6PyX4rfEMs8RV7CQsWk1moBYJjL5rkgAUefXGjrA",
  "key33": "3oiPsUrsx1617ne6uTVHsWLESCtvh5HJTqZecWsnAvkihmGoQcJXeSnkUqAzq3KaApRVdERguHgXE5NF77AvWn3G",
  "key34": "4T2std2VM3Zok6xMjqqd9SBiqWCfgmJpgwAFPEKsYan9vP1SJVMowGUnXkTECEAmdPdXWZoJJdhKbj8csuDFLGeC",
  "key35": "2B7k631oiJ7qeZ4tATS1ehzKTVswrqR7sNmn7Z5PP9YE7sdEiAzTx65cLBNsgS6RWcpa16UfXheBKCC3HuHmX8ZW",
  "key36": "hUUMaxiNKJMS3C8iUqfmRmcKBP9HtpCxCLhdppUK5fLbeWqMZo2MUWyXvobRR1jywgUj5qpnoSbQ2Beuvsxmbs5",
  "key37": "5sjYgTitwbH8VuP2ePuReq5gF6efWYrCHM4ef6bX5pHyZSMYYHZhFDC2VbZo6mYrD3CwYBtP7JUoSf117wJJ8wfK",
  "key38": "4zJqXXqeSDSAnjgivaSBB1GqByd4mmcXgZEYRoqD4dMTyPqVbBpq7m9Yp7T2iHXRDtnnzu8ptxPm2izbRt59Rvn",
  "key39": "2QSyFo1sBDv6eY6RWvpD957u9SUbdnLwNBsYANAwGKfVDnX4DzRUcoVLL4wk2tjDftFmWtDXf1EmiyMYr1CDwx6z",
  "key40": "4bbMVyV37Xw5gM5CxKFcGj4No4BCfbEQpzAf7CXbiSz64q9ZxWboGUV8aGiPjaeXSWnqqbhoSxn4Ky7r4tStxdwt"
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
