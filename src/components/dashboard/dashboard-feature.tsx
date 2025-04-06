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
    "4JcXL2tG3tdyyDz2pHeuAsCETkaSxjciBLPEFi3sMFsNErTmsdUY9xH5WFFHgw1htt3r7CQNfeZNeHfyShyXdczn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43GJZuwzQ2Zw9BnZ8Tu1QBbtd3CvxshfzAdEkVjitBXBJMDmGZbh4FMmePBfGd1FqgacEQXNipn5NrUCce1YaDJM",
  "key1": "3kHcFtZD7FQeNZiCX5SGBUGacMKEnsWMwbcWjpxFa3owZNz3rffjn9kA5WMeyUmgfyCKRtY3aMV4ZEFH7FSjzhxb",
  "key2": "5KfJutmyCvBrGjQaoFvAB6RPEiLpxMH2uacpGFTsBCqdtgcdUBEH3MjHuE76UmqAZarqpPwm8Q2o1VWkApV5Dey6",
  "key3": "3oNiKZ51u6NkbBpGKZerPKo4nM3WoSRG46Xw2hX2BkjnBqSirsRYjtZ1stwMFJyYCdweeVFjfFvWjNjaZFz3HkV8",
  "key4": "3PYnuek5jonZreHbdaqk4vUMGhCJss7YG5s9RxPJkJjuKBqXCUPW2ShJCYMYyNtyw3yXk1oKkoRFSSXbSnKcTe61",
  "key5": "2itoucywL5BAfc3AwksfyE35nV1whZWV1Hn9EZQpW4juew55iFesTk7kuAbj3HVUE3xhaYjyo1upExXhzVpX1zzu",
  "key6": "4uXnoYJokEyadWw2oYtHddpBPjTNpdh9E21od6dQH82SWi3MVaowY48ukU5G9JjSAPk18QATsPjsjYGbghUL1P7D",
  "key7": "DVDjmq3Ze52MAE9oc1K3vDxnZJTyBeqczwgtgReqyxQNnsho7dVpPtm5QBjxXef4PaxrNn8Qaw2M2xYiT8AKijb",
  "key8": "KbqXWhDE2VKBNNPyKUp9v5kCAxndktDmYsSarEh6WmRnieTvWKHWSBxiwFnDKB5CQ3CupZ6eo3uWuDVJLBp9y9y",
  "key9": "7XHQ8NphxUc3QhvaAfaj8yE7FrgSfDJi5VQ9GWSEwyuY5R7ztTNtBgnQpcazJNZczH5o6VX7dFWPdbfTZrqFzgf",
  "key10": "3iSUKN6VaA6uqn8UMMgfPw8dk88dtRLQ6di7eHA7uT4GR2wiWfr3AnK5bjjJ6aqtM6GKcTPKZUw7jSnkXvsTbrgG",
  "key11": "3cJSmsxA4xVSYv7Eus5ZLviTCAgXo8rGg7A7w7nr9VCqs13wtMyJjsyGcSgNqRWUiJ4LgEgaoHHj4wyKpgq4ijDz",
  "key12": "p59WqrqTyo78vb5o3D7BM1uF7qMPQvhKTWcPrBhsYMS5sksJnShLYgiNh9jZxhtyLqSqdNnySdSgxN99cREaRYK",
  "key13": "3CKpBrG7HCxAohjdU36V2LYgWSJF6DGj7evhyhEAqDjCk52JkuUeMifmSovH3BRvgJvymBTSrURqy1tadJnYiBoQ",
  "key14": "5HNtpHbxX7MeUh5vCfjNQPwWPYGfpdS7QtBNqgRWDp745X1F1tozGFtUXoCoSdGQTrH1UR7TTL3M8jRgMPJk9HSD",
  "key15": "32HFcD4AnREVZG3uFW7cygvSgTDn6ZQiQ7gND5vdLj7P5BJpLafNtxE2uKmneiERwjqCNZPCMBPmSocPMec1FRao",
  "key16": "5N3Ms6GnXe1LMyvtYxDrD2TqgVMh6xYTMieoBF9WgbhXhhYscBhxSsEZy62nXqthwCXjhyJPpMxrSWD9Xo6zwdw5",
  "key17": "zvjvEa7vtu1MBiUNwqQy8BkJd78ZN7pWQNeNeohTfSNPjj8E8Ghy2ZT3rizCp2kKz3MeCWMxkZ8vEVFE4rC3169",
  "key18": "3ew6mJbasBPTMUan4EvTvKZhpXmdTL7nmkMVEJ6hKLMYgy8LnnCz6tYrUHp9KJEfavkRfTuUK11trv5dgiEWHxZ5",
  "key19": "3sM3anRP22C6ugMFpK4PtrjLgKpztn2uwMaRxhuNXTamAVufAi3J3fipjpL9an7FbSuNzXiPVumQNJGXJE6zkbiP",
  "key20": "2chZZsnZV2KZWDwsfRtyWMBHAL2FpVhRkxRftoUcY1oxqgjHnKGcpPCzfpyMmuGdDbzcYoi8EH19NGGcwGRhcrot",
  "key21": "5cY7GRuau68xmArb81aGDt7mRBWGdkVvfZjUqeebUHvCGZ62q4FVfzvvSAoDn8Ma8b7dFBcPRP57F7bUyd1cN1ZJ",
  "key22": "4bVC2vCgWwXYB7TXxo1mo4EsZtf571je3EUJQa1TTNBkPajJrTtHWkXP8W1FRSsu7hPvQVwtWJHZw4ycomUk3Chz",
  "key23": "5zuUKL9SEA5fGqg1tJaev1BSU86URWR7WLT6ZGEHh64UyfTMTU7zdY8afMGHDnSwxUofr8n5eTmPQQgq67dD3pFn",
  "key24": "r4VKw8JA7wKYgeuJ6X6hTM5ip4565BND6CDc6V1dNrSasC6GQNGeAHsWerdXa9V6NJGxk3zYWh5YtviXxBRjkQB",
  "key25": "4rmjJnDnGbPywzmMzugptVX5fMGduJfsz1n8tsyDoLHiVTWJCGrU4TWuttB6XMTbNp6pehZK9n2h4zv46XJrbJeY"
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
