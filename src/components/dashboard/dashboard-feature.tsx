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
    "49oJJjf6erkL4vVY6GcJSbJBTaRtG4wAv5t36DBDcKnct5Ws3U69WhnAcsytGqMge4N8UKHXUf8sKxz3CVa2wEN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dKRSnAAQeHnACy1uxG9KVXPrtwxGxdzYLSpuF4aeLrkkneNY21KJ9kiPkPY4vFTM6E6Xi5UdqW66z8npvNj5Kpx",
  "key1": "45XLRrReBvuaiZJibTNyx8ojMS6CV28maSemksqpp2NGnbLJKDJ7WWscngiCD7sBPvJQq4ibegNkfpF6wUwh6kZm",
  "key2": "2RGxH9Q9CFggPJMrSMyLnukCktJaV6jGPUPaEDS6sdSG9aNqxYbP4a6Sk4WRFyVk6Xs4po9uvnDuCvWfMnn7eq2F",
  "key3": "hywgbRTa7T6hAnC5Sh9jKcRk94yhAmK3kHoMTzMaJ29KQbNcNifZ2VCqLdyJep3AM5e8512cpz8zYYCdsSFDHZT",
  "key4": "3QrN5QqpRFbiLt84JeyMh3znUq5xcXszwPEzgk7QcZzeQsn6N2yXk3tMHpCsuF8ciw23KrmK5myVJbrZ8mKAU3zg",
  "key5": "2xbfHkQtMUdKLVSn5dpMvgqyyLRVkkit4U7E6hHLCbRDtcfu6bxNbKBAeoZY3YLLA2oamDqtUEyk6ESmKkGW56wx",
  "key6": "4HrMTp6avA6xQ6HwE55wDWiVwuyCDnHEzBxvEC7wvv2wJ45szpNPsk9b9obEypoF8w3XRWaVZQ7gpo5N162bNvDC",
  "key7": "2Gyc9eK8jvpLanf2VWn6BJw8STiM6J9469Uv6VjjZTp5hLtaDro3xJu6g7nfWCPmrdJGTExxEhfWNaFGBFeqphCE",
  "key8": "cqaPh28RrhWd4MmSPENh6DbrjoE3HKTTNwQu8Dj6SHskCBTGskrJYvdTJEUk52LkgJTQhW9SAMmeWqbKHmfh7xj",
  "key9": "329DWLqwaMttMrWh5h1GZjxA66SAEGwwmj6jgQBr77WHZkdbDzWaW5RWq4G1N1sN1hCz5fyyRQmPWmmSBdtf3qF3",
  "key10": "5zto7zrcFc16SsfAwatvAiC1RD3QXAhJxyKe8HpaGL1bNxMr1gRFGwUcA9u3rtXYQrESRFVJKEB4zDXmvQFr69pd",
  "key11": "4PysBR8wWXd2Z58YZ5pjNdBXbtopGykdvkp3KFfjwPcWyRB2sS8kMckYN842hCVWfKgL5M52GZ4xZcpNRumiWEtk",
  "key12": "syCYvfnf2aqo3sG5q3qrKaV9SUBTw3sQtwmfVADftNBZbyN2M6BZxNSaQSLcdihebjArytEWdPVXRAf22AhJQtT",
  "key13": "4GRJvQEEhrj5dsAXkhNq7hP5qc4VsP2ANr4a3SxQL78Y6vDrNWLQp2sH8GGiPZKT5aG9DxmGkZxTggJ7kKPEMAaZ",
  "key14": "2MLB23yRYXNhyKQajhyqoRk35Fz5Uzks5m5ji4ChcDEbVFS8itVDsXoNBaDqa5MRbQ5eukhShkuGtDNQdejz8dgs",
  "key15": "4ZfjbcM2hPCZYv2YdhSYBQvT6XSuxhbswbyJXAr1VnGGg8ggwCb1jFx9nYH1kAwksuiaKGAq5YYV1Kdhn3GGvR9g",
  "key16": "35tUaPwYUouJtnWXZKfXtFLjEtjyaeYciwGhbHVDpMXxN12zMREWHLbkLHctQrHXZYEsb4g4qeEjzGJer6zna6wA",
  "key17": "2XQDQdpNvAYXbhmFZgPmn23ZU5wuSB64kD1ov3YbvH9ne4uMPrje6hZF8dP5QHmssTsMg6aHGpoHzhTk6L1JY54T",
  "key18": "5hSVZVLsFZLmSwcxAPS2BtacB6gYxTZnxRVT2LKPLwvLv8qgZBB793DMDeBMrn3XH6BQMykCn59E2r8nNJ4Y13ak",
  "key19": "56q7nAyoXn2Xn27V8d7fgndVE3WFbF1NSSsiEV12zUo2jJjDQDoKKzWFD1AGvKVEXjuhU6Mh3otcApQSNCUbDHtA",
  "key20": "62EmpfJACHYRfvTwj48NkqR8DiwD6FZem62iYEEGGFAWK5r91icpcVEQxog4k2itQ22tNoibTNNZpSgnuUMgT5gF",
  "key21": "2EgJ77XQwfR7jn7S8TtrYR7LQsgncZvsq8yvLTjkBVzfZ2rzsozizB6C8UScuzHSbcBKDrzT5znLpw7b4NoFXcKn",
  "key22": "2vdWwWA8h94a93JknVqY6ZcaWkJTeiYAbmF4dGHo9VKwHkDRJNYJGMe15nZEvH4n682QcCVgN89jDcNtPbK7JGqy",
  "key23": "2JzRoTWjVt8F6KrdJ7rjNJ3xwxZK6pzNr2SELBP1c8dgQs3aG5TURkASpQVScuajzTZQgcjZ8gLrGWq1wBWuU5JZ",
  "key24": "3nLcUA7JgwcdHBD32NG7chAanFk2i69zvxPJMzNoYVXPUNZhF1fM96m3w1sGPGQYyKaerp9bf8xKpJENh45kzwms",
  "key25": "2AeHpTiw1WrLUmBCE36tPkmPKRkQXrjjYPsKZXP3787f8ctKUVuBRgi2H2jDbP8zmrqgF4qnCKH5TAwPGwNE8ApC",
  "key26": "8PX3WDcyWwpipACze9oAGFKXYykzRQVqwvzw1tF5WdhA3JFx4iS6pWiqZVMHiHDymJzDLyczYBfZULcJt5pJ8rV",
  "key27": "5qav3G32FaRYJLgzMSQeKGSLZNEpY6mc2V3XMvB9ssK4UG4CDhnvjRfuTNAMbpBzyiBxCFr4uwEJYzvjTaBcGCiJ",
  "key28": "2S89qWmtWwdqwePmJqaC6YnRS6F2Xe9nS6mo9BwFNQ3cbXMNojft5gWERm3hkgBufJ9b2eQbHb6oaRjwSXemWqvX",
  "key29": "5JMwtbnNgSJwWSi49Ju7QTQJumMLtUoUJDoaeY6FvxCSP997dT3mp2cWMTTD24xG6MZEsj78w4HLYxUwnBg26bbk",
  "key30": "2CjSv4waC9YtK5oPg5uzkUyXSa9qyS9K9rT7R58mpeAQKaFxuJmmGoZ4q6XvTZBVF88L1gCY67Z19ZpWETCWLDQF",
  "key31": "4X54d4fSqEGhcw8JNfkJJqMH2rfVHB7U5FkZ1uQChQKVbmdNcUr6eFNayZDwCZC8WzHquW6hDmee1GUFKvL2er7j",
  "key32": "oaf3ZvccA3xtJfxdMAf45DxQcDraSyTxm4mBMJdTYu6g2CPvDD4fWJ3C3j9k3ToG1azcGemGrN9uVzGztFYh8Qo",
  "key33": "5wezhSaCWPyaAR9gHGpb26nC9mJTAEDoQo3uKdvkN3mYwutmU9EA8CSwrdaD5FtBUovTZdXwuB5QTKUXfetcXZMN",
  "key34": "nVFvVuuB9hkNfpoJQbq5Yn92GMM3Qrn5GZ8rZBEWjnVGzfJUV2gfjthMaDxcmEucd2qQnNEeVgnvY91gbMQTUJq",
  "key35": "XeQ5YuWcWoQ9ASif41fxLJnHkXmTaQwxzQ8oeYX6C7ntXuqdtk1Mk4vKdpjRQ69nLnPdqbeRxrU7QUu6dWawty2",
  "key36": "5ntY13KxoHWKWXooNpsQgiciM8DMRR7yFrrghLV7z3LytWQyk7Un23hHyvkaopbkVfnxCGGSJTW2ioD8C7KTHxN4",
  "key37": "33BYkEjs1aQsNdHq64AQrLYUA9xXL3Cf6Kb9fwABdofrCBdn55dLSFr2eC2SJ4gwSSijCdNNqJPSyWTMchFxBG1x",
  "key38": "3xiwkawiwSGWPndAwGgNrbbZtY9Tx68rZdLgBNcHm2YapJieQ3QCrigM8p26hhiarkD1MVDuhkzA5kwPa4cX65R8",
  "key39": "2HHeHijw3pTVoSCn39gG2doaoZGt8E3tzZb4BtHc9uA1Viux5o3FZaMmXgsxVYuATdCp7Mi6DyZHENWLJDEb51AM",
  "key40": "3nhP7aKRKAdXQLvRzMENQTafEyNKz7EH8xR8NNj1PgJJs8ymNspDsZGfRCLwicpkYPC2nEMeUSWPsnkdmykthGGG",
  "key41": "4pEztWVZPwHctK7hwXQ5Vs63aUV3zyovWke2r6U3yg4B3cEonT7bg49e9LWocxLvXiJV2hsM1JCjWziQ7K3WBTac",
  "key42": "4b9DMR7pFwttx2S4sEbbrCG9s7e6AmGyMZN2zR1UQ41UqQb1ttBetUo6DDqcjNKF6e6jUBzp7Pp6h8dTbkXSYDMy"
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
