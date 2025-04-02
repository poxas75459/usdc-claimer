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
    "27bkrYnRym63pUQq66kDi6aDS7H9E4anmpuaaddfWtS2dHeTvqmkM9LkmcrnDEY6yzFetiKbwwiAsVgysQ1BYsTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B11RPBs5yGFmQ2yx2r89xPg9vKFgvdoXPjXWA37JQk7mpsDdMYkrGsBaYmTTVjvy8AKMJ9k31Vmfnd36JyEDvjd",
  "key1": "2wLHDs65vaE78jmNdSzznKH6j4ehxriNCvcJ7ut7aFJw8EaKHBmu4v9QK8eE5ppPbYv6B5iAXDbCYitH6CCDcyW9",
  "key2": "DBWztJbJcGDM6KBUGhYMNoWBUhvZtuaN9Ugg7JQpH3sKdCdehBEbW8EpFWZ3qDnxHJgq1TNopfu2gkjwhAHBB8z",
  "key3": "dJvP3PEH5bViSSu3oET3JqGG9wbNS4EVE9JH5oDsGHyDgiYumjiXPg2EZ5ACrkG1MLoV4qVBq2HPBwu3azrWbNo",
  "key4": "38Sx6cJUzU7sjgqVH7WrEmJ5kXDwzfwzkiAHgdZ2NXsKcXB1NX3cDLBNY7TP1T3rts6EgthqQeiAcqXnPD7Z5AD3",
  "key5": "3jMeX2z2oo4B3hmsanTCn76Mja2LMiCJRTqoGpq8QThXzgbRhHkM3j6uu2nycUTbVno82rbwLLbvdpJKDJM6WaMr",
  "key6": "4PiiYMw4dqqrpSgCc9FGrwxDL9XCxBkdwGPraNDFTYTnJUiuWqRrrgrjtiDERyjFULg7QsTH8ASFyEkLVdChbVFD",
  "key7": "2AbhiEvMkER137JxsKfjqHp8iAimXrLugwbRQqK1JenkshKwhqWaHVPotxumsca7KCqPZMD3LypawKMdMsLePF5j",
  "key8": "3jB9ydE7aMYvohnEPtNPFKc8DpC8jKZV7UmrZ8T2ZEJNt55W7oDBvo9HAMmKFGPxXRs6fKu5JH97g4DbTMKj2eey",
  "key9": "5tqJiCw4cwpmSo18evLQ9QjjjJ2dpBh2eZ4yjMrgxU5cv17NKZgLec37StnWdnFCVEjECASg76aFWx6RT5vsXWrw",
  "key10": "4giJM6ycgFss31pKaPYwXjdvn3nHMGh17HX3gzCKMJPkpuJmBfxBV6VMmDQt7YkNU8mxqrstjLm72pSx9eM7hoGZ",
  "key11": "3jVbhfQVFm26RtjHJ8zvvhFxjRoXzCPYRYxFwNzED1BPK5NbeKz6GKvuCQFmhEsNfGEC8xjnqXH5yyVa2kAqGqDr",
  "key12": "63g9ta8HVnTXyy7VhcYPV6wYJSgEW1LfRa6CLyQrcBmJXwSYfuHHTNXNwDj9y6QxwF92etaRhBVVmCi1ggwohi5m",
  "key13": "2VdDziGAZcD5bLD3i8kMM9hfZpCebY1JSjY1Eo8hBoivg5pdDXUrAa2jorQ1dALtRjmzbqLv5Y2tTQk6euokT8AF",
  "key14": "386fB8G28LPAojsoLVu76vYxtwBnDuGhS3qkwhmekkYWEgQUNdTa35DQkB6omHBya2t4549zDvBLagW8SdksjdrM",
  "key15": "DFattR2VbwG2fpoNaztm6z8EetDNYvBG6nevC9YWh8Ky9UJpkQKLkhvviifAhbhkwAyJZu4pXNQeVSURjHHTSQ7",
  "key16": "45GwYocz4hJmo2MWFpTpQBQMtzwy4xPvsDfKSWdvNxbQiSpcjrd5ZAzdfNVrAWJ5eBojcz43k9YnUfrXfXLpo1b8",
  "key17": "4HsLqpCGATcNFQZ5Bb6ejFVykrZ3MU2wkbKK8Z6ozaaA9J4R6QqRJzwgPoTV23xRYECc7xeVfd3X1Uqi9pge8v7d",
  "key18": "5YsCqmdjHUj39DptA6vAFZMpAcRVD2nwazTg7iJjpxCdPvcaxu7931QUtr9DY93i6wcinMxsBSu7gPvcdGaeKZfw",
  "key19": "5GDwUHxrh18RhCWHLKEvbKvVYeEhk9pCpZu5hq15hMVRfasxfLtnahD66XRx8EURNNzbNMcFaEnAcqY45zFjU8RL",
  "key20": "3pJbtYCBq2ULajMbRnV8j49QGyZCiV2cBPrdkt1xTvMwM9k1D2Q2yV4LEw9bFX98SMSe88LRxaXJsAwdFEkmdxyp",
  "key21": "kvKCYmd3nQoS52tDHj35pyEWTXqfaQUQ35d6MPB1rcNL1v97zw3nzEXppK1bhPJXhDWYFLp15Tr58hdSHwp8KJz",
  "key22": "3uibh7r7BoR86R2mwWr2A5bTdAC5UPAEjVDbfD9gE14J9VPr6Z4CT82UaPwdW2h3ctAHNZEJKNntFGa5FSKcufE4",
  "key23": "39ns8g7aE5foK8miVmh264TNxgKxXo8jg8KAjdHZyj5LjMfkbHrM2skHA4gi8r5mujMWW5d8h8tatgLdRuMbZoe7",
  "key24": "3wwxtmw4LanhvjN3DESPespwaAkxukfY85Lzu1Qm93Bn8Gwr5eMEJybps7UCeRqqrzWf9G7WeTx4zWJp5uNFwgbg",
  "key25": "2BzMeGMDmW72prWQp3SaB1L1ocHywiHgo3AXLuh3YP546pAkT3Qj2XvuK2f66yT1jih57nnfs1Vm3bMoe2EXXLsd",
  "key26": "3Mx49cUFqdUCVY4G5xNsaCGBoj1QhZEeStq4ZMwtkrUUAQ2oYUCuKDbLvrTs5gu4NzZhtWJLAjd2rwas9oQLYBTi",
  "key27": "4YywVWVf4zVWBjSKKePgSyM6SPaFbm5S64KuyBefQ5CqaUTJchAYW88duSMeWqMF7YKDuAwpyEQCrb5WF2NRG9GT",
  "key28": "5YR9gzk5okPx9DaD1FmHHiWPvyvetyqvLRjhFYEVDeDfLE9cZr1WNWNnmhDRYKPPkkeBHbXsYV9ZhaYwUfFyf4KD",
  "key29": "2SRGgHd9UR7hkN8KJ2UVt85ev9eSyK59tyCwjZFirruDWfi4HPVo9sZXxBuxFhMV7aKdCpLY9DhLs5ATZk8wudUq",
  "key30": "55B7jMGdxHpcpj64Bbw5DunzQwVWXZGx9BiBpE1HuzNiMwB1wRgnBm9trSHKru7NYYTi97cvNNNdnRH41YJ4kmeD",
  "key31": "3G1h9g1fkFwsuuUm6Mfie6fZ5R2TRBjz5ovnU6eiVQZeoVGDzgMWJApmtUBTV3Gw9VgPUrriPKPUWHN6rYveS4mw",
  "key32": "eoKxmeMbhr8C1q86ExRZmwS2MiLnodW9bdoXWYvr55mBFdfWAEGW8arRVJ6DiMCA5owz95bH7NGuDSqCMogFGJ1",
  "key33": "2wi2MZUjX9R8zZFXGg5Ny9mEqh8UCxNzsW8htrtyiRHrGp8g5TMpkH59XwTk67pEEXNpemAY8ULpsrpZMjYA6Bh8",
  "key34": "5by6jCLh8PPNcsBoZ32KFNuxa7f6ZKZzZ1eUzCF2JMzKtGqtWjHgwja8ZuDhjKhvNZGWp4tywL6CtKwAFdphkvjS",
  "key35": "3AehoAv3AUQ1phxpMhcDUDcVt1QauFyD4hDPNnxF1SdWAASVMTovUiejRG4wr41jnDNprmM3bDY981B3CK1ZhihY",
  "key36": "312KrajWwBvBqQh23AskTDR3LVpivUk6WSp4ft51vw56N7xbnStcyd5jPMiv9Y3RHHGxcNRkWe1P53ZgonhURp1z",
  "key37": "5MnkNM9iEexmopSqvNSGPBrjq99qjPp5UZCAaqE3bUwN3QQfo4CywK8F6r1E3VKBtNnErizNs4VCZqCuYfKyV1qq",
  "key38": "2SUJSdPgh6x46SFLSjcWTYBZfqjfGfAR6HceA8eVUqoeqWFFi78WvcAHkXtSHhETs7SiFJa5s8vCUZzcKAoS5zec",
  "key39": "s2VQiM5NwqGrdTbbRp3Y3HjCmZHP3o6VJitky2FwtNSgASBtiDSLWhZvC4tMAVquMw3qr2A558U5kcrStWNJyJN",
  "key40": "3e3dFbaR7EXxhGfmcxmjToD2eDX7xAczySauZVRsVTN72gf3bo17GJ7tJFQBRiapq8KbNKm1yKcJ7JitZ36gbuwV",
  "key41": "25yJKzjCN9fGm1C1JkLMb7EsY2qczxcUPAxGXo9nwVY7PnEvFLECoaakNnxtBYKA5rjpuEirEjFffE8X16MrWYDD",
  "key42": "5MWHveTVnyJLPFNDmw3nEQWJCX3guDanAa96zckMpkq6Rzq5VXcibWY7UhQ2nkeEQKvVqag1FvrZauiJa5biuECz",
  "key43": "52Nsadeiw9Jx88X3kaddh7LjZoJ5uxBWAU3GdZVKoKAKubcTrdcq4Q5TSnASMPdSimNAq83wQFdApZB1AzXD68j6"
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
