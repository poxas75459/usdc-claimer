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
    "67bWuWZjrz2NeWxETsG1sWDPFvVCoVQevj3qXjeDn94STWqdkA39ZRV4u7LYobLbwmQJc4ogqNx3Js39uBRzPYpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K58wFaTT4cQPphyHmVmQL8gxRvzaJrrW3XgAVdsxJTbdoUGSCuC2dm2QmKLzP3dqEY8wNYitwckRxx2ZXhSm7Wx",
  "key1": "632794L2XThG6rE7cfVNbjwqa6zdr3Snn1QEwBLgCZ7GTviebxGnrP4BAbA1MYQmUpNH6b148ccoru79qh8SEMp6",
  "key2": "2PdBhCTAZR6CLoPMhDCSjG4mjua78JsjjGnsNBVUgZggqbJDSSn6pq5WGz33FVBEhKGWWs4B6DEJ6mngqsRZtieX",
  "key3": "4aHvLX2tQ9mFevUYkgSWWffeSkcLnypFEeDieiAMjdJYBmXBcFDZaPNSDz1YYqWto9TvBzZVQ5HjB52zz4z2BNfC",
  "key4": "3hdU2gy6zoWW9uQECdU8QLW2euekxpQsW2hc9oy695Td8cqVdMX3ajsmDFHVBrsZ5VPJiQcqxuLgJTBhh2uGYpA4",
  "key5": "35qWwfqhf8NJxcV8LQW3RGyzMC1AZNGYCFwLfXeRz4FBkAJ2g1RzhitkTq9kF7Z4VequobQg1DJMFTGnWD2Vc7t4",
  "key6": "5PUao5ZJ2vPQvpBHK8CMieUcfN16t9HTGyosm7X1xcq6sogw8kzMQ78Gegcy5JtEDP9Ayw6hXpCXyGCn36hoZd1B",
  "key7": "3jAgJSiHTJJFxs8wbuN5NRaMSox7eXpJoBpiwpgyp59svqLCeFxYAtShLFXTFRnrqBtFVfi7dkeHf5FT8LpUZDbx",
  "key8": "54c9SunpRndpH7vg1MKCLcutHDEA6u54fmd2enE4Cc5ovHYqnB8bZ7LvsaYDvmvmwGafuYpFXmeA43hgR7U4kDHx",
  "key9": "5PcgExUgheoCimoh3et46V3eqNtxUszgBrsU9Vv1gqrLJEqdfsxDH9HaW1QeeE1UwRgWaJXkumdJ13FqXbULwTkR",
  "key10": "3dZAsn8LqmW7NC4qH9BpECaAUAY64Ct8fZ2R5XYZK3eQzUGRGw242N55kqCbwWQyUzVVQdNkK1RrAZYT72PKnMi3",
  "key11": "4LjZQWfNMsBDKzcLiFCRVjQ24k5agN3PdekjouqTr6w6t8TsjAz8gkRRFiDdwpswUGvDczSJWcHncgZrGDw2jY6t",
  "key12": "3kmBE4zAK8atm1aiQQrFEvyFPFa4rt5XgvUgRqY9uDDGuVti3Lh1E2pheypw4wJDWMSLHZA7LXi171RVrn98Qqos",
  "key13": "3oByKrT4Y4K2VCWzE2uiHN1VChFUuK6pT4JuSFCVXf6mKGkPPmJTbXQuRfYzS5QgZZbGJFM48rasvxKxsuGGtZxS",
  "key14": "551BDrG2zHuAmWn8Rm1N6HHvypTe7KzzGbwwhYpkXH2h9xEMYQYctoCu6Tq57sSAp9xMefUYDUr5MbJxW2HPCv5Q",
  "key15": "eA5hBcKeXp4PNbJNByKLen2r66ttinnwTDYV8YWAsDkKHxER1o4XMrxgHo65DLgcLxH7tZJRvfKbEmANpAPffDH",
  "key16": "PQ76qGgmcak2LUhhYAJCUqa3ud7pwRpqQKrJcpdpJvDz9gNP4dJGXPRNYTU1rBkgJZkYa16KBkZtvhpe3VAQdcM",
  "key17": "5L9C48iubn1bKP4F1aytXqfKGtavnoY3yymRzXcmRepUPoHDH2Lg5m48UCqFeo1qPp1TQNQusBYtYoYbrHSMoFxv",
  "key18": "4ajoKgfDLdbEcU9FzC4MV1fV2hZCTRBA4AY8GvmiCnV2L3Gz3W5WRkjjh9Svj63rMi5N2E8PXjVLJTFztjPnhnjc",
  "key19": "BCrgMAY3y1B9osJr7pmPocMLukkgXhbC68CBHTc4Eb97SyKiEg9Zc9WFu9BTJyiEepEGDdUdp1tWHkosH89Py5P",
  "key20": "4NBDaQesDpKgU9JLRoJ6noPex3DQiZqmDm5YxRCi7PDTE2jJQ7F3RTrQCBXxNCCih45GaTQ1xJnuT6iXvm5ZsYfJ",
  "key21": "4MCDbnML5RQ8gLe4MSpTkPHPyQ7z4EKjf5KLVWdH4NyGcW62jPxcXA1rcdZGoKhQJLwLEMyPMxvi5EQHFp56kH8e",
  "key22": "4yHGgvo6zG3UukLNpVsBCmCxnyxgKgkJFhPbiNv9oFcaEj8tctWFZkPpqhRr9WeN7rBkyYuTNqmfcBovj1ossQBP",
  "key23": "3kAVtWe3n5ZY2LzJSAewKJbcH5cGcWESgFbJYMAubKTLF5PkhrofHvS7TqeLbQoH5LghAgfSv8FsxVLekvYshQMW",
  "key24": "3zR44eDZipwN5Mtay6nMxSazuzWdgq6pBDLnrKnvDU8amF68Rgz5RfTYEPWFyuCaEV6xmW6C6Lc7wi1RytZbRowL",
  "key25": "29XNgMLRBN2woEfuMHbtZs1JzFS9URo375ZWNS5L8wdxVyj8xU8rVakiPZ7qV1topWFHLHzgWhsFRAG52H3okobn",
  "key26": "28C1eHnYZr8hENY11VcH5ZA4uxAdJUuyvcn8gCM4yeMiMEq1t9Ced7E2yJZSXEUzkBzgkezkrikYnfGEjKaMFUKE",
  "key27": "66DnTdAoMuzHvpgBVF2KaTUHkruDY5CjY49kHpDdJsuF7pcFAwdgxhTDmNHWfzmDbki5iMnpqwURkwwQatQdnx6C",
  "key28": "5HgY6KEAezGVdMnC6JjCQkcKvkfbiw327a1NcZ1XA6wd9M7hZkj4buReGGBKsSEWdWCaoBZv4YiVC8qwZB2tNVi1",
  "key29": "5XEcYFDFaPbZqhQu5ZSQ7hZaQqqhnwN5Jv8Ca5skrexkELficrp5yEkVWQgfqt1uFjPd5EvhWvcX18vXHR2V6DTE",
  "key30": "5noBB2WZSfTsMJEPub1Zt6sNKShw2kB38KHACF9y59CzGdqozUiKQfpLgAhQghyZ519NZhm2aaqhUgidaP9pjtyP",
  "key31": "5SGne5a9zjzKe2tXQFswdiiHHSMsch5zxHszqM8zDbnajhJPpxqHLVtMMGpRASsFzyj1uBLbAmNiujzDYiFGw7hr",
  "key32": "26tHSXkytvHXdDKDmEXBEGUjbkPYt5yJquoX4LvKKonFeDFS6TX4dAs1roBhhxyo2JkhWVvqguiDy6MamgThDzWr",
  "key33": "4M1EnenurwFjc7pYADquNsWekuzMs3vzMoSYgXiTxwBgKqr6akKa11ByfoA2dj2xpvRTHLRMDrKyoLATKop8mzmN",
  "key34": "2Mi7bVg2PmNRbgHA8LtPA22XEdw1suGPSKEi6Be6atdh1q2zmZdqNy7L8pbz7c76pnM9GSp4T8QCKuKy24kDukYa",
  "key35": "y5EgbFPKSVj6JPwmSdMeEefEBpPWRd3DviNMDRJddcaMnLSaZsZFRerUWLtEVVguMdjunrnUzpZFB8Dw7gyPRuM",
  "key36": "2miNyp35Rhznu8R2AeqcTCUWEz2zM5EfukSeWTyZWPJFvpfMWDXSnz6mcauKp4hVfH2UJLKYQcSkEeBF3FT4uNky",
  "key37": "83zK6RrCuxXYJJsnvNjhFrWSjch9UjY6uLmHrWxW96WTCG12XA6VpQWpdX3jTVGrFbjdTKmcVd6D3thUoN3Dss4",
  "key38": "jSAbwyr2dXK4xswsMGQxqYkQA4QS93XbTBrL5oBec8iGHcskczWHYXj7AsGoTJhhbKTsrQgM16KVBuJmdzDLdng",
  "key39": "66s7MGjepTzXDtcm8YhKtii736aVJAbck6mbHyVqJWdeii9TXrGugBifnUWgFzpNZnJG7gmCeQfZfkGLNYXeggGH"
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
