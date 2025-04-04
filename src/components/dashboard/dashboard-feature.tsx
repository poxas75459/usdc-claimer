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
    "2UAse5C52jaozfEMLgAto3yo5Kw54diyMw3cC4FNoSBqH6puEtCKQFvUra3WhMLDZaxikRcowZJqNuLLqsXPwZxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zjzpkrsDDBYqdcw9LWJBA6uhgekDvLJamRx4xJuRv1JyBF5ddTdpPfPsfFRXAcSEFHfp1sCj6b7L7M5Nn7cATKV",
  "key1": "gsg5opcQs8ioQVxfuDwB7Z6LD3ZXjNUyReXBCdALrhditxmqeGj2JWtVBzLnYaWvJpXVzi8BBboehZsFV1o1vwf",
  "key2": "5yTdHxF7HW4xWqbgBPK5FqB9XuUG2SznbCDKEJFw2Y9Vf1hhTsSZsPiqpuBMWp6naFcAkyKgtgu21b8LnEahKB5x",
  "key3": "4LwNoimX2Y9EUin7sxdoiuqjuiNcj15CtrurWUhWL4Uq4J54YyN4QfPwUMrUSCDnJnd7sNqhEmSCWMpF7z1S5pJ2",
  "key4": "254vJMRXdbU9dpTrst5SzngQvw7xtp88NYhbrtjVCCRdR5wmqqBU26WhUmKwqkq8qzt2AEyUgbWr35LoBkyjHLfa",
  "key5": "5gus64jdAkpBgkFVR1weYEzzvMGAbNUFDzim2MV75KnfQvfMbMCWxLv7F9FmQ84DaNy4tMqyxz9mGCH4cWu7fPei",
  "key6": "3qeVrFJwFYVWBbWusZ1iGfQqR48PV1TnMoUEETirzKbRAVdSonuRX45XJXDLGMGyLusxEJ254UzS4dQMKShnprmC",
  "key7": "RdW9DYX336BzzN2zrNm4JM3tRHAe12AFgELQrbfoWxusVgeSqmQSfAaQkRGqFLKvnjHV4SHES5KrV56ogEkMvHj",
  "key8": "2XJucKbf7ZeQqjf89pN95dRQNitXd6ejvFF3fJAKkXfi1oopqUauy9MXnyfjBK2Fh8Zxh9ETor6N4RXvqJRQFg67",
  "key9": "5qMRJ1DE74tsfqsvb6sAFCcA8XVbfik7xXTpuNvePJCjxxkdWYpxySUSpDUe12L41i4GnJAYbFC1SJjYEFyS77st",
  "key10": "q5QMUQYNc2V5xg2JJXPr4ebyMPppR36BAuav7tFX2ePLEtC9EeubSvzS4aUvbN7m4DpU7gtd1Bktqh2aZfatjoW",
  "key11": "3p1L8ZTotQxaH9zcYUGYSnFydpsoTDdt8PeFTCPexobU8x6Eu2j6zFivsjCLAZCoK7uaEiH3mgmv4mbjE8sfDAaa",
  "key12": "3SwzvxkxiZFaWdnTkrdE3bxKKQ9GkgsEEcASeG22bTeeFt7WmeSKD6Hys2NBpm1fR59mWN5gBYF95ShPEdN2gJPf",
  "key13": "uEnVZtE9fCy4AquFYatvk45yxT4y3Fqde6BZXNLsU7WfwpQ4Lpasfm6YKg3X5RrmxgdDEBGGj1UVauLPhESG1V3",
  "key14": "5g8ddUKowWvxj1XsaJHW2vkM8K7MjDYThmPyEdkjN6avhAPo9pLdjm3cu75ctwi1PwBprV3Zsdrp4xcpDqhr1W55",
  "key15": "5XJyJjrSxi5rj1W993SuRMmaQQunBZN1yrZeJppCeWk7nAmsrckV5Dt6gvWEixE24ZnaTLBfQZgz4k6tsayQyGFg",
  "key16": "3DfpaW3YzCGJeR1e3ruAeWwck9Q4RtCBo4ohjyeuCi6ZVhh8JU4MiVrfvk8iTTHmRrgobFf9inTLPYydNqCJzoTM",
  "key17": "3jX51YNP88BLnVJRRHz2HRR5Gb5CycmgnaMBzj719M3d3nJx5iZgFzPgCZEc94enXS2ka7mfkAFQbHRdCv7rbcUA",
  "key18": "aT6JgMt2uiY3jvhyCbpnw9aLRFA9xuKBA4kKyksBkiM1KR9QSapWf6ZECXSBDZkv6ehQKw1aSk97rURF3qyZai6",
  "key19": "4W6VJru2QB9dAJ9JkoEjr4uDC164qmiB6MxC82tLiqm7cdmGpYmRN3ZmHDbBJuqNrNpKpSyuwsAgsvDeQTKePnDh",
  "key20": "2QHnohtUQKDtYwRRrAYgSQXHE6sd7PRAtViCyPestSQWCE8wPmgvPFbPRMqBRsL6z2kedmP83YBXeJjzLaMNx47b",
  "key21": "4uSNN1FwyLpqnyh2iHwSHwJgiAr8BbWGxthjhB471NrZXjNxQND4VPRTDuRtFYGJxsu55NmCfjnWBmJNEruRnPiQ",
  "key22": "3MDLQpf4rgKxumUgoUjC4PD87BHhF5X7xTY3JYP3rXbvYSLGwaTwA5Jz2BwxEyKLUz7W2qmBS6ELq1Mb2TkwjUQF",
  "key23": "4yDAuQgJMQGuegVVxgfkgkwXH5RZ1Lp63kzFgR46SvRNf6sDY3bvPo8KandsXPpAqpD9NxSG3d6Kvmk6vzifmcGF",
  "key24": "52j3fvDKgmqNM9YCXq3BHzv9oxPj7xw4zASp7Qd4VXRvdtod7o9d6gC6mXLuqewGeKBCA3SD3smLf5kSVqFAbVep",
  "key25": "EEV9v8SRQ9JASZztpDmec9NjcPVarXpddmW9zjqvQEnErRQGuR3VcL1jmpgwrA98FTwzmpiiLEtQnwJ9XbFb8uG",
  "key26": "2SBkbm9CSWbiXxpXN3sgjtNri59uxqSdw7i4UoZHx5yYiXUtyQaQvh1eHMSQCm9QtKqwWAMXNWYA8VdoBvAux94v",
  "key27": "3qbyfN9EN3hARH6g5usSrktJbeRT6Z7LqrhdP1QoNnVEPUASCnGSsi3mN8AzWfK1VWeNg5e63KAjW18ZzVxLh9H4",
  "key28": "WCtzWyqUa1VTPU5bMu5RADa9Br5srz8gaeaCL8xpXmrmgXqNWATUmDdBQ6ydNYM7wSDVW8KBCDQc5HVZtrkTXwu",
  "key29": "3UqTQoPQG9juDL5Xp9SraMHHq91httwjbgHpcuY41E4o7mAHeQgxndt4EkN7Zy6UFfAm9mZME1q3oMRkjYExz2UH",
  "key30": "2JMM1dorJJTAmkNzwAeuJbwChsuLpugxT1nEFWLmNfwno3r6Q7paa4z5kPivuuQ5Quw7AxZnhdifKfPJh3GDyASa",
  "key31": "291hCbmFZBYeLMHNwQ36B6WPpaWw9wzAQM55Vf31KT98oZUUsWU2dqsiqsYUqnMV6Xka82yqMWJ6q17THTaGdknQ",
  "key32": "ZEcLFasqWB5fNCaoYRYMovTFcsF3rgpvHar41fbNuPmeH3ob2yA18UZKhjfTW7oxMC3WUVu4i2rCEZEc4TNADLa",
  "key33": "4GubLkyejUcEsrxGG46aZmCSSC1uAUSimfWY5y7hUCSm2GRSJYXkrBRxJUX7zjSiro23HAhPZA5F8H8fgMgRS52o",
  "key34": "5VWRbi1C8BMHyeDHPgLxwmeRTa8wE1jMTdifocThZEe1wx3LNsDvH3yd2THqW4Ha2pKb3fHcvnwGKqiNuCdVv5g3",
  "key35": "5w4amX3f7x9gz5YsD5JwepfBkEVtSnzrkA7SemU4b4RpZKfqxa9ksjjZGmusRFeqnYNdgG2vGKDx1Lh5MZs8j2kM",
  "key36": "4jfoRAZ8LUmApDeiP2Sy5nVFgiR8AfHXUKKp454CdYBGnwAnBC8wjZeUXzp8TW7csL9uPPXZPcXKmSmKKYMvW5pe",
  "key37": "2ndii1eYwVHb78hc624224HKH2re5iW6cqM4TdY8L2SWR7bu4BMviKiD59MKNYL5hiqzDX8kt7xBmCWZKRN19qMB",
  "key38": "GmD1BzkQWGGBLFEnzcmBNqzdtRwX1ZPdy9dGGx272kGoQUzejTaFwKyZpSBSecu6Qb2knYRSJdmMmG5G71iDVkg",
  "key39": "4rziW5JUiUAQUuPebMt3BfpEG4aquXcLVvfioE1EjHpWxBY5CFCTMBLL8xbucjtdG4GiRK2DxLrZpaKwZ4QpDiFi",
  "key40": "5v33WsCrsWUMjkUpmLr6oq5utVgWWVWMdbC2RymrkCD3aL3KVNWKxPNi294JydgGeUsWeJiQWakTz81P7Rx5fVda",
  "key41": "JY6J6XhyRY2NpTSeEpfqsMsNM25p7ZjzXz8moiXjS8fXiRhZ4WVcBtEDu3gqQBDXaq5sN8uznvwN1x4Hfpwpger"
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
