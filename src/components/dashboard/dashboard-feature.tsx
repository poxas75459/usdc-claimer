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
    "2ZYUR1hL76gH57jsCDWPguMvPsoxS6FWHWQG84gJCU34uPPGiKqCXsoKJeWpG4g9KXm3wmanqi1G2EfJaeghynmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57YtfpQRtrx2Xk7CZeCCdbTkSGvve33Z71DJ1wBYkknuqejcPc9tboDnaxXaUH2KB3knMCeLiy8fjXqbf3tecYMe",
  "key1": "5RxBkbcUKMHLF7PoXqwV1MDQ2nqGLRmYorSKiLow9urY21Etn2MYKgXGKYHgZUmS3i8eb86SfbNHBgEQyJuJ6PR3",
  "key2": "4jFkHh7uST8rG5M1iLnVHQhcpiDiWK9z5QUHDgEn3EKiXVJtgcMDiTxyHSKZT7SsfNNiAe2qQNjdJnHh8TwU4jn7",
  "key3": "4woqvF3PyVudg4Efz417uUvuycmCARbXGnxMXab7uEoXBiVGS7k2d8yjFbx6EgUKs41ago7fyxKhdmNDkPnDUczg",
  "key4": "3U8jvrYEAkXQC6iJnWmqWJEYLsRvP1PWamU5w1FfM4ZxeF4PjpU8FZP89yub2T92ebXNNH58uCe3Xb2P7B59TniB",
  "key5": "nc4kQsxnzU34qF4at8hScTKKwA2yihw5SPKiAt3c8spydSFRdvEZWDcnjp4P5i9RH6e7PXArSLd6ckpuNhb8PUG",
  "key6": "4utifZvAj2Dc4S6ZtNJ31iScuGXhusgSd8XkEhck9JjEuCtEhycPbQwtdJm8B2jaAKQfName9uzNZ4uDFbsVsmTW",
  "key7": "23E5vmabhi94eWhzLnbQusUXi94QXUvfemBGmMunZDbWkRf7hECbU7fdpRvtyoKeoiYtSrp3vv4FKnNgF8wL1t4A",
  "key8": "kaY63e22rxWnnByFKZQaH92VJYcG4BeRfBL1YKjr3TPn8Q22WcCdqt3FfNo3eGzFvQepC5AVtEoTdEnyajuMZZb",
  "key9": "wY1R43NHsosYXLsXVshjZDsSjfF3wxJX6f34LvuhVftEEuQcyRXaA4UDaYbRF7VHeYngvs9t6ymU683uzezjjhn",
  "key10": "2Rknu9ZNAzK2m4twP1f7ZneUy6xEqJPp98XVJ9SbLRdsosaCqBjUesrbKmJpaggxf6MiuYviw7ZRFB28V27CaNtA",
  "key11": "2gBPc9DHWhMTTqRLzqt2CGRgT7ykjE2xUEPv5nKCDVvUq97Nck9r3ufCiQWorZ8QPDkXq1FpHfUD6fGKEyVBxmxY",
  "key12": "uwAtzy7BtK2UEECC4EBWQh9X7M963DTMLuiczfuJExkVFjARYRddovs1ouNgsBk15uwpRYtMJ1Td1CmXLYKypDs",
  "key13": "2tofAYr6djrzL57sCDVPWu5AtRhAYdnk7sW63WGkRpBNsZKarRhLaxr8FbUvHQKMBAhaV9v1fcbR5AEc2qNz89e8",
  "key14": "DcFfZbXFFmMMgVkzjFbzfmMkqFJk6KoCnufzL9myAMNXYk3czkQDL1uyNtGKzpv2mYvFo3P59Rb9nsW6GZsGBJG",
  "key15": "4KjMmePoGDgGy8v6nX5nbwkBghQvDTvVVTJN14LdbJ6hcpts1VEuLcZByeoz6YZ2k4w16coP2BVM3ZPfJ3ucdPGF",
  "key16": "4137K1JvJA57XrKgmFcrbQ6jBbourR6g2ZoWPoYgcvVzo7EC7WuYWFhzeBkaZD5vBmei9FAUGAYJPK6i4NyGqo1p",
  "key17": "2ktv9G92mr1JuiMPM3nMz7Hm1boegQ1HcQuLALZWQDdKQVsTQLeQamcWJPC2xPj5MGhSW9kKHxX4rCp2HhZandBP",
  "key18": "dQYAxiLWQTSAkqQciux1BvwoPCoSjjJfbNtfjMkqDVuwdMgpMrFfiKQt7HMd5vFrxsyzvh37QytekE2Ld5NT24u",
  "key19": "EAVxiUmK5Vk99quH3H3XKY3RXMSy5hHALKZqmDfTeEPchPbJsTtrZSB2gRNwPcdn7Zyd2HSnhjUZkGRMW8KToCx",
  "key20": "3F5XBA1ufwkRWXKFNo5gP5UrNRZ92ByFLFRz8z2MiebHkjXk8zSNL9xcdLgvaDQY28FpDn56WP9QB1ZqGVmbXcGU",
  "key21": "5z7v5yjQyDcJtWXCC3Z4v7D6DSGhZ6cvpUaFbCbmn27QUrbXDDijWN1nN5DRqS5aj2hBQtkq3hBXZodYxShXDGiM",
  "key22": "4rhgoTgQ2LR7Jy7ZQJR9FJYCu1dspsahnpfTrmxB761Kvyc6Xf7xyrunVXs7QeYmckhXNLHswLn6xRvGUYbjXui4",
  "key23": "63ZVtFLFgMXyqawNo7awmMNVXE9LP6K7ikSGgEAiPBUHrxQ27GvMz14qXLiXL5n5G5FQ2gF3KRLZbTPKj6Mny9jr",
  "key24": "4tsr5BUU9gj7GDohzUEByo1sQ4DpoDv8to55mXTfRVgZfrp24AXQN2H1224oYVQ1tcgKW2h9CS3cpXvDLftA4vKs",
  "key25": "L7UkjF3n86o87nxV4Em3MtANxUGYTziK14k3X5ZKanHCyn6u3EVzGpLb8qkg5boMKEMvLmE6fTR17gxK2SDgbnS",
  "key26": "2pbXWv1r3xZrzDqqMwpJWSSv1fnWziJbJyyhR1Ph8gWWbtwM3CKTHWp9kwDzzX7sdRw2eVrRFxuoxvgH5QQTRksJ",
  "key27": "5iYUa9zpymURNSp9XNWzFvC4U4DXs6Z4etCfDBkSuiAqBx3a26sa5TqMawFV8zXyTSyMKh9PzNCncsVQ6weaGZxw",
  "key28": "3qKg265c2TokMgy3NrhJ2DQM847DhZQRJ3sXivaohi2LesiN1GvRnfxUirSCSLKvD7jpU5h5vCXK7McoVJJWRKMq",
  "key29": "46jU2aMFomjajJ6rjZXTEpBW7uDLq1hWkJeKATdh7jiicqJJKs1W86obBFU3w5CJvHjLpc562rgG8aGCsxjfN9WV",
  "key30": "4y9GVLt53FfkdFjk2NjfJiL1asb3CVUvVF881eeWhCGfgVLEqhuDqp2GBCjrdR3ftC3in41A1Zb2gB8dDQZx3jYv",
  "key31": "sh36KLY1iqfCyJuqUq4JLTX84B7svdji6eh4zZ7iGRTEeqNoQQC3CYF7fRM8NqbPAaYDUbMWjz43vuSaUApK1Sh",
  "key32": "2sYTwH7CQxMbdU9cVBknBKpmHQj6WUQXdLhMFPXEWrFawVw4yWHmEBiARXku2qzpn4JNYFMkqr7ZiUQoY3xwgmCY",
  "key33": "2wTLJtx5gHX8gDuNWFfv5sZRAPntpMebCmkeM2oSELQHqsQYQfoFKLKtXtxzN5Mf25QTs1qAsmY6mopdBhQtRQZt",
  "key34": "2TucdHSrxVSeb9yR25Awska4pds7Cvt4PvUrGcNYq2qfb6bCEH7z19httHVAssQEfBs3TLhJaWmST2BEAnPmCKoC",
  "key35": "2FuKMsakdcnZGDxqKMFMfBCUpBmsFGFEXVbYaKApTcUKLj6xw9aqsLU7KAytd42zoR4xd9jYsciTtuzJe5qND6fY",
  "key36": "5VC2FCktkBnPNPZw6bMkJPEkqLF5zCNiw3iioJRmhVaHrY6kxyo7sFcSz89MVYN1SPywykREkLM9nFqMHiYW5PsH",
  "key37": "4JAav2zVujzzXHsT2rT5HJZvbnvXjD3yhgA53WMCVY4GzUKc8v7nYKCQxzdeWtXpZ678QyJ8U1k45crSt1zEotKJ",
  "key38": "JqWCqfV6hL2g5tTeeqHYm8Qf9pqnbHpZfQa6uMQAUw2X2tMSpG4p3mVmR1W7uYBpa4iGDFkGfi72YwuSiC9gttY",
  "key39": "945uxwA7tnhPYqso6MhLFVvaZZutcr9J8EfSTUdHet455jfiYyeYptBUbruuycsszBN9V6B7mP5mhTPykVPmu4q",
  "key40": "3zJoBxz6SrDcUcJtNWMFtcUvRpXgfKpnPnM89wbe731Q94njkGL7h82Uiwcs7Dd5c4yR29reFXEz4rRpyjdVMaso",
  "key41": "Bc7pRsTbsAvbtUWo5qdoM5arKotP7tgw6g9vV6ebaM6idFSeCKXnHgXCGpHANYGFgZCMBjiSReWT1Ph41HfL53k",
  "key42": "5Gx1GF5PmrDPBPtHvW9kvyXabDYCXdzs6Tf6U4t37gPrX4teRWfmwcWktYURZecSAd68ssKAfswCfiZ2R7u4cXBn",
  "key43": "3pSGNJtmh2Bk58zhCvbS35WaQhZ1unFqMf5wwoKooFfQJc6XzETpmg6KbhtFjBGbAPcVj4fDTJp6buDJmrjTC1o8",
  "key44": "5T4e6GAQ1pEdioCbPvxwrEdNfCjxLFByEdskfQ3aBQXqDa6ZPyC4zyxkKMBuxRn5q7xkPPkjxiRWFeQ8Xjeju61y"
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
