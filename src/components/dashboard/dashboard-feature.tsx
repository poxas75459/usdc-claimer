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
    "2DuD9BYWnn8CJRRWLxfVsBUcq7KiZbqAaZoLBS1EiDcyGAa2pkPxvTw2BUdEydFSsCCxNDG8xHLWcBUemmyaEAVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vLGAKiorAfsRUjeDRnhvLuzKuzDB5x1wjapiZFopnMvmMt4HYcxxMT7xGZSC4dLE9vmiDzKfpL6BYBtM6x8YDp6",
  "key1": "4pxHgEYAdBqqBsaua8uTL4oq3j2nAvKkYufhoaWWV2ajZNRwKFiAXUdFPHsnB74xFkqzFHUJWira9j6ZERwnPN6m",
  "key2": "29V6Uv8EcFbVtrVHX7nALmjfBmS7cYSh6jQGn6Hocz9MWESuR3Qx3YrUQbioV394AmCXJPtbsqsPdubaS9N9CRsA",
  "key3": "CNDb5FmhhTPayUqEpa85Ch8eEcjonnUfKc4yzT9nxGqrAS2jVj1QdZWZW9pWDREKEwveBBjNmxpwdgsvipMnjXG",
  "key4": "4xgPCk2ykC2Trtjic1VKqdErZVqeqHMvgAjSv8637vu6j8MJB9q6czKRW99U5onTWZSgjJRhYcAA2Ya3nxpzBAsq",
  "key5": "5f89Rn4sRpgdxV77k3DhTDzS65toudeAaVq4PgYrBkJ7QMwijAehghyzobR7XzwRV5HxcYkUcELyFJCXVy7jhTbZ",
  "key6": "37yXRbp4zUku5ETx7pJzAmAy3pNEYMouLhSkgsphXkW7eva2Y8tC9GfAAsL8K2rvBA7zTdxPae6tuZoRcE7kxYAp",
  "key7": "4WB8cAkksGBnT4jSfoY42hLE3DmMXt71uTryKEnPAnkctmJM9Aud82BMNtpjHz1UdKf5ZHTFq1dUUtjS9t1WfzJN",
  "key8": "5BXYpP4SVkM7K1PEy6jSX3ZGpTqD63qXyE3DX86stWBuSfE9TdtmL4taP1DAMF6ViF3Wn4FyARaHMmjf6CjfFxrq",
  "key9": "5qRmwPXXJECBJ6edwSnK66fs4FwXi5gmEijrV8pPD4yn8SEMznbj8uoy9KiHuSxGAGd76cRJMyPTqzELTrQtVrce",
  "key10": "2szzCn45dCVbD7pyHeK3afUgNbP6gczRvrsU1CamQMEHzVP4hkmh99CDsU8QhouoHLVBsgV8HrvBeYPqHVPb9MXh",
  "key11": "3Wg7kYptdxLL48T2zuxjaszW37nW1zjJApsiaRAtS4FseLq4jkGy8VU66KsJ54ANPR4GGa3L1rDvuS6uWmHFsYRU",
  "key12": "PEBHPQsyAGvLZFfx5EvAwMGxLbXPioVG8r4sc3xVidae3BgfLq7BPdrU8ZjgTBLfQe7kd7CDwUqvQBuHo5qNs4t",
  "key13": "3QBPbV8xS6MjgYeYRCJEBStyGDQSQiLG3EXjjqyWSWfa5osNByzaPNX82pR5xBHh2SYum1qkDDacoGVoaG19NLYQ",
  "key14": "exaSQKAT2i5AH9yFBc5Mcfa4ir2fJ6x3Xr8WA2DN1T6sCU7bnTo5MCzmc8S2MNpexiKDWefbhYSCFuZVLDJaxjf",
  "key15": "2UgjYh62vRV2QuTW9DinXxbokiwfSj1dFZcFQ9d7d2WCkSWpeQxUa2cyDVBR57woVsxDpYQEptKkJkdnAnRT8z8t",
  "key16": "WxrfgHVV6fycokUqYrq4GKLJBRNvjVVGMrqNtinKWBiyQLp1qm9EHewjm1aJ78kmwcTBbqQFEgKTH1Kcv345Nex",
  "key17": "2uRq47YSi7uFgVynd8tNtuivMsxdqx5hJkrK366HGo6JZXpEBPFoBa3CYVY4HRwboRRCjt3E8VfKAbxn41i9h2LJ",
  "key18": "7HcSh1yurmsFZ6aZtpyz3mi8RVbUzY12sRd1LPXEGMxZgkYMnxaaMEnMkvR5wS1njZ8qeKUgUiiCHtY8Rw1SDGG",
  "key19": "25fyiyHxaUf8dAQajEN9xwQLzvd6XeeRdH3zrZTRdqY8BNtsVybxhQSdg3txYgDzuU8g81Rmui57mCGujtwDXsMW",
  "key20": "72t9AWHQQ2QWu7fw2PFP4JB9oBP8vqjW5jJ8mk5KWjghmL5jb7q94uDqPbnK4T8Kp1smdSXr5UMSuuQCvutHqiL",
  "key21": "9rwqckZDzc9XuEu99LVw9Et5t9sgvgYTdrJY7Jy6sSf8f4SK3fdnoraKYMNaExBeTNz7GYAWV7dkKwXWPk2SRNu",
  "key22": "4QMpmKL7Fr1wWMr3AVzSbcFdxjwZtcjoswKcijdyL3KKrooLX1BanmbCtVbXrXx8GWJPqo735Xo9qoJgcGDzPsgZ",
  "key23": "62ka9XatjcGAYisH7VNoGgyVDqsCuc44a1pgSJNeRXC4BrM5UmMBvcHbvQK8W4w1cxJAerhuTwifMK5ZUz397WB2",
  "key24": "5MzCxf556bGhpT2hmh7f3bXNwXoyfgc1qQtE1MpXtVUERLdMJf5UqS6Sk8igW6fDgbJr3U9PBhrRPQE4PcV29doi",
  "key25": "6F4m7HdVRE9JTBJYdHJUHtWc2R9PSZpHAdJqFJ87FtigXgaZPGt6T9wdThFyoTExt7dAGDqmXK4j9EZHV8X5GrP",
  "key26": "67AbMd2DZ3V7aSNPVC1RY8YZBqiZbLL1ArhNugEd6E6KALjQqQiTPbPTwvW5CRjrWT3iyNNnPxGgNwZZ3eu2jHs3",
  "key27": "3EDMgVTpYcHmnwPmQXNqWqhULDP8ik51u9TNDEgiiDC6rRnWeAWcPst2nsFdfP4ygHx4haWJmCzqMFajNZetbwae",
  "key28": "2BwP3mhKncXyUCQZwXp9PyCh21yscfnhqKuaE8zR3eaubdKpc9Fc1Mv9CgH3w6QgQaxr9Ch7GCtP27jUJoKEjMt9",
  "key29": "4JEoD9mBaBARLLfFVPw66kj4iCucF5FqPRCBNHw4ajeyPEVU6c2TsnCcttvfPKyakgMKoT3eE5A2PunFbBcZDL8X",
  "key30": "k4b1QPam2ShfFYwJxZhxVik6UUUub627cLzajUZis4XTjR4ioJ71JDzSvQyWdVsqtE1SN6uMAuX6TFHpmi1XAjA",
  "key31": "2FeT1EHre5PUrZPEPTBeKvUimMVJXhE4W9EGFdbYiwaPCN8y8xbYG9pUwdm2sVwFDJ51bAhq9hoWa5JWqsBRnLZq",
  "key32": "e2MQEs9yzVbtz27otkYSrUkqH8CRLvcGPt45kHZCbA3JgW4AEGehWFNxHBfxMSaSuynhsXajTC9ZqShyWApSJYN",
  "key33": "2Ce9QfrsHNqkMxKq3Dgqwxzv77CWXfi2x7EApovkFuLFVBwT6pVvCyPYpy2jDCK27cydd296pJFMCLgjbEYSc8ke",
  "key34": "3bCgFLnX7ZesjRESZmzSKG47LZj7jmTtaJCcgJhLNMwkxefje6GpsTPfS7PdCYw2McZroSLvx3SzSZCGaCDjPTpd",
  "key35": "XCQjgNG9rp6y75hd4BzafxFQD9gANiEncSvAFJgsRQjEB3jsAURxFF8J3171SyPpXnsgdVdzTahN5P7fGRcyurR",
  "key36": "5W6umnjPPNaojmhFFUPdxtqYsHLgHok4qkBJKMxpAwB6RDhc4NvBfSnie2cepVFYKSs5R6qqJkKN7PkwpKyp1LFG",
  "key37": "5zUfgvhoER1cPdPbgxWf9oSQ6xEPpQucqs7WEa1KwFG1zErskA3FYs83uPxxZpFsLjBikkoRdJnT2Pk29VKSrx4m",
  "key38": "2xDWiyr1JvAaLYPMg51xVxvs6Z5Kv88WKd695gVxzrqN7RewbnwHdFuwnQJGBFrTkb1xePGUnz5f8H7GUGQyhU9s",
  "key39": "5EjmeXDQjDH8vBkb5rreQ2Yj9hJZAcZZuP8ZN1zi1Sq49KhBy16VHiJWKbsayFEzCbnDG7NTbbX8918YebZUTvDU",
  "key40": "2bQ6ETPuFh5g6enYkiQuNMbZjocWSHJhJNqy5HTpZMqAUJgGbNBkyt21HN5jL5itVab7mLLx4T5fTG3eEbLxxBGd",
  "key41": "2mhVd1M1A1zpBP7KXWtBu4aeBKjJY83G8yvuu3i5GhvCKkFAtaWbhWrnRFVwfQV1zqyiKS7BYZjwJRHeUTChkfhB",
  "key42": "4oHAVQGquCbb6vmBve7cYbiNLvmrfz7tUbjMozxBUot7X1X72nRh5DHKdAaXUMsDHrdFKrgRUDJ7R3PsSohqmrDV",
  "key43": "3rrqD8nK8GiF2iXmSUeKmC1MFUp2VGnP2f8U9Q2QcSNxT52jCKa6EVn4VJYyM7pXg6UwaVJhTaQNW4jYwoDZuxw8",
  "key44": "5iE7RA7k2LwcatVdpdZyiP6UJrfsY6kLW36cic9RZ9kHtZmDrBNroxAMEs5Dk5jJw4Gk9oZTSjVBwSryribQyS7y",
  "key45": "27QVB1tmL6YD2XLiRNhRWeKvwcKSBPGPZMYGSZhkqe6atpzhL5zVx8jTbQeCHkdA3z6xpBMz3gU4Prk5k3qrFsob",
  "key46": "3C3E4B6F3XYekwmr5KLLRrWjkhi5U8zx2XBeVFp1mBV2LLR9PhikwrXawYzY55a1QvHqRvR2zU5XtbfFVNQNwZb4",
  "key47": "5A7bY66M42UffSgp5JvboiDxkYWbW2fzgjrEtLC5PWDDW6mp5Vi2uvYMcERSf9DXvgAtXqud6vetiu71w5Pj2mPK",
  "key48": "hu2Qi5oTvLVDho2RAyNn9EFvXnTMQs18pfVSfV1cEA8jRHodB3pa6wSWZDF8cUXCf3h4CdmhtJTvbpMHJb2rRHQ"
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
