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
    "4uyJUYyK4S96byVNQ9QCdkABQ1vnmWDAcxHw8rCGNaxtu3wtb9k4RDjXpTfs7hGUqH8qcPGuXTCBTAPwxjXrKPL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67PyLu5WtPaqBxy9rVbUp94af72CQS1FJN8d2CEKfbyGQhwnAE5PurXnZvysQcJBzQRK6XcNBMfDJGqhEJPXffJn",
  "key1": "3cWyZNmf52qP5QcU6WX1X8oZqVGXuHVLndmgmQC3VKTeeFHCnEoTViZatXNM47cEsshQcga9U7fRqqQxq3CNKiP4",
  "key2": "28g6vf2ukjxEpq3MHuh7v6zU4iHbjVEWmMZqJaTo9ckvcpGmdPN8ohpkDJ5vEk3ovDYum66voGy4Gtg22WcKrzVn",
  "key3": "4j6dibbZ8TtEuLnfoAFzNePAFPWcyK5kSPeV1yDXAGd7g2ewMmUzi8LHcxHsz15VjJKKW7YaEE4uj3Nbzs4Zfdqf",
  "key4": "5hgXQASbEcHKFudiR47D8br6kjVXKQ3mFqMoGHjMedEPfM95dWGgRcbh3DBEcBCuCBozFZwdwxb6BnbBeouN6aYQ",
  "key5": "28xBo4Kp5t464YGA79qx9iSfiNgcKq9XQ4A6CL3Xot1aVNZWhV2SBDXZq7kCGdUgnQXem1isYd8ugt43XsWW1ufs",
  "key6": "2JvNSG2WZezrkt6q2ttUNhTDXxpVs82HjY6aXPTFom4HPCEZUfmgX5DHf9n37EZdSNbgvo4SLtYqJHFbi1fA5Shf",
  "key7": "SzKBYEPJmJdbHPcK1LqeA9Hj9i5zSVcmVykJEeKVVKJhqKg56iYFFbo7i3hgRB8WGUbsjGQjU1CtR4wMG59ea5k",
  "key8": "4hrQjJckYyEvKwRzHWDJH2RpXHUhJJyLLGuKui2Z5QuHdLWD6JX5nehZeLhYp3MUKYBi23bPHXpEJzoiBqTrFXYB",
  "key9": "22GA9ktvFd27ecvCrBo8ZU21muxyxm6LtFYUZp9r9MtuGpEMTmb5p6Gh1SKtZvAKTcv6TPgMegbGVtnbec9dnsz2",
  "key10": "2sHGGtA6v9iNCWaj4M7TqqnDY3QaK2WTBNdvjZjNoYJkYqb5dxGfY5RehWUu6CwbAcg4SLMKa1B1fbhM5ybj9b2h",
  "key11": "5dWmm3B8peSrAyf7huYR36RzK68ane63od9anwZpGJL78AnV5jzwoenaHcPZFqhN4mGSkusKZH8xMxphNmdUCBJ7",
  "key12": "4uGH2VaVg9bQMXPVspWweqqgJKWwzfyy7S7eVA3YQ8VMRaTgZ4VAGc2r3oLBZz51cRjrqSCMVJ14AahzVnXHaV7J",
  "key13": "36ZpaNPR5wj7k4KJM6pBKX8rnb1kDg3jxs4UtZHcMV4jw5daTkCK3pk1F2AbcydzJpVcbkZYwxz4Q5YPZ5M773cZ",
  "key14": "3xeUMMmxKYJiDKtW7k8rSxtmzRX9R8qSD9NSkmcVGt2i4pQEFyqBZy8LWVRkNpNXibPMS4pVtTi2uRDVGufYQdFg",
  "key15": "3cZpX1DxVVHV5uTB4bYBSJHo5oBJ9t3eLTwMFbagwG44xyzeoLJQ5p3a6jVMe9vuUkCrx2ot7LozAxsaVqPH3mSG",
  "key16": "4LiGoGtH2AwMF48TDkxeWT6PFH2PLrJdN9wPcaumjeFrtUwQoAQuTYVoZhje8AVu63Qquv6sGctzFDdnPvnD98Q2",
  "key17": "3jAbKKxDXJzMgMZQd3WH2TWM6yk3bBh3nFZu2d3sFsPJzUVwuG6TE5EcRzgurrLHUQP5CqTDNAcNSPuWFrVrDNVo",
  "key18": "2sekoCzuALDJTG7abrBaMv6hcVWuw1ks2gwFok2hAQddezdAMbLvDdRHqRJG6UuT9NZwEDDoWNKusxvSBFa71Xuq",
  "key19": "4dyHbDujbd6e69bWHWY16GKLaibikxw97kUbzds5vCCUGFc7RbXKxMQindibYgSX45JcFFnzYFaU1XqDYsNZcfoL",
  "key20": "4jrqyCnXGwdBMEk4Lr8Le9axGY4mx7haPgaaKvhYwxNzNJu3HuFDfaRTWdm62doLth7HNQZByYhsFcjSBGprTSGx",
  "key21": "63y1LDXHzKYgA4fTiHQHrBib9ACNFB9CXdDVG9nFDnMACh8iPcnYB4chDPGXtktZHPhYANqdtKxsEP4y6dLqJg8D",
  "key22": "3yQ4mHjqQdMYPRkXfdNWzJPqXooobjTgzk65aWRNhauYjJwqgvjs5y38x9VogxaXmJHfxJwuf9cGowMLz6rdJzuM",
  "key23": "62SvxzqHehz6VSX76EurD2B2DcrK4nhA6uo8KA1khKL1xEbicYnBkHQM3LVkbhwhwpntcqrjZR7NnWsEMMcPsPtt",
  "key24": "4NjaQT8QARA6CnQvLH4HLoSGuD4cLo7sM5Yfz1sXdCN7BAaZuThnCp4jdi6FjoxUAecH7XHpGbuLtnAKZZ7kwFp",
  "key25": "qLgzEF2ZsfFBR73a58AqovJYvyFNsettnzLXrRuiBdfD2MuWEGW5JhJ4jHpi1vyR1f6q4NuFtBKkZK5SG2M1qHX",
  "key26": "63v4xNwMztQFJcbgjpjKW6UGLTgtPiBMrUbkc38j9gQw2caiVryLDKC43GhMoedKZQaJthfVxdS31LgHotEtMrj",
  "key27": "2ECLLWXo3n8q6JenuBSnQGo7ieaet4a18kt7PMuVNvEfFGJX9v9hfHPDRAo1BkNECQzNH3ZoAuyGkjb8KLoLBnox",
  "key28": "3EX3W7FkR8ZAuWpkHPBzgaZuubJjSfqep2iTQqvDqMvXrnyS5q2E2cmSABkotBhCsBzA6QJiByvwHmcD3F4buyT4",
  "key29": "6Fs4DyyKCjpPeEdXSn7h54NDUFzXHBuvyQLM2Rq7rMzryZf7Lwu33MR9zzPbw6mPNfdzLyFAumPEHfewhQCQbqP",
  "key30": "42GhCyijEPs6zZohuu7xRj1qCmaR3Lj8nNAWE9f8gMDFZo2YiLSEEbKz2C6EMZDxHaYCExXRNHn2jNa4iAUz2ymJ",
  "key31": "62Np1WWdApqvenFoQkhxEySxws2936JhTpbRWdE127wjkG9og5Ljek5jQ6CfSLSdGUayDmSH8V1bLPv2LZxqMZaS"
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
