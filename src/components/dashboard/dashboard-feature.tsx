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
    "SHKTtZMgT2x7THQRMja84fHaPU7rVUqjux5DZVEt9ih7HpkHNRBazBkgq3rqpQaZBmtDcemCFjPG3oGDMuT3bsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23vC9YNxvFE61VD5S9bUnxCsXiqhst2uvVmxW722NsTELDuGuHjFRmN1H2oXqsXfrp9a3wXFEvU2wiXPu7dVjRkS",
  "key1": "2jGNQa42kjVqP3JT8evAzcxU8kDZzdFc6LuaN8HLr3eLwJJba3zQ6k8BDcR5kuCo2HMtkH2fQPL2CgRBiQ6ADZbc",
  "key2": "4iJxNJESDfX4rupdqdysBdmyV8MxsTV9CtDaywyHFxcnUZtpbCtns2aYGYxZJwVzPaEKvuFXZTBpx8WteT4BU5CL",
  "key3": "2wdfsMw53EGtCfNhqc6MyMZXPzjG6eLC4QmZCbM52dkwDVnN6DjiXVUq7ANo2Zc1xYwZcPyAkCenHWoXAdDEmwKJ",
  "key4": "4he992cCCaQ1zRE44HhBPzHf8ub9HJq3GN5gsCwojjGKx4b2QDvkaLC6zBWasbMkFC5efxMykXrqwKekhD9C13Uw",
  "key5": "aDpXwH1HtAtuKg6mBBdLStw19VBH5C2pg4XDRTZWBiSGd73f7FuES8wEW4yyDxLykQ2KQ37Jc1YrqkRnvdpqi5y",
  "key6": "2cqy3BgUSYCG5bxXuGWdAtSx93R2PXbEcARmswhvNvtnSqC1yHTKU8HYQJVtTAuvf8iib5Bd675fL2Hqv2nuTRxF",
  "key7": "4Lzzkkjq3ZVqc5vsvy8Jsa5Fdr1Ta1ivFB4VKmY2C6NhFaatFDMuuPgTS3q3BZRstiHjBGEc3yutY23b49JMMZMz",
  "key8": "wS7F7iq5ZuhSGiGdSCjUGmBkdCy2i1kQiYoRJzBxFC9qWDDM9Nz7ParjKcXRr4X3W6Fwmi7Drj7eX7FUwRyiuxr",
  "key9": "4y6NYSrkX3cpMMk5BtPYtuYRZR2C5K8Zg1FKWh5wxGfdvavzhFHGf8MdR3zuPcU66eK5Vf8dPVHQZzuarDm4yKxB",
  "key10": "3NHMkk8kU36k3eDxNL79zxQ75EhdsvHe4X1ZGfszz4aLLo4LowuEWye3zYnCk66QjR6opD5WgT2s4XirzWYmT6kX",
  "key11": "2ywwJsQEQ5WrvxeBQVGvANYRzJ8JydAj2E8qnVN6jXVgPnVFNZ7LJ8QTwVmhKmKcZCTm8ZSdWeV7JT9dronSZAY2",
  "key12": "mjcKbfjUrVyGzaFJbY1SrrP2JQ8yE7mpg4jBPeQzU1aABFmus4sF3fZAzbJJTcH6XHxjYfZxPfBxjdPszw9iUvk",
  "key13": "3RbyqK6xru56P9NDXt3NypL1A77hZgX18yFQZaTuH7Ksqqe41pRYpAQJKDQUzGqPjddtYC5VLQA2Fq31sjrTVR7U",
  "key14": "KHvwg4wCBycN4SrXn7571pvpM6APRQE8svLwKA5mwA91Q3pyQufma5hVu3g6kzFwJZbzdmJ86e6xqu3jQY1sdNm",
  "key15": "21PssvC9iVwUqMqatfUo5T9qvcat4hLb41Pm8shXLjpMYDtBKGPDi91xU6mTG7JcsPopL6diFh1BwJVNnpWJ5RYf",
  "key16": "5ZPWxhJfMAbUXXa6RAgJyq7xNK9KB4nUewYN2xrCyRec4Amu6UH4B1L84vsVJ5WHRYu1Ny1uHV57NSApHTozCJea",
  "key17": "5X6UnY6VHhRzBkGTzvEZTESeH92xkTMGV3WGfvkqUerecpqTEyx2QmFAmmcj1GUaZDBb6GWyUgZUF7DzYUva4djk",
  "key18": "5Vp5mjxGM11J463gYx7XdtB7Fh4L9RLsqqTCWj4AQALRGGAhm4YDRNS5LbqKeUBNFAthAg99HpUXQn6fiMPKpQJt",
  "key19": "3TgBXgMURpki23wH7SeJZx2Y66C6pFj2BLi4MfuuFPmYGUcWznBT8mVvsGiQH3VrTsEmtGVjibwW2jbN6ECEPjWZ",
  "key20": "4iUoKKoSRjb4AAMVAyuKKWEiS3seL1SG86mEN2Dykm4PNXjgHhMVSqt7scsn7Ugc3688z6pmXQQpbX2XiehHG2hh",
  "key21": "dChEgENjWFPes2gEtQ3vuz9WB5qB3SnBsBkN3bQH3N9rfdhbPWQ6jSgLhag2RJn7w1YtbLqc9VcvEaVurDEuEM6",
  "key22": "2GB6Zc85YSVRmYcrouHHQDmPz4h1MyAkzXNwzfACzpfs2CEWAqSa9dKYnSDk4n94Tkif2DPATGVmoCdujWbizdfH",
  "key23": "4koLGpy1QTraiovDiNEKFdsinaNEUWmvZ1HYEAGcdSMt2VnR1vFHruFH9RkVFoHwTuAgCkrxTnY8dcMan3bLz6MP",
  "key24": "31ifedFDaRjSBTU4Tt21TVrAgfUES5DFQBKhVnX3FqtLzGneZegyUeMonY6H7Pf9qiiZacB5Yy69SeNHVWdYVDqc",
  "key25": "3rPnwjG2SBkZeucLzEjbED9uVcz4fyxCZfTbnAERkuJpcvBJdK7NadGKu7Usg2UN9APRdQNvC9oTzdv6rVd5gVhS",
  "key26": "3sDngFrTDJH8NXUkZyimgxKEGMhSmjGxkZYhoAi8B3cPZSXbVkWtQLqGh14KT5sJH6GTnzvrMyVRQj1r29H993iL",
  "key27": "QpXkEJc29sYiYqRVzGWMBfiSMZRwHf8uVVRd6LoYVeq13Y8H8GsQ4XxjKAPvZzFrPhJSoQHvf2swVKuh4DVozmU",
  "key28": "377RBcbaPF9dnTBEhaWy8N4PiGh9hvAQkQpGCczzxkQw8YjFWAzyf6qVg6ZAjVvbGkW5sBUS5dnUoZsHAk4zjPE4",
  "key29": "21RJJKWvCJ2PmfhMVgnWVjEz7zJMy1GuaKGkKC55MdLaajoYHKrdS7vED5UPpeAfsfMbuKJyBZqi3WLMaotmg7An",
  "key30": "37U1TVbTC4cE5DhPVWvqKyR4A5qb2FdUL5WjMeaMCiYpKRUNQPum88jGH4brbzS82fQ8HQ5qgb6CxSQgQihtp6CB",
  "key31": "3f2mDxfWvwM54NjGgm69o5mrfzYExAUzqzJkPYZyVpCKZHtwMdJQGLs5RiAi6srks1DsmfiXPVYEZRXiUdEXehgQ",
  "key32": "dZWdTWC461cagHmnaAEgRngGE68f9S5xTh6RLHyNh5W2huod7PaeKgXT5qwm38rnbddfQhGCTV6dfwV3gezP7Cn",
  "key33": "5Bnif44rJqgApmYYdfnTvJSL5TW4DWX1VYvVGyFsSLD7s96uEpgaYAzq6TEYwZo84GRaTm3F6vvixUKJe2gjHeaL",
  "key34": "5n3hKAYkqqtYQWF9Ex8tmZXEZkuCYhCtLyCpq2BB7RCp6xV2yUw4As8jejTthCX53T3oKv964pXXxgt7YUMyaGG1",
  "key35": "65E14GP52RAYL65LXNwv65rgNCumAvxVURnTmNtx5kLGTrPwMb6HBjbpGhVsq18vqh9fZbyMTFbYnGFLUqphFUBf",
  "key36": "3UAfSk6WDXNMmdAUdugunDyzqEzpcFSFy1Yp6Y19RuXKG5HhgTwtspFMBnbjuttmPrEFD1Y49JkcdXkZ3aCXa7sU",
  "key37": "5huU1d9bNkixrKjQGUVxSrLjYYWMfkQuLpgN4XVFHKUhHKk5CuGQTB2AvCRzZXNGYgzL8PBRWGuvsQsYHRmfrRiH",
  "key38": "2og4dk4q9tQernVB5tsp5YcgnEHWkeGw81rnFFZrh2tsvY14MrXyrVG7DLWmiAfudMN6Wg9bbTxLpyou4syrPWe1",
  "key39": "5mUPNQCpxJFE72AwBYsYhnTCss3NeUuVETirqLd8P91XFetVj9V52qziGS3hU6qusqVaUe2NRzkrWciXyLqU5kyp",
  "key40": "Qwy2KdxkZiWviodtXkLrkb8MTQDoyb2L7VeZXiKoeLBipMFpEwufhWwrNfgmvYimTvfBunXrBuS1yiaboTHiTRg",
  "key41": "3BQTJJyxT1pcFN32M9Hvnzz5t3xrEbpVacHvEohVZDwp9mDWzR311KcaktVVrA9K7PUVyU3fj7MFuXwVzPKsmR9G",
  "key42": "2CzntMqrD4RnWFQoBZphEefyCmPvA78SCFT273yJzmBt6tGGMUJZwt23skQBezqJpfksPGyzr4Nig6maYbjLE8UL",
  "key43": "5B5AkZjaFuBZ5oH7mcoy5uxD7jG3rvjLsrzyfuHVVJxM4hZRiWpTrW5gogNiKxpJNX5TigA9sRmreDEcZeUxvuTG",
  "key44": "a2f8r6W59Cv9bZVsZikxMMK87t5nXYjw7A65LpMiWVgBisxbVD8ivbiDuCy65Kx9TnuBQzXXbBJP6Gt9ZJF5P2Y"
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
