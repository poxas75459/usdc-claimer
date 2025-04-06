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
    "c7tSdLZpU8c6f9YFzLoBgVgPdJ4HvvtYttNkxWLzB68eQkdGZGN2rB2jrteqwt62hTJgJKsJgmk82sic5DQ8SdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jVeW2Y5E9VPPQ7fEXqqCbD2TX9UD2bAj3kcazMn3ubhocVyWPCcpH8GTyFh2dfPEutqrtbkpH7eFq3eMN57MBew",
  "key1": "5ecdNY1k6d2wGRCEnhbnPHYwS6XR8j46Zsixp5Yr3aT7XKyKEC1R4NEiCqTYhRbPNqGwKyohDT1PiNhGrT8JQUaU",
  "key2": "58RbBVCjDnApsKgs262AdMwnHKRjQhnofpiyvKbM27WqjM9jNUwgbMy1zuTURVKH1UJPrUmSJsihmmGYBvV2KRdJ",
  "key3": "MvoJqy2HjaypMRkvWQ69QCCBibAYrHYyRD72Z9NARVgfEDWDFU9xHXYhwmhsWc6bf4yRMyspgq53g8btopgYKQp",
  "key4": "2YPR4pPuyhS7ujbKts573uX5mPrUJ1QWm6MsbsokSPtXm8jM9j5TKFisjYH1YYQfHCidxYujLppnHHc3NFuZvREv",
  "key5": "bSTgjgRyRdx5vYJHC7QxjzSkuSJ3pTnzgm68VK484NPAzefsCrxXJeMCDeBipKWKzS6vFdKtJA6P9Eharfu4LX2",
  "key6": "5s5WzoKVrnR3jyx17QjWPnH883ev3qE1dvFUdB9EPvLrbqJ4zQ1Lewd1tGQzh9U31q1TwnVU6JAFJafangwXyuUu",
  "key7": "LEBtkrbEw9bzN3YWpx1pKmu92iNeU4coq3woLrEj2iuBwYE7UE2ofpgTDSnibSWgVdodz9TUGH7UWhx3TLJyQv1",
  "key8": "2w1mAuNM5qk7dwYo1GMMWZzyqDmBhjJrWBnyjfc52c7QYy1kst31AVFzH9cwxadJzMo7L36w5crWFPwXA5JRZ8n3",
  "key9": "54G7LgJUQSqHmADFAZJYviGduxGNGYh7ZiJCyP53KK6BYDvsGtXc1JP3nQPnMEkTpMCMikt8AGhGzEkn9XFvXYUS",
  "key10": "5rKLzJgDMKBhZRRgf6PMBrPeZW5J95b25pQpBn1rP4S3F8BpBo3tgL4bnvS3G7m7tsFQGrNFKiAZuyPKbQdbXPqP",
  "key11": "5VzDAf5kfHHDq8WysbttdJG642eZBHSqYij2QBGgKfHEtLcEVe73LoQMpgwe9dkxhAynkyw8LvHPbFzfU5G6hD8k",
  "key12": "4ptyJwYFejG3ZhavVSGXef1JFLaRM3Fxc3jRTXWwvrAFkvzC1AeBLfRKqi2pgYVQNFQE8RjPNmv9qceepKTQ3ono",
  "key13": "5CfcSNTwSPbxkjucCFbEWBSBkWMwtaaYkw4J5CEAQN1eY7SAY714wYqWKfqeUkctFWv4FbPwmW7GX5n2nun5xQKY",
  "key14": "5s6KtL8MziWiL3QQSoPHJPqRHbucoJ4EhisHu5MGw6ptGMF45ujdLAztjN3XwpcHCVTwFvZrYvg3uCdcFFtAgwkN",
  "key15": "3LZQAfMt31V9ZVHvE6RZpGw3XxVpjAEJxDNq9cg1jyjUcBqdSDuLwKqebfqe1T6xPesd4MKBrZCD8XHEttyMs2qQ",
  "key16": "SXaHJqDJLMYqKvpaGB3wMa1LbACH8P6ukkz7589n8nueFwY9MEU5wrrx4EckhAnqdviSffihY5n71qdVoBPLyc9",
  "key17": "5FCYii1Hb2yTutKKvYXzoiuP5aYbxx73xxiUiv5USD81Q3crqo5HQs5iwuNi4PoSRf3UU5Wd42shc6VdrRuRWJj6",
  "key18": "3Gjqinn9EmEUuXiwHdQg4GTUpyrhxp8CKNi1HLBAe4K83bWyCtBRZDUf88HLWsog7Ec5waFppUogRA5Csz6JdqSs",
  "key19": "2U9BSJwRaF87L2WKnQm4okakHnhbSfM6m6ttqUPvtnMmRnN81ed53aySLUDo35Fv3GDKZnSi17aDKBvPKrGzdzoT",
  "key20": "5whshwg7yr9JFRptzZR86ZBsqK4zwynXKTME9Cim45EKxGDXuipKT2UuBUfYYLtxfCFgWhDsgwDnSLv4kfQNkm64",
  "key21": "We6TFGZCgy6H71tma6KmA8kUbkyEydU4a6KyhawDcWnDx3EEYiC55aX43PzxtsP1vBpUQkedyEC9RmW2HdP9SUf",
  "key22": "5qMm5nSdFR61yvUZR84PquK1We3V33BruX3mbtLxwZMbbD9S2e5tKxNE7xeVK28187A5HM6kwqe5AmejagD6tNSY",
  "key23": "3n4tQkYeerv2bRHBPrz3RA2H5M7t1f8vus8ejcNbAbTxY8o1R21VFKpGv8jVQe2j4qFEDSj8vWHYjFVyekS5noix",
  "key24": "3xFUCsQQbmnvGyx6yS8q4ewmU4BGyZtGJfw94XVMm32bbHxxmoyGm5z6xjM3ypdCshvXmyfB9VQec67KjYEAnD64",
  "key25": "3kGBN5vPagmzURke7NXsbk1VMTAR6BGvYiYGP75BfMN92ZXKqVELeCm8cNnGSzj1q4Lme4CHTshyeXTUXvbMhZEe",
  "key26": "3qSDSufX8i9FuNPcViatsK25VSjvWtGf7T7UKQRkhrz99EPfzbXeTfoJtLodaSU6SPF7yTZ5ZwjupVVTgttWV3rY",
  "key27": "qk4LZfuQ5TVzPiQx8ZMkVE3VUuZqngxkLU3sTyKW13TeAt2pkVsJ5y5TFhJ83mFGeWuGtLiqKgKPSLF6T51kv7X",
  "key28": "4ZskXyvNW3ACwvssF8gHoyfvnSiYjRVveFQkf9ZiVRXHT1fyt9dNYRKEewwXociH63ezjs5zKYh2fEXm77WVCrmZ",
  "key29": "52jdRbpbBfk9aGrXwjrFPDcyjUDdip4cZyb89dUBi2MCCB8vY6xjeu31WUUhpy6kdoqp7Q2pFib94Yue8E1S44Bf",
  "key30": "3JHeHfRZ9jEj4Gkq1beLsiEjriWxNjpnFYvyL6JUFXWPYGcqCYtpedQFLBUVHvbg85vUegLCm5UZJNbXezXdnQRs",
  "key31": "3yn66vEDHCwHucdsft6BiL1pFWoEt3LTwZbdahoJWApQwxZQwtMC3P94vq5jKetPDYW76HQjgCvJazUmGKJciWwM",
  "key32": "537iqRsTzniHUJhrT5h9V4Q1hshGAzhMgTq6iepWZRvs5jdv5RRrLfTzCMC53mLomnjkdtgTqYH9VDNUYoiyWA7b"
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
