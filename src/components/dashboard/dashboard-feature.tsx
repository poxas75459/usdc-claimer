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
    "2sjjCzRT9XdpXNKgmkHT53gvpsudFy2wp37rB1Rw2dz9g3TB61h2FP3HfYqTkdU6PirhKitRjSrHgnSnLVwHQ8gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q8UBsNKMEwGSpkQ9Q9bmuH7eKugcxSATDcnvMSf6cqjHPcXQYnXXKTwNRniLXGVg8TnF23tCq78pDV3QSi6QnSJ",
  "key1": "4SjZJtjN9fbqMYK4Z3WVMZeh6VPh8vYj3dDN47wv2XeVM9iNKAdw3UECtTU4k9jfDQm3n2VgDYKMYTWDeayLUULJ",
  "key2": "2ccvuMB8uPcCQLKQDCm4rN1fuXmWa53h1GsV78PojFHZid4w1ELAhD2CQX4hM2mJZwpe3QpvHKb45qTpyPiDqAde",
  "key3": "3ov8KSD4zJxzgpe1PFn4dStrDoXbsezrbDj8bPQGfvMu9sPFfTCTvCYEj5YxeQq2gpFNgH97jramZNNXev7xRaT9",
  "key4": "49wx4RgvcYVDUdQmWLSMGvMGnCh3RbMdNxdcJxNZfhpZdDfxKDNQLRbZswRv9oCiteMU1tHbdDUpb7ZXBrnhntT7",
  "key5": "5oi65znKNW4iUkgsLLJPyAEgPvh17XAsZLcYshkCf8oXAxHdWXagupDbTK2QepcHqaAT7e6VuVtEpZTdPKY3JSdk",
  "key6": "4T9bN8W5TEWnThJNoDPfsXtBR43Zenzhysu5y8iSz8wge8vpjfqBHjirwDvw5rHSY3iLHGqdVjus68keRf1sBbV8",
  "key7": "3AUwd5toNfXR2vNKkuBDTrGrAcxhuJrXjtGRQqCYN8QPTpwsVmf3iuTW9wSjkFH9Hx5aHaqXPp9reRLSM5h81nZD",
  "key8": "Xr4MrZUxVPQrrYXQotyNNAAFa4K5PKu3y2iwrqehapbzVGt2JNyNrKMPcdYqo3ubbWZDk5r5YvcUKghqjbACVJ4",
  "key9": "27d1h4h9uaRa63hz6RKopKF9ijq9bsEtYvvrcQMZHocx47p7Vd2QDH1Qkrg3rTCfENo8AuCL6rDxU1x5Zt1jtkAF",
  "key10": "YDGNPfagHSEKutxgSqBEJGisHbEBLQjUhNMdXGm9ys4tpjoVasSzJRwekjZ44SRjP6SEwo1Byi3bggNQ5uPvKmp",
  "key11": "Y4nLkGDVnQtV8m9tUmWKmTF7HsdM21pj1nMFQ1RG3ffYYMsJXEErsL8tEz31h7KPpWDqNGLJydiF7HEHGagKVQH",
  "key12": "CMT4QeoeeYEeChqPajv1BnDowRWboEHjMdSRWWMdLr9ghx1pJMTKs4ZWZkeytgxGXijui8MG5p5ysSph7CqKLVR",
  "key13": "5m2hHTHjLez4N7tj72v4kGWA7QCNHnCumkRVznmZ8HrK6UqECWDfyTmJEmMwgcNPCuR4SpC3UFuFBYMhRbb3zF4v",
  "key14": "C6DnPs7s1A7oJu6KdFtJZvC42JyakLD6agRTY7TZepUDb5MdZRs1wTWJa67UX7JZy2owKEdGawyg9xQFBsHtvJs",
  "key15": "5jV1FpvyvSGWFMcrPvvdMLeh2f9iQBzvLqa9mpBacLfoWbXYe3xdRVDmRJNZcjQ6hgFSgW77Rxk76qRGEikduxqL",
  "key16": "4VPQYNb7oyfvrFm4cY79gZnP1mYgfCzALE9xX4hnq3a8MygTTbsxNAdLjUjH6dGp3Z2vSogfBw4ZtCKBDfUADXoi",
  "key17": "5bvWSsToBcG8418J2dGDGHpNZ1d63ByR7PWs159sE6F6A471qm6WzHUMTwbxEbANe9TkBY3VoNEJffjVhFCFD8JE",
  "key18": "43ve1QfYZ8hVxN9MhCV964yhsh6tQTqAHW8Gs6RG5fupWPkXJYA3567QwqEEjjgEEn4ooxydRtqJsjRdFE6WZyC9",
  "key19": "3cXitRoQTnDUFx9GzZ9gQ2oL8EfADhVkDKCGaYSXLCEQPzSbDWQ26LGwNvYbXeUA78DH7wSLmPQHicKpCVifEYkG",
  "key20": "5ntfLuiAEWG2vjHwPFDTiqCtzf6eVF2B447rLKNk61ZzUMPfTLje1rbSAPD7KibwD6ujxguzyQ8psJqwT89aYSwu",
  "key21": "2Xry1pZLGX1FJuYpShJ9zoVjmLFvwJafWC8o9439SzJscajNdfkGAFgG12qKCVNwzcDSWJKVAV4hj8dAxGxdCULy",
  "key22": "3PH7ysnPYaoo3QjMSKjZVyp62NCp7TNNvpeveaxYQaLkxo4hKvi8Sv9kLTk4tZYC2iTkAo2kpJLUd6W97yYmt72R",
  "key23": "2TVG9z2L7PQRe7Cfqm1PLrs7YyD9xXoudxDx85uXpgZkaK68buYz77fYjpfSeogNa2Ex2cKMhB2jhpav6guWWgDF",
  "key24": "LyzUyBmKSyS54Ug1ZaNujnwmojmRMwVetnvD2XD3AULAp3rqCG9XcoLRALvFNmAJfGQ6CqGk71VYESUXKV8mG1w",
  "key25": "hinbfAqZDN1XBi54UGTUVB5zwJaYf676jDLrKPCHAU6T44vpFDM6PRMfVudNx73uaKB4UwVdLxqLbh3cREMUxxx",
  "key26": "2qTVf4FU66v26LzZBJk1jGnAwz4oBffT4h3BcqQZJCjBStE8KUB3yLdCmo16RmnZ2PZjYbML87K5jPmUNH8AsYj9",
  "key27": "5LE47YctxEU1oBRdDt51xA452VRXU1Y7Be9LbrSmj3TQ7qec56WjW1tEvw6btn1QuwNa529u7RyyFdHCmtDJ5KeV",
  "key28": "3nR9kQncSvmbjaRNWH5nH9DB8fohjDGEafGQj3Lt7zegqgQCHQNu72R1syGrSJN6RBEpRTDxhjH6obX7iMbWZ8JE",
  "key29": "4u8zVDBE3ZBAKuE77hfGsBeGJbdHUSQcCZv2G742yYpLHbeX1mRULMzFUMYGjZoH23aS1gZb6Qj6F5Uu12UPguna",
  "key30": "3wQP5CVBHpL644hf3rFoXJNDYDgRPkQqyNhBXWhbkc77zGsyZ1qNEUm8grZzUdWBBBx9HyZP4p5J1aeEVC1wqbYw",
  "key31": "3jPQgN72bzk357iZGp5Z3ezkKDSo74kv7NUtNZspkUarjdnPyjDUG8s7PU6TCfxq6DrLMM69ki7vpefWWKZsXPVj",
  "key32": "2vjQoq58GZB6F7Kk36mHCFW4NSGjGCX1W3bxE6Bmsi5safeB4uDybT82mY8RHmsdrKyXQzJqXHFnBFpTxBWyDYkU",
  "key33": "4hWQoSeNN7TtdLaKXghdNNJE9EfhdviHoZ7eMzn3e47wBvDeSxLksNm2gwoCQDb5rmzdzqjVEPKWYwLPFS9vy9RJ",
  "key34": "4PC2FHX7tazKpkJPgSdhgj2VuSjduDLyuMxw6SK6tJNQ5LGKDCbat2wpezmEQSvjrExCFBoKLQ9CXBbDpUg3X6R3",
  "key35": "5J9aHgFjo4Z4sWzyDmiLoMFMcMkrAs86Ju1qHHPyndTrR23pDaGFAGxarwPs8sS2A4HKip79pppG8zk67GgYdPEb",
  "key36": "4EKJTPV7SzpDs7KmAkrHSmsk3Fa1CeNwmajMKs5oSJDkXZNNLakpxatxp9Bk932gXenRLNZfJXo6CrtCMiF9NAjQ",
  "key37": "4s97y3D8Jbqzw7tPJt44vpYwGMPeXXsJqf5UswHabEdJyYs48yHEr4LATSrEdLL1XhRguqSrCHBsJNvUHcY5g6bn",
  "key38": "5B4oKZjXMZzSdwarPazDZA8BF76S75FzFMShKQD1rYqWdfE792vjtxxMBLMbWWBCtUmio4smcCWaHUmBrx4wdXdP",
  "key39": "xwWnZru4XwZcxFaAquf87msRFSeGEX9KF9buaD5rrw3jZR5KBPX6ELBTNu5Bbfi5VxsxxmhvuGyaidntJDV7vp2",
  "key40": "3CAwtwTKZgxg9tYmTKaU6gRBo9BqNuSw8iakuwW4zMES2SFeSnyp4zRVi3pqVVS7tcExRKKDQajUVeGTyaibLT14",
  "key41": "4B2Z4axJZf1484aSdTuHm3G6PDpx2uhvZpo2KchhRtqbEM4uJ1CvqZSTkaqs6erPHKjs4w2DWvH9yg33egseuDCG",
  "key42": "2nHigyog9oqW9fK8KCdnzxVtY4QrviZSRQy39AMntV2p6qZJkRGxscsHBwLzmSpCsWfhiRkgy7d67jrinxChSgyv",
  "key43": "UtmQZL2wn97SXqmrgFrhtGLquMCrMFKgt6KAR7uvZJ43HEE3bbjWhBBcCM7hYVejkUTpuh14sgD3mP7Uczj1tpc",
  "key44": "CXZgtQWFd9xojX1yeDSakMkJhG11hWpgVjCFj5pKpFd9aWRoxyVkZ8Pi3cNyhchsPuQ3QX1MjordNNwUYcDvs9d",
  "key45": "5EV7M1tUELTMkceS8UcdfRxGW8hMUPVJvVBw496he4wCEYpa8ZtjQ9vwuYasXk3LJ31EFPoQjGmg3Gt3x6gTKHeG",
  "key46": "2k5bogPidnkF2cWaxWfwwu5YacqmEkC3GwM1X4KtsjXGYiaarAGceyoLnBCYLYPe35JnDqfQzutYP5978mNKMwUj",
  "key47": "NZnbHGbQ4kAKpdZyqABCy7fqTzYQB6B6sbsEyydKncb6ijP1Si5zGCJTpwkfRjBom9NxgEErKDVzD9H6Xxn96eR"
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
