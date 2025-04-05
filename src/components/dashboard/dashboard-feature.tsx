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
    "5BG2Gh89bzfYgsNCT6BPAoz5oCXVXNKeDHy67pmrDsdjA52QVzHprVxBiGnw6DPxEE8TYnYvpyRKahYeaKgTuXqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24FE59eWetLzLWkdrddFAKNmBYiM3MAzihVoinxVL7AEmWnbnUMrg4Zg9B2qkLzRC8aToCAvDVjTMgKTRftnuCKB",
  "key1": "zvMKWasAF2a94iyFC7h4sjndvKhEyzKkxzdM5PRRTcZfaQmKJEnHRJ5RZJFW2JdTskXBdYvqrJXCr376zFf4yrg",
  "key2": "3JS7bxzMynweVYoaEiBTB1LFz8M8ktEcavq6H4zUSENZbGFoR2fSXrJkVcaDfV9nFiYCqyewZCVZCB5ym99CNESQ",
  "key3": "5hL2FjMBUDPSy1XL9hUmBWkgmTQr74Lxzjdc5bHcMRUvyKPsTKetRVq4ZvNB6ndeR7xaA2pZS6YP48Q7c7UzVSXd",
  "key4": "r6iLzovY2qniZB6XWjtGuq9Rt1WmpKjXypDzcvLpWeBLf4VC8U9zEvA3GsH3VdNvXWpfcaVhMZkknjSu9bbdkke",
  "key5": "2Q8hcukpDgrmpNa19a2yAsjtg3RTtquSFHffe131Tusn65tpzRUUzktdvU5bYhkMfZFDAtDZJBP2qbgg4xjJa7hu",
  "key6": "3Rf6jPwx9yLHqAHWTTxWPff33PcrdiHxqF7BrtnRh4pPjts7U7oUmS6gA21RVAVevswqKEt8rAqzdeK8FG4cvTct",
  "key7": "2Fi4qyt4AdSG92MviygiSGBTqwq1TCxbutxrirHwo7kpQvZYBRGjPWbSjMoD7Df5JkWw4xwjUkom8QTjzWEaGJbe",
  "key8": "3esbYtqTiP3ni7VD7kcYeBoWFgf8GatC5DjtEbDi4gnvucyGwpSuxXJLWeiRTE9p2JSE9igMECtC3wZBzkoPLcy8",
  "key9": "2C22YKwv946fRT4zGu55NheSiyAg1nCGVSXzntbB5pUkHGuiW5u6LqNY4uCPf58nvupKQQM3a34YR9EW8yaaZaT7",
  "key10": "4oNbsEMRi62rkmW7H59B1NhYdtDpxiSiouagGi4P9kzATh3hGZuETnJ56Dq1fTvMaHuyuBHoCTuT83yWbkpGDUXH",
  "key11": "Hj85YEbqncGzBsemdkWHjDzjWfY2JjtUdKFHYavWXvrrFzRYSLsGwsjT39rSGkyoZEwpdWMDw6gue6ECKh3REWF",
  "key12": "378GED7Xfriq8EpzZoK2XMXtAvMEyRiroiMoiUWjhjrbvfPNwnnPt5ihvZPLp3hzHat9ocxYvm2DmFZYPfDJtWAg",
  "key13": "2r6MtoBdtXwG2mHefJS3gDT7xErUrwKnQBUz4zWjuiSQ7U2DLoTVnpfxv3wLajBbT1bLpvruR6EpC4ca8UPgGKE8",
  "key14": "2LiuvyRKYcqpV1ExSCWVZGdPM89oiuCd9JWp8cGRUPMHZjfRBzQb16dxJWTChrFhQFocWuWiczkMvrpBaQwXUN72",
  "key15": "23Aq99CHHqeGbCwfyYzAeFQach4Cmcwk9ZzSLCzwXzxn65rz7nuB3o2avhB54LN78wZKdAicRvJKT5wJgSd9a3XP",
  "key16": "2zmKeSa1H2QQFVKLTStSu3YrFr4b54dHps8w8HDpRGqBGWRLJsj9Bxh4yF4JuUFhTHyriE5uw2rpqyUy2NStWpVV",
  "key17": "2rBM5DJv1hyy3SMx6my1Lpcebn7VmvbCaLbmYXmoVNyaPgqzSrGNrtw6AvpL9dWaxcsYCq7T6bnwJUqTf57tjzo6",
  "key18": "3mEs3jfUmHRocqKB92Gt5MtgWLH8vzLYAcVwNgHHwnDx4JnYTLb7GEXZAEkwK6Ma7i2Hw7nMSn4niRPkHUVxsf8J",
  "key19": "5V7wZMFa6HmwFqdMwhg2mrxYRQWdxNGbVmhHMd6hhjPovhpPX1RCWg7CybFZuSkb3Lg42aHcnsa7fjW5yet1Cc4z",
  "key20": "5KLN4iYQaKK2tXCVT41fsmZsiz5uNcgC1GDae8PbeF7712L7J8KkGnenLLg6eUhipYrFVrDuVBb4GkaqDSWKVUxZ",
  "key21": "5aoU9iaJBa9YxWzwmJZyRPiUjeqYn3t5KnDdjQ384DP7GEAXeSpW78aRkoTK1GmBipHqTZ2iT3Up29etZKQXTSiF",
  "key22": "3rahJqQYVjKtHxLiAaY4uRLi8qxW2pP15WFpyCfYaPVzXFijhB8dov19CND58qpdic7v3ZFaYY6kX3cFhgWixo98",
  "key23": "66P7wbznMi7qksUZZy67FbY7s3iVMizDnJpQXxDZBcWgHgc7Z98bGoqEyySPgrTVbWqQoZyh2StTgSS3Eeitfsji",
  "key24": "2ACdDwwJq9KboeVdBgkfVeZejMwdX5LPxvz6QE1qxCw7nFDxhH5bbgCmj1Kgpxg5WNdcRmy71cyFYYmLjhu1BQMB",
  "key25": "5fz8HVnMahqq3qQ5wD2cCMjy8QEwEGQD816Aa1Z4pMQzHsiNx67XshGvBF3am6UGiaW2giC6vjd8BFYLmSRk6pod",
  "key26": "2qmqgANNyQ8KgXT3XaHsZEpdvv4rt5RG7M3zrfRymBkjhLGVZrCRJDRoJTKrjHwSLtAN9sSKHRPPiNsGKdgzPtgQ",
  "key27": "5DxGWz8B55EocG9NPqydPJ2o2mXBaSNNeHLH8vriPbbkGZ3kZQa4kUsCFem6epHubbAZQEc3gWcJvofaeHptpyNr",
  "key28": "5TFGVJK5LG944BgPy69j55sGaBn1SSjsLe86mAKruvT5S7gknHHxXnq6X5oWstPWwx1tA2KobRGWfn62NrT49HBb",
  "key29": "kZnrnpXPFA9qZ94pEz7mJG99BnVmLdUBZwvuepFwibth1ez8Yu4W3kyihRVGxzfgJ1bvJKYw1YbQNeZiZRnV6yn",
  "key30": "3K9Rk3QeEZHXBbBZ33aX2a9fP7NDBPTD3nwPVoKoBEsaN8TvdsJS1DfGsc3rdxrCaMeREMKiv8H5N39TjvExJaME",
  "key31": "4bwGx2Q32yzV4opNEfgETCe1wTBmL1yqZXuNtutg8e6efoYZPooHKugebdEaGqPWNHTHQWtTTV2Yc8NxRHgU691J",
  "key32": "ZeXgeZxoXPSKGdNWz5cNfKnN5jmZYcQzNA7cUSWrtuhUS6HjZ6cd6vVr2CgKadLBaTiCUnJvN1dPRTHeeJPkzKH",
  "key33": "5xgjfV9nTpSKLi3KS9WYi3oscT9SZoo1SCkSneqfD1tSqUCKNba2nQZbcSm12DmUjaYhnNwfj7ySCutLUtSeRS8R",
  "key34": "49W2271bTt5NhfPzsTzSrAyPn73Yqjrndec5xzncoxeUySgPxeRvGCd6Pic8duWQ7UhipA8jH85oN5QuLFrzT8od",
  "key35": "4LzkMiCVzQ9e2f73W3bP8rRDmLtTCD6GADFFgeFVhY1ogYwABwrvaQknBDjnhm1ffF8YDjjeNitAgRRgjwLPgY86",
  "key36": "2X1XkG8WM6nUWkzgf3MHRCGL3f3RB65fjLrPrNGFcq17ArH9qkiBTVdBXWUjNpALsenCCj39mABGckqz8wrqtv7v",
  "key37": "52jtgi9AvbU9Z3gV7GmUQZCfYRyJbKFtDrfJWySCcDWFoZCKa3LGKSX6ccoN3exV6DGBQeh9HVhhKsyumtz9PZbq",
  "key38": "46mFm8s5uYXfEdoh6Hb2XLbs1qLhEpWYgzzqQmY92Cup2udx7rF1H78ajnSp2SVdZo91J7iyUcSk3ucgWZNX6rgT",
  "key39": "4kkEnwCv3qUqfmJT9T5BCywjn1f2QtB8Pjpi27Csj8dKPbzWb82xyDxguQANTdqPSdXaPzFKZGZ7Sc7UuZhMZW1P",
  "key40": "2W9wXXsvPr4sbanb17GJuyceqGFvymMfpjcHNhv1M4fM1pFgiXy4kSxUVX8UtAKj7VumoZWjKXpVtXCTNVEsvJrB"
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
