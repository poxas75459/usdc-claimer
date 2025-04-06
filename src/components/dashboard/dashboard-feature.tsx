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
    "2UnTp3n6qrTCGiAriUPyMx5q4SPcGV9ku984n5sxcHZrTjrPtVcqNLRb9pWKphGggXL4dCdCWB3o1fppbWiV1i3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DKs4asiSixCmdmRuWToKGsxfDVTnnH16Y3XGbQvCeLFhRaEVdZn9br9WnjfGgJBehBPZevmSuD5exNPKPSbKHQK",
  "key1": "5bdZWApccmdTG6xpbLKPBQDhFEmxnnk2mG5AJzWEN7MwoQKwcHzXuiAmUJwfEdk8Cuwq6ZXMi6reAdngJFBPJXRV",
  "key2": "3oMPmucCvguw9vArwXfXrcSsfajeCgb3wmpbK2DRefzxfCebgu2rKrbe5vWJPLR9P3Jqq4oYi4rYDBzBQj4a46Mo",
  "key3": "2BatzGLCGo3D2WZwfT45h9VwGfXGWQcNosSEVpFLtXtEnoVFYzi5ATFeDoHHb8s98aAqW7ho3279jSuB2J7cRMKb",
  "key4": "f4Tpdg7sqJtx5V3u2RYnpJM43BAeusEQwXxkZ7XRWzdmSXSpt4g3vbMJLmWf6SXNCqv4z9EG3c2RiqqJHJ8nbiW",
  "key5": "3fKGX8cQqD44nD3pm8umFhbSxJLZ7YLoRWfkiXLcn5edM3rLDaGm4566Wytqesx6QDRps6mpRvt2FB37UVFxV4rh",
  "key6": "3EvgfztD3yFbBETCsUUCMbJqXiJrFb5u22vfR4hAvCFh4BzZDiznzttiFNnVkAp9yqdb3uRH5v9soPHy1RXSe4jm",
  "key7": "26cmGP7kTNk4XTPiDBGUJk3TNxwtRVpG92TtVZuVFC2suv28t2KtkoTb3ddjkb98C7R5r978GKymQJhaZzMgo4tz",
  "key8": "3LE9zzGcsmY84NUUqPF3iU78CynjxotGcmyBQ59EwLn4Tqo9dJTmPno4iu987xeW13CKUJYQVMw8n23wh8RrmbAW",
  "key9": "2VJi2TUZzBoYBeZdtAbDpppkkQUdjhxo99UCMjrGfVbwK6UST4CyyUFveb2Vf24E95Byppa3GaSV4uKzPAiz39d8",
  "key10": "4dDeTe9h6qy1wLz5vAw9PuhfXJusvsqCAsDYWVRBGSS64K33yH3VkfRXaa6coKSaSkehkSCQLidgL3UrZcTDgbsQ",
  "key11": "5M2Nn2Stw1Rqv3R6Ysr6GoX5TRoMDxQ8d2PQPSC8ridMyhZaJnpGpf3iYvR6AT2o5SM7DRa7wny73h4YwXrrFrr",
  "key12": "24ALDyg7q48VvZi6fN3ZQkYfcbnmhzoeHdTZVztixJYUsmWRtP78uhD2mBWR3gMa82F5VUHyHLXoVp8eMygc4wCe",
  "key13": "24Qaj8MzodPCg31dCobnRt9CVcp85579emBqLzLp69C4FVXosLkFw5LPb919icwqwhZMgwBtv7hQ5fWeunYAR5RA",
  "key14": "mC6Yy4T42YPcVtMCQHeAB4tXm3Ch8jGpYCacdPKrUq9KF7DfARJaJ5cz1X7UAs9JKSJ8xtj57TAxijaVjTxQFLC",
  "key15": "66JEZGzQF4cixof4p7ZVv7hjkWzesdvv9Hbe4Ab3c2PK89xUeAtRyE2THXJMo8Ti9RXgKpK3hQVX4DrkBW4iniT8",
  "key16": "44S7vFvg9ZttKvRndwCyqhMk63ErsLSP7uXzj9QZGkFv7VhhWkq8JzAuW6mJ5n9S2SeRnBQ6KPFzUvQth9sZ4HK7",
  "key17": "4E8rumrbR3xrjQcyb3N269o48fNHkqDMe6R86EQCc3q2jKzyduShu11JUqoRFb9CPXCK4iQWKhyvzs7YkxFnEzqq",
  "key18": "5GSXCFLTjptcnptLFL6znD4MCuG2vGaNFLMNdQhiDovgizjcGryUssT9X6Go8widLcbvVNULHhrzjAaeJPpdaC6D",
  "key19": "3uGxSn3dLPLb4qmc8GfPTN79abbpLjWp1qcyuKxzL4MusTLM5uzAcv9ghRgjhyQgKNnhJPnPFc75BQWYppDstAx2",
  "key20": "4mC1EurHVbjKPpQ35pCZHmbmgvPe3TZKwzAEBmuvWDiWxcM4H4dnGm52KDzQXCVDJLWp1fyDhzpQ8ZHwYhAvtAnf",
  "key21": "2Q7hW1dm9PE4Nq9E3ghQ73Rt8LTucFGrFHc2GtJKixXEft8FncRhvKFpzMwCu753PZfoWBHbvnbs29M28YBt5UJd",
  "key22": "26HUsbYExwGJozXUejAV4BwxD4S5yUJPihT9T6X8C1s8yzjuyVAFGkAUGtqJXK8AvAkjymN1w7EpcoY6hfH14BVN",
  "key23": "63yKZmFLUXTBNr2vsAqDiJP4iXoaUcSQjw2vgQ842W49ugV2dsQ9qwh2TV1fBumEackPsu2XnLQLMhrWYZpY94yt",
  "key24": "5GdNhC1PjD3aKVTpRSdUsbvDFW3nL3mz9ffcTfSyztRnnQoU3mpqMC5f1JyWb8yc5n5ob1kAZSnsSQQy9bvi8kfv",
  "key25": "23s6jMF1UNyJK3T7kAD3geNiKinDNHuAnxefwNf3R2tAJFKrfZoJyqJeo1yRW45jWdY1yvk9qG8VXA5F8igmzCVQ",
  "key26": "37RguhHVHzaVHdqbNw43ftVPjNNhcti2jEkFSYwg3wWQsaXo6K2K6QhUnU535wGrepb8GfUB6PT6Umh93LiDBGe8",
  "key27": "4RFKCohZMxda9XS6yQGmeuM5q7UJh6AfAexMb5gFApDbLiF7UCBLbNHGd4U9AsVeJgViyhUZ2YtAB6oDfsy7HRtF",
  "key28": "NuraLPakM2Jp7SVCdZsdo2z4TVdzyXfaDHqjKe9B8dJFmHcnQekFb3RS1PzgVd8BBgGA8zb73j5UMdPdKfHs2hC",
  "key29": "q2zyDLZRzKYEtkBmgvsJzfpHaxHeKPB2t6J46MNpoyinsafLHrtFRKPtSrjGDUFzSjejtNnR9Becp4xrUp2gwB7"
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
