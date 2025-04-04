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
    "5CHeBxyU2fpiVnTVpvMr2oEXoNAPKX2xqrs3Srhng46yfL3UfNa2rbbELvArtt651DDvDUiDcfRcCWYzLchr5J86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P7Mb9XnqZbrbLS3JAWeXYAspuyKWxLFT6PLhQMkswvuVuNirNi7yWhSM4hGFhv8JEmRYTaEaatPS8xZK2K6ksLp",
  "key1": "22T3PLfgygk9kj2uX3BW963dHTGor6uoMygaFkeW4GPjbncF9qVycPoW4oQSqdLbBGJ3toY263Tnm9LTunWcLWc8",
  "key2": "5xkGSqAvT76koCzqMXGGtCSoSKtzzxUQ6eDSGogR8EYLnocNLDQPtUfYF27mrPHS36zDGMzUYJmhVQdjBrUQBs3E",
  "key3": "2pjfFDgPTSMBWNUw57GtTyFQgzUww5BJ73hSgmSrhTyH12GEq6qLX9AQKZVnVFwSdyTF8wa96ghHfkjFHvZSQEdV",
  "key4": "2NKwRzccHD1fcap9p4drT1t2FQDtgnkkN4TaHVxGCNb9iVQQQV7vDz9i5BnnX7LVpdi29NxZfPHfLM7oxTSZF2kC",
  "key5": "cpGJWKBKgdszE3s364nA2yAK1An92tCDhUXZvY6KYycnsFwYzaRaT9i4bUEk2rwTVa2sQtGLnfVBnfeQP8CfrBF",
  "key6": "3LPj2PiqoqBavrYPTTJ1uJiv8kz9ajmSunR7M9U66GX2ji5BPo5CKKWVqddF54vVfXuf8ybX2kocS5TbxtDZUukK",
  "key7": "WuRcrtxKGWsB99EQAKCvhvfHA6ScsafFq1tNAK1Bea1iCFV7VJamGtyfhGDxWDZFgh3K9ot2BaEeJisvez8NoGt",
  "key8": "4SkySE6JqxZnW5Ug9RK5NwdAaAbKKHxGmcVifNr7f2Q3UU5EifpHmqx8MJezPm1nem13bVoqjr5Dr6cM2xvCfrgL",
  "key9": "2XcQMy2xFvDtvKNmRCfLroNAfX8sBTDuDpE8VjCGGCo3bvMW8ujWYmk7cwaiyjD9EofH9aqCuQdBApWH3eD8HJSY",
  "key10": "4qApYcL74247Ye2V831rakBDfHUbXnhKesbU1moXahZDJPVLjRh2Je2F4YGz1FLj1Bs2ppUpWFyMQ4hiSwpSxUrA",
  "key11": "5LvumH6wdtBqhwQTqZikGz93LLC5XHToEey55w1uN7MqAVhnQEXCCWFMpcJBP3VGqnAna8HReEAsY4JvJrvpx7mc",
  "key12": "41w6LyzuqocLr7Kkwu71ZMeD6nbhR1moBbPpJC3fhkGwJAsGs84daNwzkfHdBr81Z95fGhhNdx2S4jpkPDQHMYTt",
  "key13": "2PxSP9ua4pSq1C3dxbSACSw36GDSADvWA4J8uVkKADhujmM9EmFF6zQVHur1Pnk9LAN8J5ea3m24KycQDCrsU9d6",
  "key14": "SPzZZGU8ZVbgWKmmQaeFN61EGMcRWUR9eRAcL2AC12g5VWLeQq28LzymZrNVZViJKDrVG5hjsaCLkAXWtZj93j9",
  "key15": "5eSHshK68211nUb6UZdwEt4gyJnNrW4svQCQrkfc5s3HjmocQ6HhUhJnyKK61TBnNxzmYcrUsB6m3W69Xjo4nus4",
  "key16": "YEa6oNbuzLsHQdbdoM4ELAo5sZtDHSzLtPnH8qZH9Wd7A4ZEjkJqoMiaBxQb7sq7h3bStEC73suFpbr5cKMCZGq",
  "key17": "3NJYvxn8LruBGBf4PDmwqsmHUwwAeAu58LeS6UsidNKDdaZpRPmNkeTvgSHXyAvV1FCRg6pLjFJH3V9DKgALco97",
  "key18": "UaFwd6xmLjhDVWNFZtsfdjrGkwMCjVLA3nKpa3kHfk52UQBmevgY2piPi4Z2JZurFTmuzxYiutTU9wpbRQGJchx",
  "key19": "2Cuk4cZiX7wyBXYSQjoXfugwoPAPcXZXDGZZvXkGgkuKKFxeKBiBvssfp8wEXJfyNAKCGcgjD11MeJXn4hvkFnev",
  "key20": "5H58ZicNLtu2U6evHQiucH2ArvusytCQ22VUMTTKF5q2EBpUysnPjqPebXTZnAjFP9vHPU4YRV66PRsxytF1pNec",
  "key21": "396ze2p4wmGnL5AZrs7rrLkPcYa5AUF73Bkf2foZe75TqmodQkRxdkZAbUuGc7StvHxi6Co8Pv1M8Wa8Tgtjwj8E",
  "key22": "4Xo8KejafNjrCba5So9DHscpxYm18DX4ARJT6UZAtQJXZMLyTt3z4Wq9GguWMwzTH8qkNTjXozvsXrVJaYpvM2Ek",
  "key23": "5RVNBmc9kF7ZTZ2HCcfzan1JH1BFw3uF4uAYMgbhNoQPietcaYQScYmumjyWdBJyY5Y7Mi12bDgW9zpKs7knvFbx",
  "key24": "UGDSaQErZPkHzGsGinu5GB96abF3JJWzD7JjRP5FXgYn1tFyAuiHLrq7BkcaYN1tvuJEeCdzAwitYwp8CZVgRAP",
  "key25": "3F5g8tktxyQ3S5FzCasK6JEVTxdbRpMMQnh73xZyL8MKBoP5zpKnquesyrEqFMM4n5D9hksgWb1gmDySZTn2wvYz",
  "key26": "kRdFeAySUM6um7MNrUwbcjmELRxMu3r3Q4mjYjHSNfokmresgk8KjNA9xGHcyiiHMuvjr1P5R2xqy4FEjz4sVoS",
  "key27": "36RGwb4CCaMGn8EzczBHgYLmXvmzjRYeS19c3SqD4oW1dMgaPW4Fxk15maq4gMeBgP4a2LdAVgcEhcKHZ2chEPrF"
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
