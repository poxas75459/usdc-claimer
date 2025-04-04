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
    "3YD9rsCeEbP2cgfBUrNFwPQJFxCV2wG13WybPJUoondwRUPhx6KWeQNpXm7RhpkfLuc8ohuMLYp7UtZFz74VTMoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tpVaq4qY77H1mkgWJ4EZSRPXBu76JjUgXo7fin32RgV4FA3SNjVvzo5QRs3NqHwocnNq8RVv5PFhSdLMJYq719E",
  "key1": "3vs8qRVn7N1QGKBYc4FeDDZPA8EQBsEeYYmEF6GPqRHiRDEWgUA3oqDXArmwdEN1H5GAc6R63PET6XBfhf9DrCA",
  "key2": "2KEYUg2LRdwjdsSwPBmopwHiZ3kjjBf6f9Qo8dF7PiZsm4x8cs2DFSpYcPp3kkpt2h9bLEi8pWUUSwvf2GeT2e6K",
  "key3": "4KoFEVmz3MBsw3AiQn5gmCqnZYESCxiPQYUKt6Xis4oZSxpY8hb419WzsznPd7PUAk2r7918pRQTbWvoHTYZpfDE",
  "key4": "26cxzt2WVUGUc3VNX4Z9sfu19oDveCybzoC478kgRjzWW529ezVL3GEMVSh3g6pbsubiga2tY7smYStuP5Rw4Ntu",
  "key5": "ucVwnPkayTWfjENnnsU3KqZh3SF9pnNaouvs9hMmh2twcjXvpgd88Vj8p2k8io3CpR5vzpzNx4fmEiAiW1uU9XA",
  "key6": "3XyzvEJxSdLzv8F96SCSAuK4Skkobqa4Jkjh1MHtWG6Ga1pd8ieujwuSpF9ECio999xixJ7m15aZmrjXrvmZCVpe",
  "key7": "3eRoxudcnA2qKv8Kn91HoxewjCCxkyZgzEzQ5j8giMruGu1x1hYf31aL41ghueTuRTb6NwG7CDhTERaLcbrSrFbk",
  "key8": "5LezBDFzLL2wKcBbDJYNxQdzprKXQDBRHGD9npHBcb6z7wsKyxPmMHjDLhxA7HbF4y44nubcgr9m92DAWCscWCxH",
  "key9": "bZPrQLbr84oabwwaNXftAMePSK8CLyzjJmJ8NSza9KYVCauXmvvdbZSV9kPbTxBPnGVCj5RQ1G3F2iyvZFQM4uP",
  "key10": "39JFzA1fW1VFD3Ce2iB3KpXS8L6A2vLxRqAtvjCRHJSnXcXphX8rS1cJ1YsH2fkxWVH83CR2sh4xcEFP34AfVgov",
  "key11": "2ErAwqqVNLbq62X1vqXzrQdUShujS9hKGj6kyrUWs2rcfGtWXejaAfkh33eVuA62LwK9End3kgnugUyUk6MetJuK",
  "key12": "RpdUJdcJPtxEkNHZae17kzojfQ5UKcw4QemWpLUfa6Zda22ytgoddvqtDnrT1tZ2vcTgGKfcvp29xNjNjjDsZrR",
  "key13": "3KV6Ha4b5XgdBgk5ik53iZq6QUxFDLhHfws2jzEseS9jPiLf4mQnRTvsrrXdUU1F8eYdziDfRWLgGiMMPLdfyRQ4",
  "key14": "4CYNBoTzcDnyJYVUAJcLyFgeGtfX24ARFwqsZqT8ChzhoSZpuNmR7z1wS2UEZmM7X6dzEsm8oTuWUqLDxsBRFyDr",
  "key15": "4axWGeTzx5QxQdpXrZYbyAogQEP4fENiu3RUPpcfZadVP7VzSYY3QM32WeYDURwfkjQEA3EDX6LhX6AhrjD9bqGK",
  "key16": "2EnNwk2UvUntcUogQA5TxyLpJXjaGMgRsGfpsS8g9CnNmj4WX3bDZf64ebtTDEFXRKNjp6G2FuFtQcBVyrPebo5o",
  "key17": "5Dm1e48oEV4NDG4ZjUYESG18xjzK8Zq1wnChm2GSTHiKjKz3JdZ3wknou7XDYZxBmhVGL6Ckgtwup9q4rR3nanAk",
  "key18": "3CvAJgXy7tfxzpPHTJCJxjvAXkNefUCPicanEQa5mohJhxsjSjN4MKc9Y6NYiTBVJZh1C7TpsDsx5LP7srymedYa",
  "key19": "4mZT7r1G4xaMxpRq3enLifDxsU8KA5YHQm7GHavHQxqoj4GyhesrTnaUQNtaq9fYstsoD43b6FrtTYzi7kirZpMS",
  "key20": "4h1rRnkv3kUzSZP8diaM8wd6WRRD59yWyiN9EAyMp33tALZexCC2rLSPLYo1Xr77phf9VE5WRp5yHS8tSydFtTFt",
  "key21": "3yEmfXtXtvBmQnpdBJJH7g5z2u3triYxz36P4LCJTFjwavWaSBGWsf8cxez2WwLmABDwCkAttpKkqcuo6MC3VG6k",
  "key22": "auaTwVRwRHymGhAmmisR4NoH3cKvKSSqrGQ4bKvvcyvJTTBAM77NFrZjEKwpjqrGRdWnQ8aJYLRvpBfJXdS8CBb",
  "key23": "cJCFryMvenS8wqw3wxomjsmzJ3Svm5m1tJNsS79HkVy2F5wAQHRP4pXg3FdHHkp1mvjJsKGr3tYqPNfdWEgy5QJ",
  "key24": "Zh7oVzj32aeAMtpfdLpivPh4aC7ZXDFYM3wD4GzqvSFVbrp6QmouzoQoHyAQTCPKeHfqbTWahBEL4yW4ZXw9yN8",
  "key25": "3jzeGSY9g5NyStA7Nk24FPhvfWkNgrVTdCqNYZbxFAnhcA1HVi8PeofYp8FUmzug4VRn8xBsrrDt1grESjMpbMvj"
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
