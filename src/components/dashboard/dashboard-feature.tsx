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
    "4NYtFMRg7kEcDATZG1zStZAoV6DeprqXTDj6He4vp4oLDuNw4YSdm1gJP9uuJfZfNGJzfpj6b8Jxug8FEREGtzB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s1YDXH2GuRjWNQFrJUkEiUJsP8favMWKeka9M3yuM5rjrYtzgS2fSe4wirVywDT6eU3N8p5LtRQhwJLtaoQFuLX",
  "key1": "3C6u38Bs6CTSygUEwHfgty4MxdkhHaG9QfoCp9NNU4jG4rQgu2MecUiLBwWfPiQ6Yh5huLAU28wouj7UgBHwm58b",
  "key2": "5ZVMrNZ1sXd2nz4YspewKiW58Jw6HvLF8KaVJGHDevYJ99NPKbpPWFUzFSHhLZh4JVXBhTmbY1pJyzpRY33ogrhR",
  "key3": "b6YfgQUSdCaQtkiJiwZdWbw7DWL81kVP1z5aoCX5STx1qNux2n7LFJcSNVXpXv9vfMz4ywfYbQjsSyYWsdCAT97",
  "key4": "oSUCC8MgRNakA7SGXNaua8Q3wHrH2xp62tmizyYQL1p74it2LHRDeGGUyHAzZP2w5CwNrPVKN74g9PzPKYnT6zw",
  "key5": "3K11pPiCFiRQ4jXfAPe5bFv14AWJshSdFL8JU5wUUFJLkopU1co8iDri7yucV8kLFbMgbf6AK5FMkq2KFgavsGwR",
  "key6": "5uXSZdpqRZ7hB76TdjpTQjwCUF4fzojyDGx7Z4FkdHtM7rtSxMUNMqgnGTXq4Dzjj6f1wz8rhb5fmy9k4HzeLqCr",
  "key7": "58MRNqZEAPvLFST3zgvwjNYHuUnZwAk5g3f2dkYcaYzCP2DTvKyc7emGYagwABPiPF321H3xk4W1ijKkrpyWXhNM",
  "key8": "3HU6qkRQUQWwu9PLbgkC88VTY9QZ7Ttm6xdNJo6GhHaHNDfjEDMy5Ne4ca3tRtFhyaZn3sgMRTfAcVKs9xR6rofm",
  "key9": "wDo6TNLnM3trFHLb1Kv4JYLzoGRhZZuwSLNUPi8bLhe4theyRcpLR7J23A8jdLyDYRumP3P59Pz7e36W6NGQTKh",
  "key10": "2uRSCJBQgdiuRZHBwtAS8p1yuviYdnLnN5pSDB16NnjH4uFzY7YZKewebYBQvsL5rmiDfPHXPr2Cn1wPVbxs3WH2",
  "key11": "5hv36ykigVAkQHvM992DRo3qiUY5mjYD4ehJetMHNBDjYmqahKDpEcF6PfnnhWmPq4ohKJZAbFxF2dG7XGcM76m8",
  "key12": "63gMgz1E8KjTcoFRPvzxzvXryexSCthWj6NsMbBbTf7dTuwKkaCj6Z6YgTgiJk15V5R1YiR4w2CHStScHUy629bu",
  "key13": "4kwUnhensQ3UqcJ5TcZScxyeeir9J1Bw2xGi3Lt4JPZZUWd6eTkG2eexeX5zQNq3mTKVksdS4T4WmpV4UmXMAC6B",
  "key14": "5CaZgskY3HDcqQw6GPgYrS2mvj3DM4839HLvSc17iZsYsw4VgwSaTLetu2Cv3SD6hfZ9Y7d87REX7J7Nuxxbojy6",
  "key15": "XbDvxArD79Uvg4KWwpZTeonjJy4sGrtUhrAgSm3Uag53nV2kUK4eYUu7oQYgKJ965nYPpk79G7LzAYSBwHBRLXp",
  "key16": "4ssu46Rgms6V17YGTPdGLL3zzT8mei6gJXstgmk5oQwzyWBvYx56j4aWTCBBwmaQPxWphAbta53YoTwcs4JD2S6z",
  "key17": "2nzprWXyqq78BuER5xNcsjyVnuRDSX2YydQdzPdF2fpp4DxLETmuLT6urZ111kuTcS3YbHyKbmYHapE6Fxnt2ZPB",
  "key18": "5qHUaMBxJ3qHCgj5fzfGDVMa9p6SMWpe1FLcrBkHpe65cCaBPvzt8TXjoSWGam2yra2n13BjL2SEbCVYnK7C9h5Q",
  "key19": "pH4aTZw39HyPyvQR1BRiUAvAxeQzUPWvGnRYCXn3Be27agfpqFTiAMdygcmW8sJAMttAgSccyke9fGLsRYFbZJg",
  "key20": "3DPhB9uM9VwycXK8tU4fs3y1RczN7q6NbVK1wpHdz6BYCdPFh7E7wUw8g3zjXEn4V4qpfKghE7GhTUdKXpy91Rns",
  "key21": "5jwLmfxPE3fHoDMsyb3EyXS6cs23uFNDKBoFehW1xgXzjTrKwNbZaGR6RCfbmhf51YFC12vaj7D6xrUm9tptdBpf",
  "key22": "BbmbM4MQL6rfPFnqSCj4Z62kgxEVFYiR3vFHtWyEVAMVHyCcDtkRqszZfKCKmmJGJnfGvvDADiEpR3cBrhAqNQs",
  "key23": "4zHMpNcEef6gzwqPqugADgrWGQztpoH7244BcA567R3t3RVNE1MbZHpKjnf4DcCbtcwSWw7f8zW8Q89SCMnMrys2",
  "key24": "3G2xcsaQWWJnGEai1xkbXJwNnw6Lrnhttdu6ahZDSgSZj1F64v6FrQH4hAhFJ33cZy8ueDYos75gyBEqsrHqUv2Q",
  "key25": "5T9UXj81WrBMsb39Pf7b1RBLM5Q6iEASEhVNet7gqJvRp5csp994mdAhtNdb2FyJdNb9G2SiJUqQWTUV6ya951sA",
  "key26": "4atfNkQCbcB3C38gABi13YfxUHqBAZcVN76XL2aJkhNcJ6STVnQ6g53RALogsmud1TsjTonZoUv9B12jgYAkAtjp",
  "key27": "2UWx4Q6SwqCzreV843gTxPRuSw3n8CQqQiqqudWGhNximnMXt9gjK8NgEuc2BPccJne5M82SDX9Zfkhk8mYbu7p7",
  "key28": "2jHrSwXdvLBS4w3cFzhRd5FDvr19r2wd6Ef6YryCavVhsToY3h2cVzcA2zsGrSrgMys1zEPYK7FEk7wWJ7AAeBrQ",
  "key29": "2LKAqfxmQbsV6nBJdWZuW8gn3tWyz1SThvhWzD6jcTNynk6eMeRckTGtMLyJnBHPtxtiR2h8sPYkG4bNV6226DeE",
  "key30": "3eUAdRXhyv7cGGn6CShdXyvwQXebf9e74PBHR4wWPxN4BrReJccZrmQrxdzRykRYbycKRy47ok21kynHFjmAzvGX",
  "key31": "5qDnXzKZuurfzqvwQXGc7buLTdUDAhn3cr8HbBLQT8zXm72ew6uLynJfDzVYhYit2gPJAEk4MXKBthigSDU9sD7S",
  "key32": "2Msmh7juKnKLjbz689rVeoD6A7Adkmq9pRj3zb1vMt3k7Vs8aJCCSEfgiRvQmNsHhuNgB8ZcDBHNcMYjuB67AbvA"
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
