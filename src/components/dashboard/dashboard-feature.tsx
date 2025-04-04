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
    "2jXxpLxS9vMLDru8R32bVR3oq6uEvhkY5Dmfa22txoYa3pN7MsBbDGn2rwghoPEirzbceNP2FcekXSf5sUoV5ED8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wWi1j3J9bEsfuox3usZouiAGGLvm3uqxsqiCV9nZxj35yH9hS31GYD2MKxEUNTHvF5VR8mHFF8Jrncvy1XJ2q4K",
  "key1": "211FhhfPqboeBHrWotFmPiPYju8jp5ZGfpRZhFe8136hVokgUehCC1Ep1YhnoWsjMp88DHMdZNDTokwEEV9oEZEX",
  "key2": "2p6vbQtpTCTEb1V3dTqJ94AaQRCNffD5S2YVQ3ABvEz3etXEPmNd3xRLSSR7K69RxoVR8LqnXm4NKiw8pSz1CnrA",
  "key3": "4ay3xCoLZKVZHXGgEsJvZcWrPBXKCP3oYrYywdeY2ZEEkF9ktQi48anhJ8GGczWZEKkhm7pp8KGogNFuFgdcsixG",
  "key4": "2Fcs9mXrTWKLedBWCs6nAbUnYCd1opRAXfbtHJjGqhYEGFVQCaRzV7rBuXcVrZ4QgJ8AtBYvxbKY66qeeYBzY3aW",
  "key5": "3ouRsZB2vawAzrV5vQ9ifEa2rPJak9Y7FtH3XuFFdnujzzpiTzkaaUBNTTnK9c1cbbP3bBEAbvSEHCp15oYFpEjj",
  "key6": "kGcp1cBZs7EQxSeVq6jBjUbFgvLSEbRraNRvJoNR3Hu4qbsAm4zDqQSNeRrVM2GudNbNFVxKTEB7MRDfDs1CjAg",
  "key7": "5HeJUfquAb6pgfcpZ61n8dxWvRdGYTcZ6McuALpmDa1GR1A7bpG22BA3m234HsuhxZjkeXrxXhidEjDuFRf85Jkt",
  "key8": "YzxokD4vcSEAZfZhVCHCFfFCLU34foCVuEmQrGKgnC52iaYLysGdoW7iDqLGTbh3qjQk8jLqSzVLsaxVV5sMzeR",
  "key9": "3FvNFKFQqRcwv1BvnmTejAatsvJk6ZF5Boe68RTXAvJoh6Y46T3gxfDkh96LmmPv1tERDFztfL1MYHR1fEK9L3wf",
  "key10": "3efDU4PZ3Xe6UuNRKBD4ugWUjZrsiixsZHHcGYMJo71FjRZASpXkuukGCuEWT3m7ieQCadLDdog7grb6iU4SKfAz",
  "key11": "35bnWL2GXakUq4N8mFHuWrk5qU8E8fSExtXuToL2GJMMV2ijuoTUEYfHjsYFcc11x3VrqKM5PBqztpbLiasPE96d",
  "key12": "21cBTkH4eRpPw8m4vi5BmenpaL3zyyX9QevM7gVWbwaaMA7WFEto5vyE5LqKvGouGTQxH5nKqkn6dGDM134pL9f9",
  "key13": "2pBE7oyvTZckZarHz7SNSkydN3YrXbpGjfSsWi5sHxCkgJNzLGHLEGWvr8uZ3oUvbMekaDif6Dmxg5BhckGV2xBJ",
  "key14": "4WBp1QqXn7jex46Mom3u3AL741goxLtnYQpSnmPEVMD9tdUSPMsGeEp7vJJsyKZhWjKAUnJiNq7GcboBtn2A86FK",
  "key15": "2wh9y6D575QZhPnrNkYzm3jbnk5S294HdLqGD1UHDEjShRrtHkQ5xj3DEgsQDtCnU82fuMueVSXMfJ4dXMu59dEF",
  "key16": "64agcLjkDrh1a27JeXtRRQ2LDH72cpuqhMAeyHBvty7M936G5PjR8jnSGCvGcbJFoCHpREHRfWpDtiXvFd1AMDXh",
  "key17": "5f9sNnuehPpV9tEaN2fNTCeHwPHQJujcTQBS6SPyCVjunQBTvynsikz3mjAMVwtws3sV4z7wtuxa3f7F9BSR3X6v",
  "key18": "2mDT8wfufLS2MxRFXFgSmDKKuffhtw6gnpm3ZwAXCMY3yeAk5XcJmE66vDP8VEmKpEPwYM5Y7jn7BPKR3hXZHUYa",
  "key19": "2e3yme4LgKmG2yb36iKrcwkjnkeR3Ue8rh1rfd8t4rb2DeM4c9cqT3dcfhnAHvHnKAUiELtNc7aKPJ3aRhV5a7AK",
  "key20": "53gzaxJMAQrnLcRwdWaEzxBsMcyaHvN5wTr7KbMtn1EqnGk7Lwjevt356xoi1adaWDai1mex46D6cypXYgJVd5qj",
  "key21": "4haxaC6iw3pK3W7WbYAdfMj33KyUmXWvubRfuJPr6KY55sbx4XJg1NG2H17oucUWJoSoesxPwTVczVWuYEK2MmtZ",
  "key22": "WphoExeQTYwVhFiHCs4Psg88bMiNpxYrX4qKrCWLHQKMt5pSyJAgKydBPNhykm4u1RBFCsq3dFvXZiHGfrAtQgy",
  "key23": "2tQ4s6hLVa4hDLM5ScVvuAtzk21nDHethFhCfMnp8GfxrJrWRKjvXmrxNTyHHHJ6y7TWiWMthkzjzd74au1UzCeW",
  "key24": "3h3ZYi9fkcrwRp1JRTVPpoZMqVXYtG3Cv23DALcAUpxDt7dBRhtASo3rm1EPjrSdAh9iUPbEbznaq7XvNXQgyMLn",
  "key25": "5jkTYJs8gRTKuhrm5qBtecHFwgF4xEGSHDdXH6GJTYA8jfFBS8v43nVKsePMkD8atr5bFaAGcmWEm7a7osB97ziQ",
  "key26": "5jDBjkYx9c5xT9ZC3ZtvtzzyZ76VeM5h7zUT4KULppBqdGaWcLtTzBLmspSFrzaJi9QNd8R755i3u3yctPYr3GEa",
  "key27": "B5PUDX8ZqPc24MwPN5R9FMGP8KQ6fsQSXaQhe14EysDKXExoXXpgehnST5Xxa6Fw6uvtybmvCdWmUXhEaYnkzk4",
  "key28": "2KGfpdJed1cTmFKRGYmLKCsEi6LNxzXwEM6v6E3AtJTq9t5GxmKzJgGXGa1zv4ijhySwWeb3XQfjYquTwq9ry3YL",
  "key29": "8nbCVininQha9Q63GmXh4d69Wv1hT3WKZE5NxLJwTUQntPCdhxG49wK29hgpTxs9xQ4zfVXt8oG6avdLFfGgtAW",
  "key30": "4E84B6A291GbV9DPoJvoEszh1whgmu7FAHLS1vxqdjo4QLEPbnqA6DKWyogqci73gH79uzD6N92jfUMEk3Q3vv8k",
  "key31": "5ccdVoVtL52MfoF8UGzNvyVDFhKCZYWiTS2ZcbmM4vC3FKuEENFBJ2E1365BXoKgKUhi4N7gx5Er3QvZmAzu8FY3",
  "key32": "3ebCw9frWYBsXnaNQEK13XQ7cP565uAVcttP5jBWL6ApsXzwuXdDMQ8WtCMAbzSHVKYKA56BwaDvZefuPXk5HFqw",
  "key33": "4HY3CpgH3nismsTkKAUNDyyPLaiCr8UkSEwrFhQ3emDAFTbC6ZKUxa1XMs7kZK1A1oEWxyTkLL517yApJnQdbimv",
  "key34": "5c95CRQ3CJ6HKb43FiLRLnXN4uRLjVT46f3jXVGRnzkb8qNip21K5otvW7t8a356VYT25t4P9q9Ec5PuYRnyuJLp",
  "key35": "4k8g9HMVrzJDwYmjXc8zV3rbtE3buF9Q2HL99bDxiQ52gTwE7CnHo9LDygNP6WZ4pKVk18PqZjtEa1KviPBwfj9G",
  "key36": "ehy9n6cWT8oLpdwCM9L7m9zxobhFJsLKE48yPQRakGQkfKTZ5i51Rj28mKRz6TthaQtskyiz8Xhs3b2m6D29tFN",
  "key37": "6RKwBut9H2UsCpqGxyRcgG88vYnDcXmjpQEKXo3hVsZvorZqgfVzHwSuK1LJjvzyCR4DdFmFzfX2NkmoX37phEu",
  "key38": "Dq1wLTycB6HKpbHDcCvWRyXefMBgszZGafi8B2KDAx9SbWLfFh5yAMNL3vAaTFkkMdJJGgFeNZrADQLJUoR9pL1",
  "key39": "pGt7TKfaUbYoRW84fMhKRizCaErdjEHKZGd7VtYtpmrJ9HX4MyWfT6zDqZTQBuFP1V6Yzt9joaRiRg3NJwa4Nr2",
  "key40": "4Wxho65EgBBjSfzTEZazCZicXsspnMbM6cb8x8PU9ZAmnHCcPLFLLMb9jxhXm3BWzw6vq8Z5fH9cjw7aP5nZNPfi",
  "key41": "5qckTFdBbGZ2LVBJuM7uukaSknBncgfWY5wqSQiPYGH23EE5QR7V1bEXGo1ZBcWVraiG5WH9aZTTmCRqcj3DUdrs"
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
