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
    "66qCvo3MzT69146uK37mAQCqRc1LaM83WXWtTUwupG59N9j3iqwxLeY367PnuWEfRraey7c9MDXPR7LS2JZX6d45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZYk52zV6XXKgqasxREgkAeWSJAc4YgZBAAT1yydrAfYyW9fXS7Lbngbjd369rgogxye7VCccuhgUyuW2qP9Cu6B",
  "key1": "5q5xjZ34o6avzXM7k4FjvLxfhy8DQCDVZPTqfqixrcWczKskKtYpJQiSFu3TTsNj94c6K6MQ62QTAVKbiLg7ScGd",
  "key2": "24KeNbrMoVNd5XzQEuWHBq9bHGui5LUwSjvMxyFQ1s1yMUUCWFRrnyTpxAhM9P3M6RNR2bu6gv8nFPfubSWAVYVr",
  "key3": "63raT5BXKdFsPY8P6N7FSwfcqe15YYqxrfyX8ueCq1dh596sZs39qJvq1TSvQSNN35s5HWhiqhFXMTJ31bnzPdrW",
  "key4": "XPMqnNCAKnAbzh5QhvSWqyH4JTjyZ91yUxy5UwNRJGCzMBnLZTksVCmjSBsfSZihVRqcMtgTW7rYwa3AcvkSFU6",
  "key5": "2QscRxBbv1w4dt7rNzoKnVaoAvu48oLSJ434QrZG22Xbq7ScyGYHNU7PCUAPyjcPda5s6LVFsTS3sMbiSRMYGogU",
  "key6": "46b19XqD8zuzn7Tt2HzrPQJTngx64bpu97yd7VrkjVaJzTyaorouVzj4aWHWbt1yLc9ZxAytsFi4ETcit5yE8WNe",
  "key7": "3L1yZeJDasKWxeSrFmp9iATeXvod2UH6q8JB2FQzYh1mdTyRdLrm3TdVpBUUyzdSsdZLZsgYcFbsr1QVamTDb5Th",
  "key8": "5yLz9NGQNgyBVLXc3jjw7norfhXzqbJdurKjw2UMF5pMSttaYkF8VqBv7hkGpKQKrKkerraQ9wjzKk2pz1kboWX4",
  "key9": "48saZ9CFQwJPUopF3gAbtuLtmMMnfeqNTRJELUUngUbqnEJWBfeEdLfszo7n6Qo2J3n8czJzL74un5btVZxG2Exp",
  "key10": "5oBwxsVmtWfwhfmVtZHaG6uYWjxmmKPuhqct3859h2Et5VneCEYMWESGJMoxsjLzXDxX6RiYNHPKe9ppeYKp5Lbc",
  "key11": "cf7Lmn2vyNyqzbboV6qWctkFNUfZRuJdPxiAfEofGZRWXNV4TMLJdZLTk4PrjdJMLgHyFGqZEdQddZbHBXPUt66",
  "key12": "2rvnqsDsTtMsKaN7pzLXjogV3jRrx7K5PEpvTr6GkPq6thxA8aMj8AVMkKP6Z6We8AegwnjWi3rJeiYHDu1ud2GR",
  "key13": "96Q9nvCXfyq8Dy7sELMEx3hQ2JjVqEt5TZw1dTsmhgCaoKxrHXbgKAmWUFsKyGoaWey1j1hNzo96xfSzXsyazw6",
  "key14": "5v6tU47Srhg19AUvPbtuzNrXVKf2B5tWZyXRKXk29711jGhtoX3JRh2HnZ2bfArDm7G8J93P3fxxqnC9bngRfcm7",
  "key15": "3MGg6XkW4iNst4MPXVn88b9nqTaMpwChDH31NTGcbCcVSZkLrDhyySYDwxziGwkzFZQyEAUh2nvw5v7zqkCMbfT6",
  "key16": "4fnpZuDQU32SiQxaEinoaLmvu7eZjHLnz4vsvpD9HEnP6A6CLF9KjEaGdRQjDjKSNpQDoMdJHofKX9qs8oz3hG3D",
  "key17": "2fGxgDmwijYEChepocEUaGvMxXJWcoYag394wnhyyug3hddk8pXuv2Q3wHWpaD7GgFUpUxMBS6wCz7nxAgqUFnhb",
  "key18": "2iJY545EkGd5TxkKhXEed5pzE4DKWwzLEwZQLe1FaXL2wfzo2QvuEyKPSkUD67FEvW1YAe3euL6gZhi9k1ETe5mr",
  "key19": "23x68jwavZnfXqY3mry1aKCkjF6Tp5ZTXQz5gomRznJTDnTqZUKzDhz9H2xrQJskJFrFFJZoGVEnipHp1GnHGwis",
  "key20": "3MSEtJTFWGSuogDxQFdAUrxZvQnAg3oG4BQ14iATF6mBT2DuyqH9yq9szwMGRHUFnFdX7wwPMLbyizw5jduiYhu4",
  "key21": "ao142Pmokbag3oj52iuxedWghEmpya3gnExBPKP4x1Bb9Uw9N5F92ywpWdmTaHo7KeQj3829cTC4X368zMi1VdE",
  "key22": "3N5TEn9EDdsp2totgyBrMS6f7w2warwxF4dk45RHyzbeEsBVg1ANHMs16TbmmdQo4FHHwzWYa6PWxXXPkF7okM7k",
  "key23": "1vxb7LQVFzySwBceGw9KATMgaQdtHwuLdpWiNjoGMivkF1YbgNpij3DcwkWtCH1sttzLsoWB5KT5vmWShQYULTt",
  "key24": "4eU1Z549AaSvb18GJ5W2Hgg5sM43N7VkcwSBVtm8ucfwN9i95GMY7JuT1XVuMCLGn73DPTdQDKSQVgsLZJ19oYSn",
  "key25": "384YVnaiP1hf9VAJ2ZMPrXFKskYS4AGqXQjviZKDTAkDZLCqCaeB6YJgy2mEecntXgHanHJixaarXqJrjsZqjmkm",
  "key26": "5kZAGv65ikL8YazUFqnf5KvzS6VHx44cu7o58ryQeHrBLHRfWQfJJFqgit7Hr2oPiMm28MRYsq8PUtQnjxqspNns",
  "key27": "3bcMDz6dm9hXLjBAM3KxpjD1dBHCKBwoAz17qCXkz6gLDdcvwgBuE8NYvoiFxkDiC9emKnQQTNqua5SDAsHLp4uR",
  "key28": "65nvA1h7ACYW7kLTVKACDaTohgUSgpkZRhLj8QdYbSjev9c4jYJNt9n4DzupWBx3nEuLA13BjsyF6TdDzCx4rXhG",
  "key29": "vLfiYAjAfLoPtwAEA7NY96ThTmXnMAxduv8KYAb1KgfVBs8DTgDkT6fCWQVxWoo36T3WsycTUcKkANhkTmAeyEY",
  "key30": "tEFWLgdDWuEyxa66Cr7NWP3m6FAuvkRzxaQ1bRe5fvsfBkdR35iTDyyH3nhtfDM8KotVqDot9aVMJZpx5Fe74HK",
  "key31": "4BG9pkeEH7auHTT8Ar5H4bw74ufieiLzZ8tJ8KVrrVGt9Uc8GUjAEYMX2omPvygT4YHGPCaxaW996nXK2v3ysnjA",
  "key32": "4FqJGgDrKyHzxaXJvmp6SZXqzQwPvdLRx6NhTWkPcfDnECwSZqZLt4s8W7AFNTcU1xaPF8chV93JYiCWTssLNVy2",
  "key33": "3TCc7f3mVGSp83FTLd5JHHc9ErjUkxTctrfn1aKiygH8B9YZypyGwZAXBfeGRTXpnu6vERWFW6nQJDXEabjXhPkJ",
  "key34": "2ZFAwEXvLoo8nEmyf3H7bomUiAXP92Mt7W2uNLP5Dwf26hphiuJGaZzXnuqHBDqehAhtoXPBsar9CiQM4XYAqqPn",
  "key35": "32bmVDF1Z3djJ6jME14L8DXAqp67uW7zvJr1Wt8zqzkTSKnffEJhq3p5ectJxGt9GFJ9beodePgnhtcpip9BhidN",
  "key36": "3FPDN27pRmeikkeQ88dCYAAqHKwbw8JYULmzvUo4bLA6dsx6nyF4TXWZ24oERyhMeApmzhVaTUZ3rtn6D4V6qtqT",
  "key37": "58BZe8biwJ1zPP7poJVxAoNeuPWuxkcuiKKAVEALe1dAoQuCCN2m4HN13aAyLLvUTWYzinJwxWrAnh8qT4pv9n18",
  "key38": "3SGxsvaHMY8y4Uf7VHz96Syd6eugfdGGFTCtEvdtgubiU6utV3SAE9S6WraiXDsaL2z6bgV4Wbfd7cunkB8TQFYx",
  "key39": "5WAeC2fJHDFWGkCxdzPYEe7HWa1qzVCdTXg8VLSCa8NDuYfV2wTjkQFruxnWgp4jRAjrbRV2jxR8cNP9hageeBhK",
  "key40": "2brp1sjLxuGmgfgfvHncahXv1cN6K5iQpHKUjnzjwKcePyPssNVEiW3ptNGMdWkCWC6oGcqXn1wpJtGmCPtfGnWV"
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
