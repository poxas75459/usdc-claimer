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
    "577PXoYEti4TujuMT5mY18GR8vCqBbVs685WQtiQVDggLYo8psMAC8Snqckbb4rgtJUnkVPDAuZQK5Mb9dqC9FHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fvxczcGmdhHsFEoJPYH4oL4KBr2fDby3PXTTbhh7hmpKW68U31nZjb78HPkopwyAdj5wq2ik6iSrZ3ScVrVPnx8",
  "key1": "396PaLpx9jVPsEx8NSDq4fAzbNqBCgxLKbRTcWWgHXL2sttqVcCaL97dTkd9miSLK7UYHJyKFBp21o6eVBNTB3vU",
  "key2": "2ytauYFJySC9YerV12f9Mg7LPrZvd6pgnQz4GLB7vJ2vNnMZ23HfGang76x4LeDHA88E4DXupvBBfT1FPpHQTPre",
  "key3": "4tfKmZg6F7CoUvUDHrYwB57FrUzNcBe9xSqPp1WNhPDmT2uxHYguchf1PRYreTETDGmHAjb8cescJEPFZMpbgzaU",
  "key4": "28BczWzxZwicZcRiYxFJPDT4uHwDUGBMdaxUXehWUaZMFYjwBuQUmXMCahXSK462zN4tjxPMkGVureEWmgmcnNHh",
  "key5": "DJgGj5F9XpyP2FRkX36EW2wUtJnxxU34vyUwWC1eVHukifSPKmWrEu2R2yAwda4ejPCJ2YEDZNgU634k7SFDxSg",
  "key6": "55YTkoDSEduQSFcceiasCCrM3axod1esvksQqwwRr8TXpc6brTa5kPRhsgeiqnsntVP1qWwqerQyWjTv6KDambpS",
  "key7": "2KTiYHbYKw5xYkyBTtpVuH8LBmfaSzVMWPVTSMvYEU5A3XasZsWx3cXSN5BmK2hdPde8s6741hEW5wBYBMynYDQL",
  "key8": "5PXBUWEKNMnhJU1kRYHkvoaJn7Zb2JhJTbczyPnXMm5LHkcS9vb8bL4V71c5Ptkgu4muBCum8Adh42Abbi8sdGhs",
  "key9": "4TyagRwaWucmKkq3A4LtNSApDfdKmkxMcFjzZDcLc4rwsu5uMjwjGbmeCxZWg7wJrHsEBc8txkdskGT1mLoeJmRu",
  "key10": "63AzSZqV7V1PhuqsbyF1jvb9dPN4hRre5Na45B7vSXB1GbifTiWCKrvCMz3qAWoqshBupgeQuqRdaFx1FbX8bBpm",
  "key11": "UMxgckDjMnEgBmuAN1uC6xS2pnPhvWzY2PXxqyvWto6L8FP28Cy1njPskyucm3esqxJVexdG6BfbGoKxcME58VE",
  "key12": "4Teig7qcQVZVSwUejhKfWDWF4SQ2BM5wPKZWLHFsL6RpGiyxSyXVn8GWQ4uSr6X3bfLzUFZEYEQo3NWw5P5haQLa",
  "key13": "9iZnQqv2oEPXycaqj1rJLgmjhCU8oEePkJJnjiAdkcipzP7actgT7MjaNR2hMpP6YErJssbhEDudBMEsgF8jyTB",
  "key14": "2urnc2uj5qdiXuQQy8nasJAd79Vk6Dy2QfyL9JQW3rZ3a6vsecTAbsAceDh2KJrzMqZPLx7WF6VPW5zR3KVhr89K",
  "key15": "2ZJMTcFpybkTZAPWwzerbqNqJnXQ75cNPvPGZHSYQ8GTXWijwj7rNtPzqihB9D1oxN4rR11VhMyk5T9jQyb7C4rR",
  "key16": "4jcYstgHybzViQGp3g2Ufu78SzSjfHLMAdKk3ujSrtkGMKXmoeuhvUwYh3C6yrMoNqKEBQxEupbTABrrfa4qkLCp",
  "key17": "2ZhfhRYdY8fDWqsa2XJAZ5EWFkuMTrRPNBBRLKEeFY6T8GsCHBP3vhHyuVhM5ZbrXksnVy89PYcMzAAsJcfuaJzf",
  "key18": "4YdaHp4oXxf2ZSbXwTU8LYB4zpEwGyTTaYBB2HWZXJbNQvkxbcwuy935NfcZgrsB9M8ubScdFkfSGBNeHE4gS63z",
  "key19": "4NiRVjcJw6Y11u7UU95JAQ4t7vEvVbFwgJvWdKrXM4yHDPPJRLWKHLRkJjA2uhsbnCsXfbWFDT8yJWj83vfcZzoh",
  "key20": "3N1fJiNif8kfbxKrQ6P5g4dW669nG4RSSqQ2TMG9BfvtBUNPwC99N6gmydtqTGTwRLuFGKHXPYPbBSuhGueMiuya",
  "key21": "4oBz9L33ghAdK7VoVxJdVm6KRxS2KfWhzX4Yjfc8duEyfnM98d1v4QJ3LDjaP1bUWjuUBP3jbtjuF3p5pKEsxF3b",
  "key22": "4MdLwn997SfJ5bGNHusSwbMtC5Db9AkHvHFfQ6GuhxMjjUqTCf7Qh2ezH1dG5ZmPMUh5A4m5BRpG9YvhGscehoeQ",
  "key23": "3UFWQmHDZyrjYM67C6DEGSjpGxmu1jtMAtiLfUNs9MQJdE6EKw16jUc5qDjcYcziefxKZQA8DgLL4dBDnPaJftGe",
  "key24": "3fN49DehwmD9h5MxmXRnHYxZb4uER4KphuKy2obgRoJcxdw1fDSeEPTbgBGvdo2bvMP7u3rYpg1URTwo8Wb2hpMN",
  "key25": "37RC9wdvNB2qCyL69Rn4iPGZQyx1iqrLNHqaxJXn416iygzmFvRvj9i8DANnfHnpSxoqYfLXpAh8HvPGouzeqs4K"
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
