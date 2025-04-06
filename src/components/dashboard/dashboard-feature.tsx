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
    "VaMawWw8bzATSQvDJV4ep5h4tz8UQTCBw2sk5hSyb6ju4uRENV2E1ajNptBFJP24jBYtTXot67a3vogDz5pVVqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GZMntvQ7Y6bwzmvSYviH3nKGiU2cLga8bHm9GDj6jp8H7u2vKBpE9u7xpsAfMyp9WN1FqP9LAPzdvGcSm1CBNaC",
  "key1": "48Np9ZUr7QgvNsTcVbfBQEvE4KYNqVrEegtxHyBiYVHVV3sj213rbAjQJpnvXvVzPnWi8YsexxFw7Z58gWxqAWf7",
  "key2": "5XEqPyLQsoy3gwJGNjNXabXNhnmNWJub8A2eGdzyYP7i9E8oeiTc5xNtwuygsxW1DYtfUyrvqxKuvSQWqLjaHdgr",
  "key3": "2R6JpMmcCPxis4SaTm94AfKFCEacfRJYwsRjW8DAAMFnE9bsxhqdnD75XitrxHYo9mw29H4UL4b2xNF3vqohZfnn",
  "key4": "3hf7Xv8HECHqXanPys4UTF5wcnrUCjqHzYV9wSfgK5apkcSDgqAuLYLS2dbZjH7ny4MgfM8AQZ8aj5DTQKqLoEAy",
  "key5": "3bPaFkTF51iGrDa4QFdT1go9akgU8VyKKwsCRfxYa4uKuSnMZRDK5kn9UPuG6HDcmUHh3mFfqG3kstd9eVc2EWxB",
  "key6": "3ic2snrbtHLcCEgp8esdkK5KBMXYpDzMabSgvE3iFp42iapsJZ6Fwx3dSDymCdq5F5wCGXQofi2fvPTxKP5PbMAM",
  "key7": "2Ax5Z4fvEdVKdBZSJZVVM6toBHewW8Ax1uX3x8SKvFuKc6saduVaQs63aJZSHF3wPyxJTejJ52bvQvi2bJMMvJMK",
  "key8": "2V33o7quS3TG8meoWGXp3pXjXbXSuoWtUoffNHdsvf1gk5g31SNyiTn2nGujGQEc6ayT4BK6CFPrJRLSSerBEtrH",
  "key9": "3K4LJWdyARfGHLLWPiFXUKmnA58xS9BK8oYPjWxoAfXSESiFADaWMJVDgn7UqM9vT4dk3zbuBhL4xq3zXXE2d7ts",
  "key10": "mdRnX13MH4MNXjnFVkis2wt4dAhntMvxSwGNchCF4n78W3K2A1t6QoU5mRDyKhGrWG8yuFr7NmaKgs7dv2s36Ho",
  "key11": "3qZUDaQs53AnLtRzjAh7bqb1iW1TGatRSWj5cDmaFbLbiLD3hzxiyKu5WBGbVTUq7HDS4Ty2DEYsJtD2wfDfEPEv",
  "key12": "tB1JGTuB3heduGTwLjJGoaNZKK3nXPUM2DNFPMe9NDqBGgippx8mpEP6MJ9YSPC1JgBrpbuE3TWQjRC3znhNoxR",
  "key13": "49NFgzPaveLgSAMiUps5dttrVzhZqcwjbaNBkLxzsZsxHLuNQwUoszxUoY1shUCChMU4SMETGJG8yV1byspiYQzZ",
  "key14": "FkPNK7oemYUHc1JjvNzZRbCDMJqw5gGx3mQXYHgpRkTBLaax3UwRe2MMVJnN3phhjfACYV721PjomFZMRbHYeRC",
  "key15": "3iUSPsMk3929ygCngSCYUMQPBycTTU7mVhYMhSo4NJF4bNryMUSVNs65CpsaQ8WuqgENq1jBRfR8oAGyWZzi62Ho",
  "key16": "4MPyuxvneCW6CQQXv2BX4eZhizUrq51PqJvLKWTAHtzm4a49aw4ewBhi7ePwAV2ssou1h8xwfRWiHCWcYEJjEb2B",
  "key17": "4yT6pHN5CQLby2fq7BETbHrYs5fLUrktvWLiqfd13u7By1f8AfJ2PrLaEv4aPuaHWu2XDkJ5to9QQopawAnbVjg5",
  "key18": "2ruJ2AJP5fkvbgT5SShxEHEkvBKTZAgng66zfM3XVRPcufxn7UCFXqp3hWp75Woze6fMNnVwQ2LT9xYsQfWECRxF",
  "key19": "543hjGTx6g1RKeD7n1aTFKvdHWLGQCfBJQV54ePatewtGTxmZJwVgEWsqP5AReoYKqPZNCgbpF565rejrYuaF29B",
  "key20": "ucB8Vrxsbw1Y9SJavRH3fkFj7Q5SJodXwYeT1zNM8QoJsRbq5N5oq5tp6pvZ2jmHRySFfHfX13Hga5VWs1dCt28",
  "key21": "24EAjCsheeLSfvzPi3ZqNgGxXhPfysfvPGLF3qVUAy1qeR1ZuzpCwZX65PNmuKe5PrAvkVoLPZ9Qm6wic9Nv3sij",
  "key22": "e4vc4meK3XfZQZwdbTFUwHD2Tz7raBAhdrNGzCZbfoQDLMj2s14Uq1awAiZxkY9eZE2CDf8G55jHS3sJr3kxoPq",
  "key23": "3TZtnhqLqNbg2MjpkFKH1qGh7j6bWGSnTkBWUu2utTAxJq2isGjLqNNrCRvjidooPWi42nkeyCsxPxVCVZscjuYA",
  "key24": "2YpZM6j8nvvE2uw5LkSd65r9e22ePK1DNGVBhoJQfpV9Wzz3r8teopjMUntYPfXNJEAXRoc1jYgARSbi97JTB4pb",
  "key25": "64aRSHQJrAaBMvQQwM3RRM8vsopGkzW9Xp322GSzm28s9DT2Y5pLAyP4gi2RVMJh9v1fJ9BEARU3gcGNBW2wgTob",
  "key26": "2YFApcFU4EQcMQPiArmh22qfA6DcNcpt1rpmMPD4cUnyTXZVg3mWvRzJJDsXmU1e3Je3Cx7BiMBzz8qY9CPuSxoo",
  "key27": "28ya1WQSMjCgtt7Kencw21rjGEkiTU752CGrPBBLJNpLunrbcW3dAycTiDMnwQRbW1Hvtu5y4i1pu7JQbXS9oCga",
  "key28": "26exuattthBp8Mjtngxz3Wjc28J39ALdMJHQ1kJnUuiPLu436rdwsbZvsKRHD3TkpTFRkDj1Yr3B4uquKeCEaHLc",
  "key29": "3DPN9fgSefzpSTZDW2ui1P8ZyasPSjNUmDN7Jh42MV61UF1VszWWSHKbEE8GLnbnz86bGBH6jr79xgTJ8yCkMnnK",
  "key30": "2Pm9wX5bWE26LNs6W4UpMwgPYm7kHd15WAxwmwi7UzGWCpvQxCitGD8NVY5bfFLBSm3MaAzWsPDfH2eJT1ANQjLX",
  "key31": "128R1eC9W4bdB5cimhT9c7duapVS169cDDHpXwmuiDAHhNxALSmGFCYF7WDPkJSv16tn9qckrHrgRWzvYycjixbr",
  "key32": "4PKFGTnUirqS6yyePTUTSKqDj1Pn6U5wGaHshfzEL54EyZAzqTqAfJuAktcAZ6iMKhe7u53QSpA8qmj6mvp459aK",
  "key33": "5NDkZq8e7wQBLpv1rptisq5e7bnZ93GgiDFRPpFvBuG9fEc2cXL8KSd3EBY6tfgYZFpaAptCpSej4us2oa93jKvP",
  "key34": "4e2fpKgEaPivVRxqN6d7Jd37MDfypyuRXssuo8P8Jgj3FUwMF25fpZnGzurcosgeVoaFa8B5HNhuxzuksFQEjc1U",
  "key35": "5e4qZbvKdyGaxvvmoGEnR1kCqfFesyXJASDtKneW2hBmbkZZuMvdBfuqKMTd6voLMDjUBtP33uxbVdKbQiB2zBTk",
  "key36": "3tJ51LrvoYrv5wvYyGVZ4Bw6AAA8nLSkZTqqvkK8TunD6rMTjTKzPQTfL4GFKyferS4Lk6xFJ2zi1YQB2V8wDfjK",
  "key37": "2fc5m2u4u5Vp3chjML4r28JnPTxNZhempZPGc1BFjzz7Rw6xeD2YApUcS39B1oNhQBAAR7DZpAEc3Gdkrpww8WC5",
  "key38": "5tYj3qedj3BtMbjXorjVmVhwyrEFJZA181XixjHcoEv3Sw8PHzjAjnC6qzs8QGVG4KDzisogjPaqszhjWpNHYmEr",
  "key39": "53cXNCht3x8niMFeXu1xpkacN7MVFV5UuG5paH9PFB11rVy9mHPDhFFgAVWv5ASiH5MqaLM3rZQs8AgsM9sXwYaP",
  "key40": "2xYboK7jQpcwmfGt5Z4sojexJEuSZZr56esd3Q8ZVQP3o6pBfstJyzQ462qqTKh8aDsWMQSES3S7q2dqbwVfYNJh",
  "key41": "3TX3jYPtKeQcQM2FcFX5JZhvEnsac89wERXG7XJq9FLeZ1bdGfdvEqWMHte36iFfMEvpwSn2WEEZXAHdibCRpL5c",
  "key42": "i6mDTakqxds19ZHbGmUH3cFbfvvNKbm4WTLpK6d4acRvaG9RHz4YoGiWiy2AfHvh6Eu3VRJm6XYq47PcMqjGKHk",
  "key43": "31XAQxc9CLMW9p6ciguKfnzAgogGTZKW7ukYWJ9P6E9mYJ72yLhescWxmqk6ZTzRJgFASktR6r2i4HNCRx8QAsoP",
  "key44": "2y83LGLbkdnVxcKLUyojvV4tVWWk8uU6pURo3uWfag5JTyErhJF9KsrENJxJt7AxrWddwJ7h6si4EFSCxPuGwaAQ",
  "key45": "5eRUsNV87ynmXpBovsbT1aggjYX2Um6hhA9vJnUk6peWtshv21fRVKxZoQJEmMAY1FH2w7WgDfhtWnLJ5Qcq5LzU"
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
