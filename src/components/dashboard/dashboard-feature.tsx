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
    "5avVykKqEZoWDiFureMaZV5v3m6zwSHyLefjg8Ai9BdBkm7QYb3tUzYkFMM9BwRtd7eQM3GS5iguesH8VRf1ESSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J6kA6xM5AUAecuh1Wv61pZyKcAxSZbGhukGYrza5g8RWKm5suLDH5CRKvUk2tEC9wh2WHngQZ1zrfePDdcf5SjK",
  "key1": "3b8mpgvrb4vSmHv3P6DErr3eCf4mTGMABpqc5HNc3649wsEFGP2JphaxFcAwHM9ydRaARdNo9YREKyZbots3TDhn",
  "key2": "29QSzeMPK6FNukWjefqLoArj3eGsmbh3uDeH3c66rbg7PsX2ufdC6Uwe2vjkiyJ8V1JPUcYDMjUnqWrwosm7XooU",
  "key3": "2UQ6HSjzecghrQ6CDhpGeB38WTJx1nqpe5sdrbF8JJwaa864a6L7kYVLkN1ng85iP7ggBsafMXNyRZVqqBuf5FgV",
  "key4": "2XQoQocHBtUYCA3ZfRk2ftMVRuaP1LbACB4VS7VF6K15zkmjCm1DCfojnsBQe2TiCZbiqZ2it7BovY8ZguEH5GBa",
  "key5": "5J82BBXf8ebHp6jmTSSAnJU496gQPFteSdufzsbGUDJyg2fkzTGgD5vYBWJCFk22kTiCnoZWwwNeGM6sWD8wRt1o",
  "key6": "43ScqATbjSK6W4a2FdU5ByTi53sJMPKjMptA4RmcjCbopCfPexSu2SJRTJmUYm4xGBNH5T2KRd4XTp4yJChAtq4i",
  "key7": "ZNPc5zhzeoDfb5qm2iAcx1RY75ppMzXWHUTx431E2qwKjaqF8FGvfDt5aNLsWsQJ2rPy6mMmQE9cXj4AEQEEHyV",
  "key8": "5wzKvT241BMyvLiNu3dhcrYiady9nX6XuVLD8fpEx6FgS26aqxhzgaKRrsikckmpBNkRcecKjdg1Z9PfQ5JhpFag",
  "key9": "eLSMTDse4fyFqWsXz1iypGa11gMU3hiauCTm9y8yqQfDnNQK3aMDnXGeDAvCC83vpiNGrbfMNyHvu3WuBwB71M2",
  "key10": "5Yat2uPJSzT33KQUjR4aDrP7Xm6F5rAD7oGbHUNnWwaTUkAjMSFBoTUa2XqxptxowRds7eCPS3KFrLZqb7oxxDun",
  "key11": "5wEATCM8LTG1vf7R4uodpdLdneYRqKkrddQS4guN2Z7H6tVdw346jkAWZSWXNf163WbL2hFD9mPJyoL92aKEkRCw",
  "key12": "2UzQ9ybibWo7oTSVerLrREm1HVqJrrKLnxCjEAszja1dirT1EGtRmyKUZ87k8frzE7nnLWFeJCMchXGtoMZUNzUG",
  "key13": "4akZCSEfRueKLhg14w6kEuoZjQJURMiVJuny95WWkrbg5iracb15P9Du6quSvABshE1FdTc5TNNYBNtgpmHtLt8N",
  "key14": "icgK9c6MvB329z2UVjvza6Mpah2yFxbdeP7CKejWyQP6kdWvGkn8LLyJfpPHYQcRpGWzWNxqG7UDzcsL121Srbk",
  "key15": "2DEH7j9JWFJHmtPdumwUWXEMGDB3Pgw5AVjxPhAdZ4z2Cf1MGpiwaFmt8NwBfRwmWcd347grx6pfG3Ni6MtkBpU3",
  "key16": "47LnaVQLBxQTarCg2SdGgQ8hA2uNJa6rVKfwKbaeWYS7aHH1dWFx9bHDo8nqePT3uFnSFn1gSa7CMAY27QYqRTx5",
  "key17": "3rrCcYYczfHJYv9BefSHH3xXTEigdZPEj7vuY6vxznssH5Q3heph5sgVcbnMSBDjFSoFLcCkkzLTRUV83HhCYY1a",
  "key18": "22jSH9XDUxpp2ACNdfu52zF6U8GaBvKGZGFnZjyguz8myc9J2PtLALaoFtgsFqmkHZJTeUaBG31YGNPDqAyEUNSo",
  "key19": "3uHjLFqLbCABuURWidUtAY7fLKnPsdbSLBG9EEt1NWhuY486z76tEgGnBdHcKyPEbYFACyKLrfqM9kB3QrnwKGvd",
  "key20": "4aJRscc66ASJYtLxVxAu99E6Gw62j7CHjwSwApkpB5UJ8hu9KduHiv5SWXEa7KRCV91549r7Jo5PP2rRXiAa6UjX",
  "key21": "63etZJVQYCnm7KtJVHPztCjG1k1Dyx7D4wJqqWLMmeUGamGi9NjNdiAiugqXPdZsAcPjesU6AmnuQ2KPBXadU6WZ",
  "key22": "5MvcrwUNioS33iq4ARgBWrBjSKZqiqnzmnDgmy1w2cc7TQ6fSqHXf22s6KYRsLaCdrMhcEnC7D8nEMfVYwCWnDMF",
  "key23": "kw4C3B9wJXHtuFjcXsZ1W3Jp7P8LaMFTUeP5fNx3SctMLu6gNuczDNj1PQA1YG8VtbuMtp8Te9FKzfnf37ttVJS",
  "key24": "58KUuuYLKK4cnY5xxHdMAi1AdZjke7vj7nrbjeD1g2jiAPMNuGHi1AaqU8aakUnGePLJdwLg9oRPPUpZeP97Henm",
  "key25": "3L78VoXk9hVntcdLS5p7La112u4FnaNRyPcFQ4rrnbDUiiRA9bygJMf1ySBgD8Vpqr4thiLtfpexftWc4wn783VL"
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
