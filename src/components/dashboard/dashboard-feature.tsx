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
    "2GBJM3VCQDKWmuPMeCK39oP5kAEozdvQuBHrsxdNWrYYQzWy2h2HtEYXyGJTKLEEnZhrC36jgQQcLoySGNZm2r3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mr6Ui3DggkC5qX7Ct5JVA1habys69sXYUK71FYKMzEhmAUmsRyYYhG6khC9Ce1fEZBxgdshkBKMt2RkM1Me88BN",
  "key1": "5BHzvZEs1n3VNVcopQW2HRFTXM3mmSpGZceuSPTBRZZJtuNr28Q6YJ4X9ozvtXpRaMkpMbABVqEuKtWAxWNtnCbW",
  "key2": "xpHaWRUpvqSDzzC2N7y6QdDfJPTHzNGwzdRimzy9ZxjgZPhcNUjoy99RiDWoXkmW257GBkeb59vigHh5V45Zk4A",
  "key3": "64hkXcaLf7be6kLgE4sR9KX52Nm3UpPq522kxTCXn95umWzrwZmYRJC2aLtShRSLcyURiHigcqGMJP6pkYTciiTY",
  "key4": "3Qmrad7GR3f2FhCZRock9JDRgqrFJD2hVEAwoo5JKoTVFfjE6SiUft3pQG7tRxDNuWr37YFNg1UxHpto4nawA7EK",
  "key5": "4ByGKJ7a5Pin5Gh29KsqRkL2NBDLPofPpfjpmBttbJTDe97CoFnyZv4BzsLPmzafUacjMnHLBZd4nqV5BtNGy21N",
  "key6": "2EM7a966xbsiQdpDKb8MQMxLhtfG7pM5WT6XF6esGswWoSzCo51KaLixffWz1PzzZLGk42JjNMtbNW4ZFt6MrTia",
  "key7": "4LxzPioFSGSgjUdeaFdF5trgJ9gv5nNQnwtJVq6oC1KPrVhN9yant3UE5Lcc9UXdb6N8Chj1yHLLqPq5Yu4rkB8J",
  "key8": "2R9wYGqh3VmFccQDuzfGZj6zkQRHyu1Qww3qJAkM5Z1HmxWBEMZZBpdGjVGgd9zCkuyx9cYGJRZL1uqwrSUmyZ24",
  "key9": "3Yi4Gxjg39Z8MxoTcMHDd8eGceqtS4Q49YZZtKHbjAZZxbCWmjtHQrFiZ5xQgq1em5PATqUEp7P3YqdACAoC7X8d",
  "key10": "ptGZLLNccbfpBpLrDaEzEbmWW8L2hYq6Q7QNUtzp6rQUZZXwtDQbYa8mjvvDAxUVVJGPU5hxHYozdm6RznbfSof",
  "key11": "WW89GBobM8v8Yq1wwhXiraLykBZxmdgJyjrm62Rk8h7n1dKuUDwgJFGNxcjmb1X2j4eGoURAxAK6Vcejxc6af5q",
  "key12": "4RUGeDYicJcC13SfzYLnPt2bocKmyevssa1SE1EgF1EB67ZmCnFKu35SfEUvp8sgiiFSQx54ke7Et2zG8v5jt1QB",
  "key13": "4vk1KYZQAU2dEBHT6smE4wmz2nThNHvyLCk5ZU5YcZQChwpoH89JtzAF1E5wimSf5xatx1NCFQYLUxE7izZFo1wW",
  "key14": "2jcHTS4DnzLvEqBqQVBX6Aua9KkQVGc3Lqi5hWyckVMwznVHmgMhrBwaob2LsuJhomsRxsESb3q5BeFU47FmfF6J",
  "key15": "657iqairUJfnSJ6xHWPGEfsiiEUmg2JTJ4o1nfhEHVEsdUiHSmnDacxeEXxrL5GsLUgSsYFb9z9aryAQsGrB7dky",
  "key16": "2nMDUsXiDoL3XMgn9BBeNuAFbQsKNqocpHcgcJko7yKgdXCdSXrrdU7Zgd65eBM5NvSxoWGzLXCfBGAuCB5FzMUw",
  "key17": "9BTuqTEBbLp6i7PCVWFaywTNCC4C1xsWGBa1KaCkc4Qb6sAuPGZvu5MedWfEqUWfSmBNzNwNopt4KuCJcUWC8bX",
  "key18": "2rPUFDakycZ2hguCDh9BEKRK5zE8K9vqS91QqeFFJzmm3tsmY8gDrUA3Z9XPrQXSck3YXvvaicefgsxChJjKU32m",
  "key19": "5JCD3tFZo79BZJXBzvh4WJk66Wcx2ABbZWLNFemwp3Vn1KjDrEDBt7q5W3D6Nw1ajUYLBydZGtRFcZSMmcqkXs9b",
  "key20": "4L2fxJQUZPJZHztRz3YbGP2zWFcu68ecCDkpWgtNAiA3GDoWG8e45JHAByJTjoKYwyJtQfRr5uf3dci8KUgunJhk",
  "key21": "3FedQ6neTvqpNZmBAojdxTTQc1NoFtAnxGtaMEj1uUQSjFPJn9dBSTrWLg2YQbfZCM6z8HANNPdPmm8RDTeVGqFe",
  "key22": "4d6UuJDDSXwbKtFtLaz3PyGo8xnVS3tUPfj6rR2qivzX7JHjPPoP9Xs9wxbPFqwHex1Eg1BwWqywS39urzDnWo7M",
  "key23": "YjjDayWN2qZ3RLuRapaHf8D5PsinTGy1GbcDkRUVhZ3p9VtjmXMn53dBip1vy5zfhr4kgmf1PEi2Jy15KVrMcb8",
  "key24": "mKFjP9Vr2odD2TCkdy1UrjW1BgPXzQ4RjPktqtxPWJwsHVKgU4v53dLDG7Kpv8W2McGGSRxBy9TBikGS1ePnoAW",
  "key25": "66nVaYHHUoFz8hs9GqwjctyPSjkBic9jwJPMvNHJLqoqMn7UawiK3ktzxJSSD494LphrwE9sCWGwX9og9f4RMAxD",
  "key26": "3EASyuKXp2Zevj8rX3FZAuqHVhuC2KGi6MoD1Bmwt15rCZiLwNtwsSzc8Mj5Td6dJctyNoJ9ATW1NzBfzcLUmFjJ",
  "key27": "5BAAb33JW54kGbu7k9sb6zxxz6QCnfNfQ5Yymzj2PjQqsrrnXN1tCqWp7gLtbPbFr1qGuWprJ2k8Utj1mDJ5v9L1",
  "key28": "4UP7AEW5phUx3MpvGukNpqa293an4QK4PBYmDp2kVTETboatEvB6u5ywd2dz8cwhddpBeP6yxmpRTy8fudetv6bH",
  "key29": "48c4LMncy1S8kCeiqbo7Gf71xHXw7QaV9UR8Hc7pLaxLHm9ZokJJd5PfNgjyahKRE2yKsuYyEpSEJCLA8bzyph3t"
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
