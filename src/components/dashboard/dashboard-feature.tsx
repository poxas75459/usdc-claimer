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
    "57Zjv1b4XnNQi1uSmawHXpqMPrd2wMe1k5Pttk2zn81y6B7m9v3vogc6vaPEcRdMjut55w7N2bUnsPA5ScTWEjb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vspYtPNd3gjdskNbK3YSeSnKLUnFxgixACnN8DcJvDcfRkoTZKRHwim6Rz6o1N4ePmPBzBSS89dGBRvT1TAk29Z",
  "key1": "3nrAaxSyQQTVz8YfeprTESJB9EGZTHbhCHrQ52XRddXy7yAcbHpihhknyaKjobEkXVakYwhqhGNTF1te5trd5qBa",
  "key2": "3MUhregsWamh27HUbPfAr9pAYBRmrpJf44mMvwJemb2hccouGbJ4ebJ9tvvGadN6dNrU8dE6Q6z7A4MNMJ9nG4yb",
  "key3": "Jt9te5E7tr4LRYJrpkXwyQSbZ1jzLYQHWupWkrefr3KT9EegzvWdkMEkf9vpWeRaoy7922bCcjkdRKiH3kCKB41",
  "key4": "5xP5kh4n6w7Ynq29YBZ2GF6DDLGBUpLoYhyBTWn2sHC7zd7AsGDz6saZQd49q7M2EUYFiaK9o6Y13P4xt8onDoiw",
  "key5": "2hGc5EPYgbcNSR2qfHKkLKEY8CYEmqtyGUvi7uwFkXkpunxj1jhaQa2YxaXnL8TLw1HJRzMtf5rPCLJ28Z2RLuPw",
  "key6": "5nrgZtRbbax3vHrW9NheEGqMg437QMxEUc1RAjrzFSLXWKRzfd4ectaD3E2KbCk9PsYVV2Ld6JspU4pTjEuCihBT",
  "key7": "2KjUqWEL4WwgnNZbD1jFTjyy8jmEDaKqFBqc9YetySdS2kG6niLUozU8r1RcyS3X5th61kvvF7Uf5Ec1cbzbrEJY",
  "key8": "4PGPznBPgdTEmYQCbjgr8YDbaP6qsJggQucBL69JgbVht1tMptMbBgrQzCVcHv13SRyGb4SR5VK8kAScECi3EVD1",
  "key9": "rwpr35h4Y67ay5VuvBkQaH9jJWdZDGDwVbHyjoeTQebijGvKJZGfubiCWnp6U3taHvFtptCTGZdy9fEiyZD8Hbn",
  "key10": "4oUWmDB13nX2AWkA7GcVbeju8cEzzwyy3pGLtjM6MqMoS2km5RzvqnupQVUwVYqpjcrjjLsuSvrcHrEV2zE6Jnve",
  "key11": "44akaF9uXzGu23jmaB6yVh145FK1VmbUfVtC6BL1icyKv3SSAYWCtoXVCePpYg1fAQV6MX614d1x8HLbWSv48v3v",
  "key12": "2VjVCQ6SjwvXCDAjVDWkC7ZUdGZeUYeVZNwJYprkbbJGQGAo4MTwu96hhArUcTZMPkmk7qAQcCDXfMArf3ymvAtw",
  "key13": "2oK6BXF4NLZcbjibB6yu76rvHu6yXdFp5FmzKBtg3i4kUdiL7c93jxiz7NUerCcicZZb4EGcpWmKUnrG7JBW6ccC",
  "key14": "2e6sWDWPnjcBNcDfBFPXDZjCb2Bh4sHwPDvujBzN32GSqNJ8UoCkumcsNbhhwdSLw2jJyUAohqueginNbVqfVyi",
  "key15": "9jZg5HhbDB7iSyA6HCsNuYF5KPj3b2nAAFqFZWEj2kUAxZb5fBLW2gYRfho49hxKaPkXNyTb7kfTVF7fxFBbxLx",
  "key16": "3RH7BL6ay7KummFmwN3dnKWQMi5c8tkUxqLqCq6W6sbxnqeHcGC1vT5mMEBM4NMdbLD9VZ17fdBLt9Xr16L2QBiM",
  "key17": "RmfxakeLqmkX5MihjpnP6be8RMiUqr9GdfDrCYJtyeroL4GXDkU6bxTzFZ259trQgtozomEio6n5fAjNXqo3qsk",
  "key18": "63qhxisis9tMsmqdht9vBEb6C1FCB1vTRNQNdyMsP9QnrxLKH7gm9LSAMuw6rZ2SKaKUyDGYUcwzjKD7ZM6Lhpjr",
  "key19": "3KV71JDfMAnR14uY8XvFMLQgLMZygTDqNVvKmpKYMjtXDxwHPHYHj7x3Bw82QULU9yLgtj41wKpMDKN6G3UoGV1q",
  "key20": "4NqtuozekWcHENWNF89MQmNcGf4NYvcaTQas3oogCMtX7uh6Urfpu5LoNiHMnaL1CtVoNLunsU15P4BKKB8pgPdf",
  "key21": "xFhQRK3h5kJ7bwc5URTtGHsA2BHMYest4xdot1inLyccgdoxgQ3SbM274LaApfSR4XogMPjAmiTF231WJmicsVb",
  "key22": "BCmgAq2aMkQXe1MGJFHhdXkPsTYRFobaTw6gJauwH5CvBPWTeG4usRufmZbRJBe2AMDphmzfGuB6bY8SEYj7Nka",
  "key23": "nQ3EnGJXQme5RCKWx7Dztnzr1r5qEbTHaJmuoEHuBtwzvMf25RWrygj6cspi9mbNam5GvFMsSVmsmpeZd3u9bBV",
  "key24": "4aFArgkZDJTurqz6ZZz2s6XaBcfcJsW7n2NfJLaerMsVX3qKEbDHT6eBZaTUmXm4KHa3p9xV57J4oc4p5ToJNGrX",
  "key25": "5hF5kCjwN1k2mSLs46GWrd8Qh1aWRME9kQtKxyDDnzWFUUGUsdQhS7sHrXS4oQRhSqDLMa4Uv3e5EbsoCdFZTrbC",
  "key26": "5DuiFXLjRrpL19gW5eYSiYUuPkJJCNgxe3HS5XgmvHoRUk25itb4mLwa9nMMsQRSXakXShzr7FZ9QxTwyGKv63cz",
  "key27": "3RH2ARPE9rtVk4caxG6x3bHBp9b8vdSZoKa8QMWxL1cJYSEhqTCfd8kLn5TKNamyL51T4m3kizUd2GtiBMP5Huxy",
  "key28": "5xbEn8nsNULtpi1FwNqikNuNnxVN5K8T7H2FyFMKRHEARAEqmdKry218Vj7KfSYrk3DUFFyU7QDypeQyvqt6TzDR",
  "key29": "3on3iHBA95w8VEjjdpoKavNudnZCgsDQiWtH5pU9HB5TPn1rsNbxww1ovkuvpobbJejfshMV7QShGmpVtyeTEFhL",
  "key30": "2SzzkMfTPbGaTtXfBU4WitD7KsytcK5Nn5Vz3DfGePcbJXYFYdycNkRwE833arThRa2ib94ko9N9mjVV6XgSZV1d",
  "key31": "2hywQVbEuh2ZwwrF2Mq2VPaMAUReKF7Y5pZyBD7TybyHouKL8QWwJ3ntWSZBt8froNLwUW199cgjypJdWqDkPv3z",
  "key32": "4DZk7f29FLDYhDYURtLuMgxtNNDL7F7GAevz3vyJjie8pgB1nYj2TabyQbjQS67UCMhwS5inq26VuvhMx8HJ8h6S",
  "key33": "nx5MDeUXG8QEcbfSMexR4uXAC4Bt35VJe8JvhJJktnd9NyNnp49Fa9bgVq9CKXvaB2UWBKyMA1hNeRJ2yKMVsvW",
  "key34": "3FtQjfoiJQvkM7z7jdhKUUiJnXySxbFxcxqYEdnQXH4qvxi6MAmc9NuxHo1MNEpxmSG6gcth4SBy1S9yfAy4TCcH",
  "key35": "433LpX2ttfMRxbNBucPzQ5LGgmhd9T25DJdTVmvmAwRVyXhGkiNTyrYPZqnxeLNFC5gK74odsmJDhfmseUFbbhC7",
  "key36": "4Cg5PmWsW4UmxW4Ltvdb4mx7ULKajskvhPy2qPH2BTTncrWgb8ood1qvfXDgDGaok5XYc4hP1uLk9GByqHxKhAMN",
  "key37": "3oG5JamefvnTSfEEQKMt1evVXR5qUFtV6t4Jw3xWkLARn7jjmUcvBy7opYk5EXEM2fDzkD9RBjMyW5AGB5j7Ua8V",
  "key38": "437TBhHCJXahNjyt21pzU1JbfcAyWA2eRW6ScB9Cmg7vnzFPum8oc6oR4U4hdQXzAiwjjXr4sgL8anJNquzgqy5p",
  "key39": "4ez23suF7hn11TCivzDEBwHYScffA8WymSpBXsSA54H31b7xgqtg3hbiokGUWCa1tLWKeiuDVykZ7TKNUwnj626Z",
  "key40": "286Bmh5HifUWqcmPZctniGP3gkqZCke57oA2rma8Mc71fNbRo6j9rsQvxmkvoqDJsEPhK3zMKjsfyf3SJztfDV4h",
  "key41": "3DoG7KPvzoKdvePY2uuksPMizxmPw41KkPk6N7dj3UhVW8hnHBRVqgJbnTEhEfVh2QztJvV2TyX4wFCKcRnktzKd",
  "key42": "43VA18nm2F4TbeM3wApDHWLBxzKFS975BhtbAx2otTANFgQM6g7bS7dGTuECZQsNAct3zU8oqcBVAC2uQMkujD8R"
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
