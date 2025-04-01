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
    "5frAJA6oxa9Ad1GGsWkdCmk9hWjtnXbaeUKyRM7BLyJUsSco8k8ACvXUwSfpCBcQKV8R1ydCaMBeF4As8o7na6Gd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z5L4ALmnfx9CKUPA2VoXQ3Wp7sVEKBzF5439wggSVRM5Nqcu1vGoXH3U8B8KQ3RWsyRoFqaM6bmBuDkuCKZa2RY",
  "key1": "XskFyhxcGMiNZHyY7gLAdivwdbwQLtAWLkvHNKdWgjWeu4yii3s4iwx7QdnWrC4o7jno2YhM5aFj4u9LLazBXNP",
  "key2": "5UyYcGN4HEV5aHrfTtiJDYv6JJxa8j5HmMb1FZ34E7VXkQensF9fHYYYwNGjukPDjTLYTKGdE7cufhWsSxPwaYLj",
  "key3": "264LLkgHaqQqMT8AQQt7RXBE2QU3fcAAoR7Moz9t5ga3rMonJDCT7TEgvAGMrT8xS81atrQe11hu85ya2xbwBqAv",
  "key4": "4B3QG8ENgXAyyNxenyn2JVKRANgLJY7LWFhYXSxFJSQP3f5vAPMbYykaGUFncY3BmnQuvYku5chfhP5n21REoevC",
  "key5": "mbrXTEtzt3BkcWNKUc2acmSeScBW2At2mox95b4CYmNgc2dXuiEFuZn5XoAk8Bdnp6qL2Rm863x4LcmbCcsTuvh",
  "key6": "3pd9NUwjgZJexrrPULLGJkHpTJvNBxujyVsQzyuCZjjSdNRQRRvLsU1ydJdfTB5vZEb4mqEMThenDikqrvNphWEZ",
  "key7": "JPvtkQSZFvpgEn5x1hFoECdrZLC2pCAEGc3bxMUZ4yoYhrKz241d92YZTDJpb4AQ67kCpETjn6uzkZy6fAqS8xP",
  "key8": "4dGxf85AAeHjATZLA4z4MNCw4P9cto29r2Pstim7tgwpVEsiYQmNk4Nr3MPNSTMZtzPEHJs8wNbj6YNcKV3JoEtp",
  "key9": "2YBSHfaKYNiKAhyzTYzaGn3FLZb1BQrWK3F5eBqDvnSsKzpygWADc73FZqy8KqjeZ6ZwV5Jh2GzNSXwws3ZD3WAh",
  "key10": "fHvRAyGCnQEf8cTV3uNNXrKTJwFDLRAxueQ8u4cfr1cf4u2dUNzBNzWqGNh7ojeXYHuWhqnmaYqBLFZC1TcwKR2",
  "key11": "5wMk2kJWb2hsZVwM1MXiFeRYHQ7Jnz38aKvDuhiJ3muCCBM1bHpXsaLewn9evELvKf7LCx5SP8rcbdy4HuDpZYhR",
  "key12": "5jCNEWpohH3tEKHAP9fRTi69aoL4FgTjb9pzRML8ELaSsFXMXF2vJKoSA4SBKMx6Y9zfozL8woCvRFUhQwDoAs8Y",
  "key13": "2j5xc8KrGe84oufvZEm5ZGCSKdv2My6zp2ByRstBb4RfasmKSgLEgFG22DFMJJpAd7wcXnrMyptohfvkzSX7NVj1",
  "key14": "55r1MTEDwBWZ6WQ1s3oUjdg38SBFjdLL7nu9oUpiUsV7KCQKfnrdoLRP1P6t6vbWG711xX1y2CrPxt5XUP9GLSjw",
  "key15": "2coSLC3W1FCF6auNpWFUcY5DtroZrUvBWcrozUBCD5PoENug5AcW5VeFKb9xpeBZdK1XBsagt3kNAxLa2LLVcunE",
  "key16": "5NuEaKiyUgqKq8QZq79DUevsiT2D5PTwydx4nQRpCrEf8QBohcnpoeszXnHpKukHNXTtqWTQDa1aeDbBMKCnHTxi",
  "key17": "4hwgQ5mfdWR1ibMwBNfaFpLZ1QdCxhVZrZYdermFWoTecf6ncyVwJeSa7Bpt1A6QqiNkJWq9YPDmqEJFJNkUsokE",
  "key18": "5XFtrs4gHUsbQLBheZYGZLhuapGi9RdqAdhhFUQt83TFH8Xf2p98F2qVCnGo8KpqX8SRswAWZXwunepJHfDZ6e61",
  "key19": "5VwXTqhzgEmAcAUVUSiFnQQN1AfbocACxHZDr9WMh5S73R3sPsJeiuAQTKeq6DZbj2bm3i3bk4V7urqFxkNJMHNB",
  "key20": "4iSWV49ernp7dtYwTGo57WNnHQme1QNax2vNNmZfH3m3uaXnJ7zwoYwE94r6r21xuvsc1fBbWQEZYb2xJHaXmMF9",
  "key21": "2koHADsmXYqjD6ucg4o5C8eSDrpCNqCDnXdoNELsQsTr3ysMPX3hcMDFqfKKdMpayhyitqRPjAeN3qbPvNp2E3tF",
  "key22": "2e2R3FQKq5X18xf77PU19mDyBszH5387J9poAkQxaAgxTpEekHVgXQXCb5x8EAr2EJjcTRKYWxqkjgmamphbQgv2",
  "key23": "2GEitKLbgWwK1ihcmo4hLr1nE5us5si6zsLnqczRKhep9kM4yw7NtbQsssYNFZb4yTfDAbXchVheJLorzGSVXQ6L",
  "key24": "3CNnU6WtQPaNqsgJiDxXRUP1gyZTaCJ5gZWxVmaixAjB4i25UXQWr9FytDrFRaooT3HRkKUwvXpAbiiLEcf2DVMo",
  "key25": "4S4i1YHPqh5kgMQr7qjiZxjZtVjREhdESGzeq7RzwfY3rAgL5BXVALco5mupFzYpx4fu4t7Pcbmb1PSMBxrKzE3L",
  "key26": "YaWnEuLaxYb53Ya7a22QafUnhSCzXV6U8aRxNxbRxaXJbZ943w2ihns1p8cqvEz96kC7cXc79kmQReigxNhMMBd",
  "key27": "HzfMWfZwtNzH4jhBwY6Wbpa5ujb3SqVuejsmcqs94yQ8ghGrCCY1seAHGW8H3ErCFEJZUTDdfjrbvFVo5gi8RjG",
  "key28": "3xzG8yvp8DEiD4gizma8SpDGgJ2tPRM5DMsBzYNTJ4LsyriLXKoQXEsNQsELcKz1tAkucAeAzMxrrxcpC764Lqwz",
  "key29": "3KvizEBAubME8gbmkQRXMJfLH4HTWQCSzjQLBTwHzrKVxYmKz3dNp46U58uenLFzPPBFraNNCJXok5xir4EdxAPb",
  "key30": "5JbXow1CMPDng6zBu2w5VjJm3v2yh6cQPQMizRdxe3SssPYWiCtW8DU6R19SFgtbRm3t5w1kZdkywCt9uGmMPeis",
  "key31": "5sGF3rnbSN1xkcygc74XGDos7yVvhoF4W1bTKecYYpaBpa3PtAJ1tNx3QFVeeBkuWoFMsUTZ2Wfd62L81gpSApv2",
  "key32": "2Zsou4r5GeUUNeHsPsS5Dm9xR6XCwKtepwgHNDy561ciTiwf7vcBcMJxiH59CTk2eY3mVoGZbmpmMGgaNH6Z53MP",
  "key33": "3Sri36wcRTt1m92aFo276k4q4TAN4HGCfdj4mYx6ZAXdWZnurXyS5m6NQKuJ8JQLJ5Pd5KkAxZ7CdqyHuRN98sha",
  "key34": "ZXJQXf7jEED8LbhuJnweGqVGXXqHDQeu4BPpqtEiBK9QsxpHYgCcfHrYwNwtZjvH4cSPQMSZwmUg7s7iyNEjcmD",
  "key35": "gARj2UyGRKBRjx7dLihC4oSN6bHPfd1RucAcq2yMQC45gXApMkebXa3UyLyjVMUm7HHFV1F9JrRpJT5sKzmwCTW",
  "key36": "36KnoW6rL3RDEQzSJaZbqSR36TagUbi6VgBDfneGtiDeyb95oP2huJk6iMHBCUxbupzspghKKtHte8roEyqKsWs9",
  "key37": "4jskpYg5tqZoUWUEDq4HKrQmLm7monmNEn7V2EmMPtRYqSsnhPmp6VZbZPGbpd5NkD8ReiXRJTu479xPpoWKzvG7",
  "key38": "3JWDjP7VutHST8xThx9j3BUomZ3rvLRH6AzAjAUhMBj8xzNborHGicYiFuZWJscpdjXuQVP9x4ihdxz1xQorBvRr",
  "key39": "3FZsd1ugGtScFnc8vwpisfWff2UVqUyM1VtpwKkXkvYJxTV1tJyz9aqJD4z5Kc6Twz3rRjBq68gqbWiovLF9Bk1p",
  "key40": "411aDutEj3AkkeXqgeqizBjPC5t4N5Rtxchbz8f9agPY6FuZGrAhHLR4uoxwhe2EVcW4FbA3QzAJSBPghX1ZpDXx",
  "key41": "2Be3vKY94T5BPwHE2edCsAdSUsm9hyQzYPaq3TNHcVBgfHfP67bf9xZh4Ap1rPAkVAT8aveDLnwTbpyCqCkh1TtV",
  "key42": "2Kbtqbt9MNyhdTrSbY7bgAbQHGVJUAJmWPJYv6Vizu1cFyXkkp1xANFu79TaMwSb2YngWNKZhaRaQdd5T8zQoDA3",
  "key43": "HRf24BBsW78CBwYoccHXQAvu35vAx33zzEPfiTQHzWuaxHN9t3vdVSb5K5JBcD3Sah46vk11A9iq589Wykx6UBy",
  "key44": "3Foy6kvVYvMpFFRtwQr2G77D4fQMoZmYvEe4VT7zMDhccRgYnoVp6ATQX8Ro2evyfaijbrZaBrjFLyEJ2cVvvrUE",
  "key45": "2MNZ1xzpbTdvNhD1kpTx3TMv6hQNTr88KBH2vEgRK5YxpqLLcMRHVVe9TVckmEcLrBPvdWFZvKhXMr1ZQZtoDLd3",
  "key46": "4Hds6vz7bnSvEG1g5PAUSDphBrMPxWvMJpxtVXwWsr5m7VQpTb7NKZeQfSejBz8ExTVdUbBkLaDJgJ594N7VTeVF",
  "key47": "2jncWDMT4dGnZpWpiJfeNF1XBDpVSJPiGAv5PCmKdC6YnL37mBNnS2BA3dFQqxn9xQG55oGsFDnoJ6dLBdi6haNs",
  "key48": "47QT4iRC7sryCSHEyiZeD3jtvyNHF4HrRq5iP1sQ7ioJpUAkDKBMhrSvWAYHrdBbK53fMb35G4esvNNcom9GaFPq"
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
