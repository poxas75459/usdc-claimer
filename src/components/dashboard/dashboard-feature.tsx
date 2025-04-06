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
    "38XuyRQyeNFqPUpmvJSAduYvhG5haM1BuEPcsjP8eReXWLAbWKmRxHCxaQ322Gqk2czX5beTiXcnoptwJAwgWwX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kSitwE88BFD11eg289j1DAkmk7VCCpmVAeAH99jJjLLapQx76nGBHoSctYuapEtCXA5MWTZ4ETFibfze1xb9p2c",
  "key1": "3WR24yAzXFzHh1XeJovbdgwea5FxCDyFuHyHusC8h9zHp7ecydjRgEXmNNzjS22NTs5FumLGeyDoSnBWBSv4G4YM",
  "key2": "egKeMDq6wWynom73Bjp66X8Gg4LmnchBcUAwYLbeoA16UjspKyDar5aBv7n47zP4NpicAbLSDVQjY3roNafcyRy",
  "key3": "52DCHvsgTJti4vSe6vxaKXbFt71Hf99HwNYRxUF1rpGZgv7J1Lvj5daacsLdDgBGgEc6YPASMb7qSU963Bnk4CSc",
  "key4": "5aAMyCMbmRTM4uYwDr6mqEWVzxXZsfSV7asJfbdrWMViCguwMRyvrAo8xWJUd2RkZF6H82LCGAnYfr9ZMUW57h3h",
  "key5": "7t7qN9zWZqeo7gvcq7sprs7MqbLV3Er4PkYe7CBG7EXBkpJm4XPiSGN6TCP4JWiagxvnnDkXD84JysYgkZrcXzs",
  "key6": "swJAH7ThqexWAh3PkLx57ZYv2EEBDr4EtSeCczAYsDSNhbm42oi9osC1oNxEUUPq5k4FqSNtfKyjyK4CKJP6dCu",
  "key7": "g5tGkRX5xZGpADy4Df8VDjmC1GDvWFaKPFgSTt4yLCzNzjJoYSLqCWgdJqe8hq2VGFaXPqqruFceqZct94aTbG6",
  "key8": "3ZJvw47z2xsiriD56vsXm3X87hvifgb41s8xCy9THP5MV5krVEtCBHjT8PJTRqW1H9c5aGgRSo5XUCqsR66jwVky",
  "key9": "2GjdEtNj1ApwXNhcB1dECfCG8hUPCL3YbKGoeFCnuptBdTMguxGnLs15ctcXZsp9XHDF5KdJkfvGEDo3yx1MX4V1",
  "key10": "4usMqLmUi7zXH84BJfn2MVyp2aEiE15H9ZZUBSnsLVoBCNkUiiaM4PfC5qLY6GD897HR4jq4uDzNNQL5oA5xYt5i",
  "key11": "5zFm8MFERtotuqQHMhSWeLGrGsM9fsBeQkq1t44RWk7aUq3xizcSFjghbKndo2rKgPgsnvdgzkvhSM6Sfp65uM5M",
  "key12": "25AzcUduj5tkC3PcUoQgFe2ine11zXuwcM7brektHhMzrPGcMYbV7L7TDyNoL9DHYo1sdxBKVXbKB6CPWWUbqhh1",
  "key13": "4n8D5ZCehnmTrZ1EbHNtga6G3qG5QJyV4mQ3ykwNqTMpbZVitTv8czbyXSDfrcaDJPoNksuUrhJdbgaXwqvCasuS",
  "key14": "34DYaW94aySoD8pdS4k9z2oVSRgaNdU7A7Pac5EcDafM4wDAfpVwdqd9dMK2xipZpbCVmpTD84VFBXjDRPKoduoN",
  "key15": "4Pf4mjhaSwFqCLvXdEFHkH7UpiPXMcuvwoFQKKui39Hqmbsw83JEVTy5Qq8ArT1cEtMhDjz4hcoDfhboujoF5jJC",
  "key16": "31PuDmexBtX44HvZkF6ddXnLgkzBL6CpmMV7dGq3wyc5nU5bJ1bLso6UYzGav4ctSuH9p1ZfRAVuPoZYSzmYca8M",
  "key17": "5drt3mq4jkxrAjgwgEbwd4rxcNN5mWQBGj2pe1nHobZgGKEqfp1Hb7so3jJaJyzERhQc2Mnuu7B9wQWTwhSHaGNW",
  "key18": "3qDUqLNYuPCedAQQsSTrEPANg1jhHsKUxvKZBiBzWr9FVES42awW9ZtJDM9CESaddaGr15Bh8YzHKqcD98jRaEEW",
  "key19": "4mPfRXGffX6kStrKC2DxxQ6UmiBUQtsurko8Bt3Zco2Dp8jBWPJYCACW1PgehUqx5ELAZwE5rgw8EB7LJZDGuQsJ",
  "key20": "3Fy3QxAoGMhGsTbcENKfKzs25hziiEFDHgLfh7DojoWbfmJRoCymC5aFRNHGmiGrW6quUNusrueqzVeKiLgu3hTM",
  "key21": "4tYvbcmRUX5L7DUfauPSGLectYNEBHFy7vNn73bx9FknJQYkZSE7cQE7oQ7gjEHkKHcV7Da2tG7MrMJeJRFvrs5g",
  "key22": "5GGyKffxYfRgR6XVsN8kPvtbhZY4EvUzQwVioAJRyaC6Ka6kyZnJQi7Y9eXCtAPzfCFUthpuFPhWDmoSAJbv4wrc",
  "key23": "3sYr5L59NdJ3E4czVgUgG7uMEP7jkNNuuKW94TLevRtaXki9st8nWY3A4KyLyV2LWLTATAWj5Huv9Myyh3ggJbrX",
  "key24": "5oqPw3b5cspU5guedr4MswcTUFMiUnd6SXZKDncxeQqTVzRctgPV2HnEdr6R8zEr2EaD4wWVJ5umRWt4MgnAcYAC",
  "key25": "4T1aF5nNkRtV8AYBmpzTQPguWtvGMSmnPLFLzunPJH4H92rkL2MqUZvUkj2BtSw4wtYyeQbsRXwjjfp6cTwVbDws",
  "key26": "2VRBwBLQnrxDCCSFcyTXmkWnZK8i3B8bm7WuEERrQx5k1G4uHRPqzjHife8P6n5RzaUwWTkfGv6oJQ5FUgdMMVUz",
  "key27": "34yr4Nu9AMyGjvWqwxJeZzDt1NmDRAn4Ew6sbcW9RaDSumT6yNyKUXapBpDb3Dd1X4QpZ5wQUd4NPaYpszjRzvNL",
  "key28": "3zRbDSNuYqfaCkFtDirPbKyT6M3SKdNDdtpop9PUYdbSibne5qgrYjxmbzRaFLnh3gCpKiVHNtcy24NnQVLKdySm",
  "key29": "2NS2xivCrLyCDJQD8EGQyUjT9kfipzGwAEQ4rLNwpebvYBf5TziZdFYyZBvxGLGGAi2T8YYrEVZCeLw985SaT1cQ",
  "key30": "2rvt51FcRdvGyUmM2uDpsEnxjjnok5Ugb7kNyhjYVyr5KohG2rXmCPsQ4fAjgvi133hjVxY4gJc46d8vJKgJ5aSn",
  "key31": "3BND74twJHByNjAjY5TbfmBXBG55Mwnp4rZFb4spMcrgbsKSpVvCUSiAxqvChxNYAnpLa1TddgyiaGzn5e7Js3qu",
  "key32": "5f2wvUoXZAvknbKLzHwA1oBdsKFDvHdcX3wx92ubUpxQPq7zx7xvxfExcYTPT1e3iK5GxE3KB5kzGbH9q7GXoVQ2",
  "key33": "38jN3z9KePmCTFmRa9JbG5NTqquV6zQofG1NB15XUCoPbkvsdtGC67CiusfuQmFRj6o4ZmjQx21TzbrhBoggCJmf",
  "key34": "2FgvQ7nnYvM4xkAx7toRRCjWUUF5qhh6C2NkaWBhV7EZdWN85hwkm9moPfuwFZHgjE8eDinZ2nJ5kSwCoe37Q26b",
  "key35": "4iGdh29BoaM72fvibAGkxgsBdc1wNxyYDP24fqazyYUwzkfmoCjD1WAfuVMVgx6md78SfkhB33gcjAXoHVBoQSsa",
  "key36": "nsUJ78KTgssTRwEETF8TBM1Ai1imJZm2MHimR4MRn4jR7qdH5fUYfu4dn8LDzMp87PXkZuz5r1s1ebSRo9BtisX",
  "key37": "4wcp3TZtETpSqQU3w3Gh4d4MsWgTpdLdrDYVVFAk9z2qcLJch8xTfRKWmCFeBRVVWJ5aVaHNa8EqtmPKnVLMVUVn",
  "key38": "373ApzuChMpnsmhxycuty3FL3n64ayjeSt9axfCeCWzPVWhMQBHqH8vQYxPvwfrnxCJNBdemKUZwRN7Bypxb4Rh6",
  "key39": "4z3tm5FYaU1iVM1UnnxEa6K4brdCrDZQCMcDQLbKWD6omThxrNd92dZXi1jSa6A2PLz3BwcLZdWmEuGKPRdkzgT",
  "key40": "3irbyqDn3Yw9uZSyiCXkE2isiBXeBM8VWoEZkCVgYtSZv1tHqyeiixXwhh9H1KFG6DKm9Xhwy359RiD9jsHuSCxN",
  "key41": "2F6pLtWpfu73fzZuYFqrSzJFfebpk23XBJDRHLjddMtXGVKm6LRRn4M48ULJrLDT2Kvuw5iihxzefaukjVrgxnD2",
  "key42": "4XSFQRKfcEgPdgipdReqWC5xYPcehbBWhHfDYeTR7KDkQ1W552cemCD9DDQHqVWXPF5XzQ9KcEQ9gawmP9EvyfNh",
  "key43": "3u2tVQAGExETM6Zgi7fJj84uzbGJgMFrbX3BEHosBmYMAGLv7iguhSL1rCbaXq98uWeJyp5rGKvioQAi2AaHfn67",
  "key44": "3anC9mJ7URa3XESfogEmwMRnXSn9UhXEpwp2zjE96YoHVbhhLuwNE3wE9QDRby6oVhUSF6jedkzdhsG4CqqFZm9o",
  "key45": "4LpoPsDM59HgSywUr5ZheRSmYhjeEwct5iA4Y1KHJ6UXhsaSKo3tSC7qM46oUEQaZ55ZVSePv2LDiZDiaYNhU6YE",
  "key46": "4Ja4nuLJGE6bDjBxWM4c8ri67w1zUpyySgZe5Pm46AJbiJ4kYVA3VhxRsamgsTo1tP8f73S5PJrRaHe6TNJbZXNG",
  "key47": "4StN8T32u1XAYFPt7vnsEW9Fn6skMHXZrqYyyNtwsh68vQNPwiwoGNFKQ3TBSFZapAEKA3eoBiEFppP3Hy2xECWf",
  "key48": "5J2HKnhRdku8ZPTTEZVn67RdfNfbMQBUvu4Mjz5hmkf2z1Uj2d4rVKUkWmvDVtofJbUPXxiQG37PinGN4E3YXosr"
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
