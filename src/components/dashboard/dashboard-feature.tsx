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
    "3tSSzUYyM6fpva7ixqkXWwxVqv183rJWSWrnjVvpRPJGACiG45751KqrxuhbJviJoPL6hfugd9XwDqTHSEXpfNzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bNL4Xu7AfG9zbQzb4LT1m51tXGWgk1ks1bsM3nPM5ey2zj9vqHjj2UxQvQDk83BeXvuhrH3CTdLeypcLNfmt9SY",
  "key1": "3ZMdiDHyVDZiLmQH4MzFxDyjfuAYphQKmVXkoDTfv6jwxhcVUa9zmCbXrygTQQzj2FNfPRF69Q29twU7PAG6euGD",
  "key2": "3mZaDa2KesMX7eKiskyeLZuoxww7evBeKmZVzsv7BWep3speYiaFRz7unt9JKE3DLMApMvWBG7KNSuR8si7vTF6G",
  "key3": "4cGP1YrFrQ2xkpgcvn1P8uoH2nYk29gYSUiMSVURavi6hfs9hpgPHNh4USejdL5tsRc3uAccKsg9YeLDsPgPVPBZ",
  "key4": "2czbNYqwJQwiruebcM1UyX7PWKutAgwDwLmyworZPQVWHQVptwq3xPynsDhhdUaTTgDRejF7bQHHZqjUko6bG6gC",
  "key5": "4vmVwaGk4sBZyRn12wonadgfXTqNkC8427SwRrLCBBGcPGHVRuBmYbefBGpx6NRURt4gPME1vpECmGtQoiobraVo",
  "key6": "3wSPhjKrpvCKhYg8ybTKEdLZtbaS9oukJqMD1TRmADByXDxvSakvRNM4e2RfsLvLLpGi5wVR4ighJZ9CqgufrK69",
  "key7": "5YDNP7fmSHgZwX9Q5akmDyMjSVHTRdCTdiUpgH7R2j61jjwJRuXWcfsuATMGSqtSnWFp6tHsNuvX5cx1HMTJpAjn",
  "key8": "67QKSZSgmdfLS6xaTyW9biJy93CSkCCJs3P15BA7ezSeKDkKtbnet992hZMRiwtqwj5KfXoyx3EgV9ooMckyWN74",
  "key9": "4La7SYvPTxgSp4xm3ZtJWDhNEYdZUMkQGwtYP42ZzmaQcfDEKk2Yca6VcKrtJAQucpePzWZLzNcdY7N3qdFwvT1w",
  "key10": "5wpxKYjdQ9LZwLTd23k3eS9oCgD283gZuZ28q5ttWrP57kvWmpn4L7g97bii7XCm7GpqnyXYiWsSqHfFmvfBvmGp",
  "key11": "5Vp8v3t6UyrQWUjxm51aF8mBVaDUewD4xrxmsafwdCowC9mBQ6LjmKbuW1LNpsKStuyz6CZL8hzup2Ky5PCcQXPp",
  "key12": "5HVHfPncgw1UJEWWnxGQSq6q3UCw1pBhHWgBC3nna8rnrcUZpPrmiUbnjDhkeMxbCy5Jym8yK4CyZDMMNei3KqLp",
  "key13": "36LBnczPT84HJQfT6JNpqPpLKpqhcGMf98AqDJrnGJmMsJNDGKnnogeQV155y1gkztLJxf67D6yvg2sqjy3d32ux",
  "key14": "4CUdjeme2Z1XUScdL6JsiPgG9uz37ECtN5SSJFR9agNdQ4JczCBHupJ5HNF4s6yksR1hYgpQkpvWJmk6SjGTW56k",
  "key15": "3jBEjwio6pkTPvgnUeZcHbaLDibQPqdPsqDUy4qqRoq9obdZVqA8bFkek3MgJzn1nAaSssqVTjn3eDWpYE4CWH9M",
  "key16": "58pCkfdUCuGMeTgbQw2TAu4FXFNmUPddMGk3s92oWjP8JwqvVcbQSxhxieSJiP6TVihTNc2fcHq4nfL4EcspkAXL",
  "key17": "4vrQ8wGKMBY51dGBxuCA886ngvZ5D4eor4iYz6Rn9EGKzt5bsy5DzEr8CvUUeo9un7KHHzYcX2m4EViiQQ5gmNGD",
  "key18": "3mdu99tDiVe4idJ2nLtPoJs7WSSU5WNxDSwX48sL89C4G1XPdb2mVb1zH77TbdsQRojGjdgkZcdSE8om12wtnXMC",
  "key19": "3JZzpNb5sjr2gbKzWkhGQEeiqx426DbYK2wyQBRVDdWCbHNJQAwSw7DFyiMFPkyM99g3D3yWMuEvaqouaoVNH7ST",
  "key20": "4e9FsFr8ZJZcpSW6LjZBWuQcpXW3CCscEiago3NnCS4HkdPLUx934ngvrjDDEBHc4SD1mcvooA6We9aXb1dGv6yS",
  "key21": "27paZfNF36MVQg7sKsw1rCzXanFGayAPWav2rV5QESrgchqq2YtpY3YogfMFzPe8bSb5oSu2iP9n8YJc1LpqVxzv",
  "key22": "5Dr8btD5sS3dmsSgQERyp7QEC2yrK73PQM75NfctJCTnpkjgYmumqJx28dqeJgPCoAtFxiMPupWmYX5AWHPnk867",
  "key23": "3pJKhmwkyv27gBesLznrhcr3bzyqiyJjNFWwfmmwaV33Vuxp2vQ54vvbphmJQZGRnSDLy66DJ7tkZnzNPf7AwJnz",
  "key24": "3pUyLeYupZdShDbnbQkRS6xbn3pU5mbyZtf99i6affEDrPYwfhf4iBZdJ3YdhDgQWkU4xQZgSR8asn6UWNLLq5BM",
  "key25": "5iLoVKoWVj875nitHRM7Wsp57wiu5GZV3G5pq4mUYjnaNUiu3UTjzKybjQuBLjGZiQr7sg9H2s6tzedKbs6S2fH1",
  "key26": "43QgqPWw9CgdVzoT6nHbrxAbpXLqZu8NbhghgqntFK9E9GTJei7PmfEakMKNDHPyUy7WiXjPd83y17pcfcTGiNzg",
  "key27": "X5wgXPFUqRt1Amz8pchzrqfa1utofoRhU3wNAi4swnjnTH3VyoEWerH24954q5swsLu7H4CeuiBv2sa7nBWtmoJ",
  "key28": "5K56MQmSrE5C2hwSKubMZmL88NNKFcgoLjKa2EJmS8sQvJKM3iqjLhXiRjX9DG9UxrJSDD98PWdYAfghpGKRJC51",
  "key29": "2jLE1zR4VTS1G67PSVdJRG3QbdkFUdN5GxVFFTKznQRXJmbKUVNgRTpEJJTuK8NUVkRMrQLkNNeM5AMNiiKj3zSf",
  "key30": "4xNv41WEqnWFFUZzub6Ra3qdgy1kM8XyxMDp13aL5JGNjEHbHduWJqmUFGRf86fip7JGXTeLDkDkPvPrrBDnDPgz",
  "key31": "4nEbxHoKt69ae8CNNtwAk5eHSVy5McZTUM3AYeLCk8Zas7odKfTLZybYjCMjrfdbYQvgZT2AVuJAdcQYrTCxfaSo",
  "key32": "3ittSwa8Kf7wpYqJsQZ7g8KGH2EB3BwuG9aCMh2jqvCSpUN5mv39K3F5FeUzoawthH8eS7Uxgre5DPSMYLGLPHu3",
  "key33": "4R7G7s7sGP2RhDmPdpNANLVn9qwQ5MYLkFShS8h5bCRtRFb4sbCZE1BYk9wCsCbyHA2ch7gnz5kArDoJ5Lnivp2Y",
  "key34": "2C4dPYsJrfLPkLSnUfmf2XXc7jm3UPGUWhwudbpQEZmA4G2btWb8jykVvzBx6mCMYJR7igFU5DvEMLHuCCG9oeQH",
  "key35": "GY5Y9H7ZfsRa3q5J423Wji2FC1PNSagS7viMJ9kHDDjrShtY7cXJiBqUbKbZJRN7kuhsnLUzfHV7H6oZUJYz48i",
  "key36": "5z76TrnBuT9UQx2YrrJKHGdkCEPcQs5N7MTXDRXm4Hz6RNW5YhRXykfbnFUSrv984XqEmRVp6bwvkLGq7tJSXEQN",
  "key37": "2kuJv6y9miHbhr1CdAhPqtZDBfvrRA8dxi3ELYHeUb6begxdG4oyHjtpk3aUxbEamjRCgiVrGx79SGkAHBcjg8oP",
  "key38": "5x8Uo5QF3YBrDKiYFfhJEwriseBMjaxsaVyfF7kcpiJhi82qxWw4qqNoLLvZP4Qbovh9yKct5SE5BR33nve2i5Ar",
  "key39": "2uCektGH7XsEKgGvCsQ14uiibjwwbpngCJhbxp5pqh1KmXq6huwGGpqzr27h9cx95WQ9Sb74AN4hN8X75bjorFwB",
  "key40": "iMo1ngXwy3t7sGQaPX9J4dWCjy7Cfw8J9THCRuo5hJT2vkkDsvM15pZgvxCS8Tab1mhSwj1Qn9PRfksGcMH4tT1",
  "key41": "2Kp15p6NykkbFs5SQpH8FrNgtyXEr8CMRsBcxkaAfT7EjbbcAfPdEau8k67yhA8jgi9F6gdRrDDxPyNmPGJNfhe3",
  "key42": "cTMmDhekJK9MEQe4Dm4az1gMmxBsDwypTeUWF4MBgrPDwnjRaZwBcfBC9AUqKJnTFY7yZn1A3gvxGLocB9qfnih",
  "key43": "wMHaTmMDTx3aLfpx72GXXrAz9KC8KuE3ffMuLV9oLcDEHAZjCU7t8U6dyyrxZwy8fQUfBCo5QDidzPpSM8z6dU2",
  "key44": "3vCAVb8dvYLMx3rsgW3pQpKr9hZHiKY8pTGjoMXXzsxT8NSmXiHzf4RtoJULkPSpt9cBaXHuKN4wpexDY7KrUzNg"
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
