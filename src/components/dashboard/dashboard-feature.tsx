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
    "6ErEFeEcEaqY35yzPHNkPmPAzEa3QahCMmbGoirnJrd9HcG4LBxYtT7KefUKULKgNkybGCK54H7SP4rDVpR4p5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kPjzpnefb5mZUrQqg2ThMxKMtsNWeE3SnXyTpsekcvAAirG9KyAKKCXHNG7VVbHQceRYs7gQPUVymzJTKgzz3mU",
  "key1": "227uhV82tDAhL9sB4waYDkCNKPSexbdEoheQGrpb1CNjJ6hVmZ3fhZvn4VdqLMrQ1yTcUmLCJp1B5VG9QpYPnxwa",
  "key2": "4bb5yirFMH9kb8RUYPW4bWMrUi6yjeAhLVjcpGcLQL8HQqsvGjmr2V6x1rqgeAzNeDDNvRYAuSqrYVUtEMDAgafX",
  "key3": "f7cQMbB5KxQ3n9VXrEe3BFFbFf6MR7m623cFagFdtvhaSeXj4EDnwJ3w2NgixK5Mg4j3zNP8f4GR6CcvDVTHWBw",
  "key4": "3iF6xETrB1s95Edc9ko5fFmogym53bUQ1o3iDfRPDLU9qPbV6dhi8HJYY8Jftvc73erhCHo2jXVwGphuiV8RxPit",
  "key5": "46Pyyx7Y3MiJSUZpBZyEM22con6akXs9keCPSoRxY73x8SpXtNwBnKmoFW41qvEnmTTG3t9naFfUoP1k3EUWGz76",
  "key6": "5jgLucFWn2CC6aquf6f1LCKGdcdxPvLy5kNyQrvQV9afYxKAu2ra5Uh5cg35tfSfajXY6HYZSUGmDhrUq6vaihEQ",
  "key7": "o3VnHCkSmM9Lq22XzetVEmfUKGfbokbYfHtt1hjCw6W5pkDrjhAehiRe1FUPq8D3X4m9o31wBiTQqceKFjsoKwk",
  "key8": "idFSb26nqEzTdCdy5tjeoSixSV2mMDr6d2J7DpajhUS5SuYbRX9QF1EYay47y22D3ehTaVHAUHibyV9HSaowB7v",
  "key9": "3iusaEoZPi7fta5E3P3X6cZQjQBmRVJFU9b45WLveB5yYgqyzAPedeCbE4A2GRcKnkCDa2p7usXPjoLsB2yxvcP9",
  "key10": "3TPKA8gk4y7r5hSxhNnyGJQihh7KNASKbHpz4vtZoyGNHoMDzs5nuYJGkJQPGFh961vum9xLpdKJaPAh2ZjB7HYP",
  "key11": "3WaBKXLXewNZu1LBRwFJuYi9D7StAvvUuVRpSBNK9bJJku1R2Pt4Qc3To4bZ9V8SsiuDAhyAWnBMhTSm5ZfCQzUA",
  "key12": "42qKohBfA3JzRMp1rADgZfCP41BDePyyot5nMavDAy1NVtR9PXiBkhbUSgVr68umWiT6zMF4PMVVwkDTjRm4jRvJ",
  "key13": "4rye1BPetnFhXQksCy5NvcKu3xwboyf5FVzZUBSoKDxvPG4XhuqGHVapwDDAmUbMNUPifyuP899gPMu3WjBXp2wt",
  "key14": "nzrGoXDUJhfPTtFfzMv6JaFyvecXjud7Fco3ZtL6nTX7himzBf8ew4zS5MavBuAwmBNMNBvy45jUCWADaf6TNrB",
  "key15": "5QJr4SoyGhBj8HXwcLmTdMGEBto9GYxDzRSvzPxmRthe7kHFy1H5GnNpJkAHwL2YtoBGUvjSwBxxkSmkQwscv5Fu",
  "key16": "3sE4zUq9WjftFmfeWdVbV6RxXhHEU9QbSmVwgL59bxgLnFG2gVqTkgZ9G43KYcDVik3gJKBMhuN4TRho4Vd27KTL",
  "key17": "5mBSrFGBPvP4UMgpeLHfPGC1rJafZQs9V3WM4RnciGFj2qjoo2EMDLAHmTQbwNz7gNWhaokchpKmrHBm4xk8Vk9c",
  "key18": "4VyQjVSWFvtjehchtXGwVUvfBfrb3eFFSgvCkE4iHaYU94WoDBvSUXuuGQeaknrH2xprKhgP59gEBAVkpXWpCKDB",
  "key19": "3FADvHjtKhN7YoxJfmTuWvkqJe38xKto3o5gVqU78ZaxERMTmUS8Jq4yGzT6nLsZSdrXGjuADVz9xGkfJWdyUty6",
  "key20": "HRu7W4aqtyvJZ1mxvqLa6qDgbxUALDjn5ehPpvYJLGsL1ivw97ZRf3wUcFYqopSxDjNEa84sKhpTYj4rJngqfcq",
  "key21": "FBozZigiJ6Cua5QJtxQRpWqzPuRKACxTVH26ApE6LjYpaSbYxxX5TY47or7JfDJXwrKo5ZCmaZg5soFUZZccrUx",
  "key22": "YkNpsoxAQXDBwAZfwUAhcmVjzKTaVJjdBRhur8fvZHrXxGxkH6UcwroA9d4h7aEop934AkyeSs2XZDABpujxnX4",
  "key23": "2bo8HUn3FDHU3qGbFwg7S6payJWCwUZhrMwqquUCSyuqe3NJiwht9f1F215jWwjtgwUtiAfvLu1GGJ9kmjM2KsUN",
  "key24": "3rmJZEvLSJpZyyaTcAgNV68yxTcwXrLHi4SAp1W4xhT1e8bTqstevmUpCGBH7LKxeTaSgcrPoFU6sVEMi8qZJBuF",
  "key25": "3cVTcMQQaE5e9pZygYCuwjfux3AL28MqWGSQ1ZhQWp2RQrxM4a8ZFyAJmA3gPXXHKY9cqx4gkwS54pkxj36kNdPn",
  "key26": "4h3JfaQhcPTMuVYEbhGWXGZjr4qadCg8k7hVmptYHwHt8UjktsDyxb5Qik7LxYDmRYhrMVpjzYJdMPtVHGw5E5sH",
  "key27": "2VnoXDAFwryAphKafYujcND2oRm2aW2BBwJuMP16YrXAvHEJrdsx1WA1WtruaHKsK7xRxCPo8JVuf39PaCxyKEpc",
  "key28": "2rLZGpK2CSnr9k9qvnuTAzHfdGpiZNuLqnqK1ioNYuPY9Dgm6EonuphxWWjXu1FGjmBELu53SVNqPgPDwCikQTUT",
  "key29": "45bTRZnujWPbBHyeiSUfTdtp2X8j4WGPnEUStg9hSiNTGCovPnycmQQqshnDhQCUYptD2S4BsijHQYhccNGXSE1i",
  "key30": "pCfSXgzRdkLfrYeMsFBg9RRxVv1GSti6xkL4YnhqEyj7PXAkSU25JgsjVg5Ng1FvEfsFvTPF4BS2CEQ6Hw6rZdr",
  "key31": "4wtNNKnVRrtX7LTL6vfZVbBsS1yXs1WsX2Qt7mRao1RdkbS4Qzg1xME18jd55sj6rWEgJSXRyMsfrBRrtbwzqx9M",
  "key32": "wmHxLGPbzXjT9BBqs6oFww1xmXBisaf4CdVGtjadS2xV757zganPjHma3MXKBxoTNUrRfXNJXFD2sHSFUanKubg",
  "key33": "4K92myQeZL2u9dzB1dmydi6pn8jGov4g8QtrV6FzKn6Da23WPBrr4SVGVtq1oBjSDzVy8LayCsaYxCFf1WXc62dz"
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
