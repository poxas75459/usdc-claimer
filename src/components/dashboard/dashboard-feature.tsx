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
    "2MY4fvoRCnDmk8Pz7L31ExPHhW2iLEG66AoSVjiQRyVDikzcS7JfdyrYEKMxpLmZ2FaPJyp526wzFs7SQbzB3T17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oE27GusSUniET9MgQ57LXvQRTaxHC13SCUxotUHkwDmWutFuxZDwXHBD25r7zkWKPzYAvRMJG2GzMuJPQYwrjy8",
  "key1": "5qvAk5CvYXU8D1v1qSpKYNvWK5KXQRWBwWvGNBSum9oXZQ9htpXW36XJqqbwQVYdDj1bhAApDiJrch5oFFkcoay8",
  "key2": "2fbd2yn95KKaQr7x4p92Eugme3cnNGvbjsyHQTiwX6Eam2ejEoS61nQSuV3VRSV2N75ngHbhHU9fcGzRKiFCsouS",
  "key3": "678z6JzFvx5AUwzLMjcMrxwQEMm2K9EwGywFHfGhVZCtKNQyM9NtpvM3PRAjUYmcBzRBdVv4QZctTJQc3uJCF5bD",
  "key4": "4vqYVXQNgvFGMZXk1MCJZf9mzpXsu1cv8kCBKpLuYk4Lw7zEGx9QWfjVUEpVgmfoqW1Z7zpSN1FmCymRhQGzD6GB",
  "key5": "5c32toEgXHWhveioMX5frbd52R8fsqsxEu5Z7j74MBAnup4g3Za8fkhS1Z8UaMSyzaiA9FKJmA8yTGcxrTVur5bz",
  "key6": "aP71djwPLokX7eo81tyoSfLqpDciKDVdNdxPRS5eKFBvg4Xi3wnrXCpEvVSD8iMgsYNZWYJ7nBNz1k2w9vCvMob",
  "key7": "2Y8qwkMkYQo8qLUio1ySzidmthcoPc6iMBkbYirJToE14yPhGj9ULgdGaUpsjVTVed4GbDfeqVBh15ot6V7tU6Em",
  "key8": "HVtGsRqDuwHxevsh8iGQVVaEGgwqzi2B54CQjF76c5scKHYSnX5z7GDbAxgZLBNBAd3BU12H8B6BgxX9EJJCjQH",
  "key9": "5Vvu6WZuVajKwq42T3KQcXYixTtpYqsui8VfdMDYUqexRXemkaUR5WyDGsFAfZ45WAJgyRMYQ7pwrZVsezt3Hgj1",
  "key10": "2rBdW6DTWbdhX8d1DLSnUfVSsZWq5qSLQkbkGDRUEKB4Rscs7PQHXKULe5F2gaUxQTNrAT8ENvXFxmduwiQ5YiGC",
  "key11": "3sx8VwCsz7jNdzuCay4vJBZg1Rutnp457aSJL4VG8pHtbRTTv8VBBhUbV2JGjuno6f7Kw3a46achU1PtWNtHPZL1",
  "key12": "jaNj8GBTpC9uhjBwERtZBctatiu1dJPYpBEyDH6WSoA66mNFtRUNEgJLKj9JjMbkAjR2KWNJaKmEwD2KqeLKkfc",
  "key13": "BWHgFaBR1HLit9z83p7518ydmL8AGiuxNZBwAaaUvWzuvfXSyM6Yxx998Z8n4FdkyqcKP9nGXGMz7kJ6t2F4WgB",
  "key14": "2gt8ooisRQHHidcKvASdYvKw8MTxA9quPwMgPTqUxYiPY7dxkHXDU2ECao9mskDyQojUFj6kjLbzd2CRWiWNMu9h",
  "key15": "4kHwSuSAz4TutXMupQYWNuu3xfmjLQZ2asr5znRpN9KDA5qVuz1Afp5BYqUqMBdqwtRXuUzWSoeX33w9BfzgrDcX",
  "key16": "3s6xwKfuJrSuZahGm9yaGqnyY6t744qtc3oAFAhH1pg5dvnvhBjGuykkQidWqoPbv3pXQX1rQESGh9BEff4djukL",
  "key17": "cdNwBTEkphyL1AtULYt9sdmqmWeWrrycEF5oG8UVTMuS5f5Cou91fM2jhjkKz7YEHqNrn6bJ9irH2PySF9Dy2HG",
  "key18": "49iZKsy9kkYStqWtQzvZaV31i5bHRM3h5K1sg2FMwQ1vGiLF6RZXbJ7AcbNzvowcmDLwogm8hyiQQVTMH1NhE1gP",
  "key19": "2X8gNGThYCTYZjFZiBsQb8oVBUJciXwbe71sGnjTX6iD6cPkAX9yvfj43uK6CZLu55x39K9r8FQ44j9eq2fNmbqX",
  "key20": "4uc6ncCbwUToZExVW5oNMVr54eXU9nBFaSjhHKNfXn8hVvmfnT6tDJx8UwB3r6D4sdiugC2VgrWXdot19h7qRCzj",
  "key21": "3QH7g8gTfTruk4bx5hLLqVabCW5HPjBmaKkxkQ9NaAp5gP2cuDnhy5yYL3ZebXguCHNQUtKBmgdF8xqzYDwftRPr",
  "key22": "KAAFEkb5xtJ42e5z9rJGxkR1Xm3gSsqT8H1cZ5mHG5ruyq6SrsVCcA191nJEGqM7cSATZXkdCiZ3cnhG7pN3oKV",
  "key23": "4AxpDaPn59ms64dQbzRB8RPFP8Pk3ZMMym3h3qVouQQ572bxp8N6YqSUSSC4rBvhVBr8a84egL8WnMqPSb26aXHv",
  "key24": "eMke4hapbki8T9jXi5ME7SCe5KCLucCHoky7WSnHECw8tVEbBeZuhPYHEdqV47ZX6SFkfyWd4PNmsvrZYDerV8z",
  "key25": "3t58iuJdjf444oQ1C9s9tZQiW3oGpsoA6JWZ3PJBPduHXMc3uWvbH43GZfZAbaweUSz6KbjJxD6r3jwnihDqSo1n",
  "key26": "4kCmgjzDA7A9V8W18pSLSRBNhhzchPZCRZVDrcrfqx97iqLSUG52C3XPcrNBDTaLJRLb2Loh6boHbAcMWoarbsXL",
  "key27": "fEUdbwnGwTKBBJD4No45DERDJMS1PuTrTJZAB3hRiF1UKci2iB1PvoC2WvUWAbCY6ZYqyfCXXkcpXCXqExUugWE",
  "key28": "4qS4UpMVSa3ewnDYHcEuwarFmgwHAuqTxakGPBSVC9kvAcBwrunBLg7uCycBDWA5gMBjVHnUT7CjMyKSHMQWiivw",
  "key29": "2hc2Le9J86EB4SYeY6rVXBTX9FrBhe2JHQZyRGfsn5UyLkPiqwxjxyLHmmuNDpkwz9vkLJyQrNkaixQjuP3hKqyg",
  "key30": "25qTU1QHwcUgZw3R5MGY1CpqCxNnVSdxgFA1NbPzhwgJcW2dAHq1i1u5nN635KjgvoztW9qZxGfxRFbxAxH87H7s",
  "key31": "5u16K5QZ6creLzMj8P2Z1XBy2ci6jtUKJZWzx3XreW5vNqY7aCJSfiEyu5WMuLwCZHu76heizECzMRiHRxUsN5CF",
  "key32": "q1WY1PBCL3LkVGpnZjH5xEWii19tRE3gjTFujaE5VcPas74w1GZXZYdroHdLsDKjGeB8yjEYQMsv82BaWYjimHq",
  "key33": "3EdD1ojDTUQjifS18aMQ2RcpK82WhYuRAs7knBzXjB66PB26BSucy2U1cXwib17ujmpHKovcvFBdSWd5SNvbvv5o",
  "key34": "36EJAwqBrbG9cMTCb3qe14r5vcBvxRhnuvYcNwPzsterq6Lt992yhsdbSoaAPTYvCPhb4CxNy8iMEar4pfGRLU5p",
  "key35": "2Uu3XwfyTh9bGqP8kNbxoUjTNWg6YhNVkKNM8GC6g2e8a7yvEWhC5nPAJ1bKYoLMKBKigSswJ3oHL6ZSJpkNRJgF",
  "key36": "36X2nZs9M28seEebDp9bWWvqpA1ADK2Ttbny7Fyu3qcDgh2FioJzHM2K2LvjdrftGMbsXgRUXebTTu1v82z9NtS3",
  "key37": "4hx9oLMU19sTJDHYTUQvYrCNnhMKWbxq6dz1KXKM4FwTGnd28afeMmU55XqVjx2dNRXtYym6XxoKELEFuDGRvKt6",
  "key38": "2at8RuaWcpn4boyCUfNUQugpaXE2x6CJdF8AvYJssJFeN3jCL8JPq4zqtV5N71QhH8cN74Ndwy7SJuCxMtpG7ypr",
  "key39": "5q5smWh5nWqwGJX7LCBvVkogSxPpjvb3pMVzRzFqWqoN65HpByQPvGarLpWZCFETg8sqMYVgP8yZVvQSTvj1wRK5",
  "key40": "2xBBzFabkP9C3gdcNDsoNmMFXuSx1psMWW79MqBXLJ6tDEiTsJ5VHLaPPVqJBujF38t9vFyUYJ2K9H4EtEJ8GnJS",
  "key41": "4r9Rt9S2nhaLyw7DmtA4vbaST2hAuVMHrWHFeuhiRH2o6VVrYUiBh4faYRzC9NGAVZ8Xc5Fi23iwFKAoYrC9AFJf",
  "key42": "2MTDJKnJte7ijLdChZpi61oNPrEXBpna7PZNePRQFz828JskcbeqfHi7dLamokyG8VpJpaqDEze76i6wvQfCstQQ",
  "key43": "2KPTi2vbAkyv37DFMGRHd2Wo78m8ehwZdYGVmaZzfL3yDE95LanuAN8SrdoTjrLXWcyK2CGQ8S2LKMnzNS44Bajq",
  "key44": "5KFMBVLo2ZPP66qxsdMBxgoSXmx6PKUZs12hVXTSa6Z44izewFjiVk4bN317tQPeiWj49rAEAJBoRcUsWFNXwgcU",
  "key45": "458VhixLbtE9TbSVE3AUfQsQ9Zx5XPiEFkKi1r317uHy8rADoLTkyUbprFZXGJ9VcvQdvmJ73TebhX5QvxiJqXiS"
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
