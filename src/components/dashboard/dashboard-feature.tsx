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
    "2d7dSgpGbpAJCgaJ49XLZsY7kmkAsZokzjq8UwbFYCABHZ6cSFoPgAzrUAYwBgUiWX6VhAZTmF58z8b4ByXCA9g4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S5X2R8uYxcbJ4QHgKM6C1nVvfofGkUd9kt9snYM64C2vGmhukTExjeM9TNSgm1tjJr7Cx34pEfUk4Gg4bJJfWRU",
  "key1": "5Se8gHpsx8GuyMUKehmQUa7hKBbyMvVibiuSimfW2SGzvto7sYP5dt5ZjSUnA6ssxAzajqXKwJACswvy4y4UVym7",
  "key2": "5nuvAC2KcfQucqWxJFyManv9J5g49bvbYRSoarCREKDQiAi6JjKDpP9BfBuqszqB5gGV6ZX8efHYJNPGaBmvELZ2",
  "key3": "e3a81bRjc9APN8jBKANarzvtNUmEDBXCMGCLaZr6e6EYmuyV4M9aHh36p2KNPdcioRWpCq71U2YuGbcE5jzdTgc",
  "key4": "MHx148FRk3SbiLreBq6UvaP2XSnrqqf6tM6fHGcQGrRCYEJHyGao3mUKBWcrNjsq13PZPaPDuL2CfbxQLMcWrWg",
  "key5": "2Pxg33k1eC94FRXUDk3kHoyciCSVkp5x2VEwJayxEj2qhif62Lyj4DefqgfbVjvazkPgAVQG8vXpqutUm2B9YbpG",
  "key6": "2n8vATSMBbnwWWdTek3XdAScihx9dBthK8aGYQkTrU655XcVEPnT67xtJ22BBbxsJXTSLGRhn5tQx81cXVCeykGz",
  "key7": "64GyamQqGq7MmSSgjKRxx3XLDrTnDpjZZafYD4xw2PWMZb7dqxEU5LFE6w5WSxSdjp4wTyY4ScVtbwX4gror23ZX",
  "key8": "ysLfhmR2DrSBcjtEjbW6y1gvaEdZmyJ7UWsTq3D8jUartwKp1kQFXftKQfD56XyuWvYxWAwCpXbCo4tySWgcth5",
  "key9": "4ZpeesqDibQNvdZrPN9R1ugJYxWEJemejhrsNE6AJr6jBLJripcV9TsQwxJVjbBLgSgXbtBmut1KVsdTKjrmmdjm",
  "key10": "2SLcmfmbHEnccz56jC1x7tAWFuYPnUeWQviGDZiVCtpjWqY57pTQ7ePUS2Zvf3VVKw6CjGMmqVLhnM75E33euKQS",
  "key11": "52RDkHvWGiiXNhKiZfjEwQs15jttSNYnndoopacud9aF15xJE598vDXvfEgYCEXKGDZbdh6nVYVwXdnHxEaAwRkk",
  "key12": "4gukdvkBevmtwxCRogtnKeZPQayJKPWaqqr4eyNiMVE3UA52GpYSHJ5px7u64bXv6NF4J3tU6mCCHS68YyJMEjoq",
  "key13": "4asYPY6mUBqjmvzmUC77S1BZVcc69jaRoAYdzQFn86uGFDY9R8CHVKaXTz87ZmW1bcp4BZqTMK98vefyCCHHLRiY",
  "key14": "34EtxanfevKxjuzfLJozJuCjaugaKQCyvCNk85z2qUKne9PSRa7TDpaUqdRrtTcqXvJFANoskvFVtLG1LoapdFeP",
  "key15": "5BdCa434XWLwtJGFjLZNfhSdasafvyfjnCZHgg4pLhNXLw1NvibDqfMVN1YoJEah58oBQGbK6guPfmL6sXSDtBXn",
  "key16": "3a9rsE7JAnPjbZjQp5n35n5Wp1yehhDDr2QX6H2ZXbXQWzeP9UMiypsZqqiJQgguouhY47EkMH7SpMztfXzMCNGf",
  "key17": "75VmQKHJSKCxgUjA3gMVwWeLjTth39cYPSHdoVzQMCGDB4oen7154qYqAJS1zSZxL9rvDq8UvAxggeyMmwUb2WD",
  "key18": "bNZnBsVNmgjR1R3JA2YzWuSELHbH14dxqqhPjvDgBM9C27Mqk6NYodyvLg1jmuudCwnEuXeZMJkKmB2vv3azBV5",
  "key19": "2i4Ckk2QNLYGLXoELjN2vvq7KMobagv51L9yY2BW3p7Kc8nHYHhMYZDAXpfNARw1DVY3H58dYRHViqXd3UD7kq4o",
  "key20": "33iQHqquiQC6KVGPNJnW2mu3qTXtDFoDu4RLPKogvQLFzx9BXZvxhHBLRnmbJG7ZYiSwkE9dgGgrJ1RhgGL5gm6c",
  "key21": "9jr391BvwfjwN39bRxiHXiFH2j3b3ymvD75ghCJsWoBuV3WpNHvqVbS3XeUDrafgBc9Vyg2JhevhhGxoeYpmze6",
  "key22": "3zQ4e4NvoVUW7S3R63Y9K5dReDdhEazN2NymBXwLou73JvhjRKXMNrTv59pji5Guj7RsgZeCZk9c9Q1T4TWe49Mr",
  "key23": "5ypuzi7kGQvezxtKaH6L7GAiR5z861EKMxJkcQGAF9bg1pMj9nLJL59v9HHEJoEoHBydfcBK3wgimjFNRBChsQbV",
  "key24": "5QEHEMmnzxndn3UAgKM1LYsZZwQHc2Fr9Kt4ZAZAvWJzLVFcPemGt9gP91VCSNMd3tpnspK1kXCp2r9MRPaxQ1mt",
  "key25": "3epZ6rrqkCHsFenyNDekt7pibtxPMMBRak8jh9DxikuSDXYdBiWfSZ3TLG7ganGdR3i2LCKdAZvYSs35oyZRNJ6h",
  "key26": "2nr52piwbPH9Csy6U4oTT2fjYoqPi3tPuojAabihbV525c5pHhjZSesdDPVzKcZBfQLWamGZ518cmd3K5eRQeVBj",
  "key27": "4by1jAkLvyqtGHb2WmqHXNHj69yh2y8nSPQENrM32GCYwr5ajjoNBRJqTG3XaffMtZDythi68sm6VVcwQhd6Pvqi",
  "key28": "2pWvpDpUS6u4GApLZy6NbGWQtPGNHBj7f1GHULGehgheqiVraaYVRxe6gqmZ9jQ5FhhsPfKWCZLoV8tu8m5x4TfJ",
  "key29": "2VKMMjPwNA3NHaL8Nmh7tuyBDAhKhnMddF1FQkWfiiHNzz5N6JA4irSCRqZQN99XAHZYapvtJhXPBdMY7kzWcVmB",
  "key30": "2wQUyDXw3kxwsNuaJqyWYgrpH1yKD6ENt3KLETfYWrR1DfvBjsuQWxygQLaTgQWCfQCQMJt6fVR9vJPw6BXP1coY",
  "key31": "5cxb9B6GDM3MvviAcZrjiLZXqxjSLExj9ZSWiUpEBdg56khYcdfSJdHQLB2SnAb4NpSZ2QYDfqhxxYefpNZQ8pES",
  "key32": "57kFbfQ8yJTUtnWjsLAgzyxLW4jvqrwe1WW3H82JNMLWWrmgz5Nep6kTApL2irCLZJiuxo45TFe7tZXucyvLpej3",
  "key33": "nSjSodXq5s6ouK9Fqgj99xVc5h5d6rLcsyEBQFYo4yCagvogDsU2xRsb27CPePjtLeTB8ZfZLz9GiCZxZ8myZcu",
  "key34": "4NX8kYWK5NYWZdDrZfGfjw7HdAcf1ewPhrJHktHRjSqWDV7EeiBMoDVFM1B77WkG4JSEZUNKUNpzANQpNEpG6aEk"
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
