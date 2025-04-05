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
    "3hFheLcuqHSDKxJdwjGj95RGAqaz2xB6V73Gcb8aXdbEitzYVvLKLCpHrgvUy3runhU6C12xdX6koPaq3ifT3Jk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bkpn6edLtc2EN9uEAVtGVdEaJ5DbyPn3hR2h6fDKJJNcXLyH4AZrzEsbfwFpo5pGTcc44JozPQkYRCT9cRJHeLP",
  "key1": "4ZrD4fA7JLFBveVWZQ1eAruQ2h945oveKY8wjRPfd1pqh5CdcpV6eH58moaWi1i1wf9M1mYjZhD5XTaRxWAAEaWL",
  "key2": "47KRnjVTjQFTCVW96inPjM1KRZUpb2E2QY4g3hUJRJB7YXDhuMCVnapwnQuEpstdyCpzLqpddrVCGBajte4BbMth",
  "key3": "4ZrbvWkZiFbKWArF6xqqyPMNKgQ9obHguAks5v4TeU2qQ8cVVL59bFRy1Yfg2Y9yC6iSVjkVg8gJYut3EbyXsrry",
  "key4": "SPKErpxNWihf2X5cWtMXWFgZ9yMN9UwGJi74vw3RQML1VVVSLryYhw5fEzoPEkpzzdxiwfcBp7JChZQe44s7Kvr",
  "key5": "65rMzS7NVkQiuNJuSpgFNtxsqgxHiCEATvrn2zwrm4NmaqMmca7XTA9Eg49Uj1L7DUGECHrHvxzix1o8CsUBDAjg",
  "key6": "2kYQsSnc2KvU2gQaPqQCJChmo1igYTQz9Z6BDNs8qtSgQNDctNQJMmhczhwwmeTSMsqRhVseUYxKVyy3hrzgz8ux",
  "key7": "3tV9aujCDFLLBNp4u85mvLhaSbsdhFPFfzFXmnEk7uFyao4h9e1UXsN9MMv682XsUaDsPy6QrFyLvZpqjVvgLGPg",
  "key8": "zCur9wV9rGMnHWqtSKNWUPNHMLqTo54UzF3EmcNnjf3MzUL2QfCqoJ9Cpiffyx9seBiUeWvUQ92jaBvaDgvfUzY",
  "key9": "3bYZ1UBdq7ZQHNA9CpGZYzuPDQ9QZ5UEETWqZeJmbzYA7t9gwWwzjCiPYxeUiMHBATJCGYGvnyPdsJXVeYqWPvcf",
  "key10": "43j66xw4rb11tpo2sPJdptGJU7bCvDXPrK9DtcHNwEuRupMc2gmVNfyAa7pvVm8iPoXv6jzgE76iJ1RMEwrAmbkx",
  "key11": "3Rv17VwvrH7RtVQuQe4yZmLPBBLbVHDS9cfSNZrdp3MiW29YAhhdMH48Sspyucb1RAwqpdxtSAt89B6uy3YFWW5v",
  "key12": "5RYHDr6ATdAxE4L8vmRFxsQ67aoP6EmUEiVgXxuZJDVV7FLZWCJwu7DbeWdmRKQFk3uSHBFck69GcyKRSxsckpap",
  "key13": "31UcAJpHqJJ2QVYJutyJddVzM9HzZoT2HmAqphTKuczPYydMkT8WyZcK6VUjEqheRSCwMXd6M9XSSo8qN6DGKtXH",
  "key14": "4fEXP7Jx14L5Z68nR7B64DTWZiXdin46HaBPeZpvjXc6rF2kxuSFpe8MKHneA6amgSir9tRB4vxerfKmEvNUKGF1",
  "key15": "5CF5qYXkH6vKCgeoroaSwoCp7SXDs32MtB4n5hXvxPjW5K1Pb5D9nxx6JaaJDrfFpSpYm5UKmAHkHM1uF7z4aYR8",
  "key16": "2Yax2nCm9kBRGVtECQXJ3tAuWnn2BTBSDKd18tiWkoRd2FjjbeiS16YDvtiqgGLozT5oGgXM6b2m8QKhUPjfmZ6w",
  "key17": "9Q8A2J95ZMvEqdgEWfuLygyGHaw29nMoaEeNPLF5AmW7XWWozZpUGubkSCLNJKWmwds7V5gKuFAyECKAxuPhJKH",
  "key18": "3g3N8Z7fUGm9dMFMxSio8Kp4wUM6WBGWJ1hc3oVpvapDSfC8SdyXmQ7dZnrUG3NC53ndBTirnLvB4TsJ6FXXgi5Q",
  "key19": "ACsBP9GC5uJn7xoRGrDUFF1DbqNN5aTLmP2R6tnaJoZgt2pCtYrCUEthezhkwQzoQvzakkoCyxTGsUVGTLotCFZ",
  "key20": "3PsokBujRJ8KkrixmCHj6PTWLWdLK5xdXUJc8ksqBiYPKWGCdRqWQZMKYJxSdMRECLxeXQfWEnN8RAZKQtM4PcRP",
  "key21": "2J9DgXn9YdDVWd7ofZmaj2bDw3Lu1qeHC1X2kBzYdBuedahvNCCvw6upxp9dwrhFqP4wgkvBD7V1fU3CaSDffzQH",
  "key22": "2kiCqKZiS9Tfj4bfU5jYQFkw4i4ZwdF6TcB8Zby88NGgrFygAnWB6764DRsmB2N4b25sWZPREFDGrLyrWfuPpFB7",
  "key23": "3FFQa2rdTKvjCSbhTaqhrm4sxSFTvhiVdaM2m1z4Xq4ZBTQRaB6CgtexX1VFXuieqiSNYpoh2UgipTeBnmCPfsis",
  "key24": "3j8ckaUjq1Uq97fU2hBgxiAoaPHhqxn9fDdFCsvrv7smtNLeVcS8vms8kVcDJxB8WGibainj2dsgkHSFfL6UDxbX",
  "key25": "5H5RF2ZgZXjhWSxtR8qq67GFfH358YuSCL41Yy2vyBZzFe9jTjRJpkZt5fFUALEWBYaMdjouZLE3jg4nmbegQJg3",
  "key26": "m1yUDidV3M6NitBKtQcwV3cqmqMdP1XRVhsLDiiS8ZumxdCe5h45zDQnPaQXhTL8Gmebcm1viN3313HV4ihWVkf",
  "key27": "3wxamnD8epKv25J3XP85K4efRAATBo7r9xBSVQD9uQ65w5d8HXYz4HaoFXsXxiGEJnQZhscb5y9nGQx3kGHsZL1C",
  "key28": "5Gkjo9RhQq9waUUBM4kamnNpsiF342XgU5fJo7QsUFdqYis3LpLJBeC5yozkZNApxQdMfbTznwijGNbA4zoLcH9m",
  "key29": "36UYBZDFHvgbDpRUUpwJLKqD5z4EcUssDyiwewn5F4mgqhj5pqCvoRSrtZBvVf5aTULhE2wsFucHzhdkcUpsGyqk",
  "key30": "R4XT7Z1rZJuwi3pXmdJSxM2rAcckAAKuKPTkGT4CT6PFirJQXda1VSXE3aJkVVTfDLUEi8Yrjxc1RkLsWdxSiuz",
  "key31": "64RwyUpXdKipWno5MpWQ8WDM49tPShW5qqjBBamk1esgWpJqjhB659r1GxwBniFsRa8JQT59qGf2XprEEssGicj9",
  "key32": "26WhTS91zMjHrLdGHAH6FfyRdx5QqvM7cModj4Ax2mDYuQ9ZgcqoTbejEQknH1e7xtCA7FfBtz851oVQ2jr7znxn",
  "key33": "uzKA3hTt6XTJnB2EdRNKMwRT3JoUwA9ENTtYMcznVXpDTSkkzSzWzTvfH6mDSNqaZ49BK6ELwDAuEpN66xJZy5C",
  "key34": "4SmLC19Xs4Ub6o8F37VDTFmBAbMMn9KwtTrtGUEu45yBcHQQ3m2xGpaBpFZkEwMv9pkYv2ssSvC3qshYCP7LC2xm",
  "key35": "63NhrDVxpdHFbGs5GsLRSWowQ7uiNQtDfZGhMKtLuF4Wj1NFMcMtch4Nsy8TwcAQrtXUq21H31yC2YexFjmjGXUs",
  "key36": "4U6xL1CSgHzvo8JAvsq5rKRNTJhXQPT1deVrXpe5KpoixDkMLFekMWAfMF9rqUGtj22hayHERkgYEN5QnKeMgqp2",
  "key37": "qZPLxaSBwZtnfx7dZ5ACmLgXKqUScfpe5CdWrqSPUWUk16KYTCGbdW6g9meLuEh39Q1saWoGcV6VoQHxrCFyz7w",
  "key38": "3rJePmWvPwDwDeSF4ZUVnQfc4gv7j7XrTtsAv74KHaQmezW1117QfnC5x9Fb1YXLnZLhcR84U3NqPByGsU13MKWM",
  "key39": "5j3xEfUUVgJssmZcCzgW3xf6Gh5Yfm7ELATVUvGTbx7Jbx4D56rdoiRogTo5rrvh1zQquMPwaCMGChzRhY68qXP6",
  "key40": "GvsUDnuH7VGU1xikHxbmYkoHgy6t3T3q6YoxQ89mbwA4KQZeFsvW1K7FShTbwgD4oE6cuCrEpJvEUrh5yG41evP",
  "key41": "53F6X1PSwDpjEhtd72VahFux8vD8zTcdUr923Ffd7ubgBtCsjqWLQ2hWy4zbe17RiYmfDnnr9hKNiJH6nYu1UUn7",
  "key42": "5TrGGqH65HzMeHXvi6sUPrxQxgkqtfhdT8zA6YptFGvW7Jv92EBxrAYjjXazUGxFoNVr4eQtPQZtcEgPLMshvZrf",
  "key43": "NTntA3p5v98tepK6dTzR8CK63P4QnUaAP3hrnfB5m36QdHLqe5cJae8r1zgjnsdcWjeYsjDajc8ECGWwr58Lm5b"
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
