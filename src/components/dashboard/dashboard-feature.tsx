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
    "5ofDS5HMRpQRX5CN3FkYUWbngTmnRxJLopxWnFxCR7Lyk8nmcMq15ZCbxqm1Fi3eAaUYfifd4sEGQibCGzNhszDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w6tA7QbuLKhCxUWgxbPPSmvZdZ1LPBUnctdKQT5c2Wj2Lhq8wny8GmPQvSxhukJC8jbdp8xuNLSpVXBuWtbqz2F",
  "key1": "4ftvGXcvmGNMFD3yeig6X6ympXkbCG5C7XR2A3GQhW6FxUiB6zhVWvRisVaW6XLKyo3Sy56uzKHHg7ENjsWvYP18",
  "key2": "3gL7An6gnRcfzC9qm3VNSJqpJZVQj2pWYGetfHT3epPCCEa9mDQ3Q1Mvv3EczpqkBVRV1r6E2tBZkQZPjsrHz5yX",
  "key3": "2UKp34VJAMXZj9ba47fgL7Aewh1Lt3LvspMnFmgqRGzF9eWyVPPrM3vMwJkvcsRMaMh4wN9QV11GG9H9peGHcE9p",
  "key4": "XS6AE1Pvuc8uX4bAg72M7gou2yNUsVY2dcPVXcZLgn9FoR6bGB8gN5GvFZTWx8YfyMS4MQeYGvmtdZFxEiDw6Cf",
  "key5": "2RQT5XqrMUV8Y48bCG5g2NCENvq5HKeokicab1yJ3jktuJc8sK4LxoPdGuRWyYMQrjaDrRUQwVoVKcWERQzhrSNW",
  "key6": "2dcZNeuv7CZkjDADEKRUYARNiBp32fbkpHWq6ha6NNsX5J3XPbtD36tEpCsqgmkuhLjSTwrdJm1u8NR9qtoaDRtr",
  "key7": "5t2ZqejBFyLeQBwEzwnx8ExvZieKT37K4LouzMxb1htE9SdCQhYaJ2vzTy26TVUcAwDrp2zGETnjnHazu5w8zX6",
  "key8": "5LDyoeGUXJ7ZwibjXz44gv46MbUy9XMLjyQkBGBQNC9no6CyDaBEeieYaRfyRF622trGHGg8ST88YFjvUg9R65ia",
  "key9": "3hqqmpfMPwrjZaah2LfxSwTwrgjMM4R2GbfNjAV4HnXb2axDFx21z3eQix8D8kUT3asedSDMJ9CYb2X45YM24nMU",
  "key10": "2VhHYbKfxH43TratFHzbJciabvBndzpku3g9smVro6uGHUhH3iBsPfZYmpy8gpXqmrAUjrHCgrRr5QfArXmePSPm",
  "key11": "4eQkyqN5pbHStxBkuXKwx3QLg6mSSf5ZMJ2NJVCreV1skLzUfDVZq8rnBkCWeBSatyVw9shu54XcfTdPQrrs1YLK",
  "key12": "5h1cs2xcvJsB1FX88BXvHXoAf9PWCo1BVH73g8n1dMbtiNzdnF3RyzHCyxKNk5gjwCfXGYxesG3B34W3FDQRCPmC",
  "key13": "3GGaGZAw4pufAWqNkUGU8kKfJdP9whE6qN9kZo7nHz3x4rScChYjVYc6tmwZ2pSoWek2oL4Pu1noG1a6AJzENcMD",
  "key14": "3XgerwbMhYLb2mRywCFj8FTarFyQV3xYMRbkSzQLdCS9sYzAJFanJo7JapaaZEGStFBHJ2vtAcwm7gGnrppBifFM",
  "key15": "c7bMnGA7Faer3p5Ax5DTjo2GfWTAprw1BxKVBYnq21BxzjT5rr3y3pCnRQewAuTXjikczPfAKq1Qerunn7ByUSx",
  "key16": "4V5mAQ8AHqpjJ44XfabyHU7L74mZXvceH4sLVWzeXmd3GHdn5AU6C2jGfa8RvGWs9Jh8aqkuaF5K46tWveupUMaW",
  "key17": "3KNLAZmfCDwp4UjwWBYetA5YvBnEcMZuHS1uKSrsKgC1EYuDwUKMSyrrwU1YsiSNkjoS2TrHnBugfJvQYdpAYJvY",
  "key18": "4EWf36BbVPpykT4J6NcqraPxAcEkGpsiBmuRmjumELaU9qTVNsnrinRg7MGmdurL9RUugYVJLXteZUJyYF2SS3aZ",
  "key19": "3YzqNzMppNioRqQk4KMHmx3ndEa47tZA37Xcjpn6GppkvLvbpPmdcWtJBW2Uk3v9ghfuodNTj3AmvAmHoeV5H53s",
  "key20": "5BcaeFittPuMQWn5vBEJf3p8i2zGEZuJcwxufnmjpzTYjQKgiLptvHxPjPxPnHmdr7fCLwJPo4QNVTVo386VYoR6",
  "key21": "57o3cCxxQGuoFHd5S37HkWHU4ZWQ4yt1GhpdcBG86FKfvv7rWudzTnnhR8pr1oiG7F6dCxvJcZeyvM5QzwKPpV2Z",
  "key22": "5FsXfHnGAQPsmKS56huFEk5zC3qqsw5hbcn3XeriCw27wyimXcoFQFwHEdEPFyHjP4jjaPEnkzwsc3kAENpPhegK",
  "key23": "4M16Br9raRYZh5KEx3diDHhJ55Eqnheuk5P8RSS79rqExHoa2QiUXfPpkYmw6PrHAo2By3ioAdfCdYUDxEnqQAF7",
  "key24": "5RJ5oxHEk5gXX5nZDnPToDkNXEggibYBTXGQHa99LNH3TkbuoaZSCNZDLa1GSufLV1CySw7YB7HtN3S35tTSnRG4",
  "key25": "2JmGHg8B3UrPmyU1NEh3FhrABtxawTBnm76j7PMcvn6S4kV8ewW1N7i2ZeNwBX6fQysLWjWeCST4ygd1XXMGnKLN",
  "key26": "5TycLsRPCYUcpe99cKG6eqdAR3oXp3CDuYvSg36ZcGWjjnit21XbpvKNE4w7QHomsE3vvY4rFuaoZe4y1ZDSKyoi",
  "key27": "4uJrf2xha5coDkqvBXDaM7hyk6UxiuHfCBiSRCarcmhwigevwzHpXQ8DJp7LnPjKvrwUduyW4edGVERoGidPp54V",
  "key28": "2gdUQKuHEz8r3a3uMavGq2ZLm4MihouieNP6njFgFnBFHGEJ8MRBASD5fsgMQFhvC1sPHtpM9Ur1T9ZrekFXzPU5",
  "key29": "5zMfGR7xot1jryZ3oaRPXJH8TR7dGKAx7pxpGixxZ4KV1PHEAvHMyp9kBCCBEDqPgZKcedqhbtw45Vd4w8jDTcXJ",
  "key30": "3wxNsVKnFRYZAHMTp3R38izCZfNbvVsEBUDfznFSPZA8ujCaQTy4DWgnUwCNzJgYpmgmwGfmdNnNCVb7sf8Tku7M",
  "key31": "2tZWY7PMf3ay2R31eXFPZzNoohkymCyaBJNAUnkv5X6Lo5zxEi7eoT5aTJk8hcGKmuG7ngSbjpTUwkfNfa6QQANY",
  "key32": "2RZC4JQKSE1GanUX3Fv7VfhJyDh1vfZXmzNMLHbe47AYQsn11fTaiQhim8rhAh1fnqJBBf4vRfVpRDGgep6iXLbZ",
  "key33": "24vwTjrpizYSapUHeyecn6Mhsif93rhbmBperwmZErLLEuAJL2TqQFxpT4wSQaSF1tD2ieRakty9gg1zjeZf2NP8",
  "key34": "2rMNKMZEKxDp2SVFMqgep5cGQzPjTPWPaBSmwBe8RXDxuRuNEAPgZ1jSou2dfNbm2z1U3VF5EHWyEvpPGTHkfTVK",
  "key35": "4HLz9wFYT1EojzHN8QFjoPS5sdLnDMMfaR13367NZdsuEuNxaxQrKkXSrh9H8r37uKLPLYZhk93xGtiG6kYx12Yi",
  "key36": "5fbkXrdz7nkQztmM6GTjKZFn1hHDoRLRMFYxyFF3GjSyrLHaKggxVSctqjVKi6LJPbqZsGvbUfDKTS96GpLXMFLK",
  "key37": "43FQAc7ga4JtLrco3bNVh6MVXoUTd8McsK4PmukpxLfPRX4ViH4GRufAwukjVNRkT3y4yxJAM8xqMAgjXogT8YrR",
  "key38": "Ce3sfpuessTXkaZzToapjuivDSnw5BEDbboCMJvebNtRjEyXQtresaP5pa36PpLjqRiccmVmoQaX43tYPVMQyeB",
  "key39": "374JsyvQfocZbbjXcpiNmG1QmsdVeUFZHXxXbUsh5iwjD2u3MUbBH6wepsGg91Xctdpz2ioPHw1GDHNBBfkumJB5",
  "key40": "2yZ1ppYdwy9L6K2eoFWBEtiN7TkSbQxyaTnJt4h3eHatD3CHvkm7HrxPkZjbc46bacWhv7GZCWBskXj7oDkzfQBN",
  "key41": "46rqHZGFJtFS9rifQoua4aXYuJpeVH4muTV13Na9CCyhnZYQbDsJvFYCWZfJdMG9eWkovEXcJkCeyZhozPH6QwPq",
  "key42": "3LNRWitodXWTatQyrckdNCmrAWWp3ZxHKkwyr5JYDmz8dQVbhMYycVqqatkJAANrq3Fydu271f2ivfoL3UTHoCc3",
  "key43": "bscyRN8RFbh4txkYxUxm2z2Rd6Jtz2eqTpz95m9ft6wEetyA365siQ8hv1nUChEtGd2U8crfeYyhru8BBepycqo",
  "key44": "3m2G68T49hTSYYwPzdEUvGPCPWXSKLg7SNLUsXDbkELALT5sY84BefSBheNQtTv2ZDonB2xjXpaSkvnHTSkx3zQf",
  "key45": "3Pj8nNnxsaEGuS42SoGyCwekZjHraWUDxeZWR49AwLLzFy5Q3kKbdXK7Zah5HhytJRspBhukhP8UcPVs6wR9Y11J"
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
