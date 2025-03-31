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
    "dtwDnqhpYMLKgCaJjzCFH2HSbxx8Eh4mAoiZbnKKkXZa8shz34LJh9FbVy2SMwWn9k7wyGgTgL5dqMK29kc7DzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "231fj6d3tsZJF1nab6ydrqRYTChRpCkx4MHZnose6YkHqdQgfzxAS3NEshDRiZwPXgLv4Q8MLCTqqKTLB1GYZvxm",
  "key1": "2ED3CEs1eFzkfY9kFnTfS3EkQEQhQnwWS2KpV21Bs8tGFXEbSFV9yBurWkuZSovvjLnMBWjdRSXoA91Y6vyv2gcr",
  "key2": "3uFXqJEusHHw8G3fBYUxE5aFZsrxCqQUPqdoApDxxF3gbBhQhnCEC9nPtVApEmuaZ2erEPL8HwmwXCJXMPLGvLCQ",
  "key3": "2N1pxhrpaToVgZ4R5DijLhZryRBnLCBZGqsD7BhukexgcpCcX4S1m6mfjai89nyQq3Vy9dcMU4jAFpxByBdkAyUM",
  "key4": "5qteLeMVNEf87ErtDVdddvPWQe4cd6jNPoW8b8tyxfnGFcwdg8kQMciKgvQNwYNNodJdQebPZhiYg6RGpM7wydQZ",
  "key5": "5RHpZAscrNXBUFe4LWwWGEhCvhbxhJyF3TY1sNdGZ3ns4S8odacZm8oZCh3fQkewrwLYGq5QVN3NE9AvMjCdgyJB",
  "key6": "DcfxSGhetFeNvFGf3dmGAmS1yF9puv4Dk8ZT25hERVseji1dXpp9NBEjrFUqg6EzR3V8UY6sHZ7m3tUtQpNxvUP",
  "key7": "5RUZ7wiRVu6f2tc5WAFGdnFcpGUtfdQBbAxXZeVwNKpEGcriD49FP5CkmqyRVYckWiMwbSUMMqG4hTofZtBLDPsf",
  "key8": "3dNGrFmPuzER1YYFLPg1Rnh7LiqXAGRNgZqKutdRdVpGEAGs1ABqzERzB89XAyvT7pdQqQ9bxNbWVQvauQ5AfTr3",
  "key9": "SYrPASrhnmG3XDEJb4VayfbwWmxr2h596gCaKW5ES4icbPPK1q7zmZU1Y5upXKW79S2GtsrZZCSZQQRH6e6EGuc",
  "key10": "4GnzAFsGkTNTaJzeNrPcHtdLQkkgfEstg5sPacJTeLqZSV32VUbbQ6oGEGZSM3YjSZafEHuWk8Uua2XoFEVikMbT",
  "key11": "4ZxYLEU61LEHqGf5Ltzri4E9Fm8hHr29Xe4RehXXVCj4XsTPFJX3EeAqEZN7XjAdcjbPxFoKVx5aU4eAwPNMRtR9",
  "key12": "5KLaUyFc2UdPPnQgU3GqXnZNTXgZBDUkyafjuQQN175KqrjTSYondju738iukzwMQ1JSfQjrqm16qKPCbVkqKNxB",
  "key13": "5VjH8zwXcBb9w6MrM4rybpPkVwBV9fVYVhpwMsavt95442HNBuRx5AXt7DZuhodpemovAtQ9qzzo5XbWGEXtuKEw",
  "key14": "4udLpaQNkSGZTFi3jEuPUZtmWPXRGGDSPy8vwCaNPnnGRyWM7L5nfLDd2k64R5VemzT9coBrWgyZGMdJMiKnnztG",
  "key15": "5AywhVhmYBPe5FCH4RD5t82an3tnt1PoMChjCRcvuAuaq1McBxu14ji8ESA9xNZQUoDZkxvpQ1xFWQtnMKVeegMY",
  "key16": "5K4KrgivyxjZ9S1iegPbsDKDRvG3Z742J5Bb4Zb7DQpCDNovpD7CRbd7DyNPa1HLc4TR2aLV8zTN1cjYHzgSY7po",
  "key17": "2he6wnuTx1YZR8YEUpR9uogS2Ypvm3v22Gmd1TvMP5HQ1FDDUm1f9Md9giECmzWMMhF27s9fv771iGS2TcPze6mu",
  "key18": "39suYaxHBFBbhtxs1Tg1gjjLBcVZXG6yFQPq2EH7GLDJo6BHR9nNssPUvyV3FD6GPDMg4HUzjgQThazbGD2UPVSJ",
  "key19": "TQrfWv55wsPtxPwnCTuuayorXka9uGrmYMrNJb4vshzPpi36vUrjmKWfmXdug8skDxYdgkBh1BDD2cYrLGiriVM",
  "key20": "3TpzBkABtwQ6F7J1XUre9eUu8t6nWXiq6JiMfBztMA7vTfg5hXCrgVSpMCrv93srRf43tgoYw2B1VWsyXLsoWUzR",
  "key21": "2FDYwevJJhSViUjCEVoyL43fSEWBViQQVsuG7JzkUrgKvZ9Ds8WhNaWqFuDz4k4ENz3gS34bVbH4LHJxFYPrGTpf",
  "key22": "37M5NZzSxfBFQzFbtNzDoGyHaHjrMrcaZcuJ6exmR7tq6PHGLi98qX3eiwt5kphYHUVXaG7hxZPbcC9WdKh9Jtud",
  "key23": "61YyoxH3VGH5Vs8R8yc3D6KukXyW4Qy2sBm81PHMzHhvmUCggV97ouFbPZNM9eHRpGJLg2F5fNXqw2mVkcC2NKkw",
  "key24": "5MRDrPzQkmsuzdSg5QPxKeJptCgTbktfGhLGJo14NVr2hafpivEaFRpxvEne97CjoHioLv3oS3hyJJKdgWkmPsPG",
  "key25": "5k33Qs6JdJrpVonrLc8qweHujprz2SJ5jhL6AZRAgSc4ECap6kbSksuqrf5cVmx4XBuWG3W3EgJxCyBarorAAnYR",
  "key26": "5WUSbEtzRzDdMfncHaSTi6NbM4parMcexjpZJLZLyC5PLa3cgG9NbQaiyQBZKbRpPunXJaJ6U3cXtsuHnZKJrMiQ",
  "key27": "T8XM9nS76c3PqKYyt6SgRCGVWWoiz3p4ioxeXrJA4sqCsQe8LcTC3V9Tv6Bxc4WxjcWvSieWVDGAqBKDTqB793x",
  "key28": "cW1McxspMunqnmZjFGKChaA9TAfo2bN3ZSoTUuS6z2hiPgmKpaWLzbzQoqyeeEVJLMnmVeP45hScX3wbk9HSEAA",
  "key29": "5su2ZfGx9nRTvhYzVD6dAASaBc11PGCR9W7xw84dFtSSHP3h67rtikq3eayF2kcGEGMGEjwGHdx4FyicokSHSWa2",
  "key30": "2Bs8WWLxdvtCR4PzKYMWMM7x6YGpccycj9xifmaRoFWXWREJNmcE4cmWeBGQjJUkjBErta71c8VVHQuottRFAVHy"
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
