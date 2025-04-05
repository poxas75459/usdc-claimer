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
    "rqWcR4FqUSSYVh2ef5fNgVgRmBB85WZYfyNEAu5EvWHvpcSuSHEDR9KmkofWuH2Z4fZnb5fFVLd9EZUL63RRpCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yhiP58a5eMFW29WEanyWqNMMQbS5YaNrgat8sPQ5ZmC5iDHWrARiN34sDhQmGr7NJp3aHBs2Ft579HhhaqhEJFs",
  "key1": "2iESEFYXcbnqi9VYGMMdVLB7URk7Svrp9UeQqocvmdyVzAy6Q8UiwKX3ETthFr4nrv4KBKGrvMfUbGAK6ELsR3cC",
  "key2": "4Ne4Gxf48LXHURV6Xo6mPhuzFkJomHVg3fLsafGA766gWjyUndsYsULBsZFgqVcHiw676Takd31cfb2cK4diWwM5",
  "key3": "5dn2Aoi66W332fmh8FWuBKpqkXEr4vJv9qRUeQik6b1bK7yjGdP5S6eYrN9NfBe5E9ScvSn7jJDB9EtqTxpEeuNA",
  "key4": "4iu3sooyqbuMMx9CQHJkiQsTMGZ43cK2ZbbBDyxephQANmxfnFRnfk4TFXJnQbthyx5tWFf9Y6o3VszzdkwsQy4i",
  "key5": "RH3gKzf5ttLhFGJGn38ez1C6vUneKeHQcHYmm52DTXt6BG1mWAgePxro4uAZ9h9PBTJ22XYbv5duGjWtwkJBvGg",
  "key6": "2j48ZWRJUg4M1pSR8zMqt2gamwUMioTwWS9YLKMs34ufEyAF1XtDYvtYHMT5GWqHT8prKhQFcYEgomsKmYM73rQn",
  "key7": "4au4kR93NBA2yDe6Q2GQSVfoF4DFB7wdJ3qeBC3vM8i1B1MiNsbBXknQGXGaLj7i2xgk5LZdywnMjkKVkjME1H8o",
  "key8": "TgDM1pqjZWhKqtfNtvQzK8U7czp3MADfGcrqnxjMUyeoeBwJFkpdsMJ74ntFTgghADtrztBABjJmghzXPA46eYD",
  "key9": "PGgY9hpj9hzAjPaSS2qd1Hmhqm1QeZV8xPeTbsPMLH2SWeUd3yFVMCaHjLPojKyhYjnskkAkYQoNzFt3hJWwsLh",
  "key10": "51XibAM3oeYZY28CgZmpbxxRgNa46eUYP7LhCCwYLU3ASwbEoW3qtfqdyQ5htKsepEfybFGaLzDSWa6QPQBBa89u",
  "key11": "4W7b7BWgNDLMcvToEcxKr4wtHNUu2c2gXMkCxaFgvdpry6RGgJ5Qk1TkWSr2y43NZNXmGu34JbSDnTEoXtheJGWb",
  "key12": "2hK5KbUL7mZoqqccRLJf7CAJX2HhVqNRXWs4PzGXoEFAa2Nazezua3yxVi7oaioRmypoaFwndkBNotHiu8umz6Mt",
  "key13": "5VmFDXZCmRXkA5ym4x5pMsvYUcG4TPNLMXrn4fGLfUQPAS4w63sudrCUScJaGFfmksagvAb7gc7w9Jos6qH8JmSJ",
  "key14": "4gWU8R6ksDFAM86fV6ACbFmTJxuCjNc22dxu6itrobDxvL8jK4yPd7e6Jy4p4FTtBH7Qkdf1CZggEQQBEKEmA9Gm",
  "key15": "3xKSwqz787p1mqvwcUcoMrb88qREkq2PjhDHsnKzVoknwen33H1aiSjSGrzA4f5MHRGTVwHVwjtd6yPAW8NEsLXh",
  "key16": "v9JTRErdfmVsWbethyfJwyr92AZFGQc4DiE8Db4KopNicBqvYT82SVLDpLhWHv2RrsTtNVwQq2oKjdw9fuCV22n",
  "key17": "2Su8LEqqkX7iJC8xUrx5SFu7xfRqpfcPrhkXRNusggLG9gZjMT8b1AxccPFYZjwoQ2ZCafz5wniHsnFMsV6zmUJR",
  "key18": "quvm4rwkK6CiFvDwZ6QTg7JhPfqHYV9YJDsGCzCu4c148VpMc8n3PitJ1BQP5D6n8wWHDRMjKLyeCdd6iFLBWvp",
  "key19": "3t2q9Hpkeeo98Cy82zNLs1kvFoij3owgvmrQQnC1G9LAySPh5mjF18Qbiu436KbzGhrgqy6rXW8dSfcGqP11t7gn",
  "key20": "5En9WHBgzH61uptosfCUDojWC2Jb9QurvA38UEptyDRXAzCNiCFqg3u3KcpX1HMCGzeLvPEkMZD9Y3apwGRFHpYs",
  "key21": "2tMaEMh3XF599Gh4iubMXdfHeCDyt5AgNtHBCub8WoR1MySdjyXUvC1qtwzVbRARB9REfbTVd5y51PUs8nT24S3g",
  "key22": "o1fmv4myDHFteRq4zTCAs41whjvFtZynXeDep2LJwsJXfx6wpZCqrbDsfYK9wiLKwN1T6YAeVbsEd72BEaHQjLc",
  "key23": "Ao4JEh4oQuzQYcReJ4g1kvUrAkSTgSHPKUkcUZX762upQWsdDQ3Cursk5ChdxvMbwtTyHocftVi8TPFRkquikSt",
  "key24": "qvPqJvZmskztJ2GVtwMEYXiekGZGUp98HaMhnD9PYFbM6aoVAU55zjtypvvCRjxehAgJqA2ozKv5FuH219YfL2x",
  "key25": "3PMQ2tjqQ4uKq2j3fBXyPwzhDp2CpEXTiuYn3MqoMqKzSyFdmjMvhHXqwy9wh37dD6jyJZqoJqefhqnnkwEXBe4B",
  "key26": "5JJ1dgJbSTzLc4qiXmz4jahx8gRviuMFggy5nUtoBqr6uorNgd4MjspwUw9Y2ezoSvmzH4KmTNfDAU6DWsE1ayf7",
  "key27": "3sA7zRWPf4PxXMP2nQVDzZho9swsN3GfvhH182yFCPYd5ZEUEmHD3USe1xxuSAwKnFiYGstSBVKDEoPTgvSNnPX9",
  "key28": "2FCkaMNDR61yD4a3nPBPvi8wXEBM2KNto2taVV5L9joQTVcRRhF7dYeqA7LsiCk9wZdTkjVJoKfpfB1RcRs14PxA",
  "key29": "2BanHKoBxPYXxHBy9XeMShGiQenkUQi9tYMwEPsCunqDoeSK9E1a8iDup7y2hcRowR6TRWyHNQS3quwA96u2PTwX",
  "key30": "3wxGsXHSat1wsYHkPn7suSx6bsWsP9GVMzwmb7hL1PMPEPEUgA9n2pZSBUz5eUJgRph5YZLBkCpHupMj7XwRqkaT",
  "key31": "Ggn9bhotafNuhebxnZoYRMtszKap7R6Yht5hndZsX3wBcB74gFfmCey4SPeA1CmuBajayw8hnTqapkkr8jihTuu",
  "key32": "2fS7jCzMHRcUfpnYAPGTYFftbtknuKpDqqur3iNVWX6uJndZxL8h7nEYYqprAJpeC1zmrH23MjcLBrSbSDBTimGb",
  "key33": "2tyQu3SFeSrrYk5LAninMSb1BZpZHZigABqeyLt7LexoDNbE82CP4GMwYKA3jER6bVbtqpDXRvDLwz49AiqFmSun",
  "key34": "5UxoDJ6Bc3cV6dhHr7iT3cEqt1TarxPXxv7EViX1wbNnMSdWE6cwMp1JAwb5SwSi7hkerkswYhGTeLxL4o14PJJe",
  "key35": "4zmR6cUuUZC8V9QL1W2bAEmnia9X9uiNjR4uazZPztbEAXiTe9H2XhnVix39PUKvmjWXSEzqmmmhQtes6VeUAesC",
  "key36": "5KFKZUx3SkV3XymwAU22GBcw9m6vkvGz7DESzZpaBCK8L8Axoc3b5kHPfaaFHjtRXQH9X3nxrjEapcxcny2bqzQa",
  "key37": "Xumb7DFXJFWn8ta2g2ARBjqpusJh31oPfc2NNjtzGyU65KVsxBsqJ5ECd912gRz23rSJLfjv8Sc1fZBA9eLTSuY",
  "key38": "3MuA6XSnd6YSC98PsKTZS1zfeytWVLRtfqUqL2UhhYCxn7Y2nvsKk7YAmDsax1QXQQmuwR5BiMDJULqqTB3DDdH3",
  "key39": "3tHxSmj1UdPs1naQA1wwziwBvXKkhJzkbKs48JD2XGH1BULc9AjQJ42g4cWiKqK3kwHo3Dsm9qj7iYD2LbbnZLYH",
  "key40": "y7rJgrPfj9PY4GjnivQaPPiUSReUMiG6zNJXMdSC9f42qoEy1ucdktgk52uocbJgYzMgH2rmavN3C7bbFbDV2vG",
  "key41": "3Knp2TscA7u1MHMtyrDujnkzdbEUufezar6VpymYT2d3arjaYShXYiiaYS2Vq4LphDxvnbjaopu2vrvTF5nKszV4",
  "key42": "3zK1rYyFpaY8ALUnsvrTPbbiWk73wQ6nVzbnFS6BEKtipN16scuLQ487mE76ejjLyA1uNaUYaN8R3ARRtxJg4ywh"
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
