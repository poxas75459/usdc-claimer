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
    "5XyXwhPXX2rhzFsF16PMpkoRAz3nxUp6mD8cottvPrYqawwTRS5iuVRNvZbs87VAxg6HKfkMG8JhPDdKC74aZvg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iZwBVVhHERyNdiauTRfvMiLvDU7dwYt1ZToRxQnvFP4s4d8uiz73vM7hpZJZvTX3DJC7bWNjRLE4z6rgspwt9tB",
  "key1": "4UcqdiSU6YPy7xjXKDCAfApQnd8QvdXaWQPx7GFMu3zAqZpUMJtpcwDye7FsRGhFDrtS6wmRap3daDYzHr3ahW6y",
  "key2": "2dE9wtuzLLw4KgSB3T1xxM2o61jynvzGJregph7M9Pxup12BtYv1rFG7x9bJqdzVb6v9denZhPdAzWNZMuYuhL4u",
  "key3": "3eHQKLVbNF1JSKAj8TfBjxmrMZoqYaxgd537nztnYurDE6DgKw2wvqCtW54CtvhEb7bWNfhGnM6fgs94ixmZHECh",
  "key4": "2LEMnTLQb9xgWfPw9ZCf4DC7DbCEeARYDcXuUaJYo1GpVrPykdScjMJqrG8txMs2WfqfSPCr3fvpz9EWXmb2JH42",
  "key5": "KXQsnBF5i68iittPRBdBALj43CcQgqFecRy8AeFYia9MetcmpwfHDaF12ksFb6nWFjTpmq8PQoBfzam7Qs8UJBL",
  "key6": "4Y8NFwmjRm4MTsSYsYqwqY7ZQq9FURQptGzQ1XsCMQ9BcrMUnSE9WHp57G79uuHNj44ayVjhDfR8chM3K3eboDqo",
  "key7": "5Kuw7UF7rvZwu3URUcJ8BAtV1cH8koYS2PF2Yd9QeH267AW22xALwkTRq53jeU295MCiiLg3EQYEJGnEo93j2hRm",
  "key8": "4GiA8CcUPgduD3BdgDzsLPkqbsRmRGazDm23DPG7WMtdPe9i9uKkK68Rp6dLWgHuV9wtDemJtTuf55hvs198wcya",
  "key9": "5WHSoUptNw8wudWEvvMe33nVMwp1jBxuM6R6q3jKSiLdLWDASfhuytH9XTmB6PbjxwkCG4Y39k3uS5MXsN5unSpR",
  "key10": "4MV4SJzdA93DAUuNypwRM2A7oX57FU5mJz3BZ28kFnyT9wuxXo2ZwZETHZ3tp4HXQzHeG5nU2qJwiywJBMAtHh76",
  "key11": "325dcduFoMqUmGyZVafSYRPhHR3ACbkLZsF8DngygwvUoe7b38dtGHCEwTyVCMb9HACdk8wZSPMxGHoc6KZvT5vR",
  "key12": "3kEAHa48GaWzQc1CZRF8b4pZEogSHoto7GhkVvBLopgiokdYv4vAKMXiyK8t1a48U1qRvm81uAVpawHLkqwqVqVt",
  "key13": "5dn34uEhksn4YCVq81K5TXTnb1dtPGDzCiYH6nBbcK6iPALwpR7fyHfp4vyNAeKCozeuCtaX4LwBtuVsPjfsLewJ",
  "key14": "44YD5kDH1QVoit2wohTuUGbEoh8L9dHUDNvGhun59NVxQy7itwWAmHh7F7qR6BQZ1VqEpEnaRzPkSWA3WvondiQ5",
  "key15": "m8xsPPJ57ePBenmKkykLs3otnNAJ4JsU5hRTSVHCAMcoMnr5782FtnHBZcrwmvSjDbjpFWZYQ3TraJxZMCnxHq7",
  "key16": "2xMnFdgwtaANHCHxVb2nFRcg74wNJMrwd7zspK5YsQ4Z8goSPK66WTdm79bg41mUtX3fjXRPN3hJjgDQdtAr3jmi",
  "key17": "3vXZuESSgqgfjzzRBfEM1EQeetXyGAPM9v3offZb4tzXYxcx5fW94LXLDJSZVBZyNE6cXynLcGFdMPZDkV8o21py",
  "key18": "4rrCWNtmkwrdxAUZnHE7xB4e4PbFMSNrMR3VFCZVwJjrQ9MCkMxcx621R2T42BC8a2UT5k7LgR6knQtnVGqBeA4P",
  "key19": "35vHCNfwDZ1tmS4xK5cctXdYnhXw31VET7nYH4DXaJrGYAJXycPjhpk58ZLJtK8Q1nvt7qvGcAUs9D11hTKiAn1o",
  "key20": "54bHcKS7YQBttXhadyBUsWzKrX3vuUNNq2tEjKs8HwEEbBcDQYWjvTx5j5LgbVEhsnsxVBkytevMxNmNv2t8mxvs",
  "key21": "3QUh2X7sMQ9tW3GxQCyrXhmfdYpRD4E3JDHU7Myi3qkH6RSqbRjuU1K3TYCtRyYrxZ4g8GCxw3qkaXBZ8cf5V25S",
  "key22": "bW12V9JNk1kEHP5rumzE4TmwfeC1mkuKF8kz2XxKFStjycUbKYfgep9Xw7SAf7mHeNNs5gaVh8AcqohogANASt5",
  "key23": "fSqUVkhpV3uLjMo6eoaowaN8KyajYUzT4e8QPGg1qw7YbrKyKDcD2ahEaZ4uhLV57MLEqBrFfWqUyXSNbvLaLXJ",
  "key24": "4Zdfa9ktadq72vrGwueUM9w6bJ4QwLiuR2SgL5UKv9Lu1YfKg2Dy1sU9gLsHhzJ9Wd8DS7c5JPh3B87u3LnRgqjh",
  "key25": "218gHc1w4H6V5LxJetLtPyJ2ViTR5oh2HiZJgFfPJzCLKY7v7pjoQpAcyrrpxF2NVKuVQ9vzhLiDyn4BRaRMXzjL",
  "key26": "3iAHKLbah6oWxnw7R49XbKTnEK4nBqJCcFSzyhSY9AGrBstrtmmDbY1sGF8HEpZq7CJCbQGckS7eqDzRHZVPa3QP",
  "key27": "2tWqVeHgNw2GoLgziZ7FjdqMhggWpm2B1nXZePr9B4xBVY2wcBtjkP9rxM1EVQcVitfiJ7LLGMiwKCoGgAKXvKWP",
  "key28": "65sPqud3dJgqQ2JatPmxuCAMgvNRtwRtnsu3Hz3w9ZjEhqnuZXpXphZcmYMqVcnXQt11uNompf7oqwANeDfY5HKh",
  "key29": "3mpkUJdo3zbgv9Z5CmJPqPhurfkJC8FgbsNPjYdjC3GQVq21yrgwiB4rxechmPmvjGbu5yjJSc9ThvyxmtSC7rVk",
  "key30": "29XUwtVzosSHsb5d3ruSRJiLRcExJRNAC4PiznoWoiXmVNrZhAmirzWmoURWDTQ2ZSm6FhSSH74dWo3auDfuKnQD"
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
