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
    "9GB3u5vCuYxVQEZSaBTdhJzQ5Hyt7H6aSVE2fAyRfVvFPZpuNgdL2cr3192yD3iAwTBNEFwnDkBw3DeEMU7RdJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z9ockH3jvtwBstpF4ZcGF8eG517pNH9WdeGSS4JdrBJGG8svh3hSyUSqM9CNwUUZwzN9SjLNcsHzXGZLib2iAre",
  "key1": "45nhGidc3DSxTAYHJSb1P2BgavEbqqG2hKSNL7GXQtmeLn9zcTEyMmuSkF1RwnWzFWtqFdHFGmZTqMg4GCgrYVZn",
  "key2": "2s7y7wGqZvvHWhrxmRb3ZzSv4kUhMc2g4MquJf86cMY7q5S2Lu2Nx5TxR7FzqNhYxcfkuCYA1sFifguz9Ldn1nJN",
  "key3": "p33mrUDUBk7xsLgckpoyC8tpgYxYTBm67Job34KNFAocqmjMn5tkJeAKnUVLac7k2N1j1y7EahBU5bNLoxcFHMN",
  "key4": "4ww5Ycnp5SfQ4VAcsUQ7hhosKedzezdtf8YH9RvcngDRyVsfkh6saNg77JbgQo1g5JTCz24ZFr5pnh3u5LumEV2R",
  "key5": "2VFcgBWZZZnEjHxqmu9KzkP8EMogf4eK5G8xgJ15U7kHwvscJLJUJ38bw2NX5MmrSqpCBGHf3rY7Dk1b9mmppCyf",
  "key6": "5Qx4RbhqWEipNju2kPPNJXEnMDbEPxmP9WGM3iePA19BYND3QMvogmN5ocbccp13hXMUPuWM1N2AQ3c2pGYTrP6J",
  "key7": "3ymkprF2CE5jPPEMTPxnQTrXRhTDqp63FzrFAE8FnVT6eJ8rU9jsCAg4muJgmCZAgBA5mfDoyaFAAMzThYmX8djn",
  "key8": "2dPtnno5zTrmaUm7FJSKQnJ9ik4WL3kYYkoZ29nvf96xriuMWq6zFhMbX7XefD8p4jvGAuAAGTZhcBWNBihTSEML",
  "key9": "4YyzR5jZHKy8mjYRBuvr57Y5L7d8CyGpcXWFfS7pLFwi6eswx7YDpUhRVxpG1zARcBVB7Ms79b1RqWRso2hkzjm9",
  "key10": "CG4xj4eCRbxdP9HmeC6TdMMSMzMGrbPDDYxgDKSiQheNm5qJHtVDMoGS6jiQ91Un9PWMQ7uMjuawBMVLiUDSvFW",
  "key11": "3iKAv97Mz5FozbiWG4iKGsDuDnseKHxUpLCZ9CnBLgSt32HZtYQcnfAJ9tTTd4x7MqTf1dWMcVRXChVKs11obLey",
  "key12": "2XZJE2wfXemGV2HxNAmTZ4wWgfZ2Z6B7vx8WwBDqjLD5Hv6XJYoYmgAi8KwZBygNSqHxmZoXeReZqnY2kJAgubJS",
  "key13": "2gDwXZSLaR6RGFbPGntFMMK2JDcF7rEGueWbLgCU5cULxpbUdezQ18Di4LLT5FbrsvUatxqFyGS4htUkEi6FxrZF",
  "key14": "5FvgsvxazBVzfyXsskSQMFLhWc8VvaSE314n27ZtZpdNNkq5DToSopWpDacEXpXPagAYMP6oK8ExTKkUat8yZuLh",
  "key15": "FcfqBE3DLRyHBmw733A5NAgDiMLbVQBgbQn6Bi2ujkPCh2T2Mdxch8tczAzmokqqMY1ZVwFJ4NiPnGiW4LGoy8v",
  "key16": "4fbG8HED28AzvAVs1mCiAEy3NqDiK5GQRMLoMUWEW5PvZRRUPfDAYiZatWRUGBegHNoriUxsj7DCp8SSiKYQfHF7",
  "key17": "46SSXcxFghCR3wE8dMRdiQJzsgnQGSXwYCz8LgvGT2hJTGBbyJd24vuZkFqgPLL8ZoJ1PmTKNMC5r7H3RnEq6hpr",
  "key18": "2S7iCRtSyxM1cysnEjP8cmUFJ4pE3jbsx6M3fT4ixEExsmsvoVrnkc3eMuB8XoSq5Tyo7PauTEQnXPB5sXhRp2ts",
  "key19": "5tGiGNRnyjTCwMWTWfsqNZzhEdsciPGFSCyVsXr6bybZuGLRrGJwWynb6tiFRcnLRLWyvz3YVyfE9SH5wzkRa2JM",
  "key20": "5mxUYdtdoyLaU3evDgegBeL4JYD8JDAXhxnZzucqr7ydWqcWyUX6yB5gMu5vMctFLU9gGXu5qjW38q9esqZQMvoh",
  "key21": "eihuLXy5nkbK7zwsWgDYWHN8wyKuqmHh6GmFaW9pYSiBXvNDSzZM3ZvGn6wdKXYjC1DYr94YHrz3KRphxcVb5Dj",
  "key22": "22FdPde5fmZD4QJQFEZTZnrDEvXmRVY7mD1UhqHeugdRiSFDBkMGZDbWn33e9EYsMpmcrvFqLvf98BQFePkzU9AX",
  "key23": "3rMxKSxgf45bRDtQGFdBuViY2yBFs9GE94i7FifJ8pMeJ2fBJmzfSpU6DLX4xzxvv4mcnHxcfx2DBKTTAgUw7wxH",
  "key24": "65An293M223pWQB6azupZ7ctKVvmQ94XkKYyTFddbK1mbJ4aE56i2tEMr25XiqRoQ9453vYAK85fcX1XzEQKnatb",
  "key25": "4gmiVdhRA9MydPJQufgRVgJFGgMv9XLtZ7XRN2fLBv3ug67XzQzAFsmjxF97bCw2oYMpF3dxiuopwydmswtxXP5S",
  "key26": "4E6AF9JeCAZCHAqAL9P2H2DWc7hbVvh8Ytm2L8PM271oN6CfiDyeqkTpSLgkUATW9BArDroEX9SntnNfVzdJGqgG",
  "key27": "2HY46fKmHgQ4tMgqmcTr1VtXNduywi3RbzFZvmPwBNLVTs9N3MJG83b9PDed3FEPTQgMAkPvQBCCqv5d9zGVhU87",
  "key28": "4X5pZ55kFqpBG3GKcVMfb8RYssKixa4zLgyjTFKJJEdnZD8C5ujXLqbVzPpLBMfkS3EYyztUGFRExMGLhZGbAC7n",
  "key29": "2wzNemEHngfJF5aNfPGZLWiR28zCwubX6CyzgNRxfB7ohKS9G8ZC559HKLnpu63uLcnc3rSUJiKbiKkZARAvyZUe",
  "key30": "5hNKNncvHvmy9b8moUraoATDKKZWo4R8hPEHuEmGouG4P8JBpFuy5DpVgff8XVzJGbDmkHmWZGYFgRUYmP31iJNL",
  "key31": "3tuchReqvnArpyakBxuoBtb2EsQMneywv6H5Gr9ov7yVPcfHPef3HU8mXdW7pTGzsqEmrf5f3sHfjkYwVcgefkYt",
  "key32": "288pGG23S5S9r6kdiEprd3M5ggYhVNMFVU1dB7jVsco2BTUFXBG9mmUXLHffDJGW84Yh33EXEP9qiPMvtZc6xFvq",
  "key33": "4HQYLeqcgnGFQq3vjjHkbWFK9NcM1GvBT3VrzBT5yzYKP2TNAfucHQvb8g46FDHnPcP6v4hqzU7zPRNLAYhMFoXn",
  "key34": "5u6zpN1m4V4v32WS5V279g88GL9H97MMhr3CzTjA3YTfw35ZW3xpgk8ZQcHoZTqzNSLvDKYa8PFEfRp6x2nv8PpX",
  "key35": "3BhZn3wVNNH64q7Gk9drSbDMY8pxtzMUz9JLqtNgvgcUSBBnFAJAQ7y6wnE2zebGJhCbH1dWfmgU5QhNYArjmWy4",
  "key36": "4stAmFAEFdhYtHdRi6ZbP4cfi5CTsExqx4S3rr1gkCq9Kqm23d6aR7QuLf2rp6pQckX17CNzJ3qDEP2bq1HveLXj",
  "key37": "4bUPUyvWo3cF1hB1Dfr7XSQa99zPKwk2A3SYkCxWSUADpT6NehNp5BSY7bG1d3i5Swcx5B3wtNDzrnugrR7zycVa",
  "key38": "2EXu3infRNhJBx3hgsS2KoF3Z1tcPgU9rLmh9W1UfSbfAjLnEewqR5cbWPe8wtnNG1BYpR1yvFFhsdWMtsKLmkFz",
  "key39": "3LTzCdvGLpLtLmCbuEA2pP1jFRMo5gAgxcLWhcn97XMSw18jzSWNHJaGCWk36qLnYqTL95oYEeCGRDnEmPLRSfh7",
  "key40": "3pxTh7tv4gM56hFa6nbujC9rLVf8S3uh1aUzdyuQJ2E4Ke2GR5XQN7umi1zJxcAh5JWc9fXxp9WRfe4HPGaW6Sqe",
  "key41": "5ro6DJNTBqexQ1gHL8pvuybNYesaLoH6rRuHee6ZJpSKskzozVYcDKXTnYGfpF49NRSfr7FhpsKaXRGeW6NtkWNp",
  "key42": "2pVfCZmLvAmxx5CJCDXhh6ZRTDTkeqPgrHTNQ32hMV9DZMADjhEfDFXn1qSdJjteHbEEpifNjkTWYvprRnbEsWpn",
  "key43": "4nGmz3MwYHpPCSPGhJJpMyt7X8Tu2AmSqXqYi7QLUDEbv7CooCVWKNMCtAKT7tqZRYrcp2RGWZPE6So1CnRiM5jG",
  "key44": "5zeeS6XkA26UCuq2WDuDZkWA19vhNrxz4aYDt1sNAA77SfqYsTMWj83MWTEBmXnmHyjCfx5ZyaQqLfJ4TW3YNJZX",
  "key45": "2QQxMse7494WfuRvJsgqe66bBppEqigUkroHnjYBQr576u2NAuPvfcjtvMbxzAoC8uNegUsoLGRroFvSSRNfwzGi"
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
