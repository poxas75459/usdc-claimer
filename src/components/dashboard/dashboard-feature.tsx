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
    "3WJEehHjhtzmJzUxXDQeCDQeTMNwn4Hr76rKtEgyP3Td1ZyTjnnd7oKvonex5VoxeqGiJW5xaFDncH2Q4DvpEZMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jePMDghd44t1izdpMW3qDFg5jDaRNhTTpNz4g6fK3xAtEoahCQ28dB1TTRynFPSnqD9rhQ4RdeKX37gQ7aoDNi4",
  "key1": "4sf1Mp1nLXbKWpn77EJwvMAKkjMLsoScuBRRrzhe2Exyypuh16u2TBoCq4ffXiGfJCkRvhatoyDXoaFczoSKcqGn",
  "key2": "z4tmsJoyZuyz38YAgf7vLXM381G3v62kJf4nMdUUqw9PYGLcdfHpYY7CWwHHyRTBYajHNQzy1sJVYki7Ez2aufU",
  "key3": "5zYUJFtsHTwyvwasRM2PBUfTBxAAaD5dsrCMe4N3U4M5b2C5ZkjUjz7UwjZ8G71qzz2QqxT6FbX4AAySvnghYq4h",
  "key4": "2PyMTEy5Bd94MMEzBLtnjPsgLCjE3FTZupJmvRNLF2N6BkNWrMMqjzSYZuYMh81yVR8XXsf8dz5C7pnrd3qRkcGL",
  "key5": "2WPDKobEEdfQLhifTBoqDkHuqHuZGYjhkpFb7Xc6MEBumkqVaffNnytWbRTSM7R45bxkEwaY52NAnU2MM6faN68R",
  "key6": "3pqpjhoxK8Cjfq3zryzghYcEYmoHXSqCd3rNrCkqFpiG2hpFHmUG3m8ircyomBXwQpYyVuQjuxgBCUx1sHZHv5q5",
  "key7": "5BhGdThLVEgLJgnQYgWwfYDJW7CA8ug8oqBvBS2oFwdSJ7RCjPy6J783sgBRShaUqNyx62WGG8pev1AbD1NQMUzx",
  "key8": "5EdsF32QCgxLpHbyHBSWWvUc6tBx31Ji2Y1b6xdFfwwyeyzBbtgh4bM1DAaBH5BxCH5oc3PDtJ7RT2TMm9cxS7gJ",
  "key9": "dQtyNuVNfBrsMKFJFtG9ANwXTyiuoWLazzX9ztG2x3EMcTyPQa7VYFac1YMyWw6wTsY2huetJFGj57GN2VFWh5R",
  "key10": "fiVXA4Dg4FosYgwABoCMSzMYWr3urTpQy7Md73UjgfHYVrxAUFfofMRwBfqsfvPy9M5gaqt29UhTpd8m4uMhpWw",
  "key11": "4WXmM9FXkfUJGCbYaxf6qZw1uSrZHaDJQ9N2vNMZy9S7qtjuTT4fscme3LiiK1h4PUXWaXKyXuJ4xRf523S2LTMw",
  "key12": "43Sx71t3rUoLHAPdoSDYQqp5MRykr2t1bXjRmXCvpFerZZKXrWvN7BFEXhpxpcDv2psZoxoSYLFZyhLYuuM1Sy93",
  "key13": "3TZ9yjEPXUdGPdynMSh8GQquAwvz7VdLgSXUe4SZedVAtnbm5HFW5wAeMPwfVUbPmyyHHL6gA9CyesCM4q7d3ALv",
  "key14": "2aWV9absoVkvgz2HMxZTS1GbdCs7ZXYHFcL9gnjGK4jCUsRHRCwaVrDuMHM51XgAHGr1WdzPDAJzTSYiJTpUfQfj",
  "key15": "5kTVTg1Ngi9at4AXsiBXadpsDaGNi3av3PrZipoe3s6BGJoY8GjG5bLFfq4fv9ppw5pHDw2uvdDYR8ETp3VSzQkw",
  "key16": "4nU4cXCngbGfSojA5pQpaWVcf86fKR5dTqVziNz8vj6yqEXEjHPPUuu4NjniTRuoepz1t65Hdo7zevCfFWsKbjm9",
  "key17": "JZNAxERyxHCddJey3Tkdd4AZ92cgMmYtBVTSxVoERPdw2GYMvfRw14msoXpebheTvQq3gEdioy97emvcZZ5k5HV",
  "key18": "2UEFWCDyCNr9YWGNXwf9ahnERBGru8BQ1xaTdRsWTzxAfizKsCxXibpVChnWc43oxcPcnb3iTyUNHguEGPnnusUv",
  "key19": "3dJQac3swSuMc7axy7UTXoewSGKdTdi1gFEcEe1up5EoFeihy9L81T3XfAZWwSZwJQnWDTBnon3XiYf8KKk2TCWB",
  "key20": "53x2v88KnU1eaaYuqJ1fQf9GUckxWpQ8fYFqApGKA9xq1jiPhaChiZQo9L5ydMrCigxLSijZAgqpVfDSnwGUqJc1",
  "key21": "5k2iVEbnLTsFSRo8SWcPcp1nTfdugynjZRMpnNVLCPsQuKUzzdUrgLtmKpX9VmgKXD7fPLvr8N6XhAUFEVVv8ygx",
  "key22": "869fSqnmQSDWKen6QyZf65BMGX93D7N6szL4DCcPc7ocxP98mwzofsmPFVgDJExVEV69SLcTXf8HFWNLYuonQoW",
  "key23": "ZZaXqjyiJ4cL2Gismi6REdDnfzxccSpq5B43nuuZsNo42sXHEfbkM3TStmhCuVG6xyNaW9vkz4RAV2iMc4vuk6g",
  "key24": "21Vbfy7sJsrBEcgEHpniHFaFqY6xhrpWXhtHDG78pqEbW7Vf9nPuTaWExv3vaRL1e3SLfGbiHXSg51WSo5dKopQ5",
  "key25": "5epbTC6JT5EbX6SKM2SgRHCyjAkcRMx7p9AzyFrQwU7goyuLQM8Yc3ba5DXK8CCgQhpbX6jLT87bMApzYUf2ox6u",
  "key26": "2yyy3nuhEbMUR66gy7r3WxZfbQ4heMsgXwZDFrZ2VLc3ye3Tz1E84QFQtaUc3DupBGN38BVWXESeL1qdYUJcGzop",
  "key27": "5DE3hHinJwVTV4jmqhpQ2MEPVa3djgBLaqiyLi82V2X5uE2eKGMam7FEAGzkEsBkmVdH3DLANLrxXNhTF9427Pif"
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
