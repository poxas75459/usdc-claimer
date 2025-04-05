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
    "LW5hVu74B7eK3o96sd5s7nqa9NdNS7EnuTW8HNwXWydwajuN9XX3miWkkNsuW8UAeQ2q8JjRBEnSA5KPRhV7Sf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mho6wJQtCQ4tDDedSSs3goF1t5YsYrGNPiUewKmnrPuEtcZ3BoJuQhamedw9TFNY5vTaPBbpiDTLLWEvt5buhoG",
  "key1": "4wT1JASiy8MRLHnyqWHR62t91XEddS7721Qx6zEp3bUQXjK74UYsGdaH561JpmzGKwNtBjA7iKGZinEX7x6xrpxt",
  "key2": "3VhpDrMNf7hfMyh3JEY3Kyajb9gBa7K4JzYjDCP8MV3qPH3ux6W5LSi221WNRHrEjECSTemzd2ddpBn5boSJEioA",
  "key3": "2TmuWHHAsQKBgJMexqcabH4cRaszyK9gPwNbhhbULb8j1D9V5VpMazejCfjSXJinyQNDsAvKai5AHnEz6QjUJ5Hy",
  "key4": "5JVPJkQ8BEBYjSmfiSn37RYR9tsUFbEd3LRixgYJtPP2hYbiNqpqhF9YoUE1BVMyJdovXmEwEFPmQauk8mMFwyNu",
  "key5": "2jThGZkMpCxkdEZjK1p8eBBEePMezEXfMN9n6Bpbry8nM8XAzk3Qx9mTi86SnpgkCThirkLfss9VvDqCWSQSTVNW",
  "key6": "3xaVrqLgVeMtYwfMwut2HhjHDUEUJHikdQVeKSL3tQ7E9DUmVvNFSTvzZgTitG4NxmaxgqFjL9smH125SgUrZtN6",
  "key7": "5gDMVyNosvBfYh1fT9uBySNFxVP4DsziKjgXS8Qu6fevCP5rv55mXpfBZJaiST6TFK2wfgGhBWD6QyoL1LhhbaLK",
  "key8": "2f9Nz7UY1VDo7osNbVdDDaRdDeLNc3gTjPfLRXN4HgwdMaGn57hhy9qQ9CfajduaMgSkBeJrWnMHbTmUXHCiQtuQ",
  "key9": "41cL4c2VxXTkeEijH5MavF5k2j6qr2mjKLKKgKMGVCx4zAiiQs3xkV5K2iT5tuXaEt8zmvfCGXNcqcRCqZyhw59E",
  "key10": "YnXH93TuXoxWsJ9pxhbvZsqDC4B5tpNFnVTHuE6bQWwngoeCQyht5r4XDq2hZtYGrShxgiCrSZeUVkN5vXE4Jng",
  "key11": "W3EoFevZprnWG1qbK8sQeBqAhX2Db5AkMCSYZopMzyjf2nm3Vo2JV436Tt5B8rFZmiW7JuVxVxzhwKPxyga9kmm",
  "key12": "4XB8xyLX4X9Bk8HgpWYbaFA6nge4JA3hJnLvyWkEzPRhAvAxUezVpD3niPGWy3WC8KQSHKXRDNnurA2jKAi7G8ag",
  "key13": "3zjJgarriZF9reAxRioN3frYtL5HFtab1fwLp5qxCwwQwRwxahASDYTQoH6bGXkEdz77Du8WbUHVT8JK9xW6d5G1",
  "key14": "3wDnCmY1Pd42EB1XbckmfLJuuGBK6DtzFnLGNcXWe67K5pspWx7vHCSmj7v4cud88jMSTrv8Kb5SVa7bZYDeCyJK",
  "key15": "6598RojbXGa8XrwHMAyr5hcqBMCVTnEgBpBvhN18stQnx5LPJ96ci51u68Q1ih814zj1p8KjLG9XDDKPaBet8Z1W",
  "key16": "4LXK5vAPa5RF5HbNXWqy7ZXPVHwti2NYUDng5YweBmTwMwkydzZtvWaP7hknPM3FjJKczVcjNh8brMC1uUxkX2uY",
  "key17": "5SJxzopxGyT5AnTShU8GgBKCLJ8ffCkzBKaYkYxeHFiD2v22QpzqeWgYkjp1Jt2mxHV5BJKfAZW2X9j6o2M2riWD",
  "key18": "4amEBMCoWox5DWAJ7DH4v2FVanq7AhUmWn4vQhqbhv7KsytE95CeE9DMYG52Q2vNh6hK5i1nZr3ejV2jJVfWuq8r",
  "key19": "4xsTg3FkdrbYYszawUX5DSJKFQFyhya4dwdvFC6bSuX1EqXucuX76t7i6E2zE2RHvk2f4y8eAKZ8UjpKGLfn69vD",
  "key20": "KJHGzqXkpzBK3AAyWoRNKwjYeyj2ozDAtTSaaZtsCmUNFxwzFREuiTar1WA6YWtbRy3XgWj4GtUEKGrCYp9wWQ6",
  "key21": "rt67nQNdkWzq8jnSkkYW2RtSHHYKWBpUAe4peYy4rMs1C4HHHX5bnmQY8mxKuLPHnLW5wF6M7fPKc7Fd4AzNiKq",
  "key22": "5mzC58fUsrRyeXApqgvLZL8vXRWwbawNodFFnQu1B4EootEPWSVFDhKGjoCtYbQx951KYg3Fst9LiR5Vwr6DaQ5J",
  "key23": "4Z2bRuC73B6krFdGT36H7trTAdbUFX35zGcYErJg9yArEhpJXuiG1m25ruvpKz5V4WLWKjiAwHLqG4nYgmhNpqLX",
  "key24": "4QSXDYBDuTEftrsnyYeKfgcQAUazYABcaa7YqCRo5joZ4cmmvjtKCxcLFLm8vTJAFXZnPUKes7UUhH14g7U7zCJz",
  "key25": "4cBgPZGDPArXaAXeEunigSEESUbLffKsSWqXvdmh4ZJ8N5JtGCHYfTMm3SrCgbPboUHYqmC67MPApxzuck3ZSY6Q",
  "key26": "56cJQkrC1yJycCXJGiVBq2pt3oQVQYc2uBHGaLxXPcjJtrbr9RE86tQ8Fok3ZmLJUFKhBdPAMYwhP5R8eEeZkxep",
  "key27": "6dejXLksGraRTvbkcuxHs3yZz8JXjvxyXikdeGVHZL3HC5We6yjbXvKwLcziDX9epK6BTuXdWDQUJmPkWmJAtHA",
  "key28": "3WjGbDg7D7Xspex93qjaJAbBkGxiCT4wAXoDjZYZmaXv5QCamM8MT672JskyMeCLNtbRgbMJ8DRsrmqYbWx7NjKe",
  "key29": "3gUzZ2dcxcF8SBYbbF2cMx8hRQssprrAmueEyAgQL2KFFVQyCekYJfeH8LXL8yya1EomCaEKs1d6875LFYdRv5Jq",
  "key30": "3tz85ctYt37Xek59Zx2tefPUbdULkjSyjyVvismyCf3NahZ4WcsnZ51DM1uojr2XmPmcrPBQ8Syq51XqUyVe7jJV",
  "key31": "2BeJn9uggvgTb7kVbMJ7fe6R49P7zfJ8VQ9QmXw22UeYgjfmzAgPoEfPYXzGaiK2K6WGyLbsB7gfy8VJBhukLx6h",
  "key32": "4aBPhgteFSb2aMnZyMeL57UzgK1vpwNqjLuChTorQKj6hCgtQx6wmhSRVzEYas6bp4KNqK1oF994u2gy7ywj9wix",
  "key33": "aTSG8SHNLN8R3tFaVjpMw1KTrKw38gB8gqfrnQyAPBN6fp7cn75j5C56gS2rM5Eu83hubzmgozvC2NSd5JC6efa",
  "key34": "5cJgkMNuygsgZzg2VsT1iho9vWQEAF1iG14WW3wNxhT2k4s8QXgMmMeZpVoJoxNXqnCcmffswgwKdztZA1EwvL6q",
  "key35": "3nni1oLGKXECm4tixCL6wR8Yw5WEk4TKjDYeF7fi4UdFi2hCFHmYUa6s7j6S67vBKo2AqzcmmCmGjN8NJ9UKzLGo",
  "key36": "YN94dgr7B8gY7tqGwtZpgv21fCY3UocM27r7B7xkFGLzysaD5LJSN267cXHKxZpNGU8Pogh9SJ2pgJJT3qrFKsB"
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
