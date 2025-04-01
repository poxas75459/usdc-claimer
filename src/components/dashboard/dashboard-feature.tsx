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
    "3usa49445ojFM3X8oqUDZFKogiRSAGcfBGjNZCS12doWHEkBibC67bkzYHKRrNaMmxqrKg4wGzSBKdcoU1ezy9yL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wGAdZje9aSBT8xmFNXYDQNSqM64Ka3db2Ntsd1pkVYN3i5H7JU9MpJn56hhnKNRUqB2J2sVwCuKNKqXrnGEQov3",
  "key1": "3BEuBVYCvFDgMXJCtaGKTcs5j8uBM1YvHqPa5cjEAL7TvpWLxME5kLBvs9WjUt2XJsgtxAub2YLwf9uEssLgaUyu",
  "key2": "2zr1VZo8FKs3uLCp99mVkyEMWmNqyyjQtC3HPHGT1XN1pbFPD4PgWzQ4cUjrgapevWAz9h2bZZjdoZMBxoR79hhY",
  "key3": "2m1oLnFH2MQFGXDBmKqvx3LqGFhd7Mk3f3a9HQavX9CcgAYtETC7gpatny1Rq63NUj9Mi5u5gyrTWEW51zb9R8TA",
  "key4": "3UVnW9ooptba2QK7iqksgZpGQT9Mrv9R8eP1ZPByiSxR2ZYuvyS59UngZnj8uccuz4pxB4qoWLQwnNEwCgpEXjp7",
  "key5": "3Cvnd9NKAftvPmrep8dnYy5o8H2msxW8npFik7GSA4KWkshgvxcmS19spmUp3p2Mx8ad7zCMRf7gjJC7LBcNubNp",
  "key6": "5bXNevZqJPs2Gajjqdne6rtYFVtRdjWGGoiWNToFVUv7nxzn7Q3bWNTuPsom84kNarzQ2v7T5VBLuFMmu8J97yL7",
  "key7": "5tvktKUBvPgPzhurZp5TMxrH2XGijKFEfjdERdJ5QiBtaHadtqqQ9vhZ1CokzTnFEiDrnc2nSKdY4rxJKvvEqYL4",
  "key8": "5seCWK1xk8vCY1qiPkg3LaWTsTLRMM9Vw5Heha8bqBEE7Y67Q4k3u9a2o2nBzePXdNuurtZdWTJUab5VFodkw3kh",
  "key9": "W6zikANSjuCgVKCwzCLni925rSpyJUDX4FLzANCyUpGZkf3XwqEHfZq981QiNimqsPqz9gG9kuZf9huwcEGGebN",
  "key10": "5o2pyHkPv81VGRFpvCQb79kBd9JGx2AKFVj6u3iA46do8cngSVJMVfGwHmtCoHteoods3k6UFMEZvuRGQpNX9UGE",
  "key11": "kQ8N8MaTcPt3MyzFDo7JWQ1iktMbfnNKnaLQjpaC5MpkeWjV8Q3DQcmYEyLKQqhpiknYR2Tj954YcsLgTgM7jEZ",
  "key12": "JdHtsjcZTZ8maguwxfLYdEkYx2825coh49tj94YbuFfC7cjYcGGNGLPmoiCc8qJrYSiUsSTNRbFrHeTf2FpTp9C",
  "key13": "5Ke5GEUe36vSL7NXrPa1VCAKFPJx82qyHACpdW2rhung45fS7Ffbc86pZRjc45HRT2W8wLtwgCtLgaAKfjBvpyPb",
  "key14": "5wuYKFUSXsmP8qCnHCNPaLDUEyYm33FNJUxGuTF2bCJ3tVJEWeh1pX7vFKycFAWkC92HWmoqiRMsNLEWHz4Jzkar",
  "key15": "37PRTDjrpEuT73hwQSxPynmZ1eBfk2LZbRBJVHfuc6uZ5qUDcapekFmVCGr1rkz4E5J7AouqMo1SxABtYPL8shMR",
  "key16": "8UNch6htaSE3H4j6zkPKpzq21TQaJt8FM2JNWJZKyQm3txhueMAuj3gPEG8iwAfik5JTbWYi6QSmZY6JGLfBQ5P",
  "key17": "4GCjaazj95kDM7hZXsFNwykZuEja4UokbjFgzGkHjmP7b5BgA9SWCXR29aWPG86rnP8dPJm7jxyVWDcFrtq8C7Uq",
  "key18": "3cnmow4Kw1jCWP1PVZhq9eLjxvCPtSvcGNVZxRLtXkUogfvUYVdG5tL8ccUotW92JYHR5bbdhHHAXnb9xuDikoTQ",
  "key19": "VLUSN4wEu7vpY3XUUhGih75JjFgmpsKF9WGzGNja7BrcMHDTgM5vuxkCsfaAk6nMngnnijPje91Hv83nWH4pWM8",
  "key20": "2R5uCymyKFn5d6YAQ2iT2eTN6j7ng8MFYyBkWUcEUwavwL7Xyhxc1r87y5uwoWg6ESpRfViE1unRxvKZAR49YvZv",
  "key21": "4tiFeAEShkGDv4y1zERX4y3vaM1fbZNhPXB9HMmemmLFQGt2C2UgUzkopzCWCZjjYfqys2u4ERQ3xrVteq46fxo",
  "key22": "3BA3a9JiWbTifgtaDJqdeX6Dqn7XxDcYe2kocesXLCNamwtn1atgjk3RribkMP8Jzpzex6DLh8FkBT9FcqpQ6wS1",
  "key23": "4nsYmJR1ebWjEdXKfyokM8PGrnre9UxwM2Ma6pMnET8uHnXQRh9fBDb49M3Zca2T7GtXNJoMuyPCQJ5eaot1q7yS",
  "key24": "qoRcHAm8SntX7NTbH5Juroy1L4VVyE6HEQ14tczaEGCNuEMvVBdPCGiHYJQ2BGN8FKhtNCbZpFd1Hr116D1EZhQ",
  "key25": "3mqa3VSuMJT1t3j5U7WaovtSo7jdzcA22DwwmoiPBadHqjA4zi88CSTofgRdEYbCMwPM6eMTXnacVbzi5c2bmkWP",
  "key26": "3VhqsiB5U47ThktfUk5qPC5cJhvWPSeDSkx4qJMfTXFJMgqjdhDRPEenRM8EoYMPtJ13qz88nLbSYBv2tfANje58",
  "key27": "2DibbSDj7UZAjYTFaeuPKBoSrfzedMzmeVnzuBRAi25bxCDTPbX4JG4Jn7Q1TtgDnSSk5ohRfWxLty4G4Ns9G3WA",
  "key28": "4GLdEhM3fHJzYHrnC4AfkTXJpYB7JNUuJWLKcPUvGUa2os7rBpgLYNynLjAgLZ11HhuUSj692SXmxFNPTpWRLQGS",
  "key29": "4mggAvD1trJTyKjh8j5syVC3u2Sa26MVGSSQPQGNbKZurFgpWLYtTeuDWsoDv8gt5VB5ZGVB6Mou2vnDPPWezdZT",
  "key30": "2tF8Zw2TxQeZY64Tmy2UENnsgdgv2EjnHAU99t7RVhzHesf6Aa5y8akSrRxgUnwy5RWDuzbBoUV7PhiuLACRjfHu",
  "key31": "2UaHUuc87DP4djznCZy9hasf9Kstn24sMd9mEDrxLppWJ8QyHWNwu8u7v4p4HtL2WGBSSzLxQUK4NyXsPfYAP5aA",
  "key32": "4AMftSfeNnuMEGEKGCmXx5YgMcmVercVfpzdkRNkTzm236Rz8grv5nraLF4Pe6NxDPvgtHJ1qBdQafS71gfu42pF",
  "key33": "2v6EgoxsYvqBdNgLHbWKQpEemZoYd72axfxJE9PNA3n4XCHXCuz2p1yjRxb3LCEWN5sLftT5FT2TSb4aiHt1dDnX"
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
