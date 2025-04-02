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
    "2xbhn4GxfpZ4eFS1QC3EkvYkEfEhgdqAPjynt5cHSuK3PpTnfbkaZDQ6QWEeLasktdLUz6gvC25Hv2igwPSpxM4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YXrrMD7m13hufF3v6pU3MtyYfiTNiRqD4qH1E6Ci8cJRG1MJ76yHjULzt2st1UUrqm93rx1XUu5WBLwu1e7puiP",
  "key1": "3bRzPjz29dz1YGqxjAYCbUZCaAphU8fJD34NpGCXo99mUSuPFN2NnLpu8th2pW9bR4sVmJ2vmons5ipHxQ1ak8my",
  "key2": "qFMMZyuXKmcepAwwdtZ1yZjkaCHw7jKxfCQTWRhnTEZMVmShQuvsedqzKvVdBCkLWYcVghxEQuERyhJ9vcxm26K",
  "key3": "2xksvd5x12MNrjKzKjLuRaRdfCadzRavQuDNKF1rPdUiYCeeBQ6zLhX2pAXT9ywfeM5ccGUJkRMyKoPD88DHfsEW",
  "key4": "2kieMEWnzEo6oqy8iB1a4CzgwqLCZkMRi2oXPYTqFXVrrdvsrX5EmDDtBHo8bfs8HdwVZQhTMVKRYe6tKbGw3SnU",
  "key5": "3GhPVVaznuCoeJcktdZkE6UUUZ3qDcMeJ8bo5b5k18Xj3bkjNYUUnSXrZyKjYx1Q8iJyBSmRx396Gzn5sbxthK7i",
  "key6": "3brpTtH5hqYcaASy24UP3KnTanB67v3WnGCRE3KvVoEhDrBbyjX4pRWUibkKaqJ23pMM8HBNKdshZcL39QtRJV69",
  "key7": "fLSEAXGZJR5r1L7kR7qEWSpTwU5eCZ1nRmQ29NCe5JRMsPM4YCn9t5htLkdEiqLYw1N2N9Ei9qNHNt6tdbe1uUU",
  "key8": "2o4V5tzLvRG1wZL8frmnEmcMeSHBxH4F53uhhWFxdDJCk1nxhJkWyRGDfpMxLhk37ovTeHuUZhtbMJ6oX6CHMyPD",
  "key9": "37NSRPRrCAK9mqtzPzYp8PVgvgnm9t1DeKVG6B5uFmCYo27eDnGtm5atpbDsg4w7LFRU1oThDJ8e5sFQvxZ9q1vi",
  "key10": "2M5LgeMsgvjX3mcbmFL6mCJWcx5ucxkAnoXcagZuXndrpQGvfPakVzzgKUmQjhuvvnB1MHdT9dcfmVAeYy499SxE",
  "key11": "4ET3Z3ibDu7AQvZaRNmKHeUxUPaUPE9cdb9j1c5z1x5hvLFw9d7vrt72FrFFSbnycnUgHRA3U1CKTRdhKMP8JKBg",
  "key12": "3gZPFNfVAKwiKADWSm5nfmcGg4b69pPgfoBvj45ukd1PHMRVgwiLgxNye9ktFubR1kAPc6DXcrHeRWvyTDwVCz5r",
  "key13": "4k3oVJfzrKLGJKJgRKrzujW5KiYBV8X7rDTCxYhPAtmFMj76neTi1m62rXucCm4KRRWz1cQfSFxS1TUZ1Jp5knHA",
  "key14": "huRZga6Vjr2n8MBD8QpnnCU4GM2EQkooFrpUZhdu42GT3pAt4hW7AU9Zk2T1Kh9AzpSruVNN6qVP8SmsbzffEoA",
  "key15": "3eyZmkdSZy1RrZffLhb2jXJ368pFYGQEFBLDcFcS4JU1JYWevFiHmQ9t6wsUo5egj58QwmkrD9brXscvGdBL8cHc",
  "key16": "xjyi1ckMxXb3tixRZu935eiwcBK4X8tRRZQDrMMjMWrEmciKgLDdZEnRYrn4b1JDxpoNFgdAzMGv3pFVfg7nhBf",
  "key17": "XaR56hRLQmgW2Ftxxzzhy47ETvmK9tzVvfYEyZHBcGdp9VNzyt6SdK6P1zAwSA8nWAU3GZhUsQTQRixSqLm3paM",
  "key18": "2C1ZbjbykZdNYzMKZdPzSG4oC5DRDdeUHV8ZguySigP5gxFq3JvdqcM9JNpS4vycBh178wFAzT6KVianihuSX6Jq",
  "key19": "3xVyTEFLWEpdXTG76DXukHjkshz2SRRHHbTbikojieuQoyGmtrNxhmSWG8Y3ud5kY6JHbsvdFkZJFmNZBmgKiWsH",
  "key20": "q7FNF2rmiXoXSqMYbsa5wndJ1qHPuSYqn3QFJp2oQjBQLbrJesnZpQH2ftwyejeoQb93oWq3j65KuMz9ivNLaBG",
  "key21": "3Mifaaw5Y1aTbhC4LYdwp5RC6bp5FaBwLxqAEGQMfdYGP3EiwAmGbLAeZgyFMNuhz72QwQpwMoZehjmMC1Fqp9g5",
  "key22": "5LMGqC1tnnTFBosvSDJockiPrUeqiLxAzJXpEYWryd3TmvdPcBEQW1qdTKTGbzgFCtmZm6M7KNZzkMSuFdHDy9jg",
  "key23": "2iiNWtpDpFSW3LjatKdCP3yxrRPpoZfjuPLHR89jaLTtojXL7ZmnT9ZJQb311NehKNo1Lc3Yqc7opyJkEM3iSmUJ",
  "key24": "4i1g9mc7VFAPVp6tWK4k7dhSk8WQb4KQ8TSoGTgeXFF2FxWrkTDUpv93cDj2Rp9gbdTBgsgWeYexLvxggLMhQEoM",
  "key25": "meE2iPxwC7vTxf6PN6i3YCZVMTP2nVf2qWsr2ttywp7bL6mSSt4YE6nxkgQjLEjRuUsGdpj7k25avQrRovRxGjU",
  "key26": "3nzrbxSsfJ48uiXnhW8ugRNMErZqteDjKLjd14FNrnSvrotcCexRcDJZfRrYS7ayLdfF8MKoAWmomwYHZSfyJvZQ",
  "key27": "phadSN3EdoxutLU75RnyTAEjXUXb3kV6o1THEL6KfZmabTZ6NtHnmTA2sgQqJhDCJK59AfjcbLRpYbC7KniC9ZP",
  "key28": "2hLQTmwABBfCTZPUdCEq6B7XSio2wbjCZb6jwurwEfDBaCSRdbpagJDFWaUkaeC3E1m8SuoJtMQvfo1fMTrkQKu6",
  "key29": "4tACHsGzKjo7ox3dEZWs99tbLJrpT94sdKn4wXgXyrTGhSB7q6VatA4yQt5GcNwnBkpX1QMeVSmwKHgmV8Ru3NZ",
  "key30": "1TrL7ZuMLLCRgQe1gviqigJ68paZwMG6BMbmYo4HyHikkrGu1yj6ixZ9irQgCzhXx8xpKjPxQRGroQD7i9XdqLo",
  "key31": "5yN4WrYSy8rmJYki2YXpykyjQKCwVuTUQZpM9Ye3w3gFHG5GuMbYj7MnpCx3CkYr6T7jdUEkKZf5M7bKKJuDRoyr",
  "key32": "3U7ZfdcD7ZVRejA92Aeb14BgCgyCJdJJcm4ABk58LJ89wZf4YHvNaM8zgg6Qk6a6Y9ZZLkd6jq55TmHy7C7gSvpx",
  "key33": "3x72wWiewAsNbSgMeBt3z9tAM9QLhnJsZ4pfe66V3cKRdKqkMUi1bXFPaeUE2RoXk8JVVExgyMqpDL6MGizF9wad",
  "key34": "5vydA5mJuyYf11SKbnS7sUjgutjyhXjTL9DSWnv72EQwYSMNiaMA9mpXRp4u3by2jAuP8Mfv9oRDJshzpEmC8KcS",
  "key35": "4uEX8Na6Z1hTEJAEqfnSt1tmdCS8XrrJuFXzbsy1hyVL5b9NexAKvhxLN24gCtgC9V33if9xHpG1pVBUkksChLwt",
  "key36": "3W6k1wbyetf6qDZQR5vnaMFjQBCgPH9qx38hpe9kZiVMDVXkC3UmTSzSZr97jR9emetGmq5aVe635mowVsSVNb3r",
  "key37": "2YvACn5u4KrHXUGUWfBQJhpXYbLT2vCnn98UTC6kjXp1JFAoWUEQgnBv6zMFK6SC6R44AdY6m4vg6cn9ktRELrah",
  "key38": "3LirVv278nWXzaSPeQWKVVifYWpFHc8RnBsKWfbWGm8cipwK6yugbB6mvnwVNgVTmLWKdWo2L3SM9KSPDXwyYqSV",
  "key39": "5Lb1rjBfcUm7p9j5RYCvVtJvu3br6hhRaizCHhwv5AfWJgK2m5PLJa1RLZtFEDvR2gE5oRcH9dGPYDGyTnjVESjt",
  "key40": "48X2tm2vVg42nutPZ1Hb2gYHoWTJcdwdvCTrPZcRZSrTm8XTHxi55RcH2NxiRmpjR3fnDujdyi1Uoh22uRVEt3UZ",
  "key41": "dkK3XmEZ2GkerNZKt6JRqBRTQGRWv8vZXTv8xB4mhxSBTo5V7QUt5sKhX9pj6rA6VdzNxaxDXPtz6FJL4mmzaV4",
  "key42": "eWHfZf6uZTbEHyLm73rArqpcYQ5VXPJ21nnsKYBV3zUcGQDFzMcwneb6xL3rTwuMDreHf6k3g4vcpJGvFmCMQtS",
  "key43": "Eoa8pd8NRELXitCHAzi7zeksDQea2n93cT8hCb6XJE8iwD8p3cpbwyR5eLSEFsZi6pVbohxJfUhek4m8j2k6Bqa",
  "key44": "ZFYGMoC8d9ESLiHJCRBPePZxGvJ1UEkiJhr89oVzB37fWgoapuEeDDub4qL7d7sQdM7uJ5PTqYDNsWfAecpXRUG",
  "key45": "2rQMaUi7cZEMagu6qWTo7hnbmNdXvVfY3oVyHLix1RPbKhV1g54w8vTXw7B947wQhMDXnPDFQniC7BNtbS1S5Tkp"
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
