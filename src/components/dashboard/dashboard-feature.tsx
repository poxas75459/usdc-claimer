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
    "3fPRByXrppXH5RPS6wkasDdzGfG5uTbrCmg4kLf566Njdp3VdHxdXu9jZdy27gVyemxNha87QFj9s1qbrC5uZ4d5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YcWc17qcYYUYSH2by6pZjA3duUZzQZsKWfrkZdgVwZQh8sGmsz58CGTJ7T9fSt28GqoaDooaFHH4N2yj5CsgDNq",
  "key1": "3CUr8rdE6cxVzHBKapVYoivLaH4GDEVJ4pyQVzBV7PMbq53Kx11o2F8gZMvVMAp6jmwdrq2YHSa52oTMLYCQSP6c",
  "key2": "3o1KYwWTz68QNMsNXgWNXKqsUYc45KnP56tedwt9geRsQTXmgo8CFjtVNkSXFxBu6MGYJos8nYf7wDf3WeXMkPz5",
  "key3": "5yFaKwHXUhAmvBNt8ENzozYGee5zX6Sk7zWbzAwC2WJbudrDB5HN5puMLbmfdV2SuPsjn48s53GKmzq9jK1uiU7X",
  "key4": "V9XwvvnBtaUCjo16Aiq1D4p3hDrWjjsM8STFH5C6c4MREa2yPDxJ1XEH8FtpRPqPP2iXuVAV2gcmNMmStkaM8QY",
  "key5": "3j3gHbT7PZaHf8Q9rpM4gtT5993XE9yAhH7C1U7HqYvGqLWjbSpgWsYH7jEX5U5fCJtDcbg6WGoiCzENWRVRPYMq",
  "key6": "WdK72HjkoaBxc68dFKwVsYjUdQjPdPUZZUuLdYCLLtbFDSAe3rx14cWWpoQXLZxjz7ZjjKPHZZDch7XQgHbqo1J",
  "key7": "2twexieGJrwY7nkw6fFqEZoHMzo31pLQZcLC41j3xuoNqQrJ2kXg5ZwniUTYtFRSYCbFjxiZ9XH2bbi2JZunBPp7",
  "key8": "3Ers3qpjjPQSEmZ5DvFLBm6jFta4X3KpNx39oBr6ru49Y5TBBdgsfHwCvnzKdoweYRrNMMEjNYP5SyjWsxxWJ1z6",
  "key9": "62CvVLePvMCWLKLEVknRCJh6yTn9cctDpWYvTxwK3rUQx8teuqnsdmTL8BiJf5GWDfwWSWjTJR6YaRR4a4zXum9T",
  "key10": "2vE4Pya6umRub7XmCfASDVCiqps3HrPv5ZJQixZuaAWtKmTAj2B8rPRz9sBRMVx9xvAoqh6jYrnxsmUp6RHJmZEG",
  "key11": "1J91pxS1mwk1AJPFwMZcgTzPdTKkDxKJs6p7FhKeFFBytHtTVCZg8TPfU6dT3LnWcUcfXvsQ9hjotpEfjRQnfCR",
  "key12": "3c8K7gv79GGES5rXopvffi8PLHkeQy2eTFGjVgV3gT2yRbHKvPSAFLWunub8xjSBTSZAKXjeDrP4hdP6XrXVZhUV",
  "key13": "63DwzaJLsNjhHxjKChTeKso1ozCCbRrn41cxzdcuFGP62Yv4ArxSkct2kGZ8iwa7QDWQbg55HjoDnQSXLBL1aRGD",
  "key14": "2imq7yR47PeJyy5u2Wd3F3kSZwUrLadtwXDSb3HY6mGiChA2ncZd83CLxBo3FgApGs62FemLAQzv7FzryGbujyD2",
  "key15": "2bwMDCwn9X3afBZRPmSS1dCb9SLu7eNfFNVmi1KNW3G5tC9QGCtDcjQyAMLVfptTShjpDyTprEWkvu746TqrJwt5",
  "key16": "3B7j2JSjDGGc3SF8WfaTDvMy7DE7WB44bmLmUptaNgkvYpjK2TLPpAVPS3iQnoMK2kHtJff1JcsoeQ4Sc98zbUQm",
  "key17": "247EvXByQKAdypj7goQGAbwFcxXE5CiJJVGsRmf6J26UPAqjAGnxoWMetpMd9BruQtoj6ecr1acMDeXeHuuvddQJ",
  "key18": "28YpTx7D9MmfoM2B9nMEECG3wvYtSjf5Foc67JMvk2WxZaam5rXW9EaAjS2TZfpk5wJYf2GMs973BKnK6napgByr",
  "key19": "4Pp7oW6LRb4eRMsXCDnW8gtdeLv6Eqe7TVSrkPqgdUc4eswCNTDrSoeapTZ8wFPKGA5zbNeem5EwQFfNgvX7wFzE",
  "key20": "2ABgZZacfwFRro1hEcmsMwkbHbAcE5dvpYX2BhPpoo2LvZcACAQdrK8odtbRN8kJKeJHcpJMPNRonzBfB5hayJvX",
  "key21": "2ZikXSpMWpjva7HGPeoyRfJRpKceFW42x8ob8quQ2gk2Lx9ADehaRzAHMo16kHwoiACDeaA8Y3qYbE57zCwZcZSf",
  "key22": "3dMNBeVXWPghZvhiAKfzpmDkk86c1PLpU1F3A32tSJkbaZ319Gv68H2Ea3BQpubpLFWzWj8rik9DEqzTYep72mrG",
  "key23": "5tGhn29GBbgV2wXPmHLNTxuHAg67gSSeTuG6USJaFUPEg8XUjmr4HBQFSLEHvzdMA7eSyqjqFrjZsL9z1Sds5T2N",
  "key24": "5RmyNGtNrW9BTjRnFQWmhhTy68uBrMrVaWnuoT5XzrjepKt1oeP6jtBdYBZvFnSuFoGjyth8dLgYu9d3L1Dwxqwg",
  "key25": "2GpLQK7xqFbBhVDa3g3q8m4wwhi23qrkdfSAiEx4igfDgBaxPHprqAzDV6s6cTNhtupDWMCfkhN7i3iJCDcU5LLg",
  "key26": "gLB9UYYwTsfToj3xvgdcbtYN8cKv5jBxja7WKFqyPU5Y5UwUHD3evF4USqQEMkvP4LNZieer5ZscunxwCxcRvav",
  "key27": "5PZAxVWFWQ58aYJzM1yt7A7KiEZ12Hqn3ysgQgHRkdZ8zS8VdYQhJ693odvGXzm1z2UpovWS6agX6wepNS9nFfF2",
  "key28": "37NgGTNWNzZ637p1DRCTHUVCTcTpve3SE8ubnpdq5WmBV33akxgr57Xb8cXcPHW4MyjDL1drZFDpBtqP3bqpkNvF",
  "key29": "47JgMhJCgh1hYZqq34hGNexsGHPnBF6n9B3QsqAWuc8VFSNz1wEJGSxjrp3BxtgxJzBUKyBKy2VSyF11Ksf68SFd",
  "key30": "zheDuHD7TNtqxRU5VAXh7GPTktEpjgb2ueu8S3qxcccVMBeJBqzwhGdtCxKWmNCK5UHd7GJXYXTyjHTCWX9hPjb",
  "key31": "3aQGUY3TcyMtmbgveQxngapbUVQrRPYRjkrSfA7Rn2YS5SsQ8XxxUup5p6TxCVNXLtBxHdkXqEa47zYSqj1xSaDt",
  "key32": "3W2pjyHHkkbSJSTfbzLR7cBE2BaoQaV3QCdnJdJd5SwgeYTVnKtiB9XQK4FzgUFrED8qno6EgJaxMVNAC4w3fnFH",
  "key33": "46NrERvJcfbnKNyPQ7rEg3E7SbXuEvX67Tv11SEz3kjydcEhd5tesvhdqWsSGuzqMX3nNxPhXtp2NvGqhdbCt5Za",
  "key34": "2xZQvH4eH4eRZ1jTu7g69ieecwmQsWeL5kLf12t3VsRhEBFfhVGjLvjN3PADvy77ACRh2Q99RwdH4xhZuYmFU3Zt",
  "key35": "2KkV5nyzLXyYDkPW94ZFG22sGDAmjyrcVNVdmono4hFTkF4GATfngSbwXz5c27hvp8yGu5WVhH81Jvj3E1J4qe13"
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
