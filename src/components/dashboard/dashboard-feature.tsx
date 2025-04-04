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
    "53WiPaLPpbKcA8qorbonWc6HiAPCfmjXjsCSRQztaCx1BAYxHXgCRbP48nGeM9mxdRuAZKgfMDz5A7M2wSEDMyki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YUeXS3ojEc4y9WrK2dJYVa2Wba5ihpXnGjTUaSU2WTF5rT3BAShuFsi97k7SU2obB5ajEPBnkcgd7LrVvCaCmHe",
  "key1": "2oVw4NMecoiq398qkoEG42eHiSt6Jz1hr4XY3gRdnepjf5S6r6ARG6Ju8wBnVF4E79SexETmUS6gPjA4Gxj46Nf9",
  "key2": "54smmRaq3vYywvWYvGAB7rT1rFowbTd6kKCdirTgGHdnSNk3bn9hvpMknqi8wdL6B7f8dqai7Jj3fPHk11L1XxM3",
  "key3": "33ZRc15Mv4RnmqrHeWhjVdeBbBWU4vBWfu1mkBZTjwZzT3g48v4vDwz3Mrpr2vfqPq9GWZKaoRE1RVfqGirfLJF7",
  "key4": "3Zh3mmiea32ZoKWkxWKqXemnyGfQx1BaRKNqX8AcvUN9QW4HgiBExJpyyRU3Hd6yFcWGJ4VjP7JLiqueU7Hq9So1",
  "key5": "2MB2QfTLrturkPXbRLCVZLk7Eqmh3YeeXoTqNDqEvKjg1t8aQhQQP5L3iNCACHCqzhkpTYQ8Kpnjb845wMqw1sJ6",
  "key6": "tuyuN8Yfby44PPDwXKeLqonS3WKq31xPQRQWAGCw9AjU9DfXa5qmmdiMtYoygE77doe8ZYPQahVCxXBXmCBb1bo",
  "key7": "23xczPTmdZxqYDXLGBtVyUYbNEKrMDmvoYKjgLJZ9irwuRSGYPeTeRKtuEoEfJ26kSbV74tF5L6Y6DxTyVscVi8w",
  "key8": "52XEBzLFrmtqyRiASDgPVAYbh43UyWkh3iyZQ4FA8bvyMYJ9PdWXYwmeZc6oMd8pExmiE2oNm1FtFyYG8aJXNiEB",
  "key9": "5pp6nGPcBY8si8wQae8GXYA4veN9oixNNF6UeTavJx2YnW4dPuHDbAi185YVY4qQTswpMhgSiWnsuVSizPDfAX7",
  "key10": "DrpMzqZTaD2owCkAwS3RS8XNZ48WqcjfxUtdZaN25sG2hxY3uGy52ckp2fZQaW1Hqd7aCUGhBCUv4BTCQPbXYqa",
  "key11": "4woaWHFcmo9JL963qA5TeDGFMxG5dtkBBisbK7PH8cMEBa3t5YuSLiKAEcbVVF7BwG624zRpqx4Gfev3d4zknGQi",
  "key12": "41XUTvGRMKGfvGoNSHEWmj8GhydUBmgAYkZBJ98bJwJRrRtPqHYzxdQt4UCXrv8CoDNokf2aWxxKdYiWagYNWpsq",
  "key13": "3mW9wnune58ynb9PyhxVKerwjvR4JymxE163vWQ7FYmhi3fqs2HiXm7PHAhdn7uX7NuySF1xtfv4JhXBb1ib3ZAR",
  "key14": "5hBan9NQP2f6r7FEC1pe6pw9NKFw1GwTW89ggZ7B4K4xS93sDViTaxQkcGFT9Dv1yvbJBQ8einyDAZdoizfLY86k",
  "key15": "3xtBRGsqn4XLkJpFv41vmdjLzzn17txCDaYj9bBcckTnGLrZ7cD32iAUJC3G7Wd9yhtEuVBcpaYBnbhFMZ86pjzk",
  "key16": "3DKi4vpUkGetMeZNvRV9dHLjfD3SRd9X4QzfPoYx3ckykvAmXHbfiy8uhEtRid4bQRryQEBMn3MzCjrjMzfuLyAz",
  "key17": "2XwnE9L1hZash5xoi1SsYRkyhm8xjLZDuhZcuYQ2EZA9Z7n3XpoHq9HvBqZb917um7zK64ntNK991p3JrkGyTihE",
  "key18": "56xuTbCkwRwsxFubLhsnMSCWxgTy47RomXyKPtQY9RGxVMSae3P6CUJjWVPCE4UtmJApdn4zCq6RJNHXjCdfCzgv",
  "key19": "5B3oDXYgzZj2TYvMrPuUiLptRN3fnUtxfANPZnZw5dNTmcK8E7bMYWkJ61sVgnYfuadU75abymvzUbfBxLoFAru2",
  "key20": "z9Hg61D3DsvsxtJRdkQ5oS4kBtv3KMkic3TZKqPPccQDeaM2ir5gWj5J93VgNNEJ3Yh13paBAFCUzTuk8Jh3ghw",
  "key21": "2vRgEd5zquchdPWsCNDN2DxukpVjsEqPWqCq7fPZiksdJRsdMcHpcmEQfFrM4ojJhgxNibbVcGGtgGi9DGnGT6E6",
  "key22": "5hZf13WqGUaWBmh1UJHM4m3Tq91c3ZmoJ4ohxdDNsVuVFDXLoxtdY8i4YKDqqdtrZRteJShyCqPGS6MYmEkzZMS5",
  "key23": "57RnpW1oF99WGNhqtiGnvTv1g7pSz3WQKynFs5tWnXnopvmMwuT1gi8kpbNWqV6YXMnSRnkoYUaE9ZnMs4SF3i5f",
  "key24": "37GdiTFVjqJeCuap4FKuGvjBx9KuLSMpTtu4sJFg1bdqGgcMJ7ZafE3BGVMF7r8y2DRpV9xSEYycv8LFqhXaFShS",
  "key25": "3EuqmdK2SdboEViM3DAQYQc5PUFcKwGDsNX8jVqR1uoFnuFkKFVn2neprEXYVVATK4GoeKhrxY3RHbxdmTXBWBM",
  "key26": "4emGatCC4nHEPaYxomCoCsbsBa8J81wwwSNRVsCty64jpm9EGr3yRP8MXwbBRWcEZXL3CCs5suz7UGMYzqwEbsoX",
  "key27": "23a1zVzRfAzkybewUpeKJKQzWtcPyiZDoWtNsrPmTHfyN6btwETFtk61jnckjMnd9GJNuQH5xKNqjmjFmuufSE2q",
  "key28": "61JqHtAkXAAwWQcFZBPSZcJfF77owUMC4QD1SDct5yGqzZh2uHzEBiS8qUVv4DAyBt8uHQhkdhYoBzzpzAqTop4R",
  "key29": "5NEs3VQC8psQpCwZFkp3HjAEhGhB6HbEb2cXr2s6BN6f6DAek35U1jeMf9jxzfXEkxWTRH6ej1gHonFn46mp89yi",
  "key30": "3m2jcTZmpEiVXpqGMNQ4dbtKv9Wu79q2hXMAeBVVmWMbbCAjBtVb4ydVTUPyeUZtf2AB1iDkkm1miaMpRRpSuNdQ",
  "key31": "2VW2Vy7PoU9Zt6ioSRkVEkXJkUZMa2CtpFRk5wVjD8NP7GZuDqAmGDvGWfWwha6GxqTyWbZzCbZUZMBdebCMvJwW",
  "key32": "4APaQnM4fq2he7KAzSTxvUpbwNH86NCBhAUN9pJT6X415K733bBqHqocf5XYP3pZSMNoZ874AyBEciD6fhvuTxbs",
  "key33": "3VBGavbrpafRF5Esq5pFVru6M5mZC5yPRXnfRGYGmrWMHSoCuyLC6JKKxoHA2Q3Mkwm12aVydhWAVhaKDcPvKdwy",
  "key34": "4QBm6TUiSxGf6BkeTokUwWMXcxReyfgnQEoimkyfjxfnY54L6ceuQEL5vr8mahmFALV9UPzvhtPsGnntz81otrq3",
  "key35": "rYniXkJbnZG72q3SNfpDpvaajYKrvfxByzqryhiDUBC5GzVbhCQPr6XwgyXDNbYyJ9uTcnLbSKDTcGsND82j5n1",
  "key36": "4SaaMyEG2QHsFwTJjto6odtAbT9hXb7NPp97e1ZysFFNPYTX8JfbPSyQdLKZ8idejJAdEsfKbVW3vjVwzgvFP48D",
  "key37": "4tZaybdXi6sQeB6HDcc9nunGfGRQSLoEUf7Yxib9nMVMJ26SVh4ewm3DfSNPWfPuQg7RrsGRJACpFmes223wdCHQ",
  "key38": "ouYHqoo1bX8oE4DuaFegWNQYp38ZjUZFw4am5XLZr2XPwJxiot9FqZ9F4N7SY517jeHv6zRzKahFK4Ay2Nkt8NX",
  "key39": "642DZ1sVt9QxMSzvEQNcUiSbT2x9Cqyj5tzFGyudAGuGBVTjZv6899TRvvkYrYVXcKChw3E7vhjm5S5YDJ8PDCXw",
  "key40": "5L8qmfezozjfJNxMxgok23j5mjeH6c9V3sFikDRAgk98XXJ7BQGuuB9LmZXFUvWBRhM12kEq63QJGfXHzoC3xSj3",
  "key41": "3EbnkCDUmKrzHhtkxn5Dh9qJGTeENpPwBPVU2AETeESja9hdV1hCJjhnCMMRgx3GS2M15oG1QXiBSnZ5GxawCPsr",
  "key42": "3jV7DERR7t3iNUkej1EjMqqrjvMP5kX3zyo3tair3hr4BAtvwcbz67458mgGo94Z5aLxK4pL16qLmkdL5uG86ody"
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
