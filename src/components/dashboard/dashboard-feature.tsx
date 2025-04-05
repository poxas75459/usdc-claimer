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
    "4KAr7oZFZ1QG77ofFyMurkQUfJ8NuWpBMd6BNRo95uA2egPChHXnLxV8abmmPpc5Q27yoCRKLogTdw66bU9iKZ8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BEgqmRo1A182XVLHqaxRwF3jm8xdDKKZdzoWgkQikkmp1y1Ea72dZ461E8e1AWfAyaUgrk8RWxAiH5Mp6kitUZh",
  "key1": "snQ4wW2qZqwUH5YP6M2gx1jydvCySx51R4uP5gRJGkZDCMSk8JEPEB2DfcqXiu9Xmvca3rTYYREGAFvZeqKkNSn",
  "key2": "5THJgBZUdDpiD2zq6jHJ3Hm8uC6FCsnCkaB43HvTwjjgEMgZV2GdaPS4sGwMWgDDY51p21pWmE4nNaQjgMGRnnsY",
  "key3": "5tCG9X3bS8E98sT9Vk7zRZPgPFPTiZWNCzjoQUW3FSQksiozwjd1odv2SZ6fy51zBRiYx5vZsgB391JJiRPvJW4h",
  "key4": "qAhd83jg8quZaMk5icjvreotethsRwZkNELTNt1eGFCc4AzGtPmjW74BdM7jU8BR8BcMc8QEBVKXWbx2gcH8UVy",
  "key5": "3eCu88yPwnSijMaKxzAzA79fvygFBNj84VZ9x1GdVRCCcfURzN3jQJfDb8p1Gh5wCYrKF9VubaTkZmfF5LCssFkM",
  "key6": "5o23vC966WYDtL3tDPGU1Bdhk5DYM1SSUPjmRihk7obDNhNMghQcbYrufQnbafxMoYwCvQYw1dVN2UUs4EsBKzyE",
  "key7": "2RE95Dp8b6vvvrekeEyLxFSmCboUXDoALdEzs9QPGFpBU5LwT9qCmDVi69Uj9EWaVzafeho82g7KsgsvL7e1Z9qZ",
  "key8": "3euQbmocSyERdRNPiV2fj7DQ6AAeX1pTGnGzcczP46DjTcD3A9MrQpX9HhUi5ocUWhf2FkiyT9yNi79KCwyNy3oP",
  "key9": "wLuAACYYbEQQ2DZayYVx5nu5FUyerUcLJiRzcTF3AAP43E3yffYvyTSMAm7HzeBozkWTy8Mg44VftRV8vbQy18u",
  "key10": "47RJb1eLrMWPRL1f11BcSBwRg9Xyi38yZXJpJWt8qxpKubSVxuSuo9xq77e12RzdvKWGLhk38fGYCFVTFnKNiX5f",
  "key11": "4XVm2Gh6kZxAmU12Y4Wnf1tq7WMZCRTLJahx1bVnVHH8FqofEn2usCS7D3zSFfbm5bnXBU2aeDF8dV6ZDXEn9qq2",
  "key12": "3UjCn9Dw8tzrsrTxjv1gCMqeDZPAHZXCSyv4sDFUXFrsoeJpSXevjpvNMcyv3SxXU6xFbEhJoCxABxTuu1FVk3Ny",
  "key13": "2BMa3yBFmkqtNekyffUi88rxbFFdaJRyrXcRXWAaLgRh2t6GSf4w1G58BTAWkEGNiVbd8TpuiKVaYbH3PG8x214g",
  "key14": "4BhPqKApbmZLLcna9umJDieM5J2UmLh1xY1eChveFyKv1A1zGri1y5JLhdknd67odZYqBUknDsubxwqCVeYGKzyG",
  "key15": "57h9JMZ8sVstqkq1mjpJEFXU59BDDR4ntGmpvJGFYT3JLbRSZawsMgm6VuYtruTp1tFDCijQ1bU7Po4rXGnWH9nZ",
  "key16": "2Mv6wh5x2CSUKr7uMxe4rL7FnLtJcTVNgf7wLQijQXQ4s4cG7jexMR9usPZNx67ynjJ7AB9brbsUGbUshxU5bFaB",
  "key17": "5YmBstjQj5Vqg5tBzagCNwX8di2yHYVkpiE5WCdUjY3mvzS8EDYbseB66t1qaU3VVyFZhsmS3cpQmR5sNqb1rdAj",
  "key18": "5gCpfcQUBVjCpp39wKXxPNwdhrQBSPANbahX6QBK6hFodN7zbJh68iZDziCxYBLoNZSKMxUR82mDn1LXsajnRwF2",
  "key19": "4E4JqXagqEZXp146dhHtjsj6sT1wCRqEFMdBifUxGWqHWKqBDkykmVdZANU4uNr7zvtHhQsnSTaYFuDcmafsjZs1",
  "key20": "4fAxRdyeor81AvVP93c69btD7F7KDjpnovKVdDkUE3o4jfy9Xn4WVfFStHMpMPuCAqUMXKxCd3wihF4mAbE4hJN4",
  "key21": "38jxC8a53TUzZxZHmBo54sVqdkhPpQ9xPYH6HBBPqGRN5oRNzE7GYhXRERrwXmFTXGnWFcDwjqpxhpGDFLQqTKg8",
  "key22": "3WWKH3ejt45YranmtfkBN6aSgLMXQBm7pYi6gbez7unRXP7fujFNS4x67TBDMjHn4GTAjb8TgRwFEiJ2No9hMyr8",
  "key23": "5habNDqWmtjW1xGzEvCs7v3qrnUgTY5Wu5oCeHbewwSoBnbsZMPkmBXsiwuSHKY7ZkRjxkifEBb5L17c21axhXrL",
  "key24": "5h4S6qZ4N5m41H2PoJqDTcCHRqyGY5Jvm3mNKtSfRqjsYxMLLQdyeWDRsmimyobrQ1yAtmfoeQFZLWTVwUXFnQcz",
  "key25": "51EUeTjSKsS6J1sG9wCk5rRZh2j17meqPQ3JVce8zsgE1hc1BCPuJw8T5RmkpYZDHXDJwHsisFdgWcjPAKTJpoMM",
  "key26": "2wUN1vL85Dxxa9Bf9B4tb47g3sizwNS8gVL7NvSMw8GP7e6HFEHPvDwjA1uQ7T2ZoneDCbGHmK2eod9VCfABPPwc",
  "key27": "4RxkQxWnYZrtLC63KryqpBxcfe6H6DXU5g6Zqzg4yzCKvmR832YkgRMTi9XANaBX5ySGCtvM4bLW45YxgodZMgR",
  "key28": "2sNt21NwDvLpMyuHfBVjw7sreCHTht7W5Hh7LhsrTrtdWexW6uyPsCVQSvNazRu8pyXLyiV4u4FMC8NjGJc2H2bi",
  "key29": "2kAk8esHJmFyd8RYQNEhgnXEFUTZWcfTXorTqXTAQQfALZUZHkhpiDwYGTKDmmd6w3eZRg3kNaawjTBGijyRHSJP",
  "key30": "SCcnCZGXqfMVk9EpMUBuwBhj5rYZBeW8WXYZQnWdWaUiVpiXd35EyQSXJGAVepaSk26RndmZpX5JwPvuou92LKx",
  "key31": "5n2ivcuiePSNtzsmd8o3BYkr92qAvxwdfYriw7vEeda2L8N6AVGLmKpZdoxRVdoJT5e4EVrkLdQLt7qSk1akCtj1",
  "key32": "4iMfEPttKf7mvc9kphMQ74nxmuz12RJjq4zhfyTxJEYFzpSuThjUpnDnf1i4otkk9ThNnCKGKqZEgcJv91J99hKF",
  "key33": "2SBf1LzNqDvXhc23dU2CfQNdbgSKWURBFKkHpxZRJS1biKnoTSei1vEYscYeoPk8tYxY63TUX7pUXd1QHPJ5EjKJ",
  "key34": "2hESSncL62r4Czjk4k9e6tDaN69CYn1Fvpbvm2fMPPF2iDPnrbYzdDkxFfpE93de9h3RKa73brYuX2QEd5wNrfoP",
  "key35": "wd6sRbGi13oFb37rLDXcxYMTPkEeUVV2G1WHacDpj5EpVEhzyShLq7tZZcCSNGnFkcbaGEpnhWRqWnEdKRQyeB4",
  "key36": "4KWuVZfcgxJAYLbejsfRLGjRR7esMm2WgbDHLMqxEXJp8gK4KPqvRhXRF3g5gFkfYKW9FNfwUDJHg8BX81d3jY1D",
  "key37": "4SdsUHHJiQyF2VY4Typzb13iVmsAM3nhNmMzRxkjb4rknPo8UCsaHBGcyTnqU2Px7MxAqF5ZntkcoB51gBrJRzXi",
  "key38": "5uqpAtiVfYTUEqqEtEMQuKyzPG9uqkNNFirZWEJTiN53Hx8xRtmPGE2RhijuQHqDmRcAut2xwB8qQ4z8pPvmvKyu",
  "key39": "24n9StFxinqcjsTgqxR5ksVSZVdNCZ6XPvSpWUW38iNyonWc9bt67LrVoVUQTY2jzdBCTCcuEnFvYxRwUyK447ux"
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
