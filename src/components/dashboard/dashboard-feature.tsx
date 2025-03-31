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
    "4ukd4bR8yAPv1roR55cUzG2dN8eCvxAoeR28xPHeei1ZdxztBiNUbyB4BM777CZA9Mpjm1BuF167WX84LDyhuw5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nSTzcUt4yXjVAFCUHfiEQvZv842qcu8ruKJuuYVYRNPqwcDL2hYfSaPHc2kkK6R34yQMQbcoB8nmwA1G8ugfKi6",
  "key1": "2ZyySd5TffXiVhixdf33TyCNcRa9s66RS7zi6vRcwwhVKj8NgGm74HsVoUDLtAQMQ4RSBoomExC4PTtkZSv7kUwq",
  "key2": "2vqtsAFcDSrnP4Cwaq8wtWk7Yds5AFuQtGcQ6fdfKyxoZzKMgcWVRwW5sV7YxL9WYH58W4YdMBMspNuA23whk9zS",
  "key3": "fFSP7Wyb1aSpvYVxdDDsvX7USj4yg5fP5vUYLJtvGWLtw4sTw9qYUynnpw7oone8WaWNdwuWowBgTQZMFXfq6Nb",
  "key4": "3kv5NaFSpBAE9L5QNt8yt8qFh6167jnWyuimbEXcTns9tvRSWppR3dxBBGemd8YAaTUJKVUBBGVAUmHmPttnspyQ",
  "key5": "3Ay1NSEenmKDXAQK3n4jExa2V8qsxXfF2nwNP6esJ3u1fZhXvSqHXvXt3Y6BJvRcPfJfboZUaZVfsYbosqc7fyY3",
  "key6": "kE3bU5EAGC4JWcHFFMP9v7C8uMP6fgGivjegFDv6ib4gQQxx4yzMwJea7fjVbUUocgsGX646DQoByDALdQkkw25",
  "key7": "52TNHG4ZqyhxCBoA7Ve7NYvmJeftjqkL3qoGhaeuBr1k3WsTAEaeKm8Z6MtN6xHrBzaNDqHSrhjWWFL62GzLq7oN",
  "key8": "5UJYQztMq68qt44rK2uorQqbGaN6dxT9JN7FnhmWZgBit9oZYmok54vovwv1JdjrW1gmzuK3QtHxgSLP5ttz7q7t",
  "key9": "47VGPxKSfBN1vMvLJBv5y55kSdzyL9oVo3S73jHJhbJVcDB44qF5uBAtac9PhKahJ4r1fjRBaPCjJoGHAmSHkBkE",
  "key10": "4Jzqbx3LjXLWtWXoScyt6uU769EgRNbcP6WbX1QFZwpFsx7jx2xZGmAGoxBkACv7aUGGqVSBTykLBZD1r9XfQsNw",
  "key11": "4rLLY5upScoM3b78SWBaNui4FmCg3vahdxSrA8XfafmkeAMNkoVweYzD99puQcBxYfPX8JBMhRyDWTBV3ziLeudq",
  "key12": "4BHwSNxE6c2Sqk9sjSCW5XAtFNNYoJU4kfovxypmoyhktw199PswRZxVtBkSVkxAtPcMAHWGHkDX5VGMRninN97X",
  "key13": "JLsZV1BChTSxnVSuR7U9UwLH4XBjKAY2so7CHbDdMNAmkK1YdwC4vZzRKsNxLNQaKvCxLsx2azFdk2nc4mF6FbV",
  "key14": "5qpKhLaMG5CntVNtNBDnzJtyCtVzWgfX38d6LLB3gorDDy5AW9Ehqp7URmFFjZ9RgQeQ3X9FfX9sv1t4fA5WVZYL",
  "key15": "LhTyFwJHyUrmREsQ64sMAt2Jba5AxKsEUPfA4QmfGJzYtTu9DMsEBeSquJg3XsqPtjZLDyze8uQS2mQRuXnDEQL",
  "key16": "2LJ5hLUZhTdMDdYrHuAbdXhHpVkLmvzGErswmnJohQNwkTjkjm347AAsngW14Znf5YhXBxWxXntwoJXVirm37dhq",
  "key17": "4e4jtR8hJRMSFeETjw446qBt3VJjkGwAmxgiqw99Y89vRVcKDL5kMfe8b78DVYTDvHCCNML1twyrBistU483AJmn",
  "key18": "3gMwK9KtC83yPZcrduiLfpbo3iXCzLsRcFJztXYokZSz9TtwEqT7TLmVDaU7M2f8d3BHZQ7W6Ty9bG11jK4S8pro",
  "key19": "4jg4HEtHK3ggEtxFSiSoKcKNgG1Dd36R5dnt1ErF7kvtwFZgahsMLB1m8bjrZ825N27XzPP3D1H7b1sS8h7mVyvm",
  "key20": "5WAt95kp3QfKogjLar4sbA2d43mHRm5yksp7KvNNJG8TVTaz6rT3HumPaZX8fV9C3HqPwv1NktGDQK3E5gf84Su7",
  "key21": "2vWnLBEwVntPApMCWcG88k63ZGTst24zM8BCWuF9j8LytXStmYEiYwNfiaerpnndT5QPB9koiqXfsEvzwqGVnYvS",
  "key22": "3ofhRy4qAsUZh3xqboSbdBie1NN1fgpxbFrFhwFcKUUXjSN3cDjmw2EYo5mQU5DPWrC16n1zGmAcTGYS32dcCD3",
  "key23": "5PMSUb3XvbFL2jaj5HcyqnjUZvEkBVhfzuqDAnqGWQ6uwRijdVHtpDiaDTrBKRP93RJaF3gdYgK91JuPACFNu5vF",
  "key24": "3vZ36KZpDBwS9VugX347d1xyrFsN6jjLWanFSZ73jSsUBAkGGyEUUPpAKaw38QPnK4akygqxCqijNdRGgy7UQYdS",
  "key25": "UEiTZtGPRdrui1urHmkjF4WB6QQShz8o579W4Tmq6hzSn2MN6EuZAfzbVwAxMWgEPwQnMcg7nXKG5Y21Y4bfBAs",
  "key26": "2BSdSho2eY5pJC3kL2P6A178yw3Zannhep8wWhmH4uWXy3YakZBZM9goLZ9tojUUMwYi4AJj4omzapCPkiA3fFs4",
  "key27": "4agCpoACq8d92eae757E438sXoN3g8g4dngYqoiy1XYoiGa2LazDqmNX4c4iLBoBcHC3vDYpawHu91CcSLd8ygUt",
  "key28": "5kZtRWo75WRw7ZCYoLVPShs35phPQUGeMLny1K2LbQqgUvhrEsJr7CH2TVnwWb1otSZ83RXi6AAZG36Mo6TFvksx"
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
