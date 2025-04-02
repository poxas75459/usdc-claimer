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
    "4vzE3yhDhAf1j1Hfd1qTwQrxnyEeKikixY5KPy6DHzP1kNc4ELtP64DqTRzbpuKpyUaLHURSwdY6EG23ZQwy9Gn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JRarkA2SHLeEyMtAHNnVpejU8wm9JdziyokT8vUVP3NFgTRWX5kDExVtv7iimuXCNYgBpkEhqc5CVTpPqpfFjcz",
  "key1": "7194e5i33WchUqrHU5kKhscbdE3MW5v5jyosXzaaYdsWu7W3EPMEffazM5eFvMn3RGDePWgUMK3sezqSwgK1jiq",
  "key2": "gpxWMFNAa7GnFnk9Xsqc7ai39NPAex9fabdmENKGexMSVn5tTkQfBR4m7Yo89ejFkX4mKzwJhSiFjfBR41Jbm76",
  "key3": "2kExx6Xo83aKDKVGKLKsAyynvUNomEAssbRwzy3HFaL8msTXtaQWxmVFESpHPg9cxU2hWKAZTzG41HkJzr4XwrHP",
  "key4": "tszgbUvJTEqfKxfjAdopknjCXb3LdJg8z9H4bNA51ComD79tZZFXJ5bF4mMvHFrqUq4S4ECfTyA5rHro8uvwbVQ",
  "key5": "42ZeGYTsey7TYLJ33caL5DVNZjS1zNeDoXet1xtem9kmkPnXDTdmWx3EktKRJjojz1Wubr7CPeaYeTyyAPJaV1UA",
  "key6": "4EcZqfSDmtoCRT4aWmG3wj7dwgTn5NvmgCpmbtYUXtJQxfFheNNr7xCAPmRkqgdAsMJgqJzU28EkHzfJ9EkSeFSR",
  "key7": "2c3YibGmkzsfv6FfhJRrLvXuNWaSC9vPo1dSxfrV1p1ucnXC2rCUN25TgWyZXn9QXiuCWDwwPtU25dMbrUdYi8jD",
  "key8": "4CCyJJTymiUfTPd4vHj8s26GXP2CuFMwt5L9EkrEcvZQo4kWuwPMojKfCnEgzoruFYrvz82eyZ7QqEB82WEjkSaC",
  "key9": "2d4aNnuRhch33hWrLPb7e1S1qdqfZgFgwn4YAix8q7kM5tGhBmkJLDjscXtRZasL6EFHckp1ZamvaGTMcDRVfU8m",
  "key10": "44rmY9z5ZTCZJakY226xF3kVNThKAjFhbYNDXCrYY6XUtu1gDaarFT9FVWCULSseRm32wAu4hbGn8SY8cRwFKyDe",
  "key11": "HbWUhnZVtZsPrkRApJTqfmQzXq67TnkzK5q4DQMwjNjnvotQNzNZ6CqW2qm9ccqUZW5s59uQjrnnps4LDUk4ky9",
  "key12": "2wJZ7g6GZ2tqZahuJQgmHnDhQV9yYmQCkprDZiMrrwUjuoXDCibbccnLcLSgSCejUwAqwBuyKjd7QBiLewr433AS",
  "key13": "MumL87XAXQ1ij4msfZfZ2NY4vHmoMTgY4kjzsTiwx7egNvE3qN7ax8JFLZG4YLqHwCtY2Z4XUy1R78X2eXkpeiH",
  "key14": "5KiYvU5FZFcW1MNhdss4py8qtNHSEUaUBTtsZM4xQzhUgryBRW6ofviQa1URYDxvMowDwdY8422mBn89a55XZWhr",
  "key15": "3d76f1cHsukc8bpzqZovT2wfLSqwMUKeU3EMjV3EunU4AB5BCMWHTjAoac6vTetYSK8xAQ9h8gyRbfP5QDHGYCpi",
  "key16": "5EcRQwdzzLUGJCr3LMiHdyc25tXHx5YuuuKt6qnqE2aoKMyQZMHtSscUZVQAKfd3qm9MwgubBLSwY8MGwmXxMJYe",
  "key17": "4VU3xJYpFe9WE4ehTTq6wYD5dHS42EVbsSMZuoTp1YafmweyDG9wvTtQ5SaPLch8pyS5aUp22naHY9y26ea2JMYp",
  "key18": "5t3H7YAPeyJ8gpYEt36TKfFdrSF2mBsvbuukaeTJRMZaUSYmVzc4M9aD2MZptPfnV8cZY4ebEVFS2sN7jkUwm2ex",
  "key19": "4uyCRq33whCJkmgfVsR4t3tvuLKTxZdsM4G8D1o68MN7qV8GDsgTMe3WTYhNqPLWH8HJtkstVqethC2qp2i9aXjg",
  "key20": "2cyaRptRBmdb67dn3usE1q9tmV6acFidt6KGye69eRMZPeWidKsWC6pjd3Xzt6iMNa6LA6mzVt9RjkEohxvGX3bh",
  "key21": "Na5T6zG3Xtb39n4FJ4BAibs3x8bUJRwMLNM7e42WjUJnLNxKuqyNxmca69YRXMzF1wtYhqykLJD72Bz8Pu4H5ST",
  "key22": "3LihCxoB8SwWUzLkVvGsqya9DiwosLo1wL8JC7gWh5H4At87GuMcJGd6T1Dgaomf5VF36mv7ypze97ywfCMWTTDg",
  "key23": "351pErxfgbGK2rAgftPSHtTPG2bqyPNSB7MxKSbdjaFyo4NfU66yvh8SMGRTn6pEHcYdcmYssnF4BcoS2WPp6MPz",
  "key24": "4edG5YTonHoPGg57yiaL8AEjZhgFvmVTiepNBPfKG5cB1bJ8iftvqBUTRHsx3zoqTFTZTVtMexU8tvCaZnutJKUM",
  "key25": "5PzXwFBzqYAs5SvJ16sVubeBruhPRSLjpWUGMrXW9VEsfe14fQDq2zXJ4iNYGfV1uMQaBUtYtP1Ynbs5rxkNY16F",
  "key26": "4Rw9fbRJ2TzqGVUb37vcV1ULMxmXNAhXRr9MvkZKardV1kpGkgrGGbE5PfvK5KCT8JYRs3dBQJV2NssWbhnDBYVk",
  "key27": "2p2ZzPqhGBZ4mFcYaCCW48xCcqMWXTADqp9eyRWBVXyepNUfT69E7o2mWjw5at3xDwZgCFHm92JFkURTj8RMWi4p"
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
