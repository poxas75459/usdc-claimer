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
    "5MV8esTnGckYPXcBfqUjKbyPL4YBZDNmqRdw6U4K9y9NyhXoXH4MymEPb5DhoixWXgShCmApDj3WjraRnnszYMEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pvtAvEfD1mu8KMrtNqbJ2TD99zKrdBiX6CBMuozip7CtjfrAQKF9cqXKsqUiCYCUJFKp6ntpdoGBXjr465dqPgB",
  "key1": "5bNLH5DXyf3npxoJzasBCFxcGmcXxLiwHmXgNvitSHSs5Q6ZqFdPDt2Cs4apmTDJ4pCVyShNfg9vhLZJNhQTScnn",
  "key2": "3payfuLsbuaenAkh9cF55BWzwCk5cqKfPp9ub7W9tQ6b9tynVxNZfU2n7hiWeRZzW8G9qFPVLHh79EGCCvdRzmbC",
  "key3": "2UzDHKw3BsNDzg1F1qsoRADFSSS7iyX6rYPqGgt9KXHNnvmDJNQJWHj3epgk93CovCkGbFcZvT2shPDuyqWBBdaW",
  "key4": "67izV1NgAeX8xTsZnqxQpVmyKaHZvGMxBg8DLCkX7jr4wCZhJXvxNDLhQqmZGzdPkyhAHiyDM6wDYkUGkykNk8R9",
  "key5": "NPTmreN1MPeAYiwaVUCREocx14FU6PgYTgWeYHZepAPYW8x5vdUkyuSgW4oTwWrZNtDZgAdoy13Tiza5bVodxRa",
  "key6": "vaYcjVFMZwfZhHbo5wrN8rG3oiC87S9AX6VtMivt1NkgMMoWao3771YBRsLrDJbj5TYE3HhLie3UcavigWodjRk",
  "key7": "5NhVM8rgvNM1H8DtgSW72M3ktvj8uPmK7bB82FLA8noNEEDnJG1hdLmsmJn9cvxFQ4qLWTqqrG7KyKaKN9FBbAKN",
  "key8": "2x7PXkMJth4dgcG9y7rTsuA3AX88ojdQiPEUYpp8LR8qjXUrpAapgysfGqzjZwh9a2uiZByYcsgzCcvL9aU2rVeQ",
  "key9": "2q9Liv2GeBbptQegHa3vpLeA6W2n8yu7C9xACUWniCHzW6MioTfewH1UgBQDvTmtSMCdLy82BQa1TD4VVKsJv9ME",
  "key10": "4nHTA99jqtPXxdPgo1jKgtSPMDQS9Y8Uic4U7iDp2pbF72ZZjQV1uE2qSyTcQdy9Qf5YozHDF61jTaph6RinZCvd",
  "key11": "3f4cgQzTcXgRRgRWVrmmVNsNp3Ya8mx9EWYG7N5KCis8fs4Rs92CQ9gm5e9HHrh53s9NP7yc5VB2PAqNAiDajiqV",
  "key12": "fhxmH1C2wfNvsJ1ucoCVsxdDp18WMGFhcxSfVaTQCq5HtPSLZTbeqkXReG4yrV1GqAKuPoouuVGvsHVMoxAq1jn",
  "key13": "3JAL5iYj3HZmoh4nNPor3KKC9U6XmxSdSEXfZme5CNaXDB1NgTELM5sMFZNCksTdSwwa4hvmBk484PnnNURJXkSz",
  "key14": "4iMAPcZBxkpWKUrLZe8gPDA4Z4XSoKjdXtbKMmnrpfbmm4TSkwF8LGGcCJq4eXXEzhkDy6PfQt8CnAVi3JSKxTBY",
  "key15": "4dsKVZLyzV9WdFNLTqCNkRTyazrLrGcrGhVto6CbkEGvqBiU4LjF95DnPGyLbw9MyhTSrt2RZTmb8wBB8AxcoPjW",
  "key16": "uff8kjefXeD6ogX3DnqPWFNZrRyCVvpbsJJqK92tTwQeeAM1iqarzJUbLsTuz2CrPST2h1D89KPyP4o3Qq7Ev64",
  "key17": "2ZjRmumbMsgtQq7okbir2Btn6N9CVpD9VhaZz7wXHUxa4krzJQkWVGAzos2BNUuVNhNzxK5KPse53US81bMAgWB",
  "key18": "vS2Ey6UkpW7tjR65UjUL6c4ceeeZbt13Jpvv9Mey9GyU4hbZZQjUq8rcfiBHDAccDN7jThmdM1gZ4emJ66nq3Qt",
  "key19": "4ndpofuFxfk2ryxjHpLFoTD78ryG8JTo3xmqsC36rvWjxxZ3sKYCxn834wypoLSLYQpixQiCGY8tzRncwfeTqUKk",
  "key20": "4VSLtiFXEpmD3pqhc2wAra46uzx5aVrGhVfoaN2SNTiRdddT6jwficpSx4XygTxgxL2Fm64gqs98LRYhmZpbimYu",
  "key21": "nd45zpzU7Ac7sdPmFvp3HCJ72odPJPHpFfgRtrG2nu1wJF5CvnvQFoPtzNkH8dXLeXhfzNxj1zSn7Xtq6MKMF27",
  "key22": "58vPyLZQSVuKfftYBWC41zm5NmD5iCo7JDEDRT3aY7B3qZRp387TWbxHMuUat2LWDgGHHKGVRQ9qDTHhftrWPxA9",
  "key23": "217XXUF4VH72sEbQS6vRCxkboMU4RSdcXPYxtKKXRCQyWvagLBBAEFN8mwAC5wCKB3mM45yV8Rvg8CbjMDjzDm4c",
  "key24": "5ifEQAQs33YfxGmYK1ph1N9sBECXXb4WchcJPzYf899jphtuThKrFdzQpu1C5WUutGPcL6mFoG2iJVvzMvF6iPSL",
  "key25": "2wCpns5FJ3ZhQw1xC1VYG7mLbZ88Z1HvRhCGJy1zFpNnkwnKvQKFd82xXFAxCqcwwVWRq3zFriLb3fLb5DWweJNX",
  "key26": "5mvfaoV6KeeLVVHV2g3HnydmFbL1X62LtqwMkMyv1WxQfpt3EQrfcgr54Qf15ytxJSBCzSeoqapzHvR8HKEPiAQm",
  "key27": "641i1FNJ2AByyrfhtnz78cJnUGMUg5LTKmLyhQVw65h8o7RyYYWtr5emY15vNaisyiZwavFJxG6sWuiPbxpVJaZj",
  "key28": "62LYowzsXS5jaAUVWpXkHuNZmc7GbKwBCgQFRnrTcQXPQKJaStYqBzF2WWjpCy2ARioyR41hBM3xahnvyN1LsybK",
  "key29": "hJ1hqLSKQcnKdm9f6kkGTR71bXjYW1YwK4G8k6tLEZVhxXVAyNdcr6FbVVYubRUo9J5Xg4DCdGn3ZK8bZfViK4h",
  "key30": "WMFnVQEsAxuSzoSTeLt9HH21cxTLbZroN1MCMvKo88jcAPSmyWhBcBdMGb5FtZr16oCLLjtD12hsmrpYJnmJnYN",
  "key31": "37aFQyjZnm6WGKnonpyUhBHogyjsjpuiBnnA9HPc62wvPGVrgzLGuDq6mEzvsmXhBkSoUiKhRTKJGfJysyFhAQWY",
  "key32": "2D7VndjYsGD8JtAdkXzszrUJfxxcjex6sjaTJwrBnJm89jYpTbaJRMPvo5EcYRup1nsWerMfwtNCGbVp4ijd1dBu",
  "key33": "5wm2oNdqguw46aZGDtsRoGiUeqoGawt2U5QofYmjqyitD9Pd8aTSg36p1szzNc3Yrw3gzz3HTs6iVVZjEH3MiP5m",
  "key34": "2tAmZYtmyFcBiSKc9v6A8tpH2Ue3EQ7cLC1A7eZMcQZzqAMR8cNoU2o8PPvoHgdhD1RHcAF2gDRXudXd5rcvzYZ9",
  "key35": "5UExakXYru3yb8VYfYgfhCQ6QyGRHD2EEAVcwAQtufSo4afEhsHFXTumWgMwszNp3wt81WaWGW2vgxW4dxp9Wr4",
  "key36": "gpFHNNjKkhjpHaEeS2eKZErp86AsZWH2gkRtkvgcKUGetztWBPuNFVXL6kPECP1zdgLb1eTebksMG9j5bmru2jv",
  "key37": "4fPF9MPec8urBAwNubqchHmPRvaWLmWEwK8wB7x179cSrVmWAkqDDkHzbRte2K4XNteeFvBorQFB4t3nZTSUWnxR",
  "key38": "3uWCGCNGde1oe62AwbrgFAvUb9zEvErWg5Y5zz6bGCzvdUyYd5voRxnreEGSZzEdoxiNymTP1H9odcrYQtSKMT7g",
  "key39": "46bg6Y7V1byxj9oFux1vtjqDaLVAnc3V5f1kYyDdRpRRqKwV5FBc9PmUdzD7EPDymahCqBtKRkjahe8S5cTJqE2S",
  "key40": "2QZca2H3AZeCiCdNXT9GzQoAP6r59LrDE2FyQCNvFGwPUts759DNcmaNMzeYiCZd2F3L5dGGC2odCxJEsw8eK9Y5",
  "key41": "3EXZd1kpUcp1kt8KNV6q69TgexPz1ss2QX77YZA4AvPTsQHxBsds14VLdkQoqejo6sXNn4cPkKw9MZV4LfWAY6R9",
  "key42": "LRjehkijC8v3nwMNtSESdoUBbfsqEwmcisUCFTD7YR8GtFbdoYJkTGYmZyaD9mQuo7NRKTy9HTpsTRhqoVf4bEg",
  "key43": "2Mas5CpAoiLLMkddknBwPXNLvaKy5pjqC8Y8V2izLKLcDT2wWR7uPjzRK9PGDh22tXE2TUJ7vDzQDV4RbAHyxTiG"
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
