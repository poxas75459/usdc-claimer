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
    "C6g2o5dxvmbmisXwU3vnj49HmmNMxZ35UgFuqXMtEsnRDS2JDf1swKYgeHx6et1iz9imgCsVvNKauUc2MfCyxu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iC8N9WDLJzZkCWJK916CSHPqSmHZD5yBPh7cX3FJz81x6Vif1jwF13bHqjETSKWrNnjCwWtnF324bFk5RoNFiJe",
  "key1": "jpm7BByJK5jDP2swKZfU9fPbrPrJrhWmTZB57rSoEPf7y53AvrbnveU9etroJ2sFM6bGMmGeWaczbx2Di9XXZgu",
  "key2": "3BHsxePEW11TmiWBtVZGkK1chmQGFgSuMkwcrPGDpUBUFqcyCoTBKVKRbaAjzuKBn5JCKgJgSV58yKX5Q13Kq7TB",
  "key3": "38QEEfaRA9unth4iqtjF1QJcyf5GxmUdvRP7RBAptTwQjJ5QvEQwqmTDXEPsh4md4rV1vUAMdVXZDCdorqc4ujJq",
  "key4": "4SGmWuXUK8mZLP99ofPmRkyDzy5cysPP9BBubJ5GbKD5jZCZpGEKdwZAcaEPtQ4jUYCqPP5i8Bmv7WpDkAwW45r8",
  "key5": "3yT6CaFUqme4wkNBh6J2ecEq7qSSagxrn4U6HbLr1dJHXzoRHWVKMsUhrKDzdxNg2Sb8uzCRdKMVj8bHnwTGtwxW",
  "key6": "2jn73pepxH46fUrkinC9BNZBQGsF1HSC15dq95GQp5dWygtCYBPF1kF7v4B2MW4Mhsz69o385c8BWggVYCJEQBEb",
  "key7": "2tZC9UzSG9dfAKf4csH1jCqTe9bTLZVdHjpc3xntxH3VbNUc37K3JekrZRLQzmkcRDGRVpNAY8XbPQyCpwczCHJ8",
  "key8": "4Xq4GLAhkArhcLoWvTebfjTjWywp9PEBDnejgPNZY2jARwejN1aXU3cjei6QqaAUsNBVLb6N7fFkMWqMtUpfVDNz",
  "key9": "2ViSK4CNb1AtqAJttsmmZqznnZWCAq7ZkvSPFQ2ckvgDwMV27oxSGYd1AXDyDHtzdmg421W4A1vHPy9fSviNzPWR",
  "key10": "m7QkMXKEqQo1ruirVufGkHbzs8fbGhKUd9rZsHwWcP2JsJR39RZz2bvAv8a79hkwhHCJYWcvhxQofQ1WqYxQVmS",
  "key11": "5t6rhQCAhGrzNcXBKeDem3shF2krvaLTZzJMecZWQczFTiHcweKmEggivf6Poom9BRWNNxfhjptNufVdwrfTTj35",
  "key12": "3yjKanh5GhvytjbQsrHz6KUcBtE8XxVZiit2EGNBLt7kZ4T2Y8QzYbCJWPxz7yd2QcHQBWPyWsHMDz1pN4XyBPi9",
  "key13": "5dkJF1oEiYjiujK4DCi2Zeg3Y5nmCMS5qUZDncCAnAaZVxic5dYi9HGjvUaFnTN43Wx5op3p9kSpU1MoY4be3Xio",
  "key14": "2bYEP3UL5u8fjB9U87H3TBAJnyD9KHjEv1gmTByTVrEmQ7nkQQp862cGNRQMmpQSX7MLD4ksGpUn5qm1rE49Rxq4",
  "key15": "2RL1ym5ws5tWgHYiZr9bee7yqgebscHJa3krsdchyp8hekAHb19BpAeQJj3KbD3hRd5LK6Xde8WrdrUnub9dMRbu",
  "key16": "2odkoeXZvyd8yXpZEGrrFErbYafgbJ4GYedQt78Pfg4xTh8i1zVen7HxyVLHheJGcfNAqVoYeh6wR4t7NtPqmi3G",
  "key17": "3YtAfKsp7AnShGTKP93d2gZgvjmtG4nU3jMcYBEgPb1oP1dKQEGzJ7niAnxTCuP4FeFu1s6jf5NCDu7ba19ht4JR",
  "key18": "Lk8JZER8qB7kvzRaY4L8kLrQnjkHnnq5BWBM6tDMNJkKNaVcgjMhQtbp4ofMjbny3Y19Ncsa2cTX2nCbJiV77fd",
  "key19": "28eQ3mhHpY3rKzbjKjgUoNJ5W83ZdeAt5JSHqAjfEJxhstpYiUeUuLVVFH71qFuUnMBRrfaP8idW3m1rnxpVGqnH",
  "key20": "jp8vbrRzyRDsgbYDdq26MCRTAhhdhpTUmbD95ix3nBxJp5aU2Qnnya72HtXL6AnmCHJb3JgvBtkbtyG4SSrCXHx",
  "key21": "2zpisRmKWBPZAY4zTH7eFqbFtTx8xTPXUzvrrJ5LAAhbLkYMcpfEDm37QqsFxWb9TVY7zG35k25QPxkdXJSdbkMB",
  "key22": "5TQiACYwzWxoU5ti5nwEKTLDpvHr8bnobVYPEMR1UxgGaL2Vbms1mjBuopSRzsxBY3jRT2X7DaAUSTRhT6vvyJ9b",
  "key23": "g8Zs6xxk781T1voXV75UnJXfKQzmAyzcuh8awS6tRjQgEij5PFpqB2RTqmBVwW6zaiENuBqWFrEL216S7vdhSj1",
  "key24": "YmhKvyDoVfXUofXA5pKFoEtRP9hSwCn6eksepAxVspSpuTDXcvn7ujMBoYbUSfBDGgS1TBesM8qorJ4TK7GgJU1",
  "key25": "3sztDUFpSbzqYbtMbKkiLytAmyJXwK9bx21Spy3XnJve4BLZZa3uWRe7v1w24kKjxPcZJxJMPD1awqJuzrS6WAaA",
  "key26": "4BEviiEjrGaXhnR9tWjePxRhYq7GyELZCuBqhhoVeQM2QNFo57BiA1kDJ7YVpEwj8Yn3Y9863EqEQU3ybXQD5HC7",
  "key27": "4nvwfMAXo81PW213YAd2AUCMb1mN4GgLGGdWrgaNCZePr2XZXZuHXLU3BRCokhN8rnFpWrmhkdHEnksD2j4FJZHJ",
  "key28": "4nR6mKK1dSRGj7LkzDmvMeSXhE429jdcyYycxJ4j6hNGXg81WPB2daUQK4d7qErLiEx5GXaAJ7yze6opTb18BUtU",
  "key29": "2vLG2jdYkWfHh3k8JfjHVo4o1quBwwj4bTpww3XdCZwZXQJ4xjNzdqnc4eaQiy51qeGuxr8HXRtUWyuXc3NKbe1X",
  "key30": "KYKzuJaSoLTZyiVP3pFAWrmyfGk7EzgAG5yxZ7jneM9J2EKD792V5N3CrmbD4Rpj795GjcBXuKutcJYpv59Zuz3",
  "key31": "3tqSwG6sNTX5iKr1xFMEPbu3m7uLhLk6AMfTrdAGy7yKdySN2S7mNA4o4oKWPHD8KoehKCvH5wtqaV6cdDSn8n7e",
  "key32": "4KKEf4p3e9ddVdemHrjQP3f8YjDw4Xw83De32XxEudjDjiUL1uTC6eNYfpTabtd6YsGjhEEqFFEDCBXbpiQr6AB9",
  "key33": "uVurz3SxqQ2kNqoxvJsn67ECRUZw9u9RTwmRDPEV3D2WQwccWXvoX7AzjrwVE4aM8yCwYcTKTKeXc4LiCt8jfjK",
  "key34": "AvUCvGGXkwdv5gXNzbERyRENqJgTyQqLZAQX322vxrNJpnkfVAJNz8FEXzX6moZWw3QFPDeAqiSmMGwLXdCocdq",
  "key35": "5wjR5jvCdVZRK5phXTff6f7ANFSjfnduQFnPNMfVceQHrmG47akgNterGR1yPYcrcRiWtRCmCEvejJEPWck6y7EV",
  "key36": "4i5dkRnoLTnfzXQExweC9vNQbtETui1VBRJ5UU9SZo428AmAbeH5jHh4c2v7hpTMTczUEDLrT2nMB1oUbpqGyPiP",
  "key37": "Kqo3Yn3pd68EZaZ5rTjULqxHdHZs951N3msUKwSiFMvKu5h4cFLnD49dDXBTrW7J8PrwU3qztn7jSoDhVZbTjp1",
  "key38": "2LDaQR6PV4v2meKBD5QyjqRazwUjBfghbhP9mRxwf6bJfgVwSmJXKjuPEogfEfgzdJBWGqV2vkWMwjfSbLkAp4dM",
  "key39": "2GVkqGLqGDExJzHek6WNCNQ5hQTBtpi1dosyYeL3skUFwbjDHEpxuhjAP84i36QtFzwivUTRt4kZKp7izDXnamDE",
  "key40": "37kLyNM87P9H3swczgPLK7sNRH4cowbRHrsMqwiY6p3kufXnUfcJD9qDXyFYtLp2maR3vP9Tk2Jz7J2sfX7qAMkh",
  "key41": "4v8DuPr3Bve9f4C5VyNQhgjmLXWoNuBeE6DwBHsBerq85UhKNBk3WLa7ihddsZaoZcy3fa1uZ2V8Csz3HFgQqXxz",
  "key42": "21CGEXZCG7fXYdmbTPXs4gQQhaLx7WHfnCtJb8cAmJaq4bsmgs18GHbkHmbb4Bid8DA6xt1TsC1AwJVyL6kiTj2c",
  "key43": "Hohpfk1fbFTfVazLz5ZsZzdpAsxUHJxGFeUJepqnvNJpoC5tZGTQsPQdK9CGn2jNo7AFzJiRWqViJjbJLmeJTR5",
  "key44": "37PiiaGJ4oejMq2f7MFsCuhSfEs2vsHUnVPHAVh5aQxTvyVhVEzcWz1g3qhJ7rd9CfnDGmmrtA8uxgKtSxSRfNHi"
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
