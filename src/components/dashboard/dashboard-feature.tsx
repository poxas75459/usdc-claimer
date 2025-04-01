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
    "36dLewKvhupAaTQmjSor2GafFLC9WPHdk5PA8yqfrCwF54V9iRXjV2p4VU6Ssq3wBsHqgU1TjpkseTDDuCs1Dpb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54jGGGGz6ytcczsPKdS4m2x7yJxXv5zqhJptbHUCyUyCJQECfUvjssbpBHbMqh5xdwFi9w6kM5afvawworpHVNqX",
  "key1": "5b1CWquMLdYwRFv4SRMYxVE7RGxbGKxLr5FAs1VYXADfwNDc3LQBvw1RsypcUpksLWbrrp9LiCPfa5cx7vsE7WDA",
  "key2": "53zzBNbJtm67iqmDobzYAmcuNx1UTPtzDj3U429AxYjS4CH2og9sW8zapTQG1NpuShTPYx8EtvMzGGgY2C6LoKUo",
  "key3": "7prPSMkEgMuPKtNVfmcnMLcbmnL2Fegfik1JVTWM1vEn25hJ2hrsgHfrBuSY21hg4izFXREB4qEJvwQGsbiVSJG",
  "key4": "3EdJiyUe4P96u8s3W2MLz8bvo34CuQjR5JPRdUxgGtso3yp7UJgw3Vg1xX5NFuyvrjQycXNtVoxRULDGu6gtnvVm",
  "key5": "5GFXsLJrcAUFyJ4zDHWq2Lk3XpZB7zayCLr5ojXJVPuMVhvWuHREnYiiJnM59AMEnqrP9zkAVQonPW1nTbgPSFqa",
  "key6": "3HZdFjohoUKStqLxepgu8NiyMtX5bm81A5uLAQCCC4NaFEnGbYNFfPazNk41oQk4xX7gF3DyYWakh77SnzcayhPF",
  "key7": "3wfiZTia8BjTNpKYHXrZFmJms7crqXtfiFH48wXeS7EwE9CD9wrWkyYaRQMsULiMGkedwABgqJvSVcVN2UfbCDpF",
  "key8": "5chTLzmDRuue6oB2Q8ZMwBZpmfnZUNPCv77QBc6knbHBnk6PbhFoVw5ZNq3eLGNAB8SdERSkYLHCoKcw18z2RykS",
  "key9": "3s4mDUCEmhMr7nvYGSTF2iNaX9LCQpfEw4A2Ap1iTkZu8BhG2D7AqfEhpFAE1R6CLVnZCaj1Zshf7T5QnnskW29m",
  "key10": "2knipJU2YgnQQGDr9mQqbjFiVLgNEFP6dQiRhiStNCpFoD8zxesNmw3XsyehHeGfcdBEuka7xEHpvprei8biee3Y",
  "key11": "5rArxLvnUeY2BsegVwZgYPm8GJck6K4z1jSXkjEMS9xEDmwi2NcChXsCcpZJfUtbxDf7jAJVm3fzwXZ8j2fmCaR8",
  "key12": "3w31CGNBzR42aPv9K4PoHpR5CzDeLigXuLCcB8shRCuAZjATStkruUpscfVEK1rAeHDgiPEPiULJtZvEnFVTGunK",
  "key13": "3t1T27Zjitwq3yeW2PgUeSHQ7tAWbj5gScxoT5gkYePgDJM35jCnXH9D8QMhmpQg4QbRAmNQQq59jYoRnMWMyNP9",
  "key14": "1km5Bpf1PJSCHC8bk1zEPJLm3A3PFRAXi8P2TaaAt4V6FzfZ2s3sXMVV56JfQ3hmHm8jyBeaAZ83Gho8pQn9ie9",
  "key15": "LuQiRWC3sWGC8wHwLWbA8SKRGK2o5pWaRgzdVUB6Yo6ioapksXWg8qTgTu2hMzUVvWPoCEBJqTkgZ9W5gkNLes1",
  "key16": "5TfaE6d1MGE3UehC28SyRcLHaHjV9Nzb339VcUuFPDDVVStmAy96MUvUVdTW8JP25xA2kDFM73CkSbrBEqvfdjUB",
  "key17": "2FESbm8KqUtSbjFeKWt7AcMddvwM1wtctvUDjTSbQvp2SggqifBp8q9A63AZ5JQr769LyMDfQ3z1i15vFz3BReQw",
  "key18": "4xQpqM3XiGsRinicWeLhCdx388HMkMs44AEj1WpbW4hvnZQrLVMBSbu7TeEXLAgvV3CGb7b1WeQ46QaViCSr2P5P",
  "key19": "3FqcNDcposspWfvXHG3R513xyG8v4nCF3Pn9AB8rL69p451hergwWcFifWoy8FjdUuginKzp5srcRgL8a8tSrWpF",
  "key20": "2rnVnYh1RgRbhtfmgp9ZitbQjdfHykp6PejBjPEkRkUeDuCJ5EL9jpMbJjLdBmMvnW21gQidjz6rdbD7ZcYMXxiq",
  "key21": "63BcyX9qpLwuCBnSDMA6AKsEZH8va5XAiZqjRrZun5Qz6VRkCvUJnUaTcKBaZ5JxzLRgkFFdZdwPB8rfhdraVF35",
  "key22": "j1WHaSMUHyuQ4pDi14cRG9GtwWWusfcr3nknw86MxYVSwiQpCdXgtK2RqiDaC31uQTALtiCr8AruguVoBYnumw1",
  "key23": "2wJwTd5KYNTRi3aSdEjhJXGX9fhZ1J3jkrAwHgJ4TBJAZjeunDiFxVdEHCBitz5uYNs1orqZ4Rz1cvGXLvoxmyxY",
  "key24": "33KWVV96xvmXctoQft4tKecmR6Jb4y9cP5VfnNmoksKpcNiL8V5R7URbgF1T8MPLDAhrTHrw44cSn6sy9gYzZRn5",
  "key25": "5zUP6QaESY9a19uaAiA9Hv8yfQTRZ8tsyCdQjA1xRV6LyJiKXTnFPwMdwadswRShsardt6PEMdYLPftuwaV6XkVm",
  "key26": "gB5TMPAgfLi2HbQ1SQGjkAjS1WLuDzoh5oyoA2TRmZeSciLxeBQNm99Y1T3czBCuZ1wodXVqUfLkmf3bzNDrtri",
  "key27": "53JeD41LZ84YTNtrm8VALHhnssveFmS6NQg69FNfaCxKDdC4EAMFzkFB4AQc5YTdoCB9CDGxp6u81DYuFYU4owh5",
  "key28": "2SduTdiEwaGqGxjCFNqKknBHcjG4d1XXt8AxpLj6vbfz2LNZEdVKW6YsmiLTtfzCt24qus9qggrBysVTAmWMzLmd",
  "key29": "63SvAYfJH7kLBoCVY1VSKkZj8vvpdMEPPFoV4nEqVEH91sydfwm4Zuki7y6FskMLMatKUspwBi18mvFozKffXrN1",
  "key30": "4YarXc4cPhVS2et3nCjdMLHZzkuqaMr5XQukVLCTQiFR6QQGfX6uWNTX4Dawa23MQF4XVS4fhksmkYBjqv6zt933",
  "key31": "9EZ1BVYTDFQCZE1Hr8t8kojktYcGSpBnVEdTUggGxDBdygTjRXB6jZRKtH4JCC5pXosLnhnoJRpMDYZ4Bi5hiGk",
  "key32": "4YNR4GNCx9toJrSmDnRKV9Dd1KELEZzr4ejU3iY49uUMkhkBJVrDZApNZzxCBWBnnVmJ2TjyXzXKriCxcYNZcSQw",
  "key33": "3mGEUrfgQVa1ify1vKQcs5tXAoq9AJH6uPq5Dn5LJWnSHaZczkt6AAk9JXyz94GFVEJZCPm1yr4qmAuyfy1RT3V2",
  "key34": "4oMJGLktM3SjRdNWwKHs2dQrH6CkoCXgjVsbmAcWGo3k4fskwiycBPjMG7kTSYzMDdY3rX2P1JQhxqxhR3XJWPHh",
  "key35": "6DF6TxZFZTsJyHxaFTDEuDJa6oFPAQ99cRXUduS7d7GmMxrU4AURdpvehdiTKQ8tJwpFz9f5C2XJqLpMZ5vEcHU",
  "key36": "49TcmSKoVuBzQDd1QVk7Jhqnfsb24xxu7uRfz8eT9RetjXZCi7Gd8LvmNtvRNACHQPX42nTxi6bsAtv8XM7RAQLY",
  "key37": "2ZcGTgeWifD7abNSERkPVYmZmCVPoz126FNcFXQxsgpAujJpMxYJaQed778jwM7Psbm6tg4yj5ZC5JoohtDzvy5y",
  "key38": "5iiMMoJMdC5Q4LwzMeJo6MjhjgTwKfv1vy1RpXzHrEGxcxCqVNCtnoDqhgnZFot6A2oCM8BdRArivksRc3LbHmp2",
  "key39": "5ZhCTBKdmKX6YQzpzNvD6nS6Xrm3eBp2MmJrEefGiUEEggoBLrpuGddRgdci6RFE2pmwuBwMre9aR17EAvuH1RBb",
  "key40": "62tj1iiuWorC1vh8acrDP6WWqbQaAVrunt5gvQKVpKiT3LQyQr8hecM6VRrSDHzAXkiyNd9eNJSwFiiv85efxERq",
  "key41": "3BXGFnYxZyvZX7EG6PWWNS8NVWpoC6XCXTK2J76v4ax9MLTrSaUBc9BfHyzD4SPeu2zZg5TpnfpuG9tyCYnnQrrc",
  "key42": "48jGQYGk4ELFKjewSdduSyq4HkdUf61Zu8QwzJLFyYJLRkujG21JyseFVVjim6YS1CnBTKbVoGmUWP5Pj1syGwdJ",
  "key43": "3i5ETiyPCda3YBzh4uTXxd6yi1Go9hE1uLus3hH3QrrMJGyQfrrvVEGVQ5UGfmDAbQgDoTpKEQVJz5hLYx4tyiov",
  "key44": "ABMg533fj9RXPwq7Q93M2t5jyecBehmAx7ss6Y3gZbzBeBw3Zk7kWCarbuZ4JpxeGVE4pS8p2DP7uAMHK5mmH8o",
  "key45": "3LnLwcpqMMrHhMGnoXAz1HLdnSe8RUoGc17grzDGDazoBhxE11i3ddon21cqXBxBmfvdYytLh1gkgZxWzgbsnf2R",
  "key46": "5HmPZkdVoPTxVFFcFUtJpuarTEkBtRD6quuPLHbatWE5rbRTmEoQ8FmQuFEZxoV41gHqxCTt7E4SUPMGe9ERy9sj"
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
