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
    "TjtX5QMxfXU8gPxNtqjd7CxsehLVrM8ZUfRq7YCcn4uHoZZo3zShmHYRUjsvPwPsVLCDXeMRvKi9L38t4GeyUWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5auvC1U6bLwrr3m44JaSq27C6JZ9Wj3MuGVtCHmLYepJJpf6KAU3sU8hYGyxZDNyYdpYEFyxhjyiyMUBz3VRAMkX",
  "key1": "2Kn3j16rbQikPt3yt49Uveuwsa31dZSZU1wEb12jbdb12Se8ghvBs3mQYYqudZGxNMjdFy1Hjk6cL1Jo7a5XAeL1",
  "key2": "5fdeQuCuq3jmKPdoKbPkUw5B1qqLRN3k353GxyUDfRDJCxroCmA6fJcThKRFWuZv126hUinpxmVeVJf9sbiZWGTW",
  "key3": "Mp36rjApi7noZtegmybaogD86nVCzVEYV21U4P77DMZ1o7rXj15jfVnsno25ceFtUAW1xMh2mCajwcQ1QNPwizs",
  "key4": "2KkSzksGdDkyMjdKvZvrsJsvSmvMnEpJLFN3phZ8J4r169mpErbYH6RZvy4xS2z3XQQHSwAJ9SYL186AfQQSf8Wk",
  "key5": "TkBqSb4KvC1isAxPzudBWQbPm7dfVxQL6yjFHEU9RZGXU6SvpQFdoY8aZR9v22qQhtHbrRXwk6SeoaesKbKYLS4",
  "key6": "373Vqz2bcfsoyqQLDogbQbNzzoLdguo5Y9qFgLNrPFPs1DyW34xvfoa2KhjFAoydXNM16RJrX3f1kXZkE6YDy31k",
  "key7": "5TbEndhRzGfaik7Uk19XYcEnh3hyZU4LToHbqqxnpVU1CsnErF1renpAY86D9XVf6PhjaELQttzSsvsz379fUjjE",
  "key8": "5k2AAcGP7T4YvV1xHRzFQgF7YRcB7Rp4aL8bCctp744c4MKuJeoSwVaMuRfXNiqbHeMEdPKrBa2No9aXLk2e5eQG",
  "key9": "2w2vUEwstzEWfzEJUs2kLPpsUw5ADCX13wS8kL9tg63c4Fii6LA2PFxRRtNGEpX8Ak7Rfped7hHD5FycdqifBHeS",
  "key10": "41yZ71o56CxsQb7561x9yHDfEXNDqNwGwKFLbtgFNU4vwi2xmKWjDwJQwW1N9Kcp7jKzBE2doHRj3ryuxADLUZTo",
  "key11": "3XuFBCJ6YoVk5jnvomDob22nSdoeFP1z4zzYJe3hyjvYnXQaY54prntPdJqPnhVArfwYGSadSGuuZGWhNCTScCZY",
  "key12": "3zp5Xo64RQnEVTMsag8YyQw6HN5NfnFcxMbzfPAvFUUJQT8dUCN1FgbrH2iagiWdPWCuipx7JQp9GsSyKciq4uKr",
  "key13": "2mmKmpEMbXgUHrkbwHhSYS9wNXuBD9L9zehEMgixj3mukCdp2LkyJPFFpaUx2fRDWUBw8bG3r23eUsGu7wp4jHBe",
  "key14": "2Jpbt3STvhXhdBRxEGKGQS6Dt38YpCt6uecLwyTtm6SiJHcTKS1qkfnvDZbHVwnFKnRG2RbU5BBzJRsRmpXV2qoz",
  "key15": "JwuKRnQfDdqtYZxVCC4kx27f4Jyy2WL5mJvimTcVHRJxTukEBm4x3Aoot7kSQcuV7NbEXcLqdKJdY7WNdpcmMqr",
  "key16": "3ciEh1zYGfnhkjb8yVRDbD35FVoMZKjNFc3gQidt2ZiVNwJ2izMXfaCyL1VeFgBMKNE6SuWnVodN7ZoAKFj84F5B",
  "key17": "2EtPc3JXYKFaff4K2xR45STQyakXv2CPaU9xV6aZ26PBKoC8PPaE2t9DurptzgxqqvLVHPnKWvA4GuMHrdXu87oA",
  "key18": "29VpjFhPchFAXZgBQ3KASAmGFacT8LEbNESUriXkXE2U8Zrqerw4fd5MWqkgjvSNbgC1UUAB4vfNppgpbsGFhk4V",
  "key19": "5sER7P7KfkWfvqQQejbBcNSDb5xGtw61e4m7L8XCspF62eVeSQ2vv1jG7wxPxrq3YSVmb1UEQMqNg258mn9usJBa",
  "key20": "2rdSTZyx1qfuvMtCHbxLKvnZA2nMGVY9cuBVh5wdDPMV9mwNofa7BJN194royC4Y4x3sAqk5y1Y9JsVzWfYkQYEp",
  "key21": "5xGfbQqWQx7jWfoJL1rPwZAkAXbkYFr3nPBHbbnaegE7P7fSzHjS63D1wQiebqjgnq3yy84GUoDeymmqj9XsAe19",
  "key22": "4DnDWFDCjaGS2S4mX371JeNuob8pm9gbGNhp2X9WLGPjkez3zv7m4KfUzdMFvucRiQMVUSDnTw1SSM8Tzkq8XRqV",
  "key23": "4wkt6iSRFEc5N4VFxZn8thdaQPHCUL7iVYWQESwhvQdWn5ePx8iyXWC6xvDUiBTpzUUbNZwbyYF3gTM5xTRWSRQX",
  "key24": "5kYVYuAmnHMQnZ3R6nX7DpK5HZCvBjM2Gj3YFfxztkDAKhdR32xVhfii5gF4Mzja6UXMk945XJDQ8LKJCZMeSxZi",
  "key25": "28bmTuaNk59Vi6PQDh1M88hK8QSAP6FVE66L6CPHTu1dd6LeuUj2i3jbvaLhabmMqgxJKpt9QMkqkcfarZnw91gy",
  "key26": "iFVUqRHaYEMZC5e1g353LtLVuUiNm4c9WG8BjTZWiZ91YskfyyW6cwVtZ68MhsUQusR35yjuD8XneHCiv8HAqFb",
  "key27": "4Pk1EDHRK3KpaSSi2H3AkDvSancJSzwLKmfdsfTELM9bQXVBuommwd56yvaxWnzf88ZKaDyHvVq2E42NA5vzuPU9",
  "key28": "2WLAqsGT4EfqrNmqupfHFJZHd6CNgx3sqQU3W94RUWW5ryfPzseDnGByPwtzntfeRA8AVCM22A6By9kGbD3nthk",
  "key29": "5wNKpSeRH2RgsjSyujjMDzwdwTx7eVwpqHyxApiZZYmpyp9DFS1NME1Smfu7WzhVCohP7fnBppt96zFuGHqbCNst",
  "key30": "26bBGMtVDpotusFmxFSqAUEdrjS31JgiuhFXvmLDZMDeBRL3C5HjAq6uzKc3jo81YSm7pX13cRcyYfFarJbAg5hD",
  "key31": "58vpPtmkXekPVz5j5bnF8BtAHfYg9bKyPCCxFEhGsD5tCrSY8XYpWuDyW1GrDQTYRwzAxWphihiNnwuhRC2pnwMb"
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
