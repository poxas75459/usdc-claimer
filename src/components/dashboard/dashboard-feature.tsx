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
    "5q6sE8F9DVoTtvrhE3PcCT8BscCKE8Xuw4v95BNTtitQSLJ5CBmuVAEiwb3wqVuCGe3ffUpZZsLQGkVecAoTVRkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wVBCFkz6rLRueTgePfYVHJNHt1nzS5QdYJmZyWx8iUjiN3j5fTwMDKASfGNCGN7w3anxtfxW3zBut4teMLqv8fR",
  "key1": "fzf2wg53hLX7q7c9gp8iFnBgYWCqErmsvqLtqrFcKcGmstSS28CNDzvo8Jf4siyaXQRAV5F7EkHHeJTAr2iuUzY",
  "key2": "4pQkCgJeiBF8qtM1dgN8UDX4QPGGE3onTyF1RBVUg21LSgvgupVsBjgemYw7EGoUktac1uD8rVjN1naDjofxpdvm",
  "key3": "3GX37YwzB6vY6nayKb5LfLa4tKX3XdzhHXyLZCmDr2hM77G4ArkT4iPKAJEWR1LUwKdt4EwEZo7q2RomU21PapMP",
  "key4": "5Lk5PDq8BSstU8tCAiRevzPXxe2wiRfWriXgJGMxepccc8BmbATDjZcC5KhfG9vNTP1zp65tJwtpixqimfi3MMsj",
  "key5": "4bdrHRCmoAARdkR4D1bCNHnGPxYhSM2MGt2Pne9yAERf1TVus78RRzpMyhskgn7mPE9oBEVq5kUe5aiCyq6AkLUo",
  "key6": "4tizvDmhuQqrgfcz7GwJGu19bFpgLxKiEAXMR3J6AF2UnAT669vpYW4KfqbzAD3TbFKSxBhMJ6sokZrrhiCfitZv",
  "key7": "xMUHgJFfnktJrZpg3YmmZy7PgXvhrdA6rHpAXBnH8SYsjZqMTtfyxjyRBUVFRVpenXSMxrrU5z9qqyTPq6Kuebt",
  "key8": "DiFS9TP7kr4cLyR69g5UqsMAiPUPKHsdf7VRVxiguJvUpBYZQeKK1q1r379JnXR5pdkuys3obvUnJZpiM4Bu9cz",
  "key9": "4vxbwkL6hMveAu1bb6eHmGcG27krT9CyRDkn8NnmWkc8DA8SU5kzMz8LjynXPFRukdJiswpGWnWWqz5ioGBcYGvJ",
  "key10": "5bwTuXPFmV4UbrMMLhmXZUYAjYhyWXmb7KWcxpSPxZNWA4aoRCi8WwY1NvtCWWBMUYuwc2STdL6SX5ZrSYW7Jffe",
  "key11": "34R8iDn4RzPnv52UCNerR7otnzPMnjwg5jqCiNULnW6vZ185YdUfkR1kWZdeQeakfxqAqSbFwGC5yueJAatn8aAy",
  "key12": "2TZMT8mqVjpc6jbHTbkHnrtgN23oEMPz6jky2k3wQH8Y6tCSuDjSjsutVQaxqs24pQmEuf1MW3LCqVdwiZ2FBpHk",
  "key13": "3tPLbAGPMQVRmAGj5LrdvDJVYVofRvHqDy9j7Geky3UpsDMHtrzqN3r3E7QFKenYCEJutUtj6G8ARBRPPXADscZG",
  "key14": "3EMbZAWKyjNhiFse3KguVCyLHyJJvtU95RRpVZJukaAoQn7EDCGcLKoWLFJVcjiuDYAXTFwN5T8YiYLb17nC8Y7Y",
  "key15": "2J31Mghhewqg89hogvtcLStXYDLnqMXsP3pwpvPUGFQc8Kehe5KGxAaBWkRYKQ2pmCgfTfNTCfkAsQgWyScFXnG5",
  "key16": "6vcDstR1iXefXs9ZDFmrs7RJUvf6Zf1UJv8JGCTFgcezBjPEBfrp57KcTpZB432WoFZLq7eAUAiVcG75EUJRKrk",
  "key17": "3GCXbDbfcKiAZQTtXeKj9S449SAaaDfigUykZSyMvSrizXpGWmhnnboeZUtG9p5VMrAPRPdg2AsA7P7Qi81moTQ5",
  "key18": "4SHL9SxSHTgcZGWEkQQoou6PjnEHJxzaGybyTMP73BM6Uyz3VCrUeyL2FvcypQk9t2rZSeXtnvZwsQqKtzovsKWb",
  "key19": "37bGAZKucU9iYFPqq19JbnyYgZbAPgU9JihfhbUEBuuiaXZ5eungyWN7Bocfkp6bgA3hhJBE18PBkpsGM2sPe9jy",
  "key20": "2UXqfhPccNS8BvmL85YRvAKoyJiwZdXWRbm3MbAe3ztyCJNGVUyXGAsSamUZbBd3qDGbtD2zygncZvUazcGm38R5",
  "key21": "2WvA2dJv6V4xTTnbAHDwnKpbRshiU9ip1WRSBubRseJx2TFKue6KMkzifu5wVWHmSNfdBGJdvVrS2oNGZQrsLY5C",
  "key22": "26d68sKaGR2Ws4kbBucX5fXosUzmSn1Z9DSuNjCCWGt22WUcUpmZu2GpmtWhnxYkt4NEXeBXQSCMzC5tSPSnLrMj",
  "key23": "2ScSGyYN2kE1uaQyBYNv9xvpJLzoe5h1kJd23Rrs9oRUWCrYfWdR3qBV5v5URZuQRmrHLHsLxDtN1nTAaC6h3MN9",
  "key24": "2Qvofc3Zd4fZfAhKoSQAxsQmg9sc5XxFM1DRPVmSqUnRuLx3mNnxZXFTtzV4VJbUFQb7i7cdcDMQaRMLc4Et6edd",
  "key25": "5hL71hD1XHpRigJj9f1h4796GnR3WE6XyDf1FPmXwczonGjVrmRDXk7nV9Gee7jvwaZTUnihmbU4P9PvtBURqH4W",
  "key26": "2m328nninhbhVpHGYC5KFpQdxxy2DQMbKkzQDu5U7G4ox3xvfnsfdBPmXHaJHkHqyPFnMH4tjRZbzo8Yh7igSfQP",
  "key27": "2KoPu2wa2xR5JW3dmUYiwLRc1Xujz3WE3EFmVCATJgMpi8JDSVg3w1cgrUGkRKfck9rQdSGkiGzruGAFpaNjfSEj",
  "key28": "4VXwbeQsoaUjj1De34yyMGRRt7SpSZB8NRnbGFgSCqdxgpd7iEC75vY8hxvpj8Zhz49AnQpWUMKBCm2rD8aS5EUn",
  "key29": "3Lj9NMuQuXCcFzcc4eEjbxTxw9iJnN2stnAFFBqFFMknVbVWYtpGU3VETkf2TownEPkWtKTA6neyGVd1uGPZsFgb",
  "key30": "4NvG7jrRzSNXipR4a2zgnSepojGP2LJBachPYpipPDuuCmNS17s917UbxQb3hiT6wfcbCrYBWS5fXMmsRqT6oNhB",
  "key31": "24Kyu7wMGGAVkJu2Qm38ZXLkDc76q9F69im96HPzrbqE4pbrwG6tg6xPFuizu32k1fWzG1DGc6v1MubQEQGMKFqZ",
  "key32": "3tnv3E5aQLfgeMWSeiQZPQbCULa4Qj9FRC7YF4ZWs3r11YTPPN8fpUuxsKMK6tRZzR2pdv2ix48M2PJunGnLq9jY",
  "key33": "2NXZMyu7YNooJU2AfwmRxyqgU6NkrmHdRohk6vZQ7s7NuwNo9qySdtPXzvizXQy5hE2ytP6qaM9vmLRETiap5sS2",
  "key34": "5EfR1dQnPE4Zcze6EAesHe6n3doxgFeWXUuD1QbBrKLACmqK3DFrRYS39A41D8j1mDjycCfQeE5NgMPns96RXVXa",
  "key35": "29fdY3YNM7hsRaLyCcLtJjXAcyqF4oZ4FCqq7RiUjgkZ9L2V4UBDyVTaiZcYushC9drrXif9mLpjn6wosGE58gJb",
  "key36": "4dfR1o7KzjD9r5Mm9TTjRiALhqWphsRHDJv3JoEZ81dXyLSZGfU3ysu92AktkxavvfDMoHeu5DeH1ttwFL71Fvh1",
  "key37": "66C2QsyoutsYzdy5hJzhxNLnS3agno66bRQnzDHCyq7GK3FN7RyLNw1KKjpM8FwQu2XZiCGEc7cJmsmSW1yQZQ8n"
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
