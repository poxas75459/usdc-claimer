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
    "4SvLThPfcTCiN7YMdPsqGVqptkVR6jPAKU7ChLDUdnLignxGaKpmB6Y8mCHGvR4NzvwnMRH2EarApn8JobPjswXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sULpcK6a41CPoUW4NEvpsFdpH65sd3jzAvtjKD4KVjULgai6Amj48LRJucsWz6dDUTDJAdHfmhRGDZLcxxjprnV",
  "key1": "4c5hy1ZousFX8q8TrANtAJN8BmPATBPvvNpNwnQmpRrSKhCHJUkHZNX5civd85V4AtdJ3GfoCZ1TpUxGoTyo9XNt",
  "key2": "mGrnhRCDRVxQowjc328kwWy7M3VLVnouGYsjw5wtZ5Hzgmn1VFN9MvDCSHY5Ppiam2SPyAY7T5MTNPzdZ8Wb8Xw",
  "key3": "5WhW1hrHpihxyG8QP8SoftxwuLx2M1x75J7zXebWRsTsM2X4n7Gghe8n6F9xuYhK4rZb5GZ4DKSFnENrepkA6hS3",
  "key4": "2Xjtt5JzxzcyZtWyRKx6r2qqWpU3LiMjBqNWFgjN5Aersie2xYepwWD7r4sFuXQkFcip9M2mh1HsTqJp4VNS46ht",
  "key5": "zctWogBV9i8K8To3EArhxgAy4cz8TagTWL19ArW6mkt3Z1XoNBAVYhyfcaRTv1MHv9cfB7H2J13aUfbA6Nyamag",
  "key6": "q1goeu5Bc8YeHsFHRBsjA6L5H2X8f7f2iv8K9Mt2phNpySBDi2dyNRDfHd4V7BgkvGdYQxErCWPcys1zkWUki4T",
  "key7": "esn2HfdSzmxmUchdJoWPvUqUv2ukJJaX2ATHwLDiP6hTnL6pFsUk6zMrLRBngnm4ogwQhJjNrqTprbjByfKMBzg",
  "key8": "4onek5mnnhpY2a9YdNnQBWDSr5kGyd1KsnQWPquU5tPBVNQxf3DwtLxUA7HKMBBfDaAV1DspX4MqpBiEroPiDfqN",
  "key9": "5YNu836UMir5CQd9yvZVYTgFaKXFCKfHWEsexPsXjx85EWtoyoQcf5K7dc7U9piG5QrJQdQvf2Pde7JtC5gQWL6p",
  "key10": "24j2JYe5fjUuC9NFRuzggL4e8deUmGKTQdtMpCkeUKNXHTdEeBDDEkA3B1jJtFVp2CPMiWD97SX7ptMG1GsmWQia",
  "key11": "3dabr8jYaaXC16S8N3d1xZmLHUcAQ1hj5F5JrG6aTAkNC8h8r987pxsCV4oieWjK4hweBtQNVT8tqhJwwmUvuV3R",
  "key12": "3yZf3AU8VXU5VnYFeZQ92H9Tz3MPkbnGbyMx8NRrDBvG7CYWxFHhkC89z2HNoUi1Lk4arVFvLCUYoHWeLndmToLq",
  "key13": "4QVaDeCB1euY3A3RdpgkVei3pLUw6AJ31aVNCTBzvxWFtcUJ8MEzBBXqNnfsG8aVQta2HQhW12pQuj78tMsQzqV7",
  "key14": "5VgatzkKAe7rppeog5X2ZKddzpCVNd3oe27r8JgGAiVdqxhEYQQq6uZnuLmvyGBff7Bk5XbfVqfXxTJBMGS3RRhm",
  "key15": "5szhc3idJDfJNxBShCY875caeWBtTwbJA1Rgr6YcqbnwEKga8dQb8oaGiEvPos812wUpcHFMo2PcTzAZGwE7PE2E",
  "key16": "4VS9swonxn7oeDBCqPVfHqoajvCvsfqxdRe51pm1DdReynKRrCgnAamTq7wkeZExJenFJ9csBcjYzf1u79KDKYCd",
  "key17": "5kxyBJ6m6BjuzoQ8c3zhfDXCaAuJkaoaYYEVhr9y12yTFrzVw7N2HVMnRU5kwhXs4hfzVCi2sia5Y7Gzeg4hkyoL",
  "key18": "52iie4TqruHRqGRcnG1u9Y3moqxp7Dn8gDi9d8V5iuddga1VJQCoFRZT6wKjDXCQxMW71ddxUpKSvTSXMjVoyE4N",
  "key19": "SUAmwTKE2HFVE6b9QdXS6nngPSYaweNYcznBLBvZSkbF9hdAYUZ9Q7Hs7e8iRSPwLUKXo6wBTf7soasoxkVf3bu",
  "key20": "3BXGYzTnyQLfPacLUuY73H6VQ1XqHsz5J7cZmbymWbgDsFDcuUZ6EL1R8GAiHwzjsgFXKEZ5y18fhuEiVmJ2Nso9",
  "key21": "3EZUqo9wMKsVsRjHUzehRjwcpM8ZS9gxu9dd7WhtcxpKty6y9g4dfh2nSL3NZdEPFBrnUsyTW2kVR6dUwxKB9mZH",
  "key22": "46Dw98WJAEc81GoRYGsEdcSvy91itubYhUYn42fzmvUEd6DJWRJjRCkX7LYkR81c2y8y9Ca6mMvg1UcRohsskDyw",
  "key23": "4XgE5aEeXjdgHtkA81ontoshBUk6fzK31Y94hip5Zk19YrufMXS9QN141bzkyz7gkGLa2WAr3ZkaCLVjvo1B2WEE",
  "key24": "5KtQER9PfTG3FfgBziE3qW8qgk9gAu4KSvqXFpmKf9dm6bTDCGfiw6dWPJN9ojJeW3jumfTrBVyv4KMmpPzUenrU",
  "key25": "2p2HLtqQruPxQXEnkiFPhV9Bg6kL9UHrC5urQa1vF3E2oYEDkTjkW5iN5zGeKXwVkbNPhJ3ikZNUWUtVZ2iLeQ3L",
  "key26": "5usVgPiKnkEGhL6gz1gQYYBq6Na88BJFP8FWVqJUNkAUrEaBzuddV687LboyxXncnQC9uWXBuSvbkYaVLPLCheKa",
  "key27": "3Z7S6Ym4zhRse2HebKD4CLF1uEjjFSoNg3xZHACu5PqJkkxWW2ygwdShkMoNbZtpk2owCCpyB1TvyNtMMwkEuBq2",
  "key28": "59pWVRqDBEZJZfuZyzx6PaFrkjh23rESaff7ehF4WFHXHZpxmvUta2NyfsLjEUJVYTXZ5XNEG3tHocT1iEAjWfDJ",
  "key29": "57kSC8UqVDAaPBEkCsL68dg2pr3nChnxnsErZe8kWiZrWFRTfBEmjFqt6Q2r4dZqw87upUTTYrX5kzUEJWE2RG3f",
  "key30": "UPD1VdrxHJRs822t7DSHpy4sjWmNXr6PiG5isvtCDsv4PvrV9uA7gRK6nyjFyBRtFdGwsuoVF82ELv4dNcn5g5A",
  "key31": "4Y1ptvvG3FwzLwjQtCJJomn3sayTuGrNBgv6tYDS6qErgpfxnMPoVbsVsM1ommMYvRBhRVX4MFF7AJxzC9kZPGFB",
  "key32": "4rWK9nFEwFD3PkaeYa2XcwWBYksDJxiDeKgo7PiWeKyRPkv1JLemqofsGsk6TuTY4gRdPQVdiPFNuyxT59vW4YwS",
  "key33": "3sSpqpuv2MZDuuP7DmXwNsLC3imizWmqmdrgFHbZESm8sod2B9dgKSsXq6nKu2aWhj4KX9hnTf2BffXinru1jbzh",
  "key34": "21pb3wkc9waeWFZQZkPZpoGj2gtuoxkbds5NRryy8Q9pmRQTqd4SXG9RWLj6b1vcRQov8HgoZ3nhPtMXkPBDLWDn",
  "key35": "5Mj4c2aG383cBwYSNdtP3ruSsh3CbTp9688BWtqYeoinG6bioCMDAqPtFmqLHFW2b2F5oXq6eXdSp8vaXCbmcAeo",
  "key36": "2eBNBEmmnA26hS1ejkCWwCZiaCLaScrdnpPph35UCQByArTC3svwhN9a26xBFsUjLVY7BE1jXUfnUsmpEZZ9Biwc",
  "key37": "3AWJfGZ81kUP3kU4hxSqmHNrHirqLoHiHy7fumitFaWbzu8Uy8cCcFmhuAcJC8oA9WfgxnZLfx7o6ra4wwZch9gs",
  "key38": "2wx8JVXPr7V43rsvpcZxSAwfksZme23j6zkdh2cjhwULPK8nmRpvSDWyFB5vuABBJoh6iKiw6msK4bqEqESk3Uzw",
  "key39": "5irPHvgfZcojcrqWeKhq9SZWbVeTiMn6LhLLc1ZnKZbuhKW2TZDMrqAWtzoHZaRtu8px9VGGsqFDANCUJbgmAK3T",
  "key40": "w6qCoB5LtLhciqtetPkJ3V2ZKrKeyyZ4P5L4yDbPSFwpL87FxB3FAvukPman1rLovVX9oo1sao9XHf7MQT3D93F",
  "key41": "3KkPbeTE7u3yyeCGeCTiAoM88CWvRmm4iz5y2dVGpSp3Ep5dmGJ8YLr1PHGarEjshNrkCx2zS5GTS5kySi6cmUg2",
  "key42": "5chMYatnQucbt2RpMoxvSJjovhvnrKi1vDhTYE3ZR4jnwf7oVEhANuaGeDthnvkagDeYo49VXorEuYG7VuHxGTr6",
  "key43": "4EHmEeBERjh7wQERZVHrjHjrCYuRzzBLFKFe9P9tnx1RHEhhUZSkemiPsx5UxpA2ArwiKAZKaNYnLP6rnhaJB1Wp",
  "key44": "3VfndxGYXof93A2G7gRpMHWjrREvejE9PeTs2tngc4xFnssKpngnKX49HRBPa2pdDRGm5s8KPgwETRvDbVqUcdtU"
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
