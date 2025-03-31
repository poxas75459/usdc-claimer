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
    "5i66mcYQMVjpUoQBYjiFJsbWrL689ZbhddAcjBZr4XVVg1DsNmTchbNJumHNR7yhkW4LSynRdQqZirjF7FJZqgaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MeuuPdmJ1vAHLPUfkDArdn5d6XS6WXry8VwngDZBN9XbsiSiPuRzjF4FsnypGbgHchgBfrcvrqYa78TJuqscSrm",
  "key1": "5qNFN63g771wtmL6HHpm65jMVJDvknAGqzLe198gUdaPaX4U7EDzaAg8tMy7XN5c3M1ofYaGktT5TW4Uje1GHdaC",
  "key2": "4snTxbk8KdQ8XtDMD9sAmhJsGpD7KfsA9Bi35YknHN6ehFobXnXznqyyegBZUVjUb1jSJ4u79kop5Ec5QnXw1tmw",
  "key3": "2oGy6efeg41tE7FFQZKpccsYDEf7uXkyASiDCCHH2LcPKPQXo5wTWdBwGDmjg4KQLnAxBL5iMQxuN5785hm1B3dQ",
  "key4": "36ZavkgKUk8Q1YsQsJVyCQhBmPsRyfbq9HVF3SXqLhEPbZiAS9maafwTowwgnbFumKdKtU5wzMZs6yPUdkSe9fef",
  "key5": "5kRxYwCa9my8144zybzaKNPRm9EQb55BBi1cZb6eC6YEFktjNnn3wweVtpjcSAiQx2HZhs8Rwxfc2urt42kbsvmm",
  "key6": "67pDogauxqQXLuUw7bW58XxwmTQvG2DbNsVfC3ANm9cG94gDSp1ghMZSEEx9ca2EVhHagdmPiVFwitoEeiSjwTS2",
  "key7": "sBN1C7WSSE1r7Hwjh5D6LEMxTPh4mNG69vsUQjS332dpET9LxCUEinw4RoYzEsMMQiCjttnNoL33j1bGmLof6UA",
  "key8": "GhY3vSrCgtMLJEePaRVWAwsBxcsQPc1L1and2sA65Z3cKy2Mg22iowepfGkDk8Hvmfjqz6ZjoaAByRWHw8q4RQF",
  "key9": "4SqFskWz7m3HEKRXWf2v7Zrjfwc7erfUEcSzek3qkeHnVRSvDpeeAUSPq4H1yrmqZBRL2QridWgGV2QM4G6EzKzk",
  "key10": "25uCa7aQDdXir22x2dHHDYPPsMypMvnC2NnnywwSoCb5GjpRvW2KDdW8CAGYqnrQv5wyU1TDApdY19xn35xYMPVd",
  "key11": "4o1gNMYsr4ubXaxcyUWA2vMtxrXWdp2gBkHkbbpMbSXbBZEpfjKENFLiZzMWhS5KdfSm1GS3ujV3bgMsP3tTe7HE",
  "key12": "31pxMneXHo2ZuXy2nKp9zE2C1CWXoorteuTEdUFesiJWzqJSsL8bq5NaAiroUFJzNqEwQ8RRb1tnUc4SCiHhDMKc",
  "key13": "4bTNuPeKTjsu3fBxUj5cNUmTMT74BjWyQggiT4G6rs9LXgbrKZN5v2sQsthh9hr9bFgTgcdztichNKLQjwHiwEup",
  "key14": "a91by1Sq46cTka6bPSb71CYUuR1EK1suQR2CXLGqXEA8MmQ1kJETso4t1qW361Abb2ogcTnw4NgnpNnp1Likuhx",
  "key15": "3a21yd65GCu7G82xruh4jquVAbuAVKQmB3rEiMmiRdp6JeMYfENFDQJFMtqjb2zyjTGr7BLwSM2TGbEY4vP4mvgX",
  "key16": "2rpUGQM5pZUAfDAkTAUBRjWKF8CcgdF7Z6ATDNoSBGjDoQQUq1KGVDWYNrax4bs3Ww4JCMGk4pBjxSyiAoNey1xi",
  "key17": "3w6yj8Txd1dUvZcwZ4cZGxcFi5v6CdqSdvyotWtSKMcEt7EMQcM41gCHd7eS3CFJPmiLCA68XQMELepmNZXtkgj9",
  "key18": "3mqPXrZu4haud1ds6SDzRTnLNfoUXpzny3eC7geNaFb2p7xVafaFZiR1ox6DsxUbvJgpKJKGAfRgsfPzhraV23rp",
  "key19": "2PD7uNoADcfRFS1UK17r7ESEfjuJFciaJjz5B7Wy1enHWNa9W8MsooQsqEiqF8Qwu1hfujuG5PNAa5zCVxCqf24i",
  "key20": "2KbyZsy6QWd4kjAMi9aGDtf58ZN7eo6qDyKCQXFFx8xtahXWZpsJ9TEJMX2XpnQzkGXkwo4VK1hYYA4evcuNGT8E",
  "key21": "4jHvNHjtXSvirgDdvhLNQXpRSyH3WM9NLXXkyzmsfN47RWvnw8NxHDRsANb3CKSskbLkMF3RYAP6RwgmdEr2MrgY",
  "key22": "5PV42vEcVZM3veoZyp4fkmm5NE9CCPNyvzMmxwKotieSDVDJaWoFi1i1CUdgZqofvCSh8j3eGrX3WXNsBFJmRBdc",
  "key23": "3kveGCequ32uJjeXufXoB5tLuhXNzU8utZoiSPerm7NuM5VNzmt6rEeVaWDxZG2giRFFfg9GxkjJGDGcZEiPVcGW",
  "key24": "4qkzyYm3sB3FiCafibcnAaQTRyRgCXWvrbpPCBHsYsfYccnJyBc5V8ZXZFW2b5Yo6jB2Vt5do6rxtDAHgxxUuzSD",
  "key25": "5mv3W9ytSFVeoGaoyWWLdczMpkfGk4Y7xtG6WEfJ7pxGzVya2Em7GLu67unQwKyRymHJESmJenYPEmS7SBa7tnCn",
  "key26": "3zXStkQSWYFAvNsLjfAWRHzRRjwtPaGaQHmDCeCzW8nPm1xDsT2ca98mS2vv9yWkH8LVArZ8xPNBFQQdmaKEcfwD",
  "key27": "4iQwKYcQEJKb8tKN4tcRCXLpue3nGHr3hjq2zgvrKQAwx2MVAShEmmbk4un8xYD42tzt96x58MWT2fafiCZRhn1g",
  "key28": "EwouQLtfVTDGLd5ZBVr1wfL4P5KuutRJnpshS7gpU8a8znjaw4rE76P3vvTUbrvbjEWVJVbcusG4YkYdNh1ZhER"
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
