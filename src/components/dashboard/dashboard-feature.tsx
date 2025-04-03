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
    "3Fufkivdjhi7J1TSEzH2CTK3czJh5k4DYgHu4Uy9NZdFhv2T7mRxPR1BBF9ukzgph3nBqKW4RrduFgW5VXbeV3JW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i4X37kf7P8NLML34WExdxF4hrBSqab53b7FXcJvF1y2tKqo6UbMjkS16mxEfQYUAT77Y2wkSy79KdtKbwpbcZYP",
  "key1": "WFTEuk7ebke8AuqzUqZdpKcTj9Ua3epBd6spQu89Fwym6fYmny77QnrZjfn54zejTVzGHNeSokQHEALFyZbAJkw",
  "key2": "3JVxw6w2dXmjVgX4f8Ae5E4VxXYfiuMnzqZxFCjmDbEXutH15n9b55CoLNy6Kz3VW5XbpdnfXCXYmiaK4iQWJqsz",
  "key3": "2tUqvi3VEmPeyb3zofvxCeS1anxKRG53YXRrrqs1kdJ5o8oZomPGdKf1eeqnT9GYYBhjhomQE5DwAgRdz2SMNYYs",
  "key4": "3TSXXtj2TJ6rr7vDwLbCJutg4jZMNBgz3YyxETyC3WLLZS9drSYujkAmEo1rQx9shncHp8PFtpo4e4z7zCR7zhtM",
  "key5": "SF7n56uAMqcaAYVzzo1NdWHcu3ybBTV5HtRAgAh7xZaXhCw9aftAVfPUgDhw4L9JKR1oAH3C2yBNwfp9AWzp2vX",
  "key6": "zDmyNDc2PA2LDpnxWVuziKTPq1UxTx1WXEmpLiTXW99k9exBmRL81wGZ4wGUE5MuNubviHBzy1BEWKzdqGUptZg",
  "key7": "4hJWLQyYND2c4JFXsvpZZMWjdjBtVXgd8dcjVR85FWDxypwWw6aC9kE1HeYNEpwD5Wf3yuXuujBt9RXS2CDAYFsA",
  "key8": "jGj28FVwaKCaYX9gnxTs9z3tKSk4Y7zqqkznc9qy2xxxr5v27W2m6G5nS1dDPKiwNtgGowZQHicqQZC5PWe1fUz",
  "key9": "36ifx2dChgq2LLkVXaWXAa2jwqTMFcX8R4SCXLXE96buDB8z5ZQq79GxG2yoLu4yPMpMi2xLHEBqWypjrxjX8VCk",
  "key10": "zq4jJsKMRBvBS8cxqJ768jqMVkkjm9SqyhvtcarE7u9rZGKhyidVpfUZwjsHVWjuXpjesUQ5xqUUVes4C3LWicC",
  "key11": "4a6awAR2HyDm7D1dCpi9JJsJtn38uepcB7u7SXUrd4Fn6uknKePwx4LCtQnsY2QdczVvCZvHt9ssb3g83qsaCamn",
  "key12": "5pB3DyWrcCnQYUYRcptR73x11EaeBtpAVtpT28Bh9cVxnbodNqS3ZcSKk1y4YezmJXnn8CcxgRLDswPywoEtX2cW",
  "key13": "64HNHLA6FwB3VwM7HB96VSfNLtCSwRrc7cYodjhW2LQotpavbN3hVLrQMHaRwR1RHpyFu4o8VP7ZtsLvXCttQFsR",
  "key14": "yaHPgNEXdY59QEp2hB8zfnQ27nEk27X2UEE6iPeG3s8VoTPEYNAKYQGL81QHDgoFdZsJFXPw3kNGShFhMHZVq7K",
  "key15": "5wNmCGFs6ZFYUKCkwLLFm4YgmkRv7hAdqmGi9WdYbwmLEMRckVAnQHDpMYoWX7ezLAWg8JHxLNRGDdkt9pGzVM9A",
  "key16": "4zQX3SidcvSsEsRxRMsvxoGHf7Sxp3BD7djmJw9EsbmcURc3qhwU4Zmzcb4xfGPnQGhoFFtBP8raaYYqp9z3CbfN",
  "key17": "5o6T932a41zTgbSHaJTk4DStUvQQTFA1ncoEsv5SEpvVKVfoCwi5yPvSkSyr8XDce5226b7Ct3on6eWrBzVQvFm2",
  "key18": "3n3nz72xFv2BiAeVnQZUXJrpCXfrfSt3pJiBhEGa7uHJPdE1xYssGwGmAGvtAXaEV3zrQH9jmpSxwMVJcwPZmVC7",
  "key19": "5kzSUqrmx48cL5Ln4TJs69JBAXxA3BH1MECMc2myGeWs7tVRDcA9p1X7icLKA6CnFmwHrkUom3SdcgUwMN1wM4qP",
  "key20": "4rUJiJASAMTgwYcxv7Xrtyu94LYk7AFUcy4QrvRZSjEvgSNxEJLo2BKJV2mChNh4vrxPmgNFdw16NAUH6huZZHv8",
  "key21": "4AQgrpLWdJbZmuUfsfmcpH7fW7a5FVu1xzmdTRaQdFpYsHhyWuomNPrCAVufyRs7w9FJNT7YFAcVzoTeqdTEVTs6",
  "key22": "3ZjbhZQSoZqQcn9pW8XvsKKCS2i57Md1WxErRNcqQuVMSoL3YxhmJaLLJU6TcLdGBmfWeuHHN6K4TUUNCHsswcex",
  "key23": "2aLwqqCPmFmwjjjzVy7S4DtiFEeWtTMHR2GSfnWcKZZiTSp9DaHe3eFosMrShpmov2k9GPfyJLvSyMrQNS5BoYNH",
  "key24": "5v9jzpYsLuDCoUhQ9e9D9kbKSzxuFzPsSNu5RT7WURWYUhwot2TqVNAGkK1AtHJW3XZuyHvKtr6yTZx49s1jkXuz",
  "key25": "5skoK8PnK99nrhXnEtmgtdHLoxsSMZpgyjXzj5rhVsdeToCXfkzKeAwBrKKknsVhCWJE3Z5vzmjbxyYhADDFHkzb",
  "key26": "4yrKLr9oeU687b79isNPd5idYvRnanN9S7yvKicgYLXf6ZNMzNPfCkHEg6wwfmEfmtW4rWuBDUVDkuiZWJcLRJ4i",
  "key27": "9zgPpV95WG81ujtc26aStQj5KWmCRBnqNVPMvbUUq2yhNoMExHzKGu5vxDsuBYxKqpGqoV3ZYk4RQMHJeFGPVoh",
  "key28": "VgjCvghhKy5n9y3ZAfbiWozdvpiqjdHtSMBnxHSKdKSzajX4pzGuksoPSEW4YQ6nQGHzizaQAH4BpFnMa2uDoTQ",
  "key29": "AgpzsjZ3cdeGf17QFpznqsoJePvsZ18nU86eWwB1hTxHYyc9k2LNxW5aEcHx8SGgQ9wrMApcyfaM4Rgyg7i3cDQ",
  "key30": "55vSQQQw9MUz6KNdzSSjX2Riprgwtwd94MaqyLkP6UvGkyFP3ytYCutDw1Wb15bELbposPsCKwijpSiWCNaqy3zt",
  "key31": "392HaysxDQhEZrxpnLkeaQethaDHpK6xvwymwYWyiuUhVCHF49xuGWkrhojrsh1BCfJHEMd34aVaHYe8DRLFGTxk",
  "key32": "bpPWXSDSDkMNJLbzmLerAWYQTrtJdqpbq8BV4oEsmFNyRrWZ52yF9LazgS5d54RfiQmvSY2zkKuWAvJTm6CMFiq",
  "key33": "3Vk4HLeKNkwQFPVmxX5vXmkp4ww7EpeswhbSdDjWcT1u2ydDxDRRaYHiSeu84jtKdJzTqipeUTQoDSH9oAdBnnuE",
  "key34": "21AXTC2LaRJGU6yMpzNdXMuLYLcFDZLToPkPaJ3EzmjULo7czKdDqxmmtE4BDx2tphZrUVKL8d6BXabecqdoEsKU",
  "key35": "5i2T3YR5oNJEpLXjJbPwJmpQhZ2a1ZRZqKdcQtZmvZeWKamw3qGoZNohaANQHWixj8MR7Lx5BLV7guUrQvxsuB6E"
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
