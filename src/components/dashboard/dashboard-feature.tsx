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
    "4PYKDtH9sr1Q5yb1xA1G2jLehu5MduSciME2GE5qsrvFgntAMSujWpnNpy7TVbozqE6y8w3u99MiLTjY4wUDABx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CzfxNriuHqiE53SBKd1U6S3JMLwavooPgZeayJmLR2avKLXSTc7wgqmkDLQKk9vDMZXgSpuNz7fmpf6DJDSFMVD",
  "key1": "2rKUckPGoEFf1VzoGm9MfXDhG9L6F4tJKpsxtfvpGHT1cRmZZumKdMMkE8uxzw5prbCVZKDmNkbE2m8m6CSSZ7t7",
  "key2": "2qnnPts2kVv9ujnU5QiXosiUFog7DcG2f6RLKwkBGeakpXLgFLHeEc4RRV4y3QBNxRHqQ5fxWmJjFirtS4JSxhaz",
  "key3": "63wWsV6Z1rK15Lcw26QFAxjkjG7zqw81TmLed7dJZzwK5AWkpNTuKP2XinBBuRvBcNsC5tGnkqob6wFYYz7xHPxD",
  "key4": "aLmwGcoipF5Ah1aEYgTDGk3vqEJu6kStBDEVhXS5d6Vbp5s38yiZDiNgfQazhpfKzBCjvdpBxDFnFnz1FkMTTaj",
  "key5": "4GHGJf5mokNK43G511Rv1PHZ3qfB9sxsv3qkxgrh8miXJaatwgLMK6Rse4J2WYByVZuyw3FY3NFCVQJERcvDfRoo",
  "key6": "pguj7767BiUMK6ikutdbMFSwzg2xS5WWVvUCupTMTrD3dVgHnyLJry1vZufvFcXmBATT4HQcFHXcCC5yXuhpAbF",
  "key7": "48BbGdbb7qbJtzSK83EdHDEe6RpDGnX53jXCvrBy18bGCHxdqKHfgcYmmaTEf3mEkerq2mc75585mWrQ2NgnXhh5",
  "key8": "ywuYnTHKfEDyY6ANnmUbKZ6CDEA8PZj7kZw3cikKHPhUY7XXY446DYx4QTBD8Ny1JWstbBT22PT1EfoDS1V2hBs",
  "key9": "3Y1HCwGswojeELiN7PpbKaqgyoNE1Bnpcx6Bk4AUrTDoqcmn7T4H7rnGQt41UyLxXXcopwYy1hFFgTdSaYvK8mgs",
  "key10": "38S1ZTSBmH1KmmJ4acF5M5NrgZB54KYZHsu2Edh3hBkAQaN8aq4EWNBrmqnh7TPZvUPMNfdePeEmvFtEEEdNqvDL",
  "key11": "hTQPr5EUdZrWcxvPN9PNDizwqjxSpQBE66NDFaR3Mh1ofjNrAXmXJqfPW1ognCtFxsNipWJwLmaz5hwyYBUiM6N",
  "key12": "diJSq82hUoVTvwhARJKyb55ppLgzxePDpUbcHYF2DBZPzdTvGDCDNw36FowdEwHbhrnQTTEyGiVXAaumYqyudMZ",
  "key13": "4j4rRgBU2HpZTtXhkEeR9wPAd3VzENuwX1VkaFU5wWZ2NGx3kjy78rKihpWby6SFpL2cvKFNDRnx7ze7bHu5yFhu",
  "key14": "4tQ3dYDpx61NvLsFwCXzmvidaR7BxjFNkKvtk6tnefwYpnJF8QmwAKfb9rxdqKtoC2xyUreqaSu4TdRxoCRHj4Cg",
  "key15": "4dHPAcSfVKmQbr5kt9QdNxynC5nmDSMt5vgc7WaXnFZjQoAYEXWqhMSjdYfmyHNUTM8uPCPDnz2SFLsm6SphfJN4",
  "key16": "3Dz8K5jDaXTVi2HkSYPsKjHFa5DxGUB7TRRazW5187q6LaojTtcpMATDUcC7eTfdhA4ffzpZYWwzzoXMH6vrebqM",
  "key17": "4nAahP7MYLN6Ax3qp7yxoB5eviM3NXVsn7rzxLdtPEL995Yd1e4NYjww4yZkujhZqyb91Rcqw3ejGpk2D2d6rsBZ",
  "key18": "3bZinLTfMzwPmdjdB3cbwWnR5BrXgD6S9jw7rz5VETrTAxqNsqQqPiCDEibueETbNFzL3beTkxZ48ePfFeNYZrGw",
  "key19": "2SUZgCxHoUtnVazo51ZKhfdktR6hEBgwgr1MhUQyL5z5JR8eeuVS37zCgAqiE1LjkNeiE8aq3HLoJbwo7V3dr3JX",
  "key20": "4hK9z248KeXTdUVg4ntoPkVHrQJQEMsAaMHZyAKWD1BfoJDAgHaeZyPnERej5C4F4YNF88x2Fk76isCFNPwXoPtW",
  "key21": "5tFyhu4PWjMfy6gTBgnNuNY4bFVjGTeYCLqhHegQ5sMU9m2XjnhyCCieoxiA1uWPnDnVdoQXK64bzpBCmbbaXyk9",
  "key22": "2kL2ft79u8dvt4vMJoHYhu9wU897aTJtaAxcxtA54VTcDEYfwAkwkJDzb1Wg1Co8GDdccpE7goHH1Y1kqpvMw8sr",
  "key23": "65B2ctmUVHEovTgwxXpZt2gdXDkPM7qYMsRpJWuYY3zp2pX6LVX58LVCzJSAxotyKCcntfbajPNN6gwn41KpJ94K",
  "key24": "28Db2f8akU3G24WHezs9E1HUVK9TqSWquQGKNYmbA5yCYpKsqj3kepX9SRgdifSqGWLBzsywSicS1hg4V9z464kh",
  "key25": "5EVFuWeHWU2Jyx9jSWMY1ZZvZ5fuTrBeW4BS8zoNwwQ42mRx86z3Z2k7EdJgYJir81qG7tQdAYRCJbPRPdaQLF3b",
  "key26": "towBuoenfHHGYoB4rFCS2XQfwkTZH8Szcnpg5AwDz5wru8H6rUMxeZ41hZ2ZCHxk5ZoVELHQzTcPPfu5vgSSuGK",
  "key27": "3itm5NUKho6irwa98VaB72vhEsHznAuy1jaoFZbL1tepmhkTePEtEGVVmZSZAZagg3ojpYSSept5Q6sEWLyavEmw",
  "key28": "4QZQuVfKpKbRLh2oFyQ5tgUta1YK1X3oewS7ejGcXLxUztShUPBD9tXoEMV6tWxNJkNzGMYnErwa6k32b4dJAMcy",
  "key29": "4Kmg1GC27vuHFKNEXSdzK2vFnyxL6mmGHKxpkSjcu7rQGzMokG1sEwc3ABBAWNnP8oy1vWiaN3LhZja7szBbtDhY",
  "key30": "4yXaLyKqstf8DohRVGxbR8eWoAHmsKRnh5GhFRRLGAEqGPrydiJpiNegcJcfgC82V6apNBz29GYcoAFmXc56cP6k",
  "key31": "3Cj5WyoFwAyGP3HjFpCSGznZRyjMDUKxBPb7QCw7ygjdUkwpDB5Qa3HsmVPX2ZP9tT1ouPcDqm5patbv87aioXnY",
  "key32": "3sryjE5vd7ef5MfkcSh94YUrDg7F4sGZCEb39FACJDUVeB3KHVTRyoUDjS5JCSdjsk1t2A8x5qG3x3QSZeFXYAsR",
  "key33": "4ByApYq9jQG4ZLJMmrgWdLSHcpY2r3Er22kkguFo6vyV3gFwGeurAVZArHsvasFsGvsfd6fq8eZHje8A8FqdSm5X",
  "key34": "CxhBgR5nUuPpjunuB8qmrbKod2b46NGnSfCS86qEpDkULQ8J3pAEbxyjwruUcgQRRWvhaWout1wjhXrjhWNaTWa",
  "key35": "4SrGvPVrvfwXKmqjsXn12v8Hky9s29wJGR8pVazV4iyarV5Ew9z5WiVREEKGwZmQg67m42hMLcD3rAweaMheGAe4",
  "key36": "65CPzokBuDuHRZZTrhn3apJUi1i1JHGsfKUxYe9kbn8iKcHvG8gmB9FLTWpJx13MYrtc3HMAobBdckWZs1pcjezN",
  "key37": "M1WrsvdBNRhbT39kRWgWy5xCDs21gmDcG182tJVhfYKvv3anp3dpKqEJ1BXEFazpP3iNktHAYg91SuBGEanjdWj",
  "key38": "4yE8WoyEnW7qdVy9PgZzTfsg3gR86TPU2fAp87FADD59kMDM73Mo6QAxgWggPdUAjFtiRL5FoXE2G5GfVsvxMn1U",
  "key39": "w3xmEkFTwdpBAU7bshVzrVZzwvPMa9a3YVs2nU7MXHWKPqkuy5YTd1a4cAWS2df3865cVzJNK94e127L9Smsfjk",
  "key40": "3gafThYgnVAsTios661uj2tiLRj371qhCjrpExYdfcAgi2bxRvvj3ZLRZP9SNbGkWHRY7k2Tan8FVdzWbhnvuY36",
  "key41": "4vmmuC35wuHvQtUCZtXvCUzQ4oEvwU4c4hTh9FsG1aADP2MZ1hXWc3Pz3RjDvm2owkqHnrMcTrzv8KheZ7dHAxxN",
  "key42": "4VDcyK8wweQ8CEvBj7MG4B7qTnHXf7GwSDcUSiznZoa55QmPsnTB5ALfPV8pEbZqhD1joG3jjYMHcGrLzQ2yBmeD",
  "key43": "4gc7m2d6gFFW4uWT982B3Re2B8WVQ1DZK2EC29dcS4u8ankKv8XwVZfdAerJfjEjw41nZyfXqb5cdu6B65WvRqch",
  "key44": "K5JKK2AJpBnNLAiJM1KekhzG2jFjVzmZNy7XpJsrAretN9qgEWHn1ttirQoGK2e2nPmfWgebiup7WwSE2b3SjA4",
  "key45": "3aExmvin127YiMnKYx7bPLJ2ZQtFB89ouXB9FSdCU3PxA7vECvuQE4587JiCMYyiD47GmrYvM2L3gKLedjNdMtEm",
  "key46": "3Vy9B9mr6XqLdaYE7Y4cziAHbHsT3ZBdzwyNctQrrBYScPb8GbsX4997G4caNXpNsz9p9JgpnkWkbhEdCAHUyxG4",
  "key47": "26X5mK22kvrfD8tnTvNwktQvfw4zvLW4gQQpwdYX2uPXzhZXCVX97FvZJQkYnA6opcpvnxzKr75BNsg2xYWhHZqF",
  "key48": "3nqeaSxoTbuNFEyg8kiNvjp5zcPD5SJjq1fHtt3PtWDVAbXfZX3pmoKUEEyEDChcBP9fckfkebJcE5jGjx9DaCLh"
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
