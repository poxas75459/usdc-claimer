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
    "2ygEZhYFXcSvg42fZHR55dCrnZXNB6u1ym8soo1DZeyWNZYAGns6z1Gni6tzAxdER9dN4wqZKVKhEq9oLLJ5j1nX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2coLz8tW6kkD7ovU9GYQLU9qGCmZ9vvwTRLZm7NqLcU6hyLcCdSKhqgDTjcz7VfJAwnoSD62NLw5eV5qhN7vG6NB",
  "key1": "3wjjj6iD3fr3QMevNEHjPgL4zogqbdp84rMHWdwueTaHGJYGGRsJYK7EMZCKLTQqnXoZYTV6UnzFkvfbjmpQKp8d",
  "key2": "Mp8Y7GGbPQCi8ifX2n3WHB1DEESsvNHM7xZCABEWe85LeFjaUaGuFAzmxxubFU8pfNm2zqUDfDeUjeTM32x8pWq",
  "key3": "3BSq8qigySdMKKJvWSN8WLu9kNi1yXP7DVdawTfJy2MuiXGAsL1Yf1Rc8RbfKkRBsCretyMT1vGgbVjw6B9MWv31",
  "key4": "2T9un914Rkn6aBJjoG4cHKgfiiDxDLagscxr7A1oQJ9s9DaFiTCGzMUqiGVsaZZiCNAVUqQkLkvxHWN9rnEqFj7y",
  "key5": "3Gs3mU94J4Vg8L1a7m5tCMiQdja42ZU7jLnv3EKUUdTymWWw4xzyRHPGjRJtQALyDASr5xW7hoHjV1i9P5Ztm3eC",
  "key6": "34AkMdjFpJdzjYtjBX7DuPa9FCqMwhThAY8wgUwyQHytY4hTYRXC3PE2zpwRBak9PqEQJ9iBqE76Fo2NPaoS6vTb",
  "key7": "3Gdys8njmd8HUcgh5yNApRkDPLPr469baUq5FCSx9ZPBGe7t7vE9oAi6HxrQ4hXqTe2QVK4JqtYWnurAemUWorNL",
  "key8": "5LR4NGvXyysxoo55K7JjpDE478RdznJ8aoda5RRTQsrFEhxCqjQ5MWXB3f64nAvx4yUmF9x2H7EhHCUg2RT9e5r3",
  "key9": "2Ac3DMXtNxwYMbThnhDvzc61Pcs8JxorFY7hSSpsA2Ci3uHPc8iyTbACJBwhnA3c7kkC1f92FLUtq7tnQvDVXum6",
  "key10": "4CHC3NZ8hee6xfq6jFzy8evDueAA9zoiwCej9zxED5VocsXSsShZUiNA1C3irzWA4bZF4Ey2kxv6A3qENb6YeVkS",
  "key11": "mQgHS4tcg45X3xseJn2CHQAfABTdPp7QH9hMRAeBT6zP4zSMvVDZDPyFnkxgyRJY6BEPrPKH3rG4PQ7mJUhgYfz",
  "key12": "2edWu7xWumsVfmYxXuhfuafGyzhzznftBsKLN6tELisNK1ZMusW8EcGmbwYYMAyzysh53vSuuXkYnDB87XRLwkdq",
  "key13": "zitcZ8L7fA4L4L6bMRggxBMNAfUyNSPr7guk2gopXrfQ4m6XApuU2zvxye75WiKwcVAJyDhBZcrscQFT9P7nzVs",
  "key14": "3wYH7QCrJfH3T6TfdAiB4Qgo78WgxMV7zdmzeJrjyGRPoUjeQxBv2uh4Pj96PGqZrPvvj1qKBrTCnHENqZkFHMyk",
  "key15": "5hoggbtBRiuxG12BwLGyBasvnYSYtxBKfErV6rc2uDKpXgcS96cXy4DaaQf1JDkFvUt7rWUE7SkXdtiWCYCrCAjp",
  "key16": "38CQFo6ajADWtWTiBsPj8cCimMZTZ5jDfPYrfU7EcXTFgCpyPUsjpNagR63cFjj2zdXM2YJSC7vXxnnNuWns9mCS",
  "key17": "3E4FCiyd2YtfwVDAPb88gqnBo81PLMU4SeCekoiumUE74jHrBmnkZK6nkuMBxhv1GFs127FqfdmShpPPYA1pm5bg",
  "key18": "4bmoCfMobj2ccyZMypLB7cNr3kuS6yM6YMLdd94rJt7GYs99ZsX1rADnJK7NobiceL4f8NwtrCYZbvYb85p7hYQw",
  "key19": "49ur1JDxpRBNiggB5PTJMqtEotzdR6voiAYnYbCrYNH4YmhrPNLbhXYZy1xdCUFGogttXnxJUvu8cifzL3TaLNhQ",
  "key20": "5uR88oVVQiykEAWRa8vHSK1GEB48VVks2xZS46i4ngw8ATZRakpJwywwEZhApkp2DzpeQtotddzyq2tBQT78ToXN",
  "key21": "nVt9cTByYMKhfTP35sFhZcEZR82FsECZEmHwzNqA5DGLwVjaZ5BGzxiN9Cda794rwQzDJQ8gahSkw9ULg3AkPkh",
  "key22": "3iavWvWyiRtLD3mYZQjzPiEGKm1CzCUbCYhF1RbtCjR22P1p1ay4N16FerQEtnzFqiEsugeGrEZSGau7SKQ24Wru",
  "key23": "5SYbaeYkbqUMhPSGdv9fNDw6k5S7p5zgFh94ewpv7qKfwozE9amrSdiAuZLB1GbdHv4C7nnK6e9WwuZixggdfi2R",
  "key24": "4nZRhs3yV9hPw5iQYtxF3HnqYNGChMXXPfuJXNm2MRuFnTMUrvhwNHbHprwnGgzarZ1cdDkso1ySUA7RLQQLgZnA",
  "key25": "2dC55wTVvaC7YPccqAeNZ3mX3Pbj5oPEswJVTgX7o2AWRja968CJvujbtFBVryvoAmrMupC7GV9V745ZRJKDfz8E",
  "key26": "BENSwxFK3y9RBNpTPjdr5MDZ3TJXvgAH25wehyvaTkH5FJJLMvvKkvSfurMX2mB19ogNBXwrUpwNka87ZxqmZ2m",
  "key27": "Bz8YTjLXTSwEsxqwQ2iMW3Vc22j1YpyJzQpbdAfJQKcJpH6T1FQo34Vha7G19JE2VwHkLmQYgEJVvD9r6KyAUrs",
  "key28": "TESQkvqf16afMPce7EGbp2zrjw7XnpVJ5YxKYMGcHj5W1sP8LTfnGXfz36pYNH2PFVRw57K6Z9wWYxy3GSPG49m",
  "key29": "4fPTQdmhpgW3bNv1UTGyWzuG41omuW9YZsNqrLZbHdTVyfqjJMkevTDz8nSabPz9ag95A47rE1Z8AnPpWtBtLkUo",
  "key30": "5337c6pWjiYPond5dBcYmd645AnrDebtc9Mji1SRgDo7aQ6n3VFT1vNtf7v5ocmxyQS1vP6RjJqn4M5T44RKvUhc"
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
