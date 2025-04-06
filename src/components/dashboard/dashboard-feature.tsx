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
    "crUnviPBmx5Mo9V5H7DJwVaqtg9oNhUiMU6Ve5G2pqrDTBkCvsHyBs7pkMasHm84zLy9KaETcNyTa5UwoiAPqXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67nRHZR2ifraWq1XAxjv81uXG23Y3enxqtVkjaf1TSCWGSGrJnhDZjibftWUsVLHyZXgQbyEL3mNEQCJfoU6MvoD",
  "key1": "45QFL7Xwmt7K37NX4VPRU8zJs5dadhnRMXeAiZbFE5DcxuoNyCmSKMqYXt5gdw1tZBuw5GZJAw3QpzT3sz4fFsCF",
  "key2": "31sYfxPMWGAiQNvjch37rSKuZpBJ1eEeAWNt3ohCLvYyG5iFSnyewDWXzng8tZKZcwwFq7kaZxZWpMdbfejEwxLM",
  "key3": "4PDpa3yvrtv8VRFiDGhm3rRvoaFcUobrzM61HG729hbWdWnx1evUsXvRwrgkvbSKk3NyNCScRPmRDLsXcn8YrdM9",
  "key4": "3CcUJXZFxRVyF3F5mJodWh3fbhNEP3UNpeqK1y5cj8LTGzB1fCMQUqwhnxCoscbErXufXXkUF9ysW42FuGDT3mSM",
  "key5": "2kWdBWWHoqWJU1UVGe4dUmQomss999wfQN6WnRgp2fYzpNWi67w3BsMyCQSeGuou7E6xvsFzWUpBmXqrZqSGXFa3",
  "key6": "4nfRa251phZWBKzT3VLNeGRRfisy3T9pvStGBZbAgckHBpXTRqkq23NertjtzQxyMqjXjsXexD4oLNXY5PQhNJbW",
  "key7": "34Twq5fH1QbpoiV3HLFuQDCVQUFQCHiZshKWL38eAN75SmgSgxBppED841RW2pQVk1T6V4rzHuZmCEbjWR42FudS",
  "key8": "63GND2UZgtYrwQFjyztFuj7bdDtJ8FhNp5pWo47RYwypTBDEZMp2kgPcf1BZKYMjn6mb8EAN46p9vHMKoWMD8D1d",
  "key9": "5ebCJfBrWDuK56Vi4uYa3oZ4bBs742YPCcoepEMaPJ9qqc1n1sx23HYqdaeyKRYFXseqs2FKgkEhYbygaXe8mnNz",
  "key10": "4rLYNwETUjJSiBvng6NqiGC9yRD7M6bv1Nk7jjcjiU1HRGCqqwtbcS1zgQwaZ2HBcYFB4HLoo7D5hv3tmmmyJHvT",
  "key11": "4qkzRW9pYVaCdgCXS14ETmNAdV58pAVLWnwPAQSzSsrqVCb1rh1f7YovbvQsk54JdCPeoqtq1mMFgqKREPzyHmMd",
  "key12": "c5BRzqCvkJzba8CEPzNeB3AjgrevdBy6DuM2A772x3uGPn3mAdm5Qxzv9MdJt4Bog3v6YUxheFAxhvmM9qj11pk",
  "key13": "5YwBLRFDM8xfM92BABAPzLnUMS6ksNHBNQUHsYZexTn4C5RbxxJagYRRpQYXk9QDSCag3GTHYAFrTcSseAvcWLQV",
  "key14": "3hdJwcXGZbTT5HsKE2ZiCeEZ5oxAGMVCjLGBBgD2dA7cEvhXXi5knv4oGn81bHhnpMRVrTdPvDtzjZsTWMezi2BE",
  "key15": "5BmyM77yohCCEqp7Uu5QzAaKnwBhwyvZNfkJEm4FihDEZyhYZvgVkfj9y1VrWxp66rr3HKxx5KpJLmykoXKPMHjY",
  "key16": "4p3nSWqSDD2Ymkth33ajZ6fn3MroD5GpkikYaKV6ioeQjwdc5vo2Jcik75g7YKVWaR4mewFFvePWTAHYTdiP96pN",
  "key17": "4MndzJEJrcHt8MRqV5SVVuVRLUy82pNfywYLhHXyGcHB8aGTiRqo7bgZ9ihtWrQYtNSdyDWodBYpQ3gNoLzdFEiB",
  "key18": "59ftWjd5cm86sMXsKWzwzGNZMVofdM4whEntjutqBp6GxNoxqtMwbPQKyV9dFEFiJphtqagPBi3Z6di8PHDigzzT",
  "key19": "5tyG4mfjhsLRZj5noz6zqheaH8gFFXUWKj6TqFR52wquYcZisRoD8wSsDX9NoPdNPoLT6TZQHxu8Bo1d9ZNG4bd",
  "key20": "DspojM8hbZUPTWWPtm4z8v56xD3Xk49xDFwyPY6RuiVFiwwcR937Z9SSJhEmU9kVUpEBR5cS181C3KvgUv2fQUs",
  "key21": "2VyhwVxyi3oWrdSZhafFk4zeaa7iTuffT9GpWQtJPYN8BzktM87rzFjrkw7RBZpm6QvmS2xUXKpDBCHqqogcSz1v",
  "key22": "qRSHt7rZu5BQsk1D8wcXwU548A1AVB97bBuZJTUrib47K9W6Md4FfKpS4KSN3vF8Fpo2w94Wb69WUeW6E98esxY",
  "key23": "ShfxatA8CFvbNRva21xqoT1E8tP2TQzrsoNsydV4jC4M6uGMV7r1YaFWnyB75Kj1yccAfEGMWVV8AePBcgkXLyv",
  "key24": "5D8bxcHFTrRDaSMyG2wbbRexkc1BGN8i7rVFr9eiL9xe4KWpfGxq2mmzMeQAJYoXLPJeNnzYfqUSevJoH3A6cZy5",
  "key25": "5JTYBphNLZw5syR29boYdGHDQCHSC23G5BwppEvvhQwbyijV3FzSL1R5cVmGP6bgsLaJVzr3dtntHmezMvqvRLmY",
  "key26": "5XQUTr3f26468CBWUeKu8J9BdPua4AP5kgcVaA3RNXi26225mRf9o9F3FK61vU8qA1gfHaVf4Fude3RYLYAvot9J",
  "key27": "3qXxkuEeGT9NLviRVcMBJfSDujHNU2u7Ebs6p6keJvqRZfsaVKR3h7Z842DqkCj7L7pzdsJZY9mkuU5Mgj79UUN7",
  "key28": "5B9XjohikHbbtGuFChj5W9kGsNuqpMcqPWNDF71mDLhzu5Csnc9zZjZJ4vvosSrmLTwmSLUox2YA1fbQ2PeLcfF5",
  "key29": "4boQZQ5dJCX6vf9VccRJAHDNrgSDviCsYAGck2aWZ9n41w9jZLAL8V6hHfqMbVmN5GMW84BKJHNb4Z4Gk73neSFd",
  "key30": "2uEDYzcTy13xtfP82XknDgzWPHbVtCGi1R1rWtSNmiLo9WqGLhangL1cHt4HKRj8xtLjHLX57RXP2UuTVwd2ajQJ",
  "key31": "ec4Q85u4Khp46DmGJCLFN7UYbiHgmTCTzJGHJxuzpCteuFvXb5LSRabaZbZQzjPMiweFeiadG7uPTS98vYd9qR1",
  "key32": "4DJ6bBBnTpMB2bbYmodFnB2izhMh3YConA5ykhm5qNtynh9YRZjLpRqKXGqEaj4gX82cUsb6jPcrj9jtJeZsEJfy",
  "key33": "22Y8putDeMUeWexERUVpqgN3DVJtbwacJG8czGuFbooCk7pykP1tCBWPw22r9u4p5amGWpRSsJgeXC7PmzLfZbt3",
  "key34": "41oDYe8iTg6ZzfXNgHdLUXZjPHfDuTKjU9RZ2sR9PDvQVEBbbKcV6aMb3Z71wFpkYktdN1ShWo3ZkzjgQJt64F2t",
  "key35": "4E4nP7EoWPHYVkxbHMTzGLB32xKy82h3BaGEuJLCKMZMsbL4ktNcKHeUUV5PbKJfNKghGMu83fhrCR6v5pxDsw1Q",
  "key36": "2QiVLaJodbo4oHrXL5HYtssrcQHJ96uasU7JbC6dzMuoTVpArHrpsGnccq25ywArNKK5qUU94eDyxBc3t1hSkknJ",
  "key37": "641hJtVd6znUKJRpakFTb5Bj3CwHYZC7a4wS8avHDqV4t5htCaRyPbKpRnr4j4dzUSzd1i8W3RNZYzUY9kmnJ8GL",
  "key38": "2bHtDtb1KPdC1n1g7p45RBKWHFnmhmvyzXTD1T2HCzLeNcT7z3sdMaMhLhATDS8zk6Hcod8PwdUBbKbzZKQRC2Pj",
  "key39": "5UzaEaBrYjVpxtY22MbS68TygY1Nn1APkgzuRojiXqMukoizu2t3m1hUJaho5USCUXftEzyKKaVAkGw22xjDNG4H",
  "key40": "4erXmQpk4fyS9NwBfqM3vMnganw26Wm1z2hep2M4xuu9xBwnjfA6F9dfj39nexp2e2LCTSYP6TAKPzmc6TmaWHLa",
  "key41": "5SvVqJRYnGFMzB295BX7gfVAD3RpXwQ1MqnQ2a8f8emcQvP7VoufAStZ8dwytMV3ym6ZN2vvR5UHrFtyQpfyRS8L",
  "key42": "3bWSLSzLcSB5pPpnc2r5CFA5eLqZCssu5pvAZtkkDGaREWqWMQhBVjLHHzDBbVsGDDYfsSKePAXcdTCb8rrS45oZ",
  "key43": "3nb1YZYsLCtZi9FWuF1WGvP8STuWPSQMYHvvX8mXVD7bauvNvSuWZRfU6gXFaS1UPJ7M5ihVcShCtTKFPz4vjjcW",
  "key44": "2TKx3qa38zWrGhhXBx2FvJMZQ18uPosndN81CyHiZEGBwumdNkVjGs8em4XqV4Ee59irmRwKxZbBLs9b4ZQkodGk",
  "key45": "2Tg7dQwGPDqf3cs1JDj68HEuE4J5dqP9VhTZ6KFQzgodQyDKW5MykgTa4FZurqyZT9zeQgTysouwfLBnjrjXQYFj",
  "key46": "W2mQvXKMHwUkTV6hDg4gqCpKRBQsX9P698J13GsccejBd53HPXenagLHdgxRWgdApUpAYjZcfN3oLUddm2VkNig",
  "key47": "5xKuZsUPUohkzQ3TbJDgoo3MCiNSWPALf2NVBDny5vpAmp1PbcbLCpRu7RngBxzRuhw8pmtMAAfyYiHZDFNnNXfk",
  "key48": "22yMNdNYYdERsv7nNkGPHW139JnybDPHfkwnZztvadRJXb4cHbjk9YWvUz3f1TR23hYLqAxyULeSWUMtwonskzyi"
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
