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
    "2LZcgTaErxh9VovXoDB9iSU3fxpJkoV512juBVriNRdbtXPXV6fVRsRpKxqPWQ4H8cKjKLg4ZdfcHCyp6wBDYJwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "arbL7bXma1EuZiSdLspsg6RpCFC1kcsRxouESRev9nxDRy6AcnGT7BKV3PV5PRvNZzkoc7mzLLM6rWk6QCqZ9pF",
  "key1": "2oXBCjW2aXfUnV3pbrwFM5ke8vAHB2gbqSPKy8mVACcdrcD4yELvkuG6NisCmUKVQDqfgoDGizFBsVgvprH9CqkG",
  "key2": "4RWd4S72njnFtqooVbMMabGQXjwVRfSv4kPDvSVqzZXLZn8ShjjMzM5Eh4oeQbcqnedoKYamP5FWmAMzmdj9cC8S",
  "key3": "3BnGTo1WmJkPrHNsZUNBHa1fG1NjuKTQGP2ond1xasSKnrAuqxotMEqU84r1NC4D5p9DYckApSUvXVXdsxAKhNSj",
  "key4": "66kHqDvXFdLmMaFnsJAnsu9AigSrUaKUivgSCo7V2gZwAZGmdrT58ozPjajQAgNWMGWr5vHMbnN84HWpJ6WPNc2P",
  "key5": "kWtzKksaR9mDE86KBmPWhEj4gTstdmYxnfGPL9jtBVkbKc561xraoXQz3poofjThXXRU4m9huQs114D8APqSwyQ",
  "key6": "vETEJXqH7bPmHyjDoPqsbuFRzWn61NX9Nc54QkaZVfJKzXVSNtDz897r6RLT83gHQhZkUJjXfzPWeStikMke3Wm",
  "key7": "3KoXxwwtmpBnF354DCgMtm2bDiirfcsZhk9r6t4jqk1ayFVeb89W4ihGyAg3CxsxxFX7gzcpy9XDGRzkU5zwxSzH",
  "key8": "59iu6x7Y2eFKTVLpeoCDYExHgF5C8LiMjTvKJXt4gv1f7L6e7XXDeE6BMcoztP5hT7WkUvZxjtDgXNGA8DoTB9LV",
  "key9": "66t8XpYVP4epMeXt5djbcvqX93aaUY32UnJAUGgWzRqeFZ3unWqKScbmeo5vwzfM8Nmh9AsEcuDK6TbeF6ZLxkFz",
  "key10": "2DnLpWFN91X6H7k66oiCR13rMKwBfVFsGJjFFn3597fwN5KXfX1D5SegUwPm7iNoSWx6BAsv88QyDe7S7vvFKRqL",
  "key11": "Zd6Hyk4xqMWj1E5HgSgy7NWppsQRkNhpWQsQB8rbc7nGXoi8tnt5twXweZjgZph3tRf9uuJ8zXYTP8cg61f5SY5",
  "key12": "386vxThbeASf7h2gCFow8CBWKYZfz8ep9GebZAzr6DdJczXePgUrAfsBa1kgfKDiwVPauK5waRBPhpbEvrRfoG7L",
  "key13": "3qCyhi1Jj3UE5n99ney7LZgy3rHiDMuHmS6UeehbnMWTQW29aaYguARHyGB3LvujPL18hYyKbNNWUywXyMB9PqUC",
  "key14": "5jxBzGf1EoMTJnYD32GVvczrbi4BmJRaTsZmYWmviC3thkiQgJUFuVy4mjDpFbNM3wJE9xFZndJRTkbEQFhq5gxD",
  "key15": "4KiBkAieMajCQ88Jaf2qyZayHMkGbDV5buMY6ZrhooKeHPGNgPTGjfq4rnyo8CPiTszbaUK2ATJbjguKEKqpPhVa",
  "key16": "3Wv7o2NrkqPLvJLDmdQCBAN3QS6wKxrigejKxt3o9TaTetYXMMP1WqH73ngdqjbEwGd9H25TYRs2Ug8WKZWthqQ1",
  "key17": "5c2CAkfNAKmEjQgy86KQXJBJUUtnBrYmeu81UHfiWEUE65jHuJd5bRzZuPRYrAc1ZjiCvLDTfbh7mRu3PozqdkyT",
  "key18": "Jftm37DgdmaZHCXginEyydPSzX47mUXvPDjJtzyEqfDGM2REuMvRHroxXscdgRoJHrVJ1KwR2DnDqS2tt5D2C2a",
  "key19": "3hBHSXojXGioV3GJzwQxTHCqm7cfnPyUXpA8LxxVKMvKdanAv2KCWJedjh1pSzDhDgd7zk4tLZjZShWxbxs7bn6d",
  "key20": "5rFLD7gh25cPKkCfT2E7JBT1bK8hAuokvM573j9WxdbDi7DRZ4CoSWmxd1nxoUthZyv9LxFbSwDhqdqnQQK3b4sp",
  "key21": "2xxp4wHYzJtqEiYXdUDBxobhMRnFuDe7SFuZ76bxHaaiPhfsfqG4ypAMXsJBEvkHZu2doEGGtnf55ipVeqNtAiqV",
  "key22": "3dDM6JQby5CkVG1t7KZToY9MypeDAYJHWHCwzH9gaUifCnM4FJagvKaN16gznkybNJYKjZes2zhgAjWi4cXLVvU5",
  "key23": "4j8FWAyV6KaqYS9gzbtrc92JCfYrwGccJtawPvtun2qrQDUmAckNdYBAS6WPuyUKhYZWpcANt8VVMBVz6Zzjn9xW",
  "key24": "5JUfCQQRqQoUKHV2L2d5CK8Mvei4RPG6rrU1TYEWPxaP8dfzELGR3V9DpjxB5hawsxh62CCWhfCprtjzy31CMqdW",
  "key25": "3ZTKZPBRYMGhGkXHN1nTuyykpNiurgCg65r7hwHDLbUSgyxj3Jqc6KZgdJ5vrRPDx69Qn191EukpNvr4st4nALHL",
  "key26": "2sVj7JNEu5xyhchyZNnRbvnNpL35ZwPwKmY5HKE6aevVTdofp9nfbEvXVLvHuv4kGkkgx7pAGrGmo6gVavwGzadD",
  "key27": "5JGgXtw7CFrVWdk8jGe23LA958fjQszDNZCUJfBRZcLo9bGBqRBKa2wsJfFbPKEG7f7fKXoFWkbyx4wEMKSsWKbN",
  "key28": "5dWyU8btH9gEsN6wEDq34NgB29Percc7VxcjzmcXFUCQTTEPBpudukNc2Yt4LkG9TfYgFPjeJaZxEfC7UpyLYaxS",
  "key29": "56yDxnMhJvqJn4nmKWWMQncqykvz74MEh2TXjfQsRN4e6QUYWX9QD7dMreY2P3HABy56S3jcTJAVt71kCvcctnRh",
  "key30": "2CWugnfgR7794HbREMxDgyywAs71zAfD7MjpWXbtGfrGjfE2K2GpkcxvHW8bH7ubbHwqA5iSiyzuACfjNDaYAGzG",
  "key31": "21yjqtYKg6NLHYC4SMYpVa25gg6hcSCqUYZ66FWc9SHH3hSzEexcRjooE54uu8ZtTfKXQXsiSuyMqunBEFFbud3B",
  "key32": "54ExRxA83BkMCySAGrw2VzxVkRK1Vq38iP9eTFSVPai86bLuhGWQTC8UgCF1A16EZCXvu23iYSfET9pBTomso4er",
  "key33": "2ZqUu9L2Lt2UKRvK18Tf9Jb6nZ4Z4UqCjgZKfa9r5s6SY35u3QVjsWEVLYjU4FpGHWMcdx7Wgj71oMoRQh1LqrN",
  "key34": "3KkfecuMQV6TD12TXCYhd4s3mPQmADpJA3eHifcYH9RYAHbX7Cyx4kkcRLZiji53PeTjVsTNYCWoDXuMzttNDgGL",
  "key35": "964QRfqBaR3kXEc1bU1KghaXs42Hqt6t7uJ7ABXrF735E9uEvVbDQPGPFYCaQZpTFrWxHEJrQ265NyeiW1uEEw2",
  "key36": "5q8fPaKBuWj7tKKdrWsTSna1FTemDdA979c5PWE226BQHE3kcDg243q5thiyCS1cgAcQd4vMhCGiTVCLkSNRWu8z",
  "key37": "2x2yx7zBd9DNr9zRpmhTD6FSDprYKFk6yY9wYzUKpL7h1WRUt9wgkcAT9NycZ9sUJKUviwAABeBFyFf1k52FGwbG",
  "key38": "5JwPuM2zanWoTMHHyN54fuYRdfmC2jsjMG3saTh9a2UuQVqWQ6mdQoz1XzkLms85Mebfme7urPb9tc4swCyQE2MS",
  "key39": "4avxJ8588dXoMDFjPKsEWNNEnaJFomo2tAfDWD4NfRZwgq6Ei3RcDTzUXEZCpWhbEoNjc63RPXqRgkzRmZqzbuUD",
  "key40": "4dDYXtoRVbKVjr3mG3Dzgf6YaTsgC1CmJYhcpxbxj2df5hBAh8MNSRQxXnF9s3tCrk2SGm9ez3nrmXe6oQCyHXbt",
  "key41": "ZBg3HKVq6WsJgRWFnKT9ATUJusXksSfvh3MuaqQdoVqSwtEmu8TE6mVqqWfinuEcQgcbaYSKQ9nLqB1zBCCUPdM",
  "key42": "5rmraU5NDB6W3ckqAe7AzuFa225BEpicjQzKStWxcNX2pygDQSFaGng11jzY7FiSvgnjMDfvrC6pLApwJNinbj1Z",
  "key43": "vEykXW2tN4VLoMD7AbXAh6YuK57zmAYEe9GUE2EmyTx9QUnbr9t79PutkBtzKnnKUGzaYPghokjJScEvMJAdApR",
  "key44": "4z68mz6WwJrX6MpdfrNYazYH2tY6YRS6WaC1AhRsQ6S65sJQhZikeyLCaN53PHqE7bb89yqk7mTafqCt9RqW8XCM",
  "key45": "2V5UR7w4F1rHT5ZnapwSMxDiBGLSXq2siV3QqPTnB6Qe3heMAVXvY9g8ZpjFuuhzebLxHGDsoRo1jnnVWor5SRhK",
  "key46": "e9VwuBwDPHbc5B3Ju6XZetAtfk5pGGornRbkFU2Bx9kuRB4FnsBZzSxJhAsLxdiSTWBmYADJiL6S16DmPAKe6ap",
  "key47": "3W8vDjAd3uZozNqSSGCvwUxfyR6NGi9gV5z88mX1XQ3rZ8mfaZHGYZ5MAnqE8VpEvPr9enAmbZRSkMUfeWkQAnJM"
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
