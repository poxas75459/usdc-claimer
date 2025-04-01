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
    "63QYrkZDLLNPL1Gzx4sHVws23HZXHu5EVFKwLnaz1bHa2XcAVEM89GzQa6cgnwCqiX2R3DLpH88mgEM8pQTykwJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33NsuU4JKXXuv2HZGaCv7Bd2ZRUxiRVbvkmqjGdKhweE4j9Dgc1B1YRtkb8ukk6EJ1JnDH6pmwiLni9Bo4X12XMw",
  "key1": "5K1WbDn2hkAesAWQZ7bFpKCmUquksAbXnp1QTteTVuanPoUNF5dqj1N5nCYgHtpttQtWEkbQyj5JUzsp4g1HnA2b",
  "key2": "TR2Fh739e76r7aRaPPefLLEKVvJkG5B4F6SM3MhokKGxKyzVhs2A66VQytrGuRMG52WZDPDreogtPChJpWE6vnm",
  "key3": "5WbsMMiSYwks4iJ4tL3VrbVdFTJAexRnEj6J8vF9BGDnRBB4PWtCT39SaNmrSZqj1KbYyo6F4XZBx5SrZud29NoB",
  "key4": "2t6NB3u2TQ7ceJiiMJZpfAuqVwiZFzh7uvyc2v4LQ5nr2QHSGijPqGEcu4LrsGShGBCA7gLTiAwpRi2TZUiswgmj",
  "key5": "5Qith79hJceMs3QShBZjxecUdMPqSYt6cbKiYTx8ejvzwM46pAEpuz3FK1zESgnDxEbJS63FS1oRXZ8qW3Mj2qCr",
  "key6": "2TR79SyCenrqm7uvmocypuvT1mSLRw1oGSJQaFoEgepoDAnBgVnXwJn2oNxBa7erKtgJdk8HYe59o8fiEcQZ4BL",
  "key7": "5TXfaoXXDJaiXAgAQTcj3ySyGFPY4wtskwy971smcEkb6aowswxv9AKu3B8qCCWf6AdVaMVFoYQ1regr91Eqyuae",
  "key8": "3AAnWvVD2NJ6T4BgJ6zgqs6iSM58VtBYCEhkJK1gUYEbLdpUErU9PGPmkuPTxToD3zViMQsorzTrodVWziWUwAhb",
  "key9": "384CEggRxsLeC7xqFkyFxd9JJTxx1rctbGUptLuY4Gu4nNRbQrBKchskm7NKf8fGtT9WmwjhSr9sRYVVHT1KX1Jx",
  "key10": "2NfjR33x9ANKwtyizGivL8y1NQGJm57R36aQ45Svehd2tZtBJ8v6SWJkfPuRdHEjr1wv5RBHJ2BykFQQaoniCic7",
  "key11": "3ufNkowdEgrGknKEFCsaZnp3vf1K2WqYqHBgDgEptTNVN2DKhbdsfjVWnPQxDJcQozdS7sTPoyFS7tcjNz4MN1qB",
  "key12": "HzDGYFNJ7hutfHkWghRmA1HvfFLAm5JXVrQP1gLWg23KV93KVXZjm8R8673ZpPhcWNE2QF8o3zQKu8rHxzx4EWn",
  "key13": "2jDGLz5U37C95KCCcEWN2wg6ud4Za2wRYL1cpKGZSBek4bFH7K5z2EeKoasygy6AkqQ7H17FJZnmQk7EXyM1Q2b2",
  "key14": "5DxBxR9raaF3aeTyZ94R6GjbASCqsZs5kQfEtMC6uKUGbhw7EdocMXPXsgQydfW745KoXqUSmdpruWYPEVrnxjc5",
  "key15": "4GyWqmC1Dkz1tbtZppKM6G9p77JAvkdYc7aqciAfM4WkVq5rPBPqnepuBLk4M82QbrwtyCSMNk6keegM5APtutNu",
  "key16": "3trhQbeJfo21zWaRzfQdMLgPQhAGou3gcCSUpg7mgsACDvZqKnthNakdDKcVH36hu4PSnCZnHjJTWDLxfG9jfnPd",
  "key17": "3TQynbgtBNSngf9sMjba9XtxRowYGWrfSnbcJsC8cxDPkYAub3GrZdtPeqNSH9hXTVe1eRuHVEcPHhFgKrtES6Up",
  "key18": "4euRSdFvng52GBBzHyprAD3hFPg23vwU8etiL2TgHPGVDsvDBG9st9SBtni9Rmoa2pSsr8U5FxnwK55ergdZBCAL",
  "key19": "pRpH7oKCzwQeGE14DUDoLWvibshBaMAKFqd9HxVYXYAjLf3pyDzYBCMYE3CFazCBHQqh7aYWmQYX2YCgoLoTCtH",
  "key20": "53roH2SQ6w7bb62fKUWFmTE3jcNu4GmnXVXJ8Emib3d6Jxot42GM4pLf5x1q5qZP7gsLPA7SaqR6oNhvm3neyCUg",
  "key21": "4Rez3P1cQGXrsCNq7hEV23oooqWMdxVn7Vo2qxL5nL7JAC3drQeYKeycgDv6KLj2jPRp8soKx7cp8Ei2TW8QkBnj",
  "key22": "3Fcnybrf4fej7pMznU63T3UDBnNXGusFSK1F78aiuY7HTCYTYkjePTKvGF55ofQC3KddArccb3pLTVJCXBnPuSGQ",
  "key23": "t5YNMMtG5aaFBDHDDePtwpQzRr1yx9XFoWM5deGg5bbt9L3t2hCJNHg7ZkBNoVUdkcj4z9KwyE1PbLtZzu9JeeT",
  "key24": "4Ve7ggn3w9hs6MtNHskh4eFDcnmA3N7nMTVKFkb5AbuDtJmpn8tKD7kd1FAWunoKzYFJjWe3gSoNNPzJ9CmbEfWe",
  "key25": "2wwMoDW5gsVw9bbJrJbVED4NMGZ7dpLaCNDMV1MqoQRw5j85UCKjQhJtCD3nNXZHjmVerWD1rawYt4VVJ5EJ9cfg",
  "key26": "4CA9JPNGksmoW2iLGvHQ9Yu18deVBRdJDfQsn7dSouS5AJoHNAwT18X37VJd8PKuhPCMmEWwT7QiuAggudffanfV",
  "key27": "31KAG6QYw34JHtjB9x9v5s6qy3VJBPpW2wGAujXEzwUw5ZkDbqjHfD5tTro2Pk8xEVHRK97jHyfdLFK9XLvGjsqX",
  "key28": "3szoq2yj31edY8Cib3zuvyXzM1WPAaT8xWQ2kzSeerFsENnhfrEXBNe9JcFQhiKR5i2hGsCZjvnXSiaZZ3QnYwHy",
  "key29": "3gE59sMEvfaMhPnGVm4uHFfq77e1AG7XyEsdRmxDUujA1yXA6Zn5ExVEu6zjgUQX3sFUM4xhR8ug1iTwjZe4r1tg",
  "key30": "5qDgRqe6GkUQUFWA9WsoVtKDYtCw1BnbgypVX1CBzgeqLi65Dx93cbMqM3gpKYdzu5t8UsWYDXXt6bism7bBbDig",
  "key31": "3EsCbgnPLcszNfhgF5HkLJ21gRgFrRGideY6aFh6FBHcA4HHZ2QAzkNSwCPrdLGvXEpwSBgCpALWTMKpKAxRb25N",
  "key32": "5LjG2Cg2WTxhrpxVt1evL3aKSQggTzFN72pUYrKNAaGzh75sjrcjZhgRsZzekcYq3aS9HSKRViGbrD9KvRgnGyDW",
  "key33": "zfzqjGAFrka2AE35tAZNuPe5Rc258oEt8SRrMQhJ9DBYNX2gm8cFnWoVncneQbdSWTiSzN1EzEKUevHfod2mZVe",
  "key34": "2nUmPqLBB81yJ3NkECPB5wB6VCG9uuscs6q31nNyGGXNCF34QwYoWNj9ajjgbVaB9PChe7UQ1PskZyqjaHFBqqwp",
  "key35": "4cC4nvSUZU9GJ8rQt77B4UCTYDzNDFRgU7P8EdrFiwY1A5LJLVB8i1EUXvmwuTaEGaTBLsC9JyvvLcy3EKB9kNPS",
  "key36": "2mxYTwzmEh379KnLSmaHW1TxszDx6Eg3LETY5aqChPqr8jaTTo8phK8se7c3Sr2dyQTGcwQd5aZGwzUHFkp23e4a",
  "key37": "2xEhDCYGU1TSSFNHYMSvXuV5B8XUYCm6jjo4rBrU27fBkkWsJ68fRAMYdwc1n4JSwTpX7yweFkSLkD4uNiCPaZEM",
  "key38": "5jk42VHrgpXwfyswLPQvsV7kcLNHCV1k6K4DYDuZFWezkCK3mGQasSsxqZBrEQovpEpWJurQCrSfvwvqDnTmp6aq",
  "key39": "64rMzDL2DU22QthLp7fPjdfP1syFHyDb42Ni8a6aBvuorxXUg8qTjwGepiLFAVsTrRTe1izKXngdupaMJhcBSq9T",
  "key40": "8M9pZosVyjgrTmhCTG5HSMhvP69NUQ7ivTbD14Gc5X5W2VoBTkZbApVp633Hk1GAZgzYKZjjVhrCwjaWcWEdhLR",
  "key41": "36oytDiWpgeEiEeH9jC2rnLvUAnMUqvUCnQiXyrQpb9oRX8YnaA7tvbQm8vBJJKA2cWt2ynzoVrdQnmM2uoxAtrz",
  "key42": "8ywfqbDkGNQ4S4XzDSfZ3gD7Nq5Fr8PiXFRPU4ESXmcpD8hmV1grebt2Qab2858ULRGxSKdgHoMpeU5AzQX3j7b"
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
