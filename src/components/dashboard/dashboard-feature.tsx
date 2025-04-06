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
    "2tV7V4n9xJR8NKCmBXNUMKez1nPqFEdjFJWEXQYgzHookyRVdpyMz8Lks4PFSeV12SkvKy9QyCbQRPg12Ds9PAEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YyL6ouT8WdyGga85RGNGh3LrTrjqTQEkKeDCdUMn9U5BqRrJvHYkCRnZWuGHRr4pBWhZsjWSZqQ8mwLxA19zvhg",
  "key1": "2gzW2E79AfhiAUXw6CdZmv92XQa1Lq3n3vhe4LxWBeQ1r9jc7itjNh86R4Yo1gjXKgRFZAWSELpg6WqiAktgxBgk",
  "key2": "3f7ce23EvSr6aj5NL2aBYKRWRKVGehijb2Uo9szgjjQ1DV3BdSHsKm7rAh9KQCiuWpLtADp5vauhKeo5q2V5vftG",
  "key3": "cDyUgtH6L7gZHUPkoKmAgeQ6mGXvmS2VV5NZmsHbR1rbFVh3G2G1ab2CrZSCVjR4naKniJ1cQKcMjMQCsmzdczK",
  "key4": "3YoZ8xVuqrLw1TUU259nQ2RKTrrMK2JgKtaQo9uvWSjqjPrGVxx7BmHyBVRWhteQ69i3CUBwocFdtZbFEY1xoLDq",
  "key5": "3UAgWxRMV8nwo8R6q8copJcVApRWtaPG3MzqfFxUKM3EoYE4hVxHhAcqhw8v2VXJtqRrLo66eR4ktxGJgLG8W5dA",
  "key6": "2zVtXgu5rUafXqPG8WLTUBfyFSkg9AmTeLDk5gM97VYbG417dbdDZ43pKAV4SoBv4eRX7KEvwnrjjZM8Umq88hfP",
  "key7": "4c4qQexumHXprKhTV5HpSXYQjSEmE1Ktgi5ZEeLmaW4XqTLjoSwSd9v2zwzZKWWCeMToRhwPDq7HmJWxJLV89vXj",
  "key8": "5f2f2cKGMK8s1gRYuveaAUBvCHtsuXfPQQaVd1Pf9CtEdnwzmxh7BxS5vj5EYsoxGdEXrwzDXHuBVBAukrRZuV2b",
  "key9": "5cZNnruXnHt7Z61N21eajVcnYECPKRh4cH7ktEm9ocezJWjPnSCVDk3MvwYeUgWW4yFJoZYEMAaDMnvzmWtZJPxa",
  "key10": "5WPHw2ZuLn2NsYTMWqqQvTk3LX6kDFYWGARquUJxvSo3fArhJ1MLvauz1TVf4LVBHUC2oLjoBxBzS29WPHkuNShN",
  "key11": "5T6JxzxwCuXMzKAHrvhfLmT4vdZedLsuN6aZrJzYd6E4BbL2bMNeaXgi6ZS6BjxcggVbWFQcheTAUMtACWe9CkUB",
  "key12": "42J7qkHx3uGf6sekdbSfcJbyhABAATD4cBz8SVS4kcXq3yn6uTy73Kyjdcer4TbKFYsBgqLfpAyE7P8NTePsm94Q",
  "key13": "46hUQBqixf22nuSE8Kba1HeaaEN12LMZj4atTNdEBx45E1fJF4RheWtWzLmFX8dFjGcV4Q737UiZehobBEJys77d",
  "key14": "5mw2gbuSu5F2ZRrhW7EhSMDTQ7r1w3dwFLmHp7cE3pRvp3SgcsMSzAQquRst1uX52qZ9SEsZjfwc3KVZZQ2uizZJ",
  "key15": "3C5MyXzUZRcjWDj8DSwMp63YGPJcpyF9gnJpf18Ajese18WCwn9YDPJGt3bGQpQj8C1HohBtYLxSAN5NderbeGU8",
  "key16": "3zesSf5CJg7cq2js2Fg5QfqooaTDmoDTd8Lffeevr7biXuYXYdtr3jJPKBbWwLMVCvG6AFnF5fRWxEZQTD7Uu7bj",
  "key17": "4CYUqY3jmpjVyRSS5JWHyqHV1bQe4KKuAJCedD786mfUVn9UYnCL5hBmy6tUMxPH6re8wXEyrJamQCbyyLWDCrsN",
  "key18": "Rz1Wgf1rFazMAkttyJwnxvgZ3pGiqk7bF5GFtbHyn2SDiuEPykSuydPaYBK1jBtCDMYz6haZBHqxiSaZVc2BNLj",
  "key19": "4YkuFtrE6bJn2smVcMCmbFcvWcvgKtYBQaev6ESw93WSA61oFinSLC4CcjzWxQkzFtjwVPX1piAeixR5AUGCZcQt",
  "key20": "3ErkmHWEB9nRHGN2fgaH7HzDrnKXWhFeNHSzNtqF3va3MrZbZ9V46NsHPU5g4MXxvCLqwtWByJ3T87Q5oRqAsxXx",
  "key21": "2PGFrY9tqKkaVRN6F7s3UAeG2CeBsXroDYTzhyfAdnv5vCgYTx2UXoiX9ZAsQbPtK6Uf8otoMGQAGGeadFQRWftA",
  "key22": "1bmUVeSnhZQMXyH8QHFCyTXpgFAJLKdVV9squUdCinP4Cu14SF2qL8SEB5kSnuiFypcXJYjFrx1KR5hgPJZZK5F",
  "key23": "2AfnmWJdgvGM1CXGdJjHqkAwonC9N55Pbn6GJZ7QJffkT3yHNMBDcXVc7HYcjnGdhReeMGyoVb2trD6GkRPkTmfS",
  "key24": "2VKuGaaXQdNyFUEBHnmEvGdvzV17oLV3dqm4iwnMPDCziEaugKn68C2Fos4xtwBwKe4NgVkCwCPYTyz9Bu15iB47",
  "key25": "5JXAFrbBq9AhjDksJs4wtuTa3uiDCcDQBRUd1tizAoA7LQEHKfqKepEAX6xQyVkqotykPiBVmiNWgtzs617PTsDC",
  "key26": "2afTGs756Ti3HmfuZ52A3FeoRfitHY4rPvcncJ88wga2xkiwvGPvjYmBReHvBJKrti8Vb8jdivHGeb1PRK88GBaj",
  "key27": "jiYVaHpLBJmm1kRXy8ug9Sv7CKuVjtFpsmzeZzPRxuMzqLGUAWKgLmWnuEGo3LTSf5e8BDnT7suVMyDj8eg1GY7",
  "key28": "m1E9mJGPetytu8xdY1j57sLaB9JKVmUptDxJwqBnv8v8iRBSWVmEq4KrtEFr5ht6hbHdWuiXShR6fN8ziMBbk7z",
  "key29": "4bRESqkVN1bDRYjBmP4TGPRPk9k4PRuLJqw6JCD2d4nZfN4q4BiKVzZz6Eh99mzNsJzBtLzCyMnbotErNc7sW6rq",
  "key30": "4c8YZUP7HDA4MzSb2SyW2KjCpPuJcCRgw1xnG9uQpcEPxbyCqEo4DdWqKDuNt7J8edET7UjFQWDGqo7HFw2dmMVt",
  "key31": "2abnJ24qmtAApc9UJ3SAbjH548Erxra1VFRqk31Wm21sPM4bZxAN3dcLcbBdGT3nFix2PddGVBMpDh3fgbC436Hy",
  "key32": "SVXFhtLAPiL2pu3S4jK1pQDUzYvmoN9hmqB4v8kxavkXPgvZhxT51nSMWE3oixS1Rtq1gGfrbZMFM73qsFbmtNG",
  "key33": "36dhejiZSmUwrcrN6EZY8yyrJkxP9GQqwnbnMdoMThT72tej5cYEDh5333PhivjsDeCENyfH7BCsLn8T3M31D2t3",
  "key34": "62491vk4zb73eRmZ454ajj17TQwLYkiaE3yhihegHh26WazvnwwJkbSW7eiZJKrLVXMasqZxTXZVZhsg5QJ2nwtK",
  "key35": "3nTyi6mUco91KbyRUcM4avpnHQEJBZrsa8GfKGY8VJKn1kJh67q3Gtcc9A1sC6bL7gLBKwt6XoyZmd4yvZhLkFR4",
  "key36": "2oR2dthMfnbsuGekB12g7nbNn76djYtnPZTFVSuRLh1ULhEXi93J3jtC7tqTHpvZK3CmtLwszF7XtTTEtrQocb8y",
  "key37": "2LKEfKBxo9ZxnqWjHdX1QUuXakUSbeSk4VTpoFtXyg6RCVG4htUpGyKZfzDL25XmmZpsVvAtazNib1HNX4ryEULd",
  "key38": "2mwyfwP4ajAFT2KiZXjjvGYzCWmTRJr7QmQHMRfnNqPqU4TRZR1wVP5AmgKJyrUxN5ALSHn9NyvquEgNCP5myp8p",
  "key39": "221QM8poQqoEmENt9w9fTRPmwnJKnKhw79d9skJWiNpAiCNjTg1P9sNV1yQDmoZFkmcS9ePevTdiSzfyBDsv4cpZ",
  "key40": "2Akd8SCbUvbkY6Y9dgM9fFkZHCHjEZkhMuXLHDv8RS135NxTjibYE42GKaYCSsFB8WtjpQRt8K5NM2JyLWctnbuf",
  "key41": "4WNBbk5jmL344WxZJtvNTWLCgavJd2JC9j6r68We2K5YMtPABRjLiXxi8yRaHe6mNEtm2KnoXr19pezbuwvsdKii",
  "key42": "4dYByzz3pnzm85UoFojwqHftmaxYpfgQDgWMShTcyc17E4yoxsT52qwAM8vif6Mfe7979E3xzxvpPYy22LapT7pk",
  "key43": "DGC1VsH9xTEPN9RZhHUHKF7Yb8LCNg8UdFf1LPNHE4Cpa8vGiE1RDTU2cLxehv3iUHC8jiHRVfDiTSa4feYCi14",
  "key44": "3MmnQe4n52o4Sf5h93wz8NgtCeaCgBwsnX3No1futTjRxggSJZQBPBThpYUb6d3YbzTbM2PTYGxY5do9Bky5DdYt"
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
