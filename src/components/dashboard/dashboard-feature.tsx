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
    "4mySfcRdrmqDRtr9WEzJwxjT54eeGtFcnNgJeuphKEz97A62SpQ3UBSBBDoLVYUnaZ3xzpfWdxqFs1SL3Cw6tyPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T1gNkATrHme6oRmmiaZEYYk2yiBvjpfVAAaM5bWwH5LL4vJgARQCB6Ln89AeR1TaEFMPDCeEgsLaE6BveWZKWiN",
  "key1": "25ok9DEPNsRQRGqsSYPCe1xYzZ1MbBRVWN47kZNWZqCgEXCFidj7o55euPP8jgYwvrXS7ysh9HjiqiFLGVJdAQbP",
  "key2": "uxsQM3mCHBDLihmUd6AG7dsUYyB7L495fiTEuLcDfXrx9kYYRXoCk7oRiC6bd26mAdDFHmWekcbAKvzewtAPA4o",
  "key3": "5Swsvs27M7RpNWwmdRVTF2k7TyxZ38WmAgvd116EGh1YbwFSRidXWmg8QJt6XZ8ugx6SFtWZF2vsB7L1McptEZ9H",
  "key4": "4ZiArWJKDvdmRTXzoRef1bp6kt5E8CqEMtJ37nn8vtqitmuX1UzbDbw4ZNSzAbvQtRMkBvJVA2ucmRfdNQQMbKCq",
  "key5": "481TarmxmvBn8E7fkaL6NGEyNuWyKhWDS1PaYokWBKAXffr71GRTnYLHAFRCWCmTZ8QGDczaCBjddy6itoCn1mT5",
  "key6": "RtHj9yyvUX5kbM2JRfVCtJcJK8DfW8NBTJ97eWJkfi5Ek3DcwhzVNiNBVUcc7P6a17yA78A8LcdS7gopDThRsBS",
  "key7": "38zCG8Sr5CxbmN7RMmtTvHw39DQS4EiXFcaURzSmR28PkUDQzYap7eGDLSJ7wHpDa9cuJs4cPgEE4f3vmd49WiNg",
  "key8": "4iuBE7rerruRMnZJgTwM7gkZHx8aMVAvhfZr9VvdfCBa5UzpcuwrxQ9HAnuoCearyhEohHN3951jnj3tuwmKJWK9",
  "key9": "5f1stNijYcYrnJs3nSBtTpyjiug6BCMavD3GvwfAC4pMNs3Gtqm9AY2raBdXfr2XMKhe6h43hy4rT9VHsfPd7pVH",
  "key10": "DDmG3kw543ue67EZTKWPHs5iVDEUK2vPBrvsPxaJwc23JKMEHqzY3hjfYoXTtBRHtvcJcyLGLrddhRa918mCita",
  "key11": "5B6cFRAf25dqFELAUTEtHeATixxcRMeK41PYECzPqjrHgRfJ6LoDu6j1GBB9X44cLAbsM6xaj2joZNcA3ZTK8X4Q",
  "key12": "58JrQeSHcMB5b6XyuB3FmrzYU5TtS1V62V9jfT27WtbWEd5NfAW4g1u1Vi5wmeRC1wKwggaQCRTEDP7y1bcpscJT",
  "key13": "3ovH4DJ1jg3MmCNhHaVWjfmtxMwb5wMXAMgnL9NPkWgLdh1bB5eh6aZbfHWVuuwjLqfPYWTRyj1ihZJtzF649wce",
  "key14": "PmhEAmdPz3X6rp9YSFTqQhHata9WAxPwMek8MztMnX5YsqGDi9bwCqPSzgx1pBBZQR1qoRRgh9w8gb1JQSdYNLc",
  "key15": "4ECiihaQNJ1S94jFYG14C9aQRD7GwU8c7cqDcYtxeLdzujwp47cAyAY55NtxpwMjWh3ruZRrvq1216vXw9JcmfEn",
  "key16": "4bPimrDpgGqXRXGFhHNye3gziqjypuT2AUdFST4rNha8agcTqhkDyEbUN2HeLyZuzTYuCgvLaWwxjTEnsyVbZJuV",
  "key17": "8uwT5wicJ73uEQaLKntUcMDiwt5nnHkjiF9kNT6g7yauRazn9SyJZVSMotJhR54Kr5jaDJuXkrXNtKcnRdRs9n1",
  "key18": "2VDrzgvD74ff7eTXaY2RMTWnN1NYGtJ2J6D1GVXNm2eddiUe9XkJmNoyTLMu8LEKJfLhcMjUU7Nayg3VcuHqDmvP",
  "key19": "3uSHPNosGcpNcHns9XPYpvVTHezgLGjbWMEcdjJFgHdxefCUWg73yevJP6SREdvNJQYTVeDhFskgyxq59sYUzDHh",
  "key20": "2ocWkzfuNnbUmpKFJZdCYNff9nVGM7abtzvPhM56G1FhZqEBy5YAEdEa3Xd1mw61NrLsi6tFMCirXCwaToMaGaMN",
  "key21": "4C1wUWTn7Je4sUMpHoE3WqzMrQ3RdNo7eErcU42bFxBLktTCcwEPnoUqZ6wuU9saEp71FmHTL2Jxpc7gcnZRfuDF",
  "key22": "3XXx5yPrddJriTBB6okTtu4KpVNbTi5owvFxeRp9ELLV5vVULgJobUACcHLCNRe1NNZ7oHcQdyinnmDN5QDQBQD",
  "key23": "2QEjTQ4MQUCnmM43rXbsCob2at5ngUBxaV6YWFfCQgNa7F3Wh1ZFrQz1Dy85njLDb8NgSSBGa9uAYNzYg29LYrxg",
  "key24": "2R7KNNo6VYCJbbhcXKxDNTQf3JzQSp6e79voQhpFeiiFDAHJHXN4bdWLcfGXsPzMErreX9yxFmPwoAyJ6AvDmdjV",
  "key25": "6TdproNpTPpxnjum8tofj5LwZZgXrisTT3NvzuWycU1Q31KGc7Ufh33DnczjsbT94j2kDKjkEpmhvNt6zFuRat4",
  "key26": "5Cxim5Qfqm2djUn2hUBnJUu9CTWAMs8XAbDqfDqDK4UhmEUiuFdLMbTKeAMJfew4yFrg3CyBQNWXozMDCVRgr5MB",
  "key27": "46nd7Vr1xtc6HE3VmsSm3hVbmcNDuHcrNCfazKad8tWwgPbxtNWaK57yzLr1urhBfJKCLfgZpjzJfac8V1QPJ8Hh",
  "key28": "2yVWSkkag7wpFD4dBPRww3uPi6672okUt8CamWvMVkctRkmAPRaP7rzhYPAworKY9px4VZU9wvBHvqnfkGB4fkWU",
  "key29": "2f6x6mN3eU3ZFa4C9K755qX2kty1KfLD4onNQHmacpSZwt5yK5qi4tFx6HkAfanNWmdauxxe6yuLdBiyNa7oPpLq",
  "key30": "3tne3gN5qgtpCbwiVyLhvzCd9sCKyVsNNugGkfF8ndTYtMGLai9wooNCAtnKBS9UVu2BB6RHcjLSkNW2kTNgYkXs",
  "key31": "3YkTFCBRcNW2EPxDHJDq1fKHaZxGB16vMdsztnGMavNfF3CsCy4RAvSnn9E8i6bUzsfsboJXexTrSGkEJSYV6Ykf",
  "key32": "57hCG1gv3syJXY51AByD4eH34nG3ShYxkTyb64iZpR1rKjq6YKF69ptxheXCmwHoeTz72bRx6uWQqsTgdY2toppz",
  "key33": "4MCA6Gg1irY8nR38xnKfNL5P41fUwgfgvf6N2zpZjTgrtYvMtbEV4yQZ9KB4XHkbKvk27MmuXEsk2jLRherwcCTY",
  "key34": "2kpwcMUwE2CNCShWqWNSNdU6neddD82TS4QXzVb4UH32Ko6xxWtj9tFF4t29S7KyKB2aqvUun8NQsi2GqpDvpR3t",
  "key35": "59GS6dggaphin6c9Mw9LmxDVgLExjsUdEaC4gebAKh2W6eCKBFQFq8YA35i9qMMoFChxwdrDptsvg81oTCg2UG9V",
  "key36": "38sXrYCxCsAAvjgzLzUUPmcLzSznQvbyTjWEMjHi4EydU7SxFYBMCTgjQRisjJ1oAUDV24Riz3torkMMGcSowaWQ",
  "key37": "3zwz5rPjiPoVTBDAwBgrBuj7dVivDnnFLJdvyTzGFkm2y42oEk949AtuiLkn7dc6HaYXbtJ3qxBPkhUwFmKKurPb",
  "key38": "6ehR77eVPjin6BtbEv5m1XDkfx1b1QzGDvaBC9MTJ57C1MSkeqEXTgwe7pMmAwXgFdQtpuM9h6anrq3pS3zQ3pC",
  "key39": "5agNhmyRBd5ErY1tccaZ3eA7hmGATdECpCeq8TavvXqQWCVXP3uvCjraCYuvRFtJQbuCnJcPKCBqdaHgPH2fr3e4",
  "key40": "2xTvzwyLBdFWguSGMFaozfS5LJ6gNddPniR2vnmgwkYCwbLASazpJjLaAeeEfZBQt7gS8M9AzFPCm4ZeN3V9sJYd",
  "key41": "4uh2oyLMLMhSp667nLhpfjsyT2PedSqEq8RX9b6oazGGbwjBnsCh3iLBGziHedJsRugUDmfiGEL6Bciu7sVDDMtN",
  "key42": "5UL99uVPNpH3SkFmFyuocKwczen78Ez5399daAMmpfNgQ1Fw9kAAh8yZN7q1qhxXvZfAMSiSzBvwWcdb9pnGg4aq",
  "key43": "62rzB8DtT4yxBfVemsZfKx8BnksbAFQWGRvQfuDGYDmwj1jeVp82CaXSRMwU8QV4Xfg6bdszCSf3ei1iQqf5UUiZ",
  "key44": "2MSV4TdMBhcaSVfVeSbTmLU28LLC1V14QE4QU7qZFJf9JEZzBT4iu8TuqLCDyHueBSV55mPCtScdRWEw8vWWZGm8"
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
