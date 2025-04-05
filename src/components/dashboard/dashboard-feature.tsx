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
    "2Gp8J9gFsvaEQh1EQDzSkcDqZuU87FkvCCGSjQNCfxUStMcpkMFsGn1WYBw9Mq97d6PoYwkrKM5HfCv4zNBr8FqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XPw8Tkv372EBSreUURyYnx9Q3yzPAYtJ46rPVLnZWXWgfSLWWWqChyspUbxcB2qZuVvU5YzQBhSpk9Ec6AY8xvu",
  "key1": "4sFQdjGmURnrFhfA9LMMqW1S5zEmPeofcJYSZZGazNaoWWi5uDYhG6hSYJYgEEPqazvEkWoE2BXQE1txsB9hq6uT",
  "key2": "5WjgnATGMYkPU3Pf1fnHPXfxecHZBKtn1iMnBuifR7k66soDz4jJnuztBQcJgGK5yAthRA7eN9NGTu7SALLmuK8P",
  "key3": "tbWXJvPgxPossTAL7JJ6NFV5F1u7Zj9DHSkxxvRmBHSGARj1wMELM5ee6Lt1LtWoZtnfLFfqeNSrN9JLBa96M6G",
  "key4": "oqExa3WFxpj9n15A86xLT4oy9MK1Z78hNxhVUAo89BLF5zXMxrW6QBnAwLBotUGiR4TRcue4jEWViB746Up4QsZ",
  "key5": "2g6nVmxKMw6a7SvTBxdoXqMhWhSCi6QAkqu2e1QYiiNMnrhV4UD5hxmnbsRhNHqJZd4rBDTU9XgRzueemaWPe1Eg",
  "key6": "3cBjzsrYLaWso5KuycHmNaHeVBtbRfZXVJeFih9oxPUZ9DWbcqRzuNJsiu6aWKsbCfSwCirdica6gLVWMKaxjArx",
  "key7": "2BUg83SmwiubkPH21wLnmEzAkQZGgTjz781q9WBs4S1eGKpaqyMg2zSRGgzEa4GvfFxSf2dL8UEvE2P123rXmAc5",
  "key8": "5mU3eXdaitPr672mcuKmBT23r4W5Yq8GqhbEV8utcDtHoSaTaRBm57235uDHGuW3DPjk7zEVKsFzLYMiPHbyM1PE",
  "key9": "29ZMdpSfNk3qoNstTQViBAsCxjtJDxUh2dF7WfE8xtSN5dbWqMEZznf9RVfkFLr73cc29ewiyHxWcmVHbaQye2Zw",
  "key10": "4NQ6pYqTQEWxnytMBBhZD3c57gNENaLwuVKTs7s92Lcwjs6hSLccqtiExPEbxqazQmXYFwgXZ5rmtqatTpdMucwW",
  "key11": "BNhj8wdXEXzw9svDZm9pU2Q1E3P7JM3hBjfXSuT4oA6UVx48QMyfN3bZZn27iS8VkqvhL1hXUKPAuhFNRLzvsjB",
  "key12": "3kp74k5DoGb49E1Qh9hF4BUUS9fPEi7TgsyAc4gYaefuXAAFrX4k12nrT4T9Yx9ZS197F9rWnimj1FxMLwEFyRph",
  "key13": "4bvptgh1uSr5miEoZ8HsQrP7KszkzfT4WoPczeaNt2TSfYjSD5dUmSVSeGHbqU46JhiRw9Dvz2qTJEMke6njGiPw",
  "key14": "2GEEEcf2GKBh5ZfZzoSTFeM3FEr45aoW5czrYHpspjLuLeCwuyf4AxbSUhpXd3vFAfLRZ7444imP3DfJ2NLVvvno",
  "key15": "28i3osfYNwN8ACM5RNQLuqYw7jFPtcL2BdCRYTqs5HPDCewzAGDVU4TYJHJ9D5BRftkt8ttSNk777HbSCENk8b3N",
  "key16": "5YjTUp1RHrL8NRsYcLpH7PeW26Vj6Y1ePKh1gxF59rs5t9ydjsDu5fE7jBCxmuvgjSorSoBgPdKrY9y16ZCnf2vq",
  "key17": "5iHN73YyeeMpRMubN2Qz2SNSiEhqgMjXQnLSnWjf88XrvbvBNzN9VyjP5SxHDEwQxG7ZJuW7JcDx3TGpABi1JoNj",
  "key18": "2PQp3e8pmnKts4FnvPy5NcLFyotxPQqwyCyPChPibxso8y9Ygo2hMVbMVTdRL8dnEzXGDj3GuvnjNoNRrxRnrSXC",
  "key19": "4wQzGVcg4MYxejPLAKcgKFdva4i5VnCKazcLG3xcKGTHDCquSGzeEwRid6KeEkYt5jZFkiJqwAwJC1hRdgoWREes",
  "key20": "2vkb2VEZ4rTzZCwZQgZ8qbSK1sV4a2tXJwq5ewV4tr8bYVCAGsCEWhurfimzGDfQ9HvBicBRb7Dg34SuHDMu8Sb4",
  "key21": "5hdZ2wVEKsL9GZ8zTwPUfxX6vGEPXMANzevxLJKYCEJn5qFfQv8gDfSGX8r6dFTrdTiNEs7WscHsevvv2gt4HnRY",
  "key22": "62VysYERQV8oqR6jWvGKxn8kiwhRjDYMeHgc5xuQxyeah3RiTTBxVDCLGZDV97Deu1WduYr2wJcDHRchMDasg2YY",
  "key23": "5qbGCUEJWXDaW4x1owhQpb9GiE19qSgXBkmS25PtKf33ZvTNZr5s3m7jCT3CtLbaNWjikcgtqKukTgdKeH7odM6w",
  "key24": "4SxJAQpcFxsUJoLARjm74bxkevP67dWybckYcQGYJbLxTcbQDvUmwRUf8VNqqML9LvkU5Ccnez18k9DFStuGWR5S",
  "key25": "5UVkaF22Z5mb1AoHQKFKQ49L1CR9RbW6Dgj8fHdBPqXfaX4qShxuL6QcYxH1s8cpgC3Cq73EJoECUqzfnK7m7YVC",
  "key26": "5aFmYg5zPwmKz2fyLeBGtsV2hZ318raPDcoUvUqtSi72V1QnGg2meH2C4AzAXgrchd9z1d26mWXUm25YCEkxnP2s",
  "key27": "5GTgLx7jE3gHf8v8btx2f9rJwaqwNzL9PuY7f23wQTpHGsWdupYqynPQS1nb2yTHhDR9cHSp8cv1fBx5bHZdR2HQ",
  "key28": "5Noeo8RQojp5y1iYHHJbhMCD17SkNpCpRCTQ3WsiLPgZsTYDdDM5D1Coz3WKS3bLotcQhZnGH3C5FGArBYfhzx2J",
  "key29": "gFwxboZeLPKxz4c3ML4cyxtVLzBiW9YHC6hpM5kuntMZCCkzuykQnEF6zMh6bpWWiAh4x4Wz6zwt3u5fRBSSJ1h",
  "key30": "5e5Gh8pCjzeVc9MvdFZnTwjLdQuWXC9bBWLxZLV4ZuESRWsYLFhPKvCHMunup65XsUXooUAwLMK5QcNNdDoMbyZj",
  "key31": "2BqTwjXgComutF4gj4s2RL2AhV24oYyXsnKyWBqZgiQctHT9pSfm25DoTKtR38Cf12aWMriq4GFaS7uTfXGGRxQU",
  "key32": "2Qniyqduw5H98PJZRpymdhBSxVdcXz8e3bB3SKRqUYMKpXe4p9pyqbtVuZ1eBxkTmvcQe3segyYNurpeNUGp3fiP",
  "key33": "36y9cgXsJeFK9FG4BU6k3DexiFULMo6Gm2DaxbEtFhQcwzJL8NyE58y5XrgEJ2XDodmXZG5nxtMv1KhcgWsucXsG",
  "key34": "5ERPBGaddpGpxF511Ejt2xBaUzStKzMttd95ga55yTAxQU9thWc2Cdsz1VfBTe5p1NngkFCizXAafxZFZn5Fcce9"
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
