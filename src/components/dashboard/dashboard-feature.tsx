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
    "5bDwpWSj8JZ3Rftpv4zekZXThx4TDwp2gG73cm8WYN7RYL9eyDZdVJQv2woQD4h5QUEayrPvm7jM5zFy4XDuzLBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D7AxiRiuLrK7XaRtrgiods4s824xwnPsDNBbj2u4kpzc94HtsLzLm2S1DZREu9e1MBAvQFsYk7Z4J3ngMzf6Kvh",
  "key1": "3GYq2vdRj2kUw6fN3Wgo5ezNMpMRqDWaPkMiRRMJiDJB9Bcx4WAnB1dEa9onAz2gwjow9JuLzeM7kr57BUdsbxwo",
  "key2": "38bkrDivSeatofUokBSzD2cKhNtp7CtSnfXgGpdoZGr9h9vKyHyupGXdhv2jfpA512zhUqMJJEnm8bimZfjo3w6s",
  "key3": "3iTLcVM2nXXTifGXL4QdiLgsHkiG5FbTR5d4GbeQSDhzEYEq6ivQzfUGtGWrtyYQTxMWNwu8udR1VXiYmH2LDFRN",
  "key4": "2RoAJGRxX6gBLHbFD4Fqh2EWAaDYz1HCBmCht9spzvKcvW4fANhEo2Ugt1aND67ZLLi7qBDoEuhCG6X4aSNxNYYY",
  "key5": "5rei6BtYic3eTNkDJLj66B5D2fftJKKsyx3vBDJhCjyzJoNWUbKVTuhyrpFC3CXAnt4JLmwccCW74qYJ4aPC6b7J",
  "key6": "51JxrWzimU6VtpTVt6hqhQUCCPvonQLMAz5Mfk7yjTnbobUyw8mAgdRmrw76swJowAc3KoYX8nhyv7B8pWdnfS8P",
  "key7": "4kC8TkW7Juh29LiVRoAMUBWHDfXQmrNv968aDX4Mg3QTmjCv9d34Mbh1nXddSjLTmkcyjARq2LF8VanztnKdZyHK",
  "key8": "49QWTzHgbtocpYh6Mwms7Au7tPWS7Ub8JhGNpND2AgJagvPLChwLFjMoJFDxEjMTJC1xECpAHYRN79G6uRitU1Hn",
  "key9": "58Bu5s1y6khiGcZ4TGFha1J2jzykiCGLVnha7Ni8L3YoFd4X8H5V5zWfFfuvzRTdyztvmP9mGvLLYPEps8SsQQsi",
  "key10": "f3WaboDp63JJbmAaocgK1kAmoZzFGJLqM9zVmhrwyDp9zi362qaxCJxVxtJ9Bi1jMbsr8pqseom7EuxzYC4YgrS",
  "key11": "2ZuDedst5qGX8REJMMBSAhRpCTu4CntJmAToMcCWuoyyP8R7zReNgAzkB7Mw7PQSrSFtUK5sLNfQ4iBhSX6Pyb79",
  "key12": "3t9Z2FjpoL4363Zyn2DaxSiNTPBcfxjo24FccDqtoq3Dbja5A9juNMSpHSmxLBvY7LLVBBEndujt7NFykUBNk2RY",
  "key13": "4KrYv3JFSB6jmaQc52dvP1fpRtyX8sAoUDcnbFYBvTz6uYJhoUvv1z7XJ8MEDiSEDkG4Mta598DR85KB2x6ATZYt",
  "key14": "53kg9PnJkiCGE8WZN3Gf7UbZE2kRmgTxhkmqQgWYQHSFJZyhZAnpf1yhqHt5cEWTe5pYzqF9wnfigDWyJ5U2n4VB",
  "key15": "3z51Yp1WERKkNacSeKvSNEE7qkqaS1pZ1mWCwseYFddGKwCbWoJKwbYuCkTRPh2cPMtcRLFU4maNgYV26m2oyiVG",
  "key16": "3nmTisBYVkjQtD6FU21M1cADyh4iqQNxSVzKSXKpZFHBsFgsikqg6ZyfqUqvWW71VLpoFhy9oLcFmL1sLfCUkrto",
  "key17": "561g6K2JAqUDNAWEYzNtF7u27vwVZEUhQ9TZSJeGhsZYqwQ1uzZ2GvB5e9tptD2avg8tqPMe7QYTtop8f4de3rvK",
  "key18": "TkRsJoohrHHdintKyZ2qafgr7fYzj8KVd3V8LvJULUAjcs4ybacZHyD8f2Rm4y2snci46GQ6MeokaXaeMpejA1i",
  "key19": "4hRZtSuAo6Mu3EszSYwaKvVpF8m47nv5LkwCS4QJC9JpGvakxHNGChrgik4rjSYJufGgY1AdH4BK882pUQY37B2L",
  "key20": "58qx13nBFT23a2kph1CY1WuX3BqN1R52o9ZZhZeqoAAnobrmXHMcDpLvAUZAT6LdsydFpZMR1BPTdvsxWcZhp4Gz",
  "key21": "4DwsdGZ2eBhhW6VNy4bwMfzh6h6tDxCzSaDYrbEAjKD2di7n32v7G5GYrwSif6xzQ9rv5B9eZXoJcLjRN3h8cuH1",
  "key22": "zH571NxSivJMR5kjKGchEKQRS3b1QAqN71XVxohfAE2upDCAEpQYYmWKE6iaBYcvSN6dvCzBpwrha2ftG5B7WSq",
  "key23": "58JRPcRutemXKmXTHCMegbYHzEgkHus4h1p4grGhxnkF5W4D2qhp4d2kGd1CwW1bZWEsY8n6aH8p1p7n9zVNYga1",
  "key24": "NsbsMukxC99unueQBJAkqewUHfW2fd4QnTwhPFZiWwMLGeuJ18av9SfWipMmZHGi4RAbybUaaJ1MwXCRVY2Zk5z",
  "key25": "2cg949EN8CWpbSD4kqy25g1SoB8fZLYmNNZBe1r1NUqoarL6DJZFYEeiwSQVg9Mzz7n5jdYjUx6fWaQcUFySvcDb",
  "key26": "5FeWAs1FQMPZESiicnGarcpzd91Jcg7toCJhT53jQAahCs89V9GcNTCHU6fwx3hhXQ7FbyXb4CHyn3dUxJu5X4r9",
  "key27": "4SKRkKm7sci4eDUt9n1sFdi1xBwYKuGxscWhim2RhKC1ePqkmaUmPLSjuYjgetzkvF98qnktKsaVp18sP6FUi4fD",
  "key28": "5okALDgAUSSVaKZsZL4ufZ8ieTA59vztBrhxe1RjX6kffhDp78Yciw7SyrMkAhTMsgWrZkoreDFYhop6c9ENPQc2",
  "key29": "2RhFVqJd7vWuRU9kMALXR5PHW3FngggtvNRuDq9SRqCowXmZwjCqtUsLK2WZMmbCRMyPKyYpFTsstcvx2gH1DMVZ",
  "key30": "4ceF8rypUj8cUUrM525xbbDLK3Rcd2z3AnxXoSMPYFiikxUR9Fhp6i2UZ1YGNfyS8hEMVjkKwG8yukUnJRwdYPYQ",
  "key31": "5dP1obuGD7iSGRnf9kmjPTfaVL6pfQ4DAdtfpnwDgLPbHzJWRDhdwkhW5kG6GpgddTxEXbMJL6smCaCTQtKGF7rp",
  "key32": "5zzB9U7dp8cc1Qj6acxeTqtzAsjUMcbRWtnHCodCyAMSeAGed9tbXMQKXnbtdAbxWfWw5aGAJmCXM6Cebr1t1e8M",
  "key33": "4ya3uSprPMPogW53ssVBfs4HF2yBWhG3Zx4EZSRsU6Bz89CcYV5tU6TRtXBqKMAv81DFGYPqhqFVMYugvmXBAh2S"
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
