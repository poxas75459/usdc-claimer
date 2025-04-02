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
    "4YJy6JBn6hJDB5Bjs3TAgdAmYxvuA7VuzSoopUpmJU6SmVTaTKdmrTcv5dBLUAM9xAUK8T1r8jvyHFoQsFA8171U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qjX3dqhC8DGkas1tcw2sXJ4e1hnp3E4gU73XGgDzKDEZVQNDGmab1ifpHu8r1JcH26NXRtjcrSthnizvcsrucYv",
  "key1": "58wprSyd3EXp8jEJfC5wAYXyystMLFpExeP2gYuLHn6b6ZUgeQ46sZT9nwRahbxFrC42vf5snoGJnbuD3pzhwX51",
  "key2": "4FD5F6D9cPAxcVh6BRX6cttVX8pXjozpGoWo8toykUn8Bw6nWaruopERh3L9hLYppFBkKbkP3kAPGCgSyCgExjFp",
  "key3": "2FhXFqn6f1ZePUtw3M54MAcKN7Rdric8p7sZFxDhi9gGEnpUupc6im7nUojQPHkN6peDzLgxZbeHVKSf9Tr92HZk",
  "key4": "31oijQcg2vgKdEpJbRSnoijubFTv2h4Cgc7WbpnBmsKeNxPqAeZ95jG4X5KPR1rzNXGziZQew57Qk9kYuu284bv9",
  "key5": "3n8qyNJ9pWD3Gujy8nb4HCExEJWQLToxGvWVqf5279kHTd2kSUhzMK6NPqLa5RR9f4kpyo87PbQbLmCbZEg3DY4L",
  "key6": "3SKR55AE7HfNyKCtBJD945ywQarHKA7tG8QdL9jKgAMBuBEBpChHKZ7R6cp59EwwYZkWzCVhG4RPwt4Xmzs4TfSo",
  "key7": "qxU1aqfMtdL4CYSogpd5fwmWRHcYrHHQ6ruvmg2UfTNAY6URKRFwD5PBhLX89uDS24YHDH3PxBijc8nZGnzxN5t",
  "key8": "4tLbbXT344oevXyECThNNvWBNzBsMsCB8Rxft3Xxy4QntTgspHZSWDMiQYZayAsHgHhrvMktpvXak4JN1rBZgf5V",
  "key9": "4bqpy7Ar2PT6ePB1gJGGbT9Q1cby4TkSJxixUC2sLgQCLp3Zhmv3Wkh5RFkkhzTGcKqcxXiV5hVH9c6pu8RawJBz",
  "key10": "5dq663r9YVv4suHNeEHhjLDv6pAPyhbfwfEQLQfYD28ibdWozHVSja1iMKFGwfbr59u2sr3SFzgG8Z9x2ovwRKs3",
  "key11": "LTWkML7kDcMSzQP3zYmTSfUnsr3hpmH6Dv8SqQExaKMuVHsuyYRFKXrG9t9oB7WwqWeVk6kXSsTv7FS9sa8WP4X",
  "key12": "588ymhfWDXKUyeSn6FgvX7RD8uk5zvm2y9dsFRsU84hHh298Pj8tWni8sGGE24TimQnimPg1YKhcQ9RUqr4oSwfr",
  "key13": "5mHVYDDfvuAmu2CxW5nvMCBSjKdbpteRjF8uUWm6kRCyvaeCqPiuMQPReeBQNSR5xpLTSNnDrK7XXXbD6n9YkTH6",
  "key14": "3KMBaPuhsp8J1uGmiMduzyLEnJyiWdm5oBJJkQgar7SGPYPNnRSPArJjw3U2Fm8JV3CnRPspFWVTKwCJqqWjcR2M",
  "key15": "27PayqHtp5ksxEUxGiWhbUuabsUrUMe9pZXq1EJJooPcVEhaQvUAASTN9WyQuBM9H9qdAkAHdXq15kpKgmjTESiK",
  "key16": "5PPrHzUE3p84123qHWiHcoY36esFfXpCeKcidkWyHML8CYG53FsJeERXQnpPF3NTCBmxeHKmFCjp7KWUfzwMZSW4",
  "key17": "4dcQBv3keCfpeWMs7qYgBt2WJJqq7Bzz3X7AAnP3F1DzcBvbsPmR4epzCMFuWmaM21UCu22hWmJK17UU1F2oat1e",
  "key18": "5fNr1MKEondBLk94SG2XMr1f34xGqCoBb2fbhq2esesh2fqzbqif3N26nV6hM9yAaZm4gu43t547gKMCHMQuwoci",
  "key19": "5WniZ5xccWapzG94DDHuhQXzV1tDgrwFJCCpQwREFix6UTneJBC6h6BpQyubtyCBfPxGFzD5ApY2nVx62cFgzhB3",
  "key20": "5tYkrnoSG2LZSzCrSRBiyCigWv1HSKQcbL8J3Et13AqDGRdEP9Do4BVqrTMcegfmQKhXT2umd4xjGqaHzFohLPNS",
  "key21": "448KgbBM4s1GFpGTZaJa5quZfLP8rLatsg5Gb1V1RjQsGDdURyispH4hFgsBrdfQdyrvMEAwZ2YzisNgkSGTyoQW",
  "key22": "AhavAQjE1HvCGnzdbLtW8iMairXtrBhdnAawTm2m4JQSh2LwwAWTUEVSNDpnkxzfQkDRsDT44qxtriBGJxi1pKn",
  "key23": "5hdJDmauzNFnbWL1KCFL449z1TKgTkUMP4osimQPFopiKGcWbzL7eTExceFapfNBb7EJgnZGLR8LPC4wRagHnXy5",
  "key24": "4h7EyBVtMhvaiV3qity17bcfjjZpDXkUqTVL2dvpV2uU4vn552CBZKN4D5ucsXCZSCbS2gc3MpQ7GLDdcL35byGq",
  "key25": "2kwiFLb7HFsej9bkWaE7BVhBWZm9SbPLU7DY34cwsMxNAqVPmVzAYMcz3sSpqyUzjvteBnSuCgc4pAoZ1CnhaSdp",
  "key26": "5LcyLGFgBCdm27d3znhnhu5AYd7x14vH9g5Hd1u1J9vEYcy1mutnQHg8sV1bQ3RdFsHaR1ANya7fe1VzwXmEVGsQ",
  "key27": "T1GXhs2mp7Ri1YqNf638p4cQuguWep1rPERYc6VUckVBbbynTZLL4QucKFHsMH3VEFYE9V5u19fVBgfgHTA7BQV",
  "key28": "2EFBQUyyzdwkcnt7CmKSU9jU4MbRPpEyDg3jE7T7YrBnFXJm11mpKuepZgQY8d1V7NCHhKwpSjE1xLUFHM4vh53n",
  "key29": "49WR1LCdbyu88XreZiYU53HcCnV5eFZyiF2ToyxqcvsRqy4aksE8o7NZr5w26YDkW6dqeKWiRp899kJRsaQAkd2y",
  "key30": "5B7CbXesnJgZKjZCru6GodQxTejmzKgsmcGow98i374j6X8KeuyuKMx7b2JuTw2PTax5wL3u2QUbGy2aSbf97LtF",
  "key31": "48zcG8vo24BmhMpAtsg9iYKuck3rHTfe6irrrXYxi1Hyq7pCARiv9B4Ts4d9eXJBeKwaGFozijhpCVGb9UuFWqGo",
  "key32": "3RQzQMvQ73BjiqrfrTk1zsvtVooQ3iRChibZPvns4SS72RAsNTZvH1593VgjQNjWHR4iWyixzhpbJ3xzL5wuDGWK",
  "key33": "4VByoQ5HN9fQLEajcuJfLi8e3HmvcVHe6GrjQqM3gBRFBXF2YZnswP7v12RSQp3b7J92LWdLbRbeyjYJTMrrR41R",
  "key34": "4bzWbLn2k9JVjjmwC84ygNv9MUhuugUY4rDz7WX4pHQUJt9y5nYRTZyZVBwTuTyc3VqFWU25BCn3LzDJFyqTg6YV",
  "key35": "3gJffe98Z4SFeFjH9dgJNVyHQorPcQBFttYZt9G8syYHkt79PSaq7nQDVyG2XsyfeSrWNuAT4Byn2L6E753r1jYS",
  "key36": "2D8SiuJE5ZXU6yfsMNRSvL9UThU69TaYtqjTg4Dsq5kJFav9RndgLEZt8KrwiAHV9Z4NN5r1AUebjjKfMEp6jx9B",
  "key37": "3fbnhLYunHRDmCTQdYVrAP2jXrJjznP3C2XnE6NYUVW2sLXo6jxzszcYo9qdpGYZxe2d81t1eW3Kxaht7WKBRXBy",
  "key38": "4ZR4s6Dm6iAhWNVoS5gZ383b8iJATfcWH6Hf7NJeqUGyu86J4GWSEPwy2dChu9TmUPL35SZgXfK8bG8njVhpQ5dD",
  "key39": "5JsabbwqVph6kCchtotZkk8Aqyr55WALKYKHP2ZFANcZ9LDMTS3J4M2TZ6vQBv1hZ85MKp1Uucm9ZAcUo3yHxf15",
  "key40": "4EhGeffD6XwEN8h8x6LiA2mmWzo2ZFrjmtexNjR17RtZ8pn8CWyaFXVH6LTMgScYMiZAhoz25JG2JmrjckRSTRNR",
  "key41": "2tuHXrnDa9mUD1GWRVajQw5inCrBBHNBpyL1geB8NoneUJnroKPk7SjiFrTZkqYALKLMyPao5k3V3sGWecfbndEh",
  "key42": "5pDTALXosy6eqTFH2Lk8AdhUcksouNCeYa1uDQSPLZFyQc97MDduYWQW3VWqgSTwMDT8DpVY5s6z5S5z5SySVE4N",
  "key43": "wR52m2wEGjYpkqJiACBi4d1Go3C4NgFtxrVnUzTrZaS64rF6VuFjNtF46UEqoWWXxC8kDpeJVKqtpLvbjPFJePv",
  "key44": "2Jv2tGuPbULVhbGz2ZwwTgrTeUkp5n6zXuRJPRxbrh1yjAnChZ754oA74cpF2p8tPfrqXixKkkfmuZfSLoJ3froS",
  "key45": "5Lgsbd25434q1G1pKEgD57wbKYGpxkP9JxNu7iWKpBLbWwisRxgxpcBBKFKuMJvbaPrhspdbr3T5oPAuKeLFcyQY",
  "key46": "4j3tfrXQuoDwkyHJSwb7cRWys7jVBrfyhTmz37M684NJqfMBnDJvxMmEJJ9VAwdS1KQDTeAy6qosZFrGG2yL161J"
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
