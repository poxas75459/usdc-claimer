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
    "2ZZMNzg3EwHjC6zffKMRR4gUFGFa98Z8Q9VGE19grh5As8fj9zKxw7PjtTVmY1QPVX5ZN9yevMKWZr6smgV9eNiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4McBzumiDyLBL79p7WVaojczMconnJYDSKHxn8e7YMchdNwhucpDTXcbjz5eX398Uz5fVooNz9tUkaR5MmNp6Bq1",
  "key1": "3XysLv4La6cJywojGcvcavC9czTBxFURyQCDQZHup7HWhGRrDrALkv97xGTA32XioD3eAXBdcGN9V6ARBTkLbGUD",
  "key2": "5fbpTtQC7pm5g4nB2w5UYYoBbwhcQFDLrjyVRX4Ks9JmT9A8CbBFynsm4prPswTwNdd2gtiFBWvh1T2961rW5TEQ",
  "key3": "3ug61rn6L86Da4QTQsJB7JeV7bJZ57FnCegwLNeRrWcsvHq86RT5FnxgXRWq5uYnjawYT5V9RvteXvj1k46yQ9jn",
  "key4": "35nieoa6smWCVuEJCNWSuswT3UTxoXvoTtL9ejv5YAki1ekYzf8QyQ6oR2dWVzao1HSU436DmzaBH4FxAwRcFUXs",
  "key5": "66M5AJXTe5T8TodfqSrtXLvMQwSp2HVp9wrq6mmMct4s5zncERUjqCXod4UZhaSNEAHrGSkU4CVXzZ4GBF8sosJZ",
  "key6": "3zGt42fiHsbkgDP9Dp3ZQnLBiPxMBe57bR31HhcyKvNr2fGbYKGNuenVw2GotptGKnTaH8ARSgicM6hjLHANH5Qt",
  "key7": "667j3QTVfftetY3p4W4xcqNy2d1W9xkDCrTvsX2zdTxAqYXFbnrde2z3eKpiwQs4v8X93EoR6Fca6cHNHuFyCZ5i",
  "key8": "WaURC5ukew8vDrLmKJVgocvvvvZPDvoBgBvSJmkrXfW2b8CJbVP59KaShKiw9ZQR7YS3rubjmcdCW7nAn2zbA6x",
  "key9": "KWcS9QboqYCSRKHNUy17krCL2bLDeHwivwauZYVvYNXxN4ahAGws9cRro9WwgdMbjPmZCU9e2kpBgSgH4GNBgCe",
  "key10": "3cFBStyYDze4EcdwURc57RDSbkM5Sm7t4pFFjkyChuNuVqrzhZkp2ESAemZ5L5XTQKgninAFcTX8747n2MVNmUCs",
  "key11": "66mam1dbs9qn9zMGBxRFaFCgZHHfRqqSjvbsNHFNKAyYjpeSgKNteMtn9seQPiiy1zWrTZtqc7bLakr9mnHTt9Rg",
  "key12": "3WeTXVKVpeXtr2cvAYdigntkpZruqoZdhTvEiZDdDRNdFWGSB7hnjnPUbJWdN9MdMJL6X462iKwPLoRmNGdNyWGR",
  "key13": "owbfLnyMSvCWyZxrRhozmSS3RuBMUDtvgsRt6248XcqkkNpGMvA2ANmUd8QTdgiW9MsAdN56BttV5G4V9beW2xE",
  "key14": "47RmdsBEEcH5krMBzkpGC8Dnaf6LT9PweFB5k1aRKtKTcwqxC2RgkVnfYmXDGF6XJqnjWPiqzaw3r4jYLaH67QLY",
  "key15": "3FMgQPYaFouG5rcr1xFpmYndWJs91qH7iURL4SgwMG2kKhBK8S9Mb8GMjeHE2HhCi5gNvTeBG2kdWSfksG8yh6TM",
  "key16": "pEQfL2VnV7i1qVETGudvjejVVWjjuTF7EitPFvHyDY3ejrt8xKcnhMnCHdmsqBD6iwLdaYvEHLsi1FRAUDxKEhp",
  "key17": "31MczuqNrfe5FS84h9UvhK3ztivp2Jpznt8zLBf72xyVhjcngTYDZVtcjfdXCBss48cNwFoAp6UmQSbYwbdugg6c",
  "key18": "4nhnss27k3SX3E51nWkNqEJDYw68tzct8EFy2d2onnkqhRKSGKe241kYp5g3yvccKRNhiWHk93aDY2FwiEy4esiw",
  "key19": "2GxTbHbVb1PqnUEjLU2NR3WzDXsMFJXNpqvHwxmhhkXaPaL9ER7BLLYRwvWmzBrCZC4BP5vgGQmu1xbSftnybYYF",
  "key20": "4nGbB3KSKuyzMrxdx981jYgdR4oUQVMDS6qorbDgqf1PTw73rReaAGwHKQj8M7A3cGLtvZz8vbjsnugb1uSaU4UE",
  "key21": "vWbcFTH4X6mDgEoATgtUieiviZL1BseoTmrBWWnqzUfMGRsdpg4iNAU5sxhfumcDn8NEzmhGGU278kPG9vAJ3yu",
  "key22": "5T2Z6gvZEGoiksKjk5587SLxdmARAkbyXDhR3F5GMGVUZjYkq294UhXnzSFVAizMBEdhoeF8DAQzupNJViGTVuL6",
  "key23": "2a44R5HQJ25oRLyBoueLcTvWprvdUPkCEFbHnXsmt4R5yr4SBJq8KuNVp6XmWUcvht4h4CwX13L6HHjcuht7zEzo",
  "key24": "4oxrTqKSTiEQ8EnR2gUtaaz276xw7vapGuXFur9cQebjMFz9ViMtvFKKwm1Db2xACJz26BwKD41WnJW3U4jkMTHs",
  "key25": "2DSPqChXL5WTpYCW9xMmU7E4rr3WqxEAdhscgCHws8qzGiyyR6NbgKs4zNQYdMkmn18VoYYsuizQ8ANVQ96ydUG6",
  "key26": "3W4VDEWfyp6gbLnrVht5fjZQfnpRWB7kpuVQcXzHQhG9aAEYaz5ESRnFkRKd5N433PBuxu8BNjxr1fcCuZPuz6nM"
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
