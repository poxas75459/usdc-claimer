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
    "j8wWzf6JvbDiy6wudwmhHvaFHfK7hCTKk4q9aLM4t6nPy9jJ3jTfifj37BobJsNzvHWXesizfAuga2fT9m7RWTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tqqVzg8nf6ELo3WgVaB3Le5dB4ymxf2arNMp2cPkcSDQ9WUvs4t1AVv5xx9RepESUn1XyefVFkrpEYTpf9VS2aw",
  "key1": "2WHmhv9mESsGu6kq7ThFPS8mWYbbV6Gec2WY54GGt4ub3VDNPbkYgbersXUcM9HXL5KQ5mXJb4HALMfPMoSJhTFe",
  "key2": "5xNGEdmtRn9f59TPU8YcBZHQK3UimN2YXXfQiwGUecQEcJyd2nRckg9dUr6MeBGWjKdyofTDYgBCiKbDqEV6Yh1H",
  "key3": "4DgWEj8N5quGCYQLnv5aM3uodXM3RkjRSJMsnkYyb7bhKmdahFFEy8k6mGZ7pSn7uUqvvNLjfwVMTPcwhruC4qHb",
  "key4": "5u9rC6nUnan3Wc8ovhXuE1qRkkSBsczHa8seKFCWBTPgvhWeXio3MtjrAbahmbNqds9AyiEFtZGb7r2kHvk8EjQd",
  "key5": "252MCs4t2VCZiyKpbXgVMJaBDSUFcTJ6hcqPky6F59S6kui8dyLJBV9q5HYoXCKLQo9motkxAACphDEWfbzsPpvE",
  "key6": "2xMU7Dk9kFRikQ6bo54PrKQvBbYw3krumqrKfAGuvduLb416nBKDjiLJ6vp9WNoKqmKg8mhvfaMoyFktaHzk7Zn4",
  "key7": "2LjHZcnoNd6VLk6NySBXLT4c8EfsgMwboodybQqqyCMtnEJ79uwZAdeCh6hL6coxWUvHn1aGssfoidyMRWHipNgW",
  "key8": "4CgFzjJEFQnQZg9tgq6KRnfcCLmFH848QM4sEkfRY6QJ4WEx9mjgNnh2fXAEj8bAUK871iZY2fanUdCpYY76iRwj",
  "key9": "2zgrH4VW9ZL27ZTRAgX9ga6CbM2Ga9txKhahXHYzGmky6fE7KMehg9LU1k6n3VgQDA8J9WYAS3KWZi8YEBzN1eQe",
  "key10": "4KBZ5hcJdqutMWE8yFDzKJYzQPWkdFYFQtqfcCti4SWM92eRz1ua2eEAfv2imwb7petQ1pfefSaKEiowhVNYjXGX",
  "key11": "pcizYR4e8vHW4PPjBrfBdnAxTPy9psyNV54X2wvPgRTW97dafpfY3KmMzZaacmoJhpX1V8iN6pAYmn12UEEDuNE",
  "key12": "CLF3q8pMurv2m5XrJKbgqeeTRfbhpaWxQtipVCH8tWXK4PS3FsFM16Qd3WNbT9Joc2EqUmidP3sRjaEkc4cwrxq",
  "key13": "5165QQx8HsonVNoR3LpHwGkTgipi2FLT9DmMEHgLjejXnZB7hPnQ1HWB487eT3d6cqfWynK5kfFTUR6YhRtxYSWX",
  "key14": "3XHVHcqWmvZZ8rX1aJYNxnQRJpqjUggwk1ojWLAkN4hUzCfEb7nJUGb4peqpNcYozpjBGpXksHwnoEGfndXttLWZ",
  "key15": "2EpUeQViQpBRxVaByQ4CpJgrT1j1LD9hEoExMDdXU8SQB23dz2BWBDGtD5G3ytXQum53NYKq6CysNKziunKLWeAa",
  "key16": "5ZxqoifNQe31AGfGfuwjwNGs5TuVx8VPXZodVgPawAKuFeazvm7u5RVKQWyMJCydUhfrQG9Mdj51fhHzrzeqa4qD",
  "key17": "2BoHRaJpSJwoc53irriRybbGacBEshQJmFz4pB2F5sPiLFA5qU7mCbkLYLauFBdJRchMTEYfARkbc7Z9XNAGuXJQ",
  "key18": "4S6UGG1XPKR4xLBVHnbjJgKWAhZZLFV4Z5v6xdA3KkqMrsKCdHNBbhxs3LEb8rmBJNyq9PySGYNTniVDsDZqfArP",
  "key19": "23DXroN3zYx5qqn9sEUgz61tvwVvPzjHMMep3m3FWueo2KiYGRyLkRVDkSX4ap2CqBLwFWFLK7gjp7ohUPuGMpte",
  "key20": "hfZth5gLhduntEUNTMMKnJF82FZfByfyeTFVgfqfbJNY43UF78ocAtdZDwS8Lc4q9bHSismghBLmwTy1Fwm9uEi",
  "key21": "2ZAiMortiqyqhWab8X8JvuD9VFef9NFrbdPEJ2rRJ6MkEGSuhhaqGq1jeadabKKSbpLemrTJEJtXVeost6fAmc1a",
  "key22": "3wJ592wWg4nfvjQVpkpYeKRz4PgQNJ3A8eTSzsAL3rnAVXVgNKm1YTjbK5rvN3TGirEtPKWB1eA6q6j7jvTRd5mY",
  "key23": "3cjyJq5ar58ZWSMBM6MaJK46ZC6eoSdddLCC9r7ovm2TgzUXVgtQ3oeCkjAKaBAntwpuGb96io92ydu1q2xNs6sQ",
  "key24": "4MG9nuHHxuAdrvczQ3MNaDPbUU971AsBRYAsiBueVPb5pHoimGh5jM2JckaWT7T51jW9ewczYZ4grPX1YBpskLSj",
  "key25": "4guQe2iPBjnoigLPimZJ5v2StBctUdmMJzZR2gKuS6ssR7HErQ2wAM8qPrNM6h9mu5YqiTxzM3shubv3NTU7gmfM",
  "key26": "273NkYJXpNnkn7awBgD8WiyMW8YHMAiGGu22y7WJ6Gta8NezYfaQsiMtZb7VmuwhsXMqdYSFpVikg6PBQzcqMNFQ",
  "key27": "4RE9kYLzJYRcVqqWhLc1Kjy8e4PuzRNwn5tddqRVf5Kx57LnQpJ32M2jchcDsqapX9NCuCpZ4cEa8gGtn7rde8ya",
  "key28": "5ofeGqPr5oPFaXBLoMeTBsSQkj4Uxs6ubiopphUVMa9sPDQnbD6duXdS6qEB7wKtsLNdJFvr7zgRAxoycHkvhj42",
  "key29": "4CU8uiV2XZF1nyHSJhyWFmw3zCWdgfdPfxnt6srsYvToDuxLjJfeEmwPeU86LEPf6eubiqn1noEwvfVJQu9zqRzP",
  "key30": "wDAPPB1kmnZahbTc9xkEyQf8rf2toP8TDckfw1z5WuRLSAuCtuPTREVVTZsFhvpaKUVfhXaY5n3ZgKXtNoHAV68",
  "key31": "EeeDZ1YRQZBFKc5xTXh7MW7WUxxJGu15mPaW57DCbSDvzny11dUNogde54NxXw52WAGC2LqMeuz4CrqxD4SgqX9",
  "key32": "2gv2Ergf5qXkYTZfMhBHppp5vXRFpSoAzsmzVJohiDp3PfjkU24bzeHf3yRXhhRv6Z8gKmp9j99cSxSsRHfuusoe",
  "key33": "5hCGDT3AntEMYn7nziqix1MRwWPrmC7gxnuWqZirE38EVuEEwXJyXf1iPAdaCMPVpi7vdAdHytdToLT5SC33W5CR",
  "key34": "5585MSzeaeyqtKxXiKSXwdzfwvoNejbAmFgDtpZWff4JReWq6UDVNiCKZZCaAuNjAG5vgjgsZMk7aiJu9BWogfq",
  "key35": "ZaoLYjzjSefGaYktvqqxypj3nQC2NZAAXhff48bRfiyoZ7bqXK1ZNVSJJG6L32PcUWCxtPGrYcaH7aTPtxKrXQi",
  "key36": "62v49gtsUKkPYWFxCuhfaRDSeqmvcRJoLJxYqNPVGM56jGuUYeHyRmpGnJsGd9htST8etcAKtAUxaNHQHc7myWjp",
  "key37": "CBhhnUHfGCEp8HRrvy3dvswT3rGJuHprqvCeUHPzNb8JqzRmuj4YZSDbmUUD37DpeErTZv6jtaKMe7n53tWCJgc"
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
