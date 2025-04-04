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
    "65rDcRiRQRVGKyJ6MMMnd9DJs2swYuCYDUqk8rppySQghsM99W9th2fXGzAnFEpngbGSP27aiMrD1Xtho8QYqCRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ea6JjMJPRwPrhBxrnLw5C2nY9PALDz5cdXQhGfLUqq3RnRB8FteSx75MMFwt1w3arsZGob7x8eMfAED3bDp64t",
  "key1": "2KQrPRsRfATmrcyEsZFo9gJSEA4UxioXYii3ZX4sc7SWH2iDxPuq78vmo2CrRpPPV2yFHb5jZTjNifBKkHUxeip8",
  "key2": "5TsSJFiUSiKGHAbwvJQiiBiaH5XrQFygfrJ3FZmpWzNVtLkwAv4LYtdP4cJaagj33KvY6zY4UP37dn6WzDvwQV8h",
  "key3": "2ZK33ESagCPpXZorrJvYsfdxrMW4G4oRiAjWMzneAHmpfEyiAL9JzZwNqghZmTAEBg3AbE2yoHAbXaKBv5Ya7brY",
  "key4": "2TJBFLc62h2jBDAMg3Ed6TypRJwseUVjbGMbG7v3puo6axhXQviaGeruWYuHfioN37y7RW8dAFcjGkt4qKehAwYw",
  "key5": "31yvxpdegxUKXNqNFcrUPcbffG6NuHRzvkqDfb9269wvmCqBtc38J5cu2Vgt4mfrm6CYk1e7zHkkykxUkcpYAXhv",
  "key6": "ssavMtyVcv2LnAr2u9krZfVGBFqqfNxKQ1iPTkDxV5V4XYE6n7WX4QfrNWhHBs8Z65AmGCihP6oDCWp4CH8jE38",
  "key7": "4fGoBWzMXpeHoc8aaeSYT3YyfbmP8KV9cE9y77kZsVrcX2neKc2XvBqDHoAcxh7L2RzQHPN3X11ECLrQVrFduLk7",
  "key8": "2wvojxDd3uU9VKJ5EezRrwTSsnQmDPkTpaVXR9RXv27hk13zKdhnkft8g9SNKnHZrGQytaYyDFs6hXMNFVh8u4KF",
  "key9": "4yEjRaZUHqinnnBfJwUWdkhSZK77MvqjhCYkX15Q3KawUcx2wnQiurjBo5XEXpGGZnEEY6fKxtV637nEVaDboCr4",
  "key10": "2c66PQxpUAtadC14fTxKWuwqeK1XuXE3e7z5K4iq8id9Qa2fkSB2CMyCfZkcBre7KyUA32SehTPtjELRKLABAWqp",
  "key11": "5qnXq97ZnejYUj61ZeSHT3RXXJwzCiTXgzp8pzBNmxYMay9K9UYfuaMwx8cMFugnjk7Fghm29R4PTeAUSUugkTSo",
  "key12": "2FSx82uvdKtvu23mEWt8jSUfMrTFGHw2J8aZKxT7ePTA6mjmn62vTPgVwV64RZetD9NBCRe13UdRUSK65yjjgLZF",
  "key13": "4vXar7jZVaQ68sfztvb1rWv3ZFfGXHnYf7Pg22eCzNDTDTKsA1PwzKhoiYXp1mLaStPQtdKmiZwvJdqEzYdcqBJ1",
  "key14": "3k6WvFV3B4qnntX2QFCogkgr1DAib3Qd7baj4nPjy7PKQTjaQEsc3s4s14ZGq48fPH2BQcWTccXwJr3jjGTSp4Hd",
  "key15": "35CyiTXUc59uqyyc3xeEtH581VRd87H4gS9xtUkwdqGEnLiN9KBpxDJ6QgtioPRRNPtdgR4h42YjEc6kVE1ytwHX",
  "key16": "465NeaQE3sAiV6SzzDsChuADHhFMtK7DpvkMjv3kxo3zrv4HFWpVgyuzvRjxziAf3QVpDxiu2oq5Au7n2k8WcvHW",
  "key17": "5i9mjg8h3fqz2u8WBdSSA1SfW1nHvvrPxEeRZ9rehTvf94iTqY3yMikmffGzCchXeWFDr9dA6LNBmeovLbxzCrdV",
  "key18": "2DwBmjMK7dtkTCY1uJzVxJyf7t76as66b4o7iHGcPnBVSyw5nu8UqPoKRhkmuazhet2DCWfMDs6vwRUyySHNHHyE",
  "key19": "V6jPrfdh2gLSfQZUXneswZytbgWdPgswcaxsDBeB4q8L3CtjfCVydRX3vsA9L7BtgMgwsFU7tEfZ2jijbLLyvAV",
  "key20": "67rWyemczjikKGQHdgAPiWGJ6NTmF2y3XbTgKWudUMKtFmb2QdiybqEZmEJTsm6i4sN5kYGsyzYE7gmqJHyv3LAj",
  "key21": "2tT8ANGn3bUUU6VW2JnuiYuPgD45raKUCtfr6bAvWYPxhyj3gZpF2kBS4jRu1xrigRY2XVtV5NiYwLqxXjk42928",
  "key22": "44AvTDwqRd6UGkJQitVvpKRgMuePrHvuRduwCuYYkYhJecgwZQ5U4WvLBFm2ZU5Gv5yFSPqVY9HFkRtCdD2hnChG",
  "key23": "21bPycynUsbGMrdoUVDL7VUxoQ5ptSiWoN6GETRuiFfUhYJwgJwWpLj16ymTBzj8z8ZKEiFrp6ScDHicvfVvbtqa",
  "key24": "5kPc1hqVBsEmuYrf9zizKjUQYqaH84bz6PGUUQSMnwwE8fDBurZCg9NNrp2j3ex24p27tAZK9EJVoLpXB35sc9hx",
  "key25": "2HCSzNX7eUtaGjF8duvqqgQaszkajhaytXHstHcPFg7E4G4BB7j1ihGz8nk6JB68GwDUsAL4oboJBrQijdu96sfh",
  "key26": "2kEAz3n1BV15Xrxg5fCa2QNLW8RArFjFpZEb6iBkGEX97sdZKuhpwMbLU7SmWVJBAQ2SWfiWJpdGGjjZQiFyyaje",
  "key27": "2fYd9wasNChSDUpAN6cBNyYWxto4Xv7WdMbH2XmqpZRSSaCp85DtA51gAe88FsjMNdf92VvBioQ6Foxnx6VjbN85",
  "key28": "3PAwUNwJE6xo7db6qjby1JwNKEYD32t8WayQ3VwvCJTY4WuM7jeRPpLWAWpVjNyJ1krMCkWW15fiKekNUX1t4a7v",
  "key29": "5xPqMzxGd3BYpxeLtAVz4WQV2UhkMQUdZ13WAtAQLJLg5tSosCGkN5XvHRSpBMMPQ86gkfCTrckEs5ppBgC21DEo",
  "key30": "4GNW32RuxxzCHeLLJH6xZFyvXBjiMtsmcuhyWD4Mr6ZWFppAXWoK2JjWv2gzzTe8wGiKKAgMxMcpe4iut8XNxeqv",
  "key31": "4qgnVDLr4FJUUUjEwUcb8wBsEuGFCQk3m6UNkjGd4XFpQKat8G7qwb66q82h1ydDZ2bhbpC4cPPNGMyHanfbx254",
  "key32": "4SveTCaxED9wetY2AWK1y9h93QmrhP6AgXgSXqfDjGSgRLiLJdqcYk8C9MJXsvgrkropQTJZxC1BUwjNQjkNKpc4",
  "key33": "5XVknob2WfH5MX7PUko6eTnaL6p7f2KQz7nm4yJ7LkkLhfNVJiY6pVyDwxzuzt1ehiCK3kY4w3v5mMzE7y2ttU1",
  "key34": "3Jx1MK6pyxweimoET34Xxac6PbfFfiFjWSJtuo8PSpi48baC7rmhbfEpQNbkHUTxRxDQg1zFYTKopyPv66k8EVHa",
  "key35": "67C35GZnnikM9QBfKcSxhc4XKu8mWcRbv6cALMnVx1zf3WB7xD6HPfxy2TkRcoa8rccmhPZRY8LJMDCYVdq6Pz2P",
  "key36": "2DdX4jAocUXR9auKPN7tkYUd9sK4VSrNaaBDUSht7Bw3CLnK91uNcb9Qvuo1LK3of8YLHkbLmzphZ2P2UUuEJEqr",
  "key37": "EGXB5eZSL825rtgxPSCfoDiCvQ8JpR9a2UhVUdU7WmKm9jRLs4nMzAUDJuyQabtriqYhndRDd4GNtwwqhn5LQnt",
  "key38": "4NgmScKpuQRY4B1bLrYv5Ya43zSwYv2sR6MgfUDpHHHy9a2LaJFAmD6dvetLB7HVDSZvT3FW82nKEYTjs9LXu2gA",
  "key39": "5TaU9yGk3fLCTyLV8gdW552THuJqoboNgSsHstN3TCZuLrwcQb9fDPtQVTYW8PKV2nxqJrD6qTB1vpthU5XC63D3",
  "key40": "4kgTgRkMHXSWFbmcquzeMDREK5nnFmWiL4LHJHWakz6foe5w4aekcPNyV5EB99PDqgxqNg39gQAAgcUzGFESVyUh",
  "key41": "48Zh4TUjyUMwycUUUo92b3CAW1ZbtRRG5HWkWik4pG1m4A222aFcdQDeBGuQNgfaDbcYa7b5heQFfkzJTkeNtQQE",
  "key42": "8fLYKTWFZaTFgzdgvH1mS7fHp2EMmyA5C4Lp6x9sZjGaMd4Ts5y5vNpRvxuxXryj6u7hSfKYnpVnWNhqNbHjLGS",
  "key43": "42oouMtr7DxFPmcJFABMNE93PmXEP5BpETCu7r6ERdYNvZRzczyQwVGb8bcjkJwCmvUsKBc7TbZkuwTz11kbMeEH",
  "key44": "5t3d2B1J7BFL6hLvgaDqFyGpccXn13YG8jCPpH7Rkfdsi97aRgfKTFjd4E7TEVoircRzj7qFveX2R3gdCkepmd27",
  "key45": "UaL3ywmY6RQRvRAaX3tf3wXgL2trrmHL4nsbiaioqHCzZFNVVeF4PvPFj29UDoZhGELY6xY26mefo6WMST69z82",
  "key46": "3p6ffNxqNei2kMfRXJQKNikSAAaazpvWiCpFwh7d1SqtsVXahn9eA4MFt9cLNLQ1ZQCySxjfiEm3PEZLRuRVD2TE",
  "key47": "49MYBpn1YfvsBhXrjMfhELGtraSv5zqbAZXrdt6QzriEcCL1dinVAWVvVDQCy2MYJ6uZUTLEZV2ykmudeDBNkjMy"
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
