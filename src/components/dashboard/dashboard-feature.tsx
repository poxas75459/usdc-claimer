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
    "5PRZ36yx7jFmMRYbiqAVsZUkG2oK1FojNHFeAbUmccAGULtCNhyZuJmyGZZ9r8aVeUdTeoPtjsjwHXniBdxQuR39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yQ45kypSWeavVRLB4QbBMRr12GQbXWTcug48fkzMXJLUT5cgkNcwaZjDrwBGCN6m4RxbY5G5ycSqrjiAcaZJz7",
  "key1": "5LciUPHKTsoT5qv24icHetokwyb3yAwbkhu6SWKHKxTqSQDiu85rLiR9dULs4Nbay7UacRvPdkiy8rTBGZqvtr3e",
  "key2": "4Hj8gVjBqoFSNYrQLVX8omfJAS72aBQsbpQ5bBazcF46cDX4qPQHMkNCzsyJ769tzS6D6Q2nBtaKns1yoWdRBf3j",
  "key3": "xBxQqTFzPTeTSMiHyByRXSr84M51L1verrjpVEb7uWRB4feziqXbFeuxDhWTFE4jaepWLyASfunPqop21Yx5R8V",
  "key4": "FePUqJnQCgkCRuS5PVG3KnL6vrHGo6syeyNmQ48ZzCfVc7Fajct7CGqVKYnw8cd8qf3QTVy3xp64ojoXodedZJt",
  "key5": "3fM9hzjZtTmforFEaNQbmiGz9Z3ksv2BNPEWJkWPuArVdTDXnLuvTt8sLgt2VTx5AqaPNwd4rWC4SoMtrDJ45kY4",
  "key6": "2vT9aShwhJpyYK5V7nUJYJ65tu2AR9ViVG6iUQxdTDQp1Gf6t4aGZfbTmYpXS2hHq3tRyEUKQBPmrgnCMk1BHTGw",
  "key7": "2xioEJQNaz3E3AykeqqQbvoZjGKXNSe2YA183Wj3Eg3gfKKRg8aMnNPprNY6FVyphykY1YYuwd3JSdmw8er9Hgkb",
  "key8": "5sovbmahHWSrb6w5F9VZjwfRRf2kdFYdsb3BtizUdmJdKLcAmEcaMffnMMQ6LZW5aNArWkTpZ5ryK1U6hssNuF5h",
  "key9": "cR5eyRYtDeuAdmso4cs5DBqCtJgb2mMEoM1CPrG6fmdufDTx8a5jtyPzyxDWLTf1R1esNNEhHa1dmZrPehoM3s7",
  "key10": "2aJ4KhmfnVaGqKRERy5YZDwLsUbfpyp1UsQCs8WTupNwYcYoSFoCnfZkceXTjDMzzEfN1ARV8M2woeZCZT3Kkpxt",
  "key11": "4zRU3CNpcQcfxFGTGaByfJbYrX57NJVK8og5Bc9g3SVLY5NK5kRuX8FJn8vg5gXG1kapp1x6VU6xkW5g2BWyAYbp",
  "key12": "65uWop9sCEkgeTMy4PqyhPAQWg6vMPaeL26ck48WvHyK8xuRrdVMRgRJnk54nK87FNhTXcSzYEuQcjgMYmRGbE8H",
  "key13": "4EGu16CKR7NHoey8D7b3g4vWT7xi37QbFb6v9xFK7aGMMmP11Pfwmme7ELDYtoZPBmUGHgpdTw2c8uLswMKL4kWP",
  "key14": "45jKkSVDLuGcKrN2mMMVPzkjvtEPSYLkw6yCkZXncw3CQWKudetiXPXsHTEedB8kpSbxH9BiFtCQg2iikdv9iQqM",
  "key15": "5Y7q7HU8FJsyopDRj6TRW3Kbd2kJ9uwAEsYBp3FRKgs4aBHehRhD8ySMmBkXN7uEJS2YE2SqDwJa3BBWEGUJdFZG",
  "key16": "5F1Y51EYJPuv9pevQAEnH9enqZoMKvYikfuy9RzGXpc4w474mmQK1o1MtvxoV6DVzMHkVcv2bib8v4eieDY7DwPA",
  "key17": "24MsSHiq1CRBVKtzv13rjnccWmKVZL9xHb3pVkn4Prc7MCPbg3tig8h5zMcP7TEndijjfL8fnZcbX9i9RPqJf9tT",
  "key18": "5LhFFdRGdgAdzZqoYDveEEtWscSUJ6KZL7ecjj76jb5dVdNyC2hBAT6rHgPsAyDEBj7iUHXN392K4T2QUeVRmBcU",
  "key19": "3SnaCEw8ZiJbCZ2B7smoS7TMB4P1gcv8zACWM79jL4Sbw6ccUDajiWw7i3r3jWD9V4acNyd6KDGEj2skrqSambPh",
  "key20": "MTpvF6tSwhVWMzqxrxC6GhgFJ4Ryokfc4fxfGHEKpHjUZdTWmLfqF315ZYT7mCcrMLKaeayKAofFLwTfQFV7EwF",
  "key21": "ATeWzajQ5atBC7CqQfKdFvZVBx356A8W2MRgWs6am3pBz56muLn9HGBrBx4Y4wfDTzEPD8rnJHVFKZGxtvZWbki",
  "key22": "47T8HK1iVoRmULPVtS7zfHydGXpmcTuNXeHFTZzxQSVBEQWe3eZ9XBAjSKriQi3fW6LDJtEDAs9ZnkbjganVCGpa",
  "key23": "4bc15SwzjATaXV1CkkEoG3HLDMnLWFzNpTvsQKT2sKzxRsv9UbbVLBmYHfC2vLrAexK59VwqH7mPMFvCUDzkoEfe",
  "key24": "3JmcbKfKvLzZGdS51BHB2uiYkhfxFt2suxBpffrybMT2CDrZFaVQKkDniRnicXjtyeVaftAJmQNUdvef9rwVdwbZ",
  "key25": "2USPSSrRcBUx9XMx2idE9R23oYQZEJ6r2e35kz7iRqPVZEVA8QmvDV5ujjBhvNJygt4y6LxrALtwpTETRMXrGeLi",
  "key26": "2H7uRJZVysWbU3vKNebivLC9WjUZ73bgsDUHdLwMPjZi5hznh1ppYurPwDSU2AkcpPXKYVQrLnNpXzkh1ccuEPUS",
  "key27": "474S6nNSgvGURVyWwVLuf7RZUYEaR2f9x2zriDYNGwg2UsceYpA5gon81b9xnS1rRix8sbXyavS4SxtYwJCTKC87",
  "key28": "2omD6hr64Hrs9N17HAntRL41ePyo2NyXqwyjrzZoRwnLBu3Lkj2EoYpm1R5CD1vMVtUXyekLtvmaELjBu5KvJ7qr",
  "key29": "2zDMKNwEnqrxCYeb2Zqpc8pBZnuxYaYAP58E8AHcZ2VSZwTX2PNJhHRL2sowgFyjJqssorLjtzHezyydEDs6Df9H",
  "key30": "2AGxAN3sVgn3jD4CUhmruE1vdx2mC79E5yk5FtWpmJFwzDHKTEdUXtMFxmRcq9sVsww22jy2o47YSkhQT2BY9QgK",
  "key31": "R1Q5dj5bgWu2oZ3L8Jy1tkiX58zoyHEkV5vcEWujmQPhvTh9s6m69ZjUyU8t1VsKPfpmS99dhPf7MSd2JUKT3vX",
  "key32": "3Hq6teZ7WkZeEw7u1QP5Ujy1w7siVh3jSnZ4jKfa7JnZFNouBYcxf8aYZFC64n6gfTi5jQ1j1gw29dRXPRukf9gR",
  "key33": "3iYgDe85VBpBd51hEbjFiVGPg3UKJRyQkLXN7sGujhA4TSiBvarjYWvrrH1RoKgQDboFofB2rekX37MEwTyHZKKL",
  "key34": "3EhVKDorC1bm2kE9Qowi6J8JJC2fVmzzpwE1iCUTcsJcDCTqwYgpeANYtiBsYoto3EfvTpQfdEnFLhhpZ16MMt6j",
  "key35": "5N8rfQWeRpCJFaJxdX53xzvxqU1Ng1NyYRxuoWHgeBYYq9kGd3vHKmhdw3n5HKZaqKMgWYApnxbenRmpaZrBsT5h",
  "key36": "21yfFrg169TrmuorcuF7EabSChUWRukRptVP5FF2TWFLH6NoDVPGshjA9WFNeq38ikeMrWL2Lxxa96iurY5Weti8",
  "key37": "4jTovrU4gGAZ6jo9RE4cyFyAJaNMH6WVTCxbqCmgKaBnfL4kLwCL4ZC2sAZS9QGhmiY61FoL6ti5E4Qo7T3y6psR",
  "key38": "5XXvCcqABjbJu2XtJ2qdqKNBiqLAV8uB3Y4sgRYCzas74WqEzG5GTjUai3ged9NCAxjn3eDZ5AZhAsC3JDvPiLXT",
  "key39": "3v3GdXTpEJtKZbKctoD9C1ejQrUhqzs8dpuA8gY9woaKjevR9X85yVJozoMYu5HWdM1u9nXup9HHgGt2eSsDNRpp",
  "key40": "5juGqLLpJwtg1v1roEgFmpAek3ucSM9njnYuCLsh2cmaffPTPaDKg1NobfyUBJDtqzhDL8uYDbCqKxrWru5pRQED",
  "key41": "42w4wa4DG9z8mUuVMsm3ZMWoVX2AhEKdQxc5rJPFVwGzJuiZXsnV4VHpDa86sSVX2m8ZdwKJHmvnySeNEcECfVuD",
  "key42": "2PP1NPhpurggGSmzyMoaRKUPghUxRgyPtpgREpzJyFCS8SCRyjvnqivj73S8hu6623adLLr4Ss2due7GVyoXauSL",
  "key43": "38ztDHLaeM7Eu3vfn6YTbkS2zj8Ye7aNo77vhKCYt9GPw8sHQNnLkTRutViBgazCtmnAWP2FBCEuSnX3VLqNYSgP"
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
