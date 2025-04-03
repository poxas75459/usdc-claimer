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
    "2HB11RyPfqgMu6q3Bk4UetVAC4GXSXmRdctn1t9W4Ry1woVkuGNBTXtZZx91k7gPJ4GfExcoccGwcu5Ve1bgccAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N6G2vBmuUwbsBVoTGNaJTfYp5aiUMddXAF1wCZoY5NX6nT2JNsrGU1rKK56NAZ7zP7sWvjYm8eRBTwuo6NhQJsQ",
  "key1": "BoaQQiXQgzTMXz8wGXNmEY15ULymrBg1xCXZi2CYKaXQMfVd7iaSgREYBc3WyUZK9nTEDT2UQVj72yWimJUZtAs",
  "key2": "5T4oRu5KSj9XU6Aef7kkTAas7JE8QqKuqgzuGyGCa7hxUc51WkU6XmJ4YXXQ7vevj9Jv3RsbYy5a595a2mwrsxK",
  "key3": "38sgnL9yBQQaj5qddPR93Su7rBAoe7qtrrK53cWH7XQMaqdMZEJfpNZLZvySMMGYX2Re3ySEwVRu2ibddNEBaqx7",
  "key4": "4nfrjceuZYb9ecbFsJtUPjybRy6EMxKS5mPS16a88VrMSt4Z89WEZTrmZCQLrhW6ZepimWPR8N5ENwY5nb5CEnga",
  "key5": "46ZpP6GHJBteG7W6Ap32hjTLNCKG4bJvruMYyoLTDLqCNPzqinWY7S47qQ34pgrMm2AG15qKDN8QRZJxmoztD16N",
  "key6": "4fsHYLGFVjnosSVgSiMP23vpKx2zGNShYHpSeKyUNwfEiQpTzWLLKhk3Mq6VZFSh8BtFi1sBuRMKXYbP44k8Qs35",
  "key7": "2M3bSBPTAucimxtd5ZHpS15tvyiZbMKUKAaUqUdoS2bUidS4A8o67YKMJsrfJ3zZBxuxZrpeZgJZUcvZKMwbztPg",
  "key8": "5uDRcQSCWu7ijps19WMaMAGoE82R28kVqZPJuMuafGVNpWyPzbbVzq1txEnzvx4Xukp8UUkTnmkgwCRj13p8tYn5",
  "key9": "4aj18HnurVwjRGKQMpvVY3bLTcBjUQJgHS5yAst4C7Q21S39ABP2XwTvNhxkLnrQSZ5AMZWBMmtLa3zVeJg6THit",
  "key10": "5Ew8AwXKfa72B5QUpUkG9VugKaBqScuC5bJFQTbXVMMHoCuQTPY48CLxbxq1zCuf3dww1udaRZMiTxq9hjjNbqyW",
  "key11": "5yDhWNhPXgsG7ZgkcJy3sQPttDDHHneBXMhFZbp5TCBqYEnXM8Rb1tkJEg1X52EfcsTCBQEu5RjH4Aqh41HD4f1w",
  "key12": "hPxFgzHkjuBEhVrYdxK21sLdRNXc4pFsAHeY4hBxpnBcNwLSmabNVvMU6LbvFv5gFPd7HeLKK8JZEbJz1HLw3yu",
  "key13": "29zRiFYUdeCKmXK5sdeeTJ9pV5FCSPYtiguoRDenbtAw1mqRw826VyGD7efp4boswFCKKko8cucZgitRaVrpvc2B",
  "key14": "4SJcJog9ZPMqgT7pLpWQRy1yuPuSFcNQHPjsvmnfWouyp1ny7c1fJaUxHLVKrxzT944m3esgaeU5QBQ5q95b1iYL",
  "key15": "354FrZc99iQUCd1nTRSaCjV8jutdEzsGCpqKCBW9nm7krogtMRCYS3ZS5tfjoRt9hhzkAwX1JQmegsnFx4iKXc4n",
  "key16": "4NLSJpHtBoo94iccnGoQp4b8RxgYuQoByaLHb6apcXGovoxFPTfzc4nACd3Tqau5HAijJHUgSq3NbmmrkoduUp4U",
  "key17": "3iGiS1KnREWvLdr581tNMQxaZfp1LfBtYQm3qJ6rnsjHV1WWdRBoEDqkSLCw6Lx6kJy4aUSVfcKA64ozU6XMRki5",
  "key18": "2kUr48mtBVRyPCatUSv5mr8AamUTNKPxjwDvfvWr6AiKwpm982wz1US6QqN7b6CnHCJRqV3JbCEPyU1Az4HJpqQb",
  "key19": "5NAkbBfKQbgiH5wPbpVEsMJPEgGoBuSiHa4SiZguc71GfmLMEz8NWVMzExm8bJLc7upTfggrqLy5DZtdVbbcwC9t",
  "key20": "ZZkKcqUswCnGkUtp5ZSMgLbaJ3a4VoXmUrXd2UGYB7sat9XberKeyHfyYE7CHDH69KaFz5xEzXhPdjv18ghiKw2",
  "key21": "2rWutYxd7bQEzmK3xQ3QqqBtwHu26ZLASzBr24jQFUwdvG5D1qKv5qgrBSXnsfqTV3cYx2Vf2Jib4U6MMzEcdi5E",
  "key22": "5T8HCSGjeo6gnPsuvp5GvhJy7yk9rvtUvwmgXALUu1vJbZoUYnyBf3TtzkCsaJKWvw2yPEC53m279QGMmJWdfRNS",
  "key23": "aK8mRm6wHB8MV1cV5YAAcmVs8mqSLpswymNG2eknJHuUczH11KpTNuqh1ibDo4MNHxvVkb3wHf7ymM3D2PNdibK",
  "key24": "3bEo8ABSkB8pD4P5iNdZL4ebmCfanyyqaDrujeweun91hkmaL3mGEDpC3P9NpcGrhEqHwFExbMDZ4iwW46S6BRpF",
  "key25": "25XMSpLt7fzpFWKeo3J9GyWTY2wPNyiqHpZugr4VSp53vAkSs3Z3cjLdi6ZEgfUNsH5db8eeyEEgkKSQ7bUiz8yr",
  "key26": "3rigoYtc3E47qpDMJqEuurhNGSfmHTrWH73g3o9N2VZJiMwyqUGbtWnvep4MNELKDjywqqwmCAsXHtYPfo5fQ8g4",
  "key27": "5MaKE3n6RnJdWZwtH9Wuyr76768ZFGz6zzphmSb6H9ux7gT4GGh6hifa6rVcg6buegdk4PKS5ABFAQj25TzBq9J4",
  "key28": "3ZWmKu8jYufcowubfc6dk1KvzzCLWdJRbjrEwM4AKYDW8f4o41dVAkdjpzu3dYMFamccHYZx9urnxQrW329oXbdY"
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
