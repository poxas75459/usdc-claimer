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
    "264gta6LUXrgLGuk9Mp7RHo6BTqDSdEiTZUg1UNjV9kgpHJ7TTksx9QmogoQHXdN2QHeo6EZBMjyDBe7P845Bxvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rdyyMeV1wJDfwnLCozSKd7U8JzRMGxRnYkcSZoMJkaLRXmjEVxhf8q29EiyM1NBwjza2bjUYxnXMbkaRLP5yhgp",
  "key1": "3rrh715ent1MeZdjqe4mDJoFujtPfrUeorjcpsLAsdtv5M47MHwNcjh6qpXJMkZRtJXhTFowxQC6nyfNfX4A2bP8",
  "key2": "33Qg2C1edwTTPRnVMi3QjteXbSYDRNazjTNWyTeMhkJWg2cQRnW9CnzreaRoZUmTDsJpH1ocxrAwUzq3cUz7Zre",
  "key3": "wrcuFuQXtHVQvTkgTDsrQbw1DZS3ENRYzocpZ98sH2WzpXy6WHp1sUbiepA2VunG5iz7NPjGrumY6GER8EPk1jq",
  "key4": "2uRjjwx2CTCmHw4hzcJSbF6LL27FUuPShqyou6TF4P15pEswFUcMh17PUoV5fHLdMmYyKnvVmRSwPo2ThNFixqt4",
  "key5": "4y168ubeewitrdthqV2qd3Egsg4UgvWwHZ4bhjdYqyQ4FVWNmbc1uDLPbafXqrUb4is5mwX3XRRTii6HD6r17PM3",
  "key6": "4ockcpdKbtzTrwAfv5m4THwJiudEXahwWbCeaP3G1PCdADTioCxNG8MCyS3ToNh9B3VYUPUqXX3i6roZ6BYgbpcj",
  "key7": "2fWpSUPWSHSBkRSB7UTGXrPzrQ4TN8Dn8tLdp88YYpkdcj9w65fs4ZELisYgeQHenCHmunWb2B9nvPTSnVVwsLh8",
  "key8": "3a5GTNa5tYZKtJmn9JRWk7mJD3nZGQD6vG66gTfUToTLBVUFQvppKmr24Qyj254bwXKnjBu3jw4kYDK4ZPu7iVV9",
  "key9": "27GjGunmfjAEfW2VqVUZPE4yF4dsSSCJTsJA6fhyVSy321iw1LoogfrjmX59xUmUzKeNp47rQ99tReTe3maERuqD",
  "key10": "2F6RsXhrgizhWBpUSp7JxQm3mRK2AN9nGuGHfJTQwPo3LhWYsQSVr41q8htudto7ihtQL8V5EiLmTGxGeyGLt7TK",
  "key11": "2TJmHeM1MmpAhorBQdNNPMWf7b7xjJbsMfB1hZsM32i7CtpGPT1raVoPMrMwsZTdvqCzDqvsVZ6VRpRuLyxDHFc6",
  "key12": "2rPkxvAaAxGRL9WV1V667wxjNSECjU3jsGJBpXk2UkggcY8EtZp3ZK9M5p689jSG4FcTaK89iD6zkPfb8NEgnBhw",
  "key13": "5jvEFL8vjz6pMAitTNBCKXpnwT45NZyt2eVDcQZY3sfEt2Bsw3jL6YshG1rGkmetS2PtZuS3j6pXszhiya6CirTs",
  "key14": "5tgTjPMpUvqZvMbmDFy6y7vu6AUJAg6cQs6YteqN5esG561KY9aVNSvbV2gEHsjCDpBJeHJvmSJ6bmXQiDbkXoQL",
  "key15": "rMdMf5CLh9dSRZnMH88fhc2FRnscSAyRSs1Qjfb77PgH1tpM4yuakrm8ycLvS5EpEfcznFDWSqDvdTnFPbU1fvX",
  "key16": "24D4ijFtacCSLZpmbH1oX7TKoAKSuLGFjXJyF3GYCZxVn8CZkdziE6b6hE8CihovjiHddeHADMNQQmGEAnqEaMyN",
  "key17": "3KPcgbCTakMjSM2RbGoDKEs4pR7vDJZjmCp2rr9pQv5GvkaryucnzszyAKXcy51EqZ65GfnjA6mMKj9DjRSfxFaT",
  "key18": "RXFgTfRKHxzLB2VAB3RShEDi259rZgREyxsFmEJXjpSyLJa8KU5XY6ieT35ogpowBZqJYicz3g4EH8mnkZzxXJU",
  "key19": "21BzhUqUyhvJz3tVxvcjp5dUpRQTA1fee5K1VUhcwBEaZLnVrSViPBgLhcDs4Lm3FPhoE2JeCt5oAsU68R5nFX2P",
  "key20": "4ZHWRhN1AwTS6dK47Tv6FsRrHgyYFWPhPHdmRCZ2N1QhC45YcMi2n9aSdiqudWB8JTXrBBWkDLfZpLBNbovp2RDu",
  "key21": "4Y9mdrsdbuMkjh9r3ggd8eQ1gMT5TFzroS4vwamKCrnkUVXeRp7WfCmenC5tu7SPj7iYpQ4w8Ce8ZawzqXVg7P9E",
  "key22": "3D2Hkc1STvqJohTxxvxBCb4bw6cbc7uV8rybeTSFN4g5RshrQRaR3CSqmPYmkxmpsNKVoZKWdTzbMtPJpTFP5rX9",
  "key23": "2btaaQuqMN8pcDDeMkytizoLdBE1Q9LEcqyRJ83nuhzEuu7Fnf4Js7GP6a54MGFZTEqpfrcJFz4Ln2ioUYSqNT6m",
  "key24": "3TF5sRP8jXoVCSTUJzRXWuj859f1LyAVmH5yrQts85bDCttsFo5XcmT5Mttgdn5fPFqY4vwX3YwziqLfvaHhPKfQ",
  "key25": "237V9chcnnzF2Gk7rqYwgVtXa44huEYqY3jdtF6LjasT8p1mDrwGe5cpRsrMVe6G7wDRnWk5DJzNBXenraP2fsV1",
  "key26": "3zhkGjspt3pPPnEzoR4r2j2H98nZbxJXypDaydqB3L2Va2bX5zjwNSp3CYrHGy3Lsj2BG1kL9cv1ZX5f2R8yuDg4",
  "key27": "642YjH6f4Q4Pw9Eg6LQ7ZZH9VxBgCFKHmeiQEmJwjUMTchLCkd6PZg3v5D1YQjmJQcwa2PgBrmYQ1zRpPZQRuW5B",
  "key28": "4ai8roE5QRkZBTfeCoPhUgbJuNBcik7mYnwwB5msVsbe8mfXBqFBCkU41DsDZ79e2HRbGfXqE6v5jtVG411G6pKF",
  "key29": "3Q8jB9wpEgi19rJbwbQmqR9jeE1mdx8Qtesr6Aw5RtPzeZ9Tgve6UXajbpj6bojhMXDq8g9vPJm9yqTf1txZsEkf",
  "key30": "61Q3FDJzcvCd5X7bTFhaB89DVx6AtaRyPQroeLjnCZJ2xL2X5c5PgRN7UQgfDuvZkhvfchCFCdbBTaHf8BqGM3DN",
  "key31": "EamJJ8ViKqpcUXj8eWRWdgqNHPqpKUyPe1uQUzi4T6o4txCKVSw7LdPuU2tB33ZdYXFsK1ZGDH3Qw6YG234yje2",
  "key32": "3kJhSU4KoNEhqD38oh3YG4vkjsK6qF5Ly5kKZnPMSPJd7APcWGB1DGWjbSmrhvbPTwuiU93mZKDaAhiCUGoNY2qT",
  "key33": "4Hj9kJj1GuzBbPkfKSK9rqE6WvFRQLnvkQoHi4PdzduveDs6ABnEK3BYLz1Ydp4RQn3ovKLQooSQukiR3gaFb1qc",
  "key34": "2EwC5tfDbPVCrsddJQXQaXofPqyGLSgtv4Du4v1NZFEdQVyeSUVi29WFPCVBfPpsioSBmoA4Pi1fMBnuhwQRk9Kz",
  "key35": "FXzj4G1d3ZrX8hqhJjdjY4vtBEAy9Z8mTsBVLM7qXgGHbeNaP3ry4L3WdVf1w7va5LgdMoBuKh3v6RUawrTbVcY",
  "key36": "37rSng3B1MMub9vbfSCboHCeXdmhKUtmppfPxHGUctrsyw4CEtz4CGxJ37DYn9ck8XUR9oQE2npaRGL64G7NMYz7",
  "key37": "4TVduQzNMsyHU7yXqwnVi2MEsxA2uRyh44oyYFMmMiLRAKxLysSy2vCmjCzSxPzJiBoJ5GKUU7FaAenddqNPCgXD",
  "key38": "2Xih9Y8axaH7LY7VfamAzthL7FwBGW6Q1esDGpEdhojZgwdYNnGcFXDXKsqYPF6qtMyDBGXtherUgpE1sHrWvUEA",
  "key39": "623PuQFGZ7yMZ4bwC5qknVCAJfVjWCZmeqV6HFL4RdcSUdddyrySMsp4iqGmv5d2S9VxNqstGfxEzycjAAnbtHRa",
  "key40": "4qUa3Gmhh439A98bDJkWfHPFoRYQNNM4BxP7nMSZKgLdAY2XpRqz3PL5FnYT6dfzzYM2Zxqa4MdR8FYJP8EWfaK3",
  "key41": "f4f5bWrf5dqbXkMkvVWQqKg1BmAouC7KAdz6cxKJkpKe97ERGjZZKgw8gPXgran7fMNv5cL6JnRXw2SsvA2XiEo",
  "key42": "3ejE2FC4bQmE23oF7fLbsaCoctDKc7susRKwMdi7bu3nGrZ4Wzg1C5mFqRt9hWPQMK92wq86QsAAhKAkhzVkwwBn",
  "key43": "tA21BVv1FnbfhUprVWJEpQWT1YPz4QKbWTsKo4hczuwMQCXxpUpkdmhDDVzGyu9NbadYkdgLvnMeXrRMq6LEjGu"
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
