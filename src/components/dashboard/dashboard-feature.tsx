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
    "rheru6Buz5C4RK7SMUdDE8rRnsN8fzHcx4ttjvTchcGXzDXUFuHi2MLKZnwdGWoeFEGVjxNC9fsgb31hqr9U9Y5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bWKLQHcao7XmcRip3hoJWQNiwFEjTQfvhfHwmsnksj9gwfFwkvXi11RN5YQ26EqHBJ5kgPWt4x2PrbyK8S58vLa",
  "key1": "2nmkZHMR6VgfZSNrjH5q2r94gH4SkAQGc4pGig9i9te3fWKdncQAeFnRvhX7qvNqjbYf8pddcJ15njdtB2oi13dB",
  "key2": "2Yg4js33HpeQZYNp1RoCuJNvTpjwPpP1Ad9AmnBcSQaZ8sw9uXe1KTN9m6qUBAkpoXydZQidj2h5nrvi7iRfNaK1",
  "key3": "6en6kRgMbomrveiDsovxHYTgMadtNSqjfUysCNUsdx6FEq3YvQf1AFZ66SZsxnL8ixLFwhGESLozAQxMUCHgiQa",
  "key4": "2wquRuc19a73K9ePr4WzSS6CKiTMNstfynzFw3fSDGF7cyfSWxNP2zyy32ud6qej5jcDyNXVBLzZQ88jBEFrb5md",
  "key5": "3QuU1ByVhadWH7gRe9otWPXeLkXc7UZbMmMWgECf36QQvCGa4HuZ19Vb6fJW9oyDxvoPZ9aF7GyicqGw9fCuEB9F",
  "key6": "j7n6xVGPLfJ8ssduHremYpVwmdwuh6YaqPB9v3sg889z5vnnVGAU5ZVqagZsJYcAtiT2HzLNaa63S4QVvfvD5Sf",
  "key7": "2u4mL1ShMdqV8u78shixudq9eJfAz2pfkzPtqVau6Vd9Md1P4LPQwbQjoNLmwJzP8TjEkpJVg63RrXMmZoHcMiHY",
  "key8": "22cPcNRxpDWsVizw6wYxhxstvUp31Rjk23mbFxi6wEcm2h2xCSdVFsqwq76HhhXUYtqCGnK3ikLJauRKdaJmWD3u",
  "key9": "Y5CK3ueHuStiGXSCE4bx6hvU8G1iYrh3MCprJZCd9aLLxXJCVLhntLFei7gNeLVrTBmBFR3xhe51viaYDX8B1V2",
  "key10": "aj8d8ETjQtC3zdQkm7AhUGBjoRi2Nd2apfBhwfjo96B5G4WwmbL3ne4qMerbd8wJ9zfrf2g2mNR1CdV8qGKs73z",
  "key11": "7hC9w7ojuZiZjmAEyixsrEYZ7ANHmth5siUe69jgxrxP3Qum18AiZ4d6LNT3PaZjmK7N8HoCzNSwnm86PZnawCy",
  "key12": "3kbvHCVPRzF5YcTiNBnHtNf84LZHGSpKbt6PFGEtRwGVgDR9UcVsFUZeCuyxcnQiVRWRUfhun1pNvmugC8pnXhLo",
  "key13": "56DQatPmRGDHmudeJStaMFbv1TZCvxbTonYcYc9WBFt8rNVR1M9WaD8K6jRWEhWwNb7KJGQYeL6pdv4Ktz4GMcVM",
  "key14": "3eCZ7vrJ3BeN4KpGrPoSpr8wReShqmbinfdzwqQb6VBP8bgkAKy74vRQE47zhUcZJhxwQxk1Ceay9jGNjuBuKzeL",
  "key15": "4MEsG8Bssbba98Bczih9EtHi6N7rd3XJcVLKbDbgSKtet6E1ARGZsgiQMJpdmgAdWmsjNNrqRGeL1uKW428AXkhR",
  "key16": "2nbb9uz8hM9xVDR7ERFbyWUw2XZdxpJrexWVPcBZBVvyRCap87HuMg5LHog79JPax6n7kgLvpn6AS1afi8MyFRiL",
  "key17": "2kk1ppwQ6hMHp7oqrRZmChCae9cjYCXGowcDtpBk7sAxG4UqW9W7yu8TMbJQKPm6PjpcyMgCghbRQ7yiv1yztkG3",
  "key18": "2TdDtvCYPHwBprsZE4ophpMUHR7Htb8X42hcjWY8gKwwqfWUYP8xLDzHMiJpxriw6MZPyhTrrdzx7AaQ6THZHdD",
  "key19": "3LdxWhkYcg3F7FkeHoWmHiQrTFjvg4w9DV1PyYByvqdTygGDG9193PYikfJxNjVLcuD8XDvyHMmef6ov1nprzxhv",
  "key20": "65ueo5c72YSbA6bpJgKhoADgxXKGJCyVLcoEahFD9PbWM6uwBzaVR3RNBqFGaCEsBBVLhRNkPRgvmd7PPUZZVyA5",
  "key21": "598htKJQKVhN8GWNKNbFe638UyK5j1haZ7hEYBRgE7bJhWgBgHK2wtiteiNiR9kA67XKazE5uGjSLEgZH3qG6gg1",
  "key22": "5xrvxfKjUVd3aXeEHkejGUd5Pt3shpGUwgoYnt5r4GxyqKnSRCvgjELGFKnWydSXcanjCcMqEprNqG6NHqYMCNTC",
  "key23": "4urT8UYRxn8oZWfyPCUM1mMdRbv5rX6ZDNhyhSAbAf1jbjfEXziRsnGqs8ZRcig7L4VAkTGBnhPFcM8wWL1erkHT",
  "key24": "5mecDjBEevG2gRRHF8dNPLnsJWRExe5YSGgLPxp8A8CBGtbNv6Jxg9Zei2PzZNb5251mzxR894jsVPP2RuRzTe8k",
  "key25": "2sjKMuXVSRfCE482McyvawF15np8TimSvqYvD7Zaq7vpsN3gsLt2u9mgESPy4P27RvGsSPjTQqa1jKV3uiurbiA2",
  "key26": "5hgy5qJ8ueAsEH8KN2QGnt9kkLzqZ9n2gZDEL62Q563RxyH1UuwpRZxW9ihBfCYZQPsGXaP4LAFmGWcw9BvjZj3Q",
  "key27": "5d5CVT1fBVax6e9ATq5c71LokXtnXcyJymmRAMnncKYYJFWLWhsdQ18uSEy5bgJWbjP24ajEpATintDjDKKDpczA",
  "key28": "3jikKfBXXYHLkeNNy5MFuq2D7zs2kwC3Ssm1CbzrUML66WZj6wQrnUPN5D6Gu8BR3DrzFZGW17iE9j33FFkupdCD",
  "key29": "3VoC2g2GxN1hfkNd34Xm6pKMhYunePrKPEQvJWsUyHgK1XGYi3nJPLzPBdYXBT7wvcm44V6YR8QH4WHPJq54z5rt",
  "key30": "us5ve8B9yGPW6pV9NN9QUf5YPoofkSnuV4W85LgX27oaVNi55eY3cJwZDioXr3onkWdEmxt1P5XA3vt1tQ3r2yt",
  "key31": "5iLZXJw5Lh1JHbnTCc2YupLnvavWDXoEHBd95jVoDB3CE1xKKHA7FpMNASZQ4Q6sSpaxi8SxUmL1mJ8tcFf9tUBv",
  "key32": "2jd472EAJqLKS1ggoRcvByxuWfbGo3TApgxEu4VnQiGTjU7dy2m6zPZdmsxrF8W4Lb7QXMyzFwQsXTdmtSLMuR5t",
  "key33": "2HNnKnzqdzi9oU4NA2HZkN5gS7HPYukupV8Y8NobEjC13nAqTUUkWVNFJvx5Cvwi9gvP3evoX54jkK7d8D2scE9j",
  "key34": "4BKuSe7j2SYcHfsGrWMEVF76MX7G5MwyHb2Frd7dFEBMWEJWV2fY917WVRZvGvEkFjDAkJf7xWtUUudQHVmPCsji",
  "key35": "DN3ss8JdMWEBZFYpyuVHwp5M8Qc3aszzhfHRutyhQh91LqH6pBFPtz9wqTJDkAxh74ZQ7gmZtmTnLtgXVf8Rmui",
  "key36": "518fXHUBqvfZqdnWcWMLd6JKGuLA5kVjmsqqpoUH35LXsgd3xbAng2BnoHUNSGGfGdnfNXswEoNoUdjouXHagWPV",
  "key37": "3XZ4pRtEnhhtHitpw4EKKueN8nxHbiahqXuTXy4NJsTB2W5QqtZsrULsUKmccY2Fico6uuqB9iUTZdHCMW8J34ca",
  "key38": "44Js4QcUVnqGf63QZ8QHXhHNezLSa91hqiQmugLDYFjnaR5eDsxAvPb1ugibDWdxJy4VmT8Wh4x6ZYoR8P8m1iPD",
  "key39": "26TeixLwEVA3X7PsYTxuuFyot2YaHk5ofLUAyrJABnzPaFk47ni7DmpyFGn2wrp3FRWCxNf3QZYfXxXrXNrr9GS6",
  "key40": "2AgPGUCDDJP7YoERAgk5vNYNsPrekhX22x1eA5KGSqcNQf3CMqLHbwa1Xu4Rq4nUYPpDhVvaU3xgG5ZQVY9uLLnH",
  "key41": "2HHo5DrHNbqFqwr4XVyhpGLKLSgtZWHfisnf2wwpsC9NVBJwKFjoZtQudZdQ14n6e9LZZRaZhvkgMwwNCPxZZudr"
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
