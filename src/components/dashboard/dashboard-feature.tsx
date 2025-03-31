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
    "3vhtiFhhZp2WTUtko5STLZtJfwqGq1fyn2rUbVeUxuXfoVNdR4Us2gp68yZq9TSFiJn2r8Vifnv9ubWSFAzXVojX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3chfzJU92ZaGV3rmWqaCz1mm12m1ZceYuy8kdfQ1kTXGCrPGLwMdxUKoqgSB3MKAS5FJJi5yRrJVQ6L7JiDzF33S",
  "key1": "32msKi6DmS2gkJZQmkiHkEccDbQGtXZT3n1vVPe6xe894z3Tk7UKV8tKVVevYd8MMCK8ZjUcYPiuzuTwjS6rnTeL",
  "key2": "5wy6qSM925xSzrX8QtsXbLCzynWEMWRd6Cpu9KFEALm4KFQcgzfWK31DBKnzpkHYVwyZitC8QDzDsRpUrgncwmiH",
  "key3": "28WGG5iiqW2CaPkdC22cMDHfnj6iqrso9WVepRzp6fwk11Y4HH77W74FkVTKVd1DBiCK7ZDB59JjdxifaH8rNB6Q",
  "key4": "R5NQpFx91g69EGX7QnfzgfCSJuBRBc2qy3mujYk2CDz2A5Ms2UFkBHGi5EcUmZF8GcX5v3CCGuQcPAf5SAZT6KX",
  "key5": "3TyhzpmjrT23941KLutsWvLNbaaij9vCVkuaGhBhmo4UukMAfPnPLqVzVwaPr7LYd4e3kYUXHaVN8HnbWs3jQyZ6",
  "key6": "2kc6hC3da3NFWokC8Xgw4YJKAxizo8Ei2ejTobCZTS22ZufThmUDxPMm8BVBJv1hzE68yh1ejjXrDwN58Kq5WVTr",
  "key7": "t47bQkV5Ya8tsVyShWyo6WfzYc7r1GPxkrMMoDqV6fBKXiHRteK2Ekmuvw4WVRHwc4YdE14V2jFM8JVSoyKKqwQ",
  "key8": "5oHRi3YcNGTPL1M237gJNFrY3Azu6xFwPcNn9zKkozcjLqUh3S6SEgMyxZjQQ1eHCAPuV45KEXt4CEE2RSh1999V",
  "key9": "8mgY69BtXJxBHTxkyLqNTX9nUod2YpmHGYft7tUsQkwVbGkMb1MfrwUqoM284SBnFyEBmsHk3zNmWBupjCS4WoS",
  "key10": "3TtRneKEFKX1dX6fABq4PKvrMciRaYadpZxnTvQpwcMkkiPqArn8482gRFv2ADZQgNyXANmMXoDGdpa4KStwQAnj",
  "key11": "4Yd3CT64bkJ8SPG8foHzqZrXr1vdC12MffzvEJvHZRRNsNhPqQPXzLeomRSbmoNijs6tVNBxGs2Ze4FxEeY9mhG",
  "key12": "4QGivcLu6fTQ8f3jB5ebpDtxXzTC2E7ZyR8nJrkv8pPKrCNWRUdamcPGrL9quTCtdd2Ncv9qEMADu4znWu3rqMog",
  "key13": "JGTNUHLV3EYryJ8PJ6DUR6izkX5AQ42U34fKF1FSxL7C8K1rVNKjg7Z8EdtKDLZBLuvb5sckZgXMpLNShUtxT71",
  "key14": "63sGiJf2pVKLHSePFktpd9g5g1Fon8Uo9TnJC3Vpxxk8AS9Skeho86tP2f1GHvjV4D2Lmx2z6Cn9zYgWt298XAes",
  "key15": "fVmspfw8jqbWZr541NKUdw9zSWDMADWZ4BKT815miCcVJytMekVdeK4ujFsz8vddqkZULu7QSCnYx8oLpQ3nnQz",
  "key16": "5pkc5XyKjDQmaaFZGGsE2xTo2qfG3dXxFKYAePwLGZocytaoHtPLmZKFB9BJnthLmXCCiw9UJVoWi4ayEGJNy5YE",
  "key17": "57YgtBcXmm7qcGYvjsrcZwaUK6Kjze99HbN8pQgPWtsw29RUWD1NGq8Azzufss1gTuHXiUn8WFepnwFnGLFxF2od",
  "key18": "2tjpQSsS7uPoBZUuDjvWu6AtVoxgtkFjwSChnNAioZ8neWbPqVSTyoFmiKnUMPr3b8f6infZjKQnXc75bhDtPiog",
  "key19": "2LbPQnLT8XTkrDFYbFmS74ZRXsLcQAKaPWPNnQgTftPx48VrPsWmFGGbFs65JfYZ9VBznhmBaqdM4HGr8RLfPnBq",
  "key20": "3SizV5kJzAV4wUphhWWpqQ5irJnTavDkbzCFfHmrShbkJe4uqq1CCyHFRKhdU6H4VdftwhfWQjXnPz8JTntHtxu8",
  "key21": "424NCBf1FHSkBnQLWFBLsSi6tybRCKAyGXWWvbyJ3caj8VR7yze7wsTYoSykktKqShCB3nFuRGezPA3mi5iNyzjj",
  "key22": "oMkJE34RrchGinocW2PW48a26KEAHLi77EofATMgjLnsp6ZKoDV8pnrhd9ysxVNG6YCRGQB89miAawmZsdr4vJ2",
  "key23": "5EM5oRc4yuhmotbgLtyfyrCcRkM8k9z8M9uS8gcCPsjbuvYt5aftFmF4ugZPe6hJm3xECiCUmGgwzvAtcDMxvv96",
  "key24": "125XnvaaEr3gD1zFGae52ro7D2jsyvNFbZgfqMGmYKYcF75eWrdDhcYvqG6qk1k8gEwTXn5wAG7gfmcPtYcfsaBX",
  "key25": "BHYwBvf5ZsqKALro7rEQKGjGBZnMkea5UvFyV4bBNNzp6Z7FXvtVrzo5zT7JHRBzE7Er5ZiBwE9ZAkHx5sQJwnu",
  "key26": "2SVydptTF2m1opFTqvxECzDmdhzqEbJfKcjYHLoSm9jiDNPoaoX4aSS5FxTEKAYVNt6FSzPgiaqboE95SYKxN7hV",
  "key27": "5RYQSxCcEgApVDsk6Robmmj37y4fgdgo9TsGM43y72kJNdKELQUXjPmSVTJ5ppLUbhmJwfwKvX6WPfHGnzuAhdkv",
  "key28": "4ZCxNSszLuFk1o9Qmnntbb5waprqdcnizfUVjoJTWrZymH1ua84joYuE4tzqqrwx4Dg5RGtM6kg3QwtXg4jzGDUf",
  "key29": "2ygErvG1DXZzGQ9Ss7Be2R8vqCznUREr32CZvi8KsGe9LbohmFzvMhopwmW2Js5SMHUun6m8H3cFaeuZNBVG7wpH",
  "key30": "ZLCACd6n4VCJw11fMA3UMHckFaYruvLheFV4LPHQnTT9U4Bq7kWyTuZ6wF4J9EdBPvFK5uQeoWmeDKHeNkAFfer",
  "key31": "4RFGEXLr6icG4mxB7S5cPZ1cuwzoytkDMLyZFXGCWpjV8bXw5Tbtws5tsDmizus6gwrZZY7j4iuT9roimbvAh1Y5",
  "key32": "4VheHjxRQRgqWmgxfxh9A5mWZ2AFoMMEzdpAHActEKDRkdoNfANoGDcfa3jDvNHapCA3GBq2fGmrqQoJi7HGMXPZ",
  "key33": "4NZ9pmjEfZJTpuory2znCSkFxeeb8qe8vmqubhWiX9NU264mgxjYyokGMrqLhwBFmwAA5JJN4BjjhP5PHswPsETr",
  "key34": "3oemNgMnGt6xfC1r8Ci4z1czg6phqAcu5aJQGKJS3wAmT2sp6jc7W9qduXBbuThQ6yUnqCnm5FxctXNaR1rLqyQC",
  "key35": "3ACNgAwPDaMpNdEGS9ucouehdSxTYZ4QDr5dMdB5K4YxXBr45v4tY2wVPufHe9sVzTAc1aMtDLDhAphqhqxWudst",
  "key36": "471EGucUwtW8qZG27RUZ3X2YiWbTUE69yKcxS99GLdGYC7b5btr32ZVDo6gbSzRQAkG7y92Fz6wHAtiGwNHTkSX2",
  "key37": "2VSuJfto87emqbDE6DAETMfQd1HF5z6S19D6bM7ZARSbfHMdWP3qjcYsDpRzqhRc4ZtL1aJ9Vw9r8v6XUsh92TMj",
  "key38": "3fSRmLKCxek4cLggZCEMomYohnpRzMzgxGchb2qfyhPi8ofH7DNjRVLfLrijqrGq8ooHk2sofThQtxfjD4qce1P3",
  "key39": "kG3fBWaNpomqZWF3JQxcaRozvXpteNLVqZmkRG1dUdMoGRmv8hnuVUdTLwkdELoRg8bcs4DyPxxw8kwh6V6C83J",
  "key40": "gVyn95ATRefZrStm2jZeW17SEGaZRuDGgTviaiuZnFHwDBiGiZK85Y6HLGFpfYbP81rwaxSxL34s2YqJwenaRmg",
  "key41": "47yvT6HdmTA2JjhRZVE9TezYTbPeGNdUY5cFpDKEee9W1CxTP7mVNFzprA25m1qLYHuWC3zo9EzdUJCTQDGp3rf5",
  "key42": "5EFsxfXirbnKaQR7yKmXRM37Ja89qrrsfaejxVcczp28nfHnqCN66ybWFKKE6AegmCG5L9GaGs47JjQxbtqnkjdw"
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
