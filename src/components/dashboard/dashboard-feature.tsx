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
    "3BfraJrqrcvRvLfjhnicZYDHjwHvtnKLvDDhrLHRGuBefosdUwgqn9aSJHNzU1nXwEUA7u8yr52fxnxUwxJSCYCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ehNWAKbNTTVrwSGns6PLRYmwZihHUBuDhsNNhF5YVToHUaxav7zbZ3ZTuCSQmyacTnKSrR57nnT7r9y3jQQ4f1P",
  "key1": "3PQgpJxot9GYQNmqyVFyNRQBVePWagpC1pb58RL5UCqMs8ANv1fpCmoLrsgAeF4iv7JofZPV3614cVNVBwZ5r6X",
  "key2": "4B8YYcsvgDzHi7ZsqnKxUPJisxPhBm1Wkyxh56JzyYA5Uf73Awodox3hohgyrAzRnw3HuNyMrTEZDiXm5GPiGuai",
  "key3": "67R1GLUHhUMFBX81PX7uU1w3KqncDdee8V2xZiDFRiKZvS4a2LcAwN9FLVRzc7Lpqzkcq1zB56YBzfMskUFPkY7V",
  "key4": "2CYXdd8mDW5yKRZqKSN8VJ1yLA8A4fBBCK3rhSDsoCXWZGmgXWm3UfrTH33mLW4x9S3nMkr21taUHNeJ6xwVyX6F",
  "key5": "5TZ6R4ep5CyGNP2y5aXP8APASPBs17rQePbJTfuvHxdrm5jB1KArsXuKPFJfc9dKrneMsvLUjCWzKuxZDjdaeYR5",
  "key6": "2EyGkrxLoYrSdxJcLSFE7NntyRQMZgMYWNYVacjRLyqPVKuFvuGPNWABxMP4g37JMSYZqxNWH6x9t2KjbvazGXuG",
  "key7": "53ZBP5CfUsjMTFzcz7cup8hF9q74ffZdJBCobtwQKr4m9zFnqPQJqV4FYXDLhhnGdCQxgWfBzeC5L8p6tcV8FJx7",
  "key8": "2NyHtUL7hWT7J95dk34UnLRQQQC8ktXXyJPeSae6QQ2ki4NJZCBt9ihzwEvZfPrkvhKqTJ7DVdPusabgcuCLWRpN",
  "key9": "AjuMV1ZVXY2tTbpLmps89qrmXjqd4vnurqxASLaSNw6BYNszZT7a5Jj2cV7unSNKrc2Txs9wbZQHWqPbuXNJt7w",
  "key10": "5sowNa5xiBkzrxdkPmEYY8jpwV1PZdDSLpzmAkvXnSHJPDEd1FfG3mdTG3uWTkZV97rXCicmry2kN8y5RcCmLWHh",
  "key11": "2Ti5iFdaRWJH7qG7ZCSGoLB6BLmgzZJjSBvunM99pHYn3qoMz1fPE8AbqM3Ne7A963Bwj5PGRm3pEK1hcDX2d428",
  "key12": "2iifVfmTemAs2WDFaBKZmoRgPwjw8qwypT5KpxjSZuR8nqWMfspodmwY3JCvD61Jr5Bhf8EXG9prbTCVcnP9XChT",
  "key13": "4oHikjBZUkH1JY84vZyFCPYWic2vfCNyfYQG1udm4rRtayKQoA6KkiSzVCeix4R7XF2F1VVM7m2zutpXQqwSWEAq",
  "key14": "2XfN62GFE5Xgiop8iWpDdGL8MAgUyLzsT4mUESMYdstR1fgFfLSJc4haktW873DjrNERrGnoYxaZZRG8wavv4taS",
  "key15": "2vbUBxnMsHjwsY8NrGMvmR4z4sFsRTUrcghHwmHD8opdwVZz2Nw6BrrdiasVmCw1Xg8UhcW98cBBAsnmRx3UYij1",
  "key16": "3npm2rE5iA6iCxF69hKCxnfJUpyamdCPfwGiaksL2BgeJ5RFKyV8MEnvJqRoYB6EUyqvivWFy8n2xXq4rw57VeQB",
  "key17": "4KqErKapdrWzGZX3xEVC8kYvPenpm5ezb2pfQPGYZ3Z2heBRcZNVBatLvE9qNNT5W55rAqMbLWrAeLq5Guk6A4LF",
  "key18": "26PaVGDAF7y3F8xf8yYQGf3nHFcYhicuYNfTGPKDxvCR1z8UU8Sj9dRjrG41EcxrpnmEJq7WQYcKwCCGcGsTjPxM",
  "key19": "4QVnfMCtabhSviU6ybxH9kXgKWCX5JZEEKGJSWyBAHc9RHCkcBXhstVu6rj6RzKNTsYC6npoZ1gDLsREVdCpbrBd",
  "key20": "2HRTME3czH2nEgAWEcNaWhtWXbKzVqtYq5r7STcFAhQA8YqBet7hTz9tX9ukmTJFbPfbU8s43dNP1vbNm6abigYj",
  "key21": "6T6XqQJsNcKbGmRmz2eTUDBRZXMCFKJYtnVzQHhSfDcgsLFwnKS9uW5N5eJLLVkRJL6bexyFBQ8x5noB6X3jCic",
  "key22": "63LKc8r4osivAAoXZKTGNE76uNywmvzG811mmLiJUt2DzNkqnx5aJ9UJeEXu6w3ptJoCg1qXFEtpGCBaRT13jkVp",
  "key23": "4C55Ksd42j2zneFQEFvgaCKqu9jhLRU3k8e5TQDhbUbmToAPt9CmNfTnLRtKY9jWHedgkVSWdrtvjU74mG5PPgxU",
  "key24": "4L685RUa19JUt4hb6vHWqtMuzDhbsW8NufgrZftWkZ6R3RbK2R91dCXTcKKSNpPupCLJCZDtagMUvz89FhbUugq9",
  "key25": "KC81vx6SDUFcxqgWo6ieexBRQkoa8JwX8e5qJN8u2BVG6mCTQRgTBSKcvfpDWYzW4o32XygfEBX1sFtiG4zx3WF",
  "key26": "mvWa6zyNZJ4oV8opydTiikwU72RJtDK6Z9mDYDxuugCShQf5Py4yPgeBVwSAs4Bs9YNEoAKVviLvW7Z8V9FQL82",
  "key27": "VJ4vLBqh1GE16DkCMYznmDqqXeU61xuAMDGHs5u8PjJGRBNsZ5WSqpMxoXgVEUytApG2Ft6fGfa6BgqAEc7m4ZT"
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
