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
    "2mihW6Kake382WoNRuTwVJ9r9UAd9XuvTzNWXQ4EJU8E9t3Qyum8GaHSZqegv2DA6tYn7RJrK8G8YNMfiEdsv8EY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61jdSSC8FNJKeNArPpTxib74jYDSKz9uLGTkeoZkmQErbiFo7uHru5uKwQNccsfw3w9Co8mvGTepuuawVqdkG2rn",
  "key1": "5eA9rk89Rvv7SndscyGkyLbJt6eCVNQtnvjRzsmraCA2igMPiqm1TfxkWuUqNik3W1zEKCp9tNeva48Mi23mgSRM",
  "key2": "2h4UGjoWCkQ8cVUT5fX4S8FGD9mJ8MnTQtqvfvqYWmoLqGTPKjj4oT2V2ie3LRZ7pZkEXVHheVWvrzSdC8LR8cPv",
  "key3": "bBMmwdfA4bdqUtGhqynyhP979HntghKYz3Vz2q4da5JBCPnF65xpkZoCnbzRwTsGV8jKjxuYYv8i4G1JaAaphNd",
  "key4": "5nf35BgZYoozMaFnu9ie2zVVMwQwV5BCENF7TZstGrdKd3a9czXbxR8VvkWa8DuFgg5zqpityXepiZuWKeZKdEjb",
  "key5": "63QJkYxCJM8EDcKbQ8NfxnjDxs5BrHXphXv8FuaTgzKh9EWDF86gkfpef5RpzsUbC8sSpFsaqtKZp4h879TZW24f",
  "key6": "4tjzmXJVQmhu1Lh98uj6Yekzwburk5EjAyGNFc26KSmZDrznsmFHUNxKcLNQYsAQYjauSNhrKfYMNmFisUgys44a",
  "key7": "54Zizqg2TusR1ZfTi5V16qnAQMcD4wM2ecnEQ4wRAy6hTRcL5yAwD6g4jKtQJgGjWYfuZo4oRyMCuJu7SHecGdJW",
  "key8": "48edwAoPcYcJzzyXNPUp9JBT2rgrqCnqVTR4nDzqgqcz6D5Tz5K3mrvUyFDbwdRBfXe8nef48QDsbcQF8VfuUrav",
  "key9": "636Yn84GRpcZBfs85NUb5gHUMmGherHA45cMTAGCrxWzvdtKHtV9ZeNZLkHuHFx7toSyY7NPsNWKwoaJ5zNarSxE",
  "key10": "JYAXVEd84qNe91D4qW1kMYbcxK47pMAtedGJEcjgKmqrrRQU2gJAziRSaRHzMpJ49rbSZqNb2AFHJGkKJ2bKtXw",
  "key11": "5bC41AsQ8QBJHLahbyac6Lbr4qmgoHsJNGfh9kFZrd3NQvhNPppWaq5sFpnFsAVuFMH9nvzV2dub1DCVCehy42iZ",
  "key12": "487WUFy7AUjW1Vswjq6tRinH1WAQRGZkJWt3os5Ys35kYEWw9MkqevzE8D7v6Bu5DrFH6YxD6rdKT8yPhourdYHj",
  "key13": "2t3gkmNNaLzN3LDQe9uyak3HMMrQ7AP9yrrwsUFA9Tds2T4pYk2SP5V99tNfU9qNQUEfYV8YGLdXSaG1fHiWremE",
  "key14": "2Xx7F7zWQLXfrGkbewZJ1ueRAk86T3cSwJur64U89rmf5WtzaerJZsvT2T5sjsU7xj4uQ1Xvn9sYMUvRv17pGvtL",
  "key15": "6KTxhNHGhENK6ygqEm91nfsiYJ4yz3dmJm8YtgmDan7ybxv1DWUxfi2sadodjnhqM8wxkpbpxRmh8hMitoPN3e4",
  "key16": "2VP2Pgep5PvazzSYrhZev9SLb7J2EKmC5LTVG1QrHfA4YyKfLokMDxcFsepyaPqqbVbr7jYqZ76oZw9MuoRTgkWz",
  "key17": "3TbkbA1ovfbKy4t7dXLQ9Kp5ofJv8EG4LhaatsYPswYCZEB8uBUQ2AiTdR1Pv9aBVjmxY8R5A79wiqL4M6xqPYPD",
  "key18": "5WRRJuhrEvX4fdSqJYYugwoeArnEwxhTyjsHHneNgVCekmGRxXYzDLCghWXdXs862YWcmMpn66fQWgaZU6wa1Yay",
  "key19": "4mYcFP2JhUi1FDf2nmzVe4nduUtARYq7bja3WaVYKtfHRq7zA1AF4tMB9XD3uJwTLaTXjzJNVx5HDjsbtZzG8o7f",
  "key20": "2gq6kSzJKU4W4FHYAhNjmZx2aAXqpnpC5UWSKfnAhtSNN7CQ6ugnZSmV9SSS4XXzDiJNkFnfqT3CwqbT6DdHWerx",
  "key21": "3keQucr9eeMTXHHJZHv1WqFW8WDQ8gE2NnQTLH7fhMW38EJWyvkeyursd1aYKk84SzgFxokCXVhRNbRdaoie5AtA",
  "key22": "2TKCSemPtY5m6iavjQdxmRJT1TBDUKTzyqGR5vAfLR8hW4JWY1rA8BEkFbx3E8MTKFTuQDKFD9Y2CudyQXW25wWq",
  "key23": "3ccWqjFR5HCdWmPReHzpQEzLiTH7436sU4cgTRHg4rbYeiSssMpWJqX82FwT35m8Mi3bRhcYih4UtpqcGh11eZsd",
  "key24": "xzC8xUwGrzpWz3wNQiEtLoG46jsxzMSHe3NxJFa6dB5x7Z3LGC1xhguNjxw8u8AAEAtbnXeQdNbVd53f9qcJA1R",
  "key25": "2MS6iwN3uHbufz5yXmWWQCA33u1ia5LcpdGLSy5sf31VmFhnQpJ1kBt8waLT8gLjALq3wFusMrbF8aaXxXu4Gpem",
  "key26": "3WPtmQEZ85EdgFTSNQmiYMeUyY8wfV5g92mpSQdfaExHGecQxNyvgYMc4k4GK2FAG9HvBgBNFLssbvcfwESzkDiL",
  "key27": "26QbzsJ3btDVytxtqt91jcFWuVaqjmk6HGm7Fq46BmhjfV2dUwibrHiGukLQKCRuZqVhwi5cbcpMaEaqm2Fd3yUF",
  "key28": "3jxoavoQbhQdie2FQLeg6AcUqg7pp6VfDkaB8GYHxjeL8SJmqojS9dvtr7zYMSBqUG7tKkNz4GSmcPqoy7xG614c",
  "key29": "4vRvwdxDSKYeR67PHtq8Bige5wSwtt9vPijpD3QH7q2GKjVU92y4HkUH439oStN855ZtGVtGv92n4B7p3N6MTCeG",
  "key30": "4dXJod6eo3eCT3EQyFDLE1ZFBnfpR92UnSiwvLfX4W13Nq6gcyqp24N8N1TSYnLFFS3p9Cvjbt2RAmBSzg2oeAvt",
  "key31": "3wGGpPboUvz7bX2tZZKLfja8AYBEXi7nhihibiZHwT7Tzi74o7asBphgVHCPBSktjEeJ45QtM1yAHmavZg8KGD73",
  "key32": "2G8rTtmtCVbqaduKkiv4fdhK62Rx6fD3LBjjkZiLxZ5W5b9NT77g8K2SPhmkb57ZtBMGuYMLZ1nWYfML6yd7L9nC",
  "key33": "4ssVB2wRq29SWNZd6Wm3MA9WoneEtZvWfBQmyfyENqaqdDeVC26Ln6dDCVZfjxdERnNK3sMEQ4tmqLyCt18EgZ49",
  "key34": "5cx2EDQX4jMEz3h6yvzHUGgzjWEAAyzq9VC8pufeSwWGLfUS2uuAw5RQkWrgzoJcWtkLcpaK6LLUrRzpeaEyt6Ka",
  "key35": "5LKvpXBbEK1X7nbMiL6HcmdZA3t5367E9sgEWUnTShYV7ntbjHQ6rXe6YGWKSqLNzYpavGz1bbfZ7FBShYAwi9br",
  "key36": "22byftMhVTNr3DXYrATrLCF7TXwErE13t64LpeSv7ENRGMNyeccQNRV669BSwtiW1MYGyB32N2ZoVfN8k3527Cqe"
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
