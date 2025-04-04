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
    "4koFZnX1g1sxpKkn4kdpttZLPTzJ8xvNyqMA5jiHAxpSQUEs3Cs7vHPedpzehyqZjDSk6oji562G4dLHvwYW5aTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RbPpyuR1btM2Y7gMJw2dtmomHfEA4LSD2TggFJ8iLZaKb7R7dESpfXq671BhD5xMrhH2FeA9XPqarRVuaiCFAc4",
  "key1": "JPUa8Q7gdV1nLLJR9EhwGyAUu4cBXH7oW5gq8oEDybtbHQucKKmyUNyfkTWNhe2XLMFjNzcC8P8cFNuB3f5ckJ7",
  "key2": "553pMq5ktswr9pp2RHxBCeAztrcVB4BXeo175S7zBFk3Ln3LiCKVKXwJ2zN5Q3dZMyibFHJ9GmMmGmb3wbnxhmot",
  "key3": "2JEmRk29XApmCdS9Xqh2S11qbzAhBNPF8rHeAfCfphDX4PdT5o2VuQYv9QEHa66oukRA6Mtg5eVa1kKHkys3bgdw",
  "key4": "5Ex4JZE7NixBvsgUZJfVyV4RmABZGkeZWWENA1FE4FqUpqPjZE5LK1vVfxPR6EAUDFitrehxDk1CYdhhYu1Rtuh4",
  "key5": "LVpmRy8Wat3rARmUuF8ypX9Hxr3KZGqNNe3icziJ5Jg9tNRagCk41o9UVU28pPcbpWfmfmiUTUBwYkXTM8aC1BQ",
  "key6": "5k5Geiw7QH7rHogdvRoLbftAfjbe34CW7e5KDL2GjLtQjw3b9NWHPXkV4VsmP1tCmmWHZN5Gtf9DfHUopkLfhUjt",
  "key7": "Th3b3J8iXr5S54HxQjtqMcRFugRkktWRyRbHz99Ly7ETR1LFkttJVRXhPX1anBmC5nTCKdg22QtSZ6rQAMZc4F3",
  "key8": "2absa76c5NNeC72htF1Y6v6nXQBQn6PsvuEra9UAZPhuRZvY2DRhuYpg5EG9XQAjBhNGABPsucyoRgaCm1nAAfkG",
  "key9": "2ne4kGkRt9adpRzrZHXmEvS7j2uLXeqqYFVKEBeYu9EjxTA8K1Z46zEJULeUNHmGrawfRfviYfECrjqw5iT86tbw",
  "key10": "2dwgWVyXGz4yNk4WczqY9RwoT8hsHknNajDe5hvzEhoFTdf3JH8HeFub3Ey736NHtt2gQb4eCrMQLgaQYGrDBWQm",
  "key11": "5JwdnYZS1GjQa2QHUmoXUjpKwiCFjsuznxAUuA9fW3KnrbEzAPBcgMH4rddv9S7Lye6pxNyqTJFLW1o9ohMcQptM",
  "key12": "4J2RpSqcXADdtcmNGyVR4vnLAKixvXXxqTZNgXy4fa1Sk4rb4rT1zEA7MXorAaH8VkU5fkVPfb9XbE6JioCdtP96",
  "key13": "3ztPCpaDa3ZV1kD3LBuMhu5SR6649HN9JdMCTk5rYVRyLfpeGspS3nejpXPGy5k1hdmRGdKWVj7QQZkEdom3JRqg",
  "key14": "5utqdPAEhPZcrxzHdKiBmKYFYrn6SktMjnvgHF6eiiVgVfZWXDf1EREav92spihWo5jdx9E3Xg112cg2NUX15z6f",
  "key15": "4zYdhhepVDa8eBivTF77Xp8h9hg9v1MHtPY6SVeBxr3LQ2FwVnHZtBs5QzdZcxvnfkSafgMkwhEgPmUGSfzKSoAr",
  "key16": "46YQaJ6KrdKDHFJBqQjiQjSStwRzexbN32jsAyX16kJEAEkDArbbtKfgmB23FdThDY1QDteyFsmsL8dawC9UY5pW",
  "key17": "5oCFAP7c8nsB7qSq6teUzwv4B8njuQrqm2G5CnCTqhxKMo3Ajp1cx7UjDq3ykVV943MK3nhvHXEM1SCWh1ZvdQmH",
  "key18": "5H61LzrwYKVjRwVTbHiWKcByxdg5vhQgogzED9ySa6UTRe8GEdKjkxdU4D2UZ7ekYByQLBnEUdCAah9mSNRCpsdi",
  "key19": "3Nrw6YeLsYdk3vRhEmJdr5xVcZyLfH4aVR8eWm2oBXXHQYWqiMjcWP13PmGbBm2NxcnMSCm51tLEZQXHkaTywBp9",
  "key20": "LTGZ7mGdWPSuvwhHKrpeEYNKvHKeJbD2QSW9QbumrwRa3PN5pNdgojxDxKdgpXtwSwb4dJXJT3jNghhhgLXBMvi",
  "key21": "4J7qiUm4yJtUGGnTXqhxMZeGs4dnJnV3N3SdDcza3XnwRdc85jKVVJkfVXkJUQn3iweGKuhkkWiYHT74NFPp12PX",
  "key22": "4saw4HAwTnQBQ3uCazkhRUCstssRZbXpTHEFJX6HzVp12Mf1caQNfvmXBfgvX1v5BoNVKbNPZYDdCmkr5nP2X2Ji",
  "key23": "Hdgn7yD1UsQKC8MyB8Xr5Sbm8Tuu3q1uepymwtozzJaVb5yKWyjoLXAyhq1Ry8TpZdZQqnETfADKVynth2co6mt",
  "key24": "5UE4cA3yGf1dep7DvXZ5AqQPwv77sySaddwkxkxRbP51Xt9VXaJHkvsE6GhodtmTfUeukCb8R7HQmA91pLasbLB8",
  "key25": "5WnCTTjTiVAYJNj8dTHo9pG2M7bGd6zGMC1FP1DnruPaZc4vmPwphVLT2RiDGTG28WKDTZQugPnDY4c2ZudvmM7j",
  "key26": "2pigpnavUjDxwtFWAV7rfmKUpABGUh7p2qwUv18bg38EHz3c9gxh1UvhRGBLZTuhoJe6hfMs4wEhfYkkJs81pc1c",
  "key27": "5bCf3uYq6mSzQBrGPigbyGoqo6AB15vToyamRtZHrjr16QB3aFyaJY9rP1dEEgq6MgtnDsLjGCnq9QAo2BvxAJp1",
  "key28": "5viFzdAFyA8acp7cUhhJm58zNeYRbpwqri4HDhozDWixCBj2cnB3aZ5ssHYfKegQSXwpHYYhXCT9Jas91AoYVvG8",
  "key29": "43RWW7uoszcA5Tfhpc4xvC6B3CndB4SknCVH1mpVUoME2DpdbhmKzNewjJKYBPLa9G27Cdtap6Qz5vCcyqR9gyY1",
  "key30": "2yGpM2XPBp16w3nu6sfq3rAfrN1nntKaoxuvLTsT8gnbXmCKp84RtTHd6Bp9ctLjQrKzi4qQ9bjT7u8hCFzVtaJp",
  "key31": "2PJU65wyYNiXcWGkEbM6pcYyDfrnzL49ntQzqSNRJKKqmtJ88i7yS9aCi2gEYt7KoUBCuhUKTt9U8MigUimisHW",
  "key32": "61VfrULpL2ACoBaz67NZPUX1XzoEFTd2jcX7gYpfmM9Y5Wgv1YXKMorbq7ZMkHk8REgPSa126gqWEiMU9LNdHBCi",
  "key33": "pePPW4tPhkG98yqHVWDX94592638JGeGkbktfq9vEER3LdTkvMGybjEZkW8cWBaWJAmhGZ3M9kwmsuWPrzJjSBQ",
  "key34": "5Xd5cj95tCXeKjgmMiAiMktogN6buZe2iPoWP4XuTtNWjESzyqUd3xoNxuQykLY2X5VxahK3WYCDTL3p95qNQdCR",
  "key35": "3hrTgY8ZUbdmcMuV6KPsA62jRz17sJqgxaVLYMKP65yReUYPxfsVsDzG3KsuF2pTX1TTzkGNhbJdWujbB41NXc5C",
  "key36": "4cGapK468ETtXs7Ro7E96t9FRQ38yDK11zUdkHncvKCYT1Ai5Xo4fPRpNCAi86stqUUoUD6xLazQrbTiWa7e4a1",
  "key37": "WoHmRwKbdhxe7qs1FJaqeA8gVRJm59jgyAwqv621rHmKtGbJE1AEmeNB82BRdaNXpCc5AxZYZuwLu2xZAN6GSWh",
  "key38": "bEEpSY1jAKfEbDxgJuLRLFXTuf9ChD6WGcPWcFvhw9BGxXBWuU9vmyGMrYzYwE1YpLY9ikeiPMeNrmspW3FDTCM",
  "key39": "44Lvb4dnThR5Kwi2oqNG1L2u1MADYS53gsGhPxJJxRA7EyHFtAU9PtA7RBqkP9i72rwF5LJ55Fk7tbws2hfCkjcW",
  "key40": "4CBYu7sKEpT5riLn3ZfRaqhFJ9mPrj4B1QAogcaaCVzxCMXMQyQZbRWqxPimHQ9SSHFbVsycJwdSHYgijjve2TnE",
  "key41": "5YATjsLn284cNoMLHXyXiCEq3c4jKK5mHNnJsVL6FYek1BQpxJZ5eu8A7xi6Xk9ysoQwQUWF9gghNoWxNBTYxFbS",
  "key42": "4sbmxa4RqFZguWXQPWNAzqGRGLzHQw3kMjTY8eFVJyRU6fiWj5PpUqE3SwCNuX75SwvdscsVzJ6aLCrt7fJ2xVKd",
  "key43": "NzdtKEArfRND7GUb3WANCkFh9bvUFbHsHA5KgUF73LzNbxvrphASZuYFfBGq63Eq93h8MfxQCTgrEwhvGSmLxci",
  "key44": "q1vUuvnAzCBuzGahZKua6W9YvtBbnzktvQ4WKUVf7yrskxgSN24VMC7MDPwu1a2Pmu2ycDN94cBj2Zntx4Q1Hv1",
  "key45": "4ysTTRrQUSV1KA7ks5uPdyxRgSfaFpExhFESSTHGkfxBBBnydNcpypZcUw21bC536XqLLWipgxaVeiuyfmwg2DSL",
  "key46": "ysLjdu2nNkYj4a9jP16zw6yH9Tp8kueMmbfiKKThE1dHR6fnuC77oRjiUUD1UncRBwA1gbVeU7ZYfsLve4AmNkm",
  "key47": "4QHH66sADRXcxJ2SdjfaJUMfFrS73zficKFJdcK5YAquTG5UuhyRkCfzGtsrzwwmbhCCnUHZAZ6EuM5Z9JD4n5hc",
  "key48": "5Mk55E3sBGuBx8TZ9m3Hp3FZsagsZbgqrrHD3d8JMRsttFFQefmXyzoMD85yoVcg19ymo3fwc1DdDwRqBdf3VieT"
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
