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
    "4m9DFTTjgqjZCLWCKNZCQ22gmgejzGr9pLxFXDmuEipLjiAEoXSZaTMwa4hkySw6o7p6uZvVRUY1LUPtgpTURuP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QRzPEsMaNQzN6gGnfBawzH2sD8Jh3kBQFHLEsfNoR6ofyActGGQEDnG6USHFe5ne5HNLbYSdNWsYUq9eCVpMYu8",
  "key1": "sK4G7jKiT1Dfnugj6rtGoCyG9VLKvEmqLGjPQMwc1RydEdSfZ7H1w6bjrmNobBtbb6yt1Z3zWCJ7CAo1aMAH2wo",
  "key2": "4YAQ2n1WP35KbAzaxvnTZUshszxKkDhu7XZfvLF5YGv1Vz1oGb8qfGLDayJksEask6APDNmg4iG3BPdPq9FuMLbP",
  "key3": "2CXiD4mBMGUe1yjPJdwTtjqhMPsGFoDjybxTL8gZQTqE5jo4ZXJXBtz25EKwhBpUxcAJ4hbncWRJ1nQ55u2taGwR",
  "key4": "EurbG3MErsQ9GaW6n2UwHHE3BHVLfNQg2dR6UXx2x6hsmRyStQP2E4gVG7VEnRdD2Wg3XsECNekXTjUisNi4Pkr",
  "key5": "31D9Hk4X85w4RGLxJ1Corwoify6nrRxaZ2CJgaN2VUsRcKN6kQ4uqF9cbbsFARpMGXNFMmEDTkKnhAK5qvDuYqs2",
  "key6": "RLzPeooKoRdRM3awsStLYMkweEk2Snp3SocSYxc1mrSTScghjPLZAcPU9RTAMUXy81z3y2TLQcdKmazwcdjM4k9",
  "key7": "3HMqnvo7XyVqfT1bDRpt1LBpPKsHkBsX1oVyUpVeeYTmPWzog8Tpvw41HsDSVXZMfhPi14nEoujVz8NxYbTGBcTA",
  "key8": "2L8quaCRmZm3nfNsEX9rtxkMTKh32QAmkRdpSpuccWN2Fizxz3ZawdGBSpAncMbATKDtYW9fDZEmgXzwnGoFc99k",
  "key9": "5NHTeS58ANBMK8JLn7mbaven1qDHCWLmFYYe22cNQkiM6V7gDfpNTjWJDwVAYWne6JGBXv2nuKn42xsxaSHXKrAr",
  "key10": "4vERD9v9UxAGxMpeaj2BrB5KGuaeDzY5d9sgwWEmXpe3nSWsWnaa2kksP2T4kCNRZDRYLTeYnLtiaETqHTNkjgyB",
  "key11": "2w7QE7sc1HftAcmFbKRrEUYrzbXTVATqaHVKzzHREm5AHsBFZWgUCEqXs8MeMrQY2FvcBTk3hpmdkxk9o3FVL43M",
  "key12": "2DWKdzX7sX5WmvgZiMrZ2FJHioWe18QbEMxWv6LQmYVr8K7689wjEu9dKGpnJSjVm1JZpEeukRZ84zV5CnnxqPBE",
  "key13": "3Wi2y2dub4amQXx4N82NaaiBqMWG57fqeFTDsdXGwuP52cNHnTSuZbbLfmi9JoQeiC42FCQYbRD1K3PpQmzsmxPG",
  "key14": "63i8nJoNRHbaTohGHS3ZuMRur8tf1eEpgST2EUL8S1qpxRhYmjjx4yt4Gzh5DMo1JzSE2L1MTKidG8DsCgr8ZJi3",
  "key15": "4AzuocxwNDgfU7YLDyw3HmFyiNacrjZUwGMLqyCoEPHocm8wst2EbA5rCKhpjrZChG42cWBsi5sMV3vqaHRoNtqU",
  "key16": "2TUpnR9tUCAswBoiE9e2AKdRLMBt8icn2NXEzXydqFqSaHa87aMR9AjQT5Lxsfp9zjEHTuvTHuu2JHKPCvaLvLZ1",
  "key17": "4nNBFLES3p3MHF8exFNU9Ga5tUVGouAD4cV4zrqksUbWdYWAas5mM8jkhU4at5FhQNbmx6ZC49dRkMiY4hQ1A4pQ",
  "key18": "xNvPvcLRJsN6ciKBFHJKPwUMAqzvWqhDWoXBZJoBqhH3woEqAi32p66LoQrjs2gFhG4rFLjS18u4sa3RPbAUcrf",
  "key19": "3yoHNpT7SkiiC7YFYaPx3BJ6wZCqYeexdo56NrinFFL2h6LfzxnReyQ7YSqYpBnPpsdnzvkwMprMRmzCSJncc2nm",
  "key20": "4x7CBqDzVQbU2PiXDYC1oS6yFhKPm9o1qKXJ4aHsBwAWKr7PUDvZ2Knsy5bhti7pSXdXjux4TtnJj3wZLGepEgD3",
  "key21": "2zc7aNKeZ8nmmvaxD4AmbXFaAZXDHkzwziL9JMT1dXFnfoBcJ6R6aP1aYwM9NXHW95fX8LWcAWy7JHguWoihZcLT",
  "key22": "FmP53Jr88CHXyXwVGybMkXm9WaHYvJwTVH2bAAKJpPGp2a6sfLhCnruYsZiNkqucLcpXwDpDQGi72vJArVtcJdg",
  "key23": "2ScE5JTJbMgp446Hc92hRndHCa5njVbZPKEjsR9xJAX2sqeTNByz8UvXrUHhauxiGjnsRsfaKSEEfjeEmFpBvFv9",
  "key24": "4791xtLeMyFPpYgthLKeQ6DWmQVw89oGVgqfjRc9HZsqzDqqFGTgfebENdhH7DLW7D6HXopXQkZH5FAZi9ECeCkf",
  "key25": "4YcGYdMrJyoXrd2XRSNp4vkvBmmcXNjDQePy3SHr7U9XkKHqPPFJHVA5hV3B6EXJCudyjtgUrMFfGSpP6oKg9zB3",
  "key26": "58QB5yU5tev5QxBkTE5hdPjfFvPcZizjcEAuv75nWUcaneVKVNfB12AdpmWdDFs83hGnLG1g3671skGsuavvPiw2",
  "key27": "24DLy6outV24fUaQh2HVdo22HwC3MKekjiUyjp7S7wio3bgHtu6QAnWhZ8ZiR4JxEETyAiVjaJPAqwFJnUBkQAqK",
  "key28": "4u1kfLWRHwRzwHPPKPAfVD3sdrzrWuHJEWCnqaCRWmFB522FUCTvf5bCfKJRMawVTepzTSSDZHbxbJse2SkH4qgt",
  "key29": "LwCieu8vSnMeDJ4n2DJQgJg7AoTM4wfnLYDCVpR99SvR1z3g5KJ9xbQZe7ZMVt34Wd3DqMg38bBFshuE49MpKjm",
  "key30": "64FcNfRERCJgYr8gkf1WyGBw7s9EXCGLKGX865iKB55RuRghwAxsYBvnZJxmFWQ4Xt7RBauRT4t7M8TjjEH2AcY5",
  "key31": "5EG6Z7ZEtXdwnF8dh2eTCGMt4C2ZX2fmFoTbsmerqmoQnLLbtxHEhK8RBNmn2dzBcTdxnec6vMfBQXzsWW5MbbFb",
  "key32": "3bY4vvAu8w9KNp1L9KFwzsYEgEqZR7SkQaDmRzvpyZuidufKjiZaqBdKAjQPLfehNfpzZRnnFU8dpXibikVJuh8i",
  "key33": "55RzHGJUMFX4RVUpaHhTp6knTLB7q7g89QLyK6s2a5TxpMKMezYiVaEYKjMXz6NkuiJE5v37eyqGTNXBKRnQd47C",
  "key34": "5qgoZXK7Mh7YPgmFwKQ7sbhJKMwwXbHDY7MDPN1LP3jYXPyFkFy1SahQYjjjH7CyAgN3PCZ6qk2RfRk2bYd413u5",
  "key35": "4BpoQ9d1ZBYDAHNajx3xTqBF2CgscYA3xseXEP7HKFsvR7SvhFACnn2Et7H6vucAK2g7AVqWSCxxmLZfF17HY7km",
  "key36": "2LfUsJFTEn3P5y4zJimNp5roNsW3BwKn8jaMjwdekZ6ZxZUcYAA7gUuyJgfANy1EpNrP8L8SrgiyzdmdpS3Ppbuf",
  "key37": "4DqvERKivzTERzXFwN8o26W1HrN3hAcW5yLHM91Zig5KEZhFDKWELC8b2FiWscYbTVvijZx9Gx2nY11GbwRefcCU",
  "key38": "4GoyaucjKkwSE26yizCngH3yyFrnmtuN22Uqn7d2kGbW1Mmmcyv7fZXrdK2W2fKs4YPPX6ZGPSS8LGuEjSWFTdHF",
  "key39": "ZrJt8CQTqULceXWfNvVB3X8vURuG8AybZFe2WV7akguxc2uKdvq8teJyeVr11D4zx2i2QBvSiygoSzxKSm4FyVR",
  "key40": "3rDiZSvTHgHj5xQcECXdRjni1J5dRpxzRvYnGAmmCWVtGc94uZg1TtKfA4d2hVQbVajn311BQEgWkNuufM95fmpM",
  "key41": "3toGBZtDBEwwyFg8AT2JQcXFVrdz5Yf4vYYkFLH2HkqJVocXZc1yS1uQoYkA7a9KnrN9Ygh1uS9b7Uyxkff7d37R",
  "key42": "JRQZJJVFHVx3ToHMyhQZgeJxXKF3zC4a1cs4GSDgbbaRwivfTsDbCzAyX8pifnA5LD5oagM55hoyTLp1PwsuS5W"
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
