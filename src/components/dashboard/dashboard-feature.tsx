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
    "AcT9ybtGgTxje73JpVXZgCXZpHf8XgaBaqBfaLcWQrbhB7C9eGacwoqTbjhfX1DfTWGzYiQXeiLDAW8r6rb5rwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DqgX9JZfAFxf3NwroUGaZeKLgkBdsFMkoXY2mPegYjfj4Z6Dxizv7V8fY7kebxbaqK5sFFDRGZXZQfTwYHoorj6",
  "key1": "21SMkdbnaxABGXeSaSxEvfFZyt41EeMtSvrCTDrd9qFN7nMDB8zLhLKABYrsRBEczAPf6zBPVMMgGQuLdNq85VR1",
  "key2": "2FjDzpBWy88RrNgYCxELzF7uAeTFvDSTuRqSHehNX3bHSLbKpWRFu6vueYF9FrBR9xrDx9MwHwWEwCm9aJmgvgqV",
  "key3": "eHPoCCgnwXWCiGLF1SryoScnkGvj71PVoVzeDJEVLKbk9pdTTJwWjYG7ZcjBAR5yDeYKxJQrb1Tgh8ynbQm3Fsd",
  "key4": "5QP6SBmVaxAn2TpnYNUknaxZayv6rvH6J6QHYycnENdqA6xy4LYSnBQkxzn6SMdUDosAF2na5wiPiVUkkt8CdS7k",
  "key5": "4x1GeYeLkXabw9apYNso7GE6cq2G3z7zfquFX3BmcR6ycj9JN43Zf37aAVDnLKvipM7VwjUghVxvtfhyXN9zveEK",
  "key6": "4Yaqgyt3KR6tsfw81ToL9zvMkgrd7xRcHzxkHtumRiLP51dcNyWm2mj6WRdVHghHSXoheT64JCrVVEe3nxBUq5DD",
  "key7": "5pjMjzPys7PkQnopokRikvrk6W8zWzWjkgBFREN6pjs7mqSUC9ZKDExAtez783YHP6wnFdjZZTBSauSQJpxk1uzw",
  "key8": "2pRpUD2mU8KrFVxCKiC2CAj5dZf5Rp9ek37nfoHuAqiogaNaesBFXMFVToE4ndTmNXeo7aPeTerYGwWWkQ8ksjS6",
  "key9": "7oAv4MLwA8xJBeq3utHRJNRsH6MgL8RNJawtpdufaEVyntBjbaByFtqDCG6mFbqQmAp8ueBJiNibxrzxW7mGKJD",
  "key10": "kxuirEHF8m4NoLVkxd9HCdjXCvoeXiRNQgbn6DAczWVT9dsEY8PVVriecmrNnXkuAxyGgUxAmDVzxSHN2V6jLjT",
  "key11": "2CfWsH9kdAtwdZZPxLo2TmzpG2PkYQsnLiboV2c5iWSZDieqqUhGZR62Ngmmw1Nkcc3Aq5Yboi4BvzVMv1cRT9Vg",
  "key12": "BK145rdiHox2H6rXp4YL2YtNM6TDwgSXVg3rGotWcxBPrLkdv5AaRj6ZS2bkRaLVKNcQurbPoZctPuKMLDSG25J",
  "key13": "QJtkXGG63Commaxt16BTnCZGyzaY79XoD95m8w4yFEMkZdkyJcf56GKdY6uBJHc6L3BnZMS9x6NynhTsmuB93SU",
  "key14": "4YGsGmYvaaQCq3Dz3fDKV3GmzBwy8EbwyiHDirNJFm242EFGgonzi6wwdaxqo3VgwBsq9aPtTZJJnTMtYtCZkTYB",
  "key15": "3tuX7Z37VLbTTkzyzAtwdmPux8RTwsDcJB7HpFnTDzt9YBEU86xKzPYE6kxmaQVQ1QmoEYXWfyzYvSgKTqRB2ja5",
  "key16": "uUZ9sQLfkTAZpF5pytRFV3AowLMbdAjX5PhsqaRvgwE6Yzrhu7M36ume32LwWv5ghkcq8juX9YYGDCa4LwK2q6S",
  "key17": "48m6ySfX2Bh62vLxJrCj7XGYXVPrY9kzrYSKi2AkdnH7s6GNPsvnEuAALgiC9CbhX48jAzvLUxWtcnXyHJkQPQxi",
  "key18": "5LJoYxNBmUY6ivjapJpRi7EJaw4wfCXRivQKGjxTUKJcYLdnt4iBvWBjHeaV9QmwaoRvvJACkhBvEXPPjqctoQSM",
  "key19": "4ySq5UEmgjMem1S1EXQDhf9smKs3vs22ZxqcKqnm28wPrUVdivrqr34XXYPei2gebE3My53cRYGf6QkNrk1diWZU",
  "key20": "xC6MDhFkLgva3j6dh9CzAcfVLfsvjkKikZpT8hLgGv1e1BkaZaZ7ss9U6bbW93j7WXAMx2vyr3CVt3wQMJFSCgY",
  "key21": "5smKBqGSv5Y9Kfxw1rtixEzum1uwTd9k6EgxVrx38oowFctJDcSACLaKbNYep7kYYSzC8G4gszbeC4EwKUX54N23",
  "key22": "3RogRsotiMXobUCuCb8QTrueFvc5czuywEwugyV8xnAmoNiFNKrmq7VoHZUzWeWar7rCqRJxFvK3hbYuwJK2U4mY",
  "key23": "g6b3fAWkfjY31U7wxcLe6VqHze8D5Nw5vqqggZ7smWX7QSRRUnCor22P5NdXB1wmVQz3nSytZnSCXu3nAC873kD",
  "key24": "2RZiqw2XZhWGbrTZZugKzvsSkTNfLZdaL1ujqXc2mzUxeRHdvnPLVNrgfMxRCp1H9qu8DtGv5kq5xwPBUda9DML5",
  "key25": "5iYtcPGyN3gUBT7zWvrwuubSbkCRCdjz4uK7sMUrYMBsXSZNSchXe3nreKZdqWM4vHnwHXUdSNu7CRE3Md12T5eJ",
  "key26": "MiRZnKUADhfGibbNTaHAtqam1ygtzyyZQnRAuUTVf46vgfVSdi5M8629jKPG22SHswGeiFppu2JGxUGiefMZqQo",
  "key27": "2zH4u4FxmS1Kkdep5DL7ZvGgVTf7Zf4XTmyKgayo1xhQuA4Fi5F9cEmeUtd6ycimv9Us4Mxake1QwbLtYAEWv4sD",
  "key28": "2UkztVApWBx3Pj5zeAt3nyehb71nRtvQHA2Xt8SsRVmA5jUYRSybNJKkBqF2c5AmxHuyzxm9givYxdfKseo1vSP6",
  "key29": "4aXahvAwxueyri3p5pVqQ796Zhcg7mq6kyn8Mjbm4aZ3gen2CycNe1wFfzsmr2L8SjipR715ybpB5Ux16PEXQqdA",
  "key30": "5ZXxcHJfKWXhKdUvJEVS2V58a5yBsnK5ts51JtNfmCLfDnaAN8Wpte3w3bzop1PhFhHzbzW3CcUtLKe1LvWygBvr",
  "key31": "32NZGisWDd58zJUuBA3bYsaVf5wVzuuURUQyVCbWcoDYduKuBCecNfDiA3dbTEYana3vKPDcKQ4F6LCi8dbUL952",
  "key32": "2QWm9Cc6KzaiGCJir3ExqTssZ9pUUVUsFbiyAkndnA8KgFNRBFWM8wfXpKSetSPKiygXZV7A8ogtGKZdR35StjAt",
  "key33": "4FbWrEQSR2kocjrfGemjjSsYonku1mG5G18Pib22P6TCfqArLZW8U1GNzhtjUsHmCyFUbf3CQVYD8UKBaKe1HP1v",
  "key34": "23STSAATPrqS8tEXomBmEaQfhRaYYGtiLica2qLjQ6drnK8pPxGHGq63ZSK2GckPC5Q4RDvdtAXoJfyCsRkdB3K5",
  "key35": "5uDhNH4fDAjJhwuWXd5FUPj5tW51HrV74g7U999wGXCQZp6pgfMA4quJESEsQRKjNYixCpK2to5JGann1AJAcSz4",
  "key36": "3QTUjxmTaJiWQ9XbrALhfNBLGSpPGkYVBQe2dLPeuWCCMV7fFPrKh1X2qwhZJoqYLoYxsbr2xqNEm4ix6QKw29Jt",
  "key37": "3AyREJ62np8hcsSTZZJbBgGwGG167r9J3o6w7rcKF3VUWb9XGqbpFTk8xDwG6yAZJ1XVcX7XGX7TnaGXnfi3mn7q",
  "key38": "hZuhKLEXJUtXQUFKt66Ls6UiczaqFF2dCyksY2VYCYhKnMMTt49qmE7gmJY8q3Az9M8joPqx6LosbqZNpmTMj6a",
  "key39": "3svhd3SFzSjbYEwv8vgqt7um64GSohyMXgdc4QcZTqTh6dn8dAuCQe1ug8i3235EX6pwNupc8q2gysPtrdb5qemy",
  "key40": "2sJ6Lwq7NNLDLgQrATgrTGifZ966XoF6DY4zce1HkdnxerynZ77312foQ5hGtzJisaV4sUSKfnrA7UQVLDi1GHvw",
  "key41": "5kkKpRNMEPpg1FFsiQv2Ra9mqbNVYDxXLsUQyccy5ZYG4kc3fapEwuJ3XRJD9ryv2NyCvpYX8v2MGwmaYVqk42FG",
  "key42": "3VWPQUW153dyxYuVhDrR7qUZzKQ4b4ai27cYXL228MM2cmCLspdSNJdiPRQKqxP55ope6ov22GSWt8qTs9S863xY",
  "key43": "2RApbAzJ6oXe6q1wid8z4iVZa6gP2TNzsP8ExCJdmtjvDTJdsCUFDzYkfxc8ZJ9xR7i8X8aF4vHNL6xLxxyMiHua",
  "key44": "5Q6BR3Yo9f3QRs2puPu3eCiKwFNhxtBb7LLZoc2u71kkyYjN543dpzXLFJp1PC6XTmfhuhVcSW6ikqPXqyfCo6CL",
  "key45": "44cTemthfK2ZnJCW2UhVUaioRG7PRTxKBkms7gRwStbFuZB1xTqPLA42eTHxWQeyeQqmj5Tpqf87FSSnNVad1bRj"
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
