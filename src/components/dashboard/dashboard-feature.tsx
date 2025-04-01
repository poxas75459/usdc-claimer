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
    "5peYqgU8H5YPicwoCaTiJpbFD2FVYGU7szZi8us4rSqEmWZitTjyZtxYkrXJJchoJ4KqMR7HjvzfptheFiQE5i7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qkWTGWca4FZkdsMc6ux4KCTS8zdoD6U8SNykoHw2PGGfNsm6Zryv3vsyGWqdwqNi9ifaUfRYJsX8b63BTbtksR8",
  "key1": "2KZyaXgMgF1JGUZtYPweZDd8ZEgzSVcQwfdUw6yaDni8cQWKU5cz6xdff6NZcyVpTzq3wUfZWWiGxMFJ8Pt2H1i5",
  "key2": "RX2HXGJuRshfawYdSyZuAXFYazT8JobFKenxrVmnGhBLMmRMHqs54G1oDTic5Go8UNFHBiDdtJC322NCEW5igdh",
  "key3": "1nJtVZwHiWzauEjkPKTNGZyFXD23VUTnZn5tRo4LgWDknK5JCEaetVBWKQiWmehgZFCc2q96JBxMxMkkpjcTBeU",
  "key4": "4MNJ7EwbGT3XSst9t4qMfDR2dNqvuCmK8wKbFbdFjJxqGL4SCRiMXBNYdvXQXMpxWgcP2xLWh27BBR7RzMZt4k3c",
  "key5": "bK2WqgNUJYZRZRpPQN2kfd5EvaP7N5jfUTtcrTnL8KEMj81HTxStPeGEy78MXjMN87JUshtJuiSqd7uQYByA9zU",
  "key6": "52cH45HSgwsYvYmaLFELjKayXQzLDAg4RLWwLzCXtPkeYvXtbpvomuZGVZtYhoppwMfKZ3GRuBrV1Ad8t5YoHRaZ",
  "key7": "5aoNDAkzx3QY7ioeBae1nn4hM3eA7kpEdUc2RQDmjo1mXZajZKP7bNcE1c5HWjL7DnrProAK8wqCtqptkqkCeEok",
  "key8": "5MWXCfk4gGuzUxdPzZbTqB4JaA7dHtAgWSixnqVgJ6RPVkjp6oyXFAWaW6s1GVo6D3Xhh2zNy2TnBPMM8ErYmLup",
  "key9": "5SyVKweEZB2vUV4MGWyVmDhhf3hxhBAMCLVCiTmmEuE2AU3bjzxobFH79V6vj9pWPE1j96JZ73TZKfGstWLbkNfV",
  "key10": "38R5Eu2niUPYezUnoNTuDDsvaYASA9yM3d6zhSqekrzUy57vekYKKYtpenB1oUd698Z9qnXuZDeqbVYzMRYobfCR",
  "key11": "5Wjc1kBq2qGFr3t6Ba3wfm8ecRAYkTbeV4Pye8Afpxa9GAbUZBqw4UiRYdFSVfkQjw696hajvGELKBp8swuqKJpJ",
  "key12": "4sgEt2KsR2vVvvLTQWnSEqVt7zi7uYPebVVyvdu565EejQrMPmgzxsdwHzUF5Yya9daatTKhNEwBMFR3rAjRCpci",
  "key13": "31ugDKQ4MdstmhvMHqatrPq4Eyiyxy9XgEXcB1XRu4nHS79WK8Rbm8dnsPmMSZH4yqLXivznnqRDXqacErQWAH7M",
  "key14": "mzwbvWmzRh5KDFoQr5Ah5Ri7giFy3sNhRS94DMaF9sVq7yKyaJ5uYBbSFm4Ccs5cykHsxWugKTdiSvwPge1pQAG",
  "key15": "5fLNrpnQ3SH98f6AM5718zzTrbozRqzcNTkzXfZw4A2Qo4cTjFKoyszmnfMMCd9zv3E8Ceem2xix6VbDLJZkgdzo",
  "key16": "2qSjLghiviMtKFTR5mxsU4eYXQq9oUw1X83Uiqwk2jG6RojnBJNZbwWWJz8Bs9S3Lm33qPkGPNbCxX9HbyDVgikJ",
  "key17": "4YDyhLy8d2mC9MJuqRVhtiBhSJ6Wfm2dhEpif4b4NarKXGpo4jqdXi5W8ophLtgToSkrYKnee8snv4ykLUDUHEro",
  "key18": "35737T1ArQbA4ui6qPk9oBmCWuiD39xAioqQ2uk3rx6tHDw46tAf1FbZJ6wK4gb24LBNExNsrBecvhHKmQ12LtBu",
  "key19": "45B4nyq6WYGcFYTbJp2432FFPasQMBnxQR8ZZRrAV8mjoToUjGaJHChHQCvcJzhMsyomPBk9rgS1soKMQGQdefZf",
  "key20": "5QiTuoGbgi5nKzTfq7Tj3dDhtwrMePKCSpoL92CC5kkzLL8bbjMQoiU2JSCpbpZjcnvS1SQHg5GKKhQkaXzV1qfd",
  "key21": "4Bz6iRXxGQYWLWrn57Z2M13MvCJEdtwptAUKRwf7dnstk4NbLwYxXgy4qFUnLZJKA64Keiym1xtszENkDi2cB8fT",
  "key22": "3RDWNEVcPxnee38rXcR2h9W5A8V617zGaZDtTpLtsn5gmNruFqn1M41jkRL9bb6GviQWiPei9TgPvGBbh1toMYe7",
  "key23": "55KjJdZ8HqC3FnfL78E6R57kLytvhse41sRToUoiC8tPvcjRRSXTopaCW1ZqWmebMjEf573hRXE6knZhAYidrUVG",
  "key24": "4J43faeUwYBWWHWFH2EMWNnD63XDqzBgaoGTj3i5nTdB4PeTms5JVWeD6qPR8HaeMbtArQi7sUT5Vvw2XcCmCeDU",
  "key25": "4SJJJ53KGQUq3Fi4i9fuCJTTX8B4GHJJrLZ6fuxYb4rJFXBSEwDvYNM9jWWFZxMDAXYJ37YQ9yVBYHDUMNXhCLxA",
  "key26": "gjVZzZkfeFSGrncQbBanCTTc2bb69xzM832CbJQsNBuM77evUSWaVypf5eiAnna4PwXqEqDifQAnJxRxUTnMNGQ",
  "key27": "4hTqpQhjmCHR5GEBBBtNvHW8FjLo4MnC7jN7veKdM4cBaGvHNCL3ztR7V66nu1xw2vVLaJxtRPMEgvbScqtUNsXL",
  "key28": "3pnzBk1DEJSpWEJXMTfk2TGNFABtc5EhSVuVxajuhEr8PKm3jaSqX71mDRYNDzWAM62YUEw7KvEPW1yVgHmWm95S",
  "key29": "5NzcSAnCcKcNVFqFAEnQPNTEacA3Uz4dXk9eT9TSuHhsnGhacVydDo4SeNbv9x6ijP2ReSLkBPutiD9Mbo7iJsQB",
  "key30": "2Q6TDGjHQLC7AfmTDmcG2ztUyYcNv4TU2GHsQqaUJ3H5u9qo7UCrbMBd2rpHzutW9GLFcceUgbHqPPJ2VJLJzrkX",
  "key31": "VTvm2LkhQsvpRDtW6khXjX3UArFjwDQM1oPr3bCqdUMwKybzTn8AfYMCuPz3Fv4WU7R2wvRWJQLUoZcPYRcwzDN",
  "key32": "3henYy13guDkJvWPp3VACkMXsrGU1utxuybCrSJe3ZoFcM3PBdnbyojzk96oGbnJriHm6PnEgshuRytCHSTLfdxL",
  "key33": "53sX64Bgs24oym1rh9dcM1pL2C7HsPa9RbnunokfMDnTyTkhMCtm2C8xjcyboMA81yN92MMVAphBHrk5xgdZcXyC",
  "key34": "rgiEuT6F71D2qYhfEcjh9LSnEg65yWXkbLrZrw7m74Yny7aU1n15yRDtSyiZzYVuGyqzPaLwvHEdcjWG2mptrAq",
  "key35": "4M9cu8whTqhyHRVpPLSbjNLXzFWTTY3DpeTXjiDd22NU3VVB8pxNLdteeYq5xLwM2bbCmAhMDEDEzC1ofJBEVw6m",
  "key36": "3tUvHCYeWMme2hAi8pWCzhysBwAbS8XWHCUqWudkd9iAjJjXLvgzrZT86ywHcRgGqCide4EaFPxdwvQCyZ3tMxHr",
  "key37": "3HpYMk6nhkYGQr6zuQaBLBcp7d87BSoPcGsa1fthViRbT2m1K1CpgebFAeFn82CKexpF84VvAvZfzQYiq3ocKmgN",
  "key38": "2sxmSwfTt1k8GYCeMvogM6dkHhrwvPetqc1tKXZvNQmtk6EnFM3pHem3Jb8BtvBTSXsZvEq7vzNXae7ckysJTpvQ",
  "key39": "TAFPW6DhyUYsP17Hyc8YmgSm9nYHYAkYEFNei66rytfKjPDuafigNP4p4w4rEsAfjvnNiz6QmTkn7DFApHTgJum",
  "key40": "3yNSov7TYQBG7Y4naE6EPBiNxarKBc2vTRqs6vSc5YLuS4CsajFqkyNEuGMns28SEmSq7b6FUBAmK4RUKWbkLD8a",
  "key41": "3wW4PFfFLSQYFbC95vURAV8AEUqi6zPdkq5ZkcAXLUhu45zV1Pfe2ZPzrrbeMGegQiJBAD4S6k14Tk2tnpGnUNk6",
  "key42": "5yEz4JvzZ6UW4Txb3WmQPf7ULwT9fwcBmGxUb5nvdfcjKuyWE91K5Ch6bGE8hFqc7dJK73uUtunhiqcjuw9oDfFM",
  "key43": "29moz1fH6j8QJ3r7SedxFYNwfzVrqcGsfAXHDjNXTwaUSyZM6CCtNdLas8K7FEXRbaEdhkU9gvbr1GmwXybnkQMi",
  "key44": "5t2WJvVz3zmm36W39WF1hTbtm6yXg8p7taquz9BjVzMnVHWg68t6qKZsEnpEBVS6wZxPsw4KbZSN5eyEGpubiDci",
  "key45": "3EX8d4jryGo4zCZNyHNuyZwtxveGUccusrX9ELyCNFqYibFb47UciDLCiSK4Cg1oho8sLuxyfori9iqWczz5iA4j"
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
