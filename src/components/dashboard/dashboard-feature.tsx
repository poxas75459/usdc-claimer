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
    "5QvYuHPns7iUebzyctpFAduL14C3Lt6aRVQKkTr4o6VvRDwUayoxLpdkZR1UZxDw14vh1bjU3JjGCKxwLmDHTtBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vMQJfQxFxMZpztfPsRFfH3TQUw4JUUeEhpiXxsKuT74a71Sdy58CWUCcWgEVE33DPf8MMYKf4n6JTe7aETQZRCg",
  "key1": "pgfcDrfowGsJkYx71fifpgGHku4cEoKp1BjaWcWJhLG7gPxsQAZjgLdrfNGDsArpVYQgWrodw3dNmdLfMdC7Y24",
  "key2": "2zzFSTMENRVQVdWhm75VYEQWVa3EXhmVWj5vsgudDFybxdkhFCAf3AEXeRB9TkS3giZkGCmTz8LJyBMavoVYfBjo",
  "key3": "3V4jpTPLLcggewNvtTkPLyKHk2BWzVBh6Hf1q82UjAZd24XuGfdyMugmo2nL3MRV1HX8LRMdA1rR6qiamcyfbstm",
  "key4": "45nStTZEYjSPbKMCxdNLCEmjVeaEPW2CRZvi3u5YCJm5fjjKX1h6wceLNgJWPLWmBtBwDpkcdk3ajugXFBafvUXS",
  "key5": "hqiguJi1uNgtetEvmWprQg5oTo6CU57iohyCpakyhDZDKFLvcRSAbJZm1wMg2C7x3k8efYvZkt4Tf1h6REjnEgL",
  "key6": "5WSggth9qhofw8DyMjvThvsLg9DsGpiazo7LfcL79sKDKXXvv2Lf1FXmFjwYV8mi1aAms6fXW5Ky2mbktYWGTyQd",
  "key7": "37MrfQ9uxeqtYjRBWDrGjCeqifzEvbuQESkF2pdoBcntUaVK7Gt3W6nspPhPaijmmifCaHxc9TNMJBmeRyLvjhqJ",
  "key8": "oMKwCe4TAX7p9Gfsky3xFKPiUp9PD4412uoL8mDhzkCnDfYuJsQzgc65guf8EzsMF2V5pQkiJhY2bdzqs3UepNW",
  "key9": "2nQHF4TwoqgwZWMwoPPxi9PBMks1F2MH4SHDbZk2NGMAcsTpCvFmwF6hgfJo5EvdNRMoKiSgMWakYegkrSBa439j",
  "key10": "22QX5PGbqy3Qn1gU2ZMwBdLAcqFpc1yjvvWaotASSXE29rHV2YirKkx9S9L2NKondtshk7P2jSeFVhoqMs6T3iAD",
  "key11": "2Tc39wMCEYgpY7J2G6dbyvEsaCKh6Qi2gFYvG7V3XXznAmVGmikbo6ojC3R8DAHvQVnG6jzfvSPKnc28ZUTL69wh",
  "key12": "35xMp1HtUEBut6PermSP7Cv3x9HLnB8faFYjrUGef3EuMHK56XYeo6TvRGx9o4Ltk2ow1beC7oSuRhGP6NEMqHEk",
  "key13": "Hgt2nghVccLRMYR871ouKyRv7kGrsftKCa4y29Y5PFWGJXRishAX3k29WqruaCquQkWjFSyum9JCaBxne59yhpd",
  "key14": "3cQ2BDanWYGugfRsJJxrcnL2iyE4q4SkQQpzaWSM53RZouVGSiNxRgB22FacvyXYHMycESajhKjwikhYcCLpHPHr",
  "key15": "4oe3Hj8j7QkgZpWNZMR9aPQ3VkDQyCmjSDaP62R6kJzddhpYjusdj26SMw7zFER5CPdguraCLiQFWThzV3JaWtYa",
  "key16": "3jcazCtCAgFBj4q9avzRthNbe1nSfq7r1sgGrYfcrFwbespzRqxXiCBus8CuBN3HZojubWTs6dru3E87SwqGugss",
  "key17": "sPrKDVTZiP6zDHBmZVxQatuYw5qpm8fGqb4g7StpkQEZgRz9A1MN9WTNTh1F1vM8GmPQHcU1LwpCgPFumR8G2tx",
  "key18": "3QjuS7SsRCbStrD93BeAnTMMLTYYxdHhq3xQuPHNiPTDBDMum8EYNwR472XSB4ArqZa9XwZW5sRPg1fhPiUJshY9",
  "key19": "4UWU3nbMHQpq3VZB1ApnDuSQxBLyzSHJn5g2w7YhEWwyXK4T43rDzFroiyfk6AyVigMqVZRazVa9svg6rz79Hpyq",
  "key20": "dLPhvrhpfUSxoMPdmUnwfFgz1t6aE6vvjybEBQABqB8EU1NCUyHUang6bxVRG9LjZykgNKEQ6T64WSGKmKdYW6h",
  "key21": "2LvPosWvRXkud4rmR3R7wC5GGQzPKb2VuRJD1AtmZvLiN8V7DuegYk3MXbPh7vFrmwEvr1DerkCd7KbBLMtNwMMm",
  "key22": "5Ks7JkTNnTezbCtEW2HqXvAYYKdjD69JqXvmHYEMQ6JP1gvALw9KKKtDCee6iyu1tLctrbPAgkCFwjiuWXUf8nhy",
  "key23": "4dYf897QVEJMfbgzwodcojnvLEXd7bghPzLhMjuop2y4ooPUbHLGScPYUvJvVGvjpdAzDm3iaDsdpeH7hvYe29Nx",
  "key24": "4ULtxdjjiFSa18AokrhBu5ZwtDyqRDEHTWn3fpQp6BwWB75qS9YQop1Sid7gRnvdxWpmyeVYhTsYUUf9cSucxAum"
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
