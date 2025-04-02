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
    "2B2r3cywkeSP78VezPuhyfBGwsvY4aD4eikt1p2kZZKw4Z1Kg4StRFrFq1xUbzPd8rMC9bG78xSLGDD4SjeSy2tq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TNiBZkxLmgHaoFRYmiRknWGx5teJF2o7WDk7WvVn96iMVH6Xsi2igYUi6VmBuXJB1xprumBXniLZRU4U4gShmDv",
  "key1": "C6yq81AxYLTw5fsSdiw5Cn4bpEi2zcUuoveXaWQn1XtzbDHp7nQCoPfcGHjzoVuFsrWZ1hgyQpMSt8dgN2YRVPD",
  "key2": "Rj4eip6bH9v1mUEcwR1atPfnqKY6fB5eQHZCrn2SBn5bSgHvNopJBb3XsQx7E91ppb5SbwrHUqXMX9oS2vDw6mc",
  "key3": "5huf3uKUGrT83u4872i9LTCmdNbQDTc7tHPgrwST1GZSgm9Ae2kbfmdCEVVND3iKnyZQLmxmAq6aN4ziHpYWMCbR",
  "key4": "5u28Agm7tc5vqY62GrQyzm4T2Ss4fFBAS4by6Q9y672zkchmWWTod4CnQCvjhSJGY2QAHUVMRx1qxSAXE2AHATvD",
  "key5": "4FTbwUsuMpKj3fZEKQvQeoxoJ2tSa23fAwG6E91oDpU6KJd9Hx46ne9qkbCYYwFqZaNdRSPS4s5eJt3C2Sqh99Tr",
  "key6": "4UNQFvukgNEiUGzRtaD2MDj57zhB9ZRg5tWLvQAgng86pZMiw6nmcHvknvKDm3cfkp1GVWYH8tsShS4HtRRb9Hzs",
  "key7": "3ZwnZg8PGKGM2NtKZSHKVf1Q9EDqRnWXGF12MMwUZHqdRi3mgFt5L98qS5TsdsrZcRLgNYMiQut8XQzek2gFfVY2",
  "key8": "2sMeEcDme7qxScax1KxYXPEfi1wsw6MFyxA3EZgpL4YWAn5UBemzGHD5PrRL222e3jqb5XQAGfKeUyZ2iyyLhPCE",
  "key9": "4JsHRi4DzFjfaM8bRGo9y7E1zUyXvdBdDUsYZRTnPbobuWPGcvCSPaSLbB7MbEFH3sJXyJasv2LoyA5vogV3dd95",
  "key10": "8rRjQQ2qTYxSazCUPP8E63WZjF1ng98gF7Na69Uvrh1V6YBLedr2WGAuguBYC374La6TpSAP3ffo5V4fSRpBDTJ",
  "key11": "qXM9xEC7PZjpewpH2iX8ZEmwUEHCa9A2xzzuUCqGS7hY5dxus4uemGSsLb5tGC1vP8FhyEQ4NwwPnsAEdY8wtEN",
  "key12": "2r3LcTngU1H71NWGMiZro1t3JWaNz5sjzukox4FHhLS2dGujiGFCayoBhA2qmKDgKoiggvpX4tE7tj5rmu79BPMX",
  "key13": "3DvuEffR1ZvyxYTEVKTMj52ZF2rQ2VioQmjXAXJLAjm2TahptVzrWc8eaw3XhwFvkGRYj4FZv4iwY6K5ZNzfpk4h",
  "key14": "293qtQGSRgMX9riHtxAMRi2sPiYdfFdB1g1b2cwrts5pWVXrKaz5cw5yDixR71GfQ37kjXKojPmKSH14HNaknwYJ",
  "key15": "2aLep1b5mYvqVF6W1uHnnBdKH7HnpGX4JyhGTSqnsA2ZMbystkEPtPG68W8ZS5yzRfzrnkK6gydm7chP2MxR9Jfb",
  "key16": "HhLCBw9yfj4tpae4xiouJ8x7EwZMsmrB2cmnS3BoAYCEaZGzJotSSqLgdJMGdcjDkdehtLC4GM4ejnhmjhcsjcq",
  "key17": "3ze89ttEYdSDZyxgH8i67iFnD11qN67ojakMa5b9cHBfNURcGcyJLtM2npcsQYBECruD6iky5Vy6ZUwYB7QACi69",
  "key18": "2GrTBQkqg5W78MBwNTzuri7paMysaG2BsfYaesQ8yy2kbhd78ujAxHtnuKoWPcczdAY9w8zEFEEwdyM4Dqt2sBwR",
  "key19": "Ej6TUw3jrbLzXiEz6xaPzz2oE7P4w61psX8DUWP8ZUb5Q3X4WcefLTMWjoHxdYyGZACMXCM2hgHfPyjjRS5sMUA",
  "key20": "5pbRcKF6hMjvwFoA2bEkP57NVsuJLCwf5vFjRQNvoya3wZwHNWxhV8gq8CvWsUm8V1ZNhZGS6FvA3tB17biB4d1M",
  "key21": "4R1CwKhSvQtwLVYco7a8cX2WzkCbXTEKzWMfUynxcHh2YCQi2qeGLGfv8B7hzWeLjFM6rHypfV8vbcxusq627HX2",
  "key22": "HBzLcbmJNGZMczPUzg9T38kCePH2RKz12ySWa3QakE1BsKbjs9gm5rvunNHeENoN8ypma3V5JGezbT6WUQAErnD",
  "key23": "37rUvq9fWQRSU3ZHTkEY3t7FXxE4mLPq46tYfRiSMT3BWbRP5YnwHuWwgHwzuy19FRPTjCPB35RH3tc2ywBBKMCx",
  "key24": "daDiVajPe8P1FU95EM1EKSc8CXVfWK4KrLntKFRurBpY7wPZgVLwCrtAmd5zhuRUJao3kmADM8tKyVfj5Y2kvQ2",
  "key25": "58P9JVp4aSZpGpc5EWnUJKBsmNhDycFMpb7dfQdSyijN7PSQXcJsXJumaN8WQ6f9kzbBoJTXdt7HCj3gm43L9tM4",
  "key26": "W39mk2VvWddAq3FkYEkWZJxsikjMZzUb9A7tsUUn3H3Ud52L6t1cxmuQ1eJsbQf3pSG3qWcU5By3Gd5NmMSqrao",
  "key27": "3m7khuNAJsfK42Dyo9VG3ttYekdnKLm9nrCm1ZrPNyQcZQH8Wffm6Dxek6oLWiyK3wFJCFiHmJQ3PSbKuHfpiY4J",
  "key28": "fm5WGvMqg7kWa44V8RVST7EtMga6mJKGXJhEwcGN5ihj66GDRA2HpxBBmwkdMtptmcnxiWoi32JqM6AL4qRmb5S",
  "key29": "45k2uVQ7pqpySVAqxUpjsHvUbrT6sLFnVgaS6romym1imUyWEhjrBf9AaMw1B6uuc1DMUZadU2LV38QFqJNaqoQC",
  "key30": "3z5ahVFVnumC1pX31LABwVny889JvW9wtjBYD5RWYKVUdP9aDJRV6CkPkSY1oHUJZANGZNg4QyUY5WEpeYL9rTSp",
  "key31": "3ME93HjPubwjKRgu7CQg2miWdyUWURrR8smifuVG2NX5SCxo5EZFgrgFCoQUH9b6GDUVNQvxPpyGZSyLsDX2qpys",
  "key32": "41dpMftLhhSFLRgE3K71NzsrcV25gZeBFzd1j46d6C1aVDmumZy9hLZamgjPZLbuL2DFnFZpws3HDepxKz7f3WVY",
  "key33": "fpTnrPgTyweB8BNpWG8eksR5TRGiWzAmRkMkBJFc175qsefev6gyaxV3SuHk4V4Vtci8rhPyhAhCme7oDuSGfsG",
  "key34": "3KSMGZXzWeJuZsaVRx2jPt9MQZqjA4nGAKNTe4KF3zf1LiiQYGooS2JxvBDo8rvsRRJURZ7TNjjSjqFojRBf54Pc",
  "key35": "4CzD6qRQ9MhfM16t5SfoaDaMXPPiYFqXkBVNS9Uwk1iijDVHwP4ruQkY8qznMbED9qz3fTrtbT2Q1XQukySrZeBR",
  "key36": "4oT2VucYuUspLn2N2ekHw1DjPW5AQYKnVDP91jgkR8z6icjdxd1tVTahojgrSp4Y9j31n4Vc9fwBy59DWpXDRWE9",
  "key37": "4jPyku77KMsNzGZN1z1FUSdFnSYrcLGKWMNTvqLbpsqmwqyjWxaPcMSn7BsBQQEdjVmKHXyFqiCjWyQ5fheGHTys",
  "key38": "4LSqCTGt341CAQy33mdTnqUCdKwP6ZziQWVHHj6JfFuCU18Kh78MjLKnA1238NFXZBfEzBUNVHadX4w25JMRypVw",
  "key39": "F3F2y6rba9RDq5ETdq2C8bUSbAqDjcwm6wTkSUbizKCm5G6wSZV6LZGcoK2KBvJLYvXZ5ne5vAPfPtdYhgL9w81",
  "key40": "2zr9bvRzRQ7nwZu33PLyadQXg7Mch9uHbMVM3Hj5KU5WbpuLbGmY8jVF6AJXMvety61Y1QFUqWDWJN1ZTHtqfyiN",
  "key41": "2sVBYF2ggFCbathJYTNKCxG5kpth4CUJgcJ5KAZwFRvmQRVgH4Xpn5BAfETbGqDYuUmx9DsyDkV7L2mMuKLPdxAe",
  "key42": "39rLqWwMEF3Fqjeyxe6BZKYj4P6VMj1GKY4kL9MLYRQHiKo5gpwJuXVNYcRPRYcBBAMc2XEW2comqRMTLxtXdLH2",
  "key43": "3QAukzWwbxTkeZLL1zakNnYamGR2pBL4yM8sqGz62UuXaMxhYFMP2DhtfCGpvpPitF8rpsb3mAbuFaS1epgh1DN4",
  "key44": "5KSjXas571uT4Fmjvc2918VJipSZwhKCNPAcJugKVobkFkxj3ccBu9wehqPkamVJVC2Uram2Gkv61jy8V1LbSmAZ",
  "key45": "4FuDfuVQmkQyqLCWnCbFWkNwNmVLdLmiufLZgof6y2MgEceUw3ozx9pEjScCkJsMYwgkWt9n31VdLtMkDvz5TNfj",
  "key46": "3Zybz8omoG4a38PsSaHBTqdVdMjVDZeEkXAmhftGNzDXz6LwU5cVaksHskdMK6iC6o5KPqbF6kGhb4GPqqidGUNg",
  "key47": "2SnWXiv4BEhgaspwZ3qNEVhRCFio4CGxufp9FHMiD8GB1Sp4WdLcF7PDJmBeJhQ1hSPYGcMLoC4zTpucnuepSghi",
  "key48": "4zVZsRhyM7TUKxmdZwejujJ8fv3nxTKyFz5ZWs33usn4kHy1w8gjcZs1ntBkSpeC2G1NLfyLogQ64hXctogpepEB",
  "key49": "4i4DV8KjUbcC6haRDQdjsWXpKuzveqrQn7oK7jibimJxR8sKVCvAUjstWT7L8dzoKmrt8fez4BgyzddSrvG5S9tv"
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
