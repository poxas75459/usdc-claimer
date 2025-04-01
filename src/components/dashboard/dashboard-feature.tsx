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
    "2hVPWna9RCqDvyoBcqaFFRHPjdJJjz8EpTethXiYwbZXFD4QEiYbeN5gCvjaEqQgmZGZ69zdUNLeoc9F4vEgHvEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2puZcGgkG4PZbeunrn8VqyeYcnnHQ3zBa5KFyKaLhtDPbtwhxJ6tr51weVSVyp47v7EsSiPs8iqCAceYbmNHSAeG",
  "key1": "5ZeQ9sF6X9JpKvU3rhrFkvs5are8gVq5HFK6vMXvmcbCqqRcbhhfUiDn2ManBh8sqLZeyvaVq6dkrwrSVjG9EZCv",
  "key2": "GxQLkPjeLk2gRJKLVo9TkesDx7pBEFHKRcWfh3pV6s9QaH2Bo5mF5Pxw7ssU22EYMydZStrZ6ziHjeGYzChMMyo",
  "key3": "38q47YuJ27zGjPjcZFb9tgz3Tqu4dKMRLjfdnHMemq5M3R5BrDL9kvF5K5FbPn94GUnBooWxUP8gdc7XZk4eZtCx",
  "key4": "UEEsd1pWBCQSt72Jpz6m3eknuiBnqYKbKF7Sk2HD36N31YiQvmeV1wkH9qhicS9W1KUvpmtHFFHCmHSMkGcPY1e",
  "key5": "2sFSV5Th5YuwRsDiF19rH8Lk6W6LqaLWTXwNNRXM7gUuM1QZbGBTvpKtNHbhKMVc2AfW1qrmicXVy1a1VfKrT2ax",
  "key6": "3YENrdwuis83vxx8QXCGrnVv1gWb9UeQTYqnUX5XoVqgRzh61fS7EAqqFxiRUjzNfTsmwrteQV8E3i75gf4NWWtL",
  "key7": "65HcXDT85nZhpoWNyqDM2HYcDS6Tv1nuC9HX241zwRGXc3GmVMVb2cX3ZzzrDTixYDBWV1NNBAnQ8v141jYdY9hQ",
  "key8": "4e4tqTpdJwmRFVrUNHxJX7AqszFdGD6SGYo4wWc37UYQ4Z15UvzEqsBhT9AQHQNyJp5Jm2aAvBKgxmW9Q7VtWz1Q",
  "key9": "eqeDGsyeTF71wsLHTJR33poTBYoCXKGuamyXWEcFFfzCAMNCqsB3o4rpWoZwcguvWMMpZk3gJSPjEKeDKrhJpJz",
  "key10": "3bi1pkDwGGvCNEPJZyX2a2BJuzWgL4wrQoToQb2ZYkv811LCv7W7aAoUcDFcQk9mtGZrzg8tHFC3wX96ZTY9D38z",
  "key11": "4ktYbG5FYry5jCQLnokMq8xtaC3Mcr8JFFjSnofvZWu3CB9krrvt7v97C21iw2mNDeLjsVxr6VDcBYBBAkD8CfkV",
  "key12": "3Y8bDdSRDaM6WA3sJaucHedTBXRAwbQoURQWZaBHErZXvDxWhGNymXP4M3Ea727VwjPDv51KFrB5PFhNEs9nDpLY",
  "key13": "RsZyvKxTufZQYVVYB6sVLAAyEvSnKza8k8Si7okfmLbMRidW9aofmhZoMJ42gsyjUehzSwSKTNcPr3X6SbyR1Sj",
  "key14": "JrSa45Sk86TwtqvcKUgDBJqZ7kAToBrVtnYmGjnwhsH7dSHHmzP6kDRHgA49UejrNQEUj6b9CuZjxLEZRo8D8Zr",
  "key15": "4gLQB2VBFnzMzBAbCiiJNaa975L8KtUocpcwVCZHDdGYxc7NjEaRwEmS27DHo2qF3vWa8yaY8sPRee8ynD1hrsQ8",
  "key16": "VZ2KCw1NLZKbtUSe2fGcaj8XY8M1YdhsUssxGBY8GtohHz8t3rFT4mLB3UYe7oaPoKfud6HQBJXNK2chpt2qyw6",
  "key17": "4TnBE1HCL6f6ZA9BraPgq8BM5ZR1u3EZs81jqGoNjWqBPGXGePGfnugJahJnnMwpcPHG8nqRbRPvmzRcSAQSD8h6",
  "key18": "6fR6atfSfTfepZ3H7g3tnk8s1rmbvWaNpCeivg6WNgrR6r76baLABjGqozaTxZ4NEJX15VyJma7jtZj4GrtmCEc",
  "key19": "65g1AsNNVhqpgNoZUm6mWq7BGwvC6NLTsQumYK1zQvvL1AUteuRPqbHV4d5FgpqJK39waf4TXkv5f3htsDVaoBgZ",
  "key20": "4y3MLrbbuZiR5WHvYxbXMi5WtDpssUGN8FWu5uEef89DtmpQHc2mJxG14JLLYGDSWSjhJgZycyQQdeLoYKoKSJzH",
  "key21": "3fwW5ysKibEZ8A5EYB3tvwpgjFUdtMYhaEPnQY6oQEuwXXLUrw9suBZVFXMzRvGEC3jsKA2gd3mJJFHjvH8RGRZ3",
  "key22": "2t5ssThqviyqvW1SRwYW1qqyYKX9xpFoktpSjyDUXPGkyRiBaFMUzFyXKv3dTaFLuF4byg49XrMbqHby7JzYyVTZ",
  "key23": "5XB3bAT5eLbyb8VCHW25Yx3yLA2skXCkDb9yzbDYvHLq5a17vPNtJwfCvsgw4LkHGEZjD2wSavkGNnZZew7iBpp4",
  "key24": "3rLuNftHWXxTXeTUVjo9mLMcBmKjfFjgkakWKMYx9sUTQPYcRmpPjR8G2XehbZ5wqQnSsaRkpDEkXhTs3rP4tMNE"
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
