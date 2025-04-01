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
    "5k7Dp2VGXLubpQhWJXajV3YzgFop2jaaygxduiekWNqPEPG7FTmqjwKE3Sagqn5HRg567mE2i5E2xdKbeZFciw6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S79HEZkKbkZufjofVX7Nbw4GkvXcDgPvjoDwXq9UqxFF6v3DWZW5JMjSQbCzjH2Dt6ukM6B5VSEjRmQBPw2148t",
  "key1": "2eug4yLJvire6U46Qp4hpiJShkQuM9UMBk9XEQEbj3KGyVwfKNtTjJg1wsJB9AmmzBavxmRy2C1B5FxRT71tjSHE",
  "key2": "2149jFqByyAxGwuDtyWyJV6SSB16KswRc6VhB6cwevUB233LbKGD7wjRmzYe4SzkkKGfxvRcjNpMb8H3mkVHiAtm",
  "key3": "4P3z9zrWQpD7ZcTE5GLbDcB1VmGfSi5y9xTaD1FYrrGrafHPrizTucKVEwg7FCYLgkFyRWfS2CAwuB1zUtXJBybX",
  "key4": "4LPiH8cYRS8HBkeF6EoHCh43JgEYmeB8kpgRWp6mRTcu41HHU9ZmqTNextcxBCRRiM4odXcFJLQQ8cVDVhXzmbXv",
  "key5": "5nBQ6ogJVuqjqmfszT83BwyUAReR1LKPfHtXPx5nCpZpgTmRjNhaZ2yohPTPwE3P4bB2TdbwovjFt1ZysRQXwDdS",
  "key6": "5BXd5qPDj7TLDxcK7HATVYS2DeGGp4XtdT3MdZzpk9na3ukYJm7QoykfvAYBGJFQb7M6LCwCQT1XMfr6mBk7rpW9",
  "key7": "4s6hTPVMq32BzX9X3TjjUuLhGxw15W2iMif5uBpmW2nDabTezr3mTB8c4Ldrjwja5GNq2VRTouFs1GytAz4YhW5w",
  "key8": "3pC11q6LbtVtxPvNuYjU7pgtsyzonrRDxhpBG8TpRMMvDCcv6NqQsYJVJLbRd8u9MtrRw6bTTL2D3JDMxSTTm82Z",
  "key9": "2mCtyQMnG4i6gdnWcFDriMecZgXMYuXkWaZmPhyAsxs1qTBF8ERUqLDRVHS6FfbKrqyn6Ri3xWWkMyq3NhHFJh5F",
  "key10": "3yREknxMYGkoWozZ7i6Wq8dJd5c7CBzLLebo7jazLVvMieP4GAhfqfzqipK9T7ikb8P5VKf5wu7xKHBtfomfoCad",
  "key11": "4KkpbvZU6yMba7nmneg3VzPfL45mHS1DFovcg3A8yAtMT6Dwcbyue387fXsTpqWWSTNZRMoYdnvmfbx8S5W6e8QK",
  "key12": "494KsMVL6DU7n5DDFfrse8tosVSmVayJLC9cvpENbw56en2D61uTApaCgfUiWkVndP9FjnSc8pvvtboreSsK6uG4",
  "key13": "WVPe2cQpzhyGiHtPdgnAJakbHbdKh6DNZyNjrKnyy2NcCQJpbvMd83NHEW4JbfbGbwcG9UF73GXudgTbMJpRD4v",
  "key14": "5ZdjtJ2kztDDHYHBErcRw4FjS4WsD2vhq1eV8EqDpnS8SGKGUWGWDA7Un7uAKs3nGfJhkKWT8afpqSJ4pbFpMi4Z",
  "key15": "KtypbfFbgToAMzGHYjRf2Mhztig1xm2JzE9g2cF7aoEBejHXeCk9dPa8nduh1z8DCB4AqUzLG7p1MGPMQUXTDAk",
  "key16": "4WHPN1au9QTzpQUz2HdQ6zssiFdjCxAdFmzWwUTk4v5p52Qt1HGosnsDJ1LpdTD47oTS15wqWVkT9i1jBFjV3Vhc",
  "key17": "3DKc2VXyKTSuw8XDrw7shH1J1BrePRVe5V8brby1mkQFnbgk8aQqV5kngYh2TsEADbm99qhms8ifQiCCWd2XKXkK",
  "key18": "5bYrW5yPkYcrQz2djR5sL894c9Yp1wf2fpqsuEMA5kmBWP9KB6zeSpovrzFmMhLxd1c4Pa11ERXwHrfcqsTWjbBS",
  "key19": "5vEGp42RmtdkgXJDCyjJ35nPWVD1imAi37WN1mv1CLFxredPtQjErmpH26KGicz2N5wywFh2HRsd4AbcFMzgjBX4",
  "key20": "wN9vKMjmKJCzkx4qVZNv8xix9zkDMA2t2HsLAWqgGFEfXvSqmnWQEwmL4CXQv3Atm8q3TeaHgHExQSZXSNhpB14",
  "key21": "3niikoRDYp5PMkj7hYs5ayvJWnbsAy9Qqd21Vch73wRy91QD2vhLUcUU4k62nrdTQw785zyAn3cuFjuWkJtAM8fp",
  "key22": "3KJRige5ZrbVJFra64XQsyf3ejQBy1Yw2Lci2S4qUuig5JuCs5XbPoCsGrHYskkQyLN1izZUfvqxyuksrqkk8zj5",
  "key23": "4VZhDLgpxi9mfm4JsKpjndc75M1BTtTaF9MYdXd16i5Hxs9pibcFF5WtbyFLLaeW7efURWs8KSxrdF7dL3Go2Juu",
  "key24": "2SvZAEnc7J96ezMzxohfq1ABBdpDcDFnQYi6ZCghMwpdqp2HxFEpt6cFJKuE3KniZWzq9G2yo4t8bV1Eu7kCYXHC",
  "key25": "4LMcEGrsR92rqUbNkrgjtTNmUhQU2exr49PvDptRBU6Ph91eyhWa38XttdvsdsG9K2vJxPR5gvGzXAmYpiCAahLQ",
  "key26": "4gPgDCDtzWSNjC6zworXKNvGAY46tZ9K3xqcqXWxxa3pTfpZ65wzcR15s1u5yh1w12TZu3sDkENV8UY1dKF6drHi",
  "key27": "5tjrqfa5EWkLK7TvkFMSRnsKMBxPwkCZid9Wjv1ATKBxwzxYSnGECrULm3h7Bi8jgtVaZCrePAnbLVprfJwJTuVU",
  "key28": "3LVqarGBsFRUdp1NgMeVyZLgV3nwV9GSVVbNacfp4LJ2Y6Lsms7xp8fwoJ8FdvdvDxMPK5WrkiL9CQfyHnNkDK4w",
  "key29": "kvNweb2aEzUvvrkhtNpp2vcwCU1zf7GTwhxQJPqFvixaH38EWYv2ixrXAbqq255GRA9peGeDwcfZcvUmCwH2UrC",
  "key30": "23ZwGpQfbZ12sCMrfP2X63vBgdTnqVs8x5q1FzyUSwzhAU6CnSEFhVo5b9hCjxpMNH3ZtFgP2uPhKsTyRSAMc4za",
  "key31": "5ZSWVAyYP5YnuwKTJkeALKkimMbiVMcTLh2JQycbudoKSWcUnAk1tAxxzWvipWgwQik9nW9o5n37qASVpMTcvzHc",
  "key32": "3fpLE7XuBcwkqKPyZtugRv5Ya2aYS9gr4XAUQDT5ZKZfqCwX1FRmBCgzMwQ7CmsiSzdxUbaVE4XQf72K2hEhEe19",
  "key33": "5MDPQMfg4tCEuCxVqfktQzNwA5k4PWBpDG6WPsERnwvU3rjrvnPp3in7Ki5h8TCPtCnAiZrNCcqCMqomXDmWzqd7",
  "key34": "ZjGNjURng49Xq9SNfm5YmhsKAMkXwZ7BJVwwJQP4SNTEzkvvr34bsyM86zFfcoGAuCopvxbZ1Vgwi5E5KX3N2yh",
  "key35": "4t4YeEyLZzq5BRrHp5DZ8Nqq6Y5aXKfBwQZGDMFLw2dcnNQGNr5B6UZYuVgSACmm9MBnPAVN84bnkxFhiXTm5swV",
  "key36": "4CZVxFKvjRgxKnRDd4SddxxwkStxfezGDBtTfjL3iKsYdNzVondDN3trKV25Eykrvng5rHasnrg4RQCTabVw9bEf",
  "key37": "5146d1MN3AMWhP4vLDJw4tCJpmtersVAymARqsozj5DjZMa4B8gYeCpUCwkG8dNe2mavkgcUVAuwj8W1R8a4jNm1",
  "key38": "8tE3CWZnmQYjFZjBKCM24V7ECaStWLd6urLtSCh4LfGiRPRcb3f1QdwQEZRUspJeYhjmgbNkCaaPAWBRSup8gvH",
  "key39": "259HjmkBZ1q4w672WKcNMoXy9aJZdgWaJPvSgHXmEuuGfCV66cH42eSQj5rbhkcD6CQxYshYjCdF5itjccJ19fzC",
  "key40": "4bbVsTNC41WgtcqGQVwQoUuvWDT2esDoHP9A6cRfvJPECGwuX89u5HcXHcmJ5yDE7vNQ4MKWHqbZR9xUwUPf24Kq",
  "key41": "62nizLAULDRYPHHaWgaQxPPc5s2TdhBCfB3tYRev4yVW2UjWaNCPP8ZVxFNYA3T7BQEqrerkCTw7e4yAbgKgWMjt",
  "key42": "2M4NLDANob2eXorFA9YtcMrCHKShURifbxX8zwt6SsahwBNbVBowJb45LqPovs8w1Sf4seCuXakDAR68xw8bRR92",
  "key43": "4aLLDC4JqoVQuUoZVhxK2buMMTg57odsRE9d1uDq6wjAGkxfTMYx3qBEd6R3wtcp4dLjQAEWwpdHiQotpqKkGvUQ",
  "key44": "4xysVnJhbk2g1deMHjqbyK29B6ZtPpFQmNQbP83dsU6kZpzJ2jsEyvF7KWpbUgYBy5DTrHmGNyEJYGtLEKaj6d4K",
  "key45": "m4m8UAEnsJebE8f9a5kiSVxfVyuoSjt9UF1HRfHHnAGWStQu2LNUqBNAdCR1ywhnKfjoVm11ture3WYUxzU9YUi"
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
