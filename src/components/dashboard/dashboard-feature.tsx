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
    "3QobqBDV59yZDecHeAsGQFEEmxhT6MHLq6MRZR2xv3wvFUooRT1HRNrThWwSNHUgE2TxMLA1yubcARvfrzTAW4N4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J8pz9AdPYRPNYbsAXysghDcYxkxUYMus6xBe33CiXLd8GELkdM8mJ3kzUmsvoaQqmcmTwEH7Ln8r4i6TyWBPi26",
  "key1": "wqcNh5czBF5UarJyUSTMA8oJpcqJjx5onaTwgDi7kRuMCLS7u7bkcDq1iU7AfGjGChRxN1vH81DS1S7qcjjnqiU",
  "key2": "4eWYknKKju69u2bo3gwyUkvmwM4sJYCDpaHoW11egiDoVrzhahKQbV6k27aLeSbzgrQ3z2R32ZsM1ncW7NS7eT5g",
  "key3": "2aZ2MFTU7FRCiCKri9hVfR4zJSYZyV6NMsD5X8QQJW1F764uv5nq3D2RpLGDruGwvCQY6bhd3aRUBCBiPDwJKJkM",
  "key4": "3sFUwGNDijRgtv2XJPSZXqgeBbgFgXPkCfMFidGZabUrs5UiEVHWkN9THhVPCRYv68p3WuoyeWp7bAM1m3TCKhKm",
  "key5": "4ZVqhzgab1z5RZuXYsnBkiy6TSoR4dhCBxipAtUaZVKchk2am6wzZzA65wpYww3feyFzmvMcYGMJ7SaXoZQj2gmQ",
  "key6": "4uivvEmyrXjXtnH4QjVaz2WyPU3WyQ9d5qxGVfLgY7iN7DAbN9PoDB4CFUiCbSwKL3DUyQBTebQnCyMxpxHD3UEn",
  "key7": "4srq9sEmt9a6cMRRHJKuMid1b1zGQHHgsFoqmVGJTmQ8d9s7D5KbweS3Psu9Cs2bFgvtXv9ZUki2h8qiskFrjPY2",
  "key8": "4j92dMBHYDGpTT49MQQwA9VtPDe93q5t4imziqUUvBD1pNCybQMFpBqCFELiUmAEayQgXzspzaFh7MdzfY9KLNtv",
  "key9": "fhFybgKoGP5ayjvXsXFqXJ677UrijqbGjf7K83gh7KpRb7tGJRP6iHTFFZSzJ1aVknsfqkc8GW3M2DskcBfAatF",
  "key10": "2vizEuBhdMKR5Ctych8GjSS3CQbJm5HAtBfU2dUsC2x4qSg56DwujF6pMnCiPehavPnZdiBpDpuZGg891rbFXqZt",
  "key11": "4Xad7bu96VRhfutfXDu6o3BM9MUByELqD2dhUq8smwdw5kW2xScFJ5RemUhA5KJmCqdH87SkSjPhURWTcw8hSfXD",
  "key12": "3kEjLuswCEHNZ4HtLQy8CggMLD78TvDj5kjE2xEr6Pb9frTW79CrTrB4yZWCAVrMT4pqGmvd2fUQQiwFcv82WQ4k",
  "key13": "jk2mjbgYLXxP5b1Yxn5d9Rs54TmtFco15xfQBkfjYEZ438GahrDcS4hkDfkAn6Mg3w3pCTcoTgXrBVYKSLbXaPo",
  "key14": "3sk48tMejt87B9YCKtU8ZnD3MKfpxVCnN7pE4D6XG4FgZCWU2mPWGAn8cVcCLyaE3SvUsCV48ok7sdmUGgtmMAFJ",
  "key15": "5DugRYvKybEYZ9HMDXHDj7KJ1g9ooW9gjNhZgJhx629SwrifyQzXPb7jQxyMK5TMdQu27QkAnQYhkPKJfNS8vpse",
  "key16": "538YFD4nUSzoCbrnwQwCby24BcYbjzvYY3k6osesKtjVpFrv3JfdakvJ7TCCDFkpyzqq3L873NF2Q1aPM5i4P1e5",
  "key17": "5WbYU1aEtvAFnVzbMhn3SLVutvoW7fJhcVeNBUazn5K8K1sNE2uc6M8viwkRmnXkb7ur9ykBfwKHA5FVrTZRuuNU",
  "key18": "4cbyECj81j4s5rWyuenSTekqSCM5sPHVq7ocpszTiXFQgFDaDT4YpB5TmfVNqGFt5mZpe2aE598vjLHayZ6xSZd9",
  "key19": "3RvyQzUKPbfYwHXGe7DpekGeFKGEaVdiRLvnDBtUCfiNPL1gDVYME7rMSSoCTvUKrMTowAySsb52HmzguqDbGnDi",
  "key20": "2Eiefmog7p7xHLSukz4WvW3h1zhhzpp66oj8gXQv86dBrQckDA63iA68CJyGFC1bbb14W9m3w6wDgDQrBUjKMVoM",
  "key21": "3ktey4NFpXFqoafyBGDpqrXQqZ2DuAVhMFEHNVSJH7ouoBHsCWGwuUJVR4ehdaHhbjwr8RXpCiSkmK7gLew8bAUt",
  "key22": "4wifjn5xWkBrWyNi7qGsHHfGfpVtYPzafCny1j1BsshTo8KQ7xtd4KWeMHXt1773TgJTFErQQCCVj58b5VZRmhxu",
  "key23": "4E6KXYsM6b22jpQNowq9qP6zVZMNT1b4yK5Enb9CqHDM7EqyHs6ZoSDe46qjqf1x5d3aVmrNXELjaFjRWE2wSfrp",
  "key24": "7uZXkazYZSDWkkUWUtr582M6WmyPaSAQ3LVDH2h6NibGdzHwS8Ce2o1beZ9iQKFyFHagdPHtpCMf9ij2ZUpQfME",
  "key25": "4zSatopiqYaJEHMyJVTYfwy7e1gJYFNsS1A2Fbq2iTrady6xMv7i4awUs2AhUiYU9HHHXWeZb3vSTCFxPA8hGC67",
  "key26": "CGB2PjyMyMQsULF5zLEGXPfw38Vwq6ZrCS5mupjEFYhPPegD31qbg34kA6A4wGNjcHi4nRpJ4T23bAQKe7a5YKL",
  "key27": "54X44nAZagAgk9PYmeHrjrrDnKnSRBMWpPd5LxbV3GireoTAR2ZMbu8yv45b8T7zFKs6h4cMFJ3x3EZNhfUM93fr",
  "key28": "ao7MxBsnko3M8kN8q5eVAWdiUa7LAZdu7B8ipVaMyXNmuuqLGArTB1E9oh41Y49wwLbd8YZViF79nkwPpqfgjLz",
  "key29": "36TsKyNFDtt9PzDELmHtZPCnkETTEGssYQ6vyV8cecygk3Buifu5r5cQmTDyBYjQx4ou5RzNmrYGA2mnptUus8Re",
  "key30": "5NY5BNSSeRNzw98PCvDVsxtf8EpFpJ8UJ3QSdhgcevmN5Takke73YGsG8bi3fSdbAt1JUJasPwRZvCsbw4wW5TTh",
  "key31": "9xm1U69nCPk5S1EhWaPdC8vyTvNCmnHP9pvk6WWFjn7Z11RZR18mjr3fWyS5UqS1vf1aQxkzsBHqgXWbohWwSzg",
  "key32": "48AQfwNkqLZMPneerg6C9juh8ZfHFtC7VPzwYLTWQ8z27YSY7A4TyZVEgJ9SPG6bWSgKtXo9w8pTPNvWAj9gETcX",
  "key33": "3XwUR9opKAqt7BVcrBCfnMDhQXFRSM4q784SBQgFarL32s5wnygYtaD4wyp1jhSpn6wQL4E5aAYmmE3qkjbpuGJZ",
  "key34": "4bPLUGTLQSsSJJEiQLTBcvMQDX7YLB77yukE6io5sKZbErDzxgb5Cvk2zL1CEYwWcwGY2YhBTQuUpm18A5rR2XgT",
  "key35": "3cwZp29qWibaLYFua3ia9WWBq2cvDZ5GTEscqB8J22odL7nSfYyhDQSjS5mb7QV7pfJsvjmq3GRBkTtRRA91SkLr",
  "key36": "3wiMQoqmPV9XuxZhPrcDZwhLm6B9u3dZW3uMpoMPShuP7NGQTezSbCopksagNhdYojPxg4Ckaz8JtRbDacgp3MUG",
  "key37": "37VtjHMbiygo7ytNDDqLUSCkHKr757CtggVM1p3xmVbPgAjkPVY3hcveX8s9FMug6iJzeDxfsgBc8DUwcrwN7QM7",
  "key38": "248gWjqNUuX3hCirrciJMzFPDgvE2xKWvWCMydEwFdNo167fNgBXKwD8qciEsQ9aGzZKZiLRs5haCQuouLATcnmK",
  "key39": "RmSUy2aYvsbuQsdRra5Gjs5RdqXsP5qweLhMadapkmovFzTt2pi9438QAAPxWgTY4GFhLLFu4686EMVv4PQBdaT",
  "key40": "3We2RjW8FZKVhmU4dSrCLTHGcmNc7mVNBhj8UFkeYVgujFcfmDmav8KmdPo7mkRRiLH1rryJLyKXtBQJ8j5rxb1G",
  "key41": "79eVGfk2AnSwy9CGx6nEz1ZYnRCoRwxxkWn1dpU2WkH3tU4ZfWXsvjGQixJ9AizCCUTr9ujT8Yge5u3p1wKnHuv",
  "key42": "2J6J2WA88wXSWBsJrdpHcUcaTxCKmL8JnLGR41aEFM6BfCJXmFspPUh4bVaRnjcBRfop3B1r3GAC9amBB7tXWosS",
  "key43": "4LWAuCEMZ7TpWfB5fx6mYnmHnY3Uu399gbf13JLdoaFhduBy2LgaEVNfCRgTkuz1AqhqqycSSND1KGoNFH6BWKrA",
  "key44": "3ykBkeVc2wBmumrQSyd8et4mQBWHiEzW5kzuZYiFVVZDciQsmavQb7wzyZKVLdbXSwizxRWs8SbssVrCHBFjHDR3",
  "key45": "4kQ4S2ME4RqYHw62NcDs126N4wdvb69Wg7YV97UDpQxVcGrYPvt1Vi8kpfEfuYgErvMbK2PVUcPJEGZxnADK76Pw",
  "key46": "2X239KHqkpzBSH329PyoRTy78RmN9XcYCXMPFuh6gsSda8DMZvw5juXjCDF5u7nEch71hyenNMMVMVsGa41Xi563",
  "key47": "5n7mXidQYioMbbBbKrLo4oUBUnGZmBobRYmaAUshXzL3qSr54kdD7cN7UnbXA2Z3PUnoKx4svmyUX4d51fAVvZSB",
  "key48": "5rub2qSvHPa5zdd6Ba9MJ9fSKZQ5UJNN9oZnQYRoya7L1sbACcfefoNgyLEmeYWoQQEQ7k443y1VZDFoQZZMd5m3"
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
