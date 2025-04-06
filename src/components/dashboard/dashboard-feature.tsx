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
    "qy6bYKqaKjPpK4KdpvajUGEoitvcezVbRtD3TuT4eZFmMtBcppvehiNWLqZztT3kBvVnZskuzAWpkyUN3wfRGAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4911wZZBBpGiDJeCLVDjPF3zLX7dmgo9gQAjxz8xu3bnc7gcKQDNZ55Fno9Zmw2DoDwPbxBTvCDQkwwgSq6U7FxT",
  "key1": "2u1Wzsp1SGJJat75TogHxEC9Vs9AMpZERUVJ6torQfWx9fZpytBRhDCAL53px4BLgC7kghURFU5cV7zmrGYcLqhj",
  "key2": "XSmGvkMrsm1N1FbZ8qepbweVNNm3C8v4EQAdxhmD4gxmcgqopbNPadSChug9RxXJmP8H2GaVn67KjVRyZ3qqT94",
  "key3": "4S7q9R4dkK7kWE3B5wbecZu48scZhPkDjLKYQKccq2fcyafiV27cFBwMMWyJcofxZKWteuKfdKkASfxtX6kPSs8q",
  "key4": "4QKZahD4ERmzPT13CRFkM31vfbPwxssfv4XZCV4YvGD794tjTN92pcqMbLNsTVet6dKB3FN1zmFt8NXEsU5pTNaC",
  "key5": "3ggVzYpVxbztuHfU6gTYfjoyjARycQcwwWW7KS48bGHUjWoxgnnAjtBegczv7XH8Y99tRJukJoDvktFc7sF1k6cL",
  "key6": "1maKSbjJucGeATXzkKNP9A8HswmmdyD3H7xuKMu8SbCBwTmQLWYyfVfSVZVatHdpQwqGWPWx5DoUMmi8jWk6yuG",
  "key7": "53tE4NiHQeHnconRvFBt2esyuFCWqxnZmM9VfjA2AStm1wyXX8r28e17nzh457jcwxkaehwtXFpxBThdBcc6yLos",
  "key8": "3c3ELwHLmzFz345L1WJKNcqePS1fLUzVUHazuARogbe5mWb1hHbEgTJXm8TLcqyzyhpErkkSm72qLPXA7KeT1dN3",
  "key9": "2qtcTJWVpLsENwyyk2JbFBAg9QXbnNc2LFKdSMkgVsbkCtYWNTJYV3D4oGcj4TDyizbn9v8BaU2AqB29deiDDXe6",
  "key10": "NBARq29VLHwiySdUARpyph3iAwXyXQEGXSyGR51PRAu9Vw8djAAjUFnrvv2bQqKnuk6VbQYS21Qij2AdC2L5SWw",
  "key11": "3B6H4iE7Gb1HqVvm441y6VBipLgTgSoyPpjctnDtARBWapYqVXMCjspR5qAUXmgv8LMEpkmCcFiENmuTT9LnoU4z",
  "key12": "2zuHAbKvc5wFaS9K3UEStEnTZkgbsXidLfDkf5GFdqZ9NgED6x5ZfZv46VMwFjecisbGrK1RCVr8ws9VSGG4BY4M",
  "key13": "3yKCCtdeF62AgW9tZbFTTbGo7jfiAqXk2gcLaiiZNy5UmeaSKahs6rBgbzRENiuuTEJxf6r4TCUA9b2gQUwZPCDU",
  "key14": "5MHqz7b81VEqJq89DCkwkGkzSJG1cZLJd6TNDGoU9GXWTLUZCF4Y8saR5k7VEXs2x7qt1DQRtAnqSew5RzsGZxUh",
  "key15": "34y6C4sbVXE87654thA8VXMbLD7W9UN2WAWgULF4WtAZxaJNMdWsrqLvBis6iixeWaA4NtxszTgJHhbkF8pmEVZs",
  "key16": "53EudFdSWvJhZpf6pzq6gMxX8YqkdeY4VWUk35EJvNVeyMCcPv3LWMXyHXdgNrxQ5WryagoSka7KVYEwoJmEFCuY",
  "key17": "tu5Wur5hFuvmHScpVbzr6rh6oJ5wr5WHgq3zFE5xVAbbuFsxh77jzjycYJGPBtSNrHDzzK3PquXVCSMUmMGiVxi",
  "key18": "5ihU8HnjAfKeFte7UgrZ4QLg4HAu86pzuyD6Rce6dgeVEnwte2pP7WFnCf1jdFuLQZ9SwbwwfPX62pPHWahcJ4sR",
  "key19": "4k2mvQxVuStjzuVK1WkSYPmXSLjvjCagWfuVkUreQkbAs95iohwuruUJMvfga94YTAqGutDi9T1tYmzCf1mS9R2Y",
  "key20": "5cVfZR3kTrZXfHX4Zj6wy8fDDimpBFdAVg4dV7Vgrvh315YHTQm3Xp2Q2aGQR8E1oKyYdphc8Fx8QwwAwcMojdEU",
  "key21": "4cgtUv7FWKbQgpr9cn4pEFNCYNwEwhWPKtzPTWpGLNtnmzJ8y7KqbPftcV2Fr4Y6Jtdb2knzbk3rPhTSoramPNnb",
  "key22": "vaiaaCZ6su1TxmV2QR1d83aJ4id4FZrYC6E4uzeyJXCowaMvfM2jh7HtBxtzGKDWqomni8qjk15y4R2c8T38N8n",
  "key23": "4UeDJWF2m3JDgn91DgYHXgdpB6Q74kHEXCfnwNB6Zr8USdXUPCLjnXxrPXEA5e8MheetALmX3cV4kVUvLnyzJxUR",
  "key24": "3SmbrszMSLzQiiGxuDq11JB6nnGzjZRvxWFUKr3n2g5goEe69vEUNYuiPoYF9vfQoFrdCpyydbTeWB8VLSfhzNeT",
  "key25": "5WUPTN5FQSpag2P7Wma1EaHZbKB1jbz3xRKfmu6sxqjufnzg7ywHXV8kvsESmieR5BswPAC7sKD9iqVKECXgLeuD",
  "key26": "2d45HZWF5xXkUcro32J5oEU9QxRxkM2NFMU6Ggz4u8gHTaHPzZiBmh9z2LW3pEqr5b37VKQHTGSrNafQsvX9eJR8",
  "key27": "2GBfkcftG5cmpC8pRenLiQUAi9szGLzVNsen3FhaQztSfphnXgPMeuDdawXGcFZo8qcC9M1T97s3HiqBoADAeiNk",
  "key28": "2nQRzZwRD2k43tXiUoc5tmG1Y4KTW141se8qtXLn9KeJYzAYmemGWqPyaE8VxBex3iqaMbe82b5wp54v1jwHtVX1",
  "key29": "2zPAHY4T7REUSYF3qcUqXL8ahNfGcRDirZ2BWQBtYrLiArNZFCD4DyngzCaxp486nHZK3WELJjP5r8NgAwmfH4hj",
  "key30": "5gZzidRwjAVJjjkYBX2EpcPxKoFPDNc6LspmBq9BryRcyUMWmf7QKoJRLAXV3P6wpFjGXm43CopcdEUiwJkdFyHE",
  "key31": "4GGH4bkCZAR3tPCgHPLe4eAdY4BPect4UQY5mLhPvw6f1xwbPuMx4nzJBeqSuUqqwxVpmuBpXufM2tESbqxTtMxz",
  "key32": "cJPRVQhajMX1DvYieASDadakSXZrYrPjKJpAoZrvoa6KX227TUWngPDSJBA48EfvVBjrDZTVQ3Qc58fPywWWqiK",
  "key33": "5sPBAjKC2bE4joPcG1YYhAnyuWoQgjFrfZCuhg9EVF8QxAqGqnDmwdaApwtToNauHJQTTVN7u3Sd4feGbQVnXGox",
  "key34": "sWZg2iAGsuetKfSRE7eFyk2qtf3yyXaCQGA8o3dGsxvYhHNhLYsaPt1hcVWyJ2fEXm6L4A9CJMnAX4A4P47DTsc",
  "key35": "29uw7a24DYjPtYsTDM76ZoWxnd8stJgUw4SeaYez8Jk3XCKsks8Krkgid17egTHBxsJeVWqxhFM12rCJiwatPvKE"
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
