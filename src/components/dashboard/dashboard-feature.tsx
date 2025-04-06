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
    "3VT4jUX5CX4jtkHeL6AjET4kikna1HfeUk5eHwfmy1QCgnjxTZnDVasAL1ab6mWNEYHn2RppPM29Utka5tF711YD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67kWRz5R8cSVHf4PmgBxjErULrvWDVN4trgqH5FbTEXdNqRSxxsrzxi977qAAzDuuoFVYZYKRJN3h3t4gLLJSBVB",
  "key1": "4KakzZMqavLNDjA6MU8UPcB2FPJh9U5AKrmF6zxW5hN7AhffmBUHg8t1AyA2imGbqgUyRdxHyNVw8U5AS936NT2p",
  "key2": "5Yw1JF91VjtgZgtW26e5yVN41YuDxEkRVj8MTixn1itdRxXvoDaX4Ut3vjEGTRGMQ2UFYWEpaaUxbGaS6b5kgEBW",
  "key3": "5mpANahk79GrZNNvA5L55iN8nJ3KJdt7Hr6JPCRCgQNuecuKnMLfYSqWNdPBkkgZwB42Zm8p79V2BCSPCH6s9Uas",
  "key4": "4gsp3KEFyRdeEAAC55WdDWmAQCh17UCsvU6LCghZiM9p1BaVkx6XojtCq3VZi4piUio6ezXC8PN1wnpQMUmjv1qw",
  "key5": "2HMjeTDcUmj8LVo4fHv4bfeXFmMhYac7QEY63K8VHLW86qYvMzN4MCPKYhyWa4NGCK6zJMLYeCVW51mkT8q1LYxP",
  "key6": "3h4a1XYKcNR6gMegfqpFEmXXuS3d4X5khWWCrKnxYjTzAX4YuBF6CbAeiPubBhf5tbzpJhZ5zEg6SE9m4w9gUXYk",
  "key7": "2qQvPU7HYPNY3ZJSFvFvwmRMWn1tniMbTVc5g7GpzcjXeH2AUzktVN34ujbzrmEvXhmu5MCuDsiE6ysn1qHS3mkJ",
  "key8": "3bZwChRZMzmfZTxuRKf99LiprP3DS4K5n6ZARYKUF5Fdq4HihK38B2QF2292mG6EUaSENR8w92yWzt91ZBSb46fi",
  "key9": "3kXap5KwxrZXQ6YkkRZDYAXnzimJZh48h6hqjKQx2W8rveUJKWEeYWXiiNwdfDYiPJaZEnyjyNSAUajFJ8mcgRhx",
  "key10": "3zqZAQJWswyUgPU6Yky56ugAAvn7HbrW4LVhUG9eSWMjjGwREkha43Tp3vevZQWbPFr6754hyLne7rEG2gCoh7aH",
  "key11": "3XGv5EgZ3EWdvgi4DU2pC4nRNnFmQMEBMTC2q5HQynvA53rx8HtDfg5kxH9nRHbtonJPSk67TBfKT2nMTK8qcjAr",
  "key12": "4V88yLCuGi4HgamSoRvHVSiBX5rjPd64jFDhittyST9XpPiGc3oKoc516AZraurSeV1zGfPx2x35hkVVG4LPP78Q",
  "key13": "3jb3DCaXdZRvGdBetRzts5QVRyt84MG9tVEUzMXbhxuUEvdQDgtg9FtVXeZSKyF17g5hEcaqHiEFmC2hTD1oVru",
  "key14": "BvoLvWVWjVEjwk9rvY7DgXbWMby54Ewp3RNrwM1pYoiZt5bJQKKgeUQWhzKX4gVXoRpAb7FKWvGCQ9mpRy3UmnX",
  "key15": "59P5rKo6LTJwuNvmpWZrzaKzHzoLnjyVpon5CuJvufnreuGabcwtqDUsGBEppA9FFjiTjB8ffSCMcpzjrrrbhKv8",
  "key16": "BJFHhDbVB3QNu3duWwYArfK9hPHJEZ7dwWXN99t3aVHMnLUaBdzuqqBotBJR1GPyM2DN8pmbyzQKqkprU2qwhWV",
  "key17": "3U9db6uHEZ3x7qj3KtAxasShYWtj4jmf3YMJVZyWfmyTVqRxHUpHXKRLwt56JMxJyej1ZR9uThZqQ3rXMvZmEU7D",
  "key18": "4jz2dRNaNutFBMFz8dVop4SCP6PdxFQyKu3TjKktcfPF33ym5dQ7LpmJjbfFoMZ3iPFJcatfHso8wo9t31Pp7M95",
  "key19": "2fzz59KcQ8NSH6c8VRMmncbs5zBx1H2zoDYuetALtTHMWjZEgR9JyQap1NAvtga3rG4GrRYoQcDsSCg2LejmHJqS",
  "key20": "2h3dou7b59Erya5J9Vxk1xSGmLQGJKMH9BvFwJ9y2E3YMyy8vEN7HyEG1sKumZiAZp7devRBmnyHNWaJDh1gbgKd",
  "key21": "WsSeLMwAHdfKDV5sQteXdvPrDtPD6syXtE7U59Z1FotnBR51RsnbZC6i7LRAgWZSRzVV2s3gbLRkEALjzDqADSm",
  "key22": "3r976JSW8g5ea5MEyAfPKqYucrmmSNUHa3NiPHBnzUsDRzBfHHJGXoRs6PkHP7WrSKAoJnBygVCtMwC8QPdq8zUc",
  "key23": "4SGryBBfLQdL1z5JpEQwfKLdbaNYuXZKbSwTVZVVYarEyHnKNsYDS8NTk1r37FCcZEgmLWhBaEztUHkWj145mNrU",
  "key24": "2MhuEsyB1fnNxivfnRZ2nRRutjDxb6SJnqEpfmDDSnaCz39rwffLzyRpFgbCCZj6t68eAZc4FbCFrBxNeQGLn8vW",
  "key25": "4PqGNrCuT7eh6z3V5SLZjJQJD7Xa7uZikBV9caZuMBTmKa9gAcqqmHgjbowhoYxJUfXJS6xaJgZTfgN1L73y3oDG",
  "key26": "4GntRHQPVZRDncHEZMtJ1P8DqwPtobbGRV3rc8Q52tCcnpyyieVPbpbupqBHfrG4WUzA4HYC7V14zLskHeWM6mpj",
  "key27": "2X6TiEG15ZdktEjYoWBNXJBvrYRPZsZNwz9hWauuK9u63pCY9MiSiw6BfsZ3vTiE28tcHRVj3qVbUXhhBRmoosmw",
  "key28": "5mq1G8Hwz8aKwU5WC1xYofonQmgR7UWmHhPkhCFW1B9ACHdL6vYSLfrdutdnsGt1dQ6FHZf6RYbhrbGd7KTZpfM5",
  "key29": "45iMzoS5cqCeAEfd1inARdQTZmMLqBvtHZAsJp2qqCQjKCVrPmvLtbgdqgCMqhjdmQiGueZDpNgz9iUDEH2z2JyF",
  "key30": "47mDE6cJT4xrdenJRv9xMx9VmQrJLpNfvrphe1v5rJu49jFvjpW9QfP7NGLQANDezUqYdX2fcLQZzFuKa3BT5NQc",
  "key31": "3KzUvAeBhmXiMsx8K548mZfmzg5L5KrXkiXfSc1hpwToitNWYj9nNpK4SGTmjUAvum3Novw7mDfT4B3FMTy88ebr",
  "key32": "5r6d8xH8D6Zh97sisdbnX13W9fcZNKhsLygjjCTBxRT8e7vZBjJVsZ2VHcvzTvnu9UgJ55UZGH1SNNWJpnqpLWT7",
  "key33": "55zBRu6Ay31dpV5CMLtwDWwCTyziZb3DiRBgaGafp8RRditt9CQYWSW25gqsXL4QZJsfSFgfXNmasfYKiA995SMR",
  "key34": "4kMbP2oSkFaH8Kjadqo6wzuRS6oBCNonupPvCav7NTEnfLDJAo9MCcrSxwDe2QoUyZqwwM8vjcQtHnKNYohNQVXp",
  "key35": "Qzi4LBfdSRsisRVo9YfWKhQHbU3xawTUZgWDT6Qux9nmECgu9an6QPRPHUrJc587wxb7QUec7DtTWuM1KDywTLt",
  "key36": "2EGLj8JBBQwgpAbrvKE7TjveyXANwkW1XnuJ2VzpHPQEEXXSVmFB8D6ZbM1fyugYWJ9ymMNZGCCxw4TDFMTBudpP",
  "key37": "Fr5w36ceNzY5wJYmZD27VCPpjv33mrq63va5PdJMMMai78PNPiURcLRKJiwMBkGm8ztQwbNR1LwkcDoie5o3FWS",
  "key38": "5kXTwJP41f4XwJnPGdaAnub6juJToEDEoDTBx31rTmDKC23LvVzhxHqnmK64HZpEjhZzT7xTefhtvYZfXra9JDth",
  "key39": "2jp8zL1x2QWrqMMG41B5SDbtpDpCLE7P5ovkWb5Myex2B2mJZQ3TMcPdvbQ1dQjYxhCLah9QVTk7WGZvTHMYboMX",
  "key40": "5bjdgokPJAR5h3Jm6VCFFk6m64jkmBKuuMvsxKstDDQ5mtgMJuaCwk6EGBRUmBkGj42APhqVo3HQne3JfpP9EcEV",
  "key41": "5ukq68UZZuLxxfFELAzNRqe6C9R9HFj4m19nWVmzK3G1S8ufFjUhvhmD8AL2jT5ggC3idrE7nAEJUf5Fw5uEu2hq",
  "key42": "3ZTRDvWLkGhLZGnT57ukiYMByhvbQMQ9ahSurJZPVZFdE67dyLNWsqVuRv6FUn5yDnTZpYVF5pYaHig7u5Nsqaz9",
  "key43": "5N48Gq8Lvb7E1GuGPECsMbx94tQUjUEyeDHFXBxqgDiuNG36phWFnCvAF3LMVGBVNQTeGVAXL38JPLSjv7dK7RuY",
  "key44": "3H6zhuyvir1grEnT6Nv3SpEULLuh1zaK7jiHkXKVLADyUNcopSkQUX247u5F85gcdUF7UK7EdygMajP33LLcy6XY",
  "key45": "2S7T6cJhgezgWX44zkRJeLtQ3vgCwuG7Q53FCXP8zELY7ENco4ugJp9pNZM5YFaZo7RJXfQJaN856cGhYGGYRLD5",
  "key46": "3NNgq8QEzyF1uFawgwDqEg7kkrQaASBaRPdJjfGcGfHhAd63GfFebY9WWWeRiuaqNPBEkdFyt8sajKLvfiDdVZWG",
  "key47": "56daHWCyBTp5jKEXjf5GccDsx4cnAEkuLZE1Av4UBo2VJQZL14S4NzzCiHu3YDGBZeciNvVTKUujJk9EjwXNn2bV",
  "key48": "53bJNg8bLKp2392AMdbwokV1mPLxBrQi8EWLuMmvAGkgEzStFAhJdbSJoVeCxyHwsJXQ8osFNzhNWDvUDcvEp8oH"
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
