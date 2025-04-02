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
    "KdShKxruwYokT92zZhT1kexqmhk3h2tsmpq5ACzS4XvDVkWjQMSabDq4UFRXPhMvBxQBt3NKCoV52pJtK4YXp2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38deUCMTrZ5RhkJxK132nnJPiScwBDjtDSHMBRZuHofrCpgKUHk1VAJ4fPjok4xGwJD6AdZPZHWQaUrtuuCGPdu",
  "key1": "3zHeZCQ9qAxr6a57hSyEotPt7iPoEdXmdgE7bEaoWNRvDG48setzQcF1n5Svwyg8xCS67RTxhVZJcHVzimur6kGF",
  "key2": "3sLB45W9Tya8FHTb7AJmYRzRnBiu3KTKwV78inQMsF9BjF3Bd9EyEqQnKyuUmcdLspy4F5yfUL8yiLEng1PuVHi6",
  "key3": "2cuAXpL4pDQ7qapHzyTTBeZLCFFgXW7spwX4zXbLr3K9vU7WxmGqh3yGJt9pY4SJLKser4QTJBbE8mTXwd5fnuiN",
  "key4": "4kJu9KaEoLvEHiERoAGBvnucDu6iAPvpEzfwFL2CBkUJSrDMUSqZ3p4ncRwbH58QswsAREo7Q7nNkudN4Wt3Ejvv",
  "key5": "3Lpsi2ngbvxsW7gNsFgbRJB8ojV44LdBmJr1FSBvZS2BAErygTCS93M1dCgaTQ9p5dVzHjgq8dm2bDgwz6BdESxJ",
  "key6": "55sPEi5fV3pQhVnvafVdtwx6AYiRgQnYZhyGRYxb2fFpqKKsS9Y7ehPe6tDXjVKcM33FMHCfWtzwNwPcTJxDPHUe",
  "key7": "5ad9tBHpaYgo6E9f7fF74ESKRdRxT61nHd74NZtzBZju9LDQBd8cNhUU55We2dTbirvkX6AbdRSqahX6HJ3tGmfk",
  "key8": "2rwmPEQBXp4sHHdoqP4vhd7iPSoz3m7czzPgaHXQJkpN4iYunydx4e6qCPRmWBpVQwa7yffb4jGB5Lh12ZEHynMr",
  "key9": "4cYhXdvYBzzedRtDSrjWGkSuuYEM1HaKHCBS6HQXoKHX7JHKGemtP4bnKka2LLmUMZr8giV1f7fpqemVLJKS1s2S",
  "key10": "3dKtGpaynPx2GsMZq1JQgWfWdda4fbYVfrQyeAGmwvqysnfEQA9Y6NQoWZqa9vGKKS4t22sBVm9YTpcyiVXgzCBC",
  "key11": "45xCtAuRF2asc99VjeGkiMi5cBHCJG9qjzpZbdzUptd7DWvn4CjKrDN4c8FHQhNpXUdGszxSuiRKfDVemcx5ffR7",
  "key12": "5vCcLmUFVEdscVuCDspxgQ39aRj6THTmGfZhshzqtuX98XoZNAY6a5JR2P9jJ6nW3sKZsE7nU7b53oUyoMEh8gCB",
  "key13": "eAKLybw3jKoQTdu7onEuaHpighJgyfBnMHGnoR4Yg2akRgVVMV449LNgzmA5qjwzUTn6nfnswBKjMq26fAdjBCx",
  "key14": "4EnHrCtBiixxx7TimLt9ZyXZUMpePxKu7s4ZPSKivNz29WXoXEHA6y7Ld8sQ71pLywE8wxUTmCcRTn6Pnz2PE3pd",
  "key15": "5tmhMZZHMPzF3DB5JpnnFPWfFB5cLoE4Tah6kh2EXTQdsGWhoLLNNJPCubmaKYisZv7LmekitHbvVDbQk6iTMagN",
  "key16": "23UTdBpyXgPtUFcac3fDdTMJ1snxzotyoRchA33qRzujGmtyWk9RPoRjPYBcQhNsGSMVA6h6gDT3To9QaQBrbse7",
  "key17": "24VRFQ53eqUanhHuMj6AS26mHjhq4s3UEvZXZvjcfcpmcmUrhvk5eU5T31CTer1pqWQJnBKjWVAtgCtjH3yxh4yA",
  "key18": "FUX3suZHqozMAG4UoVyEGDEt7ZgwTBv7gcsnvfA56fiJBNmx4PSHBYCxEkLkD4mmKVmGr8R7aAmMgQhjEuBEnZh",
  "key19": "4aWs5eExYHTbWSVSaWm9wVwippMmtsq1gNhU6CE7VKks9J8a6td7hJQheUBMwriW3pvjzyc1Tmp4rb79uPXDCoUt",
  "key20": "X3GLyLEsi2EE8QyCwN2BT5yXPNPmuD3z2ioPA5pyYZSeyXjuVGdrBvd2TwHiKJ7CH4WUpRvN1LBJXaNE4TBrRJ9",
  "key21": "4xcNpy2DkieLJ3buptYzFC9p37QerrgcorgdHRovvhjp8DYuBw6FpK1mjmaQvbrvRd4Y2CroR1KFwh4HWRfftyDC",
  "key22": "3Haqp7hRV1NkHBUhAWntVahnyuMuYfSEYwTTPyHJqD84U51X7ZiBKfrBT3qXA7Xr3oFCt5qUmUBrqZkZU6pCfdEu",
  "key23": "cnwHRB8sDk25rFmfFBgmSLxNxPzN6g5UJ3d7L9p681rtDNHTGK1Nmvc5iWHAimak9WdggRkzs97zAj1oyGAM2iA",
  "key24": "4x1HiGv3hZzkANdjwt7BQx9ttEpqC21edzgwavxWLiySCmc9vjm1gg5R1PpGftFt8XDxEwbP2zG7feWa8W5EsoQm",
  "key25": "yhURTXvgqQJjuHYKhqJAqsQRS2RG93TQbm3MduHz7RFyernxmisjPenJJwgzjWJdRjTvW9tsTZgT8KRVYjXRPiA",
  "key26": "2HnHx2RZo4DVH7TQiDXAFo5M3kxxxVCSAMSnfPxAPAmzw5NTVKFhxA7LiC5i4NANpEcan3uQn1VZwY1TNJk4o1vy",
  "key27": "2H2QWDLfv6MYRU4t9HUjvtFjNK1Putq8aQ1XZYQQimvrqrYh8ChJ6VT8FtqEpatMqYj8TfgbQ8qd142PsETQvcnY",
  "key28": "3jHCYiAfWa4ukSizBm9ses2Mf8hwMnLZiNydzrTAck7oP5hmsHCRyAxAgEcPVrn9h96SpdCpxg8pNciccE4TUXAH",
  "key29": "2fYM4p14skgaMMhG4Qc3SdBJ95jwk21NnVbdRHrFtnFfa6By7wQ5atrcLWXPV93ABj2T3wjP3XCx4ZmKDG4xez2w",
  "key30": "5wGfB5JXuEh82dUgsPNWUE3TpLS6HpLHKoqdWH2r3WD9QPUdiKZphvTv9HLCcPbnU9usFuJ5W1Bn5MGpGj5mPNSc",
  "key31": "2qChU51b3DKcZ8YpWjzUCiCLf4uETo8qgEDUC7Ffk34BNWGGxVkLDmZUuta8c8oukLzrBoWrkmBKa7Gtgx4XfeBz",
  "key32": "5rdiRBxVZnsPzafjmbxaBLMSyBQ6RdTdrZ5PsqKdfuw5RkxnqpyhY4UZpuRqX5WSgPcG23hpX5WHxzzwBzeSpZM7",
  "key33": "znBjjXquUhH9h39R24TSV6sUurTeydcuYHAKXaB7jtBmgQfccrARYwCJDj6MQ1xXJurvA8vV3jfKYyDeFnxkdZ7",
  "key34": "4Mx53Xvg7J7KNcZJkHcxELkuUPKMXitP4XUwTm2gq5itSe4bMGJxvNghBUW3eEQ6FSsNWaSbPTSH69Hti8Hxe26J",
  "key35": "3D7WbHWeiYnLBa4vGcZKoTxgTavAkxBhRYDyvfURR2H4UC4Z53jEXUFSnL7AKJnERhoJPzq1VH68gk8a4BJF6UX8"
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
