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
    "3fr75CfnXLAFoakRdL69R6Dwgmw7urDhGWSWUo7F9xthXFMuS4W3MwjYeng7gAWPxcQD2xcmGX6SEnapucGdYJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67N2a3uz4QEf298sXudUjKdRjcTd1FEahoCmEPQpQZ5RizpCpM3bG7pUpvncvyFhf3pwEbpLCzZUvRmc7Ah2LP5k",
  "key1": "5oH6UJ65bS32UhZdZSnKHGPx9YF2m29qKw7jUU68ukFV8S9PxDc1E22gpQmBNnSfFMHRa8DuAC1oSU8A1NhvPMfJ",
  "key2": "2UHCzHrc5bUa49aU9An4babvjcTxXzQiCtUoSnAoDBbfjnrsoXKivNPB48D61QDK9tMBjspN4UzD4x3U5mUdGM9J",
  "key3": "rkLaYPUP5eC7hvoB26gbVPPo9UsULGn3mEKVCQbCiLhTRRfszsxPaUbeVWBw9R3hrocjkStwVwNdCfp2kgpadyd",
  "key4": "43etQEiFpWuaknoVAMmHC9X2VJmn7o4KnBdtrvJAs7mLRyhC9YMg45ixHoEoqxD3u21fUSbK6RqUdGJPvb5gaQqX",
  "key5": "3bAupAkGv3ZWcSWXPq8dqNXNWbN7LPYDzwi37MkH8GssdH6h99QV4HbWnpaUh1mAoG1ffEgZ9nHLW3B7exmJZYmU",
  "key6": "5fA6BtgK7z3nuWGrh2odjefNbJcDLVhzsQ25j9g8mmrxrKhNfxWumuyhsV9jLvnUQHaNCjt87wBhVi712Y2JdsFw",
  "key7": "66VJ6nEbB5WdGm1LKSrYoRx7QDPRJb4WEQbXPgLUgJFwNePSp7ZLoEj8J3pc6whfHYpvqYfzC5NPfumMMsqsnepc",
  "key8": "3mnLn25DuWDCeiMgqSFn2H6KHKFH7UhBpeTQbxWfnhVgCN7h5juQYDbtd58xbi95K9s4Cc6EGEK854jiZfd7PZXu",
  "key9": "65rXGZLMiLVyxgy5mQCwimZ6iH2tSP5ZnqXfATDYK7LMpTVcQvu58n9s1eXDqj9YF2Dz9JBZQsDBC9w96GnbmbtG",
  "key10": "2bC9VWTHYNY7ZEbrMhjGXAWP2efG6Bz6QZ2N6dzLJ2WQSZ8bZzDWk7FrZArNBWacsNCBUCE66qgLGZYaevLwNxtn",
  "key11": "3g5mC7fWNboMzFxq8TcdwzRBa8D85GfjV1Pq5TD5PzQBpPezscdzjLYRGy5Yt3NvHms1mBmayU2SgbgfF2p2dPQB",
  "key12": "2h5b7T4ApSM7VvYP8cDTuFwanpQf3sL9EASZVTEVmd2UzRjMbkRZmmV3GV9gKG9fYwHrvuEAJF6XFvYBZTYy5Was",
  "key13": "WtMAmHU1UU7R5JBSZHUXMuuyQ5DZbHw7WK5Xo683Yxi1X79EMftdL5Hzq1A7jDra61m5ZouDYFL9Mb6uXcX4GRZ",
  "key14": "3c6YpzVCJ3XXuDyCd1jdy8GF6bffPAX3c4fujMqC243wpCkKZCDo7nzjcruUHJkr64YgicrbeUz6XkT8wCjQ1v4q",
  "key15": "3WAbgGDEV1wazdonYFbQPSQtnp8imrTyWtNdRsK35iNG8WQah1CcAiPhELjBubGU2dGVv8iSgCr5Bs1kr19TeUYs",
  "key16": "sijrbpZ8E7u54KQMeyJ11kjMz7K25Rkpw2xbHUg4bqj5zzWo6msc4Nj1sPVKTcynMV69ZXKVzWyaUENWpQS5tJ7",
  "key17": "5Jig8LA6q5uFUzbYSRZAGKw6xVarsAJoxakj4un45H3BXdgxKKBmed8SsrBgPXCnq42kCFxj7TAz5LWs6jhDL5WG",
  "key18": "4EhJ9etTnCvHXgdMhvTSzxCFCv94pW6ouVnr7NZXrPapbwuYyvQkVP8iXb5cezUpF5HMHPKv6kBzTyoqP43pCFUp",
  "key19": "4FmqzeYwgytsDFYHmxxX97T3qpae41JKVfcXUFZgMmryZ4iDG33hrAg6wJBF2Z3Wk1kf4oykMMp5u4zkx4Zc45iq",
  "key20": "623LmKUA61brGFmfk13mBgz6yMKcVypV63iTr6LSCc3sPLNzinWMwwAuBFLN1t8k7yet2kfzhauthZGecucQGMAX",
  "key21": "4o5UKNmWemiiB853crqmAfdufxXKy3Ewdmk4KoCsuNLZaX31nstWXj4kieanbLwZFSDDfrUJGzurwghmetiPNzrs",
  "key22": "314g7wEGQYkyhUKxPfbznNXhksJsLWPj3zDJdWbeuG5cQKm9btAPHr7CRtdvFMhdJhbrEFrDUoqLSNeSoiSDNKLy",
  "key23": "Xyx7J4A2madHbhi3PdHJPKHP1uWA8qsMekubaT1wwYidTMwxYS9oG1XQLqTBhwsVCzQahcKN4qiFBrPC9LyB3x3",
  "key24": "emzZJg8sV1fHaKjCq5ADBPVvByTcL2Et2KKAgt5rw5WgFQRLMCA1cEdMxNHcxRaMWRCbne6gxBrcQT2DCNsQcHp",
  "key25": "Ma42bdLuf8mwcNmEK84aX559yRtkbugvMedxhQEgLeKK1wc2yBSFL76LXu6Ybr1BPrC4hffjkdKruaRHc8HkRCc",
  "key26": "3nubm6ZgV2pSZiXfAURVNnNVLmFvvYM7gj65DhqhMGT3R6mW33G5E6rFT88M1CzpvfCSVGMGyfyQK4fdedTCZAqt",
  "key27": "47837KKJ3wBiEWYDtnE55L63US1mYZVsaDGqodXULKMRtok7tSz44yDrW8DZQCCnaxi3CtCCbZe5HaLKB5yddNMz",
  "key28": "28HjexpZCu3V5M2FPVrnZbx2EEtptwrrQPGTP4Vew3L2Wz6wSvonkK4Ua1Zr1EsRKDbLuoCboagrzUESPHsmq4Ab",
  "key29": "2vUocXk29xjeGzb24Bhkh8Geb14jEn1UujgSQSSg992gfS5KTxvkvbKFY894qdXynFD7j7Jc619WUkP3uP9c98An",
  "key30": "stff5UKjqfbaANAAQxLQoiCnM65aUu181Un815TkDEgekmsyTS3Vid75h7U8vJsoMbojKqothCyd2oibDEeVdEH",
  "key31": "5GJWsQ73bfhzWgZFv3roGzFyDpVoFXe6NLfyd8DXSSh3cbANE5tcJ3VxHZnt5QF3ufZT5p6oNcap36PGogk8kL3h",
  "key32": "3siPXgpwY91SLLA5o9kRGiwPLPvpoPRLUxuPRp61qRksZJxpSz7WuRNASXHV5H7aPG36k7LF1A2wtbZ7TKG7fowY",
  "key33": "4tkUNzrhRvGYcjDLLQT7CLgguEVecgG76a1Ldym1Zti9HdiYq3NY1aUKJ1wp3kSzaFgkuVfS9vKdSCUeMAADJp1a",
  "key34": "3R3awYGVq4bP4ZCGah9nqo3bfZy9rYeGP647tDC63GSAJSdVBxmLQG64vPkEFCga5NAteJ7QmHMNNMBY4VF75eaD",
  "key35": "65ZX4Y7i1ti8gJb7ed5vWcnYWxiViZ5BGFiKxZGRZ52MHmNxu1nudUN3Cbf5kKdXH5uLSYDRCAsDuX8UuVdYowp8",
  "key36": "3nbr7dQhS1Xn2jKAUgEHx3euH4PCbYWGSWVyTx7hCTs3w6wZbYskGwJ6a4MUiGYM51yDRubhcnzq9Q2UPmwXy6G9",
  "key37": "JM41QZ9925NE9a2FR8LuEWZAar6UnSzfJtGSZ7NbNQXhh92gSdTKv5GffSQGPtHpR7eHZVqk4btd2i7RSo6VEA2",
  "key38": "2mA1KuVbMqFd9oujbTGGWMXkYkmgWRqK92pmYzdrcnqnFHtwoAnvRyd27zojDoAuidoiMkDFRoSJP4mwPe7HA9nk",
  "key39": "5hqn3rcA5DTGypMh98nQBQKN4ThvL1nfi8hzNcUKSM16t459HY4UsPnGWJbxunkF9RKVAz92h22KfXpGAK5hq2JS"
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
