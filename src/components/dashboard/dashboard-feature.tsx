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
    "2zdWJLhN4dnL8LBMwhWX8PUp5AsH8M1JYKjBPe7YjvSQSAtXzvFfteV2CBK43NR7ME8SU1Q5SdJ71VQ1BTZQcBXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vPKTPNESpDguCrQGun1NefDtH66tHRCVPskJwqjgtiF1PXZEQuHjZ7Hcf82krU3xjWhuKUrNufUV4JHqYxhki4c",
  "key1": "5Emi2MH4EGKZLFkUjoqK8TU8pfMhkbU3wsyrJdtZrpY7rLHQKhgdSRYCuXeDBoj3VxG7fcFvmaQtezK4fWs1BGSJ",
  "key2": "3QWa7DjJ1ze6o54LdHJMEsMQdEaFuE2J7RcRxsmLy4spjC7TkNeWhyoYzHVKqDeM6HJyVi35BqwRP9S54XLyVA1g",
  "key3": "2Hv7inQmAvDwy9A8HF8pdiih1c1d1oRHheQ5pypKaJcGY8Zeem1BjSDJgDjDhPypuXi46PRwikpdGkn8eESJCvpJ",
  "key4": "4ggNEKNGN4vvtXNvtxVMZcKhTdnKEHkP4QGPLWKGJSdjz1UQhbPYj9FGsxFhRPZKLBE1L9DSjtTe57GEa4HhVwBP",
  "key5": "4iuZGfnuaPGYGwQLt8KniTqHAf1mBke31ReJJX8o7NjidVDmxB4vr1V6jefvYzGivmLUzv75RL1xpzH5K2DGmPxk",
  "key6": "2aDWt9aW4VrhxThDy3SY4JzeBeEorKXUAVs5bccek3ErrCH6GJUsiyemnXWNz6ZD6C9dDs4Lz8CyjsfGYik6y6Bk",
  "key7": "3LKJo1g4DPionLhrcH5uxznFZnMc1iNmvswWePGK1uRJcy93JsYJDw3Y1xXUmS5tCNLUqQJgcd2dYjkKVMRY6sWL",
  "key8": "67dJcMZcZ5YRpNuyuLYYmkwsQN8xpoUszEV5rYMyeSMDN6TSNbUdKHkYLhYZ2dmQVBVTs5iLRg44QgcY9DtbMNza",
  "key9": "29mEgDykX8dZUMnQmutzdjBg95zE5YMxrqcwvHz7As7FMwQxfnhyP53BTiKtdGxqKzeigeSSV1ZTsAdZctssgANE",
  "key10": "5UNKmnZZGZ4eYnVd9PMTaXr1MrWLqR8GWdUPrNKiL5p6RixGUbav2vC6PUM1zvo4cC8rhjCQXzWBiShxCtzMeF1H",
  "key11": "fn3D1p2ZVdSHABRG3ULkmvyF5ok886dwRHFdepPmDfwBePM2H35tM1RuQA89Lc6RTKZeC6uVbfUCjqXCPYrHaB6",
  "key12": "4AA3mPVxVXfaDJxPQhQzUwipVuGTXx926f73mGzSx2n7TKzMPas6wC6VJRzDV5UxbqDb9kyJpkJaADYPp8vS6SPU",
  "key13": "2g12q9UaojhtymJ8kdiPmncGkV37a2FLFCguGFPwXv9VR6doBJF1GxdCPGHs1EKUFxi56by8HRe5X8Q8TVhTHg7m",
  "key14": "5JdN4xsjgBtLtJVhugeEtjrUHAdda5J7gGcAb5rzYTsZXu1ksKf4qL2F2xYykuvKzuPpMrhf6gjapMzHCFEYs9Jx",
  "key15": "3LDCosu194QG6ibRFfjGKqda8ai2p4CZUqa611cKrcHDpM3JCkszYD6om4Snna3oujURd3KLe3To5EpFkJvKU7Y8",
  "key16": "5fAtDpgYEPrdSReq2v5J3ehJrpzTiFHwg5uNf5MB34skA7M2hBeuxiS7AdZ6hFCmoNS73GMPfBfhV9SwmbMWxUcf",
  "key17": "5WRpDv1W5H6Xrm2kvVMkUS2dgJDBNQLdNCcrWFvWxKRDYR5PuhexnDUisvv8QuQyhbzrsx24D2a38Sko8U7DvQpg",
  "key18": "wbUA3X4ZhgKATekfSFDHDjWjChqofdsccMTMGjYysWVqF6kpwyNjiUMZCrWfZUAvfZTDiC9sQN8bDnHimBSd1Jx",
  "key19": "2wY187vn5rkqftd4AGZAnpcfkBg5QvSK1QTZVVFdB4xLScX3Mb59vFfFQuTLQ9sD8EK7ixMpCcGYxTEqH99vgHBQ",
  "key20": "MMK2oduXg8gLNcSdDbV8DwZn6d3v7dLKX13HuvspY2oMchdWBVQocQ6iX1PiCw7ANjThCb6ashZn47aNHSUmDos",
  "key21": "52KcScDLGDnCvCzvAdJab4UYi1zq1xgdMc9Z6qDnqVQYdLwHJmAp3QVWj2ZHPkJCpS4whkiKmSJzq7PA7wUF1rkp",
  "key22": "5m3Lu9DpCeDwVTDdK5dHJigVaGgHo3NMWHpsoQ9eX2jcjdJkf1TvFzZt6zd3qX1Gt3eNF7jeyyT2aKtFqqi78SZA",
  "key23": "3FtwFf4LJQH211rgDmZNFJ7EQkswm1vAiE122tU4JPZWFi71ECHEHuD7AdrNNdRhjJVWeEhHGiq8dJ2dPNrqHTsK",
  "key24": "4fyBgNct62Pudkn41bYyjotoi3ZS1DJQgiZaQgu3FDNgr1cooB5ZoqzxNejEhpiYoycjCsng28NZsoGxQ1BLKEuY",
  "key25": "3PsBZWidmKRpoj6Aoihyu5n5GqXj7mncbJsxpbB27UPZp92kRUznytQdKwEH2nvseNhY9mtpDTkF7DYYPCb7V3Rf",
  "key26": "3tkNDnPS8TpFTndo3aBWNkR27p1UuNmfNn9eBFnxJYgv7R9WKX9hmF8aPwEvLLsEeRpoPsnQwZbMYJgpsMsghMQ1",
  "key27": "4FUDzj8WZeWX4TzM4BsNu1mGoJCyvamw9Vm8YkaXsRDTgeKoG973LvLbJJ6kKnrt7ufg11XcqbaJY3vcjhpjRRrt",
  "key28": "2mSBukHPjWY5RbjzLvgwZt1mF65v9z5xFcYbjMtxV4ZLnDQkEfBLSKSrX4QmRjUyp6jEM5iLTLLWdfbSA9WE2tvp",
  "key29": "2AwcHyt1bNPMFqMosPyb4JQLH1gSP3x2irDYexHfxNeD3MgqFribzys4Fz57wZqfyNWkQrFrmL4AcWRN1nKKTALk",
  "key30": "m5ZWUYgUH254GnV7pfkjwvsF5AChm2Z6zyg4bvbEZd7SzqZs4eCAwsVe57BFHiNX1yzVwsY57BpwxZFz42BJznN",
  "key31": "4c411U8GmTz8fMfZo5TMMttuxpkrRgahzR2ifmePzd3WWTaA3QBwaHRTr8EVY2TRuB83LxMHJDaVcrbru2TZ7FkB",
  "key32": "2nCqPVnWh8QndXjjAbtwTNFk6g4pD3oSuRBpvSJiGEFQJqcvH1ciahG32RkKWaaRazLKyLWJ2XS3AwmvLCgP8avM",
  "key33": "3A21i81Mxy3Ei8LpgB8KodFx3vTnAo2hdbCefMQhYwui1qk3Pm6RSH5jJHBRpmTwN4zcHo78pMB7bjRmBrDQXUoY",
  "key34": "4y2H3s4tX6nv59U9PirY4Lvbod8vTG8BiRgvvYddooxtMMGfHQnVrcpozrWUMD2qC5Ud7ox1qHK8gXqaoMSsV7jy",
  "key35": "3WJnsYg18fxYNjUeb9GPq5ae5ckijX8L3nnjiR8XEU4tCvdva7F4o7755JX4x41tSpAyw32HMZh1tMjywfeKLnXf"
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
