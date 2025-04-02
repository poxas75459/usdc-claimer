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
    "4UhCezAQzshWauX4pPEmoF7YgCGivTVXtz7gvTF79EwWjZBHbGbDhXTD9D3F7VDnVBRFCn2pNj7yxEG6WxE7BPis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P2N9huibGRmkvaCuPFoeJh5HEg3xXbpfXQpw1zKavj1cH4oerMrZnPxCDTPEaoK6rwvQ3uJSkHS9SaUUgPYoVdF",
  "key1": "2qQ4BtdtzDEhWGJJHu1WycjT6m5q4hiogXn8VuzGcEJ4yPRDE27d2dGXnkxzo4B1rScERx2F8gQsVwV3w8kxbkwt",
  "key2": "2isFFDsZ8DbcymShrJ6xB6fMeKmha453k2CtHTtog5Du1QPEWPKjhYXfFunJEq1V2oHVfKEWdWangd9r4yqoExbs",
  "key3": "5ra8X7S3Y1CttLL4S5A3SEyvdEWT5G4Dbr1Jyuf5LBSLEFXqYnk8ATZsTBMiVdFGzekxvzDd4uUfM8ZBTELymfSx",
  "key4": "4MybscJhTNqhN1cxp41BbeHg1Wgt2k8cAsGYwgpZxRjwnx3bC4vAJpCyAEoviAcwkX23kPhgic2Q53somKDVj8rM",
  "key5": "DDst6i7hgckRJ2hatA4GuVzqRsYF2MHeUVxYgzpVCdq8gywkF8xmfYMAeDm45EP7tSGwBH6gDdsVb9QGVqqcTuE",
  "key6": "4Z7FPHn2oQzhtDXoL2GypdpdD6PePumHXZuHdnZjQP6T6H4zTSBpGeUNUdLKn8i5fnHcuZiVgx69111RnqFi7pXF",
  "key7": "55UF316jCKGpfc8PGmGTEgXKNoFjLwseCATTi3qVi2rwLpwqSok8Ts7AtQMVCFVrBEQbL3eKuiHJzNzvtCzibJJm",
  "key8": "HrjfVivy9KAEXvWXMHNhniXEMz1jNPUCHS92Fazm5zuntt8DxebDY2UG2FaNzPpHM2XG7asE9wnzoh1ADwRxuGa",
  "key9": "3Xe95qadsaVnNDbK1gLT4kHPMCZR58UycLQJH2XVngLGLi5QLyvwdBW6YdAzNKXotwSnqspaZWPPTPdBrmkUCKcn",
  "key10": "2tPjhedhhWeQj1QU4GjxWRcu5eUrY5ShFPwGN35p3QC958NQQeTjeyUoKbxcRkQTtgbwLGFT2sj3Wx7s5Sy2FiHC",
  "key11": "eNg9dF35fknzkjkxWSvCAs3coq6FjP4e6rmd7RAKePsPgTLz1AqMqv4RnoB4ktFKcr9Kvat5xe54DzKYqfYF2F8",
  "key12": "2Fhfjj11wUzEfWhrhdLYDsNLLiJc36rYQAbLWCtsK44G8piUtHp1DVyPQan6fHeYJMQBosnPmnxcXD17L23y7Kq",
  "key13": "5gSC8pD9m44YwbH2b4J2SEZSTbWDY3DbCfYyGZatgCTvxnTE68MG36ZuwG55XzmQ1S2yADK6nicxMKPUbxNqKYzp",
  "key14": "EcmFe69s6o7nhJVrLKrDUzK4mhghShabsXuYLRD1UkfMwW9iCeHdxFCfjVKjSvZ3znSXc56zaXpFtnVxGrJeEXw",
  "key15": "37cdKDUUw6qhuzzMi6kWAGSUaTdk9Wr7aomMBZdkykCBcHJSnJDUEY1UUc9TtJh8QFDrYcWNxwZ5s3vHqPaXUckp",
  "key16": "2hmQwUiJ1TGNCMpJEGtCNyczNtSpzW8mpgzNNJNswjJVq9aVjt27eDRqNa3MECS5qvJ14dWhiejqLhZdLZavHbhT",
  "key17": "59PQd3fTFDPx6Wd5sVEomACd85dFGNVxKvtuUfcFZNAkQJ8ec5X5RDn9dk2bAziwZXPD9xf2Hd7RJVvmdzV9QjHt",
  "key18": "3VVhMBo2s8MDPhbRgmNGHgKzgGWdQ4Kvc2CymRVEgdb5Qfm6FNS4kERX3yQL3NG9a5jnTD3hCFkzxgpKgconjJDu",
  "key19": "1mEffqdiyjj3HH3jysPukeYAf1xHE5XCgqcXsZZ4FBCAga9MA4tcAc5VGK5SPm7FHNt7B8tP6jPnXE4hR1qo8aW",
  "key20": "5EJgz15fiTAnznRUVsCcLxhfZF3Nrdu3aff6KNKXPdMtEjzZDecBC9ZfC1jPWgbiM8RTXWk74NJGoPa3fMYmoKF5",
  "key21": "4mpmypBUnp2wBDt5RK697AYiLUJupWjytArymBcxd8rfBeo98RxEHNrUh9bXrqKZqt2YfyaVNc4RG6kQLVUdjATf",
  "key22": "5Qg39n38qLN5fcgSUVQBdLVaTvTk2dHXZTSpvGz6Gh7zLMdYUiQGhCANNGa8UyXQxua7yXVsz2rCp8oPBZNzubcR",
  "key23": "5HHENSEimnvyqGgs9MpEhYv8V1HAESYiQgispdB67btZy9wMUdK9NVohqonpNALCyWRgx2m25kfm54DtG642auMT",
  "key24": "Whwz5xg93ggANb1WeEKhwsUNJiu5jUrW7H6fGwKhv5kzCYvBqHq3mg6WfUMvCNU446XU5EiDEKKj5KqA2LXWrNo",
  "key25": "2dYUYV16DpgqoiL5q9znahGCcuLUBhktuajyvMhW9gW5sFkvLstZYc52oFeYGUQnDzLUrHiZGuXBFA8rSx55yEMG",
  "key26": "C1jkUev94bBfyz1hQKY2yDb37KQLWeTJKUvEUqACSZXTS2yy2NkrppKgg97GVq4uP14jmv8gbPUTDy95ZwsJiHE"
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
