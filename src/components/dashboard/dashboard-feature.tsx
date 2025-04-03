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
    "4XBEUVLMnxfDkpMs3KctYWSZrVPM8nvo6LzbZSS1EcEVJJAZKB4aMBXdjaHcWHyVn8bS9xdTtaEvwA9eV1JgiZSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aY7LeHfQ6mtCA6oiFjQvLoDzA6ZXMLeUNiwmcsbb4is24GtEnbiBBBCTbMKBNciWUJcpjMVEPf1D1VWQJDMB9pM",
  "key1": "4c2iNUTWoMdM3zGekWoBDeYw5q9HzBCUknoUuSowubM6u2DsGx5ZtPFS7XtjF22ozGqjKuDV96cws8nmzPvM3PTC",
  "key2": "QabzMmqFnMSGsGKNNpbnBgWvh3bVcVgLAvRGxGkzXFK4iEYWHWRXoes1WhCTssoNkDW9c3GMP4MrRGcrh2RZNAm",
  "key3": "2mDwJDM4MZr7LGPc62jCyEgpshDZRerL3jrjb4MNMTMHtA8C6fAN6dES37TVXDoubMGMj1wH4SArNJwewHBmuLWa",
  "key4": "47YzKg7LDBjxdug4CWGkURorr6GHR4UQ9TMEeosb1SxZcfd8jQTM2CaqtS1RS9VaWthPxAmh6r6vPkAw2BvJyfbt",
  "key5": "5qdJvDVXkKWXGKxX369Em7KahMYcF6hdXQz2uHkttATbcwakWCMesEfsCte8GCipSi4b7khSzSY8iSWMNDtAXRej",
  "key6": "5UTqm4qVJY62ft16GohSTaj72HYV3Pr3oBCV892aksE5QoBp8phWYaYSSZXxwTySLep3NBqrc4ekPt4PPVDKYjkx",
  "key7": "5WXvbimUR7h7CqY51Rv5TqDZXAgWvJs3pirGKhWy73W4B5PDdkWfVkkCH2CKppKZhemjF9VLNj4N9qnXGr4Xrpug",
  "key8": "4cEpvfXGQ6jaFjZ79h9tCorLhpX1jQqBxm1TbPCDHAnz25Sa3JoBphdX5Yw2WqHXX8V3cMPBYU3h39rB22Tnd5jL",
  "key9": "2ZHG5RvwEzz6hHWjnFjrABNjD9pFgX3Abowxd9sQLNs1cj7BkKVyjrugG9Lw5xReqn6dEjomWtM5e2mJ4rQxCehB",
  "key10": "3e1ajD6GU11rWm7mfAn1pbRnzDDZxVn4DNjRB59uVrdtkXskmZseDWdjadk9yg7QR3CxCKRkf9id9JL5zCsfPkTe",
  "key11": "5EGNsXsspixW3NEc8bhDRptQc6FX8XAxMERrjhX1D4ZKsHCsihdLZJyQfWGBJhsCkpMqYQ8TQcyudFNpGhkdjqfb",
  "key12": "5t6Tw1zhQ6A5WSftGVf9q1QRJqVpsN6aMexZSC53cKLZtCx2aN3hz5p8hr2zL9ZcAZp2GPWYwJHi4LreAucVbVmg",
  "key13": "3WFQQrm7a2Xgtn4j67qCTfomsFNVJ8a47ZsjsvX4G1TTycbWeBpCbJsRyyxMm91NKKrExkqwtxTAPqcffKiMEiVL",
  "key14": "wC6vqhLf8y6nS7LdVaF7g8fHi5fSc91nEpyPhcGH1jx8RyHPeSwf2bdjmhF912kPtJsv1ufXJHzKyngRUww45kF",
  "key15": "2kU6F1xfUmzxgsU4QZN1ji8Zs6UmrccwZmqjuyZCgzjbbVHvaRmnDhmfNrF8ozPbUrnuc6PpzioqSS16iVp9MGLd",
  "key16": "3vknxM9TVDTA8FXYHHXZAG9EC7ghgP33cgW38HMm8ft6mLG2CuniZok3itwFsHtppCg7osknbvduDMyauJP2zqLC",
  "key17": "5kXwjFcqJN4csX3jtqiChBosxj92oe4EqbdFH9oMsFm4pyF7P7nAyxXgZFw9hpUonhcp1qvHGHve5iP2865HmPT4",
  "key18": "22xCm23wz8KB2VzpThTnDSmgrUvVVmxAfkXAx5fphr5LJF1sYCvqcHN4MB6RFT2SPdpj99pCZZvAMURyPFyZ75b6",
  "key19": "5KHdkbLkbi9gcedjTBCWZfkiUvi1RM2WE1CBYygfFErhtBwEGnpTg33husXEiYrXzkyq5LMXiSJkhtZ4SAHVGUzt",
  "key20": "5Aym42WUyC3YoGTvEMXPom9NNJjo9Nw5HaQdDMRvgKbipTuSiTy8VKhgD2kbJt3fjLCmABat4H7AddV7TgmJf3Ej",
  "key21": "b9wUXedhLaCYkQyAsPessBdk4A7vSv3t2QfAFjgt4FCxd1yh3nFb1Njqr9778DvczxNsHPNZog88tHATL5S4umW",
  "key22": "q7yShjwM48J2hR1UhDd8CRQmjFMZwZGRsaLQy6G2QjX4aGzNb41CTdKeBcXPM6mtKRCe9bjTeGutkiZez45GLGK",
  "key23": "GETRBQfBHUW6yjPQQk2gVvG1EeDUnCyidsnCi9hnvRq9kEAFrWjcc3u72gVUep7X2db3dWp3Je9RcmPE57SPueN",
  "key24": "31La3DjZEXttG4b4FnZ7zVYY6fke6ceejbpkUHtiV4iMmtZL1yYMvgnq41QXxzZg7wZrCBUzFJUkodsrhCw1u5Rj",
  "key25": "5m9d8XVgedkieQngbMNQXJRjxe9UfH1Qp7HEt9r8dEMDhQPpyjaQoTHA4N5wiLTegBueRrZp4mMTGSaWig9fHuqm",
  "key26": "2thf4NeeJRJsbQapnAdGL9wuMfkFFVeSVrzUJCjYzPsbem96WHGs4Dof9CHPZ6uURiL2udYx4pQvRnwmx2rH6xcv",
  "key27": "3okKWjS5tXe2RSBseJsrBEwuABtWTGD2E3APhqHHLThyYnpEEygMEg4jH2wo5gf1dockyHt6XtbGgSacN1hyhCMN",
  "key28": "3eYUbYoyJTfeVAifuYvuqTX8aZnDeQ933Yog9UL4Bvx14qCv5CyHaX2doRXZ1cfnid1t3XALU7UoManLq5CubbVz",
  "key29": "654Xcmx3mBZUrHwypcshwTf2t2ZkneT8iKttXPN5kW5HK2j9QHZyK3ibVM1gp7LJBnPVYCscWN7rephEDnyHDknx",
  "key30": "5yME9Q1Nyqip2x8N9612fF3tR9xE56Nz54aEr2zWKig5DyYTQjwJXarzQYmxg3nBRa6WMxBiUStpe8r9mGViXmsE",
  "key31": "3s7rZtKy2bcuntaY4PnGLc7VnQx9eknUGTE7f5o63woadYLK3ujwbAW3FMChNsD21BwdRa9MAoDPFN8TKfrKgdHJ",
  "key32": "2YFmwweuhQrr28mvarEx5y5mVYyKGJmugoAmasSN8WGwLKFCCnhE38kH1eSSUAgeju4o33ebXh6rEDaBzYArGahv",
  "key33": "JhyjQMQjXpeyCaBWC1pq9RzFoZ1EiKsmTaGFY68N2KoEZjNemXnQfw9fGtqpedRaZ7uw2RR1Lq2uHV1cRj6Yr6x",
  "key34": "3ePJaSrDX93X9jdryUY96BUn7mDEXCrBP4c5N2BXJWtad2vqrpGmcs5PbetJ94fK4ioGnkLPcdrfvaFvbAzHwjr6",
  "key35": "5TeY3hg94PB254Pi89LW6Lyoq67LM3GH6QbPiZTvwFSz8mnTcEnpYBngHEs7kdYssyBtLCvNr1NStfyBaWfD882x",
  "key36": "249m9D8eMdnSBoQoTaRDJK3GVS1uhe8Syicphmvr2c8kTSraYo563nShgEf88VcZX2yxR7JFoPVocQLmSNmR7kGM",
  "key37": "uUjKCDzphYLLHmNhkVqZDgRhmNKSWqUKdfKpnrWrfQTyDML5ik8gWUrvUb5UHHwp6qNygK7zdiyumroAxyA99hX",
  "key38": "RXg3vaiuM6B9wEQo94mcsXqPBwhxegbgCVWvRXQoSWGrQyLjQRs5yimVoWTmcmYtU8mDjZVj6UpYSYyqdxqu6sz",
  "key39": "5MFwCm8Yd43UfrCuZ6GjTfezPwLYX9TLbzbD9WEJaGr4M797rtiDPBJVp4KAnG6cKgk1M86WJ1W1t7emymnZq9vJ",
  "key40": "xR3ooFgjW1ZLNkcwPLYpcVqtsCSK29dTpW4epmd6SkfTSJmWMNdogtpgT4RozSezA6zuWfCdvR6c6k7GuoEvitp",
  "key41": "tvu2ushuvS3X5XQXKBq4q6i1nKN8dKWawuTQJnCQaWinBJrJEx7jqg5AcheqTXmSd37RDUJVZr6x6Fi74BaWQZn",
  "key42": "3U9tJA2AjPaqXv6iy23c51jtjWCyE1TrU9XXRJtQpG5nY3orADbLUfCs9YvaGxdvunBgcRFMLQgBCcu2D6dspPRV",
  "key43": "2ugkroHsMhhMUXGgC962pa7rDmDfqEcr1wM5hHgPBkkE7wXT6A33z3SZBfFHvBZkdAMtKXBpzyjqhXAuW3oh7oJi"
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
