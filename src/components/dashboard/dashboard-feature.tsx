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
    "2XuHPHAuJcrTjezaehtYgQ75zbZx8MHMi9wL1Z1LdSxY7Ghe3LFxhwLAF3i72NGuX91ZtRXxTGG1mE7VM1MJ3TQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38JHCzRzGAxiBruwpYtnKw7qgAHmfdq9Fh2CtDNSBaxVkyiQsfGtyRua6GxpffUzVrrnQRHDtWYeen3P5eSbmcNF",
  "key1": "5guhxuNrqeyzPag5ggQAEXWjXxqJ8h2Vtc6p4HBSZochrqHsM1ejPzXM2eaikzFDxzm7s3vQATmszhp3nR3JoYTK",
  "key2": "2QnV5q9wARg83CQjjsx5ZMWSpdhtPPNtVmMYt3F6GGDthRo2m7grBXt89VUkXcNwsCL958UVpr4Wc2ggqTisQYMg",
  "key3": "5E7iJ9RJ33VYGA3P6oxT6CiHScd45ybr1iW9GU42fPRvQqwtRexnGSFmzEUobeZde2dHXt1c9b8FR8AYNxznn5jp",
  "key4": "5HHK4oZ44gyLwRJW48r7MGRxzhSGGYDUgtSvqu2Us5GeTBTB888EvCk3Q4BMzkPp6gUaTijM3NtqEYU7nHboCXHH",
  "key5": "FQMeMjJbmVnyTBNu5vmy9wLGNYpsx2bdTUMreb1Qb7c7XFxaNqsDYkrHEYbL2c9JF3Wv61TASB8GG2SzNmWTeNS",
  "key6": "2U9iaWT6TNtbAq37Bdh9ETtH6ptYhgMD4SaheYHy7gNxcY6BiECC78gL76mkJGrcUai1atYNCz9GyxyKthSDgEZW",
  "key7": "5GYTP9SaVENXq5W8kMQ8DizeUGLk2TZa8Cs5KYBEod1dwopgMyEnW1cBgkoLdMcLn55W64tkeqgTd6TivAP1N23a",
  "key8": "5EmnUfmtaXktc6iK4fhtAfmEHgm7jMWnPFyAw8C9vrD95dYumvHr8TC5ubuvhhHioYtnUQ3opSnnwxnPUMnQ6UZS",
  "key9": "crvXeKUC9WnBFnqR6zF7Qzg7vvhAw8vZWezhZxZyAFjFtmwFLdGsJx8BJtsZpnxR3uAAGYLm1b87kULa52SUTbe",
  "key10": "2myeGeiupoPeqSKtraUjbPYQDrmMznWXFeMRjt1BeWg9UxREYDpFfYzKvw7QRovpNjxDoX6xVDBwdJXDFkKydygC",
  "key11": "4qiu22RaxMVLGM16dKEpiTNdL4T2Hb55QXCBUEdYfHA5b2zGn7nfv6kg7pG7SDTniWNmpMjscGMkK8PiND4JADu7",
  "key12": "3N8LzKR95mEYpMKChh7rnp4w138tiDDVnq7CrCXoCfoN8NrwfAuddZfLK8eit1e329NHmqeh75PGpyPcobvXAEYD",
  "key13": "4XP12DRZVwpoPpyz7KhhwV5HWiBGJPmqBkvFyUzZVj3USm6tvjG88untom6ZZUuJojEJMeFDDTcF3gRkPp4gcp2F",
  "key14": "25V6qyb9soyYpbWNCyBbexFp1GqZUwo8nKWTvcK2vQDS41s9RS4io4xyffanoUw2jRfcsb8DB4Zwysd1ceVD1iu4",
  "key15": "61jZCznRMmU7CSx8LRKQTAzYJu9Gp8b3KBRkhgvjufcfT5T3MhQLgCDHaRH4aivPDmXDuwoNAuExkTxjPGMpKNxt",
  "key16": "3Lj9pZV1hGYb5d3EheHRMm19QyYSaph2omC34ABg8n4pw66kEyEcsmbexrvknXDRsbvXa2m1tEyk8KwLQkw2Ev83",
  "key17": "4wavgCXQk8cXzcjZCYM8rXeHe3vof63ggikEX5EKjqn89vHwqcVUVdWwBeoHcaJT9S6n8gqCsVkGwvHDL4x9u9h9",
  "key18": "3CTFkJnvjTtrKp8d4Fk5wHjqre25kwKSBwjJZdgZ77EVUhUR7WyiqeAy2u1fMyNG6PaaUFcLPbhst7nfKCuAaatq",
  "key19": "51dAZKGLvr3CncGXb2enh8iV1kNLKumR3TeTTCQSGFeZSFcbBYg2ibXZ2Gry7ykDGggzBUE9wfqzPjtjd6DK3ahK",
  "key20": "4PKuw5LshToddAnH2WwkATdRWZyVpCdpAR3jKsDkXt4yvRm4EBinLa8JTU3woG34y5Stsh7unWTEvp13LqTDp5At",
  "key21": "3Bv73Yvn7EyyknGL5XgJTu5h6Wrzup15tGEvQFhcD1YJgvBhFjBVrt5RqAaVG98qpRHSjYfmnM8ENXeG2E8eeKgY",
  "key22": "2gXo5PexRtXyCNnq4CXtRiY4XULJHnDt18c2MCqy4SNDso6nieqbD2p3tugyKci64R48EDmDA6YUFuRan8ZEAqzK",
  "key23": "3WrPGHLKS3Adf1xUdoj1VniDHjx26kGU6XMFwY8XSCbLAaugPh6pafe5TVvXm6Hh46bKwYHFi74viGEHREj3mhJe",
  "key24": "4xDmWjGjuCmz65z2MUKGWZw5f8G3hiJJa93HuKg1xL72QaZyAfvECJgrMqXGMTs856S8EbvqK8Cf4CLJSaHUtecp",
  "key25": "2wB3iFpwCsmvgHQcWtv1S7dbhfC4hj3HWHZviqL1Dso7jgiPByKY2bidRndgRdMLtZE3GeG7PWWwm5PgrWSsaQcE",
  "key26": "21eKLL5LqwrLXerEg5zXTeH1RsyAoAm36jp1sBMkxxLouiV119oRHNRvBnvP8BKp6dZzKpypf3hfsBn2C79Hg5fT",
  "key27": "DPwSVnb1bEvw3Nv4rFqJ1vCt4Pxu3HhynsgX7v2xW9qqrK97j8Ak4vyx6Jey3Kyr6Eo35sJuMespDe3XkrX6KQ5",
  "key28": "5hwHqNFm8xKiazEafv7VjugfXy1KeB7E9enh648BEqSVyuvW7WxWyM9PLmVRqWnmWzbJ7GamhCgtq54kuNY1SCqy",
  "key29": "2WFr9QN8KDq9ckBbU4QxchFDKTCfgqiLs1yBM3xmqf7UUadX4bENh7F2n3hJSa1P5MExs1VB5G1PtkACoKfsGg4o",
  "key30": "5BqMeBKmYzPtYoq8w2YNHtqBmAuNjzt1VWRTqiE7BaJzGuq17nPHfBnTpmpUpjr1eCxmmdHvmKr2aGdsAiPgUxE7",
  "key31": "3wxA2UU92muTYimQwwF1jTzc4ZgCdoaBK33TrdgFSL9S3j7UcFyebo9X6hdGh1pk9DKf5DVq2hjiJ7HBxwSDCibz",
  "key32": "2hSLmYaBvnGVTJiCSs3R1KEGiqqxd1FqQUXSEzgrjMjLSez7z8SzKY2o3XQuVyM2c8nWKoSixurjMQoG8DMC55p4",
  "key33": "5ZU7osUYb1G6QaUKMuzRgr2PM7naYnsPZvJau7jVd8f2frQkDUeVvmUGreWvcXATF77sSUBCs5dV7wfPZxux9ZHR",
  "key34": "23XADgreHdhHeW4YYK4XM9VGXMLWFxiNDV3GbETWnSXxRGmB5QbdDp86qu5TEhHFiooRjhpNCAiCsVLewsBqhiwY",
  "key35": "5Qdhjd1EcHd7biC4hqpUnjHAiRLdaYkxTr1ff9KyDyjwvDGuHVKfWoyUhcJkLyRmj4SFYWU1i7XMrq2SPdBMoNT1",
  "key36": "2qSmeUF3J4UN1dKAh28bHgT71frBAHMTfvsNcK5wmskdzXr8AUdVCgaMm7wZJxbEQkavq8sryVULdSGckPYYnkip",
  "key37": "5wKvSKa4bmmqUqYgtRCPRfim71T49V4zK87K5M629aK1gsP1TfN87JqW16EVdAmhS45GLp9vBZWSScsnzQa3TTLM",
  "key38": "2BnUQjTheqK5kmBXLp4DYda9wRwizXf5a7JGL9i4m62sy46PMUbaieioATM2pqRkENJ9pMeqtvtsN1LC8uQqwa8L",
  "key39": "2k241mTuNrCCXSWprDcdmWQTSMfB8T3DzM3tgPo74nT2y3ZhMZnfpJyQ7yxefj55NqCt6vEXyVCfNnFdzpfAAXFg",
  "key40": "5XgAttoqd9E1SxaMPmQ9VZABGnLcLRMVJHmrJcaXYQyRpSBb5rru7b3Q1jsfCvx51p2hKdTGPLHwNnM2GhhmGauA",
  "key41": "2LrSL1EMBYp6p26XHgeJNpABk512j7CUXXKczJoEmGGLq2KgjqHW6ty2WK3xjjntYaVPDwJoWqWn5Ym2NCyY3ZWW"
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
