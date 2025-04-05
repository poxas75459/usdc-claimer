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
    "eMhrxMiHpxVrZUfh495jMh7W8cftEokhbNryamCC6mBFheCAa24hbB5qfsHZsEgTKKgLB1JBo2ezzeEGQW3bqMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mQamxpgcEgVAPYC5tVao3G2nV5v9uJwZsnYhfPHqvuT4gXZ6LM2kHp1fxy2K3FwBxJYRVmgaScADqCVFmeZPqTy",
  "key1": "59EJUGTMxi5gEm6znig8bfCUr4xgj2BFMJpX5qdMuJ87BDqtYehonLqAUerQYKHZFyGJsjckWQfCaQ2vYNVa6rVN",
  "key2": "4an4F9YdGsofJCAet75Urd8JLvVHxMc1Gee8WuTHDckxaawqkYBr7oA1XzsX9PfAfnFv1vhvw2xpxAJc5fQdGL1o",
  "key3": "EshLNTyaWr9BDXmKyYxEqbDnu9NHVLFEm7cbEbGXdVJR1tu4Z58mUh4TdH4cLavzGjQbJuhMtqQKHGon7bYhCx7",
  "key4": "AgJ8yAruEYpWV7tvvrHqifAcnNV1iejwkhsZ6eGo55isS6Q8iKkQSyBpUh2eTcLoQ282RqJgeChMtVNsRhibCCx",
  "key5": "3bAKckaQUo1DMtmWzGJUb5kscWUrSe917nJxTbnmt4ZaYL7PfV3n4wA4ibbfkF4eHShpFjEESxzSSuiRm8QCakA3",
  "key6": "dMRTVCBLa5Zi7xYv7dc3CDm1KEFMW6v62qWbp1Jx5f2mZAuacLspmy2bfyJncBDiEUjNLbTSd2JvTd5zkDuaxpz",
  "key7": "MF9LKq9GepoxXphfxQVecqghHhgLwMusCPG5zN3s2AnHzb2PEvRD3datTnJeRVeKBAkZbPp8PmFTuPbX5L7cmFS",
  "key8": "RskbjCQLq1Rb7bGxFGv129DWCcLvS2kLD8mgyNvYErgiThZtXstDucsYxhEFUebgB12e7KwBsY67SaDmWYcwYEX",
  "key9": "B3ot6QBSTaGzW2a6fnYD2qC9prTTSVSUt9AY1dpiEaASomWhcwcbWaA1krQLWNFqYP8bG2DepSaHBMRmFdEsZfu",
  "key10": "5uja3JD4yNWYEwnXBRqeyPZNard5LUBswsu8gR6CbsC7DjeQi3HFkvvCa2UDjbJqrscY9wJzZVJ9GQoYGExQpAh1",
  "key11": "5hYHhNBhQx5FDAP3aBqwro1bDC3qfZ8dJHN6f9LJoPA9yUeTxzkhGd48syc2kmTwujwXJSVGgv6kjBQP1qERwy5H",
  "key12": "4ST6Qna3hWGq1zgYSAWych34c8TwcmECgLLMsBDAkAX3iYdGyJhpubEHqgGVGas8tSPj12cbCn1aFuQ6ioPtKKE4",
  "key13": "2NJYuw8rhdwYTAnYbrgvPV7yPruERFPjn66Lyvd7HHjVtFKufULwpB57iVMfeMJfPfwAR4r95awbT3Xgh3UjtHGH",
  "key14": "4MAsSN1DMTwFZLyu4nC9bwyaoSBruBcgXvNnhd11DVbdLLb78AZ2kJstbSKQfK4n1QDVU8PUDicodHpgw17M9NAk",
  "key15": "65tYCB3KEQH1dzrYrKTJzXeBF2yC8cNpYMohFvoDUHpWp7bLCizxoECpeDcPe1qDyXpB1LgvD5NNau5DeenJZjuu",
  "key16": "3D4hMQZxBTEuYfB2mK1kU4GPw2CQq8tsukDDoCNLr6bHe2AjEBaxL4E8mnKHa5tCA42cVoHtyAuHSqFhRASLvAS3",
  "key17": "xAv9ygRguZy9z9QPy8h441tZgf9ox6cbrzP3YaRyw1FJMPsPEvsFqi2yctBXWXcuAmH4hwCRQH4NEQtfJn4uTjk",
  "key18": "YLy5B5xhkWQKQNkrWCC7fd2N4s4CaRJntGRZnxSwLhkmbbVL87bbGqBY4NAE8Wj63BetKT6LGyP33x4oG3KvP87",
  "key19": "3Tf2GyaNTMzycvcwL42bRWSmQp8LeQfhS3GBHvWswjmVQsP8USmcin2ZhJFm6YGZjcc4a4Pn9dRDx3d2hn38wYBJ",
  "key20": "4QfSRLEsqNDyxHJZZgSabJuWJmW5topGuzVPb6mi1XkKzvFWDs4rZDkUbGVSgiTibNm1LSu1CW9TAnS6WtR9Zapk",
  "key21": "2fHX7EW4akYkZJJaMVK3sFDNVg9oifEChdTa1Wqe27B6ut3vHX8XPqun1QiCXaBUeBBPnzKdbg4JCQJCXjzuojdM",
  "key22": "npuNSYRrAso9eJzzg8XYu3LQv6haqpft8nasct3tymJvKTb3bdAEcxwTUMLHXXjsntSXzU9TDMw1ym2AVPFFYbY",
  "key23": "25rZmU3MU54VyJq3Sm9cfi979dM1wCtHyv73oRJQFbp56H68yWn7i1pmxCje4MYbCeazBFXGrHATBApb68sYiNSp",
  "key24": "2MaEbeBn7pJJB5c2KSgHjuQ5UgZdJJoqvve4wfduUEyMyLxPkREJEkW223AMKbFtUSSqKbWCastVas5SoMcACvgy",
  "key25": "3BAHaT5fXFYfhYuxyM4YsT9X7DKbCtGRm3B3zv54Y5b1n1m5VXzu5oYkKtE8RaXZKGbMJg6wJoKP93nQS3eXxHCZ",
  "key26": "2Zm4DG61JJHMhbRQcFgpdA5x12C8ZSFXEgnjusEkD83z1pmfKYQKXpSWnn4r4CigWYEnBGcD6cWmZapFbYCuGeL8",
  "key27": "3PK6nFsywLJfU87zaXZPk29aNDkTnRfMzmxc2kTsPqVxd7oZutYwwQepARGi7JEXKgahEjp4oYi6ut3V7jJTi2aY",
  "key28": "7fih9DidYygsdT7xpce9DEcbL1mq21wiJrHAgGh1q42XX3UHYM6VZudwKVm6V1jwRgEfmu7eJh9XXyKXc9UTo86",
  "key29": "51iGATy3cJRTS4fHCmfFwFwCfM5iACk9yFYSd39UaaF6uX7Twm5b7JbNeJgjTnfzL9kGmDAiFf7n5ccjfK1Q9LfY",
  "key30": "2vdihfaKM3vFJ2wLAaTP2MFzbVCe9hYQroBUWZMeoSWL8oKedSB1Y1R6qEaaqLjYHi2VWde6oHLgadf3HNXH4s6C"
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
