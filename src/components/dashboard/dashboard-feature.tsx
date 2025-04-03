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
    "5VwkwByrd42j9FuzQZCjHKaufMz11ujo6oiDhyirRuFNugDXzScPZZTCFt7xRuwbPc7jMZkfHvX4uk62arzN6tmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y1f73C11cemdtxPNvs8zMfTDC7DCEL4ZDru5W84VeuisjieCe3RiNHiGorJUyuyhDN96sb2cdx6VWnkSU5WzFu8",
  "key1": "5cSu8W2FEdGkGcqQv92Xaai2TasX2ZzcTvXResrdVxbUn7wV4VJD6jJctKR5ZS8VMrKeRZ4WbXYocpW4HSkSk8hm",
  "key2": "2k3XhfwduneX3tJRn1F2BTxKFVjtGAnmmkbK4fifqgPx5ND1ofhYX9qau4rQxFGhwg5wpiuTnh2tAwdRtBufs2aH",
  "key3": "4dBMj4tpro2phVkPjvQz1Y5D6zWATYMkZXm8Yxw7JFCZUsodFgkDTkwW5kSZzx1Ct2sRRbbVQGLKwSdw1V9c7V9K",
  "key4": "6684qDh2kwN4CGQKByR7N1Ay7bzCu4v7jfjpdW8VnEVkqmETz5XaXnVQVKqdghGGggnr5W6R5KR8ic36XbPjrRC3",
  "key5": "5pAga1359bkfGikmi6mKLzZ1aP9jsU8SGJzxE7QRRJDLWC3ZoFbdzdgzXzvbGRBiWaGKCaxmNYyF7kyV7sTuRwPq",
  "key6": "3MtGM9ZjfQ5iQSA5zpuzXuoZT8hfYv4MxHzfQKFxEojXwp9iRWEhyRMVkYuuY6BmmMwoUn6nKNBgKZq2wG8DhwTV",
  "key7": "2htWHMZsvhc9i5URSpF6ZZ7h2FK3gQPyoo3KpUZ4JSc2ea1jZX7T5gzsJ4te8KVWAix39A1BQbBDmL9f7UfvCr6q",
  "key8": "5kXdyGwsUcBLA8847GNdw2ALzHK6HJ8fGfPdvsKyLhyryPBLmWLKpiAvzMx8AUgKUdZU2gSGpTRTkxAagV4YQNdc",
  "key9": "67Jaa1xzmTg5AnMHHLQ6uEv4y5WSAE2aMxdeAbRimw86JKkitm8zQrwhhu9T2wEjVj2L46i3fQfpzu8LJoniK2fM",
  "key10": "53tjaAp9rFi78o49RvvzSLTETEzV3dDrEDJSRhi4eHQLHyd8Ys9cr3pjD99CkPanjhKZ1beWCBKUasews2GCKd7j",
  "key11": "oHCSYxrvAn4eQqQeVFxezn4nUn1bESzKG4izDFDnNLfsx39BNvRCqYUJYHRJmcJXysMASiePfy8ff7HxWZhjv85",
  "key12": "5w8ehBjsKEiXnEgxWDBodW6AXSCPwkXZcjx4CARk4BanSnVJ9akZTyqeTWm2adA8EPhboHMuFe2RL6LiZy67HPsa",
  "key13": "4xhdix6GHy3Upvi3Yx1SGXP7uVbgvgMLnad19Lh5MwqY34EVtrLwr1H9KMFKoTCKjSUZMpYX7ow9qcVfU1SNMFQp",
  "key14": "g9PXpERFUCZQSs1ejq2x5Qg1xe3kPQqqmrYznLJMeeFCuaaaWrx51w5vYReJzCWdqoEj3DGrKqfWmXxRuQkUYCE",
  "key15": "CCNSrv5ikwtooi8JxwHAHfNUWyY6MmULiF7uwTDhUHap38hqabXMZDosfs2kppE48jbfmUQoyFsnLvrf6gjXTyR",
  "key16": "3Dro1rycvQz1CcxQoKwgu4WNdCZxibPXSJZJRrBSPUCgahcF3kyCWp472jSDvHeL9Mmq4WLTsC63EXhGgs6FTfUf",
  "key17": "54p8mb5ahGChpGAxos15c7dV3MQUxJyUtdaN5oS82JHsoJVV8EYmmgSfL22xmapgkhicaZh2mavVmHzreesvWmfM",
  "key18": "42XWXVXt7ZczkAjos3ZHTKsuCxvxFk7ZTKh4aeyekfuPhwjuXpmqXw7RQJbvWA6Nx3nwak5RpMKkZAryMsXg4Pza",
  "key19": "4EGgquPpgV5wPoRVGZquyQEzn5GTnuERGUSLHzBntYbaGWEdF2V93Rtbh1t7sNFAX2zibHjE72qR4bYL7pVTBTdk",
  "key20": "4LMJcDwUSuGanjyVkM5Ye8tpCBYJDeoqso4cLzN78e75rWZCJ8CbZy4eya45XknX5MN4WHsbtQ75MqTttJaQUWEJ",
  "key21": "5jKDCYDMPDkFJekAAifJZBwwL5SHaJeEwDK7suGzzd36Y7e4qbV6sUxFkKextRwGAseXGVRRC398wnvqNopfKADy",
  "key22": "2jtebJtLadT8ijD91hHKaRSHGCdrn1yk6saHEgH8zUt7gNKakrvTmPn88v6ed4whwsigyXXWmgUwHPYmq2uJtGY1",
  "key23": "5egpHYtARZiQuy6SQPUFTNKZSyy81uatRBwxLRyzbhKEqPeKinUP4GvhkbxfjK1VyWmzmptP5DV6i18pePQ7aZbq",
  "key24": "55cGnmXtmDVdFCnGLNCB2Rm3dcWaYKxvueK8EnDfB8GmxwfRZM4DWX6btAKLzqzNjcvP6LDhUqQf3qeMjwMCMs86",
  "key25": "W3WbRr9YbWg3nRCJxS71u7X6j6ZsC41mVDJYnbrdJULPwFsdSSab9AMtUqKA5GeK4KtEkMkNYTqQkaQkqYGmnsk",
  "key26": "28i6aaBJcNXtG9zGR3ZWn3fBsUz2GYAHfFj2t5HphjEzw9sv3DujC3dcLSvhNhg1iEWBgGAZpSdU9PEYyah4HpGc",
  "key27": "2iJ2Sfeted7Ap3XfqQ6M7tzK6Y3qQJQydsL19fCNH9KjDLnTurABvNeKAFK8dgSNaTGpxhK7i8oC9Pa3J7ahv2LN",
  "key28": "2BF2NzmvAysxzzHJ3hF7Gm2hPVVpCtYMnP7oCzN4GaiXqY4ddvPh7WUv3MXCco9LEWGZfhe3jr8LcJwRMoZHsa4d",
  "key29": "u9TpMfk8baYBbuZbi3PNon6pQhefdvZjumi65jfgr571W9cpaBQAdiS6h1kkqxpq4nym9py3uf5GNzefNnZH3NY",
  "key30": "5n6tAK4DaS1yK2sVoTBeNuk3FNaM86BYNs12hzVgJCkYaU7LCLP9w2wNzab8Adq3rnsPV1fE725DRYaY32Z7W7U8",
  "key31": "4ukmTu1tm2Jfn6zeK5hn6MgzAnso651V3i9idNrfA8kbBsrdFK5m2kJ9A3x5Pg67V2XmrqebBTYKuWodriiGbfbN",
  "key32": "4s2Tov38iBxxRAixMhsafAHCFoiRg8X4MXNGtfFZdHjvpDYy3A48WDBqEqdx26RFd9tuBSJwUKEjZNTdTJqYqzhq",
  "key33": "2JAF1ToKjxfZxEiej7QLB66RpFfPX2Wazyji6eUSeHAAQCJRZsVuLJcyQioVQa7kR3RZb7xY4GzLj6UWYyyoeDDU",
  "key34": "ic53pr7GNCUe7eBcNxFVub7ToVxEd8iLvyfJmFsungrEuDGa7YcgPeUMSErtwHaUfjkXPwScX6CmcX3zd35VvC6",
  "key35": "4UVTio4x2zmULQg8Ue49RgsGsoNJpSPxoD79HKFzaBgqTDdiFgKukwbzziP74ph15gibc2zs6emPQbiy1LdCa33p",
  "key36": "5SjBBfXe9FqJgGcxLiQuMPNG3H4SrCUhCJTz64Mww6At6e2kEhmyDWk8ocS49jTzjK4s7L8kg7zyuUrXFBFJRKQC",
  "key37": "4kt4bqY9UjRvM155GacnpwAd4wZoznRph8Msh22ejt48kEwNGftdDgS5xFWCzUH6XxnBcoykuhPwmZf515e93Ttd",
  "key38": "5UmiYbpe9ft6v135knnP92d2HduDqPHaZLzsh57RQ7NpMZhDJax5qDM7Tbhp197jVxRmahD8tFzts31k7DWeULpE",
  "key39": "3kgpqAsbrS3Vjaaf7BCkZqWqhsQaCKmBBmNbtAJYbaX4oiF6z61GtGAfinPSzDttFXnnCAT64zJwiZBG5GjMuTrR",
  "key40": "5eRZ2Rmb5HEGHC389VebEvGZoqVp4uyaZNwSMtMx3cVL1CAujUwdGuC1KFbVzHsxE1ZQmDAAP1Vocj4SRiV74mCD",
  "key41": "34xWpYkFUzWbFwiRfueNnKgBtqjTVFG1d7xBeUUDfR2rdauGgSoDsMC9o73YSYrNPD1eqqBiVzZ9AnYhJ5n17wra",
  "key42": "659diDKEtcF22Q3yBNXJyAeZvwEWAG24DAfj6KULwxYyZqm7PLMsLF6z1YEKUShbVnnwJxs2Zaj3CjppMc94RgHd",
  "key43": "3y5Jm6CDyJnWuSNWVjhTVkdTAnb7XvcydsQia5SKZpDuhN9xPdQjjicNk1haNx6suWF2J7ATB9h54Ep9A6pQqgMt",
  "key44": "4RebtusXfs4iBs9LcuP7ocdFj53G1Sg8wXcX9V4QBRohDXaXfWHyfc8X6GsDxpQoPbC1RQmRQESq5eyRvHDYeGP4",
  "key45": "61N3CroWVfS2YEykStXq4rVXd5Y8EZftWJXXnmmdxRvSWNu2NSQw7AWZNnFEeCts4AiAAWmhuctum5Sakqc7nVFK",
  "key46": "5yrPrcCrNTprp4p9fg5B9jN51giP5SH79eeSFLRzQLFBCPdyoWvqBwFJHdAvZ9BbpyikXNDAwCnHugeQ2u1QmLBp",
  "key47": "4CGv1vCjvzZ3c43egQ7YYCuTumfDzd8x9pcKcDfs8fUHDrRRQf9J8Rez2wyQPzv5bfb8YaqbpsSUZFEZASGmUk6t",
  "key48": "EBquHSG7Kgn3Vtc5Fabt7dku3Hha8vK9gRHV8ghEDo4vVEcmHWUfZwufafUDDXX54jW6zsv932t79wY7VBTCUnr",
  "key49": "5hVopgiRCUBFC6u2JypZ8n6K4KhHaZeDwP6NY23fT21zHStobe25nwbz8dusqCkmGFqaczZPAFt4oDBGqPVjXuJs"
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
