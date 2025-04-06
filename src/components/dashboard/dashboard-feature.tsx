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
    "8a33Zxybarz2w1taGpfAZUipDm7ApCCFL7Zs4vtZv52irbZmQYQ2ptMoEwUwUXahiU54qZfCZqFWRQ6kQ6fc71M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XNRPdbavEvanNfc4dziDSqYK4ny5JML7bGXSMY1NTLPLLVTanbyVHrnCdgap93ng6wgCgVJdejvqnivh9tosdMj",
  "key1": "33vCni57y3ZyJVPtufawxgDx9bUowjZjPor7GicCXGZ3jCUvhkZXhFE9UdRdDGgN5KceTJwL7FCnZkAGpfQSTL1",
  "key2": "4EQeirmbHiiYQMPJuy9Tgvyy63DyWiPnwsBrPP2NdCn6BGSyckLN2rmsfiZurrwja9HP7arcvBHxDBS3hSntkRkS",
  "key3": "5vyFhQmC5arMXAJ4LbVsg5HvSntmovsf4j1t2VxszrgThuE3P83pz27Uvw5t3yHrw2VckSTcZCiQbJWvjEk1ZmGS",
  "key4": "34watDrHKFDwCm91mKKJtqEFYbotLy8diB7DW5i8SnD17ogWxb7TXNw3kZN9P1W3dFAvBNK21NzjJtHdXtPDbA59",
  "key5": "5SMsJWVZnA6BhdP5p74nh81dWsTXUCqLXKuGjxUCSy5nMV6GTUVagLAXqAtVtciP5kNisAt4WTqHgPMEEbBFUGhi",
  "key6": "u6vVRGsWCtSx4exmLq3LXHcguCz8Y1ZqqiXc1iTM8HAUkKK8kPoAeUHPHQnUjY9DKGqpyYWJUnWrKaagNenoq6J",
  "key7": "5EK9GDCiB9WvtXhAt3CDPouBwrVLLE9YyGF5e4hu5JM7Jd7coLiwebmDaFhGWV8zadtSBsXMqQ5vKW1x2b2vzn51",
  "key8": "MQwBn55TYxqK4icR2WYiVuKX4CQZ1GLUm7HusCeCuQqUaqpqY4LweA7uvuMeeA4YButoAa2h1Tkxudku8isAogv",
  "key9": "3yLXWPBgZujd7nLAMfkaBTdSmh7qA4NoYsuQp6CtVabuLg8qCGgrXmW8Be9PSUxe7geXiazZn42xEn2TFkTJFHFM",
  "key10": "5adTmb9EGU7hzqUmWEgdNVzF3AwnwVzdQdUsMWrBj6K3Pp5fNmHLt5m6HNP8w3SMpBsRc37WguVSSfhkRDnWZqFE",
  "key11": "2yH7TJ8v2JPqgRavjpuoJd89JgMC7yYjXhX1Wq5nuBz8QJ4weeN8M3C1ubH64FyZWq2TT45WNz4emaNVVLMwPHKj",
  "key12": "3cs5QRnJV6LMboRZs8gAwooBB6CKu2xfPKDGvcZ7ndPs87BZqbNhDARk5aXZdSt8simj3ngqt9QCYXLJ7LXc2Z6i",
  "key13": "yKGTCwxqvBZECe8XNBSzSfnZDHYyDuJKqiRTroP5gvq1LbjEDdS9Ls8XkgQs6LsHRMCVDFhiVpjCXWRdw9kAXfT",
  "key14": "46PfeCaJwfGb3rBRCpARJJwn24CeHYggo3bdUUsiq8jaYbuiHhjUsgDbe5Z6H723ZLwzEWLYEir3iFCxMnKgaRkC",
  "key15": "2CetmMSWGeiVmkpttELbWGwWcwicdKgbMY2UjeQ1tw6itRpvA1S1Mnz7Mudn1C4AkK4kLutR2Ntj4MnNQyurKkiw",
  "key16": "w7jE9b2Svb6dorZSHfa2AyatcHsmK3WBrHVQxFnAp4jDpy39M61Fjem1hX8Acp6b4HW7uHyefuKgG5sMdzZHHeN",
  "key17": "5kqiAGFsxzT4rctFGFACNGUSBUf4PcxDUnRJ5fZ7aVY9fTcd3bphQvqv3CSvycEd6SeehXgJzvBBMzFmiDqjFDcU",
  "key18": "5KfiJoVGBXeBJoYafVtfFVa2WkcQQ7t7W6TH1hCjTgrceAxdWWxWN6ufUFaH48gNcWmDt99Yqz8u9f4WHDtqYNAY",
  "key19": "GkBDP2he3PkxET45bTkEVCvhZ97GFGqazLJcX2cUwLSkHM7h2827JmxPQBks89LEXvTVYXiGvhVdMyXKssPatTs",
  "key20": "2jMnSWp3AyxEuaLzTx7HTkyMoyiNxZm2R3v68AQpY1gMUUaEpBgqVmQCWxYz7K3SeunPAWVAuGgQmmMjuzMF8pZE",
  "key21": "55tNS3kU2jThxRzspJv8tgvJ7RSdaqoNzAjRA82dY9gkTjwYpYtR4SZWViBK5o2hqq3xRYLANbBCgB8JDuxj5Arf",
  "key22": "4xLDpgst9dyQYPn6Xk9BLWoGtfbU8NuY6rSLPCkrAWpzTkjR8RHW1FyZ8XpFHKVMuynL8MrMQ4UDPjdrvg1vY1pC",
  "key23": "2XEPx4xehg9k9BQHfBwEFoXg1Asuh4ffsJG17dLpcg2Pqze5EPVuWB2Fn3TFXAKNrBkBXgRdN1VDoz9TftPPQoKh",
  "key24": "5f67ae29QDMhfojc1b9ZdpfM3jzt4ZDo9VKMnUP9XPUGcRt5u46b515rLJ9Tqf1NZvgQe3ET1fxvGabzy7A1ced7",
  "key25": "veRX713hK1rAUsQJCKNVQWbH1Uc9zNtkPJ56rz2zj6vymd4VAP96LRR7nNNcjMWkr3ABqeNaeaFcu8J9eghG6tK",
  "key26": "4RkXzHMmAMYMSiFpTqvzJEqX23Drnxgh8NEU2V39B3JjyvcqGJs1bPvgSksRHi5ABgpvdn3MGr6DmHG7bnaNch6t",
  "key27": "5GWznipkRd4JfFKGF224kW7XKXVWzW1ZMZGDB2oqNfbbHavTVZgz4sf3WWiqmEzCEbJQhEuDSHaGwnDWN415DGFW",
  "key28": "2Mi3zE2ULTYtrYQYcpaQtHv4G4jy8LCwHV9odC482o1tfsKhJ63zpkyShwt7etAcfustKxJjUsrxWDq2eyiBLYMJ",
  "key29": "2tm5gEPLtdue1PJdSG7EwNA5Q2Qri6hvyASjYaZnjfpX2TohnVbGjRBUBVqRuVQCeHth9QyVpSCkdQzuhmszgrfY",
  "key30": "2mz6CU6Hm4MmFuUhXrQ1wETSKM7KxpYvM5wpUa8vTuXr2w6EiWfoL84Rj986oZe4bKYPsBt8KMDjn7dYofjmkvyN",
  "key31": "24TkAgufPnz3c86qyRqcKrD2pt4ks1gtzPCaBRqhq5rgJu4a7xSzHwwFhCC5T4WbfXf9bx8Az97qxBQeWFkvgsCX",
  "key32": "KYRR6bf3CPBYmbKVFBLJpp8ra1ww8v4NEuhS7mujTcdCDX7HruQkB1Agqrpi9U7SFsxJ2UcLkScjdt83oPbNMxv",
  "key33": "5pwEKfzj5YLp9Yitf79CTQXS9AVpDUMbt8nMKGZqJR6SfwUjDw6wYiswd53N8aFJzkCuzcLx8dW9aWx2RkxXrNBN",
  "key34": "5cPLnihr8rmgL3YCeJB5CJ2PDRu4nqXF3H3N5nXbUcksVzn8hcxFeGtQMWkdnXge6afZGLpwEnnRYB1ach4FgxmR"
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
