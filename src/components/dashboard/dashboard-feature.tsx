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
    "4SsVoqyf1BcpjE25uwhuGRwVZFcgAfMpj1rWcoGs98WmDaq4rrzBXhYA922T1k6vPEFZY66skUowhmXbxHiRUdkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jm1Xx88gVUNMXi83ap8UvrxtmQXs9VRfKgiohmV7WhhowXGpBZg68g38LsH722fCgLZUgCm7s3oDkKhUWNvoXWA",
  "key1": "271Xufz1b9GXAfYs6rmSaA3MsPjYjGR9JusTJ9jzJUFejGEDvNiLR7v8jakRa4RZJ1h2aL72vTQ1v4irrRZD8QW7",
  "key2": "5wTjGXity8HTQs3xTk6uPJi1aN6xofnfhyi1HdSjXVoj34iwAAN5TuctR9EWsagn3vkgzsiPppX2RFjaGH1s95t",
  "key3": "2PZQcBzmc5YTUXvU9ME5y6HMYpbYiQhEwqBJF5XEvf4qLo4jvJoqQmrKQ9rby5vTJyxs4Hwk8kuwY5cqAqXsqu75",
  "key4": "5ibAA1uh5Lq9jyMbEDhdFvCTGKfPPnb1u6cN1e5eKUQ59JSpTYjVUg43NMnZ8KutYoBMi2seQD7sSQeDVT6ECraE",
  "key5": "26SC99iLcNgxup2eiV7GcNcD95qUHoU5AjnSnArTS7igADzTod2eHXRFWWZFxjLXa88U1vYyqdkHt6fM3Sc3d1Nn",
  "key6": "5VzvDPKxmswLezq7rsbMCXSfVGms1UBsUFEfm9RVEsbHF5TkCEDkZqQv3HVGL9MFTsw2Hjne39M9UEQpeaCkymHm",
  "key7": "2gNXt2kfaKGidXBc2uxQnGGpQm9Xjg9g6dBgiPHRHxaJGnEX6QoBYdEcHpAJidwukNkgNtDb4cKDR2tvGomu3idY",
  "key8": "3MQBnKXGd5X6Rrv2fc9QG5vSvgz8N1t3VjsQRgx9yXC8Domi1bsd83tkVFsNAiVnyvyYR5V5W78Zy3Bvduc4zDT7",
  "key9": "ocBdHPiaGTSgXUUpeFx1STMgwvBxKPnoPUQqmBKf5zjWc3uAZWSAbAmm2MstxYmX3s82XyT9mJasQmLUNHQdMzo",
  "key10": "59VMbbWWaFHQ5FNhZMCuEuxAnH7sWqQB53eF4GPE7L956XaotMTG5fDBLwRbMfoRdzWw7rLD9wT4D2T9s5xWm5mT",
  "key11": "2nMqAcJWWtXjc9UB3QAiAEJLHiz6Sp9rKkV7oSASZEi3HrumBBPYYS6braJeQ2bV1ccGDi2rwNVSiYz7WhnbB6rH",
  "key12": "5SbHjTd37ps3dvN7WjTyBbP9zhMzdbuWQkCzMZrbvb7YkehJR6aRZ1FviDFJ2qD5wKv7vKk4TEbpwZzgANDhX59t",
  "key13": "4cHgeB2jZR1d5nmc8Q4bwBmcNqCGkJDxWhjKwb3iBWh6w3GreKiwjm934rrz1FY9XwqGk2J3zFQhvohY2bYVQ1T9",
  "key14": "4YV9qnLTyekvyB1ouLuUPGvxsC2HcvtbgozWQELjbJmSMerafD73WDy3tayXECzGUurdVu38f1PVTvtxXrMCp4ps",
  "key15": "4AG1YAwAiWrt1N3LoddB7oMgXys1HKm4jPT8GoftwunTnFhWLBguMY6to9eWeMJpkNuwmfsjXmb9W9d9hiLpH1Xq",
  "key16": "3BMveULWc9Ma7CUhJNC1smtcgB6KTF9RFRK25FfrLtMwPZgBNbdsyzUJt7kz2CaPx7zrMVAnD5Ukmk57JMUhDxsi",
  "key17": "5P99VSxYcsdmiegqY7XecCdbFjMn98sz9cyjvN2xcBH25o6LXdpKoquo36doqqznMdEkYB1QnnyV4LThaEfzTact",
  "key18": "35Qw99LQ9m7nCgUpArF1BKYNNgsmYj9D4fHYpsf29HAAfghrT8i7dDhMjBLvsq1PsSaM7Nz8GWwtetbZipYBJ6E7",
  "key19": "29tj7omJuXsn2RAtKLXFxwESYAoqz97KJ6pj1jcsGAhxoHbNuSRp2MkyP1CN5jvhmvftBCD6xf153e6mTFBUrwQg",
  "key20": "5UPuNqBpvm5LmMus55JKF1riwXw2LE4jRnzwL4i9nmPhyAYdS89nxLERJ3GqHeWoXdGxe8atjUs4a6DHxT8vUvFA",
  "key21": "647upknE2UqHTAaH414SSf4cF2Yd3AQfhVPYS7UqZH9MiTeqz8o1rv3NHFzWwuc7icJWT9ypeVogzjnpkbaVi4Hn",
  "key22": "4mTjDUyW8rEHnSfVCMXFcuEc5pbGYVuPHKUmqvkMhLibVRTnmMNfWB9BYZcMXNhzucMZn2gKym1JNKwUEPY1WSFe",
  "key23": "5frpB4U1KZ9Bv8bsdqPA8JSDvX49H5MxNimtEZKkyprbGwa9M5sx4uuMXC3tuY4i7cJapXdEMSq1YGX7M14hLYEE",
  "key24": "5oJkHDjWe7yC6iYHuvPQASTypJsPdmmjS4YjEpnUdSoDM9NhcHvxtVDtj9eNy4GKu39jk3GiCsQXAsvogWtVNki6",
  "key25": "2SXF8KYBQVkwn84fwyigfu7g9MhGwMpJMJ4AYKypziZr564e2xXWDi3goMdQiYtZda2Si8JYk1KywJVv3qUjfNNh",
  "key26": "qLuU9MsHFna47vro8L8eiYwzDKLNeqNrdnn3uDnLmqWTnWh2qnUhVfDvMTE8YU1iNAd8Gg1ouychage6CMfqeY2",
  "key27": "2LyKV5bUjLG9Jj2nVqA3DecJUii4dNmkA9EbxPTZbuMJw1h5ghtxsCPJAxWtNfuuhBwTBf4uHJUbsmwqAZPfBfWt",
  "key28": "4emDm6ca3R6BxromDHUKeb9gQwsmfekT3Gxe9gwZPDeepCkPRg9eHS699vq1FmKZPnoEKqt3jhRNxKS7RxEYTSLc",
  "key29": "3ProXigTQ5iFkDyQLSCF26bhjrV74o78q2oDRvAJNm3ujPdLJWhU5GYVUhMdiEziVBx5KgmLKyUp4GyVaRcmu97m"
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
