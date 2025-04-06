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
    "596GwzfrRzb973sPvxXxu9wPaZY2DkD2yZHx5Z8P1qWW3JgEb8VdtNs4HJ7aDnCJA5dCM5j9mQpXMAF4MFefojNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NSGRPyaecwJNDVPzSWGjMzLXahFUTaAPBrq1pD8ebSS4eTooNjQn3UYKQY3zRhSxzqM9z9tNFepwMtDkvvmSU6z",
  "key1": "4e5AXdy6hTok73BEWjohxcLAsPS37GRTg6Ja63ff8Y9Smco3wW3qdSFqXQqrkS4pGg4iVDvPquxcA9aBxb7pwNKu",
  "key2": "5Bff9eWJMD2vU6dUvfPn5L8jz3odXSc3AAEado2k2Wv6CFqZFATQYMiTFK1Qg681TRVuZ6khKn7CrM5EMM5wHT9M",
  "key3": "34nNtLkQ8APnWhG2s9xGRzm9DeN2DMQz9p8F4upW2S6Wqzbb3Z7Sb7CNjPPnsSZv8WQq7RSmSuj9rqZwipQ5F8HS",
  "key4": "4L5PToeaWqauBWrdAJPSEvTjzJiNmeGbdDsC4yCLjM634Q31TM6w2rFjG6Pgbvqat6oovnaNNtGNp5WknUkD5Tkq",
  "key5": "22hWBjKEUnYP1pwF3DuyqeHtszdvaBwRNYyDJ5Pfx9YemneNqd3CcUit5ZCP4bmKXcSB4sustTf3zmBMZctWCNAn",
  "key6": "2PKST5LpjVT9psj9U3R3Q9kMejsWuMahZojVSb1vmXFGxEgwMTh7hiR5Xf2Fi8WYa4PT3BgQWTgiH4SAFp56WtcL",
  "key7": "9idYNRKUWxRJv7woWQ3eV77VJoB5NL1im61RSjzXBUG5aSnb7JWDm4y7kh1kqUUnb36fkHzZzjHNYGo3ymWd1XL",
  "key8": "y6km7Ad9Ah1jXzauwjLmX87rBMJL8Pxgr1JbHY5Xfx9vnSZqQS8bRKLnUBUX8zeztYZKK4qwSRFj3P6i1m8j9YT",
  "key9": "MDLHidK7UqGFMJdc8pwrkjPwiuPsXAfuCzFFrpRUCnkcBNCoZDA5VUFuTzECvZa3nxfJJ8BPN66JKJzziaMPYK5",
  "key10": "5A9mpnUSVLpj7YGGkxgw5buTJb1jpDWKmDFCs3N9bYCoGXJdjVkFjBAa9gfRBtyZoNDQPfeZDiobi1BjiizNdhen",
  "key11": "gyzFRwqESEXaAaWsm8a8onJct4Xt8Nao2oqFMA1EkE67Ux3XNxp9BFjT2DxvCDj1ARtmCbLSgQSLM9fc7Qfstyy",
  "key12": "264GCQ2Yzkw2y4kGhX9nfKxz3Sjnv3f1ASQiH2Y3qqJhXVBYtBRSQLzEGLud7PRyyZimajVJkwGbBvzNkDyrW7Sv",
  "key13": "3z26Fgtc4CpWSxkeJQepPJSuDApAk4e2JU15VhQVwEmdNDFKi3fAjunGTX8mszEmwMz93rzTSVyD9K4kS855MTcP",
  "key14": "3Hr7HBq6XN6fokeo94knxVS57Z1m4WssrPF835gPK9KqVZEwAFqdf5EfJ9necEWPcqQNQ5RChBQdQffQwjMvniNm",
  "key15": "4owEmBkQcP6xToVvHLk53Bf8tFwcYxRAqmEM73HdxLYDYEjzr4qrxLv5xJEXqcc9VtAb2q2emuDeqKVttm5Lz8Jz",
  "key16": "XxAuXNC8VxdtA2xvGMZfi33RyELoydrpmTWQnykyMZyBPVRwKHGp8hzPvKq7LEbddJmoYQFiNMHsnBQ54PFDyTP",
  "key17": "4QTBXqZr6H5r89Q4ypD2o9pjL6U2VSacPMot6CeLUAFftFUvgVaYk35g8yrp1aurobakknYoVAzavmhFuLTYXtX4",
  "key18": "2msYwRGYFRg6K1oXTpRHEB1tvQWMpuz5DUtxssMBjWtbiYjBmwWmXceesT2JWBFgNvFPBjasNE2WYVYmC9HcSkve",
  "key19": "3ri5dj5zFt6ncAKkcfixMvD6Ls46m7z3ENmgGbdKxSv4zJEvvxg5AD7rpjzgmGVbjmWBR8GfW2oHGgxiZfEmmJYp",
  "key20": "4x9AkwxLiw9vZPRtsEXzK6jBa8mTYjrx9B3DsNX6YrPKiSUrgnTZ6xwxRjZHKuc6kpXpeAVhCNQzRqT4phwUGJWw",
  "key21": "4TpTZxkEcFwJvLuGLBTud2WcBHqVrTVPnjTK8WLph8SZNjhZwbRRBpxjnKHc5WDErMCduHN8uVCRGfrQf28KnZ7u",
  "key22": "5Qmta1mcdge2kTJSZQUUyVDKeuE74sFbwe4xqtsYuJaKhpmjoTMnJxh9edq7jVNNRLnhX6K9eWjpieSYwrx1ZyBa",
  "key23": "5wMnjfL6ZedakQ8wBJ6QeFrSWxxh9JnNGJriGZJNRtGKWWUbbDbyWbNH36QW2KwDnboK7HvCLA8cHCx6NJNRkDmB",
  "key24": "kb3k3vpFwGTytdoQAZHAkY5HC9jN4EzfK3WSapqo6ytASqERNNvpTe8qV8f6tCNsmvMbwhcXgNv1yhFmHZ3S9FG",
  "key25": "37pAXutkCs9c4P1S6b6UfdJMZKuhh2LoAMFep49Q5uGuV7qSxo3vthy16cV6f6snFmuiVxLPKAj3TRLsHadF6k4F",
  "key26": "2nn4L3dsf19AnGcjtbKvwm9jro5CVnyzfoVJmfJdSTBbJvrc6QiCnHznEiBWRh8SJeCdnXXzFGnJYeoFwPS7gSQa",
  "key27": "21tbDqfaHYQgdikQ9xpaRim43dziRYNHsrRFnmXSp4nmb5wgkT1h2e3n62wgopcarqpAkbaofyEK9LYYEQMnxUvp",
  "key28": "5PSaxaQ7w1NsGALjVHRbJL9CSic79Juu5pY2svURSPpQJA9Ke3nSUCP5Wv1QxF1JMjBm1s5uwF1d7JhG7mUxbh1T",
  "key29": "kvWHPvDwa8V53PZSrQy4g7rfpgm5vFkUrUP2fsVtmMfeXGQiKaAR4EgCzwgox6TeQNQUoizEnsu7EK3DZehaaEc"
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
