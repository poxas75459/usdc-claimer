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
    "GfLRAzjh5Bxxhmxg9fWv3AaByiSD7RuobUxgsbF3EuVJSQKN87pdJqdSYjoR8XiwVNjRZ1U8aPeXgL3e7YWxgLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MRdPKkxUKDD686u9kHE4wza6qoTqPefxtDMQ8yheaZXaywkNEKCjgj5sPyw4inUA8L6MiYazKBZLf9CeLYzVFaF",
  "key1": "3ppLhskgcDwD9rGd6JSWo2EqbqMX8nkAonXnPY3Wo7a9pweMSP37ryQnzjh1BmDB7kRRNukEXt8ma4GniH7H73TA",
  "key2": "4LvLx5KCWr1w4E4eVhbaFRbLw6fYyH4fyes6tfNMybmLWQMJvpJxZjaR57Nm5U2b8S2wNFsBidE3Kud92TUehvDa",
  "key3": "nMSUhrV2hSjUSXHKx6BswU8rbaT1we8dhtnuTzEG9A9GxF1vY1yLxK4mreTqq5cwKH3AuYXQxJMVze5yrMqUM34",
  "key4": "3WfM6pYb7tNozKcQNtjV3AgYHCLQH2y89EDq9i437h4XyPcwoMeq1mqmr672MQcHwt9Dve792hiTt4WGmAn5tjZM",
  "key5": "g7gjACq46fv5MzmhYffUc44JRc6FHUn3YunmijgYJWtNSEy3ZF61wWgjPvk8qHeQneHD61DSpPKspHN7cwHdztd",
  "key6": "44sCak8V6k9UH5qgnvzufP8U9oLeHQ5kXd5bo8f8m4StHZ11XchSrY8WtcNAbXDCxSWVT48z87UiiyDkkT9yiXsY",
  "key7": "3mudWgw72JEbWw3atYY23CPH5mrpWnqLrSP1nCgbU9aGLQaZcbntshDYox2bNYvwrQcownGVPNtfrk5wiaDYzKQ7",
  "key8": "5Y96oHcSsQeavizK8dyUeyuFHZJTMdz7avwkwCKvagpnhdHaDRWjHDBBRL8LchRQBvwT8hsqDXfmuo4kHGrb1jn5",
  "key9": "3nux1kpLAdtG4sgjuE7ogNsTADjmjsQZmx7dAbUrGWRSZWKGvwAF6XqTHQiBdCi99BzTEE8y9mxvf8F94PGdH3xt",
  "key10": "34LkYd1RdqLtKSU4VdbtPJs7QiVVaum3dfgene4SE7QAeNM42UQen7Q1YyY6XnbR1RDWW2v4UPJRoXCfkS91VbSD",
  "key11": "2G4rGfwrT4zvkdkuN9H1sf1ne3s9CQ7oFECMZwVRhmJguGQSQEsVMRjZEqUAKD8Rh7TfJDczN2vBDg3w5oRPJ5Td",
  "key12": "HCjqiUXjYVz4XYNd1Fayr1mUwvW1CaDRgZrZqyegFofVtr5FwHwU3MYDaUb2DHLkNYzG7rBGpjv95Y1ReJAQHD5",
  "key13": "5wgxbFtxrVyF9wpfC8hbTUMJDM4aEaq6wFQK7wk3YmaJTKncNgSReXXsUGtozLPbTmsCKs7aF6jjB1D7Xh73qggn",
  "key14": "5TmTwRnXhg9BUHwVMrrvgnD4uTmQrZDHkgE89Q5sxpzc6uymGGmctMmR5u1fUUy4P9JnxaUKvxpSnfDxNcmyb6JS",
  "key15": "5Ai8tsbuE6atHHvXp5LDvvUAUVeRsVnCp7kewJjWCnnQUSAMwwbzrU9136Kf868tJStF94mwe9oWwotk22Z9RJyH",
  "key16": "4sR9WiN6pdtB8QjncQBPTdqNH68k88hsxxBknmjHP4K2aB7VLhP1SX5P8CfmcXidkbJiBziFf4c5ShPYWZ4C5N66",
  "key17": "36sopCzB8j2VUvhoE6xfmV42Zbeg3ZJ9wZp3LHXMwEeS5BeoD1nrZwFtcyo3CmgzBSG3c7ieQg948xfxDDNuHzy7",
  "key18": "2VNk8BThbauLgi6CqLXYyprR3oG1yrqEPUtiLWxGp76hJAxerzwt3PkswrU85VgFQKsGt5s98uFhqTPRjV9YdAhN",
  "key19": "2o9cjFLxyhjtQpvHb9RVHdq8DTUftBYKqoUcHxsDqpkpmdTJ2hX4gF77FRqhZiU3xdNWLXxAXiJNC13LBj62ULnh",
  "key20": "5KDVwpnYNnoma8XppxyKPPjLD8eaACPGsgCxM4KqDBy7wriVV6JWJUm6SVkxZVPeini5GiE8bk2G2EYthCY7dfpo",
  "key21": "qpGt9keihHevZaHTBDCNKGuAvNWxD8WZTffwRgYmADnggkNFeMKFNRREYkEYpHxcmuceajWLUyK7JtKfyJfT1Ce",
  "key22": "4vQFyrmLjKsowg7ncrTk4FTq493ZhAeXqwbhDGRyC5cBJG2yfKSzcPKb2DEZaCUhWV4tknWnDKoVT84nNQkgmdB7",
  "key23": "3tAdDxusyGWfQ2pmECp2mfgdJ1zQmmgwUVBGcPAUnwM8SaNanphhHS8wDe9vD8m2SooeHrJbc5tbudbhWX6qkJkr",
  "key24": "3kUbBjU36baHfvvnMaBhp7jgJsxWXahxCCqWQjHc194x6vUHTuLzBbgkEuytDu8LqNW4FAek8sih4fFPzRpdCsDf",
  "key25": "3gjaMe5eWzeLLj4KegALmAz6FomAFLW1kAtFpvPJajssBo4qkye4aBmeX8ZxaVENJgHg7so9EuTuYfH4ECAcdjdd",
  "key26": "4GpsMqxnYzkFsmXQ6JW8wos5QxePBN5U4d1edeEK9Gh9ZJzrp75vWf5PwXdjZ1TcA7JeZkqBQqxMphJxwzX9ZURF",
  "key27": "2r9DZ911sg86iWV4w7t9K5ezsQc91HWW3iNH8Cuh23keQwShNABiPYBhKk9zWvUppr2zKHJsPWoSopot4wET7fvi",
  "key28": "1nteP7CF9xNSLrt9ibKD3PjZCJGHG1TewqzQGPiUjBUvZCFx837YPQNCBTK1QiSUBexGRHcxvkytLuZNrSVaQVz",
  "key29": "3dbAYYHRJ5etco2MPq96zLfQzZyfsXvo5aKDGYgcSb7xgqec3vmMV63Q4cgvNYkeovmiPD5ccacPxHTgZ7uu9kJ7",
  "key30": "3nXXdF4vJUwpaJDNRhMyTmgghbc5twYdTJbeY4eoienCbqHHKE6SJKimRQsJGegf42gAcNS95WoPjt9CcffjBcgo",
  "key31": "R1XabuGQ5eDDvGoKfoG76B8ivEG4Z5tCXvSNhTYAvtuT1A8JFuMHrMKtUHvUcuQpgf4NSg4Cs4mHL9aFbJK6kdc",
  "key32": "4mWLqi7x4u4kVohsDuwG6w5mscwctoFrttkshfZN63d6XJh1HNEnX2PqBS8jTq7YekTmJ7homLDLGN8hw1rUNeVS",
  "key33": "4vPzBBpAo6YXddMgde7rT4w4XXCuunAQiZ8fiSWTYu9SyaEfpE9vKwPwVT98nFYEqBhrXC9RbwVyQAkw1AsRUx9V",
  "key34": "41pbCnkG4PpvHBj1DeinDVqs674ryRZEA4XFdYiL39NZXoj9UBhALTCmVesCWmnmtUsg2nFrmqpEQVfbY6gVWXTg",
  "key35": "PXPECMND2EsJsUcoU1jvYYv1V8Vmz1mScXz3rVw9D84ANRtDedaW7TVsmLiqidUqHvTXtWjosCw9SRM4r3aXiSr",
  "key36": "244zqF2yi8FKu9yNmR3BDbCK3GGS1QrMv7UeGmT668JymSbWg4M3rKdK32AygVv1ecttVkLuJfkZuzRby8NUTfeX",
  "key37": "3NkBk8Q5MPYmbMXnjboqHN6f88BnW6gkqQ3hw2E46wvEEjte15MqV6CW1H48xmJXFUnqEUt7oz6ExEupEu9bZVyK"
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
