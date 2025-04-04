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
    "4QRk6QgYsx7RDFZvh9wHwYQ4nXG2YE5dM7VTnabqmEnx93JuQzheU1LiE5UWu9dFtTF4WjKygvPyB5ScDGibAkvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sUeJgsx13zhBGP8dnmj1CSmUFMF3Eu3VVLbLepKcMZzsqj63Bub6o7Y2neVKohBWeem9k7fdPZrJVXE7dU77Vrg",
  "key1": "3rr2iDvNuJGoxQXiiyXu4qC9oeFqm7kEPLEahmqqNgz8mnpkoXsAjxh7GWLb9bLpptJg7WDnWTxoxLCqx8WL7rZU",
  "key2": "ha1z4M66AMZ674NLA11sxKGnPU9CCJMzYF6yrRza9rUf71C6FYS4KaTMGNeskKeX1A76kxNYGdbRogFUHj7sWn5",
  "key3": "3QfJWkCTyJvPX7ZjxWky2MuA811WD6zLjE3iLDy7ZrNgRMYwkHZaURj75d3rSvrm1boUVWhQptUWktAcZ7QBwoXN",
  "key4": "3hfL8DFReFXb9JStzwpXQjPJrpxnbPFqQNemmCZ1QiokPVZzGa4UE1osDYK8DH9pKBUmUKte4sx9s5v3eVvgJ7y5",
  "key5": "QNDM4WMaLJVdok3ApZmQeZ9QkaXsonFobaSRhvqp8YN3TN7yyj3UGCTRzAg1xeCY3vPTn7P5o5QcGps8jiLus3q",
  "key6": "5QzUV66ynFT4EhQkyEmzqd132cZ7LenBLhVrKAaFfoHXsstAG5KAGwUbj4cp6i7UwmkUYy1HVgTMtV3SM5a7cPor",
  "key7": "5haoCQLo8PJiiiAC7HBPfnS4AWLQu2CReWgDXE6UDAwcirxRr2mRrhSHBiR8AE6S6rr9ZjFe4R418jRM4Ls8SZ8b",
  "key8": "33ZsnTDV9xpwKh6Qd3VRVT9JJrb6X5TrxFSupWCzYg7AAYL3y8LPHSPhDyVAAMAgAnhCzHiqDuNcbXjW6sziSAHr",
  "key9": "4D7qtv8ak215tWxFtHqDnCEKYmunkFCq8yc5ZeQfaHBqyseR5a95Y8ieo3MruTLbiqez3vFnCPidXWDLmDX3ez4U",
  "key10": "23GGpav6cqDyGKydie5hZskmAW85H3eKjwijhUZtj8GPiDNwXVLE6dTW2SBg77doasuXkKmqXFeHiX7cnY8FGHrE",
  "key11": "5kawt7pbuwWoeizmTpyb91P1EiiGbbVXuFK7KYMjwsgXg61bPVcDaoAAtMCt9MVPX3y6Pic1DLpkZg82mf2sZ5GQ",
  "key12": "5EWqBHsPTeDTQKS2y834vZEAQgJY3D6zMSPmM82GKyuvNaVST2yRWBMB9KiDjRpLUFcD3tRMNREPUv6hmDwQ1ZyR",
  "key13": "65jweveN38Pm8r1A2FijqC7vRVgx2ig35HC7Prhe3rW5hT5Fc7xD4jLf5xSwe6RoHBZGKSU9ywiMn6LXWSjgFmjd",
  "key14": "2LsSPCiwB1xVh4vjugGVze9WjYyc9qKTNeRwZGt3KgFY3iYSbMDtD5oiiSTAYJcaVSE9hGxdDv5yj9j9Smj8q62J",
  "key15": "GzTWSZjpTfZSEySGXnCAjg3Rxy1TLGEJDyd7LRbvhZewZm1tUt7YpCoVFkSC3B1YyyYvQjoRBHeHHbCqKUwtaEL",
  "key16": "3UMgxp1AkYKy5KmifpsWQEngqcDG7FkbGV4W1a1dkvCsUxqYv4gfrHMV5wcyMZ1BQcXd4TUmFhwU93AYvSYAZ5sL",
  "key17": "3aXuTqQWwtFuE9xpJM1wbz7ZKq5fT7abjZi2BuprtnvRrVpMGBFmW7nFnh28XJb1cY6ZFXcFYHay4VFg3jjGcE9F",
  "key18": "5EzcuqYWsaP1Lgme3hNBncU25KdMTyx9fM5evdtEPMxtn96v5aXFjLgnhyJLJWcztYEamGr2WPJ6Pt2giZzWukc2",
  "key19": "4qLkpiPB4ET6xgsrnr2zGcGWg8Y6dKyY1sMpZh4dxykucSxkaBLDpZeWxURFsqd92NxmffSiNqShxSUpcSAvbhV7",
  "key20": "2JsTDNjfLFE1vwSto2yv8RcdN2TjkZeGtLVK4ek4zLUB6B6iySCyVPc95Rfnt2mny7TbNp4SpV9R4fzgAAJqLXnH",
  "key21": "4GumE7jJeyocfnWwoBGZkVBD8VnKuLZHjyudgCWXJ8mehUnBjdMkzQAao2LbZTXYArAE1NpuFLr9Vk459xTXCiPY",
  "key22": "aDqFc2GCAuQjvqdUnLoLQmeBiqJQRh21R138PvKSPsxP6bDFNTspiesqpPCLUFdunr2tNqxTQfj1UjvmtSDBhKZ",
  "key23": "4LHUyyWFKDTJuNELtEJRbbjX1Q3MYe37BNySioX2aXppbeiBnfGkfKeYkx3FDihcVd934xd44sbN2RZeKdE4Qd1j",
  "key24": "Zb1cjZNkuz6TbHp8HSYtbq3qp3YbjVuQT5bexGzrF72tCReFFe5YAfmk1EnpaA14mUdadwCVET8bWHtfSNgkHUp",
  "key25": "4FbV4KN3MkLYGwahq8GYge2Z63gXJvZGqvFP28JTMRHdN4NRqWt9JKahD5b1n7CJRqAG1GYhYYsbA5xjcWSoj1j7",
  "key26": "2McZGevm2H7Lc7BSqY7EuWkAEGc22h6JDAj3D6xajN4Qi14miezEaguRWe6JzNf9k8fhyk8HvLiG3mFjLSLfjQdM",
  "key27": "369ji9jXTsH1Wqxs7HTB6NekkSv67tJDuk4rszqoUBfizMvbSmKqiJPW9HhdRbes37z87yqw1PnQrHFTY523d7Nc",
  "key28": "3jnrWjj1poXaJP7egWaB3hdMnRCeweWSPdCHWebUCUmexP1Qwmu5bBDYM1WYbBkcFegqfv7Rn4PWuLbUj2LJRcAv",
  "key29": "2CNYM7ZDeSB6QtC5FZGtxCDz3nK9VyDn3bFwd4ZWA9SNXPoNWUXoH9smi3Udy112CRZWMNhdzgLwzkoHyJufRwG1",
  "key30": "3H1PaBg2XqTaPnzSDZuxcfQ3zbrf431iKpoST9Xyqh19pyGMKMwuXLq4aSKN6c3THaVD9dsVJ9UqDerFTUZvKcmK",
  "key31": "4pXmzu4jH3uDYH7duMUtHKtaDjc1ocZMMDkCs83dbUxwU7Rr7bAfcww3bBjjHvtf45s2YBpCa5LfNgUfcnDnsxnk",
  "key32": "2NCAJdnAid5CQiWZTTaJioMHciAD87Kzg33UkGZZrkegi9q44SDgtRMtXpVPC4rUx5d5QZd5RDuxFyzGx86JfeQJ",
  "key33": "2EbvHqJhGMh3PxLCG9qYe6rPqcZtcw7m7Vqr2k4ZEjfATMsLGuSFDGuENG879DwN2fGiDsfM9GKYHm1JXbbs7xyZ",
  "key34": "2GDiywFZp4D5bwDg5P2BQW1w53Ebd21Fhx2Vq7AGAYnqGqSN2hGNK64Civod7hDRbaB1zdkft9q1uz7FKGVKDvMv",
  "key35": "2PyVBECjWqL13tckGedfaZiptJkZs9KsiRDDLPh46E7kZrK1jxPh9zCtB8Xc7CEkbjijCowajic6kjNmoZA68cua",
  "key36": "2gra1h9165i6UcPeJm1dJZoEPDD9iKd9rnGchMX42na6xMyeEEuSNoHuPHFZweVwF6JQUCSFXhjsVBFXXQDqwbLn",
  "key37": "5PJh5rMobDdChKsxaaqJyn9dmPo4fT2CVxzgU4jmK5xtH1si7qMjEfbpSrKcnHvMxXumFo7VkHmHLiAAb4Z7CXWC",
  "key38": "41ftsoKWim59E1y5CW7rtGq7YxwxudH5PAD4UZqEkfkHf4PRLw1WNUF12kYYoucLfrB7mYSmbktwiYKj7VEVsATr",
  "key39": "4A6fLyCTYkLVdGZLQE4XtNVtZukaAmCUCv6GMwmM4ppa9o2waSu8ms2X8BCbbvYEdJYEG4YWfxyuQvfJhTPScYSw",
  "key40": "2L9GzeCiaPwnEZ13aWcm3ZtYRUQYRA9Rnt3WPpJCinqrYWrTPS4zy85Y3V8qYPvyx1UYbj3GwX9gQsMoMgPUu92F",
  "key41": "5XpeYPXkPw8z9UKDUYu1638ioCuXvvy61cN5rWMiyP3ZP82JeTZmUzw27JZUCxcJxDD8W6gMXCWWQSykvdoHPkNa",
  "key42": "5vxSGPviiA2Jg6aPTmPbyttXsVBqUoEZJujbuaTdRh2dshGAe7HwQ6D6ZUBaDWRAbbYKoP7zxM6ELA4o2eMaesvi",
  "key43": "5KACfR1Ujrwdkpf4YqQF8SJyWmvLjB7Y8Se4JiWSss5BCZQxLYJgrhB4A7yWxCdXJsPQLh3b7VHsgeFGRBsedNDF",
  "key44": "5SbzewW45LS5MznsNw57agUpHVQTwVw4gL3ognUD4iFP6fXcTZV4JJswcGqn5zaNrWeGThsDv2BLQmGxvoYU12BQ",
  "key45": "4TJKVuCuRdkt5fyUpLDxR2foqYyTgF8eh76Rvw37nmvdtXtcnDQ3aeV1wrtBqdrjvgJ8rhF31TGdevuJGyc118jq"
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
