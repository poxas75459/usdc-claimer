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
    "4K67U5wTBjhjzwkNyVWYiNGNmwHa96jGyEYgodNa43VNrRi2XifPGMjEnarK7rxHGtcXgaCCC63PHZrUK7S9zJWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fYahVezyWF1KSXSoettmptTfDE1YVcH9QD4xPvaKj7gVSNyc5fRqD2vqUpf5G321EnQpRwmxSR1dRa1Z3WoNcip",
  "key1": "YDbHbpCaY9M5eUoBjYBzCT5B4v4UAU5auuEMCiHJFiYt45Lzqed7dVE71FNEWbNR9AJcVxCAhNg4SqRauFxZ6dy",
  "key2": "4KpyFYD7vuQ5ahstcjZeC9g7jRYMD4NSaiavqtf45vX7ZkmFGf2AYWBAN9FCN7WBbzFq96ApBjqfBrAWyfQuFrtn",
  "key3": "2GQZJ28BYCpNmk1Ze3eVurm7MWaAHTqbX1VqmHN4yT3Wm8NvxBr5s9CKpCp939BoEKbhHV7Qw9m4FgS76Aey7XHG",
  "key4": "4raMX3b4TB63bJse7bA6o38gM8ciKpYxF4ivwZUEckH2PY35uZ3poejAWoQpZTFrrqT1MUErqV51iutoZjUVCHHc",
  "key5": "3BSJNkwcMNAaTW9RoE87L4vN4391H3BRM9c5a5A7nfBD9FR6L2i8rfi9wXNjVdd5wKV8T7yL4amRyoXaXVeM1QCT",
  "key6": "67WR4aS9xYVWL5W4nQqgR3HkNQ62yjMKkXhnE7dJkVKXiHGD3CqW188yLVfzdbycVsYGKHg6yHf7XT7Vo1qTtzxZ",
  "key7": "wTgeeQXEUbGjLEwdm7EW2Nh8pYdD9FtVZM5eftsD1DbWWa8zK5DHajQ5uhvDLxpYKJvBAcXKAEvCfsrof4FkdoJ",
  "key8": "34iSFYoFn97eHMAf5hAWyRDu2gSPFP2bvMpZMjxJBknhtQ72AEpAqFDX8nzqGuii6mLTNsEfhBqRSs367g6WLfuD",
  "key9": "63T3aGv3TqvqMCUdYNxBavke9K71aLetgT9hsULXXbqReND9AadoDtxz6A2mVnRnKxNd7M7vPG9SuCf6Epqdg27Z",
  "key10": "5H5zXT1qVY6EiYZ5BwfwwiDe1449CV6pYzrRANtT7UMFgLeba84jSuCdrszrFcDKBT9w2zCmDjYU4jwdFidaPWWt",
  "key11": "5G3WwvKTDfMs1eYgsjk3B8Jp96zfXq8WExc1FEoJpkGPZEYu5siYvE4UcFJikfuswMwA6XzuH52qjZYLt1Xtt5Pu",
  "key12": "2MAC5uJn7qMVZJC1neF7syYJ9XeDfuCyMtPKtreqMPTMaBtDgjdcjWZdoCLhPqM8FAbYzNWU1mgQj4eX5uQ9VHnY",
  "key13": "6MbRW3cuZsUX1ZV65pPVywpjt9kNAareNZtKNvnmh4yf3ddnF1EwVSMutNavigh2HnwGeog8m5TMP6zeG9rQEZR",
  "key14": "2Wuj1uwuE9GLLH8hAdsb32MzcRXVdTDBfByep8vFsL5gbnLFGFgAYnX6BUX2Z4jN4jx3J8EHEvkZQzVYCmTcVeiQ",
  "key15": "5nRwba8i8nL8hJNuH5KLHEcjSYZxHm8jVtpmSYpDsqPy97kjJNsGudhbPSFX7dJBRMY4aeCveKjAU4MSoiUTW1No",
  "key16": "3DBLKiX932uPoaM87uJTKCuQ4fR8E1UvFKkg7fjtTd2gZ54XKT681o3nxBiWh5tvRYhnAYFa5Yke1gTuTXkSwrnW",
  "key17": "21WaSLPmg6gkjkaAdACGdQU7hEKAHxAunTmzM1LCbR7w8WRfaWxQAVPyxhorS7X7u7hxZcNCMdS1LyiYT47BCZXJ",
  "key18": "2PNzm3rTgJfTdM5ohwR4ESoUjNfXoPjvqMiArW1yfsgcdb3rn9joXUS9Wf8cAHk69dEbF3aTMuqEcviiuFfaqfgW",
  "key19": "CWqECj6eYcbLLttqiU8BEC4CekjwHe87eMtSBZBhrj6pvHn9ez2ZAAY6xLDuNHPXspKJSSiFtb3gCydn6Zvm6fN",
  "key20": "34DZGh8j2u4hoai31hbRg1FhKNmULsu9L9UBjNzgcvbSq9EuK3sekmTokAPpeXki6WtafisQMmBNgRwwyc9YRmMH",
  "key21": "UGcJuPXbrCBVi7H8efQwA6uCvuxf8E4eym12tVeYQbJqAt5nyB12Wajy8Hta6f8zeG11KczBQvVYZkDUEdeTEwE",
  "key22": "5o4EGkQzEQKpWoaMEJYPAr6nmLoETS1aqTj74oj6CkLGVH83tAigGU3SnrJgeb8PLyMmk59qHynHy4vV4m5CpvXX",
  "key23": "uUbTNeGF4GxjuFdjN8SGr2mFyAu8bZnqh8qRBPBXVo8NFpsZdJeRXyib1F8gJTSqqxpxkBLwiSChVu34Mev4xuW",
  "key24": "27J5BvZ3uAZD97vFpWyEVbquCmJP1GaGTbKf7BFwVKEnVLVnRUuD4EtjNjTMsqwB89qMdTDxm4QTvpuBjeqFuC1J",
  "key25": "2T2y1XkXiwmvW32u2kzP6V1gEKeYS28hDa1ZXR9bDLfrT1V8aRuQ94KZpDDKHBnpN2ULgSEuzmK4KRzKjhEWH9Kd",
  "key26": "3mnAKBPRLf1prQnxDVg96M9ifNQecZVjtHr7KazVn7PSBCxvCPCU18XCvwQwY8qYp86jN9RVmmeMpkd2u6YBTmwf",
  "key27": "5sJA6Z8bUJ4341iJ5s8FeHFVswzuUTt8UBSmwyMuFFzgfwzuE3SqkmGmP6Q2GbK1eUF58TkyEu39u31wqjfwwFRv",
  "key28": "5s4kyrGt34WVTBo8m5aHArtgEWQe9nLtU8QvoPK8hM8DtZ6cu7kCzNGncZ6iJiUGKhFJeY3TkLDV5WystsqDtsTv",
  "key29": "3KVdrGSnnc2NqeDBaSKKE9diGfRJgtw3Loc7vHnEg2NiWYwt2GdSvrPnbokQVafAistFXjpUYq14jbpKJi2br64e",
  "key30": "5xktWGoBLQDh6KPPYg6PdMBkA4vVd7WM7FWnc7icdFtXQG9VpTBQQYuK36eWRYnYnWNA4QN7k2YsgnnjbUj8emKf",
  "key31": "3R2ZWfYXFg1B3EBTVceU6LTWANrs5ZTFG5y1wphNtStXPbzPkcsz4AfNRGBiVyV7pgH1JgrfzE2ijjtJD3t8dtSD",
  "key32": "2PvJ3qpnwB5UFzB9z1YyxGjuwkdhhmw8cRMKWFYZUPM3PWzBGLpt2Jm3qzceYJHoMESRyHoFdFCdoLiWtovy5U8h",
  "key33": "4SMV1bUZvqiT6NeNNv9N14qvF6gQ9NaZmWp5Ei4cp6pS6EtrJmFoDqaRhAbCbtVGfzG6vXJsYFaPqmETy6iuTgbm",
  "key34": "3w5uw6VV3LyfFtVcPNAspKYxJAq9tJViaL5HRLLPaTa2paEQ8jiPFxxc27ukXtCfSjoMat3c6Mw5nj8nFjeX3vPJ",
  "key35": "4mS1dzDPU8swmiYJZqLpDkQzYyaCSenv3sbCWrjpKmvmhr7NqkqdeNPMZKBFwib4qiqNQzMBqo2XJNRRh7Q9TBMD"
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
