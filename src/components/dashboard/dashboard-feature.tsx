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
    "3SSbhFPi5vCbtPfyVELgjNwa2TRFQrQ8m2f4EyBXqGoyHoGry9hLs9BWFMJzqJapanaZVR72mTYn3caiErTDLCQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UTYhZ4n2gJt5apKrVxqbGygYkbhuLBLE8AXgewsE4qMuNvG1pB6MRy58a7NP8GXSHBnrJetCiBd9iVmbQa7SAon",
  "key1": "3NKVMQzFVL9T3GvZwzBP1xzri5Gzdex3LdSkfms4aEVH1Ej3JREC7cYkQGcK3TP6s4oNLD8HBcojd2kMRMQaqgvr",
  "key2": "5LTTZ2EbT9qEnuNZeGKnfGtY8ssyt6WTLGrWLagmF2Jfe8QrhCxDv5S4DY3MFg8bR8FkQUdqRYPZco5Y5xAJaLDE",
  "key3": "56YPu48gdXauQvK9Z5kBpcQhTcvjt5RsRANM8G78s74rd53GuYpNWTZ9ZRBLqAMp4mozeTCFpb2KuPyaiF8R746Y",
  "key4": "3AzzeHTCT1GVMw43H3xZgzMpM6EBkwLRXBywqqgjBXcMSTEU6aNHZHfj9dqCqxd3VXxh4bQAFMS8AGmD3DBhiF9S",
  "key5": "4S3LMh9dfpViiXpN2bjS1JYeWuGnNV3jxRZ77V8M26jj2WmcC9LrriTRhVMARCbmEoaTUDz3RasdHdXbW8rygaop",
  "key6": "2tiHx6M1mT8jMwn5YgyfVzposB7uzRfzQBAKaLT9XPy4QdH3tdWVC11Bo2wa7AeCqM2zv2nsMzDXEoBQhmYTnBEG",
  "key7": "5V2MbDtpKhVar5yuTysayBP3z7AqWpDXqMkmsvMoZr2p8fSigUHfY5p9X4bXBbHsiAkaas8mWwuAGDeDkQCJ2Qra",
  "key8": "5FJewWBG8yV3sof2piCGnDFSZBvrycwSjcSeWVbac5Fv7PFC1RRRm6ubY2YepHb5yeZ7rDrUPvQqBhcKYFXd6BjP",
  "key9": "4oSTagx4SVEUoUpx8WURmxhFfcdFxoxEgTeXZerfEeMBrwzkcnEyD2Dzu6q6ssjYcre6UcbTNfjmbkPxv9sCcNrB",
  "key10": "2323iUzWFzZem8sFmVWaok7Ri6362nin1eUrQK8NHy2Sk3zkGmHoSZpYs7jwzheWM79cVfQyo2gfYmWcC7uqhQv4",
  "key11": "3aHA5Zvpn5uitjYyEA386zfTPSo3wwaZ7UCNdyaQPnDdkRvt3xUS8hJDFrc4KePSMfbAbcMh4SUwuoLGb55fkvGQ",
  "key12": "5DkqhnCJUESpneRjXDTnFqPcLCGa1p1xtWAhfaK2vSQyJue1ehdU4Lap3mDx4Z6chPiqHk1YWBLLrD6kSWbG73m4",
  "key13": "5RYSbnbASdPwyjpne7h2VfgK52JLpnvtW6nUrqtt3maStEDPTH86KXeC65vFQEoUUZbtFNfFDaYKzqB3o7f3Dh2J",
  "key14": "65DosS7zRTAgieaKfRWTkrJpLTXUWrJ9W4e4QirYGy6xn9xgLXvz8iLmi4g4HaQkNoDMEoaHUooGm1E2iGka5Xf4",
  "key15": "3LyuV31zNKfZDiwSWph4KMwPGRDPTFJdSFE9zs63xs4PJAZxPbCGRWGHjHRonPNk167UdUvuDA2vsGVjMo5LYmPv",
  "key16": "5NW8qGyrmimhPoxkdx2v7GMeyMe7TqLg7As25VxNzpq85fpCAfaFmSwBxHr5WroadTS3JVThpyopNLBgxF7MpRys",
  "key17": "57AfhKz2JKvWxtgy7iEqZ4FnCDMPiBHuqzi927ZoE5kMhB9XsX6akNWRTZZAydK7pMFdSqCLYfSZCoYy5Tb2Vonm",
  "key18": "5rw8KojSyLgC1FtAJHgmY9P8pFv4VzSoZozsfNQbDibzX1xsV5eQ7YVgygwQmJj92bYWsgGFjcvHvgcYuEw99UX2",
  "key19": "4fBBp1xXNQXMUsXCrEzFT9RMEafhabtW1QdgcUvvmicsjKrenmyTHWavmNougUEf3SKs7G1KPc9AwWpwYnRYMfUi",
  "key20": "5eWd9hfBo7ddt9RGj5HCWD6fu8Pa7ipVYoy3sQShrqRE584GHverpUCoHwDvWfiLAb91aoVr2Ey6LEcDrJNp5D19",
  "key21": "3Wn74KPeu5ZScCWrUjaxXGsAFkoFX6M13qz4w8b31egv3rH9RtMNDvJtkXxciepZUaNShgPFjVq5bWnnBTGJmX55",
  "key22": "4di2tEBApyyK344tGCQGbsdLcQkb19G8LzY6B5b3b8mybmqcDjK8GAB8m52SuZopuETALUqBLPUkrQAoMt9BpdK5",
  "key23": "4XpFwoXoobf7FixyiJvHQgATouU5LL6hFQvbj8rHcXLn1YKrpj6hZacMD3P77yn2YnzTEw5At9NxhDLWkkNJaQqd",
  "key24": "98DQBw5EDSaLfmFVnzztBTPcuhy3qWzTZZYy3XWsUHt6b32xcPVRjuarkyTuipP4iL6WDfo2KqTdEzrVfrU9GhF",
  "key25": "4zhnSYLcX3Kgh2sBtx9SPSYpUf4ovwXSw3DurJa5VSjMxDn1YDgCCTGXxCbnw8qv2YDVmgqLPrvsyZZaXW2DNyEp",
  "key26": "5oyRX7rsMKeWkUTGCB4qGSwC22mULc2t2wY2Nd3pPFp5jRXLUPK4fRmAmxYvriP5EJFXwzQa4MyP8CULmyEfWRNA",
  "key27": "4tT7f42ifFTJfCwrbqwmoVqDDhv5ZY9rhkPyRGPFjvid6JWVPce6SSDSdMuaNNDRYUn2LF92oeXkyXserCmXPHJo"
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
