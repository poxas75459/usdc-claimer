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
    "4eAAm4d5kXKYk94UhmVhCRqszyFNUvWE4YdW5RRaks8fwsfmFA534K8F2SCt4oVnosRK2xU6m6eNqcrc6pUDnKqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uELLUrBZKDzJLUPpXSh3keFJXufJiBCMJCn2EPbjBPjyy7PuvoNCTFDGCgxnTtKTrXtnK4ZurSs7kKSJN82iWt4",
  "key1": "2gvtsLR5GQkHAQ72jEpxNcSxDECWeiGxZpks2jzfDiinf89HtwMGNeQuWxzdmW3hjbs9GTxzF9sUZ7MNkLasfcoV",
  "key2": "5dkbhoNxCxaQPEXbKpjUWinDZhm4AUTM42Rr6ZyR6GqoARsj57nGHQ1oHxBxfrX1XXYpGf8VA3Hdh6j9U822akG5",
  "key3": "5V8Froz3w78cY9BxpooA71xyw6J5bHpJs85yRsHwTV4wvL8NPVtkp3zhMMw2qmqC2P936azNDpqBJ7VKLFFiwFLW",
  "key4": "5FNiCBjRSR1KGguFw6KZ8NTJwXSsZ9kWBJQi8Vwfkf2Uj2AvYKDfyS4kpvx5KLEEnvr1nSQxUzTAjJu8afahs7hX",
  "key5": "5891vf48CVD1hmMhT1Dvr7bb4LfYQdzPxS674KFLA4ZGpm8fHuTdVfn13moCVS2XUzAcFgvcufXURTtziTC7T5sY",
  "key6": "59TF4DnBWZYdigZjgHVwZTnQNmetF2VCgNNH8PnzpWQoVkVxJU29xdUafVx1N7BnV3RYo8thWNxsnTiTdJMEcbxj",
  "key7": "2oX9XDopCWyJZWy3DoaW5sb536tycpJ7oM4AQzfoNLb1uURojKfcNxKRn88p7iqfJydbg1XRwpr4chdoomi5tVY2",
  "key8": "4JBowfBehZB8xLmqE9vFemWWoHJRJw5CnLeRvxy7apuHchqDgeQF2TETJLnounf46QLgAyAUx9eBFz4gSpP5Wi55",
  "key9": "2xLEQh3ir9eGL9NabuXHuW7BvdUFArWfnw5qUTJQ9dioJZK554JXCG1SyN5spdHPic5R8Vjey5GuxuCQgwtkonFT",
  "key10": "45GoD8Zu2SD75UVFjKpe8LkWNh32eaCDnSPHpW2APwzBmdtRHGfMKowgLPP4ZneNeNs3KgyGvw2rNTfSdBLwtjEd",
  "key11": "5r2BeQTZ5nY4CQ1cWRkiN8KyBgQBPrASdifDif1ikym3h1w2mKr4NjiYbggsYy7xY2hNuCTgTwLWgcotQs8xvF27",
  "key12": "2RjwBJd2x1FVmi9GFqQsxWLNh2YF9S62xwJZtb4vVfweh4Z5VWtmH9u9918WUkYLWgMPu6xnTc3ds82Qd3636Q5H",
  "key13": "2GVd6VWB7nxyZ5iuqjRQHY1L4WDy9UyiNvvsfnAzdfzPMzUsXiidUokc3hbJn1W4ENWRVHVGBc9uiSb2QCKwcmtM",
  "key14": "36cD9xTZWqcbkCJZPB8hL4AjYwoQyvBC9XXmLk4xepN8isij2kgHT6xxSNrnVvXjYzCmxM4CfuoV9GxPiu7rTTvD",
  "key15": "vXaFFzErwiGLAExxF7G8Kqzuqt3L4g2ceY9WunYtNB9jT78c52v2ryRWNM9LnLyacfaLTmZ22Mw6uaftc1UEb8R",
  "key16": "4QZ4zYZ7g4T2vpEG2WKBvPWvk2mCAKc9gt1ukuG64qNZcU7QipcQGUfBqDqos6yuJr87p9ASQCh34D6rM8vKFTZf",
  "key17": "nePyF7sF84HHhWHxBy2DxjJWYrdFSzvvoZKMH75FwXk5jqyEYdrnjdhnF7dRfgW5iY6sipcGRGyXhZLJuV96Hcb",
  "key18": "3rGSwQwoUSKVfjTnEgVhrwbNLSqojJJXQn86ViTJy47cQaEBP9nv5xzqQNwBHPdrdn5W5PXgknBW1vpjpiLokNCE",
  "key19": "Mx7QKBB6oxRBHk7MrJV7LFCoZSFxW47BnR6cJJRYeER7cxhMwJhj7cgJHpek6rXkmBa2JbbGFMH7CxYNNmaNdSk",
  "key20": "377cnwSbD7fTE8UEprrGCMjhMkvvYy9DuR9q98doCeovporC3zYCWJBWS13VBFhbEUQZPT2NAciSTPYt72KRmJYq",
  "key21": "5RndL9AKoBCSWxdP6Pua2bhv5cQvvLJVHRdP59SL6Pyq49hczXBDn1PesGaxPQoMHoVrtHsgSFndoNTaFNsVb7yZ",
  "key22": "4SroU1ZXGQm5An53CpXnJybhMqDVEhRDqZ3Tbt3j7rWc8CrmerjVj6g6qTjCJtHPWJG6vbUanD6MqTmXhBwSan7V",
  "key23": "5Str3XJE1HgdsfTNWpviBKBTsXCVQiWZrVQhASw9KXvjU4kQgsmVsJwt7RTkt1yDp6dnANW9js9a75H5JWMHzvKJ",
  "key24": "SLJoz6i4sJco94zaEpAKo1nW9BQwhEhPjg7E7869wsGDT5M6yfK7EVrpecgnjF6C4FXKqMBtGeQ8UGphMY9SvRR",
  "key25": "3puBX3htTtQ9wMd2vywqHvk8edicgpasaegjcMqgsXnTArbk6EwUoFvj8EkLAJrNtmV21ZZmTrqqPr6vBYC1EXRZ",
  "key26": "4Hz5gSVBQocV89gjGuzh4H1bZ16i6kuEw5AXchW33WoNeFjjKNWSJyaAQuaoiKMZ1cf3fPuHDJbmUFT7jCPGQiWQ",
  "key27": "4tQzrqEfLg95ypKChudqeWoQu5rGDo44n9F6aMwT5rsqjRTdQib4Y2fiBViMM4B2ed74fH9gagUh8VWAtwj5XFZi",
  "key28": "5NEwkSHrdXrhjzGH8jSAAn2VxdyQeYrwNFK8crZsZbgn5tL6pQJr4ayk597pyApUE1dzioSxFNgp9TGT9uYr7YWw",
  "key29": "2xQBmsr3aMTNXdacgPMmqdWZnYkyRwG72ce1oAkYP72erNe2eVcrcBA82CqCcP9zgvtda5t84iy2B8pBrAAxNfqS",
  "key30": "3vCycGaM5pR3Dzx9CzgRf4j2GHtDEUsYe529BdJc5utFCkBPKrYVvjw5sq1FzhGvZYLm2bPabUc9VeHDzf4PTeMV",
  "key31": "3y4Q4NhKBDqzrTH4FfzGh65rGZYE78nAUyhjnKNmypfN1MJ9LXnNbmH4NK4dLAKi3V2ajmRFSTb6bACGFMSroiEX",
  "key32": "35nXYBZdPWZ9yQrJxUuYnvqgTm7YSkECQHGjeEwpN6Jb6JG87dCbyhBA3fm2JugYbdzX9ufLFxhC3QjkshC1SZgn",
  "key33": "2fd7s2mUw6Q8vSpeGgAjwJmzyD9Krkmp7N7G7jt9aWp3aqRyGebKMqQRjBAWwkXLhtu9ADqwhBwkPbWGnu938gLf",
  "key34": "5E6gmiQDPbnBum95myVtcS4PjpBYSew5zckMWuECyE6Qb2KjK7FK5VbNBy5JueuPybsSn1XSNQpdrQrfyeExTxnw",
  "key35": "34K5a4hMaeBESJPecc89FuKcqhQLoQm27iKujn3eGdmuUWtWdnLbUhRYBVsdB6FzfkJ27toZRmVEx8piSb8Bi4Xj",
  "key36": "21MvShuycDUgfnh8ygf2wCgkPLeovKbe32E7JVTz1CZNCKHuE4yuBbx5AL6NYPFb1J8KERCdAqAuCnVMEKtDbNVW",
  "key37": "2pB3ztF6Muh8E1xBz6FL7ALe4Ld9hpgQvKxBABdWcQw4uNUeBpjhgxnWUMsz9PByVGcBnAtVGfCCvDMd9TM9jGa6",
  "key38": "gfwnDEou5DyhNRB4PT8uuUQrv1SS4fC1MwtfD1zXZFjKbFLiJRpfG5mDHpPVWA1bzPQRzdPt7HLZAPDF2t4qxWc",
  "key39": "4xNQbax7vVeNVcLH65e3GeqZ1BSpPye7TfGLxyYWeo1MfdHwAbYWDfcLtpAYHDP1ek7bzJ59QYfza4REBvM2uKwU",
  "key40": "5sSNm6XoXRR6ENENzRXS7BgN8zsCYzo1CZMjJdRRmD6YjieEKtikZUzJPtYY7ukdHTQfsXqeJuZcUSUjAX9w5rxe",
  "key41": "2kGv65Bfyu9xMnk2zJpGNH8RnhyP6DTSNLgbcvkadzpDrPZF9tR1iBuXXUoijEfMFJPy5g3T49x8drL9UjXr6DAT",
  "key42": "5Qrs7q7rX25pkmqhgTEE4UNUjzBABfbZ2D6p6b5NKMwStz7fhZUH6koqdjmjaux1qSrmxNBaCfykvJgrJZsTfCJ",
  "key43": "5ZcgmawSb4pn645hV7T8bMAMvwoLzx4yamaYPmpKWYV5ovmUSqQE2zHUQ3xASXVCbtyXbALqw7aXHnpcYbG9pZeb",
  "key44": "56QNmtVNP26MPNYAAue6ZRQTnfHHusumuSsSRoBpXQiwM9NACUeCA15pdSqARNJQJHGFh73pWVUEygvt8HVALdu7",
  "key45": "4Kd3Fb4MS84dZL9Yqn1qQ2GQTLQUHjxUsgRFsRp4V6ezcQxkuNJYfbSNmjrUNdryJ4Ps1iVTcQL9DgwHkZMq8PGU",
  "key46": "4thShAoyGwesdiWzEDjHrA3cziNeiNLfTUQht8w6xFqqhwojNcdJBtJNC5SwdWghLMt8Ut54TJf2EnVFQamD6533",
  "key47": "2imZFGhke1pB3usVuyeB1u31NczkyGM4n4mgqWKZCTsabWY74rYQ8JYDFHKxm2Mf5aTsryj87uDeB57Sr1Zvo8qY",
  "key48": "4WvQE1186UJ8bK5UqVCAYesNadFmmJksrUaMUfyZE9wBakMvsAj2ZBXdLgU8ff8AjZmgo3fgxXTsYi6hhAYtq33X"
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
