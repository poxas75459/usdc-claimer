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
    "A9rW54Kut8o6AieP6onoxxeyRRRrsfQ1fLKuD7ghYNuyrfL7u2Kujxbx9JeXzZQNDxgUT7g2YR4swZNR27ncghc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YYEUgbqVkzqzsQ8jAeEFNYL8JysBsPUFhEdtFukGeJUTAVyghXzQ9ABHjHn9chEU4V68MfqkqwTAfY6KLRXGuMm",
  "key1": "3V1erX5g5LoA63LdWWTcbKAfkNwhbXQpWH9Jk8jHduDkHDMNVf3Es5wDqkBVR3SPPGUcUEXqaZgKRsA2MKjAz5KT",
  "key2": "SMvtqVYCZSoebgCc6EcMeC3BbwM1N7AL8459aSzjjFv7akwLrguvye46h4ySBtusLaiJvJmupiiaURrBPfGfCaJ",
  "key3": "4uAPqN7XLU8aRMU8iU2o5G5th5urfimzpkvYkikhwAJQg2L1g4RtHD4n9rFjqPBnxCzimKed4r5H4Gv3Z9q1azm",
  "key4": "2DMRTZjsnakkADBHbGsaUZCJYXqBEVU422f6cowpp1nwMPX7V65wr1FBDwzCk5dYLubruobh6C2TcyFP9PPU6DJg",
  "key5": "4sATfy7LGgkk9VjXyArY9wWPTkALjbp7RwsPxsahqJQMgFXvueVLQjJ7LhmkMagjDxnsvqdw9y2hZ7n3fJyMZcfB",
  "key6": "3z516NK29qCbNopT9p9T7yxUQAFpsH1w2RGuC1uMgVHXy1omv8TNtj88cteJk9CNFuqXvo6VsTSkx983dY4bHb5p",
  "key7": "2J9qX9Hm1Sy3MvTjgjCgf1t7aUbFZakimuswicvz5fVHcbvgT5NYNJw89CnHFTGeFJ32cp22Egr8bUNFhMGixLSW",
  "key8": "4ZCEqDDKMEX4M7TDpkvJMV2EqDFwCJTT7eg1ecVTnECV5VCddfHjJEZ4P1sQ9uQxm9U6nmymXkYK15ps1MNn7ioA",
  "key9": "52kyngTb9eYBQSZWtfQ1rgkx3K8ucmhzpVnyPeh9zAbVM54fR4vyAHCZyWuX6FEYwUqBVXLB1aA2KgEgErTGJSG1",
  "key10": "644QebN55Epep6ue7YHumzGesesbqE5GsHhh4EPn9u9JQncs78zAJPzwV84SZNqYrEFinxkWGgj5Vc7jrMebMPbi",
  "key11": "5ajyWXbsTKnm2nuLQUbSQatWqzX55d2HwRA26onkHfC6tEtUopnAhqfmBNZatz1z9D8T6z3p3D4QriThMrEt5Eh2",
  "key12": "4vR8exRw7dp1VBFNCmqmS6mxJBSqHcQFJGmviZ1KViek42kGtinWpx6gYxD6i9XmMhWVDDKnUkzFZZ4Hn9YAQjLd",
  "key13": "3PzsQPQKEcjei8HZRXoTQEfCJZHN3hCDsLKVn6SoefkhW6sHTgZkwPj7uzRxR2myBf98X5tQVktGr1DWY35LwSD",
  "key14": "5izRQ1SdzBy9j5kySd6cwiQhdxS3xtEM4mNRgqPBxVsBPZjApQhQnwXhXYbskitHYqpdyPBp3rLxLRkZLddkteaF",
  "key15": "3WmJKJoMjzUwhSoUqushAYn9y1WFsBTx8g3V7GJzRK4M5m7Wdm5W9uDocjDcnExL2ST4vPWUYmkbBYE73px8q8sM",
  "key16": "4QCR2BEWrEEEhR1WjjBda6xnWRUQ38AwwfF6e7QeCCKPBVG1jYYDFp8LKdsnKhJ1EeHqmmSDQWW3NKVo48AZvFYk",
  "key17": "3HcHM6FJL1HcdyocKJV4Soh8KKVaaYshUFuo3XvH2aduwzE8TvvjuKxsUdFV8w7wXd9B3qPeNfCfh4MSKL1Nmyk9",
  "key18": "351nnyoVXr6KmnTDvBnw2BRmNeYoWxma9CnqQjeCbfte1EPNkhF9q3cKWUh3cS7X2ksE5qs4ZHSjNCp1soeTdtvL",
  "key19": "1AqQ2SQK7XakgkyHGtwBbXDJbd6TFLR2B2wij4UP3Ld9gok2vrTve6CZtm6awxknHx3HZiqboQkPJ33L5ZBZPQC",
  "key20": "6HM3NzFgSHnjg14aDRJoaNFizNkM8DGAczWGJoN59tP52Thib8kwNswy35kXDmpe9jVvhWF5GpPvQNehtjuQGT2",
  "key21": "5EQzBApsUr3WQRvxbEkYYK83x8h2voP3qDsp5QptwSHa97NdVNtTTz2qViL1Tmcg8JRNhgi8xZ9jhxX2iuvnJFSW",
  "key22": "vMSqnnQpTAn1Y7wfdiSdqxSbbjD8ntktQ9CgiAshtR7KY88GLRDCiU9bsH8zWFW5DYNdiprA2edhgTaVwC77YSt",
  "key23": "4bKC8ayVzWDPUrcBv9ioQba6FeUnwszDkw9b2PayA7C5hwyYMo2jhXtG4TYbbemhEQKkHT68Q87hBobP9eRiAR5i",
  "key24": "ehvTEabD1JBcGbPipX8ryvX82SR82bBxxy9VhuMR4FUtZf4w86FGt1RNZxfW4QSs5cKnqpYt7ETyFW9d6ugVZW1",
  "key25": "39XpTBVDKaZteogkydKryMzLSAYZL8yWGEK47Bj49yY1RCr5Sh94hJvv4vrVUwbaqjGiC48icAGMKxTq4K3ciPzg",
  "key26": "2iHaRamTchHuH8cGaGmv498ryGAakZgHvpAwxwFBXZcGqJnujrfPEBWPTu6jRbuVitLxFxwtFiUTBu7S6xEoEgDm",
  "key27": "45VcmwBpd7b4v6iCqopwmXBCKcn9wkJahfKJFXu6KqeNGVm2dz4AmW2kt1Kt2iSQfhPipHSozGehJgypw9NRzmgo",
  "key28": "2ZGKiJ2RsAcZXboCTiNhopZmACyMY5CirKpUqwdNKS8Y97uVJ7W54V7xkALzYuUiGCa79MMXRwSLBCWSL4fE9n5T",
  "key29": "4PrCAno8usRhXFewdas8MQbby4k1MfJZZnCXLFFCpKgaBRWrdfKpXjPDhjKSQz3njGWrQG7WPQRYt8YpUbUi76EU",
  "key30": "3FsWm5puDiRoUEpA4fWWcedfynPZdyhZvVreqcGrHhbNQyEX7VR3Eo5D8wCyq4jVVUfCvzje8LWftL2EH8xbfsYh",
  "key31": "5YiUkmaqUKxJAeiWr8iygZDL85EaVMottuj2EYsGC55FEvv8L9ADWYVZaiVeZxvQ9fWzaVxupvGvhUyk3bQ5Xm7F",
  "key32": "5dKidibZ5FLHfAbZjgeoHJboMBdGJemswSebND3C2YvpUNmXK7pk8srvr6UKrRGfMzW9Y5RsqnwXUUccxkhvbS76",
  "key33": "4EA6kEXDdUVnsHJ29NskX2nEmdHEDVQVa292mUrL7Hrk2AN3QQwxQvr2tiSAR2uhs5YRHCabCkmCUkAdbz1zwupc",
  "key34": "4SFLBGHUiwnG85pPWVjFRh7jHxZz337JF8XQg89pXKqnSDCkrBVgmNLHWyPgQdTDyqb8D6R5dK1tehEMMs9c79M5",
  "key35": "RpHFagoAQHG6DfWaLpNFs7sWNc4NaTtePrfFApB8zwE4xA2mPYobUZfD2RErKBFdmBgdX5D1zhWjDUtB4yW5yyP",
  "key36": "2Jf4WV4MMmFSETFihF1VKSu9BpSBFKK9LqMBL9SNBSuCc7wY3tcjC5DQMeSCe9fzwoQEiTWpAMjKo13gAiZ9Mgd8",
  "key37": "521PkMNaMhrwgr9aFdzrZ98dxfupkthgzPphkQKB28mTpCiAShXoEebLEVvLhwAuoPcGU6SWFPvEDxxZU27c33Re",
  "key38": "VJ6UZKvCcz9Za8dfiKwahuFHcfJbYPTuwx7wf7TdH4MUNPzHhg2AxyHsiGt8tT4EAuFr7gGyYeTnr2NeQ2UUMQx",
  "key39": "4NVwojLjuv6rzYztkQnyb3bN29oPCx4rkNhRjHMZjZ5tw3gtYiuKvZMXq9PPcWTuKrEsZTQ69GmL6sam2ZnoJias",
  "key40": "2Yci887Pb33c8YLUPRSsUThC9LxG8hV3bkLxkRVW3EgcMmCEmhuAuhjUH3pkjE5SKxozw1qo9nJ59uvifvLjVNNc",
  "key41": "LUB6Jtqn6SWpGCB7uHxht68cLj5AKMvHQGjBFYLoFPzjSqMiC1qJNLprhiRaBnqJ8GSrWjCesApSv215EWPjL6U",
  "key42": "SXJDpinXNPYzU1MHr4gW3BpmzLvDMFk5ZNg4tmD5XWzCD8GXEU437ed6n868ZGzNDpYSwyvpQYkwpvtu71nr1uW",
  "key43": "Xbw9smF2cDaWXnAR9aJM9adP9Z827htcG24UjR5RZJBpEc5RRM4tiTZUuKpeKtbxNRdAuRGVDGk546nHEdBV2Kj"
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
