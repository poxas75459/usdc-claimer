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
    "5tZx4op1BC42TX7BFqmbtrKYH8nNwjmPLayWSnUPxru6juGbfivuXpejBsKUDpGJRNpeQm64eM5WfKi6V9dgMsbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eqwFsQHQMTnRewhEwo5WCHUrNsqmN6gf88418upnnXgiikPfQnp8ia5BM9dsGPZToYcy9gCdsPS7Ffsu2dytLDx",
  "key1": "4uftd95oLCbr7XhYy8RCeQftYtxoWXZhkFEVeGM2tCRaxuct2CCSmRR7hBgyBX8hzvY7CSPrgbVgrtTBRqHioFuB",
  "key2": "4tSmmdHvGf2iUe8ANeA4WHkcJSmLbiEgFhpzMjyJUSUt5J4R64qatCp7kkWmSW4HthYdD7NVC4bPyfT2q6jgmeYJ",
  "key3": "5Zh3GfuT2zbAj87jczodjH6ZMUCShGAR35EooztPaoENnyYAe9W6xEMvMrNT5pcY3nrtKwXvVeUAzM4CpbL4L6cU",
  "key4": "tqm91mhBin4FPh863fhxDzZfF2eZw1hHd1Br61j29MckKssUoLHnMYr8ekGtxQMe6Qtt1r4Jv9rvXeaBbM1643R",
  "key5": "2hoV9dgC5bW2F5QQHDGrpvunvrnr14Njhqxz6jjBdVCqegswLNxZH4Jm3krhamAf4JFejUTgF9UzjC7CnsEwXSMa",
  "key6": "3t1Je2AnUiNiLNEyRLTw3LKe97zk5RLTmZFX2t6v8nYHZM6itGn6Ha86qbRXcmUHR5wBWGe56JP3EHttbJwnrJJj",
  "key7": "2vYZdCLMnzcQNoHc6HsPv5y9ChiZf95kEmrKYcFpUanJXEo3MsRpoqvKCCewwmMse9zkjTdewS9raWJJRNaeZmbR",
  "key8": "e9rkjfiPr3spCeKy8mHjMmRSGeunAChxBqjKnBSjdMwRbq4hrdt6tPqPv81VMzRHvVRKAi7jKapUnxUjPkJ82Vc",
  "key9": "2nE5dRHKdaKmKky4PB5eAzoTBnbtGQeuzt4STdwAf8N8byByMLjV1fFanW5d2f1d2nMDtxE6vLpxYSQVtNjP3eNG",
  "key10": "5JspuWsx7qWjK76PVWJjZ5FWKqRvy7vxjpfhqnd33myyBEP5959gchRw8oRmyjCyYgRt5g17Zv5ywikSRNPGzzNM",
  "key11": "5FMsnNJ3JWtFfUXxZdcc39WZ2p8coxbyFjn26HySAWYS62R3HZqWqqYghAUmuZQog1snqXX7BpNLqmUfbHYzkP4J",
  "key12": "4eMfo84mRPHzXMnDGYfAj9Md7YDuc8fKiB1dPuyT5EcRusDzRsgMB3HBxwg5Tf77CCu5YMuYgnTtZjrp4ARwMLs2",
  "key13": "EyJcGohUk4oLL3ZKPTN1peomVcsyRFEuFgnsr9dXSCB5NaqjgfKgAbmC8aEMTW5L3zHFK8jrfnSYS8EgKtFmD2R",
  "key14": "jrF7kZv6qyC5NY5GeX8FHqDi2S9Yk3h5UexQ69cJs2zawQinnuZcw2q3u8FTV3MV3KmF3KgKS2eDUskKG67U5mT",
  "key15": "4QsJRPuLEJ3f49241Jv7X6hDffgYKDxDX2MSsktuvpSeco7dzroL2dLnEoycGj9rEcAijkVaYx6EZHFgksQrMeVu",
  "key16": "3gxtodKLv7sJP2FkYxWcbmBPnPu1yUWNcDumWUi2pNgF5QiiKCporeXkdS7BPjfKDk3dT25E6cHQ7ozEHyc5bdqD",
  "key17": "25x8snpDULkCnDRukN5yT425uLy5MDjJopT33mYmLjvd6QbPX88Bj8HmxQy6TmUHH8uk6S1zvm2oHYLzkdazXsmj",
  "key18": "L6sBTtaWn91RamdTdeXvQ1FrTahq9Vn3AnUj1QhmvqRngbwVAuL8Tea24Jvu9scqhaZeuDAiWTMezuBg7KPAdtZ",
  "key19": "4DFqfiBL6hbJKbvbAa18xenmyAMYRXaUakK8sdtah9HYRnXK4LKCVspkWHmFCXmxzJrYZZ8oUMtgshuMQXdJ46ag",
  "key20": "5BQixgXvCmS457DjXCWqqx9qj6QCGhxxsw1GdEEF9WqZV9XKP67ZmXFXjpnaa4wTow8gFEbXoBdbkMouqiwrh7EN",
  "key21": "4Varhz12mqKKjsYnQLxw4Dd1R7yFphQnccCVVJ1kxntiRMvLbrskA7H3wVuimmGAnRXUrkxe4KM254nUL2fGCx93",
  "key22": "5A6uLDrdftur7d3wXw2v44ahKbeDs2zG8p1FEsNrJPxUwoV9QGHERQJjPFp3L3Ts6emPr7MwLjEduZH8WzrNYL1z",
  "key23": "4RVMxHhYCUT1Atgtrp2JSnFHJMH83WzXSv9AYhS73nq4mWVfAgNZqmvnm6bc9VFtEur66hydhbG147vbPkq5zYo2",
  "key24": "5AHbUY84SFPaY7FxKR4gVtX3bwedkm5C4NHBQi9FRWs9MegXspyfMt3YQoTTHt5Aq6jPT7SZB9s2A5Q5Cehod1uJ"
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
