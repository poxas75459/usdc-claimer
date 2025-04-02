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
    "34hHWrvUMQbAzwbjMCEUAc3sdXGiSZ3d9wh3FsVSxjHQhGPB99xUXCGqf2eWAYMf4GJMfxZZSC5wXPJkDvzBASNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RSe5UXmnCw9Bjp5hmzZBTnFRBfCz1MT4zuU5SjFvEURmtPEc7UgBT6Cm7RePHdaBr5viBWTKwmaqgJ8d3jx7akW",
  "key1": "5BpA7apPw7kZUREhLJTzW9juJPm328jPQehd8QUPK5NcdMtF3Vqixkedt2X6qyGLNjghAuRJL7SsDUdZ36WqgfpV",
  "key2": "2xYUeeJEhTcmsHzM9e1DjytySNBxCE967EGCFB4UgKGmRVchXgXKyeVUYAgLzHgmqrx1VBNSgSvGTNWRt2tMeHgo",
  "key3": "zHZxhxXmEoh6xmrpvqrYqyML9LikUrrTYs2EdvaSQ6CHDj46heQdEsaUTYhQHz5kn7RQjLho1n868gpvmMtUiKE",
  "key4": "25AgedueJKyUVQCkmgP8fvxzUSzgv6g2pWtE9vbCo955HgPJxyWLBEvnELNfLhtJeRWrUYM3zmRz3hFdhHnGuGbJ",
  "key5": "4sbRX7C7DM2HRu2YDxMuorHgKEYCp5ffiu1tgTMeJqktd32YwNxGBmrFRwzhBhm89UZuiJoP8SVBVd3egjU71yQC",
  "key6": "4kF1QwwSEVtKfwuHrYkypHvSmZVj6z2RR5pB3TG32sEwY9eQBWkXdDavEUKkgQN1Up33HeGaN7kGg4kkcuCxa9Ck",
  "key7": "e4xsUkShvafHYByXReqMYASE16b8Wu6kjTsDTp9qYrXsTLUcudAm2eiHrGVx6d3oY28eTo5m8uPYaVfYhTdMtDv",
  "key8": "2waJQbeftAFFMTYhoAKJiHzRCXtHjRSXqiEybcy4TBiRybNhaJCf5mUTYh3VpmwsfYNguzEzwthZW2PPZSh3sG2y",
  "key9": "2myWdWELYuuSt3vmWBzj1iBb6KoMpacLRXvVoQtvTKSCBFK6nhibqEX1sdfCcxrNekcf6vXr12yF6XKc786nTLVJ",
  "key10": "2DxKA91pBasgtxNPQusGgLRkThvNCbBNirB8o1xZeKC4QSEfNgz3SHLGmvB2x6dD7MFTSSiwqYoNoPMek9KH9797",
  "key11": "39TkfvWnK6GRRYWYjXJ4GFvGtwTnACmSQjbnGsjtTsZKoxPsQqnw4MLSKuh47TPHjDrTcNXGLNQMqcfi2YhP6HUM",
  "key12": "2E79E5U1yo7n4Q9k1PAp59SHoqwqiQYD3o2Drnftfmb1ufKC3YMTd3nr8uqWPnSPYgZh4tK4EkZAeeuMQ1PhBZcM",
  "key13": "3t94u3ieuTgXuryKeyL2oex9muS3JL4WFJ2YXRHbE1aKkMEUvtEFL4z6GPrabgtDhGWyqYZu8fjy65ghRCF41Ygp",
  "key14": "3eiQCwkKigntje4E7Q4GNLSjnr4yHq1a5Dmjxp2GvN45vxRUtPx6DtqGFrQduKYjtVteWst8XwNBNuhRYhALG18p",
  "key15": "3WfXbXVDA8CjFhjqXJKNS2gjJNwdV7NaNqcwhTBbwzP5JttYLK838sqpLArJcNDCvbMN3Mm6pfyXF995CWGHzGhK",
  "key16": "44bZX6tQccuWsEZ5LJ5yGVATzvZGGYn4qCxcFmU6Ywx7ieUjQbDPyfmnnHZAzimdCnz4rKVGw1CpNTtox4Y85CuN",
  "key17": "3uX5CqGukqrrBb5wMStcW4N4pNw265rKGMSDKvDsL29g9kKYqq4S7M2a4aNAydpqxNwi7tgSvKZh6NGxsZxRxQaW",
  "key18": "SwWEMKWZG1xpaKjLcgv7PBbKHeDfmeDmWH4fg47ec6vufcc9sSCRgEAFShZdX58WmhZbBM2PdZSqj8mngTA6tRe",
  "key19": "25vqfJqK4Nj9zg1PMmH8cLgSY4VBeKxuxeHZ81r4n5JcKCY6u7czYt2PUkqiKrfRfAJPLEqkPc7m7mC47jTM9QAT",
  "key20": "4SSnBNsUEsy6LvNUHuQ7zLVutnSzv1v5zuEMLBsJLP2njNi71P46HmntoHLKdmJ3qW64i87m265mYSXooyjR2j87",
  "key21": "3Xjt16m4NRQt43NZSZh4Cr6zqXHC1Ly21gJ86hggbbyafxzntf5yXRbmLv6eqn5oJCiCjBAhXjr4htZftkZpHBHh",
  "key22": "53SVyAZyd1zrFGj3F3QeYHrG5koef63t6eA33SjgsJKPN5D3bBoT5ZwnrTnzra9GJhTXq91dtpBpsDtRMsxQ9Tq",
  "key23": "5zcTEwYkEACkAJzfrqhbRfXSeKoE6pqEPhCJUWtKJafnNsKRjPhGRKNhsY336ziAvBVXSqenEeVJkoDdiVkvaWUL",
  "key24": "4JztjPdnDtKMzfzaX5ux2vJJu38Z7CSzS9FnKDUf6mfLiZvEyq6VHUwqb1svG1d8yivYBQmfwNbgdVCSGECn9j4s",
  "key25": "FyD1uLSjrgazxnyEWepPDJ7hCCjHvyiApMihvpckCT62NZAJGYSzEG7bEn1Sumj6YreeZANU7F3KzjYwGvVBMbr"
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
