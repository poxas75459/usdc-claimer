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
    "2y9cvpeq4hSpdV2ydMJ2nGitDBXpZnnbLQhgMwb79RU9yR7eTZT5MmCQMx1NBtesVY6BYTWVizWvkz3EBWBmR9gQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "429WazCCUzhjhhPp1P4xqpYr8hZp3PTQet7pFsyRYTidSxkrEruj5NqTHshyunLRqvWtbWjfyt9TfoenazhRPUDt",
  "key1": "5LwWCZak5ms3vuPCWvfU8HjmPEhrifq33TJXYUStZ5gB8KzYsauZa1YFLxMdgF6KcjcPH58huj7Yqpy52Y6wJKyK",
  "key2": "8Xgqub68uozF3R81a5d1LcBpXXkHwAhLNeBmtLhxQN6w72BpTp5GkZhVuh2R1K56YnFfRvRbxm5Jhc21DcGnGGW",
  "key3": "4V1HDWfyf82CXCSZmh3MxZ6s1QFMcDaicKGqSD4pNKeT8TtZe8tYkzynJrNnohRNr82r4NHFsrE5p2JK1YUYb2hx",
  "key4": "3dE5f9yHQLWzxwKeK8puscfXGMw6r9bZFhyyaBNbUT7LsdW7MjoDMS6h8omCkAazzkjoj7pH4PJ8rMUTRoNPTMPo",
  "key5": "4tUdrzjnt4RU2GqwLRERYH5MywKA78fKeAPStDeeXiXCmZuFPtkfHcGXt4nbXqXV7oznVdTEVPtcZxY5w6DHUDJs",
  "key6": "2i1xPmaUBdSVUvXsdeWQrb1DgqcUKgMwpTnJNUS3eoQV1bqRysvH8iBHU5GZDdg9FxpPxe65mCZRZpCSLStkEFub",
  "key7": "5PTtS4W1RYHcN9CmJVXWoiNZAwr9V2tijnM8aJL8TAvPMnkTUxDquT5QsXyN7fspSfBTRzyECtX6jkbaHxWWd7tY",
  "key8": "4s8YwqxyWvzTW5cVcL5dSpPZcraT5J77sEptHnE5V4iKhPmo7gtx5PVv7v2AdkoaJ344b43EiESv5ZAxPzF8pqB8",
  "key9": "au8bAR2pGnLfaUemuHRjqbUsACtjtEvjDrw1Vz3kA128mzWKYqDgS6ktKxsoHW7Jayr8sQ5UUnnkkQuSJGVESBf",
  "key10": "5pGVspbSy5TCPtmvzQQV1cmLhDXJNioyT4GmqnoH5LHEMR98hARo8SE2meFSMDpM4vXsQb5Pti32s3JWrguKj7Ge",
  "key11": "YaWgm59z5Yb3FuDaWLYJHuqa24wyL7DMAMbEpZmewk6B7QB3uu9JNiY8xw5fzmFKCk4cELDQi9AwfYNu1ZZEsL1",
  "key12": "2TvNU2wkNYc2yCcssmc5CGPgDn7jqG6t8FTMqUyGQsMjoJzzG3dKesLfqsuKKF4zGSyXT7YwSv34iMQaWdxDkg7v",
  "key13": "5wEWxX9gbwyBLXWDrruh81LyKREjQ6QdKKEJggwpkEB91qFKPsnzZ5T6Ry9La3J1CGvPRyo5xScr4PXccqDgnZ33",
  "key14": "3XTvfG1JhStKfBc2qGsK5HJTYpDQqAqfaLWF8Uj3Y7uPoA3jdEmw2jZPh1yjcNvfv4KiMdYqYAENxdZgyPMmjMBG",
  "key15": "2DAXeuPXX4ieZeU2jeXr7P3KJK267kznbvrDchSV2xymRAVGq1LuSkkaQQAetHS7NFa4GJEXKwZeFXn4NAQhRHqZ",
  "key16": "J7YFRFJxw6Ep5XhxN3GAZqw8GFwgdoyJafihLGH1ivdzpcrCEx4j8bEBG2JvQ39Bv3v6F7ycjKcxLRqVchEQKS9",
  "key17": "4sEzPMsBctLyhZohMK1JPTmLcTv1zeA7vwHpHJcciGt2FzvK5wmemp6NWBi12qF1TK6R7PT21R62yh31Zrx5gwbs",
  "key18": "3tp4HrhN72dFSmhoQtAMpY5Cc3695FMfFawm6ZLWfpZr2C1JhjK3YXLpje8Dt8C7JUzm7vuLhSnK1391rpcUaTp7",
  "key19": "466r9Vd6EpyUB3x5FRpupvs2JWcmwbpzsCV8UYh5StbWbHjFBLofa9bXHHnRMMwMzG2Ne5EbaPmW95JBuZK7ysf3",
  "key20": "5Gwpv94rYkKAYu3u8QaVFM3LeotFMs3T1qaGzuAuU8YTLQkF1WX2MWc3uG77MaYorYi4HH787CoumXfkEx2TX8nX",
  "key21": "BQEXok6zFgG5VqjhuKCd97kU1UjMdvdXUFYaVTcNBd3hd8Hct8AY5Q4wNfaxkMxva7QUxis6yyDuNBWuLxgUpZ7",
  "key22": "5TfGzu8wKZZsT7kJu8wMEWkumUnZZxBJS1dBFhEGRJ6CjKjPksCxvL2CZBg8TQhib6v1E6m4FRNWkhrNEHzdgoGR",
  "key23": "4P2NuQ48tAKZ11WXoP8KXXS2DZMtcq7vLCVkJMgXtRkRY77dPCPLAzZd8MzhRHGv3LcJP9qVtSMH6LTdrMouXNLa",
  "key24": "5JZx2SU5wXh2uThMvNXBqtVfg5NQMXD6kwGQsBXanLBNsLjsBVAVRJ393kPffJTTvATMW26MuZmesgjR48J9S99w",
  "key25": "3PcaLHJcNiigusMzYmxqG6qQkDjKWPgJyz2GqsNNGbucLnEuJR6F81pqJFuAZpipXrm5CGTuiZfWCV6Kstm3QxXR",
  "key26": "2aeMgf4L7rEkCkEfK5BMAbn7xzTPd5D1i5uHYtFY7F8sB7vr7diJQY6WaKYvgVghg2GUgyBVAyF53UALs89m5Q1k",
  "key27": "5yUPyRHvbxkL3wJQ8whkCpvJXxUTCVD1hakEEjRvTpBXsLCjPmSFzWVvrxpmixsJuv4prp9ArR43x2bhjzzcnCsn",
  "key28": "GW9bQrmUbvZJT6EPsqSanxpLMsEyB4izhsawv6kaapoZcfkue1PT7p72F2TTG9M6SRD4hZN4Wye7tVDcTY3Va9G",
  "key29": "SoNiwPNdbEDjnkaZw8BjiEJ8ZR82rAbNqS9gqq4w1uU4hz2uLgLLjP4Y8Wmbz7iQsJ8rYhZT7Kymq2dKGcmSW9b",
  "key30": "2hAHYLk6Ey26aApmGDa6gXyCyQaga7WX26R8vwmgPVX1zoPAiZip2cBuVWgB5676V9izPo4cykasMTqMN1uKSuhg",
  "key31": "4Z68EuCR9oUVD2tTs1RoiPcraDfsF4xsA4UU72V4zbYWmPKMQEaTWebVr2PsVWmKLKALKAuYMphu8eG1wK9Bde6u"
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
