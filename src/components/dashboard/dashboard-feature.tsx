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
    "3b19tfapH65Z2prrXuqsSPnASEY3a2p39SgXuryE5nh7uxDRNEHhvLoCHhJiRoCnaHzXM1ETAKKTD3f2rBZRfU4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c9MSoMTYo6jtEWC1cZsRMNP2AyKXbjkeeZUmmHVHTXCSoDTaSBgt2TzkhkBTexVyqvpkWpfev1ezzVtogKX6BPP",
  "key1": "27SBBjuptF82GygxYm998h98o7q3ovLA66kV57cL5EZUiccob1U5HPjK5KbXWGrHc3RBWmMC9JkrkqcrKTX9T33W",
  "key2": "oBeDk23rDUPhyRYSwJZGSsbud6bVWbWsX3FE9TEfEq77PbZrZNY22yb7cXadkbcCCEiocwKkZrYoLYgbuofhMiQ",
  "key3": "4YDgX9PYcx83nVL2EMT4irAvQgdymz7D6TYm9jgubhzLWKL2QfDnFtK8TpsY75uq1Sm58dZsY7UsEp18krzWzY6g",
  "key4": "2ZDYA91M3yhRAPem8aSh6QtXhtyeKtQy7Gkhd6bjT11VPHVmvjT9oKRmduhVFz8LqEWxm482Jn19QN6dx9j6WpLw",
  "key5": "4ag7TwAwZYwoBczzQUqxwPSjrvkyXcRV2oFCvZGq36pPA28LwCuMsfEAMURs2TFLX6bWFdTeD5n7WERH1aLhiRYN",
  "key6": "Kmro1GVWvT4qUzYMcd1KpJnonCy8kFi7Wj9Dkn4uoanQbqRjw68RikSi58Ho6ia8dvdC6fEgnp43Ha6T1XhpzSQ",
  "key7": "5YgG79Lyyq48gHxLNeuPgEpW2XSoMhpQ9ukdcR3WrTrRknjXMDdByozUJ9Sv2C9NFNBQwHbLh5yHG6Jr2XDpbgXC",
  "key8": "5uDtm7rFbcnp22ay88TAfSDfn6HBs1bfwxyYv2qnaRiycGJeHpLocLgvRYimAWKGJ9tSTFd2ycKaaRRi2XuysMrq",
  "key9": "2PMHtC8M1ncLsYer5XA4upoZyDNjY7Pp9wT3xkh3VQfUyzH9XiZWP6ztcyBK9njhkEusceGUjJFbQV3Sz5uR6Duk",
  "key10": "2KeyiHWhwX8yBEJhC9WaRg2XXjnwYi36YZ1tQB85uaTx7aWqLQzCimYSAM1SAZPsG7TqmTQXksFcwJnnmBbJBnCG",
  "key11": "87LqPD3oxHrK7WU3tchSwN1G9STX8HkRMxtW9pKF392qkG6wFWD4v47PEfrpBuNJmeCNQ1adRFZYmK8nD9ZnnZh",
  "key12": "32wFpn4PjBBL4cXS7KPA8zcudGd76nFqjGgSimqL2vBy8cNbAT9zwgkCbN6TeFxRU3RvMHrRHyWyxNxT7g6g37Fy",
  "key13": "5oyrgqiuUFwRNCPqijxGaLrDk33XJ9CREYfKwTNJG582Em4MFe6wtq8MYC4KzxW2Sb6AXyAXdx4Qdbvq1LckhdQG",
  "key14": "4TyXSKaM1gBaVVA448YNBjvW56LrkwpkPbZdkJq1Fvthb3nHWgFPTeGEXt6G3TX4mdvQCHnKuuuzxtiARZtSjthB",
  "key15": "2itd5jJWmrtP6ne9zENne8VsaHB9LpnPH2myzP3jGzNuHFyVFP8UaBMf6NJA2xp12wHNCm83q7hGMZCZZy7D9qnS",
  "key16": "64vToRq7iAKuMQJiS5zgdRa6WzJEYfhMtgAeyFrjfJFqs8vHmTKRf7UrNyH6JgsNRuha1g6NSvcBgCsQwYrmWats",
  "key17": "2FeVLk3WQsz8Ya8PH9ex51DawcdbCuHeujpvMKGZJkxB5iEzZZSx4yzb1Pq4i4CJcE5xBrXAWky4pyVgzKejT4Kw",
  "key18": "5YbyPzxqTdai2exZKx3XReYuMLPnUVDpfsBQUfu3zHrq3XajGNbvt9YvT2zuGBMXCyFfDdvN29xHrJTy9iFxR2rn",
  "key19": "3kpijjHxtpLncNwv2AR2UaKrgCrrYhmayqhN3XxME4fQ7FtxzPr3iMPJRf7PwB7k7wfU6KmKvBb3A8pgMjZJm7VN",
  "key20": "2GGhbTZk2a1pUwT2ZBax2FavY19aYiXQ9HGEYJVSyZbPyHSpwfs1KwEm5LrTfnFZ2mX9AHjcAvCbj2yJKf7tfeaN",
  "key21": "67NEcojFi696Rhfx4v54htGmggw5aKkFzD34jmmhAdpEysqhA2BoWz2PnagRVZvzAYUnC14EBrovUPb6xyPQXGu1",
  "key22": "38goPv6p3B2khtdKpnLiJSDruoBWacS3uHVnv6Xcp41gBM7cWoUQdNhj6uRVBxZBbZri21A8zBniKu8kogYrAuP2",
  "key23": "WE4EYbqXXNRooqaNCqSbQY5p1mzpeXEz8NMDows6T4Jb2V393waJa9G3Uz6QFYbdspbHYryPshNZKBL8Jc5bHL9",
  "key24": "2hbhGk5dgst7awVwbRKgK6t76rkid8rACQpjafEeUT4KxbDrysT3fnisiLWNugDfWDWfVs8q1mXus1DEXxJSnEst",
  "key25": "539mUgaMGQsjG9UyCVUYbLeiMtf73v7JfbPGN3nBteo2Q7ouovDjgfCPEkqSiC4MCHrdjNRK3bt7yX9gP6XRrbPT",
  "key26": "6F6q4eBeyaQT3h2j3cPtXwQumRksaVUs1YdZzGaTVVpcMW7cYhepRrZ3VuJpXmxNtDCsSgbsSSCaQL2UVxZnniU",
  "key27": "cCQ2PPERmjWA1NxutR9YchqWEZSfLfbZWZmzNSsm55htnEGPRhZPsyLGfVfnMJMaCQnBf6W2f4NPqKk5phqJiuh",
  "key28": "3DrSawwtVy9iN35tMghzLm8TiQgNFcF5xsyxRY7r1m6fToEMK12Py1XfSbKHrW6NKXAXrSwKpXZM6uU7vygUgHNB",
  "key29": "58kV9ScBmMUmDPLHMjQ65eumF8Vy6UkdsdqME5LMuZrs5E9piws1M74TMHFTxRUahKKCRnFkvTPt6wdd6oqpm3Kg",
  "key30": "3anjXrAn1YST6c6EH6Q1JWQ6RZZxccqMzEDA1gDKhVikLjGxQXHCMGZy4AGPuZ5tGMEAw9nPwgsNYi6ee3VJQrqv",
  "key31": "3aRkj6ukYfxcHohyE7vU7vNjrGuv4LU7CUBc8uFHMceKmy6Kkcnzw3iEpR9KhpaZu6vtFE6odmLVhvXk2KRbPgqz"
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
