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
    "5YFZ8XtY5mLYjXbJnTRB7SUUoQw3uK7p9f7LBfSerpt4ktUe3F7z8APsU65ADYucd3hoNtXGpyJ68jrJ8ArCJtS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TkQ2TWRyFgs3dvTHnorrQqxFPLFpJRTCject935qfQ7Lty5CrHLm6fCHhx67J3fbBqByrPeM2j9MszuP6GuQZRV",
  "key1": "4CgzeWhGN6BR7zrxWNeByYvdKejXk5t7pDCWYFLeCZ4xWrA6oQwXyXXB12eCxZhJhArv6tMmCRDdjJXM5f3ykamv",
  "key2": "4YXrmycJiKmwc89AMYx1Znkk38kKMhuTpC6zedD1AnSiHFkxUvwhRK9er7Tsf6jsoW53TJriWpLowLuvWc7KxFAr",
  "key3": "SJnUk3ewfBy3qJWNRGedyaJ61UG1BLtAzNTHrrG8Rpu9RE7A7qhHBQENaHNoCxxQs3m94BEKqcXS2suvm6ybLBP",
  "key4": "28gAwn6FnywqSSKxwJbRBjp41prUkHPt9ZF8eoyWmdwivAK46U8BUn3u6CHJteGTWLsQTzTxvJzHEpVxxb6wHhgR",
  "key5": "4zUMmJQ2ctkmrmRq5kwr56KqpkLKnKJ55Zg8Pd4b377Ye5RwVHF59uBx6KFs9zUJMeCMZ7AS2PZAheBa2VmrDrZZ",
  "key6": "5oTZ9FmRkkFYVt5dR5X885HLJcw827PjVsRRFwTdai7dGWcM19vyt3sBhD9oVfEccA7BhxtFeQkdFK8wF2GAauQx",
  "key7": "41ewg6ykgALAd4brrMhqUv3AAHy5xFHWNrZhjxFpB4AHXCFBcq4Eb1EcvVmyR9xtcUwFjJ5pGQeE3ZgCDQ6EFyxR",
  "key8": "A6HmLu76YRp5yGqUeisffMrq5bsJxNJeQysfFXvtH4z9Wwcz7qjFVkFJB7XPovWsPt745a2Bhj43otyAtf7Juxh",
  "key9": "2DgLnFPZ3ya3dkzCCPx9MiQxUxCyruhS4e6caNiprqdFdU3SGdDpstC2KCngaMhZssh7Zf64RtBjE7LEVYwbRQj2",
  "key10": "XwNcZQNB7W5Y1N7LeUBxXU1MUx6MFHWkPbYKvtdKA2k2qY2rZYSiThEePwvoUSV5Mh9ExMVhVubL2X4bd1pUpdV",
  "key11": "nwkH51vJuVyYpzJyxhb3MPwVAjMDUziPR9bG42sN92L39HAxw5an2oujK8wefe2RjFistLseV8mpmnwZt5RZ6Fe",
  "key12": "2KbYP9aaT8GC4xWT65uEMtDFAcrcfcvNNNUog5AMQBGHCcMpLYEnwYvb12CVgyiLyJZb37Bbe9zzmgX96sCF6SWw",
  "key13": "5MXk9kXLwgQZLPFoQi9Tkjeienvnp4bK41x2p69rMDPgdLxVyP1gcrCSeBmgxHTsUWrgZQc5o5QwHafAof1rp2vx",
  "key14": "3eKpppftciQVxHYMronYLyg44jCReyhU6Z7Lmf8XsVaENJGspGvJaZzJ96NmKeJJiqx5WhVstYgAfDSo3v52opwj",
  "key15": "2D41ghdy932Y2fNGfvb6sJ9M3jLkPhETjFGppXGvXw2634NBXJhmVXxtP4BwozNsanvenPj9XJ2Uzb4xTG4hGo2p",
  "key16": "3d875XpBrycX2eJRfgvrnRAcKoQCcxwP7NqfzwzYWeVAa8a6xe8eJzqPE6F3jZXRT1pb1mD7DvvMptSUixSfFdFx",
  "key17": "iTGRt7HvdUCMf7DbJeYraa4K12D9zBVzw39XUChCP3nFDLWvUWcuvxGQgaGZk1J2WWAQCnp4MhnBeNwjAXTPzvq",
  "key18": "4XoLQs2uSt3nsvmTVqEAUGwZkkoGj36C5omzJUguPhD2GpUX1hG3bRG2pUirH7UMWnN9hhEoNuUhRpxgJG2dMMNK",
  "key19": "2t8jmWB4acAxANWpF4pTJEfkBH2j1dCz9NZFzCTLUCi4idvxkKEsh97uiZ9XgDwsgcGbXH8uk2grawsTQ7Tq8CJ6",
  "key20": "2wueRgb8oywWExCsmvMoQB5yBGG7k6gT3h4QtmkFcaqpq7StiGj8Xwx2mvmgXkwDm1iGvg8JzTYcQp3bVrNFifmw",
  "key21": "38eh88gnRmQLR5hmkp3ED1RggPtdhrUGpUjFmPYPZkdaWLZMki1rFwny8m4Dfqm9YWVbgfY4d6VtvmDf4ijuUjYX",
  "key22": "3sXmF5SjUPfCF44DjpmrTM4oxvQru7nzBorj4SDnqywxn5kLhAvWoLfV9ooAd63KyyCtZP32bRpVFXLdKnyyoF8b",
  "key23": "2MnA4WAqy6BWyh6fHDQzTpUCRMV1Bz2i9pUVsZEsGLLu4YMFF6gxx7VApN3PXwbiSEi8uFAYafGstHuQghW2Hgnm",
  "key24": "58qw61vQbfu8bf3XK3zy2BeqLgq6pKLu538X8QtrHKjbJJWKFGHfVcxCsdWBfr6yyc5nS2nrsTTEceCWqR24quhu",
  "key25": "4GhZxpnMC8uHXykqBa4P5AzLJ67kxBu3ipPA7oteamD8XKSsaspL2RmFPDb1MYcTeQik7iMxCc8vKMKtP4g71b76",
  "key26": "5g2hokdiBzC5GboUcxSSChdx9ewW2BG5Xze2xH9CDm6PhHvgTfLjVRM5Y7deePJQLAzELX7yiEHfagFrufSBvt4W",
  "key27": "5e6pmb9bP8P2zEvcKnunjNKc85EtuJR4FoWY6wf4Ez7ZUJCWDRYMW54rmY8ope9YLtFWWVNc64xbtrB1VwHFbEi2",
  "key28": "4P8eLJkpbY79oQGMWpJB9oWisH31McZoseKHmac8jtWDaSf8P2t63DjuE47z7fBHJvPEcDf1LQ6wjiiTEqwU7uXj",
  "key29": "2ZZJRQLcY4FGuapTgxeE8PsvBcb236YCXDyBzxBrmVU6iCVLtFBHTV5cviaYgPgg9HC7HAMAYUsw8MJeop4pecgT",
  "key30": "2E2kHDywxEGPZsKmTk6CWH2StwmH42CvqaUMZ5QPQe58AtStuzDZMhqkx2yXdcnNfbARVPqCtgrz1MfABU7JuZrb",
  "key31": "3qM22CaUSNN5YwkGCEk57Q5KD5F2skcoW38vT8jRYGUnAA3iYs8r6phexvhVZY1LqqhQTbjVagew9d7zCtoEHVtj",
  "key32": "3AkgXXLBdpzYEqzm2kxRn9oXdMzjPavojRvBDhFZjJmfvF3dEqwDaGcmy1FeQhb4GK3bbQbq8ZVtLvTwDaFVs9Wk",
  "key33": "2B89ismRMUpsghTo29iFsDoJ5bBtBJmArT1Y4BnKdtQQuMUhqNqNuK5PEnXphrA6Ttb59aiRasGXqE1NbNdmPNSE",
  "key34": "3kU6QAogwpy9TdpgcJr29p4rd8QQWVDdrTw8XeJkKvtea8kwZhiJL88QJx4Vssjg8CHPtCPp819VC9BX9asLdhph",
  "key35": "zLUJky4vF6ye9kX8PzAEaqsLoMmZKNC6epi57zpfsDGmVCM77hSfYKLkM6SGUbbwDyYyRxdkB99DMyeZUfVn6i9",
  "key36": "K627ArzeZtQKwsV5igwbisWhMYBA1fBFpwvRCNUFYKMAdXDSxiCqVJEyDF6V2FkkahEVvLKRvZwk8yESY5vz3Ct",
  "key37": "2PQHdHJoDmUFpegcHa7fnhjh6QNuPEd4hjPYd33pVhP9GXxbfrth6SGPj7gNMbqqUqeXDx1hEU8RZbvDw2c56M4J",
  "key38": "2QS845Gkn6j3cqekBTEuaHqC61RK1esfWpNmUFUNGTHyfCjMnBG8pg9VXufikbpkHLNHNZkbQ6hWJWwC8p4RLL3H",
  "key39": "ZbY6GU5YyXYmDq1ppeuepAN24W2dyt9st4QC9hMebvEA7ACktbSKnCRP1J462nZYrxys59MZxS8JNghdDGEkWcA"
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
