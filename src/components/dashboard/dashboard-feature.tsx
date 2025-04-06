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
    "2JeZE58YzAZTVGQcKuKqycjTDDj7bSJj8fpe2upAb2LqjH9P4s9wF6FDhRAAqwYEaSZ4RAdUhcB6wqDM6Ye7hhir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DBvyhEsVwFYuUBraiJucWu49up2eZmHKR5mo92SNhCP5Y8VpFNPPy1HYwsKtcSGzCJLCeSf2uivpRNNZpRs3zgo",
  "key1": "4pHSMqptzXPm6iTWuH1aywttKha1b83xTDtbrCznmVKNWt3u6d3rUShguZc4nCtinTmKhjqcQuT7dvhdVRMzEDzK",
  "key2": "4PQnAm3rhcSG1gq3UtiSnByNMzR7J9sZy1hNUJn6Ww5w1hfrmXU9PF3E9pRtK9SrYHjxYz9QfJeQEDJpiaF7Yphw",
  "key3": "5kNRsEKq8eaeCjLU8Q4cGxziKSnFR1de4BT8rfqQxyR7V9CZV7xgPtQPFrjHi1RtwucUNmnFeoeENAgNMXGwhduQ",
  "key4": "28LSQUd7jDjgs6bYn3jSVYWRrcxtNCoawEXSfYudMqET6p4EG4pnzzu6XcDGv4Tk7F8AcxGV1LFAno8whE17MRr1",
  "key5": "513pbC1xjTtYK2pd4hLj4oqc98pmwyoEp73Jef8Fruv3bkXK8auwaV5ErEwWGT18pM58jLeE7beScxzzpsm1Go8S",
  "key6": "3cFsiueAXTW9b3fZweLBYhFWPaad47Cun5WxvGGfKPTZXtLuBDpqwqxNPUgY4uREyVYa1K2CkfyX3uCv1ZuBunJi",
  "key7": "3aJueKkBHj3WEueoJaVEjqtXVTVoQxGmDLXEjZhVSBpinCBERJchAcqZDPP3ksZW9GdKQRnEggKYwckLhqkZkHLp",
  "key8": "yScRqgtje7ohfPhByKH1mJVKcfdqNRsJpeJbGT2piz2Re6caNz7vFJevJRsAeTBxw4z5aR2kaMZj12GeLTrSFut",
  "key9": "5jxBjgg4qoJZqxspyDxWiQrqrfX3JompiHWfcs5PVuyaAYE4BfJJWVcHLHa6vBoikiqknRd9XaqxUahwnxwC4n3J",
  "key10": "4VvUxcTBCMT6L3jUtP5scyJg375rwJNAvVdvQxtJiNBrbpxqMXZsuqfUfWQ1scPhdq4y9ax1j5frFi3pqmieoSub",
  "key11": "2t1DSPHAupCarLojsjeigtroeHLVHK2dRdSg3GcE2i8wULwPc6kqTHqALVsHvehQTzDdGwCqecgerXRdLRM8Fkw",
  "key12": "24dDpY9cVFLuKtTzFNuFXiWYvWBjGXzGwAsEz7PnshhESrLs7xHvpkhwZPA6Doh27qK2i43n5f7kvXLZAtXUU9Ee",
  "key13": "3tXbkNbsm9NC3Q7B248x4bLaSSiURi9gF2LWVaZ1NBfFmamJ7oQySeo5pmPBfL2FhQux5x4vBAxGH18VexLQKkky",
  "key14": "2ax9rgsq43ujLSCF2MaZf8AcGFQbTkyyW6vTSmNVbHgMVEsxKSZXbSGNkACm3jy8MvHwPMRaJFknJUorTu9jb9Ua",
  "key15": "4wVYH1KVQM8HkGdaZdvXE3z7fU96pGWzjmxQrYtXdc4vvDMyqW88U9nLXk5BLM6XdX7k71dmBSXPnXWUcrCR6noH",
  "key16": "4WEYZuA8CaKPQAoATCaoibRkdHjJHfLN6w5j58XSzu2YDC6g6HbyWsAV2rHQEYbB3Qsoh7EmuGa8H6TSRPgst7oB",
  "key17": "54sDfscNGDB6FmbZ5CvQBjnWSskQFDZi9p2Nb4NKza5kUNrkTMLmMxv8gNSsPsW7n9WV2ZWa1XsBC9CYMRY6AHeT",
  "key18": "kXnq32V9dDo3AckDcQ2aR3xRP2ZNSwHj4KmjF2GER3kZFmJnK1qMnLqTkCYRbiKHY8TkbG83CBW2P41Z2wwmaQ1",
  "key19": "4KvKXCgRM5CDZw1jLDuj6YukxdmXrGZ2h8EZ7SEuAYUof6wS7eEtVx69kBGcEeHY9veTN84WxA2t22r5FWaXjzCX",
  "key20": "2X3xJtpahJDA74tZmsTq4FBqGmLUX7cZSQn9eqtpm7RprLKoC4ps2zbctjJVmY5bLiayBMYrA6GVmcRKd6teELLB",
  "key21": "64eafY9oMWCFBqsj7JVu43tQWqj1G4JTvcmFNHD4uvr4cLybHfbTvT1kS4bw5tZJPgpW3v21hx7TxzBhkJFUZPFP",
  "key22": "5y6URCzSzNyvbSidMPXmWuhBHDa28kS6TJmnWQGPFy2oGX96vJbkSJcsmGbdLaysTEninSdCSwixBiQSKmr1Ep6m",
  "key23": "2jh1ZVntdvEFGE4Vp2fRosE8vr3fLzdvscjV14deZRXWPqmkBBnPLtWNNMyXS6jJvB4NoEsmwqtVmu2cvHu4hwCt",
  "key24": "67aoPyFCfknYWXnHvV8MR32D9Fv7kYaRsi4jqtwCGJ4nQ4wKjyvY2uscBU7SqjaCWwKDBzY3ndyMh6V46BH2Q3Ms",
  "key25": "4UnDNrVDrN7DZjE6SGtRhgAGx4jvkW9zYHqpu51QQPsr3iFWKHG6Hc7od5gyoLgGt265UkdKbErcQmJCEawGAQDd",
  "key26": "CXhevQtAnUPjR4h5JLLE3Y9xFN1Uuh6GBP94chRcAvBDdodSo2m1ShSENq8LWCXWvPZvTzQBCiFtjjtFQAhAS7j"
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
