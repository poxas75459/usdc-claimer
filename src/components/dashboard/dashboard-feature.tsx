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
    "2KdRy1iU5S8ZeUxEMRtjnCF39i1Wra51ARBCB4j6qQmxJvwBVrgegz6naGoRSY64DgurUd46RxK99hErMPvP1ryw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UivZ6WU6XASD6kchiXhT44kqXGNoUMQcC788P6fan1svbGui2GM9NEFuy6NMc8Xtx3HftNJN7uu28pQDdbQxHVj",
  "key1": "5sHMaGyeq7dr2dyzwXMRqVQrw8TCFvd9jafmL1MsooyAVNdG6cioZmfUxiz7B2TszbbH64LXnD7BTqTpDBSngkJW",
  "key2": "4xNeLcHvhpGanFRiPHBjRAsRUdNgA5g9hbccWr6QN7cptotLX7EoW4tAXPYqNHyhaM3dNx6F6d3o1KkDuX56Gk2h",
  "key3": "2SYqxh4jDSTrZhoM7ohp1JpLDShkacr6gEqm8z1rXveX8qu9XoPiW2Sj7seSpYzPGDa6zLYK6kqSg9YLK7QB5F64",
  "key4": "36qnuJ6Z34A1Liwi7b3aLaFDbsM1cevnZ2jfyYduGDToTEun74vgu7G3C1aReb5xVz5YQUtSKErF3SuRB9189Xnd",
  "key5": "2nhtxEk2RujawsdzwKD3EyDgtoQYW7Xt6rqzKWajikF8CVLb2VZXFUhuiSiMDDAKgRSfvhPEW5mpT2uq1wRNRoCt",
  "key6": "MsfhsaKaRPj9nF3ui6ygCQErw2KxxztwgpNupp2cwtHmd4g33JLycUzvx12r6kk7CWDp4bH9Q1a5ew1Fni2nqiQ",
  "key7": "4DgxMnSkk3UDpJVXUpHm2KbnRSRwQqnQ2W7eHPwpugQcRpL5p4d4MMU8JmgQRqtKFvQBQt7ERW5NYRJC9UcwqAyT",
  "key8": "3xTjXf3p8rT7K6eYRKbZ8pta3JjcAJBxaSiZBnjvnfr9wxY1r26TTh8ZXxDwbRckwLARWHCnpXWHLpvqzeQtnSTS",
  "key9": "3LNsK1Tj8w4baw6YLcGGnewwV8HGtgvwRuTawzBYYUNRHgUrasBBURPYzkwG5NpBNSzCDTcxevV2wVzjHz7huvrW",
  "key10": "4dN9ARDzU1s9339ZmBDLAmGhAupZug9PzUSyfeQ7P8JdHUsU56RY5xDV35aVTZo563FrWicym1KMi1p1NCSBtHDy",
  "key11": "5kzc6q8DWBPbfY3nWTFQpiv8sApm24KJv2YjwVkfKJ9WLGuJTmyzvB5LLvPJPw3zRBHQ5kRuDMKcyxL3BfsWjAVE",
  "key12": "3qemtRt3LNJGmLjXdp1mms8Q78dFqU7c6PPkrwQdjfGbAFCakt2p3e2db4VZrtxC78hsDn6A75rdvzebhzRpAr3Y",
  "key13": "4xGpHCqaw7fzEzBc7DhUB5t18NJnfFLi5XcTXCjZiKBh7XWUMkmF8fapeEdy9GHbUfNZ4LtyiNFDWkefuMct4WAc",
  "key14": "2XLq4rG1TDQGpB2qEP8L1Vtnf3Mdef4aoS5QeQaMJua22Z1YRH2uzpGNti13k7a4vCouoUszijfqtV21XajKRNn1",
  "key15": "2BhCKcL7Lgh5csHyndYWj5E7F6fsq5soHi2RppaDp5tm1G8RfeEDVjiTucHhgVJGuhBC3JwYimVzJzbijnbU2ZdR",
  "key16": "Q3RBMukP659jn93o9QYEVST99LxKKBLqnkQCoK8yfTDTsnikzFrZDe7NjEbDCqDT1Way9h4mgcTw7voqBZGPLhG",
  "key17": "RBJWvXXs9rRAgeQCVsap9HnGv9z6N1zxWCPsAWKzLkrF9eWVVH7W9yiopZqzy8WqM1HgzUcQeXp6dxXjD1qwfUd",
  "key18": "oFqWAbjoi2o2ufWqyKzk9DFJCsYueqCE1xvChuapNXtVtMczzq3MiPfaR6rWvmpAt8Er2cUL56QhZ2xAC318Ngd",
  "key19": "35sr88nYeSK3MAS4d95MX7ZexpuZbfwYSZETHSnCXTyieCWNgddbP3LH1KnxjCqred2LvEz9yYaGy3m6LbrjVtHe",
  "key20": "PZWearMsiseMgy4quKHPxa1nX644rGJw3azSifBuiTPbGzho28jhDXA6PrA6gCoYfekH3JrR7SSUEr8X54tKVsK",
  "key21": "VTzn53XwihbexHhZHwMo1odwKhc9BpV3BHTDT1WxZ6Nr2t4NZEAsf2ZaneyvHvJEWtWbXzBRkzUX12Kr7NKs4zi",
  "key22": "23JWcMTSsgJ9w6cGBKfjBPk9w3dN7KL4J4HNDAdXXRAuBrRDccpLVyczj152vcPporN7cHZH9495u1CQb3tBGxGC",
  "key23": "2WbEmjucUFK7AAdChQg5CHopd97h58WTWzYscmvDAe19f4mqxp81tptWZYvi675mBEXz27Bee7pLLCTtHjwc2EvP",
  "key24": "GrMFvts1oRwg52tmm6VJHJndamPyzXyvW4dzrXXzCBKbXyfDh55N6j4Dbi6Ei1fHZAZczZpDPof3tsE4j1Bmhzu",
  "key25": "4FeAyx1hmuRhA5awYF7ipQbdk3pHRuL4rFgyHkz5bFiBDPLeMP126xftc3BP3DQoAfDpdUAApRNbdsHX6jvm6ePk",
  "key26": "2jzeWuxfvw8EaiESJFpsz7wJ6GZEiManuU4mC6RKCnL4yk8o7M8X88kvcKZ5b5Zua3j9Q5RMVWuH9bd5GwDf1nBm",
  "key27": "3AJUJWJziZSqEkgn1XSxo62T9s4GYAS1CSgbju1qF76h1RTra4t12JvjsdjJmnqpgyEdsNjd7AQoGARKnHJ1zYxT",
  "key28": "5suYVzw6PW5WT9Q2cWFYxTaQMiaRWEBD9VgCeuVgX1kKwADinx2io3wy8qxVRJUSJKfZvNbsPEVXE84JpK2LyhwJ",
  "key29": "3cTRdUDdrDMv7AG1wg1mg5gt9qhaxZHrbTHv4DnXSiN2ePMDFVe46bYLrJnEovZ2GvZijiJTKPEHxxtC6DpL7ENj",
  "key30": "5Lp2R3t5Yiq59vY4WNELdv4zQuK9XcrmCCk1WgoBBeKkjEbnzt9RiyYbszN2BnK9LXpkzKo4RRvBUVi56JUavEkG",
  "key31": "5ioCDb1Vsv8wPzKuNnGo8zHKriFjnpywky9tWFcLe8XaojR6tTQmLkCG5SkMiJhHJRtEo1w2YY4hC57KSR2Db3C3",
  "key32": "3QfKrQQwzJkGNKPpwKcyBobRLSf7hWqb5mvYEnU6o5wY1fYx6oKWLNxc1eExFoPhbnzuirryEJbEosLW9cofqCn6",
  "key33": "4v1WPiTStvPjUqFyTKCXKmjXGxm7RDAqdvi6ojCZk35xxXmAasQ9xRgj3i5exS4VMN2qM7bB4GUvFVcAD3tpuPTq",
  "key34": "3FGaVe7bn4jCi4zLHXYtt3nkZHP4XMsUt9BmZfE41ETTZaz2xruH4ifp4K2gskGQvoBCitByBcitqGPBV5GJyGkR",
  "key35": "5oHRHW41ay99J1GoqZwkwmYDZrWGdLDCjJ98EZRsJ15oj7FuRXkBXEeC9tP4uTq5SmeThwkPzfrVaLjLLRM7AU6Z",
  "key36": "48BfgsuPxeVBbKQ7Y2zrWEM7uz8jLMKAq41QL5BUftH5Wp92JKrDJMFXqaAiJQ2xqSX2ssXSyVWd4eMkbbRb1Wn",
  "key37": "39yW41DNf1MEXHY6dWQWXndya7FnGiBDZQ75gr5kxnDFmo6Mz7Yhg2FaLNivHnKLC9rsuiKG2tdMAJvGmzCErFym",
  "key38": "PUSVdXoTCjbxsB8k1CgYd3MUneFSZKBBXqaLLT6G3BzkgyMHUaApG5JsoS7H3wH8o669eh1LFcuyDPhyHvLAZd7",
  "key39": "1qKeX48tTkZLjNDWGhDemvfqTerzg8tyDsK4E5ZyZyUutAtDbmtg6YrhWmHEYBQFwk9XeWd55r5HyDnZJJNCoKF"
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
