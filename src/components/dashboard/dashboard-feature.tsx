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
    "22mTskcyRewcLAFkjAcRkTK1r5BgkH98T5wPsxufdphYiNSYQaPqoRp3F7NAXFjmYaSShE5QP876WTMvQ9KVa8k9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jvFvndjiBBAehnfeY7vPgbu6NbPZ283w6hjqc8qkUhLgJcu9evoUfFirvfHTJHdtPjmikLjFC3a4TjLeTCd626r",
  "key1": "CzcRN9g68gc7LUUWmXQSxQxcZWcbqoxb9NYpRgZEzKscSnCK8z4HznTxaJX365BenAp1XZpEyDnhgExpiKK6mST",
  "key2": "2wK2mMHdHsfVRG2ghEWnP8yZPF4oyFqecgsFGUMpGpyyZ3VgB5YUXAF2YeF8pqXiE8ij7KtptawSVSGQoCH46hFs",
  "key3": "4Nhgwx3YHm2pKgTu7oYznRk57KVtAvAz8Sjj33EuVRVtfBJMZxxQeThssTAGtpCQzsh7xfQeYVHwJ9a1HKACsCwA",
  "key4": "48RCWzgxkdPhQqnRte86YgjEY32JWgJXh13RVAYMeFWnDha1foyfQmtqD2FXjKEG9F247jN1ATQ2vbNW3qo114uJ",
  "key5": "3ohapwaotSc4TL1ETvrwXoCdpn8dtv6Sv8VnDTJMskVCoWtVEGtnU2yRBKaYeEYcHii9xBRayHGA74e6npzit2Nw",
  "key6": "chtPZw7HPoYUgo35oWPbftVPvC2mZNM6dEVXvwYXMAq4dxXpDUBgGQcCdTGwTjKn1dweyDggipxkPTcAvYFpwjP",
  "key7": "2VYZHfc9vzpuUHoT7s29c3zHcbd1BpZBWU39at4xTs8mVYXXWqVn4RFuhRuCEbtSgxc9826EgwD2iJgcQQc2nreQ",
  "key8": "2Di2Ycf7c8jyKRQ7mRYJ6yxpSYoMBa4xD2oJ3pHxtU327ZLRYDEDJTo3ko8XqqL51rDNdQVzmCDgYesGykEmMJsW",
  "key9": "5AuWhEeTBceAY9epFJXNVRYabueDHDYwSNJbWytrshu5UGvfjVVKSw3vYMqeUXrxuXgDFs6g4cEUeNZky7CUGGgE",
  "key10": "ZrnUJhJFcT95QsSVYuG7LBfJunwQomrXjvzWqmcVHRhBma1GzM4Qr35CQ1YWg3UXuc8zpDmJ91bktksqmY24y6n",
  "key11": "2a8udoPKDNsrWktRAM8idW62yH6UquSJXiVGf2k6p3UtYnP6wPaimnsf6phzHXHoH9qkt7kYVUo6g7ZRa2RpP9Ru",
  "key12": "3yMWZwqY4rS9Q4bPhvY643hYuujZjCwQXcwFL1B8n2q2AdJ7zTPRFXUrptBXC89iwSL2KPoLJmUa3KHUh2Vm6L6v",
  "key13": "2G3mzRrfS7E1K9WmrTcGVd66JcNb6WCDZXAUqMiooGh4k1WG3CY6BSrcXbsPkNg6GkXVSFbtmHwrko4cu3mEedb3",
  "key14": "33qNnUtv2e1wE2AX2gqmjNxwk7QXKVxJgcHvcQmzZ7Y2dFpnPjk6yxTBLtdkXtR1JbRQBtWQnpsK76qc5535PQct",
  "key15": "3LxygM5vX4FfUZf9XZAq7k3b5ciHjorMVAehF7nUBrJZxatg3k8V38DnwGYSwW1DEME2nU7LXqCk97uPWa6NZ2D",
  "key16": "2Hpu2MsEu32r8o2dkNwVjtgizUbdG7aneZCW9eb5MQFkt1pqXhvFJnqgydkB9iHVdrWHVUf9WxEjVJqXU3z5gRqh",
  "key17": "5DqRC1Hm3ZVh2WwazvPCaie2GPj4t3trLdMVRWkeziW1Nd1xqSBxYo6ztAWziZV5QruZp9VxFHFy1Fac9KNCWyRW",
  "key18": "5Lc7wbWgsbor8x9eoLe6BG8e2mpcqu2BaU6aHvddAMVYNNxcRw6BBKFdmARm9LdHzWLmK3W8cY9oNhBw45uhuzmH",
  "key19": "5nXDDwjwXQ16pAQQnZkXchbqoXKH8B2gDvdH9rJmiYoYu4RTUtnzR18SjU1aiXUyd3fXnT33bQkqYSfWbQL2oeZa",
  "key20": "9fMDXG5wn9ig5AuiT981KQnhvzgpQ94DMrqoxhsTzvp1YamjesuQzj5DvxEMJFakW6Pn3QjmYaARRT8B4UPGU31",
  "key21": "3nMVWGdPH2o53ET5hXfTyXCtmB4X2PGDHGSAuCXPBcaXctDpHgYcRUNAWUPwMdaayc46kfGRSu3EX6siha4AMWZX",
  "key22": "gY8peScJ8V1YeY3Jf56gTTmaw91fkx7bXSTg4zvHrgCBRDtuf9YFYYn3q7BY7SSQKMNaTEugKZvJmVv7DhqAYiy",
  "key23": "5YpsFLg7zytSnGj2KZTnd531QPu85ofgTA4Z14XTnjS6pXKizKiGdmQTgg9sVeYjyGWegqmBf9jZ8HiSEC69ZHYc",
  "key24": "4ekRmPGCkjebCZC8LWmyLhC7k5N23vkmQ2BGhJKP1hApjaFfiGEvWBV9wz86dt6Lv4Fgh5w8HzRgKK3vzWdePgKB",
  "key25": "2shJP8ELiU1bNFEDkay76SVjozTZwgszsv91bWpNgr1siLeCEWnMaRNXbdvJG7nsrxMhR2kp95NTgGQ37dRWKb2J",
  "key26": "4dJ8Xxy9HGs5hBdfJwx6jYkAZnvDMMEsgYSngGiYYkQofvd4PrxSEyj9vsK1yMapJnMrEMCnWhmRaUGy4F92LpTF",
  "key27": "2r9WHH3WL1npWoUj3AwyYtUapTayya5SAL9QgBW8zRuNDncJzJPcxkJD2p8emhSkqfBrd14BvA5nSkYmus4T4sbA",
  "key28": "4qoavrvV5onwoSrgwri7XgCMLdWqjAuw8bZZnAYzK8Sxxjvu22cpGLDNMjtnEaFjtcpT5kHW55rm78evhWvL3dBQ",
  "key29": "3VMsHbQayUEeS3cQk4L5wkNE3edCqEtYKNhk3JRkV8BsBpXUxwT3cuXJzHzQX4jbp9obVs79PWBfLXEDUv4L7MSh",
  "key30": "2b4rqWeFP3nrLPNvM2CCtKxZC8E2AEEotDsDTe2JTcipJSogiu6St1jGyFLup8gy2xcb6qXSPPW7VEPiyijpmSXd",
  "key31": "5JrPM4Sn5d65wPHp6r3nvjFVndp4Z6ydaqVxumACKoihTKQuf3tDZaPqNX47c6gvWikhkmQKhVkeNdrYb9oypFWv",
  "key32": "5mA6Mrxxn3HH3jPMLkCrPTXrzKtYovcbEYEdLwzwPiuv8FbCdpgXmGeWeAR8MuvXAJvjUj4nBr7zeAwt5j3QiSir",
  "key33": "5FnaeKfttfuNX7wb9uNQCAQgKoqNGNmGXCkpYPsgPkzNntoUEpjPnqQEseZGipiGw2vMpezkGmRwuucXrCbyQqM1",
  "key34": "cuATbjdEbUi78iwc8Ra2T3pVrGreZFEECEmVXEEek3se41ogvcU5s4mgf5YBXqyfmfn38fetCpzN5sFPLbCTMQV",
  "key35": "Fy9uQ6AFKc9LjJDgyLEtGn8xf5dpX6hxbm2dU1Rnt55sBdKHerBXyuyNAPdgM3W4j5LVHHfTaicQvhi49kcL6it",
  "key36": "5nH6x9Q4TW1YC9TvTJc83LHZjFAiDUsobe7CgDKyJd7GSR3QQwZD5kFV6pmgEgWmdGB18B8XkU5KXaeCbwtULM8c"
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
