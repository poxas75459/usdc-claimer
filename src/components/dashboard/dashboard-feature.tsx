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
    "5XH1qcUqPRchaXSGr2rBgKvYrRKKJKia97uJenvrxa45XUyrQw2V765MX94AX96hvwWu2LECbBfMEfjNQPF9xdRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sicg7vmPGJMMUjFCFgDRpeJSPbtEVQFK6Qdrz1pyBVyHwN3GakPkuVkvwgh2ih6xuvHDyVUfrkFuBv2gH67yavg",
  "key1": "5rJXRZKw5bPZ3DhdWXrrxZMZio1GNzVs7AwkFTjPofk2KrsLGZxJNw4TXbvcW6CWGfE26rrojYE7eG1JSrUeooXr",
  "key2": "4U3vEaMj34gnxSCsFYZ9MijT8f3t28kutWsVjkwRkswYZBw6PpEXsEQvE8wvzA6nX5eNVBtE1t3e6bueW9wtxvfq",
  "key3": "2GgBUSHA4THtDvJPacDhSuVLw57h1EvSMXwLmwNLvQ8BejzcmNMHAh9tmdVvmCSwJk1zBZUKDNwZ7RCEcvBCvhri",
  "key4": "PD3noBCGgo5X4JjS7wroiDhrtCXg6wnQtqJHkgXGpj1fufCBBE6wApbFQpFnwb4S9mJJSjoDqsZvqGWsdVU4EjU",
  "key5": "4bav5Xkoznv137dZzN1EC8CnY9qgZB6U1u84mjELx784LSSCmsMUGU4ubp4hPdqCNaJAGpnCL449yBee1M8mT8SB",
  "key6": "4RG4AFcqv1Z5eG2LTqmaCSYhjDue9mVmRTFz3D9EvHAJ1VTaVTwXQyoisUcnpPyZDzeGaUk3XFkTV8zqMrcT4tZf",
  "key7": "2g7S8VPtoMU8mYpXWqVoRKAoHvWkY5hpAAQ7ZB6R1uLHYUHJTHogD6cwFPheiwLiGHBwVguEiuBSYDRN6TGJWJQL",
  "key8": "5WvGacGSUnR8C469uSbDU6ARdrBrwPoDarDEYL6rLsDAMU5Zqd6eddzwdDC25x8tRYUpDzJN3jkchE7YvjUorcM4",
  "key9": "34ggy4bABocahptYQ3fV4QPfYUh4isc1KCBnkdEU1Peznc132V53nYaeW7JaAqDpZRVJREf75BAbb27JLEigN5ti",
  "key10": "3FRPXPLAVHV5kWjTqVcVb8bqKK9C37aWGuArSzSd4dKgCoM47eSm61WiXf1c38SocPj7hAApdMpctNK6rZj3hJ5F",
  "key11": "62CqHTxSxFzCKUw8tq9D7uLBhBtQxMX3PFv88PMQ5muG7MtWLhoGLyiB8YqDfeZk3t7joJbJWNn8JLNVrhhmCj1S",
  "key12": "93bjHgnmt3wQoMqtceVxatCAMi4oEf58wRNfPg5CuQZyTvf2mGjc6Nydvjyp2ZktqDn7CxrRS5hvHkBUbreKPRd",
  "key13": "559Huyo52knNfNcnURw2s7pEW2ATGNReNjko18QQpT6AQU7LgCkbmKkcduRUqV4FCm5JKdutxxHNMHEfWTZejz3p",
  "key14": "4PK4Ut9gFCatWp4kRoAaT3XfvpWhibYDnfRq7tqLRUAWsCqxvWcKeHEoYpBguSCBHkgwLacSBpNF7FyEzqRTXnJy",
  "key15": "31ByfBCHNMsN8hEGoZHo6nXLHVGW3WM5p8gJQGPVKTBs11zhNRaqcAoZavSAP5f93c4HBTK85dPMDQz2hXLLtWin",
  "key16": "2C4oK598sMqLNgjSL9MxZzWsu9YwizDKLzTYBJL8svvvVJLgrqxcPMQdxriqQHHAyyHsiZDYcWbhysPhNRMiyXRd",
  "key17": "5yhQfraE2yJd1LR116ADfExSWdMUSzSRobdagqDvNZfoVouQNp1Nrcxih6w2xS8En4xUCME5mfp8i4RT1tEEtYWM",
  "key18": "3rwpHKB8KMtWPJcrHBmBjwU2LgXKNGCTYPxXsVTKGnDLcR8EnmHQ8Yzo8VriZ6ueVvmkpxHE8X9qK12Fy8byvMUn",
  "key19": "5QqgSXZwMUGnpGfwkzAYpaCh692vB29Gf6dSNyBxxR5UPGSHfEkxDuLJSZgrWm4qMZ1xYe3jkKLXX4ThuLrKaDEL",
  "key20": "5n4BGyS3i6z1uWEzkSvUF9ayqZyt7v2GJnp1LAfMUUSPeGkzeXitxRDcMbgUqSCP8p7ARhDR2QNNQ6pFFHZ6tprE",
  "key21": "4qQNE5AW5otB3Rd18aTEc1DD6DCDq8C4z7qo1j3HkjXk7FSzYhFyFz7Uyk9AvuGTsFrJPrtRUAUptDLgGwP4KmfS",
  "key22": "5GniF9qABBkApCbe5RC1W8VESbWcN7uXLJFdYmVuCa54YTw5yyrB1AsS7uxFxbLWQ1rRqDrwddGa5n5ZcPmX6N2M",
  "key23": "4X5RBggG7F6Uej7FAjKqdgPJPDVGxdzNWSwj2wfQFq4uyE7VspoVuDKFHLAAFMoysseHzEVzkwnKFND97BVqCUY4",
  "key24": "2PKCGJXF5fjEAVYKM2DGzv3HRErHN5Hyzy1QeTSpvkDLaeHpfYMZqtJtEsY461uQZhCkWDDyR355HVnhaSFRCyWR",
  "key25": "3jtu8Rmj7LJG9ogCEiZ8oi8QVCnhUiC7Pv7GmQWFRkLYTVCL5KeCUQJYASzToge5ddFBTV7Y7ANUVgTY5oLDkj8B",
  "key26": "4WWzk5cSH1f9SKom2ELbgedqoZ5ApqVskWiB4yg9oyxjK8Mvw3hSNYHG1eJr3WREG33NwuE8BDAox8RNgYA59gBn",
  "key27": "SeRtahnYMwAzpnaLzj2vA4FLaCRTvvurspfpJ7B91U8nWqXCzA4fNrt5cjHqQK67jezgH7bZCb6G4H9dZH4M1vk",
  "key28": "2wV4JiYdMYaNfwoZBPYWbEkhvXaL1XPix9ggoVqQMxz72Ebs9XX685NmX16m2ot22kYwS9WeYAPf2eX1vYTGh4et",
  "key29": "4LHWsuBvAE6nkJ57QRPotF2R9B1JcpP3sAgMencPQ39k8LX3UZAPSNzS85B6gzZPeLn6HMHKmchuE5uLaGGprFMR",
  "key30": "48SChPqvBqbpexac4L9AztPBgVSC8JgRfWnqejpZWPDVXvyYmehTRTjC2uL8CgCUBuN1nihbDGhtsR6EpTuZ7VsR",
  "key31": "5qgMFieg6rJPRUMXsxL6bmdq1pvnHCdE6M56BpzndauLYPmcFuMgRb97QJL2v7TzLjZh62mpU2auWWjVNWLuLa5n",
  "key32": "2RqXpSZLfhotQiQGDjSkHztxUMyQWQENRac6VoVMEoPgij8mJkSz3HUDLNjfPas9nHy3D3WDmUvpPWCCSxHbxPsD",
  "key33": "2YBn9QCsSLXP9kC4vx392hfKtLzwLjf6Zy6h8ef6pucza6F6TNaDqrPhmCsRayST9Uoyyagea1qmUWkVhGSLiywr",
  "key34": "uwya9BQmzhYTyioLirkGDTYUA1AjCeeFNnT74YiuNyQc9t9TNBHUaymnAp5kPVUtz3CYyLV6F3yFh1xtfQTobKP",
  "key35": "29Q4EheDV5gf2BrUknhBjt9jYqrfNyiUhyNMd3URPfYZveR5AVQTzgRmSifHKJeyhGTnKe2sXVGATC7Ajse8FuCg",
  "key36": "e6CenSqVBCqX69dCxENQArShFVvVxdqiRstf8hiTyyR6wQ2X8osCaxeR1tcay8EfULHvNKTFEGT6gxiN5QttxcP",
  "key37": "22g45Kna1d1jJyXQaVoVAu68qcwFkE5vuizCys3YQdnXTfGnJ5pqt2EBRzqfxVfWMzkBwFiPQhYoi4HMLEFHgyFT",
  "key38": "PyKQR2natFqfEJEDv1K3EX1DAkZzHFkTB2ddE2M1dNyGix9qbCcrBN22NvHzeHBAo8Wwp7FsSBLZCF5La8pPCVp",
  "key39": "2S4kDFDenRR7nDKGTTpxrGmugC24VRQaMGTEs4EtHbhGw9x4JtsqCfJH9Sy4W8EhJmMauQMncVVCQRJVrNXTB72c",
  "key40": "5JEJF2EBMRXVJ92xe2z547f7BCfwKKEEAPUvLuWQNveJBqY4TjAQs7hr1jxmrUWLHnFtuL3BcbuKsnrxQm7FhWxw",
  "key41": "4WU3zKgWLeTh72ox8r7RY7dVAYi5kaRhfTAZhN89J9D71xgGbunGvLSjQ8TspxiAeWsNtAfCcWmmoB4Xw5pWeAck",
  "key42": "2an4iJP5kT27JZFZdH83F4FrcDV8SqgeErxfUQ9pWSEjnqN1z3ZGDv7oAhsgMZt8L3s4CRq8AjapKagCa8DmGdqH",
  "key43": "5t3QiJPDqqMA5sNMRNE3aQzCyJU5t7ABUsHkwYXJFLciMmNKMYXGmEVjfPfHEHiYbBMPEjSXmcMw5AK4aYScA9Wy",
  "key44": "3Nk6DggszfrbVFofCqFFnMFaL4CdqAfCFDsTcCy94ebdErGnX3vtzMKNhDgGeoG5bmHQhWHP7kBU2Ujhj5iM95ei",
  "key45": "vTTUGNanrZGBQh6KPEr2ZSRNU4eBCcTuSZPWMJMAQtiDUE1DhLbbW1EfQhiwVt3Pq4ZmpQLh43nGbCqrj7N5u2P",
  "key46": "5hM5uSuoEKnTwJ2BSgMS7z3xjNXZJnrfoWPqs26rF33Pdugn1Dq97jxBSFgkavHsQVH6UeGbcnPXq13wdj4Ys4fD",
  "key47": "27e8Kcn8JsU5tx6xewJM8Z2W6h6f1CWWTgbMkRZNRBSJPYNQk8NbmE3HJHfuH9oEYDiexTw5bFPuPePLh7G2nNKt",
  "key48": "5G3er7RyVoge26hCkurHVPKBXgPfPiFALmBXSx752kPMsaxsnSrwG7rW7xLNsW5epYqPw4yY1S2ZnWPmEDVxeSeo"
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
