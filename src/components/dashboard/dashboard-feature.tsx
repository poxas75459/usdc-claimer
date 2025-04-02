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
    "41D1foy7XNnD7yBjncfsAvwXUWTNNGyZsAE5mvc7vPBWReU6mR1EqwDWwxktL17SBeECT75rJddSPYaD9eriYnME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m4kc1AzB1zxFBb2qP5sr6K81pCSEsWgsGkecFk1vZ6c2PLhaFFEmrJN4X28okyyguaY1KY5WSWe1SzjtkUiP2Qe",
  "key1": "3vcHKERn3wxPFqdJuAgX3VTzks7gyj22kAPrDhhLu6EtCKi5jvToUJ1SWktvKJQFJmh9s1JYoxXjt8D4rwQbB58F",
  "key2": "5mWvbU63TXyjkCtknUipxgXsXe5AXZwjjD8SAUwiFqtZR7f1UrbjMqndXuJrNVQfS7FrHScpd5iad9XNdN9tQEuJ",
  "key3": "2CLwWJkapnwqxervDP3AfuoWXgjthVybNTuK2Jw49kHPYiZ6hvpZXn3JZ2LiMguMrfZqGsoGS7qyHpsgCbnCqLCR",
  "key4": "5jVffG62Dg8VJonHKpgXePNy3N4TNeSEdzhaM9NBg4YJZW8FVySYcj2JTiNPCjBk1TVXSiccgApe7R5LsiEp7LGR",
  "key5": "4s3VjdsCQw8L5GgB5NyQCUen5S2EAmwdY9KEbAJBg5PqGHwKLHwScVBxVD8YosQmX3nd5Pp27DXwaRJM94XPxksi",
  "key6": "487uXMrwFatVUK46Ei1VFXQrdhmzTjiQPnXvMxPWbz3f6PRUtsWPYt4Pn4LbaeiKFxT4ys5mDSDk7WHn1RfKPgKV",
  "key7": "4VCxSjp8FGqrtNX6FACy1ahikC15nsqhVZW9Eg3AbkrghknNhebG4QRwJLJJqaW4eVeSieSvpeXM6RSBeUMuQJgD",
  "key8": "5A3CFHMEs7zgJZSWA76oSPsByeQGeYQBNrMLWxcEHGBiuNoZAvswpX7FWimhPt1Va8gMZCDi6EHMr4GbGJFktk7T",
  "key9": "3cvvULsqVc96BzgPWn9jQZLH34vhP9UdKZsvjEgRMH3cSNxq73mSQuXbA93FDhreDs65Kj9pcwxVMqLSS6qAePXd",
  "key10": "2G6DLQDk6hkhuD7VRRUa5XDYT2aaUqTjQD3mog9BrsnmaksbtfRPvvpNgdU4whX5EHeunXB1816MRGPiGRF3Cj1j",
  "key11": "cb3HpZQ529iMcbJMoJEZcCkKvFPhUAUsNGVQhbuawMC5hz1UJRZaC2TvE4HSgY8mqvWXkLdrZcY8t69Tneuenqr",
  "key12": "45MzqN5eFYB88bo2D9AuqwoQfGqSbfPiV16oG2bgfj8NRZqaqiFroobRzkS5QHjPu5P6xqWucM35WSi6go4mDw3i",
  "key13": "43ZxJ5mqXJVJfbKCw7yv5fVd1MgTybdYibvXGCgNauMrBQ3Tut9ehi1NEcABC7PPRrSariPkaijgVWVtf1DGGBFC",
  "key14": "uUpYE4FVehjjAx2eTNJEnT5E3jtHm1uEQjESTrWzANEcs2tvwURaX2PZdGp6Uzj84DWth542c73UHa2bPQHJXQS",
  "key15": "3NGG6AUYyRiHQ5YZfbSSMZEbcWwgM92nwHF8M1d98T3wpUv3E7aZtcPicwtMTq78pCohyTfZTnuZSYwqbJtxcFAR",
  "key16": "4B56KXEbZSGcxzHcdgQEbwYSC2mqzTzTHcG2i7S6SEUAQebkajDgUZLYKMCYKHDPs5WYAnJfJqxuuxLHyb3ThK7W",
  "key17": "2Grou7yySmpsaYMwojxQfJAqsKpETYNJFxkWoNijwbyWDfUMSGyfeEWSSp1xVoakY7C6UKwXDZ4CbCHo3oYv3bea",
  "key18": "2ZUhW7m69EpoBuuynbWAst4czVTzCSD5czxAAghtxK3hxdRLDKZAHHWsh8FMzTYaHNCCHmQJkjPeJ2TPGAjPoKAY",
  "key19": "27qm9HS2h192TEtNKrZzd5T6jR975DZ1BiS2GESx3tGCKioGpfNsyWt725dmzYDjtgTNSSSHS1MMvTrytbN4aMeD",
  "key20": "425jFZVc31oG9u8a3rDCRsD5GRvr78jW4UmqMkNwscX6BbzsZqfkcim3KYgB5Z3Gs2sdtT8rVUEhC6QYS4uKmjoF",
  "key21": "52uWB2mxkLyqdKEknjELQxM9LS94UDewULMwP3Hqjcm86f9jnXczfx3uTCRrTRYgRojYAU5FnsS1SEuxAj5RFtUW",
  "key22": "3WB9A7h48A8qaaxgqRNwbpNs6bV4qw7kHA2j4LyiLytBEmnudFkMU7JmTrSQkze2BMN42UHmn58rHp2D6ymmHFoP",
  "key23": "5P7SaCsxeCX2CNmgFpSirAdmT59FTkRhJh43yDBBjDhxhsd8LTD4aLs9EvW2PADse3Gw1VxecntRxmqQqpEZBoZb",
  "key24": "4fcGHgqV2SzRvtPV7QNJiKLZdkRMDkQosYJk19rgAAD67Y5xN84SNQLcLGhF3wPsB8wiEtr1XPa42o4BeHCA5WY9",
  "key25": "4bQBaZLgVrqhdPJuRUPEyYaaXEs3xgQ8fDaBTNRTX6Ta43oLeptnMKHNpkZFq5iGdumQxMbC3YKVihWaUdbj7uYB",
  "key26": "SP5m6PZS6La5AWLQotsmAMBaah2Yn79VaBoHJfZj7wXJij5PZBH1Kv6T8xNkc2vzN4L7SwWBgQK1Sj9N2PYyBjX",
  "key27": "4KjcNyjz9o9FpAmReoyH8qzQ95ZdCrhEiTx1EBzzZyYhLVG9XDSYahi1N2NGgyfTrMwm4FcHHWW9mCEkgiHWkbug",
  "key28": "3kNA5HYpB6PW8MG5UWQhHa3zKuTFzhzS1GJnr2rYPCJo2tLGqRthVpPtRhK2nZ4As54vzc2HmyhUjFsdJzyCkFar",
  "key29": "5fCa7rnNo5W9z45jZdkxht7XozCY9aSwMPDQHvTkxvqNNrDPj2BG5fihT5jMhD2QDMv4xfRjndWHP7umXKsRRiKp",
  "key30": "2rTLSiSTSPUbxegDGMgqCg15qWBn1VvxA6jgVQLygRvBU3zmxJCfV1XNVnFY6T2LW8RV9VqYHhyppDmRozD3pZUc",
  "key31": "2x2dnfsWTJLh2nv7QuEymQeo1Qezasqg1Y7zR334GSS9zcRovpd6hoTREg6TQeKFnc6rcAfw6zv3H6xqcgG2ejYb",
  "key32": "5pFAboFcELe1SLP5YdwHLXGaqzcoMhkEZB3cxXwgiHwJdyNPSMaRNt8oa9gDUVcBEvz9yvuZCn6zCy3KZxzQsFwU",
  "key33": "2pTgFYHAZGWYbngYEVGYAgRrGiAWMYq9kvo6rVUGjPc58c3TKeXUCGzRj1KMymbFJ3DuDTJa3U9JriptK7uF1CoN",
  "key34": "4tgaNn4H6jF4aYX6oN7Kr1TtSukx5GaB95ph8K1qa14RNYd3Wmeu6H9bfKkEPmvUjw1fWRMXvLMAtrGgV149ekid",
  "key35": "4DeXk7uUiWiFqyv9mgco8UEghYusHvD6MsJ9fraaGGpD7MNesUoWJ36gaZ7oc3QSGLTGKBVCich66vd7VpbuAk4P",
  "key36": "3z1U1U2VJYUps4HnvF3wzn2vLhrDgJ5661ftkCvcUbo3HBeeZK7wuutfGrxVDmMwG3t9iSXxifEPUYcmYvhwHP6D",
  "key37": "GxeCzQyFNT9zSH6BkaR7S3T2Re29R4VmXgZUaXXXTCZiymQ9T3NYzExkxodTpVDhxGLuvVzSsDX36kmaDsBWekM",
  "key38": "NqCssVK26WJW7G6Ytydr95H62tzH6fTcn8EGdn1vjpfW2tyowE5gVCJKgJyL9FuwGQJBAAt2ZDhuqZTB2bggxnn",
  "key39": "48jucs7hNumsnNe7vrnmou6ebmhBdBxXoEFzXFRM6S7tNESvWTCv2uoNPwNdg2Ahpvu3HuCynXJsXLtDBTvYdNp8",
  "key40": "4vHPA4KfhPgGoD1NAr4nJvBzRXSG5BdBqjQSdkCQ1oxD4NjYr9ZGegrYzCwkUvTmw9fL7LqpiNhENYd4vXiziqtv",
  "key41": "5iNuXDMosuWReWdNHfe5dDWMQhigid6CmmkQXahcvtVGdyWt53fEjFcp9UeVFE7WboMQfLxCSkKtsvaDxNMGkq3W",
  "key42": "udJRnmzhxfHRrhvk78qE1ELAyoko528xmBwMZvM2DHmhQVpB7CDQawN8RABSGncpJGUxbW9rpJkRQZBkF6A3pnb",
  "key43": "4c94pQkywRqV8egpvwJyWinWz57H8nBf3ip4HGvvJ2nqN6mvUFfEKcy8CEKmThmfrbUbuirEmfnGjTDCntt1U654",
  "key44": "4eJ8bbs3hbEzvJwwGWPhaxXnKV3gz3LYN7k3CemQCGB7XZ54pW2jKc7MwtCYqnuf7S5ZCFhsb57T4rxjT8u9GBhq",
  "key45": "YBEmo7c4kGi68YSh72xgMqqAJEWYhbxUggxadDQ8ZqTMSTn8HNk9RY4aFQg2QBqag6gP2VDQPF2HaQ1DFpuNXwW"
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
