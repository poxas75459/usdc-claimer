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
    "SoDMUhQDjPnQtQpRqMQw6fegj9t2eHvEaKW3ikMqmozJhKjcMe46X2FESnJ6VAVs3An6UuAsuboRqpX96VzsJXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3niVHpBwSk5bFFx3pYSQeNdyoGnpn19PsgLZz51hHmzY4Bz3KsEC6qgGkxfjjCsqQYf2XH5D3eHEm4MyPUJ75QJY",
  "key1": "4ZNagMoXo74vrBtY8geLwcWVHBbTgzqQ4AUxE4Z6MzNgRJAZqzgpsQKnkYz7HUeMqgUFK5sokpPxfTLe8At3nkix",
  "key2": "4VrZnKtZNoSmKdDEoMQhGU2t1JWFac2GLbUd3G9AomaCmx1HcoM5YgX2TedcuXrU2xExxYGY6CJj5TEan4bsw8fQ",
  "key3": "4w4H7Aa5G4aiP8GfwF4yvVXamhBrVaJPcki13mJUPcrdkB8wC1uZU6rcXRaXMKYDUdv1dxoNqhw8ZeR4kvZXBt3A",
  "key4": "3GQyRzhpSDzDNRS3kPnQbQBY5fBtgupMVGHYLvhFtKb4EgeEni48CbJtSd96Rb9z4GonpTHnULWRA6gBGsfQUupK",
  "key5": "XAF1UvbnQpS76L2b8MfzpXzr9qBXAfTRQ4qbWxToMp6UHofNUeruNfzKP6Ng271ZWE97JqUCJvdaX1iuv5MEeck",
  "key6": "62Qo1SnPHWSMKpsrT6vSkL5oBvXue7J9m36VX9DsL9gMzZuCUJvzqAJbrmc9q1VkMWkDdWJeYHH1iaEoPYDUTsdT",
  "key7": "5Mkgvu3C7MmDZKFDqMUpHZD7qsJnfdHQZKjpq4Vqj6f3PCns9wRaPjC1VLCb8g2QfvG6SmgLFHTujM31FqCREq4w",
  "key8": "4TnEQ7GbA928YjsvuHuTb777cXHh7wAGAw9bgFpB12uvBQPCRCMB9ZCdGDeton4TZbDwrVaLkfZjA8qnNHBbZwuE",
  "key9": "4R9xJc36ifTqn3mV54oiYbDvkJxrFZuaP7kG5mCtgJvbAwGvEMJy7jqhx7avjV9yGEsJVLiBjqDHf1dEVGD2apHq",
  "key10": "gDXGmUtDGfGnSER8cysNF2qb3SBDn3ZuFQ2ARStJaUefEETUdjFKQaxTsJFUffWHYDGc1gXrhqHn28w8ZoqqkFV",
  "key11": "2fQQr2PK3j3z2x4WVh4XxTqwZe6tzsdEVGTtUobHx52i3Svt5PzZz35bH22MEVJdy86GnG5h9JvAkYSNXhYHrLQX",
  "key12": "54fXfpTfCJrfs8SRvHMkKqcb8scD6Z6eNqTAyN8PJoWBCH1KJstPBubiAwb71JY1ZEF1GFoZ84QwPytfUXYgcP2z",
  "key13": "9YBVg75Kjweymcw7JW6daAVjRB78d2MnWVyVDSLynQSWzZ8zcEUEokKxSBoz8oLFFXevcywPaRNZCbCEjHNANsg",
  "key14": "3gmdFr3jsWre3VHV8pZtuMLW8o7K65wqJpQeqJdvmfubgzkC234uueVZa9rcPvkQgemLyACB5AWg87TAf1Ef9G3D",
  "key15": "4LoGxzE2wvDzki9GGCaTyWyGqUfcEsqBphXXJqRHotrYgywKQC6WenNNb49Pgo6BYtSj3L3k4skpJeRAGUS5yMVa",
  "key16": "43AnjEf2qS7SkLfmqnScNDdB1dXMWowDE1fSz2XqXWPeHxwXLyvKtZYv894v771rU9uQobH4gud3eN12usXcw31u",
  "key17": "LYHWExhVcjQ49foc9YAzDjd7vdSJWrwWVdRDMbu6BdtjxrTVdLr9bh8VyrpiHk9fumJ13QNeGzxCo8cE5nawRi3",
  "key18": "3heCu9VnrQoGJEXoWnF6bM1JVLGjwAgocEA84fKbZDUVizjCf3u8yaPZBJtusBRuF2mtAWQWLrqT5ThAEREDSUF3",
  "key19": "5ykDyoJKCyAhMubc8EKz2uiPyYUfKrFd8AA2ysDJWseRdJs8ab7G5fUUsmrudj1g47QhcKyruamTkdqgiUw7mrb2",
  "key20": "2SJxJdEdteAmmAurXHNMd2uRWCzF4QhWK2dxwEvyR8t6p95fY6eLUZWLdf8JSYHotg6s9rt66oaV5tojM8xrWSpG",
  "key21": "2TBsS9SHgPYaAJK2MsqUzCXELjzSKJfx3ftodJeQiKTM5b7HkzETeaZJthZDH5wHo3sUTguYTKqX6B1kaAuEGEWU",
  "key22": "2p1PqpSSjpFh9PajVdcaq82kiHTEfqguwUo1DRN6Gnak5u9ninrQe9RN7ijeXXPPiSzH5iMdXYSCqVo6QpS9nbmK",
  "key23": "49A1eBSYZL1hiyT3wHwCXrnjr1rJFuR9yDLXMLniEEyY11HjFKiyr29GpiGqPNFe9v8bCh66obwpGNkUAs4PU8nf",
  "key24": "3AUBPaAxodGbLtjeHxLtxgHi1jatmX7uUepesW49P431X7PnJ7VZRGxdaVQGFkPJrPCb14iFhXZuBwCEwZViqhT",
  "key25": "pFkGem8xvGi3hx9aqM2aK8iDVzgFHuCWitrNuX2DgYzHHw7pF5pE3kSe6mq8U2EJrf2mGp9u3bUQ6sDVBUSMKGb",
  "key26": "2upPLJacAGcAmYqr7g1i5y1SinGK86DFhShZ4F7fXmJ3jNxQHGiCv9HBELCASE1GgyFZaNgHFHSttTtDKg7gg5pn",
  "key27": "jH2DeKB54iyAAqtUB1m5KjgmxmKodcbknXgb4JfaJApQKePd22GnRfWG1545o3JGqWurnZSFrFkNE3cGC1Gw5x3",
  "key28": "2bNEAE8MsafTaetNmqLyPQPepPN2dFzvKiN3EyUYgjvj5jFa64tnkRN4zyYNEQFZQUzPVnJUaRt1VdxRqZwu9NCV",
  "key29": "2VycdgCEUyaJSETxQPRracDifAQ2iuU5nDM92nbdEnurf2mQyHYjuCHGL9XzoAGdQQTW6dNtNSMf1fYk8mBmtoPd"
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
