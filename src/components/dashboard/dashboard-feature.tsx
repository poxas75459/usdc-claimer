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
    "nniinkwUHTLHz7evRwGSjgAnnxCNRTTdLkKURZq4Q2No386tuWTWizEoNpEaWCn4rBWLsrh6JPagrZCjuP7H9Ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NyXqk7uVWRiJDBy9mKsVMFb5CEfmPtyu3HuvmMURhu3SDpi7Pmwv4okbhjJ5c636DmFhw6xMS6JUsvNpEzj15cc",
  "key1": "4VTwNQVmKgYS4uRrPmHNmmisZd4gCyv4PRN1yY8cBwCJT7Qhsv9Bt7tE4segAqt6gfK29XnEC4hAiShggj2YjWSn",
  "key2": "3s3JTZRyPK6GPraHXPU5go8hzsJ5aMvX58uAHvEewqSmSXx3h5gKJFQPv3gLLB6799v8qcD6FXYkTTjuPcaaHqS5",
  "key3": "QneoUtbwdeKPmMqtV5wZAUt3aqmZywAtFL1tn92YNb8eCqiAr3wYXfsnpSUkpUjX2cZeF4QzbZQHmF6a3YCGLrA",
  "key4": "2AtPRq5MTixTKLMzFGU1HHEqYxCZ9YdvwPYM4m1jLbAw56JhNNZk1ogWwg4sP9i7gGqc389BGvJze6XGrUm9fJq",
  "key5": "5hjJBUpQ6o86Pza5XDLHznviCLSgBpPxevXruJFFSUPMob8o6horLi1LJzwntEkMQDfzQkHt2bm5ZTEgh8gk24fT",
  "key6": "5KuiwFHhKh3QnMuX12Xv8fw16eRtTTaBabH7nveUWPxrRuiwGFttsMueV23kA7ucfB3xShr3qregE8HUSJUVHk4R",
  "key7": "35Vbb7nKcDALCPtz6BXLYeCrRNHf6MaKoufQ8Ds8LfzJC8vGELVQsbX5HTepU6EUrWRxKkHsveTrX5rEV5KfbUXk",
  "key8": "325JATkqwNd6NLanty4UrmYCRtDcaZH24pvrG2Cusg7iFGcGS77Jw26NjpHZFoxB87Whkk6V2NMJGM9kSK9yuPk3",
  "key9": "3wHiJ95C9qv3QmqtD7qkYirJkdZ9dNbTG6n7BV6ZEZ36SYsD5BrqNAfk2Lccr8pnAD8huiVz51U4ouxL8Sf7VaDD",
  "key10": "3eUvyEHvN5DYbraGxvMWtGGNtZDYfwSemYTfQMXNXW2kHmTmAW1eKWxvcXLuN5MpnP3M8txPRoYrXDjxeAC9Q5XZ",
  "key11": "28wKT38U8QhNV3v7b2P495P1bbjnb9kBfv2LptamvFxRfAXyMGbrVaMqLbmdp2eUft5e8zKmouTmSnuXsc332Jzu",
  "key12": "2bnBfsPQktbY3TUgbLGHov7NEjmrw66aL6Noi9Wi1Bu9BNoU911YZ3xh54fqvTZ1FQbSX7EqWk2oPfVDKmRBCpJa",
  "key13": "3njzH6rTQEox1TWgMSxsoQNrfvo8woaa9Kit4ic1wGHF4Gfsb7jwD8NuQCPfiJwkEhQeqz73YBq7XrvNjiwBqu4i",
  "key14": "5ruSYN4LLWE6aFpYt6h1LmnQ4ER19Uo2f2oouX8qAPqTJ8yFviTLgEQJoY1DPU3E4yDMH5gbbfDEMvYCwvRWCM5z",
  "key15": "4TGYibx2ut1R3gp2QKEyLiK4BA2tdVqvqsqoGbi5ah5g9Tz1sXgsAj1TPnWroJuXvPd9WyCupA13XfMvXAphJZFX",
  "key16": "2fy3ZVbcYxfdkg82paV9H8t8mjbNJ7Pn7V2wCy59Sxdnu9c4d4CVdJ57HBxNAa8LL2avTha9nyBuBB6tcBzdnH7b",
  "key17": "2XbMTPD2JVQ7R16mP8GxmkVLfKL1eds24Bu6QBP5LvrS5HUhHvL5Ee4HcRHwZiyNcsiRMfkZpXm1ghPXavjWWpif",
  "key18": "mE6B6LCicLrKdEfNLhmPuyEcwy79rxcehvrszSKLouFu7dc46CkUzhJWgi5B3bczcgivA41ASG2HjW3rrT9J3Kw",
  "key19": "5vpCv13TxnXUdrLXQz1RrYKYH2d6XHAu73eMR19dkj7nLZd2o242UuPGdf7T8yKkhezCRxguUtaMS5gxhHhCHhQE",
  "key20": "3PZsNVj7cm9bt45j8UV5z1e5oR6GtAuogrEHxwLhYHSPjMTmmCmgNgSArK35XXhf8kPjeNe9eUkE9bqW9gwHkwib",
  "key21": "jjwJqBsMkDpioiTzzaP3yVWv98tSTiWmvu9p396179eHzDXow8KvhQXAAXmaGk9nvc8MPEiCnTv6jBr8vTcDPps",
  "key22": "2cvPtZAZZrgd5zjUH6LuQzRT9RsNagBDSFynsjB2tat2C3QcLPjxVPF5EjznEJCWZDLPrVHK8sZwyQWqGc9Sw8SK",
  "key23": "5JRQQVJwD5Qop13fL2oJAB9aXAtPhd6Ef11Dhezu7JrKMb8RF6rSjP3QHpgSMhco2BBz5sbWAvuBKkznuVTi9dsH",
  "key24": "3bukR1zTxEoHDRXFTGbDKDoaiDaRsps4n8Cd2SRFHo5bSn17kCjuP2G6YhWaBkRyQBx1L4oZ6282A954M68MtrpX",
  "key25": "5KfCuPDeKrKzV3saZ9mxF1fnXz7yv1fqQcPQUWGFKFGMNsJ8HQ5JTSZnTjrqgC97H97NxFjC8KFi3Y7onxiHRZho"
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
