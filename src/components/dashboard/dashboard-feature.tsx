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
    "37N7BKMKqWqH352W6kg4YmvsZZQL97zuwcm1NkujpST4XQD928pbgzhBYfV9a4iYEL8mut5mYzX8zXBy3sqf4aVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kAgUnJc1n7JUpWo8bF2Qs5euht35CzAxfzAcKcvAaoPSsxFRybL9vN3vsgRMxFiFGacsQmzrw5MgSfPSJ2BR9CC",
  "key1": "2zecswZMhUL4kG6raY3NWGMJapgqxyBgXLVTDPnLvyukA1pwQhnbG2XimAPciTBNBvJqjjaFsKqNSZU67aQ8N7Pa",
  "key2": "2aYmfbk7b6CXgvygbxrHKtJwqLvkbYBSamDurd6PBaUZpix3CSAzSDNDbJoqHjJhEmPvjWqdycfqF6RVNdqgRFdf",
  "key3": "EiAuKMKZTNxdM6wwhUen3RyLhgDMnC59msD9eMRJJv1xJ5UnDGoiv8xMDYboKd4NgD9BYWKVqHgup9fGZG14Emn",
  "key4": "2H7ZYLnYVie4DaQfJJDpGKAa9SAycTtZpYK7FV5joBjzoamEMCHcnbsvJep68youP2mFEPHkSq9ctimMHfuakn3B",
  "key5": "3pY4S7oDdheKPk96DhW3nYWX2wk8tDriXd9ir7gkftz36LzzW8gc4SYV2AuY9Zo6XEGYYNPW2Y1tMmpVeZzpzeZX",
  "key6": "bPGffa8Ud7DFkHNMT7MwQXepbTTVX9tpwe6tYh8ZfhZo1hUdacmKEJC7cCSiHfQCXvfCyubHdhc7mWLBqpUmGfd",
  "key7": "3sb3sco6yaMgtNT2VFMwfZCgeGcjjZr34g29KgZttYhhn9Zw8UqaFbxgSEnNG6i3CNiNJqPbejiD71DGzZwdEnaV",
  "key8": "52SwVes87dykbhMaCoTvoJUpbynz8kNj2hi3D1zvjxFqYPQ3AKMHTehxM2N2B2ZsW51L61ezpYt9t4aBbw5buZ3z",
  "key9": "2yrYbyThWitP7qSjuxJrg6jFmCTdsYjZKtAmSJRU2GBdLj2UcdxHYrkBg4nXDH1HruYGcjYFjA49cSa6BRirHdsh",
  "key10": "4Cb8q83hr9W5nuzmShYVT2CJEkSff5oVspGCRcHqvzmpw4iPzfDhKx3qVNsFC6BksUJTdszrMoUqsvW4m2f99WmK",
  "key11": "49Wks96XA3sGszvDbK4nyk1dHFnvM4VBu64jb18E7FgN6FcGwxXCfZb1aW5qQQvU6T59M6MHPm6t2FVBdS5pUQFi",
  "key12": "5wipasmDRNsjN9VJs4ZJPYi5uG65hKwDc4x9b3jYc8zzB8MNQ7ENUpvJaE2cpRuTadcmGFUCMjPJtwZgSS5MKRbs",
  "key13": "5KM3jqxcnRUspbXtFoGAYaPHS2hef7e1PpkxfPUVKiCReudaw75uoRCkrnr6XewN8bore3eG9FnjfCEnLt9HCZGy",
  "key14": "26AP7UXYn4gWe1jXkYxdfd9Unf8RxZQgRUwP4PXVTPPQ9mn22ofx6YYDGRT6QbrJx2NRrG5K36au3gtCZvRkPJAc",
  "key15": "2W6jNg9ETjcvhLhDa5Vc1D9HadqumZtNJcMxKCJ9924DSWzhbEqqXBqsmwYEYBYzK2e5kYmbtLqGWANvwEXtWo6p",
  "key16": "4zD4HAnCJddPvpd2s23gQUdTb5nYeiVvPNK3RxZWhdER9XrDJKYhf4EySAQXvXtazq3WEx1S4tdLhLZ5Q1xxQWMe",
  "key17": "5SyEuyiiRJkuhbkehRtXfzBV4ghMmUk7DLuTXPGv95YqWdTmgNiyeUDfNZdTopZQUWrDLBVWRC1GzUva98sLygtb",
  "key18": "3KGc5RvZsr5Etu5yS2gDNTmHjEGez9qTUYui9Lq6faJLG7LeVF1DbZM3XybAEj77CZS9bdabfBoER3ZYiSGdvW4s",
  "key19": "5QezrFPAUkr4J2ziBxVKiupF3LG3XrpeaMA1Ss748dqmtwztbe5CeAua2RBnHYazzJsPy6khLhVqzWWhCtnm2xbR",
  "key20": "4EAGJB98eHksi2AZA9L5H6saKpBh3Z5ojWDapU28qMw5EyuZ1HyhGuhriHrJDPxBbryQZL1GgS2XFHMu58zDoi7n",
  "key21": "7P9vh5eYNuKfp6XdHprLmX7mLr2mhfHvxxrBxKK9oWiJTtbMrkBgrQCDqMhBC53123hZk2ge9c9SY11CqWvTUbG",
  "key22": "2hySC27yvHNLGqmsKv6gA8C35Mt6GR35XfBAkTWWo7ZC79NBFBabsMpsujHr4XT58gSTq82FXR7NPz6uyDUosQPm",
  "key23": "5cGsTYv42tkASyKhzamRrVr5xJxkHHVNGhx4BVFAhKf7TwU8H24dE3k8Dkz4N9VMmeWZ9tq1a7DpddPSsBN8z2tD",
  "key24": "3mUprs19nTT1ES8wsityx7oQFAB8HY2GgudmnXE3yc3T4aEoPfKAVFnpAxcMv6vwKx4GMe884jqioSaBxuCJ798V",
  "key25": "j9cW1LXcWmj4hPyrHk7NHWVvFJJghSAEsZMrPEAbvmdSXsR6xtTp81BEWmZzsyDdMyiSZouNDbbWKy8aAtuYdbB",
  "key26": "52A6YXQoBNk1QUySvs8tvJuWmQ9JK33e3H8G11Xicq1t3NobVQ1r9L8AsA7Cg4eU2aT2F1KpPjZL5fXcFepv4iwh",
  "key27": "4fnPVuh1jKrrU8CzZSU7Lq8CS9bn95JpoKt9q5eiY5GyJ6iXuy2Fe91vizqVFNGt3iHaokgBeg6jgsFQVZ6X861A",
  "key28": "4YEL1UjL22RQXB2JkYEDj2X9UCzjLAz8RTbFb7S5KAsJEecCbGvHTWt32S8d2KrcWDi5zzzc3JKPAoLSrwFM75Cm",
  "key29": "2mUMT4XrKXSxGXjb6kZnvE8f3S8Cb79H6QCnPDhxKXzWdssHSEzGFeSzSsZSok29aYRTFPVLYCkMHZyeeJuERC3j",
  "key30": "hhuYL6SRWE57LB8LYGDXjeK8Ph4wKcbkv42WBseWhiMZ4TrKcP5KAU1C3cjYEzH2bVVLTu2Q9rYDpWK9gXt3oGy",
  "key31": "5smmgjah8xmREmHUimoFczFotFYa2fSQVd4MpXTtaxia8mbbLkKhnz5hrqmmc2a2FwxTQ3pe8CePicqUbSaS2DTP",
  "key32": "4q5xshCCKRL7imdzACzcYerMw9Hh5QsAgxxbtjRNCLeJRUkBmcjPc8YF916axswZvryS54uYud1EMjv5zwhVeBn9",
  "key33": "6vkhSsar2eMqoFiNPNVh2uH8sL5hvACwS3rdVhbaQd4YBgxxK9gMKHcs67rhjiv26ooh8iopWJgsSuYG9Bzsu4w",
  "key34": "2PSwW8peXYS56P2STMSh4Cm4EpfiuVKZNbHWhG8UKNWrarQKiMpLNvcQNGV7DAxNPphQRAygRgwPsWSm3mmteVtK",
  "key35": "KK6sSQCnu5MiGndteSyg5Eq6yKuDXpSMhHtoaCpkWiLHkhZphjw6KHjfHfbK9v6Uje3iYw8WUpDWMb5dLCpomyw",
  "key36": "5mccWPz8XrLP35YsVpsW8zscaCH6E1fSZejkuMA3V7bm6YgwQbKjcmBcLQPDsQMCx3VNYJM7PVNygquMPXLabzma",
  "key37": "5hxCENUV3NQ8uNNfuFiYFGwUAGYrT2uvTkNYe9KFc52UADTi7tKyVe99jaCQN12QuTrcdUjd6eX7weNM5LsZ4dWD",
  "key38": "UEBegvjyUAytmZ8nuymsgaz3xkC17L4JJxnVJpoUWSpgkNFo653uL2oFBBMf1MB7W8L2fU5JTEMbUJKUt1zACJU",
  "key39": "g48xU2hiTz4qpuK17drUE1ZDeQ8GbKWrCFaxvCrVYUTEomthkLgFzmkgYpERNNRRsf33s7kufepWAztgDJ2quyM",
  "key40": "5KcsTfJyvY44y1vFZWj4JrVM3LBZbDvKjbFNv5GhfJmtnoBhkUN2GPNTpyNVJHJLDZHrXJqCnQtzYCPJRQjzWUEB",
  "key41": "2m1x7Y98CP84YCkoH5MjqAdzuJrTYnWsTFASX3zJcMhwN4mN2fdTQFQ9T56igCHQfpxHj5ZevWBz2gythG9JZTo",
  "key42": "5kV7rvD4vKEdessmN36H6LYPKyYpp4P3AdHLGj8wrmXTRNbxG9wau3xGoKsnSz2BXzQJvgpNdenKgBnSKxSNTisd",
  "key43": "5sZ8nhQW2J9CSMFXZh65WqxqwY5C96UxC7SrSZji4jELhxy6YEobjtLdomiYXgMXft6AGsdDXn3tjWo7FcM6W8uf",
  "key44": "4ZC4qu2NZiy2Q7xD6P6vLyc9mTFSrVvG1DLpLE8HLCf8EpEZtAV3quLvmn2JaRWfsvWE357fgmWLhVZNBb4gfKkT"
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
