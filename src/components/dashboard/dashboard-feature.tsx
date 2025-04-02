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
    "5auBgwXcprfvypUuSvup4WbjvTfg74mSFst1EKVip2KEiTSGmH3SimzoSyv84cSCx2v9Hj9YLzUs4oCrurDJJdTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RG7XwvxkkiFH46G9jjfG7B97xuJXVVVb3z7TbCcq2zG71mGmN3ZNLAcSgqj3yJR7BbP5PmWFyLmGv1fTMT85qDs",
  "key1": "z8R8pPtpNdJDovcjEFfcjPZFZCZxfVeKQnmKtTL8c442cKwgBMnxqXT76J5qfXkmGZp6t7QJabVZZ8z44S15VXe",
  "key2": "3YuRGbNyP5tVUmuASJb82qeF8bLMiJBR4gQMwPvo9sehopRxPQgUS9iYVzCqsFJ7nwkv9P1RSokfCDi3bDDgPqu4",
  "key3": "5pPEvYGCt9HnUc2keoSGndnVgKHRhzC5VjncXufbkjpzyeYmgb2iYE6j8JicwLHfs56BsBmMvdVE2jdXjBzwiML4",
  "key4": "63sUPHaguVCRwUYzrQqdwoEsDztCU8aYQV8FuKpiedNgjY3nUFEev1zs16feaPrdijAVLpig9C3xq8rzfJNXmwXE",
  "key5": "3TeNCW4n1gyHqHEnxnuN1Sp6xZcFg9pEkuxSSTp7s4WT2nN41kjshbTDoKNgVmC4da9PemFzzpM4jdgV6zNHZeqb",
  "key6": "7CgRq1Y96kJUjrk6dRtJ67hXmp7LsRsCpYsytRoEeVeSh2UKzopuRu3drUWDB8t5MnP9YPhrSBLShrk5M7v6kcm",
  "key7": "5ALq3c84am6kzqmh2mXGJgtUs3qFSWqqHoucGfA2eF4itDDiabSGSqZQp1JyBnJvpWEkpA36TAnjh6NHCsfbBE8j",
  "key8": "2tVxSUsamXTNtPnTy55WypkqWLDX6YEqqhXz1CEC2Cf2rohTKM9MF9k9v8oUhUVinXLZdeceGQ17RUxeSnQYinrr",
  "key9": "3HVyzpU8sY98b6C7UJPvWD8Q2GMtiaLacYVZDTP6PiqAAHzFV8cA6T14TRjhd3Begm5JE5QaHMeSwmPcjTjFwawn",
  "key10": "2BcGwtw8yyh35ieMoFnLx8AuBUwR5g2StCRB7xiL4uwE3k47b88G81RntKJ2dWcoxUU2psjwBtiibveSdVZW2xVM",
  "key11": "9xfsWrsz4h6nXwyihXXNUDTpkaL5pzkZndg1EgM8cDUn7M4K49Txmdsi5EE3j9QCn9Lz6sg5o6VxJCCqYUfmix7",
  "key12": "4NXsmoVXNL37DXg34GmoFJTbYv6UQM7rRvpB1MJgfukKusrENyEUHrpQG5WfmVpPE3mNno6cb7gR3SmDQA3pnZbH",
  "key13": "4WsSUGuzBw1hJqptXD99Kw9BeikLhYsmvbhBUeAYsLeAqBZfE6qMKVPnSjrbL7v54uFBeSD9Jqv2DEq6dezMdv9e",
  "key14": "5bjrN2FoAjWSp1u4sf5tzptNGUewrJggRQbaV1UDc5CoUBWLtwmrS7AVRqSH2wDbkMAMwqJEZZUbZ4Xg3izxASEd",
  "key15": "3zcSF3YQnjt34aZH51bUszPXLkQVKyck8HJDS7pkxhRTVVnEsgyGHus2ACG4KyLPAKdZcWn6S4EMeDNRtGqXP6m5",
  "key16": "5fPaA6KabS46UV2y9h46uJkHfJMMq2DqzHwDQX2WPUeDjjY4ZQ92gM7pVyfUSX56QxRrGJTowQRGECqqqg5U8Dqd",
  "key17": "56eb5t2K7uoyFqGhZC4dVhgrxTfcuVBnsCB9P2Um7NWtnmtmWBdjb8QeUh8PXUouA8tBSDS6UpeFZbMonpzzoM8x",
  "key18": "Zj43SZst6YjgJ9ccKZQKfBtnprUrXN1EyRKAto7e3TQT97c6nJPtiVSbVHV2ir9dcVuuecc51iHEApHGPHGJmA6",
  "key19": "66BoibjHAmwGQuUJygnKk7ExeVxzGJDiyX45tHe6mntDxYEntxRnkcvn4x9UFFB8cBMtSBE3V6XaXPbXnLb1gk7z",
  "key20": "G4TyeQysCp9DzznhrWy5S7Uj5HeaKrE1U4FdQjr6ST2ELBvH9vqvNcERgvtFHroMz8ztGcpW6VcytbjD1ESe8v8",
  "key21": "FjLEuEG94bJmALfnJnLnauYB5FBo3QE49YHzx4hv9VGiGHLxkSgucc5AeHgaL8JAdE5Unnxy5tu1WdDzkJHPEUW",
  "key22": "5uEgeLvrZBfN8pNWtfkfqkB4RJtsP7q9Cq7hAf7GzVzaNakvyJLVyaoafEf9jY8ULtA4dwsAaxgMB5aWDKFb6mpH",
  "key23": "4bJe8mfix8Cu6YDnqCd3GuDPd61kkRJT8c9JqR6PfSreinHewTNgzGavtRDZ6XAUgSCoK1zDEvfbL5waADGASoKk",
  "key24": "4w9fMzRbnJLkeGkeBKo3MYx6j4Q4CYiiPSavGXCpnHQ9wjDYXsYN7kJLU56iyyUUYeM9mBzEWHdo3fPA4exZFGsj",
  "key25": "znamU2Zy6URZArbhaHnuxzhnY4ctiGCnCf9eRkcm1TTgaiAKAETEpakxtTf2xPeuCkBc8pERejipkpYKu1Z42dh",
  "key26": "4GyEZoT9e9CKGmEivK7JTLtdDF4GNRgF7HCiNqRo9LwtEJZYRaRuvJDHGfi68uBVqjBrGu1jtGb2v9RGvYJSjUy6",
  "key27": "nvZFAPthigqFn7zpcYgRDKnAaD6baFfnHdADYxk221BJTxHK2ycufHWVYUoWiN1h7ch5nYgLJRFH21YK9EFYJHq",
  "key28": "4o72KZe2Y7NzC6Y9kzDz6oiHJfZMkE6MC7xJEtdXYUcaBcgE1cTBPjEFju122hzSjNqBiKzV3iZbFNSLWspmJwNS",
  "key29": "2QAxkHvahYRAdxTYg4dNmq5KJSrUUDY3d6nMYr8fPSgXt57VcH3iFo3xm6TUVJqAaquHeBc83QvHxbmGzbSeMs4a",
  "key30": "3bYmkkyUMpdBJmhpGb1wbGgafii9JnP2H8ozxQc8nzs363aXy2MwkrC5TkdBqxQRiTpD6VM7s8dTXWqZGNXHT8CL"
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
