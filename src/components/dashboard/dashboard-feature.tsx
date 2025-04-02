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
    "5nB8gKXKSwTND5rUdpjaPeggvLMzLbzXspHZR6QxAavEbAxouV4FhseGMonbuDzknbrgxdWuSBijedHgtjsYMr5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EHhsj93phAXHgPDmSo5gZCCoGdw3HK8b8JVUMkjsDxCEa4qoefCYE8jZPLnXdhAqnmthtc8ChBdSrwdHdN1i3cj",
  "key1": "3nzXoDodf6Xw3vG4qZvDoJHpBuJL7nHMZtLpzVzJbdK5iPZmopxu5Nbq4wLbPbJwBCazt7gEzwKQXjLRPmDL6VC5",
  "key2": "DkrayNU7kmW8rM62SCdnCVZk5MwHJpEpv8XyPW8hmpUoo8SfDUDfpvv181sbysESfJ8FX1s29gui7fRE982dcJ2",
  "key3": "3vCoYh7s23kvAPQ32xgLLuyx94G6c1yTuGf4dwACPvJxvV5WaDsayqkGK4uMp7rWERUBEpBBdL191uWse6SyZSrf",
  "key4": "2A5cN2GX1fo2DU4NFg15khCefjEPL2qoq2YYCCy3GMv5Pk8GdXDUpngqVTrnVXUdiGYDAFeEnRwhoh3qwWmT6LdG",
  "key5": "YrEKcUniinAX2ookw21mx3GKoCytHLu6e3HGnx3t32xX4QYRjUeUb2MmUez7TrvqjySgTRhdwsvYZKG6v2h5vRf",
  "key6": "1cweWct4akAAfz2xFRa1ScfS3e3u1VkuxDA9YYX8Lu6hpuaT2j1M8hZ7K8TfJsQgzxEqcDVCun3hqdH2T7W2jjh",
  "key7": "3ZvBz74ZH1FZiF4atLETFfABF29AjUSqfLFKgcu8xAzPgXzGaMkm8yL4NwNSC8ipQw9XND6mYptpheuK8UDUUvE",
  "key8": "5xPC53JujWiirAZnQNKY9gaSzLy7ziQm3p4LuChfPB1WSGguo3UAUSwnhLcZeUotCS3rhuMSRD8PxFQep2UdvwtA",
  "key9": "2PBFgX8L3rQy7eU3aBi4v2J5Xwf7V4DvkrB4aBn9Qf8ek3faa6dTL6FqAoP2FF4FVRDLqumf3rZ1HMPB84evrW5",
  "key10": "2Xw5ev497pZjaYK652yoFK39mD33yA9mHiCEZWc4ejVPoVRzut2A13sNeD4hhQWrMB4vAo9eiwddWTQjHJkXVKqB",
  "key11": "2u6NB9EnqrSUXjXT3CbUEdA9KS7DxwGo2vW2sUFUzqKgydFLQRhu3jAu16nqGWQcqTCmTErNS8iRKDaZgAJ9Ht7U",
  "key12": "4AgMb4NL9CqWpwN9Py8SY4gheUr1cdWgYVZJ8nxGWUMDB7CaxEysqXhys4CtZugyj3SjRMdtm9f6RWBVQaJsBC3",
  "key13": "66WG42bhniDSdHxfNmYeqUkFikuqpjfc16N67sJq7VHQRffSU7JEnCNFLD53hinWv8EdnKXFoooo7C3B3eysKY5N",
  "key14": "5sWoCzrLVDAeuhzsPZoYihJxm3Bt5iLqLcr5W8zyjAYSb1VutECSHcPHS8YuoR6hA6m8jwyzMmHdybdwCdiTUrvU",
  "key15": "2VhHJMuzsyvaHCP6HshGf6n5t6N7AaBHNKfMPvTHYiSPMmibhbpkr1cmPoaFLT4YYLob8KfhpJFennTJAa2ucBME",
  "key16": "2QcUU4qxZcgmNrBy4bkSdP4CFUEpE7EBkwk5yWJ5F7BWfcEdUB9MPNYaLbv8N3NWnHPSeqiJBKQeDocSVBUKrDKv",
  "key17": "4ZZhKyFVwmEw6ukNhPkXbFHWgjFM4XrPCrz2yaSo91ZHYXNcNa6k7sT2YvQZjqXTMZdW1f8nsFpejA5JuBDhmE5Q",
  "key18": "2vB6Qw67Wm9uVCocAystouA5uMKd18NSHy1y2NBfADXiVTuMHVmRCPKdUocas6yz17iMam8sHzipAn62Qi5T3qGM",
  "key19": "39y5LZrLQApjLUq4aE9fHC7ABvc974Vge8udGzxgHipotdFprzpgbHVyFDGCLKjEVzaUAJwmL4nPcUGq1NJHfCAK",
  "key20": "2vHKM9gLzJDisBgdgw1jpogcRdbWkquSL37PynQBsEJJFUyZqpezQV9Xx693xDzphM5NKg8q6suAkKRCF49bbUa",
  "key21": "KBgGKfAejfBEUcTS3jzxcFRASRX7YjoUTRLgufBp8A3S2HfDziRAkeaJqkUuYMg6nTPep65Qn8i52vJrvHAkVXn",
  "key22": "5qpJYMXhKnn3P9dvYAA2PdW7fvQQc8mrQuCf4USsjQaC3VXQZSUEVGKU6qTJRa6gNueZKWNMthCdH9nDgm1gUotg",
  "key23": "45Rk1Ch4AShA1CcUnUihBGsksycETAzT7xHU7TrsGPXcdgy1HSb4C9GtH1eJn2VBD8wPAPf1132VBP26LkHaet7h",
  "key24": "2ud54Jw2yD7YiX8Aex9oXvzECh39G8qTFfXqyTVhyNfzACfLCqEab6SYRWK8LhrG14ozHZFJdwTd3cHxRqs9AS2F",
  "key25": "4iGPFrxwE9xxxXe9K1aEWRf1GNxLuaKfBjAMzhyKH6ZkddDY9cBoZgt1xErPmSvRX8eEy7FtHVXJoFf6ZP9sumkr",
  "key26": "4BABCkWsYDhtatuAWSJLgSZHze1bdQj2fdbnKvUprUXnMMtWfdAWR2CUWUkYxJUvTbxAT2hqLzKmNuz91DyA3oWt",
  "key27": "2VcR6EBo2mgC3oPAuRG6W1cMf6j1xebV5ZYB3aUDXF8YuTtpt7G9r4GhiVYZFMNczwy56ZeqMAsJMUusCtz5A2WD",
  "key28": "5mYA8wY3auNe8GWNhpEknzV1MLB1r23dkcdbSgiTAhg47Jdg48wAmdi6juRDY6zCKUGZ2b9F4tq7HoVWidNxz3wS",
  "key29": "4YVa32ZPe8jfa4WJGXhT2uYVMuUcoFrxvPbpACT2FiBxDFwfTJ5wRrEhMybPHXRKTFFhhBgpGdkSbX8ssDnTkdEv",
  "key30": "hKMaXrsHE1g4AGuWhPCGEAau4RX9kQbJHNJ8Wnnf1gGZpTh54qgF26nNBgXubPhdcHpVEvjvh92JWHeu5HEfs8U",
  "key31": "3JNFuJ8crWtMnFQFkZuba2VExzxVFR5AmzTrgJFvSYDSvUUXSVmCpGv5TvhS1K3zfXu3AXZ4Sra99HJ7eZ2PGjJQ",
  "key32": "4iEM2LLrqeBUdhUAARoCx2Cf7gkKf2BxU2hoE5WTcGFxPVupffSoogiZEpaqZQJgFSFK6Hvoa4SZAqwtdqu98n1C",
  "key33": "3eKnjqcFjDUMx75ZDC7zjTSdT9W3xbJMSWWHLavmaPgnjJQ2TDf7n1vAZFjuNgrK7p55cjhfbxB76DZWPdcuhHMM",
  "key34": "49RAoykmhRgo97G4eHfs6jvMfomEmJ3WGjjFBuRq8NDzuEDwmSDP614mFmGRbci1tZ4DCChGZZ15YSdhMtWzNnCu",
  "key35": "2ZrDRtjSrzZwPyYXsQNagF551yjyotwGDHozUwhkuian9kgEjMwmHhUX9k4Tcs58uVBhrpo647BgoweBPkMxfR6d",
  "key36": "4xgpuv2fWMqYF1RQVDhJHSCXVpeCbSBwVMpP4uKzC3kfK6nmaNTKFkURz3p6UC4GQv6uPm5vvx7itLKYvh5j4Jqp",
  "key37": "3ziGHZwn5NHgx9o1Druzqh77KvwwHyw6b7dCiN1JQoUizHR1AirFPCdRn2QCxvvjLR4CxPWtm4rwERTrxt7Sqids",
  "key38": "2U9dXKhnmcXBVjfMWU1La8ycRV3uh8tPPFkGnVRczXET1UWFoRzEELjzt6ysXwohurrzLWfjFrZVBeMxDLuQVG1E",
  "key39": "3pS6yBRxGXCHNdcyWbuuJxybT5fSAm1cw3JcvRh7smKHFnE3n2ic6N9x39bHn3k9Ef68wt4sASB8z29CEXcRNUyE",
  "key40": "2WNZoHsvqE8TPQt5DadpYTRhwmPpFxQGaB8QZj6a6hVF35kYgxUT8upPsgiW2vDGFci1sUHebDFjwAdmD6ybzefS",
  "key41": "i2Po3aEmsZw32UGWGkXjxTULsJQMJgM4BxsC1DdivjUzBKtLhRbPjmWRc7h4WVPNvRTfqU44mhX7TYjcX8M5i7g",
  "key42": "4FN17t5hMptihSJQtnhGAZsjFHofTC13k7iHP67DVn4V8WBvMmroQQvG1VLTRCcYhAcdwKyrQM1Fq8s1dG4ucPDa"
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
