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
    "2qkjJdjQ3dihTvQ38Bk7bte6snYrnoyXiY5vHVApzDnPyzozXP5hH3iH2CcoeUyqCYorEKbw31uek4QjzBbZrFA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MDWe3P9hW7sb9xiQdqyWjcMVbkP4HyiBekUJ2mcRFB98W8MY7AeHqL8hgUEqexyS4Wxx6hP3ZrX8i1MrJTVE8kL",
  "key1": "2XHtTZHG5jLbgcwgG9LZCApmaLq596a4x9uLvGkPP9k5J7n6jXERVAC1btBRZgTdrejSbk8b3hwDGnJDRhwLqFtB",
  "key2": "4i8X3QriZ9MS79kkZYC5tXf9U9BtWrJrDAUFk1KiGj8C2kqbyf1ZnkYMKVUk38hwBCBeynXaGVkDchg7etnugS7z",
  "key3": "a32Jt2Jeb5oxMXVBCXzrGCXrZLVJHRVf3LN6EmWyVg2qqeyqeNumgocSCd4FXGUUgp3KKFpoQTrijVGjbpxJHd5",
  "key4": "3u38Z4qNK6YH2RE65cChHBfy6zojFiQuhb4yUqT6pRGdCECwz9yntHUTzbAGCqMNP3cuCAZc2yZXnwNKcAoFATpD",
  "key5": "2RGbBZ31xHEVotmXDG3SfGRg1AwSwPrBuoPkW3f6o4C3bs9WUM7MZcZcRTmoH7rgqrCXDzQ997q3hQEGWEpKQf7f",
  "key6": "5E4T1zFp5sRGrKaqYYQpepf5iD6qJvThs4GsQBAy9xR99EVrkrFewUk1tgMDBp1e8T4w3F61Vad1e26KXLjxqDm1",
  "key7": "2GCNbTprLFjDEf41xEo4sYhcP6L8hfGGczun2jrFk5Y6JzW7dpzfDR6oejqhqv6wxK3qCyRybvXMr4SXtKYhkKQR",
  "key8": "5ULbNNJhJtZWpQ7U5y95NmGMhzNNwnwQ69fAGhAfheVZcugiSZghBivaq2882fDKFfhu4dAFfSSS9LKUnND29Mdj",
  "key9": "29Aw5JXT2ZsBuwDnfeLCTULmHATkD3eu5FgpzsxvCsr6CoKDbms9xmb1EVvTDFPtoYsbCYMJCSHBw1jtGMLkgc38",
  "key10": "2ZTrYM2CiY2EAH89wQBqLNLJDthuAoDRPSNQjYVvu5QV7JsiybBz3M2qCbmpP39nwpZ6aoUNraRP3kGQCz2FY6AA",
  "key11": "cGY92SiEKPedVVYcfKegM5GfeVyB9W4XgXoT1pVGQP5rEFr15pNbMhBGNXTErC5fqnb3n3hhZiR91X4yKbzjZ4x",
  "key12": "5L3Pmnsj4gk9VXhhr6JgsD27XSZ11DpCkpppoyqZED4otHQUGFAqXwY6kaSrtw8fvPAMKZiCPyi8tDXxnBxD5M3A",
  "key13": "2YaWFaGBnTJGq4jnhMcwVe2fQFJWQon5s6AcfFFyEMySgQ2CXk3ZUTSpqnKcZKAbnaVavjL1WMRc1pwiWaKiZJHe",
  "key14": "4GVrMfm2CQVriozr9Nn76SkBNXyauwhiEukHNfeX9iy6eEv1FBnffdkfaqbW4Uv4UY2hDHLiDixashqWtyBjQA8Z",
  "key15": "PNH7XdYFdd55wfDSAdfT2d171FJLpcTwEU4zqesfUckc6SXKVfYBJDLiz76Dg2GsFrtZSFzzFqopRinDQ9BPZY1",
  "key16": "22SRnkonrMYL7mHD6mtaBk4xnTWcApXRzeSHABVvHJ2UdKFPGNzVim1AHMQ6eK2HyBkXCQ9eUsXezbJxQmawkUJ8",
  "key17": "5uB4trFAk8WvuVonLEWAJ7kd2DSuqtXuEz5C6ZBikyE1jdPg3mNKWLxmoFpRjRR86czMfmA4FS6ZoyN3cUS821be",
  "key18": "63toKvkg33BCWWJn1LaHV41qF8PVMRTqHpe4s9eTZ1opMHpkaBHCucHV9SLjnH5PtKRba5TiqbWexbaKRgxV4SgG",
  "key19": "65qJXuhy5FSCm22Gvtwz5xJeq1Dj8v98CkHBt6AdhB2ayt8JqnsX4ifASXkwWkjgVbERn2y2Kw5kxqqTmUhJAt5b",
  "key20": "5tR6v5CJtKBqJ8bE2wBrKdobZrEh9kpzF5K4r3qMFWHBUUt9E4zZHiXx3gWQWr4u4r9UJdT268J5jN9LZt8EQD3y",
  "key21": "Dgq6Z7RwNv3aANNtnwzr7w1VdoXrkG5LA67haSxk5EbXxvhPGNt1VgHnRV1N38638RC2aHBLK9RhB2YmLxYNbSq",
  "key22": "3UnwwjzdJm7rmyF4KgYjaD2eY8tCZAWr6ZcBYZfBvq1yAHdhZnLwFrHqPSxd54UkvpF3yXeTjiYYaWLdD1Pkb2B5",
  "key23": "5UcXauNo3dLtnZmB821vFJ4kp94k7sRShNjrEtVe7FgRuwQkeXtLPrfwcpvBL6hRPS7re4hum5A4u3Rk7wuVK1Wt",
  "key24": "2JGiHTjELPAJgiApWQe8eYmxGrMRFKAaW7xGfBoZLTxMa4kMLBWAYvqeSU5bkj6JJKfdLccgtW3HcR6wMVDHxNXi",
  "key25": "43VYvjv3hrSvZ94e3m2VUpp8qpD54bgdqTRnwQk5rPbezXJnX5B2s8wav2p3FyJ1kYYHS31QwjYbkugLEftfCnc6",
  "key26": "2vo2hB5KArzm5sCMTjN8EwTohMv1ZDiTXn6HVz7EzUVAjjmvbXq6yHP1D3WMvapsnR5pX3irbYLvSu6J35HsYs3s",
  "key27": "4soTp3BYrEDuptDYt9hzFHrRmeTp9JRRzjCdY15LE4w3mo5mMTfmQJZn6HoRAz7LxKJoyod7fBr7AtSdkAuqoAom",
  "key28": "5oPtR5VmeoP8EDcNvKMuhEAUGMhFQuwdLLXrsG1jZ3cXuSCxsPq2oh3x8UiWofcm2gJgQdQv1uEhXcGg3JDwJQqY",
  "key29": "2PmEKQX9FvToLrw987qHBL9fFJiMttoP13S4h6WfhSTf6UQ7UNYnVYNQU2D3juZoGdtqVu7U7NdLfWtJBtTvck4J",
  "key30": "4tfHFD8eZ27kKgegPgbpVq8hVH9H16XHaGjifLPL5yvLdgCDUAWj65Zo7YxgyG5JhzNs7ZCrnDSucgRn6QA1RHbA",
  "key31": "2sADsqwZSaniNtivHV6Gj97NjGd53cPj9BX68pQ7iCRt7ySote6sQ1874qoG2RqNmC3bjCUSTHgUCe7PSa2K1N8a",
  "key32": "27Ln3xMLJURkHp45i3HzpnB3rLHFGDcFfu8vaSS8GiuCxeRMZxJuQuXcwUgo3CAL3NeG8HDh5YexcBcoVddD42aA",
  "key33": "3QmZx7mGCqxK9T8CZQ1djjSErhj6pai6fbStWbfsTekCZ6tMVKqpU1PunMDTMjbKkm2piAjaQ122uXmff5AyHCps",
  "key34": "2zP4s5JD5dNhcsUmcH4GEzq38SmJcDe1HhWFK6oN6UMKPDXQzpXjShRLB8YrrroX7i5RnM9uzVG9DBt6rkhwwvHU"
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
