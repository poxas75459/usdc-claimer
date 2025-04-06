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
    "4gh8Q2jjzVpJSy5dHUL1gPBGvX6aBDHQfussHhLozv1Eg54iEKPgAvDNpSBvHwkXbSmVmbX1bfmC1dgqFNfMzS1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "unetVKS5tgNQh1EKka7FuGqLZxuvFvUieZ6qornsDHSx1fhmhyFRqGPZi9GVw8UZS22Dninsc4djsSDbNA6Q4ak",
  "key1": "3noGNRL1rtTr9FPWTNxfxaFfPwmMMe8pLhFyH69kH69w5XVYXsJgxLSLTcQXbAw1YL2Vjr1xy1aCrpvHYRFteM9r",
  "key2": "4zYCkfqyg197gnnGgub35u4LKACvZJADopfLRaLxBUZUpkG6BHehfp4DcCydti6M3mKnHZdjt2dTqcNZ59YddBMR",
  "key3": "2H7GaTNSQht1i9HvuRySiYjsMakaVPDjQPFopBhWexJqaiYzin1t7oVABTFWS5ug7UvS4cdhr53GEvQ26qwQoq6v",
  "key4": "4hm3RLj5SkwB4ZfPjiahmRxZFR17ZvfhjLhC91PTiA43iVzjf7dMyrFGZ7DEGngXgLt2Q6KuJBF6hjUJezhLxUhU",
  "key5": "5B99gxZPNQ2RbVQAsNkyH1d6bnRLqiHQuzvQ6B5WiVeSirHk2LgwJoYDo9S9VWmPA5x171m9b6DEBT6Zty3q9RFm",
  "key6": "2VxfHskphUMhpkkir6dfPG2Qbfsw1WPE8gKHZETF7257m6exe3csZ4hNVUEfK3syzneuzcXy261SBzrVJkG4sxfM",
  "key7": "6hHrhzn7CUS3uW5rcbUaVoyfeSqudJ8ThCLt5g3kunAze6UTos5yavxv6KSscfCq4XbM6wMqVUbWF7uk4Hyh1Qn",
  "key8": "5DucBUGaXrpBSKBNvCHGKgRbmprGmdjRT58HQSghzCiY9nrQCG3bVnQbr1m7itwDiS4uSmfnjCyshtS682RPrsPt",
  "key9": "5AfaYmdDMpAg8xawLMBqnyPwPhogC9es9YrpzXwHua9GHhiEA73SzGc9snHhTyjq6ExzS97kAAjMQd9aMdcqGm46",
  "key10": "tTKZAg1AvNxX6gcpMv6ry5oJx3nVm5feujC5tL7E7djmsWvHoTh1JpmoFRw3WNaqYFvpdemjHXMdpmXmSRZfMHu",
  "key11": "5R8s7Mukm2BdkF4FgMDjv6YJx8fNR5tA1KVCeHxNsui8QAbfVG13wYaKozLjrqN2VGAnBM1STnfxCaJwymnmoU3n",
  "key12": "5VRADD4ym7GJj3DpZaYvUNhjJSWLb7dFpXi3vxro1FyBV4bAeordDNmahDn8nFrT5J4sTsZ6qJVJdq9ewRubZxrb",
  "key13": "5NtC2Qug1RohwXAWvYK7YHkHH1am2yA9BQQDhYUdFd6bgnqrWkVf1KK9o6uz5yySdXpWDPyNE2MkHssMyiF2xrG7",
  "key14": "Wg13VjLFFBtEBKSzxdfnjAJKXMBsGN9Qojrfr5iXsdsqHmYmm6natgFMirzC7NUNbiGvtKhw3XsYdHBQ2AbCaAE",
  "key15": "29ofabt7htWvPZ3t9GcdjNXoAJPu5kQYUEnRtLmDp6KPoiMbpXvWKFCtuCPiKGhLPzud8gwUAwPGDtsQr5vMaKz4",
  "key16": "21CV4f6qsrqqAJZ7iRcDwEFwRqGU7eEkNTkYjZtecMC5BRKWgQpaB7jTS46WQGcSXaBtZ2TSEdTWAXQKhMbCXLNQ",
  "key17": "2q4A3piF1TJ9Wzh8snPr3PP9GwSysimyhCNVULdbzCXjfaN5Sw23HijZbHNDE9BRA6HApbjVXLXK7YrdeUikN1En",
  "key18": "227sozvaSb5T6xo1njbidtrm988e2ZZnpYqzSbyDFNgHBPe14nkAes37bZh2BbQeZogCNWKnnLduVzgWZfQe7Hvu",
  "key19": "eV8cacWSxCKMAR8h7hoQoDy1M4Ph8kVVXifTJkvnqwr34pXWXRM2MRQaHVt7P1xNFXLUEpWxpmZbv8nkVydTK7F",
  "key20": "4JuT4LPYFajFXtKHMgdHNEHJKH9RwjqRqh6bJJf9Gup8s6n3PTRAGrp6TLvWTc6TTZP2JX1zSRnZiXSYYHqSxWAN",
  "key21": "3nZ8wRjKSGnpo7jkMYVUVnAoP3k3M6gFiKsXDFyhrYTTYPaRL8feZb4wxEU9FDi9Dn3vPk6YRHYTZwdtxUCU4vUN",
  "key22": "2H9BPhNSxtLrLo9wYRWgKL8oNXGD4FkUxj3CuxPEMpNVTz2Adk6J5wqsmRYHaZD42HVg7SbL4v23MTrex275g4Te",
  "key23": "3ahBbcNT77RgEc5UYiMqAmYBnimz8xbmQ9EaNWHyNZi33PoQ36gob4tXasAShzCEa6sTsuiMkDGS78daaAYue6n2",
  "key24": "2trK3HKRaesoHXqADzTkWsAr2wnV1D2GiuD9Hop9zZbEJZcQyr96WBBg9LhEXPm9beoFsmmXX3tjas5L1qfLohgR",
  "key25": "39zpFjSVVkoKXdtNBJ1onduj7ZQpPH3VAXfAhKoN429B7GYDuiPvWA6T83pc1dSpoc4yhjPeTL5d75bWbtkiEnC2",
  "key26": "5s7Ar7FmfwuSZt28MmAmZ8j4ZEQBJifFgqFGBdvFy27r8X5yVX4woxCQNLKHgTeccSX8N9QTYLh95tLE6Dzb6WZ2",
  "key27": "3AmgxNGUViWgwNaKcbGPZyx1vuLbdfnqPgbCJTofuwJgWdKfLtEvfwPubu1SAEySd22MNHo3E6u9uzcgaPz6gCip",
  "key28": "3M9JRnF6p9iwv1cfwRTYVoNnqw4eb4dUtAvSrNZG6q9VJFZ8XHe1TxVFVvGgrGbdf54thuKboxe4vvW5TWCTpoPF",
  "key29": "27x1Uy25L5k7SJUzPRBqSgYJsh1nHBUMtHye1kUvy1TtKw8Qv2Ms7ExFdaJ1CPfDKqhKGPeno2ajqzmk24MctJ9F",
  "key30": "LW635FQNU3TPTak1iVLqrQZWLVMmMTFKtMTzzfhDpa6nSFKXq9Q1gePVPbsq4qPXJuP4jLLVrYzSqsahrrhHCXc",
  "key31": "5zowByZFMGrvR85oTJR6w4zpXQTpyqUop6g5N4cEUF6pqyd3kUQQGb6Y6kYEmDfmtHAAtrrYRiELbinF7174HETP",
  "key32": "3sbUz2uDxhMFyUsshXKMupwvJcgqCiQAKzCTBGsPgmvxjwa9nneVfcRdAi5sbmRwzbNtNZLEpHAzXuJJYNN41Buk",
  "key33": "5kVz85AHGFht7b2ekKbk6VGVSFCB4eWkJ5v9qTmjUXLeZj4peKJvztQgBBEetzJjgxtWd6an23DsZcHnG2ocF8t",
  "key34": "4yancJNpN5zkGs6xxhnq7xME59sUtikBgYRAu7DizcCp2GMuibHGbKds1bkVD6rCg2VKrXwtsdtZHJ48rYxQLnoD",
  "key35": "5ioTixUPbyLPD6pY1PAZF6N5J5ZrL19kCDge8c3ifucYVDJFcZLCkF7KDyA1jX63gKUXNWJUTDSygBijfPpKT3fc"
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
