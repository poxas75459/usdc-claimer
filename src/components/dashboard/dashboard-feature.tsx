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
    "3EtnXm4NMizox2fDFpiQ6492Meo4jvwiieahe9qhJDsoNu6UJvQh4nKAeghnm54QGH27X7ZMJzQ3q8guJss7Dmpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EakZcapLv2NC4F6cJQj6o5Y71kLx5enmBXqsxJb4ecACXX8iG6B73Wvc18Chjo4V2GbBQmP8YFbjvHBpTChdbqF",
  "key1": "2csaCedCpHKqpsAicTKUNqH4A1GxevNwBpcmPjjfysZUmZqU7mNX8CEivpEDTDXT93DKXw8eYFH4o136ZppVzhQn",
  "key2": "5jxUriHcVBqUVr1aZJdnwiTs2jVsBLEVw9MVNBC25S2NHCRRy7RP4LKT1GtaiTAnXWmkBVR5GgCEHSZaNe5qwk6p",
  "key3": "5fcSNzs2L4oNRthoVhAPjVaYjZn3AZ9e7ptFwxt7PEq3fEkvZGTFGTw1sgTyLQppWHEpZPPg3kNHx8YWgKmrLpt1",
  "key4": "5K1AKNiPjbyX2gHhLbWe6v1ifs61JhQLXFXt9cnRvz962WjgwYbLJWvUaKMQw9UP8L8Zbz77n5zhziWMfoPpgjfB",
  "key5": "5XV2CVazfeRHmLWGSQmvx1uFgLEiDMCXLJmvWm1mzgNLeNGa24oDr4wXWRwgFD2nuQ32A2oRf1gSCXkSHAjY9WiW",
  "key6": "32PCyu1yNrFSrPoh2Pvx6WwpYuFhoKsLfG68TauvTQogCUCZML1mKqag47fDnT1L1pjh6Z8LtxGUWZ1sXMc3Uafu",
  "key7": "4Dd3UhfqxZZLTpYYqc66pAiVyJS2RMr5r6LJSJ7KM721AktzCJh4buKCZnbKRg4zXfj9d5mAduqDjbuuJUz3Uwtt",
  "key8": "rmaW1EyZHaQj8WAG6CFp7f3EHEyZE2GgkTxGAiKJYUfwQHexQCq67bJCfLCn7HrPTxhpN3JwXJzisL21n751fPJ",
  "key9": "B6bMbiSqBtRSu8J5VpDUMSSNWWTEUAs537a7znTPKnRFRSC7oZpU2kwGUysfT6GeXn6Xh7vY4bV1NeWYBamSLuX",
  "key10": "HRWwUFwoFK5AWvdubLJcwqRRp7jLTA8MKV9m35S5qUBSM7ZTTkmPK9iSwrz5tRPkqxRukaL3ffbsn3Yx7PRFoTi",
  "key11": "46s5iXt5bKkRB116KvS5fw8DDkxPgQcEiA6d7u6SQx6JbDUyMBmVWVMQF3GeB9gfdiAiMjWVuTLt6mE421GrZZCv",
  "key12": "3ewfXXNtuEEXRZ88VweSmLLR5xc2AVZZoKBhJsVBfdEMGAcyZ2jWBtbBeNzcdb1xj7RwtthSSqcXu8wL2GEtwoJy",
  "key13": "5HNYv2G5eR5ixHX4kf4a7wwxKGECvsgUBPVKhZFETnPaoCWZtj53xJ1NCfk22iZJztUWjsNf2ujTTyYcmTV3MJhG",
  "key14": "2ZYe63hybcymaQTWLwzP2rZHPZtc1XuXDPJGCRzRzZpn9YfEMP6QQbQTW1iETYF2yPxW7nVBMSVFXtCeqm2Dhp8T",
  "key15": "64D9Z52pXJvXZjQMRgFHAc8H4gagm96BAc1ZhvCX2mv79TyxctybacbQorzGpuM5yjU2ZNXrbWaBPgGgeQXZdRzc",
  "key16": "5W3JWh4KhHGLt4aBZQd5Lr1qdDzesTB7tZ3bF1DEtGuT28Jt6yEXPaaaoEV1c12iwBXNC2p19XHmhWFPfcsdAFSq",
  "key17": "424vP9QcAAbhoTA3c4qgTffHebYnxXyxuuowV1w44YBu9fkzSQj8gzEsJnr9NYgYPpLjE3fLGoTdoLfa9oLDTLVr",
  "key18": "5sh8Rrzacy4mzPUc5fihkFXtyDzANtCR9BbPFYS9wWSnmoFNrikHNLvs8oLcL6c3ao9aRxDembYR1BVcmtJgDBTk",
  "key19": "4rAiN6QTBqfWXKPT5EMSAzZE1XmN2fG7JcK9iEsh14dkLzYiNoDF17UfkTjkPNp7EpK3m2kkQXYYSf7hgtturzDp",
  "key20": "2w863ohH85zctwiT9Jt9a3siV7R8hLC6WHw9Zsiar23EHRzA5bramYym6NsLnscVbVDQKF659cKs8TZdtTRJKfPR",
  "key21": "5vEqBJfHjiArJtqDE4Lj3xGU9Yt6wGZgJKGnb9TLLQitYKdMy1eZtA3a9BvazdoF5sS3aQdtj4Y9KyWQ4ekEPumT",
  "key22": "es9P29573CL9Ty34Vc228zqfrkHewU7bA1eUakwAxwsUNXdwYtua1gAethS5R8ZX8vpt8KCEcBKwxGttxtt9j6h",
  "key23": "44qU5BCXsvoAGCTbxJHwvy4GGmAEZWUjgdfAKHn7isv83yzrtCBh7Aa99nDoTM3yTr2qMmxfBmZNQTUTGvNCFTdC",
  "key24": "44Kca9VTRHNPXnLa5KWkyFGoganUdeSiyKxoWTjZ481XYcw84DZJ2zoBQz9fSJZF5K3Z3eRqZzSuwefePK4RRP6J",
  "key25": "4nbbMmsTuEURFo3U67rPqjRpDMe5L8fA18nJQoV2EvMv59SXwUcdDm9hGVpcxPJMV7dPN5eC7fXS47qxbwK2dfQF",
  "key26": "4iRkjugxRQ4hSu4tGkTj9EMSN23tk3CYjoSnJE9LWrTvyHSKuwDjHJe8tgiPAhU78p54pHCUV8MNUKFagPVc2mLH",
  "key27": "3ECXjCjAQTTSdsh12g2RMDxTa6enhy6xhgCzftztyNCSn6oLspgX2ACPjSQ3tMk7o6fzVxgEX2JcjtBnBN62RKeq",
  "key28": "5NBzZkMunh23ydoYGgkvCt7o3cjhcBJoXt9gtWoedDzYZxXtk7u1YN6UQt7SpFf7iRRZuiWT3yJ9To5Pk7owwnME",
  "key29": "97z3Wy725twmJsrMoGcGS2uTEEL1hyNFfu78BHZRwV1gyJ84PV2jDxHt279remuTZhujM5yN9fh4NqFFz9R6mZy",
  "key30": "5xYmjkXPTeG9DrnJjZyeNqJqtcpG8rZCJsFdFpx1GXB6jhpjqKsTHEFPM3raEaX7nf5xmVnzFCGBGXYZBwV55UP9",
  "key31": "9nA5K96GX5bhd9chVGDQPTXm4P974dj2FSrxn1BBZ5T2zqYk4gNDLq9uboQogb9j5GoQeiBvAH7GqGVS7APhKxB",
  "key32": "5nUaj1pdKWBMBaWnceUmCAbbL7ysxt3DBUp4Wejup5YapbsFBJYbzNMbSxFRDCyzFxcpSPHWWtvJe9eEbtiDuGd5",
  "key33": "331NG2zKaeWRZ3eqAUsKLts2krtBqjMFF33oeYhdzCnsFsFeqxYSmqjsicmnowNXreDNyVhqjJzCMqw26fAp9SVL",
  "key34": "34XgaKAg6YF1o1yrbvBt5dBAar3yP9KfDN1xGu2UxPzssF7g5SpYwxozXgbDSHh3Fw4kLyrZB6AKJGu9YEVr15JW",
  "key35": "393uCLRwXUd2ktYo7eBQ4UUW9SC9M1XxH8NuJNtzyy6XtVCttzuvBwdSi5PSUvPrTa1CaxzbPDuakH2aHv7YDCvo",
  "key36": "356FgtrTWKykgAVSBvs6CFxJMnxYcFv3WWAHcW6EZ5ct8WfjveM9ZNg2YvLqCthE8VFVvTKLVd94uUJNzoWxD9Jd",
  "key37": "5bCGYVEVG7N9y4NTSqtjDAoxSuuB3M3apGKxmpo93D2n1HnCfrFUP65jqZkNH1oPr9Lii7SFjjj4qCgnK7ZXDPW9",
  "key38": "4WPpfeTvbvZhovWCmDFajU566bChACoavrkyZvh56Bfv1cW72Mpgu9rfkhoXKZEASuyAiBVpv4z6uK4Eh4L6uJ2a",
  "key39": "3dnTxAmwDChQAetdPcQTptEuPoFkvqHsBdPF65dspWHaSKo2CCu4snw7nvMmABCw7SUZQ5Ujj1tV9BjtUqcu62DU",
  "key40": "2AXLoqfviVkAyVQEwFYKZWKjvwJmnKUJkharu4ct86UQvk9LZUzU7wxdSwHoHbbdShaJFwHh2GZeYwVQ9xoKNwb1",
  "key41": "2MF7t4cY78vSpWxPNdfTo7Fg4Ux4qFStLsg8sdwSWPSUiCvmRbtqMeARHaTUFjuFRUFawuJSg2ZX5ciGQmGbpNZw",
  "key42": "dgYcybSjXiAjV7FXxKyhGExmvRP7kdXMDYmEDi6n1gHHWfGdKCKP3FKfUtBZneSauNzcz1yGDpJkKACmFKTddDY",
  "key43": "3tSP3GccnfgPAEd3HaEEtTCp6JaFKXg9CK4exDQJqPE1J8tDpDqLpcArofqfN2YqaRppCEv3hBA9TGTk63hjmgq3",
  "key44": "5LAeRLFfwzujtPJmgWM8Vp8Bnd2v4nJPwyPSMeqJh25Y6JBEYfTmWRGmCHee56GPgcTwCsq2JXMe3EaQozH8Yxa9",
  "key45": "KRDVXQwU35mmbfhvUSNa81gSwypy2hzoBV16MsVB8pePyixKEWjkbeVek3iDwgobmoxMmHLrxWGZyoP91U9FKeH"
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
