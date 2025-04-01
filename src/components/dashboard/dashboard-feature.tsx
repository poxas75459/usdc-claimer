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
    "aY2MAYo9MrYbMJFQM6wyjx4tMsiRsDPNxdcfRtF9yuRckmyxm1mkd9V8UT99kha3VMHqetFs5CRTXq68bzNY8EM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vPyZkFYZBspFqyRC1jmBEPUNvJEEL88CHjhjfWUzwmC3CgzMkt6gfgwhF21KDspQcTGMrVMXBMLChP1veb3P6ZZ",
  "key1": "yEpWTeNyswWgSuaRrysFHKsVru3QPZEHBN23Mo4mXG7ewFU48a4W5LYByGGmW5Viuta1oVVMMyfaP2DuXtHSpyD",
  "key2": "2MdDFxvLbgwjkbbzRdRgawxQgJh8LD8uimGiuF9fsRXP87vrHiALUfugZtzin8i9cbpViKTBJTbdTMhnBkvXrfJ3",
  "key3": "2V4HyWb1DrGZCjaGfM1rbEGpJbwuoVEbWSf6GKVWRJQSVx7CvjmmmCosKeJYzuqRxKUU5FhV2VmkcZ4fx7e5h6mT",
  "key4": "5ETLPp4U3s6GUBMtSvDRpM7ETPuxqYQbea5LaQwLGqh1GkPUgubmbnoUTc59pvWeFSjMSZqmA95M26nnH5qw8ABG",
  "key5": "4gfUEmob795KP8rQ5so884azLwV1PponXCt6ou4LUkoqGsf2XdSc9TTwu8g3WZNw4Dn9ETkcLkAe1DzW5fKxvFiU",
  "key6": "33UVBMcUdSyn23Y1taTPdYmLAVhS5EovJjbyTxJadxxPvuZ82nQKwi4b1eJkgtLyvCusWpF3b8hXuAUYWZa8guS",
  "key7": "3u29pDmhfSmNVX8No81m9xCpnUJvKDAy3GoHXmJ4zSREC2sVMvJeVP3KzQmEp51yjMny3HMyGGuNJ6zhZMPxyEr6",
  "key8": "3ERYomMxvpeRSF2B13WQiQqV7XX3FVHqgJPDKKLiT8hJvQLkApAQht6uWFcSZyqUgBWDtAoR4WfPSWGkFGm5m4BT",
  "key9": "3y9HocBJ51rnPccehHBMPBeZoEDny1uESgeZGAMY5jYwz5CvJoKiqBzhF7QPzo4NndFgTEkZFztpcaXsgr98TeSw",
  "key10": "5ox4KN8E8Zai7CHt29soJ66YEFTATqNp14KS5V5h2pYh9CbfjarYuHXAcMj9iYSgnhaufmarhSGWuszSiUahrDXo",
  "key11": "4wANFSRMmUAU68F19smBCkbCWJRJBRbx52he74hC3g1aBNrgUtrz7LcmrDQStECNgVs9L3BZjfQXwpPkLMZgTiCs",
  "key12": "6175r6wWjJoNwuVcCQtzKLHm9mnAnDZF5Enu1e6x3mBKnQUBNhGmKtLB9pC3U43sNMDZjoG1dYFSQBwTukFxvQC7",
  "key13": "3wCtspHtD5cbmEekbxMThzAruhN9P3SwiKvc9gK3VYEvztnpJNrJqATrazqEWVyeorEA9Fo8jSnptaqmuvzpmsEj",
  "key14": "2dAVHSQ7QCi7Yxof2WgrRVrJQc24sUFLoRsBmz5r2A8kvyH6BWmqG8wgtFFFkvfqrCoc65TpAXh7oTZW81oCSzdi",
  "key15": "3Bix6xBS9EeUxLER4hbKeKMAMq8eKmhqHFtAUUk7refF1uMjs9GigQz5Cb48x4SvNUDQJrAMEQZ9bLU5ax8yNKq",
  "key16": "3oCzcbEJS2ZodGz76Byf4umw6sf4p6cjUau4AqEYnkeqECy7a8rc4QGpmv3GzvJRpaLU4zen1c1GcgyYahVk4Wgp",
  "key17": "QRpwiUjzZhi24RTkg34EHNkZnkzpxJaMHmbcuekB4VGt3Jp46HvpZsyAtzsu6kToBo5uH9soBtLSdGoCqpgkiqQ",
  "key18": "4a2yoeXojHWMyB9XWWhiE51zeU8J2CtGD92BhZ2VgjxWbBR6yK8VF5AKwriHTXDnbPaUWrrYnNZRszm86b2J89oi",
  "key19": "2bJaTsXbvSXmBc3khZSXFKkJrnY9UyTkXqjUrpgbJoSAviw7RS13REfxCU8Gf5StK7ULQWnh1ps3Qu8W6xmchRGK",
  "key20": "5nLJonMPEAuGmKH6Ahgubx2qaqH88DHpQ9usMuqMXuAUXdqnh3kY3Uqrg5N4Xg4qDTA7giGG5fhSozgxYACDzWtb",
  "key21": "3FxJ8PtTRcFiFQfyBguyQP3KKn6yYxCwh3CVVyCaDxhXtoAi6PPMQagLysSaTh1cnPKibf3tcHGHf8vEAv4Fawsf",
  "key22": "5vtF2zJabpdcQTEhqLJAbHBG8CqXpGRia1Jb12CLL34n8BvFiDLSQkDHW9NRknW8Ue7GJzAVqA5o9QE9rpVu3qSR",
  "key23": "3k2C86TasePPNB7ZkfT5FREGkzjNVDxjwnwHU1TPRRDwCMsUjgUeGUM6zTC1xhFjx7Et6xAVDdu5yXHdWmTq7UN4",
  "key24": "5UiL2tJkbRPTWChCsRgnPat8HfNnTL9zq4pm3dQ8EFgSEwCcGtFm1hf2ap2cDjPZq9dyXV4KxszNsBAjDKi5jHis",
  "key25": "3vX1zTJeoraDw3ZKNqN6wuj5ASATvAwjvogaRpc62VhyB4uQHgSL5S3Xz3EUnemLDG7QeHRpbPzSn1qnfaV74AqE",
  "key26": "28tRvHp8dzEoowHYFm4Mri2Lh8pKxzg37R9oDWCde2SjejEDN6n893KeCsHDrFe699rL997f6vpJQaaWXPpXvqH1",
  "key27": "FP3qiHwa2BDZ99ekwBC3WQ3qVW2LL5F2wdUSpfiarY4X1Hw3DfiwTsksuFbxYibKEgDE2rAkvyKdYvVPGEXDzrh",
  "key28": "4bxNAaSfEtAX4H6rLYg7ghvjtvqdLJ33Mu6CVfvrfxP4kJAaqxytBnoL3GUjCWcvWt9LbWbU1zWdCYMuuRQWeXmk",
  "key29": "2wMmpH2MbHr4tCYor1t3LfYgjGVs66TwUHNaJ5KVhrK62FBanxZXqgUzbiv8JEqToJ9uMAXoFwjAKzriuiYV8xKT",
  "key30": "s5bSMtQMwJF95QPxnG9uAQ2SmDo63vCKHCcedbkQErzrKw8x87Ge332By6sFcYWnxDRhHpA2iCYGWeXvVLibKE2",
  "key31": "3aQuGLELVU4NkPAU84gWUxhAmd15Q2qAw3cLuph95mMVqqTfshD1wGDChXAaULXY2XULgANaniL13aAe4zsBr7dH",
  "key32": "5fqy4T8paBybZMaJCuHSLE6zFesHFH8nWs9YihrWcXM6zEsmERkW4FQrNh6suFD4eoSnpB4BY1M7sVEUMaRm83vL"
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
