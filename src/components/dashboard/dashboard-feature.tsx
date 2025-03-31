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
    "5wKGV5wjk3QwGvSBou1TUgqLn2N4s7hi2SpWDNY1W8t1r4f7jqDcPF13iA9ykU4LXduwZ5kNnq1PEHeMcyhmDMBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ToKnP7h58AXNUjJ7YubzSc3287nw5dzYLVeAqiGptew8h7rWFHjDZNPc7WP3GFRvXsEyFPoH9TFHeN9UtkNji6T",
  "key1": "5g6YLyPjjjinyzubmSsC7GiWUWsx5YqLTMRBKLsZ5fVgMsaP8gunTkxJEn8Z3ZPyWjakqHBMoWJjGFe1QG2mwrQ4",
  "key2": "3sR9nvAnzxis55TfnBBZcZTNbwmQqofp1VEq3RJVqBseTRPQXn1j6jNEbdgH84J1SHAVTUSLcup4zfeRA1AurSbX",
  "key3": "5pmrAzjuVGZWHa2YiscSo5wxz4eqXm8XionJbCn3RWYAZc1vwb7bXjKpWzTPRifmhDKMRKF6wDS1dNKiftvUYTZG",
  "key4": "3jqHQFqgdaRotMU7SKYzfi78YJ7tmXNY48po6dsCzvGbKCv6CbBBNHpp6tzjeYG8sZmpGj7y56TzbRAUhc4fnuUV",
  "key5": "3HCPqHZ8mSj6BWRyRKNAg4Ne2PErfe7SUggESpME1TEk77o3biuNFKE2ZWCU1ENTUxe3sKAjGerqu5uqqnB4Vm7k",
  "key6": "5VxBztiJfBLqPN6yyVARwtYWZZ7XHMrXMH8iYZrSGHT7jYUVt6BYbFMQ2JqxXQrgoLabCoybcWYvuZSoFVUBuxtn",
  "key7": "3DmFnW6tBRzBhNX7fF6rHYnnd7ZQqicDzJGxybjzRVAQ3UcUW1VrD9FkDz7cax46Fxwn4Bj1EED4wLmVhsnaB7zq",
  "key8": "4MZDiefS9rEmdByxdjdY7SikYkWbALFL5i8RDyDKR4jYQivcTK5ft9fCs8uS39WD4Fyh61W1fEr9WSHC1BTK26RV",
  "key9": "5rUt8UzcpNNWsduutZ4bKRuvyXHa7iQBhD2TrLXF84A4eFNPGVhoA6CNr5Pa4jqpGMgCm4F6BWPRfjPP4hF3MXxe",
  "key10": "4YCo6hSTaYtVknNKLy8BJmHDbCqa78DU8iUHmdgkFESz6qCPHKgpvfzkt6REYLgMWuFYSqLcdaS2YPxWfuCsPHwN",
  "key11": "4xFMp6LbXGt1JrZ8QEKPDk8h5rhZdZvs81z4YJyPmWAmxHFJKoFgq5aEnit25bv9yJYHLjSznV63ozvt14RWDMGr",
  "key12": "3YDFuKHupMiLgCDAnii5nSz5auwyc7SkZzTDvQraUiYHGcX8MX2mZCnXcjS6f9mo4ZgpsEbroM5HL2UBnSx2KL9f",
  "key13": "5fgFmdueBsnL3uK6ciVpUcURbKFbi3XCzZnQ43hfhsFonmY1Twxd5Sk8tHWLYtdfYu9bSmrkHL6ZP79coNLkPwQr",
  "key14": "5jnELJ1DxXRGBcMbECvB38mHZZheTVyj4R6qxeGvY4nyZFY9BdPcH2wo7gzVwUu6RJVqVDXeqxYWKyRnVUC1GugK",
  "key15": "3xkUVWwBsEkrPgZ4dvxku1McWRrD5FTtPywY4FooLJdfLHU4voxqnqNP7spuVpt4exh28dTBQAGVmn338GRFTKCx",
  "key16": "2NBtTHJBSdrdCfmyBoGWXfi76EhSh9MEWzBnPYhh1gD2F37LfaV6R4VX3Fn1hG2KtqVKTyGR2j6F14nN7XvbRxjF",
  "key17": "2BYKWTjh2UGX22rTVkm1VMHp7ZBataSa1JMgSSSS6WvsxWQuyE2mZqWvSddPRiYHdCMDM67GE42qhbZu73rRdELz",
  "key18": "3MbhQobLYJE4eTKq7tsYcWqXkXHVbRs5jgQZCEcsF77VMov3XG3r5wE5DHSaPJisNLqo9vyhhKy3FYcdwUA5Toxg",
  "key19": "25Xz3dpzt6jQ1m2SJW7PomjjnsaW5XEaHuzbPkjZrN5qrTr9LDpVFSknrMJPPrvietq32ktNwxraCN2y53hwagYr",
  "key20": "3XSSXv2uq2sbWdKNgMAEURwDG1pnnsBptDhhRNvA9885dDKv2wgUvTaxpNjAMacs1nuFN7vw11dpPbFJz6F6gaEL",
  "key21": "3xoRDxkZMgB9cFAZA9Y5fvXG9qLwUamqMyfu8zdK1uogQDP3nsh9KyGQcb8cYyAHtvWLXDjqX7zg3rvBt7pjh5jJ",
  "key22": "2hpGdLdMjRcVCaM5U7XQmHxbbj4k4gsVJJrDRhiuRCU3ztdmFaxn53BSyn1FmMAnmEf4aU1bG9VoFDn7o5S88Mia",
  "key23": "5oWG2Mv2AJS1aXYwE2ymzZHsAFz8MMr4hrmGkzJBAhMFcFu53JhLLE93sRNJ8wYtEsU8SnstpLvo3XeB1qPvE2gK",
  "key24": "2RpD2KdSQD3xzuofogGizwgyf13JxqR5HSAHB2kBdHWLueKe4hb9SBBdQzAD2uRDAH12qkeZGEp1SsrfgN65UxCY",
  "key25": "2VnQNNx3sP8uyNDGXB5UaXJpdxdG7YE4ce6kDhBuwBZuJnN9AzjoKHQaQA9cAUbC2pZAAKQuXL9Vrdx4oE7ihZW9",
  "key26": "2zk5ah5rXhht9mj3ALeP78PPKexj6a168SsktndLZ2zYvXrwZVY3QDJWpDWSWzeUoiGrEv9NeDcnPff4uSejEbTF"
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
