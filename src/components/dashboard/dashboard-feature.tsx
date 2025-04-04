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
    "2oTadkc6bdJX6JxJjGxoCB4nGPP5jofCcVtCNM1ATY2jQoYWUy5EbCgspn3kPZov1fN3pxxvZDDN3StGNPV59fXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eX1t8cNnxHwZvCpcsFQvE9rXSe26XMqyCJoMuumcCJGSDGJ89A6K2PkSpDvzr2j5xuD3XEa6bUoDkHN2Z58ZLAj",
  "key1": "2S8cLzQfg9uk95F3aqUYoebpfXKW1QpjuCkKTqchh6NqrUuZh9Rk4Ztp5aQNRD8AYEmgYPVqPnaXpAJg4PNGb7gT",
  "key2": "pvmM12aEg8Mqo8YGhaSq9qyFEhcxhiHPRxgmZhsPccYdtMJ3N2koa25MZV5jb5YAJahsBLGF6xdEiMgBa3KyiQb",
  "key3": "3ojakevQroHgPECuYsrbcBQucxboxn6tce6Lta7AhnoZCkddZ5qMpMrBin6McCg8KP3zJs77MnafaAir5E8ysJBL",
  "key4": "3PgJUpf9hU2qxSjT2GHyxmSr3T7BSCafYYDas7CJ6YpyRWDJsrWAq19Ld92X1YA3zGBq23ScN78KUtKta35AZ76Q",
  "key5": "4NMKBYcQeVMFHw48ttRgvnxuwUp2pJ9AShi3VVAs7jASsrZhbJLYtEe3HA8LxUkrSzcuKJNPTAVxes9d9b7vGFQ7",
  "key6": "5wwUs71B2u7dzgighf5MZQoQwUMCeYo599tDrQUa471SvAQM4ouNWpG4A2WNpp8XTsNKwLUhCr4AYh27TwxFfeLE",
  "key7": "4hg8krfpY5RHeVmVMJKrK2miW1kNVnHwM6hVbL1GFdMCyYe2ziDm9qa5DtAQZNpMag9gGpgwYWnBAgAcCB6Kh4Td",
  "key8": "3UP6oDRYTpEhmvpAvCR1fK7qGWd3qFLo9CT2CqRPe6LKyfQxHo9CbLKe9NNimecyXwUuqFMy11BAf7S7aNfYRUq7",
  "key9": "4SPSed7MXzjVwW49AxYZC2Ht1g3Py25ZUHu1wsbn7FFQ3kcWJhBGqESX1ii3mncAiKjTgysVhLEHrbunD995tCy3",
  "key10": "51QMFePSTQ98DgLhVztRAd77AwUQ5uP2EjujCpa9dPnLRRm5vD3LqaSUACsKK4BjRzjKq5cuNHQiwcnTXvoRgUjf",
  "key11": "5PJnKrYZbEZsZKB9YhdoiZThDPDQdV8EWM4MkncjtDtUwMb4i5GVuVS2eUe1D5NpdkoRd2d8RCLU1GipqR2Fn2ph",
  "key12": "4c5axjiMwCwymEDwxWTk1ZnBWFdhv6WHXSZHCssZWUxB91G4WMC5y43uYnq2JqknwGzbWiLcpZduw9z6oewRLFyy",
  "key13": "2qE3TbgXpTVjfju1c6iD7qgqkyLbQGLPeazyMXaHHif6adgjBWM4Bq4CWZYBiMwh32LAqTiGB7odbgKFkLEahgqt",
  "key14": "3zz1XJkdBZBp6cd7stjdpHC27QnHuCbZDxzwArCJyPStU5vAcFbreaHcNRXYyJBnLqnziLsHa9PDNcbpdM2j9nv8",
  "key15": "2f3rCHaAcVsYehcXrCsGiedXmnRKBHksreJu24TZ7gxUTUmHLCupVjdFQkRLZGacqWpJWvJKi1oh7g3SQabH1nzS",
  "key16": "5xxygtiCDnzpX1z6NVaxuwPzKprFqZHRYyk4kEUnZoMmSCnYRQgcHxjcH3U1YKZjdHbu7ESY3WXhUFUaSz8gRkyj",
  "key17": "3Q4XNsQoxtCJ8VrQLWc9w4g74nfWzXKwKR2ZYvhtZsaFMjbErKUyAW2xh5q7UrweqvRFF4bYWVTq89cAVBubgT83",
  "key18": "2E6UibJUh9DLMNFdhECpib5S1D31dAfGytxhsbWg6q3KGqGcdWQduB9gFkebSWUDE7iwn2c8XW3Qs4cTozAkxeLs",
  "key19": "5iEd6FUcPdd68tkaP6rMJGAP7KULPzmztT8CfqNt8f1gr4FJcxvrSLXuFFCCLdMxz3SkCqmryFF9wVVf3oC2gY7d",
  "key20": "S88oHK4rW4QRKSfPLR8tTdV8kviKXw7FczFuMj7KEbqA1bog4kxMbUJWxpLsgjnQGZh87PLfrzW2vErTmWeDf1N",
  "key21": "2a4JhB2bmhHKfVWXBwaDnDU7VwxRNeaRTKdRybmcVPc8NP33oXRhycrj5fnaFpTmKAsG8aWQ7bMaRsGBtuf3Zc85",
  "key22": "3AJurRC8ocwnbLRg3ehCvG23df8B8g73yQP4MbHoKKMNx27tvdjWHMjoHWFgQK2t3M2yKrVDTzp6iFMfSwaGsyry",
  "key23": "4uCf2YkY7BtNaqSXTaBnytkoiGyu2V38Yv1fxfk8K8Ap5YGFeNBrduKpwN7kRFssVgG7CAi1u4qMwAmr6CXZiHtJ",
  "key24": "5B1T36pgm1rZofyY9KWLhgrqKN6FPPuCD5p1A6rQAgxzkd6yPvvDwZWUfURhG6HhVBWukNNgXodzCffFhzUCVSyZ",
  "key25": "51ALUyHf2WcgSXED2zAyFotyvTHoXYztLRQkSaiH4WT4dpTpMjyAYXiLSsZeYKYENH9RedohTmNaA2piD5yvNMeM",
  "key26": "3z75QJPjBfn3fNdCTj5RvWVjhg7mREogszKucakwMLs1kQoDTeJ7s3gbY8kVcyfhe9CPy1rhBZvwn5bxuirfcDgj",
  "key27": "3TMixLZkaQoknDGCJfohn8eqB9YuG4qoHAKGjVfGreFn9A522gWL1JXkeCL4fH9RhyMGm7ReYNToo2CZ2SabytuQ",
  "key28": "5nPGNfjj2MpA8bJHFfLq3WbTe7ynHtruu4BZiHGPvy7ZaSPPNaGFNrdvvDyxBHqMEmDaDsbsHVqaEKgDKzChbvgx",
  "key29": "5MEzk2zUCfNuzxVSomR3rfCLJ2cBTt8F8hWn1LpdsZfEXeEAvyB42M8hFvk76qM26WKAootfDkv7MqYWSMzMumei",
  "key30": "2ttqBPfQPbQwKmt5euAQjjpQNpQAFFSKYgn8679R2dRBQ9tpxcWiayfDJQsQa3pm83yhhfVrpEffvarTY35YLwtt",
  "key31": "4pZVz97zoXEkUYSeBzmTsGfkjdmyaJtMTCkcFJUqzSyXHtXvfZjiCWpBVHhZuajtnNqiL1PVzLiVW4AaW253QETY",
  "key32": "QKcHhDXxLCztrF8Tb4rjoeTgNc8wvbwgce7aHe2Kf1SXx9EU5q86r5KEz87adF6xmEvEvrCeaqekVWnczMEVcGf",
  "key33": "mnJYSbZmcdVhgZHqSR1ufXanLkBL8UKjpgazuB6bunfW4UnyjPQG4wUexGTP9veVgLZPWEjEYMDJQYkcFGx6xan",
  "key34": "5Lqg3vX19Mmd5NgNvEgpnqhHNeEEWroskma81KnSts3UpGYjmjhrEHY19daDnpyGAoNtrRueugJZjRkuxttUbmeN",
  "key35": "HAwy9DQJwPaynckxGi4Xoam7jAXXTMMB6fRGjZ4ZKLEJarAHCSMumU43TNdEraSt4XiB9UFyAR6chJsoKnyPEbj",
  "key36": "3SdsZx3CYzrfyZ6dbxYm918uLQ9TJiD6aCmfQDMNAiKJtnwqQjU7YLAJoF5umJMP9GrXLckxb79soPvzBpw5q6zF",
  "key37": "4oodAVtJsJCn4CYYeZmkb7tdMWJ8CKWYxcCe4aWqEB1oHFdibZJpyX4J5T5SZTPdypdYcr2AdMkRCvYbktWbVrYE",
  "key38": "2YbymyjJ8Rygzz5n5R4LdHHpXBcDXsSjT1gpcQUVqogHHqeNFtikHtGs82cvLfZFeTE5ym3TdGgEY6dKUedAeW6e",
  "key39": "4B1FhjdwSsmgeFSn8D1fkUhQeHqg8uDfqfoT2mbZcKoduk8VFrtoN5rg9mSrowPXBPH6i16StbaRdMXDw2VfgxGp",
  "key40": "2vQRZbPTWT1n5jQozcsAUBtAxRmU4eqLjSMnfyqE5EJCT9hCY77EYibtnLK8jEDagj6pNKdMfd1D8DKE4spzU8da",
  "key41": "4psThmj83kVZMgkBxX62hczhtubjZk4HCw4aB3yPeXqymNUMasoBxykUAaSW1Pr2XZXpf3y1SfWuCQQ97tUJdQyj"
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
