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
    "3uJYuWHHeYX7ZgaqQQ4wyNytT62YXAfPB5ZNF4EKD57LTngvjzSwTu7MMRB8tsMhv7mCuttWRfzvshVPPspzPAJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b4VTAXABTKguEKcYK6ecMnHJfSs3MBRnD5CX3JQWY8tiMPngegxTVMZDxWGmGjMW1iw2DV6MNErohLFVYXPGUvd",
  "key1": "8ovzzc5Ka4mbnNebcTkkbdFc8m8MMPZ5UUnbDhN9K7UrDjJQ7kJ4NXaYm8g7CZNL6fkZmUh6mQFHrb1UgVRnEm7",
  "key2": "KfK1atYM19NTcWqu2toteo7CAPW6hSzAGYkMB5dxVszCyfwGw4zpvP3fe5PbTyFyTZWsNmgXyN1wFGXiUN39pnn",
  "key3": "4Q9JJ9J2dcCBcttdm98jffgEjWk9PkdVYFubu8pgrTQY87m9pj9uEBUAbRn7UvLJM8WQ9L9GYJcmndGvDi5qBeAJ",
  "key4": "66vgPbP56VvAhtwTnFJ8os7jy9cuq8b6iojhqfLteic7UGHhEh3kmy1oyxYGkxEhCFUeebcDvHj8J45nninzcuXj",
  "key5": "9B1bypJcRdnurBQsWF28Tr4ADHLGGZPm4qNnxM8q81uHbCyBEg2TYm1A4x1u4nRdPbPY3qywXdc39fzgpZ6ieLM",
  "key6": "rFqUzizTUvfQx2dkiSZ3XkZb2yf36zVnv2AaTgNYv7a1iWZWa4NhfjR3ZqxP7UHRCqCNzezhsyga9nwe1MEUpbG",
  "key7": "5WLVFEUyDUbRFT3U2gqd8LgYwYNbJsnK8tkvi32n1bTKF2t2xjBLCTX3dic5gUiyTqgFPKDnEyfBYnZTgezdCh2g",
  "key8": "23Q9CopAhXbjj7smRxhSXBe5Kpoj2sLAbmkW15NonRtAfvTqMA3LAEsgTSd3hkX4yMCRvRKTs1ioV4B4jGZqKDoL",
  "key9": "2bEEWdACK5yDQBzWPEuzSzvQwVPofj2T1ZdvuVWBynsD6TZRgvhLVbkNsPgxNH2fsrKWHNzxdi3NcWmi4zvRfCS8",
  "key10": "2T7EuqEThnx5h8XtVZ3zYvBckz7rcucSyW7G8tzuHs2B3PHFKU2Pa1LEbxVyxtRQZnMDCYcZBuRx3FPRura9B9gp",
  "key11": "2aWrBBo9y8DvUSrBm63bKR3v78ojNNscVy7VeFKegfqdCtAcJq6m52FJtBGQLfsfqK5XgXw329Y9C5wVq4e3jGYz",
  "key12": "3HzxHvVbe5eBSrUi5278jmPg4wWzRa97vXHAd1z1wbWmGdVgmUjbEX7ysvudhTgcatZe8ZhqqbZAHc6Ws1YMmhWY",
  "key13": "2oj6V4i2gUKqEMCSAGU6KRUeAj4GvSDxTTDRr4zkJZceAw4XGYDa9X6g6FXE5a2CntMaU3izNuDzoP45hNGsMCC4",
  "key14": "2qrBrFXMWJBFbwFwUJAzgAYCVQUPWTL2g9PjvvJfkNZTWnpJWfy8RV9tvTQCSmLcBT9V4PfCjd1zGo8vSkgNKjL5",
  "key15": "4UvazvFkSDaLKhGDj8ucRsoJbAmBA1HiiSuU9kxz5C6FC26uNTJcTiGfcPz9psGPRMnDjsDz9ZQvLY7emi2cjkhH",
  "key16": "4RuVUEu1uCTqgytHJmJStRnai8CA9oszCBrxuLNPMawmev936KPNgdGnWe5EC5Mciid5wvfZK6TALg4qfcyFfZ5E",
  "key17": "47W9CaveY9fw9AtHS84dDg2cqJgen34yjL6W46tjbjqJmyXC8dsPiApd3Nwnv8M9AzhUuYHGiDmp93Fdd1PYsDX5",
  "key18": "2tbTX6Fr9At7RnCHQkwkyeLocvkkTk3JSL8rKhYJEdCwa543czRLNXEC63nzDNKGkjNfV5BpfdyY7JcphAXJDymB",
  "key19": "nG81uPVfh7wxXrq6tCq7jw6Z3Uy9pKbxVEoAHuGN1BZMvQHFXC2bNn5FVfz2YcueQj4Fxt7fGLZDiAGF1xK7kZx",
  "key20": "2MMjJt2D8zP5vDf7XpD3bbQreWQGmKYXzFP7tiEnuern9R9Kvf5jPZXeeYpvohBaVon7FRu5YMVahZZcK3odZenv",
  "key21": "2mkUau7Y3zp9wu9GhQW9FkfAeVLS3rvia9snhiSDaJVqq4tCPQH2V84HaG4ibGMa8arucCjmAfL1YztLShVZznHT",
  "key22": "3CzrWb9GbyejD5sK3dzS7uwkG5RAMRAnQK9LsVbT8DC4YSdrjmXgLnGNCvx6qCtLp7dQSS7t6J1CWYQCkod6VxAF",
  "key23": "4g2yqzzFM7isrKef4tHH3q7fLMFfbz5fGmFvmEbgT8dRFN8ANuLKfyRX84bdRYYofpqgnbMcJntayPCYX6ddFZs6",
  "key24": "27Ket8v8aPSKzhpLuuL5fd2p7cdPimFWDXNfHZdckEvUA6J2goHqEX8pkcYehyiwNfaDh7vPTjScKXjUj1THdGHt",
  "key25": "3HrEzBbAwAbknLEvi9GuNXamiZyCUMUCY88rnFBchWfikzHGSPgDToshqCj8vQdHn3ov4jaXz1kHN8CUsVcGR4Rs",
  "key26": "5UdaftNZUokKNSxbM8B8bXBYyehgv51aJnGTTLv8AV2YS28NLs5UJ33s7hEoZvkbVGvx179JrRKGjMhaMXXwBtYT",
  "key27": "2Fr3MyX3vavMuqX2c83jDMhBwXNVD3NT6cvSmAytFrD7t6EWQW8krqpZQh7z8SdsQbGQWn8DfRXwufszYFs1y3bE"
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
