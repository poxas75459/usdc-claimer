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
    "5fUhEweSJBs8yKBgoYQrqomAyTSb3fWnMSkd4KiXBmxGUbcbKBRmX2cVjrp6H8SctnLhzPqcRNdhBsPnGYwaH6pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Fq9uFaq6xPXUJmzMXk8idX5zQgCAqLX6VxzmVf8A3AsxfU361oWnxdSZSwauEbGxCgDmhUbB1AHsv3TLhi6SQz",
  "key1": "5UQUudsK3AnFyw47yBEjHBt37wau9NDjK1JhpocyXE34skARRDbmUUgNxoQ2RHCGQiwDZSf6TnZ1FeGRt6NeES9f",
  "key2": "5VipCT336fqY4bCWTbbjzoDJ7sFUU6MBEagfu57nGP2yyVtLiNvtwZKFK9d6AxdeCo5nz4mXVSTxoE4qmd42vDgL",
  "key3": "3xxCogDZtQkgEG6ZRzaawRYoudLaEKYUZhgYwNWeGncG21RM89WScmEYcUddxD6pSPs1RrFktVoVsgzMZ4dZaHNy",
  "key4": "2Kt7x43KrPUrokDDZtwcYZ5haNgV3CPMtRrxtBnbEDUybfFqKqdQcSTTcuc5AxmXhWozTT94kdn1XZXDQRkYfsgu",
  "key5": "3NEjZpfUU2j5duhciXKSmfgyQuh7fuQFrQoBvo4fp4rzfrnPo3X2WnrCQN4emocYfkSkKAsFLaqUFWn2LAxTB1Tp",
  "key6": "3Xi5QGAxDkbRhgRkXiQGFB7pCQtq3QZ4pLPfnaWMpvMpq4RiavhRtgpmYLiPQNEstSwHF3zeYFy3ac9UcveMdoug",
  "key7": "35gsXXySuV8eDZvyUnidceXCwq2VCLcNFsHUVdbTZiq5w9ZHjXieMTa3UVQbZ1DsUFS6hTovevaeTSWPfixYrWmU",
  "key8": "5iFb83KYuYZhMwhhFRrBqgH6FYawZ9USEjRrJuoQw1GmquC5wPxuoLiRB9DJ35nbAR4nAbTYcYHtz5q7A713rr9o",
  "key9": "4PF4syt3yZbzEEb6yVeLSqCCxdtSGtfC3w6QAZNQrTXMtmhmAJbuoRZ5MDzZRyP3RzunZ9xE3WNxorm9QVHfvrnk",
  "key10": "v2712ou4yytAkpFbydNhX54VewLDhdpLZrktYH7gN8BNowX6mi67JnUyB5AJFUV1kfVAsaysQkBRtVaqmrMs7pr",
  "key11": "4YXum6SnK6peTehibXayMM2fnmKjUAEB6fcGhTR5PoXVao3Lw72CMnspFzUWUq8khKVrGF9nnZHpkieLRqrFQek",
  "key12": "bsPE6WWAy9Z3d1UFpc64yGSxXZS9WsYqchMXzXdXBwLdAGWYhSK1Sm4uAybsxJR7qsZxD49iBTSGmVE3JEDf71M",
  "key13": "5iq3KrKrf7Jb2NzLoUELMkjmyWY4FeGq7Y8J99fvhQwC7XYj8rAiv821KD8aCRwxsbCcFUMnHMkRBGVb2546UZEd",
  "key14": "3CbYT4th6HMCypGFcir2TKBTxVpcYkXcGpjbgFEiw4f635wJhEreC3wiQYhL1h4rSKXqyF86Z9CbZMBYZEZmR3Ad",
  "key15": "2qod29v3SpRGGQ9866KpPHAGZ7DrscyL7P9iyHTUMtjGppyB89gXmUKpkYKkkjcNnRvqzUDpVdNo26en9MbTQuzc",
  "key16": "i3Tzs5tB9BhNs8kMA4wLu4yiPyVnV5bVCnri9cDgWXQHCZBJELhSkUUZWt4PVgRCXThihDpEFFfUMrurWpW7NoB",
  "key17": "5SsuyhfopHfh6AsuVcmN3vz9v5ZZfr9GKr35VueKX9sfwkQsvTicpvBvoTEUGeTWjVU3eoCPCyrgrCvL9L1P5TAo",
  "key18": "4FPtRNV5pmgd7vJVn39uZ5Yghwh6sWdpeMwQRfTs3oLGpr2csRjkfE67udUgjkex5Hzqst2gZqaoAR1yKtGrfUN5",
  "key19": "5gWs8xoB3N1EeMpm7Tu6eNcseTXp3g4z4Zw98QG5NYZQWD7tNCK1tR4S4ZZYT5qzSPEwSZoUHS8QY84fCoRjzJxJ",
  "key20": "5prcaZGTRAnptGLiaQovW7QGc8toGGawmfYMgo44c6AW85v3EYqEuBC49c14DH6i7R4Jn9gXiaVJuWwKbscKQegh",
  "key21": "2TnBk9VBabHaSXrrutmewQfya69KKdmBFYrCiHTeqvdjb1GvEVE3unDAUC4AuCGcCtaLa3DRsTnC3PEfLYV6eA42",
  "key22": "6aVAkzqX6xummbCwDDYLXVXvChGbHVC9ZxvEymbUVdmUC1HrUccN7de4J3aFFyXy819ugzTXqTtPtzH6iYM4kqT",
  "key23": "5Q4T9N6nxe5gaSDVaemuwTsrC28cBxVfeH799JopnJhtDW38LLAJmAum7oPVwzKwfQeFiHX1yDnfVDKyesfHJ4xN",
  "key24": "5QqmTBZi3q9TTgdh4TKyeSBYtFWXwrhANqtXowB6DBmNNPZzDZtyyt8zkmp7HcgQqpbDYRYwq7asARzQumhjhdGR",
  "key25": "9PdhpQBuU9pckE9tpGf145a1LhFQfMDkYoStAmX8GkjjwtNcsrTgtHfUtHr5E3ZZSVvc3qfAbMkEi3muwP6CM5B",
  "key26": "2s2v1wevTAs4mMg3sT3eeUtqsSdmR5cbwnaX3wPoUu2APhvLptcR21g7nJGLu3iuk1KXnoPysvFWvbZzduMY63ws",
  "key27": "uUdProt1JvvXSRMRaBWm2V1wGF7oZh2dp44rh4jmMhmDBV1izeac2NnWHxet8ztaje7MnnkojBUFx4Nrtgi5qnw",
  "key28": "waBEoZKBXGxvFjAhtFmkZ2oha4kDWBuJUzBdZ6xUcmd7hJRiAj6DxZPse7S578KAP5vS4Xd3D47q7rTmYcQeupr",
  "key29": "fdyrZ1D5J4C68HspcsUZdJt3kQ2R5rtzYfvAsyhuAhurW3darAhfg4djkYyapUmvg6BMpbzfhUm65WSrqeFkdDY",
  "key30": "5U9SJB5kUeCk5c2Q2W5qxNKCxp6brnpAiLFkrQLSgy6ZiE8hJ9VtKUSoxTJNhHAPNi6oDoMyPHrRWyLvcU2fW7Ya",
  "key31": "2o29i9qHaTGh87Wjnwxp1xLRu13XLDPC2hzWvvchN8kXqf9K7LaJ6cSBNpa7nmjZL2Bnebe1ZywZ1xtA28bmiTZA",
  "key32": "2MUgpnpXyeTT2ci6Bt4sze7tyGeiPWGfQPNt6mRQvyRmJ39YEuyuyxJJJYvAHkKCsoduiTeCfGkWMhv2tLL4D26N",
  "key33": "5eGA9Gi9ozGqHvzGdhP9f55aSY56MYzKzedpU3dVUczqsUmvteKWh27DuM6gQgSWcTWykqyBkgBAMRaVMB9CHbMb",
  "key34": "3MAAJun9ZQudUii9mTAYrBrdrJ7kFXURa6C7TmKpyzwhhugYxGQeu7TV85vm4sjThFBaUj4ujJCxbzya51uuSNyK",
  "key35": "52YNhb2Y3nfcjQRFMgHjkFDZccae6NFWS6Qor9tKnRDFT2YjvDrGmfEzEFYBU1jWpRRNY4BhisrZtdojpqzQr16u",
  "key36": "2TfE5B3onLdTemUMFa9EnvHbo2Nuiwb4cpwU1K6ncxqT4DqRWTKn42zw1NtXmUfevKnLJe4nzvcUK9RWj4ikHham",
  "key37": "5kyP1ZybGxiBG66ytXWrsD3AbCvkWBFkY1CMJEmXgJdxEvBbruvvNs3arYzjR4EQKyDSkwzNcEEMkW8bhDHVwgoF",
  "key38": "5L87KCQdbRtHg3VXN8rarkDaCHVK8ZSfy92GGUE2owqEpumtQB7vuUXK4JXJXZM5zjgsoUxKFkFgyBtbkq82XTcM",
  "key39": "2AvW1ARN29rwWSf5ijZFobSUYQtvxxMCW1utA4pTftgjW19d9HmzbtE4QuLgs1qurLK1yQgVQXyuVuWdm16SrSTq",
  "key40": "4aJAZXstLsnxGz4jcPTrXLXGNafBAV7fxTxeuMqcWi4k5kPbTx52wSTbdfLaaTuoiYSdedENqp4qvy5KTsQLcCwW"
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
