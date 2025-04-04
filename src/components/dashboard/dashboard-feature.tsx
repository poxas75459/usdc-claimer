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
    "3q5qDYcf31tiirpGuvcVViFnSr4d4rDwTyY8xhwYto5as4RW7wny8dB5ZxbS6qTm7qufoj4nUKgAiL3xM63e9PBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ugPtsL8akZnbHf3WXaj23W9AQLxMoW8p82sKyBbWmrxEQQzAK7kgoqdyGXJDQbFwDc6athrMxtaHMowHztc1tqd",
  "key1": "4BASDCfa3cyZdJ8LV7hJpx2ydLsAj2BSzJjGQhd6ykzj9uK9BVEgsf5mXqn9vPSWPTLfBsTkZxkWMcBTBUUDdjBE",
  "key2": "5hZLYM2UCjjAj58SusZwYYZctwzQH2F39Wx4J1ie7fFaic1vKj5UZuJiTPumugi77KLtEifosUqmFALq12gsgwQ5",
  "key3": "8Bdk4Tj94XYP7eVUwcp6ZWiFjyj8MdSNkdwmoHYn4K8ymUzf2SLcJP6mkbyxz6R9xp7crnWuPWCX42P8DTdjSLZ",
  "key4": "3si5eqYM8pG81QTAqzvLCsHx7zibFB3K7pNjxhMCZHsk7a5gpFehAxupqvo85yx78PQ1amb9ZnJ8V9wwfnxFfJiT",
  "key5": "33qAJVEDN4RbDtSxz65kLHSsaxkR8A64BHUnXCc3vcjCpcfxLM7Fqu6oiVPhhat9ZqpiU3rXU4BY7ESqMs2u5KQ6",
  "key6": "2SSx66UX4acD41iWvtLQ4UzowHot7Dvt98WpE37U8uq6SCz1Loy9qwcRproruyZqB1SL6cAb5EUiabQFbhE4e7F7",
  "key7": "5WuiWjJjRxzHXs1R9Z1YcecvNuyEB1RwNAzEz4uA5a1bVLMF3AKgsxuFQKzMXhBG5G3GvhyX77AWdtYhaWkSWfyT",
  "key8": "2scwJHGqwqMi5z2Dx9kaceNkAS3LhxjCVJidYcmX3xMr5dy7y5zXjLhAAwCtwc1CVWD6GVGTi7oEYjbs2ikXrtmK",
  "key9": "58Vd4fgxESMwfRcoqumvKJ8tk8C8tVBLrTmMnRPJ6JGdLCN9nQCUhxnLW6zq4vajzhKZZn2dFgs3KKmQnHkpedbZ",
  "key10": "52jFaoVy73GWLC8S9N2nV5w5B6ZHF63wiQqkceajdctt3EAYZLNzEbmPNPfhHmKK5qC7ucVJRwtqtoJeioGa6XaB",
  "key11": "28TwMYQpDG3pWVF5s3F2WpeNK697SZgQBnHCvpLMWLyJmschpvxLMJqUdyBynGujh8Xtp254uwjbH4s4BMeVM1LY",
  "key12": "2ajbYxCBrjNvE4qHhqZfYsuXnToGPixxXuoDEvkEcEMjeCxjuKTCVYH9aeHZPKL6JjxjWqbYJ1msHv6vwntjY6dQ",
  "key13": "4FWpseJG5s4VwQPxYBY9dHRqymY9i8XWTNv7pYXvkRe42678bMqpsJZ9KKEJCpH8WzoNFyduUNdNj4bc2G2LqEzv",
  "key14": "3S5e2b9YF3HqqR2gZfgKhgfe8jqLJyw3GDiJFf52vRppRZA9ze3XES77PWaPrVAdrovjx2eVSLeiuqyTxTPLSELK",
  "key15": "rJwtCwYnQJXNH92JnrQYRuh1bDUeGEq1vUVm6PZcLU4zDNn6BPbzo3mnJBf3SPk6wMNYBHLtHnHodkwckX1e5EV",
  "key16": "4YyJVdkQLBb3bDrqyk8EpPDPdi1sdWEdU4EHvtSSHKwxSBqWmzFWPjh4n7GGtko6WdGSJLDTsCKwxjw6f4id9pRP",
  "key17": "upS5ZU4aay4aq4cnQfLvtLpmyQW3GxxBD6Pfad8wRN6YgLnbdZzVfVt5jn95dDuLMU9B8k19zb2Y5tYEeg4Zapj",
  "key18": "2y1nz6HuaZPhVB5PXivV2ftJ8tDjHg9eViEn8r4FvkpcCM8qvZUyDRbjSvgBWPSrWbCo62YusCFHs5m8FKbCQhQ",
  "key19": "qCQvz8iuPQXeCTpjeJofoq6h9cFQmTQ9ba2hU3wMdECDgnWXYaqTNCHgnAaCGXvbg2XKqPcNDTCvhPU4ifYr33v",
  "key20": "2WpBTtVNauC9fH3iRNs5Em4i8fAiYpL2hCkoxkZpj6yKCoXeSiP2ha52uus7mbK5fcnHgNAhUeSiTnShMCKEz3SA",
  "key21": "5QLTZK2EvTuQiJrfn7ovHyJvEtnFwq7rwBLxzro74QmVn1zbBgwRmjELhWTm8qfL7ZEuBV2p5DsCi3VcCExZemGc",
  "key22": "36H3DtbcUc1PNWeCLLKMrkt3R2JEyZ2gU1b8NtF6pAYYgYoLidgeu52fCyMqyMZMosXapi8vjEUTycF1u2EWFcvM",
  "key23": "2SemAJ6AtoWTFYZAjpCtgzQSZCKsTfvSBaFqRHrRdcnHzhST4mu9fYjeHkUpizMxhFqHJuo7fRrnMYQjCqcepjXr",
  "key24": "5Uw2NVFH4oeFDrjm3dKKE5fF5XbPLhhQUpKosJXZWz8zRvEPytVVVNd6oCJR8E4aA3YGMFASXhRZ5cuZtxdJCbim",
  "key25": "2k1KEMTSvtGvJ8VRaymQcXtp2cdxC6tqr1oaz15m7wrZZ2F8cXgNn8prNxDCRXGL4QdWFXzoCCuZ5QwLbwyeioLP",
  "key26": "2PKUsMD2CXoHW8p1adMZ4UKgBVKuXEahqznzVcZLjX9kje8Nw6piGFLLankBWi82cyjDC7FKtWFmUDa9yS4eE5ho",
  "key27": "3Ff6RqAdDMh3oJy9WcD9yUiZLXvNTgMqZbMUsJyf1kEqHKCWoPwk4w4bkjDH7phoYpFAsD5bcuagj4kV3AE2onEh",
  "key28": "2pbCSvHCbLN9sgkfdYPhc1x4mA1aVxDfgHKnvHa8kYdEXy3WgMqeG4CxbKM24MX6PE3iLRbvj943dogtUfLc7u8u",
  "key29": "3Xfr9jz8x7AKFanrsA6DK2VPNcQqGmgqWE3BaV9sFd2ovMnAnwknZpTQ2xAv8L8vxvSxHKfKZMJM8ST1nzS23XV2",
  "key30": "3uCCx7yAjx2o6Rgnta2nLPM19iDkvyya5Ys2Z5Wg3tMu2bpZ4q454ncfyzaznY514ZwRQGh7Bajf5795nkBLiXr",
  "key31": "rESL1UWDhQtXAK25HCZCoVkPba6ugn7h3DgWAEFmnXjtjRbv7gTZTXxPkX2kK67QbYuWHWw3e175i1WgXZzvHxA",
  "key32": "7ts51EXwbViKUbNFRfiwK59wmN7o2UCtJqKLzaStsNU83dtPbHzg1vJM4sKWrYfqe9N34aF42Tw62dSmTkyNyqz",
  "key33": "5F9fpZt2fk9oZGrqrHzTWZ3WFHdMM4evBHWe1AEsuYbuaowcDNd17bREvnG5bZcqBqf4Tc8qzaNMLWTuJ16d8Raz",
  "key34": "4cRgJZrdzMP6PdUjpP7vMBhyi8KU7TdqNrg7ViapexUBC3qxSS1FCZYs1Wqdz6ivCnQzv7Ts8zy1zxY5TH32vkX4"
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
