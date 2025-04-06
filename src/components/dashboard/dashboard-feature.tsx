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
    "6acVzW7dm7JZDg9ikzB8WbUBrSPF4G2v2FUG9hQZuS49csq3pvixXuBMLcKoGHmY27jGNJm3LNTTZfBLVxJpdf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gzdWjTob4HeY1AgKPHsxjMNqjgvnsP7ExKnBSjnpvQ3HsKS4vXPYxaYNVaE5odo9sRob1yuJe3HFhSogJSvuznR",
  "key1": "RiVSR8kHS7Sd3xPFWCMEhJRsFqCNAYXL9YoMYbHmjm3r84Y9eYVYkfbcAHP8rG9iKTj6XmRLRrF1wa9eXMbKPMA",
  "key2": "2KRMHZ8hwVjWrxZegJWx7LXSNp3b61fduqBmaEBqYGJWWnH7N1tZm4R54yMvJMEGthYGKKG9Ct5ke1fBeSj3biH2",
  "key3": "5twRTzhXG8vv1o2VshBKDkyccKsgSn1DhEF35zQG486PofSWdb3dyLbpowKEp7HiPSerA8qmNRqiRknMAqsBWKaB",
  "key4": "3q9rMk1d4SzTmmZm2X7vMiJ5YyV7jskbxzUDnHFL9pUx3M9HbVVw44jbQZ2fGVQP6ZZpKNU5WGWnZ4MLTcNRezEw",
  "key5": "2oLXXNiKWMDveo7UhpYNkdgsxD93etGuQedmGiP2bGKbKzujNRRGaRmW9RpJzyDodRQa4b5KoqJPseEATmMwwxq9",
  "key6": "4RCDQtxXATBu3jEHhpLtdBZAU1fsgLr4LfdeCFcwAFJjyBE5Hzd6pdf7ZgEJs9KTe4pa6QbXrDG8WCwZdwgXcEUp",
  "key7": "2oS9Y6NwoyiEqzSLQSB32iqR9mfLUtFG27LEWZBbmyHBQ4v3WZdr1MPVAnkFiqNHMtJut89XsQRm8Cuo7Paay8mt",
  "key8": "56DHmWt5Qcd4cYZmqszT18xBK6bt2Hzs41Ee2MgdDEswLgkJvx6shjMt35DqAzKTrGsid4vFBrmL7qCQ6p2k7jzp",
  "key9": "5RWzMJAhtD6DPzdZ4m4xDhJNvmEyczMkm6TFD7UPA1o2tnufZbz5DaQPEGbsrWtx2paZ3oUSsQeSsBR4AcwQ5urz",
  "key10": "AZiLHEzXdTs6Q3QWQA4UtWinfCm6aazB8Hrn8fuE432GQXn3ArjjHuU4gynA1Av4cZ4sRY9fbrarBNuctqnwkU8",
  "key11": "3no9iAp3ZZY1nP2t2FGrdkkcFe1phMj141t5Nm3wKJKJFMv6aQbEcVMx12LviQMp7wL7F2rwHQD9qb92RKSN4ECW",
  "key12": "mP7og2BUGZBRQKEp4aLLMMZm4bwgvkUxUth3tZf8PpKeZz2qAL6ZW6hH9tJ2uWrL7rTxWqbrBufde3HgkRVX1CF",
  "key13": "2ukMkJmSXGsG8vVHxCXNZJWUQ5Dq8UA3A1TJZDXWFSaewjEYrXfaNaDnckwJzhSuEDr7hWPaH7u8b194sMtd2yt6",
  "key14": "3fJAmh5GTpXPQ571G4zAhVtbAF2hVSEmmtaHPcXaEpVHzK8nRGG5WcNXcYBLfwTc4ag9PYwB9vH4sitBWcc3Y43t",
  "key15": "4fMcPoPwVoF9s67GFctDreqP3xXFmEvAnbQuwffcSeWqcTsdkFCEhDzYjtVSPXUgDFKywBdijSDWdptzwBCezpXV",
  "key16": "38WxFFj9W2DayzQ3k8BUSPynKxekvrgDQFNSHuwhtf1V4PQvAk8W3xKPyAJnoRtNUkSDcGs4bq1C4ABtcsNSf5jM",
  "key17": "diLNpyLqnLmJmbXybK42FjcoyJxTc5uWqzbKu339GYuMi9sTZFLKZMpLc3mAhjqq64s94VrwSFey5UxWPU2ERCq",
  "key18": "3rgZA6dEZhPf35jhhrwQxcSqFMYjrJRfxAfNGKmHqeYx2eTgpLqCqE4bUhpN8EA5Ahn4cuUfPi7LtN3KddUnFzFK",
  "key19": "3NRhZobpmSBLVp57phopsYycZFWNWNjVJiSimqK3xw8YgRreR59LTfrLBtnZQFLVnXNTiBaB7b2iDL7iJgteGUm8",
  "key20": "2M4zi9RTN3oVjUvmi9cFwVhwzaF4r2BEdJUY9BAYPpjhWDrCNaJCN5YXfVnBgNMe4jgojAoAjruGLEfQMsaMnKCm",
  "key21": "27oMAE57GFmkgSYGbfVobhMCAxcC8h7rf2qjp8qFnjqVcQhB5ar8tez9sEnz5jQNFTzd7witbZjzDGzxoeTWTd6N",
  "key22": "2uQqWZ4UqJqiPmiT7gV47wVnL1iEMSk1hpPrhBd3vfTAvzJ5B1ZUCjf5UAxYJugdXH8bC4XJum4s4sW2PjdNJnFL",
  "key23": "HDVFB5SSFWULQMwnpEs1erGFDfCqavYEWDfLcA1J44zXTotk3asGjViQcoiuPbdgmrQR9Zoc3CTuDmDqLRDnjGs",
  "key24": "cAsnnp8tuGvdJcanct3gwRh3AoJb8s9mBscs1i4Zh86ZmjsEEpyryoTqZ7xngA3oxDBZMj83Vtv9ykzynLWKjwE"
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
