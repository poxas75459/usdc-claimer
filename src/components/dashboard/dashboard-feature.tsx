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
    "PQq86RxJVCaFLCKd9tJ63QdZCwLQz6Bsf9jWJ797qp4zZK2XP8FQEkTwdSx8UdozSbFJCXsbKMoPqG9Zj6hCDSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gou2bhC798uAtxrNKh6ZhWV1pHfN1xtjBzkXt9UiMBYaTcQZDkkYmJaHfVGtctZRMfQFBKu5YE5zQ1dyYYesTXb",
  "key1": "2BbZvYdKaU3rrCCYSLMhmkx2YAUcbWCZseSrFXCsWR4m3ZHkW3o6g97fUhZRZ29jKp4AVQfdFfSg6xZz3VFN7Pnf",
  "key2": "EoDCq3KSQUCrpuPuStvdMq7kFjHgTCBqxwKyrZQf1vveuyBK11uBNJH2zYYkbGgZXKyUWzjy6FwbD84nwEgQ59W",
  "key3": "NPtSkUvUPkkvbJYTn8rPTKfjoy3ysdCRDLKjSZsCW26uzBNh3eF43oKUG41DJk5bSRpMUikvX15x67uAUpdkWuJ",
  "key4": "3m9s69BH9FkfNbnqTe7okifA3ZFQZyfPpUsUf5RvQaSYWnykmQ7uRFtsDht4Kcotw3CDTMAYR4KN41gS1xzHBDgF",
  "key5": "5MPdoMVL7282dJuDpmf4ZubMxhs262gMHfSwqrQLtzE7JzXGtFRUHcJqKY8LTqVjfb8Fy3vhwZyd8NPARwwvcmds",
  "key6": "3huhC4TCDMzhsfx8q5BcXWrwTWPdB7jezsunfs3NLWp1A7j7cWKrfKaBdxg2gR2Mh3H241PQJNLJcubBHPnfQMoA",
  "key7": "3EdmywYHWWMkvjh2iXiZRYPChFJHftXVyT6L7sArYENgGg9feGGLLq3KseRzfY3QEHu3VFQZfJwTqMUjVrAff6uf",
  "key8": "EojmrQXt2bRb3hgmDS2LG22oNEqJniKz8GvTRMrXw7iiGxzzwdd9aedsRbvbaz5Mv6kPtfPUjBX8Sr8qwUv7kwR",
  "key9": "2LesALgGGXxk8nibjoamv95EvNtLq6fUZcapjJR3vR8NZafz682NPpWdvVdmaGR5hMeqiskHLzUKgpVMC2oe92go",
  "key10": "2iSyK5jQZuwwFr2k7BG1W3xT6MsMcc9AzXGN9QxAFFjxYjQRhtpsZCY74tx92QYhh48z5PoJCZNh935JoMT3FRWL",
  "key11": "3EjkTTaY5tdzJ9RfgsTXBKCCajBu9mRHDzKCEHq2nv87me1yDSxHirugZhHo5f5GCz4Tss68JCAB6gjnHr4vGPbB",
  "key12": "4wHXa8BNzRhBBCYntiqJXJ46HSy4qzvsom764WM4xDRXNQk6wUvZ437VM2MTxWKjUkPvSuy6qVKTeHn1vw9THfG8",
  "key13": "5MRLvHYTMQfB9xppNr2mVpAADovpSGWj8LshBi3KcG7CNc5QsPhhNLybQdt89M16ZCUcnMGmmhmQQW5nYUTKX4kr",
  "key14": "4utXhrMi9M9imhyEsR3KCmJpoNdL9bpRWsCqkvi1xbjXxGYPjxNAdif3nmXBo3XkSRWHwVh8PfsKr5jh1yY2Uxcx",
  "key15": "5JAEBWWMAHNhjhU3jxZGyPEcYqAQ72UP6CKM6GnAQBxZz5364xbEu7QWav1b3mHLhNrNPXgJ4nKronXW1vdGY5GG",
  "key16": "3Jq8H7HM5jvVAwFNg45TWrtaERz71QGVkadH1fjHqV1b7HhdR47vXsSudBXW2gaTU6k7Z8neptsaqxVhLzRB4876",
  "key17": "5PeofPPX6HboJtfHV7t3R67tx9jPPK18JxcVJpksujPUMcCYhCtdV5Ap1PyZWGUAh1NneSXFye1SwMaHnVFdf9BC",
  "key18": "3WobBef8naP7m6z8JJ65nmrixtU5ppvP3BP8bVMWWVM4xnQCT2ZdwyEH751kgdXzhWAsc6Su4wpKSGGuiNz82ZoA",
  "key19": "3cq3UvGdrm4gc29bLXa5m4FRhrtUCYwL7E7se4HWxo1afvW6H4vacwNj4wKNJtgGLubPnWWBUHEseroe1HdgiRPa",
  "key20": "2mzE1MjzSLJFuHch2R1z7cMzjKDCZFyMaVSXwa8FR9kAWDeRcFbP1akdgWXNeeqaqU2JKZfRQnJGgZKWfjRrpevL",
  "key21": "mQ6s9ELqwZHzWi5SQy29zG18p7nW56Bwmbz1LSGshrUqjC7p1hmJ4KzJ9V1gMUb5H6oHRXDCqHhuapadGKpe8yG",
  "key22": "mtjErT7EyWJQySByNfBjr9HF5wzAU9KjtM822D8kYf68Q7VM1bwhfHyakfLRHsHnKiT4e1D7F45dFawFr7LqDf9",
  "key23": "3PemyjBNF9se9voogP5XFAUpQJ8zaSDqvCZ8BiLWn5rCdn6rB6MqKxDaPMu3eVXkKFKyU9XGL2TyaHZKQ9R893zD",
  "key24": "5d8avTdrhKyw6kKmfX5AUVrkrrD1ggdwrY2yBGW2b4bbVsA3xWoznL68NzeJ6YggSDhqLPkDxwebPM8FUgGFyDBm",
  "key25": "3ABiYJsMoJzdFRZjgXw3ToijucQjShzsrZyGuLYWmwxkLG7jFhvbPbif59YKG2ZFdHEfyQBFUEDGtNkp1SCjaphv",
  "key26": "49DzrqRbnkdD5jZTMtXSw8p6greQEQCj3ZfeTs9Kq4zhhkXvogZdS5QN8yGgWq2PLNXTVCVs69nGv17VJf88gZ4u",
  "key27": "4ixzwv7wVHyD9j2VfZLkYztnYE8cE4q6j55wsUkvKAh9EnXtfqehQNhVXQz2eH7Nnco2KkEYRLWVEQqhvmJGWtnK",
  "key28": "2fKWZyiVMqvEP8URip78KLfnEZ3UfbCGNXXA4wwSxFtcj3HkMvmzb5HjLfmCQEz8n5bhXPQgfeu9zT4Z4iWopDRx",
  "key29": "oqmGneH6Rz7S1L994dLpSiXZGmVcmuvQPRM9a7Xy5LK7ThSSKW5JANbeu5x7kVEas6G2w5hgNaHCg8ar2BCJ1ag",
  "key30": "62naRPLi74iCqX3VrEcfkRy6V9HrDvd7SamRh2UwScWvfuwustjv9UwzLjqciHJdxYohTKi2s3T23Q7chkzmyDme",
  "key31": "28fnBpBE34SM4rS6VqjQukcb6NqQixgjhwD7Ah6uwcEefn4wXbZ8qAx4vpuwM22iCZ5xGauewRn67LNc1hydXNJh",
  "key32": "46jqvzHK8vUsazkmNDU5eiUqxaaPhwHmfpXEdjJX8UfH2SVUE11Nf9KqtRybUEAzRcnyi47AVUcx9PBibGt5XrcV"
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
