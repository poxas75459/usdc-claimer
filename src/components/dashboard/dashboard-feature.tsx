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
    "2Yi3taSqZZ9AZvpPJbAFYZUxDE2Guesyg7VBdcZDoxoqCXbokPN31jgNvxaoqxLH5a58SgsBEBnLqXv8kcQwW1BR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mDr62DBYeWc2GZcH2r4MB9CW9L87qei97G9xe4mqyWfApcp436dMg8aqke1tD6a2UuVjMKP3m9yfWeUqKqn1Gqp",
  "key1": "3G51B2DkQA6FTTY4D89Q5rAKXcCyUh1txr2icKZgjyeYTSedHzgzwXQtqv6irXZWv5y7hW8psU43HDvKCy9ZzsPA",
  "key2": "U8s9sD15wCvKMTc9cosodDxB71RE4DGiTBJroUcWXXqeWRD1f7KxLjGEwXSAgJ3dBoX252KUDRSw1CMfcX2qCxQ",
  "key3": "3Zh8n2v1UnGuH35Z7fJnYQRfnD8eW7Sxtnb9fasjp8NLuKfBmD927Ke3WbwjnUueZdvAC5QugMQ1oVV5kcHqH1FK",
  "key4": "229JaQ9MkJFPwNy8tz9k41eWcAndrtCeUtXEeWuAGocf5iKckacrWawRNh8H2iCL82GndVULA3saYcaAFVmyfESV",
  "key5": "6XMwwbcjfmtgVKowV8JBWx1GJgEGVXHqAciNypBjU2h22yF5mPYh13FC5uGGfcV3uP5pCkYmiDXQZE3xRd2k4qw",
  "key6": "FP3XVidntS99KcdqZpVdPbMh6N9us82W5BsQSNgyWbbNDcyDvQnSwwFDybgeS6UhNM2ioZGvQRayWEUz9J23RLf",
  "key7": "4BVtrjFadJUDwByhduR3erkREXXfaeBArxt5651Sj65C8TNtPu1qeYqZDeavnXjErq2czkXzGkYQP9UxuGeqpctN",
  "key8": "5aA4a6RiGjS2fbEvyF1jWmj74Rh98q5gP4U92VjWPL4Js6quGiWykTkP8PDDg81t332gjPDTwmNY3n7XW6TByhwp",
  "key9": "433DtxxoJ1jNnNDdRowMGwiqX12CUMdBVeTsA1dzJ1H9ANh9U3CTX5Hxa8NWxB7xb92np4f8fraBM9N5gWPeYDmm",
  "key10": "b1HtrXJ1Kh2QaJoRgwKCPdyBukLg9664bTCmeCr7LdnBB6GQ7pAJYr74m1XBRaE6CkkaGBxfyEdQUWVhaNqhtxx",
  "key11": "4goxnXqoDXWXhbdEq3pwsRLT6pTM7Dhf9Wn7Ycn6ovFKMUzJZDUShH3QFM4fgw79czPYeyF4B5q1DQ8s668wcEoV",
  "key12": "3rApsDJwGGDEB1aM8MHQJhGPqerUSekUMhPCbzMLJf4JndQuGXAB56jSDhb4EGXqUPopH15qMjMgjLUvN2yAuB6s",
  "key13": "3uYJUnmTDrWHJ2ZSTJ11TLSXpG6H1e72jQ9FWZBoASkeFmqszmssX6BTYnRsUU2TQcTBTiCAWSw8ZXsqqVb6w6zn",
  "key14": "5uCSDjdSiGu27piL7yuxxBjRgeGPMq8Y1jeC7r3F5oTf4s8RzHDPrgP7HNc1GoZmK2tYifndBpvf53Z3bn2bbX9D",
  "key15": "EW2Zrz9f3g5Bck9J7j2CKNQBoynNtJmChnLYQ4d5mhGtHJQ7HKT22HA6UxG2W2usyK7qx5voYMhmUQJexxVqUVA",
  "key16": "44m2pSNKRKrsD4pft8E1MixsWvubYEZKEcRYGFhsBTxt5kjJXR67ohkjADCAHQb7uphicGmLV9ceHwR87ThEs3NF",
  "key17": "dGHDD3NoBK8hicLmNwU9v2fCk25rsKLeidLV7kcpLPACwDLGdyFMhXG8FgMS8EF9aeayEEVy41oXE3A3cFfiLdi",
  "key18": "3Cy4mDe6dCdACbWC5syvYdTW9812PkpnmqEiSmHuDJzVcu8beHMx466ZeZSGECNFDBRBfimufffqeJs5yvKc9e7f",
  "key19": "5qRH5WvJpWU2CefZdYvKbZVEe4GWdwJoZxit5HetYgptixRSQXVcygSCjPBg2UBz6JAH3eXsRGKUW3MaB5djbR4T",
  "key20": "3ecxMkLH2bmAxehwVHmrsXTbqr467t1HRDpjpfW1NysQWcHHCi6GD8ibkdCDJcTERUUGv2Ao8vWXC4BrF8uMiRBj",
  "key21": "63SRE4LRstdMd7QU4WrpiaLDwTZoQKsUqYRZ7uw17T7kaSKVmGDP5gKXShXejkMSMMWMxRRQx3kEmhrKkiJ158jG",
  "key22": "2Rr48WW69XBcAWid47yy7NSX4TnsNKGrELkUHYYfECQsnDhJX5NF4Zf2mArcYW7c7qgpdVYjANktuUHd22Qdwx1o",
  "key23": "2NfXKJJhnZmJHie5h7pR97WXP67zGq6R1oGNVA61HGUPzoHYwLBtWv2k5bAQs7Lyc15jmgbJ2cxtq3NLDJGxhcqs",
  "key24": "4BPcondfAXHSieqGqcDFEUSeqkwzkJuM9VabR2uLN29G9i92EZrEt2xzrGjXmdD1R5iLXjysCPk279JJNQPcyg2D",
  "key25": "4L8mSpbFVLqkMJAYG7DGzY1fGsoHKBnF2xfXbDXLrFaGYUSsT9j7fKr1QmNKjMwHsVsvPE5YQqYbXUoyUoj7iuRZ",
  "key26": "3HuWkHvHCPDArm5zLCNGnHb9DLkhUdd4z1qyoQ3s1SXM2k2YuefDD5uBFS1yZQ6ZDyqQcq5v66uNCj6NkYwjgmhW",
  "key27": "5b2YNyBoGqgwrVho3XrjpXnpxAsdSSPqSFeZehwC2zr888VenbWzDCBRGRbDH9DRnuLHn7PTx1GfPqVmQydLYSiE",
  "key28": "47XBQm7VV35Yb3omr3vtr7ejBpi3xtfAJ5YLaptnCee55MpdwY4y2UgwwsCeXPdR71dGUwytePBbXkw3ETiTgiSu",
  "key29": "4B4Yomtb95fqjTFy6FKXvb83sUf33NMQcpy3TsKaArr3YGKUCoLMmNzRv8erjw4Jeu66K5xwqntHN1rzgoip5mns",
  "key30": "4HtJdCSN4oNqB2gsy1srZ7Rw2ansodjyoUdhGorpYFrzqaVhnr2w8ZVNu7bWT56RHU7pUEj9EfJQuFW5pmy4MGFT",
  "key31": "45ehWH4qs3eLoK6L7JxjkfUKukr3iSoweizyKDsMuG4Fbb4p1Mb7dKxw63URdAHQhXfgBnjUsUijzRpHzfQ83AJu",
  "key32": "3LVnFGFuUdLNwDWWnxsobAEdFKdpapCZJ4FVu9XWsYyQ59szt3S2CjkB1bHH9jJWMEy9CAMzbd7r9nofEZj6SJu1",
  "key33": "4tFYsmwPRUZ3n6hFHwwxVzFfgcxm4dPRUjvCpetAojuWEAwx8TWfR7UENyEBW2zNfDL1aPNzftAdHvsdAvJP3qFt",
  "key34": "48RaattB1ChA13xSz8zHJni4uqMCufHGbSqyG4W8dMx5Ft8HWe6XAmVcg6iBXUXmeVeqMZZsf5rYPqacH29FBqAL",
  "key35": "y169ReZBa4AXarL61gj8PNuSFEFU9rSvs7w61vqTFmBtramg8ZuCJ3Y3sBZ5iUxLF7UxnupFCJBYVfLipVETG8z",
  "key36": "53RxH28EbVaLq2n6fVGndAkZnFWoPQU8Vguok6DyDX4ohLXebrjnqBdgegFe2dvs5QTELm4rpvDvTMeMRXNeLWt4",
  "key37": "fqRrSJymmsGDgjzBahtCVotqijgmW2k5dhotQ3vqb6hGRuxuZZHjEtTFhpPpXTuFU1D8LL81cDbVfCwTkGpfDzP",
  "key38": "5rh4MrGj7Sst99Uvvv2ir6S1Lzdmdb9i1atrk9QsMvuwSntSF22ygbg6r2xWn9QFCD8puTx8mm4wPFqb6VFispPt",
  "key39": "4UPLrHj8QnYBYQkYgJroKvKEFEeDAtruQZK5v5K9j5f86LKo2KnG2YLg7g4sTk7cpjUbqxMzxhHxdZE5BC2Eh3Ho",
  "key40": "5LbNCHfz4R8tKp9tvaFxzFjodjxVUNqoWd65TAhonV4xr6BgqUMETqyPNdxbXqd546z8EiBfh2p3WyHBDCJcijU",
  "key41": "5xS55bCHhXGM5PYMoVCQPRxhgBT5ocz8yGRjhGowCufmmfzoD8DNk3xJ7LwPLPci678LfRkBkqdBywomUgoqxicc",
  "key42": "5YMhy2moh8aRUxU1sRA6ti3Nu6jmXowkejrd9b8kiNesgvEYH9BXuPumm83q3QWChAXPtbD4cPHYqxL1akQEgNCQ",
  "key43": "pv1xp1LDeQ5icLp2ZQavdYJLHrsVmM1mYT6seNtpxm89rh6qqRjs3fGGQoTWkAXE5ifxnFyduqrNEX3ms8nkN2X",
  "key44": "CbpPS5LSAc1Xw4Vu4gmF9CBXkfWWqVwVEsznyNbUr7iAihyzpbwTrkhRm1KMkNBmcveQdTjFjrrrYS3rbumdzQ6",
  "key45": "HAni3kDQhk2wyRj8Pfk9hMiPBGwvHMzdAxQ8feLpk2Kg7RT6yGQEk3nrFLHahdTMJy9xzhtgnR35gvepGVmW93d",
  "key46": "5AgotFo538oR2k68jzGVG4qdJzBKtFKy5zPAu7K8jwuW5a5i7uopNxCtNgxmhSxD4mKoFpTrDFWw2kiGYApx55vc",
  "key47": "3ZbEM8odugZ3bLjJ1nGzrLkiyBYJKAM7tzRMJHixQYsbmFBajEXPaTQV3Uw5zM76yp7hi9HmDWv4jWhNK7xADrfT",
  "key48": "JrfYjRPtq1wksJHWZvE4SbcN9L9BdNkY3JAyhqiSX4W73p67kekNjaDesgwTCEh1x8eWNh8CkQzT2dyYPwMjBYX",
  "key49": "2KDyYpHx4sFvqEBhfhN5H2rt3EZGgzbghjuAMbN2j6Bq5mGu3XeJtsKmi5cgd2Tx7FFriM4KLH7KfvVnB4v2xEG1"
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
