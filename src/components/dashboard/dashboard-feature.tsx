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
    "PF3Q4QMP6czqbwHPuGYGLuGs8h9bfsjdc39Vcejrjyj8cRmk8oEZhtb8dGTn9TGyczbiqrhRZWdRDUrwZv5i1wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28AmQc8Mpsb7VbgWuHBZFX3EpE7vMgBi1P5Cw6GjxK7EPXGaTqtCuQVGCE4Z1DCFBP3Nrrnv4ANP2s3eBZ1Lh5rW",
  "key1": "5M3u5XsW8aB2TFy5qasBMo93N5r9QFu4Ban2udrkxRg9EACkuUgphgtMmREevowJPeJSMbNpcZbCY4UcYBAVuib9",
  "key2": "2MvSwcqEDWBeCzSRVfaFt1p1wAPWDckUMUz1jvg1Wi3kPbDodPdXjHRNYfsnEXvvoLzvp37hLXKoeJj2qySvKVFQ",
  "key3": "rRazx6ViinM3jryySZ6HyVSWYaq5WNfXBauvCfRxssACYXzYdPWVLsetvXwpNdDRoaUWcMrvzUV34cUkzAdimXB",
  "key4": "2cGSxDCwexWg8dvJUd6gYqFGK7AQnLWfaC7emJY9ogdqZ2zy1DXYC78qym8tgbAaYhevkrkyBWnywEkoynzeEW3t",
  "key5": "63ttW2wMfY6QkkQ2RcyEcXiBrEpF6eUaiG3brZe6TPbpNXaazNSwH4J4k28FZ3WEEnP3mUxCb9VNwcpKE9zpPK8B",
  "key6": "4G2biXqzqpLmSb9PMnrTu8xxTcgpbd2TvechmvoKLWikQ8A6V9c1M8PWW7KtLta9LsiiFkH6WavWjXQHYjbJkK3u",
  "key7": "CbfjQyuaSPQKuZdLJ6ygcpC6CziWmyc9tCpNLHSmANtS7uDVpwu16BMYndZX62hepSyjB11CMk2RyEkW9zMeSkV",
  "key8": "2F359so8TH8SVLkmc65wMRUBmh1NgTAnG7fUMCsbEuZCoT8w76FPopDzPFAKR9tJPr47Wr7Ppkuzww2G2phQr2zb",
  "key9": "a4ih8RgyMfDu2JdTAWYUyj3HYDvzZcj8sQ2GZ7fimGtL3RbP2HRmsmLHf44rP57UNKzof5oDnYKE3n2WpyYACmE",
  "key10": "5BT7R3Wu9GacEhjGNmTF2JVVRw9ZiEiNHG1eFLCGrRM2wwXZ11hqregDYWS5jaQgwAz2p7LDLCCJgmzW1JCYhQpT",
  "key11": "4sXYprvB9fu9dVu1ygJebLs8W3bQc1hu7YNxLT7NyN4zS1GA19Y2CbLyfSR5RsrjF7JWD1FvCdsxZAAQa5WrxMbu",
  "key12": "2foRxAvMCVz3HCAFueqx8HexkaGq46sQPtN7uCuhS9A1e6hg1UhiXzPf2vs2DAd5Kv8yf7573wzksQUwPUmVm5Xd",
  "key13": "51Qnz9VoQ9NyHQwrCp6y1jq8uYmZNxi9b6jYMSPGdWoc39icGAq34ux2H4edLiKiQ3PQjHZZqEeTxSdS6FVcG3yi",
  "key14": "37kgsduH4At5T29RApaf3amnaEeWmhHrNEc9ap7GfZugcWJYGWxn5A43mBzYJ5XdhhH3quFtxXpG6EsG65z2LFRZ",
  "key15": "3gKqhoBEZxs1A8XLg92h7naZkSXyT1RS2MALwwgpZfKoLWaq7LR6ick6AW59aoq8xkkqd5ZiT3yRFKKmSKNXzoWR",
  "key16": "3G1bYRvs1Mimj2Y4EykQPUM5G3778sBmnhLxfhjPCxvoC67H2ZqyGP6Wp1xrVtoTbWdYBFkB2gpEebYAaSfYAWQN",
  "key17": "2JSkEjGwzQL8LnRMwbPb2yARAVnALopXzrU2zPpFJkodmvYVGmo9xxwYroQ3A2p1puJrX6JnqVKZZ5r37JvHR7bm",
  "key18": "3cGn9dPPMmPcXnwFQ7oKNrJj8XTbKuRzwWaWKzTb5BNAhghehXj45P5QhXapKsip5Z6G4UcNXjgpN7TB7edtaWpG",
  "key19": "4kNb3JfNDQoX2dwQcvEUgbEqhDvia3aTfonwfM9sjVoaSKYXbhhvEovk7wXS6qiCUvsEcJ4QsPhzx2wuuL1NkyH",
  "key20": "2CFoq5MRnoQQX2kedVAmCdFSgWSgzR7aFpU2uWockbScSgdZSwrmqY4mMCvbQD1xa2bqqHCt7yXkeojePJq9HY41",
  "key21": "3Sbkef3msV9hKATkxEn6qmVMxccbUeYVeryyZGQ5Xgnh2DBsA4m96ujnbpxFL8xCSUeRqbvkbisR9KC2EdGuYSAc",
  "key22": "29C3i6iqDdEc76u7vcwS8AwieDGUJRUoiRUwtbQq5kx4tduQkP5rTAhtJbfsRGerkfWXK7hfwhvwQ15YhYoNhATj",
  "key23": "khq8HdHopPo1LyBPUyP2u7KVd9cxRtz2t3GM16zJFoSBKatMc542HAK3i5ysZ5y4LM5DHN2tTJCE5pmVqNjxVEy",
  "key24": "4S3sjcxPH8cecoiAK8XoAAQZ97F3ep8q1a7YTHEdPMuj68SSV1TPLbqAHXK3iW2UD8VBmrkiLCMqADKJgbrVb7Ws",
  "key25": "5zxjiM76KFmDHEDy57K7pG669LYvkJoRCiuqTNvLMWk9gz94wpEPw1hZ9iSYeN99Dq4z84szfBEbmRMiHrS1m9aY",
  "key26": "uMFqGyUUW7VCNQDsAghFpBnc3Vp3TxLeBbMg6fQNJpHbsPeSrB7QmpoiphWkRjzV31San7TbeGQEqKrdZG2hTSC",
  "key27": "4b1aHVr2P6dvQN26aeKr8DKUPgUrhQQ4us6X2YY5tCH57cWbfqVUTzUGPc771CYSFhuxzisf3Gs8vciBWM7m1Kx9",
  "key28": "4nesi6g7knoNsEwaxXEVMwe81phJnmrc3zW6uVMkZBRRumh3FfvXWRH6FrjD5o8qmjN4AWtLGM8Tfz3n2B6xAsD7",
  "key29": "2LyuyZvjcdPAyKdMm9c6dUizHsC58QZ66TsYiymCUxn6k6ghNyRBzjat9LYbFyqJiUsLApqWB7QKyxcCX3XiUHNP",
  "key30": "4dYE9Zz32SBgnmyhyzxf8MYeprp32rNJ16bwyoAKWQRc8UE5DapzthuoPpZxj5mXxYQ8riTrBQ39MFeSRjB3j9xG"
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
