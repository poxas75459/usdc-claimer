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
    "5gFtwmkwKdNgvM1His9wSvJG28h17z1QDGZmjTR9d2kqGwJtWDhuNRP8togY7P6dQQYYC7VeKFvkUQm5Bjq7HBEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55FjCq3Bt6Fi9cFadBK8nq7Lqh1tYKg8PSdAH7JPpXVSfSYFxpG1VsBTgqo9RUyV4CuE738e1Z2u7RHka4edFoQz",
  "key1": "3gj813wuqa8KKzKd3kBaRdgYJtUsjK7c8YE895dSKGVK7CNnYyLRkvTNva6SKQb7eLdKzMttMqeYAQyhjg4RbuGa",
  "key2": "4Sn1YwdY5sAfke8YUJLEgrgJxMEKnTpeHH7Zd9Cf9YvvwfNh5pXjgAg4KWbmHncGFAaS8FGm6pKs36AnsaGgVWRE",
  "key3": "tbQN2aJWZaq4QPEDNxuJ9VfccsGAVjbPJKoECV15zNe4oD5HffEmpsuuN2h3fg8gb9S9XusmU8A7Ec5EYDv7MQC",
  "key4": "2je3mW2BZPSb73rNRTC13QwGCcjCrAZayrv9DsQdRdBaQa3bqYJXu2nthfLHkwzSedzFoZkMAdHoQ8DEYBhZdcUs",
  "key5": "48QPE2DuUuh7BheDBbARFH25uwSX4oUAot3MbCSSKirmoYY2pA6TvzhD5RmCDvWz7ARHbejw1T94qyf9mG6BAs8m",
  "key6": "5nZruiAZEGXFpjwi5cMK91rXAx7vwSBChZeojJcEz1wGwdSCLCoBgcbHq8zGJoW3eSij7TYcrgdndajQ9YU2oZrN",
  "key7": "5DU1tgSb7RRMFVVqLkNTqJaSgqGgyhbr1Jft3zEpEX4LaV91pvH6xGMCqyQzs2ywkryqYJCWF3xqPefMA7zifJ42",
  "key8": "5WkgnBVPgKd17pidBQd4zng2uXB7VkiXBQtR59rjfz31A8Kc5zT471JXqxBTK42Yksozc4Dfmh7hm2CJA8NqdxJP",
  "key9": "3yiANgGjduQ7CxeCviutPkHUvhUjoKxSt8CH2qX79EFgMAXwz6iTmQCQooQMQi9rriMsrGgKGDbmLbGxzr1PfTSX",
  "key10": "36pu4ytKhujoS22DU1LJgjVXdLDJ1B9kZvawKPJ7w5NestufTxVY3JpS2oXBPDbz5y9Egma9NGPrqmvCtPDLi6kQ",
  "key11": "4aP7vZ6YgBqHhEKT25PtuuV6tLJzaKMKydyV7zrVUp3XhrkDfTJqgYVGE6Ag43C4DWcsNyxPgNsp7FEBCudGWEeX",
  "key12": "3SfcghKQRn2jbM6M2qt9ngzENK2yKJV2svJdHMrYjg7aEd3BPJN5xUR3E3xEdikfBEUDwCM2inGyrrr6Drjb62on",
  "key13": "29UrqrWpodHyZFTSZqnofETyr31ZzoTzbJN3T3Z3vPjnxugGFthmXEfHLdFMHkpbC7FBjp7pnzQmNnRpDjofYBvp",
  "key14": "3BrnCr66JfwA8LrQeySAQAXPF4PQcyrGoKwoKA3tjnhKsST8qUjcCX4UWbxquGpWgvBptKnwcTykwdczu1SgBUkS",
  "key15": "7AzrnsyjLEiJUdttLVexRhpTzWFHj5ruEXctzWksr93GSQP3msRDvrnkDtKaW1Jf4tVDGScno4FSiNNuPfotU8X",
  "key16": "35SFsCUbHCBpeADS4CVrMzphPZDyK1tLCqhahEYVcumfjCwgG5x4ErcPzRPhgoVwDRB5CvWSzDRKKGByty7pYncK",
  "key17": "AZ6Ky7uFkbDHQo9g81AMQ1jzzMrsC8T83bgtwixnRRf2bixEcGsEjRBVsrAAWk8CbhnUFsB4WH8xZzZMpTxtY9G",
  "key18": "2UKv4Je8VRVk9w5qRfNYFY8hxmEWv3pjHBJDFrLKaP38zyFecanQTNiY9VaiCA1q4gkE2hGQe4BNZPGAWFy619xh",
  "key19": "5erQsg6Bd7mJv1szV97ziKcAUCA1pX6KPoFGnsugrPnaAQfAUY274roJcdiMULpRCTCFjUaTa36tezEgUAD2Mkot",
  "key20": "54Gs8znzCcme15rBFg3Tzu7GeVjbyvkWqxwrpoG1jthwJZ7oZTFqCNhzJ5RAXVUEri8o8Xq2FzieZGgWJvv9Dm1y",
  "key21": "5L9U9sargWkEppuYUgrcZ1SVP45zgELXosc9j7eaPtyqxfFQpzw7beQJMAhcRyUALWrb58X5FkQc6rPEt12MuAem",
  "key22": "5NWLgLTQwSMY4aanLgFR6MZwCvVKfALXWZgH2c2dB95dWbzi7qXxJ6D51ygSQQab6vP9s4bi7sYk2E6ye7jrTsdE",
  "key23": "4fwUssdp1hK7qkKohkM8xB4szRgGe7t84ekHCzxDxtmoqJHknReK1LkZy81EDwiyZkQ57qoMyT49uw6JhBe7W2px",
  "key24": "2vhGZSLdMVuFKyY9iJnMMnm5hBmjQin3tfFzdwmukurmGCvL3vT1iuVKHvgL6ArC4YvGWGBZKvKiwDD4C9UphLan",
  "key25": "4akpEmhvNTwsEGnVkHJyjfqjqgFyg6EhxudcJNw5ZihE7GwwzzUmUB44EjDmycTAw1gpbKJGY1xKV2VvbyUYz3tQ",
  "key26": "2RCgiMQTr4NtwDNf8inaf26xhQ86CQT64isgHQxLqkvRWSNBfkpf6tpjZjVxyr9ufN4iNPMNfv5JC3f2hooen4Rd",
  "key27": "4MxBytS1D1EG7ZTBQLvrLD2aUiDxoEo99evcYxPx11MGYMXsws928Y6hri1eN3r1oKsFU4z3HaAJ7MDc1L79yiTk",
  "key28": "7t4YYC68hWERuwChfA1LoJFWV4tp8Xk4GqMYEYCCNHuDGdvZYFBARBHutTTCFj4msV6uQQ3gk7SUHxQPAP1XfWA"
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
