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
    "4kcu7YyuWNJoBDGHkAtsPryDXcfTJTB7oZCS4qh16YjYtLdBADCCxsNjSjvfew2Gkn7yktAP7uPrBnc6SdMkUvXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EqDZiJ7dE19Tbk7KaCzuosdJhxCcuAz4WCYJayYGoZhzW7kna3TMJFqq5d2DwjxCPe6hzwTq2nQNb8TQMNcpsQK",
  "key1": "3Edhfftr9V7byqfTnURdn9QUWWTjLid3uwoEmVabshYfKWFBpeTGkbkzgRD5GW5kFjo8usbAMp72eY5meMpbkaf5",
  "key2": "2FkvZBQxtAqSjHkr7QPB5GxSCnpyRtWcPDb4XtF3eiwr4EFMMJcWXq3Wg8itV76vdzqiDoj737hUpyhK3t5tA68b",
  "key3": "3TELtuWEnFWNfC3WkrzeoQsV73XxyKw4rfg5WmUXJKt1u7D4qPW9TcuhbSaxyzirF5Zq53rAKc5aV6nt8UBLfzvE",
  "key4": "tCo8Sns7jqTv8noiaD4zXvXg7rdEK6B7eurBQZd7VzU1ZnBZ9csECocvR7BzwkX4NDAC2KdqPRfD5ou8aLuhv9n",
  "key5": "48TUZi7wmm5ra6rNdUroMBNHkiKMWSsSy5t3uqDFqaqX4jGApwCf7v8fw8Z8ak56LsAg3zfFSar3DaDVaEGUTkXA",
  "key6": "61uV5vnYUHNnnMq7oAfDSN2rtUUQanqnpDq9D7J337sBmYGpPFd3FvncMNwVxmwmFrquF7apcJW9nqtj8KvKwGWp",
  "key7": "sFQ9Wp1cdEZbyaqeNiSG1kabnUAh11XsxT2PYuUmPXxFaJwGQix1v6jWLqCJQWjDgfCju4cAAR1CK4cuMTejDp2",
  "key8": "nCFPxT5sdn1aw7fe9W7Dh1u6Zhk4o5KuqXJtKttLyRKBEtHAvdDAQ6bsyajnRkcAPoTLXZzLzRNkX4xSoDyTcDU",
  "key9": "2pA5EXdEbwZD32C5tWLxd156MoMAV15ojrQGkdxjCfwpS8oC2xpY2pxFavkDesN7XUZdT7BHcqK1YfsmgEjvmbgm",
  "key10": "2N6hgkp6KsTDtha6UE5iT86mCLb2AFiLskatcD1k8FhQm3a6ZQAkPHvwUrdgJD1ENUP6bMvLsEnbK7g6Fp2BFYcZ",
  "key11": "293QcS3feorGYSvV8p5H9ETzr9kdZ8XGeMXbdmBFiVXh51imJLEJ2MNDRfvyo5emnRVoSb8MqxsqL5Nmw6YuS9xY",
  "key12": "2kVpFhqgtS2YWQm91MEPUKirCorcP2qfWhYBZ3UdHwBCoStivdpr2UP6UqGLSGJyDsg2wJqoL5RWTFUA4JhCzAGG",
  "key13": "Nr8v3biGA6fY3ZZFA6BD5GmjgwHv8avTqJudss2dh4nfhNR38R1FyGxehZ9CaSY7wKGVMxKTMhFsUm5XWz1PPMt",
  "key14": "JN8btASS2hjnRo2k91raSkCwG2nt91GAe37Pd1ZukkqxtoRj5ejxfXTNRWZa6ZZQqt286BaHmcXdrXXtWX9QPoj",
  "key15": "37y5w5mviXBnQ9ehfnxdw6Ez9ma2FeDu7iK468Hh8J9FHqB5Hyw58fWn3Bs5mK4D1jVSQHAUcsLsXnPLtHN4R2DN",
  "key16": "ePFuhCa7hSELgd2Z51xycZA5SxMipkHTAdTcyYJzQ4uZjFG1Bq6owGn8QYK2dtyDVYfFtStczc3JGWpEUNLiThd",
  "key17": "AHbNaYFiB89jKgxg8kt2SSrTSw1kjjDxHyT1gDghg7bREKHjxEyU2WdiUVZSGGSiZBXuayE35nZ9T3FhPbG519t",
  "key18": "3FWPf4rgXNuVSp35ixKzdv6dVyBCmSR7yqax1k39Rno854zf8BqiSkcS6dDYxNvoQHqc7CmGjx66uCd6rZsz97Mv",
  "key19": "4aL8X9Dz5uNEZTwZt1J3VNLpQMcZ2msRAJGHJpJRCTVniNoSWT1fbXe514WXPrAMPfoAmT67Yf7CWfAMQdvudktx",
  "key20": "2LPUw9vQY87c1PPRDL9Qr5rcYcBwYwmndBYTNNueFJkoF3scpvC3JB9hRsTYbptFwGF4M7jS3PqaGxjiCdU1g893",
  "key21": "vPiaF8kKb4B7RUXBSarch1Lw9aHEzQnywzwcVddGYWMzyKE6ziEEo37iuGwtyP7zFJfZvW9CpzjMEeHRrr3yo6K",
  "key22": "4QHFgmeipTTfFbuRTuoooHiinLNFCHGWpMcaoXc4gfAK9cgFdjxzUbyoPJx6Dhda4tDLF2xCykZZH8RnrtrFSrwu",
  "key23": "4pJ29Yf4KNa4uiFCH6y6dgSFpWdDLK68jCo5Htc7kgmhgbZRKMxmTZbpdoMybEEkHE1HQvYvTnsVg7YhxCeVFgeR",
  "key24": "2j6NZLKo9chVgHJTvQFmxPW6rSjYCPP44aydSXwcyXmpVXBpiEM5zcq64QnPH7PG1Rd6qKBwLc2S3wNBie9KEU2L",
  "key25": "4B2x3Djztoq4EbUGPKvUk7jQABxnHMFkEjZ2CJXLi4TAqzCv9Q57eTDcuUnKCw17KmEot71zo3X4WLg8a4GsEXby",
  "key26": "64uBtBGc6pwAfqkUBLRARsMv9XsDB9npsrbeMdfWZz8Q6Evji9Nq4h6VtBtksZDdKMhiEDWSF7XZ3a6YxnnKnfRg",
  "key27": "a2eP1zQWa3LvgFY86V1BH5jjyf26FtgNaszakzVKXq91ih8LS7wEE8ShZXsYdMa9SLdmJqGsSdo2CGPviwEG7TR",
  "key28": "2eRPwN3Bu9oe4TiBTDgfmz3uw4gNA4qs317BNsj5a9gxwxkc13cWqbgo1LsWPFPKQVyqJqaSQ82h13cft2BR5Cc7"
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
