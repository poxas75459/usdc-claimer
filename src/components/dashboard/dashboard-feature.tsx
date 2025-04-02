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
    "YoKyxQRbPaRgChR8YhErega32UxWiN95CktmQe6o1WVwdgLbuYYAV9ukoBq9CjdFTDx3xVEJvazPpbFDU35HXWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UnryEjrtfEhLhL3mdnM3t35cHVVCeaX6UTXk6k3gmCzWsb5SGRHxcdLDpwSfd46sW1SrHR3KvFK93FfWrMfdXyy",
  "key1": "YUdmBbzW7rF37TgCuEUazaPFiBk3u8dqyZWiAxG1fPA5q6PkgB1uKjxdSYCixZfv92BNv8K3XeefA9rvMRUAHvw",
  "key2": "Ez3Ycx68eN1nKY3Kyg1HbYw8oNDrnA9MnxKaBXuzWveqV2TGEekxE8Q38KqgdP32bvrQvvNxfatHa9JRv12yC6n",
  "key3": "NKUL1NHRxLnvDEDE66acU7Mbc1vsXdLbYjwoWyWDQqQpjDxW2ZfhmQL8bjG2ojtUYiBupyEDEqR2g2shipPC7Sn",
  "key4": "5Raw7UhTHgq2Rev4CZTerDvUjWyFssmZx9k9bD9WLGMrKXGuyHSQPhoaZtC7qUPVsX3ThoKr3rG936dFDTdKxsEF",
  "key5": "EyHRuYF3Bg3WcWU2i8KV3wUnNFqdF9UxgU19fiBRE5wnSKzruBi9m2DKAnDgov6BQxhW19RD6hdgdjVpPJDqhEH",
  "key6": "36ioHmajW8MZebuEVnXcpWi3XdaYR4t1bEMZPE9q5hMHdgzMPPToemmn6ykiZq6zN9tPX8njmYwyWcijo41stEFd",
  "key7": "3xDvHQjt8fRE4wbvKZNAxKXgiCcmeHV1WWbXxd4xWEQkYXAF9BABhjVpx2X5bvLhrmcBY9y2EBYznEkGNNGYpm5n",
  "key8": "Wpr8xzDpMdv91JEZCyxxiwqnF2FbDXzDusghDggTfGgTsAUvFDKXfxP18hKJHWSkVyXeT611bkj8RsLb1NmKbpZ",
  "key9": "3h64AKnd5pi6rAMgAjTBv8zgBr6n1pLYMWWFjEZtJ7zAVZLcXr5rWMYGDjrgEgDhxaaePBEBuUXRsUMgTNhsRVEY",
  "key10": "5eT2xkXK54c7hPgjpXesPcsQ1TDsoXbpngpBwmrwH6q11fMHHi98wXSmKoYnrPHgMvmvuajXHZ4PccS1hRRQ2hDc",
  "key11": "qvNxe3Ktxu3JKcn51kib4jGHUwQXjHko3e4nRgGwb65bwPTe13N6QckTFGfktBpfauSAZLf4aHcBtvTZPrJuhBV",
  "key12": "48Yc31s2t3z2puRRge31UoWhfSZwm9MVQcDo2EDAZdjAPkM5Zuk1xJvQt5YEGFAQ91WygEMwSza1vTuc1JDgq4EK",
  "key13": "An1FsGHPjJTYxGGHv1wLykiCANrVxXL3ytBEiJx8HBizCJMxLYdL2sh7fh3PAC1RwXG2ENbnXqXVJFpfEtkZsdK",
  "key14": "3151W6Fet7oXeVZe7u42XZRmnSwpfrJKfFfGp7kWKf5zUt8qPfsvAj57dVLaZUhs5ixH2Lz5e6s4R93Hs8Jiyp3b",
  "key15": "4z1qbv1ZbJvdzNe9HHZ3t2NJbHCpiEFzAptmWnDeA4FwEdBkLWoqxSAnsXkHRzoF1ddPXUSoDU6Tq1DpVpGxFjdL",
  "key16": "5qv3KbGc6ZkgNKtGYb8weKepw7DdTKFHbYK7Jx6Nchy8kkVHCXwGyouK4jFbaMwKYNQViyWpxi6pnHCr5asNfQBh",
  "key17": "3TsQhoHAA6xQAcWaKi6VGj7C5VLSUAewZiSxb8rzoDQoiAcDdPQtj63TGYwUZLpfh1AXmkJwCYDPsaMfgqxJL765",
  "key18": "2rx7RNtbqzSVNMutgNPgDRjyQMyGHsqa2K4bDxaG7Y1vjaoQtQgQseCbxsxT4hS8zPwuLjFWArkZhzf1WwbGG9bn",
  "key19": "p5pMpPzVKxzutpvcyAMbZjtrCeyhh4KmuyHZp3UF2qCn4L6j6N6xrnH3bDp1FFqiFopxsoS7RArwTkqpcCWSivi",
  "key20": "4rTxRkzrPPccnPBFFmSNzrfidt3PsbZiYAo6DGxuCM5sZKKhEqDs7BvnVqadVU6Z2kgYwtuUt9HLZmwzowEamqZr",
  "key21": "3HyryGNj29RJvGt6wKQ9gCysttzcN11SpuBjeWusgqmAwV1FPyi7bCkwoiP3nvxGt7rRJRw3mNcs4mcB1XyfhJKP",
  "key22": "5u5BvruCiQGMYVMV5kARGfVVNMxtqoAuu83ujKp1y5k4sMKqqziYoWBEe7xDG1cR8Lr4NftMZrt1GDBwTovnCyYv",
  "key23": "UojBBjP25cMx5VRrfEaqHmREmW5Wmxs89yJ2HizY6upnmmKjLGW9hnjhsTTYL6hBDashB1RNi2nZZwpBQ9tNKsx",
  "key24": "31xgEqqbcHkarogvmGk4cgC6HgHbedzPAEFME34bPw8LTq1g63zJHVPocCWMcATR8wYttRhsvE3XhHMSHdF6TKrp"
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
