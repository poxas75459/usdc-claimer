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
    "5coobPuwQvmSkajCGH7hgcYPxGhvadLtXMBJ59EEzXiWUiHhmVYLw7HAZuDbDQyr8kKgSLHGZoSr2FDUfDYk921H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5whv5rXTvQYuoNQvc1ddG5wSD5CPFwKPx6oNcVNX6MWog1uKxz5mFCiiCB2Yg4LndUAZyUG7UBHydu61eWuVqADb",
  "key1": "2zkqGinhVmUU5kTSrbVCdE4JebsVvfZmZB6rScomwz8enB3HAEA4JT1SeP9vrh8zsMVAwD7AyR5wyobG8BpkMrSh",
  "key2": "5epg1xhNyf5ENM8SBWozfT7YEnWUvaVB94QBXaVdqA1Nh7zmMQs5eG55z3nxEd5Txe8y5jNSip31YChaxtrzQp44",
  "key3": "52yQ7eS5178jyqV9zFDZ3cb5HKwuAwiReNXXMw7NUTtvo9ERYozcdfrQCqBiaSk1edzvobE1ycyuoJxWMwd5Aa6N",
  "key4": "26RzYhQS5LneQHSrCucPq3Ac3t3CPatT2PYMsTtpBappwumD4pmJXxnvg4aYCRggoB9tFdbNuUd5VTRApAGDy6mC",
  "key5": "2bYctXdhAoYaUqHd2x8UwMWQUunEiiQjPfZXTPBVt3G2zWDw8XJVDVRpCivJQcTsVtdEywZVjpam9BJ6iczLBRMq",
  "key6": "3zC7WX5AZ3bSMrDvuNmpsSGnmSo2dsjhqCS3BeDqh8AqrWQTq3cBYkHgaatMpJJMTFVaei66GmcjrNr4xhAtCmHT",
  "key7": "3A6HTdqcF1s2dhbCCZbHao313FyyXK2iWC6MDvKM7UzrLEb2E22PevutFVeoB9X4xVArCUgN5Ym6MKsZgW1ZmNMz",
  "key8": "5rpN5Zqn2c28W8x7HurCC7rPiFMewytjX6Lsvuus8NnhkdNLXD934xQBmoageCsFy1KwBpn7N3sYLzADCjY6ZSJo",
  "key9": "4UDbPyxg2xfN9SFSu7zr7VceijvRRW6aFfqV6LG3MDsX97JMGobjXQyTKx6jXBEoiJ4deNrZyT6P4f1B1kZAYQiS",
  "key10": "46thGs3ZKiKa3umDbV2gnh6N8wNWh43YkdTaXJ4emXduGopeRrisVk8FkCMUoS6R7e26KtD2Uphxtca5VXpQbNcy",
  "key11": "5T4nkie2rZmzn9v1Vqr4XAk7c2gJ1DAwZqcVsZQb3zjFuMVD7v4JZGtrD132SUfNZZ4e1uJyzbHZHv2Ez8HrzsND",
  "key12": "RsgVmjSXE6W1JUBH9YqhVZsSTa2KHiAuyG6bkBEtgo6csRfsXV9H1dwy5QS6WCxxALRpgJrkmnDJ8M7J4GY2kbQ",
  "key13": "cJcqwvbgzvskGr9fegvRBYSuJFyzbaTJgJPd5cj1Ly4L3QmuQcBiQunMWxVCRZVPq6oxNtc3Z48imTTWf86DY3B",
  "key14": "5pspaM439cbtgZgUXP6xHifCu9RtPVtctAahbo43YcvqohEGUx3rpoe7vKauwRdrHaf4eNpbdiZTNsgAqLCSEpfm",
  "key15": "4AdAamJ29bXZmEkN9nq2FU1sG5QwAjKKWsq9p3vYmQVHCmwLuGzRoQ4TtJiMBkWLdaJt9PSRWdxyAK2BSgfhBrdv",
  "key16": "4p1BJE3zodSm5Vu4TVjh5m6foGaXZN9t7bEKA1H6wVtCV936b4jAsJQQE4BCU3Pn9bFW6EnJvGYJxDdisRsV8bDA",
  "key17": "327XAhPNL59rJK9ExqM2D8QsvVzWWYMVdCbRvx4H7ZdWmWSanHatKSjGgopEVPqGyECeAsLnqMuRLp4wmx5sx6gU",
  "key18": "b55acuk4R27FXkDAq9EN8vLh6NhywwVgbhNPVWAGEvGcxR9VAmVNrVzC1bHveyfwLbfqXeubP57c5kZfrRGgpHG",
  "key19": "mNBfAPBZZ23s9joAGE37RgJdi5LFfH2p7QpLxjoYaAMspZP6VSSuLtxVu3a2geuxtttCbwyWjXx2XVgzHFBX242",
  "key20": "XCGUrRwgekbM2ehAZdRtRRLWpWPvFKY8T9PBpXfjtMuX79dyWV5RgqbzD9jZrX3JDk7yQHBSCY3ihYiuDypz388",
  "key21": "2Lpn4KyacWwz4n7JfkMtAvapLqRsLA5WdstnhymgUtJZwJqZmZMUgFpnqfQZZDT2NwygaweZMvR552PBKxT7YMua",
  "key22": "rr1rn6Hqwpm7uXeasv9y4smxc4A2Crz4qHtvi2SAdRYFdt5x5VyTwYCNyGwAfeLapvp5CEf7en45giRfhLrPe6v",
  "key23": "5cDLqRDKLfs17WWyfbsJU83HGbx4fN7fDLKQXXjLJg15R8sxrcRvQgovwC8bep8agyyDkJqSp6ukUmVUuUMYQtzq",
  "key24": "duamk7g8p4Xkj1LnwH2W4V8morFznCf7bRKdqo882L5bxqz1aBu2fnHNPdG6LS68217MEUBPyfSYkbb42kaGVxz",
  "key25": "3mQfiDvmbF6dqH8mKrkpSXrGcYmA4NvL9xucVH3oiTRSy8J78GSgYZDT4EEZPUfPqdxk8T67fJX2ncnFcLinEGim",
  "key26": "2joxRweXYuFy6WkozfHMfpxaSxLnfxmffFA8E1y9V6wq3TE82eMuycAR4Cnxh2T8kevFvqjLc5DVvEkzfYVXua5B",
  "key27": "5avzvw65eHjR7i5FZcgGTyVRiWQBrcgc8gTyFxGtCkRRTX9ptVfK9e8uDMomQdcLs4dFREQQDwD3AiPwjGv2qfmT",
  "key28": "3iuTxzNaJgdyLK3dReXiW7XP2i6L5NEhtwxxtqTNYbcfx3QLyWwmwoLsvdTasX4FMpHkkTcAsXnDH7axDed6iV5s",
  "key29": "4rNN1A6imv46bg7eAQKyHhQTv2sDkZzCbGTJy7GhYfQKgTm974AYbHvbMRMiAavscZVvzcF7emwM6ogJA6AfHNg8",
  "key30": "5e9k6Vc3fKw6RvHSLKMRfLJNPRcJiSGpmp95kf1JcWoqpNRQibScByPKgiz3rakjJL5zvZGiXemx6zsg2NeQexX9",
  "key31": "49PeeH3w8nT9tKkKMa6zfXGEVRuTMAHRqjwLYiuEq97DHa8DFFP7Caa4RTiN1FegxE31HyyVZu1rw9oPMsELcQLc",
  "key32": "5xLi4yAxzifi4ku3k4wbSMrCM1T3uxFhA3vCR2otkBFfJyU32Pnx8TtuJnxx26DkHPWVAuRa5G5JYbcUzE3Vv9VD",
  "key33": "5GB7eWGTFK7kg4QYXYq1yMVse33EX7XyhxDMAH4cXgANbuw5PKDrAkAUjGccq4Tssqmytxe44YY9JMHJjERaSdAh",
  "key34": "5QZrXuPPNm45EonVepw5JGsqij1kcocynrGbcw1e4wn9HufT2Vq4Mc4pQ1X8bz9tCFst3JL9kg783o6UoaPccuWf",
  "key35": "3dEhRn9QWJ8LRT6fzfC9V1s69amGXmHoAEofJaN7S5CPqxbuPP1kjowns7qrVo7TchxQXEXoXMQHVmsQRkoshyMU",
  "key36": "WBVUmxn9Zvcb7giNtfJMRMoDQfZT78zHahHUvwvADjtipmUihZYw6FD2jub2YtV5YU8WkbAGbPsbvXf6iHMJ7Uj",
  "key37": "21KeeykTqFWxAkzAVmKnqS139vxHvac7x7YAfz359zDNB6TLQYWkUEJTqk99Vwya3NNWsojE3HaDgrnSz58Xm1Bw",
  "key38": "2m3xpsBMoxCWYPkdshCKKn2TJ4ntQaCsSbZaZfbutMWcemtrcwJNBCxjLjouWUogZu9h3K2qwsechsX9cgV62F6e",
  "key39": "4kkJCnHQaWvUL8z7oC1fFSRzCdHm4cweUJFhBsfE3ChLYHtDYneDvhwZsqFSQ2P8ogoVRsceSXSnXprqgibUBwLf",
  "key40": "5ZSiE6uCTRnk3TDR2p8u6Eop954oaqf2WaoNhnf8oftviYNHqM9ww6dju2oFkmXZwF2WQwMhwdVDxnyq22Q9FxUR",
  "key41": "3fS8peDKQci66wdRCBSa7TFHL8Cdqu5V87ZELiAJtP22EX5APWbXi2quT6CJKZDhjv1VvpGjwwzs7yruephGvQYJ",
  "key42": "m6Gvv95uiCrJCW84uXmN8CNPjJBDGmq5ByY2SPiU4LvooFVDVuixcDAKQes53XSsLCu1Ls6TV4QCPgHBGwe1kaU",
  "key43": "2mw5QUuzB3jTchfyiXdEg6yEmLWyHBbVtVjrVYCQgdqcvy7k3p9JS128xgRyuogr1UTZwDf8hVP8Fk5RXi874o3N",
  "key44": "2enk5d5ncge9xkd1RvwiAHi22Ezgu89cctLJ4mt5QJCehpyhirJSWRPXPwjzetjRg7ca3riRx99uPUduHXi2enmQ",
  "key45": "SxxWsugr7ifiQLdywLFx7Qk2dxsCmFL88M8bmg6NS8se9hrjTtbNxCycGBe1EDzXVWacb4MD3WQ76DLC3sWCMMP",
  "key46": "3tWcn4oufDvtss4QuCsxpYUvE7ePvn31MfFEU8HLTwNqh2rsz7D3dJqREXnE9foLzx3RbvZNxbDLiHgpkZGzip4h",
  "key47": "3HV4iPjdABQTnb61MhqednWkyMUW2NdsNvdq1HHLvLEekmXKwBSz6adj1Dc2NcUZ5qR9Cw6sPpe41eenkhZ5uUQT",
  "key48": "2ZN3tcoBJotaMbo6YECU9Whz6x7NEAWbyKLCftQW1bMK8JLhiv5owkMBxHaDEyF1JCaxbTm8rD79jDGZMEPqmJVo"
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
