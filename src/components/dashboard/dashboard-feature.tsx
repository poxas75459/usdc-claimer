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
    "3iUC8847ZvDhmDHefTCq96QeiBhgoTit8kKve7Nb4Ugujs4JaofKJdiHBtDhggUzEHxYHSM8MaDTPCi3hBD2U3zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F2xp2PSN1Nq1k6ShWeLXEhmyfvCNaNqtxy6eyYTEKnM1KYeELaGP9zmrz71ZZMHS799KQRWd3mzn5U5DewDyLdk",
  "key1": "62woWLcEKZ3kPbgGankNEPafzLX7pgyW518B3hgSB2DCBHwiGV9keLgGhWCdBQRUKRaGM6rTU9BdX4JLZqxBcMKZ",
  "key2": "6271gsyjmiKEDRusdSS8DF4hdJ8iAprZb2B76YdHnKhDdbySJYEZpxx1Au6B96i6k74QxyNsaQkTjvCrvJFhSgJL",
  "key3": "3unE88B98HtTkCz8hCYKMvVwEzCyx49yDVJxrf68nVmnTwhMna3adCJnWEC2Q9YyYTVktU6qnwyuZ21VjHg67dYz",
  "key4": "4w2sC3EvTS97HUAyT3b1GAMAjYM5p7Az6qvRVBVFzSnf6UivQ7JP6HGFbSSq2u58FN4qT2P2AUAtGwVHgc91eygJ",
  "key5": "4QvP8HcGH2MKeQx6ST1NBcXpNotXTEEJSwyzwDNtkBBJGPwej1aoLPDUPZNbiC2CfpERCBZt6SwkjMUzyXndKX5u",
  "key6": "27zn2usUyW4a2XD2TST8evKLtJKeKWX1AhUuPzTw11A8ib3a3kPCdXk2GZfBeu1UiHbK1HKcyDBeQMNDbaGet8YT",
  "key7": "58VzvK61SYze8tdknxkFiJyo7yc133JSuM57XY1bc277QMTHkjHssaJ47kuqZMfM6K1T6pe58XWqv4PaVALZ3EEC",
  "key8": "55JHpmsU96UWTPBiubaRPP6XJUA3sfoKCmscJYg3cWZZPuJFqsEEcH1pCxi2HyNpfuBerjMjDQVYLAAgeRsAj6bK",
  "key9": "3bU8BDTZhQpbpCWoUWMQCwqWahcVrxMepLm4jbnovFeofxTN9ihMEx9SD76XQ6x6kkyFuykUUKGuFMd893nRUp8z",
  "key10": "3jgQJpJaGzjQnHismmWnnUj4dMJZiYJeWA4UjVCBdevgUCFWw24bxB4njEHCj7JUv4q4oyWEW5yi7nzZFBmobeQc",
  "key11": "2kxnfThu2Si7WrVXaGHLW6sapk4wQ6KHdHU7U1pNN4sJBoijcHuSAQ2xRVc1e59kPZGzr2d6RuPmin57eYhk5DLu",
  "key12": "4cvV6guFRQzwQ55yRMdbQCMfShEw5nHggGcRTZQPtZTz7R6a1cqhS9F5mN5vHDLLibRSsci9SNqXVvWyWZzjKi8c",
  "key13": "59MwvcPdDtxuoB9JLZwFxCamCZfUxSjXhgSaGfvDAYb46epfrNFx2U2seX8tBvrjqkLDrUYTZfsyLFZp31RgZyKb",
  "key14": "2DF3qrp57MoYXdp197Pm1csXSGzVx4mmHRepcs8xwrekxFZdgcSgy9gaT9aSgX6d7LrRvWiZebysgEqfpyTiRC12",
  "key15": "6332PpN49Zfw26YqQ2ZJF6FysoiDnwcP9ukYGGLkG6u4cRnE9xCULu3749qFNfiVNqJa9yGyiaWLgpykPrGWwmpc",
  "key16": "4GE6akK4DBxePpwtD8349TJNH6rto33gXBsYT6rNStxeNagwJAvLNRCxUs9XSVthUve8cm9GaZk5atkw6hpkgtkq",
  "key17": "yw4Z8Xe5GBZYTLWoFfYY93U5tFTw3hiBMYSPJA1bPvajSBrTXdUesDbNEg9hQrEWQBJbviH7TGN2eHBssAJXN3m",
  "key18": "qt8E2Zudw6cpQtTWZX8Pw4nJ1JYM8SZVqB3sF8E5PgZXCEE42NYg97nptsE6aNttbfSryzEfVFSzzf4yoXbEUhA",
  "key19": "4Q8DjBLcB3Kz6A5rg7HW2s79hkVYVwu3825UBBQTPnu3nFGuJY5gcoqGTr3rvH4z459a6XgRsywADLjo1ZqavDFj",
  "key20": "27ALUGYjSGRMyPZzsYmrjurkJBrzCk3wCfJhQDgqZzRzuphRLPop85p5VinsKLP7pJHUCm4xQJXVwcVeAvhv1ggm",
  "key21": "5GsQEEhTppEKAQDUwTEmwtxEp951caSPwUwQt9BHzFiUSErpQW5k96MKgvryQTM7pP6XUXAm2Q5X44svPqxyZffM",
  "key22": "4zWk1qE991TkrdqaBy7ftXVGWBAqSg9WgNqrBQrNCr9PAYUvrrrxKc2Agovkemz548vxCu3wGiFmz18aT2SUwV4L",
  "key23": "5Lq7eD4A6zGe1YSxgnTSPpkB5dXeEFSQgfAeSueZ7iqC2bUFNrbB74vHUNu7f3uYziJRRG2U3VZsJra7LSJSEHnD",
  "key24": "5S2NxaN5miXuxYrHFML3EFqgZHu9WedfukZUnWGLv9yX7fgoLtiSSQ6drfSMcu9SAzrqoCkwu5aArEnpJgNhzqB",
  "key25": "2joBJrhdJSVJLx9BiMUZRG5k6iHjcwPwYSVoKCDjU1cWAb75GVmHf6dx9g3xw2NTEJ7QMyTF468FReMGTNZg6uTR",
  "key26": "5vPGpSZHnpfesZHKq1seg3JfjdTS5cVrBkxFmiaAotYBDvFhefcEC8ReADu5UPYiaJKWpjZDCFASBCLMGq4q3iVW",
  "key27": "4We6xw9rcbRfCXJfh8wxpvXR4urVy98af8SzTwxqXUfQYmyWQjeguvpXyLqyaaSFPisRRk1cq4CKvzi1iJwN7E2k",
  "key28": "5FPonZY8aQDigAhNVGUFAG3VierUodJsZY8DAwTFiabVPda8vpocXpheTPJRY4hsYj3eaKcD1B9bHo4yMW8b5Kro",
  "key29": "2psZz3k6GWMX87JBZ3QVgGzmwLopGFwuwLafe5royP1gPp8KE4NxV5s8md7ZrhycZuyrkDpFZttjX4ypsmrg62ao",
  "key30": "4CCCSG43aQPZPBsSavxfjuwGiR7exKvtM2Lpp6zR2eafuod2wHFwshhh7xaHm4p5mn6wxggj9uitkusDkVpzMu8C",
  "key31": "4CsGv54bxhNquPt8guaH1bv57nBGPRdYTxkUbjASodFpEWnrEy7cB1cLJWZyFQtL6VgWB2Jawhj6X1SzaYm5krxk",
  "key32": "4zTNceZbe35db3qRE26A3aN7GizM7FDuXSZELXT3RpPTJwsKPhjbKem9yCn8MsbLSBCNfMUjdUjxHwPxytnDfT2w",
  "key33": "5sz8vGy9mUpLtnxuBBaZaDMXJU3HJDzH9jXU91q8Am21wMTmouLgDVMf9oRa9zMNZQB4HeHL5aWBmAiRwiukuqka",
  "key34": "51im3rsrccQvGbjznbkZuUoanViF9rYJXirLJBCGaVt5J2ZjXe2dmWwJZL1x9RhGyU5E8MLVStKpR3Mj5G3ndspc",
  "key35": "4osqXYNhR6DGa9EfJw13Ufnk1X36SFVFSoTrC47mDHgP94gCYFFYSw5Jair7jMqqwNG8CfYkjJvJLitNGCjvMvnc",
  "key36": "4ikdxi83VRqdWM5pSQgCqo7Sb1zp1df826FKgexfj2tFrwjzc9Q5o15iVzEVd3Gv1RevE9Ek91oojuTRVEiorxNR",
  "key37": "5xqDJet5fns6eCPLdhCDsifzWtdkDptnnBhESCCKyBiWp2hf9PQ3JQBcPsTk3zgrpeTPAzjLePNKAMqBhieoB2PX",
  "key38": "3SDPtFfXPnwbEJiY2h6e13B19PwWjnDPKgxozzHryDfScbQ45pznw8xv8cmdFaLkn3kbgydaETYSShME5BeuA2uN",
  "key39": "2V3mueaqtEcvz5Siqc2hSJ4JJJRUSiE27ReqsVrRxq55vMcqXZY18hVsbaSj6uV44XNf5eNytCBR6Wr8qRwGge4t",
  "key40": "22uvYXHYtLKKkD5jqJmmYDd4qytPGQYy9BWM84HtF3NVXWYRBFieSyJbhDcUy5V8RzyUtu7fWwTMjV2hvLWRQdgp"
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
