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
    "JPC5y8NuC17xzdQ1DnPgen2FCvsD1zczthTmCFSYzYSc4F5SVpoyQNrQFyGBMbaoWzCz2ELXR8y7z7X3X4x2zGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TSqAyLTvvzNyN3R488JHoXgj8v5mkZJ6HJQqdjyLzVk8N3aupwyk7kkCQ465N5hxSvgco2r2LM5N2b6mhzjdEJD",
  "key1": "3SEG5iC2TnKHP6NTW5i9Cbtotvg3kRRaFHk1Vj7VNKCMxvRrZ47xuHp759xma88g5X8Gk5F1sqYhQFiTLvo2MiNa",
  "key2": "5SFAJCTCTvWuCGWfqNgFFUo9G6LyVh77bEiff7Gsrjpexm4knZdhBftqPREq94SCyu2H1GarhCNjQc3CbxzMiwVW",
  "key3": "62puk4dNNTVWD4Z7ZXatXxGte7z4h5zr2id3cfZZTojfghyZTkGqp89VbgGv3FKdsf9A18uDStqETxTCDobLshZP",
  "key4": "21L9mzsrBL7vax3xbpvpycFmfRVzUAkbvwke7uVmdVxeox5n7J821gwgmDueuDmuWRSp4n5Z3Ek4ZYz9ewZ41nD9",
  "key5": "2oxWQboPGYFHnoHWwTtc6WxMazwXkZNpEpLYRNtVYdpKcSFn19q17dPtHJMmAyuj7b5NmnxH8W9ATJWiRTktMKYY",
  "key6": "WGSt5ZkN41Hiir1u3GoB4m9qTmYmNQWVNKK9J2wwUrFjgfQJE8buBxSPNdwbdVtr4JUosCt9r1XUYrpMwS2qRPP",
  "key7": "2fe2ZbdCEuyVcc2zGLTVdLp8xPLx96KkX7M3kuuT6dFFaMtAnmUikkDEqvckfiXTuj7E6iSQxELU8EXrikWVvbk6",
  "key8": "3P5VtnwhpJbbtSNxtGgpbj1q5mgRbvzNp688MVmP1erXBuveC2V6mQ7MSqspJ4bPiVjvThQiwvYdWNEgTjXKucEV",
  "key9": "4mk54DR2b94NeHSoLdszmycCYnA8C6BNmgcvmDvd12GS9k1Aj4YDaZT2s3pCafQceJdgfhZs8d71kUY5yzA7taJn",
  "key10": "vJYttQfmUUqhmLp3UYTmGw8KXqKTRrUcpr5MuPg6rDPG3LgCDVrVGpaKdw5x3froAvJX4koXXRLgH1rC3dQSEwi",
  "key11": "2ZHDA7NVxBax1bhgC4J2wvjjGEL8aRbzj71iFjsTtHzqRSVGwMxpzhm4yd58c7ptqRS1BcikKsob7fjjUEpT3R1o",
  "key12": "3Msq9AtQKgbPhJZsSETstKQgQY8WnpaULQdUGL27KUeYeNMwYvSArn2my9jqfBaspNEBESGZn2we4DMcuy4AyKLs",
  "key13": "4b1eU1sPJntWcwFJHJupzmk3ENi9zN7CJi1usUmGpG9HBbXK6KayZjP1L1aaabrC8vuCBLjTCeE8UqWn1dPRZMmu",
  "key14": "63zuR6V9WpJ4eYcrEh7dadSdT94SnxuNvKsQvMemqCf2vSyqFBKng4MsqSyYj5QGkVX9cPMBEQkbFhRBUeaBhSMk",
  "key15": "2n4mUhywJaSfLpTzPjTu7foeDHGZqetYNjR56q6PSRvKAtBnZ9tuiioqmMdBn9XD2TkqmZJpt1gRJgHeXaetVQdd",
  "key16": "4Q4GmhyLojrn9i4LPF4Nd973EtYa5tRjkvQTBj7TaTWL5zQKyr64HKx1rKfNxj1gfX8LGCEodNuxb8FCZ9pTjuox",
  "key17": "RoSFmacc8GP6wMv4rVyCDssj76gCpJ3spjYSURetn2wjsukooi3UCPVEqk3dhUMJ6ymoMR8dqby5gPvnk9E1pg9",
  "key18": "5S9oTKDbwLaDbRZgi51qtnVJDVLCtWgG4LeEcoDEaXNTAS99si4eRhzgqqPWXgb5rm13AhoKfHPdLrv2gdQikDtp",
  "key19": "vzf5jeziwiBwg66942qVctHL9n38jDRY3yNtBaoFagE4NaJRk5s3LDWDPoK1iWyzK7sFGV7SeunLDvNLnu21nSP",
  "key20": "3ddgNFbrRDfJVBo5GpugsZzZVpUEYfk466t1rCXXCxjUkvh2e9R9RLQz9bAmpLpbwMmFFxYtrAuC72mYAG6Z2KcH",
  "key21": "oVQKuqHYHvN6oroafcUonBpE13y3dMowP9qoWKLhVkVLA9FK332eG25vhcZnK4wugS5fiDEbN3pQDLpXk3UxrgQ",
  "key22": "2YNmyBM4ovPmY7s6BVxHFMcB2TcfBnsXZiHUiE4iaxN8Z1c2WQ5bghnSYZhavCyr1WEuayMaSQ5AbzmFG9xpAU2A",
  "key23": "3jzsck4FyS1boceWK3BTWwPZL146bHxo3xrsiiq9WrzQxJAKXtGdTy48zRtYZj4GeTVESTPdf4kE6RGYdkWea3vf",
  "key24": "3BHD35UxwsG1tCh5Jy8Wb8FWXCdT5Y2dNM6GNdofpCfJVkbsrGRnWF2n9rQrefRejsZfW7SLLyxYXSiHMhQZRpMd",
  "key25": "4WnRVWKUErD5QZyRYyUZo7NjdjpiAMo2VtajnFT7FZcDCW6ADWHHggzpDqoXdBXQ392X5VW3sg4tgcSnST1feET1",
  "key26": "5fCnBdZKCnshV9aQD1LyoTeKLnpYhTJC4eQckWGjV5ukVWsbfEA6VmBCj1ehFvJigC7CWj4RNN4tTQ93mBwC1DQS",
  "key27": "65ryafSa3xRskizWBPoYt9dpG49UaR6Hj4RiTwadSP3k4Cygbwdfuesvagz9GJeKYxipz6FkW2HgmL7jcGJPHmCy",
  "key28": "49aEV3PPXDaxiMijTi9Acwrkp4Fv7xSD44FQJwpppaWHEEsaX2ZuoKvTEKfzTNAroDTMLvQuRgDbdBtGfMsj5yYe",
  "key29": "apdPvn7qFBTduEpTfCrxwDeKZWwounxWaMyJ9Kin6tkPBBXZAiD9k9wrdCg4s58BbLxAjHLZR7KiGFD95sh5vdo",
  "key30": "2CRyG6yf8zvDftses4Vp4aR6J6HwWp1ajHNZ3yKB9jigcq88DLVEoD4oKuf9S7UBtJQWBYUsSRac5jK94XXjCjUW",
  "key31": "5qv53XhgJRh8MYuoDnGsCMwGKLxothvdsAJU15vQg4oFZEa64CfEcnwssBez8jnNi9aBKfXuiT84QJvUQEhiBR4m",
  "key32": "4peutQJ5YVTmhmZhecyPKXMLzJcjcynKDDJDcMwmyNLLDwNZVQHUcrzNoSaK8WNBYYMEjPJDcBYCgwByoyLL7UWM",
  "key33": "422k6STcoM1XQctjxMbww3srZ7YaErTinEfuDNHMBGmvWfKByaCUz7AgXKjk2yrsMAmkeRVaSF3bNT5SJkEjafce",
  "key34": "5nPWFFmXGrev2sY8ECxs49b47i9cm66frVHnY5BqLih6WbUh176cLVDEXiab31pagfsnN4B9yTcyDyufVwCoth7n",
  "key35": "Q3LzXRPCgkPhVoXsNPBbmfC2W52EyfnyNSb7zUHqk576ooten3Bc3zxnEagPPy3f1YRrXwMUdXE9MBtYvPEtDjS",
  "key36": "5Rzy5As6ZK61bXVHMchDdgEid9ASVGTwHE1em5xnbZqQqzhEPLDM3UUvF9KRjFfpucTLbuY2PdWmwsNoUMPGT3qr",
  "key37": "49mYTrfFvCjDcu7oYjorvnL3dNa7teT6hsTUqQS8GXFeL19VQFgEPoNQFpBgTFkd62SPwLYRSfZtjfJ3DJGz92pf",
  "key38": "3UNLnQUAN6Y2tB2D7cqdEhak96CcpFXzmbbh9WfFTTSfmRJohPqJ6BrCFEXVTyybhvFqzjmbAiXjzUDWKS3xSe2H",
  "key39": "4UPkVjWceVJcYnYS3Vyad2pDyHY5Qtk7u7NwzT9LLE56hH1rcwutq5DN4Sy5ebzy5xXzox4e3zqFtN6n44u9EcnE"
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
