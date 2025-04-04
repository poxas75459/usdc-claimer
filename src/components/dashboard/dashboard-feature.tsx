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
    "4gAFfk1oakBNDebFJkBfnvZuVDyyC4GgxUCapTuvfnvehTYFmRp8UBpwEq2q49nmyc1G7H5PbAXTrfM94veciaBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52g6eNQ2VSw6JWffpHpyMXGMjnD2EEYE7rsZTm6Wvqrq6JGQezSsu6AD9pJtP4RWSAWoCyZh77gHm1Zer8zJnrt7",
  "key1": "4pQdpFcWYLoWdwkuX7vC6Ky9oq6H5bnkisJrtjjUh5RaXm71gw4iBFw7xVpGbDuapmH9PhuxdwuJkBUJtVa9VRe2",
  "key2": "4zarNa6rEP4aQgHLdaxJg8JW9ZzbDaANDcrFhGXRdPwW53yKFnbxCi2ZC1iR66qkK1ppihc315cXKfvPmgcarACj",
  "key3": "3BZvYHMDSTmgW452Frgj9eXjb7u4sbuAvqEimRcigaMNuEHdxfff6U8eGan8BH1RJmvXHRuDAMR2AgLAaXjdE4A5",
  "key4": "33TfQo7DUv87n2GDLLHEAaUawhuCvU7KzkGuApoEuqr4gpm5zQFQmuT1SHR246meYXAAy81EhH9cGwr67Z1CbxRv",
  "key5": "4RfbkDkapMFUGWZcQu5mK3LWNKroy3c6BmW3XHBJAc3iUEPRa1x9CgKvjrNdHRiqfabqaUxiysm8eLG9iDePoMEE",
  "key6": "3Ky9p26sPmfo7mchJ5rmJUzya2FH7ctLBZQyGWfwsSmGsuFYvLrSNMKxqZAYApe7y1xA7xRkGSuQSNc9uDYiRVam",
  "key7": "atEwseWKwFMmWU8a71aky56JrqNeCRH2QHuarp4nuXAqK3xBU531PvFbmmS6ZwA4RrDrJB2nLQxggsrPZV7bwrf",
  "key8": "3xyV8EJNXPDr4dvXdsNyKSWBtRmNGa9TvDEVBjiJRiyVtTBWcntAZpus5ud1inDtkpiZtGSvj7UNDQwp3KK9Lgu1",
  "key9": "5YCkpR6uqi6xBV7ej1DVckwfnG1HtZzUP3YUFLuhjC6Y1AimgNX5sS7oTHGU5MzLyk7Te3F9nQecumgSUopDQiQA",
  "key10": "5NSCjJRdDWVpCfvAoTmAbWsLwtLYumDrXdMnirkJ99XwBqvpmHZZMkXzvVCyNMz9hwZn9VcQvxT7Tj5ZoqdKy8wF",
  "key11": "4pEZeNwCyyGZmZZwtgMY6nfaEAaEjAeKbNYNPZZuJi9vxwsUpE9FzcieKDz2LmhTodqamaJkwzbxw87xjjk1gHGr",
  "key12": "2F3PH6ec2n1q58RHGmCZjxGSiycYN3DGkhUQ7ntgMUAwNUGZ4FQvVj8Wftm5rx4MxHWx48H7Eafyg5w5nNb2dNXX",
  "key13": "xhompuaZo4iQ6kvu9eBNSXuscGmECgs6ahHqHT5Hg5eScTaZfRqAvoUk7R97dBYqbPEwpsUUDSVXKZG6bMzzgHB",
  "key14": "4DGfoiJ8BLtwtcgqP2mA4FTbQWP6PZj1GjBgWoYpYb671HUTKu2coEN85WjADgdRdsheBm9htpwExtwbZenC37M4",
  "key15": "5P1wrhn3j9P7EsRCve8M6f454g7gwvxVzxJTW74tnZYJxta8kKYWVEBkvxp4f3dUg7hnTJ58wxKFBojAv5gS5qxh",
  "key16": "4K9Y4XTagRmoxXGQ9KAiX49e7t99T41n8qa22WfKsbxD1EBQ5FpdduDaXRnAUKUXGhG6Y8VaYyMJ2bJgZkK8PKP1",
  "key17": "2HGr2C8y8pe11LKEqTgEbgoxJ1RDjFxrkBeBryLGKVh4SVK7qTbJxePvSqtN74VKKtQ6cTbmyzpdTQxbUHrDGimS",
  "key18": "2Jky1YsHaWHk5r7mbPWDsPJqLrcBfuVW2j9gLhfWU3EzGAiYQM8STaq3vArDSqJjdwAkZhUrPryhP2Wq29PDKkhJ",
  "key19": "2GXEf5ewS1wgbJy2225Bz7k9pYuBph3qvQs5apvob42nVS3DdcxLvbXeHCLqfKtq2DyHA6nRraEGsGZNoM9UD5fx",
  "key20": "4h4g9CEhRksHAVeDAV33mnV35dF5nJJhooAdLR5P4yfJLDebQ58tkVpzaFZ2Ww4rxsdoAHjE9K96A6CpTBTsKnof",
  "key21": "4jqqvTAFm93bubwT7hhC3h3D8vmXW5BKoGBttXtPyNZ5UfRopJzHCrWAD1ybvA2sbxD6fvFjwgwMX2ATvUq436d1",
  "key22": "5EwWaCTwwWYBeiF4bxhPccBDgZiZzJLxwYTc3XWGavazSRUAJvxPyKEJjGrQKHoPNYVqxSJKzZYTnLnWB4md8xm",
  "key23": "4YEYEkvt8staKwzRBtNS1L7Z82Nihs9HMY9gcysPAcrwZ9z5PPv6LFTbNktYifNTZzNZQEm2pc3NspQhusc6qEAY",
  "key24": "3q1EoNUyR98zf3rFhYdggPMhhZGLtUgQFu1oJCXR6uVKNnudfAHEKxA2pVQ9wDtmUy9GDLzgAqpBTcgPKzUc1vyS",
  "key25": "m2NfW5nfrjsYLrTtJ2RWH6rkPzbE2D9gZCvGaBe5BfJP8tXbhVhZsQLuWeT5McqgnTFYsGfm4Kx6wmzeBhC3o6H",
  "key26": "3iHd4ho7SrD42LsyQk8PD9FAGb6xGGbtY2hUtiyniupfXYbcunSvfNRVBm51gebYb8a9Xbi3JjcJC2RnN5TwnqqU",
  "key27": "3dhiZfXttHS7wHsFh7zjwQreRc9K3Tu2ovmBVJAKdNqFSbAxCgk7byg73K6PvBVjyo4F7czsr9WwHG7A7zWC1yuR",
  "key28": "SdB3ynGVTrbYY6QqiDHQPiPpebzKwL8sffpRaQeen3GtyevSaqMGeEYSM8d1eof3i1K7Dqjp2jX4jsAZFpHxP8M",
  "key29": "4HuACFSCrFyor4NzAcaHxdqCV6G4QEptopcTHz25VX3qVnygdvEVyfGsxFycZ34wwh4bQbrZHqmRcC5JQGTJNabp",
  "key30": "2ipSDtqP3LtK2whmteFdfYn9ikusfeNBZzDmH2LwgbCXm4YXqMTrzGJyTqvY27R6wT2b2Kp2FGxuRWYUXveYW4gA",
  "key31": "4UGoMdbPHUVhywW4uAb8pKHKLmLCaNueRWdsQXWGrvAFcLxUCg7sXTRLKkCLMaxQQmY7sYE1siVGsmSHcGtFokud"
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
