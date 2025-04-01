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
    "DySYJCZB83kncmDrgMMENfJdoARfg3mEd3v5Q4k5pqfPiiBnHwyJQS39KQ1btG1Xm3B31pFoRKmcSigwZn11Bok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WhYLM8tp2WWRNCyiyKGE5E1nmvyEZM28d3YQKzv4WkhT3nt5YazYXFxtbkfGsBfX3NPoHB4dLLpNvaMTkWvy2zg",
  "key1": "NFBfxMAw4Srgi22YVyqxvBYffGr2Dt1j5mSM16wZvD1crU8cQf52dAnZsLixrTjrk1UydM9skfaL4R3GLpKsfTe",
  "key2": "2TSKqNmF68VBumpr3vZRnvpTWmPxRH25vJb2yrFjf12sUPLL5gYT6jw8VSssviJ1JQRJe7jFnePXrwVY7bJDBdts",
  "key3": "6256wYtRs9kcUpf7sCrri7knAN5rKsijZUatdgd6wbVN9eTD1Nu7RB2AsyLfkzDrf9XgC5E6j35xYXfX2vaMYDso",
  "key4": "3khQ1xUo7rQAffBbLxFG4AyLNnvZ8GqF9eEoLaZxBwtfSCzUpn7nXNXFqfWmQQEBPuRuXKKAVHsqB4wfTYfAhzjx",
  "key5": "47NScnxrrhETqAN24xKc9jRSyEg7dxPFRQc9eFwYGgYoermDcz1EmAjezomQkd83EDQaqTspjdteuwk84fPMbMAH",
  "key6": "26CwDqJ6U3nydLKiTs2rEMMBu5kqhPbtM7SVsJuBfaYeGC4un43TRjTaiNUPG4xnsFu8uega22uDtGiv7cGLepNr",
  "key7": "2BHgvruhVmdchoNPEM2Tu2an5VFgWLexEgB4PWjSzs5S3EmQudi1fnFbAeCd7STgNhWZcewNZYMKwwokuEDFYJbW",
  "key8": "5x3DUgRtvoEfdRK2isTXcKCnXRCWi1z9pp7J1VyXkboCsebRaLRtpz9RzEpspBJhE7vMREgukUV2Pncbfh2UwMtH",
  "key9": "3aMoGws43QiaApzqx9gQEkfrPwNbhJuNJv4h3pdKhCa3N9BQ5BNhuGw2t2cYmK2xzMz32CySJtEf4YqPynJbF9Bq",
  "key10": "4ivwgp44A6jgdqTH2DJqL8z1J2dukbBbsCohyW4oyVXnQyAKjHAvihBMsB6DzhQ3pixDMmgfXJE6zq4hGvT9W85P",
  "key11": "2aMTo6ybpyQgLpKDmmYV5cwdq8hdBFS5R8KVwK5qGoGaN1P1DfvdYu8p2CEmZK9xvYjosZAtiif8WfmRXk7kSz9y",
  "key12": "47vnURJ7i5P1W1o3Ph6Fes88WL4BXXLqtR1fsjH99aWTLTL8ecpbM6CgSuFtLAzVankE9yQAdjrqycHWoWNQ7Vfk",
  "key13": "3JNiNfCsuKqiaqjygs3VZBTQpz9Tw7rxYw7qPt7pDm6C2VF7aAWpsNV2Z2KndpQ92xg4btQuQVn3oa6UUdvTkr2Y",
  "key14": "5rrL76QaPjC3ABi7GBukhEgvej9JG8bJkJn2gJQfWPwngQYf93rKKeTsC59NGzv1ee35sXJxz6dWohkJqjg2R39F",
  "key15": "2R9vWRRE58wsbhBLbW5FYgW56dAsT7c8ekNXEJ2GR5p3GgBUerRNmxCGK632dyLoLHTEiVw78TZAASp2ZmEVtvFq",
  "key16": "5f5yWZBTtg52mY4VcEoeJTNUNKnAoCLQJkXweqrtWp6MtrhTPi2W5KmNysjj4nFE6BnEpzagKEWmFQUQqh4sqTj5",
  "key17": "2Saj68CMS7VTS7q1V35suQ3BfKtTu8LyD51HycSTEq3YneUQbbP5u9KKanQJT7QUAsF16gLkYimDuuWZe5vpFSEf",
  "key18": "2vHNaf8VwaUWThf6ienC2yBzNam4G4LczJvSVbBwt9n1mJf65WzBufHQqHK1vyb9yWGLDxxBP8WDLgy7DEviBdxX",
  "key19": "63to2bHtZpnnoatWJQTBWMs9ygunHUnzenGrvdWrpZoc7eKFN96e3m2fKkFS7zsEVYNwjy2eW3AttCe1nc3zJs8i",
  "key20": "5oAYp4d8NqtqaeAMFUQG6jzGbGB4DNHb62c8fMKAv2aNgLFwUYYmbJe3pxPXPxgwQsmhehkvdVe7yyXSTyNMJehL",
  "key21": "38d9s8GXqAAQiTEW5zn5EPDLjNJ36Cp8kXz4v3Mi54Ptama1YHYVcgUv7oc1Wwu6NcbWwbsjQUkFma5KiB7t7vT1",
  "key22": "5nuFgkPcBwe6A2smabGkNcwLPjsNqcZQ2XxGaBqU9MEuQbBcn5xwgiqkzid1KydngvkFFJgvzSCxqKypUcFVcAB5",
  "key23": "5WJybrxRpFEjvtyGFQQwGDX9KuZNZSXE6vKMLqWFWQJTkFzyi9pGZzCw4GYUbaNZqSicRAWNFag8EpgNyakVYxYq",
  "key24": "2LRBXQ4AcRLt8L4ZzZAt5NRfj1DmbQpciWuK9zL7ScdqMZAbEe5AWvP1AVC4TRCnq4BWLvoewuEDwMouZBKtnScu",
  "key25": "2XwrDX7FbmL2AxkhWz4W9JC5xMXtdHSE8RgNtaUPBAwtSoyM963A1KdPEVfw7YM1scvhr1kyDPVK8qvWRC27HYb3",
  "key26": "3Z6pgcxeR5i1wEwrYUETJ9candu1KnfZtFksFR3eBYrhAytAEGdFVYLPxPEGzpbtDksbBb7wuS5WS437fzeTTVLi",
  "key27": "3aJFSFn6qzqVVZMuY3CQ7UWvC5aeM8xgDKTi5iixd5UhPcLyNuuJTMaBAnL7ir2FQDSbtBDA6FgTK83rAK8QKg9S",
  "key28": "2u4r27gxLskfU5bx9UQuBduikEQBYFujdWTNa48S1uDTU9kf8Ztf17pG661RmzmJD179axXAG9TYwgN9LyJCpdW1",
  "key29": "4YTDi9ew9BfgDmPPpJVbcAyLQaf1uTe8QDXoAXzaN8VUX4XMVwQhFAnC8ww3eC6TWX6X4cpoE9ZHnvz4sbg1skLV",
  "key30": "4MFUWiyh2ZjyvxskwTT6rhfniW3BvvcbxB3J53nVfh5SLkUTeJggxyJrf2bEviHhXiwWu4nfoegZ3uqVaQ5Qmic5",
  "key31": "3z5fuwQ41NT7r1b1ZJY2xDTbHeH4KuGDJdQBpTM3uM5dcamUxMqXboe5a84qr6KG2rmzSBssbkGZMovYtiXuSwTQ",
  "key32": "43QcPp94r5juRVqzLbWhv3gQaKXe785UrxzjYqKTwCAKHMY6Y5BVE85YdG5R27uBZeXVorH8grZQN1HZ8rfxSBdP",
  "key33": "1mpBDLjhjhuzuRrYhXwM6TtxwunLLFWQGgn9KDdYiPV6XEHuTbGc3EB17tM2yTw4tnJA4AFKUmdQjSD68P5LcLb",
  "key34": "1aL1TUA2ZXpUSLrAmphM8nYGBcXx9gKGFrmjYgqtaKdgH7UhVFrCc6qBgo61m9mUKyRSLhncEMgzKxZqDvG2JTT",
  "key35": "aJR8mTfaz6Y28vWPu9wBpeiw6K8hUWeUJE8z8kZbsJ6vrSbJuRwTr9YPjGu9TMEB1Utnnw6ZAsFJw6RSfu1kSmY",
  "key36": "2WZe1CPbXWCnHCn3sENrMnPxBquM7bSHVNJevxw2T6XVE3W3nYNGdbgcQDNbAwiu8WvDUTSXzV8w6LDxN8qPgTLz",
  "key37": "2CHkigC4KnQk6aK5axmuvxDLunRvAGe4VD7TxD42MSc85QLXsbRRkKDuy7jGN7TD5PDWgRSgAbe4B2D9VM16A9Bw",
  "key38": "4xg8PYL5dfyhUe5TYquDmH8sm9r8d1YkjRCX6Efwfet6SnSVswcbrGQLAqVEaDnypd5JmWDtAnaqrc9Kf3NBmf7H",
  "key39": "jSBjkQUEMj1Rp4bk85oMktYzbdJ7efVRvSnPb1Edvycg7xKXrz19Wa8vVTLMhZbcb6Kx8sPDhuHU47KEtZG2Sm7",
  "key40": "2hYn8Bdb5fKUaPWbfCSgzZcpY7SARnKJ74KPTaJBk9xNCimgSfoKJuq5m9NVpj6f3yRGBhHkP3WjFHV5S67ESP1",
  "key41": "3JmTK5Ci4CSXiEb2NX5aovMRAdCitJb6FXEPZkAKm5L3JCRzdCwGngmGjrgcwCcJxjRQVGNNHFv4JGVJFMPeWSHS",
  "key42": "4dEBho3MiVVMbEF9YZ57rzHPoLnY53D7KurZn9eWBGTnkn1MNQ3Fwry2mXR3XJfa1a8LYg9sYzrELY5ht3c18rvJ"
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
