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
    "4yuzPGir75f6jUQmusUm1wUoJqwdqyr9VBSU4NLWwQNc8Gm9wMExhkpLFd3UNYNrbiCW86HmJvQbsWMHWiEe3dE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kPF81XVx8DAGiWu6CcyJmbcLYAwR1RveWhafcKCKhhiHtpSAKB2Ui9fVit3KDVnBSsADiwijJxXU5gjFpNXe4WQ",
  "key1": "UQeqnUAoyUPYrvK5CNRTxgfT9TpXitATjHcMYqKs1x1XPyr88t1ggZceGpqKpYvTmbGwofX3EzANtvRDtMeDxTU",
  "key2": "5AEKUCDVArRUfsL7yAHvsBWVPfbvquPvr1x6TthnnngjRCLNDtkvNWvvaNSLps9F1YUyXYvstuc8ompXZ46dfEuq",
  "key3": "jd66vDpGg4WSmvw8Yo1FqJt2BWRUwDEFhRwo8Dc8mCqubgEmdKCShv6HAjuUBD1vhVKhRshinWYGpeEJs3CrmqP",
  "key4": "5L9G1jkcAxwNiiCMNWAVAsFRdowQixTEcQjeuJhHodq5zW7sYox3mPeekRuBC722pzkk3GLQiQxvyj8kHrtXL4nW",
  "key5": "3RA4GXJ1tAvtbpX6vUyxC6rvGU4xRNRsxyVSv1BoQTUHZqvd9yRddWPh93tYUyeteWyp6zfLsP8unrotrrUcai3r",
  "key6": "24pJLhBXhWP6ApTBaTeV7vc9Y2zPtR5TmSBCfepPVvFAKriBchYErVu54BssNm6YGdsGdkwsg751wjzThDVdcoLo",
  "key7": "5Ybmm3Lz82e15AR1jYvovKFQVDt41JDHfLzArUA48AWmyZdii7ce5wYM7kTCKkeuzKzeb5Qw32DvNV4pxUBgiiTG",
  "key8": "JerwBnu4TzBXmhCjFDHyWcR8tGqZeE6RLoSR7UCaXji5Aq9L5fVpT4LiAEtwFRfALenfxLzWMWzHS1jxiA3iAtK",
  "key9": "ficjqMCw2VbK4To4PDBTidyR1MNaCsBJYJju8J8jCRvvq8knZ8YS2xdQar6vJdPreCtxQUab4XcTiv3Mt5GLNmH",
  "key10": "3YZwHap6zDTbNpzpz1eChHUEy61xtD2ypYuhpqM8zY5TKsECnbpwK6R7sdoXC5VbTrvixCvLTMmbce8BvQtWvyTk",
  "key11": "4pgVEBtopuDaX5pjjbhbZBp7qRoymku4QMTHvdAqUMGocfF3N5ZuKHpQYkxX2DYjDjW28pAYK6XTZyP9m7MmKt6G",
  "key12": "3MAdwoKFiAArBcAqNQwpzUoDLhY5pYnZWiECRjrNhukEWmSFwE2w1KWQJHp55tag46APradZiw8qba5uRePykppM",
  "key13": "E5AK3p39gCVGYwKwcNeTmsv2bmrgNTQ36KUsTfmKQ8i8iWSebvn1BtnJA2PoPGbYjVaiCKYqNMefcqM37M9NcNf",
  "key14": "G8GhGYvcW9iWuf5JCQjhCMxox6tTb5VyTHEeEGMXk9oTdP4ZxixVAqBmJMvxXeqWLY2tHgUQEw4QBWRux5WefmL",
  "key15": "5LHcyXEpkAkgKwD3qDyJrseTiKbZVHYfGt9G8vVUJFUqwZgWwf5QyXUMdr19KYPndbbnxe3SB42XNYzSrcRFVb5D",
  "key16": "4fma5dxfUXpTyZ4BxoLD4nmjs2fui5d6jiJFsrrKmM4NCUQBRdc7LvNHBizVaZQjHPuAivvuQfYf1eZ2KHDfWKC6",
  "key17": "5VoSRLoLK6DHCVP16hDu4b3DVBzQVFHAHaLnxnEL2QhPdqiCMDfWasUTdYxKBuYZUqxtj3N8BUs1baPkkQPcJ5GJ",
  "key18": "wpRC8sLTxjzJmpAbGKgK9uXGPfu9SNVA34N7f2Nc3gvjjGHXpEMobE8WXFicGBJKUHMTfKW7GXaxEELQ9VeKGPG",
  "key19": "3cmhnGRWgqEPNcqJZJCrwY1doZwwMMFBKCNABdpn8R7HrRf2NsWC2rErzEe1NHA2tmCgqWHduUMW4LfwFDo6oizD",
  "key20": "4HF3ziURriTHQu3A37n2gBnunUpQpstHdY1oYSvGNPXx3HD6C2axRMD65KVa5h3T99wfqh6VsPncbBFegn2UUHZq",
  "key21": "583hDM63jTHE2SziCGrYQ1QaZY9iJ2VwcDxzkWSkreBjj3jeBwckSauvEEPTWKk9BNk5KLEjgDv1sbqWVF6SdCX7",
  "key22": "CUPq6D6769EMLWhM8L2WzgEY9spBm9gHywGSSundec4Bji2fDzNKgXmporF2CJPASytnadjTesmVFkaRjw4xARn",
  "key23": "kofmSX2V719G73Axy3aGvoYeR8UbnJFa4uWLFHLm1TAmcSnLePQA4KrWWiaxXeqjNpzAdUEoydap3ikAi3QoHVm",
  "key24": "4hwPZ7FShAggvGqREweWLeVs4cigXCcjMeXcqv4WEWqopJT2dyNAF878ZKAztbXoYxxDTtTcfUnM4ZePegb4VGkD",
  "key25": "BV8nUfdn3drvjssHvxyUxs6eioNfzf3rTPy2bA8sj69LQALoA4ssdJKN4YYPi1donxqdCjdCk1c6qxcujXritac",
  "key26": "2sa3yVNe5tiNitmLACkw53YVEPgXxPR5ycA7eKhwoR3Ar1Um1wmUSHP4H98HpbCcVXoZTZKcD8ib68gaRQYoV6xA",
  "key27": "W2ZbsfnTPkkm9XfpNG66deFPNh2YHZoxdv7YKCawQVstMkdQDKWkbWfdLcRKn1XoxHoF1T81swQ4xtaYTVLBQXp",
  "key28": "36CLvRStp7Lr7TfoMbqmqakvXWE1FTadvoNKSPPXkVYqH45iqhqwSpRiuuFEbsBbWDfHd9yvKCtoA6xs29NL5QvH",
  "key29": "3ejfVuwYB4y42hPpL4hqfW5qg1SXC8ScQe7f86cmznqye8r24SwhtLNAJh2PnjKoBRFSeuHiNH1tjPWpZSy7t7nW",
  "key30": "5Rfxh2my2ryoCRtrUMqu4th1EVNvwKd6TvE2bPf2Dtsn57kBJYTRkktxTESFrFcuiniqumrdtKBjdt7zHo14V2em",
  "key31": "3BXVkLAH44G6pcn7vFvsfPEwr4nfh1sW4ThEc6KmwwboAWKLiuBHEe5VbJZmfq5ozWErVSnXNziicQ6N8oSnuVU",
  "key32": "4hqJycDMeeYQ2m7EmfrPvkyrLjbpv9bu8zcGq3ax1MKmJL9fAETKA1FhX8C3v15PVrmibskHcsDHN7TgABhmMuYa",
  "key33": "4VYGYkCJCCrikgs1MgJfaUbcJQ2PkfzLBd6U7QiM5SNT2Xcw1H6sgaPmgtpcUZTo4mhfcfbt492Yn363rVZboSia",
  "key34": "2GEyhaVK1bYZZhUSmrRcpezCAQDrnuFsoDa1CkHHeQjWdUoXc1DBuaai3U81oimQriCqGWSo8vGLvGHnaotMDhGt",
  "key35": "njz8mWqK6tZtgmYieKVXYirwjsgzKJhhAqcnqpgT6Q2hfvYBz9JA2LGtLStKWPHxB7EyFMx8JryzoTgxVhZKMNP",
  "key36": "3SQwC5whJVMxPHCLBtMZsi53U4f43FQRZjX1qSfgJLLT5bodpjcviJa6u6RXNHwKW8sBBw8bX5P8xhwWnnCpE4Vk",
  "key37": "ZDfwpfVDDFBwQEcidvzQLj4ovuaYykbhkQTHm9nnrrRkhPir9ueLVGPnQq8rfcwdszadAkcmHekq21Gzg21Z35J",
  "key38": "5FgxcqFK3VbCKWbVbCcjecBT7dRw1w7peWjmhVx6W9D2k4mZnyPwxT3cvyhDCWGczZhTekD7mGykTkLNJAnD7DnF",
  "key39": "2ZiTCUf6AUr9acJ2dPRTWAvTcPqZ41jNEtoikd3pwuPFLNu76YSfwyAbjFjP4e8K2nRDv2UXzfND9fHbEDeYyWrd",
  "key40": "3FkUYEQ3jxAMRitxkZaMYUsWH5y55krqMhZRfbwkDhZLXhqsYNB9jChGuHV8rX8tQ5e3JyjqqpkjwoieVFnzvmKo",
  "key41": "4ZnALPJpQBHtnAiTVmUK1ziE2eiPR7NtLQBzub1odNH8xezQpfSCCL7cjP8ZkeguuEjoWR2XrQ1RT2JQuujPKYSK",
  "key42": "4XAQS3HZAXk38tmLgHsyRhRSaJGP4arPmCmeAbQpKDmTs6vH6dBEHo2bVR8tyjyqCDUBsTDLismRhLaTk6X7aAw7",
  "key43": "3GmJpb52aVJ55ofqUtVnenejCWLikjeMxHRssLPigfEF1qmpF1adswErGuPvTYi8bgRUed4UmnJhTFRPpmLWyn7L",
  "key44": "Qy8pvv7xiSSZLFqqcX7o2kTFUj83URQwjVGh3pRUPR4g8rvNhjYYzHpWgFrX8ATHhtJuznLb3mnDZVGLrsRuGwF",
  "key45": "4kKGyitHZDPmo7a11QYeHyDW3shL2UbcYkDsvjFoqgJDsg66DF6bJVYGDwBQaUmKVRUbSyUf2eaccTSjtwZL3uzE",
  "key46": "3TBT5nXya5tnvg36bWa2jxZUdYdbJHpZkpkRAtwztFsd26RCpE3rKp9Hc1kXF9AAPFNeJ4589rm73gocgHxQZvsc",
  "key47": "4wbrAn7m2ULqebEmUywna6CRxXXShCGPnggrcuQsCuN4oCMjsCXC9UZBDou9sxBSRjT1DRo7xAyHscMEdAq788L2"
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
