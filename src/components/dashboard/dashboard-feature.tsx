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
    "3g8shtbvrUHmZfJW5P5d6FuEoBFJtCuSRxMVWrREwQZRsT65THCm92ggXXdP5YkQSuXinp9J7YSWTE71bDUFnevg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34KmNqAQpP71fUg7M3cQrPFDvCGiSJphdJTGrheRoLwgZfpt7oon4ryF5U7fWMadiYcqyLzGxsTGW44r5f2J4Hp6",
  "key1": "4EBcem69zMWfX7qJHSvLo6tDSUzKUMqJuwnGrkTEh7MgdrHuPprUupkndMV7jGvUmJ5AVJtqXaogAEhbGgyeLED2",
  "key2": "2jGwQ1M5YsuVcbLSs5NK16JtDbAfddcynKN1KQmUWeGcTgv1LVjKHiZBNA1b61mkpvGuPKA5Lsy4f2G3dYMNoej1",
  "key3": "4SVqEENtzC77WLRdVNEC2DWJCVHT7XnwKc1FU9eGEFGVDUfcGXmUMfrQBunJF3SbL4ribDK9or3SfVwi7LeXrcSU",
  "key4": "4uEmQCvQFdLV52NEgYiDZUqdZ9yCQr8EZ6bepZR339gHnGBZr1LzVYB4DbyUDDv9msuvcVHTznu8f5JjMpHwrLWA",
  "key5": "3N1DQMufbb8TYjYppKnxwLsFry6C3FygQFNpJ39Ct4i8m2pojxnQ3Fc3LGY2syR3Vp8nuUEcgdHHpV1fSYDNGsmY",
  "key6": "Lr7WBb81d7Vtb4UdccgYmXed1qTRUhK8KopVBQ1zb5dhci72tkodbYT1qJ7JB43wyxf9qxdf1rtDVFGTq7EAE8Y",
  "key7": "4CvHRSdN3iyH33YMtgoe8V9HdTLWonY1NTdLaqcvjYEHJouHCLTgrWVaWktKTZMGsYpjEe4eHfSa1LeYbhMsL3wS",
  "key8": "5pmTd63wB7JgFtPbWQeWZPSEzP61EZ9AtkHwBEkcGqFpXQB1jpdQ2GTFCgzYyDBtuyp8u5h9tDio3LjQY31gM7nk",
  "key9": "4nE62XZ5ms9Z2z3QNbuvEqghxvfxTcbPmPaggPNbQKHU6FXoXP1YzKzutXyyFa86bnj4x5nEu63SBsBdWYEBd6kz",
  "key10": "8gpeXjcvUNF6eMpXHSKH2XqoCJLbnri3yyUK4GoNXdBaDcr68AYzxwBWw7QbtHzUxy6nVda3PuTPH5jjGqsfS9j",
  "key11": "3xXSWb2TWZ1EU42bQHoj9z5rxD91LMWyMaGSJeD42yrZtnkhdZZMs1GJHxBcfyXn213wmGgXwnPu2XtbfqmMnf6E",
  "key12": "2g1nMCZBvRNrvUoKKxgvDyLXqw6FfN1RmF91DqteUBL6jpDRjH9oafx4bBCwb5BEkhFbfjifts1yRX3cGPpHcegw",
  "key13": "4LmAeYSGFQJMuWYVvpJPtVJYRt5wnsMPX44bhEiSRujinjmqpahwaPfnSXWtHX4sZgCS3AekA2AZruZ6ikmCeGtj",
  "key14": "3Qew8YVmJjdYdaq2GYzWG8YfwrZGwLBhVKvW144exvZEJzWKTHWn8jdiXz9Dgd21eTriWTNKWWZYuqAamQDCVfQQ",
  "key15": "kmma2QbjkJbfTgi7ifH8Dz7BspWyoC93fTzaVtQtqQeKfZJEcLdH2QEEqdrdgk9Qc7ysoYghmEaxdNfKVWHovSF",
  "key16": "5962xE1V1e65Rsqp6WgDcfsrHkZgPBGnuEyyf6dsa9e3gCEYqLvsjdGoRNXUuYi3LtqCphckSd4Za9mAqwkjUJQF",
  "key17": "4NHdB9CB66Tt5o2G3xTVkxgACZwmmkTMnAFSurzE8HyDh1fYNqb9teQ3SuGYvFUb3sWqF8WoaEnKw7nGESYchoDy",
  "key18": "tB2cqj1px4jgd1ocb7h9XjiEQSJaRGguzhqnCGd4T2jZfCUR9fHXQmfnJSnK89ETNqBr2xqi7HrZUZaAVEWKXeJ",
  "key19": "3ywpkDHLZaXV3beftUZJ8ETEwhqMvMUCppp9NQ6sgqhjnnEKVTiCyyxF3PAakZT8Der9E1WXkmUJKwa8LvxKkVDH",
  "key20": "qjvYjpWoWJwZJ2DGEV2SZU9GbwAZMg2mWkViSV3xj8BghmVYSubqYgSCRXpbgaGV7tzEtXKDdyawEmf8ZdRGDSN",
  "key21": "2DxYBHvfHHWZoSqzb6Wh24PWds6JtRG2SofyE5soN7jh7WAQJqoMZHeKLV3FEnECTA6jKmAa6v8ZnyAZ1tsXdyLQ",
  "key22": "5xAEjpD5W2p3gnCTFd5KjQrGpMsh58tty8dQzX79mTph1FJJRcpskFYQ8LRRZNLWdT8iYashZt8yLqk29Jti4oCT",
  "key23": "33uLDMFDMUdwfCP75JbTaoszMTHK6oGGEweLhdfpiRtxzTd8uWx2bTS1EfBDSaCV6DL5YSRMiJt21rRZZoudDdcD",
  "key24": "5XdWSbPqPzUAysAEuijWwmebTgnSjN1cgjEoyQ1SeoLynmUW2u6MJPUpWiLamv1byU52Ce2ACRUf8hURXxZPoSYC",
  "key25": "4vB6wLoBk3ts65js72sQmowUG9EeCQ44zFwBqZthrupSvZHzh8saGmNrqZN9mkmN3eL9BrG4LiDe1Brhvq5oQYga",
  "key26": "zR6DjSs3RsSvLmmkBR2MGomWyruYfFK8LQo7pQVyq3XSYTtBnTm3vNM2qEYpWXFrpodkKA5YzsJTyZSheacSwvM",
  "key27": "3aegcuPWf3vqbESaSp1nm2Nz9meYRoje9spX6Srka4MNUKskupiwqfXMZ5crrZuN4PG6ptZ9MfxYmTgEycKfQ58U",
  "key28": "36u5U8dmfYck97TSstyQAHSe1snmG4jrmN2NptB6KWacxf2UqFnP62c8ngZ8q3SEMP71K3L4K9hVHqNa33v8tTuh",
  "key29": "4ekRZEg15JYeq2TVQzkTwoVMttNYd3aKkbUroFsnfLHthazELpQwQnonmRYDbPZztnNYywuinDm1ZepkLZ7wgakE",
  "key30": "3yATgZDeYA93uByu2vsBFTWYMQo3K9EF625UTEZpp7WcCMxjDWx5iRob8UwzafRXU5MgZpWKGAeLgzKqfARp6ohw",
  "key31": "45pQNAnFaTmZYhjJdyEBCAnRnUZrhYwkVBLJGX3fGp6y9ksL79pTjTncNWurnZFpKBs7MgyFoAsqjcHdkhb8KvCm",
  "key32": "T7xfAnCbnumE5DgpffrNMnPAtyaaFFpWSUfCiLeAUxDTYQJdDZqnoDoYQAbCnqi1MBUCh1nzRBvezC4TN9aaJon",
  "key33": "3i9AEvQGcpMgojrn4CWhG62N8nZb2mFGbNMHud2aHvmUSGDxPA9PhPLg3vswDT5xSrf7exgdKqHLdjgcfDbCcAom",
  "key34": "5R8QimVAZEzaY7j4aW3nDF9FepRr8zMZN3BGhCVMdT4sEoHXccgpYTRheGyuMUwP3szdZNnWmagP5b4qFWkUHo7G",
  "key35": "28FQDNuTpmWrfMd7enHB3e7P3rLvveWJZVNZ84Kgh5tThQ82AVa3bTPawKBFTBdY4JPaEWVVkZiwrroWaWiA69et",
  "key36": "5e7wHwq8A7fjGnErHjFYAkGkJywzxSKs6EEp5GM2J2seUmgcdHXU3nqrgK5a3LAQyyYzbMuY2hef6Lv56mxdjz9w",
  "key37": "4TGhY2mDqE7Arvnqva8viyQNQonTn2GAYWNCKWYeVJuQ1guFAZUC4KQsC2CFJyNjS9VxYbi3ST9MTKP1TaEQBMcq",
  "key38": "5cFeXf6q5T8qp1oibDwyqocjEr1iRUW8kANkzgwGTEMmgUjCTXvjvrpErHwt599qLpRT9LUaLR5dSRR3bapnQbBf",
  "key39": "2emE3AN74Cw91yiXWngQZUbKAD1wES6XuT97q7AFCay1qBycnoBAz6Hx1Uk1mx1aJkL3vnnoEw268aUvuhC5uZ78"
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
