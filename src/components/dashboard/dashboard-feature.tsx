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
    "2ytPquH2wHv9j14VMWqoWnCrAKjsacJFmEJroc3KhDrjN2EoozsfY3qTzRmWGX9XaF4gfAYMhRUNGgC9qjzc67ZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FynbeWz6ah3Qmge4BVXnaBLceBag2V2mifgAYHz6LEovKMqYp746dRRCG3TNzas237ZdUvJih1RELKc13BGh8Dm",
  "key1": "64VZJMzZhw4TWmU8gHSG9qMM4GdeVVvefGFvZNEUagzVWBqMscNBZvJMomw7Bn4yutJnY3xgYnmzZjccVD5Wrx7Q",
  "key2": "2FEgv512xZu6rcWGcvuqz2EsVgvz1CpzuTqeUmJorC3AAKt9oWkeuYBDN1G5whBCUb8vg2CP4NeSuCUvoWzT9uxo",
  "key3": "34u76u12GjSDgGC3Y3967PsWN1t3M7uHfa32y1ctKB4bd3yfcuCezj47LumEUojawhi1bfFbMw5wjUPecHkNVPp5",
  "key4": "4ZJeX9ZHeLHCZWguBBnZ3KErBiLJKpiLsAYiaotVXmmh8tDk8NNJuJyBQzcRLcnvB17NYqrCVrGi6hVfoKfERyAP",
  "key5": "3AxMhXzkbppK4vrbCHw5zRACjJg6rff9SRc9qj1YLDzfxxhvY563HcojicH1HWyvJp66mGg6r26ALi3fWwi3YzzH",
  "key6": "nDM91QZmjHbNJVYnmKC5GKz7jusnvg9TS76c4TWPMm9AkdgZ7gF4C66EGQeERBxJCrCnLooJg4tK5MDzPyCdkbe",
  "key7": "3qnajEu221DCguq6hbytGCgzhcqGmBqpmuBMbrqWX5nihDtqZrq4AcAPD5jt9MbCNCjK1ecLk7Yo3Y4niFQPGdU7",
  "key8": "4nyNhBcWhm8nP3c73PbeyZMEoVmZBKwhCWjMNwrSikewrqVKCboK74S6YkKGpahem7WXo5zRJXAqKewpk1DSmrTh",
  "key9": "2D9NdPqUsRbRYcqQmR1BnxCCgqpnqsfKh17MQbVRN2jMK2D6KBw4VwJLbctjhR65D83ar9a72r26S8RrCweX2jhf",
  "key10": "4EqpStdMLVYLTR47hdH95RUhoCGTkY767Fd6mep4FQ2pLCwGRVfVU4ujfYjQWiHHaJ8TYDwGctHmB1YBVLv1m25N",
  "key11": "2C3Ls7HgUYD85mSyEm9wDHczZYfmyNubr3pf6ZTLPv43mpL8wkhphkfWxKv7pU3PwyPJGaKDvf6EPp3bEDkwWWHX",
  "key12": "3fR6czEUTaWvzhn6KzoFPTNf6NPeTCBErXiRgKkoAkwDhxYH87PuZiZAb9VSSW9YgDAsbdfX8Uc4dQs1KiyJqtnk",
  "key13": "3wpki8VME9R4v3UmtYxu1SSDWRpuiWtaeSQiJRHwYdxRi729KmmBZks4EFDYuDtR11eYe7P9aw7jUTiGEWpY8ak5",
  "key14": "5716zVea2ChoiwRdshcuR5Xsy4fVfKH4RWntaKsrRbDS594qhB8Lh8CjcmAeaJrah7Sc9cERaDt5tyujfwTroPuC",
  "key15": "5mUDEHpgWj6oDacs1vNBPeUdrdfWMWT8Lr6475SY4T5QxdQgCpsg9DP5V84ubFZswCPjHMpsbJPqGBwwHeqSYBQp",
  "key16": "5vvWiDDB9qimx7y9PnBLDGY3RjbdoZ8TTqHaNVAa7CSx9238BBNdv3o1Uey23QihYZv4YjfWN4ej5XQLgwYFxqhQ",
  "key17": "4z2kqx78KU3aFSwCoHEBe2LNmRTvSNVSCigTMfQvwDa4A9RvxSjiFDpsUbEpWy7m3LdQd6CSMLaQzB5udzgUMTcF",
  "key18": "66Sf3djEHYiJFtqo5AsFS55gytQJZ1Xi2VZ3m9KrT6fqvLBxDk8rsZdV3EkGx558aNuc61AeAX9bimqS1zDipH1w",
  "key19": "3GJvAZxcPTgoVcHzZSx1daqoYjqJshwnYAGcXGLhuGXqFQswQ7sjxKew36yrUc1HpKjYwzM1jn3F2e7bh5sbNiqu",
  "key20": "2fAX8g2QVhtQvJmZhcz68dnDuEpykm1PLXXxMBwZe33D2nny6p2R2SRUZ35UHdfBpDaJvSPFZPLgVTVVGrHDcpyd",
  "key21": "5yHf6hvVfJnft4Xa9sifPbLs46PEpHVBGwB47vP8gBAWGz6VVYpYnHzQ3MhTv8sn5VyPgrLbJCjxabZoeWcycqYQ",
  "key22": "5rJsqcCicr1pNus56hqjUnU6rMmbz8tjy8NNgPotHfxUzSbXTe3iPodhk5hS4kmSFxByQqdKxxPMa4hECCNKqrzF",
  "key23": "3hkKLGu78LiBBcKfLnbPd3MAth9DpGiaBxa9MaHjMiMYbTGCpChv1UjdX2bCdNMH7khzfBMze8NJVSBwGLWSLA8U",
  "key24": "4ouQPmjScZuUygiBWkK6TDBRekPN3vc7Lww6Ai4sKw41eHwTeaywJQ1PbR7sPguwEbWvgi2XrKwpEEDSVTB73U24",
  "key25": "5aXLqZGEec4U1QFE6Yh6CFChy7DCetLdeytMRUYirSqe3oKGAAh3RSdoczXzGw5iVTVXJ8DvcPKecso4Fim6cWvz",
  "key26": "Lj6V3fFTHafsVo8eYdLQrzTqtCBPhucV3UEeo3WfeAs4mRt9ztJs1NQTCrhKcxeQGm8kXidcFdwvAtipzpuPp9R",
  "key27": "558mXycgvpT6GyzZcQ1vtVAwRqxk292nEvaXBN9bYXBSVdSupxgUtQzU6QDnSnwpBFh3qecRRHofMqDSjZfpeRHK",
  "key28": "3XP48MuKwr1XQogP9dJmxZqfktxfbMGKLdw7gBkFjSugKHTJDXcoy2fFU94uBBTqoQHUwztWU5gafqw8MsUaun4j",
  "key29": "kGHJQY42tkuXBTKqGbQ4kqqfuV5fdmLr5gBw3Ws3xWJvDvqSLocsbSf88EGxN8hpPsvcrN4pFLgY8mruGHdcXW3",
  "key30": "5mh1KZebPpeYvbA8fRAx8h6iCb9x2aWaqSqU5gzZfXnBC9cBszwXzbjuivWUgobh4vXBYwmbU5tbRoVGWW3A1RWG",
  "key31": "599CAAwrJDdBPV9WVVF7rsdsxMG33EUaWZKPXkDCnLNSTJyshUovrsEJr4Z8nrYBPV6hpWXxN289a5JRTA4ZQTGM",
  "key32": "TEArsmPZQyAEuYYGe2P7HYGJZNfwzN2ivtfuHr3xRbjY6BuKhfreSPcGVFpxynEEiaVL1BnU2hK8TmW1mtGwKFS",
  "key33": "yVpqyy2UcpHGw7CPMjkW8PeYnQbvbEesgAmPhcTo1RJihpTNY3MzNDqTymSDn1B2Wb7EqvasTbEU8D4bYwC6SdY",
  "key34": "66m86KnVaSL8xZFseNPzBht3iS5qtsnidmd1Y7RnFhUNeG68ZCAHWSa1dBD41CV7kehz6ru4MpJepE186AGZv2u6",
  "key35": "5TZiQ4FsUfVwuDpKEqxHhKhpmw9ZgvbuddUCgK6KzZB59mgQrTaZ6YY84EELAHTPWuMWSa21AeWbyPgcfHM6Xpn1",
  "key36": "4KBP6CMjHxdYSk259DdZMQTnV44ufF1APoNYMJtMzV2W4pqYAExAmNNrFv9PfFP1iKHhDpGGC9S7oGJS8utixZnP",
  "key37": "5CW6putxmiyGonL8wCt5QssZcMU43ZBBd9QYefYQvbuBWC3V47KT8USrzr7jg627eg7wz7dNm1XJhSgSFuSaMkNo",
  "key38": "5UPKQ6JBwoHDcQ7Ksq21oXeNPJGD2LWFhmLAXWkb3iwDj7z3aGsS5e333SezuXxooq2YobrD3AXwJVpjEgAws2EZ",
  "key39": "MJMWZAMoEiKw5ZCtEbwi4QTH5aaQiGBw4a32UimrU4prxtR6ubBbv4P2H8KEzn1eAoZGWW8AaruwJnc5Adsuekn",
  "key40": "2R2RSL3aHiHWjtUXFxpi6ktTEuezG6mYvKpWb9x6CHBBFB2trT2fxFsaGaCk6zxS8e9pxBVd9HnxXn9UzGU1T4Se",
  "key41": "5EHH6HruP5UUc6QECWze7HNydX3RRZZe8gDAXiRnqthPiWgXoKchL19fggGQyk9pLqfNcv8p5ziicrr7W9BSVCUT",
  "key42": "2xHu94ePKksmdsZ5tPK518wYSr5knfGjjKmViRpFEByqNruvdHpz17S6XUwbnHU3Ap8EAiAjyXtBD9zPdma4SXQ2",
  "key43": "32jAFbEMU9ffBnmuZ8CY19wX42qmcczkwBZ5yiFWjeUG8KJMPEvkKw8LoqDgSraUJoGcJWghvuHGshaeEynXK3Gs",
  "key44": "4wsY8WGwfzrvSXboo5NjNKgjFPwofGBfbwmCfpf8UQSAmPxNCA3V4TBLKpof7BYW26RW7G6zNinD8EVZHPE9jWEQ",
  "key45": "4VfFd81UGgDHTjWScbJk2xWe1UEMnVruaEcR3RK9oXUgERb4RVdWQUmxX8EXLYzfXHhxgbE42ha1uV28TXQu4gjQ",
  "key46": "5jAtrkD1pLGUWoWP6RjBAL5SsjjTgBFApmdpuW16X2oBCM2jkLKh2cU1dPwzqSQb5rS9zZkhFXu7VPZx2wR2RjC5",
  "key47": "4qr7DeUdqJqbH6dSeu7fUNh3diyPnVyK7XumGuGsVWPSnanMV2Pg7Wr5EmgFXWMZSrbsybCqKAm19HKv5UEiJVbM",
  "key48": "2NB5LvRcGpvxr6C5jMmfsBwJrWvaUXbBisNEf16pntSQ5F2uGcpGXHyHasfAjZuJ1HRrpLi4JJfac44iJQGeJn71",
  "key49": "5fDLyMAMueAvsuoM9YF6zVLs3YfacQpphTPabsvPjuWciLsq7M6n5Ypq7GvmJdnVe1dtoymQ1hmZhfyfJfUn882s"
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
