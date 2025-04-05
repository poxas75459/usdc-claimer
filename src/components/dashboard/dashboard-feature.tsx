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
    "Dzfk8cpGim5XMe9zL1wDjCwiCPEtoVrcJrrYsYYrpSN2VQwQpCXSTuoXzgtLBcjPcng8PbSf2s4p6UMHQf6g3c4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PfaUezTEBAZPaJqkh4W6BfBSyEcdmenSji3QtETTTfDKikyAAaSEYn7WfH11yUdq8ETS8wxyodTbm62i3Pj2xpH",
  "key1": "3qovDzXQFtKqV9eB1kDp1TohXnW8T7usuUSGNxs8L4UjYbqpeXxpNixurjzMAXcBdXHqhPdUZwwiBvaw1bMMqP92",
  "key2": "2ruYQuHHemZdK181gHU2jLFvJf4gJHx8siPBeGqKRBXd3Y2GCzKVDuQWMdFGGE2MigocZCarVhp2RKd3uDD6fHrr",
  "key3": "2TBm1Lc8eChZ2xD7pnmM1qT4hdY7dBDqsCXTfWz9GMDNHQWuGFPcKZ6hdZ6794JkZ6DeDF5zezvBjQoy2AhodHAz",
  "key4": "GcpEkTbrc2xoKf4yBd25PVToZPv2JT9Agommb1WurXaYyFTeQNHcjbhua15Zfui3Z6peivkwVaKUs2ezqEenKQ7",
  "key5": "62mqM8HAQTTZ8RUhg8gF5qkggSzvty1NBLp66v71bFzbMzY3GwyPd8PG6nXh3XTGvjHjU45jS4GzCuhz3RfjPsp7",
  "key6": "B1EX76dJsQf1ysZuf8DpGQwAzkJpXfJFDjzDTTvSDBTUvxpZo32au9paTXQ2RSb7VPtNFXdoSgXvejak2KazG23",
  "key7": "23A1ueW3aGgGoNHmKgdcxSZtFQyPkmyLQJwQR4Ye9kTxea62jCg3bHsdVFdGvPFqL8JouedjZpgRNKqQ7bJRvQrW",
  "key8": "xWsrADbdzs3pnSeuhNeqw4wNLD6AQmhpaHupkCt3enoVAxSJEbMk5rvVVg8VoAUyP7UkVP5HVV52pHf5vDamzBz",
  "key9": "3CoR3yJL4wFLS4m9FkkxUdxanTesx8rzRHWcHUhLXwtgBJmfafJ1WSmcS32UP55qzGZ6TVARmkiJyprqhrGSqJEN",
  "key10": "52tSwdBJghukWu5RDeY2U2yEodfKmfVMKGbTUjjp6pmN6eNr6RA7EKfGWKoTXp2iSfpUg86e5XJrtKk6LLmLaV4W",
  "key11": "47KH57TptZC6xEuAhEgvRbFATCirqBiuAgwHqxLtj46cnJu81Qbi2SS68t2eUoHACYfdnCrcM4Vagmq4cZcSf4pg",
  "key12": "cgGHCkZkrFG4pqwMwDbYJrFmr1cie8be4BkZjrRcZZYtfhWRo2HvcwFjKa2faPtZL8rsshDmPs9QijkJyU4DZfL",
  "key13": "2aimxs38PRyvUoM5WucyRuUGzZTtDAC6exmZQxPoGwAWG7ZWsmo4R8dyb7r2TWk46cy2UdmMrcQ8wrHAYJrc2foN",
  "key14": "2mSsJykgJ94A9271SXCR5MZVrXNwiKU71pENJ2MubkHfjJ4vswoNFcyS9uu8pXvGw1J5dbnakV77kwPws5V1SFay",
  "key15": "3Unk9zEAm6SPEgUxThHBSU72aLrGVtxBvVfza4x2WKcLW6LXQ7e5LTZuhNKyt6EKMAjVxfck6qwrN3VJDmwPmbwH",
  "key16": "3QosyuoWpjidExSkgfYynAMc8WNgwPt5uTWf4H1SGqzd2Po6NRV2qyMCcE238mtcoj1KfAVGihLVCqSwyyxY1c8j",
  "key17": "43LFZA1f3K8GcovPrnveSNX5X7b72aThtCaru1RgDtYJcEYAXRJupLEY8Lfk4rDPFrtdgXtJBTjdvUYVHTwTK35o",
  "key18": "skonJRiSMwekUvfn9fNmNDXFegRG3qvTux1j6C8rZPLntPXE2HmhR1xkNaFihPirTDADSDoDS9btgLhAbDv41qM",
  "key19": "4xRy4schWdMhEMZrLz3Uv8GZyT5SVfFNPy68VtNa8sSYuPbhp221GWrexebqSZSABbdwV1AZ1mJMxMCrSMhuWBU8",
  "key20": "2FNjWuaWHiuu8XbnXJ5V7vcXw5m4gCwBCNcc7EgtiWmBMDJM7Gh46YDgA1xhtPJ8phYHtwFW4KXvReTX4S8URT77",
  "key21": "4rFuNNmbCUH5otUSJxeJ9Lz1sfvevwTXPwqvfKYaVP22uYyDd8TWL71Jp1aYoLb6PB6BbRBjHGAa66UV4iuKdWYp",
  "key22": "4q8e1nu5KeaEGdUvMUwyXggftQrNBAC3WxbHfMRfoQrfCfBoWSQd7mZBSMWiCxMD8szrtQmpeECf6Dfsm78JVSpu",
  "key23": "gp7zzAMtYb1JbvawrQeo4KmCz7cCFokCChmH31nvuS8XSLs77BJdd3eG98eN8HHce8NWgXZSeivCP9dYefSLKUr",
  "key24": "4QyPDAxgUr94LMth8NxerLwB1nrPyNEazA9n8LLzgdGSq2LsMMNZYscDRCi1d8ZPPF8iGA2rczFCakG3CiTmUkz9",
  "key25": "2HpAjG6py5jYrDkhfbDdCL1aj2R2btRh5qmWnfUHWhRfzG2F5XzzYN3jFm7Qk1qaAPgNcERGcAjRmsR6j21QSPx5"
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
