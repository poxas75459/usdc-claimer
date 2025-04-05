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
    "3CunUQ3br8Y9Y9ngmWhfVuErHEESjXtgx3iSuvh98Z5S2kHfbu6serHYXxnXuHpdUZxCLpLbnADR6Db5esk2hyNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XyaQtMTa2wsFtx6EAj6i4Ndatr5JDAbNwAyKocUB2n6j4YgLzn9tJ79PRNZejRm8MkytXD4r8Yf89ut89gcSFUV",
  "key1": "5YEVPK3e3MZkfPqpkq17chE1Gxasu1b6t378fwDuLw6VVFVUwwdzDNtJshRvnvEf8WZ8D2BQvM5zND4A4r1N94aV",
  "key2": "PsLMRiePpY3vyYfRMbXTsmtaGYWymeBEiPt1cw8JoHvMCmKCrzke5kMEVdeSbTGkwxcc2mSjDEhahEMAgsHWSGH",
  "key3": "22p6LKxB3SKMxMT9Henz4CJcjEvactqN2gy9G6JVNm5FPWTGh7TH1SCMMEpUJX3vTLGJcQz6JNJzjdGaTENpu38B",
  "key4": "2dMiUD9i2u3U42fFyGwsUWsTgcz3rQ2AFM8udHMoEb2XMUNZdDsuUZKWnUmkYJAN8stkFHgEjJAp8R57RXCAkisk",
  "key5": "2fnz6CMyFd57xkkiWobpYmEMCcvx7FEcsuU4eZaatZB9RuX3hA1Fjm4FLKhubJoXHJcfEtjbS56YhPmyRPkg8MpN",
  "key6": "4bcKAjFZvdqpGo53N4Cagoe2hxMfaKmWr284fX98MkRXjRpPJ2qxCUNLm82jfd5GjbvE3F5bGfdEBRuHudszrfhh",
  "key7": "2yQAsp567UbQCwuF8pTBRkn4va4CzAzKpHMsukaTy2E9vSo7aEC5kKyzG6EfvHtXAUoknmocnADBUjVSdtsZR4De",
  "key8": "Zykmhk4Ba3ThvLQTr6t4cAyYaEqu1GzfodNZTD9hikoXPVmHDpaCFaDpANhGwRucjLsB5Y4gDfivtQGb8Jrs1Zv",
  "key9": "7KiX5Mp7ojCiXr1Pd8y1YHLePw1mvBWsitZCEeStEbPwmbvz8f6ewE8kVbuYtj7Ntgdz82THAhXoTp2oUXpVz9w",
  "key10": "17KuaEN6t4bCTFY6RjmPxcfQdQ5BqeVMNpqDWyHRLWdK5bnEtyMQ4fX7LfimLDDkZWeKuJCZ3DMqyp6RCSj9vs1",
  "key11": "2iWmnqagFqswg3cBbmZFMrNYKFAEfS74NFv3ZdzjABDnSTTdj6y2wDkFWBn3nAfZj7GxkXiuxBijagNEvMcCybp3",
  "key12": "xjQsAqAZosZaADHDwhX8bZJKrGfjPKYNKD7bFACGSGhGLYpV28dUDHzadU1rdtuBkrJfk987jce4Vuc8pUU9kkC",
  "key13": "4yxrHUMMRePHbx22B6ij2v2b21YQ1HgiequNstdE6FKUbSWh6zgbVMMVhy3b9rsynj7gbMzCBCtyFGEp4N9T3Zkk",
  "key14": "3G9YFmRGowmRv8rXPBYkEp1gdEezAWNH2KnqTQ4tNLZHMvfE8kqxN4mbfbu2tKWbAsZVfqDPYN42BfsLM5FGRceK",
  "key15": "2BkNoe2PWANDUgd5AziWcX32VgZYXE53afJPrA4ixMpZYQtLURyTXDBc25bQxuh9pS26gECxbCxbV6UimCavMLCA",
  "key16": "29cZo7igoVHxAGgvLwrqjFnC5WGG7L1NWZ6f3SofhBmo7aPQ1v1JKDTGYzPFs1qNfRsXQwPvRv4ionPXCJHDBegP",
  "key17": "jN9m8ohdkfLRmWhrrdeMBaDPb29MQX976rvVZLVimuW516WqsXtdeZ4GyKVQXGrJgj6vFoZPqrYSbyELxv4RAVG",
  "key18": "4sheLqWxWGRDBHbEYoSWDfXLvKot5h3DhwWXD8CLxwX3Y81EXBgKfNkyhc5F6HW4wkVNjeLQ9HwP4d4JKmhTCFN3",
  "key19": "2gH4e3MdnwjMcsk7ekfBoUZSBrM3wNVwMmyjME3zcZtfPJBzmYZZo7h96kfFYkUKGuYxTkvQJhMJFrbUvYrRnY2X",
  "key20": "p51ceeNMa6SFgfmjZt5o7wWWjy1z7Nckc4VUrGTtaLyeueJSB9nhVAzQbixdkzNSHGXN5MAjsUUARLC9kG6EwNZ",
  "key21": "53L2h9hFMNgGAzNoQ4fVf9Zq6jK16Hmtghu98UUrFnYGJRuwCnHbNMZwvVTpbNdSv4AP3g72kNFsqsYRJPaKDwc3",
  "key22": "yoiEwR2L5gr86uWf4TzRSA4REMXtQzbW1bdtA9XpbAGMJZPhe5zT2dVKRwuchjtWtbfhXvgq1gKU1d3SxuxhZyW",
  "key23": "64iJa6zU1at5h4phPkhEeS9qE7ZcM3ZgctSh3b5hG2FRXv5iWiDj31FbxThf5Vd6PBHfxMtYJeKg3dYYGBVKPuZP",
  "key24": "2mLEhUmMAbNSPgkLaK5rsm13Js3fcxbiDuWaxuyFHYvfynTRTVRknaA4CmarhYM29zaQW2C6QsJfK4LtgVenSekG"
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
