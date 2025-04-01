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
    "64AiFo9LEJhUrFkBYMLzazsiwC4G3FTNdAYEp84S7LWyAJYZfFjksDskNFMqNp4eSixckcku8LGbdyQmh3gxFEKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zz1ZR3hcTzFa3Nozatk42fy461pkVGvUZoN5QKpFs2v1A1V7iD7LXRDjy1TXBF2cFMQjk7fYYVjiaLutiDGdVaq",
  "key1": "P1zv6d4mywdB27XqbWq4gu79nr7u1XLSFcZKhhy4E5TT6xLUibyexkghXc94tBCr7zpeMdEux2ZbKGDebFNAeiF",
  "key2": "27XkDRwYqLGvyTATMuoChcr5SkE3c1iRUsoPri8CVt8MYmD147MsXtWgKapk7jZev2muBpMUMgiowA648oc4rzq8",
  "key3": "2LiGJvL28xfMkgkkzGeY9v1Us9Jn37CxoHr5hPmZod9NHhiz4gTrFPRy8sm6h9c3kZ6DbdRedwsAFcR8TUui7aw3",
  "key4": "EA1GkbP5u4NE23ZbxZjQnuEgzEVMet8gDnwttfvio7SDpLDckKQNEM68vCcW9Y5V3zjChXPXBHcm1vWPTViZhJp",
  "key5": "3qDusDxScwZ5yCjHo3V6N3kF9qyRqwid3pXRHyJhoKapKnWLcGieMf7TeFUCXYWvVZobj4NNcn8X13cK5aJJKvW6",
  "key6": "5C9QH5hQsP78bxbpG6TGziT1bjFa3A6uQPbzpmipRKA4WQqcSKDKckS4gToALBRxQ7iM5x2RUoA8miHWLtj4xrmx",
  "key7": "5unvhewhKPqPsJiWE9ibCD3F455xN1wSJj5v6rGsRjhpgVSeagfgftsM3sxuJmAb6juG8u3YV1vVZbdkBuZJ8Uvr",
  "key8": "59PkmoWPEqSZvjpYmLBXxNt1jGjj1FHaxSA5zUL2LkcgDPoKEyuQZpxwYVAkpweognGuDH9rwV86m62SpT4fFVhR",
  "key9": "3Cj3KfMaF1o6MSh2tyW6e3iWdpQ8YGy9WEnWUcbHgQsJs6SPKrxpNVBr8LeWhypgNbrjHRFfuht6VwYnCXxqPBJK",
  "key10": "4jbynn82if9EoLB9k6SQ6pan3TJPFrQaVMrL7TKakYkyznc3PwvwjK5n8sty4tg1SEnVbQHBxUgpbybCtqJQWwna",
  "key11": "4fzM75mRnM9st1WawxjDtdWnfZtKxg9efr6iX8FngYdLJFHVSU3Q5y83khsGHWna6mkPzLpeGKNqqcBCSZkeVjgq",
  "key12": "2EfcPhxKVQYsWDd1vsQJrrcgY1teLngDXcb8KoMEr8r7qiqMk98j94YcyQeN9woczV7jHkubbLGAmtcrRSCsGWhb",
  "key13": "5CFMBfcDb3ogDHMUSCersBAwMGRByiD8jzhn3a8yp8jZSRjz46tqTr6RPYgkvmfFivJeyFvrRCCJX8DjWHxrivkF",
  "key14": "4a4QerGX6Wo4RiCxTyw2PyQVQ2p4ueb2F5RVKLiiwbHxtTDC5Smffb9xGT9RRQ5i1yzf8juqpG4fsw8RPdCccNip",
  "key15": "4HrgNkZ6U3GvCWCJvLV8LHk8LhdMjejRu6okvDD3pwzL8kECk5ErQPrvxdHS3V9U1Kum3wAKGFMZ9WRL9QB4ozuC",
  "key16": "2LmaNTVHbbbRRZZ9giybU2A5zeQrN4PoPcGugrxWsCBdfEsPS5bwWj2WR8MpyHMznVmPRcz3CwcJLefs9dznGy3",
  "key17": "5c98p8FPQdDCni1i1daxZJnHGwc9y3pfDMevkwD7RtpPe4ojEvMm2G9BQZd73GHvGmQ27L784qFYceP8PSWrDjrq",
  "key18": "5PNncSwcNDesNJT5zTVKDtEkZEoZXbUpfQuX56RLz1QDPriSAthbVzAV9c2mUeTwioVakNZhj6p6gaA8GvoFitFR",
  "key19": "36emj2XEHhJfx8cv9mAkE2R4dTD4B9yFxcpUoKFtTe8UJimBYy2APKtGoiv5s5ZvSKJ5nXJxH7KwYXTCRqkx3Ede",
  "key20": "2FLWDuuARttUUeP2uCvi5BLa9HkEkWHX6cw5emfLrkXfQcwbY1TYxkHTvCVWJ23ziBuzyT1nucrXbTABreTwQXib",
  "key21": "5ALkuntJySLKBou1D9cmuxEmwNnYo3KDpdf8ebGk2PW2CbjjYviYUNgLy4ptbsHzzQFQhRTLoeYZQ48p5wCQrYXQ",
  "key22": "2C6RUYmVQ14pS63qSfULYwizAeh3C9baUgg9Y3Xiqapsqq3qmb46NaLiYaTwswLvEZfRQTp8Ar8GW58F8QTybr9u",
  "key23": "4Cc2VcpTk3S7aepUL14Kt1XU7pBP8rTRVoXjyETXb4pjKAETSSLqR5Dha5axCgjCxk3db9XUA6CaDRnRotfboWLD",
  "key24": "4Zh4Mw82Sshy72ANCfJcRbqYeiipTQWggxfsGQi53jsWgNrK9sox7Nj3z4SQxm1BUY7TMb1EvFDuymeCzpwYfusp",
  "key25": "5j4rnKKbF7yfcsd1KQQ1LNaZXrxf2vqPN4wYCyx17PMBDbX9rj2zvHaeykduihcNY7NBCQ3m8VCEbAk165UeKZs3",
  "key26": "3CofCjPDQWwzzSZgHVZjxh2HKWdPk9aZjj5Z92HbMRcAt6AHqEbt1EhPShAY3kTJCsXbHUUPrzWdEAbp5GJXGYRk",
  "key27": "dQbn9a1CwrePdAgTQw6ryeC1bbSxC1fcWPrZDXBD5BmgDWpXBzncfRBgmX7FR2EuVNG2Kg3ZwAUkut6w19yHqGM",
  "key28": "2iMCLoiA4mykET9wEPgjGU92hXZr9q3SYf5YToEdWEZ6rW5tDdX87Skekt6hY7S8TcqCxFzyHfrukczQrJNWXQ3L",
  "key29": "2vVxSXLwWkQnnTcpCHniSfKpF7vBrTzz4V18TasuLcDxyQbaH8fQu4LNhwnBVcGd25TX9ufWbdUfnNxLGYXHbC67",
  "key30": "4E6JE3QEEMBFAZ1Gn51Dnved6rjc91JhJ75CjWVbXocvinvtrN9tkirQfKTLAQgHsWPzq9jQrZxCWg6pBS7BPPKX"
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
