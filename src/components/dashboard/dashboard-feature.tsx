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
    "4rPgorbvsxqoegajsh7TPhq1SvjL1vviMhEBkLuFgPasqLfqNBdQQerd4hrfFHLxN3hBsSRU4B8iipEtLPCUuXPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NezQ8FPxLEqeTDdTAJAPfXYXtrsKRyjoH1VPnALk192mbK3PJfwhmqktz55BvzR3zdqx2SzUWDd4EAWY7JR6FXw",
  "key1": "5V96FhvukV7w4xvEnyoBcFtCk2tzwWsMigdhWLdYz1ohZiJP4Eghw2Zf2mqGf8Ve6tL7YMC4pSYxLRrJ52MKj3AL",
  "key2": "4fRChLiBzs7WsqrEnQgNN5BuD67X3TpcyUmt8HDg3CRQby1KFiEf2jk2ujQ41JvNZX3H9Sw8QeLxftxmrnCFY5ZA",
  "key3": "uw8QJG1jN8VLuD95WAMk7fWjGsGEkBk3MswBXrPjVyndMYgXVcNAGo6JCNtMHPVWYxM1FfnYKZxAyqRRsSgVaBp",
  "key4": "4kP84Hb7fKduoCMxhYnswCqT39UgRKFsiznho4KwUEZbjxW8QxdrqyyKpFobFZXDMiVgQRU4V2ZYgTZj53sjK5gw",
  "key5": "2rDzr2uNwRrSFGrDpFjcAUkDp69omdQB22gdBbCBPd1Q1vwBSKbdn63K7bv8gVAsHMeBw5RwTyt4jXY8RGW6qNBb",
  "key6": "4dmhGu9QUpV4mJxgnt7n52UTfFJqxqqjBi7wGRsHz5BozcrTpo6NcbHhVGtQTZMgPqzk4ewnyN6RY9RPkeFALgKp",
  "key7": "2v5xABM68hB2gvskYd18SERbaFndecPxeEHKbhRPTsHYqnQpwzibETf5xfe9zsWKCSqsNtwVRCtXBgcCpvUv4Jv3",
  "key8": "528bw2bRgY5AEaT9gsUsvKf4Vv1fs4ET55sR9Q84Au1dCWasEJ8nHUHsXGhYqyAtcYSdfk2tZvzmc2hdu35US7d1",
  "key9": "4c6kcyTCA9jTKF9TezVGpWmwyPUywP8u8aWh6t2ogzGsz7GtQ9bjX239Hu7cqypQPFRDpXtBpeNfHR1U3FtjiQsp",
  "key10": "3CMZBpfLTjfpAfU4LAKLBRkgbbZ8PvYxvwKar9MXisd8Ppqo37jMnZ7KCKdjHcX8kKXursxirwz4dQGsbJSv3tKN",
  "key11": "3GCJH47L36E2PA33sV3jsys2iFXUR8xsLAgBDeHoyrURNuNsBkbiR9fwzHr5bFN6RCLPPLK5eX1Phz6sDgsSjtWU",
  "key12": "2DERv8pTS7Fo16yr4ChnKCRht5RNsz9wQY7CfmyC4u7Bbm2z5VyrAnnCV5JD2QYYNvu8s8TrTU3gJST7DKCM4rjw",
  "key13": "3AvXoLGHz7QmQtCCjTRCpbWkwcUbVa75Zc9SWfLehzxbNTSAZyNCTqCBkS1LeWDM81mEfxjxVq3p4KVoG83gjz9s",
  "key14": "3t5Yp6M7ckqGU2L3t6E75k2ELbRNuL1iZvQwRsRLqUGRp6VykS7wvV7urh8ygNgp5M5k58pjqn7wj3FFpHGy3Wk2",
  "key15": "3QxCZoshYKF67QZYU9egQYc4wiLV9cgazptP7tft7ub8gf149Sz8PzW5YbTs2ho5sUZhJkYMqhndTz2qkWxfQo5A",
  "key16": "R2afBStVx2CrQWgM5XZ5ToqeiqxdEamUA3djQhuCUaB2ZXP1ULbunrq18hN3ysRs68W7LFpAUZHxzYvJfjVRC5h",
  "key17": "VyRVsG2HfJ63QYFxUeNXHHi9mwMbYAHDpMJZNmBdfN2AYc7Ji8faKdbt8ookZCVoYeLigmQviYsMG4yFisyn7vG",
  "key18": "4TDyShTfvuGGJ2EAXF4RkTpCu9SYohMsCYLp85SsqBZavf7pHdW9mCAvWwZipFcbzfWzPeCQPR9LYrTCRem8wLaB",
  "key19": "2B9jE1BwvvaP3pSqoMCbRyDsyTLST2LUU1AZuaQiko3bLfdXdu3e1UY345z8Z8g6QvHVq2hg8CbMpY7XJm476rFX",
  "key20": "4mQwzJoX4JwonVyrNn4tiT7qJ5AjrqBGpooqrVvvmUEP1HPRELMrJ8uo5zqRb2LQ3a6XzmXWcuSmPGCdscWUehbQ",
  "key21": "5swoVySA43ZjPJnYYiMw3pZf5mVPQkAot8TbC56AbRocemY3fTU6w5VPhfEbLFksHVmhbTGL3vXhJkukZJXYmmxt",
  "key22": "2V8y93hYxtNV7Yc2tPbseCRofxkNF4wMwvyx9pW81GSoYCjK9NRb7pFDjVbpMSKdHAXAVd5m2GoJ7epWbQWzShoL",
  "key23": "DomRNSELF76HYCeTBLWddAi9KMMuex5CzXm9M7Z189CbTRTnw2EtWUvqAACByzKm8zzqiKHdSCGmN71G1hhfzEP",
  "key24": "3GhKhgc2Bee3oSdHW6KxnEUvvCXaRt4pyMubk413foMWHGXRzbNUZD8e1Eqqe9cWqF8tG7b94imsBbYzmKyg914J",
  "key25": "FfVHYKh1X1JeQXx8oJBVVVxjVDcqEWFfWqovWFfGd4yGXxPVdnQnXq2LCHfPLwTBZK5CZRMi9dTEiNpH6Me6UGJ",
  "key26": "2W7mSCHsF9VeNTjtRLJ4PUbPxFGGCzZb8vutKgASJqv18wAWYyS5rJtzR1eYNGFnD6gwMiGFKRjfe2kjvnWxUakM"
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
