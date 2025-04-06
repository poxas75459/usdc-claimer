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
    "3TvBCp4KJu27tkAAkq1kZ3XdbLs9a7ubffQBxiSmLKLK8hbVpWoFd11umforVkepXYfr3e28EfggydNbabPu8SBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SiTKGNE3Tjd3XiUsYZ2UUv6CarvhMTgjzb5wBYeMJDbMLEEnkWQwUTqAPcFeQt3vxU7fyUVCazLnKhD59XQyvxm",
  "key1": "HF4hSxcpJPCPkuvThXpydeVLEfBpUm9agxKSCXRmTHaw3wTFErTDf8jAWjrbMvAAKWp9XGPVR5m6dMMv8s1wDRe",
  "key2": "5HwAWpvgzhoCwMhmPuitMGneg1SpeyrJvu6zGbyK4NepmaT29Lae4e3UVW1tBTjJtBDLKbCQgjp1Gr7o84eQRTng",
  "key3": "469D5nwkzGc57TRGbqMHioLcbQfqoRbjwPmhCMYGGxYwuSWY9pHDhKcEPmoX3JNxZhKjN8LYkGRBSHpyPciucrLB",
  "key4": "2LvursA8vGT6zBodRjYys9Jgoh3VbDSD9rwjkzUmYJ9sE5HbAY1gScYUVpVQGCoDrqgMuHY895iNsAnGyVd8QHhB",
  "key5": "2Cb5UrXmod8mXkrSSPLg2mZXPp34aeDnzTeGtfdVv2b9fBc66TBu84AdnJHaqqKBbmS7vf5KN2kAptSmhkkYRinU",
  "key6": "3SUoBYuCy5SRWYnohVdGQddaKwxqBksonhbxwVxHuuf9dWgo6cdckgUeV5Pt2MhS5mthxJUhYQiM2hb8aBM84U52",
  "key7": "3aP6fBpnukKf7fTmoCGZQfMVvaWNgez6t3u87v6ysnFVhDwpvHfWR6u1pWKatQa79yQJnkFYpPZnyuXixo8TyMxX",
  "key8": "4zFrM7iELAGarrJuGBZ58T821ZnSLmU85nZZpFPHuNCu97SETH3FeVUZfHWHU4wecrnMF2aash9dj5KWtrUasgM",
  "key9": "yDnrL4MpWeDodVstk4WmDjmp7koQ9EY4XYMa84MjyHN8TtzGvbXDejL3KQxyVc7owbzbTZBQAz6n63Et4e7ZV8Y",
  "key10": "3SqgJ2P2Ui1Rmtf7XBHEQm3x5L2Gv7rQwU3qAjRghqqHH49tUTFM1jceYmwHLaWsWvwJPH3nx8Uv4LdES4DyE4nv",
  "key11": "3o1VvhE6AJS1sLw55QvBUECXxnan2WhbwBYhfdiuftSiW6KjfqCnqoV8DhwPKKqQFqUJVTuHvLxT6Jcb46wurxT7",
  "key12": "4vC2TCZsQ33sJxxxeuRoawpwbhymAXjmiRfbTDbfo8m75fDKJtg86aY1yNMMQcy7u6qpRQQczzZkL3AftN4pRg9c",
  "key13": "5VqSFMD8JqD3vzyKCcXTdkMs6od1Ua24V5NTzVZ19UQtXgQWTPjWva6kAcKkyAScRXs3MiRfQERpnQAYNi6wstwx",
  "key14": "39nfwtw86gqR6miYszCsF3fqZ8MojZLADLTjWj4jbtXzMe9WBdUM3252TDGohCjNC5wyzf4TarQkoeb9KnGmGsWU",
  "key15": "5D9FKSwQKM3Vyj9Z9LFi9XCPhRXpMQD5DLPnLSzwPmbg57iTZPKUg95gfHCwyqT2nTp7uW5JLCMK1fgnPWeJhHo5",
  "key16": "4Ktke6kJfTey5fL3snnV58aeBw2iJtaVF4MSQryCz5WZfNk9RDZuVUhVMMjAf427ao5Bv5hmL9BJx7ndTfcqexLX",
  "key17": "3CKQN6f2xWvBtW6Zb4Z7Ci4ckCHxGPgWGaYJHPRHjZubnVKUkafaCWDF8E6iHTxkMT6AyphVdW2TjM4UFAJek6pw",
  "key18": "2hrNqhxxNrTPVdYKFYxmPQHgFktvjyXoWfYAHBiStmirLQtmFWxMwxHbCuejWQ22k1nHxAmwsTWBGYYbJdxi5Y78",
  "key19": "2qsx6AoYy7Hh1tbzjARLYfxw9wSAsVoaj1C1mKffMoE3bKhsKyp4jbu97RBDHid2hQG1khMd6cvqN1QwPg91g1yH",
  "key20": "3E5sUEDa6rt85tJuCUh1rhtRbSBuGG97fceoV6yKZy4imiFcft5gmPNbpTExWnRRH3eEboDdkqk8vMcGt4eyZ77u",
  "key21": "2345swqZmEkzrWPTLpjQxVuNMEW1f3mpcgBzQx8hnTmd37E11FoNhfYwPMoV3RcgguquHbzBBL2uvsGbtAz7a5SM",
  "key22": "3WF18mZHXPG7REadJhvjAkdYSHtqAqo7EVAjvxo3CdT51dWREEbh2LNgfQbvUoLeLf4dFZATgTtDvniq6RUC5eBf",
  "key23": "5hCPUnoCv8cTVvajjD3yfKKaebT2BXnQPwBqPM2GoxUBLywEvSzJs4ycSsXjobU9uSAXr1AtUZ54jsNChyYHx78B",
  "key24": "3kUYfttxqAVQwWQDiTk6fyJkGPvsPkUb2c6o5gYeGk3k79PsH3PwogT1hFrekaeWPg1EXfXm7TFbmdNbAHNRPxXP",
  "key25": "4CGG97bA4yCe5D1zwadNH5mkJkURzzTA8w22sbC7q61ndhmRGwZd4Syb6CD9g7KF2AK4qv3pCMyrun51UriWcovD",
  "key26": "4yFKDPBak8daQkDgHNLzmetg5jSnT4ZV1a8V91k62x5mLQF8A13xrYrK8LRPV8UPd5qZGVFKm1HxhDMBis2aEgjX",
  "key27": "6133iscFN2f7gAJkjtYST56w2GY6n4z4e9UU9KL7ed2jZcPrzn7RtDhpJP7Kc91QPhWtLvbjDfFJyJR91VLBMNz5",
  "key28": "HxRN5k7zw8psGveFzQT5D3CcJH3gf4JuqPk81t8LEs54q1K2PAAb66SmT43usywiqkkArvaafhTsEGCtUCZNAHu",
  "key29": "2yFEhungXNNe51zvakLSGQmpKb5huc7rVeiNBJaS9avUpXEnCekUXRUeJ863Uu2vi3oiRxTwx9MQBvuLXKF6Y2JM",
  "key30": "a7Lx3rxWowaVordFghNvaDVM6s41as3VvxZjFH4fMM44AtxCp6Ei2rkjYVvQ3gbJ7gkVKGbjn9dpHEkYh7Dew2h",
  "key31": "27DLsvXwVL6HVNFmqVeXUXvXqgZxiuZPnkuxJtxMfSUEZWF3BSxzoRQigmAE2ykpW5pCrqyFzocpbba98cWEG1ms",
  "key32": "2YE3LUvQ4RAkYvBADiFCZrZgo287EYokUoypyBa1s7PYiFEUk1jbdrrUShCmihHLJjW39ovGYWPKZhzKmvuYDCSq",
  "key33": "MB7Fv7Ws7JYQDgYjUuzYQQpTKoRfaKM5BVE3f91543Y5fUjo1HDfWEx8n3ZJSPVJvL9aHnV9kALbuS9cMojcpbQ",
  "key34": "2b6zDR73g4Wo9ndcrV2vtAx9dJ8Afef3cmpGr7upBve548Z8jGjuvWiYabQHVSE4RpLQK9sSQ6qXTBsrK6iKzgfp",
  "key35": "3deh2TMKMqcwSZ7DLgyk7HpVzXwfe8aJNP8svbfgdJDjrS6Uu9wGj2zJKqy425USXRfMMpfoks2cYiVMTq8wAGpA",
  "key36": "eWo9bqQ34RRJZQR3nMjKjaHRNc7pqbjWCrSTgLrSHXyhBoPAps5xA2yKjaWT2WfFB9EbmcKyVYnyPjhqtdUddzL",
  "key37": "4LnQsukY66xUY6i1Z8sxMnben1vc1ZaM9jDK55w9Eefz3YtkCsuUd22fNUQm6nSCnqYrXz2Nne6rPZ5rdv3zQAyG",
  "key38": "3asWpzjSvSfJeTousmtf3RKP96KFfk4QzTHjxXktZNkvuRWadMJuvx3eMKiW6HkCA3YHWuuFXAwmkrX82SUJWmgL",
  "key39": "43Kd27bxdHrijTMLqzFh1LUxTDY4WeVMKxFbbLsX4UpKWkSavLN53i8kJ8NDBzoFCY96ccL8zqbQdfpjxHQHbq6J",
  "key40": "2ddWZ5oK3X1pcTLpCSe3YUodb6mMEw5KpC6auUE4Lbyg2Gq8FUEMjbsB5q6fG5U2VMn4WgM2yeF91BqLi4K7cc51",
  "key41": "B3Fp7wrQiYMKzswBaxh3bVCYL8UeYj29d9VTSJUPwgFDshQH3mtrUSizE8Zuv4FqxAgGy9CXoa2nXHmZ4JRjb1Q",
  "key42": "61jPwp6V95FsuePb2icWRHqa95HVGFZzvnZpDwAdB1pW6b8NztC85r3aFyHvyet6v7QdaqsvfvgAUUccA9PVy1o8",
  "key43": "4oDAB3Wcb3MrQHvnjagxgRE48gG3iuh3QK6yq3Bba5HCmJjCA17V7ETaynKSsf1WCxVpXUFybEwfqmYZHnh26yVC",
  "key44": "5A7iEoCiQwHVSkACvQoahq4Jg8Z7RxujbhGe7d6wNgpgLvt921yCfYKwjDsGJfaeHzZNExw9Pyu2LGax96LPwBae",
  "key45": "2MAaHu8RkrWBttr3ar1Hunw8xoSZRSVV5CTkq8RaWSKMbfC3BbqDz7CcoJJsZ1ybCqZHfPVB1qZqrBMPM25bsswK",
  "key46": "5PBnfJtHSV4Tcbc8Z32ku916N4SGppfi5D5eg5hgSx5BGH8DpmVg9AdFBpSswNRN29p3q7zssGXfUbuihqLfBY3M",
  "key47": "5erc4qUVU9esGRY6LrfYnjqB6KVLbfNpW89k9xzsTgZfqAa2kspRfb9mx7n1Gs9UYagLYDbUf5R6Ftq7Q13bDLTm"
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
