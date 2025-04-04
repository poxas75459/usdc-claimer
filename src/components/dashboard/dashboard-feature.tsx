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
    "59a6L78ArBqiWx9HmxsovoeW31qoQpw5FAvxNkNpyHmbB3Fp3Zzk7KAYwSd8dhY5LzYxY8CzwKMBFN48q9syfGmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NwkEh29K913wKXaMibyW8QBAaxMmQjns3m5X2Rd81SSUhJAroa27LmnJdSMp869bxGnV1KKeAoqEoc9J9UPMsyS",
  "key1": "2zKbf4YdNjoAfVM9jhu6v6UHfEucYJYryzq27GP7QXytxRkuzCGMAWWnpMmL1BqE1MHtkyte3oZnPNgJXg21kHwN",
  "key2": "5GqmYwraSwAAikx5WfdwhzMomh8taNKpMxhYbHJvPFTbrGsS4tDTeDZK6oPNVNwaMSn1KHfbzweDPncQGQkySAa8",
  "key3": "24ZD6czF2K61MgvKmMU3qHKFCUm49u2RwEUqDSeUm3T6T8DLqrBdAStHiuXRAhd8sYKp7ZYMaAcQD5GEN9SFFJ3T",
  "key4": "4opxVeqc6XH99LvURRTBiteY1XGUCAuKjJuTxmUWCG5CBwKHzdQJHnm96tHBSKBGWHXwmVh3T722PNofvtQpGKff",
  "key5": "4NXQ9zpoNktCQKJQFTQk4CodJv67JwmGXA9i7RoDdpcMrmeXZnvYaQoQJGWW1r4n2HHonvN4QzeKQAjhoUZPYLkS",
  "key6": "5K42GxR263HrAXUPY6NRNTnZ1Fm5ZjnA8JCYRron8WQNXoEDe9T9JyPikxwAFr9TpdhGiWobPrD8MLGW1jsuTKUi",
  "key7": "2PKNKLPtkpPmVZHPfkuqcK7Y5sM27TWuopUXaRQ8QyKdxpYFTKjnknaid97oT2G4gJRHM9Rr46TvrHAkBxJW4NCu",
  "key8": "bTbHuHuEHVMhe8qs1eWNdtJixhAiDEDTiRwUUrBLgYUBwhqPaZRapXL96ciDc1N73PYWherGoEbgxrCRwipWp14",
  "key9": "3ivRQVzCJgaBNumESRTtKmQrTc7nqNxNdsLfz9NbTkHvxW4Z8RnFBRFuHCVwY6NfpbZmFoV2WPZH8QqMvthJ2DB4",
  "key10": "2nM3vFwZZkU3Xi2BpZ9dRfYrJbJVd5yo7Ae29aDSxJo1XjbKus76mxWBbVxkdvSaaXFvHvPstGZy9DeetBEe79sV",
  "key11": "38qP1SLziqfWQ1uQzNsaomzBKAFw57oMrJbzHKHaQWp2iqoQQxAFTerWFs61kpKjeUjShV7PaAA9XaNfvuhuoMrc",
  "key12": "m5AR8Ym4X7HJ1tNfYpSx9R5YpkiBZ6t4m5RGVBejK7j1pVJCoorrbn6EXLPt4ssAdjNYSm8weZs3TVQLy2DXRjE",
  "key13": "3UdSHcvCuu4DKMnamyKrUTPtJ3Th5oaQnF89AKSNptmPufdnW7kdDbbDN8ZQ2ZPoLLHTJVzqccSzcarLsERbwGUV",
  "key14": "4vrWYJvG2c2nYQDhKMpivvXC8neLS5nW2zzzH3pkTPCAk3boX5paC2oPv3x4kdtUBcsW7xExpuoXvEQN4qHjTDUC",
  "key15": "3TNU7b9KP33H9t3P8goDV7GBtwv6JSS5Hh5ECr8Uw572uLRf9CE1vqMsFFk3WeGukib2L7A2X4BMfrTzXZt6PfBY",
  "key16": "4NKukhQWfioN6JW5J2VAYHnUsXTzE7EEXGnfDhTzNrunNQ4PcWC132crpPVzrzxKPbRCD8qec7YVJp5cLW63inLs",
  "key17": "2k2RQEWr44gdJFixzVpmUwLpSpiRbmo64HeR5FyruhFURpuH8nAkkk13TEfYEEEFVXR4oEUySokY8mnsj43DWeDe",
  "key18": "3udzyfNF6xS7wHqUS9jc21DuB1VY6uurUTAjVW1KGioKUxe9zBymchGpiSGXiy89yVLamYecFwNmz2eCS3y6Emwa",
  "key19": "5Yig5RsdGg4CzjwDsP6LzW2JQzC9dQKQrFkr7mHKbniA5QauRfLn9YomPDJM2U7iqVkDQbkb6hcovjVbU2dZwKBe",
  "key20": "3h31kEvdiU9anU1QnaoK4AYauBSpVGoBQ26w3jn5SBpzuFndVuREitRJQwG1JeKwLEyhmwSErku9q7FeyGmgNvwr",
  "key21": "AfhYy7RT6bEj44R6w1fByiNNXEmBjsmSYjGqJMLJFMzFfYuaRHQNnL1ymDigfdb5Tpuzo4M6dmrWvLrbpFsJWoe",
  "key22": "2kDB2nfon5fDoj9ixr3scbj2VpTvxJXj4Jo6KQtwgoGYisq8iLNLWcLi1k7RgZPNJVy7bynojqdCPgR4LZTtphMD",
  "key23": "3STPLNENVCxp5QxyAKDn9BfMvUWfVc4pz4gTdxgDx6vdmaEvPnSvBkfMn4Li1MAaVBDj9bZZ2AcG5A7Uj6We7yFw",
  "key24": "2vwqKYziNDSyGusohpXDDop7rWZVzBBgbkosBrVbhL2kPDRVMEdcdS4yGQWkhrzvjBqyxG3Q3Tk2gRqTKxTRHBks",
  "key25": "2jCnEBAHu9kKkxkZA4wF5rPmBHrQ6SBMmJNAFV7aWebkDdUEqctYtvECrJJzGspKoKvWALLLbisZiDfcLPQgmB72",
  "key26": "QAz2EP331v7kFGEZu7WXtB9vDjVj5CYsfy3MBEbFZac6q5diGEkd7R2HFH64pcbSTiNAHiG3N9Q7txaBt7o2A6Q",
  "key27": "2rUE9s4pobvq6VYapw1PecSrc3YfBu8VC6cKFnK7f9pW9b4dAZucUNDuHR9SpAQTrVthTviHvvXjVmC4iWHiBSVH",
  "key28": "3BPHqxeymoqzy6DGRz2X1mgb8drT32TjVnBKawEzCgZLsuU5KnuFRT8kTzftLdjygeqxhUrLGSi76MMyMJNcg85o",
  "key29": "ngScP66koJJNDswHN4SNrdieqVT51vWDV9iduafkcVrvvVyokDYWkMCU2LZbxB4RjJjzdAvcw4pa8C2UDT6x8r9",
  "key30": "5tVa1RE6NdTXrnrAykxpHMPtPKDFhJaUUWufraHGp3Dt68mDh4rG1RVNGKRJG8hYTjATTTWK9cKnidsV2EWvGPAa",
  "key31": "nnm1o4xGRKKJrSgCshAZrZycs7ZtixxVFwhB1rTNqovfcqmg7KTsL2o72r9t2TtoWq7UwnSRCSfTWq97t4hbJBa",
  "key32": "5tXSSWtiz7rnaVfpxsjNW1FwaUwGsym63KGtUq9D7Jk92qHFHxSfBcefCoTjb6Q78UatyMMf9YDYZbq9HDqYcVKa",
  "key33": "387MAA2B9wKhN7r2tcEEMcRWjcYNEssK79hzVRJRUw5vd4tQzYBnXGVNEnd5yiSfL9djYbrwYuPbTfJfYiND5sB6",
  "key34": "4e9d8rQv2MhMbwL66tj7AgoE3YiwaRSjZ1AFnU17i4peFdUDsBtuQ59cHTWdyeNuTDnAhdfubWEMuXW76uhANoMr",
  "key35": "3ygtnrCsvvZSSuC2Cp1AaxeXRx4GnnbzuhN6TJBZmyGjyzSR5SDi6rtHtp68xdaYEvffLTdFCZ1LgJcDTCbJnob1",
  "key36": "4Zkz5BmTUdNRqajegpzzreyvQGuXWFVbRmpB8a1rGshxAJCMSpCH86bsVYAGxCSLxvQ1QTEkEMDkhsJaccLE84JW",
  "key37": "3iBjqrbAxg9rcoooaCaFP3BuQausmMrAchQoM2ojkwMCCg7muUuW7DgpdUvoaZC4j77GyuCMtsN3xAiRAj5uzrWa",
  "key38": "4ehCQUpeBcrhzstQqQuocSBnAjJ9ou5aQb9uATdu6WkUUhmYrxiA9AXCwjLriwJkpNUyK3k1AGtGF3eEquYM7JN8",
  "key39": "LLQVAL9UzmQQGx4MTXUbLWQNtvtmTr6Foj9YqnUHoHMaksRyXf1VG59ZkZ7rXyARfeEzBh9EqCU7qqizjuWnYZG",
  "key40": "5cbKNcfPGD3M5k1wdbMhMQXTg5MCBDEdnqGT1tFNscsXXGwMb78qhMQG8T34rDRgEPB8eDQFvakZaxrDqCqbYCfk",
  "key41": "Pj5H9DiaTKRoG1ZYqiyygsei9dy7UqVZL4GxtDnXLc2YDbyFmH1rBUH1QveXr9mSDDDjjYeA24Yo4yWFdMrrhjC",
  "key42": "3ecpTjyHpWgwRmKYN3fGx3mDfY9XKb7TgQMDewvdsrpZPT57gwwjqkFwz7AWR6HNNS7F3oGnaavocm4sPaXc1HER",
  "key43": "4rYh4zuzC3Bi4JW4cqjJLKWFzbmjRAZtuVbovZppYmZUFx4vhi6rSWdbSRZ2zqDT4NyMA9NoE7cLZpAzWknUMUVk",
  "key44": "5bmj1gdPksWpUhgmkAopD7gcVwwx1cDZC28c2ZUrE4C4aDZ4pi3YRw8Ck1Y2kXegLiqZjsqw8Q93ca2GWRSKtxd9",
  "key45": "3NGBWo19X3A5E5nFeyhvWdDUgX36zS1XTyKZbbwpguv3QDfKyZRT2z8g2EjgUFv5Vu8axAyoh4ZeMUW8goHqbhq5",
  "key46": "4MGTpCgEB6e8ejb2JMyKxGMikapAyK2QwLnXUd28F3wfHBiRPZx8mKs59EWxGJRttPsZAUPZjgiAjA9AoTefMw2t",
  "key47": "2F44nRKDNhZtaWXrczXLxaNz8M18xKiLU5NVvv3bpuDfYuMfRqwMNR7YUHLpw9KC8yb114p6ai5cVcdJuw3bYshu"
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
