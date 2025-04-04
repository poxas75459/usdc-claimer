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
    "2wrSAwaqsKLoCJukBMimgztLGoPyAXXwVaxLVmGU3RF9ezwE6DbiCELM2ALE6WPLpyH7NvfHUwNcFAmLbL66yQ8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63RNb9sbgMUSYcGrH5DS1AZmGU1ESh7oxhYfF5mx3JYseKHjBdKHx5SWnDUKpn8Stx1yWi4WJao5LUW7yDjzQtfu",
  "key1": "4VYt2ShdeeLLWbLR5JevTD4GTcN7LyuJ6bMRUu3xVDU7JtN28X4kchLkhHno4m7hqxLoGJqbpmjgpRcJQ41mxk1w",
  "key2": "3f6dPNdTogxdyedtZ1a8R2hReXeysGj5CmZe4pZQxkTH6cLD92tcBBKm9DGLZ17FUWuQsH7RRaZP4Pr95bT1fFTy",
  "key3": "3SJa6NxJxForUpNn4DmRQdQMQyxtx3qAWsvWQoVdKFn7SZnrzhvGa8RJBzJJ4vyWUz6KpTc8xW342MjypNtEAdeZ",
  "key4": "5eLyMCdhcLJgkWdiraWATKyRVQiVRuKVm9x5B9WmDcsidb9gQAgXBR2h9AJnDm6HwNmM2sYDRnPHtuRvXj5EnqZG",
  "key5": "n2FAsXBtT96ErmJzbSCdphZgoeTCJgmjUL2CNJDASWvCQxJnqukeaYUzBXs2RBPD3obeapvqAWagyaZDGKZUoQ7",
  "key6": "2hQN1ykbCjL4KtDT96D4PytBLWeSQyyExfssSRejvYg6qTLCCy21fV3q1w4wib5RNR2Gf5wr7vkN7qqsS4n5m5tV",
  "key7": "3P6sVh7A1vtk7ZGHf5CfyhQP157BfnyMtgNWBphKA5FqvBmX1sP5UqacdFvHaJ8s7A5dEd1T8joo3Cfpg8fX4uwV",
  "key8": "2fMyABSgfoLQpwV2upoocSoM5XN2hMQ3139rxqGM1zaPAzkADJ3RhoJRiBtqLnpDap3dKoFdzyvCcWTSXB17JV4Z",
  "key9": "2TiTHyWs4F6RuLWZ829ezcKMMKoTLmp1UNJvRaR29YY9d4Gf4MAPJ1zyFbdLHw5qk2SAnzTypHfU76kU9qcXWBJ7",
  "key10": "4jU2os1nF1BUWYV4xwQ9srdE22cNVNZgekZ7A1y2dP3URued53kuWD5wQee1Dc4Xg72MrgcU2LbuYdvZhhNxBUDo",
  "key11": "Z91LGthJzNrBv7YFDd12K8okQ2m5mVkaKQmz7vwFSGT5cXoXsvK8ZfYoFkV5F5PFnkV9Z5U9ozZcv5cLDAWddNL",
  "key12": "3yi4MfkBGxh2xh7D2CFeLd4CzNFsiaaDf8vBesQbaVy3zx5ddAEpRgttNrsALPHETQGpr44LT3kewMtFyZ4z9pCk",
  "key13": "2Wg3MKe1uuAgsMviYDz6i1YpsRzpSiSeG7QoGPjPZRRzBS8Rvh1qf9dTofyAN22vYYCGEeh4oiPZfv6wtesdPmAt",
  "key14": "3xr4inuBYW3Kpt3EA1VvRFbVywv3bvSahsU6ZQXiPK14nxwKgAZEZXxffGYcy9azEjpFHMEvegtkk8Q9TGQmPoKv",
  "key15": "2DeFPY87DkgmhLBhpvUe7KCVT49gPTpcorZvv5GzzB6Rjcmy6mDjzBRUvb23v839QNMNkqgRzxx4gxFSJcSrfgA2",
  "key16": "3jUNFLD31VUdCUq36sY4XtiPinwLLT5yobG2UPduhfwR6DNykS9KbetNUL68CK4UYsLt8Dzn7fpQf1XLp3NUZAxF",
  "key17": "3tr85rVDawvWbVzxwiJT7S7XJZojSMews7HKm1q8VEgKevADz9PaXi1qt5vbuuHDjE3ew1XsVhNn2ae7PzikZ7YN",
  "key18": "4ABuAoDmeMuEmXiQXNZFdUN4B8anmNyh18sRwz66HFbx4dMkt2qQytQgrnZfo3VxJZiPk4cne79WWRwFYpyFVY4G",
  "key19": "2TxKgWvevP61ENjoyWe1gfQi6d4TQHdiEVR6FcCUBwDiFMneTpP5ssoQiErcfscpZjD3TEDp5fpCEEHLQcBAiVMH",
  "key20": "2PadxZ78PDjrYBP581aKPnkRdoCAgH39wEhQwQeUBmWdASYicBfuYmzxVAcYYSFVVxs4Ekx7sbnk3EcAjs8TKnj8",
  "key21": "3ZKFxET4wi6vypzZuD7n3hbWuksdz9kC2geJVpfmpisXNBTrhNtnGkCb8F7Ty3N3joZF56LgoJzrHC7wZuuaD1js",
  "key22": "3sEcYdH6L4CCepax9n9pzm28FRGQUPMDgcn3kWhgkYNweV4AeYUDzZehppv3PubbdzwTpsa5SKDVygQyBiC7vAEg",
  "key23": "3qsxGexCsnfqV9reZEvWyUwYdybKtz6TRJbZ7KzB1w1u4M18kE3zR59dAeaC3DT7Gr4yEgrrk7R5m4Svojn5N2K4",
  "key24": "3XiPFMcHxBzGJksTiWJKoNZymgj5Y8HgAtDRyvLTxhmnDh7NWXELQJK23vp8jCKB15s1HAivfczgbYp2WfLd42pj",
  "key25": "41D3bZiMvfpWe9ZVcFJ7Pyvf9ewjLPUokvH9HZT1oF4Rz5f6bSRHDmABvuSE9RHsQJJqfXTHbCwbckJdkPiuSVz",
  "key26": "65apvwuotE2SUV5K5dyyNVtdxboFuKZAdDfczqzEmUDamELrMKckfnECecQx4ZB1wkNWoACSEQrrucLs4DGUGDuW",
  "key27": "3FVh5wzKjh9LpH1FwWZeLgNo1P6QcTYkV4XLKrxGbD4qVnLn92zhemsFDFJ82D1fPB14hh3nMhfhBzSUzC9aNa47",
  "key28": "5B9bjRbSReYSNoZ3CoBzcNxdhwLmdwyo26UnJY1hwSfz9hQbaFFaJUxuieat4hEMsqwR3CPvERnCh8yvka6xxpR",
  "key29": "4gXq2bfBmuNRe6DkisYNgEc7jNs6bXyPPLNcD1MxoERfuqRa6ye1QrWMfvbBfTY2Yi9vRCKeYLq7WZ7vptyWd7vT",
  "key30": "3JSaidtQDsm8q6UY8rpHkK31esi1uDAvVEmU7Tq9wG1t9NByeYVjpr4hp2gGHaAM2c1yidb7nogoDcJwXexYZv8g",
  "key31": "4wfT9vseDU3CiJMstAwTXrabdeo3eE5rJDFJLAVdeW4Lwkm8f9naGX8fjgYVNW4vZ37nSZyStLTKrxuake6XjsMx",
  "key32": "4mQ18cPVLwsbo2QsB4kmWsdWUrwMQLfhVafiuMqSKi5nTPH6RDT3NLtaNixY65ZFS8vPwbAT9TGGZ4ESKz6TqqAK",
  "key33": "4eAzYgkHKLKH29CbEG7be5GBjPGm79n2XtmVX95v1YVqnrxMrPg2iifUxehVZDU4Kg5D2FHyhbSCvfrWwYXPzgwu",
  "key34": "3LHJ67hwjMwae3fbXC9ME1Xc9sfiNcmGZYy5bFtbDQYM9uCrcoBtGoc6BXFvVfKLsA6ZW8AFEocJBRSqVA3Vhhtn",
  "key35": "4Umihq3atAEtfLag1xP3UjtyY3iTVuM4K1XQXN9KkUDZgeSW238NPqf3dLB5dUYAQzM6mdkwxCkVpvH6tCuWKBAW",
  "key36": "4nSEg41m23h2e9uMY2Zsy1vFtj9VSUMA1qsqZHA73y5S5g2JFbU7tE6ZJMFGQQW52A2LcDxkkjggdC6T4nNN7hQX",
  "key37": "4x2sNNPxTTA4JVFwX2ZWx6soECiQWGFRZ3YqmDSxjUYaJsyxV4qKJAwqKoNcS3wHHYAfgzpvBaRRTNRaYEQxPGVp",
  "key38": "wHehLQysJyq1RPEwBJDUawjtSgnpLotKL7m5YhDGVhSYMbZWEacqwnY1g11bVyayuuGjbrRjGJaenTHnxeGZ3uk",
  "key39": "2FiNbmM5MhT73AsaAwhj3uXy11AFxiq7HBCHtHuE7NVRUCNGFVEwCNpqsAb49L5aKBfJoasZCveuqkeN9ZYFVZro",
  "key40": "5oA2pvz3USGThTkiNW7XmUUUSRoQi1jWQjUeQTwCAjdVNxZc6Cb6B2qZEYdYJxCTEofN9RpZg4NcBuuhgax6AQne",
  "key41": "48ZsPQbuzs9he5D49FkpG2E5e5QrRtfJewSFi8tNw3owUzwnGaXxreJswaysDgYneuMskk1n3KFi7gAVoTMnqZAz",
  "key42": "4RDQH1ABsixn4sgTmdsC1ctNifZNad8PzJqdDPkUWnwuVtsSTD9pj68x4j7as3pTwKNdfhHGjLXWJqijhsZ4sQxi",
  "key43": "gCAYaXLoEMv1MoYkRkkgF9kM6oWYhqFj2RGDMSoWeZun8ZpHX8AWLVYwcGEv3iyiro79Cf9LNszkBbQ1qvAWuUH"
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
