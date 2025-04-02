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
    "3NytkEQm9LXCRQnWgs7pBLutoM4zmw9sksgeoKS1dp4nJqknfcFAg4Dr8nvk2biW6fHWPw7pADd1d8FcjGi93FEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hMhKMA8WiHiiTzKYnX9PVksmLGdr6wKyRB4NsJT9mPZ6eGSsjBLBtJCuWYXi4AAjLsdCnGhVhvst2Um9VaUusC6",
  "key1": "dtXBs7HZvL4vb7RdJ1dGSNvwyd7aYD3xirYu7QqLK3Hk8Dtc6R3vgPeebUbfreeAa3b56bk4qDkGXLYdRJpYQXq",
  "key2": "4tApyxye5PfKDT5NxgJSdUMZC6VSzr7qD5Ys48wB3yu5XAQafUDSeGNQzSggHQWCsowg1UTv9DoY6FBzQapti3FA",
  "key3": "5Es8dKqHv4mEvfu1Mf2nv6QPAnQCGXpNzvFPZpNjkgD2t8XmP1Apv9rGDXmtCHG5iCE3vvcdtquCKEE7RUfiUoJW",
  "key4": "3miDr4vTG9AU9A3g3doUTK5omx82wBtEBZHDeRBsckmypqt8tFaXKDWNFqZMsus8dq7Bh1vX3BvQviam5VLfLC38",
  "key5": "PiL2j1MvxQCQHgsARXivmmxMKaxVknUyibX99zub8tP7QBWzLfmUufPDz8yDr69NTMJd1tGn2DEjfe693NqGv9N",
  "key6": "3MVYqh6uyryWMzP98f5rxHBCF53vHHchvqZX9kQjr2KeiKEFxJQ7evUm8kdynXrCXPM1xabM5E7jCVMt3eXfHgBF",
  "key7": "3QDbFfzBsATPvw9oeehgfZysfoX5SgeCDfPGxkX8uD3YkUg3hLeBMRMBP7HcKrLimEnv5zrH824TWrHreZYao6C1",
  "key8": "4cEjcYjkYtQGJkGWVmB5yXV8AtKjj2arxENE4KTSAx794BwJd3VpeSP8SRv8WYEnczgQMnB78bEWAAcxEFJTrCg4",
  "key9": "2yVAVaX4os17uASk3wT8ZwPfM2wx2ZFhQ6Bmn3zE8vBdLdHQ58CKNo92NvpVt8APrws1ZLKi7WHU9D1yWt4V2WMu",
  "key10": "3MpdTeyo5FNwwyBJ9LMCYMMgHVho3kdXjxXbwp1UAwVKguvY7mm8ySYcLPFyanVvhhhmxJQxkbXhce8HNwUzw4vr",
  "key11": "45mNYPfB1syd2TXoJTpyoeCEm7xBbUroJ2MiYHcGXK2xo18zm3k1VMc1gNHjvzhtQTY7y5KZR7N1jT4sxyYBq5Mj",
  "key12": "1BjuRkonoNPNeav2MarcLBoRA3L3Tqt4PabJVCnPcnxDJi9Bbsa2P4rNK4BB1eCJMHZGoAnkQfoSgoDFKraCWd7",
  "key13": "2f9ZMTy9M5EvU87Nh2yjzJx3tPTC4fRXhchih2bCDQadoWc9zK7WGoF6gJ3xjhLoBopqDgViM3Q41oU5q63ThJn4",
  "key14": "2YkDjowgLcsTzNxarb8VanuSjwqLETR3KGE7ryfiUKogKXcnkDhp5UPZHFkeYri7PW93W2PnAWnciPBhNJkReq3H",
  "key15": "2zHWkYDjjFq8Ev8ycTJRgY5wLd3NMVBE7PByVksd7pehJAN9YRaPEXcmePvy25e4Q9tCHhAy5vXur828pBb6Ln55",
  "key16": "3JdBzTBFFKWTDBq7fXKLNny1HxBjZtG7x3McSMRWfoRWQUqaXayQydp7qyZv39nXhyrh1gWo64hYBe4fLgQtBkV2",
  "key17": "wZN5vyTC9PoKwspU1k6ewojnTKiTRZGmoWfhShxvQ5aRMWJkStHhF9SzvCTK9aUyPAkLhfSAwo1RacBXp7RkCPZ",
  "key18": "2bjATW2vwUPjBL6uJtuhTS8FsCNSNzSTiqVmWQwftFoLHUgvPNXCdqecwADFw8PYHvdnoGKiVq3eNgyhunhusvnm",
  "key19": "54utqPyYHsfR6fju2s5kErQgZtmhZtihr5q2PcgPCpvYeTQBghs1bJXVd9EcAAQw7WoB2v469PHWX3ZeMGba7c3J",
  "key20": "4fV5Pt2x4TTr9JwJuPq4nwv8H5CWG75rHxpAjZx2wo1MKXGQY1UXgtSPRn3ZezQf3pEZLv4EBRNV3FjtD4c85Ayu",
  "key21": "3HrW3Gu29qeaYxdfJRStmSKANRrBpmWFoFHxQSTgrgcjvHeNiKQPHrdtr5gYu9xg25CKRNJr2uMjJDoQPEcrZbiJ",
  "key22": "2gr4eusuyAV4G1DrGLJRMS83LmspDfRj4gKCcrDpf5G9SkLn7SGXUU8o4uJW2SzPm6LsyLVu5hqrGMje6N8emAAy",
  "key23": "3gphQ8CUfdkhkHnJj3ATYr8J9d9FDy22gDGcTxJ2MtBvXbopZ6BpnyuAf4kHkBZ2T7QsKkdfE6oTH2fPkNdrnL4w",
  "key24": "BPwkEZ846spqNHaW7dn2KZ9xJ9jR4hDRcnKR421eXQJH3Fic43VuwgDj8mVxxAuVZxckHyQScJ6UyPAE9bZa3GZ",
  "key25": "48GeAAanGGNapEBvS4eibKoSmprgKdSupK3WD3uKSiJ9DHapPT8VDcgDWWey8WUmeE7h1YGXJMrMTcwnkejDQUFT",
  "key26": "Db5AMLcznjzFGPt55fveMXw7cDeJsr8ScjQXH4Pzf2qjYsLcVgQpHc6PnJUJebosBqoYu8UdYGZ3ykTJa585J25",
  "key27": "ruBGEjZU6aXNgXopWNam6sUs8QBZFsaHxBkEEBSpJ2znGSdT74KLQ9wjfnh4Uoer8AkmG3uuSJetMGCimaYu54V",
  "key28": "3mhz1DtauP6qzWTZiY5weGLBYgk9VzCFV4gzEsRwVEjJLhBtsBAHtJZj36d53gcVdKd9KvC3VYNJaqfGKm8LeTgG",
  "key29": "5Ekp8KuxcZmTyhJFytJ5a2kWDLDBxvpFnfdwe9v8iypS1FZmAXSLzbTGf9CxdF5t6KexWbveYz8KeDuAhQeof5N8",
  "key30": "S48bEaQNUdHZAxEeYW7TMy24PdopvnHgJmLnSBDGhU27vKiXVp3hE8NZMgJhmrVRUJFNTVmdsh7xeqvVwumeyKR",
  "key31": "59HsaiMaPwN81FXs6c8vdP9aUSJNxvzncbg8kCRoH7LKEKEZYiBkLm699yz5pY4AGBX59neqxN4Ued3J2Pk3R3RL",
  "key32": "5k4VwYLA5LZZxgmjubDAiQaJ3ajw5ALH8GSe8cNZkZR6ho1G3jVpDFR4htakD7v3MsBGRZRaKBWQA5eY5RRXkzLJ",
  "key33": "5bsJHFkChQWAjBftFJLfCW7EChtaBCKNXfF69etp2ewFTMBdr38mRLTaTmtFMGuaLYd5mNBSuNkWSdCypueKhtcc",
  "key34": "2TzPTehyPGyHfzKBHjM7y4E3eRvRbEz5fdooEaT5qvQPD9MEhHKLc58uZ6bYfTGX6xFEfQfBEMZDwNaRgwRBHJGT",
  "key35": "3RSWEvT75G2mhDSqXxTbDcxTgVxz6mpNF8B6RXwG1C1EecYxpNZftvZBUPqztxw4HKDjGMDqoB5nMkGE97kCtExV",
  "key36": "2yPVquZsjomw1dGT9KcwS4SKimiBsKj7to9jzWMKRn1VmjG3EYMWHw6mb4smHvH4cCjqjnB83vtCwU5k4vq9Lhov",
  "key37": "vY1hjBnsEjdPJ6w9uffAsvmWrH8KmZ52edZquedC35rXp9rpsvJJ9f1tpLk3CdFjYY8Wymi95wPLARBSW7bZM19",
  "key38": "2SMUKGxDsfhJB5VcR8dS8wNoBzoc1Y7pePHBXqNyt5yJrDocF6ESWAYUooUHwuPepg1DLKdRhRnZB1dNwAkmraTC",
  "key39": "3e6x4jZJ5QGyAAfAjKUkvDB28h8fmCtnUbjTz6Bn6cb8JLmuJwii5pfptFJXcEYHVns2uFCry7JP1ptLNGCSzZN4",
  "key40": "sdue4RRSmNJ1SFsWaNxHAondfKP7QT5MCyCMx4TwVgdhfnGbgT5kXiv6u8CdDfHz1WVNiRWBhhnadWrT81cPXfr",
  "key41": "5bBxsQgK7vohe6j18v28RSgLUYwcn9U5y7Vm41ZiqQ7sDzWwFKkqwj7NVNFYdvpadM78BEaYsLY3Kb68vS3akXD8",
  "key42": "52uJfCaFHHhM7fQKQiXtXtgnLVJA3F8m7dPzn3cGh1gC6nXMXmAZJ9sb43TtgAUSsTJVQaL24VwYvgpPs4qycCbt"
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
