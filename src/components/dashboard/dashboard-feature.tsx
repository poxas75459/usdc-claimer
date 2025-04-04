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
    "49w2mnK1k4YRrNjwrgqdiHnC5XJ13duEgD4eUQAaq74ZpdHtbA9vfupeTAiSxU7df1mLm7VmCaFJiANmeDTpUbFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fe69AQ1BeMuizkTZa6GSXKJpSoH6fujv5tB6ar99BQP12hhnCnFadkXFFQFbhQozGLgyUA9Kzf3pqTsJc5kF6NL",
  "key1": "wtxjzk3xNwqN8hrNwDCvnqsWmUVKQsUozKqr8a5ed5XHyXES1tK96E5cqhpyUaTwCLiK4Mxzw6VNBcQ39LSLSmv",
  "key2": "SvKz7jyF4muQXJhL2X6VkLG8YhzD6ToNdQgi44rXsota7jrD7xkehCH4ZRtpw2mSPpWTTvAGQ7XDbAhHpVo48YJ",
  "key3": "4gLLKZctrsVoH7enEdvF4NzBFuYkfcr6snx2yeU3uRXopLV1J7gADZPvjLbs8MUzUSrw3Yhw1w5wF1Y7oXhUuQ5E",
  "key4": "5YCM9R3oiNUi5QAMxWrnbM7rZHtYCTTJQexLq2CpiXjPJLChG1acgQeJEF3UC35ZCDFrwFS7gBxMuEzm7Bbe3aBY",
  "key5": "3mkKvtD9DVFNraKJ6psARMABWjyrvVDGA3qP2SDNAVJAmFJjZKBDbVx6bas36d2kgSXNnExQspijRZPfrcggLEri",
  "key6": "3g6jj2uDNwVQuJKmVDRvcprADWtzuMb7XN8dy9NuuQ8MoKm7o4631E62xo9HSeRiwDMoUNCUwzjkR574f6y5XCSB",
  "key7": "4D1xPWiNWGk29sejNUgVkLBxubTA7bgNYAGihxFjcrKbPbhVzz1TLwJtsdsZkRr5mKyHXodopied5qXV7VKxL85u",
  "key8": "5toWW8C2PuzsnCxFrK9T4Fn3iGAnrrFe4Kex6PQoDtX2fq3DWQ5KYzbjabXyqGCkyGvySgiL3ZR5D6f9dPMRHaGX",
  "key9": "5csDZzeGrosYCoCH853tTQYVKzsbj1fBgvbRdQnP2w8ywfF2VzbdYXX2ZNVdsmHDVXhXKwzLkeJxfUu65XrEtwsN",
  "key10": "3auo3DJt2xVogRBLVLFuqMAZih2RVFNC5f8pECrwn7WDfD7hVLEwgX2uhCU7yRqcKe6ZAnF9AgggrhCT8nmSYe1h",
  "key11": "3qJJRDo8578nzarV14RqtvojG573ximWVfyuuu19uWoy23opRzeaKooT9VhEPRSPVNVRg1soSuT7Pdvh59MJWJKe",
  "key12": "4efqztFN93hpxs25uGawQcngpmL73T6ymwMLciPwa8fnviSnJBuxEhFEYTWcCHPWFDLGGVtCfawEaiiw5mYQAN9W",
  "key13": "31ZLrLt2LSPM2kedMRWPZR2LBRRMLHun6CRM9XpwMkfUkpbTv3P9sWnBX9xPMoEgFBTrNxkAAjpH6xJ3KK1tF6XV",
  "key14": "48pWzF7BVP71ELgiZDuGDZ6RbxY6MeGvG3nR3oXHfiyt1gQHywdLMT2KqMMWXexMYwnWFAPCHJHZPXbT4ASWSaFk",
  "key15": "4cYN3FbdaFMGrzrLddG5kp5Xyu2Js8CudajnLnvdMjR8ToMphn8y4f9R5ZMzAGJUbn62g6wt5Q6zgX9DskdxpFWy",
  "key16": "EeenNkjStQwK2JfDiqzvmt8XxzRDEGhnK3snNwhscTXNBXNzduBwMiraGvwneFKfnq4dV6qdPMQQHV4bvf1KM8M",
  "key17": "hEKfwzZqXdHTMq8TVYBiXrSd38im4WqvGdDpT1q3vRgTWsHUTeSVhm5hpKisDMeUE896eKZPkxejNDdQbVjs2kK",
  "key18": "2NNSj3kyDL3ZFr7rfEz5TWqfHd5aYwKm6MnwUVc4Ffqm7GsmFXS1dgEoqj9GBUJin3jvSKmXqwuNuxNMueeZraHq",
  "key19": "5JFxHmMnpD6ryZ8YVRfZy9GsT69DLxzdurbtR5DSg5JB9BVRY4DWEWQgBTMf5gx4ph1tYmDbaM13EW7GX4Ay1Mpx",
  "key20": "3jDqxxv1mq23RD1DzS7RFMftRhMcLUusSj1bhWztCRUo7gCLqwp5MkM1jpx6VaCnLExQj7nBuuYMp5isAdZWnaan",
  "key21": "2jqQoX9HMwu2EBK4Xb4kQtQLdaHpdnZcnDQL2k67XP5Qoqvx6TtR8ZYCww6am7cLyqWMTRPDdXW1atHBG9DnCUrZ",
  "key22": "2KUZikUkXYhVHTCP9Sz5eGTiUaA7F8XBY7mN4ZPkqBC9v5wqDDF1uuGWxkeyJ3P3TKKqN5gByMGvWgMfyhrJniZY",
  "key23": "ZJFzg8orgZWWs2ZNjCRdaYobnWs1SSmEwfZSJaRL6ECxMEYB77dkkbawB1ozFv7EnQ3RKtE126UgeonPhNb1yF4",
  "key24": "5D3kHprrfYyJfSdeSYTTJ49cTupK1bo2KHC3mPuA3yf7BJraPNrSvsHNXFbU5PADEhfA4emseBx2UuAj8u68zZZq",
  "key25": "3jzuN9yH366ZVfeSX3pcjjNV5fTPZaYiwN9sPZKGehQJxJHmaYwLNbvM5D5p37cBrxHtT5hJdo2S2eTskWNjRLUZ",
  "key26": "5JiFjWgqM4t3wQLGJm3zgsViPFhzavDvTT9VQ91Ac3jR2wSed16Ae5BsReoC3uoV6gsyLZgMQGfeMb4dfzPhxLCP",
  "key27": "4uzUV895nuwHeBj5vPkVdURTmFRTXqpQo3fyUcZESwGdgB5sFRccnh4obJaZzyatRLY8VLfR1ChvU3eVdo1LXo8i",
  "key28": "2RrxkEKrndWMnSGFiqRQFm1rWF796T1kjmfPUw6yz4Hk2wuot5zdGjC8ttSZMm6AWtPAZwYT15SuwZDZ242LTg1s",
  "key29": "4MXkQuM131LwchkdUkNVBPGgCYEg6QhhnwZewtBNSwz86YjVWFEMNTDGSdwtWUygXYrVAuwzbV5ePgCv5F4nCb16"
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
