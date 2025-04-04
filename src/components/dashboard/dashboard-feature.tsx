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
    "5MGzXZrP5eWo48CQhvt7rj2rr5zJX4yWdZWJYvjPQXUKPiWvju9vKny7hEQC2Af4XKF6YSrGGTNeqooYtMyMr58j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cXcLZFDTYfpg2VaWPzSXXrh9tbijHV2FVMAbpF5uYQpFdi1AAjmDHBMaQHxtQvDaYZDNm1gDQD48ABnRpX4mpQx",
  "key1": "2Pz3TR8XwkCMv2Boj4WJTU9E1VQKzU8hD8VFfGuD3fLU9BXqtNwpUD1UE2ypabqZedJRdHtm2wdqSCS6r3fjvyXS",
  "key2": "2RjXz24E353GPKYTQC53p4AHixkuCTLcQSW2a3uYswWXjJhVXxHcsZNxNbA8iUx9psag1dZdx9SDaw2hB4huLahJ",
  "key3": "bJHj5GgTTn9RCaUTWry5Q3hFyavyahfS8uYGunQYKmrY49hQNV66eLq5crPmxCJSw9tnvbQSLcrWmoJtpDW6tZv",
  "key4": "31VTcJ3zVE92L9YuEPds4UkYWokuebJ93UzqZJFJadUEjJazDj5mFfhJkFE9dhzxgF8upZJmMeqdgpgDtgEUYZdC",
  "key5": "3TJQX3MJfgnjbzfodfqXzhLWon1a8q42eoJafwg7URGhp9gzzWPapkU4vHtZSyarBMen92p5t3xW4TVSnaFJ2K8T",
  "key6": "3Q2FCHdnwzt9bevK7zNa99mBhWFuwkxkCQjv7xszWA5rXvBk5xh7dT7vrH3LGE21mGUbxziHXpxDQ9HPeKgXFPWi",
  "key7": "aAygQNvpNQbpRxu4LdTeuncjB3zm2W9U6wRKubyXBuWLQk2vwz293Cc7nPheEKuk9cqkFNnM1oVnGNtgAkcStve",
  "key8": "uYoQ648SYZGg5QidZRBzd5HxpkcKQWMZUSo9iWWe56C8hvvQcZQR8bdRqKFB8imh5C1SgMYbM2rB2oNZheEVMH4",
  "key9": "3WWg3xaiGuQ5kCzbQKxZGkPbM1fW29CPuwf3okyJRDCjjFMddhvhiDe54YxL5hmfzP6AUZQ3cGECZ42PsdFAzG3F",
  "key10": "4BcdiN4PQAwSXGV78gCobzPUpRqC8bEnLyb5YLNCVbto1myhZurRMecREJCKXZQBD6V4kZn6jvmEXNzoBgx2V5tE",
  "key11": "3PwM2p1U2wF6MHP9Dzpy4QGSGy2w1U4LSA9KqfP2mTw2xNYqxDVB3JBhmBUcfim96xtavbZF2cDsx5mWBqeL8Hob",
  "key12": "3xGC8eXLyoGE7BpSrCWrsEASXot787n3nBG158rrn9f94EtMbzbyoDHAeV5VqEpF4m3AhEf3uGTkTPmJWz8tSrjL",
  "key13": "cxnyuxjBKoShbotVq9n7SJ6PBdSnq9qgtKbr3vCno6SfHEbN25wd2oX5BUZfUy4JLCqgYqCnW9wmTnRQj6ZfPSR",
  "key14": "5Y2vucCieREJwfzQ45WDka6fiwyaHQasgXYpA8jMFLR9TKabW2hj7FGpWsQjM5DPESZo5yQ65BjeNNmBChHPhXwQ",
  "key15": "4vtrXWu85xV4w3FVc43LP9FaEioEAs1FWpfXewse7qkcPsWUzuFPqtehjmggWwQxKELJUM8hBDoNnLbR5x5B5NGv",
  "key16": "4zpeA9zbwrnTmFrfBkUjVSeBem8ntit9fwzeXj4nKcqz9k38jWExzbrkSHduMJzsR1omLQVRRYm7gd7wnVtEFXf",
  "key17": "2Fsc3Aa1EycuFvrVkbcZDRCHJnvdSr84hjQD3RnmCMsEUQ61EY92WMRBCxvF9LZ8jNYGiXja2xbBC65Kh3J5fekZ",
  "key18": "5VQFPr12fuZj6kfMtYp87V6gWxrkHh75duFyQkF4abuLTpa399WQ27idYhWkSDdbBCJs9qjjCcZA52xZpvjhjKxa",
  "key19": "AsBCizegih3A3L49MMjisHk88HtCMHJ695yBSjxWvhC2wpBAAN5eqhSPnB4CksKCVJ7WMJL8f7EbbCGyPvtXvpj",
  "key20": "2ogQZdBuqo5JktLn6rHrRN329r9tzqL1adAbbvBfpvgMn4SFM9MVeH8zzax1KrVBQgq9SMush8xEChCNMp3fMQKV",
  "key21": "3HSPDTf8gc5oSqUSaSbFfnwi1bo5KRyDMCd1cerH8dG1BsZJZPB4a8p5w8WRB5Zn6Bbiw9TbQ7HHbBpCu8TB2efb",
  "key22": "3gRrH4Z8rUbFzBsxHNxsCY3gmyYLCxCRxQZNymqDvgtzizCe9no59nfMuU8Us4ShAKpywz5VrbmE5ba2E68hj7uz",
  "key23": "DGz4Kip9NnS26eBfTFSZvvhvAsJ8wioNYnbu9wYfGK6LVRBgHHrA18KYEJmEuowGR8iGbJFAxtxBBNuZdGakPd3",
  "key24": "65WY7uGdcdi6Ug4S5nobSDbMa8k8cARrcPDHormJxTaZAKmHWfbyrtynShs9HiTPTNWkEgyAtdvMqkUx9mrmKh3X",
  "key25": "vtV2eEV8o2mG25jUggf69wRDE3g1pEkG7b5yhjvHghVXS2ioQaHuTqFAUM5md2w9qdJcRitmxKFTZRuHq48z2Mf",
  "key26": "AttP7QtE5v4i5iTZC7fkVdJtDiteDdCWAEReno59PbwBvfabKhDBWCKAtLSZzWZNteKJMg2D6orex7mxwXwcSo6",
  "key27": "ScWg4f9mBLB73iaJ8gACrTURjdPSB5d678R9mti4smCGg61kFQGC5Z994KW8vLEXyo9zWsLQbiNvarhuEDnbsvt",
  "key28": "2YybnkAg5hSVuFGx4AcNAn43WrQRFXdhVesyGHJcsnQTCbL8yTAYhum6DBfrrU66WgBShdW6e8AEL6szS64MefNQ",
  "key29": "2g7MbCpK1Csfjyc2QqSAHuGCvz2pHQbQtqtAXrYhc5TSfPmjXT1Tcb1TqPeCMiX3BCuy256gXNpmy9eFKk5qbmyx",
  "key30": "56wyhUF4ZEXdxkNLc24h2AGEt6gPgytacmA7TAuzuoiBXDbMoPYw9ywgrozCUBcrax1j93qKL5dwAfW9kVyDF9zq",
  "key31": "5CKKFTuuSae4LqikXW49ntUrUXWft43rdnD4VwDKrj4PqLgLEe7xnoKzaQkngy2etQo8CVxjffmebJfqhbETq9r7",
  "key32": "MFr2LrvmdBYhLte9V2Xo5HMRfyF8552iV1HwNLzJZhVCUhS6GyBxrGSJnWrKh1RnMUHbeBeU46Y6xaWb8CuCH5h",
  "key33": "3y9VWtvBMt1S6vAFiEJc7hkqMrUwbUgP1kSSSxRbKSG5jdJzLt4tz9f1pJ2NoTqffv5L6fUiTA9nY5jkR6ggfZk1",
  "key34": "3PgwTwHGUjsepUu76N6d4ELj4GKsUCuxHhqXHAEidEpYyNTGGEGe2GuM5RfQbPQY58EzJL6AYyp4P4FLZXsFHrtb",
  "key35": "5kM5xCJ6M4Fu36ynFEsCLUeyPL136ueJ9zKQGh7bQEunFJ18oS2MoS11ibBWZnQABDbRrGAYNTGt26BW7rfSj5WD",
  "key36": "3yoDz5N2dJSakm1B2VJNxPT1yfJKDnPVtU8vC3rGnKuSF87C6n9kneuVAJNiXU6sLKb9D31QsKWHH6U4epwPzuU",
  "key37": "2713LsMn6qZdedYMZRZzWG5vhTgZ9tJDyuvqMw67YaMDQbPEZoJYZXPiKrcNvCpA1kg7fjvoG3Yo1uwkzB9DjR7b",
  "key38": "MFRbMscCzbA2AVQoB6d2z1SGKxMmsY4jFvarsLSHAs9amJTy9rwY7zYVEc2Vb4p5ohRWEaPiEuu23T6SNyZ14Tv",
  "key39": "4TPcZ5A89VgDMesdDNvUUxuxxwdc7j6n3mt1KxekvEcRmTwk1862GgC3DNQCTf43DqTb1YejThvKuTr3EtRuAhfM",
  "key40": "4xkUMLB1QNsDpCwgrA4wdRLDiVU1J6APoMaLKD2yMFpe8jKQmcu43ayGGABHkaT3vCnNSQ4gdJCb6E1X9ajR4RwK",
  "key41": "u56RXJMEZAcMbWASpP9Rufj198kTCnWB4nNEERTBg9TjbqXgiExs117d9Wks7oSCKCPXW9zyjtw1GAU5t5znphP",
  "key42": "4jSMz7kSHgKoyCnazCVVdyM7m2YEamPdbkztuxFjCCvAscq33NWR3F6Efm948sf4QwqCzShEgUzQHcQHQT2NNAL6",
  "key43": "5x2y69BzE594GiWdEDSs8vEw7CTLNfoWj6nZZqARjoq1dBa7qvNJLXoHebz5XePsWUVQj15f1cmtmcs3dH2Hevgz"
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
