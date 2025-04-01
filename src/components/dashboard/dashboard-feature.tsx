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
    "i7in42nGKGXRFLqnNQMonQgh1ZgGBF1eTwL871z3wv4ELvAiYiExc3fpTKZRqEgJrt7WwC45FRTEMpDFtaxb1E8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nfdhTHVCEha77g6icYpzoDh8eP4KqWPPeEWNUTwrkYuhTw8ML6wqf2Gsh7F7tmaU9uJ52NU8EZhbdCt5EajoHWL",
  "key1": "5G267xEdnE4gkuZaFsnTTnKSGLBvpJ4atfHYJebPPGbUb7dwQZZZ99UKsXyC7paFQVr4vnz3my7iT3XQPGekvo8P",
  "key2": "27YUPVq79HJ1yx7fhkuudtmLCco2QhsfJLht8hfpLHv9Rbjfz4H84mocu6XymWd4cHBcvssHUG7tsziYQap4czmh",
  "key3": "49NtWj62jzAEdWMKq5RGqsCaoMdBXP5AiHxK6MPgp54SfxoNDx8gkZPTGnEYxzTt7SU23PE4Y3DCnREs1Rc5g3vZ",
  "key4": "4E1MEs8yss9BQzaE2giroNgVTRscb5iBfGVQEtR2S4qs79trXFZNRU2ubEd1uS1sWGPfw8qeeqtnoWpvMW73TFYg",
  "key5": "5jq1jexofkSkJzTmTaRso5CKHUgmr4wH7LZZxyxeLCaN4LfzwqETnaFxCH3dfU9YhsEqo7QnEKegZeBY5c1tdNbj",
  "key6": "4AS5AQaTLWk8aDSWTgWTvkz2nBxmDXfmYnY42asdrY3Ga7idY4VDmXJ9gpcLpTnZA7XmxgQUpTxsHV2uaaRLVRz",
  "key7": "4fHuwuq56YQq1NaynVEJjLwYv7F4AYzm76hRGAVEBCt6XAsfDwFrm9YuAqTQP7Zkrs1NyWyRTtjYhRYTK3hMZVuj",
  "key8": "fSw9jdLyc6eZ2mqYvnGDNhM1sHq6z2rQjioLVaD6icnbqrBbDyNKXwDUS4HQRrSTrRS3tJC5wdPTeFD5urCCnra",
  "key9": "27HkyoukC5M5NPVVmmfXLNVHCkJMe8xUF85CDMbMnpkukaauV26x3hLbLXS9bnJCKVLgNvisqVRa2JZCkBEtBwW2",
  "key10": "5zrDBXHbKZm5WXJUJFCXBh89M4diAd6JezPJ3kVNmPz1KrSDL9mUBmXWH2sYU2GV9HQR8GfybFXoWJzAd9tmuD4R",
  "key11": "5X3nVGd8zHXCoVUGVLCd1BXofDPPEV4XZFHbJ7s8taY29Sxa5UFgcWaZeE2bytn743nbmNszrK2Jp9jWNkbwgZq",
  "key12": "21roWKCK4zAjNrx6kQJRLPVjxoRmUjeuZNmYpGF6bYnwyL1jMNqD3TUZtCf1NdJjVh2bz6xk1m9eX1WmGmC8mRaS",
  "key13": "5PTrmGsagVivk5eaEN6LSuzrPMeq4as2x7AyxzNoFjQvSHfsx86rB8p57v6ukGTYQ9f8RYvJhfdJVsULi8pf9STZ",
  "key14": "NSr2U7jTmeZcXgJ1hyjvhDewdvkiurtDSFy87YrykHuAX54HofrtbzRoRP6fNrdqaxrAHeFv8Vdk8zjvZoWvCHW",
  "key15": "2Jp1z6c2TfuiaVhwVMsQHTcF7EVrk2mFrhVMHp1dEu6KnZrdEFNmA6SafS6mubwDnyYdFqbSdNN8Pnsbqwzvk6Gr",
  "key16": "7cLa3Fwt4dYoSEnsRZsq5Luxv7xqJ3Ki8rz2U8e9dkRgdtRvCLkr3RQRYTaGuTejpbCSABRuG8dqdhg1bg6xYBm",
  "key17": "2dhbU9HhDE6vo7quo1gtRjYYSA5RWJhV4eVc39nKxc21hhe9z1pw5pgKEj4v9qakpupTYBXP6ciT2WmPBUV1Zib9",
  "key18": "2kdynQkRjpQktXfwW7Jg9txdSGMfZxhVST5MRbcS7CvXA82cYKiFFJcygWfvAnp6mGKfYiA3o4nDkgeFfboRWTvM",
  "key19": "9vy2eob7XFg59j8mk6zz2cNP5wv7dAYTPqj1FLCD6ggoEjaxJR9PunFKc2RWbtxCR9V6aMDn4o9BtM6yi33YEiD",
  "key20": "5Ka9WfhnZWnhVVNhnBHm9WJjq2RGhG5XTWbL31fKeuSmy7t3eVjZJL13rPqE1BBzdmGii1zyYcYugvTdFU9Zqinm",
  "key21": "3bnU4G9XkTNaMKXsQF3q7t785yPpCN1uugw8vvDApT7VpU4QARmtRG5bFFoRx4vUPfr5j58g8WfEuMdkVRkgENwt",
  "key22": "2z1hQxCRC3jRiMURU54g2nypEzkLDgjBpvehUzFnNZoWsGxQMezF37zU4a4Jqs7UaR3ScHyH9bE4gcdXY7GsimS3",
  "key23": "5i1uivQxCURKSSHGas2qWPoW1eqK8jYGvjCvxQD5i4A99MwstLM9J3Ew1WUPL5zFAigz5qUAmVcZscsBGLTCtK5g",
  "key24": "k6R7sVL9zeg3vHCmHAmhQiL7tZ75gmCMf2DQaKJx6PpKnazv9wajxvZVvmKy3EUUGSGUMkMkd3oGZQzfrTZtV4r",
  "key25": "3PgWKcYnXHcJ4FKMkvcD74mCnXMtNmgELas89KWrLU9nXFgYskxv8g4XJRcLkngQxdkdw793cEhEHQurMD9JBUDN",
  "key26": "2x4yhVxVsN9JJ2FREDfVNk4K3oP71w91QAr3DeYFZDStCaQWcNipMqEJHNg71uWmamc1tDu8bW2TT3VotvksGPU4",
  "key27": "6TiQFE5EBzHQP5w2WcE8Xyqv7CB3QSSdt62j1LfKwJZRpJaWeHoRTfcp9KacLtRVWYxDg4AGkfh27WyQTG7GuWh",
  "key28": "vTY466iotEKBS3Pw4r7SrVAicdw35iSSLYE9L9S5hvtdiUPRVfErWX4fjCek3fLKocT3uuUsV5bimbhKKjavU9j",
  "key29": "3D1LytS69apXXZjR9BRvqqh4HnBpQnejEVuYpaDNByYnzdENRqBixHd481wYq15FCQN3KDCABWLsGzrheUp4CMci",
  "key30": "3zERnLYwvJhARKtE1sCUzucuC916u69MUUo2Pg3fuBZmoC6bfu1sZPBc4PRTRJqHf2h7sKUaymy1rn4qsYXHjoc9",
  "key31": "3GacpqHbDr1iHeNpcThAQk8ko7dpiUuqMLKT6CSQWVrY8A3qXrLgRmkxH97MAnL3RTE56T3USD4DpQp9U998niYM",
  "key32": "3kh2jXUhuya2hic5DSWyDHeP3GHHPySye75zuaBtowmTA1ynB2ihf1TDJo89peAmL5HpHQqigEijQJDfibEY1qUV",
  "key33": "5ZmU29xtviE9kZUJi4nEZuwq23QnfH7smurbRkrk9nzQPxuQt3dLP9S3T4wUXe3GjxymMadkYc3yyBFuqdeeHz8Z",
  "key34": "2TgSCU7fzbqLALuEAHZ4TZvZoBk4ACB5ZSs4PWZzamsErzzafFiU3TGpmK3T2fVuaaeRDj6ynfUYHb2jdJ82Ugfg",
  "key35": "5sx1Pc6XDrqFtggAN6eWYBX3cZ11ezMX9Qi7nqTJC3qfspJzWmSdi4HPFEkAjmkbM16trh9GEzA2XqqgiEzjwoJg",
  "key36": "RU2Jj8F9nKvNqJmJ1qs1979MwRAb7GEdMoiKw5get64ViyjKEwhrmzHsc1JY2eXqYwccSV7wEbQwHEiGZzfsTTr",
  "key37": "4wGM5NeK7ettaMGg3Xf1UH2ouQtyS1u2tPr9goYQZxjLawi6DRdJnJnAbQpLRhnYV7Dgs45ZqB1qXKzM8A7LRjYx",
  "key38": "4PmR7LMK3u5mzCvGyvLVqcd4pmRp6vfg5JtqidheKJ79qAyzmvTQg6zHZHmk8jsYSTZ8Y7KEsLHtCC42jZ3pDP3e",
  "key39": "2jYFWa1xjC5PoRUFuS3VJiNGS3Xs1zfnfo8BtYf3wBuePu2P8GVP7bnZ7suw3nfy1aoPaomZdfoPv2ZH7W6jUHbn",
  "key40": "3vUPpAwPyeBtqNW6DKWKVa7aiL6vosetzGtAAAUz5zdaLWbYe39XczCWEPdmyWAwn18bYr88Qfb5LXcsVEbPw6Xd",
  "key41": "6q2CeAKoDKrGk4Qz3YrHqdTAkrq8oX5x2pfuba3FbkzQ8Xsnva5YrrankBpGUHrWMvE2i5B8HWKYcTckP2Q3QNB",
  "key42": "45q9uYy5adCTgQo5z6CqRK2c7bkLtytkJNbypTA7qNxoXhVXTjvfGEtqhiSpiD4FbBBN6Epsk1hPL1hdXb8t4CVS"
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
