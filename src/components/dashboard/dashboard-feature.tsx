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
    "4x6oDtEYBw7PhGguWy24JFmrELrEWGZTRWCMke4sroZczHZUHXbdf1pMc5GHsBeWu18R8jC7xKTJT65G1mNLQYfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jyZ57fUrgrp4jTYtySxaqJybRi2oXh1YuyMk1PxnpJvQddefe1rZgsKPmwQHM5B32svfyxZXjqsDAfEKgVugAkg",
  "key1": "2j3MRqAVYqxe7spZdHgYhh7sm3SeBR9cutNX5iw5WQR2KgnWdS7bnJAtFL4Scmgio6gFpPZTwd5ULnHwDNYJj1YN",
  "key2": "51zW8dMHCXyHgrARWpamjbgbnEZWLjNBMkAUw2AEjR9yhM95tcvSLzViYTzHRCQN4HhexvWmeUvXVksQYAXUuxL9",
  "key3": "3bfBepshxrJkb8ozBeZSiLPvh4Bp5nvE37cq1NLi5sPdXBvfGnM6f34CYPk5j172UmFVhNK2vyhhRnJcXGtaHwCa",
  "key4": "32S9k4xVRLjtB3FanLui1qyCE925nwgnLxe4MyHqsZC94vvMYQ6qvurR8sgiLkYBqcifgj5LVTJ5u3BxJ4XDA978",
  "key5": "2XkRGVkExSmtT8j34bzT6qHNDfuETAEEzFK1EbGyDFycVSgKujUDG3dwkcyanhs7hxZRQ4ANNiDLFjuYMDD9m8As",
  "key6": "iBUsRmHhuLTkBReDpfxb2EJFtDYvB8gm3DopDBRjAvBibRNRStbpq5fmJorJm6Pi5PJgdrYH3MwWjkL4CoNkFEi",
  "key7": "4GbaGQMxTHZn9Hfw5UUTGczpBZSpbdZ8CgHKw28y4af4AfFaQezbB2vXmxGDKEZYSc1EvC5eQQzFhqRJMDiMiQXS",
  "key8": "3hf2uSU9yA15Ywx9dgthRiQEpSVHHEGUrcS6ETEqrmet3UjvRFQkV7SY2Ed6F3yCxx2HaT4DQ6YnUnpcXaq8LRD1",
  "key9": "5xtE2wEAt58iV4iLUc8xC54FnurdmB6aPvLHYcu3XwGsuxmnpisTGVk8e6E3tsnNLgi7Pyo3XfQvpsFrXb4DVdzb",
  "key10": "4ibnNksFsG3Zp7vVxiSVPNqLWaYhDCWtG3h2oHvSoSJj8DxmMiBGryeAsMnPkVhoEuKqFDTJHtLbD2BtD2mSwcU2",
  "key11": "2xhGkbXQ8jfK8qvkP8rRjauABdyQRjPH8Yv4yE3QXuLUjDawdv1dK3CcHZUjgNhgmqpE8p6oSQWoLytVTBtCqaQd",
  "key12": "2LbQvAgpoYpy4y8wY1LytfF9p1DohjLZijVTpQSKhYkwKA8YD1wYwajBzYMgoPAqffk4NoksLoHM1ghgmzdcF6mx",
  "key13": "o5qLPnjR53JU2pS3VhmWtXX8nVjcPeNSdJtQNF9REgqarNP73RhmuH7doCHxsy81VcQNSPY1zoQkFNPPn5JmEEY",
  "key14": "4W77KRCN224pK6ZZSB12twi3LYqqwH3tA63xYk8dRckea5B3EABP1p28fiv7fKVHA7uTUHv35ZERFcSxArqtiJZF",
  "key15": "55UUhqPj2ZV4MUhkrEhkB4K1fRar1KwKFqbc4NxvTqSevvGnQC6TZE9GCe6whbnht1nvZRTUUpf3CNjncJyvC2Wj",
  "key16": "4vy9uLEg2xPPGdtkEwykGbGTStkg7rQJajMrDENqRauWcXJ4RG9MH69pQdyNDEQhgciNF8koXGera2RCtWTs3ktv",
  "key17": "64hBNgz4hRRbtj9b3CmBwRdSFz4eKJY6C4cruD9J8wmzUePFFjPAEw2ZRstnf6tfy2GkDamd1S2FvJgtS3UrkN8C",
  "key18": "5cSgMqnLUAHPGXGjURSVVEZHmnogCKemkV6rCKrhHGt4X5j4EXggFQMZSQ9NEzDPDfLpveWmgkZvjcHcYbXToWY9",
  "key19": "5JAKADdNESBDs771e688qDFoNx48pUzuDe1P2EtMcbrpbrdVNYbJfEWLySbdc4LTQuyusZAK5rqHuQ1CKBoDbKLD",
  "key20": "38ceqTZVDhCNP8LBJiRg9RcwtL647guWiKTaVBBRrE77eBYv5g3JYhaDCEchwqtbKLnsYR346tvn2f3ysVJeP7pY",
  "key21": "4fPpRbLuLhhypWeo6KQtnnFADnbKioseLSYDLBE7BCohAUoyaSj46em56hS1GdEGT9uAzFTxtRWr8P6jApiTA3oc",
  "key22": "VFr6Ns1skRcL1F39cssJo9aor8a5AHoHxEpiZBDYpuU2Zy6b8fy1bcgE9oFAyPhvSdybxSP5iF5TMDFDJuFiZet",
  "key23": "47RupueQf2jKTgqGQvey8bBGsgNkp2mr9QMMLVyD2hEmM8p7oqwHBsivtR2o5Gou9oaUnhMdXrwbd5EBndwyKjvk",
  "key24": "YD7kmymZzAqqEsZ76zMMbaVRZEftFiattSSmA8kY52qfwnabAQ7WUDwaZLgvR27XKUHMtCbH8rGjdHbPLKERdnV",
  "key25": "hEB5JvNYjK6EMwZoCVrG8i5KnpkT29AeG1yA9fMaQjZpNpupSQmMYrGvWznQX1rtKe3iTL5dq1TCeCbpiMJHVNm",
  "key26": "62fdJSqNgyo5z3z9XEXMnnUZr1zHX6jD5kKmhPojsVqwEyMiGm6iSQrcma8MwB4RT2FAM9rmdpJzdNwsufH9E9o2",
  "key27": "5MDTqaFGQmmwNbGE9UvU7hX38xbpitRYj2MLeFVKzV7LSr1na1FdtfKhRUq7DKK3HKTEPD9M3sEAEXNFLuszqWUc",
  "key28": "5jkEe32NwC6wSZ5gbVgp3J3joaTbChumLjGEiUHS13qt1RW3hPMKG4FDsjmPzbUNJSCBf7qCoU4MNEKy7YVaXz3w",
  "key29": "WF1eCSkq5AzNrmvNVRhiqxtC7N4Hzzz6XuhVvjEW3n5HSrgqAjTGRyeFq3Md4MP3qUZNqAimUpwUy1jMyk3cbf4",
  "key30": "5ua6hf5iQm8xX7ydXuFNmpTwL6KDjUMHGaFg67dxn7QzkAJZu2Z55AHShHjd63StcpcmiE6qHacAwqnignSJ82M9",
  "key31": "5kEZpEK2is4GhW6vYVtr8Jt5zBarVWJXtngQLwxw6z5JmF8DPS9WUV2CSmEL2hkWs5bKeBzr3AcT22HtswthzHUK",
  "key32": "4sZ9VjDqf4mobpRrq1z8E69fKNHJAdHgpmBUHWJyzDFKA2quAYL59wSna9mWEmDomUxULyCsoBQLQPVRoXsYLnk",
  "key33": "2UEkYhPuppSPpEUmvrSedUBj2FYW8mCoQ4btqp5SEL8xG2xp4gSfeV1RrhkwFgrNibPhJadGLxxJsTVCtx2CJaHo",
  "key34": "2os96RGMLc4MchNrRiu2h7B1sjW4X75imGFkd8hPP8c84Mu8PZqbUJa1YKC6rhWyfDR51bE5ne7XfBhXfFww3dHQ",
  "key35": "4rfQCnUEARH4TBiKq1qax31oi2Kd93e9wDsk42f6vtQ7YWWbrYbMyUgvRJKZJsKjJeoVF9yV7VLyhB8FuTfh59gA",
  "key36": "44tBFtZ8vv72m3FXJMUNWFitLLqUqpewNYNcfoJ3EpYPaKjt8N7UGjazDcxwUJuiDBQ6WSmH2K8sQuQH6vcEqrLK",
  "key37": "31VsmmfX9B6BfcK2zPXALbk6QiSvPzpLyJcqmeyJ1or9d4w6Lrha1T3U7NT4fQYRJmkSjXjXxepjRMtfUSPLG7ko",
  "key38": "3gnfQXcByjNAECvK2ziLbeRurDbC8VQ9ijjvEZwvU7EW7Hwx12DFzmUrYM64Kocc3vLNVaySsDS9AfjQJhgT2hSK"
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
