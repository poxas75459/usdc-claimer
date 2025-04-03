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
    "ha6y4p3BvbxysBtgTSmENhh88p5VdhtM41jdTWFmwHnWK7GP7NnNsDXUyaEdm8gzsv2u7GD64zWdNyftN5sjqtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31M375VKriUy4WT6g7iAsVy6hNKs71rUVg62cvUfN5BWAT7A6ekifA5s2WZQPdhEKw7MYdCbk1QppevqBW1KBjMq",
  "key1": "3HNaq7Vg5MaDKgYfvDPZeeaAdrTTXP9gaqtid5xQWHEt1EdFJQ858ZfPsMERpkkj6s6CDMqxQ6d6ddZcF2n17ax2",
  "key2": "4LyASi6BFgYjPcxPgP3zfGurQv3zQ3X8wSQouoTY9FQCGJiZ6zxjWvAMMERn4LR3EDYhKjvMV8xqdCfK8tFaUv1S",
  "key3": "21DHDuwHFmAZNWADyBcqhzZEfGGVV4m2aLSPxkMgMghkQk2LbePsJdrV31i1RNt9nnYrHUbLAgacehgkRGB5xZj2",
  "key4": "JGApg4oE5hPVJyjyKshAwmXehAqP1GkyJwpd4b3uRsTKZbSWpRgfBe6MgmvjBNxfHNrbqhodfzxqJ9FBpHj3QeX",
  "key5": "5tEZVCPA6eS3kNaDVYHuHcXdbcykagT2AVyc3Kcxh1nVx7AL8DatrVPX7D3hs5bVzzrGroDzyCxtcMLdpvYyT7CS",
  "key6": "3xT4PUGQVUicVRw15qiEhe9YF1EUZUrRwduFB5VnxPevyTUx3J92uVAySK8eWk5NfMvbWagk3PxJ98kZadBU3e9R",
  "key7": "3qLAKWJoKUhStSzEMrJ3piessrgYhiVSRPi88ZAm8zjnghFgwMyWta4keanmddDLPhTULQiyR7fUywM7WBeoYHas",
  "key8": "58jiGKmWY7qwij6fDRqufhjVaVaM7Jfp91Q97qdiwn7yvfacDenhSRzB1XDpcyJgg56xTP8iKRvjzpJpeDpgbomD",
  "key9": "425tHcNPfQL2v9nQ3WPW6nvK6RUdkS2pnv7FdpA14kwNtTsePSHdFuU8P78rKqsShyDk3hVT7L8K7jLboEaycm9v",
  "key10": "ZD3bja1rsKWkWPVWKdXgsbKBkGLqbN5zxn7EcatVUWdcrNpHx5d8dk4P2tu5rB3vk1Z8vHJZx76DWi6P5JJut8H",
  "key11": "2HQUBpPj5XiWs39pUEjFP3gWRP58Hs14MvqsmRdGVbaqMfKPzt5BLpyhohENruL4BPLhdU5tvK5BgUeCaeXWLujU",
  "key12": "x4RNLJeQr4679Rjhm7knqV8shQ22kDdCHtDeGZFWjHRbxGwzP8wVc3gvA1QYk8BcYUEGrfYk7AHxBph2h7MihR6",
  "key13": "5ntMCHCjg4zuUFrPxfaHzACHLyYGPsc9thuaQR3izmNrc31NYGW3mPsRxvmBpiPzHTDBoopdmtnLuYUMc9Zif2VU",
  "key14": "5oY23LSHgQMoJYUu2oMhphptEPUhZGuuNwnDZz1AJAk3KuVDwreeDsNeVkRoi6nSzGcQ8b7yREQLhsrJeQMb6SPe",
  "key15": "4RczNQHkp9wqgvJdYGS8sBA7NFjwwpDQP36e49gmwzyPQjtuD5daAtjNABeppTnhNs1obvHhhzHo94uLeAkWPUQK",
  "key16": "2BoF3kiK6KX4EmoZujJ2enZLurfppHrFzEZTghv2rwFbWBh9iCQYuqtFvE7P8qJYbnH9rjBJi3CEqzYMQ1LXWGVt",
  "key17": "3LhNVTW5KdaXdfSrGoeS1biXaPzMWyindugo5SwUodQ6Y5ZhcATeQDffTScaotP2WGeGM6qiZ6mfzTovBuT1DZxX",
  "key18": "5PDKqRPY7HcPbv9vce8qs7QGxyZYNXXJWzvfwskvkZqbE9EL3fRLpz2knNi1qnwYSbJ2TykTyZaa2EmEJ4oYQMUH",
  "key19": "22C36GFP6F6EfzeMx8UJSK2hS3v7Jdw6USWBdMCC37pzKuRQtjCXPHjEMAcZ3WmoqWhRzxKCMNCSqhoQpgZsDtrD",
  "key20": "48mU81UGBGWFLqfeGSFpLsJDDh4noDui56BQ7GDZBh3vsexi6Nfd3qsthYrQCwYiaLwvwVifJkUb83B3Kwe5HZ1R",
  "key21": "3vng7R8xgGKVbNy8zd6AJC5aDpWmYjyx6h8K1nSgVVhXi98apeckrkaUTaSAq4heYb8fFST5vtCipVvutDQf3j56",
  "key22": "2MEpZpwP1DzTCqjsvuJRmJ3dXJ9E41p61XWrM7TkfywbqLrtaXWcMzEKYKZScfCBc441QZgLBytzmo6QRgDX38gm",
  "key23": "2VQBaUtRPXYbLfEhq5o1d4rHLkWxrPbM64dE78QjFHtzDaAq47mLhKhSJgSy2q5g73LKV9fPetZU4HHvM6Bhr3fg",
  "key24": "5Mx8y9fQFFjJYgn8VtUxNHNhRcTN3tcZ9T5qCCz8vYVAghr5WKKV8bouWhsDud2bpvy1q8rvfKKz9esuWKfyGaRR",
  "key25": "2iGoBJ43gVU8jCE1bgG4dVkSidQoRLNwyFy9ofJ3tEfqSbRCwUjLp8cEsNRhf5tL7Pn35imwxt5nwFcPVCb1Ae6i",
  "key26": "3wtW9yagkGw5cDguoTwfWNojW9KGjwBqzRrP5MvghD6pGJKvGcFQzQKcZQARLLHxCvVAN7YcVXMEWAFmzQUbkPCo",
  "key27": "5L97T9HXNU37V8nm247WPL7KDRfAzW4ZiyF4crd5xrVGmu19Sm1rgXNdKXDngiKDBxNf2xutLP8N15tiShx33LwM",
  "key28": "vV1pRs7BT68D1TYqJ1dmzoTRGrXuLerBWEEfo2NxCqGbqseBADgHM6gnt3UWB7eqotmfzbd75pSQMfuAMXccxKY",
  "key29": "zPuFBnPsSSNomDZiKFQ5vUdjb1vL2ivmSTv9GxvSbSjXSLMvShKeMqCtwfqt4WHkENNUVd9HHUzznkefe7hav4Q",
  "key30": "3H5QMvG1MPGQdioRmwft8SN1fcBC1yEYu3k1pVzPQbqArLPHyHPC3ZVrZyS2MppdReHUuMEEMg74mrgGKhWmgHP6"
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
