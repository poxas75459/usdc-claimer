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
    "ZuV5w2cUMPhbdnvKMH9BenChJq4YbkimEjBjfd7L2jdr148cbaqKyWAYvnAFtpMddeMWDKPewXqs9TgEo8swMcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kzFo1Fo9wSmWLaXWbhoZFmN4vaAoQKnLRTQtxAQgMZLYGhmwYK9Bz4Ri57iUb3wxZJe8F23TpE9f4stiKkD8EWr",
  "key1": "5hZzRdvpBXdJasRjSjQSHVuAXXeZ5ZWVcYSiQKFWsmAdDerVTkw3x2PpBcBVmx7owpQ154KnZA31sKr3te724VJ4",
  "key2": "46mQkXbDrsn7ZKehxiLTczBWaEtvSH9stRP2zayohNq2KxqzgLeMcArrhGaW12MhGruyKsebRkB8iEdBTWm3tYAU",
  "key3": "3BwXVeG6Z2GUzqxmXLxor8EgQtoDe1az9K3Svp8jAoZoAmWfYie6ysawxTMh9ZbqfarZ5rXhjMhaUx9x9J2bAKrt",
  "key4": "3rDK6vxwWq7CfdrtXoJ1PMLKzcVQAJorrr8nGmyiNybjHQden5J1xzyDYhtapUdpjUF6d7x48ZeVh58JDEVdxmgJ",
  "key5": "4TvroToFAMD3qokCNw7kGmFqEcWNg8moJUjaCWY5v4EBL2BvrgmZYuh53ZP6UP5iqfP2fXqBpZpoVQqH2UkdG61i",
  "key6": "4HMxCfJYAfh55j5pkrD6Jm5tmjP3os6UZR9mh8NBCHyzzB6Zwevu3zDy2WgQYfwJKhq84nmJFe7QJRFXbqLTLsmk",
  "key7": "4GzDbXTvQBnt31xh5dLNTD2Dh7gHMaek8UHqU7T3UuZPqqr2HuYVN1B3n568qmiCXqsjMKocwgSkPEatTxyBennJ",
  "key8": "4CTFjsu5pdYVrMp6xhssrFs4bNw6Bqc3kCqtxWd46bZxztVGPoC8ZDEU9VW54rQ5Cc2mc25XQLKLFLfeHNqYevYC",
  "key9": "2szMg3KniyXekanVUthesEQoJT6qWnr7ea5ttYmHn14SNjTTjBNyY3KjS8LRh8Gz3K6i65CJM2A8EUQUNWwxJm2D",
  "key10": "5uHPonyzELszk6TdRv29LhYggTiPybMvB2pWTmxVZ5QTTk9XZz72dbHWeMdNxUiqKR4HaJKN7Hfjs3MxHtXEppSE",
  "key11": "3CTZd9jfQpVXgQQCQsQUME7Z6mSPynccNq5emfqMzUH51vEq57VT6Tq5w7cgkVWnvG1VgM8TSBKkLPp6JDmNHEsq",
  "key12": "53Za6vQfpqb7UUToYJBkwpFnfVeh5kvVAKsxdogTRJSA3WBNpgQkykG4QHLrDNyo93rHko6ZvWz3yroL7invz6zQ",
  "key13": "479j8vfpj1rk7fazFN4vr7yLmG6Z1hUYroBwJ18p3ptKjs6XEyLnwTnhQXpxigmLwFAXjtaZk5GuoXbrGnv2dBPw",
  "key14": "fBL6zZHxT7aBATTRLsxqiUrvrBto2EyLavadV9L8yEfm8LaoQVzQCXoQdir34JeK8C5VP2frox3mp4Tmu8phoMi",
  "key15": "2ydxKgQGg3GgyLbSqMJ1gdCTut2FxRnna12NeoxRgu87AbcvpDynHLAT5rvw4WRgpBaxFytRQbdE3TcT1r648ro9",
  "key16": "3Z2fp8syjovx3NGYppSwyRtA1jPWcbWz8Hi9qMmd9j8NUitqoLQe6rLzDZhnsyKRJn77XeJxZpiWHF1rZ7Tarh47",
  "key17": "4scrMnRuCPyBXJA2e4QQgS8PCKzEXsCtZkerckV5Q9DFhaXhpit5g15816fJn2G1kxWZdj1fKENbcHKpQ8jx5hS5",
  "key18": "4FXtu6M2j6NXoWAcs2vAhfAHo8JWBdLsfP7CNdYqCtopJXDd9KABT9Lc4SipXqhcu58nQ1Fcc2ZUJUm9GFbj5hUU",
  "key19": "2mLcn8w5K9uCrWjDHCQtDDh7wqRkZGjCHJE5QmFDEF1XxsC6jn7TuksVereorUmar2t18RLpxhiPT6K8rQLLztxB",
  "key20": "iZsftmtLwrZCnkxkPqyTZEnFkqmGKMLNG213PFNyNUijhb6bKRCV1dU9CBgLvBQ2NQiz5dNkQ2LuDJNueBih42r",
  "key21": "Ws1xsvn9SDDr5T9XJqW9XViGWYWUtqJn9CN85BuVoFc1JGakkTjZxRVH4oYRQarrQcjof6GJvTpyvA4zGGq7QqE",
  "key22": "js7K2nFXYW54EwjtiTRucMKuwHeuYm2KoDbGgq59CeWB63gL5E9kTb47dkAKry1i4GYRqmKNiApvG8AFb4HxJN8",
  "key23": "5D5eh93omde241Fx7UKKxs4xvXn7eLaohpyC1NWbxZ7f4eUFsjfXR8r5xZqoXWZbv2z2WkhWR5KLU3timi4mcxnc",
  "key24": "27C2rhucq5o1qGTu6oP5pcHuK1P41stMbWQ9sPWyXWJs9FYk78MqMfaH16zH6Mn2JCM4ckPRcc1fZ3fRkoYmappW",
  "key25": "3BVUjLu1oAhHKaKqa9u9rhw2ooSnHYb1C8sxsR8d2sBzmdQM1b1btkvKkmyughCGsSSVZ8L25zv4TM3fgW9suR6h",
  "key26": "5TFixtdSqjiS6ekZpsDLqr3ostzPmDUETLp2hyukZMi9vV7bNYLmZYaYz4L4itwrF9cJyGrNAFEVxei8UpJbJJYu",
  "key27": "2hQYWuDoZSwYB2oKBmfH1VLJK8vPZFRzpARnGSk4VqF1hoLK3JrJJoCyY6YoevjKzok9wJw2jEhpkAeRzwFYN4Zs",
  "key28": "CBQYooa5Kgvbm571E28qPRWD9MiJJNekQ1KxHSxmQFQVv8X4Ge8wxL7UV9CC69cE8qRB1jni39HKykaJUau7U7t"
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
