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
    "52TTgpUred4n4jvzqpbap57enypyB4vfpi9tz36oScDDk6X7h4k3Yw2HXnLpmPTueP9oQQwqjSrjD48FBHPsmD88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P8BvMJat5EFwNUGoiDThiZMFkASG7bgj2tQXuqBqNKCJFBxa9V8paBVdgEDTTSnWQy5LbPdtU4FQjSqsw6k8Fy",
  "key1": "UnadrAMbQJGuaKMpzJg3fLEGxrk1j5YwqKkAycFkdcEEgxPuV195niEFB3ALMetgFrR84NYBGj9SdD8TEirdnyr",
  "key2": "3xSLQvAK1BKYs9TY4H1iuPWbETpjmEVxarSYdEJqdBSUd4hMEr8z2AbRG8utvMNmZNiX4CwbNBmFoFcLNHgDknwM",
  "key3": "5WU1NfUFreRhwX3NpFTxvdkFtZUhCp5AznG2oGh2cMBR56efgZLFfN9mEAf4znziHmcWyosa62u2hLDHgzB7FGQZ",
  "key4": "KCLfQjPBE9wmr4EjkPELmmK3XAShJnZkuyzvrd6LRPPd4Nvvz8ZmXNx98eb1QEDXnbW3WVbZCrs3vd7DTNWEhjs",
  "key5": "5vVHyRvhU7Shtac84QpykeRnpW9EwhVABvoGeLFnjF9hd941bYNKNPrbbeXLWjk9GjhQDwpYdU5b71wr8tV2RVKt",
  "key6": "nCn7pAqb8YQg8khedufNpbpcVkjagDov5KBXxrx94yEKCyiQWTQQveJVaByAjqoLb2BseuWpXztagYpeNiXW76E",
  "key7": "5bqpjPvp34z2ZM3iNZD6rkW3L5tLbWWxRrQ66Cd314yENePV226BBqxFPN4jpfPnBkYGi4Ekvqs8AHaJ68cqssjB",
  "key8": "ohMTXx2Po1gR8rmQUiRbvQikLhs4NUwuxdzqZb6yX6QuQVFy8zw3mfWTaRLKsUkiP3wRJugsPTigjLXvAdkZBo1",
  "key9": "4KVs3hYBjfVnPuCDWAewemFCiKarvuUaEf4ipCkbmDWpi5UFtfgwnbzKDr2cHXDP4uVjG3wpQCHTVMNrxS2trE4y",
  "key10": "2Dyeiq8VYrLdWtWVHpAoGWyCVrTDLbhmjS5XSTkjopDVeyi4AbuFFk3soVLhaU4jVYr4zxs39gr1MC23MMzSnkRg",
  "key11": "4HhWJEKradcgniq79zHHhxs1QpTgzrKvcRk7pxJR978A5bC7acM1f6FrNWHcGWuSZ6qtH36x1cw9FVaALBm75auS",
  "key12": "2HJii7KfgPXWoZ6xLotAp544STwnqvCDzcmfrjZWiFMn4sTrBgKxSSpUYoWWT1HZjjMuTD4LKtkfs4GkjpUgVBFx",
  "key13": "Rk1j56wx9RJWRiqq7ZD1UryFXt1MGFyYiWwqD8NSVj8G9j1xow6eGG2fwFyMn6qfSHw2DNzW12Y8oqBPZakEwFz",
  "key14": "4gCug5SFDBUNS2kpNsEkWQaURKA5c9GzpdzRnu1Rn512aGG6TMxYmMN3K1BVo5kpQ8bLGXG8jMjM2hQ63gYGje9n",
  "key15": "5SrV34ZdKkpsg21HuzTzBM9p2uBjcaDRn16AVUUsjPAjWJYbCiGeoAzWxJAqhRH6oimivpF5ZmkLN7cU89MzfRk",
  "key16": "5B9tZZdUVagVNmsumHvfTitpJszKwxH65uynh8wxDGHinagAvzffaaTckdhRL9rFcKKnvY7bHaYoijhi1YFpaqeP",
  "key17": "5vxCMw7tn41NZUMrMwsrBM2nZ3qyw9S2cScWYf6n3MCr733MRHgQTwweqUnNS4hiRzmwMb1pzRhYmbXBHFggypDi",
  "key18": "2JhqnKiyjK28qxVGM2xyTc7wciWLEEA9dAtF9ZdQSqeVjdTxjB1EopQ8ShnGx3PQNsvoZAVxGM9yNcC7qdLCkKCk",
  "key19": "c8e6iVj7z9jSKQgvyUTaeyHSHja3Je8vgqc97867viw2TWysuaQpQ9F29n9tswvEz6YXRj8U1zvxqsXDZwzfzMJ",
  "key20": "5nMusVVCEaK3jygEAENoeizBpSYLiXAstAfjG7jJUFmqR91WQozFrWwFgExRJ1mH7u15vGF7BhyYTeromgtKKCeG",
  "key21": "61gCnTjWJPVHVk3WAxfuPU7vGCXVkkJ4HKaBF7o1BA6vBbj4fDQ7DuX6yVbsRJpywnWNYMBQipBqiwec6LwhY3FF",
  "key22": "31XkvBTbWJDu4AVKbWugCiaUrCLVF3cy3qxwMjjSKgxm58zvKKkqDctFQdfUSkLAzTr1xZQ5Wzw8bRKTnChQ6qSU",
  "key23": "3u3T7ZFo7zJBwgY3duw23BoNGTtQzjm5641eJtySfciwfVf378WxsHPz72tzdnKKXiLvHkEsiXVGjbhervfwk146",
  "key24": "48YPxFavR6D3R9PDiVheQTeJ8MAgCecsg7zFFEyW6GCXbQL6q55oZDirxR991HcVu9tRpgZf2Gmt4vD8SLfaHR3N",
  "key25": "3jw7XQCTbwE1gwA98gQd6PgJktu9YGGcZizbMBojo5XSrRMrLbr5QZmyVUW9fcy8bdetUi98PMrDgCm7tVkrXc68",
  "key26": "26FTYhm1yFXPG21RBRhN5HegKu1C8Trxqz6GGirx2gvJiDXUvGEam1UkEjW3w936hgsYzk2ihYBAU9LYxjg4Kj2D",
  "key27": "5QsWa6VTumo1utmWH83FhaAz6UALQjKr9teSekTiYUVogcznef8sMirSfwub81QcANAyAEobBPeABbvxAwBh68HE",
  "key28": "LvQazy1Uojdr4uDapdJqhWP1gs8LWzdcZAcaPcgVeTQozGCdERuZvatfMG1aja9k44yVf1hrjrbW9KrgSS2UmjC",
  "key29": "5tRfggGhok4ScuAF4hxotCdPE99TGMRUYSuFQqtz6yLk5m75GdJC8i9W4NyyKDv6eSN8kVFQhZz3s7JWYXdD8G7C",
  "key30": "5tkQQXpLLaqQvB46vro21hqheyNsQayptgLWjG7pJK8ikgooAu87z1J9TcBXUBNpLUtYQwaNp2bXKEbHxEoEsDUW",
  "key31": "yXqDo7zBvZtEfNYshNwXpYtPVZXbUsLVhXoZZqDCiVyRbEvnLYANVXzbstkTWk1fVo3K9YXzxHm52qnAowA7aJc",
  "key32": "KRbh1KZ2LtjZy32sF2sS6GuQz96n98ufN3TrBSceWTCUTSsmrE7j2EHFmbLVogcRn1LBshB16kSoGXrFwYMB6fa",
  "key33": "2m89ZZAuKMmyeoferbaqiz3pNGTLirZCATcKQ13R2bjv6BX6wDZMhYz5B7ShTAQJd5vpXugTF1iXs5LM65fcC6Ct",
  "key34": "5VKVCKTpahqm2UKmE8mkXJMH8DDvYV1BDx8rtWPZ4Uza5765M5RGsJC4ax72iThTJLRJTvbLuaJrheK9edVz79dr"
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
