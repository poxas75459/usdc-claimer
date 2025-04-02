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
    "26JAEAkUAeUhCpyJponZfz2ohHjhbsJwuTbTw5GqUJeU2JXamSHjLEvhmJdEy3xgzfdQ1iszURzmyJ7FVpuqQaiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TqYrpu5nQE6u96nRtRaiKpL7y22SPh1PtF8xrmzkSoa5t2zEWGp8GAhueV3mHz7tk2Q94V7RBB2X5msvjiHXWcx",
  "key1": "5sdAViDxCADh7YgYCPvDUJWNn5ZgRdPYvQWnxNbtknjRXYSLtD3VcLLvjQgjKNxLQeUCQU5qoG3a1jbedpFjbvKk",
  "key2": "tcTrH8SkRx4xwhgdcrz7ky6Xzmgq11NLWrBoqSTRXi7am6c89UuzrJ6PSu3CSLUiDHTgpVmmxwLibxb4NPiR1ku",
  "key3": "2rLMdW8ELXWG2TVBBtkbSknVzrWTBefBeGKaWPH8hT4kN2eC7ZeQ7Ymqa2QsD5E6K66WNzB7VHrwxGDWcFauXKJd",
  "key4": "3LKrNEcT9aLCsjq4qTVXcbC9MMfaaeNAuG96Chbp7FXUaEz3B9JjmC19y7LBvwDbSrLkzmaK2BkqpcSQE1ct9589",
  "key5": "3BfwzrHgTkeztx1oNPBDcA26KVPXANmz3wFnUttnPgf1Jf8h73gFqBLg6U8pTXGt879H1dv1mEiLPBANuMaRohRH",
  "key6": "5jgugnvedCrvrPuKezcoxfdcQVS1RwthQDSs8SyL5qLDYXm3dz4oEuzxLP7dnsBNjhfTJBo616HwWPHkqJ7Q5opk",
  "key7": "4RuX7wb7cxMbcYyrZSo1eta29Dsebm1q5tTh4U6ZkBursuBHDC9kFzmYwTDCL3iHQMSZ3r6h2FmN7SLrLbvme8PF",
  "key8": "2EzrnNxAGVTWRtfhf5nJzE3DTPjPSSQqDiduQxs8Qg4fVK4CaLRqrQyhEpJUTLTB5gGjsTqoqDKsxyvPxdDkhrTj",
  "key9": "61d1a3WUfoPXdf4eFeZ1HDrZaDGQx1XvD4EbnXDXzjEskTNENxngfx19Jjf5CfvNPqkUwSeu5ry729dzCjQGCszz",
  "key10": "2t9c2SzAUxGt5Eif59y7woHCYUqTnZCUgvsPm8pwNVQbp3a2aeMRvsctqrg6tQDMvuLYd8qrAuSrBGid1s7jSe97",
  "key11": "3688Ygr2i1VYGfK3NKf9is2vhfPVgiZYeEyp9N91hfNbXLMKeqYpg8iUr14Y2oR9zVZkg4DKgKetoqkmPNycniRU",
  "key12": "39cBX9mokx7WGRRmGNng137PmcVQmkfQRawCFwQFHFTPFmChJL7JZWwZUtoQAn2fFPreMxo58NnyhEUBUCmhhrr9",
  "key13": "4XeC496G6RJC14PE5bQZ8ogAdML7Suu3jLXeq5grPAESSRTWmSyY38JziXF3u9gtocGRtET5rCy3d7N2UGd8nFVQ",
  "key14": "m7V6UKBjDEBbF2tWKcRPzSNqxTPU9bpqaCptDEuJRrtEPjYJy1XaSJhZfoK6SWJeEYGTjuL26W6pKYk61TXoFCk",
  "key15": "5jcKCa5gtWtn6195vS4Wu2BsWVXzFVZkNJCqVBfWmdtUjpL23YWn1udXZVFTbtvFJnJCzNg4HQ4yHYRsp6w4d98d",
  "key16": "2T5Zw4CrWn6hX5DE8B6LrXRbhsNiijKnUhQVNx3m8kBRSgkrDvapcnkBynnHGyF6bJmVDrHFdQrnG1gWDQBhMJnn",
  "key17": "3eefL5Z3n8d4fBiWFPNeaWYiqo637kQNqf79UwxWar1vsPTFd9gw9XrwYkdCjrLepCddYvYQw9vDTo3ZzQqyCbVf",
  "key18": "4wymQ44fsWRfVWRPCL2y484c3SRoi6Hgfu6FRyRMLMqhm2aokwFkjG3xbZE8c7ctti1yrwBS3RDbZSdCNjQUzMYX",
  "key19": "3jAcqueNMPMZyokSTfBJG5UMccF5z6QwqEWRqaABSr7E6RozVqMDH3NaKcSne36BpjHSXr55YNt6DCpxnXRHaiaz",
  "key20": "3QkFcRNf2DCmYHhFzNzjCWxgFDVide7J3Vr5rjJwtxajeVTZGB6ekxedQUED7TxSkTa2QwWVbi8chgmXsHkkRkkC",
  "key21": "5VNoNXmWxy2e6aqMNsHFAtHfLXFT11gLwbBHp1cFa3AvPE2FZQYZsmqDV1H23vKDo7rUtKU6phLk8bdhdhTTAC6A",
  "key22": "1psExNJ2DCyKLo91FZQ585znRWpTYjK1FdkJebvYZA5eEEfg3Xx179XGY5LiUeYUAbMqUMwnMzE6VXjzoYL9JwS",
  "key23": "23BiRVL7TNgnbfFnPghQwFEidATftq1ktEUtYZQnJeYg4AMy54exuSsqMRGX3QHsYfhWY38eCvJnSkaeiVNXZmVo",
  "key24": "22ijLitSjvg9G4XYX1HXqULZcXnSzFTfTiJNKbo4gckC9Yc2nF8JbLF9XfTv5spjRBoTFt9t41V7fNcYSNvoDapp",
  "key25": "2QQwSJKLr984JZRwm8hQYZkjG7CByjX8DFQx1aJfAZBPimW9CRGKP249uYgwsJ7MkSUARSkNpHYZQ2tm3oLzfLdT",
  "key26": "2LJrjjjtuWBn2QPqqt17jrC1YF687vLQZk1KcMWCnZwATHgasMxxGbsrs9QSt1Vfq5cqCtRwE7SVCeKaq7AUjhd8",
  "key27": "3QD3roya5unAJyK7CBzrkckC23rdoYwhiwdfugPHJdrTsE5bjcFP616iKpko9VQgmjWYZzM6KeKyK8qWJRtj4SEG",
  "key28": "5xoLSoBr8UgCCmdV62F2VfAhhKd9d7cZPPMSGDrcifQf4vENtKjvPtRbP6TAM1CT2xk5u5yShMQ7a8ZkBJ6W39y5",
  "key29": "r6ES3fmXvCSL1Pytdy5BAzWmqQiwr3f4iYYKZb9byeYCY8G7dUAYdifRs1b1q3neNxk7C3z3taThHi5Zh7mSMqW"
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
