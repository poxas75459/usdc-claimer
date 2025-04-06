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
    "5p867zR8Mqwr81Y6uvvJhdpRWucJYpPfo4VUGumC43Rhj3uxqRmoDFDpj2xXbZQKB14JgF2ANsHTrwUFLwLc1Cmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37m7eLY7QfMvrgWspHrHCiZCk2LZSwCJmj7AxvBxRmH5RVrBvqczUfFTcnZWtWApGu8zt4sYpvRbBFGDn7jjtgeE",
  "key1": "56K2RqMas1HJR2nuUSxogg6cNgGFapFecDXhuQW4NyXb1BaVh5xW3UWHLd5kVJpCXyLnSSGH2SEMkwws76MVrekz",
  "key2": "43SsaCbu5orEVHfaTXV5S79rQLVPahpPEyx1tPGbEyrnJFiub2zwnKx849QSkmcLQgUz86ZV8zcF6JBhoR6EexJn",
  "key3": "2p6V2oz7JqQpJjnh8kNqC2HxwhMydyKrDz3b7G3VZqUpKi3awygybaXEHYgTPRQfpY8GfU97rJezvnhoPdnCtqd4",
  "key4": "3wRuTgfgkQpdEGF2nwE2xQTaytoToEXM45qr6Cr4S6jBumC6Bg6Fctn81GBjZAKjh8hDbvSzHFUSxPWhE9P68i4a",
  "key5": "5XXuU7CYmk4k5DfvM6gPXNfJ6piSUvjeTFp8jQSZoM6DQYENMDdwDmVjY5yEzLvLM9GjjjCEdhZPHseLAv3HfdcN",
  "key6": "4Tn9MQ8fLaU1zpueFu8HupgcMYyvfbGyHQJZYernHfSHX247nRjpd46GNMC8wfwhwGWKJKqB98j3wXq1JS32zY9q",
  "key7": "Ry5fcQYoC5WkHjgwiAmrVjP1TnHXJ97RMN3Ca3K8VthrGybaZNXKjQypemUJfv7hgxTMfijV2z2xH6xtQBvyNxb",
  "key8": "63LAXVcGffFFsorDaRZPXGVS5J2nJLybspXdZybSZVkXi6cmx8Loip7YxGYxRSgTvyRACCqY9r9Cf9X4YdSsAgTh",
  "key9": "2Z4XV2D4B7zz611XhmJimLAbNF2B2umCDMDY77QiKzYzg2onW37Bsh3aB2t1Hc5XTY6mGynTK52fSidtb7deeGCS",
  "key10": "4mNmCg8PZfUeUpshwCBYSgJ2BpeErX6ZG8Uo2hhmiCGuEpAxYcxgsr4EevzT8YLGzyKCGiP9FAmeXvXdxcnpdkPN",
  "key11": "z7DmJHnSwjM9NjWeU2p24tcFDnenfvgcRZitb5FyGBbSSybbS7h9RRn8WnKXFZzxgr4euwSorvSrJw8FVCwk1At",
  "key12": "3pUNDPMDXAMpmHTrP8XoR5gHuT1CUknMfEc12zeb5DrTqxBLE4K9YXzAwFGjD6tP3F7yJnVz8GuDvM61andcN9wp",
  "key13": "4GNx88N479w249CG4vL96VEPmVgJLgr6jG7GbVxv3CiC11KmEUyV3h4j92dvRfzdZvMYeckT8uQCasSogGjZ3k7j",
  "key14": "3fvBxXTLR79wq4uz8VZqE3V1YuVQTzLrm2y5gShd6rxviiqfozSouNAW6g7wvQkv1HDppbda4msYBD9GEbgYDqLW",
  "key15": "RNANtGyxBDaWnBjwuuF7NqpsDLFDk49L1dw4FH8d5SerfWbZLZLsnMY9nbneoKedK3NbhfqdEyDzUaq5GBG5CUV",
  "key16": "4iHNhEyqdaZzV8f1d1vFrd2XQhHGAEX4KRyqxtPR4Kj4E9kLWC4g3BF5deiBKXcwHiGHQK1heo3oR4iojXga7MT1",
  "key17": "5maas9Fsexydj3xkWAuE2AjvB2WuV4zXJaAspzFBTD14YUHtd2CRpSEefLZ8XfW1Dfw6iY7Uq8HrAd4V2Pton29",
  "key18": "5HFnQvK573eMfCm5B2HBHHCcx5ntbL2xZVZraP4Kq6GkCUEuyJrRV1R6UB2Dakw6PTYrnNq4vP7JZnX6hdt4Z6TS",
  "key19": "5HQQW3rmwsfHpSD5CaVbPkj2s4k3L7PcTor16N6kUt6UN724dNyDnvRz2gb4gmcfoyWXWf6oG7sqLXXZtYU611zq",
  "key20": "5NaG1sWsPN5keLgUqg4iQcV9zazxbFnHvhqeKfHnfx1MLCKxv7w5dqC81ynfnDkGK748xky7RTBVztZb6FgWoNWJ",
  "key21": "5Q9wLmPCqK5VWAKZHUF99kCTezsJxXpbLTXuN9vGh1wbPbBK59nKTmQVBrgujjfdhLWDHxDGx7tYRUczmKGaLJ8",
  "key22": "5ydqFe6wVmAtV2Cp61BRmcngPxQpmd6cYUNmsTQvwJCcKsNp2dWJVqoWUXXxfLR7SwfUdLepMxzSNhMJe66Dan72",
  "key23": "3LJaBNHeHzvu9ykvvNW2rqFG1yhXRCux9Ck29CALW2rMYAhcg51Wv3aQnbHhnTh3ChK99LjbTYj1sQUmyX9qy265",
  "key24": "4CarU1wE7fbXxSuH4vA34YckJeAaoiT5RRKZj8oEdxST2pJof9L3JLy845NxS6vjjCdEQnpG64fia3a7bZm1y6yM",
  "key25": "2eiuoVCbeYzUS3u2fEwaUzyD3pS6Q5Foo6fv7Yug3QqhiRbSFtLR3ynb7VWxo485D77N5JcfNnoewPnRDa6gPrNE",
  "key26": "zVQ6ds6my5c8My6wrEqt81ofjNcLK2vdJDa9b7LyyhQaHHAyiwxWy3isyfEmkVf2TjHHm3Jab74exYWKnZvuQpv",
  "key27": "5syj9Yeqnb32YZyriCMNRbUZpAHACzz2Yk757eCAD3LdVysA12VRnt97PE8ASPsMP2Jk4tTnnxU1eQUmspTS6nD2",
  "key28": "4JUatEeiMCFnzc76L1GUTTC3Rs6CxtTBhj6fQjtekjx2CwbFxbfshk3dr4XLkye9vn5Y6j3aQhU2BeCsV1sVaKuk",
  "key29": "2uAezbtxvCDvvKC3uCuvr7agan2GfiHWuSQhzeu5wCbDkyCLSZtXL7rurMz8nP1EXeCQiqXPJfUxMNVHysbsrZQN",
  "key30": "66g5VAyVE7WRb1v8LaMgiB5UHJGJS8Q5ba2neED3WLtyuqJaRuJ7gxzWn2X4Czkt6GqqVfLCUgHhuULDruw1EK2Z",
  "key31": "5n4MkqVe9cQqvsqUQ8XHuFRkcqWrCzVPqBQRNZmDBC4vkig5gmGNReCwmvNVcr5YnYZWkJGuTnyRM6xJ2UTDztK9",
  "key32": "5zhqDfXAiYXbqWyXLNWugD6kNR7XDEvMKV1uCYSFA8kB9kP4AbNKB3kMp2cpVc2goHwznPMKG3ougaZ9PhLMsmsH",
  "key33": "4aDhXaBTvfwBWXfNMcA8GEsMe5UMVWC4qonofeVwisNgnZXZRZt9JD9kNNMU7TokjB398NFkHQbER3VfbjsRnKNu",
  "key34": "4PrTR9dRb1tSXwd6vR6NN6ohF4HsK4aeWLfnp3XXLETmmuyBY44sKuTJgnZer3zqReiLS3Y8Tf5QXhJJ7dwwwFK9",
  "key35": "5LoCU7q2qpnUUuowV8WFMVU2hbGvjxU62ritydPhbya7y4i1ZXcc1k5EHXPovTcBnK7Q2s9P2RRgbufBgPTWo8w",
  "key36": "5Hh9E661ofw4i8RmAAHRzo6e4pKDWLwjTKTSS7tyxhgNAs5dfShrD2eH1d4kmh3A4exYJwiVYeAQbn3Bgr8ZqMq8",
  "key37": "3F3uj661X492be9rpETrGVHZYt86jAh4WhMnDMpShEBswcv5rpvurckmNxHbfLoVcgx8B2JPD5BTu4ewWhkLzfjv",
  "key38": "5MgvXoTwEWTkq7LHCyUtbQ9r1kN6eHVBw3YcFWGNsHm1puycEt1p63cf5YcNjA1dZ9EcYVmsZqLRAQDbu5hEpvkR",
  "key39": "32r3rkPnHgBToD8fyHcHjy3HNeCSeiQn9GH8xipePBBXUhFX293PDXrWzu9SiJwY6spqyxy8RmNESEDc9UGd4Gx8",
  "key40": "2Po9oBjEusf1fo4qGQSNHE4mdXNiMtfJCRbE9x9TvyMsYC7YVzX8i8zY3tqixBFsogFHHBhQARs7VVpwD5Sboow",
  "key41": "3YHs8L4Y96eK8YCsJS3j5U4Hnhma2ZBJW7CJLh18NmYR1sw8sLp9ZZ2shQr1jGEEbCXjES6D2bjxjbMw8vbAz5hF"
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
