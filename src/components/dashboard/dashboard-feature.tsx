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
    "3vDfizefg8UcDbqVpt2WpdmrH5eDak9iqmgHBwFjBbwgLUAuSNqBomejzRr4ciRbvfEUqTSmfNsHXC1hvB8NeiFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aF89rjciGaxsHzwpCNspuWaFTC1LuELUDLDkcLq2cDyawjSYTZSUSxFc1KePcnTNv6M5AWyiBkcoC6fV3e4jRiJ",
  "key1": "CemhPYhcGhARN3aREPE3PnaUkKdkSdFuicArxGwWrKnT38HDD3gTqcBikqJmG762TUCyU9xfP3RLaKRN3sDE6vn",
  "key2": "31UZps3Zbtqd7ytqdDAJTHYyKkw9gqwtqLGSzX4yg5qewYhdirTGcjiHXAZ1X5hKztoHfq4vMDwomFgzUhoYr9X7",
  "key3": "4WTAfY8rPdWJLdR3M1rQ3EJ8tXASudQmzZ46a7W3ZP2Zha3V7pmQUR8qyHhtNHQA7s1D84kgc2mM9PjBp7my9yy6",
  "key4": "3oijMT7Jn5WoptLYtXPtbZthZBkVkAfAzY152ypgcJhDaTqf9okNjsfecskaU6PnfwkHsZsdQ6wETzYdutiB7DPm",
  "key5": "KCdXtHMWqVB1wc8mmErLWs57ibW5TJchELSxgBoomZ7FPKKkj1BoNSNyQFxUwXiMzNsiQQabHHTBJNxKHKyfZSH",
  "key6": "2v3iWvGric8h8RP9N6GYexyJSNn2e5NNN99FS8bQSe4tTzHMy6brpJGy2t2YJDDRC1mH6BsPAxUzKwCecSmW5has",
  "key7": "4G4AV4ydaU7qKQyr2j489q3azdx2jRJ52fsbYieoox7yoHuwbiGfvakQM4qKQq5CE84uNAAxu4aJhqsnhdimkEFX",
  "key8": "5z6UUNL2PCvnZBMTF2J8sKnSWEroLrbMtjc3KGsXioNU4BWD8Vrtw2SCathuAsPjSofuRUz8nfFEGdeC4HtQTwiz",
  "key9": "2ZZgkpjbCYGXW3LuhTfPu3gLcPN49A7G4wUxfHdUtxBKxjwKp3KRxxLYK3E5V4qRupX6DK1KdQHP8QX4jhrNr8P5",
  "key10": "jEaXQdbwvWrf9xLdsBuUB9cGL9p8bx2KzsQRijZYAHwEzu5wmiVbsa3m42RD2TFdvMy1vsBMENEcJFroCFHD8sb",
  "key11": "25rpc35UEWsr3D12fAm5o1JDiM4paBbxbMGQzM6YaDWh4G8tJ4maTuoKDTwQQutG8JZ4gPko7YbhJ6ePFzmpYyBY",
  "key12": "3vyZi57fHeqTkPP3jKLRAkNZtGLvRFsSmnbF7f4mXhUSPJUxwgj4f1Ud218s1Ce7QnHk1pKAU2ZBjLJT43UyMaE8",
  "key13": "2HGLiLB23HB5uyxwDhYRCeiL3tdBWrqXxq7rzZXmm1wMgMuuEjMryQWk9JxHfqagYdbUh53S4sFsQzhYNp9HqaPK",
  "key14": "3wYwnjTEsAmmy9aqhx23c9E4FLKZVuTtsVQ1WKgnjSJH9jxmuKBkacuAjUL6cAyfziVx6q6zDY26MrjQG5cvKAzu",
  "key15": "5EXnqCGPdLJmNqa2N2VMZD3jLkvB2uG2YRBm5kDYR13ohQsr2kAFoZCcq75oD7xENYDJuVp9RyN1rDCeRqtZgK6p",
  "key16": "5368ji8PbHbeqY6zprgHo4ynBtwopGS9d47hQ9AURPonRePX2y8QER3f5uCmEpKSB9ZwkcXaEnH72tKQiA1faN5X",
  "key17": "3QuiGg4Vbsy6fX7pbVSXGTgdLiN1q12dDudcHgD1pbRcAX9N4FkPLLzMmN23EMsyokrjV5ggYAchnFvR6XEgLsHb",
  "key18": "22AaFEnfTKmUNumVsfbKiZsUjih5xNKMKGthhE1HHg3ybMhzByiTNNpNLyaXigcfoyjtDbPHpcdLPHDV8rzCr8Sa",
  "key19": "2eMhSCuMVmR2bHwwh8aRwGfBrjcDd1XRLc4CLZnQmZC7ZftY3zrMmPmfdXBbPcvyYzMpPZTZPQDkM5Zw8f5AEEVn",
  "key20": "4j2ykFHzGevKn5E9fyji7KnZa7DJPJmZ8K6ZohRhkPt1Rgw5WXNA92HRyUE4s5FTnZV8tbBponE88W8JwuxP15LN",
  "key21": "62C8XzJaWDnHokqk6vLu4ZPBj2NWAfMJfyaeczVj5UFbfjCBRfa3XukZF3sG3Rf6pQLSCf1sAquMRu7LJNCPtrUv",
  "key22": "4zUTQbd3BnZ5omLBoeg9gRzHk8zPfsv5GSyfyF7zksWkrKdjL7WjqqNXqQSFVKcovGfrv4ispnHSqNruukKVKp64",
  "key23": "5Q4ALvwzvxWDkJnVaAwYHn6KLdTxEUZYjz6Sd3JjsaBJH6kZjvWbgwanq1sT7iKoaTw4xghiNynhHrr9ekMAMrfA",
  "key24": "2cCgwpuPKow6ycw48VBMHFvsTLsAvzFGxZAgtZdQ4rdVUg7AxCJYrgE7FfJNpYqmZDgUUGEfRoHnzyxRkKZ3uqfP",
  "key25": "24JrkEVdRxQk3ptJpmoaNUY7YrnDkcH4xbcyMK4UitBafdfcsaLt1144w9y8eu9pJnsJyjphWbmsq8GSyrTJAqL1",
  "key26": "5kMDv5jwhsA99HuciRwehnNDUWEBszpoUEdn7jhugecLnDy4JkKdJhsXrucB6RcEcqQDadELLuRjq8qLfKRxY9ry",
  "key27": "3hZ8FaeikRe5V4HMrT2N7ZpUTxg8UhXeQDubhJnKFamX4oQeh5VYgxGKk96PbFshMS9sdNB52omPt9gs3toFfVtm",
  "key28": "ETNzFNdcsdjgmLd9ZqWMnBUuiBnZGdk4YTD8KAK5EeTosgeHVxNFa4s7pQuLKRGu6xm2UCnGNiviqikqtNoBcZZ"
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
