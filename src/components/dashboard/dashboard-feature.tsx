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
    "2XPm62kpJbpqZnQzKBnZve2pSB7dEu1VF1R3qwvw29ByhoKwH4CpBQaLdbyPJmwjF8eufPfrfxQxppinMxiQi6Wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dUCa8Q4dm3m6765bHuyzcEuPWQTgk8m7m7GUfDYFfRdUMED8pLvJDwQxDbw7CJWHKysDjKGyXEZN3nfBmQhsTFu",
  "key1": "4NXjkGC3RsKnd55CJXK7C8CWhgQKEzA8mMPonYujU5vngBpJJzQs9safMnukobjEDJqfF9Jy9LQjqvpcyqoFEGXz",
  "key2": "4cMyNuhKvK5eeaRbSsRrvVjNAU2pESTCHCYCPxMoWmFVPmvBmxFFRufsDqYHc3A5n7MTk3pMrnAZFBbWY17Wfge",
  "key3": "5QvMym6R5vY4NczLtA7xkoULHi97eoEG7K5FtJzFrwyJZbxyj4dYQEnM3rFfoNvL3nwvnGx9dUwUF3YHH3vKyM6s",
  "key4": "2F3sSQoX26zWRyeaLcR5zuaiqCBBDQCTUTZM3pCHGLyJTq2sY7iAzNHjxKmkdZ34M3uGsxCmyXaUvYuzNPqPw6qP",
  "key5": "4BFYrkWwcwT3ddTED9xSQUeaBdSzo42NKZh7kvpcnHEBxhCKRfFeUUgAP5T5LiqDXqDhKMPGNkd3sFsHgVcGodXG",
  "key6": "2skJbrKiq67tH458p8AUofXfqVaV7kFqC2esyuwNnV8v1HJiAZ7emLbhz5PWPFAYJvBg2moc1zLRp7tkRmwjPCaT",
  "key7": "5ruDVz661b63shjHyxTAiFt9t2jpzhCdEgsigbBrFs7MhQh7Mm6qa4ZaKMDt2ZnBxALjm64bpWLhgxnKoN6pL9Wp",
  "key8": "4eToBDWgCzHiU95dbeQcof6ESEFaCcxxqDAVL1gzKGW21UXSdhUVEFfcmytGyakDrQcobsUhUa7V8Dj6FeGZjcpD",
  "key9": "2Komnv45CJMFoekTM5pKdS7HubUy3h7cE1jLhbqvCPCoi5zhwsHqMUFATLcxTto4NwiwUoACuNksvgyPdskkZJ9L",
  "key10": "2TrsohaLMWrmMjzxufwdsVePp833ZdxJehoYcYPhbPSDufemavHV8yj1bHBQg3kLMnzWXTzXUvUDqDNaiEd88zZz",
  "key11": "4BiiQfFFdjS6qrkTjA6T4ZU3rnfNRf1sZfaai4AUsjFyRHX4Y5VHHgSqp8fJPByLQ84cgfjzaLNYCwiYyH9u5E3y",
  "key12": "4xY6KmHhT5n54y3aXMmXdRMC9czRBRE8ynMYSs4Krf2v7A5D7SaWNG8KM5s7dnFRfNXTw91yewAXYvcaxfnqVjhU",
  "key13": "2m9d731ZVyfSmKXaV9xjmffXYGkfHGW8ymQPA4wQpjjBWUPxrEq22b1h9kNjCtNpjgUemQ3hRriw5qkQhDEwRLzh",
  "key14": "2o3TND7Q5cxGPpCefYjmDnkeUbzQdXwyRk49ofzvKqh6A3Dv9YWuuHoKXNmj7PQ5M73M4MErKzB2cDmAYehtiW29",
  "key15": "2EGoDAYYQuAJ5wE1pU6oByCHHvtKfxa6FPdzpb6kC8LKfDRutsH6H2NN1Kkdjby4kfTiqCDp2U79ENMqCojxpuHf",
  "key16": "eufQiKsWf1cFJG8MCmg2xTHTwBqRTqyMZVbUfb7GZ853HRPjgzREYUQxv3inBJoLXs56gvJ6C32Awyj3mT7JAfX",
  "key17": "2dXS2qBXeVg4TWaK9gTCXEPaf9rbN9UiYCSNK56Poc3cJm5jjoWKQKtRnTfmSALsKRuHBzANHsBpSe2gzLkSjWZv",
  "key18": "2MaUaHCxFdkBKgP2Mkfc1VK9YPecxAhk9x3TP8W3UERLmuPzxmexWoBHvzcQAUS59qwivsVnw8otrTEfraRSsDUk",
  "key19": "2jeYuqtsG7es6JCHaVjvHyTHe9ocwZLY7uiTKTMEk76qYZSwxHSw4rZqm7uT9Yq18TZfFco8fEKhGH6gU5yRgAqw",
  "key20": "5mxoNzDCTQCsJWzhiNmeGiK2wW1ytbMpwyGXCWXmWveJgUVTJZsAiCyHkHxXqgSoZtVRVpPzrCML8tTddJ1ZE19B",
  "key21": "5fL5WnPc8WKd7C7dBBjNUVZr66Fj7F9sXoRZnaEwWhCZXVi3ndHBeBs3GFGhMDjMwLCpp3A6VQmAmGRsKovuF1xg",
  "key22": "5FW7iUmc5CLbr2HVbHjk9er2rkkWZpt2erxVNQwoJt512xm9erhqiRgryFZNDjs45CkyYV9nYscDFe9vj8aAGeGR",
  "key23": "3eAV26qPr9zxBDfb4wX4vEsLbf2bkdDYhiT2aNuYoJUHh4QFKoJAhmw9DtZbfKPLjXQETBy2952LV8YHhYgNzf14",
  "key24": "5RVsEzT1scBH4smFh9Fk5vzbjv6XZAPhjYFFjJ2hYBz1pg7tTsHpoF8t9ppW4Z295PnXh73tGu9cM5VpsuryeZ56",
  "key25": "3BSsNAvAPTo8yz8x9k6rZP9PoCisNaLGwpRRxQdHdqiDpaZKnAxJRA2MaVN3G5zztTAA5V5BijeXZNWLsb9oAx21",
  "key26": "2zUFT91E959auwNkFYsqyMUG2Kq8zVd2VRDouLQaiD1oKmLRrMxZ7iHuToHJe91pUEeBvDfU4LkGHS9xSDkE7PwC",
  "key27": "5vNpYbdnexDyFmX15k2CUdTaj5fb2jVAGWpFAgqCKyk9EX6P8ftAKrh6s9mcPwUMHaGoopC3tpwnBjGPHkmmJQCR",
  "key28": "4PMFF2sdFkXSdw6gagvwZwKHhmJrownPHoq41jJK6kHZhAWvPCgfV1F4zU7dW2pePvhhDyKJbshZCwMqRcHJcBEu",
  "key29": "4XKoPGqcHBZqCyEPn5Grwv8JPW59SS2jqSVinKPwQxPRAoMnSVeTeKqGbu5MtKb1Q4fkHvDQnG6GSHgVBFzDbxqE",
  "key30": "2gTyDyYk9uJFGADxmtZrPkjwds1EhtdrGzt2CUvYxtL3jZh9KF2g4GbMbSjvp3p4ATp9nTavCVgCEv3bCtC4a4UL"
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
