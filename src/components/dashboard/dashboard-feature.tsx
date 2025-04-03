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
    "3tS7CywFbG8VHUUNpbrUNgZNeWYvpXvKtQFunjLvK2qXGrMuh7sLRXgBfyy4AkQen5wDGPdEhZDBrAk78UjcqRL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L4wPjgHVpX3dg36cYQsFVRVs42szpi1uWHErMgdGLedXNqGyFMUWJkTaCs9Rz5uyMQR2N4RfcJyvFY9UgnprCaD",
  "key1": "3HPE8NsBWs6jvAHVYvtrZmtkK4Mz72AMGLLHe8LuqX3ydZTw7mLG7jHeMio5cPyFSaTy2CmM2Ve89Xe9xXG3VnDs",
  "key2": "3bsQGpnHHturSizpUULHcDMJsHEmtXA1npBcjbGfLuHMbMGGBFor5Dqf4xS4zyLkAnzRr9ngXjHdbkMMV7vPYJML",
  "key3": "4RLuvBj5FUpXguZyXoLLGHsmhweNEiJS9kvQnoWSAQMccrKaX3HGWKMYEoNXPckmdWxwnveAWC6gxei1J8uNrvWz",
  "key4": "5tK8Fm5oRvtLpCirQ6P1JLgnx5zw28S7Bqfof6X5pW8DkjYBvPK9U8y4Z4VKMKz1Azx38QQtm7fBMNsLDjc1JqJf",
  "key5": "2RKKQEtPQAVyYDMLR73hs4WYNupnF9o2AKTHfeUdYB46T2berFiHBaKQYBSGunrZBwUVDSTmoWqsdMS9BS7Sjz2t",
  "key6": "5GZn33UwqZ7j1XynwhZdgwjThaMZFQUJWR9V7XQmtPBLaMMJ79D3ovgCKyAFP91gn6UXMZVy2ZXQ9sGvM4jeWXJW",
  "key7": "4dTjUMgNUc3HzsumqksJXwCr7YyNqXnCXEmXqvDDF7jU77Zpz25TtuWNkcHhYBCQ778w6wRjA7BQbffvJN7xLJyh",
  "key8": "afgXqJWfYBAiDJ1aJ6M1kEaSgmRwBtWGXncX1rjoQiJ2Fc8MiquEsABF8htVT5eEwr9sGBwCEeCAkkn5G9aDZCX",
  "key9": "4ttK33iidJFnpmYCZszyR3qGZGmT4VfWE7xsCXEoDBQLRrRc7tjJkH841vMqfZSRkgBRZ5dM2psvqf1WUKmQgNXU",
  "key10": "4yB1pDLSEp8L8ZqMU8ze4kc25hW7SttVqDkGd41cD3cpe4PhdHiNYZ6Cqyri1WG8pzuQj9up3LyBuLHxWxBb93c5",
  "key11": "5Dp2AT42p87Xo9ArYno4Eo5MiGNeJyVnDFD2QQuqsDUYqFw4giMMKVw7GmbfFcfKk48QQwSHd6sugvuBAv8LbFmn",
  "key12": "3AakS6et1MuVfVo3uDHedbPrUFso2SrGuEnQXxpLWThioUboXq3AxZhbyQXRotfHkSDZ9M252r62rvbJ3A4QHUk3",
  "key13": "3M957LfQpz3RDjm2eDpCZGUFpqqTEhLELd3VBcHgZuip3MsEu8aMBmQMZ7ZjeRW2gVRg8u46jzNW9UPEcQeN1kTc",
  "key14": "36CGgahjJmNhNdmRKLB65JPrzNdiKAcYW2fbeusC2ht5SQWHwVvUA7tevjcKGWqVMbpbT25JT9npNGv5QnxCbMYu",
  "key15": "4LBSNb9vdcRGQU7x3gT9Xrtj2MEFaxworEi5xA9scMTDjFYucyzG7y77LeLmWXgWbQu8ep1VZY9XKXm7zx75XJRb",
  "key16": "37Umr5N5wTFsVvoGzMUmEjTFc1UCkF4jEBVk2wCctngfohk4kV3MQbe5yVLAdb3mFm9jmX8Sm1AR4LS1jnxKydQM",
  "key17": "4aNwfKY8ftwKG7WNrvYzD9qufdrisnWqHuMLs2QyXUEfR8ikcvq6uUkcpRnnhGFm7f9koZwJcVhbeCLo1mG2SMge",
  "key18": "2SWxQUckdKcJtqnWkxL95cd8UBYKbHgL4ZpaZBaPASE5GmYmTpCo7XeJfwERLY4VvbSfUkfmjKat1qD2QXrdqeae",
  "key19": "8LpfwLkDXaGcf6XgaozrX9yTNoZh3qCKAApdCLS8oypa4wF4pCWtgGG8oVjjGwJZwQJT9WEUo1ArBgaVCQP5nGw",
  "key20": "5pXyAg1V7DhVVvS4fPRZ6J63HPDQc6VG4zu1t3ZwEhGfHuwU3EMMcp7bBgPqsVt3a2JLwdvpRWkxkArY3Ryb7ZQr",
  "key21": "5CyAdxaRxDgUTyEbkFCRoRVL1ccNxwRJCn2okKszC7ZVtn8Gr7VXx5yxzubA1A8PH84Ee8EJkjvmN6bj2rr1UFhf",
  "key22": "5bnpaqXj3YNKDn25NqxdKPqbCbBr7Un381o1VLCFLnX7Kup1ECA3mz4ZjxBVGsodKhoiedkndb3EYfgnF1cUNCuT",
  "key23": "5sQ5TJ8Yu292eAy7Be4A7EHE8VtkxvjuU84gdVz6vMTZtgH8JXJAA41wED5JXqd9yzS1arxjfWEJcSfP8qe2Q6oy",
  "key24": "BsoGX1Nc3TYoHgvfTZvGdyBN4ADZcdJ9Dad2UuL1LCH2xHt8N2FN9vh3h2guETDMNrFTAN2XR9NiyMraYwoKiCY",
  "key25": "5vRamjPtYuC9smPSvuKxu2srB1wVwBt1efM4psuGX4PqGdbhiXyK3JXKJijAULigF2D2STDnqVWDdYTPLgGd9ZHo",
  "key26": "5HiHs8Xhb6Pi6UcRFRBafnDZ49xmUGrx7WQfZyrn7KfKcMGtjecGEop1dTugEepo1Q3b23pe6rAA82Cy2vdvf9iR",
  "key27": "4VyHnt8yuS6ArjHUrLW5cpy1Lq3NqiJFjcuLdmUFfQa3gNnbUqDPJoeH9ooZZZ1uJdXtiJGpBKCjucifWmjhVzUV",
  "key28": "32HP1dkEMDnzq34m8wUCoBpNoRuYdYSDn7uY61DyLaHBoT1jKRbcjCbYaCsp45NCxmRStyQgVsDh2AVPFJZtgYYG",
  "key29": "3UZapJ9LQqmRBNe8HvAERuoAwj6nNUfk4abL7FNdyCpVK8AueCH8MRq4onR99Wdae8Qsn5cjeqa1qktAQtCJipmd"
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
