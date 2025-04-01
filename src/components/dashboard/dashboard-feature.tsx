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
    "3Dj6urxER5kN5rniqyCsJbRJ3cebY8Cfi2RPcDUamtjpYQHeVsXAHNr11eaDktH3FApNBiaeAuKFMZuxhWKygBaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "naRK6w4nnsf6WHkiWKAedW6Z8KqkoLT4r5RY29YeRuUcR6a271iYaUt2E2WcEeRzaZv1geAuJbjFk6TYUUCCYuS",
  "key1": "4AZxmXZ54WY3P4K4jYpq8sXCDvcMv1FoUQwSBTXcjdQzmoAVR6YV3MBArJygJcNPygVydzH8QnRE8Ws3byjMWcLX",
  "key2": "jHmCcaMJBU3NKSbrHLNh93AG2Pi8C5pbPocU8X1HE4Jyoj7MfviZdJTkkDFAsEooUaM8DJHwvgFH1bcNmjYQCkZ",
  "key3": "2e6XWW1fEZXUUoaVbro1mk7Nex4VYQnFgtupfvgXfaVwqgJWdtGsKLE3tRg25qLA8DfRSP273qEiEPvW69CpANf",
  "key4": "2do2y6tbRNojTqtD6NZPQCQANuvoQmFYrGGvPoaNbagVrtPE7MjMa6c33cyiW9FQBVVjmHEtgqRQ6BG92Wp1r9Sk",
  "key5": "5LRG2SEbfdD5yeHGDNoPWUQ3mszNrWdxeTeD1UpL2Stu6XBCdk4Gb8FPHXqo9xWEvRu8GG1xbW7AbyR7oW1eiDfB",
  "key6": "4y6dj48u3KCBbQeQDN3Rqm1b2NHocTf5DKrdoAA644nHyqjLazBkhB2qiJjoSWgNEu4qrpctBsVtFkxLhxGmHKcQ",
  "key7": "5PbgAPiwD254rXGYwRZ3HhDcxvSM6cqhoyQhjUyxFUTiwiUqgB8pA38UmpGUTq4UfBjS1H5eBBp3ghazvXmvsfhf",
  "key8": "297N6ZL9GcEzFSCWAzhunUCeuccrdFw9DAJ25hWCAXSdJJRpmdvgNTHwpDj3zuXKQufkCj4ege17iYZ4NE6CcCzp",
  "key9": "31eGiPTqBNsufN7XZDGQDcgG5Yg9wmG9NXrgjwmMbdJqnmfrAQQrEXrMRqAqmzm1WPVDMhjVQsLWwo7sBjbBTc4K",
  "key10": "PRbAhrmku1VYZVAHz8AZWXGeEEfrYEjqMnPNGFDMuYQPjqivuowL5dKpSdCWvnFhTgKVj1KZYZBKEHGC48YQ8gK",
  "key11": "51SXwETg6is2xegoVw7qwGo8jg9jfcd7Qxny6BcjtCvh3LyyVqeTWdUkBycdcHxDiqRNNnSFJJP6GPMq6xMVoE7C",
  "key12": "4Cvj7PURiUi6LQ3gFdHuYp8PFsLphdbsdJTR54nz3JRNhh3J6MWKbnKR2zrqUpFWyMxATwUuubu56TCV5pvHQif1",
  "key13": "Ao4jojf5i5rCesdLvT2XDyk6yNTdFThFogwGKoypNU872RxcveVqLwjXMNU8GKcjBr2W5ehULLNzr392S9ZiZFY",
  "key14": "3emW3JVjMEqjtnu3X5jDjqvy3X547f1M2LFfZbMqyaboqKTNugrnqgv8cn1WzYk46Kh5VyKqGjU4YtGvw1VEmUB1",
  "key15": "4UYmsP4Kmw77czP1zDZYLKs1N8eChbDB23kavZcAF7QEdQXWYtyM9C9TYW4Em8u1HpihTXnyi88eXegKHrghVHFQ",
  "key16": "3pnvHaundVJc4ec7AeNFbfTsyH2c7ZgCMXkGo2dMoFvuAxGKRQQbJcxToNLG9ihZCQPbkhGksH9hYrVN5fLDjZCF",
  "key17": "26VXrhkP8P9yBX2xZPMFRcLKkJ5Z7UW3sDu7UdizPpTL2rddtrsmki6CaxuwGeUXHJVnbDtgFmm8yhJq6kyk9Krb",
  "key18": "BRimzvfCXf5BsibKpb2D9rCRgGvvtCvVhQmrA48hLfCZwPhWoMoc8Z5hmMcnqS2pZC8bUWVekpGFScq3cK21jy9",
  "key19": "4DYkNZ5PCaLMbV9n9vyRGSAuy1j2QArgdkiPWWfpJyy6ogMKFdPbhmCTr4DXsibj8BgQxQrgFk3Vw92RJa3aNnpD",
  "key20": "2fmjZchKphhLM5xBndeiyuQe9mtzso9fZic3XgdR5VBDLXdcV54G9shUVTN91Jn97SRgWDAmZR9pwjZ7kgTKoPbQ",
  "key21": "3NuNxymzanuukorG7AoP48STx8Ld5q9koaiUgTzZpqZdR2Ya8jb7en3RUQaWWw9cDA5Z5fAoWrg5wi9YfCkW1QmN",
  "key22": "NrioK4e4yjCVnhvp8LQriTm2euPWxqSvMm4HSXLPyyxqfceP8UExZzJzfhZTb9b94YXVEeQnMgZMR7CDnnmBJuw",
  "key23": "2aStK4222o3pW7Tcm5U1LumH6JMqUVuzZQjbpH2CoSEXP4x8ugTxKbyc8yE3sKMkxR4Sn3My2c4ciGURYrYUL6V5",
  "key24": "29iJie1nbBHbDKb5gpoPZZ9i9okbLRDPm2dBUKVnXRT6yNykQcv27zTnJ28BiqdNCYQ3GsPGMia178LrB5ZwNs2X",
  "key25": "49b1D9hHzH9PcjVX76pVZv7qoja278Lt9apZG1qTWCc95LF2rxSt3aDkKgZ17Rusj6pA7nhAqxxpixRWeJDEjW1U",
  "key26": "4ZdTbsQWj9xqtRu59y9qXHNvRgcjtL69kjgqNfLnzwftctUDgkEnRLGKqurB6cahRYw3kvWgmb5Q51i1FRp4Je5s",
  "key27": "49VEKvrcKvKDtG3QHE4nfCjt6LyHcFEdXLcA7wvYMyzNKwEHyHFReJ4mMV6qmA9DPUzgs2veonUMuF6xF6Ttkbvi",
  "key28": "5dCxG7P57w99EkLWJ8EY11aDMzJAJZqz7HvA7NhHcp5enkWRBf4poJctFGzmRd2ytkBxs8qUkqo1a4KHnoNYZSgx",
  "key29": "557Zc3FG55RH9kv1o8SUjHu16dUKjdHshELYG7gonXmcwVeUUJ7hNu7N5DnRgt62xZBdNhZhTp3idWwY8j7X5kFz"
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
