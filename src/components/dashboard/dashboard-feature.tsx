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
    "38WfDpyXuVTScS7P8Xu3QBojwSvWSb48WbBeaXTQiSmKc9S362VcTsGBUssZ3AshikHM5DPDRjfNscjSMboBTwdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jTWhVLi4gP7GF3ZjfryPmdSu4P4VwFWFddgGPv1urZ1yzqgBfY9ZFCjtM3uLU76RvhvsX3vPwmG2vSFmRCVkNR",
  "key1": "f768GzW3aB7fC6noD4qrWuJtQrr4iQvAKEgw8bb9G9DqAhn7feSreV3AczTGaTvMytNwAwiXCyF1BqefpoDBtim",
  "key2": "59VAVq1FxYRuX5w2dknv5HbTrbrVCzzkaL99U7ng4CwiaJLRK3DsdchM3YBX6shoWfiYuJ2w834mqmjdsPTZoA3N",
  "key3": "4adGQNjnc8CPjMXGXrYvZ8GPLGdZ3RMuzKQLP72946FJAcUZnGahCfgYhLjRfck2xjzbBYePdvFXnwo7DT7R1dD",
  "key4": "r3ooDCztc5TsMgiqiMaL2dVExNFk35dx8EfyU9vn3Lu8iGhaW63spDs5wwPS1j2gfKtf5HyuM8mJXrZPmNZrTbx",
  "key5": "1QD1cdqBuH77MRZV6EN6DMy7VjNerVSf6g9SNQGCfNFTTBpr5RHx3JASg4C52QTMJWT4qVAMCemA7KtS4cjEybv",
  "key6": "4hdPXSa1h3gSWUrFxLxq1FgMjPAziAR64DXiD9Zb3tnUNK5aU4pzK5ovK3XMU7h3keSfXcoZ4eTwMNpVMrG9oDzu",
  "key7": "32RTBMyfJ3bo5Z7TRQubvepEAvEi5g2MgsKfdLrJPcTDrKcxNULX2okmgzjoU9gxSnKMFwBg4876zRB1f2WuvvvB",
  "key8": "2MgJtttVcK1B9zvxSoX24cSdGifkncorrmNxcnV81GR9wpyTwh2NTeQg3yEdyeQm3aYGTZhChHsq21ePVKMSkWKu",
  "key9": "PUxKNcan4zTzkhuQEs8e6dxVYoiWVqhcR1AqdBaZ7Qj9PAL5zwaLAAcSQBzPyV8pYuyuJXRBzNYANDeGh3LrEzj",
  "key10": "55VdSKoGLfjy42hb3jQh9AABcRmndJGpdkJSufZNM7dwJQLUrTirsK8S7N9Ydc4og6C8pLL75YXRRo5H2wUEMP69",
  "key11": "2RtkeJj6mniqfAFK9na8w7dYbhDFLdggAoLMqSiWGkzK5CP97hbf8eYHYH5p9ggEHdRqHRw6CtRkJh9xehnZ3nNV",
  "key12": "5YRbt5KPTJZ6TqDcwwFvh5EGCEHQuaZ78iRnYyKess8Q61rL2R9a6VrBQpwDjuiKfd736trNCdeHWB7KePYCmtQf",
  "key13": "66H59CTsgptfiwNgmfnFWFGPZaxeGMvFUkViJ56xAj3a83ZB7gjzSy6hAzHQ5Ynf9MxR2CywypgY4iBHUu8BWJ26",
  "key14": "3yTZfNicxiAWznv1CngXSjVbanWif5EmBUsviYbd6ZpbnRgki1LwWpt2fCYAxKRtksfSTV1jCSwqnKDrzafohwFh",
  "key15": "4bWpRoWnvciTKtVoXp7k9L6RUVMcCULezVzLdHjgCTk411X3xbaoBSwzr455vfHJ2C47A9rQjCu31SQnYNpEbjVR",
  "key16": "2xQvf2ctkceev5Q7BpZL4Z1utFXzWF3dzny65KbMshvf4Ax3uzj7MNp8PxTazAj3eCzE4uuUoRKHEv5GejjQ9J9D",
  "key17": "62TJE4HKTumQkVGsm5Tae2pkKcPjBnzaUhc6Txib6dDV8yUUhn3KT6LBC5KPypcqt2U8CfhS2zbw8KeN1ZndE8k3",
  "key18": "4zagKLeJHmXvz389yErJTbKGG7NEPgJpPpoUe4B6ZM1PR8TuDLwgt29KzKhdvCw6Az2aG3H9B8djoTcF9Bq6DsNx",
  "key19": "2Y7C2AwpciQxDajzkFxnAizHwEhXEnzPgfF55i9yHzAiKY1HhbYnCNpokusK6KUtXXMV66f2tRKJnSCZ4RGVZUKn",
  "key20": "4qk9VVkrsoyJQ4Zb6w97h6VxPqVYrPYzXnzr34WYDjR3BcPNtXTuf5PPTZAhJCq3fXnv3nU4KiFcYn3ZYGjTwrT",
  "key21": "2j7nHqedK53ULR7zcySG8VZnqAroGeDnzF2ugXs2XBQvARrn8NdDsY8tQNoeNAYi71tyRpn1zQSUUS8xWBNzCp8E",
  "key22": "4JE3aWURqqtSuKnXqB1imvXrJoGi3VDDmBjGFhdQG4q2Uh1s9rYZLbrkvVmAzgZMtWuZwbcgoRL9yihAXdkMV6ht",
  "key23": "5sp8Aexj6eZAECJRrq3GqSj1TZ5CzdoCRLqoKU4KHVfwSegfhPTEFsdUEkvp88RHTzqK8WzaV2uU56gziNYHxeNM",
  "key24": "51cPvg3gvVeqormasDiBQjxUA3a8BDwujPyEUpHMSRmQcCoNCm82ep9cj4QuW4WxFshFtFn2w1gpmPw5hgoKuFB8",
  "key25": "3KrdYBJvgW7bb1gmTKsHzqp25o1pXJNfguSiSfNyENwU4SKCXz3sXghxxrnn8Q8MVnoGGvn6SaL3SxzgCYykRnHa",
  "key26": "5Xs4G15ibm7DZcSetqqrCrwbE4vaCfPUrmgp1siqSm9Q5cZawGfkpT5Zfc7tJRgrd1K5qgJrCxXQpLgm96R7zPJ7",
  "key27": "2GBLS9mam8o2bsnKThJFmDdqkUu2P4y3CRRuVQ9vfddWKseE1FnFpms32AszcDvrjBPkbZdrQMMxGFGz1EWQLGhR"
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
