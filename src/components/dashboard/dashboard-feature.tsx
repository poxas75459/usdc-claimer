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
    "5LzY4bqEJk8jdkhyVVKT6JQpDdt9jEGBqRWKRnYWS67phBrsagj666sNyVhs166mATJpeWqmfbQtXGM5pgeWzjaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ybCXM2ftCbPisahwQWUgnXxdtH8SLsVTcm8umy3kfYhQaQJ8xL5uwW2h9kVaRpDzG1zDiNyaQq9yHh131urZjms",
  "key1": "4eQ3q68ZZcrWGAbhFQQ7f9258YNLqJqsw6mJgL6tHcCd7YSonHcCo3JtUiJttz26feMdrJ8HUvDGJoNceazApS1Y",
  "key2": "brZJQfh4wWXMqoxdYzKGkpgM1cviCkwMjUfwJhH84Yh5TnjvKcbn7yunrBUS77YmTgWtokWUbfX8kDWwd5PaMzK",
  "key3": "2v2wgW4woUf8fPVvjJgwDsvEvP5MbTcE9kM77iR5PNsoqUQXZhRSLt1V9hYpUoZniBtGF8FUaBr99eJk28B4qdi1",
  "key4": "3qHjHYMceu389gVJyyM3NGf5trgh9fWfzUbFeHa6gZSRtFxMYSNUniRMZACsxFgsC3J9g5e8urKKGtFxNKZACgwC",
  "key5": "51pveZJ6C3vRZFpWtEQhrFVys8vJ5At79mhuwYdhtHGQgM8si1CSYAjGdA9hm1b2TZFSmUqQPrS8sjPDMEKfV7yN",
  "key6": "5aefaPFibwZJ21pQdxX4csgUefPrTepuyDvqubMRBUWCzkpF3vDcDj8bxXwYhV5X7sbWuZUE8r6pAqqFFHYAq7Ay",
  "key7": "4fgZTu1P42pNSTzapjiBJMsSRwsFxjH8iXfY9MGmusyWAh6ZoM78ZxKvQLXt8Np42RB7puwUamHbwovs2BtbqApB",
  "key8": "3EXqszyDSD4W8X1DNh7KH4pharEUYWhgsA87ufBNw4FmYksUMMkU385dPSRAxosMqdZThrxfTNfzdZZJ4ezrSiQu",
  "key9": "VWSg3t31i6jQakW4bfLmu5nJW1i9cDfhUrjkNXhRhfB3h77u5hqtb1E648ZtWNBK6BgrnBMB65si4y3uDugV8YZ",
  "key10": "38pZyzoV7TEDa1h4FVmzVMzSqueiEBxpXCJ8krKHYvJZatxVc4MqvkSgwo6R6YcaY9zwVtmdkVrFWa8pEQDyfNRf",
  "key11": "3bucxxEvzpc9AWjFGDBhRV2PcYC4mwTQr2PuTjDxnrX6GttDy3ihD2kTa6fsbg33XD33Tr4uKmCEDKvU1Y6x3LPv",
  "key12": "49FzBjfvvtEdMdg1KRAvae44BSXk51sLRkV9Yvf11ty14FVPU1hHUUw7vPZQoKUKTuZoKxPKfQ5L2uUtoxtRbGWE",
  "key13": "2kb5kiRtehctkDmFk6LutBnDnN17AYLZ2VNXCYfu1o1fhGDbViF7TnniofYFBKLWKekKbi3m81Z8fh7NJTtbMzQP",
  "key14": "5hjrjdKThbryVhzUEHzrgWmWK5LDv311uqM6oH1hrzPj3evFDg7X3i7mJBCk8DHs2NfuqNS8EaveEJhZqifGHXXk",
  "key15": "2W8Ka1UQHFzdAXPnHJFBt1guS2ZdyTYfwkapkfMwwwHRLR48EXdL3EifpiVnWWdbJD9rdZZXhp6on3Zwe7LwAkzE",
  "key16": "3tAKipXD1SoPSANJ8Bycy1XweTxTzNKqwwt41riiMTzbrLnV9XedzPVNHffHd9BGcoFpZt1wnjyjX41P97yEg5Ak",
  "key17": "u4kaKcAgHAeQkPgNNnbQMJ976hpX1Vq1oCr4ftHVcJeTNtThrdriowd4oABUFVgNJbGe6AwX9D4D7N15SYR3tAE",
  "key18": "61ESMLQYG6JgTKH3NTcN8VuBhfaoa61azgWDyhxQ6wvf3V4WsoG1fJxatCsPvEVozMXpfUuPpezWtY4RGmMQkc8x",
  "key19": "4jAQXKvQBuda6d1do4wBgoLdkdyRTEPcm2Y9PMGVEVnosgPKMRG9GTbgVk2KGHEz6mKHSEVXMtdBDe4yPhFrcBLV",
  "key20": "3W6bosS9B5YxaADLKW78kbT3PRkzxHvqSUEv7MfRjJs2whwMvNP8KdNmQrbiiHEtKQSkSbMQbwnimZQC2PEUvfs9",
  "key21": "3v7TzSeaL3tEuyXGWYCjipkwwDH92ELxMmVJ3jKTkEGu3TBzjMm9vp1teDK2omvHTG2Fa2ECkcNqpCRKXuonbBX2",
  "key22": "3WPECrgKMQrbN5grKhD9y8VDhkv5orQx8pvxzqyoH9bJqnUjfkkf7BmgcpPrtNTpYLWhh5JyTFxDMf6rjnP7aj5x",
  "key23": "5gHsXWkphgWv6rGX5vdimrWc59kcVgDqS2jB6NWhqGeHQAUA4p3M1VpwNAPpQJYyShVYzws4J6TuSvFqMXkLjmD1",
  "key24": "3ioiiGZRswDbG6HKgAKBgAuM5evZfXW9TmQQv5JvL8YgtvqzrXDhJBwFs5DX9FyisrgcCeh9uPHwH4Bx2eJfKApo",
  "key25": "qvTXhfi8uyPSmESP5bBFaVqTw2QoaLtGtmBBnVEdL8fH2BZsLQEuzzfBgqnB3ZE9xKYqHZQppBKnV1Qz7vg3kyc",
  "key26": "5kt2AZPJknRWsY1tYzJ4SxhzoiisEDTBX9p6qJMityg4q1wsLp2HYmfLJWLiRvh9RjFj9v3JDNWXv5Nvt98AD6J6",
  "key27": "4kmkQJ18ahSWmYHNe7mNvsNktEr6tuwNZryyRqZChDfRp4uFoGEZfDN3bYfFKxtn3cjixnfjPdKS6uR57qshbHMY"
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
