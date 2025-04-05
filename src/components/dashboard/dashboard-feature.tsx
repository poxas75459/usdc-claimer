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
    "BFJPAtnY8CdpK3CohpgEgpwa4ko5csQfyxVQFfsXEhgsqpWLy6waGFTe8QkC3QKUezUo2mYWMymmEVZaWwiFHrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qt5Jo2kr3Toav5oHLedJeFmnz3udM6P3uPMdqKrS4e4ubJrpkYh8YrjqBqqQ5xT1af54dSg18Htxacz787MxYaq",
  "key1": "seVQyKtoRjaUN1JtEcixFuegAX7Qu2yLec826D6JyA8uMfeu3LQc3DMQ3R4GbtNphnpTjePMfqQ3c9Gks4T73VT",
  "key2": "5HXtbtboikcsw4kMYF6gbfzYzUtkw5kbpb7JVdG2SfUb9vLjUQEQqx5c8Y988zQ4ampph329aCBZsKThPfZkheRL",
  "key3": "4B6NEYbebNqsv8BLL2s9LYGwfStHQTd94GKFbTQ9fe7Mx9BZKJrtpDhaedAwBFt1WydEcNYRApciqishzZ6kX3Dp",
  "key4": "52vDxv8BauqG9EhkAVseP7uUoXgNoTt2hP1xsddm88LXoiuMyPGTcXfjjQP5iYa3CzzFURTyXzcsxttBfVpN5JCe",
  "key5": "5whq4Zr4owuiVFVStvCccvzvsaFRVa1FQVbWUzJvHJVSAo1meC3HPJTcxTrpVdvMd7K4L42vbVEd3XWrAnKN3Dpo",
  "key6": "k6xMTUtCFf8ixrtKd7sanNjhNt3Lf2J6fDCLDz44q437hwZEkENBJfRchsUZRcB6C6y3DMqLsdfC8E7vG77cRv1",
  "key7": "u2vFHBukJVrADJ8vU8gyFAV2f6NAsBeora2eeXQZHmh1XUqTmpMRQorh44h28ov64hSjTJrLYyaALWKFLMN6c7W",
  "key8": "5Uw7kfBZ26kHvZnPPAcAjL4r7ctKihPKnZH221yvyGBTFbKXTpySmgaMZE9wRQvVQQgtf1BXL5fVy1ZuqeuDN7pD",
  "key9": "2dv7G3M873CH6iW71hakTuV8D3q5RC8jm3DeXntJUccpaeas4WoNFparsNAh247yxfgcgGwRp3zk5djFYDQLb5wr",
  "key10": "28vCGH97Tru7ZgzzPZKKYRsbWCEJKV6y4VKtPR2Bw4ptMBPayjF69bnFLU1E8BEEVPzLVgzXNky6BaH1yBGD9L3e",
  "key11": "5zfwCYfWasPrsCUendxZjUBsZ54M3oMeCequ17FF1JADxBJ3JXMWLGnLkokHXBKFj54d4zcC3HatLtxX1tp1qVCz",
  "key12": "4NGqWvYUkjqPjAcBVoWpsesg4aSGk4jMqnCUBoR7raUH1rrVWoJCaJf1HyrQ3AypwK2CAWBNkuExxszwYNZxwZ8E",
  "key13": "2twsJ6Gy82RhSion5tyUvZmTeRkJXqqTNXPYvVShPashcDmom3G9xQpjkvzKHaLHrNdPqczEXBocXSSavRefR3Sn",
  "key14": "5N4k47vQuQ6P7VLxm8DToW3UcFuxmnEhd5SexwUtGbMAkaQPMPvhKtGtsRz9k7tA13b3MRDx8NC35ur1xhqCP7Gd",
  "key15": "3jcQsLJhpC5kzpBRCB5AsZ1CxJUTNGgJ9XbRpth94VRdPsgCUjE5o8G6Dm2ZyWgRMGg5kSKWFtvYsJL82kKKW8df",
  "key16": "7jUP1VjReAvp2VRtxdEd2sUJcKxroaseDydSsA57g3dVW91UPfDQt4st7mMRp33ERkLS7iisZgHq4vr6QTnbmZr",
  "key17": "34WDtvXB3Mu5j1eZV7PvMye9UdmW6fCzuGsARG8YFGfGCAXtnvSZLUWf5acoXfD7DA76UwtbRisKofX7aYMt7BXN",
  "key18": "4kj81qivHxQFn2VLkqChiUFbUiMNEMz7ju1PvQRJhykps2ZXsCDWwaTCa5B8p2fMmCDA3F5eYnEEnjqFX4DNYG18",
  "key19": "5g5HQrEfY1RxLV4qU79q9qopcZRskehKFY663QJQxQpZh28QhUxK4DRHaN16gsXRz687PqubccFWdNGprG9Cq2u9",
  "key20": "iqtpL1B3V6SmVHB8TDFgTW83ayXFho2FG5LseYbmmp4223XUnTvpc8Tu9LFAxtoPfKmbZKjeQsYdg8B7T2nnhrZ",
  "key21": "58g7StwBWHLNLdWFihbnDxMAGtiBHZk4StkJay2VMWkVCH3A9ud1kevFMbdGYLVfQZLBVMhEEe1RpTUf1MGH2TgZ",
  "key22": "4dVpa1LL2XPKUjTu8pGym7pzABLeVPYDPc5zXFyFjb2t5SbQXRHt554J9dYtPjfZMAzeu9SqGe6bwJmDZ4M1NM9G",
  "key23": "3bY9fqYuEt36c8JdVezXoYkMFkwMnJWChn5uG5n9t4Z8D6vkguVJK9dYr1ckPYVNqKCW1xWKBeM4h7UDKCdCYNxg",
  "key24": "4kqH7h25WKRizuN2suHu3Wd5ZZwPecQQtH99di8X8qddvKGTdLh2JcG3k2PmD1iWVgSaGStBoMvQa53JYJWasRST",
  "key25": "5TT7HQTyucxxM8BXcdVGGUQxLDSRsanwVDp93KY7u4x5mFjtFpJMhzVbp9XVkw6i19oof49LfyEnuNdBAG4CFbN9",
  "key26": "8qDnP97yMTU57Pt4zCraq4ptsANotzEETVeLSTbyxbzf3awmJbLb9sHA3diVa4R6mi31AB3BmtiKWvZcfRThwMQ",
  "key27": "5KN1CpxNvRx2km8Sk9qz9sJxg7XSeLt2pQrGHB3reMpCUzpjkL6vALH9WceF9yoJBC6zCaKpuohMjkq2pRnmceCj",
  "key28": "4DeMVdgwWcNDqEbkV2S4VyHZQWsySphetDDUtta7J23MFceWBaNpUBZpFxrtaGf35ZmghuUMVCqUYZjrVxQMhRbk",
  "key29": "3No7m7xBSWKzfTEnZrjzF8vVyt1LjvXYBd8RFanAPdDb2uwVECCY5VTuah8wQ4DqspnpeVo9xoqncVqcvFxoBKDf",
  "key30": "5iCPifYHSi1Jke9fnEEBiytabomUx7Lt1sCFehSUxS2TXin3Q4FNassHBG39H8Da1UPSBGWbGfSj6ZLq5yrX1gRr",
  "key31": "AJJcTHj75hAGabEJXoEPGEfS3znWsdqxoF6jcDhZxpskvT7H2sMXQNp91djBjxjysXLd1AFjUJHdkQBkx3nwGCV",
  "key32": "2K4miUWV2BS2TrSFxjNrdTAedXBm1GXpziUkdwydq6YkrL7vSkpapMVnhBpxCAd8gU66BYkf5tdN22TYb24Y1uM3"
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
