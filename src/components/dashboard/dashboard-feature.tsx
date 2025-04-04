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
    "2AVgzvDzDmGNYxJVk5QMgwRiJbEaNyoMAG8PdtRDonUGg7i89VMkF2oH4N1yaxoSqMFPeEyUrurDECyiYFbN8WHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "463mrHa8brnDm2mWaeirWzrkvv9LhYM9b98Rvzp7bzpgQxkJxYtFox4bx4KcXoYdatr41RWd9gRgDUkTK5vjqpPH",
  "key1": "4AYtRAuX4ZaHNtqoJhsPV2fYBaBj8NuaBbHeqRN5dru7SDwyiCohx1DJRpJx6aLj4ybprm4cQHrYdEZdQ5snw9UC",
  "key2": "4cyJta3USc8JojDfTJVCEYPck4vdEeWLHL9eu6JZLu81DvhLK9jyKdfefeDotBscepUMnRhCV8w2xx5PzGYNWoss",
  "key3": "4XGKHTwcqXzPTNi98XDZgk6GMdeR9bnWadrNLCNLCZmpKMFJpbMBkrkXpCGGFTCPtndABKFTq2tviwwjhryEL4Yc",
  "key4": "33DmHCgYVhSaS6ne9XDSwoZkruwjXdFRKeENRUme6EEiZhGvwC9J9fcWpZARYic2gpmmkAfVUmoNxv22axpUsowG",
  "key5": "3TbHbW66ZjN8fPXGEz41pDsbuoGbX79fPcF93mpi5WXPDSuhJyMi1ypDS61umPLE4gwQDJe4Yw2UTbyDhypUfqYE",
  "key6": "3i6TBmACVi7vG7JSznocnCpejbtf8FSUVNP49ULVie7q3zjf4xbYNNhoZyEPtPGoDcsxskK5ozopGueV5xE4iTPX",
  "key7": "4SHPUPiDX3tbB6PMX4gvmsSAKSH6oa7UNjSogc1U7zN9iksEHAxjvwB1r5XrJkybmUB6UhifX8gW7nJW3EDXmo4X",
  "key8": "5Ho6h3UJfUTYooJ58ARwGUSxDvPt5ZqwrDSZc1yP4Gu9K9qmpiMTKFMvH6mn9EWxbmWad9DU1CjcE8hRXz3PxSdp",
  "key9": "2a3nyQdEjHFBvYxkWJvZrLcpGLhs4DbohLSUuFa2CC1WTp9q5DMn8VBZHdWwAQA5tG4uEWsXoPpwdRcqA4GdABba",
  "key10": "BR2MLnT2HcwwH7i4FRRCSiQ8YQusYpz27DMFBXtUfa6a3QdiTh9wstFfCjRnr8pye4fFDXcuDTfqvEYrugVwcDe",
  "key11": "3y6AkZQjL1PxhakxTreQsCtvRtS26gFePqdi1fCiRX1jgAJHfe9wocjtEn25yStf9t1xZNrYCh4sCrDo1cyogYh4",
  "key12": "4vgASrkirHZKtz1ntmgYw27FcWcq4Afx6Hb7BmojbWUBqS7C4zDNnv1rUc2hL1CuGRgvKcpi1392KdYCxhEAfkkv",
  "key13": "3PgV6urDxvADPvM4tSeFxpwpx6mBwrkA176ZJXcRnXb5R18X7HQFhpBNrfGpYUb591c34yCUnfKQAkdUCa2waSFh",
  "key14": "4JW19tMqkDN3vNNVpSE4rnZEA6888FSwmmXPUvU83jCeeFC9yk94zLrQmNaDZjLdea3m4HHRtkMW7G9WLQBRcn4j",
  "key15": "3RmmdeE9aSMZiQKcGTdpUQLu1NQhGUxMTgfzBWV7FxttwAL1M4MmtxawxwmR3zBhU37fbSggKcabBi87j1zNpLGV",
  "key16": "5LEkpxBU8axmfwPJN9wyWXQmAMGKqnRV7vT34SXzSEqZv8hbqjHy27gbu3hHYrCUtC9moD6T1FrND8GfgA2V8fDY",
  "key17": "S5Z323XiUVwrE13rXkjRzD9n2Ez26KdNvWFngVtBdfG2Y7bXqYVR3BbzEZEyK2fcTQdSdfdqWjkkovKC6eXzQdX",
  "key18": "2nS3Qq48NfajzHdo2vAwRXHa6SZqaj6qEnAJj2ob2UJyFN5aikEaXyaRagWnKmgVa3JrXYzo6h9YcGZewr3f4p3d",
  "key19": "3Pwf3KAz7kqQwicpikKsBXafzGv4a5afUQv651rbxJS37dXDTgu8Yxftgyp22Gbk2ywZZ6qdeXxeYYycMiPKzcig",
  "key20": "4BRwjiZ2T8j2M6jS7Eoz3xqME6Qm8rRmkdJJQzyXR8koeT5Pq7H9ob66XgtPjT6ihYmwn9gLxJEoKyNGBxFQRo4u",
  "key21": "RVab2E6x6wrQTHYwgppbFmb1zmzv5WsxuDup39AMhKsgYXe4bveCTiFfQcWiQSi4uaXJEVLQxhMRQhj4eEvHPup",
  "key22": "677Wu5vuvQjE32nb9DV3H3aQ9bzdVRjxnVLQ2gnVBYepr7N5nub2hPLXwr7UbTdfphL4o6EPpPHQp2QCwxK5pfBG",
  "key23": "2oXDqxPXj9C9oVLUPz1Wu2zREMC9tbU95c7wRx4zHATBMpTTLBx8FjdpEdY9YW1eMvr4nQHQQP6LsbsmeKjcjAbE",
  "key24": "2YXaPGMAoDiqk8E4fkn6Ys75muguMu64gyrkBQ57dcJXGkjZCdEaEUMBbKXw67c3zimWigV7BprNHJXWt3uz85nH",
  "key25": "2nhAcYr8LfrFNLdr6BzL6ry1AwbP3YS6AYU2tQ3r3qS27WsQfircucLjt8WnFdRLiFjA41qamyBdyLyFsewr1pxm",
  "key26": "4GXJrwvhyeoAXkLJSwZeSZDckAAphPt6SrPL37516V1vsRaJwfSqHefd69Z1Nszbeqg2Czvu6xGb2xSru6q2M3Kq",
  "key27": "4fAYE8rTHz2PaJz3V4E4efVzt5p7jN1TPjhsQ2ZLtQQ9nBR2vDmBW2vZXVwDKm1aDtzxvNX4fB2JjnWNRjUYyJaM",
  "key28": "dWM92mMrKYmhXDDH66jvX39uLxW4pD9UzBupnr8Vx8b2Hap5kHhzcTQcnLP2vfAbSGdyEs7cn6c6Ffioy8ZbTh3",
  "key29": "pWsgwQW4wxZtQZCSryUdE7jc2PKmtSkuwHaQK8nxfY1nEyxbwES3EALZrzCpigFCXoMwDkVApGXLRvxDeTFdonr",
  "key30": "5VCqqWoeBwDhF7ZM2CYMDNruAbLZxwmbQzKA7z8emVVZYx4mJW8S7P2Mv3HkcocLbrnmXaAJyshxoqhp11S2ZugR",
  "key31": "61Tj6EKFuBxQdCdtXBC8qnUQjb8gboxPVJ18soJhNbJgz3Bpx8iM72srwosTnRjGk7rYienJMTXadSznc4VWbnsX",
  "key32": "2LRN27UPogyQXYoLbGAictvx7AkJ8htGAhPoYmKbjcbumcpSo6phXJs98Mm4Z2wxjHgNXNrNMvYvpVZ5iRRvAjUL",
  "key33": "hy3SpPtFhjKidcmVP6vBK6G7Vgkqt49zaTf1pbyfJR6iJZZti7La5V8vranwBFsrAjzPUTh4VJBSVkSrBfta1Di",
  "key34": "3r27C7uLoRDqWjK6Yn1DrZVuGC9X5N8qbGHqfgELKnoC4gBBYX3KTeAWXhwDejRJut6jzNP6fW4iDNhuqjY5snnp",
  "key35": "636yzQVfwsioJgZssSwxT3bAXZ5kAL6mrZBgY6DPsopv5DhNj1BZtYtWW6VKF5bEArRE9Q4G2E8cibsgBzQKPDZL",
  "key36": "33rCFYk75QHtk1qd6vMAZWm23YQ1ZmMZZznn6VpmU5DCAHpGqBia5otqdRYJZuqgACXJ3icZe1T5rg56X1t5gZGP",
  "key37": "4eVDk8rymAnuDvYsvk7LwZccBLP2CBxi1GKVv2VdHWVLbwBZaEzKQnMtaUUtmuZqEMVHj2xWncRjoVrTayoeA7Dg",
  "key38": "5QTRVonocf2Vx1zdLakeZKzU1PqSvEbbrHqbJS5VmhHoEeevpeN5VGGP2uLsVhfTXwKgJ6PwwkrxfYHMf3iurbFy",
  "key39": "2Fm77NL2jWByzbHERNf89B8Ax4z2sJDzGhxDjj6w8GZnvT2tDZcmG19XVuzYwAQwh9rXFczQy92mBi8EEHuTu24C",
  "key40": "4RqWuNSsovPNskcXLaapJ44RyX72vdwV5AJwE5goWYGU4MrQQQtrCrZbSg83T54E1TjVtspfLdVXdSWw4ngJELTV",
  "key41": "5vA2njBhXMs8LUrf6rP1gvvGsjxWYc69rBXSXy4XLkE7JQb6KRVnVuuhbZrqUXJnr4cM8MUBAfBegCKHzWVvFVLv",
  "key42": "1zRjtgfXR7XY2AHvwaaN82YYKbSSqQLbMgtyx8bPLWHp6x9vdBpxUzuF4B3n9dxtmnmjn9pjKCaBV385DURFgLt",
  "key43": "YYCWiiMumKvjJ1eLx8nKHUbqobRkdTz9TKt22rKEt3vp2ESkGCemBG7PcAR7YR7oVpXA8affsjAoKBWRCoyiSAy",
  "key44": "33a9Zb8FAPQD8bgaZB4ZXvWeUqCk7YfdHSoHvVyWyytG45tDG5vwMucDdH6CPaWjd4GgDmcTFiwqmz2nYUVQX56x",
  "key45": "563uFBKS12JaDSXdjf9xQQwjkyKLCHaMX4XcSSVVQpbzAwLwqXApbRQsV1YLKwxaZfEA4rHuXWimn7rCfxk3aR15",
  "key46": "5bhjGgLGSnzrupcL3SEKsS4e3yRqtpDdw9x7eEKtyAkw8zV4ftSnwEqEsJh3Tbib9yzEEqQKqvkxNizGcunSFMEF",
  "key47": "5LUiWE2pTkgkZpkAS3UFNwugG3mpDbv956v5x3Y1SKENGFk1cRyyDD62QZZA9siBsHC2TPoX8pN4ZbGLQfzioxkm"
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
