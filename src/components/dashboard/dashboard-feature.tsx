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
    "4mKWueNUwh66JjUAdYbwZtAwmQJcv7vZfMq224sgwFyToCDR7fLhzh1bxFPXfTrJZR5LAXP9mn9FrvK6cfPwntUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64zLEVJvH9sm8QC96V1SSMP1RC1yqvxrZwBXDNFwxE8J1pZABeRc2UGf7ST6gV95FrkqNouzUbZaWCB7mYKUywsG",
  "key1": "3JCa4T4A6pdTLZvyCYzM1hedspj1AdTQRYKJfYveS8djRiofoH9KnAQMeoUVszwANvLxzifwK15BY6J6kLaV5eau",
  "key2": "XN5VsBDvwm5US13vPm137CiMzr8N7S4vbc2HiTe4rmHkzxSYCGc9oFRZQoWUuXTCEmjfdpGS6uBKWHv7SYvjYKJ",
  "key3": "2vGgmJVoL9G8YeVsUTCUuTfyVvnB7n9TwzaTpnz9ihoSZAYG6jLJqrWgskGh6c1p1PaE6yA9guMtjJLRoK6BWJrx",
  "key4": "4HpSZCm6eU1qAHnSxF1xNSEXs1vgrA5GsJtzRF3Y7yqSvJ8FpdiqTEV5qSe7p5tjZRTiJWfKoXepp91BmDWWCdgA",
  "key5": "5xCD2SYE6MbN27wDnSSPTd3S3L4XXbHxCdVLpd2JvfPZreJwjyR2bVUWriPQ9p8diCAhm9PNXm3E2Fi2QDkjLN9J",
  "key6": "4DSdTSg776zoXEhXihKE5XQR4BuGkynrf32yMTDENUbkSctjmohNd7WR71q6zz5v21aCNJNp7m7H8Y7CnyLXEMp5",
  "key7": "4HNtBUDxvmP2fkMfRhrbykxf371N5oxZsLwGZk4DYfppobtP3EXcViCSgnig1XhNd5cN9HKx1fGhWgXJYjQJaZU9",
  "key8": "5Ezja5kGEbAF9AcGGV1pXaJEJV4R2cDVfA5hTGyBBDZtuFfQq1hJ4zLmewD5as4Qizik17UgR8yhPfXwxNcQEbge",
  "key9": "5ufY28FbVFDE2iHYK7qPhT5PXf8SFPS2FMpAtCT6VDHUBxiNbpP4wvBNdjzhjXnRvvZVS9KWnAq4zfWvVxjD6XYs",
  "key10": "5u3LZQGPoC4Gfue356pxegMLYgwjM77sqQ2Tssb8NtJ7m2fRNmesApgN9gFL7XyNctwkjFxYVNeQFJfYwmzLRXCN",
  "key11": "3CNDmw5FuSb6whUnQxpxrhXNvEkcPLY4wgcv83XGBky5grUCHqiTHRpsk4Tgrftxfng1Yy3toph9xyawiXxBH5GZ",
  "key12": "5xAXDMfLsZC1g1xJqTJsN18rCM3LbsKaUwiQF6nSNjAGZV3sju8qTtCiXR3YDxEPLGFhGCxxy33m5XWhF4TkRHog",
  "key13": "3xh6k3EsT3ZKEv63VNUgPDMB5G9Poavg1FzXeLaRuRuanhEKwCfaW36mvzvjokX6SL62uT9jgRrs9LqyA2pS5VaU",
  "key14": "2awBHB7uLW9CycmC7g6NrXWbvX4MNVzdkGKNNEJujBAJnqAmxq9qgckjBpxBPX1r9NYm6tS4L47ZCaMCAeEQpnA4",
  "key15": "5PxQLdZKqZM2Y2EcQECkWFMyuU7a1XcJXbbYBVB8cKJjLndAm1X7BYp6hHJCxwAcoJdpgBoiTrYEfUBDBGJZTywP",
  "key16": "5LvQzfSZnypJMAZMJxq3KR151E5sa2EXeEtLTN9yXus6mLpygJxxRCux1C3sxSVDqh4bdPq63dVXTiZFE5odw5rE",
  "key17": "5NmWv9UYBmq8cmcjHiS1KhAMDTzNXT1UNjG7BTd9mcBjp6WeGwW9qUZrPjVYcKB9b1gg7DMEEMbwcX48sBsrafCo",
  "key18": "5bLLHRtLUumNq9woN4KtBi28WDDD2q6AwPghqoo1U9KEwYNZN7KLWynsKTyzzHXc6pzLiYs4hndvVZFnvXRWwBqf",
  "key19": "3oqXdDQiYNNQj74dvCz9fazpYAuNMekUj6D2iT1PCs8H8DgSuqRaLje1hPoKmmRKQxLidVtGtwD51vUqq2nzPSpA",
  "key20": "5A47pkTsA29QiqG3aaYpd316tG8Ni5yMGj2sFQLXunxrRpf8vfaXoWJx8nNzrrW3zpg6WX4bdMZxLmtjqfc8mR5G",
  "key21": "3VxpTApK8AZN4UNTtioV9rejc7SUKYhV7TLrC3h4xLKF7sKVDF3QUXB4JXQDDJWpVL7vQUkgiN65GpP1Q3fH6f7i",
  "key22": "32zB87JCS7c37qoNCmmX6xfuuw3udaaznXQe7DumfGPg3Cskf63HkUnMZQnWhp9q3JiLJJgLudDU7DLcn8C2jnA4",
  "key23": "2wsGqgXduLkaVvtjPNytgrb7tAzpqDTdXqjnSUkqffvpLtjrDUtNF6gvuXUNVJJBYkLXMk3AzT4dhJrZJMMQ812J",
  "key24": "2MNfpvsLNnwufwfkJfC2C2aX6uRm7medG5yAwN53zyN4NapCF8NCzsC6gzoP9TK3JQkA2R1HkdPkqqntjGCyZNab",
  "key25": "38NvAm9YmHcTasu5mc9D9oKKzqF4ytDwVY1fUqSVPs144ChrwWJ86WbVUswatoY4ucCTEM2fjSorjJaCboNfiGLo",
  "key26": "4oFDw3aMHbyoBnWzKGSGS9bvkJWe8WgJAmC8ukNrkVxsrXdXwJwtjpYJzMQT7tMfEHYx11XeQ8z3BFtzyhVGbETi",
  "key27": "4YNhkRdnfA4EWMLx6sU8GyRuHqYvxYvAwWz6c92h7GGd3iJddDZMtq6p9vELWjGQNKRQrdD8RAoJksxzsnWBkkV6",
  "key28": "5ju2CknVi7gd7k52KFZHpEgQA5JoTfuWZkLBKPTPWCzaL3CUwWvRQTMPXBkqRA5p67BrWPNkhVeYkM3ks8US4YCZ",
  "key29": "2ZTnfEBZiwwqoXsR6ktyMkRxQvz4J1Emm1h2VYRXJywTNKWvscZrpjadDRg4c1XevvVmxj1vUByXeJJoQByNqPNS",
  "key30": "2nrAYVnbQZTj9g4QtBz9egYYdda9i4KBCTiHRaTxJbSNwrvyUj6YfwXmorKLPDwSpWUA43FtE5yvXTuuxFfiA9fw",
  "key31": "5aVqD1dn5Vgr1qWph5gA1Ju5o4Fkm7kQXpLzdMoTo8dBx8gFm8ovLtRE3ywWcSSYXdWUEJZrAhukC3B8ZpzJsva5",
  "key32": "y9h5pbs9y9UTGqpARydNQSpNasska1HoKtVK3qdpZhNeei4Ta9XbtYKQX6d8LvPrXnTuGKrQHxfPJkxMqDUsFDo",
  "key33": "2W23RjpBLnXS3nKRejKdNPoyWRC7bqq5Ucc1vRRa19jMWZtmdeFiYBuPDx8gHXjaqoGTSCNPdWgfSPK4dXVx8fvZ",
  "key34": "4Vbr7kwBMSAsCcR1LSBjmiH1gdHrXtwwo3wTKw8r8Lo3xKLvmFcV5wSWXwK9AQzHa2UhFn66PNgUCCRt6JX1pKrM",
  "key35": "S8E1N8VeCHFyMGYopy2fy2LeQrSN6xahEVGqAT5NcnMngKdtneEJ1J9f1YYTa5tseWSSbHXj8nhUvJHFuBwxcjW",
  "key36": "61UBsGzPatfVR2uh3qJiLhjuKhrKJ7bYRfC9aYvjm3dqWspa7d8Hy8zejnkjo99t9Go6kvLYMgbuW8vMrxbtmjcV"
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
