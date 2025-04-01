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
    "5Aqw4u2WhDe9NxjFatiQncjzf2e7vKRhdxmDy3fi2PMAaoCaXfj1bbQwLTXSki5VonD5Q57JunGLWwtAS9RZavBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BTN4hoCRoZjZsNb7UECETijUvXWA5V9vDj1VzqrTdXwTaCGLheifkz3dgXs1bZBzS6euTJG1mYfHcPHmbnypYtN",
  "key1": "2K9tTRZJbuj2gmvBpioTWtwbBGgj9Jhxp5d8euFBS7QNXYCwKEDEEWMtVDpVrdK1HCUsuQhwLrfzpuzyx9VTb1Zx",
  "key2": "4wyk9cokLGGxhw7cqFD51HksYmxMStjVYFB6PSBrHoFvCEhDcg91wAzLLrwG8ovqNS4ZJSXccjoYwS8m34CRBbrH",
  "key3": "5cjxfH81S34t7GVpg94oMPBZmWML9SyUCXue3mdasAdtAGpHmrPpCQw3yE5GjMdf6Xyv115pgMc5f9GkXi5N468M",
  "key4": "5EFa12ZEV4U1WBx1fmfr5CEP1JrchyYhkdvSZCHi4vS6oEcjezUfNdL4GJb8rP93Fh9gNwe7Tz2pDU5B7Kyf99k8",
  "key5": "58LiMgCamiRVCihsu7KMBqx7GsFwzRfzT6LHpB7MpGnw3TAA5DGLPrDfHFRQHNva9Fh8ERpg1pJ7xvrdfRhwfHuy",
  "key6": "2XeMAQ2oWE4n2oKbBPvpUkKYGnV1b4x5j7azHsPTwZSNNegtJaEniQVxKg6Bmgphedt6WWxiNsYtrN2BcyG8JV6Q",
  "key7": "5rYZHeh2TG6vgSUG4Wph3UVkasaidhsWd4MqW3rkaFB58HuqsVvR1KXg3hpjKMFMVbZmvrV39SfH4xE8jsxw7NLj",
  "key8": "5H5TnMgyFNwU5ASkaAJAELwQ11SQEiFk21CuEYBmvKoC2RfN32ZRFKML4S5Dp3pKzMqRxiv9efByvHwhH5ym8kk",
  "key9": "fVVX8GsSdFQLwFVWfaaSdRxeoeNXnGC5bcNu4vxszgFj5Znf5Gn74J6wWRLCLr2i65q9SiQXfX42u71QU4d6Hwn",
  "key10": "4dkzZcKuwjArN4WJ3aSrMoDoj9Ha9tTeECjhtXakTv2h6p2UsKmXPxd3ZTqLK7kyvfjtomXQ4byA7GJn9oaHLBZx",
  "key11": "2J3yentK5Z7jWH1pfqs3kYSpxy6a1xbjXUczFWqNJ7H8k6aPHVkXkWwAKPv5fheTkoKrj3mYNFwPtftVKUwsFxgv",
  "key12": "2uQTP4P2x8MwWQSBdzm3a7sJBsazwzHr2MzGVbTLXZiQZcVusFxk4HCM7k7yVtXF2CXCVFbcArmeYQ4VkYj1gjmb",
  "key13": "2k4nKBcusGujamJSDtMufvKxXotbtz5ANL31XKodwakpTwbEWFC9bjSjfgzxvNusYBSr4mhNdZqrNqNVMdHyPcCf",
  "key14": "5tZXFrSJQGDKcTc9FhHanYg6Ezm6QW1kR5BiE63swATmrP2EQ2VsHgBNdktyc6YMzuPYA121Yhc7MMDJHJ6791kX",
  "key15": "3Eu371jFVmV5HgZoBvy35mZiCC4kHijYGovr9kxVZDbm3RWBph1cxvK5ioPToQFti2x4zxyhjQWBxhM5B9h2rYga",
  "key16": "3Sx7Hk5iGzy9nThzBfGV7PrW3ijfNVHNmSHY75N38GFxVz6rHwK1SV85xTpMhENSKD9m4vhJSSs1BjMgFhSsdrNo",
  "key17": "5wSeTksU1YvsYS48QrTQD9CYVkgYeH1JkHQUokBQ2TEVABJvUALAySzcaJ3x9DSFKkcKbN865tFFavPBfrFhp9a5",
  "key18": "AFyfhzVxzEgy8ZTGtikVH48YkK6a2H9Mpdki3pYpx3GMQXHjZrZQ7Jtg4A5Wat6Nqx2v1rfiEc1yv2kVcNEJNrU",
  "key19": "3LW3Jd7VHFoHYKBvMNfEDjGmvaBEeX3DjJ93vDSeFjAzN1jEKbn1waXqziLMWiaufWKjNcNhcsbN6hyVCui3TYBk",
  "key20": "2MmKykYG4oFDz7FeaCPcZmiuWnuJHHxrx3hUH5HXKPrLX4FWpdmtwm19yi7o24eeFmdgAHvYe2jQCFBeUjLodRpW",
  "key21": "4dkvsTmW3cyisNQZUufXXjkCyMgDZxK15V9aJjozuEvFvCqjiwiYTcbefL1cJTCF7XqmLqYRnK1k1oDF3oxwS26e",
  "key22": "3Ub9xNPDpdfnPzeiaoYKungtTicTsRziwtPE1L9zh1ao5K4UqzV6pCCY1Ejx9d23Pu7mQLtbX41LtHp47hDqiuNo",
  "key23": "5r8rWL7KLvFj8tgzVmqsCLyoaGQMdRhCCWsvw6yPrcA9ToUszztRNo3iAvtXY9MtY2HvXABmrK87bT34KDLfQivG",
  "key24": "4LUUn2DLGRpErynr2e5qzYHzRfYHeYnPswVDjipF5ZhU9fygdyVUXY1LYU44cEKSeR7cLt5uGULhfbmU4JGj5zxy",
  "key25": "3homttfttvPLvAiUewho1xmVXQpNasbcavBJEWTx1X4JLHW8fS2YAsGHUrX2mJYPQTdCVFxVvmko7UuQ9zcBhj8V",
  "key26": "34ehC7ZrghFTPpZW7XSbM13Vbw2278s6BxJ4tExMCGv3WTCNuqq8MRvrHfQLcZ2NBWqPCx3LqRYGF72QYjwVnwGh",
  "key27": "YQVMMoe2wuvkmA3dMcDWfMpA2j51Uuk92um9kSqJh6vr4E1mD1T1dBZEUQCgTBpCvUdWAQty6SysfVheguhCoxd",
  "key28": "5ZfDnEV5NdpUAPmTX43jdH2zpKP7BvQUy9HgXEEvPaUgVyQTpJhTZpTfkPZ3raZc729pmjRdVqAUmi9Rzu9AYoVy",
  "key29": "4E7nVVtw63garACagtaV6NXaW354PCdoyVGdRHp6vGTdyGD1VwFNbnbaWpnNNTat4vEqNzBpzgQsC2UPnfbSqTk2",
  "key30": "4jjWKtUvaeqiKjybw4USpSHQ4aCJVrHjRo8UJnSvRxqgn4sSPRLJvrRdk8HV28AdY32DehjSjZfbyk3pPPB3Ymyw",
  "key31": "5sfjbc8vEhf1Aqdi69tx9Y6L25hRc3uoMatjowVMW1jEAXTvfRftFnudB5SfvMFNUtauWHmtukLkK6L1sLY1xLTs",
  "key32": "3tBYffK4GWy8DHsLPWdnHDd2Q5dTHUZ7JnPULPU9qEZz9wRmNLWBDVpcufgPi8PoAQq5DZ5Myw8CckjS31Ht9mw9",
  "key33": "PfQTqq8o1eJwc9HApMuqiyCRWTL2VEcmoMb9zkFHV7dTd8ViWKEvP7wSvkh7pQMyxtcdEXwHRp2yY5AXYgX6vFC",
  "key34": "5Byw8M5cAhuRQXMnsoshMuutNJZdSbRySJEjowxcpVqExoekZfPYBPiA7FZg4xa7YkURRDSAdZL8CSzEAo6xEoLi",
  "key35": "4pGUx373hv23XFYkviSPrig9CgWBbW72JhjwnTPEph48uskPWsnWJSeLoZ33HspcoAv73nR4xYn589bLWeZTyzPW",
  "key36": "3meJJjoXFLjDGmvAeb7PBysi3B6Dfa6RGDbBnSSmcvQsYuXb3kvtmj2nni2Y94QMgJFh3qKRuvLTuxCpaVtKjtXr",
  "key37": "2KNHEGhwbQJmBPKGyoG1cz66ARiJjXZQ9fru1WhiaR4pAUVefPnW4wY1fDpjfmBp6UFJwuz1yXBHWDNGpkXtmrXp",
  "key38": "5byuPNtp6LsuBMFxHyX4A28R1DANfctNrTJhHeoMH3h2nW4mkZAH3BVFg1Az2FHXAg38XKMN6qcygCJU5du6LF3n",
  "key39": "Ff1Q1hC6UeoZSqmTEdGFQUEgGAUQi27eWvKaXEV2E4mM7tXP8fdSctQcTsmoBQxLJhHoRDjWb9Dw7HKjhtrAzhk",
  "key40": "5Jrjy3Xt8kWUAbAchtQ7C8qhGFyYMPYNyH4RxkmkyEF5ZHmmK4Bu2j78buzMJoX3dSGKVtAJH36NS9NkRWWpzv2A",
  "key41": "Mmt2APcVpqHY5h2j3z6YzwmWDUrH9NSd3UBChtsSjxPXWhkY4CfucmWz6VsWzpzapmkAi8gUURB4an9mi3cBq8W",
  "key42": "bv3kkCtGnfkz5SRt7XefKKMB1ahpxRR9vUXVsbQreF6CmxjF6xPib7SiknEYmuLkPXdiapUkHhCEU9v8oXSkaHc",
  "key43": "5TocwV2XBP1Yesss2wd9BWq8bG5W1p8VQ9Z1WqDKsiuew4xksBFtMi4BpnDjPrR3pM59fUwunobGbY2hxg5rqRPo",
  "key44": "WrCf4nQmESFt7Nskiszge5KZD1ApYVgZu1qxVwHr8BVcix8mMUwRgEmUZ87VHR6Mde2U4EJ3qtRtthk7Fa7LjGz",
  "key45": "mNAgQEP2aEdkomLBniv6XZwKfqe26M8HSfyrAQtk83Byadb5FNqihYcyTtCJ1HcLRn2tGR8AncMTo1aB1TkVHtL"
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
