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
    "3nNk2aM8eoCUBUvrZWC8u8RWbsVT2DzoAThnTtX7xfDa34Jo2eXZHPp9KQBC7KUiJzSk15DGcBHgDX4h4Zeja9P8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gz1zD5rmJbkLytRngDtidFuCrd9vuaDyUQFphEjqKhqrDKBB4K9vtHS2Unmk77mi4MtdFTZ4EUxn3xDocktvWKT",
  "key1": "8A6UzDRvryRLk2r9D4sLoPUSREcwEiqzM1m4yHCJyjzs649AntmMjpJBePFYMwrb5EeP7UGvBmrtTXXwMngbXdn",
  "key2": "5pbf2i4NjBGsHc3DeBLXGuASUYFPsK2hv1dzK626ahvAq1VNMMCHSVpN6JQw6md1B5xnjtEmxJjV53xnfwTuFyt1",
  "key3": "3iuajKkmRr3BpRCrMW7atn8t4bcN8qvEMRzL1WEbtokpJBd7W7yZtqmwRbHTvsEuxsz2ZkyLC2wWf8k8jwffubZT",
  "key4": "2KKveQ5PY75D9ftHVFBEnSk9peA7t4z9Zc4abJ1CsqAo73M2ev36kaKZEFe4TEWyRQBXuJFcASoYYP3HFj4mSQjL",
  "key5": "45cwu3KujmVwJwj8VandQnEVD7mhgUmKyni2W6ie4uxheqhNr1yCw6pJW3tv48u4f4DdZNAKKdmkXpcFMfYMyne6",
  "key6": "563uC4GntJBWy3cynfpKNqex4iYwZ99g2VzsmfQk41E8K7RDpstseTrvRjWmW244SpwvPe1jRqPPBrqe5tHCtoBD",
  "key7": "3WvfVcxv4eVjTHoPyrpxWKUvC8dohaLDwkDaZWnL4nppgGWRJ23NsBFfazJFEDp2hWrURLK3q3gyL9qAgk7sMGMp",
  "key8": "V7fAtcCrPk68mbui39t6rYTFRMoMC47rBQsqWcAjfYfHpDf4wxvD1U8aDmcTKosUotn8NBNkEbd2meQGD58j9Mm",
  "key9": "63ViBoaXtRW9BSjh66vPZp3oGxmmoh8E5eaYb3GWpDSTVmC9k4t5R2AXrykyZQKx7TsnyrZPey276u5hoAdNfMFJ",
  "key10": "2GYwJo5e9VmXFngAcA9fwZzDzBwrswiM3gsKL2BjRgSzb6oct6LLSMpVPFiS8XHwMQts5Yh8sTAoBoLDJpvsHHYx",
  "key11": "3vm2kkrtTmYqey5U7KNThNgz4YqHsvEkpzipag6c9xrBaUiThJe3nfzXQUJqNaGBajninHQbWJM5LwFM1hwSrZSh",
  "key12": "3eiWTpJmBdZyiFLph9Q1wm5viuVjeUAmSWo9PEJEGiW4948cLcPVMcHZaLb3RZBpAPcLt2U1NGRtCcKSziDJGjLq",
  "key13": "23pDHSh8pWaXe6zJyPWtrHoTvuZNJeBgkmApszyLpWrHkLSkCZQCWtTAVpGBUe1LHdiXZX1XZ9HnS9e4rEKnJ5mH",
  "key14": "2evmYLfAMXpwofZhWRmFtB1aPWR9gTty5HCLsLB14dij8YxUyDFhannnSdECv7CTw2cNgW9ESZuXiS7D4xPAb4qh",
  "key15": "2Yh8SMctq9wPp7y78nz4whpbECJBpm7pkNcQYvX64NUyyxRAwUVZx6zReRETzBDet5G5kHAeTPgzZJqXKaydRsUR",
  "key16": "DsqHqVQprHjFdGRqC4dfYKUDmttmTks4LjUytxCxdKq2nXF1tde6MWXq2WQY6PqA4QX99hXRbL9v7wadD5c6TXs",
  "key17": "62nvfegvoKL22EinfK1RrSJPCczZqNqmjPzkxNgh8nXDc6G7ioTnXWQ2cLbkw5q76cH8A1QJB4sH3w9QtckChvR7",
  "key18": "2cDu2r45Bocy4hST4jZHQ7K5Mk3QZfUgar41RMeQfdrmgNwJrMECzFuPEMceLX1HSASZUMFnbnGgUUMNq99tpTix",
  "key19": "5Dy15oEpe39V3QPoXwak9vALmNHRJUXgxMrxiG3bSzrhMxt9XedPZuzVD2yyDJn62oLcrgYXW1hPAqARjW661oX",
  "key20": "JkpzFJhjBCdEVjYvFazmfWiMS2Jn4Pi8meF9mDfYqtEHn7LtexxfccFyGRsynKyMP1PcQQek62gzoZiu677CdaB",
  "key21": "51iGgYbqWHo4fMqJbjcS9FT66zckLwX7T4CYG1ynXGC3D3mH8W3UKKpx2whuGhPrKpSfnXkPjRCyJKtfwjWTFSDm",
  "key22": "58X89rD5zsBc3UWXMAvQBu7Bz4cRQHVFqFy4jztajCfqoMusqvsWXrYDb5dD9tJpCekuhF5LiEJAv1dnjk9EybUn",
  "key23": "4aW7LRWs2EU3CVHzw9WyeQiw5oZrXBgPDHPmnH2KBmh9FbaDATJhsmyqiaH4C8RHa4aQgtk3JGAZbmxi6bJK5chk",
  "key24": "35hcGqjNan1xbzZFey46jNtdjKtxXwefQgnJsPZfDdzDdfLjcwMpv7nMDLfKR3HMcQg8Dz8KHi9WtG1DkpyYQWSm",
  "key25": "4RcsFQzVCT5dMsiL71T7ZPZxLiM69dN9FcTmRFvjpFAPhQrGpW5uv9rbrvoMPJQa65Q4ShZMb2qD46xAWUKXQwSC",
  "key26": "4X4LLz239VyT7rM9EGCGcGkeLFWtGqN4dm9SYx8zMNhSmzFSqcjiXsiH1L6jeqEw6Bo1aBPnBvMcvCHyCqJnBDo9",
  "key27": "4a4DRuCsXzwVZaLBsK3S5npWGnsX1y9wvhkSRBNe24uHYehwSihrwEZW43w3zAY7S43M2cHh4CAhQ3vZarrp3q3h",
  "key28": "42cA1h9okxKVAKmG3zWdYJvuqrVZmXKijpPtJpC6eAHA3pUfvftpAvMAFfHS7guavUnNLEfN5GjYzJmiyEwuPtpP",
  "key29": "24uFu7JHj1613PGHsWZg4r44tyyKUvsmv5DDUxUSu6fw6d3rpYrdEj8mSGhgQEsHBuSwncCMqxQaS45LwgxBFsux",
  "key30": "54nCLGfe37DMnsMoCMLT1W17BrXaRdKBnGU2LMXaxXezf7MghWh12E57j3U7Apmb1RKdmMxfn2CGSeCc7WGLsdnY",
  "key31": "6vdvk8LFqk6gNcyy453ttFMskTj8H5s17H1aGRoU8iPBbivvpSEfv5TJvH9va7Gpqkt84bVPWFNFbQLMyfnDmUm",
  "key32": "3jXSxMCEGLvLXVT8kKVjdNtZX9emtFbjHwbfvzM6zo3anPc5gqE9HGzf8ZWFCAUJ2FQ8LfXbPVdzDU8Dv1xBL5uz",
  "key33": "4ybGBDGWacf6ETFADLnmRgCNJBg4gaDRGCnz3x2cHg9mNiKaPiejSQXbVWSz8VrhPpa3wqY2pQ1wV9bitMqswJVE"
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
