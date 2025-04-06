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
    "5NtrmwkpVy2phBqUCd6YmbtUCQw7AQKhVNyAJ1iVWFWFiX9cWD2iboAWDsaRQ8EJLHmtjzifYRf5iBVVMnqBPbmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s5DJryEmpFgmEFuij36mKJnQup1yrFSs3pqSE5XL1HC2apGFxrYJyh2Ngpv1J5djBC2EtkY4iKgFVqj6qFTF8EA",
  "key1": "2qsC53s98bQgRmL6tT8TV38wyLWiSfUmRLc8qNEgUnofjYnoFqCLFnkeKJJjZmEDuRXg3mnLeunmXLj9Lupi9NNa",
  "key2": "3rCJeVkqxEgPFHqvbLh43WBqYHtvwEfAxiu32LcD93w6dgyALhVj1EsEwgPg6hcfiLm4HGGxdwnKKZk87ZXdpdHs",
  "key3": "3oMHjb8tu4FWtB2AGBDxmifoH5f9Qi6ubnynmBmTo5JmSxo8acnQqXdY4ZAZYqDU4BvaiGG1knTQHjK3ooyFBNiF",
  "key4": "3U3pYuEqjAThnBsjdsjh5ZK8n9ztnKSEvEwwA184XmXjqGe3iSSEbaToEvJHmxG5JC7vvUD65ULDNVa6Ps7isVh5",
  "key5": "2x97cjkghFin8KAaeCjUJx4qvNuknvUXGQzc4N9SQHJUT5RN5F3x9CU769K5i1nQFvKBzXpaUh2yzvArhJZTpUDa",
  "key6": "5dPwgVG2PSCEwcXVi5NvruRYJCYpsBPM3p4DmrhNBfN7YrwuCqKJPGGFT73ANqxedDKexW2K8oGhyFAJ5DPbaJAf",
  "key7": "sQZWyJMavYkargcZvp9Tg2SHHgdGWRafn7QwcJ6GXt9asgAmeuwCooKmzpJPCAwtFn1DNEKMsA4x59XZM67G8LM",
  "key8": "4bvTQQmv28M6pkU99rKuaUH39eR7wSbRXQ4UPegd8VypumM6W2eZen9jdFCfxhTCatXC7S53yLGUPrk6WofYDBPe",
  "key9": "BGNePiAEsCvwoswmZf12q93qjgYDAMvUT814WYn8sNqsqPDKS6fTyZ2hNj9GZLumdBMuiAoWaGcQkBkRR1gbtqV",
  "key10": "PiQtvt5L3Fb927HpLETGmYnfnAsN6pWyBP5JMN2386wy7aS8p9ZEc3kRD6dM9VvenLXcpXdw3hgpqXhrU288FrU",
  "key11": "2w3YGgfUfu9uCzQVPq9aFYso5DbF7tVfZipV1hn3XRf5QWCgvY8zcnBMUVHo2f72NGW1ynwxQ9ucdeT75nXkRess",
  "key12": "4yVJagTWTCHZZspCdu3gAeVMbb6z8XvHPRdLtZ5om5GtbwTiEeeqcsmLgCVPFcNPH8wccdiBWuuGC4StxRUEwDyD",
  "key13": "3tgPqVqNjefxDeF2NJ2upm2NqfWAdhGmnT7wYKKwqaBfLQ55cNNKDP4LW2tgZijQSZNQZUctCbqEuiuKUNSYPHuN",
  "key14": "2MsUx1Zu1Dg8kDE2dn738Nz5jihfaWpQq1ATbxBW7d5FeZdRHbxsizV94GDhdNnnbFctKJ6aKXYgyu9QFAtLYZdF",
  "key15": "4pSDRM7EG3xcuaEiNWpaQwoVg8jhUf6y9jRnBdch68X6YSUNb8KGVaGDY7ioWDBydU4n2B2kP4D37ghnWCycnRNu",
  "key16": "4hUR5T8HaWVyL4fczdD7c4RYdWH4UHeaqQfKGS1WSSoqYVnQMTPeiuPf67zCkY6wfEkRfkMSQdUB5JrUkH1VSipv",
  "key17": "242i5MSjHyPt7dFchXB52WwRMfXeN8cJsJa9eAaBCL8u2xN5gtg3vSK2gZMPVKocCDa8B6K4MbL5CuVZZWyC7bSa",
  "key18": "GWsJ2P2W2NChbCosN9fMVeynRJzEuhemTqyHfhncTNZNGkd9EoZdKDS8RGJDKxHzJoyMBhUYY89SUVfv5U7sWfy",
  "key19": "rj1YSGEsWdvGndoms1MzSPuErqSpwhbEa7xM3teewpta1anjAXPm4vWZdYnZfqcU8XtFWcJ1PcRYJuMM4yaA4tQ",
  "key20": "3V1YLfACGmnEbYomKRFjh7o1DdD7mkyixTEfCHxRnCZcbSvW8CiDHsKSxU2A1UcYMxQhHDt6NphNSWxV2nS4Xiop",
  "key21": "G85XNgm8P41kJj1zxaFqL3K3a7KDc6xaFw1hNYo9keqtSMJiXyCUs4r21Uo3YQQUszeSz7gTbHQy74XLdvskyRZ",
  "key22": "5pLaJp7G58gLVZr6V2JN4nEyAAGk1JexX3irbpkALKTfk813LnKZu9Yrq6tETeoTwqXdiEy6qYmvjLm7ka4tWvov",
  "key23": "Fg99P4sLTk3myzrNy1pNUtgLqFvYaQsw3s97PWcWTd6JNiGJ2fbAwPnyt8cPYtDC1HN1jrpom3giRsYNh5Us594",
  "key24": "1ho3geueknfwG6DPWjjEEtLxHn3kZte6ViChK1XfsnQQxzr1YYBFhaYsWtuGjaeNPBRYJYLmWJWJG3Xbc9XqpdE",
  "key25": "4WrgC83uH9FpgHjppXMvdSRZUVXqDRuC6g98uZgCFVLHqz81NkSjHYzU6jUaPwkwGNM4yz3rKVp8Z71tYbayXNzi",
  "key26": "pXjvEnjMeaLiUi74N3F36EiVo4h11k1uX8ifVufXNiWZKMm18wJGmwvpy6KXSXmhMysCBC2kL3t17T6Fayh2j6u",
  "key27": "2xHLscMitesD21yYduZy2NkjF3G6rqKWinAEzfs7tcd9dcFkiF7Cn8YyENU8CPzmVm5kJrT3V49xMnQqtTAFJk9Y",
  "key28": "2iZhR86iy91o9zXEx5iv1ey6RJyK4aw1xu8nqioqm5dBaDvHev9MbdCqEP1wigf8z3gvFgvbxLtsvk5HoY6iTALG"
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
