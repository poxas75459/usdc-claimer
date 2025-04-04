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
    "25trmmjRoDdsnh3w6W8yepL64n6sy7zk4fjKUwFtUR8BL5Rm2kCv4AKKqttaW18hRfRDHqnPP8Lt99DjiLNukfMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yrcdEeFHoNLjyddc47EERvWbvp5U53G4CvkCXTok1s676iijK3NWYVhDpffxVEzNgPkJhHQtVb2nEU9Y9U3ZmGC",
  "key1": "3pMpniMEEngoBnmxistvnWhrHNEyD9pupLvUE6Sdzp6NdCehBMnXtxVbwJWNEC9QayASwfTiCvsQ2edpD38xxQtd",
  "key2": "5vEobMb41U7t2SX3A6bUyqK68mc4tTQTrZDyufKZRVrf7CaEVGj3mYK2oWbxindymy7XfXTGvYfwRWWeFqBWd4rx",
  "key3": "5NxYqqkrNrVDXDyUNso9QG8HZT96fmeWXEuVPEjbtvfSLP2TWkn55GvGxgZXxT574VmXK3oEfYKvoSDk6c7WK9d3",
  "key4": "3djDTkhvnnzN9vexnWofiV3t2xZ1VTK2CN9yjWUqB5bWh1BET2t8TWTyg22JtzX3fjH763h9DarVCffY5a2Y2fYo",
  "key5": "3yFE16Szc5NkkB9tXZ7s3o7KeAMvTS7XS1tYq8mk83yp7yb1zX6iUsoGD4SSx4adCcfgZe7acnNixZUenAnuTFWv",
  "key6": "4La6tQPqedyvu7NP1uBGo2s9xoXLpUjHLi7n3xVKF83USdQHczLUM97MKf2D5ScLyYR8tt9ahEwSXzgfsG5nKt94",
  "key7": "ad7aYswH18EVznaLwZHVnezzepF557MHaj5aKMQMLwpHbcEsu9XQ5FjjRrXEs5vHAGEa3h16uonrehrSFcHPTen",
  "key8": "3XDaMz59bai7a1p1S87NfD8cT5Acnmh8R6Kw5djvEnsh2VV873YkuB65eyqTFiEKDZns5yf9Bx1nXrPydAZyCb5H",
  "key9": "34Mhsbw2Qxzes8E5N8EfpgR1NRLkX6pTAAFncL1pcrRncgtdEsaKsYjJ1u1w2oFgd7Bh3Y5ZJeq68JUmqL6b9hnM",
  "key10": "4wjGx6hmnD2h296wFENCq2NBudVuU9tUgHCuAb5oEBvdmS5z4zb2R2M7tKpxGaiSYUrGLwWkzG6rn78nFEa247bm",
  "key11": "2i9D67mGLr4pvZFYAhx9DjxDUqDyZWsnCFuMQLKE5yek9cpxgr8ALM7rPAnExAx9Y3WbW1ZGijVoW7rzomrt9Ef1",
  "key12": "46D28zQFzmuJBLMxJMKZUHEBDrUuuNWnGnTBA9UGK7w25WPsLuQXL6xH6Y9Qm3PyfdwFM77N1tzgydGWgSP8A2at",
  "key13": "59M3utQrX6d5eFi3Vnx7hq9PNomhQuZui3EnmosiQHZUuPFGPYWfntB3s4iKHKAEguzdehWxyaJgRjoNottUXoe9",
  "key14": "2xcZP6DFzs8kptFuY31VimhNETNaErPUmJSeGADs14pCV8gz1fbjKzGEvVAWd2tadMwqW5UnjyePHwMpaRPuoSPi",
  "key15": "5FoY456zwh1nmeG55PVRRDrh4oDQih2qGkfjpocDkkx3uLfcirdjRnXWnurtzvr6Rwbv6vYPNuyQJrXGyKxrCRaC",
  "key16": "4mavnQrKGZR66dk91coRRf7qjJvWpVHPLG2CXj7gsC1dSBnSeyhNgyutSHtYNasyWsj574QACQmvHzvSR4rdSnxE",
  "key17": "5FZLLBqM4SW1w5x6jtNonGfGr2S2FFiz1YD5m1Sy9bt7h1AG8hhBdvqSVwDTJPtdp1e9uSPsVNky3hHg89kQZFXn",
  "key18": "37Yooj2YzLHm9G86ac3US4Uxwpd8uJjZyCYnAmi4ToYoTKA2AJ31zUAN8Az6V4JNm3YG5pkV4VJC1584HRq9oP9G",
  "key19": "5pHRWuk5MUc6vXWid6JjjcYhStmbBuzii4tkCTLTvsUHeFiid1wUGMEgz4heYKebj21MQDkJbZbHSToSNnhE2d1z",
  "key20": "3zHtDdT5QYwS8fGzGf8HJRWWwrfNNNz9V7vdMwSFiBDkie7tXsGXYiduDTGLyR8n7W5FdgFH8j1zbN3SgfcvhQDT",
  "key21": "3L9Zq8sfTiG2yNzcrBpCM4KPJgRivsXK48Qz1f2JULrpwzyo2NiUYRwJ85PBDHeq6NuA9fgxhsVfFPRkwnHj56VJ",
  "key22": "3yKGhV771eqvMTUyY5JbiGUGzKA5jXSEPhgdLuUZr6mKCVUF3JSThxWuCnpcaPooJEgcz7p4V8ahukT8NyKsPqRi",
  "key23": "3oTxLXxBh2HoQZq1YLrWFgpQD4GvnnEq4XWp6kUT2YPLZq5vi4q1tkwFP4T7iD1VVhdfDXKVgZ4c97BuzTQy1C7",
  "key24": "3tJLm18PD5U4nqVi6tFNRK27JLaXgDirXvJJvxfGNy7r7PqUY4w3PMiSNxonhYL1sMWkbQCaeLB5fkuXw2qoB2bQ",
  "key25": "4SKrSBgefLLuXAW26Qcv5HijwrFS827UvbtPwAK27BVJHnMaNyMd4giEwdDWaVFj625owgTWqjd4JxExPDg4sZ7j",
  "key26": "4baNa9GTnhWtXvDU47mSgg6JvXkUvGMwGzp6AGt8vxeBMDKu9CDxxCcwQKGZ4nWL3rQmsLodv9Q8zrunimukeFRe",
  "key27": "3Xj47jyMAhQpxrhuFjMVJaE3wzirHsRzgtzZaDZzZify8edy1MX5vbpg5wPXDwJn2usVsDUSgeojA5orowFDzYJc",
  "key28": "ACZruVQRaMvegjv2GnVDsqxzHvrYwEJ66GQiN2sWc3fRLA7fVCELtVjh4ZFZ7ZSqRD6BfXDg8XU3JcdaBoRHTJK",
  "key29": "4VrT3GUjfMUQdF8DbuYLynDL5YAYbZ6HTkzU2zajugPA35NXw7Sv81bA5pYoJwyW5Y2Cq9VmZgPECTsrWN3ipC85",
  "key30": "iSMMmSbXWk3n1XSFZLZAiEwCamvUCe9zWAYH9QEU7QtC3qQv1PgVJkhrp6ds5xMLNyneQECq3GcfHL4CnqQ4DAx",
  "key31": "2jonzTBDYV4Tfn23a1hwyvMK8LXhUUzs8efq9jexEmzFwkJ5WkpwCwAqTzBcsJ5otx1oyvZWWBXTYWFW7TmD2327",
  "key32": "3t2jFVLwWyLyzYNiDEZVxJyjckyBWLFmyDFkU1uV1iaUejchU77gV5mJ8eTXopW1rYTtN5cwRhULEvkeknR4ZXHy"
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
