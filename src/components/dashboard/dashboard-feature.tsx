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
    "3wp364mTJ773ucCBG2tjzhehNh46zw1y7NNgJPgbj8X5noL1eqHEdwVbq5PBnCDMv5kExt5ae3EnKFZ5P6gL1TXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P4qf21AGbXCTFUkjFBLpvHKg8T9Yj2oHwJHFThAh8wwmB1FtHuJMSPzgBoGzmhjUL298CVw5xP83PFdZAF2u472",
  "key1": "v7Uc2qS7XDSdNYgcCcjVVQcV4WfyqWt3GDxaQguca9ZYoa1ju2gJ8uVenRwPQPNpYmHcihLbmN9wEfRvssiNhkS",
  "key2": "3z6kMdv11FtTGA2SitC7B1V4NhukHCx77ijSU4FJQCtUWakeqSrcKpGjwNX7DQuqt479ij4FXcwjKs8MQogALk8P",
  "key3": "47wxt3JFauLDfSUcRNLkrH4zKkp37wztbLesYYwjtGj4RgfSSxxvNaRzXA6DrRf9UGXy9y5HRWVdZH3R2fS5ssvW",
  "key4": "2isyNRWE3bvU38xRmtX5PgX8eSmaKnKa38CrikvC2aykufuRGdTiWVfJXvhWAHkj42dGjzMC7SFhwhG1q84fN8pF",
  "key5": "4uVNnuE2eMk4ahzc8tfKiyroFRRLBubm87ezcfwbrUKkf9SRQKsH417GX1vrtXSaLCnFeetWBYCEdY2pKJh5DHaC",
  "key6": "4pobHnJRXZSu69LtTzXjZLWxZnJqdDYn6yykC4nXGBJiG9HLtgdTmT1bn9dEDcwopz3f3fUTtgAg2V57F4vG6mC8",
  "key7": "2Totqo7aebXtzzfeFLLxc3tx6AoeE7RsPUhFf7eQNdPrRNBXsoHjWLAcJyyXsPMac9M4E14VRXFuLMx836eymeTn",
  "key8": "66ZXDf6MuwpMCtxs2prExzPvuntXqdwq1uftMoAWrq5VkFRHkkNvPu6x3gMosvbK2z1aU6eBqZHw29KN3FU5D6cv",
  "key9": "5tHs94HjtLfX5yoSAsKgxoYAackyb1MNbm8Mrdz9PctL6sKZURYVq788CWdrDowrNsrYs4frgR4o8rBoXFZVTsif",
  "key10": "JUZfU9jisdb4WAhc9TX3it6zGJWKYkeereh1MYeYzZkmtoiqmpkxVTBcz1ibTidUx57zcZbiLR5Y9TufpepiQ71",
  "key11": "z39zW6z8QwGU8kqdqHSQrHq8fbitssU93QD5BE7DWXFSG7ZSmRY1PQLZbghcuBSA2Pq2Xwh8HHvZxXD7Qt9Rgkj",
  "key12": "24vdRMYh77Z26FUYFWc1dr5vDvqhKFicWuJQ3v8CZQB6XricVAeWzyv1iUPCX7AHJsWZ7t4W1DXHKdZ32AY6pbLT",
  "key13": "5KTu9PmomH7mbL9aQqYQuxX2ySsahwkrzEGKcsP6UsbmSX62XBFivbVH1JgkokkbLoa6d5fCpHurmwCPXBFP9pwp",
  "key14": "4PjefpwgCkjW81n93GPfDsCFu94tuDDDyJa5GhPYGw3uz9qW471tsao3LdWvmU9qoQtoDod3hBRAtkFmn61CiYS6",
  "key15": "5mA8ZbmAvXKFMyjv5Go9nE9WXPystgfA2u5o2WhMGUnwt4FM2gbfVHtMHmjbpu89NprqyJGCmUz3ckKNZFURLC8F",
  "key16": "Bnv2CUEcut9KV6qCdFgstykXLpRG9HohtC5Lgd9uhThtBoiksic9PqNr2hyFkRzgGcKEsmtaKa7swu8UhTeWWC2",
  "key17": "5VkFAYW9XCNtQNjYHuEmr8XHFfmQuuVFPxNfz7nERCKRDLgLQbEk9LFWHkoqZkzrsMTv756fJo9pY5EMgx1TYjfT",
  "key18": "59hUzTGfbnzpvGVEyqLkrryHY1Jj4toKvN64CSVr3bZFc8YH2pQthrwkNRGDB9cac4aJEqcn1EjEoxbat7APWZco",
  "key19": "335xjXH21vcrNNosqiWbV45Avb3hRuw81XsHyHUyut4DbqqZSAkB3kMWgqWjQ7zS9Np6JbJ6eaeczCXxeUSjjn7q",
  "key20": "3VN3PwC7EkH9TDQ2dD7goAMHiifLZVDq2ejdovjZPZzRNy2xwaMxqRLJrT7o9Wg7PuuZpMabCN55QbPYvdSJmag",
  "key21": "55LeX114ahKEZZtxQSssFv5jP4FKrMER8fBxNE9hBjyJz8DXt1eY6tZjGwQ5Gvv6Lm1sz5hm7ctEzeqLkmyi5cKR",
  "key22": "HVEVwZx19ZFVPJNxvKxTK6AN4yiEAEuDuZPnGuw66cyQDtMLqrPPVus7WoubjrAD6DkYbcaQzjwCssBhYhCEMdr",
  "key23": "5oXg3gX1GcmLyaGPVgHuq5xjSFCgg36QeSxAEfmnx6HL15rcEfzfBeeNJe671FwwF7NwqiqT5yfMuNWrjfzsXhhh",
  "key24": "5Y2b2dhwrqr24GUDeF39M3N5oEPUJ9WdfZjQ4qUAGFvMY5wEUucPxwypiRyumFVu9NCs6PU6CxTCC3v2nNTWCUhH"
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
