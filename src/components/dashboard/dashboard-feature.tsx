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
    "boPiS2krc3k6TEQeyKmVyvvRnkq8aQHcTDu4oLGYPHv48hPKkFKiP5u5egHQvencxFNMX8BkWGs8NZoYfxjeGAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iCr8rHW1HD3u8wkRj3q9GsNNsec6aaeF786E2cVPRrsNBsJnWXTYuj7EoMjCTBCNgmsGS7mxyjv1WLNzQWU8NEx",
  "key1": "27dQYovwpYmExgSXwenUWkG4Suc7YdChSQ7cN1MbV7NNkTDoad6jAZ94Gre8mKozX5UJErx2N85Wi3MtXRzrq57B",
  "key2": "ZwwNtjQVYdWPwB354Y7JUmRKLtNu9FSiQbFXC5B4YLYHkb9qDvoLSVHp6wLuHW8JiBuVBTV5ySrJxaAfBKEAXwt",
  "key3": "g1f54DVVoh28aW4bMri287NeAbAuW3V4N7xf9gteyyQCVxkfuNhhrxpF6CVjq115F22QniPT3eRXZpFBxGtKCG9",
  "key4": "4cWC9kP4gSfHvq9ZezN5LmRvoLcpFjEVu4SC4RYMwst4LDMA6eb4aP2TmdFq1NiszmLBLragsCSFLCLSznddgFyh",
  "key5": "53J3SmhCQdxfQsiiHSd3kF6NivGwDcgiaAPHryPRtRbpg4STS49cHSWX1NYvEi653eadAd84Qfe2A9KMCP7juTG9",
  "key6": "3cnr9pYUjfoWWK8X2kmpr1oMYKYxkZTr8rdGS56MUqWC1iDzqrGx8RBsbQdmNzX3oWVuB1tN7LbsVbRaMoSL8i4r",
  "key7": "9iDwUJtdovgCmt7bfgyXdZJ2tnVC5vxamu1DVanby5ShNDjtjExtwM37fdNWGeDQwosC2JJzokF2XVRefQroKKV",
  "key8": "hR3RHRELgyuBeqPgzUbAjyNmiknz9E1cK3XEvrZGdMFtYAGakgdijEK3vi7VhhixY8RJbLqhCtPM1VEveFvMXj9",
  "key9": "3eRACEW8PoTdH85Q6DguYvPPK6tqTj1sN51FkUkbRNBqqV9EBJ92D2pbdHseC1qXEbc3bjEoipXEkeMU3UXeusog",
  "key10": "2X7QDG66F3UXkYyFVXCcaSTfgy8VNuZ28ScQPVQvTdMUGWdTH1mCozLgvcY2YU8JyLrvxDQXkBhEJxxJErbTtQFA",
  "key11": "S2GRe9hNs4MrTQARpFXd8QdSJcioiQCdFQnLx9AERLGGXw8kVoJNL3wnSKfmQBvsiXYAhTjgTQYLGua6pMaDDC9",
  "key12": "4bMbhAcY8xtPsMfSif33Pv2eybLgEmcaKH7jxuWnYJ9NMJK9ynBKWLZWDjo8xjYQBvwSdKLsG5xGtQSatz4KoT3z",
  "key13": "48uQaDdaqGkFbQrHLRoM8FrDa3zytwSoxjjY4ZSwJTFDEMkpcqSJ8D2KqkCPN3Szx2RkaG7TnwYi8K1ZhYZSZWRi",
  "key14": "4r2QccncPZKaBC12usvWh673X5wD22DKtbD9JvtTPYoJpff7AtksJvfmxhAHNLoHxQDQHcWeNxAp7kuXpDjgfwMz",
  "key15": "5nc2UHjRoFcd5X7X8fNKQt1GJyx7s4SzPHwtUEZs9tA2HVQxa7cu8yHRp3Lu8nsMSHd3VaF1k6fJ64GJv4WHvCG5",
  "key16": "5Q6fak9XNamX6snaCFjja1TcLC99Ujxk4wQGBakwzDGHDzGEcZETxHb8bCGbgSpBVi5ENLgjTPZoHxGKgFrobcWT",
  "key17": "3nDUtUV5EwKMnUq9w7WCww1DU6CULhdYoB2NvAintpqWLpGveYDKLGNkVUtWTuacRVC3Rw9ma1oEoyRYm6DZmxd8",
  "key18": "5XhH4w6n2Co9pWVyqvqkcxWrFpidfM7bucgX5eBiLfvPpwcKExKN4VHRbCMiMezhsKm8AZxBNe9B9HQN4nwSo29Z",
  "key19": "3BKV9SQp6FUY9vx4xeNjq58tNH3ESy98khTEYfEb8JWPJfFE56XhjTRhTwAtyA7LbPbRpvTWbFgjLS5PPmgP1PPn",
  "key20": "2wG3CLMAPbp91jfRW5ZYH6rztYV4fHF4mYhwNzsA3ybHcqKcP5K7uGx3NHpMMHfmLqnuieB5y8WEg8i4HVgrqTBA",
  "key21": "59EGE1QHeH8QqNjG1xJvKJVZReDoARKNeXgRVKSeP9XLf5LcwJhaZLS9i9w4U8T5TkuzRgPQFCvok8aJWcjBfZMk",
  "key22": "28528NAfMqUmXnCByR7kBXbR7aBhvmBh7Nmo68BNnfotFRJhKoVAzCGnUxaaBXVjPb8DaJMpNbQWpNwwVj7vX2u6",
  "key23": "58Ef2W4nswDhRtXQHjvkkv8kjksNXb4FD5XKPRxfBFaR61giCCjsNQwe2J77SCWGXe7SmcGprzYxhiizEQjgDE8W",
  "key24": "4dzjYL5XFsUJ1a4mNnKup2pM5KWvLtPtS6ZwzH8UTQdN2FpmLx7J1WsVjVqCzTeYXtUdj8PRQuSymiJvGNni8P5o",
  "key25": "2A4zKqeAggoAhStN3CQguQTmVHZzfNFEkUutELbNGK51GJQynNCm9Dg2M2G25Qxcm22J72TH8NVss8LXzDjhdrj9",
  "key26": "5eXk2sT4z7X4ddQ95GCPEog7qxK9qTRgJ5MuMquxAifMExwv3RLYXM4fGd2homfpXge3xWQ52oj9boB68CHthJcE",
  "key27": "4PzBawvkT2zgx23Fop1JWRaG4b9oZx9KGhq1bTh5NCKRS4QRz6WcTqhJEw669d5FudCsgqyUFiyZqhvBCejte7zF",
  "key28": "3XoyGnnFW7jCdDdebvyEf6r8EFiw13mo9hcNwzTtv2LDYHWfpBcxzckLyDZSRiYSZRVWyWJrbWuApwJ7BocScPsz",
  "key29": "3w7FTbEs35A9jmLSKhv1wdYfCJYYUH4hcpzGydRFCDJtBtzNVMtbVNsp7N1P67p5TELSegnkYryy2B2jpjH5mqdw",
  "key30": "2ADiGK3WaHx42diqVFTE9gv6exHSWgQtQbmL4FbMbGfd9p2KTXXYT1qDBMbyBKb6DTVjcGzT6gS3ew8ffGHLFGUN",
  "key31": "2PXwomsAnro6Fhs9mrBvy4Xqwb1iNGSgPdg63wdsNEn2jLj1c98YxpGrmrpekY1PDz7MkLjVoMcbtB1adYosB1HR",
  "key32": "3zVxvxozW9A58r1mRAbMZzX4PaGw9tN4QcrD8rUHxDoeP83fmiXeNrMv55GC7dQ362c81LhRgbovDhWGEgigB7gL",
  "key33": "4ZwhFgAyY25KQjZZRwqTnt9opW6Q4QMdLQ5wFn7jsDoMzgCbWj8MChuN86tvLCbckz3RXjioxd4N9cU3UCyobv9L",
  "key34": "5BVhhB9jetaNseUp9RRUJSuxazrJY5mmKTSX9XDERtJCFcoZMMP6FnJtSEGaDYmjSjBwY7TTPtjiE2A4KBJWewwt",
  "key35": "2rY59c64jP8ZbnNpZwcz96D4FPsTVFyCRzNZGBjriV9ArrnXtzmkJgagwFQjG8Cg7gz2mH77e4ADMTbyRLSia9u6",
  "key36": "2xgYWmhUKXFahF7WEZKweLmMKUt3gNyUvczYJazaWDXji2dEXvPjh35xsgFUvTkMcyEof7exT4WhE1VcvenwDGKs",
  "key37": "5pAroDs2DVr5pgtcELAW1XegFWD8XRZFzG8NdedxAZA7jLSk3wimjeqLXdDvAWmodTQ7h4cDDPdsQuHiiN9rFdKy",
  "key38": "334EeA9kdA2M5VXEs8so7SUzAferNpkh7dcn4mYWzFMDTvGwxsTdEVJkUrYEhBsxW9pRC3wkGXFTo18H2gQccZb3"
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
