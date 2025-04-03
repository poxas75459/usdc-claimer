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
    "2RSFu4cBVxYbL9HBw2DRmkBVfZiYbS5jgodz4edknuJ6qZjWucHxYmXajAgcRCoSinv2HUkrj5zQcBPbPn1PiGXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j6DuX1LATUdsnKJjsXzmy2URE149pPGqZ84SMCXuf9UjuZfr11U2S5PvS6kEmVzgru8MzEjivBE4oGxmqhtNVFJ",
  "key1": "5Hgb7yDFveRf8ymAYN8v2dw4eyvXq8Sd45e8QpxYh9mtX5F3LKJfvPaxQzqCREXWZtVnhxFnc2aTB9iZjcULb6Ez",
  "key2": "TJp7MdiNCBUQNox5K6rfWrAS8PwU7TropBzUNA3M6WfCwVp1oiva4VvpJ4fWwngzUhLSGKaEBoQiff8dUFeDpoc",
  "key3": "5ikHva3puR5SRRM3GwsaRPpWqSYHzVnh264Gr78oH1ac2yB6KLQLXBMUsqP9BQgmvwRGTDzh7eAa5wHm7g3md9Cc",
  "key4": "4F7JGPWrvS69HAratXtqk7eNjSXaQLc6YfZLc2GhmrAmGz2WwGijpjA7s7G5UXGjVrWvzHZHUdU5gg9upkrWwd9k",
  "key5": "5deqbvCyY7vhRuCugVTgCpgMvusFu7uPAmEp9nRybYvNT6YpS8wnvCLQ1uwnqy7m3HaJRUsktdCqhAQksYzvuBCa",
  "key6": "4ukfP1P4wMvu5URFy9KJ47N7mwVvAvD2zbp1ekpJTgd4dBT9UR2KLe7L6eq8HZ3g7ALG6ZMfff9gdR46aeX2DxA8",
  "key7": "B4BhVA9gHLF8aEY5whNLto1xvi6WUxVeUaszAWLem4DQboQBKnM5CWyTMtHKnQHWLK82Nwqf39jTqW8pSB8pi8J",
  "key8": "ay94hKZVtuahuMK94HbiC4m5RMcydjjYXAmr1au9xGHQNBNnUnMcZDjDHAbBxTVGXevXZ8EMbFGwXT82buY1kfo",
  "key9": "55sMPJLbA871R4yiWtR898Kpy3x9PokuDeFnMzLhTpEAJfBy6QbfHTSU7HaQfp1zmjzViS3aUGcfn5DBvh71zw5Y",
  "key10": "5ZTEKxvQ5MBvSswtRMRDjfwutiekjLgKr4yZwtioShkFRuqddaqaWZsmLeWCy8ef84cRxbRgY6wgLaZByMkBAS9r",
  "key11": "5PGENXfuGNP5RzEY3od37mzCUwLgnbneWbDbS6hAdUJ1fCPcnweMNGu1UmcFU7hd1oXwg4jtagNjwVwXG1ghCA7d",
  "key12": "2Z3aTXbzJDXqdgTePfV11Lb5N2u8Pw15dMFiCqnzWji3vpdqNP4KReXBS1EREnabiZKwE4aza7dBx7kM6WmBX6CE",
  "key13": "48huqeRJfgbZyF7PVe2dxHD7tHDXRH9VGXJG8ZzpvDXrPYpBiB512BWhDZGSgG6uYVYct9BiKms1dWuYrRWcwuxo",
  "key14": "4KsFPoqSzEQb8gKiGKzty7UcUW6xfkWWuirjUEr1vYGrTb2vARUsjZP3caqdg5BVCG7hfFT4C4VqLAfQQ9gLdZdM",
  "key15": "Kc7SDgz7C7wy4fwBFKPxLq216BNWzjvobsdtT87zVtM7Cndc7mH4XiyMkzH1Hf3DZmUcZZQR4cSP37jX3JJm3my",
  "key16": "5zd4AdsoWimKC5DT5PDwyqt9St9BuQEctnRFwSQSngeZKkxpcdJrfNnAVvwGEos6zyxNrY1bRbdKPK3KwK7hxvcT",
  "key17": "4ZgodZQzzWR7tevs8A2ajoSMJTxSmnaHQCbhi66x1PZFmgncrD6jeJEhddtgTB7p8nBBoFbusJvHmQCZG3HMxMCb",
  "key18": "3FTgHLpYNRDgWD8ooo7sFjWc3MzktqMD7aQp2p8wvb4QoeJzziXvqrSGsjAoTXeuAQQNN8hs1P1PNMXRbH8CDwWe",
  "key19": "38sfzpqUNHAvubh6h43mj2RcakDxVHfS8m8vyC728f6WHALwFsEZHr1ENF1HKQiqKNPXmxzSL7XLphABWM58Z37N",
  "key20": "2UnXRvnuD2pJfiT31XXVJKuet4ebR5UMhQD9yhd36zxz8Gxo6MxzhXSsZPm8KWm3Hjv817Wn2aoJS8UGjGSp8VEp",
  "key21": "4N7kX7tyx5SqAEgPA5bPJeyQp6kyyt3jjxDC2MUsz8YUmzWEMXjEpviDojNVUSmP5He4mdJeybyzvvYAAwKGn6hz",
  "key22": "43gzeqWepjLuiAL7oUvLmREJoKKD452B2MwzTwrm6fFJMj3tKCr2HbUmTtWWKkJXPwqnjHgy7EskXUZBdvKF6yHr",
  "key23": "2gWH79dWL9iDDak73zm5WFxBHBza1xKeWVD6WabqEf9bHrdfdchfUsSkxJznnFW8N6br4SA7qH4pQ9RKbsHKrRk8",
  "key24": "BUvbVbXwrUTsGxKyZnKFGRLLF1UJ4VQ66DrnNRK7yWt9ju3NZHoszJJAgmqPmQ25CD6ws9DbzE8pgcuBGfv9QPZ",
  "key25": "5i56RjUTVX35xBNKRw5pxgfEWgqrnmPn3KQVhsXG5jLQuhNE66HKcD6jwRMSuaX96pN5ezb4eUraFKfefRhc2npQ",
  "key26": "m7yjLYg7YZwjzaEEGZTwPbpVEjn42BvL7XyrLKspwP8RFoQZBcc5VAsVQZVJ5u2Ge89XxUvg6EopHFPsqvCAAyE",
  "key27": "4nj3KwwZAg3eNLqEL7ViP697hP4EvccJMxhaAfzT8oD2HexPPfEUtjKUz2upjNDRzz14rvJnVy2iHUte9K3otyX6",
  "key28": "4sH7tETB7TAWBPusL9VVGdxqPEkxoBVhGzv5HoDovV6btXnfN8UKiqKw28WfyE2pi5ePKYzhCdDMVHqiTMy56FMC",
  "key29": "3EcmNZjgfx8ncqFDVpp1TsYHvxB6irzWej6oKcfnY5PLGFfP3hohRg1srBjDiS4ynToiNEW2RugLKrRbe8z988w6",
  "key30": "4WCNPucCPpGQgnaf5B83AdWNR2yxohZX69gwXa79oCnDnkmXxZN4zBJAkDetZ37iwzSvW2iCyFHQP1F7VTo1NNei",
  "key31": "myVyK7aGzUkpRtxQmiyKYxgoVQUGGbTyKQZzmQsKuqEyB8fsWkZE9GK9c6PT99Puu3uidyLvaj58bbCiNBzB2Hn",
  "key32": "smEMPm81yehZT5pxrRH7YDdSWoo1EDCSZtAH1Fu8Qj8RC7apUcmWK6qzZrUpitYYfAreXEb45o3vZuujXNKDbYP",
  "key33": "4xtXmkzUZXXci5iCj3MoNqywGGNLjcv1HaUk3zX3AxCGJzKoVzM77pnvWhviWNs4AD5c4CDjxXsx6hF3WBqmSiTE",
  "key34": "Bri9peY6DudDevp2W5reqzChTRcTYV2WxiZNPcJ3xMxPkrd3BDXXVRtRhgrDQrcRNp25NL17XStdmRsHMUG8o42",
  "key35": "5s5XLk6j4jwoHWnbAcaChZDxJaKXAzJj3cDHwxzCf1XvuzjAcnjq8hzEiwputAW8ihrCdKP7YHsxMCTxuFaRJrwc",
  "key36": "44gwJvq4yM1QHdwC6W47Cmm81LJLQG3LRfLufdxj6HRtbUzsULsrGPGYSnBxc67obnwh9ec9u1vKHZWvCUcZK3PK",
  "key37": "3G38YJRUnS7y2SWBmMGReRTDYEBgboC9goJAbXh5SWgwFfnTCm13rxxFVr2UJ8KH5YAu9D9usr3jfhFqpiGDUZJF",
  "key38": "61Q5cH8bzh9W59qsLYQtKsuTkBNgwhpC3BtqbhLRtsxPh1x26KAG7VjJ9bXaWTrMnTCurgnFfo2q6QgTFYKqa8FM",
  "key39": "3fLKKV7hzpXSYVM3hMZhFwQveyxXqf3ZkfA6fZj16fn7QdZTQPYkEqMUMxDjdnEUEqkUcNHDuW3QjivKzgqN8Lmc",
  "key40": "38vrRgX8EBUPAFBEHYM9d8brc7a12XMHoYzSZdhedkohaQQJrhKirYdezd1zPgg9YX5SzzxHKtANL2qCqaQz4cZA",
  "key41": "44eW7nT7t7C2TkTfujGmGamusbnjp8Uyu7y521sjFHReVzjM3MweQCoMLWhcGSqHaiRdGfZ7tYxjNZhHNncqCRzr",
  "key42": "2q8C4rkahLQAtAwQwVv6NB3TQPz49VFWfob2c8yL3n27jGq3EB4dCRKjhfLrDsxrJrLSPvGNAw4xePhCfzzp2v3z",
  "key43": "4Wz1Z6a9LtqU7SMWhM4krJnWHcJEreKLQC2h13CwQKcx2tum5v54DPQFLXJ9GAAb9xAijM26F1GjawWws9PXJgJU"
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
