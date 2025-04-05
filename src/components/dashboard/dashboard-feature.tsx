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
    "51aULDtxY3cCkpYKgrNh5CUzTsMCUeavqTs55aZEkk41SsWW3ke3JJ2tVvL6fjmm2NGuxd3PFyzsdQaRricFbhif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28izcXkpuHdDDG5nTaJZw8XBzVWjfKUj1KWmoLz4jcjn2Buc3H7shTGh4EktK1Kt5wBzZLp6yhU5243vBJwRYNog",
  "key1": "XJn4S6iUaZdUWTEEeZ7wLfM9YDhYu2iVpW7bCrst7ge44guZtYUzd9ECeXCdP3DWA4kdzSgKo5kGeEAe125TxMB",
  "key2": "3oXkn5RmvZpZfZm38TLPqn1WU9fGbQUz9s6jTXCCiUZndhLHEBLsu886dSM8UQZnr4WghNW6Q8kAE3VAujqoDxN",
  "key3": "8WWiGCJ48abokePwh5QnsqEtDGY3uy7qXAFwvcxQF5GhdEAnAuHVqccVMuR1dn3EtmdYNZSUiaM6CUFv6ntvZbg",
  "key4": "pvxzGdneEFCMrwF5bKYBKaw2amJedph9QY4MvxsU6oe16N9ovMRnfxdw5E1XeV4cWuKvuAb9YuT92kwdhDv5taQ",
  "key5": "B9DiJag4Cj2iMGDjvkVyhDRDDyChYqddfjKoY8gmVQ1gapHkpRU5g5xqsu6TC1u9by6YW2bLJndx8LWshD2Fv2V",
  "key6": "2XHQvsdvDWe9JstnWD6LbeiCGW3urCiXNs9rjtDcrxJSh3RNBSto4u3biZcWRg9PUVbuNBwZ9p3GtKfGyeLS4Bgg",
  "key7": "4Xf7Lp3sBv5yWuBqGMa11AhRXp8XVtyBBTvGC6yGHzNYMaJZ9VRryaWtUJaU8E5LwauMzVUNWyHqYbLTyBu4rmxg",
  "key8": "5f9z5xN3cwHtDSQUx7gfg9qnntcHe4XG8MM4ThJ8HTXaYWs3amXobQ8RERYgrhbUH7qpFAHmqerNB1d1ZMHogteS",
  "key9": "JHa4TsentSv2bJKVNLnCBDbB4QyF353KZBhfLCKBpezH8kSdVp46JkXy9TmSs4o7QwrNAkVmPD2aMDpCRMJgsvi",
  "key10": "2c3eWVtMJvBTrG79SYZj6Uck33A5h9sh3nCJ3tZNNafLB3a5ot8Gxudibi6gKFXoeMWE3xu8evbHdmwnTRMiVTNB",
  "key11": "5rYXyctPmN81aybXqtrVvoQ3RzW9V9bpNkDBnSTdSCmH36TDh9ss8q1FwQLHZiKZzdmw2iigSzaPs3KUXNmdhFQA",
  "key12": "rLwssSPttLh6ijm4d9y3gs7Y3EUqiC7zz6nsPnhoNnXDvJvAHaKKDedYzRfWeoSdn7M1yStK4MfJoqFL6PDXx32",
  "key13": "5vCGXEG1UF1QEsXUyvE9kMiV7tYKYgcto2DwueMj4QPsxuBm4M1iwCTCmtZgfR8VTGA8QS9dQcBicT9Y3tzA7UUc",
  "key14": "kVspoSoJ1tdBYq9dz5XcU9iTXV5Te4ZLaBAcyn9e2hZMVC74ThUBzD1WKGNqJbUweJ4eS1oVeiERBoPdEpDaWVH",
  "key15": "3JPwAjX3UPkwqkRSQWhY7BNbszNVyQqiGrkH3RdJr2iAzG9YHgY8v81VswoKq4hBq97PwA4cEpUphAYHCE5RBfQ2",
  "key16": "2xuVdfQnaBSQ4pCEmJuBBEYoDkzKPKsy3sERdDVgpRALCWccbb8Du4P8PjLfu7fdYpDSser9QmmoudHvEew9uVxw",
  "key17": "2jmtJe5Qw4Eeme7MsgbTwXeAC9CY9LtCDrdQy3xZ4gA8SaFFukoEQa3h5qKUmxpob6cyo9cJhcqCF1PnUunvfo5d",
  "key18": "3REcPPJ3HPTNPDmhjH8gWqf81Y4xb1p1KxzFseaGHpUYEdG8BEHSfPXywFYYEwRKMe8Hd56RsCcdztmtAq7FgSQR",
  "key19": "2XD1xK3SaUXy5sS6DPDbmZetJxCmtMh1nFCf8c6KhnKXRtdm8nfMJBuLX578jzqdfCcgWcWhdhPDEVm7CLkbPMKZ",
  "key20": "52usRGEJMF6n4ggmqTXgznwvFSLqkApAqXTBiN7cHyQU8U5uyjg43n5VqriCqoLdVsFFcJcWMoxhb5nNvYKjChKo",
  "key21": "2cMhHKRRcwYDkd29cMjgTcfZ8GUA1bCnXExZ4YsYZvM5zweDD1Fd5HVeCCcVcgzQRYuFijBx2UCHF53hy14mWAje",
  "key22": "2pkDmNrpDQcjxFsggNeJKGhmNiEVNgS8rNk1ZhAtdyPKH3BBGL82iDwQn2b6fgoEhrSjAdHBa4WKsDeJ3ipBEXwz",
  "key23": "2QrKCwEZurj4mqTERXoyuzeHGvsMZGTKkMgMF2QrJaWXFVksiTG7UDipistqAE9RPgpFwDuK3MptBXehyTPj1ZX6",
  "key24": "4GS2GQcZY8inThsQGsJQ6g4SgZ5Devb7yd3uXrhXFZJzjc6LNRVYxF5FXbt28QTs1tUaCk18VzMUMiZKeXkCdapg",
  "key25": "3bTFNAr5nnwwtu4qMzMih3Agu7aZW4E7DK3pkax81tcpVLkGvGEyWS9ZQUK3yhUbJxqPa7v4xBQYffzmar3ahvhA",
  "key26": "55YC5hAgRLVPJyjZsgAtaKzrJufNmkfBUWraH6judqxG91oPEQcXszN9dGYWribAYfiETqJK59LnRLzJ89mGS9RM",
  "key27": "2iEjfNkubDLCQyMnuRDbFvAo2vsQAquqov9rFD3XPs8mHSHP13PdPvkn6Tn1XCvc7drR3hHgNTQDdu4CmgPYKKBp",
  "key28": "ntqxmfsUY4bq2ynWibPHie6TaWfMLMHiwiCXkRJFU8yifNJZyM3NPJbuvV2BxCRFoysWkvadQ7ebmbVomcaJdqP",
  "key29": "3yziRhdsUUdWfYrTXbBA9QA1XgGP7magjk6cEwwFg3KcXEPYrGWzDuQMFr3iAB7YE6feMTrJW1XGtJq6iBjuUacK",
  "key30": "31sN4t72azkynDacx7YvfqxoqgKVJ7QvUKP4592ihkYdQAyvN6jLKRHwGPSi96w7dJcAcwn5VikHLhpvh84ta9nG",
  "key31": "3erY3gzyYprfaRitLdYePnkFwsnBH9S42ekY15vFpRxptHsZnGnNJBz6GRH1QiawYvhTpkNiDgV36sMUWXPLhY76",
  "key32": "34kns9HqV1kEZ8yZM1k9oJ6TkF1dAejNfpFTGaRhd7JW1QdcJvePYb4MscbnJfqdK2WEToppF5kgbjnY6m6LKxEP",
  "key33": "4ssBPMKUDZ6SFPxKtUwnXby9941evhLRc7Td9d2SnL4h4LoTHPZ7tB1DmkN43FcY3X8mStEdwfsnNtofyQwQbiM4",
  "key34": "boTDDqXG4uc7Tmj4s6qkga4vzPJbncBCNZCepA8yAj3vxQLqxshidfeNhHRWZ18821VADJupSAwMmgsSSh1efui",
  "key35": "4n7nMjBVAuZJaL4xvQfHw9nAq83s81rwLt3764abTX6xTeE7FgfFjgocFQvDpmr7Bw5cVWJ9KnEQJ5NT74kTMxe3",
  "key36": "4igN5pTbQKHbjGHpxvW6YmZZjTJFU3qxgPPZmrSVxHKxwGbxUSz2xw3oLHfA7NDmnCkvMeYF7XAWxiJY4bBc4NJo"
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
