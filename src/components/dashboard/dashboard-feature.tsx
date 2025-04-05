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
    "4yhK89hMAcYP8q3XJf7mYYELs82MWY4WuDLGDHS788Yx3Q592zQhzuyQZfXcHzqVky8T2wJP1XAwN54xYeZMFHqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gMye22wBUJho3rKc41bT5GEXdiwhkNr4EL5bwuC59MUQuJXW21RhjtZET5FTYopUjnvrZua38qThQHfcwpVZxgJ",
  "key1": "39WizDLLJe3ty7GPvvbdzSGrcfSkGqzHFXEA7bxWA1MgG4b8tKhH2QHEvQXYdzGvaNj3B9JGvwwKPUhxHGZKZufw",
  "key2": "3Q75BcmW9ASBzLRDZGNC9eDPVtH5WUBzhUb3wLHuWSCjdc2RhVjxfZsqzSboGqcSQxSMNW3gR5397zo8mFFpmAWS",
  "key3": "234ncJ5GxDXn3EkaPkCjCygdXVsRnRceMiGbnpFJYpAJ6AYKanhShJHCdUsQLJkfwHsaTaHwJ96L3ja3ksWdynC7",
  "key4": "5QWN5KUwMUnGmYYUuRLXraeACDPT4SS9ugowFwmHmvYg4vr1unR4nboTYiCL5FtvkCVtoNWicT3Jq8aP8Xx6Wm5",
  "key5": "4aS5bEXYqaZyP9x3qVSwVWZzGAUS5d77oReYJefpU8rnXLU6R11gUYokcbQpGxqsi4CodBPqJ55N9xFVe9NAYKad",
  "key6": "5LpUtEWWLBGB51Tzgd3fmkSWrTwFzTcRWspFtPYLmouoEQGf28FnnRqmf7txbKQVEZzPhrUGdHLpUY75mSvsr8Hc",
  "key7": "2AQ2Q5C9rrNFGYrKvtBVowJTFnB5ADRh3Y3yznCaXaaqYrcUZQMtsoq9SNqbPgcg6tKSjgrMgiT8zUUotYMZneWB",
  "key8": "5w5AL3qNRosrda2ZTcrrLek9wpTFr77f8XEmHjRaTAfhexkNUCCN6eyXxXjpZDAS5ZBYumsaN7Kd6DVc6oygzGuD",
  "key9": "3DDqzLyTmwFSiSMCYbkVhMxjjicj9wKQWAvDrp66dF7fPiqcsDVGxV4CWg1y8WRST6RdF6zmNeWRrjSfp4Pd5HoU",
  "key10": "3sHNUmvyHtZWCiUhvcgGm5grvZYNXZgkbxub3hpT2YCiLk1LEbwvGddcju9FtVLdCU1XJeeM1YHYc31UK33TB7Ap",
  "key11": "27uC8aqNaHdR2FD1JrursrvAr4VAaDiigpCcDgy8rcfDbZLjV7DHN4b4zSctpZfpYb5wmnQTAQ63NunAZSFcgyag",
  "key12": "35QTyKYjfmLFZCAX5AXYg5XnbeCwthjVidSex6g4KYQgRYr5d6cuEV9c7jNFfFxq5gVdY71Su3ZDHVbmRHf5X48i",
  "key13": "3pieNEJy2G4Wxvd1rFoNgXGXbemAyt9cNkgVM9fxb17WC85TypFgdoxPaYD24pYEicqXgQ6RNZy47e9PfcNUSkfJ",
  "key14": "y1RbNQ6W2RH5Mpecp9GhuMwTKCpkhKaU1K6d7yU8nECV9yvdiGRD2vB1KXe9yi8EpAKuN45VU61XAwe4fHGKFqT",
  "key15": "5YKbkpN4XxRuRANPZywtwWkYnHnvX1bMJ1JEDtctnYEjUStBcTpJUSX2Cou5NeSJcxrGraMC5ET5BB3JwHA5vmpp",
  "key16": "5CjTjAdDKEvWE2cAyeYVDE4wQUDxdqMZo7rA8sqVS3nZ6AAzkKMRF8y5dGZSVyFuZXyr6mTQw1gj7ag2yK5BHSGW",
  "key17": "2LSKwnum5FTU1BSUstpy3qPMmSEszgv1b6LLxkhp319rkPFh9WgCWCsXLKpHqna3zwMvm4TyAC9YsAibA3pXqUz5",
  "key18": "Y2gge3GZztWJrVrjZsivjVjbMsj41wJf8gHWW7J5byU7izoqsQuxjM4kheBatyePBnKrP6uevSLgqgKBGzT7SUZ",
  "key19": "bArvoNGn7zTtnuctrhBPWgQW3ASJ9wEnT86nTM3HyJ2XAo4bSVmaxRYLW8jnPKe5mUMVP91Zm6ZTUriHWez2veW",
  "key20": "nnGGTdDFwZMvy71VFBJTU2U3AoDuSYdR3AJ6jfn27hSmdY4hndTsHbg7AHvrm46AZACNpjhqvoXh53L2qtatQ8b",
  "key21": "61piYnVkhekLUK5DaHTu6r358WYt4pFA8MTibM9CcSJ6hc4G8RCiaoL6pg8rZtDNzeNdWVetQmHbVVbvAaiVCeNC",
  "key22": "5y3vAVLUD1sxZcbV3mwTJ2aPk7JUqGJKkpsV2T4zaiqJjcFgDMruuUWWmHLyvSumWX4UX4STpmTpMTofpByo82A1",
  "key23": "AN5m1Bozrawk2nbEgCdZLiFYWs7gruskZu48b7M9vGdbb7CKeBNjnDa5cbZ2DMCdDbFkoFNRWp7YbpVCAme1oWz",
  "key24": "4bjWzALvibyApzLQCtxF5jazSy6op4SD9b3ZFzzktULhZCFSu4wGpihAwgEF54udbhGbqT1hKnusZn3Y59DvNrEY",
  "key25": "5d2Gcj2FEkLo1CnLB212rnmSVLKDW5MLPE4M46SnjRwtm6NMVQUZTcioaSyazZAGvMpyfSQMSnx5gNWUEqDj9TZq",
  "key26": "2bzfm2eAyVcPysgPHraQr1GVQd5bfQHyEtjcXnhWm92T3nP4BukU5n1qa5XvvYm1smQQd3rjEviPdEYGpgbuNBFL"
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
