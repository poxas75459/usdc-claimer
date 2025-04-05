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
    "5FXeFez9vCgtTNDPHJDovVeDsKX6m7YJUBdcX1o7misHF18HGYWQGz3JmxHeyNFSAv7HX9uMimj3hr14f6P2YAZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MwtfRehKgVEFNWVFjiMUQmiKFFGLLRJ1kHAZBaisz9wESZmS6e3FKVVsnTj8pyAg6rzAursR8ELaub9xNKaDkvp",
  "key1": "4zSyq4KphrZGoDkdirhjE4bahUH526Heu3CMPK45f9Wec1naHMv6hm52tFxgLbtWer6saZCfEgdxEQyD9QkZo3Ki",
  "key2": "1vJgxNf2UvCQfmdUCkMUhQRB7NxTpVZPUSnUARcaX2fcQMBj19mAKxwC1gkgT2TagsNzo1HNg1W3GHE7Rx596Lz",
  "key3": "65zTaoTk2TrRRaovScyFDmScZBJvbh7pwn5HsppChHcmVPxfAwU5Kqj8s7CZE52CHPS2jfxJycfckaXnKakcSd6D",
  "key4": "5XEngFsaMYqbJMXoSTpdDbKQMLgdT56uTRVxbdaE7h8ZT69iTTcAMCTCMymtEJ4GM9cjGU2LpnV32ZPmySr4KbfF",
  "key5": "2db71voxwBNjaiLdnV2ARH6GUnknEm3R116sx6HNqwYANjNscuGweVJkbGkByw4wmJ9oMmvrSPqnzBBR36uH4366",
  "key6": "5nP2FnhmLXPjDYzg3EibxszskctNRNqXd1pPyjhWYvuAFx33NYFmk3XG18ZgqGqAcsPQNL31akcEzHGj6DkfyuUt",
  "key7": "55oWozyna8P5DW3jk4UXyhpeW5DXc59q7ToqNFqag5UCApvp4ayXwio9iZj3HMB7bG4kqieh7r14nQnzsxsYooxr",
  "key8": "3t6wdtkD4Z1twnqT6qCuZDqAPvgt3kvFSST6Yncg5V7Yy91Vkdne4TUiv6aKjZ8yTftLB9hK3ThuAqz8gjqsDDje",
  "key9": "3V6x7Yu2AKNAksusCAXJmC3bf8X3hiV2Rn8XHAYDerqxvm3YCXinWxLJ9QcQAzTp1eh4LsDpsjHHk6x7NWmEadbY",
  "key10": "4FPC1F4fNb3h5F7RVqoVfC5HygSrHF5JNmWuyJetfTfGT6cqqWjPTpWbZgAYH72wkK9nX9dKrkgoPT2upT3BG5gQ",
  "key11": "2uFL5bAxTq4rhwfFHCnG6ZudZxqXKYHD6Mm7yn1gPDYWjSwLgebtQArPk4TJdh6cJTHYU1kbBGSHW1yYGeMpshXi",
  "key12": "2KzzwkdmHDJin8fkJuTRGv2ZBwAFnAxubHzUTPsMeg1ZNwfYwE3fuVTHdx1cWTPupquofEoskTUqzNE15n4LYn8Q",
  "key13": "3AMHbobCqog7euFsqytTMucX6QzwiwqvXznNFfY7SSt38mQnx14Q9trs1phqQhERfGqTutH7wkCt1ahYmUkTwxvT",
  "key14": "5fH3Xk6U2RyRnKh2kaFHBkvSaHAiLRqiwzq5ER1cFHmzP34HA26qFGJMDwt9npYPuZt9ur39W8er8EbePmz7BgdX",
  "key15": "fxQt7QdynZ4Q5XAie8NgxHxGqGed4pwDzpy49Vzkk1jgvsVRQqpBbsp7kAFxtwTozsZsTDer4ynDgSFVAKFLL9H",
  "key16": "5anFUWYeKWbqFH3jtf2wFj1DKF8gNYtPqckp6DFhkFv2FWFokUcmK1UWYayDemzNt8frDH2nr9pEn4WQqvGMPXhu",
  "key17": "4uU4oxad4ezEMcyS1WNHKzRVCseF2brZsKVhP9NWm6pqmF3Dum6peSTi57ysND7iuvXB4wzzmUSPmc1FgmqCbwuH",
  "key18": "2zrcqLyUsiHgDw5qiVzNYLQCyt8YudHTvQ6Bwyg7C5apSRYNXtmwTe5JrDa6sEq3zM7QyE3K1bqZ8nAUZEgqR3Zs",
  "key19": "4GDxZ8ajXEJDRF34RUrot6miRTzAjhef3zphDnmmQotyK762sWMMvvVkwZMsArWPjhPxL691wfHkAkghVc427mBb",
  "key20": "5YowVRvNuTmLynSXxgsipXH7h617WREQSe7xgoym9u2VM5YSuWWPbdjmHQQxnuwFZmX8agPCDaA8AEKbsc5EAHd3",
  "key21": "5PA79K4NYJwwi1cAd5m8Kt5kRQXbU22evjtQo2cKinHwr6fXn1AUvNKfAesu2vXTv2BjTgNYD6NY8oVrjet1Y5PU",
  "key22": "24TNuH7jux3QH5QDfvpbQnxkUgY2cjWtsABM8A8rZnwcySfA6X2RScSYnQQERpyDMSzm3wdr8Ah1K761u2ZETVjJ",
  "key23": "3nWrDpC4TrBCUvHWwXXPEEFzXutmUyXo5qW6qtci8jWg9rMcBj84fYhZgLWYS7sDYHZDxVVzMw4FjPuVkXckk7y7",
  "key24": "DdtVLbPs6raYLJUBFwtjAmsgLzSLtPyEr31mK74XhyPwGHGbdeV5J6hKYCCcDgJLhmE4NZiScxhY3GESh7Ly6bT",
  "key25": "2sUFLKCAZP87q5G3p2dsDgnEGQuyjnxnsPnVwSrAcrsfBnf1EewTnz7TRjuagi3AWhwbvnUtEQNZ4G29zPgP6WTo",
  "key26": "3inmnfEBqPtBsTcSRvvC9WNjUHtVhpovfCv3d4ew1rJoPePLtyRuqTgDsTdEf1vxhxvZZjv4X6gE9naF9K5rzDne",
  "key27": "VyaF9CAvo325qyR8XyeNUiWqfK26tpeDK4RAjeMFW4sLzrm2rKoL5AxhxEqYXYtrSCj2pPsuwPAzPjA6cYrtjNa",
  "key28": "aYi2eD9MB3fPHCNJ98wDDtb5hd1eSiEtbQsm8NyNetDt7J3U3f49cS9FbjVVopM5vrg37nnqR67xVSsUY4Y2UEL",
  "key29": "4qNfMhTj3Wh2YzJTZj1q3z9QCBrs6uUwStfBKS13uS8FobqRgQBMxxtRHwBvhfRBmkcDM7uTctk76qaNH6B1SBk9",
  "key30": "3en314TR3699E3j6GpEgW9VbHgBi7qq4Zxe8xMK11B48LaWXWihRHCitZaxK6JMVCFkie9iycmtGcMEJTxfV8oHo",
  "key31": "3Le5fVrXStJ6hCooDscAAtGNG4tnSQ2SKkFGWtcpaEVBcdwG65Di245SrJ4Ng1y6CZYgaN3kd4HfjEvnwcTaMmnL",
  "key32": "3Pmw2WhswPnjfPgYnBEsPuSGTDfW6KohCEjfqsEWEpcfwdpNLMYj9q4y4vQg6bw7h36wwy5tvN8KKzG99GsVWoiR",
  "key33": "3JnVjjC6aC35GrWMAUB9NRspYXptncN5GG2UyFRkonMXNDDnCJQymBZEAzwBCmvB4RidfAKAW5jmgKfguRSzFq68",
  "key34": "5rysUrbd5svWYwHnD7C5pGJZuPkyxHbZHfPKqfCrr2wgVd1S6pA8LwLrKHdRB3UjxyvnNtsgiSdFYMsW8LME5M59"
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
