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
    "c3UCB1Ah6Wucp1Kz4cvwDnPMkojBzJqiTJFtacn92QinoJk7PqVQU8yX7KhWqeSQCttpEKwkkQneCFcXwT3vnXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w9omkVi27xecAhtrSSanqR7WBsxiFBYt5f6kS7i35xC9Xgrw1tbgZUT3QwevWJwNSVUnDc5YjZLoFLRXMZadnYW",
  "key1": "26Dzn3meUaeULmPDxHCtmjX4bj1qCGaZu7n82PnawsEhxcQCRGjyhcL6B7FFvDfFSwjb3ur6FDxMaJLq5ujAGyFA",
  "key2": "awXAiwo3cjaDnjtsPgFWVLgm5FfHP7cSrtBgCC5hu3XuKxy3Sev6zeBoWw1L9Jng46abpvrUejWw2MG4P3Esi8H",
  "key3": "ZJmonfo5wzvwyYQXZSPZbNW5GFWyPyCXnU9Kh24w7SyLF9WPNaUXUa7VAw6aRktKZZF3nMAz7PqjoFLGGePALF9",
  "key4": "vzzSMrCDGGs91WsJCNwzacmBM9yBp6iAftNSwqJad5kyCFE1EBSZxqazxFVDE1wWMhJEdz1fgHaHXKqpyoBxafP",
  "key5": "58anW7R659bDHdMgbhHXMNcK2RMdgC9NJBpXnpsbkAgok9muV7kXzRDjA7Q3mzK1XfwWhaGdDDf9PDeJeZhKqDwS",
  "key6": "3brQZ9oFzbrr7DAWPNKjMkWEZxzUsNeZjGPMD4mmgMrkf2i49aUf9ZtHskSc8QVCMmsPJLAQMUjYRamGTo28yeiR",
  "key7": "5godSPEWc6VthRgBtJgiw5Ld7gjT5zB5CpETWniUpTx92N6Z7mUVSAW9FdiTkQ9namZGsRg7BRm3rk1LHK2yF81S",
  "key8": "2q1TAACwmeQkPLD1rWCFkirHpCdHQtGPhPgmRkfp1X4koFnB36UdPbasMgKis25R1UuwYaGv3N2HQugnFzwfgj2z",
  "key9": "5Psv7CSoCL6tPxjoV3zQuWatzcjXKUBrhsQcTJXfMvXejWmTZdQFCegDcA4VGW5BypXFSNuKjuabDqGS2imnYWDG",
  "key10": "MRz8uPqdG18XMGCFtgMk3xsGDDuJoeQhXcRBqwNn3GcrUU2AH4ix8MQFSMtgddgVXDAdaQ1Hikehv9bMgySCu3n",
  "key11": "xgv3PREVN2FxckMtsSa8MPwfJ7YjxZs1xSNBxidpsjxLC9WAC4wPPp8aS1QKdwxQXbDm6v4R1cnRwtGNc1SCT6g",
  "key12": "42mJg5ZZbKH87YGhuwPD47EfckZ9e1cfsPU5HWqejE9t42XvwS7UwQMgCEhUGqR1c9eqBG2rNVUvGdia2qXKNCiP",
  "key13": "DZKe6EuTgHRzRYvpHbxPBVK5z7bETwHhARbqmxQjYXKtpEPBNkiUC7RAbbwNakkDSLgWhSD7wJ5cGuM2EWk86t6",
  "key14": "2rYez4TQNXMg25SSMVAaRd2ZRxBHKiYQvt1vZvMC9YMMwgrtHJoPYWjSnGgQM1CefA3iX1EDsixvQFKNKN69j8HA",
  "key15": "4SXtjBh7NjhwMabaZnVfcFFnpCvJjtq8ztCC9E2RWqJJ4nD3rL5P9P5RDgPubvg4qU7LHzdDaudDUjD48Dqod51C",
  "key16": "4GK9sixdHiGpbkPeaM741GPe4xNCihMwnLbuVmCYD6Bzy83WRANwvSKCNHzqLZUKNd2o8CmmsaAqqw7c19S7G3qn",
  "key17": "3tSdgTCTdnQoarXsVyp74dpTncnbKqzjnzY7fRmfuJWjysD5292ngiVgmQymKWGcbFJm4BTYYDStsdahBqgWjgcp",
  "key18": "5tHuYPWYoCrmJLzr2qgz5buGtZ97AQaqkVNhigGh3U8j66GaXxatTcdyzEa8Vd1ECkVtHfdmWnKt1SsWNkg6bece",
  "key19": "4iZXFWT9TUET5DZBsxJ8UKQcrAbar6HKg1jxMGKpseJwxoyfDFkmCZY3LFDWRuPYjXAnyYR8AkcVrJ3aPHHH6W1f",
  "key20": "2wPWScVMoMoA6nhtdeum4JZ3QV9ppCE2WkKiLQpfdi6j26SSUsMWvbP8UB5m2paEe45BB7Rp5hsNy2YWmf27oRJB",
  "key21": "2kLTjUfXfBzGvEYSmFvzZSnz69fG4zQoyQ4h6AMBQm5GLMSGj3gbawhAnDQgXSG7jqXhJ2SUCwcAAC8sWUTUZDS7",
  "key22": "Q6opbgLKfgZ86MGxUuWzeEdMMoLcYfwTzRqmzWzckNNJmt2ZRAWFtzr6LmVvvkMoDFbCPigEuaHyZ4aM51NgMUw",
  "key23": "hjwXAQVDGfsGKZjFERgVQ894HJ1HT4mhVq6xUVGxZWSGEHF29dtgL4cbyesjHyhh77hpJjjcWo3KgFrW4FK9ayv",
  "key24": "4rpNrwAct4Z27Qf7Xf6YMGmzPzYKwtg9wd21mVCsjjvTWWs5gPZjujeCzgyTfbfSmDZkkNmH14oXNVs1ZCtPVSf5",
  "key25": "2v8vqG6ogHNoY7HiDENXvFnWmn2m35ePofodHeyv6eFSPHnwhvcP9imwhz6XEYzLyN1ZqRe83wP1VaBtYmwxja1V",
  "key26": "4xpPDdCbDq49vpK37jVJGPmteJ3fwVgNm8A2e2CW2GNw4cVXCfduMNFYvSuf82dpphAA2cfP5odXqRFxbuzJRJat",
  "key27": "5QxVwAxtWNxejAgS4VF4CPf5KUEs13HAtZt8xz5yZyMQqKyuKsNJQFDGGNpMQiBShM1T4VZx1QJe5tTKXSVs5iyA",
  "key28": "5oa2pnMM499yXKmBst3Fffgo6WXBbcdGNyZfJtvXnak7QD8dWeEXFeLfnbNCwNzHKdxuPVgZ4ZzqcSBAG8oS6VLk"
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
