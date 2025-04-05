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
    "2mRfyGDAwtt5kYSx9xs2PjAn2hPPjFnisT4sBwcYA4zCiu3WwyYCTy8wGEQNJBTnzAeV8bLLGx5jiHpmZ3K4jeGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HoDnJZupnXsZcJhVDq7E9n1hmj5JhJG2LLXonuKBsDDJ5Fm1Nkmhj17afGAN9qMgvrgxkUpYwB4Wx76t5rSvKnZ",
  "key1": "nYqrErgBPkiY33Nd1XMh2oXjLZiLAM9Qt3UJFXLYJKb5eacJDaLyRA9mHRdmij9naboVxxAbtSqzh68RHY4Yh17",
  "key2": "5C6kFY5MJMfz7Ci4PszY9YcDitCYz5Pyj4mBUDW2zxSDyqTaks3Z7h3r619EG3wSVwFH6QjvuZ66RRdqd9jukPDb",
  "key3": "33YeMko7uBFeciDPFgWE2fwh9DW668Fze6gz7nE2mWJxSPWvZPYF8NGD6kPLf8DhLsMgaKD6WB523UQ8duJaS1n1",
  "key4": "5wvxgnahZojy9iWWbmo8LfoxCfgMRqa8QbgzpKjtkTjBT5oMZJXNEUpnsBLqxbi9aN7m2VfDJTgesrkcvNVmso65",
  "key5": "3VVrdjeVav8YWfoPa4qg92nJzZPmdAXXFy12qboZ5yXbHsHibbcEZzKxfGEgvp6j7NMh47ppHPwFyHtRNnAU5GFV",
  "key6": "3KKNJHfAaCGyRpVvwddqerEbDXXgGhZLsPfFgLuQ7WHyNLCdWXmtAKASQbiXDMhsu4gV4i95srTNDoL78v7LvbBV",
  "key7": "4gPxMftw4VQWTyUpySVCQGgUScDgBwzjkHuJxtFTeGQiYuUgwJxkuUsVa2VHLHUYAYELMe9rUxDFNm9zpz5WhCwx",
  "key8": "4u95W3V27hzU7i4fYaJhXTGp7YKdjuEQEfz6cV2m6g9x1wCvkKcqYHmn27EdQg7ncAqLBgWvBAkM1DhRMqwFV1um",
  "key9": "3EiAPP1KpXoM8YEDz54safZ4Ft2c5TXwnsCLAqDSKSJcZ6tfxGoUDj5ZDtRcXeRJGcVgMHLP4x47kgokoXQnvwLb",
  "key10": "FomXHUT2gb63vyXRxypBzM3J8d3ft4vJMrzxxyxYmMS3i3TDdSZZjTo7SSRvgZmmWZNiLb3CUGL9XDu6B9Mqg9v",
  "key11": "zoscRnqSi3Rg7LvoHrTzVha4koiLiTEAqYYSziEGi5Ci1bwvR9p5owdduuuy6CGEanupM758j2SDcxcTd5bSTJD",
  "key12": "32mXCW3J1xHnF787pAa36n9uwDKok9gBf4YrAd8QoagaFjTXQTUjPLLcrGaenbSKtsHvET9wdTCD327gUpWDZyam",
  "key13": "5FYBqo6h9y68LyUkLGR95P3CvHVFCa2MUzqJupAt8gHp1epTHrMPyBb9xCuasXBGDPVgYANpv3YuAiE97fsv6pyL",
  "key14": "xTmtBWnkkWLxCwhuPf7eEi5HSBMCtLZQVHLqDohdiHqHSFpa3vmtiR8MWDY9iTrpbZEkXrRTLYNZvsoCFZsvFad",
  "key15": "2uWhmB1iFF842rGT712Wck2Urx5jKrwqoYcYXFTPQ8EKoyjDS6zoZULhTL2QtEctyErE5efai7cUf1fDWcVNPCDD",
  "key16": "4Avn3tBrSzKrSTzHsGu6JdvggXYQxdHh8b9DXwDXcmLcH9cHLPT4PpbmB6jNwPdw4v6U2FjCvqkT9UDVxpd7VH4s",
  "key17": "3twRL5WKc1rSjKd9QyjPF57BhkfFUN5eba8vj3MtzuomDJNTgd9JHNYPiaELZjq9GhFmfncZGRfNSXxF1bM7Huyo",
  "key18": "45KTFMi2u1tx55xnFZNxuFZTBcZA8zn5psZ5X6mapXpHCMdtiC3JhVxZSJeAG6q2rGVipLdyeyjmxrWobgbctEk1",
  "key19": "3pYBLoE5Wc2crM56XuasjTcW9AHE3Sv8BH6X3HuzvsnuF92JaWr935SnpVxPdpKGd8LobRWVJ9EpPkPwAoXQGaap",
  "key20": "2XoYchUWRHG34S2nUasYjspwfE8AbDveuMsBWGqmNd8h4KwEzwTmhFJ4HDPC7JfAfnrTKmJ1UC9Gzq5ucjkGHMjB",
  "key21": "5ubyJ2PSSAr7oNVVdZCfxF3UpD8ngvN2z2eVc6MwALMe13HhSV4V3AaZAVXYZrCuviyDDTuYuDh8ruNB9xeX6RMJ",
  "key22": "TKqrr7JsjdZ4ELxj2B6wJq7UfnXAuEkJQXzgynS9hWpvEt1Erz1AkVYaBbasdVdH3sBsMhY6gqa9TbfHrEJmSrG",
  "key23": "3okR5RGyuKZb4p1rmKQV4W7zsod9ajPw3hQvZRWhMcQh3EjVP3eXdNy73fZsUaEvaNoQTbDPFLz58KjF1GcvyE79",
  "key24": "L3R2FBbvanLWLDx4T7YQcnUcWBJSkAZ34tPK62AmXpZM9uy6AgUtTMAFyX1bJ7betER2txwmV6rRJdAB4QJuWNb"
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
