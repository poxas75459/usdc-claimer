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
    "2WtW7HTNrcbHMKeRXLn9pVEegThYYxpCZ9fmF9kKSMj4RuhKousKWLfQ1kmcfJTGJsWHM25iDmC7GdwTn4zagVQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21anoNmCfcZyeqesYagFN6SqQPTphedKp6MAsMyjnQzHc53xp7jA7dUaeeeVhuencMsPBjoQ9CjDszcqSL2X4Wbg",
  "key1": "a8r9fCLPPL8Kr6DPQq37m2QxmLacw5BAHKcok1egumsEL18NgsEFsmoRB7yRovxuHxFXiJuqTeFyHJ8seSWCMf7",
  "key2": "4MZ773xRo4kgoGttZmj5YbejFBByUwjVu92zRrTSCazMtq1CFkBEWFmPSDLpYhRNRsS7iTbwAjjesMGwJyEZJ5Pr",
  "key3": "3WVYP9BN4DKuCSftTwEL3KC2FrgTP38CimxmjGtQ5Vx4EwrYHFdgyLbfvsZ9u7Jb1CRPLKtrULNR4yPkrYC1dreo",
  "key4": "2RokZkK63nmKZN3yEd27Ede3p7BV2zyKVf9qq6dBx1q49ha1hvBwECs4VyVGJvsGtvtWhHaFq7PhaHc7gzXyeHyV",
  "key5": "61uoAyovj9mkHJoCbT7MBmjz3vLpEg8qEETp2qMKqoBh4ssARaRHpR1LQJKteLLcqhoHRZ27ivxuzUnvodPUKA9Y",
  "key6": "3s42p4GfyGop1bv6JvsEehJfLYEAUvToScppU7Li3Uma4iqS9cH9fiEahMNbXtUTUiwTeYaFWmjMoucGidYkD8HK",
  "key7": "4JJtjmWL8Xp91d8ACUipo3gtYN75vsi6ULweDeUupsQxY5BsUr4uN9pn8vzsMRz8RdGsBnMjjnvGucFr4YxcKGw2",
  "key8": "3JVAaQJx35SNkQZNc6sdFDbKza2qm3Xspns49ECGYwU6kUDmDscZowoiqB4NBu2Txf2XkTSbarkBDFS88dpU5JVW",
  "key9": "2foo8Z3mWs7sZMLFFXTJdb6s2rpzVM2H5kN4GDYckDKB6d1zqXW2VzHBSRkXW1aSRd3BuKmtz6FgkkbmKgXZ2z8N",
  "key10": "56rpM8XoQEBjM9uHS1TvrKP8uJvzLZf2x8e7BBtoLWaynmDEpSr9RVn9P1wizqjpsW4mnG6qzG9tBBdmEADEHUK4",
  "key11": "Jnepi3nvRooFx6d4bfCT1v2rhaUtfmxn3ZpjBUBeWrWd1swMgrU8EfUSdf44Fw8wk7wJcu48QPyP5ze787dtC1j",
  "key12": "FjdfkxdfSvFL6dueJPpgSYrfek7agC3n2sVN3ZuYG6mCn1WwSkFzN2AUfnbKWvhrj5DAVejvuvq4trxTZW7jjZG",
  "key13": "5t2pEYKKYYTPcLK6GWqNwjaSLa1o1ZqvPhgTwrQMoWZuw9ZX8TRT4to8vXXXeigi9R7CA2G6uEMEX6bQgPcCj2W",
  "key14": "39s7GfYY89wRRzwUdR8DUm8z27PZjWx4ubr6DekbSmJYJvRMk7KWHuy5C5JyCCLSK7RBJSwBiXuSzx6bgE5yNZRo",
  "key15": "QH8YScU4QFfZXAmtboUU8jT5VL6eD8WzJE9EuFpHffNanAyatZg8Rv9NdEkiv8HkQmTYMUcwei7Uys64gDPoW9J",
  "key16": "6GryHzk8NMReLTvCfG9Fe5rpgy3bRyai2xD18DjpSFcvgCkdGrcrH4a2YcnrbtPphtPWYStapcYo3ptgHrkzA8v",
  "key17": "2yXLSPeFyGdjuXric1xvdktjGJiwSMvuUCTtu4b3KYfFyxniqMCEwjW6ofEfW1fWE9i5T82MbUQ62xhxT9UnzhvK",
  "key18": "3vheCU3LxmSRCCPibazWQznmc3S5WRxGJf71HFfZ8T1ge9Bnk9XLwf13DAcw9MNSkMAkQjkTBsP7wTnjgueighzC",
  "key19": "39xVBn6GZn7cT7dHz9RRsC7Uzhgxt3Acoutaz3uFrwAxKDwDK5vwRZBSJ8C8WMmtH4KyMmmZgRLXzoJuGvk5tJfA",
  "key20": "3qpcWTxX4RkAzDtnmtYANpZv4FJEtaq9emL71MRh2eWgDw8jf9Zmj1b1m8pYcngiPtzvfbFn4ZG5jNDaugx3bnoX",
  "key21": "5vprHWKttXG8CM3tSZJ1T996vSavfuuvyegvpQFhzvJezooZ9j9dHmfoUw8LYqtUe1dFepG8s3XR8pDSULx1VRGE",
  "key22": "ibRsKWSc3trTgXzuCh8eeUDKqAH8YVPsTY7phM4AfKQM9Eb2k2FdUiv1PA4U6VFp3fMUX9tVrh8RNf7DHYNdq63",
  "key23": "3qMNx2kQ5BqaRCxQ95Mnjk46cwuBFKMA2h1yon31C46Y3UFhnyJbpHvu6TY9vHneFrNbDDT4W2xEcm7DSPCtXsp8",
  "key24": "59ZrBFuJUNit2zuEnTzxSvDUZxykoJwCfizQMxVP1wEhSuXF8DKKG9J9LGdx5G13kyxP5YBnWBp9RUcQ9q381YF9",
  "key25": "4xUJnXMXbecnnrEKeUZjV9uEzUYY8rBnjR6VU9uXst5ZFgDLWYJmzQ13KCCVUSBMZR4h5ppLN8MLAFcoyYn3j6j3",
  "key26": "5K5ea7sWViSFZ5ENeBccrFubrujmyegiMiNDZTJmKEkobbnGMaXPcQ6tBTYXR2T3uFGVW46pzXYxiavkfRELL5N2",
  "key27": "4p7ZVkGBBNN61cdzyn4R9PRvXx59qpovzzWJ9goUDZncEU1d4tWtRPNNGZQ4iL6v9o8Kw3ukMijAZgEgbRvgf3Bn",
  "key28": "2nCVQcFJcqux9Na3PPbutJE5QhDNvNpcxHb22sUYKrYzzQBSyHbeaFLSazEesDVvxPLDRZdRPQGKbyQQ8N3C1QVF",
  "key29": "4CL2ritfeq24E3Dt6KSDUAL2Jf7GDiWAExDeGoDAZvuuD8vBW8zcS24C3YutosS1B4ZqmGiUQ79YPKYkGBuyffU9",
  "key30": "Rf34KU8Vw7CQgXp7r7g6Dav8FErSMme4yGQSpqUbMkzhLKWmaq8Px5CBcdgo4tBigcmDiH4eG2ySbM4ZQ85AxSp",
  "key31": "5Q9u5aJh56cpdWZ1nFv5eRov41vJNqmf3EZs8gxxxvbwodBkgztDThAF8gL8eeQEPkADLKqZtKWU8SjcmwsE4GR2",
  "key32": "HUE3BXJpG8UmyM7Ea4YHPFKkxgJbhdJ5JP1x8HaHS9mFBDPQkkDaBSTYy36AsGsSenegvGCkm8QvGYJ44dnvSZd"
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
