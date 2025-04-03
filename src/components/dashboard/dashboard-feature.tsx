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
    "2sgQe9FEe6mHuRYQRSg4ZMHBcU2zg712vmbTXh9tAtzmTK8SFrqJmANP3qSreRdEXYWESkkTXeFmZTxKPo4rvVn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3txtJGRDS6GKw7p92JszwMMAGQxzTJwpGuEgAjxeRvBCCJhcyu8CK6FTQo9U88S3JDvUXT4NC2HyAKxPEhEQikjQ",
  "key1": "4oiCQaBAHMWdZDYQSVgtnd6Nfpipp7CBCkCmp8L1sMTMa5pC5wSMDCkCczo11zuso4BD2h9Sc4MEUYU2Dcv4cRuG",
  "key2": "4o2fcvDt71sA6H1L7dgjVH59TTf33kTg4uwFhZr37XmyByUCe7tj4gJBBjAMXy55CvShtKhg9QnjAf3X4nKcKV8M",
  "key3": "3gM9SyabMZhqjsVwpAnHh2D5GbY9Pip5hsNKCoEy8khpvvhy54qjeEEyqDmxtTfEGFEEYFjXHk4sX7DVHLdmFzq8",
  "key4": "49KmWt9DTXtvf99hSVipgMayqSSDoK7J6nAV19wWEqyWUENPxEmr8qgvRXWvmTtutZGdGn1e5SwU1swZS14bd1Bb",
  "key5": "yxDAxtusNAC5mZAGWYk9TYXbG4RXUu46s7ET54VKZSd1X2nyRWoCeun3N2Sc5R19JkDbNXfZsme3YVcpoma7uBR",
  "key6": "3CmTj7BVyMFHFt9sm27miaGTtEygrGEDEmpJEhNGd8e3VEYSuWk4bczDJGfeUvmxqpA7WdUek6Tf6aEMSL5vK1XN",
  "key7": "4k9uy7mJKHSPVJYS5g2ZFS5JkuWvCUPTDodvnerjPMuJjzKYNyTFFHjQf2ePwkJGkE8WAxekQuaBzCDfakYtpFMd",
  "key8": "47ztBgXJEtVhpbb7msGSzwnFg4VujRsLoSEzJJwrjeunBBJCJVm8cc8jsZiTNdUwR1iLTbHi1EvjGeyqYFtdwNCy",
  "key9": "3BjbJA6KCRRSkuLkPvxLzKvRyduavjtSd6WL6f8LSN91x57PA3RtwmgAiJPrxp9tCxQw9s6Fe9bQWcGUgn6mu1MZ",
  "key10": "5uB9G8JPz6Y57hVkHg2Hnx8WyXUzW2C6Pnbca3V274N7QMno25iEQ4C2nNWYibVDZXVBuUsPqCraUhVJJD6W16jc",
  "key11": "2JjM9M4bkX9qroPX8PEF86FJNXZeHCe9EX1efGgNnQK6uRYyQohWBCT1dECjT6FcECFB4SjtMWp9JxeFd9C781yq",
  "key12": "wcWSyMrpG4ffRBsh7AaAXhwgBxkPZbhzG9snxbKnPtoUUyq94zHCzvGjkNzhEhJPbDmxcFPFQwbRgxneMfn5z25",
  "key13": "65813CRiYqFYxvrENAE6vsjDJ8Gck9buADnfKmFYLoMGwugMMQxdM5qun85ZDVRLXkoHAcMSmpbNqxrg2sw5zccq",
  "key14": "4tHzHGUwQugWdzecSQkYPfNj3bUxSdyJ6RvQN2S6ECdnNzYUvVvx7ru63hsY5cuUMpxvbSTPTewDeTwpP1nhSHGC",
  "key15": "675GZx8YsYFNRrs2u5c5D134njjmnsNbqn2EUNPaydziK4vYvwPjuwmx3ZA8FirH85zJ8rVaXm5QRzVtLikNS6Pj",
  "key16": "tQ4hAGXK5JEiKKgfi7XL4CZBLr3EWZr92dMyntnXSBtzUcTxQctt2yc8Zda8JGDuxG4Zjwunz8hKGpzQohRUxyS",
  "key17": "HDWJRB7yRzzAZna7fE4vnepSJWXwToU8YaqQxiNaHtjsvKrhaUBSq9tA3LGgc2StuPgfKEQD9v5bRTjLfq9CwHP",
  "key18": "3nmU1JeXeR6rzQQi8pPUx9gx2E9sFT3oqr7srqXqVuPwFUUMMgDtc536dGYiskub2HpKwxTyqJafbRXkuh1Wv2J5",
  "key19": "4gzfWF4NYG4ozjYFYnrQPEAM3n46iAH5FbpUrrUQUhENwrco1jVqJcPfaJ67yT1AEEThWzZW4LBadEPHeHuVxmQE",
  "key20": "49o37GnZTzRBw155Y8i2GhKXxjuX9J6LGR5dzqepwhSiUggk3fY4ACfmdiLVubpwVqL5NG63ZVs4zMiGFLft2Drr",
  "key21": "5wpbd9FEpUokZsurG9HsmZJv6SA6fVHY1D7TtQBrDii2GzDfM2hqi52r4eAvTzZN9GZ8Vy8RDUmcqq4NULhbrbEg",
  "key22": "3yxCz8YBP944zsiTgMCHr6BYnsiqYYRWQjQmATPRCYgKUZq8htK8J6bNHeAs8g3FWwXdBhmSHap2EBbtjB2HzcqQ",
  "key23": "4Wuo6qY35sDuW9ThdRT6Q6B1bnLWkNL81Rx4aL447yzoBdy31iJKpW6kZxBacemK5r6f9gUXfE3NKib2UnJNDmqC",
  "key24": "p1V6awCBffm7WtQmYUzaKYf6KLSNmCSPUDWkhg9SbLyAPuEiegH6TgGLR81WghitmPopUbFP8rZNCovyeUMP33X",
  "key25": "hcq8xF8kwXQEUd8M2z9kZsKz5KpTUcSaPstcR2BnC9kCcPtTPqT43uFC9rE9Y665AF85RTFHjgjZYeRCnoZjfwY",
  "key26": "4axW1m7o57MKfZs45G6YNStzi8BpSM3X2xR1SB7ToUaspK7pXJg37jiARsbSDu4GB3mdQcx4SP4sxhx8Y2LaJHFX",
  "key27": "2qcGtkPsFEDNfdjvefapthxyyPeebBfqyf7hsYVLbdfcmt3GwaxQDQqgziawZqv8tkoJ7AcMBYJwZjKc1FBecsFL",
  "key28": "3VhJfdX4FZuH99gzFGhihBMSzDEiV7yD6zLqC1QZ4V6Rqk6kmTAw24LBqPjb7SDv9cm4wcpDeRKRQXSWqdVSTEbm",
  "key29": "5aNaT1wHuSK5ZfojmLvNwUipjnB6n8a2HA1SDSGrXxwrizGxGd5RLgnG2CbtE4XGA5gNLUNbvMCvVvVbHhhh9o6T",
  "key30": "3EAbYa6abhd97hg95Urv4D9THFdDmanqxBPSL9b4DsECcrqfb17rotdFsy9KUwEdusWBeFJPDryQAUvzHao87EzP"
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
