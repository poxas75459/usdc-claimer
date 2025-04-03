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
    "29YB5HdiVpyoNmhr1xdYY7bZeFo6vYe5xAjKpviPKqYMZ2iRxUE4hLd8Ti99vqQ29phAdXpMqvJF8pt2xYxPkkpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FCtADpXkvi3UGz9KPh5sF2enMz3we3xjMsX2XJxBQnpWYWxXajbJiuwif4ckv3dDmTrapYFrccF8ZuUunKydNwB",
  "key1": "5UxuUVtozzE5XopgNkdKvzHTa4KGrCHJa7oyS3ufzVswq61E25ZUkfuwF1c4NV837BtLKhfkHQjJkkSH82asK3h3",
  "key2": "5Ly4uP2BAamGBDthVa2ZRagtT7TxJrRUBmzG2pUWCuzK1sqEZWnusk31hu4hi3ygr4TEXNWZQ2vWvirYqfHbodxJ",
  "key3": "49HC9zr4e19NjEEJ2NW728yLCXV7mXwXsBkRUCiGTr7kiZvrr8vPh4EQVuQjM71AggzUmGRmcgAaYD5VCBhrmM8d",
  "key4": "4fyiEMcRSyamVT2LseBkRjKkRW5X8tcca9ebthXUMuwAkRQ5BvPTEwnAVs2yJQNLB1VbrZVEFFtN59BB7Asoj4iQ",
  "key5": "65FLGsFTpLaECVWS9ZqyzupHs9iNo2QTbT4vTQvm1NYSZMTFExTsfRGutXMpLFUJHhUAwXwhv3Q4HQWZZU79gWua",
  "key6": "4pNjooiaSf3zjZ6XcQ4KuuQG7gDp83B3NzaKL8aAQSgDowxJjtmv8kwTQ5SWtscuX62Q7p98UtKC1DDi8TNnXWEW",
  "key7": "2HBYfsFnAwe3C68Rq8QdAFzbAHBXYbL2JBQDSWFnXKzaPs8G77yzm7cvju6uWvvhmjL7Cvq2CM7Xr3Gm1YddRNfj",
  "key8": "5tnCFu3JCRPNg68E6yEt1zHtWVZxDTc23kAXowfT22fNwAyztjiPLD4Q8KyPW74YSWxGdQUNfMV5hvf15CpNoWNj",
  "key9": "2pQicxxZcigWXRZr31Uk8SFbGZn9LDGHPyxWcWG3GT9rEFSx9b5huVSM9kLRepYVz7FKaVyhT99TsG83cW5xBX73",
  "key10": "5vy5FGeyvLiJM5EJWBne1AVnpGULD91aSdpnWABnUHfbBhhp848KfNWskjGuXXvVHbCFhoLBoLH6SxQmHNm4Wt4",
  "key11": "5FxdFKD7ic8ZymA9vt4wkF21K7FcXQA96MB1iRXgn6NhqKVc9okDV9TFWuGw8nDMqnTx6ScQZwGviBf4SeDZurr9",
  "key12": "26Q3BpPFpx62o8TfwE2pqETeH8xZmUJaESQBeUpdjEFDtRhFv4WRG5hZtZHh96SyQNhhTxiEejRTp19jeW2jKYSf",
  "key13": "2axW6ZG7t5J9HQroMAEZqGafoN4EEKoWmc5v31P9pjAAopDWvN2SpWF9M2DwbyYFQGsd3ueR9eqUNhcFZfvXS6ba",
  "key14": "3rckovZ8TCfEgSjbDfm6QWFnvhkQHLR9HAmtA2ApRhqQuC8TKF5ZnE2wfzRxdSxVShsQNeRmxvtaLVF8cBVjhhf2",
  "key15": "Z9JmPiFPwqHVBNwHunhKeaZo63YfoxSota7CedR9UpQAwjMAgrpJng97RjpkwZg9wwc7vXjdh3dTiQG4KYPtu6U",
  "key16": "5krzvbzmrCa3R9QZYkdxFK5vXiFHkpy1nttgg6Ex4n6QPUmhLo8f9BSQvGhdCgXRdTwQmMfUDziwYXGMPNXAQ1gV",
  "key17": "5sAACif7T7GtspmSzPxvEanwUpfy9d87r13q6f4DkLaFzBN1siRArXrdNJityxuhHHXS1gTowr8ACtGTgeCdwqm4",
  "key18": "4BsBkT5WuWnGyKipbwdVYj8PT9CavT4ZPm5iFtLvWU28Go8TP99DT7BdThytFqBCL7GxMsMGNAHDUg7d3jqh1Maz",
  "key19": "2V6N4h8sGZAUiTQUrQjid8Mb2CLM6oYJhy6B4sx81xqDsRg3RtEzoDccQY32q2UqWJA38NtRacgHUFByy1h1AYi9",
  "key20": "35m8BqfbngkNhgXNVNWiMu49CitsNGAJpN1YyjzyyqskgkYXJ8f4VbJDLkcEoY6ws5kC9DUDs1NoGXxTjZxn4SpG",
  "key21": "T8m89Vn3Dmd8UzuLoMqrDj1eyvDctTNy5SenZJ18KrzfaSRM6SSMvFkeVSkAEoyo7keQbAHKTXwtB2aPEhVdYrL",
  "key22": "5JRGhKZed3h7FtTMqT1HjYfayyE95ymmNWJXtNFKwiAvi78v3pQtwRC53QoymLggD2hXEisoBgHCS66Ajs4aMfQ9",
  "key23": "3foGPjkWFmj1NRGwoBAW74dMP7PyYPQvby8GskvcFmQ7wRib6oZ2HPko7h6D9yhPr2sw8eVq1Rr23XiDuiBtSdnv",
  "key24": "3aUvDSWWZuaktjgnx36MQprUxNujmxLkiBpkRZmX9owZrn2F9t3PFhRnqFXaJ95A5575opX1ssBGZmrT85FVEje8",
  "key25": "bw7Hj7jRicr1ubcppnNZqC86K3bNhhyPWf8TkqGEbpMSAwCG9DzdjQgLZThcJVdjW79GUdVGZ3BnEnko3w4bxsG",
  "key26": "3CgcSqk1bRqzNzNQ1ihWHBJA9hnTRgJ59wF9Wb7YQBYN31yyv6iKGPNtydxhDS9Ye2HsQmSjcnavN1Ud9b7svDF2",
  "key27": "39nxq62f1mPbnRSApBVrror1X8UmhQ4kf2Dg8YtEfptB2HwVQde8XHvTYV9iYsujYRtdih6m6UXW3zD4C4d9odJ1",
  "key28": "TQ16MdH4hbmeYTD2YVHF13Ex8QhNc5GtZMVPBqb7Js3sd9814pzZTkHYg9oHW9rUybhdRA9BU6E62iWBFeGpFor",
  "key29": "5bZpKNEwK3g33jnXfoJA9bUV8uLftt3KN5hiCGTCanZiKcXyaejpE5zhhb1wrar72Sv4w2YgyECZ4QkqHmxNnPG1",
  "key30": "3SdMmawM5eWHkJmLkLL3jHcmNCNU18ZLxpQjiGVt9LsQuj9P81dJdDEMTphQ4uZQqvbvWA4PWqpHa2gJ4hCR6f4m",
  "key31": "2auAVerjrwAYXyo4y8RAq91rz4SZ2jeqefeUSHcG6QS8WCNpMgM97ScF7GvJqoBcduipayQQzfNaXDn6yfuPEdGu",
  "key32": "2x9iNRAyR1K3jzz5xrs6sniVmE6cTMkjYYws3u9aLjnUd3atZVm15tX3AJpirBNjPmsZ8k8CMYdwodjuzDZW56Sv",
  "key33": "3JQMFehs2PSiW4vhhuCWJDnYzCP7XDTxjWFMNboB3jDVpNVAvGkQpeoxuY3HeXynQ78Bu9xX3ZYee6CRUfrh6wXv",
  "key34": "9Qqd1BsrdMqXxB5JaD8AiaB5uSf3YKxjtBnKVM8PdaBvqGJehA17dy1WGbfQGdrGwqgRQ1G4ne3MSASYmLQEQpn",
  "key35": "675HBXHhBkX2xhkgsrgtyhJYTNaUJ9m8HQEd68MiNNKFigsziddqVJXD9A7WdGywEb8HYkQQGJTTofdC5CTrgHgL",
  "key36": "2m2txY4UJzR2KtgdXgbvqQrcRZUGZCyhbbpiKsVhqTw3RskXThW81WyVmnn4BEBWRQasJzWZHVYzET1RhriFTRrq",
  "key37": "5BBaPyh5Qz376tgud6Kv3Qj2KSw3iq69WZtKrRiuVYCvF4H2YWDye78fr3fFJHr8awKCYgm5XgCnadwf5D1BykCB",
  "key38": "4dnGe58pjj4dnk4YaHSNmdYpTRqrX86PM3EqKEsQt3eTDNDnCWkakTnyomxiFH8zWrKYBGi56TtLr6vS78CDRA2a",
  "key39": "5dz1A12BsLnZBANvgH5DosbkJikYFBHAKSDUvYBuJNmZHbc1r79F11WHG1Y5hdxDbCLSoYqeD4NMZabjwFKb4oWQ"
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
