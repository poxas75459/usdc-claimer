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
    "5wgWogHtgAD4ysda6Yb29qZTCN4JrMY5HK7Pv3Tu8zmFmM6mfdU2F9TeXx6uR4nVKrDHn9R8jzTWPCJhzAZHCwW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SyNLpqt7wZnFPGw7vYxxbyW9YvJFpCCYkmV6Rjwr5G5zNWSnDoJhqFF7GzkoHyZJqiHKsnHUAftYWUCA2DqMupW",
  "key1": "2TPN4fqBCs9VW94PL6dG6vPP85Y6HM2kmBagm6iRPhgdzxVQxeBMC7fJXNXMnQAtPkAMqJTAufosUGNhsvQ8W97G",
  "key2": "4a9j2AHmxFWfFcWE9KUGyJFjhjbme5F8uqsfhXVQhEMY1AyafxTipQG3f4GLUYedGXmwcqzJ5NynVFcN4ssCfXFF",
  "key3": "4cZk6gZyeZL5SGBgUFwuTiwQriErkFjm4zkfSwG6xqFDrhiTAe6Qyk96PnbPAgukGGSStsyuVLY8YCgju9mBuW21",
  "key4": "4gm9ZKufEavNGZbQjiPxqRKMvwho7qWJqXdSYNr7YuV5EsKoDcrB1Z9JLcwCfpu6medwPpteP3RHHrNcvhaYxSq9",
  "key5": "2R6pxWJDAZRuUdxYjJURjQGtLAuUhLsRzNiTBDCahroiLP6T1EMB6X64jiW2HXXdgBZWQaeUK3ayPVssSz2oMru6",
  "key6": "P3rjhcfzTwLR39VRfsadVQ2aPmHuYEuMHTSkTU4AZDT3Zhgjgg2hrQTk8BLtJqxfPRQ4izn7WT74WxB35VE8xmD",
  "key7": "azyMXrvLRjwF5TUVws3n9xNPKEw6YHSMexAFFjt63cg2z73EZnCCP7FqkpkoyoDr6LMzQpM9hmCv4WmEnFbmbaA",
  "key8": "26475TirQAmDmB5A8s4o11tYnAfPaqEkrownCRppFmpeV85SU1ZXMocrnGyYbCce32n4uv6PVGn1FAUbybPMYvf4",
  "key9": "5pFqAChZPYdB1VwW7TW9Zx7qRN7JhKcZBWPGYDAEgpjorJnD18KSgw6XLarPaTqY1Zf8ghqGWHXaxwMeiGP5AvPx",
  "key10": "4AXLMXtFybjoeerd7LyxfY9Vk9K4dnL6XnDHsW9CXinGfmcm1mv56qadFZjvxqEG8yom6JdPzUvVYkpXm2QTL2Cs",
  "key11": "5xtjT7YFtR1RRpDAe7674gRJZy4V7NoBFFjmLLEgzQXy9agoP4GModQNNnedEbYsG5L8UgtKkub6yRvPByB6xMve",
  "key12": "5pAqoSzuMtnDiFGKPfqhEC759cgH1XT9KktKKvvDvrDVf9qByhojKutxeJVMqvCAotrVuXtvstaMmdCss44EqLDM",
  "key13": "5KepEkxC8dPGLreNVg3XuQy6bPh7biAJGtmqSuKhB86njtiBdSKaqHNisyaXYfVMJpstjP3SbPkzGd1sZF4YeBAn",
  "key14": "46ETwJeEELvPsXu9jq3m1YMwWDd4MDuGcbvb9eRfJCoBL3bjr7oVJ2SQWqJrCFUN3939qHZuRxAzY1rAfsL1quQn",
  "key15": "2wZUV9xBdvFm35CmbPruJPjvHSREWRZdtbpSxPSU9DeuambKHM98Jbq7HSkNpm2jtfGqq1xU5wV24U6MG5zSeFs",
  "key16": "58RyfNa6o9sfKch2mVfsW8E8uT2aHM7KD51nXsJ2Yw6M8wFhiyFSnJuZ6su1v3kMVBf8DNNjsubs7eqkKvPJoXUn",
  "key17": "7hZpwjeWEYkG9jHcuNk5cU84P8dYA9JnAVvwRa3xXK8tKz5MBEur4HSijyoZ5ChUB4AztzoWgrfEHzK73NVvFvH",
  "key18": "5TcpPpJQjsrgabr3bhJQ3zz29gxiE5MfzCwHmjydrKY3Ex8swF7XfAsNUNz37iSjBTuFJAZqh5FTru366tJqKzAM",
  "key19": "49RJwxSgdFBFJC7uwyF4NK9Tjcx7wftXcuC5paVBPHzL4mRWc4Bqm7mv4JTSaaE4JsEErbbJ3rLPHEcgY7MAMnT8",
  "key20": "5fFURYXqDK1Hz7fcciVjB8PYEUZjvqUyqA9RtY5nKxEVrydcm61hYBzAtt8kYQjGRbK4tv5snGvrZri5fnFHAnLy",
  "key21": "5koa4DeCspZwkmvzeWp6Jg3yXEpEcHFgTFHEgb7Smnd2XFpdJSTSkqWoTyWuQpbr8u3JYrqdF3LHWh3a68ic1cez",
  "key22": "21vH5H2LAPMgDYesz6TnwVd7X3ewjJ3BPmhm3wSnds527RNUtWMcJG3ba1s3LuDB6yd7UL755bLZYbK5MhctbA1R",
  "key23": "5J4zLjC5hi6u6pgKRwV53EmA92rB11CJZzYisj8hPQsEPzyLdyi14zZ8gBRGdS1PLAW4BfaBQtvt8wWYjA73stDF",
  "key24": "2WQcV97qsMAusoSNpAtt2ktD8oifrQFSLFp8Y7ji2oDawTFK97DhS8dBmZA78S88ApJCtpRAmgDXjq6s4kkMxcF7",
  "key25": "5TvorYEjPb6c34KApta5sLkxTQ9b38NMXagE3bcAhNbXeUD5U6KwwXyyKYQtfJv2Fs16pKRsAjwV3bmSuGajLiBn",
  "key26": "37SotWPPU4zgziLLNZBBqFBes5TQ1dVivavX4b5TbShQbpz3TJVjqNUYoPjufxuxxAQRLQbYm9qvAYpReeK7Hkpr",
  "key27": "VtnaYfJVHfZfeFGnbkAaVfBuSK2zV248Z4ZLYXxAZSiFALmSgzEbqL9nwEKRHJBrzMmuD99rYFoFtrCMve6WkoN",
  "key28": "4RNSh9DpUwavy8LxgsLfSJUsXJw1m9jKvdhiCkosKN8osLtHEcHUrdE3aAmCP6gn2VABUUbVkjhWBGdv5Hvkm4H9",
  "key29": "3YCenrJCuEEYfQzVdPB5BrAkDzpm6kgt4d86ceBMFXKspWzQDtuwgT95rg3gwUJbeQbfc7fFT4kvoKT3wzyfhypT",
  "key30": "25rCF7LLQYg1NTmbts1r79AFeqhEyUz2rB9rJZnCEZyvwZwzEy15Rvup45nREzxfaigYUTmZjdwHYMyGmDC5NdQd",
  "key31": "53cZ63o7whbSFgp1XsUEr43scXSjvtcdeAxRMq2BtehPYgTwVjWtwaJXK9mnUkpyVb8aiPg7GohjPXheRED5EtaS",
  "key32": "5ZZ3aBSwgB7JZv4xLic9SWhkNp4Jgxp3qchvUj4XMFU9ox4DSD7nMUxZeHXH9Dfupzox9tCfHPEzw8BPQNfweCDQ",
  "key33": "5GwdoZ1x8t2BckM7yft6DxfyTVHFRMEfQouGFGYYtmtyJ2hqzJr2PCyQ3mACpyAMW9FJ5SNHDwSzkPrMgkPu4uAs",
  "key34": "41sBtUPbQkKUuwx8ggwKAyyMXHJxRHvEfxaAtpBHeMBRGwDdgxEyTXQPtpAN3ANdaD7pG4n24pCef1T2rxt11t6C",
  "key35": "2b52wWhiPebcLKJ3WNNDQh5G6cHLgLBPrXifvxjuNG45VqVVBHsVENQgDybnm4yZ93qK3qqyWPQP2a3zJKCg48B7",
  "key36": "5ZomucphQMA4iiFnbE5ynamHb3Y87u92uoDgZToY8KWW3NpTYPtYQKwMLZ9u1z88dw2uV6W1z4C2NEdsy2pgb9eG",
  "key37": "48pwFnsZyxLziEZUtzAPkDG7mYm5B3c5Uoqv1pvU7oGzb9wWARDqVEgHLvtCd2is56hetHjvDDF4vfgeMGec3gLe",
  "key38": "331eTcoDzLipZPx2ThuEKpdeviaTHchRhdRegHoVMB4EcEUYCLRm4chJpCQsPSYNiWMkaLT6pK8CUs39PNijx64K"
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
