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
    "naeuRZ5MXFPDBy7HwasQzV6PguZjz4SBUMLAd11ov1T8yDt1wEUvNvEMT3P5GPCV6SJQKTHxhPuZGxiWrVzD8uo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54LiYJbwrBc312E8AkQwi5VaEbde5BXhNiCh1ZatLDJWjhXxP9VvS4npEMVqTcRn2NyPWKts5srG8xR3gVoZxvNd",
  "key1": "3XcQsp2fnqHoSsnaooY6ReLYLEN6ZPcLS3xxngUKvEZADRmpf6tnJkN9A4rgVLwNPHVSJDZg69yDMekGynsP8e7i",
  "key2": "51KwTqH9EAtNXLWNwVGXdtMZRe1TfGgabwE1VUDZH25biWneAjK5jZAbXf4mr5TKrURvR6BH7kFrHY26W2erc1Gc",
  "key3": "2EaGVWoJKN6s7caEe482LN11FrJH58R6q9GedHB2irPhsqXT6NouPP24ZkKNi3WE6bAuzmrtFisvyQFR6kE3B15s",
  "key4": "4TShT1vzZoAGt9Wo8VHr1jQYKcdKmURNZxK9iUGpdnw4Y2ihcFbwHqnSF1B7WmNdj6vvkmE6VPRDtVxK9CJGLucV",
  "key5": "Vwooasx6KeVKViVc1v42kxAARnxd9aD4GWooxTteNNKN7Vx2D65xseMkNqV8S5LuUjjA5DEB4fyEW7nrd97XBhp",
  "key6": "5JS5unuq6MJ6sUGqAndTNLHnr1eTjDSvtxF5uRSqz1Hb7w4Yp1W1GSXXe3v1mDWHPhKLfanfUYeZ4MrsCoVNR9JZ",
  "key7": "2LfFHKPwLbpaBy7uyNqoZpGzwA1uqfXDJkBTWwapgPAuWZwJTY71oLC3VweAvT8UHtWppL4R1qShtfcf3nYbK9WM",
  "key8": "4YTwaJbSeWs56N535Tp7Q6JEtR53VJYbeBF35baNLRG5NYiEhmiG4PobR2fahxNKFssRhDzbidssxtzxWwfyT3Um",
  "key9": "2NjG9eNJ5WBNoWpUKBRxw1WntS4sQDqq9Uj16zNP6eASzcNNJRmJepngBJLBuNV2h8wSKD6wJeybL8HQeZhnpnB7",
  "key10": "4cSV3jCeskxgMMeZeaynj9RATrtLnNYKXrcSWdekzy6ND3iDTe4NTgd3tVsz5DCUV25nTrFkZJ8BRdua76izLnVg",
  "key11": "5XdnsFhnPsbNBQYcsxSjuGsCSKgAk85RGDCfoT7YKUqgkoPrs72oTQTX9aDrPGpLTGRtMP5DsZpC6r5f1Ce3DcuD",
  "key12": "sENfMUYgKphyCX33PxEzBMk41TpxWUCmB66mdcZbxKL4yWEJoGo5eRXUcWFaGUMKSZzWChRUHd3v1Ch7cH2qDgG",
  "key13": "3y7enaApLbv2VAeXGnjWPASkPc2SVTvj35to5xqDBhsZmCoWNmh1WsWNT4kZM9iU5KN4vM7cTpBG9Qe2G6YSKuuq",
  "key14": "5P9fD5vCYBjenkuLbN5pnX64WBCd9YBnjQaNADXweh8M3bwZa1rspgTeLBwJyaezZEYTtJ4KHcRzU7WxybZouf9M",
  "key15": "Gi2xSxQBrF7VSh8C9tNEPvNwvqnjU4BEwv7tRKZNbLBjF6pG5TDAKcnVEj9H92Jksfjxq5EMVvSdoMYhdeZdt5a",
  "key16": "2G2FTfG7mKiGigaLvzHR3v5YNUFpFwDzCiAkQjS9GcXBTKmoRU7XQ9DxmcENuKS9jEx3tbRYiHcbjxmnBHDjWZmw",
  "key17": "JanBzPcAQ1cferYfbaRKTnuL5j79Lbsbics5dgtVdEKm1GuzPoMiUZxWU2GCuKuTqDJswpwmxV3S5ghNtVkxiEU",
  "key18": "49tAsqk27nnJUPMxjddecTNaUb2rNxqgXs6jenhjLQQF9qLykp1YZRs4bpd1GXu78NxpnfjjhUdqsEx6fJXuHRw7",
  "key19": "5h8gryUHLAe6YkYorT5tisJnXfRfFYmQgZKmfLs3DotNiTJ8xbXjsX7PknD5FA1pZsAN6zn1jS7u5VPvxUDxH3ZJ",
  "key20": "6MxRmU8KvJ4smDRtZTPctDvmPniKxutvuWEj4GzN9B4n48AN9NgvAgnC95f2eLEVMXcFGCurbNVdPt7i1aGqQcr",
  "key21": "2CDdZguqQ5rK5BKndR4yg1sbtHFEBD1Knqss9tsffZKHjTRCbK9TnHyHz8PQeXGghKzeu5U8TyjcV4u3TGkTEZcQ",
  "key22": "3nriD7fHckXiNnJ6VgPyvGVaQNNfESDg2QSVp7iFgbaBDwTms9tgx1F4HMMVg4txrrGzEphYxzkr2fmtfkgkR1AG",
  "key23": "ZEVMipRTQoLyw5RdQJN4SKDMLNK3bQfjpFYqRCS3KVJPruLWq5eizyqDbpffv5SfxnorqBXSMboWbhhjNiCPU47",
  "key24": "3j6JPQQJs5VqDJv5VuutDWRdY3u6F4KEPuoc6DEUDpNxKd7eKm5ovGgimiAUDo7kfwEJJihsMwP5ekVaWhbytkQ2",
  "key25": "5oE7FZ9pAy76YcsEfuhjLmaf8bF7LW1AxpgxuYGm6AN9kSoRPS3pTBaU89o93hUqPu6wo5oPbTqw7qP4zkP8z3RN",
  "key26": "2JJmjiW4J8Bsdydi6v2Y3W7mPSqoa1DtPScaaPjJ1FnRiqXhphTmkADzcGAFACe2rgQH2UJzPBbfswduf2yiTxub",
  "key27": "58FXvj5kU2V4CM1mT1dBvtjL2hDXzJp2uon7KJuQ99HLmpzTJ7tgQd3yfD4qhWXe6r6iZVUtgF9i6BKqmeAsXQwE",
  "key28": "3jbZfSsoWrcNpEztMNJLzoPjv4645x8ezMfvau4zYZpiDXMpbSRLWrjmeLH6Cc7yra815SxckgQL1LGKZ5szPD4G",
  "key29": "32QExxL8RqBrxsyfDUwRjZaww3hrhCLkahTweLLbPFveT2rFejjiLEejpJccTgym1A176YhtsR63ahKCRfoDR1fe",
  "key30": "4YYNk4UXJWexWYsRyQetsJq5emssShfzTW3XRDW9mvMCpissoWEiZ9CXAmrCz9ozXrgsXmjtmN6RvMtw2uouSxJw",
  "key31": "5BNs2SHRXfQ6ESMwZV6xFgiwJyT6VYebqkrbUagSy6iLC4TGx9sfNHkakUrmu4PkFEQT84erTXJAdQt9iMKJGKcU",
  "key32": "3JVgaVGwL2ZR9q2G3RTcrrFQSmVQ6nXHTN5T8EVqrQ1T6PCfxHoRteEqi6Dq5559KCKDdFfrzXLaj98T7TxQeVqn"
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
