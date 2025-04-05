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
    "BNJX25W74ZEBFxAdLpGHFmCY3PYFhmG3mUNo4x7FMnRL8byKt8afHjKDYX3jvXxacXim7uDNsJmRh3Whc7yrgTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yuso6k9kVtid5CXxfmFFL1BdLnYZBd8pxzcWFoXQecc2WtRfpHTc2a9w96yaBPzzPfCDv2irkqGf9gdPPLSKvPL",
  "key1": "25DrMY8ZdWF6zV8hHkqVuPyBNKCfNHaHZtGwPYdFTjgQVm9iCNMn5jaQaZgPYhHjEwdGN3TudL9b4xjKoF2Fgjws",
  "key2": "49qodHYZusUpwHFgu8CEa65a7rVDjXH2TC99TLrGxvnE5kbJRQzsh4U44iXpPDSbDF2ffzMXWFfSZVrYzezstoBZ",
  "key3": "4CEhsE1NAzhvtFnC7xQsbTLH9iePRUdoJkE7dx3FLN231Kqpxn6H4YoBfQcVZ9Nw99q1KkrnYvJJ3E2bqVYS4f3d",
  "key4": "598rwPJUDKcHkVBTBPHEvVGS6UGKwguCL65nM3Rhk8bPWdYDrV1Eu3cz2AoPCnCcR5E375XztWebaCvPBDzTVh3d",
  "key5": "67PqzJwevF4yhXyMhrZ6Tbo3Wyxy8kxJAjZ1V8dK5NTzmiZpsYCJ1pDUztGT7YE5ixrX8ehWisbKdBnEx2XiayHo",
  "key6": "4NfuJoUXUSAwWNLvJyhcPH2fLg2HYNyXgsrFQQCYjLDduMGJhXb8SguR2zweDYs7q6Sjf68BoPVYQgtC1DTDiXLn",
  "key7": "4WrhiwFhUotUGkXcr11mjVa1oMt8r8FPJaTehYmCKdB9HgtHQZifBTj9wXdPyvQ7cUGahVJ6SR9JAsWAmAvSh1Ev",
  "key8": "4mevZvt6U6ffANWbkZdWckLzpGGEbd3jCnBQoXtmppPxXCcNwjhv9hQCAV4dZ6Dbwu8bjQbKCiFx75pLKxwYXRFr",
  "key9": "2zhkrnHjuVTFZp8murpbSMuoUh2Mx11A5cjSb6i5PiKH5sUJkezwyHbdh5N4oMdxFoniX7KdGGbB4YxihR2jqXHt",
  "key10": "5QZfbmzDt4F1GgtKakcHWkKFEqUuWFdG5wTwZQ8smVoEMR2unSD5CvG3TTQffWJBxShxm4mATLLtok16tvvAP1sv",
  "key11": "61vWGUGeBMHcXK9GSGxqHpa55kbLFUPrD3it6ueRacLqmfAAsWw325vR6jJQpc4dFvA8EcMddJwFcDrtp7YpuaGR",
  "key12": "3yq82vjeKbzqDi3yTfJ8Qr2kiWrH5FdQBBE1eAveXFp7kakuH4FttLE6YxKV6NwYpScvD52iNcRWkAe438KYpwvV",
  "key13": "491CnEhoKRZFVu7hNqxw3JEuqnxKLEyweKk6VtwmTwKrSH6N1mcgQ9AFs1haXtpV6VpgXk9aWwZRD5QBLARAB8im",
  "key14": "5nRFPamtYsPNdF3MTTBcrQPvEXhjDjUKyVGBgfXdRkRZfofv4dcpD2qk7uFpXAXnf9jjjgtwxZDPHSY92ELYXyNA",
  "key15": "2JepnFKgSVK4rMMTSS93XS7JTUUVdgrzUNBUJuCqkAEGj5QM6ejmBKR6tY27J8As4a9ZtsCgX55zFDnB72YJjAGP",
  "key16": "2jbttnYFnCQSMdWfJdJXKKvLd2mM1CXSFJigjQvZqYEeHDbcG2CQtvUpraL3Tbrm4VDattboCbuf5UV21LJQWisq",
  "key17": "4cGvX2FzncwYqkeywXL6zTQNahS8UeiL2GKwxTaRVp9YAXTGsTjD49kbANAT3a5cM5QSdPxTPz9tXjuHD8SkzgqM",
  "key18": "29crRavJTKuxLFKfggJFu2g6GNpEBVTvEGmoCxJrzccryH2TaAuhfe7ra4SyuKXw2twxDvQWGpiVffAMLjqTThiJ",
  "key19": "4B2gi4hK8auvBiTFnerWPYrHtBVRSBFJFc5nqRoRiWLzr7aFpe4LaXnWXEwLpbzFBsmA2Q9HPdccbH14e6xmBzzc",
  "key20": "4v8SXwgd7d1xhN5JTzoCKEAYT384TL58rKfKMDRtqNeu53FNa4W95cVfPzQSkB4hrc4dXTY9hMdhCCayWnabXaD4",
  "key21": "4WHLZB9c227TKCppFgT6FQQbfpjYX1nuTPu8ARmFXZwiBznGgcXx7rbHiTFTuVAQLwX5cLzzv3vNr3CYPUWNfdeD",
  "key22": "2LFNSqpY4TgCrSbUbkRNK7mkGd5QXSTqbiS1t7iFbUZrB4WEeHQvKBtnybW6igDuW56Uu5PeoixfM9NJ1ayJzP87",
  "key23": "3E2svYWvRwHbrkVnY6bvVPkAYw8R7rNp1u2eKhCCTmbvb7A1uM3oThF8Le8He5ryHKxNK8HDkzZVbGbhtyPy5Ytg",
  "key24": "4jfvQ2d96hzKQra2hfizS4H3nT8PURLdToFh2nnz6ZAQEHNygM5NZNrvqp3qjA82mFVpPRcHzUTQ3dYcm87ZNWsw"
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
