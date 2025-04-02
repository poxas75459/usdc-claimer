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
    "5vHPTfeqH7tJPFGFFtMZnjUVSGgR6YWXHaQJps9M3HWNtybe8RHnuxWzSNXrfA8nKk2BnoBXM168SyZ84CscyGAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTPv8e2vzfGu4kKhPKg6JmbbaEmFYSsktHAhcnQ1mcv4hyBatSvgUg2BYNRodDu8F2DuS8t6Nqry9Ny8gfKeR9R",
  "key1": "63ugDFfrDRzoLn2tLbeXAbYviPSnFPHEYv13RgR86yGBbT6LCN1q6U8nM8LbCWjACFEjdndjb73VncFCxYFVpUH8",
  "key2": "5ADVrzs9gzVdFSCEyGH5PGfo7AkNHkAU3o4yJKEhRnFyV3AtXoXDd1qA3u4YbqFXaRPBmKqnrxQh33NWgDKoitzX",
  "key3": "3RwH6FHH9KEZc81SSbogFYNVLgWtWgy3s1USnsFyZ4HXLSF3uZrCZKDBFy3tCQFdcDZuVe5Ge22ciGv2oqGGvGvu",
  "key4": "5UUhp8tPs8gmvEwzL6PUTa3Xp3oPWZpupkSqb8uGVNtfHk8mWeqoqbiQmhz3jsysU3qPCLayacuRPh9arejz3s6b",
  "key5": "2kXqLiQA6Drt3HmXypK1w2ZERqJrfe2oBCZ3mzEKJe9knBD71DfY3rc2C2UgPk5DSdWxJYtj344se8bU3sRajN86",
  "key6": "2YFhJfjJ31VTPQj8HXk3brRzPFwvfHzKe1SoSdVpK5VNq6HmpUt729A38M2WbGnst53ztApL3A8kYfkqgcHSW5Ni",
  "key7": "4w5frRsScUCnSxZ4RNZVVaSS4qfdXUSd5sFVGBpCjqB82x8F3xyEcd5rYAc51MLZvt5atBwhfFRbNqQhkzRXnDfi",
  "key8": "5ViLA1rTt4W8pdYSveE1hbapbg7DkEp2p4eMuncbBFSyQmw3KtieyWjc98hCitwSyjZU3BGJ2fMWmnJRp8Ah4Li2",
  "key9": "5r2Rjyu9ZJboNPNwp4My1HiXoEaoc42zY4Q86xYe5McKrtnC2X5LCVgnrMsfnfg4jzN9xeYnNV91NgvukdADiMuu",
  "key10": "279pN989LzcSvP5qwgVjFgb5oKUakTq5EKx1r7hGE1PrZYMk7fdMCn8iTqbyfhsjZcpVuCWArNDfdHy67UApx9mB",
  "key11": "3cLmzmPch6frLjwLUaE1xoVyaqsPCiR5yaPMjDFVuCsWbiX26EG2s6xt27vkWTNupE3sHQSzAFHsZMZXoyCpkM3M",
  "key12": "3Vc3MTZcRyyYPHcBHJgQFWV81i9pHdCZaNjqGYdphM928rfXB3LWWGo2ivatT8v15GAkRWGNN5H9sTwfP7vq3EKs",
  "key13": "XN85ubTGM1SKviL9QWgon6fDR3BgxmU9g6AytCCdNmKtQNCyEQxxnUCksUX6pUTh3zuoWduSt5Xnjr75QuA6EH3",
  "key14": "2diGPx3h22QxL2SPwsNFQyMhA8PA3ZCnjVovktwSY2wqBa9Uxu4JZ4c2nbesr3vXbSAzphLEpYY9WGdA9GNo3C2R",
  "key15": "5515AUQFtqW3Z1ER9tw6avbEtFeug45MPWFXeiQkYGEuwtiLztjRApGZ3mAX3y4kRiPDkBs5b6Erzwez7gGtknc4",
  "key16": "qXFNSWv134FPLcmvnXq1tnm7cqbJcWDc8TtQXJg2XP7cAU89m8uRvkvyvNb9rvGNPJHL4EvfA1kzGS1B2NbEjTw",
  "key17": "2BZX5VSA19haJBbsRHkpkvMDeh4P7xoL8kE8piPng5HWYZ27VnK3RZh8yams4H1n5LeHwMMZrwss7V5hQA1P4BUY",
  "key18": "3gomzi2F3MTLmeMhhzshdf9apZZNVRCXGWybi1inJZ9zjNnG92uwcSg5Zrf9EraBvXZ8Unqg3EhdCyHGMJ42Xxhr",
  "key19": "2vzqfSKATVUfDsBkN6wdM7qyDSwbUuVmV7r5fhfqtqg3KKzz1QJ2rXv8B5TmMRqB5cfrusJnZHdbaxCk6QyvqKs1",
  "key20": "4Aoujzit421hfxyjgRcxpYNPgy7ntUth1kjG8nP33DuWrb8eDEV61CYkYia1bnoUmvcsCwLXpe1ShV9ySgfEQCfm",
  "key21": "4dUCyMTjQwnqzNyLVk7wM8qrwCxh3k5GcVP3JBBBMxscZ6T1QQ2uRrVAkWWqufVHvv4MRm2KicgdWzpxTbq3SjNi",
  "key22": "9WuWkfnkU8sxZsYKgPup5NfMCUzmLk91q2Yf8YexbxaDfjw5JALRdU6xLCjeJu9oAMGzjLU86Z8xTqsNsb7r8bz",
  "key23": "5eSsCfz2Nw71dReYNZGPyzyLPH9HcmxAtZrzJm7UtDoAWEkPpdY11p5ty4jhC32NY47YNfrvU43ipV3Q3XGR5g6K",
  "key24": "4c3oowymwC2bhgzNbmhzVq283HXWygB446p4M8y5rivrwQgU3PVTkbiGzAiZr7W6DzcpN6vFeDCARPVLMsetr37y",
  "key25": "5MvYAjUQ5bDBGpoNeKz3rvpUDTeVzQCNxp6Pa1kL2MLqQNXPA8kD4w6Z3yJcAtQkAYvGpcoELeJ6t5LSi9g8kiGQ",
  "key26": "5FnPQeJz1RD51dZ63pGLVYLzrqzDi7UsbWrUs75gq9igEojALLS7jtrZJvSaDkqeUrmxaaXWadzhahTvcR4RWG7s",
  "key27": "4jPA2crC2DWyndfnfbo2euPUQ9MHvMHn7RWrWSHozrJdqiAeXsxKAVGKvC5Xri4oH8PhM2A33LwMCVs18chhHmzQ",
  "key28": "2HcUN3ScjfDRcUPYEfUwWoBy9U7niy2Z2PJUTkvTn6MCe4xv1ai43KxTy93WzeQ6VHvG4MXzLsAYhbeApjRVxcC7"
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
