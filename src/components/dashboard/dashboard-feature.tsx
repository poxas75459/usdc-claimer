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
    "rh8ecjhNiZKLGXidzxHbr9srS5FsjDWG8QGNxLEtfTrbhrGeHsoqwoeBiLDAShKMQMr36LyB67nm5L7VKfWiG5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rJsKJpLGP36ksVAHDS39giHNQwXV848kD625d8fXz9JKNj4NACvYkzDaf1ZKArvbA2kDRrBtQqAya2BQzN2RpJP",
  "key1": "2RNFYeKtGpeLd6yYLUbo2gwbxrA5ouoBQ6HLeXqhwcxmptyGzDgvnQFCtXzdah7XqHic9nHqe9RCbSZUsdHX1b4v",
  "key2": "p8ykM1AmcAHCWNfG8yUMQXzwacHrhgksrbH4XXBmpvxzYJeebqAtsXS9En6J1MQ8qFRA5qHtKV28frNHfDKqTG8",
  "key3": "5MuaaQr4ByTWMnWzDMiDRtpTJFnR3DtLD4ajEVAzcfPxtBsjnVUToHoHUznLygiqSg5bQAX8x1A4YGqi6oU5CKuu",
  "key4": "269bSFznPpoQY3ZZofSnMDnqyfKRZAZkU4PPLfS9wHydbrXL1gMVPTmtd76hpk7qVy5e7RXVGwvStdcbSn5R6uhn",
  "key5": "5DRHh1WoNLu9FXpcSKAjnpsJdAiLULKDEWwExmppvyb2XovfoU6kFQAJdGUdVgd2caj1NJreMgkdz4vGvDH8oJrZ",
  "key6": "5SCcm34RCwHiowbsC8Dr437UPSShN2wtLCxDpCd3Rxbu1yY1q46ZCHS7zJaKHNdi9czqEykbansBvsVrh5JiayYG",
  "key7": "2QfGdFgWntzs7NGhRg3bS2V2RaLpmJonzWeniY3SeNGKQfyYtaapFKYBr8zezoohUuUXy6TCGpqaSRciCYQjAQd3",
  "key8": "3uP4kyj35bsY9Jv9wo7kGnNsc1JiNiYQHcU4oiSTzL7BJEg17JpvcJ8LqbDiLBqZTrNnCQ26ir7WFkXErTGmZYQb",
  "key9": "K14g5UyVcZCgda9jyKRaL42LLq4FTjRoaZnkWhX9b3V4UVFJGz9vgbPff6nDPqAAxN3JfX9YtDSCdSDMHZhjJEm",
  "key10": "4v34F3LvnKvi9pArkCign363tMyhMRR3SYP2Fe3F8dejZC2Ptf7sAG8mJtM76nd69h5uRfk2MSYe3JydFeiZABAx",
  "key11": "64sfRZxLft83MHPSurY3obp19FM3MJXN9KrMjFX2KWzeUznqZvP5SyLyzjWWCCrJr3ppu1y6b5ws1P7nku3j6LsF",
  "key12": "sa4osszdruAdTaD28sxHKjeAzaqcmkpYq6Akgv4kD7wW8R6MQ2Gvy6LSssMzMdFgsjHvPPGHTVavNQfUtKb9NxL",
  "key13": "9BH4HYH9syeTp36uycT7qLYMMPYaCXmc7yf5T6YrmAxmgwj1oSV9sBwEpwHtmjT5bjjg9ZkEPR4Vv8rq6kLHrjJ",
  "key14": "4121SXfRpWeyt93RdX7ES8nWRygzPhRCyDC12nzrcTubBVLSvL1Fx9QBhBUXxma88Jrm9Aje9u871oMpw3RLTXZn",
  "key15": "27CjYVJu8CoehnxXJP9rdkcd1SHCVU3rzWigEcmmZVYGvyDaZV9W3jjNeJzEC6LdQuWhhadKAaRfY53tGvw9H7Sk",
  "key16": "5dX6qZmkVMqPuA69n39XK6GtNqn6o46qYVkPcorxFVwCsAey2AWFMWrKoRjCLmNc8Nn4nHBFzys1L7gsa7VzyjUi",
  "key17": "xZoH7UJtcs1Z8r7aFDw47S57jAYHpaoJWEayfsw3XX45Ewf54ciovAeqosdCUReEmCz19wAWZuHfhS8i3uMy9jL",
  "key18": "3ABv1CAyk3dk7avazaRv8bxWLheNbaes9KWeHd8r6wJTQxp1TY8t1whgwCtUGJ9qDpcifcEnLbBT1WghmghFSGbn",
  "key19": "263BhvJF1apiokfF2AwNAdmpwwf1ZwMNd6fV52xFpoZL4BonpNhCGTzAvsnXDmC3MtQcRQGqGj9XLGPTdP5uhbqE",
  "key20": "4oMTc5ZMY33LfnaSBEZSHtdbqjgxcSzoFXdZfVpnGT179LFWmgPpq4VNk7UBV2Rw8DD8JU3wXWdXjWSBX1ZPyCWR",
  "key21": "65H7QoQbEf4Hpy6RKy1adgAedhyTyDnat1RoCriVKCA46eSKQqHDSvYKvciUCJn9apxh3ABtKzPCmU8NnXxvE8b7",
  "key22": "5rTqEJrqPAuZKAdgAaDs96m61MxjGSMyMo8v3UjeBmuUYGuYoFy7nNY4KMR39o2YaKWre8ceLUbXWnHKPnep9jpQ",
  "key23": "3XB1rA4sin9JMBh3Wmc2Kovnp8JbBiay24pFYQtiDsx7ArNWgL8fdLorfWrY2mT1VaLCbUsLuaXNGEe3sX4yjks1",
  "key24": "3ayvCyHKGPL6DUiLUoACbspjPntGUqDM4LdsTJtXwzSVbG6nvyv5ZDK4zoLfs3k8XQUsaGRaWB497vK93bgR2r1M",
  "key25": "3Fw5nErUhaSpysGenzXSVJixKsu5rTLEy27x99JrfmqY4SmSXn27DLEXsKABjoTRwbbv2qqtCGt3deS6jeLHFQho",
  "key26": "5zwL8bVmS3ReRrDi1m7Tx21Dtaj2UUChUZAgRZEjhMBiLcZePCBNTaMQ9FGvdp26MqzUy6tXWzZf82ewCmggoee3",
  "key27": "4Dtp6YsN7e8TUwSjgLXhXcdhfbpCxhrT8GnFz3Kw6a9kfAs1RQNQJQ5SCYQ5io87Yaq6Eejnwm8t38w5aH7f2yFy",
  "key28": "2dEFpFuaNWVvzaWcCo7vtx6jQr6ceW6U491QsbKDcYUZBJWbD5mJVhSeMnAD3Y1X6rqUsv7LaFH6MNRmusspiCPK",
  "key29": "4eFCjEh5gztvMD4HFwhnvgnAzNSNPBCvj5XYWLDAaw5WHUMjee2VJ2gBafXYJ59yh6JVXYgTuAkZrySzxXkjYLZV",
  "key30": "86wAopj6qcbnmp3PBYAiHywAJYpxrSs5wB2TaxjYkQmqHHpG4ZfSEet37G9EtAx3NuSoWrVP3FU7mg3JbEm1abR",
  "key31": "WeUNWKK1reUjssfvtftWvq6gkfgw9XoXpJdBD4AFNZ3Qn1kMjGJPMwG8Czaw91ut3M2MLWqCoEBPZ4B1Nef751H",
  "key32": "3LYufVF24ELiFvo7JFvHcq57Dm14GhcGbdMneXXaRz2APd54EiqrX2oZRY1q44YYDBfPouY1C6bazLB5WkceFjzy",
  "key33": "5fbo67uvLuUwpTseFErqxrLVvMfRvvUzUrH1TjbSnef8RwMHDuDfa6AfXvDjUxnhiYJs9eZ1e3EDJbj3KDr6pfAF",
  "key34": "GofzwpJgMoVNs8TqTWyU7XGNr6c1MxUoctxfEpNnTEKnFtVeFskh7d5T7MqwkvxTYYkvvJkUWSdmrDyzF4p8S59",
  "key35": "2V4y97QAtLgDG7kc3ipyBvw88UgK1jSUHKHE9kR58VyyCrgVXYoHyhabJwNWUp6AFGJ9L8efL2oaUYQCHdSejeTv",
  "key36": "3Goghh97o3aUTSgHJccowyjYzDZWpBgpdWNoBEhRs3dwVfEi8Pb6Xj464o73NrPxf1gRWaRuEAecsJcy1PN1taSj",
  "key37": "3F5KxAP1kMHwKrzttP8u1UvnE1hpGkNEkxG6y14wtGXU145AnMj73wNwXqgD7tRdi4tvW3CHJbTz4Vxxy918SBaS",
  "key38": "51xcwBDzhXktdNafwcMCvPw8y58redtfzr4zE1g2eKEFsMEXEFWXVaA7CNh9E1X9Vft7svnvZ96SQ4ob7Qwzey2R",
  "key39": "KMjUY6GQnmwWWMRhu5jmBJBfJ3Yquv5BsPFbNBWSvHbJuDBUM73Lz2c4pbq3SmMtScsQ8zBpzBem1xNK13vpPcX",
  "key40": "3ggdtH9Cnkxd9z15W2re311kpHJyYeXKp4qecuZM6kBjH1GMfhqgFhgsSDPzAAvMgcrpqT11PhCUa9Np1sM44ijq",
  "key41": "3q4J4rdBZF6kJVjv9kA6CScAe3VHKwSMKqq3LxXoFRanTSDQ3vmRwdEPrLNjTPdnjL9NXAKCrtHoyDmWtSBiGWkr",
  "key42": "5ckhxweKLwvjkYUvAPgKsGwWs3SbsMTFK5aBN6Kd9DdbN2Du5k22ogXWVbeULDQWNsqVMDUdvtcG1CgUTps8GJqf",
  "key43": "38HnNygPWHkSHzbDDRPxiTQGcjPwfTDq6YkTAAxCcDqEH1hH4QgDWn6Q2DRmvF2tkGJ5b2VoKZCxx6fhqdgQ2dDd",
  "key44": "5kYJZU2ro4uK768TUJf8uUPBof2kCtxtEXRx3jvn3bvZmrR4rtko6sQbi8s4VLrvVDjxKhvGWssuxezkLC6XF78F",
  "key45": "238FBnvsBPStuyWd7cXmktGu5AnDijmQYf732uqnEsBHiXmQEudNsdbUoRtz97GJSyS2GZu8b7Sb7sbWYnoNYGxj",
  "key46": "3JQdNvUDwVgKQgBmzvVY6V4kXP1i5DjcnMQ53ZoX8t4A6SE5t2WcLpgvcqqzeL3NubMtxC1eQQ7FGt2m68aNitPV",
  "key47": "3kJm92g7kCnwKWvqMwAL2v1M47mM84JMxX8FmEv5MYM1d3Tzg2r8ExD4PvTbKCFESGTFfCdr1qH9rDWUkGNSPnVz",
  "key48": "44yQn4eodU8FocJpDUQLXyNaymuy3mN3i54DCqem1q35HB7ftFEfC9TsCaUHX2my9s4vrHqJnxqWuXvXikJdmzZA"
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
