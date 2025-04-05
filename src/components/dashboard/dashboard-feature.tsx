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
    "5YQWFDDY8Wv6KpbpNqvqTuFEdi7wNG6wmd8cwwCCp7SsdThjBUZGG6q4WekSY46vmYmzDcBExMzdKFBccMkoi6dz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sCrRZJ1gsZ9pxgtJ1q2fpBjjtwWf1ZX8KTZ6jBBLC765PrUDN6JHxrDFLY9in122cVbBLGKTrUF9yBnr1yQ1kJg",
  "key1": "4Gksg3AmfGJe4nA4GFzZ6tdBGfcKtgaaQaGfThyxi8Y4SrYsSaAJU5pppJ8Q3Zby7p6d5TWQTV2oRd4EkQ8PjJQp",
  "key2": "22r92bBrfYckn9da4zNQCGunHQx9Vjp1TSMU9mBB7wAkpzoAxtgVgjxbi3aZRBb5vYpy2cdMZGGHCaxrbcqD2GBX",
  "key3": "2xasRUHcQuoVzM5P1nWDRfRvHC6eXU4VduWQo56TuCJDsMoyDpdFE9gzuQdwgoy1oLYtja5Z3tuTUQtjskGnd1JN",
  "key4": "5xVG9qawLovNo5AkBzasULAh7P3XZpLFQb4nYy99X2jovciEusEfsF5wScP3JMLQw5E6eKnpaZyyi4EapiDtm8B8",
  "key5": "5cSQ4TDcbTnaYbU7L9CFGsfY439ALdrH89wruMRVNkdbcGn4iqfJTb56LrtdZicfJPhpe3SRFE6fMsojZnXZiSVw",
  "key6": "5Vgjc46m4EVeKkddFy9a72xekNPoUuE4qJBzPxe79dT6cjdfnvvGQj8RoBZLAbGjgGiAEbfC489fneyZB4Tfg4fK",
  "key7": "2A57Kc8BcBV7x1eBfDAEQbfasW5qGAcdf8R2URV1BT71zXKxjgaZxuTHwAqquiKCgpXUidvYiXAXJBgBGKn1iREQ",
  "key8": "2QoisMybQWTXniRYCWEbTBkdBN1YfPpVrSboNPiLSGocvrSXMXVM25XXv39Efdc4HsmA7jzj8Ea5RF9E4btpquB7",
  "key9": "3zSzqGqGLhciAacto4csow2LJqKsa1trY4kUkk3kr6GG4D8WsRxvTP1hzkouPw4ftBgx4CLuZMriJSn1nBaAMLrf",
  "key10": "4vv2hRwtVichHUYmUfxC1FVbNM9oqbAFAiLgBUhXSrWnHWjvzBBPJuRjJTqzGgM4ADofXKSvL6uRHtM5aB1UHgX5",
  "key11": "24tT7F2jNHLCqzXBGPXYNP8Q1pwbuAWsTV6MrUVcU3AHcCnEoxRu6x5TaM6ksPg4JgKFXeNvqmUW3VPSCv8XdFZH",
  "key12": "3FV4L94wyragX4BnoDBdxamaeiETfBpFCiy6cXchmkiJcNmdFXtENPbuPtTBNf3X9UUcs2qPEnSFKff71hNfS8cL",
  "key13": "3CA3hkAWh7dGJqb1PciLx1zbS6BuB4Ezs1V5MrN2hTww5svi54SKnYPBmL5sf8qqMHHM1ewrBiBVFgBsY7fDckHy",
  "key14": "GUyVnSNfqjT1ED8FHtDyzfor6UJxYDKB2oLwq9jme2C92XK3zqnPdDA9Y42vBUuvLZ9ofwcwPjuuFDRTubjQhyZ",
  "key15": "5mWZXFqCLfM4iRdPPATjsM8duJLrd1jUTFWZMupMZDVMvzVtW5Ej1by2M2r7brfiqQHqGpsJChpzwpp9DHsuAoZp",
  "key16": "wrSmnTSXRhy5BAs6CCKnkw4xDAc8n7ds4UiAGrXkdJQiJD7YhvwDgzdrWSsH2g5HMifbhvomvtZ9S54zJVY5vQb",
  "key17": "25pu7Rcyw5YckLNXrbYx6DpE5cQQdgKiPJDdjufGUDkmrcJKEFFjxMHKaCcqweg4nsQRwL94nNQEosb23941TMoY",
  "key18": "HTAVN2ZxsAJ1KfdiLwDHnVmssykkpFH3ytMLeu4FZALigDBKa8gJMuwSSrndsmTXg94Jbn6AXs2xgriMgE84rnG",
  "key19": "66htLXzUjEtvY1TVqWgm7mhgirjVuDwFBNm1hyhuyzBtDBHLNysL789AMHCySxf2WtMzgHDegbEySvdQnCrEQSJz",
  "key20": "5FodR4PLZdWfhqUYVDgdFoUaJZthZe6scpR29hTGZSt39B1ebxYeL8D9jicKgm7C4bKjt8xrzVzpLBYYsnU5a21g",
  "key21": "2VSW1Zhr6zPfyWjNaEHXnDZLC47CJKXc9uZQAEYiJSh3BHNJoWor7TsAX2os7uQjDGNiRK1rvNhnx5ZyaLJFLuYD",
  "key22": "2pNRvUGubjRuXWRjyvwEnD1ebois9JEWafJuioiogsEjYabMFDGgsTKsMKNZEHP5fHGhNpZyy3t3pqhV58s5LwE5",
  "key23": "3EH81Wia5DqZ8UPfzgmDVytFUPc7NDKHu1242UoniSfUceUzbVkge3dKrxTT5Zw7Bt9yK7R74aGxttJE1GDD9Vy6",
  "key24": "25ZChc2GT56NAvFccQy5Q1JtzxFJbAyFoA2QE6UB64u7HHFmW8s7WUz9vxgR1MpCdPm6NAF7Hnv33b37miizUH9a",
  "key25": "B8agf6hRe5RaRdmSrCdmx4qpNxDPhGEcfRkPnQgnGcDJED1L9fLBgFt94AkJYkJyrtKyRFdgknccQ5Z2Thb3gkN",
  "key26": "5fFszW6bUxirgENTFtcLbhnwsPD5ZHuku5xSWv3b5bVaV6SSrft8pHysBhtgroNYMSz6wUBzm73zuuNTcuCLggw5",
  "key27": "3vzJAE4N8R6XK2GFLyDhjMz7MepVm1B8E5zv8nzaYkpgjbTVLrTWb41J32iDYVc9gTGMGi1fYc8yKqTDLf1kDefn",
  "key28": "mBi4DEnrCcJa1F5zsP1k6zY9VZXQpQEMhYf2VqSLxao2B9jD9gqLEZQ8V8rz8Y2GUYdi5RBs83jw3DAH4qErtQt"
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
