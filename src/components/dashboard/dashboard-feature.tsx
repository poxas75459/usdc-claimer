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
    "5RaUAqkcJ2Pjav3zSew565WihaZYFS2yn3wLAE98NZ2Xmv9dxAm8dmJMVXsAbfUvGkudcbKDC45uAfvAMMWagSX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gzN3Yow2ehHxCVXLs9MjDmZPJ4noLqhYsQxdbP6TevPw17u2QZRtRUqnL1fU9yYU8nygRsFDJgBGfbnb6x3m4Vo",
  "key1": "AXbBuQ2Bd4xZkPC2HQCRjZLy7NY7r9bgWaBUXd2nRKtFcJC9RyYtNRcMCXEx2uHowwGkZ72aLmx32oMEE3Hszjj",
  "key2": "wZegSNP53ndaVFHRFWGVEnFhUaTy9EZaZbHPrXMhPYztP629q9vtrQf8Msk1xr9LpbhhijKPHbQ5fJpeUVwmEJq",
  "key3": "2uQrVi3MPT8SLXTuiHx7cCPupyEhDu8HAmVGHkH2KMhoHXVC5ASkPViCWKqExkim4jdF465Mm1dCrhy6s1nmU1pn",
  "key4": "2WZKVghAProRJLmiLN2EK2MtWLV9vtBmgfr92hzFuCbdG8ifrE5pX67bGqJPS9EEj6GTdPbak8R9bsBf6tuM7R4q",
  "key5": "4Dpp7pVCJyGhBkEKVFEhaBu1BbXV11G9GVP4tR6bF7i911pnDfN48tmvsXmZAUCnux4aEC2TtuP8vC6Hs4FJcgX5",
  "key6": "5DxcE7qsdGo2pMnpvEWK1ZTLL9tWw8xeUdxzeXDvLrWXG7jqpthSjQmS1RANyiABHcX63oHkw8RWZugxAsGq9FJ8",
  "key7": "2nwRTZ4KjeFGDtfWrCMtvDbBR2nn1Jy91RKfqGLebCtDLvtzcjPw6snPMMYBBMV212SsmNVsPEUQK4537YgVfmCw",
  "key8": "3ounUpHnucxxnUctKErBzoryZNPFK2UpeCxCGkfDuP9WLktB3yk18HHh4jMhnauGCZ5NX37uUSNR4sbgSRgx8LWf",
  "key9": "aRAqBWX2V3Zc3W4GkGjaad95Hd8ipQuA2DbTDA6xSQtJUTgEWnbXFQstf8T8wLLNgEJrTunbhti32EDKo9dCvNR",
  "key10": "2iHmjQsH8KQEgAQCxHQMgc8h8rfqBoo5Wu91E2u5J6LAUy2VBnJC1XWAf3aVBtjxnUzPPtzeH3rem13yrW9UvYSh",
  "key11": "5b7ccjfvC8BUntMDppbWoPVFSub3RkbFZTUNMqUWdSa7CBeM7YGxjgUXNG4PugBdr4aLeaQj8ndLwwKiGn2AXGa7",
  "key12": "4Aq6hzydV7JpT8ag6EPBT4UsLPD51y22nFfmaKJveBuUEze7DihpaXBRDb3MyKW3mrbNgfjxrve53KiExCs1eQJq",
  "key13": "5QbFKPsHPkPNomBXZurjZgmFEAppnx2CkTrTGH47U4gZex3GwGpwRQyXk7zjt5aYHdKn5EpE1mcwUSQR4JiZPLWR",
  "key14": "4iuwsZgwFCNCToSFyPYRbf57ujEKQd6biygUytq4HCewGHyFJPc44vgRG38UXuzMUoF3aTd9iKVx39crcsebfcV7",
  "key15": "2tuy7hCNLAyBjvPjac7nPKmBye6WihgVctNqwwqBzt4kqW4DQcgNVVwFcgewbBv1xM5DH6SM7tCVQ8Bbj2ktgUb",
  "key16": "5fWGAZGqYKyRB4ohG4Mf1iMjxZMhzWogcZEBw3yhrKjmDRGj1sEhnnLaKmEnpMpTtsWdcLch1T4VpTQX6j56gTfo",
  "key17": "72kbXknSUSDzve7je6Tsc3hLobvJh7NG8dWD42QoT9Pt13ksT7uugvZ5BsqwZnC55b8AUTicyMLRT8DfJGPg176",
  "key18": "2bJoXM58SvNDcU8KHtQvwsHx6yMcC6KXVfWMb4NE5f6j9Dn6qjM42GRQBGTJTWnoUL6862ZKbqMJhsvzbZjfCjt6",
  "key19": "3U47cpJ9EBsnmbiMctzS9txR8RvWXNK35BaF86VwQr231LVqUjRgZzuhHK3N8r7ZUiyUhhUzC3GtD38NiWvhas7J",
  "key20": "3kBmMTm76M3SchVfD4EDW11FPgK5mnJc1qWJYLSTbszMsU7RgrfUvsXDSzgRBocksKs8FNzUhVX8UhaubQrQhfFQ",
  "key21": "3bKb6F1JKNREpxhCF7HR7kDeysyA9eFiXCaHYoMv8YyA3V3KaDhUHxKu15WzYx5iwMKmF25yG5K4xYRWuKrrSuv",
  "key22": "39yMidAtUCqi4UWze8mq7Z27z4cNAz4PgkZAs4CZLqBWCbRmwh9yk6cmjuo4KRiMCKBnHsGBq6P7jRJ3X33mvWiK",
  "key23": "2XLEFUZBMHe7PPGNTpzocMVwoaMoNYvumMYg8csBf8JBTg15Hj7eCdWBJnN7ULvxBMrS2YE2GCaqRgZhnzu6qWxE",
  "key24": "wXXEqMypd2jQ3Qanmv5UFMo4YSyoMrp3xJLJ43NFNBFYph4LKXeSLy8sfBASSEeQB4fDUcSB1ZAKRKCjJu31aAK",
  "key25": "4Wsw7GEuVMwxnhAAjqYuWccGza9NRifwGeRrPbpwQhHtuUW9JwhRgFP5sMpvKiC74PKEKxEFqHoS2EBLwaqqgfBz",
  "key26": "57JG2j8YdpTo8vkai2Nz1JYxp8h4rEsYtNc9LgAZJVUe1VRfBFUopFSKoQ6c2ocEirhKw7pbUu99Z4eK6UGTJjL1",
  "key27": "QejyZ2gcMJyZ873NqYB477WzbZP7xdR23kfyvAF8o3Vsrk1uBTEQrqVJbZ5a9Y7DpUYbt2iuQ7FCUHkHniAsQAX",
  "key28": "MpB6va1kHaiZ7Y4NMYN3WhFuhwzrwCQLegp1oNiRZ3DBCeDQq3pYmiUCyY7gECCoWdKLnVK4vKaHaMgmtoyA6st",
  "key29": "FTc9UY4CPiMhfVMojHqeFtpugPwwFnc4eNJf1QtNVj31APJJ5F4TmNAZNsfW4BTJji2fu5mv32Mj5Sy21VzCrKD",
  "key30": "4LwGVxaq73LbtqHjuUZJdJHcGs7RDxSy52Co3N8hBzU22FarwxWXYUTLDBjsz6ZUQPWytnwUiCvQFaaq1KwA9SQX",
  "key31": "4wQwHDPuKUby7QMzTrAt7ZZQNBbMQ873TQAXoscRDZcjEFWWt9qPEmTcXS8y8xbvUWscTSJQYptvLiSRtPjCEDYD",
  "key32": "58gkrmqL5xk32Yv7s2ppicohR3B2v4T95ECB9Gj76HBE3dZmGS9Kdy2kniDYJp5S9ASfAx5WuTghR4TnHh8TZrz9",
  "key33": "28QoH48y1s6ydj6R4GKmyxLg6Fz2kqPkXxu3kDwUmHymFTyFY9NMn2i6HGnrM3X3HFkT7rKxSHuvi8AS7ZxrR6v2",
  "key34": "3yTpx6kVJbiDB72ZUSHnbN5huiWQAy4VCxsBuFiTYgfpN9jDQMo1mVDLqzGZ2nrUqSDcow1V6dKvUMtVT7nAqhDN",
  "key35": "66XUa285jfgAW97sh5cgdU2RFEF17cvvz9skwyVsq2VCnxxJBindDRUVanFmoDjqYC4Sw8R2hVMPByggUyAfwZqK",
  "key36": "2R2LxrzAyiB9Eyt2dvXVyGCXGkTgGBzVjcKg4JsgoNZdwgSCbjRrJ3bhnUbaiGmzBPDZqmhmDWpsS6eY38MbNz5G",
  "key37": "2Kq8GL8kiH48PAZnmrScaNdxG1AwGJM4yZdvWi6HknMEoYZDWHWxa49nnNHZzT4GkYgZvh5gc5JTeTZAyPLGo4MG",
  "key38": "2uxQt344hY2gF3RyTrWZbxamnxiWnXnGcUNtgw3xcBVamhnmZeYr49S5wctMQzsJppCNzWkohibH1KUFTDyqhyPY",
  "key39": "2h18PnRCtemjAR5j95NTYnzRVpd1VDYtCVmjjav7Cvu4gfN9TTLvAqh73XCCFthNGMPGp4unbXYCjc3ZgnCq1835",
  "key40": "4EEGcQeEUMmG2LN6bCWfodgBkvZHotQ78HLVUzUkVqs1zkn6SEQzNBxhzD5XnsVQQN8hPhscV3MvLmJXnZf3B6d8",
  "key41": "2AbUSP4W3YXHWJUKhzkbrGhFnZrDoACPMrJvjA9Gm9zKt7st3BsKobRu61xfHNVsidT3RdEdN5fH7ZP8j378QirD",
  "key42": "2W8RUXnWxdfCxvcmgsssPt7ccYyZcEm7n5HmzLkto22HqM5UbE6MdyKxBUFaqNteJKqpfTzbxXmMaeaKuAS4vvrx",
  "key43": "ZqFMfYorJ1WxpUhczQxuok2gHnMGHxL1Zf3HoJ8k4qPUPu62v6Tb3KS2pMqwEiUURjMh1t1YbxpFsiDs7x9Bq4U",
  "key44": "3thgrb454RjKxNJh6324cj4cQrSk3VvpPpgdBfwcK1Sfo6eNVb5WryGcFY2R74WYx1UFwRJ6YdMaUYBUr4BtvSn",
  "key45": "5EUESP9Je1RTyqCEmuzNZSPGENXdn2sfsEKHkTeJ95YWmecUnHmcaVHfYmUZGzECe5uRH6xVeqtmUoQvnR9t4SnP",
  "key46": "5HmMcJquhVPcWjbyntYM3M19nWBp5YJWDJrHC8nv3ekrLN88LTcnPB6Wg9MsoFXgEBBfnnjFsp7jfEYDV129ZpzL"
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
