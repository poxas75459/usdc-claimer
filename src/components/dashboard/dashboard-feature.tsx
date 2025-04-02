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
    "2aW8QLtXcqgYVGj8hLkpQ51uQkcXizfwrzFXpdyXGf2ZnieCjZpGHtwn5PPLAMp7Fh5qZRRqfth57fHjKXHhHyFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3woujY5XZCcKJQUz3Y4sU14WoHZMTATwaQNNYMz9Jz7YHWprH272myweFHvmkyfeNcyquEXCUjHzAUYWUVcACQhz",
  "key1": "2NFLKNszzpcVbyefN3Wur2c1ddgRSAvCqWZY4dANSwxcwG3fHC5ShkZLKeZZdJAQtXYt6i6ym8Gh81av13HUdiPo",
  "key2": "4eu3nnF7sU864V3Cvfez8fEnCLM4sJgTa8iGzVhYSvesGE2FqDiTic4RkqGAEKmjTtmVogmCM41demtddZ7XeEGp",
  "key3": "3PfHx4WZQoFBq3x1U8J8wWNdSQHFtxGS4RnApt45DefuiXCrtSBcia3KJknHvasyMGN3ZVLzwuKsTp85M86dm7JF",
  "key4": "3Lq4tYZxvhWdbqj62fATC76Xit4BPY2rtDJt4AEJtfsjxa58ouTTqZQMLjGFrDFeNqrXwmw9FcwyWHrNdX7affo3",
  "key5": "5NC53pQHwtdUZacxD4QyjXzX8uht9aLwu6nikYZ1RcVXGSbmig65aFj93dbD6CJd5RMYjEXNRwJR1DCjQnGxekVN",
  "key6": "3UyCWtvidjqWG4y91BJx9PUnAagFLLZaceUeBWe7RzirZJUfMnnSiqhDMZf6k736fZKzkxkh5hJ4WzBo17aBZVHR",
  "key7": "5kzq8Xj7DUBJGz4Qs6mvcaxd1qxh2vsjrdJzYB1ZAWdf93LQBxQsspQSe4GkvAgeEBSSmqqftuDG4XESqpqMCLTM",
  "key8": "5Wq2TipNDN3GMzojfNn5jLsHProrGuPenaqXjGXzbjyktQs4zC2poqLmZWSceMBTWXd71mKoA66x9y7T56ekkFZc",
  "key9": "4V1gtCCwfP2goDkLVHqdHoAUeoCE1Z2ZMN3AYef1Cnrj2MwgKZ1Ned7twEP4meCjrtxMExG3JYo2j5uofRjA5AbS",
  "key10": "2xZAmgG91e4vH3KVdptWEKgYDBiqfSR8KrdXPbumeJWXbp7ToRU9UQooriEsEDGDmphP3NP4gHPhBDq9viJkTiJF",
  "key11": "2WUKNZovD3iKBjZKravETYeBgk9wFhofCWWXWMGwPzrUqVa7A3QidNQQnY876GphaawEkgA7CnPuaA1V8ECBFUpo",
  "key12": "3R3mhfSJnouHVWCWCh8rZJZA3zH52tLBB8YAQ7JaoyTDH2SGzXDjB1Mbf1JxfKNsUYcgZeFfotKAetnLe8XNpE7Y",
  "key13": "5X94FMEgbTyqcS49DaMjNVCZ2a78bHnfeWn6RLbhfqemFH1yNGWA1eMpUtyC83eMR4s2yR2qsxSuEeGz3zNRZRWF",
  "key14": "4vaVVjnSehCXeS2QhRd5vD91qzCftjrKDw8PqAXjnaaHVUrX1DutX6Dw8Bp6NC3SqDnmQB6iKobs8xoN54XwdE52",
  "key15": "V3PTnEWTzRxqN5VWW9LHtEKq2sdTBsfCsttZUm5a9DLaGSbCpvEMTiFfDg5e7Nh43GrgKHhNW6wGP5u4LBwNTC1",
  "key16": "4BeJKVzPbMwGsT3wwsLmLnN5PpKLZWCpqmN6xPDRyGiwhQZRY49YUFUpvD2anwCW9wt2Q77QqUsgFEYzAFMyKMhc",
  "key17": "5Rj7EdVZ5euCw7dddK8GUHnVpefuibZpH2ii6M6r8fZcQKuyKRCJf38gumFmCyBXkNevMAYW8RKqmVrYChicy17h",
  "key18": "VHa4NhrNYvWEjJairQUZKRC1RsMWFLkqZ9wwzuKwNvBkHeLuX9rB5GXEKvzuoMn4oS4MLDrQNNheGQxb227X8he",
  "key19": "3LpuKmeRdRh4yAorjqQznGzWEjBtDtqmDJCMwFyjvcqbYVtEJeWmY8gh7vJQUgYeCbyDWYhkdtKUmSV81k5Y9ckD",
  "key20": "3AAdeUGV7BQUsmFixnomsGQxYtenZeeBgcLkefFBk4hDD6HK8efu3EttK86aw4QTeVGsfKecyUk8FXu85YWVd6Pf",
  "key21": "5djCRNY9eisvEYcMFKtcsYQaBxT34ucFgicz3NxQVydtbSdPYM3PmGTkNQgKoGmYfhtxpBwUQVDMhrnoraLG3UiZ",
  "key22": "53euaVGBmmQNAbsmdvLgK3gSkynogyEiJyKo3sFRFt6NHj9qC5w9pZQTfdvtS4GCjdt9hKFLHo4wirYwXqvWfLfv",
  "key23": "4GdDikXxKJMpfo6kGPEiJRtLTuXWFi3H8p7ojkoRspQh21n4bNTXVeokP7wx6LGisWMhRgSo6sMJuM9yEi7bX9UM",
  "key24": "5V9XVJppXNSGVjDpeUDspqCDPjUXwg6Hi5ABVrW7fcmMTdCsAoUfYF8YuHDQctueHyGivz7j8H6UU3KvMDpg6CMx",
  "key25": "53xr7KBNvWaxZiyVLpNwhkSJDZZjMPetxpdkR6U1WePbmbHkehmdJxdnmj8VozUUMLzWsZrjsP2TAAZmta95frH",
  "key26": "b5r4k4u1bdgwFahU3kYKL1gFnMB7XwCmZKxdZiqDevLH1AbeUC3HKLqcqeovYqMtF7AKLPWfqFH2QegTGTgEB9Y",
  "key27": "5cBJesm7gPnKMX25jEnLCqSMzSYmL1yPiEFuKfpYCr6QxBZNVck9Vqe49tuBjmt5DojixXEzgSaQmtLUPB7A2hWd",
  "key28": "5jg6kcKh5JdXVHZeZZdcwg3QPY5jfVxYoszvMN9RvWfhNbq9CYK37n4QDMk8dX7gtbkCM9F8df1szfP2aKCPBjBD"
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
