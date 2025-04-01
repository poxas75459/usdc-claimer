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
    "4XkyFXrQRNoB6pMECu1re3y2yC6zAohn2kXsHduhDV1V26bGgRu4fdwKaMDuePKQ84Pt4TYDnrLfkx8CDSdvHHrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RtbbW5bGJYYPdxFKqD2pnDD96hZT2k1oGMMWo77t9GehfYCuihcVFCgPm3dNFe2hGGTUFfJULHvkuJnGPmGo19k",
  "key1": "3BPzUB2zWvr67jmRpfmzB8szDgzg1s9QGDqfoZWGsPC8iXssBsQAg8atnu6LyFvDWPhtvvR2coj9JQv64oLNE18Q",
  "key2": "3tzt8dBWZXjXPFJsD4xiKPoK9VkXqyLnkRASvhXRJFkVn4yurRA8LkihfKVR7LK4zotB3D6LmF1G7pKmtHyCFAcu",
  "key3": "2PgzoKMkeDfTfUndXT7CrCk6qiRRcSSdvnuApnpUanEszVvyGULo1Z94vKBQYE25LqyU88f1QtEfAis2xbrG7Gnd",
  "key4": "2zQessNAq3o62cLHmXB6mL9vq4poBf8oJ6tYS5yssar1x8qF4gdzZK5LFaa1eKoPG9nmVqgd9hSjL2wxCcZQxneB",
  "key5": "2LrGWgxrt9jX5y74F41Cstf2K1mH5pPcGRe6tALfv3YhEm7qb24G3mg11WpZCerFo6bhGeE3oMJ1stDeVSXx3tZ1",
  "key6": "217LDjmHiRV2RVSdeKzNog3YuSBXVopNKrqMR32CzxCTAjRzYzgsaZpsWs2RdGG1URaac7CFwrcC7P1oxvb7nNbs",
  "key7": "Z9ffSZB4zAqm3b2qZdgRsaLaC2f9j1eGR5UmNv1bLnfrqgLffMQUfsF6L86Y28WHUJTovwaj7JtRMVLZeSv5uqx",
  "key8": "2T4Dk9ZKYU3CyQ3E14h9gvkoebwQLPuXA6BYP5anb4iNceqgs7AcQsWsFQ1r63zMvb1Wjhf2xNuiCxtVbJcrxVA2",
  "key9": "3oLNkVvLYHGKvr4ZHHZeHaVh6mq4JcY4miQzRPBFxQJ7jM6Cy4eMgNPcR1BC2r4EfxheYg49qmY7eN8VnMS6E1W2",
  "key10": "4Rry1wiLdfUKJ4PvjCcBDzk7DBoFSzzakCE8seSVKpzxVWY1cTrYQqCjJhM3MKAAMCrP7ArNdQ6rrpKExBVDFApq",
  "key11": "2BnixPLATuQpDDrVLtqv3Z3wE7rCdsoj9QuNzv9BhrqENTYBrtAReP1wnSkHTchHdW1dwf3xv3saNw56amPyqmTr",
  "key12": "Ko7YoKn92JUHWKYXedFkmCDyPxbQGJpVPkRFmKm8dxz8wbuZDe3Bg7NWMT7rgxWzfQ6S1VdgUh6CjWahEoCcmuk",
  "key13": "2RnGAuJQkb34L74p9bcNQm4GYQxMkW1kFWdwSmBbZX98S6bLwY1MHF4U4SRr1GMNpw4RcND5wE42SZJwfJTdKiin",
  "key14": "3m91J3CsbfVn5PjXmQpZgYBGEFUUrYYtNgbXDu7y96Yue6o4x4bXcd25Wz79mZpKJeWanVHV1CPVU5vL1mJbEZx3",
  "key15": "3vwytekQHC2TkbkCfrfVViyv5EPWkLrsrzEzAUyVq371g7nxFBJh7RgAfDpoaJSKVkNimjYpUTdZZqyUEYHQsNLq",
  "key16": "4kVGPZGrJWkXa4pFfPM5DV6rGNm32p41e8N8JBi4zchCQ2SJSmJQrB6FrZGinqLf7AP7jhoYJQvCNJim4iZi2htL",
  "key17": "2pP6XVPBkyueYXaMzkn6CZT9oXeN7X8FgCBiVKyUEUXAZWQYSVhwwZm2YHbPSkPfd2Fj2dEVzfNAX389MCKB3BEF",
  "key18": "ALEKcfBUDfupxJVPXrHozFxKrVyWiMSj7B8WaxYHScTpDmjPRqcaekXsmrenThryswX8ez6j65hyUDt8UU2ykMd",
  "key19": "4nwZ1Jy3zTqZh73fLbj9n5DZRrwywXf7ARLdQyTifUwuwTeLopj7rGzeU7UpM6zH2CyZsZhC6mF6d1X74wPWyhe2",
  "key20": "28PLetSsiTU4JHoaPS7iWvQ6dCAT9A59Fm5vjRFLYs8vFCRQSp5jtQikCdnZ3FsoYNCjxo4hB9KmaggeHEknTZh4",
  "key21": "4y4SqgRKmHifqzJkcq3e2unHt92caHSdmCbBQENp4j9GJepdF3GBVCtQMbezdCSxaVBo1g8Hz6s6Mstx8RMpPTtN",
  "key22": "54v5q9HiDGJzCeVdvTwxXaA1WvtK7HGXS12HtAeK7fZHyqUKRDsgQEFUNS2eXrj5JphasxegBLd21a8oZUCcGdsp",
  "key23": "2VVbCtDgQFxSX1LJM9W6z1F97JygwjzCfMYs9nCEv1UhCwVeNXyMuTAbJUjS6QZGrtoTkCD8tBTagqL6dCPhuQPm",
  "key24": "5tUj79BYSUymjJCNqWLdW5FqyER338wN9yybsH5iWnerT9YcbpbqwscjTcXiiCTcvJPTrMvzroDFNchKQvEynTBS",
  "key25": "5au5KgjFvrfcc7pDAij44MKS4hJzsqe8eqJtupjJ2Bvp8Ssv6q8vynNbyHzUEsWCTQyVyixUs5iaAYFWg6uM4YzU",
  "key26": "2imBBCUMrNmB783jKNoFdxDpWk8GkqXfUsfbfQVXL12s6Yq5ZTGUNzCz9xLfkyWNE8G18N564M1LeGT76APu4b9s",
  "key27": "dz3mLo168AHP6jbGS1Y2pwHCPvM86fJjCKZbfrvuUt9eSVAwxHbHnVFU8b6Y4Y2wn1nVv7XoHuw15RchL7qsfAj",
  "key28": "2EA2pbndkoL5GzzpyKzWzuTP49aUzGJBxTBmYADAMf77zTj3vqbY2miGWjATrVnQUnQ6bNiBFJTdZMc8foHwtoGo",
  "key29": "2oP8vyU5PZYiTDfq9PNGrAEx4TgpqzNpEtGDgzi4BPsV45sHAbcmYJWcaUJJ7cNZk3p1j7YUtzdCEtqe1kNFioD1",
  "key30": "4MMViwUyDTjAQEUfYGsSt8dXNU5wNDomvSaYcU87teW5zBHW1UN4gx7XeduJwprh5hYT7bJpSD1Jwnea6g9ZQfRq",
  "key31": "26XxtrbZBgEokh9iZbjnS1N7Q2YRcBpofaPSt7SnDgnEt6TcpXb6Lx7Fsz6kZ8pPLk2sbGqtCU1mwtuqZacwzBmQ",
  "key32": "66FrVtgRDYsfVkAnReaguVmtYKX8GrL8HfAkmiLGzUreRKuhFKAUrmax2nBXWJLSGmvzy4W9E7RTuqhrNj22DoLB",
  "key33": "2hFmguEEkzPZMxh7z26CKXkrSYUCPoCsDGiF7Dg88bLsEVRtBvVXUx7sBWex625sYiMyCVuSFB96jFfQZcbg8AGm",
  "key34": "4T8S2oyBeRQKLQS35dwMBDcxCJXqSmeDzsqvFdEpKpSrjiEXvGGf3gH7TgbySNzjsVjJwPdfbenjwbnMUweB5tDT",
  "key35": "2fmXvVnwE3sucbFzF7V5YaZssCjGgWfiuE9cveTTXmhqTxWSBYvEo9ziaF9DHQXwNKh9n4eq5oE6x3fqc3pEBSqr",
  "key36": "2QCpn9SNZnJZdqsBfZcsuvgZH55YzxNn2VYUC444AdRm4DyGXFEDHLnn6WH1RtVKs6PhNd2xW15FfZ6EdiEDT6Tz",
  "key37": "E839ffGSNu6gP7F4onx7QCmUmKScDMpFBj7JK3jefwC8JCTEH4sg9nVfRPwgfqU5qNnhnjaMc932fbMEkQB5HLo",
  "key38": "4YhoDEpP8DUjN2LpmLmGtfFdtkJpFajdE4JVT88HiEutUtqXSaN1DigUJNfsD2FPrdYkPngeejw5NdHAdGQLsV6T",
  "key39": "2YdTYWxCDGf89zaTYfrRSbbto3Ly87HBJfUoaDMg6wgepx18TgJTmdVZramtBXPG3tbHB3WwUoZrrhkqhQS1ZujQ",
  "key40": "5C2cQp73RJfeucH69JHqYhZLZKWqbkqcek5E3mxe8K9NVm2RxM5DmzYgLgF2brXiBuyXSHV1Lewfp6c4bSkyNySm",
  "key41": "3ySSpUZ9UiMmZBDyGefH28KqskfvLkwuh2X8kqmW8uYUiAUpQmdiJUGNo7D7KN2EWfAqkxYQVYuwNTH5aeY4uLcM",
  "key42": "38ShSqhFaxtuJAQirzvG2afpbKaGgpstxzDcKhuu9cxFpZjZK9q3CYdxMzDxRUZaj4MLa5frC2EGgw8iwCTo8cC1",
  "key43": "5MrCxiosgxkk8jCVvC5VKWkPxftwG7vt6M4Vdt5BMgFWR5A4csCRyb69ujvy2JcvFrne8LAooG7RpHtvjocYe2Yk"
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
