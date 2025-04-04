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
    "64kjRJFVhEK6ZMhcCZYyptmj98ojs2zKNF4q9bc3NFD4sShmNtP2LLcK2FDGvJCeZ3x5EMhaqN7QcoKyJxjMm48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pQRDct9X9qe2pCJ29SdLSk8RvQqFj3KjyUA8bxCBBgiocxRQKUCZPEdkegACdsu6AmU9LeaNJVLoMbjUvCDaXXB",
  "key1": "3gBTPzBmCp3cU4fczG7yq8n99oeZBpH4yYAn57UcL4uvUdjM4GXoUbefXmyQSphZiqtWSY2UDzCxhvSqjgX8uLhn",
  "key2": "5sAiG3rCjc5N516VCQdgEttWhp8ZLrY6e8oPGGq2oS1WAewuWES9ULsmPx8D4f6jk6CAuDfDsj95jmqg4gALxdD9",
  "key3": "4jKLekct438L84kn7cWg3dQKidQG5H9AL3A5QmXqh2XqwzeHu5NBP41BhhsyGcxwcyr58mhHJqvfoZsZSqjD8DwM",
  "key4": "36FW5jxV7pWvtknc29CGVPkWpfMKbS6EY9f6bmi6PSRkyfVmzDQuVWvKej8vH8rieFGAfqw3eBx5Z8oYAzTcVCtt",
  "key5": "2UpBHyBw141GV9uBwF99UawmQ5sqFEojnP8qBaMfZ47A62j39PHJLWCobHodFNtv6QWjLJuwtn1ZG8pQffednV1G",
  "key6": "3XxSr6gbNLBNuUsUspyjGASTBrMECLDG3KHHMSfqaE5ueBmQpcbksJwQ9YM3e9NTjJEVbgiBji6vXfu7yvjgvccr",
  "key7": "2cJ5TsJzQGQW51a9hxrC9BQkUeecDhEJB2wrEwFJZsvePWNod3xhkmW259xJvhZLKe8dh4vmudo7yMpTbw8LVUGK",
  "key8": "2M2L5aFckGtLo6Rn1o7isKFzDHYwAkmbpiTToqZXDsuB3RJQWYiKrQqBiXGFeSpjkzduqhoXrWGghn95F2qvDFGz",
  "key9": "5fSMuJKcsJtucrDK6dNABpbrp8NtGqmFq8tGdw4GPcVvkoHb3AQ7N7GUAwcjmgCemgfjmfBijXNmSuV7y8LEcR2e",
  "key10": "5f4fQ6LZ3fZQENQnxnBp1stgdU27Z49mv9G3yiF5Qpsp6212qjMNmH8Cc712FouSgMRsxYWPaUzRCoJhPa9uWQiW",
  "key11": "35G6wo4zsZ2ZPkGRZovYKodiJWW2JiWaV5SxwDTbh76wtcjCRwjjpGqWmWV9yckQ4V3SPQ6eEQfZQPhSUQm8PHUZ",
  "key12": "4dBfexFZKX4dWXY5V5V8GimLq9JTj5XAXcY3EJi2qsRSKCVJNh6DAzdS845Zqf8tCYhybcxXePwQTxfbKah6CSKZ",
  "key13": "2wKYBAWwcGbWwonb6u61zjVswABc6DR7SjWzmqCaStyJEeF51QvrXiGkExrCcTr8YMUvVuN2pAY48KuXBZ5EdKkx",
  "key14": "WaAmUT6WuBJcjkSZgonpMrGurX8D1RvUh3h7Y74hT6Wi7pyvdVfWtcwhMeZeChvMvahnnyVeALmWfrSzUdUTQVh",
  "key15": "2vzPoAocCwqNZCuHfJnfiPjmQURiXHnBQSsi4rTfw2on3tS1VdivCa5xk6FUo1GyLiNgVtqHNJzpSbc4kC4SFxLa",
  "key16": "csAqFuc5771AudfxT6eWg7M6tFrbubCjhHrHpNPvMdNdPigRGWjK38oXVcCuACh3eCQRJqJ5KuyYUZUfY4uysjM",
  "key17": "Czn9DbnaA75w58Zej3tQHvQjozYCHeeziWe4knfdNud8tvCKXDtP6RbjY6RrZf4HJ5chYUAEpobXL5SjMiW7ywC",
  "key18": "5Ra4m3WvBnGinDPHEJr5nUuQAG6VQVjQpX9htDsr5Xg7fuZDZCr8L8XMbqiV7n7gVXQupCY3BDeJJZdQ5yRw7xYu",
  "key19": "3KxoTm8zXUg5XyLLk61aCxfRPS9M7fR8GtPamsBra46hanPwfp6mSEFeZoLEkZ5k8cNQHZVPKdAQGamafBzBJDmL",
  "key20": "3RQZsnj7ayXq8Y6obSEGQJMLGxQMwap5BGVcTMqqenkXkY6YkTMedKwDu94Wp5ordr9GJXp2jt8Vcs3ZuhnTwKUR",
  "key21": "3SGA8GDQntVZpa9UK2sacSiWpZDDirspRwsXNFdzwr24nEpeY7PmnLHTbReWmYqqsKA891o8LDNKgFNNdWwu1hQ6",
  "key22": "63EcZ3iCW3s3Zdrm5MsW6gHRWXwbH5UhijH7b1sBkLPXiWutY5Kaq71fFh4PjxL8Rg3Sg6JhyuFhMNZexscv6Qmb",
  "key23": "5LTJpJ657xiE76p4JsfNTD3gfnAj4HHHjkczt4UVeDXFRrnieijaLRZnpfuiGv2JULK4TnpVerf2dM3hXbfMv4zd",
  "key24": "5EupkNBt1BfTGbHQpT5YkXVQvumoYKGHVNFr88Y2HKs3nyvBXASAcuGf24CoT83fZz4VatfdcLQ46AVBDt7cRq8j",
  "key25": "BkZ1Etsv3XKbdnqpQtwREyh9fvKYvWK7qErsFK5WHX7bQQh1PHiXGeLp1g6jzDxktyUuxaVTeFPENwfwLu1QesF",
  "key26": "4p9Bns1gBXwMQPDPhCDUVhZfeuPUN8jqbsKUNtaFZDfKjSvypFc4FuYrtkrwYiNAKGRzscivZA2fcvqEMJCNREBs",
  "key27": "3LEeKnu3ofcLXitfB9ZcCNvyMwJtgeJyYk43EsY4b5DcxWMyNy1HLAFJdHLyj1nWSXogGys5DizgYG6Jyg7JKrbZ",
  "key28": "3fYiBAWtb9K6xHTGHe8cgYUubCG4gDCLRbt1sv73UVoDW54uw8KBxtw5kyysbHBsyCR2fmESBKFZZBayZCWZt2Hh",
  "key29": "4ou51s6WQuTNRZUtVoEAxyg6CdQpAC6fYUTHN4eS96YapgVVdw4E4hAXbHegGEy2jCSEAEuj9muD2TPcwsyo7NRy",
  "key30": "bZKA9YNRvMC19UBUgfZZ75Fq11KoFgcoaGSVg9LYAuhq3Sb1QBzivczihXoLntokkh9yNEJhNzEwyZjA58ktfyw",
  "key31": "3ohCmAbkJajmL3TFuvfjV5b7kQXAZ8Nx9vewq2BUHdKLUMKAQ8kAxmCunDsq3ZrFhnV4V9LSnGahauPLmqXV7DDH",
  "key32": "hWn29Nm5Em4DW17fGaAdr96r9ib4YV1CivqbQkv9pioy6BCAL8kaGwMEjkXbX825JDZVJ8WJJ3hM9kPPsjdfYkB",
  "key33": "4j8CYeCzME1THcDdW9AB5hUNW2wjEjHiDtGQCsutZPMCqLxfioZkYPynsKFvBVA794efwt3XQ9QAoiogwyJZiRC1",
  "key34": "4sjEr8MxVQiPFgtHQUDAqk4o9HDp1Ldha3bEM2YbJzcqJndcMRiZZYYfnn3gj1aqVthAkDHhu8n4ZcBh4HZj4PDY",
  "key35": "67Qr1zK3sBKKsCViGJgtkmTTvsfGD6wbo397SXUcyZ7XpgriQ5vMJmHghMizjFzm1b32tZVbZvL8pL68myntktUv",
  "key36": "5qubfTwpCHCpzAvMnuJLwj1oTTvirsGiBpBWh9WWjdBNFjB7oPSaZ8FPC2HFYfR9WeYe9DhhgePXcMuqcBrmvcxm",
  "key37": "5Hh5uzYv8okHpkd4sLVoL4q1Mcx12TnmYobmW7CzstBd9v3MVRy9oJM8PFEytqLpWymofodoJUnJAwVHpHVCJQ4e",
  "key38": "2mWcaLheKTGYKqHT7dsb47irnoFUN3enFqF6DQnJoRHQPZ9zdH6twxMQqdcEPcHTK1K8aQioyoJmHjAhYjoZuEUC",
  "key39": "5DMpmFaXwsAHzrDh3VXk6B8Rgqjqxz7E2HJ7MRVzUEWueqqYKB1cWdLTGSwgMazS2gPZ21F8bpDudLotsN6dTqTp",
  "key40": "BCZ9195hdLjeWSu7r2xu6oCyDAJ3vcVPo36sUaMJMMSo1XcWW8gYUnUP15ByfZcxy9eJrEVwY6brBJPC5M8jRfK",
  "key41": "5BXvtZsvFLLDWB6RsLiTVwx4QMuQvh5eLBkkzZMd1ghJ5wspeZPVu5Yct2Cy7gENujkcmZWosDT1R4eJfonCPh1p",
  "key42": "kXEoANwGvbe32f7ikD7wcuZEKQoVKgGoGa6pyK6JiwtdiRzRhnvy32aZ2ZC6Zv4HfqDDjMUW3PNAa2L8y7dDFfv",
  "key43": "2rRaK93MhRTwEzE8ggQAfEFErjP5AtTe1jEEpR4U4UNXbSA7kRiju4Pm8PJCRXDoXsKaHrsUJio14BAK2rtVuTQP",
  "key44": "673NBoZb7Dvj1DMPMkQ7m7b5wLydhAekE8GBVW8BMfKtBpJzH7aBnuLBJTjSKenowqU5gyNwpt97dHYEF4e7n4ry"
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
