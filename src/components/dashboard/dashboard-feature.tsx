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
    "42jWmSHiMTcNw8NhwSWNqqMhtUCd2xNXQ7iQtwmWWMTb9XUspVY5cfYPFhVER7yL2KKqBFDKBXsdMPoZ3ZjCp6bR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s4jbTgyECCExF95HDB6fzx972UwnMPUdxMcBt7ohaLcHt9C2YHvPRHa4KWgJ6iBdjrCmmotsmHU8VZrsnZE6qpB",
  "key1": "2QnLGzMLbAkwNQx54XYDbXk6fL4uPbowa6Mv5Wx5EnTDCz1j9LDqVerE6uQkvytHrrXm6fkap8poCNUR5nzk35py",
  "key2": "M4zS2V3bnrAGxRadzXZDoXkRvNqFVLd7UrHG5dgAFvt7PjiqeShCjup9nF7m58a1HoCNZc8CYdpBhfXCj9KWnCe",
  "key3": "5QXFqsGhwVatu6TjijVasjXz4uzBff7Tt4RxrsobHpVTutVBr3VyYwyFVBkzXyaBtusfYmGJgDZxAuTJ6pGXoQEU",
  "key4": "2Wa1giecAVgLWDcjWYt7tFt5Dg9ZHkQpJKAmaM9fJchJgMwkqw2Wycj4KzUaRqkhRSxsBGCGGyHSaJLEfnHjvB6E",
  "key5": "4C4r2eS4urHeZAGpRJfR3k8KhjHHVUVqAjYgUW645XPTgwuSMMYmZGyk5MXxukn4KBtSzEHZfipnhn65azUoad4r",
  "key6": "3YfS5STNtF5MpDCUAWnG79mGYnA13K9qDoWtcFScnbXq8DvXAAyeGVMqs3YqCMJiw8C1uou7BFqNwQJLAk6zH7id",
  "key7": "2ithd3wnW3yXrwsuKBnvWvpZgh2XK3UGtWh5tgqrCjsfmDdKa8McGzDJrhobNW2PyPgKFZuoLjahELTUbXdeqvpK",
  "key8": "4S11rApGNjj27mMN3hMiEVZ7AqjHesis2A17aVrWE4Ci6yjT8pWwqRCegtrBu1zaEWiThgZc3MMq1jTBANgXpoPm",
  "key9": "S8NKzzS2NiT2KiuRCmKeB9sCBTG5rqJCBULpG8c4CGMoAZDaQUPTP6EKffQFud6ZLqBsLxLhvu1RV4g6C9n9d72",
  "key10": "ncZ78KkfuK63cRxZ8v2G3WuYfq5Hx1SckzVoND32z1gBjeZjH2nCxfN9ueB25kHjCueAUKmhX9mPrv1wY4qdrhw",
  "key11": "4WsVDi4xa1bbYRfY2AidRq55ZkNfMUqBjMQWXGEdjnRdfcsWNR7WxMxTN3VJwLSPkH9LJ1fsxLG8YE46cxUFBfLs",
  "key12": "3adTZXHjm3JgAnVNQhToHfALo5WDCF4bqeqHW7abgeG3Q3CW6yhbLQdchGDhnU1ApkMdoDfGNUaR3DJWF1VYebCt",
  "key13": "4dSjPomnq1apCe2zUkta3o9g6EKk8KkYytc9nrQTRBHD1TZL77fH2RSXoorMQr3to6VHd9j1v3bF6KohgAvhU26b",
  "key14": "4YpAZAm4bJnVpJfmpigsydBrbaCsMAUGPQko9zuvtXsNUJruaxzQ47eKJeLwhhFuNsPqPpZeviPSURpu8hEPbCUe",
  "key15": "4AAv38V8yD8JcCkvdUAJA1xqPRyMouADHzscSp9VcSuHEfVD9yGHb9chvWMmPDoYXTH8gnvxZsgrAXpFrDFMp3Aj",
  "key16": "2CCNH7qFdtqNVYtAePnDm41bfHXU2ZCjUzAGhz2WVEhqNqEKzkSrHh2UkTqjdYjoZHmBCEdAsfzzjcfEpGWnp4SF",
  "key17": "2uHmreMfbzQqKniPGWWW2nM8TKQfjvGRGdRjvkPJE8rTWUjy8KntBQUrc2BGEGeUyGGxbxoNDhFXyervcyEBUJGB",
  "key18": "5HSc1cvXhhPaXhYebXaFis9HoFjeSK6vS7N37u3NgTeosshSs6sFsnm5KfPRJD9uymiBW4rRQJRCXZSgjEuLRpZh",
  "key19": "4QQjELLDHoZYNdEauMToUh46UCtxKZkeufmdyQkSt4L4pKFjF896sEVaq9MWj9iAaPdNbrc1QeoLZSdBjDFMCnkG",
  "key20": "2ZgDKA7bdFfx6Wse1Wnfq3f1xdErMfLvRCy1Wp3baNP7oc8ptFYrJS1vnU1zZHSWjkVwzGMgDBpcTEsvSgnLaHgR",
  "key21": "qqTygbcfjUno6Kyx3ba5xAANnmAj6J6xd4YRTnFBuNLMLC7xAZ8tYwPFuCh1mt5yKXEEhdQSGvZXcRADJtppzrD",
  "key22": "3rUU9BUzMCc19kkZDZxausQ7RGuCbvt12YQh57CUp5b5Wvv1v6fxDvT5ucvSEpjvLNykBtkTrqFudYaNqzQbtmJf",
  "key23": "5M21qZvjA4k53rWfidQT4g9rE5U2oBdki7J3vsoNjh9BzigUzkUiNrFfLrsWvqSeiqGffVKdhq2H8arq5R8EZzWa",
  "key24": "2iucazDvDQvfejBtWBLPRm5FHWBAaXW6T83dVQgjQD4qG41HPuEL8mgDpKiJXh9EbYaVmjgbp8SsdpqsBf4wVdQk",
  "key25": "4eVtjJprLcQ6YRPSxNnmzWtTAbtCEbj8yFg2Eu61SRn1XWoviz1xvDCJDJvz28D5QqUoNjZpv7enPgJtvTowXMvd",
  "key26": "4hkUVMe5mHBEHqURaQQ6iTQSpDkpf6P4EbHBQZVrut2hnU8Xtr9SpvjKmv3n7BENgfSVRbVKTEEmW52FnxdYGG99",
  "key27": "4UuJTJc3GoHWraxP1Y34wCEYK6JUyoQGn4rNpdSrU5aGDa8vNXg9uq7MmuQaGjRimbU7czp9veMofDQ6g2uDyrJi",
  "key28": "2EqKajJZCrsmboWTmCpVY6yjNjJUrwLdiLVD5fsYBdjGmh1vbcjb7tQ4mEv3iFn1d4mwr8eTxtHkzhJujPUiBcfp",
  "key29": "2121c3nfsEtnEbUhqe6KsqBcqRBiKsGjpEEqLeME1ukxUzzoG3RMpdWgSmewsoKiPAvPqicLyeDxuMjFbU9Ak7x8",
  "key30": "4gCrHKeHKppyvAbENa7353WF8ALmfvrdkTGMqfpCoJRKMbsog9GzdAp2vtV6fnjUNNcKmweQNKfWQRVAcv7ruyjs",
  "key31": "4JZt3yZB247e4pnpUqVHaj6FECz7YNcrRJZFKUNPT41ek13kqibuh5CvNxeKAHH5PNDa1uuCiNd8qu8cWKeYVUXB",
  "key32": "4cUKxoSrXSg6caMFDX7k43vLcZLesW5t3qWh9byY71qHTXsmHyqp2S5o4ZG7w1rM3muJdaDnZzu5VQrFTZxv4Uki",
  "key33": "3qpjWnojrJwR946H2xhRvBBSJQUwziQzDKYKiYEE6bFKSrETfgxCgzJVV1SEVQmkK44ouKXfp5pGR1FQ7ApYnWU5",
  "key34": "YDFYoqSTCxUdbUs4ThEWNMRiiZjuhqY6Q7SAiPADkzsqt9TUyRYhbHEPwfMNa6ikoPxbksT8yez7jxVmr2RV1Vs"
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
