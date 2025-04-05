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
    "2tGv7HRRj6SdbPCkkULSN18Qhpc1Pn5wDBg9LMUrvSsz7W77EuEMgJez9xCpMZAYhqiZ1FFvXxBW6V3V3XMuvoGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hyXnpK6x8zrow6khNU1nkVHLWr5MiYyQuYeryCenrs4FbNefGVsoCkF1sbfMA1KaiA9TGiCthb5PqiFUMRURCA9",
  "key1": "7sQAyvZ229nUU95FBv4TqGanm2yvCGtgSuRCe4jQ2YoH5SKYCNmhMzAuBxJJxG5UEBEgRSkDGJHqnWNaoTyWR8m",
  "key2": "519mqUGCiHnDuSfDPHFAihNE8i4djYnzYWXmTeiiiEB1b38DiFuYR6rHbAHhnjq8SnPHUQh6WhvsoYpQH2dr3xu3",
  "key3": "52Wf7FvsBQBqYt2J24nsw4qUDo1up4Mk5iEodSRQK7dnLL5omqhjtuiXxQMBpk7MssisHGLZ3KdPwehVC23vA1Eo",
  "key4": "2w6R55uFzY5Ly3538cj7UNKWeMXnirFHoifrQmzGeR5dtKX8CLe9D97vFwGhC2ZsxqqMTMQePTg7S6A8vNwYNM3",
  "key5": "yQFKGCqcWo2SvHB59oGGEjpb5yuhJPyo1QH1LYZX5wHZp4BEPwfFKP5YujRaEuh2bVinpqb2DDUpS3yr2vebBs4",
  "key6": "4YGrDiabRovY3fmsGipUJ65Q3R7UXurtgxBfwaxzN27NWdBJvtio2VnzaBs3tpHVGkaouUB2JLUiy5yczcuFfuSu",
  "key7": "3hVQaxc1u2rUxR5zb6AFhTmSUB4n6hkBoWemmyR1ZgScybihSBfXDZQkS7ei765EVtefXmy9r5UKpS3DSd8vWst3",
  "key8": "4HE1AZS21FbPNzcdki4FqT2KVTFuKeNj9y59324pDdfd9mDEGnsMW5pQMuy1iPsoxmbXhtfUy8arJdvJ5mBDoAar",
  "key9": "4AnQET1Z1MVCqUWxcKPpyMfWBx4YUTcjprDb1QaiAC72MyoVYeEr3kYo7VnySJCRRb5zrVu1uAX2JsxUH1jRVZgQ",
  "key10": "474Jxd96WH2SvGRgFn7noJxx5gaVcYZD3FU1hoSYbXpypvRQGLJ6Fe7VWFTyHS47SxWmAv1RZZWKfYydwJSAGDyJ",
  "key11": "jBruaE8KxKCmAz4e7p4Hqqqme5XoWpQGrkoyn23HNNuSjEMfuz3YsFXpdNNBW9rkTSA4VAn6dmFV2w87d8z2axu",
  "key12": "4ai9QrRHhv24cqxz7FmkAkPCbCLCBA97R2za8VCmPmiUsfcsCybu8aXLnF4NgV7epBduc2BXTq1hJrjy15jZKmMT",
  "key13": "3D9gkhkfwNJKZ6W1fNCtNKTh2bpEK2oC4DffWHTcNWLZCheeUkjCX7NiRoL4iMDDC77aErZYbXo2Vmm1F9SUTEgP",
  "key14": "557yH58cs6vXaaVFsTu8co2GxCT9JkZktH3vwCNTCQ1Dt2MNsK58henGbU3m2tgzB8mFeBUwPhuu55Sjb45gUYBV",
  "key15": "4apfvY5XtUatuGQm9gey8UkkrfNSghK5xvuA5SDdAD4Na2pQpk5ihZJiSUowt59XJ5zVM29mdjPc7dcnw1zrtsv",
  "key16": "5c3jUmfsYPv87Ypo6S1wNH9UDXBfX4DGJZo5XpxpSnMDWXMxCtAnRbfHWrCrkt7SL9gun9BX3faDZNsceqn3hwKJ",
  "key17": "5Z87sfDTTPmAnya47Ga2pmKjUJMDxMgqXJqva5nYo7brp3iDtqd5GFvTFMCNBA4xtbK5RopBhRycWyPL1AL4egs1",
  "key18": "2XMDW5EutQ8hb3oeMiotJ1m1rJo1Yojt7ED4sAgjRYWjLnAHzyGrs8nN1JXvf8pwJB4H8K36TntPCP1ZKAbB59Qz",
  "key19": "2GqFPBbnrcJN5PDUuX429YdPjbx9PxG8AaQUPaa1KNXpxGC46qxZnfPbPaqipJcbFvmQfdGMr6fNUmYeeWaWUTzX",
  "key20": "4eYywrRowQdyH75Cs9GFAJrPDzBXMX86H2xNC2QW3pTjTpQkNDKZv25XFzXdQ5dtd2VQqgXbiuVysg3o1xhdZ3sf",
  "key21": "26RkTiAMgweng1bgJzFDJ2mhrHbq4ezLFAjzQ8rhRuYGA7psepd6FfSL9YBProtdUfcmqYV2sVonkBpN2r6CFT4F",
  "key22": "ifgG1eRAtHgvdrd4pnxNTjdMEWtDDjgNCSVkrEVNS15VqZRhR5QAfF3TzdM2UBZVQVzWUbyNG9RVj3Y4zTFwqPZ",
  "key23": "Rm5JxHTK7MHde9ziQDotvbFCtfxfVJLezcnJbxkmwouU6pM6hoRn1RnFw6c7tC3JdhxxvnbKokUxNpebgwLMj3h",
  "key24": "5FdZZfATDCgDwghPFYZMfUFQmVecW6CxdXDHuAVTrDk5jzafNXAHtEdfqA8RSJq3icT2rm34LpAmXFhiMvaERFfW",
  "key25": "4a68QkvpzFwBgZyX2XFhy8nypowtBL8AWEocZJWjzPmpX3hK1UBRf3nwXuVpX3SGPBCSNzgy8c929yf5V5bWxHYU",
  "key26": "KYsoJ8hvXhMs7vjC3Laft54RjtGFK3SLrkmTzasJ2EVBCHQsZMEMmF6vMpzDFMQZfzFAqfoXN4mU5ZDxFdQUghd",
  "key27": "2ztmrbCFu5tChRceUK9oU2aftc5Te35VoTwNMKxrhVq6hDJKo2V3aa2SurPNtogx7U14oMkeN7HuzE8Nnu4SsQwx",
  "key28": "5egjdusU2iuj3dhwxPnNkY1QU1SE4UquEqC55cp8yhUupFrzCGEugYnQHXS1FESge45PY42XWE2kNahozYAcmXbo",
  "key29": "3jLUonDwgwJXAcyNxc8G5Z15fsDGw3cgLmQEnFSZ16jLRyEqzB51SaJFKsCSXQXtVeZhdJz4egoXpHJbLFQqiNdd",
  "key30": "2tyzTaH5mS1QYyzE4vQZyQDoDYC8t9xqAErstyZdWwy7DSDpMKeBteTp89e1DC62ZbuxEnbpy2zNoRS3L1WKxGW5",
  "key31": "5UFu23LMayDieGQLKxwGhVjqpMwus7wqu44QP2EC6WwdxxzSRrJaU494GsRjKmCmSZJqMbzgJa5c9Xkft6RzNx9K",
  "key32": "6478xQie91ePCHTEsYkWXvX4y8VhGYVVsrzZwEwr2k5YLDQSfkn5KPjbJCptuHdXByGxeoTm38rSdxFFd3EKd6KF",
  "key33": "2fvA4yD9wV2eEsdUF47RjRK2syk3Pg4YfTu3fuDcUfcU7wY9wVue1vAZVUM6mFLxU2pwS23DjSXFc51sgnf6gfGZ",
  "key34": "EMKZT4KXAStRcc34w4JgPFA3XBmMo7Hbx72DEXJd5viW4JwPFGa8dbKRhjRaV5mmob3QUNcw8F8aq1uke8t336Y",
  "key35": "2bUGkLVBKbD8CrRSe689gLomMP6UunYQMisRhjjjqMERrEH9LhQEJSWV5KJQPgChFYGDSWVGQHRpjuFgB8UE2GfR",
  "key36": "3TrRDg87dHqxW3NqeVJtxqf4FgL3SNf4Ub68ePUtzWML5m8ehNeYng9N66AyTyHbHY9PvXkRqCLU1FhFQNcerQXt",
  "key37": "5QkciU4f3goypr6V22JuMAoeiWbU5kFs8KbBZn8WbemQb1Rufy7ZbyefrcTPMnNXgykpFTTHAAjgZZBqrsaw7LnT",
  "key38": "5JroGmJY8koD2pCZR8nfp9YZBNi4HVYa4ACXiTSLAhnhkDkiei6J5ZAvBSgMw2DHxQZnhLdqH6TiDRBRX5sA8sDC",
  "key39": "2qofiST3pfxh9pjV4W5iYf7cixLSzuRTh7GcJwqbVPsxLTusP7mxUaCWcrTWgEB8ybLeFBRiijdpj3Gj6N7XCGK9"
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
