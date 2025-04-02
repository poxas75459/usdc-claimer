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
    "5aUNEEfVpbAFSAQvhG4A7P9524mEpx5viZshwDB4iJpbKdcUQevBT6XFLJJyX1oFezJyHfe9LtQSkB3jHVGWH4iP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MQYVgh7pSPphqED2REUjUnzH6zPpKRHvyzMzZ9BKacsU3JzYGjy3fjSSgHfzxBFBEqBp4ceyF1mfAWQhwpvQQMV",
  "key1": "3qAkALTSC8QKajJkdPDD61TezRpxiJmJbwmKf3MJmfDzYVi9wk7Axh5YtQeETVxZj9Pfjue27QaYxfrRm5QfioEP",
  "key2": "4GVwLtKroP4ZtGBUBPB9AEPQcR5iePwmDQGmpk4MEDJNH84qf39Z5kfT1j9x7CuCSsoaHKfV85qas9AqPN1uFvPc",
  "key3": "2nx6TgSyJadS14b7C7fs8hf7Wxkcai4vpKCitrR53CE4ZnfUcnZ981MzuuU7hjJFWvQzoaBe2AUWpaonJzbx5hxa",
  "key4": "3q5GLdDsgws6pwkadn39LGwbSHLRo8DsNRZHMoP9guymhDRCdDW4WX16HEXZiV5UeF4NZNvamvwR57BEir3xMXhK",
  "key5": "4Y4QU2V7xBagheC8siLS8eAuQCwDmJViPzAKVVYt4wWmjAPwG7AcC2ArXUt8fREzdTnzF7RRDHfuHKqN1BjCJFMy",
  "key6": "4bx9K2Li7fF1RHbLhtCmq7Sk38EeAB9j7kuc1RzzhicEjUgawZ8DYNbn5vkv79bYt8an8THxvSvHqX2eZ11AfDdn",
  "key7": "3TJLoGPyEy3bTUrpVCUk8pWEUiMgPGWYHpUPbw78mpCRHnvUsTTi3eYXGbGjBXw1f352UEvdLm3gJgPK1Zwy8d6C",
  "key8": "51UsDRi66c118fkZQM8Wr28PDTUiQRWvVeHsnGmsatmnwsZGXSJqVGiYeETWiCXtuTzKKeXCgY2ZTPM9Xub3piAW",
  "key9": "2E6WwaUQdx8NhUZBiRR11J18xCG88TxqwNKdsydJcF1iLLipAVrUhuEe1rQsQKUr1tUokw9z9t6s8u3sUPsU1Am3",
  "key10": "ptrVHybjkyz2oPdoG3bhbk4adfVNaGrr7HEdmYCZU5bFVvS18LWNfLftmDRREs7ybX7PSZoVuHwMwfrUDiwQeZx",
  "key11": "5GqKBQSu2iUYTRq18fqvGSgHaywtQZVGBT37P5eVoDCqUTtAdG6YHu4zehsFYnRuXWGgdXjHHT2uaa2ta3vYFMwJ",
  "key12": "4bMLUfjX3Z2anMsahmyTtoPHKRFP2V9iGjWZBYF6txYQwP3bEBncGufS4rniVa51hPoYHWxRjVk8qrvDdfKy8tka",
  "key13": "3Ga2LoCBzDb7HbhNVpEJLf4styhqCTtcwnXPPiqC977WL48GraWfSv1rDV1cocq3iEm6gx23y7shHjMVb8gJddrQ",
  "key14": "419SKEKNak78tFfRNsry4tWgCjbeW1HwtBZ18R53VmgPSQaK5ScWHCZCCNtgPaoDnNQw6ogcJwmUJ9bMGV6psjVw",
  "key15": "5DBE2c1SJ5KrSbefS5u2twdkuuv712uJWYUDTUCMSHbR44PHwmejxwnK26JFDjabzwQCTZYgqc4n88m6eqGpnhjE",
  "key16": "23q31eoqPMq9ZAGPAbToeg9rHDJeRA1w9ZEiC2VDWuirLWRaXk5a66PLjyUqiRoek1btBa76r3LjDFYZs13yg4QT",
  "key17": "2ksQsPZvbSWzsiDANA8Zn15My1wEFJLgcgbi8xmMzuGfEzE7sTUYszbUy7z2cqEJyAMC6W7orF9DoHPFM6ZuUyrw",
  "key18": "3PT7yrpPTNvc3SGuAphqwiBwmL9AUrd8QWZ1PFBnVBm34btZZsS4WvsXiCiNTu2VDFGjvsx4hutimQDotx7bEXen",
  "key19": "2TNGYauXUQoyuWT7m4bkmsTDbhoY9wg3zPfGovz82aFm71MT2zcvdNpHBwfRByBTgpD5HJyq6KmboUSFxgeR6ZBp",
  "key20": "2tRuHSFkKnHkpJ8QCpqEVEY9CJ4aTNxnLSZ73TQsqJn1iK93MLd53WZBY1EYPffUfk4oeJo8uHDsCixCAurr2iuW",
  "key21": "4BSXsPgJy6JtQpJWjF3itqvk2U62NFG1ib2W6v9z3MPiqN1cMeVHw6Tn2PjjK7wafxmzz4zyFFnRZezT87ngTg7c",
  "key22": "5guJyL9XiJR5m4kVs79Kk4u7E1dvTaSt1rb59u6EiHpDwfgGiFf9TKew3SDEVggJtaSubEkaUTFjbCMzfExH3PCT",
  "key23": "4ebWrCioN83ePTsEB74jqh6CoiRvB4sCL3BJ9o9g2Da8jXFR45ANTjywCQ7maZzPJ4gz71cQeG1rayBSsJjxGWDC",
  "key24": "iL1qh45NXHPr4D1qFkHAtsCEVCe4ieTyEBxrkSjxE5BcKetwKwjgBbuVfNKDuTyAjPARArrmCqiPSA4xZJnGVJc",
  "key25": "3fQFKBXvCCEuzdJDrFBKt3Yc9Axq9Qk2pvfXVx2nw2tkkh2TEgam3DRZEhQAstwNgNQHPZbaTNUB7AuSGF49zPss",
  "key26": "4fZ49RYnY78qhA9XFA3ht8bvMVgyx6JN7fB6kSe2BdS7QoNB4KUF7GH39ahYC68csAHR1rhhd4WdNKG5VNZesnZm",
  "key27": "3od1GQYZ23DvNFpvrb5yqcpF2JoUSx9y2nwW6stwLKkffHTP6tjjuNrbUkYAsUKy3NEzh6WNUHmr18kAu8t52KxG",
  "key28": "VLDycEr4Te3mquaJWgowLzfNUELk4JsDesLsZJf5btn8Fsd3en4JDZEiuWTLZa3LVBoC8EVRRcqefqrGoDuXpAN",
  "key29": "4QZDJCH2PNkfjqdD5YUoXAxyoy7skeAPyYCpH5JT2NHa7Vqk48TApkuh8AUF2wDDMTvdRJhSyX1nfebxzk1W9jt7",
  "key30": "27jsE4hn4HRiwt2T5ytusfytxkH8FRJS12HwtGfiYRbU4V9y1tMJ7UUpQGKV7Qxs4rqXF2mBSCvLdYk1kdcJPab7",
  "key31": "4aFTabpeGsNxiZFd5RPHwShCcvUjUa64mSongDg2nciuwVThuFqHwo7cCrSU3vEjvazfikNz4C5yAFnmixCpdqQR"
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
