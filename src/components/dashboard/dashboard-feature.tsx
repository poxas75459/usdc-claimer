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
    "366A4fRybSorPpZDgxh19DERspgcdhuoX1BMQQ776icVkHBSBiD2UN31nqd7B6WXvU9DRj6YxECQCGJM91HuQfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NnWUj7Zu1xQhBfg6fZsPJWAvAGEvVEP9sQdbYbPQWbxxX6VkfjD7BHnthHtxpxAcq8m9gUHnSjzVN8SdN2XyUi8",
  "key1": "3KZk5QnBn1B28nh9VYdkxVxNkxTsR4WSqjfNjskXbf2gxMjB7s23xL2n7QJF8ZMakXfuTNgms8YEuPHMV4KPcizM",
  "key2": "2UTtSbaEsxNa8wrhrDpMFNomifdVrvySAXHoiNtyAh22hzdakXmei3bfiswLpdUnCJz32QqdrRgBPUajVEZY7Eag",
  "key3": "5yq3fguhMbiwroRHNicTh85yUMpcR54PafeQ4vGQNNe9XP8eFzEzmWQAXQjqH2psGHKnx7LmoMbFeu2pi3HUoGXs",
  "key4": "NGRuJX3ndFn8jWvUSHejjaARV3kjxrDiWuKVZN6hsCEV6Gv7zJcdAZ8tsnjrimW2c4pMTeojAUC2pEwCPTzFuak",
  "key5": "Fv6YicMCrE6akZa1p7bBtFHe8t3M2QqiVgVUNVkKFrbipdBTpBEyQFSHvZrQn7NC1ZzgyyxxvS2b3rfurJa1Xsv",
  "key6": "5ZXn5mqDANkeF7RNuY3ya9ZGBENMUbfwRVVb1X2b3hzLADHB1ik9jZoZqZZeiZN2VzWvNZXZkzuiYc8MfDA51tVS",
  "key7": "63z9TPkokoa4ibBsEiYnm5U7yE8CBiornes4gBThLzpHY7Wjm1QzkCnrZ1qu68Hoep4eDjfVgAWHdPuS8RKeLVg3",
  "key8": "Y3c4ikPDXytaQ3DArAxQhhohnYoNYhyepFTUPDRWfs68oyaEWMhbKGZ2TRueQ3CuKCwM4ejhZRv8APaSTJUUDx4",
  "key9": "2ZvW4YETqxvg3r8q8HGP8rbkYMqR2ETPVBFYb9NNn4aizk5TyAoRWsJ3v6TGT93gJpi9f4AR2HHx5qpfJ8aMk48G",
  "key10": "4XN44m3TXfA9NknmZ5vRYCXP7ycenW2pzpoZ9cDv834D13yCJsHQ57BWZ4Ptb8R5VAYwr7FNp2nU8K7qbUib53BS",
  "key11": "YpY23XAprsiaVSvRAwBATTtzWQ8zRQB8YXFSXwo47Lz9B9hwJQRKjum7KxUFBdpSeVUV7PSSGngcBKmvUQ3D8zL",
  "key12": "Zt6Vz5zUWh4wgbBkkRygqmyv1dGt9J8XGSjfjqYTPnLmzw5q3JaUTN2gSZLTRuevDa87RyxeCCUrWbM4AzWd9Wh",
  "key13": "2vPitrdVoH5PSzBXauZew9ZCgbYXdsRFdS8DKkzCA1bronqGnTtJvVE2vfQUJbxeYx8fvhRSw1V4VHA89UYMCeRP",
  "key14": "3tXLNgygmV7CwKaY2Ay6KVKQ5QZaapSkoHF6X7R9g97cTvqYPJLBkeyrtuU9azxN7aYEt9zLSmUJCmyh7vMa3iGf",
  "key15": "6C7dCewSbVKCfTdAFnFQtoQeq7uMWWJDcsWcQZ2xEEb3SAWC8uXeKEgDFePpWAqEsMEkH1vrRbyajhuUVM2V1FC",
  "key16": "3Upqj9JQXmSoUQYAvEBRqXsxBA4yKAHLqpaYbcHW647Ka97f6cpDmRWCJ56sG7i3vPv1of47wFjwjoLcecCzLN1T",
  "key17": "5UUpzNFJucZiHwdtDXcyFDAZfcGk7rCzGPvmmQEYCRW2Aydn58wX3dhu6KSCeN3PCXmNTHAuLZeKA1jE9XiNhpbZ",
  "key18": "2L7JcBCBH72VMr1mf7KsQ5RwAS9C8NaxmMpUT5Zvfdf4YfejdH1rfVXBNDW5cBXYHMycuva5mcmQddshckgshzFC",
  "key19": "2ze2mF1sFUZYFuKUXZYJYC2wAAyk9hFYyHTnBGxUPTRfBYtaGBC4Zcf2b4CPpfAYBvJMva83QM83eoUKuWgHXsFg",
  "key20": "3CtUDYHjJjXnXmFxGFHUVwf4kMF6xRRnW99ZgyUX8me3p2oTgzBXD6ynqgkqhcVTGkf5hanKSLy4RhuzneU9T3F9",
  "key21": "2zdNTgo4Vtef7NYNoj3zV9hWve51CxUPU4dV1YCuSH7b4xodD3MXqgtRRVMJEqaQ1XFP4ipnqpMGmCaSMQmpb13y",
  "key22": "56P84q6enj2XLUCsDJvNXWykpsZ4kpSkRv1XpMhSGaiVKHrDGNXqWvz3qpLx4qt5ebxWtjCP93d2bztSs2g3qrKQ",
  "key23": "63EJ36WykwLTHgbbUCv5SpfaCm1SCmUU5bA6n7fVwG18vfPZhEGuKGdFVg7tQffWasdg8fhQNsyP2Ra2FgBvY86w",
  "key24": "3EJ1KtUqxnYE65JJXHU7k2UB241nf8wE62kYvWZcb31HPxYF7ZeZvpNYhivQWWHWWvNxVpkud4iQauq1pDPpipWA",
  "key25": "3NHu8be3QmeNegMFnwjXecYcrCw6mDzZRVxzJjiDJCD3GPPLJaqvmmayC4QtVPxY7RYsUXRgBTRpEh39tNMNVrxi",
  "key26": "4UALyA4merjydXTRbo1YbEhWfQbtqDnBYJLmUQofjCZyDMmEjZDG5CpwnyBcFSsk5ktQ9GaEWTiiKWh6MnUN3eKC",
  "key27": "265R3GWAYEWMe3dRMc9jS8Z7YPKYSwgrhtzN8LD43L2ZLVZLvJfYj6B7mUyaG2zgM3xVfpAAMqS9pVV8wCJQx8PS",
  "key28": "3wEh3JhRDT9qYzw9Ft6ypAJA3DPGtd4NuiwMwwtX4ee1UtBqFFUvGSNYabvyWFgAQYiQwWcL1P4iPsjE1WArWCkV",
  "key29": "5F4beBPTbUEH7m7NgUC7NTTDg7Qsue86jiBqJUvVdrbQzMWXWDeYMdNBAkNAztnvJeYT9uGpikm6okvvZi1NniQi",
  "key30": "4ksjveHRFj9yDQSZ6BzBskvLNbSGCNtnvRZSmPrXN3gkypdnaUruqfhk4r6xWQDcqnByGaFwhskDmEj93k4umC1C",
  "key31": "231s9AagWYLH8BJBMJwxkL3AuGJxH6Qatikuky1kn3RcuGGz6HDrFx8mo1HHEB93p86e3oA5dyUXeRHB5G1pe9pb",
  "key32": "37u8XVd9SFugvRn4dPpMnS8Xk8LJKbwin9t1gbNJ7cUXYC4QrQpU5LmamommJKQngYHzbkoDhiUYsRUzDnaaPBKF",
  "key33": "4vr8qk8e21uYESwp9aB8SEJheuqMZDLbFTrc2NYrTowrEH5Bwb36Hooa8gNKQ3NonHK3NK2k7mYBp9XF5LyDBGc1"
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
