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
    "74EPyaEM7mXhhn3hsiK1zbG91aoeNATDqZwfk26qN3LE8uN5k37XHS1p9rkcVtfrvGQGYrkCc3mygYEwYFoY4UV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nsjidpodw3LdvD4DafCDitipG7oVKQ4DVYZuuYoHL6iRFBXu882gDSEGVmosbQytSm1RBzZGN2ndSEhoh4JNJo1",
  "key1": "5KR1K6qJbkhNCmcwSpfJwEs2YxT13pM8hokLiiHPBsDvf5FDUknUPjKasg5QA6CTxNfebh32k8Q6XyUnm5auYqNX",
  "key2": "rdBr6QvNC9XjbJ4Q7iHSa9jekhpGzHZFgF2GDkmb9uAmtWJDmsreSXa9rVo1MqgEc27Xeqt6WffCBXAS7FdqVpa",
  "key3": "4nmsvCTpfLuxHbzGpc9XGuBW6FbJ1JY9nk9B7JYduF1kkfNXviFmRuyXRTJhPaooW9vP2tYyudyHt6VGTF5ExUPr",
  "key4": "4wfL36xdahtgW7T8V6VTCBQhPvB6jFyRv4XJaofx9s34dXAcSHAfZSCDEm6NeFDkXQ1TudeuihFUxUrtQBDFBuBT",
  "key5": "56eCKec5PkW2RaEssj3qQtrwV6aAUJiSN1ZTFZSC9Xm69G57B5t5pRmfkvJ8D9Ge7WMGSx2YTgq6tQPzuCdBxSdt",
  "key6": "4ZJf3cQBYhSQ9CLWowr3yhYQfeRNmu4z4nKXnuaSWKSumGwXq6psijyiS3GzUsCu7hUoXUedcvuXMyZebTDw4rwe",
  "key7": "41fKXNFLoGbUQ7Npg2BCoq6SsT7HGhRmChvCBmdim5fznJWdBUypr1d9KjJGipbgjCAQtsFheBGBasWPLdihv58j",
  "key8": "48BJXGNe3C1752HoD3u7G2rkyMQsTwrzUDpSADmc5nMHRHFKLgwhTKU6o7tVmZ5ovCpGRzKwSiCxxkZKx5GBa5ik",
  "key9": "8B9pq5VnWkw9NYq62ZUby98R7xZRUMPq6BZtXD1RARprs1Djek9j4j4Cocn8rP5r443Mw4nNEaZdqfAhJdp6quD",
  "key10": "5mCK1sEn28iXVLYPwcg11VwvDmGFQDnNkWbrPozfP2sGCBtHj7YQ94LRDRuPT2XhVddRPRzBB4xXi6ogrxE7F9SE",
  "key11": "2iWwbMTY9fmMoVAnCZoPWLYRkdLT7NvQ3MdUwiMByMVpW57MPeYwGGHBoB7EVDt2EP21CgEEPM6xPubzZtYN4ate",
  "key12": "2H3aMQnwupJ7kyi8uTVW5FphHFZBHaRw6udov8tRjvcc1vb4wU1ebmWWvR1tKvCudAMYkTVzBoP7kLkXuwc1HL1G",
  "key13": "DDMjjeJr3C4aZM9CMgRFe1pBZJnsiKRpxaQtwJZhGR15HzXwgCa336Qgo6xPiAAwJrKCUAsbdrANc4bvfk9TJeR",
  "key14": "2pJpkJScPDq3KtGqs5K3cF4jwrfj36JqWwZ4zvxLD2SqmvvgAhGWjvgwFw4eGdikfNCn1XFeuRecLAx6NCVZwDiv",
  "key15": "4TreZxtiJpZBiJYgLLgYm9KdefJSeG9w3N5YqwjtzzBZUC2FyePuy5YzVFjUjTwMxAozhQFjzAwqSJbrjizW8BFd",
  "key16": "5cBS2LBJvfxwGAiuSLRnTeYDzs3CeA1J6fieaTi5329UgoPKtuUzFj94UNBG6RMiL3ZbQHvt7oqMWJMZr9DNmjzv",
  "key17": "2QmmSuGrY932go9hzJEVa47gAJWdaofKwPGiCf7EU88hNrmu5h71vfA6DJGKCHEXERSWHwjJwKnBoTRgTrQ81Zv",
  "key18": "46SE5dhjtk8CjaAV1T3rVgEkJQVpdYaEWt2CnEuGEZDDaQZ2uzjhQKU3pocQbR47RtVKuvYCJtp9hunDsCerALaH",
  "key19": "4bpo7EzzYkvByKRHv8raXifZ3UYxQLzHCMTwgmS9jU3SBen7gQVe3CrCxrkiC6Q3zCpdGJN7mWFkco26un1cbtFr",
  "key20": "tbjwJe9W5yNtjUbxj8Y5fKVq7Yk8suLvum1Np5Qjda9YDBqtXr5h3pDoXooEpsLMAtAZnYCK32unwBvNgwNp8X8",
  "key21": "37HB3m8of5rmbk3waZ6mHKCkq8ABgZ7ztcEektgpjzWuCegaBZ5RWzDg5M79nLPLTx2JbZKX7VWT9x4Vc7XsQBzb",
  "key22": "4H2GL8gsqaXr5nCEj4ZrxL4QU4x7mRpgEkf6shoM4AyfGgjshyviC7yTeQbFenS8cYQNbG913xvT4fKHAqJdTmPj",
  "key23": "5CLktWfhaMwed9ov92btU7Uki58UUogRocyuB1SkDXi4EkNPeGnjuUMsG7SniUCttj8CcKntyRfrWLAdLH1E87am",
  "key24": "5EWmz8HnhAwEVsDKyCUyPv4tQ43ghEVD5v4XRXbqphN3nUynmj1Hmu3yUsAsWcizR1m1xAxpM1ajMWmwAhRo9Ez9"
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
