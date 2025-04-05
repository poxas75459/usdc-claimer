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
    "5mvi9NrqR1Afyq6BRey4sEjUWT57vmktdvzeRxA1jmd5pKeeQDFrGj21fGBYMLEUrrkfudeayCAAbLACVF5Gr5Vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y82Q6yC8fg1oRT3dmt4RWf8woeXRbPL1gyDWAWNe8AqEBfa4nfnZGfoouaH3PBZCVaSBJyz5Exu9XR6QoqaZxki",
  "key1": "431QW3wWymn4Hb9hipcd4GxTKdSZ4QPjX9acoE9AbZTyEcPkQ7tLkL5HMweRMAwmMWHjKean9M7SEVRhiMYznmNo",
  "key2": "5BVHQGgsiVQaMcVL3HvEbn88s8dBrLF8zKHfufpKN6dRMRv4uRhxKA5WcDi8ZXt3K4pPLqu7NqNXUUWaeBbVxe8A",
  "key3": "4jDnGmufcwMphz6EYBWCikNbTLbfwcswsg3TAu5EH2Ls3nF3b58rtXbNwpuu33tQdxsHQqtuJKGBFp3GaPsH5zFL",
  "key4": "PLzM5mtSGSPor1z3mWCyePbgEzYkp2XNsGkpaZKVbgmcCDsQ2oDNUxmB9opzFSGizTaWp88KQ1RCcrStGQH1acS",
  "key5": "5smS228ZTL6xQfNA8HovA2aSayy6pqHvFcZiyU1t2ZUNYveUvCDKbRyL6Rt6UMAhAJZquxuM5gZn2VJAsoWkWKe",
  "key6": "4JVKhLLdwFJXsj18KDLacv4kd4xEMdja1zjiVuWyB7rec7AFYd5GQn44HfQ3N6jWrg3K746hfCKmvifemgFqoXow",
  "key7": "5hwoQ4YbVTioyV6xRSp4VVKUsbsx5SaByDfGg8UtgKCcuzmujvkTK42NFHyKtYkuVmqH5vpdupnYM4cwFzCa2Kks",
  "key8": "42xUAVfLorsVcMn2S48hRQcXMcRxLBc3LC9QKsz3z9sMHhKC5wc1Q4DkkkTwvQ5SwwPVVTsRUmVQvcADvVAhAtKk",
  "key9": "3kmZicxYG67ikw5TVVxThmNm1nBQonoX9WN9CjkZRSMTZ38XzQNHcBZcG1ubC5AEzn1Nw3SRYgsGhCSMzKKaiy3P",
  "key10": "5YBL6h6Q3fQNckNLGPk1SAevFRxHV2nYx2tTDX8z7WscrBKkxGYqnZoT4tb5VdNN24Mxof6Cq2qcxUdmq3c3ScvS",
  "key11": "2Xcv8aXC8rEEQC8onWytQHLqUbsF98KKZjkKX39eiNXzyeEnceBPJSVK2JMBAxMpse9ooKgFZzS2QmMpqKkHvgmN",
  "key12": "3yHLRb4pbSUhpxxGvFbAVEJ4t7mkv5RK3tafKwP1cPJoPkrDZbCX2jB5XkRVnWmbWLLs6E4wLwH5VLxHAvJV9QkP",
  "key13": "55zdLbfR4cdudNUV6JCNkS3ZyXpkAuz8hM7SVeWyrqkeKFx2qNN4sBgXfXm2WCk7vi84kxSVDJk3M81g7ZGiTqfH",
  "key14": "65oAyP7Vrf4nY1BpF6tL8FyQ8zNZar1JKhgE5qk8Y62mjjuih5AzC8CR7owFWmsDHx2XaPQsHadRzPUWVBNGyych",
  "key15": "HT6ysug8d23voTFTxdb714ARXXSdoZnYcJH7Sy6GU5EcrVCamiNctpUrDbzonKxMWCnhq3mAa2Vx68CAt5HcJfv",
  "key16": "4oyFs1J7NAwNq4YAxFPih4gbXP7B5kjamkMAY52onwRtNwNku12L24bLmbc4yFctENYVKJqFw1drhpj3GhmajQ2x",
  "key17": "2H2T3r8m9TRFAxr7ybbKfidna62SSSHrtP687LmhQBBY1PvzC88m9SVfxnQL8HQEH3cHXiJfJmy5fHqzFSyBT4Lc",
  "key18": "XxrTZ1xzPQQCpgEu32Zbm24y4HPzMJFWjb2Rri9U1NPVXkQQ8CLGKySVudvix9Ri2y9PEuiJMA78wxAKmnXUL9H",
  "key19": "2GVy76YrmASn9VCeugcqZ9QS9hhMa6KdzzjA39J3ab35Ra9BJ4yvLvJDn7NLBmtNFesEuZSutHzbzTcv2AwtPHJU",
  "key20": "4inv1RoeN7xKofee6jxUQNxZxnQN4vy4kbtVewHrKHDqqjiJG7VSbGcZjgqYrJmn6vbTywobsDgsWjs2h9NScG8Y",
  "key21": "23YXVCujEkHMfc17Y54WABNKD7uuncM8uLoBXbLV5xDxzEf5YS8NsD7JAnXgJqoUcdDLBDbKtHdzCSoLXydhtNYw",
  "key22": "5Acw4Di74GyuY4HJFspsdeQHnNerpjp63h4p6H9DA4BohuABNvGHZuuDSUJsA3cejiRHnTr2TmJE8HpiRtpRvStu",
  "key23": "2aoHgt926M9nLpNSbRJ6sZjfwmCbfFuNEZdEJja7155FBFreqjGUXH9chLMJVQndGVddcwscxA5s3xT2vcyYcEBf",
  "key24": "2HretN85vShgGRt4MbLeikG42t69cFw3PDtjyUhzgTD4LnrnWEi1oLAXZnjRA5HpvA5ai6C8zQLAgWueswFCHgfJ",
  "key25": "2JKLBno824MWVxeR1FyuTUoG2HBiKwKEVpamaksJBxWydynjeScNxoVzxXdPtjbxaDZpXQ14yf6NcSanAakWhEzG",
  "key26": "2MQmJdkPtfs5KAQzNsQc6MvwPCnAhBR1kAvPuNz3x3qMjFLU1qBq67WdbVvCq5VqxcTzvwBhZNrfYtCa5Vpb2iyD",
  "key27": "VvaSXTc7BLXrJN58Vq3igSK3h6xNhLQcovbAbzH1bbKCSJmrBV3ps1NboTdy3oD5gJD3wPM1rrAMid79bXQvR3z",
  "key28": "43LNTvQvdSuekobcyroJ9bggYm1vr7s3PUV3e9X369BqEtCkTBrZWhLUX3VcDyxov2Ew7skrBvPgsKyH8sdEzfTA",
  "key29": "2HeSLtcuKV6r8Zm1r9MFWeFDQSVcPedmmy4hnKzFzNJ4oWRdbBggYqU5ndx6r7uKSpur94siGgbB23miXsQK6iD1",
  "key30": "43chq7futAjMJ67PR7w9xkpt4PpfevMnRUFBP5NbGsCchTpSNdqMP6U7Yd4XU7eG7mFJP5sVQxos3aucpnbnMtNz",
  "key31": "D6BziqHZ6fyb1aJrxywBJUJRZuPQJq7JmFZ2sqAq16hjAiyAgqwYaXNYXiEh1btU8CfA3Jpoe927CpvqkW8XK7B",
  "key32": "5U38YxTAzMU6STRWKsTqmy8bARZAzxZVPLuLwDjVn5222rSrYgFfAKt2SaK3KMhLVChrZh1MXrS9z4TPNkjaQ8rK",
  "key33": "4FLvrWJWL8TjLQ8kbJtw2PTKvYLxdyrYmVxwpLJWZLvaCz12VqJYHV7iB18XVy7ALKBwuNUq7vyVDhLKzp7Mtzd6",
  "key34": "2JqQbw1Qvv1P1hmVh7GPESs5z8DTU1Jaok6DvsoLAVryWyzfF54Psc29MGnikHmPZs3UgFZc9tVGDV26Nt7DDThS",
  "key35": "4pAo7qJTDwTH1xD9QfYiWH8Coq7zpU4TeP5rfVbb8HhNot56udscRHkcYPpAC7u7TdSR6DHqXYX3p9XhhPjpKtkd",
  "key36": "41UHL7wBQTFKEMffz3yi6BddVefMAKmmhs12d384hvceR7MK8hXkMdpScduoAiWCMXqyvDSeUVD7MUTWEE3r2TT9",
  "key37": "3Hw9EyXVqtmJmmo34QGVmb7i4qkyK6wWCqtyicK3VSVhqdSLT795HsJcQDkFK1k43Wk3rMPXuQSgLepB2hFJPu6y"
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
