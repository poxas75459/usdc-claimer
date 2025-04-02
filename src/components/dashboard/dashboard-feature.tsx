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
    "3DvL9cJgVGEqzZHEyvi5BxPaKQGVmw24BdFPqiiU4o5yAyA6EuyushiTFZT9A4NM9s4isBdzjP2zDty7oA8FWuiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aZoxFUhfKxkhVGAYG5kTZf4efiEUqPddVCALVoTW5daw1A3RZQ1AYb7UmnLeF39sfojCLdJ84ywdG5wdrTzjkPZ",
  "key1": "7YFqJegPUsY5MSxMsHcWQqoAJFscWw9Mff5U6Chbax8GuhFQs7zboW561i46UF2FT9HVUy41Pgtyhk15EstLfAe",
  "key2": "xT8y16LP55Y18R86wmgGCNxNyCQJNqaEsghhJFUVT4K1brz2kxc4DFNp2z3HctcH53c83BNgNhK3XjHtjozEY82",
  "key3": "XSCJohPifx2wPQaoXfsxgdbCcX2gjFwrjJso1i4i5Frd1JDto1JvdDZ15YgGTL32hpkGYGmii9uVDQYyaKDLJSF",
  "key4": "zzew3XSZHMSvzV2SqZSU8hxdnywkWgATibB3vLTbYjQiDjqdPzYZJS9EytkFkdNYgFWqeTdDFYuhYNkcAMMpXBQ",
  "key5": "33FcLL3438D4J3iWFH26PQ3bDAv36JZZp18hKso4umMAn7cHPjtDDa56K8r2zzt3D5JamZFiCZPi7vn7Aa1rXnNj",
  "key6": "28pVm7f3ZvcxVYf3iv1M8rJZDnBh4zLf9DMAQpMobrHPQhc6mKvNfDGyQUDatGJfafqxF3YeN9NLqBQh58Ue5gPs",
  "key7": "g2SAo3CXkuvxdKDQnjMvBQibVEnZffrT8HgSkTbB3beBSWuyijVpahBnd3Z2sTTWKTSXXEh2MJ8MfW81kk2PFVt",
  "key8": "2cw2K8Z7AVUnpMPUwkmLmqvemv3yRVxQ1S53LZFnoKQByRuUr5uq4gS18cuoo4BZdyzQX94bV312duZGwQuJc3Yv",
  "key9": "3wdSTn6duNVhFUTfNGu7ZDVc5699kenmGzMnNX4hae11nMTyrpmC8YhqrEvomZpozSX7VZQ3MzCoqm8XJeowyUff",
  "key10": "4gMKwBzNGrarrUEFzdYSTGUueV6FjpHXEwo9hzhYn5EARQzGgmuHF7KceSvbsgDUFXwJyJjkeaGfo7uA9GPQ2GRq",
  "key11": "2svuMtg4NAyqBwU72yc8vRaPbkiX5yLc5LDGquc4SAvXj5NP7eNQnP4iGyRaFxAikWSvambZGK5Qjm6pqY6Gqjep",
  "key12": "32mYtJRzhBNEGWLZsEvsfW3dhnjpLMugoDpU9vykmZsnxWvQsga7hZbauUtHDo5KAzEPrUZu3z5AhSDFADfNRgE9",
  "key13": "WggFTkhKazgEAQ3L61b18VsCQnAKqZP62r8CRpJPuqYLuWkpnbrJeqicF3YFAuCU3X6BuM3mcKDbXkq3Rq5kn5C",
  "key14": "wRBaL8pk5W52PB3x7pWRLw8NxW1ikZCe54emXcxkDyg5ViFdQyoYa37jAJmUZvyW7G1S3qmzXacaTqyws2Pqnkp",
  "key15": "3qFS6AvStQADvvSY9ByMhg4NyQXJbcR81YUy9gV3BYP2M4cKGFrDAnXw7hV8nBT6SNboAxAfpqHycGyUPC5wJVFk",
  "key16": "4am1FEKWfU8Z52BWwfVfvPDmBV8m8K8zKZgbR4TMWVfD9dn1SQsyvH2Z7resQziKQybG7RypPk8oCJoiHPGFriMc",
  "key17": "4aJxA7ABXiWBSjpY8JGTf6FF3eKn8ssVghPt44bJEMMCsZaaaD3YJ7duTWSDcZJUA3pcTSLFN9fhVc8buHpR6iaB",
  "key18": "uV4FgAzw44SgpVAJeg5iSjHaiJWF1MGLf12JocKgpB7WNXsP2Fe2mh8hVG42tp3F8p4VE2otkZhuTvHfNj8XGfa",
  "key19": "3ygWR1QgWxaqRvww8WhwUvSbHmDG6yfcG5kFSKGaCAxx1R5BKUHanfsziqhSJyubwMVLhTUV31ZnDzyjmKGJazPd",
  "key20": "3rXK7QFo27mKSwLkoEyZw8Qw4LbybBzGERtW2c2Uwta7eYLfFrm1r1iQ5npkRwfhsukvxmskzGG9mDHuHyJia2fz",
  "key21": "4LYHDjeSPXUhRoE1Lxr73V4ox4gz9VeRjeQv76v4UMUPCprnxC5UZgqjWRSgDTantgueVX9pD9q915nHTpQDBBMH",
  "key22": "599eTbUpFXoNDAoMc362kfgcZHbHZB2fT7xJdibvmAMDXPXMiJoRbJcWtidmuhWqinjThYH6ZJh9pwokQw6Lr4xM",
  "key23": "4XYJuxDQ3sQ4V4QxuUWHAxMCse4DX1mxjKWRbepM7S5Exao7DtpqCVmqfkZA9csB83H7SzmGbJs7DiirsDRwDQWF",
  "key24": "3kQMY1PjmJj7r4yxF4nHgACxtuQ9kpqvrtyQcFHTWw9eaYQjzLbsp6pnTeuE64GjKNWyog8odH6W5yq6yNtWZ7fy",
  "key25": "25w4MP6TGyE8fBdLquTiHRqibw63jeK2RRK2HZdFPXqYVL5aw1k35Bss52nXZHjuEuoFngzeJWNLzFgvsn2TMtJH",
  "key26": "3e3D66N545r5sHFR7FhoZX8BWhRzv5DenNq4HsBnhkmAVNvrvJi7ryGdAimgUFzsEV4EhiwnZa1SvKFDB6A5VSA3",
  "key27": "5P4EE3rv3VHWnA2grDDybCfvYwF9JSEpwgjzr39NQoLECTb479yyk9ryWgc9g1qwHCPoFkTcFHxp4imq3mQpwVmu",
  "key28": "3PQr8YgEy2TZkAgBc3nWh1QFh7dge4rphaWANLfbeq8VeQtnUDiHDTFpa5oQriHjyswW85ni5vYYnpkhzdh323Z6",
  "key29": "45KMxYDnt2DRxWNxeVXwpvb4eVnNbFbhHcnU9zWmjfJrAiFQGW6cDAMFsowDVYV1uD97XhqjLQKnE23sRuJr2Jus",
  "key30": "3E1Fdkh7W5dC7s2UDBoJfCvexmiNMN6Dd5mhPLB7irNrgg9x5pxgMHFMRwUWNRSEyP9NnzxubFMRuwfSbuEQXPfv",
  "key31": "ePbYCjLRefrzMusbTP4FgaQYiw2xZto2jiW6HDeWCXyMNgV3TMn7MUYRMzzVMStKvj1rEbX7UHsAtieZy6gYRkQ",
  "key32": "5uVKLZt4pyq8HzZUJKRqHW5YK1dBs9RmenPAE913RBcjynPdXBG1Mekk9KURQKgWHsndHTuFs2R5opDS2L6qUP1h",
  "key33": "4rNp7kypmADuE8hL3aMyf64TpELRPemXpJPY2Z58t16JMnP432V68inAL7FfBHcPYc9ucYXWK7U2oX3EDGNz4o4w",
  "key34": "1o6qBsR2ZyznmCcMCa1MyyK59RjNMoPaEUEJtpwSDd5xkxMNpuwPo4QXdztYHAVF5eqfdRm49iPEYDoWPWGmF3Y",
  "key35": "jM9E89CqopuSk2RyLvfF9UpfAbkGhNMZeCsufm2aNMkxeQdtsWGihuSRZevecaYzRHRUUtAVWSCREKQDMvJYNsS",
  "key36": "8RBrzNoAnKbBx8699qZBsm9df6MVDZpUEVrNvSi7WVYzvPptWxirceCxbEX1JJFcs3V28f3eWQ6aZXf2XCZHpof",
  "key37": "4iMPAxsxzYAWCLBL8DVA3N7b6DjaxaZRZtagiZZebx1m8L2JHWk7HN87nfWAcBPxRP2DyBXEFAAap9UYvjVGhQxq",
  "key38": "639yRusHMkRQs5XyucX4oXg9Q8As4eEgNcJmACvWDtzt5TnBtWXhzF3LJKnMod5TeKR5BEV5tiarmJdFVYEtuRX6",
  "key39": "2nQyeGuifMhpT32QpH1Bc2eeUB37hmvCoYfsMU9hX7oXQ5wJxmETJiFmrW1mZHWFoCzQS6zfunS9dxGkhmLEc785",
  "key40": "3pj3u9o3nxq2YhAFKFC4oQ4bGQ65ELx7Tg3FK2P5F1MxkYVf9KzHrnH1KwVbZqfU7h1E8AribTdRAzt12NWjjj2Y",
  "key41": "oi8HA15FkkHqy4tm4hggiixiAD2gqf82cGnmCp9nMiUJvvBvS4x3Ehh7doYJsHBz1FUguQZHy3rREgda5hVs9UB",
  "key42": "2bFny1G46JmnUz4v5TowwhEStxEvj2DJCHPVFsLxJGWsj5ejLj8noGMKwuriYxK8U3hNLM1S7davrh1UfBSGdWP1"
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
