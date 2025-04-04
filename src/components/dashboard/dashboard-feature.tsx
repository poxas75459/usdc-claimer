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
    "3LiNpqymjnpJDLoa5p8o2LktWZ4dchFmrnYoFg2EzuTxfeDirRnQR4K94woqcjhTqfREtrWW2Snq7eSyXqhwxL93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bS5eHonSK5QnVFED7V9tKLxgztJwrmWRV6d5RtGWd2jhijGVp2VF4AcDDiaGZt672nKPdMqNtHEe5HYwL85Pxev",
  "key1": "5hKFG78amGYvgro4BFdFSe2Lf5PdFBmDHqYTRZa4JMCrzpDAKGz94gW26qJSSdXd21tmpXN4Db2kRmX59nc54Toi",
  "key2": "5v6kYkgp6QhPKcDH23k4M5Ma75xiXDEMJfxy2ca5NTa8mZvx72GmMkz2JQQhic72w8UWmKJNjqziEde6zRWk6Jvw",
  "key3": "2anCgffVCkgR5FkaaPGnLcVB6PnBMwWJDobPWcix22vADZoDSgi3a4cjtX5RH9YG741TWGPwkTd1QZvAhzYj7XAW",
  "key4": "v8J3s7wA8dtkEuCSprExX3ofnkhyvUuJ3LQdXQFeNpJnT4GcDfUbwtnUYFbyJKHt1bPLVYJng7EynAHMMMpLXqd",
  "key5": "2tu1Msxq7mabhcseoVzLVwobwZP3snuZAZRgEP1zcQezE1WstoocYorxDbNB5eBmZtgFJxS4npFor7vfrxCYq5fD",
  "key6": "5zapVWGmR5UQrzcCrsWqFxL73vVegURm3SmPHpkEATBseHW7dpUatXyUiiws4wdVpRmpuMiwQMraqGBc8HkfCXJK",
  "key7": "3EuUzS6B1HPpSNHy5QLPhTj5SZkE5Pwr1ZNKS7EcnisHHCRNiWy6r7oyvDFMF6g44RmhumtxoKCa1mLkmrSfR8Nn",
  "key8": "3UM3p3b7o8FDgZsebUYFBHe93fwpNXha4fGc22xqr5ugxq6DyXg338Dcar1xFuFANguPULrgKjLP6ZVjoiGDg1Kv",
  "key9": "61reTu9jJ3GLzg5RfafNxVDmFptamz2wXfSn88bj7d27MnYBumo9AxVXi3tbr7D9usrTqemW1CKDPcNHKmJFnF6W",
  "key10": "5K6L2W5pEByXYra398Yv5mnqP6L5v2VHiHat3Qipnr8HZNmuy5vTEA7jmtTQW44QeH5oUAfA8yerghzknAT1QBTo",
  "key11": "4wVmWFWw4vaPgh4VhESQXjCYhTdS8JpyTzdjnBTvo4QmYagZvGi3aZjcpBiuewthscQWE8bZPdkLRPFPJWJAzniC",
  "key12": "3MtaNsf9sRvNbWSMvpPdHttooG98to9W2QBSjHHGo7KDhd2NYMbQ9EuYLTq95NSEh5Yocibp7aM5Axqgh9ySSXBf",
  "key13": "2KDHgNZgimeSCEuwajPYDsWstrDEYfUQUdgBW5r2mzh8zkrG8JzSUhPMrPfRzqdcaQ1vNUWg5y6h5dJgLpjD2Hzj",
  "key14": "4E7586fkLc2AgukCXkNySvowbce6zdeDqZKm8dshXfx3uWBEpHEapJxiWbYZDciGqNCBMLSrrazJdb3PbQ7kLw7L",
  "key15": "2zeWKmR2ANnJT6T5motSqMLf41Vj9sfMMRuXqs6pwMr46ffhBKSYRrmDv1hpBpeQnenzXUBksLrYy5c19GiB8ZLr",
  "key16": "65GyGxDrwNcPvw1ERbJ4x3X3ZJf93teDBEezdkwXYzXbU5r2UBqZZV2nfpkqu6AjvSzm6thGusML8TLt8XzKok5S",
  "key17": "5dXw9YV6Afev2qSTfNUx4xNQt9QffuZTebsVzqnfg7CjnCkeGEmSkoshbKNKtidBj6zjpNJb5wV1QupxgBPsxHVN",
  "key18": "5vuRXJPwdLPYktf9n8yKkrJfCLzZYuKj7S7uZsdPicQd3VcfxD8TE76YCb3qQEdpyu1ejfvd3FPHK1i5TLZK93Pj",
  "key19": "3WTWijQ8xrPRHdQP1JfAVWYHHD2iTBoNnstJH2qovSevxYtgpcjN8NtA56aqqzkKvULfLznAzreAG65sDAKH23bL",
  "key20": "2DF8RdNrok6c74jDhb4m8Ao7dxqkKQxiAwATyD8TmRYYqGBPUvLpTAuErp2zJD8jAgmmseU5pt28Vzf8dgDv8j5N",
  "key21": "4HshgcuZxEZxGLSNa3vjz4WKNzwnD5X7BviWjcerPQQtVAKkRGw9EJakUthGQ4zcsMa2g9oP6NrLKje4ZvDNrHxK",
  "key22": "4d4dW8j89bED7kKcUzTW8sSDL1KxuTLDAmRxefwSNQPQ4FhMar4JVtx2o5jeTGaHCwXoLdD8kX9U8LnA2wJYL2X7",
  "key23": "3kz36uDCx7bWnz8mKdv374LGF9VcP93H3pNFWFQHBAfHdxHJmbYbn3ePdSnpEKWDn3At84eqPBfBSrxTR5J61Vsm",
  "key24": "53Qb2SAkEMXVKGGLYRE7kkDL5Pq8kDAwr36kgfeVmVAf1MH2i3RhYLXdpqkphB4Y33nihVZvb9mBc1vBE6Zfu1iU",
  "key25": "2pJajKCfevTuDoEdYxu8aR3GstbycQsMbSFsQm6Aw3rcUoXhqiqMn88gBaNo8sEsSRiM3GrXyKvM6B6eURRkjqM6",
  "key26": "huKbMZitNKSGjoTWeRt5JdmJitXpfsbjq2G7rbGnAoyzzHGgwnS7qryq9Hu5BXqCPGokKrW249qw1HCF82UjpUW",
  "key27": "86guppJqyU72nrSbfHSB4UWkwwYV4YTu8vk2dkkPBs4zBWkwmh1WSvvEUQyNdEYY2j8oow2LVs628aoMorFKU7o",
  "key28": "3Ku2oweRkpQW9BHEHkdGUFseevXczqhFgDUamhqsY7Npk5iEUkpJeyqzh64zh1dHfbm6Q7qNknQUs7mKHncYWPmd",
  "key29": "4AN9t3duER8b5SyD4AggLf1BXdRkDCfr1eECfaZwUYDXygFCrqAbTReEU4pvtaXkS5afPLSt19Lea7Xb5hJ8DnpN",
  "key30": "5ZrcnPqJs4H8nTq4S2tu4HbBjjcZgWYiKSDhGvooKVseVekSMgaGd6xEUSiv28F7ed63HiVAnbys1HtPg7hFyooR",
  "key31": "AccWGSU3MU9VCJDyWHFLFXT2yXypCXFA9TWBce4Ufz8J6jwiCPg8gd1VPDrunZj81kc4pdrnuNPPmmK3CZWQNGk",
  "key32": "39jrzpeg8PcqC1Vbogd7uEkq9HmdiLDuZjnuWDNLDry9dNyzeQbB4rySST92cZrC2WiRNj4HUeqvJaXFufDD1tFF",
  "key33": "AMAUhgnvzFq8rbdTpqoSktGsDj2MfvqwW6ZMWKZYsiKzAifTzgF3U7VxeD41RAsfnc2Jz4kdm1cNKjF4nCPr8ML",
  "key34": "31qpSaAKvfETZB4EEQsXWC3sc9M5TbuudZd7MSobomKK7oL2eTxmCpQLpFg41W6LGGdWPozjPRDyGhNLZFZruvhx",
  "key35": "34isHSB2ippEfV6w56CCJb8eDrxsqneTL1DKqeE126kLp8y2awKzk4qPKB2wwod1bWjHKLvpWewGmNtc9y4NgMoV",
  "key36": "5oxMFM91J17NEYQzvYxUrWseMeHKrdwmCkWFKobP4n6KA5xgP4cGofx44ni15wJPwjtsvNEqSjs83aKjWUmyCwGo",
  "key37": "5S15ve5mf1hzr1jhD1Acf1YE196J3pewSzCXxPpXSYtZfore61W6Jw3z789wLjipJHRfAoebWWM9fFMkxnECRzqc",
  "key38": "5YJfV7KfMS43YeGnPT8HcxRc6mtEGDa7eZ7SHiyvnpyt84qNESXFMZapyY4s929p5ktjD2zFtdJZ4VDgu8Wfr93B",
  "key39": "3VH3s9zpjBDCkV1rhwg7YeG3FUAvNrABqAHYAZkZJiQ3iYL7awjRAgdv2oFKeDmJS7Fj1bvc5LHdRdpyG9D87dhg"
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
