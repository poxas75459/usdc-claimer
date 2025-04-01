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
    "5s5DZ9BuVQGLek8qVvjfLRnAkMgYmx1R4RJMu4CjuAkNLbBXUjL6DDfk31g4zpzkAPauTi2sFFdsvSjKXtaUSSs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j2NsCKsFRd8jjBoYK8VUvRnb3zd9D44ctC1xctbpMscyktiT86xgKSnVUsJWXe3Rtd69RpvTsgAKTrCaPU8bTZP",
  "key1": "9HpMcvg3o7LW16uzA5wx4cs6Pqc9pzATjbjBYy27y8ryRCvvnozhnaFNFCcNxhSmp7ZHeqpMWcXkU7cDZei1cMr",
  "key2": "4jQvjNUJdKjyEbHmP2njLnE1f8NBXr4ACJFDi1dD5YF3HGYKoqCTbPnGKtqELjFD1yACUorLPGHXCQkFxmRxmEk",
  "key3": "4XFi9tC2C4TApPoxWXaCs6sx4zFRyvGawhfwzocu73WRuZFMtZyUGns8C7jbQpoTj2qPmte8BfH9bVcZJN9LpyFe",
  "key4": "ZgFUyjEF2AoYNgHS3k2T4P2rUE8RwATZuhTdLKHMUt7J8U7TbNw2poXH3BxX6KBqhmfPju4wNYfjuwiiVpkoLzP",
  "key5": "2ui66ppJEQ3fRsrsyG45favD6wWV4KN4piBZzZgun6H8VkX7we7yf9XkgXpyxofM8mXBfwn29veyKHsBLg2dXUph",
  "key6": "46izPxirLTohBKrtmwqCC13Yxnw1GaqyiKMpHiCQJwAqb64h26xpZmpychevEoary4FJeSayersrUpWhWWGAzNaE",
  "key7": "5czef4DeRTynAkVDkdtPHjL3SdtoLTExC2Vy3WSHYbFtxR85HHAZ4zg611MLvnV5Vnh4jBGjeEEHW6n9bYesThXW",
  "key8": "irpBecYcFCQ41PoWoKcGuXvFfZpvARBDMk7fjhrDf95Mq8Z9pmaZkCruEcEwBGTqdg9eUiqooYsnbAHM5REL3Zd",
  "key9": "3PrzGN5XsE1pb7zbZ5jCpG5Y93fafx5WF6tY8GNp6PQP2fynmH2qPWA9B6aJF4QGh7cVghg4ZWSrwnrsYJxMR2vR",
  "key10": "4fPzPfnyRt8jp75NxRuiwMzJCkmkUMpWccQds5srNZTepVP2CwiQWksoWcMdjf3TcdB1KrjAQJZTkCbBdGBHWJGd",
  "key11": "yPRPnyrMj7H25kARDrdjg54APaYdisKc86EGmaMHayiHEcwJR2BGyJV6DcZzrxV1khZmEJoP6BH7AbSD6FLtztK",
  "key12": "5duwtBHxLrppg8ao9ZT4Zgcxno5TEAdU4uE5xaYsFm4DtLGkcbvtBtoRq9a8cLvnZMuJXAqoGMk2fov7Sc4HTbpa",
  "key13": "r9otVMwxAFUFXaEmh7dJus9afN3gcSh7mCzoTshZQ7AmhGn79QLk1hpCiRbXuYYXmFvpPWFzHqNCa4bPota7Vfv",
  "key14": "4s9kAMHKwELTmUdMy5cXd1fP1tLfXsjiapMEK3aqqDEN6NC7EzNa84yDCviqBFPZsgKA7FxRDgD8LkvQFfSR1fGW",
  "key15": "22SzGW28Y4xAGM25qR8os72iwFtqgMDf9AMd9wGtsC1GaCY6TZ81ueFkjnnKpKvxJmdJtNeKu4XjNUUuECS3Dwtr",
  "key16": "3oex8aNRNGjhuFrS75CxYcZQXkMgK3hc3qNfV346qnjHZGxLnJV5mSxEJPySV7qd9MrTQgZmyboNw5bqWSyEwoUn",
  "key17": "3cFbmSNoo2Y18phnooXRtm9hnt4Lgkt6otqsVTTDMBPyPTynXzfS7arJjQuS8nAFDsYuzsa3PAmtjqBodosArHnF",
  "key18": "4jgGTq7TVNa1VqiHvs2mvjWKdk1fT4a8orRBHWZV5UCVYokMk8wxjNMedX8VS2f215cq9w6KGUGXEjbGyeW8Rnby",
  "key19": "3PG4qZwWW1Bjh7jHKqEThKAsrk2YSME7G6LDFnrvyh8ET9HoCB1rRviWFCrKP7AcDkkmcps77KZHPuB9HUTWJkAb",
  "key20": "66xLhF3M8RUYcBBZpR75hNoLfAcz9VEZ3RwqCzgBUJ98K8VBGVNjNDfNbUyqMYMk8wRci2LK4SenVoJVZLbQ2K84",
  "key21": "5PhQ5Z9RstbyGDsC5g69ooYRdnp8adbTxrFFn5eAfgguYn148FmY9qcZtYrBgZY2EMqNnznKJiFgLT4gddjyjgeQ",
  "key22": "4TSB4qWSWyd6Px1tMRC7Jinze1CxUPiAty1zbCvza6D4VGwUJiSRbGhE17gytEXAVoCXAkkjpQEGhVTHCYK9gJ3k",
  "key23": "2A7dS9caP9oWdTsUgNcGTJCoDSGcvdmxenuy7gCKMUPKEPg7aM7XFL8Z9RbtS2a1amDggbtr4GKJLs42Lm9Bus2t",
  "key24": "3LTCA2rJL8eD3zWzVVDicsXdVcvr3yuoKxsRTUGqianpxZX9EUoUnAn3uR9HZ55yy1tVDxwPYTwTdcMjXj9T3upY",
  "key25": "62TQ2Gbsfz8WgGQ2UBXXSMRHCc6cdf7WcQsG7Dw1EHLsKrxyTnrBYPAqNoN3hagjBQM8ojrVmxNifbmzPhFHfEro",
  "key26": "5vGJZuWgNKdQwtHnNjTtvgiFXEaNmNqwQ2j2WzgYevcAU7ZfZAtF3kfvz3CFsQvrhSPJGD43zdWEA4VAzrkVFPKH",
  "key27": "5RKjL3g9D57tWJCofaRZqCTTsscUuYek1XyCDvdGcije8Fgrd1o6MExioCm2RrJQFQdEKuNkgF9EuVBjVWtCxSWy",
  "key28": "66JifFedsYRRZQ5KcnZqZz5LRHpRb3qJnE56nbCVWZHFG8WvaQwdHmBVZbkBxvsZ4winS3tARfghaNJt1NGd7sFy",
  "key29": "4sDxy1DHZS66u4TpUVRroQitrgQwtsdGC17mue11PD6nHskAy4BVgptHp8upYFsxZAUhYb8ZaTQuVzKQzg9SYYut",
  "key30": "66EhKA4nmHQ81LpNoVbJGzRQHECAyxpQqaCt1zeYLYxqCPvrJGz2uqYTfatss3QdrAxUkU8T3Ppef1sEhHpkySEq",
  "key31": "5PYbU4SFf3ErFqukRHGp3DhrSPvmyfqQDMhgzTxda7kW3Vat2fWP19u6bWMg7TBhqPAivD2ZtAk1r7n6dHYkVW7i",
  "key32": "2VFWqD9V1PCsDj2xZRcnw4CgZvrse59C1QZhRJFDZkCGNAEGdBRAzpJsFmenvnT3ZXMBqxwh9LHEBCB9CVsBgEds",
  "key33": "5NgXhJQTwvhsztuDX2ryUvZkZqC8s9VAy32FvSk9A1NXCckeVq7RekwbkznyFe9aXmdGLpVDod8AfS6VrBFesDw8",
  "key34": "4skkJm9XxdzzeT6h41yef4A3XdS5rdw3qmuTrVit25uRmQzto7xiyCBQEB6hgFMKSD9ue3BeEGVDP5DVXDvn81wy",
  "key35": "2JARbpSbUn3d2UiHg2hdGM8q2bKH6qozw6wFtrAt3m36iwL1npoJawPgcYx8EaxGctgxpZ2SF2Ba63WMphZKCk66"
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
