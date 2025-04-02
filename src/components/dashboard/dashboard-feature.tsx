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
    "2ZVcW7u4DY2jS95rUX1zob9gNKgwDJ7WEcT2sMnjrJDCFZ1AEqFFtoucnDNdRTitRTYeMDAMTPfgRQhqRcjGKdCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54AtdhqTRK6UKp4NKufRN4zLixDponX67uYWUtDkLMpRkGWudbC44VzZmXfwdaN2ffoucPoCJASE2XYJj6s8BPSw",
  "key1": "Hj6taPdemxRs38BSk9k9DQqoUwoZXXZbgCJv5QHfTrGoQZyMMSrd4PCBNm3YcxZTiF44MqaWNe4VjshRuVGMJ7Z",
  "key2": "4J6ioPNUN3ywv79Ehosbihq4wwtLSs7i2DX7qP4bn5PuJvQv6b7beeM2bpeZMryenppK7Kx5HHm4UX4J9VRECj2Q",
  "key3": "39dZNhqhm2DJ3mW5BrbwHCPvrStoSmiXeUQ5vxRFYWcpQ4UxUzEyVcShztA6JTb82uBDKVWELapn8MjRYCxEQKQc",
  "key4": "4MDMMsX17tJ35raqrKtJimbnrSbLQFrTseerW5KfLGbwTW7RZ66EuYVF4NJnh4dRDRfKwJZNpuiwkW9a2RatsMq1",
  "key5": "4x6w4Sz1wNYGEJt6wHXju5w7xGGMHpSx5vk2nSKcVVksHVhm5kJUxnkjvasYxrXLThnpwB66FhJywDRoav9qfiY7",
  "key6": "4WiMqj8C7iR7U8gng4gkk536nLeCuP72mYM9wf4ErhUVciSD7dzVcfD2K4qhxBywBE2GgoSCZs9f9EcUbEzkSkwq",
  "key7": "4rL6j9MEQaxTkuhyjWMp88Aoh4xasmi1p5N7D8TL21AEkFgjW58MkoVfx6gk5QC9i7ihFL4H3huepkFTDwQs2ZUq",
  "key8": "4fVrQUc3oHKTtNbHUuzKMqYL4A91T6gT9LwMV478yThy1pBA5ULZGtqo3zTy1mFijzKBoaahUAdSe4JSRJTP4a4K",
  "key9": "3CNmU32kkcJtVskTrW6QDM1X9BB4YEfa6TDeoPUzhZbXVRAbyMYKrMxL1zHN7BcnpghSsXEP6MzTwPkS8F1RbRST",
  "key10": "5KtvRzEgp5xA31EzLxaCTuSbXjuShWBrUhhVMLpke4TBWvVcQeYpa3b5Z4S1JFdF2RHES5yYYTKeczF8p4G5aSXb",
  "key11": "4tTJmowRqtgz6zbBDA5mYXD9gsLq2D87WaR9s7uZyyLh8eenRbi5b1i8MsQp931L7suH2LMqx47y7DDTn9ABCWpy",
  "key12": "pxXDX9K7BBcUyKGV4pkv5aKMDSo4xHkYQoYytTcqaJ82sL4WCsYiwfRfYgpbmZSxKjVLy7Xqq3xgMQ4ySsoUYnH",
  "key13": "71UXNRVRJZomF2UKDBjNTwFGsrLMUPqBri7XmRoMLaSSKDkS8LqwqyVYGdF6up9JFREU8tAy9KzHU3dh2MA68vu",
  "key14": "cxoxq2nMq7nqxHpED4CQ1Egymn5b4m5DhWzGzgGoftC6tGskJn8Goa34QnWuZoFmTsKz2z7ZA5QC8wAtS74pYLf",
  "key15": "EGPiPLTKdmdZN2tFNrULvi5BrjKivCWsjgxsfBXUB7SKHUWq3t7mfgZgp1Ne1aZouTFdq37Ybn19426aFKMdJuk",
  "key16": "59c8sy3kxS9JPGMemvpoYkRdMHYuAXWhnM22LB76Q7UrLDgckXEX8EZERq2H6LdokEdw8Ydo6JynVotRUQ1E34y6",
  "key17": "3Y2pPHsdVCrfbUkNuRVw5MD6FqRRK94w76Ab78HrHdMuxo9bkRz95hzoFD6ExKo29x46iewwuxxYBi81FYYo43zt",
  "key18": "4DfauUKRjDkoyFvDZxsFZd5s5LnAX9Bn2pXu8Rxen3C33kiU3ZgHdNeRY3SPYL4LXTvr3h5XdJ6YN8N2yo6xv6Vw",
  "key19": "3KhR1tn3GV866oJi5VRZLFDwzwPb232KdX4k2MuANbaxxCLP6n5yDNozcuqC4oAJmbguQ1oiv8HuaJhGjpehZzJo",
  "key20": "5y9HnKH2hWtufYa134srBzBbCA6ptp6hXAAqe7xJyXFQHRmJkVG7tDgnrj7QgaTPLfchtfsVdvPCxUKb14Gp4Po4",
  "key21": "5ZLLuKvX3y8nbwMB7hfkGZfVcHzzNJMiV5FQcMCQxGvmYcBJfzkS8igBoZe4NkGzTcfsbRPqp5saELLxwWzcXFuW",
  "key22": "dosXhbk1HCPqFyMWmajyheN4zyPtSmDrf6ghy9r4ahrUrtivDMmZkJRZQ5gZ6c7xbYzNv5WMezzMHbuYXN4FS1C",
  "key23": "2HGXuoEgZKoR8sTfTU2ErSccqr4Tc2aXpxmDoreSqisGGpSdRnvp7LfhGa7Xa99HshZwiwVKxEQEfrqirQc6dzTj",
  "key24": "dWAB8vCpb3gAxN39bv1ZhjApqKBimPMmQcoeyouGiGXs411PkCGRvDjp29b9aQbxnEYLbL9ryJseSb1qm5Qhhot",
  "key25": "4S7AaYr8jXPtXjJ9f1KDpRAPd7PzPTSMq17TYJcJ8RmPWUQq3yPNEzdDkVoEXgg7afVC3ScC6SE8NiqPbtq7xM7K",
  "key26": "3U2HyFnZrdQ1zca76vXH91eHPkFTTUotJViBrZuXvPLtyon5UnjGjrRxZV7GoQ14GeZtQLZuqrf2dMmjYBVYtXRA",
  "key27": "4MfvzgKU42svyDoLcuGzFWtNX6wY5fkxCQbPEJKo51RDw9zsA6ek9GQ5hPKBEXG5Qz5uNvV3bwcxyvK8vbDQnxNd",
  "key28": "5deDcNN3FLVbmu1b2ZBATJpapjjoFWPUSaM785To3VEqQ4gLacMyaVGEDt6WmouvnczMQQoBYFMws5yNHtREuQH9",
  "key29": "4L87igoiWfjequDHRAHKypi1BNSYp6umcLX3R57s8g2L2Btr9Qjr3c2AcYefM5EKx7dS4hj5PWpiWuw1GbSZUgNL",
  "key30": "5xDAhThEPzpgk6baL5juZufkdR24fqBHKdEGDDFJKFjG749k281REe9vfzXfmkfTCymTbfmPXXd63Cc5rxWn27Jr",
  "key31": "5vY8FKtS4zspkrsiE5iKo8w2CoKxNwFXBqLPdPF9tZju7si6Q8rty4Y1MquA6x1XSGByM4fZBqqp3rDraiQcPrVQ",
  "key32": "5JMkppWiNMeCq16nMbEzWXadmAWG95mSTAPBp4k1we4rD11dVpy2EZw3osh5HRqSeLWm8Yp2LsvSqgYWzzE5F6tQ",
  "key33": "3ySGY1n1AB5QcdXerr8iGxKREEgYVaLhmJZXL9GP7J2qtWDNMQQEKVJejAPn6y8gQq46fKXuNUCMGN1GB61MKcEp",
  "key34": "5cMMupkVUNwur4whb4WSCcG2f3UabMJJcx6er7MQgHjDLYLhAaQmVPiRjnEVv8HkxEEV3y1ApC7dTGWeMn4qSs6C",
  "key35": "4iCadnwwxQFZ8ZBP4NU2JfenkDmMZnewXiyye8rU4jePK4qkQtaeoPtpoWt51zEXH1fVvXTDFdGaPcbbU9Fht7YT",
  "key36": "4bKKjimno9G4RfwCG3ERtMA2LV2CvWZHMoB8y9vjRoXGe3JD7xhzVXW1odoiE2NcvMs6VLtxiGL6eUbvH27Sdz7T",
  "key37": "4d9iSdVASkF4ujKTaQ3vpHWcujPQVGSkU5maBVBCzdiM6NNvP6d9HPjE2VcbzLDZKWEqsEge4QzHnMhs2U2qaYnz",
  "key38": "2o4jNE3n6VwFUwy1ToF8p72ioHR8Cu5W1VFgMiCNVmQi3fK1gT2FPMcs8WdPxMxUWzsAptrcazfLcEv6WWF3Zva1",
  "key39": "452PvmBxvSWyD8oypGfAMNvNdvATTpKjxYX6b91Yf17ZEyfWCn2uAYf7ww4aYkMjPRAnxaTAdaCTrFpMtuT7eVCC",
  "key40": "4hJkZpxuA9bTuccmghNW1tS99Z3sJJbk4MDysGJExrbeuGWd7p6Zsv2VaaRYpLREFUUSFJimm1Vd6AJWWzAMPS55",
  "key41": "1aNqW4izJo2Hky9wEijWK8ikLuLgBS7sKdspuyGY1PMveWpkT1XmoaXM8xCfjsNBhUW5FtLPTUCBH7GnCbj7ptA",
  "key42": "2JJ8PHNezWZpxPSLtLgjvHfjR3YprwU82oC9dGzDqxybF5WdFxR3MpTDKT5zvA4jPnw6FQUaARyEzU8Z52DFxf7s",
  "key43": "28y9RsNaCqdpvFXzNymJ2CD7LKnxmo9k9Jv6zz6vFiKUu9id9xztZf5sUKnzBz2Gw6aW4giQSsYJF5KDEBvjiuh5",
  "key44": "4szurcSmi1FCZYWpgv4YJ4yBKGXw2nGFUXB2HuTQPjKrhCQRzkNgvKgNfCfY1W6zXzV9JiRqjse4pfw5ETpKSEQd",
  "key45": "4kk28P5zihvzfKfKDtxN4ZGB5Emidct77BnnjLZFGssHJCc9f5fEr7tw3fbZ9aa38YJsuUvKzHKLr4QrnmX1YAAb",
  "key46": "4uyQ2tiFuXRGrBixHjF9BpjUF8RLHQ3nTpetAkkyuJy5GY3iubF5rjhUxwmM6gT25Cnriw2dXfdHo5bwRcJLJwqH",
  "key47": "2YaoP2BbfbcAFg26tSXs3m72s6nvPkFoLW2kqrzsFdLnys1ARQQV7jjp2n73ywy33DAkrYqaaCsc9FRxsGPGiRei",
  "key48": "4g6xrp3WguHarqVLXKvDisiLuRT7PRL1k45SYjCHzVQSGGbRkUgoc3PhGD26T4eSfBmzDLWp1Xam3csV5b7WrpdF"
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
