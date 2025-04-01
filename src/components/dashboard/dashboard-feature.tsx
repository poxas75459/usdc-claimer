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
    "24khawTXrJNG7TvebX9i3VAcwAZZakSHenNfFoNEBH1TfJ2kgsUa54LNckZh9318FK1YsjhZRiQj8Bs6rNLkn4ia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Pb8rNEz3DAgh8qt8TPvtRsNhqcAqUQZKhJGRvHRaTQJcJc6bGgi3wZ7wL6bvjeiTqj1BGLhFdetBq1qq1np5Qj",
  "key1": "43M2gdAvGJZ52zeEWbDGjPqLX6hKQxhzm4J4mCpKWcg5eQ64cxCgwDZMxt5AkuUaHcDmHJYEWk141cTuJ3MMwk94",
  "key2": "LWmJ2RU9myzekNUmPGLyowYdVQy7b888e24x4DbFAm5ZMN3fB8pQsFPCdSCEmhVQYAry34f4iVAhzVntv1WhxuG",
  "key3": "3XTu4scqgoNcNaC5mUy9XkhKdxaRmy3FY4MdYijw23iXTp4jwT8wrDSRfQTVFtiGBtrdFky3wWjfvEajbwjqVhJ7",
  "key4": "3gE3sSr9ZnBLv3MTdNnqa9VsMyjAw9iFDt7GP39ZNdhsx8gE3AyxYaLuRupUkYAo8JQARgK7DPF7AwF7VKtqUP1g",
  "key5": "5gcGKHjEdtAAtFUWEMacwg7ZVGM6yH23xNEs48oqfhqNyks8KyA7x2gMQbAyTaZTuq5HBgx8WWkVeCZpH5zPqZsB",
  "key6": "4rVTKCu2AUgJ5p41cc1HHnQkDAbLmgdJZpQSbbXuZgULbireqXxBVQG8Y2xyudDhDqfyaHiq6ttLRrd7rZaCcx5y",
  "key7": "5rSMv9Sn5hNH6dLgJbZ1TZX5jWnqj6pcGUnkiNqWt1T6J4LrDBLndYpKoLodkCctUnRoxJ67FZaXrFnMuJwwMbX3",
  "key8": "5BYemepUvQvDzJoGBraSXvRuDyLtU64jE8enYDsw8oCBHUzy65UzH2Pb9sdf5bdgixarwR4NAL6yWyG4adzL6BTH",
  "key9": "5GcAc5JtpEwojrfBikqrw6gfJ8PZJqbWS32Gz5NB4FvAxJqqp2MPJr4cnbY6TacP8J5dRauhpo9rgfhytauQduHU",
  "key10": "2n7pLc3498bC5aZHbZPbZb8TPNnr3nvFd4x6o6HddbzV96XSmTpdxeZwec9FyQt57RMazaZ7k8jVSWfwXY1Df4AU",
  "key11": "4FSELvqcuZo8jqfUUdHxkr7vBa6qfTrcN3XBLoNUtFyz4kG7zTaAUDVfpDjoARodedxpJpniAHnZWdF8bwWabdsC",
  "key12": "3TiQuCR1114G7XoBsGyBMYDQpcGrhTB5MqdArwHfsFRcg3AQUesMNhTJFa8Hn2Pmntd2KQb9D1fv6eVs3L2weBnx",
  "key13": "52BMb4TAK3h7mbto3mAc1wSJodDAyZ98kV2LrgF87jZjNM1PeayC2vWnyLjpnRuueDkPAJpkz4cXLBuRak4DbWuq",
  "key14": "46RQhRpoBE9GUMts1HJZS9kU4wXZUYsmXUQYZAgq1P5VWB3rpgDUdPQwvNFuusx5xzMrWbEjFXQNKzGyTzK8hkJW",
  "key15": "3gUH2VuQjeB2qC8rGcjrCqe7S7JQrfBGmSn5tKQquWkZfYBuW5dMcnstnZHPuX1ZvHNACZ5GHdRainem5WFUwcFo",
  "key16": "5ASMv7ATpYrREYQQfTS8676yobBq1Xz6cpw94zWztEkqPHTp7z9YqwXRp3koYEGCLcfi9x9pTkvD7sQGKfgxcmvG",
  "key17": "3qsUJ41j98vXZauDKPF1HDvTYh8QpGkRfDgXU9RS5jyvfUJoSCnkfr41TgjKz4WMqNkHHqJV8GGCKB5Vb6vucDBP",
  "key18": "Zu8egea6TNFyaEdLxdHa4tDVCfrpeYnwpH7o4ag6iyJDDJXhPqWiLkemzSUhFigvo3t3m5MLo4g1EzRvvMDZKAq",
  "key19": "3FWAvVu4RPmAkYxMwCUS3vBkvquQ2cJf13fQP1a5WY3DBWfhw1CptXC6xNEPTwuaVeyxSQzTk4iuFe4UNo6XvzFY",
  "key20": "5A74Qd9feLkJbERw5EUs2ZXhs1jwUG4WC4Z947cRRf9tjqW2RU3ViTzmHvJpS4JLgYduTfg9VbwH8CvMbVAXrihK",
  "key21": "65MFusdR4HEhfm2mLZFqtiwAf86KKAdaYN8etuVpQP4emuEYm6wxnfAJcPwEELhXVA1XSFkk9gWWrjbascj2GnAE",
  "key22": "2hZD8B2ohRSysxJnbBuB5ipYVGm3Mvm1gM8cPJSiPgJf9u34WtFj8tqZNxZJzULbGBHLbW4oCs1kr3WWtn6xUATw",
  "key23": "5GKTks6ZZtnwGXaNAGGXYrnm9AQKHxD5xYheP45yvfgK4NQXG1CppQR55o5ybi9s2LYhx6T49apycUe1MGNU8i1M",
  "key24": "54PjcijnJtmgvZxfFocZbrVBtT1SYQHAYsqq6JrkqyvCrET3t4EjtfgtFPRfMhhpVdBTLJVRGj863JkCX1S8aT68",
  "key25": "3Ztc9VotzWhmnrkcR8XxEtcytn9Wt8Pc135iHjVUqmZDEfZhgpZ3YTtg36Ve6X5fDs5E959ztuNnDmyJzGPJQ24w",
  "key26": "2U1oThLpcWhJJ9Wq9vT3YfZ1P4kYZtE42EoCnMZ5szCUXURrxwAZ3gS8MCokcPcbDNgiwyTt8j55y2cm2HYNbexz",
  "key27": "2xe9kCwKK4vDNY6twM49LMfSXzQtp9oB9o3vusUEDt42fugmmHFbgWFiNxYkgM8AKRybUukzwj7Jn3mwUhcDgaT2",
  "key28": "5BLRJG1N6vHX8759LqvbZbqkrafYNTkViz2QKcZ7mbtNX5Ho7tL4R1cXeJCX135gKAKb5ZE1SHr8R7yb4Ewj4ta",
  "key29": "RqsxM9EtvNbdAoqCTx7R9QK8tT8YkzcMM6FMFNVgDDM5d1mJ8ZSqRvXky5J9dJy8X4KQk7rLqvmaK4pbocD7eU6",
  "key30": "58VAs57ZE8f4GAtxaB1rP5Yi45k1rjykWvUgkMxeWdN5q9AJeBf6Cwnb9HadSxQ78UmJukRKTK9NSTt2nfUFEFLX",
  "key31": "37WQbMP84oXG7U45Sacq8ScTC7QfxKjqMn2ASojBSuBMKuygyZV5ih1LgkUZ7uvvoW5XXKNFRPRocCUXU8bLN8Ry",
  "key32": "yPmskyNjbqA2nzgFQ8znKZQmtQWT4kG4ebMZ2Zc4Fr1wvBrVuynwSKmmqpdNVxk5kMKe858nMMMcFXA3BPo7x29",
  "key33": "3CLUfJQbPgKEbyEvKsJ8ttYs2DhWE8oDbsRoK5YKkva7TQUyr4eu9ffby6EpAarZgDJpXy3MjFYnEkU2TmEH2Pcw"
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
