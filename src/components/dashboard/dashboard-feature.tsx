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
    "5ZRycpFS46xzejxe4B4iUh75egu2q5EmQCvCt5yXPoCR2VeY5GHyRSBkzhFuTh6bkszoRTH9LVewcs8wejMzqZae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31NMffKB2XWNNkvJS9v3UFq2tR53PRwvt3yjKqGgrN2TdAkdhwH99cxH6EQRZ6GeiefSkkXvvEuna181kQmhXX8y",
  "key1": "5Sgu2hupFvLnQwcenodCtCLpxCDwmHbkQ8zSX4RvC7iAfEWUCzRsNZzipGpgQhEcgKLqjNnJi3Lk6zqoyeheEcbN",
  "key2": "24atYjEna9B7pr7oAYV3wkHBhYVU5kMFnMpaTqXtfaGBVqFNiZSt6SivuRwiJSmVuZHC56r68Bjy4fnMWZT2RqZm",
  "key3": "4sNpD61pcuDrunJsKk3KkkKresRU5hX9GYqd91pGYKKmyN9qcVTsC7Vu2xi18kmdSiVD6XMse15h4dSxzjnxBjXm",
  "key4": "2BC1CkTQZVGKGVMZwQJEVDj6rdgGV2RWSFWFMF2GFuimeyWjLXUH4PwVjJT66i2forrBB7phMrcPhocmNYLn57BH",
  "key5": "3uxxFRF7Crz3vVT2ZvyHcuAGf8UoHdec4AGSHCWaUX2kefuaJvZySe4me7h35EyYd3fJHXCYM2w1Hs4VHMRMDPSj",
  "key6": "63K8Bh5x5oTA8YAL7U6SLs5DiJXKwQvK9SJqSUhQ9sxq9UdUuLBP4WdwxKYsETH1c1AfAeHCmq6QLD6So2o5zTaJ",
  "key7": "KxC8mQTT7bR77H9JuePTY7FY3uXGBNH1ku6yrMTgoJGhbie1WsWZt9veobE2tj4RzthNJoBwTZ72uBuPWn1f9As",
  "key8": "28WEgjt2XcS6cgb8RSDTe8fW1xibz4X7owEeVHix7ECTEztyvDiSf3RCMRGxtp5zp9zs9R55bYSPjAgvt3a1sH92",
  "key9": "4WetGQwnh22wxJapRancxgXfQV7Yd9LentojD8HhsuWGRPAZibNyuCwWESwGBEmQRNtkiQaEEoNYViVhenMHZFZb",
  "key10": "4XCVE5giaGJkRePjwVnLaZ8tnjzp9VnWu28637YEQd43FQhtpPFmcc19Wnk5Svt3TGzpvUdDAv2t1oTWBBZAUUeP",
  "key11": "56PKGkyLazXYkc6F43rWzxVMbwyXdog5mLZwwMth6v8Tpn9abuRfGto4THff9fYdNay7bp5pBK3MZbNkw6cGMxLQ",
  "key12": "3LKsr33dvhtZqeLr2ZKoNtv3PBPcS9ynrMAJV1ZEi1yyeasf8EG9cHFeb34XiDUVQ5AiLbjqh1nC7bP5WWwostJ6",
  "key13": "61s6k3tdVXJibuVyaBdohrZi3RvUo1HuwYjsTCr9vSxVpDNDPEZBX8XjnuUtcwxhQufo7d4C2wfVutotKZwFF1kQ",
  "key14": "3uhBLEXxCaCgWjh6R7SbwidJRdthAktrksCWyvWanZ9fWVPAyeA5YQrBd2yXyCz23SDdkDUB8dKKDTrWmsStWRgQ",
  "key15": "5M68XMuKyfpvRZhaLum655izHy9dehGMBuEnLaXprHfbyGmMi6SGJF8MkTpYhVWBn7QVeSCVXchgmD6HQ9SXgQT8",
  "key16": "3ya1RrvExRZdPoLwNXu83Kxk5Nm7by31KetDUX5wUvQrfdTQUiMNRL6Nxi2vqzGvwpC2xVy5SJxXeZjAKbJFuK5r",
  "key17": "4C8UUXM5SXEp5P4KZ5Rc5PiYNanrRhyBDZ5j2VZuN93LXATkQByrw2bZo7rdzQ27xW5PVHrB63RoPLJkfD1Yth6S",
  "key18": "pc4u3NATeGPwnGoLhu8ABZUEHopqxMPMj2D2NhR5C1dTLwix6dAMttuxiWWV9Kpx7onkFELZDcDRg4NAqjSxtGs",
  "key19": "Df32vAYx6m1GYMnfUkeBT889Jaj6QHToXNGCmCobK5mrdsaTGacUkUYdpFNCRjui8mdDbLUBkqhh5JhNxyiwgSu",
  "key20": "2d98Lpoc9vnD7ormNuS4ym5nftkoMeXjoz75xok8dx6PZopZSY1w2UBvM4rwABqF35vBTgv1Sw9VkAiB5uJJHpz1",
  "key21": "2jnT14UYnHtKdbuotwA4G5Cew5eEeiESDh9rbnbSGD2au75Sdem621Z1Sed7QHofCrc2o2Z3XUsrfooN64N4rnYd",
  "key22": "5LAd5EtNNqMrZEbsKFSwxFURuZnKB1eFPJfLFC2WLXusDZbEeTBZm6pxLUVbudso8f8whrC2dYv47RBwns9Buj26",
  "key23": "5p6RrhTUeSBqyWcLXbtHruJ8UhFTRGdhauKohNe9oRJeJRsLzf8pkksnFquFQqEhgoxVY6GhpZ39KbtsQKkgHdsa",
  "key24": "TepFjUcNax9r3NQRoeUQe4xAJ8mGDjHSvd17fs3BLzKWZ5LrCYqWMgnPn31jyYzhoMbpToRzcuP7KKx7kAB68nR",
  "key25": "21GvLv2q9zmmgQGhWtxtp6gjnHqEB6ZQ3PyqTEbvGCq9FyDYQ8PzyZwd9pqrkSxN9YAAF37NP6R3oWxZtzC29E9m",
  "key26": "hQ7Z5ueLUqdT8y8TQGhRu7ECMd3AmfhzpgWpjJpDkdwxozQqsbuTTcNsDEqvUVN1gB6ArqBaS1dAnbuAad9CTj3",
  "key27": "4ojUWCaAgeBBa7wuEtS3h6JtLS6toFFx6HzrD76L8PUWTRQxDb8t7WdF8m83Z6gyJLDyx1ybTrZ9Cvbywmc1VqMZ",
  "key28": "tsaqdnArVJqpWj9XrvokrgkH9Wj6qydex3NZ2AKD3VgGYNkz6f6fWBgEgU3pfNFTAoq1NE3wbJBdnEcTNiaD675",
  "key29": "oyGX48YxAysKyoMnvwjw1AsaURF57GoiDNsnhPcDYnZx6xJdhX3v5GfkrAiiAkPq23eJCHMvW1w6E6YwJxSW5sf"
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
