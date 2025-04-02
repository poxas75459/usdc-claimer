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
    "HzmXt92UWMmjTxKwovGgwk3wGCQUWrZdcn7WduznLTWwhy4kRtBLkjouzmfUEsP4YypZ9vzZdNEf8mAzBv1gUth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z4K6WCqQRYhX4oa7ZsnUBjEkbWTd2rcaWi2LWsit3YhcydGvcw83DTHsuQ8YZ9WJmqGjtw3x73DanbhB24hsct3",
  "key1": "4U1PjWYUZ9zb3WJLC7m5wVwKZD9Sitayqrr7qA3aUpvs1nHpmxgxJ9qwakFp8K6WmCJYEqY1fBrprvudm8p23hjv",
  "key2": "5dRMFSP4aCLSjoiWALUV3ftqa7htZQ8h3qEBsoMzGoWagj2B7rQnBVUh9rVmZfieVB4Rzcb4upgXxsFj1RQsgR3E",
  "key3": "4RNY6FxyMcNxKbDkyEiwhUQvZqnMAvuqxbcQK9bTWAUiNozDs3WZFYj35DioUZAuAGMcBbZfVXFBbUMTcB8Gwvqr",
  "key4": "3y9j6D2UewsBLks7KDoGy79zHctJGtYAuSnybsdsUtZLQPCixVzPbuQUhgn77poi4kJdWqZDV55dnP2dGHVmJqmB",
  "key5": "4bDsqCdgvLF8PeTtwcMixq2L22FYcK4dNMuNUziCr39RGyoRUGYY3LNBvm9mCEfeLCVx2FAaj3Pu3c8mVT4h2HBE",
  "key6": "37jE74KkkAtBq41dUe17Fb6jaMt44tjZzq7RhKpMRWi63CnU4A7bGuCCwW9tf1dJwamhXpFr5NWZXHq6WiRttzJk",
  "key7": "FzyEhLqqVDiYBoq5XV5MbZZhFEuGEeQLzzHofKLRuhJbo5r6jzfhJrx5mCZSL9sGYwfDVpkW52febFFNJTWWocb",
  "key8": "5RFEkNxjDgQKqD8sSfpKSheCEckSkH1Z9w3FBUKSjzMkuzYuTVA9b3ZBmPdNNj7f5Qnj47YmVDEDEoUtWzK5SGEz",
  "key9": "3iPvxEHrY4tvwC8WmtkyYtvZuSvmmMoTCthGRmj5nfsdGpTYcnpWDrSRDb4qZyzc7XSEfkpmDtt6kVkcsF4mY21z",
  "key10": "3vLfUAtbpcGvxnSqi3eresM2nQgRpUNzHZu1U6CdutnfFtrKnuVZQ5noiYaqD2MsEQiPYLUNLAivjGfgje5im2sH",
  "key11": "LgDc4SeJZbenQ46D92bxHjoeh8Yy342DE6RxJ79XHm14F3GMQ78PGpS6NUD9tNw5BAnMcafqE7aup5Lwja4wuiP",
  "key12": "5bfmVb1kiWGmXM3GzgNSsov99ZfMinXg73njWWBtzqAeh62o1gqNjAccmELqkuYx8Nedj5Hqr7mD9akbRZ3vzyLa",
  "key13": "3dbW8bYibDK1uf2fkopWsRZ97W1e5FwmERFFfF5awE7mWDHQeemgj954jLrtaEa8HHXSRyEFhVbcinPjVvWcXkwF",
  "key14": "4varvGtVS97JX1DSVFqsQjkqiwWEAwXmvzRp957QouMLe7EYUq7UhLHUncJmb28g74dqRSFmtRwLdSq35bnEYsdk",
  "key15": "4x7M7wLBF8U4ikNCBM1i52tQfgb2W75duRDLY6SPBFwx7QUYgv7TEBX1NeVatbrokJNxU9uF77AcMKxbqh6U9wms",
  "key16": "5CCJ1enFNsxB2bJvDqEU6K39MUey3j4SHPeVbtUBxJn8cFg2wX1odm6f9TsMyEUUXM4iJFFq84EeXd8s9GSMT1hw",
  "key17": "2CLsgQ2RJ99c65gN1GpmYvHovrswGXPeeVQ2r7Lyu9mhss696CYheWqPoPEEHockcDoddfKSRWfuHHiCUFBrXeUm",
  "key18": "56wuU4T8xMR7p7DQHmU2K4L882b1Yg4oBhWuV7PU4SEtxkL7QAniSqxKnqeucHEznkM3XWDtk8fk8tkD5HAmjHd3",
  "key19": "5hpW2L4asMR7h2vhLBu7mEM11ooxuk4tUsmnKeX5k1yQ7Ea9Ct35sm4urgUcbC7j3NayPPPPQozAgt1nzmghadA",
  "key20": "2neCHVi5FoaqD6C1zDKC8zSxUXjBGxSTsWzBL2tX178Xnu9PkEScvmS8JjovnGF4ZCEnFhn1WduGSSPeigxHsxg4",
  "key21": "2NQLmzGZ9fCW3nH7dMrseQr3KrzfiioHy3oKbkd4oobUshjggDZ5vjd7PFPgcihzxPNyyjGXLxSHpP12cfLTVFAB",
  "key22": "34kHeCGtpczcZYWoHVpWeGHC5T6om7rfmUHc6fot15HvqNddDLuQpccLU7xPrM3QZCG287KZq2WVpZwLMQcQdvas",
  "key23": "3K9MDcyTshMq6o8gVXUJykrhNEYk7CwwDfJoxPJoCvfYsJoJW4Ckqajn4qxQSmLo6nMnr93Ev2ogz5uGTWbnScd8",
  "key24": "5RSEuVmbr3h8VqSQiJE1EkXevrc9s5qRccDFyVT5pFfW3YhRcjNZhjnuTcZMqaWRiJ16Jp6LVr9HJWuvcN3gppKs",
  "key25": "5W1vSGWr5MEfPVhPthXjN3UC2PVZj51p49VZybz3RGNssZm5WkqsWyE6KkdRs8iY3m9ZkzXofcWnM9HnRKW8eF7a",
  "key26": "2aB6njsSWgACnKvKT4WGjWbKGx9VfUDyGvCnUBZE7ySKayrUUrkLqLvREFFMrqdGQRfow1zF3MRLNJ2Er6RExcWt",
  "key27": "TybFPkcnCVX48FSxF5u2PssnYvt1pUrW1dVF4b4qos4pM6HMBhd8RAGiLGphntXc9Di2c5Er2ZXQuimyM1zpiou",
  "key28": "459Ygtjisd7SEi4H1Hw9YxuYHBD8nC48um5KkzaMie3xWhaMKwUvnbLAkZw4wokXTFanLF9fHExWzN8zKKFB4cT7",
  "key29": "EApg92bYiEx3AG3hWrRqB9u6zki3RrwwqCZF5WRDGjWS8P6zD6EYionnZGEhu63TRRiJnBXTYpEEkLCxkP5q3Kb",
  "key30": "5bC8tcKXcMRDcESpbRubR9oEatEtHGoM94ppgUyz3HSsAJYayjDEhz1ZjtCSDE3mXMe1LMrBAYW9vs7iMfQu9dYv",
  "key31": "4tF1ByyY538wi2rLerFaWy8atetXAvaJfAJcyouFweKUptzBULnsDeS61afbSeunoZH8oPkUxfRsQaaJb3dRvJCB",
  "key32": "5EaySM98XjrSShwfvYSXY5NnRxD1EShJCxSDsHLBDjDQpa1FD826UWv2o5ftg2Uiz14gYjyoN19t2wNoHfog2U8b",
  "key33": "5hU6m7C18Gr627uXAaExnqC2Q2VRQykcoM6UMfPVCZUCXQJdTmvJtYciMAW4cMpkhwEEeTRrkj4NjSfU46uhAJep",
  "key34": "6iaKhJh1jbjWNaGiZP6GnWukrxjkMKAFFsfveuWFNWYG6epqkejiJWZD6oS63asp1oqfwtKSXsA3vr9eqxRgefT",
  "key35": "4iwrdbtRGSwyr4trdhBmJpMWJsFsaumLEmfguYAWfCqtyjLsDt46wBzT8s13oWtN5DUNiRDQP6jf1urXCQfVBbDg",
  "key36": "2XnC3KVTU2mQbnJm36dfPim3oHndnXtYyi5twFMo5dmLpSoRJALTjVzHj8PspNGhoXkxBV58SkB3KkRmcmWRvm3J",
  "key37": "4vpMgpPEF9uiabGqxfyVuUW3rp8XUbcS5Q7AKkHCp87nSsbFT66qApFb6y6A5dWTFPYtZYJvjMx1f1ZU9C1LmpAc",
  "key38": "3Vdn1WFCFpK6f915mb3M5NYHYmovW97CqwEd552tBALPKpF2EBuP5WAzhVHaqZQeo4NvKg7Jv1svJT63DGhqUG54",
  "key39": "4v15CkXgBZE6c9SkSRxUuPPmrUNPQ1FvMp2LvXTVzdCt8mUTKhzRQSiPwKA8pyK8vqVHU5W91huX1VpGSb13auSD",
  "key40": "YhJSiRzXRaY5HPXrH6JhQz6j3cDubftPcpq6NtuwEkGqrrWpPGGMKTnFXqkVpxGee47cN3p3y3UkuQpksKJVLsV",
  "key41": "61TGmEmoJ1rwftVRqh4ApugHftRm9v9Fqwjq76C1ymiNs1aQzdou5sHrfUuqZA1tpHbAuVucAEqALHWiNJY13ZXh",
  "key42": "5XDWgZxRAvFojvm2C64B8T3fRKcGe6jDaHncena9EULuX9BvhH5NT6fwAVU9JAN8vf6SVFtQta7H9RBRwEx7qThd",
  "key43": "2KH1qGZ9hTpdv6L687XJF5CvVMeWXo3HpG7jFrBSQR7XXYvvhWsB9oHW3uKtqCSjHCvFjZM76M6UneHA3E1hjy7G",
  "key44": "tnxPRbB5Rc93pQA2trxpcB42KA3knc6VEqjbSpfL7K6hjRB8NeooXv87qBMnAuAEp9vHBLcJvnYf6KAVtCMUKyk",
  "key45": "2w5mPjsM6CA2bDMbpY6whGKFcKQZ5Nv5JK7RakXjrbjA7N7nVUWqjMNafG3S3x9MG7bZJZDJuYzXcXJpe1BgUNrN",
  "key46": "3sSTfZu4ARAAhNMeQ4TaKZM4Ta8ws7prVP8ygnbqEdFvB3x3jCzhxrdBhaP5xJCuQxCYFktHq7AHyh35uo4Yp1u9"
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
