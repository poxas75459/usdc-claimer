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
    "3YoCvqKbsJdCRXXk7nUrhXYktHzNN9YFCNCZ6jSE7r1QTZAEtky3c7aKtBGxHsUP7zdWzFgrHpQttTKZfqQmUFe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54oDjKPvwU9q9qGNNqMk3UULTyJDEarXZHCA3bBBgb4ghe1rPt8TXTfBUa8Trph2DxMfUi26eVmSGRx9esY7WGob",
  "key1": "Vnqbjwp3x248MjGHFMBB9KzNuARJktXd8oGMW9dn3PfrXgryLSfNscm71PPdjhEUYkXoZHgjytbXzRXjMwquxz2",
  "key2": "2k3g52mdV4nFFnYaJYpWby4yS9dZjXxL2zSeSkV6hXQaigdkcB6gqv8pDZZMVCNAFKf4JLG44fCTsGN9y3Xuukry",
  "key3": "25UUvpC7CADFx5v3ziVc3Vx8AJo1wZ8iRc97qzfdRiJfe8Z8oHPJZxw2jfkq8VedkF4ZnWNNWrN513kruvDMpfwq",
  "key4": "5kDaQFAFT97pRhJSPLb8NrsCBTiW4E3FRNqzL8PtCkSVpz59k2G5xv1fvYKbm6ZPR5C2ZdgNA4x9Lq92doTkrCiM",
  "key5": "6469cbFtLkB15uUMFiiKxH7pBAM3qmXuM9cxvWfcqH4h4wfwAr9meZXuKn8S1DjUKMUNw7NwE8n1BwbPcSGXVz4w",
  "key6": "3RLx9hqXPLrN6uaADzNARqzMy4nuDDNnEp115p7Go53vBn524ySEcWPfNDhB1umyHFMeEBEwLQJz9o4GQtf8vWUF",
  "key7": "3t9MaeMJiyWfiibtMrBpBYZPGaxT1xt3KUqTNfvK6Gc5mvjr5vNvSwurZiDTs1gNxQu2agMhAk68CNzQTbSKL3Wh",
  "key8": "3jFafyjUmuB85rwVZKpTmk9snmb7EvKFUKV1KEMrwduwsCuLKjR6G6TJgZZioemkSiguEFg14JvKkaVi5ChNzBED",
  "key9": "yrHPV5R7kcs2DKrsmieTXLXUhcbCMqt8rQGqRTfZJ5VkoLTzuxCvEMXye2T8JfP8E31JZ8XtCVVxQiz45NHrAqn",
  "key10": "3YN6y8DgYXKWBx9xTvj4myQBFCsfTmE5QVaoVTwrsw2sXwAqira4Nw4HecX1bCwHAjPbCZZeTwRwZ7GPWLNh3gni",
  "key11": "24c6HYgd5RR2aoRPZzuHhRZM5EtKDdGdZSWpjRx3Ze6Fdj9iha1ZvbX1pB7sunMVieohNr66BDn4U9syjVyw7VxM",
  "key12": "LjFT7wRQMV9BWtJdDLBepWQs5zNR2c7V2gP9d7SEpzw7brdCJk8nwGdvvLb79WVV8NZymEskXV7ty6NyUozA4SF",
  "key13": "QN76EcbEBc1H9rRS6TDZxCXgmqVSoySJmt9gzDNQ7zgeZJDTpBDro8CM19QZioN4pwqtbH6cX4tQ5fjgyPSDgG4",
  "key14": "5argDq7jhrYEUJryKosWVr9TzodthKYHriJFjKQqabUUAvNMbnhoTfYHvfZHWZ24DDGY78vUoF1XgQ2cxHgngoY1",
  "key15": "3WtUwdLLKx9UMu95agnMx2scWWoT9h6Z9tnrcdpPvfVUVTY6ZUx9nAMSnpUqfns3KongAGM3rD2h2XEULrzvT5LD",
  "key16": "3bH1MMsjdemQKXUUx2a9qMY5ytMNoC2DHTLccLEXmyTdoe9u8Mknw4mwzKvDituVPCu6cZntSZ9He6ShP3i5jjaM",
  "key17": "66iSgvaPf71dERHMXi9Qvxdi5THoPs55gzKSyakwnE1BMYjieQUFGuKoyVMhkX2WdKzVK3BZ8SmNvnt8Fb6vPzAt",
  "key18": "51F2HJjvv14mG1j7dju3bNcYj8ugcFRfHTtWXeYQUrZqiwMss9qaVKYffWCLJ1qfSDMzUT6kMGEn3yyUXtUyHTqp",
  "key19": "AFUBq3Ap63SQ1QJTxjUdPbT1PqfsCXQt7aaUAaHG8cv1RzPhEj3r5buTenHPwo8FwEjLXm3hq9VxUs5SAnKiqYb",
  "key20": "5YacUNKcYT31GdPDBBirM8KHSyZWiZjdBYEugUkhApUZbzDhbS8cowrYKmLb99eUpj1zgh5GYsEv1rjSBn4VnQ1V",
  "key21": "3PLyuHPCoJHsSrXqcxYyY8e28UnsCbVBDeaBqistayT9UMQpnqPVfKHhtqCLQgAEdT2FEWGBrtE3d3pT2Y6REnfU",
  "key22": "5B9uBckRchb6CGdoHWzHeySkJkrx3dyi6Ba1tSNEBD7zgxcxuyPDWS8gJjPn8PLyVR9smonJPCnRPaHeJpC9sDGZ",
  "key23": "Z8SpWAtf6iVeqWuZ9ap1EhQo1ctPkadqxnXJ6FLDnznGsgkdTKGiBWsfUmeye1HiMjB4ixGUrgbAS4gYwY9R4Vs",
  "key24": "2KrfNYGWkZfJfFMFLgrEUgdj9Z5UCqgFz1foSecXNqGM8oftNtrePsJmKCuWWWJKbFtV2xPZ1xvPfpcpxrnXVXnL",
  "key25": "2WYcKbhqYQvoE68M41Mi2JGHTzvuZPxRATxoDP29oZCXHV2VQzfUKSHVadSsfGZxTgH7zUk1krtaFTETfvwzMvVx",
  "key26": "wu9gGZwEW7uKBxmJ1gWcbd2VVQKzz76ScLqF6LLwtU7JsHtT4xcVYof5E5nLAHKbxWhaBTar3yHjqm3tdZNpuHf",
  "key27": "3Cd9Tq2EvHvSBBLAjH1B8kK7RG6mFD5L897tcpdPCSxqHbeUpwys1oXU8RoejSJ3mZfZHwUbTYZiF5Rc8pEPhPy4",
  "key28": "w6TsSMNSkzcyv843MhRaEctHGGoA79bXaG1GCRk4LsVKsNdFs8rc17KYc2uhBAxxoKVK6nQcvb6BveWC5eg8ayW",
  "key29": "3YFRnvpGSUoWw5EhF2gtzEKpFCojTXSUcp3iAEVDB4GYQNSn7PBwVsYtJJAthDr6FMpmKpNXBz8zsPfzkSVWZFf7",
  "key30": "5X4UPoW3gjDKSzNoFiAMUkdEBYANHsgJLNveoVRKHCVxWfGA25eDxRBzQ1Q3m6xiVXvKMHr6zZJiNhWmzkkp6PRh",
  "key31": "65UVQfiLxpgrckpN145oxLNcSz4YPG8ZBdWxGtpoAX1niYNFoEXqhTy9KiHMKu58MYkTBBfjNLdhPy3rfjgqgc34",
  "key32": "4qLzpDjM84nwbC6YDYMaVtxTFybANKsDD8ou9PqZStVPdh7ELigdEmRjQEnzQGK8Sksoy1ZmD2qDqS4LZZZdCGLP"
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
