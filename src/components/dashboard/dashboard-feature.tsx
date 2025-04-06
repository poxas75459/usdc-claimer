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
    "41dnR8388wyZRoihXBEjgoG6A79NcWoUNks9nkcM54tFgEPpZBENZRJinPTDGnzGqFjNs7Ntd7SvWB4Sf2fGn72c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kALcnLhXo4qkAHxSju1nE7ByD61fPYbD22BXyZtm7yX1aniqxhKcCMNzRuSfTQsGWAWHjjKzocbKtUFwoSPrwpp",
  "key1": "3BEKDAxL5nkJfHYVg5quomQWYtVFq3tKvLUughyiqg9krqmyV3Unu92NfueUkLP8ywryWNFcfFeaJcGdTMgdc25n",
  "key2": "4VfuwvQieJshSWVtRrvQD5FCjavzcDMux9LMA6d2q9Vwz5qhEsu3g9Gyiexk4wSK8toEJVzDKu5bbXjc8TUD7qRc",
  "key3": "5ATobXYHSyUhy2N4nxT3KoZT7c1kMuCgLUHtJmV3PB4vnFjVp6ZqNirUc4Gd6v2g8giFyZBWS59uC234Yx6AFzJv",
  "key4": "3CdJ81uHLQMMnqxucsXGMREKozFk1XtQzeLssGfY2JtVG6qE496Dw44QrvW4CxKvxT8o7swgtuAuHsbmPKJxSDDw",
  "key5": "33A9EuibdnyEnat4NB14UmpjL9yEMyceP712NuxxWrmDMtBmkyaASuQL1dMN3TuXR3LCEiA97FTfTAYaKBdyoVXC",
  "key6": "5qidYBJQBd1xf6ufadd61xrgoaLar6SwpHsPtau8fBKjqznAkyLzLmvNbv5RxFBsVxS1FK81uXgcuTJhiG4gifHY",
  "key7": "51NoswnZ15VQBXcHLTtYjM4zy21LifRFiQeV3vRaNrZSyjPfLHPoJ7mcQvpmSA4UVdEJePC1Kj94PRYu5d7LcAVy",
  "key8": "5Gyzyc5js3JLJYQWGJB97wwJzGtobRg3H3ewPigQCetYFXbf9PeDX3ZH2VJxVu1Vec6io78fDHH4ymUZr5biesgt",
  "key9": "2maZ513xxhh7K8in1cenVUZgXymoyq5MLYSSC3pLuxKU5Q2NQG6BVbH4eNgDf3bEUzZttaV944nxeLgygyEG4hJa",
  "key10": "4HXfGEdRmH8HUTvrfDtjisC1MBX2DUxoLqqazRTpH2Hft2MHApQkTmeybnwrccBZqd6NEHAW4YYjcpqbc1fLhAEW",
  "key11": "5xQqtNSPtmxDefuAnAZC6rhnz23pJYUDM5ScLByFRaLas5ShJjjA8nS3tGx4YR8Ba5fCyTUGiEvYHp4PiNzNxGJh",
  "key12": "2c9AVoBLftmZsKB9TFsYxv5oQYP9ccxKM8huyKS2m3fhKdYKTnrzp3pSTq4sLYMtTzD9ho4GTJVr6GNrR3ZBqJLo",
  "key13": "5QNRj8a3opBKHPj2aareHTETAci49pFz5mNyJ3F3rEnZPJSntwzny3eZyopgHeUQHqoNRSQUm2K5wmSXKAMGLYm7",
  "key14": "kDeR8rEmGY1pasaEQjLpZ4ke8GTkEXt8Z1cCixyuzW6zAqpnwWk3afTAiEMy6jEdWMQyUNGGTogwWqLh2TM7syb",
  "key15": "3fbJDtgZGRSZXkbhYH3ddsq6f83UX6oYunj2rg19WMyNWiLdV8XpiRPSLrNU7uAHJx6TiYBFuk6JFZ6RS89iTvyH",
  "key16": "2ZKYCbEexmeSfwAgWCHXpV3DsQLM5RCsTbKyrf7tqYhYjyYV8F3Z8AKF2zmyqeL7SF1cp6zbJcnxzYfRsZxzXbQw",
  "key17": "ZGcy7VG8Q5WoXgz6dghYGQzUqi8dvPrpo6T3j8A31AEnp8PBijReq6mxPyc63g5ztXuDChQDcwKuEtCzncYVirg",
  "key18": "3DSv2tEHnR1ynkskQcKBWuyxFeYqmyth2m6vFcUbWe49eUreNvaQqh3qZJ2WWjs6sG4yvHmtRZnGjVATe89GYKMR",
  "key19": "486Ug9BzCkGez7XSxSqeAHFudXHPCMDpjWDGYPq63YdMvwiTTcV6CVKCxooB7nV2uGumdPiPBfunChuDiei4Tgy8",
  "key20": "384gSBJXVWixxKV4rDvEWTcYVZgHjaNhHJJDJdbs3s3e8YJnTTJdH61yULTFynsheD1k1iC6QGaBtJvRM5P8HnoB",
  "key21": "2aMDRxAqCLLw9Xvb6GdDhGUdpTvVT2nTGcm8gUcwvCHaT1HQFNeRmkzP79DsfdXaTXTeFwBB5GWi93RKCTMftyfA",
  "key22": "3dRVxsstGiNEh7XYngedqFq69Kv32vsdHGFGzhUkEEXeBUXWn94vyi2tRFQvCgaDbSDhtaYDWuFaSDb9N52CbJXW",
  "key23": "3N1yNEV9Hmq4X3fcA1R99PPmJqAsEZzGbzy4YYVqy83UkjPd2RpcS4UYgRBZzAo3SqYidq88oLshANJbFJNt5E4o",
  "key24": "4zHsgPzv7iEviDhfAybcAabrhM3p7PNuyjdgyjAMzkib9eWoQK1LT1fm3Nu1ZzGwLa8ztqmucxAH4RZLZC8Jaeon",
  "key25": "52mMi14sGXNCUdCTVWH2GXPsuxYBPyy8KgpbE115hW9n93da34VAWy5nAAYKgqM9dCSKKp7VtfW7eBcXBMcc9ypK",
  "key26": "pMAWdARne5H7gsZgK4SJ3t3fLk5Rg4CPMendEwnrQyvtnQXMnEzLzb4bmy5YyAquCz1qEsL4gYFbQDASMxup1TA",
  "key27": "2MnjNRRjUwwvftodVYRYaNKMny2iPk5edHHtog6itfRLzbBE53PWMjeuxnvxW7iGpf9KNN1d9wD82BGucUTTdAG1",
  "key28": "656tAXLZRF6iVmus7V2dwoyiRquwY4usFBBTPSABpYDfFLchUUMexcfF6QTWCBqrGuUyZML5bj3Qq9QiXn9FEFro",
  "key29": "3SUZ6ZkKP8Xcr2hKGB6kdjSCBuGzuJywkrNPUrcwmM7ydv3QGZvh3iBLAVdDJMM8GnfNdkF4WstNKpk42igQTY4R",
  "key30": "4QyUYtf6TQoVSFLTA4xMWghwGe5m9wzuVQCqQEm3CWLHSwUHgA95J3aeafjoDqXrFH7n9jF3CJ6YbUUZ7jWCdZLY",
  "key31": "PWhzYyAZn6wL6i6qS61TYQswnztg4qmBGTtkLsJefdJEqDAGFctnxCj2XH6LeC6Z99ScmzumHNWynrLwDUTV5yH",
  "key32": "3oYTVibRCCgKizWLuU98TLpS714PwNmfxnGWJvKwRyryjecT6gvhmKYwwtG2SDixgd2R6sCWLprejXe71Spo7kwa",
  "key33": "aE65G1EciaYah8ApTDBkTAyLeuPLFSvcenQAJVbWp1svZ3PdLJ1NZrTssggcyfNBxErFknBCqJJMCJSwqHSE7wA",
  "key34": "52tGWXw1PDPRtpAjVr4X8CX5TPCYsYSd8M82ujpb4cQwM8YWMoK6CiCS6TCDosxGcxRBtfMrsC8Lms8RT1JLr75e",
  "key35": "5WqbfRfcTZu5hVdxBsQ3gxH97Hd2UqGLBS81rZ7VNYXVph9718xLdEbhzEdKLyEei8Aze1XBYhVjkjRgGmybPWeF",
  "key36": "3u1UzkkUhPTo4Nf6ZFHiSymACLHshs5CyDw5EkQRsdLLxSDFi46wHE1k6hb8eeraBqf2Feahi2S3MMM84mNe5Aub"
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
