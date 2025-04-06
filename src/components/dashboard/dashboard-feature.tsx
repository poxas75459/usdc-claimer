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
    "YGnqfasDuFKoZoZSjdkBfQGYRJEXbxZhrZUYNiCeQWmhVaLT43AoHwhLXLULGdajAqJDkJetzz9S7V9CHbGNrZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MZEwwBfaWHeLtXuY4JX4k2hjRn7F6X7cFc9tSk5PVf4FwM21sCLU6w8UP57Q6tKw3m4okExmrAgJXSCjbiM9uEi",
  "key1": "662svLgdpA4Nw3BpcVU25BMgu6j9xGEVHy6VUtoadvWQUj3c2vqKVzqZkYVjznndggVVwpUea7YsUKSqapZ7BM2C",
  "key2": "C8o8YwqvBEyKMsuSmBJXMvdNhiWWu2mXdqBQ1Ur8PXPeSAZDshqwpiem2CAFq1uwhCvUnXqTJ8hqSDE5c5qCoKK",
  "key3": "647JMKF8CEWAHxR2MRawdof9Apsdu4JHJKkU5DnXG3E1afFdGStjpTMZZLvquz52EiJJpy36HkNuSkDY5gjjdvtv",
  "key4": "3PC3ENXLZpaBJfFKrmE16tPAjLm1KPouXkpn8s42jbq4HJ1wgUNhGBMMpyKgtgA1CahzMxLfHCTsVWJ2jv1mMucu",
  "key5": "4VpqPjAQhPzFhYALDn1JiNHfn5y7Jy3Pzp7JdKGeD6B13VYdr4CrwuBbvbv9ds4bmXNxpzay8zLsSNApB6H6gLJS",
  "key6": "4XorghpQbCjXwpKH8hohEnWzrYbzBfjhwBWeXnhTQpEx6EQvW89bMUoYrmTQZW5WxPHvuNCjECzneDULG22VHgbj",
  "key7": "592LjvgqSX24p8yvcAUPSuYaBu5tsb6f1huB7CpF7SV162Xs5Ewq318hPqu6GL9dbhKD9ZTneXgnSeUUZN9bgaqU",
  "key8": "9pnuyMnPWzsfBvAW3h7XVKYgGuxtFkUiyboT7LYtSKnzPyK4YXzadnbt4rk9fqpbs12VX7hGdqtF3pUUcHXb6K9",
  "key9": "3cbYzDdkv7A78wifT2L6GP2fMZCZLjXpJB1gn8goARsxv2CoXSev9kxV32Yws1xjcrRF7DsYqiSUQSVcC8Dxq6Zz",
  "key10": "2EZFZfdu3FqunKmAo7rJpfEQ2KFX6DVXnE3qQsnwF7vLm5m3pPjcYRji4nSjS1MZRY4iDgbmPpMLjsiEnh63dHk5",
  "key11": "5t4S9EACJCsXYrUi7tiCf8JmL7gE7pKBnJ9h3W7Qdz5BCJQz7hQ8x5QJNgDwuSjxaAEL3gGfFKhrSakLVu1Am1vj",
  "key12": "35dXpU7WMFJz6gei3JapnfJhgVDs7YwQYpwDb5aDp7Z6iLHo3bDnf76tW6uYyzMbJhrYaEnqwiGxEMMXzWJ9mNum",
  "key13": "SqgNKcpWxFHxYa8r8Kxy8YKytnSXhkH2AaYZCTeA2kdKG8aPdSdeHQboeuAukjMUCUqeH3adFXV6cFM7M246Yfm",
  "key14": "5XPcYqVRNMCF8Mcijqtkf5XNSJDs621KDHHgnAJExScTymzECSYoJNCB9cHAHXg9p71hHd7TJUJSkYet4xDrpybg",
  "key15": "5APL9Z5SYoxPfjxRMj6WVAp6VE7s9icPuEjsRb8iGHK8P6f9odCWfWJwxngDd1yjKzembcpKy7QUdcNwgwEcPGbJ",
  "key16": "3n6YPUdN7jA3XCjtnhSJouumpAw8CLbyxFZ6MVoNJRmjfbjhwBr9gctA3ZbL895KogAb4kaFAh1ssgzBmxJ79Eqa",
  "key17": "5B3EBdu83xXGwaYHRK9mFJb24ZJC6hTKLGz78zKE61b3YwDEu3gM85uCGXWsAj1U6nF8RiBKZ3wLhEYnCjAa5BdJ",
  "key18": "52qT7pJ9D4cLvHuGrg9qNytHjtGJTfGbWRRMpqEFjHGBMzJNa1ER12LGj7egvDsJmRnAbsH6qsgb6e41qZW437UQ",
  "key19": "4csHVUjN6sPwbWnv6jqAEjP3JdxBZ9BLqCCXsqDmygTfN9EiKH6MjvZLeNKfpgXoNAXCJStwDagyFDSGSsUqcZm2",
  "key20": "38DiH8RhXQzbPnudRN4w6w6a2Wp9cVRDWP63qpirnxTts8ENw4yA4ffWnEHwWUxAQ8iFa6e5WBBeTVb3RWkUJ12d",
  "key21": "5yALq51pkiWJaxc63qeTnpn4Gs3g4AUcxnQH2gPPpJNpNvVacWaUSjTqKdPHaqrhrdo2J4kkYFb7PggRfHrqXW3b",
  "key22": "5z2o5uvwvUoYHXar4ixbRC2qupp79uHMqfCd8cZdAUDTF1LWasy6dEn8HoUzz9CeGF8SS3z5jr9BQmF8M9KUpNPj",
  "key23": "53RDZ2T79pddGeNG7DEEUtNErgDqZpYSKJTGVJKBeGbnSGpFafmVNfDhDDBm31qzbDBtCH6C4mHYPWHuwovf55UP",
  "key24": "2u68VrCj1ao8f8GkMc5rexu3ZvNbsnov1Jg33AkikziWuGwwFvoxybxDv5399wCGJ33ua4hS8jDdE5jbz6sc4pku",
  "key25": "55s9ye8jXqPjnKRdw4RKGGyqiRZDhiyJ91MRVRMuu9zNeUg2ZHdrGUFdJce8Sm7N2qCKQJLAL5GyAWNGiukmtf4n",
  "key26": "3ruFVNW994Vyc8Wk9mVJLFz3hwYYKvjL8uALRTia1g1VS8DdE4MRBhBe8QiXeLkQRQTQe1kf81MJDTqnnPGdG4TM",
  "key27": "3GRF6A5vhoDBQE3nS1DWWw7QYF4jsRv8HdX26x4hzdPuFP5zufqSAbXAwtxuXBPC1df52T5CesuBPNuu2zc5RGqc",
  "key28": "2hp6ytcKRi54UgM7vB3xMUDNcqZd9Q3ZKeNgBFU1LhcxDpYzaovLnCDvnFF3ehdPF7XJb87Sbp9PfUHfU66kyjSw",
  "key29": "aLGUscnXWHeQxT8NbLpSAV9hpk5oDTjubhcqKiBTSjhLCqYxZrhmRHP9sPLE4hkibjHCN3hBbV2YE5bpRmXNtCf"
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
