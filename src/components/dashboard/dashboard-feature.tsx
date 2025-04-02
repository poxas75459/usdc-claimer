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
    "5yqarbsMtBBAdufNnMTpsGQ3MQyxTqeQcQzCZqcHwum3ZvRJeyw16BfaKMUFuoRsxYo7VS9j9yG2P7b6E7CRdD1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DiN9CkLBnK45bjER8qBUrb5HT3qMrQkDWcqvoc3rjWX5soJArfWEZfW6Enserxbea1PK5QotrsoLbVRjk75exBu",
  "key1": "5xeuMPqnGGkQ61t6hMcKrpS85wcec27hJXAqX3TGCiQmXaTTwf5eGA6AsAn71MPF1cL6ARbrWzV8jcfpmrM6nRLC",
  "key2": "66iUmkgfgjWGjZkbwWiG9TKmRcyy9Jiesw2eN3WttfPrLz3uh4eVuBMJyXaJySpZqYkv8pW6Y3bmJHH7QnYbRcES",
  "key3": "4hM1eZAJRvzfoRdp3nKDfvxybMQxGZjaHUxDgiAzZErfUgnw2LBHQej6xHRYs1fKiChC8DbvG2tt4L9i5Q7KjDaP",
  "key4": "23T54LDy4Dddzqm4tqdnben4giVNpD3UBLz7Cdh131EChHPpmmbgXmABbGs3MjMHFe5Wk491CDFkNZBB4wS537jc",
  "key5": "5AsPkBY1bnD2bH9DY9bL6qWy9FJjSu6hD5LC7oorqjGQYcmay5Zu76eoSZWUcNKXi6wzjz12ezevUPBFAmBKTVAM",
  "key6": "3EKYK1YoZFCPm4oAF2WiUwNtpWWx54fpvykGERAimAEMoZ5rXoRLhZnmTgKhUVsWKScmKYfVEdYeTaHh9sWfNxrR",
  "key7": "4UemdcfcFDpND17LSd1hD5FfdontxsTk8n36XReMuzD3ZcSce7pFwyKVP3W4vbWis92Rs7LFZo5mvDaT9QGUPo8a",
  "key8": "27S63LJawYXpupTrVnKGiwamMcPb9gYRe7u7GmR6VFJEEXDPdfRoJRLtVF2qfNx6socNWqsntbCaAUKdusXYYdLv",
  "key9": "55kLJ8i3QEZgccmuLqWd9itkFHV8ZrbDY6PcXcq122k9BBCrJbgmyKVyZabCiFM86nwAsCJFFgeBQKZ8TCApxvYb",
  "key10": "4MveDwVVdjwDf2GinmQsjtnMsER8CLcsxUCMwvgFzovfe8pEHetTGDPhhhqVGUrJHYW1X6rKrwrKAwhsufCPNFeu",
  "key11": "gopSvQGezQxcHEgvRF5irEKwmPBWbTgKQVepMdkpHgxEFvpkTfc5LAJyNaAWGtGJDx6axA2CajvV8U8E63NPidD",
  "key12": "26UMzziTHHuPxzQ9orGJFSrLwbvmjSpnMMTyFE2ZF5iKBmzUSteQDaAXSNN4FfDMYCBWUQJcUFUEG2qANw3FuLnS",
  "key13": "3u7UYufJnQSTr9XJWWDoevxKqgWZpYikXmsWrBAcv9dACknXmm8H6C5BtkYFAi5oFePhsdhNAoghRgGeMsZW1KSu",
  "key14": "4Ucs2KfHSW7PGcyyHGNtVi6ohKJjhy9DzZjmVsPCVgpVc6ZDsLTTHLwg1iFMNRVtgYEfN3YAw9XjUM5vVKf9R281",
  "key15": "3HRHpeNFJov2CuqteB5Ko4fAtMCyE9eLEDd8yCqu94ZNTMYiZgizmfX37RnzjNzNDN9v89bsihwe2fpH5jATp58y",
  "key16": "viDQFmc3BaN3fv4cJkbTgPR8k9WXU24qprpiFc73uEMN8AqBECsyxCDaTxRCWzcynfdBdTqLWt5rwhqXqEbHbUU",
  "key17": "2QrJM7oMcCfnzP4qiiZmyVAoqavZh2ak7zqpwbXcaJmn3zFmfXVgReDyMdbKUzhda5DFB21g283msta3zFJQmxYp",
  "key18": "2eizSgRE9J35RUHRjsaQEt1H9b1efN6WUzS2UoTaRzPNxr272eKD8x54ZfsSCKfoqen9DPvhLpSXSUnLpV4kPZdU",
  "key19": "39bge6RnTBRf8ZR4wqW1Y7ASqarLe47ZjcTYE1v9HoBCtxTKsAEKfBgiCFYFDstd3CBGwTUJvp4JB4Qpive2cCLb",
  "key20": "4boSZy9WcDEogGCE17d7GGYTEKG3QqX45k8VtdKZvQ3zCrWk7NHufMPkyXnhioLpihYtaoiL4xSDXGxmtriAX6LP",
  "key21": "on2BnmDA2EHR6JuNRVLikSC7D33tdnh62yX3FokSE29GYWLSuUykumYniZ7of1VyPBearkDB1cxq2US3e8HeiZv",
  "key22": "5jnPV2saKff8FC4GHhrJWhCF5RXVyhPtksguquYT38YbuvzJWGxjhSP8FeNonX22dZGRcG1QwxjcAkxWsDdxzpz3",
  "key23": "2tubDsUFgSsLoSP7Q3YLUdm5Ptj7dKFXNP8GLgExtjcxRB9iNWSCoBMmJPyBFaJJX9g26bsgiB2oQjt2ChMk29FC",
  "key24": "2og1s1Pe3rcSSwDSqh5naNHNedfJWd3EM8zz1hoBqLbtXQmBGYMHdwHYiD9iFQf7Dejf7F5XBNhwMDD8scM8qUQh",
  "key25": "aAPu9hGLc9vRx5987xH4P9fAs4dLG4CUL4qz5pAtCUKKSDqGopRRZWGqAu97YbiK7b9in54P6zyv72cRhAk6AwP",
  "key26": "8z8V8ongvCPQDBqvS4RdYZRim1kKvsvcfGoNJNAEJLNGTbG5MpTxQ4kavv2UBibcTmvcMwCc7b4gh6e128MtD67",
  "key27": "3KGFHL5bD6yB1hGuQJU9ptLFhq7NrtypzfjsgeHbkFFyFvvupmHo1nvEvNxay2jUvR11LzLkY9YAhNDRRfcF9GTP",
  "key28": "EBVhQMdaax3aU87e64SimbMHrf6yxw87WWRJ9Kg879M3CmkG95eh8aY26KGZqhDyK6jr4QDMMyyF2p9RJxuuaQU",
  "key29": "h8SP2uQLFzAD5DgUNYtpvYHhV2K6WfextrXzFWAfNPc3rJudN9BkGb9Ww9X6pBeBySn7hKUs4pYdonvoHtcCL9b",
  "key30": "3oHVyxoWMwnuqhm1JtPAJcXKXdorNjXVzxRQLmo9i1oRx3wS8uypDu4VsANgpnVXo25NXNQhdp9x2jBJzdjwXze2",
  "key31": "3h9MD2GhLNDYNLdaV6f171koK7rGhHYCYKUhPTztZaRbxmg8xfXe68kWtKyuf9jaxrWYiLtGtidZn2fXDt18aUfL",
  "key32": "44awDfp13wK2WUwSFk3W7hNeTcUgDJ1Z99mHRCc15HrxQ1Vo9b7XVbuCCaJkmzEcu7QEcCh2WUGxZZDWLQks8bC5",
  "key33": "4tP6M4oVsZHLqtUVkAcoTnLt8tvk3cCN4F8hnttdbwh2s6FbWa8ucmabRN1ESz7e7mhMWjfJfT8QxQB2KHbDYAsA",
  "key34": "3H37Ksfe9dfF5SWQoeyyoukbLJK4VhPUFhntisRf6SgMqVpf8L9Ad3aRggdK3g7kwWmPZEVKJhZAomSLt5o4SNMb",
  "key35": "4sUUxd1JtwxKK6ridw7er14kTNbXca2CV4w1rwLSUyvirewZgD13x6yxB955Kk5gYhRgnLDWCRZLHCvGKoxsbaoQ",
  "key36": "42yUgpgkmvMCqBXu8cAo5SfUC1gtMLomP6zwbRkQNucdu2kUf2NtkrLjphE8tpRVy7qPQj9D4dDshcpDfWw1V2rJ",
  "key37": "3UkLwEHg2GptVpbXxcpXuatLAMTtXypaXZPSPrtciReEhP9CfNFjsHYv1tjHAbKj3jeAsyXqwv3AUo3ShrS3JsN1"
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
