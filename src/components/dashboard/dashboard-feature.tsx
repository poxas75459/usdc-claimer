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
    "3EETLMS7urB8vxi8nKqQk7MoAqeuyqt4sZNFsm9JSLH3xZRdjyscBgBEgX5VjKsirVNP4PtJrcrHp4wNfra3D9dA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rWdtMN4cNe3288vYzeSPqy32tD3KAojg5PMfCf4kRfiHvXAbPpDynP5dKX2kaKzoCiPRiJDYd2PrAKTbKZTc74q",
  "key1": "SAvs2ZkSYGZFdZVq3vivuVAie7aaMJGLd9ZDyFDKnSvmJ9P9gjj39S7RSjqtma1wkr72MZGQwgXWSdxKC1TE5xa",
  "key2": "4fSUKxYUsdJH3LW7bhUtwAdRBE53SuAZtURzAfP91NRVLMLaPfnBWrFR5ZJ69ckF7oer2v2K3ixesfCnHNmG4NP",
  "key3": "3N9xtAUrxqWt3fBewUWsbhUCH65exHapF3fFpLEVMkvVkE9ZkSNxXmXh78zYbtDmRg1kqptJYp7CLZLR3LgHJ3L6",
  "key4": "3VmHnaLVzbNzHg8ERzx4EowGh5q3gXUBNtAF6zgzioN3foNwBzjXgGnNsn5oX71dwYFF2xu6JkfaHtCm5JYW7Xny",
  "key5": "t1YD8AmDSY7jmFvpA2FPbYSt7Uo4AUNV7ogyJJjDUGTws5QDRAsiHrswxt49dBcyAD7y5KPQpoWVUeS5wrb1kF5",
  "key6": "qNDPkoFQNaF56TxpXsWxfc4kTjA5yAaPHoBGaDd4zyBqMTwpja9PYaJyXdSJkZKmkiAio2vhHEJbrt9kRU53oN7",
  "key7": "5d2ZEgywwzsc4sMeiugTiS3xJU1gYQJFSQTPWYkxtwG3mnbzmFjEPeJ9WsKZ9eAcsbjYyZ2dNZ6evq63QyXf6CVt",
  "key8": "2JVvxxbrjJsA6uwaV97BgjwrFCCDanGp8TUiXjkNFm2oEurmRai8YEwGPieeYiaDwYYnFtiKR9LbMgy4geBQ9WtE",
  "key9": "54AQCxJH8jL5fzvv3kAQeiDMMLk5rjjdq7CcNatsDoPqmPtZrq43J7BiJtCEf86VRvRx21kTCf6xsemuJUn7qd5C",
  "key10": "2R3VcDht2bAtsXsef6My42bJ9jQe35ChAG1cnwPoUabML3s64MVXND6UBqYSyHfXg7QX6jq6SRx8hc7K7TDgtq7S",
  "key11": "VDrjrTuyDkwSKWjV1PWpTUsRYp25hUJPQ1X6LMqDTcEFLJQf2xi9fYCTzYqeV9H8zHdYA57iMkbUvYL9LRn1Rvj",
  "key12": "55cyQYPceQGT2bPUnzWBZcyXduV2P2Gm8aoaKnf9Ttjk83S7dwkxxhMXd5QQVU3ySGpUKWvtKjECLdi1DPvbJkzf",
  "key13": "2tht19uRYZsH22GLVskPHX2w1aWDvWqopgJqw18tZ8kD37xXKmy6zej46y5d7GnJKDkh3jaHyUYRg5z1TNGGJwgE",
  "key14": "4qMqxH6o7wc9L2MaDcBJBk8XUVxphRXMM7uaGazJSin9tqhEJtmgc2aKFb1tyRfN8q3DTh53RNWAPL6cCtvrBEDz",
  "key15": "SvqP6yUpMZrAJZdz6dxXBXkAupQYcV8JWWQnR1kPEoDuMBSSjoXio98bHfJBLcJdzhkKeu3WvNKc2a4fMqbcqDw",
  "key16": "3piAEuvj2HG3zWrCYmAusV2zNXDtKaSqFYWbaLvkopcBiJvQuNQ5uDcezZt9nSb5hHVCmEY7oQZPiSNBVVZSD4fb",
  "key17": "2JLNdrvyQFyPXM373JNSXWGY7VWK8mSM94G8XJCg4Kfq81r4dJJZAeKUa688khcdVzZseFYCZ24ZsjfLGhGZHndt",
  "key18": "EoRyfni3tJxFzTbY6CLwNkNaRaq7N3GBwfnPvz3pzwHWS2jtNyaSNhJUGztBXi2wZ8kqnuTLFvoJJMDySjCbCdS",
  "key19": "2YgQTSymZgNxSjd8p5FUjQvdoxEQajQyKDGhfiJ9JKiu3r7ydhdLQEBTp7nMTq4jcHHXacU2BCDZMVJ5296GXHup",
  "key20": "2xPS5AaiSV85MBsYbZb5hJLFtE4pQdwX2GKEK2wsySm426Yrq3LgXBbkqF7roeg1fTXiLjtsEc9fomnwqMLmDH5u",
  "key21": "2D5Diqog1vRePwCJwWV989mHZiZBvj95aSnYwd4yaTedQ6uga4ioyjkMvjGJjCMwTQu76St7wvQ4VBng9G7Zaf8A",
  "key22": "4LgsknfoypjKqAcUhNPRbcRpwHYqakRhUMdn18aF8kemdarWyeUnqbTyMUBRt52tLN9h2cYVMoqCepVjfJVnRRri",
  "key23": "5qd8iZKiV7NezkHzQ6XcQ8VmCK6gAXEWHvS91JX4LDyL4quCx8HUp2sUDWTJdaeZHVeHtSkNZcbZMoQ3Gj2XFHou",
  "key24": "47tTCKpqr68BKK6oMQYKya3MrbCP8JjQgc9uxPLheM2MkFmEFgVM9nrbyWyaWdaE6vH2NdmJN3Z5RV9bujCbNjJx",
  "key25": "5v2815XdbXBFMzZGL3V463x7YwtTvj3o9EkCiZahmddybyPi95s8QQuJQATcv585ooxnN4mjz7BANd25GcdTsX8N",
  "key26": "CLnVPHNXBuhpjgV4Xzyvuc47q3Apu3nz9j9f924Hmo25wBaMrTLrPjGsTj5ct6G1wPAGA5tucJRRSMVChCPweus",
  "key27": "3p3JRr58Ghm8VvypP5CxicSqXKJeJcEV4T3p8a2YUTs77WAWaCP88bct9vpkSTQei6LDhWGs3ZcZzEcmbPefRn1k",
  "key28": "4iRidCXKxp8TiAA7SLwiZn6txLsiK257iL11dbkB9YU4unJPWbVZV4r6sesyHs9VPKseDBoMK9gFXbhdfpw61T1S",
  "key29": "66VUh1dNgREPiZ3Cd1UjxXQXBMwpeWQPpgq62KjCCipRmYwe2FRbDcud9ZKeyJee42A3jUfk4TNxBqrJdFU2GFZf",
  "key30": "2KVHRmD8bhZE8tSZniBh9gLCYA5F7cRDjef7EwMuR68BGAZEZXbuocVti2A8V5yy1rEfRdJbtpV9wb1utzxhpvjM",
  "key31": "5HVJHEsFTbtv9VRKiG2MebmHFrf38pnewXASRB7eQ99CKKeLqwUkN6dMx2pi91oU1dFJ64aLpZFNGLD7RuGTasNC",
  "key32": "28fcik7aqkU2Csjc1htFmstub2epG6aFFNpGoyhgn4vPq6rhxkUd8HKRU7TTg3BjXLBvFbNYs7Rtpv1m2vSYFcVs",
  "key33": "okENn3xzv92PcqYykVfwXEhqmKw4swArhDxnuLcV1YAYrxyhZDAx1dBaRagwnHfrvBxBgSYdjFadKF6n55oyMkq",
  "key34": "2MtmkmGmvSDGjQDdSaMFw3iBUGW5AXXAWYBDnaABUJuke3EQWQGBvFa7xH5PJ9o73tmW83RHweYir83PEKspLQ7d"
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
