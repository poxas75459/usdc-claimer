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
    "1wRn7UyxYSfsjsEFeoC1ghBfL1CkkjD86LexhbZzUQSCZuF4BCz5kbtXKRoNpakEs29eTtkSQ6myZfCxU1yvir2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YLmEw4skvWSVjt49MK57B8YuFnFh2bNqiGUi5cFNvLWSvuuGjF2arBf8ntNZV53DBFdqxxxJQ1TB3HEyrTtbKLr",
  "key1": "5crRNF8uJxqXPZhH47qxB9NV7sK5kPd8jyoppkQPNAwsLTmnxcoikNhnvfRxSf8bdxDcAdWVjzF186x1x6Yr2JRz",
  "key2": "8XStxdEV2jySQZ3kx9TSfovC9bKWptmUiB9wqNmG4LoUU99M2athqXfDHyqcAjgdxWAn4qiLvxwDGNruaUUxMW7",
  "key3": "4RBTP3rQ2aJTn1LRvEV3rZt2vire7qNysMjg8kr9GBtQFD3uLqaC8mMsn1sP6Tm4Dr3wmpsmrmtcAcciTcfgX9kq",
  "key4": "3KPR8VTDacoNEegNS6qMq7uCYrw4AdYq3zanPK6foMzVb5HWhc92SyyyPvnZEa8qGrKLhT5VVz5QosnxWEt3v2oW",
  "key5": "66ZFkz4U42wuhxAVM2EKtwHLUsEHeMNBaUeke2E9tkUQTPPJ3h1FnMq9Kis85BqgvHTpb9S5z3yuscbxhMQDNwDF",
  "key6": "4nnHNd2VvK4QLs2eodSgLq12hbnFSYaqpYcQJLLFEqyTMyHhTzMt5EY2MshZnYp1Vy6dpMpyPFrMfXh1JDvw1YVX",
  "key7": "565KYXgSYCVNpNVEcbJ2haiKUEDkYtMDomG8F1djPg5hmbAEyHurDSHHfRFe1jYvR2M1QqbbVgvZ6eb4RDvDzvb3",
  "key8": "2HCdfNjht1TRsvUCRRswWbWx6u5XBg1RMTnJVCBVbaVohC76HzvuvtXkuiQnKE86Vrbe62P5xKLXKc5dspMYaEyG",
  "key9": "4xeBtiSXpF387Jp1onympwGDC2X9jwiStS7ARiL47nkE738tHp4fjjCtAvmTwcDBzd1cNVfvMFgChj2fUVSsfSDq",
  "key10": "pcZ6F19Qnnwd9auz4RQRo2zp3vJD5fz5NGQyRvteMqZKH1vcvjto8Bo7XHgmGvXSywUcDrMhEh3hucZtZkk8TZJ",
  "key11": "3JdnT4zQVDr3FDE1PP312DyZ9Jgix95fLhdVU8n3GMCM7twFwPasSG2UStyDzTUJFuWEyajgRLQWEK2sn5tM6hbB",
  "key12": "5rQDPzJS8sQ4QvCZzCzPEWMhEz9djzSniZhDMMRqaD8o4YpPd9Xd4hki15MzwgjZtyKJ6Gho61P7ByFUC4dc8WB8",
  "key13": "3aRhsjWoBbXYEPP4aSACvagzKBF98MVYJuhcowJGhoSVKm2xZy9WHdHZzJph9ZogFDxkM6cXznRTXhAxVNvQviDt",
  "key14": "2SJJ64r7MNRGVcC7Bi6RU3WRtsVLdFEMdnvJ4wWA3LJaKZNMx8Mj89wuMXLmv6CJukfWnoPtDVhV9CoeGFqoqGDm",
  "key15": "2EUdRan2QbTGb4uM88ggsAMQ2M3DVPcrJu2V4WGje4zxhBtnEiRmBk2dsciNpntrXiHbVTjk2vJe9uyQB7Uzj4MJ",
  "key16": "fztHsrbvypAU8u5d9NWaXRkoaN9UHHV8Vsujt5SFtcEdEf37LqfZfE1jegSvsmvpLtsm3rLtwGxwBp2e48DeS9U",
  "key17": "5CAXMwiuA8cP6qDxHgbsk9Lmap58HvxiCSne11E6dRJDnLH5VjNryeNRZVjq6FRuG34i352UTTTB6GSAuJ8WqbUm",
  "key18": "2t5s6mSZt9L5ezL5JryRZSQMDedXqkd3avrDHx35XdbHVLaYP76FpUYS4HutmBX1JD6U8Fr6ejfwCYAV7vQ7o5KR",
  "key19": "ahPC1Z8kTgYweQBe1H3JUdZVo4A4kdvXwQNzyhxNGKp1Rmvgjc5V6KJpmsLQEnieVXJsa98D4DydxMJwyZx5EW6",
  "key20": "PNvB683xNLYAAnVbdg635kM9GufP2qxEYbQjr6DFkgMdKFpgbVTMHvVgp55P1VzAYvdE1ugAYc55jiD3L8QF5u4",
  "key21": "VouWibaD1x97eyJXVJ6WopfYswae78TqkGbhRVmyQPMVyqSXMuZ7gNRgD1fAD6B2L2tuFyqkKv6AWit9zD1wD9L",
  "key22": "4hJD152vHBquh3H7ggtcBwiTYfYq19asysYRkxu8AVkgZVDK79CVAz6jPbFyfv4RLjkDLAEaitMTG7mwgL6pzvBE",
  "key23": "3iUjtGJ7YkX9be6CNfUiXXtSBWuMJpFkzuHr7L6FcgqaU8QHy7xoEG8UqJxfWb13YShFDF34AutA9FPLNUiEYQ9q",
  "key24": "2fAQYaZiYeYhEoqYoFTEkLcRWVPsLgdGSeUAbRyocSCPCgBNGJb2kfsB8VJniWAsxNF45LkPV5ujAVEkET7bDcNZ",
  "key25": "ezhtXgSdPTqvNq2Rn2vrXsumxxWEV8KmihUCLh2LsJKLSp8DQahgJ4cayNf7Gbi1DLhb7pbyik7vHwwDxXy5eA8",
  "key26": "R2Gw4fWiqGg2qSuh2mdFMoXvrJJP31wyC81FYb8cJeHK1THS8jkyn49w3DtfYAt7SXLP1U2A7urQo5PyRdiavj8"
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
