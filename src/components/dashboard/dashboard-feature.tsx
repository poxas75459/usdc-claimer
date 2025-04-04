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
    "42kB3jnWKafKnVBYACgm21XxqUckrzgHmrYwkb1zw4QMYkAoQfDz1D6ae2cobrTDk3bAZmQ6UcLpriEgzZiXq2wQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53dU2s2ze7Ps4rfXa6u4r3KZaH6LKnfV3DyWtz9peQ8NySyAm1C6H9N1wbGCDEurVHSDKpSmx3FNZDpSvZwoXQc7",
  "key1": "2auzW1aunu5F27iddZEUXnKkTUzJLabNSJfixC6Htf8eJp4uuozoRyjiRpncL7LrsRHJmga2ZNUxw15FS5SCAz8a",
  "key2": "5WCi2NYHtXxsSSyGLmWJnwLGyoCDwCJX44GxyCws4K3mcHyrKMUjjRoujRL84Cf9jnHFKVwBprJvFEBx6Zasfaxz",
  "key3": "2JcT9iGnjsE7w8SbfgCHjDE8MdCYJB7h3ZtDuKtWM82aW66PL5TGuWPAQPpuX8cMnVXtNRaznCFLT4zNhB78HyUd",
  "key4": "6FoXzLdhUC1Rutjk8wM2noCjzDVefMjdQr5ZAZwJ2SpwdQUAmHRN5YBt7UuU1DLGrgL42MSnqxT91eUa7HzaVTq",
  "key5": "3MzMix1ukw7kGnfEomQtvWJKbotg4VBpEdxrMuGQF919ah8AgcyuEp7FfyppnT8eKPK3JzFCxNWosB4MwDCwHUuN",
  "key6": "56WLgpkgrBXRtyH4J6rspeYSX9vrXfSYT9LWNTAwsZQaNvBSHkXsuQZzbdVMoLRAJgzVD7r8W9Va8QKz8qzJtUFH",
  "key7": "58ynR9xawd32iUEMyZdCRFsFjFxmofDeTUHWV3EPhSvrGaqJuwGBWTxN34U1R7JdLqaVck1y5D8sYgTUf7ReXb9C",
  "key8": "3uJ4r13imenC6QEVmC4cpgqMPKmZaDEvP8njLWQ4DUzF2ar8evmSR8U3Kbnpc4ReNEkmtjUjRYf9U1shKBKxiJ1p",
  "key9": "2wqmwT2wYKFHVEhsjLo2MzeF9uYNkTEvqq84U6YJXGQJp2fRgm5nnVKtDrHtV7kwgxzdzz5uYE5eVUqBp7FJmjwd",
  "key10": "3bSamjkX4RNE4GMZNrTbwM3DYxYC5EopYebhh9r14fz2NbeckTLz9DEyZETNVtLyBFR396UUZBJLyRtLwNzyCzmn",
  "key11": "2DmgHYsruX1gLCPZgYqcj9tmYjjjMAUaXaHQiespYLgfwk6McCZSctDiAERNv3ZSniDrkCdfjD2ovc8WZ1WCsStz",
  "key12": "4CDKYpB7zCJKpyjvRtweA47QsMBzSGdXu1S8SPcXEPMuQ2NgvuE7Ve7LPMype3MeaYUkL6mv17SGceGVYYVV4o7N",
  "key13": "3n5ixEvBjqNK3XNA8B5CEzHqDerUXtUA9nyvgKJEAaFLgvM1qdRLz3EmpPUZqZiFXMCpTZf9SjCmLiSHmokdkqdg",
  "key14": "2D1iWKvhN8BySmhe4rZF9DM2qL4LrHxEaKK9zgZ5K6xZCdqHprCMJgHvhNBR6m3JBxbkbNudtzx1WXMuP87ZwnZk",
  "key15": "3BFoj5t1c3MsKaD5hvoBi6bsyBaejJyqeiZufuiJPyZPYvz52dn1Q1hVCRYoaTYmiK9cMJoGhuacSApbDig9bcpn",
  "key16": "5SfbFpJ7J4yA1Q5qfDsqdsuiqsdsfLcv4XdkDjFtj1d8SyrBaSxUv9SDPj6NvvuEZYz2MzQWcYx9ooikpdueXdED",
  "key17": "24kof4cPdYPPKGcVVjgcfZpPvhy1kufTJ9G3ZikJQ6N6mc27fcj2FsvYLRzfTwXxEcNyhPwewhmBKgtfpFwDuncB",
  "key18": "2c8SSMcyd3cJtgxTEsonWdpeH9B3uUZ2Zp9DSRGVLwtYmMKW9B2oYQZ6AjWrPmG8np6QzQ5P2cxyfD9NCzVtELMz",
  "key19": "5A3AKWxcoBi6dFqCdgkUK1P7stzfZBJdRMLCyxPKGbuzq7bAhfBVLC3PBsr6ZcbC35ZuPhMQaS672q7sdndQiUdy",
  "key20": "3kBbT4M3XZbxoiNUZLbYt8M7tMzDBtc91RmN4eGwXpkVXyKzzzKWMXoHij5VGwAFa7H3vqcpBbHMAJj4iRePWFkG",
  "key21": "4uHa6ttDahmXsd2QHsAFoo7pT5QQ56kGM8DRRsiTVqqVFkj9ukPoStoHmsGdfvT49m4rywZkgVSgAxb1Ntt9dmFf",
  "key22": "5yNnV458fPtCsDuxMDYV4fdKJgGzxfRDyWCDwzSdJdzngkbQvpcYUfkBAHXr4fe9UTTXKmXbdn4MA8gnSEZJc6wW",
  "key23": "4dJjgH58GJfo8zW5Lm49nJwxtnRvC8ve5jU3dAocKUgziNjxKyyK6uFFfspbrQki87Bk1ASSugcUvzCqx357azw2",
  "key24": "5svNY6APKwMvHANLibjARgazYjGKpAMaMJ8NCweYAWvXkZYK54dQd2YyDq3xdfUwDaCSawbjWT7p68HsczX6opL3",
  "key25": "587wYapNpUVps1uuxQkA7ogUk5785hNdQzDZLXMMUC2hvgGJyjpPYVrR2ni5wqaASv1EWqDgFPGffrPnc2tnaP97",
  "key26": "5VNov5pE9jdVgbwsyckeHqm476z75VXpGhkG8yoVyaKNj7TreruJtxTinp9CiiwL8LYLaTTsMdWWoKWkUazBiT7g",
  "key27": "nTSrdsnLaoVSgaF7jyZpBFbdsBZntTuNsGLaDDtTXpJuiKMkZn2vhGtq7TefuvMdxU4YTvXHDBMgU8R9hs6Qv6B",
  "key28": "3XJvxbCZEatDkEj2Fe7v4AT8YZhb5n6ce9isd3sRe76BQTky8qHefncqw27eHDbLyNww1UgbSqECT2SDtmg9yU3L",
  "key29": "3P63hAxwLPZUbqJukQCZgocdEdpmosVeJ5uHpXbYHqgt7kukLqLpXHRz2c7TmfDkitPoBLVCPjtYMgEcH55ka9JW",
  "key30": "56zV2dExjjsGiZU5qUNgZDgwzuQMPwijAca1ChRuuGXJLoZGrKcGee3ovjGZxG9PYnQAWVpRrTi9ZvJU5VxEamqK",
  "key31": "2DQcjCmCGSvZ1dpsqW4NfGScAZNZJGcsM7QzAWjgPUfLwsWh8WVLGPFvTBwQbvgzsGe7sPULmELQrM2Ym1GoZVvy",
  "key32": "5S8K46FqYzzQXvfwryXDhqzzi9WXJ8zHVy4nY29ovPmGekicdNyrWPkG2uKaWq3Q8FWxs5oRXCGeuC2oZ3SheHjv",
  "key33": "5eD9wcP3tVqAExYn1sMGR8Zvcmn855gJxh1i2bToZiPDZqMTgJjs1HmgdAmMvom7Betp9ooQ4z1pDFs68NMYyNpQ",
  "key34": "5nKDxMEd5xpbgkfdV9FhTAZ5cU5a99QhDdZDnij3sG5yNavCBHcWW3egYUNLJG9GPMNgazxhPHFR7UbdrfCeBFxb",
  "key35": "5FGQMiBPE6AciWVMWFAgF2tBbyraeMkuDv4kJHCHC2U1sQKLJ5KtL6Atypkm5ht4SZsQTDLB1wXKdsn4e3jjSFWq",
  "key36": "53Ush255RM8p3CamjS6DfhkFBTExNYETEiLprmKkW9TJra94cYKbiTeR7mG1SbwNQGnwcPEecaS8sRvShWjQwgi5",
  "key37": "5Vi6SVFerNazLrRMgjs5kCskpgg7cUkA11XT4TtjP3tb4wLUTz9zNFcUQyqiangj7rFvtXrhJrVvFkZ9dUEbyXzE"
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
