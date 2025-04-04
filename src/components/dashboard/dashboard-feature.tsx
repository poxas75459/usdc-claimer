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
    "28bQtJxdnDHcsRoazorxnXg2pfJAEzLQags93qtRJE8wbDbvK5SHbTe1P2Z16hmPgL2XNEWQyWhBLgMMzLWt8QS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ftDDTF27X6tqwjgxUargsTtDq8n8ntHhDYBzby4nZMJAJQLR1ZnoCGwwBRgFqxs9QMwxZWoAEDiWPCRDJQdSVSp",
  "key1": "B5hpgA7f5LpTS3oqgvk9juNnm622Z31VFgXQv7Yxps2FGFhhJDrTQvQKtXHBiRrQ7rp9nWoRU5xbPr4kjjJu5Ds",
  "key2": "RwHh7VEodwhsGSTQgBatzohS5u9VSBz2nmhJ58MQgvsn6gB9z8oVgiHWtNemRz3jmcNnGT8pTgsEnYw6LYmwsHc",
  "key3": "42LLjMFVaNYQeypGPwMhobYNK8ZiHov3cnDzv8FzGSoTQSVfxtLxnyJignMZV6tBVD8ULGSdVeJ5CzpWz3FAepXy",
  "key4": "2wAVZhC9qS2uPeUkJ69nEC6mfNiCE8AXYVABXxuFvxjZHaQg39w1vGFQNJXP3CJrgiitQrRnxaGwunFuDQK3Z6iG",
  "key5": "2TcEvGK69YxWHKPrX1hbYgzGqAr342Njco1FEu3zCGwMZXhF6aaeXy5CwXbL1t9EiFtPpLL1x1kKcnRA6eJ6rmYf",
  "key6": "ZUGTjUoRkG3uVu8PvjWN2XJ1LqpJGifC2HuqEAcfzcEYnJGBHYtyZA24eCwjxnbpwTFsaVceaw4ar4pQoQFMGTh",
  "key7": "mxffamHfEN6Duz6ETCs5aJT9n81PTSP6iGzvSjMauyb7BQF1Sso75U7h7vgyqTqmBMQAcvf5xzbNfDnRvBjghde",
  "key8": "3VeLydW2DbnKLrHnzCbtvbiMC9Kc5pR88TBgA1zPCGAiWiPVzwJwPo1HeJPAECUeBM8Df7H2jjfxq2GrABx75Hcu",
  "key9": "3MGbz9uyjq7gQJbjhXQJ6AiyVDxKx6W2zLz1dSb4MUVEfymxXU64MSNJamra8BWPbiTcW6nNNPBjShXvXameEpzx",
  "key10": "eGxSqT8Zf5nQ1erbJaAfW32aU4A1KLybcdp3c5oGHrcR1novPW6vRwUWqdhHkQcQ7dQXnwE7g5F1gsWBYrwwSzd",
  "key11": "5HYuCpVEaoKg8EsUm771ZSgjF75M48oLtheqpi8AMsurWiac8DNu39X8xSxssJB54kGQJ5uq9CFVnfLqYM4vFkj4",
  "key12": "4rvMET4MyKrsMeAqnARF1ETY8GxfJa64G1aaKFPgfcqpNjTjVYM5k42YFnEmvBoUXmRk1BxR772nVugKfYDEQ2w",
  "key13": "4wZa6aeFpCeiQsei1tiWzArY8EA4LX5UE2wU4d7Z2XA1DQGSSP57PhLJSxATCrmiq6YpuPXPhrsfzFvZGKiMamfa",
  "key14": "2iVE2TskvhCxavPL6dPrwdhZvtFTYc1FeJR4WVs7EBwRNZydM586Ds7McCa7HC8syZGCcMBjXXeuhXwP1fhNKAK2",
  "key15": "5JvYJgmvN6gvjAfJcseKCK4PhbVjUZAcsTXwuAXLSV2cG27zR3EHLUeqVXyQjR9b8KnuhhoER1ydVVJdgULQKam4",
  "key16": "2jKASNFqNAk5G5MH2r6LYYmjHMg6Y8UMxvaHAdVXtf79ztHE5gwSpSj4Uns8rvtoCjxfAgF5T4Jo3paFXnMyQnLv",
  "key17": "2KfkAq1Af9KSSWqwBrfkwTzaGv5CyR7LoT5c6XKwTyLwfH5DYD7N2xo3T2Tqdv8tVKgnLqdgPZkwkphZ4FoEvbU3",
  "key18": "3ZSaRLVfH6qbqWojXdBUftEP3JrU1cXTuLf9tYBzohnyiSxuR6tdRBnKbrstiaz7cYHbEcKHzybdgLHgJ1P2B1Z1",
  "key19": "2PZpdNfyityeifjDZXGW3WuadmDvbGP89xRymp4QofbJdPFYXuXgKiJ841dcyUTf7JSStbmSitbqAHPdKbruqTS7",
  "key20": "27Wk3DhqcKh8JFHn51hGTZWU8yZDi8uD3AYpJrg5zB6M7uyjRfQttNcjWAJMb4ekQvK5J7FrPDUuVgYJc8UGbY8W",
  "key21": "3qnbPPi3QxyPeAjd62uRfz5QH3LxhVGbPXHt3Tjjc9iYn5cXgHuMaYBqyd9Jwv1Cmzcjta2NTEfxagRB9jAjf3Me",
  "key22": "3wsiXLjzfuMM5QjHqwJ8phpzsnKnzrEAP5zPhEZTSXDqC2TXyeqGkoE4oKh3tJhdrurzhPEzZKjhqDZkfKYYaDgZ",
  "key23": "5U3mmfyzBBMYc55UjY6fXdpWQHZfyhNf9XXehBGPE8u4bXqw1PUmfDeAPc1UeqEE3r7aTv7q1dCCdeaxPba1maCs",
  "key24": "2RvjvgywihQajBEnYaEfy4uaTQXz4n3wQFrfoHKBVvG99mmK1zST112gRaqr64LXMyZRDCdDEmL7aF1nD69yeLGL",
  "key25": "za7DsF7nTSCbWqXZ9wYEJdTzTERbfkmg9DT9GiBXgmhVXhbGmhMj3WSqwXhWSDqax32XW6EsKchN9qeg565spU1",
  "key26": "3RmEGQaNK8uewbMsq7wD7aur6wCwDx9MrVXMCA4yiwxaMELFbqtnAeHYsr5NxXo1YimKzgfyCqhHP1i12RRX2WkW"
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
