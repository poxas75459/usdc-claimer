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
    "XrRUnuWNQhWjDttJXFqgH67MaYPRytiVUmhU3A7VqUp9dnEvc7Pe9MLMpgv2uMeKL4AT5d7zKmGviKdcfRNenno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aGrCiQox739DLPDNaf3fkRfNAaqVMQh6V2rhiXXQy3eGHBQRaeZvRwEmJNqCK4JP5HzxHAqH8xdfF4NmvzKku43",
  "key1": "6oF3K8AVmAmXKN4FMwLtLESknhfgKZ7JfdGo6r6DsTWPXgapbhv1R8sFUJC3Va5h5nC5BTdrCSQmAgzqFfv771T",
  "key2": "2r2xfcZBdgFHntXqyjywBQGi9f7kHzn8kDA1SyWz8mAgHY9XtoNCi4GMRRyYFCMxUaZBa6Fz5DtpxxABnNQvvs3Z",
  "key3": "wkwqfZdQVbH8oP9fxBut6kuUC5cGrKjEEYveoJJWkGTnCPx5eiWLmZR6vFj9yr7roRHCsuYXMAuN6QtmJ1jiR7W",
  "key4": "3kwewAGVC9rYqnwi2hkL8Lnv65afFtJqdRaUYRXn4mrqma6oY4EQLFnaQ1vfhdVrW1tMvU4skNAPqTD2sJs1Tzdz",
  "key5": "4hZMqTDChU1MyHRK3JuAPYsT63he567VUaSxvyE6exjjC2wfwDPtZ59fe3Y9bSZ5Hit89wT7f2uVhtUy3ZKgKvfj",
  "key6": "36Q9DUfYp4KHKmFf5hh9qsQvfN9k3VmZfyov1Mk1tXPSiA4rdYzFc8TBo5fjiuoyHhae8e8TPkqVfqvjBvucsFa5",
  "key7": "4gZumrt9qSgAPNcVpP786YT5Mf9mAW6jQ7A8foY97gq46NEgPw4vad2kWAtKhiUnuYokoSvhWYw8WdyhWpkyCpU1",
  "key8": "2zy4xnJdnHTS5EeK1DDJkHGz4VK6Zh1TLhHGr18eCshPSpHeXKsiyEcvEC3di6gTrYbWS84NaNyfbEHKVfyoCbaP",
  "key9": "2HgzkdErqDP4aBR9qpnnhVdwFTZZpwtCBSxtWbek1eprbPL1co67JeYKwL2VbiXhRUaS3Y5mYZMzQCcajFT1ynFv",
  "key10": "2DjrpHM3826jDwpJhPL7wHqrwsDsR9PmEtRaw98ShG7tTeEuvpPXzm9NX1xsfdRrBN4DbJh7Y64WkMfRxs7QutUQ",
  "key11": "5CdmmzdGA9rBDD5wkXbtTErsw6omKF4QdbbnQjEYTTtRkERFbsE3nXJLtbPGBfkZE9EtUU5V6YTQRVkRiq5dUe7v",
  "key12": "WEDUQnDLy1chCNdnM6oyZeTJmMMxy8A7b7Z9AoFwHvM7gHHZutK1JtmX8rBRbXgg2jm5fDNM2qbXgv43sEHGH5b",
  "key13": "sCNNBUVAkVvAxQfCPwTq7W2PvsL6ecU3MD1fYSs5crnd5vvxoirFm18QsFPHiERAHDvqdEe2Uo9jJM7NMHR74u6",
  "key14": "5khy199aAyq5xwDD9GNTSs1SyhsEUsxiJAY9wzwbryCS7RXHk42r7jTbvxCP7AMKXW46JqBHa2kqWnHkPUqxVXnv",
  "key15": "36HSreH6aG2GyU4jhYyK8C2LF5PHtS2br1VmbRmzt1ka5D3jKkUsSSVWTaDbmsNh32XQi9zympZa7dPV2MzDebXp",
  "key16": "2dJabamUguiXzciq9md36JdFKoZi4N8HZgwy7hKTSyfxgdWCCskyxWjUkuZHtp2N2c4ApC1gY7NEVvUuw6oyzUWx",
  "key17": "MfiPsUuRbBinMbZSHotVBQZW66rTX3WrHQrBScZKyJRQrjGmiynzamXyPLQVEjDxcdx3ptseebJfD6LDiVZLHfp",
  "key18": "H98v1aSpttJmGyVGShR7SFGGGHndVXxwhVXnQfMAgFkjkQnkcW2sgCkG9Es9VuM6WSx8LwZvvMgpA32FTWmJCyP",
  "key19": "2SKeZWcrv9rSZhubSvNCQP1n4fexJTqjSaVPwkXJ2WV6us4mfLB7enz6SSXeapANoDbEN4KLoyqNvDKrndABtxh1",
  "key20": "3v8PUsWaZSRTySS23wZweQuixQo9NypRVWGqbMmiRUknKPY1b8rfBhxed38PK35mBRPXH9oRWRbEgMmcthXZcJLG",
  "key21": "nkNGRm3qWtduUyL7pnSokuinFw3tdnWkVu6obqnG5Sbs4BHCAykbWaGf2VUoxghZqvSDtM8P2V23Weds7XrHiye",
  "key22": "266cf7NtsyBim66881N1hXsCVRNWd7qLeASu85F7HMicRfTjozbhaUzc5vKFwWZAbjFQtUBKeymKXeeazzLu7L7F",
  "key23": "xvzNSuYzr2EsYPfTbdYmBkzuCNip8GBAmKqH2tpWbjQBBDYC4ipQxhFeACicGjWdLZns9fV1tfXXGW2L7PpXYuU",
  "key24": "658TKf5yRXgBqZ9Tt1AGj8Q3MrpoE8nyybAEKn2pXA3Mry1wChw4MH5D5UoJFVRt4fTfnpdTHSZKtGTUfifmGBN7",
  "key25": "4WDrVitzEVWJPisQmKqmLCtBDDZzz28GxRSfBKA5mqnmXnqW55PKZiQHAYBxPi3oBTmyXGZSoYpinJUVcPCqS5kB",
  "key26": "5mn3McUwep7Pizvq2bb6HQF1qNYMqUVGp9hJtfBfFmP6um9PK5J9N8gQEJWiG1ZtLZpQ66HwkWpmSECz1RmTMVqb",
  "key27": "5GT17r99gXxLKbx3ucF4FcNPzpxhAzVfkurheaWKUnzuuT9nZCt37VUEHt7KHHdezRdDi4DKKVYswvwUw93CwKAs",
  "key28": "3N7wstu6JCKiUeje8ztssGVo2HciFFqdj2oTktzR7TLtZZRVroFGXhphWo3vfkZMReoQug5GppvqnKwYK5HFjj3q",
  "key29": "4KLvvrZwmbTCTiZ6j3Q7T9SUVUUSiFjbShWaMadK95xHzx7Xb1MLvXif6ZbgxMH1aCbDxNHcAy26NZN1qkhWgNtZ",
  "key30": "41aesJd75EBQoYxq6pTRaF6KGXAGxiC7kbjdWphBJifFETkQAKznPd2ShHBbEQGjTWwqSmfV9ZmBpNQB2TDsRTE",
  "key31": "5AnNiTTbH1fTUykTrHknKgRnrE7237Dps4Gyq5KMvgtB3MQ8Yw1fejMCjzdq6oFyG9mA7Zx9p1QujGZSq91xifdb",
  "key32": "3Ky68DzNYddh6ShqBodftUas3zHk5a6Sy7o4W6U2uwSnj7VXV3RGsk6Lr3csdGpuUPnWbBiYsoCVH8xdABp4D52",
  "key33": "5SfHnDTBkFSPQYDwEY3AkKFhhhxUdjTLcE9ZxDoupxJGsQNZHvJH7Lj55G5wgatPvvMevFtnJWXDujUaiNKxdb4q",
  "key34": "2pxMkeuMpt3PoRm9Bd9FiP2Y9yLT6tgccoiXL9CTv5SAz1noumKMivKapsB77YAA7thn82Kxv1C7fufPcr49xjAW",
  "key35": "rKva9vcdMDKYGXUvE7NzEFpxyC9avfMQ5t9MmhNgW8G9jQjNmHaUVhZCPK36ZcM35WXr1rgu9at9r46rPtvjFPb",
  "key36": "ZAtvR7MKPKCX3fAFw5BaTsw1HD6MMuJXctyjSTP1JKvAHDutPW6yvuomPVXFUV8ZSGit3rjn1PYeQHGLxMnDqK7",
  "key37": "3KMHSAJZk36pX7KL7nLWdiDMrhBzPGw4rJAjB3y1GN3KSmY7Mgcc3dMw9YmjTv6AV2pTGAssJMehqCqCBBPdHLec",
  "key38": "5qT9XfbwZxzdBCG7frji5R2YcgfjUCpiu8TjNPiwDoUZHTrPT1CZCbkGq6cvFjQEitoLEGzMhQgipZNxqDMQZWa3",
  "key39": "2kQwScyR6p9wrtmefjg4DXBMZfNVPNCerh6onEnhaht5VLiiiAtNFk2CNUoc8M6WJbrUZNQ327u2ZgPukxxG9xd1",
  "key40": "2DaKWnrait5h9AkTgkbGqjegMNFhjShTmnWGtwJqYtwLJQX9wEHndLjdAXqeZq8jU2LuUdnKWCSKbKTWGqHEKxvp",
  "key41": "GBTP9LJs7MscwAoqAXKfoX9wDJ3k2hPzoBda1dxWj143drJGHm6AGQkxvqdkCnitfLuHZpMPbcGzmTA73WRcEyt",
  "key42": "2Dtz8ABjXuvvQi3xmnt8gidpcpzfodfYGKPFfNdNQ1LUPdofgNJ6B72uWyqMsvMtXeL4yLkxPQ3tiCvb8wpj7jro"
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
