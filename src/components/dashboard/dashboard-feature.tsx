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
    "Mqxs9kPufk8HWJFU5vuAxF7PzXg7h2oGQzqhdrv4SxvESDbSyNc51T9UFN7wdV2RE2t4opgDeeFU5TYNgUeUg2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21YSgXS9T2Yf8NnAbUhkg8xgvvvb5pxqyzeDLz3ojXsqy8cSBUnTWDshKKceiJ9jm8yp1qxN9WNXXaRS9XuPkr7h",
  "key1": "2LBEnfVSUeYvUt3JF58VMcuVGUyNJXmMEA4v7PiEEs82vWkozBtWBAnQ5T4VLWWNfXVWLmDU7KcsBU3RftiK87os",
  "key2": "2xGd1pCMH5y7ZzLab8atubhuJGsLgwzxbLyQH1V9c7k9FPqVYJwrdFRnXXBKfBfKHvjy2ya53cscSyqmVkQTphhf",
  "key3": "JaNUfNz66vU3skbZmt9B96acKaTN7TUC7BLi3HaLahFA6DkG4GvY31TukMWDPmHKYscgMMtK9JYpYjMyU5H2H4o",
  "key4": "3KrW5D8nTL2Xb9fsWyR8mnkcviRoo1GtzrY2Cobn75Kzt9LLmNs4abSQ7TSb7G65mZMmAWrmrP7rhPk8ENN6u2pT",
  "key5": "3JFDb68d2FB3qkuxYHoGA9t2LHRuJK7ypf692HKpWXDhGtcnGXw9SmttUudo5hcH4chQsgUy9J69iXaCjPfQVuGD",
  "key6": "465odain8nbBitVFRdhXtBtohKxygfqnyEy9hJiSWEKStpk7ZU8LUnwHXSpGNU68pexhxZnMNyZFTpHXdUeomGjB",
  "key7": "DZLyHnPLtxBCjUfdZEzuzrWswKxHKcJxuWnsAwAae4uawWjykaNNEKs77buQFU96Spfqakp2JWsxn1FjQqWwPj1",
  "key8": "oWJYU9nWkV3eTU8gKb4w5Ep3YGfHSZVfVc4bWwb2SBeiRHx9vepfozv4P6pZRVjdGycrjLPsxGBJUrDT21vrYV6",
  "key9": "448DELSGGhefhpmk8x6PUAcumCSCntBmf2FhkjiFQGTvXr2pdHMHRvDT9gvBRgzyMwmbFAcU8GQj5WPXuQXk42Uo",
  "key10": "VsEfsjcZ3n8i7NqhMkqfm6dADzMeNTr8Go54HCrwsQh8Cp8Jz2n4cq3mBeizMLDWjpKsENL8EnPp6heTCznmwcT",
  "key11": "4WT6LHDgLBw5z6AJ9NijE1n2oXXG2cq8VRtwSmxgEmT37n7LqmbtLdanoDKPoSHBmnbuLj7T6GgnJCGq3oFUfhTZ",
  "key12": "31hc3so51M1WWgS4wYibGxktLMbtrXC1rWSDDsNXjMqaTVkMcGjSqRpG5pJExKkJwZbfRnwyiuXuK3u68kemJHJ5",
  "key13": "2bgkp8PzxtqmawyoLsveAS2SKftG8vzR9dbHFzja8eB6sQphXk4FiedhFpjK46YDnwG8CWkmw5q37yFtpViVzfz3",
  "key14": "4VCz7Pti7CBFyoBGcLGqCS9ESnNnoopvCkTP2siH49p4zpFfdcAKmuXSMY31RYcyk6eyRTQFjpWReziM3XWQMAGL",
  "key15": "2xA2zmvzN84NqDSLwiYa2DNeMvH1CEVrrFnt8shZyfGGNErkpQaSHDp7T4kir41oHwMQuJSkUw16AWyEZkxoNFyW",
  "key16": "2nWkr1PqFxeqpssEvyXNPpNZFEJpXEmAdDmk3ivw2pHSL3Hy2fnDiPtBveUS9Go35tCxU33s86jY3FDVbSWaqPgn",
  "key17": "3DMnVSbC26Bg9uab1U3Qb3ubZHKxXDqbXShUS7YX55GDiy4wFwLQddHpJYg3NociMC3PFBN24PngkexxtndEJp64",
  "key18": "3MxvQ5BGRTqDDD2QnsEyQdWKtqPHb7KXohWoaWDu3Z58KN7x4bMuA3X9cifYADzZA97euHvQm1nw8mwu1QbDFpVc",
  "key19": "3caqKZRdTZqaXoduEunfvuTTyracKnRfVwRwopUZLvc6NFxqyHgetVsDWRcC7QsF437VyUjoBJdANEyd1Fe74z3V",
  "key20": "3Px3QYmVTyjAZC7njwkQy2FktM7KJx5mKdDkBikMhf1TB3bWSvNQwpKYtGxN8jmpQXtnXbSZiXuQaUf4nbgtQPLy",
  "key21": "555mLS1b6KK2veHd412ibC9o4wjeNjWXXvE96sNK5F1makFuyMBrPy7Hnu7R46HqCDPNdizoYsSAYm4V1Qxu1zsy",
  "key22": "2Ujjxrrtb5JozZzd9ys4C7yv5sVPgDojahxzLUDiXrxPg4tfn1uxuZ1LQDyGsDx2wYdavFbKjkrVurd9vrMRk5xu",
  "key23": "64U7hFMYZ2ZFqVLSRuQEpQvziFp6T2Ku98eYfVGkrfm5vCZZZGWGVsxvgtAQJ6TbZkRxoBDbrMJmGsoDYWV3CfjL",
  "key24": "5AjQiqu2MPkbUN9kSm31Ci5SgzsHAqrgvfJNrgqn1YRuYwsAjnRJAYazaoKKuJ1XCavXRiFqBndK6RAp83gJEZVC",
  "key25": "42QGzHwZfnQcMk3df6uKqaURqcjV64tApQTWVZ8nX89HvD7G6j788tZ9DBxD5EKEmopQF3jrUUe33iHXg5xQ92pc",
  "key26": "5CEaBm3tm47k3uAAVodC859QKxQMjQSU4JxeFFkLz5oABhrMR6D4pHS5sp6FZMdt8b1zjbvLfHmPoWmDuFmHtwWu",
  "key27": "5r5rtoBRD4jbfSeWgLjr4rTZJViUkCH6fCJqufPFEBUs8eGLkqji41f4FDTKTNCTQWjpemWhSrmk9Ct9MSjRHfj9",
  "key28": "5rMxi7JWtj1VjmUUxE8mzduJLifZ3Rcpmn15cHeWCriwW2Wae9DRibmJBFGedjSwTVXfHiVjs7CeTm4NHREpXAj2",
  "key29": "3Y6DEqp7VCwFkQPiCfvgf7vEbzyQuhQrwniES4B5VKP65CUj6SoKVwJVPCzWKwooMtnw5ZNkM4GgEYBZqR12nb8t",
  "key30": "q2d3sd7kpaAUqC2p1CDyXccYnk4PHfRt3ki3gBS57mBNDCxoALo3WgEJ8W42NbpkqradJo4Zs88FxX5wFbcLgBP",
  "key31": "5YmLLHHeVLjxvrrNuyAyKbDrmcyD9muBiiywGUevdvbytvwgHipBH8GMvLYZnyHWBgddZHXqjnnBifxjeuJ45p6a",
  "key32": "5WCsMELV2zKWpMSNDfMj6F3Y4ZpFAvPg9ZqmQWxkJsDjcY4hFgpDRhyAggc3Fmy98Nu34u5Q2TYVsqCtgs3JsQyX",
  "key33": "3CguCqubE5Ris3D7fWe8yAcvkuJSgkUN8D7Us5dUhbodoTpjUEVwcZWafXLeY51Tg27ja4sE7CSk2mUqbXUBdr5c",
  "key34": "59ew1hBxvpiNr9V6dADBXUmzUmz6CGSH7jesVrRHgBiow68QhT9ZtebHzufbWyDKfHrzVqYkpmGNSbj3WQ1meSn5",
  "key35": "5rXu2Rkt2RhXL8z5LcNNWiYoeKzKuBxGBDchKtbkndePnwhrwgpoqyY2ygARGa2qet4viMsgLwyrgpXFvSGHcZP8",
  "key36": "GnQWQZzw3zzhNfvjSaeALH6VVAaZatbBogheHHsnUi6apJaXpa13PbAoNY3MiE1uWfRwc4zHmYzrRzkNf6bSZmp"
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
