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
    "2Zy7MM42cPfo1i6B9EMQ4VUGW8sy3BevYzyFoGTrskkaQFqNMc5dUYBtTqX8csuYSBA71r26S4QPfZE1sbhZLm4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22o78obi9RfQ5dkT7e8z8Qzd5FD9DrTMbrSPKa6BofanXjGVPrGi2DpoUy7w1CNV5B7VL27kMuo2xkZ64L9nTNLZ",
  "key1": "4xazD6B2wLaRajncSm3c49v41u2SEnSCs6V1VN6SvuaPyuwYsvGY3SBmmfKoib6vemZ9H6eGx25g3QrsA2q4d3pM",
  "key2": "2CNuMFsy4BTgLxGu86jWQ8Cy9t1cP8Gutb7WCaUC24tBWzHaADovAB7AmcB57MJhv7PZmt1Hx7F6BmednAerUmkX",
  "key3": "3W5aNkfMJWBZdUnRbHMLZyXt4DbGJKQKBBafoq1g7UgeXnJTcMkRfWqnoEuBE9m5bLnLVSsTQF2Jvqi3d5thuHA6",
  "key4": "3rwNehEH6inUnriBJG7fT9u2Lzx68TvKQa1isR17ShPTZLygJ8snBa2gkWEdaqe2ogES76W553Zqn7XUdzuP6qyu",
  "key5": "2ZYGQDXGynbCajreRrRcWirarFzZ9cHCXsRWycggtEQ4cLyTsc935BTxaXvqSJ8N1cbiTKaJG6NsLF7NoE2UGLUw",
  "key6": "2CtNVXGFQhHMJhLxiV1RaqxcUxjEq97bvKyLjoZ4VjQHDQRCcAiK4uT5fz2tugVWFupsAGbsyGSKS8TnEVoV3ZSu",
  "key7": "5XMMcc8CQ6tExrVH2MKfrpsUqu4vqyWcQMGDRqbdW4kdHMGNR15M7irqy9kkJ8W775DgmmPPGCfvtimyrixMiSKw",
  "key8": "2qLiq9uUTzzt8enE34LQseRqxYuYXCgGAUxGY1DpQnkh3bgK3Qb9LqFDxSSgL5uZNBwL7KMQnGyc9PXqHTo1BhkA",
  "key9": "5g1SZuZ5JNXPbTiNPcfKDFBCXnBPuyfhtw7KS78BQNpLBTva9CzQZS3JA63WP5trjW7r2ZAraNQMuSJnXHvPETmS",
  "key10": "4NHNxUjPByKf2RAQrjaahr65anLRhccSddxKX9FTxsFSNsBf6z82cd9mxnUT7qkXQgwnPeUjURb6h1WWyWywn2ox",
  "key11": "w3CLRZ3RgbqYhB3kMssHWzbuBP5Tr8bGZLr5f8j7HmCrAY75gbJ5fTLcLWWqExRsno1XDGrbnoGrruUb2N3rNuJ",
  "key12": "VJRMMPQSshjn1VQagTdc4Da3HQTyj5363EKM1SEGDVVkYooX1pDanHifwzjvSr3a2SSeeg3r5pMyaVNFGqoWMMR",
  "key13": "2fWQ8FKpx711xDERH7e3oXcuxprZC3wPBErfdmmoY81jjLkesztSzt8bBMmb9eefKGqh5FHeJa2PtWEq321oDYY5",
  "key14": "4RJcjYMnweEw6tE7YuVP8ju9nApjNieCbVTnBHvffP9Rt19ajGHcc2Zw9idpQ5Md4s2788tZyhmt8yZJNQp8a3SF",
  "key15": "2Pifp9b3q6qp9EXRS5vba3rm1d5u2SvGTSkUifJcEFSEQKgXvxcuzZuDJiYpXAitM7fnmB1hNXn1FKxBWvfF327d",
  "key16": "3iNg5m4s5U4UjbM9JxMFUFuKAkpFqmauuEPs7jjAcR14XrhJPLctiBC4a8AKPiCU8AFNoj8WC4RUmcEpNpbfymc9",
  "key17": "2X5PzroMW19yNvqdoLCq1DPSZNVZZAt4XY2mFz5N6xYuFCSb91nWUjj8krmTq3EZ9LC6PgB1eRrSha2RS323QtdX",
  "key18": "2gRKyVcRPhczNQ6xGP49E9EVh7htdq3MWcCBAqV6MMxDo5tMrrMbBUdYXZubke7pcis94xLk8LXcniNk66vHTE7R",
  "key19": "3nfTUkZJHti3ZU6oPg29Ah9XgfcxxaoWYDRbdeRUrjmNoXjFP8Yz6BfBipevwHE2TuF1tqfzHzqFZ1nxadfbuQVR",
  "key20": "5cmTTG46YXA64V7ZLFMXsSN3zgdKwjpXoq7Hg9ZwotENRGEYuBJK2cXmN3tABqT9CaovSUZbZnm9tLzTRGFqBo5U",
  "key21": "ewJwN6meahQUP26qkMV4ZfaKuxs9tFDtMhJLL7eXghPpTDT88inNwgh8tw3w55Mey4g1NZP45CZUQpYcj6WhEkF",
  "key22": "2RG1a36itthbMiejcv5Mykuwnihvj5V4p4PS6gwm48HWhg5k4oVAXiPLfD5uAngQnvQ4rUckA9dUw6LXzZgNrWCa",
  "key23": "264szUHHgJFR8EH6A4XK865wuehK2ZLJmxbQto3Bit5jnwPxpVz6ZzQKh9KwsEGSeU85BLBi5rUyaFkVpcNmvWKs",
  "key24": "fS26wiwonJVRJfiPZRycfiHyeAh1m5VEMHPBmmNg2a6VYgYVFFKKKtugeFdm3JV2yJLNwR8EUkKB8zUpTTaVwuD",
  "key25": "4562Le7so2SnSZSHioNUGGQhzKGmNp1QrdLXwRoEB7fULGf3enZS3TDLANggFF6Fz6LHBez7rX5kMybdxTdg6Zwu",
  "key26": "4JJ63fUg59KHHx52u5KGHsR1PSiYDjGeZHdzHwBNYGiyP3qSqyjz4P8dcW6qSuKHSyVykfHMWs4jkVuwkj19J3AR",
  "key27": "58KUCtkbmV1GaJDAejcLjM9GaXPPDSSLfA23YJW7xwQQF4RCgggF6KvGfuXZ3GaUeU6w9nc1KkUYGPb1km3zbbkJ",
  "key28": "2ymvUWfnospSiHV7qhNVKLY9DM5a2xt3btABWs4hbsVVqGFejbnztm7BUMsmfmeWMhRuTXSbDZq33r4vYq24vMmS",
  "key29": "32JKEYkTXtkkHnmQw27bpaL6oVwNKXrujekvvcP9sigVUvbPXF1bsdLXFgDFeLByufqP7GKMoJuvHrtJJaxuVRGi",
  "key30": "mnhK8A1yiqNRVkp8dFvxaiyCWdCiNDjirZYeAsVTWshMkYJms4X3BobRQPfgUagjRiwN9zSxC2XP5W6CpxQoHSp",
  "key31": "5voT5ac7LLEbT8LRs59QMc6gJfxcip85D3E2nzH1NnNaZzgjjP4ACZvZWZs5JFniJc91A51mNRCNzrJBj79t5BB3",
  "key32": "2jhknWmqP4YP54puA9Fc2r4RorBBrxb8nD9v8hRXgAz1zbgtUbskrQKLSuv84jLVxvGL5v1r8qPk7hDKEnj9fK8b",
  "key33": "57yJfPbEfjzLcNC5uQfAFpycj5ZzD8q1WDgACEoJZtLURdqCHJtTPoBjVHNYCTGYnXpLRoXspFK89yGYyoiSBgLS",
  "key34": "5ca4Bv5XaNt4poSVme4g7fjkTp4mGzaEniNmLZcxut8NQFDs4v9EbvcrgiLH9PEnjkxDUArMVJuu282d6tVaRtgK",
  "key35": "3NuxT3kByaS2yK46oT4s3VRG19hc4nDn3XdzHk1pZzB945jzP2i5SC14wgJY3wh8PzpmabjJHg5PGZZZW19ZDuui"
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
