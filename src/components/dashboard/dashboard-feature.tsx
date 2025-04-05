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
    "4zrBhrZBMxkPp7VFnLKwpe3wK979EUz8NtQ7Y7wtGeyRMu1WvCstXEvturpK7ryn9rt4T5jnV1Dt15w56sDevFct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nxvctzaaofrzd4b8NyXH4eirM33EUQrSxTN7Y2ueS5CJ5tvqfVuA8XKdscCybA11SKmqTa9ft8gxxNaqTg6Mk9V",
  "key1": "4EYuPMEcmk8nx785cpco2PuH4RG2gfVqkMGyBGxZh3n3Euu6fBjsZZEzYfU6QodUAXe8PH2gXfV5qx864FdaKSPr",
  "key2": "3BHbf8eQz55agdRi17RPN97uj3uFea8m6RaedoshynnGfbwQ9LGb4Qbb6MoBWuubs5u4tLtfaff5MirCgC7LmJ9c",
  "key3": "5cn7bPfDe6X6DkK46ZbuhCrAn2xUJLHMCK6N7zzGPv2VGJuK8VBmm2GECxhsqN72vZLFoh67D3U88TnmrXKMQ56K",
  "key4": "54KGXwFL9PD3XgFwYVJ6MidpuGrrHMPmRfxugDJescDyYCDNx96uLZB65UNDpHdZSjB6ZuA4UG2p15HRS5kJGiS",
  "key5": "3F8ZBRheEMKduw3LUKvHarDgKC66Far5sk1f5g5y8zxszxKpCUne6bjNjjUEaH7RnKQagBANPuSuoMdP8JWeX2yM",
  "key6": "WhhHR9wWwgWUg1fvjdCjunzzownKp2wbmvfcCPXf6ia6MiUMBX64cJE1KGwUArbdceCJqpjCzjJmAzRDSG8mAdU",
  "key7": "39sjbHjKBkf72vtwYXFGPe4UxKnyRF1hLXTJjzVVkqTHBKTH3Zuf58cmUaH9feWp7HYMvYufF8oVtv6jBDcbcJe5",
  "key8": "2WVHb85HUJX56DT8q4BnU7WXZYimjpZwq2cvTYhxrzS9nhrWhVMispDdmfDDkApADgcR5k8h8PD8k7YnhUDKjDNY",
  "key9": "234QKSdGumz7YZmwxxD2L3MJU1Meg2aXQsF3Jb29rNtC2QaRYnVNUWqK7Jtw3iBqzCsqZ3weZ8YuVrJxNc4hzzet",
  "key10": "2cQdd9qN8huwxbnAqSqYfY965cpngB4FdC4P3pTJN3NWBkpgsKnGStYvmMk4CBsW5jr2hEis3WEij71csmwduRAM",
  "key11": "nvdJG9441WHXv8rWdM94zanxskmfgVb4UuYnx9x3vT2amqDD4tDpdeMYEwVTEWSu6AMnPuAhAa4yDkRjSkGytwd",
  "key12": "3p386dBWVaqbj6s81iDaAg8XfquudSrzjLZfWHaG2b8F4oUTkEftg3JmHfyjoo9PdwJb2jMFoo36EjByu3wCB1tp",
  "key13": "4UqK3Zw9ryJaz3iMoxekMm1VFSyN1Vzy34QYrkjrFPmYm4gMXpsodb4QhrdGLAyz1QPZn3Vwy8oRWmkGDQXsHrwh",
  "key14": "2dPVVC4p58njmTUtBg2oKCsJGTBHLvjpwgjHAuJGdT8JS3jDbAA7uyGimzn8fvqdMR8bMm5ftKuArppyvfxvhBuD",
  "key15": "3tMMgte7Y3A8aEzyYpWBgYfdJR89K4dmPzd1RycjvrGaWQAnLuDpKfZkpS54GuFSDeuVHMW9zYbMjx5N6jzbFKXi",
  "key16": "3FdZSj9SwjxDpKGo8Kszai1FvYMtwrvZkCVm3f4mX8zN7dvNcWUx4PXtPHJJaMAyf4wAbSqvr5n1uA4u9bXDxAt7",
  "key17": "5BqaCDvpni8zH9tt41WNN1NqVNxwRahdQKUgCotUjiVCBSYzFCcjxbszpKhaDKVi7vQHZKK5cr1zb7ZTEHegjUPS",
  "key18": "4TvBumdRQ1daTRmp8BaP4d4Kw5cvpwdcE34bZK5tbeTA94TBu5Sq4ANBdAzbydMe1vnRBJ2xBbAz6gT3k1NsJaNB",
  "key19": "4ZK35LJb6EiCbYakd2SnULCxs1PTWCZuJBWpr7vRuWeu4QDZkreLveLQ5Dk2LF2nuw4hrXWM9WEnUBYWqkhTVq95",
  "key20": "5MFkfPYBH5QgVZcYs4YDBQFubMk9tVZn8KkcKhcWCgPsMC2u8dTt6NNdmLoQQfUMwYEU6tVezXunsTfXwNAy98Wa",
  "key21": "2pfXDbVjkwgsrB7iWFwjqzCh96mGZPFyVnsSFCG2gYYX9hPG1vGmnPi1PwuSx2EznajLJzbWrJx3Cw8pomjownrh",
  "key22": "3mkGZ57kKYFT4zkjrbwkxGcQH1PesWwxdXUzW3oy5iwdCiLRppDrCTsPsPuVfF2hPLUmQVfNRJwsmJaEA9THyBPn",
  "key23": "bmP8eoNuF3CYEDizKWLrg77sdQgkLkuPp48EmV1Wsb75DneMW2kTXLMjEQ2EmfKtnUsmVqTGR8sLrKfapLm8zrz",
  "key24": "5PwyjpTZxvLJQg7gChZaVQFHJM3NaiZHRRVAHZniSATPeLzdHpqJcGy9MCLTZvbddvAbwzke6jFqmHAQ8KwLQDUn",
  "key25": "3ASgbwemoAQLTfY7x27amwArDafeHjvY9ZEqkJbPGsxG7vMH39sC9XzMwC5s9QdTbYxnimohWHes3xxQAX38cxtT",
  "key26": "4CEPMmSiEk2Z6vrDmX832ZYcVreA85cU7ZZFsJ4zahXyYTypVEw4GYGCeLi4HSqyuSHR9yWygNBZJqaRdCqvGFYu",
  "key27": "2ocRCtGcHDmuZoPuW8RKUJTjENd4MN8SYiA8zqfgyXTiDnPoV3tx4myP8rUCXwXcxGMFgpPxJGA455mVZsy9yrqS",
  "key28": "DsKjWabA1AXQYZ5nqaTutC7BCkDmPxQuFRV1M3e1wVMSgxKApm6fdtYcuCL8j4WSb5S4E2TNHPChRQWEnFrHFvE",
  "key29": "daGX7iDLzbyPsaDYT2vRsg43HQAmGZYnPbjhAsiZJxYhNDGaFAFhZJJsk4F218ZMLxM5j95h9gZxijQELdEK3KD",
  "key30": "3PaZv9GdWwot11MeRZf51UwpnhBo6Zd8S7uw2pukGj22HsFdwveXkMiTjScAyfzY1Ucb12rCrRkfW6PBKJ2tBMBw",
  "key31": "5BtPE8J8dTuPd1s1smEdZiSNpBVGwXTD7QC77sxG291sKs7fXUdkuWahbWBQBUmtbxzzUq7RzfsUuzps8R8TVVHh",
  "key32": "mhFvaDArh1ZstPFmhd4CqySJ7ZnkkvL5Xy3C5Ay9sV8ja4wz1YWFiNrei4QUNE9h8wSxqtY1wB7guTWcDiqxr28",
  "key33": "3gHpG71vATKXfPmhRWbNnuqJen7t5uGMmZMeKkSrGZBTKrAegLB5oYXXrHEfgk1EfXLciJBmrx4oQWupJ7kbZwgt",
  "key34": "2KntKZ6xS8dnFJkrgFLJjL7Vp5xZkRpyRkVazMatKEobjB44JynEuRtyvTnT7t3UZvDQrhoctdc5bP7CtmfwHh7C",
  "key35": "9FZdePWBfnVX8DCAhUkCDzDLD8XxqCBHJt1zcTJqSS4djpVmExFPSoErgR7ULxvjNaxUyTaC4RodWj9beQAgUUp",
  "key36": "3R2nTsxrmg1gHoZiczS17cw5eUBV8pp5HaLy3SyNXKyADKxeKbcHXC4kegpbmNoHoH5PMWwKAcgAP1diUdyv8w3c",
  "key37": "2hRJ5LDXCEwNGc7c3budC3puHP7KLe6tGFVwmQT5vYeZDQxwbExJTYBmDU35x8mndwDdvTAJK4Dbk3robMfQVcQd",
  "key38": "2HiymyJZA1oMNj2HXWF8DFEwaShgxHpJkDzQxK17EXpjvA8xzMEeJogNXosmd2jdP3eKQhedxqC8Ugo7tDkxi376",
  "key39": "2LFsf5r35ssNUAPo6jwAs1KG4FRaPJLYgC7RqysXgi9tiSamjNaHyPBtcjLMtFNHBNpKLetPQn27fim1fXQShLp8",
  "key40": "4eMZsF7wnwJwmFS8xMXGX5bX8Ho3PcVgXBjg3ePeeechaf5mAxfo2WhMELEt2zqGY52RhGX6hes7oAsj884BxibE",
  "key41": "2dcYuwMFeq4Mtba9YuLresHMTPq1pFFuf26jZFR53CrnnNuSbQJ2f3ndArQpLB5Nikao4Y1CuLWGYe63Y1j3EdSD",
  "key42": "3dbL7ZsAzWtzYeB9gP2sdaV3rDSHf1hKjnGTr12BbCTsd8DprTzxf2fdvJ3jpfa5rvhHtbiXtFii54PuWbzEGVZM",
  "key43": "5MzvvKeagTGGzjdBB5We3CoxQnoGDBQqfyUK6eCWrz3H3T7svRjCWDR7LqeG4LRtxetbVWKttCrS2iz2RV6bwmpA"
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
