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
    "4gP3NfsFnV3cfKCHH4tcVLJ6uoxZHqJe3HicxUaJnwJBRdQD5kQSVnZffMsvHTgVvUCDfCNVNARdM4cUZmKnKd7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44pAhVC1kBVdUn3uAUZmuW51Kp2toyckT4aikmuMeQA8sAwtv4V3ETTtQZuUmbNvD1DNj8YT9xA46qZmctLNJp5e",
  "key1": "3acMk47LitiN7pbGfUKXvB8orvweDye7hReJo6x8Y12AtDkE8GrxJaaz2H96vycSr5KWAQdhcmvTJ9ar5hpmxrnK",
  "key2": "59rjaNNQ79qxiymdtSXHadUG4qfhYVa5KbcuKhzspgri9zba4G3EnsJbwVhSYN7eTeUQPHS5rsBzKaB2XJ5qk4La",
  "key3": "5Z3DNncWc1BU6J2sdKPnEhEYQNEKoJUkDzWDzHYGLcMQ6gJZqeQSZd17uzztF2uD8apgzymfrZuChiY3pM67eXc5",
  "key4": "5vh1ZSiYSNkcfeTXEcBomM1eGSL4EzmEmomFXXaKKJjjn8AY3bCjZZRjHzzCiBSSFKbZgDBaxoGvQS9L46Mr4TkT",
  "key5": "22fqCtggeVr7B3ZEmEfAv9pN75MwkCUBgEyNDkYgNr8Xs6wXEV9YCJcfK25EjHFxKzxpRxhhG7Xea2fqwEqEuRNC",
  "key6": "3bgPsJZnLjAQYNEcxWSe8kMhNvJwwu5Yv9H7cFCjt6N2yExwVNb4SFqpJnGWUtZBTcbnz9jwpgZkvS9Ekg4M11JJ",
  "key7": "5W3i9pAxVMx2HDMYXhU6ybUWtSXphHmTLht9PEs4Ckjb8uQTyf2izDCSWN6U4KDrZb7SGYLe2QjzHprmELE6nJVq",
  "key8": "4NkMhN29V8EfhN6JaosKqWgggFGKwNdgeCDbrWTofeyFPe2v7kEgoNKqV1Sx82e45EtiZ8iKqpZLetbqEw99T2Yj",
  "key9": "5cBeeR7jbRvn95sN6vSEaFb2uX2cwvJrpQh7mpCAzpuDwXTBjbWXYfTQFTJFhbT4Rj7EoUPZxvHA3kLwPF42Z7J2",
  "key10": "57NfFVxW1ykXv1M8uNs9WhBgW7pePzXueRZ2KKAtLF6aqaKb24RxULsGpdwbWawo1s1TPbJU3NqH27Y76xbuopvM",
  "key11": "27yWS7RHkX9mTBBazvrja42ujdasEdk6V23KZwoN4MsMERAW5yArUQyKuSWziJ218Gvd3EufQ2GV8ik3ep5kruPU",
  "key12": "3n2Fax93Agngyy9egdcjuoaa47gw73kDBLyAjKAQ22qARBTGBAWVhiUCrDXdt1UMYhm2QivUhyMS4JmG4M5tmmFg",
  "key13": "48GYar1J32W9uLvNQUfTJSKvCiJXYzxyLZ6gnoXhw1vTeuSFGJCW2uKXDhfUMzdrv64kbp3QATVPhgyJtTfz6K3F",
  "key14": "2uokgF6iC6kjZrkFdvJ89G9EUsvigq2Ag8uHaGH5YiWFmBBXXFj2BB9mKmdS2cY26ehjBuK3SvNknz5Vz9kCDWn9",
  "key15": "2V1WiZfwvQxgtoK7Bisr5JiLzkGWPUXR2TvP8xnvNLuzCDzbf4NhMMynTaExgaRoSTB2o8oecRCUDVrCj1ydSpAY",
  "key16": "3ygg5LPXpHazz4wQz1Hh2pPGbwzEqCoH2nYAo3tzFr5i8Krwyw48PeU9r723S7aFQafczxaZASzrkive5AZGbpyg",
  "key17": "Z8d47pQ9FCM2op85huEuyuhX5cp73h8ibGZkhdmcSWMufQ9uHBx9BPHNdVTADh4WEjDX7ZT1r8M77jTfDzxeFVx",
  "key18": "zSDL4qMfX6VejZN5JefR1n8hCFUaPRApFCC9FkofNz8G834dvGAQFbfcX5TciYhZKFHvdNfVVJe7EAoppEiWnCC",
  "key19": "azxi2uPe4Y6sEdnc8LtqgVz41NMrg19FfdNKhMC9adLixquA4qdRL9r7bFtVsfgxmnaLCjsZq6w252AwXyPHcQS",
  "key20": "3zbJdmphDq94jhm1VULj28pQBTqyD48GsMjDKfUa1N7wYwNjacq3p94cZPMcvr75Y8zfwqpHA1oBgxQKFUdXm4CL",
  "key21": "5mzvgTNUEiXP66dQshqsGSC1o7xDabyqMQDguZPmN5YVcWYYdh2uak8rGis7ci7DbsSGKXLPvN6wLCPcpJ8S4Ryp",
  "key22": "2nJucNUZzdooj5kpvqV9Jwys5YsqLk3TJ3PQvHjiWcwo2gZcdhrwwNANMoQnU7bDq9ExoGanb6JnQsc4wKd7dCaL",
  "key23": "KAm5yA8B9pqifRmkJXCbqyDAvyYV6PqmZG3J8Qi82FN9FB1NuSWg5i3Y7SuWVdYESaGtnH3s7oCSdJDC6v6m296",
  "key24": "5YjwqTkEe9YPPzTYt8eXe9fzDW6m5e2XytWqWPDcK4tzsU4aa3KVmrdfw7R6yvuzqC7wkWnrszGzgo95jSaAQbZz",
  "key25": "4M6LwyAWaqqRuUhenYPfMtcQzmqyopaLMoLBqLdLJFc1Ew6A4S96N1SbvxeiYARiPqjZiekLeznC7KaHmsiZrSxr",
  "key26": "2wofsEFB5KoFLJ1DSuahSA8vBwoA8TbahV5z18pxuvDXEPHDK6vp5W5x23VubAqsodzvXJsZs6tVFPsqEzvnRCAd",
  "key27": "2hiSsvnaz1kseVoQmHxyiVrwmqyF4fxmMs874p1DsMkHGomSFpBaKzzVt5DrKfdiXU7MEntxbGbrxvG3jMXTnD3i",
  "key28": "3dxwqXaMA9682eYAze35D97q85BFZaV91NYGCdg45YnsEdo3VFCg4QB2CoQHpKSf2X6UNJkSHfzoaLuTSiQnNEvZ",
  "key29": "41fSutX81pfnNow1QjA7R5CQJvGsDbca3FtiuZKqxr3ZdZ7Y7S67HQEx2yBVnUsgsLTBfokrePcRb4DNfU24B5K2",
  "key30": "4m2y31nJuSivabTHgyrbcbrH7bqYw3vyEQHdLsULGn8z7dde1EfDiBcFEbe9WYC3vrgnAcwKoUf7vVUR3A2jBHxs",
  "key31": "4i1PFUcs3osNF68upVrVXiqW73SGvBA8vr6byFJyLJxeKYfGB1NpzLPc58P2WtFQeuFm2riFCWSaRRod6Hzsie94",
  "key32": "2KyoVonAm9JkiAitSRvo2L31VTawsCehgXtN72CWhYwnNLMPbuAm3LDMkoerhSVJG5gLsUfaAMjgqbaRD9SMHi2F",
  "key33": "5riwWo53y7Wz5d1haQ1MB3MGQxq13MnTXJu2nNfxijwfyjKjUiZYJuQduYJsdB3KDeQFPDjeWprbkZbRAggRupid",
  "key34": "5XbDNyFKSRb8YGXkGHyaUUCqDy3BDoqH5CanRSuaV4V45PXULqs1wvomxfevdk5H56kzxmwuDvjnefNwhMTa79rf",
  "key35": "4wSva8PQUTLjV5pJ5NYH3NdmQ5JDWKSUZ9mQdBVVbwqzc9cpkGSwnX5VH52TXMBg2wxphM1pTmhnk8AaA1LCWd6f",
  "key36": "53SHfhwqRbDcSdfXgpZGzaSRqooE4g4ZKKHTXVwVfW94wMAJfq3tvnfrPkX4dcxaCF46JnMt9L966WUUxpSSbyWk",
  "key37": "3vA3LAAppD2NR7WM8Kcx99siAcmRPzDoNaRTsnvbu2hLKUNnxThW79nZsjFsdaJZHF2vWgHmMtyUwUk9t4jFun5N",
  "key38": "U86WskayVotGxNBaJMe8UnvNjJ7bQQXhTbkA9N6bH9wiRzA5GpzbxLsiSYKbBvay4SaCqdTfdnrtrmdEnAeLwqp",
  "key39": "JEwPMNkj9oX8bcn5fcXZKvfNMy3arM1iiqvnyhXeZLHPCEFKcefJMfPRKeRymtptMaQd4sXcTFBp3z2zX6ppHMc",
  "key40": "3HFrnEdFd4LAwfJYmkfrkkddFdnXMJvjycZgAof7Josyq4cnfHkecSiwzdzJs9MT4p1b3TTHKQAVQByRzx3HEjV9",
  "key41": "3c4cGiR5Ej4477pGDtdmZyUaqFYKmZKJjvDe463bm2F3nBgUswMZfBBLE1ZHu2Sku6YL1yAK8Yx7VskJaEuN6Puw"
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
