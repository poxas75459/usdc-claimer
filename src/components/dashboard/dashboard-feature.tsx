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
    "3JSRBWwWGKW4vwvtNRUqFvRyK3Dm29D3vNrUa9w8jvBqMQbbqneVcBGbdQaWfrRwsRiKLg9sQXt6TUj6yX388aqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DesiS374zkBqCWpeK9bf1Y6kvUs4vwuCg2VnLCzS676KDKyLAue4AxiioqYxzJvf59YBP5PAoiTGJaz7r9goLCk",
  "key1": "2bBFMsBagKUApvCrMw1jD2cvPNUKcMkXDWy4syCmGGs6trbmQWLEE9V5NM3JCUFt1s8WCzPaKesvoDLjDbFV5GGB",
  "key2": "52316nrzHxRqRdhokEd2nGqQRuGG9qWCqwU9YQKJicjpnH8b9pTQkw31KW6ZjiiaxVsfv58dRQsYeyQYCKm82oMu",
  "key3": "5CDqY5dXFJFZCNwViAMJ7AG6Znx98wgSLptw6PSEFzxFi38TPx4PyfMbZzDSku9zcsKGq63bW6i75Jv3RDSS5aV9",
  "key4": "53yEdnLshoo2u11XZeVVgydzYbwQhtR4XrBo4YvRSCRxaeX3APJv1AU5HmH1vYjf3omXR5mdn8mThUURvoGwZN6x",
  "key5": "4LRms55rW5ezFj4RXfCRDLT2rB6WR4y3KhB9YBfYDnnuJMmEpuXMWBCKUS7BM5vtRy2zzskx2WJpbTKkVVr3DL2u",
  "key6": "42zgxZt1igqWJE1GEhdYEGrCySfZe3Q9igGWRmd5bB52DrtJuNuRKjjvffoevcGbV2mmoLGcsVQsuYyRhoYxawiw",
  "key7": "3fZytmQoDBwpr7hiqXdeGBg9tooUp3sW1kNVKcatuwTfNeeWfiuCHQ4NjTqSHaw28FBy8jB8jjB2tGnaJyCbrQL8",
  "key8": "34rH98StbUArx3dQrErErfmyPo5fxsuReaLtUbqTryUrdADkVQpNg1Rb5UgCEfLhv1DiT9tmq6qZyfS8VKKeAwcL",
  "key9": "5GzxzAFW34NSPNT2b9WzmBosQNUz3Kf5nq39Q9TmoftCix6c3NqGiCBEZpRsXim6wGnruUCoyZ5ox8pRVP6u8Sk",
  "key10": "tLNha8qL44NpDraffmKRFeiV5XxHmnWmUsw8SXivYNac5o1iwzokizh6wZXeEmVsYF9CLNNUQwqY9nAJ3Z2W5m5",
  "key11": "3j6YZ7AmJPhJbFdUZ8khS3YqV8KkVrqvWCqPoF5RQyEbwgCgMQsngeBy4nrr8Mzdp9CW3MMUyjrUeuZhzMYMAhha",
  "key12": "5G1Loo8Bu62uE8G77jpshrUej8kr47oEJWQKLYV6Fam3tiUKm4qizegx4ukwrsCaeDoGvR51r7CgbfVSifgKYgX5",
  "key13": "2L8pRjdSytnF8E1LF2ZR5YYokrBVe5y4CRrtd5nYWM5a7YXSR7KCP1CEzPVBxnSFYSTJMSs9T4yc4hM7JNbRfw8t",
  "key14": "3iwwAQV5SgBMb2XqogWeyQbGQUxZjFEbuq5sQBW44eofZW8ZFghbV3cgGeNAKxorKNuP7EeAMzXpwcZ24FzShw1k",
  "key15": "5BTdN4wNsU7ptFqfjbjkMAJbwW7kRdkmXHdmYMqaN69APcbL3NPbmmCUWKCqX9xtmDdJqrvwpjfFiTbHaE54pS68",
  "key16": "5fQwdz49ougvfjnZZREavTtcjKXr7EVwGdrUpvK35UWJykmpcRrmNjn3Hp6chB7BGt9cCevZoGUYxRbqxDHz61Sn",
  "key17": "2svRpybQmtY8NB1HayqQ6s53FacFBAMDgT1VvJfYeKFvVkdGNCwGUxBPuijxfBebtbi9BsEYDiJWN2DGUjKc7D8s",
  "key18": "44zpKwt5ULAmbtcfYQYk7vofkvmod1S8n1kZLMQhMXXr5QYBrZKWxRxxkQ394f3c3c5yJGqWCpRcsJidXbyeSVYM",
  "key19": "3oZF9QpYot3S8jfkGwJCkcJwaAHCeXcUuvAnpAbXiSvzkp3ig9gqXE5tYfer21qTBtB43nQwmXH9CRa8EwkB9eBn",
  "key20": "ARCwDKdvKZ68kDJ9GRP1ntmfaiEk9gv4KVrstxjFwiAUKPxLDH6Fyxda4BFdYmf9EkDg8c6XDSiLUhvcvzPVuut",
  "key21": "4SfguirVbqQSfhXdr7ZCP9BZwcdWqFuUXYT6bskssrDLqYkojpjwM9wYetH7EKv4idKf4WxhtJ8g3XYGY6oHyKqd",
  "key22": "4aJVidF7tY6HL9fYhts6Mq45YFBdVzcZNYZ7oVr6FF95q4gf373ayMoFSSoZBvbaooUbnqQk2thQxCbyqPqz5h16",
  "key23": "23EDy86WaL8fRHrriTCURzHwnMToixU8eLStEk8drueVdpkgnErvbDrKHovB1voZ7Sbq9xvhmvMr6bG2tvp33eRR",
  "key24": "23XWADcge1dneV1Qpt12MhKWD4qXs6XRFzHkMFE5Z6UvitNGqKzoxQcbpmBiygrmy9YLrQaC51ttaqycdwmJWFe9",
  "key25": "3hLGdCjTS8gm37tdB4bjEBoUEZ3hZRDppf1tFcsRzGnYFtTh4aeYYbbe23KGiK245GyVeLpgr9zPS364fr1NReWr",
  "key26": "3R5d8CD4ojVY5bVXEPFXLiNLNikpVcDRCZJoHCq7jMiyf2oLd6iTrhasMBwz8yJy9qvWEWkjmx8cFPSZqsSSaR3S",
  "key27": "22dJ22SUw1gDqSYJdLAeS718Tsws18QYTVWrFgFMPEftSd9WzNQ17LZSJbMJC65fgF1i6YnstTj6KeA7gttcnmte",
  "key28": "4WAkJTTSt3iaGoN694ZeGMAvCJWgEfqL55utCZo4JcxfogZuUFfqkJwzHzw6ufwSAXjRoEedd8NkD6UQevwpMWW8",
  "key29": "tYusUaSLo3MhrrHTFEG4XG6UuE4yDr8ostLKd3MbdaYg13xX1Ahz7Wgur1URTPbFSiBfhzpCPfzFqRcGnH9WVHR",
  "key30": "5fDmqPc4EpB1pSjiCjephL6CfagvJwqd97qzhskVubnR3ybnoFBriCT9QbcPVC5Mp1wcbWrUSQU3AE4TqCTgDf7U",
  "key31": "24EwZxcj54GD3B1hike4VzWJdEamM4WShMiYYPAoxKRiMv11RTkVD85tNdxUSL3boRCoag9rxKbqEC8DmosJXc8X",
  "key32": "3mZgPu9DXP364SFHUNSe9M3wm3A1t5nmKmDep9dpvo9JcA4jswXjvmWo68PpDM8qVdBxZCfJv65qLGDHnTtxF7uq",
  "key33": "54vLYGW76vErueEHj88FaUyZ9UMtWtzVTe7EHyD4aBvcTvWB9EN5UxJuV44w838SiVN2oW5fY9Sxb2pxbX3rw2Yn",
  "key34": "uLqDcZ7KS9C3KyQUPs5pzn7HTwfs7sbjEw5oGETSH2SKuNhjQ2v88cefvWZtnaacp1avWuW7SQymraJT5XhxzDw",
  "key35": "46jqAhws2DesF1caSkXs2UZS1pes3Nj85XBBUygfixW2jHjt2X44sUtpcFmXFm3thGLZ7irgNkuFdgf8Hj35ebPQ",
  "key36": "32r3HB2ZaaUNGDb1xGh87UFBFC4VYPwRQUUtyytprRwNDLe9gKUtniYZQ8qfPd7FxALJE2wDWmebApeMYJ8BjzzR",
  "key37": "5Tq3Umy9XXF1kA3J9McgKsLGw9DeS4BQbsP2BhR6i1pV1ozjmCwk3dryppafmnp8kktU9wvMdQkALec3CyRcojy",
  "key38": "5qFRKFsynZxmmisMkh2MudNcWUeB2nahebkpxRuEZ2zKf93ZH7Z8hSLfCmjV9aTBz9ZzeQm444HzkiXLi39hMYJu",
  "key39": "BE3b2k34C8cLNjhbKpaGHbzoS3L6NLgELdKfKkCLfieSJ2wKYKDjY5GEBjAEoYQ6jMYvjyV8VNK4voaJtgjkirh",
  "key40": "3fYopC16EACPbQjfTnJhF1aeUmuQ9ZFdNMSi1eP6T58MspfGNsHt2syHTtAiNKTxiQQGYHgmGZfU2zidtUDKthHg",
  "key41": "PUACCjaKD1XQfTHNHo9hfT4qdXP4U2neune6Fm1SXTSEJpzVk1G9MaLEee4nwsWk1LAEFwSwEZKzLVcMLe8WPFz",
  "key42": "3S6KcLnRf5BLRWWhd6YaQt484JQAQEbeqGx2RCUY99N1QiJNzXEcQqGa82KCexVnYkibSEQsm4KR5g4skrwyUZr3",
  "key43": "5odfRfpfUD81iTxzhmca8MfNfgpFofhg7dWRp68yMJVCgccaFa4UVPAYR2VFDmAPyS1jNnKHb1KhUw8ApWVNAqh3",
  "key44": "5aS6w6KbLsqo4SQvE9vyqi2TbH5MDJmHNMm1YF4sPg39m2HWMqvW87d576nu2rBibUnKBspeXSdofwQpAeut8cdD",
  "key45": "4uQ4GutLB66YcLW6Hdu2K1nUdcLGxAUeZmjXm6tFsfog2272h4KsicrxkUU3D3CxWaVvk253ksCZX8PWwcnaa9FK",
  "key46": "3Yds4biPji5rucUDv46dwTdYYtsVipb1tP49E3e2UzbTJbk2RxoWUdZWhXzbmYSacxiMTT6z8DJTdMgmfq2ZTiRt",
  "key47": "43EEUDERQpxgWhrMWtHxwGqoswkF6bo61abw3qkPN692n743F825gnTSTrUmBuFaFiqhZ44qcWnXR4KAhp1nsWV3",
  "key48": "ShKYjQThX4TX26ZoypsGPj2djF2d9HNWiGgGBSRiQ4NrmqVExtwT9AkN7Emq3GqK981hLMw8R1Ywn2CvL1JYgbo"
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
