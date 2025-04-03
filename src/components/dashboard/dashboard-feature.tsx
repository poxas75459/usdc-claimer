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
    "QZibU6bP6C62eCSPxCJzYoN5YbjG4XuVXqJigPS5byiaohCx5V4BMitbTHP4TZ9RKchYpAFBTNgwWhh2daYezgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42cArWeiqJrHU3qVYjMJDkTLMarntp6BqrgcSwHAqwXB2QBdkvGW1z22tBszBTCwXiWRzqx6APDngWMfFXU3ezn5",
  "key1": "5JwLtSSMEEFU6SiwR6vzEotju3ihmHt46P1LmGPvjVXDpo3ejp3WoeTDNuXXwMZvP7MCDciL7C4kr2yZjD3Aj6Rr",
  "key2": "2kqtDTprfvtQmGRRLtyPdrQHTJdHuU155SzKWtLUqRV8hRegYnTS16oKx2qxn3SwDZhKpVVBV2sepxbACCnpVCRj",
  "key3": "3xbpLP8QopnFADCCAnZcZETPnHXbSuVQYLv5rwuuhuoNmnQ4PPFTSHbWrRHU669JspGrJHHTSEbrtMsyfNL6rVyp",
  "key4": "4Qs3ZTiNvTmF6VRWTMAoW9mKkWT2AacX5JkjGfMcYyTuoQL3FAmL9DFSf8MAsHBoyYkXGWHwP3QTueLx871z57j",
  "key5": "3LUso1hH4TmHd5sFZnEdGZec1wDJRhd8DgxtxFtECCWpgCG78hp3eqA5MZc1CBiAWN35QP4L9JprhLem9XwZWyKp",
  "key6": "5YQF9kxajVSCGJjrnLUBGUdsQVGc79yX1QNcGxEoRkhcn6RdWYktWVAkUksmrZ1RviYk2qmoHdUXmwUDEDtC9rHD",
  "key7": "2roKxnr49k4pA1yBugvmCE5w3GVwsVaXonAJD1VgUer5FVfkrPb15JdD2axxVHVg8jFV3sS1v7hhp68PZdNX2XVF",
  "key8": "FUNXZeCrbwbWKazRp2r7Xk91njaKnCgqyRiU9n1U2dX1jeWdu8Jyu674UspUvKAhh66iFbf2Ke3kZxcHTSZ2WDX",
  "key9": "zEfwB5FDpoF4KoYzEiqZyghFBXU3MqSj8zxz6rB1ShWCeytQEbwgVH84M5G2VRRhuf3uYhP8jdXZwNAQ1qnbG9u",
  "key10": "4QtbCeaq5TPPtuHCHmhEzhj99LcM38iwBDhsDXKyt6AJgcTWBH7smx7qN5FbJhP311Ty3KAn3LHaw8r4tWiUMtMj",
  "key11": "DzZYxsjfZ5fKV56XQmtz5G5dtkLPneYcg5PLw2ZbgQYG1q22i5sRDZJPkebcDhSAvit4cjGX62Cta4pyJoigdxy",
  "key12": "4L47d9mchi4xuMYUPKhhRQuFwTmRonRGUifmoKvg1iDMqnKGSwDegTLjpeNx7eFdz2D6PuUhnvxU3kCebya9jJvL",
  "key13": "5rKM2FtPsaCiBJ9PLo4KjxbqoRuva9jQhpEDkb6GtxuRpFFGAbdG8wW4kj9XzEsRcv43jh8oGhDsnhvKWYYtm1M3",
  "key14": "4rT1Jus7RpXq4zzXsSjeDzjiKVfBRhuVS8ztL2LedTYtuATBxtf2JBUX35SRxeHojgGZnLPzFTPpq1boj73ETYgL",
  "key15": "uSu9voNsvdGWTcDKUuiGrjS2jqt6LSKroKcA21drCjSoTR18DQAFmF7kSi6U9z9kWUETJ1o2yURCmbxeWVAWQ6j",
  "key16": "574rtX8XEgMPHiD3Cud31QXcq7jb6xZTD62DEmuvNYVcMi9bj7PRW7nM7X2SeMoSRxnokx6YRrA8pdnJsZXMucfT",
  "key17": "4Wxhx6hh2hbLKwGfNg3K5LCMFV6SghR7Pn7DNBKeUvdbJMEwJZxQn5sxMubJPVxexu5WdHikJ1Naiy9nBcg9CfgZ",
  "key18": "vM4vy7ECtgZykfhtXxEoQc41zsnH35NB7vXqi3yNsJzfLT5Fq2Y2pnq2eFVafuZ2wUyEWeHT2qREZzqXdfrXjjE",
  "key19": "3sc32skbXZaW3kFafzH3GXPscnQcwFYEkpTRBPtX36UN23vHMsNkNoToosiocYUiPdJfkAwA169FaT49PVbajrmv",
  "key20": "MUfQfkwyGQNgHqcBKpY48tau5zFTzYpdevsX4Eu5CiLNbvFopSVebVSj49wEdxDXX2knrUjLGqmrynV2G7yHD5q",
  "key21": "3r8TbwHK2notKCRnunrJNtSi8yRKUN2kHZgZE53TwXTL2ptSZ4yKyo5iCzPqmNjCJg3SoSYSPrPH9mRuNboc8CGG",
  "key22": "22xMF5zJsy5HRFHAoYt85dem5UYEiWYxHNWraHCNhPDyrhk1kJrUxci4mo4XJ665Z8QPLVGfst2jRMFgVMfufiSa",
  "key23": "2eGtFh3Fea6tGhhQvyxmx1jQ2CNo5NAN3wvcU2K3TvArAr7z5zYJRMWQ9MwrsdXLHXakk8hhm4jFmaWRCwv7jpFv",
  "key24": "2d74532qHxW7xWRiqo5WTftJRzc7a6VToPhYPubwij1ExWuuYfGM6nv4msbShuFV646zSge6u2M1mtydjE2KtrBk",
  "key25": "5PM7TKDmJGyWS4GhDPM3EieHDqzrgMMUmQ7p1rw3ebgrAYdFDspSfDrM4wryBjhW83qQmEdZ3ZDFJCdaxJHzqZzd",
  "key26": "45sQytUxvnFY4BqbaRZXzmyQH5crmBNLLCJ3Vf1tDH2CwMteQVgdiqix5Tu1ohjprifEhW1RfpLGoFWqhMGneAX4",
  "key27": "2DV4KABiG12QyWQkqRgQBxH93HqSja5Cx8Nc13YMnumLJ5WkP3qbNfUzhUiuMQfkAyYiDHoc9x5wwoRTD9X9M3Ve",
  "key28": "4Vj47T5BTLQH5H2y9gqxdyg2mFqinBBtb2m7MUuAgsxutq1sN72TL4nWuzQ4iPaBiqy7u8mDQ9PPDNUu4ctC71gP",
  "key29": "i9z238zTsC7QgyyzfdWB9VMLrUXKWfVTNcdfSbBib4aVxmgFhNWg1ofkX9gaQV2rAFnSwuSrsuZc522wKc9z136",
  "key30": "2W9RX6cuJjKd7JEZn5uKL23pMUwNCHzYnBeXzwbjHtohrxS4QXLgkZyz4Nyijbq13NN6VucU3F3qfA8N5tQTTMJ5",
  "key31": "4USUZzv9fNwr881561JeEzCyfRyhHBDBrwcpKhAGswW4TKdhWCNtuiDCswZ8j8oADNx8jxoUpsRc697NfNxj1GvA",
  "key32": "4JKqdbdFgNFqR7T6crfTezUqpKPdsmhBu72N7GXtqzg431k5KCEbBcKLpoReoxMCRr9v9xHgsQYU2HfdLc7Hez5k",
  "key33": "63eZgU92vdc8HJNzBVLnJ6XJThjFjnxU8xyBfeuG1BwjQo6YkawZzBU6bB4kRFLS3yP3oZmXPseA3dAK8Q1iaEbW",
  "key34": "KZw7UbouWgBrqQgvjqiJDBQpTaN6T3SRqLQD4scWwoCZE2AJyHgry9QgJCYULUJ3nentR39QLbKxgJyZ2qnQjCa",
  "key35": "2mYvT8WubdRMbLTKktDPQYWTUQRQpG1yeoJ6ccqF8kcNPRS8qtJa9SMLYDYBgmitGRZt1LdDtEaKJvEKvkRpoydi",
  "key36": "46RFMrA1F2LQUmEbteJWyVNShrJ9vAhuVtJxD1vzHSNHeZ7DmrFD7BLq3zpL8RmbfjNtQcmxSfnKehiELAQTFiKa",
  "key37": "2dxhVtw5uvb3E6yX4rRNqFZhDLagXeU5HmWSrjuw1cffhfkiGiPjYRBL7wktPa72XesjRrXGqr2JZLYCWq6esz88",
  "key38": "9BAQKoNyJ3DULLR6vRyLcHpSzV4qmdfjEgcHy3Le3fjfKGr263k9czonU4PRHhRgs54TDEP6612qVyKmrfyPaxk",
  "key39": "2W3L4Aocn6Zs6ZDWdjMqXNFBse5dmEQdS3Wj1ZTkKJCNLUKJVRw5iHmYrXUHSRLEfZ24a7d3S5j3cQdt4zhmTwNs",
  "key40": "3Y68nANnrhbrrCry3hYMJYxQhCUxJhb9BAhtv9ZPtZ9CNmqyXALJKHuznpwAGMwkrY11R8p5FwzM9aHHwkjaXFLb",
  "key41": "3a9gxiGQL2vCisZptfs26aEkmgX2vMaTYwbez8GB8eC3Dbvgixr8jUqNHU2uqx2ASnFxxLio2p2jPaHMrpRnfKEz",
  "key42": "36h6C6cCCmH2wHEQyv3bZxxf6swDQkdRPUqpVvvB4vMVFntCqLrhyxX1ch6RBZWnFhLQ3BCX9oHjaTFqp3kFU7zh",
  "key43": "2kn8NRcSrkFmUxqve5YNauvF44KM6t8RqP5zf6scjTtd2zX2atj9zCr2h7iLU1axeKiULZQwtqt4KwuMQL93wvuA"
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
