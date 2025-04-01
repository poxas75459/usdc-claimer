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
    "2cTqnzefmeLW8yKcnPbXG87UZPR1v1DPkmEB6TJukKwbL3tHKFgyWb6mkWtK15jpS42AK3ZkuiFY9zrcxMCxZ6aC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nb56uJSpV16xCJPPL6L3s4Fcm8tU6prAt4nR1LTPWyFW9TAr29uTEcD4cbSufb6xpP5hKnGhfSJ3SZMpgkQRa95",
  "key1": "59VjU81uiaLuvuPcejkofwN4RrsPt6hWaMKiTDhZt2qqQ6Mv6P9rCPbKA75Q4S7tyrcFYZQhrgn67aVu2wCyiwD4",
  "key2": "5eJXA8jHYoPxEw8dD9CiawncVLAdLHRhUCLsFn5exwgt49ptxAaMCe7RkLciowYNNgXrjHB1Ab2oXy9KhiPMwAXa",
  "key3": "3eBqA871n2sd222NPrRRkUDcML8WKBw5PpeYz9U8eWnutfJJAwmpfv48eweWQFQC62FQAmqRkihLxjZ4UCrxMxif",
  "key4": "3GmRBy32UQGQRZ7tCzmFUbpoLFfKEcmprG4JNuVTM5muiozwA6TZiMVHMxpdp2EKVXAvViSAEfu1ukUUZvzFamwi",
  "key5": "45wQ44eUtg99hQHFpjoPegjeQBf2wdLGhEszc7w2gKasyurPorwzYHDYhLp5GfoHng8oabaA4DgrCvV535GECVS4",
  "key6": "nm52L7HkCiG9evHAL9caGMRxmtLynvSmmkknDpfyfPEh94pR1arwmNznghmhkSQzsg11sZ2xzBm5fdjPNw9ZkVY",
  "key7": "5wfw11ShRRXSTfRQtmMVYjzuYqEFcNp1KX2sj2xTcf2jXotjiGFgxCJbeCcWHnAoFrj6dqy5fbsQUKh4eyZmhbkS",
  "key8": "5SCq1rQSiZiL1Tksa87tQtdex99bCF66RLyhBpvoMbCSYcH6Az8vwDewWGmTj9aTugFsnoDSxgzLCtyxunuVx53K",
  "key9": "2GByP5NX92tky94A63VM91NtVpV5nTmm8Qy3SYaKWL2L3Goy7QrkZkzCUVfkbj88zkQ6bhqTjWMfnWhogcDxE9nK",
  "key10": "35UuZfpktcr3ffDkYgae1oGqJCaqYmLHdcDr72sy4FHLxbYEQqLwAko44Sp6vzp3ummJNZVg2yVCiGeoWbFPKcZk",
  "key11": "3TKkk1njc38sZpuY3i1E2Zxmgc5zUxaxTt4qrAiPVi6PT5YXS63325D9UXMg2o7pxSbBsZTQTiqBQ6JKCghkxSAC",
  "key12": "51ai4iAM9cubqHzzy1YbdciGfjxUgGYTF1V84s2BfKgbE8ERY4AzeGsmwcVhp1DuAqVzpgowRrv4FbCMusZCTWEw",
  "key13": "2BpPdF8mDMabVv6CKPGep6DxmegqRcfcJxnbDkzu9kHE2erBvuXp6r2ogWNyQX3biZkVdZv6PEjjT1FLwYRjERbp",
  "key14": "3VM9Whi6aRp5jnYY6t9HFnZdBtcguigEbVr2hPHBFaggWpei7jWRWeN73kZmXQrdTVgY3oXPKfHEXkH1TZ6crmCc",
  "key15": "5QBT319vP1hLQQSHGb4DPmXVELjecPMKatMVMZgN1jewLCAu8hkke4354zbzf2gYsith8NhPamfvFXoGo8LZGQwo",
  "key16": "2VNM9Y88WvxHqG96fWzneVriXpw7oRkzpeM9wT2YkkXGesHp5GfaaDpwmxMn5HqvTfbsTWKvfPtQRcTds12fCHmM",
  "key17": "HH5i5mKZKdGSW4F5ZssHVtV3M6j6yomFrvC4y4LS7YMGx2WpCvhYW4GH2yqoixrr2Kqa7jaWJHqu4Gt8c84af8d",
  "key18": "2p4xC84tj8RYmJJcAFw2mghZff7t5kwcho54oY6LQe23S2x7CGvExbwxYyn1aKRiULaWpk41maxCuXpWYbMV6ssK",
  "key19": "47npxfFgpv3uJZkhrWkVqNLnbVie8Pjsw8DyC2pKBoEzTQ99DxU3dzw5fKrXFyPhxKymGJdRpGq61AQsvF48NovX",
  "key20": "3HST3gi5qZN3Htzvu8fmss3qZxMJsXcyZVfmB5M7tzVpgkAbTgRnghPgPjYyrXwVS7NBZvBfNmWKVStB4ZU4dGu4",
  "key21": "2U1B1TM3P1gbyRpmPFbFx1S1d25VTRf2wq5yLfhnihfke7AuzgNuGzNJHk2cfToDjbm4EEJ2WSra1sQCDKMrAi2A",
  "key22": "3FNQWrnqdWw9tGyvgzJEijWvNt91k5ZhnYZxxCkq6EBCt96bLFdPKEADRDbRY592SCq5hJx5HrY1UQeVi4GYeSCd",
  "key23": "Ux6FBiRFpMvK8JCgUGPZj1gHdbbrTSShEPYs4KSzK5hUHZHdStwViNM8WYCnZ54dYzLrEY9XqKqQRqU9GPBNYX7",
  "key24": "2wNu5MKNfg5Bz8y5CqkmyZzD8dxn788cGBWq9tv3KmJKzCGzpdM1f1aoho3LGgwvWgSppRdbKMeyDnGmNqg8Gtnj",
  "key25": "4MnVJLWmjFBR1SAdpY7XtMNAPLFizSqZvtHpgwxAYKfVKSMBGytjytrczQu7ZZdn4iv7ypYA7JwPiHenXtL4cG7K",
  "key26": "5uzb2EuFDT9kjNathcHvxwLUjDjLrcNNzEuRKtfaMNKfgGwo1G1fbFp4rP1k5BjoCo3eP45sq2j3uPHMuEsbdoT7",
  "key27": "znoKFZeNSafLoNkeoSm7Z5BdBioDRosJLdke1WdEAZpNXGQ2xgxtLakrCBf5MX8TCaFPoso2zGTAokuvBYPV2sf",
  "key28": "4rCtrCsJyRDYVCgrwxXp54H6GULinu65qZUc5sxEvE6pGGbqR5rBrBvJvtZbWNDAd8UtMBFiaA2Nisg763NFYT1r",
  "key29": "4Z9kpLraidwFaHESWkXg5xPch4M1s33PgRT8QCRdJc5iy72XGwPfh2jDekBmjBETqnmNC81eaWvCJAuZvuthBhGP",
  "key30": "3kbtNFmJsW4pUMDU5cpZHYYpKi7ZaquzF9NQqUd9XMGKEz8NeU3HUA9n45gM6grL1kYqs17jRgsjvwsfBPHB3Tw",
  "key31": "35SW55ZJ1AGYeza21JoVtF7zXntczAhfe2vNUdvdT6YwRXcsG92WCKcY4zx8dARVb8Bjv7ga3s8gqBmmpWvbNxGs",
  "key32": "58XSCB1iHFYmzaNwLjyER3zmU1rh97TszKH3HZ1Qn1msoGztWCn7J6UYYxbms889LG8ue8dV85GhUnox1XSbnLzV",
  "key33": "5qXqd9ej2iPaXzVjmWum5yAWEA8FQH8uJXBBMGQnK2AbWHyLq2YKiwnoJHMkNyESvXQiBZiL7K53tEESWjcEf6Ty",
  "key34": "8SR9e67omvA8cvNi5GR1eBSUG2YZ5vTo25HrmhE5AY6VNLoT3We5TUEhDxnoAHSFzTbMoV7DLmxgazHFnNvUVXd"
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
