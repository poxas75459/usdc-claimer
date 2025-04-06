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
    "Qf2PFeSQXW4pSfVqHEmFsSvSxrGE4wEcFprMNfV1wMpLxfptsswyazouQeD7qujmT56DRdfYrV4V1WuK4zerJrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iEJfkp3as8HFkoeonUR4YvXDUVcpparwoPgWMiixd4HrXV2mEmmGacgVTnNMnAWasrD8BjxfFLYpaH83ZFZfHk5",
  "key1": "58odq5pZF3SFF3RhnEptuKv8dQtcc9LfoerR963594rLggnid5fLbNFkXWoR5DACDJBzbPU5dqDHnL9CF5GpQTo9",
  "key2": "2rwN9YNNvRs1CzkQZnVG6mXXKaPV9KmpvyquhPjXtRS7DPtjUSTMmVjY9iM82RFndrceekB6EqFrfgTqZLyvykZ8",
  "key3": "3baLwhCQ2Pt2RqfwauJKdVZqaun9VRv851T9oVqS17CL7YoP3HimbJTmdiqz2S62ivrnR5dK7XQBksUxiyhbRy9t",
  "key4": "49Nx3B5M11bqi7bQuToncZqj2nwMYjyA4Xa9P8PVCY1fYpBYD4poCAkXstdx4Zxn2nxQUCsG7kYXNuBesH1W9E47",
  "key5": "47TW72XNLUKsZGEH5Xs5SKyjp25m5SC6sfzsx6G6mLE5Z4PCYqWchmvWqv8X7N5z3otrKDptjNknkjJzzZkTE39X",
  "key6": "2GrGEaDZ5qfT8b8idtZ3cYJqa1XR2ckjpDdgBs6dWjzWV82kCQALDwdxPNcgBxBtkv6CUKeHd1kHoThxraxS3pZq",
  "key7": "3RBufJEzeGfcVAM5YALKPMP3WFwbPz6CgpsPXd1kFeH9GiWY6zYP4bvuqYHRKjNgwhKSnttpD2KUhf46ion7NctT",
  "key8": "7yQ3nNbQ2T6ETo7tasFu7JSPuSYiPgbCbPZHeANgZRX1jhtrxnqEkVj6onXVtNrhpCTXWspBhAALiG4dFRaeAgi",
  "key9": "4x8auKejkYAhLk1Ms9WAZEMopSuk5WLM1gL6yYWgKfHPvCu4zY1fxh24gnyiwNJRKho2rVqzzC1Mvu1LJYjSWPRB",
  "key10": "4v296JBTBC6DozVMbqaz2wqQfujbwW3sn9zFLvSQojhT5afTWgCqt91JGSqKvuRVtkCP65e3g1tCeoPAXNizLBaZ",
  "key11": "2LjnxMBcRt2gLtQGSGJhJvn3PJG6AQ8yz6Xxwvu8gcY9e6pYBxAbz8rxMAwVCqpV4zUs9gtDA7ZEqcqhyCVLUX5B",
  "key12": "3i2W8NnMySDzxzu6hZ4Eq6LE8eDPwnhYw7JhyHnGcsVuW44c5CfwDRe3fR6rrotN2LqKje8nUk7UYGLuZVskmtkR",
  "key13": "5CLUmuDSJjyVcrnJCAxM6zKCp4mKyuNzZEaiL2RFe5vuMYpVU9ZikN9xYY7XFfQuBQ8G1B77UBVYF2fADBCjyhFp",
  "key14": "26YhevstAwYGTStpyRehHm4ZyB4cLWbhse82RdE1zgNrJpe98ecTVSCFVea7JA7GeYgup9cYL1SYZovXuHVBExq4",
  "key15": "3KjsK7TEWpKVLsnoDohFHQd1CGaDkB6UYpYAc5g7vKj8cyG67WQvbjJckdDSRuV1wLrCSUHyiaTu2mzwc9YkYSj6",
  "key16": "5oHtJGU3v6dENNGQ6qWvzQgk4qTHLqi7gWt1B2VDd92snRy3RFta9Gm96WPKy6MheTFt3tMteU9N8EfnA6sJ41oF",
  "key17": "4HADdezTL8SmWtdVMNB8LUnfJ9gCCLsL4HsZiNKdJahgnm7NjJmpQp6ctK43sFX7bgum1rspcrDnwFvfihjgA7K",
  "key18": "4bf1EiLupwL9zmrPkDuSt3VwmvKeFBtgEs8EPXbSzNj6HmBeUqGUnRqqqfKWCqdzUNAEQTNhFNJ5S82h8AHQawQc",
  "key19": "31w1yGiNA7vcfAPehKcgc5i277eNqbye5Lj3gXWBbKax75Qp2NThhL7b7yJZYXnUb3v83QfyBxk1JKq5p58TNVnw",
  "key20": "3r58HzHSSKvLa2M2pgiEzezR5J1XA1qURoYZThguduQss22YjKeuWsinb6TcE2HEULzyry878r6Vp7xi1HnKaB5V",
  "key21": "3fzGJWQgbAB8BGZHoPiGnZEGLM1Ecjgn6az6rWmraMqJPmjAZ1BkqkoHjRfGTyoNSjzT5qHVr9suCtpYhYHP8Rc9",
  "key22": "3LN8x5bvVEZyw2FYATwoUKHqF4GL6tf9GEe1J5ouQgCFCgihKJvDrusJpid68NoJXZKLT57z7L7jhLA1fFNVxyJV",
  "key23": "5ZrZR7DqncBfHJceeWcpsNc8NGrRPMKWSm6XojErLfbacHpxCefFm44dKLsTPDzRV5R9w6M85M3sX8pmF2NuGkfB",
  "key24": "3YWEBc56GcjYK7aCEVn7FwaUL8sqPU7ud5cF9pmxFzd8x77sgMPyr9P3486ZqQStwmyhdobg4dqsyAWZh14M8xwS",
  "key25": "2yam1jV4b8RTckN96SYav1oTSsFbbshQPjnGcrhBJU6qs6dJNg3i3YyrvdUEPXpjXkdan7QD1jDZgEjPrNygV9vh",
  "key26": "2XTQww7dLQLosscQ2tZ6nVK6dRoLJfRinZrNyYZAWaYsu3DQVDaGXcmcBe1dc8CSMmE7a6UvsuZC6i7PhbrzLAW5",
  "key27": "3etsW33yurDLZiqRkvdeAUwDG7opziN3PHi97BpkJDQraXSecEswQX7MuVZqu6njxfjweVQPh7ohnA6MxN8noBvv",
  "key28": "2aptPZMWZjRdrRSHmxqsa9fNg9PgiMVL9nggrP68iz4DwsuqV3URvmdjLCsy9qrzPkrLTkBXJgCM3LpwuMqavsm7",
  "key29": "3foWKdbDFDcisLarRPHKx74hST8izEjMYB83ySLWKUsy3uFdR2QCk4q4ppUfW52qqhdSRcj9G3Pe9fgE7ZxkEYcr",
  "key30": "c61N6XEEqzxiewR3yBf2nKDu6B3DUaCKNUKwUFaTi3wsYqXzQydDrzemBSd3ERcyhAM52vDi2KzmVbfdXnkAGvf",
  "key31": "5qWcvzg12oCqXMQvLNQkWVV27xNoHufmtZoisGwkPciMsap5XPoAfH2aYGyWzz9Ck5xMKoyTRqSkY7PvYs8ajuDY",
  "key32": "2nwnrA1M44T34e91krPgxUCkaHQmbzqoDssUATUqwxDeSVSET99rCFxV3rFHhaTTfT5KWYzhfQDuVgW6DQYzvuf8",
  "key33": "5ayrxsyH1h6egpC5TTzpBZrsitUZmjamYytZgrTCzMSfPeNzo2K4NvWXPAgcyDPErqeuzoqqzR2BKVDrutw3h9DH",
  "key34": "s7aPyy4WWYvmaVbzTzifa5Mn7o7EbgBV3aasrA49NQken9xenDSFbuoPVV93GfsYpM64qtqJzvC5tb9SqbRbv7h",
  "key35": "677i8KgXimdRktAX8VhyRKDhqWhQv4uErkxRfpGd1FVj8hyYD8nqCYrqiHpQeHKVXQgedYcpSxVc7m82RKC3aEsT",
  "key36": "oQ3Gi3E43bSFbBDr14LQSQPUssTiXpQNtJc39FpDvnau42EZPsykR68nUkT3qKPCK16kzjY6BN98cksrxHp9tqq",
  "key37": "3Y1d1rUeP3FzochGhrg4VaESoxfmEWCeY2m1z2Fiv2CZYfGXFuobeiXMSAkXHAakniLQ4uPU3YpeZkhQY9B8oTvH",
  "key38": "3nBZsgacXGpxuz8Aapa5TrMosM1VjsCTSrs3vHZWHP4YoYqudtmUaci3fqrnCRPRQr1kpfx1DefkcCxt3hE1j8FG",
  "key39": "5MozmohGjC94netE6NMU5Dgr2aMwcjVd3Vsnnvhkh6C6j4jGUnARicbJywV4UwTsWELtKLLQAe51KZT27b1PfzSg",
  "key40": "4FhMpzSFkq11oQgma9JUrcajtXq7tgQCdQBhfeKqBFAn9TbNx2NzLWiqxjjRr16NjzMvZ4DnxSrwhmWcRecd6NFW"
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
