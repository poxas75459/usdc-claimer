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
    "3wLxPPJtL2UEvtE4Rb9GYCaRNo6gQKAHz9wZLyn5ZEmRAe4QW93oAM5F8iDnfuFsjvWEwLcmNGRfmvbh5sqJhDL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YzSpGig29r4LTtCnVvtpjtoGqhai24QqG6GFLZf4aVV1bhtFiHqwPQgMa44maUmHh1Huj1bLDeDctB1ADgZmM8y",
  "key1": "2NvhmKmTyRpwW4UmDyRAtf7HReU5vRVDwHfEPK8MiAmZesHwM8CvU41a2cHpb3w3XVtKcYys1fewnhtqRbjDAj8f",
  "key2": "4vkWGLYfaNVAtrtW53Ta9GsWpqTkfTJtAMET6d4PBoqmzc5sRmXwGUL2RtS7n2qE91j9mNfzMWbqBRA2PA9AbPb8",
  "key3": "2UDcwCuEMwR4Ba5DrJWiL11NMdZDqvbpjUnvvBkUZ9B6dcBcpcPRyupP6dcujuiNbUksmGEJ6bEWj4d6FtgJ7nme",
  "key4": "5CxJ48CusFPh8Z8TKLqieEjxujGL8Zu8qLf6g29PpEZsL8hmCpzrKvPtZHkX5SUpaGzTGNhdY6NCprDXWT7AMURw",
  "key5": "3jdafBR14djMmtBiDxsvtyuNj6Wkm4TUwQHCMg7VLcDkvzbSbh1NuPqn4E8ptdcbMspp7crM4XbMoLxH9imbkdUq",
  "key6": "PT3kC1Z91gMapvWuq4VuY6ECSpD8ByUw9YLtfthymzDSxG937PVF5TdXQRAhKuWwWsV95NyekvGS6dgXXsiHmiZ",
  "key7": "5GjqYAdz75yWuuLnUpWXtFXcD8q7YchWbZvJUwcgiuPiimzbBGx3Hk6YMhtBBytX3C8fGEEKqU9ChfVf6d4TJ2nq",
  "key8": "5dwVSmdrDj43J6PtRmwMKRCAdpLTTHmoy1PZW889q4qynvricAAhhhNGHvKerEawaD4XiamG5478QGwVgrHBWyzB",
  "key9": "MkegRWENrGdFuURTuuvan2XkQbEzkTV8uBu75gtQya9m81T9Sew14ftPY3wnCBxiKtiQ8yprzbQuUBYmSuR1nK6",
  "key10": "3aUpuUDSGm7cQ43tuaMYwTZSo45ok6dRF5W2U2tSZKf26dwyZ3bPGJZeG1rzD7Hw7NUYbB12mj9bRk3RireX3b4f",
  "key11": "bcxHN11HrNz2c82VLN3vHHpy9TRE22eN3ZcXzxyzZEQ9iW57HF5HqHA29z6MZhdS5vC9nDpzwT36Lygm9CVvsit",
  "key12": "4sLXmUz1s1cW6Ao4PrkDuKsFHCGmKxHUvKx3WnQBGjSftvPMpmASyhhXBoTY7cRsjFUpAetE6UJJMVs7ygHvhtzy",
  "key13": "5WRNSPV4UwnT2qUd2GDngoDReqUhNMnzmJ2oLDuLFfVedhWo179wdvaxcYmkiC4tyRJdiULphEBjzW2PFpTLZGAd",
  "key14": "57riMyYaytnUdQAGYDEnkWWk5EpaHEnfuUz3CsTV9vjzi9nMbXEcB46hKKsNRLHjqAmcq9WsJqfR9zBgGAPphgiQ",
  "key15": "2ekW7HnhRNSQTg5Hw3wdk9s1RVMzTGdbokakGZYouvmr7hNsVumDmEfKxuBvq8MWeHFer93vTkoA4SG3kKkHpa99",
  "key16": "3v3k9YwHcgry1wiDc1StGzda3kM24VNh7zmr7LeMuu9NyfaRXexiGLnJtcTdGSHrPg3C1PTT4BaofN26br5S9xpS",
  "key17": "4GL584XfdGJx1n7C6fDs9CCDwhoMpGmnR3mwfEcY2FeSg58MZTmkoV9GynR8euQiKkwxri3K3xufTgHBzrVTGw4i",
  "key18": "3ZKxynvyFxyTwZxYyRaTKEUGH8fZWrzbEQKFhAQnx1oBkJjpthhuz2vRjwk46PVb8hd2uPWeVNfEP2LCGDab7fkF",
  "key19": "5e3tzZzzpwsVffGPfthduqiaX5T9bhBaDg64D5m73ndwjnjE6HXpykTkW2tJMajXqmvxjoXRtxEcqbLLgm3NT7ht",
  "key20": "tjC6JdxR9y9PQ127tMdM5WprCyAEssL1zGBNbbuk2hH8FDamM9PWAiEsiLhArvvACPNkUVwCowiyLvLAWmqe1yQ",
  "key21": "3nXn22jnYYRTzddyp6sG6JJwAiGeq6Egw7Ji9E2kVkXwCf8CvBqwV81wM5mioy7UQhuL8LEoZTfExo2vp2dNXmxV",
  "key22": "39NHGs9KR5pXQ3ibqgio7xwLvtpRrnByPWfahWkWrcbadzh3VA8ahyHmR8TYM6FHMgiDCzcxb4zSi6RHmym2UdUw",
  "key23": "2SGogxHUMgRBL4dU4AXKyNAaFDRWUgwzK75pvqfVzvWeFoY6feGhort1G1ua3ronCnZxyVdNmkrdoagS12WAyYD7",
  "key24": "44pcTkpKpyUuaDHhhkrfGH5nnLgxVHGLJ8wViSkPRkzoXZVBgF2E8bZd3s5xRtqmtCGVRn9yxdeKYuqKoJYMdTAH",
  "key25": "4fYGGAD8ToMm8gsNBF7t14rdbmmaDWyKQg6nzA6uww9sBqwPruBwkXdKAzJ7hL1KcXwW9rtiQzgTi6kxhdHo9EwJ",
  "key26": "WChnB3W19mj7kh9aUMcWBeLjqcrv9CvPGvR5WPUQP1UYoGN4QSEzAGfdPmVV47fWdPbwneXLYdf138r34DdGUaH",
  "key27": "8445QM7bjwZqPMoaMyXT8eLcS5cUEd9BmaK4ck26VoiZKV2fNKp8BeF6MRMdfJQHjMuwKf8M7WLMTdyew2eCdTG",
  "key28": "2ubDxHZnp4zJ4ddEVursMQ96FjdRUJXWSDDBrTaqzWrhj9AxCue4mUyHQcTTDuDarfNDtWJZQPzD11v2R4nUVmNH",
  "key29": "29cmMcxtvqn9kjufzP61sN9VR2PpiYXJg2GuAbrZHJfC5FSsC94bymiNKPCSdo8cRr1FrU4My4kyeTbqBy8eMZhf"
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
