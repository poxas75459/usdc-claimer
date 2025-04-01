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
    "5pc12avyMsouGLeWCaJZz6xWWT16xWTWKyuFfybJtiCqL91ogvMYsboUdURydeSEPPdv4qLVeiVZyFrnzJ39W5vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4etGcs1TTyCwoNPqtZZe9gjKmFRo7smJFVp9Ho9eLjxaHyCpw7nSqKC8V9FFFjGRD18g1egkNstCKCTZT6Zrav3f",
  "key1": "3ngAhmUEsycc8i81YL8PoHffzcq3SBT9Lei6kZw9R6BEipAn1jE11z8NP5WHgFk7ADCY8UaDoqvhtauS4S7464CD",
  "key2": "SJxAoAepbVTG8rEZkf3CPFfzHjM1zHD27my6KBiQnizbBj3BddUfC9waCdfKHzS6NAoWaEgFbQst42qUD7oSN5K",
  "key3": "5C1nEF1i7e6jniY85wi5gL8ytFfTvZsVZiTwweoSBYgNgcEqeAYjizUc9p7vZGRf9qB9d9nUHQZLEDYgW3zADbWB",
  "key4": "4Q8Hw147yQ135Tmj2Gyvo9xtCYx1gA3ifMEduVttU39kRfEFeJJYDtgaTFdih5R5SJhitcZgcNGM8SvJvdskkKcB",
  "key5": "3YEDkpgqxrW1FiR2gdwfYztBivdjjFLAGG87n5h7EbWUTUGRAuuDPFLKNUwWVbksSvdPnY48UjQJRLcdVYhLNWrD",
  "key6": "5psfgLt4tiMQZW4xStGvXdeibCZW4jr135pwCWyunhddrJZmb9kk7zu4T6jYGitmCWGFsmnTc4ezgnuRMtHnH5vj",
  "key7": "3NogeAVCZXuHLEi2eQY7fv3YopR9gFQLPQ1zfMehstEAPuSWssqPmxAMrtWkeuKiqKzZKrp4TzjfPCzMNMmmrHCp",
  "key8": "4c4Zg7CWuc8YGeyVR7h16QBkN7bochmdkQpDgEgKjrY8C8hxeCzD25eCKyNmeGhuSZwsdya2JYEd5J1EjPfCi9ky",
  "key9": "43UFgX7o5eaMtxajvpQhqwoNQYccakXHgsJgq21RUbidTbYYVNbGiQiszoDUDP3FmwFQv2dNjJbDpB4GziXApsNe",
  "key10": "3mgrU8p3M6d3ZcSgCG3hegdnyRtmi4Gnr9pBinHBMffG2Xb9R2BFo1J9W9Q2mBGBfasbZFV5KcvtMEX3w1v3VS9Q",
  "key11": "sKJUisxSjohucD9sZCXAnCWLbvbTvmm4s4FeBf4JWq5uCEPgKJWPU6mcopBbSrNMS9zMgY5fUM2Ah5V4wx5Rvt1",
  "key12": "v4UFAswSnjDAYZN5cYcZ2bn4WtBHL1hDhfJDgkHZ97f3GuRG7csBLvrz8zyXhN9CiJPaX5QfqfQ8GUME7rwAMJw",
  "key13": "5MhLGb6bvMy2YE52CcEJhEjF34a9PTcddqkHNnzZdKKJ5SA6q1fLVw7WDaYVz7e8daGeUSJLHV9CX7pNadxHmABL",
  "key14": "2c6NHtbKJDZyQ1AiNg5u6pWPbntVtSjjn7JR8BDpoptrMcKtXmKAEpguqTC5w4XxRn6uABBE6WrJo32ZqF5ZjuNL",
  "key15": "3G2F3Qfz6GS7Vy6aGFFherxfCuHkeeKt17nJFFbdhH54XGyWh9yAUtTZtdFLVF2BkwVXZDLUoWDe9GxjTb1YJanh",
  "key16": "4AGNZTL6ViSgH56R9kdERS1u2Sp9h9e2MbPM8Zd2hHQp4nd7rZD5mikcW7HGv8ruAtGduvBpLCxiod4jM7Wxqpeu",
  "key17": "4ot5nfHjhoR19BH6jmmsqYVR4yXJCKQV5Fq2NaY5fNQW66cCj2K1C1DzDSBVdfzsmL8QNqoytSBomHKcLa2RH1g8",
  "key18": "42sXZGBBkGiXA7LxYg62JzzsaxegUcCg2W3fhqbb7vqL79cPPkwGpCzXqVCREjV37co4GSSWZ3dGtscGRdzeJqPT",
  "key19": "2yQaYaQpnY4CtxLgvL6rgVadyp5y1HnpGP2tsuTptjvgfjnrzpeMc8rTLoetF87eFsuhD6X3uedVE413zRhjSXZ4",
  "key20": "3TJP3X3fhUntDfaK4dSM2S1C4j9omb61Y8jPbR4e1DdLVPcvBSx4yHSkRCYD8E5rje7feGLzC3mjKMp4jBrNNom6",
  "key21": "37wd9S5PKzVNpsFmeEJrhmcSofzFNehRnewxzhozx3vCDAVyNtfkDGgW2pNaisSfthdMQBWTRbwnhN44ScpdrfVC",
  "key22": "3fyL2VvHrMomkPjtaoLVNYPAYUEKtCZ5kFQawsF1RQaaGvM3CvYeqPZsm9i4Qvto3mYXM2skGoigghupprfpjJpg",
  "key23": "5GvD1aGfx5EoRUi17QJV8JqEi8YJPXXwTdR7ecQF1JiKj4n5q3ud9Gap34swVgp8JCdSjXwVPWXZEiak9ZY8aLuY",
  "key24": "4c1cdo652znphv39kE4wtoXjF3zfu1vCJh8sWAaBHiGLTtxtPX1xknxRk1cUw9HVR9E91HazEm7rtn35qJV9puex",
  "key25": "5WTN8gZ2MaHx3aiCD4JygyhzUTAiXo4umVVzp7Z7BSdzVsicB3WWPvB7HUqNQVbx5t2KTtrP9QhaAq7KwbVEzK1F",
  "key26": "4ijfukUe2F6a6yo2sBxNg7uyrV6TnGVFauK1JVdN4gHzHCVTwKYBu74msqUMhu9WtJZGWfrdLg8KkYeob1ozH91j",
  "key27": "2Z5F34CP3Cedkd5z4aqnxAkjSUqBb9qpduMkkEM4H8cyxump4kXnVshaJhwwaiBoH4qHgyyLPnBACyd58EYuLEGf",
  "key28": "5TNaiCw8HkXGKiauKjvdqmVpjwRWvjyTxLJHpZgB775o1NDfm8RVBQpLHikCjDRVTktZ7SGpjNRgsNpwk22VutTT",
  "key29": "49cvRmQweZJLFAWv8ETbuDcf3mTfpcHR4RJDmm54TtmgawwJhwdkGZMWziiLRozaQYAA3WsBKeVrPGxgmkihCpJb",
  "key30": "5pNsY9JCGrW6cWWTZCWJzVP9k1iECY5GBiwnJEh2gypuecMyjroZJ6Fw1LxYES2SX42Y4vUwLHqAPQWpL3wDribS",
  "key31": "3qjGs9Lvx3DAR4LBzawfukZyupMbgSenDjzoYBdYUe9vbBZM5xPJmAjSVse2kQjQimuPQnnkeauTe7YoNBJkYr1t",
  "key32": "35x7QFTVZMBfHXiBQwGpavwavq2LZ2KkiHQMczocLdDtx57jZoX2noyNNzh2A94qeEDqxjVNSxiuWcBusi5pt5zc",
  "key33": "2fV2yV418rdrWtbiW9sKmAY9tYCCjd4AMSSjenqb9ne54BiZV7G8uvXw6eLiWLh2VA1DJU13kSj7AVY67f5m8mAM",
  "key34": "4DHRCZ4yPptQZ5QTRYhWFqSqx7A4PNBezEMapnVCnfyphdq36uXyT185ob1BQN9rN62m9ub1FtMbA5bgG6NS4Hbr",
  "key35": "36dmuHepX6tk7A21Q6nRJRe3bWvNGFCJP1YpYAjxhZK77sWc6bHhcPEpMhQNqhYnH2wiWzsFhccVfh7RxxgfLAzj",
  "key36": "4cqDtBBYAKsZkh5kWQvZMDJBWsbDphfr7kf3fiAgtMwifQfLV8hSD6Fkrj38LweXi4E2KEZbhY5PbVxdoVPdmbwR",
  "key37": "5xg8yn1VSmdsAdvLF1ri6s35YmS8kD6Uuurywr6r7TZeDfTGY1bGBKEBa77MEyXEukJXwB2vy4w4Bh1nLjY3JG5m",
  "key38": "d2XirCTo5Q2deBg4H34fi9KzgZxkcMXqmL1i7XrMWhRgpct9CY8cBiP4ZsNSLDQo23R3sRxPLqzz2N42KJaifg4",
  "key39": "3WH83uYv18b1x5823sr9uwxdJV74GygMUmDPhkno22mqn3xbmxxp6njgdVdga9TqX6ygUGSRwXszUL3qHXxZbppN",
  "key40": "4mF2opQudZQQ729iv25xv3YJj3RowzWzojPghEMfaAeHvKU8GUJUAK62Ta6HiNf8mm4stGCT9PoFSzAcxiRrfWJG"
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
