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
    "4VZQ5hHy5adppfZAzoMtGEumeMe4H4VJQyeaYVi3UefWXrtBtRoPHxYpjUtc6JkVafH8u6cWSEpUMeGKeL6iHcaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rfbPEpSLABYiQP12CC3AoduoU5exLoysh27hJaushRKeSt67oecQhf2W1R9b95gQ72JNTScyK6JDzuCf92kkfAs",
  "key1": "2kspWSrYhr5Yg9fqANKP64JJ7hHiM1ej6KHZni8cKLbzPi147A16Uz8hGC6sw8cMu5PrruDxKEGLJWMfiKwgapUh",
  "key2": "5VoVjoWLufAryPt57PxJ6Dq7cmKmpk1QkKg1UqxiAdb7MgkxGGb4GB4U3yZbDcqHYy13BKjjGhGVHKdvhYzk4BgC",
  "key3": "4Eg4UMbYZcXGVayCYRvu2CDXH7zZiUS3UZmBzSVM4fxgpKJoDEFwZFxUA9KSoWrFo6BKPuK9Gu7qD3JDZX8iADkn",
  "key4": "2FjfjQSDjZkr7n5M5yrFDBVNPffQHf5i5ySLVLiisUZLYcWYYp2r6mpyvgKu8L4MQKR8BQMyruWjCqftFh15C9Sv",
  "key5": "3vQQhJ7zWwF5aZ7oNKES9SouvU7N3x1e8bfc7zKD9EMaG2MJ1DHyKBsH27bAkgeVPLxXPTZRwUHRLHEeKX5tQ8ip",
  "key6": "2uzjDrV7xGgFewtdTeSB4pfRU2368ERUYoPABsJJRydSRnBrgc3qE74ApLgUfXhGTn4GbvHCGquQ2xeXQqh1niWg",
  "key7": "5ahV61Ym4SNG5DfUxF8ADeA7Xyb14nbfQtbk8wdzwzFHEWTZ5D9deyaY9FPUFrjEyAchWcJJwMY3pdKbBsH8GoVc",
  "key8": "4ipRtbehhdVNawjTwED4nsu9QPiLgmeQnymHqdLd4aKhd2msBqHGBVY54LmSaXH4xxHugttrk1uEqZMtPHBHnC9k",
  "key9": "G7NJVXwvn8EsSHksCeQns39AtUwacCmGra1NJzNZmXRhXxLCbdT3N7ZnxKQNQYU6WQKGwr45g5ErGDd3aajNppW",
  "key10": "dz76o96wu1PpkYNHV2dFYfgrLEmJPosnPEFvx7F36RK5Xay8a9451KGHYe4QS6fxMgLXmNpNxkvfC5kLXtS522M",
  "key11": "8LAYQ1Z559MCdMSU7SYbJMh9gzwPNKU7BgTghV1fo4iHeK9FuJ4BSgbEA796btmdtQ52yhDe5w6DAkYvKNu6G38",
  "key12": "58GUFr9xjF3HrbuNuesLrHXGijdxdn3o7xdNKq1V678HYWDNYBo7JobuL1BgcUiG2N14cGKDc2TTKMnVZSzBCV1R",
  "key13": "3jZBddsmjtoHydcku6UX5w9Cbt5Tvh6fswbHDK9qyj9erKZqogVUaZVtgTzjsrNpifrhr84Qhn9GJK64dYDKBatx",
  "key14": "2k9T3pTgSbiRNZFxGYFVbGb8R3df193XpQdZiZPPoqd8Cfk6TD3q1wc9nKgjyP2mLCczUSpu5JjaWyy9yvMQiDhM",
  "key15": "2UJjfmLHQfbyFej6AL7YTPUPXQGesjsBeNfLrhVYP8Ecn39NN39LaaSoMzBnAmU6arWCV5k7eMWgLejiBQr5dJeU",
  "key16": "368xr3cZytGDpkmpLLMRAGZyKXjUaER5xvRa2rLqyv8p6ZpUXK7stKGFzzxtaCCGzRnYfSsiTQvYJbLR7ZZzXKex",
  "key17": "3vVTbdkJ1tcQUhXiUQMSQa9igNjgcobwigcF3kP6Akijvwee2M4EHngHiHQh3JHg2Cq2bdvySMXhsr1rTe2eHqXk",
  "key18": "5U4aapcJpBvD6jWmtKccgfBZMtfPsGtKfqka3aG4bsmECXS61TrPZNVwsb2zFYqwuF8Q9AWXw57uJYNK82bPSoEP",
  "key19": "3KrtKC7Khg4mBQrB9KBZH7RQ98YUL2n7G18fzB8DNMe1ArdddUqdGcAAUbTzJe8sCrYd2tEzdhWin7xG165WNSdE",
  "key20": "5oAUoKFX4LP3YfPjHLqt5F14PcD6Dw2Vcvu8doTuZwaj2EXUzhxmprUrEbx8TU1DUG6dtJGg1bB9TKk5TzhBdyHy",
  "key21": "Erhz2ssoRjroiJsntpQNuvdKxqo1mzvwPeiEQehrRJBMJbQgoL3KQ1pBbDznc5bQH574cbhF23od82taYy3B9kF",
  "key22": "2gdj9vUDN1d2LNnp5rDywySy2mugaZzyDcBFHNFLXzoiWUQi7wjyYiVD1XEVdWcthuRzaqAwp14pZyzmihnBZbo7",
  "key23": "2VEqvWxhUmtKs4uZo8z63vPmor6ny482jyWTm9AiCvpg7BTaLrMeZDVaeLikgBegHKrgxJqaQt3MdxQ2Ws6uUxLv",
  "key24": "2QFzxcmYohAVQf7HchbYgaN1dzbkX9vNbh9qPkuMoQ64LHo6VRvrxYsA6FyPBJQXBbQKngJtmPXhXhjYycsTZ6Ao",
  "key25": "38NpdipQP3omGqPxnZjcAPQcnLr6x4S8gpbA9WxvBdSncBKDgjrE2YPBXGfrcGaUrEGCrrzcqkewDrmoBnDciUvF",
  "key26": "3snrxhtBcdtuPp68SpQ4PEaVuHLYpG1adSC1YnMMRe52YZBnoNiyKNUeeNHNTeNmDkjyAst1Nhd9sBsg8v87oxnc",
  "key27": "j1sCjfGy49c5eGvuf6XuhbLpLyH1be7sK2sShjE27XadF1Y5i1U6BJHPxcXjAGFUHJutpNAxUxhNraczn3Jw8V7",
  "key28": "9ZUr5EpzAyG6TkFqVZdkhiHCwjgzwK4qvpWJ5aoXJypVFeu6oN4cV1SLn3A1LVx54ZhjCRZhwJgP7xxeHr3ySBu",
  "key29": "2sddZ8QqxokWChubMbkJ2Gby9C7frbfNGiApT3gNf9t7CzMc51oSBvTNyJBrzom7mP39Qj6Nhh7cnzUKKP1EpXhk",
  "key30": "4kfmVffFGkrDVmNhheY9QoJMcaf2oSHDXZ8UfsFa5sb8dZy5aqJpvYPBwnnv38kP8H35Ym6mTDJ5kXgZDDFqL4t4",
  "key31": "4dxgnrMpkjKw3vvqANFDhGfVPtsRrD19JJkeuMyByveu5NA2M24ecy17VWJ1p3GLTutmPw4m47JsfhVFVFK2vK1W",
  "key32": "HMJvFquSXwh3LrHnZr84R7zvve3T6Nisus1p9VnqveLt1pvGQ1LquYHdztpyE2hKmmtq5yGFV6oPbWya6mQ4m7c",
  "key33": "56Zzu8aCfbmhJXRpoJax71g3En4uGJikvPLEYTbQ1bACCiXWLhJ41oUhbfpiShazFvLw7BnufLHMNEYiM2JTeu1C",
  "key34": "3BatLUR9SSKQJswsor1WTaqEMmPFponoz19sQ1J6zjVHz9mWp9vGzUdDbVEDLagHRxaxL3DEEwjEcZ39jSeR4xu3",
  "key35": "2fAXPJ4Dmak4tamfTbW9xaPt69YGWZBEGhZsrrBZjAre8hhTCj6J5rhr2qykZUKfPYw1ayvRZiiTdUV8rVufkoHA",
  "key36": "3f7GgdxuETqwMZnotS3wa9uDhfQm6dSNyVKz3jRRKS3qXANs9FcFDaYmdG4a49B5qcNG11L677Uu4Wk97K2F4Nch",
  "key37": "5GJFg7eSvBWLhtnddXpYP2bmCQ2Mujgcg8rNqMp6Vc673kfTt24n7iJFQAmsPwiqTCXQgpJWG4sGhxAdLzbDisDD",
  "key38": "4CSC4K7eybNP45JBbRKJfUooAHAA2u1zH9ow2wtVAy6RP57oeBus4FLkJXpUAw14rNtkBQTjY9iRLxX54JMbhFdz",
  "key39": "9vRDFp6gqhd1bJRCHnvsQgB6DbMXuKdwCw3RPQJMeuJwqziKRo19F4c2wQecBy15hhjGUYDiUcaxQ1boMpV6U8Q",
  "key40": "44nw3wXo4birxAc1xJ2DLsYV3j3njJZowaBRWgVWz85HGBWtRuHrwPpiY6cqMGZmSiGvFMV7NMM1AkiMpHJveoqN",
  "key41": "4s3PTQfuKzwbCkxivXbzegPtZTL2T1F7hKJa48sqWjdMJZ6FL66ETZzt7gCfKSM6TtYwXdDr17zFpBX2MUSLz7cA",
  "key42": "5JeWj4kBLH8m8Lnz8rDD8TuvBezK1fLsY4ZZNhijupPWVbmz7Cmbspetxr95s8suVc5gCtnRe94PZMHZ8mtLmtWN",
  "key43": "TNGAq6SupCy2EsX6T4KgvjgMyXN525beyxBpQ4Meg25BdJfsot9GexJ6ygnsw7hFADWLzt3PhD988ogo6bVnJsC",
  "key44": "2Css36BmfC3m85XbKxmN6thtbn1iKmVpQtUS6XtE9RpUdB44GnkP6nX61AySLwZzHXefdQBkqVTyL7KVyYAKH4TE",
  "key45": "2tC2Hyq6Xw4ud3GLgRjBbAXp63m8sEkpCKvozsa6SmiLSKxEAVf4qnQ2MtR8z2A2CT5kSzMw1fjT46fyB823V1Ws"
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
