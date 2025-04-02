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
    "5ECTPbGTXJ6emVyHY1xBk7Jz96bMNDTABejiNstfMzRSK7kRTMQEzcTUcxeHWgiJ8qFAbjJwJDKMkcHAS4SwUAWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xVPnyYVSrsgDkRnG5WZWvfcBo73cc3e7XhD3xnoJ2AHQ1iPZjbAuncqDd432T62Ch65kT7cffC8vHSo4cYkw5ie",
  "key1": "41RRkSJCdXhCVUfKTJaMxQHr57JG4QcgUxK3dwCNT7UEEUH8eoDuoL73qZ9E2AHtMg1G5Rttb1n8KP9dJzovyUzn",
  "key2": "3thcMRHbYx32ZP7QK5aiYzocidzwdMQNMDGcF9g3V8hvu2gTKBKPQxrsVNtTXJGBQXmMNET2hn6bZnYr37S5j5Na",
  "key3": "3SUQsPC6HjSGHzvhUeooeYGqQxKgjq6kvcQmpJp2oomeU8X6PMCAnWFbjSCbrbxBtF6MpShQv5eCw5Mb8WUAkR97",
  "key4": "6koXLVWc5433V4ru5j5SGAbDGhKDt6VNdXsRAkvX3WbM3et3K9EuocNRkNdJK5ssh1yMZN4TwXuhvXVySX3rPtR",
  "key5": "53JMcfVce1GAepWS5JFnpxBssrHUauXRPoMVn7akiwaPbmEgDrg6Pwm3XB4aFkhofhsc4fbBCAh3TfgJnGNxUF28",
  "key6": "byEGHJeAA94CXeqDdHiyzxWeDrCYUzwYKBfxuvN4X7kLtmrCnpLFk37mSxd7SLVT6dwssaXeTUMqLPsWJmidNjb",
  "key7": "4KrsGGQF7x61c7JqWrBbDcBNP4wenbvoxypRepjqRD6x8RFuey65D6WhDg1pooK3igsF9Jz2NQN7oeg1uDeBSDyC",
  "key8": "5ypgikcxJcQYA1ky2YhVxiAo8kDgZrzoWUc3MgPvLdpHvL4HRBXYtX2pEuH9Mx2Zm8QsF2p5EN4xP374ShWJ6aAg",
  "key9": "5hcdgrY4fpGvKFkxSdGzeRtRQDYbNrRpeCC6A2coLdRXUy6wsyCR1gvqX8d8ke8W8esXPTrzfk3kY4PuEBYX85Vx",
  "key10": "2kaKHaL3cJEExZyif2dKGiaSGNjXtnFMCbYUWfb179DPi1ytHL6Vb8UBf3HT5ivufxfTLfKzDUwz6TLpvao9KP5S",
  "key11": "5FK7VuSS97qeinpWjQxo7D2cV4QTLr4zsDUMeEWbt8HUKoDk9sfQh9ckixsWxVpGot73mGZH1janN3bxzJ1G5hwh",
  "key12": "5zLv4jZYSPtzwB5qc1YJcBRJtU9eYK9dBGZ4nHU5WHZzTK9onrruXnAxYdmX5dHySm4HjfpYTUaW2NhUaeCFUdC8",
  "key13": "5ULpqW1MrZef5QyZe6J9YZemAcevcdSr3bJZeHvHQ8gMCv5YqaNoia75nns4aCaq7m5QQ4UHJjJGyQqo3HVGSgs3",
  "key14": "5AnMG3upNLvbDCVUVAhUEBrLoZD8jkEj8qGEBAsySL9hZBcmGry55x4P3DaJaueP3AMVz2w6DdDWYRrovYtzu6rT",
  "key15": "2AtC9ewVewV1LQRxufU5HSDXRKJ7HNsMWAqEPkBJGRqTM3xKhvcT696Nv3MYXNx7HE9Px6wSyFSQrAjWjji6uuXP",
  "key16": "5QCcMNJ8E2FcY3CVY46XGJcpYQ4utN95oSUBQVNn2UW7gbsTgxkj4GyRmLZx4tAQMy5i43zLyJmqn4dJDdqmi36c",
  "key17": "3VSvQFGVX8UYKXaSUod54amjXySwbshnve3VbpQ58SaGZSSXQHCRFRW9QjVs5Z5gDmrwZVBfEAGdFkJtnKZbCN5s",
  "key18": "38kvCpf6W281VFK51JvETa34jhVuxkCkgQJvHEKzL5tpxuJqUdg9r1D6DphMpxCKtn5P19XVzbt6wC2NnatrYoBk",
  "key19": "3KW2reUdmdab5ahVTRmfrbH1y9274a9dpqvdEyGGmwotcu8Nx8ry8b3bmdQNpphYXan1xiubP5JzwPUe21KS3pPC",
  "key20": "57AYvo295t3mj32KYGLUto18WMoR4cucNZ6PFhXDtVqoJypWc1yRnGxu2g5RbWFAPK8gtsixPhiueiGT4umFzGJx",
  "key21": "3LsbnqGEHwsaGqAqEvJKW9S1o25iXAWUy2i1JN4HCv26yT8pUrEJWiE2mdGRZ6AnrDV6TKxftVYvCPeLVtdfvtg",
  "key22": "Qqt1ZvzytxqFdDHeg55obQ3tReqgWyQEW6nY9cZfav6ZUqf6JaPxNkXY5fwkyDNcTNVfjayiwwoZSTeLQ57HjED",
  "key23": "cXPGeEf7TMSz1UQmLb2REJHu3Mv7xSzrov3cWup7mJYqw9JopK7GqX8UYubPwTHf1wGvbKVcYpEwJP6eebr7NkL",
  "key24": "62zNAbMAvCPWVK2ASzVSnCqF7EZcWLww25ipNGQcLzUGBVodnn5pw5vqEBxcFcWfztCm1Mp7VBMGSuc69VSNnTyp",
  "key25": "5Yzy8d8b5tXLnwAdBF2K5mMr6X7P1aM6xrNHweAP81tPKapCEevAFjnw3dJQWknJE4PmLLp7o7f65JFAbCqezPx6",
  "key26": "28xAcQRNCzU5mJrbRmWrxwApZN8Rs4gF1asmANz6qGAmg1n1ZLoXbYr2cdGEv2YQZeDW4dS3pHsuox9KUys2rxdh",
  "key27": "5AuFqdd4Qxqw4B6VTLXJdfv6eMnw7TiinRfbtWXZ94gDb8nCtVFiWTaEbbh6hW3cqoQofApVJWqpSmUfGSEuMK6G",
  "key28": "559QiNfWWDnpEL8dnnTnmHuJD3VBnZKbWVr4HeYXAJ4xGmKtgbjkACEzPvNd9XE5ucnwJW3Q2BA9uKjuV3KJfnbJ",
  "key29": "2XhtqDQDcXhpLDPYYt9y454FMxfr4ZioqBcXHaBkzPm4QsQyHA7pkU2PXXy142UnHD4Hef3KoEcvunHWNDAmrHUA",
  "key30": "36d8LsEGPqV5yQGDykuwei8B2TATCLpBNK49doU2AKZN19EmFZo4o9BjyjnaUx2g5zH6omwqcYxt9nYutGLhwDj6",
  "key31": "XSSnfLDaBpdzHauAEZknQMCb8Es871ce7hzGKMZBdE63AAgMhEP3vTyEjnrFjbhAaB8qQFt5aCKLPD9qdBUkCC8",
  "key32": "xksjXFwX4EbFBvJWzQjhWNJK68VJmBtWNqHoS27L7XUXbwe8NuckaZPyhbhus9YZxWjRNNHP3YXmZLVtsybR2mN",
  "key33": "3NMiinrniYrLx4qP83XowVzXbZdrqvdSUSWJ2tGbeuvBR7pZrzY9U5KjRPN72AXSBfGn9aRpekDQSNn8QfKrVPZr",
  "key34": "zmQ6GcZatYnTS7gSRAwF3aVRr4SAVr1gPHSeL79JbLgmgxXWyw2ymarCkxCnnEmJXsr7DhVsG2zV3bnfaET89um",
  "key35": "4xzFF4df6wsQhJSe9crNjU4CZZ2jgWsm7VxcNUGm5Lo3enLZZnTLfbMNJerzwQED7XbZWbvU9rEpDgKAqm6JT2Ka",
  "key36": "4Ltd86t1SWX3v2DrnshvHdFCv49tzuYS4gvZpRCzmZadx3ZQtERU7zbv8ygCxGviuCPv3RathAGuxCRt7BBVmey8"
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
