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
    "22Q5MpicoUhJuzLYxGWaKccdypFHpHV1adGo4wPA3YgWoSeAqjn5ySF7G7Mi7NbKa9qs6rPAMbva3YS4pvYBy8kQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44qoSf4QZ41ubcJCRadzDfCQ1aBYMD5kThDcrBxUhoxdhPCNP1qBxjyMQCE7Mvi7rQV4Z74Dr8wnPkkmHhRAbsWc",
  "key1": "2TdF1QR7hy2ER5rngVxX4FB358CMb83XHUigTYaDeMNFJ89oScKxAxcuq1XAkquNjxfDozqfmcwZTi4qXcEe48cG",
  "key2": "wxQLNZQHG6T1Mk84exnP2zkbh7GwT9WpwWhhAEa3ubzTqkfrGDjCuk5BRxvFu1T8suQ1KRKDmQen3Dugbn1Gy4p",
  "key3": "4p1nEnMjCv3wRLTUR25EnWmH9mGgrdBgQSuUrUdC5ULvxUA9vpAtktLzh3duV77JNeprDn32jgr2L7kXAYrdRqxF",
  "key4": "2JvWzoRrj2TNHBrj4Snti7aho3m8v6fkCTT6T6fQ8bGEEV8zLHqBftdrNeBTd5zipigbHK7eSeyLKzp5GgrV3Ve7",
  "key5": "LKDnY9hi6beNfsDLtxYM4oTrUTeS77NWWDaJc7ZW6YoqRYLMC8CgiJDMzPfSkpExDWUUozeNfuhsh9mHXQWtBT7",
  "key6": "3mHeAhumFWU2FP6aLaGvx8BkREZXFM6V5UyfsDcuufjP6oEsCwFZaSH5W1Vz33CYW7ZqnwW9tjNKadQ3AEqPwm14",
  "key7": "4sPLWm8ZbJ1jNnWpbNE6iUMMTmboE2WKwASeitm6M9oaBkbg3PZpkBPuyCwkgEZVHjs4rVc2zgMWDPWtbiHTbKQh",
  "key8": "5QoHNKhi6AgM5S7MGZJ3xm4rgFaZLZbKtDu46YaYU2Z7kHfXzfSDRKYeFfMNLTGPQ8nQ9Nx3g6ddzzZez6wTsTfr",
  "key9": "5NpDNCgFEZ3L9deYSwUq1d65fHnU9qtaDGBnG85mAHWQpM7Gt1KZKygNzsn7cfpPr8Q7SUkbK81mf7ZHhKfovUtP",
  "key10": "357K467KETgxq9SX1iEQagNyTJnaw2ouzjtkSH4PYAYMyuH5hNCCmASJ9EHAr5MoWf7htqGwuaa2zbLMKwJFHek5",
  "key11": "3LLQrFyb6o3qJsP5kZvVZv1ijfgPqWkTs5LX3rSzUSMkKVKxhysVs46Ai3B1GPR9Rtnd6pEouTKWEKMmswfqj7Vy",
  "key12": "62PSyGu9FA98ENseb9LHkXFBBjuqCcQqcNMoLRRq8AJiLtYNSNjs1NZkcahdFcEGWcegMiktQvKEUmxxJhNRSTRK",
  "key13": "iE1EG1qfWsErKytQN9CVy5jrieG724EuZcyKSjpvPwv6ZKxCfuY54S7gWkBRsGLtMskdQKoAficH7hmbEqPH59T",
  "key14": "3SkgPrnnDfxfLmkB6Go9buNz4KHK68G27b1f7V1t9WAgURoiiEPGszb114mHXu9TYaY86EYwecotmhWh5smvdgkW",
  "key15": "5dWAc7qEmtvotyG9vEy9w8B9uJmQjq9bzLhoS8P9RTWWisRrMxzDG3PhZem4C4me6JFLVFAVmEQdq2FLDnnsXUtv",
  "key16": "8XAzW7h8u8DAqX4bLYhWnRm88Z9PJUuP5mTKbsWm9qsoRcmyCDaonyScDbSkWKpqcBbjjZeHqG1qDdzMatd2FA5",
  "key17": "3kewi2L1wF9SsvUBEKmxvri5stgqQurzbrPMsEXJP5ifHoxhhdGqUf4wYagUrQGX1Nka5quwW6G1YKAijMxW9oBN",
  "key18": "576KbLEPhTuYcHHAgFh2fBemAZMn7DzJvqAXoxG1upNLaUurQFZi1dFqLvm78iR274DJ9mnAVxRfH4ByayHXemhA",
  "key19": "3Jm2cy8D2jiNCz1RUSeFP3JWWgdpKAAgfpxFNJt3oCLhtEXKmhjCNBN3SsYgtrLqNNbbTdPwcQdLxmCuqzB7L7j6",
  "key20": "3kexLV5pMY5Qez8CjaY51X3msmsE49JpFAAP81cKdESANh9ee3juGPesrTve6TPUj6gXGdeEXEb6fgCMoFJkKphC",
  "key21": "4NZEm1myqsYim5ufJLmP5uhtzcZ5ejkhYJp5incHjCpSxwJT4jzTPmfoqrVkmDQ79YViMVprMaBpjS8KSfRoQbmo",
  "key22": "5FJDveGDB2iD8Z1eiT8YMVN5WxWXH9mWbBBXAJe75zyQdTG2jTnURYgAdy18zdUMHV2q39jCuWoN9NxK2Lkg6m1i",
  "key23": "4SJkombnqQJXshxmrJvuL1XqWALo7C5AFRcr89evLGitWthy3ZjMc29gjGbYSiPkVxfDyAsJuWVH3qgTi685tgHU",
  "key24": "3k3BHX9S6Uw11YF4jQdKtoMrQo9w1whmtW9PaNrzLYp9rEqBRwu6DjebuiQGPuLW6y6RirtUYGQcBYxF9nHQ2Jxi",
  "key25": "21F35sbaHsuedZYGJ7DNXypism22NMbVNgJvyf2nFgtk3EiBddb7nGZngezaP6BG6dNUnTErQXXEmaxxWqccxCsA",
  "key26": "3f7Bz66PE2T78mJwfqgaPJWCoUdoWcgtkRfcfRNRpiuaF9bUA7oFwLhpA17GGYHugDCCWHLSx83ZAipdqeJoZXfM",
  "key27": "4eNBbDjxxUj1VYK2CjBZ2Jb8z1X9rmhSRViyFSaQAhGzRmrjNozMKmL1iwym8DiDWrzEKuQPuXnfFCxGz3oNNiNP"
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
