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
    "xTJeF3oDg1J57z1ct7PunshvQVzZKSqrwaWjYzghPBLpXJPwV2CBJ12X5hcWzzbBPUisw18pgVyuD5ib4ETLPr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TASemC8joouMcAbiw5fLX2QbmN6jKNzVWWFCLN3WrSmp9uLKz9nkvXC2RNmeUPehoJVd9Sx68m47xc6vZhdLGub",
  "key1": "5bEC7UEw6eAWfHjSXXgXZhfGjpF2wvTKuz2PHmdPLkasAMHof9PpRhpjG2mJuLvV3kszfvabEcYnir1R3ET26b7C",
  "key2": "5rYQ2Exbpc8b2tRnGsCv7EjRnEDydgG348qQc45rMVPJJo9qSLtiiaxj1J9PCqayDnG6MhJRBGBBbRXn4haivXhX",
  "key3": "5kQDfnKBRX9umKULRMY6SkLQsNNx4gfEDZ54qNp4JjBLn2m4SJBdbQDcNF4JANgmFGzKHKtXYLNH7nnntqfJkw1J",
  "key4": "54Xpe4vw2CQYcAr4uzgEim4Mn7ZuC7rhYkrFtCoJoaZ7jQAVun4ngxH5CxpfZd86YBHwuBWkqBr3C7g45q19iZ7J",
  "key5": "4x3ZQ6jfLNh7fJcEgKTEtQ8BhkeMrWeVvAw8kYtD81VN33LMadKv2UJQAUcWJ8cP1xoJFFhL4tr54y4RMdvqc8cL",
  "key6": "5qwh8wRPoHxJP587jQ5VJkqgD4ktBgWPN52f36WwGqs5f8VStGpW2qv5vJLTCqPu6jBtw8DtYqkjBNfZrb54j62S",
  "key7": "2WPvfNFERMqpoJzpLfx16bUusBzzcfNbz9DsByoZhPTBk2A3NZjBRsJ6yWT6VSAMGVmTHibCLY5Kw4Jse6Xu8DeT",
  "key8": "4m65un18GEivS76XtLBFPeifYEiww4W2qisnDGnxfJZy1GQW9M6dHcZtitsVEFpHiZidVN7KkwPZ6t1JpyKoUN7z",
  "key9": "53Q1yfWKFBWkimkQip8Y7BXGTk79nTwMjpVQXATQJiNSP4KRTd6WFKD232Ux5zRv7NfJhb5DKazbEaesgBkDV4nF",
  "key10": "5USHun7iowJ4N69JW6k43BfAHVUbj7FuhKnTNVRNaBxAZgTUtbe2qMwS7xMLJZkQYBSdzEQHFHPQmH1DkaEiVnJf",
  "key11": "4PrgtFgATVgAFshpjLWizJ2vuAqRe82Ee71on5mmo3vTksuF9o1yZ7nicFTUnUF3iNS1WY3uvpNwTQ6K7KqoDv5j",
  "key12": "2tXhWkRuTL4J63jxLTQQer9wk43zeqasmmzzpkmAHeJzb4mse51AQUW9KWrqU7o2s4kuExrd2bfWZDoPGooGePSQ",
  "key13": "4SrP24EaLLqUimmPQhFKBvazMYMB4uquDGY5tjJZx29BDHbLG4EgFpPatjGey7989QQGGC2VQjBP4tXapeimz4JX",
  "key14": "VPrpTLfcJqT8at7ALUMS1cmQuktx9Cemsssp7Zd3aAvGCA9NtddHewYBaL5hQwJQLCoYmF3z66tFyLHHN8A4294",
  "key15": "4YbNxZxvkBkuDoEZ5R9HVchCtnmdEV5Q6GEsCVse6HM8yKdEzZpnU1L48UnLVopat1czsFBWGALGFpiWP97c8ZzX",
  "key16": "k3QfAnG4NgPLcT7BCE1HLd7zVxm22KXGhcgK5HfGjD2rYzETYQwWf9ccRw1zvR4GaQFVHaU8G1nEuFSY3nBqjv3",
  "key17": "4B1xjER63kAREE3K6u5wABXT6dkSgqt4dyxVr1Vw6gesvaPFxGtJspXFZnSiomUTqoWrHuhT68xtxjXERKpNEaw9",
  "key18": "3aeLnpnJ13Ezoo8C5YJcksADM8QrRRBFnTL2AaGhS2QfagT66MQfbAqqZnMtizLgLi7UMtNYzhnQoyXpMSypopmw",
  "key19": "4RGr3U8Q5Lwor9xDRxNu8ice1vnEvzPxzk138hGrre9Zo3zCfcmTDVTmbD2jYEQ8GpuJzqnP94oMQjGFfEe5thLw",
  "key20": "2KvXX2uxFyg6MwAjQac9cWHDZ6DufgHVopR6QzCfzZtGtrUZqyXUhHVGEpcqDRnYufLdfuFi9aUroDJijLmVCokG",
  "key21": "5Q6Yxhomwd9HiE16v4Gfz5JsELs8ecVCFLGJviSJQMYNVydJdpAfgGvBByogR1P8diFPe1ARd8xBSQ3STNtkagYF",
  "key22": "5wmJfQXPU3XmRav8io1Btd2cASB99Zh269D4QU8nhpjQX3qVWGbuBAU1AssoHNtE5AVdv65VbdA7QsZfHaCxp8Y4",
  "key23": "VnU6xgKy8QCvBzZ1NMbMbiqt5QWtb3wpmUG6RZLiYPUuTNQDNKTwN6gyhrw6uRjz3cUBJBVZows8BJkqi4HPWfU",
  "key24": "5CpxF1WxMxGE8xDVPnqrNSfVFFLKsKwNHXXZbQvxoP5CViYVBcKHGM6aKES3wALVC5xoaWytsNRcWxYLLJMG4Ma9",
  "key25": "2vW5Hycn9KjR2wGCRxYcQ76sFi2bc9fWdVodix6zvKM5kxVCScHBo2U89HW2ip9VKSXBEvx5R6KYTg3PJiL2z5bM",
  "key26": "HkHtv2xir73JsAPKfbPJdF63bGWsFTBbahLNy33W2SUqasETWyKFam2pNGofsZNpLHrsYvdoqtU9vXAycyayVXL",
  "key27": "mq2Ss4KmZiaFvHnpBUzycMHk3CiyJWZEbUi2FQpfdYx5WuxSSdsNeopCz1dEbLD8kf2VZmZxtgUtB2BVFD7gkSA",
  "key28": "513Q63iLbJtCW3qY7rLHXoX99bn6jfmBEpp67eBLGrCESMSEbUnCY9mmCkfyf5YrdD7gp4GY5QDvSM92pgtV4sqT",
  "key29": "2uurzbwWPbqfPEwuD8Mht8VM612hvQNU7RUXi79amrFeCvkYgj6otHMtMyiSw6gmRUiLCW9KewQEKMDmGwpaPPXH",
  "key30": "JqbkAfzhEhZBXoo2v98E8gHcsH31kNnN83MAH1u3bVPEowNAf3Kyeg9ZUyi5jhUqrR4Aga7MoedZjYgdVSrtwoV",
  "key31": "4z8y9XoLyCNFaCedhE2oVPSgVhEadWYKzjdJYAGFrzvYFyrBzcM7cSZG6sPqTJtizm9TQTr8H7FrWdrcNfxah5yA",
  "key32": "2b5KkvuG4QxMfLrAFjRwr6Ky2ahoRLLGA7FMgPv4JPnZ3rb5EKvkrP76AK374jnQe7Fe5fTA6hBSjcVmEYbXsEUo",
  "key33": "3hzG2mATFr1WGEmkCJdwTbmHfuNdzV3V9bLKSSqpxMUxYxDvuS5xgTk1ekWo5C96fWqPUjYKyhFqGUmKSXw61Sjn",
  "key34": "5JQpB6vuSzhaoFRGjqi5vFy6VmDnZ2StgjqNoYXreZ5N6nfhLRwcQi4pRPgW2m4kjYC8i14FsTjuKPZpdR7WtG2W",
  "key35": "6uCVKVqCfwMqkr29s7aVHLdGGMceEnLCoET2LVHjrEEMbyvesg6q5w1DEQYox5bQ578u5NRFNrw9TdkmTskNRXA",
  "key36": "3KVcj1QKqQHBkdY73wAs7eJYjuKs3og465iMPTGhNtWNsnSQw49tRkSqTUCTpAUGCbfqHhtNJCtK1huoaYJcKkYX"
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
