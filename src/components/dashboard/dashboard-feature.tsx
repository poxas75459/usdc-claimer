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
    "4UQit2W5XdNSGp8mdrRUbYXqwjrYScRfnuBpuSjo34Svy93rFKcVN1UfhvNXcuh9GgrdLwsCNRdiSbHyXqzMhprh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53uEki3KhYfAECsqusMt9CJKgBte3yeQDrmbohUWAriwV996ZjDNspuGHt1WPgkXomvP2yTo3d6pT65HjReTeMrq",
  "key1": "22L4aXzV6g7rHUrbfkudGAw6teaTKFevMmaQtfeN27kNxF4usHJMUND82M7JY2xHZNcnfyigWb8YahbvgAoJphar",
  "key2": "61SzAQgPkRs8o3K2i59fCp2pXDk2TwVddKNkGWBoeeMrUrGxTQqCWyxC3Xy15ePgUfWQFKVq5sUDxiw6ZdYP8zcE",
  "key3": "aLPtCYwidPHPRvWX2EFtGhqYmBY9rPF82GvhPE3SUVU2xFPNFW15r5fByMX2rNQR4kV1SgiHgBhpHa7eALUsUPB",
  "key4": "2YEvEU8hU6ucZ9KSaEbZ3zsXMfP81CNjokgWU6MRtuf6jSU7Kktc92GXjzmFAhog6irzmvZKwCBxuX4LoHLqBfFw",
  "key5": "3RD34Ya7N3Dd4Zyvdm17W4LubF9BwXcCHVE62RsxNeMDqJ78wsZbFRYCs863Tcx1AYgUGXh3fddcF364vX1Z8wEs",
  "key6": "gctWvyREt76Exu3T9dDgHzufUmLapzFJXw5yJ8joNsS3cqTb4ua27nJ537Zr2v9PUHF3oWoHBme1mcLouwXp7CD",
  "key7": "3FefkZzMG3kg15n8mXj5nqFKv1Ub3XAy8JssbK619gV7Hheufhq7sdfYMnUqxBkJm16pLQ6fFKgW2XUUTmGpBrbb",
  "key8": "5vSwSJQ5cYqbaNDm4YD4MC7ZTJWMrpn3uNCc12tCj8riCr6C94wrRAGA25rpf7BU4A6twKMcEWovrs7aiJ8JQPsG",
  "key9": "3KFddMp6r2LDdB7Tc3DpV3i9P8NJx5wCWq46ccYYJftpnDC4JvcDiGE9tSg3LcP2xmbeDid1UVUxa6CeE3MtQivC",
  "key10": "3JQhNmhphxeizPVNAeL6rCuRtWRfJDrDXtnaG2Sy6tAmqcvBHvUkPvHMnBQqtLpRacCLmyojrbXgoRQnRz1Y9ENp",
  "key11": "3LeSrK7rghbgRLMg6Cwd1HLxwzcAkbgSe7UQWWKuLcbemqGoJNYDuoN4hHxAeABpjGZ2BrmF7jPuppumy5yNs8oZ",
  "key12": "3oCTEB1SArRiaD3sAerR5FMxM3PzeBp38HPhdS2iUiRA7sp6d6Uu3NTVJHo24MUKVTqzURtiWrxH2ofJPGHnE2PE",
  "key13": "48e2moDBVjBgVZnEDbpmtq33QVpPZfDDxmewWJ7QAar4KtH52MgXLYZZoCk4dBniL2SSEDWRVATNXg37XjL3s77n",
  "key14": "5BWn2RiLaHEAFcjED9ckG9xVNX8JQjatddyo6KM2wVFGynn5tomFLnBbphQfpLS6m71MB1tRtJs5Wsj9fNHs2Ueo",
  "key15": "2mJZE12bTYuceQP3c2ZNiqNdzPhDptqkKVPZ52Hr3CaHDVQ2Qg6CVsxAXqeE9A9bnmwH8NJNQTgx1TCyw7yKDRcx",
  "key16": "5FgJ5xiGSjof5xojgivDCvzQo11Ywy4G8Phmt78o5rsAFLouZuoiHKNa1h5Ecub6yzWsUASZeXYUe6b499JCycU8",
  "key17": "zocxUTmGcDoB99gAhMEhkGRSnXd7yKe2Lq1tubumiCqDtcUsXr6scYWQq84G5GMv28hZyAagJj5n54LcEw7QWUi",
  "key18": "rK3z6T9DLBMyFpGXoJUPqFcGQyw4jKcPwssaiDWh1VkPxY4WFT6pKH21kAumpK5ttgLJULJxw2DeHFdarsD6Vwg",
  "key19": "3x98TbNohxddiQx3wtgm6NUjCqmJwkMerQdpQ2YiahCdcjXe6bdW5zaDu2LqcWQ7Y1A8jdE8bTXa3pHEjepwxCFw",
  "key20": "S5VniXnoo9fuf6FvzB6PmfaEznKq8kPRRe6bLwyeu1kihFYvMkLWjgw3pae71aQ5FY1GrjZNnJQD22BiRoiCyMD",
  "key21": "5H5og2Hr9JwyVi6ia5xYoKLJSRqk8n5xFGnXd2349rhHHtJPhzYgo1omJcRoHTYwLp4YFAtyiXKAvkdwjirBAB1N",
  "key22": "5AHhGMrbhPG58dPeyMH8xZti1MLbezu23xPMDJNaJfoa17CWZBQGrTc3AHdp4gKQCrobnRyvEGkvntuDDHic6BnR",
  "key23": "4FcWUr6CZBoujXHngPLocZPZKQVzkkDx4RQx5C5W3inanxCi416DK1xmPYzzXkJkkeXyYGwVTmGh77EFQ6NPCyk",
  "key24": "fgsLfkhAQScK4LtTM8AAoVQSFZFPnFBPzdD68yUvWptoRkwQ2JzkG3csWYjtTzHyHRrSNPFD2Xa3ioqgKexmtNb",
  "key25": "4NDki1PVXryi649Mt9uzDZwHG8K2EzkQF6riNzWK6tvGzouMBUhFQACbJNJeAgitTPMm2NGL9kDzoQ892wnyLdN3",
  "key26": "38AtZkfLAbyZVHy63NWWvgarNrAU7EYQSHDnM4PAFpjHm5avfHeshk2jdxWCbbVT88PWPmSccKja2pgXk4ZL7Xps",
  "key27": "2pCeTkRMW8yEvsGrTy6Pykrn9wmjfZX459MZ8oPgShMut8rAPoKVwJR8ePKd64TW7fEoRaTcjue9wvaQS4QStQG6",
  "key28": "3g1eMi5EJkBuweSy8bTn6eGMizdVGQN1bSEtM7Ap5tzJ2rK9oBzZuUmW1CRMA8X11xiEgfbeudY4d4stL8114C4W",
  "key29": "2CLkR5XRUeqrfr8EMwcieQfEd6VKzmsoHU7LDTS6jKTHrMCygwcvjDgUmBGxXKdKda7smUjK8tBF1U5FhEytC79p",
  "key30": "2tQF45exD8qRh6zZF8vLpoaSdSuiAeEX94xSC2oXuY7nLYCch6UMenwZkRRYbUhN6ew8gUUDgRcYNwVzix4WfV9W",
  "key31": "69nGXd841srLYZABdCDVpird1Xj2a5fV5mg2YQNecZHLraW1f14W8G59CiUH68hQrPeEoD1SUHKDdWBuhtNew8V",
  "key32": "XB2hnLHamtXWTQtkzNoaBURAK76oh4Q3aXdju6MmWdFPjWghaX7gLLLJHn56J2j7KRHdBMUUNoVNzhrCdaUrH5z",
  "key33": "59RZ2qzazLbdCmqFd5uXwVc1snswV5Ti983gTpJR1zUhvCZbusT2obssU2whvzW1hVwT58ZQSU2iZhQvNsg4Kbvu",
  "key34": "3tuTEatNUYkQLpH52ZpXPQrCQx77QoA6S51EUtoZziyCaJLwHNG1i6VyY5NkcTD28VUHJhethmco23uj5H3xWCfL",
  "key35": "5WUTHJ8D3szpm6JfioP1gvVCxs9DNTKtuZzJeihqiZpeewVsYPMQffBF9SPi2iRpfXSM8NbVuJ34kZLpCR6168cn",
  "key36": "5QvJwgvxbtWLC3Xdpo8T1SmKEs7YrecG9LMVuyizuEzkKmHmYZ5rLsXbCtHcGXadowQLjLJQfyQLWP45mrxwt4d",
  "key37": "Vr6SKRUgK6ZY5hmfb5n11aQsGyi4satx7J25EhqGS6DAWHSUSzPk8TjasjbR9LWED7pharpi8gRp6DyRCeFPyX2",
  "key38": "3qmGpzNe1CkidrRKuCNL6b4wkA7uRwpWVW3fGx3spjsq7k3NrUCiiuiixgo2LaGb5GrwR6VA5KKiJjaTmCi4dB5o",
  "key39": "jaQt7xTcuBUKedV71Wuso6gC7fugEqjMuXKLt25igM7uqt5Y46Fd8jE63zeJ6sQyaqq5zm3SoQEV3HaVMzUyPHF",
  "key40": "5f4cWoj21DrtLoCGv8AeLUdDQA7Ls8ov81mNQT1L5qo5cjKnMZH1YwJJueMNsX9oSDXJPKN6tgR3HBX6d6f8mGXM"
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
