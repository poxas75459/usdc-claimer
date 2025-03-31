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
    "3nKxzXdFiKVnoxbyHCFepudkDynandWpi8Qp22B91LrTU6ucSF27Tj32rPdsDzrXpiVSXseuGXPscMJbLVf1YtQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pGyeYrzRUFuM5V7iCKHdteDyi1YPCp25JnbRnFqDCeBYprHks8aDE8uDPyxdbv6sS4gAHgyjX4bkvzxoXXFQbNv",
  "key1": "2D8RhTmmpQxuPcfMnMNJ1a7JvmfMJdmu2yQwT1eYZHJFv2AKbav83GqfTJ3iLLPo4tntVg7xpwvNMWMXay3HozS8",
  "key2": "aPamgQn8q54ufJE8V7C3w7K17ZtcFsv6QceMtZtxMRdLExv95oDYX2oNe7KaeXRm6ffrursBrSpC3mfCpJaiZvj",
  "key3": "5VdXCHd2xgBDsfWJXbTiExFV9qdrSCZdufD7ezPsJg8v6zY8rFphUSx8QFZy6xFTTANpdMPRqkh2tBy7ZK8SmDQk",
  "key4": "24DnG7BoKFXx8LGwRV31jAkRrUGZvhSz3H8K5oPXs7uTGrdWgnbLcAsUaKGvMd7vyDJMRsW2sxMy6co4FVu4echD",
  "key5": "7rkVmauaH164vUb8baP5kU8VxAAigctHECgCi1i6i92WvdQ1RnieBbhvTciv7tvPCmgA3ejTGrtYe6TMe2VGzBs",
  "key6": "4kWS9SNxWvy42SAw5aB3NBMZ3W6EvBvt2UU66aXXXx3cP5jTqhK8rcY5EjeNr3xwM6PJ2vwwA7S3UKFYjEmBS97E",
  "key7": "5yAjhWJLU4J1ZPN988yvLfLtmX62rDZa9KmSHuoKi5GF6SYQ5eHyMXogtnay4PJuwJMpuM4o4hRq4evnEqELoK63",
  "key8": "2VzoK3YvUer7a8M4WSEuF9HyVCiziPEgPUbe1JoJkqvBht64WrHdcTqZyfbHbED8fWTep1awoGNGSRE7zkVxWwWT",
  "key9": "2z47SuEXfvT9yz8CachaVE7cxvxYzsY2i9xsPv6CYboceVVdxTXc2UPZRF2MKzxSvThEc8GWHKq2Q7ko2yDU58c2",
  "key10": "54ioT1qQNk2q6beM793WKo7yuDovxtZ8G4RQW8LbavYGNnY75UwNpAgZ1cKWcEh3uf8fNXL7hZNexXHy9uBCRxNM",
  "key11": "5zpYwtyAoAAnRHEyaQt8oGJMZ98ddd29mCDDYUeinm251yKuj4XXaRnuhPZqLbD9Um9jGRKYC3M7JDRLsms4osjQ",
  "key12": "yNasnq1rS4sDnCjDhvFmPQ9rthAer4Ggw7ozTVeykjaNCFqJTNEwoBKqddfP8tLQVSTYM4SDyfZaJiSd7JZKhzo",
  "key13": "58Qhb3qstSYCuouaHgpwzPVqQzNUYPRuxQP6zsWYpJLSs3dumVEqXnPDNWehLwCo8RihGbHAdHoM6yNyciQ7FLqx",
  "key14": "5pdRdahfibuX4p8Wif5qzoCSxXuagJoPGWKg9tApZB3u9Tq33CXqiRE5Q4pkHUB66SwChhVCwE69HrbYEhSksCGW",
  "key15": "fihsEQTaJd95hBoqPY4k64yHSss8ekvSujuZFtxhqz5tkFmmx33uorq5UaWSxSWxP9UUbqu2LjdLSghspSDkmxG",
  "key16": "5UzTdMPsgweU4yS9vS8MHPFRQbezRHQGZ4uSxtAJSh4uqzK6soZuB3Wy3nAif3FRUu2VfvKiS1h3hUnwyb6P4sUe",
  "key17": "4LAxbEePyoGiAKE9VDtwdbrjaM7ifyioPZPdq4473udNgUnuH1HLeDnM3UhmdBokrnHA7anve45hvor8iHrrcNX8",
  "key18": "4nSKDvL2Jgf5R11LF52zjevDavfWauMeXC57QgPMQB9d9E7Lknpq6sxFPZGqpQAKhMzvMdC4mBVkJLnKpUqDQJm3",
  "key19": "4HKFqsFqUd6BcZcXuVWjjzGsuf2hrrsW9roD4eEaeo2jsV2qr769aTa1y55QQkLr8p7dNQSEXHZFbDWzQckSXjJR",
  "key20": "3DSHhjK8LZN8JeSJy8j3vnjVztHvhfrWdp3xBVBcTaqqDLqPueQ5os3UQgXoef3SiSiKsDNnuFG87Emzsymr3igj",
  "key21": "5SEnYzWhdJTwgQWruigGAjor2cBhNDzLCWtxKT8dbuMAzstq8E1iTEGCoENpVs1VR2Aq8UNFauuW4gQy5Uwkt6oJ",
  "key22": "zLVSjHp6fLRoFJb9J3ABv9sr56jX8tHqss37jkjE3QKeBYy8ga5iFiGSXQd543mDQREtiqWV389yLVcQXLcu3SQ",
  "key23": "4uDiDttaSUw511PeiLnrn24tqHFHFFQ57KJrp19xStTfEApYzHg2QgAJDkFGq2XvFnuFnriQgBVRdUxxoF1fYAi6",
  "key24": "3eXgxF96YB5TYyA8GjDy2Lbbix4oFfBncFVjX1qV1MkUPhQPAsdjXtNvaFPvfTukVTcJLBwG4RRxK4GiQ9F7xsbK",
  "key25": "jVjqdf9nvkRcHKDX7SXCH6jZXniQpGmBAa8kLZY9oGio15fpjNtf7s3ee7KeXHQHriFZM8ZFh5bJD4UWHCXwBiR",
  "key26": "52hvL2mghpgoR8BCHwGkXgnaRrweKPc4MoUwcF2NsDNcticTceNaVqT5xSodpmiiVhRdYkAv4BMuAcKweoq5dwYb",
  "key27": "21GNFjDauCah78L5rSNquumroe6uzC1Z3XMVZGoCpbgsFrCRwknSwGMAWPmRhn16VehC6daBiZbz6UjGQvPeRDPR",
  "key28": "47AUDfaUNEKC1cYKVzhmtHHgrWuScFCeC6fYssieMsJe1LonNYE5PoDF5xS1db66HFdLoNf5QFFiPBUF3ey7Dumv",
  "key29": "3p6pdVHQ2CWWFRsw5fvC5voGfZLFnA4WcxxYqBD2aLxfFr3cLHdL5KdNWZJWKVinuQMWgg7UZa15i7WxnqM5dsTX",
  "key30": "2ymfP6usYJ9vp6B4qyxcDRe74YtJgUwR1jkTYrcw6Ce1SeyuRBVNR978HBui6vQbs5jKip36kug7dSh5znaMubSc",
  "key31": "5fzj2xiTpQBYfB1hd6P5JMdjAcUpTa2A1YUDou9vtuAhvmZKENw4yVapiJMFbWePg5t3WXHZxD3Xy5ihWnmrxq9B",
  "key32": "28wChM5CNDj7gpc2vWDZvS9j7j1fJ3AmmBRUEixM494zZEs6MNpZejRKHdtPgM2qjg2QyPfWThyeNWPLLQGSNFgb",
  "key33": "2wYzmyK29utGz8YQ3uqNhwD12ALD3XRMexoY5cN7U1y3CWGhQ1mdY5GJzuDY8j4dx44wLsPGwRY4GjxhUvQNRsmY",
  "key34": "3bZyyv8s2guDg3XS7a7LvLDxqFDTFWX38vmRrBnX2np8sA35D4UqvSDnbQuDz5keZfHcggfVD9DujijHw3H54Ye"
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
