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
    "4ombkkuUVFsKWY3rf8tnhtc4fo4Ry1N3oJoj3w8ArCn6C3R5tS6EhyfjbSP6HFtmmLzzjJYKsfcUMf5Yt6azkyJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55jWbfr8w3VyCNHAK3fPZRJZaf9yoKzPyH9Cx6U2mwipdQzJV3L5J2UazsEQxk8nAziTXnSShTRjqnsrZgpkMnSC",
  "key1": "8gE3Lk8ryWuS3DkCUc8jCohpoysBLUA2wREUsVAfJW8mxuhvoKMLftwG88642evqaBWy98pJUQANg93VMpBvcLk",
  "key2": "cGdHQSbKEDVthX1V24BYr1aa3bDnsgyUrCbKug8b4HTx2kb1xgtK79TPZbi2PrjyUdXdZWdVyKLN5KYYYFmb7oE",
  "key3": "jtW1RSqj9mWAKCfg682yyoxDWpv6eXxyRbm8AqLVLsNMGzwofYk9XjqWvFdXXsEAB1NcCF1USHi4BWeiGi7TVeG",
  "key4": "3J7DVnnwZK19huD4Ra1nChB2avTd5cGyi1giWCVvs6TpTH6VzMu5xPpYrguM9gRLaZQVRTmmaRLLPSGiWHFyBdt1",
  "key5": "3VZi1LUnXdMQjfUdNAs67ZmEL8k24eXbEGMNYh6zTAjhCvPdkTKFMXpM34XKhu3C4cZzjugijxFcno7rnDRwnwnW",
  "key6": "4mceGpPcyLL5vbnAoq2RqxXCoyhFSCo352465yJhsUHo2WXx4FX5LUG75FKfhWgJRdYifhF3mnVKWtL7DqUTXDgz",
  "key7": "34eBPXynpSWiaUxku7AUJMWA2jhmkqG9E9fat9zaY7MSm8FsDZVucNCQEULbz8Qip6iAMNHmCJ8iYUccxHvVduQN",
  "key8": "HPbT3vpBTB5YU478pJ8UJHesAXtQnnFebzkcfqBz7FjduzboMk44KUij5veofCAKJkRuUX2fmDC1t9p19wbUKTE",
  "key9": "4NmehjPx4PkiW8bvzSGtdtVTqRivLvdqoKMKDNdrYo38DNB6pzDJAMLiM7sG2H55sRP9t2SrUVQfHsSUgEM4qU8n",
  "key10": "2skNvfwNhVj6iagTnCr3mW8FgJmWvocY7oaqmvnKmuVSx43D8e8sxJw7j9p7XwZJ988Rx7bZRV4i2Jvb6NcMpwfW",
  "key11": "5XePe3FXu9Wvf2oFZwkPyW4fBrocAjXr9jyXgLKoumLJ1Dv4VMH3KVhZQGrh5FSa8MScpDMHWcbo33PjNCW4jRRC",
  "key12": "hawCkxUryRzAHBAwk3vbaGBiXoMPqMDihx4bY3qKxULp2GfUYjVdZAt7nGMJydMxzpk1QbukLQxep1upJ12JnbE",
  "key13": "nUU3sExVAWwskrkSKTQBMqs7sicYsDRPZbKCSfk4TjTxhsjSUvgYYJNECh4f6TYZTNERFkWA8xHAiLC35g54szu",
  "key14": "43m6W86SkDmnTMpJJ6SqbFe3vyobbpWFA3EwdyQRVfCZrMZgBGky9A9i9WGxBRqhftqVurUhJjZvM2djY9AZn7zF",
  "key15": "3UnwhzE6deq5EX5kW1Zjzhw4fJeDWupJcf8vEc1WzBMemGzEd4aHqhYxiZbFSYNxqmv88iAGaHRTZLeYXAth76YT",
  "key16": "3nGpnbS7E5UHxYMiTDC6DSQQ4XYhbkviUEji4j6FWYBamEw4yUjoxi4NFwGbLrn6EEFDd9pdSMrdJXWnxzYK6XgM",
  "key17": "2xe1BdmifX3MeEp112aEkVbhxxR3bEDDdU6H3rdGw1V8NodTeJXZhKZTbP9uAZBcrMW9A1sZUVLkkzbK4Jf4ZTFE",
  "key18": "32kASU1wPZQ9S2yBhwPCQAuhiRc4xTpvF5jizd1N3N1yN44mf5q4xUSNPs585X8CUGoxfAkvfSYeBFxHRZt1EKP1",
  "key19": "5QcQcsrghsEeR8BFTYj9VCs5NZbL3jDeNhqGZvg3zgmT3GgxosDg2PJGQHR4HDmtnJebnE6f1JJzjr5bKeRUDtP2",
  "key20": "2kLJJHY7dSyoVHFSCYDFFjiXWWkURpeoKPHovtqFedXuyG2ZCR4JFnGYb81rpAYdnS42VXAPPamd5ubmMutv9mab",
  "key21": "4waWNCrB79U93g3FoRKErx2PvyxKPwKGQp5LLFc2K289GdGEEzzWGHvqo5WbMis4thn7y3F1EJCtvjCLxnW5WUkW",
  "key22": "uDDkQJvYje3NkbWeAmXxRrN9Zm43VXTEKRiwpyVJ4btHjnpepdn8Eub1PPqYkzRQbGE8jA2RsQXZ1t4PgCwP5Ke",
  "key23": "3tMkQAEsTXSRJoWLcemnELsFren4A18HRQ4vDsPPKyjRpMSE27DGeZ9z4ZwodQTgFozQqb2X6DJdVbhWGRpxoC7j",
  "key24": "4B9jRm2MccEnCzRKY1EfYA1JTizzK5JEnXLo8fPHdbUjzTj73WZnvZpmLfhzWPLXa1YpSNAnCjeH6WhqbFGAgRHJ",
  "key25": "4oJndSeCiUcnS5MFeBHpbLsJ6k5uatMuHgnFD22XdjyyzwKprZju8a33NAU1VdCFvyvk1Jj3uu2JxtR4s4UrZvAG",
  "key26": "2u5NwyKC9XXEGZJTC57qYwcse9MM8KKr8QjgLWkLc32RJHYuZdNfYS6yrt1BpcrzSFzKBur63NrXDeFT8GtXxvQp",
  "key27": "LM5mLpc7WrHnacZy9ehLHZF7nVWG7JRXby1cwrEwz5HEb9o61Au8y7ohUsjoshUM8HSfkzJgBGBmT6PTWE8f6YX",
  "key28": "8LHR5Yb4N1gBjcTbHoysfYBB1XpnFes7xLvq6A6YqLq8M5SS6gJhWUWM1ThQiEBo6NUkuq2DLZC9TF5J5tXPB3H",
  "key29": "3LwusucRBfG924XR2a5yQi6MLda2J4QjvwwhYJzamiefEi7z4vif6HF3jxrrStSrW4Yn4cJkRm3L3qc32AzA9L99",
  "key30": "3DLsVKKntyQY5DCxcjNcdd3PJ84yZmH3kKRn2EK2xwGZvZfsD5Ew989fse3h4xJkrii8XkzhXZeJCU6xVCjWfC4P",
  "key31": "5iH33oEGH7mNQ6RrZcsDzPf6jZCQUTdUTXeapKnEQBwLVqtQFQG8vgQdQ7zJ2jq7cq2r9mL1yYPxiBmHWDhbysJy",
  "key32": "2DeY1HS8aMdmXJbZZid111CXWppeJhsJUHaDaD9h6vsSEo1LJt6NotSJ2bxspA3rxHc2QJfLXpncPQydtqE7pmWe",
  "key33": "2T3uMeZW3kZqh2DEP7Y8fmgiT9jfj9iUZTebiRmQypYv7tUzxuZNa5fRxnCfEY6Crmnhy9bkxmAS8ecBhFzkUpqU",
  "key34": "3EUwBXcCS3kK3nTeXZRpbpszkCbL2Jtz2iqHoKKJMeKQT9gaY87GZHZ8SYmQiAwmuC1xyQoTfUrg4piV7cSPsVVg",
  "key35": "NkC21yEphgs4oQ6w1ydxE1iq69iBx8vZGP6wYA4aLoho7G4LtNQg23Ekpm6rMPH1zpi7AzyNcHvAH6JsBcUKXK3",
  "key36": "zZMBXspdoEY1Bnw7xoVMBKbXbw27fc5d9J431pDF96TAozXMzA2skhRLz8oEV1xptRjqK3okSEuSos1sSzSqcfM",
  "key37": "3m9Y267i2eokHnpiJRXDBLCUZvjY4Xva72GkXKLkfrmfND448KaJKWZrMobAXdPkV3GiTi7qz41DCFuF6YKz8uXy",
  "key38": "3nC5bbXaoceNg6Fz8kgF4woBEtaJMxVdPu3BoJ7doBx6rnpu7b8sGAKiFtEk34LWjGKiPT3dDR3pUBTNhQZAgCXw"
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
