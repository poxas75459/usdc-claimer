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
    "53XYuNJZxeaD7VGUnmg2Fo2Zfgk1w5reQu3Rye47abZU2wS93ajW7AjhuLWgAdRXBEfYSfiQKZvr3nUTzm4FsQQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62HRaEKcBTCvXGZLBeUKqCLsaCpy1KPKQdDT72a4qbnKEbp6d1tNe3MmSTrdgkbbXbiXZdXvV8czcrQtUKPbk6MT",
  "key1": "MWA7XEbZCYe4c1sQrwGaR4sWZEynLzizkZbs5t4zqFTKHUBfBXxcL8eBck9HSzDvLV9tyoA46S2dH6baMWYSpzV",
  "key2": "2W7nkdWMGRVih4YzAtkTkZvLkWpyPpi5TSPyPk88KiCXWcdt8bWB99PZTfTxdT8UJveEmmFYx3cAKvgoVXVfN3ra",
  "key3": "4zhYQevG55VxUsgGUeve5LEnPYL2SpvVRo1Q2iL2kMgVLZu9muyM1kDHLUNgdjjtPqby98imDq93f8S7DYVHWd2V",
  "key4": "5HFBYFiXM56Er4qrT3NsY9XebFtgh4G9itTYuHFUfgoWcKwtBFdCxohFwZsjcDCWPrsfVu9X9N5dCUJQY5SpDibc",
  "key5": "62zfA1d68dnqxyq63H5i854aHG14YLGbuHn794du7CyPBW78h9Gz6UDbZoTgbhEPGivwz8se5K8mgGVLq8arpBAh",
  "key6": "YNk3YkSk45PQMve8eHPVaV2isyqnM1PJVkN7PenhRzdc9bjgEuhVKAxdwCj2ywwfcWp5EikUNTQ57E5SkjN6Eox",
  "key7": "2H28fDoQmhtp1QYXCQDtJktH2be5WmRtjNyMDvPCgSU5J8qcTHcfVwqmpF6ZR3yc513aVcjVdVbRQ78ZkB8JhiBe",
  "key8": "51KFKWdxhuW65QYy6bgY43gXaWqSeqSNiSTgZ8NGvxDLqAJ7HnpMVBeCqd6ispRVxP2GTt2mBKQ1QWgAtCCC6E13",
  "key9": "62U79MPvd86tBXuBQioJdbQbCvHjMkFKmoRtLN2hyysXsE94NmkXq56BWTD9G5oKxZHiHG5LKy1eBdJEBHRS9cKK",
  "key10": "3okya9dpbQwz7PGz1SC8SgNtz7obXFQ2DAKVWFwSVAB2LN7hPXVid7kdgW1zWAk9tSBXPjGxygz8v2Cpv3jbV7oo",
  "key11": "2MNgYtz5KmxzaskRSRuHsaaYmvPr2CpPd2EyKojjPCKq9PBc7BffGJ7Jhxoi9PHSJrWCe8fyd8FUSfrw2nB96Yhv",
  "key12": "3BWHbQ4zu7cXkypt2U8bP35dfcEBA9MhfiVxUPaKncNBpEBpnMbjQGvcuvGAw6JZkEZhPzK2WRDoG8gs8LAkTirg",
  "key13": "5hukpHH91iiAj46eJa8X53RidiLpFDZgTeKcpnRgUYgvp9WvdyfyZpTRisL1cepTMXAWopBJsGjMMCz3kEEZZn86",
  "key14": "VTEMRajN9UhVo2Z5tFStNTWmuYs7LKf7zuhSoQRZJwwDs4UhGyRBsSFK7vojvqWWUnnsDj2GJfRNbVMifMT7sPg",
  "key15": "5vw7HQhgj46ZxHmENehffJQ4wiR9CWE6KSBQYK4wr3pjt65cSPoKHjoLUzbqvuMst12mhzKFGtFinqtEGPPnLZHT",
  "key16": "3XdhbVkjgCukfrq3ffBMH7BvzJrMTJygTisufUjjjb8499vpqGxSzDCyNS4yWbhN8WMNFNVwHGtCaLgrpvYyom8c",
  "key17": "59zpRLvmy94UDGk3cC8nkMY7NEyzcewTckzHBocf4HZ7v8kDeLaZ1rzxyC5nW2hQnvwBDCTjJDBEMZvK2sB7JRan",
  "key18": "GxkVkehz5FCqViSGj4WRdXjdBMEBhSA3TJ5hZ4Gr9ofa2anXLgeK7Yzi8CKvhf5BtbVpvPZHE5faLEa7nXmXZHF",
  "key19": "6ejfGk12g7aH1nuiUV1MJxRNL1gCVXT3Kq8K5RGjqC4P19qLxebnoLyUZCaaoJ7VepeGkwp6moDKgPuaUunrNP1",
  "key20": "tECm8yqDVie28DTE7zbeUdqph37xgL12qs7yfPCZbjFamrQBmnBLbtBQcaR8LTRRFef6W1wFpVG6p68Uxh3GzUZ",
  "key21": "3gGemkwkEKw8VmRCinX3UBLKHhuP7SeKareTwb6aLmXs25k868whxAZY2PJjhsqzrj44zZhnfoGjCcYjo5St86VF",
  "key22": "fQZkyhe3wkxNuWvzVtFtFFkrrN97eHDX7cNvSMCQySe5U3w1FKeyAv7wHe51kPJ2RzDddri5PrbEmtvsJvSMrka",
  "key23": "3QuRDUMgaMegEKMFVNTnbbicZ17fi1sTiTYgMVxSwTbjwXPymgyyjScNxxPeu1eLzcYNmbjdASVorYGffobazGZk",
  "key24": "3pkj1NofkapBLtitTEMsoaU9WdzP2oNNbiRQuvNS1NBSGK2hB9f7NHYTpY9FFu3ujPbtfjnx5bDVKtmCYfs3psbo",
  "key25": "2DXAMmtjpXfv4aQBtif833ZmEAwJNpswVfd4BzJWuVi9JUC2X6GQXWnXePJEAUjKbVTqXShfMaJhTrw3WtMbAs4M",
  "key26": "633yNfR4y2zaTqbip1cQJhUsEzYmT7yKpFNL3feCxaWRmHSDau1H1rLARU2uX8LJsUmHPN3gnPcMqJYrZWuqNfAR",
  "key27": "3GX1eU6mwvCaHhTJCoepjyUVBXBoJHZ7ZnHTVXKhMn9SGjrnGbN9AhwTEixa49WBPaKVLxEMetDefUhzTpFpRVy1",
  "key28": "4m6fa3sobfN7K3LLY8951rj8EA8k34pzUVLEBdYKfNAL5egeBA4pWcV6mTSUKxG6iEsbf6VktXoQ4FCQBrNtGzaJ",
  "key29": "5AjQbSGzeUrhx56e1sD4ianSXvphSHWUucWR3ahwpNAHCmDqFnApWgEAa2KXqDq3eoiv1BoGuPaWdoHzYuZALLqU",
  "key30": "uMenRnvpo75kq4HR8fLpBxdE7oHv4xvJEGHTCy5xNsoXyPzkaCb8pxmQ8MeYt63d6ECpDuXqU6YGfvt1qWZ5Nbi"
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
