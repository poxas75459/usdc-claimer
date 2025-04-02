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
    "4zwpU16GxiaAR7Tki4kSYSkDwfjPZ9SLuC4Ecvka8tBPtyS9rQy6ch1PKsn3EhWth71XNdRFmvBrsj4Bko5Db3ou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Q8MqHXPVtHJoP7AfkzefADdN4h48SWmmMk2iLBbfgSiztvtfcmbUAm7FLkT8Z99UVM4CDuE7ZM2Tzyeepc7DaE",
  "key1": "5s9RbmKPmwioGiLp4BDGN6kZnR5WmsosudUTXwWNesKMtv8Yh1VuqJxUkwc2rqZ6nvFoA1wctXJYjVtNtUoNzWgo",
  "key2": "4AJnsMhFQgHYnRuutz4AEMTt5FLJJQxnuZczTYEf87eQ4ogzh45c4NV2hokbDSR78E8zZoAeSVCf2Xabj2yXu4hV",
  "key3": "4NST9QAn34a4rfTcPXvZFKfDWw45sAqAYj2WcHeKznpDN1xHc3ccrcnxcYaXvjiaDgyxKkrWQEYwfneDEx1PFfM6",
  "key4": "qsbbmjtrEaWMe4bSzfASRkD8xSSfVPKoHbwXH4oHUdQ3Sn99FqVJ5uB14QH9Z8xujQUHKzq6RwpBDpim9JnLCsi",
  "key5": "61FmivxEEWqs9UBAThvMAHW6ic36Eo1wwLRrYui7ZzFXKvzKJPfGvfJp5PQcTUaD6kTcfLVmzCtPC5SEYgQw2eHc",
  "key6": "4ioWhaJYJBzrs1KEJkwMNe19PuccxaNJ1bYSGw2Vm4szXct8HrCr7SKK2W6LKCjxHq9gVXyjxU34PpcXHadqU5bM",
  "key7": "479Dg2hJpY1pArR1S76FPHUUM3y12KYaLkG8KZoXRMPufDcSVA8FAxSxWSyJaY7Jg9A7NUSjjScePVfknRkNTqgo",
  "key8": "3Kbo6GcabyZt3rsPj2sCBvGJiB4H3JtmSP1Wr9QcgTxTtYWombMH7pKqhP6iKzw5tntzt15wsbeJaDVETDhzpZtC",
  "key9": "2KLB9ynD9zXM3AHU4cfimFiLnfqwUNFYQAm4c8L5NPbJCHvuuhGPdUn7WyvsJHCYxMJSaUqtU4xJsN71yorp1ZC9",
  "key10": "2ynhZFW1rD6kEGrkCH3AxoDiGvdCFUjLej7xYLUECcEjUxsaMoZQNdEE4xUTuDDCHVbYr9LJofaUjyzZ5w77DdgN",
  "key11": "5KPSUFzQRsnSx7zFQPBaFQqjWxCu5LhmbXYnhrv54jbPtJ4KyGgMZZoJFUEgcxQzVuy4uPy2Bm4jmDVbniyKHwSh",
  "key12": "4iu4Tw5tiPuJrePczQLWW7YTLfmVt6ms58cEYKrNEc2Ajy4TW9cuSVLEuywxtCCS8zXASNsgguBp5eHUjRaHLvqr",
  "key13": "3CMfAw72ko1oYjec9MaCRhZwygVEZyN14xamj3ierXktAZa3QzBCVJ6E47ThHvytQUK4BsuGuf4UHi1AGdiogR5L",
  "key14": "54q3724oF8WtbPjWmY5Rmxj69G6Pi9u9bgKbJbTcaeEw4dUzgvDmXi8FHRnWpzaDBxRfw1eoMn2EfeNzC1bPUDLW",
  "key15": "53VNridDQCPk9jKg4y3Z2dJ9nXDwBsfRCzEcG1z9HhGeMg8ThPU7eRwB35vSnPcpxzHWzcxW97o45gnonZHe9GeB",
  "key16": "3RCPjJwzhpss9WEDsFJtbnX9mfTc3CFA6WFfbwH4jXi4WpCS6HYyMaa9rWZHSdv1QJ1NPBtgdh47i7HM7K8QJoth",
  "key17": "2mcs87oCLThr2nBQ78h7cmTWDwKZKfgovYbkqTuw8JhNjiSxB5uVetpsy43dDZGs5xk6fu9vU4TfqnNibHS82yRT",
  "key18": "Dmg7EpGPGsh1GwbhRyKpvcuVUVnKUyGtEaTP8HQeNKGy9BWVhrWqV1LFMke55gcBHWJ3gSX45h91tnYyAcnUoSv",
  "key19": "3rLoohxG5x6gF9q273HqY7vRAXT6KTpmRJke2q5Toz7routgFSNXTHBgUydS2Z7ywq14HGJmg8xsM7C8VZb919dp",
  "key20": "5n9PUu4ApJdLGbSs2YEfXGCTptbNNVqR4uqx5CCRB73MHf5c412gzHTwADQQwgXEsaWwCzizkMZqiWkCPcZksQCY",
  "key21": "5hsosxEAJqQh4wDbhXvRWRnyJrMYBZxCSaVDEh1nxH2sjZPmYCcJsmEFnZRPVmSj1jV9SkCCvFPD3T9g773X9Kgv",
  "key22": "3sx12E7HNMTKKsoWhHUJtAk6kX3Zkwqhfp4vxCHC8FmFhZjiTmQ9gTxFbBThbHF8WmwRsq2TqUPHuy7LW4rpNEf",
  "key23": "X698sPaXFGA9DKfXAsGoFXcFoc2r3fTjuyZwKUEpenQRbRpA7hbksQ7BNSi5dF5kBBCboFTqTQ79Yzy5SMkTCSa",
  "key24": "2G5LxpDk9nijDXx9Zvzb5pPwx1VrGJ5mVrdkabmLNSv4LVD9xCnKmUkUBahKSe862QMAzkZXyRPr4fa9ngpPVqoJ",
  "key25": "4jAFMfgEtx7hbBEka1jNqf9c5iryakRJPkv5EHaXf4usboeJxx6YsqnQ9ipt4WN3UpXhEVZDL6BGKWvdTwuZYqft",
  "key26": "kYYKGszzkCEL4wfrMfGawBGanuER8UjFNCeejm6ogKr3hSFR4NHPr5EPz2a8eY4MdDKeKSyKYYPAbX2wCi6dweJ",
  "key27": "4WwvZcX4qdrZe6AhePX41nuJ3yyAYS9BtNFo63o8fY84H7KgLYJR4F3eM5mEJ9dcgUodkwhPHnfChxSs74GAyL8z",
  "key28": "2m181r6ZKZX1NkUR6fhMyicWNEJ3vaao8MkriJNBngr2J44BNvzxvSavDT9iExnq6k4sj3zzqdPLAdQwSkuQnZwX",
  "key29": "1T7Ucuxp5qGQi7PqrhMYfDdD9qzYQsa5jREwE81dchwRPcRJxgijF1p3KMuJEGzMrBieAmA7jiQKqi1RH8J2EfV",
  "key30": "42REqp7LsT4ZyE4fuU9g5jJJ3AXtXsy75JxDoGEQajUZuwWNnrckJCJHYsXvwkM8yMXqJxnZxDyNznQ6Fp9ckzq4",
  "key31": "4aipHGMcy7DcbwSVZGZ2B9RdcnKQh2xckzhVZfZhgvQ8WUvtgKQW4QhVp3tZMozwR8WhqTCn6Q6qtieaU7MQwUT2",
  "key32": "2q6ki85skcSAUPfJF4jZd9jaWpZ7haMLcB2deg3iN8QHCXDCvawLoGbzjNsQq8HMc8MXU3PKg1qRyxc5Xo1qxJgZ",
  "key33": "BDcgw36CzMA1RYJJkZvMmouKSyMxrKuuTrS9Y31w51evPZsoPGv1o4S46KCQLZJiNh17X5LwBWo8HSrX8TvtyMK",
  "key34": "48RtygJK2EZvL54zE1B1Pns5htLQuGMYbfEXjiB86vAzZG2vuTwk17BCjwg31bQ1FxKH7sXLwJk5oV1VwMaUyz4g",
  "key35": "2Bjn8t41LhX3a8wrTzz278bPaWxk4dkdHjRs1Bnzs1qhZYSukbDDwwLjeenRJWRisAe9KEmpdntCKnN41B29uAUd",
  "key36": "4wnxYYMwXsfSFuevyYooDLNUMMwZnfyou5Eo95ZuUCR5HAZCisYmiyyUd8dxt5ttLmrZ8rbDvK1YF6P1F9ofx2bR",
  "key37": "5VPz7S8k7naMJ5ynfvYWHTvKeY5ioqhDxmbuXGBykyyGogbUQTorhXR1okqdG2tcF8nQxE81hFMVTTz4L5jAmK1k"
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
