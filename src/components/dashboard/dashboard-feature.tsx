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
    "49hBLaXvTqVg8Bj6nrzn9yMD2t2gEfzVRSw62i5wwinNCk6FVPS8Bp8ph2XreNqn2vpTm8A97i4pxVpv6E2zv8RL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x81Q4YeMpBhLz9SZAJ9FCZidWR22NBgAjuz6qW57qpLg73RhwWZWW2dJHmfSrrMnbaMn3vfVjQR7uFqSfQTUcR5",
  "key1": "284RTN816iwtsvP6ZnaRuF6MmyiGmDv4nx341WakyvWkgmmdUaYgYJXwThrt6WNdT2Q5m79Cj2J5gVzTALLaUnqB",
  "key2": "5WdiURsczQszpaVXBfVWGHwVj8jNnrUs9JzTFPzqrrq34vBv5jgHxs9dmxC1o4dh5kwBMaQ4KENFoFPTUXZdGd11",
  "key3": "kzYVS2McyY6UPXU4RsDWUhceaPfs3VcCEyBHBE1dNDFiXQa84S4q8p6LD5JQygLuJuoM5o2Ck3VG9GbJRysJHu3",
  "key4": "5jVLawoxArqiMcJgsNkGvVZMo6RfaR1NantYJSALKgs3hBcXiq96JcfdqwP9QNvQYzF5RjK6Krjg3RRqyGfWcQa2",
  "key5": "2ebs62zTxtcgZKeZFnfdnuB25vf5jTg1FSoRfXM9cevnsMQF4Jdak2oz7nZk7oa1TtYxoFcTHyA6cum2747rgeRu",
  "key6": "3HcEJjTJUCYwKwxgQY9HNW8YbEv25YvMuK4YEecsDGr1JCjU9YozfNVXWAcL7pnExhfESi1THVvZYJtkJkaJ9oFd",
  "key7": "3r5WqeWptJdAKMDSZt9TPjXw3RNCc7WAezKgiugkwbJSbxBtUZcEXTV7Sjfmv8Qj5TKM6kjAAj3G5ZiMbAHj9Hpa",
  "key8": "5rYrsKiJ38DF4SCML7xzYYexi24uuFAPCYF7K6mLyUFJrtqrbU8hBTGpQif5MDfUPBZNE311RfUjZqpCpD8WbhN7",
  "key9": "Pwh2Rikuox4obDB1iGGhc87wxrQA7P33sULeL8pHfryGvhpVFd6a7si3m8jwKREfVx1wzU2iC2MXXMpJHb7ocSy",
  "key10": "3kWadPVSE21uhzGdeWWtGyGUW7QerbcnFmMDfqjY7SyXwLnSXR9jBcC2EuAYtLSsskJBbMQDosX4CgMGgosvEpW8",
  "key11": "3uEcA13do61m5GKAHVMvPnLp9wyYBs8MSchULDB5npMpCzAbwdmUzy7ApxJG9Vh9MYBq1Bmm3UXy3uaujYRmcva6",
  "key12": "3a7uNKJoFJWYp6EFkF8X1PkLfEzd48nvdpo69U174R6DpJC6U14MKA3A2PGPmyk4qHcTCKXa63BBkwX1XzBC9x1m",
  "key13": "4bF3M5ghGcPyDdTwwsNbDdPiH6Fm6iaFm4UjYvpgQHj7gvWXfmtkSi3uDuTCPb8E4kY5pNh86AzLcdBayn2L8DvV",
  "key14": "5axV3ZpvxLaaHKpoFfjm9fW2vjBR5CrQPyKFAmZgdbHvNy4u2AyBLPZFJkvvqLkTYu2ZjVGARCWdKyer6m3nULVd",
  "key15": "tNwqUkW8VuCN6rZco7BvWkDzqeryJxdRS2w8MNzCp59cq2puZEnvVnA23eSPF7Pg5LBD7NH4C3oSwV7mEjwtMj3",
  "key16": "3eJ3LdJPD3c17Hf2Ay9WgT4RrmEd2NPrtgiEXMtWiJW2F9MHTaTvwiV7Qak5T9emY1XEmupBYuFcPTJjRmZjC5iL",
  "key17": "syKb98tXsn8Vqj8Z3DSjBzpecqpmn8zAaeqbahkufL29vH3UTrRDQQa5bxGzyMXMK6KK7DC3u3dLtenpak73vQd",
  "key18": "4ghZjfGwLz77XFwvbeKPEQW8XujtBtzXvG69A8CH16gbt5Jrb3m6Msba1YmPzCPCi9gk4TodbViWnJAzVcPhQHyu",
  "key19": "2DJfzHoRBvJ1DhiyS3EzbABdLXBkSRsmv2y74QhPPnLgzz622kQsNiasVGCBYj2mnpdpoLcPMAW6s2QZ1rK8Crtq",
  "key20": "v8ovnHWfsjE5PTjLq5gZoptgekqfXDvnkkSVdcy2RxznNjA4Az3Y1nrvDu1gcz4sqrAnefU4nT45qoMri89SpiN",
  "key21": "53euZT41SDKkSPD526Ra9hAtkPqyhGZYVUQJcoUpxTMQSNqEzCtKHQE7yM7MsuSXptHcresiXMbRudncaNFScpo1",
  "key22": "5SxeG4rRbgZNC19qpYZhmzgvBrm8KHpyvMn4rg9bB8k4Nuad9nj6eGnV8cRvdx7dYjkgobBgauwuVXXazxxZRuTH",
  "key23": "4KnA5SmCs3BMUdGKoTEEwGSR3wohDLXk5GV9JzT6JQ9ZHfFgYsQnvY9MBADRm7xNvLfLwL2274uQ42N3tsv6V6eK",
  "key24": "2hd7x91KNzEg1Hyzz8B4uggzyqLUjjnjmhAgBgLNP71Y5Joy4SVHBm1GDpgZpN7WgM5VvgR7wou6HAbzpNmNKHyV",
  "key25": "5mZZ6mSL3yiLUgYmNLTeh7zTJ7aByjwMNkfji3dXU83kqyrgaHoV6pf8Uadzo3CMCQGPQMjqFgSA8yMbe4z8753t",
  "key26": "4dRiEohDsbxn5YvhrmCuM5TQfsuQp3AZnF2w68TGUkVmCCZDYT65iX2HZaGnUqsTZC8fg8bDZq7Gh2T96rJDfVZ2",
  "key27": "2MoNf26t2Xb9mZK88BemTxok7B8nBPqAkpto3hHipEaXzsHgmkfvEixEX24r5GLEW6fta2nVrxqWA1geaz8mSogk",
  "key28": "2QmdXaHkeWNFyfLSyUzpKWLsyd9gsJSJJTQufEiUcZEdgNH9s4qTWAo8sFxtueoyuEr7tqf5HnXGohR2cXmVPv4k"
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
