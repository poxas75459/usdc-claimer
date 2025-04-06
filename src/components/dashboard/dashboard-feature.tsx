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
    "5DAJ8F7EoMGJNW5TpHT4QekSU1rEH4UYkSrAVN7fFMpoYxWkqKms4xN9irKG2YoaL7wc8bqXGVnyqmwh44kbXZyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ScpC1e1kzTwsAe5kkMzatuCsBYXq7NfpjWWWMZzubvdwxnHWysLiUvDM28ZY9F5jiSRU9y1jzUgbXEY4Kdjex6K",
  "key1": "64QXTfjyxg8sf1ucVK1TQtPDaqiXmwPajCMWzb9FNwu8XKPeBvVjnyXgDD15EVSFhX6faehT27Ui1Wc2sbWWqTx",
  "key2": "32ABtvgcQKehBojmRKaXrRz934RPggFuAXv4YHQ8SHZDVXbwYw5VB99CR7VC3P9zTGswPx7bFS5ZbGD2CXJSeXfo",
  "key3": "25AZ6u1QA3S91REtKw9dT9XsawMfwro3HCCNptHXLMPS6DQg7Bp4fvfM2JjQDt7H8MovpGYJWTHw7QTK3zRzbqhw",
  "key4": "2ayhiUFkfRtAeGQxDmY7PR9quxxsRRVTxsYc3Z6oZUaDQRL6fe5cPoGySiT5RdXuuaRuT48AstkaVYdwDnav2Kdr",
  "key5": "4YPZraWUL25rzhsq2TyumewbN2UEuTtequDk43xhp6Zyv96o4jNSEhH4Lg5s2BMzMnWAQQ2d3NW8DA6feYjZLbKc",
  "key6": "5pgnULAJQ25M5fTJ5iCHTkpZvGjM5FDxLr9E84utJe14T6nmQS7hbGQD8DUA5vEtU15mYzuDx9X71UB41WJ1eQNb",
  "key7": "22wteTaFEibHh8VaVgZzrUguEyD5mhCsRPUiQwDDAzZZVrEucMKcuEqcighKAhxcEAjhS112H95GjRi3Rkhj3FnE",
  "key8": "2JAoPm39R4vbGiayXRUnoGKfmCMZHrs1B2LZHtajjJ8vpr4bnm3sRUhpDTmCUfnZHFvDDGRQ12ApD3iEvsrbGZx4",
  "key9": "2TV3cYZYLjTDzCHuXgaYKZmgXXXysSHmpwPwhrcv6Cv9uPre5pnhVLyhmb9QmejYPVCXCAK3dnRgmU9yidjchwXr",
  "key10": "24PjZHQoCuRWUVMPWHsgaWLn1TXPuGbR8UK3hiuwCtE1MPELpso9AtWtNfh11kViB3LZRRLiCsuQHFE4vUE5UXkJ",
  "key11": "c3xjdf3UVd435hYwZvXAE1VLVtPb3VA9rkxceCdJeTqfNSEiYbkrg7H7yriCdzsSJjxUcrE1DAKWN6huZkkwxML",
  "key12": "3C3puJUsW2wuo1y195UDvc6y59vBtppSn3RpfmTpQ3ktxLmdsGWPhnjNqLMDniAjtMU5yea1gd8npza6WAygEkes",
  "key13": "4VHC2oxPvv5SLnMc7omKBXch9Yg67F4v6noswQmHgUZuzYjdc8VcgVDkvcEw299s2Kvd8nMC2dHTra6Fp6wVyiEQ",
  "key14": "2yiH77jXSQEGWXxNv89KVFPYqK1Z8rV4mQQmpbZ5yetPhy4Y5H8Bs3UHcJQg5KG7atHo4scM3kmUYvLKVCfCsf4",
  "key15": "4ugdix15WcMrh4rVi3yJrpAJPFwdeXbGJDvJ8JTZNNj9EHbZfpmRQPoUqX77hSfmJ1uReqw8bGPfYVkRtW1SYuuu",
  "key16": "44XpSjKuaS8xJ4iAfZy3bq7U7aMEvKYZWX8tzpE2yTA2Dzsz85EHUjfqUmA4tX93vS7XSaswbvQ4DF9Gw84jGdR9",
  "key17": "5NjrnrMLF2yBb4inJ1Xxz8fiZt1JuN4d9W6VSjTa8mFFjW5tXmXjuRfDRcMeAHp719maC75FtqwBBkpevk4i981Q",
  "key18": "5Lg8fxfhzmkLQhsNS8N1vZAzfZSYBTNhaBVdJ2RpQV911c93dssGyCJXneUPxw1NcP3E1y5ZmyDgrqYWwcxzz2v4",
  "key19": "5FUZAdqJcAdxyRCnZPLrgogpzUztkwAJirDJESQbMf2fZFaG93Cf7y7pkDoaBZxL5eurxjF34yC52DEgmMMA2EZX",
  "key20": "5tvnfyHkiWAc3ikA3k9mncZ5q1kcdGSWgYiXqW2bhuCJUmkre64JnkG7MfYnYMimc2N9rsnS6PNXTbqny25EAevF",
  "key21": "549pfAbjGLpVepTQsjhgi1upKUyjx7qWoBLv1Mc3rQRi8Qsu3RGYYqMVDzdDFzdYu9s2NN72yX9SQmgNtnxDD3MY",
  "key22": "2QqBLg36Nn6jnvmenRXNpbetZD5nBbdzYE6YgqNe8ZpgoYumUV9kaDjoFUkf5AUkemXsoAwGznuwkqHDQLzCwcXr",
  "key23": "4NNYrwJ3jEvqUbC4TYGbinYYBexnpwfKe2FZY9Np5PdqrK6AHZKjpuHtx9JJqcvp2SK4SKn6RwQFyTRp39VXqxwS",
  "key24": "iasxxizJRQuHkmez4SyoAaGDZCMVEFjKWsH4L4oe2U27jHc8wtwGqZmwxzkK7v4Nas9Kfd2sz121UwrEYetViD8",
  "key25": "3mRZ2krMggF5RPTfEGVDNHChqB2ppFTVSmWsEm7cwHAPPGyo3Y75KcRgrYwRpzDB5jfubyT7QSCYwa9SAiYqukop",
  "key26": "25FuabanHTb6WppPtevQQQjxNVCVU8BZus7WVJYa2RwKWAmUXKaYDaGUpDoo1u55KNqgKU3bKF1QQ6vkoEB81JdH",
  "key27": "2UhBWT3wrzffQCCqei1hYEDwAcohWytmfQefZocFoDq3SQde365rQ8mrv2B72NU3TSsYnGoYdBWP9No3Ro2nm6St",
  "key28": "2Yr8k4NNdVvJubNgchC4WMRUrxrdF39JUJR1yw8PsSvGENq7z8o8miCvH23qH5CcZ8ncWHP9j38Tgjw3AEnj2esN",
  "key29": "4rRH5EStMPNZpsokecEU6pGaENKFuPZfdiwz56ZPQJsmfyXhbARPNrJxzT3vd9ecARcUTkvMev44J9NRMspjMiPP",
  "key30": "312FsyaKzxsdPLrD881zcMsy1G2BggHBcna2yJh9zFAcBPqMsSpxUZqbWcE1iEX2Z8RrHVkBUipbCaSfM2YpoU8n",
  "key31": "jY5ovjpMi1TzEAVSpYQqKkfm5xPtDG7BBidkJikKcT8e7ZPzSbkjeBskLjyjk6qXx5NNfrAibcc2uBVJCEMxU1p",
  "key32": "3rPDmT6Be4gHgQPPQmstpcb3r8uoM55CWGQmPDXn4ocHS9wTDWaDxjLoAdWtYwj2R1esCpve1hG8Quj8CWShnfLk",
  "key33": "4TrCnaCSn22pm4A2aUzwX8SJ419TW2KKeykvC53oCk55oXdV63ojmuTacRSvCTM1wVcPLBdZK3UfwL7NcHmhqehh",
  "key34": "BgDWzmqkMbkhApvBEeTGP1zJc9w61LcvsTGbfm8H4tKk7w6WWrygFqP6gKYBnb2DoDRoGrKka71WMYYkkQWu7Yw",
  "key35": "65JLeMMSTtpAXTevaHcH4xfp7D5Qa512X94kvq1eMqzvkDbvRB5T8ngYRosNGSMXqwsyRjW799ENe8hMUQgWpdQW",
  "key36": "5UvGr3QscCLtJsPSn5ZEyTRADnzLJpMkTPfhF9jGENy1HX1GDviJZMTMemgXz3Q3CD3YMR4ytqsq5HDModgUBzMZ",
  "key37": "5qRHw1pgSdxrgqhP6bgkosT2zAbduc8YbcGRoDFgztVpexaM6eooSjfpamhbL4MsMRixK81Soa9Y4QENExrDwRD2",
  "key38": "7CyQdRHAtqjLW7RAFUuAHpJzHfSkQPKqtUoLtehgMRNZGEWzd61f7BuyqqgwchdkEvoSdfmaHeJKvKTF5jVodA2",
  "key39": "4KRQMrqZTz5XAmXoFvA1MBfHWGkFJVhUd9vcFKKpSatdt4fFEzbsfhnEYNFKqEXcmGApFLXHLqDAhZW45CiFy5Fw",
  "key40": "2aSSGMQXVujGBZNWoZRRaiYg1adTHKGfqrm6hQbc1a8SuHzCF1RWWZ9oov2mABp2BygJaCjm45BZ1rHg35cW4D7b",
  "key41": "5WwPcxngY3FDr7GhMoyjyx5XJVaKJSD31GHfxR38FGv1Tf9faC3hmqM328Et28GnsMUP613ovZd6jkcN1KXrG8HS",
  "key42": "62Pqh6x52Y8g67iPhXqkZcq81ehrvzYG1g86FJnxTUFEogA3rahoCLKTD9S1VSKJ7Ax9iLcciAt3mHyrgJorzswi",
  "key43": "K7aggC3c1XvPbMfGg5vf9Uk66Y9g6gUkTT2pdX46gJ9Gf6sJDT8Zr6Bm8ptFh9gFCbY37uoyCYiF83yu2NQD4rk",
  "key44": "4KNyVb37erxar8JHbbLfLgGnpuZWEpp41NehujADNNv1hxbpC1YmaaJjDzdvPzGNPGKYFhDvbdLM8LDSkgJhnmWT",
  "key45": "uFg9uJbtvPHr8GHtaxnzEdkwDmHE8eRp7PCfTVbLBxUpdiYdSWFCh3r4ZuAmrUxYVdAKfrSY4TZ7h79V4UYzwmL",
  "key46": "4N8cQPpTjr5PEmJs8Rut5hcNUVvvSyeFB2xDNkvDtnbQfxyaZchvL3PMTnXwpNMTJYigrG6rYSbDy4Zi4yov8Cay"
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
