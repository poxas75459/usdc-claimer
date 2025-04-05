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
    "23SJpFGubrFyKWkzBtbAm9oCRSTPkL9iwVXoCGu4NRAZsk1oQ5L2v7uMzu2XWBBqdwzdaAi2i9A72z7C1Zc8Xp4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mKVM3PP8YnN8RShv5zPxFH68KbQZWy9HjmGe1n99V5n45CqW8cC7cbJSZvQgirmLrSJJYjhHfSrCpjz36ZPRBeo",
  "key1": "3WwWT4Cd9FpaxPEg2hYZQyqwRGBZnov637msBE9vApsAusHHsQcDHQ7gBu9w8PXffMWc7zic41uneAJmVx2ZHNvH",
  "key2": "BfhEJaBjLaaLNmrdoiscJ1UZd3wBHg8ifqkFPhzGh1qzJeUU8t1NVdofvSXq338ucEhb2WRynUDA4xJNG53jnuf",
  "key3": "5ZJuLzzseiBbZi93YwZvPPyXiw8CUCv2cVatQezGnpVADyU6j8P7SxMbFbn6gQqhCDi7fsgcmbM6xoNfYdNus7Dk",
  "key4": "3Cfp4eX4ux4HERHz3RFd7KHyddHJhtPbn7TCvAKTmLMs6u5dsHuRUn4hn9z7AF5Wg47GdnQBRgVJEfHiQKkt6LTp",
  "key5": "4pzBquXDoQDfaiCW8CjZyRu2GUfxHEbmfPpEAReaB4BfiGMopAD9saRMfR7FAuU9xLBvq2iSeLRnbVqejzjCztfH",
  "key6": "2yTrpKzQp2ZNMJkLdwB5rhwRUXLW8iZMpZwgMGMCRnzAgQNboWf2m9phUya8RyKbrwQsFiFU85BuaXHtGJo6ZCJe",
  "key7": "4A97MXnXJtBXYGhuzaBizX9c6SCDuxi8GPj4nZJCT6drr8s8x2dGbtckY8HhWr5edn1tkbYNMqtFJu19EQN2HGDN",
  "key8": "5sMJvPAACagZrkh47SHJf4jS6J8J5RNDLfoK7ydtYsRTXv9fXMXGq8R7vDcVopKNCK2eW5GDcp5ANDDgLMnRTspb",
  "key9": "24ybDRhwArxkzyV6jTt1wXGCGucd99MAmNjMY6TXMdY7TAra6xh3FqExHXJJGF5dLX7R6A3NQkRVArmgMLUKt8MP",
  "key10": "xVGyr7mCEnAcNot6xi93j1LKXMLsYyrmDjSFqbz9WKkip53r7iHxGFGrBVwELrFCbhM3ADTUjjxtLwZfiCvnNd6",
  "key11": "pVk2HRBahxS1xRRdcSmY6VvzSpyvqS8sVyH2X2tBtWgVZLM53herkMrGPe1EvX99SEUszMmp4xVZRyHqoewy6xk",
  "key12": "3sKsp2jGcx9875kTdf88A13tePcozPWCqQLxWcCm4kTv4WrxmZvHMa9BzGx2AJon9S37XxB5GooBSBRFpH9w6CGq",
  "key13": "5QWa6zxhu9s6SdnHcX3zrqQk8mDGjRFyDxi5qm4CWHuHcQDVgw8mriGyqJba8wfZhMoxAYx84SzJc4FjXagS58mT",
  "key14": "4KjeuQQDPXUc77PmRn1Nd5jZx65PHafTpZsvHpXdsfmWLW1ytnDRgxwGYyeTr5Y1mBESS6oRoBET6kzH7Sg2jhLE",
  "key15": "39XizMG1ehwExhhp1j1ePibW9W7GkTgfgnUt54mC379g33NAS9aoGoMXPmkjL2m6gYkmVnyr9zYUEqGChjWB3jFF",
  "key16": "384XgEzxAkTLubry95b2j8JyUY55u8qqvnByXVPUcwVWQZvEAnCFNi9pgnzKJL9dNZrpTaJwkV4MRx1kB7NmndPD",
  "key17": "55ZaWgyR7n3o34RYmb4jh4tX3dUCeU4CuUCfkkL4oHipwLCpJTPf378nwNXrY5PqTowxLxZDjbXgQPLB6reGmS4p",
  "key18": "5qeW7EZiMhycG2Xm1PLxismJ9ZNpPHBNaDxFgPDtA1gaUyjetLtnsC8xuM7SHu7mGTTT7cJpbxtegeE2BT35akFR",
  "key19": "2NzXHPXTMsMYwrqd6mujHk7bHeVo2ijUxm8gnga1k9rJNwpUavH537HLYGqzxeXCjaajCdKPqYsxW6pgXdMvM3S8",
  "key20": "2TbUuXde3ZKFioLmjay4DEtVj9kUjWBQ9JDR9u1RnTQhDrjBkwKvfMoTTXLuQQPiVryF73ezvx95k5VwBmBRex8m",
  "key21": "5Riq6jG7HZ5wt7fZBk8bJ6LWfGxHPNL7bMVfpphdH77LhBiMsAzW2AN5FCNkjAZkrRDAMGHmWv6Nd7JrqqpMkULD",
  "key22": "5EKkBJ1Cc1VYPEdTjGvFt4xgGLEjpM5pRSTSeHoFZVpSDvAoAKpCWgRfdVbyZ2aEAjPDdASEia6n83Gm3Nfs4Q83",
  "key23": "2fbUuu5UxELBzyoE83tHuDsqcLjbvx6V31F7Nrf8k7ubjnrxSUQuR4Bf4nRTZ6jTmmqJaGJhS6wiNq5MJwarXCek",
  "key24": "2qDf5N3tg94GhxoDiorAFJZbBiGbgLJR8uVVL1vo8uf552sVCxX5o7xeXWtkmJ4swEec9ZDm4tBzDvSp9qy3A1xs",
  "key25": "2ARJnL2kLZ1eDPYuVxDDexY2o3GtHZL1v25TXE2Tqd4FeKN9K36jvDVws3pgQ9EYWK1bER59heswnTXVNe45Lbsv",
  "key26": "bYFfNHFGCivZcZRmZo3Q4wPyv3zxUjWRYScSY1qnAgVdnEmdfDsK84vXtERSsAEgGaYEww938RZaMJFypxrXPi4",
  "key27": "5gc6a8nif3JEgzAEnptvSbrDANE5xyz4mZK9DuV2R1HTGcaY3q2A8VCWuWLKDeiXBe86u6X5bFBVF7TxBJBiUnd2",
  "key28": "5HPoWdtge4NnvTNhRxMTyFh2RfFefwUaRtMTdPY3Lmcz1nEtR6XQdB6ix3xarxa9hSfhCBiL7CbwNUjckg6mShWw",
  "key29": "5Uu59WtRdkosc2whMZmfQkua7aydvyk1CvNqZzdXq67W9zAdG9kNGTizEFepU46NNoeiga8XXu8f5khfX8AmJDBG",
  "key30": "4gEa1FtxhGZdp1BkHU2QWqb8z1n7j7mQ3GgNYsQWWbDSxXDjF7o2NYSvHtJ56gGZSgWBY5RDMto6LmExmfXjUYvS",
  "key31": "52uYmGYfFMxXWrMxJ388a57NSprDfavoE3SvDyyivt9ycV2dJqHmadEYuT3TgfLyA8TP6dfojj845QtAKybgmRHk",
  "key32": "2uvsrRCqxNvHY66WdX6g2jsHDq8UYWEaxdN77Aq8EJRYXqtYnjDGTcru4aEVevi7owL3PEpmzpysYYptx42qoctG",
  "key33": "3aEujV2C2bEruUdPbykuEJwVuWJK98L3da7B4CzU8mBNprLSfq8ZdhD8ioioL5GhoDapvTAjRqhwAMa8DM3CTC5i"
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
