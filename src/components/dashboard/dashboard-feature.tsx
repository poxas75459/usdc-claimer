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
    "3BabgVTthRsSb96jmyS47CXXUW6b1VRe1uCofsU785Zjx5AAwecipQpZagJRQjsY9k1CZfkP75QVKJGNCkRomR4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X9k9ae6RZKdDVG12QfkP7xH9pAdhJ4vQwq33b5Kka5WryQoewpbHk4G6HB3YamYnU86eAsDrJkBaXGd4zGvomyb",
  "key1": "31RsENkcJMw3gUYD7wncLzswWsJ82ZmfHViYmEasryMLPo4oNddrwzEodtHEfbRV1aJzu5sxYPUf8JtgwFaixZve",
  "key2": "95R35CMSH81w2ZehBLLhZTyecYSwUc1qS4ngxAqVr3234V6eSizxYSxJwDyKh3xW1MASMT2fJrPE3dESbkxfKgA",
  "key3": "4xPq9nkxPjQQWbxxrFiQAA9uWrfYXqj6gMT5FFv4gKek3ev7SUxtFw1L8uVLvnd55dGi9p8SkXJQAimZt73qZ5cc",
  "key4": "5wT6JtKTzubWDbLtTWckLbNoqJuzxGRtzteCgxTyAGvStbH9GNX6dpdLYRYj8LgoXXEDyHTLShAS4RoXqbSyVnX9",
  "key5": "64V61QcguA2mruNmcxsQnUC3fqiHyAanBG9ofpF2z6TyCH8gBUAgpW2KrHzieX6pcFA5srPYc6Z8NiNb5AMwVKgb",
  "key6": "5rTeKjBvcQVVb8KcH74iAMh5Ugw3jbdbLan9bmAmRxPZQd8eeEwbo7duJzTktatW7CxAcuwwLqqE5Y1xCiy8Xq5N",
  "key7": "4v9pDJsK5K8jdzGRVziBBuCJygAFbJvpEMrCBd82JikiV3ghv9eqwNAaAUkVyoqFxZMTdrHaRVTzZLr9gk6vNHVh",
  "key8": "4vrqFK8g6hQuxPRDsv9XhfYbrY2tHNRtUBuKKkNjw7CTaiq4vuTCNtK8C8hoxNMVwqGoSAkCmzKqe88Q3kpvnfEa",
  "key9": "4EJ86b3txt2XgBEwXzH2usXr1KvZEuiZAJjNWet9LjC237znirfF2xn5YgjJa4Eqkcw5XHgkAXKijEFxKkM7RARM",
  "key10": "3fTBzn3SA6vKC9FBjmtDP36qrdM8rR3LQfUfBPos2ZSfmkUVeHUEPSukRYPFrMCYHpmC5x6of9QWc8WX7VG3FYsS",
  "key11": "2Ndsdy7tv4yvZy7f46e8NLTNBy38XvYV45MSDY8GCzDgsqBHJ8qUPQbzctyB4AsDDe4Xm1tJtfmoDsKP3DWokpQr",
  "key12": "WW5Lom29oZ2YkB5NnzGoPXSaxvhfNtyG6Q5dKFHf1J98D5Vb1gSnYMS38pmQF6mKjT6sYCY9eK6EfDhCAfxeZ9C",
  "key13": "5BtZEU773dfdJEQt5FCwvHaNahpoZT4HfgYnF1vPPARnZsMrtaoHuYJKDCZK98XGVA3FgLYgQHZJ41KYMgtjhayo",
  "key14": "4isxhvKcaeQZxrEQxRp1uv6qxvVjqBr7H1wkHiynTXggAEj28s22BoLoaZEY2drWiAWqM491PuXQR6HNRH9X5gKg",
  "key15": "54fhUUg9vugEfTJ5eETUW8uz31wzxUsdkUKdx2B4vgLkYraND3WhRF1FsakU37vH4XM5SqtXEMkkAZ7jvGMG2JoD",
  "key16": "3wM1dfttR6oKpA1eEYdepxnvDv5nDReX4wkvMfZYzWSDFjHJ87A3GmTYMDuxLct8bCzTdaTCxVb7eU79fGZnR8wB",
  "key17": "5swC9Z5r3eR81nM4VAwuCrMJX6ap3nMAkSDWDng8GFRwAAho3fbnibVHB7DdzSdKCNEoLW36Hdck5ZzJAuA2HYye",
  "key18": "47MpkEubDCCdCZZUBSaR1VJYH6VWhAGPaEMZSFTNPqSLEEF9hVkzJUFBtnbhXpMCw89Jbiwh6e7enB3rY7ACS6eU",
  "key19": "oBMpyXJZU6u93MPtNa5qp2RzQKhVKzcxtWei6eXXKSDHm6PwUrRtKXmFacTGDKp3gMH6iJ8CF26utfJ4pbCsRio",
  "key20": "3QckR7w3xsBDvNAvebccNQksMkdDbsvPTgENwsfUJ9e676NEd4gbyy1cTkoDqk9Vwjkz2SFZY7qd25uxGVNMakbq",
  "key21": "3hakZAWVSn6BpPt78hKqX8ff2q9scZexz8swrLBkRVWWUG3yc8HfE54Ujq3pborWQCCMUoTxHxtmKky2vNLGaSNn",
  "key22": "usNQ1WVJkKZDs7Zsq6mrQtFqFSEvbCrVCC3Fr1baWTk9PndhAsPJvzUpRsAaq2PEheCkD2f4XcKYD7wCSX3Bdx1",
  "key23": "4hdNqZ81zgXDisoazhpcsK1ZCoYxdqpDhc2WCzwHXC5Mq7BAP5DbijT6f2FFdD53SQB9LoD8jCjy5wjHyvr3cX9i",
  "key24": "vnkb5n8hARYe9AvLBe5pVnqb11bKVtCg5FBtbv6ReCyFF55zYa44AA9jXcCA2NLqjwqThoxPEoV2ikn5BpSvLDP"
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
