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
    "4xzyd6FTx4tiRUVqEV6zTkCXCrS3cRJvVQyiGYVv5S9w8DSiAcoQnxQgDvdQDyGLtjPhYwVYB32mTu3W6CgNo9bJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64yzpTex6DSLVpzRByzK94NfiztHiwr85pN1ji4HvkqsMNdx2KYiThd8UTW88RD8bw12Reg8RjJePEPFJ8Wp1Bdm",
  "key1": "2QL3PELw61wvoFNoXK77EEtngPqcK5RrKvG786AZwFSmSAv9Fnj9idstoDodcfu91Qd4WKt1TMYYnAF5rP2kBZXa",
  "key2": "4VzrWNWps3qovre9oLZAWDPJqvMnWJmFQzm5tMfEQU6pA1tmSzbcKj18qGnffxr4RRjPqB3cqqgGucDAqDH1xZ2L",
  "key3": "G8Z53o5cohTbqyxThhB5og4UnGNE4zerEpJGnQo5ENyL96bc8KLT7Jytzz2Cj1M2qw2ribYAd6xr3P8Ui1Tojrg",
  "key4": "54c55QLmVsamo78sUBGaaiaqo4HaKETYBARTNqDQ3sN2n5UDHaUZjrnEyPxEtCiJLyjitTDpEyHGePSrydvaDQ2N",
  "key5": "2yDvS4orXCN8U1XUscZ3euWhgsbTLo53XRGk2wLqAmGhoCZxr3L6sJkBH6GePU7qxbgEiw2m76haqNjFsJFnUafa",
  "key6": "P3JvYL2tZRfs5JUio4ukRMGtErs6U3SHKUKwcrENd7CZmrJfnJoqH2owN4QAd3vVN6qa8YXWrTjYF4Rcn1xujwj",
  "key7": "5xPhU7DZX63HGfr1BxeZEqJjFnkkczttVqf8YK4WGyGxFGWvwutKkdG1RC8UHjFeh7uNAaC6fgQfyUZKH1epYh43",
  "key8": "2GcgU7gdUJ32HFutJ9MNzxztE58pBzKEcnjUnB5pr5nBVGP9Dn7SMWY1NfMntr5Aa3zTLYznH37TvK2jGGAQCKBS",
  "key9": "2fyctmNdJ2w9R669PQdj4YzdQnEehhTELXut8AabqDTvtZFjGD2B6qsZ5RTyAzwreVzFrm3XTtAbCzCzFpbo56dd",
  "key10": "4mS5cPKaJwpHCCm1WtBj5LkcbF2R37rz9uwxM8azkRFA1ra4utFyVdYuRtc3dJuV9EfN8ApLnCREaPhhS1KKARZP",
  "key11": "5Rqpn5srH3fozrSaZywFvb5tm4ShXE21dCgPCmcopPPTwTMfWTBydLxuBoSrrDhw9K6F5v9VthSDAsbMi6AgVwRT",
  "key12": "3NaccFmdYSTHUSj3GXXBSxRqGBpYKpmw4DXkDWhnjsatfczWL536x9EFgbiri6P6GAfYrStddLGMUZErXpufwXpf",
  "key13": "5aPtXYozgz4Nge5ES5BLRDzG1WeWdBhVR6LTjBenviYMHzcJ2mjpCkCos3Xz2ReNVBn4EcWaApdnDzvMKcMXnd6H",
  "key14": "gWesmEyPTHHxt48tHG9fdHTmHc4ACWDHSERFcBaC77Mgc7TrxkdHNYXcHLC43SvfSrMLKffPynfzQ3e4ZCn7oxB",
  "key15": "3VXxRNQGVF7p86LDjYzP4MXjraxfHK1rqHuDmeyxh18ZrsSVedgajqeZ6SVRq8d4n11oya3ELP7ENXnS9LtjfgVi",
  "key16": "5YcUcptEXuStPqfqjLm1PrTUdgr8GnDXFe6heC9dPDuuTQpvrv2Dgyqsu69QSVx8DtHnaPRsrp45bxSVnvD1WsM5",
  "key17": "3jrKTu4R2zGy1rMKYkwd8uGL3vd2h6QCyTm9gFwihtxKnH2BLpFEVFjK8BKhbgtnLzqZANANRA1Cq8f2aku2jrSJ",
  "key18": "2ZHbpqn9ScE8F74zAeY4ti88Pc6Jb4n37XkANNtjPUrhqRW9nefJ1PzpcZViFyrqov6UDEb2qEVVan23jwz8TA3",
  "key19": "51UkHCynvK6xpqijFUbkt7pi6bcGrAoCUz2wPqYJB5F3D9o2JRKB7WBDdb3ojf2uzKgnucj4gFqau26TkPAs6TGN",
  "key20": "Qv2KdPwmoTBow6QAWd7ExdCZCbxWNcjXKfsg2FBaDKVJB9jXWo4TJ3eSqNMvGHEofhy94GdJWqa6mKZsmHGBvyn",
  "key21": "2xAuu56hFwJpRokegLeM9dWM4CXr6HJKSmqikQy8efG89MeK3KXcyc8PkJijkNXeHvc53jPtWzHo7dQ9TYtAAUDs",
  "key22": "3dNUEbpeuumLgxc7XK5V2J2yeBSGYHtLp3DCLu9BFoYXuwJtFztvobnQtcEdnpfdGrtk5riNeBQ9PZf5WE6tGqG6",
  "key23": "5DDyx4adyXcBxtoFznky99r7tFaBrNT3wAbQnkuQFZ8Dyaf48iFVyAL2R2buH9pHJYkcEQuqT1GoBzxj6SNiLUGu",
  "key24": "5kJFiHFsrxNgf4DUw8WHPUkn9uoq8xsZnP8nD5U12B7YSMgLccHb8Gph5F9urEY2DaSisqYFHPpb7ofn5AgnGrqa",
  "key25": "4kf49ZCY5g6CDuxsU3vZRv3CB3t3Km5xgwZdbqczN9ipJdBw74vxcXmJBSGLL9joD7ipQKXd8rqGx9QgBKemfMem",
  "key26": "5pX4E6vyRuhNk4YdCBBR8izCkP2WaNHrRydhCUEuWMJNKaoFxmgVfnQRwXuMmN1ZJQ2T6qsjFBXVkZ6nkcJ3D2BS",
  "key27": "5p84ALEgS6S7T2BW4krsgqjAMgtboTwgiwj4CPgmfdwo59o8v4kNyTszoqr4kQmVwwuVodRtSMpS61dk5qtL46ex"
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
