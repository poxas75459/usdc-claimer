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
    "55SBijf9ZdtgnBNuaXYptisxHRmRnwHUaZv18GwALgPyopisBBPDzbS5ZQQuwN1mzk9bfKsTJSLZTP7uRQUripSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aQpX6p2D7so6cZwLJWaSBDdX6iWLbTRfYXGTCyT2shrsxAJidjy5kquzULZ27LJCAzpCKSjHLDGqRZQEr7AsaZU",
  "key1": "5QjWsgdgjZUdt5nB9BGTzLriK5qhaPe8xQnWMV1jQ8UYUPywFqGZPeAKqBhtvFnnjBGx7MCVc35jPtyKzGKzvuyC",
  "key2": "uQ7ZYTMXbApYzAqJPExEmW3DQykauuSxbokoc5aew5f6H9VV3ZTRzHwPZ59qQynZBdtFZaaokrLLAAavzHFYMWa",
  "key3": "2jxotQLHMMTvPrUH6jLKQfQEmsA48QqGuvEq1t73TTFuptr16H2YWTQfq1Yay3iqE5jPtPoRNS4AcbX36mJ8xV8u",
  "key4": "4iGa3TBWoTf25R1b7uMUZJuTgtRF72NPu7PbrYsezmC3bFwU1pf1A1GizNvxaGd1x84WQm75vrsYST1q4fr2hAKs",
  "key5": "4Q3DGWquKX2nRxzwqgNH11rWMwB1T9EPb52F4AJFJ59UG5Jpf9yBv7XNpE37nQas8iQvVKDPSpTma1HN39PkCvgQ",
  "key6": "TUQ4Xu1RZ4ojHuYrvUWM7mPrmCyHip7vNZzVkzGbfUXLDmPLM6unG4RHexHGgR1Z9yZG7PjvbnP9nbYvKvyfxMs",
  "key7": "2LkJnGDH5U8WJUsfK7EiQYCed8JehLJLmKMUttBewwcpESm78CUkhbmLNv3XGLE7HbQLMTaWLzqnHCmu6tfAf1GR",
  "key8": "3Ad7B4Nqzu9b8ibg1iPuEM1NWiVMmNE5PRNLyMxEVt5VuvZmLH6gEVE47Z93Wg3LMR6VA376rU7F65gv79d3ZTHS",
  "key9": "273BAjmvZY8EAAzsckmdVsutw5roFdWf68ienEHUggxX7LCfanhm1dBRMAu6btUBWWJMTMKyRbKfdi17wJGt2JmQ",
  "key10": "5vqzkoLXmFNu7BXHHnjoLDM7e69wit6MmqoWD6twD8LUPFN4s8Yn7VPtC1JtwQT6thp6ZNVjGNN9BWTWLcDWKuuf",
  "key11": "4Hs28vPHU4aKSuowtNsp36i6hh2qGG2yuR5rzrMF2UMGENr1TRDkv6vFy64iBhHyjs8e2SukoEUCgfE88MunweP5",
  "key12": "3rTyJwZCKXFwFBKZKELcnARunkQdWsZskWnR7nNAPseLcnfSxUrP2jjAuY8xiZWBVo94foxRoVvR3esrExeoBF2h",
  "key13": "H52NG6b89n5mTNTJ8iVkfNDGcGxiqGozjUsieK9QTrj6K8Fgr1PJXqojxv684sausA9wUJVw6gdWSfUQTXQA8oK",
  "key14": "PH49Vt4eBK8k8qZZYfNfSjStB6tCgLKrzwNmumZ23JUGPBnwSnjetnVeLXDMh3gSeeALaipsiKbx8SqUM6ov5ia",
  "key15": "43EHjdfHGnzWzVaRcGT14YR4HJ4iJTp5sjwNtcw7Grq1hVt9rQ7H6e9AKyLswWNnjj72MzYWjhLemtvbwF2DmLVt",
  "key16": "5URBcPntGLwfJ3d3GwZawGZWTCi7yQW9NfJxBz1rhbpfrRhC8fQR3VSMp1RdYaAJ9uxVMnKjDkEgYawR2CZydgTn",
  "key17": "5v7t7G6W1zuFXyDkGRcEFDftELMRC18KtFuPmmkqxoB1MEUXHBmfVnyarupZ72aGMQ27MP8xhe4QrrJ5m9ng8NBr",
  "key18": "4d4GpRigo2a57bNYFZP86nt5HRoYbJc7zYCiVA7fRqj9xE3wkNPMjCgEwKxtsiKctwt1D2bQwgFkstFqYigqqqgM",
  "key19": "c2U59tDsfSMzh4NGXzL6ohwaJBEKGPZDtpfgFG6qqdyzfiWUtex3zqJr9kaEZfF3Sdjg6oawvuGrTWjXiqrLPR1",
  "key20": "3QQ1EqVHpPN2NBUGjptkgu6pwrotidw2tFAYnvXjEef3146aXGSeAGfmUnLC2PvZ3JQvGHvhJ82QTrHwF7VkCZiN",
  "key21": "2nKeFZPY7p7Ebk1CcPQvBTocF18S8HXJdnTXTsjeFdk7YQLGMPizAZwfFnKss7wPuKdJBq9fBJLyYTU6U3iFKbQa",
  "key22": "3TcbdJkUC9Sr7VzK4rWVxthRfhQK7hcaL4cfiLnJkSde1qf25Ekq4M98MzD5RUfejaBkfyPX3FSEAbMHGy8GV2fG",
  "key23": "2n41orGtvd3NaqpZsqL4rYk81CYF5254kJKdtMhpB99RNLh5Xd51sdmTaT8GJNSLQ5Twygk8X4XZUBxZBxgvuZZh",
  "key24": "5NM2JmYzmQoWKxmrDy1hVdv3pws1Sj5KsptUJKCeMPTeQaaSmxSkKZJswUBcJjGjpbgsv9oGcEqtiQ4Jxd9Xh17F",
  "key25": "2NCofzoU31cAvDEAWwdSFPGkEgSWiY7y1u6yudjMZjGs359Xi9e7JtKX9JYoh2F7De5gANpUkfHRjac98WkZxq9Y",
  "key26": "2p9h7sjdQx9anX4VmDthPKJR3ik2HVAkoF7kyCusgNPVV3ZX7G6QUqJnu4GP4t8B12RJSMc1FeHsxMdf7eMwSMCK",
  "key27": "mYdCShgysfgUx4CkwfbHWsNrXFrB4M2demyziQW1RMVpbK4nBu9WJcSHoyk1SEWYKXx1hCaDHGHMhd7uPmRMaAQ",
  "key28": "5BroXoEv6RyRLPEWxbZjaCUNgaRJM95f7NABURR2QEDwHTtvDLDbSJzDNDKRUKsJh64L4SgWbj91m5H3SoBSg6QU",
  "key29": "3Y9bTmnm7cwZPtagbB32URfrQmhKMnhbTTqim9SmQS9a2cDpjxbiNtxZqPomgXAJC7EHCJTMSqytmVwZBF1AgVXd",
  "key30": "5RpzszzchNHKCvMxZXAkKbe1WtYr13aWNvhEB4wEGEiGunakzM1WQDC5cSDvdou8SA6JM6hQhy62g8CrHvRSxwLo",
  "key31": "4ZKh5eJtMtUSRnM661fYFLJtA4z5eAzanDF8K81ntPj2JS17cQPGTbgLge9g8Loeezg5FmgjtjXgz7o9gqdw7fXU",
  "key32": "2dXDj7XLxgNbKCknwkLpPZp6xnRuYnFFnYftNovgn9PDM3MkfoV8JQwWJw9KS9Dh35dUMcEHz8xjPGCaQQbunpuJ",
  "key33": "2KpJWNidJ79Rj4h1f56uTCPDJ1p7CYeyZiDVEvvQamCdwAqUTpgaWpa68tYiGHjk2YsDf2SZiR8YdCLL9cRnk37c",
  "key34": "3cEtWdpGuccrWJKDeLiErfrNb4oJ2j429w6zbXnPLfDbuAtUZawE6tt6n3o7qh1zmAb2pvi5YySDz3z7FMANWbQB",
  "key35": "57PxKrDvYKdmXYXiQshSyrT9AhMoC4JrkunAB2885oc3ph6NfhozTzp9wPuqS1MSYxH6oxabJW5z1SfRZ7L9Y4Fk",
  "key36": "5dm3iCVsiMYYH5Z42zppDMBQd5yLbYMQr5jQ1DU2c5xCfuVmnXWpVS5MgjNTR5X2Gwbibic3FGZju3gdmuBJyer2",
  "key37": "3PRoFtS5gfhuFr2ohm2ks5pwfL1Ebwt4JRNQsqRpcYXM7hMfCmeWQfSfT3ixp588E747Rr72N8senWUbnMcJmZFs",
  "key38": "5eJRWfG4CR1QnGz8BmD35nKcSr9r13am9MhxfoA2FmgJEUc6ZVEF7gS5nMUuG4vZ4fdKeBcMAzbccWqEbe4TmDVX",
  "key39": "3dgJ3Geg77ZESaNvDqwtMgqMcLVEHSTfdAZo6hyMH87kkYQ8bKT58kKAqzmmQvAHCnKPkfU1X74vDcbX2a5g1eug",
  "key40": "1mRc9A9fLMDKWt9xX3RvNjuNY5HWh2EpECvxgGZqiEsUVBm4ai6eDuYFHzUaCzXQ7P6iwgt7wcJ9G3V5u1J5Co1",
  "key41": "4GL2KGj42jr2RXw56c4d35cQ5hMR874eZ3MVNHEr2rkdzthhEeqNRBMBKLQwVRkhayckKSxCt7SEVfgf3Jv1RBs2"
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
