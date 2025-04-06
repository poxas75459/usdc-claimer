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
    "4mjvQyp8oMN3VhGBGwx1rZYShTzDv7nxJGkAVRzcJyekJn9eqkX1WDGwKjYNHtV33p9SPhf9RwDAtjrTg6kbRfKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YVK944nJMsnXG21U8YyfrZ7S4ebz8tZAERjozde9d2WzmACPiVT4HRiMRodX2e3mSLhAegNXCY2SD6NbH5DWdg3",
  "key1": "5sbBLVJzMokMw5MzufD7S85SvuRCw2dquNLRKfKAfDk4WyshCtjJGkVfGw2BiMiFJSUiK3ejUVAzhysaotVbbqEm",
  "key2": "5y6zYsQsgFym3oLCTej3Zh1Tfe9FvjpZ4pJJbKovgcHbkT8wkYpZX2QkChXmQeJZtBoepwoptE91hAdPMpZRK5J4",
  "key3": "5MTpisMqSMfZv8mf46sKMe3MUZ9DcqNixshSKnyQTTPTj1Suu9Gd75SBHyQNwqU3zUvAT6GpDkAjTAU9Zr1yzRYj",
  "key4": "4XDb59HiF4bgLNJRdfxSZZz8JEqdZZECFcPg7oLTvAhPeeiu5CLzbp4krVqzsuAjqYAXWu2DddzqDDyDuW36uyBy",
  "key5": "57v6QfsCrE5zmbRF7YoiMDQv9rE7szZrSReFuLWe92D5BVsGj29Ykigk2TCKxmKdRkZyB9mUsCpvNN3NJVTUKUqm",
  "key6": "3UR9beouX6sWeZ5vX7ctXLfAypiXBJNAUaF8VSgKkQmTXVGbE6jqZA3E8K5ypbf9MRhWsArcX3EbzjdJQjWzcRTi",
  "key7": "5DgLADxzLZ5kxC2nZYerBmGgKJFVy52wdVzYpr8W4na2xVDFfNbsVZgf7ZAuWAN6nGf4BjjDZprTWTZu22zqocyU",
  "key8": "4nfF2F36bvt3UPvZfR8W7MCAeUoRX3dEMFN5ntUCPPZF9xTQJpWKTuEXTjUCvt9zDFXerN1PFMErY9pBWaWUGFin",
  "key9": "5roqAsKoDKZuHWzQFB4zSs5BSFALtoL2UjyiGeL6i2YtgoGbGpBPQ7N4bbxU8MvY9Bcepdnu7o8URCit4hYMJQd3",
  "key10": "4eUVT3PYDe9skEDBT34QvwTW82AYD3gmh7q7qNbX97xwp4LXdN1hGU5u5raokzMyp153296fikjt5xsPvbJky4uG",
  "key11": "3NCoM3aHktBQRxbsxw916VF3QcUp5iuFu7DKPaZxz5BNyv5doWE5Acnvb2XfbTkpUruWtKscadC3nGDwuF9C3SqX",
  "key12": "3UqbAWWaZwrh8ENVSohLNqXdRMAr52va9VcsxLmjzSBT37e3uxHFhdiQKCExa5TBG3UMD9rAKRdvC6aNSX5Vapez",
  "key13": "2ygDxNLDCB4NRprvatkBqr8Pdwqeo1dwkGpTkwypCd7wakPGz8EB6WcLMUJmiDNqyB8YS8DA2hYGzCcyRGRYMcU6",
  "key14": "3D1yAU2yTr2mEGSGfadKNSrGcurVyu3fE4ED3kdKfQhW5JnexGj62Jiriktv8H47FDK9RxJBpyQZcGeNmueWJs3k",
  "key15": "5UjE6tZS3zANBep7wMEMLU5AQwm5Vy5EGqm44M1hV6UZcxnWpMVU59atHxHwyBwt5ufW4DidvCaQNEsU4tQp4Ws3",
  "key16": "5u2cw54akjafXSMX51PhqmaSTNiyP4j5CF7n87yJg7MJGaZgSJwYQhu88hVdNyahaVg4ArMG5pxoUf6imGE9sHAe",
  "key17": "4Xj8PfeBgmf16RhVhSUAaVi6KDVukSSJ2sZYLHqg9nm4m6KXYgF4uUNhCc99oBeiepFDEmw7SvT7Xjn3JpR8ugE1",
  "key18": "MNwaVirugaJfZuB5SVQx1k8zTsFJwuQ9UgLG9SYpCdTk5bHgkxeYcVQygaD8QJgXKdZQQx3y4oS5FCDUPGoCXi1",
  "key19": "5LEnh1XDr5oVUp3yYe4XQm6gjcNTCrAQWUEUZQucbp18ix1fxGwrCz8P5rKNLcgz73QjsAx93mnricdUFoxcRUe8",
  "key20": "4XCgxXpJ23wGkepa2Lxkr5FDDn4yYZGRVjZfvc5Rjiwf5JSwh48UW2XTiyqdRxMpKrNvuHZHHvNiQra6ze7hP7xD",
  "key21": "4jvkwa7JPCCrXKtoVs5jykPd9L6pRfc9UGeK8nnn7d5VGA3pZUnimj9GQDHxuZgJsuEmSzvf9bi1AnfmsDGTZasV",
  "key22": "2ML77XYJXGZ1gj7tRmvMwr3iTJWgwPofYgb7d3cMp5rpTqehV4LJ9bUXCYWsmQ6PHcah1jDbFbxsmigCVQmtX2GG",
  "key23": "4Rz7Gr3DZjfkqUEQscN3Qs5FnBfQiKvQKTbTd6fajqkivvkgjNH6PLhK3uiW2E3AV1K1cEER4e96KM7UutpXofpo",
  "key24": "4xeuRP82CByN5sPeikkyrW3w6mDDdje7tH96njwwQJAdXtU9QkfnZgLPxYaHHPzftActwGKav9mxbmjqnTPZWv5G",
  "key25": "64RYuKXyncrthmmAdYCbhqGMLGt2zyYPutk9oqo7Eruq7CfoicaobnGT3Cq2uVuDrQjTMBNeUzUHa3Pgf65NAvJi",
  "key26": "47b6Z4FmjkBXDrpNbfc2F3xdTHUpEyPHZCa9FDizw4dU3bzZNn8tUQ1cwb9FiXetvf5yD3LxMwyvM85xo9PA4XB9",
  "key27": "4FyVnzZxhKokzbshComFseCQ4h89AYPwB8c85753B2j5RdP1Gi2LcGWs3XZ3kyxGNtks9W5AtZUpGUZ2XHqVxazW",
  "key28": "3kYW47zkHyJkXA9pMYQ8pqgAT8r9QHpBDbxfWBraRmzBtkyoScNpq1nnfzN9oJT3yPfYpicAv9PYqiM7XyC1VUGz",
  "key29": "4e8kQB9TCLAj9P99uYdqPRPhJpwCjDZoTGSiX3H8Nsxw1tgNER5xmKSp8Bh194V92ts6Hk1wk83NZgqhUtC3Tnn2",
  "key30": "4tid1Ug4MCmS635ZZxMVsqVZEt2JBsa7SgqZHmU76adx8US6GxizGzqHeXVjQiFJeuWSDE6fyYHrWSVwtue7ZTh9",
  "key31": "5fdpFBbnkpyo1cbaaGyNpjxGyGrvNTFQdHHaBuh6k2p6i6W6ed58sm7j3x1T7G1DntgCjE34cRU95bu6oRK6HETS",
  "key32": "3yG43FPH99SWo2FfoUxh3VqJw68zzGnAWL7uefSRpt6BSCWbjVDEMSpmPg6H87RCUSTjzNKpM9sg1NSw8LB1VfGQ",
  "key33": "4VntN9va6QGLphvHM3B9fPfYiRgxyQY587nv8cvYjkYC6U6wtACekEK6sGd79t2junSBDiX2jaszkPfyJXmGCQ5Y",
  "key34": "61fWADwYpvxN6bnnCi36vDc8bZDgdZ37FZVXrahrRauLhXd2r9PWnfKdoRpJe9CNf5oF647r25QvqcvHTKrygEb5",
  "key35": "526Wpt7qhY9d2UhFgA79htfVMDR23zKQf3ULzcDGdBnXVBHBtrYdkxGcDNZqQhRiN4f9KPNny9ej19NvxtRJMvXf",
  "key36": "45suMvgs9QZmWMUQEoEu3ATZ5Kt5L1PT5fq57dSf5Nb2CBkTtca4PHTBJaXdmPYcyxm8zMQVifFzdp4ztb1jqARk",
  "key37": "PWkFCki2TF5TsWLPuUVNqN9LiJEuVHN62b1GfbB7nx9i1UZD4e7S1PpXKbVRgNuxybh1FjghZtE9dtum6zskjei",
  "key38": "5hcZXa415rLQbw4Qypd3mgtYctxbfkBaUrkY4AG1eypkapZeXNZZ4m5nHw3SdTHX7wVAH5jG3JWhJdjSFYkFkywy",
  "key39": "2RXYHSNP7WkugoypggCbR2i6hM7nYnig8HjPRi8fWfsVe9S5Mqf8bdkPLxEr7Rz57rXjduPWZkxwJ5qRvfpACwDP",
  "key40": "2m3gyCCk46EPuvkHL4eHj9dv1c66y5Xdc8pA2rYtRm8JLnZKQrkNmZ4SaoQWMRWGJqbmsER6sPeSTYt5DPtb46rY",
  "key41": "4jpeqwAUAo4iF15sBCUgEb8A76RvbRYidZJEKSQhnL2gteoSM6FcohedbYQ4c6ujimdiwwHuKNjefPwwXBmueKS2",
  "key42": "2r59h2NyHGsAPK9WjbJrpuzTnMHgF8obBKbuF9dmvJoDTFNV2HsgfPNonxzVCvsnNguUL4BPvxAEcxbJKStbh6eP",
  "key43": "Fd58ohEhmEH5VZVggotFXZcJhixrvPfDPGwseQSuC9pejneDWsHV9qdvSvGr2X4aDLRa6NLBJmZWf5oxHFo9eDb"
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
