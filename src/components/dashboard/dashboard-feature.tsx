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
    "31xpDbL5TFx3DqiRYTU8cytFwiem6in36SCPd9w9vYLs8Cx3HQc5WowEXSgjwCcAc9AK8B9U8RMcWn5KCwVvPauJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EfHi2uxXMqGGNtPxnGaj11ZVBjQt6hegLgimM8aBt3AvTQKRnai2UKJj3fvut96s3CSr8hQ6atXGDXyo5y7dXL8",
  "key1": "2AK8nJVD27KJWVeMGAKmScFgF8gnX1pado7xhN4nsPsNarwyQ6Yifs3ezF449j3CsQKNeiabifZvwLL5ctjhhALy",
  "key2": "4rFh2t71DDK9qJtGZKdE41p2Vb2Lf98s98pRW88g1YwGKgoduTH9AkW7ZkqfdJsvr8u5KP4k7qu1gTSLjPrELxYT",
  "key3": "3V8qTnJQpKRiJE9gJkHtFRi2fFrPNSYTsARiv9rQe9pSwPgcovB7S3nG7h6eHa6PDGrWqFDG3LgqS3tq8JJAriBz",
  "key4": "5yE9dT7Q2QVJHdp8KboVbadSPkVWkzaRpDSJRJtL8iiFJQr1qd81NDUuG5spDq7cUncTa2KKbvUP3iDXN82JnEHD",
  "key5": "2D4VYSS2M6uNwSjSg8NpsV1mqREvSRZL2yRoUeWgwhz8DBMQBEW7QAwi6vvQtScGy37HbRkcNdpUTXj72RF1AnAF",
  "key6": "48VJ6KNbQUayuixLoZa2dXuvWpQrerGyFBDtVwTvEXhhmkVdaQqftbyk5sDLRb5JLdHonL8TZnqZuu2SmtPe9cXq",
  "key7": "Sc93Jv1TqvLJMQwZN3Pb4LnoG5qCLhcbxjbErkP1T7rUZ14sBkHz63tXV4UgVe7dfULCJCT7wxC2iNywHBf9YrK",
  "key8": "4ZBHTVX8ZGvxdaHPEhrDHczGpm1d6SdCUefdYUVo5WU9jnV7gkn15crrH7mv6R2xZLAxsAkU2aXoMbPC2TNnfxtp",
  "key9": "26thjAFgi8SnrfAT9r2VPu9AgeLUHB4iDjn4Q8pT2c6jEZCysnumDrxqmh6NeQdhm8qU6SqfQqwHoY4GWyyRXz6f",
  "key10": "53KQzUwqTB2dcoujJDeyfbp9xFLNXcttMCBT9KcdKTcxv83YgzZzrmdt27dRwvMPBKtRRGzf5NTTkcxewzpxjFkK",
  "key11": "7jHFicVNahJFZ5DqMDhzUwXMtigGX5U6uboathjtuB6nxH1N3p2TTsYKfU24G2XQr1fNpV5jLQGBH6jk6kezEWn",
  "key12": "2hEbYjE3AN7GNNsxiivhnrDfYtFzfZ1puc4FLTrkVmKQYsKHxhpZCcgEEtfBS6UREzpW5aDR2XcMEnpa3Ypak5MN",
  "key13": "59b58TXE3Whg6CfM9JFbzUXK3XypyguHSFxfwuT16PUA4nzkp1Crv1B5vVW471PoM6ybQsjnZTEcxN9bzDaXeNbn",
  "key14": "YfBP3Xdne1m2Zr8Lf3PzbDp21CPAShzETUPqogzXDbWjSyLBAa7bLgg1wZ5ggdk2D5U2ATfLjbefcc6yz63Kpyv",
  "key15": "Kq5y8gJw734Y2pwhwnJX5gf429DKPmoD4JKsKBhiHPS2JDGr4Fg6QNeiFCaGjyngQxTwgnqEMS8x7r8hynKM9uW",
  "key16": "24NXx8v25xrGPZ7LtYKyVDmtPP94YXAgkGf5S7TkXhkVBcP8um5co2XmqWYQwrL9mXyJXxn4KNMim3VCKGFSj6oZ",
  "key17": "3DmaNzsArX4agug4F4VhdMmY6siUXD399Ep2r1tFdq8BsRkndkGPqisJbs2cByUKnb8GwBquiSKwUizMSB6jhbi7",
  "key18": "483pB4SPw5ZEKj2qsJTXcSeN6g4HnvQrKTeTUhi7U5PejsgUXRRzzZ8oaACisBDVGT3ti14GdAYdt1DoyX8a1khD",
  "key19": "5yuKA4UvR2zm19jEEFuNk7rMwXtGbKzMUBTqFT4whkPpyz4XMMQtiDCGo2B7GSHwnvFg4vdAyCzqX3cgHamq1kG7",
  "key20": "3pvZszkrert7Buy63zAWUZLzmhsHee9PSvrDckxqe6kF2YQfSunkmEyA3jASpKNg9ateZzGtTqQo8xCfFM7Fss5U",
  "key21": "5i8kVD2dx1zLS3iupWZf6fvCwxuPqzGXg8H69NyND2MHWWhsez3yqss2unHiTf6khLbxscKVweKnJnK89SLDEDZG",
  "key22": "4tRVYbdRN12WBUpLcLJBNSn884pJiFRmKmhuNCiiBVitgJ6hoJVXwAigZpqLtopDRa573ZDn1L6hhNCsL7qiJJhW",
  "key23": "5DuVCYPALCcDh9ki8nsVEwhxTMin523mHcQr3GgiVEwuPpMvnYpmgKqCzvNTsB3qq6Ajtg4aejMP1HFYvvjEDWGT",
  "key24": "2f5Ff5hWH1FRXcRKcDwusPjvvPmstuKn6aPCBjnghCuZ5H9Vj3umuyjyp7x97Je2bvRKQQaBaaupddTUw5rSsYaq",
  "key25": "5mxg7GcQXnb32aNKzSZrCHWX9faXfJsGE6DUpHqP34mntKcjTw2z9VSrh5wwcL2NfYQm1wQUpLrWdHJGm3LxbdTS",
  "key26": "2d2VsgiNbGpEEdsq2CkiPt8xMJ52kLgwZFLgtqe41A139Pf6Fwib7rrmSPRS1YBHzMwLuNbbNGwV41wURu6zMcZn",
  "key27": "3e1FbKshrRq6KVnwSYcW8Fcy5PmZ3hYdgZyTNPMPmFq6tV1pcEVBmxtTU2xcNDqctNsr8qhymjzfTvbWDYC76rfW",
  "key28": "5UHTgkG2g26iEaHjeu6wiciLEGTeVqLNGY1t9upfzZU3o3KYfH9sd9TXpPgRghsVzXHJv2MWRwBUKyazkUWLmoSY",
  "key29": "3gCdWgLJnQmjVLDwUfz4bRFGPVJVDeT5NFwmFZjprGJ1uK8RSY8z4zgJWMnE9faNWD2U32DkDy6pJq6aUWJrmSf1",
  "key30": "3Qq8GTC2k3DS74d4kmnUzAgSXJwYeQH1XPfeuHnFJsrLbgtvZCB1AsdKzLtSEDTTnHrtM5i768MPffKU4FL5B5S6",
  "key31": "5D5wsFkiY2jDZUBwARJgfhCv6mdhy5tdE5GcFwRFuwKPWocV1JowQZ7w3HV9qYoca4qQsyBskMkqD8zmjdfHpuiB",
  "key32": "4N9disX4gfmP3d5wro3adjTZtDrkRyBRrRcvQm5Bh1QdVGgkELfJHEtzm7cTDBUMzvDv9xBuGKwmW8HJBUyVpGHZ",
  "key33": "5BX5yWjUWMBjLvMS7Bck2S2TC2ur4QALHRGH4WmezgcSyLwBpb1wkRP6tHRzNuyKGrJnggMW8gyqGvxkXpV43Fk5",
  "key34": "4UsVXewrc4kKrs7Zt1Yw5Gw1rkhMLChFiV7rnnNYQbLtkYFdBGcBDnMSZ3wuaFUenxEdSarBw4mEZHrnu2UKqxuQ",
  "key35": "G6amhJRi7K9pfkhPpPVWJWE8hyfPZcbhAgZ5XHQNgTxbWJKD6tS8wh3q66eSTARbmyxaCXLHh8a4FFpa3GrvoXn",
  "key36": "58zUm6v3uzBgkGD1mqQR4dCiYtM8AzhGfSbAApPLowN4dRmpLVaQzrbm9wXJrdVzyeGU4ctQaN9QbHRqmrBaqwGa",
  "key37": "4iSVH1SzUPC2did5hD94RgaoJmqpZCysE9Ts4fnvyJzc6SUMJDveyfrRPxscDZD2EjQUBpTyudpBfUakwZuJrfZp",
  "key38": "id88LRDPqPy91SnZexDoGYHTTBvX7q6YTq9CXPAKTTdbewBpGdYXxDLkX4sq9Xq6YxcZGbKgcEKAXyhcAbFuKD4",
  "key39": "2HWVspwxcn8YPPiWwneKyVyKXH8e5AkG2NiWVSjrZBHaUGkMntMM1BrkFp32NpDtuYWYcn72rXaxMgrukjFV1jMX",
  "key40": "2oBrc9fKEMMGGjJT7kbJU361vXXZGCgtpKGTXahvPXbYAEgLks7RTRjw1CQhmqYKVtphy5Aq6mkU81g331LUA6WE",
  "key41": "5EEB9NPcJ2NXdznBgYCsdfJBu4qZMeGMecRMTGXqsWVB7YicX466Xdhb52vFHtP4KQLfLFK4GSLk2T1pByAZ7pqT"
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
