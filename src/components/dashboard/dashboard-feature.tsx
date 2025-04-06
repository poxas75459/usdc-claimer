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
    "4rByPwQCintw2oJqdS3yFeYnUunZQr4bunSS5THnPKxnc6XSf6N4j8HhXFucMLkWQUXqeaN1qJBgCAnjzTFCb62V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZ7XrRyMMYmB6hVzTYT4GdRa3cCfSQo7dFZ7XmXCZRM4Bz4MPNeobE3oUf9oqci8Nnanvmv6gpMGLC7KBn4jSF1",
  "key1": "Ttguys6Vp4PErx9CbTSLJePg9WmnnP9Np1hYyjP3MLJv4XzBGEhM8LibzuqZtoGdACyfmYbrxv52CJ1mvNssneM",
  "key2": "2r6AfM56QJXVTi8c3qPijMdQzX22Gz5R7jMQivenAoVDbjNnr88k76S9E5nxfb9afHPhT7VGZ4r6eza9WpPQtrUr",
  "key3": "29iZJvyutoE4vwnUiJsDttNqH7RgdQ1kd2pB11DJy3L1ryMdFqxyzkNzQ8RF5HEG2y78wEebpyxU5DfxquhHNMxv",
  "key4": "5hLWVh7vRxBw7jPZdyUnpzMHuzMxRn8apP9Rj8BZ8huyJHmBwvVUmw1YnhLZzN52ETUApozMxikopYMqDWrfBT5G",
  "key5": "2qBM22ov6ezWcjT1PAc3iTFmrZ7n4gQh4owGos14uLYDjZtRzitgnzmsKY5EtcsoUXf5Hz72CmCbhPcM13YYUNUU",
  "key6": "2zjt46gUGfzM56JfDqnA8r2adR6B5hRGKxjpCAyZUcY6CAniGuMqdR11Wca55tpYriGd8wvxsgaJXgWwahfyzbCP",
  "key7": "2Vkjq1ro4ggC2ZDJ8csRHq2hp5WKm3wSCqPvVHnLiyB6m1aL9bvpCfrVAkaMa7UG2HhbqAGFfXZcLMuEEKetezGi",
  "key8": "3APozAFSNFmytbQ5jshYhBSKsJWADwv96Ljd7B8LAXijVLdwo5BjPEVcA2roQM2SomwS9DRSSdBC1ofEN1KVxfqi",
  "key9": "4ivnCANtJ6uF223uV8u4uS8DeHBtdUAp4Q7niwFr5E7BzthQJLhKYFKP2jR6jUwSGxoLSUsFYYhzSY4bsiixtMao",
  "key10": "H1BWHNya42f7PHw53oRdvSdSnKmx8CAeRZtgsNxMsfM1feQN22vv4JjWLHo4qhK5PWCoe6kyeq9ynsWzD9DDu5n",
  "key11": "3BojkyFM3pWdUeUncryRQFJHqjG4bnc9SJsvypUxuWMQfuSbuwsBmV8JFg7pRVSr7nf7m4Nd9vFMr2XfZPaBWQpB",
  "key12": "5BfufTwdu83mWojJLnhUV8feEr3mLQtNhtdDSsDNWHjjSHgx2buENrpT3fWFEQ6yc8z4cM6taUFsRmhepZTMdYPk",
  "key13": "4Y1icFmne8cPz64ijm3bNt1hCUWrTQpYx7PpVSPpSgZg7N18fpV2gDbvqFE97AGzWjU86PAhpHMVBT7agdbjDw5q",
  "key14": "2rWZGVf3DTVYdScNCvxrVzrQGbFhpRGYZF5tae2FLYnt7Z6BVvw44xGfCMReArnrXKcCd7Ygmy19hq5a7FNaj1wb",
  "key15": "53ek5S5sMi7U5W6eawRkhEr1ynAHc2AHsxPEUjqycbEpNSPmAyDBe5aqYYgKkf83rBWzJQhYeV8z9GuZoVdghy3",
  "key16": "kiS6PEEGFMXmjxTcadBLTYbCHSAnLpkHnMFqsy87bsaFLuKywj6m2htgmwborFys8Ey4xdsNxViZbV5m1Yejz78",
  "key17": "3R1SNMPYZjqhGxD3TeecVz3Ni9iF2BZH22neG8ZLkWrTjxx4YDS1QpyKsCpcPWeFrwyNUWtFTmxqK71w9nXkHJjy",
  "key18": "236f3ay7xjUS5DXEuXfgSF4BpfzjRWHNwcK3doaoyAFJ77gRNT6CKbe8DXyAtVwZbDUGn8ZZLDGn5y9tPHVnUaVD",
  "key19": "3VaWWjc4LH7nhx1rnjQz6xowFAfTrh1cF2zhfKdxLbfyVt62A7vCFSTMrgLc8be7DonXqRvJhWiTCvuAMKgpzmZv",
  "key20": "2LQEsg6C7ZhDbB8z8qHSCeTU6kUAeUY4SjKg4qpZM6L9RP23g9xqU2TapL4PJDjUg8cejhw7Q7SJCFkr7k7n7vBY",
  "key21": "4qVV9zhfZXZjor1RGnGAnRENQPAr9AJ42HnouX6BMvL9Y7yCwwzbFjERS7M1DqoNrNJErs93hiYrrGo5YteaoNkV",
  "key22": "3GLBrTfrxZeqyTQQsGJ5gQgYjxx1ky1sqoUaoBL5EGyr23SLFEijZva7wUUPsiEocZzsXAjsUcrc4gwdvGTfARmR",
  "key23": "5QSePHnsU7DdT2vMUrG5tVqpUVqBbSh6vmkr4E9rLVs7Ht1vRSTiNHyV3Lc6256jk3GysoSzQeHiqhj8TkBwRD1N",
  "key24": "2AsoYsNyQNjYfEiMSwBS2jb4cNEUBr4RgQobxURdpAAPzkZJkAcHv8JP2TgiZknJh5j58qwu9KsN8qDJJsMrjoq7",
  "key25": "5LL6ZBVyKYzXSmFL5qwZ5rMPQ3vwaCrBjJs7LjGweNT9YtTs1ttY6wdkZFhsfTt1U8tZQwMuNjEXJftQRaAk2u4d",
  "key26": "4EqXBfHCuibDQfBYxoeaopkcTfiBiXb16WjoNeEHDTXyAAbEkfKKFeZbNquBXWw9Ww4jPr5iQxTuwfSJZiaKvgdU",
  "key27": "3unkRd5rTPZdgwnTJo1AGKUczc1vUXBSWthgD2MyJTvW9CAaYWXE4ZswSiwR1Let13NrSBLujicvjt5f539K4JxA"
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
