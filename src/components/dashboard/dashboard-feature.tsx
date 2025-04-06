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
    "tyYjhtN2xiuuuZKsWJErLvTYFoAJa36mhYBmQB8XvpuMrMu8d47kKtTkJsmTXDMPMqwXTRVMor53zRWa4jSPzMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49uSP3TaYtoWeiD3qxKS9Mx8LtEUAtZ1paYxtoSqzkaVDMr7ozjc6wFHEEEQkDprnjDC8VFEs9eY2HxN3J5drD5a",
  "key1": "4ZDNQN3X2sNoo3bG67fo7bw3dNgxbcd3wCMFJKAHShk7AFSRhtskmjKm5u8AvXk8ydBjov2Xa45fU3EVYqEp5wRC",
  "key2": "4nhuWA3tsEX54Z3X9YfGxj7zLzkW4fwWb3Ki7Z6SxvaByjsW3jXUy6LZYSaJeeSmhrp647aAfCBxJSwWruyMNNm1",
  "key3": "2RG1n2JxDKNCF9jMLvEboYau96UvZ2ND241ZUZmvKFejEZCEkGv2KWF8p4didfPA44W7inByY9TXHFa98vcRpuie",
  "key4": "wkpHwCwUBC1rW8Re4EGR3TWggcRXUnESJX4kbuNtXf9fnYVFkaL4uZLDVP6BicZT97SCy2Wka6Uf9s4wuWGwduf",
  "key5": "57VSf5RMga3HzM35DmMDEnXiPuMVWf9R9eBdebtrRA3HKYnkpEpM3xB7xhE8gUXVQs7CVYX4fAeKJf6rVSWv3eH4",
  "key6": "5fg3nTV7wEjaqn86Mm3D1a5pEioG4sGyEnVdhLFS9F4J3TVA614cArRQBsnfU1bfjdyvmF3g6eNVqUvmWuqUEiN1",
  "key7": "2NG2zkMsu1hQxHVaZseckdbk44Cb7g9pxDg9B7aKS6BFnFkCVCLVYjLAy9sjPVi9TwVciUmZW6NBXtJ4qrRg8uHY",
  "key8": "SPeudFpiUfEYp9zL1cGquXdnzyWcRHxeRxQ2j3AuaxhgiwZpDM87gb5g9J7pGRtaE9fm3ew5JSWAt8aiuEwKPur",
  "key9": "3TNQWdkp8KG62VXioLSGBSKCDYXSByYXgVbj3WRJjTsfnLnjrhb3wNFdq1nnwxJSCzsXVSVjLKNvbTss3bxMGGUF",
  "key10": "3wjf6iJqWU6jEDk6L22cbQuM3Dz9FdSpgs1p1wYXaUyE4b9eXvYw2dGSHsB3dnYfpMmc9kPcp22RtaUtFq7whpQi",
  "key11": "ca8EoW1wz3T5rTa6NNVFPunU2kpEwERB8z3nA3ryAFKggqwrKk1RQC687JridCe31pci4ymLjbFcxtcqULoxgR1",
  "key12": "3QHe6FEPaqqxpWYyeGTs2hLCPTvEu9ttfQTj6AgKUQpSqMj4ZrWRnyBEwJAio3NekxSa85UTN1DTtR9jBNHW9cjX",
  "key13": "oG3DbwGnKytHFPdxsCP3QdvLtMpWLU4Rg1mekpw2nctcdVK35FCernKyVKJgUQ5JqG8SBBj8ddG7ZDCwqUHneXJ",
  "key14": "5JBcV6euYF9CT7D3NrFM6N25EPLxiSJdVh92mxNZpWj5LRZq9P3TLdzLw6favEgUnehSx4tCj2DtUsHWJFCZ42s2",
  "key15": "3AqjkK5kmMFVbzUsexQ1wrnwuhxttEerj4o8GZRi22se5zS5rsU8cGXJ21Fx9e1pBorK9fmZuCLtsYwxu67BKyqL",
  "key16": "3WZZEe9zG3FitzzVJTFou3UtxD5UE57URykAUhEnRpqUBPHXe3XZi7FGbEi28RbZu2pnLv5tLz71oXgx9jTizdoa",
  "key17": "4AwZBnFHBTeGLumc8p6hcXgoFM1ZvYyJUf7vD1eZfyminhDVrUSeTmQvDknXYJvFgZm4FBSFP6yPkRSi99t2gBRd",
  "key18": "2qXW7CFthCijPoQottePBFJZZ3p2nCWMkfhfByjLn8fMsoHNYrwQPnUVsXVEL1jyKK5cre7pQc7pN3iUPsRqQDc",
  "key19": "2U7S8JXvf7yK7dZkP3eQd75k8368dk9aVsmd2QLNCFnJSXccqinde2i5UvN6qLu9ozHnSLSgacafdBQpdNiA6VP7",
  "key20": "4SEigsvck5Dk4GVvykxWex4mRtppiHZwW4i7NvP1bC1TiDgZH5qXUAvmfffuEWRQPVdXyZGPSYACFnzp9WYL8gpY",
  "key21": "58mZmtHsVBsM357WfpFPFJPQjvBb9fBE5YMRv4FQzrBWAXLQTq3FexvTSWxEQ2eR8PAut2kf6JBKGwYBJTpyV6tY",
  "key22": "cyqBirqRaFqBCkmZdVdnpiXkJUsdPQVLfPdRbZyy632Z9irqhG4eh2UkuhMYGvjqMUtaHFdq4F6vnnzjN3ik6rv",
  "key23": "4hfekkCxHu38REyhHi7irKiMAt18yvtzubzzPjz8p5xtW64JXYfBY8cq1EAiGmbrLR6kRXNWzcMFGcyk3cxkH6x",
  "key24": "3gEbd9B4ppfEYu5wtcCawioE3tjwWpmrdXEALtAmYdXrWsW7piXn3mUieDA6r9VcszvmouZHgyk5B3KPfU33H37Q",
  "key25": "34aBeJoTAZpWRWYyjvy73tGm2YPGBicYKmg7PKG9ZAP3GNvAraUrqPFJ6PSToU8PR8YrMXupY548Z7fzD2ZEyBwh",
  "key26": "67d6whCnUndBCuBE6YiQvAdQTvkYbQd58fZAUBdpLvyqVyz89aQTDkBGbRubRMt3WWBhFAPrNwteVqiePzVqs6G",
  "key27": "2B3MHsbBDNgVT5FeuLo4ZmPDMbdCoSpDoCWo5iWdNQpBK4K4J1zipWb981KdsbR8mBTejEqRwW3uArVbsiGeMmec",
  "key28": "2MQqAiSkreF9xCwvvcU43adSNqdbgVtbPwWTYbExhz7j21dG1Q6oNBcnSVYoZ7gPz2t1a4DhYX2XWUXVngXp8nxL",
  "key29": "4VbHtdMDpcPk6BEwPFGXqC7d6ZKVwUDbuUFFrzt6vtG43St2YLKcabL9werZByThLWT18eWUTjhqwRHcqagiX6bW"
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
