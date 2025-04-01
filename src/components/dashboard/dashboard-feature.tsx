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
    "YMsMG6nfFRBdKNsZVQwvqkWrzXFWartp1b4WuFiDhDcmZVFafxzkechCuu3WoxmQ7DnT8DQPkKyT8AjcCyYoj3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TzkV8UiWpFdVi7C1ozW9zkKQh1QHtxcimNrJCTTC8MQkmt2rjXZHhBsJ43Encwxgk5pRfeF6CVCQ3nHA7HBAuD7",
  "key1": "52wLb2nqknwhfjiWHjeihXbYNhrngRqjETrd8QP51RQ5Vh7dGyWF8rbu6Eqhm6KXDeHammYJ7XJbsFwA55asPJzh",
  "key2": "fycFhyiHpGr5NDr6stCnMsYFefYH4DJMtYKexEguzBC54kjoaUHvGz2t3gX7vejpcybRbRo1Ft5eK99EACjZFdM",
  "key3": "5qe63GnkhmPnMUb7fHBNUvGrMDeTjCNWbBcjQnT33fwaQt64LHpCaduJ69MhLvZChDiSgRoPHHfbRnZetvcd45mW",
  "key4": "5Rj7hXbK84cU1EN86nSSmi1yJgKnnxbZCkhSFHmkc924jF3ZZyv1wT8QiTJchKDh316wERuMdoJesUEyE4f3hyTd",
  "key5": "51nc2pubssgzhAt6whtpxGNefWu7T8ScntZw9CCLkokhz7UGvVq6A52b18uCsECoeUt451CnCwFTrVNZaT9AXLgn",
  "key6": "4uKvXKdGfxN2XmW7ERRH5MS43ui7fd36QzAwaC3Pvs8nxgvTjhnSUjEVhXgL9B5hBAt7kKLRwDCHkiZfQGB13mRx",
  "key7": "2mFUPQ7RCMcsE2Vv7sRxprHE64A7WsNrpbNxUYr6Rd1U2jMf225qteQ5hFG6cAM1WPpNQY6Zib5VfBR4NdqeqGSx",
  "key8": "5aPuDvWN8zFNhkxV7vYs74Y139RpqXcXdUhu9MuswpB5tgZx8PrCD9AyNp8TCwnFNoBLPGTfnYpnfAKwBhKaGqmM",
  "key9": "2hqenLfRMyxXM5gi8TAsQUbHx6ciHWLExzUiwSLhHJ72FmBh8LGDS4YRjGWXjj9bsRq2Wz4mV7Bin7zwQHiFiywQ",
  "key10": "3jd1YKRHXg7zzhV3rW6v96nMWuURLj8eBZHZ8ex1Xc7hh2D2L3dg8KFCVHps1EZyTj55C5i63TU2kQtVRKW8Vi3F",
  "key11": "2VTHBkjria6Go6ckiNusCHNzy3TUuC6wVPxU2ob9nxRdoSxWC6HRzQYRviCqi1YCvW4yK5gDS6Ymf7YLJiaxdLYZ",
  "key12": "3opeXezTQkqsaMtT2nuwiRCKP3vbunA7sqFC8XtitNZUa6aMN9orpruCQpyYz2nXaFiBGdpuXjrh3qW1D1Me1uMY",
  "key13": "583KAeDqU5XAyniz7mTJPovoysyKdUWMz2d7osd3URojg9u23SjdsGYejEZTwkaBy6AWvZAAoNUomtBt2tUS7r81",
  "key14": "25ZDTpiMHCjbPZZkxFDNFjLZAMqDuk7NdDRzWMLKKvjiNNqrwTXiswAqShri1k5Y2Jo5W5GuaweTRuVubx61eUax",
  "key15": "26CwfXjCTYV9FGQNYg2q6jjqKLKwy5pGWeoaJdMtLG4BbFt7hmQx9RAZE524a1ptYYrRvgn3CJaY3vNgQjBFWKYi",
  "key16": "2oXYt6AY5de4xP8bxkGFcjLrbmRM3kQifLZKH5yvdVoXFQCMex5TvZLt8sc8XDxDzwXhDSZAVntXR5iTzxvLqoCk",
  "key17": "3axrNBESghyXGUEcQ3z1GzyRWWDBEQb9J2FGNfcz9TnFfGioiPwbr3KgkYc91iRDyUVu9EBVm6cNr6MvvHM3UdXb",
  "key18": "55bs5EFASXqVt6gUt7VX4bjraAaYj4Vd84rntkwP6TwteLDsP6GUSYHDFhAZaScPJcAse3Ut2GPSZ16MAr1WbcZ7",
  "key19": "jtr5garhEuwKGd6d9LADeBqdG5FmegDaLWaWwj3sxnLZ11KW43om9CQF7rMxuxCEyzFPDb9u8UA3wPRYnaEKcwW",
  "key20": "5guE5G4H1hNs8VTTzhGydv9vZvNsWXoXHazWQc5Vshc9YbtAqU8mE8vahmzZePJsfs3mZs3QL6jzeBHHAKw4wqtv",
  "key21": "4J2AAuuQEYsRt7dY1VwFtCbBaSLG3W11d6hxzXpTz3MkfQg6QwHguz1GnFmMv4qWfboU4BFdjikiNYhwSo5kztpE",
  "key22": "SAmZRyiNtW5p8sT1wABXwkzeJvD7BmcEKq9Cf3enPUVT7fGZewv59r1FXdEEgpmGcYjdvABYg9DVKjxnMeZ3goD",
  "key23": "56FFySezbWLHjteorY2b3Ft5VRFRPvScVE38kwwqcuM5wPA88Xmg1du5xoJR7qrsvR2jMpcBDh3NCMPTKz8E5XVj",
  "key24": "5ytbxPyrzcwyp7KP1yXWS6jv4dPHsEy41hyTjjuNDF9wRJBx6K7M2AAUVGmq6UADWRyMjA5AAHvDL6GZUnr6LaYQ",
  "key25": "4Yfo9xeqYECcKZ3qTF9DnMFXLxYcB6u4Fz7FGMxnazFEeUDzdm1VP7EpZ8E6vcN1LdRxWyD5SvukFqXnTvfTn6Jk",
  "key26": "357wN4fj3iPN8FzNugvjC5y1N4xPcFYhDw5vTbxUqJJLgTh4ZoGfFsu1tGanbecXiVHtVPU2ddNgQD9NTWrM4mro",
  "key27": "3PARrhQUG7JbAgkpK1BAx9TLQeZrAUAkoqCzZzx9sq7J2gxwJxf7ZMXJHeeab3MjGkWbbFukMoH4Xuhh98Lmxxhz",
  "key28": "dzX4j763a1B29dByJFRvXDwySfx6KT46ss2TtxRr1RgjDDjfK3JsRyFQnqjYU1f2EAK9pSPe1C9raD2jjEhKeKE",
  "key29": "5wKJSwxBr5Ntd4aCaycoFRHQfeBfMkw76XRizr7pJa1YToKHW5TZNokjDtFUkYNHLbZU95E4RhiSDXfjGKax778z",
  "key30": "4Y6RNCxcNyZshSevSdFCC2A7jJhN35F6oQkpDHSTa8enSa9DYVigZztf95MzmGWfHBjX2832Kxm6WG5TdvH7quch",
  "key31": "3kbyXpPVvpGxMoqVoi1SgTAVVPgqmaShiCskWNdgJDLUWXxnbiTtL9Rsohn6CVHJjeFxn2vn8GUKgxCfzmx13DJ6",
  "key32": "5Hz8EEgahRxKgY4YDMeYG4zrg84GQJDqpBCCb1WPSju41uK4dBdhmL4YT8if5HN1eUAstoBYbDcXrp9XVqr72HP9",
  "key33": "zdR79d2GpLW5n7J1iH9NXiWArrjhzEBMfrcGUuQVyEzLxeHbVJLedkkGKPqZukUqmaM5NysQNjs4LCg3MBe6XJF",
  "key34": "5JBtSbYNg65WxUPzJVJsfVJqaQeG7pv4uLuRTCSZnJMvvSRHFQEtLXYeRZfEue6ne34p8asBWQrr6ZDZjUq1QGaL",
  "key35": "2BoGUYXQcg61pkJi59yDGvsho7kJrP42z4nZyAN7zVWHTLQcqsvVpBnqY2ym5woGYBqf5AWGCim5LnPJpm9RJzMd",
  "key36": "3rmPDp8BzVoNu7PyCHCLBAmNPHKCepyH83TmGWwU9ptioC4NH7KAceFt9ngzrd5bvaohKT5qeD4gsa9nyPaBMugQ",
  "key37": "3sFDZXov7EuP4yFvLmo4F3V2EDKsznMfjxX1GrQBN2DqBGxZryBNkeRoBrVj264B8xrezVnj81QCUK2jmbMVjgZ8",
  "key38": "2b2ZBzppE47qGJ7jk9HS9kFqY7Pzj8KDD8TEiMYVgev4BdQTP1CnPQwwGyi9Mo4WdHddpJcFpeMmAGLjQ7iWzSgC"
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
