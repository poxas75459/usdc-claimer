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
    "4SgaR3TNMxuHL4wfouMLvWGJ7MpYdTXUdXS266LGDyQwKmrnuGBjfk9JwovFFpoohqjL6oyjUhugXWvRiYActmqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dPDXe5RTrG6rpuNnMD6245t2JaDAQcgHWsZdHMiZzmj2ZwmuycGeFZrSbCDHj5weDFtzPmm8bLhP72K3FNviqea",
  "key1": "a4yk1rVGxC5KBWFYXpBKvqB8VA9j88ZyVXKydhyFNEBJBdBZUDCWARwXphHdTmsGKDiN5nvxtTPse6R1Wfns2FH",
  "key2": "5anNoWpLajgi5W6EKVgtu5eEPYkfdC74CjVwiCfemvu3WZyRYBHkD9dPNjEy83878VSYawMCZEZnjbT2Snpcq16J",
  "key3": "5r9Fsayaa2ZirBoNJJr3ZCdk7j6L1aQvjHaBodjWf6sk8BQ5LR6BV7YXjmsyvvRgEyuVZF94HPBoaPdBGBJ85YGT",
  "key4": "3x6qsfCxaJBuN6CAdjRHPSB1iPN5wPbjB7ioBHXrx7MYcyn9ystzgtE3vGMo9YxwHucCTJYiA4dwxMUM7g2sD9He",
  "key5": "2KMQxaxX1DPWBuxM7DkJeWWHJPwqLYfELVKgd3FBJbq4BAupCRcWzta9dH6NVRspKncRnpkBsh4U2JHCFVXV5bE1",
  "key6": "4kjJc6nLK8kKBTCJzgaTsF1oKvYtFD5pPhDkNATvQnSD8t1QMUgakN2wYgCqS45vd5fD1qGUedgvXJZZkd6yv1od",
  "key7": "4uABLLredg8goFTT8ibmfak6Bju682ZzA9CyxCND1xNEFKmcNm7SFfPjrBeXNQp5PJYB5GeAJ3fPVmEm27mXTqYF",
  "key8": "3RSdHGD8mJhW6ra5ibxni9Wi2GVWnPEgga1oL76MMKpN4EfxcShBFjDebpTJDiJW78AFC8evHNSX4uVByCU2AFqC",
  "key9": "53oP5JBJYGZx85AR7Tssgyfn3hpfP8bjQx312VRa8shHBSURN5PVAevkTCrjsG2SJi9AQMUM6RBD5bZxk6WCquHV",
  "key10": "34VgR7smsyvzBhJE2WtdEowYmJwNjfuXEiN7X65eRzZxsUoSC45JNpsBxbHacdTtjXWdq9gQKiAob8BFL4khgSKY",
  "key11": "62zGv9LKDpT92N4aByPe8Em76fqr2tJy5PcpFD53yYvzxxi5VVycR9Wf4kAgWrRiXBUGR8d3ZLQWv2Prnpi51xxi",
  "key12": "W6yAqjoy8rgF73vpoDpbbw1MK6MtpqQboms8deXqVDhenhBTLDnc8XkPqeRfsS5Hmko1RQ2Vzp2NBvCe64Hfbmy",
  "key13": "N1Hai6ndxszSDD37udXgWydoGNBqQAH3WQaFS24zeNrWASBP7QkWLJtnvcE5GHDpnqZBXof5wpFrHewgxsZVKEi",
  "key14": "53PFBoZLKYhiaf5L7224uv7BCe3MLHtpF5mrQVVjir7waAogUTwDUYuwtRbL2BNXBL5EsWBQaQCazGKxMbTt4gHS",
  "key15": "2fgYJbwTT6jBRkE9f7n5UWbJGtLLQeL5ChQMUtTUmn1RbqPDBJfMwTAThbwhBsFQJrHAzpd65L3G4hZX9RoWNGu8",
  "key16": "wQ9ERGP1KTDZRsYx7hGp9SbLwWBemyUzG6Dn9YSV9TKLUECFi4mN6TRcGBB2AtPmQf1hkfyWdLcRYgkEKzNeEjy",
  "key17": "29VieYkjMoXWafuc48WfrtCj4Rn9hqP3KnqGtJiPtQffVXMogoc5jKWd2H4BWfxAh2amemn8Fi71nfqKakm8graT",
  "key18": "34oeyJq88wKWSpEPXsUYtXgw6hFSsqfY2ZRGvM9SM4NPkZzd9MGVkroWUjvCfb7MzZPzy8ErcfQafMgM7DgyYnzu",
  "key19": "32GoY9LG7dvMXbxB9xYxrsQe6h1tBJj4fZUb7md2YXagvomRSuVxRReUjg9SBYaE5YdkLQbz2zM4Fp6P57pJhrQw",
  "key20": "3eeUrnPq1sicz2tEa6K5KpfCMwzkLDcVrSNH66WMzEV3p58KasLqX52zWmT7jByc59pW4MWQ5WNCnCRVec4gNTzi",
  "key21": "3joCqZHVuLG1QL1ixC5VM8FreaoUccQsnvHxtchTaXZfwLMgMutd8pnL2EEf3YUjLzP9uprGf3h2TWGKtJiC3WCh",
  "key22": "45bFfnkBJ4wsBVQVpVDggyx3ZmgsQ1S2Z2NY2vgdVGD8PtL78Kpxgb5tzifQr6E3yNxsm4cNa8qQbMtP7LpoWNoC",
  "key23": "5Srv6P5Jde9WUnLJxeMf1pvC66LmvVJkk273VxWakQbtXdK1mvk5Q7VNZjow3BFuRGszxeznQRZBKmRGAvfcVXXW",
  "key24": "3FjrKHVcsWR8Uic1sVrnB3zb9kBtM7wLGEPzsjBHgEJbh2nqxppq1cBo6mvRPD7RymJKSLGVMZ58eGPwmeEaXZ1",
  "key25": "5DzDdpY4eAAAyi4cb26mDatYs2vgqUhsC4b7oSrYiXDCG1cxX8w4MAhKqVpGXijeUoW63SKguRv5SvEGNTwPSNbw",
  "key26": "3hjdnC9Kxnto5m4udmSCh3uMhvonCmoZsV6LG8WPzgourRwLyzZwpw5ewEeY6XeL3SWtymEHPsUWGAvECDHN7YwM",
  "key27": "fCsWE5njHFTKSeKED7zvTDHB58VU788SZRC5ptScaNMrJfEACGfHkJ72pCbJWXSUodB4Ron7BTy1QoNXLrJQEz8",
  "key28": "yDooPuACsZGZftE19xuDWFZ7g4rkAydXZdC6JYp6J3sHYvA2weSLh7pMFdp123yAMY2FnYd4FpsZJtXTYWReADm",
  "key29": "GHiJRPXAJSaXsxzLAxCPjTLptXPAommUjbuMQFjYiGQKu1hRmEKDyqTTQS3Y1UoUfiaN3jErh16op9Y5kqGb7Tk",
  "key30": "4hhunYoyUhYdZFF71wdAxfYBUHn51iwKaoqEbfLPi3TwH5hW31Q6XBAP4iy72n28HL9AGq1vgkNKZXQugn6vvm7Z",
  "key31": "WdHpUedKiowHSSt2BcbVb5QQGpvQuYJ7qKcsqPLbcEJVbkExpQnS7KcseqRZ6cyL8SPwUrGr9pnAaimEQVJ6mx8",
  "key32": "33bzjKkLvnNJpLxnBiZnKZzoctPCisYQjfbqqCmJ2arc211hbx62mVi1eksWfDAjLkqYrowxFfm5iDJKogob3vng",
  "key33": "5yRvU4Q3Y5R6AzURJKfafthvSBosfu3q1iusLLUtiRddNMhf7Xb5aWcuvr9WvLmNC6yUfUymsY9D8v1VrkTRpKcU",
  "key34": "4Q9HneN6LiWNxr8wJRdX7b49RoHNTYQXTp2VRgnCAisWa6JZrEVX6uLZpPsBBkFeyewPgcbXtruwFubAK43Y9vRd",
  "key35": "4st8AF7AtADiNfm3eEVeU9CfAPZTKAeNeU8yex6716cW27MKM6VpRxmYzyRnKRm8xgbiSVQykFP3zpxJCmD9wJt3",
  "key36": "Z8tbW3cy9NTLjPQqykDz5tcRozn1BqdU5q9DUHNmug5jK2Q9Xs6GLa3KobGeUTW6NUB3zw5hcyRcamST5XuU9K5",
  "key37": "5p5mex6yQACcteonpeWYatV4BXwpymc6LWXSRQ1a5zwti61cUgLYd1UQfQTc9q3UPruF7HdnuJggPb9gQJCd5GCi",
  "key38": "3kmaYzmmXNMZsNQPZFeSoQMcefa8GAZZKvG3QvTMS4xh5CuWuQchLFPSYjVxNC3TzmbjE3qn2n7EbBuuEktHPKP9",
  "key39": "5o29ba1xjRw3SVRzHcft5rXnzjV4KF35injWus6eqEeNTVWi2fELD2ymnyJMM7QBgQoZAoptdjKzTtURHxwTPaaM"
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
