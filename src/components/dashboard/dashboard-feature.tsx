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
    "3ozxchmrhydFrqHP9apKy7SGwYu1FRffYN9ZN6XQH5QEDuWrF5EpDacVmHxsoa2wFfqyPbrrup2konDrT9xQMrT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "16bLDJBDmDQvRd18KNYVrWy6ccKRsdcuVMVd64i9ssvjYu4GZjbXTYSxQHLaYeT3CiW8WmSwSX8BhqTV6LqvoxS",
  "key1": "RhyZvVsfmBS9H9Qeg3bN7ZhVifGjVYmLEJc2jnttHZ1Jsfc2UhTtFe9oBSAXp4xNvNKaPTxyE1oeh4Zrwww8xc9",
  "key2": "4A2Tbmgbkg4KTyhhuqrMHPoxebqwmPj4PoKKmhqJsQWKuptr6JVau7ShudT8jWzmGbcyQSkWfiYKqJvStnj1vtZy",
  "key3": "4PQM9NZMALsTjzej6tKE2pucwiR1JJ4KMNW7mk8SMCo9xhQq8fnRf8FwegFwpuczg8bmUdEUiyEZNh4xxtt8BC3b",
  "key4": "5A9K7vNEnxtrTyKJj9tkY5kYFTfKAdDgYAwrXHzAvD17vDbgC178SAbyBzhqgFMx7x6V6yUW4WQjeARuYDP5U6sd",
  "key5": "Xoxki8N1FNB8yXMWmLjSkPHCPLSoYCCNNfbecsSZPysh9rbfevSTfBGDFWpBPVBwDqmYSkWvPyyF7BLfzsVrnGk",
  "key6": "3qJGs6iVhd4FgZ7bgUYQfqrQtJaaBwohh5YkhqWMnp7kD6WPXbqzfpxSkWeeLu5RC9yrZnhmkmGVBVuy9au3PV95",
  "key7": "W97chEEuRckyvsQYERGurZTqkBTYMsdJPg8ha1nLTcq1myLtXAsQJWGsVGvA2u94SHUwRk3cM2bs7BtRPH4UZJp",
  "key8": "heEpcd3NtesWxL3dsxt1z5JGAoZLWZEASG5YD1nvX79LWF3zKRWJfeaeeoXtotWymyj9KF7SG6UZrMLFjVkGfP2",
  "key9": "4TH9kRAgb8N3M9QxBU2VMRnV6fWEZRTnnazSamAKKwCWNfmVW8k43ksF9eaPNYwCzs2GLHqpDw7dJjcjwPjYmJsf",
  "key10": "gaa5S9jdAV9urDdMqk3HsX9STbfQJRZyiXVrtUbEoHXJUifxmY6bMsXLEa5SzPEeHzP2qnbX9PRcYTUp18Ug6xx",
  "key11": "4tmTisj2fsx441rTDbyRymvdz1bp8HUZizentACxw6XUMexuXocN6KhZZ9jbUFfj4DY2Fumbs1CsKQQgcpkssmwH",
  "key12": "2iPEiQqru2vf6iUc4eEgPWdJX1Dgrg3b6FYUzYX21bNzf1zxieggNiDpLJVbZMrrccyQyKJ2owpuTtjU54qfymU2",
  "key13": "5RS4h3fZqm2tFHK8Fgyiv2HjX3UNSVLdNzaCKMAut68ZhXTpVAGELb9GLnDHXu2jd91bNXBryQF7zqHXTtjg33ij",
  "key14": "2wcqdxyn61FBsfA3SEvmB3gDtNfSehWBQZeWi6MPXneSNkmFmyewK5EFziTp8X53PCGDLytR37Cy5mYDaNmNoe6E",
  "key15": "3UL8ad6kWez8tsg3bBCgd7QPGLQngPEhWdtGgspuUbLaw5njxEgbce6Xg5Xmxuwef6z7KX55rHRf3HuN7j5f7FsS",
  "key16": "KgDxg4McjFTEm2pF7T2oGSELsbHnFLE3GsgP9qeaECKjnLPUKBGTVxMsoMwAbAXNarbp83BtLzN7RpjLQrCBx8A",
  "key17": "H1AzhfNAFYQaFJhiQQYscc12th5WcaJiveG4BXgx1PFmKwL698TAFmPAiTwrKCY8vRHei9H7sti5LkN5KT4xdRr",
  "key18": "6edUDFDwN3HBrG8aRzXYWUJWp7UmM4FXnyQU8uMsSVpmvGoyUUqpZ6UPXmPA6zm58StgeKAxf7BB4z7x5jkwvnx",
  "key19": "qwZzY2hqTS6KpF5qgwCaUH4xXWBmX9KrDH59gR5PpKW2VWACh9qNNh5dbspcJPRi6rwzfHQk68SufmdCvaR9S9S",
  "key20": "4xsWMQ7HBucdmPuj5Lquga5msBusFENf6tsbyefgvhBvZ6hbs1FHk3siLhDFeLf89yZCNzKB67GGmQnr7uqJTJEW",
  "key21": "5mc2sHheN2qAUjmW3L2bi1gKoC6nhhfg3MENJ1EyjkVAzVbuRSWLx1ZdsKhE3AA847smtYwFrzJYSHfJ8PKp5nbR",
  "key22": "5hMtfaTgV1D4Y6QwSdtTUzny1hiKFZ1SK4vdYXeLjEScsUYHuvFodiVhDXHPafzbAPZ2rK3CKKviNHUjUyVy7VeY",
  "key23": "4JJF3UeGG8pr3SoXJXYz8HWQyrTaNUWvcmwaA8xqyv7S3vQ7u84Y1rzzUZkbizeJN1Vu9vMSX4S7pqQYvvG1ztDs",
  "key24": "2bgbtLdn5Zm7BVUhoJCmR4YXGB162yGfVQ61U8HkgaWMv6WBqQahtrZhQXHDTx7kNHg57Sys5x5eFgACyVSzK1Gi"
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
