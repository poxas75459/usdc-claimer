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
    "2c4niFq2pyhCDnoUADgwnBXvrTgXb74LgNnHej7gscgVjsJbsnaJKxUCcFkQnCx3qJeaZfg57CEWzXvncDESfQrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xATJo6S23cvpjTiqknLKwM8gsefBkGTkBH98c8VMnEXmLiJoL4nthLeqjmKpZrbxWZv6RqqUfjcRyeF4VbszYk2",
  "key1": "hhm8VqQAwyuxHPLaKNkDJ68rYbkUpBMKSgyHAgDWDX6Dyk9JXnmsEDm1WAHGLHAGVS4sh9p7bui6qqUQ27enVyN",
  "key2": "21P1fpGitUEWWaANbYo6x4ETHDm8VvworQxkZYHjUEs4z8grcjGUSRzVf6eFcutWo982by6ccFS5KDn9oAGbMNQw",
  "key3": "3fAXeyrrnVyAZW9Kfhf6Ben1JxWREn79TVVg1iodP6mLVheTQvW2JPYT7XsiZyZHaSqTQjgBhtbKd1rMfubXsHh",
  "key4": "VC5xMjbuxeowab47bd7mCr9Z6LhtuPg2z1ot5u45kT9gJ5YQpYThtKzsUrWv5A27f7BRGr6WC1CMP9pUJzst5Kk",
  "key5": "2BhPofiahNnJ4SfN39napAJjNrG4eKmyH7UMaF7K8oUnurfAZNrmqCfvgrCGsY3mPzCbq83q7MPqLNasdJNJNSDT",
  "key6": "NvaN6QjN8Ea5123YY1svHhdXsockfFXL91oz7moVPcLSBuVYZ6Gm6WQ2Mwcqwnk4fLcDdQ3ndw1S1KpY4iAgwJA",
  "key7": "3MVRpBSH8Nu4LcJMCjVZ7qsaKpWfgqKCCmyFMGuUGAUryVCq6K6SyeZSYuY6GfhoskCZiqn8oJ6krwyScRK8sE9F",
  "key8": "YWoBH6vRankVnxkDJxWGLxgUjY1XuFfFLgBkyGpApzqWeXFMjkFVAWaxz7dDo8cku8yuvvNkb9EsJCGZkg2pVA6",
  "key9": "5S8ssZ6y8fRFSQpT841fJ6xjDDw9ebw25xLfKiee8ZrQEDWhADF7tMZ7WD8nmABfCYuAJ8rmxt9HEDm6T9HnGk97",
  "key10": "2KvMdQtQUohciG8VtAa1CFRDiTX9bthvpi57L5dsQ31qc48vYjs6yhay9eDYwHS47uSjehhq8i1fLBSLJNjpct68",
  "key11": "56pGhi2dfE9v7JBK8EWgAkhSdj73GvwoED8NHSu2DiQTHN8ABJakHsFdXSZXCYgHwEjbKpwF38F2SNPFUXtE3yix",
  "key12": "M9zAo5huorwsnAvgySL4TrPEzBc8dKhBNHh6C283bTxnLB3n73bUb5NjpPam5re38jkts7zubv2dG3yFSHk18yy",
  "key13": "5r75B5oHe5retZo5237gMUqHESs9qAtvSdxnZRGTvhUgs4VQAE4o9DvM8TzgrpQFeVfogaLLgUs63yTk4oRQNdJW",
  "key14": "35sP5eFEU8VwbYzWc9aqgX1fkh3yJqAFK6rWMbaoa6dgXX8mkkvCSs1y8XeA38ptwBPHyAgZfXpvLbbqkXgegtxL",
  "key15": "3AQmCLpYyDMYzkjKxgYcjZcRS1KbixcLJR1KYosiiPDjK491N4T2T4qAoPEa84dhGuSHj45e74sdkjGrLSc1d2je",
  "key16": "2HDyEW3JvXJZzxapNNBFKpfn4bMjcdGSysAUMZYHtKrKmrrZG957MjEAKq6W5vMSGDvDrmjHEra4JUmdJcS4AvJ4",
  "key17": "2Ya4fuwzufTAxT4ve1XqrC3NQPuWPxaWaaJqM9BuYBGkgPGTp4GYSUBVUxN7CxrrVqp96msgpw5aBcAG97GRLY8x",
  "key18": "54pctL7cJt3bL6CVX27K9ajJtCYsmcUhQsuaw3SBJhxZksP3MBV8PdRgVScsmAbiX91Zpa63qcbk6ezqcJXYRCJD",
  "key19": "5uRqHd3BuJPGyNRENewCvkg5wVkNcb9iYuoxbiXYAy3G6MMgumTe9ww7Q5RibJ6Yd9Wop1v9GB9p7p8RBpWG35sF",
  "key20": "57sxqmU43WFWY3e5G4zkXZ5rVxzro7yhSnu8uSsYcfShbNvv5iThSUb3n5frn8iB52b1rrv2FoBhttF97DAsj6R1",
  "key21": "37gXoJe5MNyN2x8y6aFyw2LtEN5KM5FkFZEXGivgRynXYf5r5PqDwn19e936qtkNatUpSgJ5GVd8DXhPZwp6H7LN",
  "key22": "5AtpESE5LVuXEbxjc5gLYcBEfDz3vkGhFCnFzvKSVvdmL9pcWYSiaTEsnVrTfwdCLPt6GNms2ygrtUsCbKGGkxxh",
  "key23": "5ZJ6Qwq7mjs3h4hRQDy9LNkD8R6VaXHimNymJiwr8c9sHcGV7gwrkEVYeGTZgYoh9ZFRVNEEJncY516x4q8UQ3kx",
  "key24": "3bsw5W3Rui7nC78mPVZSCYGUsZiXs9CiVDtRJvsxAmCMseuBfhABXEWmd19NSbUS2AJEtoexgAhiBbncvLDkTrME",
  "key25": "4yUTpapJovL9aanAgAKYAcX85VW8yu1oNNUqmuS91cjJkYvKa4QnQk6pQcXKTaX2UV4ojBV1dtFQ1ghgeHohmPRA",
  "key26": "3KH6tN2a7JQo6VLdYCFBRrkJHUvZYfUKPNduGSWhYc6fqKbHnxMLyVNZ7y1fapRcY7BR7qV8zTn6m8743Uj6Btir",
  "key27": "45wW6M995yxEajdC2tdGAkExd5a5eb6rn7QV6fxUU8WVoMMmD6pThcieCMW6EdphU1KYAJcsHZ7Jf5kyUCzDHkyy",
  "key28": "2H32zJkvLSf3KJpuzcGhQbYdtDrN9ZzADCzkjxiLFGhKJCyS1ffLZXUD7qNPAaQ4YQSv4Ne15Z8kVS2xTpehGNig",
  "key29": "5NhjMiUKSYimE7k7u2Pbz1dzQUDzitco148QQm27LJ3esNqzwx9D8Y3TdEUDkiewtM8bbp88usJ4hTUGa8W7AuCz",
  "key30": "5Zdes9JwUsc3xwpT33Eqy6xHke8srzMY2gmy89paE7oZhBvktW6v16sLKvPfapbAhZ5vWQdnkS5Mm9e94fRMdRHs",
  "key31": "3RvT5jrZXVhbbWBrQ5DV7ThRUYS5ABeYj41FXhTG1fwNzacasV4jxgnhkP8Hu9Qd2vapeVWNedDSwNfsR6vhxWkJ",
  "key32": "5kLR1DozKN7BtWKthfVLZro9a82zpZbQmSsonqFQnYGvDhvM1ZkkRShphbph1Tn2AEbdBtZddami24cfRwaXPwhu",
  "key33": "4h99cAiThGkbWUVM3KhKoiJ7HWTidqFXSD5jvSWcMm7RDBxiryto7o9kWxHRUmc1Mv19t7LuB2HYdkzBocChCeVS",
  "key34": "5ZBoLtWuvbhdFzJKjnoNPzWGivqQ1MkfjDRE5axGANKqTDnxJutPJymTtHRiNigz73tP45Ma4Cyfx7bRq1QSyxTx",
  "key35": "KXXooyjqc455zJW7XBDfn7ffh247KS7jmQ7QrFiNZZTer4myu3BRztugHK5EgSQqGJzcMcqqGXGEzmir6pV2CVH",
  "key36": "5jhEDtAL4yCaTFisqQmzgfYMgHo35jV7hvAgn2KRJuEqXfTh2Kx4EmQrj2f31MUBniSwML2LHRH2MC7ffGEFpRkp",
  "key37": "4atz8kJqtgXarQPCm4UpTncpSizChaYJQxKTp1DrHRu9ZBJqjcHPG5j21DGdGq2Di3tQpXMsAMJurRoaiJMb9wbV",
  "key38": "4QXiVfpA9Qox6KDqbZ1tALMUVjXQhssVfjtnYZUqNU445R7ZGkvHAtAdnciwsDCfyxJvxd6Vs1W7LKCp9k1spCaL",
  "key39": "3Rc617FPFCEHSzXV52Ayfpvm8hJqzfamG4Y7nHkHFPr4xt5H64G2bgTHcMp6s3CuKFPAVU679hsJ22gCfP6Tp8Ey",
  "key40": "5bJvsBktSaHpXctxwnXUwz7jtnUGoiiKg4cFzBeykq4ETPCZm1nX3d6Td87JbLuqyJ3P13ZmrQt4wK1pbEpBT8qv",
  "key41": "g4WPZAk6DbdBCdEkwRgfRid69S55Ais7EjQFrUCiqV8zr3YvJRj6575kAm3uWnQFGgSda9XNBxy6i2o1CBZg6K9",
  "key42": "EhPtipeWUWxPLAqun7VuugMvzjwYA84BruHnfvW8GnKdTiCWFtJeKfvsYeVs9UApRFbaC3Ab6QwVyhL4K3MvRks",
  "key43": "c3FgUu1eJ6DEg4kDy3pfaLPjREPjeot5mAFNCC6kpTYe2BwQx4x5tK98xzyhu7sWvR95A5Yq4jra1XbyRtRdkbb",
  "key44": "ekgfJDGdnY8o6YfB8ohXCBAwZ3F7gqfd8zuJ9DALBrKPZcYqo6rvAQUG8JfcytCxoXF1VQWbiuTrufDqeVaLuWX",
  "key45": "2SqMVKKPkM4fVsa1EXwCyzF9KqD64SeusUVAaPj8zN7zRvrRvMjLgwqPnbZh24o3vLfMeUkY5Lycs8iuESMXSv8Z"
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
