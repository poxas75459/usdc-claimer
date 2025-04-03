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
    "5ienY3Aa8T9Tk5HET2n4hNQ5Ep2NDGRddEW8nLLcegP134hvnaG9DYv7g69RPwTNcRcmxAsAX3v6MpMgD8HRgmMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ykD2A7vKc4QYwvujmCme9beufAdj3JCiyjWiu7PEspTzbpGGacNrJ3DKZV6Hcd2CAgcdjRkD7eW5WbY2BUyQE1k",
  "key1": "2aS7SMVaPhaLeYCRACjYxJYKVGCpNwR5f6MWPjWCMWAiyXZu3UV5vJrArPDDjo2mfPEokimwqvMPPwZBzAzBVkPa",
  "key2": "52z8aK3i4ceZEsYUwWkVF5eGYXmbtwqiS5thCTpcJZAece8Fgar414eMqWA1EZqzYT8ZMJHRQ1rxYBzQvikr1UVP",
  "key3": "3QKjXEvckSWKAmT9rzctFig2c6fBsfyuRGbpuvKrWF3qNnSVXFHzTdiXZfYALtxYAHPKAv6rs8ygBDYG7Bnc4YPm",
  "key4": "3bQcHZvZbm8XyQk8DBPxGabqcgFFKpxowjfhKsUiRXGGJnFuccq5BUMVtKN5uDkThqqcsuxVdyoT6aHu5uHWeeE9",
  "key5": "4zxrpbZP5YpypwVT8V49M8kSL6pbyosMpkrmPeCn6LxsRdEYg2vbVWkzmxWUvN3UAWjXn2Y85hezn7WLq3SGrjTS",
  "key6": "3PirsXBYcQ4J3ExBaiMf6yvynhH4sCNzSBK6pEUfgDQPHK7Q8fQjM7bpwF2HP2SLkcG8eb5saWyCZVH1nQXC4qWy",
  "key7": "3vZHvGkuom3iBfHE7w9Lyi4kjmPXyiyM6XannRUKBwKv9pFVe7g3kHnbwR4zgcgAViwzuYKJXCxKphnuQBrQ5ta7",
  "key8": "5639XDPTwQioeSCV8bXghvjpe9C4YYdsXzLubFQ2ddbp3akiEE8aRdbkZMi6L2RDu1reT91mHukCJ59noNYLkeTF",
  "key9": "37SihnP2UxCeehvnioRuHcYkq3oUKzMhXe938D4V17KeF4cqHPgFL1wTrUSAqJBWzwmd8Wsbtwz4iggnWC8cUrJA",
  "key10": "2ks92wncRdXDiUzmjbjWFYR14JK3TbsUoioTs9uzQaaLfFuBRWXDVczydDom4rfWQhE5vbE6DSZhzbKCsWhUxNPt",
  "key11": "49nxyNDzvSKkUAHzhhKvNMpajPH1Esay27hHv9N39drTspMF8e36iLb8Y22svZbTxf1xrj73Upg8fdteXBHxwA6L",
  "key12": "3U9dAiMK7EAFiGPxzmVrJhnyGNE9F11fVBguqNLZv4qXQdHkC8rwJtT9PnCrdKo7aAiUemTNEumm1EYRvMmXwwDN",
  "key13": "238NJaKMbySCZVpfGkqmRT42kjA8U4vvx98W5iP6mZqVVw42yhMmzhDeVmvnHCE5PHE1sSnQDaAHWZrQiof7RUWV",
  "key14": "3JxD2MtPQgrK3TLkYUEEtjNDjQBpsScQMqvS6oCmLpTwbWzTecqzK28Gu15iv7B9w3o5pA5wHvNg16PywR68QZ8V",
  "key15": "gDBkg61UFfb9B8nb8qDmaJsKNQRaCwmCaCp4VJABVk3tPFg4nXb5YrkZLqsbrWrkp4qMHi3Y6Eu4K4wGMhDprfn",
  "key16": "5A4zvu9vuh6wcMrzDKEpoZ11zRkQ2zrrQsZorcjFPgeQkrRhkTa2kRyp5X6dsHPHiHcM8NoPHMiHvyLTXMT542Sp",
  "key17": "VQEh4C5Sck2AwjjnVezpQyQJFZuVayfQd9s6Rso94VMf8xSHB1HUQkvrwoi1NEniRyYHwTfSWm62jPPJhJ69Gvi",
  "key18": "4HDrTcvCDApbJa139oxyzfWwYizFCSYQ6hQVVfgxrMdJXFL68cNrytggLU3ujypCZsTMLC664Tk81HEL2vmEmNH2",
  "key19": "4WeArpbEzNFA8a1VbZ1bsZqzoAfmCEcm8Pzjt5pXp4Sz3FRZ7rnJMyLrArTZ4Z33LAfZ27W641doWcs6GKMrByBN",
  "key20": "2STFu1kQpbdtXe39jXLxKPRi1UpgxY84ecxzk2XqTWT8s9v3kJQ7XkzxgNwrtQ4BK6iBZVVA5MLEB2JjJpsgPTC8",
  "key21": "3qZMi8D7V1XQHeHkvsjrYHaJZ6FzKN5TuGGVK4ffyYL9mvL8E19wwHcrWYKFjhYk1FDCZySKk3XPkYqY8n42ZXRM",
  "key22": "5JL1WbaAvhUvuRSFSYfiB7GTRv3XT4B2GbnCcNdnDzgGQ1Rv1S3tCnn11XMtzGFGER85gwpiVtZAdoJt83EeHFfF",
  "key23": "5WLRYXrYvbCBSrRU35K7h7LWRJ81qniV3CaxoCqrcPhpRbmN2ERauFaSzzg2kc3tsvwUQaowa2nFdUiDbFRaKFCn",
  "key24": "2iHtLyVHdYv4dfM973Pn6ZDoaXkioUgfWKLCS3qbKuiceSJ1XywUTjsLbaptFJHLMdw8RN7hAchU445ZJYYnKBYo",
  "key25": "5Yc71NurbbBghfMd9MpaR7FnJ8YN7RpYkFK2roQZFxKdbVhC7FbGjbvgVEt3jKDHQWhUX3KGtRnGh6hCh2pWQ588",
  "key26": "5gCgagBjtdeDdGqNXbmrfAtUTgaBmpUMh6KFPfRYXLdRsesza2Row9SgzdA1kfodShjspw63bKVRuBpfnbW8GgEc",
  "key27": "5NwtPJaZAuK5p9PMGvjMT9KWVzGUzLrgqrmorY283vyc2xgyy4QxkdJDQogk4wfgXDjuKp64nDwyryca1EMDr4aD",
  "key28": "Wu5r62y2S6wc6hK3vgszCpYsmoKBQCY2vqCpzHrZE1JyWiM6FW7RFv1a5h7iXZgFws5x2LXfx3VEy3f9qTxfzXg",
  "key29": "5gLnFPfFVH1qYNVMQdmiX5vB8oXhawMxP7ifnwVAxzP9MR21jXmkvJqwj2mgW2wgdEqEdqZm9eqXGPrnuR3RHbpc"
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
