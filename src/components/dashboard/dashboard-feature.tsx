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
    "2TriEN8csjgvMhMoFJPi6WczNTKncsmYYj2kvDxED1o5sn29U3WMDdwriVvQka8aJpaByFQAcLHBWYHS5UX6QKog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DgAWBDaxvudV8nonZsHxJmeUnza7hA6BLnFJqq6szinrJv881KK4CVQN8X9M6b88GccxjxQvQmyEFx8aCbwCLFW",
  "key1": "5ET97fmPsA7xvo7he2fMw8hGtT5XRjrYwiY76z8to5djZH3mgy3HtwC3x7zkKDQicXw1PrpvjZZUSgCkYmibZZoY",
  "key2": "2Udn2BTQshgSDz2pawRHy5PjBDV3hLyP26YoxeWNHV7GZeTbD3WSFbGAsTgurF2ye6rdRx9LsFhMZZW5tRmBQxi7",
  "key3": "zF99F7M8BVXLinzJRJxngshjXjJKSba8zyf8JK4LGE8eLCd6YAGXtyAhHKywariAxjaTMccGQvASQCXvyvuQQ8C",
  "key4": "5mN116ws29iSavy97E6uTt7rw7y8PZKELLhmu7WXwZj6jCeXKZYKMu5BRbCiAkuZRTsMEs4Yy7P6ZyPhXAK31bSe",
  "key5": "zQ8f7LVeFHTrTMuRRpViU3zChh4131vXprT9GeBzfTF4oTQYYWRShsjxsWJjx8Xb17pqvFGYCgcy9ECNG35mYd4",
  "key6": "xMC1zpdX4G5N6aauT9kmVdpYGNTUHX5PfDbVMCbwqUAx3q2m2M9nPbAnGb9nQDLLSmV7roSsPYo57seZrrj6P1L",
  "key7": "4Ctv8iJ3pkKnWksWzixHHf9fmKpyMMVmuoeKkZynpYpofq1UR8DtU5JexBrT31U6wUp64N472By7YkybuTRpKHRF",
  "key8": "4uZBqoo6F5Kst7hYofErEEX3hbZz76fWph2gq74c1rQSzWfVpdd2rgZBbZkn4ccYTPHiKBixoq9nnJXtxFWAcBt6",
  "key9": "5rHZekSQEguZLKuCtqV4vxw9PVWsX51RQq8TKDeiFibEqcoyijWoLz6cFqYSk9d1TBoyx9CHSNgzNh9nPRjYYYCS",
  "key10": "3YPdCTwDDp5RjeSBoC5JSCbnmdgcZ9d31gQMPFUnGV7Q29nCqAgwzSewwJukUf13bfydQrYorVSMvvdZdH7JHapB",
  "key11": "5aKbLz6wMZu7zZDihtNjmTkYUwLHRdKZ3rJWVf8yZyqQUxuGq2duL32Z9c3du7nNfY2VNqbKcUci3PpKkh5CiaNR",
  "key12": "RZoeNeYxFeHasZPG19oZQyN5ikRgDtU2qSMGwKepSKZQRiSgCt2EPKiEbgfS5n1AB2mxKwCKJDngCKUojo7PDNm",
  "key13": "5Thx2CoZJWuunHKd75GeFjiSWqfcDMr2oYnLpvgyXByzKwjnF4vGkEWhmHZqXoovvnypNnULnbHfHdLM1aRPSRUB",
  "key14": "2HKq77WaBm5ZYUsxRyzpopn7vg1LVywQrHr7UF1NG4YfshRNyPXY4JZa2heMK4a9X1x4KH4XN2Yz3a3o5aHHtPT1",
  "key15": "4wtV7REeRR9Wb5pMStbYAxq2kp141fFZuLRfdzuCj8JzUypeVbEqrwRZt3jbXu6WxKCUSQAKUSHVPHaJ2hnXDem1",
  "key16": "4ExKcVsrGhsM7Xn8G2UWF1E6xKLhMK7Hf4VDCSCM2ThaWy3nfV4PfyZPcjQRN7YuhxPA7PGziDwknYoLLPDNPykR",
  "key17": "2fNpaEPF4KyvtwyNVaJs1PgieamLUeKwGDSw6RPosiPuTBQvaSiHWuzSt6DXm6rF1jKxE8ysMrnXu9SKrFwATydU",
  "key18": "WU8U2qHq5npisfZPmKfxv1PQacq2pgtfcBssEkasVXrEmfP9n2t4JoDopDcQeuVM1kSwSaHj86z39RgqotSsDHd",
  "key19": "4ftGZvHJ4Djs9RVbun2Y1cD9DQDsASQdprv87LzQYpMD3KMZVZS8TJmfPVeomBUnsoWr1dDyA61TeQzKwYPGeKvc",
  "key20": "3vx2jniYqg4Zh1gV8AkvDP4uDvk91DCinTcAtiHJRr5rEp7vZdMpjQ1Tvjri6hhxorbDZVuixQoYBK66ned6iU4t",
  "key21": "3inFfPc7rJpAssSgt6Khq8DW7a2C2YKUhkyNkmvc7Jf1Q92jzCPJv6Y996pt8v6K3LVaQJp4f5qqxKVy7aB8cmZS",
  "key22": "ZYcLAfB5ac2kUnHtHoeAf2TqYE6erD6UtBfNURWVqp3jQypGA8d1UZqhTYy68gN82N7WETnNgKcvpGAj2chv6qa",
  "key23": "4FvAqeEPB7oUHydw2jsQP3UMSJMynAapstdq74a31tsUEj9B7XC5syx24v8xeiZQiVZ4Ph1CTEVRkPv8TVyyeiS7",
  "key24": "4TkZiaS44kBFZjNb1br8xpkV8XTSxNjgpePLD1ziZEPmFANbbExZH24YBpbWzVd9idtEP6eo2Sy3f5mPvij9839Q",
  "key25": "4bAwzRSymM1wNBzg7gasdTEpGZC6RFc9ybpdCGgDx6w3CzqoRHhBtmi4CJLMkDijoe5835odQnCUpdFSQWXYDofF",
  "key26": "5cMYDviMEjC8epASDq2gk3MwdkH5RYYmJvcfcQarstjLoudQ9vG4zE37k4y9k6xynXTweW9wXHW76MS4D93EWs8x",
  "key27": "4xtohaUidwn4qRXKiAt9GcEgKFJ4w4qGxfpvww7zUUnG2PwGVFEvkgJ3KDiixz9GosbARwtj23a3iQhC2tYSkbDR",
  "key28": "2VCp1Lt6JhWLPyTxpRWe3EZb3Epe51BzaHUNUTjoGRJcvXbMfKfkkbRJ5f78SNghyYPQJQLykfcqDxYiCvsc29wB",
  "key29": "4Rwr46dTpGpXyNByhvJJTiHURFGGkkCwjFbkNC9qrX9xZyh8MdQ4W4ZYtAbFZY8qykju8Y8Aw9YBdFwJJGgKbeA1"
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
