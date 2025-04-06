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
    "4P1TowkJ6jnztpkLU1VoW3ufWb8hNXNx665KdQJr2KMNskgjayopX8bvMyR4BZ3bAYWaB9RBozcMhJk1d7WBVGL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2of5gE3LFTNjW2VqcarddSojkDRhxXDazHMZTeZrvCD6gVpW9Twcyo2u4eRbJguMxtLRQ6ZrWvdzjPq9ZLxLT1Kw",
  "key1": "3J2CRoAEbRkVxx8mc8bRxKLoiaXBfFzPR5jyAiqM3kRUYpY5BdV446Cip1d1xssLC5t9hVWfCP9Qqu7U9dzkLuVN",
  "key2": "3cToQuSn3C3K3SPwJwfgkPd5Pfri1VRRXeV122bDyHczjRw1mVTHoJyS2uSWxmhFQUALTJJcPKFTLW2zAgjxnCNE",
  "key3": "bffVvYsLAzQUwtiMPWPcajZBZsozaDCropTEhXqmdjZKnsFyqdYtqTUqGefDQPShjpbWkf9J6ZFwbTstnJJDcLn",
  "key4": "5hHHWS1W2eooFD6KKZtn3Svk7xqMRhpfVPw4GLBxZVBGfcwSs4FYkn9zNt7xFsWQXUxg83bovmfqPsgGuTvq3tNm",
  "key5": "5G8CMShNdfYh7JRYZX1GuWaPJayJVPgv12jLHbdyS6rX1uqALQ2cARUeqfZipWCGtWq1MSog9SNxAB5UBjUF4Jvh",
  "key6": "4uEvLKPN2NxgY1BHpNSeUxkdWCq5pVssh928Pj5uSs2JSRZeg1aMB36kcTKnxGjVqzmz9gBAx2MpXL7xK97swWEx",
  "key7": "52pLZJW7Xu8sSZcJRJTbGBzwwX5Z9f2hrfyiHtECQgMzKwk9K3wuJPuMvL4AVL3MrtLxhSu3sm7JdbQyU4e6q2hH",
  "key8": "56TFAApK35YQf4EqRHDohrqEtRD9ZVNSpEfNRXKmPQQ7iWPYuhJzk3nUn8j2XKbtuTJLDexGeqwQ9hbMb7nj8Xrv",
  "key9": "27syetLNTMm7izncpbpoZDeZP2TRYv7yunXe3FLkG1JXatD3PhZMT2fSFQ8zcS8WpswUr9WgXpNEx6Nag3QMuqom",
  "key10": "3sbxv4VMfirHnALX9q1K7VRyeYJhCyksKdJWDoGw7ymcNCBVg1yuTR4nEnCYS7Gw3vkAeohS8mzeHi6AWfcguynr",
  "key11": "25Kn3je8TBR8kxVjsYwL1jSWP4Gr8LdPErCXJiRqY7XRwh2UwA4Q89T6hvs3PBsxuLiMXGWVeJwtkHxg1Meh6Dgw",
  "key12": "2jFjEyQhwePXiibYzcdoMMuyKvwaZbfRGfqx687T9PW5dGPmC3mHhmGo8ZTJBqNTJqdM12tAPDXuY1zEfwcLXhTR",
  "key13": "2TWsQx229EwDdiJcfGNhUXWimFf4i5UkYhbCxVEsVZtUGuGdphbsCY6dXtsaMVXyZV9q5MLH539xUC6PtgkRBtdh",
  "key14": "4XrNHJ9zVChbs5QLnR3Sz2o38CqnMNyifVTsN6GHDcV9oiQkrdPSyVgZz6913y1ywY69DeH2Lcm6BJwcTygt8H6n",
  "key15": "2f9thFa6ckpzcrKRgVRyvSwCG7cJKznqxM7gfguqbLaKjrb86UiDG6ZgKoAYpMtXxZnG1VFW1i6DD9QM6ZUCyCVJ",
  "key16": "5inFbTKEN1KxB8XW5XcshVjHp4s4qQCg7prt434d1CTC7ggriT4BXA3NH4JzttFye4uBud6qgapdmpcADVeHPpEn",
  "key17": "2CdC7HqZ7SKzLMbPwYLHBDSDQNnQTKtm4SAh622dFxCjSfkY62VtS4NaXKLTUWnfGAeEhxai5cZsvmFb55t1uJnL",
  "key18": "2i3WN9VmLFWhBuKqxewiXN5pmiyGKMRvACUUHLfqp7DkDgyVH9hBwXshmzt2yEFvddhZCSEFu5ZBsQrBRjf7idNj",
  "key19": "5ra1bFnR3fEfYMJMpTBNdfTjEciwa4Gzu7vD3HUxBSbRnXR57sYrSt3QVB2dSxwR8aEaDAM1RPfU1suqmtYK5CP",
  "key20": "42rsNRanHoTA984cMuhHNSTpuvJk3Vh7X1BS7cJafSEq93e8RpXVwmEgVNmH8V7q6yV6vkYHsUaBuaZD2BRQPaUw",
  "key21": "MZYZk2CjYb4pN7X7vRENcF8aE8mUTVoak22zUqMMUuqUcuDPvtmVutqwuEWLSuuNoJG5hBVkuKeeQHS1rUtXHEt",
  "key22": "359wh4K67CMVgCZr1VjrfbZFYTcsZe1xopT8RdR5KC6V9UQabFzKFsFrB83fbUbMgt6aBRnTzEvthWrWm3ZkVraf",
  "key23": "2GQeCgapTkdMHFS5a6saJH4ZjKHEkUYiDBe8ZJj2bWtn5eKY8qiAGMs36rRpiZntyBxLCdN5cBmbutCFiZ6jTeVm",
  "key24": "57t2bXxy3rfMd673LT4HSYNNjPLXLE1dbBsszqWcBEy7AW23K7r8QictFitvBe9793XGzHct8woBQWztfv5coEMu",
  "key25": "5RXiu8wtavZ5o3tr231Sa8Mp2pAx5fMvATdxvxP2WpL5hgsE3sMVJrQFAPD1fi67u9BdM9ZmfXaExcS5P3BezPSz",
  "key26": "27A2QUTJZPGszjaBNJJB3gC9mbbH9DDmiYXzcEGxSKqj1JCybU5sssa6MySPzb2Z2L6JasWZZUte8Suoh84tUevv",
  "key27": "5o86Gpd2rscC16q53q2YgVuZna1dzZeeUebuLgn8xJHS3ucmCL7wWG1bricBdB8zV9KbY6yZvDWDaAHfftUzbRgC",
  "key28": "goEZcKRUgWRnjmX7r4oQCDwrnp4k7UaVXU5nWdW73C27KU6fYovHm7rJSMRNeGRkr6EgTgtrcVC3WrV7XPiBurk",
  "key29": "3U9LY4UDYSYFRtoHCbnpFhoiJGnr8oDoYYH513DXa2P4iKVddvpLkst9kkHW4soRnv84edoS26BWFHXpA5nvYJP8",
  "key30": "2UsmuFvL1FnDJtFTjwAToNFuRVM1AnuezkriVBMxdGSY2fbnnD4deyvW17poYuPvUGiCSGdUKjrR3nzqsw1Wqird",
  "key31": "4xwq871uyLiToYzq6eu4ycUudcjaCCXm5PwXw5mS57AA6PytY9P3nPxv1ZywvgBc1c6ztsBhaNRShZFY9umfPR9q",
  "key32": "2vi1BJqVmtoLwsL3drYjg8j4izqW2A5LNFE5EyNm8gkZ4hwQTWe3CcTt1R44Qp9zgrMNruGq5udxuF7e5GY4m7z7",
  "key33": "Apu6LieCayUEVYtreA8MZ7Ckc7h4NeTw8T6GsPhRAHCKY3LN4fEKfPZwCAnc8JQi3GzjHBLZvt6gSXo4Hy5f2rP",
  "key34": "atUGPf5x3PppgKQzHbLb1eHQE6TRn2CSHytpwZ2zjaEcEvcUYZDdPmms7fBpTrfu3Dhdk8aS8ww9j8n9VtVCwXS",
  "key35": "37XXrUvVTzqCTWV8dAjhok8mPZ4KpvftF2MVtZHKgDLNG2PjttYPQw9pZe9vNn12p63mVYz4gbjftMiTUS7viWEQ",
  "key36": "4QnW1jqqhmHh7H9BHVobQoUWUN3UksUVVi9BqoF6dJWXUU5k6KSkJyLX22cpDWWXHB4x3i1kHMo9ktccWu4vL7M2",
  "key37": "gT2RtgfZarNGqZ9GDUghFfLvp7hb74qn5iL27dVcJEdDDn6UAyBqknQM5umtNyAKNXeVPa43MnFyL2yxV8UxmWA",
  "key38": "2rbLUf69GmDydANfNxYtA8JLrqeQDbSD538gLg57u8mYxEV5WucofBaP2xAjg7Y8VFdeXRPJu73yNRWBNGSQGu3H",
  "key39": "2K7aNSmHSdCqdHWfP41gj4z8S3g1FB769tCYyVJJPZTA21NWh56bxEtnAoS9hvvKsxqGJVUM9pzrbeRiMTPZsCAY",
  "key40": "SkSWmFo5j1rAqaAEDeoxJMupXjeqJgQXdJwyFLHTxfxnn3bfSSL9xY2jcUXTevJMHVTtUDbD8xhEQjGeVTe4kV5",
  "key41": "2vjKpTgfwcyNcqwn8b8iku3xEsLouNQZUo75nhjwskLwoKhLSYiNpq5Bsg85dmLNi3SWU7JoBFsvVqcc6AJBqxAv",
  "key42": "5YSWWMsoybbtmu6LBfGwyt7Q2h9dFfBFbo3ZqSUNk7fpnm3f4wWPjbhEah3SY3Yu7R4jBEZkkAw6kRzKPtb3K4uc",
  "key43": "5PP1TcbcQTRVvtB7sYXmAhWPCpss69J3S6wTAbrBKiLgHLQgJLWsLseegL8PqtLS3AJnjdsqvZN9JvzxrJkGys5X",
  "key44": "3pjA6AxXjYHMbTBU85mSkBFCe744vGgpoHfHMw6p9VvygfnAQ36SmqM7ermYbTQkXNeRBSvKv7iy5kXM32c4v59X",
  "key45": "2vkaigXyghsLUBBs97kLxBf8ENUKBbgyLCMig8o9MKasg9tT5zKcjRbG4mmJD76mkFVdnGPduXNCE9xxrqjuTfjW",
  "key46": "HRmGPGDzAEqEmpNPvCuYxaFtzy2BqgV3QmQ1ki5oo92dqKe4py8FgeXNPqPtKbCmirATuDUpniHYDhtMpJ6HiWR",
  "key47": "4bcZj3fuEC4M7o4PB6aB4VCytv2WkAvBtmX2Nu7X3d9CJ2rKPZgmTMyspoxo5jj9rA4FMaWyGvyWEDzM2t6NwNof",
  "key48": "3u7a8pdg8Ej3QmXMZ6qVDAX2w4Q1N8KGMXff6ukFpjxM9HKC9M51Qy6VMwyaC68Rgf55dQySqzecjYWUKkpGwrir"
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
