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
    "5DMoiMQE5W2mUMQg8gE9QqBpDFqKRvQT7bxxzuAnK9nDL16vdXPF3TjBvKdyon87uQQx9Ad66BN4FqXmPGMkXN4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HDHbTwgypWTTXkcffRSZBaHkWmizd2PNpdHECf5CD42cgCkq9gkBkL7Tur6vvYswKjSPQZcVzDtFZxZfjbNYAza",
  "key1": "2ztpjodbsAnzZQSS22QkgXp2G9niMLssePDvJbNipnSAbCXZLuDbfYsTdRFtqgoVMvgEEwEeMM9ZgAjPVfzszUAq",
  "key2": "67oVdrMTKGuq5UESThYfPPdmrg9vbot6BRdPUMMFyrNeUvD2mhinhpogM6NndBMiuzYERwKrjsv5xJeYh7g9yks7",
  "key3": "2sHV8AxWA92P1rVCUeD6jbFofR9LAeETgcYAVw8S4eTbe3fin4cc4xpVhynSHVaaUL6sA6fo3jrLw69z6WcUEGpV",
  "key4": "Rzzzb9PsafCmvSFHzC7UWRJNWkSrhHECxRkDKjY8DUVDcxvuXMi94WaxKDMWYhESEizRgYKvHMnMgAShcjA3QeL",
  "key5": "2ZH9cAijdTsTN7fyQaThwXNr542V76MBeeza4TpVKzhZSif74ZQQnY6ahJQpTV1g3T5AF5UwXwgD6CBfhS2UH4c8",
  "key6": "4o6cCcMjxxof3h7Nf49gBTnjHWvbP41YsXKCEyXrkhKoHcXb6yZbXUvDLsSGiopiAGocwmpt9YfR3nNBPamSfRGY",
  "key7": "3J9mRsfkcrkmwaRtsbKnMD5hJRAvzf93EM9wHtFobN3RBp5ccWkNDuPLKcKiX2dj8xyY5o6JU4RJMC1qfEy6Fkn4",
  "key8": "5C9Qrn4EjSjkuYw2oXneChM3zZfvw3622aPNisuXubj4CFTYRcev83RMGVADQQbXg95iMoSEM5bga9sc68uZWB65",
  "key9": "2CvUBpiyKz6Ynw4iXCNz8bEkhRDDRqYeKtLt9KAGmeiGiQfWPJGDxzbxe1H7PMWhRp8phrVPC94hXe7vUW9cwNH7",
  "key10": "61n1h6xsis4bHr8rLTHWpHEwVo986a48NuVsCUWb7iVRm4yhp9TpC9T6YyK3NUWkVEL1p885jkrEDxZXmmRPvQCT",
  "key11": "5yDmxk93nmM7xPbmeR8NtXZm2npfMR8EybdBFUccEy5XPcRE8bEnJiYw66Cmwu5WKB96nHSi6vNfN1qnuxBKiTbK",
  "key12": "2Rer3nnd5rxm8cnLUeBbC6Mz8cXRLMMMcG6hF6Ra4i4zgd9FeChRvGooMqF4KpGvaD2oYt7sKACyARd4N3zsXvJH",
  "key13": "4AGfvDMVjcXRnxFeaNBn7WTP95mRq7eHrtCFBghCLrVaEtanHSKTeAEyA31eZZuyc4tSDK8o2kGaZtjSCSQGEotr",
  "key14": "4yCo8Pb8kTnhZX2F8N9Ynfg6uMtNNuqPHcVwLcQGLzmGHRHPMXx9ohRBpQEgrXEeyD7HNPpaVZfrNngteRH4kJvZ",
  "key15": "3is5MJvMkFYstarixteqgr5UdeG3bK3dKFsqZWTbB352vFkwyGnvuTX2aHySogwyso6EV5561xJCJmp6xuiQS38u",
  "key16": "3guz3ePZonoRNCyDprtmgjMaMh7WpUYY6D6uii9xbX3KUPXhCDQvuXx2ymMqPBZiQxQV1XMTvRDGNSvkPrXW6g8A",
  "key17": "pFeexkqzZTh9x674DhhDwmte1WYkMhDS4XwJYxUEY7HssYEXH45Lcm24cXiqfwKKHSTDRGRvwNEyQe6U2VFx6aW",
  "key18": "5FH3LbzPeJBue3HF5PvvadycRmw2bjwvN2qXLhu8iXFFZc6cAJGFysXjHxBKsKU4AXji2T72TTWPon8x2iMpLBWb",
  "key19": "2bGoAnGxBf8HQJGpiD9bU2hhsuKHTLUMj74SDC6hmDoQcmHjHofvxjnNF5J2GYKu7w4tUjxfffTWoTHDN9divF6t",
  "key20": "3UuFXdQMwfQ2X2687QX2MyrLSpB7Dj8kmJ6u6HvWM66HkJkxezBaNLU1D3aF6TufwkC8wcAMaDh7VHGUYaHv3hdW",
  "key21": "2poEfgnaPLCvPKW5GKbnRSKvB6FStVu76Jb3LNcsUcmSLALajWZvthfmy7yFj7BEWs32zEGsGz7fGBnN1VhASkPw",
  "key22": "53V7YR96Z6JjDvyiYvBtdPrQnprh6cS2AzdXnVWEADXc46xrJU4rNRUDiiYq6czbYZfqZxbnM7PgZ8enHTbJrWHb",
  "key23": "4Y78mGvXSgcduhz7XYBxrHng8v2cxCxPd9whL3ut89fj3XTGpoqDnoSbtWRQTHfi7Ponuh1bjZHRQUVitRT2MeSq",
  "key24": "2mcXTHJBGFYa14EA8EtExYMCNNAv5Md4tqmDnAgyNHgyPArRWPAaTpwhTA95fUra4J5jqzVfPXG9ZJrfcmvcq98q",
  "key25": "2mSJZaQRquhAVSHYoU5DzirA1SQiAQnrHEGWvf6BmZVEpLA1csPrUCzaGXrqoVwR4AVd1Szvp7jeJAgAswJ4fVnq",
  "key26": "3eM6FTexRSajJ7jtN2iR7qfixzkLESm53MwNTtC4CpURKti3aa9XHWh9fGMDcAj8DRHayFeDxGUqu6yU4rkrqFSM",
  "key27": "5nQu8t4L996RqY7M7BpgvehNqfqQgKTiQJCiVPHqzZXuxiT4mhzTyVpigy4DsuM3u5hs3kcTK4PZkLcXEdaeShKK",
  "key28": "2kXqAJF5JB2Yte9fjRxNsH9jeGrV2UztcmZTRkam29gUZ9dqWQinHWNhCgq6d3mxEfU6cvni7JvwXY9kxUKBQvJ3",
  "key29": "27AhQSLix9rTj51ksicyJ8KpwjumFgNnLLWZ5o8YLoGrCWtp5jtt6XcctDgHGqyckEPdFqpU2VEfHtKEB5DKFq73",
  "key30": "4xE38XT2sDMrQajPqjedCKX8jEFVn8tVZ92FSz1Nfb2nGkVnd5docJp7iST8ZyynRCZzKFrKGJ6iBvhshnaeyPzm",
  "key31": "3KvBNpHZEaGmB6Kw5WipUiupZf3qyefrtVZhZLbua4eyJRWgrndCyuUT51KfZf8MhPQHzoUe9nt9iuNdLzbNUhqc",
  "key32": "39CdUhSnvTATcDCbtHCRpwKRq7ztjDxmLQB5Kexf9XiyRisNUAqznuaaSPEqrgjydv1kKV9Qt2vvDUo8h8YiPCAm",
  "key33": "4tDK2dxpfBQBA4eBPYeUiyJogUdmub8WufZuC8hX4qU6AgmjNAP561bqvurxXJkCNN8g7qbq7aSiddVwSoMa1LtE",
  "key34": "4vmGWGFbvNYmjn5S6kc8tzTMFtjVL99e8tttSTvpWp5W9kxGd9g3mDyjyPnLFn1jidbLRPiGmTgRu6ARdTnfRYkV",
  "key35": "ocoh61SJUj6sJhm6yx4VPkJyBqLDdkALbHz9xssJKgY3ZDeoKfa3yyw6dqfbQFu7v5ZLH4dvn67YL87WF7EZ9JB",
  "key36": "3si2M883xGTnTDmvfvzd9U2uWw5fWzYCdYhKKDwn9prcaKmCn1UKyNLGHZoxnttTYUjpKHgCjSJSopuMVk11q3Mk",
  "key37": "59xtv1CGumH1CBgMT41Vt4RsBKpz9peymhb19qR4j7nFKPQ4eueFcmcMcu9DRvspambmi8181BPj24JVxfb1ahpV",
  "key38": "WTZXeewjwcvZJ8EA4BQSzWBu9yxSugzM8CbJLx3kfjiM35m9Dm2EjuBeTVRe6g8mVLfvPd8jzEKi8P42F1dvNYC",
  "key39": "476TAy7nRtRspv9Xs2CDxM4x36J4Zf3NBAFxALWHzST5pLqP5iu5J24nYuU8Upptsfz3gvm7XkHuJ1WinTc4cgiw",
  "key40": "2w9T4aCUKNyNw9QMivdoownhKBGZDTx6dvQ7F8WMnsJrejV6sg9hRKMY5ApEjQNuuYiLvfSBEUYp7dgwTrcAczWz"
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
