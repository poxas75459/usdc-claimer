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
    "o5wTvXxKNiFXDx3yBUvZxxPtUtayCPJ2rieJNoTFZwgpPLU2qeW1W6JiNiu411nxz1tn7mASV1P6bHaDZhcn5Au"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gn7ZJv8ZDzVLfwagN13ttgcVem2qXGczmEpwrnkzdXqpRgnUkSuiH2d2ny4nx4yDiLxHQnsBUyaVo3YHxdJL9GX",
  "key1": "3vywc42t3MfUm4gp1tDowrZQDQU8ibYMHXu9Vir1z4iz2hMUEV29keNxZ7ApXD2Z656Bd698jw63rCroP9QtPfJx",
  "key2": "FwW7vgrFgh1Ed4JJDzfFxqsJcyygXr99gCWersdQY5c9UTG2DVAQ1Q8QzEPJKHzJbVBqDL7eHuKYQp2vmfjfoHL",
  "key3": "5LrKVxZNfFeExo3Mx9ikzhpmmcstzbW7AN49mFhBgSsnFnMCidvdMPcPT1GkCFBxqEmbJ8ACQs1h7iGquGdncHY1",
  "key4": "2giAqJSDKYtKu4doc2Qr66YQF7iNVHoLV5F4BNi7f8sw1ESkSFgjVofNVgBVHRYYiPHbiMzn9nPZfwNCixKNjetY",
  "key5": "3fwHygeiLihRJqdvL4zv2naDAJBeRzPNLngE9qBM5KaZRM6XhBZ2ERi61zYoeZTdNfTg4twervvYZhHwfaxijtHm",
  "key6": "3q1HUZn1aQ29WBSmWyejThcgwt1eb38nqZqYAbsZEvTpeBSK3ZgfSoRbTCxQdg3mkyqiWSgt5tACfATBd3RBiZhC",
  "key7": "2BtytXV9mznYrfZiXYZjZB3AnHbzgJMhQnfsPe1vXx4vSxeXbApefGHtF5cywVZVUBVvhjHAZjgr11vmrqgvtGtD",
  "key8": "5yWAsEyFXsCxZMqaxaQcRg9FUVrLd4dBBHjKEvHCCiWxDxxZrcGWqL8fAERDck3hfiUEpnrGj7GqzfjYDfuf9vUH",
  "key9": "2E8H4ceXvjRedB9DZYU2PFT4c6hKFSTpXbzyY6y8zvieLkgy9LoDwkw1MmGjm56RirdCC1V6UsFJb4H3XKuj2kW5",
  "key10": "4UnyFcXQTr4uFsgFGnoUbQE9Yr5TPbrXReCatV8JzhfiCo5g1zRPuJwRRUqfx9UGhKENGpJvfxxcDRoxwbas7f7x",
  "key11": "29wkkTuSFVHpEFRufkceuU9NL1sXFpXWTuFyLt9o4bG5xs5FebSgNmRWp5DSgLEE8WmTHc81F98XiWbLPdt6MQNo",
  "key12": "3w4VpJun5JF4F7rfHY2PTq2iMQBATUYQgTzUiqVZzRkuTVALCF95x6m9HALLL4S8jxeeA8ARfbQ2NTeAxhQpUdc2",
  "key13": "4Hny2Rwtxwc3XVyureUf9vJxWoJZyfAg79FCbxQiZuqHAL8K3dxCEnprxQAisFL9BQbS3CNvemadvD2BXm6nSVg5",
  "key14": "xWFt9iftoXRjyLVWw1GYTd64at4rfWtDPr9mGGRKtnKBbQM9qDigLzu8E22o8c6Mu7TjLEW43PRothJTJqV55n3",
  "key15": "53n6iR9owMokbxeSq4A2xgwcNCgmWBP6TizNjAjCbVUTgVXEutYxMGSmy3F5ivoG6fMa6p8ZvHU9E4ehuhtse8TR",
  "key16": "26Q5Zwux33485KZp3GQ3JHiSKEDLr9BHo1ukdjmwJrX12wYciwB81YNB7kQoqDqjm43gXNwzbywBP2C2Tj4X6p4H",
  "key17": "2Exy8A2wXuRdUXNWjGk6U8hvGZJ8GoWrxdHztrxpP74Y4fv8QVcicfigaPpZwRnyRphf45XVjqEo89qyaG7tYHRj",
  "key18": "4qj8XuNNWg9r8shpnS89y3FNsPjWJ2mhGGqAwFMFhyFgVtbrLfuB2UWzRuQuMw2EmYiJhgNp9Cz7hKM1VPjZFpAf",
  "key19": "3RRA3VvwXyrPb98abBD4eVyafMGr9pbqMrtU2kGbf8yvwXHHG6ou1Y1A6un6HYUDEKbN7zDz4sSWhCtH1yUuw4Ws",
  "key20": "4HDgJx7SrhXpufMe9DDZRGAPZbYfyb4xUPzt4gmcw7DFjifXWsZmzDaneA6xk9fuHx2KR1iPAMP4RXTtLzNA1cFp",
  "key21": "4YeTDKp59sUZYeT6wTxLVbkgBTSfRLk8YwhpDLLzA61DkNEBpw9sCV2VKJhS6JeCQB5aJvvfsqfp1EgUUL2go4YC",
  "key22": "5FRvUwDWGDCVeLk5oKisUgi7Vy9bqECJGjR7g1MozmNyasdCaiuBhwgTTW6WSnSoX8wB3nMwRHvbyYsQUvzSQEG5",
  "key23": "3rwVQfdJUum4xjALA3tFcbjuDgc6yFqqrAsauahufG9mF35JhzS52mZYtrQChPHw5Z4m39rF9rGqCRLA4bq7g4KU",
  "key24": "2cvAoKGKrTumjX8ykMJ8mX4Rs1HBFTJc4D7uiKZS8pHKmubDDiY6rfcRFiKPnNSoSfgbybqMKTn724RVZ9TLJNuK",
  "key25": "4nZo5HRnxmUELNBT8YBJKkRKnns1Fni1Uv1PTZADB8i4E9xHJZt2hBKggWc8bxK8yFNoEEJ3XHJn4ba4thQYfiUg",
  "key26": "47ureHjXgdkaPnTJgejtXy5FybPVdTHJWQ9BUZBnj3nWjqRJH3Uj27K4PKZYAHHgHggVENX1kWGryeruz9b5KjvQ",
  "key27": "2Qthr8QtUoHniUS56rKqsNmbxqDDqXhxQwbhT7T4hiCsavWiHR3NkMdZp58kTXCqLnecZozpD8w9xQk2dTtzQS5o",
  "key28": "55y8XQW2EWGKR4dQAHwg4hk3PQLpdrAEefc8UyxBN2QHNL92EJzpWNWsEAHKaUq2snAtRDUwArngZjdZnAncLYov",
  "key29": "rQJ2qgkyo8E8WW8T5ir1VYxqY2XQrR33iJEejKtGk6MCxpgoPKVS4sKGTTVSHCw7rikv5t8whqs77rpDrokLJay",
  "key30": "2cBC8pL3BLcxSfCMouDgYBxSEoyU8J9JbwyD9MPWmLTwovQ8rpUCgBwGrpcutgnp3pTSB9dTfGtapyRAeURqPZQk",
  "key31": "4aYuCJNFV1TN57qrLCsnE4P9HpC51DY6rcX8h1nwyo4PzTGHx7mUBVBJT1aULEiFArYAqnC9VpUUSf5VwWm85NPX",
  "key32": "4c1Lbni2994TxxzjbuboH6dMziN6z861bVbznUMhqbkpAncXV5QpkwXpYXg1Sc8Ke1fPtXRH4pTyRW7fZHbBypMY",
  "key33": "CREoRKhmyQnyEWG2eLLNxgWiEo27Hr5hcQebV7TELSEA1in1mdxZsoyyMXvonEfA4fjec4unBT5eavBjTe4dEaV",
  "key34": "541KmgoyDUeex23b4QeNw9NsBdvcvUBbTMWag2YViEPfGJFwkfgcDvnAyACM5AmKWRuXcioLLnronbmoYWcXEudx",
  "key35": "3YgWKWgGzujuJcMF3xPZHQC5JA5kdkkqvdUi2vqHj5mrPfsaYgRKcRLuvrBowqFhubaQpgRTMMueyjhpaDrX6Mf3",
  "key36": "MXpaoVBtctptsTjpMpphqcdtyWQzdcFADFpAtFXLqXmY14FJM7aGiRQ2vjSb3DxRu7FEWLTPHK5HvUohKunVQFK",
  "key37": "36vyZe7QJVHensvrkTpCPqmNdWGhC5Vf5oqAWpDJzYXx9JGcd54U1xsyTQTmg2HwRHgsZthvHT5dkKoGqYwFLAko",
  "key38": "5pATMTj5EWE3zmHaCm6beQVKqi9LeqZV952doWKeTze52UqfFGfvjMqT36VEird1ek3aiUXjt67C2rWAT9M2W7ta",
  "key39": "2QozSsa41CAnx3XCsdzg2dJ4KcUuQ2sP1cx7Mqvv6uThRzCT5wfkWwwcewEcfNmjQH9qvqJUJPDTUJXEAX1rhaPo",
  "key40": "3szhwKNuXcJyDjHb8ZqcX44KsZttpZN5qi7K5TyJ74MkhDyWfU67RPRyknmYdGcJYfmnasgs369tBz3wdKU8sU5G",
  "key41": "5n3xxLawya6ZJmt8hWBSPvWMQ1SukjxPcx6NJ78EH87GK2YakLYswK3fSgBbvB11E15Y6C2e5Mw7uojg4o7UfLMF",
  "key42": "39VyNAUVssTFYF8JMkMMJZ834dYMRVrGu23GXKf4ZHtG3YwAB6ipjnfLbHfLQVieXoei9d6yUei2cxEjLgCjCtYg",
  "key43": "23Agmso3UKnF63dTk8pcmTpxsy3XdrinUTYt1iyna5ciMRXdkjLgbayj6drJveDZXdFbRkwi5VSau61UheDcLShE",
  "key44": "5jcMmjYvvykptzpkmks8kRVik2FsnqTXYDEwosJ3FcCqdYnnYunmjS1mDHXsFJ6GNLLe6itsrNnV2XMcxsjEcoDM",
  "key45": "4JDsYrXgaKAvBUrprev71eYDuVrn1u1XwGE871Szcw5JfP6aPnofecdTVY4fUgABhMYf3bxpbGLj7jPvftuUfHJA",
  "key46": "3m5VghfNBkozDpfjepy5vLJzhMawnYsXFp6aprhrgqjBRbrLsFDGpvL95hoaCUvpSY6T7NpMJwHHSBQ8jcbTJ4Zi",
  "key47": "2f5PFMvG1ApBEQqQhRWd6CziWQkFsfrKBrgHa7YjDh52WeWFFG4XQXtDVX9KBGQPJajaksr7GZKu9GRYFh9UWwGQ"
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
