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
    "5GkEjFCB75RFbJqkbSXMT1Ce9dCKEE5WbBjUwQqpYQm3DRQEMKnWNNFz1XjzDMhBB4fTSJnewr1PY4evE776qrQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pdVqjrrRmok5dUgd3jLAGL98csbx89EhVHh4oBAqc7ebwpNEwMRTX5DTmXsCY7zkgdRWmQpEbca4QyAvgjSNA8S",
  "key1": "5JpuXziHMCPYvfHhyYrg1snTLV33PPVVYZzPeMYDb5Q5PtV5RVMGwY6enj2WCMrjsfkhKWMhQpCbkyfmirxWciS2",
  "key2": "2Y3j985LZMoQYofrRqEmDEjaJakTdsZkMmBvYNpVB7RZL9YH6Kpqk9sARXeVsfJxGZLkJqsGKBcDD2GnAwfCAF6s",
  "key3": "5exxETEVRwBhLKXo8EkTXRAcJoSTjNoivdWhKtEeLKi9iXyMekj6bdaWE7RjKi6PEwynohnDDND6S8i6wLRqWHtD",
  "key4": "4qMBq8MQGzAXcH1GtJCe4MSTP9tumWwRWU6jxbBYV3r4S4RhTGirNqWsRbA9i4wSNfNxDsM9pFhjYJPy5ZNNMfn8",
  "key5": "2E8dkWpJYG4GuNj7rJWzUmsuwR6Pk5PomZRC8W3ofeQfC2sdufhLEjsNY6G9p7bFMSf8pG8FxV4SVqv7cNvjbY6U",
  "key6": "39Njb1KwT1gt29yhzsLsRWoumjMYZCujx7h3rR8hvEyWwTE84ZuvJ5gRoDFHEJWR2MWik45WM9hVLAo64YJWD565",
  "key7": "5fwqadienc2wMJqRtdZBCn9FViToWmWmYWyiBeTgsrJe9tRVC1oRJpUjnRmbWTT4QRwTVUW81maoM59kBaqATzpG",
  "key8": "2vadYm5iLHtX6QCtmNwF2EossRjXtH5Yzktq4Ki1WwQZMK2VbWfNzQ8JzQQfycavvwfEZdwbZ9ETSVG7m3SbrspL",
  "key9": "HeRs7rrPu1HK21mTtHuAgAGa5F1gSWejfHVDRtTF4QccHipECcL4HDpBxhab8EB2tLjLEpReP2Za2gABy23qEPD",
  "key10": "4nNjAWUScAZK7FuvNXytVvNaUJ9LvAKC1gBsWgdCmEHerDzQaNSZX8C6kAw7vxSTszYLwFSnNZHT4WnXGxaodxcu",
  "key11": "WE9FRoX2anj6zqYCHoXJstSeRup7fmGQXRK5PpHA8Z4mgQpo6T64kE2cpWg2aWn7UJbSYmKu86TPKqyyuuxjPPj",
  "key12": "44tC6mWQFPn3zVm9xETotk6vyUxnJsJfdBgRdoSdtafcuREbSzm8eTZDPCJNanjW3QtWVcKWzTWroCEPcfPVntP2",
  "key13": "4CsDCtso3xsUSVr7vrHJtJRaFf51rskAghMyLNp7NekCVHEvGA3ZqqH1rRLJsVxVFhR83FqPdMyWg13bJxNbR3oA",
  "key14": "2bq6kq5G5U4JBrTkfv2mZfhjjje72LtVitybnnFfvS91NssgBZvff8mH37dBQ1AGMwYZTiDQecDMRyfqyWBdaFQw",
  "key15": "43G3LPx9ZyhbNmbPSmWwCjzHkanA5EbSS7G3tGNYj9kFrSGeeHNAwBQZkaHMdGZa6GMAY9Cr3CySpZB5YLgwQuJt",
  "key16": "5TyaPWRQkMaXou1F9wtHGEtyYj8WL8GocboF2p1JvVv6Fvat5ys4o9BGXJMQwsor2vuyV68gnKu3DZSenmuWYKud",
  "key17": "4hWe2MwRNHwMyYsEBYKSDXedVnXm9Mk38PxfjnMB4YYHMJitpnvUXaTNB4PuuE7fNdXwGQNtTQRebxKP89phQM1K",
  "key18": "4k1a5NWLR7Mrd5H7EFwbLEbNrJe5s5s1K4Pa2kh8XCtuM7SDD8i8VNnd6UNEYdPkHP1WF44RJwPAvgknNHVQsCUq",
  "key19": "4jLkABgaiuppCo3pf2DXUtGGAhYNbMxSQHj4Gx7n1WxA3rQeaopcHgrytuVC41KG9Q4e6MaDhm94mXjfkxYtc4t",
  "key20": "2KZxTpuvQ5Qq8BbR47UV1NLeHASkfnRtTwJ92G74LHeY9DLemREJyD5Gps1QHc7f3eUUQmLzYAVp5xDAUeuAjK35",
  "key21": "4ip9D5Cfe3yNCQqoi9fVmyhnpL2bmdy2cE6XFWoezn16EGpan9SW2LoEKTGnxVrHtD6o5FZXs3nqCsAto1tgcQkh",
  "key22": "2kAN22xDPHcr4EgxZStMWynLjTcxTwJARgrGUhQa5ffM8PhKPpAfacjJeVXnsbZo61yP3j6LwXtcP4gJsS13hpG6",
  "key23": "5tL9ukC5VMpgVw3311Zbqn7S9TLDMymFvn2xozaEuUx5aLsmq7gy5SDircBJ3rgrCdHeq4FZeLngDutnbQe4uKgn",
  "key24": "WdFF2z47bNqd72AX56B8cHeC2xX3QHDTpis7KJsBg3L3srfBYb5iypbA8jEN7YpnXq7ZVubeWHf9yyMZR3Mts4G",
  "key25": "4r7XEU5cEHYaTGjE5z8ZNsq8meDzcMwhLUC3ZTeNagjUntFbBY7gADMXzbAMGrHVLNREb2AqgWU19ePL8L2sTSqa"
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
