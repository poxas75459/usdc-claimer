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
    "3gViA1KEqkc6m61Mx7tRxegrK5sG68G9GCdnUhWAXUk8ZshAsntLTPhpssS9ruH1gRG2KJc3BHeJSttoGrMiWCPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zFENfBrdXXXpHZh37wt8e5y2y4JfRD4g7NBZxVen5KLSqgASZ8gGD6BbUErvo8ux9UW3xZqtagPAzk8ne9FW3sq",
  "key1": "3drRE2Hpnfb9RMkKETwwz54Xn4v51EgezXohMGRHwmiohfKYCLhKq4s5RHiSF1snqDjMupp9KKXujZM9vfMCw4Ge",
  "key2": "31BTGsYskw7G5RaqeB5eZiAH1yCtLoqsnQYAE6sP8i5y5maLGmj9byDz3qMFTbNVj9wJWxuGeKwTtRWLUa4VbXPS",
  "key3": "3xXXvyRmGsg5eixAoj7UM2eMtCjmcwPr9aSNAgeqSiQFusxKYz6XY6tUakDtuLLQwtFs9ubKsmyoRbkY6d6Kg4pJ",
  "key4": "5TfRSXzDsqMoKtD1D12pnMRXwsWM7wX2hWEu42tickKkvBsQBum8J65MFsETnJYaMjbJP7hYE7B4wAdfa1JRQ7xn",
  "key5": "3Crh1U89TmC6mN6bN4ZWQRTkVy2UFx5j4KABXYftUjX4nJL6kUmiwjjLjMSbNBhanc2tDkGTWXvMce2wM8xtvrDV",
  "key6": "2yeQsM1ebSCBb7mbxm1y7mLQxND3ZPMDw9Fk495ZSU5ScA6p3rr2fd6xj2w93qy8SCcXb15zPJcefZVxgoysJCqs",
  "key7": "2ovNh2Jdj1ApGYwANi8uX9KhpmiqKmdk3S2kV3vC4UFUVNj5wRnDDDTo5gR3NccoWiaVbjyYk2vfryKh8iX3DtHX",
  "key8": "WFBWbvfB9McYf4sTpEqPrsWP6EZE36S2ztod2hus1zDN9SifguZrNDTBvEU9JE5mnPn9TeChiKXthLVQKS5o8Dq",
  "key9": "9RjYAQ5bpR36PpMerjkFC4c4Do8wo82j3ZnTxuueQGULV8UFaim1XwbAyKTSRyuZDrywf2mwvHuEgD5NDk7ZLRr",
  "key10": "67ahtG6xKiaBw9FCcpeRoC8kAHhGUQ3PbThJ6dcFZWSuRXZF7SaoKyqxMmT849UaeXyEuFVoheGvB3Myp6Q7qQxq",
  "key11": "UpihoKDM5th8r5tPVL62LT8nm5uSNPv2Gv9t4vkbQVe5v7vSw2qAZzpEJfTwBkB6V7mQ7HWzchAqdK6YXxwPWK2",
  "key12": "YgSHdgvHb7bo9MsJWa8nQzdNRofiBQH8k9JAgW8nY4Da3aU5xxDpEjWQoWZEBdqHPN1QAgCmXgYHadfV5UmCvJv",
  "key13": "4higRD1xtpWCoXm3u9TSiGtHwpAqfnyV2cRBmrL8U2AzkGKMVCPTjFYeYZq645aPZ1jscPaZ3Ptzjy5ZF9Z6WmQm",
  "key14": "279sTEESmkdgVKNCsXtbB2EnjoMHCrr1hiXNgxFRKYh6Fipws2hG287W7VYuppMHYBtkiQ6CpNP2wNN75WQradDs",
  "key15": "cojJMMTAUCFp83dnLinUUyQLtMJawUX4FwCqaa1Xb7MPcDXWhdYFt11SccQr4TQKxD2AcDiTnHa5R9s6mwSA1NP",
  "key16": "2suHuL5G2x511joMzBQna9BzN4HJzmVzG8jzduoQxWw5ervtfqHyaHoMkCHfdRoUUiVaBUfPsMxoCJtqmFCVwecG",
  "key17": "2rPsBwKHc1BS9RT7DeYvUQ36kgPQsWTM33QSW3XNB3yH8qHHsBXHktSsDFA7ttRnykJLu1fkFDYjK9i4Y1n8E2qh",
  "key18": "HA3PhagyycpB8Chq7imAVC8WFDfTJ4yR1tdeNm2ajNvqmJjf5oAMVTU4VyYLPbqwZURXA4ihujFJRVgjnbf8pD8",
  "key19": "4Dv9ppw4nDE3hYveTkRqKTkkJprdwTEgvmiuRMANUipG8nhry34AfJo9kcWTuHo7zF5NftfyGAmtTPyxQ3AJdNU9",
  "key20": "3cj5pPRy2VBcRdUG8kjb1B9BCVU7D14mFLEK8AustPbLDU5UVtk7zVYW2uAqnFmBL2kG6ffujf8GGwLcops7F23i",
  "key21": "2RqJSwGj5JFHPiA9PiquQwSKcc84ES6MTgicjxA9wTG8FBSNvHW1KhJcFRxEbad7WG3w5cPMQ4MNXbygYS5Zzjmd",
  "key22": "66P5xMbVrc4SKpryU2g785NnuQLzruZ8PWADGSe4RFkFbz8pKfCT9SvrNJxqF5pJg1ioAJU5j4UxM4s7EzgJkEHz",
  "key23": "2bUyNYL3PEuL7ZV86xwrEV5yPD1NQmXT9du9fzFqWzn29MHRNFU6wj281jqJqDnxNX9BhBXeExjeNNt5EQFTnN7y",
  "key24": "4fF3xuBFsDihqs7Hs74VSfb3yGGSmHn6u8f1f3mDWncnkm21EsL4iEpcTgaFySsUs5aeMsrfrRAvSkg6Yix5JDTG",
  "key25": "3t47zwzdtxkrViht3TqLvt6jkUSmGhg5BDnuQVJoAYi8FbujpT3kTgEC7MtK3LtY37emTBcskhtcUaAhkCiAhsB",
  "key26": "45spwTHV13DzEA2xhC42zfwu52urFeQWfWPobhnafmi7TH3kbMoxassnBtuFNCqNbkqF2GeuicpSMyq9j3DtvbJS",
  "key27": "2Z2jbyGk1oYKaZtXrum218AcLgoQCFEFyoxyk8YQzDyCBFn8fr9cXLsm3qCKWs5D89aB3XGSWxR4z2ksYNk65HDq",
  "key28": "4DauSjk5kqtVXGVdWi1jd3qc9cVraUECEdrzqyUCV9PANCsykkWWPeegTinv9UrmH1YaLTtsKBNxhMKeWycebbys",
  "key29": "2RyRwvr8pNGtd8fo8MHUjUhWSnx6o84Pk9tHP6pdgnD7PMhsouM55RRsNhT8SkkmdMhhV8mwJtgs1w5BAd7UpSbH",
  "key30": "2E1wmfALRhBgGccqLQ8yVJr111W4mXGp45gAuoB8aTCEMPR8h1KHNR1odC2zxEVNa2eaPUkqWZs64nLhAxGCawPh",
  "key31": "2nARwnqe7cYWmgQykrvkayBfzCvBDzjMBdaf8CcmFZ48LVBWu2YGpewJssVo8A3HbqErCzqgBNuixJN7UvF1RWkn",
  "key32": "3efsy45Zin2jtz5adUCPu7dgiFoCmCaWXgiUGe28mHEERQesV3NtxE7Wdot6xvztdxpiCWxn8a4QYJN8hBQ91kox",
  "key33": "2Bxj7JfAskujxsFjEDAu4a23GT4nvbtwfE8UaFBfPHNi7HwBLD32AuvK7y2njqc1AJFhcJaNoVSFBetE3KjxxPBw",
  "key34": "2ENbwRbK9DLRfK4eGoHHUwVWKKstUWGrFtERPjEr8o6GmXJM9UGL8ASiJXJRLhr5m8pqDzf8cwyGHqLRLs1St1Lj",
  "key35": "hxjDdiSZ6mH1AtQocHx4chrGgi6EiJxzgb9MjaCsr3KN9u5baTz4JzEDerdsfdAregTFkSHAQeseu7NyXgPzCDo",
  "key36": "32mK9g8o6gp7rM1i31v7TrttHmjRarGvh3KFdjJAjaWbDFNhRAysuPX2qssgqvruz6sq3LGkJgcArpqBTBKfnseo",
  "key37": "5vLTMov9SctsfHVa7tYySW7GYWnJAvN1MvNJnPLfg8Q4Lqfrbm2Ccu8fKSeTHb8aq6CdJ3zJcBVH4sKgBcF8NiFf",
  "key38": "3XhVAeG31iZ5QyQWRnupMMwhqJhXJnHLsRAi9jt8SH2yCJz27hfH7aduw2WUgPtkzfhif3BMRJvuzLoiaTboxGGB",
  "key39": "2yZGoay9cHn2EZKvFY14pkkkVV7Z8cfSDFHK6vtGiDekoF93qveBAijUbL692jABpK5UiHAHZzDqxZgBbGQqHihH",
  "key40": "2qCXKff5ANSJ7erAfPystRKUYSpohYstfLdrdH13ptVZPPGuqFWW65WSTiJVfMNftvYa6sz9Yw3PdRpJSQSjrpGo",
  "key41": "32A4AEJw7ZYoM1dv7rwszG2ALVk7oURJdN7gYHFTtLpHDTrvTCYtLjSLFtyB3f6pk3BdtDyJ6Yb7MUwMMy8g2EMD",
  "key42": "3bCwwRcsL88wvTpkpxtbQgNDFbeQoRoqBNaYiMDpJnWdRpHh9mDeGCVGpDws8Wz4dcyZ7fEFb7mDCmBqgt35r8mY",
  "key43": "2pYPCPS4mLK9RrQWY1zgU7XgQoUk4UFote9gQpvyU2GvCyAd9b7c8JtHRa7ZnhkLayo2tyYDeYbsmhqPD3wh46QH",
  "key44": "QAr7PzjmKYSkcXTUyxDTo8gP6jCH2Ry8rQJAPiXF1e5DBDTVLU8deHksQEpSriW9WU5vcbpBTa2MwVTXptXsaPP",
  "key45": "mQfPqv3spg9CdVwEdbNPesDNpcdQucyXTJBsuLcrYn3fmCN5ZanG5ZdV7fDaQUKN5tMMJwLpmN9Hh7RVxgcnTxj"
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
