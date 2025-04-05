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
    "3ZPzcQQcnveya2U7oa5rfzGSkgxq5XxyjWjGs7MUmv3GJzciGjhg25vbou7GcLofaoQyGKWSXu9SdXStSFYCvEmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UJwSEns4mjWMxnqDrAFAKw3XV6YUD5HZNcnHmVfATBeKeUT3QdYaGNCR39FzVYt5ukCD2osCNkn7J3r4NjaQ4Nr",
  "key1": "2cwkxhDxwWbbnZZDPq8T7H68DxGhVAcW5kw6LZFsM4AebPY8QgJeoy87dSB1nqSray2BEC9xWQZSyZT72JjyFTE6",
  "key2": "EiNs5VB62EQDpHmUP1GxugSq1GGFPTNdcRqdqRgNm65UMJJqRnTpxFTRLaKC25Cawc4bGyGin2RcGu6XeCcYqFS",
  "key3": "2yLRrW9jRCDkdGUrbhgaVRRvA458pYbm3xcRcG6rffAdAFZpcWuuSETVuwDRPyagRM9W3DNVQTAUxB3Uwv98CD59",
  "key4": "57fiHnwQCBKomYoUZCPi3Hud3GSMJfrVfNoZWftqchri4gs9Ysvst5R3pry3F7ngKqwZx6hhgXnc41RmfaQXDAYw",
  "key5": "3t9sVd9ec7fNbFmXAdzpyFyj91oKTyT5JBUvgd8gjBAUUJuhY1L3rYVNAQ6e9VA9AN5915qBdsAg8dt6NKhCAjt4",
  "key6": "BcP6XQcXPzzfNDktaviMxmhwJGSFTGeoQZgPP7QmfHJreB8pK2mgK3uA9eo3aAwf61aMXLAXVsi1ifiBpZf5DKq",
  "key7": "127ECxGkefJ2tX9J8uQ2yJYNrHteJRe6mf9wWCGkPq2J51ogvx1Z7YdG9ZPbggboFA372n8Zvaoxp7C1oKATtkWi",
  "key8": "4jhNaMjzbYjsdr5E6g2HZ9yMHdHenGqZoA9zZD89nuc3AZR4s2sKd28Vviax8eXcrBpYTtL6SFNYK6LseKTinF2J",
  "key9": "5VS7nHHeJMrmhTUrcJ4ycgf82MLR8dTH79xnzhtBzfizpnS5kxZEZKV79oj8h6TUqVVsikaTkJSqttLjDUbR6Luz",
  "key10": "47ahbXDhy7kxuNkaZrNDhx54X4DQNj3TcsPPSNfAbXXvdjeGe6QBdH2kNGwPQM4P5kEmuh9dSm1Y2Rsyud63h2tN",
  "key11": "37jfsDPuucuTYVs45nEahtzfky3Hw27nY6tAcZhnsxnAM22cu65xJBC3N4GGdfaWk4kduBRGPp6mYgGqNwQ8tHoV",
  "key12": "3yxB7FQwHGMzJkPefLBxmRMmgRjXRh4r46rtunwnVqEZQXUMeJEAae7tYzXSHQVazwNzXkFgEWvYQAZi22is19fv",
  "key13": "42hH3PwfeYHjRvpDegnDTSrAQSbTD6Wj3zcAKfsYLEgbKDfwSSkBY4FfzLHh3vkkPZLLLPvhA2tVqVy1N4UbAfhf",
  "key14": "mcoZS6gF7QqUBsvQYpfq3cASCBw1xsv2cqwr4abbGjJPR3evUZojW7nmZEnoqFATcE3fsSVXN5e2dzqqzME1JYc",
  "key15": "w2BrPcGoYLoAtEegCNjNvhMDQiumL7Mb6QbeJud9E4ZGfQbszqyHUMTC4k4Lndbe6LWnkL62LDMHuuNUEQZi4Dv",
  "key16": "66oEUcDAg2uPaJaYFqhu8WV4eMWcS1N4imAgKY7dzFBXefQrJ6zWGxAvdetBCtUJtupD1RwRDrmw5tdfd1B8txkj",
  "key17": "2DRWq7gBA16G63rPZkC1t5fT2wBas4LC4yanher6Le9FLLLcp2XNVRfTszsb1bjUjCBq3xcEiCQ6BEPjygM7X28U",
  "key18": "z5mDzMR3dAS53HnMG4GzUB6aBTG76HXBhQocEG1uizHWnGWyjF5WNr83qNMLtnQkPMnvbBWsdsDU6HZCjzSK81f",
  "key19": "5H9MAe1N1DoSLmL8kuhz2aUxfzsH95XWRJvkHfS38iw21aLPTzeyRNZBu242F1vsiun1XCWasDMVBY2eniTyCgMG",
  "key20": "3wTTsTUa95fejvzyHKYkieYy2aooR4bxrKx49rj2gmHUMNhZdYNBFFTnyxQJ73XB86s36XKivX5X84AiJy3NE2fh",
  "key21": "75CqdZ4uS4SixWKQNPkdeX7HP61K9eUFGcXfbVfHPjGTy3YRxJTa62tkez5huBSJt4CdXhipV6HCZYBz2fyvyyN",
  "key22": "2uFhf1mLx23f5cirN8uoWqxa7sR7MrbLbwfGz99QifhRKk7apSBFa371Cf8ASLjsttUprDuxo51HGkQZniKsazEV",
  "key23": "4HXhRjhTFYer8b97CnhtA75YwGWFso1HAdpPbYbT9WSYgmNVKTjqvqKN2qqMqjUHtz6M3j4rjcrFN34aDsWqEhnJ",
  "key24": "4bqgcFVTCGHE9RvxvBgADKYoa1f6W6S9BMbJkifTmfAadZuvjMceYUNDK35pfNf2bpdBSeCkKUoFWvjtimRi4etE",
  "key25": "3utciVLRJw6f9vDZE2QXXa6iRB98nKvTwxQWecidqwYu7tg1b2tNoXZSPyTQa7wPPcGRBsV9FVFVW6h3uHQCaRTk"
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
