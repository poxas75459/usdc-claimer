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
    "533CmjAyMu1LehhS32jUTcPfy9nKvFQcdB7YKMDgwGf2ds7qYkK8vgBBbir5CVrZnzTQtLZU8FK4DR1UK3cryobU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67BuJqEuvtF5pfPF8JNry7dpL3qNb1hWZyDhujeC8dr7VxRZYy8MDdySaazqkzCJS9J8YU8RpoytUx1o5kzRoVTj",
  "key1": "591bdRJ1iLH5SdodtMDccAi4DhuVaVxqsJ2JiqrgTDQfm5tvPJFVwqxCQ3EUTLCYvGTAyxdxdj21euGfM57LysEZ",
  "key2": "2v8dzGJk769K9SX9aGZ5nxqtC4MmHjMq8n3embqfRLzC2LwX9yyfLJoxsrUpU5xo4JoYUiuDj1xJ5kJH2QLHrMw2",
  "key3": "3T6UWkRSBUrwn3UA7apYPoWjzHcwEKnRcjcNo9rySpSNtR1Gts4dJgFcvKEQJKSGXXh4XUQBptCCgLJ9SSfSkanU",
  "key4": "4E5X4AugszPtoptgyycS1wUNawL2yUEaNKPhw9VsMy8NgYSZyY5fkFMMT7Q55pxnvxUdrpmfpptXXXUQ652kagxv",
  "key5": "4C9vJFbh1qMVR3ps9yMTeVGFmUaVqK1qT7MLjzvvbxC1RkULZcGwCGq2bNYcitPSVCS63U3xYdXZqQXsvRLTn3gB",
  "key6": "2S7fZhF2v1eswmDGVc2LcgPfTe37aZcbPFgUSYdYsxEhUGkZJWrgJBt5tuXkee9xGR5Yb11tkN9LRACTz3CoEGZc",
  "key7": "3EjDHmfQjaSSbXQtXHAB8HHGj9f5t3egeAa8n2QUTCyBZ5FsE6k1VGXs8KqHgQ7aY74Xb8V4566uctruSup14iQa",
  "key8": "4X2HZRZb4do6yJ78Lp5YwSFShAQFCHbH7HKbVkpeSfYkaA7dkqYNw9CbvBZpugxDHHZohBCdrYpeq7bBkcAeL2TD",
  "key9": "234odX69GgQFKH6fXTMZKVvJsbCfAkKkxpqmPZCGYHdmXQbaNNQB6MHJMqqPtxnScztM1SWCaHGmPmmY8rxiacrJ",
  "key10": "5gt9MFr5tyQTF6wxnhdC6zi2x1VMcL8u3q5ibhM8tMHj6NgakbLgAWcF2EdgzCgDR8QwMXzHgE2qST1Rno7pufPd",
  "key11": "4VAztf1owhJYVpa9zpKwM8UuoUYumtRnbJPWECnxRBosrEmrRZTK5JXN27Li1cfCLhJZRRkmqvXrQk99b86AZLQx",
  "key12": "4v2prhfUvBMBkRM9hg4G74NHdpBrTpfPfnuQWWy7ZrHsxfBYtLsgmDrmHe58fCukAk688UZGNpUeCv6Df1PtzsEX",
  "key13": "64zEAw2hpeH79ZyaGex5oVNBzsG6WSVyAACdARE2XhMmAqrV4TTTG1z9mT2Gjy4PhgrovzEreCzLv27YpkG4sCWR",
  "key14": "63Da9UWvitTJN2iWGmwjhQq5mtKH9KdEKmqBvVAgssir2iP1BXpmaWSLEbNqctNWVg12LmbgwJqzr4wdeBiNccU5",
  "key15": "5ZXwdjQ2vAudshrjQA7A31F9FWAqbr8VaBGA4QHwtWeqp5nczxAXEqLncnkE6T8RQSLEiSRQQgiT6sPZtLSVnENA",
  "key16": "4zHJn9Tq6J4Fi72ugXL1sJiXnTJV7NYLGqPQFXfN1ioAkSwMLdPaM8uVTeVW3CsCy5VyA6mnbCb9Vp7cVRznAX4E",
  "key17": "Z6tS595gvoWhHptNg5QgcZjq9b6Ch2u6D359HKVbQTRHuKJXXuPGDpEZKgQ7FX84d4bGskGYcXXAhmRgo656NfL",
  "key18": "2fh2iEmhdiiSmasA496sKmhva8Ff3ogaDaD39DevAa638MkCMFQjekbscCYa3UJWgkfFSnXzx7fz1rhj9WohcdcJ",
  "key19": "5AXU1TprSxKotoSQJ88qiYAotSGWnFFG5RboTzFmPTY7AG9jNinaiQQ7tdsQT9YsgW1U5jZBd4Hi9s6ZozSm4H3C",
  "key20": "32Nx621zoj6vJLK9dZVuVjaz3dUfFckuAdsH6SWFvnV56ZtVuvyjgQpvUcmSmcDai65FGCsNNcVGB21WvZ6aDUjH",
  "key21": "64d5GHds1763tvqevt8ZmSwtrDnFGzYHsg1kJVsFZ5GLHjPUbtTvbzJcbmmjJXbJKw97SeMhF3MqhTGP432mf2o",
  "key22": "2LtKzRJpM3wdtyZH6XMF4ggkvhuPcANCXgxAAiz4Rucd6Syr8RqFiSt3n3NperbmBTjZMiykKgU2kE2aTh2cHf2G",
  "key23": "47P9a95qu6brgP4gkoZsXuf1yuTr7c3Q7gpynkii5Bw25rrPwU93CoJkz7RPdseroTJsb26VBK1EatxG5b5fLSu4",
  "key24": "2Nj7rXyDxqsVHCyRDG4j1deGeCNF3QN1AoSWCu5bBLnc8KU6XxqbYgdfnEXbbudKiAtMNDcYNgKc1e5PQEyiAAVX",
  "key25": "mysJvdrbDc9WGz2uNX1jXkvDqbFHh6ZrGHpwMDYKCMGh8FHkmcvzpnjU3hkjwi3FgzE6V8Ek4Zg2nj6y5MNGufQ",
  "key26": "4D5y1meQc91LRbxKiJqhGuKiaYdLZm9vbDeJPMQ41ZDK22gsXPPovEj82qPKKJDQ94GPUDqRhbzD35DEUeWqrqGF",
  "key27": "4gA5QLR8h1mvrixDN1zcMBWUUn2PhJ1ZbRh9MiabhCx4rkSkxX6Fci29NTPfKDF3E2JAqWi2epyductwsqmyPDmz",
  "key28": "2TRzxTHMbCwCfjL1sVEoD3M6pguFgFZdT1Pd1HvmfJboKL5wphnUbgcLT2osXCzfBCWXNuHqD4cL3LpZ6YRRQUyu",
  "key29": "5piWBrJzoowuNcn8mPB9fX29YYNPzeCrNA2LgtysQ7GuXGLxBFhV5tvQt6LueLnH8Yjuk5nZz8LFVnNqVc7L3Bc1",
  "key30": "35G9KDFpgCovGVQhHFwnK3bvnFWpCk7edNSPfP3rrC4sWhCfkRubbt4EEzxKkoAB5caExRXfpU19E6SHt462yT96",
  "key31": "uMkXVoE2ooUm2QWGKqAzimWSAWXSmTw3wzQw9SFZu1N9T79oB7mvmfPG4CVnfxPkgJnhf5s835qaLG6VQU1Drr6",
  "key32": "3Dbpa4frRBjTjSAsbbteJXx9rRpVazboRgMtTP6d46o2CszKCPUa9aMn81ZYqYFGAbxcTCjxwE61ShddAgK9mnTL",
  "key33": "4tYg3w7CN3KMFiUiNzUPGkCbiECetAkg4QP1hM3jxfzwrDgsLg1LaVD6Kbs7VF1SsTx46QaMkRQbDA5G961c6orB",
  "key34": "52h3CQjoCcrCfBGpKqBscAjn6wwCuhrrE7dGh6HUuin9SsLdQzJQ1wPiexeVjWPCDi538XpNE99ZpCxQ65f6FG9g",
  "key35": "64sbLi4LaGVoHNznCkNDLgJAK6HmVFwW6ZW13RZwepMv7rKTJQC7mTMZ5CuZe8wRdTFUdxNr7U3GMLqDxvXEaNFM",
  "key36": "5ngFyUcv9S5km8uwEM4ugKQ83BGWFTHRdXRgyQ8QMebvNAHCEFT1sSKM8oKAnj55PTurpC9wtLSycCumH8139DFq",
  "key37": "4VCwSnX8NPMfr1U33YSm3pbLgwZJPPNbFpeRCYPVqCqPRMjvAYUZiPQX2FTF2tCqE9PUGsL4WkERWz6ZzNuYq8YE",
  "key38": "4shmMHhFaLayJmq3fXh1nLrwi5S9suYLpQf1aPQ1QbdQwNfPaFbJuYDFY3BSU2j3VmNfzZi5USQMdvHweWiD1YT4",
  "key39": "5j5YsdZFiom8UVHG1W79vKTwuPvEUd2ayz7hkJSbi2hfAJJDdEXZvtUwJucqDGTrfyvkrCHXG6uQurtA4Ygf2TWC",
  "key40": "Ddo5dXzrKzkEh8fngC2uUDpKkYzRzx3hgJHaMqk1Tyxf3vmN6ay8LwqcvZwzBJwePASKzMdm6XWCuP3Dhj96oQ8",
  "key41": "5zV6rsXVEYWGPxLu31XxYmbnmbZ3qNYRS9d7HYh2HAE2Vw159Krtj7vcYMRRxMWbHBDxS6aR76F7iwCx5aTzbuFG",
  "key42": "4eMyDCU34kWLoLmSfia5ohJbj27h84W1VaPNAYET1VRPoLyXRKWXACGABwwh2DDMbshMpASqECJ7XY6Zh1PCCk4h",
  "key43": "4qZ5QyAoQppTLqdm3U7fZNuVvFEBwmKa7A5bXRCejczeW2nS7kAYDYqwhsGgR75cy9tJXdR3muUcXqtBFAkemmqi",
  "key44": "tA4rjKpY7rcXdspykrCdHWwfRv3FZJpKcT1k7oia1MhpYyyrncg189jfaZpogBj5Hv42YeourrQN7vMP8PNBjF2"
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
