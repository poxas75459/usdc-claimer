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
    "3F7SUqoHESh3UbVj3DXgBwJbewXx3MiHWxTq5PZqjoQLCJuxZK1beSnr2R218CYkCRLB9Hmxf1buwB8H6q3VRWN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YjAbzDShZxUfovZazepuTgdg7mqZNLvTUnpPXx3nzag8QGKzWM3qkG4qC96xDWW9AdX6Vck4aLMK7eVicmTu1ZE",
  "key1": "4JL9YudEMtyTCnnHPWLFDRffsAqXW4DX2imbPtc4h9AXLWA1UnTuYmAc6iLPbDENgQhjou7QqWCKRXwpd1nARTWr",
  "key2": "3rN57xH84Y9VavqHGrM7Sh1Wzj1YsbBgnxWScf7yhHdLFsjFLLYcayx4Uqawxzt9ySQrVf3Xpqoe4cbRftFGqPYS",
  "key3": "7yLLP84TTeS8zimXS9xQXxb9JQzEqhDcvpCqodYvizhxYDoNiSiD4Bt7d8hiCzB5fA2nx1L3gF6mpC14yij7hyv",
  "key4": "G2wmL7tCsGRi1q8PofXGehtFKEWXNMnsvfouNGWrToQDvp3nFu2ZmZ3wKgh8LF6PMC7WPFg4w6BuUF4mRqa4jGd",
  "key5": "2vG5eBWbbShq6t7dunGfrxJfSo8JPhX5tE9nafbumj66PzojjCYVM4tTDXYdNUMJ1Gzyj928pMWBLPgJk2g8g2GN",
  "key6": "2xcLnqsFi9qiLUoCJnJRd3Uq5vSdYDTn4qsRGHie9GQ9PQVNTdSvfd9cmqgZLAzGpXbACB1Weov81gaLVeKyn3b4",
  "key7": "4965CZux1K8wmSGEHgqzESgyt3Xa7p5v3gDT7gBVVdvenEkQK5bqYEQCw8ejcA1vN7JuS89WNST545EBjjTF83VK",
  "key8": "TA8Gd2DwwBpwZbvf81gAdiRhDESrVxjghvf5T8WFkRoMLWJLd5dbT8zMsbTiQm3uQVXXU19Vxxb99tUdetZmTU2",
  "key9": "2ZQW8PtczmRre9V7eWmfxrxVuP7PF3L5FV8DvVkDBomXwVimpEKzAwe9PGmcm5f8Um6gbZoWGesZmbXqozEQdgz3",
  "key10": "5q8b2CHiF7JBAEWvPs5MdExMsUkyVxRnmscvRoxbq5ERNEKEderFJdhQ8xFg3C8mh3yqboGGTkBhgXzWZVctfp1L",
  "key11": "4vDT7MtHX4FYKmwiRUwhK6Tq8YcDBsKKtL5kgpA2LghbVn5J878zpTYH7a5AEd5zoRf1hCNbRoSuZzwN1oawB5a2",
  "key12": "3HttG5kokDrcHn3jUvnu6itwgNYLdqLT8UTzQ5z9W8z1vjFNXtouWPHBVCVG5szmobRmBEMAVA2wfZsZzgkV1E6N",
  "key13": "5L7VoN15CWMfNbSqtKheZrzH8MwtdhLGK1sjB3ZgJjdnHvii2DT26Po5ZX87F2F8B8jmJs53Y8T7HBqy4Novj6Zh",
  "key14": "3yGqjvbLXNMWgxLZFPncJG6Fq42u3Mf2UbdbTTv7NWYxptBjJ2gidR9Cf4cbXv6A7EqT2obQ2YncXuT5iGiaNBBT",
  "key15": "35Hnazve2LHnAooydXZ1ppZNJxY9e7PVQyF8riugaHvQ2gjys2PYeetnexL1sVES9JMZHN9cJMM2j5zpmPA21Qtv",
  "key16": "3e6CFrZCJx9748kVbkJgjnWUAjgwGN6dF8a9i6tL8q1SZBxL1k8MgVXnS1KxeTv4yGEsdEYcXjjAzy2vkEqGyiRR",
  "key17": "33vynuvjGURKYjRz8NjCSdjrQwcPyyUxUJFBvt4q3U4XdCYRsyk3WCZyvtaVuNqU7Hfn4YPhRCWKTFu6idjhaNtR",
  "key18": "3HSY96bWG6nL3js6ni2h2JWA4Faq6V4r12AgbczLeEMTpqydbxz9GV6RcqGdE32DixpJeqKGm3nNDBHcut59Uiay",
  "key19": "5xAzzFQ966DZbHyzcv1m5L9q15oiaiMy6Z31yqmHyBH1bKVAsFBJkzDZhFFF8FiBGEKtXjksbJF8YkpH8SzHmfjn",
  "key20": "BttvP63ZHWfMpXh69fT7414ohqz32bCqN9ux5ZmrKrKYo3LWsY8Z38xi7hPgVqwEHN3PHSkoLPhyDcaxmiWPssb",
  "key21": "53hBZL8bkj5nzZcjh9U6YFBXQ1a5wxSuXYyk2h3f7TGThQgqLhmwm4SdLBzDYEx56e9eJM29QEitoA2zKEQtVrw3",
  "key22": "24qtQBBLw1vQ3izPAhGWJYkUSR4gT5dziMCxawLBdA4Ywx7VQW5LRSDBwjWimdGDHja1GJL4gF7AA6uXjNaWvChH",
  "key23": "3fPsk6UJmUK8g4WXdTqpQkeDqYwmiViddDSASiDQYDRg5Szv9wigri353VcSzn6QY8hT4kV4Tk4XZS9jSaYT8XnV",
  "key24": "55wn3LvThtyx9KYsD3vZPnr5B4XzYroAAdFZibYNgxowQQTfaixqzPgbq2Gaem7g1SPb8X4d6YojPCg3XuKy7wGm",
  "key25": "3b19BbQbEa1s47YYM7WM7NY6uSMJmjNPsSqccJZ8u3gr13BhC49HfzwYKMPTRjGaPMBY7UB3Ms6hhbrGeqkZtwse",
  "key26": "5YV4qQFsy5YE65o9xcfF3nU53K5Kvh569Zt5abj2UdbAYi4crXKktoaffjKLhdijj14bDEjrG1UpJZBWbJkVSCaw",
  "key27": "2bX6d6FEa4UD2NLLASMr6RAqSPhGWC9ZNTbNU2K15AnTwvLUmcQMaSMfJpedNYNRgY4XBQs36afM9FUKUo14jMLw",
  "key28": "252vakmyU1LjVoLUTGrzUWGusJWe2t5XV3aHzM8waiHYt6vz8bTtGquzSPjRMn6dF9Xivbc2cKaxwSzw7upTF8ci",
  "key29": "5gSFigEonhxBQpJUsSyJMmdELAUFRqoQvCAY4XKJyz1c8F3R2MP2pvHmUu5x6aVYGxXQ5WJW8AJkeZx14An9ktRt",
  "key30": "5LFbLsUu8zCWnPgBFDyKfQQP14C6JSLrjhkxgi17dZdTgRvxcSaEU3Hptag9bfiFG3TeMMAhRSrWpxPnf1M6yPk5",
  "key31": "AN9wzqPYzD1dKjoR768K3uuxJ24FPPPdCWUtj6pFq2yHNFFF3CPgUzz2NYtBprmWnkNT8MwtABjmjQUJZkJnC4g",
  "key32": "2dTenL5WUGTqSEYB2vi96vJAjmg6GxMFjxwDWT8NJ2EvfQo73kEZhNN5astwxgWwdfohGxhcEx56Dtk7VbfdHAfd",
  "key33": "TgUMD6JWMFHGh8TzTBYSispJ3tNg5TNrB49chqJzWu6WWd4Zbz2XWXmmLoJRCM7spqW4JetUPXkrBTpdd4CjbBQ",
  "key34": "3NtiKTotGxW7oXwJp3k2GAedQk6G7LcvWEun1sfUEQkFEJJyEzynSQheM5dfrSmS8Pud9HBMvX46AS4ojzcC7e2W",
  "key35": "3nNf7RWCiKyEwQ6N1rVoQfkgERt3C1TA3CPzv9jLumimNWsHwWYaVqpcLKvU1X1AsJBUZpMyb49contG94GEe5cA",
  "key36": "5io5odG7qUUTTzpsndU8tbLr5CTnVNwa4wme3KkLZXwuj9GcFmMLK2uDYEDaLxRv8vLxzVir29Q4JrsGgYHqr7LG",
  "key37": "4V1DF3wmdcB8JBT7h45vUFJLS3FBNg1sCui8tLBij8j9tzdAriWu9MCQt1HPHZjQt1fPhJv5GSrTSM1NFdyhfaVy",
  "key38": "T7JEBSSrL4MioTtsQnDeSozTW9xrzbwwGed52DvRuk6bicANmJbSAkRTwzBHX9ChwmXe3WKvBbaCSpDzYEJsBia",
  "key39": "VWmQESSe1CECna5FzRcBTHaRYnBrzC5vq6wqJ5LHJRcVYjBLDtHTaXtjJSCRUpvCXML4TnzmKuyK1EaQcRcwNnd",
  "key40": "4xk6H6dueExHbagzSQCqd8LBKvMhPBNwCo732GE8b3mi77TwPGoqgWtFcxHQzDXhPh7AipsGCoU4LYQ6UK9YNNMQ",
  "key41": "2NtDgPBcKMaK2NSp9W6cpg4DmNcxgWfQdFt2zdDtn8oZ5er94UtHm7hMDtB7gY3wxvALsw6zuyxXLbvpfpuHWEpW",
  "key42": "2zQjAApTMy4hQobLLUUpzrsrsA1UFEP3ZngNZ2n8jEH4wBPkYR9F6Zx8mMQYkJuRe9ZjZSwDMxZdjMqM3YpWwqwS",
  "key43": "4yFXA3FQsFyjmrrHiK7CTaJ9nRjTx6RWGzKLFEM6HzfPV2T5BYVemvCfJLX7cVGig8h2sehAAmdbi9gSTbuwq5Ac",
  "key44": "4EKCWstQjMZ7CKKttHLYck5TakRVT28ntipQAtykXn7tS6rHgBwb5DUSBD4kMpsycSieJdaKwr9w6c71Qam5P31d",
  "key45": "DX1iNZWLzjxcFVe731XLNwULTrmmx7iGJFT9GgPSqFd2utY8pBeAFxpJS99spGfQB6rBzSqHCnvAjgwjHr95zYx"
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
