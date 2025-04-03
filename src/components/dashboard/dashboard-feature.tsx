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
    "2rQiTG5YCTeBhiSXbmynpyy9tiAhrVnzWE4amgoYqfomqXwYZN6tBeK1bBYH1qMC4dL7LkGuQdi5wpTLLTuK4kQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bBV2gy3HfmDeyvHtB5CfnPPMJhUvyZ92sWUyi2To5UdMeA7snoDciqqbVeYzqWJMWWtrVK2pgVL6FG1GJBX1i4H",
  "key1": "PGqCAHokPuqTE285EZoUXcxZAZ3vjoYJHCD3PaEWs9212hbJT5J7d6DgmArsXeWedDSURo1jxiAnH6YgT1Nhkn7",
  "key2": "4CQzNvVjStMaaPCcncL7dhWefXLrqXGqoMBgJDT3PgSzB3vFtZCs2UgtKJpKnu2yp8MaCvBT1NcvacGeqpwmc3fS",
  "key3": "216Yuuk3WsN9nihM5HZqnNb6JphqaGzKxdbWBut26pbWVXLtmu7gwrmu1uk5ZZWVH7Eq447h11M3UbDXrNVhau2x",
  "key4": "5P7w9hsKzr5vzku3ccpiNyLxJFVVxsXA32JMSGkfichnntjTekSJ97nN4uKMWXTz6pgiHNCLUk8z3K4Pb4uuuNiZ",
  "key5": "5Vp6oZHcykjScvNfxmMqim7xLtgrmUZrWbpGXpb7mga4pF9SN6QJ6iZf2p49pCvTGPHgeYfa5sYCL4h7qZapejYo",
  "key6": "5uDUW6RcLUbRHoLdf9mE1gkXCiXRiNDjuQi1MaurVaw91FFZruvyABngxhp5SytxjLgc9JLoyNXcYa167T6bgvyg",
  "key7": "2kcGg6T3dpix14jECFxofYZjjvV7Rm4w1wVvCWJke325gwi7TK6Au9stpU3XDXzEFXRcjSwvVEdY3tcTjVdUfEN9",
  "key8": "NsW4phBXkGxzzqRmhpNhCWNVTDBn512cYz8dB1NEoXXck438WVDYH5dQzvh7QJhtuvh8XhvM6E1NEa9R9D32FVS",
  "key9": "66M79dRsz9KjbARi7PxhFQWba2hpJLzYYdZdbnsTqpyhDkfYFAbPmAnbKtykDJbXHPQwgdYTQe5GTBn3JFVVLPym",
  "key10": "4TAtZ3MkzJNpqjM9B58mgo2amHq1dYbaNj5iG6KmtiEo1rG6GnEgqTw7L1x7fmo81zMY2Ja3DCrsGE2jVa2ExWqi",
  "key11": "49ys27gB2HMhb66C71nQMDvDoMrVuhdDCqaK2jgyY7XPidocZPqjArtiWXAw5ZMY8aTcammU8vasP4WneYUktP2S",
  "key12": "2uMfn9Q32zTmvR3kJaeAiMzePbU6inT8rVyaa9UrRxwUrczuZdNPLWJ2FCuyWTL16D4fTDw6jmrJRNjb91pLbRiN",
  "key13": "4xLHr4vod28FQNPg4gjXJGJiCSHzGR5wDL3qDrMS4XQgooLncyhpNNFkSYqNZBZpCJkxCuAUpYFnPV57WSxDZ9ex",
  "key14": "3fAYoBbHVKWt9SJC8o3jjBQtUp6L9GYLVyC7MibmGjSXAaXpCwCF4aisJvEgELoG3kxEAGfEAVKg7QQjAAMmpnmX",
  "key15": "54Lzye1BkdcwvuPRZUMwv7FQ91n7WkyFoQjEgDpc17h6r88hTqAUpSJrsxA9r8XVoT8DYdknNjpsqPEetqtWAX4y",
  "key16": "4dteUHNE4Jcii85VfSLGL5pfuZ41fzYiJaRzeGc7KXFZPcSKRQP6rgHimEjwnSd2ga31MGhMjFBK8zVD4GvCeEAQ",
  "key17": "3sMMMRWvmcoLnAx1v8mXshxjo7jbASE1cY3AUVSBQxcpWX3WncXGntpBsVk6MK9bfqsCGaTQPTucEyGwn1uoGaQb",
  "key18": "2RJcBkPkmwTZDZRgfcoioGhsgeTqreYLKxF4Vi73QmRCcH1Rh6UMeFb9KV7fjZ47nD7effUvxgpQ36Yo6PEKadLA",
  "key19": "xGFMNj385mHUCGSFbBZogaCVe8NuMHqoxojRaZEVsszwVWhjEPRfdP6xwidMkFB13cTUZ7fWMuWUa8wCz9EZUM4",
  "key20": "2rpxReAFfFZG7JGt5JFMUdp29v9grUYQHydKSMYgmj3VsYfzuibdf3LFmodGBHcrNoZN63knMtJ9Yn2r1AGdnT26",
  "key21": "37pAgsb3qXbzgAjNb3uQo4hgarREmUKAf1ea1ghgZgxn7wutJ9TR8hwp5ecNQbSkpYz3C3xNJcyNNbjtMU6uTFF",
  "key22": "YtFyH3Q1pgGmUAtnLqyZpbMenrx7RHft15zexB3PPZ7FhquNBkcspRsxfbCR86nAnHcSK47WJvo4t7cDPHW9JfA",
  "key23": "4RR6p6YJugQwBfYqUwgSRUoACGitHFfnjb9NbcsysZ6MNn5HQtBBpTsM6toyAQzffkBVn7ASSPu4vWBZaeh4hVtR",
  "key24": "TT3JH3s4avVtMuh51WYvxbWfXGSbSCAXveZRPcmx5D8qGcugTH7AmgRS8hmaAyhsaKRhUfDk6qYkqvm1y2iaXBq",
  "key25": "5bCUj7NUdYQvjY6Cri4PvBHtzsocXGed2U2DFaNWuQVZvV1aUnpqdqsTEKeKBZ2ymQwYSYiQhdRuJsa7iFDMgojM",
  "key26": "pBtbhMDoquAxPWdnZmjLETbiAHVVpW2i4YvMCvufFvFf4TCMAiFf1nKjGMGpwxkhixuZ2CLhPYDuo6T2DuUQo3j",
  "key27": "3NZGqMnAadNSRdaHS1dAac41MfWZBMZdRQ3XQdGU9Ge7g4QMtB3tLvXbZA1H74YrqgWjoqjSr3Y756pkboxwP1dx",
  "key28": "4ZrPryuVpdjRpdM1gQL9SgMGudDzuTddubMxG8JkeGS9kMkjnwvkVJPS6yYjnLVNCgio7xT2yoacJmtMFvXzfur2",
  "key29": "5DAUCvfeK5QjSxCvaPosnhkExQKGCZxEXjxGw14bT9bcUaDjoJEh899Z4mdoQAorkfpT7xMhe6Nv4xANqZkJMMkG",
  "key30": "mGuwJZFMdfQGTwVuUqW87zNgBvwESFxYBwg4teyhwtMWMJvrmSDMvt91wqYNKU8i4Pty1sVB4eihit6Kq4BBYsc"
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
