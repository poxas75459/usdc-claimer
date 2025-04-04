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
    "3q7ukiKayV24U9HPDMwmgrTbU1pkqx8gH635ZwxJCA4boC292tKYH1NeVJ2rNg6sqMz1ShmGxPw5TcXbHJBkQniH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S8Ya8AbVgtRWXXTtnJ45bgoe4UhF5bqLS8izzFCLckAQV1tCB8wxPYVSV7EsmtvCHUo8EoqB3xbBeBjVKsxonte",
  "key1": "r3QowdBhSd5ACUhpTJPUZz86tTpJw2TtmNWtyWh8X2UdiCZue62rmTN1JuyXTEuLQuea8h4WhjCoBC1g4eZhxcK",
  "key2": "36Vx71FcHEWjyzMyUShXX6wsfDUx6G2A6tJSQRqw1wAzcVASZr4roxgrx2U1yfa7ekWHP4J7BPJj7FUcerYGvyCx",
  "key3": "2RTsjRWDw79AaX4apKhTrHDv8kKfGZ2uX7aHL3Ym99zeKXZLqWayCKFikNm4EZDxQB8dB6QRiMtcpXYnCAbYDaAt",
  "key4": "5s5MTG1EwkosZXGCsVFd4cZHnYmuFa7pDejVfS2cGCqiMrZTYsMCNXnreN64sf1mCQrxpoBi9wgSrRbsAVoBbX1h",
  "key5": "5b9AYd9UxvD7PzknC53nZRCNy38tfV1cF56i4KoC5GvtuLqeZvEntL7t9KcZSvsnpWnXLjvXMyYhxHtJ98YWpUic",
  "key6": "eRRHbQn9scu8YgfEMo4WniMetrC3mW6LoEZrzJpDbaXVwxsnzSDmgcwBTt2KBpHcSms1fajA5USwUhFoJ73J8jB",
  "key7": "5QrxkuzqTPoMGTxSGnWpXZRKjqwfq5YPhSYKiVFG9AohzG7ybaa9EMh4UfCN7hHV6ukrw9YqU71LYG5ziMqA5GWJ",
  "key8": "36CGGCP4gv8JgBqZFuhYiUr1dVrinipVsCNHELXGJKNuf54C6Tqm1eDzaY3Msxzy4wRYipQvdcgKgTSeJCGj5YUm",
  "key9": "2qdxTYydx3g8GaPbiLRwqgwccg8fUyy1zRQS2asXL5CLwCXtpaRXuTKD2SSkNCuW3oTwPamUNiYM3qYzcTauRjD7",
  "key10": "41PLGEk4xa2c6NeBEyE2nB4XMg5kQ8J9gc3hVDsfaZ3WqvBhbXJk4NnL3TBFp64BTJPWqNJveDKQMHmiEAYgLBdN",
  "key11": "HhPoicD2tLyb13NW44oFow4xSuQ7xgXhjjzRCGAcEtvLbfBRSGveHDgL55PkQWaebKgchpA3mwGLEtsEz5qkJzt",
  "key12": "42kMMWxpAn5FNQemVuY7RWfHHUvj4RmMwzuHnj27x3SCkcqbkZ2L53m5Xeqbxxso5FsCoZZa2bP6dA2k6aQgA1Ka",
  "key13": "2YSLkLvjgEdrcapwgTwhBqMQUefTMwrgojYUdXp8Fr2YQmMvpogJsqPVi84CiYZo2udDupc26kMaqpyypm9UQnSs",
  "key14": "52DApxh1PHgfHTBcMNBRexHjLUwzchK8iHMRx68CYpiAPvz9f551VCCw2EvEVzGQiSHXokTwDHMFUVjtyER8uc8r",
  "key15": "3BpmVdTzbxmjKEGFugyxLnJsPVNU3Cs9af2Wso1hB18ing13yHXXZRUVmN39Yzf3uspeNSXR72efbP597FMyr739",
  "key16": "5CWkrHeyDg77ie1wdfLQeLP4wHZaw4XjAH91CYQPccahF3Ajoi2xZuCZUhtVEXemxWcdUpiVYLicXcQ7swrYoLub",
  "key17": "tdWvdfySPmKGwZWZWdRFdS8ampUwEKy1K7oFb5Ljia96gEHR6dsDzECggdAJpYUniJMKu8n2cMpZ3PpqLwhB7BH",
  "key18": "3SW9RKqbQEy2iVA1MSJd3xUDZXMhAnUwi1YdF3t5jN38j8CMyg4HL5aPsAXtT9eKBEkmB8uhaLH5vy3CbQaY8tEA",
  "key19": "DPgxUz67vRNB2L39UL88t1SyF7TwD2JkCyVj7AmSVw7SFjCWsnLcxowMreYQniNJUCTHHK1LF9AvcS8f3px9NMp",
  "key20": "3w85VgKQP1sjExDT9t1zosEgTXTJFAKLakrgd2Gc6rvRtJ5BMBh7FKygC4PeEPZRhRxP2kwNNR2PxGGA9mSWN6t",
  "key21": "3zYH8JU411QjuR5wZZCSX4aQCJycXEfWKusX1grNcXAeEkPCwjNNvYbwUoJ3gTSuifSBy1xDAQNNbNYBXqovxbyd",
  "key22": "GumeFRhWcQQt5oKmxm2s29nKA7kUET5zPcaS32qmpuY8osrGpTUTK2fXQtDELYLpqm4Ppd7TST1nL4oqrnhpzA4",
  "key23": "9ugaa62ZdCMrNoyZRjyyYdLwPDtzSGokhaH4qdisyawBfjMBxv3taKSf7vhwS31RAecw7i4G8s3LXATZnMobPxf",
  "key24": "tUWs9ThdTZzo2NJzppTYh9AMLWGzJZvW4EA2ji4PDbBQt9VCNTg3dX6vC5xGgsQYevTxRmt6JAgoxT8zobLqYHv",
  "key25": "4rbA461Exo4qpCwCbhEVBVJiHZf99hr1DDbKUF6ChEL7Lp9f2MWGeLLmpVnoB2NmNZyDFzFZyBdaLPyGGxb7xbNV",
  "key26": "5rYVMEogYQo2WDrKGN2XpGw5EFB1hXi5pw9c3HSKAnnDZayZUaoPZQVdWjFKnBmQh8jqyHE36rAg4xEfqeoGVmgv",
  "key27": "4Nq8AB9duGEvETUTX4iqWo9KtucdWmfXFC1BpqinoAym1N2dyq3eVwfHoZ8s7mTjbjHd4oqxMcEbn7qddLj5oBLP",
  "key28": "4CBrgZGkCa7BBk6sDfgtoPxwbAm3kCaeqVgGMM6uWyiVeSZPFktgwA8UkY8sGseQYGbUuDdfBPFRnmyMFrLeNNyN",
  "key29": "3y48BTURPwzfRveotDytBZT11mur4WcnQ4x55awK6j1Bo4b1u9gopJzv7uogsKeRvZxgJm1GLbrhSKvBdbDq71Ru",
  "key30": "4mSAtWjWWXinnd4K1qZjybEhTByAcLCQtQNo8tq4BbQsdUh7A5cKq6zjaJx5MPXZftkdyWsTs6CEGk7JsQgeg5da",
  "key31": "44nPouNCzThSrXiug61daUqu8VZbDQXGUBWYb1xzrnoyGsxWzYWtb5ctvKF4FjVeJFtGDkoRBAKC8iNuQjJBV7eX",
  "key32": "5AYTdhv71hjhvQoLMgFnfkG3tUcbETF1eBMGsS8XcXAznjBTLZyxK6uVDkUDmgAirR1sanTm8rCFrod4ML7ixFAb",
  "key33": "Peid7hzCdHbwhxLy64xTxvwF6vSW57op12LmiVihUv6h74p3e8ZwonktbHi6GCyG6P1znCEQ5b7gcEjBMdwhTPb",
  "key34": "43qwZax5FFfTrwjc2MVkbmEEa1YtkBMfPTfUGUnf5Ai9NC9ma5F6LzJmcXi8QmshnraSnKEsbo2ZdV3deWAwDx3q",
  "key35": "YzBhZp4YBA8qZPbDudeVN7gsJfYPqfwzTDjMkzVfGq226x7Mvkrotse9Jr9LWXRyfHi12NRet6Q5i5D8P3mzQx6",
  "key36": "2N5ry8t1QLpBxoW4hqWFaASNdUxKKsbrkELcAN6QK1BH9FkaCTsisx3x9D2nqGgD3cTHV5o3kxHfTvrUa4QT3svq",
  "key37": "fkAkKP1Nb3Khh5N3i9b7bHHDPwVMwGp3noX2kRMa3Vzem8R5mpQxUTRoobbH8YbAQUf3v4VrnzbG7gqsTa9GnTJ",
  "key38": "5L1ongr1ySvM7oQSpm7cArjkpk1Afz9Ym1EoxJnLsuKC2KjDUx4VkL5T4xMqmt1S19Ud2zaEoC3M71f33TXPhDxW",
  "key39": "zSnsEB2g2xyGW1uk2RpqHQTWTrngQquRjSeWZP4efatp6ZX8PN5hCQZ6k8kKYLwScVYgkjtCiXuowQ3LVJ5e5g2",
  "key40": "aVw25V1odQ8WSNsnphbArZwhp1uE7HixbohgEpZkty3neQmLHcTr9ynFLTf46uJ7GYZ6oFpRN5o3YMALYb1ZLz9",
  "key41": "5S3LFbWWAGgLFLRXmi8nM1KNuxScoH31osnGDFy7URaM1nJLTiYweqQG5f9yfpkpYnNYxUeQK1CwUd4gvXZJiwGY",
  "key42": "3shtmxdAi2V6cz7NEFtDgA6QEcbGAj8TkjQB8Gby4Q99zbKuTigoGNCwno5y4NgvnAcy7QYVSjBkDpk7rKXgaLvE",
  "key43": "58vAswCpEVsWL47FLWiesoSZQzcUWwrFwEv8vXaP9gQ1443gLnz5WjmptsueFQe5gLahFa2G362xByVEEXU9HD5E",
  "key44": "3E2r6yHSmQ3u9bmGTfg4NnVUCwgezq4GybhBi1PqFGxrrZJmhxvQ8zLrzg7xtfoSYZFCVGkTnQL42AAqF9BbZ8Tm",
  "key45": "4tLyf18HznjYFqZtA3PzU7FuN26f7a4RjwjT7y7iANocYj78jdtPda68ZqpRYNYiYj1nMEkrhRdMaxqFtGRFSUxG",
  "key46": "5S7u3htwxz4Xm7iQjPRYKeeD8i5A9Ms8BdhZmZq2fu3rWk2dh6A88ETMebRPpVo9kTvUS1fpF5L5eDy9H9kZV7fa",
  "key47": "2b3FWwmgqySr5VTchbckxJXZBnWf8kPGjaPhdXTucT6EEZvQfUG9JrX4u7hBZxb6TKTddHWPpSfb2D5GRXgYqsh6",
  "key48": "5DGJCTY6uvY8797NcosVUuYFAdGPTdZLpLSbiYE1NvjJ4tonpnY9q2CTkT8zLxSHX5jVZRxo1DvU57KBULYNQUk9",
  "key49": "5UDHweHn7ujX8VzkeKcNZznaUhRq3wUnqXDEHgnGTLJNPFKQTukpUZJx5gDoVimTQ7qPWm1bJYFrME3bCpPUEUQs"
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
