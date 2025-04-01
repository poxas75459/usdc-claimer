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
    "4xduNHeyFSxq2H7fqAJAuw4hnbPrT3aVKaW795zvbBQ7HLA8Jaf1aiMzetG29uLLCFMLkYzZ7JYb5VJvWthBwkFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jV55m61taqhBAwowk7sWqGp76ktN96cJPZMMQDs7PPooeesFuSvmifNDLMxVpe7pim7ehXb6ywwCoGrNyLdnmDE",
  "key1": "4Th3pJ4dLvYiHeNvzwxA6a66M5tiZfjqy2oYoC1GHzmTvSNBKVKrXTeSSBNzqRXDvLjkwYMV2zmj6LZ3LBUSvoh",
  "key2": "5KQWW27S8wqoceqdNS1fjHLKHMb6q3s2cRrt8n6Vt6adZsCXVxfGyEWc2gtvsHG1HjgJzyyWhbrTQuSzWnppsqCd",
  "key3": "4jama9y8eXQzGLdkPm8SXqXpR3kmR7Jk4FRiTcb1w3GUKTx6VwUQ9HfavYepuxZfstj6c6cDBFZL7kb9FM2Kvzh2",
  "key4": "4HRj2eeRbQSweTL4u3qmuxqVCPC53pVzEeVeHdJC1JJuovvyr4b4HdPf5BqEsKG9UGQJ49ue1p2b6SQrjBXNACpj",
  "key5": "3wA1fEe3muTKjrVxZg4BJYz8BaCHdrpW7L7kGt2qtZHFxzFpFsLA3Zv48waj4jyqG2MMvDBokk2csC8xVxzXLUZ8",
  "key6": "4C2ZzE4pLJENC96fPFmscwwY118x3UFRoA7pDte4pyrVpMmnoiSbV9YLTbP5W58N8RfkdDksQnc7C39V9PmFWYNi",
  "key7": "y7PNGBPfCtL5TviL7HCfUdcWezpjpt7maxJJfvjKLMEoWMU3ZmZRDUJqE7FFfszqVYQBVfRNrnkad7NN7TdNjBy",
  "key8": "23EPG2n3JenkAVZeeSHkbxhS7MLghgrY5tpSBdA8aUuUEL8tbyhZuVVNkCxrGAVFuAiUyQBPphsmzAT1j3vHu66j",
  "key9": "3TY8iv1PJf8rRMmx2BFHktXZXPRCE9XQamqurAHPbRkukeLzK3AcwPwUY1cBp5w9KKKMQ2xPM6ZFGrfQqNMqixet",
  "key10": "2aKMrM1QTUP8hyPSpNPmjVNdF6bC9RMA9VV2mCrHmwbEsVbK4qHxJptw8YFPNUgJVGDxRus5TBfwezbF3EnPXFvc",
  "key11": "qnjYjNz8ZppQSA3tAsTWrhbw3RJXJwxasksY78iRGnRVJcQDvMdNSojVUDEacezG4SsUpeVP3vXTtXe88phkPJ3",
  "key12": "2ZubSqaufizC887nebU36zHNUnpqMNYdfT1ce9hAeAz96382i24ATRkjN5y55vmTdtopRBfGtZn339i8fQH4xddc",
  "key13": "3nN6dW15mDASx7s1nFn4MPJRRBPTBUUhAnxwweajPEqaF2KZjDiCCjFq7vmbzC1LyeYWC6jCyTmL6H4Yc4yVpmor",
  "key14": "GPGu5GKRZv4668MdcYP4uvYY7eFDhomgmacGHfcF9N6jWzB75QxHNJ1KHdcJWZgTKWQzCTjHhDjLke6ecq1YRnF",
  "key15": "4kUfyY6ZQgCUqbc8bLR38nXzQr75nGqgWvYnQ9Q92i3ePuX4KQWsmS8BgAHL4vJs5SJqcDYcL27Sz78qy9tGz3Eb",
  "key16": "vrdrvMMmf295DRxe2zZhi83rEjPQERWcDkERzefxqNsuj4X3grHMfKCzojLKwP59U4rAXuZLdCsraHk9EBsqTMz",
  "key17": "3fHhMukrbf3uQWkLoxNbDc3Sqm5PV5WfMqPkxmnm2y4oBQLwgFXqEXS8TDtoyxG8JXU9eS7e2JmLYoFBTxseGtxE",
  "key18": "5prXaQDDrNMRta8NZypi6XQgsGpjdnbaZqkFAuXTQ5z8eTTMLW5KHv8ehELGKhY6W1J85YCGL1nDDePeNnwx3E9C",
  "key19": "4WmAkcVgVRM7QuBBGYBhY4yP87WmmRysbqQG3PRjR2qPPrpx7A7WMNxKm8bnX771kGosXApP1Qb8xQpGYonWKmE6",
  "key20": "3Pg8f6Edf6RcDzp79PppULJEqwnJrCPW6Vh8MP6SEwYhpcS9QmCVRbynYNt9WEWTErxND5vjmmNoG95XKHgvHqHM",
  "key21": "3gZDN8jgzPGKwXuh7H5bYXG1jeUNR74wNBufCdLa6CT6Wz7nF9a6kNTEC6NMEaqUYZRdNQmyXzV4E5EBYUd1ZYnW",
  "key22": "7Hccd375bt4sGzVQRuzrfjLn5KzgJGx7WKnwDRppMgN8AXotgT8L7EDnkGDgq9UJai3su8RvuVeyXAyL5gNQUQ5",
  "key23": "VGokckq5WkrYn6RAk5vtqVB38Co244Dcj7vBS56Q6CLCw72HmBggaNm6oyT1srBv5v8m6cDQSpFVgmm7gnt2kRz",
  "key24": "23qUR3F4RuPe9FBvkQ9PwJfcveifcyszFL1xm7MVgdESDFZqiBDsjFmVqWGmGXaTtkdBx8piPncrccVvsCtn7A8e",
  "key25": "uixdXTrsG2dUup4JSLwD9qKE1RMYsVwKBWzXLCjUqvNYHCJYQsf6XcwJFJdGLDCs9Jj2YJFkFt4JrhhWe22d78y",
  "key26": "29La1cHugf5KkELQFHemAXfhvTmg8nXhddQDN7KJ5tXhsvKFYBwVXpgEmAfANpsZgLvoXTAM8jwmWL1UFgbTm2kj",
  "key27": "szR2gJ8k3NiGXo688G7cAakVVpyQR52G5jvkqFSseBYjXpYTUAk6EGG2dNeeCUR6u53GpBau3ekaHYcnJts3BMz",
  "key28": "4jNCPG23z1PcJNsTxY6HnMMH1FAqy3Fg3AXQYgpwYiTRpiUWRjY3LKqRMkYiTK3X38QkncgeZRv2zaHVVoXj4Wdw",
  "key29": "kPoDpeqXSAR2uNZ1J6vVd1zacDKJh2dCVFiJ4r5NTRank238ndzdF61QhH8DhkyCyTFs3CLahEgLWw9dd2SVmrh",
  "key30": "JCH1aHz54nkd97QG9redsyFAznQBwWYUnRrNZftwy3wEEpLFETB4RXAVXpWM448y4rBxjbv6DzpMREmWPoGb7jf",
  "key31": "eN175uk4fE2kz5wRETmWHRu8y8x9ohmtRvcBLr49aQfhSn6Hw1nAVNQGk2uePTpoPHvXAPWn3VwyyQCkvNqF8Df",
  "key32": "4rdinUUj8XuSmbr38RaBGHsgnLnrGp4gbJBjJR68ocsXY1TaGA131PSFvdXU8MhFgRHocQZ9G4ubBjWejPauHvyJ",
  "key33": "3JSgE8eVQ6H7dxvPgdudh1WN143EfkhC3NnPyduETSjUynhm9gfPvyESNKDJoBwzJ1R6XU63MmDumTeCX9fW8tG6",
  "key34": "5m8WJhapDRn2Znt3CgvGe1SamzseuBJUe2EiB8pGwBtcbUNiM9sXzh6nqYJVYB5z5dFttrNbZ7ZQbDC7ov3veLbK",
  "key35": "34GH2xKXHZPZz9cDU6oppBWwp9YrusGpWfvy6CQqXHx3zY5moCaUqusMsoXZyHJuihASFBLUWcMFTYYbYkBuZYok",
  "key36": "4gL2sVxDhzgKXNHVaEuXeurh76DgFpFd9VGUwkaU5efcMLN7ryEK9KexrQy1Xbf925PGaakNviE8StD2adWjohQm",
  "key37": "3TjSz2tvhFpY2176UhP1DhUsD1E9CFQJ8MazgazKENkwfeuuYvM9nLp8xQCAfg6GHBYMZkAxtEjSB8aCGTZ984Y5",
  "key38": "35cDhy8ZU6PYGoadw51J45TgRrCLxT8gHFrBa1pG3osLd26dhhmwZteoc6hk6mTYaooPD2WhEWDGJtY6EBcHiXmD",
  "key39": "2EXPavqVFbgDPFhWgGLf61f8jPS9D1Tp2aFqKw8Msjsc7WGK1R3hSxdKkVdDHq6Ln9wGWfNXzMuiaGRwVLD1sAHo",
  "key40": "2bfCEkwDFF11k5foTEAuiWUKrAPvk9ny9NaJYjkATF6FiAZEcxK62S5A7C27u3a4qgbBWCouhPnZagz8v5Kykdxv",
  "key41": "26NUrdL2zDMZxhiPJQccyC2nToWrWmH9cRKpDXm1wQfs3GbM3WAzfYj9RsVdX5JxYsabc5Z5wrxEUUohntEU9bW1",
  "key42": "51KpdGWm9yZbBCa1D9GRpkBwjuJDn74FQbzD67D7dcheASof5P6v6ifPAdddZ4C5Copq6x1D9C3kvqM2UmCNNKt6",
  "key43": "2TxwcyLv4hXLdon9u1xUdpb2Z8qBVHcSocrxSN6sDph25GVuH7i9ZmcGXZwjedya1wPdwQrHeP63KYX8uBQt63t5",
  "key44": "ACMSnWGbeGAqo4qb4F15Qsg29K25rHFz1Qx9YVEJuA2MBwvfjNTZFpaNnrnaGT9KeKp6xCR2D8sXdB36X2yqZLv",
  "key45": "3BrZAg9FwmC6EvAvyQJj9oArjj25mALWgJEoxPSGZ2YJEyquKsgPnXN9JtXxDXQpgUhN46WPAjbQxHtyK3rz85Ky",
  "key46": "5o87w2ygacRANrehzi3TrXcvu4nVLBDgpcwRuKoCLthaFLjZ2V321aczPYtJwkNHmzVMEt2brHRffV2oN4xLY1Yv",
  "key47": "5xDjpGw5Bq3Xbs2uHFhadFydb1Mr8KTv8brvjJFzWsNarjX21gMj5HnqpaV65fF3xtjbGzW4Xq3e86VxdtfuxzLQ"
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
