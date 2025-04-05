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
    "4tPjSGoh3QHPvtX5XtE15434RoE8wixyoQiQE4bAYJdKPA9tE7fMmU6imm3BJEUezzebbhDrZrQha3GNPLXfHLjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rzq9zoUGduU4NTgP8KfmGta7shkwTS529ygA9qd3MxXZr7ynP1v6FyBvGbYikhBzHbviDwDnnoEEnJD1JGn2DgL",
  "key1": "hMmgofBnAZboHXGth4xkw5cMyThHzqnW7RXJNxQNwbf7jtiJaypXaYSsryj7H1Aak1NVzjtH7yaRwULX8roG9zw",
  "key2": "34BEBPrsDFrjC9KJ3YNYpDi5iAQSMm1d1XRZ8m9HXaQ9yJqfibitFdMWTkBLwHExN8GFsGPzctheHLLrgZZzNLow",
  "key3": "5ruYrTv3SLn6yM9gEoRsRiPEyKySwtAn4gBvmWxESJ5yP31N78GJCtyPvisT5m6FDjyjSrjNCD9sFChmqfCk6b3N",
  "key4": "szEyht5pUsQLGM342ZGWgN91wtCZDer7QhdkUVZLv1qWRfJzNVBF13vfb6zKN5iQeqqWBUXYqjQQauedMeRvZd9",
  "key5": "64wtbNT36xjeyZsq731uuyEdkGYVK7uzB5k53gb4v6S3Zhhz4Cqbtv9xphrwzfpWATzrtZTijBkrd1V3s6QivweU",
  "key6": "4vGFM57kw6Q1DSJkw3o3poVF6H6daZx6HswaBpW55GgZVt5YaXytwaBy4St7rujwj5dpvTBVc1GD48LSRiL3AytQ",
  "key7": "44AnjdEqd95SSocpsg4Bo7ppUmpCZSctgwj9ATR5hC2jm15KpcwAMWL5b888okns8cKuecjNEsheJo9JUXgD25Qj",
  "key8": "2ysDnxFaGfubHumtKMQ5zRWZrEsQ3bS86Qkbnww4cKCU2PjVTdueu5TcFTj5ym2QtdnfWdKroERmewaqhs9rTSbc",
  "key9": "3iFqm8Gv3NNUgrQpspebikpNM65fy7KU11Tk6dm2GseEgiBbYi36shAsrKREwoNBnEAw7poHxs9wHN9WM9W1hWKq",
  "key10": "Sa6MWaWxqeP8byyKBZ1LfWp6yAANL2CrT4oakBh36hkrab8GJRNimjaSRsmUQsEKsr9Hx87bCpXLnJWZob44Scy",
  "key11": "58rbWeQ3gBqGWcqrpG1T9jAtmDccVze3iq2vyy3RghcvpWbo9yrcAb9e8ZA4eBxwrrAmMtsz9rn9Htj6xNdpp2AT",
  "key12": "5vr4WqVJMqDEFpJ7PfMRytiKaCT36pHLRv6mJPNP8aaFazLKSRCLM1n85eXqrLUgT561ep4eDZrGEmeWKH7qnezn",
  "key13": "5dzZ7QesuQmm2bKpnDXDwvaZpYn9h5V4BjXRZfNDbQp3TAQBfVJk6pfUundhmLfFqwSLkupuxF3jtoiYkL7bfLWU",
  "key14": "3VkR7YfU6rvkDWc6BiYXGyvhWrv5w86SuzUdYf7HVj9aWbATupUNZQnv9Hh8wndFMn8GSgXSKPF3KVJCwesYfjbH",
  "key15": "3FUpWARfrxxdi2JpfCUfqg4Aaujh3iJG1tHQdeypKRGAtjzkFgpb13uvsAUnxs9WYhBr6w47mCa8Utww2RaVEiYk",
  "key16": "2XrYZRY2yHMSiStZsDn68h3M9gMJne6WDmdSKHDMWVx4gyv5TSAy7GkqN1RcggHojAyMyXusj591nbvm4h4SRDMx",
  "key17": "aTqNjHjLuMYvAC12nYthLVuFysKag5vbvotoB6S71kn68TWG28ApHWppPiNbKAaQDjsSxveJfzFuwMLU4FvWrys",
  "key18": "4rLUHuDAfaFWVifHuungFaQ8Fn66Uoyx5Z1MHpCwH8yjYbvS331UDApy1vAJBzSgxisVC8MwKdmXeq9AKPKPNPxL",
  "key19": "3XRgRRpM7kupU9VvFZd4Yo8eUfD1VN6XBsEjuBeSfkhEJymzLj1aZiuaTaVBjt1JN72pm8Uzw1gYM3tS4vXGKdK5",
  "key20": "4ZXFC3VYypuBkH3nNdWvhqNnUkHxjG1dxRKhpSEuVeCVkH5fnwoB4E1VHjaxRryM3qjitsRNmd7k3DC8oq7Vp7wp",
  "key21": "3UYU7iLmL7jEfoCymqvouES1JxceETpqML7LxSLtcTmgrjDYNqBF3VgzxBSMb7J529KiCgLqPctaGSpgtP8B3PZS",
  "key22": "dq8Ukiu7XdAJALnvEksrg4LgvfkLN9D6UrzBoUCeDXLCD7sC8URXC1wDmAX5m9fgPsYPpoNiBiLakmDARk6qXja",
  "key23": "5mT1UJfVoDDh19A9mtpf1RTgMaZdnF8VbTLPAq8rLPj7g28kbZJ1vi4g68uUUu3kkZCPTmHB6YRyu65t5961tivo",
  "key24": "2q5Vc9U9GWHr74nQKdY7Yd5YPkpnKZoKAgr55LmB4dUYtTgAVLB6XJwsAKU2f5z597ZGDFxNZgk8EcwqBamkhG3A",
  "key25": "3N3KWT5jy27wB2SbWtiJLhX1MgUGPffUjHdR5DvGwJ24chgHswS7xEd9BZNoJ9DGh5E3hZh72rUjnkyuraE2hLrn",
  "key26": "3ooCSauNa8hn9bVh2Arq9bMoSAFfMxunZeQ552yD3u6ADXoeDwMBdenejMGF3XhcEBAjSMAC83dcqnhcgb8KHSsa",
  "key27": "2ELM7LJsC5rxgvAKahDKUmXqMaq1sBTcwP7KZV3Y6JTuo9xEu7ojZkUW8ihUFto8Hbm9FxmKsoRfMqwk5VdBKmH9",
  "key28": "2yB6zj6PdqBqp1ZQjWMHDU5WNV46jjFdLonVWddV3KFqEV9MLhS3HNcmXBVATneckwND3e6c3U5BMiBXXYHigik1",
  "key29": "5pvkfdzgj3gfZrNqpMvb35A3JpUGUWkesYyq4p4GCK7RJKoZ5AHCPsDz9GLqvZ2yUeu3PbLyKPw2Bki7y6i7Qm3d",
  "key30": "s1j3hV76mqK8HY7HKNtTfHPV9eAq3jV3RB1MoAAD5sn21Pozyd3agUicsz66TzEqbLajUdveGbAmTJW9n3cip6n",
  "key31": "2fBxMsubrsbVSNt6t3Z2FNForY1M9LfNRDkZzWtf88FbXqwNq5TQTsABQpfnNUNHqcF3NfjpGQEZYVPbSUDvnqMU",
  "key32": "57tCbpHfJQ5QNmEZrtEgsQVtQ3q7q7PT4po7oyp2FtUfdmSGQUBhaHL5zGTMfNw3VJ6V39mYjLawEohGPCKhR8fM"
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
