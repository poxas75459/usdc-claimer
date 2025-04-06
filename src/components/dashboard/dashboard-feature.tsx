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
    "2mGktUu51JiEJZbHEoCZHTc8kykoDdY2S8ntLWZgvK35kpLDnhX7GraK6axezAavascE1Qmaa1yPmP6rZts8u1gJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xqDaqXWiraNonsB7CdiYMN681pTZiiSSPhs5SqvjzHpywCgPSkNDYNWCDjRa4cgocqneCYqQpdvuuuu56jX9Lxd",
  "key1": "KvffHP5Gayq18w7khqgaC7AMgjNqGFZuBwCCGuunFZZgYGBxpRrQUVQ7mdfqY6w4p1uLGzvAz4pM6aXZKKy3ZBf",
  "key2": "417jUwHfK83bvaPHTPR51TrqiehAKZ81LNtXsmX9Pvv6njbg4iJftNsTab8zAhEHr23UxGFkFPKn5mvpVFjcf3Fi",
  "key3": "4JgeyzbiuyMCZYcpuSM8shaiE1EmPxioMAV6ndXSrTSpxbLSkxRHQejhcPA3o1A7NyLNAAtx9B57xYzWCri6diSW",
  "key4": "2FrMWQKTou3jnVtxkca6VUgGftT9bj4RDHUteAUjbFTxucb8pb94PWDXLFuTyajXAxKVASGE4syWtnS5S6P3hkc8",
  "key5": "SxCbinEJz6hTRRZBfKiEv1ihYfEeySVGKAvBBLR5xPvoU7jPAKoeLGfJczXSkLfKnZCnRMFmzC2G9JowDZ6uDU6",
  "key6": "3dKS9StSRnRQrigjxDdyKCMZqg9eRqxuNSP5DiozzQFBNhk6NvAV2nd6fY2p7FCr1ANfmgQqASuBwEnAVFiHg9Ss",
  "key7": "5ZC6VGvmnDdU9ZFyWeBYFQVTjS7hK1CmdkSjTiPYSbL2i5w5288XZUezwi9KK2gz5QPQpjGvUSvKqVXBgtF1bAr3",
  "key8": "4cazLQTy4jernBHBGnGbJ6Svon7SuWBR4fsf976RSzu4Q6CbgeL5R8STKGccCrJuqj4uSVY63T6Jke9dJBTdb2U7",
  "key9": "3DfCHAawgTaRgQFHSBX4JYarxms9nEV26jPMBNPGwuozribAQravCSrSDkyVj1YSyqLL1xGuSRwsvFzxR7QP3Kqr",
  "key10": "2UuoJoC3dJXWTNw8o67mF86zvnj4YPcH4wAxwu9nnCvh5EdXdY2RrxvHpJzYCsvsTfmNzWMexW5LhHoaTns1fex5",
  "key11": "5xJVn4qskjJbGbQmSPk8UanbDU1y9CTdWuzLSt9TmAGbzbaqCY4kfC9YpWBWYcFcz2vaL9ohwKNXBd1qMRLodjNk",
  "key12": "4BHPnK46dBfDS4QsrdSuXjHBVmB3FGAimV3g6Nf66cx7wQvyZSmFNJxmqm3RgtvC59s1PjLC6DtEaoCKtSD3KY7o",
  "key13": "vmjVzTnCF6tyzwJUXiud25xK82Csb5882vzCAvRizCPSS1LQh5Ln9mPmPuu17iPwLvwiWcyU9NRyHKbUGnwY1VU",
  "key14": "5FtLLEvy9Sa1gQGMsktvrYbXP1bGUXLBfy2j22Gz2AZtWtRtcypeifb325sQ6VmoE4vsV1hybrUVMVHFAWxVVkhr",
  "key15": "4bG5EAZexQ2SgtN8MuZWrwntsZnTgBoZaLbWXmH732QNdTA7FrJF2Acrp7LpEnYrKkSGQFJxucrC5ze3DyvZJ6dZ",
  "key16": "4CmTvsBaanmwqhgNdXNpcJZ9o8hQJshkRwjz6w5gUpTzNnHJWHeMSCX6pVLGFE61BzvPePXbfvUkDZwRPz4pUiLv",
  "key17": "4a8HNyNdLM2emoieyVVu8GQsqQ49bdmBi9wKrhQYC4azAZT9rzcznuQyUGtT37Qo6KcFWUQpYAmvtZM5m2WJTx69",
  "key18": "3kF8aN5YCxGyQ2ChfZjRpvDTZnonDUu7i2HpVrrB5Bts8x2C65XYUzr9Ahxicn1TEcFDF2Q6nYTfNKjsccePLpXH",
  "key19": "5jesCunVNsHVHSj6sx7YqmsAnDcwc8bYTAoLBzVRMYzwPPnZ74T9vNFza5RJguiK17qEz3dstUePByBjQMSYsUc7",
  "key20": "3YCQnTTCLa1ftreWy43YR1KtBHE99AG95udX8FVMDgr1uwgazURfucEi8mXvWNog4EX83oen7egF7CDZUwesiKwR",
  "key21": "5edvx3cF9Ten1zVHgdZPwq8t6irhJLwQS7LgKsTZuc5X2gkiVGXW7pgsytBVa9da1BV6CksqS1EP8QXNXKsS2mu1",
  "key22": "4hbSeiUYhg3mAi47rCnVudBa9VfaBUBVfrS5zA51Sxwj6Ye4QFxyGkVB9vfi3Rh8TJQG83ZT76s6Vqwifw2kL9t5",
  "key23": "kaASRFDRo3tcaHhsQZcJnx2AGycPUNodL8Z9bbUNovCutJUeAcU1vNWZh4Tts9bXSFuzgBjSwBN4YSbsAaz4Xev",
  "key24": "5rTKpwjk8bmXkQEmytNCf3MwuBuwsd6FcQvJ8hTKHVh1u1Fx8ZntsgFc69mLzEHLpHsX7JG7x8BSoCd61EmaRX7M",
  "key25": "2H2EXsVzGur7ZP28E36HMgbjxuzC7VzUzJDnobEzr1DSV3iWF2BFu5DRLZcvbLPnfHYp5nCSCg4ogoXbMwgXjyng",
  "key26": "2AMR6mft1EWnPAJm3i9yPsuN8pTh4FY2vXEkL3RqXcYDjsiqK2UCmgLETG6B1kHKMnuVFc495E1zTta6TzWDekeW",
  "key27": "WttjfRfugBXFjA8cfifoxmEVbD8828TCERgQjjYkUFUS36BMEtfQavCh6pyaGPcB6fyoBNsK1QDx8UPFYpR8peQ",
  "key28": "4yFny3Z8MJFfHZBLa2j1tHy4GDDHUp8WQLXN1sGuUc5xqeiVWTow5baMeb8JxcSs4BeouofBPQ6XBHaHMcmggDXQ",
  "key29": "5d4qhH4Jyoig4jTNyDNUK9gU3TgJwMH6YQ26bJvifj6gJtn4gCqyowrZdKHNypsbm8iEMEAEpLSphPYzGkkA4SeW",
  "key30": "3DrKetsdmNBW8wtrcM4yDhRbZDf1DrXFhfAccaaipVCzNTcZmE4jkqMvMXXrfMqCRhj1owovatz6Ys4kXCNaL14Y",
  "key31": "3txDkc5SnFPZH9ErK8CLyxz7JDhS7tWPJ4XvWTKQUmsKcq8oSggD4WW75GJXYxEMWemq8emPc35sjZpJ1CHdTNDR",
  "key32": "auFwU4BD3aZxm4AHyULCU6BnjSC3AKpTKosHckTjjS5ZUBp4Lfk21usHCtoKJpBFy6caJAmtjGDMXrdsNYBmK3T",
  "key33": "FfjnkuVeZ6UamEpxrJhWodpdWhLhouy1vn3k69yAPrwhLjsRNVZyEWL7EBYCVvY6P7PLZLH3gi9D2cZzNYVHHhQ",
  "key34": "44BacC2NDdJLkkkqh6ucHuvq7kqnxUjui4XCsTzCHtFjN91bCf7YqJaUbADps7J8zpCjVcomXNkiPNYhLtr7xncp",
  "key35": "QoQsVuJcXmzB9evfz7iHtGTcrrPt8hTitFzVYpacBRKtmYzV5MdCJczxpm8dAC5Le1q6tpjzWHEBZpQZxaX5hs3",
  "key36": "4z7dJ6heS8Tyfpvngba6RtsGLtqTmauHmNeGegec7YvPnMyb7APLoyQat99unqD2FRF9VYww5PfDcPz5rLK1Wh4r",
  "key37": "4P8RtuWR8912faGgAs96mue2fBHFd98hsar6n9UYf64YtzWpMrfvW17PF8XTpRa66MKxw66x4nPxmVR9493WCLBH",
  "key38": "3Fzs2he6CHxZfPVpPFPWvcWocvrHHdvfdtWhK9kUni8MKWu66LCv3EJ1G8Xm7CHFG4v2zgiapaD6oeerCnbyXS53",
  "key39": "4v7mMKLRxrM9u8aAGP3EfahqitHYeKu4rq9VhpFjiEf2qKHSuJ3WFRgz39KD1hianD1vtLvqdH1X6KAbdWyhVSQF",
  "key40": "4BJpsBpNnxDDF7gtJwkKxxmCdM7uXMztDdhRm8o44G3McVvkcUJwhiBzxKtnSrgis8Ja2KpKDquvRJ7F18vqz5Yr",
  "key41": "xRwWdFdaSvCkM1MP32qAgSSE9iQjpRgAm8xYv4QHZ6hFBpVBH1nPosutQ9eKYcEdZWLNB3z5bGEFMrJdqzAtw7k",
  "key42": "5XJ9qM8AxJrQD4zS4TGBcsvF1CEg6EcAq9MfKheBGnWx2oXNTSpFcwcALQfb65cN6weY4BrxorpqxKSYxEKxmJUi",
  "key43": "2kfe5u7BFE3hepqz3Z6KNUGSsbhdNQyCNAF9E54YNZHkKYnMLvJ9jPGDmu5u8TC7f1iN99KiWT5365EC9jkxGpfn",
  "key44": "61cTq1LUGdj6pjVoGwRoiGB8AtYQPFfCuzTYa9MPFDnFJpYWbn6PJW6bKaDBqE5uevqiFeU5hSegW4KsevsW8jWK",
  "key45": "52TSzjAuKuBayjpgmTVMh5596zoikbCZkYxJ1jb6iPvMkQethWZ4eJWQMfsz9we7KN44FyjZnk36YMi4Pyuofxfd",
  "key46": "2aMEPUtwtp3fnnhrp7DAGmftMpiXXRPMzqW7z794zhP9wN6rwgGsrTQJBFaNeMg2jAGGEExDVYS6afXCVm1FXVsF",
  "key47": "3pUBvWmVmPqStGA4MFM1xeiv9Lg8KBqdTnVDkCCs9cxpiG3srL85D9rkGSS4yWMUwzrN9DcWdr4HpJa189R7HEhp",
  "key48": "5fLwyFh9H1qBWAXXAPm8pbLThzLUzE4McX87VpdXCmiCo5982ekpNQvy4CMMr1iB7z4YX3PWLXcTQXdtFJafGdfX"
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
