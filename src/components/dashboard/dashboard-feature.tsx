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
    "5LTbQ5Vq6oG8Eb3yvrnWBb4x9E4iCPpef4AqpCtd2CbC1y2jFf5u8668p3XByenRo3G3JgsBViL8RRwko6B8zR5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RXtc5bV2b1ntc6sBajVFDFQifgP7iicP1wdvWkepyrPErN3GLk8DASYs5cahXprCj13twtSvsTLCX2ibt47gxHD",
  "key1": "5psVtKVxnbzYWKJuhpXyM41qWmpWYGuXhF9SK5i9E5DMHt5XyX2Me4US5FFpzK7CyeAqWGrcMs74Bz713VtHhfL7",
  "key2": "3kfC7gcTHFA9RoPDxbG44XX9MFsV4aSHgcHuhoQBLihCAYUBCRCG5ADpgLD6KqrgAvtge2nzTSB7PmwyGuZSJLZL",
  "key3": "2F69aBPt5FktASsM5pxPbUJPLpPUVk256hZxkdFckq1g21vHVQqoByNx1jcuRDf7bBALtkWmaNQChn381CGZkqPr",
  "key4": "eqZ1qE4ENdCnJ9HwsHdSUG5z8iL7b6cquy7CPdSi4y9c4KxZNVHxgbB8EYZAdkKHS6D9t2QraUxKWfdUDYBUiru",
  "key5": "4qitRAMDcsBhSWnbE9EwDFkmhuGneP1mszzw1yTLdtqCSUJehCaxaiE74a4hToiejkMf1XhtoWKPbARoJfvD5Jqq",
  "key6": "YeuC5YaHeEGid5vDG6fg1oYSwD4s2pSUJV45KhCW1gjwMHiyRi6c1jTnq9yzrX1iLGPDJc2NC6MaL6J3nnWgG3e",
  "key7": "1xbEpuqcv9rwaj8uRB7sjuKfmQzx3pnce4qeqC6z5ogePpqWqwUpN4yK6Sj9kVSbSiWGjiGjP1tuD7VXh3j6B5e",
  "key8": "2JmYtDSMLp4v5d3Duv1zyiq7LeAwRurwpi4CNn7AQ1eNXM6fgppPg8SAcLF1gRsPYsrAqyreJfXxQxQV6xRJRnec",
  "key9": "4S8uUD2WZkgRdGC3sQSVJLGCVkf3FH6JfZXzngfGAHDML8Wh9ftaWf41i3G9taXWCmM82MjZjfupKFUGS13LuUno",
  "key10": "S7wb5zUsMk34qXMxNSis4HHzJELMZ35j3fyWSy5vuYmpzvZpBsNrBzf4o76fhCvSCns42CyjN3YDry4j2t9wVgW",
  "key11": "566yp7P3NWy3iBh6kkY3MgmVaqWua2UKhiikqZF2GV4znx71o1SWshZZ7bF2pdBGD9ZubNbwRFGeYY32uHMGAPY4",
  "key12": "2ezve2nLqEm6BfbdCP4qAVc9kcNzgcmEvqsYvzfCtvfYYHsQgTjtzATWHhaTchuMJC48B8rq1JLFyg9YmmhCqiGW",
  "key13": "3pxgM5LhwqzDcq7DibWatyKhCQZajwwPijPM2x8dfXXGSGedmZBLNe6sgzcgMGbYRVoYfZ9jUcEHHXtvqucjwUFd",
  "key14": "2XXgAXdigNMSLvmhhapmJwpDAiLfeuaeC7q9TVKRfntGtz8hJXJXeQC3DDFptTbicjeFkznADdMrBdcP11gN74t4",
  "key15": "23E1WYF7WCi7T8SF1wbncHdUBYRRxm7T8hrdC2TBF5oP64rbgwSsb2agA5MfXTFFei7PrmLSsmbtPSTGiBUy2Z3v",
  "key16": "2K1JbQYknpQAk7wU93XcTm1znvxxV5fjbGYm3vQmn3LiBv3q37gvsPpPHCTxLyUAUEz62NMPriTEr8B2e583AQ7y",
  "key17": "67cDiTfoCqcKis9nMoZifEZHNbHyYLB9CLE1QJN69r8orRWwU9xyiAhUS2vfVkMdD69PiDfRe5mekyXi3i2VPdgv",
  "key18": "xhnbzP63fqVNiCLndPcXi4DGqu9qshiyqawsaaJ6YzAfyVq1YVNKMXhgGVGv96NTtsc9GFswYjodvB3nJFcE26Z",
  "key19": "4UyQ3zy2kvnK32LS7t4F2YgvaJpsmmKeFfmHEShrCw1kECFFXVjVhRCe54MLS7ozCXhbeySZMHHhdPZ77G3J3b57",
  "key20": "4zz5HvqvR8g88LH8ZUez4cL3wNfJXwCUShaQDuC1heZh9UMjwHH82SekhHmuBvSC17ZtPdNSjVCorZfz3vzWnsgP",
  "key21": "4QRKmKRTN5R4cJxc187SsGTRZvu9XjwQDzeRy8opX3ZSBp4c7snqcN7SGtnADeQ115DThL7VUKneVfcS38qC7QZU",
  "key22": "5ewcb5gVjqPHQiBcATguRsutaK7SDqoBY4nWrqadEQsWwXjSWuQ51tzPoHsCTHPMaKChnK4C5iFe8r1iWMCooVpX",
  "key23": "2B1xoKnufdgdUAcMiRtB9qqRzrmPt9ijm6is3TLmFxNHM3v89xk51kUPFfbfHZPmEVdNJ1xeXfPB3rZdPGQG6iVP",
  "key24": "5s6UqMTemaKVQUR41kNq3dzX6SdXVsctCGRoBXatQjHhNtsZ3BZKLtAy48F2YfFkh1xqXQ3bQzJWDUjNGjDaLmVF",
  "key25": "4PsWevr2bEHjGfRnNNwijTpKbPNYKAsccBAyTDcR2SavG6ydXtb6LZvsk73XgBsknHkkRcjjwc19HiK43M3HMLVb",
  "key26": "236rgrvnpVN9VbbYL1jkkcCuJVboZPzASAFqYwpp7fnFdwdpMXZeTXhw4utp1k9TaHGj7JmGf3etA5W5fwNP48Ba",
  "key27": "cq4YhnUeQTZj4o9hRTHwQyiSbNiudvDty7RDaD8kXyaznihXcNkmtiYhoREdWRsGQWPgtLETxRqxjznerayvLhc",
  "key28": "4WaH4c5b1taVewYUuP1QqdKusBw3ERRa916JtLb6KxbwpwNivZLtHJGJ2C45X3Xz1tEdCjXeXgQMsbC5BrfU5nL",
  "key29": "4U4fnGZf6wBUr5X5UYue6bL6rZAmFz53ntcDc5whDp8CaLiodhTuxpdu2gnQpjWjt8x3zkXm1S6AaJwMn46GFqJe",
  "key30": "4jVexZcWr9nBk6quAEwJxjHHNkKnVng5F1Mcieq1ZfJWbZ7tFhy3PLu3MxQEWVTUCWeSRjdpkm4gaFw6LiCTdwtN",
  "key31": "3ygxnGs7LNRRkgsfWBXGY8h2wFJVhJVbHHwSFxYHQea3vDq7AN4v9AP4cCxTNgesbrpPu42Z7wMsDMxbnFp1gdNC"
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
