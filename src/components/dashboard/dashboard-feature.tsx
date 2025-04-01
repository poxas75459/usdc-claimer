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
    "eEbGPUGbCgmckUYBNBEHxuUjFJBDvzG4S719v4aKQR4dtVRCrtYiC57rzbiWd1eyzPiH1ajFUPjt5gaT9nMEfZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o9Kx9aitajHHiRjUDSjGVLxJ8C9sRmDRWMbVHfKkSoSoECnsvtANkQ2wMEkDFxmQFySM5ArabRJjhLBXU5PSq5m",
  "key1": "2ck4XsapS9g8msV8pMBUjzBM15kaHsEiTnjNf6xoKpKhad2gJ7XaKfzNJBNNgka3Z69iGCifdc2fQ4c28MAEhDJ6",
  "key2": "4kdBcwNae5DFquWPw3VMqpDQTd5n69jowEvz3H9QJNiYHd2oHPvsyVrkRUqByzVtzofxsnD34pFWT68u3oNoWcA1",
  "key3": "3CLvrBUdQ7ahWSLzA5RrUtJZ36wR3Y71xUruZmobnEk41sytuuXQyzw98XSmWh2Xv4wx388fZrovyuxjtxKUZh6r",
  "key4": "3J2uc2oskp1pBpME8U2gTjAK6wEnM94VVSEKJb1fDqrhGe91GetJoGBz5g5WQxbNrAqMDt5g9whiEHQrhb7QkfuP",
  "key5": "5JsXxKGdFp7MAa9aHs2dB9W9fgb5b7zpjT2vL93svPGEZnz73cJ1Ykc58tAWp2tbqvkcYXZf1r4FaQEQNAbyZSy3",
  "key6": "3WPavP2A1UaCvDUCtznbdYMa1vsTFwCnvtoMJf5bmYyLN4LL9Xf3RxjuFCWS4aeA4eZ5uURvdSBU1rRKsR1VxMFi",
  "key7": "5fB4NLSFfD66CofLPER3zUmpdQegemxfGmmWVb2jGHK3YbsECYttydJ9eGkoNKFDvyu43WYyJa1mMdHDKPst156h",
  "key8": "3sFHZqKgtVCkpHnKh3PBg3TfS5vyk2t3prW41noLpFe4sBdc1SsgLmseX2DR1bGV5VHN6CTXPwDz8itWdmCXt4ih",
  "key9": "2YeqFcRV7HToTUPtrTmR8gmzLNzTT3VfMoCh4csqgHimNmeJCSGDtfptf9LN55aLkecpe2njLyCx8SRZ9hsDsmbe",
  "key10": "RMmrF8etREMqrTVYBkLgEW98f9CaGxkJRQmgzQ46EGTQH546rFVx8aMkqEL8kwZerRTVyM4V1HhDmW5HcgsLqfe",
  "key11": "2vFYqsPdNiEKtEnrFAtpa5cRXFGEQcVybnkpajFEh9hWj224cxp6taRPPz3cwZEkjSDd7i7nMyYmW8RFjWp5dPSW",
  "key12": "o2iB2sHzr2ujitVeT5FwVYJzU7h2i1aRVwgLYD4petqAVYgwEYUx61PNMiLL314js84fE6ABmWqpTH9GDm98tv4",
  "key13": "jbGsGmQc4CrGMdQJcoUzL1n4SrjBwqa19tJ8TwMyZvwbTpX21fNLkMXGHwf1uLS2ApGjWZ2thM8GrsJ2VmVNBwQ",
  "key14": "2vct683UJLADdGWGk13m8QogC9N47kjc11H8gk83WCrDrvxVv8HHUJLRYRAMfzFnRsw3hzUnQyVpA7GgdvuZBBAW",
  "key15": "2vW9tc8f2EpBhN5mSBBdXuMpGhybx177iAd8CtgsMKxhwAPaNpHA7oDUs5avuTe629DAVdHeszxH8LZkJBq5rhoL",
  "key16": "2vY5sshi2GibBjay6uwRT5Gg9R7uvtBeHxi6LA6X5b5TUbkRbwWYE2JknMYMstsDsXWq5Uu4d5mJW9W6R5LaJnW",
  "key17": "TGDJrZ7Z627fdJrFKcXbpMoTUAUhZyaknU8iShBVrMr9AUUxSkwFiobs43bnXPNYD9zVY8DWyBY31R4UZeDzW93",
  "key18": "46siaPVE6AEPSwLqAmLvAoTMKfPSURfChmKjv2cfhFrVY8kukpRSbmJoia9Y35ZiEsLc3SmRhz4jd1ZMt7wUVMvj",
  "key19": "vjPHpHut8PDFt7PStb42zbcywPupNSPHt63Hkpi1Zg5MEhFFbfDhsUm4sjGgu4XhiQRa2ZKxxGzKhPDXn3J6yn1",
  "key20": "2gKLE4fcVvTf4V4NSsNtWfFgzwsbzNhvDNzUvUXqwL4rhLySjaCmLncu4F6xEoYtadSczEsMwyQUoNEgg6KNnty3",
  "key21": "2h2cSGiLGMGGQ6mh3pvgFTcBqCYqSwKfmPNZyajMdwkiuHv9A7vg9RruUgg5MKgkq6aVEDDVoythx2UPMahGzntf",
  "key22": "4aLUDwYkm35QK5cz91p5o4ViyxRkpUFsRdoKsyqJzUVkosGZd3JLk9h9bf6RX7y37qRJtNPtXZdUU86EmCo2cd3d",
  "key23": "2TcFaDfQ4Hn2Bo2wBWBUmgriQJSwHsvcNmpoJQjAwhBvUeR8NstZTvGfNbS6LD3sRqmuapdZSac2ooiokRuG7pZM",
  "key24": "PaqBzvbVJP8Q9ckXMzWXrBjTiQTQJzUzcfycdACEo9HN6Dyspp9pA3CUdtd8o5RYgAMbdNL9uAMYVv1A4kKqiE1",
  "key25": "1vmA6SCDvqj4NqmpFXo2aerAz8hy6gj6L4xigSAvcZFAqDccbENJ3ojzNx78mASMJTZKidk6siq3JmPAcU7Qwmh",
  "key26": "2gmTJ9J63PMqnK5Ue5Jj9tk9HMMo4ASCh9v68VGyg9ddv1ThFFCttWrEU83oV7jfeg32zrzpnW7GXe956ffgxwPf",
  "key27": "2v1UK67aKcszCWCpCJYVxXmohGygQ7Za3YR7FT69YTprsMbs63r2km2hGWRbUAVGfd6A7ewuW14S26dPt7BtLaYS",
  "key28": "3rMFWL5x4Fc7XrmkMbVym5wY4MGuqGp7zeKRpfjavt4gZKDGa1qvSUM9eLW1BE8UGjFEXmWNtWhHwej2EsFJJuTH",
  "key29": "3X44fimv4FHmT9zHF3z5Fk35zKxWKLCDQNRbyzRTU8sfyvQse73ztac6MY26D1nazUKcT6uQ6wz4J8PsoLw2LXsg",
  "key30": "5DkKaDAbDbE2KWSj5V9xq6QUBaoo8AWXD8RCgt1K28b2YNEJ5vjTi3FYaUQzmNaVjFX4VHMsZo2urzPxpPygHWFd",
  "key31": "4tAnRXqcQdVRz4wPTSJ6HTRSTszDqdsmuMHQio4sjLC81SCgPuhp4BkJz3SMb3LH2j3HehMYctM8VG7JSoUokR1g",
  "key32": "2Y7TzPGvHjF2WN1jBnoVSAMxWVFgfTPLqBjg4QVxfdhY4ejT7MnJ9KBqVUkk3mAyxtKi4sshBo4K78oWKtsx9BPE",
  "key33": "2NLHnqTjqCeCPvn9vfYaBFdFVsEx8cE6usw4gmTryKRuM31HatkJm6vd3bb5jAxVrgqDDYiFMhoEKXi1rjK4FLiF",
  "key34": "52cCm8WdDHaPbjZYG8RFpiugG157hjzff1FsU4MRdxjNMrcpzuEQ5XfGrzkg6MXyMfmfXERR3rpD5yfhmPWfqSi3",
  "key35": "2TwWXz2rBZFkuzU6wVNTnbPg7zewd4YorSs66q7JFTu9KPQfDHqsAUnzNqefgMwyubBbyLzryH6MwQ9euU1HTiUu"
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
