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
    "XA9gbE8d1pC51qoFQMM2GHndyajhUrKQCBkb3N58mB4PcpKjdJmjr5JA5bpditZBAfaVcXZnm459o9QdHpaMMWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RguMxrytR5YxKfixhL72YrqFe5YegvVAgZqqUHnUq5rSeF8gjQQuczo3zvjoCJcRuAqtvSayec3v56zivgLoTdj",
  "key1": "3HibTGtq82F8rZRievyi9q1a1FamNkYFFFjf8hPhxpJBXK2jhSWTmx73EZKuSLc4dy8c6cEh7Ti6dMZGS6PfPBu8",
  "key2": "4fSQWaSyfx8ysYCp7P1dnj2EG7tLRMLeP2n9pi8coFLEsM9MDDnabT98JCK5M9TnJKXoqYCJEBXwwFCpuEbYzYPn",
  "key3": "3h8mhnauTHKbDn8ZUx9F1T3aAih3yJKUrLbzcyg2D4GwGBVmPpUXmQNxXAvw5aqM92qgfBhENLJd3e47wkBRGcN6",
  "key4": "2QPfuiju5vVmW4aS2XmC5WfSdEUZnueHoBWJuVn7qsfz1UP1bWJswkX1sYBDbP4XyMeom6U2NGQbXcW6ySuA3hPQ",
  "key5": "3VZJmu2dgGszS8zZ9ZrJ918zSAN3nAakyAADabQMPRbNn3TZQqy968dprHNyR9NKh5D2aq8VGTJMCe5oK3d4jt39",
  "key6": "3S7pLnAVnM66QztvtnYJ2zjeB3HKHb1uCfhAjdffJwq8tJtubQ2ZrFgEYSAuvCEBxcw9BgTGpJYMqgcntSbFeccr",
  "key7": "3jWexBz3c1zeQYmEnWoz9ChJiVWXQcRV6p49tqkWh6XEKgD511m8GXzhfAhH8KL15tJryhLhxVhk7V3KgNGPAjbD",
  "key8": "64iSgVqgU4jbSBuU7ujgAV3jCfRKE95qHqAAuTUFD6XsaNkxN293y9jd6uS65tpn82iPQjTBAq6QyHpY7VypGhsJ",
  "key9": "35pyAQc8je77o6tZeWxAKqcN9J6Zi9hkyHUz6xNDFnX6jTRHjpjMUSN5RcEh9KT8zsnmumqtWyqH4H3VGCm7Rdpp",
  "key10": "32drLv9MCSfXRruLv1PSWkRVqcRfZpApf4RJMTpeTWqWK62Xj6did1yd7UCxYTdAr857D6CKeSqDZPrp9muZAcoE",
  "key11": "5q6HuTjEtUE1TNXcHwt7p1EmcUjuDFQ8hktyJyemVHuxatY1R2Nc7GKNjVmt1nmhq5UGp4VCt7U4U1tn2gsWuKvG",
  "key12": "4qbtE5YvKUoik86UGetWT8gf9Nc5Xm2XJvNEKYAtNyqmq6Di6wxBLCtFYrHKgGkKaGxFrE3oB9QqD6g3XLdYdaKB",
  "key13": "5kUDGZov2dHaQhRgVATyTGkQZ2NVbuds7ngLbcquczmrNiSnjnJ9g4MA65onbxHaZnzxstDgLWrwaduFh29K5pYw",
  "key14": "2mBjh8jcUjWn9pg3RvWyJ6zHV9XPAAgnoKdLxntFhfXd7bVTnKrNYY6xRkbkVJvB427snCkYjtmHn9dco8rwxShM",
  "key15": "28N28d8V6LyDkcYms95rz4KqaBomca3g49uiHeqRAPjoM7X7yKBx4ueAZryUAGxYLfVaLhTqF7S1dR6Nd8MCgiRK",
  "key16": "4zdrDjXiYMmn4JujdGy468Jwm2Gparxxf3UDVqYj9awvDLp5cszVLWJ2UPuHGLtVtBbsecDLANGkTQsY1FvpEmhu",
  "key17": "2PfWUCXLGEZs9bmXubcfQ4pFzRSJsUnb3quZdfTgk3H7NVNshJnmhV5sHZsHMr4ZyupbYRauPnmFpQWT6uRHNSj8",
  "key18": "2g2u2pW3kCLvEsEhdnUDTjzKMCXAW76bDTp9qjttKT9NJk76K4PJKHX1z5FLH8jMzTRiMhzejPu3yDcJkyEcWoyK",
  "key19": "48DqTd7eSPSfjoAx8bS2H4ncAMJJs7QwRHhJrVKbkmPkvWmHSrRSBJf7bJDuUNEf32k1yWGx2psQgLthUVLQA3Dq",
  "key20": "57HbcQ8S67FBHJarfFJ53HKFwhkWDutdZFCv2wZpP8j75K34QGng1f9SAae22cQmVDjdSFc6nSzxGW6ge3v6oWRL",
  "key21": "66VUvJvXhMruE4VnJmpNhWx2XQ8TM5gMAid7acQv4qB9HVbWkzSKUnaBJigRUFm2uYov1jide6u4xAUEJwM28nna",
  "key22": "3kFcz2nqmQcbnpKYEhb3fKL724PUqFjGwxeX7Y9hsjemrNGPwyYQB5ZfVyJ9zpmMKRUbQbHnjtw2hc7GtmQfeWft",
  "key23": "4GCuq52RpeK7GWhue7zwf8M36HaXeJ4inEkLXPnXjRh7sU5yY1igXiN5ckpPVFW4uyiCN3EPbLW6qrRSyGxQaoS8",
  "key24": "4CWFJhqFdASCL2Ew7RvQpKedfsxjuB465SCmPYLsjL46RenaT7Qr56AmeKiJiQodsZPXTox5BTeBvB19EzeRDHVS",
  "key25": "2rd4VZpaxGDxXs4bHJQrWWpm3JgrGtfPbwhwo43GaL7epQKYpJmr2a4t4vLnmWaCKvkKsSrU1JnxLSEzF5geNQ87",
  "key26": "4wf78gqP1FPpDjA8uN9oy5Lab8qdp6AYHxK3W7ZGsjtKvX77cF2vnbwuFog8SryxaEyg1eEVenVDrFMSVsM3H1Rk",
  "key27": "2kbMpAyPunRP268Q8d2roKptkDJLENzu9Vkv9BDrDD3RakdXQAhvf6VWg3gyBmzFePe6seiPYhKhzEcsCFzUzZna",
  "key28": "2RHKoqLj81pihNNBjqjmNzTnQLwtBN2KhJwBnGhvmcgV2rCpb2MjeU38yxWYisZ9R1CKuD7Rez4XRVzULh8gFtuv",
  "key29": "4A56uRauLkxnLmoMSShqcGECyR2LeFDWcQ44LA1ZMTvrRuDMAWovXBbSPs8NBuve1AkqEXZWB1mpp7WHXAaxLPy9",
  "key30": "5vMzev2xze2sTy6EqYgEqRmmcyASRzPnAiLJBcd12rurVmz2fb76J3b5DsG8JucE3gRiBFZyXMLrTQxk5sg7eyjK",
  "key31": "EdbAmMpEEohScYb1yq64zoktGQP4q5ekmkVmZiAXLiE5HbAKUWphYsyME3jipng7bL8wR2HCn6YLxd4DisgkWVM",
  "key32": "n7t4q16Tff9JuhJCRwfJY7h1poaFJ691LVkMefHGjNsJHA8v32ho3tP8tMN7NXtudHgwnSTpRrSE9EjbPPLTkuh",
  "key33": "49hunh9nZzgWWBsYRBATFBRm1hu28Z91TshsiW6WD5bYCghtcDjk6KUzxgN5i97hgyQAUus58xzf2iEgsiCVyrJx"
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
