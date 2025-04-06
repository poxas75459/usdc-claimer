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
    "4z5ojGsxLMRczGkXbEqsVBMTnTFUtqxJF5EFn26FCX9PY7tBSYLWBDiDLr7vVbacu8iLee7MxgTpx7hu2GdbBZaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cwi7Wnsapiq97dNWfMtuuFTZNL5sFbiJsAxNfPHZCtcsdxUGvXS6f6sNZyfiTnSYqDaLbNqLgYh6exn2os2SFup",
  "key1": "21eG8n51BsgkSuHsYRTRC8chDGUgLBnT7T1zBRNTQXSxBfPGZnySgySTACrMSebXRLGyZagGUy8CbAPrTzvhYkZD",
  "key2": "3tfp4fS55zb2wTeC5qtjQwFoQzUCH1CdjMSLa8hGz4TakgPwXoUFWK38bNGZF3PBgxz9tevwaFExged2bpPSW8Vd",
  "key3": "5NkucpsMCeMu3z5Rh7use9yRvt42dTYH9SfuyecgipG4DWfVnqTF4sb777Md13kuTJ7mnNTML1e1k6cfiRmozsgX",
  "key4": "4KWGG2xKz9MXE5QaxEnkm9StseXgMWKbd2NiyYSZcwb5nBTPQZVXY8KNkHe3FD3r3X8h2gYjjtVpssqydTDW3spJ",
  "key5": "4snVNYFfoNPyvLhrUGW2JFBmddBxRjAz845Bv6RJiQEPpQND3MGzhrQW7xLaxBqQ9nL1BUhU4TB3NcU2Qx4itYdm",
  "key6": "4S7rULtxUCWq63gwWpWfoQfeXPqCwjoxhmWZ7MAJU2oQCVhNdmMJ8DKLGe9bZhLDJ4quMSDyjMLQZJ6yvEwehZUm",
  "key7": "NeeM7G7RMmogbViGFAbmPjSqcMUDynM2mcJmABU6dMkHVi8oUkieYayF29QcvavHD912xxPDJWNMQWL7Zg6emYC",
  "key8": "4WrnHjvn77Q4iik2thkzgCybp5LtqXUPDsG8E5fvvVBUyAo1Hez6HnZAP1jBrEYWTQUiBqqRS5wqY6xYdXUbqc6x",
  "key9": "4UEthv3cfhBbr6PpHyQ1eXoRfCbdqCMV52CoDBDTg9nYRyqaNJrEqu2royYMDyJfgNdUdCk2P3kihNmhRS5BpwZY",
  "key10": "4YhaFcHDRLAU4fgahLrSWU9djq2aLGCX1DbEexp3T5K5tnpAn1QFY4kjYq1anDf7yJL6VVknHx7pTW4sujtg1GJz",
  "key11": "2noKyVeg9iqniMycJPVDpdo5XKHy79N4GdQRhfv7CaEN4Zsh5oVfWCERUUrCSzih6kow2j7ZLimZV3tTpWqFwcFG",
  "key12": "2iCsLWdH8sWT4LKp3AuDoLXpXLhEr37bXvpFgfJRyV6jVrqbBffMKRnWtcKYyy9P4aSBbuDgETv3xtyWfRMF8ZHm",
  "key13": "5zv6sR4ZSsEj7R9Ejt4pmuakGAaZZzag2z3dYj43KPVrB6MxMYMwK2n8MzFEtvoD6n1VCY1W1VvDuFo2NQqa1uCY",
  "key14": "5ZScyHyScaevLEt3foorGj315ve9TdkJKiQYg1StEc1akmzKF4231TYFdR5cHgaxZR2edWugKLYtUU99szWuPcv6",
  "key15": "2m6Brn9CL2XLnq7eWHqWwVWKYzNJ8aabkjnxjT8p27hDTVCnPjoG6bUHpw7XDtavXemtNG8Hfj8C9wskjbhgDQPq",
  "key16": "255Acd6n19PAjnTckChS27tBzTREUY4hFYC3AAGRbxMawpDHbApkQ6jLTx79RCHMn4dBwfy71ysNEiKS8FCpuEoE",
  "key17": "5bogmhHEAEwbu6zFwMNDfJauwE449MVBHzsyjcqbzKhG8HkSCjaEhJ3JLAP1HGSvTAKBnxd7VnNvA8EKWCJojhBq",
  "key18": "3MbBZtaCQEwXPeanqxF6894A1WPLZ1VQboupi8kijRfiFjTGoTDmZUfnU6fMdkqfi6bVumVrmzoS6dojNiCcyZcA",
  "key19": "4xw7kmrVAjgPkmEcL5NKB747pqtqwd5Xjkv8oDTtPXe3ff8SRoBTixG4xGrHhekC9vyqnEh9sC2B572AszoPSNXv",
  "key20": "52nHmGEjZBwEejVynXbS3SmTW9HRXeS3qvzQ2knUdq3prULz4US71RW6CW3mSwUdXF6sk6KYQAfPq2u5fZZf4YSy",
  "key21": "22YM8YRdGFV9baAzQqZUXk4E7K5zvdmaoE3FowokTPpigRk7Wv7PfDJCZ8Z7uGAcdTwfe7GCg3yzfmKW6eBPPxvg",
  "key22": "66y1mG5BXiZwGJZvtnJpaDUshmMxY5sxfZuePXQdaEu8sSHEgHuBQaC7Jw47Z1kYwTtD5WmnQ1dkbw3XxW5gqrAf",
  "key23": "5j4JZ95nF8SQNeHHmKKUu4kxGXZePv1CQCdWDDsdcLwYUg3CwEvJ1GK52V6oYngqxnhZLt8wVHiNCaf29ZQ59Xfm",
  "key24": "3pFAbuC5fGHV699UBoAZqhe5fpeH9CH53pXfhxC6oGePvYJPTEXk56vX2c1DNiAeGudd1fkFN8gVaotDqUJb2WYC",
  "key25": "3ujWhAiQPr2rkmW1Fm2UpeAFdxELoJx6W79swXe1oR2isjYnpZL8VmvAuFdAGVbt4zwJxUMKP5XxZQCEZ6a9gkgb",
  "key26": "th98Sa6KskcQDCRPbDHRGyD5UqVsHBU77TqtLCzk25teoTwoywgR4XuoVEnSzmXsihR75f8pGrGGhkfuKwJyrz3"
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
