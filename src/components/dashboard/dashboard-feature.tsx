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
    "5dncUBgqFPSiFW3zsPPHTDujbSzi1ruUmM87mzgvVvHA5AeMjwHN5H2VWKHcxY6qeFbdhGoiTzGQmdX7jszn3ZHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uFtsoyCWsaSLyrabHBeeXHyFKz2mS8y5yErDN97wVD89PDsuGPXFmQh3dxqcevTpjUirmSqnQbmV714b8HpqkdM",
  "key1": "tJGpEHFNfcVjaC8r6BSxa7f2Gomm7wBNErZSB5BjnmhXYurMZtVBxFhHCVSEsVZ4pPqVKixmdWQfZXcK9d3KupF",
  "key2": "3X2mZMi5YykndkQeh6LpQmZNhMYTtcPN4yFhqzP2HMk1BkuBAuzeDyh28kFwDQtH522HTuT72RaoqM2nku9f3R4v",
  "key3": "4wv5rhWFZfEdg3ECJdhtbeTPCk7WRBBaUeojUZxhB6aUC7FSt1LbigKXVuU28um5makZBy9pC9n94npdaPBfwart",
  "key4": "4MPVHLwZ2fjVXcyU7yqaq7gehjW2aLjcFZ3gse6NxX6nUhCKD8DgRZbhUT4QWbZq6jPkiAet8XqsXdneRMqnY1hW",
  "key5": "21fv3bG2jRhhB76BQyV3qfHCMWU3gG6mTUAGsPWfzsdMsheh9NgdQg6xwBKfJVhxyVpNhVAc3qh1njd9Qq1WvChV",
  "key6": "FvcuwmgzaBxV83hmEYBYHY25oteAm2nL9uTBisVYzQcMJtvtSo6BEPfQxkbN6svb1XTaz5ZG1PkTfSoRe6iTp1G",
  "key7": "5aYsnF5FU7kYacopxAsWjcwH4HnEYxnEHpjMfEDUBDJoKXboGXyc7wwjyoMZtXgvLtXbp3Zq3t1vaYBrFxQJH8MF",
  "key8": "5saq4W5A6u9BAW9EA3kfrcCFn6nTQyynhpn25EnFe71syXjCpqPmEv7PtuTCzun4YBQAd3emhkBGieZ5idGkuWWx",
  "key9": "2XBxgxaQ7i3R9RBF3cSpw59n4g7bDSEgG7wHHuyzwhdcPJZr18LFtQzHpBpKuAVuFan3Qki4QBWWxsdWAQjkexsx",
  "key10": "4HBmPxdPihnzXgU31knstF8jFVRZdPho9zYpEJ9GdX6xKWHegKA7LcHujH1Fd7U99R8feAhf8EoF4TQe8CUVPShe",
  "key11": "3Xzw9gNPY1Kgg5MkDYK3UyHSpcPHyUskigucU1nevwPpSU5hDVcxQ1k1NauHCr6cGyoro48TpGeyWGD7CCtCbKqy",
  "key12": "5UozVJ6nvNtmoYLCMcAbZcaFgp22dwbjGRQReLE3skx1dDP9K6FJB2B1qcFSgkNDjb8SaCfvD329Th1QcJh9UWrD",
  "key13": "sV9ekdBDLYnVKKh1v85JFf31ijr5jaUn55TyCK4zVkBqfyKkhkMmtZNWSTGEqCAAYwR7TtKUN75mMWE9ZfmA5wU",
  "key14": "y59bHssX6TkCFLgqiD1T4m7THNuoG7JgQnNf7tuY33krjZtDmX5crUMvf2S4GNDdSJiAsGexU5wAygA9cwaLqEn",
  "key15": "4pYGhM6gi8kHhDrLAzYDjJQFzbQyqf2odZYep36T8YRa6iRn2fNWYPwBXSfTtZssQTzw48EYGxM3ZbZETemk3391",
  "key16": "imHNkg429vjAyCYhW8AnL74mpu2J8aobY6tqEPW5mqp3Nz8VGKzLypVfgL3zVgxwSNgXvpnpuufHzCPaWRkpK1c",
  "key17": "3FGBmASLbtXXaqV9rtcnRvrCLEGdBzWG3zS6e5GnPgD5MCV5LesGTrpdNnkiT2gebssT4WbwB8VQ9PVFs4mt8Wmj",
  "key18": "28BqAsDkaiQdnEyM9GxfaUQdKEdbrmT7SKKSrDTbjYXpg9V4RXWLf3Md9CpRtWQAMS8FCngm3hZtW6swi3LiSM9d",
  "key19": "6tXLPWKLi6fZfHG2K8CAQPvdH8yRKo9ef5uPJv4zd4tsiJ5Dbx3AQazJ9N4Ze5riiEzUsvu1GFiio2cmQnHNomp",
  "key20": "RLcJY8tU6VGw4aWG2aLPEoT1xTCb9fFn7TJiYo8hmDP6Mc3NzsUt5rKkmzuDDa14jDGzCkYTXvMFTmpiA5NiKTr",
  "key21": "VhAY9js6iDQDLBcZosnrzXEh6rW8qHmRdWPwPndN3CqBkKuAkQRgDZdJ6yuxmejUno12v9R17NbauMrVuxJn2kh",
  "key22": "5M3wydX2gVKM7A2bG71TDCJqUQEznd9RtYUiSpdgwtaDyz9ScurW3djw3jhyDrrH1UdjgQbv5L5XYS9tu6vGdJgr",
  "key23": "xX8CQQaFkZQFDf2Pv1tGZjzqhqNRwTvDNoCdoQyatVHxtrLT873BURvSfNgnLezDqWFGPcpTo59U2wu6j5ZNZBN",
  "key24": "5puYEYiiZEQ4c7MtQj1ZyLGcQFdKedmMCt43wtjU7DiVQUNPkBHJaaSm465nkxda7rrMWmsfg2233HfnTzqzpQ68",
  "key25": "4u1xJQkqonrNTsKthYKkeoVewhwZ1vf2nV7FtnFpVxDcT5VcWznUZwAZ1y4FJknhUtycrNcT8BbxnsVUxbyrEjUe",
  "key26": "5m8kztgU8F6bpmsByxh1btzh1S6UQti5qSxBj9mNHNfXy4rwDQaJRGXLAXRYGnWBtfLV1rVUnW5fbLc2vBbroweK",
  "key27": "Szrn21g2pwUgGvztDueA18zmDAeAdDaC2ytcHAPvt3rWjwp9mVygCBaqbqTTF3KpmmDMAE2EPuuTcHv6ZXmrDX5",
  "key28": "4zn644ASF5g4HT494iiGfg3quGN53mPsui52S6xc4a9JgCs5TDsHFGM1sCMnszdeSbAvVwsvRFTDksk9ftCbfGF7",
  "key29": "4s6RC8YHomDocvR1x2DndhN2aj6uc2yQMjW5JPdaxfdF4GNtkpgMEAD8tJV5zzWFpT3VHyvncL5LBna8TkUhijoD",
  "key30": "4uHXvaURxvqNstXSu44c5XYwwyhPrkN9fesvGJGzh3B3Judy8GqJejM1UFTKFxXb5vqQE5QsFtwgzFDUko9NJFkp",
  "key31": "4mKy9ZsRWbRdwb5BbUTyJuEVTXWWVNibjtUs1Lzd3SGDY6B6pJMUzahAHmk9AAwGFcDMBon3QesyKouosVugwQH6",
  "key32": "5N7S7h3FFeW9jiaHdqcMPNxAt1fnqaqV1iNu51zPmxFj8SQeXxcrum1NEvc92bpmAqqR9AXaFFHUubMyeFGpsGb9",
  "key33": "38F8QetP8cFf8UqvnFjB5gXH1UPmUswNKV2qttdC8WCcxdnWKM8WuUXrxDfzxTaG1CY8EgcpY9Fr9Uniw1FHD7PK",
  "key34": "3fbRq1XDQ4W19oqCUZb963PMdXSo9pFKcEMSfhYV7msy2BsaGDbgpNXR5ko5qBDeYpkLMc4FfJXqhC41sW9QHcrs",
  "key35": "5yaijwqFF4XRz3NYxPuBW16gxvk5f5JSnfYw2Rxbr2j9v6UbCFbREWBR92bP4RdZn7dks9tAyGepA3fzEJnSYp2t",
  "key36": "3hT4ELijfPyeuuVcU6nQWBVxC19mFCxGBZmjdDCgbbTcYHfahADLix8GgfYbbUy414VP8Zr5YopTUk56cJdTCXvg",
  "key37": "52G323k2PGvWAU9fBEhPQkdT7fB3oCdBYjMb9JmDCLfXcJ5V1exNViFCJgk6DYfhSCPicWqmdegVqn3AnfGqxz2o",
  "key38": "584MRaAambZFzYgNT1yMMYoAWs1uCuNZM4SeqzpSA9UdzezfgDsktm3eceJHQb6XnzfbtQvmgm9QQBEVcj9GXFH5",
  "key39": "2LdDmAF5zkVV3UnSVaUtBgs2SqhrMtUNNWANUaZYCFUbzfMPVAGuxYf171eiAhS2cUKmH4LCegsrjU47e4a3NnsJ",
  "key40": "4BcQA5TWUiF9EbfygFBfrsZLY9f5y3jKF3m6D8p4HpPqrH5zrB2hYmLddQZxPa5KHdyzYqDEV45rEYS3f1dxwCup"
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
