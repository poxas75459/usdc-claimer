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
    "2h3qXcdG92gkhERmsUwe6nF9eueqmB5rMGpZ1D9tezzovWLD8DUmR2Sf5Y1G96WMuEeu1NegYJxn4oT1yFUArjT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xZRVYRAhsA2qBixXqSMty9yLsxnw77oqG2SoRHaDEtDRQ96cYGETeLjiJLvQTKKPKokqFrQtBpxiKhR1mrFv579",
  "key1": "4swQUPCsYtcFkWgyBfMAP7bd6t1186SwETucXbUGpHztQtmKVA9pB395aV3SYcNVKzT5h24DmBSKaKt48nMpWEo8",
  "key2": "4zpBLxnwv7ii1hb8nM5BdfywsCVpoLRBioeYYqfVZi1CXPJhu1oooF3Ja7BL5BVcNQgs8JXUSTpe236HnuyxyD85",
  "key3": "5MMaQCWaXTiU5jmhYP7sysdNDLphtr4RnwbFuLNm5BGw8Auth2PvjVoFifN7kug4x2Ub1RZDMeXyGteYVbB5wfDr",
  "key4": "2PaEbbLCijbrx1FtUzPdCLsYG4rhhFkJvfDufYWp44vEmcxBHsVUSgYJCcYNNVC5mj3WW6XY1x97nP8zpochq3h5",
  "key5": "4L2jL8wY8uTzg2DqTFVNrANaiw86aG7kBvGGx4zzLiwEJR7QfvTHzhf8NjH2kt9apsXWhr7qb9qtsQ4R45v5sz2Z",
  "key6": "3sWUsmUK8uwJ95tWzkyRnXBTNN9RNczorDfkHiugUsBf9RaY8JK3FV2t2a5ncKrmBCx1ApHVDZeGKi9wnSb9bnbp",
  "key7": "5hbd9RNgxovHUeEzoCVyxtA8wSzk8fMfe6y35VjFuBbWEEUaMjoiat1L8sKkmtRUCAU2KYrph5THmRdSgG4hv193",
  "key8": "2EtRZSfHpHimKLSGok3CqtYPGEnJa3wraYob7d2VHngV4TzwpwhQ8kcS6ZmiH9qfBbgsjy2fHnDqPXgoPbVqHuaT",
  "key9": "46YLYcAWaBk8abavJo39h692rLpG5SFcHRruh2oPGYwnVroAS6aVdXmqsRbWKtiuyqgdch8t8LGhN2cqAKGiHLzh",
  "key10": "61nTX4ojwPwYRHrhbSAx9mHDgpwP2zveGk6vEJDMZ38tGx8BdTm15bEXeXAQUkY4rQDaZdSj6j7MgTy5JXd2g8WS",
  "key11": "3AcFwqSTZuQriaLQSAMEAtzGwXzS47rAnKiAdg6Bx8vSYzj1XFaVezrt8hnWgynKBKxpJAQaKEPeRfzvFahiana3",
  "key12": "xRetoXx3YB9JQukAd8pEFqLGvJGbFvCpFR8Jz39wZWNU8ra1LacSMV6eZu8B9stgCHFRktX5vq8d29uqfnLsWJb",
  "key13": "4vRPUduVskh6994999raDvmqSWyLSqcLyNPtxqAfUjbZpFV7HpVQ1AmKD6qyGcDVBBCjDFr693QVVCGiCJNWmqxz",
  "key14": "uiwpKKPKAhMyYtjcDCMFeusC3EzeF3WRUGuHBZJEqwHmAjs3WWDPzWj51qASdd1yuc6LQX2zNKcaEphhyrV1fYe",
  "key15": "32cGVF6bczcNMs9thQXZce5z6up8LefAHL8UoahNvmY9HcF5AGEU6ZL8ugbNz6oxzKqdVDbTNoN6j2Qw1hsDeE68",
  "key16": "4962r6XXmwCfkcAfQBwrMchURLLdMF28ztVBGDgkwPtLBBcZzJWMMXeP7d4AynwesPC6YTjaJb9GwEgbAzrawSC2",
  "key17": "4rx5kK8Yn5BzjXyUrkd7UeavK515pJWibxU1aewi8Xs8DndiL4jEwYqEvPoaJbKmEPpWK9P8eNPrwZituxUiPAL4",
  "key18": "2WP8rr5MeA2Dmu479VfMCoGgWJ6k6tSQS97WeriQUL9b4hkZGyFMCe3oeCNBuLdQtjGNe5w42HUdBCk4CybbzJ6F",
  "key19": "4kPzGGpb7hVGp4HNu5LA8xi4qxzLZjwVc2VZVzZvWfTg2q6cgC9rGGWUb7YG1fkVKPgsHzfLgZs7PccXt1kH8QKa",
  "key20": "5p2XpD8QuVwWrG4MgJwA1VaZTezcsv7KTTmHKigRRXckHZPNjvNV8MC9ARWjT1ESamYYaGf4SYRyK5D7mQ9RJQSE",
  "key21": "4HhPmEa7Jt1decaqJbazAEVacNUMtmDt5oXL7TEZHrSLQwzAyCeG6dupZxLgooR7wwjdzGNMzYbG24f9d2JAkfbh",
  "key22": "4mHapNZHCA6kYKWTWFeepaQKoynobJKKx5u4sLET44y27zu9AaeVqtM7LwU1t6NG5LKKySx6mUeDeriMq43jUHvo",
  "key23": "2eUhM9oSyoWXg3TJcjSHHynPbTEKAsanUwcoNa18FkHKcz127QyQ3Q5iQvxNNKE2gkGcoZkUYvx8vggjBfUSbnMK",
  "key24": "2CAxFryFemqrYJqJCfAWPGjYtjiDJVdrSdutjDy6AiwYjpjfbFGWGSYVZsk2eMDwWKNUgU4RH6qfGBgBbNfemWo7",
  "key25": "2ocbVave7ckhXrt4Vzwq8ZtwKwgKZ8MKT8SZnEUUUXVo9b1cLET8fQqoEntUNf7ykeRpgZ5LZLJxkP1vnGSYiyRE",
  "key26": "56nuosgdbEEuRNAQUzKQ44fY5LtJr9oBGAgS9BTsqpb9pBi1uevnRKViN9Zx2Uty3NUbzDmM8zK5RbjsokQtd5Ky",
  "key27": "24MmKEYK7PcjMphXxXg6Mn5grVS21wVXoxgGBB6y5zaYu1UpA6KgmTgUMa5PJAZPATLYeWUrgNvwdk1imJeS1RTJ",
  "key28": "pGeEqJUiAfaiGf385FLrfevKG8qgiqgMESRFyXv519XUPBZjZPHYRnMrpkqAZZEBVa7Su8RkTAD7WRy8j1ru5wt",
  "key29": "2hGgoGS7CdcGb7rPjaLs5xzzo7RzrbswBaJsFVgFBCxygS24CyTYFzG1bUDBiRJp7AVx9o8BkydfBEuYq2mugrzN",
  "key30": "3opLMMTki8WwUhP6SmwffoADZSrwR3kRWdfRHxWiBsXtAWC9HEDspZneZQCBmkFY22bwf5svffsfRUQiYwb3bqDn",
  "key31": "dFLLJBBJxSGpMZApdUTcUgJNXiMehRfYHvAZL3Q4UTvwFv4eYpprk5Z6dfkoZwyRZMhqEKKpVnWpzodC5gbHdU5",
  "key32": "3LW8XzoocuzXdDa6EDpu3PjDKeQdYnpgdpCR3ksLjidrn6Qjy2MYGBJ8HZKzKUPGP1tgANc5WQKrkEiBEJEG4xQQ",
  "key33": "nH39cX5S2nQ1hKuSmtApSEtJy2Gtuh6B8UN6fGjnxaM4BtTMRocyvW57ANsfSjU3R8EfybA4DMnWLRBaoPeSQfK",
  "key34": "3QiV8jSP3LQrnznHfMcXvh8gVx23MpCpGU26HMW5VbYXG9Y8ndvbs4iYKdEwmnZtaposTxhStFQ9yGcrXkxBWNgV",
  "key35": "3ZCwgb4rfsWYAr3wvcSb4xVo3s7wwPyUtBT8koZzyqLDnQbfm1qurhmF6sW9Cp7pBjYWneLiWB8tV7W67kNL6Hwu",
  "key36": "128fCMw3nE6aCYZuDtBiVzZEyUWqWr4Zg9weTWh25mLVn2ccybJNH17MkvJJXRct9epb1gj35sYf1B3a4QQ5we5V",
  "key37": "wJgEfeBQ8p1rsut3oaqYyMUBxq8JwKAutony2qjtnWRVg822eCF2t7ofPiNzuQFUmmtAxuiewTXnauFSjdQNhAe",
  "key38": "5fq5KDErcZhYGLeAUoQc4amP7PvTjaqXVyjdkBoJMKzwzQT3rQZL1mnijaM5fa496vST2yEPtYPsP4gK1RgAc3X5",
  "key39": "4jL4kXemNTZDurVRPB28MQd9KwBtkKb6BFRGKMcXUWDzgsyJEACLpZjXVusFuDM61KKmNKy3poRdxd4ysGBgtXwC",
  "key40": "2R3wMHUfuDQkvCxNAWcrUZGvb4oSA8weSXEtgX5zdi8vHowjZuBGMXmEL82tq3zD4UPfjSpNLhEPntfdQS7PHT1v",
  "key41": "2oP1NbPeMTs3P1DboQpS4WoVDLaW1q8mrJN9i6QL1f2ZoCPDkcYLC1BzYxaBreyZSYDoVxscawuYQkawzFRFmpp2",
  "key42": "34YJisLrAyGLUHGHzQpBwGXSFYAc39UCYYuyJviYJqF8BDpPennDkgRyksguZCKQwXXWeTDES4c3p8MBCyqXco8i",
  "key43": "5gj2TTDYuBkL5GQZEaaUguB63sbyyaXRq4Mtq38G1RyHrv6oxfRdvmav5sUZTFMMSdknoW63nWYkQHUCVpTYkv1a",
  "key44": "2QRJWGkLW55uTdawzuYpHzVaGMXKcuunC8zsXAnQPmizXtUDsVTXBC75BaPyPxPFyCwkkh3Sv1SbcWumfKty5tnd",
  "key45": "5dpoF8BAL2BgdkyzLtqSzwLTHPue9cuHzsUVspXQ9e5cRHs3WZHskNSWvnFFn7xxbVKZZboQF8vw2BKs2CwGMEJL",
  "key46": "4iVC9BAHXsuaGyAWNPguLEQgizG3Dti9kFNEoCBB2cZqvFm9r92ABMcJQGCDGFFRE2yBFE1NkT8Z3Xfxvc8soknw"
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
