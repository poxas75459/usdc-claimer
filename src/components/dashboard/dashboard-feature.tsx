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
    "2rNiAUD4TDg6bUwWkAaEx6bwxNbd4XDABvr7xq3TVExmb1yAwroXGAh5HRwEi8txKNqzeMqyv5VbApBm8HCSTLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4itNLTLDcBPUUPDVnp8QBFyxE3caCZxp4M4eQAhRZo3qLrP7TcQF2yP3vqzL8QsSjmUD3nha21fnhewUqeZKymCV",
  "key1": "3tQkei8ZDtsqZMnd2phihhCur67kHhAGuKCH6nbiFq28m9puZv4zZnd7d3mkYsKLBGFHgqm41H69Ai986LEp5kDd",
  "key2": "54gjRa9qjgjUo2bCYJ7iNtnwXcsZgGmdZxZci3fZNCfKL9gyZ1TQs63CLhQ3oWmmr9LDUgDXkjCt6bKZ2w5cT83k",
  "key3": "61RHJvX8jb7VxP3ocAmti7B7QeZLYQqny8y2xkRzZEXVKktXBbhirt1t4JnwYJdRFJejMasCmCqQmZg7ftcoBniQ",
  "key4": "3pPbFm3rr55YT9KdaEtyuqyHafAPUpcLxnaK1SB8ztPs9mPb5FnhAUaWWfpHbYz18DTjixntjBySH2ggJyWwUrAb",
  "key5": "5qMaToMYpdzxvpgQtLGxZLSfBzGWTsDcbm61fRsP2bEyb8hE5P5gjjVg2yDsvy4JuVyMbGenxVRjT177TgaDE7rE",
  "key6": "3VQ93QDGZBjfLzfGt8JWJ28GjUJVeZch2sXvcQVHEMoTRYvT5LXvUqYm3PgEVb941NH3pNeSR3zY6VCTiim4Cz32",
  "key7": "5Vkkhv1F4ndJDpDT39beCTJTw13HsGfqnuPX5V7NDwYFrRuG6P5kFpqKCbnNS1UdxxZTa2ZXL1kEDGCR1roVH8fM",
  "key8": "4zzVSGopD84Wct5xx9YqNSCFXEFSiRqoiREx2ULsmHe5bn3CvL3Fs5caaX7kECZZYGtv2QirkoBNpDhKmV1ABGk",
  "key9": "5uBVy1Bpy1QWPdWUJ1WBNS8XitkYzA8JoF8krndiJnMs23m6iY6CCb6oCVa6zgniuTXKQN3mKyk8MvZCNFXrXX5W",
  "key10": "4b9SojH3vcEYgroZ3waG6uhmNmfYyvXLRWsuoMRXcVkvVr8bDDoa6M6uUzpWBLo1qFpPDnLGQ5TWV48HaY25x2yZ",
  "key11": "2YRCwH9SrKPyTN3cTEtF3tEJaymTt6y6VJV8mCuV3EuLk8rqmtwwDzZdNygqEjGPu6BsZrSR6gPC1uSJDh8TBXS4",
  "key12": "5CtGKAJWhibDqNWpUmdj81kdTiUuU2egDrxQi5uUc7Uf5ixzENPEFnx3on4dVD2xLZf9FccgPvo17f8XuVYvSz4a",
  "key13": "2acjmxm8gJbiKACyTju9vTDwtoWaPPPwGca9DAmtz8H8ZQkMpzPdwkeV8crHJEPA9fFuDBuVNvwanADVUdBtctPp",
  "key14": "5U5NoQAtc4wjFSAw7UUESaGUp8EeFGh3m1qJiiM2BUo4hvjLuyP6VduiJdNAaNeD94tSzXqhnPVorELxSzVFNafM",
  "key15": "3H7Sr2c3DUeMcJUF8jhXmctRo24diSr6JQM1EkSMxYbF7eGm89hjChzHAQMF4hkHB6WTzQ9WJR6uaaSmARhEu4sY",
  "key16": "65EGfcKdZsA3eyhmTh4m5ZH2rYz2eU54coRAD3bLsM1yjvF9FBURkFgwtRj8ZGRqoZEwsMHN1zRvXw29jMxNoJCz",
  "key17": "4awqNkvRTV5rthRvNmn2y9KimUdAMRpDxx2cCUQ5uEhXHNAUWRRkf5Wb9rrF9fXQ6Hv6EAWWoNC2nBXFfd2cAMuT",
  "key18": "2upAh55jLyGNcWxHYevpWm1MNX7E5VYiFwRYfBJ12XTyrZS1XkShrYajhsYyWneWsZByG79SM4npnb26THDB3jNH",
  "key19": "25kghCkcAA6688AaRzGrGmBQt1bCCeGwtKseuCH3qyfViwAQY4ZYmAV2U5CyGviuEwWLeAUHbEtEc3RKtWSbnBg8",
  "key20": "4ix9hjZvtXKyJRqoeV7zSkJEpKxxffr8cL1Ep4dbsDch5TgA3FsSC77pNhUXSzmPLCutpo19qjV83RJeXsjsfyAZ",
  "key21": "i7uf4LTmsk88gVQUNBNWqiqDGi5xkw2JRYmKLpEBghxaLKJXF5iKG4Duo8McfSUVK5Znu3P7NZpcgMKWtwqgCWw",
  "key22": "o4XQKfSP9bSmXfArAeCuzWxH1WMdCCzdPJgERumHcqCAXobXTGWCMoxcNL2WSRoNBU3LrsmEWtmD65BMJZuPEEt",
  "key23": "sn1kC545Zsm4wahgXPzY1xFJwrLGagQNbPvsUd1Hm9UdcMYbVoDKH9VKDXPG9R2cvfozNu2jt3Gr8tgdjMq9pKX",
  "key24": "2yV1FaXiLo1QMpjgw128gkTtBKyM9zYkGQx7PTXicNKBXHdhjM9xXfnHU33GfKYpEp3XnDENmCro2XoS6rNjuAkB",
  "key25": "Nf9XsUaJwP5Z2qAPN9LU7axruDENBdtg7ruJRSfQDSmFzaVqFB81J6q85Mhobw9sfHjnKzvjpJKEtFaaLpPEK7p",
  "key26": "4dGebHnedstX7xgfGVhN8NVKY7GmVfzKLtLUZxZUXerBAgJ9nL78NLtpiFzLe1gZ2uYxC4X2FN3Dc4t57cFMmXYf",
  "key27": "4qvoGpceWvn9Mhs7YiXRBgcJR6LL3EjeLpv1KD7pvNe3QXdto1L8ohViGbT9nAM2GTgEcVVpMZqqspuxHt2aS6Kg",
  "key28": "53gmN81t91tszv3Ffpr5shZQUoYXNqyKKW9xjxDwUyTFvCBnMfTpgqJUmtFkaNm41qoc9YxMWfXAqC3xf1otNiXp",
  "key29": "5GXpikEVtKzci5dycHbXru54dAAzBozr8icA1gzoSewZNDgog6QJafMEFkVdYHmJgj1Q2zjibazXGuybBqxmKa76",
  "key30": "3fEMEqVcmSgaJrMijQxDAJWcEVafE6iw8DCRXdR2HM52PbUuthVJJPRSBZWgC7rQc2HQr6rGhxiBFqcU5QotifFf",
  "key31": "3cAP9SnuEZJHoABN7rbPFHTBC78tbJCLwSuV5zUAkrenFWQFsgDUzSjE6EQHHYqRguV5dAXeYzgnLXQFGHapddjD",
  "key32": "1tkPUJrpfZ3PDgtKeJtgcHHPux4uhcCePUR6kZH8pBfCx2yXhMrnvbUYzRAU5NYQUxDyW7Yoq2xWe5oW5FHatDC",
  "key33": "2vzj9C6rPCRNXGkWJv3Mgq3amzCe67srSyJRf73DEfEETWGQok2f9RMadNQd37yFz6iA7sC7FtXC4qJG6XfyZBep",
  "key34": "2Nk4cJxUVirvo87fMiYzMunM8PDT9dd8kcFc7dBtZEF9CPN2cXgeue3dnn6y9f8VxjFphMmtA5Z5SH7R4mJKVUxh",
  "key35": "2e5L5bs9LAanLeNThcwvX8zDyjt2ocW9fdSUrDdw4fCGgoR6Qk2waiASruzUQvvvGPgGgPJi9Ybqh5ZRAoxCdsP2",
  "key36": "3jQ1DCoKeATbP5BMKuvNMzNqH6subQnsdUmmZhKHUseaV8czUpgWaGQ29oXvVsomNP5shw8jmPq65ydYXeDK1Mab"
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
