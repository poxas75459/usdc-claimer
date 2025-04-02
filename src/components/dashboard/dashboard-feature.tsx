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
    "4UiWzRq7zhFLZEWV82ZutbM23CCd9PR5efXPxEwKgosKCtzTj4BfMqFNrsV2ZTH9uZFDYq5jPmdGPbfygUW8VaCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FNkSNEaoMZ3NxA3cSSaaQBLmFCYihoqZDJzRbwVPr4JqT4N5iwGYutHYruGmATkg4H4BsK7nkD4NHXSp5DQJNaD",
  "key1": "3e7Vb6BzBZv5N6PAbT1DHbPbfop5pLn59BkNuAcUnX3r4z22mJfPr6QyKJHYiuN9YPykbUMzWSc7CauH1qiPzhUT",
  "key2": "5LJ9abaa2ev7AFn6hWxj1N6uwrwoLoiVs3Qs4xEBw3uCnXMhDatxDErnqHgTQnQq58XmYEnS3gf71itYQcgRQBDa",
  "key3": "4pEYGuZoqqd7tYCGudLDMgZCbB6CuxD8PmqMVYadAgz7mGxgfNVfSpgdkSSrNUiT9NtpoFFn1sfGVUXNjMJaMy6g",
  "key4": "fvRvW2JkPBkQk8QqwnRi4fLeqV7vjy2QEFd92RJr9ciwE3nPx8AMKnxpbET5o3DrC8goSkShPzPXNHfHE5oNi8U",
  "key5": "3ezLr4VLohu3HYqgBiNHVCv5uZfk1Z7ubTKAUY43nvEsvN2iqUhtmKsV2RKemFQByzeWAXyZu7AxKB5XcCsv6wAy",
  "key6": "33SYtq9KvDHcXrqoqmj8jb6eUL7bhsQTdCuJRG3UAAJUNhqKpNi1ByqYKsxhzygAfwv2SySfsGWuHEafDomm39cX",
  "key7": "64FyFK8kB8uX7rZCVwm36UgbhX7LZZhWeefvaG5if2oRmvkm1uLCKFiz158SG7zrHrASyz6o2o2DUdLHkPDoojJP",
  "key8": "5sFj5MWiM8GET6DJMeVdGGxpmm3Whde3sJXzwYQHEtUSFqfSU5WCVJz8BYrXBiz1e1XpGm4LiSJjM2atfDg3iXJa",
  "key9": "XpBYLKRgasXJEBU5NWgwuz9oPtusdNbDjC4BBr5qXJ7C7oAfHHJjFe7JyHQkmxSdMfhpEmZosd1ztKrDUrNsuCR",
  "key10": "5jaXbx3fBB3DieVmSawajwSKpRm1PSXeZ5hBztwE1Tc6nS4C32PxK8NXfwxmammQ5wjknYGW55FbUhawPfJn7yGz",
  "key11": "66ErEjdbTEjU7eDYfTuNngrsDpfgTYfu4qhWNLPXNhwJT8QrBFbwQXk7396yUsyGgBJseuYaVvEBgXNb76m5yVhc",
  "key12": "ZJYviob4H17XxSEZNEMKGDSnnWfU9hhgaivvKnvdXgPrP3FoWHgArwzNiFBoCFPew2hQS7cFd6eS4oDV965vZ3T",
  "key13": "2noqTXY5Tfnp4Bdvu5pSLfi39nZaBwrFceJb6nynME8j11Ayd4nRYysUwhvUKQpsDTgAR9Ff3XNfSy114zLRESHq",
  "key14": "2XWZ3CoWwBTaGgNfyGKCLbryzPwMo3JS2MPg8e27tZdwirzcN31XxEYak43vYC94ovCuCnBuiCSQTC9cDZYTkDWd",
  "key15": "hcsbihSJzbkyHBbUpoa86LbDcaGWP3pRSk7wjebWCAVGMQ5dupFqgC2jf5Ljvn9YYYYGuW2Lbmv7H2ATcnq4JVn",
  "key16": "4r93uRitViEo8SjpttC46AukJvv3wzPxF9r4auou4dtDHLf7u2sFdLzgTyahQz7227NcfwAWPr7dZgeyGjm5jCb1",
  "key17": "57XNbwfihVibRfwQeTrbPg87uQwarUPD9RPsdTtTvr7d12hvnAsr2FNdSNZJ7CKupee8r8JaXvnwtw2r3JncMPp4",
  "key18": "5ypmUqBhGXPcgN468ePXwwGp2HEk6MmtHaagHTeR9E5Unmv6Wxmf8ioqoyQiwmLybNzxFZjx2fZTuWJcwp1ycUJW",
  "key19": "3AWCpBmR7FtpmAjPS5Xd4TXdXoUchyR8pmihHY14WcHVZ7mfPNArS4pccvyfkxDPNw1yZmEwVc9uY5wnA25Kekve",
  "key20": "4QLnMuKfCPmhBzFC7e6gPD8eTnCewGk5rHUnBXBAyJu1GtxcMcARKPwqcTpjocLdrX96mskUJpJZzMdnTJP2btHq",
  "key21": "66jYrH4dJx6tZQRPc7WCRNix6sXWwdENRUvhBVKXjYCLRSC3vb8dgmRqJYn18RScmAs4gw2prJ8cQ6jCfoegD4pd",
  "key22": "5mZgqYSBBEFYdMn17JCkDH5vAj8yrjUjUqAobc3P6aJfSYtce5Lw5p7QQ3FAdhj1J6Son2cLHGKzcKkAgbWbjhMC",
  "key23": "3zdWrSEAWQAGdGqBvaARjdcEXGwBiSCaSnM5d3mSBz3JbYdegNecmeEVtprsLZ7zQHnD5cSGnMGKmG6znwMGg1CL",
  "key24": "4nfunqFwDEtF9SKgWMYBzMFgM8XVoyjZvThuYn39ZY5fnG82zMS52aUFFPpKyKGwYWiWyic9PQjxcJkJ7eK7wdmV",
  "key25": "3buCn95VsyfPmdQBmC8qPWzHmgeJ4yRxW2i3EjMiKEVYvGf43R4BBVxR2w5Vk3p2vAcfFRH16DMvqQYj8PPhvXye"
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
