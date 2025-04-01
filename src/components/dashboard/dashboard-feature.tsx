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
    "64NxysJzwioL9vLfGB4b6nu6c8gFD2efeD2KeojLAcfoxPoNLCPuovQTZEevMz1Zgy8yyDrbDgn8EcaexmbGbBsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zjMVhx4aCfKqmyGZWHNvHuiaSrTm6S4kCVu5jN49ApBbeANWy1szHUQTHwim3acmCKZa2U3DqRQgphwYLtUhjro",
  "key1": "3Jsafy23CXFZVUNfkZMyxDybF5dyx3ZNtCVyBqho3Loj5gMPtE5EG1qGgfAWbRomSkHEMnbnMmVYYR2fZVMQ9yZ4",
  "key2": "WtAjJX5VEjgUgDZLb3uH4JZVoXffLM6UwZwt26E8N2XjyYP52N4Cs54KdqVRxT6GkDN3WPtkdi4wTZMTu7jQeSk",
  "key3": "2SeYC9yiSFdkzK2ANsGncrZ51VCCWb317sHpuBdCGZfwVYyQGQ3ZBamsZaNRmm2mQFFaAgoENasWouTYq1FMChY6",
  "key4": "5PNVo8xGJg7GmDGzCbJGJ9YyB6jS1j8tG7q9xoybRCWjmsFAcrb2Fm8VmDvyrMBPngLLQ3gjFmijiZN1jycVXo57",
  "key5": "4ASRQTnhqx3aNtDsTcXjQMs8NyoDeGCWUxc6yyjcMU2rphrhnUaEaU3mxE5A9nfeBvFc9kDTYrXo72xcMGNP32h1",
  "key6": "5Y4XmogrJixPpyDoYcrTf9TfwkBfWvL5qz7Pb8wqMRy72x2bmUHUU9tY1bApA3egPUbz9em21rjPSGme5ULWoVAz",
  "key7": "3Y8oavbhHUAx8wp5WQiKSq7Vjuj8jMSJ9NtnvuWq4xkMnUggEuT9MjJDn9L73bfQiii2k4CYv1w7YkcDjTbBsYHK",
  "key8": "2SWeqqL91U8R8focnVgCSCNJq886FuoRvpRsJ6qBf7NDhKEkFSX6UAsQ2cdsJd7tCAPi2xLw938dkBnDJVwDXEQA",
  "key9": "5TpdRJGDHsoY9e54U5K6TafeTKDPp9vEWYGxhjwiSGjCuhCdquPUxgcrTymbkai6vpRjnjLgVHK8N2Dj4toV3y9C",
  "key10": "4xdC14gCLMjx4T7igbf8ERXJt33tfbdArdZ1GZuwtr1z3nJZyBjA8sHdoCd11dukAnZb3of2pDtbKF79dR7pkY5C",
  "key11": "5cj8YdVqEvoiQboTnor1xAQW36hyKxPwVfAVivQBusqLcYKzTu54B6dwGWvxHBAi9oQpSSjJGBRaPznk5oFutBKB",
  "key12": "3pChxe2cXLnGakveaTs637E8pjd1GRo4bE4ZqpHywHjeiyc1yPiNajrwP7Y5iYKj27Cf7mrAVSbKYxHR8kkYCbMi",
  "key13": "43NWiKm4mXRCCRePb4J6LVAPfUur9tjh8NWd216ZqfVLLjeHnjCL4GMGwcJDwbMizEGLrb2etJrZxZgpxguhLzED",
  "key14": "56teHHsgKEZS28wbR5URaDxAbTvRKvFzvFvjtKLR2sPubDMMXSo6NzYmqmSmJZMhHNPdvckFuuJyRL4HyPwEPJ8V",
  "key15": "ZBGNDjJNQ1X9EEpmHve9rnv3LpTDg5sEpmuZbbUiFv7ntGsqfSSrbBciYiAyx8GQb86r8nTWzyp5xZtYNkpYL6L",
  "key16": "42WeDnujAwbTrNyUJuJGUm53c6ZxaZ13wyg4Hm66sBEH5nMRLraSnaKn52i38JUiQZmTRK6GRdepvjVuEK6MrSAM",
  "key17": "4MaVvgAYfMrr1tLUiHUWpPNuVoSUZBGyntEjE3EvNM3vTzKvfy8QgtBp6E9y3CK5WMyVJXpJnn9cWG8B2sum2rmY",
  "key18": "5NsvRocVgAcN9QnWZNrQSj4HfmeNX2RaPjjpeoMX5ozMapTkt3LFooBA8nWWzKRhizciAHg9vvqUi4ZXpt1Pb8JS",
  "key19": "31Ct6ZUy9rmjxi9S2q3FHnH3rNFZVQjVNt24J3gaqCsSaArPNnjMozRL3GPJ219YveWLh9CMtN47gJ7rN1LvAZcF",
  "key20": "4bhgmAuBU8SENe7wSoP5KvjFMFKqFUZi4N1T5zthLVoR23breKHV7nD6DgeA6vXUqjV2VQHePDeREFsfekk9EdAm",
  "key21": "2PY8Z9Wb2FVZKbiAJA3pVhA3FrAoeh2cJRj29yH7SXmKgNHtsnaaaYXXGZkieBc2WZPqCeyy21AhM3pA51w8XDnc",
  "key22": "5NWH1f9ymVNYevrerd9ApzCUHResaBGgzyYdfSniVhyKrCMfkGFRpR3Njer5iD5sBQULMoTdv9JhebrPpzW1ZoEV",
  "key23": "4r4usiAb6n7UDhi32VmFWhxTdDsb1Cnfo9fwNrEYXNirHGnBCQA5oJmSyPSQVE3qz2fez1B4iVuxnLgjPZvbbUHa",
  "key24": "3ZiHqV4cMswGiyppL2Ly2ZudR1skpxsAYfZGyjCD46CSA9Bq7j7u5CDW3YwNy46mNezhW73H4qzdYyM71qm539eT",
  "key25": "45Pd4UvQtzoRkydTdVrKkLBsuNxXsjPo95dXVfQAezgfMhSEUuz5vKQQprDJT8DqRUmWzWQQC4tto6SQe8u6x168",
  "key26": "31u2AjGDweXzQsUaoX27ugo7ggbM3TpwtVYqYFY8GTpSu2PGAs6v7wCG9bhJXv7WEDAiXUv4nVaX86uQ5r8smW8G",
  "key27": "5m9Xi897eU1ntYV2kTVteuXyn7dgLipwbjvZhgZkvNK5ewtZJwLREvHQDr9GRtqLSB9RWZKNMpAH4GAvUdfrCwca",
  "key28": "5Zeb8s61MUx9xyY2qhhLmwVnFGU6bC5J7RhhKbpLuM1LWz9xcgn9HXoKPN4yvkRZH6HfvPP4REfA1eJcJdyvhDEX",
  "key29": "2poHvnHQ1Uco6oe6UhFhxfhymX8pHAJooKTf8APPDVgrfpejanvULr9BPWnHqk9Fs1SxdWUrPH8GrCw7GD1GybR1",
  "key30": "2rrU8FUqELAXLwYKKgHun5Br4tBBw2vx9KEmsCMMP28eYEsY4fZyws6cGzfzgCSYQZY4uqSYWtiameLGdMuNXtBt",
  "key31": "5Fptt2m6hEdrXs6ChPvrCCJZKr8fYnce3mk6nrfQfaJAHSQLhoT4EJrsEtixNtZkqWAaxCo9SE6bBzXs4RHfABFL",
  "key32": "5PjpTuuEiu2LyktQHt5LUmmZRhoJpanvGg5i7F9BYQWztAABdYfqWwajLEif8Cq67guDsaTAkKMNJcFnqftTV8Fj",
  "key33": "25t7QkhwFcbJJYw8vjRTNM5tas3H3FtCRypvttZ5oqUBBPcBwdr28hhGS7nzgzsy9owEbofZFdbweZjSUUTBzXCh",
  "key34": "2ivocR3QT2euFXtij3992VkZ7XHPKY893xTYXuAQ68YojqeAoLwrstnNVF9DYEX3UhdPUHJxn8ceLnjDFt7NAbi1",
  "key35": "KYkch1cFxcZNVwG7Y4qGH6cCnKQSaN14CEvQwFLc4GSVbMfA9ZJWk8pdss4iewaaTZWPwS5BrQ82qUWhbRqZX8y",
  "key36": "4JyQZ72Gp2gYPr2nHYPFvWR2ZNPRS9RDw18CApdsyZAWPse4hHy4sG7HWfpEJmCTb1D93zUP4hAqYQVUnPxVPyN5",
  "key37": "2dcLzJTsc1ZJD4nuYWJR4s5zPRxW8SqBGRMMVUNNPdY4zPuWbWWfNxucSTdRALKw4jFAxh8yeXRsG5L6mUMRS8vu",
  "key38": "4cfsQHKot2FV4BoNL3zwDX5o4Cxphwr1jCLE23mMokjf8PXhmvvWoppjQfHTUYzCaA9ZwrtyRurvEzNiijUWWJcD",
  "key39": "5vXQ9TrvRq6SmLQe2MPyQqDHxuq9p849drB4diScJN2vnP6JoyENPjMQ6WvowvnN6Uc2zRrT7GZV3TNSBMLEC3nD",
  "key40": "496Xw7BvNUwW9oHsuBduCvHwMm14CAJXBe4hVzxwAwyJ3qjdv4wZwazHyrSjXd4aPXpBs6bTpT9kpJ7zVKwJ2GgY",
  "key41": "4a2CwEDQnGwVddFKWdzPJopL5VboegjfrXBUR6pUwHkgGsm1cPS26SYtoTaREpeDjnLTzN67vE2Uxb8Pgoc2rUdo",
  "key42": "Egrfry19hQau3crMVvZy1SdaheNzuKdVf3ztoNRwPzqpgDVG1okfKykZD8d8XN9T4vFXVpSRPxqJV92Per7Ayki",
  "key43": "5BEcfDPB7utMaFB2uEpr3oU3waSsbbwjexrxqMQfg21zP4wauyCbpEjTaxm67dCZwiZFL4exgyUDR6PgvQcbhJ1p",
  "key44": "8uLsHWSRnQEbLVfK6q9y5XVspsyG9syR9kzjV79mxWg5ssXjXCYPstRoLjvD8g7ExHKNoy8x3tmtJDi1BBpgBvY",
  "key45": "4uoGSnzRXzQoqtfFrkUdzt6thLm6d8QzQawx72psGfFP9Nj1F9CqpTHYv9VsdcG1GjoHim2nJNkKrVM7MEy7fjJc",
  "key46": "4GYk4U4sL3Za73YjHKT4E8eWVqdNWhRmE2kp94svDNTd2SYFxwjspbLMJJiNpKzkKUM6GvUWMqTMe3AgaPuHy4JW",
  "key47": "447ye3nbLRV8jCVzcACx7TAoR46cHmdVDeZ6x1o99cLuUhQCpCtnHoaFZZi6uxTPRgLjoLXp9yYXsMHg3yTHganU"
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
