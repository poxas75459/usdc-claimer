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
    "3EC7SUTjX4d5TCpbNmYPpoXc6ZF931vUUN41Tng3y41yagmEqtjo63VJiSyWQ9cDNgGLfry1qPeK74HRFcBn2d3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2usXzxVNuiDZKFCodBXAcJfWW9nQNvfcYM9pW9aVYhi4S1pDVsxPCCDJdDEMNMMiBuQ57bCqpEytWtqEYwuDwvmL",
  "key1": "JoBSJvA9qVd6EM2jzLwcf8pjMyzRB5Y9Rggdp2yUFndtKyNrMvRK8J1gTmhAv2HaLC7vjXii7217DXDGf98eFNZ",
  "key2": "3sD2e6e5THzbVRwtkpFmd8zkzF8M5Peb3jEfFEG8UGemgAxYjZjYGHQe75QvQUDwS9v2tUMfBSrjgU7f1AkwUcLK",
  "key3": "3usA3XZjcEQN2SrEEPmizUWhd72czQs3EUK6YVG3noF2DgePDydkkDN3vPnD8r8xApkheTkctqoxZWCyKRiwHc3w",
  "key4": "pZrpnFmKSvtPsfhNZ6CvAWnbj2zRiVjFRbpcDYHs2vieJBkRrRt3LXzQwJ5dybLm1BoHFzgHdDaUh4dUWkexg8T",
  "key5": "3mPrVFjgFqid2qnYU5jxRgySXpnQzLFwJJCsvg7M8gwJaMPPb3JdRguUTCjNwsUkcjMQZebTiVfCmCcr2zWDG9yB",
  "key6": "eo3BPg844v47YdvyBjtVAyDbJYgcNVJKwP2iDy8hxaUf4jVRgWm9FMVse8Gti7ovqTfGfjwW7bdQB6UrskHK4SG",
  "key7": "3CtZsw5jBBmZbYcvg9KzdLxcNf8H9aQoxLRJJ9yEkdgH47v9c1vuHD5G6xZdtbByPsGTr6ePbifKqyE5ptEeauDs",
  "key8": "3FkDXJ1Ju9W5r4bxamyRfVr9uG8NhGGXyUDfzz75wH6sr1XJPum62mevJ2NhFDsGXtKHEzz1JjDprQ8iGRzeNvah",
  "key9": "Psjr11ZUzjdAhpjqDFbapGyPgUU2jKu3yz3EKyvZaM9mkGLiLzY5xQ2yenaGqn5MPL1obW5yH4sZd99tztDUpUX",
  "key10": "4mv4Jt9zpTFyrJGuXWGcNp1nXudm2fAhb6vwVnU9NLmSefeZ9jahRJm1buSzkmpLq8fjhUXiTAozC5eooCkU1nNQ",
  "key11": "65ca3jMjMMwJ6jwM1FtBUbeGZhF1PwtWgwJWSs4gWcAsHwzaPy6PJCLe3hkwPxUV4Qqsd6s19XoDBnjWbroJ1q5U",
  "key12": "3qDk9jjFieDiKJ9srSi9pD2i7XuLsfReg4DM74ehsuBxb36trCtQoStRiYokHY4PPPi9bYCJcv6sECazUHpfmTyc",
  "key13": "3oN3dFJKahF1zZ4TnYeVeDTWhGmfXX5UrbTpAKsHL8XY6rUZuZB7hwhRg67cSMFmqEeb3imwW9we7wxeaUywdeCX",
  "key14": "2GxFfApYGeP8EhERrAvkF4roLXrjiwKnLts63f8NSiopCreJUfcKqyfWn48enZkiXSUEJBQJkLkakwTJvziDkNFK",
  "key15": "3ijScqAnXDiqPK8JgkhZHRn3Hg26Jzo1K916Ln1ssmztdkorWfDW2jwPdBUukY9YEZUxhCYWKvvm1oLwckJVafmX",
  "key16": "2d3418gVfBNEVjEbfSdSMJ28yoSRKmZcpZxxtmHfGiidu12qmTNARDwWmTgKoHadufob2bBxvLTyprC14zipfTcw",
  "key17": "4YnaYPP9WzbK5gaCyiVUDs7xbVPgLk1YM2tx4YJgsizgCnzxPaV6V9S8CqfpUFBm3qxLNB7ixLhoauVS7Lohyb5s",
  "key18": "3bDvYoFkPUcQnteQ9e3n4wsKCZAdVEHhXiLbuAXEMpSW1TZB7NisSTtK7VuVXQ1YRRo2mgQEDaRZ1MKc11YFm2pd",
  "key19": "42Rru8ky3oLPi7GkFurAbWtzMpGCaounW1puywPeenbUNykwYkodC6QLGMo2M8D7FL7oY5Xm6fBLkTrNDfrMANTk",
  "key20": "48QpB6UpFoobSvrBGfKoyKKKjuhxKRmLvarUu74fvTykXdr9HuZF6j6XnkuR2LykEY6Mfzh29FCV5PgtdBAkbVEN",
  "key21": "5Ah6EG13YbYw6QDqGJhjEUdjZsadYYYZjx2UpePB2mANwzh5S46vXL82fSvRkYHQsJvJihRVrVBDErLUq7RfjQrp",
  "key22": "5wM1vtEbRLptQTh84GQxAECM7keJqNkfTDq5h9T9M7fxySAoFa5Ah4iH2ymwXJZcRJyFtiD1U2DHnZaRiBgjh6h5",
  "key23": "55x1ea39o3jUV5preohyCG4BMR7hG5BiGdTM8dQXaUZ6pPbuM6R2RKda9yeP64kThxoA1aNKkgFiQqn4kvCAFHdq",
  "key24": "4JzpXvU9zEu6AufJQLc41Z5xsYoskdhkmJ19dEshUXs5fuZkLGkxxnBWerpwAbUKTH1ZhrGg8AEPWXetLCpb3J9W",
  "key25": "5C7i2sDREeLXTf2dJKdEQ8H8JHpqB7ZX4vG9BaRsFZHb7s7z64DHsrubUXWzgJetR7hSQCUTnmPm4PcWoHxSLt8M",
  "key26": "GUDp3x4MqAdsJ36DotL7CHYFMfa6FKhV25bRzFv8Db55vfcyRhdVbPqfkQG1iGTgTcA2KYvyotdaZLu3j5yuUZw",
  "key27": "5bzM3ZtNb47u6ACQhUozQ96ZZipG6AhRhmbBgBgzK5juMwSdJdXgxkqdBUsp1c8XhY7omzsn92EbtDYx1EJDX1jw",
  "key28": "4UR5mBFFFyaXtAAdFqAdNB394iZnsc5MMTLbLpVqRpxSEfE4WLQEC7JQ2P3LB9896881b3AAYxvoGHobJqHN2hgX",
  "key29": "eVsYyVDCpd8mB8rwCNvQ3Fih8RGsqzWcyXGSXKu383W8ofPPtynQTvBFh8G9M9Sckdgzk9bvQb5uG3EaqzUyHcK",
  "key30": "3DdAXgCegGs26nz6eKRkGeLEJkrzg1yYPg6JfiZtAVhby76WgBvc5q3XZvkFNWHuK29eTuckP5NPoNCXkXkb85kX",
  "key31": "465L7RQ69CE6XNtkBs35vQdYKfgXC1PKc3qNLtmzEkTCsxR3gfocv6bCq9Rpg3ojKx8xourxPaz9AW7civAgA6eW",
  "key32": "4wdQnG8iCSDorkCbbiFq6DkVA5eSHGSqwnM3tbBvUEhJvemDX2mXxp57be7t4RAYKq2zWyJWhkYyddbq8LoFFNM6",
  "key33": "ECF3K5vjUqENYbDpUH1qiuP9w9wWuHzziTydmL27KbW8tQTZt3Y49kKdyEtTt42HEcSPqaN37YSLizXwRqsj8mw",
  "key34": "5pEtMvbLFsFQtz2RjDBPUdeg72eeT2wbmqpHeaAsPsP3o955UFZvou8JXH3gjhRLAWVsBp18DLzA49ZrppQt2jv4",
  "key35": "3NN2tRm1q4HPWVQSxGbcoYuMs9pB2bHUKUswfnVPzM8z2TxhKK4cDPtm9neVLenDAS3grpNAoABsRfiyAxmMLthB",
  "key36": "3VTWc7yvTgcVdNSQCZMopTyXLSWd34Bw8hcGrMz3T4KPDquBRYXX4MW4gkVVzw9Znde1J4cuKfg82QAtimSchyrD"
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
