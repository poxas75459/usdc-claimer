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
    "2vrPbuBq5CCUrMGegjonbxL3bCLLjskS8574F8UzRCCUXFTLyYspVkvesVqiPpFYx8KfypG3RAL7uqUVC5xKBRXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WvsWi8Fpg7Xh6VRrbcRQQ78SJj5A1ghNeLHPqm79Z5868BfL7vqvTNVVvT2gbkCafwSzZkMjBiuiaj1w6XYGZFB",
  "key1": "5AB1i3QqwnBi8dfWyCfVq4ka2mupNYpVVcxC3z9LpS314BAvQz94oJNeYD41YoNCBurFTSbgDBVjN9Q9AvZcBXSy",
  "key2": "3iuEZ8uCZqkt8wEy41qqmjRkXnbEHegLAeYK8TPbtPsFbizfNFynvmPCsJjsG4FnxyDmAb58GZtwkVNxMnC3L62v",
  "key3": "4weaHGknpuAacfTkpVYJRvWPLuXKuP8FrBDefoamLf65GFRUwGpnb6LRxhkan9UiGENVjsi4cABdEVVaDQBJHCC5",
  "key4": "5wezqSLcU9g8UQYTJhhMedEPNca56SrHLueeeYdmkwbau1BJM2Z11PiedPzCcUHS1YyHbAvG4V56fpntn9zcu6q",
  "key5": "4qHSdHnnfJogv7T7eg5HQBaK74BLhUrCPvQVV2trAzS6YkBz9hTZwCzq6yx9a6dxJyEor92TK2J6evmsL179DXpN",
  "key6": "4XWhesz9aBtYKcYRUiGTgZn3q3B7svntDyKF5AjjedmbH5XV9EHCX64Gsf1nj8daJEX5fX7gigmGaAM4npeBdXZk",
  "key7": "4NNqcCAQztnHQsyC6TkjNss7kEMnydxRvwj3qiFuPxrEyEyB9S619kfJz1FfAS7m8W9J1TA7sCgpyEjAtgu1TsFH",
  "key8": "5KkMYCvRZY6ABpQuzthJiiREWcdEsWbpdYskTvo6ubnk8r5Xsjwx2zABHGBQgynDjuwQdtb7dxfpYMZKvWfZZrCU",
  "key9": "2XmpaCfyzbsEBPMmZoyN7hSnbToCJFD6HdFPmFYwPhgqDEwRgMbERRyx9ru7JfJt2x2B7gBvtUap1GofgpH4JGDs",
  "key10": "4qFmiWmbqTTBSXy1grv5K61gM52b6wT4bQckVLs3B9UqABbAYAvQk66ZQakM3R13VZ1MJfMbkTXGuHdjLCAQyJ7w",
  "key11": "Q5WDogn6k1EBRVc95GqHdSXaYhEisTwBoRfjUnBF1sfBuCbb8GBMNFKY7LKiuWugxaPTvoeht2aY6dNRwGnsWUF",
  "key12": "51MYUYCpDoJdCiDscDBNrMHXfEhenHnauC15ZtnEjJCZCkWSZ1AjEKUgT5BFe4NEdw8bHrsnLDtba16jXZcqZrzt",
  "key13": "w4GBzMqD2d1nbKfDEgDxiRF9mh1KyQciBmn8ivEMxvr8habimdaWB8X1JpmRXhHGkvwQb4jkjJsbnaw7Yc8L7Ex",
  "key14": "2wHysrp6giBYJQ7V6cSokHJvCMHERyWqgohMsxgkqgGEHw6FRe4gDNZ73F2X1fQj5mAfbGJb2ktFfoWD5TFj9eRN",
  "key15": "3CKavEf4VWBJwkx8R5owPkYgPCJAb1bq2P6k9T4SBi2PQjjcUgqzUdjpduYfVvKTmAJAjsvZERExVoEMyzaUnTuj",
  "key16": "3u94qgQ8S64rofKt75wMB2GGuenwRitaDTULYTZW6idR84AiJqDkE5Qvo8wHtTriayB3N61T5SMdSh8ztyXSKsPK",
  "key17": "449AHNog1d6gGXVw3Duum4bW3fgtejPrx3LFLDxHtnWoj3CocU2CdjTrJ8ruWgJzRhPfbqAo5aZDXVs99FNkD3LB",
  "key18": "4ep7do9Szkf8XBpVCMQWvqhoXJYEUicfwNdb2ktqGpnuBu5evFtgdjrVDosyHLDmcfmXGfSs9XuM8p4v44zGzZFN",
  "key19": "334KdAhcpr1UxbwE6QjthwHqB3YCjU9payQJ55zCvsJfq1kPPU26Ecg5cRHkmMxQxNCrgwD3EGtujNUChxNJaumM",
  "key20": "2V3jaDZ5dKU8CFdPy1gsYMV4gpaCXWoqfNRfa91axAT3Gmi79vLkqcfuAzTNsa42KAaf7iwkofEPSmt1EfFSRpC9",
  "key21": "QgdyYZ5QgQsc5UaoeA2EY57fmBNWSMoShTdsH7ezxpsgJv2q33WqiY2cPhsjqD29xVdCgULR3rYmTXRFprfr3vr",
  "key22": "37XqaWwq7bbbHswNmxvcE2XnFNvyzVAPGsfgRwaUAmXU2ov6Be7SuHdZr67tWJAcPUhcfYP2Er3pB7DYoQwGB6eZ",
  "key23": "3EuKs7rNXmnwRWUoruK15UVz8nLSqwmJscP7pqAvwSKk4QeRoqw9FC8YuFvcxCvwaqBZ1ij6iMcBCwbTPPJKNERL",
  "key24": "5PHyfxjXsy4sYyKdxJMjb79uLSBQxFzq5e1bTwLRgA8dwa2jPojEXJ7kQBmWskZ5MQN1VNMJMCHjbr56RwphV2Ae",
  "key25": "4QSeCorQnSmvpQPGY3FKeALm99EmbSQKwu7Mpgs6NzykkNF7ZCSoR2zcvHx21FPUUneEABwZheLxdaTSNQG2HEXY",
  "key26": "3bH1BzrZ7XoDgVuqVGd7C6DR1NZqv1p9i3MWEJuYExC4JEu9wxqo6fWNU4c55dty3Feb16AyzhCCkDB1jKvp8KJw",
  "key27": "2UJqYfCQfjPp3jSMnsGKTArN3uptHZcL22xT4vVGawDMorvUMhjUgQLYoq6FPWaWeZVkyYgfCP2mTSLJsH3SqHLp",
  "key28": "612zzx19hV83T6HKptuSEofYkR4c4NGXAPrQXwkNQ7vXmbF2ov1Y15FYroPLv29GBnFvjBBUnNfw3EbhVR9fNBxN",
  "key29": "3WVASCRo5PCNkzyniPZKgrs6XHYgQ99LR4Lqut8WNSnU8ZUWadspfNXu3EuKeQ31nJvityxJnE3JEWLkXgAzL4Ds",
  "key30": "3mUKo5qWJoQuX6PzcQheynACNrdJi2e6xUXXLTdj3gLFvchv1ptfxff9kg86rKagSGA9JKUpvCEdssS3bqVBSmxr",
  "key31": "5mvePaiEPcb99Gjn3GtwXX8qywaHz35qjG9SUTTxPUZwmyg5uiii9MJyKa7GtwDgXxe46tDHtAXgdUThT5qdLymR",
  "key32": "Dsf7uLtUNWUfsnPmJbjuVLwtvbDQKpit75iqWoVBFRBWKgBjQJSLysiXWCBZDbGpjrmnCnhKFBXSq6W5ehhY3H8",
  "key33": "2wr9piKGHf2ii7FbqwbNWTSSPMz7k2LYyUF2in8jSKyLXHi3HMhWebCEDmt3vNhkeekdfqhEVnRHsN9MuFpDTB9t",
  "key34": "5qe1Qu9qhbTRaopBEV69sCpaVf2EWzdKrdH8d3yZreoXccC7HZktSHUDUcS72LRhw8YVbGvm7xsLHScYDvR2vQXm",
  "key35": "26oc39kEWZLCyRC1cCjyiUNqAPGc4gLVPMSrZP1yeVhHNuKJMSkufksHmKxJu1Wpeq1RwptQpPvGTXqxupCzCfkF",
  "key36": "4rxh6pWg1g3AqWdmUDjKFEYcPfmTQ1WwMeeYPxqnw2oR4dvPgBKk4TfToXNhtVjkMxqGLcg7ZjT4EjM96GE9bNw9",
  "key37": "4CEf9tg1QRqAf5RegJzLoXifekNUQdwpszCFvrSwayB5wAhd7efuMroGJSxMFc1CphavJEioTajG18oGQtjctSPP",
  "key38": "SHcauYwHBqpwmnumvd57SCX8LdZGC6reF5mXP8ojtxSc4AduekKb9awVYbZYt4mt9gMXGA2FudnLhsAraYgYmtS",
  "key39": "3zQN6aTQfzSGseN1PBEXRXqA5MvEA3PXu9xeZWqfuHCsw99b35gePxJP8ESThcjkcnG4wnCxeqJXLv57UH1KNBHZ",
  "key40": "3AacrXrCJs4orpwuKv6HgTdBX1isaf8GBudt6Ah1eRBdvXDkAyFknsgJuiNF9kHo5oyL8BkrnbpAbAwMjYRxz7aH",
  "key41": "31nFdWyLkf3SXEfFcecuPRdcyPJ1UMwHPvj7FxU35UbuH5Wr9FsHGFsFYUpxHMZhjd5TawQGM7eFLop83s7xdFvS",
  "key42": "5vj9VrXjiN2Qj7KtrE3dCEesK45rJYcLJQW8U3z5zrN9men1YuTtUUTEyDRZVTXvwkn1cnQB751TheqmXxy6FREc",
  "key43": "c6dMNMX5GubTYNJEmWgAeuZhzdv4Shq5UNQA9hrsTfdvg9JnvgqPN4CtmJXk7Lwr2hn6MG4auhLN6wLZ6tdAYLi",
  "key44": "E8kZoU5RwewtAizUtRCK5Nx2HVsvEjH4yU3hrdTrmPHhLKyhs4npvbpvC7LrAAie5ZovWjudaXqAC1HEW98pWm6",
  "key45": "5Q6ZFFh8SVzseDrqtmsAjmNUXAm6Nku3Ne9zvFpv6bA3SkXg9utXEZj4yAigUuJ1qQ9Dv99EJrn8WZfZpKmfQNVq",
  "key46": "2KbsqxCYxUyqMozXExPPnPB8qNQcU52hLzigmUPPg8Sbw6cWZiE7XPfbRbYfZvGcnHkqcu584618g7po1UP2BcfM",
  "key47": "4t4s4JVPeFazkuJFLrpq2Bdn8k5JLnomrYNsABxG9boEJTscr9MTwvm65GKrZsWQcCRrKhUkVqV8qhAX4KqXjx8m",
  "key48": "5tDgacCTrHe9zT9M7wA4zShsp8WW9ZZfj9v24TJj7eZTUR4KStX81VJtXwDQW64GWfhVvNt4yxkV8Q7ocjmakXQa"
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
