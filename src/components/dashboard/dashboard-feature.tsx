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
    "5LVLmkewYt9dmfdVYaq9ZsTWE1n4GCwZMUBvK1NV9r8uxu3YaeHvuxsnh8GLFq4dWZS4VJAbz592DbgXkCQuU2ZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a6XFtDqqPtM7yoFTKTqcgYJ4frjkbkjgkD5bgY48jXhafBhX17UT8UX6J6WMM71CrjQAhMGgRWZJ9Mx6WcEQaER",
  "key1": "2s1G648kGnMxEmtfQMo6pGGwkSXpUVq4ufpu9mMjRZPhuZhadRtRCofh5c16XEj1Lvnx3ntnwhBMUrK4CXxH835U",
  "key2": "339txB4wNnz38diizHi3wwTW8Ewd7ng4FAM5dv163q7s16fJRF4ftuDsE5ER46H76kCDMRHZ8biLgt3YJ5fAa3tW",
  "key3": "4PGMpS7RE1F4hPXc5ir9AoQWJoeSj9XVmw7mbUwHraNb96BvgqMtSRz7RHgGs1zzeRZtQ9TBprK8p5vo3V3GqVLZ",
  "key4": "4AnZYHwcndHespzfNjHdB1BMgxsPNzj84c2vTq5CDe9Bu4WzRcaVge9JHvqfAG7NDxAiiMLqFBtdEBh1pRfnQdta",
  "key5": "47ewK4LmgXvo3eQcQKE9jbeHKg7whiRfCRSJ12fL5evLYedQJbQzqRTKkq4TZxQUqdmvjaWvNBSDZW7bB3vdaMpT",
  "key6": "3PYK67pYQ7RD3C3WU1BZeB73fwXuuanYefc8Q2kdZYRQEwbnEYwRLLboqJw6UJ7DDTX2yNcQ82UJpgSE5oWL6JmQ",
  "key7": "3Jdm4Ckd9iF21q1ar4RkCM4GgCZibst31Dd76eLQLLfoX3fsuQR2MAZHXKxN5uxzJXM7SmH7YQFauWi8Uo6LSKvA",
  "key8": "2Q2abtXoDJ3srCHSUEoGa6TJurHVenumMNcqdqzYeB23JmdK5Yq4fwaWHK99Cz4uKq5EbNFWh11uQ7T7D5D9z5e4",
  "key9": "maiU771h8HswPG11idQsdhpZWZYw7JGRMsGtS4gdAPGUSjZcMsuJt6KxxVj9Adf1MxFroeYZkNxSg1Tsx61fj5E",
  "key10": "612AJFNWtKjpaj9p56BdJLUjYzvGnB4gFB4RixTaNLcShgNpMxEHdH243TErUgvA4kGRomsNX5KBJAKhZkxZFRuM",
  "key11": "2exX8M37zyinEuK1d2iYpfENp9zdwhR3t1qQNmxE66FPEhcMQrL6ayhGEruKsuGp5bBzUjrf3KgjXLt9qp7KJPVu",
  "key12": "5n7KCmdkdCfJ6EmmFnevNbuw3JzDyWbpiGaNDgApHHvuqJA4DZybWiSkpS3cCRV8g2SGK3SkGQed3dSWMMsnYBfC",
  "key13": "5oqcqvKeXUMczcsViBZwj49kXS9UWTc4TU91t3Fq8GcekGzWvE2njELQGeN22Ct4tXi5xF6vQMsJEXhKjjgVUHhz",
  "key14": "4ehfuFZc2ZetGdgq97b6gw2KDdoTj7wkXQn1GzqhMBeqnYC4rueikQme3SV92pM8QEX4gc9FjEF2x4QZiyDDnuVo",
  "key15": "4poDVN5K1dGobtkbwPJQ1aBCJYax1oUfNGQSxMpCWZmWZBmUmXUbyjS5MReibtnv3GG6A5821M1bCggqeZ7LcUJP",
  "key16": "5j9pQC2q2oHLqe9KoNLE5nxtg4uQDXiZ97uLfJ3Qht14UHu9FUgKtrXMF7hTMrKS7ftaLSjyK4gnCN9t8YE82qSP",
  "key17": "5UKtbQT1hzXbhJKvxeRYS7CS6HKKANcccXZ8PAeYwkrk1WKUZUTRbtmkWWSKRevVGiJu8rk2cba9N8RGC7p8JcbA",
  "key18": "3MZuBVcboTMXqkCC8X5FDRxXG4PfYET4sMojar1jUEWernY3Fyj9FBRLw6QXTprgEGGHysVKboMGTNYc3R3d5CjZ",
  "key19": "3adJo7YM5FTK7TdfjKXUyMqE3zwwiHVtfhuGfGnba6fBVuqdSsP47J5eqXLzuWeUzfCX5VSBBERe6ufqTR4kYmGi",
  "key20": "4XfXDhHp1ZCDbytpas1Wk2atuuNVyE3A5EqnEttAhp142Xwk6GXPdFBsKPHBDCXxLBHgsr8agnz8uqdhHR4QptMQ",
  "key21": "2cx2ejiYKKZxFP7ESDywmGiBDsqkQk2DhtBEeuf32dvyDV59h8fDPkXYYJv6kJiHHFyYHzsif1XoTK6GAYPWGqbk",
  "key22": "3Gnq5vruTo69oLqpcTTddFXMbntYJLGm7qFfB94L9EcaDjxLe7yqW4ygFwim5LzvRC2owtKJQP5BCXfHcdYXpkiG",
  "key23": "2PfheEAFDhKMAtkbypYLRXHqQmoiaEuPaTaDb6heDdbUjHw2nYSQ9CPMiUqa8zCNeew6rVm1n4NiRd2X36hmqoiJ",
  "key24": "3N7mSRC8BFBoyQHRPuSuWBjaSubc3uMq61BfjFand2HSy6rMvHmEQdC34caUQ35xd78AUKaqDH47VsJExEPbitJz",
  "key25": "558ez31cWQrWyCWuw3FrjZw2vmFXkEBYSBqcbmddpp6r6XEEBunA7YUgrwCQVbMogTLLL75ZPmb3255hhcu6ZorM",
  "key26": "4XZw2VkkQbUnvtBZQDe6Xi7wtG2pHh2akwDZp3TiQhjQXXA44n6kDDoS3Zxw6ha5oSEVcjHiTX8AmR3J7rnw8PZa",
  "key27": "4QYh8nb4rVKFv6YtpkiGFA214YyMCJGiBVJKrkdM4GGGC5mR3wrj1xhqzm2Z2T6jwfKwkv8ATWdPNLzsvXd8V7Ei",
  "key28": "411ZdwiSKcauPKgBPQmbG3kSJfEFepxKSnEyiTFgroZ5JUYoHzgdGJouoXKf7YHwB61UZS95AmGxqhjxGMyxpyTJ",
  "key29": "5gk9DbV4HS1n63EDJLAkCKpaSMLxRnJ8yZVUAWRx9keePmfR62xj9ZnnbwWLDpQMiyPqesdyRPE11aVvWhSpqfWN",
  "key30": "4bTqWLVXoJctWr3RUQgV8MHVHeH6QVJfmnwW2UkmxNpG97cuP4B4BNqX8j7K8AwApRhzhTCDRoFUALrnwM84hdxP",
  "key31": "2ytMyamqCKoEM2bsMuruBxqvsXiNfcLJCuJNh5LvJ1kush3P2h1fWQ24onU8TuXfZMkZhsqD7W1dVMrrfPyC5oFi",
  "key32": "3z6yqmS7TYxsqAYzjtMmXKJTN2qouo46HGX3UEhuuEtBE1tHVWLtvkM9RHY4Fe6Cokca8QhHAKBV2gdKw4DmxXZN",
  "key33": "3L4D6yKYgjwT4vWne8VjtJLxXdSXpwE9TKoXgxNtv8888SQez63Srrq9jrnQLctKkjPZ49CqGaxZvfVXuas3AQ3d",
  "key34": "35FkdFfnnXDzfxtNjPUqHjTE6DGiX5pr3CiLo31q6Tk6JCnRijjP8sjLddyDpQ2Uu81kKcTji5EhUetW6U8uqvJS",
  "key35": "2htnSo7zrw7JFa5WqaxCjP7kSi8YjJM3gv8wcbfdCAWwo6qUSDs65CrZt427u8Su1Gb8YbBgKiWksp45M7WGGrj",
  "key36": "4MWZLxdgvNedDSDbTZn15XWgv3ovBHScwrNGuPzeymPbXbqJJRwiPWSEAMQiXhvgF61iy2csU1yNvoz9weX8rJ9x",
  "key37": "gLjWePEmgXkX9hMnhB7JR6hBu5H6jMGxsgrZbFv2EWwRoYaLhj9fyMaxNMLjzyXjtWRzwVaFfukci3U5s78vXUt",
  "key38": "YaRdqCSGRjEEsgWJFKUuvZtBNyTcSmLXB9kv1nkpBBeq3u3FrSN26kTFe1ZRKufMBiUiTgH5uSdCRyKh5MGDGPc",
  "key39": "2yfJ98Nxq3j3PVyXgtAqQmg7YwpU7ffZEaJytvoyNHZn1tUHzcxoCwjUUNjx7LkHAx4HSNNeE4rsVcsBEC2dB7Jm",
  "key40": "5pjHG1bZCKuLAZTZuDCKMxW99kUSL3HrvPYgFX819JDGyWBJN5pX6vTE125ymdSRhu8vSGCWucqmHqfodda9icwe",
  "key41": "2GyESn18PHJVKfzpRHsQU9HNN7RFdFHR7ppzPZf1a2Y4ptnS2s8jiuwErwa3CcFktZj1DHTu36xGY3Nbrn1ExRYK",
  "key42": "4SUCKtJcAHqadsEvWd3TgTULUzFm1uuP6Mpq2LUetjUCDAkPsz9U7bh29nsk9zgWZ9mHuV14D2FtqXu2tNi4i1YY",
  "key43": "38sBrsRC4z4SeSDbp25rbbNfdyUX3oGt4vDPXBoPJB6FxcRqAhSz4RNEsxu2FoRNwcb5TACRWw21bTnx3Agc2Pqu",
  "key44": "2ZBMZaTHZKo4uhTshrau31XiBm3Hnzkgm4Zpe1b5HSwz4bs1HsDqepXECGf1kMus2GYhYKanNRokqUv3kNoVB5mZ",
  "key45": "4t6Y9m3EUtdNM7KwhVimimgZ1odusiS3jZy9waAFwGHqGFG1gkAa33MQgEDFzSEkjNmMRMvvC4qLkGnGdWQQkt56"
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
