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
    "3e7o8iFM4wApBAEAoJVfDHFp2sBRz6ipqnphpYKogqWjcFdiGKNEbEYFCJvFwkXEaP3FyzMBMs6mWGqhJe8z3rxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PJmgMJvGJ7c1sVx59E3g2gnKizznKw1xicJk78ftRUDrWMJCKWH97NZYf3LxsqChk9B5qKMWoGTrn9z5ueZVD9x",
  "key1": "3gGTXjiSGfmtwuSUP9gc6PGQ9MPLs3xVQjMxZAG9aun8D5PTG3gKzPJU4xh4s8W49USVECH5e5S4fXownkYP9Wrn",
  "key2": "3NKUb4y8Q837Dz3TyJLtqFSPDAasr6hxL6h2SfSQ6yZUAJxp4ScefnaodvCUZmV8WcwGyrUExh5SB5MXasphN6N9",
  "key3": "4rLk9R6aQz5WP8UxCgSfnz9pMfJg71rGRJ1LgrSYjcRmdTu3SAKZxawpw31bFnDrXJQKVQ7rSGFJipsas9oPHBFT",
  "key4": "2Hc6e2QU65fJKfYgtwdGLw9z2L31aXiGb4jV52yF4oEuqGrsjZ5XWgqhjueKUYn1vt4zFKpGES2NNADnqBJrxs3U",
  "key5": "vJk8jJaJeCAGam2XHvZbDQZ7zPEkPjV78YYVG23MESdTpPqvbHDranCRPGRaMbgHDf2H9dYCssCsSzFpUUHiYzd",
  "key6": "KE4TBRdCWG5QaGY9exGuq41U8wB8RibhduJg1RbWbp8ZvRaa6QCuM6UAzxbXiX5qyL8v5WeQH4v6mx8PFuGBuby",
  "key7": "3R84m1nQ6wBwCqayf51ygT3NeUvD1WiEq8yxv2SgpoaDfHer1ZMs8vdzLUbNe5caPudK19Dd8FoB42hD3RkgAuNW",
  "key8": "2291jqvJkBF9JbdWFztPxSG46ocBNaWcxzaT8GzBh8yCWZzCMpwYUAr5GURQW8vibcmC9yvcUVeRC6oPjfMNL8yh",
  "key9": "wFrTvKWcfNho48BZqfhoYhYLC1uP6Xd4ZadW9z3VGfi3KR7BB7PTHA98AU81QcGY5WnYRZXWfHJMFWmZux7Vv9E",
  "key10": "4N497EbmCnN2J5FBtjmoCcEoxFzcEYxtHf388WVsEMji36nwpRoqiMmKFGoXwAXysF19iTT5u3hfSArd6QkHsCC3",
  "key11": "9JG3Zsg67g5QzcFj6gqpvY59DTy3k2XP6DccBhpEbMss5y4TgY8t2WkG62J4uBZJwePmA5TCaJHg1AZYE5EdfFs",
  "key12": "33aic1BUgezs36BvPf55dT15dpz2Hvawii1MH4TPmFgsWVa6fXyd6rB1WoyFM7WbxDiCewi177EXtfLVdrZrQRZu",
  "key13": "LD48Dv1ezdnoaxyEEi6uV1GEipsQ9BjMvbSBx9hZ5qp6yAposGyRkDdsxmrFi36cXbp8Q6DtSpWh9LJYYf3LGin",
  "key14": "o7ixGJyYivdDQWXEuAPvn7hHwiShQBiZ9UaPC5LUsWrE5v5Fsaf2bVn4oQstqTijCtBred3W3nQw8fx92HnAJwR",
  "key15": "5uK1QZFUT7m47DTgLuNZDxkBfDW3iy8szFo5vYZ2oMUUprzpQZAbYdrGBvFYWGqWyZxiy5h4ZfeyHaCQ6QG1Rgk3",
  "key16": "35FKBAYCwrRZmBhGytxMTcyMCF6DguJ3hsGQBrpBPLhddPMH6i4Kdo3G3hVEgo3anFd4F4hvYkp7M4hKi7x2AKvW",
  "key17": "5YWQA3riwERimF3iNFE4XU4nVcTvSLuCuc44H8XjagDWbQUr2RbK4JnaBzzFWrTFxwP9vAkrnJaSdU3tmEQjRMzT",
  "key18": "2cZjh7L3wNo3id8AVgptaY6kNmvHzT54LX3eEqAsuS8VKZRAf5vjZi7z4LUHN7JDbXjNqTbuqBZ17WkebPPRQT8v",
  "key19": "VzzUveRgKcG74kMGJCUwrzFffa7KCZTHFf4vpqivp3eaucfbdJfvVKRnWFJJromiHsw4fLtnLXgWpCGYPUpWbK8",
  "key20": "8HCgVj22NcqKRVhoCPL8wbvU6CDu2ucvALgYtKM8soSrooauV2XhAvrnnyxe65WGbFHs54VBxma1SY7L92NfyW8",
  "key21": "ciseTLsFyNphx2vc752iSkpNa5SAVqm5KLAcqPheW3Wm1ad1PqFp43o8CB7JokFVj8gvi1GHT73EdmPiCEKcCjR",
  "key22": "rr4dbYM59a69Bb4etvjHF1gB5YdukoPn2HVZhURibptYDhBeYkvDKMUVZzXuLWX6eiNbjhSpkVqszQxfN3A8v6n",
  "key23": "2ngEUAdVsGoA9S2a6cyF7tE7Jd67KRcPL4Jd9zwcNocdwfng89yd22LmGngqYosQB9pYLfa9JQm6ngcfneyLEx4w",
  "key24": "62XhhM8H5Z5N3ydcngwSbQuTP9ctviaAG7B1EAKkzXMjhkNqUbjDbbXjWK641WXvf27gTgQb7MmgaYHnEU14xYkX",
  "key25": "57y31ehtMMNMUx3aeYRehVESbLNsGaCNmLGCBstfYYngTbbQkrnEvfc18Ep6hRDVnRNuECBF14gerKusCx85jrTk",
  "key26": "2Bj7HR8otPihMhaYVjfYZ4GDN9ZntHqBzsqtPmfXYkgEBGcGf8bggWGnwrDuLoTjgTfZLKsNQzVKp6aDx3gbqCnH",
  "key27": "2W59jWGqxhv7CJ1DKVWPnAdg3jeRfqq5mFvk9p61bCT2Z1rWmiWTuRpPnyqo6edLnFyQYViU1uffQsQEASo8obz3",
  "key28": "4fvh1hfFbLeBP8wQjRx3gdeiSgbeC5aX35SASaU1P54B8rmF84obD67jJu6vZVZ8jeJ18UmWspMimq668KUAkrcg",
  "key29": "2YPgsKZMgkPLUiYgWPgKVvsjd7cyvjzmZKEpeUThvYLoC2VwJXpgwoXZb4prNRaGCUJ6HzPh1kaksvjZsbAxcFhs",
  "key30": "4fmec1Djxne32S3BzLqS5mXr8TEEXFQDr5gFmk2uXwbukwWa2MX9JPw5ELRX9Mzu92zvEJg6kTyQxreTvWVyvuzr",
  "key31": "5QRpDjyMBuCGE8qbQDZtnJXXY3okVTaQZNW4gEKm41dUDMq7AterobgA5cteyAhrPwRE5AwNWwa4EWCChW32TF6Q",
  "key32": "5Y6DyfdX76352Nie7VHDGCzLcdQVaFH1GMKJhaV43NtVLyf5wyN6rDvGiFmUm1StjDydxXj91hhHM52uNPqLupzW",
  "key33": "5fjVYJsnFCM2RjPZ8BLC7zVNKAryhzuBjHwL68C3Zj9sXV2myasBg7GrfogRPh4HGbPPLcyAudWa4nDYWEYGsPsN",
  "key34": "3S7YSKpHkYLSZU52EDEveViTSGZBsEYR7NkXM8qh5nPi6qDHHdVy1Db1Db54gUUExkLPyLYvsRn4XDH5BUFdS8XF",
  "key35": "3nuFq4WXWehB8UcCqisB7SGVZPHXK29CtfGwPKES3aqMtqywZsjqSQGVb9toBwqkQEVE7SAxsduKxkGWrcXT2rXt",
  "key36": "4qhxpkwZDhVzCMJzw9x8spPw1wvjUvDHomfAecfyjr6VSQYiFMrFyDgE2BUa1FMMA3GoygvzMBEHui2RLXrBYadH",
  "key37": "4dSy4eyc2YjxLmEx7wMmtoVERnrKSnJ7Bg5dP5VcMQFwYxcWAFpBjrvdfoqWAuJ7VFDFwA1g82TAcD7BoTUb2Y8c",
  "key38": "5NwNetPpmJCvyoYNjJrt3UNSW3SvodTKPqvcv9QDM4Qi6psQUUUGN3TydtgvVhMYsMzqFhREPV4Ymvc7uqBtoebM",
  "key39": "5KuhW8VydZoqpZd4nUikS6CgjQMJBXv4C4vNtXoZYSGYhCAnmdqL1DVkh7UDujbaizWZocTTKjhDivZL4rS8PW6p",
  "key40": "3mokdXTZUjM4neHbEwLFEokFTx3ZSY47WkPQsNCaSb7NaaATsV9TQnnW95RYt2L7rUYn6JRFZqRmjeUF5wmWhmKR",
  "key41": "2qWb54FggLn4QcEMU9WTzXzcgJEoenneXsUJTjuSRyUeBKi5JpYfoEb3a8oFD38ZDDRYZb5RmeAyqrUSH2x63mmE"
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
