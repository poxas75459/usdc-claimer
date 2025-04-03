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
    "yQH25aSqDr1vjb6n33NCNLoZCWMhpaLFwEJXsJSUxatHXwW5FwsfBsg27zFRbknqgeGj8Cgzd9XAgTyNjewNStR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gho3hKh8giZCNjMNDQtGzu3rFfWobkh73HcmAX8cwEYjibgWiqMBqUjq35NVG9FJ2pnegQLnNufefWeqcPaBFhK",
  "key1": "HTLmgaR3K7N1QAEuw6DRsAErfvjctEcZLhqVZwnvhDPNQZ1JRkUahimUUruapJ4u7sM7a1FaJLeRhdjnjC3b2et",
  "key2": "4E2oUiHzDdfjmbL4fy4bsGAjnrQq4mP5HRzJabu6iREDsy8JRd4jXdXe2uowXHnBxc8jh5DTEw4vG1QXfhdUYRcJ",
  "key3": "3dGCpxAydHGR19QQH6b859AapG9Z1DjwVafT6BkfN2wuvS83vGnGshkhzL99KHMwCkw1xf36b5qDMaQARjJvkGB2",
  "key4": "2KL5T86pVzkK6c97gTdVJjJZ2SkhPMkAFDzUXRWcWUZJWd3Gm28tREno4j77x73aVakc73obFs5YYanLKohpoTJD",
  "key5": "dJMKWdhzbBVE7GrU5TxZJ1jJy1UzEAey7r6YNprPhhNfBWBk7a9jGiDVGU5idXS16Arni32Em5kURgKrDepesan",
  "key6": "3xLSig2QiFH7ks9twyPuxWorxr9a7V5YyS79kAuoZGK9pUWn6qEk4XZ9549Mw71Qyj6pr3eWujP1S8a7FDcfToWg",
  "key7": "2JG2kTvsDpj6Rg4JgL6B8a7pCA1rYYsfDtaGohCE6RtKDh23BtafZewsbHv6cRcgYYfk8N3qDaWFXSW3YJHq1aDA",
  "key8": "5wkLFxomtAqKXWkfTW58MG5hFZPzszC2jTH9yHShkZWXaKXvkpAnGQxhCAPzZvv8nTg5r4nBJc1pC8TvznJa14hG",
  "key9": "3QhxXp5Jo9DbCd6Pi3VU45MMye4aXNXFZ1w4HHx28yJxVzjoAW4VGLM1djWVfmeTkjnfVQpvvmmb6U2CwCxafoyS",
  "key10": "4zKyF7xqMiJ3BRgAZYtru8qhZp1GayoAYUcRBKHkkUwgv6qKxwwGxrhgkhxMSnsDYKPLJpCL1M3AszN2Y1ia6JPG",
  "key11": "4Rtxg9GbFKztbahyvq7GwiPBz6JQ9RkcRw6KtB7mzbA55EJiiopMwbAvhVDYjyqmN3UwTwWgdNuWFcJoGaYBDidm",
  "key12": "5jvZSvdDFLF1iJTqKr7DpHbyVurHyBz5fZ3N3xFJe86XMJfdvy4sN3jmo9P1hcGTeQH158aD2ngFBWyKgticXtZq",
  "key13": "5MepW5ZvozscavN2D5y25BzR2qyEw85wY92YLY8AHeiwWUjw314qNZL9dvBTH5shKm4GEULf6JyhNb9WCXeqfTN3",
  "key14": "4aojQ3RBeCJKRcn3WsxJm5KgAhN9Pzxsaa74VqCwVTuGDpyghEc1gZNe1tmJYYTQSeyFP2V8zLnbomo31C8XpESt",
  "key15": "caWi7xXi8PdLKzUdtwPAiY7SBvQByDHDtngrkVgb4HH8a1ykE1fsroias8UWGpVNQTW1xGUt5dEhcY7n574zfzw",
  "key16": "S5LuSVcSHFdaNigYgvVirLzeHG8CUx8ffur8n6Ygxvg2AACpYE5uEXzWVwiWBX1DNGTrcRgzEiid7uN7qA5WLeM",
  "key17": "3oTcNdtoPkSp4wN62QLCUXjhmU45YFjhDqznaFBH9XAeEN9hwXgFQuBKfoY8pwuHYNBDZ9LYNC6kFcHHGADYotXR",
  "key18": "2sr7KmHjRtA3YVEJ1hnNBJSHoTLGRSH1vJv7DfzKgNLGBkfnLRvSUAKgAWbi8EfkUQsTDyRUJi12smM4vQQQPxyz",
  "key19": "24j7EfwX6keia1DnJPer8XgkTXEafvzgybF9rATGAECq5o6KUPobLu7YFBEhwcDNQCtt1c4KB1upW8ykXHsYPDiq",
  "key20": "RpYC7JaPMshsgR9vahz1awXkCh11bTLsP4whkYcwF8GHaTqE6wMgvc8URia7X1cvr5Ai44VifaXso1f1KEwDX3r",
  "key21": "67n5yipxuY2RWuV3kYcXJhvYDvUt4Spxj1VoAHDadiyM3ujSoWg5EmztXdBxafYvEPMSqPXjGLP31Z5jgN1cPNZ7",
  "key22": "5w8XVKThBtntipT2wMEB5yz861KwPMDGdckayGoP8zY3EhbsENf4fDiUNRymFeyKvQhcncpZKdeotJ11QQwZkbn1",
  "key23": "3SRyjNS1cHiJP3bYNn1oRaP6zkFqzB1N8SSLKWscfMuAwYQCAjowVTEZuUBMA4w8YentsDQLFXRTBntrYBrxNgaM",
  "key24": "5UFjP1JGEEHWvSvkn3vXkcoNY88ELfeTD7WkXhJvRFcEbZ8xMJHHbPxw1jZi9PkDNstp55t2YEdxLrXciB5VJYMN",
  "key25": "5x4henS1h9EfxdH8MqXuRzJom1a6pErJeHo8MeDFwCTELmS2Boksbaz1GUx5cCb7fjzS3fzYXDe96nBRAVibgtfe",
  "key26": "5RDuPyKVagsB8W6YAyC8DvxCLKwgvvBcdNjm4jKkt1M4dWZZDPoo9EzXM7sWwio84TVqXb6TDr4Moe2Xj6Ejxwht",
  "key27": "Bja4dUKz8QS4KMp2gBTmxy6W3DGemMgnoyEYsmRR6kzND3TG8G5MKS8mtH9oKzy7KTpA96zymeuUqwG599wXCqG",
  "key28": "3rRJdsX1YZ3F7wCgW8SLJWrizBwc6BbvRs8cBNU63oAYS6t52BuN3MGjFKE85zEoe17rfFUtxMueoAuoetoVeH3P",
  "key29": "3gy3kFph9bgErFDAKjv7gogjzqYbar1N4P5SfgMuudXfoU7kcr3VSzFtETA89syYb5vX6yHN9auhTnKR8d7TWNga",
  "key30": "BMcgbUVT7o4CmHNzPJS8bSuccbUT1QLFucmiJmqc4wBRXsGLXvr7SvYJx2ohPDK66LCYJQHEKsMtxMG6wRYpmWG",
  "key31": "2E2uZU7iHrx25b8gsDwTyjG9q7QhUE5qMfwN82QhvFCuGFdDgEGSxUynnDBs9zVXrpYDd2m7JY5xr4K67YwYz7m5",
  "key32": "63i4vGuKKG68YpmX1J9jC99U4o2NTz1y12p1pdyCsojTHxPtPFCMGLbnmVGGbvCxfQQtmduvsMpw9KArz8mFHbm7",
  "key33": "4BEHj4YYrAbx6JRTD8AV1d5KeSE4HsxbPfAkXCSzVxqZde9VLNKenCzAM6gbHk7KqSvtN2GerCiPGpBAF8SXAo2m",
  "key34": "4BmFe7pGq6xpGtKq1EgvYaK1mMtPPcP4tgyPLQSQjNZzeMytqcnU8v36ErMtFQDexCW3bbRCvqGiERyXCM4jRAQm",
  "key35": "aucvJQ1wQJGQAiSSA85LaEVCR2taPDkvRSywGtEfsRgaTSRRvSnbupCVKmPSvn4fJBbbf7DcZQU4w5zT6E8KVSh",
  "key36": "3173VXTdoUQ4UXhqzta4oisBveZKcsvS2WKeYzEBU5CNXTJVsuMPsWDGPpjAMkEWrKWacz7kLarQFG12Pf2DBh5W",
  "key37": "2yT2sYCxji5uvdCwUh6y8LJKSGB9eaSFdhsMt2Qcrij7kguray1PnKFsBfVtGJtKnenrnmkbA7mpnsmRZRN2tML3",
  "key38": "4Ms6jktMWHyKQkY5CpCiRniTiYEimQRramZsXP6mTYMkbggRmBRyeb75HTJBA5WZf8TaNaVUSmv2W2DrXqWvQj7L",
  "key39": "4b389pGq84ubf1rM9QLAskeacxRaCbPEqgXWEuU8XVZSgAzFt5H52kJhRSkKQRo9qGFvJ2A6XgS7G6WxKbUp1TBU",
  "key40": "3BijVVvUnZf4BvQzMUzEWY1HgpPRE3bev2jLQkAChnBYkbgAnfZKsUKAoKZCZgNjmHH47yHJvUs5Tpoe5QzD8DWn",
  "key41": "sEffWDpoQgDG2v5uGsdhMHo4V3G2PfsAvCRn6ASanFnPPqEQtHuJwaah9rXryS3aRbMK3cSbMv2eHudXpsdjh43",
  "key42": "4NZCUcvF5fsQqR9xhiok6ofFPTDSxyXKn4dRyrKryiMCLtHQtRwoNAafG6zaPKfabJwuC7FGKUM1LPh3X36SnUig",
  "key43": "4w8vPs7f4yidvy6jhRc8ZyLDkpaiBhCj67mdVrHETso9HH4Jo1FmqaW4uWrM933dHcKU5gxK4kajwmojBppMk5TL",
  "key44": "4xHfsYsC1Nwih75JvsR5jjQbftoGpQaLnyt84Zkeu6bJEdK2yknSQoEhD98paHkzm4f8cXiYMxvexZsnvVUaeznW",
  "key45": "LvJYvFURpdPYuXRJ2fcBfKjaeLoaZqYVf4hpFoiGky4KPccrcsFk8QMAr36ALBbPeg98isEPnMJpVUKRRg5teG1",
  "key46": "3t9Ppvxj2g1fAyifxYNbLTQoGh7tvnvjx23eMm9m9XYG5ceQ4wxXEMBDZfSjW6F2YSjiwN4LbuRZs5zbdMBSPuM6",
  "key47": "4yFKbDL8T6TyiQizCLGqcvhPDvFz98uQVivEs1x9wrF5QneepiurCbR6LfvPqxjkEeFC3tNdxrZeXgi2Ca4cuHtY",
  "key48": "T5uUuwmFN6jtyR9tQpAedjpr7wn8rU48oJzViRER8mG7mKe24TRFTVoLK72U8HQGpb8cHXst1bu1vFgEY1fRAbW",
  "key49": "3hgKLuSG9XJJHSbJbtCq4TchYd2duCM9L4PMtjibsG6ogdNwLwAVEqCZFhd2YfxrFzB7JqAw5XEDP8jhedhiLQkD"
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
