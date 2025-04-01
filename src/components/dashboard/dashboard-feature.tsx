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
    "3VckzEpUiS9xNg9aQQh6Q1hu5YX6wn6Uv1FmoF3wx7cWH1BQNncqjNrfPnmrLaXce6zPSqw72gfDqHgsmzJSLDjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fPcgL6oxx4FLT6WtwtxyFTnVMEfo1F5pH1meNoVvFnLn3ScozcyEH3qtWbV7XxRN8oZpMQtjo8mKhywSqKG2myS",
  "key1": "4LayqNadUJjyqqwtWHnwTn5mNqoDqCcRLHpXWmECiip4HJ25vDiz6BzWPfd88JLSQSRLyo8477d3QM3uzzokUCr3",
  "key2": "3Aic7ZanoqyrHF7DE3f8SVPV9isYVQudgQs1zpzasctdB6QtAAKY9cbgb3HNLp8xUTge9Y1nencGuJzWap5d7hLu",
  "key3": "5YWYUQ3WfWyLUsx6EmSKbLyzRcSW4R6S3bB4UJwrhj8y7kAf5NCAQAoyDzPzPiVKMTphtALQswGU239EwrhcTRVP",
  "key4": "nSbzVNzuLtffC2TN6nN2WFuRGygwAkkZfSThvJkimrBywTk8QAMGXWLdNmuFvouwNRSm3GEF1JEXwB4isPtpRtu",
  "key5": "w4ebjdacL7XV8574kwwfekKnFZxaKGWQjpqVMjKVpXCEQczxpeXgFYboTWF8SLx1qGD1Ww3aZZcfUmvYwBDwwiR",
  "key6": "4Z5pAyZMMHYTL1yXFfpWb6JS4NTKvdVHGKqKh3D7SuQrYDvrvSESHmyJuWRYTK7xMyCgJ7wkrzGsFBR8fn63xpgq",
  "key7": "66qU7Wd244V7FVJMBhRYba4rKemDunBxzaTe7DHifohBULgAGvUHdC1vdeXap5cpqTHLEm7UFvCptivahFM21ov5",
  "key8": "3ZG6tBRmt1EBfFEJ5rvhT4XBcJVg6J7RgYYZGiyEivvzLVXf4gJUQyUq2oqNPyW2ao115HmpoYGtpBLoDCyoy5u7",
  "key9": "5dedBaPWNZKTNg6zHQ4x9jX8ALrq7cuY3xDq4N1NmbztWooK4MFU6J8EohFYh13xit9WKqXy98xY6FVw6MGFsPXQ",
  "key10": "xFnfs3qhqt9FUqXvaAfpgG6adwQzYEvCJZUds8Z6NFfDKAp8uDfxsu6qrDwERz4qFMWs9Uw3hP3yVMhzSn8JZAn",
  "key11": "2VrhVW5Mk5PppkCNjkgvsjFURPbHri6pXzPX6B4w2pSVoBcMT97RiZvquEatQc7mjQQwxcMSo2SeFEwq9NHkunCw",
  "key12": "2oh3vicTWCsREQ9uwcL3geWRie15qytoffG6nGmKg1WsXNsHXRHB1GbGgnATcakV21nV5pDKAbHtMBPWAsBPQDQx",
  "key13": "2eiTayAnwBec6J4A6GSHc7pmFS2SNf5txNhQ38oHUbxHcA3A4NfdDXQkWZ4jVpRdt1YKQcEt6r6tjx2VgQj3dJRb",
  "key14": "3h4LS161jqvqG6iYNeiJkSMenEfsq427zFJ7MmZaKD2UX8kxckmkcZR3BzpTGyoBCj9zBFrWRTP4qJS5ANbnSaLG",
  "key15": "4QJYDEmon22DNC6R3BL1u1c9xfdN9NwHPE4amFG6NttGngUAtrUcDK1QMSmx6VT1FNNJZcm8qzNFfFocmVkymE62",
  "key16": "5yZUAnHAETWcHhW8uSADCX3ey5WfAy7wE9KGEiUP3MkenEUrTbkZAcr21RPXj2qWmkr29DNCgfXYkaZB5v51ExzV",
  "key17": "5FJD7zBhe25MRGP5zo6dvap5Pp1DyT51kngMjD4FM1gLzXzCpaywsCXHGik47bWeHjmGZt9d34KHPQ2RyggBP16G",
  "key18": "4rS8xxui5jdBcyEVeiaU5KNUzBhrKNueqrpZ4nDLADiFta5G21LmUyXWWpLN9DphtL5mZx7Yrji9m1Kch32pJbLs",
  "key19": "2DqV3neR4AjHFHyX3cQav5spiZFCeSf7PyggYa59QEKNqNEmay2C5ZcZFAHWVFMXnXYTNm1EXDJFRwdTqTEVv6Tq",
  "key20": "2PbTzQ331rHcGmFCkadVyN14rgcxwZ1J39SQGVW5D3wjSRKiHw2aXqjwJSG8jJppoWrQhEdMCP2CCAmQYAKghBfr",
  "key21": "3gKdJHwEbjGfjEoDd7oGoDCE68mX9HWBZTxeSP9h8FzA97GDxMeD6N793dvmttWykXB3W25LVaxdGpmbHme1ZjtH",
  "key22": "38cwe4ZR4hw4D1GeqbuDJm1fc9NZMTNFrJKDQXnTco3nK9i1QqCmJs6W5r8iWtsaruz3dP5QRk24nHzSSBJAELsz",
  "key23": "5x3pD1cDsKBgvGQasmRX4KuxwJ1C1Ck86PkeiadkfRuVEYzyumskAv73XfnpqJMfovMe1xibT7CNmXskoAbecd1e",
  "key24": "4MuAqnqgkprTBQXGCEZF2kRwUBzWMGxgSjj5ADxekMiaU79fhAvepX1xQyJzHPixRXtJYB8pBWEdbASNrAkvAf4Q",
  "key25": "StvMQXmPGBuJsuVmmkUbwJmBD26VpEXnRsswyNkpAhfbykLD39MDo7aHHkLMiQ1oLeCvGeBGDFmcF1mWTtQNv9q",
  "key26": "4qMFg2ocGtGzyk3KSeaCdfF6Nug1zgZfxW8xJw2BtLbC23FsE4KSna3UmNJJYX7nn7HR31LBkrQ242D68ewpJQcW",
  "key27": "2uipfyxDiJaH73yyzyLyQsJA7JwUUb4PYvfsTWPb2Shm19o4CFmh9huRfnYpXhrSGKLY1YUbMfCkxpboXb8j5LY2",
  "key28": "4wNQZgtQZf66dgQrHFr8oFGAysF4wP8hJjTBEpSR5r4DeVZ4yUKtCxmYDVFMZKxY3AQforvG8DXuwccduoEtfZZu",
  "key29": "3NNJC4fiYUPWiA1ECQTFai94eXh3sVGhzEQf2c8vR9LL59zSAUcErcbNer93BRrWv3SN1i62Q54m5fHwGrtxzkXP",
  "key30": "2A6xkATnUHPCCNY9CFCXmgW6NT8qdLkRUV4L2dmgVFVdTSUdkBKkvtv2c1HA6PjEhj5XMWBAUt12sqxpCToBbjKr",
  "key31": "gefnMcWY2mSuZMy61woLPt5yGcBm3ZDMD8s9pPgT5P93RDNFw4GEg5gYuLt5xJgvuFpEpbpgEMCpxro8qqP6uUh",
  "key32": "5kx3W1Xipju91YVZ6kT9xcFUqjP9LKbWB2j1c2Vh2p2Kvg8PCbkjDPvrPjpaZA39t5o1W1S7HK1qEUhfRWGmumPN",
  "key33": "2ic63Jb8S3StFzuyHC3jvXugqXWgkdTzCGnJVaH76ZunaigFNR1TMuR2RRoUSiAd4Sv39vUHax1No7Dn77YprFjD",
  "key34": "42xxSQ8odBCwPQjnBcdpnezqDrejH836VX61W9WLoSmRE2eqiHDNhT1FbCkD6CFmJ1X3GL86XVcLjMow73VFfxn",
  "key35": "5VYp4jXCAoKkw5jBLHUTYSZiBVfQv5wKYYo1xtDh3cfa1tXfP1gdMhdcZYrktprbaZU5uu8eoRWNrzfVn5aztwPp"
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
