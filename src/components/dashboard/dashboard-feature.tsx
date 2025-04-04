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
    "UEy1tE5wyTptQdnBYTwqFC1pWNRPyrJbFZcYqWfrrfcYfZz2hiuxyduHGF7dn77VbTD334ATQ3ZJ6XXuetfzR6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V2sakPR9749AeqbYy6fK1GxDBojo67fS5M4bZjvA1dSmixjcj7jqANoBdAjqyNZWA4L7uGjkf8KYv1EQfmVeGbz",
  "key1": "2zhucdvCEFfvVXykL6U9XGKtYjtaYWsugjrcwZ6c2XCkNbSh1KwnUfYWc6eiMwxaRnJUcG8mqdonHCxmSD5Z3hGn",
  "key2": "2iG2YNRFSWyMA5N8ETER4hNuTsjebGJ7kBtipWx32bJFnDeBWTWrAtDsDUGGXVT9hQrmSyKuLATiYeBT8wrPk3jW",
  "key3": "KgZC6fufXcmMZx1b9wHzFdxXaNUny2HMMY9qozyS6WaQKQHpi5fahFEYgpQooSjrNhyQhBhihnTmgvy4VxjLzbC",
  "key4": "3ZV34s8D5q8CByoQM8CHqcYTb1U1p8Ed7qaC4K1JxriUWX9nXuq1iodHbeLojJbDfFszxHtF6o8C5poeaR2twMQL",
  "key5": "2QMjUuSrszFrb6q1gffiReSPFJTDmsfFdp84iUwLy7EphpHWTmwe1Z4KFCwJx9gAfdTG7EsW4HCJsoLTDJ1dKajc",
  "key6": "5bGSU6kkaEJwT3sSZLB11nMHQkN1bh1QvyJk8kcfFd5K4WZSkGEzUWGR5u1dDqwz3fbGaEFsVLUmqgLaPnpRPNyg",
  "key7": "2hMQH7R8QUXEKAj5cm6GCGG4jA4duH5AMzxNCS2vAe5pDvinvrTsteoEDttbtqY31YKXWShmtJ2YeZFjEjEH82Ju",
  "key8": "2Zbm59zX9ndXktfC6ni3QXcunDd5PeMbTxn9TKuzFUtZB9RjbQoHbQixbM6RMJ42phQvkGk4qJs6HHqEoF1U85NU",
  "key9": "5hvCdqxMhwxrkeYWoc6SX3mhtD4rJhiuoCgovHADXxgLurMbMUuePfZgJYE9b83NAz1jamtktdVoK9NYAKR2a43Q",
  "key10": "33kqL18ounk6n2eZLaMaq8tv3vQe5gM6ZTTRmUYVbtZmQtnh3W2aoTSmgSeFxFvd8u8vuqSqDXwdsZijRCGNawLd",
  "key11": "4cSDXQjHsNAtGDxYM53tmVx3xFBiBVdMYMwTAZdLh5UeB3kJkWDqPJZ5zBgds9agnVxxgDCSDp6doaqeYPE9unhW",
  "key12": "sZLcbUD77G35geFPBZoyVxmKV3DavpWstmSr5boDPxErWiifwL2HrJz7UFkJPWyvhh5TPE2xjK4sizByKWn2yLw",
  "key13": "5KqmTKRSsYrzdsScApeQRbFDAo3tGKk54TfBq6CEqsLwJGq31P8r1d8HrbcUaRoL6g3BSdTLsDpQfLJXcjJowzgz",
  "key14": "2ichzKH5RxuPzTG723gtXHi4LFe8tnd9MqVA1tampGQwchCaxWkVTpDUdtDqDdSFxrHL9JpGdiFzcoCAJ91QGALm",
  "key15": "25RpZVvX9F52mw9geXfccAeRrxUugrQR6zwDRjs9XuMwHKGFA7dbvvTKoLpvUu4kEmzWurDmWSZGLcm6ThoXYCWh",
  "key16": "rQjzRe7HFHF4ro6mygzhNboM9a4Wfj1jYXPXTT668Hgcb8wKPwwpitGNXTo8ZN1rcmwtzPGjCoQ8aRXMPEsAMC1",
  "key17": "5FxY5xjxATsa4kwSXX833iSi7C2UcdsrtfciWch7VMLHh2q38YZDgCSB8aQgStzKm8aTKscEeW1Jhr3wYRq5rzup",
  "key18": "eVHBsRub8GgrFC6rZJKRPg63FTkfbWYrfMa3VGYfSfQs8b9Cg1mkKYzXGUVJhFG3275YLK3uqHf6P4HaAj5jcfg",
  "key19": "4WDzWYuofXwKvXn9PUKpLY8GTVWje4usXFrDZ7VLC4jScAcqkitQF31aoAj7T2g5uZNaSC4kP92Hk4YiaXxA71bC",
  "key20": "3EmdPY1ARhnHTQRv6XmRSEr6XQTKCg1Km3AUNabuQZRaq8iVoxA6GhN2ycLEW5M3fs1whJMtmePuptiDA2ksSKwz",
  "key21": "27cJ8b8Mgkm7jAiGdkPgeLApzQRfiJK7HFaFTBvaeheSoCwdR1Ty9HxKHRGPD5jCCf1GfQcMySCuR7qsinf6BqyJ",
  "key22": "3rLDUjD5ukCDKs48bxfDQ4nZm3Y6MTqYXvTcnuXLtTMFMqYBWp8Jxij7sLJ6Z3DvVyRz6wRmt8ca4NGeGfJ3LNGg",
  "key23": "33h2gmYJk2jBHeJwhCtha8iYokhQgDnQ82qGgMcuZu5GF54oxa3MaMPBeCQNCCRMQwpbfnFm1eVxRQuANLwRercS",
  "key24": "3texo1AG9pn1NskXHiUyGmkQ8oimAcV4dUyiVdQ6qyCKiEDbYEYGAyryKDWdMqZqQeH9wYhMZg4iAM8vUBLr8Mds",
  "key25": "5Lkus5J7qmziVhs88x8YJ4KfVwxhCWXdZHopUzqLMa2nW3BPbb85csLTATX18SiapFDf15wudFuR1J2VNU76PhuC",
  "key26": "23dFdz9Ehe6pEjzSJNuVxSJFhRBmHAgiGN9kbfWiMv8ozoSVTKtjExWiUrJ5uBjr4xUMKE2GSAq49HijFMRoG9Kx",
  "key27": "3MGHnrnKjrnTi8nd3AfkcqFo7MC2AyFQSJLVzJBhMEc5fwrAPYvhcDz6ubfC7CmpHseD4CifM8F3pmLhZMEJXjrz",
  "key28": "5WdH44emR6jw7d3TM4xuP9z1Yay7V4tDyRCzK5XdxqvVKdh4iPsSfxmxB2mSUjJm52FBde62ksUDhKPVYcu2mHo5",
  "key29": "3LrHhRYdFyMExKXe5r8ZV6hHmvTNzqdg89n72kDy5vjpg6HKPH4t9peVX9yk19gRFiM3svJctfZSuUyeDUq2ZeoK",
  "key30": "1YRFksadiWqwo8yNxzjFH9QkTUsiaihXDqPJ6GxKoqLtzSL3otwLzkaUuoSCrTiiXyWU6La6WVzCy5FSdcDwKMU",
  "key31": "59LXAEn4Dvmcyr6VSCKoqUSSzVf3XxbowiKhn3CkM55X6a7jEuhij7XAnLCKPHuzT3wfxYDUX27wfTEa2YbbZdPp",
  "key32": "3CEq72yLjfyTVMeqi4H6hCeDLukmc7us5g99SW4vzGRyF5mpLMb46JaQqxeLpWo72kYAfVyo2hZ1HHsbBfBcnqkt",
  "key33": "RQVZnnkMcsQLoN6WyLQYcBXigHwEsXofPMpHGC6r3pL8WW1bn4anBZzSHkrV3Bip3iQS1JYWVBeqyXFQGTEPFiB",
  "key34": "4DWcEwAYT2ifa3YCNTZSjYd7X8MqtyJ1YTwykvfkBuHFTBVoaYAvFEkVZKrSdZ93XxQFAtaWr26umKKSqjPiABaC",
  "key35": "5kZ9zXNPdNRMxehpKjC3V53bmsyhY7rA3pAVkDwEUJnzqVJm82KkHQEJ5MoWGMkoYFT4xL4AycmEJ6D6UMVmYJo9"
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
