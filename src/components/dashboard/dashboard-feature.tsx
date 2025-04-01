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
    "5Viuv1fF1zktuuvMGiGpAgRYRtM4XSxsjVBqScH84NpHigDYRgKb9u3iP4a1N8KXPbPWindFaduk4LXuA8tyPDb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o9YTJrpyZ276eZbPGvGfFqUqZB33iNvUx373r8CyLXsb4PBmRdU3dfSfFHgzKTtZLfuy1jCXMRzqVwXfkApxzfa",
  "key1": "5bKqyGNwwQt19vCQ7EfgPo8DfxVVmoW3xv49JjZbDevNVRMUuSmLQykAwMFqScMzV6dEvnTh2fQ3qRHBdtrdSuZM",
  "key2": "KgcfWE9YepZ99pbKwNyWeffpLNUwNNrSLrZB7ceXSiR5kxay9M7ttY6dsTaxW8AWCwdRTsGpn7bScB27gHH4rYz",
  "key3": "B2Q8ZUj4bukmqoqngtir4LfVAyxs9Wqw3qaYg1ktEf6JXYT6Jfg7v1e5JY1kyWxSp72ZXsGxH3HpsFEmH5D4rzk",
  "key4": "35oFi4UmhB5Q71HtTJ7k2QTiL6xuNybA15i7AG8rhJ6VYi5NWJ9JQXyaqjeFeKKV1obz72DX7gJELMDfNYpvoAC6",
  "key5": "a36dLBakQQ95he1cAKDPs48ypmJbQRx1rqYJ9MxJUaF55fss5rf7Gpqx3xoykwwAgkAFrkqJUwfp3bbxkirZoJq",
  "key6": "4gJqACWosp2PeRxReGc1X2RcaGAj3xd5ZZhUnzBAEDM3VxLDR9JQr9cHvDiUGhc8jnKuukQvaUfTsoy2tjACB3mm",
  "key7": "5WTtirZDZ9s4ZY1eeCRYv42Qe7bpc66H7cpAzRU2kohcs2pgvFqHBVvcb67QwGfYwgFNaNLAv1qW6x6mv6sKHwVV",
  "key8": "ZUNcZA9Hge7XT2zWoMpQxFkBKBrcudGSLLw8AnCtirDswbM8b3e1xafpNgDdSvQYpESzvZxx2qUxeyqmw3R84mZ",
  "key9": "48Sy4eXxAFDMZiEp7ncmZQrssaNUEYbwHfKKTV7zvA8WnRsWNjikVq4Ef5s2c6UBb6dKfKKCam4aRvgdnvHtewNJ",
  "key10": "5bYfnd5dW1e2eEPLxXmSRRZGaGzCJy5CodMyuaPRTYhDEWHwrPZZnWpaVujbFWTzRaHd5A31tRhvLUqfLTHiaYsf",
  "key11": "5zbG8DAnjbHHYqchkr56MtTQogi32FikoSAaRSW6juwbWE8rLp4YPB1g6nWwKAWMVa7GSyEuCTbQzPtNzd8QKtpf",
  "key12": "wDdTHFXYLFyYTgY1gk24dfadch7zVVgX5z4YssYH5wL6phbCYabE7PsXjQ13FuT27eWegwnBEWXC7XFF53ekzUX",
  "key13": "55kBc5P85tCVzv2idzifWauQ8PU639LDzheKgRccLvp6WU2dPZ3XkUzyUAqjj2Q8Vb5mijtNCQTBSni8wzunMV7f",
  "key14": "2Vn3r3LcCttpuQfmAtau4wvGyVGgyVAfuAWHQWaYkDqPe69qNZkNmNL6fHsnCnh5a66KbFu8w7zpNQ58vjr9wCyH",
  "key15": "5ztpnJvpAfJvgKmYMr8AiLHXFb1zT1DZ3HyS1L6zsRu4H92EmBudTJMPDNkNmjywhWvagTJNJoMscTLia7wxMvjM",
  "key16": "2uRWe62kTssjTKpNFyGnV6WkoK9fRHhadwPTtkXFaodyBR375fWzCVBqrCjSiUdz1sBa7qFy3Ms66NPcVVWVTrUi",
  "key17": "SrsoQYp6EZ9vnHwWJWhRmPnsDS24Ma1PgskyTGWwovVt9S84PQn68zpFFjqJ5ct9ykEP3Vo1WN2EfLGWZTc3YKn",
  "key18": "wUv55VzGkvxSyzwHJpnsJat4MCPABJEof7LpkKziEFEpZqe9UHbm9WvkppPwVDhdFFuCs8MmUBZUbzYQRT6Czjy",
  "key19": "64EpU98thKweUzpBPJcgJvJapYRimwVUZYhZJzMv7QnRaT1X6xJuDrgjmKUHRK4AdkUzSnLmkH5ky7tfM1ca5aZX",
  "key20": "4z6Lacq2bxT8GpLdG2hBYm3CtCUkfZJNMAGBPrpgkBj93L9ysdn6SRRfb5m5RKPE4tBXfJqoW5v45Y2wMDkwJeT2",
  "key21": "3Z7sepuJ4scBLycqQdXQa7k8cyvCBZnVk9G8pWhdA5WJy2aMrAqUHCTXZ6fxwbgr1WcNLT3ech2NpnRWRbXXtrCs",
  "key22": "5m5ejfjyhg8NdQndSDhKA2k3wDfERB1DZWb4sm7X6ZtB67cmgzJf4FvYBeNLZR8PjQCc2kR83Qa61n4RSJG7hoQ7",
  "key23": "3jtM5PabbEKhdb5opw8sGFr613MYaWN7sMzp21Rvv4pPeNYi6ZPPdX3s84W7r5Yy7TFTvNJf55c9oChjNDEYCEJv",
  "key24": "4ZBPYuj99v3PDArPqdkTKJsxqBoM55qsRmUC715KtYjmvtRpyHpdaWYMSBTZQbohpJgS5WJ14Qqh7FMrw172BgA7"
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
