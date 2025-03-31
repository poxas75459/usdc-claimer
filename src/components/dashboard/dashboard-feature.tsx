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
    "2UpPqJ1fBmg5V1Ev2HihbBxYpuJ22xuZvYqtV9Av25LSURSHaHMBrRd1Wy6mnmSiw6BbvEHxixRbfT5f9i1rGCS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kDgFMUTy6XmNNRUo6deKkoUAS3m6wn2PxPjj8Z3irNLrMBoMSRDdAGEa81eRP7UkJHfmUp7uMrtkCWLX2Ax2zVW",
  "key1": "5FCArFc6H2jTQJq5Tz13GUgcLbv2zuVt3b2UxNWTVqYNuweGeM9GWaqK3xMWdfVnWwemR7w5J6ne6Hw7FPHMCzWZ",
  "key2": "64AEBqMq6UHZW83sBiCoQSBmBk4GMwABysLqQbQSp2yfaZPaBtnTa423zGrRvV7MH6kcNgV12TiRnLRFi45xzDdx",
  "key3": "3pikYyCEwippmdgtn5PZDmFAnDP6KEpxdzV3RW6KUq3LnFb3x26c75oPAtLKZccJhAGH7vbFyfhs7MQ3yUCnqYCw",
  "key4": "i7HMTmD6TV5CejRqhQD2MReE6fLKUx6WT7BsdfLx7UHoWhSi3dFyG4JMvtJjL8bRVekA7Betkpmxp8gXH3PxuuF",
  "key5": "3j5uR3WVXaTzuxvo26ZKHeGShi5k1oMhi7eL2pRtgdEVW9mDc2kHrYuZGhX1kL8fzNfFRAXvibAJ8gNJ3QpZJYV1",
  "key6": "2JWQn1g1t3AL4tkRHPsKu3KE8EXiJuz2zaticEKfhDxdrsTrMuKdUnbWZJFnq47CyCko4WY8DSac6uGhswbtZhTc",
  "key7": "5FGJfKoNYPJLQebjdMWXAXcd8RZXvETVhDcxtJF541BGZYneDL6AuGHvqSSUUC8B2QjRyMLu4UmKz7ZKwybmsNqi",
  "key8": "53Z9cmji3tJGaoauQ1Pu5ftWkEWjfAgd3ndVfEHdwGWwQWkQ8ccwzptWsJpx3GsazMWnX7ziqcBVMjiqvvqF83tV",
  "key9": "ptJRqusBypy5ncN2TARm9DaThbpvSNhKRNvdihJ15hJwhBUjRHviciF47jJ2xor48uEBZ1q4FHpE9gzrWK2EwdL",
  "key10": "3B1d7FG2ciNv2sZjR1pz9U1nsqp9qECsTFZxVonkxYRLYbfeL663FqS82SX39RX4fEeFn1G1tsCdvYUQSy15WtfD",
  "key11": "5Z5aw7RqZV9Npsp1oARuuadKQDBiLeKc16LqCwqz7DMSiksRFVMepfYuSKxnDjphVnkapMLT9Swm7pMMJVV8XFKq",
  "key12": "5kFQ98tUeqQbnEYX9Rijup1B2RkL5KCg8kKAZQJhfeiTqYnBjtcCfuyJmrFVofbyJodUakMHVmtv9kjiJ4fKxYMw",
  "key13": "tcQcpQvdGsC2kZCp3Na7cn4gHmPf9paaS3ZxWB7zRWeEjzjKGD5EQu39PsPZbwXAinY2PcPnxLCr72QtSctF7Nu",
  "key14": "5aMXUGwqw3dDyZVtG3BoTRhq3Krz7g2ZSKkK7RWBENbLQ1Hd6jpW47yjCKiwn1hzoJMdQjWBpYZJy1rFUYgvRJSw",
  "key15": "5MqbS8vzp5bhdmvpLhWrAnh5XAiNRssVvttYTHh36VZ4ux6ufJsypbPQucar4G6Mr5xtAigMCxqy3hEMd3YWwMSJ",
  "key16": "4zVht5KPQVG3wfhTTYnUC2fQjZjyDSbWwXJqM4UJinvBgG4Uzn1BPBWKEST8cBuBeFydXQCYTUnH9NH2oNHRdn7G",
  "key17": "4B2M4SbDJZmw3C9ey3zaTnAeWKpdhDUd3sjWaTma1is9nGSQ5VCHzYNc6nnPoWCpgnPmD5syR1w4YoPQ9CbFep5o",
  "key18": "4M7SPaQmqMZAWKPMe4fE5iS9qs7WoyytW8H9qFkeGEk1jfzfmYGsfsKwqzS3B5t2bDsUsB2CsoFS45eKP6NcKMmb",
  "key19": "2PL8AtotsgBkw61xBrshQRywuVgEjuvvnyM9KiWfz7nBua3gkdk9oCNbXxpi4NM855jC5K7sbA1VLxphMbu98j71",
  "key20": "2KcFJq4ohgno6SEsnFcYifnca56iPmEbFzhv9g3j7ZxyhZVhuLEmTrqsbQUiL1n5ZCUcwAEDcN1A3BUQ6PwW1gwZ",
  "key21": "3x3EUMJLkpRwMs4s36sTBVrCNjN5NtHsSX6VRPLBaY8YKr3oeQxzucsejCuHqtQSPo5vLQDyN9VSzVvqMgqKt21V",
  "key22": "63tp1nf7nBbJeHwpXd9rVxi2AZzxXwrwJaTnqucZTtvSUheuGScLVVwHKqRNavHiBoZBDfccx2WBF6Kv8PokgX5N",
  "key23": "5DxrKDz5Axyj7yk27bEXh3W1N3ZpExThxcXinmAoXFa6Vk9bPoxATmtmtVjhXqFd4s1voaMvgSAz3RW3ofS5nMqv",
  "key24": "3tG91wPmNiTniL2UCNQ17hXLdX48qTiU71V4PXTvngSDpaw6qWpVUEGq68tmevkJbBHfA2wkzrgfmkHN6hgZLiD8",
  "key25": "3nmsdU4qxyzQX9io695cpGbc9hykDWzMJy5rjeYBYGo5qAXDbgTVZXuKjR8oG41wa7Cf4CZzxKzPcztF5HWtEcLL",
  "key26": "3gTB18J2QhJR1pcz2RS7PAEozZw9q44KULfiA4DSrzLbJmPNyzdKt1AXZiXTx2Z8nPmrfmwZd3Uidqpkr8GzpMXM",
  "key27": "Nx1zqx5NPTKGzHUqy2671ri55U8fHqd3FiHtWj6XKhzzgg1BwqdgnUken5JFQn4jqx4T6vGWPzwDd1SdyZ4dv6m",
  "key28": "fqCBGZs6FeFynt9PSRNGbTGy7ee9DHcSPHKCBmRR42yJNYaMTdoWcD8tvaQbmgyu9hQriWz2QokAUn5kEzgtxnP",
  "key29": "5PfGQLB224WFrAFPqzGbZW4SM7UfYMZg5FZ5pPwAztoe2ZF7R8sZ1jnPrMrEYnkdhc2BNSSWw6A9H4YVx4XTHxUS",
  "key30": "5XEHqKKqty8rRCHdYA7X34sHVFT8dRs3fUBkNzUQ28XtFoQMicbAL1GqqQp3RtCTWbfmBjHvV8vUKQ7BoWrk9RDa",
  "key31": "5oQU7brNYzbmifz9MZvefC4mNQzmhEwpk4m3beiMA6GRJtsMsCovQwRBkSUmQ6spi5Ek3qttSoHRuzW2dSUgKpax",
  "key32": "5rvTWWKr9oWtKYRPEGWqxM7yW4eJxwE2wsc9FDQA8Z21rLP1h41vE1Hhkqy4LLNhc2gTZuXefmwio7AGGL9V7Ato",
  "key33": "62NPKxMCm718U2fWJYiQ7QkV8eopH8ASUtee4tWs3gPLNUhVqKMcv5ueUpuWvcvR8Rt44ZNeTAWeEHhVbsnfNvkS",
  "key34": "3GKJgENgHos7AjbMVdkVemGygmsAprfsJqMXwXw365mVVgkcycK7AMkde6vyVjGSvhjJoBdKqrkrf7JgNzcrpxZ2",
  "key35": "62Y7LB4Ra2tdeD3cSZKhTHhTVCULnr6zx8KaZ1yXUedhkmrZmEX1EtKZREeH8hj29a94zngKv7uYbqndW3LhM2EN",
  "key36": "5wAkmscJ8JoSgkEZ1TXnj1XcDzd7ZD8p8JV2j5LspXTu5fXWXDYjLA94mKr2nmxAVYzLNcLWYeiJV4AtWxbRyWjt"
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
