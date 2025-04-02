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
    "D3XkUj83sMVbXMQgRv1NdzV6mFLRsYBaAfH7V6ENieM9fYPkcSCFk3qX2xjxE3GfyZWCVTTbscwT36KzjQqYmCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47tYDoQ3EyBxXAGneyiQwGe33CFxqRkHvoqX4zJCiFzHuiR6B5nAtnfEwaTD7FThqRg7GR9oS5crjf7wAKtv1KMb",
  "key1": "3uCZXkGTe6DgDFwhAeGBq4bM1d7Z383FD9ESeRztiLsWRLxNxge44PGH25XxgQqZ1wYY79Lo7mRPQTfMPvNzrUiq",
  "key2": "2qvhXMCsk867Hirq9U3cpt7den6gbgyXpYBSMVa8cpH7F4MvvCC4MhKqcaMt2R1iCvyX68sWqKN1cFfX29DKgPpf",
  "key3": "o9onTjhqWxScmBHyuuf59gvUqCBURboXE7W9GSz8XTa5cSXfE3q4vAAKwSFikMdQYdjXFdZ1aFGXMyrxHDe35Ls",
  "key4": "5u3iTLZFfscYsc76xuzBaqrbvarwCaoRfLM2nLWbvcLwMtwkC19fEr6bT5VRJVRUDPuJiLJAGiJv6GB33CPmnv9X",
  "key5": "toahySkLgbJvMBUwU5kw74YfS3zgBiVHZF7R9Ht4ve9RAnqygn2zZahr2MdDWAGFCwvxaQN4GTDztWEPKTSEr9w",
  "key6": "4W5ME7fzs7eFNaYgJ6NRxJjLYnf7KPx7pt3qyyq6kYZ5c9f5crNQGCZs1Wup8j1FajTUgR416J6Hbzp3JQ9W6mJo",
  "key7": "2N1cJRuJ6xHHgN6xwwcGJt2NhKw5dfgaSia6PXvPd9mBSDDCRJ7fEQrL5zLeX69boN35FAHLh2RFHvw8X4vYEDmT",
  "key8": "4yof6Fftc3jASGHEE2mo3b1efd7kbras155nw3Sdyu4ApjCmrETYoZxwbo8cptdPT7khNhqAkHqzrFpPojwJ849j",
  "key9": "Y7LW3wqKicCyPFZzFx1QirS3Ls5WoJ5tUMrztJJcYSvtjBb6ytzgixiX7Wdfg7jm7mw1yZoTADemUnqiP7US7Ci",
  "key10": "2at7wbLQn7fGKv7qfMnMwjjbuVrxQjjHN9xm6zvye37ZUNg7xgXgdp688goezgthAzFEdAzESU4JMHvkH8AYYCFo",
  "key11": "Gz979ypHEXUWBxtsPPsAvuBhqghpDMt89YQibbZntasaUL2gCCmKy9XmZQ8UGqecDC6Acrqjqhxb92bqmbzYz41",
  "key12": "4UntSJmWMJQoy4rkod3PaetR3pnDRdyRsRURtPhxXrPPe8Uoq7qc5dfMRc14VjZ1KAXeEESP27XciyvS6VutaXzP",
  "key13": "2Yp6zUZs3oZ6BnSoMQ3KY3ZUx6MhLUEyUBGAC7ocTtFxGckBiZo9UyE8ksTWJLP7nXRRVzQHViGXERXd95G8KuHA",
  "key14": "48Nuz4d2MCRFMVYTzSsjkghx48KGCJ5AXwfh4om6E6Jn1rXr9gPHurqureqpC7X3SggyJqjEKvA2DLCR55W4McQs",
  "key15": "4fqszvWQ1xmET7kLuHNkYHmH6Sx9kLN7CX9zttZope3DvJc6ShUjZK8yiWLiuJ8pMH5C8x578AhChUsGzs2SRAtm",
  "key16": "ipshLquYRztcRNoCULdDFNTjAVZ44qWbgrRSGYRqwnfck5c6AZhD88yr2CXN83dtjBy47UqhpBiKkepYZqJk97n",
  "key17": "2J4D34MxEGARLVEdJGnMqKmJwfh4YdDJdX45r3Lkr8wf771E6xiJayZhA3FpLiDM46xbjCq8EcZPs3aJFziERi9T",
  "key18": "5yPzP1AvjVZHd5dWdbbvVEpCvgZRWCdriHuR6FBMXezozfMcKqwPRQYYGpEduziKScUUteb21ZxgvUiNbkUSmyZv",
  "key19": "5qyMVBE3DQcvbxRdFoNufLeurWJoxQpuDGFRx65gYkGCTLMZ68MJrAxazjbkoVpjGizb8Q2oqiVhfgKxHe1UNMjR",
  "key20": "31LhxmXr1qGfs4TA4JguT27t5kSPhzSZS8NVenRysG5LP1TQKKDc1eDMBgran22RLeacrWM21A3q5zruRexAUDSS",
  "key21": "36MYBJJhLcqd2b5xns9Jw1ShLjpJ1sdiwedmUKRvmaLBxA58WdNJyaEsnodmZTYvbFndsG2ZswZtrKpxTRmMntQJ",
  "key22": "EtciNNKBhjSWm5D7pKEeSmEVCrwoDy1xTKujMNgbLLQMgjyfB7nfHjjZUaE641vUtYVQj31wrwvzFo2y8QTrZ9i",
  "key23": "qEK7siLtNXdkvGZCx2MipFc5TQiy6tmvokc1unjktL4erBPmpz3s5weaGCjHgpuqsg3Ua3h3xWnaDkq4hgjjuo7",
  "key24": "4JsQDpmwTwuPMb1Rrm3gMuCdtcRCfVxj1X7uaTpVoPJwchA7qutvRiyjeRLUD7mQ56P8fhoFF3CNPUkpX5WPPKaR",
  "key25": "4taNiCxsgZ4wA3hBFFxDhTNH3eojnGAe3B3YUmuFmWsZKaE8rATkMerA1K1f3PM4EU6PfWFK59wCGMcyWuHeJNzm",
  "key26": "5QDP56QSwFpKTzS1Gz6eW2SWjqA7RtNYZJN8n7x6WT9dFmVw5zus6gnvCJKwDWDTHTEbJKXL8dB2fBG9boaM7C2V",
  "key27": "2vRw5wapYihmiYyF6Qmmicf2Wny2mgBqFTfios6sryXbRTvcQqmwX4T2cav655c6dxAAaafoUtUyaZAhLVYzGg55",
  "key28": "2ZPbAT1FshE8j9zcmpxwCyguGSXUuGYHpWGiyRpAg9bAf5ZzLYrTRNfv9pdaRr2o3QGsa4GobYaueWnJ5mx2gbsA",
  "key29": "4wkYABJeuvsfiEVBASy9itdYMJyesKPY6xBK3D1FrCwNRxpzhcWsWrF8dUhd9MTQNUeMfYdupbuHBNsoSNSEnA45",
  "key30": "4Z4HfNhNj3ganQGYQDpBBxtxoyuYtB5MyihaEVQvNXdWtU5Torn45mZ5qacvu3oNsvbZjSB6YA4jYKiL6e22dDJ7",
  "key31": "7w878akHEUJ9apDsJ4Q6AFTMeTwchJKHqWut1F4MPK7NCxBDKSynH7L2ojwqzGWNwmGFAvn1jAgmtd56LH6CjwG",
  "key32": "1wZMDArEnPJpzg4sHivsjhp2jmRaUPWcPhhBpA31FCg431ZH27q3opnW5Z7Y7RKpj6kw7wPr7yv4VEPJoM6axJz",
  "key33": "2jQsKGjMUpSLJkC2pDKP4KqRNtJrjoFz1h4VoS9uJ2E2ZCjFJbKd5fjJ8mYrqGW6F6DeTaBLJEkrENeyGmjxfTBC",
  "key34": "2bjTpPuV4MZEKG3hyZ6xKquHHpFtQy97sK1oPg9J3yqGS2rs7k8ngDWjxEWQWUn4VNKwhJW9UNcE2Hr6nvbrH4Tu",
  "key35": "oPEsBkBqd5pNt23Ho1sfK2PbquZWtwUgDSRurarbQHQTZ3Ks5PSihWxse4hvXxSZT2G7ipnZCKSNsZGRhgo36Yk",
  "key36": "3KbepVv8WeQsx4QZvgfEz7ePkhF78b19XnFUnfcfzTznafXD76wwPYkxzAxjMLF3WdnVtSutk6XdUigHayxVXZpk",
  "key37": "5Nr4ipTZr4BqrDyHauLVM7Eg4aXVDz3JP9ZtX66HMBPWy5xDm3zLqddKanRRqh7F8NSXMfQKrS46mkfxHoS871Hm",
  "key38": "4LqstKheDh5bn5vKxtVvWEpBWp1EvCPM4ZiVda94ibpzv7XbQhAQWq7UeGNV6q8xV2C3MeJ5Y2zrow2yRiuqQcnP",
  "key39": "5ZEdZkLpgtVoAcE8cz71B92Tr3Snea2DhMNSuwVY8MYsiNvd6MEto6fM9QBJuxfL4m6okvjaE3ob9UoeqDEhL6UP",
  "key40": "xLBzdVhLaECwX5BiLs9crdG5USQt6uiZLyErXk7AFERMGSEVvTGQvztadsVsiDDdXj3jrTpd87k1TVEP5isZYth",
  "key41": "2amtCzf3e2f3GCgErLmMZ9poWkJsGLZUKcwzzy1DNbk1ZMoytyLDK8QTdfV2khfsKtN5qmnF7r6n3XK3a6hxUYWT",
  "key42": "ihTDhQhycyFcZHNhGXFv8FyDqRL9rUr4g4vT4xNtSUQ8EmjHamtFVANtFaj9kS3GZUeC9oaXWUCBQdyvXBUSo8J",
  "key43": "3Mu2GMCYMoFTYFzbaJxvHWhTaxHkirUurR7bKoRns8rjfNbjUa1tdB6yi8U9jFCfTaSqp3AhgwZbn1diPyP2pwD6"
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
