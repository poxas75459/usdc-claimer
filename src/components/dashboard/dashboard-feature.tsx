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
    "66iLEncjjv7g6aBaB5fCwsmhN5K1H58HGjG4KochqodcLAC9b9AEF8BtMtB5XTvjpJ3JHEM5AaRo8Y88Sa6ttxcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2viEnvBXabmzAGkFuWvhCcrZvije6bkzc6CJQ9mTXabeFeroSsqBQatVQ5zyDBqkyCibqR4hzPURvacz5en88Fpk",
  "key1": "vTLasY2R3ZHVAMdrDHV97TKy4v2mANbwTVDZBV9R6crXBzDnF5ZMmUYmY2hkX4n4rdpdV17qreBJGzEg8AXHnUK",
  "key2": "2cJSCp739c5oDtRQAnko9QfqqmsN6ubX68MNtLr5Uqcp1DjeXrZcCxiyyahvNhtRyM98GFqbhNpHuLNCPeyVm6vR",
  "key3": "2EV8b9XciiTrf1MtXYXeRA2wzKZTzUd9r3kAhwdYAKZsdS9tfs6yk3yJunw8Xvjy9mfb2hc9rCDchGFG4vpkuat8",
  "key4": "3viqR9WX4wSeGEb8fRecVdQiw8LDiieXooSV1YtAjrkd5BnytuzrtmYmYd81v1jUjR9AAwsvJhPrsHtNgVXSHbDK",
  "key5": "GE3WPtQcx3KzyS1wksQ6wXkB4PH4XTobYqDcjJFu9vwSqz8XQACJuYXNbE7LEZn8P8aFTt9qmRHzXfNxWjAipgv",
  "key6": "2PPqgViKX1SfAxdbtSFVccAadhDYsXiJAkVa4uDdcd1PiiQDa3i7vrxwUauodTpp9uJETVH6C1CZ1zNWwt1Xrqpw",
  "key7": "66XjQvh4jqm3uDtfEtwzbk5PLHug65tVn9n4ExkFNPBBfqs4RiZaaDSWq3WNZjajTyt9CUVSpmDE9jnJFPw17WCK",
  "key8": "65k2F3vv2hXaeh1y6Ppb1aWwctboeZz64EhkbayLNrVfpY69GPnyzT5ZNbwvgvTGmiPQqCarPxuiQJ9mDSGHVbF2",
  "key9": "pK3tFybZtjjRjJNkZjeWV7pHnsetn5KwJTbcnAWWV3JPyhYdBe5esVRzKbPDGETfhJwehSvpxf5ztR4kZBeU8Yz",
  "key10": "5hStyEWG7Pf552zCBBU6iAZyq7qp6iPvU5Hx82HgW6VNB63NixSk3xLaeSMVWA8AZ5QVdHn216ueK6DjbmvJkMAc",
  "key11": "ox4hswKgNsE3qtx6pcpdqmS1N75CGivm38JKzXzSt3BaBjSdJApXvNSP4AxLLV5SvVmTcycPtqC7JWUBxkFQMZ8",
  "key12": "46fKpsSzPnhppYLkh1A4AtddGh6bDkKKoVeBCA6etiaaT6cvA7JQgdeARVU1xnU4q11z4u1wkenXgbFb3Q1TnVNe",
  "key13": "3JH6F6L11N1R9rjwahYz9aUy9HeDcF71PiztEciVwRx1AXz56FruqNPeavdLhzyJfKfyf2QBWiLRHt2ka9X2Z7md",
  "key14": "2k7JKt1DvRWGvwYAvvNCVNeZbAD3QUUR56CjUjdY7vJiRDRG7ktpdqyoS2s2Eg19dRRBYzq3CGhVrLs7afKe8GKi",
  "key15": "5SEmzLv5xMvCaYzTNNQuphkcuTbnJWJaQtW72TPcqoZUQdPJNhPFb7d5PNvVzVtnQj7XJRjJvJpxPsDptJ9BS9Um",
  "key16": "3qxL2FMx4RFF2NvXf7tz3BCX7mReKSkaEcFXxk61jHWvcDKrvznSdZTbWPzhg3UrVkYUn1HAA8ZswEhBgDgb1Zbg",
  "key17": "2wyGG7S1Q75parYQJPoj4a4Q89vZoZS2SSBMRc9PXFAgRDnAGCc5MZhPHwW61KX6b45FUTwRfQmvh99QjB4aqDa9",
  "key18": "5Qytt9L1zhdTNSEXNhQ1pP56YdxW8v7tM6YyncyPUBZ9RZK3bgg1pRSeP4opLQC6WzDMzhdcaB5Ez1swQ3sv74Mb",
  "key19": "5FVp2KFJxqg2PmQBiQoTKxZexCRnTAz2Djpm4A16YjjfN1Zgz22Zcuiuc6U239Wr2WukxUr3yHVwFSeKTnrkSsCE",
  "key20": "jRL6qAbdh8nCS98djUT5xpead67wHi2BizLRJqP6y2vbVrTuTPskh278sFX6Req1B61dYykmk6hwL2pxcjFB9DQ",
  "key21": "57tmBYvrCiKvD2yPpmPT3LKSG4RS945bdNeLXK5ZHVZzAQCmheKrFNf9GERwdFjMkhNkAxg6zJ3R8TDejCeuPcgm",
  "key22": "7ePaJN5iFg4hNZBt5ZrBj6bCs4abDTj7yRQMiEYA7VBvv496Gd6ksdVALsDJwZnYSjSUZw2i2b7dC4Zdoie4NLy",
  "key23": "4iG7chhwZAWymU5fUyb8JsHLEmFa9WQFRiV7PCyJybrDhMnVtxUno5Cs5dBP439MCbZG81QKuCnYiJChKWzdPzJN",
  "key24": "4PBXePEp7H9xn2FbzKqsaumhinJ3AicA7ZwshzzJ4AJ6ufcjHvhXMaf1pdJ6CDBf37KHecfUjjtxtWvUJo8hTerp",
  "key25": "2kkudbLkshdzs5tr9Pd5pufM8oTeQnUetd9cxKcHHWfQj8FrJsdKKAsxtcrxYYP16YPLzYDAz9kf3xUdmAkRFXPG",
  "key26": "2SKMQNjfPNDjSfcVGQLFWRjV95WPoDqgnQzcxfA4YQzTfv9YhvMhHtjdYt4gXvszahNadGcaW1iYdSitcYheyb4s",
  "key27": "38x7giqmr2Hqxgmq3t2uEmumtT4NrNRhkgwaiRwjpasrXTDVbPfeprqskCKmfZ6d72ApjZDTqosKmBmVktAY8Pk6",
  "key28": "4VgoqfMKbdTYihxC2hmz5eN3MtYjKQLUi8jwbpHeupuGmd84kSfzbj7RFgsVC8MyaRNLnKqYpkUen3nRA1UkEURZ",
  "key29": "2oFqbCQNqwvWbFSikGv7PiG9y9Ja2aqRLqfuMh1bB5ZYictNS3Cp3NCnEVhbp1Fv1xSL2n6y85vsyAaz97GvRqir",
  "key30": "4b5vdmLHunLUcgt4HJzTTF6Q2iA2cgRXDrrHRyYTRPcuxvKwKZwRJQuerbFbxmpxhMfjuwuBdboDHLHVy3X6TB6s",
  "key31": "45fvYKH2UL4qmgFz38KJAnKeY3EUYtRwnJPLYbN1o6fRho7d7U3z1Wxq4f25JR2HTE9emUY3nr4seBuQ6nCfT5Tn",
  "key32": "51nYaHchxF2d9vyfsAxVyCBLQoe9zVLhjGpiL9LybiGcCXk6p289SCcPFM66tcHYg4a65egcpjWDVbaj83KwARbh",
  "key33": "13EN8WL1nYikgDc97iY2c9u6Wco1s1KmaMr9oPgKrzSyYpi7qAKwN1Cu831VcahtwLjnmpAVe2X6CB3h4B7a5wG",
  "key34": "4xmwNEKzrXf2pBLkg1V1jmfKNJtz6oCxgRPGh9r1VcP92GJZ3cF2Gfx6XFFhQscqg6LtRwhL2xG2DXegtntuMVe3",
  "key35": "5VTdnYwMRa6UaqXhtsQ2ZfmfzR6gWARHxqZVYytUWrYhsbX7AeMsFC31Q9C8qHYFEPz24daTxM7mwyzM2GusWCFi",
  "key36": "4quiws7Nr2m1T58aCxKNqCKG8LgrJGxmiyGpma8w4YY561s5wvsaSYCnqafH4R1fiDRmoGzuo8s64dSf6fyUo1Tv",
  "key37": "47LK5xt1i6hc5TwyNAvyP9stG9haz1ZnDdcpewFtKwMN4kDAmGfwfRGB4EcaFZB6Breeq39vBUUx26hXxd1EzZHe",
  "key38": "3M9QarEcXQ9RRDCViRCKRCxFm7jjZ751WucrcMjHc8CtqcUvMCTXqsJurHfhSuSwenugAF2rtHmq68cCjJpxCCcJ",
  "key39": "339ygetRvb6JTQegRwJtjW8o6WsGb5et64GFyWKjsaAjNfqECkaor8643jF9FpcGGMcYAdwbXjUixk2xLRxVocfz",
  "key40": "5KJzs84EoDZ5LUdUGtp8MKrMLwgRJFd8eDEBgtbwf6Ug3MgNkAnnDCncmYQCVhnvX9qVRCKDCqFvC7m9fZkQ34X2",
  "key41": "2czpEvEigGQC9CEbKGBPzUQ6hTTJuPPC2GFpbVo6cZcQqASTiTQmj4BU5b6uaLuNHRJRVMmxYmVjmLUsoPYc3ZVG",
  "key42": "44AgLpUY6KZpHWo8hud6wD6BNvM79LooS66Sn75cAhFf44c9qpxvbWsvuhJ5Ga14LX724Fc4AMiXUWrFgyFM6p9B",
  "key43": "43WcAqRWEFAaD4wtLcMgoonddwnHMKya8b2rZBz4f8DuXNh7QXE3VWoU8rtrsqvCdgTnJ6PskHBUoBog3M54LCpL",
  "key44": "3T2cbxaYktBeobi8ZZ9rhc6Xoeywi3yD4KuvRuPKb96gaQ4fcdokCnfEdnaxm7TdhMABsPL7piMnE4QFqV7Bpa4N"
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
