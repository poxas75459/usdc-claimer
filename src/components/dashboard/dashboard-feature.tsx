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
    "isK6ZHSzKEtryS558VdgwJk6M4b1FQdkfQfdU1VUjsrtMXcrkaFw5T4h8cUxoHrdbxtDzURTdcRke2xBexWaMqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WLAcoqqWPie3KHHRrW8Dgp4x9jxDXmyLXPKLVCw6N9fxMncQ4KXphXB9FpsS5P1mg6z5TKTrrnE4eRGSpsMajGJ",
  "key1": "ANnEL2xoH2FdRRd3ZJ3xje69YdcRqRrMgf5C1L2isG9SjhbbGX92VRga3HnVhspYuk1c2B6N3nHiqkoNCy2G3Ed",
  "key2": "58RC49XYXEjwq7xv7BGtjr98CHh8vEYNNcSquhXZUWdEHgsgibWxAKWH1xEeSrCpBn6QDNFkpK9CKcMMgDWmHdAc",
  "key3": "3qidVxNTMPpt9HqzTyJAEihZJhHcG7mnGEkiDhRnwvdcq371AHPhTByBRvPTKD5JmEUZx3XuKYDx91WppFFfWuMV",
  "key4": "2sM2Js19TZM92myseKwq4mVTRERyPTMkDzHWXvSKZCnhwxEuVFE7vABKh7QDRYSMd8wB1SmALg9tkGByPgCVhDDD",
  "key5": "4FPM3U2hvqYhDeM8MtNzN9nBwQiVVx1iY8a8gcvicuqJorYUNJtTZpD9GPM4v6vKshoy5JgVRY9PP8f58gbkx6g7",
  "key6": "3wRkmnNrge9bLGT8jdbWwZHTZzHVRqiuk8h89sfVtTwdGtf9esVSAGi2FKsJYxg87thbdykYTvMsAAiUqYkEuDHS",
  "key7": "5xpqeBdWtUgqg1nvAjKWyomaf9N9hnYScA6YiVHiKZmiGCRD6cnUibNSLV5hc3iGzvkzPRsMnrkDXsL1Q24sVhYc",
  "key8": "5z1xkAvEvXpqFvAWBqLbRjUZV33wt4qDmd64tZjLXUByxbH1K1a8mfqReP2zvThytcxXYJhKLM76sjcMh7Kr73UR",
  "key9": "2yEHzGHfqaX7LV1wTLNVYBAS1Lv2cHsf9Lp8C5NBAJ9QjtAcxh4u6X43Y1CQr5YbXtY4eKGumCsKKbSxDM5iUMkX",
  "key10": "5stpg4iCQVUV8KcN63gDioSFkzzZKUtigE7Afh8WssMMZnGKuzsbBDFp8KQVFCZKXj9pncLkJVNGVdosZxnWgWPe",
  "key11": "4bG7a7s5ZCWKSRLEgBVdD9UKaybVxr1igBiN8YUduimK9KNfykC7KMYDdgzKt4gHko5RZTpSVjWJULTNQKbvytoY",
  "key12": "54qrjuvteFxMomvZ6A89uRChw23uHJ6kYcZj8grPMJSxauGbRkJ1ohzbdgWmk3kkLxPNUdECoAAngWhQF4oCTsSu",
  "key13": "zxGAhq45ZB6o3Zsqqey45Dz2fp8XBTh7pNSC3Wye5jY7PdcX2Z7fztCn9MJztRLRRvv5V6cHc7xtUAnR6DfhoqY",
  "key14": "4HtQovCHRcpJo7SQgVnK8BYd3fGDEMjo47Aq8Zjk3915HWWN2mW9ETNMXYhunekeCPWD7DJ8Q63cvXbRq7isEzd6",
  "key15": "3zRN7dF4ddao2dYChYvPTC5obDuUv4zoBzDRYtDivDAxHN39y1v5MS8XnaxRokQdK79AFqMFzW4ZURSxUFS2otMj",
  "key16": "4BK3WfexRQTkLmJVcrD1s15DeMcTwww8RtEAZ4PXZcRSMa5LADJ1bWmfBnoWG9P4ugaGDd3uLckFuZHwcoKFwQQN",
  "key17": "4EcTtBaen1XDscL5mGGhMNNqf2wtCWTvZbWa2An1UE4GBpx5R8Vg39v1wWiXVpczguTdzA15967wjrgQeT6aUcQ8",
  "key18": "4p1Ct32XBxFm1fpjh32LTfWddFHN6aymPwtgDZHfwUmtiqSGqDSWYVrjDb62poEGgdu2EP8WoX88Cg4kdUiYCsWh",
  "key19": "FnRB62VoesA3S5Si5reB7ChmVXE4R4arPHUuVZvHuvdMEUuGJ6HcLsJrSNsuJjWbHUKTBwA1Fc21QkCRpeCRBeE",
  "key20": "5LFYP1DkuMWvG4onw9ixDLK7QqFFqJ4tFSBBNMejVZkEiAUVk8bGuse9sm8AaGEirUbTzYTdRoMHRcxThcK6AM2m",
  "key21": "R5NZBBmWLXHM12NnCDsJ57CjSwZrx8nJ5559udBP7tesNSjkhnbRYgwyMN155Cz5hjdvC7vcXBHzaeiaZvhcKxF",
  "key22": "57j8JQ76XH31YF6LVWccfyQUKTJCoEv3Li3qcdDLujuFcwHf5zzbC53oA5eRyH3Z1xpCjNzutcFs34mWJUhuoQvB",
  "key23": "5A7FG2pwwMvR8h4d14xLpZNsk9hAAxD5inFXmFNHqmG5HyW5nubg244hKAAchNM3ibaQoRH9nx72cGuBTKMdjVdm",
  "key24": "312bBtgKww8Rae2xDSoXBEMC4Rwbi5ts5Nw1FKjS9fyX93HQnwodnwRExqgJ4Ghb7cW5EtvrAa9YVKrcVS8FcGjd",
  "key25": "4JDsmKVrW2SRQdX4EyWrc6CB4ty2f8d4djWa46UKzjNqSUi6opqY5XhYxE2tRW3EEmjziMazBsnUEuEVeVTfvU3h",
  "key26": "NgpScXBLPXvPuudGJGpTnXtsKoBFbk3aGjnnYzSNxfeHn9R2y5NqjtXgZeEnwNKSmDoQE1u2yW8m4ZEsXBqXnJe",
  "key27": "2hCBYmSSCxXoVq2XQNwWtq9eS3TJ2R9pT2g1JqfhrzSob9DvadsDCzucLPzCQ6u41FLExAyEvERiWJdZBZHNiqtD",
  "key28": "5erk9zzUfPCGhadgvwnXzLbP9F3jg9DTqZes25JU94Th3NU2p9NzNfQmfZ5NpdBjnEPVKWevRDWmabkSptC29Edp",
  "key29": "2PtJvNKPDdoiVyCQXW2v4V7MdqsGsBdBqpXp2oB4jT8tm9v16a9GvwfFPmmCmGnDzhmrjRnaUBQGiTUhyfXCFFUc",
  "key30": "61zqZf5o21iHtvzFEE1nFkgMLbxHUqb4C18cw2zaw8GPPcEcdVdoL4fjejxihe74BTYcH7xD2SAu1AJQVvHc9iS4",
  "key31": "eEbPk8GPgD4wppxz6VnXKZhGpWDKiM5DxjRwtk5GDwE2XVxE8BbZUwNCkh5X4LgRgaCxbkYYG147vWeg2v5erx1",
  "key32": "B2Q9z3Sr81wEGjZHaDFqsQzRhhzUQTFXLv3Fe6TLCibZJQLKnmpwS6WYcd8r5tRDLWZXAfDVxNWvsN2qe2PqZm5",
  "key33": "5NrdNj2FdGktnG4Lz1iSRXkgMJvwQYdjuGr5aXJJdu1sMeHpyrLhwkokKw5uosXTWNT2xdbj18JKbV3Z54zH5PKD",
  "key34": "YpbJcGnpscUz4ojHE15PFgkW53g9mF7xRz941CMx69e9nJJLcfk1JQH9t24VLDGfZuUmYhiw2dKgJCLagHCwQo9",
  "key35": "648NbpYurLTwyGio7UHWBnsD3UNhNNNNT7Lz3sxtmWtQycGTQjFN85vLt9ieqBuuDhkwWW993ShFnf7a2xp5LJXR",
  "key36": "5J5UDZy9EdBTaNy5ikFq4edrF9WfUBSjiCakxVqUz6i6pvYB6UFGZbZhdL2zg5mE3MGgW8UsNBpv53PGGX9oUcu3",
  "key37": "2Dsxq9pQ1Bhca89pWWCt58prJiui8inHZAEr4gV9pZorP5g7ajwcVrXePCuQnvViRvG6Vy93nD7rfhaQsnWPmDVM",
  "key38": "5Xvc6z1hf6KuH1MF5QN5NPHKhNJR2fRD6SztHgMLZ5vKsNoYFSXKFYtWxdHZi9avnXUrffPwFp1q2M3ATMm8WS3B",
  "key39": "3Uru6S1sCFcbLEQJmh3cEu68CfVZbCwkNFNEBz4JSeSn7fYjgwPvppv6dSG42G4uYjAPb6mS4UKnRkQX3SeM29gr"
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
