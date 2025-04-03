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
    "4uAy1aqmWLwjKwEdzPg8U7EQ5jsdSFrJKhPvX36RyPV76fyAvCaqfeTi7WMaVCfpZxTvnpA3oo7mp75yHLqx4Dqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m8PmTqefh4NpEaXMP5cLpQWmjLWsDaBXh4atM8EqBgGEGi3dpSWXYEwu5oHZr8Ww3DVQ5SKamJTjDy3GUvtRqiy",
  "key1": "4kEqoqQMc3AsCbAK9pBV8CbjJE2BDYBg7cyvMvc1H8W3UACETGnti3Yz8u3JGtzRuQGbqBpHoJspunzBeCCMYBR3",
  "key2": "4A6ThZe9fR7R22cB3jwjyhBpGkEawQExNfUwt7Mq9G13ZKYTySZQpuxRrgsiJ6f9XNnAoA6RnVoUW9YkfqxJ3GN4",
  "key3": "3wWkjLKsncTczS2h1ubhGp6VCFaf1iqQsV1sWKW7mxaxn7BjDYrx5M2C4yYijWMd2QDZ6ncibDHGBhtR4uYsCvwP",
  "key4": "31fQxPWPwKZBB7kMSAwoXDStxzhLjKtwZ3fS3dxJCo5nS2PAJyuYDxCZyHrkfmaK7tQKzHvTNPNgbseCEa61QYT2",
  "key5": "3TMWmrU6yJz1ThjdGvN3WbmEA26rk7dfhbPk7myZifTyejNz6inSZjj3wdXrZQW41rW43jcU7XARTmsUa2x8xr2t",
  "key6": "FRQ5rHAQmVNFQ1APMt2MJu5v4whPVkH3CkCSRtR6H8mzNu2ohUGWcCEpUioLrB1oh4Ndt8ixVemcGkgNribzXYJ",
  "key7": "3Qfefg6HBmuGtzVRgMxap1KJV9Juh1mUhJxqTpfaGLKHqbWUHXxwGuW58kLA5jmEgrPZwvZ3hiPnFNkWbXfAytw5",
  "key8": "q3SFLChu4bK3EWu3DZbZebUJg3xDx8JD7ApCcYpDPCURXzHpEiwXHt6fceo1Yh3gfbmYXghN8Haasrngc4BWqks",
  "key9": "2t7LGU7G3PTJdtvmLjdMm6KRuGqf8wZa1Vpp5rNBysppXJe8B8SNrnM6g6k1TZHwNmriaK8EXPLgxoWxJowjNSjc",
  "key10": "3XHRy6S1MFzGNCQYhYdC4tJWTaQUnShrNRuUEyK5kxw6MgdYBp8Rhxpf3TWdzbQ722s7W9J8WEzwVjgAM6iv4pfz",
  "key11": "29YNhfogiNNZCuqvNhWNMT5ZWKVmh5cnUumD3Uyg2Ur1R9YnmkF426R3BzCZVw7rL1Nn4CEL4p4r2zEbtbxGmQ2Y",
  "key12": "3qDX65ctZTs7JecLWD2zBJLg48pARHRJPUjVZ9BEb1xx6wjquENUw7NT8dLF1SVwWHCaAWSJDjdyGusBhjHJEEkV",
  "key13": "2KiE84NvQHNxkzbBLXkqgJFxqJhGhmoiWDHc7dZGGWUa9nbA93w4tmnour8pphnfqq654RyvC85UAEPZ6DfmvNaR",
  "key14": "3DMnmbzerHbACzStzAxnz2kAkk4iJWPi6ZkYMLot22rw7EKWSL4U1NhsNE5Akq68iHDhv4gbPx92ybjQAhgSMchf",
  "key15": "4Ai7pnL2xyVjic7voDE9RDoBkkM7goJfamiAYfsMuFypBfZ5vYFgiq1YWVk4FR3JMb5NQLT7gH7J3UtodPUKLv6i",
  "key16": "4WRgzGMRdef4Z47a1sV1ESYf89yc1Rm45M7yeGr1J1W5ELhirJcHxj5SZFzSNk6ojrJThLu6eQH5taGSvVtErt2C",
  "key17": "g9ALttjCsEBBMZ8xExoV9Do5GpQ6PfVWP6QXoeoQnu8uD2UgoNB8wABd1UW1z3mudqDQ3kF6KBbEWQShnoBNM5p",
  "key18": "3UBUfTXKYePtuvdwkRdWRWgTbeZRLBvsosJL5NDdVUEGwT7BvBEJbgTNE2QEmhHcqULPnbhWvMrkBBLvPkVLcoxH",
  "key19": "2Y2dr3TZRST7EQevAqRHqcAbbT4JpegB5AxrmwJAfW7V3pkAYgViRQ8h9UNgADNv3PxdBpdySCCWGSquQ5SsW1EJ",
  "key20": "3EtWwuWPNWJfN9zJDzWBeWPuEoEtFiC96JUdZy7wMuy2NLJzZCUZK2mu3FtZuyYS44qRCunrCdCedAdsbezcYEGq",
  "key21": "2v1spYxemyaEWQgTFcfYtpBE12DjMr9BTrrJybBUZho5T1UKsgYn2sExEi3tNeRDQsVkYJUsxZxmoMA4gJYvHj7x",
  "key22": "2ZvhacJiN29mMCavgiHBD8bx47n2RdYSEiKQkwmeJ924e98sfPUbj1HNFu8vXVQNptumup2nELoaqmtBCa4BW6Yg",
  "key23": "29xnhShyWAMsN6N2JBox7s2j25MkFLGLQZ6iA8M5ZXz55bQUW45vqxzvEjeRb4ZjhGGQ9k9wPKcqr5Sz11VP9a14",
  "key24": "5Jz5yRdmBNhUsFdmw4qxQuw8wBoGGxAh7ZR8j1qVeVthWVnsdyzEGMndFtCHG2uaYE3WbmBUreykvPNoZtG7jy4U",
  "key25": "35GRsuUd4s3BuaTU7SBG5JvG4ppusrZN8g8D3z2uqZJPGHFRDwZy81LRfBL9KqBcdtUAHAEVDGKVNRu4nYop7CBh",
  "key26": "2Gtn23kLSSPkSFhbViHFaZo1WoQFF2Hp6parEtxkwtfyvL3DYkyBoqQkXDAX1PVptoYR54mXa9tSdnQBxGE5uXAf",
  "key27": "3aZxUAJ9anfaq8MTe9atW9wBFUWQL2FGuEuzq9A1KBnL2N9VK29s7FDcXzRcpYZpMEFQ5MBRSBGeBZKstarnEM7t",
  "key28": "4jf46vNeyJMtjS5SRJfKDnq8RXRysNxt2SDhrqpd7wKoLjP5Una2GcCgK87gxQpfRGmfJtJX6wsG1NSVqV8qCqD8",
  "key29": "4W7NGp59dAe4k1uCFsTCMpZTTdsmDrpnSPsVkPZeo2e6ps2SJN8igyVHahm9HcKHenpkdjMvoUCvmGxidNXoE1Rh",
  "key30": "5JKKaE31ynQAA7J2xcFDN3YeHLn6AcQh1nTY7WpdLBG5gpYEPA6yigBhTKtJ5XrZ8PSsWnVo6yWnAE7SWPyi97cf",
  "key31": "38ZaWVdio1jWXx2N4ur7ehDWaCVdS5KqzHZj7oWD4faHY6gUZhMHfP5TUXY3DUdEQTm8CGZkhHnqHKaUeSdThwgz",
  "key32": "5KN5tfdV5erwuE9kmy5FjCe82caKFEexAbGgAvfWx9DusQpNMwm8MFdQkxbrLQsoYgvwLE3YVx7ZigvuGhbreu5V",
  "key33": "3WgEqrpQeyPjZTngKDSsLu8exZcH4Gtnz6MNmfdBacrev2wp68bsT4kLshumcM5skhBCHmtTiEiXDRQioWyWU4o3",
  "key34": "oQv34M6nFY27UjQGMKnAymnD96N817Wy8roRoJ3rQjU2WSk3Xu6o8kg71gJQMFazxDeDx6e8LxXXdKqiRjT3wwP",
  "key35": "5TmbhkUSnZKboze3MeaLSiV5LkwieM3Vi5j4q5iGgrB25pg9rot5eiATE8AUcP7v62ZV9rU7wHGTrNYJpB9Xy9m1",
  "key36": "3h8jWT8taT6pTkXZNzcnPuD7LtPcoiRBv2WrxpBRtVqKuhvPjPUn9kTowVnxocc1rr5AA34bvjPGjHmAicUBXW1R",
  "key37": "5NLo6vLPdhqWYTeoUjF3RbXczRvvyR7Y21vdPmWziohwgRg9Ue1rYQiVUwfUoBeLuvXpdga99jZqJv55i7B8YaDq",
  "key38": "62UvB1DcufB4Q2DY7WLDRKxt4rpCto2x3ZdtDG1kzRtuGJmarzSMTwkMYEc9RdVtbue4qHHx6DCvzbYxDQx4TD1i",
  "key39": "65XxumpBBhJQUuqFRhPWzkYwqFawui6FiD2SXg9RsrZG5YyhVeoHteJfN16LYcoiuMay8yu2rgR6RbbvkRraQ6no",
  "key40": "SE1M3Ak7QFcsjzswrMTYRHETBJLwfXxpvWur1BJxZqrktP14iCQmZeZ1YfUnk7BWMrKWqfHnDQy6eAdnFsrHRMt",
  "key41": "33brwzmBKRVGysBe8NQGp9sXn1wmjCYVDbruTAuD7xfFDmUExspqNx55eemm4Yk8EJefkNodWGKS7teV4PYKYiBZ",
  "key42": "2b1wZhLwgY35RMSk3H5fE32fxdBwWsnDMWxBVofG89SAPtTEejCs6Ayujbg41B2Chj88yxyiz9dXZCt7NktwGJA1",
  "key43": "5aYR3QNu3P4CUsgKNWU9V3AZyn6fjypV1wevsUtgszJKPha42sLUTAhnMHKakp1WxwXBheCQ1owaaYnXawTvRp7v",
  "key44": "67STHivKLNX5cBnUDFHaraf6z2d3q4z9Gda1SEdtTw1CmwrdWtg4d7YetCxgQZJbyRrQT4iubQe1GCdisLUXzm24"
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
