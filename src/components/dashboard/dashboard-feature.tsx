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
    "PhYTNBvNAWSWkEdPuWQyWj6RWbvEEAMs8ZvuLVqd21pDeS9UXfNsrCpDVGe4zGBVgicCJZZFNaizwdv8fMmWLjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a28nk11i5rHQ4BZkNwckZ5Se2ZQjLfvf4jHSB1H54j4HzidyYCrjAaC8KyHsaRU2pvEDD1xFC3ZUTYn8iLMsRcv",
  "key1": "7f9WbNPmUCFtaiWKTyhKoj7Ea9rixuSSEVeZJ6vYhJATEvzRQrKLhXheJh8FoLzoEoJ6Qka7UppHrd2UmcLuq7a",
  "key2": "3j3EPoMiNfMRMx9oUQkDknNe2XnEX1Joc1nNtfdUrw9VPFEk3KsMXHhAZ2NamDCpQ1nTDXjzXbHbatWeBpUgdHHN",
  "key3": "2jwAVfUuDtEneo2n4n6bGbTVND17oFGuBvLP8LBzESQgVgJSVDxHX2zWFPjuZW9RHKxVA5hzWMYt9vYE5dteVTTg",
  "key4": "3JMwUh21VczvQsepeumnSiCrJoDBWUwhRfCbP7AJgU68JpZvFbbQYswjPy5JfdWf5jUaXmuYo9KAucuxxTRjH73P",
  "key5": "3PXAm9LQ8x4o43FiFcfqfWNqNVQz4dbqt6dUczVP7qx8WgggNjMR9zCkkHsW2asb4zbcvtqc24MKq4pBTdKL2Zpx",
  "key6": "21EQHGWu4oVfn8rL2w7JzbqgQw7UKRMUUQyLFUBELvqAqDjFEUBQ1RuSc6EfuGma5sZXHjJEjCJkH5v8xcx1nBMM",
  "key7": "4pDHtcBTSxeTUrB9cMMNxtAZgKkiFyCPYUWgLswKuHytYAujFSmXRehkzg5gCpsBLe5E2j4LExWyb96ysm5AGpgT",
  "key8": "2Jkqzm3AJ7xqrS7WLuGqiiQZUh3dZJy1c4WaX7ck2BQ2rze31t35to2boA1fkDbpePGDC8SYyHQ6pp6Px5gZmB1r",
  "key9": "4pJMLLi2sMYo63GStPdBRsyWyaAZdgtUymPuDMXBYLLpzakzdrVcsjpnm2PJJYVqQcKkou7CBSLpb3gxfGu5XRk4",
  "key10": "3zVxHmwVU2TPHS98psj5SGJT5DTsSvvwTzT9DprFzk2bBaAzUUMPotgqgBwTEoL1pikzkqxGPEq7mgUjbrUSX9dv",
  "key11": "2YnD5FuXr8tXBBWcxUVMrbz2435QTcQEV8UTvGkvx6JgXKPT3L9tL6RsraCqdTxbHHyRXfSKQVCcgxGFomx1Qhmf",
  "key12": "258n2py757rzJVp5McpNbmvw1FuwBmXSvpUVrj1WkKCmDyVEWyfgktFWp9AhQeDq1gZfV3cVJAFy6LV2ExSVASuA",
  "key13": "5VmNRmp8YEFd44DNAhwwNPGQGUGRChLsyJXLy2LtkrjJ6VLeAd7NWU9bh7B2Xi1BGdRb6j2S687osckSBJWkFDAs",
  "key14": "2WTPaGrgA286be81a5rHHrkmj8PHcvaHiojFRgMeiE7neD9LB3NG3qvj5Mcfgc5C5AJvhwLCP9VSD6kvUMugnKQs",
  "key15": "2fhrrANCDjdrSsSRNnzGXaUaXHsmBfLdjrEEPn3k6Myc6jkg4QtKfc9ymDEPXY5snVrfm3QfkQdESaBySMTb4UWn",
  "key16": "9RjLJbxVwk5UXFXoRa5i6EpfmLfC22xURWN7eRVstHpB19q4saN6cjAkKqkEryD1o5jiVuhZTN9SPcEZbubwmrE",
  "key17": "61DAUvzhCUt8iNRtgvTCGtiRdrBjWwBbsvFLsPDi7uBeXTvbUhGLqcmuhRpqPaNByw2HcHApA1RMYX2NzWkVyvBD",
  "key18": "3SStXzkvcegfjx5iV2L8fowJhsT2xTxeaRoFAd2JusSJ3gRsThEnn3TLR27CA2ka9sCur5M4EKzm2X6ShWY5BExu",
  "key19": "42rBarYsJG9q5fYV9vmAQMXXZJ2sKtUw8BY1AneTRh15FBjehoZ1Gs59trrC1ddujoqJn3kwAxGh8mHWDF9PUorS",
  "key20": "5eVAUQfr6MAqb6jXm8bqTGpzCuFUaYgE4B9934HtndCZWj6rTFxwgryurkYz6Zu213KEfi7cScppjcyJkbNkrQxB",
  "key21": "2WFrimbeTwXegK98VZaEuZpMREoaPKJEmwwvkDVcMdBJ7Mze7JmXGSt8QhQUogat4SjYJQ9hqKXEu1a3GrosNM1w",
  "key22": "2jLkC7XRMdSnTjYvu5dysbbzXZtifUQj424zoXxhhMGmjeWYi3K3SfdDQf7kCd6H51Ra4ym9QWxNT7deon3cnhTD",
  "key23": "4yJ5gjASosmEWqcUHksaA1H2TaRhHK4YHGMeZz4kZENkdvweFn2kbpNTUFrvWPvy5vMUMbXLXmNDJXLmMTg7Ugbt",
  "key24": "Rr2eJ7yTHnwWQWk8fc2p5tU8eSuGqRtKN4PzYQTovnJtWXiE7GaMFhQHpHeF9VaK4gYEzp7zSth26DHb7JqCgqC",
  "key25": "eu3Cz17PELEbAVs145Ttq8WujvSjNfMdkJZGmAYsLEwSrVEcYwaoFcmsYW5EjJM5Xxug4ix7QSEa76CGGm9ZivB",
  "key26": "R6xLEJ8wDKHZZpuWTgEvCpPbi3iJfW2Jy2Mps4ARpEXagwNBZANoB91qvYJBrZq7tKihghaSLv9V3Y5YgmnioeL",
  "key27": "3KUvaMMkww791XUxd89Vw3Wdw8dVK4rdNFDD3RsC7TqgtESaAQqEu8JALckmg3FgzBkU3D22GvA848nUVRWmpkGM",
  "key28": "5LkdatajtpkNHPRXfUPvRALsTGoRXdpA4Hb3WkDxByMyY5fnr5RWgEvRtcCH17DRqTiCsGweyzbZ5okAyhiCBy9s",
  "key29": "5jbrsmv1NH5GCJycoHtzcgumghetmMPVhtmHUGPsxC8szNrMgf632W41CGZKBzEqNsUMeZ1NPqVBrjbuiCjgjU5w",
  "key30": "31eGaTEaQfNsA6P3F6gVWhMGDMMyy3KSkqzAhKKBmVe8uoAArrRYsweatZQBZMDs8zKHsiTqd6VHDCBqjYaBhDVG",
  "key31": "47rM4u9UTnWRftim8V8nNBC7sRXf34KXc3DZLDTwnihzJgji8CCjcJk1H3nfsK3DPFJ3ExezchYLFLGRRded2Vcb",
  "key32": "33gY6JVu8v2V4nTEDi2vxavxN18BVmGL7jsXkC4Zabasqr3T1TtwuBuqGzUQ9VRPUDpoCSgMvpaBZZspFHXnrP6t",
  "key33": "5ZcWCYVdg9iUs1Q79y7btjgxV7B6i2Vms8hcyQMNoG5M9TD9it49sFusVw6YgPyTGbLyghCqYBtpGzYYXna62o4F",
  "key34": "5xVQ2Vsocqp4qnaCUHMnsHxJZqc5U2b3JzN42HWhSW9d9BPHPyCLi1FSJVWFEYzyJoTFYFx5miiaAqzYKK53Pdt8",
  "key35": "4NNUVX1gkNrayptxFXbQAEg83YCc36XUxWf7oTbyURFLAoWFYmkPjuN1cQtHiNputYCxpNP24h1bbvRbATEkmQ2k",
  "key36": "345Sony4og2rKig5P7rExc3mMKT1QEzQBaj5evZTDxHDRRJbWvfsNeQkwNGhhgv6q6gPGryBrmW48bX1U7mcNbEj",
  "key37": "2YhgHY5GpH6quV74PQ62UdGjSS7ndmTJnvnRWJ8eHwRLhGjgHH4o4fm8mwPXphDyi63ATSAmYj8QNeBQK5an6bNF",
  "key38": "4jFz48KEEUKhzCeNCNiZ9PhEQkbCM6F6DxTvBFqqLJpNZBtyEf3WCizdhdnYf4n7pvDfSfCrESGwhUojztTZNrN2",
  "key39": "577t8BjuURnVWGiXmZbMKoTggSkiofRF5sCAbM1FWyLzbZjdVR8kSoE9c4B3oFFnMEmgBwSo87ei9Jsp8bPGgxPv",
  "key40": "qjTHyKWWuSXPFXVQ8Vrzd3rLmppW2rXd1fRiDSdkWCyLqoeL8WHGoNWTrBXzF4LHYjphK1jgM5DxszZMMdmMXfa",
  "key41": "25tKD4eHCJFj19aEdzpaLNH37i51mYd9Gn6wCD69A8ECz2Leu5VVhSMhYpBaQhXgHgUHmmdgThsLCPNsqpDvz2N6"
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
