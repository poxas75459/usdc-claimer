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
    "3875pGj1jLHxRgTzDWhzehLGAKTcTxhD8GtZZBSs3kaJqnhBB1hNxCPHJgWyLnSAPbQVXhWy7TTN2zsZRsq1XrSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "itSEp2823KZzhJpb8J4EfQaeftvua7iUiWfnGHvs3nNN2DFBYmWKvvGnxvDobMjWWyUW2mYmgrkdHFkV2SUQZKt",
  "key1": "VjMZN1GUkQH2qWr2MrmcXEK7SDDjXVRQiWNVPZmFwoCeZyVPzNmo5FNELvv7umK7Sked1ZoNmAVCiHvPsGGRQgx",
  "key2": "48iYmr166QVCbrXg3eyZYNV8ieB64mUR5kNbGyS8GdDXL4iLKNTeFRkc1Qdm7zZKVgDCuxac6QdSuPzJDNcctNND",
  "key3": "3qzmW1poEk8eFg5F7WjEHxoAcwPy7nn1yEn75Kec9zrdD8oErM4f7DbHGn6cmvQwbgXfHApd16VR7FDqemRAZ811",
  "key4": "3E3aMSVcS99zut2jPXqhyinMtx1aDJrv4VgUYJi9DRUxfgbryFSnLg71HtN4rpN2zUf7tkviEXPkrsXRHbWeprMe",
  "key5": "fL5ZcfUUMjDmRUWVbfP8gjQbvjUyCuWKAzjFQ51WUqEL7Q1HNLQJHeFmwjFkyCJ2V4TNfRcxyyMFbqSFhpyW72u",
  "key6": "4E9Fw5e4Wb2yxhaC6fiyUPRQn797U72Pr4QJGmEqUTRrQZKdhiSk9tuKLkv3kYnQ6JWrapxqYpHLZ9x29m76eCgH",
  "key7": "37jqiURwZjS69r3VmNSXxBvwDbQsH6pX8D4gWau9HivFCwfRZXJZBgcC15Voy1bWcmZvVNWMCh1dwc49gHrMoKsa",
  "key8": "3mhqTq9qw2bYN45o8AaBH7pNyxAWPsZxRVAMPsEC4VRBmY6PZ6mRynLzxatpUX4qwYdjxTJ2j7Z8eaiPs3zSdLRx",
  "key9": "BZcZPoXzaDStzWVQMWAHMkLPvz42Dt7vmx6fNsDLdgkkbs4unU57QHAY5becDyaGyWMqbvMLb3vw87geGbyrPhp",
  "key10": "5yFfB7nxHq13ouQY9BzfiJxXsCewXi5247MGoTSoaM1XnK1HCNVhU2XETGBSofRQPqiXUkGXsjoWK2y7J5u31Lrw",
  "key11": "57iTmLcgobFntzzZwyvbUYXXthSY4N4VokkBELNYikTWXWDRvz8oTDf8xNvLFQfhSV8orMSg46NqoRBV87TcAE2b",
  "key12": "3PuLSqa6JiGQKwzepcjv1KvsEfsDJwvRZsURFEVR1JBjU863AUBWQE4hoRZP3fnNQNoqCEk4ZkUMRvjSPiAv4zdD",
  "key13": "bETcU5PNkQdhnGwHFSNbV384iEpomJDbATMM5wAX3ECEg4k7TVReLTUfembEUDT29zZuC9zhD5Qa9K6a1gTmtoh",
  "key14": "4jPg62rbTippRMBMFJrAWtPvitFFA9gKHbV5Z7T1191gtrDUscNc2iQekBbpPnMEAGkVHj9Ttc3YS7XxAF9UZCej",
  "key15": "5tPMCukQMfY9UHiHRfkzZKx4pbZDAPXot5hZLpEKZWd97yKELKrhuKu6YQaBxjjSQJ4NVPKzUDMRwv5JtzxajqHf",
  "key16": "4FmhjuHmVUfrnkevscrAvftne47oubfdukgDJ29YathX2LAQvPX7VotxV2GqdtNor3gdFTzxK28JhNu1vQfxgj2w",
  "key17": "vNRiE1yZEbr3jEWT9ySFqTXF468QuEkTsKb9uNMQ1wpUT9rtnUop5CUUvUZ4yqKQSTzUQyCUerABfgYgHfVPrTk",
  "key18": "2uLhkyDKVoWfgPqePnb5RXnxuKtZUAhTC6K9XVwLCdVY4hQYtpnm8nhnkjNFRbhwn1fudoBcF3XKzSp2sUHU8EYA",
  "key19": "gd1576pWQu2fqCaGxiPi4FHvxhxD1GKBKFZLUdBpz71p3eyA1bHhXmUnc1GnyJzwg8cKxrYsMiBekGKxLZbLuhY",
  "key20": "rotFmSdVHkZQmdLq5ciYs8Ua7s9qHse6TheXfTRNpNXHDJz1ULSCWXnrLTT91Vygo6GvDMHsirNdzKgU931exVe",
  "key21": "45zKpwwnWiEJD7TYrgXqgFfArP6cSnQXyhU8wRXksZDkWN8Dp5AjXqcLUEnuSHwgh5eqcZCLNYFZB7XLruvDNwSN",
  "key22": "3H6NQm1G1JQ3aQRn1z7W8nVAN4TSVAMxn6Zz7PWdriNhAU3esZRr9z8u7SQKhUcixFxMV3xGSasQEaX6D9hLvnsC",
  "key23": "USgU9eHJbdVQXTBMnssvgQLHJZGDa4AHua2QC6niKN67HyUBmyrhneZ7wVWJhyD4YTtwQMMJyepPgAvYHyjVnhQ",
  "key24": "5HHfTnZgE1yzhAJsqkeecLojMhzJLf3ADNyJmoJ2BEmdxhByEYPXEG3r5YexMPzbjAWMjMJMQrzBLv6BdHRKMiRM",
  "key25": "2kk1pUbmkYm1bNPyoavfHJ6WYYhJ8y9BBmitV1Akr2zFWq4gHEKYC12LSnGvF6ktbg9uKQrbnCT75HwSTmohMkDR",
  "key26": "5W7FUGtSa1vYNJcRGKbbXwgDkR2mcYmu1LXBpYdQB7B8Cxf5QGXfvj3wYm1E3EmhpPkFkbATnRJ9L5wZRyk14auK",
  "key27": "gb9sfKyVcQxfHduCTDACgCvLeqNESQLqo3hdok95CfNXWXQJXBW3kSntr5EpTBb7LyWcUg4C9z6VmJojiyjPcrY",
  "key28": "d5zUrM6o5HZfMqAtLYTfFp2LBRrxs8oTcCuJ4Eque7sTS8aQKJhyRa5vy3Mt5FXrJjUamt1TotWUvyJf8C46jC5",
  "key29": "2gzESvQMbP2s8QJRkXBBiz9nctZo7dn1Eagd2tBMtSBrk8vmgxwXDXZAUPKEfapsNBXVFAXh6BeEw1MR8m4RdTQx",
  "key30": "4cBYdRRaTdK2AUyKhAi1Tn4Z8k75tsypv3LWeskhzPvH62LVDgATuCWVm766odHYJTNBo8B57sGb34thpUtuy81V",
  "key31": "Aia8nhkqAFrZyUUAvku5LbXYToN4X9fw6kxp6ecGSE5ZTCB6eaF1DsUQ3masjEEBd3PiAQ1QYZex8t9CX1ZYftb",
  "key32": "7f2XuwQs6dfyhhTJam2cidQ9y5urdEfP5hh6SE3DiqgPkNizhE27APHEwgXf83bjnbxR1ufFko9p54K6JnJxRdd",
  "key33": "2ceukirjt9RRkPfpvqdTGnu1akdQEbBbDcqE7iXXkjy4d3zW3MHuuZUV8k9GGxc4azVqrNseVucT77hueFyX4rYw",
  "key34": "36HFBhrVQ5GozhBYuSzFqyvZPtLxJx5wFa5nB3mF7WTnnkcyNd614QnnjWbXtYbxZ2MX6EwzNP8MV7NgExPKf9Vu",
  "key35": "4Jduub9iacVbpALPLsmkuJjVJooZB65Nx4D8oqvePuQNMfxhbSEkyyMo3q43N14uxtVUz5cvu6aX9ivCSGPEQhya",
  "key36": "B9vwiJvDHnTTJqoWavFWAvYgB7vBxDDFb8rHL7TptwHSBPKGzAeYaKWMfBwMmMLrmUCD5f6HRSoiVPuep433aFp",
  "key37": "4SSBpeTtMg6HUhybaCy1Hm9snKnzZGS4F2ov9vJ4n47yyTFmcgPi4CpoEvSD7xFLTVLdzqLmXKr44PQhXUeN1FdN",
  "key38": "4JPiQdAtM6ch31rJd6KtVNUFn5Fpc1aYjpogtnuiSZQQpF7uhJmL9H8dB7Xbtk2YZ7CLgFTMxiaaGGCnWa1nbZhF",
  "key39": "2fcvz1o8nhwjYKZNBBkiHu81bmqaeHgkmk43LZfaDgCBveRyHPE3SHukUpmUsxv2xDj2BKmSL5gfE53yCrrmnaoe",
  "key40": "up1uT4hckZUN2GiPnhFfJidupjriGREzGycVzLPK2uSjrrbMxgCwYS7XwjsKXcWYBw2K7r4TKPStfFubPU5oxZb",
  "key41": "62p5wqq4WhLc7gicKinfBVGitguRAAPSXaswywyDAPb2yFWQy8hFPTrkpZ1XReh2GnM868i1BA7j4FEXzPFLaBi3",
  "key42": "2juALqdJk9wLBNPCMyXQ59HARrJjXLbfqMXqEf18abSrKwhnrL89zxqiZ4qNiTkwiDtTm1Rtn8uPTZbpCpwjkaZY",
  "key43": "yusuYia8Dpyz3MMGjTopmQmiTSSRmXktJCToZoYkXxFtoMU7Ktu76dzrLQfWYn3VHdDr9rXZKR3ZvaV7n7Xq3pH",
  "key44": "2WkYBxe5P2HTsbg3XQi57R9tDcpBYwEBQ9V1oMGRscsrwwBUsEcNroZgP3FxD4Kom9YuGT9wGuBDBbry3kXPXCL5",
  "key45": "3t6Vuuj2SgY1Lm5G4jTouHEZCv3VB2aNCmS2D55DHfoQh79bZCAXA9YqsPQSt1vahDBMuctgJEQTf4UsAVhAwWmJ",
  "key46": "125Th378mLcorFU9hKVSE8DuXwxTpRiyrLyyTm6yjkfpPfAqpd5N9pa65VFTGVQD1RGhdSJeWHC2yTbLJWvxTKDj",
  "key47": "5vC1VFYuHEvuGNDpYVZFVKg6HtBuJdHTABZtPstBw2U6bSTnb4AVT22euVBFF2HztANcXBBzhSxXrswppGjZ9t6P",
  "key48": "hLYNhCp1FdwDWHBGatkGeaqkagwvgwTjmWAbjiXs1ATbbbULHsopLD6HkD34qfkAG8AeUBoq71F3k7LRLEF4UZS"
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
