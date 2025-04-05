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
    "2JJs2w4PKiBaZe1ooQD8RG6ZYUjHkSefzW2xLrz7XHDdjsD5ikFL9qWUQWrtASLs9m9ZbAQRgmoyKdigbL8uWGQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62eNUB2jeQ5QVqnv1zrgLPXReSuYLDmrK3ERXxuVu3xhdp52A6nNnwQEkKzveTVXhaVNjSj6gdCiUJ4NYjhDUtQh",
  "key1": "4CKzhFpcXAi9Hcr2v6tAc43RyjqQv2kVdL6rTTVQ5qXp4sVyeVgamjQERSsLUmmsqfQHZsn3f23tz94msR7NmkXf",
  "key2": "5wDS7W3ks62MkSgRLj5ZH4i8awtEkp89FdGfdirDVdK7suh24SAR46AfgfjqtHAck6SSFoUXqA1hQQZEoZULwQ5G",
  "key3": "jqAjq9DxdmTngyK9ccvkbatjwExEe1Tw2RA8gXAjUNu14XjjaS5JyVcjRePDZaXz299mjsQSfHNdNDKP935hyWA",
  "key4": "32B4qxWRF15FSaarbagb2qaXiZJETYmckzFEBTuejqjJszUT3tLiaS3ERgFSRoHt6CC71iNDHJWV6GTZxGCwkZ2q",
  "key5": "62Mm5XsowpEyXLB57WsPVrWpEfxp1dQLf1WvjYcJ6CWuAAkm4tdsGAXSCdNPC8swjTaAGCMjwYNxG8ECf82d8v7H",
  "key6": "zRVijjmp57okMcyJAc3K69FYavsM4nib3SH1STXAhv7KtK6iQcP2eG2QYXChiE9gmrkurPKvD7W21PFxTjTn6b1",
  "key7": "3WLcFLkdvv9ZEiDT1xCa4TnwfJYeTqqWajogsxW4YhX3zaAt3rbhxx3HEqADXjKE9x3MTtHfFfkPwogefkwpkgJr",
  "key8": "4y34cvMcRZHSnJjPiYCDDUtddvQfmaaWXswe1cDqF76EKAgvHxpS9km9C7kK4J6xZCrHiZyqbk4FzQ5rD3Jnsfwi",
  "key9": "EcQ4LGQcbEqk9Zp2x63tofexWWkKuk7Vf8VmJUhuxRtc7FbDGm7mcWEaAiehxpb1Bk3hnMAYKB587z57mXdtfJo",
  "key10": "upXQvWc4edWaFkfSfx9otkEcv7UgcfxrYDf1JqKrJGYLpLMiyZNWdH1Hr1FPsuGdp5snCp6V6pKfZ6KDHGo4iS2",
  "key11": "3PYg81uwF8biFCT2RDZYMn9MY6rRz1h1cfAey65gkeMQGs1dc8qWDQA5dEcL8XvQZ7sHMJbFT9iac1FoKv6HcdNN",
  "key12": "61gCtL13ovoqyYAxGt4XCXSxMJEkifsUSbfRjTBDMmpbuQkdnsfGUsKkEdaRA5emX5temhRzDLbNVhRJvrvB6ww",
  "key13": "5y5ffRSMxqQQgtBtcaACQw668ZZnue8zifP3S7cKaStgbRR49qZNQswbqW8wCTyBUC2mfA3Lzk4wK6JTuokhfTgm",
  "key14": "5KTfvNdSmoosG9QKrjfqcSXRybpiC88rWAETXAXwbctFFAG2TWCidtjUHbR5eWYuJqyB9N6y31LEcbYnD24ZWxyj",
  "key15": "25TcDFWdvfubNwprXDWbmhTpL2bd27BhgSsYg5LdciHJbgLU21FYmFt2a3zj5AsgH3mye5krwtj52rFGUX2THPbW",
  "key16": "2AUqUFvCfhMnsoFBLMazZMLPwajhGLFipBbmimCfoQdCCwZEgrK5MLysyiM4hAaDAPeGb3DKWeGWtQxB1hW2bgaG",
  "key17": "4v43VvfyGPgjhnUfjT3pEza2ytm3JaQdyRkvbGHBBxWsYMrjPbedcCjf8gbA6WimqHUai6s11bQrFC9K93T3Suo9",
  "key18": "4rT7PEkyNV9FxVZH8SY3rVnCPgdCC5uHVMF8gNW2yCF7461jHnD4KNvwrt5UBCevcaDz67StzzehWNFQucuSQWat",
  "key19": "4qT4oYuuDtDXH3fxzxP55F3bALxK9y3aPLDfDrqVZ2PddzNzZaWxMJMi7NFQg4DFr1gJsHnVcy4W8MNX4NsGAWm5",
  "key20": "5cGjpruF5BFZEM4BYN69tBtjDx6hXSEfJsWeGg8xhQfDNM1KSw2EA9vNSeCHugmt7DwN3GhrKKA7DmrajgN19K5L",
  "key21": "2uUDYBWEXyGuE7nxMYxgQjMntwyeTytuuaY9fhnXW1r1Rmjm5REZjnBzafdtvAq3QKHDyhvBTPSHf8zH5euK4ZpG",
  "key22": "39v56z6YRaqm7zz77k5gouZq8BUgUPXYTaNcdfsSmuBcH3CHxhxbV53ZfvNEM5Bn36pwNgh6y9P1FAcDu5hpYZtg",
  "key23": "PKiyQNEcB7BoV48XW3qksvCgUDATYdkERSEFPfG8fo7g55dxwXHEVA52AhLN7ncfJgfdK4xibcife9UBGz6a296",
  "key24": "49QduRzxR3ZLVQ8GMMReNGsSNbKcufyay4w9rmSrurbAJRJcu6x7Fc5DSQiJ1dWzuYjLp4aQttBYsRQyYSU1cKtL",
  "key25": "2Su1eM3KyjNcMJz1a8UUAiBVS4bUNX9o29EfKzTnPErcTgSXdXvDHoHzMdKoBYqKqHh7KXzjdvvY7Xy6ayKbfDCm",
  "key26": "66rSJCxA3xYWFmbjK6yVFnZhc5viEgNRtyFwq3vBANHgTU9WFwjidPo1j3eX8aqEmh1TWEiZugcuqwUhDPQ2iJR4",
  "key27": "5Lenr2s2Wc9TTZvG4t418s1MbZn27GX1ovxr9HyheQz3FiPuytob3ceknACuFbtGZb9tpGQsYU2GXtsvYV4jF3g3",
  "key28": "54dbpuZWTbmeXwLFc4aJRSZWjo5Ze2SwXUowH9vZJFmVxuDa2FCpht92j3Z1meNpeE8KptQAbbmtqRZvqpeDtDE8",
  "key29": "4DZSpWoQqiQdDPo1qkWvGnTWoQ1Ykzj4dFyK3ahY5z7DAWgRFbZ7LoxvaVDXZiWXbXSyD6TBJuiDhqdTBK67bXrH",
  "key30": "jxLy1YcnGvjAbEpmJ3ginpRCfpYqjC36MLetwAkfn1D64Qd43eoz4nchXLwJUTCoQCUnUSuaTWKrCBqfahsPq4y",
  "key31": "5YJa4RKSh1MRYP94F541qjvg6ZtzFyGELky6hSZvvtodxc8yhk2vAmpn9ZacZQGB1w7Xrg8E8wPjUT9UqC3B8ykv"
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
