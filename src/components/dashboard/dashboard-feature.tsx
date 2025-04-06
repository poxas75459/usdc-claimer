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
    "4QpvghmVcVsJF9yiZMQW5aHz8bwfmqytaxRRiMbNZQwcQNAD81EvL3QTLdzZXdYoWDtD7kj4iMj55Qaf45f1WkWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46U2zu1X7bCqgfWXqxQcdVchY7ZbWZmnZmkALEvbtaervRJGPnPxouQbqNXqrV9Xnt1gTrzaGdUnNLfxmtLimb3Z",
  "key1": "4xGKxvJFrKB5otzFb2LcqEQD7WghJpEJUycdrsc7M6m82tJRMoUfQiUzcHoiZSWanZo7fQTEEhFXz8ERpR5K7Xz8",
  "key2": "2dMP5WrLFVheFg967Y5KtjxgJCdiDD4j6SEFK474ZEr4pXzJsxefizcAgiqq5jbQd6Xr9eMCFCfsfKwkXfumHkxK",
  "key3": "4PCf1XQKmpmsSmStBhoGx9P2py6RrBU3FPePoPvW26qYxkq1cRUdteiVCvmkbAuJVLBonSPcH9mQCpATeYnXT5Uo",
  "key4": "4JDzcSzwD6KVeH6EDubwiDLVwVH2uUL4FEnLLwsvv1EkZ77noWhMwWSfBHBD5JyEEpmmjyMVTmNYKUVVY2eDdphr",
  "key5": "216ayGmppopBiLHMzWpyZSVftWvye47WyKNJHP1PkPShvwjCiFE4D59mByjEhuXKSLnMMV2xeoV9Dendg4ZkV37a",
  "key6": "61yxYy682x2N1sDjhSBhSMTLVb1v5HMCxm7gpXzopLaiPFFm1gKDcJgc58uVMaufkfCMZZSp9fBXCPLVTLpbWt1T",
  "key7": "32TXLCDv8rYVH6GEnXKFqFBZqC5efSqJXXDCjSawXWbwPfYeYJzRE4Y3Rjcgeuic4e1SNHCiG85aJee1G9qRSgJe",
  "key8": "3fPT5D87GBSRqXJ1qauAUABK7kJnuPVq2bnxzVKjG9Hi1h4XyzruBfEXVp4rJnicsH3P67vts2eSUaYBUdcAwRCj",
  "key9": "2eydwEzJ4pwPHLLsHvKxec8mBmZiu9zkntHAjwKxRQKAbL48Z6YKJ1G64D4XxZBHZAxoUM5c18a3k1h6Qgu48oA9",
  "key10": "BFDdQviToaUg2D7DpaEnTXPFnTa3K5mPjzB81q77s4NTz8gFTk5QadtgXopcBGFCTvkoGbPASvsqZffMUe33qoU",
  "key11": "28R8kyRmWCFhA3UYqhonkyUyZ7zTecmvWC6TLMXRQcMSD1PTT4Rzx97bUKRBxU1yxZwzaixrF8hVeMZfM4hdKmni",
  "key12": "3rXEsPtwU4T2GdND8QiZX2URDd7Z2hmtrwgb6VNKsLn8jDxCikrj4Wk181GaQ1sYDBnYuhD6HEuNfq1FRZHmEB9U",
  "key13": "5neoCfhioFC5WgxsrchQTQAw7MwbCyxyRv9donE6HMVAWqsuxVx7b1Sge1hAP2KDRrfDrPndphDwWGdPdWXMxv45",
  "key14": "2E2ZsWKUF1hvT3wUQ8ouSwyWceyFSoZpVkAepwNeaRt2CU7ecSQ8ipuKfVqHoqxNKeTZLnqaoroCxSEabJSuUfzT",
  "key15": "2THGSohVNMbnfgyhAQQX6AdonwEjDhu4TA4A5nep3orQjGDbHfiwNxDxNcsvgCHVuG75caJZzZ2Bc3K8NFSDvxbJ",
  "key16": "37CzTb5maR4V6iQX2DTjv3J2wkcg6wFiSSXwk3BXRjd2zx6qfsPQNHRQNx9JawrTZaY4CaPTXoVtR26CBW9zdyiH",
  "key17": "5eVA5EyiRqo5zuVd3cheN3kNvvPHmxxEjKbpwGZz25QTM4j6pNg1CVQooVtmo3oTY5HgbKUjvTYNqGc2JVqXjXgd",
  "key18": "37xSnSANLpeqY47aucAcwzeeL5i6kA3NGDdajm2t5kq8FzjCkKruKNDGoFCnUsC8w6gpp14MdqXMM7PU9HLVb61F",
  "key19": "3XBFBTnTi7f1vyVg2iRQdqkZdSsd9C8CyWDNUEnsYKGB6eznc18YK7hWsVunGbvCpTyKtxtzHiJKmSyjbVPQMz2W",
  "key20": "xZWZrj1wX1o6WAmEB8Md1YyoMgwDFt499mzYCkhSQRuQCZAyraA8sXcWQT5wzEsuQyvSWD3FMGvSAuMAAUduPiq",
  "key21": "5JhMDGEag6TUcUpJ3XTqvWNvZ2JS1xMVdiivZzAbNgAXnQ2iShSZrfu8Zt66PAPEbNcEznC1oDTAqf4HUcM6Hiq6",
  "key22": "5iyH3iJgsqqA1qRF9PuxDd3ue2ZjpZvJ7YuoHFSYA1myS6aSPTLs5yCxe911NZqHnKNhsWLVUC35nXEkVvVFihqT",
  "key23": "5BvrT6LqYBfAHVpbDVFaWAjX8vEbsK9dgc9QFN86RBuP4tnhkKczhiYqQgDLWYFDXoUsbFUxhecLBybuzAb1YrUq",
  "key24": "2CLi6eVfh3Riw19did3rBtiWqU5q5TF8ShzM7bNCWjsU4vNGXueYApvCFWMh1zCCjeZLukycyMQbJ1xMqs679qBr",
  "key25": "2dWvAGuPegW6LT8672dc8HzabyKidXvXjBPH19b3Q87xoidJ7DXhDhoPC4ANHWar4XWWBS6eG6MjV3oG9EkSzzja",
  "key26": "5X1eUHfGeoJRgcFC3CxBaJvb1yeS9QbtURw1LAY8qyJfu8z3zpkat5jL4fF52stuL4sMPksmHxBH9w6d2XqEGzF4",
  "key27": "4ySNHEAdnooJddyCQuESrECm8DUi3Fi8hSgDs7vbAmQKsobzFvo51DiBC2vzUnAF4dJ3rCeF3UG6QQ3vyyhzfTFg",
  "key28": "2tJV2J7WHWghhAJ3NeJuTo5X794uuWa4xzAgJei73EWhmTMpNFWkht5qnYESRNsSo1rqDG9mT8TaVxUgV6t78SKk",
  "key29": "3dDNKRGk183qPD22Yaqnr3Ud8YSgtUtXg3RNGpRSGVgYmTRJF5h8vjj6qWjW1W9iMQNayrBXHVYFfLpsjwr4i5Rz",
  "key30": "2kQaMiVXh2gubzbP95ix6KNb9XvYDLuhcCeiqe42JNcFM727B2QvFxbukK3cR3gaUJA3xYhUFN49XipzRaMgeQzd",
  "key31": "36iLgQNhbuB6JMVS2o1ZRM3HN8ta8BubqWTt69tvK7fWc6C9aH5pjJby7EE3ZxApmHV9LCAi3oYaTjg6ZD85DP9H",
  "key32": "2Hfqs68QRAQKYFyGjvUFhYNZ9msHfTsQtEgf2RshWvguwEWzubnLcJbYvvCUyuhiznz5UpahSTmUVis8KiUQh9Zk",
  "key33": "3ANriTgCSPdXrmtrXYohxRBJ7if8CCP9KZP92KnHaVpn9L7heWQwKBUkXNwagMVF2hrvGdi7a32GFrTDHM5NVzTS",
  "key34": "E3sFXxgMDFDtyzrYfyiBquaU3F1HstXoCSbftBqEHCYiGaeCYsrp13g7d6uhQAxcE3JJphfRKpkZNuuwBwW2W4K"
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
