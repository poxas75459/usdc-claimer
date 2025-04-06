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
    "YRqsywpVJoSmmZPqpXFc4LaiDRThxtSLYwsMWvZnewACQGRVSUMMWdsDZ5pv4x9FfCzGBbCSLyzVj5Ez3M14LDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lz1aDzea1Uei8s6yGJdMHtM6nkzPRZgojnGJDHRLcBrLsskpKTrcJtvUYUkafvEDtskThBhb4WRgx6pwCDuRePb",
  "key1": "4VNi8mh1xdgG6SNfdwnwLEDvi654ewFVEXpg9tqcfdfrHGyF7ueYEzp63dQ3apSR9uSKAAHD3BywGCeGoaVtHMWa",
  "key2": "m85xYcSUQbzUvNc52MAH8221P78HiRDmQGZeZzW44b4qCYRGNFE7MxiUh4G172DwuWBS6rdrCWwBi1M48PN9u6m",
  "key3": "3PGBphMe2EPnxB2ks39Y7X47CvFdUn9weho2Hq8km65k247PWYfXYLiepMFVhrioTjZsbV66Bo32GtsTXT2o4YyE",
  "key4": "41M2Jc525u15hSJoFZ9u3YWVGnBxRzY4rmFQvgEu9LztaVcrXZQNgyUUdnHZ144UyvZHpn9Zaa5cqHe7XTvK5zNA",
  "key5": "4TF6d9g2NiX4fjzSP3sdcBSHbQxtVBGEMk7Pgz1MyG5MuQKrmiEPtcmVxTi5J3DTXKiH8gbQiFewZuQDPDvu5izm",
  "key6": "34ePt4TRgkcQsiJ6tVkdpEZ1p7eGHSEadYLFjCZTZhFANzddvmJYdmUDbWRdyUBRCAuhnGSMeEoBmapvqYYW4cLd",
  "key7": "3gmfZawYnuozoi5KNQzC5SBkaQsQTbBndfgx9d6jfH5sViZgg23UiH91bQ4ikcnTMkF165NTn3M5wD1c2Ctwu3rP",
  "key8": "4rFZiPtw24yHJbv61hZ4LJ8qX9ugwfzejfcdw4RgHU5R14q9YHgRxEQafGXAr4ZHtQd2URS994DPHdaDBpTAoQC1",
  "key9": "3MMBcBJ4K61vhtZTdruq53c1SWrUscNh9DM53LZ5bGHu45e15xv59kB7iw5E7qWY6GFQpjSGh2b6ai5CXjNj1G7S",
  "key10": "3dGun9r7mH8cw4mpyBes9m7bEvppQHXHKtEf93BE7FTngiWSikYAu7cM7ZPXm1GTd2V5wXoAiqf1eoHpwRwZxUfC",
  "key11": "5abwHiJdb5JbektnD1xkEZZYTRXsF6QdMaXdoLeBcqdK3j8sEEg2p3P7pewJJvwyufzKTRStp1MAt22R6ZbYyHis",
  "key12": "4SkvKKs7BfNuYZ2L1zP4fYyUkiK8VFreCHrwEoPi9YPFJU4AfNuYvZ3pJJ8Cb9KTKJhYPMEY1XUjms1Cvd1PBnH3",
  "key13": "2zz3j1y8tsQossbUjQ89X4mpCUHYM2dZYXWxAe8dAThnzD9yDnPwgVytie89j8oVwYFqzRd5yz8xfwzhVC8T6Lj7",
  "key14": "2G2kUvaBxnMginp1VcernZ9TxWYD3pdg6Rc95CVfGL4p6BL2dErZ2MdvU6UTqvZnufMZeLgFPeDK46w6YckExxXv",
  "key15": "gvpiXN7CV6uuwePLyudyiAbpQrw3uGPJQrorVhV68yMyW8nyRVCxdXLCEKPVV1pdtuvw5S1YMqJ1Z3AUtFhTakZ",
  "key16": "2BQKgPrM8NzAw4wpwZ7n3td2pRouJxuQipyBbs17oaQv6Ne9HMfjZstwhzggUVpuwToBmRCA8wDjussU4jVUtn6t",
  "key17": "3AoSjS9n9urUvRZQXdLWaMEQyPXn3EDrciCpJAyy1VbwX82xozs4xKswKySzkXHDKvtiyEBVBzUcPYiT1kiKURLN",
  "key18": "47Vbf2NVCYjYWYqS1wGNLpueefducxH4nxMEroP3pwUjmntVEhJEdV16rFTWPp6QfdvQs1nkqJ2oFeGpTh7G1MgS",
  "key19": "5ykJTp2dBLFC8xgtSu6PhnFaq9poPkBQttKX3oxH1386g8yYcQS5dUgv9a5p2wmQFWqczccfKQ9tiTBfBcu6bbLQ",
  "key20": "c871iPeq4sMFjXn7c1Y4frgFVWuR8WRxvkTAgBVDcJN5R9pzLGbgVUe3mFDwcUHWhtkudkAkmsEUSz586Pt4uwS",
  "key21": "4RnRpnXXdNjucEZ4TnVyPz42AXdvz21ZkigJpEtTsgNEjy5gc4aKRS2bRiPE1NmH2DG33yTMEzVCuqcAV3KJMrvD",
  "key22": "4uBBDy64vzF5E8mKAcJK2uhX7a6Dqosvr7wEsyHxB4B3zF2y4YVD4GoaYQkLFo58nsJA1QesbRkN6gW3e7kp5dzn",
  "key23": "2sCF2SJN5biCTVYZrZL7qS9FoYUsuC2rWVUMU8FwvwTnx9GzKJNFKayFh6a7qKn44iDx8oMbwYRiPfQA3vq6n6RH",
  "key24": "4BAckd9Bz4RmAzn8d6pMdgj3EJno5dRdtZS3RJACeHotJiwTGALfE24Cc3sGbW2DaNTajw2SGgi3BRiNxabWngh3",
  "key25": "2e3JFSh3hywRUt8cVgMUJPXVcMRgpbd4CCX9oBjabGkmtkKwZftjZzuDEkyWGzwV5Y1EGZTKwZ2v5LA7rpoFEMBg",
  "key26": "i8Y9p7HGVxR3koc3fK1Qrnp3GWicYX4chB4cbQUw79r4AsbBwSswmFYwAqSzUCmhVsYVDNELjLxzpyvhBV9QrCF",
  "key27": "4DPjq8JDZ3fXeR7QTyq5tgQanx4pGq1QfR5vS8rasqH4AEuL8jNsWidaC57BXZk8RKsm8T87iSqaY7zSvdTkaKkM",
  "key28": "FXGoe8n5kYrHaAWRArSQnKoaMmwbbf1XxHVViPb91VTMWBtcv8WEV5U2RCvoHJdKE8FXUQevEojk4kQjbGZkHnC",
  "key29": "3gHyzhT5sX3zCAJtVDtb6jaARYCCjzXM3ihJKwrc8tXcQrEbiRcqMXrwGXEuyVYfqTHLfpGoasjs36M7AwTPCRdN",
  "key30": "3nqtcQYZvAtAjWFvZQAzef4KNy7fiCY1js7GKTYX3gDt2mDbCL79k3qrSsWjj21GqdzBSU6RMGZ7aDfXhej7nYuY",
  "key31": "4PJMDtKJwVmYuWfeBpaNU4bhp1MhEBUaJgiszEYi94hrG3WEy6p99szhBkZFtnoR9JVysCF5CNg4N12HSie4tPMg",
  "key32": "55mN6P8uC8DKqvRyMG4ukYKtFZTjnJ3Teazv845z1umJKucm1QKbpp9YqYBZokyvqhK1ajs7TTLuyn3RjAEaRUcL",
  "key33": "2rFQywtVkpb6eEJTsR7PtpnE8o5Z2R7SEbqLYouYhm8oM4B9Fkz6idqWhP8mvwTCRidu1YwVDRB4HUJtAHt2DL8Q",
  "key34": "3rZaCp2ooyXseuuMca2VDK9Pu9t7e3mGSSqyX3LzBBxL9kD65rDVavfYoZwqtf6FT88eaKAtHjPuMCbM7VVNQQGL",
  "key35": "F9fXr3a37WNEKucKygqNmZ4Rwdvv2Z2uD9YNS78Lpt5aVFvN9riVmweaNaeyc4EdmscAkwTdYRVn5UW8H2itcyp",
  "key36": "3xmxJdUVgDzvW4oTyJ4FRTrEqS32gvqYqjNhLkeNwrJmDTagFfmoLLYA3Lr4tBwmnu4LFs4ctztbLdq4ZgWiXxZ",
  "key37": "31iMthrMNhiixFr4ZyPDqHmEXM4vMaVtDeoXj3AcB4T6GDeFpKTdfBibnSnmbB2mDjDHqbdhSWYcGJ7neG5nAmbn",
  "key38": "D3HfDgnZRjsnrZSsAGnxd7HJ3DY6waXw64aN4Mt75E1qwzChq4n3ySzqRRzn5GxMkk42wuPTPMtB5BqhzWDiHtE",
  "key39": "F2kNrXD73xowEBP18d6qmmRKedWRToKbSGRFrc2rvQGaxFgpJ4cGAETqYHk71D98bm6FmqSeVB8aM4nuppWQPSK",
  "key40": "SxRP5sTvnRjWMHuVBjk8XoojKPEr84dh6K4zSiS32SCo6zEbPDqzNR59X8qVCJnT85bAy6FnNmNZZ1RiSXkRNv9",
  "key41": "5ibqVvxcMC9C9cQn1gUh5x8MaM7tZxa7HK2FUqYA1HzNk7X9T4Sd8RyPGxQEYLeV8zmKwnVB1yU1u92UvDrAbJsW",
  "key42": "5faJbowYJ7j2zW9hBrhcWnrN3imkaETMqkRnJqfbmef2BwdbLNejd1cmxjszB8XwMw2ySwPxjZnbNHLC6Xe6DY1r",
  "key43": "3q691kurAw8aAxGxWQVdEUX51ibLskn5gf1SSSTZV5RjgSjS6rdNL4Hfkf3gycRjyABf41nGhVTNJ4DS3Na1i4EZ",
  "key44": "4iEFUtnXpq9SeEFAnoKsatgBXnq9ipjeGkpNmYiypSGYEYdZaeoHxVZPqHax2DzsEpsHC1nWXcCCf9EAAFq6wjXL"
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
