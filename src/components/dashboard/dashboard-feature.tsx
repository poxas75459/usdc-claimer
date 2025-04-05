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
    "4HALyUGx1TUqFWk9rCfcgccKiVsgrXXZz7UzZ1vG3yh3btZsRFetJRq6J8LMNz52GRN5hRVPdTa2tqcgGsT5rujR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xRq43d5wSaewVapea8r4xPZUkPxBjFeLXhhkemmUrZsxJi2yDiAKctsHbz6pbbzbkrnp6y5YwcWc7kWBXUBVADq",
  "key1": "2DgZurwPt659oLLfKgEoLVVhQM1BfLgwbKFQLbFjZ4N1Uyrwa4oKrvEwBpvvGk267utJzyBqxxYK6upJoswNgYgc",
  "key2": "4QtYZJi9HqJo8d1DV8jNKm9JLVgFib7kJ6gBeUzgxcKabrbPzgPMBMZhWyRxf7oUDBedgHjGSaS3MiXv1Kcq84ZR",
  "key3": "3p8oAdb46eUJB2a5Gvx1N4mmF22BvKbT9VU8cXbzqWWGQG2gdGqQF16Kt17WKPgeBpSTza7PeAz99FgF2bp5Geq7",
  "key4": "2T2XpoGAzGFSPunZQxVhSPQKZkjfi5WfdeBo1b4BwZ6Dwywx4fEft3bm3RLpKcScMo1o2Fbd8CUxZvw8kiQ7ezMg",
  "key5": "2ACHAFRfoj4zE5qn71ntwXkpfe2GKZBy1Whs4RmY3eictsmKNjNZq57Lr7PwzEjt9UVpMdspASz5xPUxvWhd9xC6",
  "key6": "2hh3M35VVT5hdofNCnyuAuKtq6LxqRSoHbqDZD2RLsArTZp85PnskCsfABcarExXh4pGUckELBVYEF7Sd7YuYRs2",
  "key7": "4jd1PACekhyaQCP4Byivn2XXyfrSohoCEavSDNNim4PhnRyLkK3dkGrUu4Hy7Zfh2p5opuC7bK3SKoBSCd2EpXa8",
  "key8": "bd28Zse3hCzcXDmNuHioKrxF8HZyVFk3dY5cQQ8awT1TRqG9jecsXdw4XqWrG5dAMoaf3ALo6PMSwYQNqk6afnk",
  "key9": "2cJLdPU5Ywii2HBt73KYmsYhgptLi19GShjRv4Kfw2hfj7QDsrMvkVQxYc778Tmrbb9tXoNuFgdpT1d3B7qJvVuA",
  "key10": "3mK4kx1DvJSyDqpP2NmMH2oyeeQrrXGausFXrDh5mAhdWMeZXyUWB4yQYHRHvZ5rxW25vAtpMvK1HWrsxQLSCzAE",
  "key11": "5P4AMyB7JfAR9NZxg4LBfdbb7LQYQBJTRDC2satHmKFToyM6iWFV9d9URsPxE56e7yZoR17N8m7rMqdNrMjMeC3W",
  "key12": "2tEk3FprFxvYvsszVU3nwtPxJqANh3ZKAZ3PT3xh25QdGcZJXhTvEvztLxDxR7vG4RotWinGzsjsN256W48svzHJ",
  "key13": "pVcicdoHZww9DgRLQwJgLJG79wzxG6Vdx8Ui7Mn7eNho6gyYo3UyfFKsWXpT2Xrf6cfhgg55hXAN6N6sT5Cnm6M",
  "key14": "bHubveJfDqE7TXtsgz5fxJJXzo47ygK4zYxAXyuX9qSFqCQQLYpDJ3SzedokAnJ2JyvPGe1JMNdu6yCQhzZbRxK",
  "key15": "SEcuphRVwxK1j54JS3iVFkip2LqSjwAiGR88VztKsJG5kvBWXCg7YPnQZczCxedNz4PZzvRJw84GtgivbhQeJaW",
  "key16": "A6CFnpX4LPnB84KfV7sQ5UsFEfLkLNkogSQ32GnAoRo1BDQkNTzsx3YUdz6mAiBFg2pTKDY8rmTMeTDcu8n2Rme",
  "key17": "491j12apfa9nM8PW75LQAXS78zcRVugM1WCbJPDXg4cXGrHSbJMN8A138QgWrowF7YZ1eR7HtGGHGPEFktcXk669",
  "key18": "DQNAtKqXQzuyMCT5KMnNvGyA9ghQEo7R4f9rXfc2j9o4wajWYnLkrz8PEKySiQ7473Lq6buCoBLFaX38672BUmM",
  "key19": "47xbkhUkTy2Yx2rtLjzpdePJZ7TSc1pJHSugfapZoPYsEvRJfwLGGnbev7vA9E5mQAyTnheRXYiLm2CoZdDzVwyU",
  "key20": "5es6qMsFfoyzrL3opaTYSVMMufz76R5ZB72pttseZnFq9LFTBGYkWQDLSShfoVtbmx5CShWkuikbzfe7gu5YT9Eu",
  "key21": "3G91FPWdaF2yYqwCAe5FuaWTPYBfUT7e9YR7LBufUn4vD1SeMGBFRakpLhDG3UVX1yuKCMJPFFQsDYaj2jzo3qTx",
  "key22": "2z9ZgbXWVjjk68RcYKRzgXiySP6sq66qGzgr4mwEN2pFe36kUjWUd4U5KL3Kk4c42WZSGErR4usphCsf4jCDo1Z2",
  "key23": "3Deb4b2mcRoTNBBY3gNjGm8eKr2K9x1mh13hQsw2a2ktvhSJJxLM65CetckvSFBXmJMeF3EwuF9T4sX7D7VZmu8",
  "key24": "5xPRHU2wkrgC7VDkHKeFCLTkiqkK8sX5dr6YybaWhALohfzQj9T19NQyip3T3XzKfR5vRXxWm9PGBpJSH8ZS2Duw",
  "key25": "561od7XFTaxVYiNpm8HLUkXCjyDkEG1hdZYoNhwT7AVHCJ6UKAPvzWjhGtF9LvwdCsnJhgDkqKpWvoZggvXGTZDS",
  "key26": "3SYfBVKHqmu3woQFYk7h3hZ2adumssSqur9EhJFhC3BjpZYR61n3qfKphL3hXF6j2LRgUK9wt3RPsd3Kcmsygn6G",
  "key27": "5nXTWnEw4mdhW3iaxXyGLiFeATr4yJ6AdeWSFiPp3daMXKBqgnrbW5pBSdwhfChVPmcdBvrcbYLmzgyR2MKYQvYk",
  "key28": "3zinNBfFfakRGi2E8x6oZrAswvAWidqUdgYaqHw3uiYkorVpTnaY4kiVZdKbCZoJabB5MzFQT54uKhpTfoazqwdZ",
  "key29": "5iiC2RVG3zeTdqKn17fGqAG8kW5XWKK3Z7TVybmHpn7ZRsmPSGreTLps9ewCKVojYsnyvJkbdwvuk6Kh1pSyEdkK",
  "key30": "54ihFQ1amQ19B5punQXnu4UJPiAka2rn4n34dCcF1WPSD9PTaBFwJ2gJkn8KRWb1riUSrpkvbdkTomKVtWzJxcaK",
  "key31": "5DnYrK4GXwnrMWp688HPP5jgSVpUsEnxx5BGymiUGb8HkpYuDjNvYrCBtS9JZSrzgwGvcfbJnESNqGdJn7Sjcy6t",
  "key32": "YHHPDA9iRzcQ71MNoSTscUiM52V6ayUJueKxxCZsY5Qv76fvivw6R6PogMA7h4yZniMPkyi9KHiZnYaYrtz9dyA",
  "key33": "4vTnnycQZC7DUTU17CXWCcq2NKRA25iVqEeQJ32uVCRn2xGCqJofjJeUex2bXBidBWZEiupKC888eiYfMjbZxV28",
  "key34": "4VHJ514NwqSE67yJT8GgmmUigZ3vnBCok3PtF3FP8MU4NGpzrxXrFub63baDRuVzXYb9byAtwbztR1fRyKeHG1Kg",
  "key35": "42CuLQyE49xqSJnKJqP3tKhMoxphkALpyqpmwuXj77nmsQ9GyZ2VppkC7GKohUk8XbrotsF3yzwHcXUV9d4Av4YB",
  "key36": "5AWkgnhm2bHnzHcYp5CFXrZJWJwXo5yz95QL8osZf7PLzjfgAY8vyygNidzjWqe9GBBAeqYCJqjYKK1SYRvvrnuW"
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
