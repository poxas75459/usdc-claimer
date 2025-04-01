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
    "4JfhCCoLSoUFByGABcBpY6QhxKZhf1TUxkukvnXztVwR7FMPqZXgy4X4ACWMjWxrRJN1WdK3eFGufxUtdoWFwcao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iX62UoYTzhjFbmLSeGD6oo4o4287PqBNYocZsDmqnexraxy5M6czJpLLqrZyBpjDh37xDgTpKCPQdm6fwJctLwy",
  "key1": "C6N7MJ4W6AfUbBohrDLyvCJbgN59vnHU2ZSbtJdhuc48J8d1pC1y4auSPLytmPNLcHUwr21nuFtz34tU4Ca5oRg",
  "key2": "4me5QzD2hEuGBRMZENdXmA3QHe8U4Eu19Y2gYdzUGNpZw8UWgC2qR8ZFvg8q1D88tqaFXcDBFN9fSKAZzvo9whVq",
  "key3": "381a5vnGWWGzRCTDrrXmT1PkV8YbykvrCgbgS7TZhiAkQBMpvpA69u9xF4jeDrzgfkB1ZodTpM1DKbRuawkj2zv4",
  "key4": "34eFmwuZRQCg5yHFkYEaion3oXn1mSDu1gmUzQbcxWzNk7ESKoeEdKy2dsb5tEFFve5MptPmeUVmSF3ggbnN13Kj",
  "key5": "5eWMpHMsjZtHqR3FGC6xrQHZ7bnK4nnbyoeKfuhqo5eQrVrYKFWwfHapv4f9fUe6JSbkeiVDaPJfj2R83w9pJYMS",
  "key6": "5zysHii2t8G3Zeg9Cq2dYTp1kWXfHDuKD2PJqmM3KFek7hUjnAfLq4ri3tE4apfjgBYCtn4TbneNjoWfCNT9y8UT",
  "key7": "4DHMajsKMRB7RcBuwAP42qwGnNcPinQQuDjeL3Kc3oXC94uMRZTQ9LEaZ2gFNnrrCCfNKdW2macBiyvLzbQz5cmz",
  "key8": "2LfAPfxWgjJZ5jHMFd4Fto82WRDZUHjF5TNnAYDeMWV7bBZaqHiaB3avvg5JEQW8FY2yBsPyxKmz1fDWnXWPX5RC",
  "key9": "4wp3qKfeSFMfWncVdZGWkYySyDLqJLrYHJLTGnKCJmv1xeeteLYKUHaRLWh8iv38PDd1QzwGDx4Q6msNV4jX7NN",
  "key10": "57nWtTsXYoEDqspshdGHyri4g9RgSYcv683M5uwcXn82vYQNetNqqyKffbedVHvJXJrU3PxgDngcqmzdGmJoi5vu",
  "key11": "3WV5xsNBTdnaJYPb821PwjztGrmZddjL8HLDrnv74kKxkTKoswNjpnANHijt5prFHhgVRqYThqbcYVFT51uRrEDn",
  "key12": "4gg381tNRCAuodginKoscaNUqM6skzfB5WRbW4AYAsxMst4mEevPy9ZhLmWDVvpXFP9xUg2nLXGhi2PDpWQcA2AL",
  "key13": "2grLz7t9YBRdg1vmEKge74wrTvNgYRUAiJsCTHMLTKpu6SHwXVqcAqdTFHycG6SVmew6Sou93pxYrfqiG5bGqnQV",
  "key14": "3cCXagcf6AGLugtRyyDHKDYiD2kU6GZ7ACFx62NNCNwvqsK576Ra6vfSXR1ZKWBEpCxZE42EWBC1t6tmbXdZF3zS",
  "key15": "2znL6hkww5Ur1GsDcd3c6TA4ATQvbgTkYRa3cS9T4zma3AowgjC2eHk44VmiJhSBr1PQ5oXC2ZTZNhwTHsvsA4Kc",
  "key16": "4zYoKtREoWBj6YR4uv8VhiVCit96hNgzJQ6F4AN364MCHPtzeRTsvdPUf8WmrwJdwWSGmFyf7w5dZWLuZLTG4XGw",
  "key17": "3sF7GSiWkKyRCFNBprNi6cQFbTBgNqLExrpJiFPrFCU35BgDm8mAnm9mJMxYLbE2kvx4EcJmfzESkvkJNPnxgJSi",
  "key18": "PJXFYpnafarqqmmTvUnsYxf7S5J34nRzGUjt24pd5LTS2vNNzwEdhvEL8JuBtxq4zeQJBkxPX8pEeJwNJuzDZU6",
  "key19": "3YLc17W9uQ2ccsGd1fbDsg3Heygc7ekkoQZUM3QWKBgMQmFW82uZGLf6fDXZDmYjpSsYjSDVcV5TnT5Q2985PwSA",
  "key20": "5pcxfdDnA9wTGZPdiM3tqWWXso6eLPLbgDUSJZA11zLDTRd6FxuDTSjiCyVrGZcZKodSgpVhuvitPRaYGT3JUpFh",
  "key21": "2a2PK5GkeeZS8FebfaUhfvTysipYjo1YtKhAsfLYBfu9wjbMmzT3ygXmBWgrsfegVAKccdBUmc91txfGpPiNJhMB",
  "key22": "5pF1RNGyf65geAQs5AyciUNos9bvS8y7KeX5i1LkXmdGsf7TsvJRDAH4ZYnskppKkuez9WLMr7cpeTwzCNzD9JSH",
  "key23": "2L3tP3Nse9LRhfR8vhDsaegLbAUgLt5tsdJj2jYRjnx7qiARABXaFhcZkCARWVeee62n48aNJ5WmKLpkpWPwVm5C",
  "key24": "2ekFPQmgipzrFmU4WhSvfpbKgK4VRf8dxsa9AiXF8C5DCMTzuFS2eV92mYQvty8JYiXsznkAznu6NwjG6prsTK5m",
  "key25": "5aaYVcNcgmzVdKgXRBdvd71135o22SK1LZeQZb9t5YekHdUJAWYTq67nWt6GUErHCQuBQQLVfbNK4B7RzZx6S2th",
  "key26": "FtWBYAGCNcuh9ngnbUq1okDN95GSEdzChiXEiGgYqGxthYDxyH8cHRoqeYyyBiuus7fi7K827eUHWxP5rmr1Bs2",
  "key27": "5vtizhQFfuwh3q5hZtF6ShinrFoTEfVmT21PP8M6NqMV5VBmxycgTmJKBz8Lo5QHqFZ88qnjU7FSYP1MvZmVxkaz",
  "key28": "5xxz18YpaywVNNPQxoE9R1DkJ28KWo9wiFkurLpFeeJgmj1MqZp1CHwhA4AhLitWtyAJELi6cmyqWCpBDjxNugcj",
  "key29": "Unri6KUXiSMie3ZCwqr3UDK6qzF6Zvm4rhgLkhV4HLuDjSMD1yjrkLaGL3pVoxmk3S5vJPbQcpZg1QFdkbwXJXa",
  "key30": "XwBQfPAuRzYsYYcUGN4jLMQEmzR5j5XjU5Tu19FLZPwQQJXRfuEZQA56ZyToSbJPCEhjiUnLEPMfetxpe7mJCma",
  "key31": "2tnhiK9MmAGWtesYPLHM17v3Ea9HNLnGJazwkBSRMoe5FwmDjhS6mE9gbEmTxFV1tn2Bm4BCQThLdqVqeSScxNV7",
  "key32": "3fVw2G17sFshBiH3crQrXCBLcssPKTukW66kpkK2gumJiireLL38MhnoV5a92TAUvqyFNGFgU2rgm3HdFPjYzBfL",
  "key33": "3PTE38gNmE2qu2poYZDVWnJXzmwwZHonzQh4xCoX7K2m1dWtDZsxVT87uGhwMrj6VkHE2UqCJ98WTLTwn7VY4mzj"
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
