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
    "3mbxkixS43tcgraw5EjVG5BvqxXJ25AxAgVeCxsj7wzPPw8Hz2pNrD3cPNrNxombY1HJPPCum21TbqpbhxHsgGho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zh3dXEGKT6vJXdrYL2kX2bAEfFYDJNGVFPXfHi7WgmNGu3vM6saJkpfyHYgBWuzDbQ5K9U4HB5UeZKQcpp66rag",
  "key1": "B2nCsQ6jDfvzdfEN5Ts8DKqcrZxTcgnTaPyWPjKTZSQsN7utwnrpgDgMD6TTfiemMVudQRePAzvM2qh6q5CTP62",
  "key2": "3h8nWZB5iggykjXeTdUS5zRvqqHp1KSaJ6GHChvydnjzhH2xCJ7frZ4zpa1oiEqJFrVTsQVb7quvL2bxNuPaRML3",
  "key3": "23iJnSsRB8yP5FPh4SkFcFu5HjJzpobDLXeF9GVCVGKpRhr5nZYsu7T5Sr3JRhed5auxmvPe3T6hJ4FxQLKwhQie",
  "key4": "4o4ZsPYzABC9duhsQrgXeF8DLEQvfkhCG1eRQZQVzD3ShpWxEmuZ1jcUEvPNqL3D821SXCjW3UXMaTw7sg4gdNAg",
  "key5": "rUd3LgaZk9WzfrAMfFxPLb7v2pjefrydS8VV33bpvpKD9DT787E5SYS85bqxFq8VKT3C8E73GMs6ZeBqsHqm9mq",
  "key6": "568xZ9N8mJUbwer2XCkqAsr8qJ4BkttjJmFdQohjMZxbdMCczqjDqsRWyS6Ty5n1FEnyQZmQLL44yc8ngqoj9u6q",
  "key7": "2SsC9mCkTMa44RpbSe376qnrXUA7xuSqtC64Vxu2KE52STAuFefJ7jfgZeyu5JAGDsTXSuxSidx6sLU8cj3K26wt",
  "key8": "4VLbP31dptqDkG5NuYdo9nb1sAA5eneQ1JywjwnsrSPSxXSWQDTxLdMEw12Ds2viDUrVs4gtUFBat9aFH7Pk8Y28",
  "key9": "attFWJJqw1mufz3LbXRrvqHPFfLtbGXTq13BzygvSyRtjQYs6JZu62W9geDaUBDdoW3kqSyExazKFsH5JahFJTA",
  "key10": "5QjpU1kSq6sHhDDSP1EMo5szkqA7oixwm5feX2BVy2VXK7PDSrELpoxnER83y1mS8G6QpyKE5H5sJ1wdVCWPzurJ",
  "key11": "5FwjN6BXAgBGuQbc5SEB7SaVgeLkmWY4AYpzYirM2MY6Np719y1FS1oxUTCuw7fMEXJFmkr9v4YbDFotEzBf867W",
  "key12": "3HLnXnxbiNpRddiu96bUH2NQx54LrRaCYsmxvA9rDSLtV2snhGGdcgF6iH3kgHRG1RxVpuY7XzdzbqDccyDKAYg7",
  "key13": "QABnxQ7M6HzTa7zyqH5AVhw7P3ConPzdvr9oDVKubVJD8TVrqJar28tibZgF2KjGAELyqjkPFtJybPLfcWpR3bh",
  "key14": "VDv6pKkqZceyWUGb7NYJuAhhedqMdmre9kr6HzjtFeXGh6tYNnhdNd6S4CLN6nUhrRNNEN9cPvd6f3yLV4GNn3J",
  "key15": "3MCk5tegQkrUgEhwr3MQCfwQjm2aJDs3Mx7nXJJaXR3nU3o6jhE6QVo9Qh8LUiNL72hwtcoMH7aakLXBkUN3qv9A",
  "key16": "eQXqPDqMut3V8iHsZF27bhCGg7jCxeKd5MbqHVkLgiRVLdLhCRqJiZTo4Uc1KfUF2VyyEbgfXDLn8LjATkw3Loi",
  "key17": "4UVejx4BwfR8yk6LfEUpWSpjCE7SNb2wRQhMDxtqEQkG3TzFcTuP7knbsFZ9P67JZA5pTNfuG7kUvxF455svKGwu",
  "key18": "3n5U9L5AzuPdVeGEzw3UvXQt8pWGQvF5PYjhiKv4CsRREjDnpkVwim2Qvb2ZCfpbyTFNrcuY9G6HnVm9p6HbwQSH",
  "key19": "45FAd71Pu2N4MwmrucYkhizAgHQSdDyfWenhnkfjshR76vCeRkK2SQWQfnrYUVb2PkFgL2oMd4iMYwnAHMD8kppx",
  "key20": "5oj8wRjakgmQ1bDcTcPpEvtsXNKn7yH5UVx5vPX53X6Gibhjt86whoom5MYQjqt5e5nnp6LCLws9cWnEW5A3AD9",
  "key21": "4mTyEm8u613y6J6YrGmNnwYdhuXsKVoNHnT7oEq9YSRLtQaYmdpLnoWG1MUQFPJLnAdHJgDyuCVEnB473DtzQz5G",
  "key22": "4Bsp4zkiKkkvB1hpsG5w2XcdRN7dZG8rUmC25LYvNP4CYv3ABQT2FKV8FLsvySfWMSuKcXq95grN7nBmenNypnEk",
  "key23": "5WponnttMkdv4aGKMQ3F6MYaWBYtyMfxuXXsSyCCHG6YeWgx3K46XEYL7G7bEkNHGxggxYmGziyPgWbrNRXgMgFX",
  "key24": "5eMUm1gkVYJtAD4thNfjKTNnzZaLTHdg99wBn1riEJENNuDkdhgPavcNjRRDHzxAhoZ4mVA8XDe9DCCPqD9BD67T",
  "key25": "27fFDCb626uHTR1aQGSBPNiYYmfdkkfjdu3PYh8QevxwkznUyoyeMNEGdJgQWxPw9kjPS6xttXJVCRVSLfdG1yby",
  "key26": "3hLMfw4dhGXs8MLYLDforc1N5rnxAAJqQauk7JSBcYdWGNuNYDqNZ3rw4n6tf7qKdth2yamesCcMeW3VfAd6y63q",
  "key27": "4DuF7M9RtBr3Goq3xWNaGPK81YDzXyNCRsyPe22Yb9XX4kNYmg2LY96Csas9LrV2CSx5toPukQ6E9cRkSgPvVNV3",
  "key28": "Nzea2eKVTipSsYQwJZHtrxic9RvNWR8cYfWMPbiZGkAN12P6acMPdznJ8Ueb1ugwyVU7ZGie4msjN5yJ8w1be6A",
  "key29": "2jEyWxZwdrWpLuaoHFp8NC7oEZHPrrHoFdZrzmBijCJp3N7Yup6C3j4U4Xx3mCqfFmHU41BAZLKqvbNdrFijCK1T",
  "key30": "3rtAkKnfNpwtELFUSXLgStAgE6TR4Qw1cv2J2TGwQ5SFevhB5exBhDe7DgeSxW1VNPba5oRA9ERrs4L2QTkopgfw",
  "key31": "3vpUpCjgnVD1ot5SW2PsMbkB6pnqURLrMW3TkjH6UUZzvdjxZoVuxR1zf4Z6Fqo5jJ2qYxhMqyP4MTXapmpzA2wC",
  "key32": "5axe9EBkRAC4rNP7jJpv3J98WH9zhzqq4tA6vv6C4irGYdMTAbvYBEpv6gAM2VRYo427UDw2hxxagfSVfVPht8gP",
  "key33": "44vtSH4zRMfnynMre7xbLjwBUCLSAe9VA3GPUeAJTXG2ZZvezvokPEoJo5MznN3mfcFvetCZq1Gdp6GSJfGxxnhQ",
  "key34": "4uxyJcTB5sMrBPcwU4PDHoDepDEUe2D2E1EwRf46JJrGPxQ6AQzHwU5hqkAbMcFaAWskNrgco6n4wjt5xwGgeUpW",
  "key35": "4sa3GTdk8qZi58HR7bFk6ktZiYoe8fG1UzXnPoYDAYAypzf4rWt8TLidjuJNRBGmMfQt5EPBH4k3E8f4hfoVJ7JV",
  "key36": "rTZVWZZCvoeT4w3wbJS8kqvCadqSzBgyBLqNBwpBPDK3rx6zjVf9LFH9t4YkwVd7WGMLezXUVCpmrHxFWzg9m21",
  "key37": "3UKcZvTq9BpMseiqo79JBS1TptPhDQ7aHsxbSm66Pjc7RgtFa3PUUxAw6DsWFYkGRwD16KjE15w3rAGZuQqvJZYZ",
  "key38": "5ejESmfjWtaDYXFKDb76sxJC18wbHC1gSXZLgBgWD3kB1XeDWcRhF2Ja91PG1gL6x4uwKWxRk51bZWGHVPC3RQDA",
  "key39": "dBCFh8Jiw7n7AfM1nobw8DEDM6M7VkonUNEKUu8J4z5JftcqpmbkVqt9NmUff8SKCGPHfQAWEoXGiBPWU2cxCbo",
  "key40": "3ccaCzZqgmU3AsZwddePHQfQEnS8QF7bZCTUtszz9KodptmffaAjJsawQsyWb5fkiywDDSqgRvrQt6E6b8BpK9eQ",
  "key41": "FgiE3MNj6kQ4UNGazzuHpprvK52thaQuGK7TSrmpert3VAGU856j4Yjoa9Kd85PwfJYJW4SmB5XBcZbUDJwS6s3",
  "key42": "31u1tE6xYjQAAMAzAJJx8YiyrkZMmpwPbkc6oPV9ckYDafikJwEGfAAjsLpXNKvjiF9nwwEaek3YEmHo7Q9djfJ4",
  "key43": "4vqzZSkcgmgqd97rbMFAAWSRJLwexq3cYzQKkzvsc1wRyhJpiBs9pgcYG6iFiJ7go7CGCyL253HHz3QLkSbCKwTx",
  "key44": "5sBEiSDpgqiGDvHQMuu6684AVJpPj5vTaqG1tFuDY769fV59KRhLsQ9mhKU8FUraG8Cm8L3jHSQRiSkiVK9swPb3",
  "key45": "5pY9SPEy2HG4Q8uKwCt2NFCYuFUw5DedHWLgWL2NGfRXd2jWvS6SqFpeNPnp8MUZrAQ3VEj6gsuvWwqusxHe5b2i",
  "key46": "2dc9vnqBy65EZxGbSzzVEWoi3pGHYBFoHueyu9gKvLgUwum4vZYEYR45TFXC82sLAts2d25n8MnujQjxumts66zq",
  "key47": "3Mq1n3UAeYZjZJhqzotwbwQ7sVfoj17uCPU35s4zQ2fuYQcgnvxQtMhTT7EZ4yQDAdnkNszS2Li5kqwTcvCyDW5w",
  "key48": "3T9XenwHanvLiuDXz3gpnibFy5mAURUGG7MAVe3MTco9bMFc4n31i7KqPS3NbmGQks9ngUnjMe2H78rU3ciKCEbN"
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
