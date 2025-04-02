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
    "4ecn2vYDvyvNnjyw5kZq5wdyJpzGLg85c6Ls4rEWuMxxDVWb6rskxwS63utMZJQuLkb9PbPg8aWfkxXeiD28phrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AmgpdAHBAK3WR6BnJaCEzy6U2UC3QuV9zcDWWwN8KWFm8RVQAmkrMLZxJT9Si6Axch9MMzF8F7Fq3Xq9NLrjyM4",
  "key1": "2qyRejnT86b3ZdXK4GALnZyEGnm7GtQ8fDpLdtn4YRMp4d7DgfxLXnSkYaxFefs2wrvaA2St9pzFKDu4mXeeARoJ",
  "key2": "hopQzWKccXMPx9zTeEzXcaujiDBHbc7hjFhzRWH5u9oE2VCmXNqWAHgGm8YeEX4vzZmpFtW935kmhe8j8h4AeXp",
  "key3": "4p1FYqx8aLB8ndw2R3rQ9u4XgCmjcfpMHcrYvqh1ArT68N4fTbykZbzm1akhbsDZU4TFDMJXk3tntQsuXVt4Mcrn",
  "key4": "4Mx568osjNFWAtDw1tojDR7P9GiuHoPapzXa53wfFpnHbcSmyTiUoFudnguqRzRZ9TsjeSasD7d8RszqHFxcdQQ",
  "key5": "47a32YjtVik2Gf1K9EvgCnrfTGeMRgoTfAV2UzLCkTaqywNkNybARs5HuyZSGwxY3qBbXZkrQEqsrC3VxyNy9jit",
  "key6": "4AHtNCiCiQuJeXJH9tb8RuTEQjZmHi4pxYaGAYyXKnmWUFNzrsjcYo8PzGXsAogtY9v68u5wHu6dis8Lfi7eLAwH",
  "key7": "3CTHmwQTYVa8oJC4mZzGaeQNcyUoDzmnPtTMRibopjZrvt4Loo7rwm7soNu2GQvxfjfdK146gjEhuHd4pCFZvKax",
  "key8": "52FVJVKxzQBveJGonEyzJrzLsYP2m8EVHBxFdSMXdnZqgHPioFJPPMBnJ3wREjXCTEEC46aL4p4SFAGsDTS5zT5g",
  "key9": "5StjFNkXSGSw8tfTmvpVw8aV1tMCpXaQC5GNR6Ecg8Qdvr8b8pXATtFpGARuCpwRdPx7hQ1fq1MZ9MvPbunQ7uBf",
  "key10": "2eSRJVH9ePzFiUDa85nnuLn6ESgWATTvXQAdzLFU1bsRvyN5F1PbE2vKa9wyReHQTSpKP9JyR6EhPiKwBB4KPDZR",
  "key11": "61XPppy31WeZhhk8qoML1Xjk4eurvVKVV4yjcEco2DiWLpewf6nF4pVzQk3Byqf1zW77iziTUac5otEbpEWNYznA",
  "key12": "4grxJLJB28usScXq13JM96peU1xfbSusgiPngbRA2PRPgHMaaCtkGxtue6rtNamVs61D1emY2ftAMUxAzEanbebW",
  "key13": "famVJa8Xs2xKPq2x5UHyANV1FKg6A97WdHBQdRoUGJ8e7PrnKXkrNyjBRU4og5DhQNVi8d7FoY5KAAuK5KdWen9",
  "key14": "34bivcxrHWCebDrbJkqR4nZ3KeG8Mt2XVWb1Lqi5CFTGnatma9yJsxitbPDNEvR8qCyzD1oebdDuGh2RDNa1CJ2",
  "key15": "62EyDrA8JnJVMQYmPCeuqC1G3DX95FqFhGZ5HPkMDoprg89Njsusu645rbK4r8ZsK4UcL71piZzcM4Z4nqrFxXkG",
  "key16": "66zCDWwhxG2D85GA9waqNuZV3JXrnFPaicUE2Zd3pxEGhwan18dB3yrhvGkYEjtiWzmDMaaNYyFDjYcwhLaB5o6D",
  "key17": "3Duwuo1XquZ5iTPemAqHuURyknkRmykwfPXoGv6k5o7WkLLKC2EyXnGiMdCviQj8waJEtyYgLQfi38oD8KgeqyW8",
  "key18": "2c2EQVHFCDn9tC6t85efvgppNR4w8KRNCLNFKoAoMDkuGekyx61Gc9Br1UGD8iX5Gy8JkXZKtFjaNuSBnbDLYFLo",
  "key19": "4Wm5QhM4jztzWLub4QbCtPFzkxm5D71KjoAUEYgsmW9uP9bMU3Z4BdeZ6bUi2c8QFJeaPV1dJVsGsfAV658q7Xpf",
  "key20": "2rr7PxaS2eWc1uRfCGqBbsQVvTHQerMGkXbDsP8TBn9VyyEM9FhqxPQpvkdytWNUgua27S9XBhZZ4ZnCHvsBWH52",
  "key21": "5tpL6KCsWyGCT9ZvGsubrApQB6HaomSah9E99DyEKdP6eCfrVJ7Czn4kMjtZnY1nUQb1RXPwv6XJNGRZvSubqeJA",
  "key22": "2qsM6WAmK6Wap1fzfyqHRsfMDejwiHHuCHWoft2J8J62JbZqHKuoeuS5H7RL7RYQtCxFWE5NoG83oeM8geSJzeqT",
  "key23": "4ZYuVGo26xWXCWLah6EvtFs9TQwBkx234GQTF82FjaYFy43dVoAadKYmWAjfBuij65KTFAGreojgvt2ZhUYgtdtn",
  "key24": "4vybeuzBwM8PZYeq4ww498pyk53dpdQCXf3R5w8S7r6jPzVYkGfETh2jpDqe6HpGWGuY1P5hGy75QztYwjtkTmby",
  "key25": "4bvBjwsivhrecs2WbkDXh5q32QqNSGkcdZHBVhsSMLqvkLDbdAuHo8LaTFE5iB5Yu53YKSg9gXHVAKaXm8HUWWTA",
  "key26": "3nrywHUBi4qqrka8dUxxzmajqFUxL5kwjDP6gkRzfei6AovxPVxVcXuuqsuE3eMpTjKUWJyZymHMHgh7QsNnuiYL",
  "key27": "2kbLsXTdRodiiaiXkQ1rJgwHp1JxFQ4EmSKDAwPLyMWpv26UxgQ3XNLxmwSJ392m4ijNqZsqDsdp24pj9Eoirzu",
  "key28": "2kXqqCqSoQPqTba7jiMvYmhAZQNSgR48kbRnYynXUagqfwezmcy4f3Sh97y3gRHfosMaUcYPt46gVfV7LbnYRnZZ",
  "key29": "3qH3JQaEbir4VH2j6Y2q3BLdgmQZxe6q84GzRe9ebuuYXb99KSKiFWBjKoHMGSJXGFHojWZdPgeFNBQJyaiY2W3t",
  "key30": "h2MmjmUcWD2L33HvoPjeWvmJxFi8xtqBrUhsVFJjiwre3g2nVZ2gZjaZqPiuLSGstEiTz7jcLwDgikXNQhdHyGX",
  "key31": "5CtXFu44wco9FaB6j6NrsWSYhvrwydWwMQoh1AQhxsFo8mNnm9CdNx2f1AEwJgDXFaThWodap2ZoZ5GyRqrCdZy8",
  "key32": "5bCrqzFcWmPrpQoqZu21SdwXfQhLrNFebCxuPBZyVHnYyH8KiepaEmF56QCs9gfBd9GS6mEAk5GUf91DYF2QRmM6",
  "key33": "3PRJL4QjgkaxDXih76NiKroc2HwKnQoUuvuxBDLqsaMD6FmNvQnzGrtBeXYUTsaWaWWgjQEeqrLEqouwL5NDGcik",
  "key34": "4m8M92GwKN1i8N1KEVtoMuEi6PhFQLhw1LxBrpxfBmWGm2FRD6rmkSoHuQnJZxF9jTgASjwnYiguNHHdypC2M8LT",
  "key35": "5ifrciZSoAkidTPzLVDoGdWdrwoSjt7QMQEvpNHnqUieE18UypQPigoK66d7jnDm8WrbjZE82HsJxkp9DGq9yRx7",
  "key36": "5cVPS6j5zDnKKzEkDFTjqhFfXiWUR3jpEjoiSxpnE84tDxzmUhadz2uaFMTBjVia6XXdXN2CmU9RSq89GJYx4WGL",
  "key37": "2KBeo3MQ1MKcgUVUGJdMVmrYWvtboi241uH3TYcpPVi2aTnJs1nUCRaY3Q1bpABPvyKFnaFgmyL3obnJ5CqmcoDA",
  "key38": "3RcJEiAqSDGrKF888EG1Dc1thDDi5nHKewdnssZ6fNjXSKaZrZCwnHHXWwJVbmgt8EEagD8VhrZtmeW7FnkpJbXG",
  "key39": "TV1Cyn48r33F6hiiRaPKkduzuUepcYcoJFCqzpTT7iH59UDAWvam5mGN2jXpVcfyD9yqQgQkpYJHRVBYDbwHjj6",
  "key40": "5ZTtreuAbs1WV7KjiuQCGZJLycaWmQJaCgAN1v8rS5u2Mch1Nb9Vdbw5oBv9xBav5mJRPUZvcuKyhut7wGiC324",
  "key41": "4bDnRSPhCWyW8Q2oq9VVTUBvmM6qNXWSM5rC5MP3s8rQhbWttFs7mx1VrUZqAjK4oSehoDKdsxVAu5bXiM3tYRGx",
  "key42": "66gKY4MpLLpjvUSwZ9egV7b2sYetFDzVkEJL9UwYHeySxehiadZtRHi9HSXcBZTbNaPEm4TJkSpZTq29vuLoXQfo",
  "key43": "3y85NTHEiv5Qkvym8R4MATWwQDJPg7oT1FAe1LKEHUwRQ1XKrA7XhJLejJ9ntUJqQXqdUwktFgZ9dvXT56jWneW5",
  "key44": "3sdmT58bKqx35WkyJGzGArCHxoRjRgjnEn6yETRds7jagcPiuVnKoUypihBQWFuYaxQdC8DMNxVDTPYCmkxZw2Nh",
  "key45": "4biyuzAM8WyeaJLLLS54QTAWb7wu6YAmy3CuwEXptm69gnCPueqGzGqcX3iKDPVjkLUCTZQiZyhy3bCp9vtuT7vq",
  "key46": "3WG9U45Uk6fTBvrvsUvXPQwXWSb6kyY3gi48KiRJpzGbpe9mbAUGAKu8Jm3ZVNxcSxHVZ1U7WC6FUNJZP3h4E63n"
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
