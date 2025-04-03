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
    "3YknU6JDJ3ZRGrbFSn3ngwt4d3fjizT4vmJxy8uJB73SKmxhbNyTGteep3aT2vEQKqJYgHq4G9GTeeBNmthu5oJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mU2yB6k3S6LugsmWhC6xDhZWVJwEaxgZx3C3ZaGwaojgLn2Sbhet1B4h4weFgNeYRiZ51z6DArTHermppFDzdec",
  "key1": "DwkSJZUpbi4xfHPk9bZvbGANynG8rGvb1vSfF21RRqzLQKDiFzvcWyfVfuesgL4SQza2PGCLNRadxK37QYqx6Gy",
  "key2": "4K87payMbQThDzTW2fNftbP4e7P3LjGsaJfCJfkippioc2iz62SNA42rJFcDEy2MrWW16JHmsqVxTtz3aWmVCwmw",
  "key3": "24vCiSj8dr115sgaiXbP1mwyMrrybUTd9hRpNjy47CGfzHZ9affJotwEgz3MvtYy5yK32pcJ1DRhBUqZPyoWT6jB",
  "key4": "2VfuJLbNTehQLRBZT3GSs9b5bperrnfZ9KaQ6D6MsVdom2GApdPPHatwRckdTyeFm8GnbGAYYVEyFHkr7buDRZUQ",
  "key5": "3ZsndiQ4kpiwhkfbDSjU96zmzw2uSTypKaAUYF6chb4VCBYCh4a1JMtn2bD3GojCtHASQRBNPxrrJcUaFEod7ESK",
  "key6": "3yLCNUNmsMyAK31fKXh7njZHDyTqvbpCpbLbp1HWiK3JWw9eXmnTehFQhEX58BzdSYknNRfmUybpfSLzx3KsbRRA",
  "key7": "DYAnxRAVWwx8QDTQc5vv514kyR34peF21SHe9au6typyq9t7UWq8QvctZa8AGnEb8qX8ww82cVdDNbAwFsn1FkV",
  "key8": "4vfYFxhzWJBTHkK2eQPPWce6YXvzZ1QGtqrnenwU66ST9T4JPhdLe4CzaXNZ2GdSJFGLCD8U2Lo21CA4hX8pzdeU",
  "key9": "55gTJB5hQnMq9ayUJJx5dGpFnpvqWk5ZXFG2opkyjep1J5cUK1MSNB1tA5h9VwreVdBGh9qh2qUt2hwQHpQwidrD",
  "key10": "34MMFHhhB6VtJ1cuUTkMNuKM8ZME9p16gEvEv9mgWK2nZQStZ25V8dZ2FUUbRmN1gEoeBpYLm2Da5Bno3RPiaUWg",
  "key11": "3oJL3mKocGKinvFLpuVkbcZfiGXbXZFHCLy7P9MVHwK7oi9JxZEThti1kwMDxcQDdMKCCy4mGDBhSM2CQj9bYE7R",
  "key12": "2P7ZHbyZbv8Pa8XGfYpyg9zFEoCYLtzW5QXpYDdVjiYSvM6sfiJDs9UE3LAjTF41aQrGGL446weTTzrfcDoXab2Q",
  "key13": "3d17qMD9FemechyhJNDDAaACsbyhtXV1NNtvsHqbZUvLetnBSeGEaRSANtRyazYy63o1eJcojq7TEWNueEAHsi7H",
  "key14": "5vFEhgiCvTe5VNMEt1tctABbL7AmoyXPfER497CNgY6hY8QM1FnyUe6znrFz1dZj712ketJMUEov2L2ufg6z28QG",
  "key15": "fPYiLikWjv5ycPHaYqGcTdydyomK8Q8wQd2JZ9YGAKzBem5c35nUMHWgf8hG6NgdVhuBDcnMU5BbtTo4aPmRVRG",
  "key16": "56WCNTbEdoYsJzNBAAXDHC2C3mJEzom3VtU9XBqSrtX2sfcphoh7mTLxFzFsWxjTa656TUihfWKKif75dXfoJcnx",
  "key17": "4g9KQkrjc9uZ5WNG4PJaDssTCncJZrAPUZtWPRY8c8ZyEaynoTPiXLanVadskKqtTRqmskwdDXSLE2GPNdhKQPjR",
  "key18": "5H8qFzqYo2AxM2Qcu6SQAXTAKA4UrnxTFSpu75gLNsphAmKdsH6Rke4MFxSvipYs7YE3RFLsdXBU3eMkZDA5xdUJ",
  "key19": "4nrZgzR4Mezy1cGB827wfqSQ7PggXyjUpxKwdGAiKUeGTDvxk2WVpnM1EbQWy9zHzJhw446TCteMPijof6kuush4",
  "key20": "5Rr5AEqvmjmJYFNA9dMfUpFwVCBruhqPsQU7At1J2eAvSmqcWC5Do3rSEPyZn4Y3VwymJp343L9Q7F5tBDCZuGXm",
  "key21": "61iGsEF7wjA4JDcg2agFSfFGkrAzP3435u11VvRvcKG4BJJRVwsckTfGMP2nykWXvoHE5GsJsNNXAjN3xdBStpwB",
  "key22": "5pjaAQWNx2Me9npaPvnn2oiuoERTeVnBfrLZa4eTeToK3QEfP9uLv5Vbx8dkXqixMrdnaAQNwdsC7AMnKh98DZXb",
  "key23": "2HhzbUkFEZHU81r2KXyxdPb2jnfVSAsUWqqrqN6d4vicDeGp5z7rZxk19TUfSoDqtq4c3PAMMHMYpzCuUDTjcbpm",
  "key24": "41KEo8QyttJWGgAHkdaXRot1NQ3ryubCoVN4ZvviNCoo4UiAeqehpm3uKLMZH5F9rJEUY8JDXRr5mqxWxa9YmvVm",
  "key25": "fbnYPGKwBnPNdTnhMZgCDFQCQoMyiQ93EmujiswZeHyNrWQr6XEjGQJK1HHSyhfRBmbmBU3o84JbU7TqwVdy4fq",
  "key26": "4TCu1stK2d3ZeaR2dQJtLcPBdTtJwps371Lt3r4k1mGLPKHa2B7kR7fwT3YGFEb18m396ML6Z7VeJmARahrjiRSQ",
  "key27": "WqL8qfD4FgvLF9ogdMRUdjHxax4YDCRovSkV4o35KZSL1FRCcwtiXR33whb91DFavKzwAQSm8EtvetD2pQwDjKs",
  "key28": "Qqnc9P7auXXtjnHBw5CaiyJABujzPx5bNXDHgzftGDdazVkHGxPz7GfvN2GspKezm7fYUA8n9s2PGkKtkXdJaE6",
  "key29": "61Q5aAaLdh7k4vgsCwDPLNcnYzpqTL9q63A1pW6MEr3fPYvV8EmGrVHZk98usjpURfeN9sfDVCB9f1NDPLsr2qvS",
  "key30": "3hGNkZvPkNEcsCfUHCnYHzG86X6FfdngZchc2QjbxFpFCkp2t9JrpEbtEhb3FSYVBhwNY7VgU1M3EzCMN7kCtZsj",
  "key31": "Ejfj5TiDFsPFzaWehrhDb8njuGN3fFDSqst7VRDuKTRxXRvJmpJGb756bjfq2rjxDybq3ME8WGL8RxT8tmsCzdk",
  "key32": "4JgzBVMgVn4HXmQ8jonjfkojggUTDyZRrq6jD2HeBnKMmvwp7cYbC2LCsRK8UJ2H41twj2sCbmoYR8pcLsSgywWs",
  "key33": "voRkeoZuuGGUGmnGM112GC26Ka6bVg7zovc2uqfwDNexCjQQ32RJU7GdyYcSxdBy6V4LacsXnvfnGPP7j7GgXwA",
  "key34": "2h9ZU2SZR6ggvbFDmW6wyjS2LJpucCRztmyCSoKjo2GQPyLXXHyVy9J1uUtDNxyzFZCASeSYPYhZMY2c9Edrf6c1",
  "key35": "2B59okNHTk2VP1e8kyp8j72dVNZg84gmoF7QhiZWfGGVEhydKnWgvHqsQ9giGt9uMLGaRLtw1zhsuaRhq12jbVW8"
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
