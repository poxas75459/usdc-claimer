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
    "3fh57pNCyTaeYCSGJJnRVFdo1PsKSv1FUNUcDGxWbZo4KodJ9Mg2mqVpuz3B1kuJkQLb7xrraX5kHWDYC276cLfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28v81WjycsiR1mvdTc7Xr3j96LyYiAt2D76ep6zGkiGsKBAucSg9R4wSFjjv2TTyMpGfuQ5oRu7B3YMXdmMC6tWx",
  "key1": "8A7zk1eMKES7e3czUnaTZHcceqJGtBGigDHsAkdPgkW5xiznm9a6YCLQifWC4La96nxC9tMe3daGUtBVTuWtDWW",
  "key2": "2Ez1MRev32HaeVKY5ydWSGiM1LeLqNEXvaXrXhVVrEzpTrbEMJHvgbMz8YcnFxjapDb9DWqaakauzN2JMofgL8V6",
  "key3": "5zZFRcsv8kxCudnYB3foCU1DpVEPWsPKTbSv2L2gpgJMcjxbEoTC3uycNxsRnLkXGaHrWFtddp7ryibXLx8un8MS",
  "key4": "429vnuwuWVhzZJ9SsFwcMBTdejpwhPda2gXp9inRcpGid4fLLn4Rj4WwzPBRezjZwQKGbtdyYu91fwrAFP3kgsmo",
  "key5": "9852PbXEzYw4SqoeHQYUFRN6xyKzpmm1wcmUpk8AXq3Xto8r9wurHypC7wRhTGXnbekHxsdtb6h91Nf5g6GFcNY",
  "key6": "5gM3aTDZymZifU15sgiPH13s7xJZfCJBgJdZTGf5uYyBqwz5LHJB6NtfgTrtufRJ1qPf22kRaazCw6JSxZUHjXuX",
  "key7": "5Pa72jcQtjzofP3jpW1JWfAQLNgRgtmzxLRWkpDJeFG39K76P7JB3pXVagJM65zv7oq4p2j5e2oydpBq4WNtSSbY",
  "key8": "3dLhYmrCC8gRhgt7S1cJ3qyN4ngQZqeSHWEPJYZGhQxUfr2UAXLr5xSLJQXWddv7yR7vSw8M7WqCzKxjPeURWNtA",
  "key9": "4cCWLvdRmMpJkyBXLGbqoEFUSgoMSnLe45ZBhqTGxgpx2Jeoz8ESpC6na7if2Wyy1SPHPhetavXy5JS3EuyrTx1k",
  "key10": "33HKSWsEVgtrmxc6tJ38vaA3u3qt4cKFf7s43M8G7dyuaJr7gcL5opisFKbJHrhKcMpLjqvj1RKyjH8VMX289UuV",
  "key11": "3MAQCWXXkms2119tVTTXi9YaK4U2shFVaQzSmJ4ANAnCtpMsujzjTLnyprqsr3xgfSiqUnmy2gygLCzui1Qnm1Gw",
  "key12": "22wuihBrvQeEPzUQYyKSqaeK45zvQnqmKYbxEFiuFPKwZUugLR6y48yi4xq515nLDoArH2KtUjBkgCWi3HYr8seK",
  "key13": "cbyFb2pEfAPkC32WoREh54ZUYDUNNJGUSQLqnCRuBTuxRT3sJtXbtmovSrtN9WwhHEvCyUWBD7VUskuE4A6ctLf",
  "key14": "kLxF9sTmsGsHaiwyBwLZBbTzbYK4WWhVBP1pBoyYuJxnitvyuA6prTyQ2bZM1VZtvf92Y2H1xzRgkf7Bh8taTgK",
  "key15": "4dEYzFZBiESF3Kig8GuZhmvXBWGfMLK5KZ98LwTCRPBPiNFGapgEvXkiuFGNsMna34XeH7WrATmt4uP2fviBSsKc",
  "key16": "611FNn17ozBZdnicwE6QPJgaac9yfMYRfAaPQK2EVFVo7gDBnXGytB2pGztJasN3642AMXJWCwcjQoWFT9DmscfR",
  "key17": "2mW2f9s1aqhrUppW7CMeSYY9q2PaeSnFDNiSPX5SaoMboYUrnwmJyNCwrAQuV7S8bFeCzGUsuqPxy8JVUpfH5QnZ",
  "key18": "54DfPk56Xz8Zp6ouwtvYFn9W1VfybVXJQaz6euqRJkeut9RQjGj2i4f4zxyYUsmRsFSwBEGai6fWLy842JqDXLmx",
  "key19": "4WZTzNxDfeVGjVoPjqZ47zcVV4eWDTYucjxFiNWZosPV5FLZz4EhQvz6NLp1vazEj4BPujmERybgv4NiZ8yTKaZp",
  "key20": "YFCGG4Jtya3D5Z8EXMidTtijBDAVAEeXKXNDkfm48fk4Lvzjb1skgUbQYQL7NqJJZcPA2WQzXKrC77qez7WT1Wu",
  "key21": "UJEELiqJ2oejQsxEYDZQxSahHU1GLWozico2QbiDw1q8TQ4WzFEuHkXUZLvepKtgD9uZVdz6cVykiiu4Bp1WGca",
  "key22": "5zqPgpFXsZH1PsXWMb8vVHSn2uiMbfVJQfH5eYYfKttTcaHejwPfujRpUDRpNPF7FaYjoYnkfKr4QJCoj6chLG5w",
  "key23": "3DkdC2NyoXZBqUrzKrxtU3t219rPMce1AQ35MvcBcGBZZKVHyVai7V5MWTqzUHNvRenAEAvRAxsnbkDwLow4m4LB",
  "key24": "3iPFSLJHHjqfBw3igUwH4o8TNk2DvroTdp11YmucLqtFqMMDTPopTiohMQHMH5HNjSzDoozdsLQ6vr7qBJ9tFC1X",
  "key25": "52gp95xcfz4KUVNTGqBqcpA3gAv31Jm6VpLPYGb7S6gSffhhgsfCz98ehsE4LF8Qv2c8P8caaFbNfLCthy4pSXiY",
  "key26": "424aXjZnQT3wvb4ThEoYyiUj9zva5WN5ioosjVBVgHXTNaJ8e2XwKTU6YZfB5DuSHSrSfTL8C87cNRMxhFqwYxEA",
  "key27": "3nSoJ5Jx1Lt7bCmZTX8nqs6k2Wiw6hYNhRh5witztGpPP5bk8RaRFfWcBZ5cDiYSBQ4uNweeBKa52TJgXsNuwBAm",
  "key28": "2KfBLBeiXsVKNW5qy2gTw6pyeJWUqLk1whrz4Prgk3Pzwi6qemUZ8rSjBH1LudXnx5m1yTPjPHz8Hq9vHj3PuqDi",
  "key29": "4hRk2qF2nps9RAas2TkyVjtnSXswGjXcLAKhAfUHSSa2AkY6RHszxVaGmDka2nMNUnbTfbUSCKJ5jkcbbRNphfCb",
  "key30": "34abRraRg5YZ3Ar6bEv2oZMgfKc3DJx7baqyqmRRtaebqTn99PmaE9gPEZ4CR5c8bDjKxGcJnbt79VxgA9WLthUv",
  "key31": "4f6fgvBGFsnoqCqW5j455Ts57szZuL2DUMc2Tg6jtfoxNmnUoMPYsFz9J7Rsvd7fkjfmdDMsFjXfND1dFtf6MDUs",
  "key32": "4hKhH5r2A4aEoBtDbXASRA22c9jeyzEucuMv3g2dCrYZztwFJNkpZ7NCU3cZA3iHe9L6rGia4pp6gdH3FKuSJkfF",
  "key33": "XCSczP8BAroUkApqT2pRdZBCP4Zci5fcLaDWv4kYkWxKxHZj4R7AZ43x6mCCi3s3jihgvRzZo8mq236tKkhVZFn"
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
