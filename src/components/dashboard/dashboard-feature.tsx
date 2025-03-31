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
    "5BCW7L31jgMTz8aC5Z2CxWfWk55Asy5FrqoXaJ9zVvJVVGNxxzjzvAUuinUnCLC34CfwkEMb5mC2w1uCei5qTnPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gCdXKJ9DqUSh3YitH7Tg9wRWk3yZwt59opMLxti1Nr4RMaFwTsGQTSFs2CDVvXYnB9da4F7v4v9iPXtBxfqueCH",
  "key1": "3fv8BRsMCMwNXFSyQKGMagVVQKVEjVzrVa2jHMAqju6Ty1ASmG917M7sdShM3nFLYGuJs5fXDTNUWfs5963sy53n",
  "key2": "6VwraYNXZjD6xz3VUuzyLGEfAvzkN27tRLvxF1xPgx7HY1J7sJRfvkTjLJ7UR6Bojt48Pqz4p3HxBSza74TX95Q",
  "key3": "47pNgiE8RPgGdSBgjYc963fE7Fs5j6DkwLkQYoSaFAjwkMVAA1G9pNnbvFeeMwEt9Cn2bypgC1K1kmc5S3XnBV3R",
  "key4": "WaBvPuG1A3oNk7b9yMWSNcTBFBHq5C8yjWnj1BfMAZsDw6DFWeW6xrEgssKGeaFucyDJcyhNBiKqGRei78Q7nmN",
  "key5": "4eAAmuAj7xxQQzA4jcicTWKUE43goH1XD9cGm1bSSdNqCcJt5GG8vmiiabMQPV1xCUCQq8awk55k7LXDDpTXJ3gX",
  "key6": "EXwxP7dSesuLZb9B8wcAdx82irF8DDHNLZbL4eeiwafLFdpGRb5xLkfgBXRkZjLkmEGrUtTTuxjw1v3ySGMwhUN",
  "key7": "5iqfFQzVfrKtvZiUpezaYLtrhRHXGpehas2n2KZGfkdqjCRz7b5hfaLSueGHMJidQEGDvUXdZAJNAXJQaRJsfSre",
  "key8": "2qBLuJXXkT8A3MjJunhX8nsSKBjwYzmsCkybK2e15WuepvTzhJYu7FbXJNmffsFvWyVhxHEkD58EikiJVmahQ2CQ",
  "key9": "5UCQYnoigb1u6cAHXQqDeFBbbr9cxxHZRfZC65XKwk4EQS1xNjH8hEbozYvfdnDjd7NcPTG6TUYAnu5yYsENuoHb",
  "key10": "2rBsCew5d3PjQD2FAjHzfxxQpaXh8soSURgX1droAKH6f14NKiUhAyXLr88Ur17z37rRvcXYYKBqE5q9yAYuP8hk",
  "key11": "5KEtUAAVt5NzfkdGdZu1N8ryseBRTEV7dPeyhCZVDwxLr9S5QBdp8rciyah7t6n1rdoJKkbb72hhX9mvSNZK6cwj",
  "key12": "21754qq835GmqCVvNPkgv27r9kJC6cSniyHkJw2NgMJyTYC1yAY4MDcMjHcmpQmvPsFi7zkvYkqFZsJHdvrAc1gv",
  "key13": "2GJPvagXG9MxktowSsUUjEyYppdr2VDfSAhdzHjyGZXrS6y9TBEB4ucr8hnK38cspksvXYvUjg3BhaFhZJg61yej",
  "key14": "3cxdDCzKK1qouVeBgbppPppTwC12bgjfHUEcH8tSPM7wPnRiT7HwKAwDJZtJtRFnbSGxkPbWXRvz3qnoBAonPWGs",
  "key15": "4ENjNKxrcjZJzdeQHxngh5FtxtQFY3o5cb5uRsdu72jw59Bh6SN1kfgZ98NGcNqywMMrvc5Ds6JrBdodWmLMNMhk",
  "key16": "4WqGJt6D16K6UZ7SjVosWGL39H8KdDjVcVGxG7KKdi2LLGP29PDNymaL9EPszPja1yxe68WFMYn8QnTVeJW5fjT2",
  "key17": "5hazNoSiJidfbMBLhL1VFcLTCuAfHwbQF7ab9SUZE51MZ6zfDgBcojXeg7uzfxvV3edGonY9s6QHB1ujW5Y7JW3z",
  "key18": "SMF3zw7BZh8dqqmPK2e1sghPy3z6nqMepFWTqQfTmAU4UWgFoFhAkJiz5m6REmZzMPXs4EQtnZNbMqiPuwdpViZ",
  "key19": "vPfbV11rBeKaqLmJRU5aNMjPfJDvhkEt9GQkJ1FmbM6xJAKC7ZHgPRUSSf7t3uYqwPW45So9iBiZhLM9Nx3k9ye",
  "key20": "5YVHuUwURMoMF4mi2vN6TDTQcQ16EKTrYKNxpy53j3bn1k1SWWPe4d7u1hUehfvZrpPe2o6vJ5boJgGWQk5URGEu",
  "key21": "5VnHYUPvP6wSnct8JzJoDpyeiU3rdTjcdcqaQaDWxd5B5Zm6TDLPTKTQ2VajJLQTD9f6cczXff1GvS2ZpXMbMxvh",
  "key22": "5SnaytsKxSCmM4vUUb1CZVkfWWkJQEp5CpoEZVQD25knFa8wHGv1PbcVD9TtfdAfK7gRdipKS6yjE56e4LqbyjJa",
  "key23": "22gGzRWN7SUm6Divp3oww5gPDfEX2A5eEvRkhUX2SMSbG58uQyY1maQeZ8PfJza32xbb1uN5JZRHAnHpFaVTeeqJ",
  "key24": "4EFMiFpkBXt3DeLvKxGLZhEAcjUyztApTNfhCku2d31hWQP6xMjKzZc9VRY3a2iyiDpCiqiJJ22UfDdDkMACpBpM",
  "key25": "2iMYr9nHfzYjvzGAeguJzPPx74ntN6CpoXmL8edH1tPVifXAFswbFEHo9EzSJhsu4UaKyWSxAXv87tYiFcjGmr5o",
  "key26": "s7hT8ojjMdEQ7s8kxAqYMANmLYHQnuFbMeSjKQiWLUuDGf7cXu4ihFTrzU7mBo3wp1qxjXgjefLSWHtQApQBXSX",
  "key27": "4AU1tagtPwwRQvAFwPMKbWzY8n11KaXMjbEdkFqrfHc3okVjpVhnCCdJk3yiGNjtb4crvPNjT43H6GLmnEwVxnej",
  "key28": "fcMPS2RTMozEPDJHroouVsyTWwF7cL4buhWzcHMrNVGLYXj3P9iuG9wPr5tmzDhGqNJs5YTDbRyqzBXjsDAAUmx",
  "key29": "5ZXxjceFFxrs4FYRdBKUjikypKWQfn4DVchfGYsoCZTTRt7eMMxBKitWh5VfvNs77zZvoGT5E4uCvjtVBoQJt7zv",
  "key30": "4MX7oMTj4APx1enhzkF4TdtxUYCdhLVBZLq6EwfcwSrQQgAk4g4CX35wwPZeYrXZ1jLJKg5msyzBfPBcvAR4bvLg",
  "key31": "2Nx7GFTifhivkM3pjfBV6tW2adbTkPAcPZjFWtuSpyRCK4rX1YqGnVPuXwrgfezLFMB3awozRSQBvzqgHcMicZKb",
  "key32": "22xuTV1YGWBrQqEGVvW6nqQaG9DCf6JCbdYFKZ2wHd9inKSfMJ9icesDMLsvcrMjGzaDNs8kbKTU8sgHfguRV5hy",
  "key33": "5RwR6nRzZrc1DRF6UapZR3jQSMcCW54Tb7RiafNcJBeZctB6w7AsQQTQk3GD2x13GE7Q6L3urwFcAMoY1YqYK9Z2",
  "key34": "41jAoiERVfUxWfJ1tY3vBVxfGuxVx8eAMQQ4FYstBkpYUMmcbJweLkvrr8ahVQywBtRDiF6Kbq74wB3HTBXrUM7N",
  "key35": "Yk3k3Do3xWqi7QFBi44Dq9WLVW2svvuCe2rzfx1p5t2nrS4YsR8RaFo7nNZNB7X5RULVK3f2DLRVgYg1qakhvPC",
  "key36": "3EC9Lwq15bnRZPvFdMemFothGGwkUrNCR7zy1nAt8aydpBs45queUG7DGkfM8oSDBTXjhCGac4weLAx835q2TrMD",
  "key37": "4HtGYf62njEve2HnTUHwCuvGrmZ29WHbaJ2isQyeGs4vfKNBGLN1Hu9snW6k6h5buWAoge4KeaLMo7kFp4jrDVt8",
  "key38": "EyDN8jAtYNMyBSY34D2VMEG5RRz3A4YzhUcm9WTa95x8JWb3V7Qn3SjKczRKXDpMX58Pr2gg1rgChhTDHuUrmAi",
  "key39": "4PY5uSigztec2B3CMJCiLbwMBdZCFW9ndZWrP7DT1eKSgcnRx7ZNMLfg5bFLBqmDxmk1g5Ucj3v33k9ce3rJAoQ2",
  "key40": "2xHoLaNdiKecyfJVvyYEuAGpuoU2tytraQ5zjCbp5eodniD8VXFugE6HfWXuEWZksvFd76FB8RTMZUbMa4JyA8nh",
  "key41": "ib4bZCqygxEZ9RFEjxbJjyygWdjkmttqaZoBYQAE15QEvZgLJqYFFPgJkxjs6a2o83kLfkg5udqF97aBwZeJrR7",
  "key42": "T4A1Kf3M3GLjRThisinpZtjJi8P3kbfdoRVx4pt1zgHrvHV6oPAGjWJtRzdM5dVDxpv2iBLAzu9q9odVgtfXuZV",
  "key43": "y53K5egZntvCRBD5GhAGoTQP8seTmovodFRyNmYzRd4133yQdpokxPho7yUdhzvvSHaRz8X9R5vG59twfifLKsK",
  "key44": "4ECSCxvPYY4q5tN6xjxQvPUn1AVpZCXhpy6VnzkTCaq3GpV1SxBLYAnjqMiLBDgpoDrRSJzTsb8y6jgRKGBcwZ1S",
  "key45": "4PDQScmGssJtFbDfZfiJeMC7YzLyLUfrdQPB2UWvEjTbCARhgANhSCcY46a5RUVR5Ef4z9rUXjetBeHCB2Xrjoqg"
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
