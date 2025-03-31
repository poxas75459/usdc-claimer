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
    "2HqcfcT2vdBssXvttnm7geFZNK2ZKEZ6WGHLvNA9qgMneQyzB8DfV2hKExtiBQjLCkDn45XBGp98sdBMv8ecRnbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51BKaHMZy3txEj7bFmA1ZvnRBzBG6WqzKXLu6bZujT99NV9Ria2rXaMMe7FtubF3J1eDvfXvFxiASWCG5K3NzZHM",
  "key1": "5oYt1qTnJBRK5UC6PkqSqHiPAaXBwqp8ZY18qn3RpZ6BqjyqYmRqehjJhFwWjg2K74DoasqffVib8y8o7rGuWwXT",
  "key2": "22nZoULaZKBgGERx4qbFbQfjqML4deVr1Mq95bv7DdukcspMfzTbtSndzUqrUGGCD8uJ4jGNV41iCFJqAfkBiKyz",
  "key3": "2Bgo3sR4YiKu7TyR1fq7beQqBQRwtw57HLWW1YGLyVFXRS4QL1UdPvcS69UxYNYWzSFcDTBuYc6asMf6aefFymPA",
  "key4": "3VAbiwPtC6Xu97SRB8LDyFEap63fpsusm4LgVX5ZEuj7MrQ4tbavGt27FHbtHSjpPh1zPvriG1uJLz3gBqyqeH9a",
  "key5": "2XcmRvtUa6SYCkeLAXSgU4jpFUXmLSNDXsj9f6qekYtA48pexGjWq4SAcJnAHVfV5K8SU9Cpy3vyfyqnSKQyWBCE",
  "key6": "2HKFQCxFWUfZQtegbjDLYVofwem2uPi7dKpTq6GN1GUKWHBsMpgjhxVcpE1nF2r5wNU6Fh4yeJy1L8n6RN1Y4qWa",
  "key7": "4uzE1YytPJsLCeGQLvEMggQVnewpDMgHgS5gFxzH8ZcYjsjsSwYu2ZSvTHmVkkjgUqDgfuRmX7WDf8MzG1ErNC1y",
  "key8": "2Za8sM5uYG4V4XSQoHYKnwtd5rsAaq6cX4uCwwJzbmm53hWRhPnxSeG6Ga9Y9BN4W2QfMGvEknwy1Di2yYNfDbHQ",
  "key9": "DberHy12pcMouYKirZ6s2axBtcvPea6xFJswcHFC3Ekuxc7euZyy4Ev6ADAwfdstEDvczB43vXLL4bHwghxE96P",
  "key10": "5Wvp7QJYnqFfFiesG9vwRQwcdr1zAddLA6dtwPoF8UFkJR4ftXSBD26UqswaPwx8y7nHAt5LQ3nj7gLpenryP9aY",
  "key11": "Pz1Cy9uadAUFtw8KDkf52a9Q3qMTNv8RHBUGfpT7v6utrCquMdZtM2MR6jhhh7j5vBFBN4AM4vRA5ZY1feLhe6P",
  "key12": "5PyQGDF8gY5un8v5CTBw6DSizNNh5ExZx5uLqM3D8AqxCpxCDPvjX9syqnhkt895WD6QyAiibWKi9SzEfnneFeVr",
  "key13": "4uirYYZ5xESciULQg2xfQA5XoXU7YPSKenJ6PusMR2T5y4aFtptRM23EchnE6ogwkpT3YpoLR9XYYs9X66dPah6w",
  "key14": "5Mc9vK9osuW3SnV25G7BDdqbEN48okrK8UoymnWwVcXSyKjLed9ZxDfkrsMMFmLPWYHw6ziwwPbr5aLRzvVGr4gG",
  "key15": "4sfX8kx7EfmPPDfQWn6GzzTaJ8nmvoBKnmjjN1e8RE2sqxxfZfwGQUrf414ehfMx3AseQZJkcc85PQBvmaXythXB",
  "key16": "dGB8RBui3CTZ7SfXFYfKmbGPmeREM17zhRgbmqfCYTRTg7k6LdZ3PqbWpAV3sVpnEiPVPewdvAi37MUqLcoxLLA",
  "key17": "3MYUtjpCkK9wTFm41QoGW6tTvLS6iMCwZXoyHAWFLZoe7Mo1hvGB9tttRioQPzPdE6MN6Sz2qEXwCPh4UquwfjEe",
  "key18": "2LKjyTKtRhnpt6HrtM2dzZ7tS7osiKpJWCVM6mCEuNTmsSH4jW6tygTs3PxorjFg3GxJ59W4UK3KYqi8NbNAT8GT",
  "key19": "51fDrcPPikZLmPipkREFHNCALyP5N2Cg8wxeD6CcEsQXvW3yJB7rDbdAkmLQiTHTmKEJ4fGddbWSknEm2ejnYLtS",
  "key20": "58HsC1keQF4cmigrpUcyhufVCcSuFw4CvSynNX7mECubdC9oKA8CMtsMpoGRF4BeZbbBK1PASoVorPgC6eWZFnd",
  "key21": "VKukrboDVaaSMJkKDyNRdWPTx7drDQhZi8BXZLu2ZPCLdieLUmvUi8eTo7hikesEbkp1siJb83UxHFdTCM3CSop",
  "key22": "5rswaWd7jsXhyRUrLNecrjYgvSzo27dDCxNYLdd8F9mtMJc6bEyria1adrVgUBfshqzLJXcGSStxSKr8QxexZbZG",
  "key23": "AQN4TKCnaR9uDoBxUpatzyRbFYfv2gcsjsrnNKyPJQdVVnTBDt9P2J2pv5bMFWQNVge5UvEooG1LVreArSqdoiS",
  "key24": "UuiLWjidF48VjpG6Q3utfepDNqmHZhtdtLzczYaqh4Xhii2Vvq1ZcVrMMQzx6F9Rurks5PcTPPjewQHT87Jves9",
  "key25": "61QWmZqvKm2Eo1wAycXoQBYWWmB5StbBpRAFFh7XZbHmWyTdCjga7eUw5c9HkF9XKeA9iT7vTQeLtiUaqdg4neF5",
  "key26": "2Ai96Gvzi3eeUtv1ph1B9a6WAoBwT3nM8jBixMXW6ah4cwHbQoRRawc2q7wMz7tGobMijUYj56sjF8ES6ChhG6Yz",
  "key27": "24MrrQyzrEaXQbpsimBL8hyCT2xCjnnkNXfbffB3xYFL5KYL2L8DPJzusmzLGxPnUDdRGMRYxXCocpY5NmQKa7si",
  "key28": "fXam4272J8B7bM92PvRc7L5wnDLEetfQECPQ5Tajb5eq6rdnJr7VxYf2w3cMzqx4W3DzZDfGRPkH71HePa2xznH",
  "key29": "2ZZYP4EmxKXD3sxCuYiLf35CDZzbrc4seJxoafYjqb1gvVbNmAQDPs671kdQV47e7M9A9e6kyEygf51DF1A2NXci",
  "key30": "4T7mXW1saHaQvN9kLwBotb2194YAAWU1UrstyjiNPt4QaF5BnVARBd7oCSRKxDj3BeiqD724WwB9pSY1JNGzXpfy",
  "key31": "2vy8DGjzy8HzSxrbAXUPRKTc5VUtVC2HP7Qpn3fmLV1ZFMqujHnCc1dkrYvhvFJoLo3cznVs7A63z7H72bGAqfMa",
  "key32": "fsXcBsj4PmSGpNTK9743yHxz3Kdc3zCBQK87kjWir7xMZPvQtVwKmNXqMvoCM12HgBCsfHLNBnfHkopxHXeqFJg",
  "key33": "5D5MnUMTAoyCHM2LKwRQtGSPxwAv4hrFwuwGRE5y2tfrtmR3i6y6NLNWb3ETddihR9GcxusJZKkib1nBYSx4CVL",
  "key34": "5S1FTdr4ghyEyjUkgNnee2THEP1N832LDcBo5tctSUXGsgajXVYax4DGEKr5sC3sM8H3pMALt1Z9LSXhJXh2t4YK",
  "key35": "3VzFNwH86sJqv5GTwkWw2X5ggZA6gHn3n8ixDqZy3yMgxCG9SNXmw5YBwxxxwGDA11UTYXTYxgMb6NY8M8UCewPF",
  "key36": "5ZMKJukDMmecn8ui4Co6geLtcEZCTQSCQK21BGvVn7ZYiMzz9ibY1PvQzKYLaKRrDnH6691rZKezMEjfRsZjAjHQ",
  "key37": "5qLksfF1DZUQzhWRyd16uqK799XvzhJJLS4Uc43JC2kZtDqpFENXHqGYe73RZWA3S6Tn1HfNhmHNjWvahrYysKXo",
  "key38": "4kQCtn8oUecpLDU8mCdwdob4BihQQ2QHuidvkUXT6d5JM649u6PZuzUzmftdjPHdzJg1bGTdMzcvPbyuNRt1trvw",
  "key39": "66zdV2bsfySE3LKXD9km12tkmz6GzEHB31MKW7i5ZS57QFDnkS2myh9H2YSaYn6MhbboTSXJ5i9s56mG5SS9rq8n",
  "key40": "9VegnRx6WYtejrQWLy2XjE5MH8HdSsJa6aV4NqjaqjMWtkCZsGwXp4Mf3DL1CPtpWbENsmj5gP6o1cArocS799b",
  "key41": "3RLfM6sWUSyZG8QD7Tz9PhdjL74nbvXsm3Mgcu8yfvFnu5yG5YUFpzLKSKoj6cbAyjH85WAFVKxRcVCKgwMiwzMQ",
  "key42": "4ZEGK147yy7rGW2A4h44521iHGvfNUDp8LH7eXvMrYAMJxB83Ua2XB5ZkubsLW8oyWGyQUHegSHPxaAAGvmgWJRo",
  "key43": "V9NQvSZsnDhohn1yaXo2nNF4PFF8xFpEdLch6UtDDnznm33KLXWoC5RXKMTFPsWQ5GHhHaVVST4q1rbos5Aw68T",
  "key44": "2Crx8jMLmT46ZSfcJxygr7egsoo5snSAKv863crGBWRJ4s1njjs21NBV14PLs8xFYPxY13RuKpkwhWyhUSiADEBC",
  "key45": "4B2NFuKU5Sph5Eom2aYqnLQ7Vig3uyt8hyeuVoW4tXmuy7FW5vmzXyJ3vvC65PMn15heq3H3F5UVGQd3oofDqAZ5",
  "key46": "4KQjoPRMXFZxPkGNaJF4VGptWve6vGrUGCVhhLeKneiNarbaMPXK8Ykei4XMASVu3Y2QL182CVV692sMygBkFKAi",
  "key47": "3nizWi9RTLwNBg9YqfZkJKeNtsZzERHKUPe6BsQtpUnHJfJ7iaaYL6oc1xgeFSKHBDkYDPJzeb8hHJ4UWycLXG7k",
  "key48": "5ptdFQ1FUeG7mKScs9S9nWjHTJBFYpkiJYeDMAJeSijgwDgp2sfKmhGRTaxT1v6ozFfZmtdVarKav9UAAfJMVajS"
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
