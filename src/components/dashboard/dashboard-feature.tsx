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
    "2YMqzN6BseLaWUbWHMrJPF9Lfqrfd3W9ibv6rGh9HHHwK3NgknhwHoumjv8Lez7AUBboem2TVWZ16kPfqkbEFc1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63S2kPAvsZMN3BmnY17v33eW6LhsW6LmxJ2cqR57jP89yi6VbAWg4f65WusDUJ2YyF6kDBvs8g6yXqUFcUrVfbsK",
  "key1": "2nVECQYW8eXBiFGUufNwTYc8bpQJw8YvP8tXF2ESoY6GjcpyF7AgUYACtT9nHaDzuTHNq8tMjvznMZvwKgRWYJia",
  "key2": "3Aq7oP43oq7x2ikg2s2Gop18PpPHE6AxMF57MqWeEwe49gGbVZFVqFAkis5fb6Q3TkYKL9dmuVZV9X2zt6HEpDRp",
  "key3": "4wHx1EMVCVTKFeXHBVypUtR1WyP398dxv3ieoUz9RLw5PDeUdMA1UrMBjr8ETpxNbP6AasFoPnnt6ZwmiapgyiUt",
  "key4": "54CknuYiHJF9YbZDdjw2qD3TTqSXmiV2Lrf1ggbEXzV4NagTNt7dJJfV19eNiDt8Jf8iBj4JXXnH2Dy7pgi8QzDw",
  "key5": "5nfR8SrR2ML3qKUmxQo6Pdg26mx2CWzD5k8BpaP8BSVFwCfGrmELm4ncBR3AeDKasyMquMBGFzpKEcPYrTcrrBkZ",
  "key6": "3hEbpBcnYJfmMgWNEaLG9cJQg7vndC19TB9NkZcUWHVYbUMWAvnJymSkTRX7tWki6VjxkCeGgDC5G5rQPvtC8Uw3",
  "key7": "r9UC8Awi6jrRwSAEn1zivRJiG7aYB7VPksgAzJoTAdgMdcUenxnubc8M9H8FBXv4Qh983ro59czvnQbrDEBaVqT",
  "key8": "CTdUQCLpXSdmkhVtWx6J6DTjgqRzkqpKkBGvqjKaDa6PBt2QHwdc7t3tEk6AqWQDKNsHUQsXfixVS153gMbh1Zi",
  "key9": "2GQ7b2sE3FopgUQ3ZAqnqhga5MbC1FDSyEnGCshob1Agz3LSbexnGYvvgpLkSodL9f8LfYfUkK9QnR1Sw7Y6hCmR",
  "key10": "663PWMbUtKmXzMMgnZ5s2rEJ2TyyMcwZSAqHDqsrGWuau2kHeYKPXGoayZY8AfwRXYRAn9gegTEwmwGG12VVUPRh",
  "key11": "2it9o9wscqH6RNMwyTkJJxm3vrUtUFdKnumZEKubsftgZ7FuPUiuarwP9YyFkXkqekTQ2gJw4w1cJjNRtgwGiRhj",
  "key12": "WDHG4qnRy1N6jBHGVoDK5oVYZed98gB53LayuY5Vw6H6YkDd6oNaF4SKUzwBSLXvjS1yBTtTfK9MYUSmxZrX1ya",
  "key13": "4RPudnLzvwqus4B5kuimyg96Moi7gcbZ4gkv69YLzXogQuuZbYXVZttPKinuWm5sxxXZhNrbQh636KX1Ybj1hR7B",
  "key14": "2zVGgeep2uKL4Fu2xChYK3KEweEaCYi5BNhRBgjq4MHnghyGLkzF6Czq8sX5ytdbNzLcvubKXB6n22G5ypwRirfU",
  "key15": "MyEbKdqjeuce3DArRynNsisna2n9P9GWnGRrLmkXwd72zXxeJhpF2odfrXPfqgzS23x2dmHn8G4cFByEMHdyorn",
  "key16": "fJajrFaPT79h4hzubUHhUVbaPtkwwX8s1LbXf9EvxAKYcpmpqUqq9Tfvas8naTjs5cWSNC7NdoveNXWv4xVfL3u",
  "key17": "59R7fDYBBzQU4kAxwi6UyzmHHt63bFYXiAeKoLFQUAntefg7g3119Bzk6FY3hEeu2cmLWnx4bvLTNJkQwiV9Ea4q",
  "key18": "4Exo7eQggQkbxpugP3QAKR7XLEqwXn37Lf1p9wkyXaL7jQRHekLdq8CUdNWeVuDhiqVvwMYYbSkXfk6qdn95wnZG",
  "key19": "3oXL3QyPdTFYbibLKtj8tquCsePbPG6jxJiTBcKPRc5NuTmFqzLzPRQDjqPUNTQJznaNThxEHaKLWA4LTZ3rZ96y",
  "key20": "oYmgvCPEn4kpRe1jXsBBac87z88sHeHYNQNeyRZPuhx6KYHXgYTLj9jtXdzaKtbwcnt3uLtRQPbgnF7aGau2BnW",
  "key21": "2wePawvoUwi7jimgobUhuuDife42sXhnegs5Ap7w7EudQb2n69ZNiG3FdCBuH7xKRi9JNtiPBA7tbSos7dBAdttK",
  "key22": "5D7kySKVNrJgjA2T33NuULuK4C1MCAcFnCBQof53haK2kvFEhjrmK9syPfZTsu2CYsSKhxEuyEMgz1DGaMdmc8hT",
  "key23": "4phU3qyUJa6CYLxKsv8pqRkybmAtvfo3gZ1sn1qfHmMH2UgxHHiLShNUVcAtrsEhvaMJ3hBNmfiH4yyS7f8rjsUt",
  "key24": "43idbQFEoL1HpPP5HhbZoXFmphmi3UpCxvhYLVxcNeagLL4tdprx7fkHH2CxEny9JXBSMLFt1ESaqcunpKWU1GKj",
  "key25": "41RVA7bSPBk29FLW3KxWi9pYfhzTkZwNn2JwKkK5uya74UsXBtN3U2iTLdTqupMPMZ2bx3G5QK2M5xiHhSSBfqPp",
  "key26": "29d3WGACEbwbcqafKJJ1ZZdM4zBnWe28JdPjxysPwxCfS3r1sHwPBKzjYkei468e47MK4U5uronnDCqojoph2QNP",
  "key27": "5XHuf5UPc85Qg4smA7sH8bqXvqDHxYQgdKt5K2b425GKp59nzwS87Xq5Wa84tb2xYrj1rLUkkDbPGQNbygdhiJU1"
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
