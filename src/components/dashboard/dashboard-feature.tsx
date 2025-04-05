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
    "jhDhkqw9RcXcwHRDxXh8FACMZhkGtvPZKHy8WTDrxAUrEutyaKzBTju4SCcabw6J3tLaUc9pVNrprgJSYEVzfAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qencs4axK2HHefnger147RyZr318UbJGSmnVZJ9CFeLyyd6ioUroe8iHpR8dAzQ3y3YMACRXJWqfP8fgxpDm9BL",
  "key1": "MwUofNctZyRNGPx7hbzn9bPQboRVvBZHipi7N9gMQ4pnifcwjd3WPwCgURYXwcbN2DymKHUjPx8yom1MsFYGrPH",
  "key2": "L7p9bcsTG7AVo7Vn93UowP1ixsDa7rHm745TT45ubpnHAPQJjx7aHYcS6e6DjjhaAPQCjH4PbyQfgov7HUn4Sjd",
  "key3": "4LsdmrnET65b47AibSomqq7qseSUZASizyRWW2NzGaxT3eKJGHUKdZHBnoyVN663qPKMNoDWFnZzYY54ND4KWR4T",
  "key4": "4Qz9Qx7RAps9hYSQDxZpxCT4x5Ro1tZxZLeR3GmNpJ3p4o1qw97B47WixxRF5vYzxTUYBh12zTja6L7ARTnTdKmN",
  "key5": "5DjuUGvN4QY95cVpCW37hkwnKwreNGh7q5KgtDHLQnjkPUhbfWeLg746SzKPdDCsjWcpRj3sEY4F7Basbzf9xtGA",
  "key6": "3GKPwhULPubDPKYtVTZjJ3Ujnz1Lu2Z2N3KUGfT7WFH2dXvZhqQjf8f6fWq9XDUzVW38KppRMVU4safFNiCss1Sv",
  "key7": "3XNazRMw9z15DCBUSVSLCReXDpMjFJdG9D829K5y5M6nmvDw2Tk98ZNQhzAb3Cf7fyZzF7k5RzhRgag9Zmzkjirn",
  "key8": "hUhiQtQ2SgoQphw6wmbW3H185572VHSAq3yjZBBk85xbTB6HKBCZDzYgyAdVESz938ttuSmzQWwH3MCtty2vHxb",
  "key9": "X8NKZ9XzjCzR97xuoL6H2BPrk5MDiMHw3hNtYXLwVvSNaL41vnzuGCZoHK43W2iWSzewajyJN1fAoHKHJxUUw3b",
  "key10": "4qqfFRmgQgZTMHpeVMtV4bazXefBqb3E7tYghwgUtf4MNoANWVqHJy2cif55UPtsGRYEMboCgiJLJsqEUWV9cJd6",
  "key11": "2oXRQPSmsMaS2UbKSJy1RzNDBMUHjzz41Hjh4dSxdjb1cnkeLKH5CCW33vdinGhUFXrzL5cGc5RsrUL6oSGfUujR",
  "key12": "3ErGB6qqWeLBthiQqtmbZPzB6mxKsoxarJF44uWA8BH7tGqPXAuZpFHLY9TCnaEkoPW1H3JdFpseWgXBVWVK1SJ5",
  "key13": "4kFQ191K75YvBmrE5vXtFnLCVgAkddCPstU5pCPatrSFhnumYASzwJGf8JyFFnW9Ps4KZKWrrA5F4fQmHsTPsRST",
  "key14": "2nSuL7NBp7CeMTp7PnQ5adwGFj7TLYneX2o9UppK15ccNXWR6Xypr77mjHzRH4yzwAdYNVcuqZSSsMSCfm22WvcF",
  "key15": "5mBa6aZojSepsKLSsEWYZQbRCfGCWBcfTytarQo32yuQDAZnjkuBw2AzN5np9PPgZvyu97X3waaxY2aAm8d4bJm2",
  "key16": "2CPpADBG2xHBYFpYjF33pprtW7v47rMoFSoSdrpWmDNUgrA3nJe8g2ynSuXf8DXqr2HZZjwk9qqWazUvAHAnXdBX",
  "key17": "5MbCsbLhZDYKNV4JughsZLnx71ChRro7JdvramqdriGE96WK1scLYYmms6h764BSUeBCrtXNw9nbzkodySZ2oK71",
  "key18": "5i6XB7pCTAD8bRjLJ669scaECuNJzUkx9qdfet5VJnD97zb4VvdaUPazERhdx6MLmafmMtt1s43Ft5B3XVYRZfdG",
  "key19": "5QWwJ49PF8xUKt1xByNv4xAXeK85S9k3gua92GYd1PvkZf8dEcYACnbyH4x24cgyDdQ9qPY6MZ4mep5GVAKNYbok",
  "key20": "48YByZdYe24BgRJLY759cTRJZ45cdiiQ1f6hVpeWLMUkrTGm9tDpgrSa3z5sTb7T1kX4FE1iXjyizbK3XZyFmdak",
  "key21": "2kkRkbtS3dqV4sCUjn3yh9hXevVjFR5xW17Xfzq5JaCTtD6ytmqx7RSndjNgXdrTpmzuMCGqHNzAgR82y5u9nsuV",
  "key22": "5AWB6ZYfLo3Ave3gPvE6raduNy8dmmxh3YsfF2ZhYT8e82f8EHgAiS9o99KiBN8WKgt5LywcHtRcsVdMMn8wY3mY",
  "key23": "57e4dTSgoDRQeT7FyMeTWaCepLZjnkaedc6Q2TFG3F6yoJNCsU7NAs3csFGfFcq4PUXzQY9GJkurEFTT7UPz8z2F",
  "key24": "276BhQq9sAcBERR6STHYh5Uxm8mrQvUmbvKSeudDJErHaLw5CdxgXh6Va678toLnqzgDfn1sGcEmvj1AN3iCPCWQ",
  "key25": "2KgTNWN8mB1V8qtzWvtTfrLuihH1JwEbjDwof9FSDM7EYVSXde5UUUzY5NX9Dn3EpRoTXHoqXWZaW7gffZZDkGWB",
  "key26": "2G8WpVKVyPPP6auacG2BMvGBQx2b5GqFHgdjWcWWPkntR7SdvigZuUkhgpdQgcbNgGQCpj7xCw8vJxseSaegTbeB",
  "key27": "23PAjbbZTA8j5tnr5neSBpX3PnmRU2LeBgMg2PM2iiauahgf4Xh6W4VTCmgFsCc2VfR8AVNLt3Z6Uw36527u1Nfr",
  "key28": "55mTziC8uw5DNGExshs6Aa5ag7meoa9znJTButyc2fAHCeb5xTB6rUnqfkKHXVuSksc5F5GDz7zco6RYWAztVGu6",
  "key29": "qdX93hcgqXGibffeT89AjYzYBk7TXMopudbNXmxEN4TCEsy83bTVDsA7gGmpmSoXCMSeSRDDqkgCYenS1o1ETJT",
  "key30": "5bU57NvnmChMQahcUJH29TxGWqjEtTxUyGrvGNPeVS2NYsRF2YS8RMG1WDRzSK1c5D7uQGDe55zKQxJWapAD5RGk",
  "key31": "4WnWMDm8s7LqMYY9PS3KvMiJan19kfGGbCmSxsSQfV3VEH5BRqA4VUQ5nhFTVLqy9NkkfHSDP7SJg3zAvm2dgMLq",
  "key32": "5GC8Fq6DVjbCQUkuBVTRhzFGHLpVKiXRHeWc4dh8VGnKc4wbAzUgzyV4uA3D2Ucfp5NeZNY6tGqNc8Coag3Etyib",
  "key33": "3oihJR7gyAoPC4VzZvAB5HJVNqCkLxJ96GYg2JkLLCsJcYGVaXoK1TAobzTXZzYRkxyidePyQpzvF5DRzttf2peG",
  "key34": "3PUMJFFGwubjYi1WQoXroLFwJPJt6bUtRecc3dBCMzyeVwRMMz5XzBq96WHgCPHxbdsUamxw9Stk7A9ZBwH9P2Ms",
  "key35": "abee99BYWdMrJziFx9tVfkNhJJqqbXTzrsadJTHs8XW2NBA2VCqMUuEd7RFiiGoCTdA8r1JnVFcwA2s4Wv4VXqa",
  "key36": "3QeHksD3Zd9sDwFP8pS8bAxpYqqH86eqy3PkFS5xh1PpPADcVjZSGqwFEvzGv1gmD25DiHEdPHLDY1SMAmYF1J2B",
  "key37": "2M3Zx7STSmfAVHqHobha7JmC5nXq9Aoc3Fw43zu3ZkzesLrMQ8cKhFB4qtV6SHFgKxuiC661BQiT4X1cvRHu7zKb",
  "key38": "fcgy7bnKp6Xg64rL77eesCXvjCwej6Kirgfi5JUD3Z3Knep3uYU1zuukxcVgqw8sPwx1rZYJXqzdG3aKqVTNnnD",
  "key39": "3fe2wUfgfD3SXqKi1WjYjDGExRm3tEyCAzYr552vTHLurKhgUhRWsvviVzEf8J9RuyZkf4mzCW8mPrLkdDSexwho",
  "key40": "67CfxzFQshJsJCHfFZrTkxxQHF8eKXtkhpb4buTYBkSYxuaVft1Mk26jgt2HNWypMPG2wm8av3zQxQQL9MGEqEZF",
  "key41": "53rxHnjrc8dLJkS8AG6r7PknRH57xtVwq1LvhcLSxWNAdU4vpxDaTEBYzKWUqT2GdNXW6rThSPeYX2dazV8gSWEq",
  "key42": "2BPCTe1mSuca3aneHokoCag1YxXnnGm1Kv7i9GLV1Jw4zmMGGitS3a4LMYZXkBgc5DXKeDN9VXNBgcqDHArXsuf5",
  "key43": "4yDxYkGJmE9BTRRcEibvAGALQvaEiqVVs7VQFzYxfWsHFue4rgrZmecRbQUkkXXpAYWKqJ1oVtEhGA7MLGYbBo22"
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
