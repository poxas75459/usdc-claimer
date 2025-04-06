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
    "5N61vzg39usbVkVirLCxMJBEBHzoxGvDVaVcWdm3FypAPq2G34TdFCnD27wphET9QTz7TtNTJJW5myF7BieGbyUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "565kWr2CUoNdec3vJtpnSnZh6znK9BhYJFxgbEU2rNbtPKBSLZFmPZ7HJRPNL8chccPGcMdLQvA4vrpXvhfZdeDH",
  "key1": "5L4EWTBcZE899hvwRvvYof88seraTkYQL3nyqThwraUaneiJkJRHcXGa49LfzDf6Z9RPU9N7j9hsKdnXvkFAfM2p",
  "key2": "U9rvMPrGhmBGQuCKD8rJRYBf2iXsa3EKDvVPt52mN8KHaGsw2gh2H83YkbWicj1BeJV6PV4vPx3atuWtaXoB4zp",
  "key3": "32RRxinHre5S7VcX4Pi6dTWesHKtvgaRFcu4k99W7Gg7pC9oyq4kcjYELZoyUzKbneXmtAshALgpTux8NAj2oxiK",
  "key4": "51qPCMXq1nfiLJrZXdGrRoxZ65cXbYuHLHCUF1BNgb8vftVisUg5CU15J5cLFKiMeZnTyCm7G5b4tdvnJUoxRdGM",
  "key5": "74XGWwezn7ydXzmVPc1ePW6CwTKtVvPSSj9nb1gARyv7B2SaoTDBrwUiuDHDuYwHU1StYoLKynz6HtmLGodeiMR",
  "key6": "ATQVd2tveuAU2sLrTvdMhuYnjKPB3i3YRGNnG5JoAYpkmTuz5vXSA2zyNg58ZH27znq6QkgfM3UzNHSE8LCs8of",
  "key7": "2svZYtLmt2gV5AjCB6qvHKP6Qrodv9UG2QHAbcuvQ7AgLtnsmJPMh3eGbsXQJiM6Xqm7d5UoPYJTjZNR5uDaDcu5",
  "key8": "3oHjvGHU2PBg4juDmvtuJniD2BSsxrooEE6qtkgvHu11zPt5qibm2XH3pzQq9q58DzAKYMp68rqE9q1KWm5hhwfT",
  "key9": "r6xPqgUyeHrtrZuHLt4ZNEuDvTf46XdCFrd9t4GuGFph8kHk5vJBqZiBiphon1XB894fsD37sfComPq8jff3U2m",
  "key10": "2F62ShxDmsiPNHB5ZpNvNefPJNHHKs1P21B8Nz7o1EvMbj62PeNfN7FTbJvFzF95fVDQx155DwCjUSpzpuc2CBN9",
  "key11": "2tQd1NXGiA6ACdcbLGEf32dhELVKh8xpkoE3UdgxyH4qcSoUS4j1BRCpvPJQaRPo5JGmNocQmXfGtcti1T2bzRcK",
  "key12": "3Xz6JenirQAt6sRDP3QWDw5MTJC43ZgXV562Z2nNSvEmHqc3ehiT1uU6ZCcFFvSychvD3HHV2VKBDNKjqGkTpEw6",
  "key13": "3X3a85H6ysmT6U5gkxbY1g2j2KfN7m9r6JyFr9CzKe25nsLWmnCxXzAX3VbUvUTinFRF12guoAfFUN273jNUrTbG",
  "key14": "5GzkxNWxreYNN6BHf2Fh8kVvZi2AEngH1iqa3QsknLy5Ln17DC2oSFHAeJW5XBLBawfme1bKDhmgkAkc47deybok",
  "key15": "4D92AzzjTonijpGbZnLiasi8hDcDhYkpEMxBCwVVVpbhPE4z5YyEQNw1UFmHQcvZUUCfn4GgpzLohTGSTFn9jcsC",
  "key16": "3Umi1ZxcaHdrP1RQfdsz3GM2NWT6KDTY7BqgoAcdQ2i35ww4Bmo2JXM1PVT7wy6N1giojq23BeDCMiBVpkfEGL2d",
  "key17": "63DuomJH4vrNrPDEmEwJU6xDzCc7aLK9v3PqowLdtWLPr5ovsk5uKbr5dSZ4NW71ktuarxcaTKrSc54UD2mNfXPA",
  "key18": "3Eh57eyvzJJMMTNuGvohCSvbciQmAbpbkueu9qdWwTa4APuJcgkr5Vj3k1VKEu8Du1N2KZERjJKCS3Z1Mz7Kaqck",
  "key19": "cgNKj2JXbxNWEE1ghk8HSDFnqfFmRhoFg8azBQPCL7w49YQHbEcfmo2jYGosRzpyvWE8tuxqJf75hfpKgT8tFK7",
  "key20": "4aZVLe9SyRd7GbTC4qXZDQfEiVtQfiw5cCyVBBM1C6RfekvxxbwqAE2SFrHNQPFuTMQ6aFQ2sz32fVNA9HCwp9mZ",
  "key21": "2rQdiwbmVdhZ5kW8HrqtvFQApzrFLCeaP5nDQNz2NNP6EZkZghuEtNB3kDYKzxzWzkNDsW4gWS6KYGd7Mgc3XjMz",
  "key22": "5AUoA29B4by6D5Do7mpRRN4kAVWwxfaCgyK3rAmP2sYCecCecgd5eYq86wNNkR6EfrgzXDc1vrLKTENAtaC5hZJd",
  "key23": "4t15qK1azijQE5vAhUuoMUbsSfphQ3C1LGskQX78g2JvLhWpfFAMio9wi2wKPKJhLNvMv7SCtXYNnfsnR7gb1vtv",
  "key24": "4GQT2vKZJ4yQG6pvBsNGYsBJtEcD1a1PeuGvZ26PXro9C75SjhsVwS4GJHeL31JKcjjNPuQd86svinbMrT5WSEYp",
  "key25": "WQmqSw4BWtob5fswqT8ih7ZeYgvRQVoZhiTt1kXuD4AHWJeDKfnQ5SekVdz4RvzJZ79cMLNS4Vtjfc1pFXgV99S",
  "key26": "Gq362fPtZRuQ7SpQoHY5PKNJ2oRbwHzVjPWRJ2WQ9GDB7ecUN7EcffqZLNW7sbgVrzhDXijvaYacD25HWvJRBUh",
  "key27": "3M39J6H7BxZDHiidFxE6XPK1Kf4ptDkGqY2PQFdjGmorueDgKW1EuiEYs5XVcBeDJWU73nPoRbWTUxBTr9KdcrD4",
  "key28": "5LNTBpDrFMDfUsEDx95fbNczT44aqxRCS9JGUwCp4MvAAX39RBHhkcqz5fRfLYHWxRC2xPf7tu7XyeBjeNPqCnyg",
  "key29": "4gB1JVciRtJd11bufYkp1rATCQsDtNptxYk2WerN2jiJag15L4pHQpjuyHZT3ErhQwcLzhiW9zAQg4qEospeycTY",
  "key30": "59se8Dh7nYV5uGDZnCx2vN1tBDiTaRo87gnRMVQhK2VE2D5zWoYaA4Kc2GEpTwHdhhb455ucxWrKRci3C5z3up1"
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
