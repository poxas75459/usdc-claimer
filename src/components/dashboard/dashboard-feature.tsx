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
    "2rdQGWXfMieKCrLCAzd2CLKrgc9oUJcPsNYz3eHPR6dNN3XNxc9SNUc5QeTZnRQLxsjfmpUC9biUoRJBksdST6Fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YCgDhNmssaJpgU83uXDy3LBNbjaysi1MvKxRbZ1DS6T6VfdgxPVfCC5aNLEB91NNT2ehbis8hjGZQaJeifDd5a8",
  "key1": "66J1Vve9U5rzkHAurU1xWbUPVFB2avGbsskYovxDooVQ9f5JnMsioUB1HQAyxjzy3kcWWaMp23omcNigcyZSA77x",
  "key2": "3MjLWm2gcrhpHcKmWFneQmeisDZJ6kon1atopVJgt9XHrbRkTsUNXnBbqf1xczeJXLd4CRxqRdVF6AT2rpTfVoFk",
  "key3": "3T93SLsX8XpG712ev4CxRSRNdD1dQLjLM41dQbo5Bf4qjAUoRkpArf8A8UzVSgF6DqGJJBXkJJQm2oCmDfg12joL",
  "key4": "MC4mqE5VKt7sc38UTGrit33J8beSYJUHN6EfU4cKCWAzggDyZxdyacPeojcfQmV8F9j8XHfPqnNi3ozRFpGz8Mq",
  "key5": "4WhmfDgdG12xLzmuy2Byj49eHNe6zhK1JAGPTv5JexW9GZvBLcZQsFZ6zQpxJ8qh4gEzt4xJ8SRFP41wczAZNDy6",
  "key6": "MZFcMSxc2Zi5Ee2TBr7EbewwbiuFEUQVTQGSpPwBcQFKdzpbX3K97GeoQiaMfPPBjTQF6fqoi73tqBR6GmiQUVX",
  "key7": "2xcdu3HvkDnTgYH51aBYqhkTx3mtubEkcAx95B9Gp24RuUqMuxeySSkt3QuLp8TResfHumrNAq1fVeidh4uMKUbo",
  "key8": "3EXnmPjUDe65gohVKNGgn47ygc29S6Ds61bHxEUhzXpunoecmreaf9Ai5ESA89oMSBoniPgdRtiy7Be5Fne5kQvb",
  "key9": "28sx4DkPeeyqYKLNUPaif78dLKUdgaKxy15PwhVuXrGNqX9Y5SUgopbEENAEcDz9GNVgrpwhkajgYym5M9Jp9m92",
  "key10": "35BhhHZGojdgVXh7HDNu8m1psiTLLUXqe9Dh6YinpR5MP6rsJYPiAP9YymjFrRv2hTsLBXero4u8gTZegyaHyqDa",
  "key11": "2zV9hoXAygGKjBgiv56AFv97zJoyDkJjtjURf6tkxcFiDQCkERH9bL6VnP7RvMQckTXVEZUUF2U9yATE2kp2pJs6",
  "key12": "2a8UXCcwfB1Dyg63jy6B6mFocqHeV1M8KMU5S5TU8RFf7mpH4KP2bvUU2BRAhuab6EbxYfNWniDQxsdbowNwDW1x",
  "key13": "2vwaYFcnv2X2wPgXqczkugPKUuAD7Y2WEpDnNRgrvCHvPiQGVG8ojGCuCZax9qmTcqeUK2yuTKHHyfvcZMM9y5kA",
  "key14": "5Z54m7UKb1fpUkQiNY7v2Hr4dA78tA4xjsye93wNi8VxbEfGexBgkZLSUWBEpYK937uGaz9MSaX11oqNnUfvN5u6",
  "key15": "z4RUQJ2WBitt1PJN5WB3uF7k8p39BhN3YXsaa9soaS7PBvqSYNr547gJkMViz5dfPefog7RtyHtE1dN3nX4p1Kf",
  "key16": "5z3Pban8LcsvzQmYg6mdVkQmWCPPt9o8bm6KXdSUp5SepYSrJqYxenC296Sk8iDQfYaLohoxVsAZvtH5d65ethh1",
  "key17": "57CE9LGkq52gQp5Lu6Hi3zq1nFKAvfVzLxrPeVn7USPAVSeAFGzagT7URYcY8HVLjcCsRvhsUinqTaxWp1icCXba",
  "key18": "5XTQqEyFLz3zL1VGN6mp3L3EygnB3183QLXScAva7FwnKZgBskSY36kawvBc73mjHD7tu8nHnQyYkNQPz3w2zFyp",
  "key19": "5JcaajYSfnToMxMcwJMfBtpoiwvsy9GWZSuB6Z5nhk9TfUmYGAKemxKHTJLKDepiELaCZorf7w5j7kf9Yv3JcY7H",
  "key20": "4cWJSbwgGjmR9mqU1DoMur9gPcLXxLeQAzMekqce84E6sjfFZ4LfqLaNpD6SwSmirwE7mX9CqSKCDMdFCxpJjDXy",
  "key21": "2Jb8wYRGZDY9Hxnm9SqzzbjhBpXLc4WjAqphD8FpLyGp5s3FGC73KSBJsvsHLh2x3h4yx7CAbyBUxsMC7coKeP58",
  "key22": "uLBovKYqQN5g9VzJbY51CRksAwZn5L4Sorj1efdeAbGqYsx1xbo2hwh5vBnx4yT8UY7QBK8MD4SPosupK7u4Spz",
  "key23": "2AdmtYHsoCShgCoVpCtx35t1MN23PngveCe1zUr27VbBg2poeAaovyT2ZDKCZcnd87Cxu739nrZj7MGhRRWU4cEh",
  "key24": "2G57nb5xRDDpSJyA9fKZ2UZtUCgyzghWMUEfuQeHgw67rTaSU5gTqWvtdFjZ5kYsdhpF5fijBWaEDsDvwJsixzJu",
  "key25": "5r1L5m9nbLQJLWbzTG2ykzB5Vry26Mgpk8VC8apryX5BBYcADevcDyy36Ej3N367XL9wdNfD4qGw8LfdtHbVUxQu",
  "key26": "v1UWUzmUKRFNKj3rUAdS6pgsQiyk8EeV1xVcHFYVwjWsBGnv9mmE7WEkQ62W6xT6bisvqk612nXHn7rXVmFh6ji",
  "key27": "DTfJykaLbsxtpsB4mtakwxjjP61vUwT6A8j4p8iR3wNLVFmsEwRUQtFGM34jCmBgVVN4sF2aY3sW2KxrQmq8AQD",
  "key28": "3RVPUdKRBjiWTqq4A9WabxF6ZeDnshbUJwKPYSTa4Jfu1WDZvEeeDxSkd5VcDr3ch6EFZhZuRtk3PHjLcXftEnEn",
  "key29": "5tx9m5yM2WkuUP8uJramk4XpGdUUc244SWhKgatX7aFuzbC8f4DwLFPP2omXhDgupREYy5MFPUcjwTfHVTJv798W",
  "key30": "2gEQghBhbDhTJK4TFt6ZaUMPsJVY9DzZ8SNxG6Z51uDE6dEa6VfiWoJd2bWDhcJMkGaZ2CvRKemRdW8SofoYKGro",
  "key31": "t4sBM9PtcVXkfa8WhSkVsyA2zftv5Cj9LdUSwx2wY5pizpBaAzuQQmsW16PpKNfj76Y6CtSdU2Qqjzptnzf9oGc",
  "key32": "371dgNpcvrMRwJ2rpGpnxoDFnhSacUayfkwFpqThrKbaKynnHKKe9H2sMMzSwiq7jZgY5CHHk6t64ceus6Fq3My9",
  "key33": "4fzC12ye7ujuybRMRLkAukVD5KhWdxzQZjMJ6XXKaAkyufXPu4sTVMHQF3nUjPJyGNi55LN4qBhghtPXA4aM9pbZ",
  "key34": "LsKn8iB7JY4Xwt5aNZWDQd9ZU55hYiKsGSX9cTWxVXU8EUppcnsouqoedrbH8hFXG27xY1drsse11PN7YKtroUj",
  "key35": "7BFEVPchwHnqwSsFvCSLY83EXRgriBknS649aVrBZ2QfpqJKkon3nGh5otEGjBqvUdiFUR3tNU166XhtGYyrAHc",
  "key36": "55ECHWrMwbtBDgTzw7xqr3Q1tA9BEgusEoutzBGZcsahQ9TGTKCWM7i7xQ3Ao5SBBn92Xof7ee8jk3TnQdMKtrNe",
  "key37": "3QU44gcayCVjRFYfEp2TVdzfbVSdFxYNUL8sU9S5Cj91KUEXLpW9j4hcCH28tm4ZuhGjtRjsHaGWwUYPfzh49JrW",
  "key38": "49DaditfE1Wxbum6zkdW4xT8wPB7qWsG8NAe69RCacDooz6fegXYywWcnu49GYNz5q45XeZ3bRye2osANeAauqFF",
  "key39": "5JSEcApxo6S2QvZLXF4ht5oicyRzzmsjWYfHgMcXCqmL9PCiPC91qwGcEcxQcDwTTQzLx6BM5HnKbosrRjYEzKmQ",
  "key40": "3BarprE7hcSxGGkyHMpKt5CuKm8Gb6mrhmp8DLSdCo5SB4FdczESVZ9BjkyvtiqyqUMwjs4NsNKKq8PoiGnqsR6V",
  "key41": "2Nwz4x3x85SScugHircnRDUBYB8hrqjhtEm9WX1oSQsoubkTvuBW1VWQxinYpRDV48Whi2TeaQvwLUmwz2S2UuoC",
  "key42": "5KN6A8KnYdkb2LEcbNLFRnVAJ36AwbA7ENBt8UBSBfzsjDUw3XQBpXBP2PJCoVEzA8UhWyF8PSNxTqHzLRBw3BtV",
  "key43": "4hv2N8rrFKGQYAxHAx5hKidsQGUPqsnHLGQUFbQ6pU3q1FNPyC7c2jCk5vuoq1QAP3DCWmdBiW9TgVXcvUhgxdDC",
  "key44": "23F4B8E7yAibL9FbEHQb9F7hNXcPNRVajQ84gECpcxygk7M3wjRUSKzoqySfu7zSXvv5rXfXTuLD64GAjbXERhxc",
  "key45": "iQmmji2K8cxEsb5YX3teoEh2wvjXzYKbQLGPX71mD6AHjvHtbRi1KGqRyYgnfy1JdbfqFBPUbY5yhPQeR9WzG7S"
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
