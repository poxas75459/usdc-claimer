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
    "5nUZhZKTcyRv3zeUoWpn8MM5udBz5wMVg5ivqhiJ7H3oWSeyEZySjYFmTGcSXvUtL2bVVgxNW5LvPGc2yLM38wbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RiG4McJPGrJHecVv3ZULSoumudHLtj5EFRsM7narePiPNtHHceqbbb5WaTghZYNDvBgUwaSZCGWb72MDc3jHz5H",
  "key1": "64W3Ep5sVhCb7F1YuM8ZeA8TXTiaAkRv9hipwEkL4vrrP5pD56dbSEJrcriHpHKptkQEyDoUjtNKeuXVe9C8zPHM",
  "key2": "5bt72VurmrNdsvMn7R34DGHJj6EmWk2sm7RmhL5hZk6TBfV1s4DD4n4pnrbhaJx7UEKwbBTeXPZjLkZUQN4AcSmQ",
  "key3": "4ts1GZX1HPHMZgssu9Tjs9kVWQzSfJzqGJ5q7wzZqd7fbmqriZ1DDfH8GYJAu4PBuRiiKXK7npfcrmGQMSpty6PQ",
  "key4": "4e1429DW8y49fvnCn2j8aUjPdHXQ6NuCZ3W77ZLwgdHw1DaEBMhB8pmEVcFrh9SoCShm79pZkNZf54ncM4pt7NvU",
  "key5": "ojqQex7q2xPESqvkCVavZXta3iM7oanZsPajugghxfAvb3fVpEwv67kRS7Gtsuz4AxgXDLJNEZn1ziPCk5kbimL",
  "key6": "5LybC9Ugeo5uVKzUAhK94p2N4ZwVEQhEzREAJC92kNoL63RNBc7C85RKd2SAa9J7GAAyVXkbYMK61FMxrPnAq4bQ",
  "key7": "3JYQEZCtLgqakpD1qsbZcAKnmX954eovNLVpBu89BBbtXKXkZGx9jSWtuvA8gCeoLq66jmrUh1YuS5fA8vdmTnQK",
  "key8": "3YGsHhamC5cZNvWzJ8zsGxMnkKPY56J2Mw4Huxsi4QfMkN6y567da9DqoRHdQuVxY8sBakCgPPvXjWfzVGP1hpub",
  "key9": "5xsFpYdXzmAk2wCBDuoqp4uahQjwDKwJdcuVDPkF1WnKaikBmExxJjXVZcksJv48URGejSm9Bib58mxfCEA9k7GH",
  "key10": "5jWQyc8SYMYPwFyGTMgVGDgCtBcVsngHsB7umEPVBxXRRqqKChbSQFwTomyG6ad8L4GbXtNBenWywYsffeutA54g",
  "key11": "eq42XL5ThbZkQdQxVGYsKDotSRHnKjeJGPrXJH8icnd4wCo2Wj35FfeEHtd8667oRGftrQMci2cmjryeDSSu818",
  "key12": "5e7Riyx8WNc3ewMpgMhvxWmTyySjv9mGouJ4WFySSRmQ4HnYvJ71qJcFjZeLJEHURE4XDKi3TzuDvsyTRpSXhg1u",
  "key13": "5D7eaTWYJvmWXcFmsF8wnzWLqQs8koA3W91G1Y3SMECZcNbu1ZXUR3bazQ17AUcVVzu5KtgYQxv4cewSaDNGwEz9",
  "key14": "4uKAbArKqFz35ZoDmi8sz3AUKjDtgVchC75zcXsVFQutPnYeVtXf4TkQkMqagufP3WKSPwZdbkhaspk76VwPGaZb",
  "key15": "2iZFHaYLYb5ZCHkzdrzmeNcpxNhsNGu89JEAhTWKY6vgfVh8RKV4ZgZkpYitAihhjL2NjpxPi2UrFp8vFX1gX4r9",
  "key16": "2PWn6JgTSHkLoBFaCCLegjgFV8M7z6Tzq7S6gX1JTaS3Ag9NocrDCquod2fJmj7gofrrFxaX3PuMjRmShojaexvS",
  "key17": "5AW5aw1PsT5ScCiorTj9RaYU7vwSn544PXAafoe4SkVNyuUtijU6hTca7aAxX53vo8jbmjARQhRVSr41vJXYFdz8",
  "key18": "3MEfKWcFqqQsJt5hj2GPz4SLpjJRMWowa5feZv8RmVX4HDExkFAkoUSdSXjho2AjFnXg6Jzx4q4hF2yiPnZeTd9p",
  "key19": "3VCgM8tm1VMnUxYbQkoGRqzfJuqoSHS6sjq1bcMZcLNBDoN94dKwUayaQfWN9SbdKsRk9XEegPRofDMsbDBm1QvU",
  "key20": "4D5sRH7saaCkWehkC7F7reHgM551AJsEhXwD7RqjGg9FFRxmnyoBp2ibgbeHZuD9TMcsvuPFwkMkqp32gsk1pAja",
  "key21": "29aBdqs3T4gLXZg4SwwVnYgAiuuz3wFS7JdQCtPrkV3UXipDvMeSzbkLE7GVjRoSmQZ1zxMt7bY26UMVgPaybuh8",
  "key22": "28GvkB467KgaseEtzSHjed5XWYrgxzxaAegrrFdbW8YCtRfA7SRvyvALQfu6jK3PeZmBY8FcuNsc1dih9eYegdBE",
  "key23": "2QfqwShsNGDexfcXypSWtE3jthtHYRE56BL8NqPLyKZco7osMxi6mcJLcpCRVSuJ8pUN6LWRCCMy5iZRKsTiFT2Z",
  "key24": "22a6H6XfUaSQByWt3DAtnUiw8pKuinbg33Dk3Sjiu56KkzPJ5fxNV7J4zvW8RMPouE9utasPze2XSiF8PV5cVfoi",
  "key25": "4eRaTe91cbhjH5Cd2Z1LJy7iJCJHdM7fyAtivXJF2R2yfZgHMzLkmaZoEekx7BijCXNoruaYmetqs3Zqe1Dx45rQ",
  "key26": "5Ew6GpdbE2jSeb4GCeW4gUZgyL7LorkSAWhbGSgxkkfFZKXf4t4yjDv3UkeEnm7k15TMY42NvfF27ogkzNVLABwJ",
  "key27": "5z7MzeZgwfhn8c2QGkwBPmTErUAgtxb3siz3X6Fye5voGDN7Vxbs2jBaCmuNwCUTNP72GacCRsnbNbHbQG2nwFXe",
  "key28": "2yygsRgMW2SpbNhY2EjjmCU9iVrbM8yfBUkQaGgWqnNBtWKqijBKq2CcSARHxSCuf42i3TWuCM5odRxFrWoYMSG5",
  "key29": "4RQidunqi8kSPrkhNGL69cAFKZZ7jtmgjMkwUYqSWgp6zodQBQL4QXqGcLJhQik2WMMvW5TwDKhJ8uTe4Xnrc6HM",
  "key30": "zXYUL6fwX9W2T8ekKHDiiczRScz9eTyrNbs4s9fSYmj46GXuChtdVVKPHnoqoaDuiNS5MPpQVrcL7SWVj91HSEq",
  "key31": "5mTqLCR3begpdPBm4MvGksbgMtbRJZdGiT7Dwv2mywAe6JP4DiyVwfZ1iZxswABhd9WAtPwgi1QBR5HqDVMzLPyA",
  "key32": "4hjNnxpS2XDnupV8Hj6BTeNEKQGN2qHrMM4SQJWNUu12Zq16uqLbvokRYNgXtT5xQTMQsBA8UGM79Hh1W5WcQrHC",
  "key33": "5P4BmmaPC8RfzMiRndcb2J51cYj7CPsVMp3VRNV98jAZTLiwbH44zPNQxHYmVBzGkjM9nY86CKYXJkzZeyn5F9Ls",
  "key34": "2bG2ybpWDEAKC65V7bFs3zXryPUaFP1DiFhKaf93dPqnWx2hdbv6n36E6w3S3MxbR2Q3fcgjJ7ZgzSusnsaGwSAv",
  "key35": "5Mysg8GMeMFfRj2NDUQpGNqvCk9ajbv1HavTav17hbhWsRRVBGKvedE9gPhiGE3zgSbneqQVSgQQTwzRjMzeTbCZ",
  "key36": "3YnkTybw5BWxMVPDt9VEJ2KQurKEQ88AAjrdsBzauKQRPPZRLhdd8rekNuLXSoF6Go8KhLEEtknKE8Z6S3v6JqGK",
  "key37": "5JKFsUQo2Vr4JDgxySdfbFoDoFhKS59FKJiU9AynouUyQibgNqc1uaUrLmxyiAK9vF2hPAbdTuax3xha9LhERm4D",
  "key38": "24WKKZxNZE7PNLqMV3xZRaL2iwi6s6JPAEDDzLYqnbWFDAq56YFPJdFE9ZgWWVtrrUENTQXSU7XbkZTSEazSTFwg",
  "key39": "d9qCATYuQhQdR64YY7Mdzyq5dYhBWxwRroiSZDq2w2xA4ruGWZ1xyth6UAbuTFuww3Hiv3AhcaXXNCnzbxKnM38",
  "key40": "52ueZjy4Jjzang5GnpBKEe1CrJm4o6wY451XH1ivRKzGcXU22p1g8ZjzdvZUskNTUvuJGz3poDb3EJC3VAiWi43M",
  "key41": "59H9X5TnCMvd74qyVeffhJ4KXa2FeiTFwwami4LpGR1mYUeKJ2th9eKqnLDMWx3BJyCFUa2ZWLkMMvRrBMzigHoi",
  "key42": "3Y5fNPraoBuMAacRfzfuz9HMk4pTZJTF8eqJYjA5YVqmM15AYg6QVGQaT13DrBuXvvvE5i1Zhh2Do2MaA9zeN222"
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
