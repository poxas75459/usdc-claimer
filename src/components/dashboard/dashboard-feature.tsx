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
    "2yUtmHao7bSvo5U6MZnckAN4SeNQwJifYMsbt1FMWEzs8ELZUq5uY1hFNdqhHoa2vhfv59yZjmiiMsXLADNHSdt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51XNMff9FuBFDsw2BfGQdfm6aK6QzGtkbCeRA8n6admjFZcnqCMZNdfPqad6q2oNdZ5ekvVewTjdDBf6XQ1sQGL6",
  "key1": "vyMAbJjscDDk4PhX57QQwpsmicQa3GUEMiuL6z9rwck3oM1HueSGGqDZttUEVwV4TJwzLcauYcqK4EEar9dUAJ6",
  "key2": "7gCXFxw2RdMTSAZWTgaUDgU6Wu19yhuHpfGvhVv3FU7CGdKU3bvvE1jzz9iAXxKMryRUj5jdWFgrnpfBj4AJV2F",
  "key3": "5jeiAq6UA3ed4GY8ufCCq5D1NaHhpSf9zeA1jU61DyJehkSNZ6QkK8mjHbFHXALNwJHV9D6U17XgXCmAa95Af2Ye",
  "key4": "676vPaKgey8gkT7CDidX1XT8ZzaGvcodf5FZL6yp2A1mfRqwENHe1u1Y2unFdrUbTWUKi3pHJ7qwF75RtwQ6n4Sm",
  "key5": "2RSp67VZuJaJhkCpGWirrqui1tBFzN7fJ1MrTb7kziq1hYdKBSz1R9nV4ZChvi2vvWrGReuXVpv17KtTZ8o7y5r5",
  "key6": "63gd5WKgyAvk9tpbZhoCY1g7bDusxrNM2t4j8g15LQAgH7fKJvWUaHKoTaTdRk7ToryE7RV6xybaK3iZskQyJbYJ",
  "key7": "4c23NSJcDMFCDomnrxq4HTDqCCkS36U4nLJya62jY9tthVKvX7QhxcVwuErvvAZgwhSXyQphWwSQCU1zdeQCF5HS",
  "key8": "4QwwFw58wZsXzFZ2VbpJTuL1kjKf1jcFzt9CYdGe7Lk2wLVMGvyt1MACzqtxGpFBxGa1dwKrRTNhkfGTBFCGUkkx",
  "key9": "5kwPtKsgXwsBHHg7habTCvcJVnnNRcv4kQwGrukMrJateSYU4ppogDaB82SfG7p1mxSPHYEQDxsSAgF9FzQSeuE7",
  "key10": "5UqtPhvTDnkyTaZJppjk6aEQ1xtpY9aLxPMGqRWJ97UrPHmdJogtJtvPchWr2Q5dS6kKUw32skH3yknKVXWYf2Rf",
  "key11": "48tAvExEGPEpZkGuERf8U7dduNqLPN9dYGWeQ4NLXftsqo7buMS5dYZa4V4ixQUt4QkKwwqn1xH3G6yC75iHuva5",
  "key12": "PoL5N2msq5ao2sWMps777dzQtNWZ6YpbtpqAtmDDZFuFKSA2JsxUVBMAK8c5jL25Traqo7Af6Kryycw3pLRW2Uo",
  "key13": "4TR4xtJ3P8M8kVebiegJMv7WXXzVfHf7JTcZGzSHoNpGiWZdWUAqVcaZdbbmn9sd5MoCNmHeTyuARYtgVtXShh3R",
  "key14": "5h2MkJPxgG1TtviMJAgDKmRQPTLV89DohgG5v65vP22euVCeft9jjgXvFAuHEFdnbBrF7BJmXbadcBtvvnswcrPU",
  "key15": "27C7DtZwm2ocZTqeedf2WLejz2CEZTSbVV2XYwipwkMurPbbUm8CL5b3V1aMTpFCnGy9ZHA9tPwY1DR4M5N4wh3z",
  "key16": "3mGE7BZv2ZySm1oT76YqFX8aV3baWNEdmPtLbM6fLBavurBC8fKGib79AKpvKc3yFHSozTDXrLwu3AhsSzuUvqMS",
  "key17": "3JhyLjgf4RNFsztxHvTyy1pDqLoXXh9pbuHx7k4qY7uWGg2ZwDJmNX1hWAiVVAhKTaSKxzBaRQ5pNHs7kxJx5MyD",
  "key18": "3TG5q9uRvumAHuUeeweHXEHu9DWwhfHbjxUkCcGQTssSQAg6VYWhYvTndjpgJpB9cyQj3pxAsSKo3qTkRZgkCax6",
  "key19": "34wLEjnwB9WTXmA4h1FhMak3YgKgshX6MYwE1fQGoQz31AKPFYeki4XCCZuY9cSzV62EvjogM1N9NGds8szQ5QQy",
  "key20": "4uw8CALpdEeeHJEhbxLDLgCnskC58qJJtDMdjWYo9hwqSEjZx5gnU5ubn6qQAjDkxqaKkyXKn4ikZLPNemnCgvVB",
  "key21": "2ZKvgmhgYis6rwoDeZYs6jyEWkQMF9o1aRTSPpSpeFcrwHPQ67PDERV4JRutMzzvzQLPdm6qMPfhe3qgiVub2Dso",
  "key22": "46vpfhdy9SMNpv33uALngqAVTAfWuCCZ7mxfpSE3suLwPucU9qz157QzfWprXEXKeB6AfBGx1Za6J3JPXVgXg3iL",
  "key23": "48sF1VxbHVMCk8bfiUb3yFZEYAWT56cC5BDYTcizk4tR5BBd6uJXaavREKQwBVhMPsS8S2coCHitBaUrouw6j1hf",
  "key24": "5es66kL28beU9qS31eRhyceyf9ZJaH6QzahgHKiCCFHzWgJtMfYF4KX8S3P7gNeHVynfG8mhtnNmawqGuLtgZcds",
  "key25": "5faJYMzNpR4V4L1WZLaGm1oECiZDJMwq4w4VEv5LBKemgRwYp19GdemNDjYiZ1SLFtmKJJEXskiRQwa67uMmU1jJ",
  "key26": "3DjiQv1JjCdDYPaxuL9VhxqECLCQ2aM6Ubt9GkeoyqRFQzyiJRJbB9bbCQraoyVem27yJ2kZx6ht15AKtLv1Ls5K",
  "key27": "5FL22DHZxvtB8V732obeVzbMwPjbHhfAz7bq8PxZBGSLERpShG8hv3NNybsFAQdtchNxwHgvwtTBRjssiYQEuUnR",
  "key28": "nn3VnfJGo4iu6mDn8zmgn4bQZ7juMr8pAGwnAhDbriHAAm6Y6EtD2P9Dw1hUzhGP7GhcXfQgKh8NBkZGimL5Fc6",
  "key29": "4QA2qVnNjSgJGFhfVLa4rgBpVbWt53rhdZK9KgmXRaD5aa5zQQwnvHi2iCTQU4tjGLvYkkNJqnzKspTH2cdW67cz",
  "key30": "3fcsuz1KtXhQbheWF968pU1LYE6ja2W2KYJAgJHhDdKZBSVvh8s5Gb8XR58JH9jTkCVw4sKbSymAbTzNeTQJ9Qtu",
  "key31": "2meAsU5WfL9s7JEQuFHZidq6drVKqUkeDwVKrVoBsis25ZUbpxQS7opWDavExzMTkm3Aqqct3ppRRZJKLCkiVfuk",
  "key32": "2NToxC1RJZ4cwfN2J6MpbfvP2HpShaK3vQMobGwkachzcMJLK1XUksrpyMgCH3gwft6fzAonyfybfyFWHgHCZWQk"
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
