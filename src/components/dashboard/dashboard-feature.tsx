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
    "2DzShQ3dxgmPxEmBodWPnh9fXL7cfhTqdkWXhcuWUuR6oW6siDrdsT9mMJyXLSQzhCyvrgpvSmiH2jriUCGaYPtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sSZ2uGHtJ7XrHwXRY7npYYWSFbhqgSU65iUrAnyRGMyS3UXp1tf3F5BuVhTQoM5AmF8WCC31gCurWovnJKRhdEg",
  "key1": "5f3NMGMWFwAD8G1Q42i9KC7P7sdGZVwB3ocNaJoCFjWZGcZ1Hr7TH5DsgmGXbyZ3wmfsb3qUV2AEvLS2x6sG9pFT",
  "key2": "5XLUF2dkTcrGkEz7DWeYt5XqkYyXM4dKqxNW4npDHs3Yvvqmux6Zcs9Y7j2tBMq6QBSMYjTzVMnPcEAQCvom1Cwj",
  "key3": "5mQ77YpfMAvV3sN12kndNCnakjc8F37PqqHXn1xrh8oKw7xTBSeJfGq6b2Aad7LL9fvbYMdgC1CEYraZNGuHC8L",
  "key4": "525aHKaf14AvQNh2Vy8XHwpLxXLdzSm8YcAF14CAFcqEFgmKJpHUNj7NVyABc1vm3HwFbKu5r79vYEmFPRtca4mt",
  "key5": "4T8gir4e66cAadfh8cPFk2x3ucKV9QzKuUST6hfr1vkUHdYPxW5XgoAMu4v4sojKb1JKFyo8gkWn738i8FVLB7S4",
  "key6": "4LtkbhHnh9jR9PTatTaiLw8nTwnBndgUGfzEgYr3KZNqxqNipejVbH9Gz8jkW6LrGxa1GBddaarr8ug3bMQzAeKU",
  "key7": "5Tq48YmCkTs8dRVBYpc6ohJPx7qA9TU1UKbvgWQoVMNWnayKb68metMi65Mpt6ExAv2SWDwTePfMyJoxbcBBvTaR",
  "key8": "4D6M4tqWyFLYxJqGVMZ5wnEZ5nkKEtEvMZrntffPecChyEkui9QewrDpwmFZQT7GedTzXtQfmEtFmHyrTcJKre77",
  "key9": "kWbepQ4N2Vm9YZjfRS5sLC6go6CKvUEy4VcZVWBkVzxu9h3QCTwfJ8yCGgDL2fUGABCfzRgs6q6pFLUr11jSpdW",
  "key10": "5XDv1LtePbaaPspwaHbAgibxirWdmEeey9MwsnWNFFMmRSGtpRwpdDhBes8uK3Socjhqfio8yTDM46aJwW2RCfgh",
  "key11": "YfHpr8TcyACDk3DEm8C2CyCdQweddAidongdmYwGg2UFGqi798sxUcFneQv77yiCRQPyJtGGCAUNXR9ZmaUcg3k",
  "key12": "4yPubDrRbbL5aVDAtowFsHMs5xYxzFdegtdaTz1Jw3Rq8bhjmptb9EH7JLfZmGineUb2m5xcURgcn7YxCS9Hgw7a",
  "key13": "5wMJDKqw6RjN5XciN7Bc23S8Khk7fsbGYkPkCd4euqjBgSDUaZkKU8yE28eDjzMwr1mkBtchbipLWa5Z8xvsQBoF",
  "key14": "JYunVoVWWP4k1LycNVEPQwP3Q9GNFFN6xDrvSeorjzaa1Xbga8hdgdDQwE2Xc8wC76uGGxGSYfQqYKo8BDPDPBy",
  "key15": "29dx7CcKvVwpNnXsgDFQisrSvXVWsajMZw7aRPjrB2rXMTXAj5PuwMUH6r2CELdorfTmJN92gsTZu9L6m571D4y3",
  "key16": "55s5NeCYrfP1xRzNPRzZvTx5orwe3xFUZJQpEn1ZypK3VdLZkjfCDy9yC5KFZD295hXK18V6yJ7TRNsd6XLtzjTe",
  "key17": "3zm3baZj9idsbs8Jj18K8qxfwbto935Tk4pTqj1bXfCzCyFEorMEtjY2kCbBpVqzb5crpa3nJMnK5KJXrDHcCSV8",
  "key18": "4MpyYjPVZjbWNUmKhGEYqJS5BVj3DWEwZHgSNCPhxhYWZf4HEZKefgvksGzX8LQfoNUjsco5VpwNmT829RfYvKVP",
  "key19": "9yXvavErBeQUqQrX1HtN36N8ap1YDtWsELiwyDJM5nm5AAFyG8imKCfsEXfwf96MgEqedG8aQj1tMBCtAHcXDZM",
  "key20": "smCqabFjJ4fecXobdzhi2xrVGncejRcxo8tJQMMCeszwnrwzKCw1hhUQJdLSgDyLinJjokmqZQQJFxdsZWm1C59",
  "key21": "4dLYVH5Ma8LFCPjwwHTTvrQDUJhBJUrabWkNsnKMSjk4rULrPjvthyQAy6CaR4w9k25KKUoSkg5xmopcB5xbBxvU",
  "key22": "3Zs99AYoU7JQFK1iShh9soXcQEhT3DbWw3sm9oziB9psLKrhaQdbG5WBcrAVm9WZBSRPGfnwE5A1J4BKXa76XoVy",
  "key23": "VgdiDBEnekw8eu3vtzfuUxWR88Vb8h8YQzWzAtbKkAUuo8tts5RbrDcHX6AnFEwz2ZNXdt4fkLSBULcZrU4hWew",
  "key24": "2uqZ46GBEvn6ZmoTdcAPtpJPME8nuxSydhBb8sbd4jiGSjHNdQxaYTSW42QmUD8jCgs8p6o9XH8veWtzfqNq1CJU",
  "key25": "VQeuQTZG6Vte8UxczVtcAvfnFEwJ19YsJh72ZT3NEFtqeHo17bjmztitDk7ibrPzrusNqdqfpgfaqCJ8jt7Kh4D",
  "key26": "57fxF4mGqA2A5VE2ZqNCf8ewk5eUCzUBauGnrvJJ5pGoCTZDn4LRnaJDAri8eD1U4k5ByWNdqzypMxwvdi37vMWf",
  "key27": "3hXPGkrz174CKopK1dyeFr5YPpLWCPHm5ot2RdTxe5r3mak9NnEX9nNyq2wZeha4Q1uVWdQc914qtPvziPd6XGSK",
  "key28": "3e9kDXo38sjVtx7N6ZpYbHjSmwRsBvCVkuNvvVsas2Xzv3rZU21yPqmjXBHurJt3FzPYRmwZpUw72tmDfmxdsQ5B",
  "key29": "3h8b4xaNU5WupYB3EtehVZ6t8A2jDTZAvU2zxrzAwjJbrdhdwhxkEFbTSixpeEQaomfGuPRayFNXzp99HQe87ixN",
  "key30": "2GEnpjBxwemenafkhUybKKQdP8ZsJnKfFwyv84mAySmSBPEKZXNeGdhYuqQuj8YevTUKdJVZxvHkJ2KvXUFRbGJD",
  "key31": "36XA9EDFdNEvupotCJ9oV6TA6CNzX4FhwayWEQapcFdW7JyGMs6gVnPVUi9njorkwUajftRvi4HEGVeoWb7MCjZa",
  "key32": "29p83NF2GCFqFYJNUo1a5fRbtX1f1aF7ddyoEJmWFEQpGkvUUJWudNjUEGfrucj2k8UYhAwSeHVsyPcC3CQqJpuf",
  "key33": "4dZBrrXnmy4KfJHBpkce3jzYkDrniWdRRd2mHLXWEPnoKxCfXRafwnAWJAjFYChmCsThAwRQAjUQ1VXjsFha4ryB",
  "key34": "ZC7ABdHhNsnVST4sZWMkPuoMNbMpNCGWGwJZt312LqegQSh7NFxBPTCJCoaHQ64BuPUWcRWTpqnDidWxA75KH9n"
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
