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
    "ySGG9WN4TVk3ZJdNdZC4ESwLAq1QBB3DwJ1m1kEkCpAdaR6dz2phWYGb8FhmZiUdtjazzqg4SHTWHbkAxe4kJsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EjiE35cXpf2Cvhc7TnNRoNi6yhFQRuZhrrxXZ5NQ4yW1wYdJhfsNFwewPShH99AVDxA2izi79pQCdiNMHEfpPYH",
  "key1": "47LA8u5AvZyDo7vimCireU7GP5QpxCzhzzuvyx9NUoUo21MsswZAwa1Fe8d5Mt2hVdZbLQjKeA5KNGdj9vYGwuhx",
  "key2": "3hNTdxzHx81SB6Uvt79LVUcZVjqFjwcvo1DPvFN1yaAfUk9io7g8V7YnT4QA7KXagPG5Q4yvbUTygQJGqPvpFxzc",
  "key3": "KtGg52Z1s4cdQM7JnAP6KKfgGXCij7DisYwLvTyY69H2kuiUTp2wJLiE4upZ2fiLwoQc93XLaRxufLZSojY7tfC",
  "key4": "2ENzyazmQPaxP7aWNNBCw2HEt22kTe1K2uxRdqXQLZ2671Cbma3grg1tEjmUFbr7kMKbde1mNLgQpFzvM13a1eEi",
  "key5": "4uEjHj1eGztYwM6X1aSvmS3dytKAcCi1eskq4MmoQcEUrbUdsdprs1VAtMespjjuk52GbPn171P2CMJmCCRv4dBP",
  "key6": "3UdWEwFVwnfcA6UQ21KqG6VjJpGzpNSgqLU9ux7pMzr6PKLjobjhhVfHLg7SLtreWU1U3tEHper2iSsrDDZ3aYcp",
  "key7": "3QSG92bnv93C9hwrfhoBxBiFUMt9y6UsGPbcrBRY2dgz1zMzSmGTNzPXcFA31rGhc7Q23DV3uyBSSQaJfBQRYfqq",
  "key8": "4nNN2v9jiocqjRdEa3F6pAjhqo5ofbc3mHSG13ZNUwK5eWRwwLqqvtTJo5P6a9CjyFZ1FpE11A4L83Krk6V8fJrp",
  "key9": "2pUo1LCW7kjGKxAjE8vBbokePKD4pxCbNPBNywevdZUB5N5knD1gwffbRnx6us1fPakDF23nLXbWbpNKA2ZHEbSf",
  "key10": "qY3ZS7f1kUyGUvTz6amjnd91LLWk3x5dnsZ2qSWkSywuvNidMn6XecdidZfr6mV48HsNa9hYtCK5FxWFMv4EgMU",
  "key11": "5YjKJ8DNAPs6DE1SgmzmQQKcDmC6P7QnxY6evR4UZ9aJzWTWHaVgWLyERUzFMaZaxZpxLL2qeY2zefYW7R4Rzux4",
  "key12": "4BLNZoU6JhMH4ZeBwtaXWztRGV1m7vBHwXSx1RchysciK1UHkCxT2ejiGKmCoMtD1FiC1WbaYFurtkn4az21UYyp",
  "key13": "22ekReouvha2wwqZTq9zKHQ8pMuUyA6i3JeRjAz8otjAahnEfU8nWQ5VxpCkLaHFUSUVaLvEAqmtMufe1egqFvSc",
  "key14": "3Fx2wTnjJNBRWSSd7qVxmLWrZCPCfDzzDzqajaAb7MJCznVLqTepnQsspwhNyKb5Udr8W4XQjH5kvuUfrBvTRjm9",
  "key15": "4nRzmG5dsU1gKDdrFoMRRPWh4UCrobZeFe9sKcrPMUVJMYuuRZKmsLPJ3qD7dH7k6meaDP3QJLdtutpKaVBcDkBv",
  "key16": "66tnrsvCvcsPmebzup2UWmthBXgKCTpZs9ExntVF4zk3urrvWyFTvyXkziC8C4wvjALVGqUapTrmZVsCBY3DStL6",
  "key17": "2xyeZFMHEyyoH13u4XAtTk99tTy9GqRKciBTdYRYZDtvqbG2Mv7ZgSv2QksSS3cMaodEffRyv83JPnJKheLHzkYG",
  "key18": "CaaeJDFTjNPF17E665z88gyiZrSXwgzKXFw51BzsJdY5K9HBpM5tBcz5mPqe77HTY87w2RdT2wTmEgFAzQizDL4",
  "key19": "2xnJpZaXZAosfKWrdiriafKGPyhX4CHzXq7tf2UrzhE5cZXvUVf6fPQ3dJtBaZYteh9Gd1gReTYyNY5VZW52gVfa",
  "key20": "1iHLpX32yCARxXNdSc2rZRtA67z6Enj7b6joQCNiwpfSBEaAVgWKYHy1htiyZg3Xom9474hghYakq7racEvhLt9",
  "key21": "35H6UZpqF9F8ykWWRfETQw3uHChRA88Sq2G3iRYDFBhytuWqmxLZQR9crfyEgGZ8uaM8nHQUkrvnwHE9pNGsYjP7",
  "key22": "2vu4xWvD5ZSyqsH8eRXLESQ1NjTtGiE3DY2sjtoJEd8nWhyu6CgFeDQtVy322jehXT7jCskPKn7V6Vvet6mFhdaw",
  "key23": "5Qdt4JqcYShx74V46LBvNxGrCh92m2VAmqEWf3wWACD2cjdNpKoDfWj8rQ615qFg3Bh35ssLUNTgUFvzD7JRF4dV",
  "key24": "28GfsYDGHTJae3P5Hp2ezuzD3Dhzc6tpuZYZwdXEb4Nqbx3or4ZQUgVZm1VgQw7SPHuEYjeqhaRtBiX3SqLL8cr8",
  "key25": "256Am7uBD5qwrsogFAkwQ4DrFC5u8CAgMS7N16RYPJ7CPyn2Jihu8se8EXUR4feWkcgqvzTKdBDKWthotKCZA5Gq",
  "key26": "fyFKDA9MFxjNSXbtpGeamWJpXQ2xMTg1mRkk8VTnD8vPapTYP5uz4eBWAMEiVwi1cxVo1Gp9nzw48Kf8RditNtF",
  "key27": "3beXGCvmyjVAdVcYqMSLo6bbB5X5pZfPokLenYM7BF85dojGcMSExbBLoaQGeNmxSHd2sKB5fWM2Q1Z5LgHKMsox",
  "key28": "2p7NopZ31Y3sjWG2YLkj3GEDyY7Xyb1MHhk8yvgBBtwtWYkvGKd2fNXKTzFhe7uo4XbM2ey26H1WC8UWCyuRHh6M",
  "key29": "3siUQQLkSrkoyxSExqof2NDjVbtzBeGXTeRbTewp7V2xBgCTXtozntA1BKaNLAfHi7Nhy7n264kAUH3WEXcG7zGF",
  "key30": "5DjxWrwcx9ABxRtc7feqyhMZ9x8bqPs59eENVBjyjqrebCJizLdsnWkQLA26xzQmSbhBxJQZAydLVS8sTABjugoC",
  "key31": "5P3EiY6AJ27kwZzqCYKxP66joA8E833skcMMqduf5PsjVa7BFFeYTZ6dJDkEMXCvoMy7HgpqiCxsPVtPr4x59dWo",
  "key32": "uQv6evtCpjqxV8R6XUHHQ17RkvWgNbCMt8BZemPBPedL6S9NjeVib3V3ZW7MkefKpm4RCWrzdrgLmLCnHFWsUVL",
  "key33": "31Pa1zFa3FztDMb5pHVzrRyLHVjFD6a1UTnBJVm3Q4PWW5n2jiREX9tfHXuops68nDGMuD82oNEAyzyoRa48c1mx",
  "key34": "4L3kWtE8DrBBaUyo3P76ZyhhJdUSsG2bhBqdXatamaps1U2eM8ApjM8YrmR2RnzoYEp4WJsgqjzsNakY2tysF9jz",
  "key35": "3y4pH4YhXcjTuWtYbkPCANZvjHbBPcnreDsvHvfekQdmTv3k7r39P7qHoayYxT1bsVabiKR4tTyEA5GEu4URyGjw",
  "key36": "3psD3pLJq16kcN62qL2vGvjZLcQSgY9fFzEiUEemZf1ha5gjUfZ4WjcWgsCMFi9V5mFNWoW2wyzhToY1cNxLvEqZ",
  "key37": "4Kh4mkpMADzy28WrTmsqePw1HQoPA6rDEErJKnn582iPAv9WoLUeH4uVoscwwuB2GMmk1qBUErNgeRwzHcSasjGJ",
  "key38": "2SWyR4gKnJ19fR3eMU5iFgqCxCez2ykW7v3Eu7eUWftNgzTsN2ZR9BWBQYWAim6SV9CogHmUkNkSxX5XD9rdkHEY",
  "key39": "38kscMZk3WvgNdPWfYZ7T9VuVsDmjEdsjZMD9s22vGoVLL2aFKPjrbGXwXCsXRbwrJoRxUgVezsuSr5QaGsghMMN",
  "key40": "5r2gowUfBnXepjhMsUGLGHeYoCUZyXGHyeS5p35dc3fM1JTEcfR9adFWxpDgYGZWfEg3YqzNZhWCQkUqcY67gjh2",
  "key41": "4z6NKJZ6HSbNmkSaQzbVb6ijcARLqRWMFnNLUXyRSCqMuYibHVTE4AjerU3RJ9kH17NgaNrEiBsCJE7U6DB4tKLu",
  "key42": "uFREb21WfLLBq6RWjNnKKe5xRqUjg6Ri2zjutX4sQJo1cex9c6BXzuw5z831NTGByYTts4agwZNCRk6Xo1CY5ho",
  "key43": "2pRtr3LwPmQGQsDYknHNZ3x3jgk89PwUzPqxqLJAGzUk98w6B8Qnt6ikmjWkPQSjWC1yg6jAMoXKySCRFChnxz3j",
  "key44": "4S4EqkUJd8j6BbrD5LFn3AQFmagAiULWJqZWeecS8oXCB3NgpSmV8G3PHDUYfCmgCavKZ2nASVCGrSMMNDCASJtV",
  "key45": "2u8feQY8T7dMxGH6Ufwec7wXGMMdtYooURNMQSHrnGCmRNzfHTJMMU8ccAcZW7amem5KzPKwsHxAwRJsC8MjF2o",
  "key46": "5HdATnQeEHECWywoGmaazpbznkE1rw54Hdj8rCcnC7Y943ivPVnmB9jj1jCou1MspUGQGp4wHc5c5w6aA27ztn7e",
  "key47": "4ERFKGsyCqWdPRtHpdQMPfmRFmXXcbpmTetq7VYbbkPBmAX5DCxT5oMyafPSUEDN8N3ZvqukUq5UhqAZDLQNCWff"
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
