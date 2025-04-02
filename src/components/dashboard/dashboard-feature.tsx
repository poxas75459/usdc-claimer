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
    "4DkuGaGEHPB7gSRqE9sWWkB6hDPzjq3RNHqB3ZWKCSWvNxajtY1ZXshzhm3UFae7RRRPSshCJzd2qGqByw6MNT1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L1zWVW5TpVTXW2pJdBHyMMY6wcPthVdkRSJyGGfEFh4QWPvniBMmBUapyxhgZGpugqSZGMvssqU19uPqkmenMT5",
  "key1": "235nYcwqrR3haXoFsWVwvxuSgnkN1vS5GiP8yqXxKcusRPWop4QPg5DQnBoKwvLCv2CKBdnMprUa2C7QJAu5u3YU",
  "key2": "3y2xP1MDNfMCKjVeQjWJ9pbkUeFYmcWa3Z9FNiaH9LP5bCLriuCwdLvR6eSXsSfkZuEw67ZCn72XH8QVrUecgat",
  "key3": "22KKocya7pEB9kMyn499NuZSEfTLGPnzMNEjTge7SZpSx9wPNTcKpJMwz3cziG8cVge3TfhADRkS6wkF7J7Neu8e",
  "key4": "58tTmkYszEUDUDunGAjZ4A7ntqyj3h71y1gLPuCPgEgR9r1vihrFa1m5Yroc6KCuFLQuRYVkrcNGCnuhf7XyF63k",
  "key5": "5Q9SzJRC9UrbjSMMkHXyVRnySw5n8KzxcS6dgLAGU8bskvLh5R8MvAkYfb5BU3je3H2PBNYTLtoBVpsMi9dME6V3",
  "key6": "5FunSEokQjsh5V4WJDhA1vzsTu24iSvz5He3m8VqiTga41a7rrzJnHuw6hVYCASsEgmfmyiquT8Pw3Ekn61uGBw6",
  "key7": "2macV9LzCc6kDe7Bb8B7giD4xZwAhb2Q6AhCFnhXoKwbf7e5Wco9Gm6jy7x5G2PUEZtjKDAG2HfrTqaaVdd7j2v6",
  "key8": "4pza2tbKHwvN28ESDHEaSSWQ2uTEuYxhqfRmZxBbL88jScDxpGFpuh4Gr97bzgmDqeGzU4U2dYBcxrKkwkDruu6z",
  "key9": "2MZLDvSDUP75itsQNvM364m9bo19uLdTqfCv26fe2ps4t69QfSnyvi75odAFSmzV7VJkGqwLFxS2F7ArnVArHNS6",
  "key10": "2dBYLcqTWdyphiM1AG2ruZ7pHN1sAinB5pcKrLwiigxQNQdiY399mi3ZFUXxe1b84UViTMAsneR5iXEKpJmAjzSu",
  "key11": "3tAAydkEj587vj2ANQ3qVfsnphshd7CdzeGq3MQrXX239kf2NyznEWimpvtKJTx2dNPwxQ5p5y11Lh9Wsk8PBEsC",
  "key12": "3KnCBptKxBF4vJepcpYJpqFe3JnJVrdcUddxKSmdJnYjs7nUjdb7EXqFDapm7KvTAxS4wByX5Z3iLbSun9kb64Vf",
  "key13": "4M6ywEz833WAKdcGFGyTXSYHQffCNcyHj6hKyav9xH5cr6WHjqyBp926CAqNpqjc7K6zW47MrppCksGc3s4H27jh",
  "key14": "5QpY6eMupcj4psW7fpueV5CpodiHskMUKztb3uGK7nZmyFzxapxfkkgpVfqmDrz9wxKrGX1sBdk8sGKXCSk4kaX8",
  "key15": "5HWFZuUAcyFfhvCAY9uiWL8ft2hMAc7bpJnRU59Mtj97aRbzPFcfncFZYvSQ5y2v2naDS38SGeojSMJPejmmhZpN",
  "key16": "2aUCyPGZR3Sybt8odRaYmuy78ngqcfpH281z8MUqvCb7GBq9XAPP2kUx31TKL7RFGwgj7paqMP58yWLLCf5WLJeQ",
  "key17": "5vUHhaQPEbeNiuAGDauKSM38sKPxSTKV72hQZDwzMUZNspCD29AoULByjXaNfShCWxsghqBpZypUSXaiWxF3hWsG",
  "key18": "KF8J2EihzZUhsuYFYmdY3iJ34baPnj2LTXUymFbrSsYKtA6NJLMazqpmiZdhrCkUhcb1yt2XrjBrUEFb84K5eNV",
  "key19": "23U3XNJMpyjbKQtZz5TSXVtFqAw5ZjrDW4znVX7qMzSnJCU33Ha5CP4v3st2DzmobiTnKNGd6ogBet9P9NFUDAmP",
  "key20": "4q2wyVpYSbNi2U9jiCWDHMGQnVJCTcHPmhWYYMD8hyQnagwBT1z9QGJ1d26DARVjCf9EonbEbu9fA7vytE356jWW",
  "key21": "2dLT54o3V6GkDr1bZFAc2ZUJADdnaBwkTCHAepxJWhGn1YKduiGW3Bno9WruQj4aeLt1fcnQBN1vRFHivjv2opYd",
  "key22": "2MxW1ENWWTzJZvxb3V9qdy6CMhVBQujo7ZG6d5sMy4PacASNceHJqTztxZNYwi3YMREwWwtCkTPktVjWsYLuj4RD",
  "key23": "2NXzcURxVzT6RfH9VYd5rYwavQGPgZTkaaC2SkKB9APd8fmyxNzCqPQ5haRTdJof56kiLNZDQt7eht9kLs8kZaz",
  "key24": "3ay9p5XQn8cMD1VudJng1FJBu7rqSJNuwwKWg6dLhARubbiyoRRNUSwc79hF1pWDzMpuDQSUPo8xHjWwme7TZjzi",
  "key25": "2eETCJUjMJ4PntEvhhZM4t8yng5Uu715SGZDsHhmCX4Am1cX2aQjS2siM4Tpe5WJ13t9b28UMWi9pVRdrUnfEZAA",
  "key26": "PzbdD267XNGFvhT11UKKz5XRCsxxLbJ9HVNkZufCjkEntabdKEBuevkeo3Cmuw8u7PWvDaMMsuUCurFb7xBa7BD",
  "key27": "3YMwHXc5aYVq4ede8Jhc8JzuLB4UbNo5rSWxP18ukFUspqn1iYTmZqoyNmSmR1DXaMorvgBTNBiXB84GM8MDVH3v",
  "key28": "3jdujBCYGLzpGXjJvpuV9KaARMDSnE5ArciwK7tvifH5bBjKrAgRDjBnRkRjgeTDRzYNbzPo34G8bKao7r8z9rH9",
  "key29": "2uddEpwqh92a8YRh3zybiB2WViZKkuLTQCod5vfBEFxmuaCcixFrVX2oCCJt8n2pB3ZBtHufWxk8Fcx1aCamz2Rs",
  "key30": "26TGupHUQWb9ubmo8LaGTPAWFspM1F5s8e6fHx11kKoNjWUcnuK7NzN6cKLyPev7hwHx8WRU9tXFRNrhRsXJg7aF"
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
