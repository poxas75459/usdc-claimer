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
    "34SZvCiKfJsb7YDyBYovBBZiwquWXQr6UgWveVpzsGPm8hMjBGUDfhUEUMYUDr6Boanhui8hrd6KayQtpjE9YufK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hZLMd4NFbodoUFMcjurVvBAaaKaGqoKDFbCFsx6spjmvhrLF7aH9QBkx3GMp3xwyEcHxPG1R4aqzyMafZAKMQb3",
  "key1": "5aszBCxcrYTP2zZbhyqYnzvrM2wmchgT9tz9nHLcsbWxYqeVzs7Zto6bt61b4rgGVUnAYxwGgmxF9kgzN1hMamA1",
  "key2": "4MdHHM3GxsgeRqfUHXmUfnBJimWu5eofHzY98xQN8sHoTwvn6f4s7zxhaCbBSmMDPuS5eAKescSgS4wYvE7sMBeM",
  "key3": "5VG3VtwxNrfYan8L8d8ViHP9upsg3ZQsf6c8J9Qivdv5hhdymPnXrXp6cp2y7VhHM3vDxNaoZYM6q4PtY3E5gWcM",
  "key4": "4zrpmQqa3s6AGFLtZcheZAH8bn9TMhZn4qumoKvSiNyTM3KJ9tF2LBbQhN48ebG54yY4mm4mumxiLpNhvJvag4cV",
  "key5": "3uBecHZcgoTX4YMzExaJPLDH3VCLXYGSAg6kqB1839YdK3ALt6sLbPhDRHy32LBmVvNvQNjwnJrR7wGq684skLmU",
  "key6": "44UVqycXcgUnbPWMqERLEa5n2JS9eYXPWxRvWcXwHFQ8UQRgUk7uKgmoiQ2g7w3sstjBrmTVZFt7y9ThT6gUTyuM",
  "key7": "3DnXmooVc2QXc1pLfJ2eU3W9abFJUvrog6RAVxUTKVZRf9G5oHYPmGxfFbTs5QFxcqQGDTtaWwiqpTmUnWBYCdjR",
  "key8": "66j7HA4Uj1ri895AAFnp5VyNg5ajEAAVenQUJmKbwWV5Rg2YLzwq9pbPxSDRLRqmWZmH9q6kCmU4rGve2MTZtsu5",
  "key9": "3BXFu2Ym6jsKRD7RLNHFxRaqYCQP4jbQASD59YhAKVofuifpxq98j85bhDbcW7NAsg6RMzZsyuPshbhSfGPxH7WF",
  "key10": "6SawL99tgX911dsBCiVvGmxfJJM73CbmUP3g4gPY98gH9s5S3s1Gy6A7sy4GCJSysKonH4ss4EhM5mcKUf2mati",
  "key11": "4kPFnSqzyxsSEaxPefH6kdLFqrTmj8P1FYzxdBs2FwNs4RgNtt91CyyWmqVx9pXFCPgmg9qhGzi7LTxm5jiMPjDz",
  "key12": "65GH8fK4GgCYFVsGnzVKsfw1LzSF4Nh6ZVSfmWns99UoyVduvG1hzVwPwcBhp176Qfk3N8kcGCEVKLvMR5FwWr7Y",
  "key13": "RQuVpCpHrVtxxjCfaTygvWXmCzTu1cDp5MWPNnGHRcXX3gesqdvQdXtcxCMzz7MTYzJNscDV1MLy2T2PjNtzhmS",
  "key14": "ZKmMMfwx77Y92oadv1aSq7rH1qXcVNaWKZEVu1nh24JWCgQxtq2EBbLBZBqwjBuhU7msXigTFYHPK6fdRjCjfUr",
  "key15": "3iSMS5Bb7LuewjTnVN224e61DkNXgBgmZ8D1AxuHg6WSFdWZBqSMpK1jxUdzGKA2J6LoGRk4FH9wYP3Gc7KMp5Lu",
  "key16": "3HyprdxUqfpZBDq5WjqH2QGdpiwMQR69UBvaRsiAQJyFJxVm5gv4iLCNLEZ86CLB9P9Xrj4FVukWPaj66HNjG6zF",
  "key17": "uFPtaDwMQCigFqkFAcZmREmJm6ndYz6ihtz7AwtkVH8HQQPonbKeVFVxuJk8EKu667HV8B73CTqs4bUP6Wo3HjV",
  "key18": "4MvFuKVvzT9yi6TBoYiRoHHpLctWyHryCbHW9C73mPCLLRTa2muXpmeaBXEn8LhBNLao4o3eBNykagZwiqxyvhEb",
  "key19": "4s5CGcutaQ2Zc3jamuhyhdqh7fEHQ51NxYsV6pPFp9hVMnkUAbiFnBE47NYPywjfr3L5f6kUxzevbRST1nFn7Ts2",
  "key20": "5wdvTE9ZYV9vPDqrJUbiu2xYYKQweqs633FvqNFY1ZbNKnhqBVRGUKHt59v68xVpMn1gnmLooEmVwVokamBc8EQ4",
  "key21": "2btQ2FSi7AiX2oRtBdiDPB2FtaonYYdpUgh4P9cpnMfVX6rWRUkYGtEKwpuBqSTRTE3kDzBycr1acA7YZ1e8Uk1n",
  "key22": "3rLcnwNAhCGidka4xCAN1r4xqw9sQ8kEcU56GByNFtfcRB5DjZSp4qyduTHmGaMnp7pwnhKW3BjkSDozSoGHn99P",
  "key23": "3cxmBYCgai2cMQjSf8uRnHPrh5cqUfD6VvWmdZgadgR8npXwdSypH6BXpc4uv11jvGzhZLAtfC43quxrxDDXqQTj",
  "key24": "4fe6A9cAFzmGYTW9Y6Kmizvr683PgmuigdU4ef5oN1a958jm9n3QbpY4iZzr7DxBm1mbJfNAgRvdpQ5oooJ1u5aq",
  "key25": "Hhp5Z4AsrMWKSWsXLiQFSbRwfTwuF5Vs2Asw6R4ND85YHtdjV7y2g2p7w3B2MeTfFj2D6gBcKbHQGWa12A9fhm2",
  "key26": "2vaeCWd2FzBGaZT4gwYCfbWPcy4E9NXv2pLxVTFxw66Vz41KnbZTkDy5yTmxiLsGDg5qpo7yZPTswHPv3LJ2azrR",
  "key27": "32fqYuSiZ2pvPE2Mtzvmw6gptWGc4e5QErYBM4uFWxedug48uK4HDu4E88jKfGBHZDmowiT4VtBPMqFmiAi6oSHA",
  "key28": "2gZ9n4eDBcNFSRbZAsHjpFMZ628XdyidYgeosXNVBMuW6N1Pec89XbhwdddqJWDahqMqJZ4zuajoXaPZUTCAM2Eu",
  "key29": "27ao67hvagtUSe2Ksp3dvS5YFV4EBzuQmTLHXkxDh5Bbbp7QykE47oZGyCXX8LjB4Mhvw5Cf8kzSYPsS5YvXAB7e",
  "key30": "29E5Fx5J2CsDrkka2anpRxdHyQYS7oXYRgeTc4cTmraMfKAKHTBf42DKxaGjM7eGUYfev1B4ovZ4D4mD83A4tq8q",
  "key31": "8xipRrFo36fPm55o1ALtEXmRzcrpCYeW6y8jcNuj5FmT77iy7ycG1z8KPaeom525rwRLt1KMqU87qj7rXmYHP97",
  "key32": "4xmDWYzMJfbNtLRUxoCH5GtammqQb16ReHzpJ2QryjoE5zzRV8bpFiZukngYUReXKQyrBqxgMv69FpyCE6Z5FQz9",
  "key33": "24jdRisGYRnKYLCX2czfwZFahjTAGahv2V6ubuikpfWRY9pfBPQdyybywV5V27HkSsBQW4awxjYw3UEhFQbmmbaa",
  "key34": "4JeEJ2btnN221dJvEwHfuxSqxizUNeuvNKYRuP2JVigaKd5EjrHL9kN241fsLzWoF6cAdH9YtBXP7FCGQ44DYk1U",
  "key35": "H5NmQ1r6RDcz27yKNLBzxki3m2NdRK2HB16hvJfqPL91CurV5De6jgugAMimsZpav5X9kSsM1aMCQ8wpv2xJQeh",
  "key36": "5qUfqtVNFBh3MewdPzp5snH5gAqXX772N566Xjyenwm3jkcQcjEKcbCc88CUeKqFce86Zbt6L8GSAXSuq8jSGRzB",
  "key37": "4HCSQD3bj3zykhxZHnXv6is1uZ5qKBHLrUGDV4NH5HtnF2miZHUVJStfPoJbUUzhhsvknEQeKmWiKFSDNBGURw2h",
  "key38": "4mQAkcg4sZBiXmDwLG4UgHVgYJumayYzG6wS9Q274UASuFFPvufF5fDhci5scX1WVRKFgiN6TzQRnj8sA51ckcjZ",
  "key39": "3bpL2TJ3zUf9FyjiU6tJGcKN3FP5Fti6q8itzgZWpenLX7Le75rCvfWxr9EuP2KB4uKY2w1QrDBf54AazvRRLbGu",
  "key40": "5nj8K31xdHvg3as4DKuSwrutPVo12he2V23CvArzTixAef94noKNheTnE7n9c9GFCCGyXdSzYPvxZNswjjnaZwui",
  "key41": "4WP797rVMTh4182j6vqZZKALAcTohaSKYgd82BQ8LH4LZD423LBo7jXZW6eFbQ77CkSQwujoN9rM7CubWsQzL1R2",
  "key42": "33bkDhRiS4icQNd5B7XMkycDxUqqDsWX9oRLx1dgqyVaFxdhBGnX1piA4H5CLp7mJJtUPs7egt3r7qNFdv8ndVgw",
  "key43": "2quPd3QMKfz1Tq9QDGySBgxTLDzQgTHoVnjaF4TNtS8TZBnU5etCuobJAxHzmgmvoaA2zan6EEbYgQWa2eGuBC3t",
  "key44": "59EoPRbRgAVRW5czSHpRfBA31X5sSKHr5vBi8vMYRddRo1wZj1ut7kXo7nEuWCTi5CseuXZj2BDHRyoBictHGYQH",
  "key45": "2fapnVpx14mZ6FPLyjcKG9R457sSw3Z4a1iJDe5P4XonpLjhe4eLiFrBXTAebsiQ3i8NpLcViZJzYYKaMGgF75XW",
  "key46": "3ojbxiu9aynkQWkTNrvv9Bhp1RpEr8NMSFfdAuJetJRN7o5aUMye3p2VRUsVbmtsHcAxw6oE5pbJYmTccNWMB9Lr"
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
