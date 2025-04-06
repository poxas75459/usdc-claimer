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
    "2hFXmbjWaf7MkyGQS1Q6vL85C7XHYAqyb44QVTKU8ZSGPsoKZFmekPdX56T188C2kmHE89LuKe9hUvnp4bHh4PyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QSmaUQVndoLvQ6Knv4BqUtu26R6h55Q4FeQYzZGPNVxGPCyo7o4HFV9uEzbWw5zCtwJNMUuWV2iXBbLGAxxHtx7",
  "key1": "5SgYkVEyy1X39QF7n8VFmse6Sr8gbLe2FkRPXM2wfLDkNwAMeNLLF5jFB5NQQD2wJqDBComtnPG3JAkjozwPJauN",
  "key2": "G2fCc3oFvFg4mZ16xj2niFkUfR71YXNCC8bFTepqKoa8CkxUJTJ2wHZi6WEkJ6dKbV3XVUcA5wmL46EkMfNKYA6",
  "key3": "uZinKmAtGDDHSyYkZvHPk9SuKKXx9ZWccoA275ycizfEFhfVtSxeq8tEj1yHSQKNn3ZiK62BTMER72CFcXtz1Hz",
  "key4": "2abwic36yhVzrH8xQmNdtCwQJYTFAotV9dJ8LJWheyXNF6fPKCmiKegx5SjC6EQ2HBo4KZQns6FqacaUxFeRo2P2",
  "key5": "MMb7fNdpKJV8ZgCEMGsnekrbzGzMHM14Ao19tXmGWz5jpPXQzVCd8EN7qNaCJ9FbvndGXQ2UyhgDsjdbLnsvKSu",
  "key6": "3aT4sP9UeTXA4zLzpHUHoWaeKgvPMdp6yRwDLdNppnEsKXEjr9mFykQzVS5EKoQtJaWMKskV5LmqWBtXGfLSFmiC",
  "key7": "3zZSuhhnJ1RCnrZKNcVM5vaMDbSFuhEYt4wuL3qnpycwfEvWowZLmVnEZg42ZwoshJgEA5itkDfnY9SgAoaXAQUs",
  "key8": "3r58yJtfnd5AfNU4xRHCm3o41dVZGtnbjRdn48oddzJpgAgZj3bprtHohwJZpJPVGucnjGHY6GbEBFBhC7LQi5L",
  "key9": "2WkhuKRKf3uRqGg9pZW843M6rjZdrbc2pZgJBTei7AXuWjJ5tu8xsHAgYyACoLxjU7jf13VNGy17pS8SZBDp323c",
  "key10": "3y5BwBj99xCttpbDWFh7GUMdTZE6eqweuvQuYEVmReiqRNcXJRxY6bSjGEpzeYb5BaafmeQVVb5VzM9FADz8AJUZ",
  "key11": "3ncoAfpNpR2w5vZWWuKHpSM5JSsCSZn51edyT6RwfuUfaXLeZo57s9Xy49zUKR8vQETZJL41vU5Q7os6mni858Hd",
  "key12": "2vFKXnwL1uyzgsoLg5jc8DQ7Cc2PQyAZxKESYxo5aWxV3ugiDhM1ehcBWq1hB141RTaG7XahU5Ckk43frfcdPMfB",
  "key13": "5s1GE47PGXLnebmpQkt2yEG1UFLzerNTYP67dPaJKM6pRFquTQBPUfnc53N7vy5QtPdkftNEEjNXHskarLyKvJ7U",
  "key14": "343sLCQJaNZRMMmJbyhVszfgPgd5rueSjh7tSQXheUPSkFvwCBdyhiX2FxK2oYuCt7MKhJ7TeEk6cJmQFP8NuiiX",
  "key15": "5Tw8aKSJqScrpAuMpefz4Xhd7c4XimT94XF8UN9xPynWDPDg444YC6rXpsy32CswvMaVTA7mxTAF56Q69rYsouXZ",
  "key16": "58XDDvZfmxMxasHEeYHCpA6V6vFdJfvgiJGeUmWtpXP9CbP8peymnkCo2tNMW7AZh1CAEm5Pdi5phx3aqyCnwYxp",
  "key17": "5HG1hdhw2yhtWjgLD2aNPA1PRirE1d55piGK5w9wuevBVGSimCpprmPP7dKJcBAMfn5MFG5WhteYmsRZKH5hgQEx",
  "key18": "28wpS1pLjpUhibpEx3ireXb2AfCXpKDVPSccZtFdCPy8EYcpgE7m1mZCwoCDiP4c3B3WKCcnfdP3nFYAPhM7Mwyc",
  "key19": "4Ja5BnQnwwnsc5UNmLikgdp9gjfAG3fwzCiYznc9t1FQEm6JUkVGagD4dPX8VZzwH5euFV6iNmb9F9NscNTmwC7k",
  "key20": "5QkGBiMGtidrwA3ngDTxMnhJZYFY6ZKEgNhvMrLeU3ZFTBvkkwCropMoruUB95EzWQiKHHjVcPPKYvsLkZUeA5PK",
  "key21": "5vfmCfoNbiEtdF92Yr6iBM1DqUf6YNkPKdyRT7VMM5UgF3dYvGktL4TA3HpnMKtoUfv6ZkJ68ZUVJA6vSgfEvyqW",
  "key22": "3GTdkFdFCs5HX5qqnsPW58eaDMuy4b4nNZUfSvb5PwjezjUPygLB8EcNhHFJEQjvsWjGV8TPSNBYPSuu44TPJdGU",
  "key23": "24pwvPHihADhrkSqB3DhcjBNhL3sYRdkgdtZ8jeTxehBhRZ1RA2dfrjf8mpRoAVMQbUfvRp1Ra5J2nYBYiKsMAZY",
  "key24": "5TYTLE8EDJetvEe8DTgbxbJ1XdKpBKKikgxwqCuS1x2o1EZw9VbfCTvoHXgLCV4RVXeVcVhBDr8aTkRG6Vp42JEb",
  "key25": "5qahHnVHcMAwZNZkZW1RypWARsv2gG8j2ZHZr4UReHrEhMXMZDeT67dTZHzdKMyQ7k4sBDa1U5FSJ1sgky9ZRQzQ",
  "key26": "3r3eZ8qXAL4keTQM42Xf4o4RFomH2z8HvjXDnfhpYThnDFNBF8KxC7UdJyKTEGgEWC9t8ZLcGdSRkByGo8oHuJvT",
  "key27": "5JyGYQoyov6XKSBRHMVj1UpRfqm2AyW85iSA2pypGFZcGh3ySe9XX14chHr6bEvK9xNf2QxDP1xd63FhMxc6R5XT",
  "key28": "24QaXNY14cpDr4cPDrLPCB94ZBvnoz68dmtzS6EJmHyNFZorXKRqcyFeUWSoRzQ6hThCbyJ5H8PeVbXXRspAoaQ2"
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
