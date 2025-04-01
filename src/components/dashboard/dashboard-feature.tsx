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
    "5kqaJruPN31moR9Mpg7kS4HHsQEGdVB1FAHFpun4x42ikXUe99pfBQWVJhFZAybKApAuN8kuqUQ7vYUm8xZgiF4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J8u65DfEVCtdzh7Cs5pfZETc51DkBKaNsfyKfF5s7BQkgQBQjoK857EkjAGACoiPCv6QqCb3t3LNshMNVfo141V",
  "key1": "2jxKX1QRHGFSoDfH38ibW4ycEUo4XnCSBQ5tQikzosS3jU8ezzrCprLdzLN8xRuiinp6k2q2RwhSkxYcK5J7mt56",
  "key2": "4qmDsBm4AFvfbTDocPsYVQ3FCYdtyzKAkWmg23ZLQgm4cv73ZdVyP7qZfvg13VoH4qGgJEt73iNjW4uZyqSFn9GL",
  "key3": "4C5kcvanuDsLufEHoGDJcnVvtVrRvYDSNqeNzjFZ3UpNKkeD44RQ1wnW2Y6G8UaW25E4QNmJSniQooZL8JKLUyxU",
  "key4": "3nCeJGkSwW9Mjoj5aRhoPoJznUZ8Je1hipb56KXKzLNa6dNDsRTyCgAhhQPaD7bmXeP5tFXdUSxWzwcfiV8AvSha",
  "key5": "3qPwy7T6X8Rrkt387CA2nsnya5iFLppZmssoicrRyCCk1JtabsRPyxrfznHa46nfuoFdtxcxC6bNUtydAoHtFcQC",
  "key6": "srKys1wdysCYrEG8ZBvohmiWG5E2a7uetk2hJP7tG3HwpR7BPeHqbdp87vxid6bf6UcjHUQmVQWSGaJiPprF3Tq",
  "key7": "44ZQrQfpE4P8aEjiNthGNii3xmaufmMkkavGmdVA6fryWk5UjcFBZGwLPmhato5QMio3YtKxFwMGeG5ydzvW6sUZ",
  "key8": "2comwxVJzKJCHZ8vjLVeUmQ7YH6y3xeukAPKGpgne1AD3jPaxPC579rjkeFRjDC1eYf6GrFhYaLwAYDgHnYyXLk6",
  "key9": "5kEnP8cgE5q4uz4CCuLi7jkrnNke84H6d8Jbsqw7QZ5YPXE9tgRVFuSn1PtYwtx6MXnjS28BLTMXeg7dmm4vidAG",
  "key10": "4W8T9575oQWHCccMyVbyQbNDxmCBNxttPD9h7xxVvPNPs6XDwmY2zLyrQuxqkCSVQAmE4Q4jaZeu8t7AKtqu48V5",
  "key11": "2cjm2vhBvQte5pCCxV3xxxZsnr2rQrEF31r3Hht3TGfAJq73Myi1bx1ycFa4f7998nvMNbkeRQUWWueE4n1Kjvbz",
  "key12": "4hWqv2GtyPJLrqio4JxfvYhSpTPvkNApvbK1gwafNduPxsnGwxxte2SjCqm6sMh8kZjWq5S4Qi98esvqppYLpJ1R",
  "key13": "2JDgXtP4LzaJnMRVUG7MHLs2UVF8KxNfXBSV6ot5NRwbmksNcJcF2twXoDmnsn1ofNSNRQ4FH6aDqioyUQM1bPTS",
  "key14": "4Sb9nGCgkwvpWKyfPNnD49RmjRmgKYRgcEC4a96jKhVetCSHV2DN5P95D2Fx5NJVLB6mUhCy2LyaCVGyHdetAMdT",
  "key15": "5TepitfXCx1PTBeqFqU5cz2YLi4M1FG7QQXmdqwUbDqRKWGJe9cyfnPbaXmrMSxKnB5MULPtADGNknyrPzYQ4aVa",
  "key16": "4n6Uz2nXvayyh17idrxP5HydTrV7q7ktEYueK14xWWq74PgATySxcK77Xo3MwW7pAWUFSjNcYMgQuXaEzEUKqTqc",
  "key17": "2XKdejbEYNj4XMoh8AzWg6tPBeiKaZh6KQxv7kbTMCNAQtXWebGatJ6fBTobHWBGXpL1xaowAqeR7PYEH9F67Pbp",
  "key18": "6K8heEBybN7yxUDLFAKoaLXyrVCNTrro7dEpDrrgJov7rL5daPGhz9yAdVN4x9PWsHd7ynbd7z24cVdhZSVk167",
  "key19": "3begb9ieQQvknaXmqWsHRYHrTpKEopfF33spG6X9rZCHivbfnuxuZpojUsGFFq2o53YL5eSqErseK5bdA25dY1jQ",
  "key20": "LvbDJxTFoTokisYHzdbmKayduMvrSvfZszB4mc9Jps8nTMHn8tJAeKCRyHm3UsM3v5nJQrcUorpF3sPYVU3mttA",
  "key21": "yQme4WpYJMGEtj4ntbX1EZubnxwTFjmD52gBeo2GXoyHbBAwrxy1v3xL2rnLtsLpFPR1ozQ746e4JSEgUEUjjYJ",
  "key22": "2kuy5KbLEX6vceMpJPWd3TXJyeeBpQqB587oWPbX4AHpoM9MLSo1ZNGbcsncBM3U8skJD6tB8pXQN58zFA7r2ZpH",
  "key23": "3FknuwTuRxVTLybcMeybRR6Rc6g1VzEk8bEpYBsAAuSLXHbBPkTdr8M933L79iDDXwHVzKA5i6rEJ3fasr69FZuF",
  "key24": "2h8bCrvpUbHf89EQ79WHBJfRv9bNaSijYEAL6veDADpbyLvfYFsRsc9DdLZw3WekHrCLnQGgYJE3LchZpkjNBJWj",
  "key25": "5keNaoYd47EyDttyrZZ3wunPSnyXvtCM6vzSSoe1VGw1aKV8cjTtv2Xf1xUPBKwcb6RTPJkDhFvtcX85cKrtvbuh",
  "key26": "59yzgLbFozSpSEr4nBeoFs25V2mJY8WSZtBS4VooD1wNLpnK98pLUx2z8X8b9ak7hCSLwYJD8ZHmJ4AADTMdMQnS",
  "key27": "4aB5NjQNgcJfh4sDskShL5Gby7ardQXwUqUqfRzJneHf4xT3eRiq5zEEZvsbtHL9tBRYXNxPXTjVnbMRemxSjwcD",
  "key28": "2Rxqzsx1XVuPeJnNErGRW4i4PrKTMPX6xd7xDfFmzyY9HMPJfdC8M647psJu9E468gtms4rJji4rPqPF3xsAu9XW",
  "key29": "34C6ARNTsTu36qmKVMdQ8dVYQYSyDhui1pcWJVSH7Lp8VK9kxKDi5TA7dj3S1KHZYNeu6P8MivxZaWpxwXocSck7",
  "key30": "FU24tZEvtngsYf5ztaWY9J852XLvYZ32YLuj11i7tT9cauWvAaBHvyK93eJf1V4qCB52YfzTPKXmLcW8P3DyamL",
  "key31": "3dXNSaqm5VVScuB4iAmXof8u36Yp6wVNohiXu8cKjGGgWfTjEGfzwbCZoFRsxMRZpu7cV3BsnF6weYUvY3o5kpx8",
  "key32": "2LRzyqN6cFR7PVrunTiDoDrkWngkuJNtUcrH2wjJKZfKrMFd8fMqWTEGj9u6MWHTYopMcetcPykeDJuFZkvvriKr",
  "key33": "3py6cEGrpF37RKoyDLm6bVkDeDA1JPQWAN9K2NDARVk6Xjjse4K92DC2Xz22SfZ2YyCNVQJRCCr3SEwSf57wjeSQ"
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
